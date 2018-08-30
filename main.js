(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_animations/animation.ts":
/*!******************************************!*\
  !*** ./src/app/_animations/animation.ts ***!
  \******************************************/
/*! exports provided: start, startCard, start1, start2, start3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startCard", function() { return startCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start1", function() { return start1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start2", function() { return start2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start3", function() { return start3; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var start = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('start', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX()' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ])
]);
var startCard = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('startCard', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX()' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-10%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ])
]);
var start1 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('start1', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX()' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ])
]);
var start2 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('start2', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('go', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('togo', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('go <=> togo', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in')),
]);
var start3 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('start3', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('go1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-120%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('togo1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('go1 <=> togo1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms ease-in')),
]);


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border: 0px;\r\n}\r\n\r\n.component {\r\n    position: relative;\r\n    top: 7vh;\r\n    width: 100%;\r\n    height: auto;\r\n    margin: 0px auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.pSection {\r\n\r\n    margin:0px auto;\r\n    width: 80%;\r\n    /* height: 120vh; */\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.pPhoto {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 50%;\r\n    margin-bottom: 3vh;\r\n    background-image: url('about.jpg');\r\n    background-size: auto 70vh;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    \r\n}\r\n\r\n.pInfo {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    width: 50%;\r\n}\r\n\r\na{\r\n    color: black;\r\n}\r\n\r\n.socA{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\na:hover {\r\n    text-decoration:none;\r\n}\r\n\r\n#pAbout {\r\n    width: 80%;\r\n    height: 70%;\r\n}\r\n\r\n.soc {\r\n    width: 30px;\r\n}\r\n\r\ntable {\r\n    width: 90%;\r\n    margin-top: 5vh;\r\n}\r\n\r\nh5 {\r\n    text-align: justify;\r\n}\r\n\r\n@media (max-width:1024px){\r\n    .component {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    .pSection{\r\n        flex-direction: column;\r\n        width: 90%;\r\n        height: auto;\r\n        align-items: center;\r\n    }\r\n    .pPhoto {\r\n        margin-top: 5vh;\r\n        width:100%;\r\n        height: 30vh;\r\n        background-size: cover;\r\n    }\r\n    table {\r\n        width: 100%;\r\n    }\r\n    .pInfo {\r\n        width: 100%;\r\n        margin: 0px auto;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\r\n  <div class=\"pSection\">\r\n    <div class=\"pPhoto\">\r\n    </div>\r\n          <!-- <img id=\"pAbout\" src=\"../../assets/images/about.jpg\" alt=\"\"> -->\r\n          <!-- <iframe id=\"maps\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8455441799733!2d44.51998801541696!3d40.19025067939211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcdf8e5524c5%3A0x7d6e02506a8e68e7!2zMTA1IFRlcnlhbiBTdCwgWWVyZXZhbiwg0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2s!4v1530175788725\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>  </div> -->\r\n      <div class=\"pInfo\">\r\n              <h2 style=\"font-weight: bold;\" >About us</h2>\r\n\r\n          <table class=\"table\">\r\n          <thead class=\"thead-light\">\r\n          </thead>\r\n          <tbody>\r\n              <tr>\r\n              <th scope=\"row\">WHAT DO WE DO?</th>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                    <h5>\r\n                            MobileShop gives you a chance to quickly and easily find the phone you want and have it delivered to your home in no time, regardless of your location, as long as it is in one of the countries of the EU.\r\n                    </h5>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">WHY DO CUSTOMERS LOVE US?</th>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                    <h5>\r\n                            We have been in the business for quite a while now, and it that time we have not only managed to make close relationships with numerous suppliers all over the world, but also to recognize what people need. This means that we are always able to offer all the latest phones, great prices, reliable service, fast delivery and premium customer support.\r\n                    </h5>\r\n                </td>\r\n              </tr>\r\n\r\n\r\n\r\n\r\n              <tr>\r\n                <th scope=\"row\">Who made this Website?</th>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                    <h5>\r\n                           This website is made  by  Mihran Baldryan and Zaven Sargsyan .The  website was built with Angular 5 . \r\n                    </h5>\r\n                </td>\r\n              </tr>\r\n\r\n\r\n\r\n          </tbody>\r\n          </table>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\r\n<app-footer></app-footer>\r\n<!-- <app-article></app-article> --> \r\n\r\n<!-- <app-product-page [card]=\"card\"></app-product-page>   -->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) { return _this.titleService.setTitle(event['title'] + ' - SB Mobile Store'); });
    };
    AppComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _header_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/nav/nav.component */ "./src/app/header/nav/nav.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _header_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/slider/slider.component */ "./src/app/header/slider/slider.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _article_sections_sections_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article/sections/sections.component */ "./src/app/article/sections/sections.component.ts");
/* harmony import */ var _article_sections_section1_section1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./article/sections/section1/section1.component */ "./src/app/article/sections/section1/section1.component.ts");
/* harmony import */ var _article_sections_section2_section2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article/sections/section2/section2.component */ "./src/app/article/sections/section2/section2.component.ts");
/* harmony import */ var _article_sections_section3_section3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./article/sections/section3/section3.component */ "./src/app/article/sections/section3/section3.component.ts");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-card/product-card.component */ "./src/app/product-card/product-card.component.ts");
/* harmony import */ var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-page/product-page.component */ "./src/app/product-page/product-page.component.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-add/product-add.component */ "./src/app/product-add/product-add.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _trend_trend_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./trend/trend.component */ "./src/app/trend/trend.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular2_image_upload__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular2-image-upload */ "./node_modules/angular2-image-upload/index.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../products.service */ "./src/products.service.ts");
/* harmony import */ var _like_like_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./like/like.component */ "./src/app/like/like.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _compare_compare_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./compare/compare.component */ "./src/app/compare/compare.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var appRoutes = [
    {
        path: '',
        component: _article_article_component__WEBPACK_IMPORTED_MODULE_8__["ArticleComponent"],
        data: { title: 'Home' }
    },
    {
        path: 'shoppingCart',
        component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_25__["ShoppingCartComponent"],
        data: { title: ' ShoppingCart' }
    },
    {
        path: 'compare',
        component: _compare_compare_component__WEBPACK_IMPORTED_MODULE_26__["CompareComponent"],
        data: { title: 'Compare' }
    },
    {
        path: 'like',
        component: _like_like_component__WEBPACK_IMPORTED_MODULE_24__["LikeComponent"],
        data: { title: 'Like' }
    },
    {
        path: 'mobile',
        component: _article_sections_section1_section1_component__WEBPACK_IMPORTED_MODULE_10__["Section1Component"],
        data: { title: 'Mobile' }
    },
    {
        path: 'tablet',
        component: _article_sections_section2_section2_component__WEBPACK_IMPORTED_MODULE_11__["Section2Component"],
        data: { title: 'Tablet' }
    },
    {
        path: 'accessories',
        component: _article_sections_section3_section3_component__WEBPACK_IMPORTED_MODULE_12__["Section3Component"],
        data: { title: 'Accessories' }
    },
    {
        path: 'product/:any',
        component: _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_14__["ProductPageComponent"],
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
        data: { title: 'About' }
    },
    {
        path: 'contacts',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_18__["ContactsComponent"],
        data: { title: 'Contacts' }
    },
    {
        path: 'add',
        component: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_15__["ProductAddComponent"],
        data: { title: 'Add Product' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _header_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _header_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__["SliderComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_8__["ArticleComponent"],
                _article_sections_sections_component__WEBPACK_IMPORTED_MODULE_9__["SectionsComponent"],
                _article_sections_section1_section1_component__WEBPACK_IMPORTED_MODULE_10__["Section1Component"],
                _article_sections_section2_section2_component__WEBPACK_IMPORTED_MODULE_11__["Section2Component"],
                _article_sections_section3_section3_component__WEBPACK_IMPORTED_MODULE_12__["Section3Component"],
                _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_13__["ProductCardComponent"],
                _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_14__["ProductPageComponent"],
                _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_15__["ProductAddComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_18__["ContactsComponent"],
                _trend_trend_component__WEBPACK_IMPORTED_MODULE_19__["TrendComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
                _like_like_component__WEBPACK_IMPORTED_MODULE_24__["LikeComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_25__["ShoppingCartComponent"],
                _compare_compare_component__WEBPACK_IMPORTED_MODULE_26__["CompareComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                angular2_image_upload__WEBPACK_IMPORTED_MODULE_22__["ImageUploadModule"].forRoot(),
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"],
                _products_service__WEBPACK_IMPORTED_MODULE_23__["ProductsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    height: auto;\r\n}"

/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n \r\n    <app-slider></app-slider>\r\n    <app-sections></app-sections>\r\n \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")]
        })
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/article/sections/section1/section1.component.css":
/*!******************************************************************!*\
  !*** ./src/app/article/sections/section1/section1.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main { \r\n    margin-top:10vh;\r\n    min-height: 60vh;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.content {\r\n    margin-top: 2vh;\r\n    width: 80%;\r\n    z-index: 0;\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    justify-content: space-around;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    height: auto;\r\n}\r\n\r\n@media(max-width:767px){\r\n    .content {\r\n        width: 90%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/article/sections/section1/section1.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/article/sections/section1/section1.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n<div class=\"content\">\r\n    <app-product-card *ngFor=\"let cards of product[0]\" [card]='cards'></app-product-card>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/article/sections/section1/section1.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/article/sections/section1/section1.component.ts ***!
  \*****************************************************************/
/*! exports provided: Section1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section1Component", function() { return Section1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../products.service */ "./src/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Section1Component = /** @class */ (function () {
    function Section1Component(productsService) {
        this.productsService = productsService;
    }
    Section1Component.prototype.ngOnInit = function () {
        this.product = this.productsService.product;
    };
    Section1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section1',
            template: __webpack_require__(/*! ./section1.component.html */ "./src/app/article/sections/section1/section1.component.html"),
            styles: [__webpack_require__(/*! ./section1.component.css */ "./src/app/article/sections/section1/section1.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], Section1Component);
    return Section1Component;
}());



/***/ }),

/***/ "./src/app/article/sections/section2/section2.component.css":
/*!******************************************************************!*\
  !*** ./src/app/article/sections/section2/section2.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main { \r\n    margin-top:10vh;\r\n    min-height: 60vh;    \r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.content {\r\n    margin-top: 2vh;\r\n    width: 80%;\r\n    z-index: 0;\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    justify-content: space-around;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    height: auto;\r\n}\r\n\r\n@media(max-width:767px){\r\n    .content {\r\n        width: 90%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/article/sections/section2/section2.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/article/sections/section2/section2.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <div class=\"content\">\r\n        <app-product-card *ngFor=\"let cards of product[1]\" [card]='cards'></app-product-card>\r\n    </div>\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/article/sections/section2/section2.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/article/sections/section2/section2.component.ts ***!
  \*****************************************************************/
/*! exports provided: Section2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section2Component", function() { return Section2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../products.service */ "./src/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Section2Component = /** @class */ (function () {
    function Section2Component(productsService) {
        this.productsService = productsService;
    }
    Section2Component.prototype.ngOnInit = function () {
        this.product = this.productsService.product;
    };
    Section2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section2',
            template: __webpack_require__(/*! ./section2.component.html */ "./src/app/article/sections/section2/section2.component.html"),
            styles: [__webpack_require__(/*! ./section2.component.css */ "./src/app/article/sections/section2/section2.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], Section2Component);
    return Section2Component;
}());



/***/ }),

/***/ "./src/app/article/sections/section3/section3.component.css":
/*!******************************************************************!*\
  !*** ./src/app/article/sections/section3/section3.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main { \r\n    margin-top:10vh;\r\n    min-height: 60vh;    \r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.content {\r\n    margin-top: 2vh;\r\n    width: 80%;\r\n    z-index: 0;\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    justify-content: space-around;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    height: auto;\r\n}\r\n\r\n@media(max-width:767px){\r\n    .content {\r\n        width: 90%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/article/sections/section3/section3.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/article/sections/section3/section3.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <div class=\"content\">\r\n        <app-product-card *ngFor=\"let cards of product[2]\" [card]='cards'></app-product-card>\r\n    </div>\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/article/sections/section3/section3.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/article/sections/section3/section3.component.ts ***!
  \*****************************************************************/
/*! exports provided: Section3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section3Component", function() { return Section3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../products.service */ "./src/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Section3Component = /** @class */ (function () {
    function Section3Component(productsService) {
        this.productsService = productsService;
    }
    Section3Component.prototype.ngOnInit = function () {
        this.product = this.productsService.product;
    };
    Section3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section3',
            template: __webpack_require__(/*! ./section3.component.html */ "./src/app/article/sections/section3/section3.component.html"),
            styles: [__webpack_require__(/*! ./section3.component.css */ "./src/app/article/sections/section3/section3.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], Section3Component);
    return Section3Component;
}());



/***/ }),

/***/ "./src/app/article/sections/sections.component.css":
/*!*********************************************************!*\
  !*** ./src/app/article/sections/sections.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    width:  60%;\r\n    height: 30vh;\r\n    margin: 0px auto;\r\n    \r\n}\r\n\r\n.material-icons {\r\n    font-size: 10vh;\r\n    width: 20%;\r\n    height: 11vh;\r\n    color: #475498;\r\n}\r\n\r\n.sectionUrls {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: 25%;\r\n    height: 20vh;\r\n    margin: 0px auto;\r\n    color: #000;\r\n    text-decoration: none;\r\n}\r\n\r\n.sectionUrls:hover {\r\n    box-shadow: 0 0 10px #475498;\r\n}\r\n\r\n.sectionsName {\r\n    font-size: 2vh;\r\n    text-align: center;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.products {\r\n    width: 80%;\r\n    z-index: 0;\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    justify-content: space-around;\r\n    position: relative;\r\n    margin: 0px auto;\r\n}\r\n\r\n@media (max-width:767px){\r\n    .content {\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/article/sections/sections.component.html":
/*!**********************************************************!*\
  !*** ./src/app/article/sections/sections.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <a class=\"sectionUrls\" routerLink=\"/mobile\">\r\n    <span>\r\n        <i class=\"material-icons\">\r\n            smartphone\r\n        </i>\r\n    </span>\r\n    <h5 class=\"sectionsName\">Mobile</h5>\r\n  </a>\r\n  <a class=\"sectionUrls\" routerLink=\"/tablet\">\r\n    <span>\r\n        <i class=\"material-icons\">\r\n            tablet_mac\r\n        </i>    \r\n    </span>\r\n    <h5 class=\"sectionsName\">Tablets</h5>\r\n  </a>\r\n  <a class=\"sectionUrls\" routerLink=\"/accessories\">\r\n    <span>\r\n        <i class=\"material-icons\">\r\n            headset\r\n        </i>    \r\n    </span>\r\n    <h5 class=\"sectionsName\">Accessories</h5>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"products\">\r\n  <app-product-card *ngFor=\"let cards of product[0]\" [card]='cards'></app-product-card>\r\n  <app-product-card *ngFor=\"let cards of product[1]\" [card]='cards'></app-product-card>\r\n  <app-product-card *ngFor=\"let cards of product[2]\" [card]='cards'></app-product-card>\r\n\r\n<h1 style=\"text-align: center;padding: 40px;width: 100%;\">Most Popular<br>\r\n<hr style=\"width: 30%;text-align: center\"></h1>\r\n<app-product-card  [card]='product[0][0]'></app-product-card>\r\n<app-product-card  [card]='product[1][0]'></app-product-card>\r\n<app-product-card  [card]='product[2][0]'></app-product-card>\r\n</div>\r\n<!-- <app-contacts></app-contacts>\r\n<app-about></app-about> -->"

/***/ }),

