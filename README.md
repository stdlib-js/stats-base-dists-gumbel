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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Gumbel

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Gumbel distribution.



<section class="usage">

## Usage

To use in Observable,

```javascript
gumbel = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var gumbel = require( 'path/to/vendor/umd/stats-base-dists-gumbel/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.gumbel;
})();
</script>
```

#### gumbel

Gumbel distribution.

```javascript
var dist = gumbel;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu, beta )`][@stdlib/stats/base/dists/gumbel/cdf]</span><span class="delimiter">: </span><span class="description">Gumbel distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, mu, beta )`][@stdlib/stats/base/dists/gumbel/logcdf]</span><span class="delimiter">: </span><span class="description">Gumbel distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, mu, beta )`][@stdlib/stats/base/dists/gumbel/logpdf]</span><span class="delimiter">: </span><span class="description">Gumbel distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, mu, beta )`][@stdlib/stats/base/dists/gumbel/mgf]</span><span class="delimiter">: </span><span class="description">Gumbel distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, mu, beta )`][@stdlib/stats/base/dists/gumbel/pdf]</span><span class="delimiter">: </span><span class="description">Gumbel distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, mu, beta )`][@stdlib/stats/base/dists/gumbel/quantile]</span><span class="delimiter">: </span><span class="description">Gumbel distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( mu, beta )`][@stdlib/stats/base/dists/gumbel/entropy]</span><span class="delimiter">: </span><span class="description">Gumbel distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( mu, beta )`][@stdlib/stats/base/dists/gumbel/kurtosis]</span><span class="delimiter">: </span><span class="description">Gumbel distribution excess kurtosis.</span>
-   <span class="signature">[`mean( mu, beta )`][@stdlib/stats/base/dists/gumbel/mean]</span><span class="delimiter">: </span><span class="description">Gumbel distribution expected value.</span>
-   <span class="signature">[`median( mu, beta )`][@stdlib/stats/base/dists/gumbel/median]</span><span class="delimiter">: </span><span class="description">Gumbel distribution median.</span>
-   <span class="signature">[`mode( mu, beta )`][@stdlib/stats/base/dists/gumbel/mode]</span><span class="delimiter">: </span><span class="description">Gumbel distribution mode.</span>
-   <span class="signature">[`skewness( mu, beta )`][@stdlib/stats/base/dists/gumbel/skewness]</span><span class="delimiter">: </span><span class="description">Gumbel distribution skewness.</span>
-   <span class="signature">[`stdev( mu, beta )`][@stdlib/stats/base/dists/gumbel/stdev]</span><span class="delimiter">: </span><span class="description">Gumbel distribution standard deviation.</span>
-   <span class="signature">[`variance( mu, beta )`][@stdlib/stats/base/dists/gumbel/variance]</span><span class="delimiter">: </span><span class="description">Gumbel distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Gumbel][gumbel-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Gumbel( [mu, beta] )`][@stdlib/stats/base/dists/gumbel/ctor]</span><span class="delimiter">: </span><span class="description">Gumbel distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Gumbel = require( '@stdlib/stats-base-dists-gumbel' ).Gumbel;

var dist = new Gumbel( 2.0, 4.0 );

