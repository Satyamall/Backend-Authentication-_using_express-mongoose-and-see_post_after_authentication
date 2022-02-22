
const {body} = require('express-validator');

const validateSignUp = () =>([
    body("name")
    .not().isEmpty().withMessage("Name should not be empty!")
    .isLength({min: 3}).withMessage("Name Should be atleast 3 characters")
    .isString().withMessage("Name should be a String!"),
    body("email")
     .not().isEmpty().withMessage("Email should not be empty!")
     .isEmail().withMessage("Email should be valid email"),
    body("password")
    .not().isEmpty().withMessage("Password should not be empty!")
    .isLength({min: 6}).withMessage("Password should be at least 6 characters")
    .isString().withMessage("Password should be String!")]
)

module.exports = validateSignUp;