/***/ "./src/app/article/sections/sections.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article/sections/sections.component.ts ***!
  \********************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../products.service */ "./src/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionsComponent = /** @class */ (function () {
    function SectionsComponent(productsService) {
        this.productsService = productsService;
    }
    SectionsComponent.prototype.ngOnInit = function () {
        // this.doSomething(event,name);
        this.product = this.productsService.product;
    };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! ./sections.component.html */ "./src/app/article/sections/sections.component.html"),
            styles: [__webpack_require__(/*! ./sections.component.css */ "./src/app/article/sections/sections.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/compare/compare.component.css":
/*!***********************************************!*\
  !*** ./src/app/compare/compare.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main { \r\n    margin-top:10vh;\r\n    min-height: 60vh;    \r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n h1{ margin-top:15vh;\r\n    font-size: 22px;\r\n    color: #475498;\r\n    margin-left: 10px;\r\n}\r\n .content {\r\n    margin-top: 2vh;\r\n    width: 80%;\r\n    z-index: 0;\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    justify-content: space-around;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    height: auto;\r\n}\r\n tr{\r\n   display: flex;\r\n   flex-wrap: wrap;\r\n}\r\n th{\r\n    width: 100%;\r\n}\r\n * {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border: 0px;\r\n}\r\n .component {\r\n    width: 100%;\r\n    height: auto;\r\n    margin: 0px auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    min-height: 70vh;\r\n}\r\n .pSection1 {\r\n    padding-top:10vh; \r\n    margin:0px auto;\r\n    width: 80%;\r\n    height: 70vh;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: row;\r\n}\r\n .pSection2 {\r\n    width: 80%;\r\n    margin: 0px auto;\r\n    height: auto;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: row;\r\n    position: relative;\r\n    top: 50px;\r\n}\r\n .pPhoto {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    width: 50%;\r\n    background-image: url('s9.png');\r\n    background-size: auto 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n .pInfo {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    width: 50%;\r\n}\r\n .table .thead-dark th {\r\n    border-color: #475498;\r\n    background-color: #475498;\r\n    font-weight: bold; \r\n}\r\n .pPrice {\r\n    color:#475498;\r\n    font-size:22px;\r\n    font-weight:600;\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n @media (max-width:900px){\r\n    .pSection1 {\r\n        width: 100%;\r\n        height: auto;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    .pSection2 {\r\n        width: 100%;\r\n    }\r\n    .pPhoto {\r\n        width: 90%;\r\n        height: 80vmin;\r\n    }\r\n    .pInfo h2 {\r\n        padding: 20px;\r\n        text-align: center;\r\n    }\r\n    .pInfo {\r\n        width: 90%;\r\n    }\r\n}\r\n @media(max-width:767px){\r\n    .content {\r\n        width: 90%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/compare/compare.component.html":
/*!************************************************!*\
  !*** ./src/app/compare/compare.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <h1 *ngIf=\"!this.productsService.compare.length\">Որպեսզի կարողանաք համեմատել պետք է ընտրեք  այն   սարքավորոմները  որոնք ցանկանում եք համեմատել</h1>\n<div class=\"main\">\n   \n  <div class=\"content\">\n      <app-product-card *ngFor=\"let cards of product\" [card]='cards'></app-product-card>\n  </div>\n  </div>\n  \n  \n\n\n \n\n\n\n  <div class=\"component\"  *ngIf=\"this.productsService.compare.length\">\n\n\n\n\n   \n\n    <div class=\"pSection2\">\n\n        <table class=\"table\">\n        <thead class=\"thead-dark\">\n            <tr class=\"thead-dark\">\n                <th scope=\"col\" colspan=\"2\" >General</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Model</th>\n                <td  *ngFor=\"let card of product\">{{ card.version }}   | </td>\n            </tr>\n            <tr class=\"parent\" > \n                <th scope=\"row\">Announcement Year</th>\n                <td *ngFor=\"let card of product\">{{ card.year }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Operation System</th>\n                <td *ngFor=\"let card of product\">{{ card.os }}   | </td>\n            </tr>\n            <tr class=\"thead-dark\">\n                <th scope=\"col\" colspan=\"2\" >Display</th>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Screen Type</th>\n                <td *ngFor=\"let card of product\">{{ card.screenType }}   |  </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Screen Resolution</th>\n                <td *ngFor=\"let card of product\">{{ card.screenResolution }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Screen Size</th>\n                <td *ngFor=\"let card of product\">{{ card.screenSize }}   | </td>\n            </tr>\n            <tr class=\"thead-dark\">\n                <th scope=\"col\" colspan=\"2\" >Camera</th>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Front Camera</th>\n                <td *ngFor=\"let card of product\">{{ card.frontCamera }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Main Camera</th>\n                <td *ngFor=\"let card of product\">{{ card.mainCamera }}   | </td>\n            </tr>\n            <tr class=\"thead-dark\">\n                <th scope=\"col\" colspan=\"2\" >Memory & CPU</th>\n            </tr>\n            <tr class=\"parent\" > \n                <th scope=\"row\">Number of processor cores</th>\n                <td *ngFor=\"let card of product\">{{ card.numberOfProcessorCores }}   |  </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">CPU</th>\n                <td *ngFor=\"let card of product\">{{ card.cpu }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">RAM</th>\n                <td *ngFor=\"let card of product\">{{ card.ram }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Memory Card Slot</th>\n                <td *ngFor=\"let card of product\">{{ card.memoryCardSlot }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Memory</th>\n                <td *ngFor=\"let card of product\">{{ card.memory }}   | </td>\n            </tr>\n            <tr class=\"thead-dark\">\n                <th scope=\"col\" colspan=\"2\" >Network</th>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Standart Network</th>\n                <td *ngFor=\"let card of product\">{{ card.standartNetwork }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Access to the Internet</th>\n                <td *ngFor=\"let card of product\">{{ card.accessToTheInternet }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">4G LTE Network range</th>\n                <td *ngFor=\"let card of product\">{{ card.networkRangeLte4G }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">GPS</th>\n                <td *ngFor=\"let card of product\">{{ card.gps }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Bluetooth</th>\n                <td *ngFor=\"let card of product\">{{ card.bluetooth }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">WiFi Network</th>\n                <td *ngFor=\"let card of product\">{{ card.wifiNetwork }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">3G Network</th>\n                <td *ngFor=\"let card of product\">{{ card.network3G }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">NFC</th>\n                <td *ngFor=\"let card of product\">{{ card.nfc }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">4G LTE Network</th>\n                <td *ngFor=\"let card of product\">{{ card.networkLte4G }}   | </td>\n            </tr>\n            <tr class=\"thead-dark\">\n                <th scope=\"col\" colspan=\"2\" >Power</th>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Charing Connector Type</th>\n                <td>{{ card.charingConnectorType }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Talk Time</th>\n                <td *ngFor=\"let card of product\">{{ card.talkTime }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Battery Type</th>\n                <td *ngFor=\"let card of product\">{{ card.batteryType }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Battery Capacity</th>\n                <td *ngFor=\"let card of product\">{{ card.batteryCapacity }}   | </td>\n            </tr>\n            <tr class=\"thead-dark\">\n                <th scope=\"col\" colspan=\"2\" >Other</th>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Weight</th>\n                <td *ngFor=\"let card of product\">{{ card.weight }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Thickness</th>\n                <td *ngFor=\"let card of product\">{{ card.thickness }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Height</th>\n                <td *ngFor=\"let card of product\">{{ card.height }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Width</th>\n                <td *ngFor=\"let card of product\">{{ card.width }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">Audio</th>\n                <td *ngFor=\"let card of product\">{{ card.audio }}   | </td>\n            </tr>\n            <tr class=\"parent\" >\n                <th scope=\"row\">SIM Card Quanitity</th>\n                <td *ngFor=\"let card of product\">{{ card.simCardQuantity }}   | </td>\n            </tr>\n            \n        </tbody>\n        </table>\n    \n\n    </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/compare/compare.component.ts":
/*!**********************************************!*\
  !*** ./src/app/compare/compare.component.ts ***!
  \**********************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../products.service */ "./src/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompareComponent = /** @class */ (function () {
    function CompareComponent(productsService) {
        this.productsService = productsService;
    }
    CompareComponent.prototype.ngOnInit = function () {
        this.product = this.productsService.compare;
    };
    CompareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-compare',
            template: __webpack_require__(/*! ./compare.component.html */ "./src/app/compare/compare.component.html"),
            styles: [__webpack_require__(/*! ./compare.component.css */ "./src/app/compare/compare.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], CompareComponent);
    return CompareComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border: 0px;\r\n}\r\n\r\n.component {\r\n    position: relative;\r\n    top: 7vh;\r\n    width: 100%;\r\n    height: auto;\r\n    margin: 0px auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.pSection {\r\n\r\n    margin:0px auto;\r\n    width: 80%;\r\n    height: 93vh;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: row;\r\n}\r\n\r\n.pPhoto {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 50%;\r\n    \r\n    /*\r\n    background-image: url(../../assets/images/mobile/s9.png);\r\n    background-size: auto 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    */\r\n}\r\n\r\n.pInfo {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    width: 50%;\r\n}\r\n\r\na{\r\n    color: black;\r\n}\r\n\r\n.socA{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\na:hover {\r\n    text-decoration:none;\r\n}\r\n\r\n#maps {\r\n    width: 80%;\r\n    height: 70vh;\r\n}\r\n\r\n.soc {\r\n    width: 30px;\r\n}\r\n\r\ntable {\r\n    margin-top: 50px;\r\n}\r\n\r\n@media (max-width:1024px){\r\n    .component {\r\n        width: 100%;\r\n        height: auto;\r\n        min-height: 80vh;\r\n        top: 0vh;\r\n    }\r\n    .pSection{\r\n        flex-direction: column;\r\n        width: 90%;\r\n        height: auto;\r\n        align-items: center;\r\n    }\r\n    .pPhoto {\r\n        margin-top: 4vh;\r\n        margin-bottom: 4vh;\r\n        width:100%;\r\n        height: 30vh;\r\n    }\r\n    table {\r\n        margin-top: 20px;\r\n    }\r\n    .pInfo {\r\n        width: 100%;\r\n        margin: 0px auto;\r\n    }\r\n    #maps {\r\n        width: 100%;\r\n        height:auto;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\r\n    <div class=\"pSection\">\r\n        <div class=\"pPhoto\">\r\n            <iframe id=\"maps\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8455441799733!2d44.51998801541696!3d40.19025067939211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcdf8e5524c5%3A0x7d6e02506a8e68e7!2zMTA1IFRlcnlhbiBTdCwgWWVyZXZhbiwg0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2s!4v1530175788725\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>  </div>\r\n        <div class=\"pInfo\">\r\n                <h2 style=\"font-weight: bold;\" >Contacts</h2>\r\n\r\n            <table class=\"table\">\r\n            <thead class=\"thead-light\">\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <th scope=\"row\">Adress</th>\r\n                    <td>105/1 Teryan str, SEUA #10, 6-th floor</td>\r\n                </tr>\r\n                <tr>\r\n                    <th scope=\"row\">E-mail</th>\r\n                    <td><a href=\"mailto:mihran.baldryan@gmail.com\">mihran.baldryan@gmail.com</a></td>\r\n                </tr>\r\n                <tr>\r\n                    <th scope=\"row\">Mobile</th>\r\n                    <td><a href=\"tell:+37495644301\">+374 95 64 43 01</a></td>\r\n                </tr>\r\n                <tr>\r\n                    <th scope=\"row\">Soc Media</th>\r\n                    <td>\r\n                        <a class=\"socA\" href=\"#\"><img class=\"soc\" src=\"../../assets/images/facebook.png\" alt=\"\"></a>\r\n                        <a class=\"socA\" href=\"#\"><img class=\"soc\" src=\"../../assets/images/instagram.png\" alt=\"\"></a>\r\n                        <a class=\"socA\" href=\"#\"><img class=\"soc\" src=\"../../assets/images/youtube.png\" alt=\"\"></a>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    border: 0px;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\nimg{\r\n    cursor:pointer;\r\n}\r\n\r\n.content {\r\n    margin-top: 15vh;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 15vh;\r\n    background-color: #475498;\r\n}\r\n\r\n.logo {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.toTheTop {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.contacts {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\ntable {\r\n    color: white;\r\n    height: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.table td, .table th {\r\n    padding: 0px;\r\n    border-top: 0px;\r\n}\r\n\r\n.soc {\r\n    width: 20px;\r\n}\r\n\r\n.socA{\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.socIcon {\r\n    display: flex;\r\n    justify-content: center;\r\n    /* align-items: center; */\r\n    flex-direction: row;\r\n    height: auto;\r\n}\r\n\r\na {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n@media (max-width:768px) {\r\n    .content {\r\n        flex-direction: column;\r\n        height: auto;\r\n    }\r\n\r\n    .logo {\r\n        justify-content: space-evenly;\r\n        width: 100%;\r\n        flex-direction: row;\r\n    }\r\n\r\n    .toTheTop {\r\n        width: 100%;\r\n        margin: 0 0 2vh 0;\r\n    }\r\n\r\n    .contacts {\r\n        justify-content: center;\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"content\">\r\n  <div class=\"logo\">\r\n    <img  routerLink=\"\" src=\"../../assets/images/logo.png\" height=\"80vh\" alt=\"\">\r\n    <div class=\"socIcon\">\r\n        <a class=\"socA\" href=\"#\"><img class=\"soc\" src=\"../../assets/images/facebook.png\" alt=\"\"></a>\r\n        <a class=\"socA\" href=\"#\"><img class=\"soc\" src=\"../../assets/images/instagram.png\" alt=\"\"></a>\r\n        <a class=\"socA\" href=\"#\"><img class=\"soc\" src=\"../../assets/images/youtube.png\" alt=\"\"></a>\r\n    </div>\r\n</div>\r\n  <div class=\"toTheTop scrollToTop\" >\r\n    <button mat-raised-button color=\"primary\">\r\n      Go To Top\r\n    </button>\r\n  </div>\r\n  <div class=\"contacts\">\r\n    <table class=\"table\">\r\n      <thead class=\"thead-light\">\r\n      </thead>\r\n      <tbody>\r\n          <tr>\r\n              <th scope=\"row\">\r\n                <i class=\"material-icons\">\r\n                home\r\n                </i>\r\n                </th>\r\n              <td> 105/1 Teryan str</td>\r\n          </tr>\r\n          <tr>\r\n              <th scope=\"row\">\r\n                <i class=\"material-icons\">\r\n                email\r\n                </i>\r\n              </th>\r\n              <td> <a href=\"mailto:mihran.baldryan@gmail.com\">mihran.baldryan@gmail.com</a></td>\r\n          </tr>\r\n          <tr>\r\n              <th scope=\"row\">\r\n                <i class=\"material-icons\">\r\n                phone\r\n                </i>\r\n              </th>\r\n              <td> <a href=\"tell:+37495644301\">+374 95 64 43 01</a></td>\r\n          </tr>\r\n          <!-- <tr> \r\n                  <a class=\"socA\" href=\"#\"><img class=\"soc\" src=\"../../assets/images/facebook.png\" alt=\"\"></a>\r\n                  <a class=\"socA\" href=\"#\"><img class=\"soc\" src=\"../../assets/images/instagram.png\" alt=\"\"></a>\r\n                  <a class=\"socA\" href=\"#\"><img class=\"soc\" src=\"../../assets/images/youtube.png\" alt=\"\"></a>\r\n          </tr> -->\r\n      </tbody>\r\n      </table>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.onActivate = function (event) {
        setTimeout(function () {
            window.scroll(0, 100);
        }, 200);
    };
    FooterComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.scrollToTop button').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({ scrollTop: 0 }, 800);
                return false;
            });
        });
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    position: relative;\r\n    z-index: 2;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n        <app-nav ></app-nav>\r\n        <!-- <app-slider></app-slider> -->\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/nav/nav.component.css":
/*!**********************************************!*\
  !*** ./src/app/header/nav/nav.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentP{\r\n    overflow: hidden;\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 3;   \r\n}\r\n\r\n.content {\r\n    width: 100%;\r\n    height: 7vh;\r\n    background-color: #475498;\r\n    box-shadow: 0 0 10px #000;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    flex-direction: row;\r\n    z-index: 1;\r\n}\r\n\r\n.logo {\r\n    width: 5%;\r\n    height: 7vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#logo {\r\n    height:6vh;\r\n}\r\n\r\n.info{\r\n    height:4vh;\r\n    -webkit-filter: brightness(0) invert(1);\r\n            filter: brightness(0) invert(1);\r\n}\r\n\r\n.menu {\r\n    width: 70%;\r\n    height: 7vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.navBar {\r\n    color: white;\r\n    text-decoration: none;\r\n    padding: 2.4vh;\r\n    font-size: 2.2vh;\r\n}\r\n\r\n.navBar:hover, .sabmenu a:hover {\r\n    background-color: #5e6bab;\r\n}\r\n\r\n.active-link{\r\n    background-color: #8490ca;\r\n}\r\n\r\n.search {\r\n    width: 10%;\r\n    height: 7vh;\r\n    display: flex;\r\n    /* flex-direction:column; */\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n#site_search{\r\n    display: none;\r\n    position:relative;\r\n    height: 6vh;\r\n    border-radius: 5%;\r\n    padding-left:10px; \r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.dropdown{\r\n    width: 5%;\r\n    height: 10vh;\r\n    display: none;\r\n}\r\n\r\n.dropdown img{\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    right: 0vw;\r\n    top: 0vh;\r\n    height: 7vh;\r\n    z-index: 500;\r\n}\r\n\r\n.content+div{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.sabmenu {\r\n    display: none;\r\n    overflow:auto;\r\n    position: relative;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    background-color:  #475498; \r\n    height: 100vh;\r\n}\r\n\r\n#sabmenuP{\r\n    display: none;\r\n    position: fixed;\r\n    overflow: auto;\r\n    width: 100%;\r\n    height: 100vh;\r\n    z-index:4;\r\n}\r\n\r\n.a2{\r\n    font-size: 5vh; \r\n    letter-spacing: -1px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    text-align: center; \r\n    display:block;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#sabmenu a {\r\n    width: 100%;\r\n}\r\n\r\n#sp{ display:inline-block;\r\n    width:73px;\r\n  height:60.5px;\r\n    background:url('sp.svg');\r\n}\r\n\r\n#sp:hover{\r\n    background-position:0vh -7vh; \r\n}\r\n\r\n#sp1{ \r\n    display:inline-block;\r\n    width:73px;\r\n  height:60.5px;\r\n    background-image:url('sp.svg');\r\n    background-position:-60.88px 0px ;\r\n}\r\n\r\n#sp1:hover{\r\n    background-position:-60.8px -60.5px ;\r\n}\r\n\r\n#netWork{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#close{\r\n    display: none;\r\n    height: 90vh;\r\n    width: 70%;    \r\n}\r\n\r\n#nav-icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content:center;\r\n    width: 6.4vh;\r\n    height: 7vh;\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    transition: .5s ease-in-out;\r\n    cursor: pointer;\r\n  }\r\n\r\n#nav-icon span {\r\n    position: absolute;\r\n    height: 1vh;\r\n    width: 100%;\r\n    background: #fff;\r\n    border-radius: 9px;\r\n    opacity: 1;\r\n    left: 0;\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    transition: .25s ease-in-out;\r\n  }\r\n\r\n#nav-icon span:nth-child(1) {\r\n    top: 1vh;\r\n    -webkit-transform-origin: left center;\r\n    transform-origin: left center;\r\n  }\r\n\r\n#nav-icon span:nth-child(2) {\r\n    top: 3vh;\r\n    -webkit-transform-origin: left center;\r\n    transform-origin: left center;\r\n  }\r\n\r\n#nav-icon span:nth-child(3) {\r\n    top: 5vh;\r\n    -webkit-transform-origin: left center;\r\n    transform-origin: left center;\r\n  }\r\n\r\n#nav-icon.open span:nth-child(1) {\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    top: 0.5vh;\r\n    left: 1vh;\r\n  }\r\n\r\n#nav-icon.open span:nth-child(2) {\r\n    width: 0%;\r\n    opacity: 0;\r\n  }\r\n\r\n#nav-icon.open span:nth-child(3) {\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n    top: 5vh;\r\n    left: 1vh;\r\n  }\r\n\r\n@media(max-width:1024px){\r\n\r\n    #site_search{\r\n        width: 150px;\r\n        font-size: 18px;\r\n    }\r\n\r\n.content {\r\n    justify-content: space-between;\r\n}\r\n\r\n.logo {\r\n    width: 30vw;\r\n    justify-content: center;\r\n}\r\n\r\n.search {\r\n    width: 30vw;\r\n    justify-content: center;\r\n}\r\n\r\n.dropdown {\r\n    width: 30vw;\r\n    height: 7vh;\r\n    justify-content: center;\r\n}\r\n\r\n.menu {\r\n    display: none;\r\n}\r\n\r\n.navBar{\r\n    width: 0px;\r\n}\r\n\r\n.sabmenu {\r\n    display: block;\r\n}\r\n\r\n#sabmenuP{\r\n    width: 100%;\r\n}\r\n\r\n#close{\r\n    width: 0;\r\n}\r\n\r\n.sabmenu a{\r\n    font-size: 5vh;\r\n}\r\n\r\n.dropdown{\r\n    display: flex;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n\r\n\r\n}"

