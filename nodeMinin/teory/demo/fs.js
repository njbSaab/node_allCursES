const fs = require('fs') //file system
const path = require('path')

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//    if(err){
//       throw err
//    }
//    console.log('папка создана');
// })


const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, "Hello nodeJS", err => {
//    if(err) {
//       throw err
//    }
//    console.log('файл создан'); //! если повторно создавать он перетирает первый и создает дубль с новым контентом

//    fs.appendFile(filePath, "\nHi my friend", err => {
//       if(err){
//          throw err
//       }
//       console.log('файл создан, изменения внесены');
//    })
// })

fs.readFile(filePath, 'utf-8', (err ,content) =>{
   if(err){
      throw err
   }
   // const data = Buffer.from(content)
   // console.log('Content: ', data.toString());
})