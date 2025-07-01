const allBox = document.getElementsByClassName("box");
// console.log(allBox);

for (let i = 0; i < allBox.length; i++) {
    const element = allBox[i];
    
    if((i+1)%2 == 0){
        element.style.backgroundColor = "purple";
        element.style.color = "white";
    }else{
        element.style.backgroundColor = "orange";
    }

    if(element.innerText == "box-2"){
        element.style.backgroundColor = "pink";
        element.style.color = "black";
    }

}