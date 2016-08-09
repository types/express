
// writing middleware that modifyies req

import createApplication = require('express');
import {Request, Response, NextFunction, RequestHandler} from 'express';

const app = createApplication();

class User {
    username: string;
}

interface WithUser {
    user: User;
}

const userMiddleware: RequestHandler = (req: Request & WithUser, res: Response, next: NextFunction) => {
    req.user = new User();
};

app.post('/echo', userMiddleware, (req: Request & WithUser, res: Response, next: NextFunction) => {
    console.log(req.user.username);
});
