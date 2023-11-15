const fields = document.querySelectorAll("[required]")

//console.log(fields)

function customValidation(event) {
    const field = event.target

    //trocar mensagem de [required]
    field.setCustomValidaty("Esse campo é obrigatorio")
}

for( field of fields ){
    field.addEventListener("invalid", customValidation)
}

























document.querySelector("form")
.addEventListener("submit",event => {
    console.log("enviar o formulario")

    //nao vai enviar o formulario
    event.preventDefault() 
})