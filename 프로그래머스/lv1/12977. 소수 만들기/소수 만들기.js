function solution(nums) {
    var answer = 0;
    for (let i = 0;i<nums.length-2;i++){
        for (let j = i+1;j<nums.length-1;j++){
            for (let k = j+1; k<nums.length;k++){
                const sum = nums[i]+nums[j]+nums[k];
                let multiples = [];
                for(let o = 1;o<=sum;o++){
                    sum%o?null:multiples.push(o);
                }
                2>=multiples.length?answer+=1:null;
            }
        }
    }
    
    return answer;
}