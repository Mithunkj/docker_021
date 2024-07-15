FROM node

RUN mkdir -p /home/frontend/user_ui

WORKDIR /home/frontend/user_ui

COPY package*.json .

RUN npm install

COPY . /home/frontend/user_ui

RUN npm run build
RUN npm install -g serve

EXPOSE 5002

CMD ["serve", "-s", "dist", "-l", "5002"]