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

it('Should expect some values', () => {
    expect(12).toNotBe(11);
    expect({name: 'Rimon'}).toEqual({name: 'Rimon'});
    expect([2,3,4]).toInclude(2);
    expect([2,3,4]).toExclude(1);

    expect({
        name: 'Rimon', age: 25, location: 'BD'
    }).toInclude({
        age: 25
    });

    expect({
        name: 'Rimon',
        age: 25,
        location: 'BD'
    }).toExclude({
        age: 23
    });
});

it('Should verify first and last names are set', () => {
    var user = {age: 25, location: 'BD'};
    var res = utils.setName(user, 'Rimon Mostafiz');

    expect(user).toEqual(res);

    expect(res)
        .toInclude({
            firstName: 'Rimon'
        }).toInclude({
            lastName: 'Mostafiz'
        });
}) ;