import{_ as t,a as s,b as n,c as o,i as r,s as a,d as e,S as c,e as i,f,t as l,g as h,h as u,j as p,k as v,l as d,m,n as g,o as E,p as N}from"./client.c0f685b5.js";function x(t,s,n){var o=Object.create(t);return o.post=s[n],o.index=n,o}function b(t){var s;return{c:function(){s=f("hr"),this.h()},l:function(t){s=u(t,"HR",{class:!0},!1),p(s).forEach(v),this.h()},h:function(){s.className="svelte-1cw57nd"},m:function(t,n){d(t,s,n)},d:function(t){t&&v(s)}}}function j(t){var s,n,o,r,a,e,c,E,N,x,j,D,w,B,H,I=t.post.title,V=t.post.excerpt,A=t.post.printDate,P=t.index&&b();return{c:function(){P&&P.c(),s=i(),n=f("div"),o=f("h2"),r=f("a"),a=l(I),c=i(),E=f("p"),N=l(V),x=i(),j=f("div"),D=f("span"),w=l("— "),B=l(A),H=i(),this.h()},l:function(t){P&&P.l(t),s=h(t,"\r\n    "),n=u(t,"DIV",{class:!0},!1);var e=p(n);o=u(e,"H2",{class:!0},!1);var i=p(o);r=u(i,"A",{rel:!0,href:!0},!1);var f=p(r);a=h(f,I),f.forEach(v),i.forEach(v),c=h(e,"\r\n      "),E=u(e,"P",{},!1);var l=p(E);N=h(l,V),l.forEach(v),x=h(e,"\r\n      "),j=u(e,"DIV",{class:!0},!1);var d=p(j);D=u(d,"SPAN",{class:!0},!1);var m=p(D);w=h(m,"— "),B=h(m,A),m.forEach(v),d.forEach(v),H=h(e,"\r\n    "),e.forEach(v),this.h()},h:function(){r.rel="prefetch",r.href=e="blog/"+t.post.slug,o.className="svelte-1cw57nd",D.className="post-item-date svelte-1cw57nd",j.className="post-item-footer svelte-1cw57nd",n.className="post-item"},m:function(t,e){P&&P.m(t,e),d(t,s,e),d(t,n,e),m(n,o),m(o,r),m(r,a),m(n,c),m(n,E),m(E,N),m(n,x),m(n,j),m(j,D),m(D,w),m(D,B),m(n,H)},p:function(t,n){n.index?P||((P=b()).c(),P.m(s.parentNode,s)):P&&(P.d(1),P=null),t.posts&&I!==(I=n.post.title)&&g(a,I),t.posts&&e!==(e="blog/"+n.post.slug)&&(r.href=e),t.posts&&V!==(V=n.post.excerpt)&&g(N,V),t.posts&&A!==(A=n.post.printDate)&&g(B,A)},d:function(t){P&&P.d(t),t&&(v(s),v(n))}}}function D(t){for(var s,n,o,r,a,e=t.posts,c=[],g=0;g<e.length;g+=1)c[g]=j(x(t,e,g));return{c:function(){s=i(),n=f("div"),o=f("h1"),r=l("/Blog"),a=i();for(var t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){s=h(t,"\r\n\r\n"),n=u(t,"DIV",{class:!0},!1);var e=p(n);o=u(e,"H1",{},!1);var i=p(o);r=h(i,"/Blog"),i.forEach(v),a=h(e,"\r\n  ");for(var f=0;f<c.length;f+=1)c[f].l(e);e.forEach(v),this.h()},h:function(){document.title="Blog",n.className="container"},m:function(t,e){d(t,s,e),d(t,n,e),m(n,o),m(o,r),m(n,a);for(var i=0;i<c.length;i+=1)c[i].m(n,null)},p:function(t,s){if(t.posts){e=s.posts;for(var o=0;o<e.length;o+=1){var r=x(s,e,o);c[o]?c[o].p(t,r):(c[o]=j(r),c[o].c(),c[o].m(n,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=e.length}},i:E,o:E,d:function(t){t&&(v(s),v(n)),N(c,t)}}}function w(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function B(t,s,n){var o=s.posts;return t.$set=function(t){"posts"in t&&n("posts",o=t.posts)},{posts:o}}var H=function(i){function f(t){var c;return s(this,f),c=n(this,o(f).call(this)),r(e(c),t,B,D,a,["posts"]),c}return t(f,c),f}();export default H;export{w as preload};
