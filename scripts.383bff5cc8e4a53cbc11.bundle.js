!function(e){var t="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):t&&(t.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return t.hljs}))}(function(e){function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(e){return e.nodeName.toLowerCase()}function n(e,t){var r=e&&e.exec(t);return r&&0===r.index}function a(e){return w.test(e)}function c(e){var t,r={},n=Array.prototype.slice.call(arguments,1);for(t in e)r[t]=e[t];return n.forEach(function(e){for(t in e)r[t]=e[t]}),r}function i(e){var t=[];return function e(n,a){for(var c=n.firstChild;c;c=c.nextSibling)3===c.nodeType?a+=c.nodeValue.length:1===c.nodeType&&(t.push({event:"start",offset:a,node:c}),a=e(c,a),r(c).match(/br|hr|img|input/)||t.push({event:"stop",offset:a,node:c}));return a}(e,0),t}function s(e,n,a){function c(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function i(e){u+="<"+r(e)+h.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+t(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function s(e){u+="</"+r(e)+">"}function o(e){("start"===e.event?i:s)(e.node)}for(var l=0,u="",b=[];e.length||n.length;){var f=c();if(u+=t(a.substring(l,f[0].offset)),l=f[0].offset,f===e){b.reverse().forEach(s);do{o(f.splice(0,1)[0]),f=c()}while(f===e&&f.length&&f[0].offset===l);b.reverse().forEach(i)}else"start"===f[0].event?b.push(f[0].node):b.pop(),o(f.splice(0,1)[0])}return u+t(a.substr(l))}function o(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(t){return c(e,{v:null},t)})),e.cached_variants||e.eW&&[c(e)]||[e]}function l(e){function t(e){return e&&e.source||e}function r(r,n){return new RegExp(t(r),"m"+(e.cI?"i":"")+(n?"g":""))}!function n(a,c){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var i={},s=function(t,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");i[r[0]]=[t,r[1]?Number(r[1]):1]})};"string"==typeof a.k?s("keyword",a.k):m(a.k).forEach(function(e){s(e,a.k[e])}),a.k=i}a.lR=r(a.l||/\w+/,!0),c&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=r(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=r(a.e)),a.tE=t(a.e)||"",a.eW&&c.tE&&(a.tE+=(a.e?"|":"")+c.tE)),a.i&&(a.iR=r(a.i)),null==a.r&&(a.r=1),a.c||(a.c=[]),a.c=Array.prototype.concat.apply([],a.c.map(function(e){return o("self"===e?a:e)})),a.c.forEach(function(e){n(e,a)}),a.starts&&n(a.starts,c);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(t).filter(Boolean);a.t=l.length?r(l.join("|"),!0):{exec:function(){return null}}}}(e)}function u(e,r,a,c){function i(e,t){var r,a;for(r=0,a=t.c.length;a>r;r++)if(n(t.c[r].bR,e))return t.c[r]}function s(e,t){if(n(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?s(e.parent,t):void 0}function o(e,t){return!a&&n(t.iR,e)}function f(e,t){var r=v.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function p(e,t,r,n){var a='<span class="'+(n?"":M.classPrefix);return(a+=e+'">')+t+(r?"":C)}function d(){R+=null!=y.sL?function(){var e="string"==typeof y.sL;if(e&&!N[y.sL])return t(x);var r=e?u(y.sL,x,!0,E[y.sL]):b(x,y.sL.length?y.sL:void 0);return y.r>0&&(k+=r.r),e&&(E[y.sL]=r.top),p(r.language,r.value,!1,!0)}():function(){var e,r,n,a;if(!y.k)return t(x);for(a="",r=0,y.lR.lastIndex=0,n=y.lR.exec(x);n;)a+=t(x.substring(r,n.index)),(e=f(y,n))?(k+=e[1],a+=p(e[0],t(n[0]))):a+=t(n[0]),r=y.lR.lastIndex,n=y.lR.exec(x);return a+t(x.substr(r))}(),x=""}function h(e){R+=e.cN?p(e.cN,"",!0):"",y=Object.create(e,{parent:{value:y}})}function m(e,t){if(x+=e,null==t)return d(),0;var r=i(t,y);if(r)return r.skip?x+=t:(r.eB&&(x+=t),d(),r.rB||r.eB||(x=t)),h(r),r.rB?0:t.length;var n=s(y,t);if(n){var a=y;a.skip?x+=t:(a.rE||a.eE||(x+=t),d(),a.eE&&(x=t));do{y.cN&&(R+=C),y.skip||(k+=y.r),y=y.parent}while(y!==n.parent);return n.starts&&h(n.starts),a.rE?0:t.length}if(o(t,y))throw new Error('Illegal lexeme "'+t+'" for mode "'+(y.cN||"<unnamed>")+'"');return x+=t,t.length||1}var v=g(e);if(!v)throw new Error('Unknown language: "'+e+'"');l(v);var w,y=c||v,E={},R="";for(w=y;w!==v;w=w.parent)w.cN&&(R=p(w.cN,"",!0)+R);var x="",k=0;try{for(var B,A,I=0;y.t.lastIndex=I,B=y.t.exec(r);)A=m(r.substring(I,B.index),B[0]),I=B.index+A;for(m(r.substr(I)),w=y;w.parent;w=w.parent)w.cN&&(R+=C);return{r:k,value:R,language:e,top:y}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{r:0,value:t(r)};throw e}}function b(e,r){r=r||M.languages||m(N);var n={r:0,value:t(e)},a=n;return r.filter(g).forEach(function(t){var r=u(t,e,!1);r.language=t,r.r>a.r&&(a=r),r.r>n.r&&(a=n,n=r)}),a.language&&(n.second_best=a),n}function f(e){return M.tabReplace||M.useBR?e.replace(E,function(e,t){return M.useBR&&"\n"===e?"<br>":M.tabReplace?t.replace(/\t/g,M.tabReplace):""}):e}function p(e){var t,r,n,c,o,l=function(e){var t,r,n,c,i=e.className+" ";if(r=y.exec(i+=e.parentNode?e.parentNode.className:""))return g(r[1])?r[1]:"no-highlight";for(t=0,n=(i=i.split(/\s+/)).length;n>t;t++)if(a(c=i[t])||g(c))return c}(e);a(l)||(M.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,o=t.textContent,n=l?u(l,o,!0):b(o),(r=i(t)).length&&((c=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=n.value,n.value=s(r,i(c),o)),n.value=f(n.value),e.innerHTML=n.value,e.className=function(e,t,r){var n=l?v[l]:r,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(n)&&a.push(n),a.join(" ").trim()}(e.className,0,n.language),e.result={language:n.language,re:n.r},n.second_best&&(e.second_best={language:n.second_best.language,re:n.second_best.r}))}function d(){if(!d.called){d.called=!0;var e=document.querySelectorAll("pre code");h.forEach.call(e,p)}}function g(e){return e=(e||"").toLowerCase(),N[e]||N[v[e]]}var h=[],m=Object.keys,N={},v={},w=/^(no-?highlight|plain|text)$/i,y=/\blang(?:uage)?-([\w-]+)\b/i,E=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,C="</span>",M={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=u,e.highlightAuto=b,e.fixMarkup=f,e.highlightBlock=p,e.configure=function(e){M=c(M,e)},e.initHighlighting=d,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",d,!1),addEventListener("load",d,!1)},e.registerLanguage=function(t,r){var n=N[t]=r(e);n.aliases&&n.aliases.forEach(function(e){v[e]=t})},e.listLanguages=function(){return m(N)},e.getLanguage=g,e.inherit=c,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(t,r,n){var a=e.inherit({cN:"comment",b:t,e:r,c:[]},n||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e}),hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]};return{aliases:["sh","zsh"],l:/\b-?[a-z\._]+\b/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,r,{cN:"string",b:/'/,e:/'/},t]}}),hljs.registerLanguage("xml",function(e){var t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:"[A-Za-z0-9\\._:-]+",r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("\x3c!--","--\x3e",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"<\/script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}}),hljs.registerLanguage("javascript",function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",r={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},n={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},a={cN:"subst",b:"\\$\\{",e:"\\}",k:r,c:[]},c={cN:"string",b:"`",e:"`",c:[e.BE,a]};a.c=[e.ASM,e.QSM,c,n,e.RM];var i=a.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:r,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,e.CLCM,e.CBCM,n,{b:/[{,]\s*/,r:0,c:[{b:t+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:t,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+t+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:t},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:r,c:i}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:t}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:i}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}}),hljs.registerLanguage("typescript",function(e){var t={keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise"};return{aliases:["ts"],k:t,c:[{cN:"meta",b:/^\s*['"]use strict['"]/},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+e.IR+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:e.IR},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:["self",e.CLCM,e.CBCM]}]}]}],r:0},{cN:"function",b:"function",e:/[\{;]/,eE:!0,k:t,c:["self",e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/%/,r:0},{bK:"constructor",e:/\{/,eE:!0,c:["self",{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:[e.CLCM,e.CBCM],i:/["'\(]/}]},{b:/module\./,k:{built_in:"module"},r:0},{bK:"module",e:/\{/,eE:!0},{bK:"interface",e:/\{/,eE:!0,k:"interface extends"},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},{cN:"meta",b:"@[A-Za-z]+"}]}}),hljs.registerLanguage("json",function(e){var t={literal:"true false null"},r=[e.QSM,e.CNM],n={e:",",eW:!0,eE:!0,c:r,k:t},a={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(n,{b:/:/})],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(n)],i:"\\S"};return r.splice(r.length,0,a,c),{c:r,k:t,i:"\\S"}}),hljs.registerLanguage("css",function(e){return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:"[a-zA-Z-][a-zA-Z0-9_-]*",r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,{b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]}]}]}}),hljs.registerLanguage("shell",function(e){return{aliases:["console"],c:[{cN:"meta",b:"^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",starts:{e:"$",sL:"bash"}}]}});