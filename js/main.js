const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const suits = ['spades', 'hearts', 'clubs', 'diamonds'];

let checker = true;


// console.log(value)  


function compare(){

}

$("#reroll").click(() => {
    let times = 0;
    checker = true;
    // while(checker){
        $(".npc-card-container,.table-container,.player-card-container").empty();
        deck = [101,201,301,401,501,601,701,801,901,1001,1101,1201,1301,
            102,202,302,402,502,602,702,802,902,1002,1102,1202,1302,
            103,203,303,403,503,603,703,803,903,1003,1103,1203,1303,
            104,204,304,404,504,604,704,804,904,1004,1104,1204,1304];
        npcCards = [];
        tableCards = [];
        playerCards = [];
        usedCards = [];
        generate.hand('a',5);
        times++;
        if(check.royalFlush(check.sort(playerCards))>0){
            console.log(`Draw: ${times}`)
            checker = false;
            // break;
        }  
        let pcards = check.sort(playerCards)
        let pairingPCards = check.pairs(pcards)
        console.log('1:', check.onePair(pairingPCards))
        console.log('2:', check.twoPairs(pairingPCards))
        console.log('3:', check.threePairs(pairingPCards))
        console.log('23:', check.fullHouse(pairingPCards))
        console.log('4:', check.full(pairingPCards))
        // console.log(check.royalFlush(check.sort(playerCards)))
        // if(check.royalFlush(check.sort(tableCards))){
        //     console.log('ROYAL FLUSH!!!!!!!!!!!!!!!')
        // } 
    // }

});
