//javascript selector

// document.getElementsByTagName("h1");

console.log(document.getElementsByTagName("h1")); //ot give html collection
//give collection similar to an array

const target = document.getElementsByClassName("title");
console.log(target);
//give collection similar to an array

const aim = document.getElementById("TITLE");
console.log(aim);
//no array
aim.style.color = "purple";


// document.querySelector