!function(){var e={184:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var a=l.apply(null,n);a&&e.push(a)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var u in n)o.call(n,u)&&n[u]&&e.push(u)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.blocks,t=window.wp.element,o=window.wp.blockEditor,l=window.wp.components,r=window.wp.i18n,a=window.wp.data,u=n(184),i=n.n(u),c=JSON.parse('{"u2":"cap/coauthor-name"}');(0,e.registerBlockType)(c.u2,{edit:function(e){let{context:n,attributes:u,setAttributes:c}=e;const{isLink:s,rel:p,tagName:h,textAlign:f}=u,g=(0,a.useSelect)((e=>e("cap/blocks").getAuthorPlaceholder()),[]),m=n["cap/author"]||g,{link:v,display_name:d}=m,b=h;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.BlockControls,null,(0,t.createElement)(o.AlignmentControl,{value:f,onChange:e=>{c({textAlign:e})}})),(0,t.createElement)(b,(0,o.useBlockProps)({className:i()({[`has-text-align-${f}`]:f})}),s?(0,t.createElement)("a",{href:v,rel:p,onClick:e=>e.preventDefault()},d):d),(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(l.PanelBody,{title:(0,r.__)("Settings","co-authors-plus")},(0,t.createElement)(l.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,r.__)("Make co-author name a link","co-authors-plus"),onChange:()=>c({isLink:!s}),checked:s}),s&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.TextControl,{__nextHasNoMarginBottom:!0,label:(0,r.__)("Link rel","co-authors-plus"),value:p,onChange:e=>c({rel:e})})))),(0,t.createElement)(o.InspectorControls,{group:"advanced"},(0,t.createElement)(l.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,r.__)("HTML element","co-authors-plus"),options:[{label:(0,r.__)("Default (<p>)"),value:"p"},{label:"<span>",value:"span"},{label:"<h1>",value:"h1"},{label:"<h2>",value:"h2"},{label:"<h3>",value:"h3"},{label:"<h4>",value:"h4"},{label:"<h5>",value:"h5"},{label:"<h6>",value:"h6"}],value:h,onChange:e=>c({tagName:e})})))}})}()}();