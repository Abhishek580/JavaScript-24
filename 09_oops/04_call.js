function setUsername(userName){
    this.username = userName
    console.log('setUsername fnc called ', userName);
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser("Abhishek", "abhi@abc.com", "123")
console.log(user);