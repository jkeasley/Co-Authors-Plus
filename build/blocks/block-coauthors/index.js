!function(){var e,t={843:function(e,t,o){"use strict";var r=window.wp.blocks,n=window.wp.element,a=window.wp.primitives,l=(0,n.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.Path,{d:"M15.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-2.25 6v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM9.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",fillRule:"evenodd"})),c=window.wp.blockEditor,s=window.wp.components,i=window.wp.apiFetch,u=o.n(i),h=window.wp.data,p=window.wp.i18n,v=(0,n.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.Path,{fillRule:"evenodd",d:"M5 11.25h3v1.5H5v-1.5zm5.5 0h3v1.5h-3v-1.5zm8.5 0h-3v1.5h3v-1.5z",clipRule:"evenodd"})),m=(0,n.createElement)(a.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(a.Path,{d:"M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"})),d=(0,n.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.Path,{d:"m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",fillRule:"evenodd",clipRule:"evenodd"})),f=(0,n.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.Path,{d:"M4 6.5h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4V16h5a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 9 8H4V6.5Zm16 0h-5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5V16h-5a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 15 8h5V6.5Z"})),w=(0,n.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.Path,{d:"M17.5 4v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V4H8v5a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 16 9V4h1.5Zm0 16v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v5H8v-5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5h1.5Z"})),g=o(184),x=o.n(g);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},b.apply(this,arguments)}var _=(0,n.memo)((function(e){let{blocks:t,blockContextId:o,isHidden:r,setActiveBlockContextId:a}=e;const l=(0,c.__experimentalUseBlockPreview)({blocks:t,props:{className:"wp-block-co-authors-plus-coauthor"}}),s=()=>{a(o)},i={display:r?"none":void 0};return(0,n.createElement)("div",b({},l,{tabIndex:0,role:"button",onClick:s,onKeyUp:s,style:i}))}));function E(){return(0,n.createElement)("div",(0,c.useInnerBlocksProps)({className:"wp-block-co-authors-plus-coauthor"},{template:[["co-authors-plus/name"]],__unstableDisableLayoutClassNames:!0}))}const k=["core/bold","core/italic","core/text-color"];var y=JSON.parse('{"u2":"co-authors-plus/coauthors"}');(0,r.registerBlockType)(y.u2,{edit:function(e){let{attributes:t,setAttributes:o,clientId:r,context:a,isSelected:l,__unstableLayoutClassNames:i}=e;const{prefix:g,separator:b,lastSeparator:y,suffix:C,layout:S,textAlign:A}=t,{type:z,orientation:P}=S||{},{postId:B}=a,O=(0,h.useSelect)((e=>e("co-authors-plus/blocks").getAuthorPlaceholder()),[]),[V,N]=(0,n.useState)([O]),[I,j]=(0,n.useState)(),H=(0,h.useDispatch)("core/notices");function G(e){"AbortError"!==e.name&&H.createErrorNotice(e.message,{isDismissible:!0})}(0,n.useEffect)((()=>{if(!B)return;const e=new AbortController;return u()({path:`/coauthors/v1/coauthors?post_id=${B}`,signal:e.signal}).then(N).catch(G),()=>{e.abort()}}),[B]);const M=(0,h.useSelect)((e=>e(c.store).getBlocks(r))),R=e=>{o({layout:e})},T=[{icon:v,title:(0,p.__)("Inline view"),onClick:()=>R({type:"default"}),isActive:"default"===z},{icon:m,title:(0,p.__)("List view"),onClick:()=>R({type:"constrained"}),isActive:"constrained"===z},{icon:d,title:(0,p.__)("Grid view"),onClick:()=>R({type:"grid"}),isActive:"grid"===z},{icon:f,title:(0,p.__)("Row view"),onClick:()=>R({type:"flex",orientation:"horizontal"}),isActive:"flex"===z&&"horizontal"===P},{icon:w,title:(0,p.__)("Stack view"),onClick:()=>R({type:"flex",orientation:"vertical"}),isActive:"flex"===z&&"vertical"===P}];return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(c.BlockControls,null,(0,n.createElement)(s.ToolbarGroup,{controls:T}),(0,n.createElement)(c.AlignmentControl,{value:A,onChange:e=>{o({textAlign:e})}})),(0,n.createElement)("div",(0,c.useBlockProps)({className:x()(i,{[`has-text-align-${A}`]:A},"remove-outline")}),V&&"default"===z&&(l||g)&&(0,n.createElement)(c.RichText,{allowedFormats:k,className:"wp-block-co-authors-plus-coauthors__prefix",multiline:!1,"aria-label":(0,p.__)("Prefix","co-authors-plus"),placeholder:(0,p.__)("Prefix","co-authors-plus")+" ",value:g,onChange:e=>o({prefix:e}),tagName:"span"}),V&&V.map((e=>{var t;const o=e.id===(I||(null===(t=V[0])||void 0===t?void 0:t.id));return(0,n.createElement)(c.BlockContextProvider,{key:e.id,value:{"co-authors-plus/author":e,"co-authors-plus/layout":z}},o?(0,n.createElement)(E,null):null,(0,n.createElement)(_,{blocks:M,blockContextId:e.id,setActiveBlockContextId:j,isHidden:o}))})).reduce(((e,t,o,r)=>(0,n.createElement)(n.Fragment,null,e,"default"===z&&(0,n.createElement)("span",{className:"wp-block-co-authors-plus-coauthors__separator"},y&&o===r.length-1?`${y}`:`${b}`),t))),V&&"default"===z&&(l||C)&&(0,n.createElement)(c.RichText,{allowedFormats:k,className:"wp-block-co-authors-plus-coauthors__suffix",multiline:!1,"aria-label":(0,p.__)("Suffix"),placeholder:(0,p.__)("Suffix")+" ",value:C,onChange:e=>o({suffix:e}),tagName:"span"})),(0,n.createElement)(c.InspectorControls,null,"default"===z&&(0,n.createElement)(s.PanelBody,{title:(0,p.__)("Co-Authors Layout","co-authors-plus")},(0,n.createElement)(s.TextControl,{autoComplete:"off",label:(0,p.__)("Separator","co-authors-plus"),value:b||"",onChange:e=>{o({separator:e})},help:(0,p.__)("Enter character(s) used to separate authors.","co-authors-plus")}),(0,n.createElement)(s.TextControl,{autoComplete:"off",label:(0,p.__)("Last Separator","co-authors-plus"),value:y||"",onChange:e=>{o({lastSeparator:e})},help:(0,p.__)("Enter character(s) used to separate the last author.","co-authors-plus")}))))},save:function(e){let{attributes:t}=e;const{textAlign:o}=t,r=x()({[`has-text-align-${o}`]:o});return(0,n.createElement)("div",c.useBlockProps.save({className:r}),(0,n.createElement)(c.InnerBlocks.Content,null))},icon:l})},184:function(e,t){var o;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var l=n.apply(null,o);l&&e.push(l)}}else if("object"===a){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var c in o)r.call(o,c)&&o[c]&&e.push(c)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,o,n,a){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],a=e[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&a||l>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[s])}))?o.splice(s--,1):(c=!1,a<l&&(l=a));if(c){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={887:0,270:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,l=o[0],c=o[1],s=o[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(s)var u=s(r)}for(t&&t(o);i<l.length;i++)a=l[i],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=self.webpackChunkco_authors_plus=self.webpackChunkco_authors_plus||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var n=r.O(void 0,[270],(function(){return r(843)}));n=r.O(n)}();