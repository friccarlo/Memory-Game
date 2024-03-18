const cardArray = [

    {
        name: 'fries',
        img: 'images/fries.png'

    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },

    {
        name: 'pizza',
        img: 'images/pizza.png'
    },

    {
        name: 'fries',
        img: 'images/fries.png'

    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },

    {
        name: 'pizza',
        img: 'images/pizza.png'
    },

]

cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChose = []
let cardsChoseID = []
const cardsWon = []

function createBoard(){
    for (let i=0; i<cardArray.length ; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }


}

createBoard()

function checkMatch() {

    const cards =document.querySelectorAll('img')

    console.log("Check for Match")

    if (cardsChose[0]===cardsChose[1]){ 
        alert('You found a match')
        cards[cardsChoseID[0]].setAttribute('src','images/white.png')
        cards[cardsChoseID[1]].setAttribute('src','images/white.png')
        cards[cardsChoseID[0]].removeEventListener('click', flipCard)
        cards[cardsChoseID[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChose)

    } else {
        cards[cardsChoseID[0]].setAttribute('src','images/blank.png')
        cards[cardsChoseID[1]].setAttribute('src','images/blank.png')
        alert('Sorry! Try Again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChose = []
    cardsChoseID = []

    if (cardsWon.length === (cardArray.length/2)) {
        resultDisplay.textContent = 'Congratualions! You have found them all'
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    // console.log(cardArray[cardId])
    // console.log('clicked', cardId)
    cardsChose.push(cardArray[cardId].name)
    cardsChoseID.push(cardId)
    console.log(cardsChose, cardsChoseID)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChose.length === 2) {
        setTimeout( checkMatch, 500)
    }
}

