(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{GrlX:function(e,r,t){var n=t("T016"),a=t("JRS9"),o={};for(var l in n)n.hasOwnProperty(l)&&(o[n[l]]=l);var i=e.exports={to:{},get:{}};function s(e,r,t){return Math.min(Math.max(r,e),t)}function u(e){var r=e.toString(16).toUpperCase();return r.length<2?"0"+r:r}i.get=function(e){var r,t;switch(e.substring(0,3).toLowerCase()){case"hsl":r=i.get.hsl(e),t="hsl";break;case"hwb":r=i.get.hwb(e),t="hwb";break;default:r=i.get.rgb(e),t="rgb"}return r?{model:t,value:r}:null},i.get.rgb=function(e){if(!e)return null;var r,t,a,o=[0,0,0,1];if(r=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=r[2],r=r[1],t=0;t<3;t++){var l=2*t;o[t]=parseInt(r.slice(l,l+2),16)}a&&(o[3]=Math.round(parseInt(a,16)/255*100)/100)}else if(r=e.match(/^#([a-f0-9]{3,4})$/i)){for(a=(r=r[1])[3],t=0;t<3;t++)o[t]=parseInt(r[t]+r[t],16);a&&(o[3]=Math.round(parseInt(a+a,16)/255*100)/100)}else if(r=e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(t=0;t<3;t++)o[t]=parseInt(r[t+1],0);r[4]&&(o[3]=parseFloat(r[4]))}else{if(!(r=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(r=e.match(/(\D+)/))?"transparent"===r[1]?[0,0,0,0]:(o=n[r[1]])?(o[3]=1,o):null:null;for(t=0;t<3;t++)o[t]=Math.round(2.55*parseFloat(r[t+1]));r[4]&&(o[3]=parseFloat(r[4]))}for(t=0;t<3;t++)o[t]=s(o[t],0,255);return o[3]=s(o[3],0,1),o},i.get.hsl=function(e){if(!e)return null;var r=e.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(r){var t=parseFloat(r[4]);return[(parseFloat(r[1])+360)%360,s(parseFloat(r[2]),0,100),s(parseFloat(r[3]),0,100),s(isNaN(t)?1:t,0,1)]}return null},i.get.hwb=function(e){if(!e)return null;var r=e.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(r){var t=parseFloat(r[4]);return[(parseFloat(r[1])%360+360)%360,s(parseFloat(r[2]),0,100),s(parseFloat(r[3]),0,100),s(isNaN(t)?1:t,0,1)]}return null},i.to.hex=function(){var e=a(arguments);return"#"+u(e[0])+u(e[1])+u(e[2])+(e[3]<1?u(Math.round(255*e[3])):"")},i.to.rgb=function(){var e=a(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},i.to.rgb.percent=function(){var e=a(arguments),r=Math.round(e[0]/255*100),t=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+r+"%, "+t+"%, "+n+"%)":"rgba("+r+"%, "+t+"%, "+n+"%, "+e[3]+")"},i.to.hsl=function(){var e=a(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},i.to.hwb=function(){var e=a(arguments),r="";return e.length>=4&&1!==e[3]&&(r=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+r+")"},i.to.keyword=function(e){return o[e.slice(0,3)]}},JRS9:function(e,r,t){"use strict";var n=t("uPr3"),a=Array.prototype.concat,o=Array.prototype.slice,l=e.exports=function(e){for(var r=[],t=0,l=e.length;t<l;t++){var i=e[t];n(i)?r=a.call(r,o.call(i)):r.push(i)}return r};l.wrap=function(e){return function(){return e(l(arguments))}}},RXBc:function(e,r,t){"use strict";t.r(r);var n=t("KQm4"),a=t("q1tI"),o=t.n(a),l=t("pVnL"),i=t.n(l),s=t("BMxC"),u=o.a.forwardRef((function(e,r){return o.a.createElement(s.a,i()({ref:r,as:"p",fontFamily:"body"},e))}));u.displayName="Text";var c=u,h=t("8OQS"),b=t.n(h),d=t("qKvR"),f=t("cOp2"),v=t.n(f),g=t("5D9J");function p(){var e=v()(["\n  flex-shrink: 0;\n  backface-visibility: hidden;\n  &:not(:root) {\n    overflow: hidden;\n  }\n"]);return p=function(){return e},e}var m=Object(g.a)(s.a)(p()),y=Object(a.forwardRef)((function(e,r){var t=e.size,n=void 0===t?"1em":t,o=e.name,l=e.color,s=void 0===l?"currentColor":l,u=e.role,c=void 0===u?"presentation":u,h=e.focusable,f=void 0!==h&&h,v=b()(e,["size","name","color","role","focusable"]),g=Object(a.useContext)(d.b).icons,p=g["question-outline"],y=null==g[o]?p.path:g[o].path,w=(null==g[o]?p.viewBox:g[o].viewBox)||"0 0 24 24";return Object(d.d)(m,i()({ref:r,as:"svg",size:n,color:s,display:"inline-block",verticalAlign:"middle",viewBox:w,focusable:f,role:c},v),y)}));y.displayName="Icon";var w=y;function x(){var e=v()(["\n  border: 0px;\n  clip: rect(0px, 0px, 0px, 0px);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0px;\n  overflow: hidden;\n  white-space: nowrap;\n  position: absolute;\n"]);return x=function(){return e},e}var k=Object(g.a)(s.a)(x());k.displayName="VisuallyHidden";var O=k;function M(){var e=v()(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return M=function(){return e},e}var j=Object(d.e)(M()),_={xs:"0.75rem",sm:"1rem",md:"1.5rem",lg:"2rem",xl:"3rem"},S=Object(a.forwardRef)((function(e,r){var t=e.size,n=void 0===t?"md":t,a=e.label,o=void 0===a?"Loading...":a,l=e.thickness,u=void 0===l?"2px":l,c=e.speed,h=void 0===c?"0.45s":c,f=e.color,v=e.emptyColor,g=void 0===v?"transparent":v,p=b()(e,["size","label","thickness","speed","color","emptyColor"]),m=_[n]||n;return Object(d.d)(s.a,i()({ref:r,display:"inline-block",borderWidth:u,borderColor:"currentColor",borderBottomColor:g,borderLeftColor:g,borderStyle:"solid",rounded:"full",color:f,animation:j+" "+h+" linear infinite",size:m},p),o&&Object(d.d)(O,null,o))}));S.displayName="Spinner";var A=S,C=t("lSNA"),z=t.n(C),E=t("aSns"),q=t.n(E);var F=function(e,r){return q()(e).fade(1-r).rgb().string()},N=t("mf32"),P=t("CjxU");function R(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function I(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?R(t,!0).forEach((function(r){z()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var G={light:{color:"inherit",_hover:{bg:"gray.100"},_active:{bg:"gray.200"}},dark:{color:"whiteAlpha.900",_hover:{bg:"whiteAlpha.200"},_active:{bg:"whiteAlpha.300"}}},D=function(e){var r=e.color,t=e.colorMode,n=e.theme,a=n.colors[r]&&n.colors[r][200];return("gray"===r?G:{light:{color:r+".500",bg:"transparent",_hover:{bg:r+".50"},_active:{bg:r+".100"}},dark:{color:r+".200",bg:"transparent",_hover:{bg:F(a,.12)},_active:{bg:F(a,.24)}}})[t]},W={light:{bg:"gray.100",_hover:{bg:"gray.200"},_active:{bg:"gray.300"}},dark:{bg:"whiteAlpha.200",_hover:{bg:"whiteAlpha.300"},_active:{bg:"whiteAlpha.400"}}},J={_disabled:{opacity:"40%",cursor:"not-allowed",boxShadow:"none"}},T={lg:{height:12,minWidth:12,fontSize:"lg",px:6},md:{height:10,minWidth:10,fontSize:"md",px:4},sm:{height:8,minWidth:8,fontSize:"sm",px:3},xs:{height:6,minWidth:6,fontSize:"xs",px:2}},B={_focus:{boxShadow:"outline"}},L={userSelect:"inherit",bg:"none",border:0,color:"inherit",display:"inline",font:"inherit",lineHeight:"inherit",m:0,p:0,textAlign:"inherit"},U=function(e){switch(e.variant){case"solid":return t=(r=e).color,n=r.colorMode,a={light:{bg:t+".500",color:"white",_hover:{bg:t+".600"},_active:{bg:t+".700"}},dark:{bg:t+".200",color:"gray.800",_hover:{bg:t+".300"},_active:{bg:t+".400"}}},"gray"===t&&(a=W),a[n];case"ghost":return D(e);case"link":return function(e){var r=e.color,t=e.colorMode;return{p:0,height:"auto",lineHeight:"normal",color:{light:r+".500",dark:r+".200"}[t],_hover:{textDecoration:"underline"},_active:{color:{light:r+".700",dark:r+".500"}[t]}}}(e);case"outline":return function(e){var r=e.color,t=e.colorMode;return I({border:"1px",borderColor:"gray"===r?{light:"gray.200",dark:"whiteAlpha.300"}[t]:"current"},D(e))}(e);case"unstyled":return L;default:return{}}var r,t,n,a},X={display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",transition:"all 250ms",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",lineHeight:"1.2",outline:"none"},H=function(e){var r,t=I({},e,{colorMode:Object(N.b)().colorMode,theme:Object(P.b)()});return I({},X,{},(r=t.size,T[r]),{},B,{},J,{},U(t))},$=t("OJSm"),Q=t("QdyT"),K=Object(g.a)(s.a)((function(e){var r,t=e._after,n=e._focus,a=e._selected,o=e._focusWithin,l=e._hover,i=e._invalid,s=e._active,u=e._disabled,c=e._grabbed,h=e._pressed,b=e._expanded,d=e._visited,f=e._before,v=e._readOnly,g=e._first,p=e._notFirst,m=e._notLast,y=e._last,w=e._placeholder,x=e._checked,k=e._groupHover,O=e._mixed,M=e._odd,j=e._even;return Object($.a)(((r={})["&:hover"]=Object(Q.b)(l),r["&:focus"]=Object(Q.b)(n),r["&:active, &[data-active=true]"]=Object(Q.b)(s),r["&:visited"]=Object(Q.b)(d),r["&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover"]=Object(Q.b)(u),r["&[aria-selected=true]"]=Object(Q.b)(a),r["&[aria-invalid=true]"]=Object(Q.b)(i),r["&[aria-expanded=true]"]=Object(Q.b)(b),r["&[aria-grabbed=true]"]=Object(Q.b)(c),r["&[aria-readonly=true], &[readonly]"]=Object(Q.b)(v),r["&:first-of-type"]=Object(Q.b)(g),r["&:not(:first-of-type)"]=Object(Q.b)(p),r["&:not(:last-of-type)"]=Object(Q.b)(m),r["&:last-of-type"]=Object(Q.b)(y),r["&:nth-of-type(odd)"]=Object(Q.b)(M),r["&:nth-of-type(even)"]=Object(Q.b)(j),r["&[aria-checked=mixed]"]=Object(Q.b)(O),r["&[aria-checked=true]"]=Object(Q.b)(x),r["&[aria-pressed=true]"]=Object(Q.b)(h),r["[role=group]:hover &"]=Object(Q.b)(k),r["&:before"]=Object(Q.b)(f),r["&:after"]=Object(Q.b)(t),r["&:focus-within"]=Object(Q.b)(o),r["&::placeholder"]=w,r))}));K.displayName="PseudoBox";var V=K;["a[href]","area[href]","button:not([disabled])","embed","iframe","input:not([disabled])","object","select:not([disabled])","textarea:not([disabled])","*[tabindex]:not([aria-disabled])","*[contenteditable]"].join();"undefined"!=typeof window?a.useLayoutEffect:a.useEffect;var Y=function(e){var r=e.icon,t=b()(e,["icon"]);return"string"==typeof r?Object(d.d)(w,i()({focusable:"false","aria-hidden":"true",name:r,color:"currentColor"},t)):Object(d.d)(s.a,i()({as:r,"data-custom-icon":!0,focusable:"false","aria-hidden":"true",color:"currentColor"},t))},Z=Object(a.forwardRef)((function(e,r){var t=e.isDisabled,n=e.isLoading,a=e.isActive,o=e.isFullWidth,l=e.children,u=e.as,c=void 0===u?"button":u,h=e.variantColor,f=void 0===h?"gray":h,v=e.leftIcon,g=e.rightIcon,p=e.variant,m=void 0===p?"solid":p,y=e.loadingText,w=e.iconSpacing,x=void 0===w?2:w,k=e.type,O=void 0===k?"button":k,M=e.size,j=void 0===M?"md":M,_=e.colorMode,S=b()(e,["isDisabled","isLoading","isActive","isFullWidth","children","as","variantColor","leftIcon","rightIcon","variant","loadingText","iconSpacing","type","size","colorMode"]);Object(P.b)();var C=H({color:f,variant:m,size:j,colorMode:_}),z=t||n;return Object(d.d)(V,i()({disabled:z,"aria-disabled":z,ref:r,as:c,type:O,borderRadius:"md",fontWeight:"semibold",width:o?"full":void 0,"data-active":a?"true":void 0},C,S),v&&!n&&Object(d.d)(Y,{ml:-1,mr:x,icon:v}),n&&Object(d.d)(A,{position:y?"relative":"absolute",mr:y?x:0,color:"currentColor",size:"1em"}),n?y||Object(d.d)(s.a,{as:"span",opacity:"0"},l):l,g&&!n&&Object(d.d)(Y,{mr:-1,ml:x,icon:g}))}));Z.displayName="Button";var ee=Z,re=Object(a.forwardRef)((function(e,r){var t=e.gap,n=e.rowGap,a=e.columnGap,l=e.autoFlow,u=e.autoRows,c=e.autoColumns,h=e.templateRows,d=e.templateColumns,f=e.templateAreas,v=e.area,g=e.column,p=e.row,m=b()(e,["gap","rowGap","columnGap","autoFlow","autoRows","autoColumns","templateRows","templateColumns","templateAreas","area","column","row"]);return o.a.createElement(s.a,i()({ref:r,display:"grid",gridArea:v,gridTemplateAreas:f,gridGap:t,gridRowGap:n,gridColumnGap:a,gridAutoColumns:c,gridColumn:g,gridRow:p,gridAutoFlow:l,gridAutoRows:u,gridTemplateRows:h,gridTemplateColumns:d},m))}));re.displayName="Grid";var te=re,ne=function(e){return"number"==typeof e?e+"px":e},ae=Object(a.forwardRef)((function(e,r){var t=e.columns,n=e.spacingX,a=e.spacingY,l=e.spacing,s=e.minChildWidth,u=b()(e,["columns","spacingX","spacingY","spacing","minChildWidth"]),c=s?function e(r){if(Array.isArray(r))return r.map(e);if(null!==r&&"object"==typeof r&&Object.keys(r).length>0){var t={};for(var n in r)t[n]="repeat(auto-fit, minmax("+ne(r[n])+", 1fr))";return t}return null!=r?"repeat(auto-fit, minmax("+ne(r)+", 1fr))":null}(s):function e(r){if(Array.isArray(r))return r.map(e);if(null!==r&&"object"==typeof r&&Object.keys(r).length>0){var t={};for(var n in r)t[n]="repeat("+r[n]+", 1fr)";return t}return null!=r?"repeat("+r+", 1fr)":null}(t);return o.a.createElement(te,i()({ref:r,gap:l,columnGap:n,rowGap:a,templateColumns:c},u))}));ae.displayName="SimpleGrid";var oe=ae,le=t("b9xi"),ie=t("Bl7J"),se=t("vrFN");r.default=function(){var e=Object(a.useState)(!1),r=e[0],t=e[1],l=Object(a.useState)(!1),i=(l[0],l[1],Object(a.useState)("")),s=i[0],u=i[1],h=Object(a.useState)(0),b=h[0],d=h[1],f=Object(a.useState)({}),v=f[0],g=f[1],p=Object(a.useState)([]),m=p[0],y=p[1],w={"가슴매니아":1,"노인성애자":2,"노출광":3,"야외플매니아":4,"새디스트":5,"마조히스트":6,"남근매니아":7,"나르시시스트":8,"야동수집가":9,"위선자":10,default:1/0};return console.log(s),o.a.createElement(ie.a,null,o.a.createElement(se.a,{title:"Home"}),r?o.a.createElement(o.a.Fragment,null,b<12?o.a.createElement(o.a.Fragment,null,o.a.createElement(c,{fontSize:"xl",my:"150px"}," Q ",le[b].question,"  "),o.a.createElement(oe,{columns:2,spacing:5},le[b].answers.map((function(e,r){return o.a.createElement(ee,{bg:"#ff69b4",height:"80px",w:"100%",key:r,onClick:function(){!function(e,r){if(b<12&&(e.forEach((function(e){var r,t,n=1;("-"===e[0]&&(n*=-1,e=e.substring(1)),void 0!==v[e])?g(Object.assign({},v,((r={})[e]=v[e]+n,r))):g(Object.assign({},v,((t={})[e]=1,t)))})),y([].concat(Object(n.a)(m),[r])),console.log(v),d(b+1),b+1===12))if(m.reduce((function(e,r){return(0===e.length||e[0]!==r)&&e.push(r),e}),[]).length>1){var t=Object.entries(v);t.sort((function(e,r){return e[1]>r[1]?-1:e[1]<r[1]?1:(w[e[0]]||w.default)-(w[r[0]]||w.default)})),u(t[0][0])}else u("게으름뱅이")}(e.value,r)}},e.label)})))):o.a.createElement(o.a.Fragment,null,o.a.createElement(c,{fontSize:"xl"}," 결국 당신도 똑같은 남자였어 이런 붼태 ",s,"... (부끄부끄)"),o.a.createElement(ee,{bg:"#ff69b4",height:"300px",w:"300px",onClick:function(){t(!1),d(0),g({}),y([])}},"근데 나 또할래"))):o.a.createElement(o.a.Fragment,null,o.a.createElement(c,{fontSize:"xl",my:"200px"}," 페티쉬 테스트에 오신걸 환영합니다 "),o.a.createElement(c,{fontSize:"lg"}," 여러분의 페티쉬를 심리테스트로 인해 알려드리죠 후후후"),o.a.createElement(ee,{size:"lg",my:"50px",onClick:function(){t(!r)}},"자 시작해볼까요?")))}},T016:function(e,r,t){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},aSns:function(e,r,t){"use strict";var n=t("GrlX"),a=t("uxXc"),o=[].slice,l=["keyword","gray","hex"],i={};Object.keys(a).forEach((function(e){i[o.call(a[e].labels).sort().join("")]=e}));var s={};function u(e,r){if(!(this instanceof u))return new u(e,r);if(r&&r in l&&(r=null),r&&!(r in a))throw new Error("Unknown model: "+r);var t,c;if(null==e)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof u)this.model=e.model,this.color=e.color.slice(),this.valpha=e.valpha;else if("string"==typeof e){var h=n.get(e);if(null===h)throw new Error("Unable to parse color from string: "+e);this.model=h.model,c=a[this.model].channels,this.color=h.value.slice(0,c),this.valpha="number"==typeof h.value[c]?h.value[c]:1}else if(e.length){this.model=r||"rgb",c=a[this.model].channels;var b=o.call(e,0,c);this.color=d(b,c),this.valpha="number"==typeof e[c]?e[c]:1}else if("number"==typeof e)e&=16777215,this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;var f=Object.keys(e);"alpha"in e&&(f.splice(f.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);var v=f.sort().join("");if(!(v in i))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=i[v];var g=a[this.model].labels,p=[];for(t=0;t<g.length;t++)p.push(e[g[t]]);this.color=d(p)}if(s[this.model])for(c=a[this.model].channels,t=0;t<c;t++){var m=s[this.model][t];m&&(this.color[t]=m(this.color[t]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function c(e,r,t){return(e=Array.isArray(e)?e:[e]).forEach((function(e){(s[e]||(s[e]=[]))[r]=t})),e=e[0],function(n){var a;return arguments.length?(t&&(n=t(n)),(a=this[e]()).color[r]=n,a):(a=this[e]().color[r],t&&(a=t(a)),a)}}function h(e){return function(r){return Math.max(0,Math.min(e,r))}}function b(e){return Array.isArray(e)?e:[e]}function d(e,r){for(var t=0;t<r;t++)"number"!=typeof e[t]&&(e[t]=0);return e}u.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(e){var r=this.model in n.to?this:this.rgb(),t=1===(r=r.round("number"==typeof e?e:1)).valpha?r.color:r.color.concat(this.valpha);return n.to[r.model](t)},percentString:function(e){var r=this.rgb().round("number"==typeof e?e:1),t=1===r.valpha?r.color:r.color.concat(this.valpha);return n.to.rgb.percent(t)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var e={},r=a[this.model].channels,t=a[this.model].labels,n=0;n<r;n++)e[t[n]]=this.color[n];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray:function(){var e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject:function(){var e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round:function(e){return e=Math.max(e||0,0),new u(this.color.map(function(e){return function(r){return function(e,r){return Number(e.toFixed(r))}(r,e)}}(e)).concat(this.valpha),this.model)},alpha:function(e){return arguments.length?new u(this.color.concat(Math.max(0,Math.min(1,e))),this.model):this.valpha},red:c("rgb",0,h(255)),green:c("rgb",1,h(255)),blue:c("rgb",2,h(255)),hue:c(["hsl","hsv","hsl","hwb","hcg"],0,(function(e){return(e%360+360)%360})),saturationl:c("hsl",1,h(100)),lightness:c("hsl",2,h(100)),saturationv:c("hsv",1,h(100)),value:c("hsv",2,h(100)),chroma:c("hcg",1,h(100)),gray:c("hcg",2,h(100)),white:c("hwb",1,h(100)),wblack:c("hwb",2,h(100)),cyan:c("cmyk",0,h(100)),magenta:c("cmyk",1,h(100)),yellow:c("cmyk",2,h(100)),black:c("cmyk",3,h(100)),x:c("xyz",0,h(100)),y:c("xyz",1,h(100)),z:c("xyz",2,h(100)),l:c("lab",0,h(100)),a:c("lab",1),b:c("lab",2),keyword:function(e){return arguments.length?new u(e):a[this.model].keyword(this.color)},hex:function(e){return arguments.length?new u(e):n.to.hex(this.rgb().round().color)},rgbNumber:function(){var e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity:function(){for(var e=this.rgb().color,r=[],t=0;t<e.length;t++){var n=e[t]/255;r[t]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*r[0]+.7152*r[1]+.0722*r[2]},contrast:function(e){var r=this.luminosity(),t=e.luminosity();return r>t?(r+.05)/(t+.05):(t+.05)/(r+.05)},level:function(e){var r=this.contrast(e);return r>=7.1?"AAA":r>=4.5?"AA":""},isDark:function(){var e=this.rgb().color;return(299*e[0]+587*e[1]+114*e[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var e=this.rgb(),r=0;r<3;r++)e.color[r]=255-e.color[r];return e},lighten:function(e){var r=this.hsl();return r.color[2]+=r.color[2]*e,r},darken:function(e){var r=this.hsl();return r.color[2]-=r.color[2]*e,r},saturate:function(e){var r=this.hsl();return r.color[1]+=r.color[1]*e,r},desaturate:function(e){var r=this.hsl();return r.color[1]-=r.color[1]*e,r},whiten:function(e){var r=this.hwb();return r.color[1]+=r.color[1]*e,r},blacken:function(e){var r=this.hwb();return r.color[2]+=r.color[2]*e,r},grayscale:function(){var e=this.rgb().color,r=.3*e[0]+.59*e[1]+.11*e[2];return u.rgb(r,r,r)},fade:function(e){return this.alpha(this.valpha-this.valpha*e)},opaquer:function(e){return this.alpha(this.valpha+this.valpha*e)},rotate:function(e){var r=this.hsl(),t=r.color[0];return t=(t=(t+e)%360)<0?360+t:t,r.color[0]=t,r},mix:function(e,r){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);var t=e.rgb(),n=this.rgb(),a=void 0===r?.5:r,o=2*a-1,l=t.alpha()-n.alpha(),i=((o*l==-1?o:(o+l)/(1+o*l))+1)/2,s=1-i;return u.rgb(i*t.red()+s*n.red(),i*t.green()+s*n.green(),i*t.blue()+s*n.blue(),t.alpha()*a+n.alpha()*(1-a))}},Object.keys(a).forEach((function(e){if(-1===l.indexOf(e)){var r=a[e].channels;u.prototype[e]=function(){if(this.model===e)return new u(this);if(arguments.length)return new u(arguments,e);var t="number"==typeof arguments[r]?r:this.valpha;return new u(b(a[this.model][e].raw(this.color)).concat(t),e)},u[e]=function(t){return"number"==typeof t&&(t=d(o.call(arguments),r)),new u(t,e)}}})),e.exports=u},b9xi:function(e){e.exports=JSON.parse('[{"index":1,"question":"당신의이상적인연애상대는?","answers":[{"label":"연하","value":["새디스트"]},{"label":"연상","value":["노인성애자","마조히스트"]},{"label":"동갑","value":["나르시시스트"]},{"label":"상관없다","value":["위선자"]}]},{"index":2,"question":"이성을볼때중요시여기는것은?","answers":[{"label":"성격","value":["마조히스트","새디스트"]},{"label":"마조히스트","value":["마조히스트","남근매니아","노출광"]},{"label":"능력","value":["노인성애자"]},{"label":"상관없다","value":["위선자"]}]},{"index":3,"question":"당신이모처럼의휴일을보내는방법은?","answers":[{"label":"집에서다운받아놓은영화를본다","value":["야동수집가"]},{"label":"무조건밖으로나가고본다","value":["야외플매니아"]},{"label":"자기계발의시간을갖는다","value":["나르시시스트"]},{"label":"양로원봉사활동","value":["노인성애자"]}]},{"index":4,"question":"당신은친구들과의관계에서?","answers":[{"label":"고민을털어놓는편이다","value":["야동수집가"]},{"label":"고민을들어주는편이다","value":["야외플매니아"]},{"label":"고민을들어주는편이다","value":[]},{"label":"친구가없다","value":["나르시시스트","-위선자"]}]},{"index":5,"question":"당신이스포츠용품점에서가장먼저살것은?","answers":[{"label":"골프채","value":["남근매니아","야외플매니아"]},{"label":"축구공","value":["가슴매니아","야외플매니아"]},{"label":"수영복","value":["노출광"]},{"label":"스포츠전문잡지","value":["야동수집가","위선자"]}]},{"index":6,"question":"당신의여행콘셉트는?","answers":[{"label":"당신의여행콘셉트는","value":[]},{"label":"자아를찾는정적인여행","value":["나르시시스트","위선자"]},{"label":"누구나부러워할호화여행","value":[]},{"label":"여행을좋아하지않는다","value":["야동수집가","-야외플매니아"]}]},{"index":6,"question":"당신의여행콘셉트는?","answers":[{"label":"당신의여행콘셉트는","value":[]},{"label":"자아를찾는정적인여행","value":["나르시시스트","위선자"]},{"label":"누구나부러워할호화여행","value":[]},{"label":"여행을좋아하지않는다","value":["야동수집가","-야외플매니아"]}]},{"index":7,"question":"당신이좋아하는떡은?","answers":[{"label":"당신이좋아하는떡은","value":["가슴매니아"]},{"label":"가슴매니아","value":[]},{"label":"가래떡","value":["남근매니아"]},{"label":"떡은좋아하지않는다","value":["-노인성애자"]}]},{"index":8,"question":"좋아하는이성과이상적인첫데이트코스는?","answers":[{"label":"공원","value":["야외플매니아"]},{"label":"영화관","value":["야외플매니아"]},{"label":"함께운동","value":["새디스트","마조히스트"]},{"label":"이성과잘될일이없다","value":["야동수집가"]}]},{"index":9,"question":"연인과의다툼에서당신의행동은?","answers":[{"label":"사과를받아낼때까지상대방을추궁한다","value":["새디스트","나르시시스트"]},{"label":"무조건내가먼저사과한다","value":["나르시시스트","위선자"]},{"label":"자잘못을따지기전눈물부터흘린다","value":["마조히스트"]},{"label":"아무런행동도하지않는다","value":["나르시시스트"]}]},{"index":10,"question":"무더운여름날,당신이집안에서첫번째로할일은?","answers":[{"label":"차가운아이스바를먹는다","value":["남근매니아"]},{"label":"짧은옷으로갈아입는다","value":["노출광"]},{"label":"에어컨을튼다","value":["야동수집가"]},{"label":"밖으로나간다","value":["야외플매니아"]}]},{"index":11,"question":"연인과함께하고싶은활동은?","answers":[{"label":"장기/체스","value":["노인성애자"]},{"label":"커플요가","value":["남근매니아","가슴매니아"]},{"label":"맛집탐방","value":[]},{"label":"철학탐구","value":["위선자"]}]},{"index":12,"question":"당신이성욕을느끼는대상은?","answers":[{"label":"여자","value":["가슴매니아","새디스트","마조히스트","야외플매니아","노인성애자","노출광","야동수집가","위선자","나르시시스트"]},{"label":"여자","value":["남근매니아","새디스트","마조히스트","야외플매니아","노인성애자","노출광","야동수집가","위선자","나르시시스트"]},{"label":"둘다","value":[]},{"label":"그게왜중요한가?","value":["위선자","나르시시스트"]}]}]')},onlc:function(e,r,t){var n=t("t1N5");function a(e){var r=function(){for(var e={},r=Object.keys(n),t=r.length,a=0;a<t;a++)e[r[a]]={distance:-1,parent:null};return e}(),t=[e];for(r[e].distance=0;t.length;)for(var a=t.pop(),o=Object.keys(n[a]),l=o.length,i=0;i<l;i++){var s=o[i],u=r[s];-1===u.distance&&(u.distance=r[a].distance+1,u.parent=a,t.unshift(s))}return r}function o(e,r){return function(t){return r(e(t))}}function l(e,r){for(var t=[r[e].parent,e],a=n[r[e].parent][e],l=r[e].parent;r[l].parent;)t.unshift(r[l].parent),a=o(n[r[l].parent][l],a),l=r[l].parent;return a.conversion=t,a}e.exports=function(e){for(var r=a(e),t={},n=Object.keys(r),o=n.length,i=0;i<o;i++){var s=n[i];null!==r[s].parent&&(t[s]=l(s,r))}return t}},t1N5:function(e,r,t){var n=t("T016"),a={};for(var o in n)n.hasOwnProperty(o)&&(a[n[o]]=o);var l=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var i in l)if(l.hasOwnProperty(i)){if(!("channels"in l[i]))throw new Error("missing channels property: "+i);if(!("labels"in l[i]))throw new Error("missing channel labels property: "+i);if(l[i].labels.length!==l[i].channels)throw new Error("channel and label counts mismatch: "+i);var s=l[i].channels,u=l[i].labels;delete l[i].channels,delete l[i].labels,Object.defineProperty(l[i],"channels",{value:s}),Object.defineProperty(l[i],"labels",{value:u})}l.rgb.hsl=function(e){var r,t,n=e[0]/255,a=e[1]/255,o=e[2]/255,l=Math.min(n,a,o),i=Math.max(n,a,o),s=i-l;return i===l?r=0:n===i?r=(a-o)/s:a===i?r=2+(o-n)/s:o===i&&(r=4+(n-a)/s),(r=Math.min(60*r,360))<0&&(r+=360),t=(l+i)/2,[r,100*(i===l?0:t<=.5?s/(i+l):s/(2-i-l)),100*t]},l.rgb.hsv=function(e){var r,t,n,a,o,l=e[0]/255,i=e[1]/255,s=e[2]/255,u=Math.max(l,i,s),c=u-Math.min(l,i,s),h=function(e){return(u-e)/6/c+.5};return 0===c?a=o=0:(o=c/u,r=h(l),t=h(i),n=h(s),l===u?a=n-t:i===u?a=1/3+r-n:s===u&&(a=2/3+t-r),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*u]},l.rgb.hwb=function(e){var r=e[0],t=e[1],n=e[2];return[l.rgb.hsl(e)[0],100*(1/255*Math.min(r,Math.min(t,n))),100*(n=1-1/255*Math.max(r,Math.max(t,n)))]},l.rgb.cmyk=function(e){var r,t=e[0]/255,n=e[1]/255,a=e[2]/255;return[100*((1-t-(r=Math.min(1-t,1-n,1-a)))/(1-r)||0),100*((1-n-r)/(1-r)||0),100*((1-a-r)/(1-r)||0),100*r]},l.rgb.keyword=function(e){var r=a[e];if(r)return r;var t,o,l,i=1/0;for(var s in n)if(n.hasOwnProperty(s)){var u=n[s],c=(o=e,l=u,Math.pow(o[0]-l[0],2)+Math.pow(o[1]-l[1],2)+Math.pow(o[2]-l[2],2));c<i&&(i=c,t=s)}return t},l.keyword.rgb=function(e){return n[e]},l.rgb.xyz=function(e){var r=e[0]/255,t=e[1]/255,n=e[2]/255;return[100*(.4124*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.3576*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*r+.7152*t+.0722*n),100*(.0193*r+.1192*t+.9505*n)]},l.rgb.lab=function(e){var r=l.rgb.xyz(e),t=r[0],n=r[1],a=r[2];return n/=100,a/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},l.hsl.rgb=function(e){var r,t,n,a,o,l=e[0]/360,i=e[1]/100,s=e[2]/100;if(0===i)return[o=255*s,o,o];r=2*s-(t=s<.5?s*(1+i):s+i-s*i),a=[0,0,0];for(var u=0;u<3;u++)(n=l+1/3*-(u-1))<0&&n++,n>1&&n--,o=6*n<1?r+6*(t-r)*n:2*n<1?t:3*n<2?r+(t-r)*(2/3-n)*6:r,a[u]=255*o;return a},l.hsl.hsv=function(e){var r=e[0],t=e[1]/100,n=e[2]/100,a=t,o=Math.max(n,.01);return t*=(n*=2)<=1?n:2-n,a*=o<=1?o:2-o,[r,100*(0===n?2*a/(o+a):2*t/(n+t)),100*((n+t)/2)]},l.hsv.rgb=function(e){var r=e[0]/60,t=e[1]/100,n=e[2]/100,a=Math.floor(r)%6,o=r-Math.floor(r),l=255*n*(1-t),i=255*n*(1-t*o),s=255*n*(1-t*(1-o));switch(n*=255,a){case 0:return[n,s,l];case 1:return[i,n,l];case 2:return[l,n,s];case 3:return[l,i,n];case 4:return[s,l,n];case 5:return[n,l,i]}},l.hsv.hsl=function(e){var r,t,n,a=e[0],o=e[1]/100,l=e[2]/100,i=Math.max(l,.01);return n=(2-o)*l,t=o*i,[a,100*(t=(t/=(r=(2-o)*i)<=1?r:2-r)||0),100*(n/=2)]},l.hwb.rgb=function(e){var r,t,n,a,o,l,i,s=e[0]/360,u=e[1]/100,c=e[2]/100,h=u+c;switch(h>1&&(u/=h,c/=h),n=6*s-(r=Math.floor(6*s)),0!=(1&r)&&(n=1-n),a=u+n*((t=1-c)-u),r){default:case 6:case 0:o=t,l=a,i=u;break;case 1:o=a,l=t,i=u;break;case 2:o=u,l=t,i=a;break;case 3:o=u,l=a,i=t;break;case 4:o=a,l=u,i=t;break;case 5:o=t,l=u,i=a}return[255*o,255*l,255*i]},l.cmyk.rgb=function(e){var r=e[0]/100,t=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},l.xyz.rgb=function(e){var r,t,n,a=e[0]/100,o=e[1]/100,l=e[2]/100;return t=-.9689*a+1.8758*o+.0415*l,n=.0557*a+-.204*o+1.057*l,r=(r=3.2406*a+-1.5372*o+-.4986*l)>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(r=Math.min(Math.max(0,r),1)),255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1))]},l.xyz.lab=function(e){var r=e[0],t=e[1],n=e[2];return t/=100,n/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(r-t),200*(t-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},l.lab.xyz=function(e){var r,t,n,a=e[0];r=e[1]/500+(t=(a+16)/116),n=t-e[2]/200;var o=Math.pow(t,3),l=Math.pow(r,3),i=Math.pow(n,3);return t=o>.008856?o:(t-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,n=i>.008856?i:(n-16/116)/7.787,[r*=95.047,t*=100,n*=108.883]},l.lab.lch=function(e){var r,t=e[0],n=e[1],a=e[2];return(r=360*Math.atan2(a,n)/2/Math.PI)<0&&(r+=360),[t,Math.sqrt(n*n+a*a),r]},l.lch.lab=function(e){var r,t=e[0],n=e[1];return r=e[2]/360*2*Math.PI,[t,n*Math.cos(r),n*Math.sin(r)]},l.rgb.ansi16=function(e){var r=e[0],t=e[1],n=e[2],a=1 in arguments?arguments[1]:l.rgb.hsv(e)[2];if(0===(a=Math.round(a/50)))return 30;var o=30+(Math.round(n/255)<<2|Math.round(t/255)<<1|Math.round(r/255));return 2===a&&(o+=60),o},l.hsv.ansi16=function(e){return l.rgb.ansi16(l.hsv.rgb(e),e[2])},l.rgb.ansi256=function(e){var r=e[0],t=e[1],n=e[2];return r===t&&t===n?r<8?16:r>248?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(t/255*5)+Math.round(n/255*5)},l.ansi16.rgb=function(e){var r=e%10;if(0===r||7===r)return e>50&&(r+=3.5),[r=r/10.5*255,r,r];var t=.5*(1+~~(e>50));return[(1&r)*t*255,(r>>1&1)*t*255,(r>>2&1)*t*255]},l.ansi256.rgb=function(e){if(e>=232){var r=10*(e-232)+8;return[r,r,r]}var t;return e-=16,[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},l.rgb.hex=function(e){var r=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(r.length)+r},l.hex.rgb=function(e){var r=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var t=r[0];3===r[0].length&&(t=t.split("").map((function(e){return e+e})).join(""));var n=parseInt(t,16);return[n>>16&255,n>>8&255,255&n]},l.rgb.hcg=function(e){var r,t=e[0]/255,n=e[1]/255,a=e[2]/255,o=Math.max(Math.max(t,n),a),l=Math.min(Math.min(t,n),a),i=o-l;return r=i<=0?0:o===t?(n-a)/i%6:o===n?2+(a-t)/i:4+(t-n)/i+4,r/=6,[360*(r%=1),100*i,100*(i<1?l/(1-i):0)]},l.hsl.hcg=function(e){var r=e[1]/100,t=e[2]/100,n=1,a=0;return(n=t<.5?2*r*t:2*r*(1-t))<1&&(a=(t-.5*n)/(1-n)),[e[0],100*n,100*a]},l.hsv.hcg=function(e){var r=e[1]/100,t=e[2]/100,n=r*t,a=0;return n<1&&(a=(t-n)/(1-n)),[e[0],100*n,100*a]},l.hcg.rgb=function(e){var r=e[0]/360,t=e[1]/100,n=e[2]/100;if(0===t)return[255*n,255*n,255*n];var a,o=[0,0,0],l=r%1*6,i=l%1,s=1-i;switch(Math.floor(l)){case 0:o[0]=1,o[1]=i,o[2]=0;break;case 1:o[0]=s,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=i;break;case 3:o[0]=0,o[1]=s,o[2]=1;break;case 4:o[0]=i,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=s}return a=(1-t)*n,[255*(t*o[0]+a),255*(t*o[1]+a),255*(t*o[2]+a)]},l.hcg.hsv=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r),n=0;return t>0&&(n=r/t),[e[0],100*n,100*t]},l.hcg.hsl=function(e){var r=e[1]/100,t=e[2]/100*(1-r)+.5*r,n=0;return t>0&&t<.5?n=r/(2*t):t>=.5&&t<1&&(n=r/(2*(1-t))),[e[0],100*n,100*t]},l.hcg.hwb=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r);return[e[0],100*(t-r),100*(1-t)]},l.hwb.hcg=function(e){var r=e[1]/100,t=1-e[2]/100,n=t-r,a=0;return n<1&&(a=(t-n)/(1-n)),[e[0],100*n,100*a]},l.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},l.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},l.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},l.gray.hsl=l.gray.hsv=function(e){return[0,0,e[0]]},l.gray.hwb=function(e){return[0,100,e[0]]},l.gray.cmyk=function(e){return[0,0,0,e[0]]},l.gray.lab=function(e){return[e[0],0,0]},l.gray.hex=function(e){var r=255&Math.round(e[0]/100*255),t=((r<<16)+(r<<8)+r).toString(16).toUpperCase();return"000000".substring(t.length)+t},l.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},uPr3:function(e,r){e.exports=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))}},uxXc:function(e,r,t){var n=t("t1N5"),a=t("onlc"),o={};Object.keys(n).forEach((function(e){o[e]={},Object.defineProperty(o[e],"channels",{value:n[e].channels}),Object.defineProperty(o[e],"labels",{value:n[e].labels});var r=a(e);Object.keys(r).forEach((function(t){var n=r[t];o[e][t]=function(e){var r=function(r){if(null==r)return r;arguments.length>1&&(r=Array.prototype.slice.call(arguments));var t=e(r);if("object"==typeof t)for(var n=t.length,a=0;a<n;a++)t[a]=Math.round(t[a]);return t};return"conversion"in e&&(r.conversion=e.conversion),r}(n),o[e][t].raw=function(e){var r=function(r){return null==r?r:(arguments.length>1&&(r=Array.prototype.slice.call(arguments)),e(r))};return"conversion"in e&&(r.conversion=e.conversion),r}(n)}))})),e.exports=o}}]);
//# sourceMappingURL=component---src-pages-index-js-f5f6242d078c4c94064d.js.map