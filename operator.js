// =,*,-
//num=num+1 
//num++
//++num

let num1=10;
let num2=11;

// const nuMequ = num1>num2;
// const nuMequ = num1>=num2;
// const nuMequ = num1<num2;
// console.log(nuMequ);



// let age = 18;
// const AgeType = age > 10 ? true : false;
// console.log(AgeType);

// let Name = 100;
// const NameNew = Name > 110 ? 'correct' : 'wrong';
// console.log(NameNew);

// || or
// && and
// ! not 
// ?? null coalescing 

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// let HaveName=true;
// let NoName = false;
// const BothName = HaveName || NoName;
// console.log(BothName);

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// let car = 'name';
// let HasCar =true;
// const CarIs = car >= 'name' && HasCar;
// console.log(CarIs);

// let ISsunday = true;
// const NotSunday = !ISsunday;
// console.log(NotSunday);

// let a = false;
// //const Marks = a ?? false;
// const Marks = (a !== false && a !== undefined) ? a : false;
// console.log(Marks);

// let NewCol ;
// let OldCol = 'blue';

// const Default = NewCol || OldCol;
// console.log(Default);

// let Ihave = 110.89;
// let Price = 230.67;

// const Buy = Ihave >= Price ;
// if(Buy){
//       console.log('yes gaththa yakoooo...');
// }else{
//       console.log('ganan wadi yakoooo...');
// }

let Hour = 1;

if(Hour >= 6 && Hour <= 10){
      console.log('kapan yakoo..')
}else if(Hour >= 11 && Hour <= 13){
      console.log("Payakin kapan dn..")
} else{
      console.log("kapan hetaa..")
}