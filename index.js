import{a as P,S as q,i as n}from"./assets/vendor-Z6SuAarM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const B="https://pixabay.com/api/",$="54259802-cdd8f9ab8b839644c91fdf63a",f=15;async function p(s,t=1){return(await P.get(B,{params:{key:$,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:f}})).data}const y=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=document.querySelector(".load-more"),E=new q(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const t=s.map(({webformatURL:c,largeImageURL:l,tags:e,likes:r,views:a,comments:w,downloads:S})=>`
      <li class="gallery-item">
        <a href="${l}">
          <img src="${c}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <span class="metric-label">Likes</span>
            <span class="metric-value">${r}</span>
          </div>
          <div class="info-item">
            <span class="metric-label">Views</span>
            <span class="metric-value">${a}</span>
          </div>
          <div class="info-item">
            <span class="metric-label">Comments</span>
            <span class="metric-value">${w}</span>
          </div>
          <div class="info-item">
            <span class="metric-label">Downloads</span>
            <span class="metric-value">${S}</span>
          </div>
        </div>
      </li>
    `).join("");y.insertAdjacentHTML("beforeend",t),E.refresh()}function M(){y.innerHTML=""}function b(){h.classList.add("visible")}function i(){h.classList.remove("visible")}function L(){g.classList.add("visible")}function m(){g.classList.remove("visible")}const O=document.querySelector(".form"),x=document.querySelector(".form input[name='search-text']"),A=document.querySelector(".load-more");let d="",o=1,u=0;O.addEventListener("submit",async s=>{if(s.preventDefault(),d=x.value.trim(),!d){n.error({message:"Please enter a search term!"});return}o=1,u=0,M(),m(),b();try{const t=await p(d,o);if(u=t.totalHits,t.hits.length===0){n.info({message:"Sorry, there are no images matching your search query."}),i();return}v(t.hits),i(),o*f<u&&L()}catch(t){console.error(t),n.error({message:"Something went wrong. Please try again."}),i()}});A.addEventListener("click",async()=>{o+=1,b(),m();try{const s=await p(d,o);v(s.hits),i();const t=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),o*f>=u?(m(),n.info({message:"We're sorry, but you've reached the end of search results."})):L()}catch(s){console.error(s),n.error({message:"Something went wrong. Please try again."}),i()}});
//# sourceMappingURL=index.js.map
