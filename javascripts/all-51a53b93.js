/*!
 * modernizr v3.6.0
 * Build https://modernizr.com/download?-MessageChannel-adownload-ambientlight-animation-apng-appearance-applicationcache-audio-audioloop-audiopreload-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-batteryapi-bdi-beacon-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-blobconstructor-bloburls-blobworkers-borderimage-borderradius-boxshadow-boxsizing-canvas-canvasblending-canvastext-canvaswinding-capture-checked-classlist-contains-contenteditable-contextmenu-cookies-cors-createelementattrs_createelement_attrs-cryptography-cssall-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-cssgrid_cssgridlegacy-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransformslevel2-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-customelements-customevent-customprotocolhandler-dart-datachannel-datalistelem-dataset-datauri-dataview-dataworkers-details-devicemotion_deviceorientation-directory-display_runin-displaytable-documentfragment-ellipsis-emoji-es5-es5array-es5date-es5function-es5object-es5string-es5syntax-es5undefined-es6array-es6collections-es6math-es6number-es6object-es6string-eventlistener-eventsource-exiforientation-fetch-fileinput-filereader-filesystem-flash-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-formattribute-formvalidation-framed-fullscreen-gamepads-generatedcontent-generators-geolocation-getrandomvalues-getusermedia-hairline-hashchange-hidden-hiddenscroll-history-hovermq-hsla-htmlimports-ie8compat-imgcrossorigin-indexeddb-indexeddbblob-inlinesvg-input-inputformaction-inputformenctype-inputformmethod-inputformtarget-inputtypes-intl-jpeg2000-jpegxr-json-lastchild-ligatures-localizednumber-localstorage-lowbandwidth-lowbattery-mathml-mediaqueries-microdata-multiplebgs-mutationobserver-notification-nthchild-objectfit-olreversed-oninput-opacity-outputelem-overflowscrolling-pagevisibility-passiveeventlisteners-peerconnection-performance-picture-placeholder-pointerevents-pointerlock-pointermq-postmessage-preserve3d-progressbar_meter-promises-proximity-queryselector-quotamanagement-regions-requestanimationframe-requestautocomplete-rgba-ruby-sandbox-scriptasync-scriptdefer-scrollsnappoints-seamless-search-serviceworker-sessionstorage-shapes-sharedworkers-siblinggeneral-sizes-smil-speechrecognition-speechsynthesis-srcdoc-srcset-strictmode-stylescoped-subpixelfont-supports-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-target-template-templatestrings-textalignlast-textareamaxlength-textshadow-texttrackapi_track-time-todataurljpeg_todataurlpng_todataurlwebp-touchevents-transferables-typedarrays-unicode-unicoderange-unknownelements-urlparser-urlsearchparams-userdata-userselect-variablefonts-vibrate-video-videoautoplay-videocrossorigin-videoloop-videopreload-vml-webaudio-webgl-webglextensions-webintents-webp-webpalpha-webpanimation-webplossless_webp_lossless-websockets-websocketsbinary-websqldatabase-webworkers-willchange-wrapflow-xdomainrequest-xhr2-xhrresponsetype-xhrresponsetypearraybuffer-xhrresponsetypeblob-xhrresponsetypedocument-xhrresponsetypejson-xhrresponsetypetext-addtest-atrule-domprefixes-hasevent-load-mq-prefixed-prefixedcss-prefixes-printshiv-setclasses-testallprops-testprop-teststyles-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(window,document,undefined){function is(e,t){return typeof e===t}function testRunner(){var e,t,n,i,r,o,s;for(var a in tests)if(tests.hasOwnProperty(a)){if(e=[],t=tests[a],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=is(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)o=e[r],s=o.split("."),1===s.length?Modernizr[s[0]]=i:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=i),classes.push((i?"":"no-")+s.join("-"))}}function setClasses(e){var t=docElement.className,n=Modernizr._config.classPrefix||"";if(isSVG&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),isSVG?docElement.className.baseVal=t:docElement.className=t)}function addTest(e,t){if("object"==typeof e)for(var n in e)hasOwnProp(e,n)&&addTest(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),r=Modernizr[i[0]];if(2==i.length&&(r=r[i[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),setClasses([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function getBody(){var e=document.body;return e||(e=createElement(isSVG?"svg":"body"),e.fake=!0),e}function injectElementWithStyles(e,t,n,i){var r,o,s,a,l="modernizr",d=createElement("div"),c=getBody();if(parseInt(n,10))for(;n--;)s=createElement("div"),s.id=i?i[n]:l+(n+1),d.appendChild(s);return r=createElement("style"),r.type="text/css",r.id="s"+l,(c.fake?c:d).appendChild(r),c.appendChild(d),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)),d.id=l,c.fake&&(c.style.background="",c.style.overflow="hidden",a=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(c)),o=t(d,e),c.fake?(c.parentNode.removeChild(c),docElement.style.overflow=a,docElement.offsetHeight):d.parentNode.removeChild(d),!!o}function contains(e,t){return!!~(""+e).indexOf(t)}function domToCSS(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function computedStyle(e,t,n){var i;if("getComputedStyle"in window){i=getComputedStyle.call(window,e,t);var r=window.console;if(null!==i)n&&(i=i.getPropertyValue(n));else if(r){var o=r.error?"error":"log";r[o].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!t&&e.currentStyle&&e.currentStyle[n];return i}function nativeTestProps(e,t){var n=e.length;if("CSS"in window&&"supports"in window.CSS){for(;n--;)if(window.CSS.supports(domToCSS(e[n]),t))return!0;return!1}if("CSSSupportsRule"in window){for(var i=[];n--;)i.push("("+domToCSS(e[n])+":"+t+")");return i=i.join(" or "),injectElementWithStyles("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==computedStyle(e,null,"position")})}return undefined}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function testProps(e,t,n,i){function r(){s&&(delete mStyle.style,delete mStyle.modElem)}if(i=is(i,"undefined")?!1:i,!is(n,"undefined")){var o=nativeTestProps(e,n);if(!is(o,"undefined"))return o}for(var s,a,l,d,c,u=["modernizr","tspan","samp"];!mStyle.style&&u.length;)s=!0,mStyle.modElem=createElement(u.shift()),mStyle.style=mStyle.modElem.style;for(l=e.length,a=0;l>a;a++)if(d=e[a],c=mStyle.style[d],contains(d,"-")&&(d=cssToDOM(d)),mStyle.style[d]!==undefined){if(i||is(n,"undefined"))return r(),"pfx"==t?d:!0;try{mStyle.style[d]=n}catch(p){}if(mStyle.style[d]!=c)return r(),"pfx"==t?d:!0}return r(),!1}function fnBind(e,t){return function(){return e.apply(t,arguments)}}function testDOMProps(e,t,n){var i;for(var r in e)if(e[r]in t)return n===!1?e[r]:(i=t[e[r]],is(i,"function")?fnBind(i,n||t):i);return!1}function testPropsAll(e,t,n,i,r){var o=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+cssomPrefixes.join(o+" ")+o).split(" ");return is(t,"string")||is(t,"undefined")?testProps(s,t,i,r):(s=(e+" "+domPrefixes.join(o+" ")+o).split(" "),testDOMProps(s,t,n))}function testAllProps(e,t,n){return testPropsAll(e,undefined,undefined,t,n)}function roundedEquals(e,t){return e-1===t||e===t||e+1===t}function detectDeleteDatabase(e,t){var n=e.deleteDatabase(t);n.onsuccess=function(){addTest("indexeddb.deletedatabase",!0)},n.onerror=function(){addTest("indexeddb.deletedatabase",!1)}}var tests=[],ModernizrProto={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){tests.push({name:e,fn:t,options:n})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr;var classes=[],docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase(),hasOwnProp;!function(){var e={}.hasOwnProperty;hasOwnProp=is(e,"undefined")||is(e.call,"undefined")?function(e,t){return t in e&&is(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),ModernizrProto._l={},ModernizrProto.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},ModernizrProto._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest});var omPrefixes="Moz O ms Webkit",cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(e){var t,n=prefixes.length,i=window.CSSRule;if("undefined"==typeof i)return undefined;if(!e)return!1;if(e=e.replace(/^@/,""),t=e.replace(/-/g,"_").toUpperCase()+"_RULE",t in i)return"@"+e;for(var r=0;n>r;r++){var o=prefixes[r],s=o.toUpperCase()+"_"+t;if(s in i)return"@-"+o.toLowerCase()+"-"+e}return!1};ModernizrProto.atRule=atRule;var domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes;var hasEvent=function(){function e(e,n){var i;return e?(n&&"string"!=typeof n||(n=createElement(n||"div")),e="on"+e,i=e in n,!i&&t&&(n.setAttribute||(n=createElement("div")),n.setAttribute(e,""),i="function"==typeof n[e],n[e]!==undefined&&(n[e]=undefined),n.removeAttribute(e)),i):!1}var t=!("onblur"in document.documentElement);return e}();ModernizrProto.hasEvent=hasEvent;var html5;isSVG||!function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=S.elements;return"string"==typeof e?e.split(" "):e}function r(e,t){var n=S.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),S.elements=n+" "+e,d(t)}function o(e){var t=_[e[b]];return t||(t={},x++,e[b]=x,_[x]=t),t}function s(e,n,i){if(n||(n=t),g)return n.createElement(e);i||(i=o(n));var r;return r=i.cache[e]?i.cache[e].cloneNode():y.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!r.canHaveChildren||w.test(e)||r.tagUrn?r:i.frag.appendChild(r)}function a(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),s=0,a=i(),l=a.length;l>s;s++)r.createElement(a[s]);return r}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return S.shivMethods?s(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(S,t.frag)}function d(e){e||(e=t);var i=o(e);return!S.shivCSS||f||i.hasCSS||(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||l(e,i),e}function c(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+i().join("|")+")$","i"),s=[];r--;)t=n[r],o.test(t.nodeName)&&s.push(t.applyElement(u(t)));return s}function u(e){for(var t,n=e.attributes,i=n.length,r=e.ownerDocument.createElement(k+":"+e.nodeName);i--;)t=n[i],t.specified&&r.setAttribute(t.nodeName,t.nodeValue);return r.style.cssText=e.style.cssText,r}function p(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+i().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),s="$1"+k+"\\:$2";r--;)t=n[r]=n[r].split("}"),t[t.length-1]=t[t.length-1].replace(o,s),n[r]=t.join("}");return n.join("{")}function A(e){for(var t=e.length;t--;)e[t].removeNode()}function h(e){function t(){clearTimeout(s._removeSheetTimer),i&&i.removeNode(!0),i=null}var i,r,s=o(e),a=e.namespaces,l=e.parentWindow;return!C||e.printShived?e:("undefined"==typeof a[k]&&a.add(k),l.attachEvent("onbeforeprint",function(){t();for(var o,s,a,l=e.styleSheets,d=[],u=l.length,A=Array(u);u--;)A[u]=l[u];for(;a=A.pop();)if(!a.disabled&&T.test(a.media)){try{o=a.imports,s=o.length}catch(h){s=0}for(u=0;s>u;u++)A.push(o[u]);try{d.push(a.cssText)}catch(h){}}d=p(d.reverse().join("")),r=c(e),i=n(e,d)}),l.attachEvent("onafterprint",function(){A(r),clearTimeout(s._removeSheetTimer),s._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var f,g,m="3.7.3",v=e.html5||{},w=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",x=0,_={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,g=!0}}();var S={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:v.shivCSS!==!1,supportsUnknownElements:g,shivMethods:v.shivMethods!==!1,type:"default",shivDocument:d,createElement:s,createDocumentFragment:a,addElements:r};e.html5=S,d(t);var T=/^$|\b(?:all|print)\b/,k="html5shiv",C=!g&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();S.type+=" print",S.shivPrint=h,h(t),"object"==typeof module&&module.exports&&(module.exports=S)}("undefined"!=typeof window?window:this,document);var err=function(){},warn=function(){};window.console&&(err=function(){var e=console.error?"error":"log";window.console[e].apply(window.console,Array.prototype.slice.call(arguments))},warn=function(){var e=console.warn?"warn":"log";window.console[e].apply(window.console,Array.prototype.slice.call(arguments))}),ModernizrProto.load=function(){"yepnope"in window?(warn("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so we\u2019ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."),window.yepnope.apply(window,[].slice.call(arguments,0))):err("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.")};var mq=function(){var e=window.matchMedia||window.msMatchMedia;return e?function(t){var n=e(t);return n&&n.matches||!1}:function(e){var t=!1;return injectElementWithStyles("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle).position}),t}}();ModernizrProto.mq=mq;var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style}),ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(e,t,n){return 0===e.indexOf("@")?atRule(e):(-1!=e.indexOf("-")&&(e=cssToDOM(e)),t?testPropsAll(e,t,n):testPropsAll(e,"pfx"))},prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];ModernizrProto._prefixes=prefixes;var prefixedCSS=ModernizrProto.prefixedCSS=function(e){var t=prefixed(e);return t&&domToCSS(t)};ModernizrProto.testAllProps=testAllProps;var testProp=ModernizrProto.testProp=function(e,t,n){return testProps([e],undefined,t,n)},testStyles=ModernizrProto.testStyles=injectElementWithStyles;/*!
{
  "name": "a[download] Attribute",
  "property": "adownload",
  "caniuse" : "download",
  "tags": ["media", "attribute"],
  "builderAliases": ["a_download"],
  "notes": [{
    "name": "WhatWG Reference",
    "href": "https://developers.whatwg.org/links.html#downloading-resources"
  }]
}
!*/
Modernizr.addTest("adownload",!window.externalHost&&"download"in createElement("a")),/*!
{
  "name": "Ambient Light Events",
  "property": "ambientlight",
  "notes": [{
    "name": "W3C Ambient Light Events",
    "href": "https://www.w3.org/TR/ambient-light/"
  }]
}
!*/
Modernizr.addTest("ambientlight",hasEvent("devicelight",window)),/*!
{
  "name": "Application Cache",
  "property": "applicationcache",
  "caniuse": "offline-apps",
  "tags": ["storage", "offline"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache"
  }],
  "polyfills": ["html5gears"]
}
!*/
Modernizr.addTest("applicationcache","applicationCache"in window),/*!
{
  "name" : "HTML5 Audio Element",
  "property": "audio",
  "tags" : ["html5", "audio", "media"]
}
!*/
Modernizr.addTest("audio",function(){var e=createElement("audio"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),/*!
{
  "name": "Audio Loop Attribute",
  "property": "audioloop",
  "tags": ["audio", "media"]
}
!*/
Modernizr.addTest("audioloop","loop"in createElement("audio")),/*!
{
  "name": "Audio Preload",
  "property": "audiopreload",
  "tags": ["audio", "media"],
  "async" : true,
  "warnings": ["This test is very large – only include it if you absolutely need it"]
}
!*/
Modernizr.addAsyncTest(function(){function e(n){clearTimeout(t);var r=n!==undefined&&"loadeddata"===n.type?!0:!1;i.removeEventListener("loadeddata",e,!1),addTest("audiopreload",r),i.parentNode&&i.parentNode.removeChild(i)}var t,n=300,i=createElement("audio"),r=i.style;if(!(Modernizr.audio&&"preload"in i))return void addTest("audiopreload",!1);r.position="absolute",r.height=0,r.width=0;try{if(Modernizr.audio.mp3)i.src="data:audio/mpeg;base64,//MUxAAB6AXgAAAAAPP+c6nf//yi/6f3//MUxAMAAAIAAAjEcH//0fTX6C9Lf//0//MUxA4BeAIAAAAAAKX2/6zv//+IlR4f//MUxBMCMAH8AAAAABYWalVMQU1FMy45//MUxBUB0AH0AAAAADkuM1VVVVVVVVVV//MUxBgBUATowAAAAFVVVVVVVVVVVVVV";else if(Modernizr.audio.m4a)i.src="data:audio/x-m4a;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAAfbWRhdN4EAABsaWJmYWFjIDEuMjgAAAFoAQBHAAACiG1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAYAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAG0dHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAYAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABUG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAArEQAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAPttaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAL9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAABftAAAAAABQISCAYBAgAAABhzdHRzAAAAAAAAAAEAAAABAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAXAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAoAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi42NC4y";else if(Modernizr.audio.ogg)i.src="data:audio/ogg;base64,T2dnUwACAAAAAAAAAAD/QwAAAAAAAM2LVKsBHgF2b3JiaXMAAAAAAUSsAAAAAAAAgLsAAAAAAAC4AU9nZ1MAAAAAAAAAAAAA/0MAAAEAAADmvOe6Dy3/////////////////MgN2b3JiaXMdAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAwNzA2MjIAAAAAAQV2b3JiaXMfQkNWAQAAAQAYY1QpRplS0kqJGXOUMUaZYpJKiaWEFkJInXMUU6k515xrrLm1IIQQGlNQKQWZUo5SaRljkCkFmVIQS0kldBI6J51jEFtJwdaYa4tBthyEDZpSTCnElFKKQggZU4wpxZRSSkIHJXQOOuYcU45KKEG4nHOrtZaWY4updJJK5yRkTEJIKYWSSgelU05CSDWW1lIpHXNSUmpB6CCEEEK2IIQNgtCQVQAAAQDAQBAasgoAUAAAEIqhGIoChIasAgAyAAAEoCiO4iiOIzmSY0kWEBqyCgAAAgAQAADAcBRJkRTJsSRL0ixL00RRVX3VNlVV9nVd13Vd13UgNGQVAAABAEBIp5mlGiDCDGQYCA1ZBQAgAAAARijCEANCQ1YBAAABAABiKDmIJrTmfHOOg2Y5aCrF5nRwItXmSW4q5uacc845J5tzxjjnnHOKcmYxaCa05pxzEoNmKWgmtOacc57E5kFrqrTmnHPGOaeDcUYY55xzmrTmQWo21uaccxa0pjlqLsXmnHMi5eZJbS7V5pxzzjnnnHPOOeecc6oXp3NwTjjnnHOi9uZabkIX55xzPhmne3NCOOecc84555xzzjnnnHOC0JBVAAAQAABBGDaGcacgSJ+jgRhFiGnIpAfdo8MkaAxyCqlHo6ORUuoglFTGSSmdIDRkFQAACAAAIYQUUkghhRRSSCGFFFKIIYYYYsgpp5yCCiqppKKKMsoss8wyyyyzzDLrsLPOOuwwxBBDDK20EktNtdVYY62555xrDtJaaa211koppZRSSikIDVkFAIAAABAIGWSQQUYhhRRSiCGmnHLKKaigAkJDVgEAgAAAAgAAADzJc0RHdERHdERHdERHdETHczxHlERJlERJtEzL1ExPFVXVlV1b1mXd9m1hF3bd93Xf93Xj14VhWZZlWZZlWZZlWZZlWZZlWYLQkFUAAAgAAIAQQgghhRRSSCGlGGPMMeegk1BCIDRkFQAACAAgAAAAwFEcxXEkR3IkyZIsSZM0S7M8zdM8TfREURRN01RFV3RF3bRF2ZRN13RN2XRVWbVdWbZt2dZtX5Zt3/d93/d93/d93/d93/d1HQgNWQUASAAA6EiOpEiKpEiO4ziSJAGhIasAABkAAAEAKIqjOI7jSJIkSZakSZ7lWaJmaqZneqqoAqEhqwAAQAAAAQAAAAAAKJriKabiKaLiOaIjSqJlWqKmaq4om7Lruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7rui4QGrIKAJAAANCRHMmRHEmRFEmRHMkBQkNWAQAyAAACAHAMx5AUybEsS9M8zdM8TfRET/RMTxVd0QVCQ1YBAIAAAAIAAAAAADAkw1IsR3M0SZRUS7VUTbVUSxVVT1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTVN0zRNIDRkJQAABADAYo3B5SAhJSXl3hDCEJOeMSYhtV4hBJGS3jEGFYOeMqIMct5C4xCDHggNWREARAEAAMYgxxBzyDlHqZMSOeeodJQa5xyljlJnKcWYYs0oldhSrI1zjlJHraOUYiwtdpRSjanGAgAAAhwAAAIshEJDVgQAUQAAhDFIKaQUYow5p5xDjCnnmHOGMeYcc44556B0UirnnHROSsQYc445p5xzUjonlXNOSiehAACAAAcAgAALodCQFQFAnACAQZI8T/I0UZQ0TxRFU3RdUTRd1/I81fRMU1U90VRVU1Vt2VRVWZY8zzQ901RVzzRV1VRVWTZVVZZFVdVt03V123RV3ZZt2/ddWxZ2UVVt3VRd2zdV1/Zd2fZ9WdZ1Y/I8VfVM03U903Rl1XVtW3VdXfdMU5ZN15Vl03Vt25VlXXdl2fc103Rd01Vl2XRd2XZlV7ddWfZ903WF35VlX1dlWRh2XfeFW9eV5XRd3VdlVzdWWfZ9W9eF4dZ1YZk8T1U903RdzzRdV3VdX1dd19Y105Rl03Vt2VRdWXZl2fddV9Z1zzRl2XRd2zZdV5ZdWfZ9V5Z13XRdX1dlWfhVV/Z1WdeV4dZt4Tdd1/dVWfaFV5Z14dZ1Ybl1XRg+VfV9U3aF4XRl39eF31luXTiW0XV9YZVt4VhlWTl+4ViW3feVZXRdX1ht2RhWWRaGX/id5fZ943h1XRlu3efMuu8Mx++k+8rT1W1jmX3dWWZfd47hGDq/8OOpqq+brisMpywLv+3rxrP7vrKMruv7qiwLvyrbwrHrvvP8vrAso+z6wmrLwrDatjHcvm4sv3Acy2vryjHrvlG2dXxfeArD83R1XXlmXcf2dXTjRzh+ygAAgAEHAIAAE8pAoSErAoA4AQCPJImiZFmiKFmWKIqm6LqiaLqupGmmqWmeaVqaZ5qmaaqyKZquLGmaaVqeZpqap5mmaJqua5qmrIqmKcumasqyaZqy7LqybbuubNuiacqyaZqybJqmLLuyq9uu7Oq6pFmmqXmeaWqeZ5qmasqyaZquq3meanqeaKqeKKqqaqqqraqqLFueZ5qa6KmmJ4qqaqqmrZqqKsumqtqyaaq2bKqqbbuq7Pqybeu6aaqybaqmLZuqatuu7OqyLNu6L2maaWqeZ5qa55mmaZqybJqqK1uep5qeKKqq5ommaqqqLJumqsqW55mqJ4qq6omea5qqKsumatqqaZq2bKqqLZumKsuubfu+68qybqqqbJuqauumasqybMu+78qq7oqmKcumqtqyaaqyLduy78uyrPuiacqyaaqybaqqLsuybRuzbPu6aJqybaqmLZuqKtuyLfu6LNu678qub6uqrOuyLfu67vqucOu6MLyybPuqrPq6K9u6b+sy2/Z9RNOUZVM1bdtUVVl2Zdn2Zdv2fdE0bVtVVVs2TdW2ZVn2fVm2bWE0Tdk2VVXWTdW0bVmWbWG2ZeF2Zdm3ZVv2ddeVdV/XfePXZd3murLty7Kt+6qr+rbu+8Jw667wCgAAGHAAAAgwoQwUGrISAIgCAACMYYwxCI1SzjkHoVHKOecgZM5BCCGVzDkIIZSSOQehlJQy5yCUklIIoZSUWgshlJRSawUAABQ4AAAE2KApsThAoSErAYBUAACD41iW55miatqyY0meJ4qqqaq27UiW54miaaqqbVueJ4qmqaqu6+ua54miaaqq6+q6aJqmqaqu67q6Lpqiqaqq67qyrpumqqquK7uy7Oumqqqq68quLPvCqrquK8uybevCsKqu68qybNu2b9y6ruu+7/vCka3rui78wjEMRwEA4AkOAEAFNqyOcFI0FlhoyEoAIAMAgDAGIYMQQgYhhJBSSiGllBIAADDgAAAQYEIZKDRkRQAQJwAAGEMppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkgppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkqppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoplVJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSCgCQinAAkHowoQwUGrISAEgFAACMUUopxpyDEDHmGGPQSSgpYsw5xhyUklLlHIQQUmktt8o5CCGk1FJtmXNSWosx5hgz56SkFFvNOYdSUoux5ppr7qS0VmuuNedaWqs115xzzbm0FmuuOdecc8sx15xzzjnnGHPOOeecc84FAOA0OACAHtiwOsJJ0VhgoSErAYBUAAACGaUYc8456BBSjDnnHIQQIoUYc845CCFUjDnnHHQQQqgYc8w5CCGEkDnnHIQQQgghcw466CCEEEIHHYQQQgihlM5BCCGEEEooIYQQQgghhBA6CCGEEEIIIYQQQgghhFJKCCGEEEIJoZRQAABggQMAQIANqyOcFI0FFhqyEgAAAgCAHJagUs6EQY5Bjw1BylEzDUJMOdGZYk5qMxVTkDkQnXQSGWpB2V4yCwAAgCAAIMAEEBggKPhCCIgxAABBiMwQCYVVsMCgDBoc5gHAA0SERACQmKBIu7iALgNc0MVdB0IIQhCCWBxAAQk4OOGGJ97whBucoFNU6iAAAAAAAAwA4AEA4KAAIiKaq7C4wMjQ2ODo8AgAAAAAABYA+AAAOD6AiIjmKiwuMDI0Njg6PAIAAAAAAAAAAICAgAAAAAAAQAAAAICAT2dnUwAE7AwAAAAAAAD/QwAAAgAAADuydfsFAQEBAQEACg4ODg==";else{if(!Modernizr.audio.wav)return void addTest("audiopreload",!1);i.src="data:audio/wav;base64,UklGRvwZAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdgZAAAAAAEA/v8CAP//AAABAP////8DAPz/BAD9/wEAAAAAAAAAAAABAP7/AgD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAAD//wIA/v8BAAAA//8BAAAA//8BAP//AQAAAP//AQD//wEAAAD//wEA//8BAP//AQD//wEA//8BAP//AQD+/wMA/f8DAP3/AgD+/wIA/////wMA/f8CAP7/AgD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAQD+/wIA/v8CAP7/AwD9/wIA/v8BAAEA/v8CAP7/AQAAAAAAAAD//wEAAAD//wIA/f8DAP7/AQD//wEAAAD//wEA//8CAP7/AQD//wIA/v8CAP7/AQAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD9/wQA+/8FAPz/AgAAAP//AgD+/wEAAAD//wIA/v8CAP3/BAD8/wQA/P8DAP7/AwD8/wQA/P8DAP7/AQAAAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAP//AQD//wEAAAD//wEA//8BAAAAAAAAAP//AgD+/wEAAAAAAAAAAAD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AgD+/wIA/v8BAP//AQABAP7/AQD//wIA/v8CAP3/AwD/////AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AAABAP//AAABAP//AQD//wAAAAACAP3/AwD9/wIA//8BAP//AQD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8CAAAA/v8EAPv/BAD9/wIAAAD+/wQA+v8HAPr/BAD+/wEAAAD//wIA/f8EAPz/BAD7/wUA/P8EAPz/AwD+/wEAAAD//wEAAAAAAP//AgD8/wUA+/8FAPz/AwD9/wIA//8AAAEA/v8CAP//AQD//wAAAAABAP//AgD9/wMA/f8EAPz/AwD+/wAAAwD7/wUA/P8DAP7/AQAAAP//AgD+/wEAAQD+/wIA/v8BAAEA/v8CAP7/AQAAAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA//8AAAEA/v8DAP3/AgD//wEA//8BAP7/AwD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AgD+/wEAAQD+/wIA/////wIA//8AAAEA/f8DAP//AAABAP////8DAP3/AwD+/wEA//8BAP//AQAAAAAA//8BAP//AQD//wEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAAAAAAAAAAD//wIA/v8BAAAA//8BAAEA/v8BAAAA//8DAPz/AwD+/wIA/v8CAP3/AwD+/wEAAAD//wEA//8BAAAA//8BAAAA/v8EAPv/BAD+/wAAAAABAP7/AgD//wAAAAABAP7/AgD//wAAAAAAAAAAAAABAP3/BAD8/wQA/f8BAAAAAAABAP7/AgD+/wIA/v8CAP7/AgD+/wIA/v8BAAAAAAD//wIA/f8DAP7/AAABAP//AAACAPz/BAD9/wIA//8AAP//AwD9/wMA/P8EAP3/AwD9/wIA//8BAP//AQD+/wMA/f8DAP7/AAABAP//AQAAAP//AQD//wIA/f8DAP7/AQAAAP//AQAAAAAA//8CAP7/AQABAP7/AgD+/wEAAQD+/wIA/v8CAP////8CAP7/AgD//wAAAAABAP7/AwD9/wIAAAD+/wMA/f8CAP//AQD+/wMA/f8CAP//AAACAPz/BQD6/wUA/v///wIA/v8CAP3/BAD7/wYA+v8FAPz/AwD/////AgD+/wEAAAD//wEAAAD//wIA/f8DAP7/AQAAAP//AgD//wAA//8BAAAAAAAAAP//AQD//wEA//8AAAIA/f8DAP3/AgAAAP//AQD//wEA//8AAAEA//8BAP////8CAP//AAABAP3/BAD9/wIA/v8BAAEA//8BAP7/AgD//wEA//8AAAEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAQD+/wIA/v8BAAAAAAD//wIA/v8BAAAAAAAAAAAAAQD+/wMA/f8CAP//AQD//wIA/f8DAP7/AQD//wEA//8CAP7/AAABAP7/AwD9/wMA/v8AAAEA//8BAAAAAAD//wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP7/AgD//wAAAAAAAAAAAQD//wEA/v8DAPz/BQD8/wIA//8AAAEAAAD//wEA//8BAP//AQAAAAAA//8BAP//AgD+/wEAAAAAAP//AQD+/wMA/////wEA/v8CAP//AQD//wEA//8AAAEA//8BAAAA/v8EAPz/AwD+/wEAAAAAAAAA//8CAP7/AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AQD//wEA//8AAAEA/v8EAPv/BAD9/wIA//8BAP7/AwD9/wIA//8AAAEA//8BAP//AQD//wAAAQD//wEAAAD+/wMA/v8AAAIA/f8DAP7/AQD//wAAAQD+/wMA/f8CAP//AAABAP7/AgD+/wMA/f8CAP7/AQABAP7/AgD+/wIA/v8CAP7/AwD8/wMA//8AAAEA//8AAAAAAAABAP//AQD//wAAAQD//wIA/f8DAP3/AwD+/wAAAgD9/wIA//8AAAEAAAD+/wMA/P8FAPv/BAD9/wIA//8AAP//AgD+/wIA/v8BAAAAAAD//wEAAAAAAP//AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AAABAP//AQD//wAAAQD//wEA//8BAP//AAABAAAA//8BAP7/AwD9/wMA/f8DAP3/AgD//wEA//8BAP7/AgD//wAAAgD8/wQA/f8CAP//AQD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAAABAP7/AwD9/wIA/v8DAP3/AwD9/wIA/v8DAPz/BQD7/wQA/f8CAP7/AwD9/wMA/f8CAP//AQAAAP7/AwD+/wEA//8AAAEAAAAAAP//AAABAP//AQAAAP7/AwD9/wMA/f8CAP//AQD//wEA//8AAAIA/f8CAAAA//8BAAAA//8BAAAA/v8EAPv/BAD9/wIA//8AAAEA/v8CAP//AAABAP//AAABAP//AAABAP7/AwD8/wQA/f8CAAAA/v8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAAAAAAAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AgD//wAAAQD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAQD+/wMA/f8CAP//AQD//wEA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD9/wIA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD8/wMA/v8CAP//AAD//wIA/v8CAP7/AQABAP7/AQAAAP//AgD/////AQD//wEAAAD//wEA/v8EAPv/BAD9/wMA/v8BAAAA//8BAAEA/P8GAPr/BQD8/wMA/v8BAAAA//8CAP7/AQABAP3/BAD7/wYA+/8EAPz/AwD//wEA//8BAP7/BAD8/wMA/v8AAAIA/v8BAAAA//8BAAAA//8BAAAA//8CAP3/AwD+/wAAAgD8/wUA/P8DAP7/AAABAAAAAAD//wEAAAD//wIA/f8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/f8EAPz/AwD/////AgD+/wIA/f8DAP7/AgD+/wEA//8CAP7/AQD//wEAAAAAAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAP//AQAAAP//AAACAP3/BAD7/wQA/v8BAAAA//8BAP//AQAAAP//AQAAAP7/BAD7/wUA+/8EAP3/AgD//wAAAQD+/wIA//8AAAEA/v8CAP//AQD+/wEAAAAAAAAAAAD//wEA//8CAP3/AwD9/wIA//8AAAAAAAAAAAAA//8BAP//AgD+/wEA//8CAP7/AQAAAP//AgD/////AgD/////AgD+/wIA//8AAP//AQABAP7/AgD9/wMA/v8CAP////8BAAAAAAAAAAAA//8CAP////8DAPz/AwD+/wEAAAAAAP//AQD//wEAAAD//wEAAAD+/wQA+/8FAPz/AgAAAP//AgD9/wMA/v8BAAAAAAD//wEAAAD//wIA/v8BAAAAAAD//wIA/v8BAAAA//8BAAAA//8CAP7/AQD//wEA//8BAAAA//8BAP//AAABAP//AQAAAP7/AgD//wEA//8AAAAAAQD+/wMA/P8EAP7///8DAPz/BQD8/wEAAQD+/wMA/v8AAAEA//8BAP//AQD//wEA/v8CAP//AQD//wAAAAABAAAA//8BAP//AQAAAAAA//8BAP//AgD+/wAAAQD//wIA/f8CAP//AQAAAP7/AwD9/wMA/v8BAP//AAABAP//AgD9/wIA//8BAAAA//8BAAAA//8CAP3/AwD+/wEAAAD+/wQA/P8DAP7/AAACAP7/AQAAAP//AQAAAP//AQAAAP//AgD9/wIAAAD//wIA/f8DAP7/AQD//wEA//8CAP7/AQD//wAAAQD//wEA//8AAAAAAQD//wEAAAD9/wUA+/8FAPz/AgD//wAAAQD//wAAAQD+/wMA/f8BAAEA/v8CAP7/AgD+/wIA/v8BAAAAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP7/AQAAAP//AQAAAP//AQD//wAAAQD//wAAAQD+/wMA/f8CAAAA/v8DAP3/AgAAAP//AQAAAP7/AwD9/wMA/v8BAP//AQD//wEAAAD+/wMA/f8CAAAA/v8CAP//AAAAAAEA//8AAAEA/v8DAP3/AwD9/wIA//8BAP//AgD8/wQA/v8BAAAA/v8CAP//AQD//wAAAAAAAAEA/f8EAPz/BAD9/wIA//8AAAAAAAABAP//AAAAAAAAAAABAP3/BAD9/wIA/v8BAAEA//8AAAAA//8CAP7/AgD9/wQA+/8FAPv/BQD8/wMA/f8DAP3/AwD+/wAAAgD9/wMA/f8CAAAA/v8EAPv/BQD7/wUA/P8DAP///v8DAP3/BAD8/wMA/f8DAP7/AQD//wEAAAD//wEA/v8CAAAA/v8CAP7/AgD//wAAAAAAAAAAAQD+/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAP//AgD//wEA/v8BAAAAAQD//wAAAAAAAAEA//8AAAEA//8BAP//AAABAP//AQD+/wIA/v8DAPz/BAD8/wQA/f8BAAAAAQD+/wMA/P8DAP//AAAAAAAAAAD//wMA+/8FAP3/AQABAP3/BAD8/wMA/v8BAAAA//8CAP3/AwD+/wEAAQD9/wMA/f8EAPz/BAD7/wQA/v8BAAEA/f8DAP7/AQAAAP//AgD+/wEAAAD//wIA/v8CAP7/AgD+/wEAAQD//wEA/v8CAP7/BAD7/wQA/f8CAAAA//8AAAAAAAABAP//AQD+/wEAAQD+/wMA/f8BAAEA/v8DAPz/AwD/////AwD8/wQA/P8DAP7/AgD//wAA//8BAAAAAAAAAP//AgD+/wEAAAD//wIA/v8BAAAA//8CAP3/AgD//wAAAQD+/wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP3/BAD7/wQA/v8BAAAA//8AAAEAAAD//wIA/f8DAP7/AgD+/wIA/v8CAP7/AgD+/wEAAAAAAP//AgD9/wMA/v8BAP//AgD9/wMA/v8AAAEA//8BAP//AQD//wEA//8AAAEA/v8EAPz/AgD//wAAAQAAAP//AAABAP//AQD//wEAAAD//wEA//8BAAEA/f8DAP7/AQABAP3/AwD+/wIA/////wEAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD//wAA//8CAP3/BAD9/wAAAgD9/wMA/v8BAP//AQAAAP//AQAAAP//AgD9/wMA/f8EAPz/AwD+/wEAAAAAAAAAAAD//wIA/f8EAP3/AAABAAAA//8CAP7/AQAAAP//AQAAAAAA//8BAP//AQAAAP//AQAAAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wIA/v8CAP3/BAD9/wEAAAD//wEAAQD9/wMA/f8CAAAA/v8DAP3/AgD//wAAAQD+/wIA/v8CAP7/AQAAAP//AgD+/wEAAAAAAP//AwD7/wUA/f8BAAEA/v8BAAEA/v8DAP3/AgD//wEA//8BAP//AQD//wEA//8CAP3/BAD7/wQA/////wIA/v8AAAIA/v8CAP3/BAD7/wUA/P8DAP3/AwD9/wMA/v8AAAIA/v8CAP7/AgD+/wIA//8AAAEA/v8CAP7/AgD//wAAAAD//wEAAAAAAAAA//8BAP7/BAD7/wUA/P8CAAAA//8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD+/wEA//8CAP3/AwD+/wAAAwD8/wIAAAD//wIA/////wIA/v8CAP7/AgD+/wEAAAAAAAAAAAAAAP//AgD+/wIA//8AAAAA//8CAP7/AgD+/wEA//8CAP3/AwD9/wMA/v8BAP7/AwD9/wMA/f8CAP//AQD+/wIA//8BAP//AQD+/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAP//AgD+/wIA/v8CAP//AAAAAAEA//8BAP//AAABAAAA//8BAP//AQD//wEA//8BAP//AQAAAP//AQD//wEAAAD//wIA/f8CAAAA//8BAAAA//8BAP//AAABAP//AQD//wAAAAAAAAEA/v8CAP//AQD//wAAAAABAP7/AwD9/wIAAAD+/wIA//8BAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA/v8CAP7/AgD//wAAAAAAAAAAAAAAAP//AgD/////AgD9/wQA/f8BAAAAAAAAAAEA/f8DAP////8DAP3/AQABAP7/AgD//wAAAQD+/wMA/f8CAP7/AQABAP7/AwD7/wYA+v8FAP3/AQABAP7/AgD+/wMA/f8CAP7/AwD+/wEA//8BAP//AQAAAP7/BQD5/wcA+v8FAPz/AwD+/wIA/v8BAAAA//8DAPv/BQD8/wMA/////wEAAAAAAAAAAAD//wIA/f8DAP7/AQAAAP//AQAAAP//AgD+/wIA/v8BAAEA/f8EAPz/AwD+/wEA//8CAP7/AQD//wEA//8CAP7/AQAAAP//AgD+/wEAAAAAAAAAAAAAAAAAAAD//wIA/f8EAPz/AwD+/wEA//8CAP7/AgD+/wEAAQD+/wEAAQD+/wIA/////wIA//8AAAAAAAAAAAAAAAD//wEAAAAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AQD//wEA//8BAP//AQAAAP7/AwD9/wMA/v8BAP7/AwD9/wMA/v8BAP//AAABAP//AQD//wAAAAABAP//AAAAAAAAAQD//wEA/v8CAAAA/v8EAPv/BAD9/wIAAAD+/wMA/P8DAP//AAAAAP//AQD//wIA/f8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD9/wQA+/8FAPv/BQD8/wMA/v8BAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAAEA/f8DAP3/AgAAAP//AQD//wAAAQD//wEA//8BAP//AQD//wEA/v8DAP3/AgAAAP7/AwD9/wIAAAD//wEAAAD//wIA/f8DAP7/AgD9/wQA+/8FAPz/AgAAAP//AgD9/wIA//8BAP//AQD//wEA//8BAP//AQD//wIA/f8DAP3/AgD//wAAAQD+/wIA/v8BAAEA/v8CAP7/AgD+/wMA/P8DAP//AAABAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/v8CAP3/BAD8/wMA/v8BAAAAAAD//wEAAAAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD+/wEA//8CAP3/AwD9/wMA/f8EAPv/BAD+/wAAAQD//wEA//8BAP//AAABAP//AQD//wEAAAD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8DAP7/AAACAP3/AwD+/wEA//8BAP//AQAAAP//AQAAAP7/AwD9/wMA/v8AAAEA//8BAP//AAAAAAEA//8AAAEA/v8CAP//AAAAAAEA/v8DAPz/BAD9/wEAAQD+/wEAAQD9/wQA/P8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAQD+/wIA/////wIA/v8BAAAA//8BAP//AQD//wEA//8BAAAA/v8EAPz/AwD///7/BAD8/wMA/////wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP////8CAP7/AwD9/wIA/v8CAP//AAABAP7/AwD9/wEAAQD+/wMA/f8CAP//AAAAAAEA/v8DAPz/BAD9/wIA/v8CAP7/AgD//wAAAAD//wIA/v8CAP7/AQAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AwD8/wUA+v8GAPv/AwD//wAAAAAAAAAA//8DAPv/BQD9/wAAAgD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAAAAAAAP//AQAAAAAAAAD//wEA//8CAP3/AwD+/wAAAgD+/wEAAAD//wIA/v8CAP7/AgD/////AwD8/wUA/P8CAP//AQD//wIA/f8DAP3/AwD+/wAAAQD+/wMA/f8DAP3/AgD//wAAAQD//wEA//8BAP7/AwD+/wEA//8AAAEA//8CAPz/BAD9/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAAEA/v8CAP7/AgD//wEA/f8EAPz/BAD+////AgD//wAAAQD//wAAAQD//wEA//8BAP7/AwD+/wEA"}}catch(o){return void addTest("audiopreload",!1)}i.setAttribute("preload","auto"),i.style.cssText="display:none",docElement.appendChild(i),setTimeout(function(){i.addEventListener("loadeddata",e,!1),t=setTimeout(e,n)},0)}),/*!
{
  "name": "Web Audio API",
  "property": "webaudio",
  "caniuse": "audio-api",
  "polyfills": ["xaudiojs", "dynamicaudiojs", "audiolibjs"],
  "tags": ["audio", "media"],
  "builderAliases": ["audio_webaudio_api"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3 Specification",
    "href": "https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html"
  }]
}
!*/
Modernizr.addTest("webaudio",function(){var e="webkitAudioContext"in window,t="AudioContext"in window;return Modernizr._config.usePrefixes?e||t:t}),/*!
{
  "name": "Battery API",
  "property": "batteryapi",
  "aliases": ["battery-api"],
  "builderAliases": ["battery_api"],
  "tags": ["device", "media"],
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozBattery"
  }]
}
!*/
Modernizr.addTest("batteryapi",!!prefixed("battery",navigator),{aliases:["battery-api"]}),/*!
{
  "name": "Low Battery Level",
  "property": "lowbattery",
  "tags": ["hardware", "mobile"],
  "builderAliases": ["battery_level"],
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/battery"
  }]
}
!*/
Modernizr.addTest("lowbattery",function(){var e=.2,t=prefixed("battery",navigator);return!!(t&&!t.charging&&t.level<=e)}),/*!
{
  "name": "Blob constructor",
  "property": "blobconstructor",
  "aliases": ["blob-constructor"],
  "builderAliases": ["blob_constructor"],
  "caniuse": "blobbuilder",
  "notes": [{
    "name": "W3C spec",
    "href": "https://w3c.github.io/FileAPI/#constructorBlob"
  }],
  "polyfills": ["blobjs"]
}
!*/
Modernizr.addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]}),/*!
{
  "name": "Canvas",
  "property": "canvas",
  "caniuse": "canvas",
  "tags": ["canvas", "graphics"],
  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
}
!*/
Modernizr.addTest("canvas",function(){var e=createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}),/*!
{
  "name": "canvas blending support",
  "property": "canvasblending",
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
      "name": "HTML5 Spec",
      "href": "https://dvcs.w3.org/hg/FXTF/rawfile/tip/compositing/index.html#blending"
    },
    {
      "name": "Article",
      "href": "https://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas"
    }]
}
!*/
Modernizr.addTest("canvasblending",function(){if(Modernizr.canvas===!1)return!1;var e=createElement("canvas").getContext("2d");try{e.globalCompositeOperation="screen"}catch(t){}return"screen"===e.globalCompositeOperation});/*!
{
  "name": "canvas.toDataURL type support",
  "property": ["todataurljpeg", "todataurlpng", "todataurlwebp"],
  "tags": ["canvas"],
  "builderAliases": ["canvas_todataurl_type"],
  "async" : false,
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement.toDataURL"
  }]
}
!*/
var canvas=createElement("canvas");Modernizr.addTest("todataurljpeg",function(){return!!Modernizr.canvas&&0===canvas.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),Modernizr.addTest("todataurlpng",function(){return!!Modernizr.canvas&&0===canvas.toDataURL("image/png").indexOf("data:image/png")}),Modernizr.addTest("todataurlwebp",function(){var e=!1;try{e=!!Modernizr.canvas&&0===canvas.toDataURL("image/webp").indexOf("data:image/webp")}catch(t){}return e}),/*!
{
  "name": "canvas winding support",
  "property": ["canvaswinding"],
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
    "name": "Article",
    "href": "https://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/"
  }]
}
!*/
Modernizr.addTest("canvaswinding",function(){if(Modernizr.canvas===!1)return!1;var e=createElement("canvas").getContext("2d");return e.rect(0,0,10,10),e.rect(2,2,6,6),e.isPointInPath(5,5,"evenodd")===!1}),/*!
{
  "name": "Canvas text",
  "property": "canvastext",
  "caniuse": "canvas-text",
  "tags": ["canvas", "graphics"],
  "polyfills": ["canvastext"]
}
!*/
Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof createElement("canvas").getContext("2d").fillText}),/*!
{
  "name": "Content Editable",
  "property": "contenteditable",
  "caniuse": "contenteditable",
  "notes": [{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/interaction.html#contenteditable"
  }]
}
!*/
Modernizr.addTest("contenteditable",function(){if("contentEditable"in docElement){var e=createElement("div");return e.contentEditable=!0,"true"===e.contentEditable}}),/*!
{
  "name": "Context menus",
  "property": "contextmenu",
  "caniuse": "menu",
  "notes": [{
    "name": "W3C spec",
    "href": "http://www.w3.org/TR/html5/interactive-elements.html#context-menus"
  },{
    "name": "thewebrocks.com Demo",
    "href": "http://thewebrocks.com/demos/context-menu/"
  }],
  "polyfills": ["jquery-contextmenu"]
}
!*/
Modernizr.addTest("contextmenu","contextMenu"in docElement&&"HTMLMenuItemElement"in window),/*!
{
  "name": "Cookies",
  "property": "cookies",
  "tags": ["storage"],
  "authors": ["tauren"]
}
!*/
Modernizr.addTest("cookies",function(){try{document.cookie="cookietest=1";var e=-1!=document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(t){return!1}}),/*!
{
  "name": "Cross-Origin Resource Sharing",
  "property": "cors",
  "caniuse": "cors",
  "authors": ["Theodoor van Donge"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS"
  }],
  "polyfills": ["pmxdr", "ppx", "flxhr"]
}
!*/
Modernizr.addTest("cors","XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest),/*!
{
  "name": "Custom Elements API",
  "property": "customelements",
  "tags": ["customelements"],
  "polyfills": ["customelements"],
  "notes": [{
    "name": "Specs for Custom Elements",
    "href": "https://www.w3.org/TR/custom-elements/"
  }]
}
!*/
Modernizr.addTest("customelements","customElements"in window);/*!
{
  "name": "Web Cryptography",
  "property": "cryptography",
  "caniuse": "cryptography",
  "tags": ["crypto"],
  "authors": ["roblarsen"],
  "notes": [{
    "name": "W3C Editor's Draft",
    "href": "https://www.w3.org/TR/WebCryptoAPI/"
  }],
  "polyfills": [
    "polycrypt"
  ]
}
!*/
var crypto=prefixed("crypto",window);Modernizr.addTest("crypto",!!prefixed("subtle",crypto));/*!
{
  "name": "getRandomValues",
  "property": "getrandomvalues",
  "caniuse": "window.crypto.getRandomValues",
  "tags": ["crypto"],
  "authors": ["komachi"],
  "notes": [{
    "name": "W3C Editor’s Draft",
    "href": "https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#RandomSource-method-getRandomValues"
  }],
  "polyfills": [
    "polycrypt"
  ]
}
!*/
var crypto=prefixed("crypto",window),supportsGetRandomValues;if(crypto&&"getRandomValues"in crypto&&"Uint32Array"in window){var array=new Uint32Array(10),values=crypto.getRandomValues(array);supportsGetRandomValues=values&&is(values[0],"number")}Modernizr.addTest("getrandomvalues",!!supportsGetRandomValues),/*!
{
  "name": "cssall",
  "property": "cssall",
  "notes": [{
    "name": "Spec",
    "href": "https://drafts.csswg.org/css-cascade/#all-shorthand"
  }]
}
!*/
Modernizr.addTest("cssall","all"in docElement.style),/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
!*/
Modernizr.addTest("cssanimations",testAllProps("animationName","a",!0)),/*!
{
  "name": "Appearance",
  "property": "appearance",
  "caniuse": "css-appearance",
  "tags": ["css"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance"
  },{
    "name": "CSS-Tricks CSS Almanac: appearance",
    "href": "https://css-tricks.com/almanac/properties/a/appearance/"
  }]
}
!*/
Modernizr.addTest("appearance",testAllProps("appearance")),/*!
{
  "name": "Backdrop Filter",
  "property": "backdropfilter",
  "authors": ["Brian Seward"],
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Editor’s Draft specification",
      "href": "https://drafts.fxtf.org/filters-2/#BackdropFilterProperty"
    },
    {
      "name": "Caniuse for CSS Backdrop Filter",
      "href": "http://caniuse.com/#feat=css-backdrop-filter"
    },
    {
      "name": "WebKit Blog introduction + Demo",
      "href": "https://www.webkit.org/blog/3632/introducing-backdrop-filters/"
    }
  ]
}
!*/
Modernizr.addTest("backdropfilter",testAllProps("backdropFilter")),/*!
{
  "name": "CSS Background Blend Mode",
  "property": "backgroundblendmode",
  "caniuse": "css-backgroundblendmode",
  "tags": ["css"],
  "notes": [
    {
      "name": "CSS Blend Modes could be the next big thing in Web Design",
      "href": " https://medium.com/@bennettfeely/css-blend-modes-could-be-the-next-big-thing-in-web-design-6b51bf53743a"
    }, {
      "name": "Demo",
      "href": "http://bennettfeely.com/gradients/"
    }
  ]
}
!*/
Modernizr.addTest("backgroundblendmode",prefixed("backgroundBlendMode","text")),/*!
{
  "name": "CSS Background Clip Text",
  "property": "backgroundcliptext",
  "authors": ["ausi"],
  "tags": ["css"],
  "notes": [
    {
      "name": "CSS Tricks Article",
      "href": "https://css-tricks.com/image-under-text/"
    },
    {
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip"
    },
    {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/199"
    }
  ]
}
!*/
Modernizr.addTest("backgroundcliptext",function(){return testAllProps("backgroundClip","text")}),/*!
{
  "name": "Background Position Shorthand",
  "property": "bgpositionshorthand",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_shorthand"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-position"
  }, {
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/css3-background/#background-position"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/Blink/bBXvt/"
  }]
}
!*/
Modernizr.addTest("bgpositionshorthand",function(){var e=createElement("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),/*!
{
  "name": "Background Position XY",
  "property": "bgpositionxy",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_xy"],
  "authors": ["Allan Lei", "Brandom Aaron"],
  "notes": [{
    "name": "Demo",
    "href": "https://jsfiddle.net/allanlei/R8AYS/"
  }, {
    "name": "Adapted From",
    "href": "https://github.com/brandonaaron/jquery-cssHooks/blob/master/bgpos.js"
  }]
}
!*/
Modernizr.addTest("bgpositionxy",function(){return testAllProps("backgroundPositionX","3px",!0)&&testAllProps("backgroundPositionY","5px",!0)}),/*!
{
  "name": "Background Repeat",
  "property": ["bgrepeatspace", "bgrepeatround"],
  "tags": ["css"],
  "builderAliases": ["css_backgroundrepeat"],
  "authors": ["Ryan Seddon"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat"
  }, {
    "name": "Test Page",
    "href": "https://jsbin.com/uzesun/"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/ryanseddon/yMLTQ/6/"
  }]
}
!*/
Modernizr.addTest("bgrepeatround",testAllProps("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",testAllProps("backgroundRepeat","space")),/*!
{
  "name": "Background Size",
  "property": "backgroundsize",
  "tags": ["css"],
  "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
  "notes": [{
    "name": "Related Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/396"
  }]
}
!*/
Modernizr.addTest("backgroundsize",testAllProps("backgroundSize","100%",!0)),/*!
{
  "name": "Background Size Cover",
  "property": "bgsizecover",
  "tags": ["css"],
  "builderAliases": ["css_backgroundsizecover"],
  "notes": [{
    "name" : "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-size"
  }]
}
!*/
Modernizr.addTest("bgsizecover",testAllProps("backgroundSize","cover")),/*!
{
  "name": "Border Image",
  "property": "borderimage",
  "caniuse": "border-image",
  "polyfills": ["css3pie"],
   "knownBugs": ["Android < 2.0 is true, but has a broken implementation"],
  "tags": ["css"]
}
!*/
Modernizr.addTest("borderimage",testAllProps("borderImage","url() 1",!0)),/*!
{
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/
Modernizr.addTest("borderradius",testAllProps("borderRadius","0px",!0)),/*!
{
  "name": "Box Shadow",
  "property": "boxshadow",
  "caniuse": "css-boxshadow",
  "tags": ["css"],
  "knownBugs": [
    "WebOS false positives on this test.",
    "The Kindle Silk browser false positives"
  ]
}
!*/
Modernizr.addTest("boxshadow",testAllProps("boxShadow","1px 1px",!0)),/*!
{
  "name": "Box Sizing",
  "property": "boxsizing",
  "caniuse": "css3-boxsizing",
  "polyfills": ["borderboxmodel", "boxsizingpolyfill", "borderbox"],
  "tags": ["css"],
  "builderAliases": ["css_boxsizing"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/248"
  }]
}
!*/
Modernizr.addTest("boxsizing",testAllProps("boxSizing","border-box",!0)&&(document.documentMode===undefined||document.documentMode>7)),/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=createElement("a");return n.style.cssText=e+prefixes.join(t+e),!!n.style.length}),/*!
{
  "name": "CSS :checked pseudo-selector",
  "caniuse": "css-sel3",
  "property": "checked",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/879"
  }]
}
!*/
Modernizr.addTest("checked",function(){return testStyles("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=createElement("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),/*!
{
  "name": "CSS Font ch Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "csschunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/
Modernizr.addTest("csschunit",function(){var e,t=modElem.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(n){e=!1}return e}),/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/
function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=testAllProps("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],i=0;i<n.length;i++)e=n[i].toLowerCase(),t=testAllProps("column"+n[i]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||testAllProps(n[i])),Modernizr.addTest("csscolumns."+e,t)}(),/*!
{
  "name": "CSS Grid (old & new)",
  "property": ["cssgrid", "cssgridlegacy"],
  "authors": ["Faruk Ates"],
  "tags": ["css"],
  "notes": [{
    "name": "The new, standardized CSS Grid",
    "href": "https://www.w3.org/TR/css3-grid-layout/"
  }, {
    "name": "The _old_ CSS Grid (legacy)",
    "href": "https://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/"
  }]
}
!*/
Modernizr.addTest("cssgridlegacy",testAllProps("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",testAllProps("grid-template-rows","none",!0)),/*!
{
  "name": "CSS Cubic Bezier Range",
  "property": "cubicbezierrange",
  "tags": ["css"],
  "builderAliases": ["css_cubicbezierrange"],
  "doc" : null,
  "authors": ["@calvein"],
  "warnings": ["cubic-bezier values can't be > 1 for Webkit until [bug #45761](https://bugs.webkit.org/show_bug.cgi?id=45761) is fixed"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "http://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/
Modernizr.addTest("cubicbezierrange",function(){var e=createElement("a");return e.style.cssText=prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),/*!
{
  "name": "CSS Display run-in",
  "property": "display-runin",
  "authors": ["alanhogan"],
  "tags": ["css"],
  "builderAliases": ["css_displayrunin"],
  "notes": [{
    "name": "CSS Tricks Article",
    "href": "https://css-tricks.com/596-run-in/"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/198"
  }]
}
!*/
Modernizr.addTest("displayrunin",testAllProps("display","run-in"),{aliases:["display-runin"]}),/*!
{
  "name": "CSS Display table",
  "property": "displaytable",
  "caniuse": "css-table",
  "authors": ["scottjehl"],
  "tags": ["css"],
  "builderAliases": ["css_displaytable"],
  "notes": [{
    "name": "Detects for all additional table display values",
    "href": "http://pastebin.com/Gk9PeVaQ"
  }]
}
!*/
testStyles("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2),/*!
{
  "name": "CSS text-overflow ellipsis",
  "property": "ellipsis",
  "caniuse": "text-overflow",
  "polyfills": [
    "text-overflow"
  ],
  "tags": ["css"]
}
!*/
Modernizr.addTest("ellipsis",testAllProps("textOverflow","ellipsis"));/*!
{
  "name": "CSS.escape()",
  "property": "cssescape",
  "polyfills": [
    "css-escape"
  ],
  "tags": [
    "css",
    "cssom"
  ]
}
!*/
var CSS=window.CSS;Modernizr.addTest("cssescape",CSS?"function"==typeof CSS.escape:!1),/*!
{
  "name": "CSS Font ex Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "cssexunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/
Modernizr.addTest("cssexunit",function(){var e,t=modElem.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e});/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/
var newSyntax="CSS"in window&&"supports"in window.CSS,oldSyntax="supportsCSS"in window;Modernizr.addTest("supports",newSyntax||oldSyntax),/*!
{
  "name": "CSS Filters",
  "property": "cssfilters",
  "caniuse": "css-filters",
  "polyfills": ["polyfilter"],
  "tags": ["css"],
  "builderAliases": ["css_filters"],
  "notes": [{
    "name": "MDN article on CSS filters",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
  }]
}
!*/
Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return testAllProps("filter","blur(2px)");var e=createElement("a");return e.style.cssText=prefixes.join("filter:blur(2px); "),!!e.style.length&&(document.documentMode===undefined||document.documentMode>9)}),/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",!0)),/*!
{
  "name": "Flexbox (legacy)",
  "property": "flexboxlegacy",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _old_ flexbox",
    "href": "https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"
  }]
}
!*/
Modernizr.addTest("flexboxlegacy",testAllProps("boxDirection","reverse",!0)),/*!
{
  "name": "Flexbox (tweener)",
  "property": "flexboxtweener",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _inbetween_ flexbox",
    "href": "https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
  }],
  "warnings": ["This represents an old syntax, not the latest standard syntax."]
}
!*/
Modernizr.addTest("flexboxtweener",testAllProps("flexAlign","end",!0)),/*!
{
  "name": "Flex Line Wrapping",
  "property": "flexwrap",
  "tags": ["css", "flexbox"],
  "notes": [{
    "name": "W3C Flexible Box Layout spec",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "Does not imply a modern implementation – see documentation."
  ]
}
!*/
Modernizr.addTest("flexwrap",testAllProps("flexWrap","wrap",!0));/*!
{
  "name": "@font-face",
  "property": "fontface",
  "authors": ["Diego Perini", "Mat Marquis"],
  "tags": ["css"],
  "knownBugs": [
    "False Positive: WebOS https://github.com/Modernizr/Modernizr/issues/342",
    "False Postive: WP7 https://github.com/Modernizr/Modernizr/issues/538"
  ],
  "notes": [{
    "name": "@font-face detection routine by Diego Perini",
    "href": "http://javascript.nwbox.com/CSSSupport/"
  },{
    "name": "Filament Group @font-face compatibility research",
    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
  },{
    "name": "Filament Grunticon/@font-face device testing results",
    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
  },{
    "name": "CSS fonts on Android",
    "href": "https://stackoverflow.com/questions/3200069/css-fonts-on-android"
  },{
    "name": "@font-face and Android",
    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
  }]
}
!*/
var blacklist=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();blacklist?Modernizr.addTest("fontface",!1):testStyles('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=document.getElementById("smodernizr"),i=n.sheet||n.styleSheet,r=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"",o=/src/i.test(r)&&0===r.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface",o)}),/*!
{
  "name": "CSS Generated Content",
  "property": "generatedcontent",
  "tags": ["css"],
  "warnings": ["Android won't return correct height for anything below 7px #738"],
  "notes": [{
    "name": "W3C CSS Selectors Level 3 spec",
    "href": "https://www.w3.org/TR/css3-selectors/#gen-content"
  },{
    "name": "MDN article on :before",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  },{
    "name": "MDN article on :after",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  }]
}
!*/
testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=6)}),/*!
{
  "name": "CSS Gradients",
  "caniuse": "css-gradients",
  "property": "cssgradients",
  "tags": ["css"],
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
  "notes": [{
    "name": "Webkit Gradient Syntax",
    "href": "https://webkit.org/blog/175/introducing-css-gradients/"
  },{
    "name": "Linear Gradient Syntax",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"
  },{
    "name": "W3C Gradient Spec",
    "href": "https://drafts.csswg.org/css-images-3/#gradients"
  }]
}
!*/
Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="",r=0,o=prefixes.length-1;o>r;r++)e=0===r?"to ":"",i+=t+prefixes[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(i+=t+"-webkit-"+n);var s=createElement("a"),a=s.style;return a.cssText=i,(""+a.backgroundImage).indexOf("gradient")>-1}),/*! {
  "name": "CSS Hairline",
  "property": "hairline",
  "tags": ["css"],
  "authors": ["strarsis"],
  "notes": [{
    "name": "Blog post about CSS retina hairlines",
    "href": "http://dieulot.net/css-retina-hairline"
  },{
    "name": "Derived from",
    "href": "https://gist.github.com/dieulot/520a49463f6058fbc8d1"
  }]
}
!*/
Modernizr.addTest("hairline",function(){return testStyles("#modernizr {border:.5px solid transparent}",function(e){return 1===e.offsetHeight})}),/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
!*/
Modernizr.addTest("hsla",function(){var e=createElement("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",contains(e.backgroundColor,"rgba")||contains(e.backgroundColor,"hsla")}),/*!
{
  "name": "CSS Hyphens",
  "caniuse": "css-hyphens",
  "property": ["csshyphens", "softhyphens", "softhyphensfind"],
  "tags": ["css"],
  "builderAliases": ["css_hyphens"],
  "async" : true,
  "authors": ["David Newton"],
  "warnings": [
    "These tests currently require document.body to be present",
    "If loading Hyphenator.js via yepnope, be cautious of issue 158: http://code.google.com/p/hyphenator/issues/detail?id=158",
    "This is very large – only include it if you absolutely need it"
    ],
  "notes": [{
    "name": "The Current State of Hyphenation on the Web.",
    "href": "http://davidnewton.ca/the-current-state-of-hyphenation-on-the-web"
  },{
    "name": "Hyphenation Test Page",
    "href": "http://davidnewton.ca/demos/hyphenation/test.html"
  },{
    "name": "Hyphenation is Language Specific",
    "href": " http://code.google.com/p/hyphenator/source/diff?spec=svn975&r=975&format=side&path=/trunk/Hyphenator.js#sc_svn975_313"
  },{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/312"
  }]
}
!*/
Modernizr.addAsyncTest(function(){function e(){function n(){try{var e=createElement("div"),t=createElement("span"),n=e.style,i=0,r=0,o=!1,s=document.body.firstElementChild||document.body.firstChild;return e.appendChild(t),t.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",document.body.insertBefore(e,s),n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",i=t.offsetHeight,r=t.offsetWidth,n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+prefixes.join("hyphens:auto; "),o=t.offsetHeight!=i||t.offsetWidth!=r,document.body.removeChild(e),e.removeChild(t),o}catch(a){return!1}}function i(e,t){try{var n=createElement("div"),i=createElement("span"),r=n.style,o=0,s=!1,a=!1,l=!1,d=document.body.firstElementChild||document.body.firstChild;return r.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",n.appendChild(i),document.body.insertBefore(n,d),i.innerHTML="mm",o=i.offsetHeight,i.innerHTML="m"+e+"m",a=i.offsetHeight>o,t?(i.innerHTML="m<br />m",o=i.offsetWidth,i.innerHTML="m"+e+"m",l=i.offsetWidth>o):l=!0,a===!0&&l===!0&&(s=!0),document.body.removeChild(n),n.removeChild(i),s}catch(c){return!1}}function r(e){try{var t,n=createElement("input"),i=createElement("div"),r="lebowski",o=!1,s=document.body.firstElementChild||document.body.firstChild;i.innerHTML=r+e+r,document.body.insertBefore(i,s),document.body.insertBefore(n,i),n.setSelectionRange?(n.focus(),n.setSelectionRange(0,0)):n.createTextRange&&(t=n.createTextRange(),t.collapse(!0),t.moveEnd("character",0),t.moveStart("character",0),t.select());try{window.find?o=window.find(r+r):(t=window.self.document.body.createTextRange(),o=t.findText(r+r))}catch(a){o=!1}return document.body.removeChild(i),document.body.removeChild(n),o}catch(a){return!1}}return document.body||document.getElementsByTagName("body")[0]?(addTest("csshyphens",function(){if(!testAllProps("hyphens","auto",!0))return!1;try{return n()}catch(e){return!1}}),addTest("softhyphens",function(){try{return i("&#173;",!0)&&i("&#8203;",!1)}catch(e){return!1}}),void addTest("softhyphensfind",function(){try{return r("&#173;")&&r("&#8203;")}catch(e){return!1}})):void setTimeout(e,t)}var t=300;setTimeout(e,t)}),/*!
{
  "name": "CSS :invalid pseudo-class",
  "property": "cssinvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid"
  }]
}
!*/
Modernizr.addTest("cssinvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=createElement("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),/*!
{
  "name": "CSS :last-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "lastchild",
  "tags": ["css"],
  "builderAliases": ["css_lastchild"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/304"
  }]
}
!*/
testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),/*!
{
  "name": "CSS Mask",
  "caniuse": "css-masks",
  "property": "cssmask",
  "tags": ["css"],
  "builderAliases": ["css_mask"],
  "notes": [
    {
      "name": "Webkit blog on CSS Masks",
      "href": "https://webkit.org/blog/181/css-masks/"
    },
    {
      "name": "Safari Docs",
      "href": "https://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Masks/Masks.html"
    },
    {
      "name": "CSS SVG mask",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/mask"
    },
    {
      "name": "Combine with clippaths for awesomeness",
      "href": "https://generic.cx/for/webkit/test.html"
    }
  ]
}
!*/
Modernizr.addTest("cssmask",testAllProps("maskRepeat","repeat-x",!0)),/*!
{
  "name": "CSS Media Queries",
  "caniuse": "css-mediaqueries",
  "property": "mediaqueries",
  "tags": ["css"],
  "builderAliases": ["css_mediaqueries"]
}
!*/
Modernizr.addTest("mediaqueries",mq("only all")),/*!
{
  "name": "CSS Multiple Backgrounds",
  "caniuse": "multibackgrounds",
  "property": "multiplebgs",
  "tags": ["css"]
}
!*/
Modernizr.addTest("multiplebgs",function(){var e=createElement("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),/*!
{
  "name": "CSS :nth-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "nthchild",
  "tags": ["css"],
  "notes": [
    {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/pull/685"
    },
    {
      "name": "Sitepoint :nth-child documentation",
      "href": "http://reference.sitepoint.com/css/pseudoclass-nthchild"
    }
  ],
  "authors": ["@emilchristensen"],
  "warnings": ["Known false negative in Safari 3.1 and Safari 3.2.2"]
}
!*/
testStyles("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;Modernizr.addTest("nthchild",n)},5),/*!
{
  "name": "CSS Object Fit",
  "caniuse": "object-fit",
  "property": "objectfit",
  "tags": ["css"],
  "builderAliases": ["css_objectfit"],
  "notes": [{
    "name": "Opera Article on Object Fit",
    "href": "https://dev.opera.com/articles/css3-object-fit-object-position/"
  }]
}
!*/
Modernizr.addTest("objectfit",!!prefixed("objectFit"),{aliases:["object-fit"]}),/*!
{
  "name": "CSS Opacity",
  "caniuse": "css-opacity",
  "property": "opacity",
  "tags": ["css"]
}
!*/
Modernizr.addTest("opacity",function(){var e=createElement("a").style;return e.cssText=prefixes.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),/*!
{
  "name": "CSS Overflow Scrolling",
  "property": "overflowscrolling",
  "tags": ["css"],
  "builderAliases": ["css_overflow_scrolling"],
  "warnings": ["Introduced in iOS5b2. API is subject to change."],
  "notes": [{
    "name": "Article on iOS overflow scrolling",
    "href": "https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/"
  }]
}
!*/
Modernizr.addTest("overflowscrolling",testAllProps("overflowScrolling","touch",!0)),/*!
{
  "name": "CSS Pointer Events",
  "caniuse": "pointer-events",
  "property": "csspointerevents",
  "authors": ["ausi"],
  "tags": ["css"],
  "builderAliases": ["css_pointerevents"],
  "notes": [
    {
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events"
    },{
      "name": "Test Project Page",
      "href": "https://ausi.github.com/Feature-detection-technique-for-pointer-events/"
    },{
      "name": "Test Project Wiki",
      "href": "https://github.com/ausi/Feature-detection-technique-for-pointer-events/wiki"
    },
    {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/80"
    }
  ]
}
!*/
Modernizr.addTest("csspointerevents",function(){var e=createElement("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),/*!
{
  "name": "CSS position: sticky",
  "property": "csspositionsticky",
  "tags": ["css"],
  "builderAliases": ["css_positionsticky"],
  "notes": [{
    "name": "Chrome bug report",
    "href":"https://code.google.com/p/chromium/issues/detail?id=322972"
  }],
  "warnings": [ "using position:sticky on anything but top aligned elements is buggy in Chrome < 37 and iOS <=7+" ]
}
!*/
Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=createElement("a"),i=n.style;return i.cssText=e+prefixes.join(t+";"+e).slice(0,-e.length),-1!==i.position.indexOf(t)}),/*!
{
  "name": "CSS Generated Content Animations",
  "property": "csspseudoanimations",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csspseudoanimations",function(){var e=!1;if(!Modernizr.cssanimations||!window.getComputedStyle)return e;var t=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(t,function(t){e="10px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e}),/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csstransitions",testAllProps("transition","all",!0)),/*!
{
  "name": "CSS Generated Content Transitions",
  "property": "csspseudotransitions",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csspseudotransitions",function(){var e=!1;if(!Modernizr.csstransitions||!window.getComputedStyle)return e;var t='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(t,function(t){window.getComputedStyle(t,":before").getPropertyValue("font-size"),t.className+="trigger",e="5px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e}),/*!
{
  "name": "CSS Reflections",
  "caniuse": "css-reflections",
  "property": "cssreflections",
  "tags": ["css"]
}
!*/
Modernizr.addTest("cssreflections",testAllProps("boxReflect","above",!0)),/*!
{
  "name": "CSS Regions",
  "caniuse": "css-regions",
  "authors": ["Mihai Balan"],
  "property": "regions",
  "tags": ["css"],
  "builderAliases": ["css_regions"],
  "notes": [{
    "name": "W3C Specification",
    "href": "https://www.w3.org/TR/css3-regions/"
  }]
}
!*/
Modernizr.addTest("regions",function(){if(isSVG)return!1;var e=prefixed("flowFrom"),t=prefixed("flowInto"),n=!1;if(!e||!t)return n;var i=createElement("iframe"),r=createElement("div"),o=createElement("div"),s=createElement("div"),a="modernizr_flow_for_regions_check";o.innerText="M",r.style.cssText="top: 150px; left: 150px; padding: 0px;",s.style.cssText="width: 50px; height: 50px; padding: 42px;",s.style[e]=a,r.appendChild(o),r.appendChild(s),docElement.appendChild(r);var l,d,c=o.getBoundingClientRect();return o.style[t]=a,l=o.getBoundingClientRect(),d=parseInt(l.left-c.left,10),docElement.removeChild(r),42==d?n=!0:(docElement.appendChild(i),c=i.getBoundingClientRect(),i.style[t]=a,l=i.getBoundingClientRect(),c.height>0&&c.height!==l.height&&0===l.height&&(n=!0)),o=s=r=i=undefined,n}),/*!
{
  "name": "CSS Font rem Units",
  "caniuse": "rem",
  "authors": ["nsfmc"],
  "property": "cssremunit",
  "tags": ["css"],
  "builderAliases": ["css_remunit"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-values/#relative0"
  },{
    "name": "Font Size with rem by Jonathan Snook",
    "href": "http://snook.ca/archives/html_and_css/font-size-with-rem"
  }]
}
!*/
Modernizr.addTest("cssremunit",function(){var e=createElement("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),/*!
{
  "name": "CSS UI Resize",
  "property": "cssresize",
  "caniuse": "css-resize",
  "tags": ["css"],
  "builderAliases": ["css_resize"],
  "notes": [{
    "name": "W3C Specification",
    "href": "https://www.w3.org/TR/css3-ui/#resize"
  },{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/resize"
  }]
}
!*/
Modernizr.addTest("cssresize",testAllProps("resize","both",!0)),/*!
{
  "name": "CSS rgba",
  "caniuse": "css3-colors",
  "property": "rgba",
  "tags": ["css"],
  "notes": [{
    "name": "CSSTricks Tutorial",
    "href": "https://css-tricks.com/rgba-browser-support/"
  }]
}
!*/
Modernizr.addTest("rgba",function(){var e=createElement("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),/*!
{
  "name": "CSS Stylable Scrollbars",
  "property": "cssscrollbar",
  "tags": ["css"],
  "builderAliases": ["css_scrollbars"]
}
!*/
testStyles("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+prefixes.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px}",function(e){Modernizr.addTest("cssscrollbar","scrollWidth"in e&&30==e.scrollWidth)}),/*!
{
  "name": "Scroll Snap Points",
  "property": "scrollsnappoints",
  "notes": [{
    "name": "Setting native-like scrolling offsets in CSS with Scrolling Snap Points",
    "href": "http://generatedcontent.org/post/66817675443/setting-native-like-scrolling-offsets-in-css-with"
  },{
    "name": "MDN Article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap_Points"
  }],
  "polyfills": ["scrollsnap"]
}
!*/
Modernizr.addTest("scrollsnappoints",testAllProps("scrollSnapType")),/*!
{
  "name": "CSS Shapes",
  "property": "shapes",
  "tags": ["css"],
  "notes": [{
    "name": "CSS Shapes W3C specification",
    "href": "https://www.w3.org/TR/css-shapes"
  },{
    "name": "Examples from Adobe",
    "href": "http://webplatform.adobe.com/shapes/"
  }, {
    "name": "Samples showcasing uses of Shapes",
    "href": "http://codepen.io/collection/qFesk"
  }]
}
!*/
Modernizr.addTest("shapes",testAllProps("shapeOutside","content-box",!0)),/*!
{
  "name": "CSS general sibling selector",
  "caniuse": "css-sel3",
  "property": "siblinggeneral",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/889"
  }]
}
!*/
Modernizr.addTest("siblinggeneral",function(){return testStyles("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),/*!
{
  "name": "CSS Subpixel Fonts",
  "property": "subpixelfont",
  "tags": ["css"],
  "builderAliases": ["css_subpixelfont"],
  "authors": [
    "@derSchepp",
    "@gerritvanaaken",
    "@rodneyrehm",
    "@yatil",
    "@ryanseddon"
  ],
  "notes": [{
    "name": "Origin Test",
    "href": "https://github.com/gerritvanaaken/subpixeldetect"
  }]
}
!*/
testStyles("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(e){var t=e.firstChild;t.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",window.getComputedStyle?"44px"!==window.getComputedStyle(t,null).getPropertyValue("width"):!1)},1,["subpixel"]),/*!
{
  "name": "CSS :target pseudo-class",
  "caniuse": "css-sel3",
  "property": "target",
  "tags": ["css"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:target"
  }],
  "authors": ["@zachleat"],
  "warnings": ["Opera Mini supports :target but doesn't update the hash for anchor links."]
}
!*/
Modernizr.addTest("target",function(){var e=window.document;if(!("querySelectorAll"in e))return!1;try{return e.querySelectorAll(":target"),!0}catch(t){return!1}}),/*!
{
  "name": "CSS text-align-last",
  "property": "textalignlast",
  "tags": ["css"],
  "knownBugs": ["IE does not support the 'start' or 'end' values."],
  "notes": [{
      "name": "Quicksmode",
      "href": "http://www.quirksmode.org/css/text/textalignlast.html"
    },{
      "name": "MDN",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last"
    }]
}
!*/
Modernizr.addTest("textalignlast",testAllProps("textAlignLast")),/*!
{
  "name": "CSS textshadow",
  "property": "textshadow",
  "caniuse": "css-textshadow",
  "tags": ["css"],
  "knownBugs": ["FF3.0 will false positive on this test"]
}
!*/
Modernizr.addTest("textshadow",testProp("textShadow","1px 1px")),/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&testAllProps("transform","scale(1)",!0)}),/*!
{
  "name": "CSS Transforms Level 2",
  "property": "csstransformslevel2",
  "authors": ["rupl"],
  "tags": ["css"],
  "notes": [{
    "name": "CSSWG Draft Spec",
    "href": "https://drafts.csswg.org/css-transforms-2/"
  }]
}
!*/
Modernizr.addTest("csstransformslevel2",function(){return testAllProps("translate","45px",!0)}),/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/
Modernizr.addTest("csstransforms3d",function(){return!!testAllProps("perspective","1px",!0)}),/*!
{
  "name": "CSS Transform Style preserve-3d",
  "property": "preserve3d",
  "authors": ["denyskoch", "aFarkas"],
  "tags": ["css"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/1748"
  }]
}
!*/
Modernizr.addTest("preserve3d",function(){var e,t,n=window.CSS,i=!1;return n&&n.supports&&n.supports("(transform-style: preserve-3d)")?!0:(e=createElement("a"),t=createElement("a"),e.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",t.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",e.appendChild(t),docElement.appendChild(e),i=t.getBoundingClientRect(),docElement.removeChild(e),i=i.width&&i.width<4)}),/*!
{
  "name": "CSS user-select",
  "property": "userselect",
  "caniuse": "user-select-none",
  "authors": ["ryan seddon"],
  "tags": ["css"],
  "builderAliases": ["css_userselect"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/250"
  }]
}
!*/
Modernizr.addTest("userselect",testAllProps("userSelect","none",!0)),/*!
{
  "name": "CSS :valid pseudo-class",
  "property": "cssvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:valid"
  }]
}
!*/
Modernizr.addTest("cssvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=createElement("input");return e.appendChild(t),t.clientWidth>10})}),/*!
{
  "name": "Variable Open Type Fonts",
  "property": ["variablefonts"],
  "authors": ["Patrick Kettner"],
  "tags": ["css"],
  "notes": [{
    "name": "Variable fonts on the web",
    "href": "https://webkit.org/blog/7051/variable-fonts-on-the-web/"
  }, {
    "name": "Variable fonts for responsive design",
    "href": "https://alistapart.com/blog/post/variable-fonts-for-responsive-design"
  }]
}
!*/
Modernizr.addTest("variablefonts",testAllProps("fontVariationSettings")),/*!
{
  "name": "CSS vh unit",
  "property": "cssvhunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vhunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "Similar JSFiddle",
    "href": "https://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
testStyles("#modernizr { height: 50vh; }",function(e){var t=parseInt(window.innerHeight/2,10),n=parseInt(computedStyle(e,null,"height"),10);Modernizr.addTest("cssvhunit",roundedEquals(n,t))}),/*!
{
  "name": "CSS vmax unit",
  "property": "cssvmaxunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vmaxunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "https://jsfiddle.net/glsee/JDsWQ/4/"
  }]
}
!*/
testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],i=e.childNodes[0],r=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=i.clientWidth/100,s=i.clientHeight/100,a=parseInt(50*Math.max(o,s),10),l=parseInt(computedStyle(t,null,"width"),10);Modernizr.addTest("cssvmaxunit",roundedEquals(a,l)||roundedEquals(a,l-r))},3),/*!
{
  "name": "CSS vmin unit",
  "property": "cssvminunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vminunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "https://jsfiddle.net/glsee/JRmdq/8/"
  }]
}
!*/
testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],i=e.childNodes[0],r=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=i.clientWidth/100,s=i.clientHeight/100,a=parseInt(50*Math.min(o,s),10),l=parseInt(computedStyle(t,null,"width"),10);Modernizr.addTest("cssvminunit",roundedEquals(a,l)||roundedEquals(a,l-r))},3),/*!
{
  "name": "CSS vw unit",
  "property": "cssvwunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vwunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "https://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
testStyles("#modernizr { width: 50vw; }",function(e){var t=parseInt(window.innerWidth/2,10),n=parseInt(computedStyle(e,null,"width"),10);Modernizr.addTest("cssvwunit",roundedEquals(n,t))}),/*!
{
  "name": "will-change",
  "property": "willchange",
  "notes": [{
    "name": "Spec",
    "href": "https://drafts.csswg.org/css-will-change/"
  }]
}
!*/
Modernizr.addTest("willchange","willChange"in docElement.style),/*!
{
  "name": "CSS wrap-flow",
  "property": "wrapflow",
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Exclusions spec",
      "href": "https://www.w3.org/TR/css3-exclusions"
    },
    {
      "name": "Example by Adobe",
      "href": "http://html.adobe.com/webstandards/cssexclusions"
    }
  ]
}
!*/
Modernizr.addTest("wrapflow",function(){var e=prefixed("wrapFlow");if(!e||isSVG)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),n=createElement("div"),i=createElement("div"),r=createElement("span");i.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",r.innerText="X",n.appendChild(i),n.appendChild(r),docElement.appendChild(n);var o=r.offsetLeft;return docElement.removeChild(n),i=r=n=undefined,150==o}),/*!
{
  "name": "Custom protocol handler",
  "property": "customprotocolhandler",
  "authors": ["Ben Schwarz"],
  "builderAliases": ["custom_protocol_handler"],
  "notes": [{
    "name": "WHATWG overview",
    "href": "https://developers.whatwg.org/timers.html#custom-handlers"
  },{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/navigator.registerProtocolHandler"
  }],
  "warnings": [],
  "polyfills": []
}
!*/
Modernizr.addTest("customprotocolhandler",function(){if(!navigator.registerProtocolHandler)return!1;try{navigator.registerProtocolHandler("thisShouldFail")}catch(e){return e instanceof TypeError}return!1}),/*!
{
  "name": "CustomEvent",
  "property": "customevent",
  "tags": ["customevent"],
  "authors": ["Alberto Elias"],
  "notes": [{
    "name": "W3C DOM reference",
    "href": "https://www.w3.org/TR/DOM-Level-3-Events/#interface-CustomEvent"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/docs/Web/API/CustomEvent"
  }],
  "polyfills": ["eventlistener"]
}
!*/
Modernizr.addTest("customevent","CustomEvent"in window&&"function"==typeof window.CustomEvent),/*!
{
  "name": "Dart",
  "property": "dart",
  "authors": ["Theodoor van Donge"],
  "notes": [{
    "name": "Language website",
    "href": "https://www.dartlang.org/"
  }]
}
!*/
Modernizr.addTest("dart",!!prefixed("startDart",navigator)),/*!
{
  "name": "DataView",
  "property": "dataview",
  "authors": ["Addy Osmani"],
  "builderAliases": ["dataview_api"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/JavaScript_typed_arrays/DataView"
  }],
  "polyfills": ["jdataview"]
}
!*/
Modernizr.addTest("dataview","undefined"!=typeof DataView&&"getFloat64"in DataView.prototype),/*!
{
  "name": "classList",
  "caniuse": "classlist",
  "property": "classlist",
  "tags": ["dom"],
  "builderAliases": ["dataview_api"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/DOM/element.classList"
  }]
}
!*/
Modernizr.addTest("classlist","classList"in docElement),/*!
{
  "name": "createElement with Attributes",
  "property": ["createelementattrs", "createelement-attrs"],
  "tags": ["dom"],
  "builderAliases": ["dom_createElement_attrs"],
  "authors": ["James A. Rosen"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/258"
  }]
}
!*/
Modernizr.addTest("createelementattrs",function(){try{return"test"==createElement('<input name="test" />').getAttribute("name")}catch(e){return!1}},{aliases:["createelement-attrs"]}),/*!
{
  "name": "dataset API",
  "caniuse": "dataset",
  "property": "dataset",
  "tags": ["dom"],
  "builderAliases": ["dom_dataset"],
  "authors": ["@phiggins42"]
}
!*/
Modernizr.addTest("dataset",function(){var e=createElement("div");return e.setAttribute("data-a-b","c"),!(!e.dataset||"c"!==e.dataset.aB)}),/*!
{
  "name": "Document Fragment",
  "property": "documentfragment",
  "notes": [{
    "name": "W3C DOM Level 1 Reference",
    "href": "https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-B63ED1A3"
  }, {
    "name": "SitePoint Reference",
    "href": "http://reference.sitepoint.com/javascript/DocumentFragment"
  }, {
    "name": "QuirksMode Compatibility Tables",
    "href": "http://www.quirksmode.org/m/w3c_core.html#t112"
  }],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "knownBugs": ["false-positive on Blackberry 9500, see QuirksMode note"],
  "tags": []
}
!*/
Modernizr.addTest("documentfragment",function(){return"createDocumentFragment"in document&&"appendChild"in docElement}),/*!
{
  "name": "[hidden] Attribute",
  "property": "hidden",
  "tags": ["dom"],
  "notes": [{
    "name": "WHATWG: The hidden attribute",
    "href": "https://developers.whatwg.org/editing.html#the-hidden-attribute"
  }, {
    "name": "original implementation of detect code",
    "href": "https://github.com/aFarkas/html5shiv/blob/bf4fcc4/src/html5shiv.js#L38"
  }],
  "polyfills": ["html5shiv"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
Modernizr.addTest("hidden","hidden"in createElement("a")),/*!
{
  "name": "microdata",
  "property": "microdata",
  "tags": ["dom"],
  "builderAliases": ["dom_microdata"],
  "notes": [{
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/microdata/"
  }]
}
!*/
Modernizr.addTest("microdata","getItems"in document),/*!
{
  "name": "DOM4 MutationObserver",
  "property": "mutationobserver",
  "caniuse": "mutationobserver",
  "tags": ["dom"],
  "authors": ["Karel Sedláček (@ksdlck)"],
  "polyfills": ["mutationobservers"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"
  }]
}
!*/
Modernizr.addTest("mutationobserver",!!window.MutationObserver||!!window.WebKitMutationObserver),/*!
{
  "authors": ["Rick Byers"],
  "name": "Passive event listeners",
  "notes": [
    {
      "name": "WHATWG specification",
      "href": "https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-passive"
    },
    {
      "name": "WICG explainer",
      "href": "https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md"
    }
  ],
  "property": "passiveeventlisteners",
  "tags": ["dom"]
}
!*/
Modernizr.addTest("passiveeventlisteners",function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}),/*!
{
  "name": "bdi Element",
  "property": "bdi",
  "notes": [{
    "name": "MDN Overview",
    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"
  }]
}
!*/
Modernizr.addTest("bdi",function(){var e=createElement("div"),t=createElement("bdi");t.innerHTML="&#1573;",e.appendChild(t),docElement.appendChild(e);var n="rtl"===computedStyle(t,null,"direction");return docElement.removeChild(e),n});var inputElem=createElement("input"),inputattrs="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),attrs={};Modernizr.input=function(e){for(var t=0,n=e.length;n>t;t++)attrs[e[t]]=!!(e[t]in inputElem);return attrs.list&&(attrs.list=!(!createElement("datalist")||!window.HTMLDataListElement)),attrs}(inputattrs),/*!
{
  "name": "datalist Element",
  "caniuse": "datalist",
  "property": "datalistelem",
  "tags": ["elem"],
  "builderAliases": ["elem_datalist"],
  "warnings": ["This test is a dupe of Modernizr.input.list. Only around for legacy reasons."],
  "notes": [{
    "name": "CSS Tricks Article",
    "href": "https://css-tricks.com/15346-relevant-dropdowns-polyfill-for-datalist/"
  },{
    "name": "Mike Taylor Code",
    "href": "https://miketaylr.com/code/datalist.html"
  }]
}
!*/
Modernizr.addTest("datalistelem",Modernizr.input.list),/*!
{
  "name": "details Element",
  "caniuse": "details",
  "property": "details",
  "tags": ["elem"],
  "builderAliases": ["elem_details"],
  "authors": ["@mathias"],
  "notes": [{
    "name": "Mathias' Original",
    "href": "https://mathiasbynens.be/notes/html5-details-jquery#comment-35"
  }]
}
!*/
Modernizr.addTest("details",function(){var e,t=createElement("details");return"open"in t?(testStyles("#modernizr details{display:block}",function(n){n.appendChild(t),t.innerHTML="<summary>a</summary>b",e=t.offsetHeight,t.open=!0,e=e!=t.offsetHeight}),e):!1}),/*!
{
  "name": "output Element",
  "property": "outputelem",
  "tags": ["elem"],
  "builderAliases": ["elem_output"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#the-output-element"
  }]
}
!*/
Modernizr.addTest("outputelem","value"in createElement("output")),/*!
{
  "name": "picture Element",
  "property": "picture",
  "tags": ["elem"],
  "authors": ["Scott Jehl", "Mat Marquis"],
  "notes": [{
    "name": "Specification",
    "href": "http://picture.responsiveimages.org"
  },{
    "name": "Relevant spec issue",
    "href": "https://github.com/ResponsiveImagesCG/picture-element/issues/87"
  }]
}
!*/
Modernizr.addTest("picture","HTMLPictureElement"in window),/*!
{
  "name": "progress Element",
  "caniuse": "progress",
  "property": ["progressbar", "meter"],
  "tags": ["elem"],
  "builderAliases": ["elem_progress_meter"],
  "authors": ["Stefan Wallin"]
}
!*/
Modernizr.addTest("progressbar",createElement("progress").max!==undefined),Modernizr.addTest("meter",createElement("meter").max!==undefined),/*!
{
  "name": "ruby, rp, rt Elements",
  "caniuse": "ruby",
  "property": "ruby",
  "tags": ["elem"],
  "builderAliases": ["elem_ruby"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-ruby-element"
  }]
}
!*/
Modernizr.addTest("ruby",function(){function e(e,t){var n;return window.getComputedStyle?n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t):e.currentStyle&&(n=e.currentStyle[t]),n}function t(){docElement.removeChild(n),n=null,i=null,r=null}var n=createElement("ruby"),i=createElement("rt"),r=createElement("rp"),o="display",s="fontSize";return n.appendChild(r),n.appendChild(i),docElement.appendChild(n),"none"==e(r,o)||"ruby"==e(n,o)&&"ruby-text"==e(i,o)||"6pt"==e(r,s)&&"6pt"==e(i,s)?(t(),!0):(t(),!1)}),/*!
{
  "name": "Template Tag",
  "property": "template",
  "tags": ["elem"],
  "notes": [{
    "name": "HTML5Rocks Article",
    "href": "http://www.html5rocks.com/en/tutorials/webcomponents/template/"
  },{
    "name": "W3 Spec",
    "href": "https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html"
  }]
}
!*/
Modernizr.addTest("template","content"in createElement("template")),/*!
{
  "name": "time Element",
  "property": "time",
  "tags": ["elem"],
  "builderAliases": ["elem_time"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-time-element"
  }]
}
!*/
Modernizr.addTest("time","valueAsDate"in createElement("time")),/*!
{
  "name": "Track element and Timed Text Track",
  "property": ["texttrackapi", "track"],
  "tags": ["elem"],
  "builderAliases": ["elem_track"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3 track Element Spec",
    "href": "http://www.w3.org/TR/html5/video.html#the-track-element"
  },{
    "name": "W3 track API Spec",
    "href": "http://www.w3.org/TR/html5/media-elements.html#text-track-api"
  }],
  "warnings": ["While IE10 has implemented the track element, IE10 does not expose the underlying APIs to create timed text tracks by JS (really sad)"]
}
!*/
Modernizr.addTest("texttrackapi","function"==typeof createElement("video").addTextTrack),Modernizr.addTest("track","kind"in createElement("track")),/*!
{
  "name": "Unknown Elements",
  "property": "unknownelements",
  "tags": ["elem"],
  "notes": [{
    "name": "The Story of the HTML5 Shiv",
    "href": "https://www.paulirish.com/2011/the-history-of-the-html5-shiv/"
  }, {
    "name": "original implementation of detect code",
    "href": "https://github.com/aFarkas/html5shiv/blob/bf4fcc4/src/html5shiv.js#L36"
  }],
  "polyfills": ["html5shiv"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
Modernizr.addTest("unknownelements",function(){var e=createElement("a");return e.innerHTML="<xyz></xyz>",1===e.childNodes.length}),/*!
{
  "name": "Emoji",
  "property": "emoji"
}
!*/
Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var e=window.devicePixelRatio||1,t=12*e,n=createElement("canvas"),i=n.getContext("2d");return i.fillStyle="#f00",i.textBaseline="top",i.font="32px Arial",i.fillText("\ud83d\udc28",0,0),0!==i.getImageData(t,t,1,1).data[0]}),/*!
{
  "name": "ES5 Array",
  "property": "es5array",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5array",function(){return!!(Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray)}),/*!
{
  "name": "ES5 Date",
  "property": "es5date",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5date",function(){var e="2013-04-12T06:06:37.307Z",t=!1;try{t=!!Date.parse(e)}catch(n){}return!!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&t)}),/*!
{
  "name": "ES5 Function",
  "property": "es5function",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5function",function(){return!(!Function.prototype||!Function.prototype.bind)}),/*!
{
  "name": "ES5 Object",
  "property": "es5object",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim", "es5sham"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5object",function(){return!!(Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions)}),/*!
{
  "name": "ES5 Strict Mode",
  "property": "strictmode",
  "caniuse": "sctrict-mode",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "authors": ["@kangax"],
  "tags": ["es5"],
  "builderAliases": ["es5_strictmode"]
}
!*/
Modernizr.addTest("strictmode",function(){"use strict";return!this}()),/*!
{
  "name": "ES5 String",
  "property": "es5string",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5string",function(){return!(!String.prototype||!String.prototype.trim)}),/*!
{
  "name": "JSON",
  "property": "json",
  "caniuse": "json",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Glossary/JSON"
  }],
  "polyfills": ["json2"]
}
!*/
Modernizr.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON),/*!
{
  "name": "ES5 Syntax",
  "property": "es5syntax",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }, {
    "name": "original implementation of detect code",
    "href": "http://kangax.github.io/es5-compat-table/"
  }],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["This detect uses `eval()`, so CSP may be a problem."],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5syntax",function(){var value,obj,stringAccess,getter,setter,reservedWords,zeroWidthChars;try{return stringAccess=eval('"foobar"[3] === "b"'),getter=eval("({ get x(){ return 1 } }).x === 1"),eval("({ set x(v){ value = v; } }).x = 1"),setter=1===value,eval("obj = ({ if: 1 })"),reservedWords=1===obj["if"],zeroWidthChars=eval("_\u200c\u200d = true"),stringAccess&&getter&&setter&&reservedWords&&zeroWidthChars}catch(ignore){return!1}}),/*!
{
  "name": "ES5 Immutable Undefined",
  "property": "es5undefined",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }, {
    "name": "original implementation of detect code",
    "href": "http://kangax.github.io/es5-compat-table/"
  }],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5undefined",function(){var e,t;try{t=window.undefined,window.undefined=12345,e="undefined"==typeof window.undefined,window.undefined=t}catch(n){return!1}return e}),/*!
{
  "name": "ES5",
  "property": "es5",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim", "es5sham"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5",function(){return!!(Modernizr.es5array&&Modernizr.es5date&&Modernizr.es5function&&Modernizr.es5object&&Modernizr.strictmode&&Modernizr.es5string&&Modernizr.json&&Modernizr.es5syntax&&Modernizr.es5undefined)}),/*!
{
  "name": "ES6 Array",
  "property": "es6array",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6array",!!(Array.prototype&&Array.prototype.copyWithin&&Array.prototype.fill&&Array.prototype.find&&Array.prototype.findIndex&&Array.prototype.keys&&Array.prototype.entries&&Array.prototype.values&&Array.from&&Array.of)),/*!
{
  "name": "ES6 Collections",
  "property": "es6collections",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim", "weakmap"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6collections",!!(window.Map&&window.Set&&window.WeakMap&&window.WeakSet)),/*!
{
  "name": "ES5 String.prototype.contains",
  "property": "contains",
  "authors": ["Robert Kowalski"],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("contains",is(String.prototype.contains,"function")),/*!
{
  "name": "ES6 Generators",
  "property": "generators",
  "authors": ["Michael Kachanovskyi"],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("generators",function(){try{new Function("function* test() {}")()}catch(e){return!1}return!0}),/*!
{
  "name": "ES6 Math",
  "property": "es6math",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6math",!!(Math&&Math.clz32&&Math.cbrt&&Math.imul&&Math.sign&&Math.log10&&Math.log2&&Math.log1p&&Math.expm1&&Math.cosh&&Math.sinh&&Math.tanh&&Math.acosh&&Math.asinh&&Math.atanh&&Math.hypot&&Math.trunc&&Math.fround)),/*!
{
  "name": "ES6 Number",
  "property": "es6number",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6number",!!(Number.isFinite&&Number.isInteger&&Number.isSafeInteger&&Number.isNaN&&Number.parseInt&&Number.parseFloat&&Number.isInteger(Number.MAX_SAFE_INTEGER)&&Number.isInteger(Number.MIN_SAFE_INTEGER)&&Number.isFinite(Number.EPSILON))),/*!
{
  "name": "ES6 Object",
  "property": "es6object",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6object",!!(Object.assign&&Object.is&&Object.setPrototypeOf)),/*!
{
  "name": "ES6 Promises",
  "property": "promises",
  "caniuse": "promises",
  "polyfills": ["es6promises"],
  "authors": ["Krister Kari", "Jake Archibald"],
  "tags": ["es6"],
  "notes": [{
    "name": "The ES6 promises spec",
    "href": "https://github.com/domenic/promises-unwrapping"
  },{
    "name": "Chromium dashboard - ES6 Promises",
    "href": "https://www.chromestatus.com/features/5681726336532480"
  },{
    "name": "JavaScript Promises: There and back again - HTML5 Rocks",
    "href": "http://www.html5rocks.com/en/tutorials/es6/promises/"
  }]
}
!*/
Modernizr.addTest("promises",function(){return"Promise"in window&&"resolve"in window.Promise&&"reject"in window.Promise&&"all"in window.Promise&&"race"in window.Promise&&function(){var e;return new window.Promise(function(t){e=t}),"function"==typeof e}()}),/*!
{
  "name": "ES6 String",
  "property": "es6string",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6string",!!(String.fromCodePoint&&String.raw&&String.prototype.codePointAt&&String.prototype.repeat&&String.prototype.startsWith&&String.prototype.endsWith&&String.prototype.includes)),/*!
{
  "name": "Orientation and Motion Events",
  "property": ["devicemotion", "deviceorientation"],
  "caniuse": "deviceorientation",
  "notes": [{
    "name": "W3C Editor's Draft",
    "href": "http://w3c.github.io/deviceorientation/spec-source-orientation.html"
  },{
    "name": "Implementation by iOS Safari (Orientation)",
    "href": "http://goo.gl/fhce3"
  },{
    "name": "Implementation by iOS Safari (Motion)",
    "href": "http://goo.gl/rLKz8"
  }],
  "authors": ["Shi Chuan"],
  "tags": ["event"],
  "builderAliases": ["event_deviceorientation_motion"]
}
!*/
Modernizr.addTest("devicemotion","DeviceMotionEvent"in window),Modernizr.addTest("deviceorientation","DeviceOrientationEvent"in window),/*!
{
  "name": "onInput Event",
  "property": "oninput",
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.oninput"
  },{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#common-input-element-attributes"
  },{
    "name": "Detecting onInput support",
    "href": "http://danielfriesen.name/blog/2010/02/16/html5-browser-maze-oninput-support"
  }],
  "authors": ["Patrick Kettner"],
  "tags": ["event"]
}
!*/
Modernizr.addTest("oninput",function(){var e,t=createElement("input");if(t.setAttribute("oninput","return"),hasEvent("oninput",docElement)||"function"==typeof t.oninput)return!0;try{var n=document.createEvent("KeyboardEvent");e=!1;var i=function(t){e=!0,t.preventDefault(),t.stopPropagation()};n.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),docElement.appendChild(t),t.addEventListener("input",i,!1),t.focus(),t.dispatchEvent(n),t.removeEventListener("input",i,!1),docElement.removeChild(t)}catch(r){e=!1}return e}),/*!
{
  "name": "Event Listener",
  "property": "eventlistener",
  "authors": ["Andrew Betts (@triblondon)"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Registration-interfaces"
  }],
  "polyfills": ["eventlistener"]
}
!*/
Modernizr.addTest("eventlistener","addEventListener"in window),/*!
{
  "name": "EXIF Orientation",
  "property": "exiforientation",
  "tags": ["image"],
  "builderAliases": ["exif_orientation"],
  "async": true,
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "Article by Dave Perrett",
    "href": "http://recursive-design.com/blog/2012/07/28/exif-orientation-handling-is-a-ghetto/"
  },{
    "name": "Article by Calvin Hass",
    "href": "http://www.impulseadventure.com/photo/exif-orientation.html"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("exiforientation",!1,{aliases:["exif-orientation"]})},e.onload=function(){addTest("exiforientation",2!==e.width,{aliases:["exif-orientation"]})},e.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="}),/*!
{
  "name": "File API",
  "property": "filereader",
  "caniuse": "fileapi",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "https://www.w3.org/TR/FileAPI/"
  }],
  "tags": ["file"],
  "builderAliases": ["file_api"],
  "knownBugs": ["Will fail in Safari 5 due to its lack of support for the standards defined FileReader object"]
}
!*/
Modernizr.addTest("filereader",!!(window.File&&window.FileList&&window.FileReader)),/*!
{
  "name": "Filesystem API",
  "property": "filesystem",
  "caniuse": "filesystem",
  "notes": [{
    "name": "W3 Draft",
    "href": "http://dev.w3.org/2009/dap/file-system/file-dir-sys.html"
  }],
  "authors": ["Eric Bidelman (@ebidel)"],
  "tags": ["file"],
  "builderAliases": ["file_filesystem"],
  "knownBugs": ["The API will be present in Chrome incognito, but will throw an exception. See crbug.com/93417"]
}
!*/
Modernizr.addTest("filesystem",!!prefixed("requestFileSystem",window)),/*!
  {
  "name": "Flash",
  "property": "flash",
  "tags": ["flash"],
  "polyfills": ["shumway"]
  }
  !*/
Modernizr.addAsyncTest(function(){var e,t,n=function(e){docElement.contains(e)||docElement.appendChild(e)},i=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},r=function(e,t){var n=!!e;if(n&&(n=new Boolean(n),n.blocked="blocked"===e),addTest("flash",function(){return n}),t&&d.contains(t)){for(;t.parentNode!==d;)t=t.parentNode;d.removeChild(t)}};try{t="ActiveXObject"in window&&"Pan"in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(o){}if(e=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||t),e||isSVG)r(!1);else{var s,a,l=createElement("embed"),d=getBody();if(l.type="application/x-shockwave-flash",d.appendChild(l),!("Pan"in l||t))return n(d),r("blocked",l),void i(d);s=function(){return n(d),docElement.contains(d)?(docElement.contains(l)?(a=l.style.cssText,""!==a?r("blocked",l):r(!0,l)):r("blocked"),void i(d)):(d=document.body||d,l=createElement("embed"),l.type="application/x-shockwave-flash",d.appendChild(l),setTimeout(s,1e3))},setTimeout(s,10)}}),/*!
{
  "name": "input[capture] Attribute",
  "property": "capture",
  "tags": ["video", "image", "audio", "media", "attribute"],
  "notes": [{
    "name": "W3C draft: HTML Media Capture",
    "href": "https://www.w3.org/TR/html-media-capture/"
  }]
}
!*/
Modernizr.addTest("capture","capture"in createElement("input")),/*!
{
  "name": "input[file] Attribute",
  "property": "fileinput",
  "caniuse" : "forms",
  "tags": ["file", "forms", "input"],
  "builderAliases": ["forms_fileinput"]
}
!*/
Modernizr.addTest("fileinput",function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=createElement("input");return e.type="file",!e.disabled}),/*!
{
  "name": "input[directory] Attribute",
  "property": "directory",
  "authors": ["silverwind"],
  "tags": ["file", "input", "attribute"]
}
!*/
Modernizr.addTest("fileinputdirectory",function(){var e=createElement("input"),t="directory";if(e.type="file",t in e)return!0;for(var n=0,i=domPrefixes.length;i>n;n++)if(domPrefixes[n]+t in e)return!0;return!1}),/*!
{
  "name": "input[form] Attribute",
  "property": "formattribute",
  "tags": ["attribute", "forms", "input"],
  "builderAliases": ["forms_formattribute"]
}
!*/
Modernizr.addTest("formattribute",function(){var e,t=createElement("form"),n=createElement("input"),i=createElement("div"),r="formtest"+(new Date).getTime(),o=!1;t.id=r;try{n.setAttribute("form",r)}catch(s){document.createAttribute&&(e=document.createAttribute("form"),e.nodeValue=r,n.setAttributeNode(e))}return i.appendChild(t),i.appendChild(n),docElement.appendChild(i),o=t.elements&&1===t.elements.length&&n.form==t,i.parentNode.removeChild(i),o});/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
var inputtypes="search tel url email datetime date month week time datetime-local number range color".split(" "),inputs={};Modernizr.inputtypes=function(e){for(var t,n,i,r=e.length,o="1)",s=0;r>s;s++)inputElem.setAttribute("type",t=e[s]),i="text"!==inputElem.type&&"style"in inputElem,i&&(inputElem.value=o,inputElem.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(t)&&inputElem.style.WebkitAppearance!==undefined?(docElement.appendChild(inputElem),n=document.defaultView,i=n.getComputedStyle&&"textfield"!==n.getComputedStyle(inputElem,null).WebkitAppearance&&0!==inputElem.offsetHeight,docElement.removeChild(inputElem)):/^(search|tel)$/.test(t)||(i=/^(url|email)$/.test(t)?inputElem.checkValidity&&inputElem.checkValidity()===!1:inputElem.value!=o)),inputs[e[s]]=!!i;return inputs}(inputtypes),/*!
{
  "name": "Form Validation",
  "property": "formvalidation",
  "tags": ["forms", "validation", "attribute"],
  "builderAliases": ["forms_validation"]
}
!*/
Modernizr.addTest("formvalidation",function(){var e=createElement("form");if(!("checkValidity"in e&&"addEventListener"in e))return!1;if("reportValidity"in e)return!0;var t,n=!1;return Modernizr.formvalidationapi=!0,e.addEventListener("submit",function(e){(!window.opera||window.operamini)&&e.preventDefault(),e.stopPropagation()},!1),e.innerHTML='<input name="modTest" required="required" /><button></button>',testStyles("#modernizr form{position:absolute;top:-99999em}",function(i){i.appendChild(e),t=e.getElementsByTagName("input")[0],t.addEventListener("invalid",function(e){n=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!t.validationMessage,e.getElementsByTagName("button")[0].click()}),n}),/*!
{
  "name": "input[type=\"number\"] Localization",
  "property": "localizednumber",
  "tags": ["forms", "localization", "attribute"],
  "authors": ["Peter Janes"],
  "notes": [{
    "name": "Webkit Bug Tracker Listing",
    "href": "https://bugs.webkit.org/show_bug.cgi?id=42484"
  },{
    "name": "Based on This",
    "href": "https://trac.webkit.org/browser/trunk/LayoutTests/fast/forms/script-tests/input-number-keyoperation.js?rev=80096#L9"
  }],
  "knownBugs": ["Only ever returns true if the browser/OS is configured to use comma as a decimal separator. This is probably fine for most use cases."]
}
!*/
Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,t=createElement("div"),n=getBody(),i=function(){return docElement.insertBefore(n,docElement.firstElementChild||docElement.firstChild)}();t.innerHTML='<input type="number" value="1.0" step="0.1"/>';var r=t.childNodes[0];i.appendChild(t),r.focus();try{document.execCommand("SelectAll",!1),document.execCommand("InsertText",!1,"1,1")}catch(o){}return e="number"===r.type&&1.1===r.valueAsNumber&&r.checkValidity(),i.removeChild(t),n.fake&&i.parentNode.removeChild(i),e}),/*!
{
  "name": "placeholder attribute",
  "property": "placeholder",
  "tags": ["forms", "attribute"],
  "builderAliases": ["forms_placeholder"]
}
!*/
Modernizr.addTest("placeholder","placeholder"in createElement("input")&&"placeholder"in createElement("textarea")),/*!
{
  "name": "form#requestAutocomplete()",
  "property": "requestautocomplete",
  "tags": ["form", "forms", "requestAutocomplete", "payments"],
  "notes": [{
    "name": "WHATWG proposed spec",
    "href": "https://wiki.whatwg.org/wiki/RequestAutocomplete"
  }]
}
!*/
Modernizr.addTest("requestautocomplete",!!prefixed("requestAutocomplete",createElement("form"))),/*!
{
  "name": "Fullscreen API",
  "property": "fullscreen",
  "caniuse": "fullscreen",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/API/Fullscreen"
  }],
  "polyfills": ["screenfulljs"],
  "builderAliases": ["fullscreen_api"]
}
!*/
Modernizr.addTest("fullscreen",!(!prefixed("exitFullscreen",document,!1)&&!prefixed("cancelFullScreen",document,!1))),/*!
{
  "name": "GamePad API",
  "property": "gamepads",
  "authors": ["Eric Bidelman"],
  "tags": ["media"],
  "notes": [{
    "name": "W3C spec",
    "href": "https://www.w3.org/TR/gamepad/"
  },{
    "name": "HTML5 Rocks tutorial",
    "href": "http://www.html5rocks.com/en/tutorials/doodles/gamepad/#toc-featuredetect"
  }],
  "warnings": [],
  "polyfills": []
}
!*/
Modernizr.addTest("gamepads",!!prefixed("getGamepads",navigator)),/*!
{
  "name": "Geolocation API",
  "property": "geolocation",
  "caniuse": "geolocation",
  "tags": ["media"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
  }],
  "polyfills": [
    "joshuabell-polyfill",
    "webshims",
    "geo-location-javascript",
    "geolocation-api-polyfill"
  ]
}
!*/
Modernizr.addTest("geolocation","geolocation"in navigator),/*!
{
  "name": "Hashchange event",
  "property": "hashchange",
  "caniuse": "hashchange",
  "tags": ["history"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.onhashchange"
  }],
  "polyfills": [
    "jquery-hashchange",
    "moo-historymanager",
    "jquery-ajaxy",
    "hasher",
    "shistory"
  ]
}
!*/
Modernizr.addTest("hashchange",function(){return hasEvent("hashchange",window)===!1?!1:document.documentMode===undefined||document.documentMode>7}),/*!
{
  "name": "Hidden Scrollbar",
  "property": "hiddenscroll",
  "authors": ["Oleg Korsunsky"],
  "tags": ["overlay"],
  "notes": [{
    "name": "Overlay Scrollbar description",
    "href": "https://developer.apple.com/library/mac/releasenotes/MacOSX/WhatsNewInOSX/Articles/MacOSX10_7.html#//apple_ref/doc/uid/TP40010355-SW39"
  },{
    "name": "Video example of overlay scrollbars",
    "href": "https://gfycat.com/FoolishMeaslyAtlanticsharpnosepuffer"
  }]
}
!*/
Modernizr.addTest("hiddenscroll",function(){return testStyles("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),/*!
{
  "name": "History API",
  "property": "history",
  "caniuse": "history",
  "tags": ["history"],
  "authors": ["Hay Kranen", "Alexander Farkas"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/html51/browsers.html#the-history-interface"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
  }],
  "polyfills": ["historyjs", "html5historyapi"]
}
!*/
Modernizr.addTest("history",function(){var e=navigator.userAgent;return-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")||"file:"===location.protocol?window.history&&"pushState"in window.history:!1}),/*!
{
  "name": "HTML Imports",
  "notes": [
    {
      "name": "W3C HTML Imports Specification",
      "href": "https://w3c.github.io/webcomponents/spec/imports/"
    },
    {
      "name": "HTML Imports - #include for the web",
      "href": "http://www.html5rocks.com/en/tutorials/webcomponents/imports/"
    }
  ],
  "polyfills": ["polymer-htmlimports"],
  "property": "htmlimports",
  "tags": ["html", "import"]
}
!*/
addTest("htmlimports","import"in createElement("link")),/*!
{
  "name": "IE8 compat mode",
  "property": "ie8compat",
  "authors": ["Erich Ocean"]
}
!*/
Modernizr.addTest("ie8compat",!window.addEventListener&&!!document.documentMode&&7===document.documentMode),/*!
{
  "name": "iframe[sandbox] Attribute",
  "property": "sandbox",
  "tags": ["iframe"],
  "builderAliases": ["iframe_sandbox"],
  "notes": [
  {
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-sandbox"
  }],
  "knownBugs": [ "False-positive on Firefox < 29" ]
}
!*/
Modernizr.addTest("sandbox","sandbox"in createElement("iframe")),/*!
{
  "name": "iframe[seamless] Attribute",
  "property": "seamless",
  "tags": ["iframe"],
  "builderAliases": ["iframe_seamless"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-seamless"
  }]
}
!*/
Modernizr.addTest("seamless","seamless"in createElement("iframe")),/*!
{
  "name": "iframe[srcdoc] Attribute",
  "property": "srcdoc",
  "tags": ["iframe"],
  "builderAliases": ["iframe_srcdoc"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-srcdoc"
  }]
}
!*/
Modernizr.addTest("srcdoc","srcdoc"in createElement("iframe")),/*!
{
  "name": "Animated PNG",
  "async": true,
  "property": "apng",
  "tags": ["image"],
  "builderAliases": ["img_apng"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "https://en.wikipedia.org/wiki/APNG"
  }]
}
!*/
Modernizr.addAsyncTest(function(){if(!Modernizr.canvas)return!1;var e=new Image,t=createElement("canvas"),n=t.getContext("2d");e.onload=function(){addTest("apng",function(){return"undefined"==typeof t.getContext?!1:(n.drawImage(e,0,0),0===n.getImageData(0,0,1,1).data[3])})},e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}),/*!
{
  "name": "Image crossOrigin",
  "property": "imgcrossorigin",
  "notes": [{
    "name": "Cross Domain Images and the Tainted Canvas",
    "href": "https://blog.codepen.io/2013/10/08/cross-domain-images-tainted-canvas/"
  }]
}
!*/
Modernizr.addTest("imgcrossorigin","crossOrigin"in createElement("img")),/*!
{
  "name": "JPEG 2000",
  "async": true,
  "aliases": ["jpeg-2000", "jpg2"],
  "property": "jpeg2000",
  "tags": ["image"],
  "authors": ["@eric_wvgg"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "https://en.wikipedia.org/wiki/JPEG_2000"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onload=e.onerror=function(){addTest("jpeg2000",1==e.width)},e.src="data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="}),/*!
{
  "name": "JPEG XR (extended range)",
  "async": true,
  "aliases": ["jpeg-xr"],
  "property": "jpegxr",
  "tags": ["image"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "https://en.wikipedia.org/wiki/JPEG_XR"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onload=e.onerror=function(){addTest("jpegxr",1==e.width,{aliases:["jpeg-xr"]})},e.src="data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="}),/*!
{
  "name": "sizes attribute",
  "async": true,
  "property": "sizes",
  "tags": ["image"],
  "authors": ["Mat Marquis"],
  "notes": [{
    "name": "Spec",
    "href": "http://picture.responsiveimages.org/#parse-sizes-attr"
    },{
    "name": "Usage Details",
    "href": "http://ericportis.com/posts/2014/srcset-sizes/"
    }]
}
!*/
Modernizr.addAsyncTest(function(){var e,t,n,i=createElement("img"),r="sizes"in i;!r&&"srcset"in i?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){addTest("sizes",2==i.width)},i.onload=n,i.onerror=n,i.setAttribute("sizes","9px"),i.srcset=e+" 1w,"+t+" 8w",i.src=e):addTest("sizes",r)}),/*!
{
  "name": "srcset attribute",
  "property": "srcset",
  "tags": ["image"],
  "notes": [{
    "name": "Smashing Magazine Article",
    "href": "https://en.wikipedia.org/wiki/APNG"
    },{
    "name": "Generate multi-resolution images for srcset with Grunt",
    "href": "https://addyosmani.com/blog/generate-multi-resolution-images-for-srcset-with-grunt/"
    }]
}
!*/
Modernizr.addTest("srcset","srcset"in createElement("img")),/*!
{
  "name": "Webp",
  "async": true,
  "property": "webp",
  "tags": ["image"],
  "builderAliases": ["img_webp"],
  "authors": ["Krister Kari", "@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "Webp Info",
    "href": "https://developers.google.com/speed/webp/"
  }, {
    "name": "Chormium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
    "href": "https://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
  }, {
    "name": "Webp Lossless Spec",
    "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
  }, {
    "name": "Article about WebP support on Android browsers",
    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
  }, {
    "name": "Chormium WebP announcement",
    "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
  }]
}
!*/
Modernizr.addAsyncTest(function(){function e(e,t,n){function i(t){var i=t&&"load"===t.type?1==r.width:!1,o="webp"===e;addTest(e,o&&i?new Boolean(i):i),n&&n(t)}var r=new Image;r.onerror=i,r.onload=i,r.src=t}var t=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=t.shift();e(n.name,n.uri,function(n){if(n&&"load"===n.type)for(var i=0;i<t.length;i++)e(t[i].name,t[i].uri)})}),/*!
{
  "name": "Webp Alpha",
  "async": true,
  "property": "webpalpha",
  "aliases": ["webp-alpha"],
  "tags": ["image"],
  "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "WebP Info",
    "href": "https://developers.google.com/speed/webp/"
  },{
    "name": "Article about WebP support on Android browsers",
    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
  },{
    "name": "Chromium WebP announcement",
    "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("webpalpha",!1,{aliases:["webp-alpha"]})},e.onload=function(){addTest("webpalpha",1==e.width,{aliases:["webp-alpha"]})},e.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),/*!
{
  "name": "Webp Animation",
  "async": true,
  "property": "webpanimation",
  "aliases": ["webp-animation"],
  "tags": ["image"],
  "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "WebP Info",
    "href": "https://developers.google.com/speed/webp/"
  },{
    "name": "Chromium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
    "href": "https://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("webpanimation",!1,{aliases:["webp-animation"]})},e.onload=function(){addTest("webpanimation",1==e.width,{aliases:["webp-animation"]})},e.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}),/*!
{
  "name": "Webp Lossless",
  "async": true,
  "property": ["webplossless", "webp-lossless"],
  "tags": ["image"],
  "authors": ["@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "Webp Info",
    "href": "https://developers.google.com/speed/webp/"
  },{
    "name": "Webp Lossless Spec",
    "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("webplossless",!1,{aliases:["webp-lossless"]})},e.onload=function(){addTest("webplossless",1==e.width,{aliases:["webp-lossless"]})},e.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}),/*!
{
  "name": "IndexedDB",
  "property": "indexeddb",
  "caniuse": "indexeddb",
  "tags": ["storage"],
  "polyfills": ["indexeddb"],
  "async": true
}
!*/
Modernizr.addAsyncTest(function(){var e;try{e=prefixed("indexedDB",window)}catch(t){}if(e){var n="modernizr-"+Math.random(),i=e.open(n);i.onerror=function(){i.error&&"InvalidStateError"===i.error.name?addTest("indexeddb",!1):(addTest("indexeddb",!0),detectDeleteDatabase(e,n))},i.onsuccess=function(){addTest("indexeddb",!0),detectDeleteDatabase(e,n)}}else addTest("indexeddb",!1)}),/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
Modernizr.addAsyncTest(function(){var e,t,n,i,r="detect-blob-support",o=!1;try{e=prefixed("indexedDB",window)}catch(s){}if(!Modernizr.indexeddb||!Modernizr.indexeddb.deletedatabase)return!1;try{e.deleteDatabase(r).onsuccess=function(){t=e.open(r,1),t.onupgradeneeded=function(){t.result.createObjectStore("store")},t.onsuccess=function(){n=t.result;try{i=n.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),i.onsuccess=function(){o=!0},i.onerror=function(){o=!1}}catch(s){o=!1}finally{addTest("indexeddbblob",o),n.close(),e.deleteDatabase(r)}}}}catch(s){addTest("indexeddbblob",!1)}}),/*!
{
  "name": "input formaction",
  "property": "inputformaction",
  "aliases": ["input-formaction"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formaction"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/attributes/13-formaction.html"
  }],
  "polyfills": [
    "webshims"
  ]
}
!*/
Modernizr.addTest("inputformaction",!!("formAction"in createElement("input")),{aliases:["input-formaction"]}),/*!
{
  "name": "input formenctype",
  "property": "inputformenctype",
  "aliases": ["input-formenctype"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formenctype"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/attributes/16-formenctype.html"
  }],
  "polyfills": [
    "html5formshim"
  ]
}
!*/
Modernizr.addTest("inputformenctype",!!("formEnctype"in createElement("input")),{aliases:["input-formenctype"]}),/*!
{
  "name": "input formmethod",
  "property": "inputformmethod",
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formmethod"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/attributes/14-formmethod.html"
  }],
  "polyfills": [
    "webshims"
  ]
}
!*/
Modernizr.addTest("inputformmethod",!!("formMethod"in createElement("input"))),/*!
{
  "name": "input formtarget",
  "property": "inputformtarget",
  "aliases": ["input-formtarget"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formtarget"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/attributes/15-formtarget.html"
  }],
  "polyfills": [
    "html5formshim"
  ]
}
!*/
Modernizr.addTest("inputformtarget",!!("formtarget"in createElement("input")),{aliases:["input-formtarget"]}),/*!
{
  "name": "input[search] search event",
  "property": "search",
  "tags": ["input","search"],
  "authors": ["Calvin Webster"],
  "notes": [{
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/types/5-search.html?"
  }, {
    "name": "CSS Tricks",
    "href": "https://css-tricks.com/webkit-html5-search-inputs/"
  }]
}
!*/
Modernizr.addTest("inputsearchevent",hasEvent("search")),/*!
 {
 "name": "Internationalization API",
 "property": "intl",
 "notes": [{
 "name": "MDN documentation",
 "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"
 },{
 "name": "ECMAScript spec",
 "href": "http://www.ecma-international.org/ecma-402/1.0/"
 }]
 }
 !*/
Modernizr.addTest("intl",!!prefixed("Intl",window)),/*!
{
  "name": "Font Ligatures",
  "property": "ligatures",
  "caniuse": "font-feature",
  "notes": [{
    "name": "Cross-browser Web Fonts",
    "href": "http://www.sitepoint.com/cross-browser-web-fonts-part-3/"
  }]
}
!*/
Modernizr.addTest("ligatures",testAllProps("fontFeatureSettings",'"liga" 1')),/*!
{
  "name": "Reverse Ordered Lists",
  "property": "olreversed",
  "notes": [{
    "name": "Impressive Webs article",
    "href": "http://impressivewebs.com/reverse-ordered-lists-html5"
  }],
  "builderAliases": ["lists_reversed"]
}
!*/
Modernizr.addTest("olreversed","reversed"in createElement("ol")),/*!
{
  "name": "MathML",
  "property": "mathml",
  "caniuse": "mathml",
  "authors": ["Addy Osmani", "Davide P. Cervone", "David Carlisle"],
  "knownBugs": ["Firefox < 4 will likely return a false, however it does support MathML inside XHTML documents"],
  "notes": [{
    "name": "W3C spec",
    "href": "https://www.w3.org/Math/"
  }],
  "polyfills": ["mathjax"]
}
!*/
Modernizr.addTest("mathml",function(){var e;return testStyles("#modernizr{position:absolute;display:inline-block}",function(t){t.innerHTML+="<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>",e=t.offsetHeight>t.offsetWidth}),e}),/*!
{
  "name": "Hover Media Query",
  "property": "hovermq",
  "notes": [{
    "name": "//Name of reference document",
    "href": "//URL of reference document"
  }]
}
!*/
Modernizr.addTest("hovermq",mq("(hover)")),/*!
{
  "name": "Pointer Media Query",
  "property": "pointermq",
  "notes": [{
    "name": "//Name of reference document",
    "href": "//URL of reference document"
  }]
}
!*/
Modernizr.addTest("pointermq",mq("(pointer:coarse),(pointer:fine),(pointer:none)")),/*!
{
  "name": "Message Channel",
  "property": "MessageChannel",
  "authors": ["Raju Konga [kongaraju]"],
  "caniuse" : "MessageChannel",
  "tags": ["performance", "messagechannel"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/2011/WD-webmessaging-20110317/#message-channels"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging"
  }]
}
!*/
Modernizr.addTest("messagechannel","MessageChannel"in window),/*!
{
  "name": "Beacon API",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon"
  },{
    "name": "W3C specification",
    "href": "https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/Beacon/Overview.html"
  }],
  "property": "beacon",
  "tags": ["beacon", "network"],
  "authors": ["Cătălin Mariș"]
}
!*/
Modernizr.addTest("beacon","sendBeacon"in navigator),/*!
{
  "name": "Low Bandwidth Connection",
  "property": "lowbandwidth",
  "tags": ["network"],
  "builderAliases": ["network_connection"]
}
!*/
Modernizr.addTest("lowbandwidth",function(){var e=navigator.connection||{type:0};return 3==e.type||4==e.type||/^[23]g$/.test(e.type)}),/*!
{
  "name": "Server Sent Events",
  "property": "eventsource",
  "tags": ["network"],
  "builderAliases": ["network_eventsource"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/comms.html#server-sent-events"
  }]
}
!*/
Modernizr.addTest("eventsource","EventSource"in window),/*!
{
  "name": "Fetch API",
  "property": "fetch",
  "tags": ["network"],
  "caniuse": "fetch",
  "notes": [{
    "name": "Fetch Living Standard",
    "href": "https://fetch.spec.whatwg.org/"
  }],
  "polyfills": ["fetch"]
}
!*/
Modernizr.addTest("fetch","fetch"in window),/*!
{
  "name": "XHR responseType",
  "property": "xhrresponsetype",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetype",function(){if("undefined"==typeof XMLHttpRequest)return!1;var e=new XMLHttpRequest;return e.open("get","/",!0),"response"in e}());var testXhrType=function(e){if("undefined"==typeof XMLHttpRequest)return!1;var t=new XMLHttpRequest;t.open("get","/",!0);try{t.responseType=e}catch(n){return!1}return"response"in t&&t.responseType==e};/*!
{
  "name": "XHR responseType='arraybuffer'",
  "property": "xhrresponsetypearraybuffer",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypearraybuffer",testXhrType("arraybuffer")),/*!
{
  "name": "XHR responseType='blob'",
  "property": "xhrresponsetypeblob",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypeblob",testXhrType("blob")),/*!
{
  "name": "XHR responseType='document'",
  "property": "xhrresponsetypedocument",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypedocument",testXhrType("document")),/*!
{
  "name": "XHR responseType='json'",
  "property": "xhrresponsetypejson",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  },{
    "name": "Explanation of xhr.responseType='json'",
    "href": "https://mathiasbynens.be/notes/xhr-responsetype-json"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypejson",testXhrType("json")),/*!
{
  "name": "XHR responseType='text'",
  "property": "xhrresponsetypetext",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypetext",testXhrType("text")),/*!
{
  "name": "XML HTTP Request Level 2 XHR2",
  "property": "xhr2",
  "tags": ["network"],
  "builderAliases": ["network_xhr2"],
  "notes": [{
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/XMLHttpRequest2/"
  },{
    "name": "Details on Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/385"
  }]
}
!*/
Modernizr.addTest("xhr2","XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest),/*!
{
  "name": "Notification",
  "property": "notification",
  "caniuse": "notifications",
  "authors": ["Theodoor van Donge", "Hendrik Beskow"],
  "notes": [{
    "name": "HTML5 Rocks tutorial",
    "href": "http://www.html5rocks.com/en/tutorials/notifications/quick/"
  },{
    "name": "W3C spec",
    "href": "https://www.w3.org/TR/notifications/"
  }, {
    "name": "Changes in Chrome to Notifications API due to Service Worker Push Notifications",
    "href": "https://developers.google.com/web/updates/2015/05/Notifying-you-of-notificiation-changes"
  }],
  "knownBugs": [
    "Possibility of false-positive on Chrome for Android if permissions we're granted for a website prior to Chrome 44."
  ],
  "polyfills": ["desktop-notify", "html5-notifications"]
}
!*/
Modernizr.addTest("notification",function(){if(!window.Notification||!window.Notification.requestPermission)return!1;if("granted"===window.Notification.permission)return!0;try{new window.Notification("")}catch(e){if("TypeError"===e.name)return!1}return!0}),/*!
{
  "name": "Page Visibility API",
  "property": "pagevisibility",
  "caniuse": "pagevisibility",
  "tags": ["performance"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/DOM/Using_the_Page_Visibility_API"
  },{
    "name": "W3C spec",
    "href": "https://www.w3.org/TR/2011/WD-page-visibility-20110602/"
  },{
    "name": "HTML5 Rocks tutorial",
    "href": "http://www.html5rocks.com/en/tutorials/pagevisibility/intro/"
  }],
  "polyfills": ["visibilityjs", "visiblyjs", "jquery-visibility"]
}
!*/
Modernizr.addTest("pagevisibility",!!prefixed("hidden",document,!1)),/*!
{
  "name": "Navigation Timing API",
  "property": "performance",
  "caniuse": "nav-timing",
  "tags": ["performance"],
  "authors": ["Scott Murphy (@uxder)"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/navigation-timing/"
  },{
    "name": "HTML5 Rocks article",
    "href": "http://www.html5rocks.com/en/tutorials/webperformance/basics/"
  }],
  "polyfills": ["perfnow"]
}
!*/
Modernizr.addTest("performance",!!prefixed("performance",window)),/*!
{
  "name": "DOM Pointer Events API",
  "property": "pointerevents",
  "tags": ["input"],
  "authors": ["Stu Cox"],
  "notes": [
    {
      "name": "W3C Pointer Events",
      "href": "https://www.w3.org/TR/pointerevents/"
    },{
      "name": "W3C Pointer Events Level 2",
      "href": "https://www.w3.org/TR/pointerevents2/"
    },{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent"
  }],
  "warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
  "polyfills": ["pep"]
}
!*/
Modernizr.addTest("pointerevents",function(){var e=!1,t=domPrefixes.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)hasEvent(domPrefixes[t]+"pointerdown")&&(e=!0);return e}),/*!
{
  "name": "Pointer Lock API",
  "property": "pointerlock",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/API/Pointer_Lock_API"
  }],
  "builderAliases": ["pointerlock_api"]
}
!*/
Modernizr.addTest("pointerlock",!!prefixed("exitPointerLock",document)),/*!
{
  "name": "postMessage",
  "property": "postmessage",
  "caniuse": "x-doc-messaging",
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/html5/comms.html#posting-messages"
  }],
  "polyfills": ["easyxdm", "postmessage-jquery"]
}
!*/
Modernizr.addTest("postmessage","postMessage"in window),/*!
{
  "authors": ["Cătălin Mariș"],
  "caniuse": "proximity",
  "name": "Proximity API",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Proximity_Events"
  },{
    "name": "W3C specification",
    "href": "https://www.w3.org/TR/proximity/"
  }],
  "property": "proximity",
  "tags": ["events", "proximity"]
}
!*/
Modernizr.addAsyncTest(function(){function e(){clearTimeout(t),window.removeEventListener("deviceproximity",e),addTest("proximity",!0)}var t,n=300;"ondeviceproximity"in window&&"onuserproximity"in window?(window.addEventListener("deviceproximity",e),t=setTimeout(function(){window.removeEventListener("deviceproximity",e),addTest("proximity",!1)},n)):addTest("proximity",!1)}),/*!
{
  "name": "QuerySelector",
  "property": "queryselector",
  "caniuse": "queryselector",
  "tags": ["queryselector"],
  "authors": ["Andrew Betts (@triblondon)"],
  "notes": [{
    "name" : "W3C Selectors reference",
    "href": "https://www.w3.org/TR/selectors-api/#queryselectorall"
  }],
  "polyfills": ["css-selector-engine"]
}
!*/
Modernizr.addTest("queryselector","querySelector"in document&&"querySelectorAll"in document),/*!
{
  "name": "Quota Storage Management API",
  "property": "quotamanagement",
  "tags": ["storage"],
  "builderAliases": ["quota_management_api"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/quota-api/"
  }]
}
!*/
Modernizr.addTest("quotamanagement",function(){var e=prefixed("temporaryStorage",navigator),t=prefixed("persistentStorage",navigator);return!(!e||!t)}),/*!
{
  "name": "requestAnimationFrame",
  "property": "requestanimationframe",
  "aliases": ["raf"],
  "caniuse": "requestanimationframe",
  "tags": ["animation"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3C spec",
    "href": "https://www.w3.org/TR/animation-timing/"
  }],
  "polyfills": ["raf"]
}
!*/
Modernizr.addTest("requestanimationframe",!!prefixed("requestAnimationFrame",window),{aliases:["raf"]}),/*!
{
  "name": "script[async]",
  "property": "scriptasync",
  "caniuse": "script-async",
  "tags": ["script"],
  "builderAliases": ["script_async"],
  "authors": ["Theodoor van Donge"]
}
!*/
Modernizr.addTest("scriptasync","async"in createElement("script")),/*!
{
  "name": "script[defer]",
  "property": "scriptdefer",
  "caniuse": "script-defer",
  "tags": ["script"],
  "builderAliases": ["script_defer"],
  "authors": ["Theodoor van Donge"],
  "warnings": ["Browser implementation of the `defer` attribute vary: https://stackoverflow.com/questions/3952009/defer-attribute-chrome#answer-3982619"],
  "knownBugs": ["False positive in Opera 12"]
}
!*/
Modernizr.addTest("scriptdefer","defer"in createElement("script")),/*!
{
  "name": "ServiceWorker API",
  "property": "serviceworker",
  "notes": [{
    "name": "ServiceWorkers Explained",
    "href": "https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md"
  }]
}
!*/
Modernizr.addTest("serviceworker","serviceWorker"in navigator),/*!
{
  "authors": ["Cătălin Mariș"],
  "name": "Speech Recognition API",
  "notes": [
    {
      "name": "W3C Web Speech API Specification - The SpeechRecognition Interface",
      "href": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#speechreco-section"
    },
    {
      "name": "Introduction to the Web Speech API",
      "href": "http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API"
    }
  ],
  "property": "speechrecognition",
  "tags": ["input", "speech"]
}
!*/
Modernizr.addTest("speechrecognition",!!prefixed("SpeechRecognition",window)),/*!
{
  "authors": ["Cătălin Mariș"],
  "name": "Speech Synthesis API",
  "notes": [
    {
      "name": "W3C Web Speech API Specification - The SpeechSynthesis Interface",
      "href": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#tts-section"
    }
  ],
  "property": "speechsynthesis",
  "tags": ["input", "speech"]
}
!*/
Modernizr.addTest("speechsynthesis","SpeechSynthesisUtterance"in window),/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "knownBugs": [],
  "notes": [],
  "warnings": [],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/
Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),/*!
{
  "name": "Session Storage",
  "property": "sessionstorage",
  "tags": ["storage"],
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
}
!*/
Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/
Modernizr.addTest("websqldatabase","openDatabase"in window),/*!
{
  "name": "style[scoped]",
  "property": "stylescoped",
  "caniuse": "style-scoped",
  "tags": ["dom"],
  "builderAliases": ["style_scoped"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#attr-style-scoped"
  }],
  "polyfills": ["scoped-styles"]
}
!*/
Modernizr.addTest("stylescoped","scoped"in createElement("style")),/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),/*!
{
  "name": "SVG as an <img> tag source",
  "property": "svgasimg",
  "caniuse" : "svg-img",
  "tags": ["svg"],
  "aliases": ["svgincss"],
  "authors": ["Chris Coyier"],
  "notes": [{
    "name": "HTML5 Spec",
    "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
  }]
}
!*/
Modernizr.addTest("svgasimg",document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var toStringFn={}.toString;/*!
{
  "name": "SVG clip paths",
  "property": "svgclippaths",
  "tags": ["svg"],
  "notes": [{
    "name": "Demo",
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
  }]
}
!*/
Modernizr.addTest("svgclippaths",function(){return!!document.createElementNS&&/SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),/*!
{
  "name": "SVG filters",
  "property": "svgfilters",
  "caniuse": "svg-filters",
  "tags": ["svg"],
  "builderAliases": ["svg_filters"],
  "authors": ["Erik Dahlstrom"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/filters.html"
  }]
}
!*/
Modernizr.addTest("svgfilters",function(){var e=!1;try{e="SVGFEColorMatrixElement"in window&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return e}),/*!
{
  "name": "SVG foreignObject",
  "property": "svgforeignobject",
  "tags": ["svg"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/extend.html"
  }]
}
!*/
Modernizr.addTest("svgforeignobject",function(){return!!document.createElementNS&&/SVGForeignObject/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),/*!
{
  "name": "Inline SVG",
  "property": "inlinesvg",
  "caniuse": "svg-html5",
  "tags": ["svg"],
  "notes": [{
    "name": "Test page",
    "href": "https://paulirish.com/demo/inline-svg"
  }, {
    "name": "Test page and results",
    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
  }],
  "polyfills": ["inline-svg-polyfill"],
  "knownBugs": ["False negative on some Chromia browsers."]
}
!*/
Modernizr.addTest("inlinesvg",function(){var e=createElement("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),/*!
{
  "name": "SVG SMIL animation",
  "property": "smil",
  "caniuse": "svg-smil",
  "tags": ["svg"],
  "notes": [{
  "name": "W3C Synchronised Multimedia spec",
  "href": "https://www.w3.org/AudioVideo/"
  }]
}
!*/
Modernizr.addTest("smil",function(){return!!document.createElementNS&&/SVGAnimate/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","animate")))}),/*!
{
  "name": "Template strings",
  "property": "templatestrings",
  "notes": [{
    "name": "MDN Reference",
    "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Browser_compatibility"
  }]
}
!*/
Modernizr.addTest("templatestrings",function(){var supports;try{eval("``"),supports=!0}catch(e){}return!!supports}),/*!
{
  "name": "textarea maxlength",
  "property": "textareamaxlength",
  "aliases": ["textarea-maxlength"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"
  }],
  "polyfills": [
    "maxlength"
  ]
}
!*/
Modernizr.addTest("textareamaxlength",!!("maxLength"in createElement("textarea"))),/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/
Modernizr.addTest("touchevents",function(){var e;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)e=!0;else{var t=["@media (",prefixes.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");testStyles(t,function(t){e=9===t.offsetTop})}return e}),/*!
{
  "name": "Typed arrays",
  "property": "typedarrays",
  "caniuse": "typedarrays",
  "tags": ["js"],
  "authors": ["Stanley Stuart (@fivetanley)"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays"
  },{
    "name": "Kronos spec",
    "href": "https://www.khronos.org/registry/typedarray/specs/latest/"
  }],
  "polyfills": ["joshuabell-polyfill"]
}
!*/
Modernizr.addTest("typedarrays","ArrayBuffer"in window),/*!
{
  "name": "Unicode characters",
  "property": "unicode",
  "tags": ["encoding"],
  "warnings": [
    "positive Unicode support doesn't mean you can use it inside <title>, this seems more related to OS & Language packs"
  ]
}
!*/
Modernizr.addTest("unicode",function(){var e,t=createElement("span"),n=createElement("span");return testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}",function(i){t.innerHTML=isSVG?"\u5987":"&#5987;",n.innerHTML=isSVG?"\u2606":"&#9734;",i.appendChild(t),i.appendChild(n),e="offsetWidth"in t&&t.offsetWidth!==n.offsetWidth}),e}),/*!
{
  "name": "Unicode Range",
  "property": "unicoderange",
  "notes": [{
    "name" : "W3C reference",
    "href": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#descdef-unicode-range"
  }, {
    "name" : "24 Way article",
    "href": "https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range"
  }]
}
!*/
Modernizr.addTest("unicoderange",function(){return Modernizr.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',function(e){for(var t=[".",".","m","m"],n=0;n<t.length;n++){var i=createElement("span");i.innerHTML=t[n],i.className=n%2?"mono":"",e.appendChild(i),t[n]=i.clientWidth}return t[0]!==t[1]&&t[2]===t[3]})});/*!
{
  "name": "Blob URLs",
  "property": "bloburls",
  "caniuse": "bloburls",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "https://www.w3.org/TR/FileAPI/#creating-revoking"
  }],
  "tags": ["file", "url"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
var url=prefixed("URL",window,!1);url=url&&window[url],Modernizr.addTest("bloburls",url&&"revokeObjectURL"in url&&"createObjectURL"in url),/*!
{
  "name": "Data URI",
  "property": "datauri",
  "caniuse": "datauri",
  "tags": ["url"],
  "builderAliases": ["url_data_uri"],
  "async": true,
  "notes": [{
    "name": "Wikipedia article",
    "href": "https://en.wikipedia.org/wiki/Data_URI_scheme"
  }],
  "warnings": ["Support in Internet Explorer 8 is limited to images and linked resources like CSS files, not HTML files"]
}
!*/
Modernizr.addAsyncTest(function(){function e(){var e=new Image;e.onerror=function(){addTest("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=!1},e.onload=function(){addTest("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=1==e.width&&1==e.height};for(var t="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.length<33e3;)t="\r\n"+t;e.src="data:image/gif;base64,"+t}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){addTest("datauri",!1)},10);var t=new Image;t.onerror=function(){addTest("datauri",!1)},t.onload=function(){1==t.width&&1==t.height?e():addTest("datauri",!1)},t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}),/*!
{
  "name": "URL parser",
  "property": "urlparser",
  "notes": [{
    "name": "URL",
    "href": "https://dvcs.w3.org/hg/url/raw-file/tip/Overview.html"
  }],
  "polyfills": ["urlparser"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["url"]
}
!*/
Modernizr.addTest("urlparser",function(){var e;try{return e=new URL("http://modernizr.com/"),"http://modernizr.com/"===e.href}catch(t){return!1}}),/*!
{
  "authors": ["Cătălin Mariș"],
  "name": "URLSearchParams API",
  "notes": [
    {
      "name": "WHATWG specification",
      "href": "https://url.spec.whatwg.org/#interface-urlsearchparams"
    },
    {
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams"
    }
  ],
  "property": "urlsearchparams",
  "tags": ["querystring", "url"]
}
!*/
Modernizr.addTest("urlsearchparams","URLSearchParams"in window),/*!
{
  "name": "IE User Data API",
  "property": "userdata",
  "tags": ["storage"],
  "authors": ["@stereobooster"],
  "notes": [{
    "name": "MSDN Documentation",
    "href": "https://msdn.microsoft.com/en-us/library/ms531424.aspx"
  }]
}
!*/
Modernizr.addTest("userdata",!!createElement("div").addBehavior),/*!
{
  "name": "Vibration API",
  "property": "vibrate",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozVibrate"
  },{
    "name": "W3C spec",
    "href": "https://www.w3.org/TR/vibration/"
  }]
}
!*/
Modernizr.addTest("vibrate",!!prefixed("vibrate",navigator)),/*!
{
  "name": "HTML5 Video",
  "property": "video",
  "caniuse": "video",
  "tags": ["html5"],
  "knownBugs": [
    "Without QuickTime, `Modernizr.video.h264` will be `undefined`; https://github.com/Modernizr/Modernizr/issues/546"
  ],
  "polyfills": [
    "html5media",
    "mediaelementjs",
    "sublimevideo",
    "videojs",
    "leanbackplayer",
    "videoforeverybody"
  ]
}
!*/
Modernizr.addTest("video",function(){var e=createElement("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),/*!
{
  "name": "Video Autoplay",
  "property": "videoautoplay",
  "tags": ["video"],
  "async" : true,
  "warnings": ["This test is very large – only include it if you absolutely need it"],
  "knownBugs": ["crashes with an alert on iOS7 when added to homescreen"]
}
!*/
Modernizr.addAsyncTest(function(){function e(s){r++,clearTimeout(t);var a=s&&"playing"===s.type||0!==o.currentTime;return!a&&i>r?void(t=setTimeout(e,n)):(o.removeEventListener("playing",e,!1),addTest("videoautoplay",a),void(o.parentNode&&o.parentNode.removeChild(o)))}var t,n=200,i=5,r=0,o=createElement("video"),s=o.style;if(!(Modernizr.video&&"autoplay"in o))return void addTest("videoautoplay",!1);s.position="absolute",s.height=0,s.width=0;try{if(Modernizr.video.ogg)o.src="data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A";else{if(!Modernizr.video.h264)return void addTest("videoautoplay",!1);o.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(a){return void addTest("videoautoplay",!1)}o.setAttribute("autoplay",""),s.cssText="display:none",docElement.appendChild(o),setTimeout(function(){o.addEventListener("playing",e,!1),t=setTimeout(e,n)},0)}),/*!
{
  "name": "Video crossOrigin",
  "property": "videocrossorigin",
  "caniuse": "cors",
  "authors": ["Florian Mailliet"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes"
  }]
}
!*/
Modernizr.addTest("videocrossorigin","crossOrigin"in createElement("video")),/*!
{
  "name": "Video Loop Attribute",
  "property": "videoloop",
  "tags": ["video", "media"]
}
!*/
Modernizr.addTest("videoloop","loop"in createElement("video")),/*!
{
  "name": "Video Preload Attribute",
  "property": "videopreload",
  "tags": ["video", "media"]
}
!*/
Modernizr.addTest("videopreload","preload"in createElement("video")),/*!
{
  "name": "VML",
  "property": "vml",
  "caniuse": "vml",
  "tags": ["vml"],
  "authors": ["Craig Andrews (@candrews)"],
  "notes": [{
    "name" : "W3C VML reference",
    "href": "https://www.w3.org/TR/NOTE-VML"
  },{
    "name" : "Microsoft VML reference",
    "href": "https://msdn.microsoft.com/en-us/library/bb263898.aspx"
  }]
}
!*/
Modernizr.addTest("vml",function(){var e,t=createElement("div"),n=!1;return isSVG||(t.innerHTML='<v:shape id="vml_flag1" adj="1" />',e=t.firstChild,"style"in e&&(e.style.behavior="url(#default#VML)"),n=e?"object"==typeof e.adj:!0),n}),/*!
{
  "name": "Web Intents",
  "property": "webintents",
  "authors": ["Eric Bidelman"],
  "notes": [{
    "name": "Web Intents project site",
    "href": "http://webintents.org/"
  }],
  "polyfills": ["webintents"],
  "builderAliases": ["web_intents"]
}
!*/
Modernizr.addTest("webintents",!!prefixed("startActivity",navigator)),/*!
{
  "name": "Web Animation API",
  "property": "animation",
  "tags": ["webanimations"],
  "polyfills": ["webanimationsjs"],
  "notes": [{
    "name": "Introducing Web Animations",
    "href": "http://brian.sol1.net/svg/2013/06/26/introducing-web-animations/"
  }]
}
!*/
Modernizr.addTest("webanimations","animate"in createElement("div")),/*!
{
  "name": "WebGL",
  "property": "webgl",
  "caniuse": "webgl",
  "tags": ["webgl", "graphics"],
  "polyfills": ["jebgl", "cwebgl", "iewebgl"]
}
!*/
Modernizr.addTest("webgl",function(){var e=createElement("canvas"),t="probablySupportsContext"in e?"probablySupportsContext":"supportsContext";return t in e?e[t]("webgl")||e[t]("experimental-webgl"):"WebGLRenderingContext"in window}),/*!
{
  "name": "WebGL Extensions",
  "property": "webglextensions",
  "tags": ["webgl", "graphics"],
  "builderAliases": ["webgl_extensions"],
  "async" : true,
  "authors": ["Ilmari Heikkinen"],
  "knownBugs": [],
  "notes": [{
    "name": "Kronos extensions registry",
    "href": "http://www.khronos.org/registry/webgl/extensions/"
  }]
}
!*/
Modernizr.addAsyncTest(function(){if(Modernizr.webglextensions=!1,Modernizr.webgl){var e,t,n;try{e=createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl"),n=t.getSupportedExtensions()}catch(i){return}t!==undefined&&(Modernizr.webglextensions=new Boolean(!0));for(var r=-1,o=n.length;++r<o;)Modernizr.webglextensions[n[r]]=!0;e=undefined}}),/*!
{
  "name": "RTC Peer Connection",
  "property": "peerconnection",
  "tags": ["webrtc"],
  "authors": ["Ankur Oberoi"],
  "notes": [{
    "name": "W3C Web RTC spec",
    "href": "https://www.w3.org/TR/webrtc/"
  }]
}
!*/
Modernizr.addTest("peerconnection",!!prefixed("RTCPeerConnection",window)),/*!
{
  "name": "RTC Data Channel",
  "property": "datachannel",
  "notes": [{
    "name": "HTML5 Rocks! Article",
    "href": "http://www.html5rocks.com/en/tutorials/webrtc/datachannels/"
  }]
}
!*/
Modernizr.addTest("datachannel",function(){if(!Modernizr.peerconnection)return!1;for(var e=0,t=domPrefixes.length;t>e;e++){var n=window[domPrefixes[e]+"RTCPeerConnection"];if(n){var i=new n(null);return"createDataChannel"in i}}return!1}),/*!
{
  "name": "getUserMedia",
  "property": "getusermedia",
  "caniuse": "stream",
  "tags": ["webrtc"],
  "authors": ["Eric Bidelman", "Masataka Yakura"],
  "notes": [{
    "name": "W3C Media Capture and Streams spec",
    "href": "http://w3c.github.io/mediacapture-main/#dom-mediadevices-getusermedia"
  }]
}
!*/
Modernizr.addTest("getUserMedia","mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices);/*!
{
  "name": "WebSockets Support",
  "property": "websockets",
  "authors": ["Phread [fearphage]", "Mike Sherov [mikesherov]", "Burak Yigit Kaya [BYK]"],
  "caniuse": "websockets",
  "tags": ["html5"],
  "warnings": [
    "This test will reject any old version of WebSockets even if it is not prefixed such as in Safari 5.1"
  ],
  "notes": [{
    "name": "CLOSING State and Spec",
    "href": "https://www.w3.org/TR/websockets/#the-websocket-interface"
  }],
  "polyfills": [
    "sockjs",
    "socketio",
    "kaazing-websocket-gateway",
    "websocketjs",
    "atmosphere",
    "graceful-websocket",
    "portal",
    "datachannel"
  ]
}
!*/
var supports=!1;try{supports="WebSocket"in window&&2===window.WebSocket.CLOSING}catch(e){}Modernizr.addTest("websockets",supports),/*!
{
  "name": "Binary WebSockets",
  "property": "websocketsbinary",
  "tags": ["websockets"],
  "builderAliases": ["websockets_binary"]
}
!*/
Modernizr.addTest("websocketsbinary",function(){var e,t="https:"==location.protocol?"wss":"ws";if("WebSocket"in window){if(e="binaryType"in WebSocket.prototype)return e;try{return!!new WebSocket(t+"://.").binaryType}catch(n){}}return!1}),/*!
{
  "name": "Framed window",
  "property": "framed",
  "tags": ["window"],
  "builderAliases": ["window_framed"]
}
!*/
Modernizr.addTest("framed",window.location!=top.location),/*!
{
  "name": "Workers from Blob URIs",
  "property": "blobworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_blobworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/
Modernizr.addAsyncTest(function(){function e(){addTest("blobworkers",!1),t()}function t(){a&&i.revokeObjectURL(a),s&&s.terminate(),l&&clearTimeout(l)}try{var n=window.BlobBuilder,i=window.URL;Modernizr._config.usePrefix&&(n=n||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,i=i||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var r,o,s,a,l,d="Modernizr",c="this.onmessage=function(e){postMessage(e.data)}";try{r=new Blob([c],{type:"text/javascript"})}catch(u){}r||(o=new n,o.append(c),r=o.getBlob()),a=i.createObjectURL(r),s=new Worker(a),s.onmessage=function(e){addTest("blobworkers",d===e.data),t()},s.onerror=e,l=setTimeout(e,200),s.postMessage(d)}catch(u){e()}}),/*!
{
  "name": "Workers from Data URIs",
  "property": "dataworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_dataworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/
Modernizr.addAsyncTest(function(){try{var e="Modernizr",t=new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");t.onmessage=function(n){t.terminate(),addTest("dataworkers",e===n.data),t=null},t.onerror=function(){addTest("dataworkers",!1),t=null},setTimeout(function(){addTest("dataworkers",!1)},200),t.postMessage(e)}catch(n){setTimeout(function(){addTest("dataworkers",!1)},0)}}),/*!
{
  "name": "Shared Workers",
  "property": "sharedworkers",
  "caniuse" : "sharedworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_sharedworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/workers/"
  }]
}
!*/
Modernizr.addTest("sharedworkers","SharedWorker"in window),/*!
{
  "name": "Web Workers",
  "property": "webworkers",
  "caniuse" : "webworkers",
  "tags": ["performance", "workers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/workers/"
  }, {
    "name": "HTML5 Rocks article",
    "href": "http://www.html5rocks.com/en/tutorials/workers/basics/"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers"
  }],
  "polyfills": ["fakeworker", "html5shims"]
}
!*/
Modernizr.addTest("webworkers","Worker"in window),/*!
{
  "name": "Transferables Objects",
  "property": "transferables",
  "tags": ["performance", "workers"],
  "builderAliases": ["transferables"],
  "notes": [{
    "name": "HTML5 Rocks article",
    "href": "http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast"
  }],
  "async": true
}
!*/
Modernizr.addAsyncTest(function(){function e(){addTest("transferables",!1),t()}function t(){a&&URL.revokeObjectURL(a),l&&l.terminate(),r&&clearTimeout(r)}var n=!!(Modernizr.blobconstructor&&Modernizr.bloburls&&Modernizr.webworkers&&Modernizr.typedarrays);if(!n)return addTest("transferables",!1);try{var i,r,o='var hello = "world"',s=new Blob([o],{type:"text/javascript"}),a=URL.createObjectURL(s),l=new Worker(a);l.onerror=e,r=setTimeout(e,200),i=new ArrayBuffer(1),l.postMessage(i,[i]),addTest("transferables",0===i.byteLength),t()}catch(d){e()}}),/*!
{
  "name": "XDomainRequest",
  "property": "xdomainrequest",
  "tags": ["cors", "xdomainrequest", "ie9", "ie8"],
  "authors": ["Ivan Pan (@hypotenuse)"],
  "notes": [
  {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest"
  },
  {
    "name": "MSDN documentation",
    "href": "https://msdn.microsoft.com/library/ie/cc288060.aspx/"
  }]
}
!*/
Modernizr.addTest("xdomainrequest","XDomainRequest"in window),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document),/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */
function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=!!e&&"length"in e&&e.length,n=oe.type(e);return"function"===n||oe.isWindow(e)?!1:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function i(e,t,n){if(oe.isFunction(t))return oe.grep(e,function(e,i){return!!t.call(e,i,e)!==n});if(t.nodeType)return oe.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(fe.test(t))return oe.filter(t,e,n);t=oe.filter(t,e)}return oe.grep(e,function(e){return K.call(t,e)>-1!==n})}function r(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t={};return oe.each(e.match(be)||[],function(e,n){t[n]=!0}),t}function s(){Z.removeEventListener("DOMContentLoaded",s),e.removeEventListener("load",s),oe.ready()}function a(){this.expando=oe.expando+a.uid++}function l(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(Ee,"-$&").toLowerCase(),n=e.getAttribute(i),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:Ce.test(n)?oe.parseJSON(n):n}catch(r){}ke.set(e,t,n)}else n=void 0;return n}function d(e,t,n,i){var r,o=1,s=20,a=i?function(){return i.cur()}:function(){return oe.css(e,t,"")},l=a(),d=n&&n[3]||(oe.cssNumber[t]?"":"px"),c=(oe.cssNumber[t]||"px"!==d&&+l)&&Pe.exec(oe.css(e,t));if(c&&c[3]!==d){d=d||c[3],n=n||[],c=+l||1;do o=o||".5",c/=o,oe.style(e,t,c+d);while(o!==(o=a()/l)&&1!==o&&--s)}return n&&(c=+c||+l||0,r=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=d,i.start=c,i.end=r)),r}function c(e,t){var n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&oe.nodeName(e,t)?oe.merge([e],n):n}function u(e,t){for(var n=0,i=e.length;i>n;n++)Te.set(e[n],"globalEval",!t||Te.get(t[n],"globalEval"))}function p(e,t,n,i,r){for(var o,s,a,l,d,p,A=t.createDocumentFragment(),h=[],f=0,g=e.length;g>f;f++)if(o=e[f],o||0===o)if("object"===oe.type(o))oe.merge(h,o.nodeType?[o]:o);else if(je.test(o)){for(s=s||A.appendChild(t.createElement("div")),a=(Ie.exec(o)||["",""])[1].toLowerCase(),l=qe[a]||qe._default,s.innerHTML=l[1]+oe.htmlPrefilter(o)+l[2],p=l[0];p--;)s=s.lastChild;oe.merge(h,s.childNodes),s=A.firstChild,s.textContent=""}else h.push(t.createTextNode(o));for(A.textContent="",f=0;o=h[f++];)if(i&&oe.inArray(o,i)>-1)r&&r.push(o);else if(d=oe.contains(o.ownerDocument,o),s=c(A.appendChild(o),"script"),d&&u(s),n)for(p=0;o=s[p++];)Qe.test(o.type||"")&&n.push(o);return A}function A(){return!0}function h(){return!1}function f(){try{return Z.activeElement}catch(e){}}function g(e,t,n,i,r,o){var s,a;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=void 0);for(a in t)g(e,a,n,i,t[a],o);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),r===!1)r=h;else if(!r)return e;return 1===o&&(s=r,r=function(e){return oe().off(e),s.apply(this,arguments)},r.guid=s.guid||(s.guid=oe.guid++)),e.each(function(){oe.event.add(this,t,r,i,n)})}function m(e,t){return oe.nodeName(e,"table")&&oe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function v(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function w(e){var t=Ne.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function y(e,t){var n,i,r,o,s,a,l,d;if(1===t.nodeType){if(Te.hasData(e)&&(o=Te.access(e),s=Te.set(t,o),d=o.events)){delete s.handle,s.events={};for(r in d)for(n=0,i=d[r].length;i>n;n++)oe.event.add(t,r,d[r][n])}ke.hasData(e)&&(a=ke.access(e),l=oe.extend({},a),ke.set(t,l))}}function b(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Be.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function x(e,t,n,i){t=J.apply([],t);var r,o,s,a,l,d,u=0,A=e.length,h=A-1,f=t[0],g=oe.isFunction(f);if(g||A>1&&"string"==typeof f&&!ie.checkClone&&Oe.test(f))return e.each(function(r){var o=e.eq(r);g&&(t[0]=f.call(this,r,o.html())),x(o,t,n,i)});if(A&&(r=p(t,e[0].ownerDocument,!1,e,i),o=r.firstChild,1===r.childNodes.length&&(r=o),o||i)){for(s=oe.map(c(r,"script"),v),a=s.length;A>u;u++)l=r,u!==h&&(l=oe.clone(l,!0,!0),a&&oe.merge(s,c(l,"script"))),n.call(e[u],l,u);if(a)for(d=s[s.length-1].ownerDocument,oe.map(s,w),u=0;a>u;u++)l=s[u],Qe.test(l.type||"")&&!Te.access(l,"globalEval")&&oe.contains(d,l)&&(l.src?oe._evalUrl&&oe._evalUrl(l.src):oe.globalEval(l.textContent.replace(We,"")))}return e}function _(e,t,n){for(var i,r=t?oe.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||oe.cleanData(c(i)),i.parentNode&&(n&&oe.contains(i.ownerDocument,i)&&u(c(i,"script")),i.parentNode.removeChild(i));return e}function S(e,t){var n=oe(t.createElement(e)).appendTo(t.body),i=oe.css(n[0],"display");return n.detach(),i}function T(e){var t=Z,n=Ve[e];return n||(n=S(e,t),"none"!==n&&n||(Ue=(Ue||oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Ue[0].contentDocument,t.write(),t.close(),n=S(e,t),Ue.detach()),Ve[e]=n),n}function k(e,t,n){var i,r,o,s,a=e.style;return n=n||Ye(e),s=n?n.getPropertyValue(t)||n[t]:void 0,""!==s&&void 0!==s||oe.contains(e.ownerDocument,e)||(s=oe.style(e,t)),n&&!ie.pixelMarginRight()&&Ze.test(s)&&Ge.test(t)&&(i=a.width,r=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=r,a.maxWidth=o),void 0!==s?s+"":s}function C(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function E(e){if(e in it)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=nt.length;n--;)if(e=nt[n]+t,e in it)return e}function D(e,t,n){var i=Pe.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function P(e,t,n,i,r){for(var o=n===(i?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=oe.css(e,n+Me[o],!0,r)),i?("content"===n&&(s-=oe.css(e,"padding"+Me[o],!0,r)),"margin"!==n&&(s-=oe.css(e,"border"+Me[o]+"Width",!0,r))):(s+=oe.css(e,"padding"+Me[o],!0,r),"padding"!==n&&(s+=oe.css(e,"border"+Me[o]+"Width",!0,r)));return s}function M(e,t,n){var i=!0,r="width"===t?e.offsetWidth:e.offsetHeight,o=Ye(e),s="border-box"===oe.css(e,"boxSizing",!1,o);if(0>=r||null==r){if(r=k(e,t,o),(0>r||null==r)&&(r=e.style[t]),Ze.test(r))return r;i=s&&(ie.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+P(e,t,n||(s?"border":"content"),i,o)+"px"}function z(e,t){for(var n,i,r,o=[],s=0,a=e.length;a>s;s++)i=e[s],i.style&&(o[s]=Te.get(i,"olddisplay"),n=i.style.display,t?(o[s]||"none"!==n||(i.style.display=""),""===i.style.display&&ze(i)&&(o[s]=Te.access(i,"olddisplay",T(i.nodeName)))):(r=ze(i),"none"===n&&r||Te.set(i,"olddisplay",r?n:oe.css(i,"display"))));for(s=0;a>s;s++)i=e[s],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?o[s]||"":"none"));return e}function B(e,t,n,i,r){return new B.prototype.init(e,t,n,i,r)}function I(){return e.setTimeout(function(){rt=void 0}),rt=oe.now()}function Q(e,t){var n,i=0,r={height:e};for(t=t?1:0;4>i;i+=2-t)n=Me[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function q(e,t,n){for(var i,r=(F.tweeners[t]||[]).concat(F.tweeners["*"]),o=0,s=r.length;s>o;o++)if(i=r[o].call(n,t,e))return i}function j(e,t,n){var i,r,o,s,a,l,d,c,u=this,p={},A=e.style,h=e.nodeType&&ze(e),f=Te.get(e,"fxshow");n.queue||(a=oe._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,u.always(function(){u.always(function(){a.unqueued--,oe.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[A.overflow,A.overflowX,A.overflowY],d=oe.css(e,"display"),c="none"===d?Te.get(e,"olddisplay")||T(e.nodeName):d,"inline"===c&&"none"===oe.css(e,"float")&&(A.display="inline-block")),n.overflow&&(A.overflow="hidden",u.always(function(){A.overflow=n.overflow[0],A.overflowX=n.overflow[1],A.overflowY=n.overflow[2]}));for(i in t)if(r=t[i],st.exec(r)){if(delete t[i],o=o||"toggle"===r,r===(h?"hide":"show")){if("show"!==r||!f||void 0===f[i])continue;h=!0}p[i]=f&&f[i]||oe.style(e,i)}else d=void 0;if(oe.isEmptyObject(p))"inline"===("none"===d?T(e.nodeName):d)&&(A.display=d);else{f?"hidden"in f&&(h=f.hidden):f=Te.access(e,"fxshow",{}),o&&(f.hidden=!h),h?oe(e).show():u.done(function(){oe(e).hide()}),u.done(function(){var t;Te.remove(e,"fxshow");for(t in p)oe.style(e,t,p[t])});for(i in p)s=q(h?f[i]:0,i,u),i in f||(f[i]=s.start,h&&(s.end=s.start,s.start="width"===i||"height"===i?1:0))}}function R(e,t){var n,i,r,o,s;for(n in e)if(i=oe.camelCase(n),r=t[i],o=e[n],oe.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),s=oe.cssHooks[i],s&&"expand"in s){o=s.expand(o),delete e[i];for(n in o)n in e||(e[n]=o[n],t[n]=r)}else t[i]=r}function F(e,t,n){var i,r,o=0,s=F.prefilters.length,a=oe.Deferred().always(function(){delete l.elem}),l=function(){if(r)return!1;for(var t=rt||I(),n=Math.max(0,d.startTime+d.duration-t),i=n/d.duration||0,o=1-i,s=0,l=d.tweens.length;l>s;s++)d.tweens[s].run(o);return a.notifyWith(e,[d,o,n]),1>o&&l?n:(a.resolveWith(e,[d]),!1)},d=a.promise({elem:e,props:oe.extend({},t),opts:oe.extend(!0,{specialEasing:{},easing:oe.easing._default},n),originalProperties:t,originalOptions:n,startTime:rt||I(),duration:n.duration,tweens:[],createTween:function(t,n){var i=oe.Tween(e,d.opts,t,n,d.opts.specialEasing[t]||d.opts.easing);return d.tweens.push(i),i},stop:function(t){var n=0,i=t?d.tweens.length:0;if(r)return this;for(r=!0;i>n;n++)d.tweens[n].run(1);return t?(a.notifyWith(e,[d,1,0]),a.resolveWith(e,[d,t])):a.rejectWith(e,[d,t]),this}}),c=d.props;for(R(c,d.opts.specialEasing);s>o;o++)if(i=F.prefilters[o].call(d,e,c,d.opts))return oe.isFunction(i.stop)&&(oe._queueHooks(d.elem,d.opts.queue).stop=oe.proxy(i.stop,i)),i;return oe.map(c,q,d),oe.isFunction(d.opts.start)&&d.opts.start.call(e,d),oe.fx.timer(oe.extend(l,{elem:e,anim:d,queue:d.opts.queue})),d.progress(d.opts.progress).done(d.opts.done,d.opts.complete).fail(d.opts.fail).always(d.opts.always)}function H(e){return e.getAttribute&&e.getAttribute("class")||""}function $(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(be)||[];if(oe.isFunction(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function L(e,t,n,i){function r(a){var l;return o[a]=!0,oe.each(e[a]||[],function(e,a){var d=a(t,n,i);return"string"!=typeof d||s||o[d]?s?!(l=d):void 0:(t.dataTypes.unshift(d),r(d),!1)}),l}var o={},s=e===kt;return r(t.dataTypes[0])||!o["*"]&&r("*")}function O(e,t){var n,i,r=oe.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&oe.extend(!0,e,i),e}function N(e,t,n){for(var i,r,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}if(l[0]in n)o=l[0];else{for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}s||(s=r)}o=o||s}return o?(o!==l[0]&&l.unshift(o),n[o]):void 0}function W(e,t,n,i){var r,o,s,a,l,d={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)d[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(s=d[l+" "+o]||d["* "+o],!s)for(r in d)if(a=r.split(" "),a[1]===o&&(s=d[l+" "+a[0]]||d["* "+a[0]])){s===!0?s=d[r]:d[r]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(u){return{state:"parsererror",error:s?u:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}function U(e,t,n,i){var r;if(oe.isArray(t))oe.each(t,function(t,r){n||Pt.test(e)?i(e,r):U(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==oe.type(t))i(e,t);else for(r in t)U(e+"["+r+"]",t[r],n,i)}function V(e){return oe.isWindow(e)?e:9===e.nodeType&&e.defaultView}var G=[],Z=e.document,Y=G.slice,J=G.concat,X=G.push,K=G.indexOf,ee={},te=ee.toString,ne=ee.hasOwnProperty,ie={},re="2.2.4",oe=function(e,t){return new oe.fn.init(e,t)},se=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ae=/^-ms-/,le=/-([\da-z])/gi,de=function(e,t){return t.toUpperCase()};oe.fn=oe.prototype={jquery:re,constructor:oe,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:Y.call(this)},pushStack:function(e){var t=oe.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return oe.each(this,e)},map:function(e){return this.pushStack(oe.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:X,sort:G.sort,splice:G.splice},oe.extend=oe.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,d=!1;for("boolean"==typeof s&&(d=s,s=arguments[a]||{},a++),"object"==typeof s||oe.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],i=e[t],s!==i&&(d&&i&&(oe.isPlainObject(i)||(r=oe.isArray(i)))?(r?(r=!1,o=n&&oe.isArray(n)?n:[]):o=n&&oe.isPlainObject(n)?n:{},s[t]=oe.extend(d,o,i)):void 0!==i&&(s[t]=i));return s},oe.extend({expando:"jQuery"+(re+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===oe.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=e&&e.toString();return!oe.isArray(e)&&t-parseFloat(t)+1>=0},isPlainObject:function(e){var t;if("object"!==oe.type(e)||e.nodeType||oe.isWindow(e))return!1;if(e.constructor&&!ne.call(e,"constructor")&&!ne.call(e.constructor.prototype||{},"isPrototypeOf"))return!1;for(t in e);return void 0===t||ne.call(e,t)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ee[te.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=oe.trim(e),e&&(1===e.indexOf("use strict")?(t=Z.createElement("script"),t.text=e,Z.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ae,"ms-").replace(le,de)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var i,r=0;if(n(e))for(i=e.length;i>r&&t.call(e[r],r,e[r])!==!1;r++);else for(r in e)if(t.call(e[r],r,e[r])===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(se,"")},makeArray:function(e,t){var i=t||[];return null!=e&&(n(Object(e))?oe.merge(i,"string"==typeof e?[e]:e):X.call(i,e)),i},inArray:function(e,t,n){return null==t?-1:K.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;n>i;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i,r=[],o=0,s=e.length,a=!n;s>o;o++)i=!t(e[o],o),i!==a&&r.push(e[o]);return r},map:function(e,t,i){var r,o,s=0,a=[];if(n(e))for(r=e.length;r>s;s++)o=t(e[s],s,i),null!=o&&a.push(o);else for(s in e)o=t(e[s],s,i),null!=o&&a.push(o);return J.apply([],a)},guid:1,proxy:function(e,t){var n,i,r;return"string"==typeof t&&(n=e[t],t=e,e=n),oe.isFunction(e)?(i=Y.call(arguments,2),r=function(){return e.apply(t||this,i.concat(Y.call(arguments)))},r.guid=e.guid=e.guid||oe.guid++,r):void 0},now:Date.now,support:ie}),"function"==typeof Symbol&&(oe.fn[Symbol.iterator]=G[Symbol.iterator]),oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ee["[object "+t+"]"]=t.toLowerCase()});var ce=/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
function(e){function t(e,t,n,i){var r,o,s,a,l,d,u,A,h=t&&t.ownerDocument,f=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==f&&9!==f&&11!==f)return n;if(!i&&((t?t.ownerDocument||t:H)!==z&&M(t),t=t||z,I)){if(11!==f&&(d=me.exec(e)))if(r=d[1]){if(9===f){if(!(s=t.getElementById(r)))return n;if(s.id===r)return n.push(s),n}else if(h&&(s=h.getElementById(r))&&R(t,s)&&s.id===r)return n.push(s),n}else{if(d[2])return X.apply(n,t.getElementsByTagName(e)),n;if((r=d[3])&&b.getElementsByClassName&&t.getElementsByClassName)return X.apply(n,t.getElementsByClassName(r)),n}if(b.qsa&&!W[e+" "]&&(!Q||!Q.test(e))){if(1!==f)h=t,A=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(we,"\\$&"):t.setAttribute("id",a=F),u=T(e),o=u.length,l=pe.test(a)?"#"+a:"[id='"+a+"']";o--;)u[o]=l+" "+p(u[o]);A=u.join(","),h=ve.test(e)&&c(t.parentNode)||t}if(A)try{return X.apply(n,h.querySelectorAll(A)),n}catch(g){}finally{a===F&&t.removeAttribute("id")}}}return C(e.replace(ae,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>x.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[F]=!0,e}function r(e){var t=z.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),i=n.length;i--;)x.attrHandle[n[i]]=t}function s(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function d(e){return i(function(t){return t=+t,i(function(n,i){for(var r,o=e([],n.length,t),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function u(){}function p(e){for(var t=0,n=e.length,i="";n>t;t++)i+=e[t].value;return i}function A(e,t,n){var i=t.dir,r=n&&"parentNode"===i,o=L++;return t.first?function(t,n,o){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,o)}:function(t,n,s){var a,l,d,c=[$,o];if(s){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,s))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(d=t[F]||(t[F]={}),l=d[t.uniqueID]||(d[t.uniqueID]={}),(a=l[i])&&a[0]===$&&a[1]===o)return c[2]=a[2];if(l[i]=c,c[2]=e(t,n,s))return!0}}}function h(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function f(e,n,i){for(var r=0,o=n.length;o>r;r++)t(e,n[r],i);return i}function g(e,t,n,i,r){for(var o,s=[],a=0,l=e.length,d=null!=t;l>a;a++)(o=e[a])&&(!n||n(o,i,r))&&(s.push(o),d&&t.push(a));return s}function m(e,t,n,r,o,s){return r&&!r[F]&&(r=m(r)),o&&!o[F]&&(o=m(o,s)),i(function(i,s,a,l){var d,c,u,p=[],A=[],h=s.length,m=i||f(t||"*",a.nodeType?[a]:a,[]),v=!e||!i&&t?m:g(m,p,e,a,l),w=n?o||(i?e:h||r)?[]:s:v;if(n&&n(v,w,a,l),r)for(d=g(w,A),r(d,[],a,l),c=d.length;c--;)(u=d[c])&&(w[A[c]]=!(v[A[c]]=u));if(i){if(o||e){if(o){for(d=[],c=w.length;c--;)(u=w[c])&&d.push(v[c]=u);o(null,w=[],d,l)}for(c=w.length;c--;)(u=w[c])&&(d=o?ee(i,u):p[c])>-1&&(i[d]=!(s[d]=u))}}else w=g(w===s?w.splice(h,w.length):w),o?o(null,s,w,l):X.apply(s,w)})}function v(e){for(var t,n,i,r=e.length,o=x.relative[e[0].type],s=o||x.relative[" "],a=o?1:0,l=A(function(e){return e===t},s,!0),d=A(function(e){return ee(t,e)>-1},s,!0),c=[function(e,n,i){var r=!o&&(i||n!==E)||((t=n).nodeType?l(e,n,i):d(e,n,i));return t=null,r}];r>a;a++)if(n=x.relative[e[a].type])c=[A(h(c),n)];else{if(n=x.filter[e[a].type].apply(null,e[a].matches),n[F]){for(i=++a;r>i&&!x.relative[e[i].type];i++);return m(a>1&&h(c),a>1&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ae,"$1"),n,i>a&&v(e.slice(a,i)),r>i&&v(e=e.slice(i)),r>i&&p(e))}c.push(n)}return h(c)}function w(e,n){var r=n.length>0,o=e.length>0,s=function(i,s,a,l,d){var c,u,p,A=0,h="0",f=i&&[],m=[],v=E,w=i||o&&x.find.TAG("*",d),y=$+=null==v?1:Math.random()||.1,b=w.length;for(d&&(E=s===z||s||d);h!==b&&null!=(c=w[h]);h++){if(o&&c){for(u=0,s||c.ownerDocument===z||(M(c),a=!I);p=e[u++];)if(p(c,s||z,a)){l.push(c);break}d&&($=y)}r&&((c=!p&&c)&&A--,i&&f.push(c))}if(A+=h,r&&h!==A){for(u=0;p=n[u++];)p(f,m,s,a);if(i){if(A>0)for(;h--;)f[h]||m[h]||(m[h]=Y.call(l));m=g(m)}X.apply(l,m),d&&!i&&m.length>0&&A+n.length>1&&t.uniqueSort(l)}return d&&($=y,E=v),f};return r?i(s):s}var y,b,x,_,S,T,k,C,E,D,P,M,z,B,I,Q,q,j,R,F="sizzle"+1*new Date,H=e.document,$=0,L=0,O=n(),N=n(),W=n(),U=function(e,t){return e===t&&(P=!0),0},V=1<<31,G={}.hasOwnProperty,Z=[],Y=Z.pop,J=Z.push,X=Z.push,K=Z.slice,ee=function(e,t){for(var n=0,i=e.length;i>n;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",re="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",oe=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+re+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=new RegExp("^"+ne+"*,"+ne+"*"),de=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),ue=new RegExp(oe),pe=new RegExp("^"+ie+"$"),Ae={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+re),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,fe=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ve=/[+~]/,we=/'|\\/g,ye=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),be=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},xe=function(){M()};try{X.apply(Z=K.call(H.childNodes),H.childNodes),Z[H.childNodes.length].nodeType}catch(_e){X={apply:Z.length?function(e,t){J.apply(e,K.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}b=t.support={},S=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},M=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:H;return i!==z&&9===i.nodeType&&i.documentElement?(z=i,B=z.documentElement,I=!S(z),(n=z.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",xe,!1):n.attachEvent&&n.attachEvent("onunload",xe)),b.attributes=r(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=r(function(e){return e.appendChild(z.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=ge.test(z.getElementsByClassName),b.getById=r(function(e){return B.appendChild(e).id=F,!z.getElementsByName||!z.getElementsByName(F).length}),b.getById?(x.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&I){var n=t.getElementById(e);return n?[n]:[]}},x.filter.ID=function(e){var t=e.replace(ye,be);return function(e){return e.getAttribute("id")===t}}):(delete x.find.ID,x.filter.ID=function(e){var t=e.replace(ye,be);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),x.find.TAG=b.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):b.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},x.find.CLASS=b.getElementsByClassName&&function(e,t){return"undefined"!=typeof t.getElementsByClassName&&I?t.getElementsByClassName(e):void 0},q=[],Q=[],(b.qsa=ge.test(z.querySelectorAll))&&(r(function(e){B.appendChild(e).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&Q.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||Q.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+F+"-]").length||Q.push("~="),e.querySelectorAll(":checked").length||Q.push(":checked"),e.querySelectorAll("a#"+F+"+*").length||Q.push(".#.+[+~]")}),r(function(e){var t=z.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&Q.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||Q.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),Q.push(",.*:")})),(b.matchesSelector=ge.test(j=B.matches||B.webkitMatchesSelector||B.mozMatchesSelector||B.oMatchesSelector||B.msMatchesSelector))&&r(function(e){b.disconnectedMatch=j.call(e,"div"),j.call(e,"[s!='']:x"),q.push("!=",oe)}),Q=Q.length&&new RegExp(Q.join("|")),q=q.length&&new RegExp(q.join("|")),t=ge.test(B.compareDocumentPosition),R=t||ge.test(B.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return P=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!b.sortDetached&&t.compareDocumentPosition(e)===n?e===z||e.ownerDocument===H&&R(H,e)?-1:t===z||t.ownerDocument===H&&R(H,t)?1:D?ee(D,e)-ee(D,t):0:4&n?-1:1)}:function(e,t){if(e===t)return P=!0,0;var n,i=0,r=e.parentNode,o=t.parentNode,a=[e],l=[t];if(!r||!o)return e===z?-1:t===z?1:r?-1:o?1:D?ee(D,e)-ee(D,t):0;if(r===o)return s(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;a[i]===l[i];)i++;return i?s(a[i],l[i]):a[i]===H?-1:l[i]===H?1:0},z):z},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==z&&M(e),n=n.replace(ce,"='$1']"),b.matchesSelector&&I&&!W[n+" "]&&(!q||!q.test(n))&&(!Q||!Q.test(n)))try{var i=j.call(e,n);if(i||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(r){}return t(n,z,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==z&&M(e),R(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==z&&M(e);var n=x.attrHandle[t.toLowerCase()],i=n&&G.call(x.attrHandle,t.toLowerCase())?n(e,t,!I):void 0;return void 0!==i?i:b.attributes||!I?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(P=!b.detectDuplicates,D=!b.sortStable&&e.slice(0),e.sort(U),P){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return D=null,e},_=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=_(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=_(t);return n},x=t.selectors={cacheLength:50,createPseudo:i,match:Ae,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ye,be),e[3]=(e[3]||e[4]||e[5]||"").replace(ye,be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Ae.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ue.test(n)&&(t=T(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ye,be).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=O[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&O(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(r){var o=t.attr(r,e);return null==o?"!="===n:n?(o+="","="===n?o===i:"!="===n?o!==i:"^="===n?i&&0===o.indexOf(i):"*="===n?i&&o.indexOf(i)>-1:"$="===n?i&&o.slice(-i.length)===i:"~="===n?(" "+o.replace(se," ")+" ").indexOf(i)>-1:"|="===n?o===i||o.slice(0,i.length+1)===i+"-":!1):!0}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var d,c,u,p,A,h,f=o!==s?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),v=!l&&!a,w=!1;if(g){if(o){for(;f;){for(p=t;p=p[f];)if(a?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;h=f="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&v){for(p=g,u=p[F]||(p[F]={}),c=u[p.uniqueID]||(u[p.uniqueID]={}),d=c[e]||[],A=d[0]===$&&d[1],w=A&&d[2],p=A&&g.childNodes[A];p=++A&&p&&p[f]||(w=A=0)||h.pop();)if(1===p.nodeType&&++w&&p===t){c[e]=[$,A,w];break}}else if(v&&(p=t,u=p[F]||(p[F]={}),c=u[p.uniqueID]||(u[p.uniqueID]={}),d=c[e]||[],A=d[0]===$&&d[1],w=A),w===!1)for(;(p=++A&&p&&p[f]||(w=A=0)||h.pop())&&((a?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++w||(v&&(u=p[F]||(p[F]={}),c=u[p.uniqueID]||(u[p.uniqueID]={}),c[e]=[$,w]),p!==t)););return w-=r,w===i||w%i===0&&w/i>=0}}},PSEUDO:function(e,n){var r,o=x.pseudos[e]||x.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[F]?o(n):o.length>1?(r=[e,e,"",n],x.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,r=o(e,n),s=r.length;s--;)i=ee(e,r[s]),e[i]=!(t[i]=r[s])}):function(e){return o(e,0,r)}):o}},pseudos:{not:i(function(e){var t=[],n=[],r=k(e.replace(ae,"$1"));return r[F]?i(function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(ye,be),function(t){return(t.textContent||t.innerText||_(t)).indexOf(e)>-1}}),lang:i(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ye,be).toLowerCase(),function(t){var n;do if(n=I?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===B},focus:function(e){return e===z.activeElement&&(!z.hasFocus||z.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return fe.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:d(function(){return[0]}),last:d(function(e,t){return[t-1]}),eq:d(function(e,t,n){return[0>n?n+t:n]}),even:d(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:d(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:d(function(e,t,n){for(var i=0>n?n+t:n;--i>=0;)e.push(i);return e}),gt:d(function(e,t,n){for(var i=0>n?n+t:n;++i<t;)e.push(i);return e})}},x.pseudos.nth=x.pseudos.eq;for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[y]=a(y);for(y in{submit:!0,reset:!0})x.pseudos[y]=l(y);return u.prototype=x.filters=x.pseudos,x.setFilters=new u,T=t.tokenize=function(e,n){var i,r,o,s,a,l,d,c=N[e+" "];if(c)return n?0:c.slice(0);for(a=e,l=[],d=x.preFilter;a;){(!i||(r=le.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),l.push(o=[])),i=!1,(r=de.exec(a))&&(i=r.shift(),o.push({value:i,type:r[0].replace(ae," ")}),a=a.slice(i.length));for(s in x.filter)!(r=Ae[s].exec(a))||d[s]&&!(r=d[s](r))||(i=r.shift(),o.push({value:i,type:s,matches:r}),a=a.slice(i.length));if(!i)break}return n?a.length:a?t.error(e):N(e,l).slice(0)},k=t.compile=function(e,t){var n,i=[],r=[],o=W[e+" "];if(!o){for(t||(t=T(e)),n=t.length;n--;)o=v(t[n]),o[F]?i.push(o):r.push(o);o=W(e,w(r,i)),o.selector=e}return o},C=t.select=function(e,t,n,i){var r,o,s,a,l,d="function"==typeof e&&e,u=!i&&T(e=d.selector||e);if(n=n||[],1===u.length){if(o=u[0]=u[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&b.getById&&9===t.nodeType&&I&&x.relative[o[1].type]){if(t=(x.find.ID(s.matches[0].replace(ye,be),t)||[])[0],!t)return n;d&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(r=Ae.needsContext.test(e)?0:o.length;r--&&(s=o[r],!x.relative[a=s.type]);)if((l=x.find[a])&&(i=l(s.matches[0].replace(ye,be),ve.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(r,1),e=i.length&&p(o),!e)return X.apply(n,i),n;break}}return(d||k(e,u))(i,t,!I,n,!t||ve.test(e)&&c(t.parentNode)||t),n},b.sortStable=F.split("").sort(U).join("")===F,b.detectDuplicates=!!P,M(),b.sortDetached=r(function(e){return 1&e.compareDocumentPosition(z.createElement("div"))}),r(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&r(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),r(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var i;return n?void 0:e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e);oe.find=ce,oe.expr=ce.selectors,oe.expr[":"]=oe.expr.pseudos,oe.uniqueSort=oe.unique=ce.uniqueSort,oe.text=ce.getText,oe.isXMLDoc=ce.isXML,oe.contains=ce.contains;var ue=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&oe(e).is(n))break;i.push(e)}return i},pe=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},Ae=oe.expr.match.needsContext,he=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,fe=/^.[^:#\[\.,]*$/;oe.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?oe.find.matchesSelector(i,e)?[i]:[]:oe.find.matches(e,oe.grep(t,function(e){return 1===e.nodeType}))},oe.fn.extend({find:function(e){var t,n=this.length,i=[],r=this;if("string"!=typeof e)return this.pushStack(oe(e).filter(function(){for(t=0;n>t;t++)if(oe.contains(r[t],this))return!0}));for(t=0;n>t;t++)oe.find(e,r[t],i);return i=this.pushStack(n>1?oe.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&Ae.test(e)?oe(e):e||[],!1).length}});var ge,me=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ve=oe.fn.init=function(e,t,n){var i,r;if(!e)return this;if(n=n||ge,"string"==typeof e){if(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:me.exec(e),!i||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof oe?t[0]:t,oe.merge(this,oe.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:Z,!0)),he.test(i[1])&&oe.isPlainObject(t))for(i in t)oe.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return r=Z.getElementById(i[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=Z,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):oe.isFunction(e)?void 0!==n.ready?n.ready(e):e(oe):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),oe.makeArray(e,this))};ve.prototype=oe.fn,ge=oe(Z);var we=/^(?:parents|prev(?:Until|All))/,ye={children:!0,contents:!0,next:!0,prev:!0};oe.fn.extend({has:function(e){var t=oe(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(oe.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,i=0,r=this.length,o=[],s=Ae.test(e)||"string"!=typeof e?oe(e,t||this.context):0;r>i;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&oe.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?oe.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?K.call(oe(e),this[0]):K.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(oe.uniqueSort(oe.merge(this.get(),oe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),oe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ue(e,"parentNode")},parentsUntil:function(e,t,n){return ue(e,"parentNode",n)},next:function(e){return r(e,"nextSibling")},prev:function(e){return r(e,"previousSibling")},nextAll:function(e){return ue(e,"nextSibling")},prevAll:function(e){return ue(e,"previousSibling")},nextUntil:function(e,t,n){return ue(e,"nextSibling",n)},prevUntil:function(e,t,n){return ue(e,"previousSibling",n)},siblings:function(e){return pe((e.parentNode||{}).firstChild,e)},children:function(e){return pe(e.firstChild)},contents:function(e){return e.contentDocument||oe.merge([],e.childNodes)}},function(e,t){oe.fn[e]=function(n,i){var r=oe.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=oe.filter(i,r)),this.length>1&&(ye[e]||oe.uniqueSort(r),we.test(e)&&r.reverse()),this.pushStack(r)}});var be=/\S+/g;oe.Callbacks=function(e){e="string"==typeof e?o(e):oe.extend({},e);var t,n,i,r,s=[],a=[],l=-1,d=function(){for(r=e.once,i=t=!0;a.length;l=-1)for(n=a.shift();++l<s.length;)s[l].apply(n[0],n[1])===!1&&e.stopOnFalse&&(l=s.length,n=!1);e.memory||(n=!1),t=!1,r&&(s=n?[]:"")},c={add:function(){return s&&(n&&!t&&(l=s.length-1,a.push(n)),function i(t){oe.each(t,function(t,n){oe.isFunction(n)?e.unique&&c.has(n)||s.push(n):n&&n.length&&"string"!==oe.type(n)&&i(n)})}(arguments),n&&!t&&d()),this},remove:function(){return oe.each(arguments,function(e,t){for(var n;(n=oe.inArray(t,s,n))>-1;)s.splice(n,1),l>=n&&l--}),this},has:function(e){return e?oe.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return r=a=[],s=n="",this},disabled:function(){return!s},lock:function(){return r=a=[],n||(s=n=""),this},locked:function(){return!!r},fireWith:function(e,n){return r||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||d()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},oe.extend({Deferred:function(e){var t=[["resolve","done",oe.Callbacks("once memory"),"resolved"],["reject","fail",oe.Callbacks("once memory"),"rejected"],["notify","progress",oe.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments;return oe.Deferred(function(n){oe.each(t,function(t,o){var s=oe.isFunction(e[t])&&e[t];r[o[1]](function(){var e=s&&s.apply(this,arguments);e&&oe.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===i?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?oe.extend(e,i):i}},r={};return i.pipe=i.then,oe.each(t,function(e,o){var s=o[2],a=o[3];i[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),r[o[0]]=function(){return r[o[0]+"With"](this===r?i:this,arguments),this},r[o[0]+"With"]=s.fireWith}),i.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,i,r=0,o=Y.call(arguments),s=o.length,a=1!==s||e&&oe.isFunction(e.promise)?s:0,l=1===a?e:oe.Deferred(),d=function(e,n,i){return function(r){n[e]=this,i[e]=arguments.length>1?Y.call(arguments):r,i===t?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(s>1)for(t=new Array(s),n=new Array(s),i=new Array(s);s>r;r++)o[r]&&oe.isFunction(o[r].promise)?o[r].promise().progress(d(r,n,t)).done(d(r,i,o)).fail(l.reject):--a;return a||l.resolveWith(i,o),l.promise()}});var xe;oe.fn.ready=function(e){return oe.ready.promise().done(e),this},oe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?oe.readyWait++:oe.ready(!0)},ready:function(e){(e===!0?--oe.readyWait:oe.isReady)||(oe.isReady=!0,e!==!0&&--oe.readyWait>0||(xe.resolveWith(Z,[oe]),oe.fn.triggerHandler&&(oe(Z).triggerHandler("ready"),oe(Z).off("ready"))))}}),oe.ready.promise=function(t){return xe||(xe=oe.Deferred(),"complete"===Z.readyState||"loading"!==Z.readyState&&!Z.documentElement.doScroll?e.setTimeout(oe.ready):(Z.addEventListener("DOMContentLoaded",s),e.addEventListener("load",s))),xe.promise(t)},oe.ready.promise();var _e=function(e,t,n,i,r,o,s){var a=0,l=e.length,d=null==n;if("object"===oe.type(n)){r=!0;for(a in n)_e(e,t,a,n[a],!0,o,s)}else if(void 0!==i&&(r=!0,oe.isFunction(i)||(s=!0),d&&(s?(t.call(e,i),t=null):(d=t,t=function(e,t,n){return d.call(oe(e),n)})),t))for(;l>a;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return r?e:d?t.call(e):l?t(e[0],n):o},Se=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};a.uid=1,a.prototype={register:function(e,t){var n=t||{};return e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,writable:!0,configurable:!0}),e[this.expando]},cache:function(e){if(!Se(e))return{};var t=e[this.expando];return t||(t={},Se(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[t]=n;else for(i in t)r[i]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var i;return void 0===t||t&&"string"==typeof t&&void 0===n?(i=this.get(e,t),void 0!==i?i:this.get(e,oe.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i,r,o=e[this.expando];if(void 0!==o){if(void 0===t)this.register(e);else{oe.isArray(t)?i=t.concat(t.map(oe.camelCase)):(r=oe.camelCase(t),t in o?i=[t,r]:(i=r,i=i in o?[i]:i.match(be)||[])),n=i.length;for(;n--;)delete o[i[n]]}(void 0===t||oe.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!oe.isEmptyObject(t)}};var Te=new a,ke=new a,Ce=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ee=/[A-Z]/g;oe.extend({hasData:function(e){return ke.hasData(e)||Te.hasData(e)},data:function(e,t,n){return ke.access(e,t,n)},removeData:function(e,t){ke.remove(e,t)},_data:function(e,t,n){return Te.access(e,t,n)},_removeData:function(e,t){Te.remove(e,t)}}),oe.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(r=ke.get(o),1===o.nodeType&&!Te.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=oe.camelCase(i.slice(5)),l(o,i,r[i])));Te.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each(function(){ke.set(this,e)}):_e(this,function(t){var n,i;if(o&&void 0===t){if(n=ke.get(o,e)||ke.get(o,e.replace(Ee,"-$&").toLowerCase()),void 0!==n)return n;if(i=oe.camelCase(e),n=ke.get(o,i),void 0!==n)return n;if(n=l(o,i,void 0),void 0!==n)return n}else i=oe.camelCase(e),this.each(function(){var n=ke.get(this,i);ke.set(this,i,t),e.indexOf("-")>-1&&void 0!==n&&ke.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ke.remove(this,e)})}}),oe.extend({queue:function(e,t,n){var i;return e?(t=(t||"fx")+"queue",i=Te.get(e,t),n&&(!i||oe.isArray(n)?i=Te.access(e,t,oe.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=oe.queue(e,t),i=n.length,r=n.shift(),o=oe._queueHooks(e,t),s=function(){oe.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,s,o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Te.get(e,n)||Te.access(e,n,{empty:oe.Callbacks("once memory").add(function(){Te.remove(e,[t+"queue",n])})})}}),oe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?oe.queue(this[0],e):void 0===t?this:this.each(function(){var n=oe.queue(this,e,t);oe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&oe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){oe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=oe.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=Te.get(o[s],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var De=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Pe=new RegExp("^(?:([+-])=|)("+De+")([a-z%]*)$","i"),Me=["Top","Right","Bottom","Left"],ze=function(e,t){return e=t||e,"none"===oe.css(e,"display")||!oe.contains(e.ownerDocument,e)},Be=/^(?:checkbox|radio)$/i,Ie=/<([\w:-]+)/,Qe=/^$|\/(?:java|ecma)script/i,qe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};qe.optgroup=qe.option,qe.tbody=qe.tfoot=qe.colgroup=qe.caption=qe.thead,qe.th=qe.td;var je=/<|&#?\w+;/;!function(){var e=Z.createDocumentFragment(),t=e.appendChild(Z.createElement("div")),n=Z.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),ie.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",ie.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Re=/^key/,Fe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,He=/^([^.]*)(?:\.(.+)|)/;oe.event={global:{},add:function(e,t,n,i,r){var o,s,a,l,d,c,u,p,A,h,f,g=Te.get(e);if(g)for(n.handler&&(o=n,n=o.handler,r=o.selector),n.guid||(n.guid=oe.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(t){return"undefined"!=typeof oe&&oe.event.triggered!==t.type?oe.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(be)||[""],d=t.length;d--;)a=He.exec(t[d])||[],A=f=a[1],h=(a[2]||"").split(".").sort(),A&&(u=oe.event.special[A]||{},A=(r?u.delegateType:u.bindType)||A,u=oe.event.special[A]||{},c=oe.extend({type:A,origType:f,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&oe.expr.match.needsContext.test(r),namespace:h.join(".")},o),(p=l[A])||(p=l[A]=[],p.delegateCount=0,u.setup&&u.setup.call(e,i,h,s)!==!1||e.addEventListener&&e.addEventListener(A,s)),u.add&&(u.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),r?p.splice(p.delegateCount++,0,c):p.push(c),oe.event.global[A]=!0)},remove:function(e,t,n,i,r){var o,s,a,l,d,c,u,p,A,h,f,g=Te.hasData(e)&&Te.get(e);if(g&&(l=g.events)){for(t=(t||"").match(be)||[""],d=t.length;d--;)if(a=He.exec(t[d])||[],A=f=a[1],h=(a[2]||"").split(".").sort(),A){for(u=oe.event.special[A]||{},A=(i?u.delegateType:u.bindType)||A,p=l[A]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!r&&f!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,u.remove&&u.remove.call(e,c));s&&!p.length&&(u.teardown&&u.teardown.call(e,h,g.handle)!==!1||oe.removeEvent(e,A,g.handle),delete l[A])}else for(A in l)oe.event.remove(e,A+t[d],n,i,!0);oe.isEmptyObject(l)&&Te.remove(e,"handle events")}},dispatch:function(e){e=oe.event.fix(e);var t,n,i,r,o,s=[],a=Y.call(arguments),l=(Te.get(this,"events")||{})[e.type]||[],d=oe.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!d.preDispatch||d.preDispatch.call(this,e)!==!1){for(s=oe.event.handlers.call(this,e,l),t=0;(r=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.rnamespace||e.rnamespace.test(o.namespace))&&(e.handleObj=o,
e.data=o.data,i=((oe.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,a),void 0!==i&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,o,s=[],a=t.delegateCount,l=e.target;if(a&&l.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(i=[],n=0;a>n;n++)o=t[n],r=o.selector+" ",void 0===i[r]&&(i[r]=o.needsContext?oe(r,this).index(l)>-1:oe.find(r,this,null,[l]).length),i[r]&&i.push(o);i.length&&s.push({elem:l,handlers:i})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||Z,i=n.documentElement,r=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[oe.expando])return e;var t,n,i,r=e.type,o=e,s=this.fixHooks[r];for(s||(this.fixHooks[r]=s=Fe.test(r)?this.mouseHooks:Re.test(r)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,e=new oe.Event(o),t=i.length;t--;)n=i[t],e[n]=o[n];return e.target||(e.target=Z),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==f()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===f()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&oe.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return oe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},oe.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},oe.Event=function(e,t){return this instanceof oe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?A:h):this.type=e,t&&oe.extend(this,t),this.timeStamp=e&&e.timeStamp||oe.now(),void(this[oe.expando]=!0)):new oe.Event(e,t)},oe.Event.prototype={constructor:oe.Event,isDefaultPrevented:h,isPropagationStopped:h,isImmediatePropagationStopped:h,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=A,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=A,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=A,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},oe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){oe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj;return(!r||r!==i&&!oe.contains(i,r))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),oe.fn.extend({on:function(e,t,n,i){return g(this,e,t,n,i)},one:function(e,t,n,i){return g(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,oe(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=h),this.each(function(){oe.event.remove(this,e,n,t)})}});var $e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Le=/<script|<style|<link/i,Oe=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^true\/(.*)/,We=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;oe.extend({htmlPrefilter:function(e){return e.replace($e,"<$1></$2>")},clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(!0),l=oe.contains(e.ownerDocument,e);if(!(ie.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||oe.isXMLDoc(e)))for(s=c(a),o=c(e),i=0,r=o.length;r>i;i++)b(o[i],s[i]);if(t)if(n)for(o=o||c(e),s=s||c(a),i=0,r=o.length;r>i;i++)y(o[i],s[i]);else y(e,a);return s=c(a,"script"),s.length>0&&u(s,!l&&c(e,"script")),a},cleanData:function(e){for(var t,n,i,r=oe.event.special,o=0;void 0!==(n=e[o]);o++)if(Se(n)){if(t=n[Te.expando]){if(t.events)for(i in t.events)r[i]?oe.event.remove(n,i):oe.removeEvent(n,i,t.handle);n[Te.expando]=void 0}n[ke.expando]&&(n[ke.expando]=void 0)}}}),oe.fn.extend({domManip:x,detach:function(e){return _(this,e,!0)},remove:function(e){return _(this,e)},text:function(e){return _e(this,function(e){return void 0===e?oe.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return x(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=m(this,e);t.appendChild(e)}})},prepend:function(){return x(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=m(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return x(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return x(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(oe.cleanData(c(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return oe.clone(this,e,t)})},html:function(e){return _e(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Le.test(e)&&!qe[(Ie.exec(e)||["",""])[1].toLowerCase()]){e=oe.htmlPrefilter(e);try{for(;i>n;n++)t=this[n]||{},1===t.nodeType&&(oe.cleanData(c(t,!1)),t.innerHTML=e);t=0}catch(r){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return x(this,arguments,function(t){var n=this.parentNode;oe.inArray(this,e)<0&&(oe.cleanData(c(this)),n&&n.replaceChild(t,this))},e)}}),oe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){oe.fn[e]=function(e){for(var n,i=[],r=oe(e),o=r.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),oe(r[s])[t](n),X.apply(i,n.get());return this.pushStack(i)}});var Ue,Ve={HTML:"block",BODY:"block"},Ge=/^margin/,Ze=new RegExp("^("+De+")(?!px)[a-z%]+$","i"),Ye=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Je=function(e,t,n,i){var r,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];r=n.apply(e,i||[]);for(o in t)e.style[o]=s[o];return r},Xe=Z.documentElement;!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",Xe.appendChild(s);var t=e.getComputedStyle(a);n="1%"!==t.top,o="2px"===t.marginLeft,i="4px"===t.width,a.style.marginRight="50%",r="4px"===t.marginRight,Xe.removeChild(s)}var n,i,r,o,s=Z.createElement("div"),a=Z.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",ie.clearCloneStyle="content-box"===a.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(a),oe.extend(ie,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==i&&t(),i},pixelMarginRight:function(){return null==i&&t(),r},reliableMarginLeft:function(){return null==i&&t(),o},reliableMarginRight:function(){var t,n=a.appendChild(Z.createElement("div"));return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",Xe.appendChild(s),t=!parseFloat(e.getComputedStyle(n).marginRight),Xe.removeChild(s),a.removeChild(n),t}}))}();var Ke=/^(none|table(?!-c[ea]).+)/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"},nt=["Webkit","O","Moz","ms"],it=Z.createElement("div").style;oe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=k(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,o,s,a=oe.camelCase(t),l=e.style;return t=oe.cssProps[a]||(oe.cssProps[a]=E(a)||a),s=oe.cssHooks[t]||oe.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(r=s.get(e,!1,i))?r:l[t]:(o=typeof n,"string"===o&&(r=Pe.exec(n))&&r[1]&&(n=d(e,t,r),o="number"),null!=n&&n===n&&("number"===o&&(n+=r&&r[3]||(oe.cssNumber[a]?"":"px")),ie.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l[t]=n)),void 0)}},css:function(e,t,n,i){var r,o,s,a=oe.camelCase(t);return t=oe.cssProps[a]||(oe.cssProps[a]=E(a)||a),s=oe.cssHooks[t]||oe.cssHooks[a],s&&"get"in s&&(r=s.get(e,!0,n)),void 0===r&&(r=k(e,t,i)),"normal"===r&&t in tt&&(r=tt[t]),""===n||n?(o=parseFloat(r),n===!0||isFinite(o)?o||0:r):r}}),oe.each(["height","width"],function(e,t){oe.cssHooks[t]={get:function(e,n,i){return n?Ke.test(oe.css(e,"display"))&&0===e.offsetWidth?Je(e,et,function(){return M(e,t,i)}):M(e,t,i):void 0},set:function(e,n,i){var r,o=i&&Ye(e),s=i&&P(e,t,i,"border-box"===oe.css(e,"boxSizing",!1,o),o);return s&&(r=Pe.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=oe.css(e,t)),D(e,n,s)}}}),oe.cssHooks.marginLeft=C(ie.reliableMarginLeft,function(e,t){return t?(parseFloat(k(e,"marginLeft"))||e.getBoundingClientRect().left-Je(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px":void 0}),oe.cssHooks.marginRight=C(ie.reliableMarginRight,function(e,t){return t?Je(e,{display:"inline-block"},k,[e,"marginRight"]):void 0}),oe.each({margin:"",padding:"",border:"Width"},function(e,t){oe.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];4>i;i++)r[e+Me[i]+t]=o[i]||o[i-2]||o[0];return r}},Ge.test(e)||(oe.cssHooks[e+t].set=D)}),oe.fn.extend({css:function(e,t){return _e(this,function(e,t,n){var i,r,o={},s=0;if(oe.isArray(t)){for(i=Ye(e),r=t.length;r>s;s++)o[t[s]]=oe.css(e,t[s],!1,i);return o}return void 0!==n?oe.style(e,t,n):oe.css(e,t)},e,t,arguments.length>1)},show:function(){return z(this,!0)},hide:function(){return z(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ze(this)?oe(this).show():oe(this).hide()})}}),oe.Tween=B,B.prototype={constructor:B,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||oe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(oe.cssNumber[n]?"":"px")},cur:function(){var e=B.propHooks[this.prop];return e&&e.get?e.get(this):B.propHooks._default.get(this)},run:function(e){var t,n=B.propHooks[this.prop];return this.options.duration?this.pos=t=oe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):B.propHooks._default.set(this),this}},B.prototype.init.prototype=B.prototype,B.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=oe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){oe.fx.step[e.prop]?oe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[oe.cssProps[e.prop]]&&!oe.cssHooks[e.prop]?e.elem[e.prop]=e.now:oe.style(e.elem,e.prop,e.now+e.unit)}}},B.propHooks.scrollTop=B.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},oe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},oe.fx=B.prototype.init,oe.fx.step={};var rt,ot,st=/^(?:toggle|show|hide)$/,at=/queueHooks$/;oe.Animation=oe.extend(F,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return d(n.elem,e,Pe.exec(t),n),n}]},tweener:function(e,t){oe.isFunction(e)?(t=e,e=["*"]):e=e.match(be);for(var n,i=0,r=e.length;r>i;i++)n=e[i],F.tweeners[n]=F.tweeners[n]||[],F.tweeners[n].unshift(t)},prefilters:[j],prefilter:function(e,t){t?F.prefilters.unshift(e):F.prefilters.push(e)}}),oe.speed=function(e,t,n){var i=e&&"object"==typeof e?oe.extend({},e):{complete:n||!n&&t||oe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!oe.isFunction(t)&&t};return i.duration=oe.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in oe.fx.speeds?oe.fx.speeds[i.duration]:oe.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){oe.isFunction(i.old)&&i.old.call(this),i.queue&&oe.dequeue(this,i.queue)},i},oe.fn.extend({fadeTo:function(e,t,n,i){return this.filter(ze).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=oe.isEmptyObject(e),o=oe.speed(t,n,i),s=function(){var t=F(this,oe.extend({},e),o);(r||Te.get(this,"finish"))&&t.stop(!0)};return s.finish=s,r||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=oe.timers,s=Te.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&at.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));(t||!n)&&oe.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Te.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=oe.timers,s=i?i.length:0;for(n.finish=!0,oe.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),oe.each(["toggle","show","hide"],function(e,t){var n=oe.fn[t];oe.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Q(t,!0),e,i,r)}}),oe.each({slideDown:Q("show"),slideUp:Q("hide"),slideToggle:Q("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){oe.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),oe.timers=[],oe.fx.tick=function(){var e,t=0,n=oe.timers;for(rt=oe.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||oe.fx.stop(),rt=void 0},oe.fx.timer=function(e){oe.timers.push(e),e()?oe.fx.start():oe.timers.pop()},oe.fx.interval=13,oe.fx.start=function(){ot||(ot=e.setInterval(oe.fx.tick,oe.fx.interval))},oe.fx.stop=function(){e.clearInterval(ot),ot=null},oe.fx.speeds={slow:600,fast:200,_default:400},oe.fn.delay=function(t,n){return t=oe.fx?oe.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,i){var r=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(r)}})},function(){var e=Z.createElement("input"),t=Z.createElement("select"),n=t.appendChild(Z.createElement("option"));e.type="checkbox",ie.checkOn=""!==e.value,ie.optSelected=n.selected,t.disabled=!0,ie.optDisabled=!n.disabled,e=Z.createElement("input"),e.value="t",e.type="radio",ie.radioValue="t"===e.value}();var lt,dt=oe.expr.attrHandle;oe.fn.extend({attr:function(e,t){return _e(this,oe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){oe.removeAttr(this,e)})}}),oe.extend({attr:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?oe.prop(e,t,n):(1===o&&oe.isXMLDoc(e)||(t=t.toLowerCase(),r=oe.attrHooks[t]||(oe.expr.match.bool.test(t)?lt:void 0)),void 0!==n?null===n?void oe.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=oe.find.attr(e,t),null==i?void 0:i))},attrHooks:{type:{set:function(e,t){if(!ie.radioValue&&"radio"===t&&oe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i,r=0,o=t&&t.match(be);if(o&&1===e.nodeType)for(;n=o[r++];)i=oe.propFix[n]||n,oe.expr.match.bool.test(n)&&(e[i]=!1),e.removeAttribute(n)}}),lt={set:function(e,t,n){return t===!1?oe.removeAttr(e,n):e.setAttribute(n,n),n}},oe.each(oe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=dt[t]||oe.find.attr;dt[t]=function(e,t,i){var r,o;return i||(o=dt[t],dt[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,dt[t]=o),r}});var ct=/^(?:input|select|textarea|button)$/i,ut=/^(?:a|area)$/i;oe.fn.extend({prop:function(e,t){return _e(this,oe.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[oe.propFix[e]||e]})}}),oe.extend({prop:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&oe.isXMLDoc(e)||(t=oe.propFix[t]||t,r=oe.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=oe.find.attr(e,"tabindex");return t?parseInt(t,10):ct.test(e.nodeName)||ut.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),ie.optSelected||(oe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),oe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){oe.propFix[this.toLowerCase()]=this});var pt=/[\t\r\n\f]/g;oe.fn.extend({addClass:function(e){var t,n,i,r,o,s,a,l=0;if(oe.isFunction(e))return this.each(function(t){oe(this).addClass(e.call(this,t,H(this)))});if("string"==typeof e&&e)for(t=e.match(be)||[];n=this[l++];)if(r=H(n),i=1===n.nodeType&&(" "+r+" ").replace(pt," ")){for(s=0;o=t[s++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");a=oe.trim(i),r!==a&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,r,o,s,a,l=0;if(oe.isFunction(e))return this.each(function(t){oe(this).removeClass(e.call(this,t,H(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(be)||[];n=this[l++];)if(r=H(n),i=1===n.nodeType&&(" "+r+" ").replace(pt," ")){for(s=0;o=t[s++];)for(;i.indexOf(" "+o+" ")>-1;)i=i.replace(" "+o+" "," ");a=oe.trim(i),r!==a&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):oe.isFunction(e)?this.each(function(n){oe(this).toggleClass(e.call(this,n,H(this),t),t)}):this.each(function(){var t,i,r,o;if("string"===n)for(i=0,r=oe(this),o=e.match(be)||[];t=o[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else(void 0===e||"boolean"===n)&&(t=H(this),t&&Te.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Te.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+H(n)+" ").replace(pt," ").indexOf(t)>-1)return!0;return!1}});var At=/\r/g,ht=/[\x20\t\r\n\f]+/g;oe.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=oe.isFunction(e),this.each(function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,oe(this).val()):e,null==r?r="":"number"==typeof r?r+="":oe.isArray(r)&&(r=oe.map(r,function(e){return null==e?"":e+""})),t=oe.valHooks[this.type]||oe.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))});if(r)return t=oe.valHooks[r.type]||oe.valHooks[r.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(At,""):null==n?"":n)}}}),oe.extend({valHooks:{option:{get:function(e){var t=oe.find.attr(e,"value");return null!=t?t:oe.trim(oe.text(e)).replace(ht," ")}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,o="select-one"===e.type||0>r,s=o?null:[],a=o?r+1:i.length,l=0>r?a:o?r:0;a>l;l++)if(n=i[l],(n.selected||l===r)&&(ie.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!oe.nodeName(n.parentNode,"optgroup"))){if(t=oe(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,i,r=e.options,o=oe.makeArray(t),s=r.length;s--;)i=r[s],(i.selected=oe.inArray(oe.valHooks.option.get(i),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),oe.each(["radio","checkbox"],function(){oe.valHooks[this]={set:function(e,t){return oe.isArray(t)?e.checked=oe.inArray(oe(e).val(),t)>-1:void 0}},ie.checkOn||(oe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var ft=/^(?:focusinfocus|focusoutblur)$/;oe.extend(oe.event,{trigger:function(t,n,i,r){var o,s,a,l,d,c,u,p=[i||Z],A=ne.call(t,"type")?t.type:t,h=ne.call(t,"namespace")?t.namespace.split("."):[];if(s=a=i=i||Z,3!==i.nodeType&&8!==i.nodeType&&!ft.test(A+oe.event.triggered)&&(A.indexOf(".")>-1&&(h=A.split("."),A=h.shift(),h.sort()),d=A.indexOf(":")<0&&"on"+A,t=t[oe.expando]?t:new oe.Event(A,"object"==typeof t&&t),t.isTrigger=r?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:oe.makeArray(n,[t]),u=oe.event.special[A]||{},r||!u.trigger||u.trigger.apply(i,n)!==!1)){if(!r&&!u.noBubble&&!oe.isWindow(i)){for(l=u.delegateType||A,ft.test(l+A)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;a===(i.ownerDocument||Z)&&p.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=p[o++])&&!t.isPropagationStopped();)t.type=o>1?l:u.bindType||A,c=(Te.get(s,"events")||{})[t.type]&&Te.get(s,"handle"),c&&c.apply(s,n),c=d&&s[d],c&&c.apply&&Se(s)&&(t.result=c.apply(s,n),t.result===!1&&t.preventDefault());return t.type=A,r||t.isDefaultPrevented()||u._default&&u._default.apply(p.pop(),n)!==!1||!Se(i)||d&&oe.isFunction(i[A])&&!oe.isWindow(i)&&(a=i[d],a&&(i[d]=null),oe.event.triggered=A,i[A](),oe.event.triggered=void 0,a&&(i[d]=a)),t.result}},simulate:function(e,t,n){var i=oe.extend(new oe.Event,n,{type:e,isSimulated:!0});oe.event.trigger(i,null,t)}}),oe.fn.extend({trigger:function(e,t){return this.each(function(){oe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?oe.event.trigger(e,t,n,!0):void 0}}),oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){oe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),oe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ie.focusin="onfocusin"in e,ie.focusin||oe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){oe.event.simulate(t,e.target,oe.event.fix(e))};oe.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=Te.access(i,t);r||i.addEventListener(e,n,!0),Te.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=Te.access(i,t)-1;r?Te.access(i,t,r):(i.removeEventListener(e,n,!0),Te.remove(i,t))}}});var gt=e.location,mt=oe.now(),vt=/\?/;oe.parseJSON=function(e){return JSON.parse(e+"")},oe.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(i){n=void 0}return(!n||n.getElementsByTagName("parsererror").length)&&oe.error("Invalid XML: "+t),n};var wt=/#.*$/,yt=/([?&])_=[^&]*/,bt=/^(.*?):[ \t]*([^\r\n]*)$/gm,xt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,_t=/^(?:GET|HEAD)$/,St=/^\/\//,Tt={},kt={},Ct="*/".concat("*"),Et=Z.createElement("a");Et.href=gt.href,oe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:gt.href,type:"GET",isLocal:xt.test(gt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ct,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":oe.parseJSON,"text xml":oe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?O(O(e,oe.ajaxSettings),t):O(oe.ajaxSettings,e)},ajaxPrefilter:$(Tt),ajaxTransport:$(kt),ajax:function(t,n){function i(t,n,i,a){var d,u,v,w,b,_=n;2!==y&&(y=2,l&&e.clearTimeout(l),r=void 0,s=a||"",x.readyState=t>0?4:0,d=t>=200&&300>t||304===t,i&&(w=N(p,x,i)),w=W(p,w,x,d),d?(p.ifModified&&(b=x.getResponseHeader("Last-Modified"),b&&(oe.lastModified[o]=b),b=x.getResponseHeader("etag"),b&&(oe.etag[o]=b)),204===t||"HEAD"===p.type?_="nocontent":304===t?_="notmodified":(_=w.state,u=w.data,v=w.error,d=!v)):(v=_,(t||!_)&&(_="error",0>t&&(t=0))),x.status=t,x.statusText=(n||_)+"",d?f.resolveWith(A,[u,_,x]):f.rejectWith(A,[x,_,v]),x.statusCode(m),m=void 0,c&&h.trigger(d?"ajaxSuccess":"ajaxError",[x,p,d?u:v]),g.fireWith(A,[x,_]),c&&(h.trigger("ajaxComplete",[x,p]),--oe.active||oe.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,o,s,a,l,d,c,u,p=oe.ajaxSetup({},n),A=p.context||p,h=p.context&&(A.nodeType||A.jquery)?oe(A):oe.event,f=oe.Deferred(),g=oe.Callbacks("once memory"),m=p.statusCode||{},v={},w={},y=0,b="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(2===y){if(!a)for(a={};t=bt.exec(s);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===y?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return y||(e=w[n]=w[n]||e,v[e]=t),this},overrideMimeType:function(e){return y||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>y)for(t in e)m[t]=[m[t],e[t]];else x.always(e[x.status]);return this},abort:function(e){var t=e||b;return r&&r.abort(t),i(0,t),this}};if(f.promise(x).complete=g.add,x.success=x.done,x.error=x.fail,p.url=((t||p.url||gt.href)+"").replace(wt,"").replace(St,gt.protocol+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=oe.trim(p.dataType||"*").toLowerCase().match(be)||[""],null==p.crossDomain){d=Z.createElement("a");try{d.href=p.url,d.href=d.href,p.crossDomain=Et.protocol+"//"+Et.host!=d.protocol+"//"+d.host}catch(_){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=oe.param(p.data,p.traditional)),L(Tt,p,n,x),2===y)return x;c=oe.event&&p.global,c&&0===oe.active++&&oe.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!_t.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(vt.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=yt.test(o)?o.replace(yt,"$1_="+mt++):o+(vt.test(o)?"&":"?")+"_="+mt++)),p.ifModified&&(oe.lastModified[o]&&x.setRequestHeader("If-Modified-Since",oe.lastModified[o]),oe.etag[o]&&x.setRequestHeader("If-None-Match",oe.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",p.contentType),x.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Ct+"; q=0.01":""):p.accepts["*"]);for(u in p.headers)x.setRequestHeader(u,p.headers[u]);if(p.beforeSend&&(p.beforeSend.call(A,x,p)===!1||2===y))return x.abort();b="abort";for(u in{success:1,error:1,complete:1})x[u](p[u]);if(r=L(kt,p,n,x)){if(x.readyState=1,c&&h.trigger("ajaxSend",[x,p]),2===y)return x;p.async&&p.timeout>0&&(l=e.setTimeout(function(){x.abort("timeout")},p.timeout));try{y=1,r.send(v,i)}catch(_){if(!(2>y))throw _;i(-1,_)}}else i(-1,"No Transport");return x},getJSON:function(e,t,n){return oe.get(e,t,n,"json")},getScript:function(e,t){return oe.get(e,void 0,t,"script")}}),oe.each(["get","post"],function(e,t){oe[t]=function(e,n,i,r){return oe.isFunction(n)&&(r=r||i,i=n,n=void 0),oe.ajax(oe.extend({url:e,type:t,dataType:r,data:n,success:i},oe.isPlainObject(e)&&e))}}),oe._evalUrl=function(e){return oe.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},oe.fn.extend({wrapAll:function(e){var t;return oe.isFunction(e)?this.each(function(t){oe(this).wrapAll(e.call(this,t))}):(this[0]&&(t=oe(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return oe.isFunction(e)?this.each(function(t){oe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=oe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=oe.isFunction(e);return this.each(function(n){oe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){oe.nodeName(this,"body")||oe(this).replaceWith(this.childNodes)}).end()}}),oe.expr.filters.hidden=function(e){return!oe.expr.filters.visible(e)},oe.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0};var Dt=/%20/g,Pt=/\[\]$/,Mt=/\r?\n/g,zt=/^(?:submit|button|image|reset|file)$/i,Bt=/^(?:input|select|textarea|keygen)/i;oe.param=function(e,t){var n,i=[],r=function(e,t){t=oe.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=oe.ajaxSettings&&oe.ajaxSettings.traditional),oe.isArray(e)||e.jquery&&!oe.isPlainObject(e))oe.each(e,function(){r(this.name,this.value)});else for(n in e)U(n,e[n],t,r);return i.join("&").replace(Dt,"+")},oe.fn.extend({serialize:function(){return oe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=oe.prop(this,"elements");return e?oe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!oe(this).is(":disabled")&&Bt.test(this.nodeName)&&!zt.test(e)&&(this.checked||!Be.test(e))}).map(function(e,t){var n=oe(this).val();return null==n?null:oe.isArray(n)?oe.map(n,function(e){return{name:t.name,value:e.replace(Mt,"\r\n")}}):{name:t.name,value:n.replace(Mt,"\r\n")}}).get()}}),oe.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(t){}};var It={0:200,1223:204},Qt=oe.ajaxSettings.xhr();ie.cors=!!Qt&&"withCredentials"in Qt,ie.ajax=Qt=!!Qt,oe.ajaxTransport(function(t){var n,i;return ie.cors||Qt&&!t.crossDomain?{send:function(r,o){var s,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");for(s in r)a.setRequestHeader(s,r[s]);n=function(e){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(It[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),i=a.onerror=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){n&&i()})},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(l){if(n)throw l}},abort:function(){n&&n()}}:void 0}),oe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return oe.globalEval(e),e}}}),oe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),oe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,r){t=oe("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),Z.head.appendChild(t[0])},abort:function(){n&&n()}}}});var qt=[],jt=/(=)\?(?=&|$)|\?\?/;oe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=qt.pop()||oe.expando+"_"+mt++;
return this[e]=!0,e}}),oe.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,s,a=t.jsonp!==!1&&(jt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&jt.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(r=t.jsonpCallback=oe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(jt,"$1"+r):t.jsonp!==!1&&(t.url+=(vt.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return s||oe.error(r+" was not called"),s[0]},t.dataTypes[0]="json",o=e[r],e[r]=function(){s=arguments},i.always(function(){void 0===o?oe(e).removeProp(r):e[r]=o,t[r]&&(t.jsonpCallback=n.jsonpCallback,qt.push(r)),s&&oe.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),oe.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||Z;var i=he.exec(e),r=!n&&[];return i?[t.createElement(i[1])]:(i=p([e],t,r),r&&r.length&&oe(r).remove(),oe.merge([],i.childNodes))};var Rt=oe.fn.load;oe.fn.load=function(e,t,n){if("string"!=typeof e&&Rt)return Rt.apply(this,arguments);var i,r,o,s=this,a=e.indexOf(" ");return a>-1&&(i=oe.trim(e.slice(a)),e=e.slice(0,a)),oe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),s.length>0&&oe.ajax({url:e,type:r||"GET",dataType:"html",data:t}).done(function(e){o=arguments,s.html(i?oe("<div>").append(oe.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},oe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){oe.fn[t]=function(e){return this.on(t,e)}}),oe.expr.filters.animated=function(e){return oe.grep(oe.timers,function(t){return e===t.elem}).length},oe.offset={setOffset:function(e,t,n){var i,r,o,s,a,l,d,c=oe.css(e,"position"),u=oe(e),p={};"static"===c&&(e.style.position="relative"),a=u.offset(),o=oe.css(e,"top"),l=oe.css(e,"left"),d=("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1,d?(i=u.position(),s=i.top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(l)||0),oe.isFunction(t)&&(t=t.call(e,n,oe.extend({},a))),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+r),"using"in t?t.using.call(e,p):u.css(p)}},oe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){oe.offset.setOffset(this,e,t)});var t,n,i=this[0],r={top:0,left:0},o=i&&i.ownerDocument;if(o)return t=o.documentElement,oe.contains(t,i)?(r=i.getBoundingClientRect(),n=V(o),{top:r.top+n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}):r},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0};return"fixed"===oe.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),oe.nodeName(e[0],"html")||(i=e.offset()),i.top+=oe.css(e[0],"borderTopWidth",!0),i.left+=oe.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-oe.css(n,"marginTop",!0),left:t.left-i.left-oe.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===oe.css(e,"position");)e=e.offsetParent;return e||Xe})}}),oe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;oe.fn[e]=function(i){return _e(this,function(e,i,r){var o=V(e);return void 0===r?o?o[t]:e[i]:void(o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r)},e,i,arguments.length)}}),oe.each(["top","left"],function(e,t){oe.cssHooks[t]=C(ie.pixelPosition,function(e,n){return n?(n=k(e,t),Ze.test(n)?oe(e).position()[t]+"px":n):void 0})}),oe.each({Height:"height",Width:"width"},function(e,t){oe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){oe.fn[i]=function(i,r){var o=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||r===!0?"margin":"border");return _e(this,function(t,n,i){var r;return oe.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===i?oe.css(t,n,s):oe.style(t,n,i,s)},t,o?i:void 0,o,null)}})}),oe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},size:function(){return this.length}}),oe.fn.andSelf=oe.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return oe});var Ft=e.jQuery,Ht=e.$;return oe.noConflict=function(t){return e.$===oe&&(e.$=Ht),t&&e.jQuery===oe&&(e.jQuery=Ft),oe},t||(e.jQuery=e.$=oe),oe}),/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2015, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
function(e,t,n,i){"use strict";function r(e){return("string"==typeof e||e instanceof String)&&(e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),e}function o(e){this.selector=e,this.query=""}var s=function(t){var n=e("head");n.prepend(e.map(t,function(e){return 0===n.has("."+e).length?'<meta class="'+e+'" />':void 0}))};s(["foundation-mq-small","foundation-mq-small-only","foundation-mq-medium","foundation-mq-medium-only","foundation-mq-large","foundation-mq-large-only","foundation-mq-xlarge","foundation-mq-xlarge-only","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),e(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var a=function(t,i){if("string"==typeof t){if(i){var r;if(i.jquery){if(r=i[0],!r)return i}else r=i;return e(r.querySelectorAll(t))}return e(n.querySelectorAll(t))}return e(t,i)},l=function(e){var t=[];return e||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},d=function(e){for(var t=e.split("-"),n=t.length,i=[];n--;)0!==n?i.push(t[n]):this.namespace.length>0?i.push(this.namespace,t[n]):i.push(t[n]);return i.reverse().join("-")},c=function(t,n){var i=this,r=function(){var r=a(this),o=!r.data(i.attr_name(!0)+"-init");r.data(i.attr_name(!0)+"-init",e.extend({},i.settings,n||t,i.data_options(r))),o&&i.events(this)};return a(this.scope).is("["+this.attr_name()+"]")?r.call(this.scope):a("["+this.attr_name()+"]",this.scope).each(r),"string"==typeof t?this[t].call(this,n):void 0},u=function(e,t){function n(){t(e[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+t)}}return e.attr("src")?void(e[0].complete||4===e[0].readyState?n():i.call(e)):void n()};/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
t.matchMedia||(t.matchMedia=function(){var e=t.styleMedia||t.media;if(!e){var i=n.createElement("style"),r=n.getElementsByTagName("script")[0],o=null;i.type="text/css",i.id="matchmediajs-test",r.parentNode.insertBefore(i,r),o="getComputedStyle"in t&&t.getComputedStyle(i,null)||i.currentStyle,e={matchMedium:function(e){var t="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return i.styleSheet?i.styleSheet.cssText=t:i.textContent=t,"1px"===o.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(e){function n(){i&&(s(n),l&&e.fx.tick())}for(var i,r=0,o=["webkit","moz"],s=t.requestAnimationFrame,a=t.cancelAnimationFrame,l="undefined"!=typeof e.fx;r<o.length&&!s;r++)s=t[o[r]+"RequestAnimationFrame"],a=a||t[o[r]+"CancelAnimationFrame"]||t[o[r]+"CancelRequestAnimationFrame"];s?(t.requestAnimationFrame=s,t.cancelAnimationFrame=a,l&&(e.fx.timer=function(t){t()&&e.timers.push(t)&&!i&&(i=!0,n())},e.fx.stop=function(){i=!1})):(t.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-r)),o=t.setTimeout(function(){e(n+i)},i);return r=n+i,o},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(e),o.prototype.toString=function(){return this.query||(this.query=a(this.selector).css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""))},t.Foundation={name:"Foundation",version:"5.5.3",media_queries:{small:new o(".foundation-mq-small"),"small-only":new o(".foundation-mq-small-only"),medium:new o(".foundation-mq-medium"),"medium-only":new o(".foundation-mq-medium-only"),large:new o(".foundation-mq-large"),"large-only":new o(".foundation-mq-large-only"),xlarge:new o(".foundation-mq-xlarge"),"xlarge-only":new o(".foundation-mq-xlarge-only"),xxlarge:new o(".foundation-mq-xxlarge")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:i},init:function(e,n,i,r,o){var s=[e,i,r,o],l=[];if(this.rtl=/rtl/i.test(a("html").attr("dir")),this.scope=e||this.scope,this.set_namespace(),n&&"string"==typeof n&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&l.push(this.init_lib(n,s));else for(var d in this.libs)l.push(this.init_lib(d,n));return a(t).load(function(){a(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),e},init_lib:function(t,n){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),n&&n.hasOwnProperty(t)?("undefined"!=typeof this.libs[t].settings?e.extend(!0,this.libs[t].settings,n[t]):"undefined"!=typeof this.libs[t].defaults&&e.extend(!0,this.libs[t].defaults,n[t]),this.libs[t].init.apply(this.libs[t],[this.scope,n[t]])):(n=n instanceof Array?n:new Array(n),this.libs[t].init.apply(this.libs[t],n))):function(){}},patch:function(e){e.scope=this.scope,e.namespace=this.global.namespace,e.rtl=this.rtl,e.data_options=this.utils.data_options,e.attr_name=l,e.add_namespace=d,e.bindings=c,e.S=this.utils.S},inherit:function(e,t){for(var n=t.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(e[n[i]]=this.utils[n[i]])},set_namespace:function(){var t=this.global.namespace===i?e(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===i||/false/i.test(t)?"":t},libs:{},utils:{S:a,throttle:function(e,t){var n=null;return function(){var i=this,r=arguments;null==n&&(n=setTimeout(function(){e.apply(i,r),n=null},t))}},debounce:function(e,t,n){var i,r;return function(){var o=this,s=arguments,a=function(){i=null,n||(r=e.apply(o,s))},l=n&&!i;return clearTimeout(i),i=setTimeout(a,t),l&&(r=e.apply(o,s)),r}},data_options:function(t,n){function i(e){return!isNaN(e-0)&&null!==e&&""!==e&&e!==!1&&e!==!0}function r(t){return"string"==typeof t?e.trim(t):t}n=n||"options";var o,s,a,l={},d=function(e){var t=Foundation.global.namespace;return t.length>0?e.data(t+"-"+n):e.data(n)},c=d(t);if("object"==typeof c)return c;for(a=(c||":").split(";"),o=a.length;o--;)s=a[o].split(":"),s=[s[0],s.slice(1).join(":")],/true/i.test(s[1])&&(s[1]=!0),/false/i.test(s[1])&&(s[1]=!1),i(s[1])&&(-1===s[1].indexOf(".")?s[1]=parseInt(s[1],10):s[1]=parseFloat(s[1])),2===s.length&&s[0].length>0&&(l[r(s[0])]=r(s[1]));return l},register_media:function(t,n){Foundation.media_queries[t]===i&&(e("head").append('<meta class="'+n+'"/>'),Foundation.media_queries[t]=r(e("."+n).css("font-family")))},add_custom_rule:function(e,t){if(t===i&&Foundation.stylesheet)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[t];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }",Foundation.stylesheet.cssRules.length)}},image_loaded:function(e,t){function n(e){for(var t=e.length,n=t-1;n>=0;n--)if(e.attr("height")===i)return!1;return!0}var r=this,o=e.length;(0===o||n(e))&&t(e),e.each(function(){u(r.S(this),function(){o-=1,0===o&&t(e)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)},match:function(e){return t.matchMedia(e).matches},is_small_up:function(){return this.match(Foundation.media_queries.small)},is_medium_up:function(){return this.match(Foundation.media_queries.medium)},is_large_up:function(){return this.match(Foundation.media_queries.large)},is_xlarge_up:function(){return this.match(Foundation.media_queries.xlarge)},is_xxlarge_up:function(){return this.match(Foundation.media_queries.xxlarge)},is_small_only:function(){return!(this.is_medium_up()||this.is_large_up()||this.is_xlarge_up()||this.is_xxlarge_up())},is_medium_only:function(){return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_large_only:function(){return this.is_medium_up()&&this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xxlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&this.is_xxlarge_up()}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.abide={name:"abide",version:"5.5.3",settings:{live_validate:!0,validate_on_blur:!0,focus_on_invalid:!0,error_labels:!0,error_class:"error",timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(e,t,i){var r=n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,o=e.value,s=r===o;return s}}},timer:null,init:function(e,t,n){this.bindings(t,n)},events:function(t){function n(e,t){clearTimeout(i.timer),i.timer=setTimeout(function(){i.validate([e],t)}.bind(e),o.timeout)}var i=this,r=i.S(t).attr("novalidate","novalidate"),o=r.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),r.off(".abide").on("submit.fndtn.abide",function(e){var t=/ajax/i.test(i.S(this).attr(i.attr_name()));return i.validate(i.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(),e,t)}).on("validate.fndtn.abide",function(e){"manual"===o.validate_on&&i.validate([e.target],e)}).on("reset",function(t){return i.reset(e(this),t)}).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(e){var t=this.getAttribute("id"),i=r.find('[data-equalto="'+t+'"]');o.validate_on_blur&&o.validate_on_blur===!0&&n(this,e),"undefined"!=typeof i.get(0)&&i.val().length&&n(i.get(0),e),"change"===o.validate_on&&n(this,e)}).on("keydown.fndtn.abide",function(e){var t=this.getAttribute("id"),i=r.find('[data-equalto="'+t+'"]');o.live_validate&&o.live_validate===!0&&9!=e.which&&n(this,e),"undefined"!=typeof i.get(0)&&i.val().length&&n(i.get(0),e),"tab"===o.validate_on&&9===e.which?n(this,e):"change"===o.validate_on&&n(this,e)}).on("focus",function(t){navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i)&&e("html, body").animate({scrollTop:e(t.target).offset().top},100)})},reset:function(t,n){var i=this;t.removeAttr(i.invalid_attr),e("["+i.invalid_attr+"]",t).removeAttr(i.invalid_attr),e("."+i.settings.error_class,t).not("small").removeClass(i.settings.error_class),e(":input",t).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(i.invalid_attr)},validate:function(e,t,n){for(var i=this.parse_patterns(e),r=i.length,o=this.S(e[0]).closest("form"),s=/submit/.test(t.type),a=0;r>a;a++)if(!i[a]&&(s||n))return this.settings.focus_on_invalid&&e[a].focus(),o.trigger("invalid.fndtn.abide"),this.S(e[a]).closest("form").attr(this.invalid_attr,""),!1;return(s||n)&&o.trigger("valid.fndtn.abide"),o.removeAttr(this.invalid_attr),n?!1:!0},parse_patterns:function(e){for(var t=e.length,n=[];t--;)n.push(this.pattern(e[t]));return this.check_validation_and_apply_styles(n)},pattern:function(e){var t=e.getAttribute("type"),n="string"==typeof e.getAttribute("required"),i=e.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(i)&&i.length>0?[e,this.settings.patterns[i],n]:i.length>0?[e,new RegExp(i),n]:this.settings.patterns.hasOwnProperty(t)?[e,this.settings.patterns[t],n]:(i=/.*/,[e,i,n])},check_validation_and_apply_styles:function(t){var n=t.length,i=[];if(0==n)return i;var r=this.S(t[0][0]).closest("[data-"+this.attr_name(!0)+"]");for(r.data(this.attr_name(!0)+"-init")||{};n--;){var o,s,a=t[n][0],l=t[n][2],d=a.value.trim(),c=this.S(a).parent(),u=a.getAttribute(this.add_namespace("data-abide-validator")),p="radio"===a.type,A="checkbox"===a.type,h=this.S('label[for="'+a.getAttribute("id")+'"]'),f=l?a.value.length>0:!0,g=[];if(a.getAttribute(this.add_namespace("data-equalto"))&&(u="equalTo"),o=c.is("label")?c.parent():c,p&&l)g.push(this.valid_radio(a,l));else if(A&&l)g.push(this.valid_checkbox(a,l));else if(u){for(var m=u.split(" "),v=!0,w=!0,y=0;y<m.length;y++)s=this.settings.validators[m[y]].apply(this,[a,l,o]),g.push(s),w=s&&v,v=s;w?(this.S(a).removeAttr(this.invalid_attr),o.removeClass("error"),h.length>0&&this.settings.error_labels&&h.removeClass(this.settings.error_class).removeAttr("role"),e(a).triggerHandler("valid")):(this.S(a).attr(this.invalid_attr,""),o.addClass("error"),h.length>0&&this.settings.error_labels&&h.addClass(this.settings.error_class).attr("role","alert"),e(a).triggerHandler("invalid"))}else if(t[n][1].test(d)&&f||!l&&a.value.length<1||e(a).attr("disabled")?g.push(!0):g.push(!1),g=[g.every(function(e){return e})],g[0])this.S(a).removeAttr(this.invalid_attr),a.setAttribute("aria-invalid","false"),a.removeAttribute("aria-describedby"),o.removeClass(this.settings.error_class),h.length>0&&this.settings.error_labels&&h.removeClass(this.settings.error_class).removeAttr("role"),e(a).triggerHandler("valid");else{this.S(a).attr(this.invalid_attr,""),a.setAttribute("aria-invalid","true");var b=o.find("small."+this.settings.error_class,"span."+this.settings.error_class),x=b.length>0?b[0].id:"";x.length>0&&a.setAttribute("aria-describedby",x),o.addClass(this.settings.error_class),h.length>0&&this.settings.error_labels&&h.addClass(this.settings.error_class).attr("role","alert"),e(a).triggerHandler("invalid")}i=i.concat(g)}return i},valid_checkbox:function(t,n){var t=this.S(t),i=t.is(":checked")||!n||t.get(0).getAttribute("disabled");return i?(t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),e(t).triggerHandler("valid")):(t.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),e(t).triggerHandler("invalid")),i},valid_radio:function(t,n){for(var i=t.getAttribute("name"),r=this.S(t).closest("[data-"+this.attr_name(!0)+"]").find("[name='"+i+"']"),o=r.length,s=!1,a=!1,l=0;o>l;l++)r[l].getAttribute("disabled")?(a=!0,s=!0):r[l].checked?s=!0:a&&(s=!1);for(var l=0;o>l;l++)s?(this.S(r[l]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),e(r[l]).triggerHandler("valid")):(this.S(r[l]).attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),e(r[l]).triggerHandler("invalid"));return s},valid_equal:function(e,t,i){var r=n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,o=e.value,s=r===o;return s?(this.S(e).removeAttr(this.invalid_attr),i.removeClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.removeClass(this.settings.error_class)):(this.S(e).attr(this.invalid_attr,""),i.addClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.addClass(this.settings.error_class)),s},valid_oneof:function(e,t,n,i){var e=this.S(e),r=this.S("["+this.add_namespace("data-oneof")+"]"),o=r.filter(":checked").length>0;if(o?e.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):e.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),!i){var s=this;r.each(function(){s.valid_oneof.call(s,this,null,null,!0)})}return o},reflow:function(e,t){var n=this,i=n.S("["+this.attr_name()+"]").attr("novalidate","novalidate");n.S(i).each(function(e,t){n.events(t)})}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.5.3",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(t){var n=this,i=this.S;n.create(this.S(t)),i(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a, ["+this.attr_name()+"] > li > a",function(t){var r=i(this).closest("["+n.attr_name()+"]"),o=n.attr_name()+"="+r.attr(n.attr_name()),s=r.data(n.attr_name(!0)+"-init")||n.settings,a=i("#"+this.href.split("#")[1]),l=e("> dd, > li",r),d=l.children("."+s.content_class),c=d.filter("."+s.active_class);return t.preventDefault(),r.attr(n.attr_name())&&(d=d.add("["+o+"] dd > ."+s.content_class+", ["+o+"] li > ."+s.content_class),l=l.add("["+o+"] dd, ["+o+"] li")),s.toggleable&&a.is(c)?(a.parent("dd, li").toggleClass(s.active_class,!1),a.toggleClass(s.active_class,!1),i(this).attr("aria-expanded",function(e,t){return"true"===t?"false":"true"}),s.callback(a),a.triggerHandler("toggled",[r]),void r.triggerHandler("toggled",[a])):(s.multi_expand||(d.removeClass(s.active_class),l.removeClass(s.active_class),l.children("a").attr("aria-expanded","false")),a.addClass(s.active_class).parent().addClass(s.active_class),s.callback(a),a.triggerHandler("toggled",[r]),r.triggerHandler("toggled",[a]),void i(this).attr("aria-expanded","true"))})},create:function(t){var n=this,i=t,r=e("> .accordion-navigation",i),o=i.data(n.attr_name(!0)+"-init")||n.settings;r.children("a").attr("aria-expanded","false"),r.has("."+o.content_class+"."+o.active_class).addClass(o.active_class).children("a").attr("aria-expanded","true"),o.multi_expand&&t.attr("aria-multiselectable","true")},toggle:function(e){var e="undefined"!=typeof e?e:{},n="undefined"!=typeof e.selector?e.selector:"",i="undefined"!=typeof e.toggle_state?e.toggle_state:"",r="undefined"!=typeof e.$accordion?e.$accordion:this.S(this.scope).closest("["+this.attr_name()+"]"),o=r.find("> dd"+n+", > li"+n);if(o.length<1)return t.console&&console.error("Selection not found.",n),!1;var s=this.S,a=this.settings.active_class;o.each(function(){var e=s(this),t=e.hasClass(a);(t&&"close"===i||!t&&"open"===i||""===i)&&e.find("> a").trigger("click.fndtn.accordion")})},open:function(e){var e="undefined"!=typeof e?e:{};e.toggle_state="open",this.toggle(e)},close:function(e){var e="undefined"!=typeof e?e:{};e.toggle_state="close",this.toggle(e)},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.alert={name:"alert",version:"5.5.3",settings:{callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=this.S;e(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] .close",function(e){var i=n(this).closest("["+t.attr_name()+"]"),r=i.data(t.attr_name(!0)+"-init")||t.settings;e.preventDefault(),Modernizr.csstransitions?(i.addClass("alert-close"),i.on("transitionend webkitTransitionEnd oTransitionEnd",function(e){n(this).trigger("close.fndtn.alert").remove(),r.callback()})):i.fadeOut(300,function(){n(this).trigger("close.fndtn.alert").remove(),r.callback()})})},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.5.3",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(e,t,n){var i=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(t,n),i.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(i.S("li",this.scope)):i.S("["+this.attr_name()+"]",this.scope).each(function(){i.assemble(i.S("li",this))})},events:function(i){var r=this,o=r.S,s=e(".scroll-container");s.length>0&&(this.scope=s),o(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(e,t,n){var t=t||o(this),n=n||t,i=t.next("li"),s=t.closest("["+r.attr_name()+"]").data(r.attr_name(!0)+"-init"),a=o(e.target);e.preventDefault(),s||(r.init(),s=t.closest("["+r.attr_name()+"]").data(r.attr_name(!0)+"-init")),n.hasClass("visible")&&t[0]===n[0]&&i.length>0&&r.is_open(t)&&(n=i,a=o("img",n)),r.open(a,t,n),r.update_paddles(n)}).on("click.fndtn.clearing",".clearing-main-next",function(e){r.nav(e,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(e){r.nav(e,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(e){Foundation.libs.clearing.close(e,this)}),e(n).on("keydown.fndtn.clearing",function(e){r.keydown(e)}),o(t).off(".clearing").on("resize.fndtn.clearing",function(){r.resize()}),this.swipe_events(i)},swipe_events:function(e){var t=this,n=t.S;n(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(e){e.touches||(e=e.originalEvent);var t={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:i};n(this).data("swipe-transition",t),e.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(e){if(e.touches||(e=e.originalEvent),!(e.touches.length>1||e.scale&&1!==e.scale)){var i=n(this).data("swipe-transition");if("undefined"==typeof i&&(i={}),i.delta_x=e.touches[0].pageX-i.start_page_x,Foundation.rtl&&(i.delta_x=-i.delta_x),"undefined"==typeof i.is_scrolling&&(i.is_scrolling=!!(i.is_scrolling||Math.abs(i.delta_x)<Math.abs(e.touches[0].pageY-i.start_page_y))),!i.is_scrolling&&!i.active){e.preventDefault();var r=i.delta_x<0?"next":"prev";i.active=!0,t.nav(e,r)}}}).on("touchend.fndtn.clearing",".visible-img",function(e){n(this).data("swipe-transition",{}),e.stopPropagation()})},assemble:function(t){var n=t.parent();if(!n.parent().hasClass("carousel")){n.after('<div id="foundationClearingHolder"></div>');var i=n.detach(),r="";if(null!=i[0]){r=i[0].outerHTML;var o=this.S("#foundationClearingHolder"),s=n.data(this.attr_name(!0)+"-init"),a={grid:'<div class="carousel">'+r+"</div>",viewing:s.templates.viewing},l='<div class="clearing-assembled"><div>'+a.viewing+a.grid+"</div></div>",d=this.settings.touch_label;Modernizr.touch&&(l=e(l).find(".clearing-touch-label").html(d).end()),o.after(l).remove()}}},open:function(t,i,r){function o(){setTimeout(function(){this.image_loaded(p,function(){1!==p.outerWidth()||h?s.call(this,p):o.call(this)}.bind(this))}.bind(this),100)}function s(t){var n=e(t);n.css("visibility","visible"),n.trigger("imageVisible"),l.css("overflow","hidden"),d.addClass("clearing-blackout"),c.addClass("clearing-container"),u.show(),this.fix_height(r).caption(a.S(".clearing-caption",u),a.S("img",r)).center_and_label(t,A).shift(i,r,function(){r.closest("li").siblings().removeClass("visible"),r.closest("li").addClass("visible")}),u.trigger("opened.fndtn.clearing")}var a=this,l=e(n.body),d=r.closest(".clearing-assembled"),c=a.S("div",d).first(),u=a.S(".visible-img",c),p=a.S("img",u).not(t),A=a.S(".clearing-touch-label",c),h=!1,f={};e("body").on("touchmove",function(e){e.preventDefault()}),p.error(function(){h=!0}),this.locked()||(u.trigger("open.fndtn.clearing"),f=this.load(t),f.interchange?p.attr("data-interchange",f.interchange).foundation("interchange","reflow"):p.attr("src",f.src).attr("data-interchange",""),p.css("visibility","hidden"),o.call(this))},close:function(t,i){t.preventDefault();var r,o,s=function(e){return/blackout/.test(e.selector)?e:e.closest(".clearing-blackout")}(e(i)),a=e(n.body);return i===t.target&&s&&(a.css("overflow",""),r=e("div",s).first(),o=e(".visible-img",r),o.trigger("close.fndtn.clearing"),this.settings.prev_index=0,e("ul["+this.attr_name()+"]",s).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),r.removeClass("clearing-container"),o.hide(),o.trigger("closed.fndtn.clearing")),e("body").off("touchmove"),!1},is_open:function(e){return e.parent().prop("style").length>0},keydown:function(t){var n=e(".clearing-blackout ul["+this.attr_name()+"]"),i=this.rtl?37:39,r=this.rtl?39:37,o=27;t.which===i&&this.go(n,"next"),t.which===r&&this.go(n,"prev"),t.which===o&&this.S("a.clearing-close").trigger("click.fndtn.clearing")},nav:function(t,n){var i=e("ul["+this.attr_name()+"]",".clearing-blackout");t.preventDefault(),this.go(i,n)},resize:function(){var t=e("img",".clearing-blackout .visible-img"),n=e(".clearing-touch-label",".clearing-blackout");t.length&&(this.center_and_label(t,n),t.trigger("resized.fndtn.clearing"))},fix_height:function(e){var t=e.parent().children(),n=this;return t.each(function(){var e=n.S(this),t=e.find("img");e.height()>t.outerHeight()&&e.addClass("fix-height")}).closest("ul").width(100*t.length+"%"),this},update_paddles:function(e){e=e.closest("li");var t=e.closest(".carousel").siblings(".visible-img");e.next().length>0?this.S(".clearing-main-next",t).removeClass("disabled"):this.S(".clearing-main-next",t).addClass("disabled"),e.prev().length>0?this.S(".clearing-main-prev",t).removeClass("disabled"):this.S(".clearing-main-prev",t).addClass("disabled")},center_and_label:function(e,t){return!this.rtl&&t.length>0?t.css({marginLeft:-(t.outerWidth()/2),marginTop:-(e.outerHeight()/2)-t.outerHeight()-10}):t.css({marginRight:-(t.outerWidth()/2),marginTop:-(e.outerHeight()/2)-t.outerHeight()-10,left:"auto",right:"50%"}),this},load:function(e){var t,n,i;return"A"===e[0].nodeName?(t=e.attr("href"),n=e.data("clearing-interchange")):(i=e.closest("a"),t=i.attr("href"),n=i.data("clearing-interchange")),this.preload(e),{src:t?t:e.attr("src"),interchange:t?n:e.data("clearing-interchange")}},preload:function(e){this.img(e.closest("li").next(),"next").img(e.closest("li").prev(),"prev")},img:function(t,n){if(t.length){var i,r,o,s=e(".clearing-preload-"+n),a=this.S("a",t);a.length?(i=a.attr("href"),r=a.data("clearing-interchange")):(o=this.S("img",t),i=o.attr("src"),r=o.data("clearing-interchange")),r?s.attr("data-interchange",r):(s.attr("src",i),s.attr("data-interchange",""))}return this},caption:function(e,t){var n=t.attr("data-caption");if(n){var i=e.get(0);i.innerHTML=n,e.show()}else e.text("").hide();return this},go:function(e,t){var n=this.S(".visible",e),i=n[t]();this.settings.skip_selector&&0!=i.find(this.settings.skip_selector).length&&(i=i[t]()),i.length&&this.S("img",i).trigger("click.fndtn.clearing",[n,i]).trigger("change.fndtn.clearing")},shift:function(e,t,n){var i,r=t.parent(),o=this.settings.prev_index||t.index(),s=this.direction(r,e,t),a=this.rtl?"right":"left",l=parseInt(r.css("left"),10),d=t.outerWidth(),c={};t.index()===o||/skip/.test(s)?/skip/.test(s)&&(i=t.index()-this.settings.up_count,this.lock(),i>0?(c[a]=-(i*d),r.animate(c,300,this.unlock())):(c[a]=0,r.animate(c,300,this.unlock()))):/left/.test(s)?(this.lock(),c[a]=l+d,r.animate(c,300,this.unlock())):/right/.test(s)&&(this.lock(),c[a]=l-d,r.animate(c,300,this.unlock())),n()},direction:function(e,t,n){var i,r=this.S("li",e),o=r.outerWidth()+r.outerWidth()/4,s=Math.floor(this.S(".clearing-container").outerWidth()/o)-1,a=r.index(n);return this.settings.up_count=s,i=this.adjacent(this.settings.prev_index,a)?a>s&&a>this.settings.prev_index?"right":a>s-1&&a<=this.settings.prev_index?"left":!1:"skip",this.settings.prev_index=a,i},adjacent:function(e,t){for(var n=t+1;n>=t-1;n--)if(n===e)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(t).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.5.3",settings:{active_class:"open",disabled_class:"disabled",mega_class:"mega",align:"bottom",is_hover:!1,hover_timeout:150,opened:function(){},closed:function(){}},init:function(t,n,i){Foundation.inherit(this,"throttle"),e.extend(!0,this.settings,n,i),this.bindings(n,i)},events:function(i){var r=this,o=r.S;o(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(t){var n=o(this).data(r.attr_name(!0)+"-init")||r.settings;(!n.is_hover||Modernizr.touch)&&(t.preventDefault(),o(this).parent("[data-reveal-id]").length&&t.stopPropagation(),r.toggle(e(this)))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t,n,i=o(this);clearTimeout(r.timeout),i.data(r.data_attr())?(t=o("#"+i.data(r.data_attr())),n=i):(t=i,n=o("["+r.attr_name()+'="'+t.attr("id")+'"]'));var s=n.data(r.attr_name(!0)+"-init")||r.settings;o(e.currentTarget).data(r.data_attr())&&s.is_hover&&r.closeall.call(r),s.is_hover&&r.open.apply(r,[t,n])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t,n=o(this);if(n.data(r.data_attr()))t=n.data(r.data_attr(!0)+"-init")||r.settings;else var i=o("["+r.attr_name()+'="'+o(this).attr("id")+'"]'),t=i.data(r.attr_name(!0)+"-init")||r.settings;r.timeout=setTimeout(function(){n.data(r.data_attr())?t.is_hover&&r.close.call(r,o("#"+n.data(r.data_attr()))):t.is_hover&&r.close.call(r,n)}.bind(this),t.hover_timeout)}).on("click.fndtn.dropdown",function(t){var i=o(t.target).closest("["+r.attr_name()+"-content]"),s=i.find("a");return s.length>0&&"false"!==i.attr("aria-autoclose")&&r.close.call(r,o("["+r.attr_name()+"-content]")),t.target!==n&&!e.contains(n.documentElement,t.target)||o(t.target).closest("["+r.attr_name()+"]").length>0?void 0:!o(t.target).data("revealId")&&i.length>0&&(o(t.target).is("["+r.attr_name()+"-content]")||e.contains(i.first()[0],t.target))?void t.stopPropagation():void r.close.call(r,o("["+r.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+r.attr_name()+"-content]",function(){r.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+r.attr_name()+"-content]",function(){r.settings.closed.call(this)}),o(t).off(".dropdown").on("resize.fndtn.dropdown",r.throttle(function(){r.resize.call(r)},50)),this.resize()},close:function(t){var n=this;t.each(function(i){var r=e("["+n.attr_name()+"="+t[i].id+"]")||e("aria-controls="+t[i].id+"]");r.attr("aria-expanded","false"),n.S(this).hasClass(n.settings.active_class)&&(n.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(n.settings.active_class).prev("["+n.attr_name()+"]").removeClass(n.settings.active_class).removeData("target"),n.S(this).trigger("closed.fndtn.dropdown",[t]))}),t.removeClass("f-open-"+this.attr_name(!0))},closeall:function(){var t=this;e.each(t.S(".f-open-"+this.attr_name(!0)),function(){t.close.call(t,t.S(this))})},open:function(e,t){this.css(e.addClass(this.settings.active_class),t),e.prev("["+this.attr_name()+"]").addClass(this.settings.active_class),e.data("target",t.get(0)).trigger("opened.fndtn.dropdown",[e,t]),e.attr("aria-hidden","false"),t.attr("aria-expanded","true"),e.focus(),e.addClass("f-open-"+this.attr_name(!0))},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(e){if(!e.hasClass(this.settings.disabled_class)){var t=this.S("#"+e.data(this.data_attr()));0!==t.length&&(this.close.call(this,this.S("["+this.attr_name()+"-content]").not(t)),t.hasClass(this.settings.active_class)?(this.close.call(this,t),t.data("target")!==e.get(0)&&this.open.call(this,t,e)):this.open.call(this,t,e))}},resize:function(){var t=this.S("["+this.attr_name()+"-content].open"),n=e(t.data("target"));t.length&&n.length&&this.css(t,n)},css:function(e,t){var n=Math.max((t.width()-e.width())/2,8),i=t.data(this.attr_name(!0)+"-init")||this.settings,r=e.parent().css("overflow-y")||e.parent().css("overflow");if(this.clear_idx(),this.small()){var o=this.dirs.bottom.call(e,t,i);e.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:o.top}),e.css(Foundation.rtl?"right":"left",n)}else if("visible"!==r){var s=t[0].offsetTop+t[0].offsetHeight;e.attr("style","").css({position:"absolute",top:s}),e.css(Foundation.rtl?"right":"left",n)}else this.style(e,t,i);return e},style:function(t,n,i){var r=e.extend({position:"absolute"},this.dirs[i.align].call(t,n,i));t.attr("style","").css(r)},dirs:{_base:function(e,i){var r=this.offsetParent(),o=r.offset(),s=e.offset();s.top-=o.top,s.left-=o.left,s.missRight=!1,s.missTop=!1,s.missLeft=!1,s.leftRightFlag=!1;var a,l=t.innerWidth;a=n.getElementsByClassName("row")[0]?n.getElementsByClassName("row")[0].clientWidth:l;var d=(l-a)/2,c=a;if(!this.hasClass("mega")&&!i.ignore_repositioning){var u=this.outerWidth(),p=e.offset().left;e.offset().top<=this.outerHeight()&&(s.missTop=!0,c=l-d,s.leftRightFlag=!0),p+u>p+d&&p-d>u&&(s.missRight=!0,s.missLeft=!1),0>=p-u&&(s.missLeft=!0,s.missRight=!1)}return s},top:function(e,t){var n=Foundation.libs.dropdown,i=n.dirs._base.call(this,e,t);return this.addClass("drop-top"),1==i.missTop&&(i.top=i.top+e.outerHeight()+this.outerHeight(),this.removeClass("drop-top")),1==i.missRight&&(i.left=i.left-this.outerWidth()+e.outerWidth()),(e.outerWidth()<this.outerWidth()||n.small()||this.hasClass(t.mega_menu))&&n.adjust_pip(this,e,t,i),Foundation.rtl?{left:i.left-this.outerWidth()+e.outerWidth(),top:i.top-this.outerHeight()}:{left:i.left,top:i.top-this.outerHeight()}},bottom:function(e,t){var n=Foundation.libs.dropdown,i=n.dirs._base.call(this,e,t);return 1==i.missRight&&(i.left=i.left-this.outerWidth()+e.outerWidth()),(e.outerWidth()<this.outerWidth()||n.small()||this.hasClass(t.mega_menu))&&n.adjust_pip(this,e,t,i),n.rtl?{left:i.left-this.outerWidth()+e.outerWidth(),top:i.top+e.outerHeight()}:{left:i.left,top:i.top+e.outerHeight()}},left:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e,t);return this.addClass("drop-left"),1==n.missLeft&&(n.left=n.left+this.outerWidth(),n.top=n.top+e.outerHeight(),this.removeClass("drop-left")),{left:n.left-this.outerWidth(),top:n.top}},right:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e,t);this.addClass("drop-right"),1==n.missRight?(n.left=n.left-this.outerWidth(),n.top=n.top+e.outerHeight(),this.removeClass("drop-right")):n.triggeredRight=!0;var i=Foundation.libs.dropdown;return(e.outerWidth()<this.outerWidth()||i.small()||this.hasClass(t.mega_menu))&&i.adjust_pip(this,e,t,n),
{left:n.left+e.outerWidth(),top:n.top}}},adjust_pip:function(e,t,n,i){var r=Foundation.stylesheet,o=8;e.hasClass(n.mega_class)?o=i.left+t.outerWidth()/2-8:this.small()&&(o+=i.left-8),this.rule_idx=r.cssRules.length;var s=".f-dropdown.open:before",a=".f-dropdown.open:after",l="left: "+o+"px;",d="left: "+(o-1)+"px;";1==i.missRight&&(o=e.outerWidth()-23,s=".f-dropdown.open:before",a=".f-dropdown.open:after",l="left: "+o+"px;",d="left: "+(o-1)+"px;"),1==i.triggeredRight&&(s=".f-dropdown.open:before",a=".f-dropdown.open:after",l="left:-12px;",d="left:-14px;"),r.insertRule?(r.insertRule([s,"{",l,"}"].join(" "),this.rule_idx),r.insertRule([a,"{",d,"}"].join(" "),this.rule_idx+1)):(r.addRule(s,l,this.rule_idx),r.addRule(a,d,this.rule_idx+1))},clear_idx:function(){var e=Foundation.stylesheet;"undefined"!=typeof this.rule_idx&&(e.deleteRule(this.rule_idx),e.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(t).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.5.3",settings:{use_tallest:!0,before_height_change:e.noop,after_height_change:e.noop,equalize_on_stack:!1,act_on_hidden_el:!1},init:function(e,t,n){Foundation.inherit(this,"image_loaded"),this.bindings(t,n),this.reflow()},events:function(){this.S(t).off(".equalizer").on("resize.fndtn.equalizer",function(e){this.reflow()}.bind(this))},equalize:function(t){var n,i,r=!1,o=t.data("equalizer"),s=t.data(this.attr_name(!0)+"-init")||this.settings;if(n=s.act_on_hidden_el?o?t.find("["+this.attr_name()+'-watch="'+o+'"]'):t.find("["+this.attr_name()+"-watch]"):o?t.find("["+this.attr_name()+'-watch="'+o+'"]:visible'):t.find("["+this.attr_name()+"-watch]:visible"),0!==n.length&&(s.before_height_change(),t.trigger("before-height-change.fndth.equalizer"),n.height("inherit"),s.equalize_on_stack!==!1||(i=n.first().offset().top,n.each(function(){return e(this).offset().top!==i?(r=!0,!1):void 0}),!r))){var a=n.map(function(){return e(this).outerHeight(!1)}).get();if(s.use_tallest){var l=Math.max.apply(null,a);n.css("height",l)}else{var d=Math.min.apply(null,a);n.css("height",d)}s.after_height_change(),t.trigger("after-height-change.fndtn.equalizer")}},reflow:function(){var t=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var n=e(this),i=n.data("equalizer-mq"),r=!0;i&&(i="is_"+i.replace(/-/g,"_"),Foundation.utils.hasOwnProperty(i)&&(r=!1)),t.image_loaded(t.S("img",this),function(){if(r||Foundation.utils[i]())t.equalize(n);else{var e=n.find("["+t.attr_name()+"-watch]:visible");e.css("height","auto")}})})}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.5.3",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,"small-only":Foundation.media_queries["small-only"],medium:Foundation.media_queries.medium,"medium-only":Foundation.media_queries["medium-only"],large:Foundation.media_queries.large,"large-only":Foundation.media_queries["large-only"],xlarge:Foundation.media_queries.xlarge,"xlarge-only":Foundation.media_queries["xlarge-only"],xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(t,n,i){if(null!==t&&/IMG/.test(t[0].nodeName)){var r=e.each(t,function(){this.src=n});if(new RegExp(n,"i").test(r))return;return t.attr("src",n),i(t[0].src)}var o=t.data(this.data_attr+"-last-path"),s=this;if(o!=n)return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(n)?(e(t).css("background-image","url("+n+")"),t.data("interchange-last-path",n),i(n)):e.get(n,function(e){t.html(e),t.data(s.data_attr+"-last-path",n),i()})}}},init:function(t,n,i){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),e.extend(!0,this.settings,n,i),this.bindings(n,i),this.reflow()},get_media_hash:function(){var e="";for(var t in this.settings.named_queries)e+=matchMedia(this.settings.named_queries[t]).matches.toString();return e},events:function(){var n,i=this;return e(t).off(".interchange").on("resize.fndtn.interchange",i.throttle(function(){var e=i.get_media_hash();e!==n&&i.resize(),n=e},50)),this},resize:function(){var t=this.cache;if(!this.images_loaded||!this.nodes_loaded)return void setTimeout(e.proxy(this.resize,this),50);for(var n in t)if(t.hasOwnProperty(n)){var i=this.results(n,t[n]);i&&this.settings.directives[i.scenario[1]].call(this,i.el,i.scenario[0],function(e){if(arguments[0]instanceof Array)var t=arguments[0];else var t=Array.prototype.slice.call(arguments,0);return function(){e.el.trigger(e.scenario[1],t)}}(i))}},results:function(e,t){var n=t.length;if(n>0)for(var i=this.S("["+this.add_namespace("data-uuid")+'="'+e+'"]');n--;){var r,o=t[n][2];if(r=this.settings.named_queries.hasOwnProperty(o)?matchMedia(this.settings.named_queries[o]):matchMedia(o),r.matches)return{el:i,scenario:t[n]}}return!1},load:function(e,t){return("undefined"==typeof this["cached_"+e]||t)&&this["update_"+e](),this["cached_"+e]},update_images:function(){var e=this.S("img["+this.data_attr+"]"),t=e.length,n=t,i=0,r=this.data_attr;for(this.cache={},this.cached_images=[],this.images_loaded=0===t;n--;){if(i++,e[n]){var o=e[n].getAttribute(r)||"";o.length>0&&this.cached_images.push(e[n])}i===t&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var e=this.S("["+this.data_attr+"]").not("img"),t=e.length,n=t,i=0,r=this.data_attr;for(this.cached_nodes=[],this.nodes_loaded=0===t;n--;){i++;var o=e[n].getAttribute(r)||"";o.length>0&&this.cached_nodes.push(e[n]),i===t&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(n){for(var i=this["cached_"+n].length;i--;)this.object(e(this["cached_"+n][i]));return e(t).trigger("resize.fndtn.interchange")},convert_directive:function(e){var t=this.trim(e);return t.length>0?t:"replace"},parse_scenario:function(e){var t=e[0].match(/(.+),\s*(\w+)\s*$/),n=e[1].match(/(.*)\)/);if(t)var i=t[1],r=t[2];else var o=e[0].split(/,\s*$/),i=o[0],r="";return[this.trim(i),this.convert_directive(r),this.trim(n[1])]},object:function(e){var t=this.parse_data_attr(e),n=[],i=t.length;if(i>0)for(;i--;){var r=t[i].split(/,\s?\(/);if(r.length>1){var o=this.parse_scenario(r);n.push(o)}}return this.store(e,n)},store:function(e,t){var n=this.random_str(),i=e.data(this.add_namespace("uuid",!0));return this.cache[i]?this.cache[i]:(e.attr(this.add_namespace("data-uuid"),n),this.cache[n]=t)},trim:function(t){return"string"==typeof t?e.trim(t):t},set_data_attr:function(e){return e?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(e){for(var t=e.attr(this.attr_name()).split(/\[(.*?)\]/),n=t.length,i=[];n--;)t[n].replace(/[\W\d]+/,"").length>4&&i.push(t[n]);return i},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.joyride={name:"joyride",version:"5.5.3",defaults:{expose:!1,modal:!0,keyboard:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,prev_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',prev_button:'<a href="#" class="small button joyride-prev-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(t,n,i){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||e.extend({},this.defaults,i||n),this.bindings(n,i)},go_next:function(){this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())},go_prev:function(){this.settings.$li.prev().length<1||(this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(null,!0),this.startTimer()):(this.hide(),this.show(null,!0)))},events:function(){var n=this;e(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(e){e.preventDefault(),this.go_next()}.bind(this)).on("click.fndtn.joyride",".joyride-prev-tip",function(e){e.preventDefault(),this.go_prev()}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(e){e.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)).on("keyup.fndtn.joyride",function(e){if(this.settings.keyboard&&this.settings.riding)switch(e.which){case 39:e.preventDefault(),this.go_next();break;case 37:e.preventDefault(),this.go_prev();break;case 27:e.preventDefault(),this.end(this.settings.abort_on_close)}}.bind(this)),e(t).off(".joyride").on("resize.fndtn.joyride",n.throttle(function(){if(e("["+n.attr_name()+"]").length>0&&n.settings.$next_tip&&n.settings.riding){if(n.settings.exposed.length>0){var t=e(n.settings.exposed);t.each(function(){var t=e(this);n.un_expose(t),n.expose(t)})}n.is_phone()?n.pos_phone():n.pos_default(!1)}},100))},start:function(){var t=this,n=e("["+this.attr_name()+"]",this.scope),i=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],r=i.length;!n.length>0||(this.settings.init||this.events(),this.settings=n.data(this.attr_name(!0)+"-init"),this.settings.$content_el=n,this.settings.$body=e(this.settings.tip_container),this.settings.body_offset=e(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.riding=!0,"function"!=typeof e.cookie&&(this.settings.cookie_monster=!1),(!this.settings.cookie_monster||this.settings.cookie_monster&&!e.cookie(this.settings.cookie_name))&&(this.settings.$tip_content.each(function(n){var o=e(this);this.settings=e.extend({},t.defaults,t.data_options(o));for(var s=r;s--;)t.settings[i[s]]=parseInt(t.settings[i[s]],10);t.create({$li:o,index:n})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")))},resume:function(){this.set_li(),this.show()},tip_template:function(t){var n,i;return t.tip_class=t.tip_class||"",n=e(this.settings.template.tip).addClass(t.tip_class),i=e.trim(e(t.li).html())+this.prev_button_text(t.prev_button_text,t.index)+this.button_text(t.button_text)+this.settings.template.link+this.timer_instance(t.index),n.append(e(this.settings.template.wrapper)),n.first().attr(this.add_namespace("data-index"),t.index),e(".joyride-content-wrapper",n).append(i),n[0]},timer_instance:function(t){var n;return n=0===t&&this.settings.start_timer_on_click&&this.settings.timer>0||0===this.settings.timer?"":e(this.settings.template.timer)[0].outerHTML},button_text:function(t){return this.settings.tip_settings.next_button?(t=e.trim(t)||"Next",t=e(this.settings.template.button).append(t)[0].outerHTML):t="",t},prev_button_text:function(t,n){return this.settings.tip_settings.prev_button?(t=e.trim(t)||"Previous",t=0==n?e(this.settings.template.prev_button).append(t).addClass("disabled")[0].outerHTML:e(this.settings.template.prev_button).append(t)[0].outerHTML):t="",t},create:function(t){this.settings.tip_settings=e.extend({},this.settings,this.data_options(t.$li));var n=t.$li.attr(this.add_namespace("data-button"))||t.$li.attr(this.add_namespace("data-text")),i=t.$li.attr(this.add_namespace("data-button-prev"))||t.$li.attr(this.add_namespace("data-prev-text")),r=t.$li.attr("class"),o=e(this.tip_template({tip_class:r,index:t.index,button_text:n,prev_button_text:i,li:t.$li}));e(this.settings.tip_container).append(o)},show:function(t,n){var r=null;if(this.settings.$li===i||-1===e.inArray(this.settings.$li.index(),this.settings.pause_after))if(this.settings.paused?this.settings.paused=!1:this.set_li(t,n),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0){if(t&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=e.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],!/body/i.test(this.settings.$target.selector)&&!this.settings.expose){var o=e(".joyride-modal-bg");/pop/i.test(this.settings.tipAnimation)?o.hide():o.fadeOut(this.settings.tipAnimationFadeSpeed),this.scroll_to()}this.is_phone()?this.pos_phone(!0):this.pos_default(!0),r=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(r.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){r.animate({width:r.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(r.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){r.animate({width:r.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip}else this.settings.$li&&this.settings.$target.length<1?this.show(t,n):this.end();else this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||e(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(e.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(e,t){e?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(t?this.settings.$li=this.settings.$li.prev():this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=e(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var t=this.settings.$li.attr(this.add_namespace("data-class")),i=this.settings.$li.attr(this.add_namespace("data-id")),r=function(){return i?e(n.getElementById(i)):t?e("."+t).first():e("body")};this.settings.$target=r()},scroll_to:function(){var n,i;n=e(t).height()/2,i=Math.ceil(this.settings.$target.offset().top-n+this.settings.$next_tip.outerHeight()),0!=i&&e("html, body").stop().animate({scrollTop:i},this.settings.scroll_speed,"swing")},paused:function(){return-1===e.inArray(this.settings.$li.index()+1,this.settings.pause_after)},restart:function(){this.hide(),this.settings.$li=i,this.show("init")},pos_default:function(e){var t=this.settings.$next_tip.find(".joyride-nub"),n=Math.ceil(t.outerWidth()/2),i=Math.ceil(t.outerHeight()/2),r=e||!1;if(r&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector))this.settings.$li.length&&this.pos_modal(t);else{var o=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,s=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0;this.bottom()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top+i+this.settings.$target.outerHeight()+o,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()+s}):this.settings.$next_tip.css({top:this.settings.$target.offset().top+i+this.settings.$target.outerHeight()+o,left:this.settings.$target.offset().left+s}),this.nub_position(t,this.settings.tip_settings.nub_position,"top")):this.top()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-i+o,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-i+o,left:this.settings.$target.offset().left+s}),this.nub_position(t,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+o,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+n+s}),this.nub_position(t,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+o,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-n+s}),this.nub_position(t,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(t.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}r&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(t){var n=this.settings.$next_tip.outerHeight(),i=(this.settings.$next_tip.offset(),this.settings.$target.outerHeight()),r=e(".joyride-nub",this.settings.$next_tip),o=Math.ceil(r.outerHeight()/2),s=t||!1;r.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),s&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(r):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-n-o}),r.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+i+o}),r.addClass("top")),s&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(e){this.center(),e.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var t=e(".joyride-modal-bg");if(t.length<1){var t=e(this.settings.template.modal);t.appendTo("body")}/pop/i.test(this.settings.tip_animation)?t.show():t.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var n,i,r,o,s,a="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof e)r=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;r=this.settings.$target}return r.length<1?(t.console&&console.error("element not valid",r),!1):(n=e(this.settings.template.expose),this.settings.$body.append(n),n.css({top:r.offset().top,left:r.offset().left,width:r.outerWidth(!0),height:r.outerHeight(!0)}),i=e(this.settings.template.expose_cover),o={zIndex:r.css("z-index"),position:r.css("position")},s=null==r.attr("class")?"":r.attr("class"),r.css("z-index",parseInt(n.css("z-index"))+1),"static"==o.position&&r.css("position","relative"),r.data("expose-css",o),r.data("orig-class",s),r.attr("class",s+" "+this.settings.expose_add_class),i.css({top:r.offset().top,left:r.offset().left,width:r.outerWidth(!0),height:r.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(i),n.addClass(a),i.addClass(a),r.data("expose",a),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,r),void this.add_exposed(r))},un_expose:function(){var n,i,r,o,s,a=!1;if(arguments.length>0&&arguments[0]instanceof e)i=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;i=this.settings.$target}return i.length<1?(t.console&&console.error("element not valid",i),!1):(n=i.data("expose"),r=e("."+n),arguments.length>1&&(a=arguments[1]),a===!0?e(".joyride-expose-wrapper,.joyride-expose-cover").remove():r.remove(),o=i.data("expose-css"),"auto"==o.zIndex?i.css("z-index",""):i.css("z-index",o.zIndex),o.position!=i.css("position")&&("static"==o.position?i.css("position",""):i.css("position",o.position)),s=i.data("orig-class"),i.attr("class",s),i.removeData("orig-classes"),i.removeData("expose"),i.removeData("expose-z-index"),void this.remove_exposed(i))},add_exposed:function(t){this.settings.exposed=this.settings.exposed||[],t instanceof e||"object"==typeof t?this.settings.exposed.push(t[0]):"string"==typeof t&&this.settings.exposed.push(t)},remove_exposed:function(t){var n,i;for(t instanceof e?n=t[0]:"string"==typeof t&&(n=t),this.settings.exposed=this.settings.exposed||[],i=this.settings.exposed.length;i--;)if(this.settings.exposed[i]==n)return void this.settings.exposed.splice(i,1)},center:function(){var n=e(t);return this.settings.$next_tip.css({top:(n.height()-this.settings.$next_tip.outerHeight())/2+n.scrollTop(),left:(n.width()-this.settings.$next_tip.outerWidth())/2+n.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(n){if(0===n.length)return[!1,!1,!1,!1];var i=e(t),r=i.height()/2,o=Math.ceil(this.settings.$target.offset().top-r+this.settings.$next_tip.outerHeight()),s=i.width()+i.scrollLeft(),a=i.height()+o,l=i.height()+i.scrollTop(),d=i.scrollTop();return d>o&&(d=0>o?0:o),a>l&&(l=a),[n.offset().top<d,s<n.offset().left+n.outerWidth(),l<n.offset().top+n.outerHeight(),i.scrollLeft()>n.offset().left]},visible:function(e){for(var t=e.length;t--;)if(e[t])return!1;return!0},nub_position:function(e,t,n){"auto"===t?e.addClass(n):e.addClass(t)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(t){this.settings.cookie_monster&&e.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),e(this.scope).off("keyup.joyride"),this.settings.$next_tip.data("closed",!0),this.settings.riding=!1,e(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),("undefined"==typeof t||t===!1)&&(this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip)),e(".joyride-tip-guide").remove()},off:function(){e(this.scope).off(".joyride"),e(t).off(".joyride"),e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),e(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate)},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.5.3",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0,offset_by_height:!0,duration:700,easing:"swing"},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n)},events:function(){var t=this,n=t.S,i=t.settings;t.set_expedition_position(),n(t.scope).off(".magellan").on("click.fndtn.magellan","["+t.add_namespace("data-magellan-arrival")+"] a[href*=#]",function(n){var i=this.hostname===location.hostname||!this.hostname,r=t.filterPathname(location.pathname)===t.filterPathname(this.pathname),o=this.hash.replace(/(:|\.|\/)/g,"\\$1"),s=this;if(i&&r&&o){n.preventDefault();var a=e(this).closest("["+t.attr_name()+"]"),l=a.data("magellan-expedition-init"),d=this.hash.split("#").join(""),c=e('a[name="'+d+'"]');0===c.length&&(c=e("#"+d));var u=c.offset().top-l.destination_threshold+1;l.offset_by_height&&(u-=a.outerHeight()),e("html, body").stop().animate({scrollTop:u},l.duration,l.easing,function(){history.pushState?history.pushState(null,null,s.pathname+s.search+"#"+d):location.hash=s.pathname+s.search+"#"+d})}}).on("scroll.fndtn.magellan",t.throttle(this.check_for_arrivals.bind(this),i.throttle_delay))},check_for_arrivals:function(){var e=this;e.update_arrivals(),e.update_expedition_positions()},set_expedition_position:function(){var t=this;e("["+this.attr_name()+"=fixed]",t.scope).each(function(n,i){var r,o,s=e(this),a=s.data("magellan-expedition-init"),l=s.attr("styles");s.attr("style",""),r=s.offset().top+a.threshold,o=parseInt(s.data("magellan-fixed-top")),isNaN(o)||(t.settings.fixed_top=o),s.data(t.data_attr("magellan-top-offset"),r),s.attr("style",l)})},update_expedition_positions:function(){var n=this,i=e(t).scrollTop();e("["+this.attr_name()+"=fixed]",n.scope).each(function(){var t=e(this),r=t.data("magellan-expedition-init"),o=t.attr("style"),s=t.data("magellan-top-offset");if(i+n.settings.fixed_top>=s){var a=t.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]");0===a.length&&(a=t.clone(),a.removeAttr(n.attr_name()),a.attr(n.add_namespace("data-magellan-expedition-clone"),""),t.before(a)),t.css({position:"fixed",top:r.fixed_top}).addClass("fixed")}else t.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]").remove(),t.attr("style",o).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var n=this,i=e(t).scrollTop();e("["+this.attr_name()+"]",n.scope).each(function(){var t=e(this),r=t.data(n.attr_name(!0)+"-init"),o=n.offsets(t,i),s=t.find("["+n.add_namespace("data-magellan-arrival")+"]"),a=!1;o.each(function(e,i){if(i.viewport_offset>=i.top_offset){var o=t.find("["+n.add_namespace("data-magellan-arrival")+"]");return o.not(i.arrival).removeClass(r.active_class),i.arrival.addClass(r.active_class),a=!0,!0}}),a||s.removeClass(r.active_class)})},offsets:function(t,n){var i=this,r=t.data(i.attr_name(!0)+"-init"),o=n;return t.find("["+i.add_namespace("data-magellan-arrival")+"]").map(function(n,s){var a=e(this).data(i.data_attr("magellan-arrival")),l=e("["+i.add_namespace("data-magellan-destination")+"="+a+"]");if(l.length>0){var d=l.offset().top-r.destination_threshold;return r.offset_by_height&&(d-=t.outerHeight()),d=Math.floor(d),{destination:l,arrival:e(this),top_offset:d,viewport_offset:o}}}).sort(function(e,t){return e.top_offset<t.top_offset?-1:e.top_offset>t.top_offset?1:0})},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){this.S(this.scope).off(".magellan"),this.S(t).off(".magellan")},filterPathname:function(e){return e=e||"",e.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},reflow:function(){var t=this;e("["+t.add_namespace("data-magellan-expedition-clone")+"]",t.scope).remove()}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.5.3",settings:{open_method:"move",close_on_click:!1},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=t.S,i="",r="",o="",s="",a="";"move"===this.settings.open_method?(i="move-",r="right",o="left",s="top",a="bottom"):"overlap_single"===this.settings.open_method?(i="offcanvas-overlap-",r="right",o="left",s="top",a="bottom"):"overlap"===this.settings.open_method&&(i="offcanvas-overlap"),n(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(o){t.click_toggle_class(o,i+r),"overlap"!==t.settings.open_method&&n(".left-submenu").removeClass(i+r),e(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(o){var s=t.get_settings(o),a=n(this).parent();!s.close_on_click||a.hasClass("has-submenu")||a.hasClass("back")?n(this).parent().hasClass("has-submenu")?(o.preventDefault(),n(this).siblings(".left-submenu").toggleClass(i+r)):a.hasClass("back")&&(o.preventDefault(),a.parent().removeClass(i+r)):(t.hide.call(t,i+r,t.get_wrapper(o)),a.parent().removeClass(i+r)),e(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(r){t.click_toggle_class(r,i+o),"overlap"!==t.settings.open_method&&n(".right-submenu").removeClass(i+o),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(r){var s=t.get_settings(r),a=n(this).parent();!s.close_on_click||a.hasClass("has-submenu")||a.hasClass("back")?n(this).parent().hasClass("has-submenu")?(r.preventDefault(),n(this).siblings(".right-submenu").toggleClass(i+o)):a.hasClass("back")&&(r.preventDefault(),a.parent().removeClass(i+o)):(t.hide.call(t,i+o,t.get_wrapper(r)),a.parent().removeClass(i+o)),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-toggle",function(r){t.click_toggle_class(r,i+a),"overlap"!==t.settings.open_method&&n(".top-submenu").removeClass(i+a),e(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-menu a",function(r){var o=t.get_settings(r),s=n(this).parent();!o.close_on_click||s.hasClass("has-submenu")||s.hasClass("back")?n(this).parent().hasClass("has-submenu")?(r.preventDefault(),n(this).siblings(".top-submenu").toggleClass(i+a)):s.hasClass("back")&&(r.preventDefault(),s.parent().removeClass(i+a)):(t.hide.call(t,i+a,t.get_wrapper(r)),s.parent().removeClass(i+a)),e(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-toggle",function(r){t.click_toggle_class(r,i+s),"overlap"!==t.settings.open_method&&n(".bottom-submenu").removeClass(i+s),e(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-menu a",function(r){var o=t.get_settings(r),a=n(this).parent();!o.close_on_click||a.hasClass("has-submenu")||a.hasClass("back")?n(this).parent().hasClass("has-submenu")?(r.preventDefault(),n(this).siblings(".bottom-submenu").toggleClass(i+s)):a.hasClass("back")&&(r.preventDefault(),a.parent().removeClass(i+s)):(t.hide.call(t,i+s,t.get_wrapper(r)),a.parent().removeClass(i+s)),e(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(s){t.click_remove_class(s,i+o),n(".right-submenu").removeClass(i+o),r&&(t.click_remove_class(s,i+r),n(".left-submenu").removeClass(i+o)),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(n){t.click_remove_class(n,i+o),e(".left-off-canvas-toggle").attr("aria-expanded","false"),r&&(t.click_remove_class(n,i+r),e(".right-off-canvas-toggle").attr("aria-expanded","false"))}).on("click.fndtn.offcanvas",".exit-off-canvas",function(r){t.click_remove_class(r,i+s),n(".bottom-submenu").removeClass(i+s),a&&(t.click_remove_class(r,i+a),n(".top-submenu").removeClass(i+s)),
e(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(n){t.click_remove_class(n,i+s),e(".top-off-canvas-toggle").attr("aria-expanded","false"),a&&(t.click_remove_class(n,i+a),e(".bottom-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(e,t){t=t||this.get_wrapper(),t.is("."+e)?this.hide(e,t):this.show(e,t)},show:function(e,t){t=t||this.get_wrapper(),t.trigger("open.fndtn.offcanvas"),t.addClass(e)},hide:function(e,t){t=t||this.get_wrapper(),t.trigger("close.fndtn.offcanvas"),t.removeClass(e)},click_toggle_class:function(e,t){e.preventDefault();var n=this.get_wrapper(e);this.toggle(t,n)},click_remove_class:function(e,t){e.preventDefault();var n=this.get_wrapper(e);this.hide(t,n)},get_settings:function(e){var t=this.S(e.target).closest("["+this.attr_name()+"]");return t.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(e){var t=this.S(e?e.target:this.scope).closest(".off-canvas-wrap");return 0===t.length&&(t=this.S(".off-canvas-wrap")),t},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";var r=function(){},o=function(r,o){if(r.hasClass(o.slides_container_class))return this;var d,c,u,p,A,h,f=this,g=r,m=0,v=!1;f.slides=function(){return g.children(o.slide_selector)},f.slides().first().addClass(o.active_slide_class),f.update_slide_number=function(t){o.slide_number&&(c.find("span:first").text(parseInt(t)+1),c.find("span:last").text(f.slides().length)),o.bullets&&(u.children().removeClass(o.bullets_active_class),e(u.children().get(t)).addClass(o.bullets_active_class))},f.update_active_link=function(t){var n=e('[data-orbit-link="'+f.slides().eq(t).attr("data-orbit-slide")+'"]');n.siblings().removeClass(o.bullets_active_class),n.addClass(o.bullets_active_class)},f.build_markup=function(){g.wrap('<div class="'+o.container_class+'"></div>'),d=g.parent(),g.addClass(o.slides_container_class),o.stack_on_small&&d.addClass(o.stack_on_small_class),o.navigation_arrows&&(d.append(e('<a href="#"><span></span></a>').addClass(o.prev_class)),d.append(e('<a href="#"><span></span></a>').addClass(o.next_class))),o.timer&&(p=e("<div>").addClass(o.timer_container_class),p.append("<span>"),p.append(e("<div>").addClass(o.timer_progress_class)),p.addClass(o.timer_paused_class),d.append(p)),o.slide_number&&(c=e("<div>").addClass(o.slide_number_class),c.append("<span></span> "+o.slide_number_text+" <span></span>"),d.append(c)),o.bullets&&(u=e("<ol>").addClass(o.bullets_container_class),d.append(u),u.wrap('<div class="orbit-bullets-container"></div>'),f.slides().each(function(t,n){var i=e("<li>").attr("data-orbit-slide",t).on("click",f.link_bullet);u.append(i)}))},f._goto=function(t,n){if(t===m)return!1;"object"==typeof h&&h.restart();var i=f.slides(),r="next";if(v=!0,m>t&&(r="prev"),t>=i.length){if(!o.circular)return!1;t=0}else if(0>t){if(!o.circular)return!1;t=i.length-1}var s=e(i.get(m)),a=e(i.get(t));s.css("zIndex",2),s.removeClass(o.active_slide_class),a.css("zIndex",4).addClass(o.active_slide_class),g.trigger("before-slide-change.fndtn.orbit"),o.before_slide_change(),f.update_active_link(t);var l=function(){var e=function(){m=t,v=!1,n===!0&&(h=f.create_timer(),h.start()),f.update_slide_number(m),g.trigger("after-slide-change.fndtn.orbit",[{slide_number:m,total_slides:i.length}]),o.after_slide_change(m,i.length)};g.outerHeight()!=a.outerHeight()&&o.variable_height?g.animate({height:a.outerHeight()},250,"linear",e):e()};if(1===i.length)return l(),!1;var d=function(){"next"===r&&A.next(s,a,l),"prev"===r&&A.prev(s,a,l)};a.outerHeight()>g.outerHeight()&&o.variable_height?g.animate({height:a.outerHeight()},250,"linear",d):d()},f.next=function(e){e.stopImmediatePropagation(),e.preventDefault(),f._goto(m+1)},f.prev=function(e){e.stopImmediatePropagation(),e.preventDefault(),f._goto(m-1)},f.link_custom=function(t){t.preventDefault();var n=e(this).attr("data-orbit-link");if("string"==typeof n&&""!=(n=e.trim(n))){var i=d.find("[data-orbit-slide="+n+"]");-1!=i.index()&&f._goto(i.index())}},f.link_bullet=function(t){var n=e(this).attr("data-orbit-slide");if("string"==typeof n&&""!=(n=e.trim(n)))if(isNaN(parseInt(n))){var i=d.find("[data-orbit-slide="+n+"]");-1!=i.index()&&f._goto(i.index()+1)}else f._goto(parseInt(n))},f.timer_callback=function(){f._goto(m+1,!0)},f.compute_dimensions=function(){var t=e(f.slides().get(m)),n=t.outerHeight();o.variable_height||f.slides().each(function(){e(this).outerHeight()>n&&(n=e(this).outerHeight())}),g.height(n)},f.create_timer=function(){var e=new s(d.find("."+o.timer_container_class),o,f.timer_callback);return e},f.stop_timer=function(){"object"==typeof h&&h.stop()},f.toggle_timer=function(){var e=d.find("."+o.timer_container_class);e.hasClass(o.timer_paused_class)?("undefined"==typeof h&&(h=f.create_timer()),h.start()):"object"==typeof h&&h.stop()},f.init=function(){f.build_markup(),o.timer&&(h=f.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),h.start)),A=new l(o,g),"slide"===o.animation&&(A=new a(o,g)),d.on("click","."+o.next_class,f.next),d.on("click","."+o.prev_class,f.prev),o.next_on_click&&d.on("click","."+o.slides_container_class+" [data-orbit-slide]",f.link_bullet),d.on("click",f.toggle_timer),o.swipe&&d.on("touchstart.fndtn.orbit",function(e){e.touches||(e=e.originalEvent);var t={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:i};d.data("swipe-transition",t),e.stopPropagation()}).on("touchmove.fndtn.orbit",function(e){if(e.touches||(e=e.originalEvent),!(e.touches.length>1||e.scale&&1!==e.scale)){var t=d.data("swipe-transition");if("undefined"==typeof t&&(t={}),t.delta_x=e.touches[0].pageX-t.start_page_x,"undefined"==typeof t.is_scrolling&&(t.is_scrolling=!!(t.is_scrolling||Math.abs(t.delta_x)<Math.abs(e.touches[0].pageY-t.start_page_y))),!t.is_scrolling&&!t.active){e.preventDefault();var n=t.delta_x<0?m+1:m-1;t.active=!0,f._goto(n)}}}).on("touchend.fndtn.orbit",function(e){d.data("swipe-transition",{}),e.stopPropagation()}),d.on("mouseenter.fndtn.orbit",function(e){o.timer&&o.pause_on_hover&&f.stop_timer()}).on("mouseleave.fndtn.orbit",function(e){o.timer&&o.resume_on_mouseout&&h.start()}),e(n).on("click","[data-orbit-link]",f.link_custom),e(t).on("load resize",f.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),f.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),function(){d.prev("."+o.preloader_class).css("display","none"),f.update_slide_number(0),f.update_active_link(0),g.trigger("ready.fndtn.orbit")})},f.init()},s=function(e,t,n){var i,r,o=this,s=t.timer_speed,a=e.find("."+t.timer_progress_class),l=-1;this.update_progress=function(e){var t=a.clone();t.attr("style",""),t.css("width",e+"%"),a.replaceWith(t),a=t},this.restart=function(){clearTimeout(r),e.addClass(t.timer_paused_class),l=-1,o.update_progress(0)},this.start=function(){return e.hasClass(t.timer_paused_class)?(l=-1===l?s:l,e.removeClass(t.timer_paused_class),i=(new Date).getTime(),a.animate({width:"100%"},l,"linear"),r=setTimeout(function(){o.restart(),n()},l),void e.trigger("timer-started.fndtn.orbit")):!0},this.stop=function(){if(e.hasClass(t.timer_paused_class))return!0;clearTimeout(r),e.addClass(t.timer_paused_class);var n=(new Date).getTime();l-=n-i;var a=100-l/s*100;o.update_progress(a),e.trigger("timer-stopped.fndtn.orbit")}},a=function(t,n){var i=t.animation_speed,r=1===e("html[dir=rtl]").length,o=r?"marginRight":"marginLeft",s={};s[o]="0%",this.next=function(e,t,n){e.animate({marginLeft:"-100%"},i),t.animate(s,i,function(){e.css(o,"100%"),n()})},this.prev=function(e,t,n){e.animate({marginLeft:"100%"},i),t.css(o,"-100%"),t.animate(s,i,function(){e.css(o,"100%"),n()})}},l=function(t,n){var i=t.animation_speed;1===e("html[dir=rtl]").length;this.next=function(e,t,n){t.css({margin:"0%",opacity:"0.01"}),t.animate({opacity:"1"},i,"linear",function(){e.css("margin","100%"),n()})},this.prev=function(e,t,n){t.css({margin:"0%",opacity:"0.01"}),t.animate({opacity:"1"},i,"linear",function(){e.css("margin","100%"),n()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.5.3",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:r,after_slide_change:r},init:function(e,t,n){this.bindings(t,n)},events:function(e){var t=new o(this.S(e),this.S(e).data("orbit-init"));this.S(e).data(this.name+"-instance",t)},reflow:function(){var e=this;if(e.S(e.scope).is("[data-orbit]")){var t=e.S(e.scope),n=t.data(e.name+"-instance");n.compute_dimensions()}else e.S("[data-orbit]",e.scope).each(function(t,n){var i=e.S(n),r=(e.data_options(i),i.data(e.name+"-instance"));r.compute_dimensions()})}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";function r(e){var t=/fade/i.test(e),n=/pop/i.test(e);return{animate:t||n,pop:n,fade:t}}var o=[];Foundation.libs.reveal={name:"reveal",version:"5.5.3",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",multiple_opened:!1,bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},on_ajax_error:e.noop,bg:e(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(t,n,i){e.extend(!0,this.settings,n,i),this.bindings(n,i)},events:function(e){var t=this,i=t.S;return i(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(e){if(e.preventDefault(),!t.locked){var n=i(this),r=n.data(t.data_attr("reveal-ajax")),o=n.data(t.data_attr("reveal-replace-content"));if(t.locked=!0,"undefined"==typeof r)t.open.call(t,n);else{var s=r===!0?n.attr("href"):r;t.open.call(t,n,{url:s},{replaceContentSel:o})}}}),i(n).on("click.fndtn.reveal",this.close_targets(),function(e){if(e.preventDefault(),!t.locked){var n=i("["+t.attr_name()+"].open").data(t.attr_name(!0)+"-init")||t.settings,r=i(e.target)[0]===i("."+n.bg_class)[0];if(r){if(!n.close_on_background_click)return;e.stopPropagation()}t.locked=!0,t.close.call(t,r?i("["+t.attr_name()+"].open:not(.toback)"):i(this).closest("["+t.attr_name()+"]"))}}),i("["+t.attr_name()+"]",this.scope).length>0?i(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):i(this.scope).on("open.fndtn.reveal","["+t.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+t.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.close_video),!0},key_up_on:function(e){var t=this;return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(e){var n=t.S("["+t.attr_name()+"].open"),i=n.data(t.attr_name(!0)+"-init")||t.settings;i&&27===e.which&&i.close_on_esc&&!t.locked&&t.close.call(t,n)}),!0},key_up_off:function(e){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(n,r){var s,a=this;n?"undefined"!=typeof n.selector?s=a.S("#"+n.data(a.data_attr("reveal-id"))).first():(s=a.S(this.scope),r=n):s=a.S(this.scope);var l=s.data(a.attr_name(!0)+"-init");if(l=l||this.settings,s.hasClass("open")&&n!==i&&n.attr("data-reveal-id")==s.attr("id"))return a.close(s);if(!s.hasClass("open")){var d=a.S("["+a.attr_name()+"].open");"undefined"==typeof s.data("css-top")&&s.data("css-top",parseInt(s.css("top"),10)).data("offset",this.cache_offset(s)),s.attr("tabindex","0").attr("aria-hidden","false"),this.key_up_on(s),s.on("open.fndtn.reveal",function(e){"fndtn.reveal"!==e.namespace}),s.on("open.fndtn.reveal").trigger("open.fndtn.reveal"),d.length<1&&this.toggle_bg(s,!0),"string"==typeof r&&(r={url:r});var c=function(){d.length>0&&(l.multiple_opened?a.to_back(d):a.hide(d,l.css.close)),l.multiple_opened&&o.push(s),a.show(s,l.css.open)};if("undefined"!=typeof r&&r.url){var u="undefined"!=typeof r.success?r.success:null;e.extend(r,{success:function(t,n,i){if(e.isFunction(u)){var r=u(t,n,i);"string"==typeof r&&(t=r)}"undefined"!=typeof options&&"undefined"!=typeof options.replaceContentSel?s.find(options.replaceContentSel).html(t):s.html(t),a.S(s).foundation("section","reflow"),a.S(s).children().foundation(),c()}}),l.on_ajax_error!==e.noop&&e.extend(r,{error:l.on_ajax_error}),e.ajax(r)}else c()}a.S(t).trigger("resize")},close:function(t){var t=t&&t.length?t:this.S(this.scope),n=this.S("["+this.attr_name()+"].open"),i=t.data(this.attr_name(!0)+"-init")||this.settings,r=this;if(n.length>0)if(t.removeAttr("tabindex","0").attr("aria-hidden","true"),this.locked=!0,this.key_up_off(t),t.trigger("close.fndtn.reveal"),(i.multiple_opened&&1===n.length||!i.multiple_opened||t.length>1)&&(r.toggle_bg(t,!1),r.to_front(t)),i.multiple_opened){var s=t.is(":not(.toback)");r.hide(t,i.css.close,i),s?o.pop():o=e.grep(o,function(e){var n=e[0]===t[0];return n&&r.to_front(t),!n}),o.length>0&&r.to_front(o[o.length-1])}else r.hide(n,i.css.close,i)},close_targets:function(){var e="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?e+", ."+this.settings.bg_class:e},toggle_bg:function(t,n){0===this.S("."+this.settings.bg_class).length&&(this.settings.bg=e("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var r=this.settings.bg.filter(":visible").length>0;n!=r&&((n==i?r:!n)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(n,i){if(i){var o=n.data(this.attr_name(!0)+"-init")||this.settings,s=o.root_element,a=this;if(0===n.parent(s).length){var l=n.wrap('<div style="display: none;" />').parent();n.on("closed.fndtn.reveal.wrapped",function(){n.detach().appendTo(l),n.unwrap().unbind("closed.fndtn.reveal.wrapped")}),n.detach().appendTo(s)}var d=r(o.animation);if(d.animate||(this.locked=!1),d.pop){i.top=e(t).scrollTop()-n.data("offset")+"px";var c={top:e(t).scrollTop()+n.data("css-top")+"px",opacity:1};return setTimeout(function(){return n.css(i).animate(c,o.animation_speed,"linear",function(){a.locked=!1,n.trigger("opened.fndtn.reveal")}).addClass("open")},o.animation_speed/2)}if(i.top=e(t).scrollTop()+n.data("css-top")+"px",d.fade){var c={opacity:1};return setTimeout(function(){return n.css(i).animate(c,o.animation_speed,"linear",function(){a.locked=!1,n.trigger("opened.fndtn.reveal")}).addClass("open")},o.animation_speed/2)}return n.css(i).show().css({opacity:1}).addClass("open").trigger("opened.fndtn.reveal")}var o=this.settings;return r(o.animation).fade?n.fadeIn(o.animation_speed/2):(this.locked=!1,n.show())},to_back:function(e){e.addClass("toback")},to_front:function(e){e.removeClass("toback")},hide:function(n,i){if(i){var o=n.data(this.attr_name(!0)+"-init"),s=this;o=o||this.settings;var a=r(o.animation);if(a.animate||(this.locked=!1),a.pop){var l={top:-e(t).scrollTop()-n.data("offset")+"px",opacity:0};return setTimeout(function(){return n.animate(l,o.animation_speed,"linear",function(){s.locked=!1,n.css(i).trigger("closed.fndtn.reveal")}).removeClass("open")},o.animation_speed/2)}if(a.fade){var l={opacity:0};return setTimeout(function(){return n.animate(l,o.animation_speed,"linear",function(){s.locked=!1,n.css(i).trigger("closed.fndtn.reveal")}).removeClass("open")},o.animation_speed/2)}return n.hide().css(i).removeClass("open").trigger("closed.fndtn.reveal")}var o=this.settings;return r(o.animation).fade?n.fadeOut(o.animation_speed/2):n.hide()},close_video:function(t){var n=e(".flex-video",t.target),i=e("iframe",n);i.length>0&&(i.attr("data-src",i[0].src),i.attr("src",i.attr("src")),n.hide())},open_video:function(t){var n=e(".flex-video",t.target),r=n.find("iframe");if(r.length>0){var o=r.attr("data-src");if("string"==typeof o)r[0].src=r.attr("data-src");else{var s=r[0].src;r[0].src=i,r[0].src=s}n.show()}},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},cache_offset:function(e){var t=e.show().height()+parseInt(e.css("top"),10)+e.scrollY;return e.hide(),t},off:function(){e(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.slider={name:"slider",version:"5.5.3",settings:{start:0,end:100,step:1,precision:2,initial:null,display_selector:"",vertical:!1,trigger_input_change:!1,on_change:function(){}},cache:{},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n),this.reflow()},events:function(){var n=this;e(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+n.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(t){n.cache.active||(t.preventDefault(),n.set_active_slider(e(t.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(i){if(n.cache.active)if(i.preventDefault(),e.data(n.cache.active[0],"settings").vertical){var r=0;i.pageY||(r=t.scrollY),n.calculate_position(n.cache.active,n.get_cursor_position(i,"y")+r)}else n.calculate_position(n.cache.active,n.get_cursor_position(i,"x"))}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(i){if(!n.cache.active){var r="slider"===e(i.target).attr("role")?e(i.target):e(i.target).closest(".range-slider").find("[role='slider']");if(r.length&&!r.parent().hasClass("disabled")&&!r.parent().attr("disabled"))if(n.set_active_slider(r),e.data(n.cache.active[0],"settings").vertical){var o=0;i.pageY||(o=t.scrollY),n.calculate_position(n.cache.active,n.get_cursor_position(i,"y")+o)}else n.calculate_position(n.cache.active,n.get_cursor_position(i,"x"))}n.remove_active_slider()}).on("change.fndtn.slider",function(e){n.settings.on_change()}),n.S(t).on("resize.fndtn.slider",n.throttle(function(e){n.reflow()},300)),this.S("["+this.attr_name()+"]").each(function(){var t=e(this),i=t.children(".range-slider-handle")[0],r=n.initialize_settings(i);""!=r.display_selector&&e(r.display_selector).each(function(){e(this).attr("value")&&e(this).off("change").on("change",function(){t.foundation("slider","set_value",e(this).val())})})})},get_cursor_position:function(e,t){var n,i="page"+t.toUpperCase(),r="client"+t.toUpperCase();return"undefined"!=typeof e[i]?n=e[i]:"undefined"!=typeof e.originalEvent[r]?n=e.originalEvent[r]:e.originalEvent.touches&&e.originalEvent.touches[0]&&"undefined"!=typeof e.originalEvent.touches[0][r]?n=e.originalEvent.touches[0][r]:e.currentPoint&&"undefined"!=typeof e.currentPoint[t]&&(n=e.currentPoint[t]),n},set_active_slider:function(e){this.cache.active=e},remove_active_slider:function(){this.cache.active=null},calculate_position:function(t,n){var i=this,r=e.data(t[0],"settings"),o=(e.data(t[0],"handle_l"),e.data(t[0],"handle_o"),e.data(t[0],"bar_l")),s=e.data(t[0],"bar_o");requestAnimationFrame(function(){var e;e=Foundation.rtl&&!r.vertical?i.limit_to((s+o-n)/o,0,1):i.limit_to((n-s)/o,0,1),e=r.vertical?1-e:e;var a=i.normalized_value(e,r.start,r.end,r.step,r.precision);i.set_ui(t,a)})},set_ui:function(t,n){var i=e.data(t[0],"settings"),r=e.data(t[0],"handle_l"),o=e.data(t[0],"bar_l"),s=this.normalized_percentage(n,i.start,i.end),a=s*(o-r)-1,l=100*s,d=t.parent(),c=t.parent().children("input[type=hidden]");Foundation.rtl&&!i.vertical&&(a=-a),a=i.vertical?-a+o-r+1:a,this.set_translate(t,a,i.vertical),i.vertical?t.siblings(".range-slider-active-segment").css("height",l+"%"):t.siblings(".range-slider-active-segment").css("width",l+"%"),d.attr(this.attr_name(),n).trigger("change.fndtn.slider"),c.val(n),i.trigger_input_change&&c.trigger("change.fndtn.slider"),t[0].hasAttribute("aria-valuemin")||t.attr({"aria-valuemin":i.start,"aria-valuemax":i.end}),t.attr("aria-valuenow",n),""!=i.display_selector&&e(i.display_selector).each(function(){this.hasAttribute("value")?e(this).val(n):e(this).text(n)})},normalized_percentage:function(e,t,n){return Math.min(1,(e-t)/(n-t))},normalized_value:function(e,t,n,i,r){var o=n-t,s=e*o,a=(s-s%i)/i,l=s%i,d=l>=.5*i?i:0;return(a*i+d+t).toFixed(r)},set_translate:function(t,n,i){i?e(t).css("-webkit-transform","translateY("+n+"px)").css("-moz-transform","translateY("+n+"px)").css("-ms-transform","translateY("+n+"px)").css("-o-transform","translateY("+n+"px)").css("transform","translateY("+n+"px)"):e(t).css("-webkit-transform","translateX("+n+"px)").css("-moz-transform","translateX("+n+"px)").css("-ms-transform","translateX("+n+"px)").css("-o-transform","translateX("+n+"px)").css("transform","translateX("+n+"px)")},limit_to:function(e,t,n){return Math.min(Math.max(e,t),n)},initialize_settings:function(t){var n,i=e.extend({},this.settings,this.data_options(e(t).parent()));return null===i.precision&&(n=(""+i.step).match(/\.([\d]*)/),i.precision=n&&n[1]?n[1].length:0),i.vertical?(e.data(t,"bar_o",e(t).parent().offset().top),e.data(t,"bar_l",e(t).parent().outerHeight()),e.data(t,"handle_o",e(t).offset().top),e.data(t,"handle_l",e(t).outerHeight())):(e.data(t,"bar_o",e(t).parent().offset().left),e.data(t,"bar_l",e(t).parent().outerWidth()),e.data(t,"handle_o",e(t).offset().left),e.data(t,"handle_l",e(t).outerWidth())),e.data(t,"bar",e(t).parent()),e.data(t,"settings",i)},set_initial_position:function(t){var n=e.data(t.children(".range-slider-handle")[0],"settings"),i="number"!=typeof n.initial||isNaN(n.initial)?Math.floor(.5*(n.end-n.start)/n.step)*n.step+n.start:n.initial,r=t.children(".range-slider-handle");this.set_ui(r,i)},set_value:function(t){var n=this;e("["+n.attr_name()+"]",this.scope).each(function(){e(this).attr(n.attr_name(),t)}),e(this.scope).attr(n.attr_name())&&e(this.scope).attr(n.attr_name(),t),n.reflow()},reflow:function(){var t=this;t.S("["+this.attr_name()+"]").each(function(){var n=e(this).children(".range-slider-handle")[0],i=e(this).attr(t.attr_name());t.initialize_settings(n),i?t.set_ui(e(n),parseFloat(i)):t.set_initial_position(e(this))})}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.tab={name:"tab",version:"5.5.3",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(e,t,n){var i=this,r=this.S;r("["+this.attr_name()+"] > .active > a",this.scope).each(function(){i.default_tab_hashes.push(this.hash)}),this.bindings(t,n),this.handle_location_hash_change()},events:function(){var e=this,n=this.S,i=function(t,i){var r=n(i).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");if(!r.is_hover||Modernizr.touch){var o=t.keyCode||t.which;9!==o&&(t.preventDefault(),t.stopPropagation()),e.toggle_active_tab(n(i).parent())}};n(this.scope).off(".tab").on("keydown.fndtn.tab","["+this.attr_name()+"] > * > a",function(e){var t=e.keyCode||e.which;if(13===t||32===t){var n=this;i(e,n)}}).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",function(e){var t=this;i(e,t)}).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(t){var i=n(this).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");i.is_hover&&e.toggle_active_tab(n(this).parent())}),n(t).on("hashchange.fndtn.tab",function(t){t.preventDefault(),e.handle_location_hash_change()})},handle_location_hash_change:function(){var t=this,n=this.S;n("["+this.attr_name()+"]",this.scope).each(function(){var r=n(this).data(t.attr_name(!0)+"-init");if(r.deep_linking){var o;if(o=r.scroll_to_content?t.scope.location.hash:t.scope.location.hash.replace("fndtn-",""),""!=o){var s=n(o);if(s.hasClass("content")&&s.parent().hasClass("tabs-content"))t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+o+"]").parent());else{var a=s.closest(".content").attr("id");a!=i&&t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href=#"+a+"]").parent(),o)}}else for(var l=0;l<t.default_tab_hashes.length;l++)t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+t.default_tab_hashes[l]+"]").parent())}})},toggle_active_tab:function(r,o){var s=this,a=s.S,l=r.closest("["+this.attr_name()+"]"),d=r.find("a"),c=r.children("a").first(),u="#"+c.attr("href").split("#")[1],p=a(u),A=r.siblings(),h=l.data(this.attr_name(!0)+"-init"),f=function(t){var i,r=e(this),o=e(this).parents("li").prev().children('[role="tab"]'),s=e(this).parents("li").next().children('[role="tab"]');switch(t.keyCode){case 37:i=o;break;case 39:i=s;break;default:i=!1}i.length&&(r.attr({tabindex:"-1","aria-selected":null}),i.attr({tabindex:"0","aria-selected":!0}).focus()),e('[role="tabpanel"]').attr("aria-hidden","true"),e("#"+e(n.activeElement).attr("href").substring(1)).attr("aria-hidden",null)},g=function(e){var n=h.scroll_to_content?s.default_tab_hashes[0]:"fndtn-"+s.default_tab_hashes[0].replace("#","");(e!==n||t.location.hash)&&(t.location.hash=e)};c.data("tab-content")&&(u="#"+c.data("tab-content").split("#")[1],p=a(u)),h.deep_linking&&(h.scroll_to_content?(g(o||u),o==i||o==u?r.parent()[0].scrollIntoView():a(u)[0].scrollIntoView()):g(o!=i?"fndtn-"+o.replace("#",""):"fndtn-"+u.replace("#",""))),r.addClass(h.active_class).triggerHandler("opened"),d.attr({"aria-selected":"true",tabindex:0}),A.removeClass(h.active_class),A.find("a").attr({"aria-selected":"false"}),p.siblings().removeClass(h.active_class).attr({"aria-hidden":"true"}),p.addClass(h.active_class).attr("aria-hidden","false").removeAttr("tabindex"),h.callback(r),p.triggerHandler("toggled",[p]),l.triggerHandler("toggled",[r]),d.off("keydown").on("keydown",f)},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.5.3",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,fade_in_duration:150,fade_out_duration:150,show_on:"all",tip_template:function(e,t){return'<span data-selector="'+e+'" id="'+e+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+t+'<span class="nub"></span></span>'}},cache:{},init:function(e,t,n){Foundation.inherit(this,"random_str"),this.bindings(t,n)},should_show:function(t,n){var i=e.extend({},this.settings,this.data_options(t));return"all"===i.show_on?!0:this.small()&&"small"===i.show_on?!0:this.medium()&&"medium"===i.show_on?!0:this.large()&&"large"===i.show_on?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(t){function n(e,t,n){e.timer||(n?(e.timer=null,r.showTip(t)):e.timer=setTimeout(function(){e.timer=null,r.showTip(t)}.bind(e),r.settings.hover_delay))}function i(e,t){e.timer&&(clearTimeout(e.timer),e.timer=null),r.hide(t)}var r=this,o=r.S;r.create(this.S(t)),e(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(t){var s=o(this),a=e.extend({},r.settings,r.data_options(s)),l=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&o(t.target).is("a"))return!1;if(/mouse/i.test(t.type)&&r.ie_touch(t))return!1;if(s.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&t.preventDefault(),r.hide(s);else{if(a.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type))return;if(!a.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&(t.preventDefault(),o(a.tooltip_class+".open").hide(),l=!0,e(".open["+r.attr_name()+"]").length>0)){var d=o(e(".open["+r.attr_name()+"]")[0]);r.hide(d)}/enter|over/i.test(t.type)?n(this,s):"mouseout"===t.type||"mouseleave"===t.type?i(this,s):n(this,s,!0)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(t){return/mouse/i.test(t.type)&&r.ie_touch(t)?!1:void(("touch"!=e(this).data("tooltip-open-event-type")||"mouseleave"!=t.type)&&("mouse"==e(this).data("tooltip-open-event-type")&&/MSPointerDown|touchstart/i.test(t.type)?r.convert_to_touch(e(this)):i(this,e(this))))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(e){i(this,o(this))})},ie_touch:function(e){return!1},showTip:function(e){var t=this.getTip(e);return this.should_show(e,t)?this.show(e):void 0},getTip:function(t){var n=this.selector(t),i=e.extend({},this.settings,this.data_options(t)),r=null;return n&&(r=this.S('span[data-selector="'+n+'"]'+i.tooltip_class)),"object"==typeof r?r:!1},selector:function(e){var t=e.attr(this.attr_name())||e.attr("data-selector");return"string"!=typeof t&&(t=this.random_str(6),e.attr("data-selector",t).attr("aria-describedby",t)),t},create:function(n){var i=this,r=e.extend({},this.settings,this.data_options(n)),o=this.settings.tip_template;"string"==typeof r.tip_template&&t.hasOwnProperty(r.tip_template)&&(o=t[r.tip_template]);var s=e(o(this.selector(n),e("<div></div>").html(n.attr("title")).html())),a=this.inheritable_classes(n);s.addClass(a).appendTo(r.append_to),Modernizr.touch&&(s.append('<span class="tap-to-close">'+r.touch_close_text+"</span>"),s.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(e){i.hide(n)})),n.removeAttr("title").attr("title","")},reposition:function(t,n,i){var r,o,s,a,l;n.css("visibility","hidden").show(),r=t.data("width"),o=n.children(".nub"),s=o.outerHeight(),a=o.outerWidth(),this.small()?n.css({width:"100%"}):n.css({width:r?r:"auto"}),l=function(e,t,n,i,r,o){return e.css({top:t?t:"auto",bottom:i?i:"auto",left:r?r:"auto",right:n?n:"auto"}).end()};var d=t.offset().top,c=t.offset().left,u=t.outerHeight();if(l(n,d+u+10,"auto","auto",c),this.small())l(n,d+u+10,"auto","auto",12.5,e(this.scope).width()),n.addClass("tip-override"),l(o,-s,"auto","auto",c);else{Foundation.rtl&&(o.addClass("rtl"),c=c+t.outerWidth()-n.outerWidth()),l(n,d+u+10,"auto","auto",c),o.attr("style")&&o.removeAttr("style"),n.removeClass("tip-override");var p=n.outerHeight();i&&i.indexOf("tip-top")>-1?(Foundation.rtl&&o.addClass("rtl"),l(n,d-p,"auto","auto",c).removeClass("tip-override")):i&&i.indexOf("tip-left")>-1?(l(n,d+u/2-p/2,"auto","auto",c-n.outerWidth()-s).removeClass("tip-override"),o.removeClass("rtl")):i&&i.indexOf("tip-right")>-1&&(l(n,d+u/2-p/2,"auto","auto",c+t.outerWidth()+s).removeClass("tip-override"),o.removeClass("rtl"))}n.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(t){var n=e.extend({},this.settings,this.data_options(t)),i=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(n.additional_inheritable_classes),r=t.attr("class"),o=r?e.map(r.split(" "),function(t,n){return-1!==e.inArray(t,i)?t:void 0}).join(" "):"";return e.trim(o)},convert_to_touch:function(t){var n=this,i=n.getTip(t),r=e.extend({},n.settings,n.data_options(t));0===i.find(".tap-to-close").length&&(i.append('<span class="tap-to-close">'+r.touch_close_text+"</span>"),i.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(e){n.hide(t)})),t.data("tooltip-open-event-type","touch")},show:function(e){var t=this.getTip(e);"touch"==e.data("tooltip-open-event-type")&&this.convert_to_touch(e),this.reposition(e,t,e.attr("class")),e.addClass("open"),t.fadeIn(this.settings.fade_in_duration)},hide:function(e){var t=this.getTip(e);t.fadeOut(this.settings.fade_out_duration,function(){t.find(".tap-to-close").remove(),t.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),e.removeClass("open")})},off:function(){var t=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(n){e("["+t.attr_name()+"]").eq(n).attr("title",e(this).text());
}).remove()},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.5.3",settings:{index:0,start_offset:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all",dropdown_autoclose:!0},init:function(t,n,i){Foundation.inherit(this,"add_custom_rule register_media throttle");var r=this;r.register_media("topbar","foundation-mq-topbar"),this.bindings(n,i),r.S("["+this.attr_name()+"]",this.scope).each(function(){var t=e(this),n=t.data(r.attr_name(!0)+"-init");r.S("section, .top-bar-section",this);t.data("index",0);var i=t.parent();i.hasClass("fixed")||r.is_sticky(t,i,n)?(r.settings.sticky_class=n.sticky_class,r.settings.sticky_topbar=t,t.data("height",i.outerHeight()),t.data("stickyoffset",i.offset().top)):t.data("height",t.outerHeight()),n.assembled||r.assemble(t),n.is_hover?r.S(".has-dropdown",t).addClass("not-click"):r.S(".has-dropdown",t).removeClass("not-click"),r.add_custom_rule(".f-topbar-fixed { padding-top: "+t.data("height")+"px }"),i.hasClass("fixed")&&r.S("body").addClass("f-topbar-fixed")})},is_sticky:function(e,t,n){var i=t.hasClass(n.sticky_class),r=matchMedia(Foundation.media_queries.small).matches,o=matchMedia(Foundation.media_queries.medium).matches,s=matchMedia(Foundation.media_queries.large).matches;return i&&"all"===n.sticky_on?!0:i&&this.small()&&-1!==n.sticky_on.indexOf("small")&&r&&!o&&!s?!0:i&&this.medium()&&-1!==n.sticky_on.indexOf("medium")&&r&&o&&!s?!0:i&&this.large()&&-1!==n.sticky_on.indexOf("large")&&r&&o&&s?!0:!1},toggle:function(n){var i,r=this;i=n?r.S(n).closest("["+this.attr_name()+"]"):r.S("["+this.attr_name()+"]");var o=i.data(this.attr_name(!0)+"-init"),s=r.S("section, .top-bar-section",i);r.breakpoint()&&(r.rtl?(s.css({right:"0%"}),e(">.name",s).css({right:"100%"})):(s.css({left:"0%"}),e(">.name",s).css({left:"100%"})),r.S("li.moved",s).removeClass("moved"),i.data("index",0),i.toggleClass("expanded").css("height","")),o.scrolltop?i.hasClass("expanded")?i.parent().hasClass("fixed")&&(o.scrolltop?(i.parent().removeClass("fixed"),i.addClass("fixed"),r.S("body").removeClass("f-topbar-fixed"),t.scrollTo(0,0)):i.parent().removeClass("expanded")):i.hasClass("fixed")&&(i.parent().addClass("fixed"),i.removeClass("fixed"),r.S("body").addClass("f-topbar-fixed")):(r.is_sticky(i,i.parent(),o)&&i.parent().addClass("fixed"),i.parent().hasClass("fixed")&&(i.hasClass("expanded")?(i.addClass("fixed"),i.parent().addClass("expanded"),r.S("body").addClass("f-topbar-fixed")):(i.removeClass("fixed"),i.parent().removeClass("expanded"),r.update_sticky_positioning())))},timer:null,events:function(n){var i=this,r=this.S;r(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(e){e.preventDefault(),i.toggle(this)}).on("click.fndtn.topbar contextmenu.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(t){var n=e(this).closest("li"),r=n.closest("["+i.attr_name()+"]"),o=r.data(i.attr_name(!0)+"-init");if(o.dropdown_autoclose&&o.is_hover){var s=e(this).closest(".hover");s.removeClass("hover")}!i.breakpoint()||n.hasClass("back")||n.hasClass("has-dropdown")||i.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(t){var n=r(this),o=r(t.target),s=n.closest("["+i.attr_name()+"]"),a=s.data(i.attr_name(!0)+"-init");return o.data("revealId")?void i.toggle():void(i.breakpoint()||(!a.is_hover||Modernizr.touch)&&(t.stopImmediatePropagation(),n.hasClass("hover")?(n.removeClass("hover").find("li").removeClass("hover"),n.parents("li.hover").removeClass("hover")):(n.addClass("hover"),e(n).siblings().removeClass("hover"),"A"===o[0].nodeName&&o.parent().hasClass("has-dropdown")&&t.preventDefault())))}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(e){if(i.breakpoint()){e.preventDefault();var t=r(this),n=t.closest("["+i.attr_name()+"]"),o=n.find("section, .top-bar-section"),s=(t.next(".dropdown").outerHeight(),t.closest("li"));n.data("index",n.data("index")+1),s.addClass("moved"),i.rtl?(o.css({right:-(100*n.data("index"))+"%"}),o.find(">.name").css({right:100*n.data("index")+"%"})):(o.css({left:-(100*n.data("index"))+"%"}),o.find(">.name").css({left:100*n.data("index")+"%"})),n.css("height",t.siblings("ul").outerHeight(!0)+n.data("height"))}}),r(t).off(".topbar").on("resize.fndtn.topbar",i.throttle(function(){i.resize.call(i)},50)).trigger("resize.fndtn.topbar").load(function(){r(this).trigger("resize.fndtn.topbar")}),r("body").off(".topbar").on("click.fndtn.topbar",function(e){var t=r(e.target).closest("li").closest("li.hover");t.length>0||r("["+i.attr_name()+"] li.hover").removeClass("hover")}),r(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(e){e.preventDefault();var t=r(this),n=t.closest("["+i.attr_name()+"]"),o=n.find("section, .top-bar-section"),s=(n.data(i.attr_name(!0)+"-init"),t.closest("li.moved")),a=s.parent();n.data("index",n.data("index")-1),i.rtl?(o.css({right:-(100*n.data("index"))+"%"}),o.find(">.name").css({right:100*n.data("index")+"%"})):(o.css({left:-(100*n.data("index"))+"%"}),o.find(">.name").css({left:100*n.data("index")+"%"})),0===n.data("index")?n.css("height",""):n.css("height",a.outerHeight(!0)+n.data("height")),setTimeout(function(){s.removeClass("moved")},300)}),r(this.scope).find(".dropdown a").focus(function(){e(this).parents(".has-dropdown").addClass("hover")}).blur(function(){e(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var e=this;e.S("["+this.attr_name()+"]").each(function(){var t,i=e.S(this),r=i.data(e.attr_name(!0)+"-init"),o=i.parent("."+e.settings.sticky_class);if(!e.breakpoint()){var s=i.hasClass("expanded");i.css("height","").removeClass("expanded").find("li").removeClass("hover"),s&&e.toggle(i)}e.is_sticky(i,o,r)&&(o.hasClass("fixed")?(o.removeClass("fixed"),t=o.offset().top,e.S(n.body).hasClass("f-topbar-fixed")&&(t-=i.data("height")),i.data("stickyoffset",t),o.addClass("fixed")):(t=o.offset().top,i.data("stickyoffset",t)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(t){var n=this,i=t.data(this.attr_name(!0)+"-init"),r=n.S("section, .top-bar-section",t);r.detach(),n.S(".has-dropdown>a",r).each(function(){var t,r=n.S(this),o=r.siblings(".dropdown"),s=r.attr("href");o.find(".title.back").length||(t=e(1==i.mobile_show_parent_link&&s?'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="'+s+'">'+r.html()+"</a></li>":'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),1==i.custom_back_text?e("h5>a",t).html(i.back_text):e("h5>a",t).html("&laquo; "+r.html()),o.prepend(t))}),r.appendTo(t),this.sticky(),this.assembled(t)},assembled:function(t){t.data(this.attr_name(!0),e.extend({},t.data(this.attr_name(!0)),{assembled:!0}))},height:function(t){var n=0,i=this;return e("> li",t).each(function(){n+=i.S(this).outerHeight(!0)}),n},sticky:function(){var e=this;this.S(t).on("scroll",function(){e.update_sticky_positioning()})},update_sticky_positioning:function(){var e="."+this.settings.sticky_class,n=this.S(t),i=this;if(i.settings.sticky_topbar&&i.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var r=this.settings.sticky_topbar.data("stickyoffset")+this.settings.start_offset;i.S(e).hasClass("expanded")||(n.scrollTop()>r?i.S(e).hasClass("fixed")||(i.S(e).addClass("fixed"),i.S("body").addClass("f-topbar-fixed")):n.scrollTop()<=r&&i.S(e).hasClass("fixed")&&(i.S(e).removeClass("fixed"),i.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(t).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var t=window.Slick||{};t=function(){function t(t,i){var r,o=this;o.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,n){return e('<button type="button" />').text(n+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},o.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(o,o.initials),o.activeBreakpoint=null,o.animType=null,o.animProp=null,o.breakpoints=[],o.breakpointSettings=[],o.cssTransitions=!1,o.focussed=!1,o.interrupted=!1,o.hidden="hidden",o.paused=!0,o.positionProp=null,o.respondTo=null,o.rowCount=1,o.shouldClick=!0,o.$slider=e(t),o.$slidesCache=null,o.transformType=null,o.transitionType=null,o.visibilityChange="visibilitychange",o.windowWidth=0,o.windowTimer=null,r=e(t).data("slick")||{},o.options=e.extend({},o.defaults,i,r),o.currentSlide=o.options.initialSlide,o.originalSettings=o.options,"undefined"!=typeof document.mozHidden?(o.hidden="mozHidden",o.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(o.hidden="webkitHidden",o.visibilityChange="webkitvisibilitychange"),o.autoPlay=e.proxy(o.autoPlay,o),o.autoPlayClear=e.proxy(o.autoPlayClear,o),o.autoPlayIterator=e.proxy(o.autoPlayIterator,o),o.changeSlide=e.proxy(o.changeSlide,o),o.clickHandler=e.proxy(o.clickHandler,o),o.selectHandler=e.proxy(o.selectHandler,o),o.setPosition=e.proxy(o.setPosition,o),o.swipeHandler=e.proxy(o.swipeHandler,o),o.dragHandler=e.proxy(o.dragHandler,o),o.keyHandler=e.proxy(o.keyHandler,o),o.instanceUid=n++,o.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,o.registerBreakpoints(),o.init(!0)}var n=0;return t}(),t.prototype.activateADA=function(){var e=this;e.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.addSlide=t.prototype.slickAdd=function(t,n,i){var r=this;if("boolean"==typeof n)i=n,n=null;else if(0>n||n>=r.slideCount)return!1;r.unload(),"number"==typeof n?0===n&&0===r.$slides.length?e(t).appendTo(r.$slideTrack):i?e(t).insertBefore(r.$slides.eq(n)):e(t).insertAfter(r.$slides.eq(n)):i===!0?e(t).prependTo(r.$slideTrack):e(t).appendTo(r.$slideTrack),r.$slides=r.$slideTrack.children(this.options.slide),r.$slideTrack.children(this.options.slide).detach(),r.$slideTrack.append(r.$slides),r.$slides.each(function(t,n){e(n).attr("data-slick-index",t)}),r.$slidesCache=r.$slides,r.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,n){var i={},r=this;r.animateHeight(),r.options.rtl===!0&&r.options.vertical===!1&&(t=-t),r.transformsEnabled===!1?r.options.vertical===!1?r.$slideTrack.animate({left:t},r.options.speed,r.options.easing,n):r.$slideTrack.animate({top:t},r.options.speed,r.options.easing,n):r.cssTransitions===!1?(r.options.rtl===!0&&(r.currentLeft=-r.currentLeft),e({animStart:r.currentLeft}).animate({animStart:t},{duration:r.options.speed,easing:r.options.easing,step:function(e){e=Math.ceil(e),r.options.vertical===!1?(i[r.animType]="translate("+e+"px, 0px)",r.$slideTrack.css(i)):(i[r.animType]="translate(0px,"+e+"px)",r.$slideTrack.css(i))},complete:function(){n&&n.call()}})):(r.applyTransition(),t=Math.ceil(t),r.options.vertical===!1?i[r.animType]="translate3d("+t+"px, 0px, 0px)":i[r.animType]="translate3d(0px,"+t+"px, 0px)",r.$slideTrack.css(i),n&&setTimeout(function(){r.disableTransition(),n.call()},r.options.speed))},t.prototype.getNavTarget=function(){var t=this,n=t.options.asNavFor;return n&&null!==n&&(n=e(n).not(t.$slider)),n},t.prototype.asNavFor=function(t){var n=this,i=n.getNavTarget();null!==i&&"object"==typeof i&&i.each(function(){var n=e(this).slick("getSlick");n.unslicked||n.slideHandler(t,!0)})},t.prototype.applyTransition=function(e){var t=this,n={};t.options.fade===!1?n[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:n[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,t.options.fade===!1?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(e.options.infinite===!1&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1===0&&(e.direction=1))),e.slideHandler(t))},t.prototype.buildArrows=function(){var t=this;t.options.arrows===!0&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),t.options.infinite!==!0&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,n,i=this;if(i.options.dots===!0&&i.slideCount>i.options.slidesToShow){for(i.$slider.addClass("slick-dotted"),n=e("<ul />").addClass(i.options.dotsClass),t=0;t<=i.getDotCount();t+=1)n.append(e("<li />").append(i.options.customPaging.call(this,i,t)));i.$dots=n.appendTo(i.options.appendDots),i.$dots.find("li").first().addClass("slick-active")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,n){e(n).attr("data-slick-index",t).data("originalStyling",e(n).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),(t.options.centerMode===!0||t.options.swipeToSlide===!0)&&(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.options.draggable===!0&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,n,i,r,o,s,a=this;if(i=document.createDocumentFragment(),o=a.$slider.children(),a.options.rows>0){for(s=a.options.slidesPerRow*a.options.rows,r=Math.ceil(o.length/s),e=0;r>e;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var d=document.createElement("div");for(n=0;n<a.options.slidesPerRow;n++){var c=e*s+(t*a.options.slidesPerRow+n);o.get(c)&&d.appendChild(o.get(c))}l.appendChild(d)}i.appendChild(l)}a.$slider.empty().append(i),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,n){var i,r,o,s=this,a=!1,l=s.$slider.width(),d=window.innerWidth||e(window).width();if("window"===s.respondTo?o=d:"slider"===s.respondTo?o=l:"min"===s.respondTo&&(o=Math.min(d,l)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){r=null;for(i in s.breakpoints)s.breakpoints.hasOwnProperty(i)&&(s.originalSettings.mobileFirst===!1?o<s.breakpoints[i]&&(r=s.breakpoints[i]):o>s.breakpoints[i]&&(r=s.breakpoints[i]));null!==r?null!==s.activeBreakpoint?(r!==s.activeBreakpoint||n)&&(s.activeBreakpoint=r,"unslick"===s.breakpointSettings[r]?s.unslick(r):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[r]),t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=r):(s.activeBreakpoint=r,"unslick"===s.breakpointSettings[r]?s.unslick(r):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[r]),t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=r):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t),a=r),t||a===!1||s.$slider.trigger("breakpoint",[s,a])}},t.prototype.changeSlide=function(t,n){var i,r,o,s=this,a=e(t.currentTarget);switch(a.is("a")&&t.preventDefault(),a.is("li")||(a=a.closest("li")),o=s.slideCount%s.options.slidesToScroll!==0,i=o?0:(s.slideCount-s.currentSlide)%s.options.slidesToScroll,t.data.message){case"previous":r=0===i?s.options.slidesToScroll:s.options.slidesToShow-i,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide-r,!1,n);break;case"next":r=0===i?s.options.slidesToScroll:i,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide+r,!1,n);break;case"index":var l=0===t.data.index?0:t.data.index||a.index()*s.options.slidesToScroll;s.slideHandler(s.checkNavigable(l),!1,n),a.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,n,i=this;if(t=i.getNavigableIndexes(),n=0,e>t[t.length-1])e=t[t.length-1];else for(var r in t){if(e<t[r]){e=n;break}n=t[r]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&(e("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",e.proxy(t.interrupt,t,!0)).off("mouseleave.slick",e.proxy(t.interrupt,t,!1)),t.options.accessibility===!0&&t.$dots.off("keydown.slick",t.keyHandler)),t.$slider.off("focus.slick blur.slick"),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide),t.options.accessibility===!0&&(t.$prevArrow&&t.$prevArrow.off("keydown.slick",t.keyHandler),t.$nextArrow&&t.$nextArrow.off("keydown.slick",t.keyHandler))),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),t.options.accessibility===!0&&t.$list.off("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>0&&(e=t.$slides.children().children(),e.removeAttr("style"),t.$slider.empty().append(e))},t.prototype.clickHandler=function(e){var t=this;t.shouldClick===!1&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var n=this;n.autoPlayClear(),n.touchObject={},n.cleanUpEvents(),e(".slick-cloned",n.$slider).detach(),n.$dots&&n.$dots.remove(),n.$prevArrow&&n.$prevArrow.length&&(n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.remove()),n.$nextArrow&&n.$nextArrow.length&&(n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.remove()),n.$slides&&(n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){e(this).attr("style",e(this).data("originalStyling"))}),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.detach(),n.$list.detach(),n.$slider.append(n.$slides)),n.cleanUpRows(),n.$slider.removeClass("slick-slider"),n.$slider.removeClass("slick-initialized"),n.$slider.removeClass("slick-dotted"),n.unslicked=!0,t||n.$slider.trigger("destroy",[n])},t.prototype.disableTransition=function(e){var t=this,n={};n[t.transitionType]="",t.options.fade===!1?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.fadeSlide=function(e,t){var n=this;n.cssTransitions===!1?(n.$slides.eq(e).css({zIndex:n.options.zIndex}),n.$slides.eq(e).animate({opacity:1},n.options.speed,n.options.easing,t)):(n.applyTransition(e),n.$slides.eq(e).css({opacity:1,zIndex:n.options.zIndex}),t&&setTimeout(function(){n.disableTransition(e),t.call()},n.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;t.cssTransitions===!1?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(n){n.stopImmediatePropagation();var i=e(this);setTimeout(function(){t.options.pauseOnFocus&&(t.focussed=i.is(":focus"),t.autoPlay())},0)})},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){var e=this;return e.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,n=0,i=0;if(e.options.infinite===!0)if(e.slideCount<=e.options.slidesToShow)++i;else for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(e.options.centerMode===!0)i=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else i=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return i-1},t.prototype.getLeft=function(e){var t,n,i,r,o=this,s=0;return o.slideOffset=0,n=o.$slides.first().outerHeight(!0),o.options.infinite===!0?(o.slideCount>o.options.slidesToShow&&(o.slideOffset=o.slideWidth*o.options.slidesToShow*-1,r=-1,o.options.vertical===!0&&o.options.centerMode===!0&&(2===o.options.slidesToShow?r=-1.5:1===o.options.slidesToShow&&(r=-2)),s=n*o.options.slidesToShow*r),o.slideCount%o.options.slidesToScroll!==0&&e+o.options.slidesToScroll>o.slideCount&&o.slideCount>o.options.slidesToShow&&(e>o.slideCount?(o.slideOffset=(o.options.slidesToShow-(e-o.slideCount))*o.slideWidth*-1,s=(o.options.slidesToShow-(e-o.slideCount))*n*-1):(o.slideOffset=o.slideCount%o.options.slidesToScroll*o.slideWidth*-1,s=o.slideCount%o.options.slidesToScroll*n*-1))):e+o.options.slidesToShow>o.slideCount&&(o.slideOffset=(e+o.options.slidesToShow-o.slideCount)*o.slideWidth,s=(e+o.options.slidesToShow-o.slideCount)*n),o.slideCount<=o.options.slidesToShow&&(o.slideOffset=0,s=0),o.options.centerMode===!0&&o.slideCount<=o.options.slidesToShow?o.slideOffset=o.slideWidth*Math.floor(o.options.slidesToShow)/2-o.slideWidth*o.slideCount/2:o.options.centerMode===!0&&o.options.infinite===!0?o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)-o.slideWidth:o.options.centerMode===!0&&(o.slideOffset=0,o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)),t=o.options.vertical===!1?e*o.slideWidth*-1+o.slideOffset:e*n*-1+s,o.options.variableWidth===!0&&(i=o.slideCount<=o.options.slidesToShow||o.options.infinite===!1?o.$slideTrack.children(".slick-slide").eq(e):o.$slideTrack.children(".slick-slide").eq(e+o.options.slidesToShow),t=o.options.rtl===!0?i[0]?-1*(o.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,o.options.centerMode===!0&&(i=o.slideCount<=o.options.slidesToShow||o.options.infinite===!1?o.$slideTrack.children(".slick-slide").eq(e):o.$slideTrack.children(".slick-slide").eq(e+o.options.slidesToShow+1),t=o.options.rtl===!0?i[0]?-1*(o.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,t+=(o.$list.width()-i.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){var t=this;return t.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,n=0,i=0,r=[];for(t.options.infinite===!1?e=t.slideCount:(n=-1*t.options.slidesToScroll,i=-1*t.options.slidesToScroll,e=2*t.slideCount);e>n;)r.push(n),n=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return r},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,n,i,r=this;return i=r.options.centerMode===!0?r.slideWidth*Math.floor(r.options.slidesToShow/2):0,r.options.swipeToSlide===!0?(r.$slideTrack.find(".slick-slide").each(function(t,o){return o.offsetLeft-i+e(o).outerWidth()/2>-1*r.swipeLeft?(n=o,!1):void 0}),t=Math.abs(e(n).attr("data-slick-index")-r.currentSlide)||1):r.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){var n=this;n.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var n=this;e(n.$slider).hasClass("slick-initialized")||(e(n.$slider).addClass("slick-initialized"),n.buildRows(),n.buildOut(),n.setProps(),n.startLoad(),n.loadSlider(),n.initializeEvents(),n.updateArrows(),n.updateDots(),n.checkResponsive(!0),n.focusHandler()),t&&n.$slider.trigger("init",[n]),n.options.accessibility===!0&&n.initADA(),n.options.autoplay&&(n.paused=!1,n.autoPlay())},t.prototype.initADA=function(){var t=this,n=Math.ceil(t.slideCount/t.options.slidesToShow),i=t.getNavigableIndexes().filter(function(e){return e>=0&&e<t.slideCount});t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==t.$dots&&(t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n){var r=i.indexOf(n);if(e(this).attr({role:"tabpanel",id:"slick-slide"+t.instanceUid+n,tabindex:-1}),-1!==r){var o="slick-slide-control"+t.instanceUid+r;e("#"+o).length&&e(this).attr({"aria-describedby":o})}}),t.$dots.attr("role","tablist").find("li").each(function(r){var o=i[r];e(this).attr({role:"presentation"}),e(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+t.instanceUid+r,"aria-controls":"slick-slide"+t.instanceUid+o,"aria-label":r+1+" of "+n,"aria-selected":null,tabindex:"-1"})}).eq(t.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var r=t.currentSlide,o=r+t.options.slidesToShow;o>r;r++)t.options.focusOnChange?t.$slides.eq(r).attr({tabindex:"0"}):t.$slides.eq(r).removeAttr("tabindex");t.activateADA()},t.prototype.initArrowEvents=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide),e.options.accessibility===!0&&(e.$prevArrow.on("keydown.slick",e.keyHandler),e.$nextArrow.on("keydown.slick",e.keyHandler)))},t.prototype.initDotEvents=function(){var t=this;t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&(e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),t.options.accessibility===!0&&t.$dots.on("keydown.slick",t.keyHandler)),t.options.dots===!0&&t.options.pauseOnDotsHover===!0&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.interrupt,t,!0)).on("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.interrupt,t,!1)))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),t.options.accessibility===!0&&t.$list.on("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(t.setPosition)},t.prototype.initUI=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&t.options.accessibility===!0?t.changeSlide({data:{message:t.options.rtl===!0?"next":"previous"}}):39===e.keyCode&&t.options.accessibility===!0&&t.changeSlide({data:{message:t.options.rtl===!0?"previous":"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each(function(){var t=e(this),n=e(this).attr("data-lazy"),i=e(this).attr("data-srcset"),r=e(this).attr("data-sizes")||s.$slider.attr("data-sizes"),o=document.createElement("img");o.onload=function(){t.animate({opacity:0},100,function(){i&&(t.attr("srcset",i),r&&t.attr("sizes",r)),t.attr("src",n).animate({opacity:1},200,function(){t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),s.$slider.trigger("lazyLoaded",[s,t,n])})},o.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,t,n])},o.src=n})}var n,i,r,o,s=this;if(s.options.centerMode===!0?s.options.infinite===!0?(r=s.currentSlide+(s.options.slidesToShow/2+1),o=r+s.options.slidesToShow+2):(r=Math.max(0,s.currentSlide-(s.options.slidesToShow/2+1)),o=2+(s.options.slidesToShow/2+1)+s.currentSlide):(r=s.options.infinite?s.options.slidesToShow+s.currentSlide:s.currentSlide,o=Math.ceil(r+s.options.slidesToShow),s.options.fade===!0&&(r>0&&r--,o<=s.slideCount&&o++)),n=s.$slider.find(".slick-slide").slice(r,o),"anticipated"===s.options.lazyLoad)for(var a=r-1,l=o,d=s.$slider.find(".slick-slide"),c=0;c<s.options.slidesToScroll;c++)0>a&&(a=s.slideCount-1),n=n.add(d.eq(a)),n=n.add(d.eq(l)),a--,l++;t(n),s.slideCount<=s.options.slidesToShow?(i=s.$slider.find(".slick-slide"),t(i)):s.currentSlide>=s.slideCount-s.options.slidesToShow?(i=s.$slider.find(".slick-cloned").slice(0,s.options.slidesToShow),t(i)):0===s.currentSlide&&(i=s.$slider.find(".slick-cloned").slice(-1*s.options.slidesToShow),
t(i))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){var e=this;e.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.checkResponsive(),e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},t.prototype.postSlide=function(t){var n=this;if(!n.unslicked&&(n.$slider.trigger("afterChange",[n,t]),n.animating=!1,n.slideCount>n.options.slidesToShow&&n.setPosition(),n.swipeLeft=null,n.options.autoplay&&n.autoPlay(),n.options.accessibility===!0&&(n.initADA(),n.options.focusOnChange))){var i=e(n.$slides.get(n.currentSlide));i.attr("tabindex",0).focus()}},t.prototype.prev=t.prototype.slickPrev=function(){var e=this;e.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(t){t=t||1;var n,i,r,o,s,a=this,l=e("img[data-lazy]",a.$slider);l.length?(n=l.first(),i=n.attr("data-lazy"),r=n.attr("data-srcset"),o=n.attr("data-sizes")||a.$slider.attr("data-sizes"),s=document.createElement("img"),s.onload=function(){r&&(n.attr("srcset",r),o&&n.attr("sizes",o)),n.attr("src",i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),a.options.adaptiveHeight===!0&&a.setPosition(),a.$slider.trigger("lazyLoaded",[a,n,i]),a.progressiveLazyLoad()},s.onerror=function(){3>t?setTimeout(function(){a.progressiveLazyLoad(t+1)},500):(n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,n,i]),a.progressiveLazyLoad())},s.src=i):a.$slider.trigger("allImagesLoaded",[a])},t.prototype.refresh=function(t){var n,i,r=this;i=r.slideCount-r.options.slidesToShow,!r.options.infinite&&r.currentSlide>i&&(r.currentSlide=i),r.slideCount<=r.options.slidesToShow&&(r.currentSlide=0),n=r.currentSlide,r.destroy(!0),e.extend(r,r.initials,{currentSlide:n}),r.init(),t||r.changeSlide({data:{message:"index",index:n}},!1)},t.prototype.registerBreakpoints=function(){var t,n,i,r=this,o=r.options.responsive||null;if("array"===e.type(o)&&o.length){r.respondTo=r.options.respondTo||"window";for(t in o)if(i=r.breakpoints.length-1,o.hasOwnProperty(t)){for(n=o[t].breakpoint;i>=0;)r.breakpoints[i]&&r.breakpoints[i]===n&&r.breakpoints.splice(i,1),i--;r.breakpoints.push(n),r.breakpointSettings[n]=o[t].settings}r.breakpoints.sort(function(e,t){return r.options.mobileFirst?e-t:t-e})}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,n){var i=this;return"boolean"==typeof e?(t=e,e=t===!0?0:i.slideCount-1):e=t===!0?--e:e,i.slideCount<1||0>e||e>i.slideCount-1?!1:(i.unload(),n===!0?i.$slideTrack.children().remove():i.$slideTrack.children(this.options.slide).eq(e).remove(),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slidesCache=i.$slides,void i.reinit())},t.prototype.setCSS=function(e){var t,n,i=this,r={};i.options.rtl===!0&&(e=-e),t="left"==i.positionProp?Math.ceil(e)+"px":"0px",n="top"==i.positionProp?Math.ceil(e)+"px":"0px",r[i.positionProp]=e,i.transformsEnabled===!1?i.$slideTrack.css(r):(r={},i.cssTransitions===!1?(r[i.animType]="translate("+t+", "+n+")",i.$slideTrack.css(r)):(r[i.animType]="translate3d("+t+", "+n+", 0px)",i.$slideTrack.css(r)))},t.prototype.setDimensions=function(){var e=this;e.options.vertical===!1?e.options.centerMode===!0&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),e.options.centerMode===!0&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),e.options.vertical===!1&&e.options.variableWidth===!1?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):e.options.variableWidth===!0?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();e.options.variableWidth===!1&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,n=this;n.$slides.each(function(i,r){t=n.slideWidth*i*-1,n.options.rtl===!0?e(r).css({position:"relative",right:t,top:0,zIndex:n.options.zIndex-2,opacity:0}):e(r).css({position:"relative",left:t,top:0,zIndex:n.options.zIndex-2,opacity:0})}),n.$slides.eq(n.currentSlide).css({zIndex:n.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(){var t,n,i,r,o,s=this,a=!1;if("object"===e.type(arguments[0])?(i=arguments[0],a=arguments[1],o="multiple"):"string"===e.type(arguments[0])&&(i=arguments[0],r=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===e.type(arguments[1])?o="responsive":"undefined"!=typeof arguments[1]&&(o="single")),"single"===o)s.options[i]=r;else if("multiple"===o)e.each(i,function(e,t){s.options[e]=t});else if("responsive"===o)for(n in r)if("array"!==e.type(s.options.responsive))s.options.responsive=[r[n]];else{for(t=s.options.responsive.length-1;t>=0;)s.options.responsive[t].breakpoint===r[n].breakpoint&&s.options.responsive.splice(t,1),t--;s.options.responsive.push(r[n])}a&&(s.unload(),s.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),e.options.fade===!1?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=e.options.vertical===!0?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),(void 0!==t.WebkitTransition||void 0!==t.MozTransition||void 0!==t.msTransition)&&e.options.useCSS===!0&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&e.animType!==!1&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&e.animType!==!1},t.prototype.setSlideClasses=function(e){var t,n,i,r,o=this;if(n=o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),o.$slides.eq(e).addClass("slick-current"),o.options.centerMode===!0){var s=o.options.slidesToShow%2===0?1:0;t=Math.floor(o.options.slidesToShow/2),o.options.infinite===!0&&(e>=t&&e<=o.slideCount-1-t?o.$slides.slice(e-t+s,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(i=o.options.slidesToShow+e,n.slice(i-t+1+s,i+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?n.eq(n.length-1-o.options.slidesToShow).addClass("slick-center"):e===o.slideCount-1&&n.eq(o.options.slidesToShow).addClass("slick-center")),o.$slides.eq(e).addClass("slick-center")}else e>=0&&e<=o.slideCount-o.options.slidesToShow?o.$slides.slice(e,e+o.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):n.length<=o.options.slidesToShow?n.addClass("slick-active").attr("aria-hidden","false"):(r=o.slideCount%o.options.slidesToShow,i=o.options.infinite===!0?o.options.slidesToShow+e:e,o.options.slidesToShow==o.options.slidesToScroll&&o.slideCount-e<o.options.slidesToShow?n.slice(i-(o.options.slidesToShow-r),i+r).addClass("slick-active").attr("aria-hidden","false"):n.slice(i,i+o.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));("ondemand"===o.options.lazyLoad||"anticipated"===o.options.lazyLoad)&&o.lazyLoad()},t.prototype.setupInfinite=function(){var t,n,i,r=this;if(r.options.fade===!0&&(r.options.centerMode=!1),r.options.infinite===!0&&r.options.fade===!1&&(n=null,r.slideCount>r.options.slidesToShow)){for(i=r.options.centerMode===!0?r.options.slidesToShow+1:r.options.slidesToShow,t=r.slideCount;t>r.slideCount-i;t-=1)n=t-1,e(r.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n-r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");for(t=0;t<i+r.slideCount;t+=1)n=t,e(r.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n+r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");r.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")})}},t.prototype.interrupt=function(e){var t=this;e||t.autoPlay(),t.interrupted=e},t.prototype.selectHandler=function(t){var n=this,i=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),r=parseInt(i.attr("data-slick-index"));return r||(r=0),n.slideCount<=n.options.slidesToShow?void n.slideHandler(r,!1,!0):void n.slideHandler(r)},t.prototype.slideHandler=function(e,t,n){var i,r,o,s,a,l=null,d=this;return t=t||!1,d.animating===!0&&d.options.waitForAnimate===!0||d.options.fade===!0&&d.currentSlide===e?void 0:(t===!1&&d.asNavFor(e),i=e,l=d.getLeft(i),s=d.getLeft(d.currentSlide),d.currentLeft=null===d.swipeLeft?s:d.swipeLeft,d.options.infinite===!1&&d.options.centerMode===!1&&(0>e||e>d.getDotCount()*d.options.slidesToScroll)?void(d.options.fade===!1&&(i=d.currentSlide,n!==!0&&d.slideCount>d.options.slidesToShow?d.animateSlide(s,function(){d.postSlide(i)}):d.postSlide(i))):d.options.infinite===!1&&d.options.centerMode===!0&&(0>e||e>d.slideCount-d.options.slidesToScroll)?void(d.options.fade===!1&&(i=d.currentSlide,n!==!0&&d.slideCount>d.options.slidesToShow?d.animateSlide(s,function(){d.postSlide(i)}):d.postSlide(i))):(d.options.autoplay&&clearInterval(d.autoPlayTimer),r=0>i?d.slideCount%d.options.slidesToScroll!==0?d.slideCount-d.slideCount%d.options.slidesToScroll:d.slideCount+i:i>=d.slideCount?d.slideCount%d.options.slidesToScroll!==0?0:i-d.slideCount:i,d.animating=!0,d.$slider.trigger("beforeChange",[d,d.currentSlide,r]),o=d.currentSlide,d.currentSlide=r,d.setSlideClasses(d.currentSlide),d.options.asNavFor&&(a=d.getNavTarget(),a=a.slick("getSlick"),a.slideCount<=a.options.slidesToShow&&a.setSlideClasses(d.currentSlide)),d.updateDots(),d.updateArrows(),d.options.fade===!0?(n!==!0?(d.fadeSlideOut(o),d.fadeSlide(r,function(){d.postSlide(r)})):d.postSlide(r),void d.animateHeight()):void(n!==!0&&d.slideCount>d.options.slidesToShow?d.animateSlide(l,function(){d.postSlide(r)}):d.postSlide(r))))},t.prototype.startLoad=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,n,i,r=this;return e=r.touchObject.startX-r.touchObject.curX,t=r.touchObject.startY-r.touchObject.curY,n=Math.atan2(t,e),i=Math.round(180*n/Math.PI),0>i&&(i=360-Math.abs(i)),45>=i&&i>=0?r.options.rtl===!1?"left":"right":360>=i&&i>=315?r.options.rtl===!1?"left":"right":i>=135&&225>=i?r.options.rtl===!1?"right":"left":r.options.verticalSwiping===!0?i>=35&&135>=i?"down":"up":"vertical"},t.prototype.swipeEnd=function(e){var t,n,i=this;if(i.dragging=!1,i.swiping=!1,i.scrolling)return i.scrolling=!1,!1;if(i.interrupted=!1,i.shouldClick=i.touchObject.swipeLength>10?!1:!0,void 0===i.touchObject.curX)return!1;if(i.touchObject.edgeHit===!0&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe){switch(n=i.swipeDirection()){case"left":case"down":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.currentDirection=0;break;case"right":case"up":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.currentDirection=1}"vertical"!=n&&(i.slideHandler(t),i.touchObject={},i.$slider.trigger("swipe",[i,n]))}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(t.options.swipe===!1||"ontouchend"in document&&t.options.swipe===!1||t.options.draggable===!1&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,t.options.verticalSwiping===!0&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,n,i,r,o,s,a=this;return o=void 0!==e.originalEvent?e.originalEvent.touches:null,!a.dragging||a.scrolling||o&&1!==o.length?!1:(t=a.getLeft(a.currentSlide),a.touchObject.curX=void 0!==o?o[0].pageX:e.clientX,a.touchObject.curY=void 0!==o?o[0].pageY:e.clientY,a.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(a.touchObject.curX-a.touchObject.startX,2))),s=Math.round(Math.sqrt(Math.pow(a.touchObject.curY-a.touchObject.startY,2))),!a.options.verticalSwiping&&!a.swiping&&s>4?(a.scrolling=!0,!1):(a.options.verticalSwiping===!0&&(a.touchObject.swipeLength=s),n=a.swipeDirection(),void 0!==e.originalEvent&&a.touchObject.swipeLength>4&&(a.swiping=!0,e.preventDefault()),r=(a.options.rtl===!1?1:-1)*(a.touchObject.curX>a.touchObject.startX?1:-1),a.options.verticalSwiping===!0&&(r=a.touchObject.curY>a.touchObject.startY?1:-1),i=a.touchObject.swipeLength,a.touchObject.edgeHit=!1,a.options.infinite===!1&&(0===a.currentSlide&&"right"===n||a.currentSlide>=a.getDotCount()&&"left"===n)&&(i=a.touchObject.swipeLength*a.options.edgeFriction,a.touchObject.edgeHit=!0),a.options.vertical===!1?a.swipeLeft=t+i*r:a.swipeLeft=t+i*(a.$list.height()/a.listWidth)*r,a.options.verticalSwiping===!0&&(a.swipeLeft=t+i*r),a.options.fade===!0||a.options.touchMove===!1?!1:a.animating===!0?(a.swipeLeft=null,!1):void a.setCSS(a.swipeLeft)))},t.prototype.swipeStart=function(e){var t,n=this;return n.interrupted=!0,1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow?(n.touchObject={},!1):(void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==t?t.pageX:e.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==t?t.pageY:e.clientY,void(n.dragging=!0))},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e,t=this;e=Math.floor(t.options.slidesToShow/2),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-t.options.slidesToShow&&t.options.centerMode===!1?(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-1&&t.options.centerMode===!0&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").end(),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active"))},t.prototype.visibility=function(){var e=this;e.options.autoplay&&(document[e.hidden]?e.interrupted=!0:e.interrupted=!1)},e.fn.slick=function(){var e,n,i=this,r=arguments[0],o=Array.prototype.slice.call(arguments,1),s=i.length;for(e=0;s>e;e++)if("object"==typeof r||"undefined"==typeof r?i[e].slick=new t(i[e],r):n=i[e].slick[r].apply(i[e].slick,o),"undefined"!=typeof n)return n;return i}}),/**
 * History.js Core
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
function(e,t){"use strict";var n=e.console||t,i=e.document,r=e.navigator,o=e.amplify||!1,s=e.setTimeout,a=e.clearTimeout,l=e.setInterval,d=e.clearInterval,c=e.JSON,u=e.alert,p=e.History=e.History||{},A=e.history;if(c.stringify=c.stringify||c.encode,c.parse=c.parse||c.decode,"undefined"!=typeof p.init)throw new Error("History.js Core has already been loaded...");p.init=function(){return"undefined"==typeof p.Adapter?!1:("undefined"!=typeof p.initCore&&p.initCore(),"undefined"!=typeof p.initHtml4&&p.initHtml4(),!0)},p.initCore=function(){if("undefined"!=typeof p.initCore.initialized)return!1;p.initCore.initialized=!0;var h,f;p.options=p.options||{},p.options.hashChangeInterval=p.options.hashChangeInterval||100,p.options.safariPollInterval=p.options.safariPollInterval||500,p.options.doubleCheckInterval=p.options.doubleCheckInterval||500,p.options.storeInterval=p.options.storeInterval||1e3,p.options.busyDelay=p.options.busyDelay||250,p.options.debug=p.options.debug||!1,p.options.initialTitle=p.options.initialTitle||i.title,p.temp={internal:!1,expectedStateId:!1,ignore:0,same:!1,anchor:!1},p.intervalList=[],p.clearAllIntervals=function(){var e,t=p.intervalList;if("undefined"!=typeof t&&null!==t){for(e=0;e<t.length;e++)d(t[e]);p.intervalList=null}},p.Adapter.bind(e,"beforeunload",p.clearAllIntervals),p.Adapter.bind(e,"unload",p.clearAllIntervals),p.debug=function(){p.options.debug&&p.log.apply(p,arguments)},p.log=function(){var e,t,r,o,s,a=!("undefined"==typeof n||"undefined"==typeof n.log||"undefined"==typeof n.log.apply),l=i.getElementById("log");for(a?(o=Array.prototype.slice.call(arguments),e=o.shift(),"undefined"!=typeof n.debug?n.debug.apply(n,[e,o]):n.log.apply(n,[e,o])):e="\n"+arguments[0]+"\n",t=1,r=arguments.length;r>t;++t){if(s=arguments[t],"object"==typeof s&&"undefined"!=typeof c)try{s=c.stringify(s)}catch(d){}e+="\n"+s+"\n"}l?(l.value+=e+"\n-----\n",l.scrollTop=l.scrollHeight-l.clientHeight):a||u(e)},p.getInternetExplorerMajorVersion=function(){var e=p.getInternetExplorerMajorVersion.cached="undefined"!=typeof p.getInternetExplorerMajorVersion.cached?p.getInternetExplorerMajorVersion.cached:function(){for(var e=3,t=i.createElement("div"),n=t.getElementsByTagName("i");(t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&n[0];);return e>4?e:!1}();return e},p.isInternetExplorer=function(){var e=p.isInternetExplorer.cached="undefined"!=typeof p.isInternetExplorer.cached?p.isInternetExplorer.cached:Boolean(p.getInternetExplorerMajorVersion());return e},p.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(r.userAgent)||/AppleWebKit\/5([0-2]|3[0-2])/i.test(r.userAgent))),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in i)||p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8)},p.bugs={},p.bugs.safariIFrame=Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===r.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)&&e.parent!==e),p.bugs.safariHash=Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===r.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),p.bugs.safariPoll=Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===r.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),p.bugs.noHashPopState=Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===r.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),p.bugs.noInitialPopState=Boolean(!p.emulated.pushState&&("Apple Computer, Inc."===r.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)||/Gecko\//.test(r.userAgent))),p.bugs.ieDoubleCheck=Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8),p.bugs.hashEscape=Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<7),p.enabled=!p.emulated.pushState,p.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},p.cloneObject=function(e){var t,n;return e?(t=c.stringify(e),n=c.parse(t)):n={},n},p.getRootUrl=function(){var e=i.location.protocol+"//"+(i.location.hostname||i.location.host);return i.location.port&&(e+=":"+i.location.port),e+="/"},p.getBaseHref=function(){var e=i.getElementsByTagName("base"),t=null,n="";return 1===e.length&&(t=e[0],n=t.href.replace(/[^\/]+$/,"")),n=n.replace(/\/+$/,""),n&&(n+="/"),n},p.getBaseUrl=function(){var e=p.getBaseHref()||p.getBasePageUrl()||p.getRootUrl();return e},p.getPageUrl=function(){var e,t=p.getState(!1,!1),n=(t||{}).url||i.location.href;return e=n.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,n){return/\./.test(e)?e:e+"/"})},p.getBasePageUrl=function(){var e=i.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,n){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},p.getFullUrl=function(e,t){var n=e,i=e.substring(0,1);return t="undefined"==typeof t?!0:t,/[a-z]+\:\/\//.test(e)||(n="/"===i?p.getRootUrl()+e.replace(/^\/+/,""):"#"===i?p.getPageUrl().replace(/#.*/,"")+e:"?"===i?p.getPageUrl().replace(/[\?#].*/,"")+e:t?p.getBaseUrl()+e.replace(/^(\.\/)+/,""):p.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),n.replace(/\#$/,"")},p.getShortUrl=function(e){var t=p.getFullUrl(e),n=t,i=p.getBaseUrl(),r=p.getRootUrl();return p.emulated.pushState&&(n=n.replace(i,"")),n=n.replace(r,"/"),/^\.?\.?\//.test(n)===!1&&(n=r+n===t?"/"+n:"./"+n),n=n.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},p.store=o?o.store("History.store")||{}:{},p.store.idToState=p.store.idToState||{},p.store.urlToId=p.store.urlToId||{},p.store.stateToId=p.store.stateToId||{},p.idToState=p.idToState||{},p.stateToId=p.stateToId||{},p.urlToId=p.urlToId||{},p.storedStates=p.storedStates||[],p.savedStates=p.savedStates||[],p.getState=function(e,t){"undefined"==typeof e&&(e=!0),"undefined"==typeof t&&(t=!0);var n=p.getLastSavedState();return!n&&t&&(n=p.createStateObject()),e&&(n=p.cloneObject(n),n.url=n.cleanUrl||n.url,n.internal=p.temp.internal,n.same=p.temp.same,n.anchor=n.anchor||p.temp.anchor),n},p.getIdByState=function(e){var t,n=p.extractId(e.url);if(!n)if(t=p.getStateString(e),"undefined"!=typeof p.stateToId[t])n=p.stateToId[t];else if("undefined"!=typeof p.store.stateToId[t])n=p.store.stateToId[t];else{for(;;)if(n=String(Math.floor(1e3*Math.random())),"undefined"==typeof p.idToState[n]&&"undefined"==typeof p.store.idToState[n])break;p.stateToId[t]=n,p.idToState[n]=e}return n},p.normalizeState=function(e){var t,n;return e&&"object"==typeof e||(e={}),"undefined"!=typeof e.normalized?e:(e.data&&"object"==typeof e.data||(e.data={}),t={},t.normalized=!0,t.title=e.title||"",t.url=p.getFullUrl(p.unescapeString(e.url||i.location.href)),t.data=p.cloneObject(e.data),t.anchor=p.extractAnchor(t.url),t.hash=p.getShortUrl(t.url),t.id=p.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_anchor.*/,"").replace(/\??\&_suid.*/,"").replace(/#.*/,""),t.url=t.cleanUrl,n=!p.isEmptyObject(t.data),(t.title||n)&&(t.hash=p.getShortUrl(t.url),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.anchor&&(/\?/.test(t.hash)||(t.hash+="?"),p.emulated.pushState&&(t.hash+="&_anchor="+t.anchor),t.url+="#"+t.anchor),t.hashedUrl=p.getFullUrl(t.hash),(p.emulated.pushState||p.bugs.safariPoll)&&p.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t)},p.createStateObject=function(e,t,n){var i={data:e,title:t,url:n};return i=p.normalizeState(i)},p.getStateById=function(e){e=String(e);var n=p.idToState[e]||p.store.idToState[e]||t;return n},p.getStateString=function(e){var t,n,i=p.normalizeState(e);return t={data:i.data,title:e.title,url:e.url},n=c.stringify(t)},p.getStateId=function(e){var t,n=p.normalizeState(e);return t=n.id},p.getHashByState=function(e){var t,n=p.normalizeState(e);return t=n.hash},p.extractAnchor=function(e){var t,n,i;return t=e.replace(/^[^#]+#?/,""),t||(n=/(.*)\&_anchor=([a-zA-Z0-9_\-]+)$/.exec(e),i=n?n[1]||e:e,t=n?String(n[2]||""):""),t||!1},p.extractId=function(e){var t,n,i;return n=/(.*)\&_suid=([0-9]+)$/.exec(e),i=n?n[1]||e:e,t=n?String(n[2]||""):"",t||!1},p.isTraditionalAnchor=function(e){var t=!/[^a-zA-Z0-9_\-]/.test(e);return t},p.extractState=function(e,t,n){var i,r,o=null;return t=t||!1,n="undefined"==typeof n?!0:n,e=e,i=p.extractId(e),i&&(o=p.getStateById(i)),o||(r=p.getFullUrl(e),i=p.getIdByUrl(r)||!1,i&&(o=p.getStateById(i)),!o&&t&&(!n&&p.isTraditionalAnchor(e)||(o=p.createStateObject(null,null,r)))),o},p.getIdByUrl=function(e){var n=p.urlToId[e]||p.store.urlToId[e]||t;return n},p.getLastSavedState=function(){return p.getStateById(p.savedStates[p.savedStates.length-1])},p.getLastStoredState=function(){return p.getStateById(p.storedStates[p.storedStates.length-1])},p.hasUrlDuplicate=function(e){var t,n=!1;return t=p.extractState(e.url),n=t&&t.id!==e.id},p.storeState=function(e){return p.isLastStoredState(e)?e:(p.urlToId[e.url]=e.id,p.storedStates.push(e.id),e)},p.isLastStoredState=function(e){var t,n,i,r=!1;return p.storedStates.length&&(t=p.getLastStoredState(),n=e.id,i=t.id,r=n===i),r},p.isLastSavedState=function(e,t){var n,i,r,o,s,a=!1;return p.savedStates.length&&(n=p.getLastSavedState(),t?(o={data:e.data,title:e.title,url:e.cleanUrl},s={data:n.data,title:n.title,url:n.cleanUrl},a=c.stringify(o)===c.stringify(s)):(i=e.id,r=n.id,a=i===r)),a},p.saveState=function(e){return p.isLastSavedState(e)?e:(p.savedStates.push(e.id),e)},p.getStateByIndex=function(e){var t,n=null;return t="undefined"==typeof e?p.savedStates[p.savedStates.length-1]:0>e?p.savedStates[p.savedStates.length+e]:p.savedStates[e],n=p.getStateById(t)},p.getHash=function(){var e=p.unescapeHash(i.location.hash);return e},p.unescapeString=function(t){for(var n,i=t;;){if(n=e.decodeURI(i),n===i)break;i=n}return i},p.unescapeHash=function(e){var t=p.normalizeHash(e);return t=p.unescapeString(t)},p.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},p.setHash=function(e,t){if(t!==!1&&p.busy())return p.debug("History.setHash: we must wait",arguments),p.pushQueue({scope:p,callback:p.setHash,args:arguments,queue:t}),!1;p.debug("History.setHash: called",e);var n,r,o,s=p.escapeHash(e);return p.busy(!0),n=p.extractState(e,!0,!1),n&&!p.emulated.pushState?(p.debug("History.setHash: Hash is a state so skipping the hash set with a direct pushState call",arguments),p.pushState(n.data,n.title,n.url,!1)):i.location.hash!==s&&(p.bugs.safariHash?(r=p.getPageUrl(),o=p.extractState(r.replace(/#.*/,"")),o?p.pushState(o.data,o.title,o.url+"#"+s,!1):p.pushState(null,null,r+"#"+s,!1)):i.location.hash=s),p},p.escapeHash=function(t){var n=p.normalizeHash(t);return n=e.encodeURI(n),p.bugs.hashEscape||(n=n.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),n},p.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=p.unescapeHash(t)},p.setTitle=function(e){var t,n,r="string"==typeof e?e:e.title;if(r||(n=p.getStateByIndex(0),n&&n.url===(e.url||i.location.href)&&(r=n.title||p.options.initialTitle)),t=i.getElementsByTagName("title"),1===t.length)try{t[0].innerHTML=r.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(o){}return i.title=r,p},p.queues=[],p.busy=function(e){"undefined"!=typeof e?(p.debug("History.busy: changing ["+(p.busy.flag||!1)+"] to ["+(e||!1)+"]",p.queues.length),p.busy.flag=e):"undefined"==typeof p.busy.flag&&(p.busy.flag=!1);var t,n,i,r;return p.busy.flag||(a(p.busy.timeout),t=function(){if(!p.busy.flag)for(n=p.queues.length-1;n>=0;--n)i=p.queues[n],0!==i.length&&(r=i.shift(),p.fireQueueItem(r),p.busy.timeout=s(t,p.options.busyDelay))},p.busy.timeout=s(t,p.options.busyDelay)),p.busy.flag},p.fireQueueItem=function(e){return e.callback.apply(e.scope||p,e.args||[])},p.pushQueue=function(e){return p.queues[e.queue||0]=p.queues[e.queue||0]||[],p.queues[e.queue||0].push(e),p},p.queue=function(e,t){return"function"==typeof e&&(e={callback:e}),"undefined"!=typeof t&&(e.queue=t),p.busy()?p.pushQueue(e):p.fireQueueItem(e),p},p.clearQueue=function(){return p.busy.flag=!1,p.queues=[],p},p.stateChanged=!1,p.doubleChecker=!1,p.doubleCheckComplete=function(){return p.stateChanged=!0,p.doubleCheckClear(),p},p.doubleCheckClear=function(){return p.doubleChecker&&(a(p.doubleChecker),p.doubleChecker=!1),p},p.doubleCheck=function(e){return p.stateChanged=!1,p.doubleCheckClear(),p.bugs.ieDoubleCheck&&(p.doubleChecker=s(function(){return p.doubleCheckClear(),p.stateChanged||(p.debug("History.doubleCheck: State has not yet changed, trying again",arguments),e()),!0},p.options.doubleCheckInterval)),p},p.safariStatePoll=function(){var t,n=p.extractState(i.location.href);if(n&&!p.isLastSavedState(n))return t=n,t||(p.debug("History.safariStatePoll: new"),t=p.createStateObject()),p.debug("History.safariStatePoll: trigger"),p.Adapter.trigger(e,"popstate"),p},p.back=function(e){return p.debug("History.back: called",arguments),e!==!1&&p.busy()?(p.debug("History.back: we must wait",arguments),p.pushQueue({scope:p,callback:p.back,args:arguments,queue:e}),!1):(p.busy(!0),p.doubleCheck(function(){p.back(!1)}),A.go(-1),!0)},p.forward=function(e){return p.debug("History.forward: called",arguments),e!==!1&&p.busy()?(p.debug("History.forward: we must wait",arguments),p.pushQueue({scope:p,callback:p.forward,args:arguments,queue:e}),!1):(p.busy(!0),p.doubleCheck(function(){p.forward(!1)}),A.go(1),!0)},p.go=function(e){p.debug("History.go: called",arguments);var t,n;if(n=(0>e?-1*e:e)-1,n&&p.queue(function(){p.temp.ignore=n,p.busy(!1)}),e>0)for(t=1;e>=t;++t)p.forward();else{if(!(0>e))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(t=-1;t>=e;--t)p.back()}return p},p.saveState(p.storeState(p.extractState(i.location.href,!0))),o&&(p.onUnload=function(){var e,t=o.store("History.store")||{};t.idToState=t.idToState||{},t.urlToId=t.urlToId||{},t.stateToId=t.stateToId||{};for(e in p.idToState)p.idToState.hasOwnProperty(e)&&(t.idToState[e]=p.idToState[e]);for(e in p.urlToId)p.urlToId.hasOwnProperty(e)&&(t.urlToId[e]=p.urlToId[e]);for(e in p.stateToId)p.stateToId.hasOwnProperty(e)&&(t.stateToId[e]=p.stateToId[e]);p.store=t,o.store("History.store",t)},p.intervalList.push(l(p.onUnload,p.options.storeInterval)),p.Adapter.bind(e,"beforeunload",p.onUnload),p.Adapter.bind(e,"unload",p.onUnload)),p.emulated.pushState?(f=function(){},p.pushState=p.pushState||f,p.replaceState=p.replaceState||f):(p.onPopState=function(t,n){var r,o,s,a=!1,l=!1;if(p.doubleCheckComplete(),r=p.getHash()){if(o=p.extractState(r||i.location.href,!0,!1))return p.debug("History.onPopState: state anchor",r,o),p.replaceState(o.data,o.title,o.url,!1),!1;p.debug("History.onPopState: traditional anchor",r)}if(l=p.Adapter.extractEventData("state",t,n)||!1,a=l?p.getStateById(l):p.temp.expectedStateId?p.getStateById(p.temp.expectedStateId):p.extractState(i.location.href),a||(r&&(s=p.extractState(i.location.href.replace(/#.*/,"")),s&&(a=p.createStateObject(s.data,s.title,i.location.href))),a||(a=p.createStateObject(null,null,i.location.href))),p.temp.ignore)return--p.temp.ignore,p.busy(!1),!1;if("hashchange"===p.temp.internal){if(p.isLastSavedState(a))return p.busy(!1),!1;p.temp.internal=!1}return p.temp.expectedStateId||(p.temp.internal=!1),p.temp.expectedStateId=!1,p.temp.same=p.isLastSavedState(a,!0),p.storeState(a),p.saveState(a),p.setTitle(a),p.Adapter.trigger(e,"statechange"),p.busy(!1),!0},p.Adapter.bind(e,"popstate",p.onPopState),p.pushState=function(t,n,i,r){if(p.debug("History.pushState: called",arguments),r!==!1&&p.busy())return p.debug("History.pushState: we must wait",arguments),p.pushQueue({scope:p,callback:p.pushState,args:arguments,queue:r}),!1;p.busy(!0);var o=p.createStateObject(t,n,i);return r!==!1&&(p.temp.internal="pushState"),p.temp.same=p.isLastSavedState(o,!0),p.isLastSavedState(o)?(p.Adapter.trigger(e,"statechange"),p.busy(!1)):(p.storeState(o),A.pushState(o.id,o.title,o.url),p.temp.expectedStateId=o.id,p.Adapter.trigger(e,"popstate")),!0},p.replaceState=function(t,n,i,r){if(p.debug("History.replaceState: called",arguments),r!==!1&&p.busy())return p.debug("History.replaceState: we must wait",arguments),p.pushQueue({scope:p,callback:p.replaceState,args:arguments,queue:r}),!1;p.busy(!0);var o=p.createStateObject(t,n,i);return r!==!1&&(p.temp.internal="replaceState"),p.temp.same=p.isLastSavedState(o,!0),p.isLastSavedState(o)?(p.Adapter.trigger(e,"statechange"),p.busy(!1)):(p.storeState(o),A.replaceState(o.id,o.title,o.url),p.temp.expectedStateId=o.id,p.Adapter.trigger(e,"popstate")),!0},++p.temp.ignore,p.bugs.safariPoll&&p.intervalList.push(l(p.safariStatePoll,p.options.safariPollInterval)),p.bugs.safariIFrame&&(h=p.getState(),A.pushState(h.data,h.title,h.url)),p.bugs.noHashPopState&&(p.Adapter.bind(e,"hashchange",function(){p.temp.internal="hashchange",p.Adapter.trigger(e,"popstate")}),p.getHash()&&p.bugs.noInitialPopState&&p.Adapter.onDomLoad(function(){p.Adapter.trigger(e,"popstate")})),p.bugs.noInitialPopState&&p.Adapter.trigger(e,"popstate"))},p.init()}(window),function(){var e,t,n,i,r,o,s,a,l,d,c,u,p,A,h,f,g,m,v,w,y,b,x,_,S,T,k,C,E,D,P,M,z,B,I,Q,q,j,R,F,H,$,L,O,N,W,U,V,G=[].slice,Z={}.hasOwnProperty,Y=function(e,t){function n(){this.constructor=e}for(var i in t)Z.call(t,i)&&(e[i]=t[i]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},J=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};for(k={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},q=function(){var e;return null!=(e="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?e:+new Date},F=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,T=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==F&&(F=function(e){return setTimeout(e,50)},T=function(e){return clearTimeout(e)}),$=function(e){var t,n;return t=q(),(n=function(){var i;return i=q()-t,i>=33?(t=q(),e(i,function(){return F(n)})):setTimeout(n,33-i)})()},H=function(){var e,t,n;return n=arguments[0],t=arguments[1],e=3<=arguments.length?G.call(arguments,2):[],"function"==typeof n[t]?n[t].apply(n,e):n[t]},C=function(){var e,t,n,i,r,o,s;for(i=arguments[0],o=2<=arguments.length?G.call(arguments,1):[],e=0,n=o.length;n>e;e++)if(r=o[e])for(t in r)Z.call(r,t)&&(s=r[t],null!=i[t]&&"object"==typeof i[t]&&null!=s&&"object"==typeof s?C(i[t],s):i[t]=s);return i},x=function(e){var t,n,i,r,o;for(r=t=0,n=0,i=e.length;i>n;n++)o=e[n],r+=Math.abs(o),t++;return r/t},D=function(e,t){var n,i,r,o;if(null==e&&(e="options"),null==t&&(t=!0),r=document.querySelector("[data-pace-"+e+"]")){if(n=r.getAttribute("data-pace-"+e),!t)return n;try{return JSON.parse(n)}catch(o){return i=o,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",i):void 0}}},s=function(){function e(){}return e.prototype.on=function(e,t,n,i){var r;return null==i&&(i=!1),null==this.bindings&&(this.bindings={}),null==(r=this.bindings)[e]&&(r[e]=[]),this.bindings[e].push({handler:t,ctx:n,once:i})},e.prototype.once=function(e,t,n){return this.on(e,t,n,!0)},e.prototype.off=function(e,t){var n,i,r;if(null!=(null!=(i=this.bindings)?i[e]:void 0)){if(null==t)return delete this.bindings[e];for(n=0,r=[];n<this.bindings[e].length;)this.bindings[e][n].handler===t?r.push(this.bindings[e].splice(n,1)):r.push(n++);return r}},e.prototype.trigger=function(){var e,t,n,i,r,o,s,a,l;if(n=arguments[0],e=2<=arguments.length?G.call(arguments,1):[],null!=(s=this.bindings)?s[n]:void 0){for(r=0,l=[];r<this.bindings[n].length;)a=this.bindings[n][r],i=a.handler,t=a.ctx,o=a.once,i.apply(null!=t?t:this,e),o?l.push(this.bindings[n].splice(r,1)):l.push(r++);return l}},e}(),d=window.Pace||{},window.Pace=d,C(d,s.prototype),j=d.options=C({},k,window.paceOptions,D()),R=["ajax","document","eventLag","elements"],I=0,Q=R.length;Q>I;I++)W=R[I],j[W]===!0&&(j[W]=k[W]);l=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return Y(t,e),t}(Error),t=function(){function e(){this.progress=0}return e.prototype.getElement=function(){var e;if(null==this.el){if(e=document.querySelector(j.target),!e)throw new l;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=e.firstChild?e.insertBefore(this.el,e.firstChild):e.appendChild(this.el)}return this.el},e.prototype.finish=function(){var e;return e=this.getElement(),e.className=e.className.replace("pace-active",""),e.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},e.prototype.update=function(e){return this.progress=e,this.render()},e.prototype.destroy=function(){var e;try{this.getElement().parentNode.removeChild(this.getElement())}catch(e){l=e}return this.el=void 0},e.prototype.render=function(){var e,t,n,i,r,o,s;if(null==document.querySelector(j.target))return!1;for(e=this.getElement(),s="translate3d("+this.progress+"%, 0, 0)",o=["webkitTransform","msTransform","transform"],n=0,i=o.length;i>n;n++)t=o[n],e.children[0].style[t]=s;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(e.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),this.progress>=100?r="99":(r=this.progress<10?"0":"",r+=0|this.progress),e.children[0].setAttribute("data-progress",""+r)),this.lastRenderedProgress=this.progress},e.prototype.done=function(){return this.progress>=100},e}(),a=function(){function e(){this.bindings={}}return e.prototype.trigger=function(e,t){var n,i,r,o,s;if(null!=this.bindings[e]){for(o=this.bindings[e],s=[],i=0,r=o.length;r>i;i++)n=o[i],s.push(n.call(this,t));return s}},e.prototype.on=function(e,t){var n;return null==(n=this.bindings)[e]&&(n[e]=[]),this.bindings[e].push(t)},e}(),m=window.XMLHttpRequest,g=window.XDomainRequest,f=window.WebSocket,E=function(e,t){var n,i,r,o;o=[];for(r in t.prototype)try{null==e[r]&&"function"!=typeof t[r]?"function"==typeof Object.defineProperty?o.push(Object.defineProperty(e,r,{get:function(){return t.prototype[r]},configurable:!0,enumerable:!0})):o.push(e[r]=t.prototype[r]):o.push(void 0)}catch(i){n=i}return o},z=[],d.ignore=function(){var e,t,n;return t=arguments[0],e=2<=arguments.length?G.call(arguments,1):[],z.unshift("ignore"),n=t.apply(null,e),z.shift(),n},d.track=function(){var e,t,n;return t=arguments[0],e=2<=arguments.length?G.call(arguments,1):[],z.unshift("track"),n=t.apply(null,e),z.shift(),n},N=function(e){var t;if(null==e&&(e="GET"),"track"===z[0])return"force";if(!z.length&&j.ajax){if("socket"===e&&j.ajax.trackWebSockets)return!0;if(t=e.toUpperCase(),J.call(j.ajax.trackMethods,t)>=0)return!0}return!1},c=function(e){function t(){var e;t.__super__.constructor.apply(this,arguments),e=function(e){return function(t){var n;return n=t.open,t.open=function(i,r,o){return N(i)&&e.trigger("request",{type:i,url:r,request:t}),n.apply(t,arguments)}}}(this),window.XMLHttpRequest=function(t){var n;return n=new m(t),e(n),n};try{E(window.XMLHttpRequest,m)}catch(n){}if(null!=g){window.XDomainRequest=function(){var t;return t=new g,e(t),t};try{E(window.XDomainRequest,g)}catch(n){}}if(null!=f&&j.ajax.trackWebSockets){window.WebSocket=function(e){return function(t,n){var i;return i=null!=n?new f(t,n):new f(t),N("socket")&&e.trigger("request",{type:"socket",url:t,protocols:n,request:i}),i}}(this);try{E(window.WebSocket,f)}catch(n){}}}return Y(t,e),t}(a),v=null,P=function(){return null==v&&(v=new c),v},O=function(e){var t,n,i,r;for(r=j.ajax.ignoreURLs,t=0,n=r.length;n>t;t++)if(i=r[t],"string"==typeof i){if(-1!==e.indexOf(i))return!0}else if(i.test(e))return!0;return!1},P().on("request",function(t){var n,i,r,o,s;return o=t.type,r=t.request,s=t.url,O(s)?void 0:d.running||j.restartOnRequestAfter===!1&&"force"!==N(o)?void 0:(i=arguments,n=j.restartOnRequestAfter||0,"boolean"==typeof n&&(n=0),setTimeout(function(){var t,n,s,a,l,c;if(c="socket"===o?r.readyState<2:0<(s=r.readyState)&&4>s){for(d.restart(),a=d.sources,l=[],t=0,n=a.length;n>t;t++){if(W=a[t],W instanceof e){W.watch.apply(W,i);break}l.push(void 0)}return l}},n))}),e=function(){function e(){this.elements=[],P().on("request",function(e){return function(){return e.watch.apply(e,arguments)}}(this))}return e.prototype.watch=function(e){var t,n,i,r;return i=e.type,t=e.request,r=e.url,O(r)?void 0:(n="socket"===i?new A(t):new h(t),this.elements.push(n))},e}(),h=function(){function e(e){var t,n,i,r,o,s;if(this.progress=0,null!=window.ProgressEvent)for(s=null,e.addEventListener("progress",function(e){return function(t){return t.lengthComputable?e.progress=100*t.loaded/t.total:e.progress=e.progress+(100-e.progress)/2}}(this),!1),o=["load","abort","timeout","error"],i=0,r=o.length;r>i;i++)n=o[i],e.addEventListener(n,function(e){return function(){return e.progress=100}}(this),!1);else t=e.onreadystatechange,e.onreadystatechange=function(n){return function(){var i;return 0===(i=e.readyState)||4===i?n.progress=100:3===e.readyState&&(n.progress=50),"function"==typeof t?t.apply(null,arguments):void 0}}(this)}return e}(),A=function(){function e(e){var t,n,i,r;for(this.progress=0,r=["error","open"],n=0,i=r.length;i>n;n++)t=r[n],e.addEventListener(t,function(e){return function(){return e.progress=100}}(this),!1)}return e}(),i=function(){function e(e){var t,n,i,o;for(null==e&&(e={}),this.elements=[],null==e.selectors&&(e.selectors=[]),i=e.selectors,t=0,n=i.length;n>t;t++)o=i[t],this.elements.push(new r(o))}return e}(),r=function(){function e(e){this.selector=e,this.progress=0,this.check()}return e.prototype.check=function(){return document.querySelector(this.selector)?this.done():setTimeout(function(e){return function(){return e.check()}}(this),j.elements.checkInterval)},e.prototype.done=function(){return this.progress=100},e}(),n=function(){function e(){var e,t;this.progress=null!=(t=this.states[document.readyState])?t:100,e=document.onreadystatechange,document.onreadystatechange=function(t){return function(){return null!=t.states[document.readyState]&&(t.progress=t.states[document.readyState]),"function"==typeof e?e.apply(null,arguments):void 0}}(this)}return e.prototype.states={loading:0,interactive:50,complete:100},e}(),o=function(){function e(){var e,t,n,i,r;this.progress=0,e=0,r=[],i=0,n=q(),t=setInterval(function(o){return function(){var s;return s=q()-n-50,n=q(),r.push(s),r.length>j.eventLag.sampleCount&&r.shift(),e=x(r),++i>=j.eventLag.minSamples&&e<j.eventLag.lagThreshold?(o.progress=100,clearInterval(t)):o.progress=100*(3/(e+3))}}(this),50)}return e}(),p=function(){function e(e){this.source=e,this.last=this.sinceLastUpdate=0,this.rate=j.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=H(this.source,"progress"))}return e.prototype.tick=function(e,t){var n;return null==t&&(t=H(this.source,"progress")),t>=100&&(this.done=!0),t===this.last?this.sinceLastUpdate+=e:(this.sinceLastUpdate&&(this.rate=(t-this.last)/this.sinceLastUpdate),this.catchup=(t-this.progress)/j.catchupTime,this.sinceLastUpdate=0,this.last=t),t>this.progress&&(this.progress+=this.catchup*e),n=1-Math.pow(this.progress/100,j.easeFactor),this.progress+=n*this.rate*e,this.progress=Math.min(this.lastProgress+j.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},e}(),U=null,L=null,_=null,V=null,b=null,S=null,d.running=!1,M=function(){return j.restartOnPushState?d.restart():void 0},null!=window.history.pushState&&(w=window.history.pushState,window.history.pushState=function(){return M(),w.apply(window.history,arguments)}),null!=window.history.replaceState&&(y=window.history.replaceState,window.history.replaceState=function(){return M(),y.apply(window.history,arguments)}),u={ajax:e,elements:i,document:n,eventLag:o},(B=function(){var e,n,i,r,o,s,a,l;for(d.sources=U=[],o=["ajax","elements","document","eventLag"],e=0,n=o.length;n>e;e++)l=o[e],j[l]!==!1&&U.push(new u[l](j[l]));for(a=null!=(s=j.extraSources)?s:[],r=0,i=a.length;i>r;r++)W=a[r],U.push(new W(j));return d.bar=_=new t,L=[],V=new p})(),d.stop=function(){return d.trigger("stop"),d.running=!1,_.destroy(),S=!0,null!=b&&("function"==typeof T&&T(b),b=null),B()},d.restart=function(){return d.trigger("restart"),d.stop(),d.start()},d.go=function(){var e;return d.running=!0,_.render(),e=q(),S=!1,b=$(function(t,n){var i,r,o,s,a,l,c,u,A,h,f,g,m,v,w,y;for(m=100-_.progress,r=y=0,o=!0,l=u=0,A=U.length;A>u;l=++u)for(W=U[l],w=null!=L[l]?L[l]:L[l]=[],a=null!=(g=W.elements)?g:[W],c=f=0,h=a.length;h>f;c=++f)s=a[c],v=null!=w[c]?w[c]:w[c]=new p(s),o&=v.done,v.done||(r++,y+=v.tick(t));return i=y/r,_.update(V.tick(t,i)),_.done()||o||S?(_.update(100),d.trigger("done"),setTimeout(function(){return _.finish(),d.running=!1,d.trigger("hide")},Math.max(j.ghostTime,Math.max(j.minTime-(q()-e),0)))):n()})},d.start=function(e){var t;C(j,e),d.running=!0;try{_.render()}catch(t){l=t}return document.querySelector(".pace")?(d.trigger("start"),d.go()):setTimeout(d.start,50)},"function"==typeof define&&define.amd?define(["pace"],function(){return d}):"object"==typeof exports?module.exports=d:j.startOnPageLoad&&d.start()}.call(this),function(e){"strict";var t;e(window).on("smoothload",function(){e(".general-content").find(".collapsible").each(function(){var t=e(this),n=e('<a class="collapsible-more" href="#">[more]</a>');t.prev().append(n)}),e("#rbox-loader-script").each(function(){var n="//w.recruiterbox.com/static/client-src-served/widget/",i=43199;window._rbox||(window._rbox={host_protocol:document.location.protocol,ready:function(e){this.onready=e}},e.getScript(n+i+"/rbox_api.js")),window._rbox_exec_impl=!1,void 0===t?e.ajax({url:n+i+"/rbox_impl.js",cache:!0,method:"GET",dataType:"text"}).done(function(n){t=n.replace(/"Apply for this position"/g,'"Apply"'),e.globalEval(t)}):e.globalEval(t);var r=e(this).data("expand-hash");r&&(location.hash=r)}),e('meta[name="x-unique-key"]').each(function(){var t=JSON.stringify(e(this).prop("content"));e(".main-content-sidebar a").removeClass("current"),e(".main-content-sidebar a[data-unique-key="+t+"]").addClass("current")})}),e(document.body).on("click","a.collapsible-more",function(t){var n=e(this),i=n.parent().next();i.toggleClass("expanded"),t.preventDefault()})}(jQuery),function(e){"strict";e(window).on("smoothload",function(){e(".hero-container:not(.slick-slider)").slick({dots:!0,pauseOnDotsHover:!0,autoplay:!0,autoplaySpeed:4200})})}(jQuery),function(e){"strict";function t(){var t=e(this),n=t.prop("href"),i=function(){var t=e(this),i=t.find("title").text();document.title=i,e.each(o,function(n,i){var r=e(n).get(0),o=t.find(n).get(0);r&&e.each(i,function(e,t){t.call(r,o)})}),history.pushState(null,i,n),e(window).trigger("smoothload"),window.onload&&"function"==typeof window.onload&&window.onload(),e(window).scrollTop(0)};if(n in r){var s=r[n];e("<div>").html(s).each(i)}else e.get(n).success(function(t){t=t.replace(/<script.*? src=.+?><\/script>/g,""),t=t.replace(/<link.*? rel="stylesheet".*?>/g,""),t=t.split(/<body/),t[0]=t[0].replace(/<script.*?>[\s\S]*?<\/script>/g,""),t=t.join("<body"),r[n]=t,e("<div>").html(t).each(i)})}function n(t){e(this).replaceWith(t)}var i=e(document.body),r={},o={};window.addSmoothLoadHandler=function(e,t){e in o?o[e].push(t):o[e]=[t]},addSmoothLoadHandler('meta[name="x-unique-key"]',n),addSmoothLoadHandler('link[rel="canonical"]',n),addSmoothLoadHandler("header",n),addSmoothLoadHandler("footer",n),addSmoothLoadHandler("article",function(t){var n=e(this),i=e(t);n.find("a:internal").each(function(){var t=e(this),n=t.attr("href");"#"!==n[0]&&t.attr("href",t.prop("href"))}),1===n.find("section.hero-container").length&&1===i.find("section.hero-container").length?(n.find("section.arrow-tabs").attr("data-current-tab",i.find("section.arrow-tabs").data("current-tab")),n.find("section.main-content").replaceWith(i.find("section.main-content"))):n.replaceWith(t)}),e.expr[":"].internal=function(t){return!e(t).attr("target")&&t.hostname==location.hostname},i.on("click","a:internal",function(n){"#"!==e(this).attr("href")[0]&&(n.preventDefault(),t.call(this))}),e(window).on("load",function(){e(this).trigger("smoothload")})}(jQuery),function(e,t,n,i,r,o,s){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,o=t.createElement(n),s=t.getElementsByTagName(n)[0],o.async=1,
o.src=i,s.parentNode.insertBefore(o,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),function(e,t,n,i,r,o,s){e.fbq||(r=e.fbq=function(){r.callMethod?r.callMethod.apply(r,arguments):r.queue.push(arguments)},e._fbq||(e._fbq=r),r.push=r,r.loaded=!0,r.version="2.0",r.queue=[],o=t.createElement(n),o.async=!0,o.src=i,s=t.getElementsByTagName(n)[0],s.parentNode.insertBefore(o,s))}(window,document,"script","//connect.facebook.net/en_US/fbevents.js"),function(e){ga("create","UA-58119300-1","auto"),fbq("init","1678257339116978"),e(window).on("smoothload",function(){ga("set","location",location.href),ga("require","linkid"),ga("send","pageview"),fbq("track","PageView")})}(jQuery),$(window).on("smoothload",function(){$(document).foundation()});