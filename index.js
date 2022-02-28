// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards, event){
    let arr = [];
    for (let i = 0; i < cards.length; i++){
         arr.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
        }
        return arr;
}


let integer = 10;

function countDown(integer){
    while (integer >= 0){
        console.log(integer--);
    }
}