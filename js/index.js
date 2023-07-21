const submit = document.getElementById('submit')
const textError = document.getElementsByClassName('text-error')[0]
const inputError = document.getElementById('email')

let email = null



const submitForm = (event) => {
    event.preventDefault()
    email = inputError.value


    if (email.length > 0 && validEmail(email)) {
        localStorage.setItem('userEmail', email)
        textError.style.visibility = 'hidden'
        inputError.classList.remove('input-error')
        inputError.focus()
        window.location.href = 'suscribing.html'
    } else {
        textError.style.visibility = 'visible'
        inputError.classList.add('input-error')
        inputError.focus()
    }
}

const validEmail = (email) => {
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(email);

}

submit.addEventListener('click', submitForm)