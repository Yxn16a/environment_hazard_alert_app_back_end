import { selectSoilTypeByUserLocation } from '../models/soiltype.model.js'

async function getSoilTypeByLocation(req, res) {
    try {
        const response = await selectSoilTypeByUserLocation();
        const result = res.status(200).json({
            message: 'All soil data found',
            data: response
        });
        return result;
    } catch (error) {
        return res.status(404).json({
            error: `Soil Data Not Found`
        })
    }
};
export { 
    getSoilTypeByLocation
}