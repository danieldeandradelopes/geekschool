import { Router } from 'express';
import './database';

import UserController from './apps/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

export default routes;
