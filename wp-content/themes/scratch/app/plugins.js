// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*! Backstretch - v2.0.3 - 2012-11-30
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2012 Scott Robbin; Licensed MIT */
(function(e,t,n){"use strict";e.fn.backstretch=function(r,s){return(r===n||r.length===0)&&e.error("No images were supplied for Backstretch"),e(t).scrollTop()===0&&t.scrollTo(0,0),this.each(function(){var t=e(this),n=t.data("backstretch");n&&(s=e.extend(n.options,s),n.destroy(!0)),n=new i(this,r,s),t.data("backstretch",n)})},e.backstretch=function(t,n){return e("body").backstretch(t,n).data("backstretch")},e.expr[":"].backstretch=function(t){return e(t).data("backstretch")!==n},e.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var r={wrap:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},img:{position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxWidth:"none",zIndex:-999999}},i=function(n,i,o){this.options=e.extend({},e.fn.backstretch.defaults,o||{}),this.images=e.isArray(i)?i:[i],e.each(this.images,function(){e("<img />")[0].src=this}),this.isBody=n===document.body,this.$container=e(n),this.$wrap=e('<div class="backstretch"></div>').css(r.wrap).appendTo(this.$container),this.$root=this.isBody?s?e(t):e(document):this.$container;if(!this.isBody){var u=this.$container.css("position"),a=this.$container.css("zIndex");this.$container.css({position:u==="static"?"relative":u,zIndex:a==="auto"?0:a,background:"none"}),this.$wrap.css({zIndex:-999998})}this.$wrap.css({position:this.isBody&&s?"fixed":"absolute"}),this.index=0,this.show(this.index),e(t).on("resize.backstretch",e.proxy(this.resize,this)).on("orientationchange.backstretch",e.proxy(function(){this.isBody&&t.pageYOffset===0&&(t.scrollTo(0,1),this.resize())},this))};i.prototype={resize:function(){try{var e={left:0,top:0},n=this.isBody?this.$root.width():this.$root.innerWidth(),r=n,i=this.isBody?t.innerHeight?t.innerHeight:this.$root.height():this.$root.innerHeight(),s=r/this.$img.data("ratio"),o;s>=i?(o=(s-i)/2,this.options.centeredY&&(e.top="-"+o+"px")):(s=i,r=s*this.$img.data("ratio"),o=(r-n)/2,this.options.centeredX&&(e.left="-"+o+"px")),this.$wrap.css({width:n,height:i}).find("img:not(.deleteable)").css({width:r,height:s}).css(e)}catch(u){}return this},show:function(t){if(Math.abs(t)>this.images.length-1)return;this.index=t;var n=this,i=n.$wrap.find("img").addClass("deleteable"),s=e.Event("backstretch.show",{relatedTarget:n.$container[0]});return clearInterval(n.interval),n.$img=e("<img />").css(r.img).bind("load",function(t){var r=this.width||e(t.target).width(),o=this.height||e(t.target).height();e(this).data("ratio",r/o),e(this).fadeIn(n.options.speed||n.options.fade,function(){i.remove(),n.paused||n.cycle(),n.$container.trigger(s,n)}),n.resize()}).appendTo(n.$wrap),n.$img.attr("src",n.images[t]),n},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(this.index===0?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return this.images.length>1&&(clearInterval(this.interval),this.interval=setInterval(e.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(n){e(t).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),n||this.$wrap.remove(),this.$container.removeData("backstretch")}};var s=function(){var e=navigator.userAgent,n=navigator.platform,r=e.match(/AppleWebKit\/([0-9]+)/),i=!!r&&r[1],s=e.match(/Fennec\/([0-9]+)/),o=!!s&&s[1],u=e.match(/Opera Mobi\/([0-9]+)/),a=!!u&&u[1],f=e.match(/MSIE ([0-9]+)/),l=!!f&&f[1];return!((n.indexOf("iPhone")>-1||n.indexOf("iPad")>-1||n.indexOf("iPod")>-1)&&i&&i<534||t.operamini&&{}.toString.call(t.operamini)==="[object OperaMini]"||u&&a<7458||e.indexOf("Android")>-1&&i&&i<533||o&&o<6||"palmGetResource"in t&&i&&i<534||e.indexOf("MeeGo")>-1&&e.indexOf("NokiaBrowser/8.5.0")>-1||l&&l<=6)}()})(jQuery,window);

/*https://github.com/desandro/imagesloaded*/
(function(c,q){var m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function n(){var b=c(j),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function p(b){k(b.target,"error"===b.type)}function k(b,a){b.src===m||-1!==c.inArray(b,l)||(l.push(b),a?h.push(b):j.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),r&&d.notifyWith(c(b),[a,e,c(j),c(h)]),e.length===l.length&&(setTimeout(n),e.unbind(".imagesLoaded",
p)))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():0,r=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),l=[],j=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",p).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)k(a,e.isBroken);else if(a.complete&&a.naturalWidth!==q)k(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=m,a.src=d}):
n();return d?d.promise(g):g}})(jQuery);
/*
Thumbnail scroller jQuery plugin
Author: malihu [http://manos.malihu.gr]
Homepage: manos.malihu.gr/jquery-thumbnail-scroller
*/
function findPos(e){var t=curtop=0;if(e.offsetParent){t=e.offsetLeft;curtop=e.offsetTop;while(e=e.offsetParent){t+=e.offsetLeft;curtop+=e.offsetTop}}return[curtop,t]}(function(e){e.fn.thumbnailScroller=function(t){var n={scrollerType:"hoverPrecise",scrollerOrientation:"horizontal",scrollEasing:"easeOutCirc",scrollEasingAmount:800,acceleration:2,scrollSpeed:600,noScrollCenterSpace:0,autoScrolling:0,autoScrollingSpeed:8e3,autoScrollingEasing:"easeInOutQuad",autoScrollingDelay:2500};var t=e.extend(n,t);return this.each(function(){function m(){if(l<n.width()/2&&i.position().left>=0){i.stop(true,true).css("left",0)}else if(l>n.width()/2&&i.position().left<=-(u-n.width())){i.stop(true,true).css("left",-(u-n.width()))}else{if(l<=n.width()/2-t.noScrollCenterSpace||l>=n.width()/2+t.noScrollCenterSpace){d=Math.round(Math.cos(l/n.width()*Math.PI)*(p+t.acceleration));i.stop(true,true).animate({left:"+="+d},p,"linear")}else{i.stop(true,true)}}if(c<n.height()/2&&i.position().top>=0){i.stop(true,true).css("top",0)}else if(c>n.height()/2&&i.position().top<=-(a-n.height())){i.stop(true,true).css("top",-(a-n.height()))}else{if(c<=n.height()/2-t.noScrollCenterSpace||c>=n.height()/2+t.noScrollCenterSpace){v=Math.cos(c/n.height()*Math.PI)*(p+t.acceleration);i.stop(true,true).animate({top:"+="+v},p,"linear")}else{i.stop(true,true)}}}function y(){i.delay(t.autoScrollingDelay).animate({left:-(u-n.width()),top:-(a-n.height())},t.autoScrollingSpeed,t.autoScrollingEasing,function(){i.animate({left:0,top:0},t.autoScrollingSpeed,t.autoScrollingEasing,function(){g++;if(t.autoScrolling>1&&t.autoScrolling!=g){y()}})})}function b(){o.hide();s.show();s.click(function(e){e.preventDefault();var r=i.position().left;var f=u+(r-n.width());var l=i.position().top;var c=a+(l-n.height());o.stop().show("fast");if(t.scrollerOrientation=="horizontal"){if(f>=n.width()){i.stop().animate({left:"-="+n.width()},t.scrollSpeed,t.scrollEasing,function(){if(f==n.width()){s.stop().hide("fast")}})}else{s.stop().hide("fast");i.stop().animate({left:n.width()-u},t.scrollSpeed,t.scrollEasing)}}else{if(c>=n.height()){i.stop().animate({top:"-="+n.height()},t.scrollSpeed,t.scrollEasing,function(){if(c==n.height()){s.stop().hide("fast")}})}else{s.stop().hide("fast");i.stop().animate({top:n.height()-a},t.scrollSpeed,t.scrollEasing)}}});o.click(function(e){e.preventDefault();var r=i.position().left;var f=u+(r-n.width());var l=i.position().top;var c=a+(l-n.height());s.stop().show("fast");if(t.scrollerOrientation=="horizontal"){if(r+n.width()<=0){i.stop().animate({left:"+="+n.width()},t.scrollSpeed,t.scrollEasing,function(){if(r+n.width()==0){o.stop().hide("fast")}})}else{o.stop().hide("fast");i.stop().animate({left:0},t.scrollSpeed,t.scrollEasing)}}else{if(l+n.height()<=0){i.stop().animate({top:"+="+n.height()},t.scrollSpeed,t.scrollEasing,function(){if(l+n.height()==0){o.stop().hide("fast")}})}else{o.stop().hide("fast");i.stop().animate({top:0},t.scrollSpeed,t.scrollEasing)}}})}var n=e(this);var r=n.children(".jTscrollerContainer");var i=n.children(".jTscrollerContainer").children(".jTscroller");var s=n.children(".jTscrollerNextButton");var o=n.children(".jTscrollerPrevButton");if(t.scrollerOrientation=="horizontal"){r.css("width",999999);var u=i.outerWidth(true);r.css("width",u)}else{var u=i.outerWidth(true)}var a=i.outerHeight(true);if(u>n.width()||a>n.height()){var f;var l;var c;if(t.scrollerType=="hoverAccelerate"){var h;var p=8;n.hover(function(){n.mousemove(function(e){f=findPos(this);l=e.pageX-f[1];c=e.pageY-f[0]});clearInterval(h);h=setInterval(m,p)},function(){clearInterval(h);i.stop()});o.add(s).hide()}else if(t.scrollerType=="clickButtons"){b()}else{f=findPos(this);n.mousemove(function(e){l=e.pageX-f[1];c=e.pageY-f[0];var r=l/n.width();if(r>1){r=1}var s=c/n.height();if(s>1){s=1}var o=Math.round(-((u-n.width())*r));var h=Math.round(-((a-n.height())*s));i.stop(true,false).animate({left:o,top:h},t.scrollEasingAmount,t.scrollEasing)});o.add(s).hide()}if(t.autoScrolling>0){y()}}else{o.add(s).hide()}var d;var v;var g=0})}})(jQuery);
/*
 * jQuery UI Effects 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function m(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return n.transparent;return n[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return m(b)}function o(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function p(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function l(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=m(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var n={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},q=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
d){if(f.isFunction(b)){d=b;b=null}return this.queue(function(){var e=f(this),g=e.attr("style")||" ",h=p(o.call(this)),r,v=e.attr("class");f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});r=p(o.call(this));e.attr("class",v);e.animate(u(h,r),{queue:false,duration:a,easding:b,complete:function(){f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments);f.dequeue(this)}})})};
f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,
[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.13",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,a){var b;switch(c[0]){case "top":b=
0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});
c.wrap(b);b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(d,e){a[e]=c.css(e);if(isNaN(parseInt(a[e],10)))a[e]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent().replaceWith(c);return c},setTransition:function(c,
a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});return d.call(this,b)},_show:f.fn.show,show:function(c){if(l(c))return this._show.apply(this,arguments);else{var a=k.apply(this,arguments);
a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(l(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(l(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),b=[];f.each(["em","px","%",
"pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,a,b,d,e){return d*
((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,d,e){if((a/=
e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==e)return b+d;if((a/=
e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/
h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);if(a<1)return-0.5*
h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,a,b,d,e){return d-f.easing.easeOutBounce(c,
e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;


/*
* scrollingCarousel 2.0 - jQuery plugin
* Written by Adam Lafene
*
* Copyright (c) 2011 Adam Lafene - www.convergent-evolution.co.uk
*
* Licensed under the terms of the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*   
*   This plugin utilises Corey Dutson's jQuery Plugin template
*   Check it out here:
*       http://wallofscribbles.com/2011/my-jquery-plugin-is-open-season
*/

