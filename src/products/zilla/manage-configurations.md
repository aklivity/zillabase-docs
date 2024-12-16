
# Zilla Service Configuration

Zillabase provides commands to manage the Zilla service configurations. These commands allow users to update the available config, upload the required artifacts (like certificates), and review the running configuration. When a configuration change occurs, the Zilla service can detect and redeploy the updated configuration.

## Managing Zilla Configuration

### Providing Your Own `zilla.yaml` configuration

You can provide your own `zilla.yaml` configuration by creating a config file under `zillabase/zilla` directory. This way, during `zillabase start` command it won't automatically generate the Zilla configuration but will use the configuration you provide.


### Fetch Zilla configuration

Run the following command to fetch the existing Zilla configuration. This commands save the existing Zilla configuration file to zilla.yaml file.

```sh
zillabase config list --id zilla.yaml > ./zilla.yaml
```

### Modifying Zilla configuration

Run the following command to modify the Zilla configuration generated by Zillabase.

1. Open the file and modify the configuration. 

::: info
Refer to [this article](https://docs.aklivity.io/zilla/latest/reference/config/overview.html) for a complete Zilla configuration reference.
:::

2. After modifying the configuration, upload the configuration file using the following command.

```sh
zillabase config add -c ./zilla.yaml

# output
# Config Server is populated with ./zilla.yaml
```
::: info
By default, the command will use the filename as the configuration id. To use an id other than its name, you can provide an additional --id parameter, for example:

```sh
zillabase config add -c ./zilla.yaml --id zilla.yaml
```
:::

3. The Zillabase admin will detect the configuration changes and redeploy the updated configuration.

::: warning
While it's possible, modifying this configuration is rarely required by the user.
:::