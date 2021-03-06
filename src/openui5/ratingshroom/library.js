sap.ui.define([], function() {
  'use strict';

  /**
   * OpenUI5 library: openui5.ratingshroom
   *
   * @namespace
   * @name openui5.ratingshroom
   * @author Mauricio Lauffer
   * @version ${version}
   * @public
   */
  return sap.ui.getCore().initLibrary({
    name: 'openui5.ratingshroom',
    dependencies: [
      'sap.ui.core',
      'sap.m'
    ],
    controls: ['openui5.ratingshroom.Green', 'openui5.ratingshroom.Red'],
    noLibraryCSS: true,
    version: '${version}'
  });
});
