const defaultStart = 0;
const defaultStep = 1;
const defaultEnd = 0;

function* range (
    start = defaultStart,
    end = defaultEnd,
    step = defaultStep
) {
    const lastStep = 0;
    let progress = end;
    let yieldValue = start;

    if ( ( yieldValue - progress ) / step < lastStep ) {
        progress += ( yieldValue - progress ) % step;
        while ( yieldValue !== progress ) {
            yield start;
            yieldValue += step;
        }
    }
}

module.exports = range;
