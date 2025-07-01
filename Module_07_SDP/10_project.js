const loadAllProduct = ()=>{

    fetch('https://fakestoreapi.com/products')
    .then(
        (response)=> response.json()
    )
    .then(
        (data)=>{
            // console.log(data);
            displayProduct(data);
        } 
    )
    .catch(
        (err)=>{
            console.log(err);
        }
    );
};




const displayProduct = (products)=>{
    // console.log(products);
    const productContainer = document.getElementById("product-container");

    products.forEach(
        (product) => {
            // console.log(product);


            const div = document.createElement("div");

            div.classList.add("card");
            

            
            div.innerHTML =
            `  
            <image class="card-img" src=${product.image} />
            <h5>${product.title.slice(0,50)}</h5>
            <h5>Price: ${product.price}</h5>
            <p>${product.description.slice(0,50)}</p>
            <button onclick = "singleProduct('${product.id}')">Details</button>
            <button onclick = "handleAddToCart('${product.title}', '${product.price}')">Add To Cart</button>
            
            `;

            productContainer.appendChild(div);
        }
    );
};

const handleAddToCart = (name,price)=>{
    //counting number of cart
    const cartCount = document.getElementById("count").innerText;
    let convertedCount = parseInt(cartCount);
    convertedCount += 1;
    document.getElementById("count").innerText = convertedCount; //updating innner text


    // console.log(name,price);
    const container = document.getElementById("cart-main-container");

    const div = document.createElement("div");
    div.classList.add("cart-info")

    div.innerHTML = `
        <p>${name.slice(0,10)}</p>
        <h3 class="price">${price}</h3>
    `;
    container.appendChild(div);

    updateTotal();
};

const updateTotal = ()=>{
    const allPrices = document.getElementsByClassName("price");

    let sum = 0;
    for (const price of allPrices) {
        sum += parseFloat(price.innerText);
    }
    document.getElementById("total").innerText = sum.toFixed(4); //toFixed use decimal precision : means how many digit we need after . point

};


const singleProduct = (id)=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => console.log(data));
}

//try to implement bootstrap modal

loadAllProduct();

/*
    Efficient fetch: 

    async avoid 
    Synchoronas javascript concept

*/