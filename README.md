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

# Gumbel

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Gumbel distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-gumbel
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var gumbel = require( '@stdlib/stats-base-dists-gumbel' );
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

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var gumbel = require( '@stdlib/stats-base-dists-gumbel' );

console.log( objectKeys( gumbel ) );
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

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-gumbel.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-gumbel

[test-image]: https://github.com/stdlib-js/stats-base-dists-gumbel/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-gumbel/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-gumbel/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-gumbel?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-gumbel.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-gumbel/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-gumbel/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-gumbel/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-gumbel/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-gumbel/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-gumbel/main/LICENSE

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/gumbel/ctor]: https://github.com/stdlib-js/stats-base-dists-gumbel-ctor

[@stdlib/stats/base/dists/gumbel/entropy]: https://github.com/stdlib-js/stats-base-dists-gumbel-entropy

[@stdlib/stats/base/dists/gumbel/kurtosis]: https://github.com/stdlib-js/stats-base-dists-gumbel-kurtosis

[@stdlib/stats/base/dists/gumbel/mean]: https://github.com/stdlib-js/stats-base-dists-gumbel-mean

[@stdlib/stats/base/dists/gumbel/median]: https://github.com/stdlib-js/stats-base-dists-gumbel-median

[@stdlib/stats/base/dists/gumbel/mode]: https://github.com/stdlib-js/stats-base-dists-gumbel-mode

[@stdlib/stats/base/dists/gumbel/skewness]: https://github.com/stdlib-js/stats-base-dists-gumbel-skewness

[@stdlib/stats/base/dists/gumbel/stdev]: https://github.com/stdlib-js/stats-base-dists-gumbel-stdev

[@stdlib/stats/base/dists/gumbel/variance]: https://github.com/stdlib-js/stats-base-dists-gumbel-variance

[@stdlib/stats/base/dists/gumbel/cdf]: https://github.com/stdlib-js/stats-base-dists-gumbel-cdf

[@stdlib/stats/base/dists/gumbel/logcdf]: https://github.com/stdlib-js/stats-base-dists-gumbel-logcdf

[@stdlib/stats/base/dists/gumbel/logpdf]: https://github.com/stdlib-js/stats-base-dists-gumbel-logpdf

[@stdlib/stats/base/dists/gumbel/mgf]: https://github.com/stdlib-js/stats-base-dists-gumbel-mgf

[@stdlib/stats/base/dists/gumbel/pdf]: https://github.com/stdlib-js/stats-base-dists-gumbel-pdf

[@stdlib/stats/base/dists/gumbel/quantile]: https://github.com/stdlib-js/stats-base-dists-gumbel-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