/***/ }),

/***/ "./src/app/header/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/header/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contentP\" [@start]>\r\n<div class=\"content\" id=\"nav\">\r\n    <div class=\"logo\">\r\n        <a routerLink=\"\" (click)=\"onActivate($event)\"><img id=\"logo\" src=\"../../../assets/images/logo.png\" alt=\"\"></a>\r\n    </div>\r\n    <div class=\"menu\" (click)=\"onActivate($event)\">\r\n        <!-- <a class=\"navBar\" routerLink=\"\" >Home</a> -->\r\n        <!-- <a class=\"navBar\" routerLink=\"/trend\" >Trend</a> -->\r\n        <a class=\"navBar\" routerLink=\"/mobile\"  routerLinkActive=\"active-link\" >Mobile</a>\r\n        <a class=\"navBar\" routerLink=\"/tablet\"  routerLinkActive=\"active-link\">Tablet</a>\r\n        <a class=\"navBar\" routerLink=\"/accessories\"  routerLinkActive=\"active-link\">Accessories</a>\r\n        <a class=\"navBar\" routerLink=\"/contacts\"  routerLinkActive=\"active-link\">Contacts</a>\r\n        <a class=\"navBar\" routerLink=\"/about\" routerLinkActive=\"active-link\" >About</a>\r\n        <a class=\"navBar\" routerLink=\"/add\"  routerLinkActive=\"active-link\">Add</a>\r\n        <a class=\"navBar\" routerLink=\"/shoppingCart\"  routerLinkActive=\"active-link\"><img class=\"info\"  src=\"../../assets/images/shopping-cart.png\" alt=\"\"></a>\r\n        <a class=\"navBar\" routerLink=\"/compare\"  routerLinkActive=\"active-link\"><img class=\"info\"  src=\"../../assets/images/compare.png\" alt=\"\"></a>\r\n        <a class=\"navBar\" routerLink=\"/like\"  routerLinkActive=\"active-link\"><img class=\"info\"  src=\"../../assets/images/like.png\" alt=\"\"></a>\r\n    </div> \r\n    <div class=\"search\">\r\n        <img id=\"logo\" (click)=\"startSearch()\" src=\"../../../assets/images/smartphone.png\" alt=\"\">\r\n        <form role=\"search\">\r\n            <div class=\"search-control\">\r\n                <input [@start3]='state1' type=\"search\" id=\"site_search\" name=\"q\"\r\n                       placeholder=\"Search the site...\"\r\n                       aria-label=\"Search through site content\">\r\n               \r\n            </div>\r\n        </form>\r\n    </div>\r\n    \r\n    <div class=\"dropdown\"   >\r\n\r\n        <div id=\"nav-icon\" (click)=\"startAnime()\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </div>\r\n        \r\n    </div> \r\n</div>\r\n\r\n<div>\r\n    <div (click)=\"startAnime()\"  id=\"close\"></div>\r\n    <div id=\"sabmenuP\" (click)=\"onActivate($event)\">\r\n    <div class=\"sabmenu\" [@start2]='state' (click)=\"startAnime()\" id=\"sabMenuId\">\r\n        <a class=\"a2\" routerLink=\"\">Home</a>\r\n        <!-- <a class=\"a2\" routerLink=\"/trend\">Trend</a> -->\r\n        <a class=\"a2\" routerLink=\"/shoppingCart\"  routerLinkActive=\"active-link\"><img class=\"info\"  src=\"../../assets/images/shopping-cart.png\" alt=\"\"></a>\r\n        <a class=\"a2\" routerLink=\"/compare\"  routerLinkActive=\"active-link\"><img class=\"info\"  src=\"../../assets/images/compare.png\" alt=\"\"></a>\r\n        <a class=\"a2\" routerLink=\"/like\"  routerLinkActive=\"active-link\"><img class=\"info\"  src=\"../../assets/images/like.png\" alt=\"\"></a>\r\n        <a class=\"a2\" routerLink=\"/mobile\">Mobile</a>\r\n        <a class=\"a2\" routerLink=\"/tablet\">Tablets</a>\r\n        <a class=\"a2\" routerLink=\"/accessories\">Accessories</a>\r\n        <a class=\"a2\" routerLink=\"/contacts\">Contacts</a>\r\n        <a class=\"a2\" routerLink=\"/about\">About</a>\r\n    <div id=\"netWork\">\r\n        <div id=\"sp\"></div>\r\n        <div id=\"sp1\"></div>\r\n        <div id=\"sp2\"></div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/header/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/header/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_animations/animation */ "./src/app/_animations/animation.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(titleService) {
        this.titleService = titleService;
        this.state = 'go';
        this.state1 = "go1";
        this.imgSrc = "../../../assets/images/menu.png";
        this.flag = true;
        this.flag2 = true;
    }
    NavComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    NavComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
    };
    NavComponent.prototype.ngOnInit = function () {
        // menu open and close
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#nav-icon').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).toggleClass('open');
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('#sabMenuId').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#nav-icon').toggleClass('open');
            });
        });
        // end
        window.scrollBy(0, 1); //position fixed  միշտ  չի որ  աշխատում   է  դրա  համար գրում ենք դա
        this.search = document.getElementById("site_search");
        this.div1 = document.getElementById("sabmenuP");
        this.close = document.getElementById("close");
    };
    NavComponent.prototype.startSearch = function () {
        var _this = this;
        if (this.flag2) {
            //  this.state='togo';
            this.state1 = "togo1";
            this.search.style.display = "block";
        }
        else {
            // this.state='go';
            this.state1 = 'go1';
            setTimeout(function () {
                if (_this.flag)
                    _this.search.style.display = "none";
            }, 1000);
        }
        this.flag2 = !this.flag2;
    };
    NavComponent.prototype.startAnime = function () {
        if (this.flag) {
            this.state = 'togo';
            this.imgSrc = "../../../assets/images/cancel-music.png";
            this.div1.style.display = "block";
            this.close.style.display = "block";
        }
        else {
            this.imgSrc = "../../../assets/images/menu.png";
            this.state = 'go';
            this.close.style.display = "none";
            this.none();
            //  this.div1.style.display="none";
        }
        this.flag = !this.flag;
    };
    NavComponent.prototype.none = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.flag)
                _this.div1.style.display = "none";
        }, 800);
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            animations: [_animations_animation__WEBPACK_IMPORTED_MODULE_1__["start"], _animations_animation__WEBPACK_IMPORTED_MODULE_1__["start1"], _animations_animation__WEBPACK_IMPORTED_MODULE_1__["start2"], _animations_animation__WEBPACK_IMPORTED_MODULE_1__["start3"]],
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/header/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/header/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/header/slider/slider.component.css":
/*!****************************************************!*\
  !*** ./src/app/header/slider/slider.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sliderPics {\r\n    width: 100%;\r\n    height: 63vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n    margin-top: 7vh;\r\n}\r\n\r\n#sliderPics {\r\n    width: 100%;\r\n    margin-top: 7vh;\r\n    height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/slider/slider.component.html":
/*!*****************************************************!*\
  !*** ./src/app/header/slider/slider.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sliderPics\" [ngStyle]=\"{ 'background-image': 'url(' + sliderPicsUrl[i] + ')'}\"> </div>\r\n "

/***/ }),

