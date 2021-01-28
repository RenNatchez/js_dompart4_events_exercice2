//--1--
let h1 = document.querySelector('h1')
h1.addEventListener('dblclick', () => {
    h1.style.color = 'white'
    h1.style.backgroundColor = 'black'
})

let h3 = document.querySelector('h3')
h3.addEventListener('mouseover', () => {
    h3.innerHTML = `<h5>Les écouteurs d'événéments - exercice 2</h5>`
})

let p = document.querySelector('p')
p.addEventListener('click', () => {
    if (p.style.color == 'gold') {
        p.style.color = 'black'
        p.style.backgroundColor = 'white'
    } else {
        p.style.color = 'gold'
        p.style.backgroundColor = 'blue'
    }
})