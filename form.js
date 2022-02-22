// const firebaseConfig = {
//   apiKey: 'AIzaSyA-nkv7raoY69_e-LXxkdf-gLHVWVrP5z4',
//   authDomain: 'registerations-9c491.firebaseapp.com',
//   projectId: 'registerations-9c491',
//   storageBucket: 'registerations-9c491.appspot.com',
//   messagingSenderId: '810976719448',
//   appId: '1:810976719448:web:15b17878d82670d08b902d',
//   measurementId: 'G-QDSN0KRXMB',
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// var messageRef = firebase.database().ref('messages_dev');

// document.getElementById('contactForm').addEventListener('submit', submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   var name = getIdValue('name');
//   var email = getIdValue('email');
//   var phone = getIdValue('phone');
//   console.log(name, email, phone);

//   saveMessage(name, email, phone);

//   document.querySelector('.alert').style.display = 'block';
//   setTimeout(function () {
//     document.querySelector('.alert').style.display = 'none';
//   }, 3000);
// }

// function getIdValue(id) {
//   return document.getElementById(id).value;
// }

// function saveMessage(name, email, phone, message) {
//   var newMessageRef = messageRef.push();

//   newMessageRef.set({
//     name: name,
//     email: email,
//     phone: phone,
//     subject: subject,
//     message: message,
//   });
// }
