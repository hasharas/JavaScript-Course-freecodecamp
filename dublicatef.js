
const NumbeArr = [1,4,3,5,3,];

const Duplicate = NumbeArr.filter((val,index,arr,)=>arr.indexOf(val)!== index);
console.log(Duplicate);

const NewArr = [13,5,3,5];

const Dup = NewArr.filter((val,index,arr)=>arr.indexOf(val)!==index);
console.log(Dup);
