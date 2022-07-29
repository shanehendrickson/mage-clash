const possibleChoices = document.querySelectorAll('.magic-type');
const userCastDisplay = document.getElementById('user-cast');
const cpuCastDisplay = document.getElementById('cpu-cast');
const castResultDisplay = document.getElementById('cast-result');
const userHealthDisplay = document.getElementById('user-health');
const cpuHealthDisplay = document.getElementById('cpu-health');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const newGame = document.querySelector('#newGame');
const clashVictorDisplay = document.getElementById('clashVictor');

let userCast, cpuCast, castResult, clashVictor;
let userHealth = 10;
let cpuHealth = 10;

userHealthDisplay.innerHTML = userHealth;
cpuHealthDisplay.innerHTML = cpuHealth;

// listen for button clicks
possibleChoices.forEach(pChoice => pChoice.addEventListener('click', (e) => {
  userCast = e.target.id;
  userCastDisplay.innerHTML = userCast.toUpperCase();
  generateCpuCast()
  getResult()
  endGame()

  userHealthDisplay.innerHTML = userHealth;
  cpuHealthDisplay.innerHTML = cpuHealth;
}))

// randomly choose cpu magic
function generateCpuCast() {
  const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1;
  switch (randomNum) {
    case 1: cpuCast = 'wind'; break;
    case 2: cpuCast = 'wave'; break;
    case 3: cpuCast = 'flame'; break;
    case 4: cpuCast = 'bolt'; break;
    case 5: cpuCast = 'tree';
  }
  cpuCastDisplay.innerHTML = cpuCast.toUpperCase();
}

// compare casting and get results
function getResult() {
  if(userCast === cpuCast) {
    castResult = 'Draw'
  } else if(userCast === 'wind') {
      if(cpuCast === 'wave' || cpuCast === 'flame') {
        castResult = 'You Win';
        cpuHealth -= 1;
      } else if(cpuCast === 'bolt' || cpuCast === 'tree') {
        castResult = 'CPU Wins';
        userHealth -= 1;
      }
  } else if(userCast === 'wave') {
      if(cpuCast === 'flame' || cpuCast === 'bolt') {
        castResult = 'You Win';
        cpuHealth -= 1;
      } else if(cpuCast === 'tree' || cpuCast === 'wind') {
        castResult = 'CPU Wins';
        userHealth -= 1;
      }
  } else if(userCast === 'flame') {
      if(cpuCast === 'bolt' || cpuCast === 'tree') {
        castResult = 'You Win';
        cpuHealth -= 1;
      } else if(cpuCast === 'wind' || cpuCast === 'wave') {
        castResult = 'CPU Wins';
        userHealth -= 1;
      }  
  } else if(userCast === 'bolt') {
      if(cpuCast === 'tree' || cpuCast === 'wind') {
        castResult = 'You Win';
        cpuHealth -= 1;
      } else if(cpuCast === 'wave' || cpuCast === 'flame') {
        castResult = 'CPU Wins';
        userHealth -= 1;
      } 
  } else if(userCast === 'tree') {
      if(cpuCast === 'wind' || cpuCast === 'wave') {
        castResult = 'You Win';
        cpuHealth -= 1;
      } else if(cpuCast === 'bolt' || cpuCast === 'flame') {
        castResult = 'CPU Wins';
        userHealth -= 1;
      }
  }
  castResultDisplay.innerHTML = castResult
}

function endGame() {
  if(userHealth == 0){
    modal.classList.add('open');
    overlay.classList.add('open');
    clashVictor = 'You LOSE!';
    clashVictorDisplay.innerHTML = clashVictor;
  } else if(cpuHealth == 0){
    modal.classList.add('open');
    overlay.classList.add('open');
    clashVictor = 'You WIN!';
    clashVictorDisplay.innerHTML = clashVictor;
  }
}

newGame.addEventListener('click', (e) => {
  location.reload();
})
