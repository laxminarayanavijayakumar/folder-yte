const{test , expect} = require('@playwright/test')

test('first test' , async function({page}){

    expect(12).toBe(12);
})

test.skip('second test' , async function({page}) {

    expect(100).toBe(101);
})

test('third test' , async function({page}) {

    expect(2.0).toBe(2.0);
})

test('fourth test' , async function({page}) {

    expect("laxminarayana vijayakumar").toContain("laxmi");
    expect(true).toBeTruthy();
})

test('fifth test' , async function({page}) {

    expect(false).toBeFalsy();
})

test('sixth test' , async function({page}) {

    expect("laxminarayana vijayakumar".includes("vijayakumar")).toBeTruthy();
})