# 📚 Minimal Library Management System

This project is a comprehensive, full-stack Minimal Library Management System designed to demonstrate modern web development practices. It provides a complete, unauthenticated user experience focused on core library functionalities, from inventory management to borrowing analytics.

## Live Links
- **Frontend:** [https://library-frontend-mocha.vercel.app/](https://library-frontend-mocha.vercel.app/)
- **Backend API:** [https://library-backend-kappa.vercel.app/api](https://library-backend-kappa.vercel.app/api)

## Key Features
- **Full CRUD Operations:** Seamlessly create, read, update, and delete books from the library's collection.
- **Dynamic Inventory Management:** The system automatically decrements available copies when a book is borrowed and updates its availability status.
- **Intuitive Borrowing System:** Users can easily borrow books through a simple form, with validation to prevent over-borrowing.
- **Aggregated Borrow Summary:** A dedicated page provides a high-level summary of all borrowed books, showing which titles are most popular.
- **Responsive & Modern UI:** The frontend is built with React and styled with Tailwind CSS, offering a clean, card-based layout that works beautifully on all devices.
- **Efficient State Management:** Utilizes Redux Toolkit and RTK Query to efficiently manage API state, caching, and automatic UI updates after data mutations.
- **Robust Backend API:** The backend is built on Node.js and Express, with a modular structure and a Mongoose schema for reliable data handling with MongoDB.

## Technology Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Frontend     | React, TypeScript, Vite, Redux Toolkit |
| Backend      | Node.js, Express.js, TypeScript     |
| Database     | MongoDB with Mongoose               |
| Styling      | Tailwind CSS                        |
| Deployment   | Vercel (Backend) & Netlify (Frontend) |

## Setup and Run Locally
Follow these steps to run the full-stack application on your local machine.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
2. Set Up the Backend
bash
# Navigate to the backend folder
cd library-backend

# Install dependencies
npm install

# Create a .env file and add your MONGO_URI
echo "MONGO_URI=your_mongodb_connection_string_here" > .env

# Start the backend server
npm run dev
The backend will be running at http://localhost:5000.

3. Set Up the Frontend
bash
# Navigate to the frontend folder from the root
cd library-frontend

# Install dependencies
npm install

# Create a .env.local file
echo "VITE_BACKEND_URL=http://localhost:5000/api" > .env.local

# Start the frontend development server
npm run dev

Thanks