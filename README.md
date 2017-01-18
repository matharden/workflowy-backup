# Workflowy Backup

A hack to get Workflowy export through headless browser automation.

## Requirements

- Node & NPM

## Setup

Install Nightmare, Electron and dependacies:

```bash
make build
```

Create a `local.sh` file in the same directory with your Workflowy credentials.

```bash
#!/bin/bash

export USERNAME="my_username"
export PASSWORD="my_password"

node .
```

Make this file executable:

```bash
chmod +x local.sh
```

## Running the backup

Export your Workflowy content in plain text format to `workflowy_export.txt`.

```bash
make
```
