/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

 // 二进制数据存储，方便一位操作（逻辑运算），&|操作
export type TypeOfMode = number;

export const NoContext = 0b000; // 0
export const ConcurrentMode = 0b001; // 1
export const StrictMode = 0b010; // 2
export const ProfileMode = 0b100; // 4
