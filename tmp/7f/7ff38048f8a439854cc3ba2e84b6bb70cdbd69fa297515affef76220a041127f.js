module.exports = (Runtime) => {
    let templates = {};
    

    /* foo */
    templates.__TwingTemplate_f5bf65ea38869d351baa65ccf478977b92008717a2ac8b988e27f51c129d9f4f = class __TwingTemplate_f5bf65ea38869d351baa65ccf478977b92008717a2ac8b988e27f51c129d9f4f extends Runtime.TwingTemplate {
        constructor(env) {
            super(env);

            this.source = this.getSourceContext();

            this.parent = false;

            this.blocks = new Map([
            ]);
        }

        doDisplay(context, blocks = new Map()) {
            // line 1, column 1
            Runtime.echo(`    
    <header>`);
            // line 2, column 13
            Runtime.echo(this.env.getFilter('escape').traceableCallable(2, this.source)(...[this.env, (context.has(`title`) ? context.get(`title`) : null), `html`, null, true]));
            Runtime.echo(`</header>
    `);
            // line 3, column 8
            context.set('_parent', Runtime.clone(context));

            (() => {
                let c = Runtime.twingEnsureTraversable((context.has(`cases`) ? context.get(`cases`) : null));

                if (c === context) {
                    context.set('_seq', Runtime.clone(context));
                }
                else {
                    context.set('_seq', c);
                }
            })();

            context.set('loop', new Map([
              ['parent', context.get('_parent')],
              ['index0', 0],
              ['index', 1],
              ['first', true]
            ]));
            if (Array.isArray(context.get('_seq')) || (typeof context.get('_seq') === 'object' && Runtime.isCountable(context.get('_seq')))) {
                let length = Runtime.count(context.get('_seq'));
                let loop = context.get('loop');
                loop.set('revindex0', length - 1);
                loop.set('revindex', length);
                loop.set('length', length);
                loop.set('last', (length === 1));
            }
            Runtime.each.bind(this)(context.get('_seq'), (__key__, __value__) => {
                context.proxy[`_key`] = __key__;
                context.proxy[`case`] = __value__;
                // line 4, column 1
                Runtime.echo(`        `);
                let __internal_480b6d2e4b70b4ccce4936e035b2ead64f8213fee7b9a90a92d1f2d0fee68eaa = context.get(`case`);
                if (typeof (__internal_480b6d2e4b70b4ccce4936e035b2ead64f8213fee7b9a90a92d1f2d0fee68eaa) !== 'object') {
                    throw new Runtime.TwingErrorRuntime('Variables passed to the "with" tag must be a hash.', 4, this.source);
                }
                context.set('_parent', Runtime.clone(context));
                context = this.env.mergeGlobals(Runtime.merge(context, Runtime.iteratorToMap(__internal_480b6d2e4b70b4ccce4936e035b2ead64f8213fee7b9a90a92d1f2d0fee68eaa)));
                // line 5, column 1
                Runtime.echo(`            <div class="demo--test--case">
                <header>
                    `);
                // line 7, column 21
                Runtime.echo(this.env.getFilter('escape').traceableCallable(7, this.source)(...[this.env, (context.has(`title`) ? context.get(`title`) : null), `html`, null, true]));
                Runtime.echo(`
                </header>
                <div class="demo--test--case--content">
                    `);
                // line 10, column 24
                let __internal_33edd7af866d6558b71210ef6a8e41e625f7bc78fe5773029da2505a5cb7c3bf = (context.has(`content`) ? context.get(`content`) : null);
                if (typeof (__internal_33edd7af866d6558b71210ef6a8e41e625f7bc78fe5773029da2505a5cb7c3bf) !== 'object') {
                    throw new Runtime.TwingErrorRuntime('Variables passed to the "with" tag must be a hash.', 10, this.source);
                }
                context.set('_parent', Runtime.clone(context));
                context = this.env.mergeGlobals(Runtime.merge(context, Runtime.iteratorToMap(__internal_33edd7af866d6558b71210ef6a8e41e625f7bc78fe5773029da2505a5cb7c3bf)));
                // line 11, column 1
                Runtime.echo(`                        `);
                Runtime.echo(this.env.getFunction('include').traceableCallable(11, this.source)(...[this.env, context, this.source, `test/poc/src/foo/index.html.twig`]));
                Runtime.echo(`
                    `);
                context = context.get('_parent');
                // line 13, column 1
                Runtime.echo(`                </div>
            </div>
        `);
                context = context.get('_parent');
                // line 16, column 1
                Runtime.echo(`    `);
                (() => {
                    let loop = context.get('loop');
                    loop.set('index0', loop.get('index0') + 1);
                    loop.set('index', loop.get('index') + 1);
                    loop.set('first', false);
                    if (loop.has('length')) {
                        loop.set('revindex0', loop.get('revindex0') - 1);
                        loop.set('revindex', loop.get('revindex') - 1);
                        loop.set('last', loop.get('revindex0') === 0);
                    }
                })();
            });
            (() => {
                let parent = context.get('_parent');
                context.delete('_seq');
                context.delete('_iterated');
                context.delete('_key');
                context.delete('case');
                context.delete('_parent');
                context.delete('loop');
                for (let [k, v] of parent) {
                    if (!context.has(k)) {
                        context.set(k, v);
                    }
                }
            })();
        }

        getTemplateName() {
            return `foo`;
        }

        isTraitable() {
            return false;
        }

        getDebugInfo() {
            return new Map([[94, {"line": 16, "column": 1}], [89, {"line": 13, "column": 1}], [83, {"line": 11, "column": 1}], [76, {"line": 10, "column": 24}], [70, {"line": 7, "column": 21}], [66, {"line": 5, "column": 1}], [58, {"line": 4, "column": 1}], [27, {"line": 3, "column": 8}], [23, {"line": 2, "column": 13}], [20, {"line": 1, "column": 1}]]);
        }

        getSourceContext() {
            return new Runtime.TwingSource(``, `foo`, ``);
        }
    };

    return templates;
};