import{_ as t,a as s,b as n,c as o,i as a,s as r,d as e,S as c,e as i,f,t as l,g as u,h,j as p,k as v,l as d,m,n as g,o as E,p as N}from"./client.1a8c03d5.js";function x(t,s,n){var o=Object.create(t);return o.post=s[n],o.index=n,o}function b(t){var s;return{c:function(){s=f("hr"),this.h()},l:function(t){s=h(t,"HR",{class:!0},!1),p(s).forEach(v),this.h()},h:function(){s.className="svelte-1cw57nd"},m:function(t,n){d(t,s,n)},d:function(t){t&&v(s)}}}function j(t){var s,n,o,a,r,e,c,E,N,x,j,D,w,I,V,A=t.post.title,H=t.post.excerpt,P=t.post.printDate,S=t.index&&b();return{c:function(){S&&S.c(),s=i(),n=f("div"),o=f("h2"),a=f("a"),r=l(A),c=i(),E=f("p"),N=l(H),x=i(),j=f("div"),D=f("span"),w=l("— "),I=l(P),V=i(),this.h()},l:function(t){S&&S.l(t),s=u(t,"\r\n    "),n=h(t,"DIV",{class:!0},!1);var e=p(n);o=h(e,"H2",{class:!0},!1);var i=p(o);a=h(i,"A",{rel:!0,href:!0},!1);var f=p(a);r=u(f,A),f.forEach(v),i.forEach(v),c=u(e,"\r\n      "),E=h(e,"P",{},!1);var l=p(E);N=u(l,H),l.forEach(v),x=u(e,"\r\n      "),j=h(e,"DIV",{class:!0},!1);var d=p(j);D=h(d,"SPAN",{class:!0},!1);var m=p(D);w=u(m,"— "),I=u(m,P),m.forEach(v),d.forEach(v),V=u(e,"\r\n    "),e.forEach(v),this.h()},h:function(){a.rel="prefetch",a.href=e="blog/"+t.post.slug,o.className="svelte-1cw57nd",D.className="post-item-date svelte-1cw57nd",j.className="post-item-footer svelte-1cw57nd",n.className="post-item"},m:function(t,e){S&&S.m(t,e),d(t,s,e),d(t,n,e),m(n,o),m(o,a),m(a,r),m(n,c),m(n,E),m(E,N),m(n,x),m(n,j),m(j,D),m(D,w),m(D,I),m(n,V)},p:function(t,n){n.index?S||((S=b()).c(),S.m(s.parentNode,s)):S&&(S.d(1),S=null),t.posts&&A!==(A=n.post.title)&&g(r,A),t.posts&&e!==(e="blog/"+n.post.slug)&&(a.href=e),t.posts&&H!==(H=n.post.excerpt)&&g(N,H),t.posts&&P!==(P=n.post.printDate)&&g(I,P)},d:function(t){S&&S.d(t),t&&(v(s),v(n))}}}function D(t){for(var s,n,o=t.posts,a=[],r=0;r<o.length;r+=1)a[r]=j(x(t,o,r));return{c:function(){s=i(),n=f("div");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){s=u(t,"\r\n\r\n"),n=h(t,"DIV",{class:!0},!1);for(var o=p(n),r=0;r<a.length;r+=1)a[r].l(o);o.forEach(v),this.h()},h:function(){document.title="polats.com/blog",n.className="container"},m:function(t,o){d(t,s,o),d(t,n,o);for(var r=0;r<a.length;r+=1)a[r].m(n,null)},p:function(t,s){if(t.posts){o=s.posts;for(var r=0;r<o.length;r+=1){var e=x(s,o,r);a[r]?a[r].p(t,e):(a[r]=j(e),a[r].c(),a[r].m(n,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=o.length}},i:E,o:E,d:function(t){t&&(v(s),v(n)),N(a,t)}}}function w(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function I(t,s,n){var o=s.posts;return t.$set=function(t){"posts"in t&&n("posts",o=t.posts)},{posts:o}}var V=function(i){function f(t){var c;return s(this,f),c=n(this,o(f).call(this)),a(e(c),t,I,D,r,["posts"]),c}return t(f,c),f}();export default V;export{w as preload};
