let name = "Siyam Hossain";
name = "hey";

console.log(name);




const countryName = "Bangladesh";
// tamplet litarels 
const country = `My country name is ${countryName}`;

console.log(country);


// spread operator: in spread operator we cannot remove {object} but we can merge them

const numbers = [1,2,3,4,5,6,7,8,9,10];
const numbers2 = [11,12,13,14,15];

const numbers3 = [...numbers,...numbers2];

console.log(...numbers,...numbers2);
console.log(...numbers3);


let maximum = 0;

numbers3.forEach(element => {
    maximum = Math.max(maximum,element);
});

console.log(maximum);


//maximum number
console.log(Math.max(...numbers3));