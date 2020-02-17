function myLastIndexOf(sourse, subStr, index = sourse.length - 1) {
    let isFind = false;
    for (let i = index; i >= 0; i--) {
        if (sourse[i] === subStr[subStr.length - 1]) {
            let subStrLength = subStr.length - 2;
            let sourseOrder = 0;
            isFind = true;
            for (let j = subStrLength; j >= 0; j--) {
                sourseOrder++;
                if (subStr[j] !== sourse[i - sourseOrder]) { 
                    isFind = false;
                    break;
                }    
            }

            if(isFind){
                return i - subStr.length + 1;
            }   
        }
    }

    return -1;
}

// console.log(myLastIndexOf('qwerty', 'wer', '4'));
// console.log(myLastIndexOf('qwerty', 'asawer', '4'));
console.log(myLastIndexOf('qwertyffferty', 'wer'));