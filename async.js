// callback

function doSomethingCallback(callback) {
  setTimeout(() => {
    const value = 'Hello World';
    console.log(value);
    callback(value);
  }, 1000);
}

const callback = function(value) {
  console.log('Im Callback: ', value);
};

doSomethingCallback(callback);

// promises

function doSomethingPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = 'Hello World';
      resolve(value);
      //reject(new Error('👻'));
    }, 1000);
  });
}

const promise = doSomethingPromise();

promise
  .then(
    value => {
      console.log(value);
    }
    // error => {
    //   console.log(error);
    // }
  )
  .catch(e => console.log(e));

// async await

async function doSomethingAsync() {
  try {
    const value = await doSomethingPromise();
    console.log('async value: ', value);
  } catch (e) {
    console.error(e);
  }
}

doSomethingAsync();
