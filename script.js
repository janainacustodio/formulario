const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue === ""){
        setErrorFor(username, "O nome de usuário é obrigatório");
    }else{
        setSuccessFor(username)
    }

    if(emailValue === ""){
        setErrorFor(email, "O e-mail é obrigatório");
    }
    /*else if(!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um e-mail válido");
    }*/ else {
        setSuccessFor(email);
    }


    if(passwordValue === ""){
        setErrorFor(password, "A senha é obrigatório");
    }else if(passwordValue.length < 7){
        setErrorFor(password, "A senha deve ter no míninmo 7 caracteres")
    }else{
        setSuccessFor(password);
    }
    
    if(passwordConfirmationValue === ""){
        setErrorFor(passwordConfirmationValue, "A confirmação de senha é obrigatório");
    }else if(passwordConfirmationValue !==passwordValue) {
        setErrorFor(passwordConfirmation,"As senhas devem ser iguais.")       
    }else{
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll('.form-control')
    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });
    if(formIsValid){
        console.log("O formulário está completo")
    }
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    //mensagem de erro
    small.innerText = message;

    //classe de erro
    formControl.className = "form-control error";
}
function setSuccessFor(input){
    const formControl = input.parentElement;

    //classe de sucesso
    formControl.className = "form-control success";
}
function checkEmail(email){
    return 
}