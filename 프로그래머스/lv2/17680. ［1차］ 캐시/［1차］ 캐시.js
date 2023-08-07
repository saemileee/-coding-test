function solution(cacheSize, cities) {
    var answer = 0;
    const cache = [];
    for(let i = 0; i<cities.length; i++){
        const city = cities[i].toLowerCase();
        const isCached = cache.includes(city);
        answer = isCached?answer+=1:answer+=5;
        
        if(isCached){
            cache.splice(cache.indexOf(city),1);
            cache.push(city)
        }else{
            if(cache.length === cacheSize){
                cache.shift();
            }
            if(cacheSize){cache.push(city)}
        }
    }
    return answer;
}