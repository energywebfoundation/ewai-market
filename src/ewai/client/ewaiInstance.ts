import { useStaticQuery, graphql } from 'gatsby'
import { IEwaiInstanceResult } from './ewai-js'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useEwaiInstance: any = () => {
  const data = useStaticQuery(
    graphql`
      query EwaiInstanceQuery {
        ewai {
          ewaiInstance {
            name
            apiVersion
            assetPublishRole
            assetPublishRoleEnrolUrl
            enforceAssetPublishRole
            messagingUserRole
            messagingPublishRole
            switchboardUrl
            restApiUrl
            graphQlUrl
            ewcRpcUrl
            allowResetData
          }
        }
      }
    `
  )
  return data.ewai.ewaiInstance as IEwaiInstanceResult
}
