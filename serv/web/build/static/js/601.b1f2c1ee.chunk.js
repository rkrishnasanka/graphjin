"use strict";(self.webpackChunkweb_ui=self.webpackChunkweb_ui||[]).push([[601,889],{889:function(e,t,r){r.r(t),r.d(t,{C:function(){return i},c:function(){return l}});var n=r(8308);function u(e,t){for(var r=function(){var r=t[n];if("string"!=typeof r&&!Array.isArray(r)){var u=function(t){if("default"!==t&&!(t in e)){var n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})}};for(var a in r)u(a)}},n=0;n<t.length;n++)r();return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(0,Object.defineProperty)(u,"name",{value:"_mergeNamespaces",configurable:!0});var a=(0,n.r)(),i=(0,n.g)(a),l=u({__proto__:null,default:i},[a])},5012:function(e,t,r){r.d(t,{i:function(){return n}});function n(e,t){var r,n,u=e.levels,a=e.indentLevel;return((u&&0!==u.length?u.at(-1)-(null!==(r=this.electricInput)&&void 0!==r&&r.test(t)?1:0):a)||0)*((null===(n=this.config)||void 0===n?void 0:n.indentUnit)||0)}(0,Object.defineProperty)(n,"name",{value:"indent",configurable:!0})},7601:function(e,t,r){r.r(t);var n=r(889),u=r(8616),a=r(5012);r(8308);n.C.defineMode("graphql-results",(function(e){var t=(0,u.Xs)({eatWhitespace:function(e){return e.eatSpace()},lexRules:i,parseRules:l,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:t.startState,token:t.token,indent:a.i,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}}));var i={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},l={Document:[(0,u.p)("{"),(0,u.pb)("Entry",(0,u.p)(",")),(0,u.p)("}")],Entry:[(0,u.t)("String","def"),(0,u.p)(":"),"Value"],Value:function(e){switch(e.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(e.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(e.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[(0,u.t)("Number","number")],StringValue:[(0,u.t)("String","string")],BooleanValue:[(0,u.t)("Keyword","builtin")],NullValue:[(0,u.t)("Keyword","keyword")],ListValue:[(0,u.p)("["),(0,u.pb)("Value",(0,u.p)(",")),(0,u.p)("]")],ObjectValue:[(0,u.p)("{"),(0,u.pb)("ObjectField",(0,u.p)(",")),(0,u.p)("}")],ObjectField:[(0,u.t)("String","property"),(0,u.p)(":"),"Value"]}}}]);
//# sourceMappingURL=601.b1f2c1ee.chunk.js.map