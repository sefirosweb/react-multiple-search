import{r as R,R as ie}from"./index-61bf1805.js";import{_ as P,a as ve}from"./tslib.es6-17d83084.js";import"./_commonjsHelpers-de833af9.js";var Et={exports:{}},ke={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=R,cr=Symbol.for("react.element"),lr=Symbol.for("react.fragment"),dr=Object.prototype.hasOwnProperty,ur=sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pr={key:!0,ref:!0,__self:!0,__source:!0};function Pt(e,t,r){var n,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)dr.call(t,n)&&!pr.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:cr,type:e,key:o,ref:i,props:a,_owner:ur.current}}ke.Fragment=lr;ke.jsx=Pt;ke.jsxs=Pt;Et.exports=ke;var b=Et.exports;const fr=[{label:"All",filter:"all"},{label:"Name",filter:"name"},{label:"Email",filter:"email"},{label:"Phone",filter:"phone"},{label:"Address",filter:"address"},{label:"Company",filter:"company"},{label:"Job Title",filter:"job_title"},{label:"Department",filter:"department"},{label:"Skills",filter:"skills"},{label:"University",filter:"university"},{label:"Degree",filter:"degree"},{label:"Major",filter:"major"},{label:"Graduation Year",filter:"graduation_year"},{label:"GPA",filter:"gpa"}],qe=()=>b.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"})});try{qe.displayName="AiOutlineSearch",qe.__docgenInfo={description:"",displayName:"AiOutlineSearch",props:{}}}catch{}var k="-ms-",oe="-moz-",g="-webkit-",Lt="comm",Ae="rule",lt="decl",mr="@import",Ot="@keyframes",hr="@layer",gr=Math.abs,dt=String.fromCharCode,Ve=Object.assign;function yr(e,t){return D(e,0)^45?(((t<<2^D(e,0))<<2^D(e,1))<<2^D(e,2))<<2^D(e,3):0}function jt(e){return e.trim()}function V(e,t){return(e=t.exec(e))?e[0]:e}function u(e,t,r){return e.replace(t,r)}function he(e,t){return e.indexOf(t)}function D(e,t){return e.charCodeAt(t)|0}function K(e,t,r){return e.slice(t,r)}function q(e){return e.length}function qt(e){return e.length}function ae(e,t){return t.push(e),e}function br(e,t){return e.map(t).join("")}function ht(e,t){return e.filter(function(r){return!V(r,t)})}var Te=1,X=1,Vt=0,L=0,C=0,ee="";function Ie(e,t,r,n,a,o,i,c){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:Te,column:X,length:i,return:"",siblings:c}}function M(e,t){return Ve(Ie("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Y(e){for(;e.root;)e=M(e.root,{children:[e]});ae(e,e.siblings)}function xr(){return C}function vr(){return C=L>0?D(ee,--L):0,X--,C===10&&(X=1,Te--),C}function O(){return C=L<Vt?D(ee,L++):0,X++,C===10&&(X=1,Te++),C}function G(){return D(ee,L)}function ge(){return L}function Ce(e,t){return K(ee,e,t)}function ze(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _r(e){return Te=X=1,Vt=q(ee=e),L=0,[]}function wr(e){return ee="",e}function Pe(e){return jt(Ce(L-1,$e(e===91?e+2:e===40?e+1:e)))}function Sr(e){for(;(C=G())&&C<33;)O();return ze(e)>2||ze(C)>3?"":" "}function kr(e,t){for(;--t&&O()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return Ce(e,ge()+(t<6&&G()==32&&O()==32))}function $e(e){for(;O();)switch(C){case e:return L;case 34:case 39:e!==34&&e!==39&&$e(C);break;case 40:e===41&&$e(e);break;case 92:O();break}return L}function Ar(e,t){for(;O()&&e+C!==47+10;)if(e+C===42+42&&G()===47)break;return"/*"+Ce(t,L-1)+"*"+dt(e===47?e:O())}function Tr(e){for(;!ze(G());)O();return Ce(e,L)}function Ir(e){return wr(ye("",null,null,null,[""],e=_r(e),0,[0],e))}function ye(e,t,r,n,a,o,i,c,l){for(var d=0,p=0,m=i,h=0,f=0,x=0,v=1,E=1,T=1,S=0,_="",A=a,I=o,y=n,s=_;E;)switch(x=S,S=O()){case 40:if(x!=108&&D(s,m-1)==58){he(s+=u(Pe(S),"&","&\f"),"&\f")!=-1&&(T=-1);break}case 34:case 39:case 91:s+=Pe(S);break;case 9:case 10:case 13:case 32:s+=Sr(x);break;case 92:s+=kr(ge()-1,7);continue;case 47:switch(G()){case 42:case 47:ae(Cr(Ar(O(),ge()),t,r,l),l);break;default:s+="/"}break;case 123*v:c[d++]=q(s)*T;case 125*v:case 59:case 0:switch(S){case 0:case 125:E=0;case 59+p:T==-1&&(s=u(s,/\f/g,"")),f>0&&q(s)-m&&ae(f>32?yt(s+";",n,r,m-1,l):yt(u(s," ","")+";",n,r,m-2,l),l);break;case 59:s+=";";default:if(ae(y=gt(s,t,r,d,p,a,c,_,A=[],I=[],m,o),o),S===123)if(p===0)ye(s,t,y,y,A,o,m,c,I);else switch(h===99&&D(s,3)===110?100:h){case 100:case 108:case 109:case 115:ye(e,y,y,n&&ae(gt(e,y,y,0,0,a,c,_,a,A=[],m,I),I),a,I,m,c,n?A:I);break;default:ye(s,y,y,y,[""],I,0,c,I)}}d=p=f=0,v=T=1,_=s="",m=i;break;case 58:m=1+q(s),f=x;default:if(v<1){if(S==123)--v;else if(S==125&&v++==0&&vr()==125)continue}switch(s+=dt(S),S*v){case 38:T=p>0?1:(s+="\f",-1);break;case 44:c[d++]=(q(s)-1)*T,T=1;break;case 64:G()===45&&(s+=Pe(O())),h=G(),p=m=q(_=s+=Tr(ge())),S++;break;case 45:x===45&&q(s)==2&&(v=0)}}return o}function gt(e,t,r,n,a,o,i,c,l,d,p,m){for(var h=a-1,f=a===0?o:[""],x=qt(f),v=0,E=0,T=0;v<n;++v)for(var S=0,_=K(e,h+1,h=gr(E=i[v])),A=e;S<x;++S)(A=jt(E>0?f[S]+" "+_:u(_,/&\f/g,f[S])))&&(l[T++]=A);return Ie(e,t,r,a===0?Ae:c,l,d,p,m)}function Cr(e,t,r,n){return Ie(e,t,r,Lt,dt(xr()),K(e,2,-2),0,n)}function yt(e,t,r,n,a){return Ie(e,t,r,lt,K(e,0,n),K(e,n+1,-1),n,a)}function zt(e,t,r){switch(yr(e,t)){case 5103:return g+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return g+e+e;case 4789:return oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return g+e+oe+e+k+e+e;case 5936:switch(D(e,t+11)){case 114:return g+e+k+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return g+e+k+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return g+e+k+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return g+e+k+e+e;case 6165:return g+e+k+"flex-"+e+e;case 5187:return g+e+u(e,/(\w+).+(:[^]+)/,g+"box-$1$2"+k+"flex-$1$2")+e;case 5443:return g+e+k+"flex-item-"+u(e,/flex-|-self/g,"")+(V(e,/flex-|baseline/)?"":k+"grid-row-"+u(e,/flex-|-self/g,""))+e;case 4675:return g+e+k+"flex-line-pack"+u(e,/align-content|flex-|-self/g,"")+e;case 5548:return g+e+k+u(e,"shrink","negative")+e;case 5292:return g+e+k+u(e,"basis","preferred-size")+e;case 6060:return g+"box-"+u(e,"-grow","")+g+e+k+u(e,"grow","positive")+e;case 4554:return g+u(e,/([^-])(transform)/g,"$1"+g+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,g+"$1"),/(image-set)/,g+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,g+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,g+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+g+e+e;case 4200:if(!V(e,/flex-|baseline/))return k+"grid-column-align"+K(e,t)+e;break;case 2592:case 3360:return k+u(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,a){return t=a,V(n.props,/grid-\w+-end/)})?~he(e+(r=r[t].value),"span")?e:k+u(e,"-start","")+e+k+"grid-row-span:"+(~he(r,"span")?V(r,/\d+/):+V(r,/\d+/)-+V(e,/\d+/))+";":k+u(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return V(n.props,/grid-\w+-start/)})?e:k+u(u(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,g+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(q(e)-1-t>6)switch(D(e,t+1)){case 109:if(D(e,t+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+g+"$2-$3$1"+oe+(D(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~he(e,"stretch")?zt(u(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return u(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,a,o,i,c,l,d){return k+a+":"+o+d+(i?k+a+"-span:"+(c?l:+l-+o)+d:"")+e});case 4949:if(D(e,t+6)===121)return u(e,":",":"+g)+e;break;case 6444:switch(D(e,D(e,14)===45?18:11)){case 120:return u(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+g+(D(e,14)===45?"inline-":"")+"box$3$1"+g+"$2$3$1"+k+"$2box$3")+e;case 100:return u(e,":",":"+k)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return u(e,"scroll-","scroll-snap-")+e}return e}function _e(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Rr(e,t,r,n){switch(e.type){case hr:if(e.children.length)break;case mr:case lt:return e.return=e.return||e.value;case Lt:return"";case Ot:return e.return=e.value+"{"+_e(e.children,n)+"}";case Ae:if(!q(e.value=e.props.join(",")))return""}return q(r=_e(e.children,n))?e.return=e.value+"{"+r+"}":""}function Nr(e){var t=qt(e);return function(r,n,a,o){for(var i="",c=0;c<t;c++)i+=e[c](r,n,a,o)||"";return i}}function Dr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Er(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case lt:e.return=zt(e.value,e.length,r);return;case Ot:return _e([M(e,{value:u(e.value,"@","@"+g)})],n);case Ae:if(e.length)return br(r=e.props,function(a){switch(V(a,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Y(M(e,{props:[u(a,/:(read-\w+)/,":"+oe+"$1")]})),Y(M(e,{props:[a]})),Ve(e,{props:ht(r,n)});break;case"::placeholder":Y(M(e,{props:[u(a,/:(plac\w+)/,":"+g+"input-$1")]})),Y(M(e,{props:[u(a,/:(plac\w+)/,":"+oe+"$1")]})),Y(M(e,{props:[u(a,/:(plac\w+)/,k+"input-$1")]})),Y(M(e,{props:[a]})),Ve(e,{props:ht(r,n)});break}return""})}}var Pr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},J=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ut=typeof window<"u"&&"HTMLElement"in window,Lr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Re=Object.freeze([]),Z=Object.freeze({});function Or(e,t,r){return r===void 0&&(r=Z),e.theme!==r.theme&&e.theme||t||r.theme}var $t=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qr=/(^-|-$)/g;function bt(e){return e.replace(jr,"-").replace(qr,"")}var Vr=/(a)(d)/gi,xt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Fe(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=xt(t%52)+r;return(xt(t%52)+r).replace(Vr,"$1-$2")}var Le,H=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ft=function(e){return H(5381,e)};function zr(e){return Fe(Ft(e)>>>0)}function $r(e){return e.displayName||e.name||"Component"}function Oe(e){return typeof e=="string"&&!0}var Mt=typeof Symbol=="function"&&Symbol.for,Wt=Mt?Symbol.for("react.memo"):60115,Fr=Mt?Symbol.for("react.forward_ref"):60112,Mr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Wr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Br=((Le={})[Fr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Le[Wt]=Bt,Le);function vt(e){return("type"in(t=e)&&t.type.$$typeof)===Wt?Bt:"$$typeof"in e?Br[e.$$typeof]:Mr;var t}var Gr=Object.defineProperty,Ur=Object.getOwnPropertyNames,_t=Object.getOwnPropertySymbols,Yr=Object.getOwnPropertyDescriptor,Hr=Object.getPrototypeOf,wt=Object.prototype;function Gt(e,t,r){if(typeof t!="string"){if(wt){var n=Hr(t);n&&n!==wt&&Gt(e,n,r)}var a=Ur(t);_t&&(a=a.concat(_t(t)));for(var o=vt(e),i=vt(t),c=0;c<a.length;++c){var l=a[c];if(!(l in Wr||r&&r[l]||i&&l in i||o&&l in o)){var d=Yr(t,l);try{Gr(e,l,d)}catch{}}}}return e}function Q(e){return typeof e=="function"}function pt(e){return typeof e=="object"&&"styledComponentId"in e}function B(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function St(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function se(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Me(e,t,r){if(r===void 0&&(r=!1),!r&&!se(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Me(e[n],t[n]);else if(se(t))for(var n in t)e[n]=Me(e[n],t[n]);return e}function ft(e,t){Object.defineProperty(e,"toString",{value:t})}function ce(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Kr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,a=n.length,o=a;t>=o;)if((o<<=1)<0)throw ce(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=a;i<o;i++)this.groupSizes[i]=0}for(var c=this.indexOfGroup(t+1),l=(i=0,r.length);i<l;i++)this.tag.insertRule(c,r[i])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),a=n+r;this.groupSizes[t]=0;for(var o=n;o<a;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],a=this.indexOfGroup(t),o=a+n,i=a;i<o;i++)r+="".concat(this.tag.getRule(i)).concat(`/*!sc*/
`);return r},e}(),be=new Map,we=new Map,xe=1,fe=function(e){if(be.has(e))return be.get(e);for(;we.has(xe);)xe++;var t=xe++;return be.set(e,t),we.set(t,e),t},Xr=function(e,t){xe=t+1,be.set(e,t),we.set(t,e)},Jr="style[".concat(J,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),Zr=new RegExp("^".concat(J,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qr=function(e,t,r){for(var n,a=r.split(","),o=0,i=a.length;o<i;o++)(n=a[o])&&e.registerName(t,n)},en=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),a=[],o=0,i=n.length;o<i;o++){var c=n[o].trim();if(c){var l=c.match(Zr);if(l){var d=0|parseInt(l[1],10),p=l[2];d!==0&&(Xr(p,d),Qr(e,p,l[3]),e.getTag().insertRules(d,a)),a.length=0}else a.push(c)}}};function tn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ut=function(e){var t=document.head,r=e||t,n=document.createElement("style"),a=function(c){var l=Array.from(c.querySelectorAll("style[".concat(J,"]")));return l[l.length-1]}(r),o=a!==void 0?a.nextSibling:null;n.setAttribute(J,"active"),n.setAttribute("data-styled-version","6.1.1");var i=tn();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},rn=function(){function e(t){this.element=Ut(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,a=0,o=n.length;a<o;a++){var i=n[a];if(i.ownerNode===r)return i}throw ce(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),nn=function(){function e(t){this.element=Ut(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),an=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),kt=ut,on={isServer:!ut,useCSSOMInjection:!Lr},Yt=function(){function e(t,r,n){t===void 0&&(t=Z),r===void 0&&(r={});var a=this;this.options=P(P({},on),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&ut&&kt&&(kt=!1,function(o){for(var i=document.querySelectorAll(Jr),c=0,l=i.length;c<l;c++){var d=i[c];d&&d.getAttribute(J)!=="active"&&(en(o,d),d.parentNode&&d.parentNode.removeChild(d))}}(this)),ft(this,function(){return function(o){for(var i=o.getTag(),c=i.length,l="",d=function(m){var h=function(T){return we.get(T)}(m);if(h===void 0)return"continue";var f=o.names.get(h),x=i.getGroup(m);if(f===void 0||x.length===0)return"continue";var v="".concat(J,".g").concat(m,'[id="').concat(h,'"]'),E="";f!==void 0&&f.forEach(function(T){T.length>0&&(E+="".concat(T,","))}),l+="".concat(x).concat(v,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},p=0;p<c;p++)d(p);return l}(a)})}return e.registerId=function(t){return fe(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(P(P({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,a=r.target;return r.isServer?new an(a):n?new rn(a):new nn(a)}(this.options),new Kr(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(fe(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(fe(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(fe(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),sn=/&/g,cn=/^\s*\/\/.*$/gm;function Ht(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Ht(r.children,t)),r})}function ln(e){var t,r,n,a=e===void 0?Z:e,o=a.options,i=o===void 0?Z:o,c=a.plugins,l=c===void 0?Re:c,d=function(h,f,x){return x===r||x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?".".concat(t):h},p=l.slice();p.push(function(h){h.type===Ae&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(sn,r).replace(n,d))}),i.prefix&&p.push(Er),p.push(Rr);var m=function(h,f,x,v){f===void 0&&(f=""),x===void 0&&(x=""),v===void 0&&(v="&"),t=v,r=f,n=new RegExp("\\".concat(r,"\\b"),"g");var E=h.replace(cn,""),T=Ir(x||f?"".concat(x," ").concat(f," { ").concat(E," }"):E);i.namespace&&(T=Ht(T,i.namespace));var S=[];return _e(T,Nr(p.concat(Dr(function(_){return S.push(_)})))),S};return m.hash=l.length?l.reduce(function(h,f){return f.name||ce(15),H(h,f.name)},5381).toString():"",m}var dn=new Yt,We=ln(),Kt=ie.createContext({shouldForwardProp:void 0,styleSheet:dn,stylis:We});Kt.Consumer;ie.createContext(void 0);function At(){return R.useContext(Kt)}var un=function(){function e(t,r){var n=this;this.inject=function(a,o){o===void 0&&(o=We);var i=n.name+o.hash;a.hasNameForId(n.id,i)||a.insertRules(n.id,i,o(n.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,ft(this,function(){throw ce(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=We),this.name+t.hash},e}(),pn=function(e){return e>="A"&&e<="Z"};function Tt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;pn(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Xt=function(e){return e==null||e===!1||e===""},Jt=function(e){var t,r,n=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Xt(o)&&(Array.isArray(o)&&o.isCss||Q(o)?n.push("".concat(Tt(a),":"),o,";"):se(o)?n.push.apply(n,ve(ve(["".concat(a," {")],Jt(o),!1),["}"],!1)):n.push("".concat(Tt(a),": ").concat((t=a,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Pr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function U(e,t,r,n){if(Xt(e))return[];if(pt(e))return[".".concat(e.styledComponentId)];if(Q(e)){if(!Q(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var a=e(t);return U(a,t,r,n)}var o;return e instanceof un?r?(e.inject(r,n),[e.getName(n)]):[e]:se(e)?Jt(e):Array.isArray(e)?Array.prototype.concat.apply(Re,e.map(function(i){return U(i,t,r,n)})):[e.toString()]}function fn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Q(r)&&!pt(r))return!1}return!0}var mn=Ft("6.1.1"),hn=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&fn(t),this.componentId=r,this.baseHash=H(mn,r),this.baseStyle=n,Yt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))a=B(a,this.staticRulesId);else{var o=St(U(this.rules,t,r,n)),i=Fe(H(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,i)){var c=n(o,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,c)}a=B(a,i),this.staticRulesId=i}else{for(var l=H(this.baseHash,n.hash),d="",p=0;p<this.rules.length;p++){var m=this.rules[p];if(typeof m=="string")d+=m;else if(m){var h=St(U(m,t,r,n));l=H(l,h+p),d+=h}}if(d){var f=Fe(l>>>0);r.hasNameForId(this.componentId,f)||r.insertRules(this.componentId,f,n(d,".".concat(f),void 0,this.componentId)),a=B(a,f)}}return a},e}(),Zt=ie.createContext(void 0);Zt.Consumer;var je={};function gn(e,t,r){var n=pt(e),a=e,o=!Oe(e),i=t.attrs,c=i===void 0?Re:i,l=t.componentId,d=l===void 0?function(A,I){var y=typeof A!="string"?"sc":bt(A);je[y]=(je[y]||0)+1;var s="".concat(y,"-").concat(zr("6.1.1"+y+je[y]));return I?"".concat(I,"-").concat(s):s}(t.displayName,t.parentComponentId):l,p=t.displayName,m=p===void 0?function(A){return Oe(A)?"styled.".concat(A):"Styled(".concat($r(A),")")}(e):p,h=t.displayName&&t.componentId?"".concat(bt(t.displayName),"-").concat(t.componentId):t.componentId||d,f=n&&a.attrs?a.attrs.concat(c).filter(Boolean):c,x=t.shouldForwardProp;if(n&&a.shouldForwardProp){var v=a.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;x=function(A,I){return v(A,I)&&E(A,I)}}else x=v}var T=new hn(r,h,n?a.componentStyle:void 0);function S(A,I){return function(y,s,w){var j=y.attrs,er=y.componentStyle,tr=y.defaultProps,rr=y.foldedComponentIds,nr=y.styledComponentId,ar=y.target,or=ie.useContext(Zt),ir=At(),Ne=y.shouldForwardProp||ir.shouldForwardProp,z=function(de,re,ue){for(var ne,W=P(P({},re),{className:void 0,theme:ue}),Ee=0;Ee<de.length;Ee+=1){var pe=Q(ne=de[Ee])?ne(W):ne;for(var F in pe)W[F]=F==="className"?B(W[F],pe[F]):F==="style"?P(P({},W[F]),pe[F]):pe[F]}return re.className&&(W.className=B(W.className,re.className)),W}(j,s,Or(s,or,tr)||Z),le=z.as||ar,te={};for(var $ in z)z[$]===void 0||$[0]==="$"||$==="as"||$==="theme"||($==="forwardedAs"?te.as=z.forwardedAs:Ne&&!Ne($,le)||(te[$]=z[$]));var mt=function(de,re){var ue=At(),ne=de.generateAndInjectStyles(re,ue.styleSheet,ue.stylis);return ne}(er,z),De=B(rr,nr);return mt&&(De+=" "+mt),z.className&&(De+=" "+z.className),te[Oe(le)&&!$t.has(le)?"class":"className"]=De,te.ref=w,R.createElement(le,te)}(_,A,I)}S.displayName=m;var _=ie.forwardRef(S);return _.attrs=f,_.componentStyle=T,_.displayName=m,_.shouldForwardProp=x,_.foldedComponentIds=n?B(a.foldedComponentIds,a.styledComponentId):"",_.styledComponentId=h,_.target=n?a.target:e,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=n?function(I){for(var y=[],s=1;s<arguments.length;s++)y[s-1]=arguments[s];for(var w=0,j=y;w<j.length;w++)Me(I,j[w],!0);return I}({},a.defaultProps,A):A}}),ft(_,function(){return".".concat(_.styledComponentId)}),o&&Gt(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function It(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r}var Ct=function(e){return Object.assign(e,{isCss:!0})};function yn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Q(e)||se(e)){var n=e;return Ct(U(It(Re,ve([n],t,!0))))}var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?U(a):Ct(U(It(a,t)))}function Be(e,t,r){if(r===void 0&&(r=Z),!t)throw ce(1,t);var n=function(a){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,r,yn.apply(void 0,ve([a],o,!1)))};return n.attrs=function(a){return Be(e,t,P(P({},r),{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},n.withConfig=function(a){return Be(e,t,P(P({},r),a))},n}var Qt=function(e){return Be(gn,e)},N=Qt;$t.forEach(function(e){N[e]=Qt(e)});const Ge=N.div`
  min-width: min(0% + 600px, 33% + 0px);
  order: 1;
  width: auto !important;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  display: flex;
  box-sizing: border-box;
`,Ue=N.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
`,Ye=N.div`
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
`,He=N.i`
  margin-right: 8px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 14px;
  -webkit-font-smoothing: antialiased;
`,Ke=N.div`
  gap: 4px;
  flex-wrap: wrap;
  flex-grow: 1;
  display: flex;
  box-sizing: border-box;
`,Xe=N.div`
  animation: 0.25s ease-out 0s 1 normal none running animate;
  white-space: nowrap;
  align-items: stretch;
  position: relative;
  display: flex;
  box-sizing: border-box;
`,Je=N.div`
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
`,Ze=N.div`
  padding-right: 8px;
  padding-left: 8px;
  font-size: 13px;
  box-sizing: border-box;
`,Qe=N.div`
  --background-color: RGBA(231, 233, 237, 1);
  background-color: rgb(231, 233, 237);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-left: 8px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
`,et=N.small`
  font-size: 13px;
  box-sizing: border-box;
`,tt=N.button`
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
`,rt=N.input`
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
`,nt=N.ul`
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
`,at=N.div`
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
`,ot=N.span`
  color: rgb(55, 65, 81);
  text-decoration: none solid rgb(55, 65, 81);
  box-sizing: border-box;
`,it=N.b`
  font-weight: 500;
  box-sizing: border-box;
`,st=N.b`
  font-weight: 500;
  --color: RGBA(113, 75, 103, 1);
  color: rgb(113, 75, 103);
  font-style: italic;
  box-sizing: border-box;
`,ct=N.li`
  &.focus {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;try{Ge.displayName="MainDiv",Ge.__docgenInfo={description:"",displayName:"MainDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Ue.displayName="SearchDiv",Ue.__docgenInfo={description:"",displayName:"SearchDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Ye.displayName="SearchListDiv",Ye.__docgenInfo={description:"",displayName:"SearchListDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{He.displayName="SearchIcon",He.__docgenInfo={description:"",displayName:"SearchIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Ke.displayName="SearchInputDiv",Ke.__docgenInfo={description:"",displayName:"SearchInputDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Xe.displayName="FiltersListItem",Xe.__docgenInfo={description:"",displayName:"FiltersListItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Je.displayName="ButtonLabel",Je.__docgenInfo={description:"",displayName:"ButtonLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Ze.displayName="ButtonLabelSmall",Ze.__docgenInfo={description:"",displayName:"ButtonLabelSmall",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Qe.displayName="DeleteDiv",Qe.__docgenInfo={description:"",displayName:"DeleteDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{et.displayName="DeleteSmall",et.__docgenInfo={description:"",displayName:"DeleteSmall",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{tt.displayName="DeleteButton",tt.__docgenInfo={description:"",displayName:"DeleteButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{rt.displayName="Input",rt.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{nt.displayName="MenuSearch",nt.__docgenInfo={description:"",displayName:"MenuSearch",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{at.displayName="LineLabelDiv",at.__docgenInfo={description:"",displayName:"LineLabelDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{ot.displayName="SpanSearchText",ot.__docgenInfo={description:"",displayName:"SpanSearchText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{it.displayName="StronLabel",it.__docgenInfo={description:"",displayName:"StronLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{st.displayName="StrongLabelText",st.__docgenInfo={description:"",displayName:"StrongLabelText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{ct.displayName="LineLabel",ct.__docgenInfo={description:"",displayName:"LineLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Se=R.forwardRef((e,t)=>{const{filterLabels:r,filters:n,setFilters:a}=e,o=R.useRef(null),i=R.useRef([]),[c,l]=R.useState(""),[d,p]=R.useState(0),[m,h]=R.useState(null),[f,x]=R.useState(!0),[v,E]=R.useState([]);R.useEffect(()=>{r&&E(r)},[r]),R.useEffect(()=>{m===null||!f||p(m)},[m,f]);const T=()=>{if(c==="")return;const s=v[d];n.find(j=>j.text===c&&j.label===s.label)||a([...n,{text:c,label:s.label,filter:s.filter}]),l(""),p(0),o.current&&o.current.focus()},S=s=>{const w=[...n];w.splice(s,1),a(w)};R.useEffect(()=>{if(f)return;const s=()=>{x(!0)};return document.addEventListener("mousemove",s),()=>{document.removeEventListener("mousemove",s)}},[f]);const _=s=>{if(s.key==="ArrowDown"){s.preventDefault(),x(!1);const w=d===v.length-1?0:d+1;p(w),i.current[w]&&i.current[w].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}else if(s.key==="ArrowUp"){s.preventDefault(),x(!1);const w=d===0?v.length-1:d-1;p(w),i.current[w]&&i.current[w].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}else s.key==="Enter"?T():s.key==="Backspace"?c===""&&S(n.length-1):s.key==="Escape"&&(l(""),p(0))},A=s=>{h(s)},I=()=>{h(null)},y=s=>{s.relatedTarget!==null&&i.current&&i.current.includes(s.relatedTarget)||(l(""),p(0))};return R.useImperativeHandle(t,()=>({inputRef:o.current})),b.jsx(b.Fragment,{children:b.jsx(Ge,{children:b.jsx(Ue,{role:"search",children:b.jsxs(Ye,{role:"search","aria-autocomplete":"list",children:[b.jsx(He,{role:"img","aria-label":"Search...",title:"Search...",children:b.jsx(qe,{})}),b.jsxs(Ke,{children:[n.map((s,w)=>b.jsxs(Xe,{role:"listitem","aria-label":"search",children:[b.jsx(Je,{role:"button",children:b.jsx(Ze,{children:s.label})}),b.jsxs(Qe,{children:[b.jsx(et,{children:s.text}),b.jsx(tt,{role:"button","aria-label":"Remove",title:"Remove",onClick:()=>S(w)})]})]},w)),b.jsx(rt,{type:"text",value:c,role:"searchbox",placeholder:"Search...",onChange:s=>l(s.target.value),onKeyDown:_,onBlur:y,ref:o}),c!==""&&b.jsx(nt,{role:"menu",children:v.map((s,w)=>b.jsx(ct,{className:`${w===d||w===m?"focus":""}`,onMouseOver:()=>A(w),onMouseOut:()=>I(),onClick:T,tabIndex:0,ref:j=>{j&&(i.current[w]=j)},children:b.jsx(at,{children:b.jsxs(ot,{children:[" Search ",b.jsx(it,{children:s.label})," for: ",b.jsx(st,{children:c})]})})},w))})]})]})})})})});try{Se.displayName="InputSearch",Se.__docgenInfo={description:"",displayName:"InputSearch",props:{filterLabels:{defaultValue:null,description:"",name:"filterLabels",required:!0,type:{name:"FilterLabel[]"}},filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"Filters[]"}},setFilters:{defaultValue:null,description:"",name:"setFilters",required:!0,type:{name:"Dispatch<Filters[]>"}}}}}catch{}const{useArgs:bn}=__STORYBOOK_MODULE_CLIENT_API__,wn={component:Se},me={args:{filterLabels:fr,filters:[],setFilters:()=>{}},render:e=>{const{filterLabels:t}=e,[r,n]=bn(),[a,o]=R.useState([]),i=R.useRef(null);return R.useEffect(()=>{n({filters:a})},[a]),R.useEffect(()=>{const c=setTimeout(()=>{var l;i.current&&((l=i.current.inputRef)==null||l.focus())},1e3);return()=>clearTimeout(c)},[]),b.jsxs(b.Fragment,{children:[b.jsx("div",{style:{marginBottom:"30px"},children:b.jsx(Se,{filters:r.filters,setFilters:o,filterLabels:t,ref:i})}),"Filters:",b.jsx("div",{children:r.filters.map((c,l)=>b.jsx("div",{children:JSON.stringify(c)},l))})]})}};var Rt,Nt,Dt;me.parameters={...me.parameters,docs:{...(Rt=me.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Dt=(Nt=me.parameters)==null?void 0:Nt.docs)==null?void 0:Dt.source}}};const Sn=["Primary"];export{me as Primary,Sn as __namedExportsOrder,wn as default};
//# sourceMappingURL=InputSearch.stories-ab6fd6c4.js.map
