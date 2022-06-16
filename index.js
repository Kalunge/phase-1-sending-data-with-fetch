// Add your code here
const formData = {
  name: 'Titus Muthomixx',
  email: 'Muthomi@mail.comzxz',
};

const submitData = (name, email) => {
  const configObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ name: name, email: email }),
  };
  let body = document.querySelector('body');

  fetch('http://localhost:3000/users', configObject)
    .then((res) => res.json())
    .then((data) => {
      let newName = document.createElement('p');
      let newEmail = document.createElement('p');
      let newId = document.createElement('p');

      newName.innerHTML = data.name;
      newEmail.innerHTML = data.email;
      newId.innerHTML = data.id;

      body.appendChild(newName);
      body.appendChild(newEmail);
      body.appendChild(newId);
    })
    .catch((error) => {
      let h2 = document.createElement('h2');
      h2.innerHTML = error.message;
      console.log(error);
      body.appendChild(h2);
    });
};

document.addEventListener(
  'DOMContentLoaded',
  submitData(formData.name, formData.email),
);
