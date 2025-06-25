"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "pankaj", age: 25 }, { name: "shiva", age: 27 });
console.log(age);
