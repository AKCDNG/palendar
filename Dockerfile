FROM node:18

WORKDIR /PALENDAR-BACKEND

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8282

EXPOSE 8282

CMD [ "npm", "start" ]
