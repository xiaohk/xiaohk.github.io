import{b as t,d as n,e,f as a,i as c,s,g as r,S as o,h as i,k as l,l as u,n as v,p as f,q as h,r as d,E as p,_ as g,a as m,j as E,t as w,o as y,m as b,u as D,G as x,I,J as A,K as V,L as k,M as S,y as M,z as P,A as j,B as q,D as B,N as R,O as T,P as _,x as L,Q as $}from"./client.42b35d8b.js";import{g as N}from"./helpers.7b49c202.js";function z(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var c,s=n(t);if(a){var r=n(this).constructor;c=Reflect.construct(s,arguments,r)}else c=s.apply(this,arguments);return e(this,c)}}function C(t){var n,e,a,c;return{c:function(){n=i("div"),e=i("div"),a=i("iframe"),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var c=u(n);e=l(c,"DIV",{class:!0});var s=u(e);a=l(s,"IFRAME",{width:!0,height:!0,title:!0,src:!0,frameborder:!0,allowfullscreen:!0,class:!0}),u(a).forEach(v),s.forEach(v),c.forEach(v),this.h()},h:function(){f(a,"width","560"),f(a,"height","315"),f(a,"title","Video"),a.src!==(c="https://www.youtube.com/embed/"+t[0])&&f(a,"src",c),f(a,"frameborder","0"),a.allowFullscreen=!0,f(a,"class","svelte-1qjupgm"),f(e,"class","video-container svelte-1qjupgm"),f(n,"class","video svelte-1qjupgm")},m:function(t,c){h(t,n,c),d(n,e),d(e,a)},p:p,i:p,o:p,d:function(t){t&&v(n)}}}function J(t,n,e){var a=n.url,c=function(t){var n=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return!(!n||11!=n[7].length)&&n[7]}(a);return t.$$set=function(t){"url"in t&&e(1,a=t.url)},[c,a]}var U=function(n){t(i,o);var e=z(i);function i(t){var n;return a(this,i),n=e.call(this),c(r(n),t,J,C,s,{url:1}),n}return i}();function W(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var c,s=n(t);if(a){var r=n(this).constructor;c=Reflect.construct(s,arguments,r)}else c=s.apply(this,arguments);return e(this,c)}}function H(t,n,e){var a=t.slice();return a[8]=n[e],a[10]=e,a}function F(t,n,e){var a=t.slice();return a[8]=n[e],a[12]=e,a}function G(t){var n,e,a=t[8]+"";return{c:function(){n=i("div"),e=w(a),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var c=u(n);e=b(c,a),c.forEach(v),this.h()},h:function(){f(n,"class","author-name svelte-1a8t81v")},m:function(t,a){h(t,n,a),d(n,e)},p:function(t,n){1&n&&a!==(a=t[8]+"")&&D(e,a)},d:function(t){t&&v(n)}}}function O(t){var n,e,a,c=t[8]+"",s=t[0].equals.filter(r).length>0?"*":"";function r(){for(var n,e=arguments.length,a=new Array(e),c=0;c<e;c++)a[c]=arguments[c];return(n=t)[2].apply(n,[t[8]].concat(a))}return{c:function(){n=i("div"),e=w(c),a=w(s),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var r=u(n);e=b(r,c),a=b(r,s),r.forEach(v),this.h()},h:function(){f(n,"class","author-name svelte-1a8t81v")},m:function(t,c){h(t,n,c),d(n,e),d(n,a)},p:function(n,o){t=n,1&o&&c!==(c=t[8]+"")&&D(e,c),1&o&&s!==(s=t[0].equals.filter(r).length>0?"*":"")&&D(a,s)},d:function(t){t&&v(n)}}}function K(t){var n,e,a,c,s,r,o,p,g,m,x,I=t[12]===t[0].authors.length-1?"":",";function A(t,n){return void 0!==t[0].equals?O:G}var V=A(t),k=V(t);return{c:function(){n=i("a"),e=i("div"),a=i("img"),r=E(),k.c(),o=E(),p=i("div"),g=w(I),m=E(),this.h()},l:function(t){n=l(t,"A",{href:!0,target:!0,class:!0});var c=u(n);e=l(c,"DIV",{class:!0});var s=u(e);a=l(s,"IMG",{alt:!0,src:!0,class:!0}),r=y(s),k.l(s),o=y(s),p=l(s,"DIV",{class:!0});var i=u(p);g=b(i,I),i.forEach(v),s.forEach(v),m=y(c),c.forEach(v),this.h()},h:function(){f(a,"alt",c=t[8]+" picture"),a.src!==(s="images/people/"+t[8]+".jpg")&&f(a,"src",s),f(a,"class","svelte-1a8t81v"),f(p,"class","author-comma"),f(e,"class","author svelte-1a8t81v"),f(n,"href",x=t[1][t[8]].url),f(n,"target","_self"),f(n,"class","svelte-1a8t81v")},m:function(t,c){h(t,n,c),d(n,e),d(e,a),d(e,r),k.m(e,null),d(e,o),d(e,p),d(p,g),d(n,m)},p:function(t,r){1&r&&c!==(c=t[8]+" picture")&&f(a,"alt",c),1&r&&a.src!==(s="images/people/"+t[8]+".jpg")&&f(a,"src",s),V===(V=A(t))&&k?k.p(t,r):(k.d(1),(k=V(t))&&(k.c(),k.m(e,o))),1&r&&I!==(I=t[12]===t[0].authors.length-1?"":",")&&D(g,I),3&r&&x!==(x=t[1][t[8]].url)&&f(n,"href",x)},d:function(t){t&&v(n),k.d()}}}function Q(t){var n,e;return{c:function(){n=i("div"),e=w("( * Authors contributed equally )"),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var a=u(n);e=b(a,"( * Authors contributed equally )"),a.forEach(v),this.h()},h:function(){f(n,"class","icon-container italic svelte-1a8t81v")},m:function(t,a){h(t,n,a),d(n,e)},d:function(t){t&&v(n)}}}function X(t){var n,e,a,c,s,r;return s=new U({props:{url:t[0].video}}),{c:function(){n=i("div"),e=i("div"),a=w("Demo Video"),c=E(),x(s.$$.fragment),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var r=u(n);e=l(r,"DIV",{class:!0});var o=u(e);a=b(o,"Demo Video"),o.forEach(v),c=y(r),I(s.$$.fragment,r),r.forEach(v),this.h()},h:function(){f(e,"class","block-name svelte-1a8t81v"),f(n,"class","block video-block svelte-1a8t81v")},m:function(t,o){h(t,n,o),d(n,e),d(e,a),d(n,c),A(s,n,null),r=!0},p:function(t,n){var e={};1&n&&(e.url=t[0].video),s.$set(e)},i:function(t){r||(V(s.$$.fragment,t),r=!0)},o:function(t){k(s.$$.fragment,t),r=!1},d:function(t){t&&v(n),S(s)}}}function Y(t){var n,e,a=t[8]+"";return{c:function(){n=i("div"),e=w(a),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var c=u(n);e=b(c,a),c.forEach(v),this.h()},h:function(){f(n,"class","author-name citation svelte-1a8t81v")},m:function(t,a){h(t,n,a),d(n,e)},p:function(t,n){1&n&&a!==(a=t[8]+"")&&D(e,a)},d:function(t){t&&v(n)}}}function Z(t){var n,e,a,c=t[8]+"",s=t[0].equals.filter(r).length>0?"*":"";function r(){for(var n,e=arguments.length,a=new Array(e),c=0;c<e;c++)a[c]=arguments[c];return(n=t)[3].apply(n,[t[8]].concat(a))}return{c:function(){n=i("div"),e=w(c),a=w(s),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var r=u(n);e=b(r,c),a=b(r,s),r.forEach(v),this.h()},h:function(){f(n,"class","author-name citation svelte-1a8t81v")},m:function(t,c){h(t,n,c),d(n,e),d(n,a)},p:function(n,o){t=n,1&o&&c!==(c=t[8]+"")&&D(e,c),1&o&&s!==(s=t[0].equals.filter(r).length>0?"*":"")&&D(a,s)},d:function(t){t&&v(n)}}}function tt(t){var n,e,a,c,s,r,o,p=t[10]===t[0].authors.length-1?"":",";function g(t,n){return void 0!==t[0].equals?Z:Y}var m=g(t),x=m(t);return{c:function(){n=i("a"),e=i("div"),x.c(),a=E(),c=i("div"),s=w(p),r=E(),this.h()},l:function(t){n=l(t,"A",{href:!0,target:!0,class:!0});var o=u(n);e=l(o,"DIV",{class:!0});var i=u(e);x.l(i),a=y(i),c=l(i,"DIV",{class:!0});var f=u(c);s=b(f,p),f.forEach(v),i.forEach(v),r=y(o),o.forEach(v),this.h()},h:function(){f(c,"class","author-comma"),f(e,"class","author citation svelte-1a8t81v"),f(n,"href",o=t[1][t[8]].url),f(n,"target","_self"),f(n,"class","svelte-1a8t81v")},m:function(t,o){h(t,n,o),d(n,e),x.m(e,null),d(e,a),d(e,c),d(c,s),d(n,r)},p:function(t,c){m===(m=g(t))&&x?x.p(t,c):(x.d(1),(x=m(t))&&(x.c(),x.m(e,a))),1&c&&p!==(p=t[10]===t[0].authors.length-1?"":",")&&D(s,p),3&c&&o!==(o=t[1][t[8]].url)&&f(n,"href",o)},d:function(t){t&&v(n),x.d()}}}function nt(t){var n,e,a,c,s,r,o,p;return{c:function(){n=i("a"),e=i("div"),a=M("svg"),c=M("use"),s=E(),r=i("span"),o=w("Demo"),this.h()},l:function(t){n=l(t,"A",{class:!0,href:!0,target:!0});var i=u(n);e=l(i,"DIV",{class:!0});var f=u(e);a=l(f,"svg",{viewBox:!0,class:!0},1);var h=u(a);c=l(h,"use",{"xlink:href":!0},1),u(c).forEach(v),h.forEach(v),f.forEach(v),s=y(i),r=l(i,"SPAN",{class:!0});var d=u(r);o=b(d,"Demo"),d.forEach(v),i.forEach(v),this.h()},h:function(){P(c,"xlink:href","/sprite.svg#rocket-sharp"),f(a,"viewBox","0 0 100 100"),f(a,"class","svelte-1a8t81v"),f(e,"class","svg-icon svelte-1a8t81v"),f(r,"class","svelte-1a8t81v"),f(n,"class","icon-container svelte-1a8t81v"),f(n,"href",p=t[0].demo),f(n,"target","_self")},m:function(t,i){h(t,n,i),d(n,e),d(e,a),d(a,c),d(n,s),d(n,r),d(r,o)},p:function(t,e){1&e&&p!==(p=t[0].demo)&&f(n,"href",p)},d:function(t){t&&v(n)}}}function et(t){var n,e,a,c,s,r,o,p;return{c:function(){n=i("a"),e=i("div"),a=M("svg"),c=M("use"),s=E(),r=i("span"),o=w("Video"),this.h()},l:function(t){n=l(t,"A",{class:!0,href:!0,target:!0});var i=u(n);e=l(i,"DIV",{class:!0});var f=u(e);a=l(f,"svg",{viewBox:!0,class:!0},1);var h=u(a);c=l(h,"use",{"xlink:href":!0},1),u(c).forEach(v),h.forEach(v),f.forEach(v),s=y(i),r=l(i,"SPAN",{class:!0});var d=u(r);o=b(d,"Video"),d.forEach(v),i.forEach(v),this.h()},h:function(){P(c,"xlink:href","/sprite.svg#play-solid"),f(a,"viewBox","0 0 100 100"),f(a,"class","svelte-1a8t81v"),f(e,"class","svg-icon svelte-1a8t81v"),f(r,"class","svelte-1a8t81v"),f(n,"class","icon-container svelte-1a8t81v"),f(n,"href",p=t[0].video),f(n,"target","_self")},m:function(t,i){h(t,n,i),d(n,e),d(e,a),d(a,c),d(n,s),d(n,r),d(r,o)},p:function(t,e){1&e&&p!==(p=t[0].video)&&f(n,"href",p)},d:function(t){t&&v(n)}}}function at(t){var n,e,a,c,s,r,o,p;return{c:function(){n=i("a"),e=i("div"),a=M("svg"),c=M("use"),s=E(),r=i("span"),o=w("PDF"),this.h()},l:function(t){n=l(t,"A",{class:!0,href:!0,target:!0});var i=u(n);e=l(i,"DIV",{class:!0});var f=u(e);a=l(f,"svg",{viewBox:!0,class:!0},1);var h=u(a);c=l(h,"use",{"xlink:href":!0},1),u(c).forEach(v),h.forEach(v),f.forEach(v),s=y(i),r=l(i,"SPAN",{class:!0});var d=u(r);o=b(d,"PDF"),d.forEach(v),i.forEach(v),this.h()},h:function(){P(c,"xlink:href","/sprite.svg#file-pdf-solid"),f(a,"viewBox","0 0 100 100"),f(a,"class","svelte-1a8t81v"),f(e,"class","svg-icon svelte-1a8t81v"),f(r,"class","svelte-1a8t81v"),f(n,"class","icon-container svelte-1a8t81v"),f(n,"href",p=t[0].pdf),f(n,"target","_self")},m:function(t,i){h(t,n,i),d(n,e),d(e,a),d(a,c),d(n,s),d(n,r),d(r,o)},p:function(t,e){1&e&&p!==(p=t[0].pdf)&&f(n,"href",p)},d:function(t){t&&v(n)}}}function ct(t){var n,e,a,c,s,r,o,p;return{c:function(){n=i("a"),e=i("div"),a=M("svg"),c=M("use"),s=E(),r=i("span"),o=w("Slides"),this.h()},l:function(t){n=l(t,"A",{class:!0,href:!0,target:!0});var i=u(n);e=l(i,"DIV",{class:!0});var f=u(e);a=l(f,"svg",{viewBox:!0,class:!0},1);var h=u(a);c=l(h,"use",{"xlink:href":!0},1),u(c).forEach(v),h.forEach(v),f.forEach(v),s=y(i),r=l(i,"SPAN",{class:!0});var d=u(r);o=b(d,"Slides"),d.forEach(v),i.forEach(v),this.h()},h:function(){P(c,"xlink:href","/sprite.svg#slides"),f(a,"viewBox","0 0 100 100"),f(a,"class","svelte-1a8t81v"),f(e,"class","svg-icon svelte-1a8t81v"),f(r,"class","svelte-1a8t81v"),f(n,"class","icon-container svelte-1a8t81v"),f(n,"href",p=t[0].slides),f(n,"target","_self")},m:function(t,i){h(t,n,i),d(n,e),d(e,a),d(a,c),d(n,s),d(n,r),d(r,o)},p:function(t,e){1&e&&p!==(p=t[0].slides)&&f(n,"href",p)},d:function(t){t&&v(n)}}}function st(t){var n,e,a,c,s,r,o,p;return{c:function(){n=i("a"),e=i("div"),a=M("svg"),c=M("use"),s=E(),r=i("span"),o=w("Poster"),this.h()},l:function(t){n=l(t,"A",{class:!0,href:!0,target:!0});var i=u(n);e=l(i,"DIV",{class:!0});var f=u(e);a=l(f,"svg",{viewBox:!0,class:!0},1);var h=u(a);c=l(h,"use",{"xlink:href":!0},1),u(c).forEach(v),h.forEach(v),f.forEach(v),s=y(i),r=l(i,"SPAN",{class:!0});var d=u(r);o=b(d,"Poster"),d.forEach(v),i.forEach(v),this.h()},h:function(){P(c,"xlink:href","/sprite.svg#poster"),f(a,"viewBox","0 0 100 100"),f(a,"class","svelte-1a8t81v"),f(e,"class","svg-icon svelte-1a8t81v"),f(r,"class","svelte-1a8t81v"),f(n,"class","icon-container svelte-1a8t81v"),f(n,"href",p=t[0].poster),f(n,"target","_self")},m:function(t,i){h(t,n,i),d(n,e),d(e,a),d(a,c),d(n,s),d(n,r),d(r,o)},p:function(t,e){1&e&&p!==(p=t[0].poster)&&f(n,"href",p)},d:function(t){t&&v(n)}}}function rt(t){var n,e,a,c,s,r,o,p,g,m,D=!0===t[0].showStar&&ot(t);return{c:function(){n=i("div"),e=i("a"),a=i("div"),c=M("svg"),s=M("use"),r=E(),o=i("span"),p=w("Code"),m=E(),D&&D.c(),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var i=u(n);e=l(i,"A",{class:!0,href:!0,target:!0});var f=u(e);a=l(f,"DIV",{class:!0});var h=u(a);c=l(h,"svg",{viewBox:!0,class:!0},1);var d=u(c);s=l(d,"use",{"xlink:href":!0},1),u(s).forEach(v),d.forEach(v),h.forEach(v),r=y(f),o=l(f,"SPAN",{class:!0});var g=u(o);p=b(g,"Code"),g.forEach(v),f.forEach(v),m=y(i),D&&D.l(i),i.forEach(v),this.h()},h:function(){P(s,"xlink:href","/sprite.svg#github-alt-brands"),f(c,"viewBox","0 0 100 100"),f(c,"class","svelte-1a8t81v"),f(a,"class","svg-icon svelte-1a8t81v"),f(o,"class","svelte-1a8t81v"),f(e,"class","icon-container no-right-margin svelte-1a8t81v"),f(e,"href",g="https://github.com/".concat(t[0].repo)),f(e,"target","_self"),f(n,"class","icon-container svelte-1a8t81v")},m:function(t,i){h(t,n,i),d(n,e),d(e,a),d(a,c),d(c,s),d(e,r),d(e,o),d(o,p),d(n,m),D&&D.m(n,null)},p:function(t,a){1&a&&g!==(g="https://github.com/".concat(t[0].repo))&&f(e,"href",g),!0===t[0].showStar?D?D.p(t,a):((D=ot(t)).c(),D.m(n,null)):D&&(D.d(1),D=null)},d:function(t){t&&v(n),D&&D.d()}}}function ot(t){var n,e,a,c,s,r,o,p,g={ctx:t,current:null,token:null,pending:ut,then:lt,catch:it,value:6,error:7};return q(s=N(t[0].repo).catch(t[4]),g),{c:function(){n=i("div"),e=i("div"),a=w("("),c=i("a"),g.block.c(),r=E(),p=w(")"),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var s=u(n);e=l(s,"DIV",{style:!0});var o=u(e);a=b(o,"("),c=l(o,"A",{class:!0,target:!0,style:!0,href:!0});var i=u(c);g.block.l(i),r=y(i),i.forEach(v),p=b(o,")"),o.forEach(v),s.forEach(v),this.h()},h:function(){f(c,"class","svg-icon svelte-1a8t81v"),f(c,"target","_self"),j(c,"font-weight","500"),j(c,"margin-right","-3px"),f(c,"href",o="https://github.com/".concat(t[0].repo,"/stargazers")),j(e,"display","flex"),f(n,"class","star-container svelte-1a8t81v")},m:function(t,s){h(t,n,s),d(n,e),d(e,a),d(e,c),g.block.m(c,g.anchor=null),g.mount=function(){return c},g.anchor=r,d(c,r),d(e,p)},p:function(n,e){if(t=n,g.ctx=t,1&e&&s!==(s=N(t[0].repo).catch(t[4]))&&q(s,g));else{var a=t.slice();a[6]=g.resolved,g.block.p(a,e)}1&e&&o!==(o="https://github.com/".concat(t[0].repo,"/stargazers"))&&f(c,"href",o)},d:function(t){t&&v(n),g.block.d(),g.token=null,g=null}}}function it(t){var n,e,a=t[7].message+"";return{c:function(){n=i("span"),e=w(a),this.h()},l:function(t){n=l(t,"SPAN",{style:!0,class:!0});var c=u(n);e=b(c,a),c.forEach(v),this.h()},h:function(){j(n,"color","red"),f(n,"class","svelte-1a8t81v")},m:function(t,a){h(t,n,a),d(n,e)},p:function(t,n){1&n&&a!==(a=t[7].message+"")&&D(e,a)},d:function(t){t&&v(n)}}}function lt(t){var n,e,a,c,s,r=(void 0===t[6]?"":t[6])+"";return{c:function(){n=M("svg"),e=M("use"),a=E(),c=i("div"),s=w(r),this.h()},l:function(t){n=l(t,"svg",{viewBox:!0,style:!0,class:!0},1);var o=u(n);e=l(o,"use",{"xlink:href":!0},1),u(e).forEach(v),o.forEach(v),a=y(t),c=l(t,"DIV",{class:!0});var i=u(c);s=b(i,r),i.forEach(v),this.h()},h:function(){P(e,"xlink:href","/sprite.svg#star-solid"),f(n,"viewBox","0 0 100 100"),j(n,"height","1.3em"),f(n,"class","svelte-1a8t81v"),f(c,"class","award-highlight svelte-1a8t81v")},m:function(t,r){h(t,n,r),d(n,e),h(t,a,r),h(t,c,r),d(c,s)},p:function(t,n){1&n&&r!==(r=(void 0===t[6]?"":t[6])+"")&&D(s,r)},d:function(t){t&&v(n),t&&v(a),t&&v(c)}}}function ut(t){var n;return{c:function(){n=w("loading")},l:function(t){n=b(t,"loading")},m:function(t,e){h(t,n,e)},p:p,d:function(t){t&&v(n)}}}function vt(t){var n,e,a,c,s,r,o,p;return{c:function(){n=i("a"),e=i("div"),a=M("svg"),c=M("use"),s=E(),r=i("span"),o=w("Data"),this.h()},l:function(t){n=l(t,"A",{class:!0,href:!0,target:!0});var i=u(n);e=l(i,"DIV",{class:!0});var f=u(e);a=l(f,"svg",{viewBox:!0,class:!0},1);var h=u(a);c=l(h,"use",{"xlink:href":!0},1),u(c).forEach(v),h.forEach(v),f.forEach(v),s=y(i),r=l(i,"SPAN",{class:!0});var d=u(r);o=b(d,"Data"),d.forEach(v),i.forEach(v),this.h()},h:function(){P(c,"xlink:href","/sprite.svg#data"),f(a,"viewBox","0 0 100 100"),f(a,"class","svelte-1a8t81v"),f(e,"class","svg-icon svelte-1a8t81v"),f(r,"class","svelte-1a8t81v"),f(n,"class","icon-container svelte-1a8t81v"),f(n,"href",p=t[0].data),f(n,"target","_self")},m:function(t,i){h(t,n,i),d(n,e),d(e,a),d(a,c),d(n,s),d(n,r),d(r,o)},p:function(t,e){1&e&&p!==(p=t[0].data)&&f(n,"href",p)},d:function(t){t&&v(n)}}}function ft(t){var n,e;return{c:function(){n=i("div"),e=w("(*Authors contributed equally)"),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var a=u(n);e=b(a,"(*Authors contributed equally)"),a.forEach(v),this.h()},h:function(){f(n,"class","icon-container comment svelte-1a8t81v")},m:function(t,a){h(t,n,a),d(n,e)},d:function(t){t&&v(n)}}}function ht(t){var n,e,a,c=t[0].bibtex+"";return{c:function(){n=i("div"),e=i("pre"),a=w(c),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var s=u(n);e=l(s,"PRE",{class:!0});var r=u(e);a=b(r,c),r.forEach(v),s.forEach(v),this.h()},h:function(){f(e,"class","svelte-1a8t81v"),f(n,"class","bibtex svelte-1a8t81v")},m:function(t,c){h(t,n,c),d(n,e),d(e,a)},p:function(t,n){1&n&&c!==(c=t[0].bibtex+"")&&D(a,c)},d:function(t){t&&v(n)}}}function dt(t){var n,e,a,c,s,r,o,p,g,m,x,I,A,S,M,P,j,q,N,z,C,J,U,W,G,O,Y,Z,ot,it,lt,ut,dt,pt,gt,mt,Et,wt,yt,bt,Dt,xt,It,At,Vt,kt,St,Mt,Pt,jt,qt,Bt,Rt,Tt,_t,Lt,$t,Nt,zt,Ct,Jt,Ut,Wt,Ht,Ft,Gt,Ot,Kt,Qt,Xt,Yt,Zt,tn,nn,en,an,cn,sn,rn,on,ln,un,vn,fn,hn,dn,pn,gn,mn,En,wn,yn,bn,Dn=t[0].title+"",xn=t[0].venue+"",In=(void 0!==t[0].venueShort?"(".concat(t[0].venueShort,")"):"")+"",An=t[0].year+"",Vn=t[0].crownCaption+"",kn=t[0].abstract+"",Sn=t[0].title+"",Mn=t[0].venue+"",Pn=(void 0!==t[0].venueShort?"(".concat(t[0].venueShort,")"):"")+"",jn=t[0].year+"";document.title=n=t[0].title+" — Jay Wang";for(var qn=t[0].authors,Bn=[],Rn=0;Rn<qn.length;Rn+=1)Bn[Rn]=K(F(t,qn,Rn));for(var Tn=void 0!==t[0].equals&&Q(),_n=void 0!==t[0].video&&X(t),Ln=t[0].authors,$n=[],Nn=0;Nn<Ln.length;Nn+=1)$n[Nn]=tt(H(t,Ln,Nn));var zn=void 0!==t[0].demo&&nt(t),Cn=void 0!==t[0].video&&et(t),Jn=void 0!==t[0].pdf&&at(t),Un=void 0!==t[0].slides&&ct(t),Wn=void 0!==t[0].poster&&st(t),Hn=void 0!==t[0].repo&&rt(t),Fn=void 0!==t[0].data&&vt(t),Gn=void 0!==t[0].equals&&ft(),On=void 0!==t[0].bibtex&&ht(t);return{c:function(){e=i("meta"),c=i("meta"),r=i("meta"),o=i("meta"),p=i("meta"),m=i("meta"),I=i("meta"),S=i("meta"),M=i("meta"),P=i("meta"),q=i("meta"),z=i("meta"),J=i("meta"),U=i("meta"),W=i("script"),G=i("script"),O=w("window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n\n    gtag('config', 'UA-130177683-1');"),Y=E(),Z=i("div"),ot=i("div"),it=E(),lt=i("div"),ut=i("h1"),dt=w(Dn),pt=E(),gt=i("div");for(var t=0;t<Bn.length;t+=1)Bn[t].c();mt=E(),Tn&&Tn.c(),Et=E(),wt=i("div"),yt=i("a"),bt=w(xn),Dt=E(),xt=w(In),It=w(", "),At=w(An),kt=E(),St=i("figure"),Mt=i("img"),Bt=E(),Rt=i("figcaption"),Tt=w(Vn),_t=E(),Lt=i("div"),_n&&_n.c(),$t=E(),Nt=i("div"),zt=i("div"),Ct=w("Abstract"),Jt=E(),Ut=i("div"),Wt=E(),Ht=i("div"),Ft=i("div"),Gt=w("Citation"),Ot=E(),Kt=i("div"),Qt=w(Sn),Xt=E(),Yt=i("div");for(var n=0;n<$n.length;n+=1)$n[n].c();Zt=E(),tn=i("div"),nn=i("a"),en=w(Mn),an=E(),cn=w(Pn),sn=w(", "),rn=w(jn),ln=E(),un=i("div"),zn&&zn.c(),vn=E(),Cn&&Cn.c(),fn=E(),Jn&&Jn.c(),hn=E(),Un&&Un.c(),dn=E(),Wn&&Wn.c(),pn=E(),Hn&&Hn.c(),gn=E(),Fn&&Fn.c(),mn=E(),Gn&&Gn.c(),En=E(),On&&On.c(),wn=E(),yn=i("div"),this.h()},l:function(t){var n=B('[data-svelte="svelte-q3bpha"]',document.head);e=l(n,"META",{name:!0,content:!0}),c=l(n,"META",{name:!0,content:!0}),r=l(n,"META",{property:!0,content:!0}),o=l(n,"META",{property:!0,content:!0}),p=l(n,"META",{property:!0,content:!0}),m=l(n,"META",{property:!0,content:!0}),I=l(n,"META",{property:!0,content:!0}),S=l(n,"META",{property:!0,content:!0}),M=l(n,"META",{property:!0,content:!0}),P=l(n,"META",{property:!0,content:!0}),q=l(n,"META",{property:!0,content:!0}),z=l(n,"META",{property:!0,content:!0}),J=l(n,"META",{property:!0,content:!0}),U=l(n,"META",{property:!0,content:!0}),W=l(n,"SCRIPT",{async:!0,src:!0}),u(W).forEach(v),G=l(n,"SCRIPT",{});var a=u(G);O=b(a,"window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n\n    gtag('config', 'UA-130177683-1');"),a.forEach(v),n.forEach(v),Y=y(t),Z=l(t,"DIV",{class:!0});var s=u(Z);ot=l(s,"DIV",{class:!0}),u(ot).forEach(v),it=y(s),lt=l(s,"DIV",{class:!0});var i=u(lt);ut=l(i,"H1",{class:!0});var f=u(ut);dt=b(f,Dn),f.forEach(v),pt=y(i),gt=l(i,"DIV",{class:!0});for(var h=u(gt),d=0;d<Bn.length;d+=1)Bn[d].l(h);h.forEach(v),mt=y(i),Tn&&Tn.l(i),Et=y(i),wt=l(i,"DIV",{class:!0});var g=u(wt);yt=l(g,"A",{href:!0,target:!0,class:!0});var E=u(yt);bt=b(E,xn),Dt=y(E),xt=b(E,In),It=b(E,", "),At=b(E,An),E.forEach(v),g.forEach(v),kt=y(i),St=l(i,"FIGURE",{class:!0});var w=u(St);Mt=l(w,"IMG",{class:!0,style:!0,alt:!0,src:!0}),Bt=y(w),Rt=l(w,"FIGCAPTION",{class:!0});var D=u(Rt);Tt=b(D,Vn),D.forEach(v),w.forEach(v),_t=y(i),Lt=l(i,"DIV",{class:!0});var x=u(Lt);_n&&_n.l(x),$t=y(x),Nt=l(x,"DIV",{class:!0});var A=u(Nt);zt=l(A,"DIV",{class:!0});var V=u(zt);Ct=b(V,"Abstract"),V.forEach(v),Jt=y(A),Ut=l(A,"DIV",{class:!0}),u(Ut).forEach(v),A.forEach(v),Wt=y(x),Ht=l(x,"DIV",{class:!0});var k=u(Ht);Ft=l(k,"DIV",{class:!0});var j=u(Ft);Gt=b(j,"Citation"),j.forEach(v),Ot=y(k),Kt=l(k,"DIV",{class:!0});var R=u(Kt);Qt=b(R,Sn),R.forEach(v),Xt=y(k),Yt=l(k,"DIV",{class:!0});for(var T=u(Yt),_=0;_<$n.length;_+=1)$n[_].l(T);T.forEach(v),Zt=y(k),tn=l(k,"DIV",{class:!0});var L=u(tn);nn=l(L,"A",{href:!0,target:!0,class:!0});var $=u(nn);en=b($,Mn),an=y($),cn=b($,Pn),sn=b($,", "),rn=b($,jn),$.forEach(v),L.forEach(v),ln=y(k),un=l(k,"DIV",{class:!0});var N=u(un);zn&&zn.l(N),vn=y(N),Cn&&Cn.l(N),fn=y(N),Jn&&Jn.l(N),hn=y(N),Un&&Un.l(N),dn=y(N),Wn&&Wn.l(N),pn=y(N),Hn&&Hn.l(N),gn=y(N),Fn&&Fn.l(N),mn=y(N),Gn&&Gn.l(N),N.forEach(v),En=y(k),On&&On.l(k),k.forEach(v),x.forEach(v),i.forEach(v),wn=y(s),yn=l(s,"DIV",{class:!0}),u(yn).forEach(v),s.forEach(v),this.h()},h:function(){f(e,"name","title"),f(e,"content",a=t[0].title+" — Jay Wang"),f(c,"name","description"),f(c,"content",s=t[0].abstract.substring(0,150)+"..."),f(r,"property","og:type"),f(r,"content","website"),f(o,"property","og:url"),f(o,"content","https://zijie.wang"),f(p,"property","og:title"),f(p,"content",g=t[0].title+" — Jay Wang"),f(m,"property","og:description"),f(m,"content",x=t[0].abstract.substring(0,150)+"..."),f(I,"property","og:image"),f(I,"content",A="https://zijie.wang/images/crowns/"+t[0].id+".png"),f(S,"property","twitter:card"),f(S,"content","summary_large_image"),f(M,"property","twitter:url"),f(M,"content","https://zijie.wang"),f(P,"property","twitter:title"),f(P,"content",j=t[0].title+" — Jay Wang"),f(q,"property","twitter:description"),f(q,"content",N=t[0].abstract.substring(0,150)+"..."),f(z,"property","twitter:image"),f(z,"content",C="https://zijie.wang/images/crowns/"+t[0].id+".png"),f(J,"property","twitter:site"),f(J,"content","@jay4w"),f(U,"property","twitter:creator"),f(U,"content","@jay4w"),W.async=!0,W.src!=="https://www.googletagmanager.com/gtag/js?id=UA-130177683-1"&&f(W,"src","https://www.googletagmanager.com/gtag/js?id=UA-130177683-1"),f(ot,"class","left-padding"),f(ut,"class","svelte-1a8t81v"),f(gt,"class","author-list svelte-1a8t81v"),f(yt,"href",Vt=t[0].venueURL),f(yt,"target","_self"),f(yt,"class","svelte-1a8t81v"),f(wt,"class","venue svelte-1a8t81v"),f(Mt,"class",Pt=R(t[0].crownShowBorder?"show-border":"")+" svelte-1a8t81v"),f(Mt,"style",jt=void 0!==t[0].crownMaxHeight?"max-height: ".concat(t[0].crownMaxHeight,";"):""),f(Mt,"alt","crown jewel figure"),Mt.src!==(qt="images/crowns/"+t[0].id+".png")&&f(Mt,"src",qt),f(Rt,"class","crown-caption svelte-1a8t81v"),f(St,"class","crown-img svelte-1a8t81v"),f(zt,"class","block-name svelte-1a8t81v"),f(Ut,"class","block-abstract-text"),f(Nt,"class","block svelte-1a8t81v"),f(Ft,"class","block-name svelte-1a8t81v"),f(Kt,"class","pub-title svelte-1a8t81v"),f(Yt,"class","pub-author svelte-1a8t81v"),f(nn,"href",on=t[0].venueURL),f(nn,"target","_self"),f(nn,"class","svelte-1a8t81v"),f(tn,"class","pub-venue svelte-1a8t81v"),f(un,"class","pub-icons svelte-1a8t81v"),f(Ht,"class","block citation-block svelte-1a8t81v"),f(Lt,"class","block-container"),f(lt,"class","papers-content svelte-1a8t81v"),f(yn,"class","right-padding"),f(Z,"class","page svelte-1a8t81v")},m:function(t,n){d(document.head,e),d(document.head,c),d(document.head,r),d(document.head,o),d(document.head,p),d(document.head,m),d(document.head,I),d(document.head,S),d(document.head,M),d(document.head,P),d(document.head,q),d(document.head,z),d(document.head,J),d(document.head,U),d(document.head,W),d(document.head,G),d(G,O),h(t,Y,n),h(t,Z,n),d(Z,ot),d(Z,it),d(Z,lt),d(lt,ut),d(ut,dt),d(lt,pt),d(lt,gt);for(var a=0;a<Bn.length;a+=1)Bn[a].m(gt,null);d(lt,mt),Tn&&Tn.m(lt,null),d(lt,Et),d(lt,wt),d(wt,yt),d(yt,bt),d(yt,Dt),d(yt,xt),d(yt,It),d(yt,At),d(lt,kt),d(lt,St),d(St,Mt),d(St,Bt),d(St,Rt),d(Rt,Tt),d(lt,_t),d(lt,Lt),_n&&_n.m(Lt,null),d(Lt,$t),d(Lt,Nt),d(Nt,zt),d(zt,Ct),d(Nt,Jt),d(Nt,Ut),Ut.innerHTML=kn,d(Lt,Wt),d(Lt,Ht),d(Ht,Ft),d(Ft,Gt),d(Ht,Ot),d(Ht,Kt),d(Kt,Qt),d(Ht,Xt),d(Ht,Yt);for(var s=0;s<$n.length;s+=1)$n[s].m(Yt,null);d(Ht,Zt),d(Ht,tn),d(tn,nn),d(nn,en),d(nn,an),d(nn,cn),d(nn,sn),d(nn,rn),d(Ht,ln),d(Ht,un),zn&&zn.m(un,null),d(un,vn),Cn&&Cn.m(un,null),d(un,fn),Jn&&Jn.m(un,null),d(un,hn),Un&&Un.m(un,null),d(un,dn),Wn&&Wn.m(un,null),d(un,pn),Hn&&Hn.m(un,null),d(un,gn),Fn&&Fn.m(un,null),d(un,mn),Gn&&Gn.m(un,null),d(Ht,En),On&&On.m(Ht,null),d(Z,wn),d(Z,yn),bn=!0},p:function(t,r){var o=T(r,1)[0];if((!bn||1&o)&&n!==(n=t[0].title+" — Jay Wang")&&(document.title=n),(!bn||1&o&&a!==(a=t[0].title+" — Jay Wang"))&&f(e,"content",a),(!bn||1&o&&s!==(s=t[0].abstract.substring(0,150)+"..."))&&f(c,"content",s),(!bn||1&o&&g!==(g=t[0].title+" — Jay Wang"))&&f(p,"content",g),(!bn||1&o&&x!==(x=t[0].abstract.substring(0,150)+"..."))&&f(m,"content",x),(!bn||1&o&&A!==(A="https://zijie.wang/images/crowns/"+t[0].id+".png"))&&f(I,"content",A),(!bn||1&o&&j!==(j=t[0].title+" — Jay Wang"))&&f(P,"content",j),(!bn||1&o&&N!==(N=t[0].abstract.substring(0,150)+"..."))&&f(q,"content",N),(!bn||1&o&&C!==(C="https://zijie.wang/images/crowns/"+t[0].id+".png"))&&f(z,"content",C),(!bn||1&o)&&Dn!==(Dn=t[0].title+"")&&D(dt,Dn),3&o){var i;for(qn=t[0].authors,i=0;i<qn.length;i+=1){var l=F(t,qn,i);Bn[i]?Bn[i].p(l,o):(Bn[i]=K(l),Bn[i].c(),Bn[i].m(gt,null))}for(;i<Bn.length;i+=1)Bn[i].d(1);Bn.length=qn.length}if(void 0!==t[0].equals?Tn||((Tn=Q()).c(),Tn.m(lt,Et)):Tn&&(Tn.d(1),Tn=null),(!bn||1&o)&&xn!==(xn=t[0].venue+"")&&D(bt,xn),(!bn||1&o)&&In!==(In=(void 0!==t[0].venueShort?"(".concat(t[0].venueShort,")"):"")+"")&&D(xt,In),(!bn||1&o)&&An!==(An=t[0].year+"")&&D(At,An),(!bn||1&o&&Vt!==(Vt=t[0].venueURL))&&f(yt,"href",Vt),(!bn||1&o&&Pt!==(Pt=R(t[0].crownShowBorder?"show-border":"")+" svelte-1a8t81v"))&&f(Mt,"class",Pt),(!bn||1&o&&jt!==(jt=void 0!==t[0].crownMaxHeight?"max-height: ".concat(t[0].crownMaxHeight,";"):""))&&f(Mt,"style",jt),(!bn||1&o&&Mt.src!==(qt="images/crowns/"+t[0].id+".png"))&&f(Mt,"src",qt),(!bn||1&o)&&Vn!==(Vn=t[0].crownCaption+"")&&D(Tt,Vn),void 0!==t[0].video?_n?(_n.p(t,o),1&o&&V(_n,1)):((_n=X(t)).c(),V(_n,1),_n.m(Lt,$t)):_n&&($(),k(_n,1,1,function(){_n=null}),_()),(!bn||1&o)&&kn!==(kn=t[0].abstract+"")&&(Ut.innerHTML=kn),(!bn||1&o)&&Sn!==(Sn=t[0].title+"")&&D(Qt,Sn),3&o){var u;for(Ln=t[0].authors,u=0;u<Ln.length;u+=1){var v=H(t,Ln,u);$n[u]?$n[u].p(v,o):($n[u]=tt(v),$n[u].c(),$n[u].m(Yt,null))}for(;u<$n.length;u+=1)$n[u].d(1);$n.length=Ln.length}(!bn||1&o)&&Mn!==(Mn=t[0].venue+"")&&D(en,Mn),(!bn||1&o)&&Pn!==(Pn=(void 0!==t[0].venueShort?"(".concat(t[0].venueShort,")"):"")+"")&&D(cn,Pn),(!bn||1&o)&&jn!==(jn=t[0].year+"")&&D(rn,jn),(!bn||1&o&&on!==(on=t[0].venueURL))&&f(nn,"href",on),void 0!==t[0].demo?zn?zn.p(t,o):((zn=nt(t)).c(),zn.m(un,vn)):zn&&(zn.d(1),zn=null),void 0!==t[0].video?Cn?Cn.p(t,o):((Cn=et(t)).c(),Cn.m(un,fn)):Cn&&(Cn.d(1),Cn=null),void 0!==t[0].pdf?Jn?Jn.p(t,o):((Jn=at(t)).c(),Jn.m(un,hn)):Jn&&(Jn.d(1),Jn=null),void 0!==t[0].slides?Un?Un.p(t,o):((Un=ct(t)).c(),Un.m(un,dn)):Un&&(Un.d(1),Un=null),void 0!==t[0].poster?Wn?Wn.p(t,o):((Wn=st(t)).c(),Wn.m(un,pn)):Wn&&(Wn.d(1),Wn=null),void 0!==t[0].repo?Hn?Hn.p(t,o):((Hn=rt(t)).c(),Hn.m(un,gn)):Hn&&(Hn.d(1),Hn=null),void 0!==t[0].data?Fn?Fn.p(t,o):((Fn=vt(t)).c(),Fn.m(un,mn)):Fn&&(Fn.d(1),Fn=null),void 0!==t[0].equals?Gn||((Gn=ft()).c(),Gn.m(un,null)):Gn&&(Gn.d(1),Gn=null),void 0!==t[0].bibtex?On?On.p(t,o):((On=ht(t)).c(),On.m(Ht,null)):On&&(On.d(1),On=null)},i:function(t){bn||(V(_n),bn=!0)},o:function(t){k(_n),bn=!1},d:function(t){v(e),v(c),v(r),v(o),v(p),v(m),v(I),v(S),v(M),v(P),v(q),v(z),v(J),v(U),v(W),v(G),t&&v(Y),t&&v(Z),L(Bn,t),Tn&&Tn.d(),_n&&_n.d(),L($n,t),zn&&zn.d(),Cn&&Cn.d(),Jn&&Jn.d(),Un&&Un.d(),Wn&&Wn.d(),Hn&&Hn.d(),Fn&&Fn.d(),Gn&&Gn.d(),On&&On.d()}}}function pt(t,n){return gt.apply(this,arguments)}function gt(){return(gt=g(m.mark(function t(n,e){var a,c,s,r,o;return m.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.params.slug,t.next=3,this.fetch("data.json");case 3:return c=t.sent,t.next=6,c.json();case 6:return s=t.sent,r=s.publication,o=void 0,r.forEach(function(t){t.id===a&&(o=t)}),t.abrupt("return",{curPub:o,people:s.people});case 11:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function mt(t,n,e){var a=n.curPub,c=n.people;return t.$$set=function(t){"curPub"in t&&e(0,a=t.curPub),"people"in t&&e(1,c=t.people)},[a,c,function(t,n){return n===t},function(t,n){return n===t},function(t){return console.log(t)}]}export default(function(n){t(i,o);var e=W(i);function i(t){var n;return a(this,i),n=e.call(this),c(r(n),t,mt,dt,s,{curPub:0,people:1}),n}return i}());export{pt as preload};
