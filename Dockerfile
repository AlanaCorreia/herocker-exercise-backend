FROM node:16.0.0

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "src/api/server.js"]

