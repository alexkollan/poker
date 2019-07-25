const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const suits = ['spades', 'hearts', 'clubs', 'diamonds'];




// console.log(value)  


function compare(){

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
        generate.hand('a',5);
        
        // if(check.royalFlush(check.sort(playerCards))){
        //     console.log('ROYAL FLUSH!!!!!!!!!!!!!!!')
        // }  
        if(check.royalFlush(check.sort(npcCards))){

            console.log('ROYAL FLUSH!!!!!!!!!!!!!!!')
        }  
        // if(check.royalFlush(check.sort(tableCards))){
        //     console.log('ROYAL FLUSH!!!!!!!!!!!!!!!')
        // }  
});
