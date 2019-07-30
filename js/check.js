const check = {
    sort: (h)=>{
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //!!PUT LOGIC ON HOW TO SLICE IF 4 DIGITS OR 3 DIGITS!!
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            //converts aces to number 14 instead of 1
            //and sorts the cards to descending order
            console.log('1 ',h)
            let chared = h.map(String)
            console.log('2 ',chared)
            let convChared = chared.map(x => x.replace(/^101|^102|^103|^104/g,"140"+x[x.length-1]))
            // let sortedConvChared = convChared.sort((a,b)=>b-a)
            console.log('3 ',convChared)
            let cardSuits = convChared.map(x => parseInt(x.slice(-1)))
            
            console.log('4 ', cardSuits)
            let cardValues = (convChared.map(x =>  x.length ===4 ? parseInt(x.slice(0,2)) : parseInt(x.slice(0,1)))).sort((a,b)=>b-a)
            let cardCodes = (convChared.map(Number)).sort((a,b)=>b-a)
            
            console.log('5 ', cardValues)
            console.log('6 ', cardCodes)
            // return [, suits];
            // 14..03   80....3
            return [cardCodes, cardValues, cardSuits];
        },
    royalFlush: (h)=>{
        console.log(h)
        let isFlush = h[2].every((c)=>{
            return c==h[2][0]
        })
        let straightIds=[];
        for (let i = 1; i < h[1].length; i++) {
                straightIds.push(h[1][i-1]-h[1][i])
        }
        let isStraight = straightIds.every((c)=>{
            return c === 1;
        })
        let hasAce = (h[0][0]===1401)||(h[0][0]===1402)||(h[0][0]===1403)||(h[0][0]===1404)?true:false;
        console.log(h)
        console.log(isFlush)
        console.log(isStraight)
        console.log(hasAce)
        console.log((h[1].reduce((p,c)=> p+c)))
        if(hasAce && isStraight && isFlush && (h[1].reduce((p,c)=> p+c))===60){
            console.log('IT\'S A FLUSH ROYAL!!')
            return 10;
        }else if(isFlush&& isStraight){
            console.log('IT\'S A STRAIGHT FLUSH!!')
            return 9;
        }else if(isFlush){
            console.log('IT\'S A FLUSH!!')
            return 6;
        }else if(isStraight){
            console.log('IT\'S A STRAIGHT!!')
            return 5;
        }else{
            console.log('TPT TPT TPT')
            return 0;
        }

    },
    getOccurrence: (h, card)=>{
        //Makes a filtered array which contains the same cards if present.
        //The length of this array is how many times a specific card occured.
        return [card, h.filter((x) => (x === card)).length];
    },
    pairs: (h) =>{
        let dupes = [];
        for (let i = 0; i < h[1].length; i++) {
            let pair = check.getOccurrence(h[1],h[1][i]) ;
            if(pair[1]>1) dupes.push(pair)
        }
        let pairs = Array.from(new Set(dupes.map(JSON.stringify)), JSON.parse)
        console.log('These are the DUPES :', dupes)
        console.log('These are the PAIRS :', pairs)
        return pairs;
        

    },
    onePair: (p)=>{
        return p.length >= 1 ? [true,p[0][0]] : false;
    },
    twoPairs: (p)=>{
        return p.length >= 2 ? [true, p[0][0],p[1][0]] : false;
    },
    threePairs:(p)=>{
        for (let i = 0; i < p.length; i++) {
            if(p[i][1]===3){
                return [true, p[i][0]]
            }
        }
        return false;
    },
    full:(p)=>{
        for (let i = 0; i < p.length; i++) {
            if(p[i][1]===4){
                return [true, p[i][0]]
            }
        }
        return false;
    },
    fullHouse:(p)=>{
        if(p.length===2){
            for (let i = 0; i < p.length; i++) {
                if(p[i][1]===3){
                    return [true, p[i][0]]
                }
            }
        }
        
        return false;
    }

}