import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import App from '../src/app/index';
import path from 'path';
import fs from 'fs';

export function add (req, res) {
    const web = ReactDOMServer.renderToString(<StaticRouter  ><App /></StaticRouter>);
    
      const indexFile = path.resolve('./build/index.html');
      fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
          console.error('Something went wrong:', err);
          return res.status(500).send('Oops, better luck next time!');
        }
        // res.setHeader('Cache-Control', './assets, max-age=604800')
       return res.send(
          data.replace('<div id="root"></div>', `<div id="root">${web}</div>`)
        );
      });
}
