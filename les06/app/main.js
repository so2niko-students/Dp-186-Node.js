function findClosestPoint(points) {
    let result = {
        difference: null,
        first: null,
        second: null
    };

    // for(let i = 0; i < points.length - 1; i++) {
    points.forEach((p, i, po)=>{
        for(let j = i + 1; j < po.length; j++) {
            let sum = Math.sqrt(Math.pow(po[j][0] - p[0], 2) + Math.pow(po[j][1] - p[1], 2) );
            if(sum < result.difference || result.difference === null){
                result.difference = sum;
                result.first = i;
                result.second = j;
            }
        }
    })
        
    // }
    // console.log(result);
    return [ points[result.first], points[result.second] ];
}

console.log(findClosestPoint([[2,2], [2,8], [5,5], [6,3], [6,7], [7,4], [7,8]])); // [6,3], [7,4]
