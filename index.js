import{a as P,S as q,i}from"./assets/vendor-Z6SuAarM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const B="https://pixabay.com/api/",$="54259802-cdd8f9ab8b839644c91fdf63a",f=15;async function p(s,t=1){return(await P.get(B,{params:{key:$,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:f}})).data}const y=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".load-more"),E=new q(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const t=s.map(({webformatURL:c,largeImageURL:l,tags:e,likes:r,views:o,comments:w,downloads:S})=>`
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
            <span class="metric-value">${o}</span>
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
    `).join("");y.insertAdjacentHTML("beforeend",t),E.refresh()}function M(){y.innerHTML=""}function b(){g.classList.add("visible")}function n(){g.classList.remove("visible")}function L(){h.classList.add("visible")}function m(){h.classList.remove("visible")}const O=document.querySelector("#search-form"),A=document.querySelector(".load-more");let d="",a=1,u=0;O.addEventListener("submit",async s=>{if(s.preventDefault(),d=s.target.search.value.trim(),!d){i.error({message:"Please enter a search term!"});return}a=1,u=0,M(),m(),b();try{const t=await p(d,a);if(u=t.totalHits,t.hits.length===0){i.info({message:"Sorry, there are no images matching your search query."}),n();return}v(t.hits),n(),a*f<u&&L()}catch(t){console.error(t),i.error({message:"Something went wrong. Please try again."}),n()}});A.addEventListener("click",async()=>{a+=1,b(),m();try{const s=await p(d,a);v(s.hits),n();const t=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),a*f>=u?(m(),i.info({message:"We're sorry, but you've reached the end of search results."})):L()}catch(s){console.error(s),i.error({message:"Something went wrong. Please try again."}),n()}});
//# sourceMappingURL=index.js.map
