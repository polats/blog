import{S as s,i as t,s as e,a as r,e as a,t as o,c as n,b as c,d as l,f as h,g as p,h as i,j as f,n as d,k as u}from"./client.1a06adc8.js";function v(s,t,e){const r=Object.create(s);return r.post=t[e],r.index=e,r}function m(s){var t;return{c(){t=a("hr"),this.h()},l(s){t=c(s,"HR",{class:!0},!1),l(t).forEach(h),this.h()},h(){t.className="svelte-1cw57nd"},m(s,e){p(s,t,e)},d(s){s&&h(t)}}}function g(s){var t,e,d,u,v,g,E,x,N,b,j,D,w,B,H,I=s.post.title,V=s.post.excerpt,A=s.post.printDate,P=s.index&&m();return{c(){P&&P.c(),t=r(),e=a("div"),d=a("h2"),u=a("a"),v=o(I),E=r(),x=a("p"),N=o(V),b=r(),j=a("div"),D=a("span"),w=o("— "),B=o(A),H=r(),this.h()},l(s){P&&P.l(s),t=n(s,"\r\n    "),e=c(s,"DIV",{class:!0},!1);var r=l(e);d=c(r,"H2",{class:!0},!1);var a=l(d);u=c(a,"A",{rel:!0,href:!0},!1);var o=l(u);v=n(o,I),o.forEach(h),a.forEach(h),E=n(r,"\r\n      "),x=c(r,"P",{},!1);var p=l(x);N=n(p,V),p.forEach(h),b=n(r,"\r\n      "),j=c(r,"DIV",{class:!0},!1);var i=l(j);D=c(i,"SPAN",{class:!0},!1);var f=l(D);w=n(f,"— "),B=n(f,A),f.forEach(h),i.forEach(h),H=n(r,"\r\n    "),r.forEach(h),this.h()},h(){u.rel="prefetch",u.href=g="blog/"+s.post.slug,d.className="svelte-1cw57nd",D.className="post-item-date svelte-1cw57nd",j.className="post-item-footer svelte-1cw57nd",e.className="post-item"},m(s,r){P&&P.m(s,r),p(s,t,r),p(s,e,r),i(e,d),i(d,u),i(u,v),i(e,E),i(e,x),i(x,N),i(e,b),i(e,j),i(j,D),i(D,w),i(D,B),i(e,H)},p(s,e){e.index?P||((P=m()).c(),P.m(t.parentNode,t)):P&&(P.d(1),P=null),s.posts&&I!==(I=e.post.title)&&f(v,I),s.posts&&g!==(g="blog/"+e.post.slug)&&(u.href=g),s.posts&&V!==(V=e.post.excerpt)&&f(N,V),s.posts&&A!==(A=e.post.printDate)&&f(B,A)},d(s){P&&P.d(s),s&&(h(t),h(e))}}}function E(s){for(var t,e,f,m,E,x=s.posts,N=[],b=0;b<x.length;b+=1)N[b]=g(v(s,x,b));return{c(){t=r(),e=a("div"),f=a("h1"),m=o("Blog"),E=r();for(var s=0;s<N.length;s+=1)N[s].c();this.h()},l(s){t=n(s,"\r\n\r\n"),e=c(s,"DIV",{class:!0},!1);var r=l(e);f=c(r,"H1",{},!1);var a=l(f);m=n(a,"Blog"),a.forEach(h),E=n(r,"\r\n  ");for(var o=0;o<N.length;o+=1)N[o].l(r);r.forEach(h),this.h()},h(){document.title="Blog",e.className="container"},m(s,r){p(s,t,r),p(s,e,r),i(e,f),i(f,m),i(e,E);for(var a=0;a<N.length;a+=1)N[a].m(e,null)},p(s,t){if(s.posts){x=t.posts;for(var r=0;r<x.length;r+=1){const a=v(t,x,r);N[r]?N[r].p(s,a):(N[r]=g(a),N[r].c(),N[r].m(e,null))}for(;r<N.length;r+=1)N[r].d(1);N.length=x.length}},i:d,o:d,d(s){s&&(h(t),h(e)),u(N,s)}}}function x({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function N(s,t,e){let{posts:r}=t;return s.$set=s=>{"posts"in s&&e("posts",r=s.posts)},{posts:r}}export default class extends s{constructor(s){super(),t(this,s,N,E,e,["posts"])}}export{x as preload};
