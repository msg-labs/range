/* eslint-disable array-bracket-newline */
/* eslint-disable array-element-newline */
/* eslint-disable no-magic-numbers */
const range = require( './array.js' );

describe( 'Range: array format', () => {

    it( 'accepts possitive values as single parameters', () => {
        expect( range( 3 ) ).toStrictEqual( [ 0, 1, 2 ] );
    } );

    it( 'takes a starting number and an ending number', () => {
        expect( range( 1, 5 ) ).toStrictEqual( [ 1, 2, 3, 4 ] );
    } );

    it( 'returns an empty array if the single parameter is zero', () => {
        expect( range( 0 ) ).toStrictEqual( [] );
    } );

} );

