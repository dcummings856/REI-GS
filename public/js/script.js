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

function calculateWomensFootwear(){

  if (levelOfWear.value == 'near-new' && department.value == 'womens-footwear') {
    return percentage = .6
  } else if (levelOfWear.value == 'lightly-used' && department.value == 'womens-footwear') {
    return percentage = .5
  } else if (levelOfWear.value == 'moderately-used' && department.value == 'womens-footwear') {
    return percentage = .4
  } else if (levelOfWear.value == 'heavily-used' && department.value == 'womens-footwear') {
    return percentage = .3
  } else {
    calculatePrecentage()
  }

}

function calculatePrice(){
  calculateWomensFootwear()

  document.querySelector('#GS-price').style.cssText = 'color: rgb(207, 0, 0);'

  setTimeout(function(){
    document.querySelector('#GS-price').style.cssText = 'color: rgb(114, 18, 18);'
  }, 200)

  if (department.value == 'mens-footwear' || 'womens-footwear') {
    GSPrice.textContent = Math.floor(Number(price.value) * percentage) + .83
  } else {
    GSPrice.textContent = Math.floor(Number(price.value) * percentage) + .83
  }

}

document.querySelector('#calculate').addEventListener('click', calculatePrice)