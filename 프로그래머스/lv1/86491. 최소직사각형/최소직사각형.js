function solution(sizes) {
    const newSizes = sizes.map((size)=>size.sort((a,b)=>a-b))
    const wArr = newSizes.map((size)=>size[0]).sort((a,b)=>a-b)
    const hArr = newSizes.map((size)=>size[1]).sort((a,b)=>a-b)
    const answer = wArr.pop()*hArr.pop();
    return answer;
}