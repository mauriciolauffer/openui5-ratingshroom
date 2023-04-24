'use strict';

/*
 * ${copyright}
 */

sap.ui.define([
  'sap/ui/core/Core',
  'sap/ui/core/library',
  'sap/m/library'
],
/**
 * Module Dependencies
 *
 * @param {sap.ui.core.Core} Core - sap.ui.core.Core
 * @returns {object} library
 */
function(Core) {
  /**
   * OpenUI5 library: openui5.ratingshroom
   *
   * @namespace
   * @name openui5.ratingshroom
   * @author Mauricio Lauffer
   * @version ${version}
   * @public
   */
  Core.initLibrary({
    name: 'openui5.ratingshroom',
    dependencies: [
      'sap.ui.core',
      'sap.m'
    ],
    controls: [
      'openui5.ratingshroom.Green',
      'openui5.ratingshroom.Red'
    ],
    noLibraryCSS: true,
    version: '${version}'
  });

  return openui5.ratingshroom; // eslint-disable-line
});
