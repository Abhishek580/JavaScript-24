const promiseOne = new Promise(function (resolve, reject) {
  // do nay async fnc
  setTimeout(function () {
    console.log("async task is complete");
    resolve();
  }, 1000);
});

// console.log(promiseOne.then());
promiseOne.then(function () {
  console.log("resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  // do nay async fnc
  setTimeout(function () {
    console.log("async task is complete");
    resolve({ username: "abhi", email: "abc@gmail.com" });
  }, 1000);
});
// console.log(promiseOne.then());
promise3.then(function (data) {
  console.log("resolved : ", data);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = true;
    if (!err) {
      resolve({ username: "abhi", email: "abc@gmail.com" });
    } else {
      reject("there is some error");
    }
  }, 1000);
});

promise4
  .then(function (data) {
    console.log("resolved : ", data);
  })
  .catch(function (data) {
    console.log("resolved : ", data);
  });

async function consumePromise() {
  try {
    const res = await promise4;
    console.log(res);
  } catch (e) {
    console.log("error from async fnc: ", e);
  }
}

consumePromise();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
