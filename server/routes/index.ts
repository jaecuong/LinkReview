import { RouteForCat } from './catRoute';
import { RouteForUser } from './userRoute';


export default function setRoutes(app) {
  RouteForCat(app);
  RouteForUser(app);
}
