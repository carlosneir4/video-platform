FROM node:12-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install

COPY . /app/

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

