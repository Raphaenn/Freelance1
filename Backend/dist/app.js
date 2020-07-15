"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

require('./database');

class App {
    constructor() {
        this.server = _express2.default.call(void 0, );

        this.middlewares();
        this.routes();
    }


    middlewares() {
        this.server.use(_cors2.default.call(void 0, ));
        this.server.use(_helmet2.default.call(void 0, ));
        this.server.use(_express2.default.json()); // possibilita o uso do json
        this.server.use('/files', _express2.default.static(_path2.default.resolve(__dirname, '..', 'tmp', 'uploads'))); // utilizado 
    }

    routes() {
        this.server.use(_routes2.default) // carrega as rotas
    }

}

exports. default = new App().server;