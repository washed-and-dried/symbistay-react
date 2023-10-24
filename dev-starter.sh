#!/usr/bin/env bash

cat <(curl -s "https://raw.githubusercontent.com/symbuilding/Symbistay-backend/master/src/main/resources/banner.txt?token=GHSAT0AAAAAACHLTOTRNLSY5G63E4EB5PRQZJXJ27Q")
echo -e "\n"
echo -e  "===========================\n"
echo "Running Symbistay backend container"

docker-compose -f ./dev-docker-compose.yml up -d

echo -e  "===========================\n"
echo "Running Symbistay frontend for development"

npm run dev

echo -e  "===========================\n"
echo "Shutting down docker containers"

docker-compose down