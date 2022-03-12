require('dotenv').config()

// const PROTOCOL = process.env.PROTOCOL
// const APPID = process.env.APPID
// const BASE_URL = process.env.BASE_URL
// const LENGUAGE = process.env.LENGUAGE
// const UNITS = process.env.UNITS

//operador de desestruturação

const { PROTOCOL, BASE_URL, UNITS, LANGUAGE, APPID, Q } = process.env

// const url = PROTOCOL + "://" + ...
const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&q=${Q}`

console.log(url)