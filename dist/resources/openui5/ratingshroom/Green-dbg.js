sap.ui.define([
  'sap/m/RatingIndicator'
], function(RatingIndicator) {
  'use strict';

  const greenShroom = 'data:image/png;base64,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';
  const grayShroom = 'data:image/png;base64,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';

  /**
   * openui5.ratingshroom.RatingShroom
   *
   * @namespace
   * @author Mauricio Lauffer
   * @version 0.0.1
   *
   * openui5.ratingshroom.RatingShroom extends sap.m.RatingIndicator
   */
  const RatingShroom = RatingIndicator.extend('openui5.ratingshroom.Green', {
    metadata : {
      library : 'openui5.ratingshroom',
      properties : {
        /**
         * The URI to the icon font icon or image that will be displayed for selected rating symbols. A star icon will be used if the property is not set
         */
        iconSelected: {type: 'sap.ui.core.URI', group: 'Behavior', defaultValue: greenShroom},

        /**
         * The URI to the icon font icon or image that will be displayed for all unselected rating symbols. A star icon will be used if the property is not set
         */
        iconUnselected: {type: 'sap.ui.core.URI', group: 'Behavior', defaultValue: grayShroom},

        /**
         * The URI to the icon font icon or image that will be displayed for hovered rating symbols. A star icon will be used if the property is not set
         */
        iconHovered: {type: 'sap.ui.core.URI', group: 'Behavior', defaultValue: greenShroom}
      }
    }
  });

  return RatingShroom;
});
