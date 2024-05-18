const formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function updateFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});


form.addEventListener('input', (e) => {
  if (e.target === emailInput) {
    formData.email = e.target.value.trim();
  } else if (e.target === messageInput) {
    formData.message = e.target.value.trim();
  }
  updateFormData();
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = "";
  formData.message = "";
  emailInput.value = "";
  messageInput.value = "";
});