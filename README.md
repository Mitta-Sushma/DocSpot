![image](https://github.com/user-attachments/assets/b2bb2a2b-893f-4014-88ac-e90cee15e1e6)# 🩺 DocSpot - Seamless Appointment Booking for Health

DocSpot is a full-stack web application that connects patients with doctors, enabling easy appointment booking, doctor registration, admin approvals, and role-based dashboards for users, doctors, and admins.


## 📌 Features

- 👤 User Registration & Login (with token-based authentication)
- 🧑‍⚕️ Doctor Application (pending/approved workflow)
- 📅 Book Appointments with Doctors
- 🧑‍💼 Admin Dashboard for Doctor Approval
- 🔒 Protected Routes using JWT
- 🖥️ Responsive UI with Bootstrap
- 🔁 Role-based redirection for Users / Doctors / Admins


## 🚀 Tech Stack Used

| Category       | Tech Used                           |
|----------------|-------------------------------------|
| 💻 Frontend    | React.js, HTML, CSS, Bootstrap      |
| 🔙 Backend     | Node.js, Express.js                 |
| 🗄️ Database    | MongoDB (with Mongoose)             |
| 🔐 Auth        | JSON Web Token (JWT)                |
| ⚙️ Testing     | Thunder Client / Postman            |
| 🛠️ Others      | React Router, Axios, Dotenv         |


## 🔧 Folder Structure

![Folder_structure](https://github.com/user-attachments/assets/4ac1e9ca-4507-4009-9452-100e6b5e2ff9)

## 📸 Screenshots

### 🏡 Landing Page
![image](https://github.com/user-attachments/assets/3f72526c-d8e5-4688-97e9-41149dbe84f6)

###  👤 Register Page
![image](https://github.com/user-attachments/assets/6c060f83-502f-4130-9841-2f5a33c0bc9a)

### 🔑 Login Page
![image](https://github.com/user-attachments/assets/66850622-72e6-4173-b065-9c01925eb48f)

### 👤 User Dashboard
![image](https://github.com/user-attachments/assets/6b84832a-617a-4937-9237-8ef184825886)

### 👩‍⚕️ Doctor Dashboard
![image](https://github.com/user-attachments/assets/d505d5ab-233e-4c6e-94af-8a67104d4b96)

### 🛠️ Admin Dashboard
![image](https://github.com/user-attachments/assets/dccf4571-ec6e-46ed-933a-41f4b27cac8c)

###  🩺 Apply as Doctor Dashboard
![image](https://github.com/user-attachments/assets/24fd4d5e-7140-49c8-b91e-8171a8259642)

## 🗃️ Installation steps
### Backend setup
✒️ cd backend
✒️ npm install
✒️ nodemon server.js
✒️ npm start

### Frontend setup
✒️ cd frontend
✒️ npm install
✒️ npm start

## Environment variables
MONGO_URL=mongodb://localhost:27017/docspot
JWT_SECRET=your_secret_key
PORT=5000

## 🛠 Functional Modules

### 👤 User
Register, Login
View Approved Doctors
Book Appointment

### 🧑‍⚕ Doctor
Apply as Doctor
View Dashboard if approved

### 🧑‍💼 Admin
View All Doctor Applications
Approve / Reject Doctor Requests


##🧪 Thunder Client Test Routes

Method	Route	Description

POST	/api/user/register	Register new user
POST	/api/user/login	User/Admin login
POST	/api/doctor/apply-doctor	Apply as doctor (user role)
GET	/api/doctor/get-approved	Get approved doctors (user)
GET	/api/doctor/all-doctors	Get all doctors (admin only)
PUT	/api/admin/update-status	Approve/reject doctor
POST	/api/appointment/book	Book an appointment


















