const fs = require('fs');
// filesystem module

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
});

console.log("Hi there"); //runs first because above function is async

let a = 0;
for(let i=0; i < 100000000; i++){
    a++;
}

console.log("Hi there 2"); //still this runs before Hi There because the thread must be completed first or come to an idle condition
                        // than only its reach back to print the async fn.

