import React, { ReactElement } from 'react'
import styles from './MetaSecondary.module.css'
import Tags from '../../atoms/Tags'
import { useAsset } from '../../../providers/Asset'
import { useEwaiInstance } from '../../../ewai/client/ewai-js'
/* eslint @typescript-eslint/no-var-requires: "off" */
const highlight = require('cli-highlight').highlight

export default function MetaEwai(): ReactElement {
  const { ewaiAsset } = useAsset()
  const ewaiInstance = useEwaiInstance()

  return (
    <aside className={styles.metaSecondary}>
      <div>
        <p>EWNS:</p>
        <Tags items={[ewaiInstance.name, '=>', ewaiAsset?.ewns]} noLinks />
      </div>
      <div>
        <p>Output Data Format:</p>
        <Tags
          items={
            ewaiAsset?.defaultOutputFormat
              ? [ewaiAsset?.defaultOutputFormat]
              : []
          }
          noLinks
        />
      </div>
      <div>
        <p>Incoming Message Format:</p>
        <Tags items={[ewaiAsset?.incomingMsgFormat]} noLinks />
      </div>
      <div>
        <p>Asset Data Publish Roles Required:</p>
        <p style={{ marginLeft: '10px', color: 'yellow' }}>
          NOTE: A DER must be provisioned with all three of the following roles
          In order for it to send PTD data packets (messages) into this energy
          data asset. The first role is required to connect to EW-Messaging, the
          second role is to enable publishing messages to the EW-Messaging
          channel for this marketplace, and the third role is required to
          publish messages into this specific {ewaiAsset?.metadata?.title} data
          asset.
        </p>
        <br />
        <Tags
          items={[
            ewaiInstance.messagingUserRole,
            ewaiInstance.messagingPublishRole,
            ewaiAsset?.dataPublishRole
          ]}
          noLinks
        />
      </div>
      <div>
        <p>Schema Validation Enabled:</p>
        <Tags items={[ewaiAsset?.schemaValidationOn ? 'Yes' : 'No']} noLinks />
      </div>
      <div>
        <p>Message Schema (if any):</p>
        <textarea
          value={
            ewaiAsset?.msgSchema
              ? highlight(JSON.stringify(ewaiAsset.msgSchema, null, 4), {
                  language: 'json',
                  ignoreIllegals: true
                })
              : '{not set}'
          }
          rows={25}
          cols={60}
          readOnly
        />
      </div>
      <div>
        <p>Path to Message Timestamp:</p>
        <Tags items={[ewaiAsset?.pathToMsgTimestamp]} noLinks />
      </div>
    </aside>
  )
}
