"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", "Pakistan");
describe_city("Paris");
describe_city("New York", "USA");
