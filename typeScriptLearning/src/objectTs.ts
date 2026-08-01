const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true,
}

// declaring type of object
let tea :{
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

//alice object 
type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}
const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 20,
    ingredients: ["ginger", "tea leaves"]
} 

// duck typing
type Cup = {size: string};
let smallCup: Cup = {size: "200ml"};

let bigCup = {size: "500ml", material: "steel"}
smallCup = bigCup

type Brew = {brewTime: number};
const coffee = {brewTime: 5, beans: "arabica"};
const chaiBrew : Brew = coffee

// data splite out, sepration of data
type Item= {name:string, quantity: number};
type Address= {street:string, pin: number};

type Order = {
    id:string;
    items: Item[];
    address: Address
}

type Chai={
    name: string;
    price: number;
    isHot: boolean
}
// partial means that if any property is empty it's okay
const updateChai = (updates: Partial<Chai>) =>{
    console.log("update chai", updates);
}

updateChai({price:25})
updateChai({name:"ginger chai"})
updateChai({})

type ChaiOrder = {
    name?:string;
    quantity?:number
}
// but in case of required all properties should be required properly 
// can't be empty
const placeOrder = (order:Required<ChaiOrder>)=>{
    console.log(order)
}
placeOrder({name:"ginger chai", quantity:2})// correct
// placeOrder({name:"ginger chai"})// wrong
// placeOrder({quantity:2})// wrong
// placeOrder({})// wrong


type Chaiii={
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}
// pick/select some spesific properties from object
type BasicChaiInfo = Pick<Chaiii, "name" | "price">;
const basicInfo: BasicChaiInfo = {
    name: "ginger chai",
    price: 20
}



type NewChaiii={
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}
// Omit/removes some spesific properties from object
type NewChaiInfo = Omit<NewChaiii, "secretIngredients">;
const newChaiInfo: NewChaiInfo = {
    name: "ginger chai",
    price: 20,
    isHot: true
}


