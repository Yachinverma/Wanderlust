const express = require("express");
const router = express.Router({ mergeParams: true });
const WrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedin,
  isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//Reviews
//post Route
router.post(
  "/",
  isLoggedin,
  validateReview,
  WrapAsync(reviewController.createReview)
);

//Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedin,
  isReviewAuthor,
  WrapAsync(reviewController.destroyReview)
);

module.exports = router;
