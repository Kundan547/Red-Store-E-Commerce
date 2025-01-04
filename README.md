Web Application
This is a web application project that uses Docker and Nginx to serve a static website. The website includes HTML pages, styles, JavaScript, and assets like images.

Project Structure
bash
Copy code
WebApplication/
├── assets/                 # Static assets (e.g., images)
│   ├── product1.jpeg
│   ├── product2.jpeg
│   └── ...
├── docker-compose.yml      # Docker compose configuration
├── Dockerfile              # Dockerfile for building the image
├── frontend/               # HTML, CSS, JS for the frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
├── login_sign/             # Login and sign-up pages
│   ├── login.html
│   ├── signup.html
│   └── guest.html
├── nginx.conf              # Nginx configuration file
└── README.md
Assets
The assets/ directory contains images used throughout the site (e.g., product images).
The frontend/ directory contains HTML, CSS, and JavaScript files for the website’s layout and interactivity.
The login_sign/ directory contains login, signup, and guest pages.
Technologies Used
Nginx: For serving static files and handling HTTP requests.
Docker: For containerizing the web server and making it easy to deploy and run.
HTML/CSS/JavaScript: For the frontend design and interactivity.
Setup and Running Locally
Follow these steps to run the project locally:

1. Clone the repository
Clone this repository to your local machine using the following command:

bash
Copy code
git clone <repository-url>
cd WebApplication
2. Install Docker and Docker Compose
Ensure that Docker and Docker Compose are installed on your machine. You can follow the instructions from the official Docker website for installation.

3. Build and Run with Docker Compose
Run the following commands to build and start the application using Docker Compose:

bash
Copy code
docker-compose up --build -d
This will build the Docker image, start the container, and run the Nginx server.

4. Access the Application
Once the application is up and running, you can access it in your web browser at:

arduino
Copy code
http://localhost:8080
This should display your web application, including static content like images and styles.

5. Stopping the Application
To stop the running containers, use the following command:

bash
Copy code
docker-compose down
This will stop the containers but leave the images intact.

Nginx Configuration
The nginx.conf file configures Nginx to:

Serve static assets like images, CSS, and JavaScript from the assets/ directory.
Serve the main index.html page at the root URL.
Customizing Nginx Configuration
If you need to make any customizations to the Nginx server, modify the nginx.conf file as needed and rebuild the Docker container:

bash
Copy code
docker-compose up --build -d
Dockerfile
The Dockerfile contains the instructions to build a Docker image for this application. It starts from the official Nginx image, copies the project files, and configures Nginx.

Notes
Ensure that the directory structure is correct, with all assets and HTML files in the appropriate folders.
The project uses port 8080 to map to Nginx’s port 80. You can change this in the docker-compose.yml file if needed.