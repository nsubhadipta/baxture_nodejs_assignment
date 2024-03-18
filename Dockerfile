# Use official Node.js 20 LTS image as base
FROM node:20

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code to working directory
COPY . .

# Expose port
EXPOSE 4000

# Command to run your application
CMD ["npm", "run", "start:prod"]
