const data = [];
const ConsumerModel = require('./consumer-model')

const save = (consumer) => {

    ConsumerModel.create(consumer)

    return consumer;
};

const findAll = async (options) => {
    
    const {
        limit, 
        offset
    } = options.paging

    const filter = options.filter;

    const result = await ConsumerModel.findAll({
        raw: true, 
        limit, 
        offset,
        where: {
            ...(filter.name ? {name: filter.name} : {}),
            ...(filter.city ? {city: filter.city} : {})
        }
    })
    return result;
}

const findById = (id) => {

    return data.find(c => c.id == id);
}


module.exports = {save, findAll, findById};