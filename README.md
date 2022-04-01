<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Normalize

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.



<section class="usage">

## Usage

To use in Observable,

```javascript
normalizef = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-normalize@umd/bundle.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-normalize@umd/bundle.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.normalizef;
})();
</script>
```

#### normalizef( \[out,] x )

Returns a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.

```javascript
var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );

var out = normalizef( toFloat32( 1.401e-45 ) );
// returns [ 1.1754943508222875e-38, -23 ]
```

By default, the function returns `y` and `exp` as a two-element `array`.

```javascript
var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var pow = require( '@stdlib/math-base-special-pow' );

var out = normalizef( toFloat32( 1.401e-45 ) );
// returns [ 1.1754943508222875e-38, -23 ]

var y = out[ 0 ];
var exp = out[ 1 ];

var bool = ( y*pow(2, exp) === toFloat32(1.401e-45) );
// returns true
```

To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var Float32Array = require( '@stdlib/array-float32' );

var out = new Float32Array( 2 );

var v = normalizef( out, toFloat32( 1.401e-45 ) );
// returns <Float32Array>[ 1.1754943508222875e-38, -23 ]

var bool = ( v === out );
// returns true
```

The function expects a finite, non-zero [single-precision floating-point number][ieee754] `x`. If `x == 0`,

```javascript
var out = normalizef( 0.0 );
// returns [ 0.0, 0 ];
```

If `x` is either positive or negative `infinity` or `NaN`,

```javascript
var PINF = require( '@stdlib/constants-float32-pinf' );
var NINF = require( '@stdlib/constants-float32-ninf' );

var out = normalizef( PINF );
// returns [ Infinity, 0 ]

out = normalizef( NINF );
// returns [ -Infinity, 0 ]

out = normalizef( NaN );
// returns [ NaN, 0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   While the function accepts higher precision [floating-point numbers][ieee754], beware that providing such numbers can be a source of subtle bugs as the relation `x = y * 2^exp` may **not** hold.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-normalize@umd/bundle.js"></script>
<script type="text/javascript">
(function () {

var frac;
var exp;
var x;
var v;
var i;

// Generate denormalized single-precision floating-point numbers and then normalize them...
for ( i = 0; i < 100; i++ ) {
    frac = randu() * 10.0;
    exp = 38 + round( randu()*6.0 );
    x = frac * pow( 10.0, -exp );
    x = toFloat32( x );
    v = normalizef( x );
    console.log( '%d = %d * 2^%d = %d', x, v[0], v[1], v[0]*pow(2.0, v[1]) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float32-base-normalize.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float32-base-normalize

[test-image]: https://github.com/stdlib-js/number-float32-base-normalize/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-float32-base-normalize/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float32-base-normalize/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float32-base-normalize?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float32-base-normalize.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float32-base-normalize/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float32-base-normalize/tree/deno
[umd-url]: https://github.com/stdlib-js/number-float32-base-normalize/tree/umd
[esm-url]: https://github.com/stdlib-js/number-float32-base-normalize/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float32-base-normalize/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
