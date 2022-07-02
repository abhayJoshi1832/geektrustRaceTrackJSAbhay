//Add your tests here

const processInput = require('./trackOperations');
const { convertToMins } = require('./trackOperations/book.methods');
const bookMethods = require('./trackOperations/book.methods');
const jsondb = require('./trackOperations/constants.json');
const db = JSON.parse(jsondb);

console.log('process input during testing: ', processInput);

const bookingData = [
    [
      { start: 60, end: 240, vehiclenum: 'M40' },
      { start: 240, end: 420, vehiclenum: 'XY22' }
    ],
    [ null, { start: 120, end: 300, vehiclenum: 'O34' } ],
    [ { start: 0, end: 180, vehiclenum: 'XY4' }, null ]
  ];


test('process inputs test success bookings', () =>{
    const logSpy = jest.spyOn(console,'log');

    processInput.book(['SUV', 'M40', '14:00']);
    //expect(logSpy).toHaveBeenCalledWith('SUCCESS');

    processInput.book(['SUV', 'O34', '15:00']);
    //expect(logSpy).toHaveBeenCalledWith('SUCCESS');

    processInput.book(['SUV', 'XY4', '13:00']);
   // expect(logSpy).toHaveBeenCalledWith('SUCCESS');

    processInput.book(['SUV', 'XY22', '17:00']);
    expect(logSpy).toHaveBeenCalledWith('SUCCESS');

});

test('revenue test', () =>{
    console.log = jest.fn();    
    processInput.revenue([]);
    expect(console.log.mock.calls[0][0]).toBe(1800);    
    expect(console.log.mock.calls[0][1]).toBe(900);
    //expect(logSpy).toHaveBeenCalledWith('1800 900')
});

test('find total test', () =>{   

    const rate = db.regularCost['SUV']

    expect(bookMethods.findTotal(bookingData.slice(0,2),rate)).toBe(1800);
});

test('convert to minutes', () =>{
    expect(convertToMins("14:00")).toBe(60);    
    expect(convertToMins("13:00")).toBe(0);
});

test('check and add: ', () =>{

    expect(bookMethods.checkNadd(bookingData,"M660",120)).toBe(false);
    expect(bookMethods.checkNadd(bookingData,"M661",240)).toBe(true);
});

test('add time', () =>{

    expect(processInput.additional(['M40','16:10'])).toBe(undefined);
    //expect(console.log.mock.calls[0][0]).toBe('RACETRACK FULL');
})