const router = require('express').Router();
const {Category, Hobby, User }= require('../models')
const {withAuth,withoutAuth }= require('../utils/auth')
const sequelize = require('../config/connection');

//rememember to add loggedIN to get categories/hobbies/people/person/mypage

router.get('/',withoutAuth,(req,res) =>res.render('index'))
router.get('/setupacc',withoutAuth,(req,res) =>res.render('setupAcc'))
router.get('/login',withoutAuth, (req,res) =>res.render('login'))

//GET curent login user's data
router.get('/mypage', withAuth , async (req,res) =>{
  const user = await User.findByPk(req.session.userId, {include:Hobby})
  const serializeUser= user.get({plain:true})
  
  res.render('personalpage',{
    user:serializeUser,
  })
})

//GET all categories
router.get('/categories',withAuth, async (req,res) =>{
  const foundCategories = await Category.findAll()
  const categories = foundCategories.map(category => category.get({ plain: true }))
  res.render('categories', {
    categories,
    loggedIn: req.session.loggedIn})
})

//GET all hobbies belongs to that specific gallery
router.get('/categories/:id', withAuth, async (req,res)=>{
  const user = await User.findByPk(req.session.userId, {include: Hobby})
  const id =  req.params.id
  const foundCategory = await Category.findByPk(id,{include: Hobby})
  const category = foundCategory.get({ plain: true });
  res.render('hobbies', {
    category,
    user
  })
  console.log(category, user)
})

//GET one user for homepage /people

router.get('/people',withAuth, async (req,res)=> {
  const user = await User.findOne({
    order: sequelize.random(),
    include: Hobby
  })
  const serializeUser = user.get({plain:true})
  console.log(serializeUser)
 
 res.render('people',{
   user:serializeUser,})
})

module.exports= router