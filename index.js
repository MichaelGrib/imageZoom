new ImageZoom('.image').mount()

let counter = 1

document.querySelector('#next').addEventListener('click', () => {
    if (counter === 4) {
        counter = 1 
    }
    else {
        counter++
    } 
    console.log(counter)
    document.querySelector('.image').children[0].src = `./images/${counter}.jpg`
})