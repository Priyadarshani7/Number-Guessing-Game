let answer =Math.floor(Math.random() * 10 + 1);
console.log(answer);
let guess=0;

document.getElementById("submit").onclick=function(){
  let x=document.getElementById("guessfield").value;
guess+=1;
console.log(guess);
  if(x==answer){
    document.getElementById("sen").innerHTML=("correct guess" );
  }else if(x<answer){
    document.getElementById("sen").innerHTML=("small" );
  }else {
    document.getElementById("sen").innerHTML=("large" );
  }
}