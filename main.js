/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
    let main = document.createElement('main');
    main.id = 'contact';

    let address = document.createElement('p');
    address.classList.add('address');
    address.textContent = '15, Race course street, Coimbatore - 45';
    
    let phone = document.createElement('p');
    phone.classList.add('phone');
    phone.textContent = 'Phone: 1234567890';

    let feedback = document.createElement('p');
    feedback.classList.add('feedback');
    feedback.innerHTML = "Feedback: <a href='#'>here</a>";

    main.appendChild(address);
    main.appendChild(phone);
    main.appendChild(feedback);

    document.body.appendChild(main);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome() {
    let main = document.createElement('main');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');

    main.id = 'home';

    div.classList.add('home', 'content');
    img.src = 'images/mae-mu-I7A_pHLcQK8-unsplash.jpg';
    p.classList.add('description');

    p.innerHTML = 'Satisfy your hunger...<br>To live a full life, you have to fill your stomach first.';

    console.log(main, div, img, p);

    div.appendChild(img);
    main.appendChild(div);
    main.appendChild(p);

    document.body.appendChild(main);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
    const main = document.createElement('main');
    main.id = 'menu';

    let menuContent = document.createElement('div');
    menuContent.classList.add('menu', 'content');

    const images = [
        'images/beef-burger.jpg',
        'images/chicken-burger.jpg',
        'images/desert.jpg',
        'images/fries.jpg',
        'images/lasagne.jpg',
        'images/spaghetti.jpg',
        'images/veggie-burger.jpg'
    ];

    const dishes = [
        'Beef burger',
        'Chicken Burger',
        'Desert',
        'Fries',
        'Lasagne',
        'Spaghetti',
        'Vegan Burger'
    ];

    for (let i = 0; i < 6; i++){
        let div = document.createElement('div');
        div.classList.add('item');

        let img = document.createElement('img');
        let p = document.createElement('p');

        img.src = images[i];
        p.textContent = dishes[i];

        div.appendChild(img);
        div.appendChild(p);
        menuContent.appendChild(div);
    }

    main.appendChild(menuContent);

    document.body.appendChild(main);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const navTabs = document.querySelectorAll('.nav > p');
const main = document.querySelector('main');
console.log(main);

let navArr = Array.from(navTabs);

navArr.forEach(element => {
    element.addEventListener('click', (event) => {
        console.log(event.target);
        if (event.target.textContent === 'Home') {
            document.body.removeChild(document.querySelector('main'));
            (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
        } else if (event.target.textContent === 'Menu') {
            document.body.removeChild(document.querySelector('main'));
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
        } else if (event.target.textContent === 'Contact') {
            document.body.removeChild(document.querySelector('main'));
            (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
        }
    });
});





// createContact();

// createMenu();

// createHome();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUN2QjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDdkJ6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7O1VDL0N6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDQTtBQUNNOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaURBQVU7QUFDdEIsVUFBVTtBQUNWO0FBQ0EsWUFBWSxpREFBVTtBQUN0QixVQUFVO0FBQ1Y7QUFDQSxZQUFZLG9EQUFhO0FBQ3pCO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7OztBQU1EOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5pZCA9ICdjb250YWN0JztcblxuICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcycpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnMTUsIFJhY2UgY291cnNlIHN0cmVldCwgQ29pbWJhdG9yZSAtIDQ1JztcbiAgICBcbiAgICBsZXQgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmUuY2xhc3NMaXN0LmFkZCgncGhvbmUnKTtcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9ICdQaG9uZTogMTIzNDU2Nzg5MCc7XG5cbiAgICBsZXQgZmVlZGJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnZmVlZGJhY2snKTtcbiAgICBmZWVkYmFjay5pbm5lckhUTUwgPSBcIkZlZWRiYWNrOiA8YSBocmVmPScjJz5oZXJlPC9hPlwiO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGZlZWRiYWNrKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3Q7IiwiZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgbWFpbi5pZCA9ICdob21lJztcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdob21lJywgJ2NvbnRlbnQnKTtcbiAgICBpbWcuc3JjID0gJ2ltYWdlcy9tYWUtbXUtSTdBX3BITGNRSzgtdW5zcGxhc2guanBnJztcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICBwLmlubmVySFRNTCA9ICdTYXRpc2Z5IHlvdXIgaHVuZ2VyLi4uPGJyPlRvIGxpdmUgYSBmdWxsIGxpZmUsIHlvdSBoYXZlIHRvIGZpbGwgeW91ciBzdG9tYWNoIGZpcnN0Lic7XG5cbiAgICBjb25zb2xlLmxvZyhtYWluLCBkaXYsIGltZywgcCk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7IiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uaWQgPSAnbWVudSc7XG5cbiAgICBsZXQgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51JywgJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGltYWdlcyA9IFtcbiAgICAgICAgJ2ltYWdlcy9iZWVmLWJ1cmdlci5qcGcnLFxuICAgICAgICAnaW1hZ2VzL2NoaWNrZW4tYnVyZ2VyLmpwZycsXG4gICAgICAgICdpbWFnZXMvZGVzZXJ0LmpwZycsXG4gICAgICAgICdpbWFnZXMvZnJpZXMuanBnJyxcbiAgICAgICAgJ2ltYWdlcy9sYXNhZ25lLmpwZycsXG4gICAgICAgICdpbWFnZXMvc3BhZ2hldHRpLmpwZycsXG4gICAgICAgICdpbWFnZXMvdmVnZ2llLWJ1cmdlci5qcGcnXG4gICAgXTtcblxuICAgIGNvbnN0IGRpc2hlcyA9IFtcbiAgICAgICAgJ0JlZWYgYnVyZ2VyJyxcbiAgICAgICAgJ0NoaWNrZW4gQnVyZ2VyJyxcbiAgICAgICAgJ0Rlc2VydCcsXG4gICAgICAgICdGcmllcycsXG4gICAgICAgICdMYXNhZ25lJyxcbiAgICAgICAgJ1NwYWdoZXR0aScsXG4gICAgICAgICdWZWdhbiBCdXJnZXInXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKXtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgaW1nLnNyYyA9IGltYWdlc1tpXTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGRpc2hlc1tpXTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgICAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgbmF2VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYgPiBwJyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuY29uc29sZS5sb2cobWFpbik7XG5cbmxldCBuYXZBcnIgPSBBcnJheS5mcm9tKG5hdlRhYnMpO1xuXG5uYXZBcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGV4dENvbnRlbnQgPT09ICdIb21lJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykpO1xuICAgICAgICAgICAgY3JlYXRlSG9tZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ01lbnUnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSk7XG4gICAgICAgICAgICBjcmVhdGVNZW51KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID09PSAnQ29udGFjdCcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpKTtcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRhY3QoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cblxuXG5cblxuLy8gY3JlYXRlQ29udGFjdCgpO1xuXG4vLyBjcmVhdGVNZW51KCk7XG5cbi8vIGNyZWF0ZUhvbWUoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9