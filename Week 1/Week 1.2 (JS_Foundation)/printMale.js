const allUsers = [{
    firstName : "Priya",
    gender : "female"
},
{
    firstName : "prajwal",
    gender : "male"
},
{
    firstName : "Sanskar",
    gender : "male"
},    
]

for(let i=0; i< allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"]);
    }
}



// const persons = ["priya", "prajwal","sanskar"]

// const gender = ["female", "male","male"]

// for(let i=0; i<=persons.length; i++){
//     if(gender[i] == "male")
//     {
//         console.log(persons[i]);
        
//     }
// }