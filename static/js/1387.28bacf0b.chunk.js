"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1387],{1387:(t,e,i)=>{i.d(e,{InfectionInstance:()=>a});var n=i(8470);class o{constructor(t){this._nextInfectionStage=t=>{const e=this._container.actualOptions.infection,{infection:i}=t;if(!e||!i)return;const n=e.stages.length;n<=0||void 0===i.stage||(i.time=0,n<=++i.stage&&(e.cure?(delete i.stage,delete i.time):(i.stage=0,i.time=0)))},this._container=t}startInfection(t,e){const i=this._container.actualOptions.infection,{infection:n}=t;if(!i||!n)return;e>i.stages.length||e<0||(n.delay=0,n.delayStage=e)}updateInfection(t,e){const i=this._container.actualOptions.infection,{infection:o}=t;if(!i||!o)return;const a=i.stages,c=a.length;if(void 0!==o.delay&&void 0!==o.delayStage){const t=o.delayStage;if(t>c||t<0)return;o.delay>=i.delay*n.Xu?(o.stage=t,o.time=0,delete o.delay,delete o.delayStage):o.delay+=e}else delete o.delay,delete o.delayStage;if(void 0!==o.stage&&void 0!==o.time){const i=a[o.stage];void 0!==i.duration&&i.duration>=0&&o.time>i.duration*n.Xu?this._nextInfectionStage(t):o.time+=e}else delete o.stage,delete o.time}updateInfectionStage(t,e){const i=this._container.actualOptions,{infection:n}=t;if(!i.infection||!n)return;e>i.infection.stages.length||e<0||void 0!==n.stage&&n.stage>e||(n.stage=e,n.time=0)}}class a{constructor(t){this._container=t,this._container.infecter=new o(this._container)}particleFillColor(t){const e=this._container.actualOptions;if(!t.infection||!e.infection)return;const i=t.infection.stage,n=e.infection.stages;return void 0!==i?n[i].color:void 0}particleStrokeColor(t){return this.particleFillColor(t)}particlesSetup(){const t=this._container.actualOptions;if(t.infection)for(let i=0;i<t.infection.infections;i++){var e;const t=this._container.particles.filter((t=>{const e=t;return e.infection||(e.infection={}),void 0===e.infection.stage})),i=(0,n.Vh)(t);null===(e=this._container.infecter)||void 0===e||e.startInfection(i,0)}}}}}]);
//# sourceMappingURL=1387.28bacf0b.chunk.js.map