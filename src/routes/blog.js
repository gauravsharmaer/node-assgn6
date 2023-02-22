const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here

const {updateblog,deleteblog,createblog, getblog,getblogs }=require("../controllers/Blogcontrollers");

//get all blogs//
router.get("/",getblogs)


//get single blog//
router.get("/:id",getblog)

//post a blog//
router.post('/',createblog)

//update a blog//
router.put("/:id",updateblog)


//delete a blog//
router.delete("/:id",deleteblog)

module.exports = router;