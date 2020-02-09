// calculateAge(1965);
// function calculateAge(year){
//     console.log(2016-year);
    
// }

// var retirement=function(year){
//     console.log(65-(2016-year));
    // }
// retirement(1990);/////

// retirement(1956);
// var retirement=function(year){
//     console.log(65-(2016-year));}



//hoistjing with variables
 //console.log(age);
//  var age=23;

// function foo(){
//     console.log(age);
//     var age=65;
//     console.log(age);
//     }
// foo();
// console.log(age);


//this keyword: 
// calculateAge(1965);
// function calculateAge(year){
//     console.log(2016-year);
//     console.log(this);
// }
    


var john={
    name:'john',
    dob:1990,
    calculateAge:function(){
        console.log(this);
        console.log(2016-this.dob);
        function innerFunction(){
            console.log(this);
            
        }
        
       innerFunction(); 
    }
}
john.calculateAge();