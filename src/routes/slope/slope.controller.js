import { getAllSevereData, isYourCellStepnessHazardious} from "../../models/slope.model.js"
async function httpGetAllSlopData(req, res) {
    return res.status(200).json(await getAllSevereData());
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