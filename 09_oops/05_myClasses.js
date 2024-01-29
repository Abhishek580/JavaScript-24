// ES6

class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  encryptPassword(){
    return `${this.password}abc`
  }

  changeUserName(){
    return `${this.userName.toUpperCase()}`
  }
}

const newUser = new User('Abhishek', 'abhi@abc.com', '123')
console.log(newUser.encryptPassword());
console.log(newUser.changeUserName());

// behind the scene by using objects

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());