function solution(id_list, report, k) {
    var answer = [];
    
    const idObj = {}
    id_list.forEach((id)=>(idObj[id]={reportUsers:[], reportedCount:0,mailCount:0}));
    
    const freezedIds = [];
    
    for(let i = 0; i<report.length; i++){
        const [user, reportId] = report[i].split(' ');
        if(!idObj[user].reportUsers.includes(reportId)){
            idObj[user].reportUsers.push(reportId);
            idObj[reportId].reportedCount += 1;
            if(idObj[reportId].reportedCount===k){
                freezedIds.push(reportId);
            }
        }
    }


    const reportArr = Object.entries(idObj);

    for(let i = 0; i<reportArr.length;i++){
        const [id, {reportUsers}] = reportArr[i];
        reportUsers.forEach((reportUser)=>{
            if(freezedIds.includes(reportUser)){
                reportArr[i][1].mailCount += 1;
            }
        })
    }
    
    answer = reportArr.map((report)=>report[1].mailCount);
    return answer;
}