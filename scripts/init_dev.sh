#!/bin/sh
SCRIPTS_FOLDER="$PWD/scripts"
NODE_FOLDER="$PWD/node"

# MongoDB Files
cp ${SCRIPTS_FOLDER}/env/db/dev.env ${SCRIPTS_FOLDER}/../mongo.env

# Node Files
cp ${SCRIPTS_FOLDER}/env/node/dev.env ${NODE_FOLDER}/.env
cp ${SCRIPTS_FOLDER}/docker/node/Dockerfile.dev ${NODE_FOLDER}/Dockerfile