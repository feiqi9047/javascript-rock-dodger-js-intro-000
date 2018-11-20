/**
 * Don't change these constants!
 */
const DODGER = document.getElementById('dodger')
const GAME = document.getElementById('game')
const GAME_HEIGHT = 400
const GAME_WIDTH = 400
const LEFT_ARROW = 37 // use e.which!
const RIGHT_ARROW = 39 // use e.which!
const ROCKS = []
const START = document.getElementById('start')

var gameInterval = null

/**
 * Be aware of what's above this line,
 * but all of your work should happen below.
 */

function checkCollision(rock) {
  const top = positionToInteger(rock.style.top)

  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)
    const dodgerRightEdge = dodgerLeftEdge+40;

    const rockLeftEdge = positionToInteger(rock.style.left)
    const rockRightEdge = rockRightEdge+20;

    if (rockLeftEdge>dodgerLeftEdge||rockRightEdge<dodgerRightEdgeEdge){
    return false}
      return true
    }
  }

function createRock(x) {
  const rock = document.createElement('div')

  rock.className = 'rock'
  rock.style.left = `0px`

 var top = 0

  rock.style.top = top

 GAME.appendChild(rock)

  function moveRock() {
    rock.top.style = `${top +=2}px`
    if (checkCollision(rock)==='false'){
      return endGame()
    }if (top<GAME_Height){
      windows.requestAnimationFrame(moveRock)
    }return rock.remove()
    
  windows.requestAnimationFrame(moveRock)
  ROCKS.push(rock)
  return rock
}

function endGame() {
  clearInterval(gameInterval)
  ROCKS.forEach(function(rock){rock.remove()})
  document.removeEvenListener('keydown',moveDodger)
  alert('YOU LOSE!')
}

function moveDodger(e) {
  document.addEventListener('keydown', function(e){
    if(e.which===37){
      moveDodgerLeft
    }if(e.which===39){
      moveDodgerRight
    }
  })
}

function moveDodgerLeft() {
 const left = positionToInteger(dodger.style.left)
   if (left>0){
      dodger.style.left = `${left - 4}px`
     window.requestAnimationFrame(moveDodgerLeft)
   }
 } window.requestAnimationFrame(moveDodgerLeft)
}

function moveDodgerRight() {
  const left = positionToInteger(dodger.style.left)
   if (left>0){
      dodger.style.left = `${left - 4}px`
     window.requestAnimationFrame(moveDodgerLeft)
   }
 } window.requestAnimationFrame(moveDodgerLeft)
}

/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function start() {
  window.addEventListener('keydown', moveDodger)

  START.style.display = 'none'

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  }, 1000)
}
