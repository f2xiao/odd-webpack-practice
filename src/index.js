// import your function
import {User, Admin} from './User.js';



function component() {
  const element = document.createElement('div');

  // use your function!

  const user = User("tom", 26);
  // console.log(user); 
  const nameString = user.printString();

  console.log(nameString);

  const admin = Admin('pixie', 9);

  console.log(user);
  console.log(admin);
  console.log(admin.printString());
  console.log(user.printString());

  console.log(user.__proto__ == admin.__proto__);
  console.log(user.__proto__); // proto obj
  console.log(user.__proto__.__proto__); // anscestor obj
  console.log(user.__proto__.__proto__.__proto__); // Object.prototype or {}
  console.log(user.__proto__.__proto__.__proto__.__proto__); // null

  console.log(user.log);
  console.log(admin.log);
}

component();
