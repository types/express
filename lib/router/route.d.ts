
import {RequestHandler} from './index';

declare class Route {

    path: string;
    stack: any;

    constructor(path: string);

    all(...handlers: (RequestHandler | RequestHandler[])[]): this;
    get(...handlers: (RequestHandler | RequestHandler[])[]): this;
    post(...handlers: (RequestHandler | RequestHandler[])[]): this;
    put(...handlers: (RequestHandler | RequestHandler[])[]): this;
    head(...handlers: (RequestHandler | RequestHandler[])[]): this;
    delete(...handlers: (RequestHandler | RequestHandler[])[]): this;
    options(...handlers: (RequestHandler | RequestHandler[])[]): this;
    trace(...handlers: (RequestHandler | RequestHandler[])[]): this;
    copy(...handlers: (RequestHandler | RequestHandler[])[]): this;
    lock(...handlers: (RequestHandler | RequestHandler[])[]): this;
    mkcol(...handlers: (RequestHandler | RequestHandler[])[]): this;
    move(...handlers: (RequestHandler | RequestHandler[])[]): this;
    purge(...handlers: (RequestHandler | RequestHandler[])[]): this;
    propfind(...handlers: (RequestHandler | RequestHandler[])[]): this;
    proppatch(...handlers: (RequestHandler | RequestHandler[])[]): this;
    unlock(...handlers: (RequestHandler | RequestHandler[])[]): this;
    report(...handlers: (RequestHandler | RequestHandler[])[]): this;
    mkactivity(...handlers: (RequestHandler | RequestHandler[])[]): this;
    checkout(...handlers: (RequestHandler | RequestHandler[])[]): this;
    merge(...handlers: (RequestHandler | RequestHandler[])[]): this;
    'm-search'(...handlers: (RequestHandler | RequestHandler[])[]): this;
    notify(...handlers: (RequestHandler | RequestHandler[])[]): this;
    subscribe(...handlers: (RequestHandler | RequestHandler[])[]): this;
    unsubscribe(...handlers: (RequestHandler | RequestHandler[])[]): this;
    patch(...handlers: (RequestHandler | RequestHandler[])[]): this;
    search(...handlers: (RequestHandler | RequestHandler[])[]): this;
    connect(...handlers: (RequestHandler | RequestHandler[])[]): this;
}

export = Route;
