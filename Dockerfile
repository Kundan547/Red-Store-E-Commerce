FROM nginx:alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the project files to the Nginx directory
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
