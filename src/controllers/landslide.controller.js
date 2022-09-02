import {
  selectAllLandSlidesAlert,
  deleteAlertFromTableById,
  addOccuredLandSlide,
} from "../services/landSlideService.js";

async function getAllLandSlidesAlert(req, res) {
  try {
    const response = await selectAllLandSlidesAlert();
    const result = res.status(200).json({
      message: "All landslide alerts are found",
      data: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `No LandSlides Alert Found Near Your Area`,
    });
  }
}

async function deleteAlertById(req, res) {
  const { id } = req.params;
  try {
    const response = await deleteAlertFromTableById(id);
    const result = res.status(200).json({
      message: "Landslide alert was found",
      data: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `No alert with id:  ${id} was found`,
    });
  }
}

async function postaLandSlide(req, res) {
  const landslide = req.body;
  try {
    const response = await addOccuredLandSlide(landslide);
    const result = res.status(200).json({
      data: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `Land slides with id: ${landslide.id} already exist. Add a different landSlide Notice`,
    });
  }
}

export { getAllLandSlidesAlert, deleteAlertById, postaLandSlide };
