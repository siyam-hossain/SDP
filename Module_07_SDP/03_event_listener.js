//approach 1
document.getElementById("handleADD").addEventListener(
    "click", //parameter 1
    (event)=>{ //parameter 2: function or arrow function
        console.log("HEy there");
    }
)


//approach 2
const handleSearch = (event)=>{
    // console.log("Hello sir");
    const inputValue = document.getElementById("inputField").value;
    console.log(inputValue);




    //DOM Manupulation:

    const container = document.getElementById("comment-container");

    //creating element(tag) using javascript
    const p = document.createElement("p");

    //give a class name to tag: tagName.classList.add(className)
    p.classList.add("child");


    //append p tag with input value
    p.innerText = inputValue;
    // console.log(p);

    //append comment-container
    container.appendChild(p);

    //clear input field
    document.getElementById("inputField").value = "";



    const allComments = document.getElementsByClassName("child"); //class can hold collection of an array

    //iterate that array using for of loop
    for (const element of allComments) {
        // console.log(element);
        element.addEventListener(
            "click",
            (event)=>{
                // console.log(event.target);//target that element
                // console.log(event.target.parentNode);//can access parent 


                //remove child from parent
                event.target.parentNode.removeChild(element);
            }
        
        )
    }
}