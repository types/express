
import {Application as _Application} from './application';
import {Request as _Request} from './request';
import {Response as _Response} from './response';
import createRouter = require('./router/index');
import RouteClass = require('./router/route');
import serveStatic = require('serve-static');

declare namespace createApplication {

    // workaround to reexport the interfaces
    export interface Request extends _Request { }
    export interface Response extends _Response { }
    export interface Application extends _Application { }
    export interface Router extends createRouter.Router { }
    export interface RequestHandler extends createRouter.RequestHandler { }
    export interface ErrorHandler extends createRouter.ErrorHandler { }
    export interface ParamHandler extends createRouter.ParamHandler { }
    export type Handler = createRouter.Handler
    export interface NextFunction extends createRouter.NextFunction { }

    // need to use an interface for this because `static` is a reserved word
    // and cannot be used as a variable identifier
    export interface Express {

        /** Create an express application. */
        (): Application;

        /** The Application prototype */
        application: Application;

        /** The Request prototype */
        request: Request;

        /** The Response prototype */
        response: Response;

        /** The Route constructor */
        Route: typeof RouteClass;

        /** The Router constructor */
        Router: typeof createRouter;

        /** The serve-static middleware */
        static: typeof serveStatic;

        // TODO query
    }
}

declare const createApplication: createApplication.Express;
export = createApplication;
