(this.webpackJsonpm=this.webpackJsonpm||[]).push([[3],{129:function(e,t,n){e.exports={banner:"style_banner__GbySt","text-box":"style_text-box__27UQd",active:"style_active__FMuYh"}},130:function(e,t,n){e.exports=n.p+"static/media/x1.4b66f805.png"},131:function(e,t,n){e.exports=n.p+"static/media/x2.6bedead5.png"},132:function(e,t,n){e.exports=n.p+"static/media/x3.a5d4df55.png"},133:function(e,t,n){e.exports=n.p+"static/media/x4.4b594e97.png"},134:function(e,t,n){e.exports=n.p+"static/media/x5.e4a856e8.png"},145:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(2),c=n(3),r=n(4),o=n(0),s=n.n(o),l=n(128),u=n.n(l);var m=function(e,t){var n=function(){},a=function(e){setTimeout(e||n,0)},i=!!window.addEventListener,c="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,r=function(e){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in t)if(void 0!==e.style[t[n]])return!0;return!1}(document.createElement("swipe"));if(e){var o,s,l,u,m=e.children[0];t=t||{};var d=parseInt(t.startSlide,10)||0,v=t.speed||300;t.continuous=void 0===t.continuous||t.continuous;var p,h,E=t.auto||0,f={},b={},g={handleEvent:function(e){switch(e.type){case"touchstart":this.start(e);break;case"touchmove":this.move(e);break;case"touchend":a(this.end(e));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":a(this.transitionEnd(e));break;case"resize":a(x)}t.stopPropagation&&e.stopPropagation()},start:function(e){var t=e.touches[0];f={x:t.pageX,y:t.pageY,time:+new Date},h=void 0,b={},m.addEventListener("touchmove",this,!1),m.addEventListener("touchend",this,!1)},move:function(e){if(!(e.touches.length>1||e.scale&&1!==e.scale)){t.disableScroll&&e.preventDefault();var n=e.touches[0];b={x:n.pageX-f.x,y:n.pageY-f.y},"undefined"==typeof h&&(h=!!(h||Math.abs(b.x)<Math.abs(b.y))),h||(e.preventDefault(),k(),t.continuous?(T(N(d-1),b.x+s[N(d-1)],0),T(d,b.x+s[d],0),T(N(d+1),b.x+s[N(d+1)],0)):(b.x=b.x/(!d&&b.x>0||d==o.length-1&&b.x<0?Math.abs(b.x)/l+1:1),T(d-1,b.x+s[d-1],0),T(d,b.x+s[d],0),T(d+1,b.x+s[d+1],0)))}},end:function(e){var n=+new Date-f.time,a=Number(n)<250&&Math.abs(b.x)>20||Math.abs(b.x)>l/2,i=!d&&b.x>0||d==o.length-1&&b.x<0;t.continuous&&(i=!1);var c=b.x<0;h||(a&&!i?(c?(t.continuous?(w(N(d-1),-l,0),w(N(d+2),l,0)):w(d-1,-l,0),w(d,s[d]-l,v),w(N(d+1),s[N(d+1)]-l,v),d=N(d+1)):(t.continuous?(w(N(d+1),l,0),w(N(d-2),-l,0)):w(d+1,l,0),w(d,s[d]+l,v),w(N(d-1),s[N(d-1)]+l,v),d=N(d-1)),t.callback&&t.callback(d,o[d])):t.continuous?(w(N(d-1),-l,v),w(d,0,v),w(N(d+1),l,v)):(w(d-1,-l,v),w(d,0,v),w(d+1,l,v))),m.removeEventListener("touchmove",g,!1),m.removeEventListener("touchend",g,!1)},transitionEnd:function(e){parseInt(e.target.getAttribute("data-index"),10)==d&&(E&&j(),t.transitionEnd&&t.transitionEnd.call(e,d,o[d]))}};return x(),E&&j(),i?(c&&m.addEventListener("touchstart",g,!1),r&&(m.addEventListener("webkitTransitionEnd",g,!1),m.addEventListener("msTransitionEnd",g,!1),m.addEventListener("oTransitionEnd",g,!1),m.addEventListener("otransitionend",g,!1),m.addEventListener("transitionend",g,!1)),window.addEventListener("resize",g,!1)):window.onresize=function(){x()},{setup:function(){x()},slide:function(e,t){k(),_(e,t)},prev:function(){k(),(t.continuous||d)&&_(d-1)},next:function(){k(),y()},stop:function(){k()},getPos:function(){return d},getNumSlides:function(){return u},kill:function(){k(),m.style.width="",m.style.left="";for(var e=o.length;e--;){var t=o[e];t.style.width="",t.style.left="",r&&T(e,0,0)}i?(m.removeEventListener("touchstart",g,!1),m.removeEventListener("webkitTransitionEnd",g,!1),m.removeEventListener("msTransitionEnd",g,!1),m.removeEventListener("oTransitionEnd",g,!1),m.removeEventListener("otransitionend",g,!1),m.removeEventListener("transitionend",g,!1),window.removeEventListener("resize",g,!1)):window.onresize=null}}}function x(){o=m.children,u=o.length,o.length<2&&(t.continuous=!1),r&&t.continuous&&o.length<3&&(m.appendChild(o[0].cloneNode(!0)),m.appendChild(m.children[1].cloneNode(!0)),o=m.children),s=new Array(o.length),l=e.getBoundingClientRect().width||e.offsetWidth,m.style.width=o.length*l+"px";for(var n=o.length;n--;){var a=o[n];a.style.width=l+"px",a.setAttribute("data-index",n),r&&(a.style.left=n*-l+"px",w(n,d>n?-l:d<n?l:0,0))}t.continuous&&r&&(w(N(d-1),-l,0),w(N(d+1),l,0)),r||(m.style.left=d*-l+"px"),e.style.visibility="visible"}function y(){(t.continuous||d<o.length-1)&&_(d+1)}function N(e){return(o.length+e%o.length)%o.length}function _(e,n){if(d!=e){if(r){var i=Math.abs(d-e)/(d-e);if(t.continuous){var c=i;(i=-s[N(e)]/l)!==c&&(e=-i*o.length+e)}for(var u=Math.abs(d-e)-1;u--;)w(N((e>d?e:d)-u-1),l*i,0);e=N(e),w(d,l*i,n||v),w(e,0,n||v),t.continuous&&w(N(e-i),-l*i,0)}else e=N(e),function(e,n,a){if(!a)return void(m.style.left=n+"px");var i=+new Date,c=setInterval((function(){var r=+new Date-i;if(r>a)return m.style.left=n+"px",E&&j(),t.transitionEnd&&t.transitionEnd.call(event,d,o[d]),void clearInterval(c);m.style.left=(n-e)*(Math.floor(r/a*100)/100)+e+"px"}),4)}(d*-l,e*-l,n||v);d=e,a(t.callback&&t.callback(d,o[d]))}}function w(e,t,n){T(e,t,n),s[e]=t}function T(e,t,n){var a=o[e],i=a&&a.style;i&&(i.webkitTransitionDuration=i.MozTransitionDuration=i.msTransitionDuration=i.OTransitionDuration=i.transitionDuration=n+"ms",i.webkitTransform="translate("+t+"px,0)translateZ(0)",i.msTransform=i.MozTransform=i.OTransform="translateX("+t+"px)")}function j(){p=setTimeout(y,E)}function k(){E=0,clearTimeout(p)}},d=n(11),v=n(129),p=n.n(v),h=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).to=function(t){if(e.props.to){var n=e.props,a=n.history,i=n.to,c=i.pathname,r=i.apiname;a.push({pathname:"".concat(c,"/").concat(t),search:"apiname=".concat(r)})}},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){new m(u()("."+p.a.banner)[0],{auto:2e3,continuous:!0,stopPropation:!0,callback:function(e,t){u()(".banner ol li").removeClass("active"),u()(".banner ol li").eq(e).addClass("active")}})}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.style;return s.a.createElement("div",{className:p.a.banner,style:a},s.a.createElement("ul",{className:p.a.clearfix},n.map((function(t){return s.a.createElement("li",{key:t._id,onClick:function(){return e.to(t._id)}},s.a.createElement("img",{src:e.baseUrl+t.banner,alt:""}),s.a.createElement("div",{className:p.a["text-box"]},s.a.createElement("h2",null,t.title),s.a.createElement("p",null,t.sub_title)))}))))}}]),n}(o.Component);h.defaultProps={};var E=Object(d.g)(h),f=(n(79),n(5)),b=n(58),g=(n(23),o.Component,n(78)),x=(o.Component,n(17)),y=n(16),N=(n(61),function(e){Object(r.a)(o,e);var t=Object(c.a)(o);function o(){var e;Object(a.a)(this,o);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={str:["\u513f\u7ae5\u52ab\u76ae\u80a4","\u5c0f\u5b66\u751f\u8bfa\u624b","\u65e0\u654c\u6258\u513f\u7d22"],i:0},e.dd=function(){setInterval((function(){e.setState({i:e.state.i++}),e.chang.setAttribute("placeholder",e.state.str[e.state.i])}),1e3)},e.renderPage=function(){console.log(e.chang);var t=e.props.match,a=e.props.banner;return console.log(t.url,t.patch),s.a.createElement("div",{className:"Home"},s.a.createElement("div",{className:"header"},s.a.createElement("span",{className:"iconfont icon-fdj"}),s.a.createElement("input",{type:"text",ref:function(t){return e.chang=t},onClick:function(){return e.props.history.push("/soso")},placeholder:"\u897f\u5b89\u6ce1\u998d"}),s.a.createElement("span",{className:"iconfont icon-ht"}),s.a.createElement("span",{className:"iconfont icon-gwc"})),s.a.createElement(E,{data:a,to:{pathname:"/detail",apiname:"banner"},style:{height:"4.5rem"}}),s.a.createElement("div",{className:"Section"},s.a.createElement("a",null,s.a.createElement("img",{src:n(130),alt:""}),"\u673a\u7968"),s.a.createElement("a",null,s.a.createElement("img",{src:n(131),alt:""}),"\u9152\u5e97"),s.a.createElement("a",null,s.a.createElement("img",{src:n(132),alt:""}),"\u706b\u8f66\u7968"),s.a.createElement("a",null,s.a.createElement("img",{src:n(133),alt:""}),"\u6c7d\u8f66\u7968"),s.a.createElement("a",null,s.a.createElement("img",{src:n(134),alt:""}),"\u95e8\u7968")),s.a.createElement("div",{className:"tuijian"},s.a.createElement("div",{className:"tjlist"},s.a.createElement("p",null,"\u51fa\u5883\u6e38"),s.a.createElement("span",null,"\u8d70\u904d\u5168\u7403")),s.a.createElement("div",{className:"tjlist"},s.a.createElement("p",null,"\u51fa\u5883\u6e38"),s.a.createElement("span",null,"\u8d70\u904d\u5168\u7403")),s.a.createElement("div",{className:"tjlist"},s.a.createElement("p",null,"\u51fa\u5883\u6e38"),s.a.createElement("span",null,"\u8d70\u904d\u5168\u7403")),s.a.createElement("div",{className:"tjlist"},s.a.createElement("p",null,"\u51fa\u5883\u6e38"),s.a.createElement("span",null,"\u8d70\u904d\u5168\u7403")),s.a.createElement("div",{className:"tjlist"},s.a.createElement("p",null,"\u51fa\u5883\u6e38"),s.a.createElement("span",null,"\u8d70\u904d\u5168\u7403")),s.a.createElement("div",{className:"tjlist"},s.a.createElement("p",null,"\u51fa\u5883\u6e38"),s.a.createElement("span",null,"\u8d70\u904d\u5168\u7403")),s.a.createElement("div",{className:"tjlist"},s.a.createElement("p",null,"\u51fa\u5883\u6e38"),s.a.createElement("span",null,"\u8d70\u904d\u5168\u7403")),s.a.createElement("div",{className:"tjlist"},s.a.createElement("p",null,"\u51fa\u5883\u6e38"),s.a.createElement("span",null,"\u8d70\u904d\u5168\u7403"))),s.a.createElement("div",{className:"vip"},s.a.createElement("div",{className:"vipleft"},s.a.createElement("strong",null,"\xa0\xa0\u6211\u7684\u4f1a\u5458\xa0\xa0"),s.a.createElement("span",null,"\u62a2\u9650\u91cf\u798f\u5229\xa0\xa0")),s.a.createElement("div",{className:"vipright"},s.a.createElement("strong",null,"\xa0\xa0\u7b7e\u5230\xa0\xa0"),s.a.createElement("span",null,"\u9886\u91cc\u7a0b\xa0\xa0"))),s.a.createElement("div",{className:"nav"},s.a.createElement(f.c,{activeClassName:"home__nav--active",to:"".concat(t.url,"/index")},"\u897f\u5b89"),s.a.createElement(f.c,{activeClassName:"home__nav--active",to:"".concat(t.url,"/baoji")},"\u5b9d\u9e21"),s.a.createElement(f.c,{activeClassName:"home__nav--active",to:"".concat(t.url,"/beijing")},"\u5317\u4eac"),s.a.createElement(f.c,{activeClassName:"home__nav--active",to:"".concat(t.url,"/shanghai")},"\u4e0a\u6d77"),s.a.createElement(f.c,{activeClassName:"home__nav--active",to:"".concat(t.url,"/sanya")},"\u4e09\u4e9a"),s.a.createElement(f.c,{activeClassName:"home__nav--active",to:"".concat(t.url,"/zhengzhou")},"\u90d1\u5dde"),s.a.createElement(f.c,{activeClassName:"home__nav--active",to:"".concat(t.url,"/shenzheng")},"\u6df1\u5733"),s.a.createElement(f.c,{activeClassName:"home__nav--active",to:"".concat(t.url,"/guangzhou")},"\u5e7f\u5dde"),s.a.createElement(f.c,{activeClassName:"home__nav--active",to:"".concat(t.url,"/aaa")},"\u4e09\u4e9a"),s.a.createElement(f.c,{activeClassName:"home__nav--active",to:"".concat(t.url,"/cs")},"\u90d1\u5dde"),s.a.createElement(f.c,{activeClassName:"home__nav--active",to:"".concat(t.url,"/shescasnzheng")},"\u6df1\u5733"),s.a.createElement(f.c,{activeClassName:"home__nav--active",to:"".concat(t.url,"/guangzhxsou")},"\u5e7f\u5dde")),s.a.createElement(d.a,{path:"/home",to:"/home/index"}),s.a.createElement(d.b,{path:"".concat(t.path),component:g.a}))},e.renderBareScreen=function(){return s.a.createElement(b.a,null)},e}return Object(i.a)(o,[{key:"componentDidMount",value:function(){console.log("Home componentDidMount"),this.props.dispatch(Object(x.a)("CLEAR_HOME")),this.props.dispatch(Object(x.a)("CLEAR_BANNER")),this.props.dispatch(Object(x.c)({collectionName:"home",type:"UPDATE_HOME",params:{_limit:10}})),this.props.dispatch(Object(x.c)({collectionName:"banner",type:"UPDATE_BANNER",params:{_limit:2}}))}},{key:"render",value:function(){return this.props.home?this.renderPage():null}}]),o}(o.Component));t.default=Object(y.b)((function(e){return{home:e.home,banner:e.banner}}))(N)}}]);
//# sourceMappingURL=3.7b6331f1.chunk.js.map