interface User  {
  firstname : string;
  lastname : string;
  age : number;
  email?: string; //it is optional
}

function isLegal(user : User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}
isLegal({
  firstname : "Pankaj",
  lastname: "Birla",
  age: 18
})