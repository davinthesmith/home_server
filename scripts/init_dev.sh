#!/bin/sh
SCRIPTS_FOLDER="$PWD/scripts"
GRAPHQL_FOLDER="$PWD/graphql"

# MongoDB Files
cp ${SCRIPTS_FOLDER}/env/db/dev.env ${SCRIPTS_FOLDER}/../mongo.env

# GraphQL Files
cp ${SCRIPTS_FOLDER}/env/graphql/dev.env ${GRAPHQL_FOLDER}/.env
cp ${SCRIPTS_FOLDER}/docker/graphql/Dockerfile.dev ${GRAPHQL_FOLDER}/Dockerfile