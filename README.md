# Next.js Chatroom App with Socket.IO - Backend

This repository contains the backend server code for a real-time chatroom web application built using Next.js with App Router for the frontend and Express.js integrated with Socket.IO for the backend. This setup enables seamless communication between clients and the server, providing users with a smooth chat experience.

## Features

- **Real-time Communication**: Utilizes Socket.IO to enable real-time communication between clients and the server, ensuring instant message delivery.
- **Scalable Architecture**: Separates frontend and backend concerns, allowing for easy scalability and maintenance of the application.
- **Cross-Origin Resource Sharing (CORS)**: CORS is enabled to allow communication with the frontend hosted on a different origin.
- **Simple Setup**: Easy setup process allows developers to quickly get started with the project.

## Prerequisites

Before running the backend server, ensure you have the following installed:

- **Node.js**: Make sure you have Node.js installed on your system.
- **npm**: npm comes bundled with Node.js, but ensure you have a recent version.

## Getting Started

Follow these steps to set up and run the backend server:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/tejus05/backend-for-socket-io-using-next.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd backend-for-socket-io-using-next
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Start the Backend Server**:

   ```bash
   npm start
   ```

5. **Verify the Server**:

   Once the server is running, you should see a message indicating that the server is listening on a specific port (default is 4000). You can now proceed to set up and run the frontend application.

## Frontend Integration

To integrate this backend with the frontend of the chatroom application, please refer to the [Frontend Repository](https://github.com/tejus05/socket-io-using-next) for detailed instructions.

## Configuration

The backend server listens on port 4000 by default. You can modify the port in the `httpServer.listen()` method call in the `index.js` file if necessary.

Additionally, CORS is configured to allow requests from `http://localhost:3000` by default. You can adjust the CORS configuration in the `io` initialization options in the `index.js` file to fit your specific requirements.


By following these instructions, you'll be able to set up and run the backend server for the Next.js chatroom application. For the complete chat experience, ensure you also set up and integrate the frontend accordingly. Happy chatting!
