const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");console.log(d);let l=null;e.addEventListener("click",(()=>{l=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,e.disabled=!0,t.disabled=!1}),1e3)})),t.addEventListener("click",(()=>{clearInterval(l),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.0f3758f3.js.map
