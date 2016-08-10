
import express = require('express');
import {Stats} from 'fs';

const app = express();

// test that it's possible to use the static middleware
app.use(express.static('/whatever', {
    etag: true,
    setHeaders(res: express.Response, path: string, stat: Stats) {
        // test that it's possible to type `res` as an express response instead of http.ServerResponse
        res.set('My-Header', 'my value');
    }
}));
