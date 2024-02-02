"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "L", message = "I love TypeScript") {
    console.log(`Size: ${size}, Message: ${message}`);
}
make_shirt();
make_shirt("M");
make_shirt("S", "Hello shirt");
