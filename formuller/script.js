

const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

        if( this.getAttribute('class').match(/erro/) ) {
            return false;
        }
        
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if(!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });


function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();



        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento do campo numérico";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento do campo de Email";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

//Validar uma entrada de dois caracteres que não podem ser numeros e ser mais que dois caracteres

function ValidaUF(elemento){
    elemento.addEventListener('focusout', function(event) {
      
        event.preventDefault();

        const UfValido = /[A-U]{2}$/i;

        

        if(this.value.match(UfValido)){
            document.querySelector('.mensagem').innerHTML = "sucess";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }else{
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento do UF";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
} 

function ValidaCep(elemento){
    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

       const CepValido = /^[0-9]{5}-[0-9]{3}$/;

        

        if(this.value.match(CepValido)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }else{
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento do CEP";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
} 


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposUf = document.querySelectorAll('input.uf');
let camposCep = document.querySelectorAll('input.cep');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for( let emFoco of camposUf) {
    ValidaUF(emFoco);
}

for( let emFoco of camposCep) {
    ValidaCep(emFoco);
}


