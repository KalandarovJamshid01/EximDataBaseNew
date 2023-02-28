const router = require("express").Router();
const Photo = require("./../controller/photo");

router.route("/").get(Photo.getAllphotos).post(Photo.addphoto);

router
  .route("/:id")
  .get(Photo.getPhotoWithUserAndComment)
  .patch(Photo.updatePhoto)
  .delete(Photo.deletePhoto);

module.exports = router;
