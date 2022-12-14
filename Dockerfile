#syntax=docker/dockerfile:1
FROM node:slim

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["yarn", "build"]

CMD ["yarn", "global", "add", "serve"]

CMD ["serve", "-s", "build"]
