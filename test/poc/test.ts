import {TwingExtensionStringLoader, TwingLoaderRelativeFilesystem} from "twing";
import {TwingEnvironmentNode} from "twing/lib/environment/node";
import {TwigComponent} from "./lib/Component/Twig";
import {SassComponent} from "./lib/Component/Sass";
import {Source} from "../../src/Source";
import {DemoComponent} from "./lib/Component/Demo";
import {CompilationResult} from "../../src/CompilationResult";
import {Component} from "../../src/Component";
import {TestComponent} from "./lib/Component/Test";

let demoComponent = new DemoComponent('demo', new Source(null, 'test/poc/src/index.html.twig'), [
    new TwigComponent('body', null, [
        new TestComponent(new TwigComponent('foo', new Source(null, 'test/poc/src/foo/index.html.twig'))),
        new TwigComponent('bar', new Source(null, 'test/poc/src/bar/index.html.twig')),
        new TwigComponent('lorem', new Source(Buffer.from('LOREM IPSUM'), null))
    ]),
    new Component('styles', null, [
        new SassComponent('foo.css', new Source(null, 'test/poc/src/foo/index.scss')),
        new SassComponent('bar.css', new Source(null, 'test/poc/src/bar/index.scss'))
    ]),
    new Component('scripts', null, [
        new SassComponent('foo.css', new Source(null, 'test/poc/src/foo/index.scss')),
        new SassComponent('bar.css', new Source(null, 'test/poc/src/bar/index.scss'))
    ])
]);

let env = new TwingEnvironmentNode(new TwingLoaderRelativeFilesystem(), {
    cache: 'tmp'
});

env.addExtension(new TwingExtensionStringLoader());

demoComponent.compile({env: env})
    .then((buffer: CompilationResult) => {
        console.warn(buffer.data.toString());
    });
