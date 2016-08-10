
import {HandlerArgument} from './index';

declare class Route {

    path: string;
    stack: any;

    constructor(path: string);

    all(...handlers: HandlerArgument[]): this;
    get(...handlers: HandlerArgument[]): this;
    post(...handlers: HandlerArgument[]): this;
    put(...handlers: HandlerArgument[]): this;
    head(...handlers: HandlerArgument[]): this;
    delete(...handlers: HandlerArgument[]): this;
    options(...handlers: HandlerArgument[]): this;
    trace(...handlers: HandlerArgument[]): this;
    copy(...handlers: HandlerArgument[]): this;
    lock(...handlers: HandlerArgument[]): this;
    mkcol(...handlers: HandlerArgument[]): this;
    move(...handlers: HandlerArgument[]): this;
    purge(...handlers: HandlerArgument[]): this;
    propfind(...handlers: HandlerArgument[]): this;
    proppatch(...handlers: HandlerArgument[]): this;
    unlock(...handlers: HandlerArgument[]): this;
    report(...handlers: HandlerArgument[]): this;
    mkactivity(...handlers: HandlerArgument[]): this;
    checkout(...handlers: HandlerArgument[]): this;
    merge(...handlers: HandlerArgument[]): this;
    'm-search'(...handlers: HandlerArgument[]): this;
    notify(...handlers: HandlerArgument[]): this;
    subscribe(...handlers: HandlerArgument[]): this;
    unsubscribe(...handlers: HandlerArgument[]): this;
    patch(...handlers: HandlerArgument[]): this;
    search(...handlers: HandlerArgument[]): this;
    connect(...handlers: HandlerArgument[]): this;
}

export = Route;
