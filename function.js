// function Equ(num1,num2){
//       // return num1*num2;
//       const sum = num1+num2;
// }
// console.log(Equ(2,4));

// const add = function(a,b){
//       return a+b;
// };
//       console.log(add(4,5));


//  const Name = (a,b)=>{
//       return a+b;
//  }  
// console.log(Name("hashara"," sankalpa"));  
// console.log(Name(5,6)); 

function sayHello(){
      return function(){
            console.log("HELLO");
      };
}
const Hellonew = sayHello();
Hellonew();