//Defining Types
//Using type
type User = {
    name: string,
    id: number,
    email: string
    isStudent: boolean;
}

//Using interface
interface Account {
    balance: number,
    passcode: number,
    isActive: true,
}

const user: User = {
    name: "Blatter",
    id: 131100,
    email: "beaucicotlovenson@gmail.com",
    isStudent: true,
}

const userAccount: Account = {
    balance: 25000,
    passcode: 131100,
    isActive: true
}

function displayUserData(user: User) {
    console.log(user)
}

displayUserData(user);


