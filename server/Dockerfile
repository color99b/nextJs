FROM node:18.14.2

WORKDIR /app

COPY package*.json ./

COPY ./ ./

RUN npm ci

RUN npm run build



ENTRYPOINT [ "npm", "start" ]
   

