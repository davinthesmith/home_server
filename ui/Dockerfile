#build in node
FROM node as build-react
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

#serve in nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d./default.conf
COPY --from=build-react /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]