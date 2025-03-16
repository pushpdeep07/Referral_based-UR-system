
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


## API & Database Testing Screenshots  

### 1. API Testing using Postman  
Below are the screenshots of API testing performed using **Postman**:  

#### 1.1 Registering a New User  
![Image](https://github.com/user-attachments/assets/46bbdb57-ffbc-4507-8998-3dcbaccc7057)

#### 1.2 User Login API Test  
![Image](https://github.com/user-attachments/assets/18e4bda7-da1f-4546-b927-389782950a51)

#### 1.3 Fetching User Dashboard via API  
![Image](https://github.com/user-attachments/assets/e654eb4e-38e3-459c-9657-cd11562e346a)

---

### 2. Database Verification in XAMPP  
Screenshots of the **MySQL database** in **phpMyAdmin** after registering users:  

#### 2.1 Users Table in Database  
![Image](https://github.com/user-attachments/assets/96b65d34-21cb-45ee-8e1d-53c72052b1e4)

#### 2.2 User Successfully Added in Database  
![Image](https://github.com/user-attachments/assets/28f94008-6c05-4c7e-b47e-5ea2430022fc) 

---

## Frontend Testing Screenshots  

### 3. Web Application UI Testing  

#### 3.1 Homepage of the Web Application  
![Image](https://github.com/user-attachments/assets/92d7c029-26b8-487f-b028-f3ec8bec8405)

![Image](https://github.com/user-attachments/assets/6f39985c-75fe-4c23-b318-9336178e0742)

#### 3.2 User Login Page  
![Image](https://github.com/user-attachments/assets/3ef9e91b-a03b-4740-b787-99399d96244b)

#### 3.3 User Dashboard  
![Image](https://github.com/user-attachments/assets/b9bb397c-0179-4ef1-b2b9-48297e5b14bc)

#### 3.4 User Referral Tree Visualization  
![Image](https://github.com/user-attachments/assets/cfd168dc-7aae-477c-8135-a6c1b0b536da)

![Image](https://github.com/user-attachments/assets/85915679-1d45-4e34-8773-6448d4e496ce)

---

### 4. Browser Console Debugging  

#### 4.1 Console Logs After User Login  
![Image](https://github.com/user-attachments/assets/9272c920-ed2b-445e-874a-162d2aca2d19)

![Image](https://github.com/user-attachments/assets/c4d147fc-a5f6-4381-a355-d6bc2f769d18)

![Image](https://github.com/user-attachments/assets/8b299653-f8b0-4091-8892-a4717d2bbffe)


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
