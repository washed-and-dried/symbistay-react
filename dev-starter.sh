#!/usr/bin/env bash

echo -e  "===========================\n"
echo -e "Running for development\n"
echo -e  "===========================\n"

echo -e  "===========================\n"
echo "Running Symbistay backend container"

docker-compose -f ./dev-docker-compose.yml up -d

echo -e  "===========================\n"
echo "Running Symbistay frontend for development"

npm run dev

echo -e  "===========================\n"
echo "Shutting down docker containers"

docker-compose down