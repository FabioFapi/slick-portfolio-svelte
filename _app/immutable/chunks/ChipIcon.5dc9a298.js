import{s as d,f as m,g,h as v,d as f,j as l,T as _,$ as o,i as y,I,n as u,L as b}from"./scheduler.e949bcc4.js";import{S as w,i as C}from"./index.42c33976.js";import{t as p}from"./params.6d8c7a1f.js";function q(i){let e,a,c;return{c(){e=m("div"),a=m("img"),this.h()},l(s){e=g(s,"DIV",{class:!0,"data-help":!0});var t=v(e);a=g(t,"IMG",{class:!0,src:!0,alt:!0}),t.forEach(f),this.h()},h(){l(a,"class","chip-icon-logo svelte-1w2wshb"),_(a.src,c=i[1])||l(a,"src",c),l(a,"alt",i[0]),o(a,"chip-icon-logo-inverted",i[4]&&i[2]),l(e,"class","chip-icon svelte-1w2wshb"),l(e,"data-help",i[0]),o(e,"chip-icon-grayscale",i[3])},m(s,t){y(s,e,t),I(e,a)},p(s,[t]){t&2&&!_(a.src,c=s[1])&&l(a,"src",c),t&1&&l(a,"alt",s[0]),t&20&&o(a,"chip-icon-logo-inverted",s[4]&&s[2]),t&1&&l(e,"data-help",s[0]),t&8&&o(e,"chip-icon-grayscale",s[3])},i:u,o:u,d(s){s&&f(e)}}}function S(i,e,a){let c;b(i,p,n=>a(4,c=n));let{name:s}=e,{logo:t}=e,{inverted:r=!1}=e,{grayscale:h=!0}=e;return i.$$set=n=>{"name"in n&&a(0,s=n.name),"logo"in n&&a(1,t=n.logo),"inverted"in n&&a(2,r=n.inverted),"grayscale"in n&&a(3,h=n.grayscale)},[s,t,r,h,c]}class G extends w{constructor(e){super(),C(this,e,S,q,d,{name:0,logo:1,inverted:2,grayscale:3})}}export{G as C};
