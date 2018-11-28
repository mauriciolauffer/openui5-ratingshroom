sap.ui.require([
  'openui5/ratingshroom/Red'
], function(Red) {
  'use strict';

  const { test } = QUnit;

  QUnit.module('RatingShroom', function() {
    QUnit.module('constructor', () => {
      test('Should instantiate the control', (assert) => {
        assert.ok(new Red());
      });
    });
  });

});
