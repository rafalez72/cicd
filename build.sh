#!/bin/sh
# Build LOCAL
set -e

echo "==> [1/3] construye imagen"
docker build -t demo-ci:local .

echo "==> [2/3] ejecuto pruebas"
docker run --rm demo-ci:local node --test test/

echo "==> [3/3] build ok"
echo "    Para levantar la app local:  docker run --rm -p 30    00:3000 demo-ci:local"
