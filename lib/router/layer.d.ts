
import {Options, Token} from 'path-to-regexp';

declare interface Layer {
    handle?: Function;
    name: string;
    params?: any;
    path?: string;
    keys: Token[];
    regexp: RegExp;
    method: string;
}

declare const Layer: {
    (path: string, options?: Options, fn?: Function): Layer;
    new (path: string, options?: Options, fn?: Function): Layer;
};

export = Layer;
