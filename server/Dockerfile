# Development stage
FROM node:22-alpine AS development

# Dir set in the container
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Generate Prisma client
RUN npx prisma generate

# Copy source code
# Copy specific folders/files to optimize build cache
COPY src ./src

# Expose port
EXPOSE 3001

# Development command (uses nodemon for hot reload)
CMD ["npm", "run", "dev"]