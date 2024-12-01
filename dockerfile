# Step 1: Build the application
# Use an official Node.js image to build the app
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vue.js application for production
RUN npm run build

# Step 2: Serve the application using a lightweight web server
# Use an official Nginx image to serve the app
FROM nginx:alpine

# Copy the built Vue.js application from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to access the application from the outside world
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
