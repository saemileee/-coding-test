function solution(name, yearning, photo) {
    const countMap = name.reduce((acc,name,i)=>{
        return {...acc, [name]:yearning[i]};
    },{});
    const answer = photo.map((arr)=>arr.reduce((acc,name)=>acc+countMap[name]||acc,0));
    return answer;
}