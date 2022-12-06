
document.querySelector('#fastFood').addEventListener('click', fastFood)

function fastFood(){
  const fastFoodInput = document.querySelector('#searchfastfood').value

  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=f6c373d1&app_key=080b801c47c82649cb4cb9c2621280d6&ingr=${fastFoodInput}&nutrition-type=cooking&category=fast-foods
  `



  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.hints[0].food.knownAs)

        // name of item ex. bacon biscuit
        document.querySelector('.itemlabel').innerText = data.hints[0].food.knownAs


        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

