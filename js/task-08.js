const formRef = document.querySelector(`.login-form`);

const inputEmail = formRef.firstElementChild.firstElementChild;
inputEmail.placeholder = 'Введіть ваше імя';
console.log(inputEmail);

const inputPassword = formRef.firstElementChild.nextElementSibling.firstElementChild;
inputPassword.placeholder = '********';
console.log(inputPassword);

formRef.addEventListener(`submit`, (e) => {
   e.preventDefault();
   const {
      elements: { email, password }
   } = e.currentTarget;
 
   if (email.value === "" || password.value === "") {
      return alert(`Заповніть будь-ласка всі поля`);
   }
   console.log(e);
   console.log(`Login:${email.value}, Password: ${password.value}`);

});

formRef.addEventListener(`submit`, resetInput);

function resetInput () {
   formRef.reset();
};


