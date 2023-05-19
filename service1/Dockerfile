FROM node:20

WORKDIR /service1

COPY . .
RUN npm i 

ENTRYPOINT [ "npm", "run", "serve" ]
