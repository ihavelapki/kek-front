# dockerfile
FROM node:16.9.1-alpine as build

COPY package.json ./

RUN npm i && mkdir /app && mv ./node_modules ./app

WORKDIR /app

COPY . .

RUN npm run build


FROM nginx:1.25.3-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]