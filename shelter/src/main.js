import './scss/style.scss'

import { PetCard } from './js/pet-card.js'
import { MobileMenu } from './js/mobile-menu.js'
import { Slider } from './js/slider.js'
import { PETS } from './pets.js'

document.addEventListener('DOMContentLoaded', () => {

  const mobileMenuOverlayElement = document.getElementById('mobnav-overlay')
  const mobileMenuButtonElement  = document.getElementById('mobnav-btn')

  if (!mobileMenuOverlayElement || !mobileMenuButtonElement) {
    return
  }

  const menu = new MobileMenu({
    overlay: mobileMenuOverlayElement,
    button: mobileMenuButtonElement,
    topWhenOpened: true
  })

})

document.addEventListener('DOMContentLoaded', () => {

  const mobileMenuOverlayElement = document.getElementById('mobnav-overlay-pets')
  const mobileMenuButtonElement  = document.getElementById('mobnav-btn')

  if (!mobileMenuOverlayElement || !mobileMenuButtonElement) {
    return
  }

  const menu = new MobileMenu({
    overlay: mobileMenuOverlayElement,
    button: mobileMenuButtonElement,
  })

})

function wrapAsSliderItem(el) {
  const item = document.createElement('div')
  item.classList.add('slider__item')
  item.append(el)
  return item
}

document.addEventListener('DOMContentLoaded', () => {

  const sliderElement = document.getElementById('index-slider')
  const petCards = PETS.map(pet => new PetCard(pet)).map(card => card.getElement())

  if (!sliderElement) { return }

  const slider = new Slider(petCards, sliderElement)

})

