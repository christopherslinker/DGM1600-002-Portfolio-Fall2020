import { films } from './data/films.js'
import { people } from './data/people.js'

//console.log(people.length)

const main = document.querySelector('main')

/*
films.forEach(film => {
    console.log(film.title)
    let newTitle = main.appendChild(document.createElement('h1'))
    newTitle.textContent = film.title
})
*/

/*
people.forEach(person => {
console.log(people.name)
let personImg = document.createElement('img')
personImg.src = "https://i.imgur.com/P3kT4Te.jpg"
main.appendChild(personImg)
})
*/

for (let i = 0; i < 7; i++) {
    console.log(films[i].title)
}