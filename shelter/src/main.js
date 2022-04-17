import './scss/style.scss'

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello world")

  const mobnavBtnOpen  = document.getElementById("mobnav-btn-open")
  const mobnavOverlay  = document.getElementById("mobnav-overlay")
  const mobnavBtnClose = document.getElementById("mobnav-btn-close")
  console.log("open", mobnavBtnOpen)
  console.log("close", mobnavBtnClose)
  console.log("open", mobnavOverlay)


  mobnavBtnOpen.addEventListener("click", (ev) => {
    mobnavOverlay.classList.toggle("mobnav-overlay--visible")
  })

  mobnavBtnClose.addEventListener("click", (ev) => {
    console.log('test')
    mobnavOverlay.classList.toggle("mobnav-overlay--visible")
  })

})