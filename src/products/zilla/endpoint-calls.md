# Endpoint Calls Example

This example will go through all of the available endpoints for an entity using the Petstore project example. The project example provides the following endpoints:

::: info
Not every entity is listed as this section only provides an example of an entity.
:::

| **Protocol** | **Method/ Action** | **Endpoint/ Channel**  |
| ------------ | ------------------ | ---------------------- |
| HTTP         | GET                | /petstore_pets         |
| HTTP         | GET                | /petstore_pets/{id}    |
| HTTP         | PUT                | /petstore_pets/{id}    |
| HTTP         | POST               | /petstore_pets         |
| HTTP         | GET                | /petstore_pets-stream  |
| Kafka        | Receive            | dev.petstore_pets      |
| Kafka        | Send               | dev.petstore_pets      |

According to the specifications, the HTTP server is on the `localhost:8080` address, and the Kafka cluster is on the `localhost:9092` address. Let's try those endpoints.

## Fetch all pets

```sh
curl -X GET http://localhost:8080/petstore_pets

# output
# [{"id": "234", "breed": "Beagle"},{"id": "123", "breed": "German Shepherd"}]
```

## Update a pet

```sh
curl -X PUT http://localhost:8080/petstore_pets/234 -H "Content-Type: application/json" \
--data '{"id": "234", "breed": "Tippler"}'

# prints nothing
```

## Get the previously updated data

```sh
curl -X GET http://localhost:8080/petstore_pets/234

# output
# {"id": "234", "breed": "Tippler"}
```

## Consume the entity streams with SSE

The command won't automatically exit as it listens to any new incoming events. Keep it open.

```sh
curl -N --http2 http://localhost:8080/petstore_pets-stream

# output
# id:AQIABA==
# data:{"id": "123", "breed": "German Shepherd"}
#
# id:AQIACA==
# data:{"id": "234", "breed": "Tippler"}
```

## Consume the Kafka topic

The command won't automatically exit as it listens to any new incoming events. Keep it open.

```sh
docker exec zillabase_kafka /opt/bitnami/kafka/bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic dev.petstore_pets

# prints nothing as there are no new incoming data
```

## Create new pet data

```sh
curl -X POST http://localhost:8080/petstore_pets -H "Content-Type: application/json" \
--data '{"id": "345", "breed": "koi"}'

# prints nothing
```

## Check the Stream Consumer

Go back to the SSE consumer and Kafka consumer. You'll see that these consumers receive a new event that prints out the added data.

```sh
# SSE consumer
# New stream data received
# id:AQIACg==
# data:{"id": "345", "breed": "koi"}

# Kafka consumer
# New stream data received
# 345
# koi
```
