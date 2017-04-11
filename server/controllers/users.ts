import { User } from '../models/index';
import BaseCtrl from './base';
import * as Q from 'q';

export class UsersCtrl extends BaseCtrl {
  model = User;

   // Insert
  // protected insert = (req, res) => {
  //   var deferred = Q.defer();

  // };

}


