(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"title":"Hello I Am Arshia Sadeghi","subtitle":"full stack | half stack","links":{"stackoverflow":"https://stackoverflow.com/story/iamarshia"},"sections":[{"title":"about","items":[{"type":"p","content":"I have created a few JavaScript and React libraries (180k+ npm downloads)."}]},{"title":"Skills","items":[{"type":"card","content":{"image":"./images/react.png","title":"react"}},{"type":"card","content":{"image":"./images/javascript.png","title":"javascript"}},{"type":"card","content":{"image":"./images/html-5.png","title":"html"}},{"type":"card","content":{"image":"./images/css-3.png","title":"CSS"}}]}],"icons":{"down":"images/down.png"}}')},193:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),i=a.n(c),r=(a(42),a(43),a(44),a(1)),s=a(13),o=a(2),m=a(3),u=a(5),p=a(4),d=a(6),f=(a(27),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.children;return l.a.createElement("div",{className:"fullpage ".concat(this.props.className||"")},e)}}]),t}(n.Component)),h=(a(52),function(e){return l.a.createElement("div",{onClick:e.onClick,style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"-34px",transform:"translateY(-45px)"}},l.a.createElement("div",null,l.a.createElement("img",{src:e.icon,alt:"",style:{maxWidth:"30px"}})))}),E=a(9),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={bck:"skyblue"},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{background:this.state.bck}},l.a.createElement("ul",{style:{float:"right",display:"flex",flexDirection:"row",marginTop:"2px",color:"white",listStyle:"none",padding:"29px",cursor:"pointer"}},l.a.createElement("li",{style:{paddingRight:"9px"}},l.a.createElement(E.Link,{activeClass:"active",to:"test1",spy:!0,smooth:!0,offset:50,duration:500,delay:0},l.a.createElement("a",null,"Portofolio"))),l.a.createElement("li",null,l.a.createElement(E.Link,{activeClass:"active",to:"test4",spy:!0,smooth:!0,offset:50,duration:500,delay:0},l.a.createElement("a",null,"About")))),l.a.createElement("ul",{style:{float:"left",display:"flex",flexDirection:"row",marginTop:"2px",color:"white",listStyle:"none",padding:"29px",cursor:"pointer"}},l.a.createElement("li",{style:{paddingRight:"9px"}},l.a.createElement("a",{onClick:function(){"skyblue"==e.state.bck?e.setState({bck:"yellow"}):"yellow"==e.state.bck&&e.setState({bck:"skyblue"})}},l.a.createElement("img",{src:"./images/box.png",style:{width:"30px"}})))),l.a.createElement(f,{className:"first",style:{background:this.state.bck}},l.a.createElement("h1",{className:"title"},r.title),l.a.createElement("div",null,l.a.createElement("h2",null,r.subtitle)),l.a.createElement("div",{className:"icons-wrapper"},Object.keys(r.links).map((function(e){return l.a.createElement(s.SocialIcon,{url:r.links[e]})})))),l.a.createElement(E.Link,{activeClass:"active",to:"test2",spy:!0,smooth:!0,offset:50,duration:500,delay:0},l.a.createElement(h,{icon:r.icons.down,onClick:function(){return console.log("iam working")}})),l.a.createElement(E.Element,{name:"test2",className:"element"}))}}]),t}(n.Component),g=(a(31),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E.Element,{name:"test4",className:"element"}),l.a.createElement(f,{className:"second"},l.a.createElement("h3",null,r.sections[0].title),l.a.createElement("div",{className:"paragraphs"},r.sections[0].items.map((function(e){return l.a.createElement("p",null,e.content)})))))}}]),t}(n.Component)),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.skill;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"img-wrapper"},l.a.createElement("img",{src:e.content.image})),l.a.createElement("div",{className:"skill-title-wrapper"},l.a.createElement("h4",null,e.content.title)))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(f,{className:"third"},l.a.createElement("h3",null,r.sections[1].title," "),l.a.createElement("div",{className:"card-wrapper"},r.sections[1].items.map((function(e){return l.a.createElement(y,{skill:e})}))),l.a.createElement(E.Element,{name:"test1",className:"element"}))}}]),t}(n.Component);n.Component;var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"navigation"}),l.a.createElement(b,null),l.a.createElement(g,null),l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},27:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){e.exports=a(193)},42:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},44:function(e,t,a){}},[[38,1,2]]]);
//# sourceMappingURL=main.8b21e280.chunk.js.map