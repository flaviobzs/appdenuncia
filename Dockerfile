FROM node:15-alpine

EXPOSE ${PORT}

RUN mkdir -p /app
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile --link-duplicates --non-interactive
COPY . ./
RUN yarn run build

CMD yarn start -- -p ${PORT}
