(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{28:function(t,e,n){},29:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(0),s=n.n(i),c=n(3),o=n.n(c),r=(n(28),n(29),n(7)),l=n.n(r),u=n(4),m=n(18),d=n(19),h=n(20),b=n(23),j=n(22),v=n(21),f=n.n(v),p=(n(49),n(6)),O=function(t){var e=t.movies,n=t.onNominate,i=t.status;return Object(a.jsx)("div",{children:Object(a.jsx)("ul",{className:"bg-white mt-4 list-group row text-left",children:e.map((function(t){return Object(a.jsxs)("li",{className:"p-3 list-group-item border-0 col-8",children:[t.Title," (",t.Year,")"," ",Object(a.jsx)("div",{className:"col-4 text-right",children:Object(a.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){return n(t.imdbID)},disabled:i===t.imdbID,children:"Nominate"})})]},t.imdbID)}))})})},g=function(t){var e=t.list,n=t.onRemove;return Object(a.jsxs)("div",{className:"bg-white mt-4 text-left",children:[Object(a.jsx)("h3",{children:e.length>0&&"Nominated"}),e.length?Object(a.jsx)("ul",{className:"list-group",children:e.map((function(t){return Object(a.jsxs)("li",{className:"list-group-item border-0 ",children:[t.Title," ",t.Year,Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){return n(t.imdbID)},children:"Remove"})]},t.imdbID)}))}):""]})},x=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={movies:[],search:[],nominated:[],value:"",isButtonDisabled:-1},t.handleChange=function(){var e=Object(m.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.state.movies,a=n.target.value,t.setState({value:a}),"c2e53c15",f.a.get("https://www.omdbapi.com/?apikey=".concat("c2e53c15","&s=").concat(a)).then((function(t){return t.data})).then((function(e){if(e.Search){t.setState({movies:[].concat(Object(u.a)(t.state.movies),[e.Search])});var n=e.Search.filter((function(t){return t.Title.toLowerCase().includes(a.toLowerCase())}));t.setState({search:n})}}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.handleNominate=function(e){var n=t.state,a=n.search,i=n.nominated;t.setState({isButtonDisabled:e});var s=Object(u.a)(a).filter((function(t){return t.imdbID===e}));t.setState({nominated:[].concat(Object(u.a)(t.state.nominated),Object(u.a)(s))}),console.log(t.state.nominated),localStorage.setItem("nominated",JSON.stringify(i)),4!==i.length||p.b.success("You have nominated 5 movies.",{position:"top-center",hideProgressBar:!0,autoClose:1500})},t.handleRemove=function(e){var n=t.state.nominated,a=Object(u.a)(n).filter((function(t){return t.imdbID!==e}));t.setState({nominated:a});var i=JSON.parse(localStorage.getItem("nominated")).filter((function(t){return t.imdbID!==e}));localStorage.setItem("nominated",JSON.stringify(i))},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("nominated")||"[]");this.setState({nominated:t})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container mt-5 bg-light p-5 flex",children:[Object(a.jsx)("input",{value:this.state.value,type:"text",placeholder:"Search movie to nominate...",className:"form-control",onChange:this.handleChange}),Object(a.jsxs)("div",{className:"row texti-left",children:[Object(a.jsxs)("div",{className:"col-6",children:[Object(a.jsx)("h3",{children:this.state.search.length>0&&'Results for "'.concat(this.state.value,'"')}),Object(a.jsx)(O,{movies:this.state.search,onNominate:this.handleNominate,status:this.state.isButtonDisabled})]}),Object(a.jsx)("div",{className:"col-6 text-left",children:Object(a.jsx)(g,{list:this.state.nominated,onRemove:this.handleRemove})})]})]})}}]),n}(i.Component);n(54);var N=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(x,{}),Object(a.jsx)(p.a,{})]})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),s(t),c(t)}))};n(55);o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),S()}},[[56,1,2]]]);
//# sourceMappingURL=main.652e36cc.chunk.js.map