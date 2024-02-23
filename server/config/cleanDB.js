const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
try {
    let modelExists = await models[modelName].db.db.listCollections({
        name: collectionName
    }).toArray()

    if(modelExists.lenght){
        await db.dropCollection(collectionName);
    }
} catch (err) {
    console.error(err);
    }
}