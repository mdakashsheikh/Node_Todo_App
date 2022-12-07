const router = require('express').Router();

const todoItemsModel = require('../models/todoItems');


router.post('/form', async(req, res) => {
    try {
        const newItem = new todoItemsModel({
            item: req.body.item.trim()
        })
        const saveItem = await newItem.save()
        res.status(200).redirect('/')
    } catch (err) {
        res.json(err);
    }
});

router.get('/', async(req, res) =>{
    try {
        const allTodoItems = await todoItemsModel.find({}).sort('-date');
        res.render('index', {allTodoItems})
    } catch (err) {
        res.json(err);
    }
});

router.get('/:id/delete', async(req, res) =>{
    const todo = await todoItemsModel.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router;