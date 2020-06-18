FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run-script build

FROM nginx:alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /app/build /app
COPY nginx.conf /etc/nginx/nginx.conf