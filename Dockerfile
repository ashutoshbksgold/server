#
FROM node:10-alpine

RUN 

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD ["node" , "server.js"]
