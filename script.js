const mainBtn = document.querySelector(".main-btn");
const successBtn = document.querySelector(".success-btn");
const main = document.querySelector(".main");
const success = document.querySelector('.success-msg');
const emailInput = document.querySelector("input");
const errors = document.querySelector('.error');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

mainBtn.addEventListener("click", () => {
    const emailValue = emailInput.value.trim();
    
    if (isValidEmail(emailValue) && emailValue !== "") {
        main.style.display = 'none'
        success.style.display = 'flex'
    } else {
        errors.style.display = "block";
        emailInput.style.border = '1px solid red';
    }
});

successBtn.addEventListener("click", () => {
    main.style.display = 'flex'
    success.style.display = 'none'
    errors.style.display = 'none'
    emailInput.style.border = '1px solid hsl(231, 7%, 60%)';
});



