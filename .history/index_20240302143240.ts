//Defining Types

interface User {
    name: string,
    id: number,
    email: string
    isStudent: boolean;
}

const user: User = {
    name: "Blatter",
    id: 131100,
    email: "beaucicotlovenson@gmail.com",
    isStudent: true,
    age: 23,
}

console.log(user);