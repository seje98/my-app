(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(25),r=n.n(s),c=(n(32),n(4)),i=n(5),u=n(7),l=n(6),p=n(8),f=n(26),h=n.n(f),m=(n(117),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Notes-Note"},o.a.createElement("span",{className:"Notes-Note-Delete",onClick:this.props.onDelete},"\xd7"),o.a.createElement(h.a,{source:this.props.text}))}}]),t}(a.Component)),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).onTextChange=function(e){n.setState({text:e.target.value})},n.onReset=function(e){n.setState({text:""},(function(){n.inputRef.current.focus()}))},n.onSave=function(){n.props.onCreate(n.state.text),n.onReset()},n.onTextKeyDown=function(e){console.log(e.keyCode),13===e.keyCode||"Enter"===e.key?(e.preventDefault(),n.onSave()):27===e.keyCode&&n.onReset()},n.state={text:""},n.inputRef=o.a.createRef(),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Notes-Create Notes-Note"},o.a.createElement("textarea",{ref:this.inputRef,className:"Notes-Create-Input",value:this.state.text,onChange:this.onTextChange,onKeyDown:this.onTextKeyDown}),o.a.createElement("div",{className:"Notes-Create-Buttons"},o.a.createElement("button",{className:"Notes-Create-Button",onClick:this.onSave},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),o.a.createElement("button",{className:"Notes-Create-Button Notes-Create-Button_Reset",onClick:this.onReset},"\u0421\u0431\u0440\u043e\u0441")))}}]),t}(a.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Notes"},o.a.createElement(b,{onCreate:this.props.onCreate}),this.props.notes.map((function(t,n){return o.a.createElement(m,{text:t,key:n,onDelete:function(){return e.props.onDelete(n)}})})))}}]),t}(a.Component),N=function(e,t){return e.slice(0,t).concat(e.slice(t+1))},j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).onNoteDelete=function(e){n.setState((function(t){return{notes:N(t.notes,e)}}))},n.onNoteCreate=function(e){n.setState((function(t){return{notes:[e].concat(t.notes)}}))},n.state={notes:["**\u041f\u043e\u043a\u0443\u043f\u043a\u0438**: \u0447\u0430\u0439, \u043a\u043e\u0444\u0435, _\u043c\u043e\u043b\u043e\u043a\u043e_","**\u0414\u0435\u043b\u0430**: \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u043e\u0434, \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044e","_\u041d\u0435\u043d\u0443\u0436\u043d\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430, \u0443\u0434\u0430\u043b\u0438\u0442\u044c_","**\u041d\u0443\u0436\u043d\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430, \u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u0442\u044c!**"]},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(C,{notes:this.state.notes,onDelete:this.onNoteDelete,onCreate:this.onNoteCreate})}}]),t}(a.Component),O=document.body;r.a.render(o.a.createElement(j,null),O)},27:function(e,t,n){e.exports=n(118)},32:function(e,t,n){}},[[27,1,2]]]);
//# sourceMappingURL=main.e89bd26f.chunk.js.map