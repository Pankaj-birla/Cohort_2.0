interface User {
  name: string;
  age: number;
}

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
}

const age = sumOfAge({ name: "pankaj", age: 25 }, { name: "shiva", age: 27 });
console.log(age);
