"use strict";
/*  Pick example : if I need to only few variables rather then creating one more interface we directly pick
    from the main and pass it our fn

    interface UserDetails {
    name: string;
    age: number;
    email: string;
    contact: string;
    }

    // Creating a new type with only `name` and `email` properties from `User`
    type userProfile = Pick<UserDetails, "name" | "email">;

    function displayUserProfile(user: userProfile) {
        console.log(`Name : ${user.name} , Email : ${user.email}`);
    }
*/
const users = {
    abc123: { id: "abc123", name: "John Doe" },
    xyz789: { id: "xyz789", name: "Jane Doe" },
};
console.log(users["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }
/**/
