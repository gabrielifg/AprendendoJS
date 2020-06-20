// Code 121 --> Video 143
/*
    * Conteúdo: * Disparo de processos temporizados
*/

const schedule = require('node-schedule')
const tarefa = schedule.scheduleJob('*/5 * 14 * * 6', function (){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa.cancel()
    console.log('Canselando Tarefa 1!')
}, 20000)

// setImmediate -> um setTimeout com o temporizador zerado
// setTinterval -> disparo de uma função de tempos em tempos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 6)]
regra.hour = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})