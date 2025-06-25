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

/*  Partial example : Make the properties optional

    interface UserDetails {
    name: string;
    age: number;
    email: string;
    contact: string;
    }

    // Creating a new type with only `name` and `email` properties from `User`
    type userProfile = Pick<UserDetails, "name" | "email">;
    type userProfileOptional = Partial<userProfile>;

    function updateUser(user: userProfileOptional) {
        console.log(`Name : ${user.name}`);
    }
*/

/*  ReadOnly example : Make the properties couldn't change

    interface Config {
    endpoint: string;
    apiKey: string;
    }

    const config: Readonly<Config> = {
    endpoint: "<https://api.example.com>",
    apiKey: "abcdef123456",
    };

    // Attempting to modify the object will result in a TypeScript error
    // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
*/

/*  Record

    interface UserDetails {
        id: string;
        name: string;
    }

    // Using Record to type an object with string keys and User values
    type Users = Record<string, UserDetails>;

    const users: Users = {
        abc123: { id: "abc123", name: "John Doe" },
        xyz789: { id: "xyz789", name: "Jane Doe" },
    };

    console.log(users["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }
*/

/*  Maps
 */
    interface UserDetails {
    id: string;
    name: string;
    }
 
    // Initialize an empty Map with string keys and User values
    const usersMap = new Map<string, UserDetails>();

    // Add users to the map using .set
    usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
    usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

    // Accessing a value using .get
    console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
/**/

