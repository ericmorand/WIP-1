import {Component} from "../../../../src/Component";
import {CompilationResult} from "../../../../src/CompilationResult";

const {render} = require('node-sass');

export class SassComponent extends Component {
    protected doCompile(context: any, result: CompilationResult): Promise<CompilationResult> {
        let sassConfig = Object.assign({}, /** this._config **/ {}, {
            file: this.source.path
        });

        return new Promise((resolve, reject) => {
            render(sassConfig, (err: Error, sassRenderResult: {map: Buffer, css: Buffer}) => {
                if (err) {
                    reject(err);
                }
                else {
                    result.data =  sassRenderResult.css;
                    result.map = sassRenderResult.map;

                    resolve(result);
                }
            })
        })
    }

    get code(): Buffer {
        let code: Buffer = this.source ? this.source.code : Buffer.from('');

        for (let component of this.children) {
            code = Buffer.concat([code, Buffer.from(`@import "${component.source.path}";\n`)]);
        }

        return code;
    }
}
