(this["webpackJsonpgena-drop"]=this["webpackJsonpgena-drop"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},56:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(15),i=n.n(a),s=(n(46),n(47),n(4)),r=(n(48),n(49),n(34)),d=n(35),o=n(36),j=n(10),l=n(1);var g=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(j.b,{to:"/",style:{textDecoration:"none"},children:Object(l.jsxs)("section",{className:"title",children:[Object(l.jsxs)("h1",{id:"title-txt",children:["gena ",Object(l.jsx)("br",{}),"DR",Object(l.jsx)("br",{}),"OP."]}),Object(l.jsx)("p",{children:"create, mint, resell"})]})}),Object(l.jsxs)("div",{className:"icons",children:[Object(l.jsxs)(j.b,{to:"/Create",style:{textDecoration:"none"},children:[Object(l.jsx)(r.a,{size:"9em",color:"#00CC9B"}),Object(l.jsx)("h3",{children:"create"})]}),Object(l.jsxs)(j.b,{to:"/Mint",style:{textDecoration:"none"},children:[Object(l.jsx)(d.a,{size:"9em",color:"#00CC9B"}),Object(l.jsx)("h3",{children:"mint"})]}),Object(l.jsxs)(j.b,{to:"/Explore",style:{textDecoration:"none"},children:[Object(l.jsx)(o.a,{size:"9em",color:"#00CC9B"}),Object(l.jsx)("h3",{children:"explore"})]})]})]})})};var h=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{}),Object(l.jsxs)("div",{className:"lp",children:[Object(l.jsx)("section",{children:Object(l.jsxs)("div",{className:"creators",children:[Object(l.jsxs)("div",{className:"creator-container",children:[Object(l.jsx)("h1",{children:"For Creators"}),Object(l.jsx)("img",{src:"https://res.cloudinary.com/kevin14/image/upload/v1633022077/gena_j9nr2v.png"})]}),Object(l.jsxs)("div",{id:"cc-div",children:[Object(l.jsx)("section",{className:"cc-container",children:Object(l.jsx)("h3",{children:"create layer names"})}),Object(l.jsx)("section",{className:"cc-container",children:Object(l.jsx)("h3",{children:"upload same size png assets"})}),Object(l.jsx)("section",{className:"cc-container",children:Object(l.jsx)("h3",{children:"imput rarity and mint amount"})}),Object(l.jsx)("section",{className:"cc-container",children:Object(l.jsx)("h3",{children:"mint,auto-list,revenue + royalties"})})]})]})}),Object(l.jsxs)("section",{className:"right",children:[Object(l.jsx)("div",{className:"connect",children:Object(l.jsx)("h1",{children:"connect wallet"})}),Object(l.jsxs)("div",{className:"collectors",children:[Object(l.jsxs)("div",{className:"collector-container",children:[Object(l.jsx)("h1",{children:"For Collectors"}),Object(l.jsx)("img",{src:"https://res.cloudinary.com/kevin14/image/upload/v1633022073/drop_wxel1b.png"})]}),Object(l.jsxs)("div",{id:"cc-div",children:[Object(l.jsx)("section",{className:"cc-container",children:Object(l.jsx)("h3",{children:"browse generative drops"})}),Object(l.jsx)("section",{className:"cc-container",children:Object(l.jsx)("h3",{children:"get drops"})}),Object(l.jsx)("section",{className:"cc-container",children:Object(l.jsx)("h3",{children:"resell on market place"})})]})]})]})]})]})},b=n(37),m=n(38),p=n(41),O=n(40),u=(n(56),n(14)),x=n.n(u),v=n(17),f=n(11),N={background:[{id:0,png:"./images/Rectangle0.png",name:"orange"},{id:1,png:"./images/Rectangle1.png",name:"orange-gradient"},{id:2,png:"./images/Rectangle2.png",name:"purple-gradient"},{id:3,png:"./images/Rectangle3.png",name:"blue-gradient"},{id:4,png:"./images/Rectangle4.png",name:"red-gradient"},{id:5,png:"./images/Rectangle5.png",name:"violet-gradient"},{id:6,png:"./images/Rectangle6.png",name:"green-gradient"}],head:[{id:0,png:"./images/head0.png",name:"head1"},{id:1,png:"./images/head1.png",name:"head2"},{id:2,png:"./images/head2.png",name:"head3"},{id:3,png:"./images/head3.png",name:"head4"},{id:4,png:"./images/head4.png",name:"head5"},{id:5,png:"./images/head6.png",name:"head7"}],outfit:[{id:0,png:"./images/outfit0.png",name:"outfit1"},{id:1,png:"./images/outfit1.png",name:"outfit2"},{id:2,png:"./images/outfit2.png",name:"outfit3"},{id:4,png:"./images/outfit4.png",name:"outfit4"},{id:5,png:"./images/outfit5.png",name:"outfit5"},{id:6,png:"./images/outfit6.png",name:"outfit6"}]},y="GET_BACKGROUND",k="GET_HEAD",C="GET_OUTFIT";var D=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).getDiv=function(){var t=document.getElementsByClassName("background-container")[0].id;e.setState({background:t}),console.log(t)},e.getHeadDiv=function(){var t=document.getElementsByClassName("head-container")[0].id;e.setState({head:t}),console.log(t)},e.getOutfitDiv=function(){var t=document.getElementsByClassName("outfit-container")[0].id;e.setState({outfit:t})},e.state={background:"",head:"",outfit:""},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.getBackground(),this.props.getHead(),this.props.getOutfit(),console.log(this.props.background)}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"create",children:[Object(l.jsx)(g,{}),Object(l.jsxs)("div",{className:"create-container",children:[Object(l.jsxs)("div",{className:"name-container",children:[Object(l.jsx)("p",{children:"Colletion Name"}),Object(l.jsx)("div",{className:"layerOrder-container",children:Object(l.jsx)("p",{children:"Layer Orders"})})]}),Object(l.jsxs)("div",{className:"layers",children:[Object(l.jsx)("h1",{children:"background"}),Object(l.jsx)("div",{className:"back",children:Object(l.jsx)("div",{className:"map",children:this.props.background.map((function(t){return Object(l.jsxs)("div",{id:t.png,className:"background-container",onClick:e.getDiv,children:[Object(l.jsx)("img",{className:"background-img",src:t.png}),Object(l.jsx)("p",{children:t.name})]})}))})}),Object(l.jsx)("h1",{children:"Head"}),Object(l.jsxs)("div",{className:"head",children:[" ",Object(l.jsx)("div",{className:"map",children:this.props.head.map((function(t){return Object(l.jsxs)("div",{id:t.png,className:"head-container",onClick:e.getHeadDiv,children:[Object(l.jsx)("img",{className:"head-img",src:t.png}),Object(l.jsx)("p",{id:"p-",children:t.name})]})}))})]}),Object(l.jsx)("h1",{children:"Outfit"}),Object(l.jsxs)("div",{className:"body",children:[" ",Object(l.jsx)("div",{className:"map",children:this.props.outfit.map((function(t){return Object(l.jsxs)("div",{id:t.png,className:"outfit-container",onClick:e.getOutfitDiv,children:[Object(l.jsx)("img",{className:"head-img",src:t.png}),Object(l.jsx)("p",{id:"p-",children:t.name})]})}))})]})]}),Object(l.jsxs)("section",{className:"nft-container",children:[Object(l.jsx)("div",{className:"connect",children:Object(l.jsx)("h1",{children:"connect wallet"})}),Object(l.jsx)("div",{className:"nft",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{id:"nft-png1",src:this.state.background}),Object(l.jsx)("img",{id:"nft-png2",src:this.state.head}),Object(l.jsx)("img",{id:"nft-png3",src:this.state.outfit})]})})]})]})]})}}]),n}(c.Component),E=Object(v.b)((function(e){return{background:e.pngReducer.background,head:e.pngReducer.head,outfit:e.pngReducer.outfit}}),{getBackground:function(){return{type:y,payload:x.a.get("/api/background")}},getHead:function(){return{type:y,payload:x.a.get("/api/head")}},getOutfit:function(){return{type:y,payload:x.a.get("/api/outfit")}}})(D);var F=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(g,{})})};var R=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(g,{})})},L=Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/Create",component:E}),Object(l.jsx)(s.a,{path:"/Mint",component:F}),Object(l.jsx)(s.a,{path:"/Explore",component:R}),Object(l.jsx)(s.a,{exact:!0,path:"/",component:h})]});var B=function(){return Object(l.jsx)("div",{className:"App",children:L})},_=n(19),w=n(39),T=Object(_.b)({pngReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"".concat(y,"_FULFILLED"):case"".concat(k,"_FULFILLED"):case"".concat(C,"_FULFILLED"):return Object(f.a)(Object(f.a)({},e),{},{id:c.data,png:c.data,name:c.data});default:return e}}}),H=Object(_.c)(T,Object(_.a)(w.a)),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};i.a.render(Object(l.jsx)(v.a,{store:H,children:Object(l.jsx)(j.a,{children:Object(l.jsx)(B,{})})}),document.getElementById("root")),I()}},[[75,1,2]]]);
//# sourceMappingURL=main.2ddc64c4.chunk.js.map