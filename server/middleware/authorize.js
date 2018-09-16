const Token = require('../common/mongoose').Token;
function authorize(req, res, next) {
  if (req.cookies.y_token) {
    Token.findOne({token: req.cookies.y_token}, (err, token) => {
      if (token) {
        req.user = token.user
      }
      next()
    })
  } else {
    next()
  }
}
module.exports = authorize
