export function sum(...nums){
    if(nums.length == 0){
        return {
            status : 'error',
            description : 'Has not arguments'
        };
    }
    return nums.reduce((p, el) =>{
        if(typeof el == 'number' && !isNaN(el)){
            return p + el;
        }else{
            return p;
        }
    }, 0);
}