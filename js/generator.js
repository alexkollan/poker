let deck = [101,201,301,401,501,601,701,801,901,1001,1101,1201,1301,
    102,202,302,402,502,602,702,802,902,1002,1102,1202,1302,
    103,203,303,403,503,603,703,803,903,1003,1103,1203,1303,
    104,204,304,404,504,604,704,804,904,1004,1104,1204,1304];

let npcCards = [];
let tableCards = [];
let playerCards = [];
let usedCards = [];
let nHand, fHand, pHand = [];

const generate= {
    card: ()=>{
        let cardCode;
    
        do{
            
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
    },

    hand: (who, howMany)=>{
        let hand = [];
        for (let i = 1; i <= howMany; i++) {
            let nCard;
            let tCard;
            let pCard;
            switch (who) {
                case 'n':
                    nCard = generate.card();
                    hand.push(nCard);
                    $('.npc-card-container').append('<img id="ncard'+i+'1" class="card" src="resources/cards/'+nCard+'.png" alt="card"/>');
                    break;
                case 't':
                    tCard = generate.card();
                    hand.push(tCard);
                    $('.table-container').append('<img id="tcard'+i+'1" class="card" src="resources/cards/'+tCard+'.png" alt="card"/>');
                    break;
                case 'p':
                    pCard = generate.card();
                    hand.push(pCard);
                    $('.player-card-container').append('<img id="pcard'+i+'1" class="card" src="resources/cards/'+pCard+'.png" alt="card"/>');
                    break;
                default:
                    nCard = generate.card();
                    npcCards.push(nCard);
                    tCard = generate.card();
                    tableCards.push(tCard);
                    pCard = generate.card();
                    playerCards.push(pCard);
                    $('.npc-card-container').append('<img id="ncard'+i+'1" class="card" src="resources/cards/'+nCard+'.png" alt="card"/>');
                    $('.table-container').append('<img id="tcard'+i+'1" class="card" src="resources/cards/'+tCard+'.png" alt="card"/>');
                    $('.player-card-container').append('<img id="pcard'+i+'1" class="card" src="resources/cards/'+pCard+'.png" alt="card"/>');
                    break;
            }
        }
    }
}

function generateCard(who, howMany){

}

function generateHand(who, howMany){
    

}