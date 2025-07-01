console.log("Siyam Hossain");




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
    },
    {
        id : 4,
        name : "iphone",
        description : "this is iphone",
        price : 50000.00,
        color : "black"
    }
]



//filter: it can return similar things - if black is 2 or more then it return 2 or more
//if it can't find similar things then it return empty array


const result = products.filter(
    (product)=>product.color=="black"
);

console.log(result);