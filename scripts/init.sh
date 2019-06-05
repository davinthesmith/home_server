#!/bin/sh
SCRIPTS_FOLDER="$PWD/scripts"
GRAPHQL_FOLDER="$PWD/graphql"

# Copy Mongo env file if it doesn't exist
if [ ! -f ${SCRIPTS_FOLDER}/../mongo.env ]; then 
  cp ${SCRIPTS_FOLDER}/docker/sample.mongo.env ${SCRIPTS_FOLDER}/../mongo.env
fi