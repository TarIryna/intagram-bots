parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../font/VisueltPro-Regular.woff":[["VisueltPro-Regular.97ef0387.woff","JOqE"],"JOqE"],"./../font/VisueltPro-Regular.woff2":[["VisueltPro-Regular.e0693cb9.woff2","cZn+"],"cZn+"],"./../font/VisueltPro-Medium.woff":[["VisueltPro-Medium.8d192b0c.woff","D5Vf"],"D5Vf"],"./../font/VisueltPro-Medium.woff2":[["VisueltPro-Medium.74d79358.woff2","g7bf"],"g7bf"],"/home/runner/work/intagram-bots/intagram-bots/src/images/base/main-bg-img-359.png":[["main-bg-img-359.3d647cbb.png","jEJk"],"jEJk"],"/home/runner/work/intagram-bots/intagram-bots/src/images/base/main-bg-img-359@2x.png":[["main-bg-img-359@2x.92e2ae25.png","Zs/Y"],"Zs/Y"],"/home/runner/work/intagram-bots/intagram-bots/src/images/base/main-bg-img-720.png":[["main-bg-img-720.d61ccb2e.png","Tlfy"],"Tlfy"],"/home/runner/work/intagram-bots/intagram-bots/src/images/base/main-bg-img-720@2x.png":[["main-bg-img-720@2x.9970e5d9.png","h7Ys"],"h7Ys"],"/home/runner/work/intagram-bots/intagram-bots/src/images/base/main-bg-img-1392.png":[["main-bg-img-1392.34141547.png","IrMj"],"IrMj"],"/home/runner/work/intagram-bots/intagram-bots/src/images/base/main-bg-img-1392@2x.png":[["main-bg-img-1392@2x.0c68dbb8.png","Ccyd"],"Ccyd"]}],"10wz":[function(require,module,exports) {
$(document).ready(function(){$(".carousel").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".carousel__nav"}),$(".carousel__nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".carousel",dots:!1,centerMode:!1,focusOnSelect:!0})});
},{}],"NTFb":[function(require,module,exports) {
!function(){for(var e=document.querySelectorAll(".section-questions__button"),t=document.querySelectorAll(".section-questions__answer"),n=function(n){e[n].addEventListener("click",function(){var o="true"===e[n].getAttribute("area-expanded")||"false";e[n].classList.toggle("is-open"),e[n].getAttribute("area-expanded",!o),t[n].classList.toggle("is-open")})},o=0;o<e.length;o+=1)n(o)}();
},{}],"w5eS":[function(require,module,exports) {
var e=document.getElementsByClassName("section-reviews__button"),s=document.getElementsByClassName("section-reviews__list"),t=document.getElementsByClassName("section-reviews__item--position-oleg"),i=document.getElementsByClassName("section-reviews__item--position-semen"),o=document.getElementsByClassName("section-reviews__item--position-serega"),n=document.getElementsByClassName("section-reviews__item--position-inocentiy"),m=document.getElementsByClassName("section-reviews__message");e[0].onclick=function(){s[0].classList.add("section-reviews__list--structured"),t[0].classList.remove("section-reviews__item--position-oleg"),i[0].classList.remove("section-reviews__item--position-semen"),o[0].classList.remove("section-reviews__item--position-serega"),n[0].classList.remove("section-reviews__item--position-inocentiy"),e[0].classList.add("section-reviews__button--close"),m[0].classList.add("section-reviews__message--open")};
},{}],"sByI":[function(require,module,exports) {
!function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=document.querySelector(".js-close-mob-menu"),c=document.querySelector(".js-menu-button"),d=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),c.classList.toggle("is-open");var o=document.documentElement.clientWidth;bodyScrollLock[!n&&o<1440?"disableBodyScroll":"enableBodyScroll"](document.body)};t.addEventListener("click",d),n.addEventListener("click",d),o.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})}();
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/slider.js"),require("./js/questions.js"),require("./js/structured.js"),require("./js/mobile-menu.js");
},{"./sass/main.scss":"clu1","./js/slider.js":"10wz","./js/questions.js":"NTFb","./js/structured.js":"w5eS","./js/mobile-menu.js":"sByI"}]},{},["Focm"], null)
//# sourceMappingURL=/intagram-bots/src.2a21324e.js.map