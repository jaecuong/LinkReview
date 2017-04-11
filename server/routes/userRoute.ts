import { serverConfig } from '../config/index';
import { User } from '../models/index';
import { UsersCtrl } from '../controllers/index';


export function RouteForUser(app) {

  const users = new UsersCtrl();

  app.route(serverConfig.apiUrl + 'users').get(users.getAll);
  app.route(serverConfig.apiUrl + 'users/count').get(users.count);
  app.route(serverConfig.apiUrl + 'user/signup').post(users.insert);
  app.route(serverConfig.apiUrl + 'users/:id').get(users.get);
  app.route(serverConfig.apiUrl + 'users/:id').put(users.update);
  app.route(serverConfig.apiUrl + 'users/:id').delete(users.delete);

}
