"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5300],{5300:(i,t,o)=>{o.d(t,{PolygonMaskPlugin:()=>r});var s=o(8470);class e{constructor(){this.color=new s.Oi,this.width=.5,this.opacity=1}load(i){if(i){var t;if(this.color=s.Oi.create(this.color,i.color),(0,s.Kg)(this.color.value))this.opacity=null!==(t=(0,s.zI)(this.color.value))&&void 0!==t?t:this.opacity;void 0!==i.opacity&&(this.opacity=i.opacity),void 0!==i.width&&(this.width=i.width)}}}class n{constructor(){this.enable=!1,this.stroke=new e}load(i){if(!i)return;void 0!==i.enable&&(this.enable=i.enable);const t=i.stroke;this.stroke.load(t)}}class a{constructor(){this.arrangement="one-per-point"}load(i){i&&void 0!==i.arrangement&&(this.arrangement=i.arrangement)}}class l{constructor(){this.path=[],this.size={height:0,width:0}}load(i){i&&(void 0!==i.path&&(this.path=i.path),void 0!==i.size&&(void 0!==i.size.width&&(this.size.width=i.size.width),void 0!==i.size.height&&(this.size.height=i.size.height)))}}class h{constructor(){this.radius=10,this.type="path"}load(i){i&&(void 0!==i.radius&&(this.radius=i.radius),void 0!==i.type&&(this.type=i.type))}}class d{constructor(){this.draw=new n,this.enable=!1,this.inline=new a,this.move=new h,this.scale=1,this.type="none"}load(i){i&&(this.draw.load(i.draw),this.inline.load(i.inline),this.move.load(i.move),void 0!==i.scale&&(this.scale=i.scale),void 0!==i.type&&(this.type=i.type),void 0!==i.enable?this.enable=i.enable:this.enable="none"!==this.type,void 0!==i.url&&(this.url=i.url),void 0!==i.data&&((0,s.Kg)(i.data)?this.data=i.data:(this.data=new l,this.data.load(i.data))),void 0!==i.position&&(this.position=(0,s.zw)({},i.position)))}}class r{constructor(i){this.id="polygonMask",this._engine=i}async getPlugin(i){const{PolygonMaskInstance:t}=await o.e(4843).then(o.bind(o,4843));return new t(i,this._engine)}loadOptions(i,t){var o;if(!this.needsPlugin(i)&&!this.needsPlugin(t))return;let s=i.polygon;void 0===(null===(o=s)||void 0===o?void 0:o.load)&&(i.polygon=s=new d),s.load(null===t||void 0===t?void 0:t.polygon)}needsPlugin(i){var t,o,s;return null!==(t=null===i||void 0===i||null===(o=i.polygon)||void 0===o?void 0:o.enable)&&void 0!==t?t:void 0!==(null===i||void 0===i||null===(s=i.polygon)||void 0===s?void 0:s.type)&&"none"!==i.polygon.type}}}}]);
//# sourceMappingURL=5300.784f97df.chunk.js.map