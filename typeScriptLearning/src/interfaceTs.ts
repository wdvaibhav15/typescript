// making code readable using interface
type chaiOrder = {
    type:string,
    sugar:number,
    strong:boolean
};

function makeChai ( order: chaiOrder ){
    console.log(order);
}

function serveChai ( order: chaiOrder ){
    console.log(order);
}

type TeaRecipe ={
    water:number,
    milk:number
}

// this function is only currect if case of object should not be predefined
class MasalaChai implements TeaRecipe{
   water = 10;
   milk = 10;
}

//type cupSize = "small" | "medium" | "large";

// this function is only currect if case of object should not be predefined in this case it is predefined by values "small" | "medium" | "large"
// class Tea implements cupSize{
//     water = 10;
//     milk = 10;
// }
// then we use interface
interface cupSize {
    size:"small" | "medium" | "large";
}

class Chai implements cupSize{
    size:"small" | "medium" | "large" = "medium";
    
}


// it give error
// type response = {ok:true} | {ok:false}
// class myRes implements response{
//     ok: boolean = true;
// }


// allowed only these two values only
type teaType = "chai" | "tea";
function orderChai (t:teaType){
    console.log(t);
}

// intersection
// it means all properties are defined must be used 

type BaseChai = {
    teaLeaves: number,
}
type Extra = {
    masala: number
}

type masalaChai = BaseChai & Extra

const cup: masalaChai = {
    teaLeaves: 2,
    masala: 2
}

// optional parameters
type user = {
    username: string,
    bio?: string, // it means optional if not provided then it will be undefined
}
const user1: user = {username: "John Doe"}
const user2: user = {username: "John Doe", bio: "I love coding"}
