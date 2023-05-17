

const squares = 
document.querySelectorAll('.emoji')

const timesClicked = {'rock': 0, 'paper': 0, 'scissors':0}
squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
        // console.log(square.value)
    }
})