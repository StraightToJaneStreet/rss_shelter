import './scss/style.scss'

class MobileMenu {

  constructor({overlay, button, opened, topWhenOpened} = { opened: false, topWhenOpened: false } ) {

    this.opened = opened

    this.overlayOpenedClass = 'mobnav-overlay--visible'
    this.buttonRotatedClass = 'mobnav-btn--rotated'

    this.overlayElement = overlay 
    this.buttonElement = button

    this.topWhenOpened = topWhenOpened

    this.setupHandlers()

  }

  setupHandlers() {
    this.buttonElement.addEventListener('click', this.toggle.bind(this))
    this.overlayElement.addEventListener('click', this.handleOverlayClick.bind(this))

    this.overlayElement.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', this.close.bind(this))
    })
  }

  handleOverlayClick(e) {
    if (e.target == e.currentTarget) {
      this.close() 
    }
  }

  open() {
    this.overlayElement.classList.add(this.overlayOpenedClass)
    this.buttonElement.classList.add(this.buttonRotatedClass)

    if (this.topWhenOpened) {
      window.scrollTo(0, 0)
    }

    this.opened = true
  }

  close() {
    this.overlayElement.classList.remove(this.overlayOpenedClass)
    this.buttonElement.classList.remove(this.buttonRotatedClass)
    this.opened = false
  }

  toggle() {
    if (this.opened) { this.close() } else { this.open() }
  }

}

function createPetCard(pet) {

  const card = document.createElement('div')
  card.classList.add('pet-card')

  const cardImg = document.createElement('img')
  cardImg.classList.add('pet-card__photo')
  cardImg.src = pet.img

  const cardName = document.createElement('p') 
  cardName.classList.add('pet-card__name') 
  cardName.innerText = pet.name

  const cardButtonWrapper = document.createElement('div')
  cardButtonWrapper.classList.add('pet-card__button')

  const cardButton = document.createElement('button')
  cardButton.innerText = 'LearnMore'
  cardButton.classList.add('button', 'pet-card__button--inverted')

  card.append(cardImg)
  card.append(cardName)
  card.append(cardButtonWrapper)
  cardButtonWrapper.append(cardButton)

  return card

}

class Slider {
  constructor(cards, rootElement) {

    this.cards = cards
    this.rootElement = rootElement

    this.currentSlideCards = this.cards.splice(0, 3)
    this.oldSlideCards     = this.cards.splice(0, 3)

    this.slideLeftElement  = this.rootElement.querySelector('.slider__slide--left')
    this.slideMainElement  = this.rootElement.querySelector('.slider__slide--current')
    this.slideRightElement = this.rootElement.querySelector('.slider__slide--right')

    console.log('Slide Left:', this.slideLeftElement)
    console.log('Slide Main:', this.slideMainElement)
    console.log('Slide Right:', this.slideRightElement)

    this.insertCards()

    this.setupHandlers()

    this.slideMainElement.append(...this.currentSlideCards)

  }

  setupHandlers() {

    const nextButtons =
      this.rootElement.querySelectorAll('.slider__nav-inner--right, .slider__nav-outer--right')

    const prevButtons =
      this.rootElement.querySelectorAll('.slider__nav-inner--left, .slider__nav-outer--left')

    nextButtons.forEach(el => {
      el.addEventListener('click', this.nextSlide.bind(this))
    })

    nextButons.forEach(el => {
      el.addEventListener('click', this.prevSlide.bind(this))
    }) 

  }

  insertCards() {
  }

  nextSlide(e) {
    function transitioendHandler() {
      const z = this.oldSlideCards
      this.oldSlideCards = this.currentSlideCards
      this.currentSlideCards = z
      this.slideLeftElement.removeEventListener('transitionend', transitioendHandler)
      this.locked = false
    }
    if (this.locked) { return }
    this.locked = true
    if (this.prevDirection == 1) {
    } else {
      this.prevDirection = 1
      this.slideRight.append(this.oldSlideCards)
      this.slideLeftElement.addEventListener('transitionend', transitioendHandler)
    }
  }

  prevSlide() {
    if (this.locked) { return } 
    this.locked = true

    if (this.prevDirection == -1) {
      
    } else {

    }

  }

}

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
  const petCards = PETS.map(createPetCard).map(wrapAsSliderItem)

  if (!sliderElement) { return }

  const slider = new Slider(petCards, sliderElement)

})

const PETS = [
  {
    "name": "Jennifer",
    "img": "./assets/pet/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases":     ["none"],
    "parasites":    ["none"]
  },
  {
    "name": "Sophia",
    "img": "./assets/pet/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases":     ["none"],
    "parasites":    ["none"]
  },
  {
    "name": "Woody",
    "img": "./assets/pet/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases":     ["right back leg mobility reduced"],
    "parasites":    ["none"]
  },
  {
    "name": "Scarlett",
    "img": "./assets/pet/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases":     ["none"],
    "parasites":    ["none"]
  },
  {
    "name": "Katrine",
    "img": "./assets/pet/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases":     ["none"],
    "parasites":    ["none"]
  },
  {
    "name": "Timmy",
    "img": "./assets/pet/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases":     ["kidney stones"],
    "parasites":    ["none"]
  },
  {
    "name": "Freddie",
    "img": "./assets/pet/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "./assets/pet/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]