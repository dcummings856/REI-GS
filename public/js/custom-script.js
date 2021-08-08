const department = document.querySelector('#department')
const customPercentage = document.querySelector('#custom-percentage')
const customPrice = document.querySelector('#custom-price')
const customGSPrice = document.querySelector('#custom-GS-price')
let percentage = 1


function getCustomPercentage(){

  if (customPercentage.value == '30') {
    percentage = .7
  } else if (customPercentage.value == '40') {
    percentage = .6
  } else if (customPercentage.value == '50') {
    percentage = .5
  } else if (customPercentage.value == '60') {
    percentage = .4
  } else if (customPercentage.value == '70') {
    percentage = .3
  } else if (customPercentage.value == '80') {
    percentage = .2
  }

}

function getCustomPrice(){
  getCustomPercentage()

  document.querySelector('#custom-GS-price').style.cssText = 'color: rgb(207, 0, 0);'

  setTimeout(function(){
    document.querySelector('#custom-GS-price').style.cssText = 'color: rgb(114, 18, 18);'
  }, 200)

  customGSPrice.textContent = Math.floor(Number(customPrice.value) * percentage) + .83

}

document.querySelector('#custom-calculate').addEventListener('click', getCustomPrice)