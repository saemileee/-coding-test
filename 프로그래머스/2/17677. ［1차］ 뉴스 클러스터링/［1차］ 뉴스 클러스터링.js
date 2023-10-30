function solution(str1, str2) {        
    const arr1 = [];
    const arr2 = [];
    const regex = /^[a-z][a-z]$/;
    
    let arr1Char = '';
    for(let i = 0; i<str1.length; i++){
        const char = str1[i].toLowerCase();
        arr1Char += char;
        if(arr1Char.length===2){
            if(regex.test(arr1Char)){
                arr1.push(arr1Char);
            }
            arr1Char = arr1Char[1];
        }
    }
    
    let arr2Char = '';
    for(let i = 0; i<str2.length; i++){
        const char = str2[i].toLowerCase();
        arr2Char += char;
        if(arr2Char.length===2){
            if(regex.test(arr2Char)){
                arr2.push(arr2Char);
            }
            arr2Char = arr2Char[1];
        }
    }
    
   


   const union = (arr1, arr2) => {
        let mArr = [];
        let lIdx = 0;
        let rIdx = 0;
        while(lIdx < arr1.length && rIdx < arr2.length){
            if(arr1[lIdx] < arr2[rIdx]){
                mArr.push(arr1[lIdx]);
                lIdx++;
            } else if (arr1[lIdx] === arr2[rIdx]){
                mArr.push(arr1[lIdx]);
                lIdx++;
                rIdx++;
            } else {
                mArr.push(arr2[rIdx]);
                rIdx++;
            }
        }
        for( lIdx ; lIdx < arr1.length ; lIdx++ ){
            mArr.push(arr1[lIdx]);
        }
        for( rIdx ; rIdx < arr2.length ; rIdx++ ){
            mArr.push(arr2[rIdx]);
        }
        return mArr;
    }
    const intersection = (arr1, arr2) => {
        let iArr = [];
        let lIdx = 0;
        let rIdx = 0;
        while(lIdx < arr1.length && rIdx < arr2.length){
            if(arr1[lIdx] < arr2[rIdx]){
                lIdx++;
            } else if (arr1[lIdx] > arr2[rIdx]){
                rIdx++;
            } else {
                iArr.push(arr1[lIdx]);
                lIdx++;
                rIdx++;
            }
        }
        return iArr;
    }
    
    arr1.sort();
    arr2.sort();
    
    if(arr1.length === 0 && arr2.length === 0) return 65536;

    const unionArr = union(arr1, arr2);
    const intersectionArr = intersection(arr1, arr2);
    return parseInt((intersectionArr.length/unionArr.length)*65536);    
}