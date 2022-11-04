// export const createToken = (e) => {
//     e.preventDefault()
//     const data = new FormData(e.target)
//    const url = fetch('https://lab-api-bq.onrender.com/api-docs/auth', {
//       method: 'POST',
//       headers: {"Content-Type": "application/json; charset=UTF-8"},
//       body: JSON.stringify({
//         email: data.get("email-input"),
//         password: data.get("password"),
//       }),
//     }).then((Responses) => {
//       // if (Responses.status === 200) {
//         console.log(Responses.status)
//       //return window.location = '/pageInicial'
//      // }
//     })
//     console.log(url)
//   };


// ////////////////


//   export const createUser = (e) => {
//     e.preventDefault()
//     const data = new FormData(e.target)
//     const url = fetch('https://lab-api-bq.onrender.com/api-docs/users',{
//       method: 'POST',
//       headers: {"Content-Type": "application/json; charset=UTF-8"},
//       body: JSON.stringify({
//       name: data.get("name-input"),
//       email: data.get("email-input"),
//       password: data.get("password-input"),
//       role: data.get("employees"),
//       restaurant: 'Burguer Queen',
//     }),
//   }).then((verificar) => {
//     if (verificar.status === 200) {
//       return console.log('Registrado')
//     }
//   })
//   console.log(url)
//   };
