import './scss/style.scss'

import { PetCard } from './js/pet-card.js'
import { MobileMenu } from './js/mobile-menu.js'
import { Slider } from './js/slider.js'
import { Catalog } from './js/catalog.js'
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

document.addEventListener('DOMContentLoaded', () => {
  const catalogElement = document.getElementById('catalog')

  if (!catalog) { return }

  function shuffle(collection) {
    for (let j = 0; j < collection.length; j++) {
      const pos = Math.floor(Math.random() * PETS.length)
      let z = collection[j]
      collection[j] = collection[pos]
      collection[pos] = z
    }
    return collection
  }
  const clientWidth = window.innerWidth
  if (clientWidth >= 1280) {
    const pages = []
    for (let i = 0; i < 6; i++) {
      let pageCards = [...PETS]
      pageCards = shuffle(pageCards).map(e => new PetCard(e)).map(e => e.getElement())
      pages.push(pageCards)
    }
    const catalog = new Catalog(pages, catalogElement)
  } else if (clientWidth >= 768) {
    let pages = []
    let storage = [...PETS]
      .map(p => {
        const st = []
        for (let i = 0; i < 6; i++) { st.push(Object.assign({}, p)) }
        return st
      })

    for (let i = 0; i < 8; i++) {
      storage = shuffle(storage)
      storage.sort((a, b) => b.length - a.length)
      const pageCards = storage.slice(0, 6).map(pet => pet.pop()).map(e => new PetCard(e)).map(e => e.getElement())
      pages.push(pageCards, catalogElement)
    }

    const catalog = new Catalog(pages)

  } else {

    let pages = []
    let storage = [...PETS]
      .map(p => {
        const st = []
        for (let i = 0; i < 6; i++) { st.push(Object.assign({}, p)) }
        return st
      })

    for (let i = 0; i < 16; i++) {
      storage = shuffle(storage)
      storage.sort((a, b) => b.length - a.length)
      const pageCards = storage.slice(0, 3).map(pet => pet.pop()).map(e => new PetCard(e)).map(e => e.getElement())
      pages.push(pageCards)
    }

    const catalog = new Catalog(pages, catalogElement)
  }
})

