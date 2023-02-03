// import your function
import {User, Admin} from './User.js';

function component(user) {
  const element = document.createElement('div');
  element.textContent = user.printString();
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
  // console.log(admin.log);
}

function render(moduleName,user, admin) {
  const element = document.createElement('div');
  element.id = moduleName;
  document.body.appendChild(element);
  component(user);
  component(admin);
}

const user = User("tom", 26);
const admin = Admin('pixie', 9);

render('users',user, admin);