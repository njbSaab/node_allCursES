const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const path = require('path')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
mongoose.set('strictQuery', false);

app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)


async function start() {
   try {
      await mongoose.connect('mongodb+srv://nj:1234@cluster0.kgw206c.mongodb.net/todos', {
         useNewUrlParser: true,
      })
      app.listen(PORT, () => {
         console.log('Server has been started...');
      })
   }catch (e) {
      console.log(e);
   }
}

start()