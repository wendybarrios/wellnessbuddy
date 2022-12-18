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

      let item = data.ingredients[0].text
      let calories = data.calories
      let calcium = data.totalNutrients.CA.quantity 
      let carbs = data.totalNutrients.CHOCDF.quantity
      let cholesterol = data.totalNutrients.CHOLE.quantity
      let fiber = data.totalNutrients.FIBTG.quantity
      let potassium = data.totalNutrients.K.quantity
      let magnesium = data.totalNutrients.MG.quantity

       //create container
       let cardContainer = document.createElement('div')
       cardContainer.classList.add('card')
       cardContainer.style.width="18rem"
       document.querySelector('#cards-container').appendChild(cardContainer)//apend goes last

       //create div card-body
       let cardBody = document.createElement('div')
       cardBody.classList.add('card-body')
       cardContainer.appendChild(cardBody)

       //create h5
       let cardTitle = document.createElement('h5')
       cardTitle.classList.add('card-title')
       cardBody.innerText = `${item} `
       cardContainer.appendChild(cardTitle)

        //create h5
        // let cardText = document.createElement('p')
        // cardText.classList.add('card-text')
        // cardBody.innerText = `Calories: ${calories} `
        // cardContainer.appendChild(cardText)

       //create ul 
       let cardList = document.createElement('ul')
       cardList.classList.add('list-group')
       cardList.classList.add('list-group-flush')
       cardContainer.appendChild(cardList)

       //create calories values
       let cardListItemOne = document.createElement('li')
       cardListItemOne.classList.add('list-group-item')
       cardListItemOne.innerText = `Calories: ${calories}`
       cardContainer.appendChild(cardListItemOne)

        //create calcium values
        let cardListItemTwo = document.createElement('li')
        cardListItemTwo.classList.add('list-group-item')
        cardListItemTwo.innerText = `Calcium: ${calcium}`
        cardContainer.appendChild(cardListItemTwo)

        //create carbs values
        let cardListItemThree = document.createElement('li')
        cardListItemThree.classList.add('list-group-item')
        cardListItemThree.innerText = `Carbohydrates: ${carbs}`
        cardContainer.appendChild(cardListItemThree)

        // create cholesterol values
  let cardListItemFour = document.createElement('li')
        cardListItemFour.classList.add('list-group-item')
        cardListItemFour.innerText = `Cholesterol: ${cholesterol}`
        cardContainer.appendChild(cardListItemFour)

        // create fiber values
        let cardListItemFive = document.createElement('li')
        cardListItemFive.classList.add('list-group-item')
        cardListItemFive.innerText = `Fiber: ${fiber}`
        cardContainer.appendChild(cardListItemFive)

         // create potassium values
         let cardListItemSix = document.createElement('li')
         cardListItemSix.classList.add('list-group-item')
         cardListItemSix.innerText = `Potassium: ${potassium}`
         cardContainer.appendChild(cardListItemSix)

         // create potassium values
         let cardListItemSeven = document.createElement('li')
         cardListItemSeven.classList.add('list-group-item')
         cardListItemSeven.innerText = `Magnesium: ${magnesium}`
         cardContainer.appendChild(cardListItemSeven)


         
        


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

