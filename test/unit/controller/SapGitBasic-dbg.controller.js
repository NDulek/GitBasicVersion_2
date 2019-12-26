/*global QUnit*/

sap.ui.define([
	"sap/git/basic/GitBasicVersion_2/controller/SapGitBasic.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SapGitBasic Controller");

	QUnit.test("I should test the SapGitBasic controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});