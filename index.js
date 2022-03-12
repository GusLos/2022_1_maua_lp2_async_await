require('dotenv').config()
const axios = require('axios')

// const PROTOCOL = process.env.PROTOCOL
// const APPID = process.env.APPID
// const BASE_URL = process.env.BASE_URL
// const LENGUAGE = process.env.LENGUAGE
// const UNITS = process.env.UNITS

//operador de desestruturação

const { PROTOCOL, BASE_URL, UNITS, LANGUAGE, APPID, Q } = process.env

// const url = PROTOCOL + "://" + ...
const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&q=${Q}`

//Operação: 
//IO-Bound      ou      CPU-Bound
axios.get(url).then(res => {
    console.log(res.data)
    return res.data
}).then (res => {
    console.log(res.cnt)
    return res
    // algo parecido com inferno de call back
    // axios.get().then (() => {
    //     axios.get().then(() => {})
    // })
}).then (res => {
    //return res.list       ou
    return res['list']
})
.then (res => {
    for(let previsao of res){
        console.log(`
            ${new Date (+previsao.dt * 1000).toLocaleString},
            Min: ${previsao.main.temp_min}\u00B0C,
            Max: ${previsao.main.temp_max}\u00B0C,
            Hum: ${previsao.mais.humidity}%,
            ${previsao.weather[0].description}
        `)
    }
    
    return res

}).then(res => {
    //Desafio
    //exibir a quantidade de previsões que têm percepção humana de temperatura acima de 30°
    function filter (v, f) {
        let r = 0
        for (let i = 0; i < v.length; i++){
            if (+res[i].feels_like > 30){
                r++
            }
        }
        console.log(r)
    }
})



//console.log(url)