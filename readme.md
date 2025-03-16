
# Referral-Based User Registration System




## Project Overview

This project is a Referral-Based User Registration System that allows users to sign up, log in, and refer others using a hierarchical structure. The system efficiently tracks referrals and visualizes the referral tree using D3.js. It includes user authentication, referral tracking, and secure API endpoints.

✅ Due to time constraints, only the frontend has been deployed, while the backend has been tested using Postman and XAMPP Control Panel.
## Features

#### - User Management & Authentication
   - ✅ JWT-based authentication for user login and session     management.
   - ✅ Secure password encryption using bcrypt.js.
   - ✅ Role-based access control for API endpoints.
#### - Referral Tracking System
   - ✅ Users can refer others using a unique referral code.
- ✅ Hierarchical referral structure stored in MySQL.
- ✅ D3.js-based visualization of the referral tree.
#### - API Development & Optimization
- ✅ Backend built using Node.js & Express.js.
- ✅ API endpoints tested using Postman.
- ✅ Secure API endpoints using authentication middleware.
#### - Frontend Development
- ✅ Built using HTML, CSS, and JavaScript.
- ✅ Responsive UI with Bootstrap.
- ✅ D3.js for referral tree visualization.
#### - Deployment
- ✅ Frontend deployed on Vercel.
- ✅ Backend tested locally using Postman & XAMPP Control Panel.



## Technologies Used
| **Component**  | **Technology Used** |
|---------------|------------------|
| Backend | Node.js, Express.js |
| Frontend | HTML, CSS, JavaScript, Bootstrap |
| Database | MySQL (Hosted locally via XAMPP) |
| Security | JWT Authentication, bcrypt.js for password encryption |
| Visualization | D3.js for Referral Tree |
| Deployment | Vercel (Frontend), GitHub for version control |
| Testing Tools | Postman (API Testing), XAMPP (Database Management) |

## Project Structure

```sh
Referral_based-UR_system/
│-- backend/
│   │-- config/
│   │   └── db.js
│   │-- middleware/
│   │   └── auth.js
│   │-- routes/
│   │   ├── auth.js
│   │   └── userRoutes.js
│   │-- package-lock.json
│   │-- server.js
│
│-- frontend/
│   │-- dashboard.html
│   │-- dashboard.js
│   │-- index.html
│   │-- referral_tree.html
│   │-- referralTree.js
│   │-- script.js
│   │-- style.css
│   │-- style2.css
│   │-- login.jpg
│   │-- login2.jpg
│   │-- image.webp
│   │-- image2.jpg
│
│-- .env
│-- .gitignore
│-- package.json
│-- package-lock.json
│-- vercel.json
│-- README.md
```
## How to Run the Project Locally
#### - Clone the Repository
 ```sh
 git clone https://github.com/pushpdeep07/Referral_based-UR-system.git
cd Referral_based-UR_system
```
#### - Install Backend Dependencies
 ```sh
 cd backend
npm install
```
#### - Configure Environment Variables
Create a ``` .env``` file in the backend/ directory with the following details:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=referral_db
PORT=5000
JWT_SECRET=5a7f8d9b3c1e2a4f56789abcd1234567890abcdef123456789abcdef7890

```
#### - Start XAMPP (for MySQL Database)
    - Open XAMPP Control Panel.
    - Start the Apache and MySQL modules.
    - Go to phpMyAdmin (http://localhost/phpmyadmin/) and create the database.
#### - Start Backend Server
```
node server.js
```
#### - Start Frontend
Since we are using static HTML, open ```frontend/index.html``` in a browser or use a local development server:
```
cd frontend
npx serve .
```

    
## Deployment Details

### - Frontend Deployment (Vercel)
✅ The frontend is hosted on Vercel.

Website URL:
```arduino
https://referral-based-ur-system-git-master-pushpdeeps-projects.vercel.app/
```
### - Backend Not Deployed

✅ The backend has been tested locally using Postman and XAMPP.

✅ The database is running on XAMPP (localhost MySQL).
## Testing and Security Measures

### -  API Testing using Postman
✅ API endpoints were tested using Postman.

✅ Screenshots of successful API requests (registration, login, dashboard) are provided below.
### - Database Testing using XAMPP
✅ MySQL database hosted on XAMPP, verified using phpMyAdmin.
### - Security Enhancements
✅ Encrypted passwords using bcrypt.js.

✅ Secured API endpoints with JWT authentication.

✅ Prevented unauthorized access using middleware-based validation.

## Future Improvements
✅ Deploy backend on Vercel or AWS for full functionality.

✅ Implement a notification system for successful referrals.

✅ Add an admin dashboard for managing users and referrals.

✅ Improve UI/UX with a modern design.

## Contributors
👨‍💻 Pushpdeep Teotia

📍 Student at IIT Kanpur

📧 Email: pushpdeept07@gmail.com

📞 Contact: 8826330237

## Conclusion
✅ This project successfully implements a referral-based user registration system with:

 - ✔ Secure authentication

 - ✔ Structured database

- ✔ Functional frontend

- ✔ API testing using Postman

🚀 The D3.js referral tree visualization enhances usability, and the project is designed to be scalable and secure.