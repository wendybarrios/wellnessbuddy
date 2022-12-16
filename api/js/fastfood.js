
document.querySelector('#fastFoodButton').addEventListener('click', fastFood)


//Start of function to clear out data from input form 
function clearField() {
  document.querySelector("#searchfastfood").value = ""
}
//End of function to clear out data from input form 

function fastFood(){
  document.querySelector('#foodInfo1').innerHTML = ''

// grab user input value
  const fastFoodInput = document.querySelector('#searchfastfood').value

  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=f6c373d1&app_key=080b801c47c82649cb4cb9c2621280d6&ingr=${fastFoodInput}&nutrition-type=cooking&category=fast-foods`


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

      // loop to render all data into cards
      for(let i=0;i<data.hints.length;i++){
            createCard(data.hints[i])
          }




    //run clear field function 
    clearField()

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


 // Start of creating the food Cards
const createCard = (foodItem) => {
  document.querySelector("#foodInfo1").insertAdjacentHTML(
    "beforeend",
    `
    <div class="container">
    <section class="my-5" style="width: 350px; height: 350px; float:left">
    <div class="card-deck mb-3" style="padding: 12px;">
    <div class="card">
        <div class="card-body">
                   <h3 class="card-title text-center" style="font-size: 20px">${foodItem.food.label}</h3>
                   <p class="card-text">Brand: ${foodItem.food.brand}</p>
                   <p class="card-text">Serving Size: ${foodItem.food.servingSizes[0].quantity} ${foodItem.food.servingSizes[0].label}</p>
                   <p class="card-text">Calories (kcal): ${Math.round(foodItem.food.nutrients.ENERC_KCAL)}</p>
                   <p class="card-text">Total Fat (g): ${Math.round(foodItem.food.nutrients.FAT)}</p>
                   <p class="card-text">Total Carbohydrate (g): ${Math.round(foodItem.food.nutrients.CHOCDF)}</p>
                   <p class="card-text">Total Fiber (g): ${Math.round(foodItem.food.nutrients.FIBTG)}</p>
                   <p class="card-text">Total Protein (g): ${Math.round(foodItem.food.nutrients.PROCNT)}</p>
                   
                   <i id="heartBTN-${foodItem.food.label}" class="fas fa-heart hidden heart fa-lg p-1 my-1 mr-3" tabindex="0" aria-label="like content" title="I like it"><span class="likeSpan likeSpan${foodItem.food.label}">Like Me</span></i>
                   </div>
                   </div>
                 </div>
               </div>
           </div>
       
   </div>
  </section>
 </div>
</div>
</section> 
</div>
`
  )
// End of Food Card

  }




