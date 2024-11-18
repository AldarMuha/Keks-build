function getRandomPositiveInteger(a: number, b: number) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomArrayElement(arr: []) {
  return arr[getRandomPositiveInteger(0, arr.length - 1)];
}
/*
function getRandomArrayElements(count: number, array: []) {
  const newArray: [];
  for (let i = 0; i < count; i++) {
    const element = array.findIndex((arrayItem) => newArray.find((newArrayItem) => newArrayItem === arrayItem));
  }
}
*/
export { getRandomArrayElement };
