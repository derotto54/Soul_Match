const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};
const withoutAuth = (req,res,next) =>{
  if(req.session.loggedIn) {
    res.redirect('/people')
  } else {
    next();
  }
}

module.exports = {
  withAuth,
  withoutAuth
}

