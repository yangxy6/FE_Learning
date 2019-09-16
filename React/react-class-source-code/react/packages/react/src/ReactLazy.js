/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {LazyComponent, Thenable} from 'shared/ReactLazyComponent';

import {REACT_LAZY_TYPE} from 'shared/ReactSymbols';

// lazy是一个方法，参数是一个拥有promise的，返回一个LazyComponent，其中status记录Thenable状态，有0,1,2三个标志位，1->pending，result记录promise结果
export function lazy<T, R>(ctor: () => Thenable<T, R>): LazyComponent<T> {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1, //记录Thenable状态，-1->pending
    _result: null,
  };
}
