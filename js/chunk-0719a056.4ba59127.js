(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0719a056"],{"01d4":function(t,e,i){"use strict";var s=i("749b").forEach,n=i("2238"),o=n("forEach");t.exports=o?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},1022:function(t,e,i){},1234:function(t,e,i){},2238:function(t,e,i){"use strict";var s=i("a714");t.exports=function(t,e){var i=[][t];return!!i&&s((function(){i.call(null,e||function(){throw 1},1)}))}},"2bd1":function(t,e,i){"use strict";i("e095")},"408a":function(t,e,i){var s=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=s(t))throw TypeError("Incorrect invocation");return+t}},4619:function(t,e,i){var s=i("199f"),n=i("ebca"),o=i("f14a"),a=i("a714"),l=a((function(){o(1)}));s({target:"Object",stat:!0,forced:l},{keys:function(t){return o(n(t))}})},"4bce":function(t,e,i){"use strict";i("1022")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var s=i("1d80"),n=i("5899"),o="["+n+"]",a=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),r=function(t){return function(e){var i=String(s(e));return 1&t&&(i=i.replace(a,"")),2&t&&(i=i.replace(l,"")),i}};t.exports={start:r(1),end:r(2),trim:r(3)}},"5eb1":function(t,e,i){"use strict";i("1234")},"608c":function(t,e,i){var s=i("199f"),n=i("0368"),o=i("b973"),a=i("a84f"),l=i("2439"),r=i("5655");s({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,i,s=a(t),n=l.f,c=o(s),u={},d=0;while(c.length>d)i=n(s,e=c[d++]),void 0!==i&&r(u,e,i);return u}})},"6bea":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.Field?i("div",{staticClass:"Sudoku",on:{click:function(e){return e.target!==e.currentTarget?null:t.pageClick(e)}}},[i("transition",{attrs:{name:"translation"}},[t.viewSettings.menuPanelShow?i("div",{staticClass:"menuPanel"},[i("div",{staticClass:"menuPanelItem",on:{click:t.menuPanelShow}},[t._v(" "+t._s(t.phrases.close)+" ")]),i("div",{staticClass:"menuPanelItem ",class:{secondColor:t.viewSettings.prompt},on:{click:t.promptClick}},[t._v(" "+t._s(t.phrases.prompt)+" ")]),i("transition",{attrs:{name:"translation"}},[t.viewSettings.prompt?i("div",{staticClass:"menuPanelItem",class:{secondColor:t.sudokuDataClass.getAdvancedPossibles()[2]},on:{click:function(e){return t.sudokuDataClass.setAdvancedPossibly(2)}}},[t._v(" "+t._s(t.phrases.onlyHere)+" ")]):t._e()]),i("transition",{attrs:{name:"translation"}},[t.viewSettings.prompt?i("div",{staticClass:"menuPanelItem",class:{secondColor:t.sudokuDataClass.getAdvancedPossibles()[1]},on:{click:function(e){return t.sudokuDataClass.setAdvancedPossibly(1)}}},[t._v(" "+t._s(t.phrases.onePossiblyDelete)+" ")]):t._e()]),i("div",{staticClass:"menuPanelItem",class:{secondColor:t.viewSettings.choiceShow},on:{click:function(e){t.viewSettings.choiceShow=!t.viewSettings.choiceShow}}},[t._v(" "+t._s(t.phrases.sidePanel)+" ")]),i("div",{staticClass:"menuPanelItem",class:{secondColor:t.viewSettings.easyChoiceShow},on:{click:function(){t.viewSettings.easyChoiceShow=!t.viewSettings.easyChoiceShow,t.easyChoice=!1}}},[t._v(" "+t._s(t.phrases.comfortChoice)+" ")]),i("transition",{attrs:{name:"translation"}},[t.viewSettings.easyChoiceShow?i("div",{staticClass:"menuPanelItem",class:{secondColor:t.viewSettings.easyChoiceDbClick},on:{click:function(e){t.viewSettings.easyChoiceDbClick=!t.viewSettings.easyChoiceDbClick}}},[t._v(" "+t._s(t.phrases.easyChoiceDbClick)+" ")]):t._e()]),0!==t.savedData.difficultyId.filter((function(t){return t.finished})).length?i("div",{staticClass:"menuPanelItem",on:{click:t.deleteDataSettings}},[t._v(" "+t._s(t.phrases.deleteDataSettings)+" ")]):t._e(),i("div",{staticClass:"menuPanelItem"},[i("div",[t._v(" "+t._s(t.phrases.difficulty)+": ")]),i("div",{staticClass:"difficultyChoice"},t._l(t.savedData.difficultyId.filter((function(t){return!t.finished})).map((function(t){return t.difficulty})),(function(e){return i("div",{key:e,class:{primaryColor:e===t.savedData.difficulty},on:{click:function(i){return t.setDifficulty(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])],1):t._e()]),i("div",{staticClass:"s-page",on:{click:function(e){return e.target!==e.currentTarget?null:t.pageClick()}}},[i("header",{on:{click:function(e){return e.target!==e.currentTarget?null:t.pageClick()}}},[i("div",[i("svg",{staticClass:"menuitem",staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},on:{click:t.menuPanelShow}},[i("g",{attrs:{fill:"none"}},[i("path",{attrs:{d:"M21 18H3v-2h18v2zm0-5H3v-2h18v2zm0-5H3V6h18v2z",fill:"#434691"}})])])]),i("div",{staticClass:"menuBlock"},[i("transition",{attrs:{name:"translation"}},[t.viewSettings.prompt?i("svg",{staticClass:"menuitem",class:{secondColor:t.viewSettings.removePossibly},staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36"},on:{click:function(e){t.viewSettings.removePossibly=!t.viewSettings.removePossibly}}},[i("path",{staticClass:"clr-i-outline clr-i-outline-path-1",attrs:{d:"M33.87 8.32L28 2.42a2.07 2.07 0 0 0-2.92 0L4.27 23.2l-1.9 8.2a2.06 2.06 0 0 0 2 2.5a2.14 2.14 0 0 0 .43 0l8.29-1.9l20.78-20.76a2.07 2.07 0 0 0 0-2.92zM12.09 30.2l-7.77 1.63l1.77-7.62L21.66 8.7l6 6zM29 13.25l-6-6l3.48-3.46l5.9 6z",fill:"#434691"}})]):t._e()]),i("svg",{staticClass:"menuitem",staticStyle:{transform:"scale(-1, 1)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},on:{click:function(e){return t.sudokuDataClass.undoLastValue()}}},[i("g",{attrs:{fill:"none"}},[i("path",{attrs:{d:"M11.995 4a8 8 0 1 0 7.735 10h-2.081a6 6 0 1 1-5.654-8a5.92 5.92 0 0 1 4.223 1.78L13 11h7V4l-2.351 2.35A7.965 7.965 0 0 0 11.995 4z",fill:"#434691"}})])]),i("transition",{attrs:{name:"translation"}},[t.viewSettings.prompt?i("svg",{staticClass:"menuitem",class:{secondColor:t.sudokuDataClass.getAutoSolve()},staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},on:{click:function(e){return t.sudokuDataClass.setAutoSolve()}}},[i("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-.99-14L6.88 17h1.9l1-2.81h4.44l.99 2.81h1.9L12.98 6h-1.97zm-.66 6.59l1.6-4.55h.09l1.6 4.55h-3.29z",fill:"#434691"}})]):t._e()])],1),i("div",[i("svg",{staticClass:"menuitem",staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},on:{click:t.nextSudoku}},[i("path",{attrs:{fill:"#434691",d:"M256.25 16.042c-132.548 0-240 107.451-240 240s107.452 240 240 240s240-107.452 240-240s-107.45-240-240-240zM403.328 403.12A207.253 207.253 0 1 1 447.917 337a207.364 207.364 0 0 1-44.589 66.12z"}}),i("path",{attrs:{fill:"#434691",d:"M239.637 164.987l75.053 75.054H128.137v32H314.69l-75.053 75.054l22.627 22.627l113.681-113.681L262.264 142.36l-22.627 22.627z"}})])])]),i("div",{staticClass:"Field-wrapper",style:{flexDirection:t.flexW},on:{click:function(e){return e.target!==e.currentTarget?null:t.pageClick()}}},[!t.rotate&&t.viewSettings.choiceShow?i("div",{staticClass:"choice",style:{flexDirection:t.flexD}},[i("button",{staticClass:"choice-button mainColor",on:{click:function(e){return t.SetValue(0)}}},[t._v(" X ")]),t._l(9,(function(e){return i("button",{key:e,staticClass:"choice-button mainColor",class:{secondColor:!(e>-1)||t.possiblyChoice.has(e)},on:{click:function(i){return t.SetValue(e)}}},[t._v(" "+t._s(e)+" ")])}))],2):t._e(),i("div",{staticClass:"Field",class:{opacity:t.easyChoice}},t._l(9,(function(e){return i("div",{key:e,staticClass:"Field-line"},t._l(9,(function(s){return i("SudokuButton",{key:s,attrs:{animations:t.viewSettings.animations,"button-id":9*(e-1)+s-1,"size-btn":t.sizeBtn+"vmin","local-data":t.Field[9*(e-1)+s-1],dataView:t.fieldView[9*(e-1)+s-1],"possibly-show":t.viewSettings.prompt,solved:t.sudokuDataClass.checkWin(),stack:t.sudokuDataClass.getStack(),"wrong-ids":t.sudokuDataClass.getWrongIds()},on:{"select-button":function(e){return t.buttonClick(e)}}})})),1)})),0),t.viewSettings.choiceShow?i("div",{staticClass:"choice",style:{flexDirection:t.flexD}},[i("button",{staticClass:"choice-button mainColor",on:{click:function(e){return t.SetValue(0)}}},[t._v(" X ")]),t._l(9,(function(e){return i("button",{key:e,staticClass:"choice-button mainColor",class:{secondColor:e>-1&&t.possiblyChoice.has(e)},on:{click:function(i){return t.SetValue(e)}}},[t._v(" "+t._s(e)+" ")])}))],2):t._e()]),t.easyChoice?i("comfort-choice",{attrs:{"size-btn":t.sizeBtn,params:t.comfortChoiceData,redact:t.viewSettings.removePossibly},on:{"send-value":function(e){return t.SetValue(e)}}}):t._e()],1)],1):t._e()},n=[],o=i("d0ff"),a=i("f3f3"),l=(i("7db0"),i("d3b7"),i("6062"),i("3ca3"),i("ddb0"),i("159b"),i("4de4"),i("2f62")),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"sudokuButton",staticClass:"SudokuButton",class:{solved:t.solved},style:[{backgroundColor:t.dataView.bgcolor,width:t.sizeBtn,height:t.sizeBtn,fontSize:t.sizeBtn},t.styles],on:{click:t.mouseDown}},[0!==t.localData.value?i("div",{staticClass:"MainValue",style:t.MainValueStyle.transition},[i("div",{key:t.value},[t._v(" "+t._s(t.value)+" ")])]):t.possiblyShow?i("div",{staticClass:"PossiblyValues",attrs:{mode:"in-out"}},[i("transition-group",{staticClass:"PossiblyValues",attrs:{appear:"",name:"slide-fade",css:t.animations}},[t._l(t.possibly,(function(e){return i("div",{key:e,staticClass:"PossiblyValue"},[t._v(" "+t._s(e)+" ")])})),t._l(t.posD,(function(e){return i("div",{key:e,staticClass:"red PossiblyValue "},[t._v(" "+t._s(e)+" ")])}))],2)],1):t._e()])},c=[],u=(i("a9e3"),{name:"SudokuButton",props:{ButtonId:Number,localData:{possibly:Set,value:Number,const:Boolean},dataView:Object,sizeBtn:String,possiblyShow:Boolean,wrongIds:Set,stack:Array,animations:Boolean,solved:Boolean},data:function(){return{value:0===this.localData.value?"":this.localData.value,MainValueStyle:{transition:null}}},methods:Object(a["a"])(Object(a["a"])({},Object(l["b"])({UpdateFieldTargetValue:"sudoku/setFieldValue"})),{},{enter:function(t,e){t.style.transform=this.MainValueStyle.transition,e()},mouseDown:function(){this.$emit("select-button",{id:this.ButtonId,left:this.$refs.sudokuButton.getBoundingClientRect().left+window.scrollX,top:this.$refs.sudokuButton.getBoundingClientRect().top+window.scrollY})},message:function(t){console.log(t)}}),computed:{posD:function(){var t=this,e=[];return this.stack.some((function(e){return e.id===t.ButtonId&&e.possibly}))&&this.stack.filter((function(e){return e.id===t.ButtonId&&e.possibly})).forEach((function(t){e.push(t.possibly)})),e},possibly:function(){return Object(o["a"])(this.localData.possibly)},styles:function(){var t={};if(this.localData.const||(t.color="#43A7C7"),this.ButtonId%9!==2&&this.ButtonId%9!==5||(t.marginRight="0.6vmin",t.paddingRight=0),(this.ButtonId>17&&this.ButtonId<27||this.ButtonId>44&&this.ButtonId<54)&&(t.marginBottom="0.6vmin",t.paddingBottom=0),(this.wrongIds.has(this.ButtonId)||0===this.localData.possibly.size&&!this.localData.const&&0===this.localData.value)&&(t.backgroundColor="#FDD2C9",t.color="#EE5B3C"),this.solved){t.backgroundColor="#DCF7FF";var e=Math.max(Math.abs(this.ButtonId%9-4),Math.abs(Math.floor(this.ButtonId/9)-4)),i=1401-e*(50*e)-25*(this.ButtonId%9+Math.floor(this.ButtonId/9)-4);t.transitionDelay=i+"ms"}return t}},updated:function(){this.value=0===this.localData.value?"":this.localData.value},mounted:function(){this.animations&&(this.MainValueStyle.transition="transform: translate(-"+(this.$refs.sudokuButton.getBoundingClientRect().left+window.scrollX)+"px, -"+(this.$refs.sudokuButton.getBoundingClientRect().top+window.scrollY)+"px) scale(0.1)")}}),d=u,h=(i("2bd1"),i("2877")),f=Object(h["a"])(d,r,c,!1,null,"4dbbf8f6",null),v=f.exports,p=i("276c"),y=i("e954"),m=(i("38cf"),i("a434"),i("fb6a"),i("b6802"),[[0,1,2,9,10,11,18,19,20],[3,4,5,12,13,14,21,22,23],[6,7,8,15,16,17,24,25,26],[27,28,29,36,37,38,45,46,47],[30,31,32,39,40,41,48,49,50],[33,34,35,42,43,44,51,52,53],[54,55,56,63,64,65,72,73,74],[57,58,59,66,67,68,75,76,77],[60,61,62,69,70,71,78,79,80]]),g=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[1,0,0],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(p["a"])(this,t),this.repeat=!0,this.option=new Set,this.param=0,this.advancedPossibly=e,this.segments=[],this.stack=[],this.autoSolve=i,this.wrongIds=new Set}return Object(y["a"])(t,[{key:"getStack",value:function(){return this.stack}},{key:"setField",value:function(t){var e=this.autoSolve;return this.autoSolve=!1,this.stack=[],this.stringField=t,this.Field=this.fieldInit(t),this.autoSolve=e,this.Field}},{key:"getField",value:function(){return this.Field}},{key:"getFieldString",value:function(){var t="";return this.Field.forEach((function(e){t+=e.value})),t}},{key:"getWrongIds",value:function(){return this.wrongIds}},{key:"setAdvancedPossibly",value:function(t){this.autoSolve=!1,this.advancedPossibly.splice(t,1,!this.advancedPossibly[t]),this.allPossibly(this.Field)}},{key:"setAdvancedPossibles",value:function(t){this.advancedPossibly!==[1,1,1]&&t!==[1,1,1]&&(this.autoSolve=!1,this.advancedPossibly=t,this.allPossibly(this.Field))}},{key:"getAdvancedPossibles",value:function(){return this.advancedPossibly}},{key:"setAutoSolve",value:function(){this.autoSolve=!this.autoSolve,this.autoSolveStart()}},{key:"getAutoSolve",value:function(){return this.autoSolve}},{key:"autoSolveStart",value:function(){if(this.autoSolve){var e;if(this.advancedPossibly[1]&&!this.advancedPossibly[2]){var i=new t([1,1,1]);i.setField(this.getFieldString()),e=i.getField()}else e=this.Field;e.every((function(t){return 1===t.possibly.size||0!==t.value}))&&this.autoSolveOne()}}},{key:"autoSolveOne",value:function(){var t=this;if(this.Field.some((function(t){return 1===t.possibly.size&&0===t.value}))&&this.Field.every((function(t){return 0!==t.possibly.size||0!==t.value}))){var e=0,i=25;this.Field.forEach((function(s){e+=i,i*=.97,setTimeout((function(){1===s.possibly.size&&0===t.wrongIds.size&&t.autoSolve&&0===s.value&&(t.Field[s.id].value=Object(o["a"])(s.possibly)[0])}),e)})),setTimeout((function(){t.allPossibly()}),e+10)}}},{key:"fieldInit",value:function(t){for(var e=[],i=0;i<t.length;i++)e.push({id:i,value:+t[i],possibly:new Set([1,2,3,4,5,6,7,8,9]),const:0!==+t[i]});return this.allPossibly(e),e}},{key:"cycleInint",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.Field;t.forEach((function(t){0===t.value&&(t.possibly=new Set([1,2,3,4,5,6,7,8,9]))})),this.stack.some((function(t){return t.possibly}))&&this.stack.filter((function(t){return t.possibly})).forEach((function(e){t[e.id].possibly.delete(e.possibly)}))}},{key:"setFieldValue",value:function(t,e){if(t<81&&t>=0&&e>=0&&e<=9&&!this.Field[t].const){this.stack.push({id:t,previousValue:this.Field[t].value});var i=Object(a["a"])({},this.Field[t]);i.value=e,this.Field[t]=i,this.allPossibly()}}},{key:"removeFieldPossibly",value:function(t,e){t<81&&t>=0&&!this.Field[t].const&&this.Field[t].possibly.has(e)?1!==this.Field[t].possibly.size?(this.stack.push({id:t,possibly:e}),this.allPossibly()):this.setFieldValue(t,e):this.stack.some((function(i){return i.id===t&&i.possibly===e}))&&(this.stack.splice(this.stack.indexOf((function(i){return i.id===t&&i.possibly===e})),1),this.allPossibly())}},{key:"undoLastValue",value:function(){if(0!==this.stack.length){var t=this.stack.pop();t.possibly||(this.Field[t.id].value=t.previousValue),this.allPossibly()}}},{key:"allPossibly",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.Field;if(this.cycleInint(e),this.advancedPossibly.some((function(t){return t}))){var i=0;while(this.repeat||i<2)i+=1,this.repeat=!1,this.segmentsSeparate(e)}return setTimeout((function(){t.autoSolveStart()}),1e3),e}},{key:"segmentsSeparate",value:function(t){var e=this;this.wrongIds=new Set,this.segments=[];for(var i=0;i<9;i++){for(var s=[],n=[],o=[],a=0;a<9;a++)s.push(t[9*i+a]),n.push(t[i+9*a]),o.push(t[m[i][a]]);this.segments.push(s),this.segments.push(n),this.segments.push(o)}return this.segments.forEach((function(t){e.advancedPossibly[0]&&e.existValue(t),e.advancedPossibly[1]&&e.onlyHere(t),e.advancedPossibly[2]&&e.onePossiblyDelete(t)})),!0}},{key:"existValue",value:function(t){var e=this,i=new Set,s=new Set;t.forEach((function(t){t.value>0&&(i.has(t.value)&&s.add(t.value),i.add(t.value))})),0!==s.length&&t.forEach((function(t){s.has(t.value)&&!t.const&&e.wrongIds.add(t.id)})),t.forEach((function(t){i.forEach((function(i){t.possibly.delete(i)&&(e.repeat=!0)}))}))}},{key:"onlyHere",value:function(t){var e=this,i=[];t.forEach((function(t){t.const||0!==t.value||t.possibly.forEach((function(t){i.push(t)}))})),i=i.filter((function(t){if(i.indexOf(t)===i.lastIndexOf(t))return t})),i.forEach((function(i){t.forEach((function(t){t.possibly.has(i)&&t.possibly.size>1&&(e.repeat=!0,t.possibly.clear(),t.possibly.add(i))}))}))}},{key:"onePossiblyDelete",value:function(t){var e=this;t.forEach((function(i){if(1===i.possibly.size&&0===i.value){var s=i.id;t.forEach((function(t){s!==t.id&&i.possibly.forEach((function(i){t.possibly.delete(i)&&(e.repeat=!0)}))}))}}))}},{key:"checkWin",value:function(){return this.Field.every((function(t){return t.value>0&&t.value<=9}))}},{key:"checkGuaranteedWin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getFieldString(),i=new t([1,1,1]);return i.setField(e),i.Field.every((function(t){return t.value>0&&t.value<=9||1===t.possibly.size&&0===t.value}))}},{key:"checkDeadlock",value:function(){return this.setAdvancedPossibles([1,1,1]),this.Field.some((function(t){return 0===t.value&&0===t.possibly.size}))}},{key:"checkWinPossibly",value:function(t){var e=!0;return t.forEach((function(t){0===t.value&&1!==t.possibly.size&&(e=!1)})),e}},{key:"checkLose",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.Field,e=!1;return t.forEach((function(t){0===t.value&&0===t.possibly.size&&(e=!0)})),e}},{key:"checkWinPossiblyString",value:function(t){return this.advancedPossibly=[1,1,1],this.checkWinPossibly(this.allPossibly(this.fieldInit(t)))}},{key:"sudokuSolution",value:function(t){return this.option.clear(),this.Bulkhead(t),this.option}},{key:"Bulkhead",value:function(e){var i=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new t([1,1,1]);n.setField(e),s&&(n.getField().find((function(t){return 0===t.value&&t.possibly.size>1})).value=s);var o=n.getFieldString();this.option.size<2&&!n.checkDeadlock()&&(n.checkGuaranteedWin()?this.option.add(o):n.getField().find((function(t){return 0===t.value&&t.possibly.size>1})).possibly.forEach((function(t){i.Bulkhead(o,t)})))}},{key:"newFields",value:function(){var e=[new t([1,1,1])];e[0].setField("000000000000000000000000000000000000000000000000000000000000000000000000000000000");var i=new Set;while(4!==i.size)i.add(Math.floor(81*Math.random()));Object(o["a"])(i).forEach((function(i){e.forEach((function(s){var n=-1;s.getField()[i].possibly.forEach((function(o){var a=s.getFieldString();if(n++,0===n)s.getField()[i].value=o;else{var l=new t([1,1,1]);l.setField(a),l.getField()[i].value=o,e.push(l)}}))}))})),setTimeout((function(){console.log(e)}),100)}},{key:"random81symbols",value:function(){var t=Math.random().toFixed(40).slice(2),e=Math.random().toFixed(41).slice(2);return t+e}}]),t}(),b={sudokuData:g},w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"comfortChoice",style:t.componentStyle},[t._l(t.possibly,(function(e){return i("div",{key:e,staticClass:" mainColor mainItems",class:{secondColor:t.redact,red:!t.params.possibly.has(e)},style:t.buttonSize,on:{click:function(i){return t.selectValue(e)}}},[t._v(" "+t._s(e)+" ")])})),t.possibly.size<9&&0===t.params.value&&t.possibly.size>1?i("div",{staticClass:" centerItem",style:[t.blankItem,t.buttonSize]}):t._e(),0!==t.params.value?i("div",{staticClass:"mainItems secondColor",style:[t.blankItem,t.buttonSize],on:{click:function(e){return t.selectValue(0)}}},[t._v(" x ")]):t._e()],2)},k=[],S={name:"comfortChoice",props:{sizeBtn:Number,redact:Boolean,params:{possibly:Set,buttonId:Number,top:Number,left:Number,value:Number,possiblyDeleted:Array}},data:function(){return{}},methods:{selectValue:function(t){this.$emit("send-value",t)}},computed:{buttonSize:function(){return{width:this.sizeBtn+"vmin",height:this.sizeBtn+"vmin"}},possibly:function(){var t=new Set(Object(o["a"])(this.params.possibly));return t.delete(this.params.value),this.params.possiblyDeleted.forEach((function(e){t.add(e)})),t},componentStyle:function(){var t=3,e=3,i=this.params.left/Math.min(window.innerHeight,window.innerWidth)*100-this.sizeBtn-1,s=this.params.top/Math.min(window.innerHeight,window.innerWidth)*100-this.sizeBtn-1;return this.params.buttonId<9&&(s+=this.sizeBtn),this.params.buttonId>71&&(s-=this.sizeBtn),this.params.buttonId%9===0&&(i+=this.sizeBtn),this.params.buttonId%9===8&&(i-=this.sizeBtn),this.possibly.size<6&&(this.params.buttonId>71&&(s+=this.sizeBtn),e=2),this.possibly.size<4&&(this.params.buttonId%9===8&&(i+=this.sizeBtn),t=2),this.possibly.size<=1&&(i=this.params.left/Math.min(window.innerHeight,window.innerWidth)*100-1,s=this.params.top/Math.min(window.innerHeight,window.innerWidth)*100-1,t=1,e=1),{left:i+="vmin",top:s+="vmin",gridTemplateColumns:"repeat("+t+", 1fr)",gridTemplateRows:"repeat("+e+", 1fr)"}},blankItem:function(){var t=2,e=2;return this.params.buttonId<9&&(e=1),this.params.buttonId>71&&(e=-2),this.params.buttonId%9===0&&(t=1),this.params.buttonId%9===8&&(t=-2),{gridColumnStart:t,gridRowStart:e}}}},C=S,D=(i("5eb1"),Object(h["a"])(C,w,k,!1,null,"4e7ce8a6",null)),I=D.exports,F={name:"Sudoku",components:{SudokuButton:v,comfortChoice:I},data:function(){return{easyChoice:!1,sizeBtn:10.5,rotate:!1,flexD:"column",flexW:"wrap",selectedButton:-1,sudokuDataClass:null,Field:null,comfortChoiceData:{},lang:"ru",interval:null,phrasesEn:{settings:"settings",prompt:"prompt",close:"close",difficulty:"difficulty",deleteDataSettings:"reset progress",onlyHere:"only here algorithm",onePossiblyDelete:"one possibly delete algorithm",comfortChoice:"comfort choice",easyChoiceDbClick:"double click",sidePanel:"side panel",sureConfirm:"are you sure?"},phrasesRu:{settings:"настройки",prompt:"подсказки",close:"закрыть",difficulty:"сложность",deleteDataSettings:"сбросить прогресс",onlyHere:"первый алгоритм",onePossiblyDelete:"второй алгоритм",comfortChoice:"удобный выбор",easyChoiceDbClick:"двойной клик",sidePanel:"боковая панель",sureConfirm:"вы уверены?"},viewSettings:{easyChoiceShow:!0,easyChoiceDbClick:!0,choiceShow:!0,menuPanelShow:!1,prompt:!0,advancedPossibly:[1,1,0],removePossibly:!1,animations:!0,autoSolve:!1},savedData:{sudokuId:1,difficulty:1,difficultyId:null}}},computed:Object(a["a"])(Object(a["a"])({},Object(l["c"])({stringField:"dataManage/field",getDataOptions:"dataManage/getDataOptions"})),{},{solved:function(){return this.sudokuDataClass.checkWin()},phrases:function(){return"ru-RU"===this.lang?this.phrasesRu:this.phrasesEn},possiblyChoice:function(){var t=this;return this.selectedButton>-1&&this.viewSettings.prompt?this.Field.find((function(e){return e.id===t.selectedButton})).possibly:new Set([1,2,3,4,5,6,7,8,9])},fieldView:function(){for(var t=this,e=[],i=0;i<81;i++)e.push({id:i,bgcolor:""});return this.selectedButton>-1&&this.selectedButton<81&&(e.forEach((function(e){e.id%9!==t.selectedButton%9&&Math.floor(e.id/9)!==Math.floor(t.selectedButton/9)&&3*Math.floor(Math.floor(e.id/3)/9)+Math.floor(e.id/3)%3!==3*Math.floor(Math.floor(t.selectedButton/3)/9)+Math.floor(t.selectedButton/3)%3||(e.bgcolor="#FDE0B0")})),e.find((function(e){return e.id===t.selectedButton})).bgcolor="#E2E3FB"),e}}),methods:Object(a["a"])(Object(a["a"])({},Object(l["b"])({getField:"dataManage/getField"})),{},{help:function(){var t="https://www.sudokuwiki.org/sudoku.htm?bd=";this.Field.forEach((function(e){t+=e.value})),window.open(t)},promptClick:function(){this.easyChoice=0,this.viewSettings.prompt=!this.viewSettings.prompt,this.sudokuDataClass.setAdvancedPossibles([1,0,0]),this.viewSettings.autoSolve&&this.sudokuDataClass.setAutoSolve()},menuPanelShow:function(){this.viewSettings.menuPanelShow=!this.viewSettings.menuPanelShow,this.easyChoice=!1},nextSudoku:function(){var t=this;this.sudokuDataClass.checkWin()&&this.savedData.difficultyId.find((function(e){return e.difficulty===+t.savedData.difficulty})).solved.push(this.savedData.difficultyId.find((function(e){return e.difficulty===+t.savedData.difficulty})).id),this.savedData.difficultyId.find((function(e){return e.difficulty===+t.savedData.difficulty})).id++,this.Field=null,this.setLocalField()},SetValue:function(t){this.viewSettings.removePossibly?this.sudokuDataClass.removeFieldPossibly(this.selectedButton,t):this.sudokuDataClass.setFieldValue(this.selectedButton,t),this.selectedButton=-1,this.easyChoice=!1},pageClick:function(){this.selectedButton=-1,this.easyChoice=!1,this.viewSettings.menuPanelShow=!1},buttonClick:function(t){var e=this;this.viewSettings.menuPanelShow=!1,this.easyChoice=!1,setTimeout((function(){e.viewSettings.easyChoiceDbClick||(e.selectedButton=t.id),e.comfortChoiceData.left=t.left,e.comfortChoiceData.top=t.top,e.comfortChoiceData.possibly=e.possiblyChoice,e.comfortChoiceData.buttonId=t.id,e.comfortChoiceData.value=e.Field[t.id].value;var i=[];e.sudokuDataClass.getStack().some((function(e){return e.id===t.id&&e.possibly}))&&e.sudokuDataClass.getStack().filter((function(e){return e.id===t.id&&e.possibly})).forEach((function(t){i.push(t.possibly)})),e.comfortChoiceData.possiblyDeleted=i,t.id!==e.selectedButton||!e.viewSettings.easyChoiceShow||e.Field[t.id].const||0===e.Field[t.id].possibly.size&&0===e.Field[t.id].value?e.selectedButton=t.id:e.easyChoice=!0}),0)},keywordClick:function(t){+t.key>=0&&+t.key<=9&&this.SetValue(+t.key),"Backspace"===t.key&&this.SetValue(0),"Escape"===t.key&&this.pageClick(),"ArrowLeft"===t.key&&(this.selectedButton-=1),"ArrowRight"===t.key&&(this.selectedButton+=1),"ArrowDown"===t.key&&(this.selectedButton+=9),"ArrowUp"===t.key&&(this.selectedButton-=9)},goBack:function(){this.$router.push({name:"SudokuHome"})},updateSize:function(){window.innerWidth<1.1*window.innerHeight?(this.sizeBtn=10.5,this.rotate=!0,this.flexD="row",this.flexW="column"):(this.sizeBtn=9,this.rotate=!1,this.flexD="column",this.flexW="row")},setLocalField:function(){var t=this;this.pageClick(),this.sudokuDataClass||(this.sudokuDataClass=new b.sudokuData(Object(o["a"])(this.viewSettings.advancedPossibly),this.viewSettings.autoSolve));var e=this.savedData.difficultyId.find((function(e){return e.difficulty===t.savedData.difficulty}));if(e.maxId<e.id&&(e.id=0),e.solved.length===e.maxId)e.finished=!0,this.savedData.difficulty=this.savedData.difficultyId.find((function(t){return!t.finished})).difficulty;else for(var i=0;i<=e.maxId;i++)e.solved.some((function(t){return t===e.id}))&&(e.id=(e.id+1)%(e.maxId+1));this.getField([this.savedData.difficultyId.find((function(e){return e.difficulty===+t.savedData.difficulty})).id,this.savedData.difficulty]).then((function(e){t.Field=t.sudokuDataClass.setField(e)})).catch((function(t){console.log(t)}))},setDifficulty:function(t){this.savedData.difficulty!==t&&(this.savedData.difficulty=t,this.setLocalField())},message:function(t){console.log(t)},deleteDataSettings:function(){confirm(this.phrases.sureConfirm)&&(localStorage.removeItem("savedData"),window.location.reload())},startSettings:function(){var t=this;this.savedData.difficultyId||(this.savedData.difficultyId=[],this.getDataOptions.forEach((function(e,i){t.savedData.difficultyId.push({id:0,difficulty:i,maxId:e,solved:[],finished:!1})})))},intervalSave:function(){var t=this;setTimeout((function(){t.viewSettings.advancedPossibly=t.sudokuDataClass.getAdvancedPossibles(),t.viewSettings.autoSolve=t.sudokuDataClass.getAutoSolve(),localStorage.setItem("viewSettings",JSON.stringify(t.viewSettings)),localStorage.setItem("savedData",JSON.stringify(t.savedData))}),0)}}),created:function(){window.addEventListener("resize",this.updateSize)},mounted:function(){this.updateSize(),document.addEventListener("keydown",this.keywordClick),document.addEventListener("click",this.intervalSave),this.lang=navigator.language||navigator.userLanguage,localStorage.getItem("viewSettings")&&(this.viewSettings=Object(a["a"])({},JSON.parse(localStorage.getItem("viewSettings")))),localStorage.getItem("savedData")&&(this.savedData=Object(a["a"])({},JSON.parse(localStorage.getItem("savedData")))),this.startSettings(),this.setLocalField()},beforeDestroy:function(){document.removeEventListener("keydown",this.keywordClick),document.removeEventListener("click",this.intervalSave),window.removeEventListener("resize",this.updateSize),this.interval=null},updated:function(){var t=this;this.sudokuDataClass.getAutoSolve()&&this.sudokuDataClass.checkWin()&&this.Field&&setTimeout((function(){t.sudokuDataClass.getAutoSolve()&&t.sudokuDataClass.checkWin()&&t.Field&&t.nextSudoku()}),2500)}},P=F,B=(i("4bce"),Object(h["a"])(P,s,n,!1,null,null,null));e["default"]=B.exports},"9d20":function(t,e,i){"use strict";var s=i("199f"),n=i("749b").filter,o=i("85b7"),a=o("filter");s({target:"Array",proto:!0,forced:!a},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"9e1f":function(t,e,i){var s=i("09e4"),n=i("277d"),o=i("01d4"),a=i("3261");for(var l in n){var r=s[l],c=r&&r.prototype;if(c&&c.forEach!==o)try{a(c,"forEach",o)}catch(u){c.forEach=o}}},a9e3:function(t,e,i){"use strict";var s=i("83ab"),n=i("da84"),o=i("94ca"),a=i("6eeb"),l=i("5135"),r=i("c6b6"),c=i("7156"),u=i("c04e"),d=i("d039"),h=i("7c73"),f=i("241c").f,v=i("06cf").f,p=i("9bf2").f,y=i("58a8").trim,m="Number",g=n[m],b=g.prototype,w=r(h(b))==m,k=function(t){var e,i,s,n,o,a,l,r,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=y(c),e=c.charCodeAt(0),43===e||45===e){if(i=c.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+c}for(o=c.slice(2),a=o.length,l=0;l<a;l++)if(r=o.charCodeAt(l),r<48||r>n)return NaN;return parseInt(o,s)}return+c};if(o(m,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var S,C=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof C&&(w?d((function(){b.valueOf.call(i)})):r(i)!=m)?c(new g(k(e)),i,C):k(e)},D=s?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;D.length>I;I++)l(g,S=D[I])&&!l(C,S)&&p(C,S,v(g,S));C.prototype=b,b.constructor=C,a(n,m,C)}},b6802:function(t,e,i){"use strict";var s=i("23e7"),n=i("a691"),o=i("408a"),a=i("1148"),l=i("d039"),r=1..toFixed,c=Math.floor,u=function(t,e,i){return 0===e?i:e%2===1?u(t,e-1,i*t):u(t*t,e/2,i)},d=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},h=r&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){r.call({})}));s({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,i,s,l,r=o(this),h=n(t),f=[0,0,0,0,0,0],v="",p="0",y=function(t,e){var i=-1,s=e;while(++i<6)s+=t*f[i],f[i]=s%1e7,s=c(s/1e7)},m=function(t){var e=6,i=0;while(--e>=0)i+=f[e],f[e]=c(i/t),i=i%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var i=String(f[t]);e=""===e?i:e+a.call("0",7-i.length)+i}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return String(r);if(r<0&&(v="-",r=-r),r>1e-21)if(e=d(r*u(2,69,1))-69,i=e<0?r*u(2,-e,1):r/u(2,e,1),i*=4503599627370496,e=52-e,e>0){y(0,i),s=h;while(s>=7)y(1e7,0),s-=7;y(u(10,s,1),0),s=e-1;while(s>=23)m(1<<23),s-=23;m(1<<s),y(1,1),m(2),p=g()}else y(0,i),y(1<<-e,0),p=g()+a.call("0",h);return h>0?(l=p.length,p=v+(l<=h?"0."+a.call("0",h-l)+p:p.slice(0,l-h)+"."+p.slice(l-h))):p=v+p,p}})},d7e0:function(t,e,i){var s=i("199f"),n=i("a714"),o=i("a84f"),a=i("2439").f,l=i("0368"),r=n((function(){a(1)})),c=!l||r;s({target:"Object",stat:!0,forced:c,sham:!l},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e095:function(t,e,i){},f3f3:function(t,e,i){"use strict";i("4619"),i("4cc1"),i("9d20"),i("d7e0"),i("9e1f"),i("608c");function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}i.d(e,"a",(function(){return o}))},fb6a:function(t,e,i){"use strict";var s=i("23e7"),n=i("861d"),o=i("e8b5"),a=i("23cb"),l=i("50c4"),r=i("fc6a"),c=i("8418"),u=i("b622"),d=i("1dde"),h=i("ae40"),f=d("slice"),v=h("slice",{ACCESSORS:!0,0:0,1:2}),p=u("species"),y=[].slice,m=Math.max;s({target:"Array",proto:!0,forced:!f||!v},{slice:function(t,e){var i,s,u,d=r(this),h=l(d.length),f=a(t,h),v=a(void 0===e?h:e,h);if(o(d)&&(i=d.constructor,"function"!=typeof i||i!==Array&&!o(i.prototype)?n(i)&&(i=i[p],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return y.call(d,f,v);for(s=new(void 0===i?Array:i)(m(v-f,0)),u=0;f<v;f++,u++)f in d&&c(s,u,d[f]);return s.length=u,s}})}}]);
//# sourceMappingURL=chunk-0719a056.4ba59127.js.map