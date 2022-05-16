const signupButton = document.querySelector('#signupButton');
const signupPassword = document.querySelector('#signupPassword');
const signupConfirmPassword = document.querySelector('#confirmPassword');

signupButton.addEventListener('click', passwordMatch);

function passwordMatch() {
  if (signupPassword.value === signupConfirmPassword.value) {
    signupButton.setCustomValidity('');
  } else {
    signupButton.setCustomValidity('Passwords do not match');
  }
}