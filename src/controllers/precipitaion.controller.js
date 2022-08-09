import {  getAllSevereData,doesCellExist} from '../models/precipitatation.model.js';

async function getAllPrecipitation(req, res) {
    try {
        const response = await getAllSevereData();
        const result = res.status(200).json({
             message: 'All precipitation data found successfully',
             data: response
         });
         return result;
    } catch (error) {
        return res.status(404).json(
            { error: `Data not found` })
    }   
};

async function getPrecipitationByCell(req, res) {
    const { cell } = req.params;
    // console.log(cell)
    if (!doesCellExist(cell)) { 
        return res.status(404).json(
            { error: `The cell with name of ${cell} was not found` })
    } 
    return res.status(200).json(doesCellExist(cell));
}

// async savePrecipitationData(req, res){ 
// const FormdData =
// }

export {
    getPrecipitationByCell,
    getAllPrecipitation
}
