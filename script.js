// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLy2XLIzvCNpsrwrXjSzWD-ak3AVlTuE8",
  authDomain: "naye-pankh-volunteer.firebaseapp.com",
  projectId: "naye-pankh-volunteer",
  storageBucket: "naye-pankh-volunteer.firebasestorage.app",
  messagingSenderId: "813288209101",
  appId: "1:813288209101:web:78557dc910e92ced8c4784",
  measurementId: "G-QKGST6DN4Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

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
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'active'
        };

        try {
            await db.collection('volunteers').add(formData);
            alert('Registration successful! Your information has been saved.');
            registrationForm.reset();
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } catch (error) {
            alert('Error saving registration: ' + error.message);
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
            await auth.signInWithEmailAndPassword(email, password);
            window.location.href = 'dashboard.html';
        } catch (error) {
            errorDiv.textContent = 'Invalid email or password. Please try again.';
            errorDiv.classList.add('show');
        }
    });
}

// ===== Dashboard Handler =====
const volunteerBody = document.getElementById('volunteerBody');
const noVolunteers = document.getElementById('noVolunteers');

if (volunteerBody) {
    // Check if user is logged in via Firebase Auth
    auth.onAuthStateChanged((user) => {
        if (!user) {
            window.location.href = 'login.html';
        } else {
            loadVolunteers();
        }
    });

    // Load volunteers from Firestore
    function loadVolunteers() {
        volunteerBody.innerHTML = '';

        db.collection('volunteers').orderBy('timestamp', 'desc').get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                    noVolunteers.classList.add('show');
                    return;
                }

                noVolunteers.classList.remove('show');

                querySnapshot.forEach((doc) => {
                    const volunteer = doc.data();
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${volunteer.name}</td>
                        <td>${volunteer.email}</td>
                        <td>${volunteer.phone}</td>
                        <td>${volunteer.age}</td>
                        <td>${volunteer.skills}</td>
                        <td>${volunteer.availability}</td>
                        <td><button class="delete-btn" onclick="deleteVolunteer('${doc.id}')">Delete</button></td>
                    `;
                    volunteerBody.appendChild(row);
                });
            })
            .catch((error) => {
                alert('Error loading volunteers: ' + error.message);
            });
    }

    // Delete volunteer from Firestore
    window.deleteVolunteer = function(docId) {
        if (confirm('Are you sure you want to delete this volunteer?')) {
            db.collection('volunteers').doc(docId).delete()
                .then(() => {
                    loadVolunteers();
                })
                .catch((error) => {
                    alert('Error deleting volunteer: ' + error.message);
                });
        }
    };

    // Export report as CSV
    document.getElementById('exportBtn').addEventListener('click', () => {
        db.collection('volunteers').orderBy('timestamp', 'desc').get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                    alert('No volunteers to export');
                    return;
                }

                let csvContent = 'data:text/csv;charset=utf-8,';
                csvContent += 'Name,Email,Phone,Age,Skills,Availability\n';

                querySnapshot.forEach((doc) => {
                    const v = doc.data();
                    csvContent += `"${v.name}","${v.email}","${v.phone}","${v.age}","${v.skills}","${v.availability}"\n`;
                });

                const encodedUri = encodeURI(csvContent);
                const link = document.createElement('a');
                link.setAttribute('href', encodedUri);
                link.setAttribute('download', 'volunteers_report.csv');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => {
                alert('Error exporting data: ' + error.message);
            });
    });

    // Refresh button
    document.getElementById('refreshBtn').addEventListener('click', loadVolunteers);

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
            window.location.href = 'index.html';
        });
    });
}
