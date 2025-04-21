# Use Node.js LTS version as the base image
FROM node:18-alpine as base

# Set working directory
WORKDIR /app

# Build frontend
FROM base as frontend-build
WORKDIR /app/frontend

# Copy frontend package files and install dependencies
COPY frontend/package*.json ./
RUN npm ci

# Copy frontend source code
COPY frontend/ ./

# Build frontend production assets
RUN npm run build

# Build backend
FROM base as backend-build
WORKDIR /app/backend

# Copy backend package files and install dependencies
COPY backend/package*.json ./
RUN npm ci

# Copy backend source code
COPY backend/ ./

# Final production image
FROM base

# Set environment variables (these will be overridden by Render's environment variables)
ENV NODE_ENV=production
ENV PORT=8080

# Copy built frontend from frontend-build stage
COPY --from=frontend-build /app/frontend/build /app/frontend/build

# Copy backend files with production dependencies
WORKDIR /app/backend
COPY --from=backend-build /app/backend/package*.json ./
RUN npm ci --only=production
COPY --from=backend-build /app/backend ./

# Create start script
WORKDIR /app
RUN echo '#!/bin/sh\ncd /app/backend\nnode server.js' > start.sh
RUN chmod +x start.sh

# Expose the port the app will run on
EXPOSE 8080

# Start the application
CMD ["./start.sh"]