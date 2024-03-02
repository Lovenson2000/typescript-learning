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

const userData: User = {
    name: "Blatter",
    id: 112500,
    email: "beaucicotlovenson@gmail.com",
    isStudent: true,
}

const userAccount: Account = {
    balance: 25000,
    passcode: 312000,
    isActive: true
}

function displayUserData(user: User) {
    return user;
}

function displayUserAccountData(userAccount: Account) {
    return userAccount;

}

console.log(displayUserAccountData(userAccount));
console.log(displayUserData(userData));

// Because TypeScript is a structural type system,
// it's possible to intermix their use too.

type ComputerType = {
    name: string
}
interface ComputerInterface {
    name: string,
}

const computer1: ComputerType = {
    name: "MacBook Air",
}
// Type intermixing
const computer2: ComputerInterface = computer1;
console.log(computer2);

///Type Extension
type Laptop = { price: number } & ComputerType;
const laptop: Laptop = {
    price: 255000,
    name: "Acer"
};

interface Tablet extends ComputerInterface {
    color: string,
    price: number
}
const tablet: Tablet = {
    name: "iPad",
    price: 20000,
    color: "black",
}

console.log(laptop);
console.log(tablet);

// Composing Types

// Composing types with Union
type MyBoolean = true | false;
let isStudent: MyBoolean;

type Status = "ongoing" | "completed" | "cancelled";
let taskStatus: Status = "completed";

console.log(taskStatus); // completed

// Composing types with Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;

const names: StringArray = ["Blatter", "Jeff", "Ander"];
const ages: NumberArray = [23, 20, 14];

console.log(names, ages);