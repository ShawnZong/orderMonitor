FROM node:16-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install -g serve
RUN npm run build
CMD ["serve","-s","-l","3000","build"]