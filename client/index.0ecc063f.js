import{S as e,i as s,s as a,e as t,t as l,a as r,c,b as n,d as o,f as i,g as h,h as v,j as d,k as p,l as f,m as g,n as u,o as b,p as m,x as E,q as w,r as x,u as k,v as y,H as I,w as D}from"./client.a0fba089.js";import{m as V,g as A}from"./helpers.17d7bc92.js";function B(e,s,a){const t=e.slice();return t[15]=s[a],t[17]=a,t}function j(e,s,a){const t=e.slice();return t[20]=s[a],t}function P(e,s,a){const t=e.slice();return t[25]=s[a],t[27]=a,t}function M(e,s,a){const t=e.slice();return t[18]=s[a],t[17]=a,t}function T(e,s,a){const t=e.slice();return t[28]=s[a],t[17]=a,t}function _(e){let s,a,g,u,b,m,E=e[28].date+"",w=e[28].news+"";return{c(){s=t("div"),a=t("div"),g=l(E),u=r(),b=t("div"),m=r(),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);g=o(l,E),l.forEach(i),u=h(t),b=c(t,"DIV",{class:!0}),n(b).forEach(i),m=h(t),t.forEach(i),this.h()},h(){v(a,"class","news-date svelte-db742p"),v(b,"class","news-text svelte-db742p"),v(s,"class","news svelte-db742p")},m(e,t){d(e,s,t),p(s,a),p(a,g),p(s,u),p(s,b),b.innerHTML=w,p(s,m)},p(e,s){8&s&&E!==(E=e[28].date+"")&&f(g,E),8&s&&w!==(w=e[28].news+"")&&(b.innerHTML=w)},d(e){e&&i(s)}}}function S(e){let s,a,t;return{c(){s=m("svg"),a=m("use"),t=l("\n          show less"),this.h()},l(e){s=c(e,"svg",{viewBox:!0,class:!0},1);var l=n(s);a=c(l,"use",{"xlink:href":!0},1),n(a).forEach(i),l.forEach(i),t=o(e,"\n          show less"),this.h()},h(){E(a,"xlink:href","/sprite.svg#arrow-circle-up-solid"),v(s,"viewBox","0 0 100 100"),v(s,"class","svelte-db742p")},m(e,l){d(e,s,l),p(s,a),d(e,t,l)},d(e){e&&i(s),e&&i(t)}}}function N(e){let s,a,t;return{c(){s=m("svg"),a=m("use"),t=l("\n          show more"),this.h()},l(e){s=c(e,"svg",{viewBox:!0,class:!0},1);var l=n(s);a=c(l,"use",{"xlink:href":!0},1),n(a).forEach(i),l.forEach(i),t=o(e,"\n          show more"),this.h()},h(){E(a,"xlink:href","/sprite.svg#plus-circle-solid"),v(s,"viewBox","0 0 100 100"),v(s,"class","svelte-db742p")},m(e,l){d(e,s,l),p(s,a),d(e,t,l)},d(e){e&&i(s),e&&i(t)}}}function C(e){let s,a,t=e[7](e[25],!0)+"",r=e[27]!==e[18].authors.length-1?", ":"";return{c(){a=l(r),this.h()},l(e){a=o(e,r),this.h()},h(){s=new I(a)},m(e,l){s.m(t,e,l),d(e,a,l)},p:y,d(e){e&&s.d(),e&&i(a)}}}function J(e){let s,a,t,r=e[7](e[25],!0)+"",c=e[18].equals.filter(function(...s){return e[11](e[25],...s)}).length>0?"*":"",n=e[27]!==e[18].authors.length-1?", ":"";return{c(){a=l(c),t=l(n),this.h()},l(e){a=o(e,c),t=o(e,n),this.h()},h(){s=new I(a)},m(e,l){s.m(r,e,l),d(e,a,l),d(e,t,l)},p(s,a){e=s},d(e){e&&s.d(),e&&i(a),e&&i(t)}}}function W(e){let s;let a=function(e,s){return void 0!==e[18].equals?J:C}(e)(e);return{c(){a.c(),s=u()},l(e){a.l(e),s=u()},m(e,t){a.m(e,t),d(e,s,t)},p(e,s){a.p(e,s)},d(e){a.d(e),e&&i(s)}}}function H(e){let s,a,r=e[24].message+"";return{c(){s=t("span"),a=l(r),this.h()},l(e){s=c(e,"SPAN",{style:!0});var t=n(s);a=o(t,r),t.forEach(i),this.h()},h(){k(s,"color","red")},m(e,t){d(e,s,t),p(s,a)},p:y,d(e){e&&i(s)}}}function z(e){let s,a,f,g,u,b=(void 0===e[23]?"":e[23])+"";return{c(){s=m("svg"),a=m("use"),f=r(),g=t("div"),u=l(b),this.h()},l(e){s=c(e,"svg",{viewBox:!0,style:!0,class:!0},1);var t=n(s);a=c(t,"use",{"xlink:href":!0},1),n(a).forEach(i),t.forEach(i),f=h(e),g=c(e,"DIV",{class:!0});var l=n(g);u=o(l,b),l.forEach(i),this.h()},h(){E(a,"xlink:href","/sprite.svg#star-solid"),v(s,"viewBox","0 0 100 100"),k(s,"height","1.3em"),v(s,"class","svelte-db742p"),v(g,"class","award-highlight svelte-db742p")},m(e,t){d(e,s,t),p(s,a),d(e,f,t),d(e,g,t),p(g,u)},p:y,d(e){e&&i(s),e&&i(f),e&&i(g)}}}function G(e){let s;return{c(){s=l("loading")},l(e){s=o(e,"loading")},m(e,a){d(e,s,a)},p:y,d(e){e&&i(s)}}}function q(e){let s,a,l,o,f,g,u,b=V(e[20].name,e[20].url)+"";return{c(){s=t("div"),a=t("div"),l=m("svg"),o=m("use"),f=r(),g=t("div"),u=r(),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=n(s);a=c(t,"DIV",{class:!0});var r=n(a);l=c(r,"svg",{viewBox:!0,class:!0},1);var v=n(l);o=c(v,"use",{"xlink:href":!0},1),n(o).forEach(i),v.forEach(i),r.forEach(i),f=h(t),g=c(t,"DIV",{class:!0}),n(g).forEach(i),u=h(t),t.forEach(i),this.h()},h(){E(o,"xlink:href","/sprite.svg#award-solid"),v(l,"viewBox","0 0 100 100"),v(l,"class","svelte-db742p"),v(a,"class","svg-icon svelte-db742p"),v(g,"class","award-highlight svelte-db742p"),v(s,"class","icon-container award svelte-db742p")},m(e,t){d(e,s,t),p(s,a),p(a,l),p(l,o),p(s,f),p(s,g),g.innerHTML=b,p(s,u)},p:y,d(e){e&&i(s)}}}function L(e){let s,a,f,x,I,V,B,M,T,_,S,N,C,J,L,$,F,Z,R,U,X,Y,O,K,Q,ee,se,ae,te,le,re,ce,ne,oe,ie,he,ve,de=e[18].title+"",pe=(void 0===e[18].shortVenue?e[18].venue:e[18].shortVenue)+"",fe=e[18].year+"",ge=0===e[17]&&function(e){let s,a;return{c(){s=t("div"),a=l("Featured Publications"),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=n(s);a=o(t,"Featured Publications"),t.forEach(i),this.h()},h(){v(s,"class","block-name svelte-db742p")},m(e,t){d(e,s,t),p(s,a)},d(e){e&&i(s)}}}(),ue=e[18].authors,be=[];for(let s=0;s<ue.length;s+=1)be[s]=W(P(e,ue,s));let me=void 0!==e[18].url&&function(e){let s,a,f,g,u,b,w,x;return{c(){s=t("a"),a=t("div"),f=m("svg"),g=m("use"),u=r(),b=t("span"),w=l("Project"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);f=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(f);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=h(t),b=c(t,"SPAN",{class:!0});var v=n(b);w=o(v,"Project"),v.forEach(i),t.forEach(i),this.h()},h(){E(g,"xlink:href","/sprite.svg#link-solid"),v(f,"viewBox","0 0 100 100"),v(f,"class","svelte-db742p"),v(a,"class","svg-icon svelte-db742p"),v(b,"class","svelte-db742p"),v(s,"class","icon-container svelte-db742p"),v(s,"href",x=e[18].url),v(s,"target","_self")},m(e,t){d(e,s,t),p(s,a),p(a,f),p(f,g),p(s,u),p(s,b),p(b,w)},p:y,d(e){e&&i(s)}}}(e),Ee=void 0!==e[18].demo&&function(e){let s,a,f,g,u,b,w,x;return{c(){s=t("a"),a=t("div"),f=m("svg"),g=m("use"),u=r(),b=t("span"),w=l("Demo"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);f=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(f);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=h(t),b=c(t,"SPAN",{class:!0});var v=n(b);w=o(v,"Demo"),v.forEach(i),t.forEach(i),this.h()},h(){E(g,"xlink:href","/sprite.svg#play-solid"),v(f,"viewBox","0 0 100 100"),v(f,"class","svelte-db742p"),v(a,"class","svg-icon svelte-db742p"),v(b,"class","svelte-db742p"),v(s,"class","icon-container svelte-db742p"),v(s,"href",x=e[18].demo),v(s,"target","_self")},m(e,t){d(e,s,t),p(s,a),p(a,f),p(f,g),p(s,u),p(s,b),p(b,w)},p:y,d(e){e&&i(s)}}}(e),we=void 0!==e[18].video&&function(e){let s,a,f,g,u,b,w,x;return{c(){s=t("a"),a=t("div"),f=m("svg"),g=m("use"),u=r(),b=t("span"),w=l("Video"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);f=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(f);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=h(t),b=c(t,"SPAN",{class:!0});var v=n(b);w=o(v,"Video"),v.forEach(i),t.forEach(i),this.h()},h(){E(g,"xlink:href","/sprite.svg#film-solid"),v(f,"viewBox","0 0 100 100"),v(f,"class","svelte-db742p"),v(a,"class","svg-icon svelte-db742p"),v(b,"class","svelte-db742p"),v(s,"class","icon-container svelte-db742p"),v(s,"href",x=e[18].video),v(s,"target","_self")},m(e,t){d(e,s,t),p(s,a),p(a,f),p(f,g),p(s,u),p(s,b),p(b,w)},p:y,d(e){e&&i(s)}}}(e),xe=void 0!==e[18].pdf&&function(e){let s,a,f,g,u,b,w,x;return{c(){s=t("a"),a=t("div"),f=m("svg"),g=m("use"),u=r(),b=t("span"),w=l("PDF"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);f=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(f);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=h(t),b=c(t,"SPAN",{class:!0});var v=n(b);w=o(v,"PDF"),v.forEach(i),t.forEach(i),this.h()},h(){E(g,"xlink:href","/sprite.svg#file-pdf-solid"),v(f,"viewBox","0 0 100 100"),v(f,"class","svelte-db742p"),v(a,"class","svg-icon svelte-db742p"),v(b,"class","svelte-db742p"),v(s,"class","icon-container svelte-db742p"),v(s,"href",x=e[18].pdf),v(s,"target","_self")},m(e,t){d(e,s,t),p(s,a),p(a,f),p(f,g),p(s,u),p(s,b),p(b,w)},p:y,d(e){e&&i(s)}}}(e),ke=void 0!==e[18].slides&&function(e){let s,a,f,g,u,b,w,x;return{c(){s=t("a"),a=t("div"),f=m("svg"),g=m("use"),u=r(),b=t("span"),w=l("Slides"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);f=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(f);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=h(t),b=c(t,"SPAN",{class:!0});var v=n(b);w=o(v,"Slides"),v.forEach(i),t.forEach(i),this.h()},h(){E(g,"xlink:href","/sprite.svg#chalkboard-teacher-solid"),v(f,"viewBox","0 0 100 100"),v(f,"class","svelte-db742p"),v(a,"class","svg-icon svelte-db742p"),v(b,"class","svelte-db742p"),v(s,"class","icon-container svelte-db742p"),v(s,"href",x=e[18].slides),v(s,"target","_self")},m(e,t){d(e,s,t),p(s,a),p(a,f),p(f,g),p(s,u),p(s,b),p(b,w)},p:y,d(e){e&&i(s)}}}(e),ye=void 0!==e[18].poster&&function(e){let s,a,f,g,u,b,w,x;return{c(){s=t("a"),a=t("div"),f=m("svg"),g=m("use"),u=r(),b=t("span"),w=l("Poster"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);f=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(f);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=h(t),b=c(t,"SPAN",{class:!0});var v=n(b);w=o(v,"Poster"),v.forEach(i),t.forEach(i),this.h()},h(){E(g,"xlink:href","/sprite.svg#link-solid"),v(f,"viewBox","0 0 100 100"),v(f,"class","svelte-db742p"),v(a,"class","svg-icon svelte-db742p"),v(b,"class","svelte-db742p"),v(s,"class","icon-container svelte-db742p"),v(s,"href",x=e[18].poster),v(s,"target","_self")},m(e,t){d(e,s,t),p(s,a),p(a,f),p(f,g),p(s,u),p(s,b),p(b,w)},p:y,d(e){e&&i(s)}}}(e),Ie=void 0!==e[18].repo&&function(e){let s,a,f,g,u,b,w,x;return{c(){s=t("a"),a=t("div"),f=m("svg"),g=m("use"),u=r(),b=t("span"),w=l("Code"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);f=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(f);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=h(t),b=c(t,"SPAN",{class:!0});var v=n(b);w=o(v,"Code"),v.forEach(i),t.forEach(i),this.h()},h(){E(g,"xlink:href","/sprite.svg#github-alt-brands"),v(f,"viewBox","0 0 100 100"),v(f,"class","svelte-db742p"),v(a,"class","svg-icon svelte-db742p"),v(b,"class","svelte-db742p"),v(s,"class","icon-container svelte-db742p"),v(s,"href",x=`https://github.com/${e[18].repo}`),v(s,"target","_self")},m(e,t){d(e,s,t),p(s,a),p(a,f),p(f,g),p(s,u),p(s,b),p(b,w)},p:y,d(e){e&&i(s)}}}(e),De=!0===e[18].showStar&&function(e){let s,a,f,g,u,b,m,E,w={ctx:e,current:null,token:null,pending:G,then:z,catch:H,value:23,error:24};return D(u=A(e[18].repo).catch(e[12]),w),{c(){s=t("div"),a=t("div"),f=l("("),g=t("a"),w.block.c(),b=r(),E=l(")"),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=n(s);a=c(t,"DIV",{style:!0});var l=n(a);f=o(l,"("),g=c(l,"A",{class:!0,target:!0,style:!0,href:!0});var r=n(g);w.block.l(r),b=h(r),r.forEach(i),E=o(l,")"),l.forEach(i),t.forEach(i),this.h()},h(){v(g,"class","svg-icon svelte-db742p"),v(g,"target","_self"),k(g,"font-weight","500"),k(g,"margin-right","-3px"),v(g,"href",m=`https://github.com/${e[18].repo}/stargazers`),k(a,"display","flex"),v(s,"class","star-container svelte-db742p")},m(e,t){d(e,s,t),p(s,a),p(a,f),p(a,g),w.block.m(g,w.anchor=null),w.mount=(()=>g),w.anchor=b,p(g,b),p(a,E)},p(s,a){{const t=(e=s).slice();t[23]=w.resolved,w.block.p(t,a)}},d(e){e&&i(s),w.block.d(),w.token=null,w=null}}}(e),Ve=void 0!==e[18].data&&function(e){let s,a,f,g,u,b,w,x;return{c(){s=t("a"),a=t("div"),f=m("svg"),g=m("use"),u=r(),b=t("span"),w=l("Data"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);f=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(f);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=h(t),b=c(t,"SPAN",{class:!0});var v=n(b);w=o(v,"Data"),v.forEach(i),t.forEach(i),this.h()},h(){E(g,"xlink:href","/sprite.svg#database-solid"),v(f,"viewBox","0 0 100 100"),v(f,"class","svelte-db742p"),v(a,"class","svg-icon svelte-db742p"),v(b,"class","svelte-db742p"),v(s,"class","icon-container svelte-db742p"),v(s,"href",x=e[18].data),v(s,"target","_self")},m(e,t){d(e,s,t),p(s,a),p(a,f),p(f,g),p(s,u),p(s,b),p(b,w)},p:y,d(e){e&&i(s)}}}(e),Ae=void 0!==e[18].bibtex&&function(e){let s,a,f,g,u,b,x,k,y;function I(...s){return e[13](e[18],...s)}return{c(){s=t("div"),a=t("div"),f=m("svg"),g=m("use"),u=r(),b=t("span"),x=l("BibTeX"),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);f=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(f);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=h(t),b=c(t,"SPAN",{class:!0});var v=n(b);x=o(v,"BibTeX"),v.forEach(i),t.forEach(i),this.h()},h(){E(g,"xlink:href","/sprite.svg#quote-right-solid"),v(f,"viewBox","0 0 100 100"),v(f,"class","svelte-db742p"),v(a,"class","svg-icon svelte-db742p"),v(b,"class","svelte-db742p"),v(s,"class","icon-container bibtex-button svelte-db742p")},m(e,t){d(e,s,t),p(s,a),p(a,f),p(f,g),p(s,u),p(s,b),p(b,x),k||(y=w(s,"click",I),k=!0)},p(s,a){e=s},d(e){e&&i(s),k=!1,y()}}}(e),Be=void 0!==e[18].equals&&function(e){let s,a;return{c(){s=t("div"),a=l("(*Authors contributed equally)"),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=n(s);a=o(t,"(*Authors contributed equally)"),t.forEach(i),this.h()},h(){v(s,"class","icon-container comment svelte-db742p")},m(e,t){d(e,s,t),p(s,a)},d(e){e&&i(s)}}}(),je=void 0!==e[18].awards&&function(e){let s,a=e[18].awards,t=[];for(let s=0;s<a.length;s+=1)t[s]=q(j(e,a,s));return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=u()},l(e){for(let s=0;s<t.length;s+=1)t[s].l(e);s=u()},m(e,a){for(let s=0;s<t.length;s+=1)t[s].m(e,a);d(e,s,a)},p(e,l){if(64&l){let r;for(a=e[18].awards,r=0;r<a.length;r+=1){const c=j(e,a,r);t[r]?t[r].p(c,l):(t[r]=q(c),t[r].c(),t[r].m(s.parentNode,s))}for(;r<t.length;r+=1)t[r].d(1);t.length=a.length}},d(e){b(t,e),e&&i(s)}}}(e),Pe=void 0!==e[18].bibtex&&function(e){let s,a,r,h=e[18].bibtex+"";return{c(){s=t("div"),a=t("pre"),r=l(h),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=n(s);a=c(t,"PRE",{class:!0});var l=n(a);r=o(l,h),l.forEach(i),t.forEach(i),this.h()},h(){v(a,"class","svelte-db742p"),v(s,"class","bibtex svelte-db742p"),g(s,"hidden",e[1]!==e[18].id)},m(e,t){d(e,s,t),p(s,a),p(a,r)},p(e,a){66&a&&g(s,"hidden",e[1]!==e[18].id)},d(e){e&&i(s)}}}(e),Me=e[17]===e[6].length-1&&function(e){let s,a,r,h,f;return{c(){s=t("a"),a=t("div"),r=m("svg"),h=m("use"),f=l("\n              see all publications"),this.h()},l(e){s=c(e,"A",{href:!0,target:!0,style:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);r=c(l,"svg",{viewBox:!0,class:!0},1);var v=n(r);h=c(v,"use",{"xlink:href":!0},1),n(h).forEach(i),v.forEach(i),f=o(l,"\n              see all publications"),l.forEach(i),t.forEach(i),this.h()},h(){E(h,"xlink:href","/sprite.svg#external-link-alt-solid"),v(r,"viewBox","0 0 100 100"),v(r,"class","svelte-db742p"),v(a,"class","show-all-button svg-icon right-margin svelte-db742p"),v(s,"href","/cv#publications"),v(s,"target","_self"),k(s,"padding","0")},m(e,t){d(e,s,t),p(s,a),p(a,r),p(r,h),p(a,f)},d(e){e&&i(s)}}}();return{c(){s=t("div"),ge&&ge.c(),a=r(),f=t("div"),x=t("div"),I=t("a"),V=t("img"),T=r(),_=t("div"),S=t("div"),N=l(de),C=r(),J=t("div");for(let e=0;e<be.length;e+=1)be[e].c();L=r(),$=t("div"),F=t("a"),Z=l(pe),R=l(", "),U=l(fe),Y=r(),O=t("div"),me&&me.c(),K=r(),Ee&&Ee.c(),Q=r(),we&&we.c(),ee=r(),xe&&xe.c(),se=r(),ke&&ke.c(),ae=r(),ye&&ye.c(),te=r(),Ie&&Ie.c(),le=r(),De&&De.c(),re=r(),Ve&&Ve.c(),ce=r(),Ae&&Ae.c(),ne=r(),Be&&Be.c(),oe=r(),je&&je.c(),ie=r(),Pe&&Pe.c(),he=r(),Me&&Me.c(),ve=r(),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=n(s);ge&&ge.l(t),a=h(t),f=c(t,"DIV",{class:!0});var l=n(f);x=c(l,"DIV",{class:!0});var r=n(x);I=c(r,"A",{href:!0,target:!0});var v=n(I);V=c(v,"IMG",{alt:!0,src:!0,class:!0}),v.forEach(i),T=h(r),_=c(r,"DIV",{class:!0});var d=n(_);S=c(d,"DIV",{class:!0});var p=n(S);N=o(p,de),p.forEach(i),C=h(d),J=c(d,"DIV",{class:!0});var g=n(J);for(let e=0;e<be.length;e+=1)be[e].l(g);g.forEach(i),L=h(d),$=c(d,"DIV",{class:!0});var u=n($);F=c(u,"A",{href:!0,target:!0});var b=n(F);Z=o(b,pe),R=o(b,", "),U=o(b,fe),b.forEach(i),u.forEach(i),Y=h(d),O=c(d,"DIV",{class:!0});var m=n(O);me&&me.l(m),K=h(m),Ee&&Ee.l(m),Q=h(m),we&&we.l(m),ee=h(m),xe&&xe.l(m),se=h(m),ke&&ke.l(m),ae=h(m),ye&&ye.l(m),te=h(m),Ie&&Ie.l(m),le=h(m),De&&De.l(m),re=h(m),Ve&&Ve.l(m),ce=h(m),Ae&&Ae.l(m),ne=h(m),Be&&Be.l(m),oe=h(m),je&&je.l(m),m.forEach(i),d.forEach(i),r.forEach(i),ie=h(l),Pe&&Pe.l(l),l.forEach(i),he=h(t),Me&&Me.l(t),ve=h(t),t.forEach(i),this.h()},h(){v(V,"alt","Thumbnail"),V.src!==(B=e[18].featureImg)&&v(V,"src",B),v(V,"class","svelte-db742p"),v(I,"href",M="/papers/"+e[18].id),v(I,"target","_self"),v(S,"class","pub-title svelte-db742p"),v(J,"class","pub-author svelte-db742p"),v(F,"href",X=e[18].venueURL),v(F,"target","_self"),v($,"class","pub-venue svelte-db742p"),v(O,"class","pub-icons svelte-db742p"),v(_,"class","pub-content svelte-db742p"),v(x,"class","pub svelte-db742p"),v(f,"class","news-content svelte-db742p"),v(s,"class","pub-block svelte-db742p"),g(s,"has-block-name",0===e[17]),g(s,"pub-block-last",e[17]===e[6].length-1)},m(e,t){d(e,s,t),ge&&ge.m(s,null),p(s,a),p(s,f),p(f,x),p(x,I),p(I,V),p(x,T),p(x,_),p(_,S),p(S,N),p(_,C),p(_,J);for(let e=0;e<be.length;e+=1)be[e].m(J,null);p(_,L),p(_,$),p($,F),p(F,Z),p(F,R),p(F,U),p(_,Y),p(_,O),me&&me.m(O,null),p(O,K),Ee&&Ee.m(O,null),p(O,Q),we&&we.m(O,null),p(O,ee),xe&&xe.m(O,null),p(O,se),ke&&ke.m(O,null),p(O,ae),ye&&ye.m(O,null),p(O,te),Ie&&Ie.m(O,null),p(O,le),De&&De.m(O,null),p(O,re),Ve&&Ve.m(O,null),p(O,ce),Ae&&Ae.m(O,null),p(O,ne),Be&&Be.m(O,null),p(O,oe),je&&je.m(O,null),p(f,ie),Pe&&Pe.m(f,null),p(s,he),Me&&Me.m(s,null),p(s,ve)},p(e,a){if(192&a){let s;for(ue=e[18].authors,s=0;s<ue.length;s+=1){const t=P(e,ue,s);be[s]?be[s].p(t,a):(be[s]=W(t),be[s].c(),be[s].m(J,null))}for(;s<be.length;s+=1)be[s].d(1);be.length=ue.length}void 0!==e[18].url&&me.p(e,a),void 0!==e[18].demo&&Ee.p(e,a),void 0!==e[18].video&&we.p(e,a),void 0!==e[18].pdf&&xe.p(e,a),void 0!==e[18].slides&&ke.p(e,a),void 0!==e[18].poster&&ye.p(e,a),void 0!==e[18].repo&&Ie.p(e,a),!0===e[18].showStar&&De.p(e,a),void 0!==e[18].data&&Ve.p(e,a),void 0!==e[18].bibtex&&Ae.p(e,a),void 0!==e[18].awards&&je.p(e,a),void 0!==e[18].bibtex&&Pe.p(e,a),64&a&&g(s,"pub-block-last",e[17]===e[6].length-1)},d(e){e&&i(s),ge&&ge.d(),b(be,e),me&&me.d(),Ee&&Ee.d(),we&&we.d(),xe&&xe.d(),ke&&ke.d(),ye&&ye.d(),Ie&&Ie.d(),De&&De.d(),Ve&&Ve.d(),Ae&&Ae.d(),Be&&Be.d(),je&&je.d(),Pe&&Pe.d(),Me&&Me.d()}}}function $(e){let s,a,f,g,u,b,w,x;return{c(){s=t("a"),a=t("div"),f=m("svg"),g=m("use"),u=r(),b=t("span"),w=l("Code"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);f=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(f);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=h(t),b=c(t,"SPAN",{class:!0});var v=n(b);w=o(v,"Code"),v.forEach(i),t.forEach(i),this.h()},h(){E(g,"xlink:href","/sprite.svg#github-alt-brands"),v(f,"viewBox","0 0 100 100"),v(f,"class","svelte-db742p"),v(a,"class","svg-icon svelte-db742p"),v(b,"class","svelte-db742p"),v(s,"class","icon-container svelte-db742p"),v(s,"href",x=`https://github.com/${e[15].repo}`),v(s,"target","_self")},m(e,t){d(e,s,t),p(s,a),p(a,f),p(f,g),p(s,u),p(s,b),p(b,w)},p(e,a){32&a&&x!==(x=`https://github.com/${e[15].repo}`)&&v(s,"href",x)},d(e){e&&i(s)}}}function F(e){let s,a,f,g,u,b,w,x;return{c(){s=t("a"),a=t("div"),f=m("svg"),g=m("use"),u=r(),b=t("span"),w=l("Demo"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);f=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(f);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=h(t),b=c(t,"SPAN",{class:!0});var v=n(b);w=o(v,"Demo"),v.forEach(i),t.forEach(i),this.h()},h(){E(g,"xlink:href","/sprite.svg#play-solid"),v(f,"viewBox","0 0 100 100"),v(f,"class","svelte-db742p"),v(a,"class","svg-icon svelte-db742p"),v(b,"class","svelte-db742p"),v(s,"class","icon-container svelte-db742p"),v(s,"href",x=e[15].demo),v(s,"target","_self")},m(e,t){d(e,s,t),p(s,a),p(a,f),p(f,g),p(s,u),p(s,b),p(b,w)},p(e,a){32&a&&x!==(x=e[15].demo)&&v(s,"href",x)},d(e){e&&i(s)}}}function Z(e){let s,a,l,o,f,g,u=V(e[15].award.name,e[15].award.url)+"";return{c(){s=t("div"),a=t("div"),l=m("svg"),o=m("use"),f=r(),g=t("div"),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=n(s);a=c(t,"DIV",{class:!0});var r=n(a);l=c(r,"svg",{viewBox:!0,class:!0},1);var v=n(l);o=c(v,"use",{"xlink:href":!0},1),n(o).forEach(i),v.forEach(i),r.forEach(i),f=h(t),g=c(t,"DIV",{class:!0}),n(g).forEach(i),t.forEach(i),this.h()},h(){E(o,"xlink:href","/sprite.svg#award-solid"),v(l,"viewBox","0 0 100 100"),v(l,"class","svelte-db742p"),v(a,"class","svg-icon svelte-db742p"),v(g,"class","award-highlight svelte-db742p"),v(s,"class","icon-container award svelte-db742p")},m(e,t){d(e,s,t),p(s,a),p(a,l),p(l,o),p(s,f),p(s,g),g.innerHTML=u},p(e,s){32&s&&u!==(u=V(e[15].award.name,e[15].award.url)+"")&&(g.innerHTML=u)},d(e){e&&i(s)}}}function R(e){let s,a,g,u,b,m,E,w,x,k,y,I,D,V,A,B,j,P,M,T=e[15].name+"",_=e[15].description+"",S=void 0!==e[15].repo&&$(e),N=void 0!==e[15].demo&&F(e),C=void 0!==e[15].award&&Z(e);return{c(){s=t("div"),a=t("a"),g=t("img"),m=r(),E=t("div"),w=t("div"),x=t("span"),k=l(T),y=l(":"),I=r(),D=t("span"),V=l(_),A=r(),B=t("div"),S&&S.c(),j=r(),N&&N.c(),P=r(),C&&C.c(),M=r(),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=n(s);a=c(t,"A",{href:!0});var l=n(a);g=c(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(i),m=h(t),E=c(t,"DIV",{class:!0});var r=n(E);w=c(r,"DIV",{class:!0});var v=n(w);x=c(v,"SPAN",{class:!0});var d=n(x);k=o(d,T),y=o(d,":"),d.forEach(i),I=h(v),D=c(v,"SPAN",{class:!0});var p=n(D);V=o(p,_),p.forEach(i),v.forEach(i),A=h(r),B=c(r,"DIV",{class:!0});var f=n(B);S&&S.l(f),j=h(f),N&&N.l(f),P=h(f),C&&C.l(f),f.forEach(i),r.forEach(i),M=h(t),t.forEach(i),this.h()},h(){g.src!==(u=e[15].teaser)&&v(g,"src",u),v(g,"alt","project-teaser"),v(g,"class","svelte-db742p"),v(a,"href",b=`https://github.com/${e[15].repo}`),v(x,"class","project-name svelte-db742p"),v(D,"class","project-detail svelte-db742p"),v(w,"class","project-text svelte-db742p"),v(B,"class","pub-icons svelte-db742p"),v(E,"class","project-description svelte-db742p"),v(s,"class","project-card svelte-db742p")},m(e,t){d(e,s,t),p(s,a),p(a,g),p(s,m),p(s,E),p(E,w),p(w,x),p(x,k),p(x,y),p(w,I),p(w,D),p(D,V),p(E,A),p(E,B),S&&S.m(B,null),p(B,j),N&&N.m(B,null),p(B,P),C&&C.m(B,null),p(s,M)},p(e,s){32&s&&g.src!==(u=e[15].teaser)&&v(g,"src",u),32&s&&b!==(b=`https://github.com/${e[15].repo}`)&&v(a,"href",b),32&s&&T!==(T=e[15].name+"")&&f(k,T),32&s&&_!==(_=e[15].description+"")&&f(V,_),void 0!==e[15].repo?S?S.p(e,s):((S=$(e)).c(),S.m(B,j)):S&&(S.d(1),S=null),void 0!==e[15].demo?N?N.p(e,s):((N=F(e)).c(),N.m(B,P)):N&&(N.d(1),N=null),void 0!==e[15].award?C?C.p(e,s):((C=Z(e)).c(),C.m(B,null)):C&&(C.d(1),C=null)},d(e){e&&i(s),S&&S.d(),N&&N.d(),C&&C.d()}}}function U(e){let s,a,l;function r(e,s){return e[4]<e[0].project.length?Y:X}let o=r(e),h=o(e);return{c(){s=t("div"),h.c(),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);h.l(a),a.forEach(i),this.h()},h(){v(s,"class","add-more-button svg-icon right-margin svelte-db742p")},m(t,r){d(t,s,r),h.m(s,null),a||(l=w(s,"click",e[9]),a=!0)},p(e,a){o!==(o=r(e))&&(h.d(1),(h=o(e))&&(h.c(),h.m(s,null)))},d(e){e&&i(s),h.d(),a=!1,l()}}}function X(e){let s,a,t;return{c(){s=m("svg"),a=m("use"),t=l("\n            show less"),this.h()},l(e){s=c(e,"svg",{viewBox:!0,class:!0},1);var l=n(s);a=c(l,"use",{"xlink:href":!0},1),n(a).forEach(i),l.forEach(i),t=o(e,"\n            show less"),this.h()},h(){E(a,"xlink:href","/sprite.svg#arrow-circle-up-solid"),v(s,"viewBox","0 0 100 100"),v(s,"class","svelte-db742p")},m(e,l){d(e,s,l),p(s,a),d(e,t,l)},d(e){e&&i(s),e&&i(t)}}}function Y(e){let s,a,t;return{c(){s=m("svg"),a=m("use"),t=l("\n            show more"),this.h()},l(e){s=c(e,"svg",{viewBox:!0,class:!0},1);var l=n(s);a=c(l,"use",{"xlink:href":!0},1),n(a).forEach(i),l.forEach(i),t=o(e,"\n            show more"),this.h()},h(){E(a,"xlink:href","/sprite.svg#plus-circle-solid"),v(s,"viewBox","0 0 100 100"),v(s,"class","svelte-db742p")},m(e,l){d(e,s,l),p(s,a),d(e,t,l)},d(e){e&&i(s),e&&i(t)}}}function O(e){let s,a,f,g,u,D,A,j,P,C,J,W,H,z,G,q,$,F,Z,X,Y,O,K,Q,ee,se,ae,te,le,re,ce,ne,oe,ie,he,ve,de,pe,fe,ge,ue,be,me,Ee,we,xe,ke,ye,Ie,De,Ve,Ae,Be,je,Pe,Me,Te,_e,Se,Ne,Ce,Je,We,He,ze,Ge,qe,Le,$e,Fe,Ze,Re,Ue,Xe,Ye,Oe,Ke,Qe,es,ss,as,ts,ls,rs,cs,ns,os,is,hs,vs,ds,ps,fs,gs,us,bs,ms,Es,ws,xs,ks,ys=V("College of Computing","https://www.cc.gatech.edu/")+"",Is=V("Georgia Tech","https://gatech.edu/")+"",Ds=e[7]("Polo Chau")+"",Vs=V("UW–Madison","https://wisc.edu")+"",As=e[7]("Anthony Gitter")+"",Bs=e[7]("Michael Gleicher")+"",js=e[7]("Yu Hen Hu")+"",Ps=e[3],Ms=[];for(let s=0;s<Ps.length;s+=1)Ms[s]=_(T(e,Ps,s));function Ts(e,s){return e[2]<e[0].news.length?N:S}let _s=Ts(e),Ss=_s(e),Ns=e[6],Cs=[];for(let s=0;s<Ns.length;s+=1)Cs[s]=L(M(e,Ns,s));let Js=e[5],Ws=[];for(let s=0;s<Js.length;s+=1)Ws[s]=R(B(e,Js,s));let Hs=e[4]<e[0].project.length&&U(e);return{c(){s=t("meta"),a=t("meta"),f=t("meta"),g=t("meta"),u=t("meta"),D=t("meta"),A=t("meta"),j=t("meta"),P=t("meta"),C=t("meta"),J=t("meta"),W=t("meta"),H=t("meta"),z=t("meta"),G=r(),q=t("div"),$=t("div"),F=r(),Z=t("div"),X=t("div"),Y=t("div"),O=l("Zijie Jay Wang"),K=r(),Q=t("div"),ee=t("div"),se=t("p"),ae=l("Hi, I'm Jay. I'm a Machine Learning Ph.D. student in the\n            "),le=l("\n            at "),ce=l(" adviced by\n            "),oe=l("."),ie=r(),he=t("p"),ve=l("My research focuses on making AI more accessible, interpretable, and accountable,\n            by designing and developing novel interactive interfaces for people to easily\n            and enjoyably interact with machine learning systems at scale."),de=r(),pe=t("p"),fe=l("I recieved my B.S. from "),ue=l(",\n            where I worked closely with "),me=l(",\n            "),we=l(", and "),ke=l("."),ye=r(),Ie=t("div"),De=t("img"),Ae=r(),Be=t("div"),je=t("div"),Pe=t("a"),Me=m("svg"),Te=m("use"),_e=r(),Se=t("a"),Ne=m("svg"),Ce=m("use"),Je=r(),We=t("a"),He=m("svg"),ze=m("use"),Ge=r(),qe=t("a"),Le=m("svg"),$e=m("use"),Fe=r(),Ze=t("a"),Re=m("svg"),Ue=m("use"),Xe=r(),Ye=t("div"),Oe=t("div"),Ke=t("a"),Qe=l("jayw@gatech.edu"),es=r(),ss=t("div"),as=t("a"),ts=l("CV"),ls=r(),rs=t("div"),cs=t("div"),ns=l("News"),os=r(),is=t("div");for(let e=0;e<Ms.length;e+=1)Ms[e].c();hs=r(),vs=t("div"),Ss.c(),ds=r();for(let e=0;e<Cs.length;e+=1)Cs[e].c();ps=r(),fs=t("div"),gs=t("div"),us=l("Fun Projects"),bs=r();for(let e=0;e<Ws.length;e+=1)Ws[e].c();ms=r(),Hs&&Hs.c(),Es=r(),ws=t("div"),this.h()},l(e){const t=x('[data-svelte="svelte-59vge"]',document.head);s=c(t,"META",{name:!0,content:!0,class:!0}),a=c(t,"META",{name:!0,content:!0,class:!0}),f=c(t,"META",{property:!0,content:!0,class:!0}),g=c(t,"META",{property:!0,content:!0,class:!0}),u=c(t,"META",{property:!0,content:!0,class:!0}),D=c(t,"META",{property:!0,content:!0,class:!0}),A=c(t,"META",{property:!0,content:!0,class:!0}),j=c(t,"META",{property:!0,content:!0,class:!0}),P=c(t,"META",{property:!0,content:!0,class:!0}),C=c(t,"META",{property:!0,content:!0,class:!0}),J=c(t,"META",{property:!0,content:!0,class:!0}),W=c(t,"META",{property:!0,content:!0,class:!0}),H=c(t,"META",{property:!0,content:!0,class:!0}),z=c(t,"META",{property:!0,content:!0,class:!0}),t.forEach(i),G=h(e),q=c(e,"DIV",{class:!0});var l=n(q);$=c(l,"DIV",{class:!0}),n($).forEach(i),F=h(l),Z=c(l,"DIV",{class:!0});var r=n(Z);X=c(r,"DIV",{class:!0});var v=n(X);Y=c(v,"DIV",{class:!0});var d=n(Y);O=o(d,"Zijie Jay Wang"),d.forEach(i),K=h(v),Q=c(v,"DIV",{class:!0});var p=n(Q);ee=c(p,"DIV",{class:!0});var b=n(ee);se=c(b,"P",{class:!0});var m=n(se);ae=o(m,"Hi, I'm Jay. I'm a Machine Learning Ph.D. student in the\n            "),le=o(m,"\n            at "),ce=o(m," adviced by\n            "),oe=o(m,"."),m.forEach(i),ie=h(b),he=c(b,"P",{class:!0});var E=n(he);ve=o(E,"My research focuses on making AI more accessible, interpretable, and accountable,\n            by designing and developing novel interactive interfaces for people to easily\n            and enjoyably interact with machine learning systems at scale."),E.forEach(i),de=h(b),pe=c(b,"P",{class:!0});var w=n(pe);fe=o(w,"I recieved my B.S. from "),ue=o(w,",\n            where I worked closely with "),me=o(w,",\n            "),we=o(w,", and "),ke=o(w,"."),w.forEach(i),b.forEach(i),ye=h(p),Ie=c(p,"DIV",{class:!0});var k=n(Ie);De=c(k,"IMG",{src:!0,alt:!0,class:!0}),Ae=h(k),Be=c(k,"DIV",{class:!0,style:!0});var y=n(Be);je=c(y,"DIV",{class:!0});var I=n(je);Pe=c(I,"A",{class:!0,href:!0,target:!0});var V=n(Pe);Me=c(V,"svg",{viewBox:!0,class:!0},1);var B=n(Me);Te=c(B,"use",{"xlink:href":!0},1),n(Te).forEach(i),B.forEach(i),V.forEach(i),_e=h(I),Se=c(I,"A",{class:!0,href:!0,target:!0});var M=n(Se);Ne=c(M,"svg",{viewBox:!0,class:!0},1);var T=n(Ne);Ce=c(T,"use",{"xlink:href":!0},1),n(Ce).forEach(i),T.forEach(i),M.forEach(i),Je=h(I),We=c(I,"A",{class:!0,href:!0,target:!0});var _=n(We);He=c(_,"svg",{viewBox:!0,class:!0},1);var S=n(He);ze=c(S,"use",{"xlink:href":!0},1),n(ze).forEach(i),S.forEach(i),_.forEach(i),Ge=h(I),qe=c(I,"A",{class:!0,href:!0,target:!0});var N=n(qe);Le=c(N,"svg",{viewBox:!0,class:!0},1);var L=n(Le);$e=c(L,"use",{"xlink:href":!0},1),n($e).forEach(i),L.forEach(i),N.forEach(i),Fe=h(I),Ze=c(I,"A",{class:!0,href:!0,target:!0});var R=n(Ze);Re=c(R,"svg",{viewBox:!0,class:!0},1);var U=n(Re);Ue=c(U,"use",{"xlink:href":!0},1),n(Ue).forEach(i),U.forEach(i),R.forEach(i),I.forEach(i),Xe=h(y),Ye=c(y,"DIV",{class:!0});var te=n(Ye);Oe=c(te,"DIV",{class:!0,style:!0});var re=n(Oe);Ke=c(re,"A",{href:!0,target:!0,class:!0});var ne=n(Ke);Qe=o(ne,"jayw@gatech.edu"),ne.forEach(i),re.forEach(i),es=h(te),ss=c(te,"DIV",{class:!0});var ge=n(ss);as=c(ge,"A",{href:!0,target:!0,rel:!0,class:!0});var be=n(as);ts=o(be,"CV"),be.forEach(i),ge.forEach(i),te.forEach(i),y.forEach(i),k.forEach(i),p.forEach(i),ls=h(v),rs=c(v,"DIV",{class:!0});var Ee=n(rs);cs=c(Ee,"DIV",{class:!0});var xe=n(cs);ns=o(xe,"News"),xe.forEach(i),os=h(Ee),is=c(Ee,"DIV",{class:!0});var Ve=n(is);for(let e=0;e<Ms.length;e+=1)Ms[e].l(Ve);Ve.forEach(i),hs=h(Ee),vs=c(Ee,"DIV",{class:!0});var xs=n(vs);Ss.l(xs),xs.forEach(i),Ee.forEach(i),ds=h(v);for(let e=0;e<Cs.length;e+=1)Cs[e].l(v);ps=h(v),fs=c(v,"DIV",{class:!0});var ks=n(fs);gs=c(ks,"DIV",{class:!0});var ys=n(gs);us=o(ys,"Fun Projects"),ys.forEach(i),bs=h(ks);for(let e=0;e<Ws.length;e+=1)Ws[e].l(ks);ms=h(ks),Hs&&Hs.l(ks),ks.forEach(i),v.forEach(i),r.forEach(i),Es=h(l),ws=c(l,"DIV",{class:!0}),n(ws).forEach(i),l.forEach(i),this.h()},h(){document.title="Jay Wang",v(s,"name","title"),v(s,"content","Jay Wang"),v(s,"class","svelte-db742p"),v(a,"name","description"),v(a,"content","Zijie Jay Wang is a Ph.D. student in the College of Computing at Georgia Tech researching the intersection of machine learning and data visualization."),v(a,"class","svelte-db742p"),v(f,"property","og:type"),v(f,"content","website"),v(f,"class","svelte-db742p"),v(g,"property","og:url"),v(g,"content","https://zijie.wang/"),v(g,"class","svelte-db742p"),v(u,"property","og:title"),v(u,"content","Jay Wang"),v(u,"class","svelte-db742p"),v(D,"property","og:description"),v(D,"content","Zijie Jay Wang is a Ph.D. student in the College of Computing at Georgia Tech researching the intersection of machine learning and data visualization."),v(D,"class","svelte-db742p"),v(A,"property","og:image"),v(A,"content","https://zijie.wang/images/teasers/preview.png"),v(A,"class","svelte-db742p"),v(j,"property","twitter:card"),v(j,"content","summary_large_image"),v(j,"class","svelte-db742p"),v(P,"property","twitter:url"),v(P,"content","https://zijie.wang/"),v(P,"class","svelte-db742p"),v(C,"property","twitter:title"),v(C,"content","Jay Wang"),v(C,"class","svelte-db742p"),v(J,"property","twitter:description"),v(J,"content","Zijie Jay Wang is a Ph.D. student in the College of Computing at Georgia Tech researching the intersection of machine learning and data visualization."),v(J,"class","svelte-db742p"),v(W,"property","twitter:image"),v(W,"content","https://zijie.wang/images/teasers/preview.png"),v(W,"class","svelte-db742p"),v(H,"property","twitter:site"),v(H,"content","@jay4w"),v(H,"class","svelte-db742p"),v(z,"property","twitter:creator"),v(z,"content","@jay4w"),v(z,"class","svelte-db742p"),v($,"class","left-padding svelte-db742p"),v(Y,"class","header name svelte-db742p"),te=new I(le),re=new I(ce),ne=new I(oe),v(se,"class","svelte-db742p"),v(he,"class","svelte-db742p"),ge=new I(ue),be=new I(me),Ee=new I(we),xe=new I(ke),v(pe,"class","svelte-db742p"),v(ee,"class","name-text svelte-db742p"),De.src!==(Ve="images/jay.jpg")&&v(De,"src","images/jay.jpg"),v(De,"alt","Jay Wang"),v(De,"class","svelte-db742p"),E(Te,"xlink:href","/sprite.svg#github-alt-brands"),v(Me,"viewBox","0 0 100 100"),v(Me,"class","svelte-db742p"),v(Pe,"class","svg-icon svelte-db742p"),v(Pe,"href","https://github.com/xiaohk"),v(Pe,"target","_self"),E(Ce,"xlink:href","/sprite.svg#graduation-cap-solid"),v(Ne,"viewBox","0 0 100 100"),v(Ne,"class","svelte-db742p"),v(Se,"class","svg-icon svelte-db742p"),v(Se,"href","https://scholar.google.com/citations?user=eouAYvcAAAAJ&hl=en"),v(Se,"target","_self"),E(ze,"xlink:href","/sprite.svg#orcid-brands"),v(He,"viewBox","0 0 100 100"),v(He,"class","svelte-db742p"),v(We,"class","svg-icon svelte-db742p"),v(We,"href","https://orcid.org/0000-0003-4360-1423"),v(We,"target","_self"),E($e,"xlink:href","/sprite.svg#twitter-brands"),v(Le,"viewBox","0 0 100 100"),v(Le,"class","svelte-db742p"),v(qe,"class","svg-icon svelte-db742p"),v(qe,"href","https://twitter.com/Jay4w"),v(qe,"target","_self"),E(Ue,"xlink:href","/sprite.svg#linkedin-brands"),v(Re,"viewBox","0 0 100 100"),v(Re,"class","svelte-db742p"),v(Ze,"class","svg-icon svelte-db742p"),v(Ze,"href","https://www.linkedin.com/in/zijiewang/"),v(Ze,"target","_self"),v(je,"class","icons svelte-db742p"),v(Ke,"href","mailto:jayw@gatech.edu"),v(Ke,"target","_self"),v(Ke,"class","svelte-db742p"),v(Oe,"class","label-text svelte-db742p"),k(Oe,"font-family","Roboto Mono"),v(as,"href","/cv"),v(as,"target","_self"),v(as,"rel","prefetch"),v(as,"class","svelte-db742p"),v(ss,"class","label-cv svelte-db742p"),v(Ye,"class","infos svelte-db742p"),v(Be,"class","block-tb svelte-db742p"),k(Be,"padding","0 5px"),v(Ie,"class","name-pic svelte-db742p"),v(Q,"class","block-lr svelte-db742p"),v(cs,"class","block-name svelte-db742p"),v(is,"class","news-content svelte-db742p"),v(vs,"class","add-more-button svg-icon right-margin svelte-db742p"),v(rs,"class","news-block has-block-name svelte-db742p"),v(gs,"class","block-name svelte-db742p"),v(fs,"class","project svelte-db742p"),v(X,"class","block-tb svelte-db742p"),v(Z,"class","content svelte-db742p"),v(ws,"class","right-padding svelte-db742p"),v(q,"class","page svelte-db742p")},m(t,l){p(document.head,s),p(document.head,a),p(document.head,f),p(document.head,g),p(document.head,u),p(document.head,D),p(document.head,A),p(document.head,j),p(document.head,P),p(document.head,C),p(document.head,J),p(document.head,W),p(document.head,H),p(document.head,z),d(t,G,l),d(t,q,l),p(q,$),p(q,F),p(q,Z),p(Z,X),p(X,Y),p(Y,O),p(X,K),p(X,Q),p(Q,ee),p(ee,se),p(se,ae),te.m(ys,se),p(se,le),re.m(Is,se),p(se,ce),ne.m(Ds,se),p(se,oe),p(ee,ie),p(ee,he),p(he,ve),p(ee,de),p(ee,pe),p(pe,fe),ge.m(Vs,pe),p(pe,ue),be.m(As,pe),p(pe,me),Ee.m(Bs,pe),p(pe,we),xe.m(js,pe),p(pe,ke),p(Q,ye),p(Q,Ie),p(Ie,De),p(Ie,Ae),p(Ie,Be),p(Be,je),p(je,Pe),p(Pe,Me),p(Me,Te),p(je,_e),p(je,Se),p(Se,Ne),p(Ne,Ce),p(je,Je),p(je,We),p(We,He),p(He,ze),p(je,Ge),p(je,qe),p(qe,Le),p(Le,$e),p(je,Fe),p(je,Ze),p(Ze,Re),p(Re,Ue),p(Be,Xe),p(Be,Ye),p(Ye,Oe),p(Oe,Ke),p(Ke,Qe),p(Ye,es),p(Ye,ss),p(ss,as),p(as,ts),p(X,ls),p(X,rs),p(rs,cs),p(cs,ns),p(rs,os),p(rs,is);for(let e=0;e<Ms.length;e+=1)Ms[e].m(is,null);p(rs,hs),p(rs,vs),Ss.m(vs,null),p(X,ds);for(let e=0;e<Cs.length;e+=1)Cs[e].m(X,null);p(X,ps),p(X,fs),p(fs,gs),p(gs,us),p(fs,bs);for(let e=0;e<Ws.length;e+=1)Ws[e].m(fs,null);p(fs,ms),Hs&&Hs.m(fs,null),p(q,Es),p(q,ws),xs||(ks=w(vs,"click",e[8]),xs=!0)},p(e,[s]){if(8&s){let a;for(Ps=e[3],a=0;a<Ps.length;a+=1){const t=T(e,Ps,a);Ms[a]?Ms[a].p(t,s):(Ms[a]=_(t),Ms[a].c(),Ms[a].m(is,null))}for(;a<Ms.length;a+=1)Ms[a].d(1);Ms.length=Ps.length}if(_s!==(_s=Ts(e))&&(Ss.d(1),(Ss=_s(e))&&(Ss.c(),Ss.m(vs,null))),1218&s){let a;for(Ns=e[6],a=0;a<Ns.length;a+=1){const t=M(e,Ns,a);Cs[a]?Cs[a].p(t,s):(Cs[a]=L(t),Cs[a].c(),Cs[a].m(X,ps))}for(;a<Cs.length;a+=1)Cs[a].d(1);Cs.length=Ns.length}if(32&s){let a;for(Js=e[5],a=0;a<Js.length;a+=1){const t=B(e,Js,a);Ws[a]?Ws[a].p(t,s):(Ws[a]=R(t),Ws[a].c(),Ws[a].m(fs,ms))}for(;a<Ws.length;a+=1)Ws[a].d(1);Ws.length=Js.length}e[4]<e[0].project.length?Hs?Hs.p(e,s):((Hs=U(e)).c(),Hs.m(fs,null)):Hs&&(Hs.d(1),Hs=null)},i:y,o:y,d(e){i(s),i(a),i(f),i(g),i(u),i(D),i(A),i(j),i(P),i(C),i(J),i(W),i(H),i(z),e&&i(G),e&&i(q),b(Ms,e),Ss.d(),b(Cs,e),b(Ws,e),Hs&&Hs.d(),xs=!1,ks()}}}function K({params:e,query:s}){return this.fetch("data.json").then(e=>e.json()).then(e=>({data:e}))}function Q(e,s,a){let{data:t}=s,l="",r=4,c=t.news.slice(0,r),n=[];t.featured.forEach(e=>{t.publication.forEach(s=>{if(s.id==e.id){let a=Object.assign({},s);a.featureImg=e.featureImg,n.push(a)}})});let o=6,i=t.project.slice(0,o);const h=e=>{a(1,l=l===e?"":e)};return e.$$set=(e=>{"data"in e&&a(0,t=e.data)}),[t,l,r,c,o,i,n,(e,s=!1)=>s&&t.people[e].isMe?V(e,t.people[e].url,700):V(e,t.people[e].url),()=>{r<t.news.length?a(2,r+=3):a(2,r=3),a(3,c=t.news.slice(0,r))},()=>{o<t.project.length?a(4,o+=2):a(4,o=4),a(5,i=t.project.slice(0,o))},h,(e,s)=>s===e,e=>console.log(e),e=>h(e.id)]}export default class extends e{constructor(e){super(),s(this,e,Q,O,a,{data:0})}}export{K as preload};
