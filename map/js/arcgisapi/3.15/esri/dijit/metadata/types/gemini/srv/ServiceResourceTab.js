// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/gemini/srv/templates/ServiceResourceTab.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/inspire/srv/ServiceType"\r\n      data-dojo-props\x3d"label:\'${i18nIso.identificationSection.serviceResourceTab.serviceType}\'"\x3e\x3c/div\x3e\r\n    \x3c!-- specific for Gemini --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/gemini/srv/ServiceExtent"\r\n      data-dojo-props\x3d"label:\'${i18nIso.identificationSection.serviceResourceTab.extent}\'"\x3e\x3c/div\x3e\r\n    \x3c!-- specific for Gemini --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/gemini/srv/CouplingType"\r\n      data-dojo-props\x3d"label:\'${i18nIso.identificationSection.serviceResourceTab.couplingType}\',\r\n      hide:true"\x3e\x3c/div\x3e\r\n    \x3c!-- specific for Gemini --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/gemini/srv/ContainsOperations"\r\n      data-dojo-props\x3d"label:\'${i18nIso.identificationSection.serviceResourceTab.operation}\',\r\n      hide:true"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/srv/OperatesOn"\r\n      data-dojo-props\x3d"label:\'${i18nIso.identificationSection.serviceResourceTab.operatesOn}\'"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/gemini/srv/ServiceResourceTab","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Tabs ../../inspire/srv/ServiceType ../../iso/srv/OperatesOn ./ContainsOperations ./CouplingType ./ServiceExtent dojo/text!./templates/ServiceResourceTab.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.gemini.srv.ServiceResourceTab",a,f);return a});