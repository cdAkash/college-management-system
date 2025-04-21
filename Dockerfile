# Use Node.js LTS version as the base image
FROM node:18-alpine as base

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

# Copy frontend source code
COPY frontend/ ./

# Build frontend production assets (if using Create React App or similar)
RUN npm run build || echo "No build script found, assuming static frontend"

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
ENV PORT=8080
ENV FRONTEND_PORT=3000

# Copy frontend from frontend-build stage
WORKDIR /app
COPY --from=frontend-build /app/frontend /app/frontend

# Copy backend files with production dependencies
COPY --from=backend-build /app/backend /app/backend
WORKDIR /app/backend
RUN npm ci --only=production

# Setup supervisor to manage both services
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose ports
EXPOSE 8080 3000

# Start supervisord to manage both services
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]