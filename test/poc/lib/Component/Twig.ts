import {Component} from "../../../../src/Component";
import {TwingEnvironment} from "twing/lib/environment";
import {TwingLoaderArray, TwingLoaderChain} from "twing";
import {CompilationResult} from "../../../../src/CompilationResult";

export class TwigComponent extends Component {
    protected doCompile(context: { env: TwingEnvironment, context?: any }, result: CompilationResult): Promise<CompilationResult> {
        let code: Buffer = this.code;

        console.warn(code.toString());

        let loader = new TwingLoaderArray(new Map([
            [this.name, code.toString()]
        ]));

        context.env.setLoader(new TwingLoaderChain([
            loader,
            context.env.getLoader()
        ]));

        result.data = Buffer.from(context.env.render(this.name, context.context || {}));

        return Promise.resolve(result);
    }

    get code(): Buffer {
        let code: Buffer = this.source ? this.source.code : Buffer.from('');

        for (let child of this) {
            if (child.source) {
                let componentCode: Buffer;

                if (child.source.path) {
                    componentCode = Buffer.from(`{{ include("${child.source.path}") }}`);
                } else if (child.source.code) {
                    componentCode = Buffer.from(`{{ include(template_from_string("${child.source.code}", "${child.name}")) }}`);
                }

                code = Buffer.concat([code, componentCode]);
            }
        }

        return code;
    }
}
