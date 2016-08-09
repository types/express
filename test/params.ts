
// using req.params

import express = require('express');
import {Request, Response, NextFunction} from 'express';

const app: express.Application = express();

// using params as hash
app.post('/whatever/:aParam', (req: Request, res: Response, next: NextFunction) => {
    res.send(req.params['aParam']);
});

// specifying what's available inline
app.post('/whatever/:aParam', (req: Request & {params: {aParam: string}}, res: Response, next: NextFunction) => {
    res.send(req.params.aParam);
    // this will now error:
    // res.send(req.params.anotherParam);
});

// specifying what's available as a type (you type more here, like the body)
type MyCustomRequest = Request & {
    params: {
        aParam: string;
    };
}
app.post('/whatever/:aParam', (req: MyCustomRequest, res: Response, next: NextFunction) => {
    res.send(req.params.aParam);
    // this will now error:
    // res.send(req.params.anotherParam);
});

// regular expression matching group
app.get(/hello(.*)world/, (req: Request, res: Response, next: NextFunction) => {
    res.send(req.params[1]);
});
