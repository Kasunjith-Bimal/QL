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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ads/ads.component.css":
/*!***************************************!*\
  !*** ./src/app/ads/ads.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ads/ads.component.html":
/*!****************************************!*\
  !*** ./src/app/ads/ads.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ads works!\n</p>\n"

/***/ }),

/***/ "./src/app/ads/ads.component.ts":
/*!**************************************!*\
  !*** ./src/app/ads/ads.component.ts ***!
  \**************************************/
/*! exports provided: AdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsComponent", function() { return AdsComponent; });
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

var AdsComponent = /** @class */ (function () {
    function AdsComponent() {
    }
    AdsComponent.prototype.ngOnInit = function () {
    };
    AdsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ads',
            template: __webpack_require__(/*! ./ads.component.html */ "./src/app/ads/ads.component.html"),
            styles: [__webpack_require__(/*! ./ads.component.css */ "./src/app/ads/ads.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdsComponent);
    return AdsComponent;
}());



/***/ }),

/***/ "./src/app/answer/answer.component.css":
/*!*********************************************!*\
  !*** ./src/app/answer/answer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/answer/answer.component.html":
/*!**********************************************!*\
  !*** ./src/app/answer/answer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  answer works!\n</p>\n"

/***/ }),

/***/ "./src/app/answer/answer.component.ts":
/*!********************************************!*\
  !*** ./src/app/answer/answer.component.ts ***!
  \********************************************/
