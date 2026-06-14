// Firebase Configuration
// IMPORTANT: Replace with your Firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyCLy2XLIzvCNpsrwrXjSzWD-ak3AVlTuE8",
  authDomain: "naye-pankh-volunteer.firebaseapp.com",
  projectId: "naye-pankh-volunteer",
  storageBucket: "naye-pankh-volunteer.firebasestorage.app",
  messagingSenderId: "813288209101",
  appId: "1:813288209101:web:78557dc910e92ced8c4784",
  measurementId: "G-QKGST6DN4Z"
};

// Initialize Firebase (add this after adding Firebase SDK to HTML)
// const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = firebase.firestore();

// ===== Registration Form Handler =====
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            age: document.getElementById('age').value,
            skills: document.getElementById('skills').value,
            availability: document.getElementById('availability').value,
            timestamp: new Date()
        };

        try {
            // For demo: Store in localStorage
            let volunteers = JSON.parse(localStorage.getItem('volunteers')) || [];
            volunteers.push(formData);
            localStorage.setItem('volunteers', JSON.stringify(volunteers));
            
            alert('Registration successful! Your information has been saved.');
            registrationForm.reset();
            
            // Redirect to home after successful registration
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } catch (error) {
            alert('Error: ' + error.message);
        }
    });
}

// ===== Login Form Handler =====
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const errorDiv = document.getElementById('loginError');

        try {
            // Simple demo authentication
            // In production, use Firebase Authentication
            if (email === 'admin@nayepankh.com' && password === 'admin123') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                window.location.href = 'dashboard.html';
            } else {
                errorDiv.textContent = 'Invalid email or password';
                errorDiv.classList.add('show');
            }
        } catch (error) {
            errorDiv.textContent = 'Login error: ' + error.message;
            errorDiv.classList.add('show');
        }
    });
}

// ===== Dashboard Handler =====
const volunteerBody = document.getElementById('volunteerBody');
const noVolunteers = document.getElementById('noVolunteers');

if (volunteerBody) {
    // Check if user is logged in
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
    }

    // Load volunteers on dashboard
    function loadVolunteers() {
        volunteerBody.innerHTML = '';
        const volunteers = JSON.parse(localStorage.getItem('volunteers')) || [];
        
        if (volunteers.length === 0) {
            noVolunteers.classList.add('show');
            return;
        }

        noVolunteers.classList.remove('show');
        
        volunteers.forEach((volunteer, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${volunteer.name}</td>
                <td>${volunteer.email}</td>
                <td>${volunteer.phone}</td>
                <td>${volunteer.age}</td>
                <td>${volunteer.skills}</td>
                <td>${volunteer.availability}</td>
                <td><button class="delete-btn" onclick="deleteVolunteer(${index})">Delete</button></td>
            `;
            volunteerBody.appendChild(row);
        });
    }

    // Delete volunteer
    window.deleteVolunteer = function(index) {
        if (confirm('Are you sure you want to delete this volunteer?')) {
            let volunteers = JSON.parse(localStorage.getItem('volunteers')) || [];
            volunteers.splice(index, 1);
            localStorage.setItem('volunteers', JSON.stringify(volunteers));
            loadVolunteers();
        }
    };

    // Export report
    document.getElementById('exportBtn').addEventListener('click', () => {
        const volunteers = JSON.parse(localStorage.getItem('volunteers')) || [];
        
        if (volunteers.length === 0) {
            alert('No volunteers to export');
            return;
        }

        let csvContent = 'data:text/csv;charset=utf-8,';
        csvContent += 'Name,Email,Phone,Age,Skills,Availability\n';
        
        volunteers.forEach(volunteer => {
            csvContent += `"${volunteer.name}","${volunteer.email}","${volunteer.phone}","${volunteer.age}","${volunteer.skills}","${volunteer.availability}"\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'volunteers_report.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Refresh button
    document.getElementById('refreshBtn').addEventListener('click', loadVolunteers);

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        window.location.href = 'index.html';
    });

    // Load volunteers when page loads
    loadVolunteers();
}

// ===== Firebase Integration Setup Instructions =====
/*
FIREBASE SETUP STEPS:

1. Go to https://firebase.google.com/
2. Create a new project
3. Enable Firestore Database
4. Enable Authentication (Email/Password)
5. Copy your Firebase config from Project Settings
6. Replace firebaseConfig values above
7. Add to HTML before </body>:

<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js"></script>

Then uncomment the Firebase initialization code above.

For now, this uses localStorage for demo purposes.
*/
