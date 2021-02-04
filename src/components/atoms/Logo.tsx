import React, { ReactElement } from 'react'
// note the following 2 imports resolve correctly even though typescript is complaining
import logo from '../../ewai/images/ew-logo.png'
import logofull from '../../ewai/images/ew-logofull2.png'
import styles from './Logo.module.css'

export default function Logo({
  noWordmark
}: {
  noWordmark?: boolean
}): ReactElement {
  return noWordmark ? (
    <img src={logo} className={styles.logo} alt="Logo" />
  ) : (
    <img src={logofull} className={styles.logo} alt="Logo" />
  )
}
