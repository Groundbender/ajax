const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.log(error));
};

const sendData = ({ url, data, method }) => {
  fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

getData("db.json")
  .then((data) => {
    return sendData({
      url: "https://jsonplaceholder.typicode.com/posts",
      data: data,
      method: "POST",
    });
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
