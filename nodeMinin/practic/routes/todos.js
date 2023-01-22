const {Router} = require('express')
const Todo = require('../models/Todo')
const router = Router()

router.get('/', async (req, res) =>{
   const todos = await Todo.find({})

   res.render('index', {
      title: 'TODOS list',
      isIndex: true,
      todos
   })
})
router.get('/create', (req, res) =>{
   res.render('create', {
      title: 'create TODOS',
      isCreate: true,
   })
})

router.post('/create', async(req, res)=> {
   const todo = new Todo({
      title: req.body.title
   })

   await todo.save()
   res.redirect('/')
})

router.post('/complete', async(req, res)=>{
   const todo = await Todo.findById(req.body.id)

   todo.completed = !!req.body.completed
   await todo.save()

   res.redirect('/')
})
module.exports = router 