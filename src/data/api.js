function getUrlEndpoint(endpoint){
  const url = `https://lab-api-bq.onrender.com/${endpoint}`;
  return url
}

export const createUser = (name, email, password, role) => {
  const url = getUrlEndpoint('users');
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: 'Burguer Queen'
    }),
  };
  console.log(postOptions)
  return fetch(url, postOptions)
};

export const createToken = (email, password) => {
  const url = getUrlEndpoint('auth');
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };
  console.log(postOptions);
  return fetch(url, postOptions);
};
