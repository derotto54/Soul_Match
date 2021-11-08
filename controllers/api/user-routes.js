const router = require('express').Router();
const { User,Hobby, UserHobby } = require('../../models');
const faker = require("faker");
const {withAuth,withoutAuth }= require('../../utils/auth')

//CREATE a new user
//api/users/setupacc
router.post('/setupacc', async (req,res)=>{

  try  {
     const newUserAcc= req.body
     const newUser = await User.create({
       name: newUserAcc.name,
       email: newUserAcc.email,
       password: newUserAcc.password,
       image:  faker.internet.avatar(),
       story:faker.lorem.words()
  });
   // Set up sessions with a 'loggedIn' variable set to `true`
     req.session.save(async () => {
       req.session.loggedIn = true;
       req.session.userId = newUser.id
       const responseUser = await User.findByPk(newUser.id,{
         attributes: { exclude: ['password']}})
       res.json(responseUser);
 });
  } catch (err) {
   console.log(err);
   res.status(500).json(err);
  }
 })
 //Login
 //api/users/login
 router.post('/login', async (req, res) => {
   try {
     const dbUserData = await User.findOne({
       where: {
         email: req.body.email,
       },
     });
 
     if (!dbUserData) {
       res
         .status(400)
         .json({ message: 'Incorrect email or password. Please try again!' });
       return;
     }
 
     const validPassword = await dbUserData.checkPassword(req.body.password);
 
     if (!validPassword) {
       res
         .status(400)
         .json({ message: 'Incorrect email or password. Please try again!' });
       return;
     }
 
     // Once the user successfully logs in, set up the sessions variable 'loggedIn'
     req.session.save(() => {
       req.session.loggedIn = true;
       req.session.userId = dbUserData.id
 
       res
         .status(200)
         .json({ user: dbUserData, message: 'You are now logged in!' });
     });
   } catch (err) {
     console.log(err);
     res.status(500).json(err);
   }
 });
 
 //api/users/logout
 router.post('/logout', (req, res) => {
   // When the user logs out, destroy the session
   if (req.session.loggedIn) {
     req.session.destroy(() => {
       res.status(200).json({message:'ok'});
     });
   } else {
     res.status(404).end();
   }
 });

 // save all user's hobbies
 //api/users/savehobbies
 router.post('/savehobbies', async (req,res)=>{
  const userId = req.session.userId
  const hobbyId = req.body.hobby
  const foundHobby= await Hobby.findByPk(hobbyId)
  let user = await User.findByPk(userId,{include: Hobby})
  await user.addHobby(foundHobby)

  // refresh the user since just added a hobby
  // and the old user doesn't have it since loaded it before adding the new foundHobby
  user = await User.findByPk(1,{include: Hobby})

res.status(200).json(user.get({plain:true}))

})
router.post('/add-story',async (req,res)=>{
  const userId = req.session.userId
  const currentUser= await User.findByPk(userId)
  const story= req.body.story
  currentUser.story= story
  await currentUser.save()
res.status(200).send('Story added')
})
router.delete('/delete-hobby', async(req,res)=>{
  const userId = req.session.userId
  await UserHobby.destroy({
    where:{
     userId,
     hobbyId: req.body.id
    }
  })
  let user = await User.findByPk(userId,{include: Hobby})
  
  res.status(200).json(user.get({plain:true}))
})
 
 module.exports = router;