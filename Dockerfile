FROM node:16

WORKDIR /app
COPY . /app

RUN cd client \
  && npm install \
  && npm run build \
  && cd .. 

RUN rm -r server/build server/dist | cat \
  && mv -f ./client/build server \
  && cd server \
  && npm install

EXPOSE 3044

CMD cd server && npm run build
