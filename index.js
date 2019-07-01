function doit(myObj) {
  myObj.name = 'Klaus';
}

const peter: {
  name: 'Peter',
};

doit(peter);

console.log(peter);
