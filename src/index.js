// import your function
import User from './User.js';

const Admin = function (name, age) {
  const obj = User(name, age);
  obj.isAdmin = true;
  return obj;
}

function component() {
  const element = document.createElement('div');

  // use your function!

  const user = User("tom", 26);
  // console.log(user); 
  const name = user.printString();

  const admin = Admin('pixie', 9);

  console.log(user);
  console.log(admin);
  // console.log(admin.printString())
}

component();
