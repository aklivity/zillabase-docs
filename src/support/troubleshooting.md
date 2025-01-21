# Troubleshooting

::: details How do I debug the running Zillabase project for error?

To trace/ debug an error other than from an error message, you can check for the related Zillabase container logs, including Keycloak, Kafka, Zilla, RisingWave, etc.

:::

::: details I got `/home/linuxbrew/.linuxbrew/bin/zillabase: line 2: exec java: not found` error when running Zillabase CLI

The error was caused by missing Java dependencies on your machine. To run Zillabase CLI, you need at least Java version 20+ installed.

:::

::: details I got `Exception in thread "main" com.github.dockerjava.api.exception.ConflictException: Status 409: {"message": "Conflict. The container name xxx is already in use by container yyy."}` when running the `zillabase start` command.

The error is caused by the previous Zillabase project, which is still running. You need to stop the old Zillabase project with `zillabase stop` command or delete the entire running Zillabase container group directly from Docker CLI or Docker Desktop.

:::
