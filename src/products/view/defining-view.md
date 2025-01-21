
# Defining View

Zillabase facilitates database migrations through an intuitive set of CLI commands. These migrations allow users to define or modify views within the database schema. By generating an empty migration file with Zillabase CLI, users can write PostgreSQL-compatible syntax to specify definitions of their views. RisingWave non-materialized views behave the same as regular relational database views, with data source support from sources, tables, views, or indexes.

::: info
You can refer to [this article](https://docs.risingwave.com/sql/overview) for a complete supported SQL reference.
:::

A view can consume a stream or query from another table. Unlike the materialized view, it only provides a view that depends on the defined query and does not materialize the data. Best for cases where you want to save a view query but don't want the result to be materialized.

1. Create the migration file with the following command:

```sh
# command format
# zillabase migration add <migration-name>

# example
zillabase migration add create_view

# output
# Created migration 000001__create_view.sql
```

After the command succeeds, it prints the new migration file, which you can modify to define your data models. To modify the migration files, open the `zillabase/migrations` folder and edit the corresponding migration file.

2. Edit the migration file with the following content.

```sql
CREATE VIEW user_transactions AS
  SELECT
      encode(zilla_identity, 'escape') AS user_id,
      -amount AS net_amount
  FROM streampay_commands
  WHERE type = 'SendPayment'
  UNION ALL
  SELECT
      user_id AS user_id,
      amount AS net_amount
  FROM streampay_commands
  WHERE type = 'SendPayment';
```
