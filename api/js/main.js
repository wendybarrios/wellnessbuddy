//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  document.querySelector('#cards-container').innerHTML = ''
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

      // get item
      let item = data.ingredients[0].text
      // change item case : ex. milk -> Milk
      let cardLabel = item.charAt(0).toUpperCase() + item.slice(1)

      // get nutrition facts
      let calories = Math.round(data.totalNutrients.ENERC_KCAL.quantity) + " " + data.totalNutrients.ENERC_KCAL.unit
      let calcium = Math.round(data.totalNutrients.CA.quantity) + " " + data.totalNutrients.CA.unit
      let carbs = Math.round(data.totalNutrients.CHOCDF.quantity) + " " + data.totalNutrients.CHOCDF.unit
      let cholesterol = Math.round(data.totalNutrients.CHOLE.quantity) + " " + data.totalNutrients.CHOLE.unit
      let fiber = data.totalNutrients.FIBTG.quantity + " " + data.totalNutrients.FIBTG.unit
      let potassium = Math.round(data.totalNutrients.K.quantity) + " " + data.totalNutrients.K.unit
      let magnesium = Math.round(data.totalNutrients.MG.quantity) + " " + data.totalNutrients.MG.unit
      let sodium = Math.round(data.totalNutrients.NA.quantity) + " " + data.totalNutrients.NA.unit
      let protein = Math.round(data.totalNutrients.PROCNT.quantity) + " " + data.totalNutrients.PROCNT.unit
      let sugar = Math.round(data.totalNutrients.SUGAR.quantity) + " " + data.totalNutrients.SUGAR.unit

       //create container
       let cardContainer = document.createElement('div')
       cardContainer.classList.add('card', 'border-dark')
       cardContainer.style.width="18rem"
       document.querySelector('#cards-container').appendChild(cardContainer)

       //create div card-body
       let cardBody = document.createElement('div')
       cardBody.classList.add('card-body')
       cardContainer.appendChild(cardBody)

       //create h5
       let cardTitle = document.createElement('h2')
       cardTitle.classList.add('card-title')
       cardBody.innerText = `${cardLabel}`
       cardContainer.appendChild(cardTitle)

      

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

         // create potassium values
         let cardListItemEight = document.createElement('li')
         cardListItemEight.classList.add('list-group-item')
         cardListItemEight.innerText = `Sodium: ${sodium}`
         cardContainer.appendChild(cardListItemEight)

          // create protein values
          let cardListItemNine = document.createElement('li')
          cardListItemNine.classList.add('list-group-item')
          cardListItemNine.innerText = `Protein: ${protein}`
          cardContainer.appendChild(cardListItemNine)
 
           // create sugar values
           let cardListItemTen = document.createElement('li')
           cardListItemTen.classList.add('list-group-item')
           cardListItemTen.innerText = `Sugar: ${sugar}`
           cardContainer.appendChild(cardListItemTen)
  


         
        


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

