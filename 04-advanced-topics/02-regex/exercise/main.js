function validateEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const err = new Error('E-mail inválido');
        err.input = 'email';
        throw err
    } 
}

function validatePassword(password) {
    if (!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)[^\s]{8,}$/)) {
        const err = new Error('Senha inválida');
        err.input = 'password';
        throw err
    }
}

function resetFormStyles() {
    Object.entries(userInputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#${key}-error`).textContent = ''
    })
}

const userInputs = {}

userInputs.email = document.querySelector('#email');
userInputs.password = document.querySelector('#password');

const form = document.querySelector('form');


form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    resetFormStyles()
    
    try {
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')
        validatePassword(userInputs.password.value)
        userInputs.password.classList.add('success')
    } catch (err) {
        userInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})
