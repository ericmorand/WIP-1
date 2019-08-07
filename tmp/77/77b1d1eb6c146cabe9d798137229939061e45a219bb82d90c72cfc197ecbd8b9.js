module.exports = (Runtime) => {
    let templates = {};
    

    /* /home/ericmorand/Projects/stromboli/test/poc/src/foo/index.html.twig */
    templates.__TwingTemplate_5f376d53658a1afe5746d67adf213477db6ec32fac10f0b6f191ba94efac12b0 = class __TwingTemplate_5f376d53658a1afe5746d67adf213477db6ec32fac10f0b6f191ba94efac12b0 extends Runtime.TwingTemplate {
        constructor(env) {
            super(env);

            this.source = this.getSourceContext();

            this.parent = false;

            this.blocks = new Map([
            ]);
        }

        doDisplay(context, blocks = new Map()) {
            // line 1, column 1
            Runtime.echo(`FOO
===
`);
            // line 3, column 1
            Runtime.echo(this.env.getFilter('escape').traceableCallable(3, this.source)(...[this.env, this.traceableMethod(Runtime.twingGetAttribute, 3, this.source)(this.env, (context.has(`foo`) ? context.get(`foo`) : null), `value`, []), `html`, null, true]));
        }

        getTemplateName() {
            return `/home/ericmorand/Projects/stromboli/test/poc/src/foo/index.html.twig`;
        }

        isTraitable() {
            return false;
        }

        getDebugInfo() {
            return new Map([[24, {"line": 3, "column": 1}], [20, {"line": 1, "column": 1}]]);
        }

        getSourceContext() {
            return new Runtime.TwingSource(``, `/home/ericmorand/Projects/stromboli/test/poc/src/foo/index.html.twig`, `/home/ericmorand/Projects/stromboli/test/poc/src/foo/index.html.twig`);
        }
    };

    return templates;
};