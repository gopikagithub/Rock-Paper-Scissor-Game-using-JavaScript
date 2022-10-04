const player=document.querySelector(".playerText");
const computer=document.querySelector(".computerText");
const result=document.querySelector(".resultText");
const button=document.querySelectorAll(".button");

let playerValue;
let computerValue;
let resultValue;

button.forEach((button)=>{ button.addEventListener("click",()=>{
    playerValue=button.textContent;
    computerguess();
    player.textContent=`Player:${playerValue}`;
    computer.textContent=`Computer:${computerValue}`
    result.textContent=winner();
})
});


const computerguess=()=>{
    let random=Math.floor(Math.random()*3)+1;
    switch(random){
        case 1:
            computerValue="Rock";
            break;
        case 2:
            computerValue="Paper";
            break;
        case 3:
          computerValue="Scissors";  
          break;
    }
    
}


const winner=()=>{
    if(playerValue==computerValue){
        return`Draw!!!`;
        
    } else if(computerValue=="Rock"){
        return(playerValue=="Paper")?`You Won`:`You Loose`;
    } else if(computerValue=="Paper"){
        return(playerValue=="Scissors")?`You Won`:`You Loose`;
    } else if(computerValue=="Scissors"){
        return(playerValue=="Rock")?`You Won`:`You Loose`;
    }
}
