
import {Request} from '../request';
import {Response} from '../response';
import Route = require('./route');

declare namespace createRouter {

    export type PathParams = string | RegExp | (string | RegExp)[];

    export interface NextFunction {
        (err?: any): void;
    }

    export interface RequestHandler {
        (req: Request, res: Response, next: NextFunction): any;
    }

    export interface ErrorHandler {
        (err: any, req: Request, res: Response, next: NextFunction): any;
    }

    export interface ParamHandler {
        (req: Request, res: Response, next: NextFunction, value: any, name: string): any;
    }

    export interface Router extends RequestHandler {

        /**
         * Map the given param placeholder `name`(s) to the given callback(s).
         *
         * Parameter mapping is used to provide pre-conditions to routes
         * which use normalized placeholders. For example a _:user_id_ parameter
         * could automatically load a user's information from the database without
         * any additional code,
         *
         * The callback uses the samesignature as middleware, the only differencing
         * being that the value of the placeholder is passed, in this case the _id_
         * of the user. Once the `next()` function is invoked, just like middleware
         * it will continue on to execute the route, or subsequent parameter functions.
         *
         *      app.param('user_id', function(req, res, next, id){
         *        User.find(id, function(err, user){
         *          if (err) {
         *            next(err);
         *          } else if (user) {
         *            req.user = user;
         *            next();
         *          } else {
         *            next(new Error('failed to load user'));
         *          }
         *        });
         *      });
         */
        param(name: string, handler: ParamHandler): this;

        /**
         * @deprecated
         */
        param(callback: (name: string, matcher: RegExp) => ParamHandler): this;

        all(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        get(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        post(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        put(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        head(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        delete(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        options(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        trace(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        copy(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        lock(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        mkcol(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        move(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        purge(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        propfind(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        proppatch(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        unlock(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        report(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        mkactivity(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        checkout(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        merge(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        'm-search'(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        notify(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        subscribe(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        unsubscribe(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        patch(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        search(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;
        connect(path: PathParams, ...handlers: (RequestHandler | RequestHandler[])[]): this;

        use(...handlers: (RequestHandler | ErrorHandler | (RequestHandler | ErrorHandler)[])[]): this;
        use(mountPoint: string, ...handlers: (RequestHandler | ErrorHandler | (RequestHandler | ErrorHandler)[])[]): this;

        route(prefix: PathParams): Route;
    }
}

declare function createRouter(): createRouter.Router;
export = createRouter;
