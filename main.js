
//aufgabe 1
function convertir(){
    var valore = parseInt(document.getElementById('valor').value);
    var resultado = 0;
    var dollar = 4.11;
    var euro = 4.85;
    if(document.getElementById('uno').checked){
        resultado = valore / dollar;
        alert('El Cambio de Dollar a Euro es: $ ' + resultado.toFixed(2));
    }
    else if(document.getElementById('dos').checked){
        resultado = valore / euro;
        alert("el cambio de Euros a Dollar es: € " + resultado.toFixed(2));
    }
    else {
        alert('tienes que complementar todos los elementos');

    }

}
//aufgabe 2
// hiermit könnte man nachmodus einstellen bei webseiten- Weiss/Schwar
var btn = document.getElementById('btn'),
    caja = document.getElementById('caja'),
    contador = 0;
function cambio(){
    if(contador==0){
        caja.classList.add('azul');
        contador = 1;
    }else {caja.classList.remove('azul');
            contador = 0;
          }
}


btn.addEventListener('click',cambio, true);

//negst Practic- aufgabe 3

const button = document.querySelector('#btn1');
button.addEventListener("click", saludar);
function saludar(){
    alert('Hola ');
    button.removeEventListener("click", saludar);
}


//new practic

//Uhr settinterval 

const horaContainer = document.querySelector('.hora');

const actualizarHora = setInterval(function(){
    const date = new Date();

horaContainer.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} `;

},1000)

//here start th intent autotyping

var typed = new Typed(".auto-type", {
    strings: ["Coding", "Learning", "Reading"],
    typeSpeed: 150,
    backSpeed:150,
    loop:true

});

//second box

var typed = new Typed(".auto-type1", {
    strings: ["Hungry", "Jogging", "serching"],
    typeSpeed: 150,
    backSpeed:150,
    loop:true

});