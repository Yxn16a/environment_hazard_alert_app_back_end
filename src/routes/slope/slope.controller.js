import { getAllSevereData } from "../../models/slope.model.js"
async function httpGetAllSlopData(req, res) {
    return res.status(200).json(await getAllSevereData());
};
export{
    httpGetAllSlopData,
}