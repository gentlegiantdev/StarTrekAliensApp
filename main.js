document.querySelector('#getButton').addEventListener('click', apiRequest)

document.querySelector('#inputField').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      apiRequest();
    }
});

async function apiRequest(){
    const captainName = document.querySelector('input').value
    try{
        const response = await fetch(`https://log-captains-api.herokuapp.com/api/${captainName}`)
        const data = await response.json()
        
        console.log(data)
        document.getElementById('captainFullName').innerText = data.fullName
        document.getElementById('captainSpecies').innerText = data.species
        document.getElementById('birthYear').innerText = data.born
        document.getElementById('deathYear').innerText = data.died
        document.getElementById('actor').innerText = data.actor
        document.getElementById('funFact').innerText = data.funFact
        document.getElementById('ship').innerText = data.ship

        document.getElementById('captainImage').src = data.image
        document.getElementById('captainImageCaption').innerText = data.name

        document.getElementById('shipImage').src = data.shipImage
        document.getElementById('shipImageCaption').innerText = data.ship

    }catch(error) {
        console.log(error)
    }
}