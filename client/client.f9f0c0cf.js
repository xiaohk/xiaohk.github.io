function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function a(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function l(e,t,n,s,r,a,o){const l=function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(t,s,r,a);if(l){const r=c(t,n,s,o);e.p(r,l)}}function i(e){return null==e?"":e}function f(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function v(e){return document.createTextNode(e)}function m(){return v(" ")}function $(){return v("")}function y(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function E(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e,t,n){e.setAttributeNS("http://www.w3.org/1999/xlink",t,n)}function b(e){return Array.from(e.childNodes)}function x(e,t,n,s){for(let s=0;s<e.length;s+=1){const r=e[s];if(r.nodeName===t){let t=0;const a=[];for(;t<r.attributes.length;){const e=r.attributes[t++];n[e.name]||a.push(e.name)}for(let e=0;e<a.length;e++)r.removeAttribute(a[e]);return e.splice(s,1)[0]}}return s?g(t):d(t)}function _(e,t){for(let n=0;n<e.length;n+=1){const s=e[n];if(3===s.nodeType)return s.data=""+t,e.splice(n,1)[0]}return v(t)}function S(e){return _(e," ")}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function A(e,t,n,s){e.style.setProperty(t,n,s?"important":"")}function P(e,t,n){e.classList[n?"add":"remove"](t)}function R(e,t=document.body){return Array.from(t.querySelectorAll(e))}class j{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=d(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)u(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(h)}}let D;function L(e){D=e}function C(){if(!D)throw new Error("Function called outside component initialization");return D}const I=[],N=[],V=[],B=[],O=Promise.resolve();let q=!1;function U(e){V.push(e)}let J=!1;const H=new Set;function T(){if(!J){J=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];L(t),M(t.$$)}for(I.length=0;N.length;)N.pop()();for(let e=0;e<V.length;e+=1){const t=V[e];H.has(t)||(H.add(t),t())}V.length=0}while(I.length);for(;B.length;)B.pop()();q=!1,J=!1,H.clear()}}function M(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}const W=new Set;let z;function F(){z={r:0,c:[],p:z}}function Y(){z.r||r(z.c),z=z.p}function K(e,t){e&&e.i&&(W.delete(e),e.i(t))}function G(e,t,n,s){if(e&&e.o){if(W.has(e))return;W.add(e),z.c.push(()=>{W.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function Z(e,t){const n=t.token={};function s(e,s,r,a){if(t.token!==n)return;t.resolved=a;let o=t.ctx;void 0!==r&&((o=o.slice())[r]=a);const c=e&&(t.current=e)(o);let l=!1;t.block&&(t.blocks?t.blocks.forEach((e,n)=>{n!==s&&e&&(F(),G(e,1,1,()=>{t.blocks[n]=null}),Y())}):t.block.d(1),c.c(),K(c,1),c.m(t.mount(),t.anchor),l=!0),t.block=c,t.blocks&&(t.blocks[s]=c),l&&T()}if((r=e)&&"object"==typeof r&&"function"==typeof r.then){const n=C();if(e.then(e=>{L(n),s(t.then,1,t.value,e),L(null)},e=>{L(n),s(t.catch,2,t.error,e),L(null)}),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}var r}function X(e,t){e.d(1),t.delete(e.key)}function Q(e,t,n,s,r,a,o,c,l,i,f,u){let h=e.length,p=a.length,d=h;const g={};for(;d--;)g[e[d].key]=d;const v=[],m=new Map,$=new Map;for(d=p;d--;){const e=u(r,a,d),c=n(e);let l=o.get(c);l?s&&l.p(e,t):(l=i(c,e)).c(),m.set(c,v[d]=l),c in g&&$.set(c,Math.abs(d-g[c]))}const y=new Set,E=new Set;function w(e){K(e,1),e.m(c,f),o.set(e.key,e),f=e.first,p--}for(;h&&p;){const t=v[p-1],n=e[h-1],s=t.key,r=n.key;t===n?(f=t.first,h--,p--):m.has(r)?!o.has(s)||y.has(s)?w(t):E.has(r)?h--:$.get(s)>$.get(r)?(E.add(s),w(t)):(y.add(r),h--):(l(n,o),h--)}for(;h--;){const t=e[h];m.has(t.key)||l(t,o)}for(;p;)w(v[p-1]);return v}function ee(e,t){const n={},s={},r={$$scope:1};let a=e.length;for(;a--;){const o=e[a],c=t[a];if(c){for(const e in o)e in c||(s[e]=1);for(const e in c)r[e]||(n[e]=c[e],r[e]=1);e[a]=c}else for(const e in o)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function te(e){return"object"==typeof e&&null!==e?e:{}}function ne(e){e&&e.c()}function se(e,t){e&&e.l(t)}function re(e,t,s){const{fragment:o,on_mount:c,on_destroy:l,after_update:i}=e.$$;o&&o.m(t,s),U(()=>{const t=c.map(n).filter(a);l?l.push(...t):r(t),e.$$.on_mount=[]}),i.forEach(U)}function ae(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){-1===e.$$.dirty[0]&&(I.push(e),q||(q=!0,O.then(T)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ce(t,n,a,o,c,l,i=[-1]){const f=D;L(t);const u=n.props||{},p=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:s(),dirty:i,skip_bound:!1};let d=!1;if(p.ctx=a?a(t,u,(e,n,...s)=>{const r=s.length?s[0]:n;return p.ctx&&c(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),d&&oe(t,e)),n}):[],p.update(),d=!0,r(p.before_update),p.fragment=!!o&&o(p.ctx),n.target){if(n.hydrate){const e=b(n.target);p.fragment&&p.fragment.l(e),e.forEach(h)}else p.fragment&&p.fragment.c();n.intro&&K(t.$$.fragment),re(t,n.target,n.anchor),T()}L(f)}class le{$destroy(){ae(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ie=[];function fe(t,n=e){let s;const r=[];function a(e){if(o(t,e)&&(t=e,s)){const e=!ie.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),ie.push(n,t)}if(e){for(let e=0;e<ie.length;e+=2)ie[e][0](ie[e+1]);ie.length=0}}}return{set:a,update:function(e){a(e(t))},subscribe:function(o,c=e){const l=[o,c];return r.push(l),1===r.length&&(s=n(a)||e),o(t),()=>{const e=r.indexOf(l);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}const ue={},he=()=>({});function pe(t){let n,s,r,a,o,c,l,i,p,g,$,y,w,k,A,P,R,j,D;return{c(){n=d("nav"),s=d("div"),r=m(),a=d("div"),o=d("div"),c=d("a"),l=d("div"),i=v("Jay Wang"),p=m(),g=d("div"),$=d("a"),y=d("div"),w=v("CV"),k=m(),A=d("a"),P=d("div"),R=v("Publications"),j=m(),D=d("div"),this.h()},l(e){var t=b(n=x(e,"NAV",{class:!0}));b(s=x(t,"DIV",{class:!0})).forEach(h),r=S(t);var f=b(a=x(t,"DIV",{class:!0})),u=b(o=x(f,"DIV",{class:!0})),d=b(c=x(u,"A",{href:!0,class:!0})),v=b(l=x(d,"DIV",{class:!0}));i=_(v,"Jay Wang"),v.forEach(h),d.forEach(h),p=S(u);var m=b(g=x(u,"DIV",{class:!0})),E=b($=x(m,"A",{href:!0,class:!0})),L=b(y=x(E,"DIV",{class:!0}));w=_(L,"CV"),L.forEach(h),E.forEach(h),k=S(m);var C=b(A=x(m,"A",{href:!0,class:!0})),I=b(P=x(C,"DIV",{class:!0}));R=_(I,"Publications"),I.forEach(h),C.forEach(h),m.forEach(h),u.forEach(h),f.forEach(h),j=S(t),b(D=x(t,"DIV",{class:!0})).forEach(h),t.forEach(h),this.h()},h(){E(s,"class","left-padding"),E(l,"class","header-item header-item-name svelte-1w9yw1c"),E(c,"href","."),E(c,"class","svelte-1w9yw1c"),E(y,"class","header-item header-other-item svelte-1w9yw1c"),E($,"href","/cv"),E($,"class","svelte-1w9yw1c"),E(P,"class","header-item header-other-item svelte-1w9yw1c"),E(A,"href","/cv#publications"),E(A,"class","svelte-1w9yw1c"),E(g,"class","header-other svelte-1w9yw1c"),E(o,"class","header svelte-1w9yw1c"),E(a,"class","header-main svelte-1w9yw1c"),E(D,"class","right-padding"),E(n,"class","svelte-1w9yw1c")},m(e,t){u(e,n,t),f(n,s),f(n,r),f(n,a),f(a,o),f(o,c),f(c,l),f(l,i),f(o,p),f(o,g),f(g,$),f($,y),f(y,w),f(g,k),f(g,A),f(A,P),f(P,R),f(n,j),f(n,D)},p:e,i:e,o:e,d(e){e&&h(n)}}}class de extends le{constructor(e){super(),ce(this,e,null,pe,o,{})}}function ge(t){let n,s,r,a,o,c,l,i,p,$,y,k,A,P,R,j,D,L,C,I,N,V,B,O,q,U,J,H,T,M,W,z,F,Y,K,G,Z,X,Q,ee,te,ne,se,re,ae,oe,ce,le,ie,fe,ue,he,pe,de,ge,ve,me,$e,ye,Ee=(new Date).getFullYear()+"";return{c(){n=d("footer"),s=d("div"),r=m(),a=d("div"),o=d("div"),c=d("div"),l=d("span"),i=v("Designed and built by "),p=d("a"),$=v("Jay Wang"),y=v(" with"),k=m(),A=d("div"),P=g("svg"),R=g("use"),j=m(),D=d("span"),L=v("using\n        "),C=d("a"),I=v("Svelte"),N=v(" and \n        "),V=d("a"),B=v("Sapper"),O=v("."),q=m(),U=d("div"),J=d("div"),H=d("a"),T=g("svg"),M=g("use"),W=m(),z=d("a"),F=g("svg"),Y=g("use"),K=m(),G=d("a"),Z=g("svg"),X=g("use"),Q=m(),ee=d("a"),te=g("svg"),ne=g("use"),se=m(),re=d("a"),ae=g("svg"),oe=g("use"),ce=m(),le=d("a"),ie=g("svg"),fe=g("use"),ue=m(),he=d("div"),pe=v("© "),de=v(Ee),ge=m(),ve=d("a"),me=v("Zijie Jay Wang"),$e=m(),ye=d("div"),this.h()},l(e){var t=b(n=x(e,"FOOTER",{class:!0}));b(s=x(t,"DIV",{class:!0})).forEach(h),r=S(t);var f=b(a=x(t,"DIV",{class:!0})),u=b(o=x(f,"DIV",{class:!0})),d=b(c=x(u,"DIV",{class:!0})),g=b(l=x(d,"SPAN",{}));i=_(g,"Designed and built by ");var v=b(p=x(g,"A",{class:!0,href:!0}));$=_(v,"Jay Wang"),v.forEach(h),y=_(g," with"),g.forEach(h),k=S(d);var m=b(A=x(d,"DIV",{class:!0})),E=b(P=x(m,"svg",{viewBox:!0,class:!0},1));b(R=x(E,"use",{"xlink:href":!0},1)).forEach(h),E.forEach(h),m.forEach(h),j=S(d);var w=b(D=x(d,"SPAN",{}));L=_(w,"using\n        ");var we=b(C=x(w,"A",{href:!0,target:!0,class:!0}));I=_(we,"Svelte"),we.forEach(h),N=_(w," and \n        ");var be=b(V=x(w,"A",{href:!0,target:!0,class:!0}));B=_(be,"Sapper"),be.forEach(h),O=_(w,"."),w.forEach(h),d.forEach(h),q=S(u);var xe=b(U=x(u,"DIV",{class:!0})),_e=b(J=x(xe,"DIV",{class:!0})),Se=b(H=x(_e,"A",{class:!0,href:!0,target:!0})),ke=b(T=x(Se,"svg",{viewBox:!0,class:!0},1));b(M=x(ke,"use",{"xlink:href":!0},1)).forEach(h),ke.forEach(h),Se.forEach(h),W=S(_e);var Ae=b(z=x(_e,"A",{class:!0,href:!0,target:!0})),Pe=b(F=x(Ae,"svg",{viewBox:!0,class:!0},1));b(Y=x(Pe,"use",{"xlink:href":!0},1)).forEach(h),Pe.forEach(h),Ae.forEach(h),K=S(_e);var Re=b(G=x(_e,"A",{class:!0,href:!0,target:!0})),je=b(Z=x(Re,"svg",{viewBox:!0,class:!0},1));b(X=x(je,"use",{"xlink:href":!0},1)).forEach(h),je.forEach(h),Re.forEach(h),Q=S(_e);var De=b(ee=x(_e,"A",{class:!0,href:!0,target:!0})),Le=b(te=x(De,"svg",{viewBox:!0,class:!0},1));b(ne=x(Le,"use",{"xlink:href":!0},1)).forEach(h),Le.forEach(h),De.forEach(h),se=S(_e);var Ce=b(re=x(_e,"A",{class:!0,href:!0,target:!0})),Ie=b(ae=x(Ce,"svg",{viewBox:!0,class:!0},1));b(oe=x(Ie,"use",{"xlink:href":!0},1)).forEach(h),Ie.forEach(h),Ce.forEach(h),ce=S(_e);var Ne=b(le=x(_e,"A",{class:!0,href:!0,target:!0})),Ve=b(ie=x(Ne,"svg",{viewBox:!0,class:!0},1));b(fe=x(Ve,"use",{"xlink:href":!0},1)).forEach(h),Ve.forEach(h),Ne.forEach(h),_e.forEach(h),ue=S(xe);var Be=b(he=x(xe,"DIV",{}));pe=_(Be,"© "),de=_(Be,Ee),ge=S(Be);var Oe=b(ve=x(Be,"A",{class:!0,href:!0}));me=_(Oe,"Zijie Jay Wang"),Oe.forEach(h),Be.forEach(h),xe.forEach(h),u.forEach(h),f.forEach(h),$e=S(t),b(ye=x(t,"DIV",{class:!0})).forEach(h),t.forEach(h),this.h()},h(){E(s,"class","left-padding"),E(p,"class","raleway svelte-1pltrfa"),E(p,"href","."),w(R,"xlink:href","/sprite.svg#t-heart"),E(P,"viewBox","0 0 100 100"),E(P,"class","svelte-1pltrfa"),E(A,"class","svg-icon svelte-1pltrfa"),E(C,"href","https://svelte.dev/"),E(C,"target","_self"),E(C,"class","svelte-1pltrfa"),E(V,"href","https://sapper.svelte.dev/"),E(V,"target","_self"),E(V,"class","svelte-1pltrfa"),E(c,"class","footer-item svelte-1pltrfa"),w(M,"xlink:href","/sprite.svg#file-alt-regular"),E(T,"viewBox","0 0 100 100"),E(T,"class","svelte-1pltrfa"),E(H,"class","svg-icon svelte-1pltrfa"),E(H,"href","cv"),E(H,"target","_self"),w(Y,"xlink:href","/sprite.svg#github-alt-brands"),E(F,"viewBox","0 0 100 100"),E(F,"class","svelte-1pltrfa"),E(z,"class","svg-icon svelte-1pltrfa"),E(z,"href","https://github.com/xiaohk"),E(z,"target","_self"),w(X,"xlink:href","/sprite.svg#google-scholar"),E(Z,"viewBox","0 0 100 100"),E(Z,"class","svelte-1pltrfa"),E(G,"class","svg-icon svelte-1pltrfa"),E(G,"href","https://scholar.google.com/citations?user=eouAYvcAAAAJ&hl=en"),E(G,"target","_self"),w(ne,"xlink:href","/sprite.svg#twitter-brands"),E(te,"viewBox","0 0 100 100"),E(te,"class","svelte-1pltrfa"),E(ee,"class","svg-icon svelte-1pltrfa"),E(ee,"href","http://twitter.com/jay4w"),E(ee,"target","_self"),w(oe,"xlink:href","/sprite.svg#linkedin-brands"),E(ae,"viewBox","0 0 100 100"),E(ae,"class","svelte-1pltrfa"),E(re,"class","svg-icon svelte-1pltrfa"),E(re,"href","https://www.linkedin.com/in/zijiewang/"),E(re,"target","_self"),w(fe,"xlink:href","/sprite.svg#envelope-regular"),E(ie,"viewBox","0 0 100 100"),E(ie,"class","svelte-1pltrfa"),E(le,"class","svg-icon svelte-1pltrfa"),E(le,"href","mailto:jayw@gatech.edu"),E(le,"target","_self"),E(J,"class","footer-icons"),E(ve,"class","raleway svelte-1pltrfa"),E(ve,"href","."),E(U,"class","footer-other svelte-1pltrfa"),E(o,"class","footer svelte-1pltrfa"),E(a,"class","footer-main svelte-1pltrfa"),E(ye,"class","right-padding"),E(n,"class","svelte-1pltrfa")},m(e,t){u(e,n,t),f(n,s),f(n,r),f(n,a),f(a,o),f(o,c),f(c,l),f(l,i),f(l,p),f(p,$),f(l,y),f(c,k),f(c,A),f(A,P),f(P,R),f(c,j),f(c,D),f(D,L),f(D,C),f(C,I),f(D,N),f(D,V),f(V,B),f(D,O),f(o,q),f(o,U),f(U,J),f(J,H),f(H,T),f(T,M),f(J,W),f(J,z),f(z,F),f(F,Y),f(J,K),f(J,G),f(G,Z),f(Z,X),f(J,Q),f(J,ee),f(ee,te),f(te,ne),f(J,se),f(J,re),f(re,ae),f(ae,oe),f(J,ce),f(J,le),f(le,ie),f(ie,fe),f(U,ue),f(U,he),f(he,pe),f(he,de),f(he,ge),f(he,ve),f(ve,me),f(n,$e),f(n,ye)},p:e,i:e,o:e,d(e){e&&h(n)}}}class ve extends le{constructor(e){super(),ce(this,e,null,ge,o,{})}}function me(e){let t,n;return t=new de({}),{c(){ne(t.$$.fragment)},l(e){se(t.$$.fragment,e)},m(e,s){re(t,e,s),n=!0},i(e){n||(K(t.$$.fragment,e),n=!0)},o(e){G(t.$$.fragment,e),n=!1},d(e){ae(t,e)}}}function $e(e){let t,n;return t=new ve({}),{c(){ne(t.$$.fragment)},l(e){se(t.$$.fragment,e)},m(e,s){re(t,e,s),n=!0},i(e){n||(K(t.$$.fragment,e),n=!0)},o(e){G(t.$$.fragment,e),n=!1},d(e){ae(t,e)}}}function ye(e){let t,n,s,r,a,o="papers"==e[0]&&me();const i=e[2].default,f=function(e,t,n,s){if(e){const r=c(e,t,n,s);return e[0](r)}}(i,e,e[1],null);let p="cv"!=e[0]&&$e();return{c(){o&&o.c(),t=m(),n=d("main"),f&&f.c(),s=m(),p&&p.c(),r=$(),this.h()},l(e){o&&o.l(e),t=S(e);var a=b(n=x(e,"MAIN",{class:!0}));f&&f.l(a),a.forEach(h),s=S(e),p&&p.l(e),r=$(),this.h()},h(){E(n,"class","svelte-1jybnva")},m(e,c){o&&o.m(e,c),u(e,t,c),u(e,n,c),f&&f.m(n,null),u(e,s,c),p&&p.m(e,c),u(e,r,c),a=!0},p(e,[n]){"papers"==e[0]?o?1&n&&K(o,1):((o=me()).c(),K(o,1),o.m(t.parentNode,t)):o&&(F(),G(o,1,1,()=>{o=null}),Y()),f&&f.p&&2&n&&l(f,i,e,e[1],n,null,null),"cv"!=e[0]?p?1&n&&K(p,1):((p=$e()).c(),K(p,1),p.m(r.parentNode,r)):p&&(F(),G(p,1,1,()=>{p=null}),Y())},i(e){a||(K(o),K(f,e),K(p),a=!0)},o(e){G(o),G(f,e),G(p),a=!1},d(e){o&&o.d(e),e&&h(t),e&&h(n),f&&f.d(e),e&&h(s),p&&p.d(e),e&&h(r)}}}function Ee(e,t,n){let{segment:s}=t,{$$slots:r={},$$scope:a}=t;return e.$$set=(e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(1,a=e.$$scope)}),[s,a,r]}class we extends le{constructor(e){super(),ce(this,e,Ee,ye,o,{segment:0})}}function be(e){let t,n,s=e[1].stack+"";return{c(){t=d("pre"),n=v(s)},l(e){var r=b(t=x(e,"PRE",{}));n=_(r,s),r.forEach(h)},m(e,s){u(e,t,s),f(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&k(n,s)},d(e){e&&h(t)}}}function xe(t){let n,s,r,a,o,c,l,i,p,g=t[1].message+"";document.title=n=t[0];let y=t[2]&&t[1].stack&&be(t);return{c(){s=m(),r=d("h1"),a=v(t[0]),o=m(),c=d("p"),l=v(g),i=m(),y&&y.c(),p=$(),this.h()},l(e){R('[data-svelte="svelte-1moakz"]',document.head).forEach(h),s=S(e);var n=b(r=x(e,"H1",{class:!0}));a=_(n,t[0]),n.forEach(h),o=S(e);var f=b(c=x(e,"P",{class:!0}));l=_(f,g),f.forEach(h),i=S(e),y&&y.l(e),p=$(),this.h()},h(){E(r,"class","svelte-vps82x"),E(c,"class","svelte-vps82x")},m(e,t){u(e,s,t),u(e,r,t),f(r,a),u(e,o,t),u(e,c,t),f(c,l),u(e,i,t),y&&y.m(e,t),u(e,p,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&k(a,e[0]),2&t&&g!==(g=e[1].message+"")&&k(l,g),e[2]&&e[1].stack?y?y.p(e,t):((y=be(e)).c(),y.m(p.parentNode,p)):y&&(y.d(1),y=null)},i:e,o:e,d(e){e&&h(s),e&&h(r),e&&h(o),e&&h(c),e&&h(i),y&&y.d(e),e&&h(p)}}}function _e(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=(e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)}),[s,r,!1]}class Se extends le{constructor(e){super(),ce(this,e,_e,xe,o,{status:0,error:1})}}function ke(e){let n,s,r;const a=[e[4].props];var o=e[4].component;function c(e){let n={};for(let e=0;e<a.length;e+=1)n=t(n,a[e]);return{props:n}}return o&&(n=new o(c())),{c(){n&&ne(n.$$.fragment),s=$()},l(e){n&&se(n.$$.fragment,e),s=$()},m(e,t){n&&re(n,e,t),u(e,s,t),r=!0},p(e,t){const r=16&t?ee(a,[te(e[4].props)]):{};if(o!==(o=e[4].component)){if(n){F();const e=n;G(e.$$.fragment,1,0,()=>{ae(e,1)}),Y()}o?(ne((n=new o(c())).$$.fragment),K(n.$$.fragment,1),re(n,s.parentNode,s)):n=null}else o&&n.$set(r)},i(e){r||(n&&K(n.$$.fragment,e),r=!0)},o(e){n&&G(n.$$.fragment,e),r=!1},d(e){e&&h(s),n&&ae(n,e)}}}function Ae(e){let t,n;return t=new Se({props:{error:e[0],status:e[1]}}),{c(){ne(t.$$.fragment)},l(e){se(t.$$.fragment,e)},m(e,s){re(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(K(t.$$.fragment,e),n=!0)},o(e){G(t.$$.fragment,e),n=!1},d(e){ae(t,e)}}}function Pe(e){let t,n,s,r;const a=[Ae,ke],o=[];function c(e,t){return e[0]?0:1}return t=c(e),n=o[t]=a[t](e),{c(){n.c(),s=$()},l(e){n.l(e),s=$()},m(e,n){o[t].m(e,n),u(e,s,n),r=!0},p(e,r){let l=t;(t=c(e))===l?o[t].p(e,r):(F(),G(o[l],1,1,()=>{o[l]=null}),Y(),(n=o[t])||(n=o[t]=a[t](e)).c(),K(n,1),n.m(s.parentNode,s))},i(e){r||(K(n),r=!0)},o(e){G(n),r=!1},d(e){o[t].d(e),e&&h(s)}}}function Re(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let a={$$slots:{default:[Pe]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)a=t(a,r[e]);return n=new we({props:a}),{c(){ne(n.$$.fragment)},l(e){se(n.$$.fragment,e)},m(e,t){re(n,e,t),s=!0},p(e,[t]){const s=12&t?ee(r,[4&t&&{segment:e[2][0]},8&t&&te(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(K(n.$$.fragment,e),s=!0)},o(e){G(n.$$.fragment,e),s=!1},d(e){ae(n,e)}}}function je(e,t,n){let{stores:s}=t,{error:r}=t,{status:a}=t,{segments:o}=t,{level0:c}=t,{level1:l=null}=t,{notify:i}=t;var f,u,h;return f=i,C().$$.after_update.push(f),u=ue,h=s,C().$$.context.set(u,h),e.$$set=(e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,a=e.status),"segments"in e&&n(2,o=e.segments),"level0"in e&&n(3,c=e.level0),"level1"in e&&n(4,l=e.level1),"notify"in e&&n(6,i=e.notify)}),[r,a,o,c,l,s,i]}class De extends le{constructor(e){super(),ce(this,e,je,Re,o,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Le=[/^\/data\.json$/,/^\/helpers\/?$/],Ce=[{js:()=>import("./index.17365c4e.js"),css:["index.17365c4e.css","client.f9f0c0cf.css"]},{js:()=>import("./publication.63c08d6f.js"),css:["client.f9f0c0cf.css"]},{js:()=>import("./[slug].671e7a03.js"),css:["[slug].671e7a03.css","client.f9f0c0cf.css"]},{js:()=>import("./about.95ae0c6a.js"),css:["client.f9f0c0cf.css"]},{js:()=>import("./cv.bd936b3f.js"),css:["cv.bd936b3f.css","client.f9f0c0cf.css"]}],Ie=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/publication\/?$/,parts:[{i:1}]},{pattern:/^\/papers\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:e(t[1])})}]},{pattern:/^\/about\/?$/,parts:[{i:3}]},{pattern:/^\/cv\/?$/,parts:[{i:4}]}])(decodeURIComponent);const Ne="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ve,Be,Oe,qe=!1,Ue=[],Je="{}";const He={page:function(e){const t=fe(e);let n=!0;return{notify:function(){n=!0,t.update(e=>e)},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe(t=>{(void 0===s||n&&t!==s)&&e(s=t)})}}}({}),preloading:fe(null),session:fe(Ne&&Ne.session)};let Te,Me;He.session.subscribe(async e=>{if(Te=e,!qe)return;Me=!0;const t=Xe(new URL(location.href)),n=Be={},{redirect:s,props:r,branch:a}=await nt(t);n===Be&&await tt(s,a,r,t.page)});let We,ze=null;let Fe,Ye=1;const Ke="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},Ge={};function Ze(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,n,s=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(s):t[n]=s}),t}function Xe(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ne.baseUrl))return null;let t=e.pathname.slice(Ne.baseUrl.length);if(""===t&&(t="/"),!Le.some(e=>e.test(t)))for(let n=0;n<Ie.length;n+=1){const s=Ie[n],r=s.pattern.exec(t);if(r){const n=Ze(e.search),a=s.parts[s.parts.length-1],o=a.params?a.params(r):{},c={host:location.host,path:t,query:n,params:o};return{href:e.href,route:s,match:r,page:c}}}}function Qe(){return{x:pageXOffset,y:pageYOffset}}async function et(e,t,n,s){if(t)Fe=t;else{const e=Qe();Ge[Fe]=e,t=Fe=++Ye,Ge[Fe]=n?e:{x:0,y:0}}Fe=t,Ve&&He.preloading.set(!0);const r=ze&&ze.href===e.href?ze.promise:nt(e);ze=null;const a=Be={},{redirect:o,props:c,branch:l}=await r;if(a===Be&&(await tt(o,l,c,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=Ge[t];if(s){const t=document.getElementById(s.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top+scrollY})}Ge[Fe]=e,e&&scrollTo(e.x,e.y)}}async function tt(e,t,n,s){if(e)return function(e,t={replaceState:!1}){const n=Xe(new URL(e,document.baseURI));return n?(Ke[t.replaceState?"replaceState":"pushState"]({id:Fe},"",e),et(n,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(He.page.set(s),He.preloading.set(!1),Ve)Ve.$set(n);else{n.stores={page:{subscribe:He.page.subscribe},preloading:{subscribe:He.preloading.subscribe},session:He.session},n.level0={props:await Oe},n.notify=He.page.notify;const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)rt(e.nextSibling);rt(e),rt(t)}Ve=new De({target:We,props:n,hydrate:!0})}Ue=t,Je=JSON.stringify(s.query),qe=!0,Me=!1}async function nt(e){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const a={error:null,status:200,segments:[s[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let c;Oe||(Oe=Ne.preloaded[0]||he.call(o,{host:n.host,path:n.path,query:n.query,params:{}},Te));let l=1;try{const r=JSON.stringify(n.query),i=t.pattern.exec(n.path);let f=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const u=s[c];if(function(e,t,n,s){if(s!==Je)return!0;const r=Ue[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(c,u,i,r)&&(f=!0),a.segments[l]=s[c+1],!t)return{segment:u};const h=l++;if(!Me&&!f&&Ue[c]&&Ue[c].part===t.i)return Ue[c];f=!1;const{default:p,preload:d}=await function(e){const t="string"==typeof e.css?[]:e.css.map(st);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(Ce[t.i]);let g;return g=qe||!Ne.preloaded[c+1]?d?await d.call(o,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Te):{}:Ne.preloaded[c+1],a[`level${h}`]={component:p,props:g,segment:u,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,c=[]}return{redirect:r,props:a,branch:c}}function st(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,n)=>{const s=document.createElement("link");s.rel="stylesheet",s.href=t,s.onload=(()=>e()),s.onerror=n,document.head.appendChild(s)})}function rt(e){e.parentNode.removeChild(e)}function at(e){const t=Xe(new URL(e,document.baseURI));if(t)return ze&&e===ze.href||function(e,t){ze={href:e,promise:t}}(e,nt(t)),ze.promise}let ot;function ct(e){clearTimeout(ot),ot=setTimeout(()=>{lt(e)},20)}function lt(e){const t=ft(e.target);t&&"prefetch"===t.rel&&at(t.href)}function it(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=ft(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const a=Xe(r);if(a){et(a,null,t.hasAttribute("sapper-noscroll"),r.hash),e.preventDefault(),Ke.pushState({id:Fe},"",r.href)}}function ft(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function ut(e){if(Ge[Fe]=Qe(),e.state){const t=Xe(new URL(location.href));t?et(t,e.state.id):location.href=location.href}else(function(e){Fe=e})(Ye=Ye+1),Ke.replaceState({id:Fe},"",location.href)}!function(e){var t;"scrollRestoration"in Ke&&(Ke.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ke.scrollRestoration="auto"}),addEventListener("load",()=>{Ke.scrollRestoration="manual"}),t=e.target,We=t,addEventListener("click",it),addEventListener("popstate",ut),addEventListener("touchstart",lt),addEventListener("mousemove",ct),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Ke.replaceState({id:Ye},"",t);const n=new URL(location.href);if(Ne.error)return function(e){const{host:t,pathname:n,search:s}=location,{session:r,preloaded:a,status:o,error:c}=Ne;Oe||(Oe=a&&a[0]),tt(null,[],{error:c,status:o,session:r,level0:{props:Oe},level1:{props:{status:o,error:c},component:Se},segments:a},{host:t,path:n,query:Ze(s),params:{}})}();const s=Xe(n);return s?et(s,Ye,!0,e):void 0})}({target:document.querySelector("#sapper")});export{re as A,K as B,G as C,ae as D,i as E,Y as F,F as G,j as H,Q as I,X as J,le as S,m as a,b,x as c,_ as d,d as e,h as f,S as g,E as h,ce as i,u as j,f as k,k as l,P as m,$ as n,p as o,g as p,A as q,Z as r,o as s,v as t,y as u,R as v,e as w,w as x,ne as y,se as z};
