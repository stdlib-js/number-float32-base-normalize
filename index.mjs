// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.1-esm/index.mjs";function r(s,r,o,d){return s!=s||s===n||s===e?(r[d]=s,r[d+o]=0,r):0!==s&&i(s)<t?(s=m(8388608*s),r[d]=s,r[d+o]=-23,r):(r[d]=s,r[d+o]=0,r)}function o(s){return r(s,[0,0],1,0)}s(o,"assign",r);export{r as assign,o as default};
//# sourceMappingURL=index.mjs.map
