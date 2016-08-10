
import {Router, Request, Response, NextFunction} from 'express';

const router = Router();

router.move('/somepath', (req: Request, res: Response) => {
    res.set('Location', res.get('Destination'));
});

router.route('/someroute')
    .get((req: Request, res: Response, next: NextFunction) => {
        req.accepts('application/json');
        console.log('hello');
    });

export default router;
