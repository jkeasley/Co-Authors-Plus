!function(){"use strict";var e,t={857:function(){var e=window.wp.blocks,t=window.wp.element,l=window.wp.i18n,o=window.wp.blockEditor,a=window.wp.components,n=window.wp.data;function r(e){let{dimensions:o,style:a,className:n}=e;const r=(0,t.useMemo)((()=>function(e){let{width:t,height:l}=e;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg width="${t}" height="${l}" viewBox="0 0 ${t} ${t}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t<rect width="${t}" height="${t}" fill="#eeeeee"></rect>\n\t\t\t<path stroke="black" vector-effect="non-scaling-stroke" d="M ${t} ${t} 0 0" />\n\t\t</svg>`.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ")).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}(o)),[o]);return(0,t.createElement)("img",{alt:(0,l.__)("Placeholder image"),className:n,src:r,style:a,width:o.width,height:o.height})}var i=JSON.parse('{"u2":"cap/coauthor-avatar"}');(0,e.registerBlockType)(i.u2,{edit:function(e){var i;let{context:s,attributes:u,setAttributes:c}=e;const{isLink:h,rel:p,size:v,verticalAlign:d}=u,g=(0,n.useSelect)((e=>e("cap/blocks").getAuthorPlaceholder()),[]),m=s["cap/author"]||g,{avatar_urls:_}=m;if(!_||0===_.length)return null;const b=Object.keys(_).map((e=>({value:e,label:`${e} x ${e}`}))),f=(0,o.__experimentalUseBorderProps)(u),w=null!==(i=_[v])&&void 0!==i?i:"";return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("figure",(0,o.useBlockProps)(),""===w?(0,t.createElement)(r,{className:f.className,dimensions:{width:v,height:v},style:{height:v,width:v,minWidth:"auto",minHeight:"auto",padding:0,verticalAlign:d,...f.style}}):(0,t.createElement)("img",{style:{...f.style,verticalAlign:d},width:v,height:v,src:`${_[v]}`})),(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(a.PanelBody,{title:(0,l.__)("Avatar Settings","co-authors-plus")},(0,t.createElement)(a.SelectControl,{label:(0,l.__)("Avatar size","co-authors-plus"),value:v,options:b,onChange:e=>{c({size:Number(e)})}}),(0,t.createElement)(a.ToggleControl,{label:(0,l.__)("Make avatar a link to author archive.","co-authors-plus"),onChange:()=>c({isLink:!h}),checked:h}),h&&(0,t.createElement)(a.TextControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Link rel","co-authors-plus"),value:p,onChange:e=>c({rel:e})})),(0,t.createElement)(a.PanelBody,{initialOpen:!1,title:(0,l.__)("Co-authors Layout","co-authors-plus")},(0,t.createElement)(a.SelectControl,{label:(0,l.__)("Vertical align","co-authors-plus"),value:d,options:[{value:"",label:(0,l.__)("Default","co-authors-plus")},{value:"baseline",label:(0,l.__)("Baseline","co-authors-plus")},{value:"bottom",label:(0,l.__)("Bottom","co-authors-plus")},{value:"middle",label:(0,l.__)("Middle","co-authors-plus")},{value:"sub",label:(0,l.__)("Sub","co-authors-plus")},{value:"super",label:(0,l.__)("Super","co-authors-plus")},{value:"text-bottom",label:(0,l.__)("Text Bottom","co-authors-plus")},{value:"text-top",label:(0,l.__)("Text Top","co-authors-plus")},{value:"top",label:(0,l.__)("Top","co-authors-plus")}],onChange:e=>{c({verticalAlign:""===e?void 0:e})},help:(0,l.__)("Vertical alignment defaults to bottom in the block layout and middle in the inline layout.","co-authors-plus")}))))}})}},l={};function o(e){var a=l[e];if(void 0!==a)return a.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=function(t,l,a,n){if(!l){var r=1/0;for(c=0;c<e.length;c++){l=e[c][0],a=e[c][1],n=e[c][2];for(var i=!0,s=0;s<l.length;s++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](l[s])}))?l.splice(s--,1):(i=!1,n<r&&(r=n));if(i){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[l,a,n]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={893:0,30:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,n,r=l[0],i=l[1],s=l[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(s)var c=s(o)}for(t&&t(l);u<r.length;u++)n=r[u],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},l=self.webpackChunkco_authors_plus=self.webpackChunkco_authors_plus||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var a=o.O(void 0,[30],(function(){return o(857)}));a=o.O(a)}();