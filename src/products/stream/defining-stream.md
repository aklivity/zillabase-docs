
# Defining Stream

Zillabase simplifies the management of database migrations for various use cases, including streams. With its CLI, users can quickly create an empty migration file, which can be customized to define streams with PostgreSQL-like syntax. This stream is specific to Zillabase and does not relate to RisingWave syntax. A stream tracks all of the application's user commands. It creates a topic and produces CRUD APIs to produce and fetch the data. The stream can be consumed by other data models, including tables, views, and materialized views.

1. Create the migration file with the following command:

```sh
# command format
# zillabase migration add <migration-name>

# example
zillabase migration add create_stream

# output
# Created migration 000001__create_stream.sql
```

After the command succeeds, it prints the new migration file, which you can modify to define your data models. To modify the migration files, open the `zillabase/migrations` folder and edit the corresponding migration file.

2. Edit the migration file with the following content.

```sql
CREATE STREAM streampay_commands(
    type VARCHAR,
    user_id VARCHAR,
    request_id VARCHAR,
    amount DOUBLE PRECISION,
    notes VARCHAR,
    zilla_correlation_id VARCHAR,
    zilla_identity VARCHAR,
    zilla_timestamp TIMESTAMP
);
```
