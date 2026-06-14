# NayePankh Volunteer System - Quick Start Guide

## 📌 Step-by-Step Setup (15 minutes)

### PHASE 1: Local Testing (5 minutes)

#### Step 1: Open in Browser
```
1. Open naye-pankh-volunteer-system folder
2. Right-click on "index.html"
3. Select "Open with Browser" (or your preferred browser)
4. You should see the home page!
```

#### Step 2: Test Registration Flow
```
1. Click "Join Us as a Volunteer" button
2. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: +91-9876543210
   - Age: 25
   - Skills: Testing
   - Availability: Weekends
3. Click "Register"
4. You should see "Registration successful!" message
```

#### Step 3: Test Login
```
1. Click "Login" in navigation
2. Enter credentials:
   - Email: admin@nayepankh.com
   - Password: admin123
3. Click "Login"
4. You should see the Dashboard with your test volunteer!
```

#### Step 4: Test Dashboard Features
```
1. Try the "Export Report" button - downloads CSV file
2. Try the "Refresh" button - reloads volunteers
3. Try the "Delete" button - removes a volunteer
4. Try the "Logout" button - logs you out
```

---

### PHASE 2: Firebase Setup (7 minutes)

#### Step 1: Create Firebase Project
```
1. Go to https://firebase.google.com/
2. Click "Get Started"
3. Click "Create a project"
4. Enter: naye-pankh-volunteer
5. Click Continue
6. Uncheck "Enable Google Analytics" (optional)
7. Click "Create project"
8. Wait 30 seconds for project creation
```

#### Step 2: Create Firestore Database
```
1. In Firebase console, click "Build" (left sidebar)
2. Click "Firestore Database"
3. Click "Create Database"
4. Select "Start in test mode"
5. Select location: asia-south1 (India)
6. Click "Create"
7. Wait for initialization
```

#### Step 3: Enable Authentication
```
1. In Firebase console, click "Authentication" (left sidebar)
2. Click "Get Started"
3. Click "Email/Password" sign-in method
4. Toggle "Enable" to ON
5. Click "Save"
```

#### Step 4: Get Firebase Config
```
1. Click gear icon (⚙️) → "Project Settings"
2. Scroll down to "Your apps" section
3. Click "Web" (or create new Web app)
4. Copy the firebaseConfig object
5. It looks like:
   {
     apiKey: "xxx",
     authDomain: "xxx",
     projectId: "xxx",
     ...
   }
```

#### Step 5: Update script.js with Config
```
1. Open script.js in your code editor
2. Find line 2 (const firebaseConfig = {)
3. Replace the entire config object with your Firebase config
4. Uncomment lines 12-14:
   - const app = firebase.initializeApp(firebaseConfig);
   - const auth = firebase.auth();
   - const db = firebase.firestore();
5. Save the file
```

#### Step 6: Create Admin Account
```
1. Go back to Firebase Console
2. Click "Authentication"
3. Click "Users" tab
4. Click "Add User"
5. Email: admin@nayepankh.com
6. Password: admin123 (change this later!)
7. Click "Add User"
```

---

### PHASE 3: GitHub & Netlify Deployment (3 minutes)

#### Step 1: Create GitHub Repository
```
1. Go to https://github.com/
2. Click "+" → "New repository"
3. Name: naye-pankh-volunteer-system
4. Description: NayePankh volunteer registration system
5. Make it Public
6. Click "Create repository"
```

#### Step 2: Push Code to GitHub
```
Open Terminal/Command Prompt in your project folder:

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: NayePankh volunteer system"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/naye-pankh-volunteer-system.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Deploy to Netlify
```
1. Go to https://www.netlify.com/
2. Click "Sign up" (use GitHub)
3. Authorize Netlify
4. Click "New site from Git"
5. Choose "GitHub"
6. Authorize Netlify access to GitHub
7. Select naye-pankh-volunteer-system
8. Leave build settings empty
9. Publish directory: . (dot)
10. Click "Deploy site"
11. Wait 1-2 minutes
12. You'll get a live URL like: https://naye-pankh-volunteer.netlify.app
```

---

## ✅ Testing Checklist

- [ ] Local home page loads
- [ ] Can register a volunteer locally
- [ ] Can see volunteer in dashboard after login
- [ ] Can export CSV
- [ ] Can delete volunteer
- [ ] Firebase project created
- [ ] Firestore database created
- [ ] Authentication enabled
- [ ] Admin account created
- [ ] script.js updated with Firebase config
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Netlify deployment successful
- [ ] Live URL working

---

## 📞 Troubleshooting

### "Firestore is not defined" error
→ Make sure Firebase SDK scripts are added to HTML

### Login not working after Firebase setup
→ Check that admin account exists in Firebase Authentication
→ Check that Firebase config is correctly pasted in script.js

### Data not saving
→ Check Firestore security rules
→ Verify user is authenticated
→ Check browser console for errors (F12)

### Netlify deployment stuck
→ Clear cache in Netlify settings
→ Try redeploying from GitHub

---

## 🔗 Useful Links

- Firebase Console: https://console.firebase.google.com/
- GitHub: https://github.com/
- Netlify: https://www.netlify.com/
- Firebase Docs: https://firebase.google.com/docs

---

## 🎯 Next Steps After Deployment

1. **Share the live link** with stakeholders
2. **Create more admin accounts** for your team
3. **Set up proper Firestore rules** (see README.md)
4. **Add your domain** (optional)
5. **Monitor registrations** in the dashboard

---

**You're all set! 🚀**
