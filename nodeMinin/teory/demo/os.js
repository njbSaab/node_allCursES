const os = require('os')

console.log('Операционная система: ', os.platform());
console.log('процессор: ', os.arch());
console.log('Инфорамация про процкссрп: ', os.cpus());
console.log('Cвободная память: ', os.freemem());
console.log('память: ', os.totalmem());
console.log('домашняя дириктория: ', os.homedir());
console.log('включен: ', os.uptime());
