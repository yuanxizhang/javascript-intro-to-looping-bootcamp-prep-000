var a = [];

function forLoop(arr){
  for (let i=0; i < 25; i++) {
    if (i === 1) {
      arr.push("I am 1 strange loop.");
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}

forLoop(a);

function whileLoop(n){
  while(n > 0){
    console.log(n);
    n -= 1;
  }
  return "done";
}

whileLoop(10);

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(arr){
  do {
    arr.pop();
  } while(arr.length > 0 && maybeTrue())
  return arr;
}
