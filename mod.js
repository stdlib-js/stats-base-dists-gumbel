// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,n=Object.prototype,t=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,o=n.__lookupGetter__,f=n.__lookupSetter__;var a=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,a){var c,v,l,s;if("object"!=typeof e||null===e||"[object Array]"===t.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof a||null===a||"[object Array]"===t.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((v="value"in a)&&(o.call(e,r)||f.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=a.value,e.__proto__=c):e[r]=a.value),l="get"in a,s="set"in a,v&&(l||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(e,r,a.get),s&&i&&i.call(e,r,a.set),e};function c(e,r,n){a(e,r,{configurable:!1,enumerable:!0,writable:!1,value:n})}function v(e,r,n){a(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(e){return e!=e}var s=Math.floor,y=Math.ceil;function p(e){return e<0?y(e):s(e)}var b=Number,N=b.NEGATIVE_INFINITY,m=Number.POSITIVE_INFINITY;function h(e){return e===m||e===N}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return w&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var j=d()?function(e){var r,n,t,u,i;if(null==e)return g.call(e);n=e[_],i=_,r=null!=(u=e)&&A.call(u,i);try{e[_]=void 0}catch(r){return g.call(e)}return t=g.call(e),r?e[_]=n:delete e[_],t}:function(e){return g.call(e)},U="function"==typeof Uint32Array;var O="function"==typeof Uint32Array?Uint32Array:null;var E,S="function"==typeof Uint32Array?Uint32Array:void 0;E=function(){var e,r,n;if("function"!=typeof O)return!1;try{r=new O(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(U&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?S:function(){throw new Error("not implemented")};var I=E,T="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null;var k,P="function"==typeof Float64Array?Float64Array:void 0;k=function(){var e,r,n;if("function"!=typeof F)return!1;try{r=new F([1,3.14,-3.14,NaN]),n=r,e=(T&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?P:function(){throw new Error("not implemented")};var G=k,H="function"==typeof Uint8Array;var V="function"==typeof Uint8Array?Uint8Array:null;var x,M="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var e,r,n;if("function"!=typeof V)return!1;try{r=new V(r=[1,3.14,-3.14,256,257]),n=r,e=(H&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?M:function(){throw new Error("not implemented")};var L=x,W="function"==typeof Uint16Array;var q="function"==typeof Uint16Array?Uint16Array:null;var Y,C="function"==typeof Uint16Array?Uint16Array:void 0;Y=function(){var e,r,n;if("function"!=typeof q)return!1;try{r=new q(r=[1,3.14,-3.14,65536,65537]),n=r,e=(W&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?C:function(){throw new Error("not implemented")};var z,B={uint16:Y,uint8:L};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new G(1),X=new I(R.buffer),Z=Q.HIGH,$=Q.LOW;function ee(e,r){return R[0]=r,e[0]=X[Z],e[1]=X[$],e}function re(e,r){return 1===arguments.length?ee([0,0],e):ee(e,r)}var ne,te,ue=!0===K?1:0,ie=new G(1),oe=new I(ie.buffer);function fe(e){return ie[0]=e,oe[ue]}!0===K?(ne=1,te=0):(ne=0,te=1);var ae={HIGH:ne,LOW:te},ce=new G(1),ve=new I(ce.buffer),le=ae.HIGH,se=ae.LOW;function ye(e,r){return ve[le]=e,ve[se]=r,ce[0]}var pe=[0,0];function be(e,r){var n,t;return re(pe,e),n=pe[0],n&=2147483647,t=fe(r),ye(n|=t&=2147483648,pe[1])}function Ne(e){return Math.abs(e)}function me(e,r){return l(r)||h(r)?(e[0]=r,e[1]=0,e):0!==r&&Ne(r)<22250738585072014e-324?(e[0]=4503599627370496*r,e[1]=-52,e):(e[0]=r,e[1]=0,e)}var he=[0,0],we=[0,0];function de(e,r){var n,t;return 0===r||0===e||l(e)||h(e)?e:(function(e,r){1===arguments.length?me([0,0],e):me(e,r)}(he,e),r+=he[1],r+=function(e){var r=fe(e);return(r=(2146435072&r)>>>20)-1023|0}(e=he[0]),r<-1074?be(0,e):r>1023?e<0?N:m:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,re(we,e),n=we[0],n&=2148532223,t*ye(n|=r+1023<<20,we[1])))}function ge(e){var r;return l(e)||e===m?e:e===N?0:e>709.782712893384?m:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<3.725290298461914e-9?1+e:function(e,r,n){var t,u,i,o;return de(1-(r-(t=e-r)*(i=t-(u=t*t)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-e),n)}(e-.6931471803691238*(r=p(e<0?1.4426950408889634*e-.5:1.4426950408889634*e+.5)),1.9082149292705877e-10*r,r)}function Ae(e,r,n){return l(e)||l(r)||l(n)||n<=0?NaN:ge(-ge(-((e-r)/n)))}function _e(e){return function(){return e}}function je(e,r,n){a(e,r,{configurable:!1,enumerable:!1,get:n})}function Ue(e){return"number"==typeof e}v(Ae,"factory",(function(e,r){return l(e)||l(r)||r<=0?_e(NaN):function(n){if(l(n))return NaN;return ge(-ge(-((n-e)/r)))}}));var Oe=b.prototype.toString;var Ee=d();function Se(e){return"object"==typeof e&&(e instanceof b||(Ee?function(e){try{return Oe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===j(e)))}function Ie(e){return Ue(e)||Se(e)}function Te(e){return Ue(e)&&e>0}function Fe(e){return Se(e)&&e.valueOf()>0}function ke(e){return Te(e)||Fe(e)}function Pe(e){return Ue(e)&&l(e)}function Ge(e){return Se(e)&&l(e.valueOf())}function He(e){return Pe(e)||Ge(e)}v(Ie,"isPrimitive",Ue),v(Ie,"isObject",Se),v(ke,"isPrimitive",Te),v(ke,"isObject",Fe),v(He,"isPrimitive",Pe),v(He,"isObject",Ge);var Ve=!0===K?1:0,xe=new G(1),Me=new I(xe.buffer);function Le(e,r){return xe[0]=e,Me[Ve]=r>>>0,xe[0]}var We=.6931471803691238,qe=1.9082149292705877e-10;function Ye(e){var r,n,t,u,i,o,f,a,c,v,s,y;return 0===e?N:l(e)||e<0?NaN:(i=0,(n=fe(e))<1048576&&(i-=54,n=fe(e*=0x40000000000000)),n>=2146435072?e+e:(i+=(n>>20)-1023|0,i+=(a=(n&=1048575)+614244&1048576|0)>>20|0,f=(e=Le(e,n|1072693248^a))-1,(1048575&2+n)<3?0===f?0===i?0:i*We+i*qe:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*We-(o-i*qe-f)):(a=n-398458|0,c=440401-n|0,u=(s=(y=(v=f/(2+f))*v)*y)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(s),t=y*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(s),o=t+u,(a|=c)>0?(r=.5*f*f,0===i?f-(r-v*(r+o)):i*We-(r-(v*(r+o)+i*qe)-f)):0===i?f-v*(f-o):i*We-(v*(f-o)-i*qe-f))))}var Ce=.5772156649015329;function ze(e,r){return l(e)||l(r)||r<=0?NaN:Ye(r)+Ce+1}function Be(e,r){return l(e)||l(r)||r<=0?NaN:2.4}function De(e,r){return l(e)||l(r)||r<=0?NaN:e+r*Ce}var Je=.6931471805599453,Ke=Ye(Je);function Qe(e,r){return l(e)||l(r)||r<=0?NaN:e-r*Ke}function Re(e,r){return l(e)||l(r)||r<=0?NaN:e}var Xe=Math.sqrt;function Ze(e){return s(e)===e}function $e(e,r){var n,t,u,i;return u=(i=e*e)*i,t=i*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(i),t+=u*u*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(i),(u=1-(n=.5*i))+(1-u-n+(i*t-e*r))}var er=-.16666666666666632;function rr(e,r){var n,t,u;return n=.00833333333332249+(u=e*e)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*e,0===r?e+t*(er+u*n):e-(u*(.5*r-t*n)-r-t*er)}var nr=!0===K?0:1,tr=new G(1),ur=new I(tr.buffer);function ir(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var or=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],fr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ar=5.960464477539063e-8,cr=ir(20),vr=ir(20),lr=ir(20),sr=ir(20);function yr(e,r,n,t,u,i,o,f,a){var c,v,l,y,p,b,N,m,h;for(y=i,h=t[n],m=n,p=0;m>0;p++)v=ar*h|0,sr[p]=h-16777216*v|0,h=t[m-1]+v,m-=1;if(h=de(h,u),h-=8*s(.125*h),h-=N=0|h,l=0,u>0?(N+=p=sr[n-1]>>24-u,sr[n-1]-=p<<24-u,l=sr[n-1]>>23-u):0===u?l=sr[n-1]>>23:h>=.5&&(l=2),l>0){for(N+=1,c=0,p=0;p<n;p++)m=sr[p],0===c?0!==m&&(c=1,sr[p]=16777216-m):sr[p]=16777215-m;if(u>0)switch(u){case 1:sr[n-1]&=8388607;break;case 2:sr[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=de(1,u)))}if(0===h){for(m=0,p=n-1;p>=i;p--)m|=sr[p];if(0===m){for(b=1;0===sr[i-b];b++);for(p=n+1;p<=n+b;p++){for(a[f+p]=or[o+p],v=0,m=0;m<=f;m++)v+=e[m]*a[f+(p-m)];t[p]=v}return yr(e,r,n+=b,t,u,i,o,f,a)}}if(0===h)for(n-=1,u-=24;0===sr[n];)n-=1,u-=24;else(h=de(h,-u))>=16777216?(v=ar*h|0,sr[n]=h-16777216*v|0,u+=24,sr[n+=1]=v):sr[n]=0|h;for(v=de(1,u),p=n;p>=0;p--)t[p]=v*sr[p],v*=ar;for(p=n;p>=0;p--){for(v=0,b=0;b<=y&&b<=n-p;b++)v+=fr[b]*t[p+b];lr[n-p]=v}for(v=0,p=n;p>=0;p--)v+=lr[p];for(r[0]=0===l?v:-v,v=lr[0]-v,p=1;p<=n;p++)v+=lr[p];return r[1]=0===l?v:-v,7&N}function pr(e,r,n,t){var u,i,o,f,a,c,v;for(4,(i=(n-3)/24|0)<0&&(i=0),f=n-24*(i+1),c=i-(o=t-1),v=o+4,a=0;a<=v;a++)cr[a]=c<0?0:or[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=o;c++)u+=e[c]*cr[o+(a-c)];vr[a]=u}return 4,yr(e,r,4,vr,f,4,i,o,cr)}var br=Math.round;function Nr(e,r,n){var t,u,i,o,f;return i=e-1.5707963267341256*(t=br(.6366197723675814*e)),o=6077100506506192e-26*t,f=r>>20|0,n[0]=i-o,f-(fe(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((u=i)-(i=u-(o=6077100506303966e-26*t))-o),n[0]=i-o,f-(fe(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((u=i)-(i=u-(o=20222662487111665e-37*t))-o),n[0]=i-o)),n[1]=i-n[0]-o,t}var mr=1.5707963267341256,hr=6077100506506192e-26,wr=2*hr,dr=4*hr,gr=[0,0,0],Ar=[0,0];function _r(e,r){var n,t,u,i,o,f,a;if((u=2147483647&fe(e)|0)<=1072243195)return r[0]=e,r[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Nr(e,u,r):u<=1073928572?e>0?(a=e-mr,r[0]=a-hr,r[1]=a-r[0]-hr,1):(a=e+mr,r[0]=a+hr,r[1]=a-r[0]+hr,-1):e>0?(a=e-2*mr,r[0]=a-wr,r[1]=a-r[0]-wr,2):(a=e+2*mr,r[0]=a+wr,r[1]=a-r[0]+wr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Nr(e,u,r):e>0?(a=e-3*mr,r[0]=a-1.8231301519518578e-10,r[1]=a-r[0]-1.8231301519518578e-10,3):(a=e+3*mr,r[0]=a+1.8231301519518578e-10,r[1]=a-r[0]+1.8231301519518578e-10,-3):1075388923===u?Nr(e,u,r):e>0?(a=e-4*mr,r[0]=a-dr,r[1]=a-r[0]-dr,4):(a=e+4*mr,r[0]=a+dr,r[1]=a-r[0]+dr,-4);if(u<1094263291)return Nr(e,u,r);if(u>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return tr[0]=e,ur[nr]}(e),a=ye(u-((t=(u>>20)-1046)<<20|0),n),o=0;o<2;o++)gr[o]=0|a,a=16777216*(a-gr[o]);for(gr[2]=a,i=3;0===gr[i-1];)i-=1;return f=pr(gr,Ar,t,i),e<0?(r[0]=-Ar[0],r[1]=-Ar[1],-f):(r[0]=Ar[0],r[1]=Ar[1],f)}var jr=[0,0];function Ur(e){var r;if(r=fe(e),(r&=2147483647)<=1072243195)return r<1045430272?e:rr(e,0);if(r>=2146435072)return NaN;switch(3&_r(e,jr)){case 0:return rr(jr[0],jr[1]);case 1:return $e(jr[0],jr[1]);case 2:return-rr(jr[0],jr[1]);default:return-$e(jr[0],jr[1])}}var Or=3.141592653589793;function Er(e){return Ze(e/2)}function Sr(e){return Er(e>0?e-1:e+1)}var Ir=!0===K?0:1,Tr=new G(1),Fr=new I(Tr.buffer);function kr(e,r){return Tr[0]=e,Fr[Ir]=r>>>0,Tr[0]}function Pr(e){return 0|e}var Gr=[1,1.5],Hr=[0,.5849624872207642],Vr=[0,1.350039202129749e-8];var xr=1e300,Mr=[0,0],Lr=[0,0];function Wr(e,r){var n,t,u,i,o,f,a,c,v,s,y,p,b,w;if(l(e)||l(r))return NaN;if(re(Mr,r),o=Mr[0],0===Mr[1]){if(0===r)return 1;if(1===r)return e;if(-1===r)return 1/e;if(.5===r)return Xe(e);if(-.5===r)return 1/Xe(e);if(2===r)return e*e;if(3===r)return e*e*e;if(4===r)return(e*=e)*e;if(h(r))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:Ne(e)<1==(r===m)?0:m}(e,r)}if(re(Mr,e),i=Mr[0],0===Mr[1]){if(0===i)return function(e,r){return r===N?m:r===m?0:r>0?Sr(r)?e:0:Sr(r)?be(m,e):m}(e,r);if(1===e)return 1;if(-1===e&&Sr(r))return-1;if(h(e))return e===N?Wr(-0,-r):r<0?0:m}if(e<0&&!1===Ze(r))return(e-e)/(e-e);if(u=Ne(e),n=2147483647&i|0,t=2147483647&o|0,a=o>>>31|0,f=(f=i>>>31|0)&&Sr(r)?-1:1,t>1105199104){if(t>1139802112)return function(e,r){return(2147483647&fe(e))<=1072693247?r<0?1/0:0:r>0?1/0:0}(e,r);if(n<1072693247)return 1===a?f*xr*xr:1e-300*f*1e-300;if(n>1072693248)return 0===a?f*xr*xr:1e-300*f*1e-300;y=function(e,r){var n,t,u,i,o,f;return n=(o=1.9259629911266175e-8*(u=r-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((t=kr(t=(i=1.4426950216293335*u)+o,0))-i),e[0]=t,e[1]=n,e}(Lr,u)}else y=function(e,r,n){var t,u,i,o,f,a,c,v,l,s,y,p,b,N,m,h,w,d,g,A,_;return d=0,n<1048576&&(d-=53,n=fe(r*=9007199254740992)),d+=(n>>20)-1023|0,n=1072693248|(g=1048575&n|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,n-=1048576),o=kr(u=(h=(r=Le(r,n))-(c=Gr[A]))*(w=1/(r+c)),0),t=524288+(n>>1|536870912),a=Le(0,t+=A<<18),m=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=kr(a=3+(i=o*o)+(m+=(f=w*(h-o*a-o*(r-(a-c))))*(o+u)),0),b=(y=-7.028461650952758e-9*(l=kr(l=(h=o*a)+(w=f*a+(m-(a-3-i))*u),0))+.9617966939259756*(w-(l-h))+Vr[A])-((p=kr(p=(s=.9617967009544373*l)+y+(v=Hr[A])+(N=d),0))-N-v-s),e[0]=p,e[1]=b,e}(Lr,u,n);if(s=(r-(c=kr(r,0)))*y[0]+r*y[1],v=c*y[0],re(Mr,p=s+v),b=Pr(Mr[0]),w=Pr(Mr[1]),b>=1083179008){if(0!=(b-1083179008|w))return f*xr*xr;if(s+8008566259537294e-32>p-v)return f*xr*xr}else if((2147483647&b)>=1083231232){if(0!=(b-3230714880|w))return 1e-300*f*1e-300;if(s<=p-v)return 1e-300*f*1e-300}return p=function(e,r,n){var t,u,i,o,f,a,c,v,l,s,y;return s=((l=2147483647&e|0)>>20)-1023|0,v=0,l>1071644672&&(t=((v=e+(1048576>>s+1)>>>0)&~(1048575>>(s=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-s>>>0,e<0&&(v=-v),r-=i=Le(0,t)),e=Pr(e=fe(c=1-((c=(o=.6931471824645996*(i=kr(i=n+r,0)))+(f=(n-(i-r))*Je+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(y=i)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-o))+c*a)-c))),(e+=v<<20>>>0)>>20<=0?de(c,v):Le(c,e)}(b,v,s),f*p}function qr(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=ge(e),2.5066282746310007*(n=e>143.01608?(t=Wr(e,.5*e-.25))*(t/n):Wr(e,e-.5)/n)*r}function Yr(e,r){return r/((1+Ce*e)*e)}function Cr(e){var r,n,t,u;if(Ze(e)&&e<0||e===N||l(e))return NaN;if(0===e)return function(e){return 0===e&&1/e===N}(e)?N:m;if(e>171.61447887182297)return m;if(e<-170.5674972726612)return 0;if((n=Ne(e))>33)return e>=0?qr(e):(r=0==(1&(t=s(n)))?-1:1,(u=n-t)>.5&&(u=n-(t+=1)),u=n*Ur(Or*u),r*Or/(Ne(u)*qr(n)));for(u=1;e>=3;)u*=e-=1;for(;e<0;){if(e>-1e-9)return Yr(e,u);u/=e,e+=1}for(;e<2;){if(e<1e-9)return Yr(e,u);u/=e,e+=1}return 2===e?u:u*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(e-=2)}var zr=[0,0];function Br(e){var r;if(r=fe(e),(r&=2147483647)<=1072243195)return r<1044381696?1:$e(e,0);if(r>=2146435072)return NaN;switch(3&_r(e,zr)){case 0:return $e(zr[0],zr[1]);case 1:return-rr(zr[0],zr[1]);case 2:return-$e(zr[0],zr[1]);default:return rr(zr[0],zr[1])}}function Dr(e){var r,n;return l(e)||h(e)?NaN:0===(r=Ne(n=e%2))||1===r?be(0,n):r<.25?Ur(Or*n):r<.75?be(Br(Or*(r=.5-r)),n):r<1.25?(n=be(1,n)-n,Ur(Or*n)):r<1.75?-be(Br(Or*(r-=1.5)),n):(n-=be(2,n),Ur(Or*n))}var Jr=1.4616321449683622,Kr=1.4616321449683622;var Qr=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],Rr=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],Xr=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290];var Zr=12*Xe(6)*function e(r){var n,t,u,i,o,f,a,c,v;if(l(r))return NaN;if(1===r)return NaN;if(r>=56)return 1;if(Ze(r)&&(i=0|r)===r){if(!(i<0))return 0==(1&i)?Rr[i/2]:Qr[(i-3)/2];if(0==(1&(u=0|-i)))return 0;if((f=(u+1)/2|0)<=129)return-Xr[f]/(u+1)}return Ne(r)<1.4901161193847656e-8?-.5-.9189385332046728*r:(t=1-r,r<0?s(r/2)===r/2?0:(n=r,r=t,t=n,r>170?(n=2*Dr(.5*t)*e(r),o=function(e){var r,n,t,u,i,o,f,a,c,v,s,y,b;if(l(e)||h(e))return e;if(0===e)return m;if(e<0?(r=!0,e=-e):r=!1,e<8470329472543003e-37)return-Ye(e);if(r){if(e>=4503599627370496)return m;if(0===(c=Dr(e)))return m;n=Ye(Or/Ne(c*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(b=-Ye(e),e>=Jr-1+.27?(s=1-e,t=0):e>=Jr-1-.27?(s=e-(Kr-1),t=1):(s=e,t=2)):(b=0,e>=Jr+.27?(s=2-e,t=0):e>=Jr-.27?(s=e-Kr,t=1):(s=e-1,t=2)),t){case 0:o=.07721566490153287+(y=s*s)*function(e){return 0===e?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+25214456545125733e-21*e)))}(y),i=y*(.3224670334241136+y*function(e){return 0===e?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+44864094961891516e-21*e)))}(y)),b+=(f=s*o+i)-.5*s;break;case 1:o=.48383612272381005+(v=(y=s*s)*s)*function(e){return 0===e?-.032788541075985965:e*(.006100538702462913+e*(.00031563207090362595*e-.0014034646998923284))-.032788541075985965}(v),i=v*function(e){return 0===e?.01797067508118204:.01797067508118204+e*(e*(.000881081882437654+-.00031275416837512086*e)-.0036845201678113826)}(v)-.1475877229945939,u=.06462494023913339+v*function(e){return 0===e?-.010314224129834144:e*(.0022596478090061247+e*(.0003355291926355191*e-.0005385953053567405))-.010314224129834144}(v),b+=(f=y*o-(-3638676997039505e-33-v*(i+s*u)))-.12148629053584961;break;case 2:o=s*(s*function(e){return 0===e?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+.013381091853678766*e)))}(s)-.07721566490153287),i=1+s*function(e){return 0===e?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+.003217092422824239*e)))}(s),b+=-.5*s+o/i}else if(e<8)switch(f=(s=e-(t=p(e)))*(s*function(e){return 0===e?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+3194753265841009e-20*e))))}(s)-.07721566490153287),a=1+s*function(e){return 0===e?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+7326684307446256e-21*e))))}(s),b=.5*s+f/a,y=1,t){case 7:y*=s+6;case 6:y*=s+5;case 5:y*=s+4;case 4:y*=s+3;case 3:b+=Ye(y*=s+2)}else e<0x400000000000000?(c=Ye(e),v=.4189385332046727+(y=1/e)*function(e){return 0===e?.08333333333333297:.08333333333333297+e*(e*(.0007936505586430196+e*(e*(.0008363399189962821+-.0016309293409657527*e)-.00059518755745034))-.0027777777772877554)}(s=y*y),b=(e-.5)*(c-1)+v):b=e*(Ye(e)-1);return r&&(b=n-b),b}(r),(o-=r*Ye(6.283185307179586))>709?n<0?N:m:n*ge(o)):2*Dr(.5*t)*Wr(6.283185307179586,-r)*Cr(r)*e(r)):r<1?(n=0===(a=t)?.2433929443359375:((a<0?-a:a)<=1?(c=.2433929443359375+a*(a*(.055761621477604675+a*(a*(.0004515345286457964+-9332412703570615e-21*a)-.003209124988790859))-.4909247051635357),v=1+a*(a*(.04196762233099861+a*(a*(.00024978985622317937+-10185578841856403e-21*a)-.00413421406552171))-.27996033431034445)):(c=(a=1/a)*(.0004515345286457964+a*(a*(.055761621477604675+a*(.2433929443359375*a-.4909247051635357))-.003209124988790859))-9332412703570615e-21,v=a*(.00024978985622317937+a*(a*(.04196762233099861+a*(1*a-.27996033431034445))-.00413421406552171))-10185578841856403e-21),c/v),n-=1.2433929443359375,n+=t,n/=t):r<=2?(n=1/(t=-t))+function(e){var r,n;return 0===e?.5772156649015329:((e<0?-e:e)<=1?(r=.5772156649015329+e*(.24321064694010716+e*(.04173646739882165+e*(.003902520870728433+e*(.0002496063671518772+1101084409767329e-20*e)))),n=1+e*(.29520127712663174+e*(.043460910607305496+e*(.004349305820858264+e*(.0002557842261404885+10991819782396113e-21*e))))):(r=1101084409767329e-20+(e=1/e)*(.0002496063671518772+e*(.003902520870728433+e*(.04173646739882165+e*(.24321064694010716+.5772156649015329*e)))),n=10991819782396113e-21+e*(.0002557842261404885+e*(.004349305820858264+e*(.043460910607305496+e*(.29520127712663174+1*e))))),r/n)}(t):r<=4?(n=.6986598968505859+1/-t)+function(e){var r,n;return 0===e?-.053725830002359504:((e<0?-e:e)<=1?(r=e*(.04451634732923656+e*(.012867767353451996+e*(.0009754177045739176+e*(7698751015736541e-20+e*(3280325100003831e-21+0*e)))))-.053725830002359504,n=1+e*(.3338319455303405+e*(.048779843129140764+e*(.0047903970857355845+e*(.00027077670395633634+e*(10695186753205734e-21+2.3627662397497864e-8*e)))))):(r=0+(e=1/e)*(3280325100003831e-21+e*(7698751015736541e-20+e*(.0009754177045739176+e*(.012867767353451996+e*(.04451634732923656+-.053725830002359504*e))))),n=2.3627662397497864e-8+e*(10695186753205734e-21+e*(.00027077670395633634+e*(.0047903970857355845+e*(.048779843129140764+e*(.3338319455303405+1*e)))))),r/n)}(r-2):r<=7?(n=function(e){var r,n;return 0===e?-2.497101906022594:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(0+e*(0+0*e))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+e*(.7060390259377451+e*(.15739599649558628+e*(.010611795097684508+e*(e*(49340956392759e-19+e*(e*(7.188337293654598e-9+-1.1292001134749475e-10*e)-2.3405548702528722e-7))-36910273311764616e-21))))):(r=0+(e=1/e)*(0+e*(0+e*(e*(e*(e*(e*(-2.497101906022594*e-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=e*(7.188337293654598e-9+e*(e*(49340956392759e-19+e*(e*(.010611795097684508+e*(.15739599649558628+e*(.7060390259377451+1*e)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),r/n)}(r-4),1+ge(n)):r<15?(n=function(e){var r,n;return 0===e?-4.785580284951356:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(.0011514092388917874+e*(6399492042131645e-20+e*(1393489324453249e-21+e*(0+0*e))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+e*(.24434533737818856+e*(.008733707544922887+e*(e*(e*(e*(4.710012640030765e-9+e*(6998415452048457e-28*e-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(r=0+(e=1/e)*(0+e*(1393489324453249e-21+e*(6399492042131645e-20+e*(.0011514092388917874+e*(e*(e*(-4.785580284951356*e-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+e*(e*(4.710012640030765e-9+e*(e*(e*(e*(.008733707544922887+e*(.24434533737818856+1*e))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),r/n)}(r-7),1+ge(n)):r<36?(n=function(e){var r,n;return 0===e?-10.39489505733089:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(-8.214657090954655e-9*e-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+e*(.2081963335726719+e*(.019568765731720502+e*(.0011107963810248593+e*(40850774626603926e-21+e*(9.555611230656935e-7+e*(1.185071534740229e-8+2226094836273526e-30*e))))))):(r=(e=1/e)*(e*(e*(e*(e*(e*(-10.39489505733089*e-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+e*(1.185071534740229e-8+e*(9.555611230656935e-7+e*(40850774626603926e-21+e*(.0011107963810248593+e*(.019568765731720502+e*(.2081963335726719+1*e))))))),r/n)}(r-15),1+ge(n)):1+Wr(2,-r))}(3)/(Or*Or*Or);function $r(e,r){return l(e)||l(r)||r<=0?NaN:Zr}var en=Xe(6);function rn(e,r){return l(e)||l(r)||r<=0?NaN:Or/en*r}function nn(e,r){return l(e)||l(r)||r<=0?NaN:1.6449340668482264*r*r}function tn(e,r,n){return l(e)||l(r)||l(n)||n<=0?NaN:-ge(-((e-r)/n))}function un(e,r,n){var t;return l(e)||l(r)||l(n)||n<=0?NaN:e===N?0:-(t=(e-r)/n)-ge(-t)-Ye(n)}function on(e,r,n){return l(e)||l(r)||l(n)||n<=0||e>=1/n?NaN:Cr(1-n*e)*ge(r*e)}function fn(e,r,n){var t;return l(e)||l(r)||l(n)||n<=0?NaN:e===N?0:1/n*ge(-(t=(e-r)/n)-ge(-t))}function an(e,r,n){return l(r)||l(n)||l(e)||n<=0||e<0||e>1?NaN:r-n*Ye(-Ye(e))}function cn(){var e,r;if(!(this instanceof cn))return 0===arguments.length?new cn:new cn(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!Ue(r=arguments[0])||He(r))throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `"+r+"`");if(!Te(e))throw new TypeError("invalid argument. Scale parameter `beta` must be a positive number. Value: `"+e+"`")}else r=0,e=1;return a(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!Ue(e)||He(e))throw new TypeError("invalid value. Must be a number primitive. Value: `"+e+"`");r=e}}),a(this,"beta",{configurable:!1,enumerable:!0,get:function(){return e},set:function(r){if(!Te(r))throw new TypeError("invalid value. Must be a positive number. Value: `"+r+"`");e=r}}),this}v(tn,"factory",(function(e,r){return l(e)||l(r)||r<=0?_e(NaN):function(n){if(l(n))return NaN;return-ge(-((n-e)/r))}})),v(un,"factory",(function(e,r){var n;return l(e)||l(r)||r<=0?_e(NaN):(n=Ye(r),function(t){var u;if(l(t))return NaN;if(t===N)return 0;return-(u=(t-e)/r)-ge(-u)-n})})),v(on,"factory",(function(e,r){return l(e)||l(r)||r<=0?_e(NaN):function(n){if(n>=1/r)return NaN;return Cr(1-r*n)*ge(e*n)}})),v(fn,"factory",(function(e,r){return l(e)||l(r)||r<=0?_e(NaN):function(n){var t;if(l(n))return NaN;if(n===N)return 0;return 1/r*ge(-(t=(n-e)/r)-ge(-t))}})),v(an,"factory",(function(e,r){return l(e)||l(r)||r<=0?_e(NaN):function(n){if(l(n)||n<0||n>1)return NaN;return e-r*Ye(-Ye(n))}})),je(cn.prototype,"entropy",(function(){return ze(this.mu,this.beta)})),je(cn.prototype,"kurtosis",(function(){return Be(this.mu,this.beta)})),je(cn.prototype,"mean",(function(){return De(this.mu,this.beta)})),je(cn.prototype,"median",(function(){return Qe(this.mu,this.beta)})),je(cn.prototype,"mode",(function(){return Re(this.mu,this.beta)})),je(cn.prototype,"skewness",(function(){return $r(this.mu,this.beta)})),je(cn.prototype,"stdev",(function(){return rn(this.mu,this.beta)})),je(cn.prototype,"variance",(function(){return nn(this.mu,this.beta)})),v(cn.prototype,"cdf",(function(e){return Ae(e,this.mu,this.beta)})),v(cn.prototype,"logcdf",(function(e){return tn(e,this.mu,this.beta)})),v(cn.prototype,"logpdf",(function(e){return un(e,this.mu,this.beta)})),v(cn.prototype,"mgf",(function(e){return on(e,this.mu,this.beta)})),v(cn.prototype,"pdf",(function(e){return fn(e,this.mu,this.beta)})),v(cn.prototype,"quantile",(function(e){return an(e,this.mu,this.beta)}));var vn={};c(vn,"cdf",Ae),c(vn,"Gumbel",cn),c(vn,"entropy",ze),c(vn,"kurtosis",Be),c(vn,"logcdf",tn),c(vn,"logpdf",un),c(vn,"mean",De),c(vn,"median",Qe),c(vn,"mgf",on),c(vn,"mode",Re),c(vn,"pdf",fn),c(vn,"quantile",an),c(vn,"skewness",$r),c(vn,"stdev",rn),c(vn,"variance",nn);export{cn as Gumbel,Ae as cdf,vn as default,ze as entropy,Be as kurtosis,tn as logcdf,un as logpdf,De as mean,Qe as median,on as mgf,Re as mode,fn as pdf,an as quantile,$r as skewness,rn as stdev,nn as variance};
//# sourceMappingURL=mod.js.map
