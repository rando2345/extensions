(()=>{"use strict";function t(t){return document.querySelector(`#downloader-setting .${t}`)}function n(t){return new Promise((n=>{const e=new XMLHttpRequest;e.open("GET",t),e.responseType="arraybuffer",e.onload=()=>n(e.response),e.send()}))}function e(t=0){return new Promise((n=>setTimeout((()=>n()),t)))}let o=0,r=0;function i(){r=0}function a(){r=0,o++}function s(){o--,o<0&&(o=0),0===o&&i&&i()}const d=new WeakSet,c=[];!function(){const t=XMLHttpRequest.prototype.send,n=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(t,e,...o){return c.some((t=>e.startsWith(t)))&&d.add(this),n.call(this,t,e,...o)},XMLHttpRequest.prototype.send=function(...n){return d.has(this)||a(),this.addEventListener("readystatechange",(()=>{4===this.readyState&&(d.has(this)||s())})),t.call(this,...n)}}();const l=new Set;window.addEventListener("message",(t=>{const n=t.data;n&&("request-end"===n.type&&l.has(n.requestId)?(l.delete(n.requestId),s()):"request-start"===n.type&&(l.add(n.requestId),a()))}),!1);const u=window.fetch;window.fetch=async function(t,...n){const e="string"==typeof t?t:t.url,o=u.call(this,t,...n);c.some((t=>e.startsWith(t)))||(a(),o.finally((()=>s())));const r=await o;return["blob","arrayBuffer","text","json"].forEach((t=>{const n=Response.prototype[t];r[t]=function(){const t=n.call(this);return a(),t.finally((()=>s())),t}})),r};const h=[],p=CanvasRenderingContext2D.prototype.drawImage;async function f(n){if(n.startsWith("data:image/png")){const t=await new Promise((t=>{const e=new Image;e.onload=()=>t(e),e.src=n})),e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;const o=e.getContext("2d");p.call(o,t,0,0),n=e.toDataURL("image/jpeg",1)}for(let t=0;t<3;++t)if(h[h.length-1-t]===n)return!1;return i(),h.push(n),t("captureNum").textContent=`${h.length}`,t("preview").src=n,!0}function g(){return h}const w=HTMLCanvasElement.prototype.toDataURL;var v=function(t){return URL.createObjectURL(new Blob([t],{type:"text/javascript"}))};try{URL.revokeObjectURL(v(""))}catch(t){v=function(t){return"data:application/javascript;charset=UTF-8,"+encodeURI(t)}}var y=Uint8Array,m=Uint16Array,b=Uint32Array,x=new y([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),L=new y([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),k=(new y([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),function(t,n){for(var e=new m(31),o=0;o<31;++o)e[o]=n+=1<<t[o-1];var r=new b(e[30]);for(o=1;o<30;++o)for(var i=e[o];i<e[o+1];++i)r[i]=i-e[o]<<5|o;return[e,r]}),R=k(x,2),E=R[0],C=R[1];E[28]=258,C[258]=28;for(var S=k(L,0),U=(S[0],S[1],new m(32768)),q=0;q<32768;++q){var A=(43690&q)>>>1|(21845&q)<<1;A=(61680&(A=(52428&A)>>>2|(13107&A)<<2))>>>4|(3855&A)<<4,U[q]=((65280&A)>>>8|(255&A)<<8)>>>1}var D=new y(288);for(q=0;q<144;++q)D[q]=8;for(q=144;q<256;++q)D[q]=9;for(q=256;q<280;++q)D[q]=7;for(q=280;q<288;++q)D[q]=8;var I=new y(32);for(q=0;q<32;++q)I[q]=5;var j=new y(0),P=function(){for(var t=new b(256),n=0;n<256;++n){for(var e=n,o=9;--o;)e=(1&e&&3988292384)^e>>>1;t[n]=e}return t}(),T=function(t,n,e){for(;e;++n)t[n]=e,e>>>=8},z="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(j,{stream:!0})}catch(t){}function M(t,n){if(n){for(var e=new y(t.length),o=0;o<t.length;++o)e[o]=t.charCodeAt(o);return e}if(z)return z.encode(t);var r=t.length,i=new y(t.length+(t.length>>1)),a=0,s=function(t){i[a++]=t};for(o=0;o<r;++o){if(a+5>i.length){var d=new y(a+8+(r-o<<1));d.set(i),i=d}var c=t.charCodeAt(o);c<128||n?s(c):c<2048?(s(192|c>>6),s(128|63&c)):c>55295&&c<57344?(s(240|(c=65536+(1047552&c)|1023&t.charCodeAt(++o))>>18),s(128|c>>12&63),s(128|c>>6&63),s(128|63&c)):(s(224|c>>12),s(128|c>>6&63),s(128|63&c))}return function(t,n,e){(null==n||n<0)&&(n=0),(null==e||e>t.length)&&(e=t.length);var o=new(t instanceof m?m:t instanceof b?b:y)(e-n);return o.set(t.subarray(n,e)),o}(i,0,a)}var B=function(t){var n=0;if(t)for(var e in t){var o=t[e].length;if(o>65535)throw"extra field too long";n+=o+4}return n},W=function(t,n,e,o,r,i,a,s){var d=o.length,c=e.extra,l=s&&s.length,u=B(c);T(t,n,null!=a?33639248:67324752),n+=4,null!=a&&(t[n++]=20,t[n++]=e.os),t[n]=20,n+=2,t[n++]=e.flag<<1|(null==i&&8),t[n++]=r&&8,t[n++]=255&e.compression,t[n++]=e.compression>>8;var h=new Date(null==e.mtime?Date.now():e.mtime),p=h.getFullYear()-1980;if(p<0||p>119)throw"date not in range 1980-2099";if(T(t,n,p<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>>1),n+=4,null!=i&&(T(t,n,e.crc),T(t,n+4,i),T(t,n+8,e.size)),T(t,n+12,d),T(t,n+14,u),n+=16,null!=a&&(T(t,n,l),T(t,n+6,e.attrs),T(t,n+10,a),n+=14),t.set(o,n),n+=d,u)for(var f in c){var g=c[f],w=g.length;T(t,n,+f),T(t,n+2,w),t.set(g,n+4),n+=4+w}return l&&(t.set(s,n),n+=l),n},X=function(){function t(t){var n;this.filename=t,this.c=(n=-1,{p:function(t){for(var e=n,o=0;o<t.length;++o)e=P[255&e^t[o]]^e>>>8;n=e},d:function(){return~n}}),this.size=0,this.compression=0}return t.prototype.process=function(t,n){this.ondata(null,t,n)},t.prototype.push=function(t,n){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(t),this.size+=t.length,n&&(this.crc=this.c.d()),this.process(t,n||!1)},t}(),$=function(){function t(t){this.ondata=t,this.u=[],this.d=1}return t.prototype.add=function(t){var n=this;if(2&this.d)throw"stream finished";var e=M(t.filename),o=e.length,r=t.comment,i=r&&M(r),a=o!=t.filename.length||i&&r.length!=i.length,s=o+B(t.extra)+30;if(o>65535)throw"filename too long";var d=new y(s);W(d,0,t,e,a);var c=[d],l=function(){for(var t=0,e=c;t<e.length;t++){var o=e[t];n.ondata(null,o,!1)}c=[]},u=this.d;this.d=0;var h=this.u.length,p=function(t,n){var e={};for(var o in t)e[o]=t[o];for(var o in n)e[o]=n[o];return e}(t,{f:e,u:a,o:i,t:function(){t.terminate&&t.terminate()},r:function(){if(l(),u){var t=n.u[h+1];t?t.r():n.d=1}u=1}}),f=0;t.ondata=function(e,o,r){if(e)n.ondata(e,o,r),n.terminate();else if(f+=o.length,c.push(o),r){var i=new y(16);T(i,0,134695760),T(i,4,t.crc),T(i,8,f),T(i,12,t.size),c.push(i),p.c=f,p.b=s+f+16,p.crc=t.crc,p.size=t.size,u&&p.r(),u=1}else u&&l()},this.u.push(p)},t.prototype.end=function(){var t=this;if(2&this.d){if(1&this.d)throw"stream finishing";throw"stream finished"}this.d?this.e():this.u.push({r:function(){1&t.d&&(t.u.splice(-1,1),t.e())},t:function(){}}),this.d=3},t.prototype.e=function(){for(var t=0,n=0,e=0,o=0,r=this.u;o<r.length;o++)e+=46+(d=r[o]).f.length+B(d.extra)+(d.o?d.o.length:0);for(var i=new y(e+22),a=0,s=this.u;a<s.length;a++){var d=s[a];W(i,t,d,d.f,d.u,d.c,n,d.o),t+=46+d.f.length+B(d.extra)+(d.o?d.o.length:0),n+=d.b}var c,l,u,h,p;c=i,l=t,u=this.u.length,h=e,p=n,T(c,l,101010256),T(c,l+8,u),T(c,l+10,u),T(c,l+12,h),T(c,l+16,p),this.ondata(null,i,!0),this.d=2},t.prototype.terminate=function(){for(var t=0,n=this.u;t<n.length;t++)n[t].t();this.d=2},t}();function O(t,n){t.addEventListener("mousedown",(t=>t.stopPropagation())),t.addEventListener("click",(e=>{e.stopPropagation(),t.classList.contains("disabled")||n()}))}URL.revokeObjectURL=()=>{},location.host.endsWith(".shonenmagazine.com")||Object.freeze(window.location),window.history.pushState=()=>{throw"stop"};const F=CanvasRenderingContext2D.prototype.drawImage;async function Y(t){const n=t.querySelector("canvas"),e=t.querySelector("img");if(n)return async function(t){if(t.width<=300&&t.height<=150)return;const n=t&&w.call(t,"image/jpeg",1)||"";await f(n)}(n);if(e){const t=e.src,n=await(await u(t)).blob();return f(await function(t){return new Promise((n=>{const e=new FileReader;e.onloadend=()=>n(e.result),e.readAsDataURL(t)}))}(n))}return!1}CanvasRenderingContext2D.prototype.drawImage=function(t,...n){if(!n.some((t=>t<0)))return F.call(this,t,...n)},async function(i,a){await new Promise((t=>{"complete"===document.readyState||"interactive"===document.readyState?setTimeout((()=>t()),0):document.addEventListener("DOMContentLoaded",(()=>t()))}));const s=document.createElement("div");s.innerHTML='<div id="downloader-setting">\n  <style>\n    #downloader-setting {\n      position: fixed;\n      z-index: 99999;\n      top: 0;\n      right: 0;\n      padding: 16px;\n      margin: 12px;\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 0 5px lightgray;\n      color: black;\n    }\n    #downloader-setting img {\n      width: 220px !important;\n    }\n    #downloader-setting div {\n      padding: 6px 0;\n    }\n    #downloader-setting .button,\n    #downloader-setting .checkbox {\n      cursor: pointer;\n      padding: 10px 15px;\n      display: inline-block;\n    }\n    #downloader-setting .button {\n      border: 1px solid lightgray;\n    }\n    #downloader-setting .button.disabled {\n      cursor: default;\n      background-color: #E7E7E7;\n      color: #BBB;\n    }\n    #downloader-setting .checkbox > .box {\n      border: 1px solid grey;\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      margin-right: 8px;\n      vertical-align: middle;\n    }\n  </style>\n  <div>Captured images: <span class="captureNum"></span></div>\n  <div>Preview:<br /><img class="preview" /></div>\n  <div class="buttons">\n    <div class="save-container">\n      <div>\n        <div class="button auto">Auto Download All</div>\n      </div>\n      <div>\n        <div class="button auto-limit">Auto With Pages Limit</div>\n      </div>\n    </div>\n    <div class="l2r-container" style="display: none;">\n      <div class="checkbox l2r">\n        <div class="box"></div>\n        Left to Right\n      </div>\n    </div>\n    <div>\n      <div class="button download">Save</div>\n    </div>\n  </div>\n  <div class="auto-working" style="display: none">Automatically Downloading...</div>\n  <div class="progress" style="display:none">\n    Compress: <span class="current"></span> / <span class="total"></span>\n  </div>\n</div>\n',document.body.prepend(s);let d=null;const c=[0,0];async function l(n=1/0){t("buttons").style.display="none",t("auto-working").style.display="block",await async function(t,n){for(;;){if(r>=12||g().length>=n)return;if(await e(1e3),0===o)try{await t()&&(r=0),r++}catch(t){}}}(i,n),t("save-container").style.display="none",t("l2r-container").style.display="none",t("buttons").style.display="block",t("button.download").classList.remove("disabled"),t("auto-working").style.display="none",document.body.style.pointerEvents=""}document.getElementById("downloader-setting").addEventListener("mousedown",(t=>{d=[t.pageX,t.pageY]})),window.addEventListener("mouseup",(()=>{d=null})),window.addEventListener("mousemove",(t=>{if(d){const n=[t.pageX,t.pageY];c[0]+=n[0]-d[0],c[1]+=n[1]-d[1],document.getElementById("downloader-setting").style.transform=`translate(${c[0]}px, ${c[1]}px)`,d=n}})),O(t("auto"),(()=>l())),O(t("auto-limit"),(()=>{const t=window.prompt("How many pages?","10");null!==t&&l(parseInt(t,10))}));const u=t("l2r");O(u,(()=>{const t=u.querySelector(".box");t.style.background=t.style.background?"":"darkblue"})),O(t("download"),(async()=>{t("button.download").classList.add("disabled"),t("progress").style.display="inline-block",t("progress .total").textContent=g().length.toString(),t("progress .current").textContent="0";const e=await async function(e,o){return new Promise((o=>{const r=[],i=new $(((t,n,e)=>{if(!t&&(r.push(n),e)){const t=window.URL.createObjectURL(new Blob(r));o(t)}})),a=`${e.length}`.length;(async()=>{for(let r=0;r<e.length;++r){const s=new X(`${(r+1).toString().padStart(a,"0")}.jpg`);i.add(s),s.push(new Uint8Array(await n(e[r])),!0),o=`${r+1}`,t("progress .current").textContent=o}var o;i.end()})()}))}(g()),o=document.createElement("a");o.href=e,o.download=document.title+".zip",o.click(),t("progress").style.display="none",a&&a(),t("button.download").classList.remove("disabled")}))}((async()=>{const t=Array.from(document.querySelectorAll(".page-area")).filter((t=>"none"!==window.getComputedStyle(t).display)),n=t.filter((t=>{const n=t.getBoundingClientRect();return n.left>=-50&&n.right<window.innerWidth+50}));let e;for(const t of n)e=await Y(t)||void 0;for(let e=0;e<t.length&&!n.includes(t[e]);++e)Array.from(t[e].children).forEach((n=>t[e].removeChild(n)));return document.querySelector(".page-navigation-forward").click(),e}))})();