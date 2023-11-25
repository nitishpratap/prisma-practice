# Use a Node.js base image
FROM node

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npx prisma generate
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Define the command to start the app
CMD ["npm", "start"]
