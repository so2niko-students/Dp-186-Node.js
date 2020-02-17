const arr = [22,33,44];
// arr[33] = 'Тридцать три';
arr[-2] = -2;
arr[.23422] = 'Ahaah';
console.log(arr + ' ');
console.log(arr[1]);
console.log(arr[.23422]);
arr.forEach(el=>console.log(el));
console.clear()
// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);
    // i++;
// }
// for(let i = 2; i >= 0; i--){
//     console.log(arr[i]);
// }
let i = 3;
for(;--i;){
    console.log(arr[i]);
}
// for(a of arr){
//     console.log(a);
// }

let a = true;
while(a){
    //
    if(true){
        a = false;
    }
}