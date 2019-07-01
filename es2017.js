const arr = [1, 2, 3];

// bei einem Parameter keine Klammer nötig
const result = arr.map(item => {
  return item * item;
});

// bei nur 1 statement kein return + keine {}
const result2 = arr.map(item => item * item);

// das this in einer arrow function ist der umgebende kontext

const klaus = {
  name: 'Klaus',
  sayHello() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

const { name } = klaus;
console.log(name);
const [, second] = result;
console.log(second);

function myFunc(first, ...args) {
  console.log(first, args);
}

myFunc(1, 2, 3);
myFunc();

// result = [1,4,9]
// myFunc(result[0], result[1], result[2]...)
myFunc(...result);
