import{S as t,i as e,s as a,e as s,c as r,b as l,f as c,h as o,j as n,k as i,w as h,a as v,t as u,g as d,d as f,l as g,z as p,A as m,B as E,C as w,D as b,E as y,p as x,x as D,q as I,r as A,v as V,F as k,G as S,o as j,I as M}from"./client.162b262e.js";import{g as $}from"./helpers.ec915d4f.js";function P(t){let e,a,v,u;return{c(){e=s("div"),a=s("div"),v=s("iframe"),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);a=r(s,"DIV",{class:!0});var o=l(a);v=r(o,"IFRAME",{width:!0,height:!0,title:!0,src:!0,frameborder:!0,allowfullscreen:!0,class:!0}),l(v).forEach(c),o.forEach(c),s.forEach(c),this.h()},h(){o(v,"width","560"),o(v,"height","315"),o(v,"title","Video"),v.src!==(u="https://www.youtube.com/embed/"+t[0])&&o(v,"src",u),o(v,"frameborder","0"),v.allowFullscreen=!0,o(v,"class","svelte-1qjupgm"),o(a,"class","video-container svelte-1qjupgm"),o(e,"class","video svelte-1qjupgm")},m(t,s){n(t,e,s),i(e,a),i(a,v)},p:h,i:h,o:h,d(t){t&&c(e)}}}function q(t,e,a){let{url:s}=e;let r=(t=>{var e=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return!(!e||11!=e[7].length)&&e[7]})(s);return t.$$set=(t=>{"url"in t&&a(1,s=t.url)}),[r,s]}class B extends t{constructor(t){super(),e(this,t,q,P,a,{url:1})}}function T(t,e,a){const s=t.slice();return s[8]=e[a],s[10]=a,s}function _(t,e,a){const s=t.slice();return s[8]=e[a],s[12]=a,s}function L(t){let e,a,h=t[8]+"";return{c(){e=s("div"),a=u(h),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);a=f(s,h),s.forEach(c),this.h()},h(){o(e,"class","author-name svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a)},p(t,e){1&e&&h!==(h=t[8]+"")&&g(a,h)},d(t){t&&c(e)}}}function C(t){let e,a,h,v=t[8]+"",d=t[0].equals.filter(p).length>0?"*":"";function p(...e){return t[2](t[8],...e)}return{c(){e=s("div"),a=u(v),h=u(d),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);a=f(s,v),h=f(s,d),s.forEach(c),this.h()},h(){o(e,"class","author-name svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a),i(e,h)},p(e,s){t=e,1&s&&v!==(v=t[8]+"")&&g(a,v),1&s&&d!==(d=t[0].equals.filter(p).length>0?"*":"")&&g(h,d)},d(t){t&&c(e)}}}function z(t){let e,a,h,p,m,E,w,b,y,x,D,I=t[12]===t[0].authors.length-1?"":",";function A(t,e){return void 0!==t[0].equals?C:L}let V=A(t),k=V(t);return{c(){e=s("a"),a=s("div"),h=s("img"),E=v(),k.c(),w=v(),b=s("div"),y=u(I),x=v(),this.h()},l(t){e=r(t,"A",{href:!0,target:!0,class:!0});var s=l(e);a=r(s,"DIV",{class:!0});var o=l(a);h=r(o,"IMG",{alt:!0,src:!0,class:!0}),E=d(o),k.l(o),w=d(o),b=r(o,"DIV",{class:!0});var n=l(b);y=f(n,I),n.forEach(c),o.forEach(c),x=d(s),s.forEach(c),this.h()},h(){o(h,"alt",p=t[8]+" picture"),h.src!==(m="images/people/"+t[8]+".jpg")&&o(h,"src",m),o(h,"class","svelte-1a8t81v"),o(b,"class","author-comma"),o(a,"class","author svelte-1a8t81v"),o(e,"href",D=t[1][t[8]].url),o(e,"target","_self"),o(e,"class","svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a),i(a,h),i(a,E),k.m(a,null),i(a,w),i(a,b),i(b,y),i(e,x)},p(t,s){1&s&&p!==(p=t[8]+" picture")&&o(h,"alt",p),1&s&&h.src!==(m="images/people/"+t[8]+".jpg")&&o(h,"src",m),V===(V=A(t))&&k?k.p(t,s):(k.d(1),(k=V(t))&&(k.c(),k.m(a,w))),1&s&&I!==(I=t[12]===t[0].authors.length-1?"":",")&&g(y,I),3&s&&D!==(D=t[1][t[8]].url)&&o(e,"href",D)},d(t){t&&c(e),k.d()}}}function N(t){let e,a;return{c(){e=s("div"),a=u("( * Authors contributed equally )"),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);a=f(s,"( * Authors contributed equally )"),s.forEach(c),this.h()},h(){o(e,"class","icon-container italic svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a)},d(t){t&&c(e)}}}function R(t){let e,a,h,g,x,D;return x=new B({props:{url:t[0].video}}),{c(){e=s("div"),a=s("div"),h=u("Demo Video"),g=v(),p(x.$$.fragment),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);a=r(s,"DIV",{class:!0});var o=l(a);h=f(o,"Demo Video"),o.forEach(c),g=d(s),m(x.$$.fragment,s),s.forEach(c),this.h()},h(){o(a,"class","block-name svelte-1a8t81v"),o(e,"class","block video-block svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a),i(a,h),i(e,g),E(x,e,null),D=!0},p(t,e){const a={};1&e&&(a.url=t[0].video),x.$set(a)},i(t){D||(w(x.$$.fragment,t),D=!0)},o(t){b(x.$$.fragment,t),D=!1},d(t){t&&c(e),y(x)}}}function U(t){let e,a,h=t[8]+"";return{c(){e=s("div"),a=u(h),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);a=f(s,h),s.forEach(c),this.h()},h(){o(e,"class","author-name citation svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a)},p(t,e){1&e&&h!==(h=t[8]+"")&&g(a,h)},d(t){t&&c(e)}}}function J(t){let e,a,h,v=t[8]+"",d=t[0].equals.filter(p).length>0?"*":"";function p(...e){return t[3](t[8],...e)}return{c(){e=s("div"),a=u(v),h=u(d),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);a=f(s,v),h=f(s,d),s.forEach(c),this.h()},h(){o(e,"class","author-name citation svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a),i(e,h)},p(e,s){t=e,1&s&&v!==(v=t[8]+"")&&g(a,v),1&s&&d!==(d=t[0].equals.filter(p).length>0?"*":"")&&g(h,d)},d(t){t&&c(e)}}}function W(t){let e,a,h,p,m,E,w,b=t[10]===t[0].authors.length-1?"":",";function y(t,e){return void 0!==t[0].equals?J:U}let x=y(t),D=x(t);return{c(){e=s("a"),a=s("div"),D.c(),h=v(),p=s("div"),m=u(b),E=v(),this.h()},l(t){e=r(t,"A",{href:!0,target:!0,class:!0});var s=l(e);a=r(s,"DIV",{class:!0});var o=l(a);D.l(o),h=d(o),p=r(o,"DIV",{class:!0});var n=l(p);m=f(n,b),n.forEach(c),o.forEach(c),E=d(s),s.forEach(c),this.h()},h(){o(p,"class","author-comma"),o(a,"class","author citation svelte-1a8t81v"),o(e,"href",w=t[1][t[8]].url),o(e,"target","_self"),o(e,"class","svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a),D.m(a,null),i(a,h),i(a,p),i(p,m),i(e,E)},p(t,s){x===(x=y(t))&&D?D.p(t,s):(D.d(1),(D=x(t))&&(D.c(),D.m(a,h))),1&s&&b!==(b=t[10]===t[0].authors.length-1?"":",")&&g(m,b),3&s&&w!==(w=t[1][t[8]].url)&&o(e,"href",w)},d(t){t&&c(e),D.d()}}}function F(t){let e,a,h,g,p,m,E,w;return{c(){e=s("a"),a=s("div"),h=x("svg"),g=x("use"),p=v(),m=s("span"),E=u("Demo"),this.h()},l(t){e=r(t,"A",{class:!0,href:!0,target:!0});var s=l(e);a=r(s,"DIV",{class:!0});var o=l(a);h=r(o,"svg",{viewBox:!0,class:!0},1);var n=l(h);g=r(n,"use",{"xlink:href":!0},1),l(g).forEach(c),n.forEach(c),o.forEach(c),p=d(s),m=r(s,"SPAN",{class:!0});var i=l(m);E=f(i,"Demo"),i.forEach(c),s.forEach(c),this.h()},h(){D(g,"xlink:href","/sprite.svg#rocket-sharp"),o(h,"viewBox","0 0 100 100"),o(h,"class","svelte-1a8t81v"),o(a,"class","svg-icon svelte-1a8t81v"),o(m,"class","svelte-1a8t81v"),o(e,"class","icon-container svelte-1a8t81v"),o(e,"href",w=t[0].demo),o(e,"target","_self")},m(t,s){n(t,e,s),i(e,a),i(a,h),i(h,g),i(e,p),i(e,m),i(m,E)},p(t,a){1&a&&w!==(w=t[0].demo)&&o(e,"href",w)},d(t){t&&c(e)}}}function H(t){let e,a,h,g,p,m,E,w;return{c(){e=s("a"),a=s("div"),h=x("svg"),g=x("use"),p=v(),m=s("span"),E=u("Video"),this.h()},l(t){e=r(t,"A",{class:!0,href:!0,target:!0});var s=l(e);a=r(s,"DIV",{class:!0});var o=l(a);h=r(o,"svg",{viewBox:!0,class:!0},1);var n=l(h);g=r(n,"use",{"xlink:href":!0},1),l(g).forEach(c),n.forEach(c),o.forEach(c),p=d(s),m=r(s,"SPAN",{class:!0});var i=l(m);E=f(i,"Video"),i.forEach(c),s.forEach(c),this.h()},h(){D(g,"xlink:href","/sprite.svg#play-solid"),o(h,"viewBox","0 0 100 100"),o(h,"class","svelte-1a8t81v"),o(a,"class","svg-icon svelte-1a8t81v"),o(m,"class","svelte-1a8t81v"),o(e,"class","icon-container svelte-1a8t81v"),o(e,"href",w=t[0].video),o(e,"target","_self")},m(t,s){n(t,e,s),i(e,a),i(a,h),i(h,g),i(e,p),i(e,m),i(m,E)},p(t,a){1&a&&w!==(w=t[0].video)&&o(e,"href",w)},d(t){t&&c(e)}}}function G(t){let e,a,h,g,p,m,E,w;return{c(){e=s("a"),a=s("div"),h=x("svg"),g=x("use"),p=v(),m=s("span"),E=u("PDF"),this.h()},l(t){e=r(t,"A",{class:!0,href:!0,target:!0});var s=l(e);a=r(s,"DIV",{class:!0});var o=l(a);h=r(o,"svg",{viewBox:!0,class:!0},1);var n=l(h);g=r(n,"use",{"xlink:href":!0},1),l(g).forEach(c),n.forEach(c),o.forEach(c),p=d(s),m=r(s,"SPAN",{class:!0});var i=l(m);E=f(i,"PDF"),i.forEach(c),s.forEach(c),this.h()},h(){D(g,"xlink:href","/sprite.svg#file-pdf-solid"),o(h,"viewBox","0 0 100 100"),o(h,"class","svelte-1a8t81v"),o(a,"class","svg-icon svelte-1a8t81v"),o(m,"class","svelte-1a8t81v"),o(e,"class","icon-container svelte-1a8t81v"),o(e,"href",w=t[0].pdf),o(e,"target","_self")},m(t,s){n(t,e,s),i(e,a),i(a,h),i(h,g),i(e,p),i(e,m),i(m,E)},p(t,a){1&a&&w!==(w=t[0].pdf)&&o(e,"href",w)},d(t){t&&c(e)}}}function O(t){let e,a,h,g,p,m,E,w;return{c(){e=s("a"),a=s("div"),h=x("svg"),g=x("use"),p=v(),m=s("span"),E=u("Slides"),this.h()},l(t){e=r(t,"A",{class:!0,href:!0,target:!0});var s=l(e);a=r(s,"DIV",{class:!0});var o=l(a);h=r(o,"svg",{viewBox:!0,class:!0},1);var n=l(h);g=r(n,"use",{"xlink:href":!0},1),l(g).forEach(c),n.forEach(c),o.forEach(c),p=d(s),m=r(s,"SPAN",{class:!0});var i=l(m);E=f(i,"Slides"),i.forEach(c),s.forEach(c),this.h()},h(){D(g,"xlink:href","/sprite.svg#slides"),o(h,"viewBox","0 0 100 100"),o(h,"class","svelte-1a8t81v"),o(a,"class","svg-icon svelte-1a8t81v"),o(m,"class","svelte-1a8t81v"),o(e,"class","icon-container svelte-1a8t81v"),o(e,"href",w=t[0].slides),o(e,"target","_self")},m(t,s){n(t,e,s),i(e,a),i(a,h),i(h,g),i(e,p),i(e,m),i(m,E)},p(t,a){1&a&&w!==(w=t[0].slides)&&o(e,"href",w)},d(t){t&&c(e)}}}function K(t){let e,a,h,g,p,m,E,w;return{c(){e=s("a"),a=s("div"),h=x("svg"),g=x("use"),p=v(),m=s("span"),E=u("Poster"),this.h()},l(t){e=r(t,"A",{class:!0,href:!0,target:!0});var s=l(e);a=r(s,"DIV",{class:!0});var o=l(a);h=r(o,"svg",{viewBox:!0,class:!0},1);var n=l(h);g=r(n,"use",{"xlink:href":!0},1),l(g).forEach(c),n.forEach(c),o.forEach(c),p=d(s),m=r(s,"SPAN",{class:!0});var i=l(m);E=f(i,"Poster"),i.forEach(c),s.forEach(c),this.h()},h(){D(g,"xlink:href","/sprite.svg#poster"),o(h,"viewBox","0 0 100 100"),o(h,"class","svelte-1a8t81v"),o(a,"class","svg-icon svelte-1a8t81v"),o(m,"class","svelte-1a8t81v"),o(e,"class","icon-container svelte-1a8t81v"),o(e,"href",w=t[0].poster),o(e,"target","_self")},m(t,s){n(t,e,s),i(e,a),i(a,h),i(h,g),i(e,p),i(e,m),i(m,E)},p(t,a){1&a&&w!==(w=t[0].poster)&&o(e,"href",w)},d(t){t&&c(e)}}}function Q(t){let e,a,h,g,p,m,E,w,b,y,I=!0===t[0].showStar&&X(t);return{c(){e=s("div"),a=s("a"),h=s("div"),g=x("svg"),p=x("use"),m=v(),E=s("span"),w=u("Code"),y=v(),I&&I.c(),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);a=r(s,"A",{class:!0,href:!0,target:!0});var o=l(a);h=r(o,"DIV",{class:!0});var n=l(h);g=r(n,"svg",{viewBox:!0,class:!0},1);var i=l(g);p=r(i,"use",{"xlink:href":!0},1),l(p).forEach(c),i.forEach(c),n.forEach(c),m=d(o),E=r(o,"SPAN",{class:!0});var v=l(E);w=f(v,"Code"),v.forEach(c),o.forEach(c),y=d(s),I&&I.l(s),s.forEach(c),this.h()},h(){D(p,"xlink:href","/sprite.svg#github-alt-brands"),o(g,"viewBox","0 0 100 100"),o(g,"class","svelte-1a8t81v"),o(h,"class","svg-icon svelte-1a8t81v"),o(E,"class","svelte-1a8t81v"),o(a,"class","icon-container no-right-margin svelte-1a8t81v"),o(a,"href",b=`https://github.com/${t[0].repo}`),o(a,"target","_self"),o(e,"class","icon-container svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a),i(a,h),i(h,g),i(g,p),i(a,m),i(a,E),i(E,w),i(e,y),I&&I.m(e,null)},p(t,s){1&s&&b!==(b=`https://github.com/${t[0].repo}`)&&o(a,"href",b),!0===t[0].showStar?I?I.p(t,s):((I=X(t)).c(),I.m(e,null)):I&&(I.d(1),I=null)},d(t){t&&c(e),I&&I.d()}}}function X(t){let e,a,h,g,p,m,E,w,b={ctx:t,current:null,token:null,pending:tt,then:Z,catch:Y,value:6,error:7};return A(p=$(t[0].repo).catch(t[4]),b),{c(){e=s("div"),a=s("div"),h=u("("),g=s("a"),b.block.c(),m=v(),w=u(")"),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);a=r(s,"DIV",{style:!0});var o=l(a);h=f(o,"("),g=r(o,"A",{class:!0,target:!0,style:!0,href:!0});var n=l(g);b.block.l(n),m=d(n),n.forEach(c),w=f(o,")"),o.forEach(c),s.forEach(c),this.h()},h(){o(g,"class","svg-icon svelte-1a8t81v"),o(g,"target","_self"),I(g,"font-weight","500"),I(g,"margin-right","-3px"),o(g,"href",E=`https://github.com/${t[0].repo}/stargazers`),I(a,"display","flex"),o(e,"class","star-container svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a),i(a,h),i(a,g),b.block.m(g,b.anchor=null),b.mount=(()=>g),b.anchor=m,i(g,m),i(a,w)},p(e,a){if(t=e,b.ctx=t,1&a&&p!==(p=$(t[0].repo).catch(t[4]))&&A(p,b));else{const e=t.slice();e[6]=b.resolved,b.block.p(e,a)}1&a&&E!==(E=`https://github.com/${t[0].repo}/stargazers`)&&o(g,"href",E)},d(t){t&&c(e),b.block.d(),b.token=null,b=null}}}function Y(t){let e,a,h=t[7].message+"";return{c(){e=s("span"),a=u(h),this.h()},l(t){e=r(t,"SPAN",{style:!0,class:!0});var s=l(e);a=f(s,h),s.forEach(c),this.h()},h(){I(e,"color","red"),o(e,"class","svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a)},p(t,e){1&e&&h!==(h=t[7].message+"")&&g(a,h)},d(t){t&&c(e)}}}function Z(t){let e,a,h,p,m,E=(void 0===t[6]?"":t[6])+"";return{c(){e=x("svg"),a=x("use"),h=v(),p=s("div"),m=u(E),this.h()},l(t){e=r(t,"svg",{viewBox:!0,style:!0,class:!0},1);var s=l(e);a=r(s,"use",{"xlink:href":!0},1),l(a).forEach(c),s.forEach(c),h=d(t),p=r(t,"DIV",{class:!0});var o=l(p);m=f(o,E),o.forEach(c),this.h()},h(){D(a,"xlink:href","/sprite.svg#star-solid"),o(e,"viewBox","0 0 100 100"),I(e,"height","1.3em"),o(e,"class","svelte-1a8t81v"),o(p,"class","award-highlight svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a),n(t,h,s),n(t,p,s),i(p,m)},p(t,e){1&e&&E!==(E=(void 0===t[6]?"":t[6])+"")&&g(m,E)},d(t){t&&c(e),t&&c(h),t&&c(p)}}}function tt(t){let e;return{c(){e=u("loading")},l(t){e=f(t,"loading")},m(t,a){n(t,e,a)},p:h,d(t){t&&c(e)}}}function et(t){let e,a,h,g,p,m,E,w;return{c(){e=s("a"),a=s("div"),h=x("svg"),g=x("use"),p=v(),m=s("span"),E=u("Data"),this.h()},l(t){e=r(t,"A",{class:!0,href:!0,target:!0});var s=l(e);a=r(s,"DIV",{class:!0});var o=l(a);h=r(o,"svg",{viewBox:!0,class:!0},1);var n=l(h);g=r(n,"use",{"xlink:href":!0},1),l(g).forEach(c),n.forEach(c),o.forEach(c),p=d(s),m=r(s,"SPAN",{class:!0});var i=l(m);E=f(i,"Data"),i.forEach(c),s.forEach(c),this.h()},h(){D(g,"xlink:href","/sprite.svg#data"),o(h,"viewBox","0 0 100 100"),o(h,"class","svelte-1a8t81v"),o(a,"class","svg-icon svelte-1a8t81v"),o(m,"class","svelte-1a8t81v"),o(e,"class","icon-container svelte-1a8t81v"),o(e,"href",w=t[0].data),o(e,"target","_self")},m(t,s){n(t,e,s),i(e,a),i(a,h),i(h,g),i(e,p),i(e,m),i(m,E)},p(t,a){1&a&&w!==(w=t[0].data)&&o(e,"href",w)},d(t){t&&c(e)}}}function at(t){let e,a;return{c(){e=s("div"),a=u("(*Authors contributed equally)"),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);a=f(s,"(*Authors contributed equally)"),s.forEach(c),this.h()},h(){o(e,"class","icon-container comment svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a)},d(t){t&&c(e)}}}function st(t){let e,a,h,v=t[0].bibtex+"";return{c(){e=s("div"),a=s("pre"),h=u(v),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);a=r(s,"PRE",{class:!0});var o=l(a);h=f(o,v),o.forEach(c),s.forEach(c),this.h()},h(){o(a,"class","svelte-1a8t81v"),o(e,"class","bibtex svelte-1a8t81v")},m(t,s){n(t,e,s),i(e,a),i(a,h)},p(t,e){1&e&&v!==(v=t[0].bibtex+"")&&g(h,v)},d(t){t&&c(e)}}}function rt(t){let e,a,h,p,m,E,y,x,D,I,A,$,P,q,B,L,C,U,J,X,Y,Z,tt,rt,lt,ct,ot,nt,it,ht,vt,ut,dt,ft,gt,pt,mt,Et,wt,bt,yt,xt,Dt,It,At,Vt,kt,St,jt,Mt,$t,Pt,qt,Bt,Tt,_t,Lt,Ct,zt,Nt,Rt,Ut,Jt,Wt,Ft,Ht,Gt,Ot,Kt,Qt,Xt,Yt,Zt,te,ee,ae,se,re,le,ce,oe,ne,ie,he,ve,ue,de,fe,ge,pe,me,Ee,we,be,ye=t[0].title+"",xe=t[0].venue+"",De=(void 0!==t[0].venueShort?`(${t[0].venueShort})`:"")+"",Ie=t[0].year+"",Ae=t[0].crownCaption+"",Ve=t[0].abstract+"",ke=t[0].title+"",Se=t[0].venue+"",je=(void 0!==t[0].venueShort?`(${t[0].venueShort})`:"")+"",Me=t[0].year+"";document.title=e=t[0].title+" — Jay Wang";let $e=t[0].authors,Pe=[];for(let e=0;e<$e.length;e+=1)Pe[e]=z(_(t,$e,e));let qe=void 0!==t[0].equals&&N(),Be=void 0!==t[0].video&&R(t),Te=t[0].authors,_e=[];for(let e=0;e<Te.length;e+=1)_e[e]=W(T(t,Te,e));let Le=void 0!==t[0].demo&&F(t),Ce=void 0!==t[0].video&&H(t),ze=void 0!==t[0].pdf&&G(t),Ne=void 0!==t[0].slides&&O(t),Re=void 0!==t[0].poster&&K(t),Ue=void 0!==t[0].repo&&Q(t),Je=void 0!==t[0].data&&et(t),We=void 0!==t[0].equals&&at(),Fe=void 0!==t[0].bibtex&&st(t);return{c(){a=s("meta"),p=s("meta"),E=s("meta"),y=s("meta"),x=s("meta"),I=s("meta"),$=s("meta"),q=s("meta"),B=s("meta"),L=s("meta"),U=s("meta"),X=s("meta"),Z=s("meta"),tt=s("meta"),rt=s("script"),ct=s("script"),ot=u("window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n\n    gtag('config', 'UA-130177683-1');"),nt=v(),it=s("div"),ht=s("div"),vt=v(),ut=s("div"),dt=s("h1"),ft=u(ye),gt=v(),pt=s("div");for(let t=0;t<Pe.length;t+=1)Pe[t].c();mt=v(),qe&&qe.c(),Et=v(),wt=s("div"),bt=s("a"),yt=u(xe),xt=v(),Dt=u(De),It=u(", "),At=u(Ie),kt=v(),St=s("figure"),jt=s("img"),qt=v(),Bt=s("figcaption"),Tt=u(Ae),_t=v(),Lt=s("div"),Be&&Be.c(),Ct=v(),zt=s("div"),Nt=s("div"),Rt=u("Abstract"),Ut=v(),Jt=s("div"),Wt=v(),Ft=s("div"),Ht=s("div"),Gt=u("Citation"),Ot=v(),Kt=s("div"),Qt=u(ke),Xt=v(),Yt=s("div");for(let t=0;t<_e.length;t+=1)_e[t].c();Zt=v(),te=s("div"),ee=s("a"),ae=u(Se),se=v(),re=u(je),le=u(", "),ce=u(Me),ne=v(),ie=s("div"),Le&&Le.c(),he=v(),Ce&&Ce.c(),ve=v(),ze&&ze.c(),ue=v(),Ne&&Ne.c(),de=v(),Re&&Re.c(),fe=v(),Ue&&Ue.c(),ge=v(),Je&&Je.c(),pe=v(),We&&We.c(),me=v(),Fe&&Fe.c(),Ee=v(),we=s("div"),this.h()},l(t){const e=V('[data-svelte="svelte-q3bpha"]',document.head);a=r(e,"META",{name:!0,content:!0}),p=r(e,"META",{name:!0,content:!0}),E=r(e,"META",{property:!0,content:!0}),y=r(e,"META",{property:!0,content:!0}),x=r(e,"META",{property:!0,content:!0}),I=r(e,"META",{property:!0,content:!0}),$=r(e,"META",{property:!0,content:!0}),q=r(e,"META",{property:!0,content:!0}),B=r(e,"META",{property:!0,content:!0}),L=r(e,"META",{property:!0,content:!0}),U=r(e,"META",{property:!0,content:!0}),X=r(e,"META",{property:!0,content:!0}),Z=r(e,"META",{property:!0,content:!0}),tt=r(e,"META",{property:!0,content:!0}),rt=r(e,"SCRIPT",{async:!0,src:!0}),l(rt).forEach(c),ct=r(e,"SCRIPT",{});var s=l(ct);ot=f(s,"window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n\n    gtag('config', 'UA-130177683-1');"),s.forEach(c),e.forEach(c),nt=d(t),it=r(t,"DIV",{class:!0});var o=l(it);ht=r(o,"DIV",{class:!0}),l(ht).forEach(c),vt=d(o),ut=r(o,"DIV",{class:!0});var n=l(ut);dt=r(n,"H1",{class:!0});var i=l(dt);ft=f(i,ye),i.forEach(c),gt=d(n),pt=r(n,"DIV",{class:!0});var h=l(pt);for(let t=0;t<Pe.length;t+=1)Pe[t].l(h);h.forEach(c),mt=d(n),qe&&qe.l(n),Et=d(n),wt=r(n,"DIV",{class:!0});var v=l(wt);bt=r(v,"A",{href:!0,target:!0,class:!0});var u=l(bt);yt=f(u,xe),xt=d(u),Dt=f(u,De),It=f(u,", "),At=f(u,Ie),u.forEach(c),v.forEach(c),kt=d(n),St=r(n,"FIGURE",{class:!0});var g=l(St);jt=r(g,"IMG",{class:!0,style:!0,alt:!0,src:!0}),qt=d(g),Bt=r(g,"FIGCAPTION",{class:!0});var m=l(Bt);Tt=f(m,Ae),m.forEach(c),g.forEach(c),_t=d(n),Lt=r(n,"DIV",{class:!0});var w=l(Lt);Be&&Be.l(w),Ct=d(w),zt=r(w,"DIV",{class:!0});var b=l(zt);Nt=r(b,"DIV",{class:!0});var D=l(Nt);Rt=f(D,"Abstract"),D.forEach(c),Ut=d(b),Jt=r(b,"DIV",{class:!0}),l(Jt).forEach(c),b.forEach(c),Wt=d(w),Ft=r(w,"DIV",{class:!0});var A=l(Ft);Ht=r(A,"DIV",{class:!0});var k=l(Ht);Gt=f(k,"Citation"),k.forEach(c),Ot=d(A),Kt=r(A,"DIV",{class:!0});var S=l(Kt);Qt=f(S,ke),S.forEach(c),Xt=d(A),Yt=r(A,"DIV",{class:!0});var j=l(Yt);for(let t=0;t<_e.length;t+=1)_e[t].l(j);j.forEach(c),Zt=d(A),te=r(A,"DIV",{class:!0});var M=l(te);ee=r(M,"A",{href:!0,target:!0,class:!0});var P=l(ee);ae=f(P,Se),se=d(P),re=f(P,je),le=f(P,", "),ce=f(P,Me),P.forEach(c),M.forEach(c),ne=d(A),ie=r(A,"DIV",{class:!0});var T=l(ie);Le&&Le.l(T),he=d(T),Ce&&Ce.l(T),ve=d(T),ze&&ze.l(T),ue=d(T),Ne&&Ne.l(T),de=d(T),Re&&Re.l(T),fe=d(T),Ue&&Ue.l(T),ge=d(T),Je&&Je.l(T),pe=d(T),We&&We.l(T),T.forEach(c),me=d(A),Fe&&Fe.l(A),A.forEach(c),w.forEach(c),n.forEach(c),Ee=d(o),we=r(o,"DIV",{class:!0}),l(we).forEach(c),o.forEach(c),this.h()},h(){o(a,"name","title"),o(a,"content",h=t[0].title+" — Jay Wang"),o(p,"name","description"),o(p,"content",m=t[0].abstract.substring(0,150)+"..."),o(E,"property","og:type"),o(E,"content","website"),o(y,"property","og:url"),o(y,"content","https://zijie.wang"),o(x,"property","og:title"),o(x,"content",D=t[0].title+" — Jay Wang"),o(I,"property","og:description"),o(I,"content",A=t[0].abstract.substring(0,150)+"..."),o($,"property","og:image"),o($,"content",P="https://zijie.wang/images/crowns/"+t[0].id+".png"),o(q,"property","twitter:card"),o(q,"content","summary_large_image"),o(B,"property","twitter:url"),o(B,"content","https://zijie.wang"),o(L,"property","twitter:title"),o(L,"content",C=t[0].title+" — Jay Wang"),o(U,"property","twitter:description"),o(U,"content",J=t[0].abstract.substring(0,150)+"..."),o(X,"property","twitter:image"),o(X,"content",Y="https://zijie.wang/images/crowns/"+t[0].id+".png"),o(Z,"property","twitter:site"),o(Z,"content","@jay4w"),o(tt,"property","twitter:creator"),o(tt,"content","@jay4w"),rt.async=!0,rt.src!==(lt="https://www.googletagmanager.com/gtag/js?id=UA-130177683-1")&&o(rt,"src","https://www.googletagmanager.com/gtag/js?id=UA-130177683-1"),o(ht,"class","left-padding"),o(dt,"class","svelte-1a8t81v"),o(pt,"class","author-list svelte-1a8t81v"),o(bt,"href",Vt=t[0].venueURL),o(bt,"target","_self"),o(bt,"class","svelte-1a8t81v"),o(wt,"class","venue svelte-1a8t81v"),o(jt,"class",Mt=k(t[0].crownShowBorder?"show-border":"")+" svelte-1a8t81v"),o(jt,"style",$t=void 0!==t[0].crownMaxHeight?`max-height: ${t[0].crownMaxHeight};`:""),o(jt,"alt","crown jewel figure"),jt.src!==(Pt="images/crowns/"+t[0].id+".png")&&o(jt,"src",Pt),o(Bt,"class","crown-caption svelte-1a8t81v"),o(St,"class","crown-img svelte-1a8t81v"),o(Nt,"class","block-name svelte-1a8t81v"),o(Jt,"class","block-abstract-text"),o(zt,"class","block svelte-1a8t81v"),o(Ht,"class","block-name svelte-1a8t81v"),o(Kt,"class","pub-title svelte-1a8t81v"),o(Yt,"class","pub-author svelte-1a8t81v"),o(ee,"href",oe=t[0].venueURL),o(ee,"target","_self"),o(ee,"class","svelte-1a8t81v"),o(te,"class","pub-venue svelte-1a8t81v"),o(ie,"class","pub-icons svelte-1a8t81v"),o(Ft,"class","block citation-block svelte-1a8t81v"),o(Lt,"class","block-container"),o(ut,"class","papers-content svelte-1a8t81v"),o(we,"class","right-padding"),o(it,"class","page svelte-1a8t81v")},m(t,e){i(document.head,a),i(document.head,p),i(document.head,E),i(document.head,y),i(document.head,x),i(document.head,I),i(document.head,$),i(document.head,q),i(document.head,B),i(document.head,L),i(document.head,U),i(document.head,X),i(document.head,Z),i(document.head,tt),i(document.head,rt),i(document.head,ct),i(ct,ot),n(t,nt,e),n(t,it,e),i(it,ht),i(it,vt),i(it,ut),i(ut,dt),i(dt,ft),i(ut,gt),i(ut,pt);for(let t=0;t<Pe.length;t+=1)Pe[t].m(pt,null);i(ut,mt),qe&&qe.m(ut,null),i(ut,Et),i(ut,wt),i(wt,bt),i(bt,yt),i(bt,xt),i(bt,Dt),i(bt,It),i(bt,At),i(ut,kt),i(ut,St),i(St,jt),i(St,qt),i(St,Bt),i(Bt,Tt),i(ut,_t),i(ut,Lt),Be&&Be.m(Lt,null),i(Lt,Ct),i(Lt,zt),i(zt,Nt),i(Nt,Rt),i(zt,Ut),i(zt,Jt),Jt.innerHTML=Ve,i(Lt,Wt),i(Lt,Ft),i(Ft,Ht),i(Ht,Gt),i(Ft,Ot),i(Ft,Kt),i(Kt,Qt),i(Ft,Xt),i(Ft,Yt);for(let t=0;t<_e.length;t+=1)_e[t].m(Yt,null);i(Ft,Zt),i(Ft,te),i(te,ee),i(ee,ae),i(ee,se),i(ee,re),i(ee,le),i(ee,ce),i(Ft,ne),i(Ft,ie),Le&&Le.m(ie,null),i(ie,he),Ce&&Ce.m(ie,null),i(ie,ve),ze&&ze.m(ie,null),i(ie,ue),Ne&&Ne.m(ie,null),i(ie,de),Re&&Re.m(ie,null),i(ie,fe),Ue&&Ue.m(ie,null),i(ie,ge),Je&&Je.m(ie,null),i(ie,pe),We&&We.m(ie,null),i(Ft,me),Fe&&Fe.m(Ft,null),i(it,Ee),i(it,we),be=!0},p(t,[s]){if((!be||1&s)&&e!==(e=t[0].title+" — Jay Wang")&&(document.title=e),(!be||1&s&&h!==(h=t[0].title+" — Jay Wang"))&&o(a,"content",h),(!be||1&s&&m!==(m=t[0].abstract.substring(0,150)+"..."))&&o(p,"content",m),(!be||1&s&&D!==(D=t[0].title+" — Jay Wang"))&&o(x,"content",D),(!be||1&s&&A!==(A=t[0].abstract.substring(0,150)+"..."))&&o(I,"content",A),(!be||1&s&&P!==(P="https://zijie.wang/images/crowns/"+t[0].id+".png"))&&o($,"content",P),(!be||1&s&&C!==(C=t[0].title+" — Jay Wang"))&&o(L,"content",C),(!be||1&s&&J!==(J=t[0].abstract.substring(0,150)+"..."))&&o(U,"content",J),(!be||1&s&&Y!==(Y="https://zijie.wang/images/crowns/"+t[0].id+".png"))&&o(X,"content",Y),(!be||1&s)&&ye!==(ye=t[0].title+"")&&g(ft,ye),3&s){let e;for($e=t[0].authors,e=0;e<$e.length;e+=1){const a=_(t,$e,e);Pe[e]?Pe[e].p(a,s):(Pe[e]=z(a),Pe[e].c(),Pe[e].m(pt,null))}for(;e<Pe.length;e+=1)Pe[e].d(1);Pe.length=$e.length}if(void 0!==t[0].equals?qe||((qe=N()).c(),qe.m(ut,Et)):qe&&(qe.d(1),qe=null),(!be||1&s)&&xe!==(xe=t[0].venue+"")&&g(yt,xe),(!be||1&s)&&De!==(De=(void 0!==t[0].venueShort?`(${t[0].venueShort})`:"")+"")&&g(Dt,De),(!be||1&s)&&Ie!==(Ie=t[0].year+"")&&g(At,Ie),(!be||1&s&&Vt!==(Vt=t[0].venueURL))&&o(bt,"href",Vt),(!be||1&s&&Mt!==(Mt=k(t[0].crownShowBorder?"show-border":"")+" svelte-1a8t81v"))&&o(jt,"class",Mt),(!be||1&s&&$t!==($t=void 0!==t[0].crownMaxHeight?`max-height: ${t[0].crownMaxHeight};`:""))&&o(jt,"style",$t),(!be||1&s&&jt.src!==(Pt="images/crowns/"+t[0].id+".png"))&&o(jt,"src",Pt),(!be||1&s)&&Ae!==(Ae=t[0].crownCaption+"")&&g(Tt,Ae),void 0!==t[0].video?Be?(Be.p(t,s),1&s&&w(Be,1)):((Be=R(t)).c(),w(Be,1),Be.m(Lt,Ct)):Be&&(M(),b(Be,1,1,()=>{Be=null}),S()),(!be||1&s)&&Ve!==(Ve=t[0].abstract+"")&&(Jt.innerHTML=Ve),(!be||1&s)&&ke!==(ke=t[0].title+"")&&g(Qt,ke),3&s){let e;for(Te=t[0].authors,e=0;e<Te.length;e+=1){const a=T(t,Te,e);_e[e]?_e[e].p(a,s):(_e[e]=W(a),_e[e].c(),_e[e].m(Yt,null))}for(;e<_e.length;e+=1)_e[e].d(1);_e.length=Te.length}(!be||1&s)&&Se!==(Se=t[0].venue+"")&&g(ae,Se),(!be||1&s)&&je!==(je=(void 0!==t[0].venueShort?`(${t[0].venueShort})`:"")+"")&&g(re,je),(!be||1&s)&&Me!==(Me=t[0].year+"")&&g(ce,Me),(!be||1&s&&oe!==(oe=t[0].venueURL))&&o(ee,"href",oe),void 0!==t[0].demo?Le?Le.p(t,s):((Le=F(t)).c(),Le.m(ie,he)):Le&&(Le.d(1),Le=null),void 0!==t[0].video?Ce?Ce.p(t,s):((Ce=H(t)).c(),Ce.m(ie,ve)):Ce&&(Ce.d(1),Ce=null),void 0!==t[0].pdf?ze?ze.p(t,s):((ze=G(t)).c(),ze.m(ie,ue)):ze&&(ze.d(1),ze=null),void 0!==t[0].slides?Ne?Ne.p(t,s):((Ne=O(t)).c(),Ne.m(ie,de)):Ne&&(Ne.d(1),Ne=null),void 0!==t[0].poster?Re?Re.p(t,s):((Re=K(t)).c(),Re.m(ie,fe)):Re&&(Re.d(1),Re=null),void 0!==t[0].repo?Ue?Ue.p(t,s):((Ue=Q(t)).c(),Ue.m(ie,ge)):Ue&&(Ue.d(1),Ue=null),void 0!==t[0].data?Je?Je.p(t,s):((Je=et(t)).c(),Je.m(ie,pe)):Je&&(Je.d(1),Je=null),void 0!==t[0].equals?We||((We=at()).c(),We.m(ie,null)):We&&(We.d(1),We=null),void 0!==t[0].bibtex?Fe?Fe.p(t,s):((Fe=st(t)).c(),Fe.m(Ft,null)):Fe&&(Fe.d(1),Fe=null)},i(t){be||(w(Be),be=!0)},o(t){b(Be),be=!1},d(t){c(a),c(p),c(E),c(y),c(x),c(I),c($),c(q),c(B),c(L),c(U),c(X),c(Z),c(tt),c(rt),c(ct),t&&c(nt),t&&c(it),j(Pe,t),qe&&qe.d(),Be&&Be.d(),j(_e,t),Le&&Le.d(),Ce&&Ce.d(),ze&&ze.d(),Ne&&Ne.d(),Re&&Re.d(),Ue&&Ue.d(),Je&&Je.d(),We&&We.d(),Fe&&Fe.d()}}}async function lt(t,e){const{slug:a}=t.params,s=await this.fetch("data.json"),r=await s.json(),l=r.publication;let c=void 0;return l.forEach(t=>{t.id===a&&(c=t)}),{curPub:c,people:r.people}}function ct(t,e,a){let{curPub:s}=e,{people:r}=e;return t.$$set=(t=>{"curPub"in t&&a(0,s=t.curPub),"people"in t&&a(1,r=t.people)}),[s,r,(t,e)=>e===t,(t,e)=>e===t,t=>console.log(t)]}export default class extends t{constructor(t){super(),e(this,t,ct,rt,a,{curPub:0,people:1})}}export{lt as preload};
