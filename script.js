let computerTurn = false;

const allCells = document.getElementsByClassName("cell");

let totalMoves=0;

let gameEnded=false;

const whoWOn= document.getElementById("whoWon");


function selectPlayerMove(id){
    if(totalMoves===9 || gameEnded==true){
        return;
    }
    const cell = document.getElementById(id);

    if (cell.innerHTML !== "X" && cell.innerHTML!=="O"){
        cell.classList.add("playerMove")
        cell.innerHTML="X";
        computerTurn = true;
        totalMoves+=1
        compTurn();
        checkWinning();
    }
    
}

function compTurn(){
    while(true){
        if(totalMoves===9 || gameEnded==true){
            return;
        }

        randomNumber = Math.random();
        randomNumber = Math.floor(randomNumber*10);
        if (randomNumber == 0){
            randomNumber+=1
        }
        const compCell = document.getElementById(randomNumber);
        if (compCell.innerHTML !== "X" && compCell.innerHTML!=="O"){
            compCell.classList.add("computerMove")
            compCell.innerHTML="O";
            computerTurn = false;
            totalMoves+=1
            break;
        }
    }
    
}

function checkWinning(){
    const winningCombs=[
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [7,5,3]];
        
        
        for (let i=0;i<winningCombs.length;i++)
        {   
            const iterIndexs=winningCombs[i];
            
            if ( (allCells[iterIndexs[0]-1].innerHTML===allCells[iterIndexs[1]-1].innerHTML) && (allCells[iterIndexs[1]-1].innerHTML===allCells[iterIndexs[2]-1].innerHTML) && allCells[iterIndexs[0]-1].innerHTML!="" ){
                if(allCells[iterIndexs[0]-1].innerHTML==="X"){
                    whoWOn.innerHTML="Player Won"; 
                    gameEnded=true;
                }
                else{
                    whoWOn.innerHTML="Computer Won";
                    gameEnded=true;
                }
                for (let j=0;j<3;j++){
                    allCells[iterIndexs[j]-1].classList.add("winningBoxes");
                }
                break;
            }
        }

}

function reset(){
    for (let i=0;i<allCells.length;i+=1){
        allCells[i].classList.remove("computerMove");
        allCells[i].classList.remove("playerMove");
        allCells[i].classList.remove("playerMove");
        allCells[i].innerHTML = "";
        
    }
    totalMoves = 0;
    whoWOn.innerHTML="";
    gameEnded=false;
}
