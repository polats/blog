function e(){}function t(e,t){for(const r in t)e[r]=t[r];return e}function r(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(r)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,r,n){return e[1]?t({},t(r.$$scope.ctx,e[1](n?n(r):{}))):r.$$scope.ctx}function l(e,t){e.appendChild(t)}function i(e,t,r){e.insertBefore(t,r||null)}function u(e){e.parentNode.removeChild(e)}function f(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}function p(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function h(){return m(" ")}function g(){return m("")}function d(e,t,r){null==r?e.removeAttribute(t):e.setAttribute(t,r)}function $(e){return Array.from(e.childNodes)}function v(e,t,r,n){for(let n=0;n<e.length;n+=1){const s=e[n];if(s.nodeName===t){for(let e=0;e<s.attributes.length;e+=1){const t=s.attributes[e];r[t.name]||s.removeAttribute(t.name)}return e.splice(n,1)[0]}}return n?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):p(t)}function b(e,t){for(let r=0;r<e.length;r+=1){const n=e[r];if(3===n.nodeType)return n.data=t,e.splice(r,1)[0]}return m(t)}function y(e,t){t=""+t,e.data!==t&&(e.data=t)}let E;function w(e){E=e}function _(){if(!E)throw new Error("Function called outside component initialization");return E}const x=[],S=Promise.resolve();let A=!1;const N=[],R=[],P=[];function k(e){R.push(e)}function j(){const e=new Set;do{for(;x.length;){const e=x.shift();w(e),L(e.$$)}for(;N.length;)N.shift()();for(;R.length;){const t=R.pop();e.has(t)||(t(),e.add(t))}}while(x.length);for(;P.length;)P.pop()();A=!1}function L(e){e.fragment&&(e.update(e.dirty),s(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(k))}let C;function O(){C={remaining:0,callbacks:[]}}function q(){C.remaining||s(C.callbacks)}function U(e){C.callbacks.push(e)}function D(e,t){const r={},n={},s={$$scope:1};let o=e.length;for(;o--;){const a=e[o],c=t[o];if(c){for(const e in a)e in c||(n[e]=1);for(const e in c)s[e]||(r[e]=c[e],s[e]=1);e[o]=c}else for(const e in a)s[e]=1}for(const e in n)e in r||(r[e]=void 0);return r}function I(e,t,n){const{fragment:a,on_mount:c,on_destroy:l,after_render:i}=e.$$;a.m(t,n),k(()=>{const t=c.map(r).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]}),i.forEach(k)}function z(e,t){e.$$.dirty||(x.push(e),A||(A=!0,S.then(j)),e.$$.dirty=n()),e.$$.dirty[t]=!0}function G(t,r,o,a,c,l){const i=E;w(t);const u=r.props||{},f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(i?i.$$.context:[]),callbacks:n(),dirty:null};let p=!1;f.ctx=o?o(t,u,(e,r)=>{f.ctx&&c(f.ctx[e],f.ctx[e]=r)&&(f.bound[e]&&f.bound[e](r),p&&z(t,e))}):u,f.update(),p=!0,s(f.before_render),f.fragment=a(f.ctx),r.target&&(r.hydrate?f.fragment.l($(r.target)):f.fragment.c(),r.intro&&t.$$.fragment.i&&t.$$.fragment.i(),I(t,r.target,r.anchor),j()),w(i)}class H{$destroy(){var t,r;r=!0,(t=this).$$&&(s(t.$$.on_destroy),t.$$.fragment.d(r),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=e}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const e=r.indexOf(t);-1!==e&&r.splice(e,1)}}$set(){}}function T(t,r=e){let n;const s=[];function o(e){if(a(t,e)){if(t=e,!n)return;s.forEach(e=>e[1]()),s.forEach(e=>e[0](t))}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,c=e){const l=[a,c];return s.push(l),1===s.length&&(n=r(o)||e),a(t),()=>{const e=s.indexOf(l);-1!==e&&s.splice(e,1),0===s.length&&n()}}}}const B={},K=()=>({});function V(t){var r,n;return{c(){r=p("a"),n=p("img"),this.h()},l(e){var t=$(r=v(e,"A",{href:!0},!1));$(n=v(t,"IMG",{alt:!0,src:!0,class:!0},!1)).forEach(u),t.forEach(u),this.h()},h(){n.alt="Blog",n.src="icon.png",n.className="svelte-ulmwur",r.href="/blog"},m(e,t){i(e,r,t),l(r,n)},p:e,i:e,o:e,d(e){e&&u(r)}}}class J extends H{constructor(e){super(),G(this,e,null,V,a,[])}}function F(t){var r,n,s,o,a,c,f,g;return{c(){r=p("nav"),n=p("a"),s=m("blog"),a=h(),c=p("a"),f=m("about"),this.h()},l(e){var t=$(r=v(e,"NAV",{class:!0},!1)),o=$(n=v(t,"A",{rel:!0,class:!0,href:!0},!1));s=b(o,"blog"),o.forEach(u),a=b(t,"\r\n  ");var l=$(c=v(t,"A",{class:!0,href:!0},!1));f=b(l,"about"),l.forEach(u),t.forEach(u),this.h()},h(){n.rel="prefetch",n.className=o=(void 0===t.segment||"blog"===t.segment?"selected":"")+" svelte-1gmuzcx",n.href=".",c.className=g=("about"===t.segment?"selected":"")+" svelte-1gmuzcx",c.href="about",r.className="svelte-1gmuzcx"},m(e,t){i(e,r,t),l(r,n),l(n,s),l(r,a),l(r,c),l(c,f)},p(e,t){e.segment&&o!==(o=(void 0===t.segment||"blog"===t.segment?"selected":"")+" svelte-1gmuzcx")&&(n.className=o),e.segment&&g!==(g=("about"===t.segment?"selected":"")+" svelte-1gmuzcx")&&(c.className=g)},i:e,o:e,d(e){e&&u(r)}}}function M(e,t,r){let{segment:n}=t;return e.$set=e=>{"segment"in e&&r("segment",n=e.segment)},{segment:n}}class Y extends H{constructor(e){super(),G(this,e,M,F,a,["segment"])}}function W(e){var t,r,n,s=new J({}),o=new Y({props:{segment:e.segment}});return{c(){t=p("header"),s.$$.fragment.c(),r=h(),o.$$.fragment.c(),this.h()},l(e){var n=$(t=v(e,"HEADER",{class:!0},!1));s.$$.fragment.l(n),r=b(n,"\r\n  "),o.$$.fragment.l(n),n.forEach(u),this.h()},h(){t.className="svelte-1lejrvg"},m(e,a){i(e,t,a),I(s,t,null),l(t,r),I(o,t,null),n=!0},p(e,t){var r={};e.segment&&(r.segment=t.segment),o.$set(r)},i(e){n||(s.$$.fragment.i(e),o.$$.fragment.i(e),n=!0)},o(e){s.$$.fragment.o(e),o.$$.fragment.o(e),n=!1},d(e){e&&u(t),s.$destroy(),o.$destroy()}}}function X(e,t,r){let{segment:n}=t;return e.$set=e=>{"segment"in e&&r("segment",n=e.segment)},{segment:n}}class Q extends H{constructor(e){super(),G(this,e,X,W,a,["segment"])}}function Z(e){var r,n,s,o,a,f,g,d,y,E,w,_,x,S,A,N,R,P,k,j,L,C,O,q,U,D,z,G,H,T,B,K,V,J,F,M,Y=(new Date).getFullYear(),W=new Q({props:{segment:e.segment}});const X=e.$$slots.default,Z=function(e,t,r){if(e){const n=c(e,t,r);return e[0](n)}}(X,e,null);return{c(){r=p("div"),W.$$.fragment.c(),n=h(),s=p("main"),Z&&Z.c(),o=h(),a=p("footer"),f=p("span"),g=m("© "),d=m(Y),y=h(),E=p("a"),w=m("Paul Gadi"),_=m(" |\r\n      "),x=p("a"),S=m("OPGames"),A=m(" |\r\n      "),N=p("a"),R=m("game3.js"),P=m(" |\r\n      "),k=p("a"),j=m("🌱 KERNEL"),L=m(" |\r\n      @polats on "),C=p("a"),O=m("twitter"),q=m(",\r\n      "),U=p("a"),D=m("github"),z=m(",\r\n      "),G=p("a"),H=m("medium"),T=m(",\r\n      "),B=p("a"),K=m("dev.to"),V=m(",\r\n      "),J=p("a"),F=m("observable"),this.h()},l(e){var t=$(r=v(e,"DIV",{class:!0},!1));W.$$.fragment.l(t),n=b(t,"\r\n\r\n  ");var c=$(s=v(t,"MAIN",{class:!0},!1));Z&&Z.l(c),c.forEach(u),o=b(t,"\r\n\r\n  ");var l=$(a=v(t,"FOOTER",{class:!0},!1)),i=$(f=v(l,"SPAN",{},!1));g=b(i,"© "),d=b(i,Y),y=b(i," ");var p=$(E=v(i,"A",{href:!0,target:!0},!1));w=b(p,"Paul Gadi"),p.forEach(u),_=b(i," |\r\n      ");var m=$(x=v(i,"A",{href:!0,target:!0},!1));S=b(m,"OPGames"),m.forEach(u),A=b(i," |\r\n      ");var h=$(N=v(i,"A",{href:!0,target:!0},!1));R=b(h,"game3.js"),h.forEach(u),P=b(i," |\r\n      ");var I=$(k=v(i,"A",{href:!0,target:!0},!1));j=b(I,"🌱 KERNEL"),I.forEach(u),L=b(i," |\r\n      @polats on ");var M=$(C=v(i,"A",{href:!0,target:!0},!1));O=b(M,"twitter"),M.forEach(u),q=b(i,",\r\n      ");var X=$(U=v(i,"A",{href:!0,target:!0},!1));D=b(X,"github"),X.forEach(u),z=b(i,",\r\n      ");var Q=$(G=v(i,"A",{href:!0,target:!0},!1));H=b(Q,"medium"),Q.forEach(u),T=b(i,",\r\n      ");var ee=$(B=v(i,"A",{href:!0,target:!0},!1));K=b(ee,"dev.to"),ee.forEach(u),V=b(i,",\r\n      ");var te=$(J=v(i,"A",{href:!0,target:!0},!1));F=b(te,"observable"),te.forEach(u),i.forEach(u),l.forEach(u),t.forEach(u),this.h()},h(){s.className="svelte-1eajn4l",E.href="https://www.linkedin.com/in/paulgadi/",E.target="_blank",x.href="https://outplay.games",x.target="_blank",N.href="https://game3js.com",N.target="_blank",k.href="https://kernel.community",k.target="_blank",C.href="https://www.twitter.com/polats",C.target="_blank",U.href="https://www.github.com/polats",U.target="_blank",G.href="https://www.medium.com/@polats",G.target="_blank",B.href="https://www.dev.to/polats",B.target="_blank",J.href="https://observablehq.com/@polats",J.target="_blank",a.className="svelte-1eajn4l",r.className="layout svelte-1eajn4l"},m(e,t){i(e,r,t),I(W,r,null),l(r,n),l(r,s),Z&&Z.m(s,null),l(r,o),l(r,a),l(a,f),l(f,g),l(f,d),l(f,y),l(f,E),l(E,w),l(f,_),l(f,x),l(x,S),l(f,A),l(f,N),l(N,R),l(f,P),l(f,k),l(k,j),l(f,L),l(f,C),l(C,O),l(f,q),l(f,U),l(U,D),l(f,z),l(f,G),l(G,H),l(f,T),l(f,B),l(B,K),l(f,V),l(f,J),l(J,F),M=!0},p(e,r){var n={};e.segment&&(n.segment=r.segment),W.$set(n),Z&&Z.p&&e.$$scope&&Z.p(function(e,r,n,s){return e[1]?t({},t(r.$$scope.changed||{},e[1](s?s(n):{}))):r.$$scope.changed||{}}(X,r,e,null),c(X,r,null))},i(e){M||(W.$$.fragment.i(e),Z&&Z.i&&Z.i(e),M=!0)},o(e){W.$$.fragment.o(e),Z&&Z.o&&Z.o(e),M=!1},d(e){e&&u(r),W.$destroy(),Z&&Z.d(e)}}}function ee(e,t,r){let{segment:n}=t,{$$slots:s={},$$scope:o}=t;return e.$set=e=>{"segment"in e&&r("segment",n=e.segment),"$$scope"in e&&r("$$scope",o=e.$$scope)},{segment:n,$$slots:s,$$scope:o}}class te extends H{constructor(e){super(),G(this,e,ee,Z,a,["segment"])}}function re(e){var t,r,n=e.error.stack;return{c(){t=p("pre"),r=m(n)},l(e){var s=$(t=v(e,"PRE",{},!1));r=b(s,n),s.forEach(u)},m(e,n){i(e,t,n),l(t,r)},p(e,t){e.error&&n!==(n=t.error.stack)&&y(r,n)},d(e){e&&u(t)}}}function ne(t){var r,n,s,o,a,c,f,d,E,w=t.error.message;document.title=r=t.status;var _=t.dev&&t.error.stack&&re(t);return{c(){n=h(),s=p("h1"),o=m(t.status),a=h(),c=p("p"),f=m(w),d=h(),_&&_.c(),E=g(),this.h()},l(e){n=b(e,"\r\n\r\n");var r=$(s=v(e,"H1",{class:!0},!1));o=b(r,t.status),r.forEach(u),a=b(e,"\r\n\r\n");var l=$(c=v(e,"P",{class:!0},!1));f=b(l,w),l.forEach(u),d=b(e,"\r\n\r\n"),_&&_.l(e),E=g(),this.h()},h(){s.className="svelte-13vgy2g",c.className="svelte-13vgy2g"},m(e,t){i(e,n,t),i(e,s,t),l(s,o),i(e,a,t),i(e,c,t),l(c,f),i(e,d,t),_&&_.m(e,t),i(e,E,t)},p(e,t){e.status&&r!==(r=t.status)&&(document.title=r),e.status&&y(o,t.status),e.error&&w!==(w=t.error.message)&&y(f,w),t.dev&&t.error.stack?_?_.p(e,t):((_=re(t)).c(),_.m(E.parentNode,E)):_&&(_.d(1),_=null)},i:e,o:e,d(e){e&&(u(n),u(s),u(a),u(c),u(d)),_&&_.d(e),e&&u(E)}}}function se(e,t,r){let{status:n,error:s}=t;return e.$set=e=>{"status"in e&&r("status",n=e.status),"error"in e&&r("error",s=e.error)},{status:n,error:s,dev:false}}class oe extends H{constructor(e){super(),G(this,e,se,ne,a,["status","error"])}}function ae(e){var r,n,s=[e.level1.props],o=e.level1.component;function a(e){let r={};for(var n=0;n<s.length;n+=1)r=t(r,s[n]);return{props:r}}if(o)var c=new o(a());return{c(){c&&c.$$.fragment.c(),r=g()},l(e){c&&c.$$.fragment.l(e),r=g()},m(e,t){c&&I(c,e,t),i(e,r,t),n=!0},p(e,t){var n=e.level1?D(s,[t.level1.props]):{};if(o!==(o=t.level1.component)){if(c){O();const e=c;U(()=>{e.$destroy()}),e.$$.fragment.o(1),q()}o?((c=new o(a())).$$.fragment.c(),c.$$.fragment.i(1),I(c,r.parentNode,r)):c=null}else o&&c.$set(n)},i(e){n||(c&&c.$$.fragment.i(e),n=!0)},o(e){c&&c.$$.fragment.o(e),n=!1},d(e){e&&u(r),c&&c.$destroy(e)}}}function ce(e){var t,r=new oe({props:{error:e.error,status:e.status}});return{c(){r.$$.fragment.c()},l(e){r.$$.fragment.l(e)},m(e,n){I(r,e,n),t=!0},p(e,t){var n={};e.error&&(n.error=t.error),e.status&&(n.status=t.status),r.$set(n)},i(e){t||(r.$$.fragment.i(e),t=!0)},o(e){r.$$.fragment.o(e),t=!1},d(e){r.$destroy(e)}}}function le(e){var t,r,n,s,o=[ce,ae],a=[];function c(e){return e.error?0:1}return t=c(e),r=a[t]=o[t](e),{c(){r.c(),n=g()},l(e){r.l(e),n=g()},m(e,r){a[t].m(e,r),i(e,n,r),s=!0},p(e,s){var l=t;(t=c(s))===l?a[t].p(e,s):(O(),U(()=>{a[l].d(1),a[l]=null}),r.o(1),q(),(r=a[t])||(r=a[t]=o[t](s)).c(),r.i(1),r.m(n.parentNode,n))},i(e){s||(r&&r.i(),s=!0)},o(e){r&&r.o(),s=!1},d(e){a[t].d(e),e&&u(n)}}}function ie(e){var r,n=[{segment:e.segments[0]},e.level0.props];let s={$$slots:{default:[le]},$$scope:{ctx:e}};for(var o=0;o<n.length;o+=1)s=t(s,n[o]);var a=new te({props:s});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,t){I(a,e,t),r=!0},p(e,t){var r=e.segments||e.level0?D(n,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(e){r||(a.$$.fragment.i(e),r=!0)},o(e){a.$$.fragment.o(e),r=!1},d(e){a.$destroy(e)}}}function ue(e,t,r){let{stores:n,error:s,status:o,segments:a,level0:c,level1:l=null,notify:i}=t;var u,f,p;return u=i,_().$$.after_render.push(u),f=B,p=n,_().$$.context.set(f,p),e.$set=e=>{"stores"in e&&r("stores",n=e.stores),"error"in e&&r("error",s=e.error),"status"in e&&r("status",o=e.status),"segments"in e&&r("segments",a=e.segments),"level0"in e&&r("level0",c=e.level0),"level1"in e&&r("level1",l=e.level1),"notify"in e&&r("notify",i=e.notify)},{stores:n,error:s,status:o,segments:a,level0:c,level1:l,notify:i}}class fe extends H{constructor(e){super(),G(this,e,ue,ie,a,["stores","error","status","segments","level0","level1","notify"])}}const pe=[/^\/blog\.json$/,/^\/blog\/reference\/markdown-test\/?$/,/^\/blog\/reference\/hello-world\/?$/,/^\/blog\/drafts\/goodbye-flash\/?$/,/^\/blog\/posts\/links-from-2020\/?$/,/^\/blog\/([^\/]+?)\.json$/],me=[{js:()=>import("./index.1d8e2cb9.js"),css:[]},{js:()=>import("./old_home.4400f653.js"),css:[]},{js:()=>import("./about.6d4eabbd.js"),css:[]},{js:()=>import("./[slug].c5222b4a.js"),css:[]}],he=(ge=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/old_home\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:e=>({slug:ge(e[1])})}]}]);var ge;const de="undefined"!=typeof __SAPPER__&&__SAPPER__;let $e,ve,be,ye=!1,Ee=[],we="{}";const _e={page:function(e){const t=T(e);let r=!0;return{notify:function(){r=!0,t.update(e=>e)},set:function(e){r=!1,t.set(e)},subscribe:function(e){let n;return t.subscribe(t=>{(void 0===n||r&&t!==n)&&e(n=t)})}}}({}),preloading:T(null),session:T(de&&de.session)};let xe,Se;_e.session.subscribe(async e=>{if(xe=e,!ye)return;Se=!0;const t=Ce(new URL(location.href)),r=ve={},{redirect:n,props:s,branch:o}=await De(t);r===ve&&await Ue(n,o,s,t.page)});let Ae,Ne=null;let Re,Pe=1;const ke="undefined"!=typeof history?history:{pushState:(e,t,r)=>{},replaceState:(e,t,r)=>{},scrollRestoration:""},je={};function Le(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,r,n=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[r]&&(t[r]=[t[r]]),"object"==typeof t[r]?t[r].push(n):t[r]=n}),t}function Ce(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(de.baseUrl))return null;let t=e.pathname.slice(de.baseUrl.length);if(""===t&&(t="/"),!pe.some(e=>e.test(t)))for(let r=0;r<he.length;r+=1){const n=he[r],s=n.pattern.exec(t);if(s){const r=Le(e.search),o=n.parts[n.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:t,query:r,params:a};return{href:e.href,route:n,match:s,page:c}}}}function Oe(){return{x:pageXOffset,y:pageYOffset}}async function qe(e,t,r,n){if(t)Re=t;else{const e=Oe();je[Re]=e,t=Re=++Pe,je[Re]=r?e:{x:0,y:0}}Re=t,$e&&_e.preloading.set(!0);const s=Ne&&Ne.href===e.href?Ne.promise:De(e);Ne=null;const o=ve={},{redirect:a,props:c,branch:l}=await s;if(o===ve&&(await Ue(a,l,c,e.page),document.activeElement&&document.activeElement.blur(),!r)){let e=je[t];if(n){const t=document.getElementById(n.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top+scrollY})}je[Re]=e,e&&scrollTo(e.x,e.y)}}async function Ue(e,t,r,n){if(e)return function(e,t={replaceState:!1}){const r=Ce(new URL(e,document.baseURI));return r?(ke[t.replaceState?"replaceState":"pushState"]({id:Re},"",e),qe(r,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(_e.page.set(n),_e.preloading.set(!1),$e)$e.$set(r);else{r.stores={page:{subscribe:_e.page.subscribe},preloading:{subscribe:_e.preloading.subscribe},session:_e.session},r.level0={props:await be},r.notify=_e.page.notify;const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)ze(e.nextSibling);ze(e),ze(t)}$e=new fe({target:Ae,props:r,hydrate:!0})}Ee=t,we=JSON.stringify(n.query),ye=!0,Se=!1}async function De(e){const{route:t,page:r}=e,n=r.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[n[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let c;be||(be=de.preloaded[0]||K.call(a,{host:r.host,path:r.path,query:r.query,params:{}},xe));let l=1;try{const s=JSON.stringify(r.query),i=t.pattern.exec(r.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const f=n[c];if(function(e,t,r,n){if(n!==we)return!0;const s=Ee[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(r.slice(1,e+2)))||void 0)}(c,f,i,s)&&(u=!0),o.segments[l]=n[c+1],!t)return{segment:f};const p=l++;if(!Se&&!u&&Ee[c]&&Ee[c].part===t.i)return Ee[c];u=!1;const{default:m,preload:h}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Ie);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(me[t.i]);let g;return g=ye||!de.preloaded[c+1]?h?await h.call(a,{host:r.host,path:r.path,query:r.query,params:t.params?t.params(e.match):{}},xe):{}:de.preloaded[c+1],o["level"+p]={component:m,props:g,segment:f,match:i,part:t.i}}))}catch(e){o.error=e,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Ie(e){const t="client/"+e;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,r)=>{const n=document.createElement("link");n.rel="stylesheet",n.href=t,n.onload=()=>e(),n.onerror=r,document.head.appendChild(n)})}function ze(e){e.parentNode.removeChild(e)}function Ge(e){const t=Ce(new URL(e,document.baseURI));if(t)return Ne&&e===Ne.href||function(e,t){Ne={href:e,promise:t}}(e,De(t)),Ne.promise}let He;function Te(e){clearTimeout(He),He=setTimeout(()=>{Be(e)},20)}function Be(e){const t=Ve(e.target);t&&"prefetch"===t.rel&&Ge(t.href)}function Ke(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Ve(e.target);if(!t)return;if(!t.href)return;const r="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,n=String(r?t.href.baseVal:t.href);if(n===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(r?t.target.baseVal:t.target)return;const s=new URL(n);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Ce(s);if(o){qe(o,null,t.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),ke.pushState({id:Re},"",s.href)}}function Ve(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Je(e){if(je[Re]=Oe(),e.state){const t=Ce(new URL(location.href));t?qe(t,e.state.id):location.href=location.href}else Pe=Pe+1,function(e){Re=e}(Pe),ke.replaceState({id:Re},"",location.href)}var Fe;Fe={target:document.querySelector("#sapper")},"scrollRestoration"in ke&&(ke.scrollRestoration="manual"),addEventListener("beforeunload",()=>{ke.scrollRestoration="auto"}),addEventListener("load",()=>{ke.scrollRestoration="manual"}),function(e){Ae=e}(Fe.target),addEventListener("click",Ke),addEventListener("popstate",Je),addEventListener("touchstart",Be),addEventListener("mousemove",Te),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ke.replaceState({id:Pe},"",t);const r=new URL(location.href);if(de.error)return function(e){const{host:t,pathname:r,search:n}=location,{session:s,preloaded:o,status:a,error:c}=de;be||(be=o&&o[0]),Ue(null,[],{error:c,status:a,session:s,level0:{props:be},level1:{props:{status:a,error:c},component:oe},segments:o},{host:t,path:r,query:Le(n),params:{}})}();const n=Ce(r);return n?qe(n,Pe,!0,e):void 0});export{H as S,h as a,v as b,b as c,$ as d,p as e,u as f,i as g,l as h,G as i,y as j,d as k,f as l,I as m,e as n,a as s,m as t};
