!function(){"use strict";const e=["client/publication.66e86d41.js","client/client.49631025.js","client/helpers.ec915d4f.js","client/about.8ae6d31b.js","client/[slug].cd293312.js","client/client.65134f1f.js","client/index.5cfcbf72.js","client/cv.c571b917.js"].concat(["service-worker-index.html",".DS_Store","CNAME","favicon.ico","global.css","icons/.DS_Store","icons/arrow-circle-up-solid.svg","icons/award-solid.svg","icons/chalkboard-teacher-solid.svg","icons/data.svg","icons/database-solid.svg","icons/envelope-regular.svg","icons/external-link-alt-solid.svg","icons/file-alt-regular.svg","icons/file-pdf-solid.svg","icons/film-solid.svg","icons/github-alt-brands.svg","icons/google-scholar.svg","icons/home-sharp.svg","icons/link-solid.svg","icons/linkedin-brands.svg","icons/orcid-brands.svg","icons/play-solid.svg","icons/plus-circle-solid.svg","icons/quote-right-solid.svg","icons/rocket-sharp.svg","icons/slides.svg","icons/star-solid.svg","icons/t-heart.svg","icons/twitter-brands.svg","icons/video-solid.svg","icons/youtube-brands.svg","images/.DS_Store","images/crowns/.DS_Store","images/crowns/ai-guideline.png","images/crowns/argo-lite.png","images/crowns/bluff.png","images/crowns/breast-poster.png","images/crowns/cnn-101.png","images/crowns/cnn-explainer.png","images/crowns/human-in-the-loop-nlp.png","images/crowns/massif.png","images/crowns/people-map.png","images/crowns/skeleton-vis.png","images/crowns/t-cell-poster.png","images/crowns/t-cell.png","images/crowns/unmask.png","images/people/.DS_Store","images/people/Alex Endert.jpg","images/people/Alex J. Walsh.jpg","images/people/Anindya S. Paul.jpg","images/people/Anish Upadhayay.jpg","images/people/Anthony Gitter.jpg","images/people/Austin P. Wright.jpg","images/people/Daniel Keim.jpg","images/people/Diyi Yang.jpg","images/people/Dongjin Choi.jpg","images/people/Duen Horng (Polo) Chau.jpg","images/people/Emily Rogers.jpg","images/people/Fabian Sperrle.jpg","images/people/Fred Hohman.jpg","images/people/Grace Guo.jpg","images/people/Haekyu Park.jpg","images/people/Jon Saad-Falcon.jpg","images/people/Matthew Hull.jpg","images/people/Melissa C. Skala.jpg","images/people/Mennatallah El-Assady.jpg","images/people/Minsuk Kahng.jpg","images/people/Nilaksh Das.jpg","images/people/Omar Shaikh.jpg","images/people/Pruthvi Perumalla.jpg","images/people/Quan Yin.jpg","images/people/Robert Firstman.jpg","images/people/Robert Turko.jpg","images/people/Sasha Richardson.jpg","images/people/Scott Freitas.jpg","images/people/Shang-Tse Chen.jpg","images/people/Shenyu Xu.jpg","images/people/Siwei Li.jpg","images/people/Susanta Routray.jpg","images/people/Tiffany M. Heaster.jpg","images/people/Zhiyan Zhou.jpg","images/people/Zijie J. Wang.jpg","images/teasers/.DS_Store","images/teasers/ai-guideline.png","images/teasers/bluff.png","images/teasers/cnn-explainer.png","images/teasers/massif.png","images/teasers/preview.png","images/teasers/project-clip2imgur.png","images/teasers/project-face.jpg","images/teasers/project-graphics.png","images/teasers/project-map.png","images/teasers/project-optim.png","images/teasers/project-review.png","images/teasers/skeleton-vis.png","images/teasers/unmask.png","images/zijie-jay-wang-portrait.jpg","logo-192.png","logo-512.png","manifest.json","pdf/18-breast-symposium.pdf","pdf/19-tcell-glbio.pdf","pdf/cv.pdf","pdf/glbio_2019.pdf","pdf/undergrad-thesis.pdf","pdf/undergrad_symposium_2018.pdf","slides/honor_thesis_symposium_2019.pdf","sprite.svg"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1617043791532").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1617043791532"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const i=new URL(e.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&s.has(i.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1617043791532").then(async s=>{try{const i=await fetch(e.request);return s.put(e.request,i.clone()),i}catch(i){const a=await s.match(e.request);if(a)return a;throw i}}))))})}();
