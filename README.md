# Lotide 🌊

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @teknoboten/lotide`

**Require it:**

`const _ = require('@teknoboten/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: return the first element of an array
* `tail(...)`: return everything but the head of an array
* `middle(...)`: return the middle element(s) of an array
* `assertArraysEqual(...)`: check for equality between two arrays and log result to console
* `assertEqual(...)`: check for equality between two values and log result to console
* `eqArrays(...)`: checks for equality between two arrays and returns true / false
* `countLetters(...)`: counts how many times every letter in a string occurs
* `countOnly(...)`: counts only the desired elements in an array
* `assertObjectsEqual(...)`: check for equality between two objects and log result to console
* `findKey(...)`: find and return the key of a given value within an object
* `findKeyByValue(...)`: find and return the value of a given key within an object
* `flatten(...)`: flatten two dimensional arrays (more dimensions pending)
* `letterPositions(...)`: counts at which indexes letters occur within a given string and returns an object
* `map(...)`: performs a given callback on every element in a array and returns a new array
* `takeUntil(...)`: pushes every element in an array to a new array until the given callback returns turn
* `without(...)`: filters items in a given array1 from array2 and returns a new array
* `eqObjects(...)`: checks for equality between two arrays and returns true / false