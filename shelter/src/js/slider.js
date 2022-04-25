class Slider {

  static DIRECTION_LEFT = 'left'
  static DIRECTION_RIGHT = 'right'

  constructor(cards, rootElement) {
    cards = cards.map(e => {
      const item = document.createElement('div')
      item.classList.add('slider__item')
      item.append(e)
      return item
    })
    this.previousSlideDirection = null

    this.cards = cards
    this.rootElement = rootElement

    this.currentSlideCards = this.cards.splice(0, 3)
    this.oldSlideCards     = this.cards.splice(0, 3)

    this.slideLeftElement  = this.rootElement.querySelector('.slider__slide--left')
    this.slideMainElement  = this.rootElement.querySelector('.slider__slide--current')
    this.slideRightElement = this.rootElement.querySelector('.slider__slide--right')

    this.slideMainElement.append(...this.currentSlideCards)

    this.setupHandlers()
  }

  setupHandlers() {

    const nextButtons = this.rootElement.querySelectorAll('.slider__nav-inner--right, .slider__nav-outer--right')
    const prevButtons = this.rootElement.querySelectorAll('.slider__nav-inner--left, .slider__nav-outer--left')

    nextButtons.forEach(el => el.addEventListener('click', this.nextSlide.bind(this)))
    prevButtons.forEach(el => el.addEventListener('click', this.prevSlide.bind(this)))
  }


  prevSlide() {

    if (this.locked) { return } 

    this.locked = true

    const nextSlideElement = this.slideRightElement
    const currentSlideElement = this.slideMainElement

    function leftTransitionendHandler() {

      this.locked = false

      this.slideLeftElement.removeEventListener('transitionend', leftTransitionendHandler)
      this.slideLeftElement.classList.remove('slider__slide--transition')
      this.slideLeftElement.classList.remove('slider__slide--shift_left')

      this.oldSlideCards.forEach(e => e.remove())
      this.slideMainElement.append(...this.currentSlideCards)

      console.group('Transitionend')
      console.log('Lock:', this.locked)
      console.log('Current Cards:', this.currentSlideCards)
      console.log('Old Slide Cards:', this.oldSlideCards)
      console.log('Left Slide Element:', this.slideLeftElement)
      console.log('Main Slide Element:', this.slideMainElement)
      console.log('Right Slide Element:', this.slideRightElement)
      console.groupEnd()

    }

    if (this.previousSlideDirection == this.constructor.DIRECTION_LEFT) {
      nextSlideElement.append(...this.oldSlideCards)
      const z = this.currentSlideCards
      this.currentSlideCards = this.oldSlideCards
      this.oldSlideCards = z
    } else {

      this.oldSlideCards.forEach(e => e.remove())
      this.cards.push(...this.oldSlideCards)

      this.oldSlideCards     = this.currentSlideCards
      this.currentSlideCards = this.cards.splice(0, 3)

      const nextElements = nextSlideElement.children
      for (let i = 0; i < nextElements; i++) nextElements[i].remove()

      nextSlideElement.append(...this.currentSlideCards)

    }
    this.slideLeftElement.addEventListener('transitionend', leftTransitionendHandler.bind(this))
    this.slideLeftElement.classList.add('slider__slide--transition')
    this.slideLeftElement.classList.add('slider__slide--shift_left')

    this.previousSlideDirection = this.constructor.DIRECTION_RIGHT
  }

  nextSlide(e) {

    if (this.locked) { return } 

    this.locked = true

    const nextSlideElement = this.slideLeftElement
    const currentSlideElement = this.slideMainElement

    function rightTransitionendHandler() {

      this.locked = false

      this.slideLeftElement.removeEventListener('transitionend', rightTransitionendHandler)
      this.slideLeftElement.classList.remove('slider__slide--transition')
      this.slideLeftElement.classList.remove('slider__slide--shift_right')

      this.oldSlideCards.forEach(e => e.remove())
      this.slideMainElement.append(...this.currentSlideCards)
      
    }

    if (this.previousSlideDirection == this.constructor.DIRECTION_RIGHT) {
      nextSlideElement.append(...this.oldSlideCards)

      const z = this.currentSlideCards
      this.currentSlideCards = this.oldSlideCards
      this.oldSlideCards = z

    } else {

      this.oldSlideCards.forEach(e => e.remove())
      this.cards.push(...this.oldSlideCards)

      this.oldSlideCards     = this.currentSlideCards
      this.currentSlideCards = this.cards.splice(0, 3)

      const nextElements = nextSlideElement.children
      for (let i = 0; i < nextElements; i++) nextElements[i].remove()

      nextSlideElement.append(...this.currentSlideCards)

    }
    this.slideLeftElement.addEventListener('transitionend', rightTransitionendHandler.bind(this))
    this.slideLeftElement.classList.add('slider__slide--transition')
    this.slideLeftElement.classList.add('slider__slide--shift_right')

    this.previousSlideDirection = this.constructor.DIRECTION_LEFT
  }

}

module.exports.Slider = Slider