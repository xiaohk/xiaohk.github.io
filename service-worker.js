!function(){"use strict";const e=["client/publication.b897a4bc.js","client/client.ed134046.js","client/helpers.17d7bc92.js","client/about.e60f599d.js","client/[slug].96883564.js","client/client.692aa75c.js","client/index.a94e79e6.js","client/cv.78afa2c1.js"].concat(["service-worker-index.html",".DS_Store","CNAME","favicon.ico","global.css","icons/arrow-circle-up-solid.svg","icons/award-solid.svg","icons/chalkboard-teacher-solid.svg","icons/database-solid.svg","icons/envelope-regular.svg","icons/external-link-alt-solid.svg","icons/file-alt-regular.svg","icons/file-pdf-solid.svg","icons/film-solid.svg","icons/github-alt-brands.svg","icons/graduation-cap-solid.svg","icons/link-solid.svg","icons/linkedin-brands.svg","icons/orcid-brands.svg","icons/play-solid.svg","icons/plus-circle-solid.svg","icons/quote-right-solid.svg","icons/star-solid.svg","icons/t-heart.svg","icons/twitter-brands.svg","icons/youtube-brands.svg","images/.DS_Store","images/crowns/.DS_Store","images/crowns/breast-poster.pdf","images/crowns/breast-poster.png","images/crowns/cnn-101.png","images/crowns/cnn-explainer.png","images/crowns/massif.png","images/crowns/people-map.png","images/crowns/t-cell-poster.png","images/crowns/t-cell.png","images/crowns/unmask.png","images/jay.jpg","images/people/.DS_Store","images/people/Alex J. Walsh.jpg","images/people/Anish Upadhayay.jpg","images/people/Anthony Gitter.jpg","images/people/Austin P. Wright.jpg","images/people/Duen Horng (Polo) Chau.jpg","images/people/Emily Rogers.jpg","images/people/Fred Hohman.jpg","images/people/Haekyu Park.jpg","images/people/Jon Saad-Falcon.jpg","images/people/Matthew Hull.jpg","images/people/Melissa C. Skala.jpg","images/people/Minsuk Kahng.jpg","images/people/Nilaksh Das.jpg","images/people/Omar Shaikh.jpg","images/people/Quan Yin.jpg","images/people/Robert Firstman.jpg","images/people/Robert Turko.jpg","images/people/Sasha Richardson.jpg","images/people/Scott Freitas.jpg","images/people/Shang-Tse Chen.jpg","images/people/Siwei Li.jpg","images/people/Susanta Routray.jpg","images/people/Tiffany M. Heaster.jpg","images/people/Zhiyan Zhou.jpg","images/people/Zijie J. Wang.jpg","images/teasers/.DS_Store","images/teasers/cnn-explainer.png","images/teasers/massif.png","images/teasers/preview.png","images/teasers/project-clip2imgur.png","images/teasers/project-face.jpg","images/teasers/project-graphics.png","images/teasers/project-map.png","images/teasers/project-optim.png","images/teasers/project-review.png","images/teasers/unmask.png","logo-192.png","logo-512.png","manifest.json","pdf/18-breast-symposium.pdf","pdf/19-tcell-glbio.pdf","pdf/glbio_2019.pdf","pdf/undergrad-thesis.pdf","pdf/undergrad_symposium_2018.pdf","slides/honor_thesis_symposium_2019.pdf","sprite.svg"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1598591005271").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1598591005271"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const a=new URL(e.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&s.has(a.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1598591005271").then(async s=>{try{const a=await fetch(e.request);return s.put(e.request,a.clone()),a}catch(a){const i=await s.match(e.request);if(i)return i;throw a}}))))})}();
