/* Grabbing data form star ships.js to display when event, or click, is detected */
import { starships } from '../data/starships.js'
import { removeChildren, getLastNumber } from '../utils/index.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.main')

const dialog = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')

closeButton.addEventListener('click', () => {
    dialog.classList.toggle("is-active")
})

modalBackground.addEventListener('click', () => {
    dialog.classList.toggle("is-active")
})

function populateNav(starships) {
    starships.forEach(starship => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event => {
            let shipName = event.target.textContent
            const foundShip = starships.find(ship => ship.name === shipName)
            populateShipView(foundShip)
        })

        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    })
}

function populateShipView(shipData) {
    removeChildren(shipView)
    //createElement will allow you to create a new IMG elements
    let shipImage = document.createElement('img')
    let shipNum = getLastNumber(shipData.url)
    //Set the IMG src using the URL below
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    // Make the shipNumb act like a charNum from the characters page to get a similar effect.
    shipImage.addEventListener('error', () => {
        shipImage.hidden = true
        dialog.classList.toggle("is-active")
    }) // BIG BRAIN MOVES
    
    shipView.appendChild(shipImage)
}

populateNav(starships)