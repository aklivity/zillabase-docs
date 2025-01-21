# asyncapi

This command lists all the available sub-commands for Zillabase’s asyncapi feature.

### Usage

```sh
zillabase asyncapi
```

## Sub Commands

- `add` - Add a new AsyncAPI specification.
- `list` - Lists all the available AsyncAPI specifications.
- `remove` - Delete an AsyncAPI specification.
- `show` - Show an AsyncAPI specification details.

## asyncapi add

This command adds a new AsyncAPI specification.

### Usage

```sh
zillabase asyncapi add [ --debug ] [ {-h | --help} ] [ --id <id> ]  {-s | --spec} <spec> [ {-v | --verbose} ]
```

### Options

| Option                     | Description                            | Required | Default Value | Example          |
| -------------------------- | -------------------------------------- | -------- | ------------- | ---------------- |
| `--debug`                  | Enables detailed output for debugging. | No       | -             | `--debug`        |
| `-h, --help`               | Display help information.              | No       | -             | `-h`             |
| `--id <id>`                | AsyncAPI specification identifier.     | No       | -             | `--id 123`       |
| `-s <spec>, --spec <spec>` | AsyncAPI specification location.       | **Yes**  | -             | `-s ./spec.yaml` |
| `-v, --verbose`            | Show verbose output.                   | No       | -             | `-v`             |

## asyncapi list

This command lists all the available AsyncAPI specifications in the project.

### Usage

```sh
zillabase asyncapi list [ --debug ] [ {-h | --help} ]  [ {-v | --verbose} ]
```

### Options

| Option          | Description                            | Required | Default Value | Example   |
| --------------- | -------------------------------------- | -------- | ------------- | --------- |
| `--debug`       | Enables detailed output for debugging. | No       | -             | `--debug` |
| `-h, --help`    | Display help information.              | No       | -             | `-h`      |
| `-v, --verbose` | Show verbose output.                   | No       | -             | `-v`      |

## asyncapi remove

This command removes an AsyncAPI specification from the project.

### Usage

```sh
zillabase asyncapi remove [ --debug ] [ {-h | --help} ] --id <id>  [ {-v | --verbose} ]
```

### Options

| Option          | Description                            | Required | Default Value | Example    |
| --------------- | -------------------------------------- | -------- | ------------- | ---------- |
| `--debug`       | Enables detailed output for debugging. | No       | -             | `--debug`  |
| `-h, --help`    | Display help information.              | No       | -             | `-h`       |
| `--id <id>`     | AsyncAPI specification identifier.     | No       | -             | `--id 123` |
| `-v, --verbose` | Show verbose output.                   | No       | -             | `-v`       |

## asyncapi show

This command shows an AsyncAPI specification.

### Usage

```sh
zillabase asyncapi show [ --debug ] [ {-h | --help} ] [ {-v | --verbose} ] [--] <id>
```

### Options

| Option          | Description                                                              | Required | Default Value | Example       |
| --------------- | ------------------------------------------------------------------------ | -------- | ------------- | ------------- |
| `--debug`       | Enables detailed output for debugging.                                   | No       | -             | `--debug`     |
| `-h, --help`    | Display help information.                                                | No       | -             | `-h`          |
| `-v, --verbose` | Show verbose output.                                                     | No       | -             | `-v`          |
| `--`            | Used to separate command-line options from arguments to avoid confusion. | No       | -             | `-- argument` |
| `<id>`          | AsyncAPI specification identifier.                                       | Yes      | -             | `123`         |
