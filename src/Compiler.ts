import {Component} from "./Component";

export abstract class Compiler {
    abstract compile(component: Component, context: any): Promise<Buffer>;
}
