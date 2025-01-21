# Managing Single Sign-On (SSO)

You can provide additional single sign-on options for Keycloak service through the Zillabase CLI. In general, you'll need to provide the following information to add an SSO provider.

| **Name**    | **Description**                                                   |
| ----------- | ----------------------------------------------------------------- |
| provider-id | The unique identifier for the identity provider to be integrated. |
| alias       | The alias name for the Single Sign-On (SSO) provider.             |
| client      | The name of the client application to be configured.              |
| realm       | The Keycloak realm in which the integration will take place.      |
| secret      | The secret key is used to authenticate with the SSO provider.     |

The client and realm values are the ones that you defined before in Zillabase `config.yaml`. Here are some provider IDs that are supported:

| **Name**               | **Provider ID** | **Reference**                                                                                                                  |
| ---------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Google                 | google          | [Google API Client ID Guide](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid)                    |
| Facebook               | facebook        | [Facebook App Dashboard Settings](https://developers.facebook.com/docs/development/create-an-app/app-dashboard/basic-settings) |
| X (Formerly Twitter)   | twitter         | [X OAuth 2.0 Integration Guide](https://developer.x.com/en/docs/authentication/oauth-2-0)                                      |
| Github                 | github          | [Creating a GitHub OAuth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)            |
| Generic OpenID Connect | oidc            | [OpenID Connect Layers](https://www.keycloak.org/securing-apps/oidc-layers)                                                    |
| SAML Providers         | saml            | [SAML Galleon Layers](https://www.keycloak.org/securing-apps/saml-galleon-layers)                                              |

::: info
Please refer to the Keycloak or the other providers' documentation to get more complete provider IDs that are supported.
:::

## Example

1. Prepare a Zillabase project that has Authentication set up.

2. Add an SSO provider.

```sh
# adjust the values depending on your case
zillabase sso add --provider google --client aklivity --alias google --realm zillabase --secret secret

# output
# Identity Provider added successfully
```

3. List the SSO providers.

```sh
zillabase sso list --realm zillabase

# output
# [
#  {
#    "alias": "google",
#    "providerId": "google",
#    "config": {
#      "clientId": "aklivity"
#    }
#  }
# ]

```

4. To remove an SSO provider, use the following command.

```sh
# adjust the values depending on your case
zillabase sso remove --realm zillabase --alias google

# output
# The Identity Provider was successfully deleted
```
