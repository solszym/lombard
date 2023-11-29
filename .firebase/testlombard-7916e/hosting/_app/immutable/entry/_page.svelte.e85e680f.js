import{S as Be,i as ke,s as De,d as V,v as we,H as Le,p as P,y as C,c as R,q as b,r as k,z as I,l as u,f as S,u as c,x as g,P as Q,g as M,N as r,Q as J,R as F,A as Oe,O as K,T as de,C as Te,D as Ce,E as Ie,k as Ne,h as je,F as Ue}from"../chunks/index.6c91fde0.js";import{c as oe}from"../chunks/store.6207dfa4.js";const{console:Ve}=Le,y="src/components/Authenticate.svelte";function ce(n){let e,t;const o={c:function(){e=P("p"),t=C("The information you have entered is not correct"),this.h()},l:function(s){e=b(s,"P",{class:!0});var a=k(e);t=I(a,"The information you have entered is not correct"),a.forEach(u),this.h()},h:function(){c(e,"class","error s-GrBPrfD7xd3p"),g(e,y,42,12,1025)},m:function(s,a){M(s,e,a),r(e,t)},d:function(s){s&&u(e)}};return V("SvelteRegisterBlock",{block:o,id:ce.name,type:"if",source:"(42:8) {#if error}",ctx:n}),o}function ie(n){let e,t,o,l,s,a,m,_;const p={c:function(){e=P("label"),t=P("p"),o=C("Confirm Password"),s=R(),a=P("input"),this.h()},l:function(f){e=b(f,"LABEL",{class:!0});var i=k(e);t=b(i,"P",{class:!0});var B=k(t);o=I(B,"Confirm Password"),B.forEach(u),s=S(i),a=b(i,"INPUT",{type:!0,placeholder:!0,class:!0}),i.forEach(u),this.h()},h:function(){c(t,"class",l=Q(n[2]?" above":" center")+" s-GrBPrfD7xd3p"),g(t,y,58,16,1580),c(a,"type","password"),c(a,"placeholder","Confirm Password"),c(a,"class","s-GrBPrfD7xd3p"),g(a,y,61,16,1701),c(e,"class","s-GrBPrfD7xd3p"),g(e,y,57,12,1556)},m:function(f,i){M(f,e,i),r(e,t),r(t,o),r(e,s),r(e,a),J(a,n[2]),m||(_=F(a,"input",n[10]),m=!0)},p:function(f,i){i&4&&l!==(l=Q(f[2]?" above":" center")+" s-GrBPrfD7xd3p")&&c(t,"class",l),i&4&&a.value!==f[2]&&J(a,f[2])},d:function(f){f&&u(e),m=!1,_()}};return V("SvelteRegisterBlock",{block:p,id:ie.name,type:"if",source:"(57:8) {#if register}",ctx:n}),p}function Ee(n){let e;const t={c:function(){e=C("Submit")},l:function(l){e=I(l,"Submit")},m:function(l,s){M(l,e,s)},d:function(l){l&&u(e)}};return V("SvelteRegisterBlock",{block:t,id:Ee.name,type:"else",source:"(73:12) {:else}",ctx:n}),t}function Ge(n){let e;const t={c:function(){e=P("i"),this.h()},l:function(l){e=b(l,"I",{class:!0}),k(e).forEach(u),this.h()},h:function(){c(e,"class","fa-solid fa-spinner loadingSpinner s-GrBPrfD7xd3p"),g(e,y,71,16,2023)},m:function(l,s){M(l,e,s)},d:function(l){l&&u(e)}};return V("SvelteRegisterBlock",{block:t,id:Ge.name,type:"if",source:"(71:12) {#if authenticating}",ctx:n}),t}function Re(n){let e,t,o,l,s,a,m,_;const p={c:function(){e=P("div"),t=P("p"),o=C("Don't have an account?"),l=R(),s=P("p"),a=C("Register"),this.h()},l:function(f){e=b(f,"DIV",{class:!0});var i=k(e);t=b(i,"P",{class:!0});var B=k(t);o=I(B,"Don't have an account?"),B.forEach(u),l=S(i),s=b(i,"P",{class:!0});var A=k(s);a=I(A,"Register"),A.forEach(u),i.forEach(u),this.h()},h:function(){c(t,"class","s-GrBPrfD7xd3p"),g(t,y,86,16,2442),c(s,"class","s-GrBPrfD7xd3p"),g(s,y,87,16,2488),c(e,"class","s-GrBPrfD7xd3p"),g(e,y,85,12,2420)},m:function(f,i){M(f,e,i),r(e,t),r(t,o),r(e,l),r(e,s),r(s,a),m||(_=[F(s,"click",n[7],!1,!1,!1,!1),F(s,"keydown",qe,!1,!1,!1,!1)],m=!0)},p:K,d:function(f){f&&u(e),m=!1,de(_)}};return V("SvelteRegisterBlock",{block:p,id:Re.name,type:"else",source:"(85:8) {:else}",ctx:n}),p}function Se(n){let e,t,o,l,s,a,m,_;const p={c:function(){e=P("div"),t=P("p"),o=C("Already have an account?"),l=R(),s=P("p"),a=C("Login"),this.h()},l:function(f){e=b(f,"DIV",{class:!0});var i=k(e);t=b(i,"P",{class:!0});var B=k(t);o=I(B,"Already have an account?"),B.forEach(u),l=S(i),s=b(i,"P",{class:!0});var A=k(s);a=I(A,"Login"),A.forEach(u),i.forEach(u),this.h()},h:function(){c(t,"class","s-GrBPrfD7xd3p"),g(t,y,81,16,2264),c(s,"class","s-GrBPrfD7xd3p"),g(s,y,82,16,2312),c(e,"class","s-GrBPrfD7xd3p"),g(e,y,80,12,2242)},m:function(f,i){M(f,e,i),r(e,t),r(t,o),r(e,l),r(e,s),r(s,a),m||(_=[F(s,"click",n[7],!1,!1,!1,!1),F(s,"keydown",He,!1,!1,!1,!1)],m=!0)},p:K,d:function(f){f&&u(e),m=!1,de(_)}};return V("SvelteRegisterBlock",{block:p,id:Se.name,type:"if",source:"(80:8) {#if register}",ctx:n}),p}function fe(n){let e,t,o,l=n[4]?"Register":"Login",s,a,m,_,p,d,f,i,B,A,L,N,v,W,te,O,se,X,j,ne,U,z,ae,le,re,pe,w=n[3]&&ce(n),D=n[4]&&ie(n);function he(q,h){return q[5]?Ge:Ee}let Y=he(n),H=Y(n);function _e(q,h){return q[4]?Se:Re}let Z=_e(n),T=Z(n);const me={c:function(){e=P("div"),t=P("form"),o=P("h1"),s=C(l),a=R(),w&&w.c(),m=R(),_=P("label"),p=P("p"),d=C("Email"),i=R(),B=P("input"),A=R(),L=P("label"),N=P("p"),v=C("Password"),te=R(),O=P("input"),se=R(),D&&D.c(),X=R(),j=P("button"),H.c(),ne=R(),U=P("div"),z=P("p"),ae=C("Or"),le=R(),T.c(),this.h()},l:function(h){e=b(h,"DIV",{class:!0});var E=k(e);t=b(E,"FORM",{class:!0});var G=k(t);o=b(G,"H1",{class:!0});var ve=k(o);s=I(ve,l),ve.forEach(u),a=S(G),w&&w.l(G),m=S(G),_=b(G,"LABEL",{class:!0});var x=k(_);p=b(x,"P",{class:!0});var Pe=k(p);d=I(Pe,"Email"),Pe.forEach(u),i=S(x),B=b(x,"INPUT",{type:!0,placeholder:!0,class:!0}),x.forEach(u),A=S(G),L=b(G,"LABEL",{class:!0});var $=k(L);N=b($,"P",{class:!0});var be=k(N);v=I(be,"Password"),be.forEach(u),te=S($),O=b($,"INPUT",{type:!0,placeholder:!0,class:!0}),$.forEach(u),se=S(G),D&&D.l(G),X=S(G),j=b(G,"BUTTON",{type:!0,class:!0});var ge=k(j);H.l(ge),ge.forEach(u),G.forEach(u),ne=S(E),U=b(E,"DIV",{class:!0});var ee=k(U);z=b(ee,"P",{class:!0});var ye=k(z);ae=I(ye,"Or"),ye.forEach(u),le=S(ee),T.l(ee),ee.forEach(u),E.forEach(u),this.h()},h:function(){c(o,"class","s-GrBPrfD7xd3p"),g(o,y,40,8,950),c(p,"class",f=Q(n[0]?" above":" center")+" s-GrBPrfD7xd3p"),g(p,y,45,12,1136),c(B,"type","email"),c(B,"placeholder","Email"),c(B,"class","s-GrBPrfD7xd3p"),g(B,y,46,12,1198),c(_,"class","s-GrBPrfD7xd3p"),g(_,y,44,8,1116),c(N,"class",W=Q(n[1]?" above":" center")+" s-GrBPrfD7xd3p"),g(N,y,49,12,1305),c(O,"type","password"),c(O,"placeholder","Password"),c(O,"class","s-GrBPrfD7xd3p"),g(O,y,50,12,1373),c(L,"class","s-GrBPrfD7xd3p"),g(L,y,48,8,1285),c(j,"type","button"),c(j,"class","submitBtn s-GrBPrfD7xd3p"),g(j,y,69,8,1903),c(t,"class","s-GrBPrfD7xd3p"),g(t,y,39,4,935),c(z,"class","s-GrBPrfD7xd3p"),g(z,y,78,8,2197),c(U,"class","options s-GrBPrfD7xd3p"),g(U,y,77,4,2167),c(e,"class","authContainer s-GrBPrfD7xd3p"),g(e,y,38,0,903)},m:function(h,E){M(h,e,E),r(e,t),r(t,o),r(o,s),r(t,a),w&&w.m(t,null),r(t,m),r(t,_),r(_,p),r(p,d),r(_,i),r(_,B),J(B,n[0]),r(t,A),r(t,L),r(L,N),r(N,v),r(L,te),r(L,O),J(O,n[1]),r(t,se),D&&D.m(t,null),r(t,X),r(t,j),H.m(j,null),r(e,ne),r(e,U),r(U,z),r(z,ae),r(U,le),T.m(U,null),re||(pe=[F(B,"input",n[8]),F(O,"input",n[9]),F(j,"click",n[6],!1,!1,!1,!1)],re=!0)},p:function(h,[E]){E&16&&l!==(l=h[4]?"Register":"Login")&&Oe(s,l),h[3]?w||(w=ce(h),w.c(),w.m(t,m)):w&&(w.d(1),w=null),E&1&&f!==(f=Q(h[0]?" above":" center")+" s-GrBPrfD7xd3p")&&c(p,"class",f),E&1&&B.value!==h[0]&&J(B,h[0]),E&2&&W!==(W=Q(h[1]?" above":" center")+" s-GrBPrfD7xd3p")&&c(N,"class",W),E&2&&O.value!==h[1]&&J(O,h[1]),h[4]?D?D.p(h,E):(D=ie(h),D.c(),D.m(t,X)):D&&(D.d(1),D=null),Y!==(Y=he(h))&&(H.d(1),H=Y(h),H&&(H.c(),H.m(j,null))),Z===(Z=_e(h))&&T?T.p(h,E):(T.d(1),T=Z(h),T&&(T.c(),T.m(U,null)))},i:K,o:K,d:function(h){h&&u(e),w&&w.d(),D&&D.d(),H.d(),T.d(),re=!1,de(pe)}};return V("SvelteRegisterBlock",{block:me,id:fe.name,type:"component",source:"",ctx:n}),me}const He=()=>{},qe=()=>{};function Fe(n,e,t){let{$$slots:o={},$$scope:l}=e;we("Authenticate",o,[]);let s="",a="",m="",_=!1,p=!1,d=!1;async function f(){if(!d){if(!s||!a||p&&!m){t(3,_=!0);return}t(5,d=!0);try{p?await oe.signup(s,a):await oe.login(s,a)}catch(v){console.log("There was an auth error",v),t(3,_=!0),t(5,d=!1)}}}function i(){t(4,p=!p)}const B=[];Object.keys(e).forEach(v=>{!~B.indexOf(v)&&v.slice(0,2)!=="$$"&&v!=="slot"&&Ve.warn(`<Authenticate> was created with unknown prop '${v}'`)});function A(){s=this.value,t(0,s)}function L(){a=this.value,t(1,a)}function N(){m=this.value,t(2,m)}return n.$capture_state=()=>({authHandlers:oe,email:s,password:a,confirmPass:m,error:_,register:p,authenticating:d,handleAuthenticate:f,handleRegister:i}),n.$inject_state=v=>{"email"in v&&t(0,s=v.email),"password"in v&&t(1,a=v.password),"confirmPass"in v&&t(2,m=v.confirmPass),"error"in v&&t(3,_=v.error),"register"in v&&t(4,p=v.register),"authenticating"in v&&t(5,d=v.authenticating)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[s,a,m,_,p,d,f,i,A,L,N]}class Ae extends Be{constructor(e){super(e),ke(this,e,Fe,fe,De,{}),V("SvelteRegisterComponent",{component:this,tagName:"Authenticate",options:e,id:fe.name})}}function ue(n){let e,t;e=new Ae({$$inline:!0});const o={c:function(){Te(e.$$.fragment)},l:function(s){Ce(e.$$.fragment,s)},m:function(s,a){Ie(e,s,a),t=!0},p:K,i:function(s){t||(Ne(e.$$.fragment,s),t=!0)},o:function(s){je(e.$$.fragment,s),t=!1},d:function(s){Ue(e,s)}};return V("SvelteRegisterBlock",{block:o,id:ue.name,type:"component",source:"",ctx:n}),o}function ze(n,e,t){let{$$slots:o={},$$scope:l}=e;we("Page",o,[]);const s=[];return Object.keys(e).forEach(a=>{!~s.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Page> was created with unknown prop '${a}'`)}),n.$capture_state=()=>({Authenticate:Ae}),[]}class Je extends Be{constructor(e){super(e),ke(this,e,ze,ue,De,{}),V("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:ue.name})}}export{Je as default};