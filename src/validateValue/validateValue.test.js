const validateValue = require('./validateValue')

test ("Валидация", () =>{
    expect(validateValue(50)).toBe(true);
})