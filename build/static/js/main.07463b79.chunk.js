(this["webpackJsonpnatal-feliz"]=this["webpackJsonpnatal-feliz"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={"menu-back-container":"MenuContainer_menu-back-container__15TN6","menu-container":"MenuContainer_menu-container__3G4w1","top-menu-container":"MenuContainer_top-menu-container__pBQKa","top-menu-title":"MenuContainer_top-menu-title__15wCE","hamburguer-menu-container":"MenuContainer_hamburguer-menu-container__3mlXD","bottom-menu-container":"MenuContainer_bottom-menu-container__ZGRnW","menu-list":"MenuContainer_menu-list__G7a3k","menu-list-item":"MenuContainer_menu-list-item__3rAaL","menu-list-item--link":"MenuContainer_menu-list-item--link__ecn-w","menu-item-active":"MenuContainer_menu-item-active__2qKHC"}},,,,function(e,t,n){e.exports={"discover-hidden-friend-container":"DiscoverHiddenFriend_discover-hidden-friend-container__YarvB","discover-hidden-friend-container--text":"DiscoverHiddenFriend_discover-hidden-friend-container--text__2j0KZ","discover-hidden-friend-container--img":"DiscoverHiddenFriend_discover-hidden-friend-container--img__2xjzX","full-button-width":"DiscoverHiddenFriend_full-button-width__Hwm-f","hidden-friend-text":"DiscoverHiddenFriend_hidden-friend-text__tC75-"}},function(e,t,n){e.exports={"form-container":"authDefault_form-container__3iGNt","input-container":"authDefault_input-container__3tckD","input-field":"authDefault_input-field__3qm7L","align-right":"authDefault_align-right__2P6kC","main-auth":"authDefault_main-auth__3_YGG"}},function(e,t,n){e.exports={"home-page-container":"HomePage_home-page-container__1GZiK","home-page-container--header-img-container":"HomePage_home-page-container--header-img-container__3R1wU","header-img-container--img":"HomePage_header-img-container--img__3pBOk","header-img-container--text":"HomePage_header-img-container--text__2Mvdg","statistics-container":"HomePage_statistics-container__2fnPI","statistics-container--item":"HomePage_statistics-container--item__aiYxv","statistics-container--item-title":"HomePage_statistics-container--item-title__3g8ZJ","statistics-container--item-value":"HomePage_statistics-container--item-value__2H1T_"}},,,function(e,t,n){e.exports={"main-auth":"normalDefault_main-auth__1pzBS"}},,,function(e,t,n){e.exports={"main-container":"ProfilePage_main-container__EdFM0","user-info-container":"ProfilePage_user-info-container__2DMIK","user-info-container--h3":"ProfilePage_user-info-container--h3__2pDOb","user-info-container--h4":"ProfilePage_user-info-container--h4__3c9bE","discover-hidden-friend-container--text-area":"ProfilePage_discover-hidden-friend-container--text-area__3ec36"}},function(e,t,n){e.exports={"starter-page-main-container":"StarterPage_starter-page-main-container__2inm8","starter-page-main-container--img":"StarterPage_starter-page-main-container--img__3wY3I","starter-page-main-container--text-desc":"StarterPage_starter-page-main-container--text-desc__33dGY","stater-page-main-container--button-controller":"StarterPage_stater-page-main-container--button-controller__2r7Fl","button-controller-aux-button-left":"StarterPage_button-controller-aux-button-left__1A98U"}},function(e,t,n){e.exports={"top-menu-container":"TopMenuBar_top-menu-container__jebzO","top-menu-title":"TopMenuBar_top-menu-title__2L59Z","hamburguer-menu-container":"TopMenuBar_hamburguer-menu-container__2B7UA"}},,,,,,,function(e,t,n){e.exports={"page-indicator-container":"PageIndicator_page-indicator-container__2q0Z0","page-indicator-title":"PageIndicator_page-indicator-title__bVwsc"}},,function(e,t,n){e.exports={spinner:"Spinner_spinner__10QBx",rotation:"Spinner_rotation__2xO9E"}},function(e,t,n){e.exports={"discover-hidden-friend-container--text-area":"HiddenFriendDesires_discover-hidden-friend-container--text-area__1-SVW"}},,,,,,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(21),c=n.n(i),s=(n(37),n(38),n(5)),o=n(8),u=n(2),l=n.n(u),d=n(4),m="https://natal-feliz-back.herokuapp.com",j={auth:{auth:m+"/auth",login:m+"/auth/login",logout:m+"/auth/logout"},user:{getData:m+"/user",createUser:m+"/user",updateUser:m+"/user"},hiddenFriend:{getHiddenFriend:m+"/friend/hidden",getHiddenFriendDesires:m+"/friend/hidden/desires"},app:{statistics:m+"/app/statistics"}},h=n(16),p=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a,r,i,c,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.length>0&&void 0!==s[0]?s[0]:"",n=s.length>1&&void 0!==s[1]?s[1]:{},a=s.length>2&&void 0!==s[2]?s[2]:{},r=s.length>3&&void 0!==s[3]?s[3]:"GET",i=s.length>4&&void 0!==s[4]?s[4]:"application/json","GET"!==r&&"HEAD"!==r){e.next=11;break}return e.next=8,fetch(t,{method:r,headers:Object(h.a)(Object(h.a)({},a),{},{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"*","Content-Type":i})});case 8:c=e.sent,e.next=14;break;case 11:return e.next=13,fetch(t,{method:r,headers:Object(h.a)(Object(h.a)({},a),{},{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"*","Content-Type":i}),body:JSON.stringify(n)});case 13:c=e.sent;case 14:return e.next=16,c.json();case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:t,password:n},e.next=3,p(j.auth.login,a,{},"POST");case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(j.auth.auth,void 0,{Authorization:t},"GET");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:t,password:n},e.next=3,p(j.user.createUser,a,{},"POST");case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(j.user.updateUser,t,{Authorization:n},"PUT");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=n(0),v=r.a.createContext({user:{},isLogged:!1,login:function(){var e=Object(d.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),logout:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signup:function(){var e=Object(d.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()});var _=function(e){var t=e.children,n=Object(a.useState)({}),r=Object(o.a)(n,2),i=r[0],c=r[1],s=Object(a.useState)(!1),u=Object(o.a)(s,2),m=u[0],j=u[1],h=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("natal_feliz_token"))){e.next=6;break}return e.next=4,f(t);case 4:(n=e.sent).result&&(c(n.data.userFounded),j(!0));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t,n);case 2:(a=e.sent).result&&(c(a.data.userFounded),j(!0),localStorage.setItem("natal_feliz_token",a.data.token));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c({}),j(!1),localStorage.removeItem("natal_feliz_token");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,n);case 2:(a=e.sent).result&&(c(a.data.data),j(!0),localStorage.setItem("natal_feliz_token",a.data.token));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){h()}),[]),Object(g.jsx)(v.Provider,{value:{user:i,isLogged:m,login:p,logout:O,signup:_},children:t})},w=n(3),N=n(6),k=n.n(N);var C=function(e){var t=e.switchMenu,n=Object(w.e)(),r=Object(a.useContext)(v).logout,c=(Object(a.useContext)(v).isLogged,function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(i.createPortal)(Object(g.jsx)("div",{className:k.a["menu-back-container"],children:Object(g.jsxs)("div",{className:k.a["menu-container"],children:[Object(g.jsxs)("div",{className:k.a["top-menu-container"],children:[Object(g.jsx)("h1",{className:k.a["top-menu-title"],children:"Natal Feliz"}),Object(g.jsx)("div",{className:k.a["hamburguer-menu-container"],onClick:function(){t()},children:Object(g.jsx)("img",{src:"".concat("/natal_feliz_front","/").concat("la_times.svg"),alt:"christmas tree",className:k.a["hamburguer-menu-container--img"]})})]}),Object(g.jsx)("div",{className:k.a["bottom-menu-container"],children:Object(g.jsxs)("ul",{className:k.a["menu-list"],children:[Object(g.jsx)("li",{className:k.a["menu-list-item"],children:Object(g.jsx)(s.b,{to:"/app",className:"".concat(k.a["menu-list-item--link"]," ").concat("/app"===n.pathname?" ".concat(k.a["menu-item-active"]):""),children:"Home"})}),Object(g.jsx)("li",{className:k.a["menu-list-item"],children:Object(g.jsx)(s.b,{to:"/app/profile",className:"".concat(k.a["menu-list-item--link"]," ").concat("/app/profile"===n.pathname?" ".concat(k.a["menu-item-active"]):""),children:"Perfil"})}),Object(g.jsx)("li",{className:k.a["menu-list-item"],children:Object(g.jsx)(s.b,{to:"/app/friend/hidden",className:"".concat(k.a["menu-list-item--link"]," ").concat("/app/friend/hidden"===n.pathname?" ".concat(k.a["menu-item-active"]):""),children:"Amigo oculto"})}),Object(g.jsx)("li",{className:k.a["menu-list-item"],children:Object(g.jsx)(s.b,{to:"/auth/login",className:"".concat(k.a["menu-list-item--link"]," ").concat("/app/auth/login"===n.pathname?" ".concat(k.a["menu-item-active"]):""),onClick:function(){c()},children:"Terminar sess\xe3o"})})]})})]})}),document.querySelector(".menu-portal"))},S=n(20),P=n.n(S);var y=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useContext)(v).isLogged,c=function(){r(!n)};return Object(g.jsxs)("div",{className:P.a["top-menu-container"],children:[Object(g.jsx)("h1",{className:P.a["top-menu-title"],children:"Natal Feliz"}),i&&Object(g.jsx)("div",{className:P.a["hamburguer-menu-container"],onClick:c,children:Object(g.jsx)("img",{src:"".concat("/natal_feliz_front","/").concat("dashicons_menu.svg"),alt:"christmas tree",className:P.a["hamburguer-menu-container--img"]})}),n&&Object(g.jsx)(C,{switchMenu:c})]})},z=n(27),F=n.n(z);var H=function(e){var t=e.pagename;return Object(g.jsx)("div",{className:F.a["page-indicator-container"],children:Object(g.jsx)("h2",{className:F.a["page-indicator-title"],children:t})})},A=n(15),D=n.n(A),T=n(29),M=n.n(T);var q=function(e){var t=e.size,n=e.color;return Object(g.jsx)("div",{className:M.a.spinner,style:{width:"small"===t?"16px":"medium"===t?"24px":"32px",height:"small"===t?"16px":"medium"===t?"24px":"32px",border:"0.3rem solid ".concat(n,"a"),borderRight:"0.3rem solid ".concat(n)}})},L=n(10),E=n.n(L);var I=function(e){var t=e.discoverHiddenFriend,n=Object(w.f)(),r=Object(a.useState)("discover"),i=Object(o.a)(r,2),c=i[0],u=i[1],m=Object(a.useState)({_id:"",username:"",desires:""}),j=Object(o.a)(m,2),h=j[0],p=j[1],b=Object(a.useState)(!1),f=Object(o.a)(b,2),x=f[0],O=f[1],v=function(){var e=Object(d.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u("processing"),n=localStorage.getItem("natal_feliz_token"),e.next=4,t(n);case 4:a=e.sent,p(a.data.hiddenFriend),u("discovered");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:E.a["discover-hidden-friend-container"],children:["discover"===c&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{className:E.a["discover-hidden-friend-container--text"],children:"Voc\xea ainda n\xe3o possui o seu amigo oculto!"}),Object(g.jsx)("img",{src:"".concat("/natal_feliz_front","/").concat("bx_bx-question-mark.svg"),alt:"christmas tree",className:E.a["discover-hidden-friend-container--img"]}),Object(g.jsx)("button",{className:"default-button ".concat(E.a["full-button-width"]),onClick:v,children:"Descobrir amigo oculto"})]}),"processing"===c&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("img",{src:"".concat("/natal_feliz_front","/").concat("fluent_gift-20-regular.svg"),alt:"christmas tree",className:E.a["discover-hidden-friend-container--img"]}),Object(g.jsx)("span",{className:E.a["discover-hidden-friend-container--text"],children:"Processando o seu amigo ..."}),Object(g.jsx)(q,{color:"#333",size:"big"})]}),"discovered"===c&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("img",{src:"".concat("/natal_feliz_front","/").concat("healthicons_happy-outline.svg"),alt:"christmas tree",className:E.a["discover-hidden-friend-container--img"]}),Object(g.jsxs)("span",{className:E.a["discover-hidden-friend-container--text"],children:["O seu amigo oculto \xe9:",!x&&Object(g.jsx)(s.b,{to:h._id,className:"red-color ".concat(E.a["hidden-friend-text"]),onClick:function(){n("".concat(h._id),{state:{hiddenFriend:h}})},state:h,children:h.username})]}),Object(g.jsx)("button",{className:"default-button ".concat(E.a["full-button-width"]),onClick:function(){O(!x)},children:x?"Apresentar":"Ocultar"})]})]})},U=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(j.hiddenFriend.getHiddenFriend,void 0,{Authorization:t},"GET");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var G=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"main-container ".concat(D.a["main-auth"]),children:[Object(g.jsx)(H,{pagename:"Amigo oculto"}),Object(g.jsx)(I,{discoverHiddenFriend:U})]})]})},B=n(30),V=n.n(B);var Z=function(e){var t=Object(w.f)(),n=Object(w.e)().state;return Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"main-container ".concat(D.a["main-auth"]),children:[Object(g.jsxs)("span",{className:"".concat(E.a["discover-hidden-friend-container--text"]),children:["Os desejos de ",n.username," s\xe3o:"]}),Object(g.jsx)("textarea",{name:"desires",id:"",cols:"30",rows:"10",className:V.a["discover-hidden-friend-container--text-area"],placeholder:"Desejos do amigo oculto",value:n.desires}),Object(g.jsx)("button",{className:"default-button",onClick:function(){t("/app/friend/hidden")},children:"Voltar"})]})]})},K=n(12),Y=n.n(K),J=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(j.app.statistics,void 0,{Authorization:t},"GET");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var Q=function(){var e=Object(a.useState)({quantUsersTotal:0,quantUsersWithoutHiddenFriend:0}),t=Object(o.a)(e,2),n=t[0],r=t[1],i=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("natal_feliz_token"),e.next=3,J(t);case 3:(n=e.sent).result&&r(n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"main-container ".concat(D.a["main-auth"]),children:[Object(g.jsx)(H,{pagename:"Home"}),Object(g.jsxs)("div",{className:Y.a["home-page-container"],children:[Object(g.jsxs)("div",{className:Y.a["home-page-container--header-img-container"],children:[Object(g.jsx)("img",{className:Y.a["header-img-container--img"],src:"".concat("/natal_feliz_front","/").concat("pexels-jonathan-borba-3303614.jpg"),alt:""}),Object(g.jsx)("span",{className:Y.a["header-img-container--text"],children:"Neste natal ame mais aqueles que um dia j\xe1 n\xe3o poderam estar mais aqui ao seu lado"})]}),Object(g.jsxs)("div",{className:Y.a["statistics-container"],children:[Object(g.jsxs)("div",{className:Y.a["statistics-container--item"],children:[Object(g.jsx)("h3",{className:Y.a["statistics-container--item-title"],children:"Quant pessoas registradas"}),Object(g.jsx)("span",{className:Y.a["statistics-container--item-value"],children:n.quantUsersTotal})]}),Object(g.jsxs)("div",{className:Y.a["statistics-container--item"],children:[Object(g.jsx)("h3",{className:Y.a["statistics-container--item-title"],children:"Quant pessoas sem amigo oculto"}),Object(g.jsx)("span",{className:Y.a["statistics-container--item-value"],children:n.quantUsersWithoutHiddenFriend})]})]})]})]})]})},W=n(18),R=n.n(W),X=n(17);var $=function(){var e=Object(a.useContext)(v).user,t=Object(X.a)({initialValues:{desires:null===e||void 0===e?void 0:e.desires},onSubmit:function(){var t=Object(d.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=localStorage.getItem("natal_feliz_token"),t.next=3,O(Object(h.a)(Object(h.a)({},e),n),a);case 3:r=t.sent,console.log(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});return Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"main-container ".concat(D.a["main-auth"]),children:[Object(g.jsx)(H,{pagename:"Perfil"}),"z",Object(g.jsxs)("div",{className:R.a["main-container"],children:[Object(g.jsxs)("div",{className:R.a["user-info-container"],children:[Object(g.jsx)("h3",{className:R.a["user-info-container--h3"],children:e.username}),Object(g.jsx)("h4",{className:"".concat(R.a["user-info-container--h4"]," \n              ").concat(e.hasHiddenFriend?"green-color-text":"red-color-text"),children:e.hasHiddenFriend?"Algu\xe9m j\xe1 calhou com voc\xea!":"Ainda n\xe3o tem ningu\xe9m que calhou contigo!"})]}),Object(g.jsxs)("form",{onSubmit:t.handleSubmit,action:"",method:"POST",children:[Object(g.jsx)("textarea",{name:"desires",id:"",cols:"30",rows:"10",className:"".concat(R.a["discover-hidden-friend-container--text-area"]),placeholder:"Seus desejos",value:t.values.desires,onChange:t.handleChange}),Object(g.jsx)("button",{className:"default-button",type:"submit",children:"Salvar"})]})]})]})]})};var ee=function(){return Object(g.jsxs)(w.c,{children:[Object(g.jsxs)(w.a,{path:"/natal_feliz_front/app",children:[Object(g.jsx)(w.a,{index:!0,element:Object(g.jsx)(Q,{})}),Object(g.jsx)(w.a,{path:"friend",children:Object(g.jsxs)(w.a,{path:"hidden",children:[Object(g.jsx)(w.a,{index:!0,element:Object(g.jsx)(G,{})}),Object(g.jsx)(w.a,{path:":userid",element:Object(g.jsx)(Z,{})})]})}),Object(g.jsx)(w.a,{path:"profile",element:Object(g.jsx)($,{})})]}),Object(g.jsx)(w.a,{path:"*",element:Object(g.jsx)(Q,{})})]})},te=n(11),ne=n.n(te);var ae=function(){Object(w.f)();var e=Object(a.useContext)(v),t=e.login,n=(e.isLogged,Object(a.useState)(!1)),r=Object(o.a)(n,2),i=r[0],c=r[1],u=Object(X.a)({initialValues:{username:"",password:""},onSubmit:function(){var e=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,t(n.username,n.password);case 3:e.sent.result&&window.location.replace("/app"),c(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"main-container ".concat(ne.a["main-auth"]),children:[Object(g.jsx)(H,{pagename:"Login"}),Object(g.jsxs)("form",{action:"",className:ne.a["form-container"],onSubmit:u.handleSubmit,children:[Object(g.jsxs)("div",{className:"input-container",children:[Object(g.jsx)("input",{type:"text",name:"username",id:"username-input",className:ne.a["input-field"],placeholder:"Username",required:!0,value:u.values.username,onChange:u.handleChange}),Object(g.jsx)("input",{type:"password",name:"password",id:"password-input",className:ne.a["input-field"],placeholder:"Senha",required:!0,value:u.values.password,onChange:u.handleChange})]}),Object(g.jsx)("button",{type:"submit",className:"default-button ".concat(ne.a["align-right"]),value:"Login",children:i?Object(g.jsx)(q,{color:"#fff",size:"small"}):"Login"})]}),Object(g.jsx)(s.b,{to:"/auth/signup",className:"red-color",children:"Cadastrar-se"})]})]})};var re=function(){var e=Object(a.useContext)(v).signup,t=Object(X.a)({initialValues:{username:"",password:""},onSubmit:function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(n.username,n.password);case 2:t.sent.result&&window.location.replace("/app");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});return Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"main-container ".concat(ne.a["main-auth"]),children:[Object(g.jsx)(H,{pagename:"Cadastro"}),Object(g.jsxs)("form",{onSubmit:t.handleSubmit,action:"",className:ne.a["form-container"],children:[Object(g.jsxs)("div",{className:"input-container",children:[Object(g.jsx)("input",{type:"text",name:"username",id:"username-input",className:ne.a["input-field"],placeholder:"Username",required:!0,value:t.values.username,onChange:t.handleChange}),Object(g.jsx)("input",{type:"password",name:"password",id:"password-input",className:ne.a["input-field"],placeholder:"Senha",required:!0,value:t.values.password,onChange:t.handleChange})]}),Object(g.jsx)("button",{className:"default-button ".concat(ne.a["align-right"]),children:"Cadastrar"})]}),Object(g.jsx)(s.b,{to:"/auth/login",className:"red-color",children:"Login"})]})]})},ie=n(19),ce=n.n(ie);var se=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"main-container ".concat(ce.a["starter-page-main-container"]),children:[Object(g.jsx)("img",{src:"".concat("/natal_feliz_front","/").concat("twemoji_christmas-tree.svg"),alt:"christmas tree",className:ce.a["starter-page-main-container--img"]}),Object(g.jsx)("span",{className:ce.a["starter-page-main-container--text-desc"],children:"Simples e f\xe1cil digite o seu nome e a sua password e veja com quem vc calhou"}),Object(g.jsxs)("div",{className:ce.a["stater-page-main-container--button-controller"],children:[Object(g.jsx)(s.b,{to:"/auth/signup",className:"default-button",children:"Cadastro"}),Object(g.jsx)(s.b,{to:"/auth/login",className:"red-color ".concat(ce.a["button-controller-aux-button-left"]),children:"Login"})]})]})]})};var oe=function(){return Object(g.jsx)(w.c,{children:Object(g.jsxs)(w.a,{path:"/natal_feliz_front",children:[Object(g.jsx)(w.a,{index:!0,element:Object(g.jsx)(se,{})}),Object(g.jsxs)(w.a,{path:"auth",children:[Object(g.jsx)(w.a,{path:"signup",element:Object(g.jsx)(re,{})}),Object(g.jsx)(w.a,{path:"login",element:Object(g.jsx)(ae,{})})]})]})})};var ue=function(){var e=Object(a.useContext)(v).isLogged;return Object(a.useEffect)((function(){return function(){}}),[]),Object(g.jsx)(s.a,{children:e?Object(g.jsx)(ee,{}):Object(g.jsx)(oe,{})})};var le=function(){return Object(g.jsx)(_,{children:Object(g.jsx)(ue,{})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(le,{})}),document.getElementById("root")),de()}],[[44,1,2]]]);
//# sourceMappingURL=main.07463b79.chunk.js.map