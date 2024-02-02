"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function car_info(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    for (const option of options) {
        const [key, value] = option.split(":");
        car[key] = value;
    }
    return car;
}
const car1 = car_info("Toyota", "Camry", "color:blue", "year:2022");
console.log(car1);
const car2 = car_info("Tesla", "Model 3", "color:red");
console.log(car2);