var y = dist.pdf( 2.0 );
// returns ~0.092
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-mean@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-variance@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-stdev@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gumbel@umd/browser.js"></script>
<script type="text/javascript">
(function () {.factory;
var gumbel = require( '@stdlib/stats-base-dists-gumbel' );

// Set the parameters of the Gumbel distribution:
var mu = 30.0;   // Location parameter (e.g., average annual maximum temperature in °C)
var beta = 5.0;  // Scale parameter

// Simulate annual maximum daily temperatures over 1000 years:
var N = 1000;
var rgumbel = randGumbel( mu, beta );
var maxTemperatures = filledarrayBy( N, 'float64', rgumbel );

// Compute theoretical statistics of the Gumbel distribution:
var theoreticalMean = gumbel.mean( mu, beta);
var theoreticalVariance = gumbel.variance( mu, beta );
var theoreticalStdev = gumbel.stdev( mu, beta );

// Compute sample statistics of the simulated data:
var sampleMean = mean( N, maxTemperatures, 1 );
var sampleVariance = variance( N, 1, maxTemperatures, 1 ); // with Bessel's correction
var sampleStdev = stdev( N, 1, maxTemperatures, 1 ); // with Bessel's correction

// Display theoretical and sample statistics:
console.log( '--- Statistical Comparison ---\n' );
console.log( 'Mean:');
console.log( '  Theoretical: %d°C', theoreticalMean.toFixed(2) );
console.log( '  Sample:      %d°C\n', sampleMean.toFixed(2) );
console.log( 'Variance:');
console.log( '  Theoretical: %d°C²', theoreticalVariance.toFixed(2) );
console.log( '  Sample:      %d°C²\n', sampleVariance.toFixed(2) );
console.log( 'Standard Deviation:' );
console.log( '  Theoretical: %d°C', theoreticalStdev.toFixed(2) );
console.log( '  Sample:      %d°C\n', sampleStdev.toFixed(2) );

// Define quantile probabilities:
var p = new Float64Array( [ 0.25, 0.5, 0.75 ] );
var label = [ 'First Quartile', 'Median', 'Third Quartile' ];
var theoreticalQuantiles = new Float64Array([
    gumbel.quantile( p[0], mu, beta ),
    gumbel.quantile( p[1], mu, beta ),
    gumbel.quantile( p[2], mu, beta )
]);

console.log( 'Quantiles:' );
var i;
for ( i = 0; i < p.length; i++ ) {
    console.log( label[i] + ': %d°C', theoreticalQuantiles[i].toFixed(2) );
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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-gumbel.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-gumbel

[test-image]: https://github.com/stdlib-js/stats-base-dists-gumbel/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-gumbel/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-gumbel/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-gumbel?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-gumbel.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-gumbel/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-gumbel/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-gumbel/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-gumbel/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-gumbel/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-gumbel/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-gumbel/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-gumbel/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-gumbel/main/LICENSE

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/gumbel/ctor]: https://github.com/stdlib-js/stats-base-dists-gumbel-ctor/tree/umd

[@stdlib/stats/base/dists/gumbel/entropy]: https://github.com/stdlib-js/stats-base-dists-gumbel-entropy/tree/umd

[@stdlib/stats/base/dists/gumbel/kurtosis]: https://github.com/stdlib-js/stats-base-dists-gumbel-kurtosis/tree/umd

[@stdlib/stats/base/dists/gumbel/mean]: https://github.com/stdlib-js/stats-base-dists-gumbel-mean/tree/umd

[@stdlib/stats/base/dists/gumbel/median]: https://github.com/stdlib-js/stats-base-dists-gumbel-median/tree/umd

[@stdlib/stats/base/dists/gumbel/mode]: https://github.com/stdlib-js/stats-base-dists-gumbel-mode/tree/umd

[@stdlib/stats/base/dists/gumbel/skewness]: https://github.com/stdlib-js/stats-base-dists-gumbel-skewness/tree/umd

[@stdlib/stats/base/dists/gumbel/stdev]: https://github.com/stdlib-js/stats-base-dists-gumbel-stdev/tree/umd

[@stdlib/stats/base/dists/gumbel/variance]: https://github.com/stdlib-js/stats-base-dists-gumbel-variance/tree/umd

[@stdlib/stats/base/dists/gumbel/cdf]: https://github.com/stdlib-js/stats-base-dists-gumbel-cdf/tree/umd

[@stdlib/stats/base/dists/gumbel/logcdf]: https://github.com/stdlib-js/stats-base-dists-gumbel-logcdf/tree/umd

[@stdlib/stats/base/dists/gumbel/logpdf]: https://github.com/stdlib-js/stats-base-dists-gumbel-logpdf/tree/umd

[@stdlib/stats/base/dists/gumbel/mgf]: https://github.com/stdlib-js/stats-base-dists-gumbel-mgf/tree/umd

[@stdlib/stats/base/dists/gumbel/pdf]: https://github.com/stdlib-js/stats-base-dists-gumbel-pdf/tree/umd

[@stdlib/stats/base/dists/gumbel/quantile]: https://github.com/stdlib-js/stats-base-dists-gumbel-quantile/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
