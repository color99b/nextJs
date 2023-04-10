FROM node:latest

WORKDIR /

COPY package.json package-lock.json ./ ./

COPY / server/

RUN npm ci

COPY index.ts tsconfig.json ./


ENTRYPOINT [ "node", "index.ts" ]
   

