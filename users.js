import { users } from "./data.js";
class Users{
    constructor(){
        this.data = [users];
    }
  addUser(newUser) {
    this.data.push(newUser);
  }

  list() {
    return this.data;
  }

  search(username) {
    return this.data.find(dato => dato.username === username);
  }
}

let app = new Users();

const add = document.getElementById("addBtn")
add.addEventListener("click", function(e){
  e.preventDefault()
  let name = document.getElementById("name").value;
  let website = document.getElementById("website").value;
  let age = document.getElementById("age").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;

  const userObject = {
    name,
    website,
    age,
    username,
    email
  }

  app.addUser(userObject);
  document.getElementById("announce").innerHTML = "<p>A new user has been signed up</p>";
})

const list = document.getElementById("list")
list.addEventListener("click", function(){
  let data = app.list();

  const table = document.getElementById("table-body");
  table.innerHTML = "";
  data.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.age}</td>
      <td>${user.website}</td>
      <td>${user.email}</td>
    `;
    table.appendChild(row);
  });
});



