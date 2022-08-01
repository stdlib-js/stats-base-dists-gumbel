// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,n=Object.prototype,t=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,o=n.__lookupSetter__;var f=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,f){var c,s,l,p;if("object"!=typeof e||null===e||"[object Array]"===t.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof f||null===f||"[object Array]"===t.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(a.call(e,r)||o.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=f.value,e.__proto__=c):e[r]=f.value),l="get"in f,p="set"in f,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(e,r,f.get),p&&u&&u.call(e,r,f.set),e};function c(e,r,n){f(e,r,{configurable:!1,enumerable:!0,writable:!1,value:n})}function s(e,r,n){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(e){return e!=e}var p=Math.floor,v=Math.ceil;function h(e){return e<0?v(e):p(e)}var y=Number,b=y.NEGATIVE_INFINITY,g=Number.POSITIVE_INFINITY;function d(e){return e===g||e===b}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return w&&"symbol"==typeof Symbol.toStringTag}var N=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var E=m()?function(e){var r,n,t,i,u;if(null==e)return N.call(e);n=e[_],u=_,r=null!=(i=e)&&A.call(i,u);try{e[_]=void 0}catch(r){return N.call(e)}return t=N.call(e),r?e[_]=n:delete e[_],t}:function(e){return N.call(e)},k="function"==typeof Uint32Array;var x="function"==typeof Uint32Array?Uint32Array:null;var S,U="function"==typeof Uint32Array?Uint32Array:void 0;S=function(){var e,r,n;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(k&&n instanceof Uint32Array||"[object Uint32Array]"===E(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?U:function(){throw new Error("not implemented")};var j=S,I="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null;var O,T="function"==typeof Float64Array?Float64Array:void 0;O=function(){var e,r,n;if("function"!=typeof F)return!1;try{r=new F([1,3.14,-3.14,NaN]),n=r,e=(I&&n instanceof Float64Array||"[object Float64Array]"===E(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?T:function(){throw new Error("not implemented")};var V=O,G="function"==typeof Uint8Array;var P="function"==typeof Uint8Array?Uint8Array:null;var $,H="function"==typeof Uint8Array?Uint8Array:void 0;$=function(){var e,r,n;if("function"!=typeof P)return!1;try{r=new P(r=[1,3.14,-3.14,256,257]),n=r,e=(G&&n instanceof Uint8Array||"[object Uint8Array]"===E(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?H:function(){throw new Error("not implemented")};var L=$,M="function"==typeof Uint16Array;var W="function"==typeof Uint16Array?Uint16Array:null;var C,R="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var e,r,n;if("function"!=typeof W)return!1;try{r=new W(r=[1,3.14,-3.14,65536,65537]),n=r,e=(M&&n instanceof Uint16Array||"[object Uint16Array]"===E(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?R:function(){throw new Error("not implemented")};var Z,q={uint16:C,uint8:L};(Z=new q.uint16(1))[0]=4660;var X,Y,z=52===new q.uint8(Z.buffer)[0];!0===z?(X=1,Y=0):(X=0,Y=1);var B={HIGH:X,LOW:Y},D=new V(1),J=new j(D.buffer),K=B.HIGH,Q=B.LOW;function ee(e,r){return D[0]=r,e[0]=J[K],e[1]=J[Q],e}function re(e,r){return 1===arguments.length?ee([0,0],e):ee(e,r)}var ne,te,ie=!0===z?1:0,ue=new V(1),ae=new j(ue.buffer);function oe(e){return ue[0]=e,ae[ie]}!0===z?(ne=1,te=0):(ne=0,te=1);var fe={HIGH:ne,LOW:te},ce=new V(1),se=new j(ce.buffer),le=fe.HIGH,pe=fe.LOW;function ve(e,r){return se[le]=e,se[pe]=r,ce[0]}var he=[0,0];function ye(e,r){var n,t;return re(he,e),n=he[0],n&=2147483647,t=oe(r),ve(n|=t&=2147483648,he[1])}function be(e){return Math.abs(e)}function ge(e,r){return l(r)||d(r)?(e[0]=r,e[1]=0,e):0!==r&&be(r)<22250738585072014e-324?(e[0]=4503599627370496*r,e[1]=-52,e):(e[0]=r,e[1]=0,e)}var de=[0,0],we=[0,0];function me(e,r){var n,t;return 0===r||0===e||l(e)||d(e)?e:(function(e,r){1===arguments.length?ge([0,0],e):ge(e,r)}(de,e),r+=de[1],r+=function(e){var r=oe(e);return(r=(2146435072&r)>>>20)-1023|0}(e=de[0]),r<-1074?ye(0,e):r>1023?e<0?b:g:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,re(we,e),n=we[0],n&=2148532223,t*ve(n|=r+1023<<20,we[1])))}function Ne(e){var r;return l(e)||e===g?e:e===b?0:e>709.782712893384?g:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<3.725290298461914e-9?1+e:function(e,r,n){var t,i,u,a;return me(1-(r-(t=e-r)*(u=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-u)-e),n)}(e-.6931471803691238*(r=h(e<0?1.4426950408889634*e-.5:1.4426950408889634*e+.5)),1.9082149292705877e-10*r,r)}function Ae(e,r,n){return l(e)||l(r)||l(n)||n<=0?NaN:Ne(-Ne(-((e-r)/n)))}function _e(e){return function(){return e}}function Ee(e,r,n){f(e,r,{configurable:!1,enumerable:!1,get:n})}function ke(e){return"number"==typeof e}s(Ae,"factory",(function(e,r){return l(e)||l(r)||r<=0?_e(NaN):function(n){if(l(n))return NaN;return Ne(-Ne(-((n-e)/r)))}}));var xe=y.prototype.toString;var Se=m();function Ue(e){return"object"==typeof e&&(e instanceof y||(Se?function(e){try{return xe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===E(e)))}function je(e){return ke(e)||Ue(e)}function Ie(e){return ke(e)&&e>0}function Fe(e){return Ue(e)&&e.valueOf()>0}function Oe(e){return Ie(e)||Fe(e)}function Te(e){return ke(e)&&l(e)}function Ve(e){return Ue(e)&&l(e.valueOf())}function Ge(e){return Te(e)||Ve(e)}s(je,"isPrimitive",ke),s(je,"isObject",Ue),s(Oe,"isPrimitive",Ie),s(Oe,"isObject",Fe),s(Ge,"isPrimitive",Te),s(Ge,"isObject",Ve);var Pe=!0===z?1:0,$e=new V(1),He=new j($e.buffer);function Le(e,r){return $e[0]=e,He[Pe]=r>>>0,$e[0]}var Me=.6931471803691238,We=1.9082149292705877e-10;function Ce(e){var r,n,t,i,u,a,o,f,c,s,p,v;return 0===e?b:l(e)||e<0?NaN:(u=0,(n=oe(e))<1048576&&(u-=54,n=oe(e*=0x40000000000000)),n>=2146435072?e+e:(u+=(n>>20)-1023|0,u+=(f=(n&=1048575)+614244&1048576|0)>>20|0,o=(e=Le(e,n|1072693248^f))-1,(1048575&2+n)<3?0===o?0===u?0:u*Me+u*We:(a=o*o*(.5-.3333333333333333*o),0===u?o-a:u*Me-(a-u*We-o)):(f=n-398458|0,c=440401-n|0,i=(p=(v=(s=o/(2+o))*s)*v)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(p),t=v*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(p),a=t+i,(f|=c)>0?(r=.5*o*o,0===u?o-(r-s*(r+a)):u*Me-(r-(s*(r+a)+u*We)-o)):0===u?o-s*(o-a):u*Me-(s*(o-a)-u*We-o))))}var Re=.5772156649015329;function Ze(e,r){return l(e)||l(r)||r<=0?NaN:Ce(r)+Re+1}function qe(e,r){return l(e)||l(r)||r<=0?NaN:2.4}function Xe(e,r){return l(e)||l(r)||r<=0?NaN:e+r*Re}var Ye=.6931471805599453,ze=Ce(Ye);function Be(e,r){return l(e)||l(r)||r<=0?NaN:e-r*ze}function De(e,r){return l(e)||l(r)||r<=0?NaN:e}var Je=Math.sqrt;function Ke(e){return p(e)===e}function Qe(e,r){var n,t,i,u;return i=(u=e*e)*u,t=u*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(u),t+=i*i*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(u),(i=1-(n=.5*u))+(1-i-n+(u*t-e*r))}var er=-.16666666666666632;function rr(e,r){var n,t,i;return n=.00833333333332249+(i=e*e)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*e,0===r?e+t*(er+i*n):e-(i*(.5*r-t*n)-r-t*er)}var nr=!0===z?0:1,tr=new V(1),ir=new j(tr.buffer);function ur(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var ar=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],or=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],fr=5.960464477539063e-8,cr=ur(20),sr=ur(20),lr=ur(20),pr=ur(20);function vr(e,r,n,t,i,u,a,o,f){var c,s,l,v,h,y,b,g,d;for(v=u,d=t[n],g=n,h=0;g>0;h++)s=fr*d|0,pr[h]=d-16777216*s|0,d=t[g-1]+s,g-=1;if(d=me(d,i),d-=8*p(.125*d),d-=b=0|d,l=0,i>0?(b+=h=pr[n-1]>>24-i,pr[n-1]-=h<<24-i,l=pr[n-1]>>23-i):0===i?l=pr[n-1]>>23:d>=.5&&(l=2),l>0){for(b+=1,c=0,h=0;h<n;h++)g=pr[h],0===c?0!==g&&(c=1,pr[h]=16777216-g):pr[h]=16777215-g;if(i>0)switch(i){case 1:pr[n-1]&=8388607;break;case 2:pr[n-1]&=4194303}2===l&&(d=1-d,0!==c&&(d-=me(1,i)))}if(0===d){for(g=0,h=n-1;h>=u;h--)g|=pr[h];if(0===g){for(y=1;0===pr[u-y];y++);for(h=n+1;h<=n+y;h++){for(f[o+h]=ar[a+h],s=0,g=0;g<=o;g++)s+=e[g]*f[o+(h-g)];t[h]=s}return vr(e,r,n+=y,t,i,u,a,o,f)}}if(0===d)for(n-=1,i-=24;0===pr[n];)n-=1,i-=24;else(d=me(d,-i))>=16777216?(s=fr*d|0,pr[n]=d-16777216*s|0,i+=24,pr[n+=1]=s):pr[n]=0|d;for(s=me(1,i),h=n;h>=0;h--)t[h]=s*pr[h],s*=fr;for(h=n;h>=0;h--){for(s=0,y=0;y<=v&&y<=n-h;y++)s+=or[y]*t[h+y];lr[n-h]=s}for(s=0,h=n;h>=0;h--)s+=lr[h];for(r[0]=0===l?s:-s,s=lr[0]-s,h=1;h<=n;h++)s+=lr[h];return r[1]=0===l?s:-s,7&b}function hr(e,r,n,t){var i,u,a,o,f,c,s;for(4,(u=(n-3)/24|0)<0&&(u=0),o=n-24*(u+1),c=u-(a=t-1),s=a+4,f=0;f<=s;f++)cr[f]=c<0?0:ar[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=e[c]*cr[a+(f-c)];sr[f]=i}return 4,vr(e,r,4,sr,o,4,u,a,cr)}var yr=Math.round;function br(e,r,n){var t,i,u,a,o;return u=e-1.5707963267341256*(t=yr(.6366197723675814*e)),a=6077100506506192e-26*t,o=r>>20|0,n[0]=u-a,o-(oe(n[0])>>20&2047)>16&&(a=20222662487959506e-37*t-((i=u)-(u=i-(a=6077100506303966e-26*t))-a),n[0]=u-a,o-(oe(n[0])>>20&2047)>49&&(a=84784276603689e-45*t-((i=u)-(u=i-(a=20222662487111665e-37*t))-a),n[0]=u-a)),n[1]=u-n[0]-a,t}var gr=1.5707963267341256,dr=6077100506506192e-26,wr=2*dr,mr=4*dr,Nr=[0,0,0],Ar=[0,0];function _r(e,r){var n,t,i,u,a,o,f;if((i=2147483647&oe(e)|0)<=1072243195)return r[0]=e,r[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?br(e,i,r):i<=1073928572?e>0?(f=e-gr,r[0]=f-dr,r[1]=f-r[0]-dr,1):(f=e+gr,r[0]=f+dr,r[1]=f-r[0]+dr,-1):e>0?(f=e-2*gr,r[0]=f-wr,r[1]=f-r[0]-wr,2):(f=e+2*gr,r[0]=f+wr,r[1]=f-r[0]+wr,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?br(e,i,r):e>0?(f=e-3*gr,r[0]=f-1.8231301519518578e-10,r[1]=f-r[0]-1.8231301519518578e-10,3):(f=e+3*gr,r[0]=f+1.8231301519518578e-10,r[1]=f-r[0]+1.8231301519518578e-10,-3):1075388923===i?br(e,i,r):e>0?(f=e-4*gr,r[0]=f-mr,r[1]=f-r[0]-mr,4):(f=e+4*gr,r[0]=f+mr,r[1]=f-r[0]+mr,-4);if(i<1094263291)return br(e,i,r);if(i>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return tr[0]=e,ir[nr]}(e),f=ve(i-((t=(i>>20)-1046)<<20|0),n),a=0;a<2;a++)Nr[a]=0|f,f=16777216*(f-Nr[a]);for(Nr[2]=f,u=3;0===Nr[u-1];)u-=1;return o=hr(Nr,Ar,t,u),e<0?(r[0]=-Ar[0],r[1]=-Ar[1],-o):(r[0]=Ar[0],r[1]=Ar[1],o)}var Er=[0,0];function kr(e){var r;if(r=oe(e),(r&=2147483647)<=1072243195)return r<1045430272?e:rr(e,0);if(r>=2146435072)return NaN;switch(3&_r(e,Er)){case 0:return rr(Er[0],Er[1]);case 1:return Qe(Er[0],Er[1]);case 2:return-rr(Er[0],Er[1]);default:return-Qe(Er[0],Er[1])}}var xr=3.141592653589793;function Sr(e){return Ke(e/2)}function Ur(e){return Sr(e>0?e-1:e+1)}var jr=!0===z?0:1,Ir=new V(1),Fr=new j(Ir.buffer);function Or(e,r){return Ir[0]=e,Fr[jr]=r>>>0,Ir[0]}function Tr(e){return 0|e}var Vr=[1,1.5],Gr=[0,.5849624872207642],Pr=[0,1.350039202129749e-8];var $r=1e300,Hr=[0,0],Lr=[0,0];function Mr(e,r){var n,t,i,u,a,o,f,c,s,p,v,h,y,w;if(l(e)||l(r))return NaN;if(re(Hr,r),a=Hr[0],0===Hr[1]){if(0===r)return 1;if(1===r)return e;if(-1===r)return 1/e;if(.5===r)return Je(e);if(-.5===r)return 1/Je(e);if(2===r)return e*e;if(3===r)return e*e*e;if(4===r)return(e*=e)*e;if(d(r))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:be(e)<1==(r===g)?0:g}(e,r)}if(re(Hr,e),u=Hr[0],0===Hr[1]){if(0===u)return function(e,r){return r===b?g:r===g?0:r>0?Ur(r)?e:0:Ur(r)?ye(g,e):g}(e,r);if(1===e)return 1;if(-1===e&&Ur(r))return-1;if(d(e))return e===b?Mr(-0,-r):r<0?0:g}if(e<0&&!1===Ke(r))return(e-e)/(e-e);if(i=be(e),n=2147483647&u|0,t=2147483647&a|0,f=a>>>31|0,o=(o=u>>>31|0)&&Ur(r)?-1:1,t>1105199104){if(t>1139802112)return function(e,r){return(2147483647&oe(e))<=1072693247?r<0?1/0:0:r>0?1/0:0}(e,r);if(n<1072693247)return 1===f?o*$r*$r:1e-300*o*1e-300;if(n>1072693248)return 0===f?o*$r*$r:1e-300*o*1e-300;v=function(e,r){var n,t,i,u,a,o;return n=(a=1.9259629911266175e-8*(i=r-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=Or(t=(u=1.4426950216293335*i)+a,0))-u),e[0]=t,e[1]=n,e}(Lr,i)}else v=function(e,r,n){var t,i,u,a,o,f,c,s,l,p,v,h,y,b,g,d,w,m,N,A,_;return m=0,n<1048576&&(m-=53,n=oe(r*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(N=1048575&n|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=1048576),a=Or(i=(d=(r=Le(r,n))-(c=Vr[A]))*(w=1/(r+c)),0),t=524288+(n>>1|536870912),f=Le(0,t+=A<<18),g=(u=i*i)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Or(f=3+(u=a*a)+(g+=(o=w*(d-a*f-a*(r-(f-c))))*(a+i)),0),y=(v=-7.028461650952758e-9*(l=Or(l=(d=a*f)+(w=o*f+(g-(f-3-u))*i),0))+.9617966939259756*(w-(l-d))+Pr[A])-((h=Or(h=(p=.9617967009544373*l)+v+(s=Gr[A])+(b=m),0))-b-s-p),e[0]=h,e[1]=y,e}(Lr,i,n);if(p=(r-(c=Or(r,0)))*v[0]+r*v[1],s=c*v[0],re(Hr,h=p+s),y=Tr(Hr[0]),w=Tr(Hr[1]),y>=1083179008){if(0!=(y-1083179008|w))return o*$r*$r;if(p+8008566259537294e-32>h-s)return o*$r*$r}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|w))return 1e-300*o*1e-300;if(p<=h-s)return 1e-300*o*1e-300}return h=function(e,r,n){var t,i,u,a,o,f,c,s,l,p,v;return p=((l=2147483647&e|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=e+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,e<0&&(s=-s),r-=u=Le(0,t)),e=Tr(e=oe(c=1-((c=(a=.6931471824645996*(u=Or(u=n+r,0)))+(o=(n-(u-r))*Ye+-1.904654299957768e-9*u))*(i=c-(u=c*c)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=o-(c-a))+c*f)-c))),(e+=s<<20>>>0)>>20<=0?me(c,s):Le(c,e)}(y,s,p),o*h}function Wr(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=Ne(e),2.5066282746310007*(n=e>143.01608?(t=Mr(e,.5*e-.25))*(t/n):Mr(e,e-.5)/n)*r}function Cr(e,r){return r/((1+Re*e)*e)}function Rr(e){var r,n,t,i;if(Ke(e)&&e<0||e===b||l(e))return NaN;if(0===e)return function(e){return 0===e&&1/e===b}(e)?b:g;if(e>171.61447887182297)return g;if(e<-170.5674972726612)return 0;if((n=be(e))>33)return e>=0?Wr(e):(r=0==(1&(t=p(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*kr(xr*i),r*xr/(be(i)*Wr(n)));for(i=1;e>=3;)i*=e-=1;for(;e<0;){if(e>-1e-9)return Cr(e,i);i/=e,e+=1}for(;e<2;){if(e<1e-9)return Cr(e,i);i/=e,e+=1}return 2===e?i:i*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(e-=2)}var Zr=[0,0];function qr(e){var r;if(r=oe(e),(r&=2147483647)<=1072243195)return r<1044381696?1:Qe(e,0);if(r>=2146435072)return NaN;switch(3&_r(e,Zr)){case 0:return Qe(Zr[0],Zr[1]);case 1:return-rr(Zr[0],Zr[1]);case 2:return-Qe(Zr[0],Zr[1]);default:return rr(Zr[0],Zr[1])}}function Xr(e){var r,n;return l(e)||d(e)?NaN:0===(r=be(n=e%2))||1===r?ye(0,n):r<.25?kr(xr*n):r<.75?ye(qr(xr*(r=.5-r)),n):r<1.25?(n=ye(1,n)-n,kr(xr*n)):r<1.75?-ye(qr(xr*(r-=1.5)),n):(n-=ye(2,n),kr(xr*n))}var Yr=1.4616321449683622,zr=1.4616321449683622;var Br=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],Dr=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],Jr=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290];var Kr=12*Je(6)*function e(r){var n,t,i,u,a,o,f,c,s;if(l(r))return NaN;if(1===r)return NaN;if(r>=56)return 1;if(Ke(r)&&(u=0|r)===r){if(!(u<0))return 0==(1&u)?Dr[u/2]:Br[(u-3)/2];if(0==(1&(i=0|-u)))return 0;if((o=(i+1)/2|0)<=129)return-Jr[o]/(i+1)}return be(r)<1.4901161193847656e-8?-.5-.9189385332046728*r:(t=1-r,r<0?p(r/2)===r/2?0:(n=r,r=t,t=n,r>170?(n=2*Xr(.5*t)*e(r),a=function(e){var r,n,t,i,u,a,o,f,c,s,p,v,y;if(l(e)||d(e))return e;if(0===e)return g;if(e<0?(r=!0,e=-e):r=!1,e<8470329472543003e-37)return-Ce(e);if(r){if(e>=4503599627370496)return g;if(0===(c=Xr(e)))return g;n=Ce(xr/be(c*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(y=-Ce(e),e>=Yr-1+.27?(p=1-e,t=0):e>=Yr-1-.27?(p=e-(zr-1),t=1):(p=e,t=2)):(y=0,e>=Yr+.27?(p=2-e,t=0):e>=Yr-.27?(p=e-zr,t=1):(p=e-1,t=2)),t){case 0:a=.07721566490153287+(v=p*p)*function(e){return 0===e?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+25214456545125733e-21*e)))}(v),u=v*(.3224670334241136+v*function(e){return 0===e?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+44864094961891516e-21*e)))}(v)),y+=(o=p*a+u)-.5*p;break;case 1:a=.48383612272381005+(s=(v=p*p)*p)*function(e){return 0===e?-.032788541075985965:e*(.006100538702462913+e*(.00031563207090362595*e-.0014034646998923284))-.032788541075985965}(s),u=s*function(e){return 0===e?.01797067508118204:.01797067508118204+e*(e*(.000881081882437654+-.00031275416837512086*e)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(e){return 0===e?-.010314224129834144:e*(.0022596478090061247+e*(.0003355291926355191*e-.0005385953053567405))-.010314224129834144}(s),y+=(o=v*a-(-3638676997039505e-33-s*(u+p*i)))-.12148629053584961;break;case 2:a=p*(p*function(e){return 0===e?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+.013381091853678766*e)))}(p)-.07721566490153287),u=1+p*function(e){return 0===e?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+.003217092422824239*e)))}(p),y+=-.5*p+a/u}else if(e<8)switch(o=(p=e-(t=h(e)))*(p*function(e){return 0===e?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+3194753265841009e-20*e))))}(p)-.07721566490153287),f=1+p*function(e){return 0===e?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+7326684307446256e-21*e))))}(p),y=.5*p+o/f,v=1,t){case 7:v*=p+6;case 6:v*=p+5;case 5:v*=p+4;case 4:v*=p+3;case 3:y+=Ce(v*=p+2)}else e<0x400000000000000?(c=Ce(e),s=.4189385332046727+(v=1/e)*function(e){return 0===e?.08333333333333297:.08333333333333297+e*(e*(.0007936505586430196+e*(e*(.0008363399189962821+-.0016309293409657527*e)-.00059518755745034))-.0027777777772877554)}(p=v*v),y=(e-.5)*(c-1)+s):y=e*(Ce(e)-1);return r&&(y=n-y),y}(r),(a-=r*Ce(6.283185307179586))>709?n<0?b:g:n*Ne(a)):2*Xr(.5*t)*Mr(6.283185307179586,-r)*Rr(r)*e(r)):r<1?(n=0===(f=t)?.2433929443359375:((f<0?-f:f)<=1?(c=.2433929443359375+f*(f*(.055761621477604675+f*(f*(.0004515345286457964+-9332412703570615e-21*f)-.003209124988790859))-.4909247051635357),s=1+f*(f*(.04196762233099861+f*(f*(.00024978985622317937+-10185578841856403e-21*f)-.00413421406552171))-.27996033431034445)):(c=(f=1/f)*(.0004515345286457964+f*(f*(.055761621477604675+f*(.2433929443359375*f-.4909247051635357))-.003209124988790859))-9332412703570615e-21,s=f*(.00024978985622317937+f*(f*(.04196762233099861+f*(1*f-.27996033431034445))-.00413421406552171))-10185578841856403e-21),c/s),n-=1.2433929443359375,n+=t,n/=t):r<=2?(n=1/(t=-t))+function(e){var r,n;return 0===e?.5772156649015329:((e<0?-e:e)<=1?(r=.5772156649015329+e*(.24321064694010716+e*(.04173646739882165+e*(.003902520870728433+e*(.0002496063671518772+1101084409767329e-20*e)))),n=1+e*(.29520127712663174+e*(.043460910607305496+e*(.004349305820858264+e*(.0002557842261404885+10991819782396113e-21*e))))):(r=1101084409767329e-20+(e=1/e)*(.0002496063671518772+e*(.003902520870728433+e*(.04173646739882165+e*(.24321064694010716+.5772156649015329*e)))),n=10991819782396113e-21+e*(.0002557842261404885+e*(.004349305820858264+e*(.043460910607305496+e*(.29520127712663174+1*e))))),r/n)}(t):r<=4?(n=.6986598968505859+1/-t)+function(e){var r,n;return 0===e?-.053725830002359504:((e<0?-e:e)<=1?(r=e*(.04451634732923656+e*(.012867767353451996+e*(.0009754177045739176+e*(7698751015736541e-20+e*(3280325100003831e-21+0*e)))))-.053725830002359504,n=1+e*(.3338319455303405+e*(.048779843129140764+e*(.0047903970857355845+e*(.00027077670395633634+e*(10695186753205734e-21+2.3627662397497864e-8*e)))))):(r=0+(e=1/e)*(3280325100003831e-21+e*(7698751015736541e-20+e*(.0009754177045739176+e*(.012867767353451996+e*(.04451634732923656+-.053725830002359504*e))))),n=2.3627662397497864e-8+e*(10695186753205734e-21+e*(.00027077670395633634+e*(.0047903970857355845+e*(.048779843129140764+e*(.3338319455303405+1*e)))))),r/n)}(r-2):r<=7?(n=function(e){var r,n;return 0===e?-2.497101906022594:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(0+e*(0+0*e))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+e*(.7060390259377451+e*(.15739599649558628+e*(.010611795097684508+e*(e*(49340956392759e-19+e*(e*(7.188337293654598e-9+-1.1292001134749475e-10*e)-2.3405548702528722e-7))-36910273311764616e-21))))):(r=0+(e=1/e)*(0+e*(0+e*(e*(e*(e*(e*(-2.497101906022594*e-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=e*(7.188337293654598e-9+e*(e*(49340956392759e-19+e*(e*(.010611795097684508+e*(.15739599649558628+e*(.7060390259377451+1*e)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),r/n)}(r-4),1+Ne(n)):r<15?(n=function(e){var r,n;return 0===e?-4.785580284951356:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(.0011514092388917874+e*(6399492042131645e-20+e*(1393489324453249e-21+e*(0+0*e))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+e*(.24434533737818856+e*(.008733707544922887+e*(e*(e*(e*(4.710012640030765e-9+e*(6998415452048457e-28*e-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(r=0+(e=1/e)*(0+e*(1393489324453249e-21+e*(6399492042131645e-20+e*(.0011514092388917874+e*(e*(e*(-4.785580284951356*e-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+e*(e*(4.710012640030765e-9+e*(e*(e*(e*(.008733707544922887+e*(.24434533737818856+1*e))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),r/n)}(r-7),1+Ne(n)):r<36?(n=function(e){var r,n;return 0===e?-10.39489505733089:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(-8.214657090954655e-9*e-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+e*(.2081963335726719+e*(.019568765731720502+e*(.0011107963810248593+e*(40850774626603926e-21+e*(9.555611230656935e-7+e*(1.185071534740229e-8+2226094836273526e-30*e))))))):(r=(e=1/e)*(e*(e*(e*(e*(e*(-10.39489505733089*e-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+e*(1.185071534740229e-8+e*(9.555611230656935e-7+e*(40850774626603926e-21+e*(.0011107963810248593+e*(.019568765731720502+e*(.2081963335726719+1*e))))))),r/n)}(r-15),1+Ne(n)):1+Mr(2,-r))}(3)/(xr*xr*xr);function Qr(e,r){return l(e)||l(r)||r<=0?NaN:Kr}var en=Je(6);function rn(e,r){return l(e)||l(r)||r<=0?NaN:xr/en*r}function nn(e,r){return l(e)||l(r)||r<=0?NaN:1.6449340668482264*r*r}function tn(e,r,n){return l(e)||l(r)||l(n)||n<=0?NaN:-Ne(-((e-r)/n))}function un(e,r,n){var t;return l(e)||l(r)||l(n)||n<=0?NaN:e===b?0:-(t=(e-r)/n)-Ne(-t)-Ce(n)}function an(e,r,n){return l(e)||l(r)||l(n)||n<=0||e>=1/n?NaN:Rr(1-n*e)*Ne(r*e)}function on(e,r,n){var t;return l(e)||l(r)||l(n)||n<=0?NaN:e===b?0:1/n*Ne(-(t=(e-r)/n)-Ne(-t))}function fn(e,r,n){return l(r)||l(n)||l(e)||n<=0||e<0||e>1?NaN:r-n*Ce(-Ce(e))}function cn(e){return"number"==typeof e}function sn(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function ln(e,r,n){var t=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=n?e+sn(i):sn(i)+e,t&&(e="-"+e)),e}s(tn,"factory",(function(e,r){return l(e)||l(r)||r<=0?_e(NaN):function(n){if(l(n))return NaN;return-Ne(-((n-e)/r))}})),s(un,"factory",(function(e,r){var n;return l(e)||l(r)||r<=0?_e(NaN):(n=Ce(r),function(t){var i;if(l(t))return NaN;if(t===b)return 0;return-(i=(t-e)/r)-Ne(-i)-n})})),s(an,"factory",(function(e,r){return l(e)||l(r)||r<=0?_e(NaN):function(n){if(n>=1/r)return NaN;return Rr(1-r*n)*Ne(e*n)}})),s(on,"factory",(function(e,r){return l(e)||l(r)||r<=0?_e(NaN):function(n){var t;if(l(n))return NaN;if(n===b)return 0;return 1/r*Ne(-(t=(n-e)/r)-Ne(-t))}})),s(fn,"factory",(function(e,r){return l(e)||l(r)||r<=0?_e(NaN):function(n){if(l(n)||n<0||n>1)return NaN;return e-r*Ce(-Ce(n))}}));var pn=String.prototype.toLowerCase,vn=String.prototype.toUpperCase;function hn(e){var r,n,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,t=parseInt(n,10),!isFinite(t)){if(!cn(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(n=(-t).toString(r),e.precision&&(n=ln(n,e.precision,e.padRight)),n="-"+n):(n=t.toString(r),t||e.precision?e.precision&&(n=ln(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===vn.call(e.specifier)?vn.call(n):pn.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function yn(e){return"string"==typeof e}var bn=Math.abs,gn=String.prototype.toLowerCase,dn=String.prototype.toUpperCase,wn=String.prototype.replace,mn=/e\+(\d)$/,Nn=/e-(\d)$/,An=/^(\d+)$/,_n=/^(\d+)e/,En=/\.0$/,kn=/\.0*e/,xn=/(\..*[^0])0*e/;function Sn(e){var r,n,t=parseFloat(e.arg);if(!isFinite(t)){if(!cn(e.arg))throw new Error("invalid floating-point number. Value: "+n);t=e.arg}switch(e.specifier){case"e":case"E":n=t.toExponential(e.precision);break;case"f":case"F":n=t.toFixed(e.precision);break;case"g":case"G":bn(t)<1e-4?((r=e.precision)>0&&(r-=1),n=t.toExponential(r)):n=t.toPrecision(e.precision),e.alternate||(n=wn.call(n,xn,"$1e"),n=wn.call(n,kn,"e"),n=wn.call(n,En,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=wn.call(n,mn,"e+0$1"),n=wn.call(n,Nn,"e-0$1"),e.alternate&&(n=wn.call(n,An,"$1."),n=wn.call(n,_n,"$1.e")),t>=0&&e.sign&&(n=e.sign+n),n=e.specifier===dn.call(e.specifier)?dn.call(n):gn.call(n)}function Un(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}function jn(e,r,n){var t=r-e.length;return t<0?e:e=n?e+Un(t):Un(t)+e}var In=String.fromCharCode,Fn=isNaN,On=Array.isArray;function Tn(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Vn(e){var r,n,t,i,u,a,o,f,c;if(!On(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",o=1,f=0;f<e.length;f++)if(yn(t=e[f]))a+=t;else{if(r=void 0!==t.precision,!(t=Tn(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(o=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[o],10),o+=1,Fn(t.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[o],10),o+=1,Fn(t.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[o],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=hn(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Fn(t.arg)){if((u=parseInt(t.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Fn(u)?String(t.arg):In(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Sn(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ln(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=jn(t.arg,t.width,t.padRight)),a+=t.arg||"",o+=1}return a}var Gn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Pn(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $n(e){var r,n,t,i;for(n=[],i=0,t=Gn.exec(e);t;)(r=e.slice(i,Gn.lastIndex-t[0].length)).length&&n.push(r),n.push(Pn(t)),i=Gn.lastIndex,t=Gn.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function Hn(e){return"string"==typeof e}function Ln(e){var r,n,t;if(!Hn(e))throw new TypeError(Ln("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$n(e),(n=new Array(arguments.length))[0]=r,t=1;t<n.length;t++)n[t]=arguments[t];return Vn.apply(null,n)}function Mn(){var e,r;if(!(this instanceof Mn))return 0===arguments.length?new Mn:new Mn(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!ke(r=arguments[0])||Ge(r))throw new TypeError(Ln("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!Ie(e))throw new TypeError(Ln("invalid argument. Scale parameter must be a positive number. Value: `%s`.",e))}else r=0,e=1;return f(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!ke(e)||Ge(e))throw new TypeError(Ln("invalid assignment. Must be a number. Value: `%s`.",e));r=e}}),f(this,"beta",{configurable:!1,enumerable:!0,get:function(){return e},set:function(r){if(!Ie(r))throw new TypeError(Ln("invalid assignment. Must be a positive number. Value: `%s`.",r));e=r}}),this}Ee(Mn.prototype,"entropy",(function(){return Ze(this.mu,this.beta)})),Ee(Mn.prototype,"kurtosis",(function(){return qe(this.mu,this.beta)})),Ee(Mn.prototype,"mean",(function(){return Xe(this.mu,this.beta)})),Ee(Mn.prototype,"median",(function(){return Be(this.mu,this.beta)})),Ee(Mn.prototype,"mode",(function(){return De(this.mu,this.beta)})),Ee(Mn.prototype,"skewness",(function(){return Qr(this.mu,this.beta)})),Ee(Mn.prototype,"stdev",(function(){return rn(this.mu,this.beta)})),Ee(Mn.prototype,"variance",(function(){return nn(this.mu,this.beta)})),s(Mn.prototype,"cdf",(function(e){return Ae(e,this.mu,this.beta)})),s(Mn.prototype,"logcdf",(function(e){return tn(e,this.mu,this.beta)})),s(Mn.prototype,"logpdf",(function(e){return un(e,this.mu,this.beta)})),s(Mn.prototype,"mgf",(function(e){return an(e,this.mu,this.beta)})),s(Mn.prototype,"pdf",(function(e){return on(e,this.mu,this.beta)})),s(Mn.prototype,"quantile",(function(e){return fn(e,this.mu,this.beta)}));var Wn={};c(Wn,"cdf",Ae),c(Wn,"Gumbel",Mn),c(Wn,"entropy",Ze),c(Wn,"kurtosis",qe),c(Wn,"logcdf",tn),c(Wn,"logpdf",un),c(Wn,"mean",Xe),c(Wn,"median",Be),c(Wn,"mgf",an),c(Wn,"mode",De),c(Wn,"pdf",on),c(Wn,"quantile",fn),c(Wn,"skewness",Qr),c(Wn,"stdev",rn),c(Wn,"variance",nn);export{Mn as Gumbel,Ae as cdf,Wn as default,Ze as entropy,qe as kurtosis,tn as logcdf,un as logpdf,Xe as mean,Be as median,an as mgf,De as mode,on as pdf,fn as quantile,Qr as skewness,rn as stdev,nn as variance};
//# sourceMappingURL=mod.js.map
