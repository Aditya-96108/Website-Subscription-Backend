# 🚀 Subscription Management System

A **production-ready Subscription Management System** built using **Node.js and MongoDB**, designed to handle website subscriptions efficiently. The system ensures security using **Arcjet**, manages mailing via **Upstash**, and follows clean coding practices. APIs are thoroughly tested with **Postman** to ensure reliability.

This system will also be integrated into the **Smart Exam Portal** to manage user subscriptions effectively.

---

## 🌟 Features

✅ **User Subscription Handling** – Users can subscribe, manage, and cancel subscriptions easily.  
✅ **Secure Authentication** – Arcjet is used to protect routes and secure user sessions.  
✅ **Email Notifications** – Upstash-powered mailing system for confirmation and updates.  
✅ **Production-Ready APIs** – Well-structured, clean, and optimized RESTful APIs.  
✅ **Role-Based Access** – Admins can manage subscriptions and users.  
✅ **Error Handling & Middleware** – Robust error-handling ensures smooth performance.  
✅ **Tested with Postman** – APIs are verified for correctness and efficiency.  

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Security**: Arcjet  
- **Mailing Service**: Upstash  
- **Testing**: Postman  
- **Other**: JWT Authentication, Middleware-based architecture  

---

## 📦 Installation & Setup

Follow these steps to clone and set up the project locally:  

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/Aditya-96108/Website-Subscription-Backend.git
cd Website-Subscription-Backend
```
2️⃣ Install Dependencies
```
npm install
```
3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add your configuration:
```
MONGO_URI=your_mongodb_connection_string
ARCJET_API_KEY=your_arcjet_api_key
UPSTASH_REDIS_URL=your_upstash_redis_url
JWT_SECRET=your_jwt_secret
```
4️⃣ Run the Application
```
npm start
```
🔥 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login user
GET	/api/subscriptions	Get all subscriptions
POST	/api/subscriptions	Create a subscription
DELETE	/api/subscriptions/:id	Cancel a subscription

🚀 Benefits
Scalability – Designed to handle a growing number of subscriptions efficiently.
Security First – Uses Arcjet for enhanced protection.
Fast & Reliable – Optimized queries and middleware ensure smooth operation.
Easily Integrable – Can be plugged into other projects like the Smart Exam Portal for subscription-based services.
🤝 Contribution
Feel free to fork, contribute, or raise issues for improvements. 🚀

📌 GitHub Repository: Subscription Management System

