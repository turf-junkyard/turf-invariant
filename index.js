var isArray = require('is-array');

module.exports.is = is;

/**
 * Enforce expectations about types of inputs for Turf.
 *
 * @alias is
 * @param {*} value any kind of value, including {@link GeoJSON} objects
 * @param {(Array<String>|String)} types expected GeoJSON type or types
 * @param {String} name name of calling function
 * @throws Error if value is not the expected type.
 */
function is(value, types, name) {
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
