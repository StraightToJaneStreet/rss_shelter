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
    this.createPopup(params)
    this.element.addEventListener('click', this.showPopup.bind(this))
  }

  showPopup() {
    this.popup.classList.add('popup--visible')
  }

  closePopup() {
    this.popup.classList.remove('popup--visible')
  }

  createPopup(params) {
    this.popup = document.createElement('div')
    this.popup.classList.add('popup')

    const popupHCenter = document.createElement('div')
    popupHCenter.classList.add('popup__hcenter') 
    this.popup.append(popupHCenter)
    this.popup.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.closePopup()
    })

    const popupWrapper = document.createElement('div')
    popupWrapper.classList.add('popup__wrapper')
    popupHCenter.append(popupWrapper)

    const popupContent = document.createElement('div')
    popupContent.classList.add('popup__content')
    popupWrapper.append(popupContent)

    const buttonClose = document.createElement('button')
    buttonClose.classList.add('popup__button')
    popupContent.after(buttonClose)
    buttonClose.addEventListener('click', this.closePopup.bind(this))

    const buttonImg = document.createElement('img')
    buttonImg.src = './assets/icons/popup-close.svg'
    buttonClose.append(buttonImg)

    const petView = document.createElement('div')
    petView.classList.add('pet-view')
    popupContent.append(petView)

    const petViewImg = document.createElement('div')
    petViewImg.classList.add('pet-view__img')
    petView.append(petViewImg)

    const petViewImgInner = document.createElement('img')
    petViewImgInner.src = params.img
    petViewImg.append(petViewImgInner)

    const petViewDesc = document.createElement('div')
    petViewDesc.classList.add('pet-view__description')
    petView.append(petViewDesc)

    const petViewTitle = document.createElement('h3')
    petViewTitle.classList.add('pet-view__title')
    petViewTitle.innerText = params.name

    const petViewSubtitle = document.createElement('h4')
    petViewSubtitle.classList.add('pet-view__subtitle')
    petViewSubtitle.innerText = params.breed

    const petViewText = document.createElement('p')
    petViewText.classList.add('pet-view__text')
    petViewText.innerText = params.description

    const petViewDetails = document.createElement('ul')
    petViewDetails.classList.add('pet-view__details')

    const [age, inoculations, diseases, parasites ] =
      [ [ document.createElement('li'), 'Age', params.age ]
      , [ document.createElement('li'), 'Inoculations', params.inoculations.join(', ') ]
      , [ document.createElement('li'), 'Diseases', params.diseases.join(', ') ]
      , [ document.createElement('li'), 'Parasites', params.parasites.join(', ') ]
      ]
      .map(([el, name, value]) => {
        const title = document.createElement('span')
        title.innerText = `${name}: `
        const valueElement = document.createTextNode(value)
        el.append(title, valueElement)
        return el
      })

    age.classList.add('pet-view__detail', 'pet-view__detail--age')
    inoculations.classList.add('pet-view__detail', 'pet-view__detail--inoculations')
    diseases.classList.add('pet-view__detail', 'pet-view__detail--diseases')
    parasites.classList.add('pet-view__detail', 'pet-view__detail--parasites')
    petViewDetails.append(age, inoculations, diseases, parasites)
    petViewDesc.append(petViewTitle, petViewSubtitle, petViewText, petViewDetails)

    document.body.append(this.popup)
  }

  getElement() { return this.element }
}

module.exports.PetCard = PetCard