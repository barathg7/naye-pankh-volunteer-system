# NayePankh Volunteer Registration System

A modern volunteer management system built with HTML, CSS, JavaScript, and Firebase. Volunteers can register, and admins can manage registrations through a clean dashboard.

🔗 **Live Demo:** [https://dashing-gumdrop-8644df.netlify.app](https://dashing-gumdrop-8644df.netlify.app)

---

## 🌟 Features

✅ Volunteer Registration Form
✅ Admin Login & Authentication (Firebase Auth)
✅ Volunteer Management Dashboard
✅ Delete Volunteers
✅ Export Reports (CSV)
✅ Responsive Design
✅ Firebase Firestore Integration

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Database:** Firebase Firestore
- **Authentication:** Firebase Authentication
- **Deployment:** Netlify

## 📋 Project Structure

```
naye-pankh-volunteer-system/
├── index.html                  # Home page
├── register.html               # Volunteer registration
├── login.html                  # Admin login
├── dashboard.html              # Admin dashboard
├── style.css                   # Styling
├── script.js                   # JavaScript + Firebase logic
├── firebase-config-template.js # Firebase config reference
├── README.md                   # This file
└── .gitignore                  # Git ignore file
```

## 🚀 Quick Start (Run Locally)

### 1. Clone the Project
```bash
git clone https://github.com/barathg7/naye-pankh-volunteer-system.git
cd naye-pankh-volunteer-system
```

### 2. Open in Browser
Simply open `index.html` in your browser:
- **Home Page:** `index.html`
- **Register:** Click "Join Us"
- **Admin Login:** `login.html`
- **Dashboard:** After login at `dashboard.html`

### 3. Admin Credentials
```
Email:    admin@nayepankh.com
Password: admin123
```

## 🔥 Firebase Setup (Already Configured)

This project is already connected to Firebase. If you fork this repo and want to use your own Firebase project, follow these steps:

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://firebase.google.com/)
2. Click "Create a project" → Name it anything
3. Click "Create project"

### Step 2: Set Up Firestore Database
1. Click "Build" → "Firestore Database" → "Create Database"
2. Start in **Test Mode**
3. Choose region: `asia-south1`
4. Click "Create"

### Step 3: Enable Authentication
1. Click "Build" → "Authentication" → "Get Started"
2. Enable **Email/Password** sign-in method → Save
3. Go to Users tab → Add your admin user

### Step 4: Get Firebase Config & Update script.js
1. Go to Project Settings → Your Apps → Web App
2. Copy your `firebaseConfig` object
3. Replace the config at the top of `script.js`

### Step 5: Add Firebase SDK to HTML Files
Add these lines before `</body>` in all HTML files:

```html
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>
<script src="script.js"></script>
```

## 📊 Firestore Database Structure

### `volunteers` Collection
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91-9876543210",
  "age": 25,
  "skills": "Teaching, Coding",
  "availability": "Weekends",
  "timestamp": "Timestamp",
  "status": "active"
}
```

## 🔐 Firestore Security Rules

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /volunteers/{document=**} {
      allow read: if request.auth != null;
      allow create: if true;
      allow update, delete: if request.auth != null &&
                             request.auth.token.email == 'admin@nayepankh.com';
    }
  }
}
```

## 📤 Deploy to Netlify

### Option 1: Deploy from GitHub (Recommended)
1. Fork this repository
2. Go to [Netlify](https://www.netlify.com/) → "New site from Git"
3. Connect your GitHub and select this repo
4. Build command: *(leave empty)*
5. Publish directory: `.`
6. Click "Deploy site"

### Option 2: Drag & Drop
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop your project folder
3. Done!

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
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📞 Support

For issues or questions:
- Create an issue on GitHub
- Contact: support@nayepankh.com

## 📄 License

MIT License — feel free to use for your organization

---

## ✅ Deployment Checklist

- [x] Firebase project created
- [x] Firestore database set up (asia-south1)
- [x] Authentication enabled (Email/Password)
- [x] Firebase config added to script.js
- [x] Firebase SDK added to all HTML files
- [x] Firestore security rules configured
- [x] Admin account created in Firebase
- [x] Code pushed to GitHub
- [x] Netlify connected to GitHub
- [x] Site live at https://dashing-gumdrop-8644df.netlify.app

---

**Last Updated:** June 2026
**Version:** 1.0.0
