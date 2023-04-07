FROM node

WORKDIR /

COPY package.json package-lock.json ./

RUN npm ci

COPY index.ts tsconfig.json

ENTRYPOINT [ "node", "index.ts" ]
