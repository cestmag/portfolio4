# OS: Debian Buster
# Node.js: 14.4.0
FROM node:10.1.0

# Create app directory
WORKDIR /portfolio3

# Install app dependencies (package.json and package-lock.json)
COPY package*.json ./
RUN npm install

# Bundle app source (server.js)
COPY . .

# Listen port
EXPOSE 3003

# Run Node.js
CMD [ "npm", "start" ]
