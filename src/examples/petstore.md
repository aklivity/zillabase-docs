# Petstore Example

The Petstore example project implements the common Petstore example, where requests are proxied to Kafka.

Zilla implements the REST endpoints defined in an AsyncAPI 3.x spec and proxies them onto Kafka topics defined in an AsyncAPI 3.x spec based on the operations defined in each spec. HTTP AsyncAPI 3.x spec and Kafka AsyncAPI 3.x spec are generated automatically based on the Kafka Cluster metadata information.

## Prerequisites

Before we start, make sure you fulfill the following requirements:

- Java 20+
- Homebrew package manager
- Docker
- Zillabase CLI

### Installing Zillabase CLI

If you don't have Zillabase CLI installed, install it with the following command:

```sh
brew tap aklivity/tap

brew install zillabase
```

::: info
The Homebrew package manager is required. You can install it on MacOS and other Linux distributions. To install it, run the following command:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

For more details, visit the [Zillabase GitHub repository](https://github.com/aklivity/zillabase).
:::

## Setting Up the Project

1. Clone the Zillabase repository.

```sh
git clone https://github.com/aklivity/zillabase.git
```

The Petstore project is stored in the `examples/petstore` directory.

2. go to the `petstore` project example directory on the cloned repository directory.

```sh
cd examples/petstore
```

3. Start the project and wait for the initialization process to finish.

```sh
zillabase start
```

## Using the Petstore APIs

The Zillabase Petstore is an HTTP Kafka proxy that exposes common entity CRUD endpoints, with entity data stored on Kafka topics.

### Endpoints

| Protocol | Method | Endpoint            | Topic         | Description            |
|----------|--------|---------------------|---------------|------------------------|
| HTTP     | POST   | /petstore_pets      | petstore_pets | Create an entry.       |
| HTTP     | PUT    | /petstore_pets/\{id} | petstore_pets | Update pet by the key. |
| HTTP     | DELETE | /petstore_pets/\{id} | petstore_pets | Delete pet by the key. |
| HTTP     | GET    | /petstore_pets      | petstore_pets | Fetch all pets.        |
| HTTP     | GET    | /petstore_pets/\{id} | petstore_pets | Fetch pet by the key.  |

Similarly, endpoints are available to manage customers using `/petstore_customers` & `/petstore_verified_customers`.

### Examples

#### Publish a valid record

```bash
curl -k -v -X POST http://localhost:8080/petstore_pets -H 'Idempotency-Key: 1'  -H 'Content-Type: application/json' -d '{"id": "123", "breed": "Awesome Dog"}'
```

Output:

```text
> POST /petstore_pets HTTP/1.1
...
> Content-Type: application/json
> Content-Length: 35
>
< HTTP/1.1 204 No Content
< Access-Control-Allow-Origin: *
<
* Connection #0 to host localhost left intact
```

#### Fetch a record

```bash
curl -k -v http://localhost:8080/petstore_pets/1
```

Output:

```text
> GET /petstore_pets/1 HTTP/1.1
...
< HTTP/1.1 200 OK
< Content-Length: 33
< Content-Type: application/json
< Etag: AQIAAg==
< Access-Control-Allow-Origin: *
< Access-Control-Expose-Headers: *
<
* Connection #0 to host localhost left intact
{"id": "123", "breed": "Common Dog"}%
```

## Stopping the Project

To stop the Zillabase project, run the following command:

```sh
zillabase stop
```
