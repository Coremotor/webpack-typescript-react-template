FROM node:18.16.0 AS builder

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

COPY /config/nginx /etc/nginx

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]