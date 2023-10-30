---
title: medic profile delete
---
## medic profile delete

Delete a profile within a mediator control plane

### Synopsis

The medic profile delete subcommand lets you delete profiles within a
mediator control plane.

```
medic profile delete [flags]
```

### Options

```
  -h, --help              help for delete
  -i, --id string         ID of profile to delete
  -p, --provider string   Provider for the profile (default "github")
```

### Options inherited from parent commands

```
      --config string            Config file (default is $PWD/config.yaml)
      --grpc-host string         Server host (default "staging.stacklok.dev")
      --grpc-insecure            Allow establishing insecure connections
      --grpc-port int            Server port (default 443)
      --identity-client string   Identity server client ID (default "mediator-cli")
      --identity-realm string    Identity server realm (default "stacklok")
      --identity-url string      Identity server issuer URL (default "https://auth.staging.stacklok.dev")
```

### SEE ALSO

* [medic profile](medic_profile.md)	 - Manage profiles within a mediator control plane
