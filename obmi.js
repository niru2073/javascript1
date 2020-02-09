// var john ={
//     name:'john smith',
//     mass:50,
//     height:5.5,
// calcBmi:function(){
//     this.bmi=this.mass/(this.height*this.height);
//     return this.bmi;
// }
// }
// var mark={
//     name:'mark wade',
//     mass:55,
//     height:6,
//     calcBmi:function(){
//         this.bmi=this.mass/(this.height*this.height);
//         return this.bmi;
// }
// }
// if(john.calcBmi()>mark.calcBmi()){
//     console.log(john.name+'has a higher bmi of'+john.bmi);
//     else if(mark.bmi>john.bmi){
//         console.log(mark.name+'has a higher bmi of'+mark.bmi);

        
//     }
//     else{
//         console.log(mark.bmi+'is equal to'+john.bmi);
        
//     }
    
//}

//for loop
// var john=['john','smith',1990];
// for(var i=0;i<john.length;i++){
//     console.log(john[i]);
    
// }

// //while loop
// var i=0;
// while(i<john.length){
//     console.log(john[i]);
//     i++;
    
// }

//continue and break statements
 //var john=['john','smit',1990,'designer',false,'blue'];
// for(var i=0;i<john.length;i++){
//     if(typeof john[i] !== 'string'){
// //         continue;
// break;

//     }
//     console.log(john[i]);
//}

//looping backwards
// for(var i=john.length-1;i>=0;i--){
//     console.log(john[i]);
    
// }

//tip calculator
var john={
    bill:[124,48,268,180,42],
    tipCal: function() {
        
        for(var i=0;i<this.bill.length;i++){
            if(this.bill[i] <50) {
                this.tip=.2*bill[i];
            }
            else if(this.bill[i]>=50 && this.bill[i]<200){
                this.tip=.15*bill[i];
            }else(this.bill[i]>200){
                this.tip=.1*bill[i];
            }

    }
}

   return tip*bill;
}
 var tip=[this.tip(bill[0]),
          this.tip(bill[1]),
          this.tip(bill[2]),
          this.tip(bill[3]),
          this.tip(bill[4])];
 var totalValue=[bill[0]+tip[0],
                 bill[1]+tip[1],
                 bill[2]+tip[2],
                 bill[3]+tip[3],
                 bill[4]+tip[4]];
 console.log(tip,totalValue);
 