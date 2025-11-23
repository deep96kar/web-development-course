console.log("deep is a hacker");
console.log("deep is a hecker");

setTimeout(() => {
  console.log("i m inside settimeout 1");
}, 2000);

setTimeout(() => {
  console.log("i m inside settimeout 2");
}, 0);

console.log("he end");

const callback = (arg) => {
  console.log(arg);
};

const loadscript = (src, callback) => {
  let sc = document.createAttribute("script");
  sc.src = src;
  sc.onload = callback("Deep");
  document.head.append();
};


loadscript("https://cdnjs.cloudflare.com/ajax/libs/script.js/2.0.2/script.min.js",callback)