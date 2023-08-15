!function(){var e,t={113:function(e,t,l){"use strict";var n=window.wp.blocks,a=window.wp.element,o=l(779),i=l.n(o),r=window.wp.i18n,s=window.wp.blockEditor,c=window.wp.components,u=window.wp.data,p=window.wp.coreData;const h=(0,a.createElement)(a.Fragment,null,(0,a.createElement)(c.__experimentalToggleGroupControlOption,{value:"cover",label:(0,r._x)("Cover","Scale option for Image dimension control")}),(0,a.createElement)(c.__experimentalToggleGroupControlOption,{value:"contain",label:(0,r._x)("Contain","Scale option for Image dimension control")}),(0,a.createElement)(c.__experimentalToggleGroupControlOption,{value:"fill",label:(0,r._x)("Fill","Scale option for Image dimension control")})),d="cover",m={cover:(0,r.__)("Image is scaled and cropped to fill the entire space without being distorted."),contain:(0,r.__)("Image is scaled to fill the space without clipping nor distorting."),fill:(0,r.__)("Image will be stretched and distorted to completely fill the space.")};var g=e=>{let{clientId:t,attributes:{aspectRatio:l,width:n,height:o,scale:i,sizeSlug:u},setAttributes:p,imageSizeOptions:g=[]}=e;const _=(0,c.__experimentalUseCustomUnits)({availableUnits:(0,s.useSetting)("spacing.units")||["px","%","vw","em","rem"]}),f=(e,t)=>{const l=parseFloat(t);isNaN(l)&&t||p({[e]:l<0?"0":t})},v=(0,r._x)("Scale","Image scaling options"),b=o||l&&"auto"!==l;return(0,a.createElement)(s.InspectorControls,{group:"dimensions"},(0,a.createElement)(c.__experimentalToolsPanelItem,{hasValue:()=>!!l,label:(0,r.__)("Aspect ratio"),onDeselect:()=>p({aspectRatio:void 0}),resetAllFilter:()=>({aspectRatio:void 0}),isShownByDefault:!0,panelId:t},(0,a.createElement)(c.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,r.__)("Aspect ratio"),value:l,options:[{label:(0,r.__)("Original"),value:"auto"},{label:(0,r.__)("Square"),value:"1"},{label:(0,r.__)("16:9"),value:"16/9"},{label:(0,r.__)("4:3"),value:"4/3"},{label:(0,r.__)("3:2"),value:"3/2"},{label:(0,r.__)("9:16"),value:"9/16"},{label:(0,r.__)("3:4"),value:"3/4"},{label:(0,r.__)("2:3"),value:"2/3"}],onChange:e=>p({aspectRatio:e})})),(0,a.createElement)(c.__experimentalToolsPanelItem,{className:"single-column",hasValue:()=>!!o,label:(0,r.__)("Height"),onDeselect:()=>p({height:void 0}),resetAllFilter:()=>({height:void 0}),isShownByDefault:!0,panelId:t},(0,a.createElement)(c.__experimentalUnitControl,{label:(0,r.__)("Height"),labelPosition:"top",value:o||"",min:0,onChange:e=>f("height",e),units:_})),(0,a.createElement)(c.__experimentalToolsPanelItem,{className:"single-column",hasValue:()=>!!n,label:(0,r.__)("Width"),onDeselect:()=>p({width:void 0}),resetAllFilter:()=>({width:void 0}),isShownByDefault:!0,panelId:t},(0,a.createElement)(c.__experimentalUnitControl,{label:(0,r.__)("Width"),labelPosition:"top",value:n||"",min:0,onChange:e=>f("width",e),units:_})),b&&(0,a.createElement)(c.__experimentalToolsPanelItem,{hasValue:()=>!!i&&i!==d,label:v,onDeselect:()=>p({scale:d}),resetAllFilter:()=>({scale:d}),isShownByDefault:!0,panelId:t},(0,a.createElement)(c.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,label:v,value:i,help:m[i],onChange:e=>p({scale:e}),isBlock:!0},h)),!!g.length&&(0,a.createElement)(c.__experimentalToolsPanelItem,{hasValue:()=>!!u,label:(0,r.__)("Resolution"),onDeselect:()=>p({sizeSlug:void 0}),resetAllFilter:()=>({sizeSlug:void 0}),isShownByDefault:!1,panelId:t},(0,a.createElement)(c.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,r.__)("Resolution"),value:u||"full",options:g,onChange:e=>p({sizeSlug:e}),help:(0,r.__)("Select the size of the source image.")})))};function _(e,t,l){let{width:n,height:a,aspectRatio:o,scale:i,sizeSlug:r}=t;const s={width:n,height:a,objectFit:i};if(n&&a||(n||a)&&o&&"auto"!==o)return{width:"100%",height:"100%",objectFit:i};const c=Object.keys(l),u=l[e||"full"!==r?r:c[Math.max(0,c.length-1)]],p={};!u||n&&a||(!0===u.crop?(p.width=`${u.width}px`,o&&"auto"!==o||(p.aspectRatio=`${u.width}/${u.height}`)):u.width>=u.height&&u.width>0?(p.width=`${u.width}px`,e||(p.aspectRatio="1/1")):u.height>0&&(p.height=`${u.height}px`,e||(p.aspectRatio="1/1"))),p.width&&p.height||!o||"auto"===o||(p.aspectRatio=o);for(const e in p)s[e]||(s[e]=p[e]);return s}var f=JSON.parse('{"u2":"cap/coauthor-feature-image"}');(0,n.registerBlockType)(f.u2,{edit:function(e){let{attributes:t,setAttributes:l,context:n,clientId:o}=e;const h=(0,u.useSelect)((e=>e("cap/blocks").getAuthorPlaceholder()),[]),d=n["cap/author"]||h,m=(0,s.__experimentalUseBorderProps)(t),f=(0,u.useSelect)((e=>0!==d.featured_media&&e(p.store).getMedia(d.featured_media,{context:"view"})),[d.featured_media]),{isLink:v,rel:b,width:w,height:x,aspectRatio:S,sizeSlug:E,scale:y}=t,C=function(e,t){var l,n,a;return(null==e||null===(l=e.media_details)||void 0===l||null===(n=l.sizes)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.source_url)||(null==e?void 0:e.source_url)}(f,E),{imageSizes:I,imageDimensions:O}=(0,u.useSelect)((e=>e(s.store).getSettings()),[]),k=I.map((e=>{let{name:t,slug:l}=e;return{value:l,label:t}})),B=function(e){let{width:t,height:l,aspectRatio:n}=e;return t||l?{width:t,height:l,aspectRatio:n}:{}}(t),P={...m.style,..._(f,t,O)},F={padding:0,minHeight:"100%",minWidth:"100%",...m.style,..._(f,t,O)},R=0!==d.id&&!1===f;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g,{clientId:o,attributes:t,setAttributes:l,imageSizeOptions:k}),R?null:(0,a.createElement)("figure",(0,s.useBlockProps)({style:B}),f?(0,a.createElement)("img",{src:C,alt:f.alt_text?sprintf(
// translators: %s: The image's alt text.
(0,r.__)("Featured image: %s"),f.alt_text):(0,r.__)("Featured image"),style:P}):(0,a.createElement)(c.Placeholder,{className:i()("block-editor-media-placeholder",m.className),withIllustration:!0,style:F})),(0,a.createElement)(s.InspectorControls,null,(0,a.createElement)(c.PanelBody,{title:(0,r.__)("Settings")},(0,a.createElement)(c.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,r.__)("Make feature image a link to author archive."),onChange:()=>l({isLink:!v}),checked:v}),v&&(0,a.createElement)(c.TextControl,{__nextHasNoMarginBottom:!0,label:(0,r.__)("Link rel"),value:b,onChange:e=>l({rel:e})}))))},save:function(){return(0,a.createElement)("p",s.useBlockProps.save(),"Coauthor Feature Image – hello from the saved content!")}})},779:function(e,t){var l;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var o=typeof l;if("string"===o||"number"===o)e.push(l);else if(Array.isArray(l)){if(l.length){var i=a.apply(null,l);i&&e.push(i)}}else if("object"===o){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var r in l)n.call(l,r)&&l[r]&&e.push(r)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},l={};function n(e){var a=l[e];if(void 0!==a)return a.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,l,a,o){if(!l){var i=1/0;for(u=0;u<e.length;u++){l=e[u][0],a=e[u][1],o=e[u][2];for(var r=!0,s=0;s<l.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](l[s])}))?l.splice(s--,1):(r=!1,o<i&&(i=o));if(r){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[l,a,o]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,o,i=l[0],r=l[1],s=l[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(s)var u=s(n)}for(t&&t(l);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},l=self.webpackChunk=self.webpackChunk||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var a=n.O(void 0,[431],(function(){return n(113)}));a=n.O(a)}();