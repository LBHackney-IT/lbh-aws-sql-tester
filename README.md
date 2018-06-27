# LBH AWS SQL Tester

## Setup

1. Install Serverless.
2. Install the AWS CLI.
3. Configure your AWS credentials locally using `aws configure`.

## Functions

### testSql

Attempts a basic SQL query to the UH development database, to check if the connection is working. This is necessary to test our VPN configuration.

```sh
$ serverless invoke -f testSql -l -r eu-west-2
```

## Deployment

```sh
$ serverless deploy -r eu-west-2
```
