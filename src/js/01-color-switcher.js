'use strict';

const body = document.querySelector("body")
const star = document.querySelector("[data-start]")
const stop = document.querySelector("[data-stop]");
let a = null;
stop.disabled = !0,
star.addEventListener("click", (()=>{
    a = setInterval((()=>{
        body.style.backgroundColor = `#${Math.floor(16777215 * Math.random()).toString(16).padStart(6, 0)}`
    }
    ), 1e3),
    star.disabled = !0,
    stop.disabled = !1
}
)),
stop.addEventListener("click", (()=>{
    clearInterval(a),
    stop.disabled = !0,
    star.disabled = !1
}
));


