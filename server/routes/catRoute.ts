// import * as express from 'express';
// import * as path from 'path';
import { serverConfig } from '../config/index';
// import CatsCtrl from './controllers/cats';
import { Cat } from '../models/index';
import { CatsCtrl } from '../controllers/index';


export function RouteForCat(app) {

  const cats = new CatsCtrl();

  app.route(serverConfig.apiUrl + 'cats').get(cats.getAll);
  app.route(serverConfig.apiUrl + 'cats/count').get(cats.count);
  app.route(serverConfig.apiUrl + 'cat').post(cats.insert);
  app.route(serverConfig.apiUrl + 'cat/:id').get(cats.get);
  app.route(serverConfig.apiUrl + 'cat/:id').put(cats.update);
  app.route(serverConfig.apiUrl + 'cat/:id').delete(cats.delete);

}
