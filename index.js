const compose = require('./utils/compose');
const pipe = require('./utils/pipe');

const connectNextMessageWith = str => strForConnection => `${str} ${strForConnection || ''}`;

const hello = connectNextMessageWith('Hello,');
const greeting = connectNextMessageWith('my name is Sergei');
const info = connectNextMessageWith('and I\'m learning functional programming');

const funcCaller = (hello, greeting, info) => hello(greeting(info()));

funcCaller(hello, greeting, info);
compose(hello, greeting, info)();
pipe(hello, greeting, info)();
