!function(){"use strict";var r=window.location,i=window.document,o=i.currentScript,l=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event";function c(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(r.hostname)||"file:"===r.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return c("localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:r.href,n.d=o.getAttribute("data-domain"),n.r=i.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=JSON.stringify(e.props));var a=new XMLHttpRequest;a.open("POST",l,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4==a.readyState&&e&&e.callback&&e.callback()}}}function e(t){for(var e=t.target,n="auxclick"==t.type&&2==t.which,a="click"==t.type;e&&(void 0===e.tagName||"a"!=e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.host&&e.host!==r.host&&((n||a)&&plausible("Outbound Link: Click",{props:{url:e.href}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!a||(setTimeout(function(){r.href=e.href},150),t.preventDefault()))}i.addEventListener("click",e),i.addEventListener("auxclick",e);var n=window.plausible&&window.plausible.q||[];window.plausible=t;for(var a=0;a<n.length;a++)t.apply(this,n[a])}();