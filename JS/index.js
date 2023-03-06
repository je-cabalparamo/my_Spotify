const cardTop = document.querySelector('#cardTop').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
const btnBuscar = document.getElementById('buscador')
let topTwoHundred = []

document.addEventListener('DOMContentLoaded', () => {
    loadMusicData()
})

const loadMusicData = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ad36e289afmshec1552907ff42a0p187d4cjsna8c0ba4a092a',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => {topTwoHundred = response
            creaCards()
        console.log('canciones', topTwoHundred)})
        .catch(err => console.error(err));
}

const creaCards = () => {
    topTwoHundred.forEach((song) => {
        cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri)
        cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName
        let artists = ''
        let size = song.trackMetadata.artists.length
        song.trackMetadata.artists.forEach((item, index) => {
            if (index === size - 1) {
                artists += item.name
            } else {
                artists += item.name + ' / '
            }
        })
        cardTop.querySelector('.artistname').textContent = artists


        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}

btnBuscar.addEventListener('keypress', () => {
    //console.log('tecla', btnBuscar.value)
    topTwoHundred
})