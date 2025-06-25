function findSum(n){
    let ans = 0;
    for(let i=0; i<=n; i++){
        ans += n;
    } 
    return ans;
}

function findSumAll(){
    console.log(findSum(100));
}

setTimeout(findSumAll,1000);
console.log("Hello World");

setTimeout(findSumAll,2000);

