export function handleRegisterErrors (errorCode) {
    switch (errorCode) {
        case 400:
           return "Missing required data.";
        case 403:
            return "E-mail already in use.";        
        default:
            return `Contact the website owner and inform the code: ${errorCode}.`;
    } 
}

export function handleLoginError(errorCode){
    if (errorCode === 400) return "Invalid e-mail or password.";
}

export function validateEmail(email) {
    const emailRegex = /[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const validation = emailRegex.test(email);

    if (!email) return "Please, enter your e-mail."
    if (!validation) return "This e-mail is invalid."
}

export function validateName(name) {
    const nameRegex = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;
    const validationName = nameRegex.test(name);

    if (!name) return "Please, enter your name."
    if (!validationName) return "Please, enter your name, numbers are not accepted."
}

export function validatePassword(password) {
    if (!password) return "Please, enter your password."
    if (password.length < 6) return "Your password must be at least 6 characters long."
}

export function validateRole(role) {
    if(!role) return "Please, select your role."  
}