import React, { ReactElement, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import loadable from '@loadable/component'
import styles from './Menu.module.css'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import Container from '../atoms/Container'
import UserPreferences from './UserPreferences'
import Logo from '../atoms/Logo'
import { useOcean } from '@oceanprotocol/react'
import { EwaiClient } from '../../ewai/client/ewai-js'

const Wallet = loadable(() => import('./Wallet'))

declare type MenuItem = {
  name: string
  link: string
}

function MenuLink({ item }: { item: MenuItem }) {
  const location = useLocation()

  const classes =
    location?.pathname === item.link
      ? `${styles.link} ${styles.active}`
      : styles.link

  return (
    <Link key={item.name} to={item.link} className={classes}>
      {item.name}
    </Link>
  )
}

interface MenuProps {
  enforceAssetPublishRole: boolean
}

// ewai removed beta below:
/* eslint-disable @typescript-eslint/no-unused-vars */
export default function Menu({
  enforceAssetPublishRole,
  ...props
}: MenuProps): ReactElement {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { menu, siteTitle } = useSiteMetadata()
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { isInPurgatory, purgatoryData, account } = useOcean()
  const [showPublish, setShowPublish] = useState<boolean>(false)
  const [showEnrol, setShowEnrol] = useState<boolean>(false)
  const [showHistory, setShowHistory] = useState<boolean>(false)

  // Set menu options based on account and enforceRoles and user role found state:
  useEffect(() => {
    if (enforceAssetPublishRole && account) {
      const checkRoles = async () => {
        const ewaiClient = new EwaiClient({
          username: process.env.EWAI_API_USERNAME,
          password: process.env.EWAI_API_PASSWORD,
          graphQlUrl: process.env.EWAI_API_GRAPHQL_URL
        })
        const canPubResult = await ewaiClient.ewaiCanPublishAssetsOnMarketplaceAsync(
          account.getId()
        )
        const hasEwaiAssetPublishRole = canPubResult.canPublish
        // Menu options change depending on EWAI user roles
        setShowPublish(hasEwaiAssetPublishRole)
        setShowHistory(hasEwaiAssetPublishRole)
      }
      checkRoles()
    } else {
      setShowPublish(!!account)
      setShowHistory(!!account)
    }
    setShowEnrol(!!account)
  }, [account, enforceAssetPublishRole])

  return (
    <nav className={styles.menu}>
      <Container>
        <Link to="/" className={styles.logoUnit}>
          <Logo />
        </Link>

        <ul className={styles.navigation}>
          {
            // EWAI update, just adding links this way, so I can use conditional logic:
          }
          {showEnrol && (
            <li key="Enrol">
              <MenuLink item={{ name: 'Enrol', link: '/enrol' }} />
            </li>
          )}
          {showPublish && (
            <li key="Publish">
              <MenuLink item={{ name: 'Publish', link: '/publish' }} />
            </li>
          )}
          {showHistory && (
            <li key="History">
              <MenuLink item={{ name: 'History', link: '/history' }} />
            </li>
          )}
          <li>
            <Wallet />
          </li>
          <li>
            <UserPreferences />
          </li>
        </ul>
      </Container>
    </nav>
  )
}
