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
            // console.log('3 ',sortedConvChared)
            let suits = convChared.map(x => parseInt(x.slice(-1)))
            
            console.log('4 ', suits)
            let numbers = convChared.map(x => parseInt(x.slice(0,3)))
            console.log('5 ', numbers)
            // return [, suits];
        },
    royalFlush: (h)=>{
        console.log(h)
        let isFlush = h[1].every((c)=>{
            return c==h[1][0]
        })
        let straightIds=[];
        for (let i = 1; i < h[0].length; i++) {
                straightIds.push(Math.floor(h[0][i-1]/100)-Math.floor(h[0][i]/100))
        }
        let isStraight = straightIds.every((c)=>{
            return c === 1;
        })
        let hasAce = (h[0][0]===1401)||(h[0][0]===1402)||(h[0][0]===1403)||(h[0][0]===1404)?true:false;
        console.log(hasAce)
        if(hasAce && isStraight && isFlush ){
            console.log('IT\'S A FLUSH ROYAL!!')
            return 10;
        }
        // if(isFlush&& isStraight){
        //     console.log('IT\'S A STRAIGHT FLUSH!!')
        //     return 9;
        // }
        
    }
}