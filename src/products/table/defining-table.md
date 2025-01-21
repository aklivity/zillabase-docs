
# Defining Table

Zillabase offers commands to streamline managing database migrations, which define or modify the database schema. Using the Zillabase CLI, users can generate an empty SQL-based migration file. This file can then be customized to include table definitions. Defining a table will create a Kafka topic with the same name, and RisingWave will provide an interface compatible with PostgreSQL-like syntax.

::: info
You can refer to [this article](https://docs.risingwave.com/sql/overview) for a complete supported SQL reference.
:::

A table defined will create a new topic, and CRUD APIs will be used to insert and query the data.

1. Create the migration file with the following command:

```sh
# command format
# zillabase migration add <migration-name>

# example
zillabase migration add create_table

# output
# Created migration 000001__create_table.sql
```

After the command succeeds, it prints the new migration file, which you can modify to define your data models. To modify the migration files, open the `zillabase/migrations` folder and edit the corresponding migration file.

2. Edit the migration file with the following content.

```sql
CREATE TABLE streampay_users(
  id VARCHAR,
  name VARCHAR,
  username VARCHAR,
  initial_balance DOUBLE PRECISION,
  PRIMARY KEY (id)
);
```
