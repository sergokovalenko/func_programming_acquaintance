const pipe = (...func) => () => func.reduceRight((acc, func) => func(acc), '');

module.exports = pipe;
