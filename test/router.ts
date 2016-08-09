
import {Router} from 'express';

const router = Router();

router.move('/somepath', (req, res) => {
    res.set('Location', res.get('Destination'));
});

router.route('/someroute')
    .get((req, res, next) => {
        req.accepts('application/json');
        console.log('hello');
    });

export default router;
