function add(a: number, b: number): number {
  let result: number = 0;
  result = a + b;
  return result;
}

function returnSometing<T>(input: T): T {
  return input;
}

const foo = returnSometing<number>(222);
