import{a as P,S as q,i as a}from"./assets/vendor-Z6SuAarM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const B="https://pixabay.com/api/",$="54259802-cdd8f9ab8b839644c91fdf63a",m=15;async function f(s,t=1){return(await P.get(B,{params:{key:$,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:m}})).data}const p=document.querySelector(".gallery"),y=document.querySelector(".loader"),h=document.querySelector(".load-more"),E=new q(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const t=s.map(({webformatURL:i,largeImageURL:c,tags:e,likes:r,views:n,comments:w,downloads:S})=>`
      <li class="gallery-item">
        <a href="${c}">
          <img src="${i}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <span class="metric-label">Likes</span>
            <span class="metric-value">${r}</span>
          </div>
          <div class="info-item">
            <span class="metric-label">Views</span>
            <span class="metric-value">${n}</span>
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
    `).join("");p.insertAdjacentHTML("beforeend",t),E.refresh()}function M(){p.innerHTML=""}function v(){y.classList.add("visible")}function b(){y.classList.remove("visible")}function L(){h.classList.add("visible")}function u(){h.classList.remove("visible")}const O=document.querySelector(".form"),x=document.querySelector(".form input[name='search-text']"),A=document.querySelector(".load-more");let l="",o=1,d=0;O.addEventListener("submit",async s=>{if(s.preventDefault(),l=x.value.trim(),!l){a.error({message:"Please enter a search term!"});return}o=1,d=0,M(),u(),v();try{const t=await f(l,o);if(d=t.totalHits,t.hits.length===0){a.info({message:"Sorry, there are no images matching your search query."});return}g(t.hits),o*m>=d?(a.info({message:"We're sorry, but you've reached the end of search results."}),u()):L()}catch(t){console.error(t),a.error({message:"Something went wrong. Please try again."})}finally{b()}});A.addEventListener("click",async()=>{o+=1,v(),u();try{const s=await f(l,o);g(s.hits);const t=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),o*m>=d?(u(),a.info({message:"We're sorry, but you've reached the end of search results."})):L()}catch(s){console.error(s),a.error({message:"Something went wrong. Please try again."})}finally{b()}});
//# sourceMappingURL=index.js.map
