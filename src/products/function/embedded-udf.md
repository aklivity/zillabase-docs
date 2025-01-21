
# Embedded UDF

In embedded functions, the function implementation is defined in the SQL function definition. Unlike external UDF, embedded UDF is run internally in Risingwave, so it does not offer as much flexibility as external UDF does. Because of this, embedded UDF are limited for computational purposes only and do not have access to external networks.

## Example

These steps will walk you through the UDF example in Python.

1. Create an empty folder.

```sh
mkdir udf-embedded  # create a new folder
cd udf-embedded # change the current directory
```

2. Initialize an empty Zillabase project.

```sh
zillabase init
```

3. Create a new migration file.

```sh
zillabase migration add create_function
```

4. Define the function in the migration file.

```sql
CREATE FUNCTION gcd(a int, b int) RETURNS int LANGUAGE python AS $$
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
$$;
```

5. Run the project.

```sh
zillabase start
```

6. Connect to the database with PSQL.

```sh
psql -U root -d dev -h localhost -p 4567
```

::: info
If you don't have psql installed, install it with the following commands:

Debian:

```sh
sudo apt-get install -y postgresql-client
```

MacOS:

```sh
brew install libpq
```

:::

7. Run a query.

```sql
select gcd(12, 4);
```

10. Stop the project.

```sh
zillabase stop
```
