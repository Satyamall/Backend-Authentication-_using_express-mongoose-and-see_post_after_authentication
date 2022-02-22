

const {body} = require('express-validator');

const validateSignIn = () =>([
    body("email")
     .not().isEmpty().withMessage("Email should not be empty!")
     .isEmail().withMessage("Email should be valid email"),
    body("password")
    .not().isEmpty().withMessage("Password should not be empty!")
    .isLength({min: 6}).withMessage("Password should be at least 6 characters")
    .isString().withMessage("Password should be String!")]
)

module.exports = validateSignIn;