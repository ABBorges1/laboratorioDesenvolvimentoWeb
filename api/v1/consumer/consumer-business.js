const consumerRepository = require("./consumer-repository");

const create = (consumer) => {

    return consumerRepository.save(consumer);
};

const findAll = async(options) => {
    return consumerRepository.findAll(options);
}

const findByid = (id) => {
    return consumerRepository.findById(id);
}

module.exports = {create, findAll, findByid};