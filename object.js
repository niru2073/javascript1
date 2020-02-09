// var john:{firstName='John',
// lastName:'Smith',
// DOB:1990,
// family:['jane','mark','bob','emily',
// job:'teacher',
// isMarriedd:false};

// console.log(john.firstName);
// console.log(john[lastName]);
// var x='DOB';
// console.log(john[x]);


//new object syntax
// var jane = new Object();
// jane.firstName = 'jane';
// jane.lastName = 'smith';
// jane.dob = 1990;
// console.log(jane);



var john={
    firstName:'john',
    lastName:'smith',
    dob:1990,
    family:['jane','mark','bob','emily'],
    job:'teacher',
    isMarriedd:false,
    calcAge:function(){
    this.age = 2018-this.dob;
}
};
console.log(john);
