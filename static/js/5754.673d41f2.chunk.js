"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5754],{5754:(o,i,t)=>{t.d(i,{StrokeColorUpdater:()=>l});var e=t(8470);class l{constructor(o){this.container=o}init(o){var i,t,l;const n=this.container,r=o.options,s=(0,e.TA)(r.stroke,o.id,r.reduceDuplicates);o.strokeWidth=(0,e.VG)(s.width)*n.retina.pixelRatio,o.strokeOpacity=(0,e.VG)(null!==(i=s.opacity)&&void 0!==i?i:1),o.strokeAnimation=null===(t=s.color)||void 0===t?void 0:t.animation;const a=null!==(l=(0,e.R5)(s.color))&&void 0!==l?l:o.getFillColor();a&&(o.strokeColor=(0,e.pz)(a,o.strokeAnimation,n.retina.reduceFactor))}isEnabled(o){const i=o.strokeAnimation,{strokeColor:t}=o;return!o.destroyed&&!o.spawning&&!!i&&(void 0!==(null===t||void 0===t?void 0:t.h.value)&&t.h.enable||void 0!==(null===t||void 0===t?void 0:t.s.value)&&t.s.enable||void 0!==(null===t||void 0===t?void 0:t.l.value)&&t.l.enable)}update(o,i){this.isEnabled(o)&&(0,e.Jv)(o.strokeColor,i)}}}}]);
//# sourceMappingURL=5754.673d41f2.chunk.js.map