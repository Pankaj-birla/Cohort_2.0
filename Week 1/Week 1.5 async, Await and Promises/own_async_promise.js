function pankajPromise(){
var d = new Promise(function(resolve){
    resolve("Hi there")
}
)
    return d;
}

var promise = pankajPromise();
promise.then(function(data){
    console.log(data);
})

