
# Initializing Database with Seeder

Zillabase also provides a `seed.sql` file for every project created that will be run during project initialization. This file will be run after migration and can be used to seed or insert some initial data. You can perform some insert query from `seed.sql` file to initialize the database with initial data.

```sql
-- insert some initial user data

INSERT INTO streampay_users (id, name, username, initial_balance) VALUES ('allen', 'Allen Doe', 'allen', 10000);
INSERT INTO streampay_users (id, name, username, initial_balance) VALUES ('bertollo', 'Bertollo Doe', 'bertollo', 10000);
INSERT INTO streampay_users (id, name, username, initial_balance) VALUES ('candice', 'Candice Doe', 'candice', 10000);
```
