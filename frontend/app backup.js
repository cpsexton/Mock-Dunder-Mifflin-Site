const body = document.body


const shopNavButton = document.getElementById('navButtonShop')


// if item.category == Categories then do create;
// function testNum(a) {
//     return "positive";
// } else {
//     return console.log(item.name);
// }
// }

const header = document.querySelector('header')
//sets click to render item cards inside a div
shopNavButton.addEventListener('click', event => {

    let cartLogo = document.createElement('img')
    cartLogo.setAttribute("id", "shoppingCartLogo")
    cartLogo.setAttribute("src", "/cartimage.png")
    cartLogo.classList.add("shoppingCart", "animated", "zoomIn")

    header.append(cartLogo)

    


fetch('http://localhost:3000/items')
.then(response => response.json())
.then(items => {
    
    
    items.forEach(item => {
        let container = document.createElement('div')
        let name = document.createElement('h3')
        let sku = document.createElement('p')
        let image = document.createElement('img')
        let desc = document.createElement('p')
        let category = document.createElement('p')
        const deleteButton = document.createElement('button')
        
        name.innerText = item.name
        sku.textContent = 'Sku: ' + item.sku
        image.src = item.image_url
        desc.innerText = 'Description: ' + item.description
            category.innerText = 'Category: ' + item.category
            deleteButton.innerText = "Delete from DB"
            container.setAttribute("id", "containerMan");
            
            deleteButton.addEventListener('click', event => {
                event.target.parentNode.remove()
                fetch(`http://localhost:3000/items/${item.id}`, {
                    method: 'DELETE'
                })
            }) 
            const content = document.getElementById('theSection')
            container.append(name, sku, image, desc, category, deleteButton)
            content.append(container)
        
        })
    })
    


})

const containerMan = document.getElementById('containerMan')
//  want containerMan to be dragable and dropped into a CART logo and stored
//i see an add shopping cart icon to switch to on hover
//i want the shopping cart logo to spawn on navcartbutton click
//cart logo sticky walks down center aisle and you can drag and shop.
//make background an image of a top down grocery store
//transparent header with cart being visible so its like its sitting there
//header +sticky is game menu bar. buttons trigger different backgrounds?
//buttons trigger 





/** code for the Header animation on scroll
 * @license
 * Build: `lodash include="throttle"`
 */
;(function(){function t(){}function e(t){return null==t?t===l?d:y:I&&I in Object(t)?n(t):r(t)}function n(t){var e=$.call(t,I),n=t[I];try{t[I]=l;var r=true}catch(t){}var o=_.call(t);return r&&(e?t[I]=n:delete t[I]),o}function r(t){return _.call(t)}function o(t,e,n){function r(e){var n=d,r=g;return d=g=l,x=e,v=t.apply(r,n)}function o(t){return x=t,O=setTimeout(c,e),T?r(t):v}function i(t){var n=t-h,r=t-x,o=e-n;return w?k(o,j-r):o}function f(t){var n=t-h,r=t-x;return h===l||n>=e||n<0||w&&r>=j}function c(){
    var t=D();return f(t)?p(t):(O=setTimeout(c,i(t)),l)}function p(t){return O=l,S&&d?r(t):(d=g=l,v)}function s(){O!==l&&clearTimeout(O),x=0,d=h=g=O=l}function y(){return O===l?v:p(D())}function m(){var t=D(),n=f(t);if(d=arguments,g=this,h=t,n){if(O===l)return o(h);if(w)return O=setTimeout(c,e),r(h)}return O===l&&(O=setTimeout(c,e)),v}var d,g,j,v,O,h,x=0,T=false,w=false,S=true;if(typeof t!="function")throw new TypeError(b);return e=a(e)||0,u(n)&&(T=!!n.leading,w="maxWait"in n,j=w?M(a(n.maxWait)||0,e):j,S="trailing"in n?!!n.trailing:S),
    m.cancel=s,m.flush=y,m}function i(t,e,n){var r=true,i=true;if(typeof t!="function")throw new TypeError(b);return u(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),o(t,e,{leading:r,maxWait:e,trailing:i})}function u(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function f(t){return null!=t&&typeof t=="object"}function c(t){return typeof t=="symbol"||f(t)&&e(t)==m}function a(t){if(typeof t=="number")return t;if(c(t))return s;if(u(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;
    t=u(e)?e+"":e}if(typeof t!="string")return 0===t?t:+t;t=t.replace(g,"");var n=v.test(t);return n||O.test(t)?h(t.slice(2),n?2:8):j.test(t)?s:+t}var l,p="4.17.5",b="Expected a function",s=NaN,y="[object Null]",m="[object Symbol]",d="[object Undefined]",g=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,O=/^0o[0-7]+$/i,h=parseInt,x=typeof global=="object"&&global&&global.Object===Object&&global,T=typeof self=="object"&&self&&self.Object===Object&&self,w=x||T||Function("return this")(),S=typeof exports=="object"&&exports&&!exports.nodeType&&exports,N=S&&typeof module=="object"&&module&&!module.nodeType&&module,E=Object.prototype,$=E.hasOwnProperty,_=E.toString,W=w.Symbol,I=W?W.toStringTag:l,M=Math.max,k=Math.min,D=function(){
    return w.Date.now()};t.debounce=o,t.throttle=i,t.isObject=u,t.isObjectLike=f,t.isSymbol=c,t.now=D,t.toNumber=a,t.VERSION=p,typeof define=="function"&&typeof define.amd=="object"&&define.amd?(w._=t, define(function(){return t})):N?((N.exports=t)._=t,S._=t):w._=t}).call(this);

// This function will run a throttled script every 300 ms
var checkHeader = _.throttle(() => { 
    console.log('checkHeader');

    // Detect scroll position
    let scrollPosition = Math.round(window.scrollY);

    // If we've scrolled 100px, add "sticky"
    if (scrollPosition > 200){
        document.querySelector('header').classList.add('sticky', 'animated', 'slideInDown');
        document.getElementById('headerLogo').classList.add('sticky', 'animated', 'jackInTheBox', 'delay-1s');
        document.querySelector('section').classList.add('sticky')

    } else {
        document.querySelector('header').classList.remove('sticky', 'animated', 'slideInDown');
        document.getElementById('headerLogo').classList.remove('sticky', 'animated', 'jackInTheBox', 'delay-1s');
        document.querySelector('section').classList.remove('sticky')
        
    }
}, 3);

// Run the checkHeader function every time you scroll
window.addEventListener('scroll', checkHeader);