/***/ "./src/app/header/slider/slider.component.ts":
/*!***************************************************!*\
  !*** ./src/app/header/slider/slider.component.ts ***!
  \***************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.i = 0;
        this.sliderPicsUrl = [
            '../../../assets/images/slider/slide1.jpg',
            '../../../assets/images/slider/slide2.jpg',
            '../../../assets/images/slider/slide3.jpg',
            '../../../assets/images/slider/slide4.jpg',
        ];
    }
    SliderComponent.prototype.ngOnInit = function () {
        this.slideTime();
    };
    SliderComponent.prototype.slideTime = function () {
        var _this = this;
        this.sliderTime = setInterval(function () {
            if (_this.i == _this.sliderPicsUrl.length - 1) {
                _this.i = 0;
            }
            else {
                _this.i++;
            }
        }, 3000);
    };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/header/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/header/slider/slider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/like/like.component.css":
/*!*****************************************!*\
  !*** ./src/app/like/like.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main { \r\n    margin-top:10vh;\r\n    min-height: 60vh;    \r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n.info{\r\n    margin-top:10vh;\r\n    margin-left: 1vw;\r\n}\r\n.info button{\r\n    width: 500px;\r\n    font-size: 15px;\r\n    background: #475498;\r\n    color:white;\r\n    padding:5px;\r\n    border-radius: 5%;\r\n    cursor: pointer;\r\n   \r\n}\r\n.info button:hover{\r\n    background:#011992 ;\r\n    \r\n}\r\n.info h1{ \r\n    \r\n    font-size: 20px;\r\n    color:#475498;\r\n}\r\n.content {\r\n    margin-top: 2vh;\r\n    width: 80%;\r\n    z-index: 0;\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    justify-content: space-around;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    height: auto;\r\n}\r\n@media(max-width:767px){\r\n    .content {\r\n        width: 90%;\r\n    }\r\n    .info button{\r\n        width: 98vw;\r\n    }\r\n        .info{\r\n            width: 98vw;\r\n        }\r\n}\r\n"

/***/ }),

/***/ "./src/app/like/like.component.html":
/*!******************************************!*\
  !*** ./src/app/like/like.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"info\">\n        <h1  *ngIf=\"!this.productsService.numberLike\">Ձեզ  դուր  եկած սարքավորոմներ դեռ  չկան </h1>\n        <h1 *ngIf=\"this.productsService.numberLike\">Հավանած սարքավորոմների  քանակը {{this.productsService.numberLike}}</h1>\n        <h1 *ngIf=\"this.productsService.priceLike\">Հավանած արքավորոմների ընդհանուր գումարը կազմում է {{this.productsService.priceLike}} $ </h1>\n        <button routerLink=\"/shoppingCart\" (click)=\"addShoping()\" *ngIf=\"this.productsService.priceLike\">Բոլոր հավանած   սարքավորոմները  ավելացնել  զամբյուղի մեջ</button>\n        </div>\n        <div class=\"main\">\n            \n          <div class=\"content\">\n             \n              <app-product-card *ngFor=\"let cards of product\" [card]='cards'></app-product-card>\n          </div>\n          </div>\n          "

/***/ }),

/***/ "./src/app/like/like.component.ts":
/*!****************************************!*\
  !*** ./src/app/like/like.component.ts ***!
  \****************************************/
