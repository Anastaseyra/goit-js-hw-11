import{S as p,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const u=i=>{const r=`https://pixabay.com/api/?${new URLSearchParams({key:"47683797-671cdc264b1a4ae65b7ce6d71",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(r,{method:"GET",headers:{Accept:"application/json",Host:"http://localhost:5173",Origin:"https://pixabay.com/api"}}).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},f=i=>i.map(t=>`<li class='gallery-item'>
      <a href=${t.largeImageURL}>
        <img alt=${t.tags} src=${t.webformatURL} class='gallery-image'/>
      </a>
      <ul class='list'>
        <li class='item-info'>
          <p class='list-title'>Likes</p>
          <p class='list-count'>${t.likes}</p>
        </li>
        <li class='list-item'>
          <p class='list-title'>Views</p>
          <p class='list-count'>${t.views}</p>
        </li>
        <li class='list-item'>
          <p class='list-title'>Comments</p>
          <p class='list-count'>${t.comments}</p>
        </li>
        <li class='list-item'>
          <p class='list-title'>Downloads</p>
          <p class='list-count'>${t.downloads}</p>
        </li>
      </ul>
    </li>
  `).join(""),m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHsSURBVHgB1ZrRTcMwEIbPiKivXYlJOgJsQNmAjRiBUehjm0Q1OcFBXNLUd/4vMZ9UqYqay//VaXxOE8hA27aPRGE/vN0SiBhpv9k0L6TkjpScTt3zEP6VgOGZEGj/VVu5n+bDfAA+EDliHYmbcPi27eLo9R5jLB4FrsG1xrUtIzGLV3jBVcI7vOAisVR4ASqxdHgBIrFWeKFIYu3wgkmilvCCSqK28EKWRK3hhVkJa/i+73dDU7ejQnLrTEkcj0NTaQ9fPtmkX55J4iPpRpvm/iGEcCAF1i7S0hhyNs442rRNRoAUdF166mkkLk9brkUKksxWAatEaXiogFYCER4ukCuBCu8icEsCGd5N4JoEOryrAE1IoMMzrgLMlAQqPDOuq76tksP5nLcNAnoEJnqrrEusBrdTaOoHWzJjLyowd7VBS8AFci6VSAmogOY6j5KACVgmKYQERKBkhi2VuCqQuw4er8i04a9J5C5Pv1dlyUR2+C3av2kX87yqahr97XDeR7si42ycMdnI/7ZcTDj/ZlH/M/ITvUv1t1X+nLa1SmSFF2qTUIUXapEwhRfWligKL6wlAQkvLC0BDS8sJeESXvCWcA0veEmUhlc9asCF+VEAckTbW6kEGE8JS2Oovq1i6SIzGDri+GTpaj8B7XwkGZe8ZwQAAAAASUVORK5CYII=",A=document.querySelector(".form"),a=document.querySelector("ul.gallery"),l=document.querySelector(".loader");let d=new p(".galery a",{captionsData:"alt",captionDelay:250});n.settings({timeout:4e3,position:"topRight"});const h=i=>{i.preventDefault(),a.innerHTML="",l.style.display="block";const t=i.target.elements.search.value.trim();if(t===""){n.error({iconUrl:m,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search"}),a.innerHTML="",l.style.display="none";return}u(t).then(({hits:r})=>{a.innerHTML="";const o=f(r);o&&(l.style.display="none"),r.length===0&&(n.error({iconUrl:m,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),l.style.display="none",a.innerHTML=""),a.innerHTML=o,d.refresh(),A.reset()}).catch(r=>{console.log(r),a.innerHTML="",n.error({iconUrl:m,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:r})})};A.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
