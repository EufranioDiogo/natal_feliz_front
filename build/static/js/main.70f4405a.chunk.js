(this["webpackJsonpnatal-feliz"]=this["webpackJsonpnatal-feliz"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={"menu-back-container":"MenuContainer_menu-back-container__15TN6","menu-container":"MenuContainer_menu-container__3G4w1","top-menu-container":"MenuContainer_top-menu-container__pBQKa","top-menu-title":"MenuContainer_top-menu-title__15wCE","hamburguer-menu-container":"MenuContainer_hamburguer-menu-container__3mlXD","bottom-menu-container":"MenuContainer_bottom-menu-container__ZGRnW","menu-list":"MenuContainer_menu-list__G7a3k","menu-list-item":"MenuContainer_menu-list-item__3rAaL","menu-list-item--link":"MenuContainer_menu-list-item--link__ecn-w","menu-item-active":"MenuContainer_menu-item-active__2qKHC"}},,function(e,t,n){e.exports={"discover-hidden-friend-container":"DiscoverHiddenFriend_discover-hidden-friend-container__YarvB","discover-hidden-friend-container--text":"DiscoverHiddenFriend_discover-hidden-friend-container--text__2j0KZ","discover-hidden-friend-container--img":"DiscoverHiddenFriend_discover-hidden-friend-container--img__2xjzX","full-button-width":"DiscoverHiddenFriend_full-button-width__Hwm-f","hidden-friend-text":"DiscoverHiddenFriend_hidden-friend-text__tC75-"}},,function(e,t,n){e.exports={"form-container":"authDefault_form-container__3iGNt","input-container":"authDefault_input-container__3tckD","input-field":"authDefault_input-field__3qm7L","align-right":"authDefault_align-right__2P6kC","main-auth":"authDefault_main-auth__3_YGG"}},function(e,t,n){e.exports={"home-page-container":"HomePage_home-page-container__1GZiK","home-page-container--header-img-container":"HomePage_home-page-container--header-img-container__3R1wU","header-img-container--img":"HomePage_header-img-container--img__3pBOk","header-img-container--text":"HomePage_header-img-container--text__2Mvdg","statistics-container":"HomePage_statistics-container__2fnPI","statistics-container--item":"HomePage_statistics-container--item__aiYxv","statistics-container--item-title":"HomePage_statistics-container--item-title__3g8ZJ","statistics-container--item-value":"HomePage_statistics-container--item-value__2H1T_"}},,,,function(e,t,n){e.exports={"main-auth":"normalDefault_main-auth__1pzBS"}},,function(e,t,n){e.exports={"main-container":"ProfilePage_main-container__EdFM0","user-info-container":"ProfilePage_user-info-container__2DMIK","user-info-container--h3":"ProfilePage_user-info-container--h3__2pDOb","user-info-container--h4":"ProfilePage_user-info-container--h4__3c9bE","discover-hidden-friend-container--text-area":"ProfilePage_discover-hidden-friend-container--text-area__3ec36"}},function(e,t,n){e.exports={"starter-page-main-container":"StarterPage_starter-page-main-container__2inm8","starter-page-main-container--img":"StarterPage_starter-page-main-container--img__3wY3I","starter-page-main-container--text-desc":"StarterPage_starter-page-main-container--text-desc__33dGY","stater-page-main-container--button-controller":"StarterPage_stater-page-main-container--button-controller__2r7Fl","button-controller-aux-button-left":"StarterPage_button-controller-aux-button-left__1A98U"}},function(e,t,n){e.exports={"top-menu-container":"TopMenuBar_top-menu-container__jebzO","top-menu-title":"TopMenuBar_top-menu-title__2L59Z","hamburguer-menu-container":"TopMenuBar_hamburguer-menu-container__2B7UA"}},function(e,t,n){e.exports={"discover-hidden-friend-container":"WaitingPanel_discover-hidden-friend-container__2Q-CQ","heading-1":"WaitingPanel_heading-1__2ytbA","heading-2":"WaitingPanel_heading-2__18P4F"}},,,,,,,function(e,t,n){e.exports={"page-indicator-container":"PageIndicator_page-indicator-container__2q0Z0","page-indicator-title":"PageIndicator_page-indicator-title__bVwsc"}},,function(e,t,n){e.exports={spinner:"Spinner_spinner__10QBx",rotation:"Spinner_rotation__2xO9E"}},function(e,t,n){e.exports={"discover-hidden-friend-container--text-area":"HiddenFriendDesires_discover-hidden-friend-container--text-area__1-SVW"}},,,,,,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(22),c=n.n(i),s=(n(38),n(39),n(5)),o=n(6),u=n(2),l=n.n(u),d=n(4),m="https://natal-feliz-back.herokuapp.com",j={auth:{auth:m+"/auth",login:m+"/auth/login",logout:m+"/auth/logout"},user:{getData:m+"/user",createUser:m+"/user",updateUser:m+"/user"},hiddenFriend:{getHiddenFriend:m+"/friend/hidden",getHiddenFriendDesires:m+"/friend/hidden/desires"},app:{statistics:m+"/app/statistics"}},h=n(13),p=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a,r,i,c,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.length>0&&void 0!==s[0]?s[0]:"",n=s.length>1&&void 0!==s[1]?s[1]:{},a=s.length>2&&void 0!==s[2]?s[2]:{},r=s.length>3&&void 0!==s[3]?s[3]:"GET",i=s.length>4&&void 0!==s[4]?s[4]:"application/json","GET"!==r&&"HEAD"!==r){e.next=11;break}return e.next=8,fetch(t,{method:r,headers:Object(h.a)(Object(h.a)({},a),{},{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"*","Content-Type":i})});case 8:c=e.sent,e.next=14;break;case 11:return e.next=13,fetch(t,{method:r,headers:Object(h.a)(Object(h.a)({},a),{},{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"*","Content-Type":i}),body:JSON.stringify(n)});case 13:c=e.sent;case 14:return e.next=16,c.json();case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:t,password:n},e.next=3,p(j.auth.login,a,{},"POST");case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(j.auth.auth,void 0,{Authorization:t},"GET");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:t,password:n},e.next=3,p(j.user.createUser,a,{},"POST");case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(j.user.updateUser,t,{Authorization:n},"PUT");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=n(0),_=r.a.createContext({user:{},isLogged:!1,login:function(){var e=Object(d.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),logout:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signup:function(){var e=Object(d.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()});var v=function(e){var t=e.children,n=Object(a.useState)({}),r=Object(o.a)(n,2),i=r[0],c=r[1],s=Object(a.useState)(!1),u=Object(o.a)(s,2),m=u[0],j=u[1],h=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("natal_feliz_token"))){e.next=6;break}return e.next=4,b(t);case 4:(n=e.sent).result&&(c(n.data.userFounded),j(!0));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t,n);case 2:(a=e.sent).result&&(c(a.data.userFounded),j(!0),localStorage.setItem("natal_feliz_token",a.data.token));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c({}),j(!1),localStorage.removeItem("natal_feliz_token");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,n);case 2:(a=e.sent).result&&(c(a.data.data),j(!0),localStorage.setItem("natal_feliz_token",a.data.token));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){h()}),[]),Object(O.jsx)(_.Provider,{value:{user:i,isLogged:m,login:p,logout:g,signup:v},children:t})},N=n(3),w=n(7),k=n.n(w);var C=function(e){var t=e.switchMenu,n=Object(N.e)(),r=Object(a.useContext)(_).logout,c=(Object(a.useContext)(_).isLogged,function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(i.createPortal)(Object(O.jsx)("div",{className:k.a["menu-back-container"],children:Object(O.jsxs)("div",{className:k.a["menu-container"],children:[Object(O.jsxs)("div",{className:k.a["top-menu-container"],children:[Object(O.jsx)("h1",{className:k.a["top-menu-title"],children:"Natal Feliz"}),Object(O.jsx)("div",{className:k.a["hamburguer-menu-container"],onClick:function(){t()},children:Object(O.jsx)("img",{src:"".concat("/natal_feliz_front","/").concat("la_times.svg"),alt:"christmas tree",className:k.a["hamburguer-menu-container--img"]})})]}),Object(O.jsx)("div",{className:k.a["bottom-menu-container"],children:Object(O.jsxs)("ul",{className:k.a["menu-list"],children:[Object(O.jsx)("li",{className:k.a["menu-list-item"],children:Object(O.jsx)(s.b,{to:"/natal_feliz_front/app",className:"".concat(k.a["menu-list-item--link"]," ").concat("/app"===n.pathname?" ".concat(k.a["menu-item-active"]):""),children:"Home"})}),Object(O.jsx)("li",{className:k.a["menu-list-item"],children:Object(O.jsx)(s.b,{to:"/natal_feliz_front/app/profile",className:"".concat(k.a["menu-list-item--link"]," ").concat("/app/profile"===n.pathname?" ".concat(k.a["menu-item-active"]):""),children:"Perfil"})}),Object(O.jsx)("li",{className:k.a["menu-list-item"],children:Object(O.jsx)(s.b,{to:"/natal_feliz_front/app/friend/hidden",className:"".concat(k.a["menu-list-item--link"]," ").concat("/natal_feliz_front/app/friend/hidden"===n.pathname?" ".concat(k.a["menu-item-active"]):""),children:"Amigo oculto"})}),Object(O.jsx)("li",{className:k.a["menu-list-item"],children:Object(O.jsx)(s.b,{to:"/natal_feliz_front/auth/login",className:"".concat(k.a["menu-list-item--link"]," ").concat("/natal_feliz_front/app/auth/login"===n.pathname?" ".concat(k.a["menu-item-active"]):""),onClick:function(){c()},children:"Terminar sess\xe3o"})})]})})]})}),document.querySelector(".menu-portal"))},S=n(20),P=n.n(S);var z=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useContext)(_).isLogged,c=function(){r(!n)};return Object(O.jsxs)("div",{className:P.a["top-menu-container"],children:[Object(O.jsx)("h1",{className:P.a["top-menu-title"],children:"Natal Feliz"}),i&&Object(O.jsx)("div",{className:P.a["hamburguer-menu-container"],onClick:c,children:Object(O.jsx)("img",{src:"".concat("/natal_feliz_front","/").concat("dashicons_menu.svg"),alt:"christmas tree",className:P.a["hamburguer-menu-container--img"]})}),n&&Object(O.jsx)(C,{switchMenu:c})]})},y=n(28),F=n.n(y);var H=function(e){var t=e.pagename;return Object(O.jsx)("div",{className:F.a["page-indicator-container"],children:Object(O.jsx)("h2",{className:F.a["page-indicator-title"],children:t})})},A=n(16),D=n.n(A),T=n(30),M=n.n(T);var q=function(e){var t=e.size,n=e.color;return Object(O.jsx)("div",{className:M.a.spinner,style:{width:"small"===t?"16px":"medium"===t?"24px":"32px",height:"small"===t?"16px":"medium"===t?"24px":"32px",border:"0.3rem solid ".concat(n,"a"),borderRight:"0.3rem solid ".concat(n)}})},E=n(9),L=n.n(E);var I=function(){var e=Object(N.f)(),t="healthicons_happy-outline.svg",n=Object(a.useState)("discover"),r=Object(o.a)(n,2),i=r[0],c=r[1],u=Object(a.useState)({_id:"",username:"",desires:""}),m=Object(o.a)(u,2),j=m[0],h=m[1],p=Object(a.useState)(!1),f=Object(o.a)(p,2),b=f[0],x=f[1],g=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c("processing"),t=localStorage.getItem("natal_feliz_token"),e.next=5,U(t);case 5:n=e.sent,h(n.data.hiddenFriend),c("discovered"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c("error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:L.a["discover-hidden-friend-container"],children:["discover"===i&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{className:L.a["discover-hidden-friend-container--text"],children:"Voc\xea ainda n\xe3o possui o seu amigo oculto!"}),Object(O.jsx)("img",{src:"".concat("/natal_feliz_front","/").concat("bx_bx-question-mark.svg"),alt:"christmas tree",className:L.a["discover-hidden-friend-container--img"]}),Object(O.jsx)("button",{className:"default-button ".concat(L.a["full-button-width"]),onClick:g,children:"Descobrir amigo oculto"})]}),"processing"===i&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{src:"".concat("/natal_feliz_front","/").concat("fluent_gift-20-regular.svg"),alt:"christmas tree",className:L.a["discover-hidden-friend-container--img"]}),Object(O.jsx)("span",{className:L.a["discover-hidden-friend-container--text"],children:"Processando o seu amigo ..."}),Object(O.jsx)(q,{color:"#333",size:"big"})]}),"discovered"===i&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{src:"".concat("/natal_feliz_front","/").concat(t),alt:"christmas tree",className:L.a["discover-hidden-friend-container--img"]}),Object(O.jsxs)("span",{className:L.a["discover-hidden-friend-container--text"],children:["O seu amigo oculto \xe9:",!b&&Object(O.jsx)(s.b,{to:j._id,className:"red-color ".concat(L.a["hidden-friend-text"]),onClick:function(){e("".concat(j._id),{state:{hiddenFriend:j}})},state:j,children:j.username})]}),Object(O.jsx)("button",{className:"default-button ".concat(L.a["full-button-width"]),onClick:function(){x(!b)},children:b?"Apresentar":"Ocultar"})]}),"error"===i&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{src:"".concat("/natal_feliz_front","/").concat(t),alt:"christmas tree",className:L.a["discover-hidden-friend-container--img"]}),Object(O.jsx)("span",{className:L.a["discover-hidden-friend-container--text"],children:"Por agora n\xe3o temos o seu amigo oculto tente mais tarde"}),Object(O.jsx)(s.b,{to:"/natal_feliz_front/app",className:"".concat(L.a["hidden-friend-text"]," default-button"),onClick:function(){e("/natal_feliz_front/app")},children:"Voltar"})]})]})};function U(e){throw new Error("Function not implemented.")}var G=n(21),B=n.n(G);var V=function(e){var t=e.days,n=e.hours,a=e.minutes,r=e.seconds;return Object(O.jsxs)("div",{className:B.a["discover-hidden-friend-container"],children:[Object(O.jsx)("h2",{className:B.a["heading-2"],children:"Faltam exactamente"}),Object(O.jsxs)("h1",{className:B.a["heading-1"],children:[t,"d : ",n,"h : ",a,"m : ",r,"s"]}),Object(O.jsx)("h2",{className:B.a["heading-2"],children:"Para descobrir o seu amigo oculto"})]})};var W=function(e){e.discoverHiddenFriend;var t=new Date("2021-12-20T08:00:00").getTime(),n=Object(a.useState)((new Date).getTime()),r=Object(o.a)(n,2),i=r[0],c=r[1],s=function(){var e=t-i;return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%36e5/6e4),seconds:Math.floor(e%6e4/1e3)}};return Object(a.useEffect)((function(){setInterval((function(){c((new Date).getTime()),s()}),1e3)})),Object(O.jsx)(O.Fragment,{children:t-i<=0?Object(O.jsx)(I,{}):Object(O.jsx)(V,Object(h.a)({},s()))})},Q=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(j.hiddenFriend.getHiddenFriend,void 0,{Authorization:t},"GET");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var Z=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(z,{}),Object(O.jsxs)("div",{className:"main-container ".concat(D.a["main-auth"]),children:[Object(O.jsx)(H,{pagename:"Amigo oculto"}),Object(O.jsx)(W,{discoverHiddenFriend:Q})]})]})},K=n(31),Y=n.n(K);var J=function(e){var t=Object(N.f)(),n=Object(N.e)().state;return Object(O.jsxs)("div",{children:[Object(O.jsx)(z,{}),Object(O.jsxs)("div",{className:"main-container ".concat(D.a["main-auth"]),children:[Object(O.jsxs)("span",{className:"".concat(L.a["discover-hidden-friend-container--text"]),children:["Os desejos de ",n.username," s\xe3o:"]}),Object(O.jsx)("textarea",{name:"desires",id:"",cols:"30",rows:"10",className:Y.a["discover-hidden-friend-container--text-area"],placeholder:"Desejos do amigo oculto",value:n.desires}),Object(O.jsx)("button",{className:"default-button",onClick:function(){t("/app/friend/hidden")},children:"Voltar"})]})]})},R=n(12),X=n.n(R),$=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(j.app.statistics,void 0,{Authorization:t},"GET");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var ee=function(){var e=Object(a.useState)({quantUsersTotal:0,quantUsersWithoutHiddenFriend:0}),t=Object(o.a)(e,2),n=t[0],r=t[1],i=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("natal_feliz_token"),e.next=3,$(t);case 3:(n=e.sent).result&&r(n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(z,{}),Object(O.jsxs)("div",{className:"main-container ".concat(D.a["main-auth"]),children:[Object(O.jsx)(H,{pagename:"Home"}),Object(O.jsxs)("div",{className:X.a["home-page-container"],children:[Object(O.jsxs)("div",{className:X.a["home-page-container--header-img-container"],children:[Object(O.jsx)("img",{className:X.a["header-img-container--img"],src:"".concat("/natal_feliz_front","/").concat("pexels-jonathan-borba-3303614.jpg"),alt:""}),Object(O.jsx)("span",{className:X.a["header-img-container--text"],children:"Neste natal ame mais aqueles que um dia j\xe1 n\xe3o poderam estar mais aqui ao seu lado"})]}),Object(O.jsxs)("div",{className:X.a["statistics-container"],children:[Object(O.jsxs)("div",{className:X.a["statistics-container--item"],children:[Object(O.jsx)("h3",{className:X.a["statistics-container--item-title"],children:"Quant pessoas registradas"}),Object(O.jsx)("span",{className:X.a["statistics-container--item-value"],children:n.quantUsersTotal})]}),Object(O.jsxs)("div",{className:X.a["statistics-container--item"],children:[Object(O.jsx)("h3",{className:X.a["statistics-container--item-title"],children:"Quant pessoas sem amigo oculto"}),Object(O.jsx)("span",{className:X.a["statistics-container--item-value"],children:n.quantUsersWithoutHiddenFriend})]})]})]})]})]})},te=n(18),ne=n.n(te),ae=n(17);var re=function(){var e=Object(a.useContext)(_).user,t=Object(ae.a)({initialValues:{desires:null===e||void 0===e?void 0:e.desires},onSubmit:function(){var t=Object(d.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=localStorage.getItem("natal_feliz_token"),t.next=3,g(Object(h.a)(Object(h.a)({},e),n),a);case 3:r=t.sent,console.log(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});return Object(O.jsxs)("div",{children:[Object(O.jsx)(z,{}),Object(O.jsxs)("div",{className:"main-container ".concat(D.a["main-auth"]),children:[Object(O.jsx)(H,{pagename:"Perfil"}),"z",Object(O.jsxs)("div",{className:ne.a["main-container"],children:[Object(O.jsxs)("div",{className:ne.a["user-info-container"],children:[Object(O.jsx)("h3",{className:ne.a["user-info-container--h3"],children:e.username}),Object(O.jsx)("h4",{className:"".concat(ne.a["user-info-container--h4"]," \n              ").concat(e.hasHiddenFriend?"green-color-text":"red-color-text"),children:e.hasHiddenFriend?"Algu\xe9m j\xe1 calhou com voc\xea!":"Ainda n\xe3o tem ningu\xe9m que calhou contigo!"})]}),Object(O.jsxs)("form",{onSubmit:t.handleSubmit,action:"",method:"POST",children:[Object(O.jsx)("textarea",{name:"desires",id:"",cols:"30",rows:"10",className:"".concat(ne.a["discover-hidden-friend-container--text-area"]),placeholder:"Seus desejos",value:t.values.desires,onChange:t.handleChange}),Object(O.jsx)("button",{className:"default-button",type:"submit",children:"Salvar"})]})]})]})]})};var ie=function(){return Object(O.jsxs)(N.c,{children:[Object(O.jsxs)(N.a,{path:"/natal_feliz_front/app",children:[Object(O.jsx)(N.a,{index:!0,element:Object(O.jsx)(ee,{})}),Object(O.jsx)(N.a,{path:"friend",children:Object(O.jsxs)(N.a,{path:"hidden",children:[Object(O.jsx)(N.a,{index:!0,element:Object(O.jsx)(Z,{})}),Object(O.jsx)(N.a,{path:":userid",element:Object(O.jsx)(J,{})})]})}),Object(O.jsx)(N.a,{path:"profile",element:Object(O.jsx)(re,{})})]}),Object(O.jsx)(N.a,{path:"*",element:Object(O.jsx)(ee,{})})]})},ce=n(11),se=n.n(ce);var oe=function(){Object(N.f)();var e=Object(a.useContext)(_),t=e.login,n=(e.isLogged,Object(a.useState)(!1)),r=Object(o.a)(n,2),i=r[0],c=r[1],u=Object(ae.a)({initialValues:{username:"",password:""},onSubmit:function(){var e=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,t(n.username,n.password);case 3:e.sent.result&&window.location.replace("/app"),c(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return Object(O.jsxs)("div",{children:[Object(O.jsx)(z,{}),Object(O.jsxs)("div",{className:"main-container ".concat(se.a["main-auth"]),children:[Object(O.jsx)(H,{pagename:"Login"}),Object(O.jsxs)("form",{action:"",className:se.a["form-container"],onSubmit:u.handleSubmit,children:[Object(O.jsxs)("div",{className:"input-container",children:[Object(O.jsx)("input",{type:"text",name:"username",id:"username-input",className:se.a["input-field"],placeholder:"Username",required:!0,value:u.values.username,onChange:u.handleChange}),Object(O.jsx)("input",{type:"password",name:"password",id:"password-input",className:se.a["input-field"],placeholder:"Senha",required:!0,value:u.values.password,onChange:u.handleChange})]}),Object(O.jsx)("button",{type:"submit",className:"default-button ".concat(se.a["align-right"]),value:"Login",children:i?Object(O.jsx)(q,{color:"#fff",size:"small"}):"Login"})]}),Object(O.jsx)(s.b,{to:"/auth/signup",className:"red-color",children:"Cadastrar-se"})]})]})};var ue=function(){var e=Object(a.useContext)(_).signup,t=Object(ae.a)({initialValues:{username:"",password:""},onSubmit:function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(n.username,n.password);case 2:t.sent.result&&window.location.replace("/app");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});return Object(O.jsxs)("div",{children:[Object(O.jsx)(z,{}),Object(O.jsxs)("div",{className:"main-container ".concat(se.a["main-auth"]),children:[Object(O.jsx)(H,{pagename:"Cadastro"}),Object(O.jsxs)("form",{onSubmit:t.handleSubmit,action:"",className:se.a["form-container"],children:[Object(O.jsxs)("div",{className:"input-container",children:[Object(O.jsx)("input",{type:"text",name:"username",id:"username-input",className:se.a["input-field"],placeholder:"Username",required:!0,value:t.values.username,onChange:t.handleChange}),Object(O.jsx)("input",{type:"password",name:"password",id:"password-input",className:se.a["input-field"],placeholder:"Senha",required:!0,value:t.values.password,onChange:t.handleChange})]}),Object(O.jsx)("button",{className:"default-button ".concat(se.a["align-right"]),children:"Cadastrar"})]}),Object(O.jsx)(s.b,{to:"/auth/login",className:"red-color",children:"Login"})]})]})},le=n(19),de=n.n(le);var me=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(z,{}),Object(O.jsxs)("div",{className:"main-container ".concat(de.a["starter-page-main-container"]),children:[Object(O.jsx)("img",{src:"".concat("/natal_feliz_front","/").concat("twemoji_christmas-tree.svg"),alt:"christmas tree",className:de.a["starter-page-main-container--img"]}),Object(O.jsx)("span",{className:de.a["starter-page-main-container--text-desc"],children:"Simples e f\xe1cil digite o seu nome e a sua password e veja com quem vc calhou"}),Object(O.jsxs)("div",{className:de.a["stater-page-main-container--button-controller"],children:[Object(O.jsx)(s.b,{to:"/natal_feliz_front/auth/signup",className:"default-button",children:"Cadastro"}),Object(O.jsx)(s.b,{to:"/natal_feliz_front/auth/login",className:"red-color ".concat(de.a["button-controller-aux-button-left"]),children:"Login"})]})]})]})};var je=function(){return Object(O.jsx)(N.c,{children:Object(O.jsxs)(N.a,{path:"/natal_feliz_front",children:[Object(O.jsx)(N.a,{index:!0,element:Object(O.jsx)(me,{})}),Object(O.jsxs)(N.a,{path:"auth",children:[Object(O.jsx)(N.a,{path:"signup",element:Object(O.jsx)(ue,{})}),Object(O.jsx)(N.a,{path:"login",element:Object(O.jsx)(oe,{})})]})]})})};var he=function(){var e=Object(a.useContext)(_).isLogged;return Object(a.useEffect)((function(){return function(){}}),[]),Object(O.jsx)(s.a,{children:e?Object(O.jsx)(ie,{}):Object(O.jsx)(je,{})})};var pe=function(){return Object(O.jsx)(v,{children:Object(O.jsx)(he,{})})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(pe,{})}),document.getElementById("root")),fe()}],[[45,1,2]]]);
//# sourceMappingURL=main.70f4405a.chunk.js.map