

const squares = document.querySelectorAll('.emoji')

const timesClicked = {'stone': 0, 'paper': 0, 'scissors':0}
squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked['']
        // console.log(square.value)
    }
})

function clearScore() {
    timesClicked.stone = 0
    timesClicked.paper = 0
    timesClicked.scissors = 0
    squares.forEach(square => {
        square.innerText = '0'
    }) 
}

const clearGamebtn = document.getElementById('stop-emoji')
clearGamebtn.onclick = () => clearScore()

