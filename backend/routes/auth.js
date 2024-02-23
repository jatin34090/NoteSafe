const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');


const JWT_SeCRET = 'JAtinisagoodboy'

//Route 1. Create a user using: POST "/api/auth/createuser". No Login required

router.post('/createuser', [
  body('name', 'Enter a valid Name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast minmum 5 characters').isLength({ min: 5 })
], async (req, res) => {
  let success = false;
  //  If there are error, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  // Check wheather the user with this email exists already
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success, error: "Sorry a user with this email already exixts" })
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    // Create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SeCRET);
    // res.json(user)
    success = true;
    res.json({ success, authtoken })
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
  // .then(user => res.json(user)).
  // catch(err=> {console.log(err)
  // res.json({error:"Please enter a unique value for email",message:err.message})});
  // console.log(req.body);
  // const user = User(req.body);
  // user.save()
})


//Route 2. Authenticate a user using: POST "/api/auth/login". No Login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank ').exists(),
], async (req, res) => {
  let success = false;


  //  If there are error, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Plese try to login with the correct credentials" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ success, error: "Plese try to login with the correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SeCRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.log(error);
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }

})

//Route 3. Get loggedin user details using: POST "/api/auth/getuser". No Login required
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }

})
module.exports = router