//validação de forms e tratamento de erros da api

export function errorRegister (errorCode) {
    switch (errorCode) {
        case 400:
           return "Missing required data";
        case 403:
            return "Email already in use";        
        default:
            return `Contact the website owner and inform the ${errorCode}`;
    } 
}

