FROM node:18.18.1-alpine3.18 AS build

WORKDIR /build
COPY package-lock.json package.json ./
RUN npm ci
COPY . .
RUN npm run build

# not sure what is the difference between nginx mainline and mainline slim. Will use this for now.
FROM nginx:mainline-alpine-slim
RUN mkdir -p /usr/share/nginx/symbistay/html
RUN rm /etc/nginx/conf.d/*
COPY --from=build /build/symbistay.nginx.conf /etc/nginx/conf.d/symbistay.conf
COPY --from=build /build/dist /usr/share/nginx/symbistay/html