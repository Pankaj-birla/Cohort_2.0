const fs = require('fs');

// whenever we used promise there is no need to pass the callback fn to rid of callbacks we used promise
function pankajReadFile(){
    return new Promise(function(resolve){

        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data);
        
}

pankajReadFile().then(onDone)



//without promise

// function readingFile(fn){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         fn(data);
//     })
// }

// function done(data){
//     console.log(data);
    
// }

// readingFile(done)