# Angelin_SocialMediaStartup

This project is a demonstration of building an API for a social network web application using Express.js for routing, MongoDB as a NoSQL database. The API allows users to share their thoughts, react to friends' thoughts, and manage their friend list.

## Table of Contents
- [Technologies](#technologies)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Video Walkthrough](#video-walkthrough)

## Technologies
- Express.js
- MongoDB
- Insomnia

## Usage
1. Clone the repository.
2. Install the necessary dependencies using `npm install`.
3. Run the application using `node server.js`.
4. Use Insomnia or a similar tool to test the provided API routes.

## API Routes
- **GET /api/users**: Get all users.
- **GET /api/users/:id**: Get a single user by ID and populate thought and friend data.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:id**: Update a user by ID.
- **DELETE /api/users/:id**: Remove a user by ID.
- **POST /api/users/:userId/friends/:friendId**: Add a new friend to a user's friend list.
- **DELETE /api/users/:userId/friends/:friendId**: Remove a friend from a user's friend list.

- **GET /api/thoughts**: Get all thoughts.
- **GET /api/thoughts/:id**: Get a single thought by ID.
- **POST /api/thoughts**: Create a new thought.
- **PUT /api/thoughts/:id**: Update a thought by ID.
- **DELETE /api/thoughts/:id**: Remove a thought by ID.

- **POST /api/thoughts/:thoughtId/reactions**: Create a reaction for a specific thought.
- **DELETE /api/thoughts/:thoughtId/reactions**: Remove a reaction from a thought.

## Video Walkthrough
Watch the video walkthrough demonstrating the functionality and how the acceptance criteria are met: [Link to Video Walkthrough](<video src="assets/Angelin_SocialMediaStartupWalkThrough.mp4" controls title="Angelin_SocialMediaWalkThough"></video>)
May need to download the mp4 video to enable audio from the assets folder. Also, Attached is a link incase the demo mp4 does not work https://clipchamp.com/watch/lmYe5EEXlxD
