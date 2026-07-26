let sub:string | number ="10k"

let apiRequestStats :"pending" | "success" | "failed" = "pending";

apiRequestStats = "failed"; // curret way any select value from pending, success, failed
// apiRequestStats = "done"; // not allowed


let airlineSeat: "window" | "aisle" | "middle" = "middle";
airlineSeat="aisle";

const orders = ["23","32","45","12","56"];

let currectOrder : string | undefined;
for(let order of orders){
    if(order === "12"){
        currectOrder = order;
        break;
    }
    currectOrder = "11";
}
console.log(currectOrder);
