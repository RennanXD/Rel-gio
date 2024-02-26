const Horas = document.getElementById('horas');
const Minutos = document.getElementById('minutos');
const Segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let DateToday = new Date();
    let Hora = DateToday.getHours();
    let Minuto = DateToday.getMinutes();
    let Segundo = DateToday.getSeconds();
    
    if(Hora < 10 ){
        Hora = "0" + Hora;
    }

    if(Minuto < 10 ){
        Minuto = "0" + Minuto;
    }

    if(Segundo < 10 ){
        Segundo = "0" + Segundo;
    }

    Horas.textContent = Hora;
    Minutos.textContent = Minuto;
    Segundos.textContent = Segundo;
})

