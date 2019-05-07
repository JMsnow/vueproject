FROM node

WORKDIR /usr/src/app

COPY package*.json ./

COPY app.js ./

RUN npm i

EXPOSE 8888
CMD [ "npm", "start" ]
