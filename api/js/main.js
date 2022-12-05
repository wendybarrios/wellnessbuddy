//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.edamam.com/api/nutrition-data?app_id=dce92992&app_key=23f9c8ca425a2a1e4126336deea3a0ae&nutrition-type=logging&ingr=${choice}`



  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.totalNutrients.CA.quantity)
       
        document.querySelector('h3').innerText = data.calories
        document.querySelector('.calcium').innerText = data.totalNutrients.CA.quantity 
        document.querySelector('.carbohydrates').innerText = data.totalNutrients.CHOCDF.quantity
        document.querySelector('.cholesterol').innerText = data.totalNutrients.CHOLE.quantity
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

