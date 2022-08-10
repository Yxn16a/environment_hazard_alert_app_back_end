import { getAllSevereData, isYourCellStepnessHazardious} from "../models/elevation.model.js"
async function httpGetAllSlopData(req, res) {
    try {
        const response = await getAllSevereData(); 
        const result = res.status(200).json({
            message: "all Slope data found successfully",
            data: response
        })
        return result; 
    } catch (error) { 
        return res.status(404).json(
            { error: `Data not found` })
    }
};
async function slopeByCell(req, res) {
    const { cell } = req.params; 
    if (!isYourCellStepnessHazardious(cell)) { 
        return res.status(404).json(
            { error: `The cell with name of ${cell} was not found` })
    } 
    return res.status(200).json(isYourCellStepnessHazardious(cell));
}
export {
    slopeByCell,
    httpGetAllSlopData,
}