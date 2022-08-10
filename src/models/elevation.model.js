import path from 'path';
const __dirname = path.resolve();
import {
    parse
} from 'csv-parse';

const stepnessData = [];

function isAlertSevere(slopData) {
    return slopData['groundWaterLevel'] > 5 && slopData['soilSpeed'] > 1;
}
import {
    createReadStream
} from 'fs';

function loadSlopData() {
    return new Promise((resolve, reject) => {
        createReadStream(path.join(__dirname, 'data', 'slop.csv'))
            .pipe(parse({
                comment: '#',
                columns: true
            }))
            .on('data', async (data) => {
                if (isAlertSevere(data)) {
                    stepnessData.push(data)
                }
            })
            .on('error', (err) => {
                console.log(err);
                reject(err);
            })
            .on('end', () => {
                resolve();
            });
    });
}
async function getAllSevereData() {
    return stepnessData;
}
function isYourCellStepnessHazardious(cellData) { 
    const result = stepnessData.find(({ cell }) => cell === cellData)
    return result; 
}

export {
    loadSlopData,
    getAllSevereData, 
    isYourCellStepnessHazardious
};