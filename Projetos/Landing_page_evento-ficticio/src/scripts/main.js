AOS.init();

const dataDoEvento = new Date ("Dec 22 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime(); 

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    if (distanciaAteOEvento > 0) {
        const dias = 1000*60*60*24;
        const horas = 1000*60*60;
        const minutos = 1000*60;
        const segundos = 1000;
    
        const diasAteOEvento = Math.floor(distanciaAteOEvento / dias);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % dias) / horas);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horas) / minutos);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutos) / segundos);
    
        console.log(diasAteOEvento);
        console.log(horasAteOEvento);
        console.log(minutosAteOEvento);
        console.log(segundosAteOEvento);
    
        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    }
    else {
        document.getElementById('contador').innerHTML = `<br> Sinto muito, o evento já aconteceu <br> fique de olhos nas próximas datas`;
    }


}, 1000);