#!/bin/sh
ROOT_FOLDER="$PWD"
POSTGRES_FOLDER="$PWD/postgres"
SCRIPTS_FOLDER="$PWD/scripts"
NODE_FOLDER="$PWD/node"

# PostgreSQL Files
mkdir -p ${POSTGRES_FOLDER}
cp ${SCRIPTS_FOLDER}/env/db/prod.env ${POSTGRES_FOLDER}/.env

# Node Files
cp ${SCRIPTS_FOLDER}/env/node/prod.env ${NODE_FOLDER}/.env
cp ${SCRIPTS_FOLDER}/docker/node/Dockerfile.prod ${NODE_FOLDER}/Dockerfile

# Docker Compose
cp ${SCRIPTS_FOLDER}/docker/prod.docker-compose.yml ${ROOT_FOLDER}/docker-compose.yml
