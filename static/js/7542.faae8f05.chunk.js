"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7542],{7542:(t,o,i)=>{i.d(o,{ParticlesLighter:()=>e});var n=i(8470),a=i(6151);class e extends n.U4{constructor(t){super(t)}clear(){}init(){}interact(t){const o=this.container,i=o.actualOptions,n=o.interactivity;if(!i.interactivity.events.onHover.enable||"pointermove"!==n.status)return;const e=n.mouse.position;e&&o.canvas.draw((i=>{(0,a.No)(o,i,t,e)}))}isEnabled(t){var o;const i=this.container,e=null!==(o=t.interactivity)&&void 0!==o?o:i.actualOptions.interactivity,s=i.interactivity.mouse,r=e.events;if(!r.onHover.enable||!s.position)return!1;const l=(0,n.hn)(a.EF,r.onHover.mode);if(l&&e.modes.light){const o=e.modes.light.shadow;t.lightShadow=(0,n.BN)(o.color)}return l}reset(){}}},6151:(t,o,i)=>{i.d(o,{EF:()=>c,No:()=>h,tM:()=>d});var n=i(8470);const a={max:1,min:0},e=.5*Math.PI,s=2*Math.PI,r=.25*Math.PI,l=0,c="light";function d(t,o,i){var e;const r=null===(e=t.actualOptions.interactivity.modes.light)||void 0===e?void 0:e.area;if(!r)return;o.beginPath(),o.arc(i.x,i.y,r.radius,l,s);const c=o.createRadialGradient(i.x,i.y,l,i.x,i.y,r.radius),d=t.canvas.mouseLight;null!==d&&void 0!==d&&d.start&&d.stop&&(c.addColorStop(a.min,(0,n.xx)(d.start)),c.addColorStop(a.max,(0,n.xx)(d.stop)),o.fillStyle=c,o.fill())}function h(t,o,i,a){var l;const c=i.getPosition(),d=null===(l=t.actualOptions.interactivity.modes.light)||void 0===l?void 0:l.shadow;if(!d)return;const h=i.lightShadow;if(!h)return;const u=i.getRadius(),v=i.sides,x=s/v,y=-i.rotation+r,f=[];for(let n=0;n<v;n++)f.push({x:c.x+u*Math.sin(y+x*n)*1,y:c.y+u*Math.cos(y+x*n)*1});const p=[],g=d.length;for(const n of f){const t=Math.atan2(a.y-n.y,a.x-n.x),o={x:n.x+g*Math.sin(-t-e),y:n.y+g*Math.cos(-t-e)};p.push({end:o,start:n})}const m=(0,n.xx)(h);for(let n=p.length-1,e=0;n>=0;e=n--)o.beginPath(),o.moveTo(p[n].start.x,p[n].start.y),o.lineTo(p[e].start.x,p[e].start.y),o.lineTo(p[e].end.x,p[e].end.y),o.lineTo(p[n].end.x,p[n].end.y),o.fillStyle=m,o.fill()}}}]);
//# sourceMappingURL=7542.faae8f05.chunk.js.map