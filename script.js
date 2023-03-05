let obj = {
  user: "Vlad",
  age: 33,
  role: "developer",
};

let xhr = new XMLHttpRequest();

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhr.send(JSON.stringify(obj));

xhr.onloadend = function () {
  if (xhr.status == 201) {
    console.log("Успех");
  } else {
    console.log("Ошибка " + this.status);
  }
};
