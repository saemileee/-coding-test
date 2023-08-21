function solution(numbers) {
    numbers.sort((a,b)=>{
        const s1 = a+""+b+"";
        const s2 = b+""+a+"";
        return s2-s1
    })
    const answer = numbers.join('');
    return answer*1?answer:"0";
}