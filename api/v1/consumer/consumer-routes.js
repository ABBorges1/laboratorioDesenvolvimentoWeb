const { find, create, getById } = require("./consumer-controller");
const schema = require("./consumer-schema");

const plugin = {
    name: 'consumer-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/consumers",
                options: {
                    validate: schema.findAll,
                    handler: find
                }
            },
            {
                method: "GET",
                path: "/consumers/{id}",
                options: {
                    validate: schema.findById,
                    handler: getById
                }
            },
            {
                method: "POST",
                path: "/consumers",
                options: {
                    validate: schema.postConsumer,
                    handler: create
                }
            }
        ])
    }
};

module.exports = plugin;