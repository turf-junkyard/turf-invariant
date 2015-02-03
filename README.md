# turf-invariant

[![build status](https://secure.travis-ci.org/Turfjs/turf-invariant.png)](http://travis-ci.org/Turfjs/turf-invariant)

enforce expectations about inputs to turf


### `geojsonType(value, types, name)`

Enforce expectations about types of GeoJSON objects for Turf.


### Parameters

| parameter | type                  | description                    |
| --------- | --------------------- | ------------------------------ |
| `value`   | GeoJSON               | any GeoJSON object             |
| `types`   | Array.<String>,String | expected GeoJSON type or types |
| `name`    | String                | name of calling function       |


## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-invariant
```

## Tests

```sh
$ npm test
```


### `featureOf(featurecollection, types, name)`

Enforce expectations about types of Feature inputs for Turf.
Internally this uses geojsonType to judge geometry types.


### Parameters

| parameter           | type                  | description                                           |
| ------------------- | --------------------- | ----------------------------------------------------- |
| `featurecollection` | FeatureCollection     | a featurecollection for which features will be judged |
| `types`             | Array.<String>,String | expected GeoJSON type or types                        |
| `name`              | String                | name of calling function                              |


## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-invariant
```

## Tests

```sh
$ npm test
```


### `collectionOf(featurecollection, types, name)`

Enforce expectations about types of FeatureCollection inputs for Turf.
Internally this uses geojsonType to judge geometry types.


### Parameters

| parameter           | type                  | description                                           |
| ------------------- | --------------------- | ----------------------------------------------------- |
| `featurecollection` | FeatureCollection     | a featurecollection for which features will be judged |
| `types`             | Array.<String>,String | expected GeoJSON type or types                        |
| `name`              | String                | name of calling function                              |


## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-invariant
```

## Tests

```sh
$ npm test
```

