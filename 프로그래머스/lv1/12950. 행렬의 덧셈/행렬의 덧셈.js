function solution(arr1, arr2) {
    let answer = []
    for(i=0;i<arr1.length;i++){
        let sums = [];
        for (j=0 ; j<arr1[0].length;j++){
            sums.push(arr1[i][j]+arr2[i][j]);
        }
        answer.push(sums);
    }
    return answer;
}