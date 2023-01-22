const path = require('path')

console.log('Name faile: ', path.basename(__filename));

console.log('Name dirictory: ', path.dirname(__filename));

console.log('расширение файла: ', path.extname(__filename));

console.log('Parse : ', path.parse(__filename).name);

console.log(path.join(__dirname, 'server', 'index.html'));




