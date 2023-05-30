FROM ubuntu:20.04

RUN apt-get update && apt-get install -y curl make build-essential g++ gcc default-jre-headless zip unzip lsof nano

RUN cd ~ && curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh && bash nodesource_setup.sh

RUN apt install nodejs

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt update && apt install yarn

RUN mkdir -p /home/node/app/node_modules && chown -R root:root /home/node/app

WORKDIR /home/node/app

COPY package.json ./

USER root

RUN npm install

RUN npm install -g serverless

RUN yarn install

COPY ./custom/vtl.js /home/node/app/node_modules/@conduitvc/appsync-emulator-serverless/vtl.js

RUN apt-get install -y redis-server