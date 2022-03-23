FROM node:alpine
WORKDIR /usr/src/app
COPY package* ./
RUN npm install
RUN npm install -g serve
RUN npm run build