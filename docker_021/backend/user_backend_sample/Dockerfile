FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=password

RUN mkdir -p /home/backend/user_backend

WORKDIR /home/backend/user_backend

COPY package*.json .

RUN npm install

COPY . /home/backend/user_backend

EXPOSE 7002

CMD ["npm","start"]