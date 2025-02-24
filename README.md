# Project Andre Moura Passos

This project contains the application for the **Andre Moura Passos** personal website, integrating a robust backend with a modern React frontend. The project leverages a range of technologies to deliver a comprehensive web experience and serves as a digital portfolio that showcases creative works, audio compositions, and personal projects.

## Overview

The application is divided into two main parts:
- **Backend**: Handles API requests, data management, email processing, and playlist control. It also serves a collection of audio files organized by category.
- **Frontend**: Built with React, it delivers an interactive and responsive user interface with support for multiple languages. The site features dynamic visual elements, a media player for curated audio content, and sections dedicated to showcasing personal projects and creative expression.

## Site Content and Purpose

The **Andre Moura Passos** website is designed as a digital showcase for personal and creative projects. It includes:
- A **Hero Section** with compelling visuals that immediately engage visitors.
- A **Media Player** that provides access to curated playlists and audio tracks, emphasizing the musical and creative aspects of the portfolio.
- **Portfolio and Contact Sections** that highlight creative works, projects, and offer ways to get in touch.

The primary purpose of the site is to establish a personal brand, share artistic outputs, and provide an engaging, interactive experience for visitors.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.  
It bundles React in production mode and optimizes the build for the best performance.  
The build is minified and the filenames include hashes.  
Your app is ready to be deployed!

For additional details on deployment, please refer to the [Vercel documentation](https://vercel.com/docs).

## Technologies Used

### Backend

- **Node.js**  
  Provides the runtime environment for executing JavaScript on the server.

- **Express (implied)**  
  The project structure suggests the use of an Express-like framework for handling HTTP requests.

- **GraphQL**  
  Implements API queries and mutations using defined schemas and resolvers.

- **Vercel**  
  Configured for deployment on Vercel via the provided settings.

- **Custom Controllers**  
  Manage specific functionalities such as email transmissions and playlist management.

- **Audio Management**  
  Organizes and serves various MP3 audio files, categorized into groups like Cocktail Nº1, Cocktail Nº2, Singles, etc.

### Frontend

- **React**  
  A JavaScript library for building dynamic and responsive user interfaces.

- **Create React App**  
  Provides the initial project setup and development workflow for the React application.

- **Tailwind CSS**  
  A utility-first CSS framework used for rapid development of modern, responsive designs.

- **Internationalization (i18n)**  
  Supports multiple languages (English, Spanish, and Portuguese) through dedicated locale files.

- **Custom Hooks**  
  Implements functionalities like responsive design (`useIsMobile`, `useIsWide`) and modal management (`useModal`).

- **GraphQL Client**  
  Facilitates efficient communication with the backend GraphQL API.

- **Visual Assets**  
  Incorporates custom fonts (e.g., Bellota Text) and various images and icons to enhance the visual interface.

### Additional Tools

- **NPM**  
  Manages dependencies and executes project scripts.

- **Visual Studio Code**  
  The project includes a workspace configuration to optimize the development environment.

## Deployment

The project is configured for deployment on **Vercel**. For additional configuration details and deployment instructions, please refer to the [Vercel documentation](https://vercel.com/docs).

## Note

This project is not open for contributions.

## Learn More

To learn more about the technologies used in this project, check out the following resources:
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Vercel Documentation](https://vercel.com/docs)