/*! exports provided: LikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeComponent", function() { return LikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../products.service */ "./src/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LikeComponent = /** @class */ (function () {
    function LikeComponent(productsService) {
        this.productsService = productsService;
    }
    LikeComponent.prototype.ngOnInit = function () {
        this.product = this.productsService.like;
    };
    LikeComponent.prototype.addShoping = function () {
        for (var _i = 0, _a = this.product; _i < _a.length; _i++) {
            var card = _a[_i];
            if (this.productsService.shoppingCart.indexOf(card) == -1) {
                card.shopping_cart = !card.shopping_cart;
                this.productsService.numberShopping++;
                this.productsService.priceShopping += parseInt(card.price.slice(2));
                this.productsService.shoppingCart.push(card);
            }
        }
    };
    LikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-like',
            template: __webpack_require__(/*! ./like.component.html */ "./src/app/like/like.component.html"),
            styles: [__webpack_require__(/*! ./like.component.css */ "./src/app/like/like.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "./src/app/product-add/product-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/product-add/product-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n}\r\n\r\n.component {\r\n    position: relative;\r\n    top: 10vh;\r\n    width: 80%;\r\n\t\tmargin: 0px auto;\r\n\t\tmin-height: 70vh;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.example-right-align {\r\n  text-align: left;\r\n}\r\n\r\ninput.example-right-align::-webkit-outer-spin-button,\r\ninput.example-right-align::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n\r\ninput.example-right-align {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.mat-radio-button {\r\n    margin-top: 15px;\r\n    padding: 8px;\r\n}\r\n\r\n.logoContainer{\r\n\twidth:140px;\r\n\theight:151px;\r\n\tmargin: 15px auto 0 auto;\r\n\t/*background: url(http://img1.wikia.nocookie.net/__cb20130901213905/battlebears/images/9/98/Team-icon-placeholder.png) no-repeat 0 0;*/\r\n\tpadding: 11px 10px 21px 10px;\r\n\ttext-align: center;\r\n\tline-height: 120px;\r\n}\r\n\r\n.logoContainer img{\r\n\tmax-width:100%;\r\n}\r\n\r\n.fileContainer{\r\n\tbackground:#ccc;/* you can give it background img as well*/\r\n\twidth: 202px;\r\n\theight: 31px;\r\n\toverflow:hidden;\r\n\tposition:relative;\r\n\tfont-size:16px;\r\n\tline-height: 31px;\r\n\tcolor:#434343;\r\n\tpadding: 0px 41px 0 53px;\r\n\tmargin: 0 auto 60px auto;\r\n\tcursor: pointer !important;\r\n}\r\n\r\n.fileContainer span{\r\n\toverflow:hidden;\r\n\tdisplay:block;\r\n\twhite-space:nowrap;\r\n\ttext-overflow:ellipsis;\r\n\tcursor: pointer;\r\n}\r\n\r\n.fileContainer input[type=\"file\"]{\r\n\topacity:0;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\twidth:100%;\r\n\theight:100%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tposition: absolute;\r\n\tcursor: pointer;\r\n}\r\n\r\n.img-ul {\r\n  --active-color: #475498;\r\n\r\n}\r\n\r\n@media (max-width:768px){\r\n  .component{\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/product-add/product-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/product-add/product-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\r\n\r\n\r\n  <mat-vertical-stepper linear #stepper>\r\n      <mat-step [stepControl]=\"firstFormGroup\">\r\n        <form [formGroup]=\"firstFormGroup\">\r\n          <ng-template matStepLabel>General Information</ng-template>\r\n          <div class=\"example-container\">\r\n              <mat-radio-group  [(ngModel)]=\"i\" [ngModelOptions]=\"{standalone: true}\" > \r\n                  <span matPrefix>Type of Product &nbsp;</span>                  \r\n                <mat-radio-button value=\"0\" checked=true  >Mobile</mat-radio-button>\r\n                <mat-radio-button value=\"1\">Tablet</mat-radio-button>\r\n                <mat-radio-button value=\"2\">Accessories</mat-radio-button>\r\n              </mat-radio-group>\r\n  \r\n              <image-upload></image-upload>\r\n           \r\n             \r\n                <mat-form-field class=\"example-full-width\"> \r\n                <mat-select placeholder=\"Company\"   [(ngModel)]=\"company\" formControlName=\"firstCtrl1\" required>\r\n                  <mat-option></mat-option>\r\n                  <mat-option *ngFor=\"let company of companyList\"  [value]=\"company\">{{company}}</mat-option>\r\n                </mat-select>              \r\n                </mat-form-field>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Model\"   [(ngModel)]=\"model\" formControlName=\"firstCtrl2\" required>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Price\"    type=\"number\"  [(ngModel)]=\"price\" class=\"example-right-align\" formControlName=\"firstCtrl3\" required>\r\n                  <span matPrefix>$&nbsp;</span>\r\n                  <span matSuffix>.00</span>\r\n                </mat-form-field>\r\n              \r\n            </div>\r\n          <div>\r\n            <button mat-button matStepperNext  >Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"secondFormGroup\" [optional]=\"!isOptional\">\r\n        <form [formGroup]=\"secondFormGroup\">\r\n          <ng-template matStepLabel>Characteristics</ng-template>\r\n          <div class=\"example-container\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput  placeholder=\"Model\" [(ngModel)]=\"model\" [ngModelOptions]=\"{standalone: true}\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                  <mat-select  placeholder=\"Announcement Year\" [(ngModel)]=\"year\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option>None</mat-option>\r\n                    <mat-option *ngFor=\"let year of years\" [value]=\"year\">{{year}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                  <mat-select  placeholder=\"Operation System\t\" [(ngModel)]=\"os\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let os of opSystems\"   [value]=\"os\">{{os}}</mat-option>\r\n                  </mat-select>              \r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Screen Type\" \t [(ngModel)]=\"screenType\" [ngModelOptions]=\"{standalone: true}\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Screen Resolution\" [(ngModel)]=\"screenResolution\" [ngModelOptions]=\"{standalone: true}\" >\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"Screen Size\" [(ngModel)]=\"screenSize\" [ngModelOptions]=\"{standalone: true}\"  >\r\n                <span matSuffix>&nbsp; inch</span>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input type=\"number\" class=\"example-right-align\" matInput placeholder=\"Front Camera\" [(ngModel)]=\"frontCamera\" [ngModelOptions]=\"{standalone: true}\">\r\n                <span matSuffix>&nbsp; MP</span>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input type=\"number\" class=\"example-right-align\" matInput placeholder=\"Main Camera\" [(ngModel)]=\"mainCamera\" [ngModelOptions]=\"{standalone: true}\">\r\n                <span matSuffix>&nbsp; MP</span>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"Number of processor cores\t\"  [(ngModel)]=\"numberOfProcessorCores\" [ngModelOptions]=\"{standalone: true}\" >\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"CPU\" [(ngModel)]=\"cpu\" [ngModelOptions]=\"{standalone: true}\" >\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <mat-select placeholder=\"RAM\" [(ngModel)]=\"ram\" [ngModelOptions]=\"{standalone: true}\" >\r\n                  <mat-option>None</mat-option>\r\n                  <mat-option *ngFor=\"let ram of rams\" [value]=\"ram\">{{ram}}</mat-option>\r\n                </mat-select>\r\n                <span matSuffix>&nbsp; GB</span>\r\n              </mat-form-field>\r\n              <mat-radio-group [(ngModel)]=\"memoryCardSlot\" [ngModelOptions]=\"{standalone: true}\"> \r\n                <span matPrefix>Memory Card Slot\t&nbsp;</span>\r\n                <mat-radio-button value=\"yes\" checked=true>Yes</mat-radio-button>\r\n                <mat-radio-button value=\"no\">No</mat-radio-button>\r\n              </mat-radio-group>\r\n              <mat-form-field class=\"example-full-width\">\r\n                  <mat-select placeholder=\"Memory\" [(ngModel)]=\"memory\" [ngModelOptions]=\"{standalone: true}\" >\r\n                      <mat-option>None</mat-option>\r\n                      <mat-option *ngFor=\"let memory of memoryList\" [value]=\"memory\">{{memory}}</mat-option>\r\n                    </mat-select>\r\n                    <span matSuffix>&nbsp; GB</span>\r\n                  </mat-form-field>\r\n              <mat-form-field  [(ngModel)]=\"accessToTheInternet\" [ngModelOptions]=\"{standalone: true}\">\r\n                  <mat-select placeholder=\"Access to the Internet\"   [formControl]=\"accessInet\" multiple>\r\n                    <mat-select-trigger>\r\n                      {{accessInet.value ? accessInet.value[0] : ''}}\r\n                      <span *ngIf=\"accessInet.value?.length > 1\" class=\"example-additional-selection\">\r\n                        (+{{accessInet.value.length - 1}} others)\r\n                      </span>\r\n                    </mat-select-trigger>\r\n                    <mat-option *ngFor=\"let accessInet of accessInetList\" [value]=\"accessInet\" >{{accessInet}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"4G LTE Network range\" [(ngModel)]=\"networkRangeLte4G\" [ngModelOptions]=\"{standalone: true}\">\r\n              </mat-form-field>\r\n              <mat-radio-group [(ngModel)]=\"gps\" [ngModelOptions]=\"{standalone: true}\"> \r\n                <span matPrefix>GPS\t&nbsp;</span>\r\n                <mat-radio-button value=\"yes\" checked=true>Yes</mat-radio-button>\r\n                <mat-radio-button value=\"no\">No</mat-radio-button>\r\n              </mat-radio-group>\r\n              <mat-radio-group  [(ngModel)]=\"bluetooth\" [ngModelOptions]=\"{standalone: true}\"> \r\n                <span matPrefix>Bluetooth\t&nbsp;</span>\r\n                <mat-radio-button value=\"yes\" checked=true>Yes</mat-radio-button>\r\n                <mat-radio-button value=\"no\">No</mat-radio-button>\r\n              </mat-radio-group>\r\n              <mat-radio-group [(ngModel)]=\"wifiNetwork\" [ngModelOptions]=\"{standalone: true}\"> \r\n                <span matPrefix>WiFi Network\t&nbsp;</span>\r\n                <mat-radio-button value=\"yes\" checked=true>Yes</mat-radio-button>\r\n                <mat-radio-button value=\"no\">No</mat-radio-button>\r\n              </mat-radio-group>\r\n              <mat-radio-group [(ngModel)]=\"network3G\" [ngModelOptions]=\"{standalone: true}\"> \r\n                <span matPrefix>3G Network\t&nbsp;</span>\r\n                <mat-radio-button value=\"yes\" checked=true>Yes</mat-radio-button>\r\n                <mat-radio-button value=\"no\">No</mat-radio-button>\r\n              </mat-radio-group>\r\n              <mat-radio-group  [(ngModel)]=\"nfc\" [ngModelOptions]=\"{standalone: true}\"> \r\n                <span matPrefix>NFC\t&nbsp;</span>\r\n                <mat-radio-button value=\"yes\" checked=true>Yes</mat-radio-button>\r\n                <mat-radio-button value=\"no\">No</mat-radio-button>\r\n              </mat-radio-group>\r\n              <mat-radio-group [(ngModel)]=\"networkLte4G\" [ngModelOptions]=\"{standalone: true}\"> \r\n                <span matPrefix>4G LTE Network\t&nbsp;</span>\r\n                <mat-radio-button value=\"yes\" checked=true>Yes</mat-radio-button>\r\n                <mat-radio-button value=\"no\">No</mat-radio-button>\r\n              </mat-radio-group>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput  [(ngModel)]=\"charingConnectorType\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Charing Connector Type\" >\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput [(ngModel)]=\"talkTime\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Talk Time\" >\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput [(ngModel)]=\"batteryType\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Battery Type\" >\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"number\" class=\"example-right-align\" [(ngModel)]=\"batteryCapacity\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Battery Capacity\t\" >\r\n                <span matSuffix>&nbsp; mAh</span>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"number\" class=\"example-right-align\" [(ngModel)]=\"weight\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Weight\t\" >\r\n                <span matSuffix>&nbsp; g</span>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"number\" class=\"example-right-align\" [(ngModel)]=\"thickness\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Thickness\t\" >\r\n                <span matSuffix>&nbsp; mm</span>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"number\" class=\"example-right-align\" [(ngModel)]=\"height\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Height\t\" >\r\n                <span matSuffix>&nbsp; mm</span>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"number\" class=\"example-right-align\" [(ngModel)]=\"width\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Width\t\" >\r\n                <span matSuffix>&nbsp; mm</span>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                  <mat-select placeholder=\"Audio\" [formControl]=\"audioL\" multiple>\r\n                      <mat-select-trigger>\r\n                        {{audioL.value ? audioL.value[0] : ''}}\r\n                        <span *ngIf=\"audioL.value?.length > 1\" class=\"example-additional-selection\">\r\n                          (+{{audioL.value.length - 1}} others)\r\n                        </span>\r\n                      </mat-select-trigger>\r\n                      <mat-option *ngFor=\"let audioL of audioList\" [value]=\"audioL\">{{audioL}}</mat-option>\r\n                    </mat-select>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <mat-select [(ngModel)]=\"simCardQuantity\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"SIM Card Quanitity\">\r\n                  <mat-option>None</mat-option>\r\n                  <mat-option *ngFor=\"let sim of simCards\" [value]=\"sim\">{{sim}}</mat-option>\r\n                </mat-select>\r\n                <span matSuffix>&nbsp; SIM</span>\r\n              </mat-form-field>\r\n            </div>\r\n          <div>\r\n            <button mat-button matStepperPrevious>Back</button>\r\n            <button mat-button matStepperNext (click)=\"add()\" >Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step>\r\n        <ng-template matStepLabel>Done</ng-template>\r\n        You are now done.\r\n        <div>\r\n          <button mat-button matStepperPrevious>Back</button>\r\n          <button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n        </div>\r\n      </mat-step>\r\n    </mat-vertical-stepper>\r\n  \r\n  \r\n  </div> \r\n  "

/***/ }),

/***/ "./src/app/product-add/product-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product-add/product-add.component.ts ***!
  \******************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../products.service */ "./src/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(_formBuilder, productsService) {
        this._formBuilder = _formBuilder;
        this.productsService = productsService;
        this.isEditable = false;
        this.isOptional = false;
        this.i = 0;
        this.company = '';
        this.model = '';
        this.version = '';
        this.os = '';
        this.screenType = '';
        this.screenResolution = '';
        this.screenSize = '';
        this.frontCamera = '';
        this.mainCamera = '';
        this.numberOfProcessorCores = '';
        this.cpu = '';
        this.ram = '';
        this.memoryCardSlot = '';
        this.memory = '';
        this.standartNetwork = '';
        this.accessToTheInternet = '';
        this.networkRangeLte4G = '';
        this.gps = '';
        this.bluetooth = '';
        this.wifiNetwork = '';
        this.network3G = '';
        this.nfc = '';
        this.networkLte4G = '';
        this.charingConnectorType = '';
        this.talkTime = '';
        this.batteryType = '';
        this.batteryCapacity = '';
        this.weight = '';
        this.thickness = '';
        this.height = '';
        this.width = '';
        this.audio = '';
        this.simCardQuantity = '';
        this.addCard = {
            shopping_cart: true,
            compare: true,
            like: true,
            img: '../../assets/images/mobile/s9.png',
            company: this.company,
            model: this.model,
            price: this.price,
            version: this.version,
            year: this.year,
            os: this.os,
            screenType: this.screenType,
            screenResolution: this.screenResolution,
            screenSize: this.screenSize,
            frontCamera: this.frontCamera,
            mainCamera: this.mainCamera,
            numberOfProcessorCores: this.numberOfProcessorCores,
            cpu: this.cpu,
            ram: this.ram,
            memoryCardSlot: this.memoryCardSlot,
            memory: this.memory,
            standartNetwork: this.standartNetwork,
            accessToTheInternet: this.accessToTheInternet,
            networkRangeLte4G: this.networkRangeLte4G,
            gps: this.gps,
            bluetooth: this.bluetooth,
            wifiNetwork: this.wifiNetwork,
            network3G: this.network3G,
            nfc: this.nfc,
            networkLte4G: this.networkLte4G,
            charingConnectorType: this.charingConnectorType,
            talkTime: this.talkTime,
            batteryType: this.batteryType,
            batteryCapacity: this.batteryCapacity,
            weight: this.weight,
            thickness: this.thickness,
            height: this.height,
            width: this.width,
            audio: this.audio,
            simCardQuantity: this.simCardQuantity,
        };
        this.years = [];
        this.opSystems = [];
        this.rams = [0.5];
        this.memoryList = [];
        this.accessInet = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.accessInetList = [];
        this.simCards = [];
        this.audioL = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.audioList = [];
        this.companyList = [];
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            //    firstCtrl0: ['', Validators.required],
            firstCtrl1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstCtrl2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstCtrl3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.secondFormGroup = this._formBuilder.group({});
        for (var i = 2018; i >= 2001; i--) {
            this.years.push(i);
        }
        for (var i = 1; i <= 16; i++) {
            this.rams.push(i);
        }
        this.opSystems.push('Android', 'iOS', 'Windows');
        this.memoryList.push(4, 8, 10, 16, 32, 64, 128, 256);
        this.accessInetList.push('GPRS', 'EDGE');
        this.simCards.push(1, 2, 3);
        this.audioList.push('MP3', 'M4A', '3GA', 'AAC', 'OGG', 'OGA', 'WAV', 'WMA', 'AMR', 'AWB', 'FLAC', 'MID', 'MIDI', 'XFM', 'MXMF', 'IMY', 'RTTTL', 'RTX', 'OTA', 'DFF', 'DSF', 'APE');
        this.companyList.push('Samsung', 'Apple', 'Lenovo', 'Nokia', 'Motorola', 'HTC', 'Microsoft', 'Sony', 'Micromax', 'Fly', 'LG');
    };
    ProductAddComponent.prototype.add = function () {
        this.productsService.product[this.i].push({
            img: '../../assets/images/mobile/s9.png',
            company: this.company,
            model: this.model,
            price: this.price,
            version: this.version,
            year: this.year,
            os: this.os,
            screenType: this.screenType,
            screenResolution: this.screenResolution,
            screenSize: this.screenSize,
            frontCamera: this.frontCamera,
            mainCamera: this.mainCamera,
            numberOfProcessorCores: this.numberOfProcessorCores,
            cpu: this.cpu,
            ram: this.ram,
            memoryCardSlot: this.memoryCardSlot,
            memory: this.memory,
            standartNetwork: this.standartNetwork,
            accessToTheInternet: this.accessToTheInternet,
            networkRangeLte4G: this.networkRangeLte4G,
            gps: this.gps,
            bluetooth: this.bluetooth,
            wifiNetwork: this.wifiNetwork,
            network3G: this.network3G,
            nfc: this.nfc,
            networkLte4G: this.networkLte4G,
            charingConnectorType: this.charingConnectorType,
            talkTime: this.talkTime,
            batteryType: this.batteryType,
            batteryCapacity: this.batteryCapacity,
            weight: this.weight,
            thickness: this.thickness,
            height: this.height,
            width: this.width,
            audio: this.audio,
            simCardQuantity: this.simCardQuantity,
        });
    };
    ProductAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! ./product-add.component.html */ "./src/app/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.css */ "./src/app/product-add/product-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/product-card/product-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-card/product-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Generals resets and unimportant stuff */\r\n* { margin: 0px; padding: 0px; }\r\n/* --- Product Card ---- */\r\n#make-3D-space{\r\n    position: relative;\r\n    -webkit-perspective: 800px;\r\n            perspective: 800px;\r\n    width:240px;\r\n    height:400px;\r\n    position:relative;    \r\n}\r\n#product-card{\r\n\twidth:225px;\r\n\theight:390px;\r\n\tposition:relative;    \r\n\ttop:10px;\r\n\tleft:10px;\t\r\n\toverflow:hidden;\r\n}\r\n#product-card:hover {\r\n\ttop:5px;\r\n\tleft:5px;\r\n\twidth:235px;\r\n\theight:400px;\r\n\tbox-shadow:0px 13px 21px -5px rgba(0, 0, 0, 0.3); \r\n transition:  100ms ease-out; \r\n}\r\n.stats-container{\r\n\tbackground:#fff;\t\r\n\tposition:absolute;\r\n\ttop:296px;\r\n\tleft:0;\r\n\twidth:100%;\r\n\theight:200px;\r\n\tpadding:20px; \r\n transition: all 200ms ease-out;\r\n}\r\n#product-card:hover .stats-container{\r\n\ttop:222px; \r\n transition: all 200ms ease-out; \r\n}\r\n.stats-container .product_name{\r\n\tfont-size:22px;\r\n\tcolor:#393c45;\t\r\n}\r\n.stats-container p{\r\n\tfont-size:16px;\r\n\tcolor:#b1b1b3;\t\r\n\tpadding:2px 0 10px 0;\r\n}\r\n.stats-container .product_price{\r\n\tfloat:right;\r\n\tcolor:#475498;\r\n\tfont-size:22px;\r\n\tfont-weight:600;\r\n}\r\n.image_overlay{\r\n\tposition:absolute;\r\n\ttop:0;\r\n\tleft:0; \r\n\twidth:100%;\r\n\theight:100%;\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\topacity:0;\t\r\n}\r\n#product-card:hover .image_overlay{\r\n\topacity:0.7; \r\n transition: all 200ms ease-out; \r\n}\r\n.product-options{\r\n\tpadding:2px 0 0;\r\n}\r\n.product-options strong{\r\n\tfont-weight:700;\r\n\tcolor:#393c45;\r\n\tfont-size:14px;\r\n}\r\n.product-options span{\t\r\n\tcolor:#969699;\r\n\tfont-size:14px;\r\n\tdisplay:block;\r\n\tmargin-bottom:8px;\r\n}\r\n#view_details{\t\r\n\tposition:absolute;\r\n\ttop:70px;\r\n\tleft:68px;\r\n\tmargin: 0px auto;\r\n\tborder:2px solid #fff;\r\n\tcolor:#fff;\r\n\tfont-size:19px;\r\n\ttext-align:center;\r\n\ttext-transform:uppercase;\r\n\tfont-weight:700;\r\n\tpadding:10px 0;\r\n\twidth:100px;\t\r\n\topacity:0; \r\n transition: all 200ms ease-out; \r\n}\r\n#view_details:hover{\t\r\n\tbackground:#fff;\r\n\tcolor:#475498;\r\n\tcursor:pointer;\r\n\r\n}\r\n#product-card:hover #view_details{\r\n\topacity:1;\r\n\twidth:100px;\r\n\tfont-size:15px;\r\n\tmargin: 0px auto;\r\n\ttop:70px; \r\n transition: all 200ms ease-out; \t\t\r\n}\r\n.productInfo {\r\n\tdisplay:flex;\r\n\tjustify-content: center;\r\n\tflex-direction: row;\r\n\twidth:100%;\r\n}\r\n.productInfo a {\r\n\tmargin: 10px auto;\r\n\twidth: 50px;\r\n\theight: 50px; \r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: row;\r\n}\r\n.productInfo a:hover {\r\n\tbackground-color: #e6e6e6;\r\n}\r\n.info {\r\n\twidth: 25px;\r\n}\r\n.clear {\r\n\tclear: both;\r\n}"

/***/ }),

