
const sum = (a,b) => {
    return a + b
}

function euroToUsd(euro){
    if(euro<0){
        console.warn("no negative numbers")
    }
    return euro*1.2
}

function usdToYen(usd){
    if(usd<0){
        console.warn("no negative numbers")
    }
    return usd*149.58
}

function yenToPound(yen){
    if(yen<0){
        console.warn("no negative numbers")
    }
    return yen*0.0055
}

module.exports ={euroToUsd, usdToYen, yenToPound ,sum};
console.log(euroToUsd(3))