// import your function
import User from './User.js';

function component() {
  const element = document.createElement('div');

  // use your function!

  const user = User("tom", 26);
  // console.log(user); 
  const name = user.printName();
  console.log(name)

}

component();
