import{S as e,i as s,s as t,e as a,t as l,a as r,c,b as n,d as o,f as i,g as v,h,j as f,k as d,l as m,m as g,n as u,o as p,p as E,x as w,q as x,r as b,u as y,v as k,H as I,w as D}from"./client.2b2eff09.js";import{m as V,g as A}from"./helpers.17d7bc92.js";function B(e,s,t){const a=e.slice();return a[15]=s[t],a[17]=t,a}function j(e,s,t){const a=e.slice();return a[20]=s[t],a}function P(e,s,t){const a=e.slice();return a[25]=s[t],a[27]=t,a}function M(e,s,t){const a=e.slice();return a[18]=s[t],a[17]=t,a}function T(e,s,t){const a=e.slice();return a[28]=s[t],a[17]=t,a}function _(e){let s,t,g,u,p,E,w=e[28].date+"",x=e[28].news+"";return{c(){s=a("div"),t=a("div"),g=l(w),u=r(),p=a("div"),E=r(),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);t=c(a,"DIV",{class:!0});var l=n(t);g=o(l,w),l.forEach(i),u=v(a),p=c(a,"DIV",{class:!0}),n(p).forEach(i),E=v(a),a.forEach(i),this.h()},h(){h(t,"class","news-date svelte-2tev9m"),h(p,"class","news-text svelte-2tev9m"),h(s,"class","news svelte-2tev9m")},m(e,a){f(e,s,a),d(s,t),d(t,g),d(s,u),d(s,p),p.innerHTML=x,d(s,E)},p(e,s){8&s&&w!==(w=e[28].date+"")&&m(g,w),8&s&&x!==(x=e[28].news+"")&&(p.innerHTML=x)},d(e){e&&i(s)}}}function S(e){let s,t,a;return{c(){s=E("svg"),t=E("use"),a=l("\n          show less"),this.h()},l(e){s=c(e,"svg",{viewBox:!0,class:!0},1);var l=n(s);t=c(l,"use",{"xlink:href":!0},1),n(t).forEach(i),l.forEach(i),a=o(e,"\n          show less"),this.h()},h(){w(t,"xlink:href","/sprite.svg#arrow-circle-up-solid"),h(s,"viewBox","0 0 100 100"),h(s,"class","svelte-2tev9m")},m(e,l){f(e,s,l),d(s,t),f(e,a,l)},d(e){e&&i(s),e&&i(a)}}}function C(e){let s,t,a;return{c(){s=E("svg"),t=E("use"),a=l("\n          show more"),this.h()},l(e){s=c(e,"svg",{viewBox:!0,class:!0},1);var l=n(s);t=c(l,"use",{"xlink:href":!0},1),n(t).forEach(i),l.forEach(i),a=o(e,"\n          show more"),this.h()},h(){w(t,"xlink:href","/sprite.svg#plus-circle-solid"),h(s,"viewBox","0 0 100 100"),h(s,"class","svelte-2tev9m")},m(e,l){f(e,s,l),d(s,t),f(e,a,l)},d(e){e&&i(s),e&&i(a)}}}function N(e){let s,t,a=e[7](e[25],!0)+"",r=e[27]!==e[18].authors.length-1?", ":"";return{c(){t=l(r),this.h()},l(e){t=o(e,r),this.h()},h(){s=new I(t)},m(e,l){s.m(a,e,l),f(e,t,l)},p:k,d(e){e&&s.d(),e&&i(t)}}}function J(e){let s,t,a,r=e[7](e[25],!0)+"",c=e[18].equals.filter(function(...s){return e[11](e[25],...s)}).length>0?"*":"",n=e[27]!==e[18].authors.length-1?", ":"";return{c(){t=l(c),a=l(n),this.h()},l(e){t=o(e,c),a=o(e,n),this.h()},h(){s=new I(t)},m(e,l){s.m(r,e,l),f(e,t,l),f(e,a,l)},p(s,t){e=s},d(e){e&&s.d(),e&&i(t),e&&i(a)}}}function L(e){let s;let t=function(e,s){return void 0!==e[18].equals?J:N}(e)(e);return{c(){t.c(),s=u()},l(e){t.l(e),s=u()},m(e,a){t.m(e,a),f(e,s,a)},p(e,s){t.p(e,s)},d(e){t.d(e),e&&i(s)}}}function H(e){let s,t,m,g,u,p,x,b,k,I,V=!0===e[18].showStar&&function(e){let s,t,m,g,u,p,E,w,x={ctx:e,current:null,token:null,pending:G,then:z,catch:W,value:23,error:24};return D(u=A(e[18].repo).catch(e[12]),x),{c(){s=a("div"),t=a("div"),m=l("("),g=a("a"),x.block.c(),p=r(),w=l(")"),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);t=c(a,"DIV",{style:!0});var l=n(t);m=o(l,"("),g=c(l,"A",{class:!0,target:!0,style:!0,href:!0});var r=n(g);x.block.l(r),p=v(r),r.forEach(i),w=o(l,")"),l.forEach(i),a.forEach(i),this.h()},h(){h(g,"class","svg-icon svelte-2tev9m"),h(g,"target","_self"),y(g,"font-weight","500"),y(g,"margin-right","-3px"),h(g,"href",E=`https://github.com/${e[18].repo}/stargazers`),y(t,"display","flex"),h(s,"class","star-container svelte-2tev9m")},m(e,a){f(e,s,a),d(s,t),d(t,m),d(t,g),x.block.m(g,x.anchor=null),x.mount=(()=>g),x.anchor=p,d(g,p),d(t,w)},p(s,t){{const a=(e=s).slice();a[23]=x.resolved,x.block.p(a,t)}},d(e){e&&i(s),x.block.d(),x.token=null,x=null}}}(e);return{c(){s=a("div"),t=a("a"),m=a("div"),g=E("svg"),u=E("use"),p=r(),x=a("span"),b=l("Code"),I=r(),V&&V.c(),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);t=c(a,"A",{class:!0,href:!0,target:!0});var l=n(t);m=c(l,"DIV",{class:!0});var r=n(m);g=c(r,"svg",{viewBox:!0,class:!0},1);var h=n(g);u=c(h,"use",{"xlink:href":!0},1),n(u).forEach(i),h.forEach(i),r.forEach(i),p=v(l),x=c(l,"SPAN",{class:!0});var f=n(x);b=o(f,"Code"),f.forEach(i),l.forEach(i),I=v(a),V&&V.l(a),a.forEach(i),this.h()},h(){w(u,"xlink:href","/sprite.svg#github-alt-brands"),h(g,"viewBox","0 0 100 100"),h(g,"class","svelte-2tev9m"),h(m,"class","svg-icon svelte-2tev9m"),h(x,"class","svelte-2tev9m"),h(t,"class","icon-container no-right-margin svelte-2tev9m"),h(t,"href",k=`https://github.com/${e[18].repo}`),h(t,"target","_self"),h(s,"class","icon-container svelte-2tev9m")},m(e,a){f(e,s,a),d(s,t),d(t,m),d(m,g),d(g,u),d(t,p),d(t,x),d(x,b),d(s,I),V&&V.m(s,null)},p(e,s){!0===e[18].showStar&&V.p(e,s)},d(e){e&&i(s),V&&V.d()}}}function W(e){let s,t,r=e[24].message+"";return{c(){s=a("span"),t=l(r),this.h()},l(e){s=c(e,"SPAN",{style:!0,class:!0});var a=n(s);t=o(a,r),a.forEach(i),this.h()},h(){y(s,"color","red"),h(s,"class","svelte-2tev9m")},m(e,a){f(e,s,a),d(s,t)},p:k,d(e){e&&i(s)}}}function z(e){let s,t,m,g,u,p=(void 0===e[23]?"":e[23])+"";return{c(){s=E("svg"),t=E("use"),m=r(),g=a("div"),u=l(p),this.h()},l(e){s=c(e,"svg",{viewBox:!0,style:!0,class:!0},1);var a=n(s);t=c(a,"use",{"xlink:href":!0},1),n(t).forEach(i),a.forEach(i),m=v(e),g=c(e,"DIV",{class:!0});var l=n(g);u=o(l,p),l.forEach(i),this.h()},h(){w(t,"xlink:href","/sprite.svg#star-solid"),h(s,"viewBox","0 0 100 100"),y(s,"height","1.3em"),h(s,"class","svelte-2tev9m"),h(g,"class","award-highlight svelte-2tev9m")},m(e,a){f(e,s,a),d(s,t),f(e,m,a),f(e,g,a),d(g,u)},p:k,d(e){e&&i(s),e&&i(m),e&&i(g)}}}function G(e){let s;return{c(){s=l("loading")},l(e){s=o(e,"loading")},m(e,t){f(e,s,t)},p:k,d(e){e&&i(s)}}}function q(e){let s,t,l,o,m,g,u,p=V(e[20].name,e[20].url)+"";return{c(){s=a("div"),t=a("div"),l=E("svg"),o=E("use"),m=r(),g=a("div"),u=r(),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);t=c(a,"DIV",{class:!0});var r=n(t);l=c(r,"svg",{viewBox:!0,class:!0},1);var h=n(l);o=c(h,"use",{"xlink:href":!0},1),n(o).forEach(i),h.forEach(i),r.forEach(i),m=v(a),g=c(a,"DIV",{class:!0}),n(g).forEach(i),u=v(a),a.forEach(i),this.h()},h(){w(o,"xlink:href","/sprite.svg#award-solid"),h(l,"viewBox","0 0 100 100"),h(l,"class","svelte-2tev9m"),h(t,"class","svg-icon svelte-2tev9m"),h(g,"class","award-highlight svelte-2tev9m"),h(s,"class","icon-container award svelte-2tev9m")},m(e,a){f(e,s,a),d(s,t),d(t,l),d(l,o),d(s,m),d(s,g),g.innerHTML=p,d(s,u)},p:k,d(e){e&&i(s)}}}function $(e){let s,t,m,b,I,D,V,A,B,M,T,_,S,C,N,J,W,z,G,$,F,U,R,Z,X,Y,O,K,Q,ee,se,te,ae,le,re,ce,ne,oe,ie=e[18].title+"",ve=(void 0===e[18].shortVenue?e[18].venue:e[18].shortVenue)+"",he=e[18].year+"",fe=0===e[17]&&function(e){let s,t;return{c(){s=a("div"),t=l("Featured Publications"),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);t=o(a,"Featured Publications"),a.forEach(i),this.h()},h(){h(s,"class","block-name svelte-2tev9m")},m(e,a){f(e,s,a),d(s,t)},d(e){e&&i(s)}}}(),de=e[18].authors,me=[];for(let s=0;s<de.length;s+=1)me[s]=L(P(e,de,s));let ge=void 0!==e[18].url&&function(e){let s,t,m,g,u,p,x,b;return{c(){s=a("a"),t=a("div"),m=E("svg"),g=E("use"),u=r(),p=a("span"),x=l("Project"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);t=c(a,"DIV",{class:!0});var l=n(t);m=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(m);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=v(a),p=c(a,"SPAN",{class:!0});var h=n(p);x=o(h,"Project"),h.forEach(i),a.forEach(i),this.h()},h(){w(g,"xlink:href","/sprite.svg#link-solid"),h(m,"viewBox","0 0 100 100"),h(m,"class","svelte-2tev9m"),h(t,"class","svg-icon svelte-2tev9m"),h(p,"class","svelte-2tev9m"),h(s,"class","icon-container svelte-2tev9m"),h(s,"href",b=e[18].url),h(s,"target","_self")},m(e,a){f(e,s,a),d(s,t),d(t,m),d(m,g),d(s,u),d(s,p),d(p,x)},p:k,d(e){e&&i(s)}}}(e),ue=void 0!==e[18].demo&&function(e){let s,t,m,g,u,p,x,b;return{c(){s=a("a"),t=a("div"),m=E("svg"),g=E("use"),u=r(),p=a("span"),x=l("Demo"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);t=c(a,"DIV",{class:!0});var l=n(t);m=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(m);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=v(a),p=c(a,"SPAN",{class:!0});var h=n(p);x=o(h,"Demo"),h.forEach(i),a.forEach(i),this.h()},h(){w(g,"xlink:href","/sprite.svg#play-solid"),h(m,"viewBox","0 0 100 100"),h(m,"class","svelte-2tev9m"),h(t,"class","svg-icon svelte-2tev9m"),h(p,"class","svelte-2tev9m"),h(s,"class","icon-container svelte-2tev9m"),h(s,"href",b=e[18].demo),h(s,"target","_self")},m(e,a){f(e,s,a),d(s,t),d(t,m),d(m,g),d(s,u),d(s,p),d(p,x)},p:k,d(e){e&&i(s)}}}(e),pe=void 0!==e[18].video&&function(e){let s,t,m,g,u,p,x,b;return{c(){s=a("a"),t=a("div"),m=E("svg"),g=E("use"),u=r(),p=a("span"),x=l("Video"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);t=c(a,"DIV",{class:!0});var l=n(t);m=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(m);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=v(a),p=c(a,"SPAN",{class:!0});var h=n(p);x=o(h,"Video"),h.forEach(i),a.forEach(i),this.h()},h(){w(g,"xlink:href","/sprite.svg#film-solid"),h(m,"viewBox","0 0 100 100"),h(m,"class","svelte-2tev9m"),h(t,"class","svg-icon svelte-2tev9m"),h(p,"class","svelte-2tev9m"),h(s,"class","icon-container svelte-2tev9m"),h(s,"href",b=e[18].video),h(s,"target","_self")},m(e,a){f(e,s,a),d(s,t),d(t,m),d(m,g),d(s,u),d(s,p),d(p,x)},p:k,d(e){e&&i(s)}}}(e),Ee=void 0!==e[18].pdf&&function(e){let s,t,m,g,u,p,x,b;return{c(){s=a("a"),t=a("div"),m=E("svg"),g=E("use"),u=r(),p=a("span"),x=l("PDF"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);t=c(a,"DIV",{class:!0});var l=n(t);m=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(m);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=v(a),p=c(a,"SPAN",{class:!0});var h=n(p);x=o(h,"PDF"),h.forEach(i),a.forEach(i),this.h()},h(){w(g,"xlink:href","/sprite.svg#file-pdf-solid"),h(m,"viewBox","0 0 100 100"),h(m,"class","svelte-2tev9m"),h(t,"class","svg-icon svelte-2tev9m"),h(p,"class","svelte-2tev9m"),h(s,"class","icon-container svelte-2tev9m"),h(s,"href",b=e[18].pdf),h(s,"target","_self")},m(e,a){f(e,s,a),d(s,t),d(t,m),d(m,g),d(s,u),d(s,p),d(p,x)},p:k,d(e){e&&i(s)}}}(e),we=void 0!==e[18].slides&&function(e){let s,t,m,g,u,p,x,b;return{c(){s=a("a"),t=a("div"),m=E("svg"),g=E("use"),u=r(),p=a("span"),x=l("Slides"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);t=c(a,"DIV",{class:!0});var l=n(t);m=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(m);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=v(a),p=c(a,"SPAN",{class:!0});var h=n(p);x=o(h,"Slides"),h.forEach(i),a.forEach(i),this.h()},h(){w(g,"xlink:href","/sprite.svg#chalkboard-teacher-solid"),h(m,"viewBox","0 0 100 100"),h(m,"class","svelte-2tev9m"),h(t,"class","svg-icon svelte-2tev9m"),h(p,"class","svelte-2tev9m"),h(s,"class","icon-container svelte-2tev9m"),h(s,"href",b=e[18].slides),h(s,"target","_self")},m(e,a){f(e,s,a),d(s,t),d(t,m),d(m,g),d(s,u),d(s,p),d(p,x)},p:k,d(e){e&&i(s)}}}(e),xe=void 0!==e[18].poster&&function(e){let s,t,m,g,u,p,x,b;return{c(){s=a("a"),t=a("div"),m=E("svg"),g=E("use"),u=r(),p=a("span"),x=l("Poster"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);t=c(a,"DIV",{class:!0});var l=n(t);m=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(m);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=v(a),p=c(a,"SPAN",{class:!0});var h=n(p);x=o(h,"Poster"),h.forEach(i),a.forEach(i),this.h()},h(){w(g,"xlink:href","/sprite.svg#link-solid"),h(m,"viewBox","0 0 100 100"),h(m,"class","svelte-2tev9m"),h(t,"class","svg-icon svelte-2tev9m"),h(p,"class","svelte-2tev9m"),h(s,"class","icon-container svelte-2tev9m"),h(s,"href",b=e[18].poster),h(s,"target","_self")},m(e,a){f(e,s,a),d(s,t),d(t,m),d(m,g),d(s,u),d(s,p),d(p,x)},p:k,d(e){e&&i(s)}}}(e),be=void 0!==e[18].repo&&H(e),ye=void 0!==e[18].data&&function(e){let s,t,m,g,u,p,x,b;return{c(){s=a("a"),t=a("div"),m=E("svg"),g=E("use"),u=r(),p=a("span"),x=l("Data"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);t=c(a,"DIV",{class:!0});var l=n(t);m=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(m);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=v(a),p=c(a,"SPAN",{class:!0});var h=n(p);x=o(h,"Data"),h.forEach(i),a.forEach(i),this.h()},h(){w(g,"xlink:href","/sprite.svg#database-solid"),h(m,"viewBox","0 0 100 100"),h(m,"class","svelte-2tev9m"),h(t,"class","svg-icon svelte-2tev9m"),h(p,"class","svelte-2tev9m"),h(s,"class","icon-container svelte-2tev9m"),h(s,"href",b=e[18].data),h(s,"target","_self")},m(e,a){f(e,s,a),d(s,t),d(t,m),d(m,g),d(s,u),d(s,p),d(p,x)},p:k,d(e){e&&i(s)}}}(e),ke=void 0!==e[18].bibtex&&function(e){let s,t,m,g,u,p,b,y,k;function I(...s){return e[13](e[18],...s)}return{c(){s=a("div"),t=a("div"),m=E("svg"),g=E("use"),u=r(),p=a("span"),b=l("BibTeX"),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);t=c(a,"DIV",{class:!0});var l=n(t);m=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(m);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=v(a),p=c(a,"SPAN",{class:!0});var h=n(p);b=o(h,"BibTeX"),h.forEach(i),a.forEach(i),this.h()},h(){w(g,"xlink:href","/sprite.svg#quote-right-solid"),h(m,"viewBox","0 0 100 100"),h(m,"class","svelte-2tev9m"),h(t,"class","svg-icon svelte-2tev9m"),h(p,"class","svelte-2tev9m"),h(s,"class","icon-container bibtex-button svelte-2tev9m")},m(e,a){f(e,s,a),d(s,t),d(t,m),d(m,g),d(s,u),d(s,p),d(p,b),y||(k=x(s,"click",I),y=!0)},p(s,t){e=s},d(e){e&&i(s),y=!1,k()}}}(e),Ie=void 0!==e[18].equals&&function(e){let s,t;return{c(){s=a("div"),t=l("(*Authors contributed equally)"),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);t=o(a,"(*Authors contributed equally)"),a.forEach(i),this.h()},h(){h(s,"class","icon-container comment svelte-2tev9m")},m(e,a){f(e,s,a),d(s,t)},d(e){e&&i(s)}}}(),De=void 0!==e[18].awards&&function(e){let s,t=e[18].awards,a=[];for(let s=0;s<t.length;s+=1)a[s]=q(j(e,t,s));return{c(){for(let e=0;e<a.length;e+=1)a[e].c();s=u()},l(e){for(let s=0;s<a.length;s+=1)a[s].l(e);s=u()},m(e,t){for(let s=0;s<a.length;s+=1)a[s].m(e,t);f(e,s,t)},p(e,l){if(64&l){let r;for(t=e[18].awards,r=0;r<t.length;r+=1){const c=j(e,t,r);a[r]?a[r].p(c,l):(a[r]=q(c),a[r].c(),a[r].m(s.parentNode,s))}for(;r<a.length;r+=1)a[r].d(1);a.length=t.length}},d(e){p(a,e),e&&i(s)}}}(e),Ve=void 0!==e[18].bibtex&&function(e){let s,t,r,v=e[18].bibtex+"";return{c(){s=a("div"),t=a("pre"),r=l(v),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);t=c(a,"PRE",{class:!0});var l=n(t);r=o(l,v),l.forEach(i),a.forEach(i),this.h()},h(){h(t,"class","svelte-2tev9m"),h(s,"class","bibtex svelte-2tev9m"),g(s,"hidden",e[1]!==e[18].id)},m(e,a){f(e,s,a),d(s,t),d(t,r)},p(e,t){66&t&&g(s,"hidden",e[1]!==e[18].id)},d(e){e&&i(s)}}}(e),Ae=e[17]===e[6].length-1&&function(e){let s,t,r,v,m;return{c(){s=a("a"),t=a("div"),r=E("svg"),v=E("use"),m=l("\n              see all publications"),this.h()},l(e){s=c(e,"A",{href:!0,target:!0,style:!0});var a=n(s);t=c(a,"DIV",{class:!0});var l=n(t);r=c(l,"svg",{viewBox:!0,class:!0},1);var h=n(r);v=c(h,"use",{"xlink:href":!0},1),n(v).forEach(i),h.forEach(i),m=o(l,"\n              see all publications"),l.forEach(i),a.forEach(i),this.h()},h(){w(v,"xlink:href","/sprite.svg#external-link-alt-solid"),h(r,"viewBox","0 0 100 100"),h(r,"class","svelte-2tev9m"),h(t,"class","show-all-button svg-icon right-margin svelte-2tev9m"),h(s,"href","/cv#publications"),h(s,"target","_self"),y(s,"padding","0")},m(e,a){f(e,s,a),d(s,t),d(t,r),d(r,v),d(t,m)},d(e){e&&i(s)}}}();return{c(){s=a("div"),fe&&fe.c(),t=r(),m=a("div"),b=a("div"),I=a("a"),D=a("img"),B=r(),M=a("div"),T=a("div"),_=a("a"),S=l(ie),N=r(),J=a("div");for(let e=0;e<me.length;e+=1)me[e].c();W=r(),z=a("div"),G=a("a"),$=l(ve),F=l(", "),U=l(he),Z=r(),X=a("div"),ge&&ge.c(),Y=r(),ue&&ue.c(),O=r(),pe&&pe.c(),K=r(),Ee&&Ee.c(),Q=r(),we&&we.c(),ee=r(),xe&&xe.c(),se=r(),be&&be.c(),te=r(),ye&&ye.c(),ae=r(),ke&&ke.c(),le=r(),Ie&&Ie.c(),re=r(),De&&De.c(),ce=r(),Ve&&Ve.c(),ne=r(),Ae&&Ae.c(),oe=r(),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);fe&&fe.l(a),t=v(a),m=c(a,"DIV",{class:!0});var l=n(m);b=c(l,"DIV",{class:!0});var r=n(b);I=c(r,"A",{href:!0,target:!0});var h=n(I);D=c(h,"IMG",{alt:!0,src:!0,class:!0}),h.forEach(i),B=v(r),M=c(r,"DIV",{class:!0});var f=n(M);T=c(f,"DIV",{class:!0});var d=n(T);_=c(d,"A",{href:!0,target:!0});var g=n(_);S=o(g,ie),g.forEach(i),d.forEach(i),N=v(f),J=c(f,"DIV",{class:!0});var u=n(J);for(let e=0;e<me.length;e+=1)me[e].l(u);u.forEach(i),W=v(f),z=c(f,"DIV",{class:!0});var p=n(z);G=c(p,"A",{href:!0,target:!0});var E=n(G);$=o(E,ve),F=o(E,", "),U=o(E,he),E.forEach(i),p.forEach(i),Z=v(f),X=c(f,"DIV",{class:!0});var w=n(X);ge&&ge.l(w),Y=v(w),ue&&ue.l(w),O=v(w),pe&&pe.l(w),K=v(w),Ee&&Ee.l(w),Q=v(w),we&&we.l(w),ee=v(w),xe&&xe.l(w),se=v(w),be&&be.l(w),te=v(w),ye&&ye.l(w),ae=v(w),ke&&ke.l(w),le=v(w),Ie&&Ie.l(w),re=v(w),De&&De.l(w),w.forEach(i),f.forEach(i),r.forEach(i),ce=v(l),Ve&&Ve.l(l),l.forEach(i),ne=v(a),Ae&&Ae.l(a),oe=v(a),a.forEach(i),this.h()},h(){h(D,"alt","Thumbnail"),D.src!==(V=e[18].featureImg)&&h(D,"src",V),h(D,"class","svelte-2tev9m"),h(I,"href",A=e[18].url),h(I,"target","_self"),h(_,"href",C=e[18].url),h(_,"target","_self"),h(T,"class","pub-title svelte-2tev9m"),h(J,"class","pub-author svelte-2tev9m"),h(G,"href",R=e[18].venueURL),h(G,"target","_self"),h(z,"class","pub-venue svelte-2tev9m"),h(X,"class","pub-icons svelte-2tev9m"),h(M,"class","pub-content svelte-2tev9m"),h(b,"class","pub svelte-2tev9m"),h(m,"class","news-content svelte-2tev9m"),h(s,"class","pub-block svelte-2tev9m"),g(s,"has-block-name",0===e[17]),g(s,"pub-block-last",e[17]===e[6].length-1)},m(e,a){f(e,s,a),fe&&fe.m(s,null),d(s,t),d(s,m),d(m,b),d(b,I),d(I,D),d(b,B),d(b,M),d(M,T),d(T,_),d(_,S),d(M,N),d(M,J);for(let e=0;e<me.length;e+=1)me[e].m(J,null);d(M,W),d(M,z),d(z,G),d(G,$),d(G,F),d(G,U),d(M,Z),d(M,X),ge&&ge.m(X,null),d(X,Y),ue&&ue.m(X,null),d(X,O),pe&&pe.m(X,null),d(X,K),Ee&&Ee.m(X,null),d(X,Q),we&&we.m(X,null),d(X,ee),xe&&xe.m(X,null),d(X,se),be&&be.m(X,null),d(X,te),ye&&ye.m(X,null),d(X,ae),ke&&ke.m(X,null),d(X,le),Ie&&Ie.m(X,null),d(X,re),De&&De.m(X,null),d(m,ce),Ve&&Ve.m(m,null),d(s,ne),Ae&&Ae.m(s,null),d(s,oe)},p(e,t){if(192&t){let s;for(de=e[18].authors,s=0;s<de.length;s+=1){const a=P(e,de,s);me[s]?me[s].p(a,t):(me[s]=L(a),me[s].c(),me[s].m(J,null))}for(;s<me.length;s+=1)me[s].d(1);me.length=de.length}void 0!==e[18].url&&ge.p(e,t),void 0!==e[18].demo&&ue.p(e,t),void 0!==e[18].video&&pe.p(e,t),void 0!==e[18].pdf&&Ee.p(e,t),void 0!==e[18].slides&&we.p(e,t),void 0!==e[18].poster&&xe.p(e,t),void 0!==e[18].repo&&be.p(e,t),void 0!==e[18].data&&ye.p(e,t),void 0!==e[18].bibtex&&ke.p(e,t),void 0!==e[18].awards&&De.p(e,t),void 0!==e[18].bibtex&&Ve.p(e,t),64&t&&g(s,"pub-block-last",e[17]===e[6].length-1)},d(e){e&&i(s),fe&&fe.d(),p(me,e),ge&&ge.d(),ue&&ue.d(),pe&&pe.d(),Ee&&Ee.d(),we&&we.d(),xe&&xe.d(),be&&be.d(),ye&&ye.d(),ke&&ke.d(),Ie&&Ie.d(),De&&De.d(),Ve&&Ve.d(),Ae&&Ae.d()}}}function F(e){let s,t,m,g,u,p,x,b;return{c(){s=a("a"),t=a("div"),m=E("svg"),g=E("use"),u=r(),p=a("span"),x=l("Code"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);t=c(a,"DIV",{class:!0});var l=n(t);m=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(m);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=v(a),p=c(a,"SPAN",{class:!0});var h=n(p);x=o(h,"Code"),h.forEach(i),a.forEach(i),this.h()},h(){w(g,"xlink:href","/sprite.svg#github-alt-brands"),h(m,"viewBox","0 0 100 100"),h(m,"class","svelte-2tev9m"),h(t,"class","svg-icon svelte-2tev9m"),h(p,"class","svelte-2tev9m"),h(s,"class","icon-container svelte-2tev9m"),h(s,"href",b=`https://github.com/${e[15].repo}`),h(s,"target","_self")},m(e,a){f(e,s,a),d(s,t),d(t,m),d(m,g),d(s,u),d(s,p),d(p,x)},p(e,t){32&t&&b!==(b=`https://github.com/${e[15].repo}`)&&h(s,"href",b)},d(e){e&&i(s)}}}function U(e){let s,t,m,g,u,p,x,b;return{c(){s=a("a"),t=a("div"),m=E("svg"),g=E("use"),u=r(),p=a("span"),x=l("Demo"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);t=c(a,"DIV",{class:!0});var l=n(t);m=c(l,"svg",{viewBox:!0,class:!0},1);var r=n(m);g=c(r,"use",{"xlink:href":!0},1),n(g).forEach(i),r.forEach(i),l.forEach(i),u=v(a),p=c(a,"SPAN",{class:!0});var h=n(p);x=o(h,"Demo"),h.forEach(i),a.forEach(i),this.h()},h(){w(g,"xlink:href","/sprite.svg#play-solid"),h(m,"viewBox","0 0 100 100"),h(m,"class","svelte-2tev9m"),h(t,"class","svg-icon svelte-2tev9m"),h(p,"class","svelte-2tev9m"),h(s,"class","icon-container svelte-2tev9m"),h(s,"href",b=e[15].demo),h(s,"target","_self")},m(e,a){f(e,s,a),d(s,t),d(t,m),d(m,g),d(s,u),d(s,p),d(p,x)},p(e,t){32&t&&b!==(b=e[15].demo)&&h(s,"href",b)},d(e){e&&i(s)}}}function R(e){let s,t,l,o,m,g,u=V(e[15].award.name,e[15].award.url)+"";return{c(){s=a("div"),t=a("div"),l=E("svg"),o=E("use"),m=r(),g=a("div"),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);t=c(a,"DIV",{class:!0});var r=n(t);l=c(r,"svg",{viewBox:!0,class:!0},1);var h=n(l);o=c(h,"use",{"xlink:href":!0},1),n(o).forEach(i),h.forEach(i),r.forEach(i),m=v(a),g=c(a,"DIV",{class:!0}),n(g).forEach(i),a.forEach(i),this.h()},h(){w(o,"xlink:href","/sprite.svg#award-solid"),h(l,"viewBox","0 0 100 100"),h(l,"class","svelte-2tev9m"),h(t,"class","svg-icon svelte-2tev9m"),h(g,"class","award-highlight svelte-2tev9m"),h(s,"class","icon-container award svelte-2tev9m")},m(e,a){f(e,s,a),d(s,t),d(t,l),d(l,o),d(s,m),d(s,g),g.innerHTML=u},p(e,s){32&s&&u!==(u=V(e[15].award.name,e[15].award.url)+"")&&(g.innerHTML=u)},d(e){e&&i(s)}}}function Z(e){let s,t,g,u,p,E,w,x,b,y,k,I,D,V,A,B,j,P,M,T=e[15].name+"",_=e[15].description+"",S=void 0!==e[15].repo&&F(e),C=void 0!==e[15].demo&&U(e),N=void 0!==e[15].award&&R(e);return{c(){s=a("div"),t=a("a"),g=a("img"),E=r(),w=a("div"),x=a("div"),b=a("span"),y=l(T),k=l(":"),I=r(),D=a("span"),V=l(_),A=r(),B=a("div"),S&&S.c(),j=r(),C&&C.c(),P=r(),N&&N.c(),M=r(),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);t=c(a,"A",{href:!0});var l=n(t);g=c(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(i),E=v(a),w=c(a,"DIV",{class:!0});var r=n(w);x=c(r,"DIV",{class:!0});var h=n(x);b=c(h,"SPAN",{class:!0});var f=n(b);y=o(f,T),k=o(f,":"),f.forEach(i),I=v(h),D=c(h,"SPAN",{class:!0});var d=n(D);V=o(d,_),d.forEach(i),h.forEach(i),A=v(r),B=c(r,"DIV",{class:!0});var m=n(B);S&&S.l(m),j=v(m),C&&C.l(m),P=v(m),N&&N.l(m),m.forEach(i),r.forEach(i),M=v(a),a.forEach(i),this.h()},h(){g.src!==(u=e[15].teaser)&&h(g,"src",u),h(g,"alt","project-teaser"),h(g,"class","svelte-2tev9m"),h(t,"href",p=`https://github.com/${e[15].repo}`),h(b,"class","project-name svelte-2tev9m"),h(D,"class","project-detail svelte-2tev9m"),h(x,"class","project-text svelte-2tev9m"),h(B,"class","pub-icons svelte-2tev9m"),h(w,"class","project-description svelte-2tev9m"),h(s,"class","project-card svelte-2tev9m")},m(e,a){f(e,s,a),d(s,t),d(t,g),d(s,E),d(s,w),d(w,x),d(x,b),d(b,y),d(b,k),d(x,I),d(x,D),d(D,V),d(w,A),d(w,B),S&&S.m(B,null),d(B,j),C&&C.m(B,null),d(B,P),N&&N.m(B,null),d(s,M)},p(e,s){32&s&&g.src!==(u=e[15].teaser)&&h(g,"src",u),32&s&&p!==(p=`https://github.com/${e[15].repo}`)&&h(t,"href",p),32&s&&T!==(T=e[15].name+"")&&m(y,T),32&s&&_!==(_=e[15].description+"")&&m(V,_),void 0!==e[15].repo?S?S.p(e,s):((S=F(e)).c(),S.m(B,j)):S&&(S.d(1),S=null),void 0!==e[15].demo?C?C.p(e,s):((C=U(e)).c(),C.m(B,P)):C&&(C.d(1),C=null),void 0!==e[15].award?N?N.p(e,s):((N=R(e)).c(),N.m(B,null)):N&&(N.d(1),N=null)},d(e){e&&i(s),S&&S.d(),C&&C.d(),N&&N.d()}}}function X(e){let s,t,l;function r(e,s){return e[4]<e[0].project.length?O:Y}let o=r(e),v=o(e);return{c(){s=a("div"),v.c(),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=n(s);v.l(t),t.forEach(i),this.h()},h(){h(s,"class","add-more-button svg-icon right-margin svelte-2tev9m")},m(a,r){f(a,s,r),v.m(s,null),t||(l=x(s,"click",e[9]),t=!0)},p(e,t){o!==(o=r(e))&&(v.d(1),(v=o(e))&&(v.c(),v.m(s,null)))},d(e){e&&i(s),v.d(),t=!1,l()}}}function Y(e){let s,t,a;return{c(){s=E("svg"),t=E("use"),a=l("\n            show less"),this.h()},l(e){s=c(e,"svg",{viewBox:!0,class:!0},1);var l=n(s);t=c(l,"use",{"xlink:href":!0},1),n(t).forEach(i),l.forEach(i),a=o(e,"\n            show less"),this.h()},h(){w(t,"xlink:href","/sprite.svg#arrow-circle-up-solid"),h(s,"viewBox","0 0 100 100"),h(s,"class","svelte-2tev9m")},m(e,l){f(e,s,l),d(s,t),f(e,a,l)},d(e){e&&i(s),e&&i(a)}}}function O(e){let s,t,a;return{c(){s=E("svg"),t=E("use"),a=l("\n            show more"),this.h()},l(e){s=c(e,"svg",{viewBox:!0,class:!0},1);var l=n(s);t=c(l,"use",{"xlink:href":!0},1),n(t).forEach(i),l.forEach(i),a=o(e,"\n            show more"),this.h()},h(){w(t,"xlink:href","/sprite.svg#plus-circle-solid"),h(s,"viewBox","0 0 100 100"),h(s,"class","svelte-2tev9m")},m(e,l){f(e,s,l),d(s,t),f(e,a,l)},d(e){e&&i(s),e&&i(a)}}}function K(e){let s,t,m,g,u,D,A,j,P,N,J,L,H,W,z,G,q,F,U,R,Y,O,K,Q,ee,se,te,ae,le,re,ce,ne,oe,ie,ve,he,fe,de,me,ge,ue,pe,Ee,we,xe,be,ye,ke,Ie,De,Ve,Ae,Be,je,Pe,Me,Te,_e,Se,Ce,Ne,Je,Le,He,We,ze,Ge,qe,$e,Fe,Ue,Re,Ze,Xe,Ye,Oe,Ke,Qe,es,ss,ts,as,ls,rs,cs,ns,os,is,vs,hs,fs,ds,ms,gs,us,ps,Es,ws,xs,bs,ys,ks,Is,Ds,Vs,As=V("College of Computing","https://www.cc.gatech.edu/")+"",Bs=V("Georgia Tech","https://gatech.edu/")+"",js=e[7]("Polo Chau")+"",Ps=V("UW–Madison","https://wisc.edu")+"",Ms=e[7]("Anthony Gitter")+"",Ts=e[7]("Michael Gleicher")+"",_s=e[7]("Yu Hen Hu")+"",Ss=e[3],Cs=[];for(let s=0;s<Ss.length;s+=1)Cs[s]=_(T(e,Ss,s));function Ns(e,s){return e[2]<e[0].news.length?C:S}let Js=Ns(e),Ls=Js(e),Hs=e[6],Ws=[];for(let s=0;s<Hs.length;s+=1)Ws[s]=$(M(e,Hs,s));let zs=e[5],Gs=[];for(let s=0;s<zs.length;s+=1)Gs[s]=Z(B(e,zs,s));let qs=e[4]<e[0].project.length&&X(e);return{c(){s=a("meta"),t=a("meta"),m=a("meta"),g=a("meta"),u=a("meta"),D=a("meta"),A=a("meta"),j=a("meta"),P=a("meta"),N=a("meta"),J=a("meta"),L=a("meta"),H=a("meta"),W=a("meta"),z=a("script"),q=a("script"),F=l("window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n\n    gtag('config', 'UA-130177683-1');"),U=r(),R=a("div"),Y=a("div"),O=r(),K=a("div"),Q=a("div"),ee=a("h1"),se=l("Zijie Jay Wang"),te=r(),ae=a("div"),le=a("div"),re=a("p"),ce=l("Hi, I'm Jay. I'm a Machine Learning Ph.D. student in the\n            "),oe=l("\n            at "),ve=l(" adviced by\n            "),fe=l("."),de=r(),me=a("p"),ge=l("My research focuses on making AI more accessible, interpretable, and accountable,\n            by designing and developing novel interactive interfaces for people to easily\n            and enjoyably interact with machine learning systems at scale."),ue=r(),pe=a("p"),Ee=l("I recieved my B.S. from "),xe=l(",\n            where I worked closely with "),ye=l(",\n            "),Ie=l(", and "),Ve=l("."),Ae=r(),Be=a("div"),je=a("img"),Me=r(),Te=a("div"),_e=a("div"),Se=a("a"),Ce=E("svg"),Ne=E("use"),Je=r(),Le=a("a"),He=E("svg"),We=E("use"),ze=r(),Ge=a("a"),qe=E("svg"),$e=E("use"),Fe=r(),Ue=a("a"),Re=E("svg"),Ze=E("use"),Xe=r(),Ye=a("a"),Oe=E("svg"),Ke=E("use"),Qe=r(),es=a("div"),ss=a("div"),ts=a("a"),as=l("jayw@gatech.edu"),ls=r(),rs=a("div"),cs=a("a"),ns=l("CV"),os=r(),is=a("div"),vs=a("div"),hs=l("News"),fs=r(),ds=a("div");for(let e=0;e<Cs.length;e+=1)Cs[e].c();ms=r(),gs=a("div"),Ls.c(),us=r();for(let e=0;e<Ws.length;e+=1)Ws[e].c();ps=r(),Es=a("div"),ws=a("div"),xs=l("Fun Projects"),bs=r();for(let e=0;e<Gs.length;e+=1)Gs[e].c();ys=r(),qs&&qs.c(),ks=r(),Is=a("div"),this.h()},l(e){const a=b('[data-svelte="svelte-15rf9xy"]',document.head);s=c(a,"META",{name:!0,content:!0,class:!0}),t=c(a,"META",{name:!0,content:!0,class:!0}),m=c(a,"META",{property:!0,content:!0,class:!0}),g=c(a,"META",{property:!0,content:!0,class:!0}),u=c(a,"META",{property:!0,content:!0,class:!0}),D=c(a,"META",{property:!0,content:!0,class:!0}),A=c(a,"META",{property:!0,content:!0,class:!0}),j=c(a,"META",{property:!0,content:!0,class:!0}),P=c(a,"META",{property:!0,content:!0,class:!0}),N=c(a,"META",{property:!0,content:!0,class:!0}),J=c(a,"META",{property:!0,content:!0,class:!0}),L=c(a,"META",{property:!0,content:!0,class:!0}),H=c(a,"META",{property:!0,content:!0,class:!0}),W=c(a,"META",{property:!0,content:!0,class:!0}),z=c(a,"SCRIPT",{async:!0,src:!0,class:!0}),n(z).forEach(i),q=c(a,"SCRIPT",{class:!0});var l=n(q);F=o(l,"window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n\n    gtag('config', 'UA-130177683-1');"),l.forEach(i),a.forEach(i),U=v(e),R=c(e,"DIV",{class:!0});var r=n(R);Y=c(r,"DIV",{class:!0}),n(Y).forEach(i),O=v(r),K=c(r,"DIV",{class:!0});var h=n(K);Q=c(h,"DIV",{class:!0});var f=n(Q);ee=c(f,"H1",{class:!0});var d=n(ee);se=o(d,"Zijie Jay Wang"),d.forEach(i),te=v(f),ae=c(f,"DIV",{class:!0});var p=n(ae);le=c(p,"DIV",{class:!0});var E=n(le);re=c(E,"P",{class:!0});var w=n(re);ce=o(w,"Hi, I'm Jay. I'm a Machine Learning Ph.D. student in the\n            "),oe=o(w,"\n            at "),ve=o(w," adviced by\n            "),fe=o(w,"."),w.forEach(i),de=v(E),me=c(E,"P",{class:!0});var x=n(me);ge=o(x,"My research focuses on making AI more accessible, interpretable, and accountable,\n            by designing and developing novel interactive interfaces for people to easily\n            and enjoyably interact with machine learning systems at scale."),x.forEach(i),ue=v(E),pe=c(E,"P",{class:!0});var y=n(pe);Ee=o(y,"I recieved my B.S. from "),xe=o(y,",\n            where I worked closely with "),ye=o(y,",\n            "),Ie=o(y,", and "),Ve=o(y,"."),y.forEach(i),E.forEach(i),Ae=v(p),Be=c(p,"DIV",{class:!0});var k=n(Be);je=c(k,"IMG",{src:!0,alt:!0,class:!0}),Me=v(k),Te=c(k,"DIV",{class:!0,style:!0});var I=n(Te);_e=c(I,"DIV",{class:!0});var V=n(_e);Se=c(V,"A",{class:!0,href:!0,target:!0});var B=n(Se);Ce=c(B,"svg",{viewBox:!0,class:!0},1);var M=n(Ce);Ne=c(M,"use",{"xlink:href":!0},1),n(Ne).forEach(i),M.forEach(i),B.forEach(i),Je=v(V),Le=c(V,"A",{class:!0,href:!0,target:!0});var T=n(Le);He=c(T,"svg",{viewBox:!0,class:!0},1);var _=n(He);We=c(_,"use",{"xlink:href":!0},1),n(We).forEach(i),_.forEach(i),T.forEach(i),ze=v(V),Ge=c(V,"A",{class:!0,href:!0,target:!0});var S=n(Ge);qe=c(S,"svg",{viewBox:!0,class:!0},1);var C=n(qe);$e=c(C,"use",{"xlink:href":!0},1),n($e).forEach(i),C.forEach(i),S.forEach(i),Fe=v(V),Ue=c(V,"A",{class:!0,href:!0,target:!0});var G=n(Ue);Re=c(G,"svg",{viewBox:!0,class:!0},1);var $=n(Re);Ze=c($,"use",{"xlink:href":!0},1),n(Ze).forEach(i),$.forEach(i),G.forEach(i),Xe=v(V),Ye=c(V,"A",{class:!0,href:!0,target:!0});var Z=n(Ye);Oe=c(Z,"svg",{viewBox:!0,class:!0},1);var X=n(Oe);Ke=c(X,"use",{"xlink:href":!0},1),n(Ke).forEach(i),X.forEach(i),Z.forEach(i),V.forEach(i),Qe=v(I),es=c(I,"DIV",{class:!0});var ne=n(es);ss=c(ne,"DIV",{class:!0,style:!0});var ie=n(ss);ts=c(ie,"A",{href:!0,target:!0,class:!0});var he=n(ts);as=o(he,"jayw@gatech.edu"),he.forEach(i),ie.forEach(i),ls=v(ne),rs=c(ne,"DIV",{class:!0});var we=n(rs);cs=c(we,"A",{href:!0,target:!0,rel:!0,class:!0});var be=n(cs);ns=o(be,"CV"),be.forEach(i),we.forEach(i),ne.forEach(i),I.forEach(i),k.forEach(i),p.forEach(i),os=v(f),is=c(f,"DIV",{class:!0});var ke=n(is);vs=c(ke,"DIV",{class:!0});var De=n(vs);hs=o(De,"News"),De.forEach(i),fs=v(ke),ds=c(ke,"DIV",{class:!0});var Pe=n(ds);for(let e=0;e<Cs.length;e+=1)Cs[e].l(Pe);Pe.forEach(i),ms=v(ke),gs=c(ke,"DIV",{class:!0});var Ds=n(gs);Ls.l(Ds),Ds.forEach(i),ke.forEach(i),us=v(f);for(let e=0;e<Ws.length;e+=1)Ws[e].l(f);ps=v(f),Es=c(f,"DIV",{class:!0});var Vs=n(Es);ws=c(Vs,"DIV",{class:!0});var As=n(ws);xs=o(As,"Fun Projects"),As.forEach(i),bs=v(Vs);for(let e=0;e<Gs.length;e+=1)Gs[e].l(Vs);ys=v(Vs),qs&&qs.l(Vs),Vs.forEach(i),f.forEach(i),h.forEach(i),ks=v(r),Is=c(r,"DIV",{class:!0}),n(Is).forEach(i),r.forEach(i),this.h()},h(){document.title="Jay Wang",h(s,"name","title"),h(s,"content","Jay Wang"),h(s,"class","svelte-2tev9m"),h(t,"name","description"),h(t,"content","Zijie Jay Wang is a Ph.D. student in the College of Computing at Georgia Tech researching the intersection of machine learning and data visualization."),h(t,"class","svelte-2tev9m"),h(m,"property","og:type"),h(m,"content","website"),h(m,"class","svelte-2tev9m"),h(g,"property","og:url"),h(g,"content","https://zijie.wang/"),h(g,"class","svelte-2tev9m"),h(u,"property","og:title"),h(u,"content","Jay Wang"),h(u,"class","svelte-2tev9m"),h(D,"property","og:description"),h(D,"content","Zijie Jay Wang is a Ph.D. student in the College of Computing at Georgia Tech researching the intersection of machine learning and data visualization."),h(D,"class","svelte-2tev9m"),h(A,"property","og:image"),h(A,"content","https://zijie.wang/images/teasers/preview.png"),h(A,"class","svelte-2tev9m"),h(j,"property","twitter:card"),h(j,"content","summary_large_image"),h(j,"class","svelte-2tev9m"),h(P,"property","twitter:url"),h(P,"content","https://zijie.wang/"),h(P,"class","svelte-2tev9m"),h(N,"property","twitter:title"),h(N,"content","Jay Wang"),h(N,"class","svelte-2tev9m"),h(J,"property","twitter:description"),h(J,"content","Zijie Jay Wang is a Ph.D. student in the College of Computing at Georgia Tech researching the intersection of machine learning and data visualization."),h(J,"class","svelte-2tev9m"),h(L,"property","twitter:image"),h(L,"content","https://zijie.wang/images/teasers/preview.png"),h(L,"class","svelte-2tev9m"),h(H,"property","twitter:site"),h(H,"content","@jay4w"),h(H,"class","svelte-2tev9m"),h(W,"property","twitter:creator"),h(W,"content","@jay4w"),h(W,"class","svelte-2tev9m"),z.async=!0,z.src!==(G="https://www.googletagmanager.com/gtag/js?id=UA-130177683-1")&&h(z,"src","https://www.googletagmanager.com/gtag/js?id=UA-130177683-1"),h(z,"class","svelte-2tev9m"),h(q,"class","svelte-2tev9m"),h(Y,"class","left-padding svelte-2tev9m"),h(ee,"class","header name svelte-2tev9m"),ne=new I(oe),ie=new I(ve),he=new I(fe),h(re,"class","svelte-2tev9m"),h(me,"class","svelte-2tev9m"),we=new I(xe),be=new I(ye),ke=new I(Ie),De=new I(Ve),h(pe,"class","svelte-2tev9m"),h(le,"class","name-text svelte-2tev9m"),je.src!==(Pe="images/jay.jpg")&&h(je,"src","images/jay.jpg"),h(je,"alt","Jay Wang"),h(je,"class","svelte-2tev9m"),w(Ne,"xlink:href","/sprite.svg#github-alt-brands"),h(Ce,"viewBox","0 0 100 100"),h(Ce,"class","svelte-2tev9m"),h(Se,"class","svg-icon svelte-2tev9m"),h(Se,"href","https://github.com/xiaohk"),h(Se,"target","_self"),w(We,"xlink:href","/sprite.svg#graduation-cap-solid"),h(He,"viewBox","0 0 100 100"),h(He,"class","svelte-2tev9m"),h(Le,"class","svg-icon svelte-2tev9m"),h(Le,"href","https://scholar.google.com/citations?user=eouAYvcAAAAJ&hl=en"),h(Le,"target","_self"),w($e,"xlink:href","/sprite.svg#orcid-brands"),h(qe,"viewBox","0 0 100 100"),h(qe,"class","svelte-2tev9m"),h(Ge,"class","svg-icon svelte-2tev9m"),h(Ge,"href","https://orcid.org/0000-0003-4360-1423"),h(Ge,"target","_self"),w(Ze,"xlink:href","/sprite.svg#twitter-brands"),h(Re,"viewBox","0 0 100 100"),h(Re,"class","svelte-2tev9m"),h(Ue,"class","svg-icon svelte-2tev9m"),h(Ue,"href","https://twitter.com/Jay4w"),h(Ue,"target","_self"),w(Ke,"xlink:href","/sprite.svg#linkedin-brands"),h(Oe,"viewBox","0 0 100 100"),h(Oe,"class","svelte-2tev9m"),h(Ye,"class","svg-icon svelte-2tev9m"),h(Ye,"href","https://www.linkedin.com/in/zijiewang/"),h(Ye,"target","_self"),h(_e,"class","icons svelte-2tev9m"),h(ts,"href","mailto:jayw@gatech.edu"),h(ts,"target","_self"),h(ts,"class","svelte-2tev9m"),h(ss,"class","label-text svelte-2tev9m"),y(ss,"font-family","Roboto Mono"),h(cs,"href","/cv"),h(cs,"target","_self"),h(cs,"rel","prefetch"),h(cs,"class","svelte-2tev9m"),h(rs,"class","label-cv svelte-2tev9m"),h(es,"class","infos svelte-2tev9m"),h(Te,"class","block-tb svelte-2tev9m"),y(Te,"padding","0 5px"),h(Be,"class","name-pic svelte-2tev9m"),h(ae,"class","block-lr svelte-2tev9m"),h(vs,"class","block-name svelte-2tev9m"),h(ds,"class","news-content svelte-2tev9m"),h(gs,"class","add-more-button svg-icon right-margin svelte-2tev9m"),h(is,"class","news-block has-block-name svelte-2tev9m"),h(ws,"class","block-name svelte-2tev9m"),h(Es,"class","project svelte-2tev9m"),h(Q,"class","block-tb svelte-2tev9m"),h(K,"class","content svelte-2tev9m"),h(Is,"class","right-padding svelte-2tev9m"),h(R,"class","page svelte-2tev9m")},m(a,l){d(document.head,s),d(document.head,t),d(document.head,m),d(document.head,g),d(document.head,u),d(document.head,D),d(document.head,A),d(document.head,j),d(document.head,P),d(document.head,N),d(document.head,J),d(document.head,L),d(document.head,H),d(document.head,W),d(document.head,z),d(document.head,q),d(q,F),f(a,U,l),f(a,R,l),d(R,Y),d(R,O),d(R,K),d(K,Q),d(Q,ee),d(ee,se),d(Q,te),d(Q,ae),d(ae,le),d(le,re),d(re,ce),ne.m(As,re),d(re,oe),ie.m(Bs,re),d(re,ve),he.m(js,re),d(re,fe),d(le,de),d(le,me),d(me,ge),d(le,ue),d(le,pe),d(pe,Ee),we.m(Ps,pe),d(pe,xe),be.m(Ms,pe),d(pe,ye),ke.m(Ts,pe),d(pe,Ie),De.m(_s,pe),d(pe,Ve),d(ae,Ae),d(ae,Be),d(Be,je),d(Be,Me),d(Be,Te),d(Te,_e),d(_e,Se),d(Se,Ce),d(Ce,Ne),d(_e,Je),d(_e,Le),d(Le,He),d(He,We),d(_e,ze),d(_e,Ge),d(Ge,qe),d(qe,$e),d(_e,Fe),d(_e,Ue),d(Ue,Re),d(Re,Ze),d(_e,Xe),d(_e,Ye),d(Ye,Oe),d(Oe,Ke),d(Te,Qe),d(Te,es),d(es,ss),d(ss,ts),d(ts,as),d(es,ls),d(es,rs),d(rs,cs),d(cs,ns),d(Q,os),d(Q,is),d(is,vs),d(vs,hs),d(is,fs),d(is,ds);for(let e=0;e<Cs.length;e+=1)Cs[e].m(ds,null);d(is,ms),d(is,gs),Ls.m(gs,null),d(Q,us);for(let e=0;e<Ws.length;e+=1)Ws[e].m(Q,null);d(Q,ps),d(Q,Es),d(Es,ws),d(ws,xs),d(Es,bs);for(let e=0;e<Gs.length;e+=1)Gs[e].m(Es,null);d(Es,ys),qs&&qs.m(Es,null),d(R,ks),d(R,Is),Ds||(Vs=x(gs,"click",e[8]),Ds=!0)},p(e,[s]){if(8&s){let t;for(Ss=e[3],t=0;t<Ss.length;t+=1){const a=T(e,Ss,t);Cs[t]?Cs[t].p(a,s):(Cs[t]=_(a),Cs[t].c(),Cs[t].m(ds,null))}for(;t<Cs.length;t+=1)Cs[t].d(1);Cs.length=Ss.length}if(Js!==(Js=Ns(e))&&(Ls.d(1),(Ls=Js(e))&&(Ls.c(),Ls.m(gs,null))),1218&s){let t;for(Hs=e[6],t=0;t<Hs.length;t+=1){const a=M(e,Hs,t);Ws[t]?Ws[t].p(a,s):(Ws[t]=$(a),Ws[t].c(),Ws[t].m(Q,ps))}for(;t<Ws.length;t+=1)Ws[t].d(1);Ws.length=Hs.length}if(32&s){let t;for(zs=e[5],t=0;t<zs.length;t+=1){const a=B(e,zs,t);Gs[t]?Gs[t].p(a,s):(Gs[t]=Z(a),Gs[t].c(),Gs[t].m(Es,ys))}for(;t<Gs.length;t+=1)Gs[t].d(1);Gs.length=zs.length}e[4]<e[0].project.length?qs?qs.p(e,s):((qs=X(e)).c(),qs.m(Es,null)):qs&&(qs.d(1),qs=null)},i:k,o:k,d(e){i(s),i(t),i(m),i(g),i(u),i(D),i(A),i(j),i(P),i(N),i(J),i(L),i(H),i(W),i(z),i(q),e&&i(U),e&&i(R),p(Cs,e),Ls.d(),p(Ws,e),p(Gs,e),qs&&qs.d(),Ds=!1,Vs()}}}function Q({params:e,query:s}){return this.fetch("data.json").then(e=>e.json()).then(e=>({data:e}))}function ee(e,s,t){let{data:a}=s,l="",r=4,c=a.news.slice(0,r),n=[];a.featured.forEach(e=>{a.publication.forEach(s=>{if(s.id==e.id){let t=Object.assign({},s);t.featureImg=e.featureImg,n.push(t)}})});let o=6,i=a.project.slice(0,o);const v=e=>{t(1,l=l===e?"":e)};return e.$$set=(e=>{"data"in e&&t(0,a=e.data)}),[a,l,r,c,o,i,n,(e,s=!1)=>s&&a.people[e].isMe?V(e,a.people[e].url,700):V(e,a.people[e].url),()=>{r<a.news.length?t(2,r+=3):t(2,r=3),t(3,c=a.news.slice(0,r))},()=>{o<a.project.length?t(4,o+=2):t(4,o=4),t(5,i=a.project.slice(0,o))},v,(e,s)=>s===e,e=>console.log(e),e=>v(e.id)]}export default class extends e{constructor(e){super(),s(this,e,ee,K,t,{data:0})}}export{Q as preload};
