import './scss/style.scss'

class MobileMenu {

  constructor({overlay, button, opened} = { opened: false } ) {

    this.opened = opened

    this.overlayOpenedClass = 'mobnav-overlay--visible'
    this.buttonRotatedClass = 'mobnav-btn--rotated'

    this.overlayElement = overlay 
    this.buttonElement = button

    this.setupHandlers()
  }

  setupHandlers() {
    this.buttonElement.addEventListener('click', this.toggle.bind(this))
    this.overlayElement.addEventListener('click', this.handleOverlayClick.bind(this))
  }

  handleOverlayClick(e) {
    if (e.target == e.currentTarget) {
      this.close() 
    }
  }

  open() {
    console.log('Close menu')
    this.overlayElement.classList.add(this.overlayOpenedClass)
    this.buttonElement.classList.add(this.buttonRotatedClass)
    this.opened = true
  }

  close() {
    console.log('Open menu')
    this.overlayElement.classList.remove(this.overlayOpenedClass)
    this.buttonElement.classList.remove(this.buttonRotatedClass)
    this.opened = false
  }

  toggle() {
    if (this.opened) {
      this.close()
    } else {
      this.open()
    }
  }

}

document.addEventListener('DOMContentLoaded', () => {

  const mobileMenuOverlayElement = document.getElementById('mobnav-overlay')
  const mobileMenuButtonElement  = document.getElementById('mobnav-btn')

  console.log('mobileMenuOverlayElemnt', mobileMenuOverlayElement)
  console.log('mobileMenuButtonElement', mobileMenuButtonElement)

  const menu = new MobileMenu({
    overlay: mobileMenuOverlayElement,
    button: mobileMenuButtonElement
  })

})
