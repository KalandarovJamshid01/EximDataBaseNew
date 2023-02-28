const db = require("./../model/index");

const Photo = db.photos;

const addphoto = async (req, res, next) => {
  try {
    let data = {};
    const photo = await Photo.create(data);
    res.status(201).json(photo);
  } catch (error) {
    res.json(error);
  }
};

const getAllphotos = async (req, res, next) => {
  const photos = await Photo.findAll({});
  res.status(200).json(photos);
};
const getPhotoWithUserAndComment = async (req, res, next) => {
  let photo = await Photo.findAll({
    include: [
      { model: db.users, as: "user" },
      {
        model: db.comments,
        as: "comment",
        // include: [
        //   { model: ImagesModel }, // Join ImagesModel onto ProductImages (add aliases as needed)
        //   { model: ImageTypes }, // Join ImageTypes onto ProductImages (add aliases as needed)
        // ],
      },
    ],
  });

  res.status(200).json(photo);
};

const updatePhoto = async (req, res, next) => {
  try {
    const photo = await Photo.update(
      { image_url: "OKay okay okay" },
      { where: { id: 1 } }
    );
    res.status(203).json(photo);
  } catch (error) {
    res.status(404).json(error);
  }
};

const deletePhoto = async (req, res, next) => {
  try {
    await Photo.destroy({
      where: { id: 1 },
    });
    res.status(204).json("Deleted");
  } catch (error) {
    res.status(204).json(error);
  }
};

module.exports = {
  addphoto,
  getAllphotos,
  getPhotoWithUserAndComment,
  updatePhoto,
  deletePhoto,
};
