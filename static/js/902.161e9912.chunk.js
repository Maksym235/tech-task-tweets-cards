"use strict";(self.webpackChunktech_task_tweets_cards=self.webpackChunktech_task_tweets_cards||[]).push([[902],{902:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var o=t(439),i=t(433),r=t(243);r.Z.defaults.baseURL="https://6441908ffadc69b8e0873831.mockapi.io/";var a,s,l,c,x,p,d,u,f,g,b=t(791),h=t(168),m=t(313),w=t(841),Z=m.ZP.div(a||(a=(0,h.Z)(["\n position: relative;\n  width: 380px;\n  height: 460px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-direction: column;\n  border-radius: 20px;\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);  background-image: url(",'), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%) ;\n    background-position: 50% 10%;\n    background-repeat: no-repeat;\n    bacground-size: cover;\n\n    transition: transform 0.3s cubic-bezier(.42,.44,.83,.67) ;\n    &:hover{\n      transform: scale(1.05)\n    }\n     &::before {\n    content: "";\n    position: absolute;\n    width: 380px;\n    height: 8px;\n    left: 0px;\n    top: 214px;\n\n    background: #ebd8ff;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n\n\n'],["\n position: relative;\n  width: 380px;\n  height: 460px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-direction: column;\n  border-radius: 20px;\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\\\n  background-image: url(",'), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%) ;\n    background-position: 50% 10%;\n    background-repeat: no-repeat;\n    bacground-size: cover;\n\n    transition: transform 0.3s cubic-bezier(.42,.44,.83,.67) ;\n    &:hover{\n      transform: scale(1.05)\n    }\n     &::before {\n    content: "";\n    position: absolute;\n    width: 380px;\n    height: 8px;\n    left: 0px;\n    top: 214px;\n\n    background: #ebd8ff;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n\n\n'])),w),j=m.ZP.img(s||(s=(0,h.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  display: block;\n"]))),v=m.ZP.div(l||(l=(0,h.Z)(["\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  left: 150px;\n  top: 175px;\n  border-radius: 50px;\n  background: #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n"]))),k=m.ZP.div(c||(c=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  width: 62px;\n  height: 62px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n\n  background: #5736a3;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n"]))),y=m.ZP.img(x||(x=(0,h.Z)(["\n  display: block;\n  width: 62px;\n  height: 62px;\n  border-radius: 50px;\n  background-color: transarent;\n"]))),S=m.ZP.div(p||(p=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 26px;\n"]))),C=m.ZP.p(d||(d=(0,h.Z)(['\n  margin: 0;\n  font-family: "Montserrat";\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #fff;\n']))),P=m.ZP.button(u||(u=(0,h.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 36px;\n  padding: 14px 56px;\n  gap: 6px;\n\n  transition: background 0.3s cubic-bezier(0.42, 0.44, 0.83, 0.67);\n\n  background: ",';\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: none;\n  font-family: "Montserrat";\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n'])),(function(n){return n.isFollow?"#5CD3A8":"#ebd8ff"})),z=t(531),F=t(184);function A(n){var e=n.user,t=e.id,i=e.followers,r=e.tweets,a=e.avatar,s=n.onClick,l=n.isFollowing,c=(0,b.useState)(l),x=(0,o.Z)(c,2),p=x[0],d=x[1],u=p?(i+1).toString():i.toString(),f=Number(u).toLocaleString("en-US"),g=Number(r).toLocaleString("en-US"),h=function(){d((function(n){return!n}))};return(0,F.jsxs)(Z,{id:t,children:[(0,F.jsx)(j,{src:z.Z,alt:"logo"}),(0,F.jsx)(v,{children:(0,F.jsx)(k,{children:(0,F.jsx)(y,{src:a,alt:"avatar"})})}),(0,F.jsxs)(S,{children:[(0,F.jsxs)(C,{children:["Tweets: ",g]}),(0,F.jsxs)(C,{children:["followers: ",f]})]}),(0,F.jsx)(P,{isFollow:p,onClick:function(){s(t),h()},type:"button",children:p?"following":"follow"})]})}var L,_=m.ZP.div(f||(f=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),M=m.ZP.ul(g||(g=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  gap: 15px;\n  column-gap: 15px;\n  margin-bottom: 50px;\n"]))),B=m.ZP.button(L||(L=(0,h.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 50px;\n  padding: 14px 28px;\n  gap: 6px;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: none;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n\n  transition: background 0.3s cubic-bezier(0.42, 0.44, 0.83, 0.67);\n  &:hover {\n    background: #bcaccc;\n  }\n"])));function N(n){var e=n.LoadMore;return(0,F.jsx)(B,{onClick:e,type:"button",children:"Load more"})}var U=t(413),V=t(175),D=function(n){return(0,F.jsxs)(V.ZP,(0,U.Z)((0,U.Z)({speed:2,width:400,height:160,viewBox:"0 0 400 160",backgroundColor:"#e1dff7",foregroundColor:"#ebebeb"},n),{},{children:[(0,F.jsx)("rect",{x:"9",y:"6",rx:"13",ry:"13",width:"110",height:"130"}),(0,F.jsx)("rect",{x:"129",y:"6",rx:"13",ry:"13",width:"110",height:"130"}),(0,F.jsx)("rect",{x:"251",y:"6",rx:"13",ry:"13",width:"110",height:"130"})]}))};function E(n){var e=n.selectValue,t=(0,b.useState)([]),a=(0,o.Z)(t,2),s=a[0],l=a[1],c=(0,b.useState)(1),x=(0,o.Z)(c,2),p=x[0],d=x[1],u=function(n,e){var t=(0,b.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem(n)))&&void 0!==t?t:e})),i=(0,o.Z)(t,2),r=i[0],a=i[1];return(0,b.useEffect)((function(){localStorage.setItem(n,JSON.stringify(r))}),[n,r]),[r,a]}("id",[]),f=(0,o.Z)(u,2),g=f[0],h=f[1],m=(0,b.useState)("idle"),w=(0,o.Z)(m,2),Z=w[0],j=w[1],v=(0,b.useState)(null),k=(0,o.Z)(v,2),y=k[0],S=k[1];(0,b.useEffect)((function(){j("pending"),function(n){return r.Z.defaults.params={limit:5,page:n},r.Z.get("users")}(p).then((function(n){return l((function(e){return[].concat((0,i.Z)(e),(0,i.Z)(n.data))}))})).catch((function(n){return S(n)}),j("rejected")).finally(j("fulfilled"))}),[p]);var C=function(n){g.includes(n)?h(g.filter((function(e){return e!==n}))):h((function(e){return[n].concat((0,i.Z)(e))}))};return(0,F.jsxs)(_,{children:["pending"===Z&&(0,F.jsx)(D,{}),"rejected"===Z&&(0,F.jsx)("div",{children:y.message}),"fulfilled"===Z&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(M,{children:s.map((function(n){switch(e){case"all":return(0,F.jsx)("li",{children:(0,F.jsx)(A,{isFollowing:g.includes(n.id),onClick:C,user:n})},n.id);case"follow":return!g.includes(n.id)&&(0,F.jsx)("li",{children:(0,F.jsx)(A,{isFollowing:!1,onClick:C,user:n})},n.id);case"followings":return g.includes(n.id)&&(0,F.jsx)("li",{children:(0,F.jsx)(A,{isFollowing:!0,onClick:C,user:n})},n.id);default:return console.log("error")}}))}),(0,F.jsx)(N,{LoadMore:function(){d((function(n){return n+1}))}})]})]})}var I,J,O,T=t(689),H=t(87),R=m.ZP.div(I||(I=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-right: 20px;\n  margin-left: 20px;\n"]))),q=(0,m.ZP)(H.rU)(J||(J=(0,h.Z)(['\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  text-decoration: none;\n  font-family: "Montserrat";\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n  transition: color 0.3s cubic-bezier(0.42, 0.44, 0.83, 0.67);\n\n  &:hover {\n    color: #a30000;\n  }\n']))),G=t(126),K=t(952),Q=(0,m.ZP)(K.ZP)(O||(O=(0,h.Z)(["\n  width: 200px;\n  background: #bcaccc;\n"]))),W=[{value:"all",label:"Show all"},{value:"follow",label:"Follow"},{value:"followings",label:"Followings"}];function X(n){var e=n.onChange;return(0,F.jsx)(Q,{defaultValue:W[0],options:W,onChange:function(n){var t=n.value;console.log(t),e(t)}})}function Y(){var n,e,t=(0,b.useState)("all"),i=(0,o.Z)(t,2),r=i[0],a=i[1],s=null!==(n=null===(e=(0,T.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,F.jsxs)("div",{children:[(0,F.jsxs)(R,{children:[(0,F.jsxs)(q,{to:s,children:[(0,F.jsx)(G.Dfd,{})," Back to home"]}),(0,F.jsx)(X,{onChange:function(n){a(n)}})]}),(0,F.jsx)(E,{selectValue:r})]})}},841:function(n,e,t){n.exports=t.p+"static/media/picture1.38ea3189a2c780f4bbbf.png"}}]);
//# sourceMappingURL=902.161e9912.chunk.js.map