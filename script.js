setInterval(mecanismo, 1000)
const ponteiroHora =document.querySelector('[ponteiro-hora]')
const ponteiroMinuto =document.querySelector('[ponteiro-minuto]')
const ponteiroSegundo =document.querySelector('[ponteiro-segundo]')

function mecanismo() {
    const horaAtual = new Date();
    const segundos =horaAtual.getSeconds() / 60;
    const minutos = (segundos + horaAtual.getMinutes()) / 60;
    const horas = (minutos + horaAtual.getHours()) / 12;

    giro(ponteiroSegundo, segundos);
    giro(ponteiroMinuto, minutos);
    giro(ponteiroHora, horas);
    
}

function giro (elemento, grauDeGiro){
    elemento.style.setProperty('--rotacao', grauDeGiro * 360)
}

function calendario () {
    const tempo = new Date ();
    const dia = tempo.getDate();
    const mes = tempo.getMonth();
       

    const div = document.getElementById('dia1');
    const div2 = document.getElementById('mes1');
    
    div.innerHTML = dia;
    div2.innerHTML = ('0'+ (mes+1));
}

mecanismo();
calendario();