var isArray = require('is-array');

module.exports.geojsonType = geojsonType;
module.exports.collectionOf = collectionOf;
module.exports.featureOf = featureOf;

/**
 * Enforce expectations about types of GeoJSON objects for Turf.
 *
 * @alias geojsonType
 * @param {GeoJSON} value any GeoJSON object
 * @param {(Array<String>|String)} types expected GeoJSON type or types
 * @param {String} name name of calling function
 * @throws Error if value is not the expected type.
 */
function geojsonType(value, types, name) {
    if (!name) throw new Error('.is() requires a name');
    if (!value) throw new Error('Invalid input to ' + name);

    if (typeof types === 'string') {
        if (!value || value.type !== types) {
            throw new Error(
                'Invalid input to ' + name + ': must be a ' + types + ', given ' + value.type);
        }
    } else if (isArray(types)) {
        if (!value || types.indexOf(value.type) === -1) {
            throw new Error(
                'Invalid input to ' + name + ': must be one of (' +
                types.join(', ') + '), given ' + value.type);
        }
    } else {
        throw new Error('argument to .is() must be a string or array of strings');
    }
}

/**
 * Enforce expectations about types of {@link Feature} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @alias featureOf
 * @param {Feature} feature a feature with an expected geometry type
 * @param {(Array<String>|String)} types expected GeoJSON type or types
 * @param {String} name name of calling function
 * @throws Error if value is not the expected type.
 */
function featureOf(value, types, name) {
    if (!name) throw new Error('.collectionOf() requires a name');
    if (!value || value.type !== 'Feature' || !value.geometry) {
        throw new Error('Invalid input to ' + name + ', Feature with geometry required');
    }
    geojsonType(value.geometry, types, name);
}

/**
 * Enforce expectations about types of {@link FeatureCollection} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @alias collectionOf
 * @param {FeatureCollection} featurecollection a featurecollection for which features will be judged
 * @param {(Array<String>|String)} types expected GeoJSON type or types
 * @param {String} name name of calling function
 * @throws Error if value is not the expected type.
 */
function collectionOf(value, types, name) {
    if (!name) throw new Error('.collectionOf() requires a name');
    if (!value || value.type !== 'FeatureCollection') {
        throw new Error('Invalid input to ' + name + ', FeatureCollection required');
    }
    for (var i = 0; i < value.features.length; i++) {
        featureOf(value.features[i], types, name);
    }
}
