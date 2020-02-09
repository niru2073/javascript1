var markHeight,johnHeight,massMark,massJohn;
markHeight=6;
johnHeight=5.9;
massJohn=60;
massMark=50;

johnBMI=massJohn/(johnHeight*johnHeight);
console.log(BMI);
markBMI=massMark/(markHeight*markHeight);
console.log(BMI);
var markHigherBMI=markBMI>johnBMI;
console.log(markHigherBMi);

// ==:check the values of variables
//===:check the values and data types
var x=20;
var y='20';
if(x == y)
{
    console.log('both are same');

} else{

    console.log('both are not same');

}
//===
if(x===y){

    console.log('both are same');

} else{

    console.log('both are not same');

}

//ternary operator
// var firstName  'john';
// var age=20;
//  age >= 22 ? console.log(firstName+'drinks beer') : console.log(firstName + 'drinks juice');

//  var drink = age >= 18 ? 'beer' : 'juice';//ternary code
// console.log(drink);

//  //switch statement
//  var job = 'instructor';
//  switch(job){
//      case 'teacher':if(instructor===teacher)
//      case 'instructor':
//          console.log(firstName+'teaches kids how yo code');
//          break;
//     case 'driver':
//          console.log(firstName+'drives an uber');
//          break;
//     case 'designer':
//         console.log(firstName+ 'designs beautiful website');
//          break;
//     default:
//          console.log(firstName+'does something else');

//  }

//  //falsy values: undefined, null, 0,' ',NaN
//  //truthy values: not falsy values

//  var height;
//  height=NaN;
//  if(height){
//      console.log("defined");

//  }else {
//      console.log("not defined");
     
//  }

