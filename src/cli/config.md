# config

This command lists all the available sub-commands for managing the Zillabase’s configurations.

### Usage

```sh
zillabase config
```

## Sub Commands

- `add` - Add a new Zillabase configuration.
- `list` - List all the Zillabase configurations.
- `remove` - Delete a Zillabase configuration.

## config add

This command adds a new Zillabase configuration.

### Usage

```sh
zillabase config add {-c | --config} <config> [ --debug ] [ {-h | --help} ] [ --id <id> ] [ {-v | --verbose} ]
```

### Options

| Option                           | Description                            | Required | Default Value | Example            |
| -------------------------------- | -------------------------------------- | -------- | ------------- | ------------------ |
| `-c <config>, --config <config>` | Config location                        | **Yes**  | -             | `-c ./config.yaml` |
| `--debug`                        | Enables detailed output for debugging. | No       | -             | `--debug`          |
| `-h, --help`                     | Display help information.              | No       | -             | `-h`               |
| `--id <id>`                      | Config identifier.                     | No       | -             | `--id 123`         |
| `-v, --verbose`                  | Show verbose output.                   | No       | -             | `-v`               |

## config list

This command lists all the available Zillabase configurations in the project.

### Usage

```sh
zillabase config list [ --debug ] [ {-h | --help} ] --id <id> [ {-v | --verbose} ]
```

### Options

| Option          | Description                            | Required | Default Value | Example    |
| --------------- | -------------------------------------- | -------- | ------------- | ---------- |
| `--debug`       | Enables detailed output for debugging. | No       | -             | `--debug`  |
| `-h, --help`    | Display help information.              | No       | -             | `-h`       |
| `--id <id>`     | Config identifier.                     | **Yes**  | -             | `--id 123` |
| `-v, --verbose` | Show verbose output.                   | No       | -             | `-v`       |

## config remove

This command removes a Zillabase configuration from the project.

### Usage

```sh
zillabase config remove [ --debug ] [ {-h | --help} ] --id <id> [ {-v | --verbose} ]
```

### Options

| Option          | Description                            | Required | Default Value | Example    |
| --------------- | -------------------------------------- | -------- | ------------- | ---------- |
| `--debug`       | Enables detailed output for debugging. | No       | -             | `--debug`  |
| `-h, --help`    | Display help information.              | No       | -             | `-h`       |
| `--id <id>`     | Config identifier.                     | **Yes**  | -             | `--id 123` |
| `-v, --verbose` | Show verbose output.                   | No       | -             | `-v`       |
