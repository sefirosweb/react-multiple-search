import{r as R,R as ie}from"./index-61bf1805.js";import{_ as P,a as xe}from"./tslib.es6-17d83084.js";import"./_commonjsHelpers-de833af9.js";var Et={exports:{}},Se={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=R,sr=Symbol.for("react.element"),cr=Symbol.for("react.fragment"),lr=Object.prototype.hasOwnProperty,dr=ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ur={key:!0,ref:!0,__self:!0,__source:!0};function Pt(e,t,r){var n,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)lr.call(t,n)&&!ur.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:sr,type:e,key:o,ref:i,props:a,_owner:dr.current}}Se.Fragment=cr;Se.jsx=Pt;Se.jsxs=Pt;Et.exports=Se;var b=Et.exports;const pr=[{label:"All",filter:"all"},{label:"Name",filter:"name"},{label:"Email",filter:"email"},{label:"Phone",filter:"phone"},{label:"Address",filter:"address"},{label:"Company",filter:"company"},{label:"Job Title",filter:"job_title"},{label:"Department",filter:"department"},{label:"Skills",filter:"skills"},{label:"University",filter:"university"},{label:"Degree",filter:"degree"},{label:"Major",filter:"major"},{label:"Graduation Year",filter:"graduation_year"},{label:"GPA",filter:"gpa"}],qe=()=>b.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"})});try{qe.displayName="AiOutlineSearch",qe.__docgenInfo={description:"",displayName:"AiOutlineSearch",props:{}}}catch{}var k="-ms-",oe="-moz-",g="-webkit-",Lt="comm",ke="rule",lt="decl",fr="@import",Ot="@keyframes",mr="@layer",hr=Math.abs,dt=String.fromCharCode,Ve=Object.assign;function gr(e,t){return N(e,0)^45?(((t<<2^N(e,0))<<2^N(e,1))<<2^N(e,2))<<2^N(e,3):0}function jt(e){return e.trim()}function q(e,t){return(e=t.exec(e))?e[0]:e}function u(e,t,r){return e.replace(t,r)}function he(e,t){return e.indexOf(t)}function N(e,t){return e.charCodeAt(t)|0}function K(e,t,r){return e.slice(t,r)}function j(e){return e.length}function qt(e){return e.length}function ae(e,t){return t.push(e),e}function yr(e,t){return e.map(t).join("")}function ht(e,t){return e.filter(function(r){return!q(r,t)})}var Ae=1,X=1,Vt=0,L=0,C=0,ee="";function Te(e,t,r,n,a,o,i,c){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:Ae,column:X,length:i,return:"",siblings:c}}function $(e,t){return Ve(Te("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Y(e){for(;e.root;)e=$(e.root,{children:[e]});ae(e,e.siblings)}function br(){return C}function xr(){return C=L>0?N(ee,--L):0,X--,C===10&&(X=1,Ae--),C}function O(){return C=L<Vt?N(ee,L++):0,X++,C===10&&(X=1,Ae++),C}function G(){return N(ee,L)}function ge(){return L}function Ie(e,t){return K(ee,e,t)}function ze(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vr(e){return Ae=X=1,Vt=j(ee=e),L=0,[]}function _r(e){return ee="",e}function Ee(e){return jt(Ie(L-1,Fe(e===91?e+2:e===40?e+1:e)))}function wr(e){for(;(C=G())&&C<33;)O();return ze(e)>2||ze(C)>3?"":" "}function Sr(e,t){for(;--t&&O()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return Ie(e,ge()+(t<6&&G()==32&&O()==32))}function Fe(e){for(;O();)switch(C){case e:return L;case 34:case 39:e!==34&&e!==39&&Fe(C);break;case 40:e===41&&Fe(e);break;case 92:O();break}return L}function kr(e,t){for(;O()&&e+C!==47+10;)if(e+C===42+42&&G()===47)break;return"/*"+Ie(t,L-1)+"*"+dt(e===47?e:O())}function Ar(e){for(;!ze(G());)O();return Ie(e,L)}function Tr(e){return _r(ye("",null,null,null,[""],e=vr(e),0,[0],e))}function ye(e,t,r,n,a,o,i,c,l){for(var d=0,f=0,h=i,y=0,p=0,x=0,w=1,E=1,A=1,m=0,v="",I=a,_=o,T=n,s=v;E;)switch(x=m,m=O()){case 40:if(x!=108&&N(s,h-1)==58){he(s+=u(Ee(m),"&","&\f"),"&\f")!=-1&&(A=-1);break}case 34:case 39:case 91:s+=Ee(m);break;case 9:case 10:case 13:case 32:s+=wr(x);break;case 92:s+=Sr(ge()-1,7);continue;case 47:switch(G()){case 42:case 47:ae(Ir(kr(O(),ge()),t,r,l),l);break;default:s+="/"}break;case 123*w:c[d++]=j(s)*A;case 125*w:case 59:case 0:switch(m){case 0:case 125:E=0;case 59+f:A==-1&&(s=u(s,/\f/g,"")),p>0&&j(s)-h&&ae(p>32?yt(s+";",n,r,h-1,l):yt(u(s," ","")+";",n,r,h-2,l),l);break;case 59:s+=";";default:if(ae(T=gt(s,t,r,d,f,a,c,v,I=[],_=[],h,o),o),m===123)if(f===0)ye(s,t,T,T,I,o,h,c,_);else switch(y===99&&N(s,3)===110?100:y){case 100:case 108:case 109:case 115:ye(e,T,T,n&&ae(gt(e,T,T,0,0,a,c,v,a,I=[],h,_),_),a,_,h,c,n?I:_);break;default:ye(s,T,T,T,[""],_,0,c,_)}}d=f=p=0,w=A=1,v=s="",h=i;break;case 58:h=1+j(s),p=x;default:if(w<1){if(m==123)--w;else if(m==125&&w++==0&&xr()==125)continue}switch(s+=dt(m),m*w){case 38:A=f>0?1:(s+="\f",-1);break;case 44:c[d++]=(j(s)-1)*A,A=1;break;case 64:G()===45&&(s+=Ee(O())),y=G(),f=h=j(v=s+=Ar(ge())),m++;break;case 45:x===45&&j(s)==2&&(w=0)}}return o}function gt(e,t,r,n,a,o,i,c,l,d,f,h){for(var y=a-1,p=a===0?o:[""],x=qt(p),w=0,E=0,A=0;w<n;++w)for(var m=0,v=K(e,y+1,y=hr(E=i[w])),I=e;m<x;++m)(I=jt(E>0?p[m]+" "+v:u(v,/&\f/g,p[m])))&&(l[A++]=I);return Te(e,t,r,a===0?ke:c,l,d,f,h)}function Ir(e,t,r,n){return Te(e,t,r,Lt,dt(br()),K(e,2,-2),0,n)}function yt(e,t,r,n,a){return Te(e,t,r,lt,K(e,0,n),K(e,n+1,-1),n,a)}function zt(e,t,r){switch(gr(e,t)){case 5103:return g+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return g+e+e;case 4789:return oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return g+e+oe+e+k+e+e;case 5936:switch(N(e,t+11)){case 114:return g+e+k+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return g+e+k+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return g+e+k+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return g+e+k+e+e;case 6165:return g+e+k+"flex-"+e+e;case 5187:return g+e+u(e,/(\w+).+(:[^]+)/,g+"box-$1$2"+k+"flex-$1$2")+e;case 5443:return g+e+k+"flex-item-"+u(e,/flex-|-self/g,"")+(q(e,/flex-|baseline/)?"":k+"grid-row-"+u(e,/flex-|-self/g,""))+e;case 4675:return g+e+k+"flex-line-pack"+u(e,/align-content|flex-|-self/g,"")+e;case 5548:return g+e+k+u(e,"shrink","negative")+e;case 5292:return g+e+k+u(e,"basis","preferred-size")+e;case 6060:return g+"box-"+u(e,"-grow","")+g+e+k+u(e,"grow","positive")+e;case 4554:return g+u(e,/([^-])(transform)/g,"$1"+g+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,g+"$1"),/(image-set)/,g+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,g+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,g+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+g+e+e;case 4200:if(!q(e,/flex-|baseline/))return k+"grid-column-align"+K(e,t)+e;break;case 2592:case 3360:return k+u(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,a){return t=a,q(n.props,/grid-\w+-end/)})?~he(e+(r=r[t].value),"span")?e:k+u(e,"-start","")+e+k+"grid-row-span:"+(~he(r,"span")?q(r,/\d+/):+q(r,/\d+/)-+q(e,/\d+/))+";":k+u(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return q(n.props,/grid-\w+-start/)})?e:k+u(u(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,g+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(j(e)-1-t>6)switch(N(e,t+1)){case 109:if(N(e,t+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+g+"$2-$3$1"+oe+(N(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~he(e,"stretch")?zt(u(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return u(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,a,o,i,c,l,d){return k+a+":"+o+d+(i?k+a+"-span:"+(c?l:+l-+o)+d:"")+e});case 4949:if(N(e,t+6)===121)return u(e,":",":"+g)+e;break;case 6444:switch(N(e,N(e,14)===45?18:11)){case 120:return u(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+g+(N(e,14)===45?"inline-":"")+"box$3$1"+g+"$2$3$1"+k+"$2box$3")+e;case 100:return u(e,":",":"+k)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return u(e,"scroll-","scroll-snap-")+e}return e}function ve(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Cr(e,t,r,n){switch(e.type){case mr:if(e.children.length)break;case fr:case lt:return e.return=e.return||e.value;case Lt:return"";case Ot:return e.return=e.value+"{"+ve(e.children,n)+"}";case ke:if(!j(e.value=e.props.join(",")))return""}return j(r=ve(e.children,n))?e.return=e.value+"{"+r+"}":""}function Rr(e){var t=qt(e);return function(r,n,a,o){for(var i="",c=0;c<t;c++)i+=e[c](r,n,a,o)||"";return i}}function Dr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Nr(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case lt:e.return=zt(e.value,e.length,r);return;case Ot:return ve([$(e,{value:u(e.value,"@","@"+g)})],n);case ke:if(e.length)return yr(r=e.props,function(a){switch(q(a,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Y($(e,{props:[u(a,/:(read-\w+)/,":"+oe+"$1")]})),Y($(e,{props:[a]})),Ve(e,{props:ht(r,n)});break;case"::placeholder":Y($(e,{props:[u(a,/:(plac\w+)/,":"+g+"input-$1")]})),Y($(e,{props:[u(a,/:(plac\w+)/,":"+oe+"$1")]})),Y($(e,{props:[u(a,/:(plac\w+)/,k+"input-$1")]})),Y($(e,{props:[a]})),Ve(e,{props:ht(r,n)});break}return""})}}var Er={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},J=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ut=typeof window<"u"&&"HTMLElement"in window,Pr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Ce=Object.freeze([]),Z=Object.freeze({});function Lr(e,t,r){return r===void 0&&(r=Z),e.theme!==r.theme&&e.theme||t||r.theme}var Ft=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Or=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jr=/(^-|-$)/g;function bt(e){return e.replace(Or,"-").replace(jr,"")}var qr=/(a)(d)/gi,xt=function(e){return String.fromCharCode(e+(e>25?39:97))};function $e(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=xt(t%52)+r;return(xt(t%52)+r).replace(qr,"$1-$2")}var Pe,H=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},$t=function(e){return H(5381,e)};function Vr(e){return $e($t(e)>>>0)}function zr(e){return e.displayName||e.name||"Component"}function Le(e){return typeof e=="string"&&!0}var Mt=typeof Symbol=="function"&&Symbol.for,Wt=Mt?Symbol.for("react.memo"):60115,Fr=Mt?Symbol.for("react.forward_ref"):60112,$r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Mr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wr=((Pe={})[Fr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pe[Wt]=Bt,Pe);function vt(e){return("type"in(t=e)&&t.type.$$typeof)===Wt?Bt:"$$typeof"in e?Wr[e.$$typeof]:$r;var t}var Br=Object.defineProperty,Gr=Object.getOwnPropertyNames,_t=Object.getOwnPropertySymbols,Ur=Object.getOwnPropertyDescriptor,Yr=Object.getPrototypeOf,wt=Object.prototype;function Gt(e,t,r){if(typeof t!="string"){if(wt){var n=Yr(t);n&&n!==wt&&Gt(e,n,r)}var a=Gr(t);_t&&(a=a.concat(_t(t)));for(var o=vt(e),i=vt(t),c=0;c<a.length;++c){var l=a[c];if(!(l in Mr||r&&r[l]||i&&l in i||o&&l in o)){var d=Ur(t,l);try{Br(e,l,d)}catch{}}}}return e}function Q(e){return typeof e=="function"}function pt(e){return typeof e=="object"&&"styledComponentId"in e}function B(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function St(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function se(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Me(e,t,r){if(r===void 0&&(r=!1),!r&&!se(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Me(e[n],t[n]);else if(se(t))for(var n in t)e[n]=Me(e[n],t[n]);return e}function ft(e,t){Object.defineProperty(e,"toString",{value:t})}function ce(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Hr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,a=n.length,o=a;t>=o;)if((o<<=1)<0)throw ce(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=a;i<o;i++)this.groupSizes[i]=0}for(var c=this.indexOfGroup(t+1),l=(i=0,r.length);i<l;i++)this.tag.insertRule(c,r[i])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),a=n+r;this.groupSizes[t]=0;for(var o=n;o<a;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],a=this.indexOfGroup(t),o=a+n,i=a;i<o;i++)r+="".concat(this.tag.getRule(i)).concat(`/*!sc*/
`);return r},e}(),be=new Map,_e=new Map,Oe=1,fe=function(e){if(be.has(e))return be.get(e);for(;_e.has(Oe);)Oe++;var t=Oe++;return be.set(e,t),_e.set(t,e),t},Kr=function(e,t){be.set(e,t),_e.set(t,e)},Xr="style[".concat(J,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),Jr=new RegExp("^".concat(J,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zr=function(e,t,r){for(var n,a=r.split(","),o=0,i=a.length;o<i;o++)(n=a[o])&&e.registerName(t,n)},Qr=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),a=[],o=0,i=n.length;o<i;o++){var c=n[o].trim();if(c){var l=c.match(Jr);if(l){var d=0|parseInt(l[1],10),f=l[2];d!==0&&(Kr(f,d),Zr(e,f,l[3]),e.getTag().insertRules(d,a)),a.length=0}else a.push(c)}}};function en(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ut=function(e){var t=document.head,r=e||t,n=document.createElement("style"),a=function(c){var l=Array.from(c.querySelectorAll("style[".concat(J,"]")));return l[l.length-1]}(r),o=a!==void 0?a.nextSibling:null;n.setAttribute(J,"active"),n.setAttribute("data-styled-version","6.0.7");var i=en();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},tn=function(){function e(t){this.element=Ut(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,a=0,o=n.length;a<o;a++){var i=n[a];if(i.ownerNode===r)return i}throw ce(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),rn=function(){function e(t){this.element=Ut(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),nn=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),kt=ut,an={isServer:!ut,useCSSOMInjection:!Pr},Yt=function(){function e(t,r,n){t===void 0&&(t=Z),r===void 0&&(r={});var a=this;this.options=P(P({},an),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&ut&&kt&&(kt=!1,function(o){for(var i=document.querySelectorAll(Xr),c=0,l=i.length;c<l;c++){var d=i[c];d&&d.getAttribute(J)!=="active"&&(Qr(o,d),d.parentNode&&d.parentNode.removeChild(d))}}(this)),ft(this,function(){return function(o){for(var i=o.getTag(),c=i.length,l="",d=function(h){var y=function(A){return _e.get(A)}(h);if(y===void 0)return"continue";var p=o.names.get(y),x=i.getGroup(h);if(p===void 0||x.length===0)return"continue";var w="".concat(J,".g").concat(h,'[id="').concat(y,'"]'),E="";p!==void 0&&p.forEach(function(A){A.length>0&&(E+="".concat(A,","))}),l+="".concat(x).concat(w,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},f=0;f<c;f++)d(f);return l}(a)})}return e.registerId=function(t){return fe(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(P(P({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,a=r.target;return r.isServer?new nn(a):n?new tn(a):new rn(a)}(this.options),new Hr(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(fe(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(fe(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(fe(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),on=/&/g,sn=/^\s*\/\/.*$/gm;function Ht(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Ht(r.children,t)),r})}function cn(e){var t,r,n,a=e===void 0?Z:e,o=a.options,i=o===void 0?Z:o,c=a.plugins,l=c===void 0?Ce:c,d=function(y,p,x){return x===r||x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?".".concat(t):y},f=l.slice();f.push(function(y){y.type===ke&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(on,r).replace(n,d))}),i.prefix&&f.push(Nr),f.push(Cr);var h=function(y,p,x,w){p===void 0&&(p=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var E=y.replace(sn,""),A=Tr(x||p?"".concat(x," ").concat(p," { ").concat(E," }"):E);i.namespace&&(A=Ht(A,i.namespace));var m=[];return ve(A,Rr(f.concat(Dr(function(v){return m.push(v)})))),m};return h.hash=l.length?l.reduce(function(y,p){return p.name||ce(15),H(y,p.name)},5381).toString():"",h}var ln=new Yt,We=cn(),Kt=ie.createContext({shouldForwardProp:void 0,styleSheet:ln,stylis:We});Kt.Consumer;ie.createContext(void 0);function At(){return R.useContext(Kt)}var dn=function(){function e(t,r){var n=this;this.inject=function(a,o){o===void 0&&(o=We);var i=n.name+o.hash;a.hasNameForId(n.id,i)||a.insertRules(n.id,i,o(n.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,ft(this,function(){throw ce(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=We),this.name+t.hash},e}(),un=function(e){return e>="A"&&e<="Z"};function Tt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;un(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Xt=function(e){return e==null||e===!1||e===""},Jt=function(e){var t,r,n=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Xt(o)&&(Array.isArray(o)&&o.isCss||Q(o)?n.push("".concat(Tt(a),":"),o,";"):se(o)?n.push.apply(n,xe(xe(["".concat(a," {")],Jt(o),!1),["}"],!1)):n.push("".concat(Tt(a),": ").concat((t=a,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Er||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function U(e,t,r,n){if(Xt(e))return[];if(pt(e))return[".".concat(e.styledComponentId)];if(Q(e)){if(!Q(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var a=e(t);return U(a,t,r,n)}var o;return e instanceof dn?r?(e.inject(r,n),[e.getName(n)]):[e]:se(e)?Jt(e):Array.isArray(e)?Array.prototype.concat.apply(Ce,e.map(function(i){return U(i,t,r,n)})):[e.toString()]}function pn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Q(r)&&!pt(r))return!1}return!0}var fn=$t("6.0.7"),mn=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&pn(t),this.componentId=r,this.baseHash=H(fn,r),this.baseStyle=n,Yt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))a=B(a,this.staticRulesId);else{var o=St(U(this.rules,t,r,n)),i=$e(H(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,i)){var c=n(o,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,c)}a=B(a,i),this.staticRulesId=i}else{for(var l=H(this.baseHash,n.hash),d="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")d+=h;else if(h){var y=St(U(h,t,r,n));l=H(l,y),d+=y}}if(d){var p=$e(l>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(d,".".concat(p),void 0,this.componentId)),a=B(a,p)}}return a},e}(),Zt=ie.createContext(void 0);Zt.Consumer;var je={};function hn(e,t,r){var n=pt(e),a=e,o=!Le(e),i=t.attrs,c=i===void 0?Ce:i,l=t.componentId,d=l===void 0?function(v,I){var _=typeof v!="string"?"sc":bt(v);je[_]=(je[_]||0)+1;var T="".concat(_,"-").concat(Vr("6.0.7"+_+je[_]));return I?"".concat(I,"-").concat(T):T}(t.displayName,t.parentComponentId):l,f=t.displayName;f===void 0&&function(v){return Le(v)?"styled.".concat(v):"Styled(".concat(zr(v),")")}(e);var h=t.displayName&&t.componentId?"".concat(bt(t.displayName),"-").concat(t.componentId):t.componentId||d,y=n&&a.attrs?a.attrs.concat(c).filter(Boolean):c,p=t.shouldForwardProp;if(n&&a.shouldForwardProp){var x=a.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;p=function(v,I){return x(v,I)&&w(v,I)}}else p=x}var E=new mn(r,h,n?a.componentStyle:void 0);function A(v,I){return function(_,T,s){var S=_.attrs,M=_.componentStyle,er=_.defaultProps,tr=_.foldedComponentIds,rr=_.styledComponentId,nr=_.target,ar=ie.useContext(Zt),or=At(),Re=_.shouldForwardProp||or.shouldForwardProp,V=function(de,re,ue){for(var ne,W=P(P({},re),{className:void 0,theme:ue}),Ne=0;Ne<de.length;Ne+=1){var pe=Q(ne=de[Ne])?ne(W):ne;for(var F in pe)W[F]=F==="className"?B(W[F],pe[F]):F==="style"?P(P({},W[F]),pe[F]):pe[F]}return re.className&&(W.className=B(W.className,re.className)),W}(S,T,Lr(T,ar,er)||Z),le=V.as||nr,te={};for(var z in V)V[z]===void 0||z[0]==="$"||z==="as"||z==="theme"||(z==="forwardedAs"?te.as=V.forwardedAs:Re&&!Re(z,le)||(te[z]=V[z]));var mt=function(de,re){var ue=At(),ne=de.generateAndInjectStyles(re,ue.styleSheet,ue.stylis);return ne}(M,V),De=B(tr,rr);return mt&&(De+=" "+mt),V.className&&(De+=" "+V.className),te[Le(le)&&!Ft.has(le)?"class":"className"]=De,te.ref=s,R.createElement(le,te)}(m,v,I)}var m=ie.forwardRef(A);return m.attrs=y,m.componentStyle=E,m.shouldForwardProp=p,m.foldedComponentIds=n?B(a.foldedComponentIds,a.styledComponentId):"",m.styledComponentId=h,m.target=n?a.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=n?function(I){for(var _=[],T=1;T<arguments.length;T++)_[T-1]=arguments[T];for(var s=0,S=_;s<S.length;s++)Me(I,S[s],!0);return I}({},a.defaultProps,v):v}}),ft(m,function(){return".".concat(m.styledComponentId)}),o&&Gt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function It(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r}var Ct=function(e){return Object.assign(e,{isCss:!0})};function gn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Q(e)||se(e)){var n=e;return Ct(U(It(Ce,xe([n],t,!0))))}var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?U(a):Ct(U(It(a,t)))}function Be(e,t,r){if(r===void 0&&(r=Z),!t)throw ce(1,t);var n=function(a){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,r,gn.apply(void 0,xe([a],o,!1)))};return n.attrs=function(a){return Be(e,t,P(P({},r),{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},n.withConfig=function(a){return Be(e,t,P(P({},r),a))},n}var Qt=function(e){return Be(hn,e)},D=Qt;Ft.forEach(function(e){D[e]=Qt(e)});const Ge=D.div`
  min-width: min(0% + 600px, 33% + 0px);
  order: 1;
  width: auto !important;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  display: flex;
  box-sizing: border-box;
`,Ue=D.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
`,Ye=D.div`
  background-color: rgb(255, 255, 255);
  color: rgb(55, 65, 81);
  padding-top: 4px;
  padding-bottom: 4px;
  align-items: center;
  display: flex;
  position: relative;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0px;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  appearance: none;
  border: 1px solid rgb(188, 207, 211);
  border-radius: 4px 4px 4px 4px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  box-sizing: border-box;
`,He=D.i`
  margin-right: 8px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 14px;
  -webkit-font-smoothing: antialiased;
`,Ke=D.div`
  gap: 4px;
  flex-wrap: wrap;
  flex-grow: 1;
  display: flex;
  box-sizing: border-box;
`,Xe=D.div`
  animation: 0.25s ease-out 0s 1 normal none running animate;
  white-space: nowrap;
  align-items: stretch;
  position: relative;
  display: flex;
  box-sizing: border-box;
`,Je=D.div`
  color: rgb(255, 255, 255);
  background-color: rgb(113, 75, 103);
  border-color: rgb(113, 75, 103);
  border-top-left-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0px;
  padding: 0px;
  display: block;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  border: 1px solid rgb(113, 75, 103);
  font-size: 14px;
  border-radius: 4px 0px 0px 4px;
  transition: none 0s ease 0s;
  position: relative;
  box-sizing: border-box;
`,Ze=D.div`
  padding-right: 8px;
  padding-left: 8px;
  font-size: 13px;
  box-sizing: border-box;
`,Qe=D.div`
  --background-color: RGBA(231, 233, 237, 1);
  background-color: rgb(231, 233, 237);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-left: 8px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
`,et=D.small`
  font-size: 13px;
  box-sizing: border-box;
`,tt=D.button`
  --color: RGBA(17, 24, 39, 1);
  color: rgb(17, 24, 39);
  font-weight: 500;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 8px;
  padding-left: 8px;
  opacity: 0.5;
  text-decoration: none solid rgb(17, 24, 39);
  display: block;
  line-height: 21px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 0px 8px;
  font-size: 14px;
  border-radius: 4px;
  transition: none 0s ease 0s;
  position: relative;
  appearance: button;
  text-transform: none;
  margin: 0px;
  font-family: odoo_ui_icons;
  box-sizing: border-box;
  font-style: normal;
  font-variant: normal;
  -webkit-font-smoothing: antialiased;
  &:after {
    content: '\\00d7';
    font-weight: bold;
    font-family: sans-serif;
  }
`,rt=D.input`
  display: block;
  outline: rgb(55, 65, 81) none 0px;
  appearance: none;
  color: rgb(55, 65, 81);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  flex-grow: 1;
  border: 0px none rgb(55, 65, 81);
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu,
    "Noto Sans", Arial, "Odoo Unicode Support Noto", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 14px;
  line-height: 21px;
  box-sizing: border-box;
`,nt=D.ul`
  max-height: 307.3px;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 50px 0px;
  position: absolute;
  inset: calc(100% + 3px) 0px auto auto;
  width: 100%;
  display: block;
  z-index: 100;
  min-width: 160px;
  padding: 8px 0px;
  margin: 0px;
  font-size: 14px;
  color: rgb(55, 65, 81);
  text-align: left;
  list-style: outside none none;
  background-color: rgb(255, 255, 255);
  -webkit-background-clip: border-box;
  background-clip: border-box;
  border: 0px solid rgb(216, 218, 221);
  border-radius: 4px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  box-sizing: border-box;
`,at=D.div`
  cursor: pointer;
  align-items: center;
  display: flex;
  padding-left: 25px;
  width: 100%;
  padding: 3px 20px 3px 25px;
  clear: both;
  font-weight: 400;
  color: rgb(55, 65, 81);
  text-align: left;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0);
  border: 0px none rgb(55, 65, 81);
  box-sizing: border-box;
`,ot=D.span`
  color: rgb(55, 65, 81);
  text-decoration: none solid rgb(55, 65, 81);
  box-sizing: border-box;
`,it=D.b`
  font-weight: 500;
  box-sizing: border-box;
`,st=D.b`
  font-weight: 500;
  --color: RGBA(113, 75, 103, 1);
  color: rgb(113, 75, 103);
  font-style: italic;
  box-sizing: border-box;
`,ct=D.li`
  &.focus {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;try{Ge.displayName="MainDiv",Ge.__docgenInfo={description:"",displayName:"MainDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Ue.displayName="SearchDiv",Ue.__docgenInfo={description:"",displayName:"SearchDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Ye.displayName="SearchListDiv",Ye.__docgenInfo={description:"",displayName:"SearchListDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{He.displayName="SearchIcon",He.__docgenInfo={description:"",displayName:"SearchIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Ke.displayName="SearchInputDiv",Ke.__docgenInfo={description:"",displayName:"SearchInputDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Xe.displayName="FiltersListItem",Xe.__docgenInfo={description:"",displayName:"FiltersListItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Je.displayName="ButtonLabel",Je.__docgenInfo={description:"",displayName:"ButtonLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Ze.displayName="ButtonLabelSmall",Ze.__docgenInfo={description:"",displayName:"ButtonLabelSmall",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Qe.displayName="DeleteDiv",Qe.__docgenInfo={description:"",displayName:"DeleteDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{et.displayName="DeleteSmall",et.__docgenInfo={description:"",displayName:"DeleteSmall",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{tt.displayName="DeleteButton",tt.__docgenInfo={description:"",displayName:"DeleteButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{rt.displayName="Input",rt.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{nt.displayName="MenuSearch",nt.__docgenInfo={description:"",displayName:"MenuSearch",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{at.displayName="LineLabelDiv",at.__docgenInfo={description:"",displayName:"LineLabelDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{ot.displayName="SpanSearchText",ot.__docgenInfo={description:"",displayName:"SpanSearchText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{it.displayName="StronLabel",it.__docgenInfo={description:"",displayName:"StronLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{st.displayName="StrongLabelText",st.__docgenInfo={description:"",displayName:"StrongLabelText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{ct.displayName="LineLabel",ct.__docgenInfo={description:"",displayName:"LineLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const we=R.forwardRef((e,t)=>{const{filterLabels:r,filters:n,setFilters:a}=e,o=R.useRef(null),i=R.useRef([]),[c,l]=R.useState(""),[d,f]=R.useState(0),[h,y]=R.useState(null),[p,x]=R.useState(!0),[w,E]=R.useState([]);R.useEffect(()=>{r&&E(r)},[r]),R.useEffect(()=>{h===null||!p||f(h)},[h,p]);const A=()=>{if(c==="")return;const s=w[d];n.find(M=>M.text===c&&M.label===s.label)||a([...n,{text:c,label:s.label,filter:s.filter}]),l(""),f(0),o.current&&o.current.focus()},m=s=>{const S=[...n];S.splice(s,1),a(S)};R.useEffect(()=>{if(p)return;const s=()=>{x(!0)};return document.addEventListener("mousemove",s),()=>{document.removeEventListener("mousemove",s)}},[p]);const v=s=>{if(s.key==="ArrowDown"){s.preventDefault(),x(!1);const S=d===w.length-1?0:d+1;f(S),i.current[S]&&i.current[S].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}else if(s.key==="ArrowUp"){s.preventDefault(),x(!1);const S=d===0?w.length-1:d-1;f(S),i.current[S]&&i.current[S].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}else s.key==="Enter"?A():s.key==="Backspace"?c===""&&m(n.length-1):s.key==="Escape"&&(l(""),f(0))},I=s=>{y(s)},_=()=>{y(null)},T=s=>{s.relatedTarget!==null&&i.current&&i.current.includes(s.relatedTarget)||(l(""),f(0))};return R.useImperativeHandle(t,()=>({inputRef:o.current})),b.jsx(b.Fragment,{children:b.jsx(Ge,{children:b.jsx(Ue,{role:"search",children:b.jsxs(Ye,{role:"search","aria-autocomplete":"list",children:[b.jsx(He,{role:"img","aria-label":"Search...",title:"Search...",children:b.jsx(qe,{})}),b.jsxs(Ke,{children:[n.map((s,S)=>b.jsxs(Xe,{role:"listitem","aria-label":"search",children:[b.jsx(Je,{role:"button",children:b.jsx(Ze,{children:s.label})}),b.jsxs(Qe,{children:[b.jsx(et,{children:s.text}),b.jsx(tt,{role:"button","aria-label":"Remove",title:"Remove",onClick:()=>m(S)})]})]},S)),b.jsx(rt,{type:"text",value:c,role:"searchbox",placeholder:"Search...",onChange:s=>l(s.target.value),onKeyDown:v,onBlur:T,ref:o}),c!==""&&b.jsx(nt,{role:"menu",children:w.map((s,S)=>b.jsx(ct,{className:`${S===d||S===h?"focus":""}`,onMouseOver:()=>I(S),onMouseOut:()=>_(),onClick:A,tabIndex:0,ref:M=>{M&&(i.current[S]=M)},children:b.jsx(at,{children:b.jsxs(ot,{children:[" Search ",b.jsx(it,{children:s.label})," for: ",b.jsx(st,{children:c})]})})},S))})]})]})})})})});try{we.displayName="InputSearch",we.__docgenInfo={description:"",displayName:"InputSearch",props:{filterLabels:{defaultValue:null,description:"",name:"filterLabels",required:!0,type:{name:"FilterLabel[]"}},filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"Filters[]"}},setFilters:{defaultValue:null,description:"",name:"setFilters",required:!0,type:{name:"Dispatch<Filters[]>"}}}}}catch{}const{useArgs:yn}=__STORYBOOK_MODULE_CLIENT_API__,_n={component:we},me={args:{filterLabels:pr,filters:[],setFilters:()=>{}},render:e=>{const{filterLabels:t}=e,[r,n]=yn(),[a,o]=R.useState([]),i=R.useRef(null);return R.useEffect(()=>{n({filters:a})},[a]),R.useEffect(()=>{const c=setTimeout(()=>{var l;i.current&&((l=i.current.inputRef)==null||l.focus())},1e3);return()=>clearTimeout(c)},[]),b.jsxs(b.Fragment,{children:[b.jsx("div",{style:{marginBottom:"30px"},children:b.jsx(we,{filters:r.filters,setFilters:o,filterLabels:t,ref:i})}),"Filters:",b.jsx("div",{children:r.filters.map((c,l)=>b.jsx("div",{children:JSON.stringify(c)},l))})]})}};var Rt,Dt,Nt;me.parameters={...me.parameters,docs:{...(Rt=me.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  args: {
    filterLabels: initialFilterLabels,
    filters: [],
    setFilters: () => {}
  },
  render: props => {
    const {
      filterLabels
    } = props;
    const [storyArgs, updateStoryArgs] = useArgs();
    const [filters, setFilters] = useState<Array<Filters>>([]);
    const ref = useRef<InputSearchPropsRef>(null);
    useEffect(() => {
      updateStoryArgs({
        filters
      });
    }, [filters]);
    useEffect(() => {
      const timeout = setTimeout(() => {
        if (ref.current) {
          ref.current.inputRef?.focus();
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }, []);
    return <>
        <div style={{
        marginBottom: '30px'
      }}>

          <InputSearch filters={storyArgs.filters} setFilters={setFilters} filterLabels={filterLabels} ref={ref} />
        </div>

        Filters:
        <div>
          {storyArgs.filters.map((p, pIndex) => <div key={pIndex}>{JSON.stringify(p)}</div>)}
        </div>



      </>;
  }
}`,...(Nt=(Dt=me.parameters)==null?void 0:Dt.docs)==null?void 0:Nt.source}}};const wn=["Primary"];export{me as Primary,wn as __namedExportsOrder,_n as default};
//# sourceMappingURL=InputSearch.stories-55de58be.js.map
