
// Program to find given year is leap or non leap year.
function leapyear(year){
   if (year%4==0 && year%100!=0) {
      console.log(year+" is a leap year \n");
   } else {
      console.log(year+ " is not a leap year \n");
   }
}
leapyear(2020);


//-------------------------------------------------------------------------------


// Program to find the factorial of a given number.
let result, num=5;
function fact(factorial){
   if(factorial==0){
    return 1;
   }
   else{
    result=factorial*fact(factorial-1)
   }
   return result;
}
console.log(`The factorial of ${num} is ${fact(num)} \n`);


//--------------------------------------------------------------------------------


// Program to convert from Celsius to Fahrenheit
function converttemp(degrees){
   let result=((degrees*9/5)+32);
   let result1=((degrees-32)*5/9) 
   console.log(`${degrees}%Celsius is ${result}%Fahrenheit \n${degrees }%Fahrenheit is ${result1}%celsius`);
   //console.log(`${degrees }%Fahrenheit is ${result1}%celsius`);
}
converttemp(40)



