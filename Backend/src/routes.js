import Router from "express";
import multer from "multer";
import storageTypes from "./config/multer";

import UserController from "./app/controllers/UserController";
import CompaniesController from "./app/controllers/CompaniesController";
import PointController from "./app/controllers/PointController";
import FileController from "./app/controllers/FileController";
import CategoriesController from "./app/controllers/CategoriesController";
import CupomController from "./app/controllers/CupomController";
import PartnerController from "./app/controllers/PartnerController";

const routes = new Router();

const upload = multer({storage: storageTypes['s3']});

routes.get('/', (req, res) => res.send('Working'));
routes.post('/users', UserController.store);

routes.get('/companies', CompaniesController.index);
routes.post('/companies', CompaniesController.store);
routes.put('/companies/:id', CompaniesController.update);
routes.delete('/companies/:id', CompaniesController.delete);

routes.post('/file', upload.single('file'), FileController.store);

routes.get('/categories', CategoriesController.index);
routes.post('/categories', CategoriesController.store);
routes.put('/categories/:id', CategoriesController.update);
routes.get('/points', PointController.index);

routes.get('/cupom', CupomController.index);
routes.post('/cupom', CupomController.store);

routes.get('/partner', PartnerController.index);
routes.post('/partner', PartnerController.store);
routes.put('/partner/:id', PartnerController.update);



export default routes;