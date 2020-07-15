"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('./config/multer'); var _multer4 = _interopRequireDefault(_multer3);

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _CompaniesController = require('./app/controllers/CompaniesController'); var _CompaniesController2 = _interopRequireDefault(_CompaniesController);
var _PointController = require('./app/controllers/PointController'); var _PointController2 = _interopRequireDefault(_PointController);
var _FileController = require('./app/controllers/FileController'); var _FileController2 = _interopRequireDefault(_FileController);
var _CategoriesController = require('./app/controllers/CategoriesController'); var _CategoriesController2 = _interopRequireDefault(_CategoriesController);
var _CupomController = require('./app/controllers/CupomController'); var _CupomController2 = _interopRequireDefault(_CupomController);
var _PartnerController = require('./app/controllers/PartnerController'); var _PartnerController2 = _interopRequireDefault(_PartnerController);

const routes = new (0, _express2.default)();

const upload = _multer2.default.call(void 0, {storage: _multer4.default['s3']});

routes.get('/', (req, res) => res.send('Working'));
routes.post('/users', _UserController2.default.store);

routes.get('/companies', _CompaniesController2.default.index);
routes.post('/companies', _CompaniesController2.default.store);
routes.put('/companies/:id', _CompaniesController2.default.update);
routes.delete('/companies/:id', _CompaniesController2.default.delete);

routes.post('/file', upload.single('file'), _FileController2.default.store);

routes.get('/categories', _CategoriesController2.default.index);
routes.post('/categories', _CategoriesController2.default.store);
routes.put('/categories/:id', _CategoriesController2.default.update);
routes.get('/points', _PointController2.default.index);

routes.get('/cupom', _CupomController2.default.index);
routes.post('/cupom', _CupomController2.default.store);

routes.get('/partner', _PartnerController2.default.index);
routes.post('/partner', _PartnerController2.default.store);
routes.put('/partner/:id', _PartnerController2.default.update);



exports. default = routes;