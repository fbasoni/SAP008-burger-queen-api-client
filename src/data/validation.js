//validação de forms e tratamento de erros da api

export function errorRegister (errorCode) {
    let message;
    switch (errorCode) {
        case "400":
            message = "Preencha todos os campos necessários";
            return message;
        case "403":
            message = "O e-mail já está sendo usado";
            return message;
        default:
            message = "Entre em contato com o proprietário do site e informe o ";
            message+=`${errorCode}`;
    } 
}