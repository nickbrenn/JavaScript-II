// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(username, password) {
    // set a username and password property on the user object that is created
    this.username = username;
    this.password = password;
  }
  checkPassword(str) {
    if (str === this.password) {
      return true;
    }
    return false;
  }
  // create a method on the User class called `checkPassword`
  // this method should take in a string and compare it to the object's password property
  // return `true` if they match, otherwise return `false`
}

const me = new User('LambdaSchool', 'correcthorsebatterystaple');

const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`

/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`
  if (passwordToCompare === this.password) {
    return true;
  }
  return false;
};

// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind

// .call
checkPassword.call(me,'correcthorsebatterystaple');
// .apply
let arr = [me.password];
checkPassword.apply(me, arr);
// .bind
//let arr = [];
let binder = checkPassword.bind(me, ...arr);
binder();
//Pretty sure I am doing .apply and .bind in a weird contrived way