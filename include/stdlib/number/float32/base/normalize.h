/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

#ifndef STDLIB_NUMBER_FLOAT32_BASE_NORMALIZE_H
#define STDLIB_NUMBER_FLOAT32_BASE_NORMALIZE_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Returns a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.
*/
void stdlib_base_float32_normalize( const float x, float *y, int32_t *exp );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NUMBER_FLOAT32_BASE_NORMALIZE_H
