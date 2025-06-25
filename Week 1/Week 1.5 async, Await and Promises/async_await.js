function pankajPromise(){
    let p = new Promise(function (resolve){
        setTimeout(function(){
            resolve("Hi There");
        },3000)
    })
    return p;
}

async function main(){
    let value = await pankajPromise(); //we stuck the thread at this point still its a async bcoz after main we can see the output its goes forward but inside this we holds the thread
    console.log("Hi there 1");
    console.log(value);
}

main();
console.log("After Main");