/***/ "./src/app/product-card/product-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-card/product-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>\r\n\r\n<div class=\"content\" [@startCard]>\r\n<div id=\"make-3D-space\">\r\n    <div id=\"product-card\">\r\n            <img style=\"width: 230px;min-height: 300px;max-height: 400px;\" src='{{ card.img }}' alt=\"\" />\r\n            <div class=\"image_overlay\"></div>\r\n            <div id=\"view_details\" [routerLink]=\"['/product/{card.company + card.model}']\" [queryParams]=\"card\" >More</div>\r\n            <div class=\"stats\">        \t\r\n                <div class=\"stats-container\">\r\n                    <span class=\"product_price\">{{ card.price }}</span>\r\n                    <span class=\"product_name\">{{ card.company }}</span>    \r\n                    <p>{{ card.model }}</p>                                            \r\n                    <div class=\"product-options\">\r\n                    <div class=\"clear\"></div>\r\n                      <div class=\"productInfo\">\r\n                        <a [ngStyle]=\"{'background':shopping_cartColor}\" (click)=\"shopping_cart()\" ><img class=\"info\"  src=\"../../assets/images/shopping-cart.png\" alt=\"\"></a>\r\n                        <a [ngStyle]=\"{'background':compareColor}\"  (click)=\"compare()\" ><img class=\"info\"  src=\"../../assets/images/compare.png\" alt=\"\"></a>\r\n                        <a  [ngStyle]=\"{'background':likeColor}\"  (click)=\"like()\" ><img class=\"info\"  src=\"../../assets/images/like.png\" alt=\"\"></a>\r\n                       \r\n                      </div>\r\n                </div>                       \r\n            </div>\r\n    </div>\t\r\n</div>\t \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-card/product-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-card/product-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_animations/animation */ "./src/app/_animations/animation.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../products.service */ "./src/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(productsService) {
        this.productsService = productsService;
        this.likeColor = "";
        this.shopping_cartColor = "";
        this.compareColor = "";
    }
    ProductCardComponent.prototype.ngOnInit = function () {
        // this.likeId=document.getElementById("like");
        if (!this.card.like) {
            this.likeColor = "#475498";
        }
        if (!this.card.shopping_cart) {
            this.shopping_cartColor = "#475498";
        }
        if (!this.card.compare) {
            this.compareColor = "#475498";
        }
    };
    ProductCardComponent.prototype.shopping_cart = function () {
        if (this.card.shopping_cart) {
            this.productsService.shoppingCart.push(this.card);
            this.productsService.numberShopping++;
            this.productsService.priceShopping += parseInt(this.card.price.slice(2));
            this.shopping_cartColor = "#475498";
            this.card.shopping_cart = !this.card.shopping_cart;
        }
        else {
            this.productsService.shoppingCart.splice(this.productsService.shoppingCart.indexOf(this.card), 1);
            this.productsService.numberShopping--;
            this.productsService.priceShopping -= parseInt(this.card.price.slice(2));
            this.shopping_cartColor = "";
            this.card.shopping_cart = !this.card.shopping_cart;
        }
    };
    ProductCardComponent.prototype.compare = function () {
        if (this.card.compare) {
            this.productsService.compare.push(this.card);
            this.compareColor = "#475498";
            this.card.compare = !this.card.compare;
        }
        else {
            this.productsService.compare.splice(this.productsService.compare.indexOf(this.card), 1);
            this.compareColor = "";
            this.card.compare = !this.card.compare;
        }
    };
    ProductCardComponent.prototype.like = function () {
        if (this.card.like) {
            this.productsService.like.push(this.card);
            this.productsService.numberLike++;
            this.productsService.priceLike += parseInt(this.card.price.slice(2));
            this.likeColor = "#475498";
            this.card.like = !this.card.like;
        }
        else {
            this.productsService.like.splice(this.productsService.like.indexOf(this.card), 1);
            this.productsService.numberLike--;
            this.productsService.priceLike -= parseInt(this.card.price.slice(2));
            this.likeColor = "";
            this.card.like = !this.card.like;
        }
    };
    ProductCardComponent.prototype.moreEvent = function (event) {
        return this.card;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "card", void 0);
    ProductCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/product-card/product-card.component.html"),
            animations: [_animations_animation__WEBPACK_IMPORTED_MODULE_1__["startCard"]],
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/product-page/product-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-page/product-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border: 0px;\r\n}\r\n\r\n.component {\r\n    width: 100%;\r\n    height: auto;\r\n    margin: 0px auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    min-height: 70vh;\r\n}\r\n\r\n.pSection1 {\r\n    padding-top:10vh; \r\n    margin:0px auto;\r\n    width: 80%;\r\n    height: 70vh;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: row;\r\n}\r\n\r\n.pSection2 {\r\n    width: 80%;\r\n    margin: 0px auto;\r\n    height: auto;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: row;\r\n    position: relative;\r\n    top: 50px;\r\n}\r\n\r\n.pPhoto {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    width: 50%;\r\n    background-image: url('s9.png');\r\n    background-size: auto 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.pInfo {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    width: 50%;\r\n}\r\n\r\n.table .thead-dark th {\r\n    border-color: #475498;\r\n    background-color: #475498;\r\n    font-weight: bold; \r\n}\r\n\r\n.pPrice {\r\n    color:#475498;\r\n    font-size:22px;\r\n    font-weight:600;\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n\r\n@media (max-width:900px){\r\n    .pSection1 {\r\n        width: 100%;\r\n        height: auto;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    .pSection2 {\r\n        width: 100%;\r\n    }\r\n    .pPhoto {\r\n        width: 90%;\r\n        height: 80vmin;\r\n    }\r\n    .pInfo h2 {\r\n        padding: 20px;\r\n        text-align: center;\r\n    }\r\n    .pInfo {\r\n        width: 90%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/product-page/product-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-page/product-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\r\n    <div class=\"pSection1\">\r\n        <div class=\"pPhoto\" [ngStyle]=\"{ 'background-image': 'url(' + card.img + ')'}\"> </div>\r\n        <div class=\"pInfo\">\r\n            <table>\r\n                <tr>\r\n                    <td><h2 style=\"font-weight: bold;\" >{{ card.company }} {{ card.model }}</h2></td>\r\n                    <td class=\"pPrice\">{{ card.price }}</td>\r\n                </tr>\r\n            </table>\r\n                \r\n\r\n            <table class=\"table\" style=\"margin-top: 50px;\">\r\n            <thead class=\"thead-light\">\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngIf=\"card.ram\">\r\n                <th scope=\"row\">RAM</th>\r\n                <td>{{ card.ram }}</td>\r\n                </tr>\r\n                <tr *ngIf=\"card.year\">\r\n                <th scope=\"row\">Announcement Year</th>\r\n                <td>{{ card.year }}</td>\r\n                </tr>\r\n                <tr *ngIf=\"card.screenResolution\">\r\n                <th scope=\"row\">Screen Resolution</th>\r\n                <td>{{ card.screenResolution }}</td>\r\n                </tr>\r\n                <tr *ngIf=\"card.screenSize\">\r\n                <th scope=\"row\">Screen Size</th>\r\n                <td>{{ card.screenSize }}</td>\r\n                </tr>\r\n                <tr *ngIf=\"card.colors\">\r\n                <th scope=\"row\">Colors</th>\r\n                <td>\r\n                    <i style=\"color:#000000\" class=\"material-icons\">lens</i>\r\n                    <i style=\"color:#808080\" class=\"material-icons\">lens</i>\r\n                    <i style=\"color:#551ABB\" class=\"material-icons\">lens</i>\r\n                    <i style=\"color:#ffd700\" class=\"material-icons\">lens</i>\r\n                </td>\r\n                </tr>\r\n            </tbody>\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"pSection2\">\r\n\r\n        <table class=\"table\">\r\n        <thead class=\"thead-dark\">\r\n            <tr class=\"thead-dark\">\r\n                <th scope=\"col\" colspan=\"2\" *ngIf=\"card.year\">General</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr class=\"parent\" *ngIf=\"card.version\">\r\n                <th scope=\"row\">Model</th>\r\n                <td>{{ card.version }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.year\"> \r\n                <th scope=\"row\">Announcement Year</th>\r\n                <td>{{ card.year }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.os\">\r\n                <th scope=\"row\">Operation System</th>\r\n                <td>{{ card.os }}</td>\r\n            </tr>\r\n            <tr class=\"thead-dark\">\r\n                <th scope=\"col\" colspan=\"2\" *ngIf=\"card.year\">Display</th>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.screenType\">\r\n                <th scope=\"row\">Screen Type</th>\r\n                <td>{{ card.screenType }} </td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.screenResolution\">\r\n                <th scope=\"row\">Screen Resolution</th>\r\n                <td>{{ card.screenResolution }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.screenSize\">\r\n                <th scope=\"row\">Screen Size</th>\r\n                <td>{{ card.screenSize }}</td>\r\n            </tr>\r\n            <tr class=\"thead-dark\">\r\n                <th scope=\"col\" colspan=\"2\" *ngIf=\"card.year\">Camera</th>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.frontCamera\">\r\n                <th scope=\"row\">Front Camera</th>\r\n                <td>{{ card.frontCamera }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.mainCamera\">\r\n                <th scope=\"row\">Main Camera</th>\r\n                <td>{{ card.mainCamera }}</td>\r\n            </tr>\r\n            <tr class=\"thead-dark\">\r\n                <th scope=\"col\" colspan=\"2\" *ngIf=\"card.year\">Memory & CPU</th>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.numberOfProcessorCores\"> \r\n                <th scope=\"row\">Number of processor cores</th>\r\n                <td>{{ card.numberOfProcessorCores }} </td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.cpu\">\r\n                <th scope=\"row\">CPU</th>\r\n                <td>{{ card.cpu }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.ram\">\r\n                <th scope=\"row\">RAM</th>\r\n                <td>{{ card.ram }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.memoryCardSlot\">\r\n                <th scope=\"row\">Memory Card Slot</th>\r\n                <td>{{ card.memoryCardSlot }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.memory\">\r\n                <th scope=\"row\">Memory</th>\r\n                <td>{{ card.memory }}</td>\r\n            </tr>\r\n            <tr class=\"thead-dark\">\r\n                <th scope=\"col\" colspan=\"2\" *ngIf=\"card.year\">Network</th>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.standartNetwork\">\r\n                <th scope=\"row\">Standart Network</th>\r\n                <td>{{ card.standartNetwork }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.accessToTheInternet\">\r\n                <th scope=\"row\">Access to the Internet</th>\r\n                <td>{{ card.accessToTheInternet }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.networkRangeLte4G\">\r\n                <th scope=\"row\">4G LTE Network range</th>\r\n                <td>{{ card.networkRangeLte4G }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.gps\">\r\n                <th scope=\"row\">GPS</th>\r\n                <td>{{ card.gps }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.bluetooth\">\r\n                <th scope=\"row\">Bluetooth</th>\r\n                <td>{{ card.bluetooth }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.wifiNetwork\">\r\n                <th scope=\"row\">WiFi Network</th>\r\n                <td>{{ card.wifiNetwork }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.network3G\">\r\n                <th scope=\"row\">3G Network</th>\r\n                <td>{{ card.network3G }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.nfc\">\r\n                <th scope=\"row\">NFC</th>\r\n                <td>{{ card.nfc }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.networkLte4G\">\r\n                <th scope=\"row\">4G LTE Network</th>\r\n                <td>{{ card.networkLte4G }}</td>\r\n            </tr>\r\n            <tr class=\"thead-dark\">\r\n                <th scope=\"col\" colspan=\"2\" *ngIf=\"card.year\">Power</th>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.charingConnectorType\">\r\n                <th scope=\"row\">Charing Connector Type</th>\r\n                <td>{{ card.charingConnectorType }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.talkTime\">\r\n                <th scope=\"row\">Talk Time</th>\r\n                <td>{{ card.talkTime }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.batteryType\">\r\n                <th scope=\"row\">Battery Type</th>\r\n                <td>{{ card.batteryType }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.batteryCapacity\">\r\n                <th scope=\"row\">Battery Capacity</th>\r\n                <td>{{ card.batteryCapacity }}</td>\r\n            </tr>\r\n            <tr class=\"thead-dark\">\r\n                <th scope=\"col\" colspan=\"2\" *ngIf=\"card.year\">Other</th>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.weight\">\r\n                <th scope=\"row\">Weight</th>\r\n                <td>{{ card.weight }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.thickness\">\r\n                <th scope=\"row\">Thickness</th>\r\n                <td>{{ card.thickness }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.height\">\r\n                <th scope=\"row\">Height</th>\r\n                <td>{{ card.height }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.width\">\r\n                <th scope=\"row\">Width</th>\r\n                <td>{{ card.width }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.audio\">\r\n                <th scope=\"row\">Audio</th>\r\n                <td>{{ card.audio }}</td>\r\n            </tr>\r\n            <tr class=\"parent\" *ngIf=\"card.simCardQuantity\">\r\n                <th scope=\"row\">SIM Card Quanitity</th>\r\n                <td>{{ card.simCardQuantity }}</td>\r\n            </tr>\r\n            \r\n        </tbody>\r\n        </table>\r\n    \r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-page/product-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-page/product-page.component.ts ***!
  \********************************************************/
/*! exports provided: ProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function() { return ProductPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductPageComponent = /** @class */ (function () {
    function ProductPageComponent(route) {
        var _this = this;
        this.route = route;
        this.newTitle = 'Yo';
        this.route.queryParams.subscribe(function (params) {
            _this.card = params;
        });
    }
    ProductPageComponent.prototype.ngOnInit = function () {
        // $("#table > tbody > tr").has('td:empty').hide();
        // $("'.thead-dark' ").parent().hide()
    };
    ProductPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-page',
            inputs: ["card"],
            template: __webpack_require__(/*! ./product-page.component.html */ "./src/app/product-page/product-page.component.html"),
            styles: [__webpack_require__(/*! ./product-page.component.css */ "./src/app/product-page/product-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProductPageComponent);
    return ProductPageComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main { \r\n    margin-top:10vh;\r\n    min-height: 60vh;    \r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n.info{\r\n    margin-top:10vh;\r\n    margin-left: 1vw;\r\n}\r\n.info button{\r\n    width: 355px;\r\n    font-size: 20px;\r\n    background: #475498;\r\n    color:white;\r\n    padding:5px;\r\n    border-radius: 5%;\r\n    cursor: pointer;\r\n   \r\n}\r\n.info button:hover{\r\n    background:#011992 ;\r\n    \r\n}\r\n.info h1{ \r\n    \r\n    font-size: 20px;\r\n    color:#475498;\r\n}\r\n.content {\r\n    margin-top: 2vh;\r\n    width: 80%;\r\n    z-index: 0;\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    justify-content: space-around;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    height: auto;\r\n}\r\n@media(max-width:767px){\r\n    .content {\r\n        width: 90%;\r\n    }\r\n    .info button{\r\n        width: 98vw;\r\n    }\r\n        .info{\r\n            width: 98vw;\r\n        }\r\n}\r\n"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"info\">\n<h1  *ngIf=\"!this.productsService.numberShopping\">Ընտրված սարքավորոմներ դեռ  չկան </h1>\n<h1 *ngIf=\"this.productsService.numberShopping\">Ընտրված  սարքավորոմների  քանակը {{this.productsService.numberShopping}}</h1>\n<h1 *ngIf=\"this.productsService.priceShopping\">Ընդհանոր գումար կազմում է {{this.productsService.priceShopping}} $ </h1>\n<button *ngIf=\"this.productsService.priceShopping\">Կատարել վճարում</button>\n</div>\n<div class=\"main\">\n    \n  <div class=\"content\">\n     \n      <app-product-card *ngFor=\"let cards of product\" [card]='cards'></app-product-card>\n  </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../products.service */ "./src/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(productsService) {
        this.productsService = productsService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.product = this.productsService.shoppingCart;
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/trend/trend.component.css":
/*!*******************************************!*\
  !*** ./src/app/trend/trend.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trend/trend.component.html":
/*!********************************************!*\
  !*** ./src/app/trend/trend.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  trend works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/trend/trend.component.ts":
/*!******************************************!*\
  !*** ./src/app/trend/trend.component.ts ***!
  \******************************************/
/*! exports provided: TrendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendComponent", function() { return TrendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrendComponent = /** @class */ (function () {
    function TrendComponent() {
    }
    TrendComponent.prototype.ngOnInit = function () {
    };
    TrendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trend',
            template: __webpack_require__(/*! ./trend.component.html */ "./src/app/trend/trend.component.html"),
            styles: [__webpack_require__(/*! ./trend.component.css */ "./src/app/trend/trend.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrendComponent);
    return TrendComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/products.service.ts":
/*!*********************************!*\
  !*** ./src/products.service.ts ***!
  \*********************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsService = /** @class */ (function () {
    function ProductsService() {
        this.numberShopping = 0;
        this.priceShopping = 0;
        this.numberLike = 0;
        this.priceLike = 0;
        this.shoppingCart = [];
        this.compare = [];
        this.like = [];
        this.mobile = [
            { shopping_cart: true,
                compare: true,
                like: true,
                img: '../../assets/images/mobile/s9.png',
                company: 'Samsung',
                model: 'Galaxy S9',
                price: '$ 1199',
                version: 'Samsung G955',
                year: '2018',
                os: 'Android 8.0',
                screenType: 'Super AMOLED',
                screenResolution: '2960x1440',
                screenSize: '5.8 inch',
                frontCamera: '8 MP',
                mainCamera: '12 MP',
                numberOfProcessorCores: '8',
                cpu: 'Octa-Core, 2.7GHz, 1.7GHz',
                ram: '4 GB',
                memoryCardSlot: 'Yes',
                memory: '64 GB',
                standartNetwork: 'GSM850, GSM900, DCS1800, PCS1900',
                accessToTheInternet: 'GPRS, EDGE',
                networkRangeLte4G: 'B1(2100), B2(1900), B3(1800), B4(AWS), B5(850), B7(2600), B8(900), B12(700), B13(700), B17(700), B18(800), B19(800), B20(800), B25(1900), B26(850), B28(700), B32(1500), B66(AWS-3)',
                gps: 'Yes',
                bluetooth: 'Yes',
                wifiNetwork: 'Yes',
                network3G: 'Yes',
                nfc: 'Yes',
                networkLte4G: 'Yes',
                charingConnectorType: 'USB Type-C',
                talkTime: 'Up to 22 h (3G)',
                batteryType: 'Non-Removalbe Li-Ion',
                batteryCapacity: '3000 mAh',
                weight: '163 g',
                thickness: '8.5 mm',
                height: '147.7 mm',
                width: '68.7 mm',
                audio: 'MP3, M4A, 3GA, AAC, OGG, OGA, WAV, WMA, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DFF, DSF, APE',
                simCardQuantity: '2 SIM',
            },
            { shopping_cart: true,
                compare: true,
                like: true,
                img: '../../assets/images/mobile/iphonex.jpg',
                company: 'Apple',
                model: 'Iphone X 256GB',
                price: '$ 1599',
                version: 'Iphone X',
                year: '2017',
                os: 'iOS',
                screenType: 'Super Retina HD display, all-screen OLED Multi-Touch, HDR display',
                screenResolution: '2436x1125',
                screenSize: '5.8 inch',
                frontCamera: '7 MP',
                mainCamera: '12 MP + 12 MP',
                numberOfProcessorCores: '6',
                cpu: 'A11 Bionic Embedded M11 motion coprocessor',
                ram: '3 GB',
                memoryCardSlot: 'No',
                memory: '256 GB',
                standartNetwork: 'GSM 850 / 900 / 1800 / 1900',
                accessToTheInternet: 'GPRS, EDGE',
                networkRangeLte4G: 'LTE (Bands 1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 29, 30, 66)',
                gps: 'Yes',
                bluetooth: 'Yes',
                wifiNetwork: 'Yes',
                network3G: 'Yes',
                nfc: 'Yes',
                networkLte4G: 'Yes',
                charingConnectorType: 'Lightning connector',
                talkTime: 'Up to 21 h (3G)',
                batteryType: 'Li-Ion',
                batteryCapacity: '2716 mAh',
                weight: '174 g',
                thickness: '7.7 mm',
                height: '143.6 mm',
                width: '70.9 mm',
                audio: 'AAC-LC, HE-AAC, HE-AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX, and AAX+)',
                simCardQuantity: '1 SIM',
            },
            {
                shopping_cart: true,
                compare: true,
                like: true,
                img: '../../assets/images/mobile/nokia8.jpg',
                company: 'Nokia',
                model: '8 Sirocco',
                price: '$ 899',
                version: '8 Sirocca',
                year: '2018',
                os: 'Android',
                screenType: 'QHD pOLED',
                screenResolution: '2560x1440',
                screenSize: '5.5 inch',
                frontCamera: '5 MP',
                mainCamera: '12 MP',
                numberOfProcessorCores: 'Octa core (4 x 2.36 GHz Kryo + 4 x 1.9 GHz Kryo)',
                cpu: 'Qualcomm® Snapdragon™',
                ram: '6 GB',
                memoryCardSlot: 'No',
                memory: '128 GB',
                standartNetwork: 'GSM850, GSM900, DCS1800, PCS1900',
                accessToTheInternet: '',
                networkRangeLte4G: 'LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 20(800), 28(700), 34(2000), 38(2600), 39(1900), 40(2300), 41(2500)',
                gps: 'Yes',
                bluetooth: 'Yes',
                wifiNetwork: 'Yes',
                network3G: 'Yes',
                nfc: 'Yes',
                networkLte4G: 'Yes',
                charingConnectorType: 'USB Type-C',
                talkTime: 'Up to 22 h (3G)',
                batteryType: 'Li-Ion',
                batteryCapacity: '3260 mAh',
                weight: '177 g',
                thickness: '7.5 mm',
                height: '140.93 mm',
                width: '72.97 mm',
                audio: '',
                simCardQuantity: '2 SIM',
            },
            {
                shopping_cart: true,
                compare: true,
                like: true,
                img: '../../assets/images/mobile/sonyxz.jpeg',
                company: 'Sony',
                model: 'Xperia XZ dual',
                price: '$ 599',
                version: 'Sony F8332',
                year: '2016',
                os: 'Android',
                screenType: 'IPS LCD capacitive touchscreen, 16M colors',
                screenResolution: '1920x1080',
                screenSize: '5.2 inch',
                frontCamera: '13 MP',
                mainCamera: '23 MP',
                numberOfProcessorCores: '',
                cpu: 'Quad-core (2x2.15 GHz Kryo & 2x1.6 GHz Kryo)',
                ram: '3 GB',
                memoryCardSlot: 'Yes',
                memory: '64 GB',
                standartNetwork: '',
                accessToTheInternet: 'GPRS, EDGE',
                networkRangeLte4G: 'LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 12(700), 13(700), 17(700), 19(800), 20(800), 26(850), 28(700), 29(700), 32(1500), 38(2600), 39(1900), 40(2300), 41(2500)',
                gps: 'Yes',
                bluetooth: 'Yes',
                wifiNetwork: 'Yes',
                network3G: 'Yes',
                nfc: 'Yes',
                networkLte4G: 'Yes',
                charingConnectorType: 'Type-C 1.0 reversible connector; USB Host',
                talkTime: 'Up to 17 h 30min (3G)',
                batteryType: 'Non-Removalbe Li-Ion',
                batteryCapacity: '2900 mAh',
                weight: '161 g',
                thickness: '8.1 mm',
                height: '146 mm',
                width: '72 mm',
                audio: 'Vibration; MP3, WAV ringtones',
                simCardQuantity: '2 SIM',
            },
            {
                shopping_cart: true,
                compare: true,
                like: true,
                img: '../../assets/images/mobile/htcu11.jpg',
                company: 'HTC',
                model: 'U 11',
                price: '$ 899',
                version: 'HTC U11',
                year: '2017',
                os: 'Android',
                screenType: 'Super LCD5 capacitive touchscreen, 16M colors',
                screenResolution: '2960x1440',
                screenSize: '5.5 inch',
                frontCamera: '16 MP',
                mainCamera: '12 MP',
                numberOfProcessorCores: '',
                cpu: 'Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)',
                ram: '4 GB',
                memoryCardSlot: 'Yes',
                memory: '64 GB',
                standartNetwork: '',
                accessToTheInternet: 'GPRS, EDGE',
                networkRangeLte4G: 'LTE band 1(2100), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 12(700), 17(700), 20(800), 28(700), 32(1500), 38(2600), 39(1900), 40(2300), 41(2500)',
                gps: 'Yes',
                bluetooth: 'Yes',
                wifiNetwork: 'Yes',
                network3G: 'Yes',
                nfc: 'Yes',
                networkLte4G: 'Yes',
                charingConnectorType: 'Type-C 1.0 reversible connector',
                talkTime: 'Up to 25 h 30 min (3G)',
                batteryType: 'Non-Removalbe Li-Ion',
                batteryCapacity: '3000 mAh',
                weight: '169 g',
                thickness: '7.9 mm',
                height: '153.9 mm',
                width: '75.9 mm',
                audio: 'Vibration; MP3, WAV ringtones',
                simCardQuantity: '2 SIM',
            }
        ];
        this.tablet = [
            { shopping_cart: true,
                compare: true,
                like: true,
                img: ["../../assets/images/tablet/AppleiPadPro.jpg"],
                company: 'Apple',
                model: ' iPad Pro 10.5 ',
                price: '$ 899',
                version: '',
                year: '2017',
                os: 'iOS 10.3.2, upgradable to iOS 11.2.5',
                screenType: 'LED-backlit IPS LCD, capacitive touchscreen, 16M colors',
                screenResolution: '2224x1668',
                screenSize: '10.5 inch',
                frontCamera: '7 MP',
                mainCamera: '12 MP',
                numberOfProcessorCores: '',
                cpu: 'Apple A10X Fusion',
                ram: '4 GB',
                memoryCardSlot: 'No',
                memory: '64 GB',
                standartNetwork: '',
                accessToTheInternet: '',
                networkRangeLte4G: '',
                gps: 'Yes',
                bluetooth: 'Yes',
                wifiNetwork: 'Yes',
                network3G: 'No',
                nfc: 'No',
                networkLte4G: 'No',
                charingConnectorType: '3.0, proprietary reversible connector; magnetic connector',
                talkTime: 'Up to 10 h (multimedia)',
                batteryType: 'Non-removable Li-Ion',
                batteryCapacity: '8134 mAh',
                weight: '469 g',
                thickness: '6.1 mm (0.24 in)',
                height: '250.6 mm (9.87 in)',
                width: '174.1 mm (6.85 in)',
                audio: '',
                simCardQuantity: '',
            },
            { shopping_cart: true,
                compare: true,
                like: true,
                img: ["../../assets/images/tablet/SamsungGalaxyTabS2.jpg"],
                company: 'Samsung',
                model: 'Galaxy Tab S2 8.0 T719 ',
                price: '$ 399',
                version: '',
                year: '2015',
                os: 'Android 6.0.1',
                screenType: 'Super AMOLED capacitive touchscreen, 16M colors',
                creenResolution: '2048x1536',
                screenSize: '8.0 inch',
                frontCamera: '2.1 megapixel',
                mainCamera: '8 MP',
                numberOfProcessorCores: '',
                cpu: 'Quad-core 1.8 GHz Cortex-A72 & quad-core 1.4 GHz Cortex-A53',
                ram: '3 GB',
                memoryCardSlot: 'Yes',
                memory: '',
                standartNetwork: 'GSM 850 / 900 / 1800 / 1900',
                accessToTheInternet: 'GPRS, EDGE',
                networkRangeLte4G: '',
                gps: 'Yes',
                bluetooth: 'Yes',
                wifiNetwork: 'Yes',
                network3G: 'Yes',
                nfc: '',
                networkLte4G: '',
                charingConnectorType: 'microUSB v2.0',
                talkTime: 'Up to 27 h (3G)',
                batteryType: 'Li-Ion',
                batteryCapacity: '4000 mAh',
                weight: '265 g (9.59 oz)',
                thickness: '5.6 mm (0.22 in)',
                height: '198.6 mm (7.82 in)',
                width: '134.8 mm ( 5.31 in)',
                audio: 'Vibration; MP3, WAV ringtones',
                simCardQuantity: '',
            },
            { shopping_cart: true,
                compare: true,
                like: true,
                img: ["../../assets/images/tablet/LenovoTab7.jpg"],
                company: 'Lenovo',
                model: ' Tab 7 (TB-7504X) ',
                price: '$ 149',
                version: '',
                year: '2017',
                os: 'Android 7.0',
                screenType: 'IPS LCD Multiouch',
                screenResolution: '1280x720',
                screenSize: '7.0 inch',
                frontCamera: '2 MP',
                mainCamera: '5 MP',
                numberOfProcessorCores: '4',
                cpu: 'MediaTek MT8735B, 1.3GHZ',
                ram: '1 GB',
                memoryCardSlot: 'Yes',
                memory: '16 GB',
                standartNetwork: '',
                accessToTheInternet: '',
                networkRangeLte4G: '',
                gps: 'Yes',
                bluetooth: 'Yes',
                wifiNetwork: 'Yes',
                network3G: 'Yes',
                nfc: 'Yes',
                networkLte4G: 'Yes',
                charingConnectorType: '',
                talkTime: '',
                batteryType: 'Li-Po',
                batteryCapacity: '3500 mAh',
                weight: '260 g',
                thickness: '8.4 mm',
                height: '193 mm',
                width: '98.7 mm',
                audio: '',
                simCardQuantity: '',
            },
            { shopping_cart: true,
                compare: true,
                like: true,
                img: ["../../assets/images/tablet/AppleiPadPro12.9.jpg"],
                company: 'Apple',
                model: ' iPad Pro 12.9  ',
                price: '$ 1099',
                version: '',
                year: '2017',
                os: 'iOS 10.3.2, upgradable to iOS 11.2',
                screenType: 'LED-backlit IPS LCD, capacitive touchscreen, 16M colors',
                screenResolution: '2732x2048',
                screenSize: '12.9 inch',
                frontCamera: '7 MP',
                mainCamera: '12 MP',
                numberOfProcessorCores: '',
                cpu: 'Apple A10X Fusion',
                ram: '4 GB',
                memoryCardSlot: 'No',
                memory: '64 GB',
                standartNetwork: 'GSM 850 / 900 / 1800 / 1900',
                accessToTheInternet: 'GPRS, EDGE',
                networkRangeLte4G: 'LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 11(1500), 12(700), 13(700), 17(700), 18(800), 19(800), 20(800), 21(1500), 25(1900), 26(850), 27(800), 28(700), 29(700), 30(2300), 38(2600), 39(1900), 40(2300), 41(2500)',
                gps: 'Yes',
                bluetooth: 'Yes',
                wifiNetwork: 'Yes',
                network3G: 'Yes',
                nfc: 'Yes',
                networkLte4G: 'Yes',
                charingConnectorType: '3.0, proprietary reversible connector; magnetic connector',
                talkTime: 'Up to 10 h (multimedia)',
                batteryType: 'Built‐in 41‐watt‐hour rechargeable lithium‑polymer battery',
                batteryCapacity: '10 891 mAh',
                weight: '692 g',
                thickness: '6.9 mm (0.27 in)',
                height: '305.7 mm (12.04 in)',
                width: '220.6 mm (8.69 in)',
                audio: '',
                simCardQuantity: '',
            },
            { shopping_cart: true,
                compare: true,
                like: true,
                img: ["../../assets/images/tablet/SamsungGalaxyTabS3.jpg"],
                company: 'Samsung',
                model: 'Galaxy Tab S3 9.7 T825 ',
                price: '$ 799',
                version: '',
                year: '2017',
                os: 'Android 7.0',
                screenType: 'Super AMOLED capacitive touchscreen, 16M colors',
                screenResolution: '2048x1536',
                screenSize: '9.7 inch',
                frontCamera: '5 MP',
                mainCamera: '13 MP',
                numberOfProcessorCores: '',
                cpu: 'Quad-core (2x2.15 GHz Kryo & 2x1.6 GHz Kryo)',
                ram: '4 GB',
                memoryCardSlot: 'Yes',
                memory: '32 GB',
                standartNetwork: 'GSM 850 / 900 / 1800 / 1900',
                ccessToTheInternet: 'GPRS, EDGE',
                networkRangeLte4G: 'LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 17(700), 20(800), 28(700), 40(2300)',
                gps: 'Yes',
                bluetooth: 'Yes',
                wifiNetwork: 'Yes',
                network3G: 'Yes',
                nfc: '',
                networkLte4G: 'Yes',
                charingConnectorType: 'Type-C 1.0',
                talkTime: 'Up to 27 h (3G)',
                batteryType: 'Non-removable',
                batteryCapacity: '6000 mAh',
                weight: '434 g (15.13 oz)',
                thickness: '6 mm (0.24 in)',
                height: '237.3 mm (9.34 in)',
                width: '169 mm (6.65 in)',
                audio: 'Vibration; MP3, WAV ringtones',
                simCardQuantity: '',
            },
        ];
        this.accessories = [
            {
                shopping_cart: true,
                compare: true,
                like: true,
                img: '../../assets/images/accessories/appleairpod.jpeg',
                company: 'Apple',
                model: 'EarPods lightning',
                price: '$ 45',
            },
            {
                shopping_cart: true,
                compare: true,
                like: true,
                img: '../../assets/images/accessories/bearts.png',
                company: 'Beats',
                model: 'EP On-Ear',
                price: '$ 119',
            },
            {
                shopping_cart: true,
                compare: true,
                like: true,
                img: '../../assets/images/accessories/applekoch.jpg',
                company: 'Apple',
                model: 'USB power adapter 5W',
                price: '$ 25',
            },
            {
                shopping_cart: true,
                compare: true,
                like: true,
                img: '../../assets/images/accessories/cabelusb.jpg',
                company: 'Havit',
                model: 'HV-CB534 Micro USB',
                price: '$ 10',
            },
            {
                shopping_cart: true,
                compare: true,
                like: true,
                img: '../../assets/images/accessories/pill.jpg',
                company: 'Beeats',
                model: 'Loudspeaker Beats Pill+',
                price: '$ 299',
            }
        ];
        this.product = [
            this.mobile,
            this.tablet,
            this.accessories
        ];
    }
    ProductsService.prototype.ngOnInit = function () {
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Acer\Desktop\Angular\copyGit\MobileApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map