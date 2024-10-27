# dockerfile
FROM alpine:latest

RUN apk add --no-cache nginx nodejs npm

WORKDIR /app

COPY ./src /app/src
COPY ./public /app/public
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm i 
RUN npm run build

RUN cp -r /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]