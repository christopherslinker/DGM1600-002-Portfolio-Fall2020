/* Grabbing data from planets.js to display when event, or click, is detected */
import { planets } from '../data/planets.js'
import { removeChildren, getLastNumber } from '../utils/index.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const planetView = document.querySelector('.main')

const dialog = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')

closeButton.addEventListener('click', () => {
    dialog.classList.toggle("is-active")
})

modalBackground.addEventListener('click', () => {
    dialog.classList.toggle("is-active")
})

function populateNav(planets) {
    planets.forEach(planets => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event => {
            let planetName = event.target.textContent
            const foundPlanet = planets.find(planet => planet.name === planetName)
            populatePlanetView(foundPlanet)
        })

        let listItem = document.createElement('li')
        listItem.textContent = planet.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    })
}

function populatePlanetView(planetData) {
    removeChildren(planetView)
    //createElement will allow you to create a new IMG elements
    let planetImage = document.createElement('img')
    let planetNum = getLastNumber(planetData.url)
    //Set the IMG src using the URL below
    planetImage.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`
    // Make the planetNumb act like a charNum from the characters page to get a similar effect.
    planetImage.addEventListener('error', () => {
        planetImage.hidden = true
        dialog.classList.toggle("is-active")
    }) // BIG BRAIN MOVES
    
    planetView.appendChild(planetImage)
}

populateNav(planets)