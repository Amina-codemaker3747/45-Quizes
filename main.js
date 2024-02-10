"use strict";
// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
console.log("\tQuestion 45:\n");
function make_car(manufacturer, model, ...options) {
    const car = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };
    for (const option of options) {
        for (const key in option) {
            car.options[key] = option[key];
        }
    }
    return car;
}
let car1 = make_car('Toyato', 'Corola', { color: 'blue' }, { sunroof: true });
let car2 = make_car('Royal-royce', 'Phantom', { color: 'Black' });
let car3 = make_car('Supra', 'Toyato GR', { color: 'blue' }, { sunroof: true });
console.log(car1, "\n", car2, "\n", car3);
