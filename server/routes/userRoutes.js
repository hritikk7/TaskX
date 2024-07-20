const express = require("express")
const router = express.Router


router.post("/login", userControllers.loginUser)
router.post("/register", userControllers.registerUser)


module.exports = router;