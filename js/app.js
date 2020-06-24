/** Variables */
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')
const btnEnviar = document.querySelector('#enviar')
const formularioEnviar = document.querySelector('#enviar-mail')
const btnReset = document.querySelector('#resetBtn')

/** Event Listener */
cargarEventListener()

function cargarEventListener() {
  // Inicio de app y deshabilitar submit
  document.addEventListener('DOMContentLoaded', inicioApp)
  // Campos del formulario
  email.addEventListener('blur', validarCampo)
  asunto.addEventListener('blur', validarCampo)
  mensaje.addEventListener('blur', validarCampo)
  // Btn eniar el submit
  formularioEnviar.addEventListener('submit', enviarEmail)
  // Btn reset
  btnReset.addEventListener('click', resetFormulario)
}

/** Funciones */

function inicioApp() {
  btnEnviar.disabled = true
}
// Valida que el campo no este vacio
function validarCampo() {
  // Se valida longitud del texto y que no este vacio
  validarLongitud(this)
  // Validar Email
  if (this.type === 'email') {
    validarEmail(this)
  }

  let errors = document.querySelectorAll('.error')
  if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
    if (errors.length === 0) {
      btnEnviar.disabled = false
    }
  }
}
function validarLongitud(campo) {
  if (campo.value.length) {
    campo.style.borderBottomColor = 'green'
    campo.classList.remove('error')
  } else {
    campo.style.borderBottomColor = 'red'
    campo.classList.add('error')
  }
}
function validarEmail(campo) {
  const mensaje = campo.value
  if (mensaje.indexOf('@') !== -1) {
    campo.style.borderBottomColor = 'green'
    campo.classList.remove('error')
  } else {
    campo.style.borderBottomColor = 'red'
    campo.classList.add('error')
  }
}
function enviarEmail(e) {
  // Spinner al presionar enviar
  const spinnerGif = document.querySelector('#spinner')
  spinnerGif.style.display = 'block'
  // Gif que envia Email
  const enviado = document.createElement('img')
  enviado.src = 'img/mail.gif'
  enviado.style.display = 'block'
  // Ocultar Spinner y mostrar Gif enviado
  setTimeout(() => {
    spinnerGif.style.display = 'none'
    document.querySelector('#loaders').appendChild(enviado)
    setTimeout(() => {
      enviado.remove()
      formularioEnviar.reset()
    }, 5000);
  }, 3000)

  e.preventDefault()
}
function resetFormulario(e) {
  formularioEnviar.reset()

  e.preventDefault()
}
