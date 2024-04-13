# OS: Debian Buster
# Node.js: 14.4.0
FROM node:20.9.0
ENV NODE_ENV=production
# Create app directory
WORKDIR /portfolio3

# Install app dependencies (package.json and package-lock.json)
#COPY package*.json ./
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

# Bundle app source (server.js)
COPY . .

# Listen port
EXPOSE 8080

# Run Node.js
CMD [ "npm", "start" ]
