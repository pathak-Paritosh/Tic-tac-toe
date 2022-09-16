let msgDiv = document.getElementById("MessageDiv");

let msgPara = document.getElementById("msg");

function startGame(){
msgDiv.style.display = "none";

let ele=document.getElementsByClassName("box");

let sz = 9;

for(let i=0; i<sz; i++){
    ele[i].textContent = ' ';
}

let turn = 'X';

let winner = '';

const winningComb = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
]

function checkWin(){
    for(let i=0; i<winningComb.length; i++){
        let ceil1 = winningComb[i][0];
        let ceil2 = winningComb[i][1];
        let ceil3 = winningComb[i][2];
        if((ele[ceil1].textContent=='X') && (ele[ceil2].textContent=='X') && (ele[ceil3].textContent=='X'))   
        {
            winner = 'X';
            return true;
        }    
        else if((ele[ceil1].textContent=='0') && (ele[ceil2].textContent=='0') && (ele[ceil3].textContent=='0'))
        {
            winner = '0';
            return true;
        }
    }
}

function checkDraw(){
    let cnt = 0;
    for(let i=0;i<sz;i++){
        if(ele[i].textContent == 'X' || ele[i].textContent == '0'){
            cnt++;
        }
    }
    if(cnt == 9){
        DrawMsg();
    }
}

function winMsg(){
    msgDiv.style.display = "block";
    msgPara.textContent = winner + " won!";
    for(let i=0; i<sz; i++){
        ele[i].removeEventListener('click',mouseclickCheck);
    }
}

function DrawMsg(){
    msgDiv.style.display = "block";
    msgPara.textContent = "Game Drawn!";
    for(let i=0; i<sz; i++){
        ele[i].removeEventListener('click',mouseclickCheck);
    }
}

function mouseclickCheck(){
    let currEle=this;
    currEle.textContent = turn;
    turn = (turn === 'X') ? '0':'X';
    if(checkWin()){
        winMsg();
    }
    else if(checkDraw()){
        DrawMsg();
    }
}

function mouseoverCheck(){
    if(this.textContent!='X' && this.textContent!='0'){
        this.style.backgroundColor = "rgb(243, 236, 236)";
    }
}

function mouseoutCheck(){
        this.style.backgroundColor = "white";
}

for(let i=0;i<ele.length;i++){
    ele[i].addEventListener('mouseout',mouseoutCheck);
}

for(let i=0;i<ele.length;i++){
    ele[i].addEventListener('mouseover',mouseoverCheck)
}

for(let i=0; i<ele.length; i++){
    ele[i].addEventListener('click',mouseclickCheck, {once:true});
}
}
startGame();