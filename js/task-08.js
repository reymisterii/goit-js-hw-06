

const formRef = document.querySelector(`.login-form`);

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