
# Obtaining Authenticated User

To obtain an authenticated user on view or stream, you can use `zilla_identity` variable in the query. For example:

```sql
-- zilla_identity in view
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

-- zilla_identify in stream
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

We also provide `zilla_correlation_id` and `zilla_timestamp` in case you need it.
