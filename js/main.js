const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const suits = ['spades', 'hearts', 'clubs', 'diamonds'];

let deck = [101,201,301,401,501,601,701,801,901,1001,1101,1201,1301,
            102,202,302,402,502,602,702,802,902,1002,1102,1202,1302,
            103,203,303,403,503,603,703,803,903,1003,1103,1203,1303,
            104,204,304,404,504,604,704,804,904,1004,1104,1204,1304];

let npcCards = [];
let tableCards = [];
let playerCards = [];
let usedCards = [];
// const cardElem = $(`#ncard`+i).attr("src", `resources/cards/${generateCard()}.png`);
let times=0;

let nHand, fHand, pHand = [];

function generateCard(){
    let cardCode;
    
    do{
        times++;
        let result = [];
        let randRank = Math.floor(Math.random() * 13) + 1;
        result.push(randRank);
        let randSuit = Math.floor(Math.random() * 4) + 1;
        result.push(randSuit);
        cardCode = parseInt(randRank + '0' + randSuit);
        if(deck.includes(cardCode)){
            deck.splice(deck.indexOf(cardCode),1)
            usedCards.push(cardCode);
            return cardCode;
        } 
    }while(!deck.includes(cardCode))
}

function generateHand(who, howMany){
    
    let hand = [];

    // let html = <img id="ncard1" class="card" src="resources/cards/cardBack.png" alt="card"/>;
    for (let i = 1; i <= howMany; i++) {
        let nCard;
        let tCard;
        let pCard;
        switch (who) {
            case 'n':
                nCard = generateCard();
                npcCards.push(nCard);
                $('.npc-card-container').append('<img id="ncard'+i+'1" class="card" src="resources/cards/'+nCard+'.png" alt="card"/>');
                break;
            case 't':
                tCard = generateCard();
                tableCards.push(tCard);
                $('.table-container').append('<img id="tcard'+i+'1" class="card" src="resources/cards/'+tCard+'.png" alt="card"/>');
                break;
            case 'p':
                pCard = generateCard();
                playerCards.push(pCard);
                $('.player-card-container').append('<img id="pcard'+i+'1" class="card" src="resources/cards/'+pCard+'.png" alt="card"/>');
                break;
            default:
                nCard = generateCard();
                npcCards.push(nCard);
                tCard = generateCard();
                tableCards.push(tCard);
                pCard = generateCard();
                playerCards.push(pCard);
                $('.npc-card-container').append('<img id="ncard'+i+'1" class="card" src="resources/cards/'+nCard+'.png" alt="card"/>');
                $('.table-container').append('<img id="tcard'+i+'1" class="card" src="resources/cards/'+tCard+'.png" alt="card"/>');
                $('.player-card-container').append('<img id="pcard'+i+'1" class="card" src="resources/cards/'+pCard+'.png" alt="card"/>');
                break;
        }
        // hand.push(randCard);
    }
    return hand;
}

const check = {
    high: {
        sort: (hand)=>{
            let onlyNumbers = hand.map(c=>Math.floor(c/100));
            let aceIndex = onlyNumbers.indexOf(1);
            if(aceIndex !==-1){
                onlyNumbers[aceIndex] = 14;
            }
            return onlyNumbers.sort((a,b)=>b-a);
        },
        compare: (pHand, nHand)=>{
            for (let i = 0; i <= 4; i++) {
                if (pHand[i]>nHand[i]) {
                    console.log('NPC High: ',nHand[i]);
                    console.log('Player High: ',pHand[i]);
                    console.log('Player Wins')
                    return;
                } else if(pHand[i]<nHand[i]) {
                    console.log('NPC High: ',nHand[i]);
                    console.log('Player High: ',pHand[i]);
                    console.log('Computer Wins')
                    return;
                }else{
                    console.log('NPC High: ',nHand[i]);
                    console.log('Player High: ',pHand[i]);
                    console.log('Tie! Checking next highest card...')
                }
                
            }
        }
    } 
}

$("#reroll").click(() => {
    $(".npc-card-container,.table-container,.player-card-container").empty();
    deck = [101,201,301,401,501,601,701,801,901,1001,1101,1201,1301,
        102,202,302,402,502,602,702,802,902,1002,1102,1202,1302,
        103,203,303,403,503,603,703,803,903,1003,1103,1203,1303,
        104,204,304,404,504,604,704,804,904,1004,1104,1204,1304];
    npcCards = [];
    tableCards = [];
    playerCards = [];
    usedCards = [];

    // console.log('>> Deck: ',deck)
    generateHand('a',5);
    check.high.compare(check.high.sort(playerCards),check.high.sort(npcCards));
    // console.log(times)
    // console.log('>> Deck after selection: ',deck);
    // console.log('>> All used cards from Deck: ',usedCards);
    // console.log('>> NPC Hand: ',npcCards);
    // console.log('>> Cards on Table: ',tableCards);
    // console.log('>> Player\'s Hand: ',playerCards);
});

// generateHand('a',5);
// console.log(times)
// console.log('>> Deck after selection: ',deck);
// console.log('>> All used cards from Deck: ',usedCards);
// console.log('>> NPC Hand: ',npcCards);
// console.log('>> Cards on Table: ',tableCards);
// console.log('>> Player\'s Hand: ',playerCards);
// check.high.compare(check.high.sort(playerCards),check.high.sort(npcCards));