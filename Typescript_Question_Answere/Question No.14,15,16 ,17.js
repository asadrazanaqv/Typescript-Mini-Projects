"use strict";
//Question No ;14 
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["ALi", "Abbas", "Gohan"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}, You are invited to dinner at my home`);
}
//Question No ;15
//part 01
console.log(`${guestList.pop()} can't make it to dinner.`);
//part 02
guestList.push("GOHO");
//part 03
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}, You are invited to dinner at my home`);
}
//Question No ; 16
let additionalGuest = ["uzair", "Vegeta", "kakarot"];
console.log("Wait!!! I found a bigger dinnner table, So now more space is available.");
//part 01
guestList.unshift(additionalGuest[0]);
//part 02
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, additionalGuest[1]);
//part 03
guestList.push(additionalGuest[2]);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}, You are invited to dinner at my home`);
}
;
//Question No ; 17
//Part01
let messageAll = `Sorry To All ! My new dinner table won’t arrive in time for the dinner & I have space for only two guests.`;
console.log(messageAll);
//Part02
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    let apologyMessage = `Sorry ${removeGuest}, You are not invited because the bigger dinner table won't arrange on time.`;
    console.log(apologyMessage);
}
//Part03
for (let i = 0; i < guestList.length; i++) {
    console.log(`HI ${guestList[i]}, You are still invited to dinner`);
}
;
//Part04
guestList.pop();
guestList.pop();
console.log(guestList);
