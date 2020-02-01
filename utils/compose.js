const compose = (...func) => () => func.reduce((acc, func) => func(acc), '');

module.exports = compose;
