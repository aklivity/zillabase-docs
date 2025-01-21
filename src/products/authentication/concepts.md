
# Authentication in Zillabase

Zillabase utilizes Keycloak to manage its user authentication. The Keycloak was configured through a `config.yaml` file and initialized during the `zillabase start` command. Follow this guide to learn how Keycloak is integrated with Zillabase and how to implement authentication in your application.

## How it works

If a Keycloak configuration is found, Zillabase will set up Keycloak during the start-up process and protect every available Zillabase endpoint. Otherwise, Zillabase won't set up Keycloak, and every endpoint is accessible by every user.

To authenticate to protected endpoints, you'll need to provide an access token as the token bearer in the HTTP authorization header. This token is obtained by authenticating via the Keycloak service.

Use Keycloak adapter libraries, such as [`keycloak-js`](https://www.keycloak.org/securing-apps/javascript-adapter) to easily integrate Keycloak with your application.
