# NayePankh Volunteer Registration System

A modern volunteer management system built with HTML, CSS, JavaScript, and Firebase. Volunteers can register, and admins can manage registrations through a clean dashboard.

## 🌟 Features

✅ Volunteer Registration Form
✅ Admin Login & Authentication
✅ Volunteer Management Dashboard
✅ Delete Volunteers
✅ Export Reports (CSV)
✅ Responsive Design
✅ Firebase Integration Ready

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Database:** Firebase Firestore
- **Authentication:** Firebase Authentication
- **Deployment:** Netlify

## 📋 Project Structure

```
naye-pankh-volunteer-system/
├── index.html          # Home page
├── register.html       # Volunteer registration
├── login.html          # Admin login
├── dashboard.html      # Admin dashboard
├── style.css           # Styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── .gitignore         # Git ignore file
```

## 🚀 Quick Start

### 1. Clone/Download the Project
```bash
git clone https://github.com/YOUR_USERNAME/naye-pankh-volunteer-system.git
cd naye-pankh-volunteer-system
```

### 2. Run Locally
Simply open `index.html` in your browser. For testing:
- **Home Page:** `index.html`
- **Register:** Click "Join Us" button
- **Login:** Use credentials below
- **Dashboard:** After login

### 3. Demo Credentials
```
Email: admin@nayepankh.com
Password: admin123
```

## 🔥 Firebase Setup

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://firebase.google.com/)
2. Click "Create a project"
3. Name it: `naye-pankh-volunteer`
4. Enable Google Analytics (optional)
5. Click "Create project"

### Step 2: Set Up Firestore Database
1. In Firebase Console, click "Build" → "Firestore Database"
2. Click "Create Database"
3. Start in **Test Mode** (for development)
4. Choose region: `asia-south1` (or closest to India)
5. Click "Create"

### Step 3: Enable Authentication
1. Click "Build" → "Authentication"
2. Click "Get Started"
3. Enable "Email/Password" sign-in method
4. Click "Save"

### Step 4: Get Firebase Config
1. Click the gear icon (Settings) → "Project Settings"
2. Scroll to "Your apps" section
3. Select `</> Web` app (or create one)
4. Copy the Firebase config:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### Step 5: Update script.js
1. Open `script.js`
2. Find the `firebaseConfig` object (line 2)
3. Replace with your config from Firebase Console
4. Uncomment the Firebase initialization lines

### Step 6: Add Firebase SDK to HTML
Add these lines before `</body>` in all HTML files:

```html
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js"></script>
<script src="script.js"></script>
```

## 📤 Deploy to Netlify

### Option 1: Deploy from GitHub (Recommended)

#### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com/)
2. Click "New" → Create new repository
3. Name: `naye-pankh-volunteer-system`
4. Add description
5. Click "Create repository"

#### Step 2: Push Code to GitHub
```bash
# Initialize git (if not done)
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: Volunteer registration system"

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/naye-pankh-volunteer-system.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Deploy on Netlify
1. Go to [Netlify](https://www.netlify.com/)
2. Click "Sign up" or login with GitHub
3. Click "New site from Git"
4. Choose GitHub
5. Authorize Netlify
6. Select your repository
7. Build settings:
   - **Build command:** (leave empty)
   - **Publish directory:** `.` (or root)
8. Click "Deploy site"

#### Step 4: Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain
4. Follow DNS setup instructions

### Option 2: Deploy Directly to Netlify
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop your entire `naye-pankh-volunteer-system` folder
3. It will deploy automatically!

## 📊 Firestore Database Structure

### Collections to Create:

#### 1. `volunteers` Collection
```
Document: {volunteer_id}
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
```

#### 2. `admins` Collection
```
Document: admin_id
{
  email: "admin@nayepankh.com",
  role: "admin",
  createdAt: Timestamp
}
```

## 🔐 Security Rules for Firestore

Add these to your Firestore Rules (Security Rules tab):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read volunteers
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
```

## 📝 Future Enhancements

- [ ] Email notifications on registration
- [ ] Search and filter volunteers
- [ ] Volunteer profiles
- [ ] Event management
- [ ] Hours tracking
- [ ] Multi-admin support
- [ ] Advanced analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For issues or questions:
- Create an issue on GitHub
- Contact: support@nayepankh.com

## 📄 License

MIT License - feel free to use for your organization

---

## 📊 Deployment Checklist

- [ ] Firebase project created
- [ ] Firestore database set up
- [ ] Authentication enabled
- [ ] Firebase config added to script.js
- [ ] Firebase SDK added to HTML files
- [ ] Code pushed to GitHub
- [ ] Netlify connected to GitHub
- [ ] Site deployed and live
- [ ] Admin account created in Firebase
- [ ] Domain configured (optional)

---

**Last Updated:** June 2024
**Version:** 1.0.0
