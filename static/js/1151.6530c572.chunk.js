"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1151],{1151:(t,e,n)=>{n.d(e,{CanvasMaskInstance:()=>l});var o=n(8470);const i={x:0,y:0};function c(t,e,n,i,c,a){const{height:l,width:r}=e,h=l*r,u=function(t){const e=1,n=0;for(let i=t.length-e;i>=n;i--){const e=Math.floor((0,o.G0)()*i);[t[i],t[e]]=[t[e],t[i]]}return t}(s(h)),d=Math.min(h,t.actualOptions.particles.number.value),g=t.canvas.size;let f=0;const x=g.width*n.x/o.a5-r*i*.5,v=g.height*n.y/o.a5-l*i*.5;for(;f<d&&u.length;){var p;const n=0,o=null!==(p=u.pop())&&void 0!==p?p:n,s={x:o%r,y:Math.floor(o/r)},l=e.pixels[s.y][s.x];if(!a(l))continue;const h={x:s.x*i+x,y:s.y*i+v},d={};c.color&&(d.color={value:l}),c.opacity&&(d.opacity={value:l.a}),t.particles.addParticle(h,d),f++}}function a(t,e,n){let o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const c=t.getImageData(i.x,i.y,e.width,e.height).data;o&&t.clearRect(i.x,i.y,e.width,e.height);const a=[];for(let i=0;i<c.length;i+=n){const t=i/n,o={x:t%e.width,y:Math.floor(t/e.width)};a[o.y]||(a[o.y]=[]);const s={r:0,g:1,b:2,a:3},l=255;a[o.y][o.x]={r:c[i+s.r],g:c[i+s.g],b:c[i+s.b],a:c[i+s.a]/l}}return{pixels:a,width:Math.min(...a.map((t=>t.length))),height:a.length}}const s=t=>[...Array(t).keys()];class l{constructor(t){this._container=t}async init(){var t;const e=this._container,n=e.actualOptions.canvasMask;if(null===n||void 0===n||!n.enable)return;let s={pixels:[],height:0,width:0};const l=n.pixels.offset;if(n.image){const t=n.image.src;if(!t)return;s=await function(t,e){const n=new Image;n.crossOrigin="Anonymous";const c=new Promise(((t,c)=>{n.onerror=c,n.onload=()=>{const s=document.createElement("canvas");s.width=n.width,s.height=n.height;const l=s.getContext("2d");if(!l)return c(new Error("".concat(o.dI," Could not get canvas context")));l.drawImage(n,i.x,i.y,n.width,n.height,i.x,i.y,s.width,s.height),t(a(l,s,e))}}));return n.src=t,c}(t,l)}else if(n.text){const t=function(t,e){const n=document.createElement("canvas"),c=n.getContext("2d"),{font:s,text:l,lines:r,color:h}=t;if(!l||!c)return;const u=l.split(r.separator),d=(0,o.Et)(s.size)?"".concat(s.size,"px"):s.size,g=[];let f=0,x=0;for(const o of u){var v,p,y;c.font="".concat(null!==(v=s.style)&&void 0!==v?v:""," ").concat(null!==(p=s.variant)&&void 0!==p?p:""," ").concat(null!==(y=s.weight)&&void 0!==y?y:""," ").concat(d," ").concat(s.family);const t=c.measureText(o),e={measure:t,text:o,height:t.actualBoundingBoxAscent+t.actualBoundingBoxDescent,width:t.width};f=Math.max(f||0,e.width),x+=e.height+r.spacing,g.push(e)}n.width=f,n.height=x;let w=0;for(const o of g){var m,M,b;c.font="".concat(null!==(m=s.style)&&void 0!==m?m:""," ").concat(null!==(M=s.variant)&&void 0!==M?M:""," ").concat(null!==(b=s.weight)&&void 0!==b?b:""," ").concat(d," ").concat(s.family),c.fillStyle=h,c.fillText(o.text,i.x,w+o.measure.actualBoundingBoxAscent),w+=o.height+r.spacing}return a(c,n,e)}(n.text,l);if(!t)return;s=t}else if(null!==(t=n.element)&&void 0!==t?t:n.selector){var r;const t=null!==(r=n.element)&&void 0!==r?r:n.selector&&document.querySelector(n.selector);if(!t)return;const e=t.getContext("2d");if(!e)return;s=a(e,t,l)}c(e,s,n.position,n.scale,n.override,n.pixels.filter)}}}}]);
//# sourceMappingURL=1151.6530c572.chunk.js.map