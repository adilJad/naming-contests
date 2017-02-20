import config from './config';
import express from 'express';
import router from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

import serverRender from './serverRender';
server.get('/', (req, res) => {
    serverRender()
    .then(content => {
        res.render('index', {
            content
        });
    }).catch(console.error);
});

server.use('/api', router);
server.use(express.static('public'));
server.listen(config.port, config.host, () => {
    console.info('Express listening on port ', config.port);
});