const btn = document.querySelectorAll('#btn');
const pontuation = document.getElementById('pontuation');
const title = document.getElementById('title');

let winRound = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

let playerOne = [];
let playerTwo = [];

let turn = 0;
let info = document.createElement('p');
pontuation.appendChild(info);

btn.forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        const value = parseInt(e.target.value);
        
        
        if (turn % 2 === 0) {
            e.target.innerText = 'X';
            playerOne.push(value);
            e.target.disabled = true;
            
        } else {
            e.target.innerText = 'O';
            playerTwo.push(value);
            e.target.disabled = true;
            
        }
        

        function checkWin(player) {
            for (let i = 0; i < winRound.length; i++) {
                let winCondition = winRound[i];
                if (winCondition.every(val => player.includes(val))) {
                    return true;
                }
            }
            return false;
        }

        if (checkWin(playerOne)) {
            //console.log('Player One ganhou!');
            info.innerText = 'Player X ganhou!'
            btnRe();
        } else if (checkWin(playerTwo)) {
            //console.log('Player Two ganhou!');
            info.innerText = 'Player O ganhou!'
            btnRe();
        }



        turn++;
    });
});

function dslb(){
    btn.forEach(function(e){
        e.disabled = true;
})
}

function btnRe(){
    let pi = document.createElement('button');     
    let br = document.createElement('br'); 
    pi.setAttribute('id', 'bunt');      
    
    title.appendChild(pi);
    title.appendChild(br);
    pi.innerText = 'Reiniciar';
    
    const bunt = document.getElementById('bunt').addEventListener('click', function() {
        playerOne = [];
        playerTwo = [];
        
        btn.forEach(button => button.innerText = '');
        
        btn.forEach(button => button.disabled = false);
        
        info.innerText = '';
    });
}

