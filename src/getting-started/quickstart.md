# Quickstart

This guide provides a step-by-step approach to getting started with Zillabase. It automatically generates both HTTP AsyncAPI 3.x and Kafka AsyncAPI 3.x specifications based on Kafka Cluster metadata.

## Prerequisites

Ensure you have the following tools installed on your system:

- **Homebrew**
- **curl**
- **Docker**
- **Java 20 or later**

## Step 1: Install Zillabase

To install Zillabase, use the following commands:

```bash
brew tap aklivity/tap

brew install zillabase
```

## Step 2: Clone the Example Repository

To quickly start using Zillabase stack, you can use our quickstart example repo.

1. Clone the repo using the following command:

```bash
git clone https://github.com/aklivity/zillabase.git
```

2. Navigate to the **examples** > **quickstart** > **zillabase** folder.

## Step 3: Start Zillabase

Start the Zillabase using the following command:

```bash
zillabase start
```

### Example Output

```text
3.2.3: Pulling from bitnami/kafka
latest: Pulling from risingwavelabs/risingwave
latest-release: Pulling from apicurio/apicurio-registry-mem
latest: Pulling from bitnami/keycloak
seed-kafka.yaml processed successfully!
Registered AsyncAPI spec: kafka-asyncapi
Registered AsyncAPI spec: http-asyncapi
Config Server is populated with zilla.yaml
```

## Step 4: Use Generated API Endpoints

Zillabase acts as an HTTP Kafka proxy, exposing CRUD endpoints for entities. Entity data is stored in Kafka topics, utilizing Kafka's `cleanup.policy=compact` feature.

### Available Endpoints

| Protocol | Method | Endpoint     | Topic  | Description                     |
|----------|--------|--------------|--------|---------------------------------|
| HTTP     | POST   | /events      | events | Create an event.                |
| HTTP     | PUT    | /events/\{id} | events | Update an event by the key.     |
| HTTP     | DELETE | /events/\{id} | events | Delete an event by the key.     |
| HTTP     | GET    | /events      | events | Fetch all events.               |
| HTTP     | GET    | /events/\{id} | events | Fetch an event by the key.      |

### Examples

#### 1. Publish a Record

To publish a valid record to the `events` topic, use the following command:

```bash
curl -k -v -X POST http://localhost:8080/events \
  -H 'Idempotency-Key: 1' \
  -H 'Content-Type: application/json' \
  -d '{"id": "101", "message": "Hello, World"}'
```

#### Example Output

```text
> POST /events HTTP/1.1
...
> Content-Type: application/json
>
< HTTP/1.1 204 No Content
< Access-Control-Allow-Origin: *
<
* Connection #0 to host localhost left intact
```

#### 2. Fetch a Record

To fetch a record by its key:

```bash
curl -k -v http://localhost:8080/events/1
```

#### Example Output

```text
> GET /events/1 HTTP/1.1
...
< HTTP/1.1 200 OK
< Content-Length: 33
< Content-Type: application/json
< Etag: AQIAAg==
< Access-Control-Allow-Origin: *
< Access-Control-Expose-Headers: *
<
* Connection #0 to host localhost left intact
{"id": "101", "message": "Hello, World"}%
```

## Step 5: Stop Zillabase

To stop the Zillabase, use the following command:

```bash
zillabase stop
```
