const department = document.querySelector('#department')
const levelOfWear = document.querySelector('#level-of-wear')
const price = document.querySelector('#price')
let percentage = 1

document.querySelector('#calculate').addEventListener('click', () => {
  
  if (levelOfWear == 'near-new') {
    percentage = .3
  } else if (levelOfWear == 'lightly-used') {
    percentage = .4
  } else if (levelOfWear == 'moderately-used') {
    percentage = .5
  } else if (levelOfWear == 'heavily-used') {
    percentage = .6
  }

  if (department.value == "mens-footwear" || "womens-footwear") {
    console.log(Math.floor(Number(price.value) * percentage) + '.83')
  } else {
    console.log(Math.floor(Number(price.value) * percentage) + '.83')
  }

  console.log(percentage)

})