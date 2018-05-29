module.exports = CokeSong;

function CokeSong(song){
    this.song = song;
}

CokeSong.prototype.verse= function(number){
  if(number==0){
      return 'No more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n';
  }

  if(number==1){
      return '1 can of coke in the box, 1 can of coke.\nTake it down and pass it around, no more cans of coke in the box.\n';
  }

  if(number==2){
      return '2 cans of coke in the box, 2 cans of coke.\nTake one down and pass it around, 1 can of coke in the box.\n';
  }

  if(number>1){
            return (number)+" cans of coke in the box, "+(number)+" cans of coke.\nTake one down and pass it around, "+(number-1)+" cans of coke in the box.\n";
  }
 
}

  CokeSong.prototype.sing = function(number,number2){
    number2=number;
    if(nnumber==undefined || number2==undefined){
        return (number)+" cans of coke in the box, "(number)+ "cans of coke.\nTake one down and pass it around, "(number-1)+ "cans of coke in the box.\n\n"(number)+ "cans of coke in the box, "(number)+ "cans of coke.\nTake one down and pass it around, "(number-1)+" can of coke in the box.\n\n1 can of coke in the box, "(number2)+" can of coke.\nTake it down and pass it around, no more cans of coke in the box.\n\nNo more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n";
    }
  }