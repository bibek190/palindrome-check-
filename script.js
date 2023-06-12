const input = document.querySelector('.input-text');
const check = document.querySelector('.button');
const result = document.querySelector('.result');

const palindrome = function(){
    let getInput = input.value;
    let len = getInput.length;
    let firstWords = getInput.substring(0,(Math.floor(len/2))).toLowerCase();
    let lastWords = getInput.substring(len-Math.floor(len/2)).toLowerCase();

    let reverse = [...lastWords].reverse().join('');

    if(firstWords===reverse){
        result.innerHTML = `${getInput} is a palindrome`;
    }else{
        result.innerHTML = `${getInput} is  not a palindrome`;
        
    }
};

check.addEventListener('click',palindrome);
