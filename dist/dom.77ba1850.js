parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fRxd":[function(require,module,exports) {
window.dom={create:function(n){var e=document.createElement("template");return e.innerHTML=n.trim(),e.content.firstChild},after:function(n,e){n.parentNode.insertBefore(e,n.nextSibling)},before:function(n,e){n.parentNode.insertBefore(e,n)},append:function(n,e){n.appendChild(e)},wrap:function(n,e){dom.before(n,e),dom.append(e,n)},remove:function(n){return n.parentNode.removeChild(n),n},empty:function(n){n.childNodes;for(var e=[],t=n.firstChild;t;)e.push(dom.remove(t)),t=n.firstChild;return e},attr:function(n,e,t){if(3===arguments.length)n.setAttribute(e,t);else if(2===arguments.length)return n.getAttribute(e)},text:function(n,e){if(2===arguments.length)"innerText"in n?n.innerText=e:n.contentText=e;else if(1===arguments.length)return"innerText"in n?n.innerText:n.contentText},html:function(n,e){if(2===arguments.length)n.innerHTML=e;else if(1===arguments.length)return n.innerHTML},style:function(n,e,t){if(3===arguments.length)n.style[e]=t;else if(2===arguments.length){if("string"==typeof e)return n.style[e];if(e instanceof Object)for(var r in e)n.style[r]=e[r]}},class:{add:function(n,e){n.classList.add(e)},remove:function(n,e){n.classList.remove(e)},has:function(n,e){return n.classList.contains(e)}},on:function(n,e,t){n.addEventListener(e,t)},off:function(n,e,t){n.removeEventListener(e,t)},find:function(n,e){return(e||document).querySelectorAll(n)},parent:function(n){return n.parentNode},children:function(n){return n.children},siblings:function(n){return Array.from(n.parentNode.children).filter(function(e){return e!==n})},next:function(n){for(var e=n.nextSibling;e&&3===e.nodeType;)e=e.nextSibling;return e},previous:function(n){for(var e=n.previousSibling;e&&3===e.nodeType;)e=e.previousSibling;return e},travel:function(n,e){for(var t=0;t<n.length;t++)e.call(null,n[t])},index:function(n){for(var e=dom.previous(n),t=0;e;)e=dom.previous(e),t+=1;return t}};
},{}]},{},["fRxd"], null)
//# sourceMappingURL=dom.77ba1850.js.map