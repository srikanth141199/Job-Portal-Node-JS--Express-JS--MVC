export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static add(name, email, password) {
    const newUser = new UserModel(
      users.length + 1,
      name,
      email,
      password
    );
    users.push(newUser);
  }

  static isValidUser(email, password) {
    const result = users.find(
      (u) =>
        u.email == email && u.password == password
    );
    return result;
  }
}

var users = [
  new UserModel(
    1,
    'John',
    'john@gmail.com',
    'John1234'
  ),
  new UserModel(
    2,
    'Bob',
    'bob1234@gmail.com',
    'Bob1234'
  )
];
