FROM node
WORKDIR /app/dist

RUN yarn global add nodemon
COPY ./package.json /app/package.json
RUN yarn 
COPY . /app
RUN yarn tsc

CMD ["node"]