document.getElementById('resturantBtn').addEventListener('click', () => {
    let result = document.getElementById('resturantResult')

    result.textContent = ''

    let resturants = ['Chick fil a', 'SmashBurger', "ShakeShack", "Swig", "Costa Vida"]
    
    let results = resturants[(Math.floor(Math.random() * resturants.length))]

    console.log(results)


    result.append(results)
    
})

document.getElementById('attractionBtn').addEventListener('click', () => {
    let result = document.getElementById('attractionResult')

    result.textContent = ''

    let attractions = ['Cowabunga Bay', 'Loveland Living Planet Aquarium', 'Bell Canyon Trail', 'Dimple Dell Regional Park', 'Movie Theater']
    
    let results = attractions[(Math.floor(Math.random() * attractions.length))]

    console.log(results)


    result.append(results)
    
})