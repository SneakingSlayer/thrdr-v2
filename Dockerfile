FROM node:16-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5137
CMD [ "npm", "run", "dev" ]