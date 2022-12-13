// https://dog.ceo/api/breeds/image/random

const dogImage = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

// function that gets new dof everytime the button is clicked

const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        dogImage.innerHTML = `<img src='${json.message}'/>`
    })
}

dogButton.onclick =() => {
    getNewDog()
}