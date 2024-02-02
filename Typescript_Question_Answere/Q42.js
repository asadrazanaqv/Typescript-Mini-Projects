"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const magicians = ["David Copperfield", "Houdini", "Penn and Teller"];
function make_great(magicians) {
    const great_magicians = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const great_magicians = make_great(magicians);
show_magicians(great_magicians);
