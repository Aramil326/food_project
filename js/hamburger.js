
document.addEventListener("DOMContentLoaded", () => {
  const headerHamburgerOpen = document.querySelector(".header_hamburger"),
    headerHamburgerClose = document.querySelector(".header_hamburger_close"),
    headerNav = document.querySelector(".header_nav")
  headerHamburgerOpen.addEventListener('click', e => {
    e.preventDefault()
    headerNav.style.display = 'flex';
    headerHamburgerClose.style.display = 'block';
  })

  headerHamburgerClose.addEventListener('click', e => {
    e.preventDefault()
    headerNav.style.display = 'none';
    headerHamburgerClose.style.display = 'none';
  })
})