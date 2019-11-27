# For build
FROM node:12.3.0-alpine as builder
WORKDIR /app
COPY . /app
RUN apk update \
    && apk add --no-cache make python g++ \
    && npm install \
    && npm run build \
    && rm -rf node_modules \
    && npm install --production

FROM node:12.3.0-alpine
ENV NODE_ENV="production"
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
WORKDIR /app
COPY --from=builder /app/.nuxt /app/.nuxt
COPY --from=builder /app/node_modules /app/node_modules
COPY ./package.json /app/package.json
COPY ./nuxt.config.js /app/nuxt.config.js
EXPOSE 3000
CMD ["npm", "start"]
