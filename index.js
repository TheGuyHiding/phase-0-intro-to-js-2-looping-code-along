// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards){
    for (let i = 0; i < cards.length; i++){
        console.log(`Thank you, ${cards[i]}, for the wonderful suprise gifts!`);
    }

    return cards;
}

writeCards(cards);

let integer = 10;

function countDown(integer){
    while (integer >= 0){
        console.log(integer--);
    }
}