# sso

This command lists all the available sub-commands for managing the sign-on providers.

## Usage

```sh
zillabase sso
```

## Sub Commands

- `add` - Add a new identity provider.
- `list` - List all the identity providers.
- `remove` - Delete an identity provider.

## sso add

This command adds a new identity provider.

### Usage

```sh
zillabase sso add {-a | --alias} <alias> {-c | --client} <clientId> [ --debug ] [ {-h | --help} ] {-p | --provider} <providerId> {-r | --realm} <realm> {-s | --secret} <secret>  [ {-v | --verbose} ]
```

### Options

| Option                                     | Description                            | Required | Default Value | Example          |
| ------------------------------------------ | -------------------------------------- | -------- | ------------- | ---------------- |
| `-a <alias>, --alias <alias>`              | Identity Provider Alias                | **Yes**  | -             | `-a myalias`     |
| `-c <clientId>, --client <clientId>`       | Client Id                              | **Yes**  | -             | `-c myclient123` |
| `--debug`                                  | Enables detailed output for debugging. | No       | -             | `--debug`        |
| `-h, --help`                               | Display help information.              | No       | -             | `-h`             |
| `-p <providerId>, --provider <providerId>` | Identity Provider Name                 | **Yes**  | -             | `-p myprovider`  |
| `-r <realm>, --realm <realm>`              | Keycloak Realm                         | **Yes**  | -             | `-r myrealm`     |
| `-s <secret>, --secret <secret>`           | Client Secret                          | **Yes**  | -             | `-s mysecret`    |
| `-v, --verbose`                            | Show verbose output.                   | No       | -             | `-v`             |

## sso list

This command lists all the identity providers available for the project.

### Usage

```sh
zillabase sso list [ {-a | --alias} <alias> ] [ --debug ] [ {-h | --help} ] {-r | --realm} <realm> [ {-v | --verbose} ]
```

### Options

| Option                        | Description                            | Required | Default Value | Example      |
| ----------------------------- | -------------------------------------- | -------- | ------------- | ------------ |
| `-a <alias>, --alias <alias>` | Identity Provider Alias                | No       | -             | `-a myalias` |
| `--debug`                     | Enables detailed output for debugging. | No       | -             | `--debug`    |
| `-h, --help`                  | Display help information.              | No       | -             | `-h`         |
| `-r <realm>, --realm <realm>` | Keycloak Realm                         | **Yes**  | -             | `-r myrealm` |
| `-v, --verbose`               | Show verbose output.                   | No       | -             | `-v`         |

## sso remove

This command removes an identity provider from the project.

### Usage

```sh
zillabase sso remove {-a | --alias} <alias> [ --debug ]  [ {-h | --help} ] {-r | --realm} <realm> [ {-v | --verbose} ]
```

### Options

| Option                        | Description                            | Required | Default Value | Example      |
| ----------------------------- | -------------------------------------- | -------- | ------------- | ------------ |
| `-a <alias>, --alias <alias>` | Identity Provider Alias                | **Yes**  | -             | `-a myalias` |
| `--debug`                     | Enables detailed output for debugging. | No       | -             | `--debug`    |
| `-h, --help`                  | Display help information.              | No       | -             | `-h`         |
| `-r <realm>, --realm <realm>` | Keycloak Realm                         | **Yes**  | -             | `-r myrealm` |
| `-v, --verbose`               | Show verbose output.                   | No       | -             | `-v`         |
