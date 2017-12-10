module('util-unit-tests', {});

test('should capitalise word', 1, function() {
    deepEqual(swlcalc.util.capitalise('swlcalc'), 'Swlcalc');
});

test('should return blank if None/none', 2, function() {
    deepEqual(swlcalc.util.blankIfNone('none'), '');
    deepEqual(swlcalc.util.blankIfNone('None'), '');
});