import path from 'path';
const __dirname = path.resolve();
import { parse } from 'csv-parse';

const AlertsData = [];

function isAlertSevere(precipitationData) {
    return precipitationData['amount'] > 10;
}
import { createReadStream } from 'fs';

function loadPrecipitationData() {
    return new Promise((resolve, reject) => {
        createReadStream(path.join(__dirname,'data', 'rain.csv'))
            .pipe(parse({
                comment: '#',
                columns: true
            }))
            .on('data', async (data) => {
                if (isAlertSevere(data)) {
                    AlertsData.push(data)
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
    return AlertsData;
}

function doesCellExist(cellData) { 
    const result = AlertsData.find(({ cell}) => cell === cellData);
    return  result; 
}

export {
    loadPrecipitationData,
    getAllSevereData,
    doesCellExist
}