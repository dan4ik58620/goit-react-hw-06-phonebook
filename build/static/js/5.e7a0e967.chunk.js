(this["webpackJsonpreact-with-bootstrap"]=this["webpackJsonpreact-with-bootstrap"]||[]).push([[5],{80:function(e,t,n){"use strict";n.r(t);var c=n(4),r=n(0),a=n.n(r),s=n.p+"static/media/1.00266e76.jpeg",i=n.p+"static/media/2.aede0340.jpeg",o=n.p+"static/media/3.483c9ddb.jpeg",l=n(1),d=n(2),j=n(9);var u=function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},b=n(43),h=n(44),m=n(33),f=Math.pow(2,31)-1;function O(e,t,n){var c=n-Date.now();e.current=c<=f?setTimeout(t,c):setTimeout((function(){return O(e,t,n)}),f)}function x(){var e=Object(h.a)(),t=Object(r.useRef)();return Object(m.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(c,r){void 0===r&&(r=0),e()&&(n(),r<=f?t.current=setTimeout(c,r):O(t,c,Date.now()+r))},clear:n}}),[])}var p=n(3),v=n.n(p),g=n(23),w=n(15),D=n(6),I=n.n(D),C=n(32),y=n(14),A=Object(y.a)("carousel-caption"),M=n(5),E=a.a.forwardRef((function(e,t){var n=e.as,c=void 0===n?"div":n,r=e.bsPrefix,s=e.children,i=e.className,o=Object(d.a)(e,["as","bsPrefix","children","className"]),j=v()(i,Object(M.a)(r,"carousel-item"));return a.a.createElement(c,Object(l.a)({ref:t},o,{className:j}),s)}));E.displayName="CarouselItem";var T=E;function N(e,t){var n=0;return a.a.Children.map(e,(function(e){return a.a.isValidElement(e)?t(e,n++):e}))}var S=n(31),P=n(30),R={bsPrefix:I.a.string,as:I.a.elementType,slide:I.a.bool,fade:I.a.bool,controls:I.a.bool,indicators:I.a.bool,activeIndex:I.a.number,onSelect:I.a.func,onSlide:I.a.func,onSlid:I.a.func,interval:I.a.number,keyboard:I.a.bool,pause:I.a.oneOf(["hover",!1]),wrap:I.a.bool,touch:I.a.bool,prevIcon:I.a.node,prevLabel:I.a.string,nextIcon:I.a.node,nextLabel:I.a.string},G={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function k(e,t){var n=Object(C.a)(e,{activeIndex:"onSelect"}),c=n.as,s=void 0===c?"div":c,i=n.bsPrefix,o=n.slide,h=n.fade,m=n.controls,f=n.indicators,O=n.activeIndex,p=n.onSelect,D=n.onSlide,I=n.onSlid,y=n.interval,A=n.keyboard,E=n.onKeyDown,T=n.pause,R=n.onMouseOver,G=n.onMouseOut,k=n.wrap,L=n.touch,W=n.onTouchStart,X=n.onTouchMove,H=n.onTouchEnd,B=n.prevIcon,V=n.prevLabel,F=n.nextIcon,K=n.nextLabel,U=n.className,z=n.children,Y=Object(d.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),J=Object(M.a)(i,"carousel"),q=Object(r.useRef)(null),Q=Object(r.useState)("next"),Z=Q[0],$=Q[1],_=Object(r.useState)(!1),ee=_[0],te=_[1],ne=Object(r.useState)(!1),ce=ne[0],re=ne[1],ae=Object(r.useState)(O||0),se=ae[0],ie=ae[1];ce||O===se||(q.current?$(q.current):$((O||0)>se?"next":"prev"),o&&re(!0),ie(O||0)),Object(r.useEffect)((function(){q.current&&(q.current=null)}));var oe,le=0;!function(e,t){var n=0;a.a.Children.forEach(e,(function(e){a.a.isValidElement(e)&&t(e,n++)}))}(z,(function(e,t){++le,t===O&&(oe=e.props.interval)}));var de=Object(b.a)(oe),je=Object(r.useCallback)((function(e){if(!ce){var t=se-1;if(t<0){if(!k)return;t=le-1}q.current="prev",p&&p(t,e)}}),[ce,se,p,k,le]),ue=Object(j.a)((function(e){if(!ce){var t=se+1;if(t>=le){if(!k)return;t=0}q.current="next",p&&p(t,e)}})),be=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:be.current,prev:je,next:ue}}));var he=Object(j.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(be.current)&&ue()})),me="next"===Z?"left":"right";u((function(){o||(D&&D(se,me),I&&I(se,me))}),[se]);var fe=J+"-item-"+Z,Oe=J+"-item-"+me,xe=Object(r.useCallback)((function(e){Object(P.a)(e),D&&D(se,me)}),[D,se,me]),pe=Object(r.useCallback)((function(){re(!1),I&&I(se,me)}),[I,se,me]),ve=Object(r.useCallback)((function(e){if(A&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void je(e);case"ArrowRight":return e.preventDefault(),void ue(e)}E&&E(e)}),[A,E,je,ue]),ge=Object(r.useCallback)((function(e){"hover"===T&&te(!0),R&&R(e)}),[T,R]),we=Object(r.useCallback)((function(e){te(!1),G&&G(e)}),[G]),De=Object(r.useRef)(0),Ie=Object(r.useRef)(0),Ce=x(),ye=Object(r.useCallback)((function(e){De.current=e.touches[0].clientX,Ie.current=0,"hover"===T&&te(!0),W&&W(e)}),[T,W]),Ae=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?Ie.current=0:Ie.current=e.touches[0].clientX-De.current,X&&X(e)}),[X]),Me=Object(r.useCallback)((function(e){if(L){var t=Ie.current;Math.abs(t)>40&&(t>0?je(e):ue(e))}"hover"===T&&Ce.set((function(){te(!1)}),y||void 0),H&&H(e)}),[L,T,je,ue,Ce,y,H]),Ee=null!=y&&!ee&&!ce,Te=Object(r.useRef)();Object(r.useEffect)((function(){var e,t;if(Ee)return Te.current=window.setInterval(document.visibilityState?he:ue,null!=(e=null!=(t=de.current)?t:y)?e:void 0),function(){null!==Te.current&&clearInterval(Te.current)}}),[Ee,ue,de,y,he]);var Ne=Object(r.useMemo)((function(){return f&&Array.from({length:le},(function(e,t){return function(e){p&&p(t,e)}}))}),[f,le,p]);return a.a.createElement(s,Object(l.a)({ref:be},Y,{onKeyDown:ve,onMouseOver:ge,onMouseOut:we,onTouchStart:ye,onTouchMove:Ae,onTouchEnd:Me,className:v()(U,J,o&&"slide",h&&J+"-fade")}),f&&a.a.createElement("ol",{className:J+"-indicators"},N(z,(function(e,t){return a.a.createElement("li",{key:t,className:t===se?"active":void 0,onClick:Ne?Ne[t]:void 0})}))),a.a.createElement("div",{className:J+"-inner"},N(z,(function(e,t){var n=t===se;return o?a.a.createElement(w.e,{in:n,onEnter:n?xe:void 0,onEntered:n?pe:void 0,addEndListener:g.a},(function(t){return a.a.cloneElement(e,{className:v()(e.props.className,n&&"entered"!==t&&fe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Oe)})})):a.a.cloneElement(e,{className:v()(e.props.className,n&&"active")})}))),m&&a.a.createElement(a.a.Fragment,null,(k||0!==O)&&a.a.createElement(S.a,{className:J+"-control-prev",onClick:je},B,V&&a.a.createElement("span",{className:"sr-only"},V)),(k||O!==le-1)&&a.a.createElement(S.a,{className:J+"-control-next",onClick:ue},F,K&&a.a.createElement("span",{className:"sr-only"},K))))}var L=a.a.forwardRef(k);L.displayName="Carousel",L.propTypes=R,L.defaultProps=G,L.Caption=A,L.Item=T;var W=L;var X=function(){return Object(c.jsxs)(W,{children:[Object(c.jsxs)(W.Item,{style:{height:"900px",width:"1950px"},children:[Object(c.jsx)("img",{src:s,alt:"img",className:"d-block w-100"}),Object(c.jsxs)(W.Caption,{children:[Object(c.jsx)("h2",{children:"S.T.A.L.K.E.R"}),Object(c.jsx)("p",{})]})]}),Object(c.jsxs)(W.Item,{style:{height:"900px",width:"1950px"},children:[Object(c.jsx)("img",{src:i,alt:"img",className:"d-block w-100"}),Object(c.jsxs)(W.Caption,{children:[Object(c.jsx)("h2",{children:"Call of Duty Modern Warfare"}),Object(c.jsx)("p",{children:"Remastered"})]})]}),Object(c.jsxs)(W.Item,{style:{height:"900px",width:"1950px"},children:[Object(c.jsx)("img",{src:o,alt:"img",className:"d-block w-100"}),Object(c.jsxs)(W.Caption,{children:[Object(c.jsx)("h2",{children:"Team Fortress 2"}),Object(c.jsx)("p",{})]})]})]})},H=n(74),B=["xl","lg","md","sm","xs"],V=a.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,r=e.noGutters,s=e.as,i=void 0===s?"div":s,o=Object(d.a)(e,["bsPrefix","className","noGutters","as"]),j=Object(M.a)(n,"row"),u=j+"-cols",b=[];return B.forEach((function(e){var t,n=o[e];delete o[e];var c="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&b.push(""+u+c+"-"+t)})),a.a.createElement(i,Object(l.a)({ref:t},o,{className:v.a.apply(void 0,[c,j,r&&"no-gutters"].concat(b))}))}));V.displayName="Row",V.defaultProps={noGutters:!1};var F=V,K=n(50),U=n.p+"static/media/4.023ea412.jpeg",z=n.p+"static/media/5.ced08346.jpeg",Y=n.p+"static/media/6.56f081b0.jpeg",J=n.p+"static/media/7.3f977962.jpeg",q=n.p+"static/media/8.c7a3157f.jpeg",Q=n.p+"static/media/9.97e3ffeb.jpeg",Z=n.p+"static/media/10.5204ae19.jpeg";t.default=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{style:{textAlign:"center"},children:"10 \u0428\u0423\u0422\u0415\u0420\u041e\u0412 \u0414\u041b\u042f \u0421\u041b\u0410\u0411\u042b\u0425 \u041f\u041a"}),Object(c.jsx)(X,{}),Object(c.jsx)(H.a,{style:{paddingTop:"2rem",paddingBottom:"2rem"}}),Object(c.jsxs)(H.a,{children:[Object(c.jsxs)(F,{children:[Object(c.jsx)(K.a,{md:5,children:Object(c.jsx)("img",{src:s,height:200,width:400,alt:"S.T.A.L.K.E.R"})}),Object(c.jsxs)(K.a,{md:7,children:[Object(c.jsx)("h2",{children:"S.T.A.L.K.E.R"}),Object(c.jsx)("p",{children:"\u0428\u0435\u0441\u0442\u044c \u043b\u0435\u0442 \u043c\u044b \u0436\u0434\u0430\u043b\u0438 S.T.A.L.K.E.R.. \u041d\u0435\u0442, \u0432\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0434\u0443\u043c\u0430\u0439\u0442\u0435\u0441\u044c: \u0428\u0415\u0421\u0422\u042c \u041b\u0415\u0422! \u0418\u0442\u0430\u043a, S.T.A.L.K.E.R. \u2014 \u0438\u0433\u0440\u0430-\u043c\u0438\u0444, \u0438\u0433\u0440\u0430-\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c, \u0438\u0433\u0440\u0430-\u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435, \u0432 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043b\u0435\u0436\u0430\u0442 \u043c\u043d\u043e\u0433\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u043b\u0435\u0433\u0435\u043d\u0434\u044b \u0447\u0435\u0440\u043d\u043e\u0431\u044b\u043b\u044c\u0441\u043a\u043e\u0439 \u0417\u043e\u043d\u044b, \u0432\u0441\u0435 \u044d\u0442\u0438 \u043c\u0440\u0430\u0447\u043d\u044b\u0435 \u043e\u0442\u0433\u043e\u043b\u043e\u0441\u043a\u0438 \u044d\u0445\u0430 \u043a\u0430\u0442\u0430\u0441\u0442\u0440\u043e\u0444\u044b \u0434\u0432\u0430\u0434\u0446\u0430\u0442\u0438\u043b\u0435\u0442\u043d\u0435\u0439 \u0434\u0430\u0432\u043d\u043e\u0441\u0442\u0438. \u041f\u043e\u0442\u044f\u043d\u0435\u0442 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0436\u0435\u043b\u0435\u0437\u0435 )"})]})]}),Object(c.jsxs)(F,{children:[Object(c.jsx)(K.a,{md:5,children:Object(c.jsx)("img",{src:i,height:200,width:400,alt:"Call of Duty\xae 4: Modern Warfare\xae"})}),Object(c.jsxs)(K.a,{md:7,children:[Object(c.jsx)("h2",{children:"Call of Duty\xae 4: Modern Warfare\xae"}),Object(c.jsx)("p",{children:"Call of Duty 4: Modern Warfare - \u044d\u0442\u043e \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0430\u044f \u043d\u043e\u043c\u0435\u0440\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0441\u0435\u0440\u0438\u0430\u043b\u0430 Call of Duty, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0443\u0434\u0438\u0435\u0439 Infinity Ward. \u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f: Microsoft\xae Windows\xae XP/Vista (Windows 95/98/ME/2000 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f) \u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440: Intel\xae Pentium\xae 4 \u0441 \u0442\u0430\u043a\u0442\u043e\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u043e\u0442\u043e\u0439 2,4 \u0413\u0413\u0446 / AMD(R) 64 (TM) 2800+ / \u0434\u0432\u0443\u0445\u044a\u044f\u0434\u0435\u0440\u043d\u044b\u0435 \u043e\u0442 Intel\xae \u0438 AMD\xae \u0441 \u0442\u0430\u043a\u0442\u043e\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u043e\u0442\u043e\u0439 1,8 \u0413\u0413\u0446 \u0438\u043b\u0438 \u043b\u0443\u0447\u0448\u0435 \u0412\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442\u0430: NVIDIA Geforce 6600 \u0438\u043b\u0438 \u043b\u0443\u0447\u0448\u0435 \u0438\u043b\u0438 ATI Radeon\xae 9800Pro \u0438\u043b\u0438 \u043b\u0443\u0447\u0448\u0435 \u041e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0430\u043c\u044f\u0442\u044c (\u0413\u0431): 1.0 \u0421\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u043d\u0430 HDD (\u0413\u0431): 8.0"})]})]}),Object(c.jsxs)(F,{children:[Object(c.jsx)(K.a,{md:5,children:Object(c.jsx)("img",{src:o,height:200,width:400,alt:"Team Fortress 2"})}),Object(c.jsxs)(K.a,{md:7,children:[Object(c.jsx)("h2",{children:"Team Fortress 2"}),Object(c.jsx)("p",{children:'Team Fortress 2 - \u044d\u0442\u043e \u0433\u0440\u043e\u0442\u0435\u0441\u043a\u043d\u044b\u0439 "\u0448\u043f\u0438\u043e\u043d\u0441\u043a\u0438\u0439" \u0431\u043e\u0435\u0432\u0438\u043a, \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0439 \u0432 \u0441\u0442\u0438\u043b\u0435 50-\u0445 \u0433\u043e\u0434\u043e\u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u0433\u043e \u0432\u0435\u043a\u0430. \u0418\u0433\u0440\u043e\u043a\u0438, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0434\u0432\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b - \u041a\u0440\u0430\u0441\u043d\u0443\u044e \u0438 \u0421\u0438\u043d\u0438\u044e, \u0432\u043e\u044e\u044e\u0442 \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c, \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u044f \u0437\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437\u043d\u044b\u0445 \u0431\u043e\u0435\u0432\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u043e\u043e\u0440\u0443\u0436\u0435\u043d \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u043e\u0440\u0443\u0436\u0438\u0435\u043c. \u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f: \u041e\u0421: Windows\xae 7 (32/64-bit)/Vista/XP. \u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440: 1.7 GHz Processor or better. \u041e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0430\u043c\u044f\u0442\u044c: 512 MB \u041e\u0417\u0423 DirectX: \u0412\u0435\u0440\u0441\u0438\u0438 8.1. \u0421\u0435\u0442\u044c: \u0428\u0438\u0440\u043e\u043a\u043e\u043f\u043e\u043b\u043e\u0441\u043d\u043e\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0443 \u041c\u0435\u0441\u0442\u043e \u043d\u0430 \u0434\u0438\u0441\u043a\u0435: 15 G'})]})]}),Object(c.jsxs)(F,{children:[Object(c.jsx)(K.a,{md:5,children:Object(c.jsx)("img",{src:U,height:200,width:400,alt:"FARCRY 3"})}),Object(c.jsxs)(K.a,{md:7,children:[Object(c.jsx)("h2",{children:"FARCRY 3"}),Object(c.jsx)("p",{children:"FARCRY 3 \u0443\u043b\u044c\u0442\u0438\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435\u043d\u043d\u0430\u044f \u0432\u0438\u0434\u0435\u043e\u0438\u0433\u0440\u0430 \u0432 \u0436\u0430\u043d\u0440\u0435 Action \u0432 \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u043c \u043c\u0438\u0440\u0435, \u0441 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 RPG \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u041e\u0421: Windows 7 (\u0441 SP1) \u0438\u043b\u0438 Windows 8 \u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440: Intel Core 2 Duo E6700 @ 2,6 \u0413\u0413\u0446 \u0438\u043b\u0438 \u043b\u0443\u0447\u0448\u0435, AMD Athlon 64 X2 6000+ @ 3,0 \u0413\u0413\u0446 \u0438\u043b\u0438 \u043b\u0443\u0447\u0448\u0435 \u041e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0430\u043c\u044f\u0442\u044c: 4 \u0413\u0411 \u0412\u0438\u0434\u0435\u043e: \u043a\u0430\u0440\u0442\u0430 512 \u041c\u0411, \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u0430\u044f \u0441 DirectX 9.0c, \u0441 Shader Model 3.0 \u0438\u043b\u0438 \u0432\u044b\u0448\u0435 / NVidia 8800 \u0438\u043b\u0438 \u043b\u0443\u0447\u0448\u0435, AMD HD 2900 \u0438\u043b\u0438 \u043b\u0443\u0447\u0448\u0435 \u0417\u0432\u0443\u043a: \u0417\u0432\u0443\u043a\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430, \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u0430\u044f \u0441 DirectX 9.0c, \u0441 \u043d\u043e\u0432\u0435\u0439\u0448\u0438\u043c\u0438 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0430\u043c\u0438 DirectX: 9.0c \u041c\u0435\u0441\u0442\u043e \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f: 15 \u0413\u0411 ."})]})]}),Object(c.jsxs)(F,{children:[Object(c.jsx)(K.a,{md:5,children:Object(c.jsx)("img",{src:z,height:200,width:400,alt:"Mafia: The City of Lost Heaven"})}),Object(c.jsxs)(K.a,{md:7,children:[Object(c.jsx)("h2",{children:"Mafia: The City of Lost Heaven"}),Object(c.jsx)("p",{children:"Mafia: The City of Lost Heaven \u2014 \u043a\u0443\u043b\u044c\u0442\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430, \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u0430\u044f \u0432 \u0441\u043c\u0435\u0448\u0435\u043d\u0438\u0438 \u0436\u0430\u043d\u0440\u043e\u0432 \u0448\u0443\u0442\u0435\u0440\u0430 \u043e\u0442 \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u043b\u0438\u0446\u0430 \u0441 \u0430\u0432\u0442\u043e\u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u043e\u043c, \u043f\u043e\u0432\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u043e \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f\u0445 \u0447\u043b\u0435\u043d\u0430 \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u043e\u0439 \u043c\u0430\u0444\u0438\u0438 \u0432 \u0432\u044b\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u043c \u0430\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u043c \u0433\u043e\u0440\u043e\u0434\u0435 \u041b\u043e\u0441\u0442 \u0425\u044d\u0432\u0435\u043d. \u041e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430: Windows 98/ME/2000/XP \u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440: Pentium 3 @ 500 MHz 96 Mb \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438 \u0412\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442\u0430: \u041b\u044e\u0431\u0430\u044f \u0441 32 Mb \u043f\u0430\u043c\u044f\u0442\u0438 \u041e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0430\u043c\u044f\u0442\u044c (\u0413\u0431): 1.0 \u0421\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u043d\u0430 HDD (\u0413\u0431): 1.8"})]})]}),Object(c.jsxs)(F,{children:[Object(c.jsx)(K.a,{md:5,children:Object(c.jsx)("img",{src:Y,height:200,width:400,alt:"Assassin\u2019s Creed II"})}),Object(c.jsxs)(K.a,{md:7,children:[Object(c.jsx)("h2",{children:"Assassin\u2019s Creed II"}),Object(c.jsx)("p",{children:"Assassin's Creed II \u2013 \u044d\u0442\u043e \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0447\u0435\u0441\u043a\u0438\u0439 \u044d\u043a\u0448\u0435\u043d \u043e\u0442 \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u043b\u0438\u0446\u0430. \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0438\u0433\u0440\u044b \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0432 \u0441\u0440\u0435\u0434\u043d\u0438\u0435 \u0432\u0435\u043a\u0430 \u0432 \u0418\u0442\u0430\u043b\u0438\u0438. \u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0442\u043e\u043c\u043e\u043a \u0432\u0435\u043b\u0438\u0447\u0430\u0439\u0448\u0438\u0445 \u0443\u0431\u0438\u0439\u0446 \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0414\u0435\u0437\u043c\u043e\u043d\u0434 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u0435\u043b\u0435 \u042d\u0446\u0438\u043e \u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0435 \u0434\u0435 \u043b\u0430 \u0424\u0438\u0440\u0435\u043d\u0446\u0435, \u043c\u0430\u0441\u0442\u0435\u0440\u0441\u043a\u0438 \u0432\u043b\u0430\u0434\u0435\u044e\u0449\u0435\u0433\u043e \u0445\u0430\u0448\u0448\u0430\u0448\u0438\u043d\u0441\u043a\u0438\u043c\u0438 \u043d\u0430\u0432\u044b\u043a\u0430\u043c\u0438. \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f : \u041e\u0421 \u2014 Windows XP, Windows Vista, Windows 7; \u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440 Intel Core 2 Duo 1,8 \u0413\u0413\u0446 \u0438\u043b\u0438 AMD Athlon X2 64 2,4 \u0413\u0413\u0446 \u041e\u0417\u0423 \u2014 1,5 \u0413\u0431 \u0434\u043b\u044f Windows XP \u0438 2 \u0413\u0431 \u0434\u043b\u044f Windows Vista, Windows 7; \u0412\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442\u0430 \u0441 256 \u041c\u0431 \u043f\u0430\u043c\u044f\u0442\u0438, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 DirectX 9.0; 8 \u0413\u0431 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 \u043d\u0430 \u0434\u0438\u0441\u043a\u0435."})]})]}),Object(c.jsxs)(F,{children:[Object(c.jsx)(K.a,{md:5,children:Object(c.jsx)("img",{src:J,height:200,width:400,alt:"Bulletstorm"})}),Object(c.jsxs)(K.a,{md:7,children:[Object(c.jsx)("h2",{children:"Bulletstorm"}),Object(c.jsx)("p",{children:"Bulletstorm (\u0441 \u0430\u043d\u0433\u043b. \u2014 \xab\u0423\u0440\u0430\u0433\u0430\u043d \u043f\u0443\u043b\u044c\xbb) \u2014 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u0430\u044f \u0438\u0433\u0440\u0430, \u0448\u0443\u0442\u0435\u0440 \u043e\u0442 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043b\u0438\u0446\u0430. \u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f: Windows XP (SP3), Windows Vista (SP2), Windows 7 \u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440 Intel Core 2 Duo, AMD Athlon X2, 1.6 GHz \u0438\u043b\u0438 \u043b\u0443\u0447\u0448\u0435 \u041f\u0430\u043c\u044f\u0442\u044c (RAM) 1.5 GB \u0421\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u043d\u0430 \u0434\u0438\u0441\u043a\u0435 9 GB DirectX 9.0c - \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u0430\u044f \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442\u0430, 256 MB; NVIDIA GeForce 7600 GS, ATI Radeon HD 2400 Pro 256 MB \u0438\u043b\u0438 \u043b\u0443\u0447\u0448\u0435 DirectX 9.0c - \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u0430\u044f \u0437\u0432\u0443\u043a\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430, 16-bit \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435"})]})]}),Object(c.jsxs)(F,{children:[Object(c.jsx)(K.a,{md:5,children:Object(c.jsx)("img",{src:q,height:200,width:400,alt:"Valorant"})}),Object(c.jsxs)(K.a,{md:7,children:[Object(c.jsx)("h2",{children:"Valorant"}),Object(c.jsx)("p",{children:"Valorant - \u044d\u0442\u043e \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0448\u0443\u0442\u0435\u0440 \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u0435\u0439 League of Legends, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0438\u0433\u0440\u043e\u043a\u043e\u0432 \u0436\u0434\u0443\u0442 \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 5\u04455 \u0438\u0433\u0440\u043e\u043a\u043e\u0432. \u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440: Intel Core 2 Duo E8400 \u0412\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442\u0430: Intel HD 3000 \u041e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0430\u043c\u044f\u0442\u044c: 4 \u0413\u0411 \u041e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430: Windows 7/8/10 64-\u0440\u0430\u0437\u0440\u044f\u0434\u043d\u0430\u044f"})]})]}),Object(c.jsxs)(F,{children:[Object(c.jsx)(K.a,{md:5,children:Object(c.jsx)("img",{src:Q,height:200,width:400,alt:"GTA: San Andreas"})}),Object(c.jsxs)(K.a,{md:7,children:[Object(c.jsx)("h2",{children:"GTA: San Andreas"}),Object(c.jsx)("p",{children:"Grand Theft Auto: San Andreas - \u043f\u044f\u0442\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0441\u0435\u0440\u0438\u0438 GTA, \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0440\u0430\u0437\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0432 1992 \u0433\u043e\u0434\u0443, \u0432\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0430 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u0430 \u043f\u0440\u0435\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0432 \u043c\u0435\u0433\u0430\u043f\u043e\u043b\u0438\u0441\u0430\u0445 \u041a\u0430\u043b\u0438\u0444\u043e\u0440\u043d\u0438\u0438. \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f: \u041e\u0421: Microsoft\xae Windows\xae 2000 \u0438 XP \u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440: Pentium III \u0438\u043b\u0438 AMD Athlon, \u0441 \u0442\u0430\u043a\u0442\u043e\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u043e\u0442\u043e\u0439 1 \u0413\u0413\u0446 \u041e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0430\u043c\u044f\u0442\u044c: 256 \u041c\u0411 \u0412\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442\u0430: \u0441 64 \u041c\u0411 \u0432\u0438\u0434\u0435\u043e\u043f\u0430\u043c\u044f\u0442\u0438 (Geforce 3 \u0438\u043b\u0438 \u043b\u0443\u0447\u0448\u0435) \u041c\u0435\u0441\u0442\u043e \u043d\u0430 \u0434\u0438\u0441\u043a\u0435: 3,6 \u0413\u0411 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 (\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430) \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e: \u0434\u043b\u044f \u0438\u0433\u0440\u044b \u0431\u0443\u0434\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u041f\u041e: DirectX \u0438 Sony DADC SecuROM"})]})]}),Object(c.jsxs)(F,{children:[Object(c.jsx)(K.a,{md:5,children:Object(c.jsx)("img",{src:Z,height:200,width:400,alt:"PUBG Lite"})}),Object(c.jsxs)(K.a,{md:7,children:[Object(c.jsx)("h2",{children:"PUBG Lite"}),Object(c.jsx)("p",{children:"PUBG LITE - \u044d\u0442\u043e \u0448\u0443\u0442\u0435\u0440 \u0432 \u0436\u0430\u043d\u0440\u0435 \u043a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u043a\u0430\u044f \u0431\u0438\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0432\u043e\u0435\u043c \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0435 \u0438 \u043d\u0435\u0434\u043e\u0440\u043e\u0433\u043e\u043c \u041f\u041a. \u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0438\u0433\u0440\u0430\u0442\u044c \u0441 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 100 \u0438\u0433\u0440\u043e\u043a\u0430\u043c\u0438 \u0432 \u0431\u043e\u0440\u044c\u0431\u0435 \u0437\u0430 \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u0435. \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f OSWindows 7,8,10, 64bit CPUCore i3 2.4GHz RAM4GB GPUDirectX11 Intel HD Graphics 4000 HDD4GB"})]})]})]})]})}}}]);
//# sourceMappingURL=5.e7a0e967.chunk.js.map