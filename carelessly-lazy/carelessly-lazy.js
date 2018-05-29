module.exports = lazyGuy;

function lazyGuy(answer){
    this.answer = answer;
}

lazyGuy.prototype.hey=function(response){
    response1 = response.toUpperCase();
    if(response===''){
        return 'Fine. Be that way!';
    }

    if(response==response1){
        return "Whoa, chill out!";
    }

    if(response.endsWith('?')){
        return 'Sure.';
    }

    if(response==='' || response==='   '){
        return 'Fine. Be that way!';
    }

else{
    return 'Whatever.';
}

}