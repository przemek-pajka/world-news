/*! For license information please see main.bundle.js.LICENSE */
!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){var s=n(3),o=n(4),a=n(5);e.exports=function(e){return s(e)||o(e)||a()}},function(e,t,n){},function(e,t){!function(e){e.fn.jPushMenu=function(t){var n=e.extend({},e.fn.jPushMenu.defaultOptions,t);e("body").addClass(n.pushBodyClass),e(this).addClass("jPushMenuBtn"),e(this).click((function(t){t.stopPropagation();var s="",o="";e(this).is("."+n.showLeftClass)?(s=".cbp-spmenu-left",o="toright"):e(this).is("."+n.showRightClass)?(s=".cbp-spmenu-right",o="toleft"):e(this).is("."+n.showTopClass)?s=".cbp-spmenu-top":e(this).is("."+n.showBottomClass)&&(s=".cbp-spmenu-bottom"),""!=s&&(e(this).toggleClass(n.activeClass),e(s).toggleClass(n.menuOpenClass),e(this).is("."+n.pushBodyClass)&&""!=o&&e("body").toggleClass(n.pushBodyClass+"-"+o),e(".jPushMenuBtn").not(e(this)).toggleClass("disabled"))}));var s=function(t){e(".jPushMenuBtn,body,.cbp-spmenu").removeClass("disabled "+t.activeClass+" "+t.menuOpenClass+" "+t.pushBodyClass+"-toleft "+t.pushBodyClass+"-toright")};n.closeOnClickOutside&&e(document).click((function(){s(n)})),n.closeOnClickLink&&e(".cbp-spmenu a").on("click",(function(){s(n)}))},e.fn.jPushMenu.defaultOptions={pushBodyClass:"push-body",showLeftClass:"menu-left",showRightClass:"menu-right",showTopClass:"menu-top",showBottomClass:"menu-bottom",activeClass:"menu-active",menuOpenClass:"menu-open",closeOnClickOutside:!0,closeOnClickLink:!0}}(jQuery)},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,n){"use strict";n.r(t),n(1),n(2);var s=n(0),o=n.n(s);var a,i={articles:function(e){var t=e;return new Promise((function(e){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="json",n.send(),n.onload=function(){e(n.response.articles)}}))},articlesLinks:new Promise((function(e){var t=new XMLHttpRequest;t.open("GET","data.json"),t.responseType="json",t.send(),t.onload=function(){console.log(t.response.mediaLinks),e(t.response.mediaLinks)}}))},r=$(".media-company-link");i.articlesLinks.then((function(e){a=e})),$(r).click((function(){var e=$(this).attr("data-source-tag"),t=function(e,t){for(var n,s=0;s<e.length;s++)e[s].includes(t)&&(n=e[s]);return n}(a,e);i.articles(t).then((function(e){!function(e){ReactDOM.render(React.createElement((function(){var t;return t=e.map((function(e,t){return React.createElement("article",{key:t+1,className:"news-article-box col-sm-4 col-xs-6"},React.createElement("a",{key:t+2,className:"news-article-box__url",href:e.url},React.createElement("figure",{key:t+3,className:"news-article-box__image"},function(e){return e.urlToImage?React.createElement("img",{src:e.urlToImage}):React.createElement("img",{src:"../images/noImage.jpg"})}(e)),React.createElement("h3",{key:t+4,className:"news-article-box__title"},e.title),React.createElement("p",{key:t+5,className:"news-article-box__description"},e.description),React.createElement("div",{className:"news-article-box__post-details"},React.createElement("div",{key:t+6,className:"post-details__author"},e.author),React.createElement("div",{key:t+7,className:"post-details__date"},e.publishedAt))))})),o()(t),t}),null),document.getElementById("news-wrapper"))}(e)}))})),$(".toggle-menu").click((function(){$(".main-menu-nav__list").toggleClass("open"),$(".main-menu-nav__list > li.open").removeClass("open")})),$(".main-menu-nav__list li").click((function(e){$(".main-menu-nav__list > li.open").not(this).removeClass("open"),$(this).toggleClass("open")})),$(".main-menu-nav__list li a").click((function(e){e.preventDefault(),$(".main-menu-nav__list > li.open").removeClass("open"),$(".main-menu-nav__list").removeClass("open")}))}]);