const ArrNumber = [1,3,44,66,78];

// const maxFunction=(arr)=>{
//       return arr.reduce(function(pre,cur){
//             return pre>cur?pre:cur
//       })
// }
// console.log(maxFunction(ArrNumber));

// const New = Math.min(...ArrNumber);
// console.log(New);

const New = Math.max.apply(null,ArrNumber.map(ArrNumber=>ArrNumber));
console.log(New);