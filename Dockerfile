FROM node:erbium
WORKDIR /usr/dist/src

COPY package*.json ./

RUN npm install -g typescript
RUN npm install

COPY . .

EXPOSE 3001
CMD [ "npm", "run", "start:prod" ]