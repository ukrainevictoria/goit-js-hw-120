import{a as S,S as q,i as u}from"./assets/vendor-Z6SuAarM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const P="https://pixabay.com/api/",v="54259802-cdd8f9ab8b839644c91fdf63a",E=15;async function f(o,t=1){return(await S.get(P,{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:E}})).data}const y=document.querySelector(".gallery"),$=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(({webformatURL:i,largeImageURL:c,tags:e,likes:r,views:s,comments:L,downloads:w})=>`
        <li class="gallery-item">
          <a href="${c}">
            <img
              src="${i}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <p class="info">
            <span><b>Likes:</b> ${r}</span>
            <span><b>Views:</b> ${s}</span>
            <span><b>Comments:</b> ${L}</span>
            <span><b>Downloads:</b> ${w}</span>
          </p>
        </li>
      `).join("");y.insertAdjacentHTML("beforeend",t),$.refresh()}function B(){y.innerHTML=""}function p(){document.querySelector(".loader").classList.remove("hidden")}function n(){document.querySelector(".loader").classList.add("hidden")}function g(){document.querySelector(".load-more").classList.remove("hidden")}function m(){document.querySelector(".load-more").classList.add("hidden")}const A=document.querySelector("#search-form"),M=document.querySelector(".load-more");let l="",a=1,d=0;const b=15;A.addEventListener("submit",async o=>{if(o.preventDefault(),l=o.target.search.value.trim(),!!l){a=1,d=0,B(),m(),p();try{const t=await f(l,a);if(d=t.totalHits,t.hits.length===0){u.error({message:"Sorry, there are no images matching your search query."}),n();return}h(t.hits),n(),a*b<d&&g()}catch{u.error({message:"Something went wrong. Please try again."}),n()}}});M.addEventListener("click",async()=>{a+=1,p(),m();try{const o=await f(l,a);h(o.hits),n();const t=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),a*b>=d?(m(),u.info({message:"We're sorry, but you've reached the end of search results."})):g()}catch{u.error({message:"Something went wrong. Please try again."}),n()}});
//# sourceMappingURL=index.js.map
