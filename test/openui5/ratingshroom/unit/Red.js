'use strict';

sap.ui.require([ // x1
  'openui5/ratingshroom/Red'
], function(Red) {
  const {test} = QUnit;

  QUnit.module('RatingShroom', function() {
    QUnit.module('constructor', () => {
      test('Should instantiate the control', (assert) => {
        assert.ok(new Red());
      });
    });
  });
});
