function makeChai(type:string, cups:number){
    console.log(`making ${cups} cups of ${type} chai`);
}

makeChai("masala", 2);

// it shows the return values
 function getChaiPrice():number{
    return 20;

 }

 // if return value is not defined it shows undefined
 function getChaiPrice2():number{
    return 20;
 }
 // if you don't know the return type of the output, don't use the return type in the fuction
 function getOutput(name:string){
     console.log(name);
 }
 getOutput("hello");

 function noneReturn():void{
     console.log("hello");
 }
 //optional parameters
 function orderchai(type?:string){
    console.log(type);
 }
 // default parameters 
 function orderchai2(type:string = "masala"){
    console.log(type);
 }

 function createChai(order:{ 
    type:string,  
    sugar:number,
    size:"small" | "medium" | "large"
}): number{
    return 4
 }