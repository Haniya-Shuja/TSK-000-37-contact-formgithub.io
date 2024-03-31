const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  form.addEventListener('submit', function(event) {
    let isValid = true;

    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required';
      isValid = false;
    } else {
      nameError.textContent = '';
    }

    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = 'Invalid email format';
      isValid = false;
    } else {
      emailError.textContent = '';
    }

    if (messageInput.value.trim() === '') {
      messageError.textContent = 'Message is required';
      isValid = false;
    } else {
      messageError.textContent = '';
    }

    if (!isValid) {
      event.preventDefault(); 
    } else {
      // Success message
      alert('Form submitted successfully!');
    }
  });

  function isValidEmail(email) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }