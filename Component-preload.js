jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"sap/git/basic/GitBasicVersion_2/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","sap/git/basic/GitBasicVersion_2/model/models"],function(i,e,t){"use strict";return i.extend("sap.git.basic.GitBasicVersion_2.Component",{metadata:{manifest:"json"},init:function(){i.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"sap/git/basic/GitBasicVersion_2/controller/SapGitBasic.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(i){"use strict";return i.extend("sap.git.basic.GitBasicVersion_2.controller.SapGitBasic",{onInit:function(){}})});
},
	"sap/git/basic/GitBasicVersion_2/i18n/i18n.properties":'title=Title\nappTitle=GitBasicVersion_2\nappDescription=App Description',
	"sap/git/basic/GitBasicVersion_2/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"sap.git.basic.GitBasicVersion_2","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"ui5template.basicSAPUI5ApplicationProject","version":"1.40.12"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"sap.git.basic.GitBasicVersion_2.view.SapGitBasic","type":"XML","async":true,"id":"SapGitBasic"},"dependencies":{"minUI5Version":"1.65.6","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"sap.git.basic.GitBasicVersion_2.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"sap.git.basic.GitBasicVersion_2.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteSapGitBasic","pattern":"RouteSapGitBasic","target":["TargetSapGitBasic"]}],"targets":{"TargetSapGitBasic":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"SapGitBasic","viewName":"SapGitBasic"}}}},"sap.platform.hcp":{"uri":"webapp","_version":"1.1.0"}}',
	"sap/git/basic/GitBasicVersion_2/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"sap/git/basic/GitBasicVersion_2/view/SapGitBasic.view.xml":'<mvc:View controllerName="sap.git.basic.GitBasicVersion_2.controller.SapGitBasic" xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n\txmlns="sap.m"><Shell id="shell"><App id="app"><pages><Page id="page" title="ExampleGitSampleTitle_2"><content><Label text="test Version_2" width="100%" id="idWelcome" design="Bold" /></content></Page></pages></App></Shell></mvc:View>'
}});