!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body"),a=null;function d(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));n.style.backgroundColor=e}e.addEventListener("click",(function(){a=setInterval(d,1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(a),e.disabled=!1,t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.dbcf8e29.js.map
