(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(t,e,n){t.exports={Wrapper:"Comments_Wrapper__1rkI_",Title:"Comments_Title__38MjX",CommentsList:"Comments_CommentsList__3yvCW"}},14:function(t,e,n){t.exports={Form:"Form_Form__24ZS9",Button:"Form_Button__NA4qd"}},15:function(t,e,n){},26:function(t,e,n){t.exports={Button:"Button_Button__ROh4y"}},27:function(t,e,n){t.exports={Item:"Character_Item__3LI2k"}},28:function(t,e,n){t.exports={Item:"Comment_Item__3gNgI"}},5:function(t,e,n){t.exports={Wrapper:"CharactersContainer_Wrapper__1Idyl",Container:"CharactersContainer_Container__eicMm",Title:"CharactersContainer_Title__1W-CG",Loader:"CharactersContainer_Loader__6yfAX"}},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(8),s=n.n(a),o=(n(15),n(4)),i=n(25),m=n.n(i),u=function(){return m.a.get("https://swapi.dev/api/people/")},l="SET_CHARACTERS",j="ADD_COMMENT";var p=n(31),d=n(3),h=n.n(d),O=n(26),b=n.n(O),f=n(1),_=function(t){var e=t.children,n=t.type;return Object(f.jsx)("button",{type:n,className:b.a.Button,children:e})};_.protTypes={children:h.a.string,type:h.a.string};var v=_,x=n(14),C=n.n(x),y=function(t){var e=t.sendComment,n=Object(c.useState)(""),r=Object(p.a)(n,2),a=r[0],s=r[1];return Object(f.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),a&&(e(a),s(""))}(t)},className:C.a.Form,children:[Object(f.jsx)("input",{onChange:function(t){return function(t){s(t.target.value)}(t)},value:a,type:"text",placeholder:"leave comment"}),Object(f.jsx)("div",{className:C.a.Button,children:Object(f.jsx)(v,{type:"submit",children:"Comment"})})]})};y.protTypes={sendComment:h.a.func};var N=y,g=n(27),T=n.n(g),S=n(28),I=n.n(S),E=function(t){var e=t.comment;return Object(f.jsx)("li",{className:I.a.Item,children:e.comment})};E.protTypes={comment:h.a.objectOf};var L=E,B=n(10),F=n.n(B),W=function(t){var e=t.comments,n=t.character;return Object(f.jsxs)("div",{className:F.a.Wrapper,children:[Object(f.jsx)("h2",{className:F.a.Title,children:"Comments:"}),Object(f.jsx)("ul",{className:F.a.CommentsList,children:e.map((function(t,e){return n.created===t.created?Object(f.jsx)(L,{comment:t},e):null}))})]})};W.protTypes={comments:h.a.arrayOf,character:h.a.objectOf};var w=W,D=function(t){var e=t.character,n=Object(o.b)(),c=Object(o.c)((function(t){return t.comments}));return Object(f.jsxs)("li",{className:T.a.Item,children:[Object(f.jsxs)("p",{children:["Name: ",e.name]}),Object(f.jsxs)("p",{children:["Birth year: ",e.birth_year]}),Object(f.jsx)(w,{character:e,comments:c}),Object(f.jsx)(N,{sendComment:function(t){n(function(t,e){return{type:j,payload:{character:t,value:e}}}(e,t))}})]})};D.protTypes={character:h.a.objectOf};var A=D,X=(n(60),function(){return Object(f.jsx)("div",{className:"lds-hourglass"})}),M=n(5),R=n.n(M),k=function(){var t=Object(o.c)((function(t){return t.characters})),e=Object(o.b)();return Object(c.useEffect)((function(){e((function(t){u().then((function(e){t({type:l,payload:e.data.results})}))}))}),[e]),Object(f.jsx)("div",{className:R.a.Wrapper,children:Object(f.jsxs)("div",{className:R.a.Container,children:[Object(f.jsx)("h2",{className:R.a.Title,children:"Star Wars characters"}),t.length?Object(f.jsx)("ul",{className:R.a.List,children:t.map((function(t,e){return Object(f.jsx)(A,{character:t},e)}))}):Object(f.jsx)("div",{className:R.a.Loader,children:Object(f.jsx)(X,{})})]})})};var J=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(k,{})})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))},U=n(11),V=n(29),q=n(30),G=n(7),H={characters:[],comments:[]},Z=window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(t){return t},z=Object(U.c)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(G.a)(Object(G.a)({},t),{},{characters:e.payload});case j:return Object(G.a)(Object(G.a)({},t),{},{comments:[].concat(Object(q.a)(t.comments),[{created:e.payload.character.created,comment:e.payload.value}])});default:return t}}),{characters:[],comments:JSON.parse(localStorage.getItem("comments"))||[]},Object(U.b)(Object(U.a)(V.a,(function(t){var e=t.getState;return function(t){return function(n){var c=t(n);if(n.type===j){var r=e().comments;localStorage.setItem("comments",JSON.stringify(r))}return c}}})),Z));s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(o.a,{store:z,children:Object(f.jsx)(J,{})})}),document.getElementById("root")),P()}},[[61,1,2]]]);
//# sourceMappingURL=main.4c43ee41.chunk.js.map