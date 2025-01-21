# Generated AsyncAPI Specifications

Zillabase provides a generated HTTP AsyncAPI and Kafka AsyncAPI for accessing the Zillabase endpoints. This specification is different from the OpenAPI specification.

::: info
Read [this article](https://www.asyncapi.com/docs/concepts) to learn more about AsyncAPI.
:::

## Obtaining the AsyncAPI Specifications

Run either the Petstore or Streampay project example. On the project directory, run the following command to list the available AsyncAPI specifications.

```sh
zillabase asyncapi list

# outputs
# Registered AsyncAPI Spec:
# http-asyncapi
# kafka-asyncapi
```

By default, Zillabase generates two kinds of AsyncAPI specifications: HTTP AsyncAPI specification and Kafka AsyncAPI specification. To export the AsyncAPI specification, run the following commands.

```sh
# this command extract the HTTP AsyncAPI specification to http-spec.yaml file
zillabase asyncapi show http-asyncapi > http-spec.yaml

# this command extract the Kafka AsyncAPI specification to kafka-spec.yaml file
zillabase asyncapi show kafka-asyncapi > kafka-spec.yaml
```

To view the generated AsyncAPI specification, you can use [AsyncAPI Studio](https://studio.asyncapi.com/).

## HTTP Specification

The HTTP AsyncAPI specification provides information about the HTTP server and information about its available endpoints. For every entity defined, Zillabase serves the following HTTP endpoints:

| **Method** | **Endpoint**               | **Description**             |
| ---------- | -------------------------- | --------------------------- |
| GET        | /\<entity>                 | Fetch all entity data       |
| POST       | /\<entity>                 | Insert an entity data       |
| GET        | /\<entity>/\{id}           | Get entity data by id       |
| PUT        | /\<entity>/\{id}           | Update an entity data by id |
| GET        | /\<entity>-stream          | Stream entity data changes  |
| GET        | /\<entity>-stream-identity | Stream entity data changes  |

The `/<entity>` and `/<entity>/{id}` endpoints are regular REST API endpoints. On the other hand, `/<entity>-stream` and `/<entity>-stream-identity` endpoints is an HTTP endpoint that serves server-sent events (SSE). You can subscribe/ consume any data changes that happened to the `<entity>` data with the stream endpoint.

Refer to the message schema defined on the operation and channels to learn the schema for those endpoints. Every HTTP endpoint supports various input and output payload formats, such as JSON, Avro, and Protobuf. To adjust the payload formats, define the Content-Type and Accept header during the HTTP request.

## Kafka Specification

The Kafka AsyncAPI specification provides information about the Kafka cluster and schema definition for Kafka based on our data model and stream. It defines a channel for every entity and supports publish and subscribe operations for that channel.
