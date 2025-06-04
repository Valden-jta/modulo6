//?_________  Imports _________\\
const { Router } = require("express");
const router = Router();

//?_________  rutas y metodos _________\\
const photosCtrl = require("../controller/photos.controller");

// router.get("/", photosCtrl.getStart);
router.get("/photos/", photosCtrl.getPhotos);
router.post("/photos", photosCtrl.postPhotos);
router.put("/photos", photosCtrl.putPhotos);
router.delete("/photos", photosCtrl.delPhotos);

//?_________  Exports _________\\
module.exports = router;
