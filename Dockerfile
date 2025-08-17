FROM node:23.11.1-slim

WORKDIR /

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 5000

CMD ["node", "dist/src/index.js"]