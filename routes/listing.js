const express = require("express");
const router = express.Router();
const WrapAsync = require("../utils/wrapAsync.js");
// const Listing = require("../models/listing.js");
const {isLoggedin,isOwner,validateListing} =require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload  = multer({storage});

router.route("/")
.get(WrapAsync(listingController.index))
.post(isLoggedin,upload.single('listing[image]'),validateListing,WrapAsync(listingController.createListing));
// .post(upload.single('listing[image]'),(req,res)=>{
//     res.send(req.file);
// });

//New Route
router.get("/new",isLoggedin,listingController.renderNewForm);

//Edit Route
router.get("/:id/edit",isLoggedin,isOwner,WrapAsync(listingController.renderEditForm ));

router.route("/:id")
.get(WrapAsync(listingController.showListing))
.put(isLoggedin,isOwner,upload.single('listing[image]'),validateListing,WrapAsync(listingController.updateListing))
.delete(isLoggedin,isOwner,WrapAsync(listingController.destroyListing));

// //index Route
// router.get("/",WrapAsync(listingController.index));

// //New Route
// router.get("/new",isLoggedin,listingController.renderNewForm);

// //show Route
// router.get("/:id",WrapAsync(listingController.showListing));

// //Create route
// router.post("/",validateListing,isLoggedin,WrapAsync(listingController.createListing));

// //Edit Route
// router.get("/:id/edit",isLoggedin,isOwner,WrapAsync(listingController.renderEditForm ));

// //update Route
// router.put("/:id",validateListing,isLoggedin,isOwner,WrapAsync(listingController.updateListing));

// //Delete Route
// router.delete("/:id",isLoggedin,isOwner,WrapAsync(listingController.destroyListing));

module.exports = router;
