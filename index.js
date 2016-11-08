const nfc = require('nfc').nfc
const util = require('util')

console.log('nfc.version(): ' + util.inspect(nfc.version(), { depth: null }))
    // { name: 'libfnc', version: '1.7.0' }
console.log('nfc.scan(): ' + util.inspect(nfc.scan(), { depth: null }))
    // { 'pn53x_usb:160:012': { name: 'SCM Micro / SCL3711-NFC&RW', info: { chip: 'PN533 v2.7', ... } } }
let device = new nfc.NFC()

device.on('read', tag => {
  if ((!!tag.data) && (!!tag.offset)) console.log(util.inspect(nfc.parse(tag.data.slice(tag.offset)), { depth: null }))
  console.log(tag)
}).on('error', err => {
  console.log(err)
}).start()
