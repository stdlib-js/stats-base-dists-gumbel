// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,t=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,o=n.__lookupSetter__,f=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,f){var c,s,l,p;if("object"!=typeof e||null===e||"[object Array]"===t.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof f||null===f||"[object Array]"===t.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(a.call(e,r)||o.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=f.value,e.__proto__=c):e[r]=f.value),l="get"in f,p="set"in f,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(e,r,f.get),p&&u&&u.call(e,r,f.set),e};function c(e,r,n){f(e,r,{configurable:!1,enumerable:!0,writable:!1,value:n})}function s(e,r,n){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(e){return e!=e}var p=Math.floor,v=Math.ceil;function y(e){return e<0?v(e):p(e)}var h=Number,g=h.NEGATIVE_INFINITY,b=Number.POSITIVE_INFINITY,d=1023;function m(e){return e===b||e===g}var w=2147483647,N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function A(){return N&&"symbol"==typeof Symbol.toStringTag}var _,E=Object.prototype.toString,k=Object.prototype.hasOwnProperty,x="function"==typeof Symbol?Symbol.toStringTag:"",S=A()?function(e){var r,n,t,i,u;if(null==e)return E.call(e);n=e[x],u=x,r=null!=(i=e)&&k.call(i,u);try{e[x]=void 0}catch(r){return E.call(e)}return t=E.call(e),r?e[x]=n:delete e[x],t}:function(e){return E.call(e)},U="function"==typeof Uint32Array,j="function"==typeof Uint32Array?Uint32Array:null,I="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var e,r,n;if("function"!=typeof j)return!1;try{r=new j(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(U&&n instanceof Uint32Array||"[object Uint32Array]"===S(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?I:function(){throw new Error("not implemented")};var T,F=_,O="function"==typeof Float64Array,V="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;T=function(){var e,r,n;if("function"!=typeof V)return!1;try{r=new V([1,3.14,-3.14,NaN]),n=r,e=(O&&n instanceof Float64Array||"[object Float64Array]"===S(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?G:function(){throw new Error("not implemented")};var P,$=T,H="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,M="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var e,r,n;if("function"!=typeof L)return!1;try{r=new L(r=[1,3.14,-3.14,256,257]),n=r,e=(H&&n instanceof Uint8Array||"[object Uint8Array]"===S(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?M:function(){throw new Error("not implemented")};var W,C=P,R="function"==typeof Uint16Array,Z="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var e,r,n;if("function"!=typeof Z)return!1;try{r=new Z(r=[1,3.14,-3.14,65536,65537]),n=r,e=(R&&n instanceof Uint16Array||"[object Uint16Array]"===S(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?q:function(){throw new Error("not implemented")};var X,Y={uint16:W,uint8:C};(X=new Y.uint16(1))[0]=4660;var z,B,D=52===new Y.uint8(X.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new $(1),Q=new F(K.buffer),ee=J.HIGH,re=J.LOW;function ne(e,r,n,t){return K[0]=e,r[t]=Q[ee],r[t+n]=Q[re],r}function te(e){return ne(e,[0,0],1,0)}s(te,"assign",ne);var ie,ue,ae=!0===D?1:0,oe=new $(1),fe=new F(oe.buffer);function ce(e){return oe[0]=e,fe[ae]}!0===D?(ie=1,ue=0):(ie=0,ue=1);var se={HIGH:ie,LOW:ue},le=new $(1),pe=new F(le.buffer),ve=se.HIGH,ye=se.LOW;function he(e,r){return pe[ve]=e,pe[ye]=r,le[0]}var ge=[0,0];function be(e,r){var n,t;return te.assign(e,ge,1,0),n=ge[0],n&=w,t=ce(r),he(n|=t&=2147483648,ge[1])}function de(e){return Math.abs(e)}function me(e,r,n,t){return l(e)||m(e)?(r[t]=e,r[t+n]=0,r):0!==e&&de(e)<22250738585072014e-324?(r[t]=4503599627370496*e,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}s((function(e){return me(e,[0,0],1,0)}),"assign",me);var we=[0,0],Ne=[0,0];function Ae(e,r){var n,t;return 0===r||0===e||l(e)||m(e)?e:(me(e,we,1,0),r+=we[1],r+=function(e){var r=ce(e);return(r=(2146435072&r)>>>20)-d|0}(e=we[0]),r<-1074?be(0,e):r>1023?e<0?g:b:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,te.assign(e,Ne,1,0),n=Ne[0],n&=2148532223,t*he(n|=r+d<<20,Ne[1])))}var _e=1.4426950408889634,Ee=1/(1<<28);function ke(e){var r;return l(e)||e===b?e:e===g?0:e>709.782712893384?b:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<Ee?1+e:function(e,r,n){var t,i,u,a;return Ae(1-(r-(t=e-r)*(u=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-u)-e),n)}(e-.6931471803691238*(r=y(e<0?_e*e-.5:_e*e+.5)),1.9082149292705877e-10*r,r)}function xe(e,r,n){return l(e)||l(r)||l(n)||n<=0?NaN:ke(-ke(-(e-r)/n))}function Se(e){return function(){return e}}function Ue(e,r,n){f(e,r,{configurable:!1,enumerable:!1,get:n})}function je(e){return"number"==typeof e}s(xe,"factory",(function(e,r){return l(e)||l(r)||r<=0?Se(NaN):function(n){return l(n)?NaN:ke(-ke(-(n-e)/r))}}));var Ie=h.prototype.toString,Te=A();function Fe(e){return"object"==typeof e&&(e instanceof h||(Te?function(e){try{return Ie.call(e),!0}catch(e){return!1}}(e):"[object Number]"===S(e)))}function Oe(e){return je(e)||Fe(e)}function Ve(e){return je(e)&&e>0}function Ge(e){return Fe(e)&&e.valueOf()>0}function Pe(e){return Ve(e)||Ge(e)}function $e(e){return je(e)&&l(e)}function He(e){return Fe(e)&&l(e.valueOf())}function Le(e){return $e(e)||He(e)}s(Oe,"isPrimitive",je),s(Oe,"isObject",Fe),s(Pe,"isPrimitive",Ve),s(Pe,"isObject",Ge),s(Le,"isPrimitive",$e),s(Le,"isObject",He);var Me=!0===D?1:0,We=new $(1),Ce=new F(We.buffer);function Re(e,r){return We[0]=e,Ce[Me]=r>>>0,We[0]}var Ze=.6931471803691238,qe=1.9082149292705877e-10,Xe=1048575;function Ye(e){var r,n,t,i,u,a,o,f,c,s,p,v;return 0===e?g:l(e)||e<0?NaN:(u=0,(n=ce(e))<1048576&&(u-=54,n=ce(e*=0x40000000000000)),n>=2146435072?e+e:(u+=(n>>20)-d|0,u+=(f=614244+(n&=Xe)&1048576|0)>>20|0,o=(e=Re(e,n|1072693248^f))-1,(Xe&2+n)<3?0===o?0===u?0:u*Ze+u*qe:(a=o*o*(.5-.3333333333333333*o),0===u?o-a:u*Ze-(a-u*qe-o)):(f=n-398458|0,c=440401-n|0,i=(p=(v=(s=o/(2+o))*s)*v)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(p),t=v*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(p),a=t+i,(f|=c)>0?(r=.5*o*o,0===u?o-(r-s*(r+a)):u*Ze-(r-(s*(r+a)+u*qe)-o)):0===u?o-s*(o-a):u*Ze-(s*(o-a)-u*qe-o))))}var ze=.5772156649015329;function Be(e,r){return l(e)||l(r)||r<=0?NaN:Ye(r)+ze+1}function De(e,r){return l(e)||l(r)||r<=0?NaN:2.4}function Je(e,r){return l(e)||l(r)||r<=0?NaN:e+r*ze}var Ke=.6931471805599453,Qe=Ye(Ke);function er(e,r){return l(e)||l(r)||r<=0?NaN:e-r*Qe}function rr(e,r){return l(e)||l(r)||r<=0?NaN:e}var nr=Math.sqrt;function tr(e){return p(e)===e}function ir(e,r){var n,t,i,u;return i=(u=e*e)*u,t=u*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(u),t+=i*i*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(u),(i=1-(n=.5*u))+(1-i-n+(u*t-e*r))}var ur=-.16666666666666632;function ar(e,r){var n,t,i;return n=.00833333333332249+(i=e*e)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*e,0===r?e+t*(ur+i*n):e-(i*(.5*r-t*n)-r-t*ur)}var or=!0===D?0:1,fr=new $(1),cr=new F(fr.buffer);function sr(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var lr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],pr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],vr=16777216,yr=5.960464477539063e-8,hr=sr(20),gr=sr(20),br=sr(20),dr=sr(20);function mr(e,r,n,t,i,u,a,o,f){var c,s,l,v,y,h,g,b,d;for(v=u,d=t[n],b=n,y=0;b>0;y++)s=yr*d|0,dr[y]=d-vr*s|0,d=t[b-1]+s,b-=1;if(d=Ae(d,i),d-=8*p(.125*d),d-=g=0|d,l=0,i>0?(g+=y=dr[n-1]>>24-i,dr[n-1]-=y<<24-i,l=dr[n-1]>>23-i):0===i?l=dr[n-1]>>23:d>=.5&&(l=2),l>0){for(g+=1,c=0,y=0;y<n;y++)b=dr[y],0===c?0!==b&&(c=1,dr[y]=16777216-b):dr[y]=16777215-b;if(i>0)switch(i){case 1:dr[n-1]&=8388607;break;case 2:dr[n-1]&=4194303}2===l&&(d=1-d,0!==c&&(d-=Ae(1,i)))}if(0===d){for(b=0,y=n-1;y>=u;y--)b|=dr[y];if(0===b){for(h=1;0===dr[u-h];h++);for(y=n+1;y<=n+h;y++){for(f[o+y]=lr[a+y],s=0,b=0;b<=o;b++)s+=e[b]*f[o+(y-b)];t[y]=s}return mr(e,r,n+=h,t,i,u,a,o,f)}}if(0===d)for(n-=1,i-=24;0===dr[n];)n-=1,i-=24;else(d=Ae(d,-i))>=vr?(s=yr*d|0,dr[n]=d-vr*s|0,i+=24,dr[n+=1]=s):dr[n]=0|d;for(s=Ae(1,i),y=n;y>=0;y--)t[y]=s*dr[y],s*=yr;for(y=n;y>=0;y--){for(s=0,h=0;h<=v&&h<=n-y;h++)s+=pr[h]*t[y+h];br[n-y]=s}for(s=0,y=n;y>=0;y--)s+=br[y];for(r[0]=0===l?s:-s,s=br[0]-s,y=1;y<=n;y++)s+=br[y];return r[1]=0===l?s:-s,7&g}function wr(e,r,n,t){var i,u,a,o,f,c,s;for((u=(n-3)/24|0)<0&&(u=0),o=n-24*(u+1),c=u-(a=t-1),s=a+4,f=0;f<=s;f++)hr[f]=c<0?0:lr[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=e[c]*hr[a+(f-c)];gr[f]=i}return mr(e,r,4,gr,o,4,u,a,hr)}var Nr=Math.round;function Ar(e,r,n){var t,i,u,a,o;return u=e-1.5707963267341256*(t=Nr(.6366197723675814*e)),a=6077100506506192e-26*t,o=r>>20|0,n[0]=u-a,o-(ce(n[0])>>20&2047)>16&&(a=20222662487959506e-37*t-((i=u)-(u=i-(a=6077100506303966e-26*t))-a),n[0]=u-a,o-(ce(n[0])>>20&2047)>49&&(a=84784276603689e-45*t-((i=u)-(u=i-(a=20222662487111665e-37*t))-a),n[0]=u-a)),n[1]=u-n[0]-a,t}var _r=1.5707963267341256,Er=6077100506506192e-26,kr=2*Er,xr=3*Er,Sr=4*Er,Ur=[0,0,0],jr=[0,0];function Ir(e,r){var n,t,i,u,a,o,f;if((i=2147483647&ce(e)|0)<=1072243195)return r[0]=e,r[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?Ar(e,i,r):i<=1073928572?e>0?(f=e-_r,r[0]=f-Er,r[1]=f-r[0]-Er,1):(f=e+_r,r[0]=f+Er,r[1]=f-r[0]+Er,-1):e>0?(f=e-2*_r,r[0]=f-kr,r[1]=f-r[0]-kr,2):(f=e+2*_r,r[0]=f+kr,r[1]=f-r[0]+kr,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Ar(e,i,r):e>0?(f=e-3*_r,r[0]=f-xr,r[1]=f-r[0]-xr,3):(f=e+3*_r,r[0]=f+xr,r[1]=f-r[0]+xr,-3):1075388923===i?Ar(e,i,r):e>0?(f=e-4*_r,r[0]=f-Sr,r[1]=f-r[0]-Sr,4):(f=e+4*_r,r[0]=f+Sr,r[1]=f-r[0]+Sr,-4);if(i<1094263291)return Ar(e,i,r);if(i>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return fr[0]=e,cr[or]}(e),f=he(i-((t=(i>>20)-1046)<<20|0),n),a=0;a<2;a++)Ur[a]=0|f,f=16777216*(f-Ur[a]);for(Ur[2]=f,u=3;0===Ur[u-1];)u-=1;return o=wr(Ur,jr,t,u),e<0?(r[0]=-jr[0],r[1]=-jr[1],-o):(r[0]=jr[0],r[1]=jr[1],o)}var Tr=[0,0];function Fr(e){var r;if(r=ce(e),(r&=2147483647)<=1072243195)return r<1045430272?e:ar(e,0);if(r>=2146435072)return NaN;switch(3&Ir(e,Tr)){case 0:return ar(Tr[0],Tr[1]);case 1:return ir(Tr[0],Tr[1]);case 2:return-ar(Tr[0],Tr[1]);default:return-ir(Tr[0],Tr[1])}}var Or=3.141592653589793;function Vr(e){return tr(e/2)}function Gr(e){return Vr(e>0?e-1:e+1)}var Pr=!0===D?0:1,$r=new $(1),Hr=new F($r.buffer);function Lr(e,r){return $r[0]=e,Hr[Pr]=r>>>0,$r[0]}function Mr(e){return 0|e}var Wr=1048576,Cr=[1,1.5],Rr=[0,.5849624872207642],Zr=[0,1.350039202129749e-8],qr=1048575,Xr=1048576,Yr=1083179008,zr=1e300,Br=1e-300,Dr=[0,0],Jr=[0,0];function Kr(e,r){var n,t,i,u,a,o,f,c,s,p,v,y,h,N;if(l(e)||l(r))return NaN;if(te.assign(r,Dr,1,0),a=Dr[0],0===Dr[1]){if(0===r)return 1;if(1===r)return e;if(-1===r)return 1/e;if(.5===r)return nr(e);if(-.5===r)return 1/nr(e);if(2===r)return e*e;if(3===r)return e*e*e;if(4===r)return(e*=e)*e;if(m(r))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:de(e)<1==(r===b)?0:b}(e,r)}if(te.assign(e,Dr,1,0),u=Dr[0],0===Dr[1]){if(0===u)return function(e,r){return r===g?b:r===b?0:r>0?Gr(r)?e:0:Gr(r)?be(b,e):b}(e,r);if(1===e)return 1;if(-1===e&&Gr(r))return-1;if(m(e))return e===g?Kr(-0,-r):r<0?0:b}if(e<0&&!1===tr(r))return(e-e)/(e-e);if(i=de(e),n=u&w|0,t=a&w|0,f=a>>>31|0,o=(o=u>>>31|0)&&Gr(r)?-1:1,t>1105199104){if(t>1139802112)return function(e,r){return(ce(e)&w)<=1072693247?r<0?1/0:0:r>0?1/0:0}(e,r);if(n<1072693247)return 1===f?o*zr*zr:o*Br*Br;if(n>1072693248)return 0===f?o*zr*zr:o*Br*Br;v=function(e,r){var n,t,i,u,a,o;return n=(a=1.9259629911266175e-8*(i=r-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=Lr(t=(u=1.4426950216293335*i)+a,0))-u),e[0]=t,e[1]=n,e}(Jr,i)}else v=function(e,r,n){var t,i,u,a,o,f,c,s,l,p,v,y,h,g,b,m,w,N,A,_,E;return N=0,n<Wr&&(N-=53,n=ce(r*=9007199254740992)),N+=(n>>20)-d|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,N+=1,n-=Wr),a=Lr(i=(m=(r=Re(r,n))-(c=Cr[_]))*(w=1/(r+c)),0),t=524288+(n>>1|536870912),f=Re(0,t+=_<<18),b=(u=i*i)*u*(0===(E=u)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Lr(f=3+(u=a*a)+(b+=(o=w*(m-a*f-a*(r-(f-c))))*(a+i)),0),h=(v=-7.028461650952758e-9*(l=Lr(l=(m=a*f)+(w=o*f+(b-(f-3-u))*i),0))+.9617966939259756*(w-(l-m))+Zr[_])-((y=Lr(y=(p=.9617967009544373*l)+v+(s=Rr[_])+(g=N),0))-g-s-p),e[0]=y,e[1]=h,e}(Jr,i,n);if(y=(p=(r-(c=Lr(r,0)))*v[0]+r*v[1])+(s=c*v[0]),te.assign(y,Dr,1,0),h=Mr(Dr[0]),N=Mr(Dr[1]),h>=Yr){if(0!=(h-Yr|N))return o*zr*zr;if(p+8008566259537294e-32>y-s)return o*zr*zr}else if((h&w)>=1083231232){if(0!=(h-3230714880|N))return o*Br*Br;if(p<=y-s)return o*Br*Br}return y=function(e,r,n){var t,i,u,a,o,f,c,s,l,p;return l=((s=e&w|0)>>20)-d|0,c=0,s>1071644672&&(i=Re(0,((c=e+(Xr>>l+1)>>>0)&~(qr>>(l=((c&w)>>20)-d|0)))>>>0),c=(c&qr|Xr)>>20-l>>>0,e<0&&(c=-c),r-=i),e=Mr(e=ce(f=1-((f=(u=.6931471824645996*(i=Lr(i=n+r,0)))+(a=(n-(i-r))*Ke+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=a-(f-u))+f*o)-f))),(e+=c<<20>>>0)>>20<=0?Ae(f,c):Re(f,e)}(h,s,p),o*y}function Qr(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=ke(e),2.5066282746310007*(n=e>143.01608?(t=Kr(e,.5*e-.25))*(t/n):Kr(e,e-.5)/n)*r}function en(e,r){return r/((1+ze*e)*e)}function rn(e){var r,n,t,i;if(tr(e)&&e<0||e===g||l(e))return NaN;if(0===e)return function(e){return 0===e&&1/e===g}(e)?g:b;if(e>171.61447887182297)return b;if(e<-170.5674972726612)return 0;if((n=de(e))>33)return e>=0?Qr(e):(r=0==(1&(t=p(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*Fr(Or*i),r*Or/(de(i)*Qr(n)));for(i=1;e>=3;)i*=e-=1;for(;e<0;){if(e>-1e-9)return en(e,i);i/=e,e+=1}for(;e<2;){if(e<1e-9)return en(e,i);i/=e,e+=1}return 2===e?i:i*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(e-=2)}var nn=[0,0];function tn(e){var r;if(r=ce(e),(r&=2147483647)<=1072243195)return r<1044381696?1:ir(e,0);if(r>=2146435072)return NaN;switch(3&Ir(e,nn)){case 0:return ir(nn[0],nn[1]);case 1:return-ar(nn[0],nn[1]);case 2:return-ir(nn[0],nn[1]);default:return ar(nn[0],nn[1])}}function un(e){var r,n;return l(e)||m(e)?NaN:0===(r=de(n=e%2))||1===r?be(0,n):r<.25?Fr(Or*n):r<.75?be(tn(Or*(r=.5-r)),n):r<1.25?(n=be(1,n)-n,Fr(Or*n)):r<1.75?-be(tn(Or*(r-=1.5)),n):(n-=be(2,n),Fr(Or*n))}var an=1.4616321449683622,on=1.4616321449683622,fn=6.283185307179586,cn=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],sn=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],ln=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290],pn=12*nr(6)*function e(r){var n,t,i,u,a,o,f,c,s;if(l(r))return NaN;if(1===r)return NaN;if(r>=56)return 1;if(tr(r)&&(u=0|r)===r){if(!(u<0))return 0==(1&u)?sn[u/2]:cn[(u-3)/2];if(0==(1&(i=0|-u)))return 0;if((o=(i+1)/2|0)<=129)return-ln[o]/(i+1)}return de(r)<1.4901161193847656e-8?-.5-.9189385332046728*r:(t=1-r,r<0?p(r/2)===r/2?0:(n=r,r=t,t=n,r>170?(n=2*un(.5*t)*e(r),a=function(e){var r,n,t,i,u,a,o,f,c,s,p,v,h;if(l(e)||m(e))return e;if(0===e)return b;if(e<0?(r=!0,e=-e):r=!1,e<8470329472543003e-37)return-Ye(e);if(r){if(e>=4503599627370496)return b;if(0===(c=un(e)))return b;n=Ye(Or/de(c*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(h=-Ye(e),e>=an-1+.27?(p=1-e,t=0):e>=an-1-.27?(p=e-(on-1),t=1):(p=e,t=2)):(h=0,e>=an+.27?(p=2-e,t=0):e>=an-.27?(p=e-on,t=1):(p=e-1,t=2)),t){case 0:a=.07721566490153287+(v=p*p)*function(e){return 0===e?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+25214456545125733e-21*e)))}(v),u=v*(.3224670334241136+v*function(e){return 0===e?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+44864094961891516e-21*e)))}(v)),h+=(o=p*a+u)-.5*p;break;case 1:a=.48383612272381005+(s=(v=p*p)*p)*function(e){return 0===e?-.032788541075985965:e*(.006100538702462913+e*(.00031563207090362595*e-.0014034646998923284))-.032788541075985965}(s),u=s*function(e){return 0===e?.01797067508118204:.01797067508118204+e*(e*(.000881081882437654+-.00031275416837512086*e)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(e){return 0===e?-.010314224129834144:e*(.0022596478090061247+e*(.0003355291926355191*e-.0005385953053567405))-.010314224129834144}(s),h+=(o=v*a-(-3638676997039505e-33-s*(u+p*i)))-.12148629053584961;break;case 2:a=p*(p*function(e){return 0===e?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+.013381091853678766*e)))}(p)-.07721566490153287),u=1+p*function(e){return 0===e?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+.003217092422824239*e)))}(p),h+=-.5*p+a/u}else if(e<8)switch(o=(p=e-(t=y(e)))*(p*function(e){return 0===e?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+3194753265841009e-20*e))))}(p)-.07721566490153287),f=1+p*function(e){return 0===e?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+7326684307446256e-21*e))))}(p),h=.5*p+o/f,v=1,t){case 7:v*=p+6;case 6:v*=p+5;case 5:v*=p+4;case 4:v*=p+3;case 3:h+=Ye(v*=p+2)}else e<0x400000000000000?(c=Ye(e),s=.4189385332046727+(v=1/e)*function(e){return 0===e?.08333333333333297:.08333333333333297+e*(e*(.0007936505586430196+e*(e*(.0008363399189962821+-.0016309293409657527*e)-.00059518755745034))-.0027777777772877554)}(p=v*v),h=(e-.5)*(c-1)+s):h=e*(Ye(e)-1);return r&&(h=n-h),h}(r),(a-=r*Ye(fn))>709?n<0?g:b:n*ke(a)):2*un(.5*t)*Kr(fn,-r)*rn(r)*e(r)):r<1?(n=0===(f=t)?.2433929443359375:((f<0?-f:f)<=1?(c=.2433929443359375+f*(f*(.055761621477604675+f*(f*(.0004515345286457964+-9332412703570615e-21*f)-.003209124988790859))-.4909247051635357),s=1+f*(f*(.04196762233099861+f*(f*(.00024978985622317937+-10185578841856403e-21*f)-.00413421406552171))-.27996033431034445)):(c=(f=1/f)*(.0004515345286457964+f*(f*(.055761621477604675+f*(.2433929443359375*f-.4909247051635357))-.003209124988790859))-9332412703570615e-21,s=f*(.00024978985622317937+f*(f*(.04196762233099861+f*(1*f-.27996033431034445))-.00413421406552171))-10185578841856403e-21),c/s),n-=1.2433929443359375,n+=t,n/=t):r<=2?(n=1/(t=-t))+function(e){var r,n;return 0===e?.5772156649015329:((e<0?-e:e)<=1?(r=.5772156649015329+e*(.24321064694010716+e*(.04173646739882165+e*(.003902520870728433+e*(.0002496063671518772+1101084409767329e-20*e)))),n=1+e*(.29520127712663174+e*(.043460910607305496+e*(.004349305820858264+e*(.0002557842261404885+10991819782396113e-21*e))))):(r=1101084409767329e-20+(e=1/e)*(.0002496063671518772+e*(.003902520870728433+e*(.04173646739882165+e*(.24321064694010716+.5772156649015329*e)))),n=10991819782396113e-21+e*(.0002557842261404885+e*(.004349305820858264+e*(.043460910607305496+e*(.29520127712663174+1*e))))),r/n)}(t):r<=4?(n=.6986598968505859+1/-t)+function(e){var r,n;return 0===e?-.053725830002359504:((e<0?-e:e)<=1?(r=e*(.04451634732923656+e*(.012867767353451996+e*(.0009754177045739176+e*(7698751015736541e-20+e*(3280325100003831e-21+0*e)))))-.053725830002359504,n=1+e*(.3338319455303405+e*(.048779843129140764+e*(.0047903970857355845+e*(.00027077670395633634+e*(10695186753205734e-21+2.3627662397497864e-8*e)))))):(r=0+(e=1/e)*(3280325100003831e-21+e*(7698751015736541e-20+e*(.0009754177045739176+e*(.012867767353451996+e*(.04451634732923656+-.053725830002359504*e))))),n=2.3627662397497864e-8+e*(10695186753205734e-21+e*(.00027077670395633634+e*(.0047903970857355845+e*(.048779843129140764+e*(.3338319455303405+1*e)))))),r/n)}(r-2):r<=7?(n=function(e){var r,n;return 0===e?-2.497101906022594:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(0+e*(0+0*e))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+e*(.7060390259377451+e*(.15739599649558628+e*(.010611795097684508+e*(e*(49340956392759e-19+e*(e*(7.188337293654598e-9+-1.1292001134749475e-10*e)-2.3405548702528722e-7))-36910273311764616e-21))))):(r=0+(e=1/e)*(0+e*(0+e*(e*(e*(e*(e*(-2.497101906022594*e-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=e*(7.188337293654598e-9+e*(e*(49340956392759e-19+e*(e*(.010611795097684508+e*(.15739599649558628+e*(.7060390259377451+1*e)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),r/n)}(r-4),1+ke(n)):r<15?(n=function(e){var r,n;return 0===e?-4.785580284951356:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(.0011514092388917874+e*(6399492042131645e-20+e*(1393489324453249e-21+e*(0+0*e))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+e*(.24434533737818856+e*(.008733707544922887+e*(e*(e*(e*(4.710012640030765e-9+e*(6998415452048457e-28*e-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(r=0+(e=1/e)*(0+e*(1393489324453249e-21+e*(6399492042131645e-20+e*(.0011514092388917874+e*(e*(e*(-4.785580284951356*e-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+e*(e*(4.710012640030765e-9+e*(e*(e*(e*(.008733707544922887+e*(.24434533737818856+1*e))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),r/n)}(r-7),1+ke(n)):r<36?(n=function(e){var r,n;return 0===e?-10.39489505733089:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(-8.214657090954655e-9*e-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+e*(.2081963335726719+e*(.019568765731720502+e*(.0011107963810248593+e*(40850774626603926e-21+e*(9.555611230656935e-7+e*(1.185071534740229e-8+2226094836273526e-30*e))))))):(r=(e=1/e)*(e*(e*(e*(e*(e*(-10.39489505733089*e-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+e*(1.185071534740229e-8+e*(9.555611230656935e-7+e*(40850774626603926e-21+e*(.0011107963810248593+e*(.019568765731720502+e*(.2081963335726719+1*e))))))),r/n)}(r-15),1+ke(n)):1+Kr(2,-r))}(3)/(Or*Or*Or);function vn(e,r){return l(e)||l(r)||r<=0?NaN:pn}var yn=nr(6);function hn(e,r){return l(e)||l(r)||r<=0?NaN:Or/yn*r}function gn(e,r){return l(e)||l(r)||r<=0?NaN:1.6449340668482264*r*r}function bn(e,r,n){return l(e)||l(r)||l(n)||n<=0?NaN:-ke(-(e-r)/n)}function dn(e,r,n){var t;return l(e)||l(r)||l(n)||n<=0?NaN:e===g?0:-(t=(e-r)/n)-ke(-t)-Ye(n)}function mn(e,r,n){return l(e)||l(r)||l(n)||n<=0||e>=1/n?NaN:rn(1-n*e)*ke(r*e)}function wn(e,r,n){var t;return l(e)||l(r)||l(n)||n<=0?NaN:e===g?0:1/n*ke(-(t=(e-r)/n)-ke(-t))}function Nn(e,r,n){return l(r)||l(n)||l(e)||n<=0||e<0||e>1?NaN:r-n*Ye(-Ye(e))}function An(e){return"number"==typeof e}function _n(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function En(e,r,n){var t=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=n?e+_n(i):_n(i)+e,t&&(e="-"+e)),e}s(bn,"factory",(function(e,r){return l(e)||l(r)||r<=0?Se(NaN):function(n){return l(n)?NaN:-ke(-(n-e)/r)}})),s(dn,"factory",(function(e,r){var n;return l(e)||l(r)||r<=0?Se(NaN):(n=Ye(r),function(t){var i;return l(t)?NaN:t===g?0:-(i=(t-e)/r)-ke(-i)-n})})),s(mn,"factory",(function(e,r){return l(e)||l(r)||r<=0?Se(NaN):function(n){return n>=1/r?NaN:rn(1-r*n)*ke(e*n)}})),s(wn,"factory",(function(e,r){return l(e)||l(r)||r<=0?Se(NaN):function(n){var t;return l(n)?NaN:n===g?0:1/r*ke(-(t=(n-e)/r)-ke(-t))}})),s(Nn,"factory",(function(e,r){return l(e)||l(r)||r<=0?Se(NaN):function(n){return l(n)||n<0||n>1?NaN:e-r*Ye(-Ye(n))}}));var kn=String.prototype.toLowerCase,xn=String.prototype.toUpperCase;function Sn(e){var r,n,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,t=parseInt(n,10),!isFinite(t)){if(!An(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(n=(-t).toString(r),e.precision&&(n=En(n,e.precision,e.padRight)),n="-"+n):(n=t.toString(r),t||e.precision?e.precision&&(n=En(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===xn.call(e.specifier)?xn.call(n):kn.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function Un(e){return"string"==typeof e}var jn=Math.abs,In=String.prototype.toLowerCase,Tn=String.prototype.toUpperCase,Fn=String.prototype.replace,On=/e\+(\d)$/,Vn=/e-(\d)$/,Gn=/^(\d+)$/,Pn=/^(\d+)e/,$n=/\.0$/,Hn=/\.0*e/,Ln=/(\..*[^0])0*e/;function Mn(e){var r,n,t=parseFloat(e.arg);if(!isFinite(t)){if(!An(e.arg))throw new Error("invalid floating-point number. Value: "+n);t=e.arg}switch(e.specifier){case"e":case"E":n=t.toExponential(e.precision);break;case"f":case"F":n=t.toFixed(e.precision);break;case"g":case"G":jn(t)<1e-4?((r=e.precision)>0&&(r-=1),n=t.toExponential(r)):n=t.toPrecision(e.precision),e.alternate||(n=Fn.call(n,Ln,"$1e"),n=Fn.call(n,Hn,"e"),n=Fn.call(n,$n,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=Fn.call(n,On,"e+0$1"),n=Fn.call(n,Vn,"e-0$1"),e.alternate&&(n=Fn.call(n,Gn,"$1."),n=Fn.call(n,Pn,"$1.e")),t>=0&&e.sign&&(n=e.sign+n),n=e.specifier===Tn.call(e.specifier)?Tn.call(n):In.call(n)}function Wn(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}function Cn(e,r,n){var t=r-e.length;return t<0?e:e=n?e+Wn(t):Wn(t)+e}var Rn=String.fromCharCode,Zn=isNaN,qn=Array.isArray;function Xn(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Yn(e){var r,n,t,i,u,a,o,f,c;if(!qn(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",o=1,f=0;f<e.length;f++)if(Un(t=e[f]))a+=t;else{if(r=void 0!==t.precision,!(t=Xn(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(o=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[o],10),o+=1,Zn(t.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[o],10),o+=1,Zn(t.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[o],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Sn(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Zn(t.arg)){if((u=parseInt(t.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Zn(u)?String(t.arg):Rn(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Mn(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=En(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Cn(t.arg,t.width,t.padRight)),a+=t.arg||"",o+=1}return a}var zn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Bn(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Dn(e){var r,n,t,i;for(n=[],i=0,t=zn.exec(e);t;)(r=e.slice(i,zn.lastIndex-t[0].length)).length&&n.push(r),n.push(Bn(t)),i=zn.lastIndex,t=zn.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function Jn(e){return"string"==typeof e}function Kn(e){var r,n,t;if(!Jn(e))throw new TypeError(Kn("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Dn(e),(n=new Array(arguments.length))[0]=r,t=1;t<n.length;t++)n[t]=arguments[t];return Yn.apply(null,n)}function Qn(){var e,r;if(!(this instanceof Qn))return 0===arguments.length?new Qn:new Qn(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!je(r=arguments[0])||Le(r))throw new TypeError(Kn("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!Ve(e))throw new TypeError(Kn("invalid argument. Scale parameter must be a positive number. Value: `%s`.",e))}else r=0,e=1;return f(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!je(e)||Le(e))throw new TypeError(Kn("invalid assignment. Must be a number. Value: `%s`.",e));r=e}}),f(this,"beta",{configurable:!1,enumerable:!0,get:function(){return e},set:function(r){if(!Ve(r))throw new TypeError(Kn("invalid assignment. Must be a positive number. Value: `%s`.",r));e=r}}),this}Ue(Qn.prototype,"entropy",(function(){return Be(this.mu,this.beta)})),Ue(Qn.prototype,"kurtosis",(function(){return De(this.mu,this.beta)})),Ue(Qn.prototype,"mean",(function(){return Je(this.mu,this.beta)})),Ue(Qn.prototype,"median",(function(){return er(this.mu,this.beta)})),Ue(Qn.prototype,"mode",(function(){return rr(this.mu,this.beta)})),Ue(Qn.prototype,"skewness",(function(){return vn(this.mu,this.beta)})),Ue(Qn.prototype,"stdev",(function(){return hn(this.mu,this.beta)})),Ue(Qn.prototype,"variance",(function(){return gn(this.mu,this.beta)})),s(Qn.prototype,"cdf",(function(e){return xe(e,this.mu,this.beta)})),s(Qn.prototype,"logcdf",(function(e){return bn(e,this.mu,this.beta)})),s(Qn.prototype,"logpdf",(function(e){return dn(e,this.mu,this.beta)})),s(Qn.prototype,"mgf",(function(e){return mn(e,this.mu,this.beta)})),s(Qn.prototype,"pdf",(function(e){return wn(e,this.mu,this.beta)})),s(Qn.prototype,"quantile",(function(e){return Nn(e,this.mu,this.beta)}));var et={};return c(et,"cdf",xe),c(et,"Gumbel",Qn),c(et,"entropy",Be),c(et,"kurtosis",De),c(et,"logcdf",bn),c(et,"logpdf",dn),c(et,"mean",Je),c(et,"median",er),c(et,"mgf",mn),c(et,"mode",rr),c(et,"pdf",wn),c(et,"quantile",Nn),c(et,"skewness",vn),c(et,"stdev",hn),c(et,"variance",gn),et},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gumbel=r();
//# sourceMappingURL=browser.js.map
