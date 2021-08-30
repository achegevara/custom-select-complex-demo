(()=>{"use strict";function e(e,n){var l="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!l){if(Array.isArray(e)||(l=function(e,n){if(e){if("string"==typeof e)return t(e,n);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){l&&(e=l);var c=0,r=function(){};return{s:r,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){l=l.call(e)},n:function(){var e=l.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==l.return||l.return()}finally{if(a)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}!function(){function t(t){var l,c=[],r=e(t.options);try{for(r.s();!(l=r.n()).done;){var o=l.value,s={text:o.text,childList:[],value:o.value};o.dataset.level?c.length>0&&n(c[c.length-1],parseInt(o.dataset.level)).childList.push(s):c.push(s)}}catch(e){r.e(e)}finally{r.f()}return c}function n(e,t){var n=e;for(--t;--t;){var l=n.childList;n=l[l.length-1]}return n}function l(t){var n,c=document.createElement("ul"),r=e(t);try{for(r.s();!(n=r.n()).done;){var o=n.value,s=document.createElement("li");if(s.classList.add("selectWindow__list-item"),s.insertAdjacentHTML("afterbegin",'<label class="checkbox">\n                                                  <input value="'.concat(o.value,'" type="checkbox" class="checkbox__input">\n                                                  <div class="checkbox__state">\n                                                      <div class="checkbox__control">\n                                                          <svg class="checkbox__icon" width="13" height="13" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                                              <path d="M1.71484 7.92681L5.60056 10.9913L10.4577 3.33011" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\n                                                          </svg>    \n                                                      </div>\n                                                  </div>\n                                                  <span class="checkbox__legend selectWindow__list-item-text">\n                                                  ').concat(o.text,"\n                                                </span>\n                                              </label>")),o.childList.length>0){var a=l(o.childList);a&&s.append(a)}c.classList.add("selectWindow__sublist"),c.append(s)}}catch(e){r.e(e)}finally{r.f()}return c}function c(e){var t=e.currentTarget.closest(".selectWindow__list-item").querySelector(".selectWindow__sublist");e.stopPropagation(),e.target.classList.contains("checkbox")||t&&(t.classList.toggle("visible"),t.classList.contains("visible")?e.currentTarget.closest(".selectWindow__list-item").querySelector(".selectWindow__arrow").innerHTML='<svg class="arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M3 8L5.92468 5L9 8" stroke="black" stroke-linejoin="round"/>\n            </svg>':e.currentTarget.closest(".selectWindow__list-item").querySelector(".selectWindow__arrow").innerHTML='<svg class="arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M3 5L5.92468 8L9 5" stroke="black" stroke-linejoin="round"/>\n            </svg>')}function r(t){var n=t.target.closest(".checkbox").querySelector(".checkbox__input"),l=n.closest(".selectWindow__list-item").querySelectorAll(".checkbox__input");n.checked=!n.checked;var c,r=e(l);try{for(r.s();!(c=r.n()).done;){var o=c.value;n.checked?o.checked=!0:o.checked=!1}}catch(e){r.e(e)}finally{r.f()}}function o(e){document.querySelectorAll(".selectWindow_visible").forEach((function(e){return e.classList.remove("selectWindow_visible")})),e.target.closest(".container").querySelector(".selectWindow").classList.toggle("selectWindow_visible")}function s(e){document.querySelectorAll(".selectWindow_visible").forEach((function(e){return e.classList.remove("selectWindow_visible")})),e.target.parentNode.querySelector(".selectWindow").classList.toggle("selectWindow_visible")}function a(e){e.target.closest(".selectWindow").classList.remove("selectWindow_visible")}function i(t){var n,l=t.target.closest(".container"),c=[],r=e(l.querySelectorAll(".checkbox__input"));try{for(r.s();!(n=r.n()).done;){var o=n.value;1==o.checked&&c.push(o)}}catch(e){r.e(e)}finally{r.f()}var s=l.querySelector(".selectField");if(c.length>0){var a=c[0].closest(".selectWindow__list-item").querySelector(".selectWindow__list-item-text").textContent;s.textContent=a,s.classList.add("selectField_some-selected")}else s.textContent="Пока ничего не выбрано",s.classList.remove("selectField_some-selected");l.querySelector(".header__button_showSelected").textContent="Показать выбранное (".concat(c.length,")"),l.querySelector(".selectWindow").classList.remove("selectWindow_visible"),d()}function d(){var t,n=e(document.querySelectorAll(".container"));try{for(n.s();!(t=n.n()).done;){var l,c=e(t.value.querySelectorAll(".selectWindow__list-item"));try{for(c.s();!(l=c.n()).done;){var r=l.value;1==r.querySelector(".checkbox__input").checked?r.style.background="linear-gradient(0deg, rgba(3, 91, 119, 0.05), rgba(3, 91, 119, 0.05)), #FFFFFF":r.style.background="transparent"}}catch(e){c.e(e)}finally{c.f()}}}catch(e){n.e(e)}finally{n.f()}}function u(t){var n,l=e(t.target.closest(".container").querySelector(".selectWindow__clear-button").closest(".selectWindow").querySelectorAll(".checkbox__input"));try{for(l.s();!(n=l.n()).done;)n.value.checked=!1}catch(e){l.e(e)}finally{l.f()}}function v(e){for(var t,n=[],l=e&&e.options,c=0;c<l.length;c++)(t=l[c]).selected&&n.push(t.value||t.text);return n}function _(t){if(t.target==document){var n,l=e(document.querySelectorAll(".container"));try{for(l.s();!(n=l.n()).done;)c(n.value)}catch(e){l.e(e)}finally{l.f()}}else c(t.target.closest(".container"));function c(t){var n,l=v(t.querySelector(".multiSelect")),c=e(t.querySelectorAll(".checkbox__input"));try{for(c.s();!(n=c.n()).done;){var r=n.value;l.includes(r.value)?r.checked=!0:r.checked=!1}}catch(e){c.e(e)}finally{c.f()}var o=new Event("click");t.querySelector(".selectWindow__apply-button").dispatchEvent(o)}}!function(){var n,c=e(document.querySelectorAll(".multiSelect"));try{for(c.s();!(n=c.n()).done;){var r=n.value,o=t(r),s=document.createElement("div");s.classList.add("container"),document.body.append(s),s.append(r);var a=document.createElement("p");a.classList.add("header__title"),a.textContent="Выбор мультфильмов";var i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("header__button_showSelected");var d=s.querySelector(".multiSelect");i.textContent="Показать выбранное (".concat(v(d).length,")");var u=document.createElement("div");u.classList.add("header"),u.append(a),u.append(i),s.append(u);var _=document.createElement("div");_.classList.add("selectField"),_.textContent="Пока ничего не выбрано",s.append(_);var h=document.createElement("div");h.classList.add("selectWindow");var f=document.createElement("div");f.classList.add("selectWindow__header"),h.append(f);var w=document.createElement("div");w.classList.add("selectWindow__title"),w.innerHTML='<svg class="selectWindow__back-arrow" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                    <path d="M10 2.68524L3 11.8787M3 11.8787L10 21.0721M3 11.8787H18" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>\n                                  </svg>\n                              <p>Выбор мультфильмов</p>',f.append(w);var y=document.createElement("input");y.classList.add("selectWindow__searchField"),y.setAttribute("type","text"),f.append(y),h.append(l(o));var p=document.createElement("button");p.setAttribute("type","button"),p.classList.add("selectWindow__apply-button");var m=document.createElement("span");m.textContent="Применить",m.classList.add("selectWindow__apply-button-text"),p.append(m);var b=document.createElement("button");b.setAttribute("type","button"),b.classList.add("selectWindow__clear-button"),b.textContent="Очистить";var g=document.createElement("div");g.classList.add("selectWindow__buttons-wrapper"),h.append(g),g.append(p),g.append(b),s.append(h);var L=h.querySelectorAll("ul");L[0].classList.remove("selectWindow__sublist"),L[0].classList.add("selectWindow__list")}}catch(e){c.e(e)}finally{c.f()}}(),function(){var t,n=e(document.querySelectorAll(".selectWindow__list-item"));try{for(n.s();!(t=n.n()).done;){var l=t.value;l.closest(".selectWindow__list-item").querySelector(".selectWindow__sublist")&&l.insertAdjacentHTML("afterbegin",'<svg class="selectWindow__arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                                  <path d="M3 5L5.92468 8L9 5" stroke="black" stroke-linejoin="round"/>\n                                                </svg>')}}catch(e){n.e(e)}finally{n.f()}}(),function(){var t,n=e(document.querySelectorAll(".container"));try{for(n.s();!(t=n.n()).done;){var l=t.value;l.querySelector(".header__button_showSelected").addEventListener("click",o),l.querySelector(".selectField").addEventListener("click",s),l.querySelector(".selectWindow__back-arrow").addEventListener("click",a),l.querySelector(".selectWindow__apply-button").addEventListener("click",i);var v,h=e(l.querySelectorAll(".checkbox__input"));try{for(h.s();!(v=h.n()).done;)v.value.addEventListener("change",d)}catch(e){h.e(e)}finally{h.f()}l.querySelector(".selectWindow__clear-button").addEventListener("click",u),l.querySelector(".multiSelect").addEventListener("change",_);var f,w=e(l.querySelectorAll(".selectWindow__list-item-text"));try{for(w.s();!(f=w.n()).done;)f.value.addEventListener("click",c)}catch(e){w.e(e)}finally{w.f()}var y,p=e(l.querySelectorAll(".selectWindow__arrow"));try{for(p.s();!(y=p.n()).done;)y.value.addEventListener("click",c)}catch(e){p.e(e)}finally{p.f()}var m,b=e(l.querySelectorAll(".checkbox"));try{for(b.s();!(m=b.n()).done;)m.value.addEventListener("click",r)}catch(e){b.e(e)}finally{b.f()}}}catch(e){n.e(e)}finally{n.f()}}(),window.onload=_}()})();
//# sourceMappingURL=bundle.js.map