const buttonElement = document.querySelector('.mood-btn')
const body = document.documentElement
const moodContainer = document.querySelector('.mood-container')

buttonElement.addEventListener('click', () => {
    body.toggleAttribute('mood')
    let value = parseInt(getComputedStyle(moodContainer).getPropertyValue('--rotation'))

    moodContainer.style.setProperty('--rotation', `${value += 180}deg`)
})