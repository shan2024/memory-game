(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,,,function(e,r,t){},,function(e,r,t){},function(e,r,t){},,function(e,r,t){},function(e,r,t){},function(e,r,t){"use strict";t.r(r);var c=t(1),n=t.n(c),a=t(4),o=t.n(a),s=t(2),i=(t(10),t(0));var u=function(e){return Object(i.jsxs)("div",{className:"score-board",children:[Object(i.jsxs)("h2",{id:"current-score",children:["Current Score: ",e.currentScore]}),Object(i.jsxs)("h2",{id:"best-score",children:["Best Score: ",e.bestScore]})]})};t(12);var d=function(e){return Object(i.jsx)("div",{className:"shape "+e.shape,style:(e.shape,{backgroundColor:e.shapeColor})})};t(13);var j=function(e){return Object(i.jsx)("div",{className:"card-container",children:Object(i.jsx)("div",{onClick:function(r){return e.cardClicked(r,e.id)},className:"card",style:{backgroundColor:e.card[0]},children:Object(i.jsx)(d,{shape:e.card[2],shapeColor:e.card[1]})})})},h=t(5),l=t.n(h);t(15);var b=function(e){var r=Object(c.useState)(b()),t=Object(s.a)(r,2),n=t[0],a=t[1],o=Object(c.useState)([]),u=Object(s.a)(o,2),d=u[0],h=u[1];function b(){for(var e=[],r=0;r<16;r++)e.push(["rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")","rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")",Math.random()>.66?"circle":Math.random()>.33?"square":"triangle",l()(),r]);return e}function f(r,t){r.preventDefault(),d.includes(t)?(e.currentScore>e.bestScore&&e.setBestScore(e.currentScore),h([]),a(b()),e.resetCurrentScore()):(h(d.concat(t)),e.incrementCurrentScore(),function(){for(var e,r=Array.from(n),t=r.length;0!=t;){e=Math.floor(Math.random()*t),t--;var c=[r[e],r[t]];r[t]=c[0],r[e]=c[1]}a(r)}(),15==d.length&&(h([]),a(b())))}return Object(i.jsx)("div",{className:"game-board",children:n.map((function(e,r){return Object(i.jsx)(j,{id:e[4],card:e,cardClicked:f},e[3])}))})};var f=function(){var e=Object(c.useState)(0),r=Object(s.a)(e,2),t=r[0],n=r[1],a=Object(c.useState)(0),o=Object(s.a)(a,2),d=o[0],j=o[1];return Object(i.jsxs)("div",{className:"game-screen",children:[Object(i.jsx)(u,{currentScore:t,bestScore:d}),Object(i.jsx)(b,{currentScore:t,bestScore:d,incrementCurrentScore:function(){n(t+1)},resetCurrentScore:function(){n(0)},setBestScore:j})]})};t(16);var m=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{children:"Memorize"}),Object(i.jsx)(f,{}),Object(i.jsx)("footer",{children:"Created By Seulchan Han"})]})};o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.9bb2661f.chunk.js.map