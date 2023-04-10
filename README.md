# Adobe-Assignment

## Problem Statement
You are tasked with creating a simple social media platform consisting of a backend API and a frontend UI, and analytics pages. The platform should support creating,
reading, updating, and deleting operations for user profiles and posts. In addition, users should be able to "like" and "unlike" posts. The analytics pages should display insights on user engagement and content popularity.

## Deploy

* Frontend Deploy - https://frontend-indol-five.vercel.app/
* Backend Deploy - https://adobe-backend-ek2e.onrender.com

## Tech Stack

* React.js
* Node.js
* Express.js
* MongoDb
* Javascript
* Chakra-UI

## Setup

* git clone
```
git clone https://github.com/imran120198/Adobe-Assignment.git
```
* install dependency
```
npm i install
```
* run command
```
For frontend - npm run start
For Backend - nodemon index.js
```

## Endpoints

* User Endpoint
```
POST /users: Create a new user.
GET /users/{id}: Retrieve a user by id.
PUT /users/{id}: Update a user's name or bio by id.
DELETE /users/{id}: Delete a user by id.
GET /analytics/users: Retrieve the total number of users.
GET /analytics/users/top-active: Retrieve the top 5 most active users, based on
the number of posts.
```

* Post Endpoints
```
POST /posts: Create a new post. The request should include the user_id.
GET /posts/{id}: Retrieve a post by id.
PUT /posts/{id}: Update a post's content by id.
DELETE /posts/{id}: Delete a post by id.
POST /posts/{id}/like: Increment the like count of a post by id.
POST /posts/{id}/unlike: Decrement the like count of a post by id. The count should not go below 0.
GET /analytics/posts: Retrieve the total number of posts.
GET /analytics/posts/top-liked: Retrieve the top 5 most liked posts.
```



