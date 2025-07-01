/*

    typeof 500         // "number"
    typeof "hello"     // "string"
    typeof true        // "boolean"
    typeof [1, 2, 3]   // "object" (কারণ অ্যারে একধরনের অবজেক্ট)


    typeof livingCost !== "number"


*/

function monthlySavings(payments,livingCost){

    let totalSave = 0;

    if(!Array.isArray(payments) || typeof livingCost !== "number"){
        return "invalid input";
    }

    for(let i = 0; i < payments.length ; i++){

        if(typeof payments[i] !== "number"){
            return "invalid input";
        }

        if(payments[i]>=3000){
            totalSave += payments[i] - (payments[i] * (20/100));
        }else{
            totalSave += payments[i];
        }
    }
    
    totalSave -= livingCost;

    if(totalSave >= 0){
        return totalSave;
    }else{
        return "earn more";
    }
}


console.log(monthlySavings([1000, 2000, 3000], 5400)); 
console.log(monthlySavings([1000, 2000, 2500], 5000)); 
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400])); 

