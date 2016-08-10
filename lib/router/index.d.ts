
import {Request} from '../request';
import {Response} from '../response';
import Route = require('./route');

declare namespace createRouter {

    export type PathArgument = string | RegExp | (string | RegExp)[];

    export interface NextFunction {
        (err?: any): void;
    }

    export interface RequestHandler {
        (req: Request, res: Response, next: NextFunction): any;
    }

    export interface ErrorHandler {
        (err: any, req: Request, res: Response, next: NextFunction): any;
    }

    export type Handler = RequestHandler | ErrorHandler;

    /** Can be passed to all methods like `use`, `get`, `all` etc */
    export type HandlerArgument = Handler | Handler[];

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

        all(path: PathArgument, ...handlers: HandlerArgument[]): this;
        get(path: PathArgument, ...handlers: HandlerArgument[]): this;
        post(path: PathArgument, ...handlers: HandlerArgument[]): this;
        put(path: PathArgument, ...handlers: HandlerArgument[]): this;
        head(path: PathArgument, ...handlers: HandlerArgument[]): this;
        delete(path: PathArgument, ...handlers: HandlerArgument[]): this;
        options(path: PathArgument, ...handlers: HandlerArgument[]): this;
        trace(path: PathArgument, ...handlers: HandlerArgument[]): this;
        copy(path: PathArgument, ...handlers: HandlerArgument[]): this;
        lock(path: PathArgument, ...handlers: HandlerArgument[]): this;
        mkcol(path: PathArgument, ...handlers: HandlerArgument[]): this;
        move(path: PathArgument, ...handlers: HandlerArgument[]): this;
        purge(path: PathArgument, ...handlers: HandlerArgument[]): this;
        propfind(path: PathArgument, ...handlers: HandlerArgument[]): this;
        proppatch(path: PathArgument, ...handlers: HandlerArgument[]): this;
        unlock(path: PathArgument, ...handlers: HandlerArgument[]): this;
        report(path: PathArgument, ...handlers: HandlerArgument[]): this;
        mkactivity(path: PathArgument, ...handlers: HandlerArgument[]): this;
        checkout(path: PathArgument, ...handlers: HandlerArgument[]): this;
        merge(path: PathArgument, ...handlers: HandlerArgument[]): this;
        'm-search'(path: PathArgument, ...handlers: HandlerArgument[]): this;
        notify(path: PathArgument, ...handlers: HandlerArgument[]): this;
        subscribe(path: PathArgument, ...handlers: HandlerArgument[]): this;
        unsubscribe(path: PathArgument, ...handlers: HandlerArgument[]): this;
        patch(path: PathArgument, ...handlers: HandlerArgument[]): this;
        search(path: PathArgument, ...handlers: HandlerArgument[]): this;
        connect(path: PathArgument, ...handlers: HandlerArgument[]): this;

        use(...handlers: HandlerArgument[]): this;
        use(mountPoint: string, ...handlers: HandlerArgument[]): this;

        route(prefix: PathArgument): Route;
    }
}

declare function createRouter(): createRouter.Router;
export = createRouter;
