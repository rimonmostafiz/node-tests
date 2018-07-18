const expect = require('expect');
const utils = require('./utils.js');

it('Should add two numbers', () => {
    var res = utils.add(22, 33);
    expect(res).toBe(55).toBeA('number');
});

it('Should square a number', () => {
    var res = utils.square(4);
    expect(res).toBe(16).toBeA('number');
});