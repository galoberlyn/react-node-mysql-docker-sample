FROM node:14.20.0
RUN mkdir -p /app/server
WORKDIR /app/server
COPY package*.json ./
RUN npm install
COPY . /app/server
EXPOSE 8000
CMD ["npm", "run", "dev"]
