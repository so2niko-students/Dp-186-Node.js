'use strict';
let list = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill;Alfred:Tornbull";
const meetingSort = (list) =>{
    const res = list.split(';');
    res.forEach((item,index)=>{
         const temp = item.toUpperCase().split(':');
         res[index] = '(' + temp.reverse().join(', ');
    });
    return res.sort().join(') ').concat(')');
}
console.log(meetingSort(list));