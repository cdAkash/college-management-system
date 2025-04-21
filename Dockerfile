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
RUN npm ci  # This includes dev dependencies needed for building

# Copy frontend source code
COPY frontend/ ./

# Install Vite and React plugin explicitly
RUN npm install --save-dev @vitejs/plugin-react vite

# Build frontend production assets
RUN npm run build || echo "No build script found, assuming static frontend"

# Build backend
FROM base as backend-build
WORKDIR /app/backend

# Copy backend package files and install dependencies
COPY backend/package*.json ./
RUN npm ci  # This includes dev dependencies

# Copy backend source code
COPY backend/ ./

# Final production image
FROM base

# Set environment variables
ENV NODE_ENV=production
ENV PORT=10000
ENV FRONTEND_PORT=3000

# Copy frontend from frontend-build stage
WORKDIR /app
COPY --from=frontend-build /app/frontend /app/frontend

# Copy backend files with production dependencies
COPY --from=backend-build /app/backend /app/backend

# Install production dependencies in the final image
WORKDIR /app/backend
RUN npm ci --only=production
WORKDIR /app/frontend
RUN npm ci --only=production
RUN npm install -g serve

# Setup supervisor to manage both services
WORKDIR /app
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose ports
EXPOSE 10000 3000

# Start supervisord to manage both services
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]