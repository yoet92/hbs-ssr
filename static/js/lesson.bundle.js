(()=>{var e={117:e=>{e.exports=class{constructor(e={name:null,nodeId:null,type:null,children:null,accountId:null,courseInfo:null,picture:null,description:null,courseId:null,sectionId:null,lessonId:null,sections:null,lessons:null,link:null,url:null}){for(let t in e)this[t]=e[t]}}}},t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(117);document.getElementById("cards");const e=document.getElementById("goTop");let t=document.querySelector(".video-content iframe");const o=document.querySelector(".loader"),l=document.getElementById("accordionCourse"),s=document.querySelector(".video-content .actions"),c=document.getElementById("actionNext"),a=document.getElementById("actionPrevious");function d(e){o.style.display=e?null:"none",t.style.opacity=e?"0":"1",e&&s.classList.add("loading"),!e&&s.classList.remove("loading")}function i(){window.scrollY>550?e.classList.contains("show")||e.classList.add("show"):e.classList.remove("show")}function r(e){e.preventDefault(),window.scrollTo(0,0)}function u(e){const n=document.createElement("iframe");n.src=e,n.width="100%",n.height="100%",n.allowFullscreen=!0,n.title="lesson",n.addEventListener("load",(()=>d(!1))),t.replaceWith(n),t=n}function p(){const e={accountId:this.getAttribute("data-accountId"),courseId:this.getAttribute("data-courseId"),sectionId:this.getAttribute("data-sectionId"),lessonId:this.getAttribute("data-lessonId"),link:this.getAttribute("data-link")},t=[].slice.call(document.querySelectorAll(".accordion-body ul li span[data-lessonId]"));for(let e of t)e.classList.remove("active");if(this.classList.add("active"),localStorage.setItem("active",JSON.stringify(e)),d(!0),window.scrollTo(0,0),e.link)u(e.link);else{const{accountId:t,courseId:n,sectionId:o,lessonId:l}=e;(async function(e,t,n,o){try{const l=await fetch(`/api/embed?accountId=${e}&courseId=${t}&sectionId=${n}&lessonId=${o}`),{response:s}=await l.json();return s}catch(e){return null}})(t,n,o,l).then((e=>{e&&(u(e),this.setAttribute("data-link",e))}))}}function h(){const e=JSON.parse(localStorage.getItem("active")),t=document.querySelector(`.accordion-body ul li span[data-lessonId="${e.lessonId}"]`)?.parentNode?.parentNode?.nextElementSibling?.querySelector("span");t&&p.call(t)}function m(){const e=JSON.parse(localStorage.getItem("active")),t=document.querySelector(`.accordion-body ul li span[data-lessonId="${e.lessonId}"]`)?.parentNode?.parentNode?.previousElementSibling?.querySelector("span");t&&p.call(t)}window.onload=()=>{e.addEventListener("click",r),window.addEventListener("scroll",i),function(e=document,t,n,o){var l,s,c;l=Event.prototype,s=document,c=window,l.composedPath||(l.composedPath=function(){if(this.path)return this.path;var e=this.target;for(this.path=[];null!==e.parentNode;)this.path.push(e),e=e.parentNode;return this.path.push(s,c),this.path}),e.addEventListener(t,(function(e){let t=document.querySelectorAll(n),l=e.composedPath();for(let n=0,s=l.length;n<s;n++)for(let s=0,c=t.length;s<c;s++)l[n]===t[s]&&o.call(t[s],e)}),!0)}(l,"click",".accordion-body ul li span[data-lessonId]",p),c.addEventListener("click",h),a.addEventListener("click",m),p.call(document.querySelector(".accordion-body ul li span[data-lessonId]"))}})()})();