// forcefull type assersion
let response: any = "332";
let numeric: number = (response as string).length;

type book = {
  name: string;
};

let bookString = "this is fevorite book";

// alwayse use (as book) agter JSON.parse becouse JSON.parse re turn ant value in form of json but if you use as book it should come from book that will strore in book object
// let bookObject = JSON.parse(bookString); // wrong
let bookObject = JSON.parse(bookString) as book; // currect

console.log(bookObject);

const inputElement = document.getElementById("input") as HTMLInputElement; // use as HTMLInputElement to forcefull type assersion

let value : any;

value = 10
value = "10"
value = true
value.toUpperCase()

let newValue: unknown;
newValue = 10;
newValue = "10";
newValue = true;
// (newValue as string).toUpperCase() is not allowed
// use conditional code 
if(typeof newValue === "string"){
    newValue.toUpperCase()
}

// trycatch
try {
    
} catch (error) {
    //console.log(error.message); this is allowed
    //use this instead of above code
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
    
}


// use of never
type Role = "admin" | "user" ;
function redirectBasedOnRole (role: Role): void{
    if(role === "admin"){
        console.log("redirect to admin page");
        return;
    }
    if(role === "user"){
        console.log("redirect to user page");
        return;
    }
    //role: never;// mistale becose this say that role is not admin or user and once all these cases are handled then role will be never

    // naver used function, always true
    function neverReturn():never{
        while(true){}
    }
}