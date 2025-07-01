const person = {
    name : "Siyam Hossain",
    age : 10,
    friends : ["sp","sh","sm"]
};

console.log(person.friends);

//extracting element from object for further use {distructuring}
// const {age} = person;
// const {name} = person;
// const {friends} = person;

//or : doesn't follow order
// const {name,age,friends} = person;
const {age,friends,name} = person;

console.log(age);
console.log(name);
console.log(friends);


//array distructuring: maintain order
const names = ["rahim","sh",10,"sm","fadskfjsd fdsakfj"];

const nam1 = names[0];
console.log(nam1); 



const [a,b,c] = names;

console.log(a,b,c);