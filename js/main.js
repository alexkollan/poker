const ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const suits = ['spades', 'hearts', 'clubs', 'diamonds'];
const deck =    [101,201,301,401,501,601,701,801,901,1001,1101,1201,1301,
                 102,202,302,402,502,602,702,802,902,1002,1102,1202,1302,
                 103,203,303,403,503,603,703,803,903,1003,1103,1203,1303,
                 104,204,304,404,504,604,704,804,904,1004,1104,1204,1304];
let nHand, fHand, pHand = [];
function generateCard(){
    let result = [];
    let randRank = Math.floor(Math.random() * 13) + 1;
    result.push(randRank);
    let randSuit = Math.floor(Math.random() * 4) + 1;
    result.push(randSuit);
    let cardCode = randRank + '0' + randSuit;

    return cardCode;
}
console.log(generateCard())


function generateHand(who, howMany){
    let hand = [];
    let randCard;
    for (let i = 1; i <= howMany; i++) {
        if(who === 'a'){
            $(`#ncard`+i).attr("src", `resources/cards/${generateCard()}.png`);
            $(`#fcard`+i).attr("src", `resources/cards/${generateCard()}.png`);
            $(`#pcard`+i).attr("src", `resources/cards/${generateCard()}.png`);
        }else{
            $(`#${who}card`+i).attr("src", `resources/cards/${generateCard()}.png`);
        }
        hand.push(randCard);
    }
    return hand;
}

generateHand('a',5);

