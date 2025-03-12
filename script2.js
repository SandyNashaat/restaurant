const FullName = document.getElementById('FullName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const password = document.getElementById('password');
const ConfirmPassword = document.getElementById('ConfirmPassword');
const registrationForm = document.getElementById('registrationForm');
const errMessage = document.getElementById('errMessage');
const Erroremail = document.getElementById('Erroremail');
const Errorphone = document.getElementById('Errorphone');
const Errorpassword = document.getElementById('Errorpassword');
const ErrorconfirmPassword  = document.getElementById('');
registrationForm.addEventListener('submit',(e)=>
  {
  
  
  
    if(FullName.value === ''|| FullName.value == null) 
      {
        e.preventDefault();
        errorMessage.innerHTML = "Name is required";
      }
      else if (!containsCapitalLetter(FullName.value)) {
        e.preventDefault();
        errMessage.innerHTML = 'Name must contain at least one capital letter';
        
    }
      
        if (!validateEmail(email.value)) {
          e.preventDefault();
          Erroremail.innerHTML = 'Please enter a valid email address';
         
      }
      if (!validatePhoneNumber(phoneNumber.value)) {
        e.preventDefault();
        Errorphone.innerHTML = 'Please enter a valid phone number';
        
    }
      
    if (!validatePassword(password.value)) {
      e.preventDefault();
      Errorpassword.innerHTML = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      
  }
if (password.value !== ConfirmPassword.value) {
        e.preventDefault();
        ErrorconfirmPassword.innerHTML = 'Passwords do not match';
       
    }
  })
  function containsCapitalLetter(FullName) {
    const re = /[A-Z]/;
    return re.test(FullName);
}
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatePhoneNumber(phoneNumber) {
  const re = /^\d{10}$/;
  return re.test(phoneNumber);
}
function validatePassword(password) {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.{8,})/;
  return re.test(password);
}
  
  // Check if username or password is empty
  // if (FullName.trim() === '' || password.trim() === '') {
  //   errorMessage.textContent = "Username and password are required";
  //   return false;
  // }

  // Strong username validation (at least one capital letter)
//   if (!hasCapitalLetter(FullName)) {
//     errorMessage.textContent =
//       "Username must contain at least one capital letter";
//     return false;
//   }

//   // Strong password validation
//   if (!isStrongPassword(password)) {
//     conError.textContent =
//       "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
//     return false;
//   }

//   if (!isValidEmail(email)) {
//     confirmError.textContent = "Invalid email address";
//     return false;
//   }

//   if (!isNumeric(phoneNumber)) {
//     PasswordError.textContent = "Phone number must contain only numbers";
//     return false;
//   }
//   if (password != ConfirmPassword) {
//     alert("Passwords do not match!");
//     return false;
//   }

//   // If all validation passes, return true to allow form submission
//   return true;
// }
// function isStrongPassword(password) {
//   // Check if password meets the criteria
//   var regex =
//     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/;
//   return regex.test(password);
// }

// function hasCapitalLetter(_FullName) {
//   // Check if the string contains at least one capital letter
//   return /[A-Z]/.test(str);
// }
// function isValidEmail(email) {
//   // Check if the email address contains the "@" symbol
//   return email.includes("@");
// }
// function isNumeric(str) {
//   // Check if the string contains only numbers
//   return /^\d+$/.test(str);
// }
