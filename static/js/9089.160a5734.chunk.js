"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9089],{9089:(e,o,i)=>{i.d(o,{ImagePreloaderPlugin:()=>r});class s{constructor(){this.src="",this.gif=!1}load(e){e&&(void 0!==e.gif&&(this.gif=e.gif),void 0!==e.height&&(this.height=e.height),void 0!==e.name&&(this.name=e.name),void 0!==e.replaceColor&&(this.replaceColor=e.replaceColor),void 0!==e.src&&(this.src=e.src),void 0!==e.width&&(this.width=e.width))}}class r{constructor(e){this.id="imagePreloader",this._engine=e}async getPlugin(){return await Promise.resolve(),{}}loadOptions(e,o){if(null===o||void 0===o||!o.preload)return;e.preload||(e.preload=[]);const i=e.preload;for(const r of o.preload){const e=i.find((e=>e.name===r.name||e.src===r.src));if(e)e.load(r);else{const e=new s;e.load(r),i.push(e)}}}needsPlugin(){return!0}}}}]);
//# sourceMappingURL=9089.160a5734.chunk.js.map