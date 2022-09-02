import {
  seletElevationData,
  addElevationData,
  selectDataByLocation,
} from "../services/elevationService.js";

async function getAllElevationData(req, res) {
  try {
    const response = await seletElevationData();
    const result = res.status(200).json({
      message: "All elevation data were found",
      data: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `Elevation data were not found`,
    });
  }
}

async function getElevationByLocation(req, res) {
  const { village} = req.params;
  try {
    const response = await selectDataByLocation(village);
    const result = res.status(200).json({
      message: `Location with  id:  ${id} was found`,
      data: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `The location with id: ${id} is not found`,
    });
  }
}

async function addElevation(req, res) {
  const params = req.body;
  try {
    const response = await addElevationData(params);
    const result = res.status(200).json({
      data: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `The Elevation : ${params.cell} already exist. Create a new elevation`,
    });
  }
}

export { getAllElevationData, addElevation, getElevationByLocation };
