# Workflowy Backup

A hack to get Workflowy export through headless browser automation.

## Requirements

- NodeJS & NPM
- PhantomJS

## Setup

Install Nightmare:

```bash
make build
```

Create a `local.sh` with Workflowy credentials.

```bash
#!/bin/bash

export USERNAME="your_username"
export PASSWORD="your_password"

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
