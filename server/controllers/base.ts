import * as Q from 'q';

abstract class BaseCtrl {

  abstract model: any;

  // Get all
  getAll = (req, res) => {
    var deferred = Q.defer();
    this.model.find({}, (err, docs) => {
      if (err) {
        deferred.reject(err.name + ': ' + err.message);
        res.send(400);
        return console.error(err);
      }
      deferred.resolve(this.model);
      res.json(docs);
    });
    return deferred.promise;
  };

  // Count all
  count = (req, res) => {
    this.model.count((err, count) => {
      if (err) {
        res.send(400);
        return console.error(err);
      }
      res.json(count);
    });
  };

  // Insert
  insert = (req, res) => {
    var deferred = Q.defer();
    const obj = new this.model(req.body);
    obj.save((err, item) => {
      if (err) {
        deferred.reject(err.name + ': ' + err.message);
        res.send(400);
        return console.error(err);
      }
      deferred.resolve();
      res.status(200).json(item);
    });
  };

  // Get by id
  get = (req, res) => {
    var deferred = Q.defer();
    this.model.findOne({ _id: req.params.id }, (err, obj) => {
      if (err) {
        deferred.reject(err.name + ': ' + err.message);
        res.send(400);
        return console.error(err);
      }
      deferred.resolve();
      res.json(obj);
    });
    return deferred.promise;
  };

  // Update by id
  update = (req, res) => {
    var deferred = Q.defer();
    this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
      if (err) {
        deferred.reject(err.name + ': ' + err.message);
        res.send(400);
        return console.error(err);
      }
      deferred.resolve();
      res.sendStatus(200);
    });
    return deferred.promise;
  };

  // Delete by id
  delete = (req, res) => {
    var deferred = Q.defer();
    this.model.findOneAndRemove({ _id: req.params.id }, (err) => {
      if (err) {
        deferred.reject(err.name + ': ' + err.message);
        res.send(400);
        return console.error(err);
      }
      deferred.resolve();
      res.sendStatus(200);
    });
    return deferred.promise;
  }
}

export default BaseCtrl;
