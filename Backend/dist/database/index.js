"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _Users = require('../app/models/Users'); var _Users2 = _interopRequireDefault(_Users);
var _Companies = require('../app/models/Companies'); var _Companies2 = _interopRequireDefault(_Companies);
var _File = require('../app/models/File'); var _File2 = _interopRequireDefault(_File);
var _Categories = require('../app/models/Categories'); var _Categories2 = _interopRequireDefault(_Categories);
var _Cupons = require('../app/models/Cupons'); var _Cupons2 = _interopRequireDefault(_Cupons);
var _Partners = require('../app/models/Partners'); var _Partners2 = _interopRequireDefault(_Partners);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

const models = [ _Users2.default, _Partners2.default, _Companies2.default, _File2.default, _Categories2.default, _Cupons2.default ];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new (0, _sequelize2.default)(_database2.default);

        models.map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models));
    }

}


exports. default = new Database();