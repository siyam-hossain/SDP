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

const idListMulply = products.map(
    // (product)=> product.id*4
    //or
    (product)=>{
        return product.id*4
    }
);

console.log(idListMulply);


const res = products.forEach(
    (product)=>{
        console.log(product.id);
    }
)

console.log(res);



products.forEach(
    (product)=>{
        console.log(product.color);
    }
)