"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6929],{6929:(i,t,s)=>{s.d(t,{AbsorberInstance:()=>h});var o=s(8470),e=s(2794);const n=0,r=0,a=2*Math.PI;class h{constructor(i,t,s,n){var r,h,c;this.absorbers=i,this.container=t,this._calcPosition=()=>{const i=(0,o.l1)({size:this.container.canvas.size,position:this.options.position});return o.Mi.create(i.x,i.y)},this._updateParticlePosition=(i,t)=>{if(i.destroyed)return;const s=this.container,e=s.canvas.size;if(i.needsNewPosition){const t=(0,o.Mh)({size:e});i.position.setTo(t),i.velocity.setTo(i.initialVelocity),i.absorberOrbit=void 0,i.needsNewPosition=!1}if(this.options.orbits){var n;if(void 0===i.absorberOrbit&&(i.absorberOrbit=o.Mi.origin,i.absorberOrbit.length=(0,o.Yf)(i.getPosition(),this.position),i.absorberOrbit.angle=(0,o.G0)()*a),i.absorberOrbit.length<=this.size&&!this.options.destroy){const t=Math.min(e.width,e.height),s=1,n=.1,r=.2;i.absorberOrbit.length=t*(s+((0,o.G0)()*r-n))}void 0===i.absorberOrbitDirection&&(i.absorberOrbitDirection=i.velocity.x>=0?"clockwise":"counter-clockwise");const r=i.absorberOrbit.length,h=i.absorberOrbit.angle,c=i.absorberOrbitDirection;i.velocity.setTo(o.Mi.origin);const l={x:"clockwise"===c?Math.cos:Math.sin,y:"clockwise"===c?Math.sin:Math.cos};i.position.x=this.position.x+r*l.x(h),i.position.y=this.position.y+r*l.y(h),i.absorberOrbit.length-=t.length,i.absorberOrbit.angle+=(null!==(n=i.retina.moveSpeed)&&void 0!==n?n:0)*s.retina.pixelRatio/o.a5*s.retina.reduceFactor}else{const s=o.Mi.origin;s.length=t.length,s.angle=t.angle,i.velocity.addTo(s)}},this.initialPosition=n?o.Mi.create(n.x,n.y):void 0,s instanceof e.h?this.options=s:(this.options=new e.h,this.options.load(s)),this.dragging=!1,this.name=this.options.name,this.opacity=this.options.opacity,this.size=(0,o.VG)(this.options.size.value)*t.retina.pixelRatio,this.mass=this.size*this.options.size.density*t.retina.reduceFactor;const l=this.options.size.limit;this.limit={radius:l.radius*t.retina.pixelRatio*t.retina.reduceFactor,mass:l.mass},this.color=null!==(r=(0,o.BN)(this.options.color))&&void 0!==r?r:{b:0,g:0,r:0},this.position=null!==(h=null===(c=this.initialPosition)||void 0===c?void 0:c.copy())&&void 0!==h?h:this._calcPosition()}attract(i){const t=this.container,s=this.options;if(s.draggable){const i=t.interactivity.mouse;if(i.clicking&&i.downPosition){(0,o.Yf)(this.position,i.downPosition)<=this.size&&(this.dragging=!0)}else this.dragging=!1;this.dragging&&i.position&&(this.position.x=i.position.x,this.position.y=i.position.y)}const e=i.getPosition(),{dx:n,dy:r,distance:a}=(0,o.vr)(this.position,e),h=o.Mi.create(n,r);if(h.length=this.mass/Math.pow(a,2)*t.retina.reduceFactor,a<this.size+i.getRadius()){const o=.033*i.getRadius()*t.retina.pixelRatio;this.size>i.getRadius()&&a<this.size-i.getRadius()||void 0!==i.absorberOrbit&&i.absorberOrbit.length<0?s.destroy?i.destroy():(i.needsNewPosition=!0,this._updateParticlePosition(i,h)):(s.destroy&&(i.size.value-=o),this._updateParticlePosition(i,h)),(this.limit.radius<=0||this.size<this.limit.radius)&&(this.size+=o),(this.limit.mass<=0||this.mass<this.limit.mass)&&(this.mass+=o*this.options.size.density*t.retina.reduceFactor)}else this._updateParticlePosition(i,h)}draw(i){i.translate(this.position.x,this.position.y),i.beginPath(),i.arc(n,r,this.size,0,a,!1),i.closePath(),i.fillStyle=(0,o.xx)(this.color,this.opacity),i.fill()}resize(){const i=this.initialPosition;this.position=i&&(0,o.Tj)(i,this.container.canvas.size,o.Mi.origin)?i:this._calcPosition()}}}}]);
//# sourceMappingURL=6929.e3011e42.chunk.js.map