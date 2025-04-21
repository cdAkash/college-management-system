# Use Node.js 20 as the base image
FROM node:20-alpine as base

# Install necessary tools
RUN apk add --no-cache supervisor

# Set working directory
WORKDIR /app

# Build frontend
FROM base as frontend-build
WORKDIR /app/frontend

# Copy frontend package files and install dependencies
COPY frontend/package*.json ./
RUN npm ci

# Copy the vite config first to ensure it can be properly configured
COPY frontend/vite.config.js ./

# Make sure react plugin is explicitly installed
RUN npm install --save-dev @vitejs/plugin-react@4.3.4 vite@6.0.1

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

# Set environment variables
ENV NODE_ENV=production
ENV PORT=10000
ENV FRONTEND_PORT=3000

# Copy frontend from frontend-build stage with build directory
WORKDIR /app
COPY --from=frontend-build /app/frontend /app/frontend

# Copy backend files with production dependencies
COPY --from=backend-build /app/backend /app/backend

# Install production dependencies in the final image
WORKDIR /app/backend
RUN npm ci --only=production

# Install serve globally for the frontend
WORKDIR /app/frontend
RUN npm install -g serve

# Setup supervisor to manage both services
WORKDIR /app
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose ports
EXPOSE 10000 3000

# Start supervisord to manage both services
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]