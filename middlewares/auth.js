const {getUserBySessionId} = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next){
  const userUid = req.cookies?.uid;
  if(!userUid) return res.redirect('/login');
  const user = getUserBySessionId(userUid);
if(!user) return res.redirect("/login");
    req.user = user;
    next();

}

module.exports  = {
    restrictToLoggedinUserOnly,
}