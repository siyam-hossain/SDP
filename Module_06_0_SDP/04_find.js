/*
    array
        object
        object
        object
*/

const products = [
    {
        id : 1,
        name : "xiaomi",
        description : "this is xiaomi",
        price : 50000.00,
        color : "black"
    },
    {
        id : 2,
        name : "poco",
        description : "this is poco",
        price : 50000.00,
        color : "purple"
    },
    {
        id : 3,
        name : "nothing",
        description : "this is nothing",
        price : 30000.00,
        color : "white"
    }
]

//loop approach to find something

// for (let i = 0; i < products.length; i++) {
//     // console.log(products[i]);
//     const element = products[i];
//     if(element.id == 3){
//         console.log(element);
//     }
    
// }


//find approach: when finding single thing (specific)
//note****: it accept only one result though it hs similar value in it 
//if it can't find similar things it return undefiend 



                //calling find method
const result = products.find(
    //arrow function
    (pd)=>
    {
        return pd.id == 3
    }
);

console.log(result);

const result2 = products.find(pd=>pd.id==2);
console.log(result2);