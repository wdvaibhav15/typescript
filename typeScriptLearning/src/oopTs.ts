// class
class student {
    name: string;
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}
//object
const cseStudent = new student("aman",23)
cseStudent.name = "envjer"


//access modifiers
class Chai {
    public flavor: string = "masala"

    private secretIngredients = "cardamom"

    //to access the private keys or functions
    reveal(){
        return this.secretIngredients //okay
    }
}

//object
const c= new Chai()
// c.secretIngredients() wrong
c.reveal()


//getter setter
class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        if(value > 5) throw new Error("Too swaat");
        this._sugar = value
    }
}

const cd = new ModernChai()
cd.sugar = 3

// static value define
class EChai {
    static shopName = "Chaicode caffe"

    constructor (public fabour: string){}
}

console.log(EChai.shopName);

// abstrat classes
 abstract class drink {
    abstract make(): void
 }

 class chai extends drink {
    make(){
        console.log("making chai");
    }
 }  