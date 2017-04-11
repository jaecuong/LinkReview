import * as path from 'path';
export const serverConfig = {
  "apiUrl": "/api/",
  "secret": "REPLACE THIS WITH YOUR OWN SECRET, IT CAN BE ANY STRING",
  "publicPathHtml": path.join(__dirname, '../public/index.html'),
  "publicPath": path.join(__dirname, '../public'),
  "port": 3000
};

// export const serverConfig;
