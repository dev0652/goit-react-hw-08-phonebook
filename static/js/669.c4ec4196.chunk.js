"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[669],{1658:function(n,e,t){t.d(e,{Z:function(){return j}});var i,r,o,a,l,c,s=t(168),d=t(7924),u=d.zo.div(i||(i=(0,s.Z)(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n"]))),f=d.zo.div(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5vh;\n\n  /* background-color: #660dd9; */\n\n  background-color: #6684ff;\n  background: linear-gradient(105.62deg, #524abe -7.88%, #6684ff 100%);\n\n  padding: 65px 12px 0;\n  overflow: hidden;\n  color: #fff;\n\n  width: 45%;\n  padding: 0 30px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),x=d.zo.div(o||(o=(0,s.Z)(["\n  /* margin-top: 30vh; */\n"]))),h=d.zo.p(a||(a=(0,s.Z)(["\n  font-size: 2rem;\n  text-align: center;\n  font-weight: bold;\n"]))),p=d.zo.img(l||(l=(0,s.Z)(["\n  max-width: 30vw;\n  max-width: 70%;\n"]))),m=d.zo.div(c||(c=(0,s.Z)(["\n  width: 55%;\n\n  display: flex;\n  justify-content: center;\n  /* align-items: center; */\n"]))),g=t.p+"static/media/project.98b305a55c5f8a54fbb3.png",v=t(3329);function j(n){var e=n.children;return(0,v.jsxs)(u,{children:[(0,v.jsxs)(f,{children:[(0,v.jsxs)(x,{children:[(0,v.jsx)(h,{children:"Add and manage contacts."}),(0,v.jsx)(h,{children:"From everywhere"})]}),(0,v.jsx)(p,{src:g,alt:"UI Design  Illustration"})]}),(0,v.jsx)(m,{children:e})]})}},2285:function(n,e,t){t.d(e,{Z:function(){return z}});var i,r,o,a,l=t(9434),c=t(9273),s=t(645),d=t(1448),u=t(168),f=t(7924),x=f.zo.div(i||(i=(0,u.Z)(["\n  margin-top: 30vh;\n"]))),h=f.zo.div(r||(r=(0,u.Z)(["\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n\n  /* align-items: center; */\n\n  gap: 10px;\n"]))),p=t(5218),m=t(1087),g=t(3329),v=f.zo.p(o||(o=(0,u.Z)(["\n  text-align: center;\n  font-size: 0.9rem;\n"]))),j=(0,f.zo)(m.rU)(a||(a=(0,u.Z)(["\n  font-weight: 500;\n"])));function y(n){var e,t,i;return n.condition?(e="Already have an account?",t="/login",i="Sign in"):(e="Don't have an account yet?",t="/register",i="Sign up"),(0,g.jsxs)(v,{children:[e," ",(0,g.jsx)(j,{to:t,children:i})]})}var w=t(9677);function z(n){var e,t,i,r,o,a=n.formType,u=(0,l.I0)(),f="register"===a;"login"===a&&(e="Sign in",t="Login successful",i=c.x4,r="dev0652@mail.au",o="1234567"),f&&(e="Create an account",t="Registration successful",i=c.z2,r="",o="");return(0,g.jsx)(x,{children:(0,g.jsx)(w.Z,{title:e,children:(0,g.jsxs)(d.n5,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,r={email:e.elements.email.value,password:e.elements.password.value};f&&(r.name=e.elements.name.value),u(i(r)).then(p.Am.success(t)).catch((function(n){return p.Am.error(n.message)})),e.reset()},children:[(0,g.jsxs)(d.V$,{children:[f&&(0,g.jsx)(d.nv,{type:"text",name:"name",placeholder:"Name",required:!0}),(0,g.jsx)(d.nv,{type:"email",name:"email",placeholder:"Email",defaultValue:r,required:!0}),(0,g.jsx)(d.nv,{type:"password",name:"password",placeholder:"Password",defaultValue:o,pattern:"(?=.*).{7,}",title:"Password must be at least 7 characters long",required:!0})]}),(0,g.jsxs)(h,{children:[(0,g.jsx)(s.E5,{type:"submit",children:e}),(0,g.jsx)(y,{condition:f})]})]})})})}},9677:function(n,e,t){t.d(e,{Z:function(){return d}});var i,r,o=t(168),a=t(7924),l=a.zo.div(i||(i=(0,o.Z)(["\n  /* margin-bottom: 10px; */\n  display: flex;\n  /* align-items: center; */\n\n  flex-direction: column;\n  gap: 30px;\n"]))),c=a.zo.h2(r||(r=(0,o.Z)(["\n  font-size: 1.6rem;\n  color: ",";\n  text-align: ",";\n"])),(function(n){return n.theme.colors.accentDark}),(function(n){var e=n.align;return void 0===e?"center":e})),s=t(3329);function d(n){var e=n.title,t=n.children;return(0,s.jsxs)(l,{children:[(0,s.jsx)(c,{children:e}),t]})}},285:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var i=t(6907),r=t(2285),o=t(1658),a=t(3329);function l(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.ql,{children:[(0,a.jsx)("title",{children:"Register"}),(0,a.jsx)("meta",{name:"description",content:"Register or log in to see your personalized items"})]}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)(o.Z,{children:(0,a.jsx)(r.Z,{formType:"register"})})})]})}},1448:function(n,e,t){t.d(e,{V$:function(){return f},n5:function(){return u},nv:function(){return d}});var i,r,o,a,l=t(168),c=t(7924),s=t(7478),d=c.zo.input(i||(i=(0,l.Z)(["\n  padding: 2px 25px 0;\n  border-radius: ",";\n  font-size: 1.1rem;\n  line-height: 2;\n  /* background-color: white; */\n\n  &::placeholder {\n    color: Silver;\n  }\n"])),s.r.borderRadius),u=c.zo.form(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n"]))),f=c.zo.div(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"])));c.zo.label(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n"])))}}]);
//# sourceMappingURL=669.c4ec4196.chunk.js.map