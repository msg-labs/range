export const range = ( start = 0, end, step = 1 ) => {

    const map = ( element, index ) => end === undefined ? index : index + start;
    const length = end === undefined ? start : end - start;

    var arr = Array.from( {
        length
    }, map );

    return arr.filter( ( element , index ) => index % step === 0 );

};


export function * rangeIterator ( start = 0, end = 0, step = 1 ) {
    if ( (start - end ) / step < 0 ) {
        end += (start - end) % step
        while ( start != end ) {
            yield start
            start += step;
        }
    }
}
