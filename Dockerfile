FROM node:18.18.1-alpine3.18 AS build

WORKDIR /build
COPY package-lock.json package.json ./
RUN npm ci
COPY . .
RUN npm run build

# not sure what is the difference between nginx mainline and mainline slim. Will use this for now.
FROM nginx:mainline-alpine-slim

COPY --from=build /build/dist /usr/share/nginx/html