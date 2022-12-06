
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
        // document.querySelector('.itemlabel').innerText = data.hints[0].food.knownAs

      //   let labels = "";
      // for(let i=0;i<data.hints.length;i++){
      //     labels = labels+ "\n"+data.hints[i].food.label;
      //   }
      //  document.querySelector('.foods').innerText = labels;

      
      for(let i=0;i<data.hints.length;i++){
            createCard(data.hints[i])
          }
      
       


       

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


 // Start of creating the Nasa Cards
const createCard = (foodItem) => {
  document.querySelector("#foodInfo1").insertAdjacentHTML(
    "beforeend",
    `
    <section class="container4 my-5">
    <div class="row g-3">
      
            <div class="col-lg-6">
              <div class="p-d mt-4">
                    <h3 class="card-title">${foodItem.food.label}</h3>
                    <p class="card-text">Brand: ${foodItem.food.brand}</p>
                    <p class="card-text">Serving Size: ${foodItem.food.servingSizes[0].quantity} ${foodItem.food.servingSizes[0].label}</p>
                    <p class="card-text">Calories (kcal): ${foodItem.food.nutrients.ENERC_KCAL}</p>
                    <p class="card-text">Total Fat (g): ${foodItem.food.nutrients.FAT}</p>
                    <p class="card-text">Total Carbohydrate (g): ${foodItem.food.nutrients.CHOCDF}</p>
                    <p class="card-text">Total Fiber (g): ${foodItem.food.nutrients.FIBTG}</p>
                    <p class="card-text">Total Protein (g): ${foodItem.food.nutrients.PROCNT}</p>
                    <div class="collapse-content">
                      <h5>Nutrients:</h5>
                      <p id="collapseContentPara-${
                        foodItem.food.label
                      }""  class="card-text collapse.show readMorePara readMorePara-${
                        foodItem.food.label
    } hiddenPara">${foodItem.food.label}</p>

                    <div class="d-flex justify-content-between">
                      <a id="collapseContentBTN-${
                        foodItem.food.label
                      }" class="btn btn-dark readBtn" data-toggle="collapse" href="#collapseContent" role="button" aria-expanded="false" aria-controls="collapseExample"><span class="readSpan readSpan-${
                        foodItem.food.label
    }">Read More</span></a>
                    <div>
                        
                  
                    </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
   </section>`
  )
                  }