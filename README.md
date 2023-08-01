# Chat Application with JSON Server

This project is a simple chat application built using React.js, TypeScript, Redux, and a JSON server. It allows users to simulate a conversation with a mock ChatGPT service and stores the chat data in a JSON server.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies and Libraries Used](#technologies-and-libraries-used)
- [Server Interaction](#server-interaction)
- [Simulated ChatGPT Service](#simulated-chatgpt-service)
- [Assumptions and Decisions](#assumptions-and-decisions)

## Features

- User-friendly chat interface.
- Simulated conversation with ChatGPT.
- Chat messages stored in a JSON server.
- Input validation for messages.
- Error handling during server interaction.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 16.X.X or higher)
- npm (version 8.19.X or higher)

### Installation

1. Move to project's directory

```bash
$ cd chat-application
```

2. Install the dependencies:

```bash
$ npm install
```

## Usage

1. Start the JSON server:

```bash
$ npm run jsonserver
```

This will start the JSON server on http://localhost:3000.

2. Start the React application:

```bash
$ npm run dev
```

This will launch the chat application in your browser.

3. Interact with the chat interface by entering messages and sending them. The ChatGPT service will respond with preset messages. The chat data will be stored in the JSON server.

## Technologies and Libraries Used

- react.js
- typescript
- redux
- react-hook-form
- react-toastify
- tailwind.css

## Server Interaction

The chat application interacts with a JSON server to store and retrieve chat data. When a message is sent, it is POSTed to the server, and when the app is loaded, it GETs the existing chat data from the server.

## Simulated ChatGPT Service

The application includes a simulated ChatGPT service implemented as a Redux thunk. It responds to user messages with preset messages. The state changes are managed through Redux actions and reducers. Application stores predefined answers in an object, using the question as the object key and the answer as the corresponding value. When making a POST request to save the question, it includes the predefined answer in the request payload and save it in the DB.

## Assumptions and Decisions

- I prefer Vite over Create React App because I encountered some issues with Create React App related to vulnerabilities. Therefore, I try to avoid using it in my projects.
- I have developed a custom theme for styling, and for this particular project, I opted for Tailwind CSS since the application is small. However, I generally prefer using UI libraries such as Chakra UI when creating design systems.
- I have a preference for organizing modules within applications, ensuring that related files reside together. However, considering the small size of this particular application, I have created separate "components" and "containers" folders and placed all my components there. Nevertheless, if you take a look, you will notice that the "store" and "api" folders are still kept separate.
- In an effort to minimize the use of libraries, I have only incorporated two: react-toastify and react-hook-form. I chose react-toastify to create quick and seamless notifications, ensuring a positive user experience. As for react-hook-form, I found it to be an excellent library for form validation. Its benefits include the ability to prevent unnecessary re-renders, contributing to improved performance.
