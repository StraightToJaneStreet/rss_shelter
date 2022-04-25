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
    document.body.classList.add('body--no-scroll')

    if (this.topWhenOpened) {
      window.scrollTo(0, 0)
    }

    this.opened = true
  }

  close() {
    this.overlayElement.classList.remove(this.overlayOpenedClass)
    this.buttonElement.classList.remove(this.buttonRotatedClass)
    document.body.classList.remove('body--no-scroll')
    this.opened = false
  }

  toggle() {
    if (this.opened) { this.close() } else { this.open() }
  }

}

module.exports.MobileMenu = MobileMenu