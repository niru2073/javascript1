// var jteam,mteam,mateam,mascore,jscore,mscore,Avg;
// jscore=89+120+103;
// mscore=116+94+123;
// mascore=97,134,105;
// jteamAvg=jscore/3;
// mteamAvg=mscore/3;
// mateamAvg=mascore/3;
// if(jteamAvg>mteamAvg && jteamAvg>mateamAvg){
//     console.log(jteam+ 'jteam is winner');
// }else if(mteamAvg>jteamAvg && mteamAvg>mateamAvg) {
//     console.log(mteam+ 'mteam is winner');
// }else {
//     console.log(mateam+ 'mateam is winner');
// }

// //defining a function
// function funName(){
//     console.log('hello World');
// }
// funName(); //calling a function

// //example
// function calculateAge(birthYear){
//     //console.log(2018-birthYear); OR
// return 2018-birthYear;
// }
// var ageJohn=calculateAge(1990);
// console.log(ageJohn);

// //reusing the function
// function calculateAge(birthYear){
//     //console.log(2018-birthYear); OR
// return 2018-birthYear;
// }
// var ageJohn=calculateAge(1990);
// var ageMike=calculateAge(1948);
// var ageJane=calculateAge(1969);
// console.log(ageJohn,ageMike,ageJane);



// //another ex.
// function yearsUntilRetirement(year,firstName){
//     var age=calculateAge(year);
//     var retirement=65-age;
//     if (retirement>0){
//         console.log(firstName+ 'retires in'+retirement+'years');
        
// //     }
// //     else{
//         console.log(firstName+'is already retired');
        
//     }
// }
// yearsUntilRetirement(1990,'John');
// yearsUntilRetirement(1948,'Mike');
// yearsUntilRetirement(1960,'Jane');




// //function expression
// function var whatDoYouDo=function(job,firstName){
//     switch(job){
//         case 'teacher':
//             return firstName+'teaches kids how to code';
//             case 'driver':
//                 return firstName+'drives a car';
//                 case 'designer':
//                     return firstName+'designs beautiful websites';
//                     default:
//                         return firstName+'does something else';


//     }
// }

// console.log(whatDoYouDo('teacher','John'));
// console.log(whatDoYouDo('designer','Mike'));
// console.log(whatDoYouDo('retired','Jane'));

// //initialize an array
// var names=[10,11,12];//OR
// //var years=new Array(1990,1993,1995);
// console.log(names[2]);
// console.log(names.length);


// //mutate array data
// names[1]='Ben';
// names[names.length]='Mary';
//console.log(names);


//different data types
var john=['John','Smith','designer',false,1990];
// john.push('blue');
// john.unshift('Mr.');
// console.log(john);
// john.pop();
// john.pop();
// remove an element from the starting index only one at a time.
// john.shift();
// console.log(john);
// console.log(john.indexOf(23));//gives -1 i.e false value because it is not present in the array
//console.log(john.indexOf(1990));//2
var isDesigner=john.indexOf('designer') === -1 ? 'john is not a designer': 'john is not a designer';
console.log(isDesigner);

