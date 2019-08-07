import {TwigComponent} from "./Twig";
import {TwingEnvironment} from "twing/lib/environment";
import {CompilationResult} from "../../../../src/CompilationResult";
import {Component} from "../../../../src/Component";
import {readFile} from "fs";

export class TestComponent extends TwigComponent {
    private readonly _component: Component;

    constructor(component: Component) {
        super(component.name, component.source);

        this._component = component;
    }

    protected doCompile(context: { env: TwingEnvironment; context?: any }, result: CompilationResult): Promise<CompilationResult> {
        return new Promise<CompilationResult>((resolve, reject) => {
            readFile(this.source.path, (err: Error, data: Buffer) => {
                context.context = context.context || {};

                context.context.cases = [
                    {
                        title: 'FIRST CASE',
                        content: {
                            foo: {
                                value: 'FIRST CASE VALUE'
                            }
                        }
                    },
                    {
                        title: 'SECOND CASE',
                        content: {
                            foo: {
                                value: 'SECOND CASE VALUE'
                            }
                        }
                    }
                ];

                resolve(super.doCompile(context, result));
            });
        });
    }

    get code() {
        return Buffer.from(`    
    <header>{{ title }}</header>
    {% for case in cases %}
        {% with case %}
            <div class="demo--test--case">
                <header>
                    {{ title }}
                </header>
                <div class="demo--test--case--content">
                    {% with content %}
                        {{ include("${this._component.source.path}") }}
                    {% endwith %}
                </div>
            </div>
        {% endwith %}
    {% endfor %}`);
    }
}
