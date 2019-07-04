#!/bin/sh
ROOT_FOLDER="$PWD"
POSTGRES_FOLDER="$PWD/postgres"
SCRIPTS_FOLDER="$PWD/scripts"
NODE_FOLDER="$PWD/node"

# PostgreSQL Files
mkdir -p ${POSTGRES_FOLDER}
cp ${SCRIPTS_FOLDER}/env/db/dev.env ${POSTGRES_FOLDER}/.env

# Node Files
cp ${SCRIPTS_FOLDER}/env/node/dev.env ${NODE_FOLDER}/.env
cp ${SCRIPTS_FOLDER}/docker/node/Dockerfile.dev ${NODE_FOLDER}/Dockerfile

# Docker Compose
cp ${SCRIPTS_FOLDER}/docker/dev.docker-compose.yml ${ROOT_FOLDER}/docker-compose.yml

# Compile Node project 
yarn --cwd node build