export class CompilationResult {
    private readonly _name: string;
    private readonly _children: CompilationResult[];

    private _data: any = null;
    private _map: Buffer = null;

    constructor(name: string, children: CompilationResult[]) {
        this._name = name;
        this._children = children;
    }

    [Symbol.iterator](): IterableIterator<CompilationResult> {
        return this._children.values();
    }

    get name() {
        return this._name;
    }

    get data() {
        return this._data;
    }

    set data(data: any) {
        this._data = data;
    }

    get map() {
        return this._map;
    }

    set map(map: Buffer) {
        this._map = map;
    }

    get children() {
        return this._children;
    }

    getChild(name: string): CompilationResult {
        return this._children.find((component: CompilationResult) => {
            return component.name === name;
        });
    }
}
