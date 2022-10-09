function users() {
  this.allUsers = [];
  this.addUser = (user) => {
    this.allUsers.push(user);
    return this;
  };
  this.getUserByUsername = (userName) => {
    return this.allUsers.find((user) => {
      return user.userName === userName;
    });
  };
}

function user(userName) {
  this.userName = userName;
  this.peopleYouFollow = [];
  this.peopleFollowYou = [];
  this.addFollow = function (user) {
    this.peopleYouFollow.push(user);
  };
}
let us1 = prompt("הכנס שם משתמש ראשון!");
let us2 = prompt("הכנס שם משתמש שני!");
let us3 = prompt("הכנס שם משתמש שלישי!");
let us4 = prompt("הכנס שם משתמש רביעי!");
let user1 = new user(us1);
let user2 = new user(us2);
let user3 = new user(us3);
let user4 = new user(us4);

let allUser = new users()
  .addUser(user1)
  .addUser(user2)
  .addUser(user3)
  .addUser(user4);

console.log(allUser);
user1.peopleFollowYou.push(user2);
user1.peopleFollowYou.pop(user4);
console.log(user1.peopleFollowYou);

let removeBlaBla = (elementId) => {
  let myNode = document.getElementById(elementId);
  myNode.innerHTML = "";
};

let addBlaBla = (elementId, user) => {
  let newUser = document.getElementById(elementId);
  newUser.appendChild(
    document.createTextNode("User name is: " + user.userName)
  );
  newUser.appendChild(document.createElement("div"));

  newUser.appendChild(
    document.createTextNode(
      "You are following after " +
        user.peopleYouFollow.length +
        " people: -> " +
        user.peopleYouFollow
    )
  );
  newUser.appendChild(document.createElement("div"));

  newUser.appendChild(
    document.createTextNode(
      "You are followed by " +
        user.peopleFollowYou.length +
        " people: -> " +
        user.peopleFollowYou
    )
  );
  newUser.appendChild(document.createElement("div"));

  newUser.appendChild(
    document.createTextNode("Add the next user you want to follow:")
  );
  let input = document.createElement("input");
  input.type = "text";
  input.id = user.userName;
  newUser.appendChild(input);

  newUser.appendChild(document.createElement("br"));

  let button = document.createElement("button");
  button.textContent = "Follow user";
  button.onclick = () => {
    let followUser = document.getElementById(user.userName).value;
    console.log("my user that I want to follow is:" + followUser);
    user.peopleYouFollow.push(followUser);

    allUser.getUserByUsername(followUser).peopleFollowYou.push(user.userName);

    removeBlaBla("name1");
    removeBlaBla("name2");
    removeBlaBla("name3");
    removeBlaBla("name4");

    addBlaBla("name1", user1);
    addBlaBla("name2", user2);
    addBlaBla("name3", user3);
    addBlaBla("name4", user4);
  };
  newUser.appendChild(button);

  newUser.appendChild(document.createElement("br"));
  newUser.appendChild(document.createElement("br"));
};

addBlaBla("name1", user1);
addBlaBla("name2", user2);
addBlaBla("name3", user3);
addBlaBla("name4", user4);
