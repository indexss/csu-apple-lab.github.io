import{ae as f}from"./index-7ccff537.js";function y(n){const o=n-1;return o*o*o+1}function b(n,{delay:o=0,duration:r=400,easing:p=f}={}){const t=+getComputedStyle(n).opacity;return{delay:o,duration:r,easing:p,css:e=>`opacity: ${e*t}`}}function u(n,{delay:o=0,duration:r=400,easing:p=y,x:t=0,y:e=0,opacity:c=0}={}){const s=getComputedStyle(n),i=+s.opacity,m=s.transform==="none"?"":s.transform,g=i*(1-c);return{delay:o,duration:r,easing:p,css:(d,l)=>`
			transform: ${m} translate(${(1-d)*t}px, ${(1-d)*e}px);
			opacity: ${i-g*l}`}}function $(n,{delay:o=0,duration:r=400,easing:p=y}={}){const t=getComputedStyle(n),e=+t.opacity,c=parseFloat(t.height),s=parseFloat(t.paddingTop),i=parseFloat(t.paddingBottom),m=parseFloat(t.marginTop),g=parseFloat(t.marginBottom),d=parseFloat(t.borderTopWidth),l=parseFloat(t.borderBottomWidth);return{delay:o,duration:r,easing:p,css:a=>`overflow: hidden;opacity: ${Math.min(a*20,1)*e};height: ${a*c}px;padding-top: ${a*s}px;padding-bottom: ${a*i}px;margin-top: ${a*m}px;margin-bottom: ${a*g}px;border-top-width: ${a*d}px;border-bottom-width: ${a*l}px;`}}export{u as a,b as f,$ as s};