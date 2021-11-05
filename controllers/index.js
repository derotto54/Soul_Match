const router = require('express').Router();
const {Category, Hobby }= require('../models')


// //HTML routes
router.get('/',(req,res) =>res.render('index'))
router.get('/name',(req,res) =>res.render('name'))
router.get('/birthday',(req,res) =>res.render('birthday'))
router.get('/setupacc',(req,res) =>res.render('setupAcc'))
router.get('/questions',(req,res) =>res.render('questions'))
router.get('/categories', async (req,res) =>{
  const foundCategories = await Category.findAll()
  
  const categories = foundCategories.map(category => category.get({ plain: true }))
  

  res.render('categories', {categories})
})
router.get('/categories/:id', async (req,res)=>{
  console.log('test')
  const id =  req.params.id
  const foundCategory = await Category.findByPk(id,{include: Hobby})
const category = foundCategory.get({ plain: true });
console.log(category)
  res.render('hobbies', {category})
})


module.exports = router;