/*! exports provided: AnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerComponent", function() { return AnswerComponent; });
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

var AnswerComponent = /** @class */ (function () {
    function AnswerComponent() {
    }
    AnswerComponent.prototype.ngOnInit = function () {
    };
    AnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer',
            template: __webpack_require__(/*! ./answer.component.html */ "./src/app/answer/answer.component.html"),
            styles: [__webpack_require__(/*! ./answer.component.css */ "./src/app/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnswerComponent);
    return AnswerComponent;
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

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-lg-1 col-md-1 col-sm-12 col-xs-12\">\n    &nbsp;\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-12 col-xs-12\">\n    <div class=\"container\">\n        <app-navigation></app-navigation>\n        <router-outlet></router-outlet>\n    </div>\n  </div>\n  <div class=\"col-lg-1 col-md-1 col-sm-12 col-xs-12\">\n    &nbsp;\n  </div>\n</div>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'qLearn';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exam/exam.component */ "./src/app/exam/exam.component.ts");
/* harmony import */ var _ads_ads_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ads/ads.component */ "./src/app/ads/ads.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _publication_publication_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./publication/publication.component */ "./src/app/publication/publication.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _answer_answer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./answer/answer.component */ "./src/app/answer/answer.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _exam_exam_component__WEBPACK_IMPORTED_MODULE_7__["ExamComponent"],
                _ads_ads_component__WEBPACK_IMPORTED_MODULE_8__["AdsComponent"],
                _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_9__["TutorialComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_10__["NewsComponent"],
                _publication_publication_component__WEBPACK_IMPORTED_MODULE_11__["PublicationComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_12__["BookComponent"],
                _answer_answer_component__WEBPACK_IMPORTED_MODULE_13__["AnswerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _app_route__WEBPACK_IMPORTED_MODULE_15__["routing"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam/exam.component */ "./src/app/exam/exam.component.ts");
/* harmony import */ var _ads_ads_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ads/ads.component */ "./src/app/ads/ads.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _publication_publication_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publication/publication.component */ "./src/app/publication/publication.component.ts");







var APP_ROUTE_PROVIDER = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'exam', component: _exam_exam_component__WEBPACK_IMPORTED_MODULE_2__["ExamComponent"] },
    { path: 'ads', component: _ads_ads_component__WEBPACK_IMPORTED_MODULE_3__["AdsComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"] },
    { path: 'book', component: _book_book_component__WEBPACK_IMPORTED_MODULE_5__["BookComponent"] },
    { path: 'publication', component: _publication_publication_component__WEBPACK_IMPORTED_MODULE_6__["PublicationComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTE_PROVIDER);


/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  book works!\n</p>\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
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

var BookComponent = /** @class */ (function () {
    function BookComponent() {
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/exam/exam.component.css":
/*!*****************************************!*\
  !*** ./src/app/exam/exam.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/exam/exam.component.html":
/*!******************************************!*\
  !*** ./src/app/exam/exam.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  exam works!\n</p>\n"

/***/ }),

/***/ "./src/app/exam/exam.component.ts":
/*!****************************************!*\
  !*** ./src/app/exam/exam.component.ts ***!
  \****************************************/
/*! exports provided: ExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function() { return ExamComponent; });
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

var ExamComponent = /** @class */ (function () {
    function ExamComponent() {
    }
    ExamComponent.prototype.ngOnInit = function () {
    };
    ExamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exam',
            template: __webpack_require__(/*! ./exam.component.html */ "./src/app/exam/exam.component.html"),
            styles: [__webpack_require__(/*! ./exam.component.css */ "./src/app/exam/exam.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamComponent);
    return ExamComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m1{\r\n  margin-left: 5px;\r\n}\r\n\r\n.navbarcontroler{\r\n  background-color: white;\r\n  color: black;\r\n  border: opx solid black;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .mat-button, .mat-flat-button, .mat-icon-button, .mat-stroked-button {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    cursor: pointer;\r\n    outline: 0;\r\n    border: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    text-decoration: none;\r\n    vertical-align: baseline;\r\n    text-align: center;\r\n    margin: 0;\r\n    min-width: 100%;\r\n    line-height: 36px;\r\n    padding: 0 16px;\r\n    border-radius: 2px;\r\n    overflow: visible;\r\n  }\r\n\r\n  .input-group {\r\n    display: block;\r\n    position: relative;\r\n    flex: auto;\r\n    width: 470px;\r\n}\r\n}\r\n\r\n.navbar-form {\r\n  padding: 10px 15px;\r\n  margin-top: 8px;\r\n  margin-right: -15px;\r\n  margin-bottom: 8px;\r\n  margin-left: -15px;\r\n  /* border-top: 1px solid transparent; */\r\n  /* border-bottom: 1px solid transparent; */\r\n  /* box-shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 1px 0 rgba(255,255,255,.1); */\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbarcontroler\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">WebSiteName</a>\n    </div>\n    \n    <form class=\"navbar-form navbar-right\" action=\"/action_page.php\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><button class=\"m1\" mat-flat-button color=\"primary\">CREATE EXAM</button></li>\n        <li><button class=\"m1\" mat-flat-button color=\"accent\">POST YOUR ADS</button></li>\n        <li><button class=\"m1\" mat-flat-button color=\"warn\">LOGIN</button></li>\n      </ul>\n      <div class=\"input-group m1\">\n        <mat-form-field>\n          <input matInput placeholder=\"Search\">\n          \n        </mat-form-field>\n        <button mat-mini-fab color=\"accent\"> <i class=\"glyphicon glyphicon-search\"></i></button>\n      </div>\n    </form>\n  </div>\n</nav>\n<nav class=\"navbar navbar-default navbarcontroler\">\n  <div class=\"container-fluid\">\n    <form class=\"navbar-form navbar-left\">\n      <ul class=\"nav navbar-nav\">\n        <li ><a routerLinkActive='active'  [routerLink]=\"['/home']\" >HOME</a></li>\n        <li><a  routerLinkActive='active'  [routerLink]=\"['/exam']\" >EXAM</a></li>\n        <li><a  routerLinkActive='active'  [routerLink]=\"['/ads']\" >ALL ADS</a></li>\n        <li><a  routerLinkActive='active'  [routerLink]=\"['/news']\" >NEWS</a></li>\n        <li><a  routerLinkActive='active'  [routerLink]=\"['/publication']\" >PUBLICATION</a></li>\n        <li><a  routerLinkActive='active'  [routerLink]=\"['/book']\" >BOOKS</a></li>\n      </ul>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  news works!\n</p>\n"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
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

var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/publication/publication.component.css":
/*!*******************************************************!*\
  !*** ./src/app/publication/publication.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/publication/publication.component.html":
/*!********************************************************!*\
  !*** ./src/app/publication/publication.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  publication works!\n</p>\n"

/***/ }),

/***/ "./src/app/publication/publication.component.ts":
/*!******************************************************!*\
  !*** ./src/app/publication/publication.component.ts ***!
  \******************************************************/
/*! exports provided: PublicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationComponent", function() { return PublicationComponent; });
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

var PublicationComponent = /** @class */ (function () {
    function PublicationComponent() {
    }
    PublicationComponent.prototype.ngOnInit = function () {
    };
    PublicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-publication',
            template: __webpack_require__(/*! ./publication.component.html */ "./src/app/publication/publication.component.html"),
            styles: [__webpack_require__(/*! ./publication.component.css */ "./src/app/publication/publication.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicationComponent);
    return PublicationComponent;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial.component.css":
/*!*************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.html":
/*!**************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tutorial works!\n</p>\n"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.ts":
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
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

var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.css */ "./src/app/tutorial/tutorial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rika\Desktop\QL\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map