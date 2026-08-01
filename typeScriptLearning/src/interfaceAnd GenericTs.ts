// interface always define the structure of the objects and doesn't generate any code of javascript
// interfaces alwaye construct the structure of the objects and never put data inside the objects so thats why we need to defile functions inside the interface and then use it inside the objects or classess
//interface
interface User {
    name: string;
    age: number;
    dress?:boolean; // optional property
}

const user: User = {
    name: "John",
    age: 30
};

interface Shop {
    readonly id: number; // readonly property
    name: string;
}

const s: Shop = {
    id: 1,
    name: "Shop1"
};
// s.id = 2; // becouse it is only read only roperty  so you cant change it using . operation
s.name = "Shop2"; // you can change the name property because it is not readonly


interface DiscountCalculator {
    (price:number): number; // function signature/definition
}

// use using function type interface
const applyDiscount: DiscountCalculator = (price: number) => {
    return price * 0.9; // apply 10% discount
}

interface TeaMachine{
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start: () => {
        console.log("Tea machine started");
    },
    stop: () => {
        console.log("Tea machine stopped");
    }
}

interface ChaiRatings {
    [flavor: string]: number; // index signature
}

const ratings: ChaiRatings = {
    "Masala": 5,
    "Ginger": 4,
    "Cardamom": 3
}


//interface 1
interface User{
    name: string;
}

//interface 2
interface User{
    age: number;
}
// interfaces can be merged together if they have the same name and they will be combined into a single interface with all the properties of both interfaces
const u: User = {
    name: "John",
    age: 30
}

interface A {a: string}
interface B {b: string}
interface C extends A, B {}
