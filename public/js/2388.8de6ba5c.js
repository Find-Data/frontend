"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[2388],{62388:function(t,e,r){r.r(e),r.d(e,{default:function(){return P}});var s=r(66252),a={class:"w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto"},o=(0,s._)("div",{class:"text-center mb-10"},[(0,s._)("h1",{class:"text-dark mb-3"},"Esqueceu a senha ?"),(0,s._)("div",{class:"text-gray-400 fw-bold fs-4"}," Escreva o email que deseja recuperar a senha: ")],-1),n={class:"fv-row mb-10"},i=(0,s._)("label",{class:"form-label fw-bolder text-gray-900 fs-6"},"Email",-1),l={class:"fv-plugins-message-container"},u={class:"fv-help-block"},c={class:"d-flex flex-wrap justify-content-center pb-lg-0"},d={type:"submit",ref:"submitButton",id:"kt_password_reset_submit",class:"btn btn-lg btn-primary fw-bolder me-4"},m=(0,s._)("span",{class:"indicator-label"}," Enviar ",-1),b=(0,s._)("span",{class:"indicator-progress"},[(0,s.Uk)(" Enviando... "),(0,s._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),f=[m,b],p=(0,s.Uk)("Voltar");function g(t,e,r,m,b,g){var v=(0,s.up)("Field"),w=(0,s.up)("ErrorMessage"),_=(0,s.up)("router-link"),h=(0,s.up)("Form");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(h,{class:"form w-100 fv-plugins-bootstrap5 fv-plugins-framework",onSubmit:t.onSubmitForgotPassword,id:"kt_login_password_reset_form","validation-schema":t.forgotPassword},{default:(0,s.w5)((function(){return[o,(0,s._)("div",n,[i,(0,s.Wm)(v,{class:"form-control form-control-solid",type:"emai",placeholder:"",id:"email",name:"email"}),(0,s._)("div",l,[(0,s._)("div",u,[(0,s.Wm)(w,{name:"email"})])])]),(0,s._)("div",c,[(0,s._)("button",d,f,512),(0,s.Wm)(_,{to:"/sign-in",class:"btn btn-lg btn-light-primary fw-bolder"},{default:(0,s.w5)((function(){return[p]})),_:1})])]})),_:1},8,["onSubmit","validation-schema"])])}var v=r(70655),w=r(2262),_=r(12954),h=r(33907),k=r(74231),x=r(15758),y=r(48542),E=r.n(y),S=(0,s.aZ)({name:"password-reset",components:{Field:_.gN,Form:_.l0,ErrorMessage:_.Bc},setup:function(){var t=this,e=(0,h.oR)(),r=(0,w.iH)(null),s=k.Ry().shape({email:k.Z_().email().required().label("Email")}),a=function(s){return(0,v.mG)(t,void 0,void 0,(function(){var t,a,o,n;return(0,v.Jh)(this,(function(i){switch(i.label){case 0:return r.value.disabled=!0,null===(o=r.value)||void 0===o||o.setAttribute("data-kt-indicator","on"),[4,e.dispatch(x.e.FORGOT_PASSWORD,s)];case 1:return i.sent(),t=Object.keys(e.getters.getErrors)[0],a=e.getters.getErrors[t],a?E().fire({text:a[0],icon:"error",buttonsStyling:!1,confirmButtonText:"Erro - verifique o email !",customClass:{confirmButton:"btn fw-bold btn-light-danger"}}):E().fire({text:"Email enviado com sucesso!",icon:"success",buttonsStyling:!1,confirmButtonText:"Logar novamente!",customClass:{confirmButton:"btn fw-bold btn-light-primary"}}),null===(n=r.value)||void 0===n||n.removeAttribute("data-kt-indicator"),r.value.disabled=!1,[2]}}))}))};return{onSubmitForgotPassword:a,forgotPassword:s,submitButton:r}}}),B=r(83744);const F=(0,B.Z)(S,[["render",g]]);var P=F}}]);
//# sourceMappingURL=2388.8de6ba5c.js.map