(this["webpackJsonpgena-drop"]=this["webpackJsonpgena-drop"]||[]).push([[0],{23:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(19),i=n.n(a),s=(n(48),n(49),n(4)),r=(n(50),n(51),n(40)),o=n(41),d=n(42),l=n(17),j=n(2);var u=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)(l.b,{to:"/",style:{textDecoration:"none"},children:Object(j.jsxs)("section",{className:"title",children:[Object(j.jsxs)("h1",{id:"title-txt",children:["gena ",Object(j.jsx)("br",{}),"DR",Object(j.jsx)("br",{}),"OP."]}),Object(j.jsx)("p",{children:"create, mint, resell"})]})}),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsxs)(l.b,{to:"/Create",style:{textDecoration:"none"},children:[Object(j.jsx)(r.a,{size:"9em",color:"#00CC9B"}),Object(j.jsx)("h3",{children:"create"})]}),Object(j.jsxs)(l.b,{to:"/Mint",style:{textDecoration:"none"},children:[Object(j.jsx)(o.a,{size:"9em",color:"#00CC9B"}),Object(j.jsx)("h3",{children:"mint"})]}),Object(j.jsxs)(l.b,{to:"/Explore",style:{textDecoration:"none"},children:[Object(j.jsx)(d.a,{size:"9em",color:"#00CC9B"}),Object(j.jsx)("h3",{children:"explore"})]})]})]})})};var b=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsxs)("div",{className:"lp",children:[Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"creators",children:[Object(j.jsxs)("div",{className:"creator-container",children:[Object(j.jsx)("h1",{children:"For Creators"}),Object(j.jsx)("img",{src:"https://res.cloudinary.com/kevin14/image/upload/v1633022077/gena_j9nr2v.png"})]}),Object(j.jsxs)("div",{id:"cc-div",children:[Object(j.jsx)("section",{className:"cc-container",children:Object(j.jsx)("h3",{children:"create layer names"})}),Object(j.jsx)("section",{className:"cc-container",children:Object(j.jsx)("h3",{children:"upload same size png assets"})}),Object(j.jsx)("section",{className:"cc-container",children:Object(j.jsx)("h3",{children:"imput rarity and mint amount"})}),Object(j.jsx)("section",{className:"cc-container",children:Object(j.jsx)("h3",{children:"mint,auto-list,revenue + royalties"})})]})]})}),Object(j.jsxs)("section",{className:"right",children:[Object(j.jsx)("div",{className:"connect",children:Object(j.jsx)("h1",{children:"connect wallet"})}),Object(j.jsxs)("div",{className:"collectors",children:[Object(j.jsxs)("div",{className:"collector-container",children:[Object(j.jsx)("h1",{children:"For Collectors"}),Object(j.jsx)("img",{src:"https://res.cloudinary.com/kevin14/image/upload/v1633022073/drop_wxel1b.png"})]}),Object(j.jsxs)("div",{id:"cc-div",children:[Object(j.jsx)("section",{className:"cc-container",children:Object(j.jsx)("h3",{children:"browse generative drops"})}),Object(j.jsx)("section",{className:"cc-container",children:Object(j.jsx)("h3",{children:"get drops"})}),Object(j.jsx)("section",{className:"cc-container",children:Object(j.jsx)("h3",{children:"resell on market place"})})]})]})]})]})]})},g=n(5),p=n(13),h=n(14),O=n(16),m=n(15),x=(n(23),n(18)),f=n.n(x),v=n(8),k={background:[{id:0,png:"./images/Rectangle0.png",name:"orange"},{id:1,png:"./images/Rectangle1.png",name:"orange-gradient"},{id:2,png:"./images/Rectangle2.png",name:"purple-gradient"},{id:3,png:"./images/Rectangle3.png",name:"blue-gradient"},{id:4,png:"./images/Rectangle4.png",name:"red-gradient"},{id:5,png:"./images/Rectangle5.png",name:"violet-gradient"},{id:6,png:"./images/Rectangle6.png",name:"green-gradient"}],head:[{id:0,png:"./images/head0.png",name:"head1"},{id:1,png:"./images/head1.png",name:"head2"},{id:2,png:"./images/head2.png",name:"head3"},{id:3,png:"./images/head3.png",name:"head4"},{id:4,png:"./images/head4.png",name:"head5"},{id:5,png:"./images/head6.png",name:"head7"}],outfit:[{id:0,png:"./images/outfit0.png",name:"outfit1"},{id:1,png:"./images/outfit1.png",name:"outfit2"},{id:2,png:"./images/outfit2.png",name:"outfit3"},{id:4,png:"./images/outfit4.png",name:"outfit4"},{id:5,png:"./images/outfit5.png",name:"outfit5"},{id:6,png:"./images/outfit6.png",name:"outfit6"}]},N="GET_BACKGROUND",y="GET_HEAD",C="GET_OUTFIT";function D(){return{type:N,payload:f.a.get("/api/background")}}function R(){return{type:N,payload:f.a.get("/api/head")}}function E(){return{type:N,payload:f.a.get("/api/outfit")}}var P="POST_NFT";var U=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).getDiv=function(){var t=document.getElementsByClassName("background-container")[0].id;e.setState({background:t}),console.log(t)},e.postNft=function(){var t=e.state.nft;e.props.postnft({nft:t}),console.log("hit")},e.checkUploadResult=function(t,n){"success"===n.event&&(console.log("Picture uploaded successfully"),e.setState({nft:n.info.url}))},e.state={background:[],nft:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.getBackground()}},{key:"render",value:function(){var e=this,t=window.cloudinary.createUploadWidget({cloudName:"kevin14",uploadPreset:"zfjpjtrr",sources:["local","url","dropbox","facebook","instagram"]},(function(t,n){e.checkUploadResult(t,n)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"background"}),Object(j.jsxs)("div",{className:"back",children:[Object(j.jsx)("div",{className:"map",children:this.props.background.map((function(t){return Object(j.jsxs)("div",{id:t.png,className:"background-container",onClick:e.getDiv,children:[Object(j.jsx)("img",{className:"background-img",src:t.png}),Object(j.jsx)("p",{children:t.name})]})}))}),Object(j.jsx)("button",{onClick:function(){return t.open()},children:"Upload"}),Object(j.jsx)("button",{onClick:this.postNft,children:"sumbit"})]})]})}}]),n}(c.Component),w=(Object(v.b)((function(e){return{background:e.pngReducer.background}}),{getBackground:D,postnft:function(e){return{type:P,payload:f.a.post("/api/nft",e)}}})(U),function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).getHeadDiv=function(){var t=document.getElementsByClassName("head-container")[0].id;e.setState({head:t}),console.log(t)},e.checkUploadResult=function(t,n){"success"===n.event&&(console.log("Picture uploaded successfully"),console.log(n.info.url),e.setState({background:n.info.url}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.getHead()}},{key:"render",value:function(){var e=this;window.cloudinary.createUploadWidget({cloudName:"kevin14",uploadPreset:"zfjpjtrr",sources:["local","url","dropbox","facebook","instagram"]},(function(t,n){e.checkUploadResult(t,n)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Head"}),Object(j.jsxs)("div",{className:"head",children:[" ",Object(j.jsx)("div",{className:"map",children:this.props.head.map((function(t){return Object(j.jsxs)("div",{id:t.png,className:"head-container",onClick:e.getHeadDiv,children:[Object(j.jsx)("img",{className:"head-img",src:t.png}),Object(j.jsx)("p",{id:"p-",children:t.name})]})}))}),Object(j.jsx)("input",{type:"file"})]})]})}}]),n}(c.Component)),B=Object(v.b)((function(e){return{head:e.pngReducer.head}}),{getHead:R})(w),F=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).getOutfitDiv=function(){var t=document.getElementsByClassName("outfit-container")[0].id;e.setState({outfit:t})},e.checkUploadResult=function(t,n){"success"===n.event&&(console.log("Picture uploaded successfully"),console.log(n.info.url),e.setState({background:n.info.url}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.getOutfit()}},{key:"render",value:function(){var e=this;window.cloudinary.createUploadWidget({cloudName:"kevin14",uploadPreset:"zfjpjtrr",sources:["local","url","dropbox","facebook","instagram"]},(function(t,n){e.checkUploadResult(t,n)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Outfit"}),Object(j.jsxs)("div",{className:"body",children:[" ",Object(j.jsx)("div",{className:"map",children:this.props.outfit.map((function(t){return Object(j.jsxs)("div",{id:t.png,className:"outfit-container",onClick:e.getOutfitDiv,children:[Object(j.jsx)("img",{className:"head-img",src:t.png}),Object(j.jsx)("p",{id:"p-",children:t.name})]})}))}),Object(j.jsx)("input",{type:"file"})]})]})}}]),n}(c.Component),L=Object(v.b)((function(e){return{outfit:e.pngReducer.outfit}}),{getOutfit:E})(F),H=n(22),S=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(p.a)(this,n),(c=t.call(this,e)).getDiv=function(){var e=document.getElementsByClassName("background-container")[0].id;c.setState({background:e}),console.log(e)},c.getFile=function(e){var t=e.target.files;console.log(t[0].name),c.setState({background:t[0].name})},c.state={background:[],head:"",outfit:"",png:""},c}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.getBackground(),this.props.getHead(),this.props.getOutfit(),console.log(this.props.background)}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"create",children:[Object(j.jsx)(u,{}),Object(j.jsxs)("div",{className:"create-container",children:[Object(j.jsxs)("div",{className:"name-container",children:[Object(j.jsx)("p",{children:"Colletion Name"}),Object(j.jsx)(H.a,{onDragEnd:this.onDragEnd,children:Object(j.jsxs)("div",{className:"layerOrder-container",children:[Object(j.jsx)("p",{children:"Layer Orders"}),Object(j.jsx)(H.c,{droppableId:"droppable-1",type:"PERSON",children:function(e,t){return Object(j.jsxs)("div",Object(g.a)(Object(g.a)({ref:e.innerRef},e.droppableProps),{},{children:[Object(j.jsx)(H.b,{draggableId:"draggable-1",index:0,children:function(e,t){return Object(j.jsx)("div",Object(g.a)(Object(g.a)(Object(g.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:Object(j.jsx)("p",{children:"Background"})}))}}),Object(j.jsx)(H.b,{draggableId:"draggable-2",index:0,children:function(e,t){return Object(j.jsx)("div",Object(g.a)(Object(g.a)(Object(g.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:Object(j.jsx)("p",{children:"Head"})}))}}),e.placeholder]}))}})]})})]}),Object(j.jsxs)("div",{className:"layers",children:[Object(j.jsx)("h1",{children:"background"}),Object(j.jsxs)("div",{className:"back",children:[Object(j.jsx)("div",{className:"map",children:this.props.background.map((function(t){return Object(j.jsxs)("div",{id:t.png,className:"background-container",onClick:e.getDiv,children:[Object(j.jsx)("img",{className:"background-img",src:t.png}),Object(j.jsx)("p",{children:t.name})]})}))}),Object(j.jsx)("button",{children:"Upload"}),Object(j.jsx)("button",{onClick:this.postNft,children:"sumbit"})]}),Object(j.jsx)(B,{}),Object(j.jsx)(L,{})]}),Object(j.jsxs)("section",{className:"nft-container",children:[Object(j.jsx)("div",{className:"connect",children:Object(j.jsx)("h1",{children:"connect wallet"})}),Object(j.jsx)("div",{className:"nft",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{id:"nft-png1",src:this.state.background}),Object(j.jsx)("img",{id:"nft-png2",src:this.state.head}),Object(j.jsx)("img",{id:"nft-png3",src:this.state.outfit})]})}),Object(j.jsx)("button",{children:Object(j.jsx)("a",{href:this.state.background,download:this.state.background,children:"Download"})})]})]})]})}}]),n}(c.Component),I=Object(v.b)((function(e){return{background:e.pngReducer.background,head:e.pngReducer.head,outfit:e.pngReducer.outfit}}),{getBackground:D,getHead:R,getOutfit:E})(S);var T=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(u,{})})};var _=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(u,{})})},z=Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/Create",component:I}),Object(j.jsx)(s.a,{path:"/Mint",component:T}),Object(j.jsx)(s.a,{path:"/Explore",component:_}),Object(j.jsx)(s.a,{exact:!0,path:"/",component:b})]});var M=function(){return Object(j.jsx)("div",{className:"App",children:z})},G=n(12),A=n(43),W=Object(G.c)({pngReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"".concat(N,"_FULFILLED"):case"".concat(y,"_FULFILLED"):case"".concat(C,"_FULFILLED"):return Object(g.a)(Object(g.a)({},e),{},{id:c.data,png:c.data,name:c.data});default:return e}}}),J=Object(G.e)(W,Object(G.a)(A.a)),K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};i.a.render(Object(j.jsx)(v.a,{store:J,children:Object(j.jsx)(l.a,{children:Object(j.jsx)(M,{})})}),document.getElementById("root")),K()}},[[76,1,2]]]);
//# sourceMappingURL=main.02792d3f.chunk.js.map