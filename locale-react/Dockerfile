FROM node:18-alpine

# Create the work directory
RUN mkdir -p /app

# Change ownership of the work directory
RUN chown -R node:node /app

# Set the working directory to /app
WORKDIR /app

# Switch to the node user
USER node

# Copy package.json and yarn.lock first to take advantage of Docker caching
COPY --chown=node:node ./package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY --chown=node:node . .

# Expose port 3000 for the React app
EXPOSE 3000

# start app
CMD ["npm", "start"]