//declaration of a variable
//var is a keyword which helps to define a variable and 'a' is a variable name
//primitive data types
//undefined:data type of a variable that does not have a value yet.
var a;
console.log(a);
//null:means non-existent
var b=null;
console.log(b);

//number data types
num=10;
//string data types
var name="nodeJS";
//boolean data types
var bool=true;


//JS is a strictless language.It means that we do not have to define the data utype of the variable
var num=10;
num="node";

//naming of variables
//var 3years=3; //variable can't start with the number
//var mark/bob="hello"; //variable can't have any special symbols while naming them.

var _year=3;
console.log(_year); //this is correct.

//camel casing: whole variable will be in a lowercase but the first character of a word willbe uppercase
var markBob="hello";

//type coercion: changing the data types of a variable 
var num=10;
num=true;

//example
var firstName = 'Ram';
var age = 29;
console.log(firstName +' '+ age);

//variable mutation
var age=20;
console.log(age);
age='twenty';
console.log(age);
// operators
]var year,yearJohn,yearMark;
now=2018;
ageJohn=28;
ageMark=29;
//math operator
yearJohn=now-ageJohn;
yearMark=now-ageMark;
//logical operator
var johnOlder=ageJohn<ageMark;
//type of operator
console.log(typeof johnOlder);
console.log(typeof ageMark);
console.log(typeof 'mark is older than john');
var x;
console.log(typeof x);
//groupig
var ageJohn=now-yearJohn;
var ageMark=35;
var average=(ageJohn-ageMark)/2;
console.log(average);

//multiple assignments

var x,y;
x=y=(3+5)*4-6;
console.log(x,y);

//more operators
x*=2;
console.log(x);
x+=10;
console.log(x);
x++;    


