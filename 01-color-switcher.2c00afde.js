!function(){"use strict";var t=document.querySelector("body"),e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),d=null;a.disabled=!0,e.addEventListener("click",(function(){d=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!0,a.disabled=!1})),a.addEventListener("click",(function(){clearInterval(d),a.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.2c00afde.js.map
