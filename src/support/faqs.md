# Frequently Asked Questions (FAQ)

::: details Does Zillabase support database transactions?

No, currently, Zillabase does not support database transactions.

:::

::: details How is authentication integrated with Zillabase?

Authentication and user management features are integrated using Keycloak in Zillabase. During `zillabase start,` a Keycloak service is initialized by creating a specified realm, adding configured users, setting up client scopes, and registering a client. Update the `zillabase/config.yaml` file to modify the Keycloak configuration. Read [this article](/products/authentication/concepts) for more information.
:::

::: details If an authentication configuration is defined, is every endpoint now protected as authenticated user only?

Yes. If an authentication configuration is defined, every endpoint will require an authenticated user to access it. This means that any request should include the bearer access token in the request authorization header.

:::

::: details How do you get authenticated user information on Zillabase?

Zilla injects the authentication information into the Kafka message header. Later, you can refer to the `zilla_identity` value in the stream or view definition to correlate an event with a user or to query something specific to the user. Read [this article](/products/authentication/obtain-user) for more information.

:::

::: details What was the difference between `/<entity-name>` and `/<entity-name>-stream` endpoints?

The `/<entity-name>` endpoint is a regular REST endpoint that follows the request-response model. On the other hand, the `/entity-name>-stream` endpoint is a server-sent event (SSE) HTTP endpoint that emits events every time there's a new entity or updated entity. This endpoint follows the publish-subscribe model.

:::

::: details What was the difference between `zillabase/config.yaml` and `zilla.yaml`?

The `zillabase/config.yaml` is a file generated during project initialization. You can modify the Zillabase start-up configuration with the config file, including configuring authentication, environments for UDF, etc. On the other hand, `Zilla.yaml` is a Zilla configuration file that is generated during project start-up and adjusted depending on the models you defined before in the migration files. While it is usually not required, you can configure the Zilla configuration if you need some customization.

:::

::: details How do I correlate the request event with the response events?

You can use `zilla_correlation_id` to correlate request events and response events.

:::
