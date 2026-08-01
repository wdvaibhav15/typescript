// interface and generics are the templetes of typescript
// generics made our code more reusable and flexible
// presentaion of genrics
function wrapInArray<T>(arr: T): T[] {
    return [arr];
}

wrapInArray<string>("Hello"); // ["Hello"]
wrapInArray<number>(5); // [5]
wrapInArray<boolean>(true); // [true]

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

pair("Hello", 5); // ["Hello", 5]
pair("Hello", true); // ["Hello", true]

//generic interface
interface Box<A> {
    content: A
}
//use generic interface
const numberBox: Box<number> = {
    content: 5
}
const stringBox: Box<string> = {
    content: "Hello"
}
const booleanBox: Box<boolean> = {
    content: true
}