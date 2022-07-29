const possibleChoices = document.querySelectorAll('.magic-type');
const userCastDisplay = document.getElementById('user-cast');
const cpuCastDisplay = document.getElementById('cpu-cast');
const castResultDisplay = document.getElementById('cast-result');

let userCast, cpuCast, castResult;

// listen for button clicks
possibleChoices.forEach(pChoice => pChoice.addEventListener('click', (e) => {
  userCast = e.target.id;
  userCastDisplay.innerHTML = userCast.toUpperCase();
  generateCpuCast()
  getResult()
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
        castResult = 'You Win'
      } else if(cpuCast === 'bolt' || cpuCast === 'tree') {
        castResult = 'CPU Wins'
      }
  } else if(userCast === 'wave') {
      if(cpuCast === 'flame' || cpuCast === 'bolt') {
        castResult = 'You Win'
      } else if(cpuCast === 'tree' || cpuCast === 'wind') {
        castResult = 'CPU Wins'
      }
  } else if(userCast === 'flame') {
      if(cpuCast === 'bolt' || cpuCast === 'tree') {
        castResult = 'You Win'
      } else if(cpuCast === 'wind' || cpuCast === 'wave') {
        castResult = 'CPU Wins'
      }  
  } else if(userCast === 'bolt') {
      if(cpuCast === 'tree' || cpuCast === 'wind') {
        castResult = 'You Win'
      } else if(cpuCast === 'wave' || cpuCast === 'flame') {
        castResult = 'CPU Wins'
      } 
  } else if(userCast === 'tree') {
      if(cpuCast === 'wind' || cpuCast === 'wave') {
        castResult = 'You Win'
      } else if(cpuCast === 'bolt' || cpuCast === 'flame') {
        castResult = 'CPU Wins'
      }
  }
  castResultDisplay.innerHTML = castResult
}

function dealDamage() {
  
}
