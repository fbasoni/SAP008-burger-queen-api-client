function getUrlEndpoint(endpoint){
  const url = `https://lab-api-bq.onrender.com/${endpoint}`;
  return url
}

export const createUser = async (e) => {
  e.preventDefault();
  const url = getUrlEndpoint('users');
  const data = new FormData(e.target);
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: data.get('name-input'),
      email: data.get('email-input'),
      password: data.get('password-input'),
      role: data.get('employees'),
      restaurant: 'Burguer Queen'
    }),
  }

  fetch(url, postOptions)
    .then((responses) => {
      const res = responses.json();
      console.log(res);
      window.location = '/pageInicial'
    })
    .catch((err) => {
      console.log(err)
    });
}
