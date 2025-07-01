const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


//using forEach
numbers.forEach(
    (number)=>{
        if(number%2==0){
            // console.log(number);
        }
    }
);


//using filter
const evenNum = numbers.filter(
    (number)=>{
        return number%2==0;
    }
)

// console.log(...evenNum);


//using function

const oddEven = (tempArray,type)=>{
    let tempEven = [];
    let tempOdd = [];

    tempArray.forEach(
        (number)=>{
            if(number%2==0){
                tempEven.push(number);
            }
            else{
                tempOdd.push(number);
            }
        }
    )
    if(type=="even"){
        return tempEven;
    }
    else{
        return tempOdd;
    }
};

const res = oddEven(numbers,"even");
console.log(res);

const res2 = oddEven(numbers,"odd");
console.log(res2);