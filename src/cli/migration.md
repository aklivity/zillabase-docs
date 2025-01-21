# migration

This command lists all the available sub-commands for managing database migrations in Zillabase.

### Usage

```sh
zillabase migration
```

## Sub Commands

- `add` - Create a new migration file locally.
- `list` - List all the local migration files.

## migration add

This command creates a new database migration file locally.

### Usage

```sh
zillabase migration add [ --debug ] [ {-h | --help} ] [--] <name>...
```

### Options

| Option       | Description                                                | Required | Default Value | Example          |
| ------------ | ---------------------------------------------------------- | -------- | ------------- | ---------------- |
| `--debug`    | Enables detailed output for debugging.                     | No       | -             | `--debug`        |
| `-h, --help` | Display help information.                                  | No       | -             | `-h`             |
| `--`         | Separates command-line options from the list of arguments. | No       | -             | `-- argument`    |
| `<name>`     | The name(s) of the migration(s) to be added.               | **Yes**  | -             | `migration_name` |

## migration list

This command lists all the local migration files.

### Usage

```sh
zillabase migration list [ --debug ] [ {-h | --help} ]
```

### Options

| Option       | Description                            | Required | Default Value | Example   |
| ------------ | -------------------------------------- | -------- | ------------- | --------- |
| `--debug`    | Enables detailed output for debugging. | No       | -             | `--debug` |
| `-h, --help` | Display help information.              | No       | -             | `-h`      |
