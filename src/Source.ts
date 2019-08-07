export class Source {
    private readonly _code: Buffer;
    private readonly _path: string;

    constructor(code: Buffer, path: string) {
        this._code = code;
        this._path = path;
    }

    get code(): Buffer {
        return this._code || Buffer.from('');
    }

    get path(): string {
        return this._path;
    }
}
