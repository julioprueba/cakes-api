FROM node:14-slim

WORKDIR /code

COPY . .
RUN npm install

CMD ["npm", "run", "dev:app"]
