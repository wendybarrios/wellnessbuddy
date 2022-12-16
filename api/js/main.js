//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('#searchIngredient').value
  console.log(choice)

  const url = `https://api.edamam.com/api/nutrition-data?app_id=dce92992&app_key=23f9c8ca425a2a1e4126336deea3a0ae&nutrition-type=logging&ingr=${choice}`



  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // console.log(data.totalNutrients.CA.quantity)
        // document.querySelector('.calories').innerText = data.calories
        // document.querySelector('.calcium').innerText = data.totalNutrients.CA.quantity 
        // document.querySelector('.carbohydrates').innerText = data.totalNutrients.CHOCDF.quantity
        // document.querySelector('.cholesterol').innerText = data.totalNutrients.CHOLE.quantity

       

          let itemCalories = data.calories
          // let itemCalcium = data.totalNutrients.CA.quantity 
          // let itemCarbs = data.totalNutrients.CHOCDF.quantity
          
          // create container
          let cardContainer = document.createElement('div')
          cardContainer.classList.add('card')
          cardContainer.style.width="18rem"
          document.querySelector('#cards-container').appendChild(cardContainer)
          
           //create div card-body
          let cardBody = document.createElement('div')
          cardBody.classList.add('card-body')
          cardContainer.appendChild(cardBody)
          
          //create h5
          let cardTitle = document.createElement('h5')
          cardTitle.classList.add('card-title', 'pokemon-name')
          cardBody.innerText = `Calories: ${itemCalories}`
          cardContainer.appendChild(cardTitle)





        




      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


