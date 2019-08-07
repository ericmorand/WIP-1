let {TwingEnvironment, TwingLoaderRelativeFilesystem} = require('twing');

let env = new TwingEnvironment(new TwingLoaderRelativeFilesystem());

let template = env.loadTemplate('demo.html.twig');

console.warn(template.render({
    children:
        {
            css: [
                {
                    name: 'demo.css',
                    content: '.foo {}'
                },
                {
                    name: 'index.css',
                    content: '.foo {}'
                }
            ],
            js: [
                {
                    name: 'demo.js',
                    content: 'console.warn("demo");'
                },
                {
                    name: 'index.js',
                    content: 'console.warn("index");'
                }
            ],
            html: [
                {
                    name: 'demo.html',
                    content: 'console.warn("demo");'
                },
                {
                    name: 'index.html',
                    content: 'console.warn("index");'
                }
            ]
        }
}));