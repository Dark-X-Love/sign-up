const back = document.getElementById('back')
const emailText = document.getElementsByClassName('email-text')[0]

document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('userEmail')
    emailText.textContent = email
})


const backHome = (event) => {
    event.preventDefault()
    localStorage.removeItem('userEmail')
    window.location.href = 'index.html'
}

back.addEventListener('click', backHome)