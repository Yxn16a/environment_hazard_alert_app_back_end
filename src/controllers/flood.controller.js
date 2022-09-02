import {
  addFloodsAlert,
  selectAllFloods,
  updateUseFloodsData,
} from "../services/floodService.js";

async function getAllFloods(req, res) {
  try {
    const response = await selectAllFloods();
    const result = res.status(200).json({
      message: "All Floods alert found successfully",
      data: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `No floods data was Found`,
    });
  }
}

async function postFloodAlert(req, res) {
  const params = req.body;
  try {
    const response = await addFloodsAlert(params);
    const result = res.status(200).json({
      data: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `Floods Alert with : ${params.id} already exist. Create a new alert `,
    });
  }
}

async function updateFloodAlert(req, res) {
  const params = req.body;
  try {
    const response = await updateUseFloodsData(params);
    const result = res.status(200).json({
      data: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `Floods Alert with : ${params.id} already exist. Create a new alert `,
    });
  }
}

export { getAllFloods, postFloodAlert, updateFloodAlert };
