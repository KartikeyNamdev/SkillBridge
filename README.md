## SKILL BRIDGE

**SKILL BRIDGE** is an innovative platform designed to enhance vocational education and training by integrating modern technology and industry expertise. Our goal is to bridge the gap between education and industry requirements, preparing students for successful careers in today’s job market.

## **Table of Contents**

1.  [Introduction](#introduction)
2.  [Features](#features)
3.  [Technologies](#technologies)
4.  [Installation](#installation)
5.  [Usage](#usage)
6.  [API Endpoints](#api-endpoints)
7.  [Contributing](#contributing)
8.  [License](#license)
9.  [Contact](#contact)

## **Introduction**

**SKILL BRIDGE** is built to transform vocational education by integrating cutting-edge solutions like Virtual Reality (VR) training modules, AI-powered career guidance, digital skill badges, mobile training labs, and online apprenticeship platforms. This project is part of the Smart India Hackathon initiative and aims to provide a comprehensive solution for skill development.

It need to support 2 types of user-
a.Admin
b.Student

Admins are allowed to signup,create courses,create internships,give problems for practice.
Users can Signup, view courses,purchase courses, view internships, solve problems on code editor and chat to our bot for career guidance.

## **Features**

- **Virtual Reality (VR) Training Modules**: Immersive training experiences that simulate real-world scenarios.
- **AI-Powered Career Guidance**: Personalized career paths and skill development recommendations.
- **Digital Skill Badges**: Certifications and badges for completed training modules.
- **Mobile Training Labs**: Practical training delivered to remote and underserved areas.
- **Online Apprenticeship Platforms**: Connects students with industry partners for hands-on experience.

## **Technologies**

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Validation**: Zod
- **Deployment**: Docker (Optional)
- **Version Control**: Git

## **Installation**

### **Prerequisites**

- Node.js (v14 or later)
- MongoDB

### **Backend Setup**

1.  Clone the repository:

    `git clone https://github.com/yourusername/**SKILL BRIDGE**.git`

2.  Navigate to the backend directory:

    `cd **SKILL BRIDGE**/backend`

3.  Install dependencies:

    `npm install`

4.  Create a `.env` file in the root directory and add the following environment variables:

        `MONGO_URI=your_mongodb_connection_string

    PORT=5000`

5.  Start the server:

    `npm start`

### **Frontend Setup**

1.  Navigate to the frontend directory:

    `cd **SKILL BRIDGE**/frontend`

2.  Install dependencies:

    `npm install`

3.  Start the development server:

    `npm start`

## **Usage**

- **Frontend**: Open `http://localhost:3000` in your browser to access the web application.
- **Backend**: The API will be available at `http://localhost:5000/api/`.

## **API Endpoints**

### **Authentication**

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Authenticate a user and get a JWT token.

### **Vocational Training**

- **GET /api/training**: Get a list of available training modules.
- **POST /api/training/enroll**: Enroll in a training module.

## **Contributing**

We welcome contributions to enhance **SKILL BRIDGE**! To contribute:

1.  Fork the repository.
2.  Create a new branch:

    `git checkout -b feature/your-feature`

3.  Commit your changes:

    `git commit -am 'Add some feature'`

4.  Push to the branch:

    `git push origin feature/your-feature`

5.  Open a Pull Request.

## **License**

This project is licensed under the MIT License - see the LICENSE file for details.

## **Contact**

For any questions or inquiries, please reach out to:

- **Kartikey Namdev**: email@example.com

## Routes

### Admin Routes:

- POST /admin/register
  Description: Creates a new admin account.
  Input Body: { username: 'admin', password: 'pass' }
  Output: { message: 'Admin created successfully' }

- POST /admin/login
  Description: Logs in an admin account.
  Input Body: { username: 'admin', password: 'pass' }
  Output: { token: 'your-token' }

- POST /admin/courses
  Description: Creates a new course.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }, Body: { title:
  'course title', description: 'course description', price: 100, imageLink:
  'https://linktoimage.com' }
  Output: { message: 'Course created successfully', courseId: "new course id" }

- POST /admin/internship
  Description: Creates a new internship.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }, Body: { title:
  'course title', description: 'course description', price: 100, imageLink:
  'https://linktoimage.com' }
  Output: { message: 'Course created successfully', courseId: "new course id" }
- GET /admin/courses
  Description: Returns all the courses.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { courses: [ { id: 1, title: 'course title', description: 'course
  description', price: 100, imageLink: 'https://linktoimage.com', published:
  true }, ... ] }

  - GET /admin/internship
    Description: Returns all the internship.
    Input: Headers: { 'Authorization': 'Bearer <your-token>' }
    Output: { courses: [ { id: 1, title: 'course title', description: 'course
    description', price: 100, imageLink: 'https://linktoimage.com', published:
    true }, ... ] }

### User routes

Users can Signup, view courses,purchase courses, view internships, solve problems
on code editor and chat to our bot for career guidance.

- POST /user/register
  Description: Creates a new user account.
  Input: { username: 'user', password: 'pass' }
  Output: { message: 'User created successfully' }
  ////////
- POST /user/login
  Description: Logs in a user account.
  Input: { username: 'user', password: 'pass' }
  Output: { token: 'your-token' }
  //////////
- GET /users/courses
  Description: Lists all the courses.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { courses: [ { id: 1, title: 'course title', description: 'course
  description', price: 100, imageLink: 'https://linktoimage.com', published:
  true }, ... ] }
  /////////////
- POST /users/courses/:courseId
  Description: Purchases a course. courseId in the URL path should be replaced
  with the ID of the course to be purchased.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { message: 'Course purchased successfully' }
  /////////////
- GET /users/purchasedCourses
  Description: Lists all the courses purchased by the user.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { purchasedCourses: [ { id: 1, title: 'course title', description:
  'course description', price: 100, imageLink: 'https://linktoimage.com',
  published: true }, ... ] }
  ///////////
- GET /users/internship
  Description: Lists all the internship.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { internship: [ { id: 1, title: 'course title', description: 'course
  description', price: 100, imageLink: 'https://linktoimage.com', published:
  true }, ... ] }
  ///////////
- POST /users/internship/:internshipId
  Description: Purchases a course. courseId in the URL path should be replaced
  with the ID of the course to be purchased.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { message: 'Course purchased successfully' }
  ////////////
- GET /users/myinternship
  Description: Lists all the internship purchased by the user.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { myinternship: [ { id: 1, title: 'course title', description:
  'course description', price: 100, imageLink: 'https://linktoimage.com',
  published: true }, ... ] }
