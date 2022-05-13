(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var a=i(10),r=i.n(a),s=(i(17),i(12)),n=i(5),l=i(6),c=i(8),m=i(7),o=i(2),d=i.n(o),b=(i(18),i(1)),u=(i(19),i(20),i(0)),j=function(e){var t=e.title,i=e.description,a=e.imgUrl,r=e.imdbUrl;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)("figure",{className:"image is-4by3",children:Object(u.jsx)("img",{src:a,alt:"Film logo"})})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsxs)("div",{className:"media",children:[Object(u.jsx)("div",{className:"media-left",children:Object(u.jsx)("figure",{className:"image is-48x48",children:Object(u.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(u.jsx)("div",{className:"media-content",children:Object(u.jsx)("p",{className:"title is-8",children:t})})]}),Object(u.jsxs)("div",{className:"content",children:[i,Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:r,children:"IMDB"})]})]})]})},h=function(e){var t=e.movies;return Object(u.jsx)("div",{className:"movies",children:t.map((function(e){return Object(u.jsx)(j,Object(b.a)({},e),e.imdbId)}))})},p=i(3),v=i(4),f=i.n(v);i(22);function g(e){return e.match(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/)||!1}var O=function(e){Object(c.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(n.a)(this,i);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",isTitleErrorVisible:!1,isImgUrlErrorVisible:!1,isImdbUrlErrorVisible:!1,isImdbIdErrorVisible:!1,isImgUrlInvalid:!1,isImdbUrlInvalid:!1},e.isInputEmpty=function(t,i){var a;switch(i){case"title":a="isTitleErrorVisible";break;case"imgUrl":a="isImgUrlErrorVisible";break;case"imdbUrl":a="isImdbUrlErrorVisible";break;case"imdbId":a="isImdbIdErrorVisible";break;default:return}t?e.setState((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(p.a)({},a,!1))})):e.setState((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(p.a)({},a,!0))}))},e.isUrlValid=function(t,i){var a;switch(i){case"imgUrl":a="isImgUrlInvalid";break;case"imdbUrl":a="isImdbUrlInvalid";break;default:return}g(t)?e.setState((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(p.a)({},a,!1))})):e.setState((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(p.a)({},a,!0))}))},e.handleSubmit=function(t){var i=e.state,a=i.title,r=i.description,s=i.imgUrl,n=i.imdbUrl,l=i.imdbId,c=e.props.onAdd,m={title:a,description:r,imgUrl:s,imdbUrl:n,imdbId:l};t.preventDefault(),c(m),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this,t=this.state,i=t.title,a=t.description,r=t.imgUrl,s=t.imdbUrl,n=t.imdbId,l=t.isTitleErrorVisible,c=t.isImgUrlErrorVisible,m=t.isImdbUrlErrorVisible,o=t.isImdbIdErrorVisible,d=t.isImdbUrlInvalid,b=t.isImgUrlInvalid;return Object(u.jsxs)("form",{onSubmit:function(t){e.handleSubmit(t)},className:"form",children:[Object(u.jsx)("h2",{className:"form__title",children:"Add new movie form"}),Object(u.jsxs)("label",{className:"form__label",children:["Title:",Object(u.jsx)("input",{name:"title",type:"text",value:i,onChange:function(t){var i=t.target;e.setState({title:i.value})},onBlur:function(t){var i=t.target;e.isInputEmpty(i.value,i.name)},className:f()("form__input",{"form__input--invalid":l})})]}),l&&Object(u.jsx)("p",{className:"form__error",children:"* Title is required"}),Object(u.jsxs)("label",{className:"form__label",children:["Description:",Object(u.jsx)("input",{name:"description",type:"text",value:a,onChange:function(t){var i=t.target;e.setState({description:i.value})},className:"form__input"})]}),Object(u.jsxs)("label",{className:"form__label",children:["Image URL:",Object(u.jsx)("input",{name:"imgUrl",type:"text",value:r,onChange:function(t){var i=t.target;e.setState({imgUrl:i.value})},onBlur:function(t){var i=t.target;e.isInputEmpty(i.value,i.name),e.isUrlValid(i.value,i.name)},className:f()("form__input",{"form__input--invalid":c||b})})]}),c&&Object(u.jsx)("p",{className:"form__error",children:"* Image URL is required"}),b&&Object(u.jsx)("p",{className:"form__error",children:"* Image URL is not valid"}),Object(u.jsxs)("label",{className:"form__label",children:["IMDB URL:",Object(u.jsx)("input",{name:"imdbUrl",type:"text",value:s,onChange:function(t){var i=t.target;e.setState({imdbUrl:i.value})},onBlur:function(t){var i=t.target;e.isInputEmpty(i.value,i.name),e.isUrlValid(i.value,i.name)},className:f()("form__input",{"form__input--invalid":m||d})})]}),m&&Object(u.jsx)("p",{className:"form__error",children:"* IMDB URL is required"}),d&&Object(u.jsx)("p",{className:"form__error",children:"* IMDB URL is not valid"}),Object(u.jsxs)("label",{className:"form__label",children:["IMDB ID:",Object(u.jsx)("input",{name:"imdbId",type:"text",value:n,onChange:function(t){var i=t.target;e.setState({imdbId:i.value})},onBlur:function(t){var i=t.target;e.isInputEmpty(i.value,i.name)},className:f()("form__input",{"form__input--invalid":o})})]}),o&&Object(u.jsx)("p",{className:"form__error",children:"* IMDB ID is required"}),Object(u.jsx)("button",{type:"submit",className:"form__submit",disabled:!i||!r||!s||!n||!1===g(s)||!1===g(r)||!1,children:"Submit"})]})}}]),i}(o.Component),_=i(11),I=function(e){Object(c.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(n.a)(this,i);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={movies:_},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("div",{className:"page-content",children:Object(u.jsx)(h,{movies:e})}),Object(u.jsx)("div",{className:"sidebar",children:Object(u.jsx)(O,{onAdd:this.addMovie})})]})}}]),i}(d.a.Component);r.a.render(Object(u.jsx)(I,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.d24d9b10.chunk.js.map