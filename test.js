const { sum, usdToYen } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});



test("one euro should be 1.2 dollars", function(){
    const {euroToUsd} = require('./app.js')
 
     expect(euroToUsd(3.5)).toBe(4.2);
})

test("one dolar should be 127.9 yens", function(){
    const {usdToYen} = require('./app.js')
 
    
     expect(usdToYen(10)).toBe(1279);
})

test("one yen should be 0.8 british pund", function(){
    const {yenToPound} = require('./app.js')
 
  

     expect(yenToPound(20)).toBe(16);
})




