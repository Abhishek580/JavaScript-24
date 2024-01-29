class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`Username is ${this.userName}`);
  }
}

class Teacher extends User {
  constructor(userName, email, password) {
    super(userName)
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.userName}`);
  }
}

const newUser = new Teacher("Abhishek", "abhi@abc.com", "123");
newUser.addCourse();
// console.log(User);
