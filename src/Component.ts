import {Source} from "./Source";
import {CompilationResult} from "./CompilationResult";

export class Component {
    private readonly _name: string;
    private readonly _source: Source;
    private readonly _children: Component[];

    constructor(name: string, source: Source, children: Component[] = []) {
        this._name = name;
        this._source = source;
        this._children = children;
    }

    [Symbol.iterator](): IterableIterator<Component> {
        return this._children.values();
    }

    get name(): string {
        return this._name;
    }

    get source(): Source {
        return this._source;
    }

    get children(): Component[] {
        return this._children;
    }

    getChild(name: string): Component {
        return this._children.find((component: Component) => {
            return component.name === name;
        });
    }

    get code(): Buffer {
        return null;
    }

    compile(context: any): Promise<CompilationResult> {
        let children: CompilationResult[] = [];

        let promises: Promise<CompilationResult>[] = [];

        for (let child of this) {
            promises.push(child.compile(context)
                .then((result: CompilationResult) => {
                    children.push(result);

                    return result;
                }));
        }

        return Promise.all(promises)
            .then(() => {
                let result = new CompilationResult(this.name, children);

                return this.doCompile(context, result);
            })
    }

    protected doCompile(context: any, result: CompilationResult): Promise<CompilationResult> {
        return Promise.resolve(result);
    }
}