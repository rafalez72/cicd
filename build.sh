#!/bin/sh
# Build LOCAL del desarrollador (entorno de dev) — todo vía Docker.
set -e

echo "==> [1/3] Construyendo imagen de la app"
docker build -t demo-ci:local .

echo "==> [2/3] Ejecutando pruebas automatizadas"
docker run --rm demo-ci:local node --test test/

echo "==> [3/3] Build local OK"
echo "    Para levantar la app local:  docker run --rm -p 3000:3000 demo-ci:local"
