// const el=document.querySelector(".text-animate");    

// function showElements() {
//     const elinner =el.innerHTML.trim().split("");
//     el.innerHTML=elinner.reduce((acc,curr)=> {
//         curr =curr.replace(' ','&nbsp;');
//         return `${acc}<span class="char">${curr}</span>`;
//     },"");
    
// };    

// const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0,
//     once: true
// };
// const observer =new IntersectionObserver(showElements);
// observer.observe(el);
// observer.unobserve(el);


const btn =document.querySelector(".task_btn");
// console.log(btn);
const char =document.querySelector(".char");
// console.log(char);
btn.addEventListener("click",function() {
el.classList.toggle("anime");
});
// console.log(btn);

const el =document.querySelector(".text-animate");
class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
}
// console.log(el);
const observer = new IntersectionObserver(new TextAnimation(el));
observer.observe(el);
observer.remove(el);







    // class TextAnimation {
    //     constructor(el) {
    //         this.DOM = {};
    //         this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    //         this.chars = this.DOM.el.innerHTML.trim().split("");
    //         this.DOM.el.innerHTML = this._splitText();
    //     }
    //     _splitText() {
    //         return this.chars.reduce((acc, curr) => {
    //             curr = curr.replace(/\s+/, '&nbsp;');
    //             return `${acc}<span class="char">${curr}</span>`;
    //         }, "");
    //     }
    
    // }

    //     class ScrollObserver {
    //         constructor(el, cb, options) {
    //             this.el = document.querySelector(el);
    //             const defaultOptions = {
    //                 root: null,
    //                 rootMargin: "0px",
    //                 threshold: 0,
    //                 once: true
    //             };
    //             this.cb = cb;
    //             this.options = Object.assign(defaultOptions, options);
    //             this.once = this.options.once;
    //             this._init();
    //         }
    //         _init() {
    //             const callback = function (entry, observer) {
                    
    //                     if (entry.isIntersecting) {
    //                         this.cb(entry.target, true);
    //                         if(this.once) {
    //                             observer.unobserve(entry.target);
    //                         }
    //                     } else {
    //                         this.cb(entry.target, false);
    //                     }
                
    //             };
        
    //             this.io = new IntersectionObserver(callback.bind(this), this.options);
        
    //             // @see https://github.com/w3c/IntersectionObserver/tree/master/polyfill
    //             this.io.POLL_INTERVAL = 100;
                
    //             this.io.observe(this.el);
    //         }
        
    //         destroy() {
    //             this.io.disconnect();
    //         }
    //     }




    //     class TweenTextAnimation extends TextAnimation {
    //         constructor(el) {
    //             super(el);
    //             this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    //         }
    //     }
            
    //     document.addEventListener('DOMContentLoaded', function () {

    //         const cb = function (el, isIntersecting) {
    //             if(isIntersecting) {
    //                 const el =querySelector(".text-animate");
    //                 const ta = new TextAnimation(el);
                    
    //             }
    //         }
        
    //         const so = new ScrollObserver('.text-animate', cb);
    //     });
        
        



