/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import normalizef = require( './index' );
import toFloat32 = require( '@stdlib/number-float64-base-to-float32' );


// TESTS //

// The function returns an array...
{
	normalizef( toFloat32( 1.401e-45 ) ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a last argument that is not a number...
{
	normalizef( '5' ); // $ExpectError
	normalizef( true ); // $ExpectError
	normalizef( false ); // $ExpectError
	normalizef( null ); // $ExpectError
	normalizef( {} ); // $ExpectError
	normalizef( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	normalizef(); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array-like object containing numbers...
{
	const out = [ 0.0, 0.0 ];

	normalizef.assign( toFloat32( 1.401e-45 ), out, 1, 0 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	normalizef.assign( true, out, 1, 0 ); // $ExpectError
	normalizef.assign( false, out, 1, 0 ); // $ExpectError
	normalizef.assign( '5', out, 1, 0 ); // $ExpectError
	normalizef.assign( null, out, 1, 0 ); // $ExpectError
	normalizef.assign( [], out, 1, 0 ); // $ExpectError
	normalizef.assign( {}, out, 1, 0 ); // $ExpectError
	normalizef.assign( ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	normalizef.assign( 1.0, 1, 1, 0 ); // $ExpectError
	normalizef.assign( 1.0, true, 1, 0 ); // $ExpectError
	normalizef.assign( 1.0, false, 1, 0 ); // $ExpectError
	normalizef.assign( 1.0, null, 1, 0 ); // $ExpectError
	normalizef.assign( 1.0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	normalizef.assign( 1.0, out, '5', 0 ); // $ExpectError
	normalizef.assign( 1.0, out, true, 0 ); // $ExpectError
	normalizef.assign( 1.0, out, false, 0 ); // $ExpectError
	normalizef.assign( 1.0, out, null, 0 ); // $ExpectError
	normalizef.assign( 1.0, out, [], 0 ); // $ExpectError
	normalizef.assign( 1.0, out, {}, 0 ); // $ExpectError
	normalizef.assign( 1.0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	normalizef.assign( 1.0, out, 1, '5' ); // $ExpectError
	normalizef.assign( 1.0, out, 1, true ); // $ExpectError
	normalizef.assign( 1.0, out, 1, false ); // $ExpectError
	normalizef.assign( 1.0, out, 1, null ); // $ExpectError
	normalizef.assign( 1.0, out, 1, [] ); // $ExpectError
	normalizef.assign( 1.0, out, 1, {} ); // $ExpectError
	normalizef.assign( 1.0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = [ 0.0, 0.0 ];

	normalizef.assign(); // $ExpectError
	normalizef.assign( 1.0 ); // $ExpectError
	normalizef.assign( 1.0, out ); // $ExpectError
	normalizef.assign( 1.0, out, 1 ); // $ExpectError
	normalizef.assign( 1.0, out, 1, 0, 1 ); // $ExpectError
}
