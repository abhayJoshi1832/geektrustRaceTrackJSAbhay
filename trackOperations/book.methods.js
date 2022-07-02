const jsondb = require('./constants.json');
const db = JSON.parse(jsondb);

const minInHour = 60;
const startTime = 13;

const convertToMins = (time) =>{
    let temp = time.split(':');
    return (minInHour*(Number(temp[0])-startTime)+Number(temp[1]));
}

const checkTrack = (track,slot,minutes) => {
    if( (!track[0]) && (!track[1])) return true
    if (slot == 0 && (!track[0]) && minutes+db.minBookingTime <= track[1].start)return true
    if(slot == 1 && (!track[1]) && minutes >= track[0].end) return true
    return false

};

const checkNadd = (data,num,minutes) =>{
    const slot = (minutes <= minInHour? 0: 1);
    for (let track of data)
    {   
        if (checkTrack(track,slot,minutes))
        {
            track[slot] = {start: minutes, end: minutes+db.minBookingTime, vehiclenum: num};
            return true
        }        
    }
    return false;
    
};

const addTimeHelper = (data,num,minutes) =>{
    for (let track of data)
    {
        if (track[1] && track[1].vehiclenum === num)
        {
            track[1].end = minutes;
            return true
        } 

        if (track[0] && track[0].vehiclenum === num)
        {
            if (track[1] == null || track[1].start >= minutes)
            {
                track[0].end = minutes;
                return true;
            }
            return false;
        }

    }
};

const findTotal = (data,rate) =>{
    let total = 0;
    //console.log('data: ', data, "rate: ", rate)    
    for (let track of data)
    {
        for(let slot of track){
            if (slot){
                total += rate*db.minBillableHours;
                let extra = slot.end-slot.start-minInHour*db.minBillableHours;
                //console.log('extra: ', extra)
                if (extra > db.minExtraTime) total += (1+Math.floor(extra/minInHour))*db.addCost;
            }
        }
    }
    //console.log(total);
    return total
}



module.exports = {convertToMins,checkNadd,addTimeHelper,findTotal}