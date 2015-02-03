# turf-invariant

[![build status](https://secure.travis-ci.org/Turfjs/turf-invariant.png)](http://travis-ci.org/Turfjs/turf-invariant)

enforce expectations about inputs to turf


### `is(value, types, name)`

Enforce expectations about types of inputs for Turf.


### Parameters

| parameter | type                  | description                                  |
| --------- | --------------------- | -------------------------------------------- |
| `value`   |                       | any kind of value, including GeoJSON objects |
| `types`   | Array.<String>,String | expected GeoJSON type or types               |
| `name`    | String                | name of calling function                     |


## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-invariant
```

## Tests

```sh
$ npm test
```

