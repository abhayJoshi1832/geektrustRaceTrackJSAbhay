const bookmethods = require('./book.methods');
const jsondb = require('./constants.json');
const db = JSON.parse(jsondb);

class Raceday
{
    constructor()
    {
        this.racetrack = {
            'CAR':new Array(db.carSize).fill(0).map(() =>[null, null]), 
            'BIKE': new Array(db.bikeSize).fill(0).map(() => [null,null]), 
            'SUV': new Array(db.suvSize).fill(0).map(() => [null,null])
        };
        this.vehicleData= {};
    }
    
    book = (inputArr) =>
    
    {   let [vehicle, num, time] = inputArr; 
        const minutes = bookmethods.convertToMins(time);
        if (minutes < db.minEntry || minutes > db.maxEntry)
        {
            console.log('INVALID_ENTRY_TIME ');
            return;
        }

        if (bookmethods.checkNadd(this.racetrack[vehicle],num,minutes))
        {
            this.vehicleData[num] = vehicle;
            console.log('SUCCESS');
            return;
        }
        console.log('RACETRACK_FULL');
        return;
    }

    additional = (inputArr) =>{

        let [num,exitTime] = inputArr; 
        //console.log('add time called with ', num,exitTime)
        const minutes = bookmethods.convertToMins(exitTime);
        if(minutes> db.maxExit)
        {
            console.log('INVALID_EXIT_TIME ');
            return
        }
        let data = this.racetrack[this.vehicleData[num]]
        //console.log(minutes,data)

        if (bookmethods.addTimeHelper(data,num,minutes))
        {
            console.log('SUCCESS')
            return
        }
        console.log('RACETRACK_FULL')

    }

    revenue = (inputArr) =>
    {

        let regular = 0;
        let vip = 0;

        for (let vehicle in db.regularTracks){
            regular += bookmethods.findTotal(this.racetrack[vehicle].slice(0,db.regularTracks[vehicle]),db.regularCost[vehicle]);
        }
        for (let vehicle in db.vipTracks){
            vip += bookmethods.findTotal(this.racetrack[vehicle].slice(db.regularTracks[vehicle]),db.vipCost[vehicle]);
        }         
        console.log(regular, vip)
    }

}
module.exports = new Raceday();