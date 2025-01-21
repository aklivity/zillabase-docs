
# External UDF in Python

To declare the function in Python, we'll use the [`arrow-udf`](https://pypi.org/project/arrow-udf/) package. You'll need to annotate the function that you want to expose, and then define the input and return types. On the other hand, you can also provide `requirements.txt` file in the `zillabase/functions/python` path in case you want to install additional Python packages. After that, you need to declare the function in a migration file.

::: info
Any external UDFs written in Python must be stored in `zillabase/functions/python` directory in order to be auto-picked by the Python UDF server.
:::

## Adding Environment Variables

You can add environment variables during UDF execution by modifying the `config.yaml` file. For example:

```yaml
udf:
  python:
    env:
      - MY_VAR=value
```

## Example

These steps will walk you through the UDF example in Python.

1. Create an empty folder.

```sh
mkdir udf-python # create a new folder
cd udf-python # change the current directory
```

2. Initialize an empty Zillabase project.

```sh
zillabase init
```

3. Create a `requirements.txt` file in `zillabase/functions/python` and add the following packages.

```text
numpy==2.1.3
```

4. Create `udf.py` in `zillabase/functions/python` and copy the following function definition.

```python
from arrow_udf import udf
import numpy as np

# udf example with int result
@udf(input_types=['INT', 'INT'], result_type='INT')
def gcd(x, y):
    while y != 0:
        (x, y) = (y, x % y)
    return x

# udf example with struct (object) result type
@udf(input_types=['VARCHAR'], result_type='STRUCT<key: VARCHAR, value: VARCHAR>')
def key_value(pair: str):
    key, value = pair.split('=')
    return {'key': key, 'value': value}

# udf example that call external library
@udf(input_types=['real[]', 'real[]'], result_type='real')
def dot_vect(a, b):
    return np.dot(a, b)
```

5. Create a new migration file.

```sh
zillabase migration add create_function
```

6. Declare the function in the migration file.

```sql
CREATE FUNCTION gcd(int, int) RETURNS int
LANGUAGE python AS gcd;

CREATE FUNCTION key_value(varchar) RETURNS struct<key varchar, value varchar>
LANGUAGE python AS key_value;

CREATE FUNCTION dot_vect(real[], real[]) RETURNS real
LANGUAGE python AS dot_vect;
```

7. Run the project.

```sh
zillabase start
```

8. Connect to the database with PSQL.

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

9. Run a query.

```sql
select gcd(12, 4);

select key_value('KEY=VALUE');

select dot_vect('{1.0, 2.0}', '{3.0, 4.0}');
```

10. Stop the project.

```sh
zillabase stop
```

::: info
Refer to [this repository](https://github.com/aklivity/zillabase/tree/develop/examples/udf.python) for a more complete UDF Python example.
:::
