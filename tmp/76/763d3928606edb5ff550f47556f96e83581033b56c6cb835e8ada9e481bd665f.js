module.exports = (Runtime) => {
    let templates = {};
    

    /* bar */
    templates.__TwingTemplate_b0261fae100fa3624cb43a8ff364aedfb788bbe81d4a62ae077e23b1bc573911 = class __TwingTemplate_b0261fae100fa3624cb43a8ff364aedfb788bbe81d4a62ae077e23b1bc573911 extends Runtime.TwingTemplate {
        constructor(env) {
            super(env);

            this.source = this.getSourceContext();

            this.parent = false;

            this.blocks = new Map([
            ]);
        }

        doDisplay(context, blocks = new Map()) {
        }

        getTemplateName() {
            return `bar`;
        }

        getDebugInfo() {
            return new Map([]);
        }

        getSourceContext() {
            return new Runtime.TwingSource(``, `bar`, ``);
        }
    };

    return templates;
};