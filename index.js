const url = "http://localhost:3000/users";
const submitData = (name, email) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then((response) => response.json())
    .then((object) => (document.body.innerHTML = object["id"]))
    .catch((error) => (document.body.innerHTML = error.message));
};

submitData("alberto", "albeto@sierra.com");
submitData("antonio", "antonio@sierra.com");
