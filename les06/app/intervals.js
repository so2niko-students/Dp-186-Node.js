// function callbackFunc(name, c){
//     c.counter++;
//     console.log(`${c.counter} ${name}: ${parseInt((Date.now() % 100000) / 1000)}`);
//     if(c.counter > 9){
//         clearTimeout(timId);
//         clearInterval(intId);
//     }
// }
// const timId = setTimeout(callbackFunc, 1000, 'timeOut', {counter : 0});
// const intId = setInterval(callbackFunc, 30, 'interval', {counter : 0});

// console.log(timId, intId);

const arrows = ['←', '↑', '→', '↓'];
function spinner(ob){
    console.clear();
    ob.counter = (ob.counter + 1 ) % arrows.length;
    console.log(arrows[ob.counter]);
}

// setInterval(spinner, 500, {counter : 0});
function spinner2(ob){
    console.clear();
    console.log(`[${'@'.repeat(ob.counter)}${'-'.repeat(10 - ob.counter)}]`);
    ob.counter = (ob.counter + 1) % 11;
}

setInterval(spinner2, 500, {counter : 0});