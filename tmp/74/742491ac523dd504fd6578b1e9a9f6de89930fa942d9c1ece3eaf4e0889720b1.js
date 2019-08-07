module.exports = (Runtime) => {
    let templates = {};
    

    /* lorem */
    templates.__TwingTemplate_e740b64f0fa4a0201217b2c40f203fc6e6bad3cea598efc757b6696eeaffcd80 = class __TwingTemplate_e740b64f0fa4a0201217b2c40f203fc6e6bad3cea598efc757b6696eeaffcd80 extends Runtime.TwingTemplate {
        constructor(env) {
            super(env);

            this.source = this.getSourceContext();

            this.parent = false;

            this.blocks = new Map([
            ]);
        }

        doDisplay(context, blocks = new Map()) {
            // line 1, column 1
            Runtime.echo(`LOREM IPSUM`);
        }

        getTemplateName() {
            return `lorem`;
        }

        getDebugInfo() {
            return new Map([[20, {"line": 1, "column": 1}]]);
        }

        getSourceContext() {
            return new Runtime.TwingSource(``, `lorem`, ``);
        }
    };

    return templates;
};