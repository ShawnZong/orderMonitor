FROM node:alpine
WORKDIR /usr/src/app
COPY pacakge* ./
RUN npm install
RUN npm install -g serve
RUN npm run build