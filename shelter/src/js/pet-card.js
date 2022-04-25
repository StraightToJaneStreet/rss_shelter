class PetCard {

  constructor(params) {
    this.element = document.createElement('div')
    this.element.classList.add('pet-card')

    const cardImg = document.createElement('img')
    cardImg.classList.add('pet-card__photo')
    cardImg.src = params.img

    this.element.append(cardImg)

    const cardName = document.createElement('p') 
    cardName.classList.add('pet-card__name') 
    cardName.innerText = params.name

    this.element.append(cardName)

    const cardButtonWrapper = document.createElement('div')
    cardButtonWrapper.classList.add('pet-card__button')

    const cardButton = document.createElement('button')
    cardButton.innerText = 'LearnMore'
    cardButton.classList.add('button', 'button--inverted', 'pet-card__button')

    cardButtonWrapper.append(cardButton)

    this.element.append(cardButtonWrapper)

  }

  getElement() { return this.element }
}

module.exports.PetCard = PetCard