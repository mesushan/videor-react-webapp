(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(88)},48:function(e,t,a){},85:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),s=a.n(o),c=a(92),l=(a(48),a(3)),i=a(4),u=a(6),m=a(5),p=a(7),d=a(93),h=a(42),v=a(91),f=a(18),b=a(11),g=a(28),E=a(2),y=a.n(E),k=a(10),O=a(27),j=a(41),w=a.n(j),S=a(16),C=a.n(S);var N={init:function(){},log:function(e){console.error(e)}};C.a.defaults.baseURL="https://video-rental-api-react.herokuapp.com/api",C.a.interceptors.response.use(null,function(e){return e.response&&e.response.status>=400&&e.response.status<500||(N.log(e),f.toast.error("An unexpected error occurred.")),Promise.reject(e)});var x={get:C.a.get,post:C.a.post,put:C.a.put,delete:C.a.delete,setJwt:function(e){C.a.defaults.headers.common["x-auth-token"]=e}},I="/auth",P="token";function R(){return(R=Object(k.a)(y.a.mark(function e(t,a){var n,r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post(I,{email:t,password:a});case 2:n=e.sent,r=n.data,localStorage.setItem(P,r);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(){return localStorage.getItem(P)}x.setJwt(_());var A={login:function(e,t){return R.apply(this,arguments)},loginWithJwt:function(e){localStorage.setItem(P,e)},logout:function(){localStorage.removeItem(P)},getCurrentUser:function(){try{var e=localStorage.getItem(P);return w()(e)}catch(t){return null}},getJwt:_},D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).raiseSort=function(e){var t=Object(b.a)({},a.props.sortColumn);t.path===e?t.order="asc"===t.order?"desc":"asc":(t.path=e,t.order="asc"),a.props.onSort(t)},a.renderSortIcon=function(e){var t=a.props.sortColumn;return e.path!==a.props.sortColumn.path?null:"asc"===t.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map(function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label," ",e.renderSortIcon(t))})))}}]),t}(n.Component),L=a(14),M=a.n(L),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).renderCell=function(e,t){return t.content?t.content(e):M.a.get(e,t.path)},a.createKey=function(e,t){return e._id+(t.path||t.key)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns;return r.a.createElement("tbody",null,a.map(function(t){return r.a.createElement("tr",{key:t._id},n.map(function(a){return r.a.createElement("td",{key:e.createKey(t,a)},e.renderCell(t,a))}))}))}}]),t}(n.Component),G=function(e){var t=e.columns,a=e.sortColumn,n=e.onSort,o=e.data;return r.a.createElement("table",{className:"table"},r.a.createElement(D,{columns:t,sortColumn:a,onSort:n}),r.a.createElement(U,{columns:t,data:o}))},T=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),r.a.createElement("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},q=function(e){function t(){var e;Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).columns=[{path:"title",label:"Title",content:function(e){return r.a.createElement(O.a,{to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return r.a.createElement(T,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}],e.deleteColumn={key:"delete",content:function(t){return r.a.createElement("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger btn-sm"},"Delete")}};var a=A.getCurrentUser();return a&&a.isAdmin&&e.columns.push(e.deleteColumn),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.onSort,n=e.sortColumn;return r.a.createElement(G,{columns:this.columns,data:t,sortColumn:n,onSort:a})}}]),t}(n.Component),B=function(e){var t=e.items,a=e.textProperty,n=e.valueProperty,o=e.selectedItem,s=e.onItemSelect;return r.a.createElement("ul",{className:"list-group"},t.map(function(e){return r.a.createElement("li",{onClick:function(){return s(e)},key:e[n],className:e===o?"list-group-item active":"list-group-item"},e[a])}))};B.defaultProps={textProperty:"name",valueProperty:"_id"};var F=B,J=function(e){var t=e.itemsCount,a=e.pageSize,n=e.currentPage,o=e.onPageChange,s=Math.ceil(t/a);if(1===s)return null;var c=M.a.range(1,s+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map(function(e){return r.a.createElement("li",{key:e,className:e===n?"page-item active":"page-item"},r.a.createElement("button",{className:"page-link",onClick:function(){return o(e)}},e))})))},z="/movies";function Q(e){return"".concat(z,"/").concat(e)}function W(e){return x.get(Q(e))}function V(e){if(e._id){var t=Object(b.a)({},e);return delete t._id,x.put(Q(e._id),t)}return x.post(z,e)}function K(){return x.get("/genres")}var $=function(e){var t=e.value,a=e.onChange;return r.a.createElement("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return a(e.currentTarget.value)}})},H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],genres:[],currentPage:1,pageSize:4,searchQuery:"",selectedGenre:null,sortColumn:{path:"title",order:"asc"}},a.handleDelete=function(){var e=Object(k.a)(y.a.mark(function e(t){var n,r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.movies,r=n.filter(function(e){return e._id!==t._id}),a.setState({movies:r}),e.prev=3,e.next=6,o=t._id,x.delete(Q(o));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),e.t0.response&&404===e.t0.response.status&&f.toast.error("This movie has already been deleted.");case 11:case"end":return e.stop()}var o},e,null,[[3,8]])}));return function(t){return e.apply(this,arguments)}}(),a.handleLike=function(e){var t=Object(g.a)(a.state.movies),n=t.indexOf(e);t[n]=Object(b.a)({},t[n]),t[n].liked=!t[n].liked,a.setState({movies:t})},a.handlePageChange=function(e){a.setState({currentPage:e})},a.handleGenreSelect=function(e){a.setState({selectedGenre:e,searchQuery:"",currentPage:1})},a.handleSearch=function(e){a.setState({searchQuery:e,selectedGenre:null,currentPage:1})},a.handleSort=function(e){a.setState({sortColumn:e})},a.getPagedData=function(){var e=a.state,t=e.pageSize,n=e.currentPage,r=e.sortColumn,o=e.selectedGenre,s=e.searchQuery,c=e.movies,l=c;s?l=c.filter(function(e){return e.title.toLowerCase().startsWith(s.toLowerCase())}):o&&o._id&&(l=c.filter(function(e){return e.genre._id===o._id}));var i=function(e,t,a){var n=(t-1)*a;return M()(e).slice(n).take(a).value()}(M.a.orderBy(l,[r.path],[r.order]),n,t);return{totalCount:l.length,data:i}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(k.a)(y.a.mark(function e(){var t,a,n,r,o;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:return t=e.sent,a=t.data,n=[{_id:"",name:"All Genres"}].concat(Object(g.a)(a)),e.next=7,x.get(z);case 7:r=e.sent,o=r.data,this.setState({movies:o,genres:n});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.state.movies.length;var e=this.state,t=e.pageSize,a=e.currentPage,n=e.sortColumn,o=e.searchQuery,s=this.props.user,c=this.getPagedData(),l=c.totalCount,i=c.data;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(F,{items:this.state.genres,selectedItem:this.state.selectedGenre,onItemSelect:this.handleGenreSelect})),r.a.createElement("div",{className:"col"},s&&r.a.createElement(O.a,{to:"/movies/new",className:"btn btn-primary",style:{marginBottom:20}},"New Movie"),r.a.createElement("p",null,"Showing ",l," movies in the database."),r.a.createElement($,{value:o,onChange:this.handleSearch}),r.a.createElement(q,{movies:i,sortColumn:n,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSort}),r.a.createElement(J,{itemsCount:l,pageSize:t,currentPage:a,onPageChange:this.handlePageChange})))}}]),t}(n.Component),X=a(8),Y=a.n(X),Z=a(20),ee=a(19),te=function(e){var t=e.name,a=e.label,n=e.error,o=Object(ee.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({},o,{id:t,name:t,className:"form-control"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))},ae=function(e){var t=e.name,a=e.label,n=e.options,o=e.error,s=Object(ee.a)(e,["name","label","options","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({name:t,id:t},s,{className:"form-control"}),r.a.createElement("option",{value:""}),n.map(function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)})),o&&r.a.createElement("div",{className:"alert alert-danger"},o))},ne=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:{},errors:{}},a.validate=function(){var e=Y.a.validate(a.state.data,a.schema,{abortEarly:!1}).error;if(!e)return null;var t={},n=!0,r=!1,o=void 0;try{for(var s,c=e.details[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var l=s.value;t[l.path[0]]=l.message}}catch(i){r=!0,o=i}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return t},a.validateProperty=function(e){var t=e.name,n=e.value,r=Object(Z.a)({},t,n),o=Object(Z.a)({},t,a.schema[t]),s=Y.a.validate(r,o).error;return s?s.details[0].message:null},a.handleSubmit=function(e){e.preventDefault();var t=a.validate();a.setState({errors:t||{}}),t||a.doSubmit()},a.handleChange=function(e){var t=e.currentTarget,n=Object(b.a)({},a.state.errors),r=a.validateProperty(t);r?n[t.name]=r:delete n[t.name];var o=Object(b.a)({},a.state.data);o[t.name]=t.value,a.setState({data:o,errors:n})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"renderButton",value:function(e){return r.a.createElement("button",{disabled:this.validate(),className:"btn btn-primary"},e)}},{key:"renderSelect",value:function(e,t,a){var n=this.state,o=n.data,s=n.errors;return r.a.createElement(ae,{name:e,value:o[e],label:t,options:a,onChange:this.handleChange,error:s[e]})}},{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=this.state,o=n.data,s=n.errors;return r.a.createElement(te,{type:a,name:e,value:o[e],label:t,onChange:this.handleChange,error:s[e]})}}]),t}(n.Component),re=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},a.schema={_id:Y.a.string(),title:Y.a.string().required().label("Title"),genreId:Y.a.string().required().label("Genre"),numberInStock:Y.a.number().required().min(0).max(100).label("Number in Stock"),dailyRentalRate:Y.a.number().required().min(0).max(10).label("Daily Rental Rate")},a.doSubmit=Object(k.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(a.state.data);case 2:a.props.history.push("/movies");case 3:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"populateGenres",value:function(){var e=Object(k.a)(y.a.mark(function e(){var t,a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:t=e.sent,a=t.data,this.setState({genres:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"populateMovie",value:function(){var e=Object(k.a)(y.a.mark(function e(){var t,a,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,W(t);case 6:a=e.sent,n=a.data,this.setState({data:this.mapToViewModel(n)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&this.props.history.replace("/not-found");case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(k.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateGenres();case 2:return e.next=4,this.populateMovie();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")))}}]),t}(ne),oe=function(){return r.a.createElement("h1",null,"Customers")},se=function(){return r.a.createElement("h1",null,"Rentals")},ce=function(){return r.a.createElement("h1",null,"NotFound")},le=a(90),ie=function(e){var t=e.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(O.a,{className:"navbar-brand",to:"/"},"Video Rental"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(le.a,{className:"nav-item nav-link",to:"/movies"},"Movies ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement(le.a,{className:"nav-item nav-link",to:"/customers"},"Customers"),r.a.createElement(le.a,{className:"nav-item nav-link",to:"/rentals"},"Rentals"),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{className:"nav-item nav-link",to:"/login"},"Login"),r.a.createElement(le.a,{className:"nav-item nav-link",to:"/register"},"Register")),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{className:"nav-item nav-link",to:"/profile"},t.name),r.a.createElement(le.a,{className:"nav-item nav-link",to:"/logout"},"Logout")))))},ue=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:{username:"",password:""},errors:{}},a.schema={username:Y.a.string().required().label("Username"),password:Y.a.string().required().label("Password")},a.doSubmit=Object(k.a)(y.a.mark(function e(){var t,n,r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.state.data,e.next=4,A.login(t.username,t.password);case 4:n=a.props.location.state,window.location=n?n.from.pathname:"/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&((r=Object(b.a)({},a.state.errors)).username=e.t0.response.data,a.setState({errors:r}));case 11:case"end":return e.stop()}},e,null,[[0,8]])})),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return A.getCurrentUser()?r.a.createElement(v.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")))}}]),t}(ne),me="/users";var pe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:{username:"",password:"",name:""},errors:{}},a.schema={username:Y.a.string().required().email().label("Username"),password:Y.a.string().required().min(5).label("Password"),name:Y.a.string().required().label("Name")},a.doSubmit=Object(k.a)(y.a.mark(function e(){var t,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r=a.state.data,x.post(me,{email:r.username,password:r.password,name:r.name});case 3:t=e.sent,A.loginWithJwt(t.headers["x-auth-token"]),window.location="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&((n=Object(b.a)({},a.state.errors)).username=e.t0.response.data,a.setState({errors:n}));case 11:case"end":return e.stop()}var r},e,null,[[0,8]])})),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")))}}]),t}(ne),de=function(e){e.path;var t=e.component,a=e.render,n=Object(ee.a)(e,["path","component","render"]);return r.a.createElement(h.a,Object.assign({},n,{render:function(e){return A.getCurrentUser()?t?r.a.createElement(t,e):a(e):r.a.createElement(v.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},he=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){A.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),t}(n.Component),ve=(a(84),a(85),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=A.getCurrentUser();this.setState({user:e})}},{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.ToastContainer,null),r.a.createElement(ie,{user:t}),r.a.createElement("main",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/register",component:pe}),r.a.createElement(h.a,{path:"/login",component:ue}),r.a.createElement(h.a,{path:"/logout",component:he}),r.a.createElement(de,{path:"/movies/:id",component:re}),r.a.createElement(h.a,{path:"/movies",render:function(t){return r.a.createElement(H,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.a,{path:"/customers",component:oe}),r.a.createElement(h.a,{path:"/rentals",component:se}),r.a.createElement(h.a,{path:"/not-found",component:ce}),r.a.createElement(v.a,{from:"/",exact:!0,to:"/movies"}),r.a.createElement(v.a,{to:"/not-found"}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86),a(87);console.log("SUPERMAN",Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_URL:"https://video-rental-api-react.herokuapp.com/api"}).REACT_APP_NAME),s.a.render(r.a.createElement(c.a,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.62b1f37d.chunk.js.map