const formRef = document.querySelector(`.login-form`);

const inputEmail = formRef.firstElementChild.firstElementChild;
inputEmail.placeholder = 'Введіть ваше імя';


const inputPassword = formRef.firstElementChild.nextElementSibling.firstElementChild;
inputPassword.placeholder = '********';


formRef.addEventListener(`submit`, (e) => {
   e.preventDefault();

   const forElements = e.currentTarget.elements;
   const mail = forElements.email.value;
   const password = forElements.password.value;
 
   if (mail === "" || password === "") {
      return alert(`Заповніть будь-ласка всі поля`);
   }

   const formData = {
      mail,
      password,
   }
   console.log(formData);
   formRef.reset();
});

