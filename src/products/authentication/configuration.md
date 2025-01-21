
# Authentication Configuration

There are various configurable authentication options in Zillabase.

## Available Config

You can set up Keycloak by providing the following configuration in `zillabase/config.yaml` file.

| **Key**                   | **Type**  | **Required** | **Description**                                                                                |
| ------------------------- | --------- | ------------ | ---------------------------------------------------------------------------------------------- |
| keycloak.realm            | string    | Yes          | Represents the unique identifier of the Keycloak client.                                       |
| keycloak.scopes           | string\[] | No           | The scopes that will be assigned to the application realm.                                     |
| keycloak.client.client-id | string    | Yes          | The keycloak client ID                                                                         |
| keycloak.client.origins   | string\[] | No           | A list of allowed origins for CORS (Cross-Origin Resource Sharing). Default value is \["\*"].  |
| keycloak.client.root      | string    | No           | The base URL of the client application.                                                        |
| keycloak.client.redirects | string\[] | No           | A list of URLs to which Keycloak can redirect after user authentication or logout.             |
| keycloak.client.secret    | string    | No           | The client secret for confidential clients.                                                    |
| keycloak.users            | User\[]   | No           | Users object that will be seeded during project initialization.                                |

For the secret value, you can provide env instead of putting the secret directly with the following format: `${{ env.SECRET_ENV_KEY }}`.

## Seeding User

You can provide a predefined user object that will be registered during the project initialization process. These users will be assigned to the application realm instead of the master realm. The user object must have the following properties.

| **Key**  | **Description**      |
| -------- | -------------------- |
| username | The user's username. |
| email    | The user's email.    |
| password | The user's password. |
| name     | The user's name.     |

::: info
Users seeded from keycloak configuration are different and not related to the one that was seeded or defined in migration or `seed.sql`.
:::

## Default Configuration

| **Name**             | **Value**                      |
| -------------------- | ------------------------------ |
| Keycloak Service URL | `http://localhost:8180`        |
| Default/Admin Realm  | master                         |
| Admin Credential     | username: `admin` <br/> password: `admin` |
