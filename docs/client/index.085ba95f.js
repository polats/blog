import{S as t,i as e,s as o,a,e as n,t as s,c as r,b as c,d as p,f as l,g as m,h,j as i,k as d,n as u,l as f}from"./client.5761c68d.js";function g(t,e,o){const a=Object.create(t);return a.post=e[o],a.index=o,a}function E(t){var e;return{c(){e=n("hr"),this.h()},l(t){e=c(t,"HR",{class:!0},!1),p(e).forEach(l),this.h()},h(){e.className="svelte-1cw57nd"},m(t,o){m(t,e,o)},d(t){t&&l(e)}}}function v(t){var e,o,a,s;return{c(){e=n("p"),o=n("img"),this.h()},l(t){e=c(t,"P",{},!1);var a=p(e);o=c(a,"IMG",{src:!0,alt:!0},!1),p(o).forEach(l),a.forEach(l),this.h()},h(){o.src=a=t.post.image,o.alt=s=t.post.image},m(t,a){m(t,e,a),h(e,o)},p(t,e){t.posts&&a!==(a=e.post.image)&&(o.src=a),t.posts&&s!==(s=e.post.image)&&(o.alt=s)},d(t){t&&l(e)}}}function y(t){var e,o,d,u,f,g,y,A,M,w,T,b,x,N,j,D,G=t.post.title,P=t.post.excerpt,I=t.post.printDate,W=t.index&&E(),V=t.post.image&&v(t);return{c(){W&&W.c(),e=a(),o=n("div"),d=n("h2"),u=n("a"),f=s(G),g=a(),V&&V.c(),A=a(),M=n("p"),w=s(P),T=a(),b=n("div"),x=n("span"),N=s("— "),j=s(I),D=a(),this.h()},l(t){W&&W.l(t),e=r(t,"\r\n    "),o=c(t,"DIV",{class:!0},!1);var a=p(o);d=c(a,"H2",{class:!0},!1);var n=p(d);u=c(n,"A",{rel:!0,href:!0},!1);var s=p(u);f=r(s,G),g=r(s,"\r\n            "),V&&V.l(s),s.forEach(l),n.forEach(l),A=r(a,"\r\n      "),M=c(a,"P",{},!1);var m=p(M);w=r(m,P),m.forEach(l),T=r(a,"\r\n      "),b=c(a,"DIV",{class:!0},!1);var h=p(b);x=c(h,"SPAN",{class:!0},!1);var i=p(x);N=r(i,"— "),j=r(i,I),i.forEach(l),h.forEach(l),D=r(a,"\r\n    "),a.forEach(l),this.h()},h(){u.rel="prefetch",u.href=y="blog/"+t.post.slug,d.className="svelte-1cw57nd",x.className="post-item-date svelte-1cw57nd",b.className="post-item-footer svelte-1cw57nd",o.className="post-item"},m(t,a){W&&W.m(t,a),m(t,e,a),m(t,o,a),h(o,d),h(d,u),h(u,f),h(u,g),V&&V.m(u,null),h(o,A),h(o,M),h(M,w),h(o,T),h(o,b),h(b,x),h(x,N),h(x,j),h(o,D)},p(t,o){o.index?W||((W=E()).c(),W.m(e.parentNode,e)):W&&(W.d(1),W=null),t.posts&&G!==(G=o.post.title)&&i(f,G),o.post.image?V?V.p(t,o):((V=v(o)).c(),V.m(u,null)):V&&(V.d(1),V=null),t.posts&&y!==(y="blog/"+o.post.slug)&&(u.href=y),t.posts&&P!==(P=o.post.excerpt)&&i(w,P),t.posts&&I!==(I=o.post.printDate)&&i(j,I)},d(t){W&&W.d(t),t&&(l(e),l(o)),V&&V.d()}}}function A(t){for(var e,o,s,i,E,v,A,M,w,T,b,x,N,j=t.posts,D=[],G=0;G<j.length;G+=1)D[G]=y(g(t,j,G));return{c(){e=n("meta"),o=n("meta"),s=n("meta"),i=n("meta"),E=n("meta"),v=n("meta"),A=n("meta"),M=n("meta"),w=n("meta"),T=n("meta"),b=n("meta"),x=a(),N=n("div");for(var t=0;t<D.length;t+=1)D[t].c();this.h()},l(t){e=c(t,"META",{property:!0,content:!0},!1),p(e).forEach(l),o=c(t,"META",{property:!0,content:!0},!1),p(o).forEach(l),s=c(t,"META",{property:!0,content:!0},!1),p(s).forEach(l),i=c(t,"META",{property:!0,content:!0},!1),p(i).forEach(l),E=c(t,"META",{property:!0,content:!0},!1),p(E).forEach(l),v=c(t,"META",{name:!0,content:!0},!1),p(v).forEach(l),A=c(t,"META",{property:!0,content:!0},!1),p(A).forEach(l),M=c(t,"META",{property:!0,content:!0},!1),p(M).forEach(l),w=c(t,"META",{name:!0,content:!0},!1),p(w).forEach(l),T=c(t,"META",{name:!0,content:!0},!1),p(T).forEach(l),b=c(t,"META",{name:!0,content:!0},!1),p(b).forEach(l),x=r(t,"\r\n\r\n"),N=c(t,"DIV",{class:!0},!1);for(var a=p(N),n=0;n<D.length;n+=1)D[n].l(a);a.forEach(l),this.h()},h(){document.title="@polats (Paul Gadi)",d(e,"property","og:url"),e.content="https://polats.com",d(o,"property","og:type"),o.content="website",d(s,"property","og:title"),s.content="@polats (Paul Gadi)",d(i,"property","og:description"),i.content="Writing on Web 3.0 Game Development",d(E,"property","og:image"),E.content="https://polats.com/blog/gamingguild.jpg",v.name="twitter:card",v.content="summary_large_image",d(A,"property","twitter:domain"),A.content="polats.com",d(M,"property","twitter:url"),M.content="https://polats.com",w.name="twitter:title",w.content="@polats (Paul Gadi)",T.name="twitter:description",T.content="Writing on Web 3.0 Game Development",b.name="twitter:image",b.content="https://polats.com/blog/gamingguild.jpg",N.className="container"},m(t,a){h(document.head,e),h(document.head,o),h(document.head,s),h(document.head,i),h(document.head,E),h(document.head,v),h(document.head,A),h(document.head,M),h(document.head,w),h(document.head,T),h(document.head,b),m(t,x,a),m(t,N,a);for(var n=0;n<D.length;n+=1)D[n].m(N,null)},p(t,e){if(t.posts){j=e.posts;for(var o=0;o<j.length;o+=1){const a=g(e,j,o);D[o]?D[o].p(t,a):(D[o]=y(a),D[o].c(),D[o].m(N,null))}for(;o<D.length;o+=1)D[o].d(1);D.length=j.length}},i:u,o:u,d(t){l(e),l(o),l(s),l(i),l(E),l(v),l(A),l(M),l(w),l(T),l(b),t&&(l(x),l(N)),f(D,t)}}}function M({params:t,query:e}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function w(t,e,o){let{posts:a}=e;return t.$set=t=>{"posts"in t&&o("posts",a=t.posts)},{posts:a}}export default class extends t{constructor(t){super(),e(this,t,w,A,o,["posts"])}}export{M as preload};