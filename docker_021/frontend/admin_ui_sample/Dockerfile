FROM node

RUN mkdir -p /home/frontend/admin_ui

WORKDIR /home/frontend/admin_ui

COPY package*.json .

RUN npm install

COPY . /home/frontend/admin_ui

RUN npm run build
RUN npm install -g serve

EXPOSE 5001

CMD ["serve", "-s", "dist", "-l", "5001"]




