const formRef = document.querySelector(`.login-form`);

const inputEmail = formRef.firstElementChild.firstElementChild;
inputEmail.placeholder = 'Введіть ваше імя';
console.log(inputEmail);

const inputPassword = formRef.firstElementChild.nextElementSibling.firstElementChild;
inputPassword.placeholder = '********';
console.log(inputPassword);

formRef.addEventListener(`submit`, (e) => {
   e.preventDefault();

   const forElements = e.currentTarget.elements;
   const mail = forElements.email.value;
   const password = forElements.password.value;
 
   if (mail === "" || password === "") {
      return alert(`Заповніть будь-ласка всі поля`);
   }
   console.log(e);
   console.log(`Login:${mail}, Password: ${password}`);

   const formData = {
      mail,
      password,
   }
   console.log(formData);
});

formRef.addEventListener(`submit`, resetInput);

function resetInput () {
   formRef.reset();
};


