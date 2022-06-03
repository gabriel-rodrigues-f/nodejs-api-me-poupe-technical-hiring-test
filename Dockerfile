FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN yarn stg

COPY . .

EXPOSE 3000

CMD ["yarn", "stg"]