"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2628],{2628:(e,l,o)=>{o.d(l,{RollUpdater:()=>r});var n=o(8470);const a=2*Math.PI;class t{constructor(){this.enable=!1,this.value=0}load(e){e&&(void 0!==e.enable&&(this.enable=e.enable),void 0!==e.value&&(this.value=(0,n.DT)(e.value)))}}class i{constructor(){this.darken=new t,this.enable=!1,this.enlighten=new t,this.mode="vertical",this.speed=25}load(e){e&&(void 0!==e.backColor&&(this.backColor=n.Oi.create(this.backColor,e.backColor)),this.darken.load(e.darken),void 0!==e.enable&&(this.enable=e.enable),this.enlighten.load(e.enlighten),void 0!==e.mode&&(this.mode=e.mode),void 0!==e.speed&&(this.speed=(0,n.DT)(e.speed)))}}class r{getTransformValues(e){var l;const o=(null===(l=e.roll)||void 0===l?void 0:l.enable)&&e.roll,n=o&&o.horizontal,a=o&&o.vertical;return{a:n?Math.cos(o.angle):void 0,d:a?Math.sin(o.angle):void 0}}init(e){!function(e){const l=e.options.roll;if(null!==l&&void 0!==l&&l.enable)if(e.roll={enable:l.enable,horizontal:"horizontal"===l.mode||"both"===l.mode,vertical:"vertical"===l.mode||"both"===l.mode,angle:(0,n.G0)()*a,speed:(0,n.VG)(l.speed)/360},l.backColor)e.backColor=(0,n.R5)(l.backColor);else if(l.darken.enable&&l.enlighten.enable){const o=(0,n.G0)()>=n.N3?"darken":"enlighten";e.roll.alter={type:o,value:(0,n.VG)("darken"===o?l.darken.value:l.enlighten.value)}}else l.darken.enable?e.roll.alter={type:"darken",value:(0,n.VG)(l.darken.value)}:l.enlighten.enable&&(e.roll.alter={type:"enlighten",value:(0,n.VG)(l.enlighten.value)});else e.roll={enable:!1,horizontal:!1,vertical:!1,angle:0,speed:0}}(e)}isEnabled(e){const l=e.options.roll;return!e.destroyed&&!e.spawning&&!(null===l||void 0===l||!l.enable)}loadOptions(e){e.roll||(e.roll=new i);for(var l=arguments.length,o=new Array(l>1?l-1:0),n=1;n<l;n++)o[n-1]=arguments[n];for(const a of o)e.roll.load(null===a||void 0===a?void 0:a.roll)}update(e,l){this.isEnabled(e)&&function(e,l){const o=e.options.roll,n=e.roll;if(!n||null===o||void 0===o||!o.enable)return;const t=n.speed*l.factor,i=a;n.angle+=t,n.angle>i&&(n.angle-=i)}(e,l)}}}}]);
//# sourceMappingURL=2628.12412739.chunk.js.map