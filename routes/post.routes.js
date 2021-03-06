const { Router } = require('express');
const router = new Router();
const routeGuard = require('../configs/route-guard.config');
const fileUploader = require("../configs/cloudinary")

const {
        newPostProcess,
        newPostView,
        allPosts,
        detailPost,
        newCommentProcess} = require("../controllers/posts")


//C
router.get("/newpost", routeGuard, newPostView)
router.post("/newpost", routeGuard, fileUploader.single("image"), newPostProcess)

//R

router.get("/posts", allPosts)

router.get("/posts/:id", detailPost)
router.post("/posts/:id", routeGuard, fileUploader.single("image"), newCommentProcess)


module.exports = router