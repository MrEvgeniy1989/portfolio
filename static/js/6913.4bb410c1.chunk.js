"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6913],{6913:(t,i,o)=>{o.d(i,{Connector:()=>l});var n=o(8470);class e{constructor(){this.opacity=.5}load(t){t&&void 0!==t.opacity&&(this.opacity=t.opacity)}}class s{constructor(){this.distance=80,this.links=new e,this.radius=60}load(t){t&&(void 0!==t.distance&&(this.distance=t.distance),this.links.load(t.links),void 0!==t.radius&&(this.radius=t.radius))}}const a=0,c=1;function r(t,i,o,e){const s=t.actualOptions.interactivity.modes.connect;if(s)return function(t,i,o,e){const s=Math.floor(o.getRadius()/i.getRadius()),r=i.getFillColor(),d=o.getFillColor();if(!r||!d)return;const l=i.getPosition(),u=o.getPosition(),v=(0,n.EY)(r,d,i.getRadius(),o.getRadius()),h=t.createLinearGradient(l.x,l.y,u.x,u.y);return h.addColorStop(a,(0,n.LC)(r,e)),h.addColorStop((0,n.qE)(s,a,c),(0,n.xx)(v,e)),h.addColorStop(c,(0,n.LC)(d,e)),h}(i,o,e,s.links.opacity)}function d(t,i,o){t.canvas.draw((e=>{var s;const a=r(t,e,i,o);if(!a)return;const c=i.getPosition(),d=o.getPosition();!function(t,i,o,e,s){(0,n.V6)(t,e,s),t.lineWidth=i,t.strokeStyle=o,t.stroke()}(e,null!==(s=i.retina.linksWidth)&&void 0!==s?s:0,a,c,d)}))}class l extends n.sJ{constructor(t){super(t)}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.connect;i&&(t.retina.connectModeDistance=i.distance*t.retina.pixelRatio,t.retina.connectModeRadius=i.radius*t.retina.pixelRatio)}interact(){const t=this.container;if(t.actualOptions.interactivity.events.onHover.enable&&"pointermove"===t.interactivity.status){const i=t.interactivity.mouse.position,{connectModeDistance:o,connectModeRadius:n}=t.retina;if(!o||o<0||!n||n<0||!i)return;const e=Math.abs(n),s=t.particles.quadTree.queryCircle(i,e,(t=>this.isEnabled(t)));s.forEach(((i,n)=>{const e=i.getPosition();for(const a of s.slice(n+1)){const n=a.getPosition(),s=Math.abs(o),c=Math.abs(e.x-n.x),r=Math.abs(e.y-n.y);c<s&&r<s&&d(t,i,a)}}))}}isEnabled(t){var i;const o=this.container,e=o.interactivity.mouse,s=(null!==(i=null===t||void 0===t?void 0:t.interactivity)&&void 0!==i?i:o.actualOptions.interactivity).events;return!(!s.onHover.enable||!e.position)&&(0,n.hn)("connect",s.onHover.mode)}loadModeOptions(t){t.connect||(t.connect=new s);for(var i=arguments.length,o=new Array(i>1?i-1:0),n=1;n<i;n++)o[n-1]=arguments[n];for(const e of o)t.connect.load(null===e||void 0===e?void 0:e.connect)}reset(){}}}}]);
//# sourceMappingURL=6913.4bb410c1.chunk.js.map