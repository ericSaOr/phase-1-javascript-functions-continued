// Your code here

function saturdayFun (str = 'roller-skate'){
    
        return `This Saturday, I want to ${str}!`;
    }

saturdayFun('bathe my dog');

const mondayWork = function(str = "go to the office"){
    return `This Monday, I will ${str}.`
}

function wrapAdjective (flair = "*"){
    return function innerFunction (str = "special"){
        return `You are ${flair}${str}${flair}!`
    } 
    
    
    
       
}

