import{a as e,b as y}from"./isEqual.cdc3130c.js";import{S as t}from"./app.11033573.js";import{$ as A}from"./document.5a06ee6b.js";var m=t?t.isConcatSpreadable:void 0;function g(n){return A(n)||e(n)||!!(m&&n&&n[m])}function S(n,a,s,r,o){var f=-1,b=n.length;for(s||(s=g),o||(o=[]);++f<b;){var i=n[f];a>0&&s(i)?a>1?S(i,a-1,s,r,o):y(o,i):r||(o[o.length]=i)}return o}const x=n=>[...new Set(n)],F=n=>!n&&n!==0?[]:Array.isArray(n)?n:[n];export{S as b,F as c,x as u};