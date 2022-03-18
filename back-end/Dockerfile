FROM node:alpine
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
EXPOSE 3001
COPY . .
RUN ["npm", "run", "db:reset"]
RUN ["npm", "start"]
