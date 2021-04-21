// import '@babel/polyfill';

const aa = (x, y) => x + y;
// eslint-disable-next-line no-unused-vars
const bb = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello world');
  }, 1000);
});

console.log(bb);
aa(2, 3);
