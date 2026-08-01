// arrays in type script in form of different datatypes 
const colors: string[] = ["black", "white", "green"];
const numbers: number[] = [10, 20, 30];

const rating: Array<number> = [4.0, 5.2, 3.5];

// array of object
type ticket = { 
    name: string; 
    quantity: number 
};

const menu:ticket[] = [
    { name: "silver", quantity: 2 },
    { name: "gold", quantity: 3 },
];


// read only array can't be modify further
const cities: readonly string[] = [
    "Delhi", "Mumbai", "Chennai", "Kolkata"
];
// always give an error that you can't modify or add another data
// cities.puch("Hyderabad");

// multi dimension array
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let population: [string, number];
// order should be same 
//population = [1000000, "Delhi"]; not allowed
population = ["Delhi", 1000000];

population = ["Mumbai", 2000000];

let phone: [string, number, boolean?];

phone = ["Samsung", 10000];
phone = ["Iphone", 100000, true];

// readonly tupples
const location: readonly [number, number] = [1, 2];

//named tupples
const coordinates: [x: number, y: number] = [1, 2];
const student: [name: string, age: number] = ["John", 20];

//enum 

enum laptopsize {
    small=13.5,
    medium= 15.0,
    large = 17.5

}
const inches = laptopsize.medium;


enum status {
    PENDING = 100,
    SUCCESS, //101
    REJECT // 102
}
