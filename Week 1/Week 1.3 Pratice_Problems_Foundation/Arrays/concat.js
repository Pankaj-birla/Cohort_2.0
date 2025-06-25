let initialArray = [1,2,3]
let secondArray = [4,5,6]
console.log(initialArray.concat(secondArray))


function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);