const getIterator = callback => {
    const decriment = val => (val - 1);
    const incriment = val => (val + 1);

    const iterator = (from, to) => {
        const isIncrementRealization = to >= from;
        callback(from);

        if (from === to || from - 1 === to || from + 1 === to) {
            return from;
        }
        
        return iterator(isIncrementRealization ? incriment(from) : decriment(to), to);
    }

    return iterator;
};

module.exports = getIterator;
