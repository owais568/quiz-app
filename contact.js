const firebaseConfig = {
  apiKey: "AIzaSyArbRH_Ml_CERaO39kC8A8-zqRMZ728FPA",
  authDomain: "web-auth-2169e.firebaseapp.com",
  projectId: "web-auth-2169e",
  storageBucket: "web-auth-2169e.firebasestorage.app",
  messagingSenderId: "228891672630",
  appId: "1:228891672630:web:288c0e6db8d2fea99dd897"
};

  var  app = firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();

function signUp() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

function Login() {
  var email = document.getElementById("Loginemail");
  var password = document.getElementById("Loginpassword");

  auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      window.location.href = "./contact.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}