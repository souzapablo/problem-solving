console.log(revertString("Hello, world! 😊"));

function revertString(input) {
  let arr = [...input];
  let size = arr.length;

  for (let i = 0; i < size/2; i++) {
    [arr[i], arr[size - i - 1]] = [arr[size - i - 1], arr[i]];
  }

  return arr.join('');
}