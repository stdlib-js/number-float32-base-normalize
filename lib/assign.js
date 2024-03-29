/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var FLOAT32_SMALLEST_NORMAL = require( '@stdlib/constants-float32-smallest-normal' );
var PINF = require( '@stdlib/constants-float32-pinf' );
var NINF = require( '@stdlib/constants-float32-ninf' );
var abs = require( '@stdlib/math-base-special-absf' );
var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );


// VARIABLES //

// (1<<32)
var SCALAR = 8388608;


// MAIN //

/**
* Returns a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\) and assigns results to a provided output array.
*
* @private
* @param {number} x - single-precision floating-point number
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );
*
* var v = normalizef( toFloat32( 1.401e-45 ), [ 0.0, 0.0 ], 1, 0 );
* // returns [ 1.1754943508222875e-38, -23 ]
*
* @example
* var v = normalizef( 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ 0.0, 0 ];
*
* @example
* var PINF = require( '@stdlib/constants-float32-pinf' );
*
* var v = normalizef( PINF, [ 0.0, 0.0 ], 1, 0 );
* // returns [ +Infinity, 0 ]
*
* @example
* var NINF = require( '@stdlib/constants-float32-ninf' );
*
* var v = normalizef( NINF, [ 0.0, 0.0 ], 1, 0 );
* // returns [ -Infinity, 0 ]
*
* @example
* var v = normalizef( NaN, [ 0.0, 0.0 ], 1, 0 );
* // returns [ NaN, 0 ]
*/
function normalizef( x, out, stride, offset ) {
	if (
		x !== x ||
		x === PINF ||
		x === NINF
	) {
		out[ offset ] = x;
		out[ offset + stride ] = 0;
		return out;
	}
	if ( x !== 0.0 && abs( x ) < FLOAT32_SMALLEST_NORMAL ) {
		x = toFloat32( x*SCALAR );
		out[ offset ] = x;
		out[ offset + stride ] = -23;
		return out;
	}
	out[ offset ] = x;
	out[ offset + stride ] = 0;
	return out;
}


// EXPORTS //

module.exports = normalizef;
