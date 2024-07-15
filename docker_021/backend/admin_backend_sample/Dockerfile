FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=password

RUN mkdir -p /home/backend/admin_backend

WORKDIR /home/backend/admin_backend

COPY package*.json .

RUN npm install

COPY . /home/backend/admin_backend

EXPOSE 7001

CMD ["npm","start"]