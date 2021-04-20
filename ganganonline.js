(()=>{"use strict";function t(t){return document.querySelector(`#downloader-setting .${t}`)}function n(t){return new Promise((n=>{const e=new XMLHttpRequest;e.open("GET",t),e.responseType="arraybuffer",e.onload=()=>n(e.response),e.send()}))}function e(t){return new Promise((n=>{const e=new FileReader;e.onloadend=()=>n(e.result),e.readAsDataURL(t)}))}function o(t=0){return new Promise((n=>setTimeout((()=>n()),t)))}let r=0,i=0;function a(){i=0}function s(){i=0,r++}function d(){r--,r<0&&(r=0),0===r&&a&&a()}const l=new WeakSet,c=[];!function(){const t=XMLHttpRequest.prototype.send,n=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(t,e,...o){return c.some((t=>e.startsWith(t)))&&l.add(this),n.call(this,t,e,...o)},XMLHttpRequest.prototype.send=function(...n){return l.has(this)||s(),this.addEventListener("readystatechange",(()=>{4===this.readyState&&(l.has(this)||d())})),t.call(this,...n)}}();const u=new Set;window.addEventListener("message",(t=>{const n=t.data;n&&("request-end"===n.type&&u.has(n.requestId)?(u.delete(n.requestId),d()):"request-start"===n.type&&(u.add(n.requestId),s()))}),!1);const p=window.fetch;window.fetch=async function(t,...n){const e="string"==typeof t?t:t.url,o=p.call(this,t,...n);c.some((t=>e.startsWith(t)))||(s(),o.finally((()=>d())));const r=await o;return["blob","arrayBuffer","text","json"].forEach((t=>{const n=Response.prototype[t];r[t]=function(){const t=n.call(this);return s(),t.finally((()=>d())),t}})),r};const h=[],f=CanvasRenderingContext2D.prototype.drawImage;async function g(n){if(n.startsWith("data:image/png")){const t=await new Promise((t=>{const e=new Image;e.onload=()=>t(e),e.src=n})),e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;const o=e.getContext("2d");f.call(o,t,0,0),n=e.toDataURL("image/jpeg")}for(let t=0;t<3;++t)if(h[h.length-1-t]===n)return!1;return a(),h.push(n),t("captureNum").textContent=`${h.length}`,t("preview").src=n,!0}function v(){return h}HTMLCanvasElement.prototype.toDataURL;var w=function(t){return URL.createObjectURL(new Blob([t],{type:"text/javascript"}))};try{URL.revokeObjectURL(w(""))}catch(t){w=function(t){return"data:application/javascript;charset=UTF-8,"+encodeURI(t)}}var y=Uint8Array,m=Uint16Array,b=Uint32Array,x=new y([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),L=new y([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),E=(new y([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),function(t,n){for(var e=new m(31),o=0;o<31;++o)e[o]=n+=1<<t[o-1];var r=new b(e[30]);for(o=1;o<30;++o)for(var i=e[o];i<e[o+1];++i)r[i]=i-e[o]<<5|o;return[e,r]}),k=E(x,2),R=k[0],U=k[1];R[28]=258,U[258]=28;for(var A=E(L,0),C=(A[0],A[1],new m(32768)),q=0;q<32768;++q){var S=(43690&q)>>>1|(21845&q)<<1;S=(61680&(S=(52428&S)>>>2|(13107&S)<<2))>>>4|(3855&S)<<4,C[q]=((65280&S)>>>8|(255&S)<<8)>>>1}var P=new y(288);for(q=0;q<144;++q)P[q]=8;for(q=144;q<256;++q)P[q]=9;for(q=256;q<280;++q)P[q]=7;for(q=280;q<288;++q)P[q]=8;var D=new y(32);for(q=0;q<32;++q)D[q]=5;var T=new y(0),I=function(){for(var t=new b(256),n=0;n<256;++n){for(var e=n,o=9;--o;)e=(1&e&&3988292384)^e>>>1;t[n]=e}return t}(),H=function(t,n,e){for(;e;++n)t[n]=e,e>>>=8},M="undefined"!=typeof TextEncoder&&new TextEncoder,j="undefined"!=typeof TextDecoder&&new TextDecoder;try{j.decode(T,{stream:!0})}catch(t){}function B(t,n){if(n){for(var e=new y(t.length),o=0;o<t.length;++o)e[o]=t.charCodeAt(o);return e}if(M)return M.encode(t);var r=t.length,i=new y(t.length+(t.length>>1)),a=0,s=function(t){i[a++]=t};for(o=0;o<r;++o){if(a+5>i.length){var d=new y(a+8+(r-o<<1));d.set(i),i=d}var l=t.charCodeAt(o);l<128||n?s(l):l<2048?(s(192|l>>6),s(128|63&l)):l>55295&&l<57344?(s(240|(l=65536+(1047552&l)|1023&t.charCodeAt(++o))>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|63&l)):(s(224|l>>12),s(128|l>>6&63),s(128|63&l))}return function(t,n,e){(null==n||n<0)&&(n=0),(null==e||e>t.length)&&(e=t.length);var o=new(t instanceof m?m:t instanceof b?b:y)(e-n);return o.set(t.subarray(n,e)),o}(i,0,a)}var z=function(t){var n=0;if(t)for(var e in t){var o=t[e].length;if(o>65535)throw"extra field too long";n+=o+4}return n},X=function(t,n,e,o,r,i,a,s){var d=o.length,l=e.extra,c=s&&s.length,u=z(l);H(t,n,null!=a?33639248:67324752),n+=4,null!=a&&(t[n++]=20,t[n++]=e.os),t[n]=20,n+=2,t[n++]=e.flag<<1|(null==i&&8),t[n++]=r&&8,t[n++]=255&e.compression,t[n++]=e.compression>>8;var p=new Date(null==e.mtime?Date.now():e.mtime),h=p.getFullYear()-1980;if(h<0||h>119)throw"date not in range 1980-2099";if(H(t,n,h<<25|p.getMonth()+1<<21|p.getDate()<<16|p.getHours()<<11|p.getMinutes()<<5|p.getSeconds()>>>1),n+=4,null!=i&&(H(t,n,e.crc),H(t,n+4,i),H(t,n+8,e.size)),H(t,n+12,d),H(t,n+14,u),n+=16,null!=a&&(H(t,n,c),H(t,n+6,e.attrs),H(t,n+10,a),n+=14),t.set(o,n),n+=d,u)for(var f in l){var g=l[f],v=g.length;H(t,n,+f),H(t,n+2,v),t.set(g,n+4),n+=4+v}return c&&(t.set(s,n),n+=c),n},W=function(){function t(t){var n;this.filename=t,this.c=(n=-1,{p:function(t){for(var e=n,o=0;o<t.length;++o)e=I[255&e^t[o]]^e>>>8;n=e},d:function(){return~n}}),this.size=0,this.compression=0}return t.prototype.process=function(t,n){this.ondata(null,t,n)},t.prototype.push=function(t,n){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(t),this.size+=t.length,n&&(this.crc=this.c.d()),this.process(t,n||!1)},t}(),$=function(){function t(t){this.ondata=t,this.u=[],this.d=1}return t.prototype.add=function(t){var n=this;if(2&this.d)throw"stream finished";var e=B(t.filename),o=e.length,r=t.comment,i=r&&B(r),a=o!=t.filename.length||i&&r.length!=i.length,s=o+z(t.extra)+30;if(o>65535)throw"filename too long";var d=new y(s);X(d,0,t,e,a);var l=[d],c=function(){for(var t=0,e=l;t<e.length;t++){var o=e[t];n.ondata(null,o,!1)}l=[]},u=this.d;this.d=0;var p=this.u.length,h=function(t,n){var e={};for(var o in t)e[o]=t[o];for(var o in n)e[o]=n[o];return e}(t,{f:e,u:a,o:i,t:function(){t.terminate&&t.terminate()},r:function(){if(c(),u){var t=n.u[p+1];t?t.r():n.d=1}u=1}}),f=0;t.ondata=function(e,o,r){if(e)n.ondata(e,o,r),n.terminate();else if(f+=o.length,l.push(o),r){var i=new y(16);H(i,0,134695760),H(i,4,t.crc),H(i,8,f),H(i,12,t.size),l.push(i),h.c=f,h.b=s+f+16,h.crc=t.crc,h.size=t.size,u&&h.r(),u=1}else u&&c()},this.u.push(h)},t.prototype.end=function(){var t=this;if(2&this.d){if(1&this.d)throw"stream finishing";throw"stream finished"}this.d?this.e():this.u.push({r:function(){1&t.d&&(t.u.splice(-1,1),t.e())},t:function(){}}),this.d=3},t.prototype.e=function(){for(var t=0,n=0,e=0,o=0,r=this.u;o<r.length;o++)e+=46+(d=r[o]).f.length+z(d.extra)+(d.o?d.o.length:0);for(var i=new y(e+22),a=0,s=this.u;a<s.length;a++){var d=s[a];X(i,t,d,d.f,d.u,d.c,n,d.o),t+=46+d.f.length+z(d.extra)+(d.o?d.o.length:0),n+=d.b}var l,c,u,p,h;l=i,c=t,u=this.u.length,p=e,h=n,H(l,c,101010256),H(l,c+8,u),H(l,c+10,u),H(l,c+12,p),H(l,c+16,h),this.ondata(null,i,!0),this.d=2},t.prototype.terminate=function(){for(var t=0,n=this.u;t<n.length;t++)n[t].t();this.d=2},t}();function O(t,n){t.addEventListener("mousedown",(t=>t.stopPropagation())),t.addEventListener("click",(e=>{e.stopPropagation(),t.classList.contains("disabled")||n()}))}URL.revokeObjectURL=()=>{},async function(e,a){await new Promise((t=>{"complete"===document.readyState||"interactive"===document.readyState?setTimeout((()=>t()),0):document.addEventListener("DOMContentLoaded",(()=>t()))}));const s=document.createElement("div");s.innerHTML='<div id="downloader-setting">\n  <style>\n    #downloader-setting {\n      position: fixed;\n      z-index: 99999;\n      top: 0;\n      right: 0;\n      padding: 16px;\n      margin: 12px;\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 0 5px lightgray;\n      color: black;\n    }\n    #downloader-setting img {\n      width: 220px !important;\n    }\n    #downloader-setting div {\n      padding: 6px 0;\n    }\n    #downloader-setting .button,\n    #downloader-setting .checkbox {\n      cursor: pointer;\n      padding: 10px 15px;\n      display: inline-block;\n    }\n    #downloader-setting .button {\n      border: 1px solid lightgray;\n    }\n    #downloader-setting .button.disabled {\n      cursor: default;\n      background-color: #E7E7E7;\n      color: #BBB;\n    }\n    #downloader-setting .checkbox > .box {\n      border: 1px solid grey;\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      margin-right: 8px;\n      vertical-align: middle;\n    }\n  </style>\n  <div>Captured images: <span class="captureNum"></span></div>\n  <div>Preview:<br /><img class="preview" /></div>\n  <div class="buttons">\n    <div class="save-container">\n      <div>\n        <div class="button auto">Auto Download All</div>\n      </div>\n      <div>\n        <div class="button auto-limit">Auto With Pages Limit</div>\n      </div>\n    </div>\n    <div class="l2r-container" style="display: none;">\n      <div class="checkbox l2r">\n        <div class="box"></div>\n        Left to Right\n      </div>\n    </div>\n    <div>\n      <div class="button download">Save</div>\n    </div>\n  </div>\n  <div class="auto-working" style="display: none">Automatically Downloading...</div>\n  <div class="progress" style="display:none">\n    Compress: <span class="current"></span> / <span class="total"></span>\n  </div>\n</div>\n',document.body.prepend(s);let d=null;const l=[0,0];async function c(n=1/0){t("buttons").style.display="none",t("auto-working").style.display="block",await async function(t,n){for(;;){if(i>=12||v().length>=n)return;if(await o(1e3),0===r)try{await t()&&(i=0),i++}catch(t){}}}(e,n),t("save-container").style.display="none",t("l2r-container").style.display="none",t("buttons").style.display="block",t("button.download").classList.remove("disabled"),t("auto-working").style.display="none",document.body.style.pointerEvents=""}document.getElementById("downloader-setting").addEventListener("mousedown",(t=>{d=[t.pageX,t.pageY]})),window.addEventListener("mouseup",(()=>{d=null})),window.addEventListener("mousemove",(t=>{if(d){const n=[t.pageX,t.pageY];l[0]+=n[0]-d[0],l[1]+=n[1]-d[1],document.getElementById("downloader-setting").style.transform=`translate(${l[0]}px, ${l[1]}px)`,d=n}})),O(t("auto"),(()=>c())),O(t("auto-limit"),(()=>{const t=window.prompt("How many pages?","10");null!==t&&c(parseInt(t,10))}));const u=t("l2r");O(u,(()=>{const t=u.querySelector(".box");t.style.background=t.style.background?"":"darkblue"})),O(t("download"),(async()=>{t("button.download").classList.add("disabled"),t("progress").style.display="inline-block",t("progress .total").textContent=v().length.toString(),t("progress .current").textContent="0";const e=await async function(e,o){return new Promise((o=>{const r=[],i=new $(((t,n,e)=>{if(!t&&(r.push(n),e)){const t=window.URL.createObjectURL(new Blob(r));o(t)}})),a=`${e.length}`.length;(async()=>{for(let r=0;r<e.length;++r){const s=new W(`${(r+1).toString().padStart(a,"0")}.jpg`);i.add(s),s.push(new Uint8Array(await n(e[r])),!0),o=`${r+1}`,t("progress .current").textContent=o}var o;i.end()})()}))}(v()),o=document.createElement("a");o.href=e,o.download=document.title+".zip",o.click(),t("progress").style.display="none",a&&a(),t("button.download").classList.remove("disabled")}))}((async()=>{const t=Array.from(document.querySelectorAll("#app div")).filter((t=>t.style.transform&&t.style.transform.includes("translate(0px, 0px) scale(1)")&&0===t.getBoundingClientRect().x))[0];if(!t)return;const n=Array.from(t.querySelectorAll("img"));for(const t of n){const n=t.src;if(t.src.startsWith("http"))continue;const o=await(await p(n)).blob();g(await e(o))}const o={pointerId:1,bubbles:!0,pointerType:"mouse",clientX:75,clientY:480};t.dispatchEvent(new PointerEvent("pointerdown",o)),t.dispatchEvent(new PointerEvent("pointerup",o))}))})();