import{S as e,i as s,s as l,e as a,t,a as r,c,b as n,d as o,f as i,g as h,h as f,j as v,k as u,l as p,m as d,n as g,o as m,p as E,x as w,q as x,r as b,u as y,v as k,H as I,w as D}from"./client.d6b1017f.js";import{m as A,g as V}from"./helpers.17d7bc92.js";function B(e,s,l){const a=e.slice();return a[15]=s[l],a[17]=l,a}function j(e,s,l){const a=e.slice();return a[20]=s[l],a}function P(e,s,l){const a=e.slice();return a[25]=s[l],a[27]=l,a}function M(e,s,l){const a=e.slice();return a[18]=s[l],a[17]=l,a}function T(e,s,l){const a=e.slice();return a[28]=s[l],a[17]=l,a}function S(e){let s,l,d,g,m,E,w=e[28].date+"",x=e[28].news+"";return{c(){s=a("div"),l=a("div"),d=t(w),g=r(),m=a("div"),E=r(),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);l=c(a,"DIV",{class:!0});var t=n(l);d=o(t,w),t.forEach(i),g=h(a),m=c(a,"DIV",{class:!0}),n(m).forEach(i),E=h(a),a.forEach(i),this.h()},h(){f(l,"class","news-date svelte-lfu6p0"),f(m,"class","news-text svelte-lfu6p0"),f(s,"class","news svelte-lfu6p0")},m(e,a){v(e,s,a),u(s,l),u(l,d),u(s,g),u(s,m),m.innerHTML=x,u(s,E)},p(e,s){8&s&&w!==(w=e[28].date+"")&&p(d,w),8&s&&x!==(x=e[28].news+"")&&(m.innerHTML=x)},d(e){e&&i(s)}}}function _(e){let s,l,a;return{c(){s=E("svg"),l=E("use"),a=t("\n          show less"),this.h()},l(e){s=c(e,"svg",{viewBox:!0,class:!0},1);var t=n(s);l=c(t,"use",{"xlink:href":!0},1),n(l).forEach(i),t.forEach(i),a=o(e,"\n          show less"),this.h()},h(){w(l,"xlink:href","/sprite.svg#arrow-circle-up-solid"),f(s,"viewBox","0 0 100 100"),f(s,"class","svelte-lfu6p0")},m(e,t){v(e,s,t),u(s,l),v(e,a,t)},d(e){e&&i(s),e&&i(a)}}}function N(e){let s,l,a;return{c(){s=E("svg"),l=E("use"),a=t("\n          show more"),this.h()},l(e){s=c(e,"svg",{viewBox:!0,class:!0},1);var t=n(s);l=c(t,"use",{"xlink:href":!0},1),n(l).forEach(i),t.forEach(i),a=o(e,"\n          show more"),this.h()},h(){w(l,"xlink:href","/sprite.svg#plus-circle-solid"),f(s,"viewBox","0 0 100 100"),f(s,"class","svelte-lfu6p0")},m(e,t){v(e,s,t),u(s,l),v(e,a,t)},d(e){e&&i(s),e&&i(a)}}}function C(e){let s,l,a=e[7](e[25],!0)+"",r=e[27]!==e[18].authors.length-1?", ":"";return{c(){l=t(r),this.h()},l(e){l=o(e,r),this.h()},h(){s=new I(l)},m(e,t){s.m(a,e,t),v(e,l,t)},p:k,d(e){e&&s.d(),e&&i(l)}}}function J(e){let s,l,a,r=e[7](e[25],!0)+"",c=e[18].equals.filter(function(...s){return e[11](e[25],...s)}).length>0?"*":"",n=e[27]!==e[18].authors.length-1?", ":"";return{c(){l=t(c),a=t(n),this.h()},l(e){l=o(e,c),a=o(e,n),this.h()},h(){s=new I(l)},m(e,t){s.m(r,e,t),v(e,l,t),v(e,a,t)},p(s,l){e=s},d(e){e&&s.d(),e&&i(l),e&&i(a)}}}function L(e){let s;let l=function(e,s){return void 0!==e[18].equals?J:C}(e)(e);return{c(){l.c(),s=g()},l(e){l.l(e),s=g()},m(e,a){l.m(e,a),v(e,s,a)},p(e,s){l.p(e,s)},d(e){l.d(e),e&&i(s)}}}function H(e){let s,l,p,d,g,m,x,b,k,I,A=!0===e[18].showStar&&function(e){let s,l,p,d,g,m,E,w,x={ctx:e,current:null,token:null,pending:G,then:z,catch:W,value:23,error:24};return D(g=V(e[18].repo).catch(e[12]),x),{c(){s=a("div"),l=a("div"),p=t("("),d=a("a"),x.block.c(),m=r(),w=t(")"),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);l=c(a,"DIV",{style:!0});var t=n(l);p=o(t,"("),d=c(t,"A",{class:!0,target:!0,style:!0,href:!0});var r=n(d);x.block.l(r),m=h(r),r.forEach(i),w=o(t,")"),t.forEach(i),a.forEach(i),this.h()},h(){f(d,"class","svg-icon svelte-lfu6p0"),f(d,"target","_self"),y(d,"font-weight","500"),y(d,"margin-right","-3px"),f(d,"href",E=`https://github.com/${e[18].repo}/stargazers`),y(l,"display","flex"),f(s,"class","star-container svelte-lfu6p0")},m(e,a){v(e,s,a),u(s,l),u(l,p),u(l,d),x.block.m(d,x.anchor=null),x.mount=(()=>d),x.anchor=m,u(d,m),u(l,w)},p(s,l){{const a=(e=s).slice();a[23]=x.resolved,x.block.p(a,l)}},d(e){e&&i(s),x.block.d(),x.token=null,x=null}}}(e);return{c(){s=a("div"),l=a("a"),p=a("div"),d=E("svg"),g=E("use"),m=r(),x=a("span"),b=t("Code"),I=r(),A&&A.c(),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);l=c(a,"A",{class:!0,href:!0,target:!0});var t=n(l);p=c(t,"DIV",{class:!0});var r=n(p);d=c(r,"svg",{viewBox:!0,class:!0},1);var f=n(d);g=c(f,"use",{"xlink:href":!0},1),n(g).forEach(i),f.forEach(i),r.forEach(i),m=h(t),x=c(t,"SPAN",{class:!0});var v=n(x);b=o(v,"Code"),v.forEach(i),t.forEach(i),I=h(a),A&&A.l(a),a.forEach(i),this.h()},h(){w(g,"xlink:href","/sprite.svg#github-alt-brands"),f(d,"viewBox","0 0 100 100"),f(d,"class","svelte-lfu6p0"),f(p,"class","svg-icon svelte-lfu6p0"),f(x,"class","svelte-lfu6p0"),f(l,"class","icon-container no-right-margin svelte-lfu6p0"),f(l,"href",k=`https://github.com/${e[18].repo}`),f(l,"target","_self"),f(s,"class","icon-container svelte-lfu6p0")},m(e,a){v(e,s,a),u(s,l),u(l,p),u(p,d),u(d,g),u(l,m),u(l,x),u(x,b),u(s,I),A&&A.m(s,null)},p(e,s){!0===e[18].showStar&&A.p(e,s)},d(e){e&&i(s),A&&A.d()}}}function W(e){let s,l,r=e[24].message+"";return{c(){s=a("span"),l=t(r),this.h()},l(e){s=c(e,"SPAN",{style:!0,class:!0});var a=n(s);l=o(a,r),a.forEach(i),this.h()},h(){y(s,"color","red"),f(s,"class","svelte-lfu6p0")},m(e,a){v(e,s,a),u(s,l)},p:k,d(e){e&&i(s)}}}function z(e){let s,l,p,d,g,m=(void 0===e[23]?"":e[23])+"";return{c(){s=E("svg"),l=E("use"),p=r(),d=a("div"),g=t(m),this.h()},l(e){s=c(e,"svg",{viewBox:!0,style:!0,class:!0},1);var a=n(s);l=c(a,"use",{"xlink:href":!0},1),n(l).forEach(i),a.forEach(i),p=h(e),d=c(e,"DIV",{class:!0});var t=n(d);g=o(t,m),t.forEach(i),this.h()},h(){w(l,"xlink:href","/sprite.svg#star-solid"),f(s,"viewBox","0 0 100 100"),y(s,"height","1.3em"),f(s,"class","svelte-lfu6p0"),f(d,"class","award-highlight svelte-lfu6p0")},m(e,a){v(e,s,a),u(s,l),v(e,p,a),v(e,d,a),u(d,g)},p:k,d(e){e&&i(s),e&&i(p),e&&i(d)}}}function G(e){let s;return{c(){s=t("loading")},l(e){s=o(e,"loading")},m(e,l){v(e,s,l)},p:k,d(e){e&&i(s)}}}function q(e){let s,l,t,o,p,d,g,m=A(e[20].name,e[20].url)+"";return{c(){s=a("div"),l=a("div"),t=E("svg"),o=E("use"),p=r(),d=a("div"),g=r(),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);l=c(a,"DIV",{class:!0});var r=n(l);t=c(r,"svg",{viewBox:!0,class:!0},1);var f=n(t);o=c(f,"use",{"xlink:href":!0},1),n(o).forEach(i),f.forEach(i),r.forEach(i),p=h(a),d=c(a,"DIV",{class:!0}),n(d).forEach(i),g=h(a),a.forEach(i),this.h()},h(){w(o,"xlink:href","/sprite.svg#award-solid"),f(t,"viewBox","0 0 100 100"),f(t,"class","svelte-lfu6p0"),f(l,"class","svg-icon svelte-lfu6p0"),f(d,"class","award-highlight svelte-lfu6p0"),f(s,"class","icon-container award svelte-lfu6p0")},m(e,a){v(e,s,a),u(s,l),u(l,t),u(t,o),u(s,p),u(s,d),d.innerHTML=m,u(s,g)},p:k,d(e){e&&i(s)}}}function $(e){let s,l,p,b,I,D,A,V,B,M,T,S,_,N,C,J,W,z,G,$,F,U,R,Z,X,Y,O,K,Q,ee,se,le,ae,te,re,ce,ne,oe,ie=e[18].title+"",he=(void 0===e[18].shortVenue?e[18].venue:e[18].shortVenue)+"",fe=e[18].year+"",ve=0===e[17]&&function(e){let s,l;return{c(){s=a("div"),l=t("Featured Publications"),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);l=o(a,"Featured Publications"),a.forEach(i),this.h()},h(){f(s,"class","block-name svelte-lfu6p0")},m(e,a){v(e,s,a),u(s,l)},d(e){e&&i(s)}}}(),ue=e[18].authors,pe=[];for(let s=0;s<ue.length;s+=1)pe[s]=L(P(e,ue,s));let de=void 0!==e[18].url&&function(e){let s,l,p,d,g,m,x,b;return{c(){s=a("a"),l=a("div"),p=E("svg"),d=E("use"),g=r(),m=a("span"),x=t("Project"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);l=c(a,"DIV",{class:!0});var t=n(l);p=c(t,"svg",{viewBox:!0,class:!0},1);var r=n(p);d=c(r,"use",{"xlink:href":!0},1),n(d).forEach(i),r.forEach(i),t.forEach(i),g=h(a),m=c(a,"SPAN",{class:!0});var f=n(m);x=o(f,"Project"),f.forEach(i),a.forEach(i),this.h()},h(){w(d,"xlink:href","/sprite.svg#link-solid"),f(p,"viewBox","0 0 100 100"),f(p,"class","svelte-lfu6p0"),f(l,"class","svg-icon svelte-lfu6p0"),f(m,"class","svelte-lfu6p0"),f(s,"class","icon-container svelte-lfu6p0"),f(s,"href",b=e[18].url),f(s,"target","_self")},m(e,a){v(e,s,a),u(s,l),u(l,p),u(p,d),u(s,g),u(s,m),u(m,x)},p:k,d(e){e&&i(s)}}}(e),ge=void 0!==e[18].demo&&function(e){let s,l,p,d,g,m,x,b;return{c(){s=a("a"),l=a("div"),p=E("svg"),d=E("use"),g=r(),m=a("span"),x=t("Demo"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);l=c(a,"DIV",{class:!0});var t=n(l);p=c(t,"svg",{viewBox:!0,class:!0},1);var r=n(p);d=c(r,"use",{"xlink:href":!0},1),n(d).forEach(i),r.forEach(i),t.forEach(i),g=h(a),m=c(a,"SPAN",{class:!0});var f=n(m);x=o(f,"Demo"),f.forEach(i),a.forEach(i),this.h()},h(){w(d,"xlink:href","/sprite.svg#play-solid"),f(p,"viewBox","0 0 100 100"),f(p,"class","svelte-lfu6p0"),f(l,"class","svg-icon svelte-lfu6p0"),f(m,"class","svelte-lfu6p0"),f(s,"class","icon-container svelte-lfu6p0"),f(s,"href",b=e[18].demo),f(s,"target","_self")},m(e,a){v(e,s,a),u(s,l),u(l,p),u(p,d),u(s,g),u(s,m),u(m,x)},p:k,d(e){e&&i(s)}}}(e),me=void 0!==e[18].video&&function(e){let s,l,p,d,g,m,x,b;return{c(){s=a("a"),l=a("div"),p=E("svg"),d=E("use"),g=r(),m=a("span"),x=t("Video"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);l=c(a,"DIV",{class:!0});var t=n(l);p=c(t,"svg",{viewBox:!0,class:!0},1);var r=n(p);d=c(r,"use",{"xlink:href":!0},1),n(d).forEach(i),r.forEach(i),t.forEach(i),g=h(a),m=c(a,"SPAN",{class:!0});var f=n(m);x=o(f,"Video"),f.forEach(i),a.forEach(i),this.h()},h(){w(d,"xlink:href","/sprite.svg#film-solid"),f(p,"viewBox","0 0 100 100"),f(p,"class","svelte-lfu6p0"),f(l,"class","svg-icon svelte-lfu6p0"),f(m,"class","svelte-lfu6p0"),f(s,"class","icon-container svelte-lfu6p0"),f(s,"href",b=e[18].video),f(s,"target","_self")},m(e,a){v(e,s,a),u(s,l),u(l,p),u(p,d),u(s,g),u(s,m),u(m,x)},p:k,d(e){e&&i(s)}}}(e),Ee=void 0!==e[18].pdf&&function(e){let s,l,p,d,g,m,x,b;return{c(){s=a("a"),l=a("div"),p=E("svg"),d=E("use"),g=r(),m=a("span"),x=t("PDF"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);l=c(a,"DIV",{class:!0});var t=n(l);p=c(t,"svg",{viewBox:!0,class:!0},1);var r=n(p);d=c(r,"use",{"xlink:href":!0},1),n(d).forEach(i),r.forEach(i),t.forEach(i),g=h(a),m=c(a,"SPAN",{class:!0});var f=n(m);x=o(f,"PDF"),f.forEach(i),a.forEach(i),this.h()},h(){w(d,"xlink:href","/sprite.svg#file-pdf-solid"),f(p,"viewBox","0 0 100 100"),f(p,"class","svelte-lfu6p0"),f(l,"class","svg-icon svelte-lfu6p0"),f(m,"class","svelte-lfu6p0"),f(s,"class","icon-container svelte-lfu6p0"),f(s,"href",b=e[18].pdf),f(s,"target","_self")},m(e,a){v(e,s,a),u(s,l),u(l,p),u(p,d),u(s,g),u(s,m),u(m,x)},p:k,d(e){e&&i(s)}}}(e),we=void 0!==e[18].slides&&function(e){let s,l,p,d,g,m,x,b;return{c(){s=a("a"),l=a("div"),p=E("svg"),d=E("use"),g=r(),m=a("span"),x=t("Slides"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);l=c(a,"DIV",{class:!0});var t=n(l);p=c(t,"svg",{viewBox:!0,class:!0},1);var r=n(p);d=c(r,"use",{"xlink:href":!0},1),n(d).forEach(i),r.forEach(i),t.forEach(i),g=h(a),m=c(a,"SPAN",{class:!0});var f=n(m);x=o(f,"Slides"),f.forEach(i),a.forEach(i),this.h()},h(){w(d,"xlink:href","/sprite.svg#chalkboard-teacher-solid"),f(p,"viewBox","0 0 100 100"),f(p,"class","svelte-lfu6p0"),f(l,"class","svg-icon svelte-lfu6p0"),f(m,"class","svelte-lfu6p0"),f(s,"class","icon-container svelte-lfu6p0"),f(s,"href",b=e[18].slides),f(s,"target","_self")},m(e,a){v(e,s,a),u(s,l),u(l,p),u(p,d),u(s,g),u(s,m),u(m,x)},p:k,d(e){e&&i(s)}}}(e),xe=void 0!==e[18].poster&&function(e){let s,l,p,d,g,m,x,b;return{c(){s=a("a"),l=a("div"),p=E("svg"),d=E("use"),g=r(),m=a("span"),x=t("Poster"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);l=c(a,"DIV",{class:!0});var t=n(l);p=c(t,"svg",{viewBox:!0,class:!0},1);var r=n(p);d=c(r,"use",{"xlink:href":!0},1),n(d).forEach(i),r.forEach(i),t.forEach(i),g=h(a),m=c(a,"SPAN",{class:!0});var f=n(m);x=o(f,"Poster"),f.forEach(i),a.forEach(i),this.h()},h(){w(d,"xlink:href","/sprite.svg#link-solid"),f(p,"viewBox","0 0 100 100"),f(p,"class","svelte-lfu6p0"),f(l,"class","svg-icon svelte-lfu6p0"),f(m,"class","svelte-lfu6p0"),f(s,"class","icon-container svelte-lfu6p0"),f(s,"href",b=e[18].poster),f(s,"target","_self")},m(e,a){v(e,s,a),u(s,l),u(l,p),u(p,d),u(s,g),u(s,m),u(m,x)},p:k,d(e){e&&i(s)}}}(e),be=void 0!==e[18].repo&&H(e),ye=void 0!==e[18].data&&function(e){let s,l,p,d,g,m,x,b;return{c(){s=a("a"),l=a("div"),p=E("svg"),d=E("use"),g=r(),m=a("span"),x=t("Data"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);l=c(a,"DIV",{class:!0});var t=n(l);p=c(t,"svg",{viewBox:!0,class:!0},1);var r=n(p);d=c(r,"use",{"xlink:href":!0},1),n(d).forEach(i),r.forEach(i),t.forEach(i),g=h(a),m=c(a,"SPAN",{class:!0});var f=n(m);x=o(f,"Data"),f.forEach(i),a.forEach(i),this.h()},h(){w(d,"xlink:href","/sprite.svg#database-solid"),f(p,"viewBox","0 0 100 100"),f(p,"class","svelte-lfu6p0"),f(l,"class","svg-icon svelte-lfu6p0"),f(m,"class","svelte-lfu6p0"),f(s,"class","icon-container svelte-lfu6p0"),f(s,"href",b=e[18].data),f(s,"target","_self")},m(e,a){v(e,s,a),u(s,l),u(l,p),u(p,d),u(s,g),u(s,m),u(m,x)},p:k,d(e){e&&i(s)}}}(e),ke=void 0!==e[18].bibtex&&function(e){let s,l,p,d,g,m,b,y,k;function I(...s){return e[13](e[18],...s)}return{c(){s=a("div"),l=a("div"),p=E("svg"),d=E("use"),g=r(),m=a("span"),b=t("BibTeX"),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);l=c(a,"DIV",{class:!0});var t=n(l);p=c(t,"svg",{viewBox:!0,class:!0},1);var r=n(p);d=c(r,"use",{"xlink:href":!0},1),n(d).forEach(i),r.forEach(i),t.forEach(i),g=h(a),m=c(a,"SPAN",{class:!0});var f=n(m);b=o(f,"BibTeX"),f.forEach(i),a.forEach(i),this.h()},h(){w(d,"xlink:href","/sprite.svg#quote-right-solid"),f(p,"viewBox","0 0 100 100"),f(p,"class","svelte-lfu6p0"),f(l,"class","svg-icon svelte-lfu6p0"),f(m,"class","svelte-lfu6p0"),f(s,"class","icon-container bibtex-button svelte-lfu6p0")},m(e,a){v(e,s,a),u(s,l),u(l,p),u(p,d),u(s,g),u(s,m),u(m,b),y||(k=x(s,"click",I),y=!0)},p(s,l){e=s},d(e){e&&i(s),y=!1,k()}}}(e),Ie=void 0!==e[18].equals&&function(e){let s,l;return{c(){s=a("div"),l=t("(*Authors contributed equally)"),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);l=o(a,"(*Authors contributed equally)"),a.forEach(i),this.h()},h(){f(s,"class","icon-container comment svelte-lfu6p0")},m(e,a){v(e,s,a),u(s,l)},d(e){e&&i(s)}}}(),De=void 0!==e[18].awards&&function(e){let s,l=e[18].awards,a=[];for(let s=0;s<l.length;s+=1)a[s]=q(j(e,l,s));return{c(){for(let e=0;e<a.length;e+=1)a[e].c();s=g()},l(e){for(let s=0;s<a.length;s+=1)a[s].l(e);s=g()},m(e,l){for(let s=0;s<a.length;s+=1)a[s].m(e,l);v(e,s,l)},p(e,t){if(64&t){let r;for(l=e[18].awards,r=0;r<l.length;r+=1){const c=j(e,l,r);a[r]?a[r].p(c,t):(a[r]=q(c),a[r].c(),a[r].m(s.parentNode,s))}for(;r<a.length;r+=1)a[r].d(1);a.length=l.length}},d(e){m(a,e),e&&i(s)}}}(e),Ae=void 0!==e[18].bibtex&&function(e){let s,l,r,h=e[18].bibtex+"";return{c(){s=a("div"),l=a("pre"),r=t(h),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);l=c(a,"PRE",{class:!0});var t=n(l);r=o(t,h),t.forEach(i),a.forEach(i),this.h()},h(){f(l,"class","svelte-lfu6p0"),f(s,"class","bibtex svelte-lfu6p0"),d(s,"hidden",e[1]!==e[18].id)},m(e,a){v(e,s,a),u(s,l),u(l,r)},p(e,l){66&l&&d(s,"hidden",e[1]!==e[18].id)},d(e){e&&i(s)}}}(e),Ve=e[17]===e[6].length-1&&function(e){let s,l,r,h,p;return{c(){s=a("a"),l=a("div"),r=E("svg"),h=E("use"),p=t("\n              see all publications"),this.h()},l(e){s=c(e,"A",{href:!0,target:!0,style:!0});var a=n(s);l=c(a,"DIV",{class:!0});var t=n(l);r=c(t,"svg",{viewBox:!0,class:!0},1);var f=n(r);h=c(f,"use",{"xlink:href":!0},1),n(h).forEach(i),f.forEach(i),p=o(t,"\n              see all publications"),t.forEach(i),a.forEach(i),this.h()},h(){w(h,"xlink:href","/sprite.svg#external-link-alt-solid"),f(r,"viewBox","0 0 100 100"),f(r,"class","svelte-lfu6p0"),f(l,"class","show-all-button svg-icon right-margin svelte-lfu6p0"),f(s,"href","/cv#publications"),f(s,"target","_self"),y(s,"padding","0")},m(e,a){v(e,s,a),u(s,l),u(l,r),u(r,h),u(l,p)},d(e){e&&i(s)}}}();return{c(){s=a("div"),ve&&ve.c(),l=r(),p=a("div"),b=a("div"),I=a("a"),D=a("img"),B=r(),M=a("div"),T=a("div"),S=a("a"),_=t(ie),C=r(),J=a("div");for(let e=0;e<pe.length;e+=1)pe[e].c();W=r(),z=a("div"),G=a("a"),$=t(he),F=t(", "),U=t(fe),Z=r(),X=a("div"),de&&de.c(),Y=r(),ge&&ge.c(),O=r(),me&&me.c(),K=r(),Ee&&Ee.c(),Q=r(),we&&we.c(),ee=r(),xe&&xe.c(),se=r(),be&&be.c(),le=r(),ye&&ye.c(),ae=r(),ke&&ke.c(),te=r(),Ie&&Ie.c(),re=r(),De&&De.c(),ce=r(),Ae&&Ae.c(),ne=r(),Ve&&Ve.c(),oe=r(),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);ve&&ve.l(a),l=h(a),p=c(a,"DIV",{class:!0});var t=n(p);b=c(t,"DIV",{class:!0});var r=n(b);I=c(r,"A",{href:!0,target:!0});var f=n(I);D=c(f,"IMG",{alt:!0,src:!0,class:!0}),f.forEach(i),B=h(r),M=c(r,"DIV",{class:!0});var v=n(M);T=c(v,"DIV",{class:!0});var u=n(T);S=c(u,"A",{href:!0,target:!0});var d=n(S);_=o(d,ie),d.forEach(i),u.forEach(i),C=h(v),J=c(v,"DIV",{class:!0});var g=n(J);for(let e=0;e<pe.length;e+=1)pe[e].l(g);g.forEach(i),W=h(v),z=c(v,"DIV",{class:!0});var m=n(z);G=c(m,"A",{href:!0,target:!0});var E=n(G);$=o(E,he),F=o(E,", "),U=o(E,fe),E.forEach(i),m.forEach(i),Z=h(v),X=c(v,"DIV",{class:!0});var w=n(X);de&&de.l(w),Y=h(w),ge&&ge.l(w),O=h(w),me&&me.l(w),K=h(w),Ee&&Ee.l(w),Q=h(w),we&&we.l(w),ee=h(w),xe&&xe.l(w),se=h(w),be&&be.l(w),le=h(w),ye&&ye.l(w),ae=h(w),ke&&ke.l(w),te=h(w),Ie&&Ie.l(w),re=h(w),De&&De.l(w),w.forEach(i),v.forEach(i),r.forEach(i),ce=h(t),Ae&&Ae.l(t),t.forEach(i),ne=h(a),Ve&&Ve.l(a),oe=h(a),a.forEach(i),this.h()},h(){f(D,"alt","Thumbnail"),D.src!==(A=e[18].featureImg)&&f(D,"src",A),f(D,"class","svelte-lfu6p0"),f(I,"href",V=e[18].url),f(I,"target","_self"),f(S,"href",N=e[18].url),f(S,"target","_self"),f(T,"class","pub-title svelte-lfu6p0"),f(J,"class","pub-author svelte-lfu6p0"),f(G,"href",R=e[18].venueURL),f(G,"target","_self"),f(z,"class","pub-venue svelte-lfu6p0"),f(X,"class","pub-icons svelte-lfu6p0"),f(M,"class","pub-content svelte-lfu6p0"),f(b,"class","pub svelte-lfu6p0"),f(p,"class","news-content svelte-lfu6p0"),f(s,"class","pub-block svelte-lfu6p0"),d(s,"has-block-name",0===e[17]),d(s,"pub-block-last",e[17]===e[6].length-1)},m(e,a){v(e,s,a),ve&&ve.m(s,null),u(s,l),u(s,p),u(p,b),u(b,I),u(I,D),u(b,B),u(b,M),u(M,T),u(T,S),u(S,_),u(M,C),u(M,J);for(let e=0;e<pe.length;e+=1)pe[e].m(J,null);u(M,W),u(M,z),u(z,G),u(G,$),u(G,F),u(G,U),u(M,Z),u(M,X),de&&de.m(X,null),u(X,Y),ge&&ge.m(X,null),u(X,O),me&&me.m(X,null),u(X,K),Ee&&Ee.m(X,null),u(X,Q),we&&we.m(X,null),u(X,ee),xe&&xe.m(X,null),u(X,se),be&&be.m(X,null),u(X,le),ye&&ye.m(X,null),u(X,ae),ke&&ke.m(X,null),u(X,te),Ie&&Ie.m(X,null),u(X,re),De&&De.m(X,null),u(p,ce),Ae&&Ae.m(p,null),u(s,ne),Ve&&Ve.m(s,null),u(s,oe)},p(e,l){if(192&l){let s;for(ue=e[18].authors,s=0;s<ue.length;s+=1){const a=P(e,ue,s);pe[s]?pe[s].p(a,l):(pe[s]=L(a),pe[s].c(),pe[s].m(J,null))}for(;s<pe.length;s+=1)pe[s].d(1);pe.length=ue.length}void 0!==e[18].url&&de.p(e,l),void 0!==e[18].demo&&ge.p(e,l),void 0!==e[18].video&&me.p(e,l),void 0!==e[18].pdf&&Ee.p(e,l),void 0!==e[18].slides&&we.p(e,l),void 0!==e[18].poster&&xe.p(e,l),void 0!==e[18].repo&&be.p(e,l),void 0!==e[18].data&&ye.p(e,l),void 0!==e[18].bibtex&&ke.p(e,l),void 0!==e[18].awards&&De.p(e,l),void 0!==e[18].bibtex&&Ae.p(e,l),64&l&&d(s,"pub-block-last",e[17]===e[6].length-1)},d(e){e&&i(s),ve&&ve.d(),m(pe,e),de&&de.d(),ge&&ge.d(),me&&me.d(),Ee&&Ee.d(),we&&we.d(),xe&&xe.d(),be&&be.d(),ye&&ye.d(),ke&&ke.d(),Ie&&Ie.d(),De&&De.d(),Ae&&Ae.d(),Ve&&Ve.d()}}}function F(e){let s,l,p,d,g,m,x,b;return{c(){s=a("a"),l=a("div"),p=E("svg"),d=E("use"),g=r(),m=a("span"),x=t("Code"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);l=c(a,"DIV",{class:!0});var t=n(l);p=c(t,"svg",{viewBox:!0,class:!0},1);var r=n(p);d=c(r,"use",{"xlink:href":!0},1),n(d).forEach(i),r.forEach(i),t.forEach(i),g=h(a),m=c(a,"SPAN",{class:!0});var f=n(m);x=o(f,"Code"),f.forEach(i),a.forEach(i),this.h()},h(){w(d,"xlink:href","/sprite.svg#github-alt-brands"),f(p,"viewBox","0 0 100 100"),f(p,"class","svelte-lfu6p0"),f(l,"class","svg-icon svelte-lfu6p0"),f(m,"class","svelte-lfu6p0"),f(s,"class","icon-container svelte-lfu6p0"),f(s,"href",b=`https://github.com/${e[15].repo}`),f(s,"target","_self")},m(e,a){v(e,s,a),u(s,l),u(l,p),u(p,d),u(s,g),u(s,m),u(m,x)},p(e,l){32&l&&b!==(b=`https://github.com/${e[15].repo}`)&&f(s,"href",b)},d(e){e&&i(s)}}}function U(e){let s,l,p,d,g,m,x,b;return{c(){s=a("a"),l=a("div"),p=E("svg"),d=E("use"),g=r(),m=a("span"),x=t("Demo"),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,target:!0});var a=n(s);l=c(a,"DIV",{class:!0});var t=n(l);p=c(t,"svg",{viewBox:!0,class:!0},1);var r=n(p);d=c(r,"use",{"xlink:href":!0},1),n(d).forEach(i),r.forEach(i),t.forEach(i),g=h(a),m=c(a,"SPAN",{class:!0});var f=n(m);x=o(f,"Demo"),f.forEach(i),a.forEach(i),this.h()},h(){w(d,"xlink:href","/sprite.svg#play-solid"),f(p,"viewBox","0 0 100 100"),f(p,"class","svelte-lfu6p0"),f(l,"class","svg-icon svelte-lfu6p0"),f(m,"class","svelte-lfu6p0"),f(s,"class","icon-container svelte-lfu6p0"),f(s,"href",b=e[15].demo),f(s,"target","_self")},m(e,a){v(e,s,a),u(s,l),u(l,p),u(p,d),u(s,g),u(s,m),u(m,x)},p(e,l){32&l&&b!==(b=e[15].demo)&&f(s,"href",b)},d(e){e&&i(s)}}}function R(e){let s,l,t,o,p,d,g=A(e[15].award.name,e[15].award.url)+"";return{c(){s=a("div"),l=a("div"),t=E("svg"),o=E("use"),p=r(),d=a("div"),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);l=c(a,"DIV",{class:!0});var r=n(l);t=c(r,"svg",{viewBox:!0,class:!0},1);var f=n(t);o=c(f,"use",{"xlink:href":!0},1),n(o).forEach(i),f.forEach(i),r.forEach(i),p=h(a),d=c(a,"DIV",{class:!0}),n(d).forEach(i),a.forEach(i),this.h()},h(){w(o,"xlink:href","/sprite.svg#award-solid"),f(t,"viewBox","0 0 100 100"),f(t,"class","svelte-lfu6p0"),f(l,"class","svg-icon svelte-lfu6p0"),f(d,"class","award-highlight svelte-lfu6p0"),f(s,"class","icon-container award svelte-lfu6p0")},m(e,a){v(e,s,a),u(s,l),u(l,t),u(t,o),u(s,p),u(s,d),d.innerHTML=g},p(e,s){32&s&&g!==(g=A(e[15].award.name,e[15].award.url)+"")&&(d.innerHTML=g)},d(e){e&&i(s)}}}function Z(e){let s,l,d,g,m,E,w,x,b,y,k,I,D,A,V,B,j,P,M,T=e[15].name+"",S=e[15].description+"",_=void 0!==e[15].repo&&F(e),N=void 0!==e[15].demo&&U(e),C=void 0!==e[15].award&&R(e);return{c(){s=a("div"),l=a("a"),d=a("img"),E=r(),w=a("div"),x=a("div"),b=a("span"),y=t(T),k=t(":"),I=r(),D=a("span"),A=t(S),V=r(),B=a("div"),_&&_.c(),j=r(),N&&N.c(),P=r(),C&&C.c(),M=r(),this.h()},l(e){s=c(e,"DIV",{class:!0});var a=n(s);l=c(a,"A",{href:!0});var t=n(l);d=c(t,"IMG",{src:!0,alt:!0,class:!0}),t.forEach(i),E=h(a),w=c(a,"DIV",{class:!0});var r=n(w);x=c(r,"DIV",{class:!0});var f=n(x);b=c(f,"SPAN",{class:!0});var v=n(b);y=o(v,T),k=o(v,":"),v.forEach(i),I=h(f),D=c(f,"SPAN",{class:!0});var u=n(D);A=o(u,S),u.forEach(i),f.forEach(i),V=h(r),B=c(r,"DIV",{class:!0});var p=n(B);_&&_.l(p),j=h(p),N&&N.l(p),P=h(p),C&&C.l(p),p.forEach(i),r.forEach(i),M=h(a),a.forEach(i),this.h()},h(){d.src!==(g=e[15].teaser)&&f(d,"src",g),f(d,"alt","project-teaser"),f(d,"class","svelte-lfu6p0"),f(l,"href",m=`https://github.com/${e[15].repo}`),f(b,"class","project-name svelte-lfu6p0"),f(D,"class","project-detail svelte-lfu6p0"),f(x,"class","project-text svelte-lfu6p0"),f(B,"class","pub-icons svelte-lfu6p0"),f(w,"class","project-description svelte-lfu6p0"),f(s,"class","project-card svelte-lfu6p0")},m(e,a){v(e,s,a),u(s,l),u(l,d),u(s,E),u(s,w),u(w,x),u(x,b),u(b,y),u(b,k),u(x,I),u(x,D),u(D,A),u(w,V),u(w,B),_&&_.m(B,null),u(B,j),N&&N.m(B,null),u(B,P),C&&C.m(B,null),u(s,M)},p(e,s){32&s&&d.src!==(g=e[15].teaser)&&f(d,"src",g),32&s&&m!==(m=`https://github.com/${e[15].repo}`)&&f(l,"href",m),32&s&&T!==(T=e[15].name+"")&&p(y,T),32&s&&S!==(S=e[15].description+"")&&p(A,S),void 0!==e[15].repo?_?_.p(e,s):((_=F(e)).c(),_.m(B,j)):_&&(_.d(1),_=null),void 0!==e[15].demo?N?N.p(e,s):((N=U(e)).c(),N.m(B,P)):N&&(N.d(1),N=null),void 0!==e[15].award?C?C.p(e,s):((C=R(e)).c(),C.m(B,null)):C&&(C.d(1),C=null)},d(e){e&&i(s),_&&_.d(),N&&N.d(),C&&C.d()}}}function X(e){let s,l,t;function r(e,s){return e[4]<e[0].project.length?O:Y}let o=r(e),h=o(e);return{c(){s=a("div"),h.c(),this.h()},l(e){s=c(e,"DIV",{class:!0});var l=n(s);h.l(l),l.forEach(i),this.h()},h(){f(s,"class","add-more-button svg-icon right-margin svelte-lfu6p0")},m(a,r){v(a,s,r),h.m(s,null),l||(t=x(s,"click",e[9]),l=!0)},p(e,l){o!==(o=r(e))&&(h.d(1),(h=o(e))&&(h.c(),h.m(s,null)))},d(e){e&&i(s),h.d(),l=!1,t()}}}function Y(e){let s,l,a;return{c(){s=E("svg"),l=E("use"),a=t("\n            show less"),this.h()},l(e){s=c(e,"svg",{viewBox:!0,class:!0},1);var t=n(s);l=c(t,"use",{"xlink:href":!0},1),n(l).forEach(i),t.forEach(i),a=o(e,"\n            show less"),this.h()},h(){w(l,"xlink:href","/sprite.svg#arrow-circle-up-solid"),f(s,"viewBox","0 0 100 100"),f(s,"class","svelte-lfu6p0")},m(e,t){v(e,s,t),u(s,l),v(e,a,t)},d(e){e&&i(s),e&&i(a)}}}function O(e){let s,l,a;return{c(){s=E("svg"),l=E("use"),a=t("\n            show more"),this.h()},l(e){s=c(e,"svg",{viewBox:!0,class:!0},1);var t=n(s);l=c(t,"use",{"xlink:href":!0},1),n(l).forEach(i),t.forEach(i),a=o(e,"\n            show more"),this.h()},h(){w(l,"xlink:href","/sprite.svg#plus-circle-solid"),f(s,"viewBox","0 0 100 100"),f(s,"class","svelte-lfu6p0")},m(e,t){v(e,s,t),u(s,l),v(e,a,t)},d(e){e&&i(s),e&&i(a)}}}function K(e){let s,l,p,d,g,D,V,j,P,C,J,L,H,W,z,G,q,F,U,R,Y,O,K,Q,ee,se,le,ae,te,re,ce,ne,oe,ie,he,fe,ve,ue,pe,de,ge,me,Ee,we,xe,be,ye,ke,Ie,De,Ae,Ve,Be,je,Pe,Me,Te,Se,_e,Ne,Ce,Je,Le,He,We,ze,Ge,qe,$e,Fe,Ue,Re,Ze,Xe,Ye,Oe,Ke,Qe,es,ss,ls,as,ts,rs,cs,ns,os,is,hs,fs,vs,us,ps,ds,gs,ms,Es,ws,xs,bs,ys,ks,Is,Ds,As,Vs,Bs,js,Ps,Ms,Ts,Ss=A("College of Computing","https://www.cc.gatech.edu/")+"",_s=A("Georgia Tech","https://gatech.edu/")+"",Ns=e[7]("Polo Chau")+"",Cs=A("UW–Madison","https://wisc.edu")+"",Js=e[7]("Anthony Gitter")+"",Ls=e[7]("Michael Gleicher")+"",Hs=e[7]("Yu Hen Hu")+"",Ws=e[3],zs=[];for(let s=0;s<Ws.length;s+=1)zs[s]=S(T(e,Ws,s));function Gs(e,s){return e[2]<e[0].news.length?N:_}let qs=Gs(e),$s=qs(e),Fs=e[6],Us=[];for(let s=0;s<Fs.length;s+=1)Us[s]=$(M(e,Fs,s));let Rs=e[5],Zs=[];for(let s=0;s<Rs.length;s+=1)Zs[s]=Z(B(e,Rs,s));let Xs=e[4]<e[0].project.length&&X(e);return{c(){s=a("meta"),l=a("meta"),p=a("meta"),d=a("meta"),g=a("meta"),D=a("meta"),V=a("meta"),j=a("meta"),P=a("meta"),C=a("meta"),J=a("meta"),L=a("meta"),H=a("meta"),W=a("meta"),z=a("script"),q=a("script"),F=t("window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n\n    gtag('config', 'UA-130177683-1');"),U=r(),R=a("div"),Y=a("div"),O=r(),K=a("div"),Q=a("div"),ee=a("h1"),se=t("Zijie Jay Wang"),le=r(),ae=a("div"),te=a("div"),re=a("p"),ce=t("Hi, I'm Jay. I'm a Machine Learning Ph.D. student in the\n            "),oe=t("\n            at "),he=t(" adviced by\n            "),ve=t("."),ue=r(),pe=a("p"),de=t("My research focuses on making AI more\n            accessible, interpretable, and accountable,\n            by designing and developing novel\n            "),ge=a("span"),me=t("interactive interfaces"),Ee=t(" for people to easily\n            and enjoyably interact with\n            "),we=a("span"),xe=t("machine learning systems"),be=t(" at scale."),ye=r(),ke=a("p"),Ie=t("I recieved my B.S. from "),Ae=t(",\n            where I worked closely with "),Be=t(",\n            "),Pe=t(", and "),Te=t("."),Se=r(),_e=a("div"),Ne=a("img"),Je=r(),Le=a("div"),He=a("div"),We=a("a"),ze=E("svg"),Ge=E("use"),qe=r(),$e=a("a"),Fe=E("svg"),Ue=E("use"),Re=r(),Ze=a("a"),Xe=E("svg"),Ye=E("use"),Oe=r(),Ke=a("a"),Qe=E("svg"),es=E("use"),ss=r(),ls=a("a"),as=E("svg"),ts=E("use"),rs=r(),cs=a("div"),ns=a("div"),os=a("a"),is=t("jayw@gatech.edu"),hs=r(),fs=a("div"),vs=a("a"),us=t("CV"),ps=r(),ds=a("div"),gs=a("div"),ms=t("News"),Es=r(),ws=a("div");for(let e=0;e<zs.length;e+=1)zs[e].c();xs=r(),bs=a("div"),$s.c(),ys=r();for(let e=0;e<Us.length;e+=1)Us[e].c();ks=r(),Is=a("div"),Ds=a("div"),As=t("Fun Projects"),Vs=r();for(let e=0;e<Zs.length;e+=1)Zs[e].c();Bs=r(),Xs&&Xs.c(),js=r(),Ps=a("div"),this.h()},l(e){const a=b('[data-svelte="svelte-15rf9xy"]',document.head);s=c(a,"META",{name:!0,content:!0,class:!0}),l=c(a,"META",{name:!0,content:!0,class:!0}),p=c(a,"META",{property:!0,content:!0,class:!0}),d=c(a,"META",{property:!0,content:!0,class:!0}),g=c(a,"META",{property:!0,content:!0,class:!0}),D=c(a,"META",{property:!0,content:!0,class:!0}),V=c(a,"META",{property:!0,content:!0,class:!0}),j=c(a,"META",{property:!0,content:!0,class:!0}),P=c(a,"META",{property:!0,content:!0,class:!0}),C=c(a,"META",{property:!0,content:!0,class:!0}),J=c(a,"META",{property:!0,content:!0,class:!0}),L=c(a,"META",{property:!0,content:!0,class:!0}),H=c(a,"META",{property:!0,content:!0,class:!0}),W=c(a,"META",{property:!0,content:!0,class:!0}),z=c(a,"SCRIPT",{async:!0,src:!0,class:!0}),n(z).forEach(i),q=c(a,"SCRIPT",{class:!0});var t=n(q);F=o(t,"window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n\n    gtag('config', 'UA-130177683-1');"),t.forEach(i),a.forEach(i),U=h(e),R=c(e,"DIV",{class:!0});var r=n(R);Y=c(r,"DIV",{class:!0}),n(Y).forEach(i),O=h(r),K=c(r,"DIV",{class:!0});var f=n(K);Q=c(f,"DIV",{class:!0});var v=n(Q);ee=c(v,"H1",{class:!0});var u=n(ee);se=o(u,"Zijie Jay Wang"),u.forEach(i),le=h(v),ae=c(v,"DIV",{class:!0});var m=n(ae);te=c(m,"DIV",{class:!0});var E=n(te);re=c(E,"P",{class:!0});var w=n(re);ce=o(w,"Hi, I'm Jay. I'm a Machine Learning Ph.D. student in the\n            "),oe=o(w,"\n            at "),he=o(w," adviced by\n            "),ve=o(w,"."),w.forEach(i),ue=h(E),pe=c(E,"P",{class:!0});var x=n(pe);de=o(x,"My research focuses on making AI more\n            accessible, interpretable, and accountable,\n            by designing and developing novel\n            "),ge=c(x,"SPAN",{class:!0});var y=n(ge);me=o(y,"interactive interfaces"),y.forEach(i),Ee=o(x," for people to easily\n            and enjoyably interact with\n            "),we=c(x,"SPAN",{class:!0});var k=n(we);xe=o(k,"machine learning systems"),k.forEach(i),be=o(x," at scale."),x.forEach(i),ye=h(E),ke=c(E,"P",{class:!0});var I=n(ke);Ie=o(I,"I recieved my B.S. from "),Ae=o(I,",\n            where I worked closely with "),Be=o(I,",\n            "),Pe=o(I,", and "),Te=o(I,"."),I.forEach(i),E.forEach(i),Se=h(m),_e=c(m,"DIV",{class:!0});var A=n(_e);Ne=c(A,"IMG",{src:!0,alt:!0,class:!0}),Je=h(A),Le=c(A,"DIV",{class:!0,style:!0});var B=n(Le);He=c(B,"DIV",{class:!0});var M=n(He);We=c(M,"A",{class:!0,href:!0,target:!0});var T=n(We);ze=c(T,"svg",{viewBox:!0,class:!0},1);var S=n(ze);Ge=c(S,"use",{"xlink:href":!0},1),n(Ge).forEach(i),S.forEach(i),T.forEach(i),qe=h(M),$e=c(M,"A",{class:!0,href:!0,target:!0});var _=n($e);Fe=c(_,"svg",{viewBox:!0,class:!0},1);var N=n(Fe);Ue=c(N,"use",{"xlink:href":!0},1),n(Ue).forEach(i),N.forEach(i),_.forEach(i),Re=h(M),Ze=c(M,"A",{class:!0,href:!0,target:!0});var G=n(Ze);Xe=c(G,"svg",{viewBox:!0,class:!0},1);var $=n(Xe);Ye=c($,"use",{"xlink:href":!0},1),n(Ye).forEach(i),$.forEach(i),G.forEach(i),Oe=h(M),Ke=c(M,"A",{class:!0,href:!0,target:!0});var Z=n(Ke);Qe=c(Z,"svg",{viewBox:!0,class:!0},1);var X=n(Qe);es=c(X,"use",{"xlink:href":!0},1),n(es).forEach(i),X.forEach(i),Z.forEach(i),ss=h(M),ls=c(M,"A",{class:!0,href:!0,target:!0});var ne=n(ls);as=c(ne,"svg",{viewBox:!0,class:!0},1);var ie=n(as);ts=c(ie,"use",{"xlink:href":!0},1),n(ts).forEach(i),ie.forEach(i),ne.forEach(i),M.forEach(i),rs=h(B),cs=c(B,"DIV",{class:!0});var fe=n(cs);ns=c(fe,"DIV",{class:!0,style:!0});var De=n(ns);os=c(De,"A",{href:!0,target:!0,class:!0});var Ve=n(os);is=o(Ve,"jayw@gatech.edu"),Ve.forEach(i),De.forEach(i),hs=h(fe),fs=c(fe,"DIV",{class:!0});var je=n(fs);vs=c(je,"A",{href:!0,target:!0,rel:!0,class:!0});var Me=n(vs);us=o(Me,"CV"),Me.forEach(i),je.forEach(i),fe.forEach(i),B.forEach(i),A.forEach(i),m.forEach(i),ps=h(v),ds=c(v,"DIV",{class:!0});var Ce=n(ds);gs=c(Ce,"DIV",{class:!0});var Ms=n(gs);ms=o(Ms,"News"),Ms.forEach(i),Es=h(Ce),ws=c(Ce,"DIV",{class:!0});var Ts=n(ws);for(let e=0;e<zs.length;e+=1)zs[e].l(Ts);Ts.forEach(i),xs=h(Ce),bs=c(Ce,"DIV",{class:!0});var Ss=n(bs);$s.l(Ss),Ss.forEach(i),Ce.forEach(i),ys=h(v);for(let e=0;e<Us.length;e+=1)Us[e].l(v);ks=h(v),Is=c(v,"DIV",{class:!0});var _s=n(Is);Ds=c(_s,"DIV",{class:!0});var Ns=n(Ds);As=o(Ns,"Fun Projects"),Ns.forEach(i),Vs=h(_s);for(let e=0;e<Zs.length;e+=1)Zs[e].l(_s);Bs=h(_s),Xs&&Xs.l(_s),_s.forEach(i),v.forEach(i),f.forEach(i),js=h(r),Ps=c(r,"DIV",{class:!0}),n(Ps).forEach(i),r.forEach(i),this.h()},h(){document.title="Jay Wang",f(s,"name","title"),f(s,"content","Jay Wang"),f(s,"class","svelte-lfu6p0"),f(l,"name","description"),f(l,"content","Zijie Jay Wang is a Ph.D. student in the College of Computing at Georgia Tech researching the intersection of machine learning and data visualization."),f(l,"class","svelte-lfu6p0"),f(p,"property","og:type"),f(p,"content","website"),f(p,"class","svelte-lfu6p0"),f(d,"property","og:url"),f(d,"content","https://zijie.wang/"),f(d,"class","svelte-lfu6p0"),f(g,"property","og:title"),f(g,"content","Jay Wang"),f(g,"class","svelte-lfu6p0"),f(D,"property","og:description"),f(D,"content","Zijie Jay Wang is a Ph.D. student in the College of Computing at Georgia Tech researching the intersection of machine learning and data visualization."),f(D,"class","svelte-lfu6p0"),f(V,"property","og:image"),f(V,"content","https://zijie.wang/images/teasers/preview.png"),f(V,"class","svelte-lfu6p0"),f(j,"property","twitter:card"),f(j,"content","summary_large_image"),f(j,"class","svelte-lfu6p0"),f(P,"property","twitter:url"),f(P,"content","https://zijie.wang/"),f(P,"class","svelte-lfu6p0"),f(C,"property","twitter:title"),f(C,"content","Jay Wang"),f(C,"class","svelte-lfu6p0"),f(J,"property","twitter:description"),f(J,"content","Zijie Jay Wang is a Ph.D. student in the College of Computing at Georgia Tech researching the intersection of machine learning and data visualization."),f(J,"class","svelte-lfu6p0"),f(L,"property","twitter:image"),f(L,"content","https://zijie.wang/images/teasers/preview.png"),f(L,"class","svelte-lfu6p0"),f(H,"property","twitter:site"),f(H,"content","@jay4w"),f(H,"class","svelte-lfu6p0"),f(W,"property","twitter:creator"),f(W,"content","@jay4w"),f(W,"class","svelte-lfu6p0"),z.async=!0,z.src!==(G="https://www.googletagmanager.com/gtag/js?id=UA-130177683-1")&&f(z,"src","https://www.googletagmanager.com/gtag/js?id=UA-130177683-1"),f(z,"class","svelte-lfu6p0"),f(q,"class","svelte-lfu6p0"),f(Y,"class","left-padding svelte-lfu6p0"),f(ee,"class","header name svelte-lfu6p0"),ne=new I(oe),ie=new I(he),fe=new I(ve),f(re,"class","svelte-lfu6p0"),f(ge,"class","strong svelte-lfu6p0"),f(we,"class","strong svelte-lfu6p0"),f(pe,"class","svelte-lfu6p0"),De=new I(Ae),Ve=new I(Be),je=new I(Pe),Me=new I(Te),f(ke,"class","svelte-lfu6p0"),f(te,"class","name-text svelte-lfu6p0"),Ne.src!==(Ce="images/jay.jpg")&&f(Ne,"src","images/jay.jpg"),f(Ne,"alt","Jay Wang"),f(Ne,"class","svelte-lfu6p0"),w(Ge,"xlink:href","/sprite.svg#github-alt-brands"),f(ze,"viewBox","0 0 100 100"),f(ze,"class","svelte-lfu6p0"),f(We,"class","svg-icon svelte-lfu6p0"),f(We,"href","https://github.com/xiaohk"),f(We,"target","_self"),w(Ue,"xlink:href","/sprite.svg#graduation-cap-solid"),f(Fe,"viewBox","0 0 100 100"),f(Fe,"class","svelte-lfu6p0"),f($e,"class","svg-icon svelte-lfu6p0"),f($e,"href","https://scholar.google.com/citations?user=eouAYvcAAAAJ&hl=en"),f($e,"target","_self"),w(Ye,"xlink:href","/sprite.svg#orcid-brands"),f(Xe,"viewBox","0 0 100 100"),f(Xe,"class","svelte-lfu6p0"),f(Ze,"class","svg-icon svelte-lfu6p0"),f(Ze,"href","https://orcid.org/0000-0003-4360-1423"),f(Ze,"target","_self"),w(es,"xlink:href","/sprite.svg#twitter-brands"),f(Qe,"viewBox","0 0 100 100"),f(Qe,"class","svelte-lfu6p0"),f(Ke,"class","svg-icon svelte-lfu6p0"),f(Ke,"href","https://twitter.com/Jay4w"),f(Ke,"target","_self"),w(ts,"xlink:href","/sprite.svg#linkedin-brands"),f(as,"viewBox","0 0 100 100"),f(as,"class","svelte-lfu6p0"),f(ls,"class","svg-icon svelte-lfu6p0"),f(ls,"href","https://www.linkedin.com/in/zijiewang/"),f(ls,"target","_self"),f(He,"class","icons svelte-lfu6p0"),f(os,"href","mailto:jayw@gatech.edu"),f(os,"target","_self"),f(os,"class","svelte-lfu6p0"),f(ns,"class","label-text svelte-lfu6p0"),y(ns,"font-family","Roboto Mono"),f(vs,"href","/cv"),f(vs,"target","_self"),f(vs,"rel","prefetch"),f(vs,"class","svelte-lfu6p0"),f(fs,"class","label-cv svelte-lfu6p0"),f(cs,"class","infos svelte-lfu6p0"),f(Le,"class","block-tb svelte-lfu6p0"),y(Le,"padding","0 5px"),f(_e,"class","name-pic svelte-lfu6p0"),f(ae,"class","block-lr svelte-lfu6p0"),f(gs,"class","block-name svelte-lfu6p0"),f(ws,"class","news-content svelte-lfu6p0"),f(bs,"class","add-more-button svg-icon right-margin svelte-lfu6p0"),f(ds,"class","news-block has-block-name svelte-lfu6p0"),f(Ds,"class","block-name svelte-lfu6p0"),f(Is,"class","project svelte-lfu6p0"),f(Q,"class","block-tb svelte-lfu6p0"),f(K,"class","content svelte-lfu6p0"),f(Ps,"class","right-padding svelte-lfu6p0"),f(R,"class","page svelte-lfu6p0")},m(a,t){u(document.head,s),u(document.head,l),u(document.head,p),u(document.head,d),u(document.head,g),u(document.head,D),u(document.head,V),u(document.head,j),u(document.head,P),u(document.head,C),u(document.head,J),u(document.head,L),u(document.head,H),u(document.head,W),u(document.head,z),u(document.head,q),u(q,F),v(a,U,t),v(a,R,t),u(R,Y),u(R,O),u(R,K),u(K,Q),u(Q,ee),u(ee,se),u(Q,le),u(Q,ae),u(ae,te),u(te,re),u(re,ce),ne.m(Ss,re),u(re,oe),ie.m(_s,re),u(re,he),fe.m(Ns,re),u(re,ve),u(te,ue),u(te,pe),u(pe,de),u(pe,ge),u(ge,me),u(pe,Ee),u(pe,we),u(we,xe),u(pe,be),u(te,ye),u(te,ke),u(ke,Ie),De.m(Cs,ke),u(ke,Ae),Ve.m(Js,ke),u(ke,Be),je.m(Ls,ke),u(ke,Pe),Me.m(Hs,ke),u(ke,Te),u(ae,Se),u(ae,_e),u(_e,Ne),u(_e,Je),u(_e,Le),u(Le,He),u(He,We),u(We,ze),u(ze,Ge),u(He,qe),u(He,$e),u($e,Fe),u(Fe,Ue),u(He,Re),u(He,Ze),u(Ze,Xe),u(Xe,Ye),u(He,Oe),u(He,Ke),u(Ke,Qe),u(Qe,es),u(He,ss),u(He,ls),u(ls,as),u(as,ts),u(Le,rs),u(Le,cs),u(cs,ns),u(ns,os),u(os,is),u(cs,hs),u(cs,fs),u(fs,vs),u(vs,us),u(Q,ps),u(Q,ds),u(ds,gs),u(gs,ms),u(ds,Es),u(ds,ws);for(let e=0;e<zs.length;e+=1)zs[e].m(ws,null);u(ds,xs),u(ds,bs),$s.m(bs,null),u(Q,ys);for(let e=0;e<Us.length;e+=1)Us[e].m(Q,null);u(Q,ks),u(Q,Is),u(Is,Ds),u(Ds,As),u(Is,Vs);for(let e=0;e<Zs.length;e+=1)Zs[e].m(Is,null);u(Is,Bs),Xs&&Xs.m(Is,null),u(R,js),u(R,Ps),Ms||(Ts=x(bs,"click",e[8]),Ms=!0)},p(e,[s]){if(8&s){let l;for(Ws=e[3],l=0;l<Ws.length;l+=1){const a=T(e,Ws,l);zs[l]?zs[l].p(a,s):(zs[l]=S(a),zs[l].c(),zs[l].m(ws,null))}for(;l<zs.length;l+=1)zs[l].d(1);zs.length=Ws.length}if(qs!==(qs=Gs(e))&&($s.d(1),($s=qs(e))&&($s.c(),$s.m(bs,null))),1218&s){let l;for(Fs=e[6],l=0;l<Fs.length;l+=1){const a=M(e,Fs,l);Us[l]?Us[l].p(a,s):(Us[l]=$(a),Us[l].c(),Us[l].m(Q,ks))}for(;l<Us.length;l+=1)Us[l].d(1);Us.length=Fs.length}if(32&s){let l;for(Rs=e[5],l=0;l<Rs.length;l+=1){const a=B(e,Rs,l);Zs[l]?Zs[l].p(a,s):(Zs[l]=Z(a),Zs[l].c(),Zs[l].m(Is,Bs))}for(;l<Zs.length;l+=1)Zs[l].d(1);Zs.length=Rs.length}e[4]<e[0].project.length?Xs?Xs.p(e,s):((Xs=X(e)).c(),Xs.m(Is,null)):Xs&&(Xs.d(1),Xs=null)},i:k,o:k,d(e){i(s),i(l),i(p),i(d),i(g),i(D),i(V),i(j),i(P),i(C),i(J),i(L),i(H),i(W),i(z),i(q),e&&i(U),e&&i(R),m(zs,e),$s.d(),m(Us,e),m(Zs,e),Xs&&Xs.d(),Ms=!1,Ts()}}}function Q({params:e,query:s}){return this.fetch("data.json").then(e=>e.json()).then(e=>({data:e}))}function ee(e,s,l){let{data:a}=s,t="",r=4,c=a.news.slice(0,r),n=[];a.featured.forEach(e=>{a.publication.forEach(s=>{if(s.id==e.id){let l=Object.assign({},s);l.featureImg=e.featureImg,n.push(l)}})});let o=6,i=a.project.slice(0,o);const h=e=>{l(1,t=t===e?"":e)};return e.$$set=(e=>{"data"in e&&l(0,a=e.data)}),[a,t,r,c,o,i,n,(e,s=!1)=>s&&a.people[e].isMe?A(e,a.people[e].url,700):A(e,a.people[e].url),()=>{r<a.news.length?l(2,r+=3):l(2,r=3),l(3,c=a.news.slice(0,r))},()=>{o<a.project.length?l(4,o+=2):l(4,o=4),l(5,i=a.project.slice(0,o))},h,(e,s)=>s===e,e=>console.log(e),e=>h(e.id)]}export default class extends e{constructor(e){super(),s(this,e,ee,K,l,{data:0})}}export{Q as preload};
