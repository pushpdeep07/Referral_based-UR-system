# **Referral-Based User Registration System**  

## **Project Overview**  
This project is a **Referral-Based User Registration System** that allows users to **sign up, log in, and refer others** using a hierarchical structure. The system efficiently tracks referrals and visualizes the **referral tree using D3.js**.  

✅ **Due to time constraints, only the frontend has been deployed**, while the backend has been tested using **Postman and XAMPP Control Panel**.  

---

## **Features Implemented**  

### **1. User Management & Authentication**  
- ✅ JWT-based authentication for user login and session management.  
- ✅ Secure password encryption using **bcrypt.js**.  
- ✅ Role-based access control for API endpoints.  

### **2. Referral Tracking System**  
- ✅ Users can refer others using a **unique referral code**.  
- ✅ Hierarchical referral structure stored in **MySQL**.  
- ✅ **D3.js-based visualization** of the referral tree.  

### **3. API Development & Optimization**  
- ✅ Backend built using **Node.js & Express.js**.  
- ✅ API endpoints tested using **Postman**.  
- ✅ Secure API endpoints using **authentication middleware**.  

### **4. Frontend Development**  
- ✅ Built using **HTML, CSS, and JavaScript**.  
- ✅ Responsive UI with **Bootstrap**.  
- ✅ **D3.js for referral tree visualization**.  

### **5. Deployment**  
- ✅ **Frontend deployed on Vercel**.  
- ✅ **Backend tested locally using Postman & XAMPP Control Panel**.  

---

## **Technologies Used**  

| **Component**  | **Technology Used** |
|---------------|------------------|
| Backend | Node.js, Express.js |
| Frontend | HTML, CSS, JavaScript, Bootstrap |
| Database | MySQL (Hosted locally via XAMPP) |
| Security | JWT Authentication, bcrypt.js for password encryption |
| Visualization | D3.js for Referral Tree |
| Deployment | Vercel (Frontend), GitHub for version control |
| Testing Tools | Postman (API Testing), XAMPP (Database Management) |

---

## **Project Structure**  

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

## **Project Overview** 
