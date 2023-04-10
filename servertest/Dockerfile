FROM node:latest

WORKDIR /

COPY package.json package-lock.json ./ ./

COPY / servertest/

RUN npm ci

COPY src/pages/index.tsx tsconfig.json ./


ENTRYPOINT [ "npm", "run dev" ]
   

