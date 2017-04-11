import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
// import * as path from 'path';

import { dbConfig, serverConfig } from './config/index';
// import {Cat} from './models/index';
import setRoutes from './routes/index';

const app = express();
app.set('port', (process.env.PORT || serverConfig.port));

app.use('/', express.static(serverConfig.publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

/* DB SETUP*/
mongoose.connect(dbConfig.url);
const db = mongoose.connection;
(<any>mongoose).Promise = global.Promise;

db.on('error', console.error.bind(console, 'DB CONNECTION ERROR:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  setRoutes(app);

  app.get('/*', function (req, res) {
    res.sendFile(serverConfig.publicPathHtml);
  });

  app.listen(app.get('port'), () => {
    console.log('Trading App is listening on port ' + app.get('port'));
  });

});

export { app };
