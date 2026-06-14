// ================================================
// FIREBASE CONFIGURATION TEMPLATE
// ================================================
// Instructions:
// 1. Go to https://firebase.google.com/
// 2. Create a new project
// 3. Copy your config from Project Settings
// 4. Replace the values below
// 5. Add this to script.js

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ================================================
// FIRESTORE DATABASE STRUCTURE
// ================================================

/*
Collection: volunteers
{
  name: "John Doe",
  email: "john@example.com",
  phone: "+91-9876543210",
  age: 25,
  skills: "Teaching, Coding",
  availability: "Weekends",
  timestamp: Timestamp,
  status: "active"
}

Collection: admins
{
  email: "admin@nayepankh.com",
  role: "admin",
  createdAt: Timestamp
}
*/

// ================================================
// SECURITY RULES (Firestore Rules)
// ================================================

/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write volunteers
    match /volunteers/{document=**} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if isAdmin();
    }
    
    // Admin only
    match /admins/{document=**} {
      allow read, write: if isAdmin();
    }
    
    function isAdmin() {
      return request.auth != null && 
             request.auth.token.email == 'admin@nayepankh.com';
    }
  }
}
*/
