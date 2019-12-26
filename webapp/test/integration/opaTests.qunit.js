/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/git/basic/GitBasicVersion_2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});