const username = document.getElementById('username');
const password = document.getElementById('password');
const registrationForm = document.getElementById('registrationForm');
const errorMessage = document.getElementById('errorMessage');
const errMessage = document.getElementById('errMessage');
registrationForm.addEventListener('submit',(e)=>
{



  if(username.value === ''|| username.value == null) 
    {
      e.preventDefault();
      errorMessage.innerHTML = "Name is required";
    }
    if(password.value === ''|| password.value == null) 
      {
        e.preventDefault();
        errMessage.innerHTML = "Password is required";
      }
})





















// document
//   .getElementById("registrationForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     validateForm();
//   });
// function validateForm() {
//   var username = document.getElementById(" username").value;
//   var password = document.getElementById("password").value;
//   var errorMessage = document.getElementById("errorMessage");

//   // Check if username or password is empty
//   if (username.trim() === "" || password.trim() === "") {
//     errorMessage.textContent = "Username and password are required";

//     return false;
//   }

//   // You can add more validation logic here, such as password length, etc.

//   // If all validation passes, return true to allow form submission
//   return true;
// }
// // const name = document.getElementById('name')
// // const password = document.getElementById('password')
// // const form = document.getElementById('form')
// // const errorElement = document.getElementById('error')

// // form.addEventListener('submit', (e) => {
// //   let messages = []
// //   if (name.value === '' || name.value == null) {
// //     messages.push('Name is required')
// //   }

// //   if (password.value.length <= 6) {
// //     messages.push('Password must be longer than 6 characters')
// //   }

//   if (password.value.length >= 20) {
//     messages.push('Password must be less than 20 characters')
//   }

//   if (password.value === 'password') {
//     messages.push('Password cannot be password')
//   }

//   if (messages.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = messages.join(', ')
//   }
// })
