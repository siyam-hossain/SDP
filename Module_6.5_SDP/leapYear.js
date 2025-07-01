/*
    A year is a leap year if:

    ✅ divisible by 4
    ❌ not divisible by 100
    ✅ unless also divisible by 400

*/

const leapYear = (year)=>{
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        console.log(`${year} is a leap year.`);
    }else{
        console.log(`${year} is not a leap year.`);
    }
}

leapYear(2020);
leapYear(1900);
leapYear(2000);
leapYear(2023);
leapYear(2024);
leapYear(2025);