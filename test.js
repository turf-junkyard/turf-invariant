var test = require('tape'),
    invariant = require('./');

test('invariant#is', function(t) {
    t.throws(function() {
        invariant.is();
    }, /requires a name/, '.is() name requirement');

    t.throws(function() {
        invariant.is(undefined, [], 'myfn');
    }, /Invalid input to myfn/, 'undefined value');

    t.throws(function() {
        invariant.is({
            type: 'Point',
            coordinates: [0, 0]
        }, 'Polygon', 'myfn');
    }, /Invalid input to myfn: must be a Polygon, given Point/, 'invalid geometry type');

    t.doesNotThrow(function() {
        invariant.is({
            type: 'Point',
            coordinates: [0, 0]
        }, 'Point', 'myfn');
    }, 'valid geometry');

    t.doesNotThrow(function() {
        invariant.is({
            type: 'Point',
            coordinates: [0, 0]
        }, ['Polygon', 'Point'], 'myfn');
    }, 'valid geometry in array');

    t.throws(function() {
        invariant.is({
            type: 'Point',
            coordinates: [0, 0]
        }, ['LineString', 'Polygon'], 'myfn');
    }, 'invalid geometry in array');

    t.end();
});
