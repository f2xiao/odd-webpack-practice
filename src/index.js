// import your function
import { User } from "./User.js";
import "./style.css";
import Icon from "./icon.png";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component (user) {
  const element = document.createElement("div");
  element.textContent = user.printString();
  element.classList.add("hello");
  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  const usersContainer = document.querySelector("#users");
  usersContainer.appendChild(element);

  // use your function!

  // console.log(user);
  // console.log(admin);
  // console.log(userString);
  // console.log(adminString);

  // console.log(user.__proto__ == admin.__proto__);
  // console.log(user.__proto__); // proto obj
  // console.log(user.__proto__.__proto__); // anscestor obj
  // console.log(user.__proto__.__proto__.__proto__); // Object.prototype or {}
  // console.log(user.__proto__.__proto__.__proto__.__proto__); // null

  // console.log(user.log);
  console.log(Data);
  console.log(Notes);
  // console.log(admin.log);
}

function render (moduleName, user) {
  const element = document.createElement("div");
  element.id = moduleName;
  document.body.appendChild(element);
  component(user);
}

const user = User("tom", 26);

render("users", user);
