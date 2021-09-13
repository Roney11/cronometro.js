function trocarBtn() {
    const mudaCorIniciar = document.querySelector('.iniciar')
    mudaCorIniciar.addEventListener('click', mudaCor)

    function mudaCor() {

        //pegar p ultimo elemento da class 'btn'
        const btn = document.querySelector('.btn').lastElementChild 
        //verificar as classes que contém no 'btn'
        const classesBtn = btn.classList
        //verificar se contém a classe 'ativo'
        const result = classesBtn.contains('ativo')
        //adicionar ou remover a classe ativo ao click
        mudaCorIniciar.classList.toggle('ativo')

        if(result) {
            mudaCorIniciar.innerHTML = 'Iniciar'
        }else{
            mudaCorIniciar.innerHTML = 'Parar'
        }
    
    }
}
trocarBtn()


function cronometro() {

    let horas = 0
    let minutos = 0
    let segundos = 0
    let tempo = 16.5 //quantos milesimos valem 1 segundo
    let cronometro


    const iniciar = document.querySelector('.iniciar')
    iniciar.addEventListener('click', start)

    function start() {

        //pegar p ultimo elemento da class 'btn'
        const btn = document.querySelector('.btn').lastElementChild 
        //verificar as classes que contém no 'btn'
        const classesBtn = btn.classList
        //verificar se contém a classe 'ativo'
        const result = classesBtn.contains('ativo')

        if(result) {
            cronometro = setInterval(() => {timer()}, tempo)
        }else{
            pause()
        }
        
    }

    function pause() {
        clearInterval(cronometro)
    }


    document.querySelector('.voltar').addEventListener('click', stop)
    
    function stop() {
        clearInterval(cronometro)
        horas = 0
        minutos = 0
        segundos = 0
        document.querySelector('.cronometro').innerHTML = '00:00:00'
        document.querySelector('.iniciar').classList.remove('ativo')
    }

    function timer() {
        segundos++

        if(segundos == 60) {
            segundos = 0
            minutos++

            if(minutos == 60) {
                minutos = 0
                horas++
            }
        }

        const formato = (horas < 10 ? '0'+ horas : horas) + ':' + (minutos < 10 ? '0'+minutos :minutos) + ':' + (segundos < 10 ? '0'+segundos : segundos)
        document.querySelector('.cronometro').innerHTML = formato
    }
}
cronometro()