const router = require('express').Router();
const session = require('express-session');
const {Category, Hobby,User }= require('../models')
const faker = require("faker");

// //HTML routes
router.get('/',(req,res) =>res.render('index'))
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
  res.render('hobbies', {category})
})

//USER ROUTES
//post routes
router.post('/api/user/setupacc', async (req,res)=>{
  const newUserAcc= req.body
  const newUser = await User.create({
   name: newUserAcc.name,
   email: newUserAcc.email,
   password: newUserAcc.password,
   image:  faker.internet.avatar()
 })
 const responseUser = await User.findByPk(newUser.id,{
  attributes: { exclude: ['password']}})
  res.json(responseUser)
})



//post
//api routes
router.post('/api/savehobbies', async (req,res)=>{
  const userId = 1
  const hobbyId = req.body.hobby
  const foundHobby= await Hobby.findByPk(hobbyId)
  let user = await User.findByPk(userId,{include: Hobby})
  await user.addHobby(foundHobby)

  // refresh the user since we just added a hobby
  // and the old user doesn't have it since we loaded it before adding the new foundHobby
  user = await User.findByPk(1,{include: Hobby})

res.status(200).json(user.get({plain:true}))

})

module.exports = router;
