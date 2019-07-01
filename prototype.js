class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return 'Hello ' + this.name;
  }
}

function User2(name) {
  this.name = name;
}

User2.prototype.sayHello = function() {
  return 'Hello ' + this.name;
};

const klaus = new User('Klaus');
const peter = new User2('Peter');

console.log(klaus.sayHello());
console.log(peter.sayHello());
