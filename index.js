const CardanoV4 = require('@emurgo/cardano-serialization-lib-nodejs')
const nacl = require('./nacl-fast') // comment me

const base58 = 'DdzFFzCqrht34sAkDJ1LQK4Ee98AkizbWKs5V3zmiCweGaDZ4kjxtGBkF4VQWZX9VMcMmfrKrd18fotFicnj1NTVEz6ZxoTKktMgt4CU'

console.log(
  CardanoV4.ByronAddress.from_base58(base58).to_bytes().length,
)
