class Catalog {
  constructor(pages, root) {
    console.log(pages)
    this.root = root
    this.pages = pages.map(items => {
      const page = document.createElement('div')
      page.classList.add('catalog__grid')
      page.append(...items.map(item => {
        const container = document.createElement('catalog__item')
        container.append(item)
        return container
      }))
      return page
    })
    this.root.prepend(...this.pages)

    this.currentPageCounter = root.querySelector('.js-current-page')

    this.firstPageButton = root.querySelector('.js-first-page-button')
    this.prevPageButton = root.querySelector('.js-prev-page-button')
    this.nextPageButton = root.querySelector('.js-next-page-button')
    this.lastPageButton = root.querySelector('.js-last-page-button')

    this.firstPageButton.addEventListener('click', () => { this.setPage(0) })
    this.lastPageButton.addEventListener('click', () => { this.setPage(this.pages.length - 1) })
    this.prevPageButton.addEventListener('click', this.prevPage.bind(this))
    this.nextPageButton.addEventListener('click', this.nextPage.bind(this))

    this.setPage(0)
  }

  setPage(index) {
    if (this.currentPage != undefined) {
      this.currentPage.classList.remove('catalog__grid--visible')
    }

    this.currentPage = this.pages[index]
    this.currentPageIndex = index
    this.currentPageCounter.innerText = this.currentPageIndex + 1
    this.currentPage.classList.add('catalog__grid--visible')
    this.updateNavState()
  }

  updateNavState() {
    if (this.currentPageIndex == 0) {
      this.prevPageButton.classList.add('pagination__button--disabled')
      this.firstPageButton.classList.add('pagination__button--disabled')
    } else {
      this.prevPageButton.classList.remove('pagination__button--disabled')
      this.firstPageButton.classList.remove('pagination__button--disabled')
    }
    if (this.currentPageIndex == this.pages.length - 1) {
      this.nextPageButton.classList.add('pagination__button--disabled')
      this.lastPageButton.classList.add('pagination__button--disabled')
    } else {
      this.nextPageButton.classList.remove('pagination__button--disabled')
      this.lastPageButton.classList.remove('pagination__button--disabled')
    }

  }

  prevPage() {
    if (this.currentPageIndex == 0) { return }
    this.currentPageIndex -= 1
    this.currentPage.classList.remove('catalog__grid--visible')
    this.currentPage = this.pages[this.currentPageIndex]
    this.currentPage.classList.add('catalog__grid--visible')

    this.currentPageCounter.innerText = this.currentPageIndex + 1

    this.updateNavState()
  }

  nextPage() {
    if (this.currentPageIndex == this.pages.length - 1) { return }
    this.currentPageIndex += 1
    this.currentPage.classList.remove('catalog__grid--visible')
    this.currentPage = this.pages[this.currentPageIndex]
    this.currentPage.classList.add('catalog__grid--visible')

    this.currentPageCounter.innerText = this.currentPageIndex + 1
    this.updateNavState()
  }

}

module.exports.Catalog = Catalog