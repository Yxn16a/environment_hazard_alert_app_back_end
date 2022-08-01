import {  getAllSevereData,doesCellExist} from '../../models/precipitatation.model.js';
async function httpGetAllPrecipitation(req, res) {
    return res.status(200).json(await getAllSevereData());
};
async function httpGetPrecipitationByCell(req, res) {
    const { cell } = req.params; 
    if (!doesCellExist(cell)) { 
        return res.status(404).json(
            { error: `The cell with name of ${cell} was not found` })
    } 
    return res.status(200).json(doesCellExist(cell));
}
export {
    httpGetPrecipitationByCell,
    httpGetAllPrecipitation
}
