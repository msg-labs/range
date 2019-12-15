const defaultStart = 0;
const defaultStep = 1;

const range = ( start = defaultStart, end, step = defaultStep ) => {

    const map = ( element, index ) => (
        typeof end === 'undefined' ? index : index + start
    );
    const length = typeof end === 'undefined' ? start : end - start;

    const arr = Array.from( {
        length
    }, map );

    return arr.filter( ( element, index ) => index % step === defaultStart );

};

module.exports = range;
