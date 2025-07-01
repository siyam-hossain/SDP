
const handleSearch = (event)=>{

    const inputValue = document.getElementById("inputField").value;
    console.log(inputValue);



    const container = document.getElementById("comment-container");

    const p = document.createElement("p");


    p.classList.add("child");


 
    p.innerText = inputValue;



    container.appendChild(p);

    document.getElementById("inputField").value = "";



    const allComments = document.getElementsByClassName("child"); 

    for (const element of allComments) {

        element.addEventListener(
            "click",
            (event)=>{

                event.target.parentNode.removeChild(element);
            }
        
        )
    }
}


/*
    API calling : 
    
    fetch("url")
    .then(
        (response)=>{
            return response.json();
        }
    )
    .then(
        (data)=>{
            
        }
    )

*/
fetch("https://jsonplaceholder.typicode.com/users")
.then(
    //arrow function
    (response)=>{
        return response.json();
        // console.log(response);
    }
)
.then(
    //arrow function
    (data)=>{
        // console.log(data);
        displayData(data);
    }
)
.catch(
    (err)=>{
        console.log(err);
    }
);


const displayData = (userData)=>{
    const container = document.getElementById("userData-Container");

    //forEach : map,filter,find

    userData.forEach(
        (user)=> {
            // console.log(user);
            const div = document.createElement("div");
            //add class name
            div.classList.add("user");

            /*
                div
                    p    ---> inner html
                    h1   ---> inner html   
                    div  ---> inner html
                div

                
                syntax:
                div.innerHTML = `
                    <h4>title<\h4>
                `

            */

            div.innerHTML = `

                <h4>title</h4>
                <p>Description</p>
                <button>Details</button>
            
            `;

            container.appendChild(div);


        }
    );
}