(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55df9ff3"],{"231e":function(e,t,a){},"2fef":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Auth"},[a("svg",{staticClass:"back",staticStyle:{"-ms-transform":"rotate(180deg)","-webkit-transform":"rotate(180deg)",transform:"rotate(180deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"2em",height:"2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},on:{click:e.back}},[a("path",{attrs:{fill:"#434691",d:"M256.25 16.042c-132.548 0-240 107.451-240 240s107.452 240 240 240s240-107.452 240-240s-107.45-240-240-240zM403.328 403.12A207.253 207.253 0 1 1 447.917 337a207.364 207.364 0 0 1-44.589 66.12z"}}),a("path",{attrs:{fill:"#434691",d:"M239.637 164.987l75.053 75.054H128.137v32H314.69l-75.053 75.054l22.627 22.627l113.681-113.681L262.264 142.36l-22.627 22.627z"}})]),e.getToken?a("div",[e.getUser?a("div",{staticClass:"inputs",staticStyle:{"max-width":"75vw"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],class:{wrong:e.wrong.name},attrs:{placeholder:"name"},domProps:{value:e.user.name},on:{input:[function(t){t.target.composing||e.$set(e.user,"name",t.target.value)},function(t){e.changed=!0}]}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],class:{wrong:e.wrong.email},attrs:{placeholder:"email"},domProps:{value:e.user.email},on:{input:[function(t){t.target.composing||e.$set(e.user,"email",t.target.value)},function(t){e.changed=!0}]}})]):e._e(),e.changed?a("button",{on:{click:e.updateUser}},[e._v(" обновить данные ")]):e._e(),a("button",{on:{click:e.logOut}},[e._v(" выйти ")])]):a("div",{staticClass:"inputs"},[e.isRegistration?a("h3",[e._v(" регистрация ")]):a("h3",[e._v(" вход ")]),e.isRegistration?a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],class:{wrong:e.wrong.name},attrs:{placeholder:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}):e._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{wrong:e.wrong.email},attrs:{placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{wrong:e.wrong.password},attrs:{placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.isRegistration?a("button",{on:{click:e.register}},[e._v(" зарегистрироваться ")]):a("button",{on:{click:e.enter}},[e._v(" войти ")]),a("div",{staticStyle:{"font-size":"3vh",margin:"1.3vh 0"}},[e._v(" войти через социальные сети ")]),a("div",{staticClass:"socials"},[a("svg",{staticClass:"socials-icon",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},on:{click:function(t){return e.auth("https://sudokueasy.herokuapp.com/api/login/vkontakte")}}},[a("path",{attrs:{d:"M0 0v1200h1200V0H0zm532.69 320.874c33.977-.352 67.21 3.415 83.423 3.882c60.1 1.73 70.714 32.127 69.945 57.129c-1.124 36.617-24.683 191.51 18.971 206.616c63.609-34.014 106.265-139.659 137.328-206.616c15.714-33.868 13.229-35.551 49.438-35.596l143.848-.22c34.641-.043 33.289-1.258 44.386 12.891c25.81 32.908-81.447 169.794-116.09 207.642c-63.929 69.847-26.63 96.895-16.332 106.494c47.709 44.483 93.809 90.611 122.461 133.154c22.778 33.822 13.37 65.312-15.602 66.504l-154.248 6.372c-51.186 2.104-130.776-89.652-143.48-109.644c-10.274-16.49-59.789-37.157-64.453 4.979l-6.52 58.813c-4.734 42.041-35.775 41.06-60.277 42.113c-169.669 7.301-227.45-57.297-312.892-152.637c-62.621-88.56-122.38-177.629-171.899-284.326c-14.822-31.938-22.673-55.367-24.683-80.2c24.916-19.474 112.373-11.086 171.094-12.378c16.061-.354 26.898 8.849 35.376 27.173c33.081 71.513 69.159 141.739 116.895 203.833c20.789 19.148 39.167 26.189 48.34-12.743c5.326-.49 4.898-64.964 5.2-113.6c.207-33.394-3.716-73.441-60.278-91.919c11.441-29.989 56.365-37.263 100.049-37.716z",fill:"#434691"}})]),a("svg",{staticClass:"socials-icon",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},on:{click:function(t){return e.auth("https://sudokueasy.herokuapp.com/api/login/vkontakte")}}},[a("g",{attrs:{fill:"none"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",fill:"#434691"}})])])]),e.isRegistration?a("div",{staticClass:"change",on:{click:function(t){e.isRegistration=!e.isRegistration}}},[e._v(" войти ")]):a("div",{staticClass:"change",on:{click:function(t){e.isRegistrxation=!e.isRegistration}}},[e._v(" регистрация ")])])])},n=[],i=a("5530"),o=(a("b0c0"),a("2f62")),r=a("a18c"),c={name:"Auth",data:function(){return{name:"examplename",email:"example@mail.ru",password:"examplepassword",isRegistration:!0,changed:!1,user:{name:"",email:""},wrong:{name:!1,email:!1,password:!1}}},computed:Object(i["a"])({},Object(o["c"])({getToken:"dataManage/getToken",getUser:"dataManage/getUser"})),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["b"])({signUp:"dataManage/signUp",signIn:"dataManage/signIn",logOut:"dataManage/logOut",update:"dataManage/update",check:"dataManage/check"})),Object(o["d"])({setToken:"dataManage/SET_TOKEN"})),{},{auth:function(e){window.open(e)},back:function(){r["a"].push("/Home")},register:function(){var e=this;this.signUp([this.name,this.email,this.password]).then((function(){e.signIn([e.email,e.password]).then((function(){r["a"].push("Sudoku"),e.user.name=e.getUser.name,e.user.email=e.getUser.email}))})).catch((function(t){t.response.data.errors&&(t.response.data.errors.password&&(e.wrong.password=!0,setTimeout((function(){e.wrong.password=!1}),2500)),t.response.data.errors.email&&(e.wrong.email=!0,setTimeout((function(){e.wrong.email=!1}),2500)))}))},enter:function(){var e=this;this.signIn([this.email,this.password]).then((function(){r["a"].push("Sudoku"),e.user.name=e.getUser.name,e.user.email=e.getUser.email})).catch((function(t){console.log(t.response.data.errors),t.response.data.errors&&(t.response.data.errors.password&&(e.wrong.password=!0,setTimeout((function(){e.wrong.password=!1}),2500)),t.response.data.errors.email&&(e.wrong.email=!0,setTimeout((function(){e.wrong.email=!1}),2500)))}))},updateUser:function(){var e=this;this.update(this.user).then((function(){e.user.name=e.getUser.name,e.user.email=e.getUser.email,e.changed=!1})).catch((function(t){console.log(t.response.data.errors),t.response.data.errors&&(t.response.data.errors.name&&(e.wrong.name=!0,setTimeout((function(){e.wrong.name=!1}),2500)),t.response.data.errors.email&&(e.wrong.email=!0,setTimeout((function(){e.wrong.email=!1}),2500)))}))},socialiteAnswer:function(e){var t=this;"https://sudokueasy.herokuapp.com"==e.origin&&(this.setToken(e.data.token),this.check().then((function(){t.user.name=t.getUser.name,t.user.email=t.getUser.email})))}}),created:function(){this.getToken&&(this.user.name=this.getUser.name,this.user.email=this.getUser.email),window.addEventListener("message",this.socialiteAnswer)},beforeDestroy:function(){document.removeEventListener("message",this.socialiteAnswer),document.removeEventListener("message",this.socialiteAnswer)}},l=c,u=(a("4f26"),a("2877")),m=Object(u["a"])(l,s,n,!1,null,"81446b5a",null);t["default"]=m.exports},"4f26":function(e,t,a){"use strict";a("231e")}}]);
//# sourceMappingURL=chunk-55df9ff3.42114c74.js.map