## Reading the contents of a file

Write code to read contents of a file and print it to the console.
You can use the fs libraryto as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.

Solution :

const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
console.log(data);

});

for(let i=0; i<100; i++){
console.log(i);
}

for(let i=0; i<100; i++){
console.log(i);
}
