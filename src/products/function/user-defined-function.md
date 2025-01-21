
# User Defined Function (UDF)

Zillabase supports SQL functions, embedded functions (functions that are defined in SQL), and external user-defined functions (UDF) to accommodate business logic that cannot be covered with regular SQL. Currently, we support embedded functions written in Javascript, Python, and Rust and external user-defined functions written in Java and Python.

In general, here is the flow for using user-defined functions:

1. Define the function implementation in `zillabase/functions/python` or `zillabase/functions/java` (for external UDF).
2. Declare the function definition in a migration file.
3. Call the function in SQL statement the same way as you would call functions in SQL.
