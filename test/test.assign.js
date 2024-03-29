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

var tape = require( 'tape' );
var pow = require( '@stdlib/math-base-special-pow' );
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var isnan = require( '@stdlib/math-base-assert-is-nanf' );
var PINF = require( '@stdlib/constants-float32-pinf' );
var NINF = require( '@stdlib/constants-float32-ninf' );
var Float32Array = require( '@stdlib/array-float32' );
var FLOAT32_SMALLEST_NORMAL = require( '@stdlib/constants-float32-smallest-normal' );
var FLOAT32_SMALLEST_SUBNORMAL = require( '@stdlib/constants-float32-smallest-subnormal' ); // eslint-disable-line id-length
var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var normalizef = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof normalizef, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function normalizes a denormalized number, returning a normal number and an exponent', function test( t ) {
	var frac;
	var exp;
	var out;
	var x1;
	var x;
	var v;
	var i;

	// Smallest denormalized number:
	out = [ 0.0, 0.0 ];
	v = normalizef( FLOAT32_SMALLEST_SUBNORMAL, out, 1, 0 );
	t.equal( v, out, 'returns output array' );
	t.ok( v[ 0 ] >= FLOAT32_SMALLEST_NORMAL, 'returns a normal number' );
	t.equal( v[ 0 ]*pow( 2.0, v[ 1 ] ), FLOAT32_SMALLEST_SUBNORMAL, 'x = y * 2^exp' );

	// Other subnormals...
	for ( i = 0; i < 1000; i++ ) {
		frac = 0.26 + (randu()*10.0); // 0.26 prevents underflow
		exp = -38 - round( randu()*6.0 );
		x = frac * pow( 10.0, exp );
		x = toFloat32( x );

		out = [ 0.0, 0.0 ];
		v = normalizef( x, out, 1, 0 );
		t.equal( v, out, 'returns output array' );
		t.ok( v[ 0 ] >= FLOAT32_SMALLEST_NORMAL, 'returns a normal number ' + v[0] );

		x1 = v[ 0 ] * pow( 2.0, v[ 1 ] );
		x1 = toFloat32( x1 );
		t.equal( x1, x, 'y*2^exp=x. y='+v[0]+', exp='+v[1]+', x='+x );
	}
	t.end();
});

tape( 'the function returns `[0,0]` if provided a `0`', function test( t ) {
	var out;
	var val;

	out = [ 0, 0 ];
	val = normalizef( 0.0, out, 1, 0 );
	t.equal( val, out, 'returns output array' );
	t.deepEqual( val, [0.0, 0], 'returns [0,0]' );
	t.end();
});

tape( 'the function returns `[+inf,0]` if provided a `+infinity`', function test( t ) {
	var out;
	var val;

	out = [ 0.0, 0.0 ];
	val = normalizef( PINF, out, 1, 0 );
	t.equal( val, out, 'returns output array' );
	t.deepEqual( val, [PINF, 0], 'returns [+inf,0]' );
	t.end();
});

tape( 'the function returns `[-inf,0]` if provided a `-infinity`', function test( t ) {
	var out;
	var val;

	out = [ 0.0, 0.0 ];
	val = normalizef( NINF, out, 1, 0 );
	t.equal( val, out, 'returns output array' );
	t.deepEqual( val, [NINF, 0], 'returns [-inf,0]' );
	t.end();
});

tape( 'the function returns `[NaN,0]` if provided a `NaN`', function test( t ) {
	var out;
	var val;

	out = [ 0.0, 0.0 ];
	val = normalizef( NaN, out, 1, 0 );
	t.equal( val, out, 'returns output array' );
	t.equal( isnan( val[0] ), true, 'first element is NaN' );
	t.equal( val[1], 0, 'second element is 0' );
	t.end();
});

tape( 'the function supports providing an output array (array)', function test( t ) {
	var out;
	var val;

	out = [ 3.14, 3.14 ];
	val = normalizef( 0.0, out, 1, 0 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0.0, 'first element is 0' );
	t.strictEqual( val[ 1 ], 0, 'second element is 0' );

	t.end();
});

tape( 'the function supports providing an output array (typed array)', function test( t ) {
	var out;
	var val;

	out = new Float32Array( 2 );
	out[ 0 ] = 3.14;
	out[ 1 ] = 3.14;

	val = normalizef( 0.0, out, 1, 0 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0.0, 'first element is 0' );
	t.strictEqual( val[ 1 ], 0, 'second element is 0' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var out;
	var val;

	out = new Float32Array( 4 );
	val = normalizef( toFloat32( 1.401e-45 ), out, 2, 0 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 1.1754943508222875e-38, 'returns expected value' );
	t.strictEqual( val[ 1 ], 0, 'returns expected value' );
	t.strictEqual( val[ 2 ], -23, 'returns expected value' );
	t.strictEqual( val[ 3 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var out;
	var val;

	out = new Float32Array( 4 );
	val = normalizef( toFloat32( 1.401e-45 ), out, 2, 1 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0, 'returns expected value' );
	t.strictEqual( val[ 1 ], 1.1754943508222875e-38, 'returns expected value' );
	t.strictEqual( val[ 2 ], 0, 'returns expected value' );
	t.strictEqual( val[ 3 ], -23, 'returns expected value' );

	t.end();
});