(function(a){a.fn.scrollingCarousel=function(u,q){if(1<this.length){var v=[];this.each(function(b){v.push(a(this).scrollingCarousel(u,b))});return v}var b=a.extend({},a().scrollingCarousel.defaults,u),r,l;this.Destroy=function(){var b=this;a(b).removeData("scrollingCarousel");b.children(":eq(1)").remove();0<a(this).find("> div").length?(b[0].innerHTML=a(this).find("> div")[0].innerHTML,b.children().each(function(){a(this,b)[0].style.cssText=""})):b.find("li").each(function(){a(this,b)[0].style.cssText= ""});b.children()[0].style.cssText="";b[0].style.cssText="";b.unbind()};this.Update=function(l){b=null;b=a.extend({},a().scrollingCarousel.defaults,l);this.Destroy(!0);return this.Create()};this.Create=function(q,o){if(!a(this).html())return!1;var d=this;d.html();if(!0==a(d).data("scrollingCarousel")&&"pause"!=o)return this;null!=b.beforeCreateFunction&&a.isFunction(b.beforeCreateFunction)&&b.beforeCreateFunction(d,b);var f,h=0,c,p,m,i,n,j={},e=d[0];e.style.paddingLeft="0";e.style.paddingRight="0"; var k=e.offsetWidth;switch(d.children()[0].nodeName.toLowerCase()){case "div":o||(e.innerHTML="<div>"+d[0].innerHTML+"</div>",e.innerHTML+=e.innerHTML);f=d.children("div");m=d.children("div:first").children("div");break;case "ul":o||(e.innerHTML+=e.innerHTML);f=d.find("ul");m=d.find("ul:first > li");break;case "ol":o||(e.innerHTML+=e.innerHTML);f=d.find("ol");m=d.find("ol:first > li");break;default:return console.log("unable to initialise scroller - please ensure contents are either in a UL, an OL or in DIVs"), !1}switch(b.scrollSpeed.toLowerCase()){case "slow":p=1;break;case "fast":p=4;break;default:p=2}var g=0,t=0,s=0;switch(b.scrollerAlignment.toLowerCase()){case "vertical":a(m).each(function(){g+=a(this,d).outerHeight(!0);a(this,d)[0].offsetWidth>s&&(s=a(this,d)[0].offsetWidth)});break;default:a(m).each(function(){g+=a(this,d).outerWidth(!0);a(this,d)[0].offsetHeight>t&&(t=a(this,d)[0].offsetHeight)})}if(!o){"vertical"!=b.scrollerAlignment.toLowerCase()?e.style.height=t+"px":(e.style.width=s+"px",e.style.height= 0<a(e).height()?a(e).height()+"px":a(e).parent().height()+"px",k=e.offsetHeight);if(g>k)m=Math.round(g/100*b.scrollerOffset)-Math.round(k/2),m>g-k&&(m=g-k);else return a(f[1]).remove(),!1;e.style.overflow="hidden";e.style.position="relative";f.each(function(){a(this,d)[0].style.position="absolute";if(b.scrollerAlignment.toLowerCase()!="vertical"){a(this,d)[0].style.top="0";a(this,d)[0].style.width=g+"px"}else{a(this,d)[0].style.left="0";a(this,d)[0].style.height=g+"px";a(this,d)[0].style.width=s+ "px"}a(this).children().each(function(){if(b.scrollerAlignment.toLowerCase()!="vertical")a(this,d)[0].style.cssFloat="left";a(this,d)[0].style.position="static"})});"vertical"!=b.scrollerAlignment.toLowerCase()?(f[0].style.left=0<m?"-"+m+"px":"0",!0==b.looped?f[1].style.left=f[0].offsetLeft-g+"px":(f[1].style.display="none",f[1].style.top="-1000px")):(f[0].style.top=0<m?"-"+m+"px":"0",!0==b.looped?f[1].style.top=f[0].offsetTop-g+"px":(f[1].style.display="none",f[1].style.left="-1000px"));d.mouseenter(function(){j.startCarousel()}); d.mouseleave(function(){j.stopCarousel(true);b.autoScroll==true&&j.autoScroll()});d.mousemove(function(b){var c={x:0,y:0};if(b.pageX||b.pageY){c.x=b.pageX;c.y=b.pageY}else{var a=document.documentElement,d=document.body;c.x=b.clientX+((a.scrollLeft||d.scrollLeft)-(a.clientLeft||0));c.y=b.clientY+((a.scrollTop||d.scrollTop)-(a.clientTop||0))}cursorPosition=c})}j.autoScroll=function(){var a=40;!1!=b.looped&&(l&&(clearInterval(l),l=0),c=c?c:"vertical"!=b.scrollerAlignment.toLowerCase()?parseInt(f[0].style.left): parseInt(f[0].style.top),b.autoScrollSpeed=1E3>b.autoScrollSpeed?1E3:b.autoScrollSpeed,b.autoScrollSpeed/a<k?i=Math.round(k/(b.autoScrollSpeed/a)):(i=1,a=Math.round(b.autoScrollSpeed/k)),l=setInterval(function(){switch(b.autoScrollDirection.toLowerCase()){case "right":case "down":if(c+i>g){c=0;h=h==0?1:0}else c=c+i;break;default:if(c-i<0-(g-k)){c=k;h=h==0?1:0}else c=c-i}if(b.scrollerAlignment.toLowerCase()!="vertical"){f[h].style.left=c+"px";f[h==0?1:0].style.left=c-g+"px"}else{f[h].style.top=c+"px"; f[h==0?1:0].style.top=c-g+"px"}},a))};j.startCarousel=function(){l&&(clearInterval(l),l=0);n="vertical"!=b.scrollerAlignment.toLowerCase()?Math.round(a(e).offset().left+e.offsetWidth/2):Math.round(a(e).offset().top+e.offsetHeight/2);c=c?c:"vertical"!=b.scrollerAlignment.toLowerCase()?parseInt(f[0].style.left):parseInt(f[0].style.top);r=setInterval(function(){var a,d=b.scrollerAlignment.toLowerCase()!="vertical"?cursorPosition.x:cursorPosition.y,e=k/2;a=d<n?n-d:d-n;i=a<Math.ceil(e/100*30)?1:a<Math.ceil(e/ 100*50)?2*p:a<Math.ceil(e/100*70)?3*p:a<Math.ceil(e/100*90)?4*p:6*p;if(d<n)if(c+i>0&&b.looped==false)c=0;else if(c+i>g){c=0;h=h==0?1:0}else c=c+i;else if(d>n)if(c-i<0-(g-k))if(b.looped==false)c=0-(g-k);else{c=k;h=h==0?1:0}else c=c-i;if(b.scrollerAlignment.toLowerCase()!="vertical"){f[h].style.left=c+"px";f[h==0?1:0].style.left=c-g+"px"}else{f[h].style.top=c+"px";f[h==0?1:0].style.top=c-g+"px"}},40)};j.stopCarousel=function(a){if(r&&(clearInterval(r),r=0,a&&!(!1==b.looped||!0==b.autoScroll)&&1<i)){for(var d= 0,a=i;1<a;a--)d+=a;var e="vertical"!=b.scrollerAlignment.toLowerCase()?cursorPosition.x:cursorPosition.y;e<n?c+d>g&&(c-=g,h=0==h?1:0):c-d<0-(g-k)&&(c+=g,h=0==h?1:0);var j=setInterval(function(){if(i>1){c=e<n?c+i:c-i;if(b.scrollerAlignment.toLowerCase()!="vertical"){f[h].style.left=c+"px";f[h==0?1:0].style.left=c-g+"px"}else{f[h].style.top=c+"px";f[h==0?1:0].style.top=c-g+"px"}i--}else clearInterval(j)},50)}};"pause"!=o&&!0==b.autoScroll&&j.autoScroll();switch(o){case "pause":j.stopCarousel();l&&(clearInterval(l), l=0);d.unbind("mouseenter");d.unbind("mouseleave");a(d).data("scrollingCarousel",!1);return;case "play":a("html").mousemove(function(c){var e={x:0,y:0};if(c.pageX||c.pageY)e.x=c.pageX,e.y=c.pageY;else{var f=document.documentElement,g=document.body;e.x=c.clientX+(f.scrollLeft||g.scrollLeft)-(f.clientLeft||0);e.y=c.clientY+(f.scrollTop||g.scrollTop)-(f.clientTop||0)}cursorPosition=e;cursorPosition.x>=d.offset().left&&(cursorPosition.x<=d.offset().left+d[0].offsetWidth&&cursorPosition.y>=d.offset().top&& cursorPosition.y<=d.offset().top+d[0].offsetHeight)&&j.startCarousel();d.mouseenter(function(){j.startCarousel()});d.mouseleave(function(){j.stopCarousel(!0);!0==b.autoScroll&&j.autoScroll()});a(this).unbind("mousemove");!0==b.autoScroll&&j.autoScroll()})}a(d).data("scrollingCarousel",!0);null!=b.afterCreateFunction&&a.isFunction(b.afterCreateFunction)&&b.afterCreateFunction(d,b);return this};this.Pause=function(){this.Create(q,"pause")};this.Play=function(){this.Create(q,"play")};return this.Create(q)}; jQuery.fn.scrollingCarousel.defaults={autoScroll:!1,autoScrollDirection:"left",autoScrollSpeed:1E4,looped:!0,scrollerAlignment:"horizontal",scrollerOffset:0,scrollSpeed:"medium",beforeCreateFunction:null,afterCreateFunction:null}})(jQuery);