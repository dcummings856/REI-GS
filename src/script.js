const department = document.querySelector('#department')
const levelOfWear = document.querySelector('#level-of-wear')
const price = document.querySelector('#price')
const GSPrice = document.querySelector('#GS-price')
let percentage = 1

function calculatePrecentage(){

  if (levelOfWear.value == 'near-new') {
    return percentage = .7
  } else if (levelOfWear.value == 'lightly-used') {
    return percentage = .6
  } else if (levelOfWear.value == 'moderately-used') {
    return percentage = .5
  } else if (levelOfWear.value == 'heavily-used') {
    return percentage = .4
  }
}

function calculatePrice(){
  calculatePrecentage()

  if (department.value == "mens-footwear" || "womens-footwear") {
    GSPrice.textContent = Math.floor(Number(price.value) * percentage) + '.83'
  } else {
    GSPrice.textContent = Math.floor(Number(price.value) * percentage) + '.83'
  }

}

document.querySelector('#calculate').addEventListener('click', calculatePrice)