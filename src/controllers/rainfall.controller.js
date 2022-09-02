import {
  seletAllRainFallData,
  addRainfallData,
} from "../services/rainfallService.js";

async function getAllRainFallData(req, res) {
  try {
    const response = await seletAllRainFallData();
    const result = res.status(200).json({
      message: "All Rainfall data were found",
      data: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `No rain data were found`,
    });
  }
}

async function addRainData(req, res) {
  const params = req.body;
  try {
    const response = await addRainfallData(params);
    const result = res.status(200).json({
      data: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `Rainfall alert with id : ${params.id} already exist. Create a new elevation`,
    });
  }
}

export { getAllRainFallData, addRainData };
