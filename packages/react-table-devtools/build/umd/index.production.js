/**
 * react-table-devtools
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactTableDevtools={},e.React)}(this,(function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var l=n(t),r=a(t);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}function d(e,t){var n=l.default.useState(),a=n[0],r=n[1];return l.default.useEffect((function(){var n=function(e){try{var t=localStorage.getItem(e);return"string"==typeof t?JSON.parse(t):void 0}catch(e){return}}(e);r(null==n?"function"==typeof t?t():t:n)}),[t,e]),[a,l.default.useCallback((function(t){r((function(n){var a=t;"function"==typeof t&&(a=t(n));try{localStorage.setItem(e,JSON.stringify(a))}catch(e){}return a}))}),[e])]}var i=["theme"],f={background:"#0b1521",backgroundAlt:"#132337",foreground:"white",gray:"#3f4e60",grayAlt:"#222e3e",inputBackgroundColor:"#fff",inputTextColor:"#000",success:"#00ab52",danger:"#ff0085",active:"#006bff",warning:"#ffb200"},c=l.default.createContext(f);function s(e){var t=e.theme,n=u(e,i);return l.default.createElement(c.Provider,o({value:t},n))}var m=["style"],p="undefined"==typeof window;function b(e,t,n){return void 0===n&&(n={}),l.default.forwardRef((function(a,r){var d=a.style,i=u(a,m),f=l.default.useContext(c),s=Object.entries(n).reduce((function(e,t){var n,a,r,u,d=t[0],c=t[1];return n=d,a=l.default.useState((function(){if("undefined"!=typeof window)return window.matchMedia&&window.matchMedia(n).matches})),r=a[0],u=a[1],l.default.useEffect((function(){if("undefined"!=typeof window){if(!window.matchMedia)return;var e=window.matchMedia(n),t=function(e){var t=e.matches;return u(t)};return e.addListener(t),function(){e.removeListener(t)}}}),[r,n,u]),r?o({},e,"function"==typeof c?c(i,f):c):e}),{});return l.default.createElement(e,o({},i,{style:o({},"function"==typeof t?t(i,f):t,d,s),ref:r}))}))}var g=b("div",(function(e,t){return{fontSize:"clamp(12px, 1.5vw, 14px)",fontFamily:"sans-serif",display:"flex",backgroundColor:t.background,color:t.foreground}}),{"(max-width: 700px)":{flexDirection:"column"},"(max-width: 600px)":{fontSize:".9em"}});b("div",(function(){return{flex:"1 1 500px",display:"flex",flexDirection:"column",overflow:"auto",height:"100%"}}),{"(max-width: 700px)":function(e,t){return{borderTop:"2px solid "+t.gray}}});var C=b("button",(function(e,t){return{appearance:"none",fontSize:".9em",fontWeight:"bold",background:t.gray,border:"0",borderRadius:".3em",color:"white",padding:".5em",opacity:e.disabled?".5":void 0,cursor:"pointer"}}));b("code",{fontSize:".9em"}),b("input",(function(e,t){return{backgroundColor:t.inputBackgroundColor,border:0,borderRadius:".2em",color:t.inputTextColor,fontSize:".9em",lineHeight:"1.3",padding:".3em .4em"}})),b("select",(function(e,t){return{display:"inline-block",fontSize:".9em",fontFamily:"sans-serif",fontWeight:"normal",lineHeight:"1.3",padding:".3em 1.5em .3em .5em",height:"auto",border:0,borderRadius:".2em",appearance:"none",WebkitAppearance:"none",backgroundColor:t.inputBackgroundColor,backgroundImage:"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23444444'><polygon points='0,25 100,25 50,75'/></svg>\")",backgroundRepeat:"no-repeat",backgroundPosition:"right .55em center",backgroundSize:".65em auto, 100%",color:t.inputTextColor}}),{"(max-width: 500px)":{display:"none"}});var v=["expanded","style"],y=["value","defaultExpanded","renderer","pageSize","depth"],h=b("div",{fontFamily:"Menlo, monospace",fontSize:"0.7rem",lineHeight:"1.7",outline:"none",wordBreak:"break-word"}),E=b("span",{cursor:"pointer",color:"white"}),L=b("span",(function(e,t){return{color:t.danger}})),x=b("div",{marginLeft:".1rem",paddingLeft:"1rem",borderLeft:"2px solid rgba(0,0,0,.15)"}),w=b("span",{color:"grey",fontSize:".7rem"}),k=function(e){var t=e.expanded,n=e.style,a=void 0===n?{}:n;return u(e,v),l.default.createElement("span",{style:o({display:"inline-block",transition:"all .1s ease",transform:"rotate("+(t?90:0)+"deg) "+(a.transform||"")},a)},"▶")},R=function(e){var t=e.handleEntry,n=e.label,a=e.value,r=e.subEntries,o=e.subEntryPages,u=e.type,d=e.expanded,i=e.toggle,f=e.pageSize,c=e.renderer,s=l.default.useState(void 0),m=s[0],p=s[1],b=l.default.useState([]),g=b[0],C=b[1];return l.default.createElement(h,{key:n},null!=o&&o.length?l.default.createElement(l.default.Fragment,null,l.default.createElement(E,{onClick:function(){return i()}},l.default.createElement(k,{expanded:d})," ",n," ",l.default.createElement(w,null,"iterable"===String(u).toLowerCase()?"(Iterable) ":"",r.length," ",r.length>1?"items":"item")),d?1===o.length?l.default.createElement(x,null,r.map((function(e){return t(e)}))):l.default.createElement(x,null,o.map((function(e,n){return l.default.createElement("div",{key:n},l.default.createElement(h,null,l.default.createElement(E,{onClick:function(){return C((function(e){return e.includes(n)?e.filter((function(e){return e!==n})):[].concat(e,[n])}))}},l.default.createElement(k,{expanded:d})," [",n*f," ..."," ",n*f+f-1,"]"),g.includes(n)?l.default.createElement(x,null,e.map((function(e){return t(e)}))):null))}))):null):"function"===u?l.default.createElement(l.default.Fragment,null,l.default.createElement(S,{renderer:c,label:l.default.createElement("button",{onClick:function(){p(a())}},l.default.createElement(E,null,n)," 🔄"," "),value:m,defaultExpanded:{}})):l.default.createElement(l.default.Fragment,null,l.default.createElement(E,null,n,":")," ",l.default.createElement(L,null,JSON.stringify(a,Object.getOwnPropertyNames(Object(a))))))};function S(e){var t,n=e.value,a=e.defaultExpanded,r=e.renderer,d=void 0===r?R:r,i=e.pageSize,f=void 0===i?100:i,c=e.depth,s=void 0===c?0:c,m=u(e,y),p=l.default.useState(a),b=p[0],g=p[1],C=[],v=typeof n,h=[],E=function(e){var t,n=C.concat(e.label),l=!0===a?((t={})[e.label]=!0,t):null==a?void 0:a[e.label];return o({},e,{subPath:e,path:n,depth:s+1,defaultExpanded:l})};if(Array.isArray(n)?(v="array",t=n.map((function(e,t){return E({label:t,value:e})}))):null!==n&&"object"==typeof n&&"function"==typeof n[Symbol.iterator]?(v="Iterable",t=Array.from(n,(function(e,t){return E({label:t,value:e})}))):"function"==typeof n?v="function":"object"==typeof n&&null!==n&&(v="object",t=Object.entries(n).map((function(e){var t=e[0],n=e[1];return E({label:t,value:n})}))),t)for(var L=0;L<t.length;)h.push(t.slice(L,L+f)),L+=f;return d(o({handleEntry:function(e){return l.default.createElement(S,o({key:e.label,renderer:d},m,e))},type:v,subEntries:t,subEntryPages:h,depth:s,value:n,path:C,expanded:b,toggle:function(e){g((function(t){return void 0!==e?e:!t}))},pageSize:f},m))}function M(e){return r.createElement("svg",o({width:"40px",height:"40px",viewBox:"0 0 190 190",version:"1.1"},e),r.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"og-white",transform:"translate(-28.000000, -21.000000)"},r.createElement("g",{id:"Group-2",transform:"translate(28.000000, 31.000000)"},r.createElement("g",{id:"Group",transform:"translate(0.000000, 10.000000)"},r.createElement("path",{d:"M39.7239712,51.3436237 C36.631224,36.362877 35.9675112,24.8727722 37.9666331,16.5293551 C39.1555965,11.5671678 41.3293088,7.51908462 44.6346064,4.59846305 C48.1241394,1.51504777 52.5360327,0.00201216606 57.493257,0.00201216606 C65.6712013,0.00201216606 74.2682602,3.72732143 83.4557246,10.8044264 C87.2031203,13.6910458 91.0924366,17.170411 95.1316515,21.2444746 C95.4531404,20.8310265 95.8165416,20.4410453 96.2214301,20.0806152 C107.64098,9.91497158 117.255245,3.59892716 125.478408,1.16365068 C130.367899,-0.284364005 134.958526,-0.422317978 139.138936,0.983031021 C143.551631,2.46646844 147.06766,5.53294888 149.548314,9.82810912 C153.642288,16.9166735 154.721918,26.2310983 153.195595,37.7320243 C152.573451,42.4199112 151.50985,47.5263831 150.007094,53.0593153 C150.574045,53.1277086 151.142416,53.2532808 151.705041,53.4395297 C166.193932,58.2358678 176.453582,63.3937462 182.665021,69.2882839 C186.360669,72.7953831 188.773972,76.6998434 189.646365,81.0218204 C190.567176,85.5836746 189.669313,90.1593316 187.191548,94.4512967 C183.105211,101.529614 175.591643,107.11221 164.887587,111.534031 C160.589552,113.309539 155.726579,114.917559 150.293259,116.363748 C150.541176,116.92292 150.733521,117.516759 150.862138,118.139758 C153.954886,133.120505 154.618598,144.61061 152.619477,152.954027 C151.430513,157.916214 149.256801,161.964297 145.951503,164.884919 C142.46197,167.968334 138.050077,169.48137 133.092853,169.48137 C124.914908,169.48137 116.31785,165.756061 107.130385,158.678956 C103.343104,155.761613 99.4108655,152.238839 95.3254337,148.108619 C94.9050753,148.765474 94.3889681,149.376011 93.7785699,149.919385 C82.3590198,160.085028 72.744755,166.401073 64.5215915,168.836349 C59.6321009,170.284364 55.0414736,170.422318 50.8610636,169.016969 C46.4483686,167.533532 42.9323404,164.467051 40.4516862,160.171891 C36.3577116,153.083327 35.2780823,143.768902 36.8044053,132.267976 C37.449038,127.410634 38.56762,122.103898 40.1575891,116.339009 C39.5361041,116.276104 38.9120754,116.144816 38.2949591,115.940529 C23.8060684,111.144191 13.5464184,105.986312 7.33497892,100.091775 C3.63933121,96.5846754 1.22602752,92.6802151 0.353635235,88.3582381 C-0.567176333,83.7963839 0.330686581,79.2207269 2.80845236,74.9287618 C6.89478863,67.8504443 14.4083565,62.2678481 25.1124133,57.8460273 C29.5385143,56.0176154 34.5637208,54.366822 40.1939394,52.8874674 C39.9933393,52.3969171 39.8349374,51.8811235 39.7239712,51.3436237 Z",id:"Path",fill:"#002C4B",fillRule:"nonzero",transform:"translate(95.000000, 85.000000) scale(-1, 1) translate(-95.000000, -85.000000) "}),r.createElement("path",{d:"M91.735,110 L91.735,116 L80.6322051,116 C78.8411286,116 77.1868614,115.041975 76.2954489,113.488483 L74.294,110 L91.735,110 Z M116.181,110 L114.180256,113.488483 C113.288844,115.041975 111.634576,116 109.8435,116 L98.735,116 L98.735,110 L116.181,110 Z M91.735,96 L91.735,103 L70.277,103 L66.26,96 L91.735,96 Z M124.215,96 L120.198,103 L98.735,103 L98.735,96 L124.215,96 Z M91.735,82 L91.735,89 L62.244,89 L61.6632438,87.9884826 C60.7789187,86.4473417 60.7789187,84.5526583 61.6632438,83.0115174 L62.243,82 L91.735,82 Z M128.232,82 L128.812461,83.0115174 C129.696786,84.5526583 129.696786,86.4473417 128.812461,87.9884826 L128.231,89 L98.735,89 L98.735,82 L128.232,82 Z M91.735,68 L91.735,75 L66.26,75 L70.277,68 L91.735,68 Z M120.198,68 L124.215,75 L98.735,75 L98.735,68 L120.198,68 Z M91.735,55 L91.735,61 L74.293,61 L76.2954489,57.5115174 C77.1868614,55.958025 78.8411286,55 80.6322051,55 L91.735,55 Z M109.8435,55 C111.634576,55 113.288844,55.958025 114.180256,57.5115174 L116.182,61 L98.735,61 L98.735,55 L109.8435,55 Z",id:"Polygon-2",fill:"#FFD94C"}),r.createElement("path",{d:"M54.8601729,98.3577578 C56.1715224,97.6082856 57.8360246,98.0746014 58.5779424,99.3993034 L58.5779424,99.3993034 L59.0525843,100.24352 C62.8563392,106.982993 66.8190116,113.380176 70.9406016,119.435068 C75.8078808,126.585427 81.28184,133.82411 87.3624792,141.151115 C88.3168778,142.30114 88.1849437,144.011176 87.065686,144.997937 L87.065686,144.997937 L86.4542085,145.534625 C66.3465389,163.103314 53.2778188,166.612552 47.2480482,156.062341 C41.3500652,145.742717 43.4844915,126.982888 53.6513274,99.7828526 C53.876818,99.1795821 54.3045861,98.675291 54.8601729,98.3577578 Z M140.534177,119.041504 C141.986131,118.785177 143.375496,119.742138 143.65963,121.194242 L143.65963,121.194242 L143.812815,121.986376 C148.782365,147.995459 145.283348,161 133.315764,161 C121.609745,161 106.708724,149.909007 88.6127018,127.727022 C88.2113495,127.235047 87.9945723,126.617371 88,125.981509 C88.013158,124.480686 89.2357854,123.274651 90.730918,123.287756 L90.730918,123.287756 L91.6846544,123.294531 C99.3056979,123.335994 106.714387,123.071591 113.910723,122.501323 C122.409039,121.82788 131.283523,120.674607 140.534177,119.041504 Z M147.408726,63.8119663 C147.932139,62.4026903 149.508386,61.6634537 150.954581,62.149012 L150.954581,62.149012 L151.742552,62.4154854 C177.583763,71.217922 187.402356,80.8916805 181.198332,91.4367609 C175.129904,101.751366 157.484347,109.260339 128.26166,113.963678 C127.613529,114.067994 126.948643,113.945969 126.382735,113.618843 C125.047025,112.846729 124.602046,111.158214 125.388848,109.847438 L125.388848,109.847438 L125.889328,109.0105 C129.877183,102.31633 133.481358,95.6542621 136.701854,89.0242957 C140.50501,81.1948179 144.073967,72.7907081 147.408726,63.8119663 Z M61.7383398,56.0363218 C62.3864708,55.9320063 63.0513565,56.0540315 63.6172646,56.3811573 C64.9529754,57.153271 65.3979538,58.8417862 64.6111517,60.1525615 L64.6111517,60.1525615 L64.1106718,60.9895001 C60.1228168,67.6836699 56.5186416,74.3457379 53.2981462,80.9757043 C49.49499,88.8051821 45.9260328,97.2092919 42.5912744,106.188034 C42.0678608,107.59731 40.4916142,108.336546 39.045419,107.850988 L39.045419,107.850988 L38.2574475,107.584515 C12.4162372,98.782078 2.59764398,89.1083195 8.80166786,78.5632391 C14.8700957,68.2486335 32.515653,60.7396611 61.7383398,56.0363218 Z M103.545792,24.4653746 C123.653461,6.89668641 136.722181,3.38744778 142.751952,13.9376587 C148.649935,24.2572826 146.515508,43.0171122 136.348673,70.2171474 C136.123182,70.8204179 135.695414,71.324709 135.139827,71.6422422 C133.828478,72.3917144 132.163975,71.9253986 131.422058,70.6006966 L131.422058,70.6006966 L130.947416,69.7564798 C127.143661,63.0170065 123.180988,56.6198239 119.059398,50.564932 C114.192119,43.4145727 108.71816,36.1758903 102.637521,28.8488847 C101.683122,27.6988602 101.815056,25.9888243 102.934314,25.0020629 L102.934314,25.0020629 Z M57.6842361,8 C69.3902551,8 84.2912758,19.0909926 102.387298,41.2729777 C102.788651,41.7649527 103.005428,42.3826288 103,43.0184911 C102.986842,44.5193144 101.764215,45.7253489 100.269082,45.7122445 L100.269082,45.7122445 L99.3153456,45.7054689 C91.6943021,45.6640063 84.2856126,45.9284091 77.0892772,46.4986773 C68.5909612,47.17212 59.7164767,48.325393 50.4658235,49.9584962 C49.0138691,50.2148231 47.6245044,49.2578618 47.3403697,47.805758 L47.3403697,47.805758 L47.1871846,47.0136235 C42.2176347,21.0045412 45.7166519,8 57.6842361,8 Z",id:"Combined-Shape",fill:"#FF4154"}))))))}var O=["style"],P=["style","onClick"],T=["instance","isOpen","setIsOpen"];var D=l.default.forwardRef((function(e,t){var n=e,a=n.instance,r=n.isOpen,d=void 0===r||r,i=n.setIsOpen,c=u(n,T);return l.default.createElement(s,{theme:f},l.default.createElement(g,o({ref:t,className:"ReactTableDevtoolsPanel"},c),l.default.createElement("style",{dangerouslySetInnerHTML:{__html:"\n            .ReactTableDevtoolsPanel * {\n              scrollbar-color: "+f.backgroundAlt+" "+f.gray+";\n            }\n\n            .ReactTableDevtoolsPanel *::-webkit-scrollbar, .ReactTableDevtoolsPanel scrollbar {\n              width: 1em;\n              height: 1em;\n            }\n\n            .ReactTableDevtoolsPanel *::-webkit-scrollbar-track, .ReactTableDevtoolsPanel scrollbar-track {\n              background: "+f.backgroundAlt+";\n            }\n\n            .ReactTableDevtoolsPanel *::-webkit-scrollbar-thumb, .ReactTableDevtoolsPanel scrollbar-thumb {\n              background: "+f.gray+";\n              border-radius: .5em;\n              border: 3px solid "+f.backgroundAlt+";\n            }\n          "}}),l.default.createElement("div",{style:{flex:"1 1 500px",minHeight:"40%",maxHeight:"100%",overflow:"auto",borderRight:"1px solid "+f.grayAlt,display:"flex",flexDirection:"column"}},l.default.createElement("div",{style:{padding:".5em",background:f.backgroundAlt,display:"flex",justifyContent:"space-between",alignItems:"center"}},l.default.createElement(M,{"aria-hidden":!0,style:{marginRight:".5em"},onClick:function(){return i(!1)}}),l.default.createElement("div",{style:{marginRight:"auto",fontSize:"clamp(.8rem, 2vw, 1.3rem)",fontWeight:"bold"}},"React Table"," ",l.default.createElement("span",{style:{fontWeight:100}},"Devtools")),l.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},d&&i?l.default.createElement(C,{type:"button","aria-label":"Close React Table Devtools",onClick:function(){i(!1)}},"Close"):null)),l.default.createElement("div",{style:{display:"flex",flexWrap:"wrap",overflowY:"auto",flex:"1"}},l.default.createElement("div",{style:{flex:"1 1 auto",padding:".5em"}},l.default.createElement(S,{label:"Instance",value:a,defaultExpanded:!1}),l.default.createElement("div",{style:{height:".5rem"}}),l.default.createElement(S,{label:"State",value:a.getState(),defaultExpanded:!1}),l.default.createElement("div",{style:{height:".5rem"}}),l.default.createElement(S,{label:"Columns",value:a.getAllColumns(),defaultExpanded:!1})),l.default.createElement("div",{style:{flex:"1 1 auto",padding:".5em"}},l.default.createElement(S,{label:"Core Model",value:a.getCoreRowModel(),defaultExpanded:!1}),l.default.createElement(S,{label:"Column Filtered Rows",value:a.getColumnFilteredRowModel(),defaultExpanded:!1}),l.default.createElement(S,{label:"Global Filtered Rows",value:a.getGlobalFilteredRowModel(),defaultExpanded:!1}),l.default.createElement(S,{label:"Sorted Rows",value:a.getSortedRowModel(),defaultExpanded:!1}),l.default.createElement(S,{label:"Grouped Rows",value:a.getGroupedRowModel(),defaultExpanded:!1}),l.default.createElement(S,{label:"Expanded Rows",value:a.getExpandedRowModel(),defaultExpanded:!1}))))))}));e.ReactTableDevtools=function(e){var t=e.initialIsOpen,n=e.instance,a=e.panelProps,r=void 0===a?{}:a,i=e.toggleButtonProps,c=void 0===i?{}:i,m=e.containerElement,b=void 0===m?"footer":m,g=l.default.useRef(null),C=l.default.useRef(null),v=d("reactTableDevtoolsOpen",t),y=v[0],h=v[1],E=function(){var e=l.default.useRef(!1),t=l.default.useCallback((function(){return e.current}),[]);return l.default[p?"useEffect":"useLayoutEffect"]((function(){return e.current=!0,function(){e.current=!1}}),[]),t}(),L=r.style,x=void 0===L?{}:L,w=u(r,O),k=c.style,R=void 0===k?{}:k,S=c.onClick,T=u(c,P);return E()?l.default.createElement(b,{ref:g,className:"ReactTableDevtools"},l.default.createElement(s,{theme:f},y?l.default.createElement(D,o({ref:C},w,{instance:n,isOpen:y,setIsOpen:h,style:o({maxHeight:"80vh",width:"100%"},x)})):l.default.createElement("button",o({type:"button"},T,{"aria-label":"Open React Table Devtools",onClick:function(e){h(!0),S&&S(e)},style:o({background:"none",border:0,padding:0,margin:".5rem",display:"inline-flex",fontSize:"1.5em",cursor:"pointer",width:"fit-content"},R)}),l.default.createElement(M,{"aria-hidden":!0})))):null},e.ReactTableDevtoolsPanel=D,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.production.js.map
