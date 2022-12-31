function getUrlEndpoint(endpoint){
  const url = `https://lab-api-bq.onrender.com/${endpoint}`;
  return url;
}

export const createUser = async (name, email, password, role) => {
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
  console.log(postOptions);
  return await fetch(url, postOptions);
};

export const createToken = async (email, password) => {
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
  return await fetch(url, postOptions);
};

export const getSession = () => {
   return JSON.parse(localStorage.getItem('session'))
}

export const getProducts = async () => {
  const session = getSession();
  const url = getUrlEndpoint('products');

  const getOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': session.token,
    },
  }
  return await fetch(url, getOptions)
  .then((response) => response.json())
  .then((data) => {
   console.log(data);
    return data;
  })

}
