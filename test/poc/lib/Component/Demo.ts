import {TwigComponent} from "./Twig";
import {TwingEnvironment} from "twing/lib/environment";
import {CompilationResult} from "../../../../src/CompilationResult";

export class DemoComponent extends TwigComponent {
    protected doCompile(context: { env: TwingEnvironment; context?: any }, result: CompilationResult): Promise<CompilationResult> {
        let styles: string[] = [];
        let scripts: string[] = [];

        for (let child of result.getChild('styles')) {
            styles.push(child.name);
        }

        for (let child of result.getChild('scripts')) {
            scripts.push(child.name);
        }

        context.context = context.context || {};

        context.context.styles = styles;
        context.context.scripts = scripts;

        return super.doCompile(context, result);
    }

    get code() {
        return Buffer.from(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- styles -->
    {% for style in styles %}
        <link type="text/css" href="{{ link }}">
    {% endfor %}
    <!-- scripts -->
    {% for script in scripts %}
        <script type="text/javascript" src="{{ link }}"></script>
    {% endfor %}
</head>
<body>
${this.getChild('body').code}
</body>
</html>`);
    }
}
