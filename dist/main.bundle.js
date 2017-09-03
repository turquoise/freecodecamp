webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tribute_tribute_component__ = __webpack_require__("../../../../../src/app/tribute/tribute.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quote_quote_component__ = __webpack_require__("../../../../../src/app/quote/quote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wiki_wiki_component__ = __webpack_require__("../../../../../src/app/wiki/wiki.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__twitch_twitch_component__ = __webpack_require__("../../../../../src/app/twitch/twitch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calculator_calculator_component__ = __webpack_require__("../../../../../src/app/calculator/calculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tictactoe_tictactoe_component__ = __webpack_require__("../../../../../src/app/tictactoe/tictactoe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__simonsays_simonsays_component__ = __webpack_require__("../../../../../src/app/simonsays/simonsays.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pomodoro_clock_pomodoro_clock_component__ = __webpack_require__("../../../../../src/app/pomodoro-clock/pomodoro-clock.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'tribute', component: __WEBPACK_IMPORTED_MODULE_3__tribute_tribute_component__["a" /* TributeComponent */] },
    { path: 'quote', component: __WEBPACK_IMPORTED_MODULE_4__quote_quote_component__["a" /* QuoteComponent */] },
    { path: 'weather', component: __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__["a" /* WeatherComponent */] },
    { path: 'wiki', component: __WEBPACK_IMPORTED_MODULE_6__wiki_wiki_component__["a" /* WikiComponent */] },
    { path: 'twitch', component: __WEBPACK_IMPORTED_MODULE_7__twitch_twitch_component__["a" /* TwitchComponent */] },
    { path: 'calculator', component: __WEBPACK_IMPORTED_MODULE_8__calculator_calculator_component__["a" /* CalculatorComponent */] },
    { path: 'pomodoro-clock', component: __WEBPACK_IMPORTED_MODULE_11__pomodoro_clock_pomodoro_clock_component__["a" /* PomodoroClockComponent */] },
    { path: 'tic-tac-toe', component: __WEBPACK_IMPORTED_MODULE_9__tictactoe_tictactoe_component__["a" /* TictactoeComponent */] },
    { path: 'simon-says', component: __WEBPACK_IMPORTED_MODULE_10__simonsays_simonsays_component__["a" /* SimonsaysComponent */] },
    { path: '**', redirectTo: '/home' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing-module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12\">\n      <app-nav></app-nav>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tribute_tribute_component__ = __webpack_require__("../../../../../src/app/tribute/tribute.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__quote_quote_component__ = __webpack_require__("../../../../../src/app/quote/quote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__wiki_wiki_component__ = __webpack_require__("../../../../../src/app/wiki/wiki.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__twitch_twitch_component__ = __webpack_require__("../../../../../src/app/twitch/twitch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__calculator_calculator_component__ = __webpack_require__("../../../../../src/app/calculator/calculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tictactoe_tictactoe_component__ = __webpack_require__("../../../../../src/app/tictactoe/tictactoe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tictactoe_board_board_component__ = __webpack_require__("../../../../../src/app/tictactoe/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tictactoe_square_square_component__ = __webpack_require__("../../../../../src/app/tictactoe/square/square.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pomodoro_clock_pomodoro_clock_component__ = __webpack_require__("../../../../../src/app/pomodoro-clock/pomodoro-clock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__simonsays_simonsays_component__ = __webpack_require__("../../../../../src/app/simonsays/simonsays.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__tribute_tribute_component__["a" /* TributeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__quote_quote_component__["a" /* QuoteComponent */],
            __WEBPACK_IMPORTED_MODULE_15__weather_weather_component__["a" /* WeatherComponent */],
            __WEBPACK_IMPORTED_MODULE_16__wiki_wiki_component__["a" /* WikiComponent */],
            __WEBPACK_IMPORTED_MODULE_17__twitch_twitch_component__["a" /* TwitchComponent */],
            __WEBPACK_IMPORTED_MODULE_18__calculator_calculator_component__["a" /* CalculatorComponent */],
            __WEBPACK_IMPORTED_MODULE_19__tictactoe_tictactoe_component__["a" /* TictactoeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__tictactoe_board_board_component__["a" /* BoardComponent */],
            __WEBPACK_IMPORTED_MODULE_21__tictactoe_square_square_component__["a" /* SquareComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pomodoro_clock_pomodoro_clock_component__["a" /* PomodoroClockComponent */],
            __WEBPACK_IMPORTED_MODULE_23__simonsays_simonsays_component__["a" /* SimonsaysComponent */],
            __WEBPACK_IMPORTED_MODULE_24__nav_nav_component__["a" /* NavComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* CollapseModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["A" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["B" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["r" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_6__covalent_core__["b" /* CovalentLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6__covalent_core__["c" /* CovalentStepsModule */],
            __WEBPACK_IMPORTED_MODULE_6__covalent_core__["a" /* CovalentExpansionPanelModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* MdGridListModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.container-fluid {\r\n  background-color:#b2bac5;\r\n  height: 800px;\r\n}\r\n\r\n.background {\r\n  background-image: url('https://image.freepik.com/free-photo/wooden-surface-with-mobile-phone-and-green-leaf_23-2147608879.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  height: 800px;\r\n}\r\n\r\nform {\r\n  /*width: 300px;*/\r\n}\r\n\r\n#display {\r\n  /*width: 84*/\r\n  margin-bottom: 20px;\r\n  background-color: #e0e0e0;\r\n  height:  30px;\r\n  width: 9em;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  box-shadow: 0px 0px 1px 1px black;\r\n  text-align: right;\r\n  font: 20px bold;\r\n\r\n}\r\n\r\n#keys {\r\n  width: 41px;\r\n  height: 35px;\r\n  margin-bottom: 4px;\r\n  box-shadow: 0px 0px 2px 1px black;\r\n  border-radius: 2px;\r\n  background-color: #9e9e9e;\r\n  outline: none;\r\n}\r\n\r\n#equal {\r\n  width: 87px;\r\n  height: 35px;\r\n  margin-bottom: 4px;\r\n  box-shadow: 0px 0px 2px 1px black;\r\n  border-radius: 2px;\r\n  background-color: #9e9e9e;\r\n  outline: none;\r\n}\r\n\r\n\r\n.button {\r\n  /*margin-top: 0;\r\n  width: 20%; */\r\n}\r\n\r\n.equal {\r\n  /*width: 41%;*/\r\n}\r\n\r\n#calculator {\r\n  /*text-align: center;*/\r\n  background-color: #424242;\r\n  width: 220px;\r\n  height: 300px;\r\n  border: 1px solid black;\r\n  padding: 20px;\r\n  border-radius: 20px;\r\n  margin: 50px auto;\r\n  box-shadow: 0px 0px 3px  3px #212121;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid top\" ngClass.gt-xs=\"background\">\n  <div class=\"text-center\">\n    <h1>Calculator</h1>\n  </div>\n  <div id=\"calculator\">\n    <form #f>\n      <!-- <input class=\"display\" type=\"text\" id=\"display\" name=\"display\" #display disabled > -->\n      <div id=\"display\">{{ box }}</div>\n      <br>\n      <input class=\"button\" type=\"button\" value=\"C\" id=\"keys\" #c (click)=\"toScreen('c')\">\n      <input class=\"button\" type=\"button\" value=\"CE\" id=\"keys\" #ce (click)=\"backspace()\">\n      <input class=\"button\" type=\"button\" value=\"x^2\" id=\"keys\" #x2 (click)=\"power(x2)\">\n      <input class=\"button\" type=\"button\" value=\"+\" id=\"keys\" #add (click)=\"toScreen('+')\">\n      <br>\n      <input class=\"button\" type=\"button\" value=\"7\" id=\"keys\" #seven (click)=\"toScreen('7')\">\n      <input class=\"button\" type=\"button\" value=\"8\" id=\"keys\" #eight (click)=\"toScreen('8')\">\n      <input class=\"button\" type=\"button\" value=\"9\" id=\"keys\" #nine (click)=\"toScreen('9')\">\n      <input class=\"button\" type=\"button\" value=\"-\" id=\"keys\" #subtract (click)=\"toScreen('-')\">\n      <br>\n      <input class=\"button\" type=\"button\" value=\"4\" id=\"keys\" #four (click)=\"toScreen('4')\">\n      <input class=\"button\" type=\"button\" value=\"5\" id=\"keys\" #five (click)=\"toScreen('5')\">\n      <input class=\"button\" type=\"button\" value=\"6\" id=\"keys\" #six (click)=\"toScreen('6')\">\n      <input class=\"button\" type=\"button\" value=\"*\" id=\"keys\" #multiply (click)=\"toScreen('*')\">\n      <br>\n      <input class=\"button\" type=\"button\" value=\"1\" id=\"keys\" #one (click)=\"toScreen('1')\">\n      <input class=\"button\" type=\"button\" value=\"2\" id=\"keys\" #two (click)=\"toScreen('2')\">\n      <input class=\"button\" type=\"button\" value=\"3\" id=\"keys\" #three (click)=\"toScreen('3')\">\n      <input class=\"button\" type=\"button\" value=\"/\" id=\"keys\" #divide (click)=\"toScreen('/')\">\n      <br>\n      <input class=\"button zero\" type=\"button\" value=\"0\" id=\"keys\" #zero (click)=\"toScreen('0')\">\n      <input class=\"button decimal\" type=\"button\" value=\".\" id=\"keys\" #decimalpoint (click)=\"toScreen('.')\">\n      <input class=\"button equal\" type=\"button\" value=\"=\" id=\"equal\" #equal (click)=\"answer()\">\n\n\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorComponent = (function () {
    function CalculatorComponent() {
        this.box = '';
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent.prototype.toScreen = function (x) {
        this.box += x;
        if (x === 'c') {
            this.box = '';
        }
    };
    CalculatorComponent.prototype.backspace = function () {
        var num = this.box;
        var len = num.length - 1;
        var newNum = num.substring(0, len);
        this.box = newNum;
    };
    CalculatorComponent.prototype.power = function () {
        var x;
        x = this.box;
        x = x * x;
        this.box = x;
    };
    CalculatorComponent.prototype.answer = function () {
        // eval(string)
        this.result = eval(this.box);
        console.log('this.result ', this.result);
        this.box = this.result;
    };
    return CalculatorComponent;
}());
CalculatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-calculator',
        template: __webpack_require__("../../../../../src/app/calculator/calculator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/calculator/calculator.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalculatorComponent);

//# sourceMappingURL=calculator.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-grid-tile {\r\n  background: white;\r\n}\r\n\r\n.heading {\r\n  margin-left: 10%;\r\n}\r\n\r\n\r\n.example-card {\r\n  width: 250px;\r\n}\r\n\r\n.card {\r\n  width: 250px;\r\n  height: 450px;\r\n  vertical-align: top;\r\n}\r\n\r\n.row {\r\n  margin-left: 3%;\r\n}\r\n\r\na {\r\n  color: black;\r\n}\r\n\r\n.spacer {\r\n  height: 20px;\r\n}\r\n\r\nimage {\r\n  width: 200px;\r\n}\r\n\r\n/*md-grid-tile {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container-fluid top\">\n  <div class=\"heading\">\n    <h1>FreeCodeCamp Front End Development Projects</h1>\n    <p>The following Front End Development Projects were created in Angular 4 as part of the FreeCodeCamp Front End Development Certificate.</p>\n  </div>\n  <!-- <md-grid-list [cols]=\"cols | async\" gutterSize=\"20px\">\n    <md-grid-tile>1</md-grid-tile>\n    <md-grid-tile>2</md-grid-tile>\n    <md-grid-tile>3</md-grid-tile>\n    <md-grid-tile>5</md-grid-tile>\n  </md-grid-list> -->\n\n  <div class=\"container\" layout=\"column\">\n    <md-grid-list [cols]=\"cols | async\" guttersize=\"10px\" rowHeight=\"500px\">\n      <md-grid-tile >\n        <md-card class=\"card\">\n          <md-card-header>\n            <md-card-title>\n              <a routerLink=\"/quote\">Quote</a>\n            </md-card-title>\n          </md-card-header>\n          <div class=\"spacer\"></div>\n            <a routerLink=\"/quote\"><img class=\"image\" md-card-image src=\"../../assets/quote.PNG\"></a>\n          <md-card-content>\n            <p>\n              A Quote page constructed using a basic Quote API and a random function.\n            </p>\n          </md-card-content>\n        </md-card>\n      </md-grid-tile>\n      <md-grid-tile>\n        <md-card class=\"card\" >\n          <md-card-header>\n            <md-card-title>\n              <a routerLink=\"/tribute\">Tribute</a>\n            </md-card-title>\n          </md-card-header>\n          <div class=\"spacer\"></div>\n            <a routerLink=\"/tribute\"><img class=\"image\" md-card-image src=\"../../assets/colortheory.PNG\"></a>\n          <md-card-content>\n            <p>\n              This is a tribute to Johannes Itten, a Colour Theorist.  The data has been extracted from the Wikipedia API and relevant books have been extracted using the Google Books API.\n            </p>\n          </md-card-content>\n        </md-card>\n      </md-grid-tile>\n      <md-grid-tile>\n        <md-card class=\"card\">\n          <md-card-header>\n            <md-card-title>\n              <a routerLink=\"/weather\">Weather</a>\n            </md-card-title>\n          </md-card-header>\n          <div class=\"spacer\"></div>\n            <a routerLink=\"/weather\"><img class=\"image\" md-card-image src=\"../../assets/weather.PNG\"></a>\n          <md-card-content>\n            <p>\n              The Local Weather page was constructed using an Open Source API to access IP and longitude and latitude of the local machine.\n            </p>\n          </md-card-content>\n        </md-card>\n      </md-grid-tile>\n      <md-grid-tile>\n        <md-card class=\"card\">\n        <md-card-header>\n\n          <md-card-title>\n            <a routerLink=\"/twitch\">Twitch</a>\n          </md-card-title>\n        </md-card-header>\n        <div class=\"spacer\"></div>\n          <a routerLink=\"/twitch\"><img class=\"image\" md-card-image src=\"../../assets/twitch.PNG\"></a>\n        <md-card-content>\n          <p>\n            The Twitch page was constructed using the twitch API and a small selection of twitch users.  The page categorises users according to whether or not they are online and which game they are playing.\n          </p>\n        </md-card-content>\n      </md-card>\n      </md-grid-tile>\n      <md-grid-tile>\n        <md-card class=\"card\">\n        <md-card-header>\n\n          <md-card-title>\n            <a routerLink=\"/wiki\">Wikipedia</a>\n          </md-card-title>\n        </md-card-header>\n        <div class=\"spacer\"></div>\n          <a routerLink=\"/wiki\"><img class=\"image\" md-card-image src=\"../../assets/wiki.PNG\"></a>\n        <md-card-content>\n          <p>\n            The Wikipedia page demonstrates how the Wikipedia API can be used to search for a limited number of results.\n          </p>\n        </md-card-content>\n      </md-card>\n      </md-grid-tile>\n      <md-grid-tile>\n        <md-card class=\"card\">\n        <md-card-header>\n\n          <md-card-title>\n            <a routerLink=\"/calculator\">Calculator</a>\n          </md-card-title>\n        </md-card-header>\n        <div class=\"spacer\"></div>\n          <a routerLink=\"/calculator\"><img class=\"image\" md-card-image src=\"../../assets/calc.PNG\"></a>\n        <md-card-content>\n          <p>\n            The Calculator is an example of a basic implementation of a calculator.\n          </p>\n        </md-card-content>\n      </md-card>\n      </md-grid-tile>\n      <md-grid-tile>\n        <md-card class=\"card\">\n        <md-card-header>\n\n          <md-card-title>\n            <a routerLink=\"/clock\">Pomodoro Clock</a>\n          </md-card-title>\n        </md-card-header>\n        <div class=\"spacer\"></div>\n          <a routerLink=\"/clock\"><img class=\"image\" md-card-image src=\"../../assets/clock.PNG\"></a>\n        <md-card-content>\n          <p>\n            The Pomodoro Clock is a basic implementation of a timer enabling the user to set a 25 minute timer, take short and long breaks and stop the timer.\n          </p>\n        </md-card-content>\n      </md-card>\n      </md-grid-tile>\n      <md-grid-tile>\n        <md-card class=\"card\">\n        <md-card-header>\n\n          <md-card-title>\n            <a routerLink=\"/tic-tac-toe\">Tic Tac Toe</a>\n          </md-card-title>\n        </md-card-header>\n        <div class=\"spacer\"></div>\n          <a routerLink=\"/tic-tac-toe\"><img class=\"image\" md-card-image src=\"../../assets/tictactoe.PNG\"></a>\n        <md-card-content>\n          <p>\n            The Tic Tac Toe is a basic implementation of a Tic Tac Toe game allowing two players.  However, it does not yet have an AI implementation.\n          </p>\n        </md-card-content>\n      </md-card>\n      </md-grid-tile>\n      <md-grid-tile>\n        <md-card class=\"card\">\n        <md-card-header>\n\n          <md-card-title>\n            <a routerLink=\"/simon-says\">Simon Says</a>\n          </md-card-title>\n        </md-card-header>\n        <div class=\"spacer\"></div>\n          <a routerLink=\"/simon-says\"><img class=\"image\" md-card-image src=\"../../assets/simonsays.PNG\"></a>\n        <md-card-content>\n          <p>\n            The Simon Says game emulates a child's toy which flashes lights and you have to click on the lights in the correct order in order to win the game.\n          </p>\n        </md-card-content>\n      </md-card>\n      </md-grid-tile>\n    </md-grid-list>\n\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(observableMedia) {
        this.observableMedia = observableMedia;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.cols = 3;
        // set cols
        if (this.observableMedia.isActive("xs")) {
            this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(1);
        }
        else if (this.observableMedia.isActive("sm") || this.observableMedia.isActive("md")) {
            this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(3);
        }
        else if (this.observableMedia.isActive("lg") || this.observableMedia.isActive("xl")) {
            this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(3);
        }
        // observe changes
        this.observableMedia.asObservable()
            .subscribe(function (change) {
            switch (change.mqAlias) {
                case "xs":
                    return _this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(1);
                case "sm":
                    return _this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(2);
                case "md":
                    return _this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(3);
                case "lg":
                case "xl":
                    return _this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(3);
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.icon {\r\n  margin: 20px;\r\n}\r\n/*nav {\r\n  color: #37474f\r\n}*/\r\nmd-menu {\r\n\r\n}\r\n\r\n.toolbar {\r\n  max-height: 50px;\r\n  background-color: #37474f;\r\n}\r\n\r\n.nav {\r\n  font-size: 16px;\r\n  margin-bottom: 20px;\r\n  vertical-align: top;\r\n}\r\n\r\n.space {\r\n  width: 95%;\r\n}\r\n\r\n\r\n\r\nbutton {\r\n  outline: none;\r\n  color: #cfd8dc;\r\n}\r\n\r\na {\r\n  color: #cfd8dc;\r\n  margin-top: 20px;\r\n}\r\n\r\na:hover {\r\n  color: #b0bec5;\r\n}\r\n\r\n.active {\r\n  color: #90a4ae;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <md-toolbar style=\"min-height: 30px; max-height: 60px;\"\n            color=\"primary\"\n            class=\"md-toolbar-tools\">\n\n    <a class=\"nav-link\"\n      routerLink=\"/home\"\n      routerLinkActive=\"active\"\n      [routerLinkActiveOptions]=\"{ exact: true}\"\n      fFlex fxShow=\"false\" fxShow.gt-sm>\n      <span class=\"nav\" flex>Home</span>\n    </a>\n    <a class=\"nav-link\"\n      routerLink=\"/quote\"\n      routerLinkActive=\"active\"\n      fFlex fxShow=\"false\" fxShow.gt-sm>\n      <span class=\"nav\" flex>Quote</span>\n    </a>\n    <a class=\"nav-link\"\n      routerLink=\"/tribute\"\n      routerLinkActive=\"active\"\n      fFlex fxShow=\"false\" fxShow.gt-sm>\n      <span class=\"nav\" flex>Tribute</span>\n    </a>\n    <a class=\"nav-link\"\n      routerLink=\"/wiki\"\n      routerLinkActive=\"active\"\n      fFlex fxShow=\"false\" fxShow.gt-sm>\n      <span class=\"nav\" flex>Wiki</span>\n    </a>\n    <a class=\"nav-link\"\n      routerLink=\"/twitch\"\n      routerLinkActive=\"active\"\n      fFlex fxShow=\"false\" fxShow.gt-sm>\n      <span class=\"nav\" flex>Twitch</span>\n    </a>\n    <a class=\"nav-link\"\n      routerLink=\"/weather\"\n      routerLinkActive=\"active\"\n      fFlex fxShow=\"false\" fxShow.gt-sm>\n      <span class=\"nav\" flex>Weather</span>\n    </a>\n    <a class=\"nav-link\"\n      routerLink=\"/calculator\"\n      routerLinkActive=\"active\"\n      fFlex fxShow=\"false\" fxShow.gt-sm>\n      <span class=\"nav\" flex>Calculator</span>\n    </a>\n    <a class=\"nav-link\"\n      routerLink=\"/pomodoro-clock\"\n      routerLinkActive=\"active\"\n      fFlex fxShow=\"false\" fxShow.gt-sm>\n      <span class=\"nav\" flex>Pomodoro Clock</span>\n    </a>\n    <a class=\"nav-link\"\n      routerLink=\"/tic-tac-toe\"\n      routerLinkActive=\"active\"\n      fFlex fxShow=\"false\" fxShow.gt-sm>\n      <span class=\"nav\" flex>Tic Tac Toe</span>\n    </a>\n    <a class=\"nav-link\"\n      routerLink=\"/simon-says\"\n      routerLinkActive=\"active\"\n      fFlex fxShow=\"false\" fxShow.gt-sm>\n      <span class=\"nav\" flex>Simon Says</span>\n    </a>\n    <span class=\"space\"\n          flex\n          fxHide=\"false\"\n          fxHide.gt-sm>\n\n    </span>\n\n    <button md-button\n            fxFlex\n            [mdMenuTriggerFor]=\"menu\"\n            fxHide=\"false\"\n            fxHide.gt-sm >\n     <md-icon >menu</md-icon>\n    </button>\n\n</md-toolbar>\n<md-menu xPosition=\"before\"\n          #menu=\"mdMenu\"\n          [overlapTrigger]=\"false\">\n    <span class=\"side\" md-menu-item routerLink=\"/home\" >\n      Home\n    </span>\n    <span class=\"side\" md-menu-item routerLink=\"/quote\" >\n      Quote\n    </span>\n    <span class=\"side\" md-menu-item routerLink=\"/tribute\" >\n      Tribute\n    </span>\n    <span class=\"side\" md-menu-item routerLink=\"/wiki\" >\n      Wiki\n    </span>\n    <span class=\"side\" md-menu-item routerLink=\"/twitch\" >\n      Twitch\n    </span>\n    <span class=\"side\" md-menu-item routerLink=\"/weather\" >\n      Weather\n    </span>\n    <span class=\"side\" md-menu-item routerLink=\"/calculator\" >\n      Calculator\n    </span>\n    <span class=\"side\" md-menu-item routerLink=\"/pomodoro-clock\" >\n      Pomodoro Clock\n    </span>\n    <span class=\"side\" md-menu-item routerLink=\"/tic-tac-toe\" >\n      Tic Tac Toe\n    </span>\n    <span class=\"side\" md-menu-item routerLink=\"/simon-says\" >\n      Simon Says\n    </span>\n\n</md-menu> -->\n<td-expansion-panel disableRipple >\n  <ng-template td-expansion-panel-header>\n    <md-toolbar color=\"accent\" class=\"toolbar\">\n      <button md-button\n              fxFlex\n              fxHide=\"false\"\n              fxHide.gt-sm\n              (click)=\"onClick()\">\n       <md-icon >menu</md-icon>\n      </button>\n\n      <a class=\"nav-link\"\n        routerLink=\"/home\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{ exact: true}\"\n        fFlex fxShow=\"false\" fxShow.gt-sm>\n        <span class=\"nav\" flex>Home</span>\n      </a>\n      <a class=\"nav-link\"\n        routerLink=\"/quote\"\n        routerLinkActive=\"active\"\n        fFlex fxShow=\"false\" fxShow.gt-sm>\n        <span class=\"nav\" flex>Quote</span>\n      </a>\n      <a class=\"nav-link\"\n        routerLink=\"/tribute\"\n        routerLinkActive=\"active\"\n        fFlex fxShow=\"false\" fxShow.gt-sm>\n        <span class=\"nav\" flex>Tribute</span>\n      </a>\n      <a class=\"nav-link\"\n        routerLink=\"/wiki\"\n        routerLinkActive=\"active\"\n        fFlex fxShow=\"false\" fxShow.gt-sm>\n        <span class=\"nav\" flex>Wiki</span>\n      </a>\n      <a class=\"nav-link\"\n        routerLink=\"/twitch\"\n        routerLinkActive=\"active\"\n        fFlex fxShow=\"false\" fxShow.gt-sm>\n        <span class=\"nav\" flex>Twitch</span>\n      </a>\n      <a class=\"nav-link\"\n        routerLink=\"/weather\"\n        routerLinkActive=\"active\"\n        fFlex fxShow=\"false\" fxShow.gt-sm>\n        <span class=\"nav\" flex>Weather</span>\n      </a>\n      <a class=\"nav-link\"\n        routerLink=\"/calculator\"\n        routerLinkActive=\"active\"\n        fFlex fxShow=\"false\" fxShow.gt-sm>\n        <span class=\"nav\" flex>Calculator</span>\n      </a>\n      <a class=\"nav-link\"\n        routerLink=\"/pomodoro-clock\"\n        routerLinkActive=\"active\"\n        fFlex fxShow=\"false\" fxShow.gt-sm>\n        <span class=\"nav\" flex>Pomodoro Clock</span>\n      </a>\n      <a class=\"nav-link\"\n        routerLink=\"/tic-tac-toe\"\n        routerLinkActive=\"active\"\n        fFlex fxShow=\"false\" fxShow.gt-sm>\n        <span class=\"nav\" flex>Tic Tac Toe</span>\n      </a>\n      <a class=\"nav-link\"\n        routerLink=\"/simon-says\"\n        routerLinkActive=\"active\"\n        fFlex fxShow=\"false\" fxShow.gt-sm>\n        <span class=\"nav\" flex>Simon Says</span>\n      </a>\n    </md-toolbar>\n  </ng-template>\n  <md-list *ngIf=\"!disabled\">\n    <md-list-item>\n\n        <h4 md-line>Home</h4>\n    </md-list-item>\n    <md-divider md-inset></md-divider>\n    <md-list-item>\n\n        <h4 md-line>Quote</h4>\n    </md-list-item>\n    <md-divider md-inset></md-divider>\n    <md-list-item>\n\n        <h4 md-line>Tribute</h4>\n    </md-list-item>\n    <md-divider md-inset></md-divider>\n    <md-list-item>\n\n        <h4 md-line>Wiki</h4>\n    </md-list-item>\n    <md-divider md-inset></md-divider>\n    <md-list-item>\n\n        <h4 md-line>Twitch</h4>\n    </md-list-item>\n    <md-divider md-inset></md-divider>\n    <md-list-item>\n\n        <h4 md-line>Calculator</h4>\n    </md-list-item>\n    <md-divider md-inset></md-divider>\n    <md-list-item>\n\n        <h4 md-line>Pomodoro Clock</h4>\n    </md-list-item>\n    <md-divider md-inset></md-divider>\n    <md-list-item>\n\n        <h4 md-line>Tic Tac Toe</h4>\n    </md-list-item>\n    <md-divider md-inset></md-divider>\n    <md-list-item>\n        \n        <h4 md-line>Simon Says</h4>\n    </md-list-item>\n  </md-list>\n</td-expansion-panel>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent() {
        this.disabled = true;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.onClick = function () {
        this.disabled = !this.disabled;
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('collapse', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                    opacity: '1',
                    display: 'block',
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('closed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                    opacity: '0',
                    display: 'none',
                    transform: 'translate3d(0, -100%, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('closed => open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('open => closed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/pomodoro-clock/pomodoro-clock.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.container-fluid {\r\n  background-color:#624f40;\r\n  height: 1600px;\r\n}\r\n\r\n.background {\r\n  background-image: url('https://www.amershamdesigns.co.uk/uploads/images/products/large/amershamdesigns_arte_artecarrelagewallcovering_1494253545615122XGC0.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  height: 800px;\r\n}\r\n\r\nh1 {\r\n  color: #3a322c;\r\n}\r\n\r\n.spacer {\r\n  padding: 3%;\r\n}\r\n\r\n\r\n\r\n.block {\r\n    background-color: #624f40;\r\n    opacity: .8;\r\n    color: darkbrown;\r\n    padding: 50px;\r\n    width: 75%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    border-radius: 15px;\r\n    font-size: 1.5em;\r\n    padding-bottom: 2%;\r\n  }\r\n\r\n.timer{\r\n  color: #907d6f;\r\n  font-size:50px;\r\n  font-weight: bold;\r\n  margin:auto;\r\n  border : 10px solid #907d6f;\r\n  border-radius:50%;\r\n  width: 300px;\r\n  height: 300px;\r\n  position:relative;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  cursor:default;\r\n}\r\n\r\n.zero {\r\n  display: inline-block;\r\n  width: 15px;\r\n}\r\n\r\n#seconds {\r\n  display: inline-block;\r\n  width: 15px;\r\n}\r\n\r\n.time{\r\n  margin-top: 90px;\r\n  z-index : 1;\r\n  position:relative;\r\n}\r\n\r\n#fill {\r\n  width: 20px;\r\n  background-color: #624f40;\r\n  color: #624f40;\r\n}\r\n\r\n.align {\r\n  text-align: left;\r\n  margin-left: 60px;\r\n}\r\n\r\n#buttons button {\r\n  background:#0097a7;\r\n  border:none;\r\n  color:#fff;\r\n  cursor:pointer;\r\n  padding:5px;\r\n  width:90px;\r\n  margin:10px auto;\r\n  font-size:14px;\r\n  height : 50px;\r\n  border-radius : 50px;\r\n  outline: none;\r\n}\r\n\r\n#buttons button#shortBreak{\r\n  background :#4caf50;\r\n}\r\n\r\n#buttons button#longBreak{\r\n  background : #087f23;\r\n}\r\n\r\n#buttons button#stop{\r\n  background : #9f0000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pomodoro-clock/pomodoro-clock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" ngClass.gt-xs=\"background\">\n  <div class=\"spacer\"></div>\n  <div class=\" container block text-center\">\n    <h1 ngStyle.xs=\"font-size: 24px;\">Pomodoro Clock</h1>\n    <div class=\"timer\"\n        ngStyle.xs=\"border-radius:50%; width: 180px; height: 180px; border : 5px solid #907d6f;\">\n      <div class=\"time\" ngStyle.xs=\"margin-top: 20px; position: fixed;\">\n        <div class=\"align\" ngStyle.xs=\"margin-left: 50px;\">\n          <span id=\"minutes\" ngStyle.xs=\"font-size: 20px;\">{{ minutesDom }}</span>\n          <span id=\"colon\" ngStyle.xs=\"font-size: 20px;\">:</span>\n          <span class=\"zero\" *ngIf=\"numLessThanTen\" ngStyle.xs=\"font-size: 20px; width: 1px;\">0</span>\n          <span id=\"seconds\" ngStyle.xs=\"font-size: 20px;\">{{ secondsDom }}</span>\n        </div>\n\n      </div>\n      <div id=\"filler\"></div>\n    </div>\n\n    <div id=\"buttons\">\n      <button id=\"work\" (click)=\"onStartWork()\">Work</button>\n      <button id=\"shortBreak\" (click)=\"onShortBreak()\">Short Break</button>\n      <button id=\"longBreak\" (click)=\"onLongBreak()\">Long Break</button>\n      <button id=\"stop\" (click)=\"onStopTimer()\">Stop</button>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n<!--<div class=\"container-fluid\" ngClass.gt-xs=\"background\">\n  <div class=\"spacer\"></div>\n  <div class=\"block text-center\">\n    <h1 ngStyle.xs=\"font-size: 24px;\">Pomodoro Clock</h1>\n    <div class=\"timer\"\n        ngStyle.xs=\"border-radius:50%; width: 200px; height: 200px; margin-left: 0px;\">\n      <div class=\"time\" ngStyle.xs=\"margin-top: 20px; position: fixed;\">\n        <div id=\"align\" >\n          <span id=\"minutes\" ngStyle.xs=\"font-size: 20px;\">{{ minutesDom }}</span>\n          <span id=\"colon\" ngStyle.xs=\"font-size: 20px;\">:</span>\n          <span class=\"zero\" *ngIf=\"numLessThanTen\" ngStyle.xs=\"font-size: 20px; width: 1px;\">0</span>\n          <span id=\"seconds\" ngStyle.xs=\"font-size: 20px;\">{{ secondsDom }}</span>\n        </div>\n\n      </div>\n      <div id=\"filler\"></div>\n    </div>\n\n    <div id=\"buttons\">\n      <button id=\"work\" (click)=\"onStartWork()\">Work</button>\n      <button id=\"shortBreak\" (click)=\"onShortBreak()\">Short Break</button>\n      <button id=\"longBreak\" (click)=\"onLongBreak()\">Long Break</button>\n      <button id=\"stop\" (click)=\"onStopTimer()\">Stop</button>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/pomodoro-clock/pomodoro-clock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PomodoroClockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PomodoroClockComponent = (function () {
    function PomodoroClockComponent() {
        this.started = false;
        this.minutes = 25;
        this.seconds = 0;
        this.interval = null;
        this.minutesDom = null;
        this.secondsDom = null;
        this.fillerDom = null;
        this.fillerIncrement = 0;
        this.fillerHeight = 0;
        this.numLessThanTen = false;
    }
    // https://appendto.com/2016/10/comparing-javascript-jquery-build-a-pomodoro-timer/
    PomodoroClockComponent.prototype.ngOnInit = function () {
        this.onStart();
    };
    PomodoroClockComponent.prototype.onStart = function () {
        this.minutesDom = this.minutes;
        this.secondsDom = this.toDoubleDigits(this.seconds);
    };
    PomodoroClockComponent.prototype.onSetInterval = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.intervalCallback();
        }, 1000);
        //console.log('this.interval ', this.interval);
        return this.interval;
    };
    PomodoroClockComponent.prototype.intervalCallback = function () {
        if (!this.started) {
            return false;
        }
        if (this.seconds === 0) {
            if (this.minutes === 0) {
                this.timerComplete();
                return false;
            }
            else {
                this.numLessThanTen = false;
                this.seconds = 59;
                this.minutes--;
            }
        }
        else {
            this.seconds--;
        }
        this.updateDom();
    };
    PomodoroClockComponent.prototype.updateDom = function () {
        this.minutesDom = this.minutes;
        this.secondsDom = this.toDoubleDigits(this.seconds);
        //this.fillerHeight;
    };
    PomodoroClockComponent.prototype.toDoubleDigits = function (seconds) {
        if (seconds < 10) {
            console.log('toDoubleDigits num ', '0' + seconds);
            this.numLessThanTen = true;
            return parseInt(seconds);
        }
        return parseInt(seconds);
    };
    PomodoroClockComponent.prototype.timerComplete = function () {
        this.started = false;
        this.fillerHeight = 0;
    };
    PomodoroClockComponent.prototype.onReset = function () {
        this.minutes = 0;
        this.seconds = 0;
        this.started = false;
    };
    PomodoroClockComponent.prototype.onStartWork = function () {
        this.minutes = 25;
        this.seconds = 0;
        this.numLessThanTen = true;
        this.started = true;
        this.fillerIncrement = 200 / (this.minutes * 60);
        this.fillerHeight = 0;
        this.onSetInterval();
    };
    PomodoroClockComponent.prototype.onShortBreak = function () {
        this.minutes = 5;
        this.seconds = 0;
        this.numLessThanTen = true;
        this.started = true;
        this.fillerIncrement = 200 / (this.minutes * 60);
        this.fillerHeight = 0;
        this.onSetInterval();
    };
    PomodoroClockComponent.prototype.onLongBreak = function () {
        this.minutes = 15;
        this.seconds = 0;
        this.numLessThanTen = true;
        this.started = true;
        this.fillerIncrement = 200 / (this.minutes * 60);
        this.fillerHeight = 0;
        this.onSetInterval();
    };
    PomodoroClockComponent.prototype.onStopTimer = function () {
        this.minutes = 25;
        this.seconds = 0;
        this.started = false;
        this.fillerIncrement = 200 / (this.minutes * 60);
        this.fillerHeight = 0;
        this.updateDom();
    };
    return PomodoroClockComponent;
}());
PomodoroClockComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pomodoro-clock',
        template: __webpack_require__("../../../../../src/app/pomodoro-clock/pomodoro-clock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pomodoro-clock/pomodoro-clock.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PomodoroClockComponent);

//# sourceMappingURL=pomodoro-clock.component.js.map

/***/ }),

/***/ "../../../../../src/app/quote/quote.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.container-fluid {\r\n  background-color:#645135;\r\n  height: 800px;\r\n}\r\n\r\n.background {\r\n  background-image: url('https://img13.deviantart.net/a915/i/2009/146/f/b/exquisite_gold_frame_texture_by_pareeerica.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  height: 800px;\r\n}\r\n\r\n.block {\r\n    /*justify-content: center;*/\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    background-color: #b39971;\r\n    opacity: .9;\r\n    color: #ecddc5;\r\n    border-radius: 30px;\r\n    box-shadow: 10px 10px 5px #65360e;\r\n}\r\n\r\n\r\n.space {\r\n  height: 18%;\r\n}\r\n\r\n#button {\r\n  background-color: #98743a;\r\n  color: #ecddc5;\r\n  outline: none;\r\n  width: 20%;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n  width: 200px;\r\n}\r\n\r\nbutton:focus, button:link, button:visited, button:active, button:active {\r\n    outline: none;\r\n}\r\n\r\n.box {\r\n  width: 20%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quote/quote.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid top text-center\" ngClass.gt-xs=\"background\">\n  <!--<div\n          style=\"font-style: italic\"\n          [style.xs]=\"{'font-size.px': 10, color: 'blue'}\"\n          [style.sm]=\"{'font-size.px': 20, color: 'lightblue'}\"\n          [style.md]=\"{'font-size.px': 30, color: 'orange'}\"\n          [style.lg]=\"styleLgExp\">\n      Quote\n  </div> -->\n  <div class=\"space\"></div>\n  <div class=\"container\"\n      fxLayout=\"column\"\n     fxLayoutAlign=\"center center\">\n  <div class=\"frame\">\n  <div class=\"block\">\n    <h1\n        [style.xs]=\"{'font-size.px': 20}\"\n        [style.sm]=\"{'font-size.px': 20}\"\n        [style.md]=\"{'font-size.px': 30}\"\n        [style.lg]=\"{'font-size.px': 30}\"\n        >\n      Random Quote Generator\n    </h1>\n    <!--<p>\n      <em>{{quote.line}}</em> - {{quote.author}}\n    </p> -->\n    <h2\n      [style.xs]=\"{'font-size.px': 20}\"\n      [style.sm]=\"{'font-size.px': 20}\"\n      [style.md]=\"{'font-size.px': 30}\"\n      [style.lg]=\"{'font-size.px': 30}\">\n      {{ randomQuote?.author  }}\n    </h2>\n    <hr>\n    <h3 [style.xs]=\"{'font-size.px': 20}\"\n    [style.sm]=\"{'font-size.px': 20}\"\n    [style.md]=\"{'font-size.px': 30}\"\n    [style.lg]=\"{'font-size.px': 30}\">\n      {{ randomQuote?.quote  }}\n    </h3>\n    <hr>\n    <button id=\"button\"\n          class=\"btn btn-default\"\n          (click)=\"onClick()\"\n          [style.xs]=\"{'font-size.px': 10}\"\n          [style.sm]=\"{'font-size.px': 10}\"\n          [style.md]=\"{'font-size.px': 20}\"\n          [style.lg]=\"{'font-size.px': 20}\">\n      Random Quote\n    </button>\n    <!-- <form>\n      <label>Search for a quote</label>\n      <input type=\"text\" class=\"form-control\">\n    </form> -->\n</div>\n</div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/quote/quote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quote_service__ = __webpack_require__("../../../../../src/app/quote/quote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteComponent = (function () {
    function QuoteComponent(quoteService) {
        var _this = this;
        this.quoteService = quoteService;
        quoteService.generateRandomQuotes(1000, function (quote) {
            _this.quote = quote;
        });
    }
    QuoteComponent.prototype.ngOnInit = function () {
        this.getRandomQuote();
    };
    QuoteComponent.prototype.ngOnDestroy = function () {
        this.quoteSubscription.unsubscribe();
    };
    QuoteComponent.prototype.getRandomQuote = function () {
        var _this = this;
        this.quoteSubscription = this.quoteService.getQuotesApi()
            .subscribe(function (result) {
            console.log('quote result ', result);
            _this.randomQuote = result;
        });
    };
    QuoteComponent.prototype.onClick = function () {
        this.getRandomQuote();
    };
    return QuoteComponent;
}());
QuoteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quote',
        template: __webpack_require__("../../../../../src/app/quote/quote.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quote/quote.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__quote_service__["a" /* QuoteService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__quote_service__["a" /* QuoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__quote_service__["a" /* QuoteService */]) === "function" && _a || Object])
], QuoteComponent);

var _a;
//# sourceMappingURL=quote.component.js.map

/***/ }),

/***/ "../../../../../src/app/quote/quote.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuoteService = (function () {
    function QuoteService(http) {
        this.http = http;
        this.quotes = sampleQuotes;
    }
    QuoteService.prototype.getRandomQuote = function () {
        var randomIndex = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[randomIndex];
    };
    QuoteService.prototype.generateRandomQuotes = function (delay, callback) {
        var _this = this;
        callback(this.getRandomQuote());
        setTimeout(function () { return callback(_this.getRandomQuote()); }, delay);
    };
    // https://talaikis.com/random_quotes_api/
    QuoteService.prototype.getQuotesApi = function () {
        return this.http.get('https://talaikis.com/api/quotes/random/ ')
            .map(function (res) { return res.json(); });
    };
    return QuoteService;
}());
QuoteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QuoteService);

var sampleQuotes = [
    {
        "line": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "author": "Brian W. Kernighan"
    },
    {
        "line": "Walking on water and developing software from a specification are easy if both are frozen.",
        "author": "Edward V Berard"
    },
    {
        "line": "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
        "author": "Hofstadter's Law"
    },
    {
        "line": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        "author": "Rick Osborne"
    },
    {
        "line": "In theory, there is no difference between theory and practice. But, in practice, there is.",
        "author": "Jan L. A. van de Snepscheut"
    },
    {
        "line": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
        "author": "Bill Gates"
    },
    {
        "line": "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.",
        "author": "Leon Bambrick"
    },
    {
        "line": "Nine people can't make a baby in a month.",
        "author": "Fred Brooks"
    },
    {
        "line": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        "author": "Edsger Dijkstra"
    },
    {
        "line": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
        "author": "Tom Cargill"
    }
];
var _a;
//# sourceMappingURL=quote.service.js.map

/***/ }),

/***/ "../../../../../src/app/simonsays/simonsays.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n  background-image: url('');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-color: #62727b;\r\n  height: 800px;\r\n}\r\n\r\n.spacer {\r\n  padding: 1%;\r\n}\r\n\r\n.block {\r\n  /*margin-left: 25%;*/\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  width: 600px;\r\n  color: white;\r\n  opacity: 0.9;\r\n  background-color: #102027;\r\n  height: 550px;\r\n  border-radius: 40px;\r\n}\r\n\r\n.top-row {\r\n  margin-left: 40%;\r\n}\r\n\r\n.bottom-row {\r\n  margin-left: 40%;\r\n}\r\n\r\n\r\naudio {\r\n  display: none;\r\n}\r\n\r\n.gamenumber {\r\n  margin-top: 40px;\r\n  margin-left: 0px;\r\n  width: 150px;\r\n  height: 150px;\r\n\r\n}\r\n\r\n.middle-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: 15px auto;\r\n}\r\n\r\n.text {\r\n  margin-top: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.green {\r\n  width: 100px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: lightgreen;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  border: 10px solid green;\r\n  background-color: lightgreen;\r\n}\r\n\r\n.greenActive {\r\n  width: 100px;\r\n  height: 100px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  border-radius: 50px;\r\n  background-color: green;\r\n  color: green;\r\n}\r\n.red {\r\n  width: 100px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: pink;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  border: 10px solid red;\r\n  background-color: pink;\r\n}\r\n\r\n.redActive {\r\n  width: 100px;\r\n  height: 100px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  border-radius: 50px;\r\n  background-color: red;\r\n  color: red;\r\n}\r\n\r\n.yellow {\r\n  width: 100px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: yellow;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  border: 10px solid goldenrod;\r\n  background-color: yellow;\r\n}\r\n\r\n.yellowActive {\r\n  width: 100px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  background-color: yellow;\r\n  color: yellow;\r\n}\r\n\r\n.blue {\r\n  width: 100px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: lightblue;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  border: 10px solid blue;\r\n  background-color: lightblue;\r\n}\r\n\r\n.blueActive {\r\n  width: 100px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  background-color: blue;\r\n  color: blue;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/simonsays/simonsays.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid top\">\n  ​<audio controls autoplay>\n  <source *ngIf=\"redsound\" src=\"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3\" type=\"audio/mpeg\">\n  <source *ngIf=\"bluesound\" src=\"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3\" type=\"audio/mpeg\">\n  <source *ngIf=\"yellowsound\" src=\"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3\" type=\"audio/mpeg\">\n  <source *ngIf=\"greensound\" src=\"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3\" type=\"audio/mpeg\">\nYour browser does not support the audio element.\n</audio>\n\n<div class=\"block text-center\" ngStyle.xs=\"width: 300px;\">\n  <h1 ngStyle.xs=\"font-size: 24px;\">Simon Says</h1>\n  <div class=\"spacer\"></div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"gamefield\">\n\n        <div class=\"row top-row\">\n          <div [ngClass]=\"{ 'blueActive' : activeB, 'blue' : !activeB}\"\n              class=\"gamebutton\"\n              (click)=\"addToPlayer('Blue')\"\n              ngStyle.xs=\"height: 70px; width: 70px; border-radius: 35px;\">\n            <!--<p class=\"text\" >{{ colorName[0] }}</p> -->\n          </div>\n        </div>\n\n        <div class=\"row middle-row\">\n          <div class=\"col-xs-4\">\n            <div class=\"middle-left\">\n              <div [ngClass]=\"{ 'greenActive' : activeG, 'green' : !activeG}\"\n                  class=\"gamebutton\"\n                  (click)=\"addToPlayer('Green')\"\n                  ngStyle.xs=\"height: 70px; width: 70px; border-radius: 35px;\">\n                <!--<p class=\"text\">{{ colorName[1] }}</p>-->\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-4\">\n            <div class=\"gamenumber\">\n              <h4 id=\"clickNumber\">{{ count }}</h4>\n              <h4>{{ message }}</h4>\n            </div>\n          </div>\n          <div class=\"col-xs-4\">\n            <div class=\"middle-right\">\n              <div [ngClass]=\"{'yellowActive' : activeY , 'yellow' : !activeY}\"\n                  class=\"gamebutton\"\n                  (click)=\"addToPlayer('Yellow')\"\n                  ngStyle.xs=\"height: 70px; width: 70px; border-radius: 35px;\">\n                <!--<p class=\"text\">{{ colorName[2] }}</p>-->\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row bottom-row\">\n          <div [ngClass]=\"{'redActive' : activeR, 'red' : !activeR}\"\n              class=\"gamebutton\"\n              (click)=\"addToPlayer('Red')\"\n              ngStyle.xs=\"height: 70px; width: 70px; border-radius: 35px;\">\n            <!--<p class=\"text\" >{{ colorName[3] }}</p>-->\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/simonsays/simonsays.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimonsaysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimonsaysComponent = (function () {
    // https://medium.com/front-end-hacking/create-simon-game-in-javascript-d53b474a7416
    // https://codepen.io/mrkaluzny/pen/pbVxxd
    function SimonsaysComponent() {
        this.colorName = ['Blue', 'Green', 'Yellow', 'Red'];
        this.colorText = ['blue', 'green', 'goldenrod', 'red'];
        this.possibilities = ['Blue', 'Green', 'Yellow', 'Red'];
        this.clickNumber = 0;
        this.currentGame = [];
        this.count = 0;
        this.player = [];
        this.message = 'start game';
        this.strict = false;
        this.activeB = false;
        this.activeY = false;
        this.activeR = false;
        this.activeG = false;
        this.redsound = false;
        this.bluesound = false;
        this.yellowsound = false;
        this.greensound = false;
    }
    SimonsaysComponent.prototype.ngOnInit = function () {
        this.newGame();
    };
    SimonsaysComponent.prototype.newGame = function () {
        this.clearGame();
    };
    SimonsaysComponent.prototype.clearGame = function () {
        this.currentGame = [];
        this.count = 0;
        this.addCount();
    };
    SimonsaysComponent.prototype.addCount = function () {
        this.count++;
        // add an animated fade out;
        console.log('this.count ', this.count);
        this.generateMove();
    };
    SimonsaysComponent.prototype.addToPlayer = function (color) {
        var field = color;
        console.log('field ', field);
        this.player.push(field);
        console.log('this.player ', this.player);
        this.playerTurn(field);
    };
    SimonsaysComponent.prototype.playerTurn = function (field) {
        if (this.player[this.player.length - 1] !== this.currentGame[this.player.length - 1]) {
            if (this.strict) {
                this.message = 'Try again from the beginning';
                this.newGame();
            }
            else {
                this.message = 'Wrong move try again';
                this.showMoves();
            }
        }
        else {
            this.message = "Good Move!";
            var check = this.player.length === this.currentGame.length;
            if (check) {
                if (this.count === 20) {
                    this.message = 'You have won!';
                }
                else {
                    this.message = 'Next round!';
                    this.nextLevel();
                }
            }
        }
    };
    SimonsaysComponent.prototype.nextLevel = function () {
        this.addCount();
    };
    SimonsaysComponent.prototype.generateMove = function () {
        var showColor = this.possibilities[Math.floor(Math.random() * 4)];
        this.currentGame.push(showColor);
        console.log('this.currentGame ', this.currentGame);
        this.showMoves();
    };
    SimonsaysComponent.prototype.showMoves = function () {
        var _this = this;
        var i = 0;
        var moves = setInterval(function () {
            _this.playGame(_this.currentGame[i]);
            i++;
            if (i >= _this.currentGame.length) {
                clearInterval(moves);
            }
        }, 600);
        this.clearPlayer();
    };
    SimonsaysComponent.prototype.playGame = function (field) {
        var _this = this;
        if (field === 'Red') {
            this.activeR = true;
            this.redsound = true;
        }
        else if (field === 'Blue') {
            this.activeB = true;
            this.bluesound = true;
        }
        else if (field === 'Green') {
            this.activeG = true;
            this.greensound = true;
        }
        else if (field === 'Yellow') {
            this.activeY = true;
            this.yellowsound = true;
        }
        setTimeout(function () {
            _this.activeR = false;
            _this.redsound = false;
            _this.activeB = false;
            _this.bluesound = false;
            _this.activeY = false;
            _this.yellowsound = false;
            _this.activeG = false;
            _this.greensound = false;
        }, 300);
        console.log('playGame field ', field);
    };
    SimonsaysComponent.prototype.onStrict = function () {
        if (this.strict === false) {
            this.strict = true;
        }
        else {
            this.strict = false;
        }
    };
    SimonsaysComponent.prototype.clearPlayer = function () {
        this.player = [];
    };
    return SimonsaysComponent;
}());
SimonsaysComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-simonsays',
        template: __webpack_require__("../../../../../src/app/simonsays/simonsays.component.html"),
        styles: [__webpack_require__("../../../../../src/app/simonsays/simonsays.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SimonsaysComponent);

//# sourceMappingURL=simonsays.component.js.map

/***/ }),

/***/ "../../../../../src/app/tictactoe/board/board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.row {\r\n  clear: both;\r\n}*/\r\n\r\n.box {\r\n  margin-left: 30%;\r\n  margin-top: 10%;\r\n}\r\n\r\n.status {\r\n  font-size: 40px;\r\n  color: #e0f7fa;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tictactoe/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n<div class=\"row\" *ngFor=\"let row of [0,1,2]\">\n  <app-square *ngFor=\"let col of [0,1,2]\"\n              [state]=\"squares[col+row*3]\"\n              (click)=\"makeMove(col+row*3)\" >\n  </app-square>\n</div>\n<div class=\"row\">\n  <div class=\"status\" ngStyle.xs=\"font-size: 24px;\">{{ status }}</div>\n</div>\n<div class=\"row\">\n  <button class=\"btn btn-default\" (click)=\"newGame()\">New Game</button>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tictactoe/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoardComponent = (function () {
    function BoardComponent() {
        this.squares = Array(9).fill(null);
        this.player = 'X';
        this.winner = null;
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent.prototype.newGame = function () {
        this.squares = Array(9).fill(null);
        this.player = 'X';
        this.winner = null;
    };
    Object.defineProperty(BoardComponent.prototype, "status", {
        get: function () {
            return this.winner ? "Winner: " + this.winner : "Player: " + this.player;
        },
        enumerable: true,
        configurable: true
    });
    BoardComponent.prototype.winningMove = function () {
        var lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6] // diagonal
        ];
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            if (this.squares[line[0]]
                && this.squares[line[0]] === this.squares[line[1]]
                && this.squares[line[1]] === this.squares[line[2]]) {
                return true;
            }
        }
        return false;
    };
    BoardComponent.prototype.makeMove = function (position) {
        //console.log('position ', position);
        if (!this.winner && !this.squares[position]) {
            this.squares[position] = this.player;
            if (this.winningMove()) {
                this.winner = this.player;
            }
            this.player = this.player === 'X' ? 'O' : 'X';
        }
    };
    return BoardComponent;
}());
BoardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-board',
        template: __webpack_require__("../../../../../src/app/tictactoe/board/board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tictactoe/board/board.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BoardComponent);

//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ "../../../../../src/app/tictactoe/square/square.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  width: 60px;\r\n  height: 60px;\r\n  border: 1px solid #e0f7fa;\r\n  float: left;\r\n  font-size: 30px;\r\n  color: #e0f7fa;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tictactoe/square/square.component.html":
/***/ (function(module, exports) {

module.exports = "{{ state }}\n"

/***/ }),

/***/ "../../../../../src/app/tictactoe/square/square.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SquareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SquareComponent = (function () {
    function SquareComponent() {
    }
    SquareComponent.prototype.ngOnInit = function () {
    };
    return SquareComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SquareComponent.prototype, "state", void 0);
SquareComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-square',
        template: __webpack_require__("../../../../../src/app/tictactoe/square/square.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tictactoe/square/square.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SquareComponent);

//# sourceMappingURL=square.component.js.map

/***/ }),

/***/ "../../../../../src/app/tictactoe/tictactoe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n  background-image: url('');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-attachment: fixed;\r\n  background-color: #4fb3bf;\r\n  height: 800px;\r\n}\r\n\r\n.spacer {\r\n  padding: 1%;\r\n}\r\n\r\n.block {\r\n  /*margin-left: 25%;*/\r\n  background-image: url('https://image.freepik.com/free-vector/blackboard-dark-texture_1048-1028.jpg');\r\n  background-repeat: no-repeat;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  width: 400px;\r\n  color: #e0f7fa;\r\n  opacity: 0.9;\r\n  background-color: #005662;\r\n  height: 460px;\r\n  border-radius: 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tictactoe/tictactoe.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container-fluid top\">\n    <div class=\"spacer\"></div>\n  <div class=\"block text-center\" ngStyle.xs=\"width: 300px;\">\n    <h1 ngStyle.xs=\"font-size: 24px;\">Tic Tac Toe</h1>\n    <app-board></app-board>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tictactoe/tictactoe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TictactoeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TictactoeComponent = (function () {
    function TictactoeComponent() {
    }
    // https://www.youtube.com/watch?v=dfIkIptSaC8
    TictactoeComponent.prototype.ngOnInit = function () {
    };
    return TictactoeComponent;
}());
TictactoeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tictactoe',
        template: __webpack_require__("../../../../../src/app/tictactoe/tictactoe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tictactoe/tictactoe.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], TictactoeComponent);

//# sourceMappingURL=tictactoe.component.js.map

/***/ }),

/***/ "../../../../../src/app/tribute/tribute.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n  background-image: url('');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-color: white;\r\n  height: 800px;\r\n}\r\n\r\n.image {\r\n  /*width: 450px;*/\r\n  max-width: 100%;\r\n\r\n}\r\n\r\n\r\n.spacer {\r\n  height: 30px;\r\n}\r\n\r\n.thumb {\r\n  margin: 20px;\r\n}\r\n\r\n.books {\r\n  margin-bottom: 20px;\r\n}\r\n\r\na {\r\n  color: #cb2927;\r\n}\r\n\r\n.card {\r\n  /*height: 320px;*/\r\n  width: 500px;\r\n  vertical-align: top;\r\n  border: 1px solid white;\r\n\r\n}\r\n\r\n.book {\r\n  /*height: 420px;*/\r\n  width: 500px;\r\n  vertical-align: top;\r\n  border: 1px solid white;\r\n\tbox-shadow: none;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tribute/tribute.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid top\">\n  <h1 class=\"text-center\">Colour Theory</h1>\n  <div class=\"container\" layout=\"column\">\n    <md-grid-list [cols]=\"cols | async\" gutterSize=\"10px\" rowHeight=\"360px\">\n\n      <md-grid-tile >\n        <!--<md-card class=\"card\"> -->\n          <div class=\"card\">\n            <h6><a href=\"{{ wikiColorUrl}}\" target=\"_blank\">{{ wikiColorTitle }} from Wikipedia API</a></h6>\n            <p>{{ wikiColorDesc }}</p>\n            <h6><a href=\"{{ wikiUrl}}\" target=\"_blank\">{{ wikiName }} from Wikipedia API</a></h6>\n            <p>{{ wikiDesc }}</p>\n          </div>\n        <!--</md-card>-->\n      </md-grid-tile>\n\n      <md-grid-tile>\n        <!--<md-card class=\"card\"> -->\n          <div class=\"card\">\n          <h6>Color Charts by Johannes Itten</h6>\n        <img class=\"image\" src=\"http://www.huevaluechroma.com/pics/0.2.2.jpg\" >\n        </div>\n        <!-- </md-card> -->\n      </md-grid-tile>\n\n      <md-grid-tile>\n        <!--<md-card class=\"book\"> -->\n          <div class=\"book\">\n          <img md-card-sm-image class=\"thumb\" src=\"{{ book2Img }}\" >\n          <h6>\n            Author: {{ book2Author }} - <a href=\"{{ book2Preview }}\" target=\"_blank\">{{ book2Title}}</a>\n          </h6>\n            Published by: {{ book2Publisher}} - {{ book2PublishedDate }}\n            <h6> {{ book2Subtitle }}</h6>\n          <p>\n            {{ book2Desc }}\n          </p>\n          </div>\n        <!--</md-card> -->\n      </md-grid-tile>\n\n      <md-grid-tile>\n        <!--<md-card class=\"book\"> -->\n          <div class=\"book\">\n          <img md-card-sm-image class=\"thumb\" src=\"{{ book1Img }}\" >\n          <h6>\n            Author: {{ book1Author }} - <a href=\"{{ book2Preview }}\" target=\"_blank\">{{ book1Title}}</a>\n          </h6>\n            <h6>Published by: {{ book1Publisher}} - {{ book1PublishedDate }}</h6>\n          <p>\n            {{ book1Desc }}\n          </p>\n          </div>\n        <!--</md-card> -->\n      </md-grid-tile>\n\n    </md-grid-list>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/tribute/tribute.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TributeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tribute_service__ = __webpack_require__("../../../../../src/app/tribute/tribute.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TributeComponent = (function () {
    function TributeComponent(tributeService, observableMedia) {
        this.tributeService = tributeService;
        this.observableMedia = observableMedia;
        this.imageUrl = 'https://commons.wikimedia.org/wiki/';
        this.books = [];
        this.book2Author = [];
        this.book2Desc = '';
        this.book2Title = '';
        this.book2Subtitle = '';
        this.book2Preview = '';
        this.book2Img = '';
        this.book2Publisher = '';
        this.book2PublishedDate = '';
        this.book1 = [];
        this.book1Author = [];
        this.book1Title = '';
        this.book1Preview = '';
        this.book1Desc = '';
        this.book1Publisher = '';
        this.book1PublishedDate = '';
        this.book1Img = '';
        this.wikiDesc = [];
        this.wikiUrl = [];
        this.wikiName = [];
        this.wikiColor = [];
        this.wikiColorDesc = [];
        this.wikiColorTitle = [];
        this.wikiColorUrl = [];
        this.wikiData = [];
        this.wikiExtract = [];
        this.description = '';
        this.previewLink = '';
        this.image = '';
    }
    TributeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getGoogleBooks();
        this.getWikiData();
        this.getWikiSearch();
        // set cols
        if (this.observableMedia.isActive("xs")) {
            this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(1);
        }
        else if (this.observableMedia.isActive("sm")) {
            this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(1);
        }
        else if (this.observableMedia.isActive("md")) {
            this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(2);
        }
        else if (this.observableMedia.isActive("lg") || this.observableMedia.isActive("xl")) {
            this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(2);
        }
        // observe changes
        this.observableMedia.asObservable()
            .subscribe(function (change) {
            switch (change.mqAlias) {
                case "xs":
                    return _this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(1);
                case "sm":
                    return _this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(1);
                case "md":
                    return _this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(2);
                case "lg":
                case "xl":
                    return _this.cols = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(2);
            }
        });
    };
    TributeComponent.prototype.ngOnDestroy = function () {
        this.googleBooksSubscription.unsubscribe();
        this.wikiSearchSubscription.unsubscribe();
        this.wikiDataSubscription.unsubscribe();
    };
    TributeComponent.prototype.getGoogleBooks = function () {
        var _this = this;
        this.googleBooksSubscription = this.tributeService.getGoogleBooks()
            .subscribe(function (res) {
            _this.books = res;
            _this.book2Author = res.items[1].volumeInfo.authors;
            _this.book2Title = res.items[1].volumeInfo.title;
            _this.book2Subtitle = res.items[1].volumeInfo.subtitle;
            _this.book2Preview = res.items[1].volumeInfo.previewLink;
            _this.book2Desc = res.items[1].volumeInfo.description;
            _this.book2Img = res.items[1].volumeInfo.imageLinks.thumbnail;
            _this.book2Publisher = res.items[1].volumeInfo.publisher;
            _this.book2PublishedDate = res.items[1].volumeInfo.publishedDate;
            _this.book1 = res.items[0];
            _this.book1Author = res.items[0].volumeInfo.authors;
            _this.book1Title = res.items[0].volumeInfo.title;
            _this.book1Preview = res.items[0].volumeInfo.previewLink;
            _this.book1Desc = res.items[0].volumeInfo.description;
            _this.book1Publisher = res.items[0].volumeInfo.publisher;
            _this.book1PublishedDate = res.items[0].volumeInfo.publishedDate;
            _this.book1Img = res.items[0].volumeInfo.imageLinks.thumbnail;
            console.log('this.books ', res.items);
        });
    };
    // getWikiExtract() {
    //   // Johannes Itten Extract
    //   this.tributeService.searchWikiExtract()
    //     .subscribe( res => {
    //       this.wikiExtract = res.query.pages[451137].extract;
    //       console.log('getWikiExtract ', res.query.pages[451137].extract);
    //     });
    // }
    TributeComponent.prototype.getWikiSearch = function () {
        var _this = this;
        // Color theory
        this.wikiSearchSubscription = this.tributeService.searchWiki()
            .subscribe(function (res) {
            _this.wikiColor = res;
            _this.wikiColorTitle = res[1][0];
            _this.wikiColorDesc = res[2][0];
            _this.wikiColorUrl = res[3][0];
            console.log('color theory', res);
        });
    };
    TributeComponent.prototype.getWikiData = function () {
        var _this = this;
        // Johannes Itten
        this.wikiDataSubscription = this.tributeService.search()
            .subscribe(function (res) {
            _this.wikiData = res;
            _this.wikiName = res[1];
            _this.wikiDesc = res[2];
            _this.wikiUrl = res[3];
            console.log('johanes itten ', res);
        });
    };
    return TributeComponent;
}());
TributeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tribute',
        template: __webpack_require__("../../../../../src/app/tribute/tribute.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tribute/tribute.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__tribute_service__["a" /* TributeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__tribute_service__["a" /* TributeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__tribute_service__["a" /* TributeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _b || Object])
], TributeComponent);

var _a, _b;
//# sourceMappingURL=tribute.component.js.map

/***/ }),

/***/ "../../../../../src/app/tribute/tribute.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TributeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TributeService = (function () {
    // https://developers.google.com/books/
    // https://developers.google.com/books/docs/v1/getting_started
    // https://stackoverflow.com/questions/1625162/get-text-content-from-mediawiki-page-via-api
    function TributeService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
        this.data = [];
        this.wikidata = [];
        this.wikiRes = [];
    }
    TributeService.prototype.getGoogleBooks = function () {
        var url = 'https://www.googleapis.com/books/v1/volumes?q=johannes+itten&callback=JSONP_CALLBACK';
        return this.jsonp.get(url)
            .map(function (result) {
            var data = result.json();
            //console.log('tribute data ', data);
            return data;
        });
    };
    TributeService.prototype.search = function () {
        // https://www.mediawiki.org/wiki/API:Tutorial
        //let wikiurl = 'http://en.wikipedia.org/w/api.php?action=query&titles=Albert%20Einstein&prop=images';
        var wikiurl = 'http://en.wikipedia.org/w/api.php';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        params.set('search', 'Johannes Itten'); // user's search value.
        params.set('action', 'opensearch');
        params.set('prop', 'revisions');
        params.set('rvprop', 'content');
        params.set('format', 'json');
        params.set('limit', '10');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(wikiurl, { search: params })
            .map(function (result) {
            var wikidata = result.json();
            //console.log('tributeservice wiki data ', wikidata);
            return wikidata;
        });
    };
    TributeService.prototype.searchWikiExtract = function () {
        var url = 'http://en.wikipedia.org/w/api.php';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        //params.set('search', 'Color theory'); // user's search value.
        params.set('action', 'query');
        params.set('prop', 'extracts');
        params.set('titles', 'Johannes Itten');
        params.set('format', 'json');
        params.set('limit', '10');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(url, { search: params })
            .map(function (res) {
            var wikiRes = res.json();
            //console.log('wikiRes ', wikiRes);
            return wikiRes;
        });
    };
    TributeService.prototype.searchWiki = function () {
        // https://www.mediawiki.org/wiki/API:Tutorial
        //let wikiurl = 'http://en.wikipedia.org/w/api.php?action=query&titles=Albert%20Einstein&prop=images';
        var wikiurl = 'http://en.wikipedia.org/w/api.php';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        params.set('search', 'Color theory'); // user's search value.
        params.set('action', 'opensearch');
        params.set('prop', 'revisions');
        params.set('rvprop', 'content');
        params.set('format', 'json');
        params.set('limit', '10');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(wikiurl, { search: params })
            .map(function (res) {
            var wikiRes = res.json();
            //console.log('wikiRes ', wikiRes);
            return wikiRes;
        });
    };
    return TributeService;
}());
TributeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], TributeService);

var _a, _b;
//# sourceMappingURL=tribute.service.js.map

/***/ }),

/***/ "../../../../../src/app/twitch/twitch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.container-fluid {\r\n  background-image: url('https://www.lfgdating.com/gamer-dating-blog/wp-content/uploads/2017/05/twitchtextured.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-color: #2e205b;\r\n  height: 900px;\r\n}*/\r\n\r\n.container-fluid {\r\n  background-color:#2e205b;\r\n  height: 1600px;\r\n}\r\n\r\n.background {\r\n  background-image: url('https://www.lfgdating.com/gamer-dating-blog/wp-content/uploads/2017/05/twitchtextured.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  height: 800px;\r\n}\r\n\r\n\r\n.offline:hover, .offline:link {\r\n  cursor: default;\r\n  text-decoration: none;\r\n  pointer-events: none;\r\n}\r\n\r\na{\r\n  color:white;\r\n}\r\n\r\n.block {\r\n    background-color: black;\r\n    opacity: .7;\r\n    color: white;\r\n    padding: 50px;\r\n    width: 90%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    border-radius: 15px;\r\n    font-size: 1.5em;\r\n    padding-bottom: 2%;\r\n    }\r\n\r\n  .spacer {\r\n    padding: 3%;\r\n  }\r\n\r\n\r\n\r\n  li {\r\n    list-style-type: none;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/twitch/twitch.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body>\n  <div class='page container-fluid' ngClass.gt-xs=\"background\">\n    <div class='spacer'></div>\n    <div class='block text-center'>\n      <h1 ngStyle.xs=\"font-size: 24px;\">Twitch TV JSON API</h1>\n      <a href='https://www.twitch.tv/freecodecamp' target='blank'>\n        <h3 ngStyle.xs=\"font-size: 24px;\">freeCodeCamp is\n          <span  ngStyle.xs=\"font-size: 24px;\">{{ freecodecamp }}</span>\n        </h3>\n      </a>\n    </div>\n\n    <div class='spacer'></div>\n\n    <div class='block'>\n      <div class='row'>\n        <div class='col-md-4' id='user' ngStyle.xs=\"font-size: 24px;\">\n          User:<br>\n          <ul>\n            <li *ngFor=\"let list of twitchList\">\n              <a href=\"{{list.status === 'is ONLINE' ? list.url : '' }}\"\n                [ngClass]=\"list.status === 'is ONLINE' ? 'online' : 'offline' \"\n                target=\"_blank\"\n                ngStyle.xs=\"font-size: 20px;\">\n                {{ list.user}}\n              </a>\n            </li>\n          </ul>\n\n\n        </div>\n        <div class='col-md-4' id='status' ngStyle.xs=\"font-size: 24px;\">\n          Status:<br>\n          <ul>\n            <li *ngFor=\"let list of twitchList\">\n              <a href=\"{{list.status === 'is ONLINE' ? list.url : '' }}\"\n                [ngClass]=\"list.status === 'is ONLINE' ? 'online' : 'offline' \"\n                target=\"_blank\"\n                ngStyle.xs=\"font-size: 20px;\">\n                {{ list.status}}\n              </a>\n            </li>\n          </ul>\n\n        </div>\n        <div class='col-md-4' id='game' ngStyle.xs=\"font-size: 24px;\">\n          Game:<br>\n          <ul>\n            <li *ngFor=\"let list of twitchList\">\n              <a href=\"{{list.status === 'is ONLINE' ? list.url : '' }}\"\n                [ngClass]=\"list.status === 'is ONLINE' ? 'online' : 'offline' \"\n                target=\"_blank\"\n                ngStyle.xs=\"font-size: 20px;\">\n                {{ list.game}}\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div class='spacer'></div>\n\n  </div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/twitch/twitch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__twitch_service__ = __webpack_require__("../../../../../src/app/twitch/twitch.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwitchComponent = (function () {
    function TwitchComponent(twitchService) {
        this.twitchService = twitchService;
        //nameOnline = [];
        //nameOffline = [];
        //listUsers = [];
        this.twitchList = [];
        this.channel = '';
        this.freecodecamp = '';
        this.userStreaming = '';
        this.checkOnline = '';
        this.channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    }
    TwitchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.channels.forEach(function (item) {
            _this.channel = item;
            console.log('this.channel ', _this.channel);
            _this.getTwitchUser(_this.channel);
            _this.getTwitchStream(_this.channel);
            _this.getTwitchChannel(_this.channel);
        });
    };
    TwitchComponent.prototype.ngOnDestroy = function () {
        this.twitchUserSubscription.unsubscribe();
        this.twitchStreamSubscription.unsubscribe();
        this.twitchChannelSubscription.unsubscribe();
    };
    TwitchComponent.prototype.getTwitchChannel = function (item) {
        var _this = this;
        this.twitchChannelSubscription = this.twitchService.getChannel(item)
            .subscribe(function (result) {
            _this.dataChannel = result;
            //console.log('this.dataChannel ', this.dataChannel);
            // user, name, status, and game
        });
    };
    TwitchComponent.prototype.getTwitchStream = function (item) {
        var _this = this;
        this.twitchStreamSubscription = this.twitchService.getStream(item)
            .subscribe(function (res) {
            _this.dataStream = res;
            console.log('twitch data stream ', _this.dataStream);
            var name = _this.dataStream._links.self.slice(37);
            var game = '';
            var url = "https://www.twitch.tv/" + name;
            //console.log('this.dataStream.stream ', this.dataStream.stream );
            if (_this.dataStream.stream !== null) {
                game = _this.dataStream.stream.game;
                _this.isStreaming = true;
                //this.nameOnline.push(name);
                //this.listUsers.push(name + ' SUCCESS');
                _this.twitchList.push({
                    user: name,
                    status: 'is ONLINE',
                    game: game,
                    url: url
                });
                //console.log('this.nameOnline ', this.nameOnline)
                if (game !== null) {
                    console.log('game ', game);
                }
                if (_this.dataStream === 'freecodecamp') {
                    _this.freecodecamp = 'online';
                }
            }
            else {
                _this.isStreaming = false;
                //console.log('name is offline ',name);
                //this.nameOffline.push(name);
                //this.listUsers.push(name + ' NULL');
                _this.twitchList.push({
                    user: name,
                    status: 'is offline',
                    game: 'N/A',
                    url: 'offline'
                });
                //console.log('this.nameOffline ', this.nameOffline);
                //this.userStreaming = 'offline';
                _this.freecodecamp = 'offline';
                //console.log('game ', 'N/A');
                //console.log('offline');
                _this.checkOnline = 'offline';
            }
            if (_this.dataStream === undefined) {
                _this.isDeleted = true;
            }
            console.log('this.twitchList ', _this.twitchList);
            //console.log('this.freecodecamp ', this.freecodecamp);
        });
    };
    TwitchComponent.prototype.getTwitchUser = function (item) {
        var _this = this;
        this.twitchUserSubscription = this.twitchService.getTwitchUser(item)
            .subscribe(function (result) {
            _this.dataUser = result;
            _this.user = _this.dataUser.display_name;
            console.log('this.user ', _this.user);
        });
    };
    return TwitchComponent;
}());
TwitchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-twitch',
        template: __webpack_require__("../../../../../src/app/twitch/twitch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/twitch/twitch.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__twitch_service__["a" /* TwitchService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__twitch_service__["a" /* TwitchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__twitch_service__["a" /* TwitchService */]) === "function" && _a || Object])
], TwitchComponent);

var _a;
//# sourceMappingURL=twitch.component.js.map

/***/ }),

/***/ "../../../../../src/app/twitch/twitch.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TwitchService = (function () {
    function TwitchService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
        this.data = [];
        this.test = [];
        this.dataStream = [];
        this.content = [];
        this.userlist = ["freecodecamp"];
        this.url = 'https://api.twitch.tv/kraken/search/streams';
        this.channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
        this.client_id = 'b7g5stpwmz0u9e72f6a4myuvtawk7f';
        this.callback = '$callback=JSONP_CALLBACK';
        this.searchChannel = '';
        this.apiBaseUrl = 'https://api.twitch.tv/kraken/users/';
        this.user = 'ESL_SC2';
        this.query = '?callback=JSONP_CALLBACK';
        this.options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                "Client-ID": 'b7g5stpwmz0u9e72f6a4myuvtawk7f'
            })
        };
    }
    // https://codepen.io/tubber/pen/mAKKmA
    // https://stackoverflow.com/questions/40537285/calling-the-twitch-api-with-angular-2
    //http://www.concretepage.com/angular-2/angular-2-http-get-parameters-headers-urlsearchparams-requestoptions-example
    // https://github.com/Lakston/angular-twitch-viewer/tree/master/src
    TwitchService.prototype.getChannel = function (item) {
        return this.http.get("https://api.twitch.tv/kraken/channels/" + item.name, this.options)
            .map(function (res) {
            var data = res.json();
            //console.log('twitch service test items ', data);
            return data;
        });
    };
    TwitchService.prototype.getStream = function (item) {
        return this.http.get("https://api.twitch.tv/kraken/streams/" + item, this.options)
            .map(function (res) {
            var dataStream = res.json();
            //console.log('dataStream ', dataStream);
            return dataStream;
        });
    };
    TwitchService.prototype.getTwitchUser = function (item) {
        return this.http.get("https://api.twitch.tv/kraken/users/" + item + "?client_id=b7g5stpwmz0u9e72f6a4myuvtawk7f")
            .map(function (res) {
            //console.log('test ', res.json())
            var test = res.json();
            return test;
        });
    };
    return TwitchService;
}());
TwitchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], TwitchService);

var _a, _b;
//# sourceMappingURL=twitch.service.js.map

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n  background-image: url('');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-color: #b2bac5;\r\n  height: 800px;\r\n}\r\n\r\n\r\n.thunder {\r\n  background-image: url('http://i3.somersetlive.co.uk/incoming/article75204.ece/ALTERNATES/s1200/Thunder.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-color: #b2bac5;\r\n  height: 800px;\r\n}\r\n\r\n.drizzle {\r\n  background-image: url('https://c1.staticflickr.com/7/6191/6113430622_370016e5a9_z.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-color: #b2bac5;\r\n  height: 800px;\r\n}\r\n\r\n.rain {\r\n  background-image: url('https://sites.psu.edu/siowfa16/files/2016/10/rain-generic_650x400_71457950721-1043ddi.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-color: #b2bac5;\r\n  height: 800px;\r\n}\r\n\r\n.snow {\r\n  background-image: url('http://media.phillyvoice.com/media/images/01282017_light_snow_on_roads_i.2e16d0ba.fill-1200x630-c0.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-color: #b2bac5;\r\n  height: 800px;\r\n}\r\n\r\n.fog {\r\n  background-image: url('http://www.metoffice.gov.uk/binaries/content/gallery/mohippo/images/migrated-image/9/walkers-486583_1920_1.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-color: #b2bac5;\r\n  height: 800px;\r\n}\r\n\r\n.clear {\r\n  background-image: url('http://images.all-free-download.com/images/graphiclarge/hd_sky_picture_05_hd_pictures_166299.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-color: #b2bac5;\r\n  height: 800px;\r\n}\r\n\r\n.cloudy {\r\n  background-image: url('https://static.pexels.com/photos/216596/pexels-photo-216596.jpeg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-color: #b2bac5;\r\n  height: 800px;\r\n}\r\n\r\n.block {\r\n    background-color: black;\r\n    opacity: .8;\r\n    color: white;\r\n    padding: 50px;\r\n    width: 75%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    border-radius: 15px;\r\n    font-size: 1.5em;\r\n    padding-bottom: 2%;\r\n  }\r\n\r\ni {\r\n  font-size: 40px;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\n.spacer {\r\n  height: 2%;\r\n}\r\n\r\n\r\n.sunny {\r\n\r\n}\r\n\r\n.cloudy {\r\n\r\n}\r\n\r\n.rainy {\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid top\"\n    [ngClass.gt-xs]=\"{\n      'thunder' : thunder,\n      'drizzle' : drizzle,\n      'rain' : rain,\n      'snow' : snow,\n      'fog' : fog,\n      'clear' : clear,\n      'cloudy' : cloudy }\" >\n  <div class=\"spacer\"></div>\n\n\n  <div class=\"block text-center\" >\n  <h1 ngStyle.xs=\"font-size: 24px;\">Open weather map JSON API</h1>\n    <p ngStyle.xs=\"font-size: 20px;\">Current Local Weather</p>\n    <button class=\"btn btn-primary\" (click)=\"onToggle()\" >\n      <span ngStyle.xs=\"font-size: 14px;\">{{ celsius === false? 'Fahrenheight' : 'Celsius'}}</span>\n    </button>\n    <p>\n      <img src=\"{{ iconUrl }}\" >\n    </p>\n    <p>\n      <span ngStyle.xs=\"font-size: 16px;\">{{ celsius === false ? tempF : tempC }}</span>\n      <span ngStyle.xs=\"font-size: 16px;\">{{ celsius === false ? ' F' : ' C'}}</span>\n    </p>\n    <p ngStyle.xs=\"font-size: 16px;\">{{ weatherData?.weather[0]?.description }}</p>\n    <p ngStyle.xs=\"font-size: 16px;\">Country name: {{ country }}</p>\n    <p ngStyle.xs=\"font-size: 16px;\">City: {{ weatherData?.name }}</p>\n    <p ngStyle.xs=\"font-size: 16px;\">Latitude: {{ lat }}</p>\n    <p ngStyle.xs=\"font-size: 16px;\">Longitude: {{ long }}</p>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_service__ = __webpack_require__("../../../../../src/app/weather/weather.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = (function () {
    // from kelvin to celcius subtract 273
    // up to 299 it is thunder storm
    // up to 499 it is drizzle between 299 and 499
    // from 499 to 599 it is rain.
    // up to 699 it is snow.
    // up to 799 it is fog.
    //just 800 it is clear sky.
    // anything over 801 is cloudy.
    // https://openweathermap.org/weather-conditions
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.celsius = false;
        this.thunder = false;
        this.drizzle = false;
        this.rain = false;
        this.snow = false;
        this.fog = false;
        this.clear = false;
        this.cloudy = false;
        this.backgroundId = [299, 499, 599, 699, 799, 800, 801];
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getgeoip();
        this.weatherSubscription = this.weatherService.weatherDataChanged.subscribe(function () {
            _this.weatherData = _this.weatherService.getWeatherData();
            _this.icon = _this.weatherData.weather[0].icon;
            _this.iconUrl = 'http://openweathermap.org/img/w/' + _this.icon + '.png';
            _this.temp = _this.weatherData.main.temp;
            _this.tempC = Math.round((_this.temp - 32) * (5 / 9));
            _this.tempF = Math.round(_this.temp);
            //console.log('this.temp ', this.temp);
            //console.log('this.icon ', this.icon);
            //console.log('this.iconUrl ', this.iconUrl);
            //console.log('this.weatherData from component ', this.weatherData);
            var id = _this.weatherData.weather[0].id;
            //let bgIndex;
            console.log('id ', id);
            //this.backgroundId.push(id);
            //console.log('backgroundId ', backgroundId);
            //bgIndex = this.backgroundId.sort().indexOf(id);
            //console.log('bgIndex ', bgIndex);
            //this.backgroundImage[bgIndex];
            //this.changeBackgroundImage(bgIndex);
            _this.changeBackgroundImage(id);
        });
    };
    WeatherComponent.prototype.ngOnDestroy = function () {
        this.weatherSubscription.unsubscribe();
        this.ipSubscription.unsubscribe();
    };
    WeatherComponent.prototype.changeBackgroundImage = function (id) {
        if (id <= 299) {
            this.thunder = true;
        }
        else if (id > 299 && id <= 499) {
            this.drizzle = true;
        }
        else if (id > 499 && id <= 599) {
            this.rain = true;
        }
        else if (id > 599 && id <= 699) {
            this.snow = true;
        }
        else if (id > 699 && id <= 799) {
            this.fog = true;
        }
        else if (id === 800) {
            this.clear = true;
        }
        else if (id > 800) {
            this.cloudy = true;
        }
        // up to 299 it is thunder storm
        // up to 499 it is drizzle between 299 and 499
        // from 499 to 599 it is rain.
        // up to 699 it is snow.
        // up to 799 it is fog.
        //just 800 it is clear sky.
        // anything over 801 is cloudy.
    };
    WeatherComponent.prototype.onToggle = function () {
        this.celsius = !this.celsius;
        //console.log('this.celsius ', this.celsius
    };
    WeatherComponent.prototype.getgeoip = function () {
        var _this = this;
        this.ipSubscription = this.weatherService.getGeoip()
            .subscribe(function (res) {
            _this.geoip = res;
            //console.log('this.geoip ', this.geoip);
            _this.city = res.city;
            _this.country = res.country.name;
            _this.lat = res.location.latitude;
            _this.long = res.location.longitude;
            //console.log('this.city ', this.city);
            //console.log('this.country ', this.country);
            //console.log('this.lat ', this.lat);
            //console.log('this.long ', this.long);
        });
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-weather',
        template: __webpack_require__("../../../../../src/app/weather/weather.component.html"),
        styles: [__webpack_require__("../../../../../src/app/weather/weather.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]) === "function" && _a || Object])
], WeatherComponent);

var _a;
//# sourceMappingURL=weather.component.js.map

/***/ }),

/***/ "../../../../../src/app/weather/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeatherService = (function () {
    function WeatherService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.weatherDataChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    // https://openweathermap.org/api
    // https://gist.github.com/P1xt/6aca515e3a4c02756adf06e0ebe1c941
    WeatherService.prototype.getWeatherData = function () {
        console.log('this.weatherData from the service ', this.weatherData);
        return this.weatherData;
    };
    WeatherService.prototype.getWeather = function (lat, lon) {
        var _this = this;
        var APIKEY = '46f0d79940ce443ee80d2a76da8bcdb8';
        return this.http.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&APPID=" + APIKEY)
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log('this.weatherData', result);
            _this.weatherData = result;
            _this.weatherDataChanged.next();
            return _this.weatherData;
        });
    };
    WeatherService.prototype.getGeoip = function () {
        var _this = this;
        return this.http.get('http://geoip.nekudo.com/api/')
            .map(function (result) {
            var resultIp = result.json();
            var lat = resultIp.location.latitude;
            var lon = resultIp.location.longitude;
            _this.getWeather(lat, lon);
            console.log('resultIp ', resultIp);
            console.log('lat, lon ', lat, lon);
            return resultIp;
        });
    };
    return WeatherService;
}());
WeatherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === "function" && _b || Object])
], WeatherService);

var _a, _b;
//# sourceMappingURL=weather.service.js.map

/***/ }),

/***/ "../../../../../src/app/wiki/wiki.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.container-fluid {\r\n  background-image: url('https://www.seoclerk.com/pics/475017-1i21Tl1472557761.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-color:#030303;\r\n  height: 3000px;\r\n}*/\r\n\r\n.container-fluid {\r\n  background-color:#1b1813;\r\n\r\n}\r\n\r\n.background {\r\n  background-image: url('https://www.seoclerk.com/pics/475017-1i21Tl1472557761.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.card {\r\n  width: 100%;\r\n}\r\n\r\n.summary {\r\n  height: 150px;\r\n}\r\n\r\n.url {\r\n  height: 150px;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\n\r\n  .block {\r\n      background-color: black;\r\n      opacity: .8;\r\n      color: white;\r\n      padding: 50px;\r\n      width: 75%;\r\n      margin-right: auto;\r\n      margin-left: auto;\r\n      border-radius: 15px;\r\n      font-size: 1.5em;\r\n      padding-bottom: 2%;\r\n    }\r\n\r\n    .spacer {\r\n      padding: 1%;\r\n    }\r\n\r\n\r\n\r\n    a {\r\n      color: white;\r\n    }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wiki/wiki.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid top\" ngClass.gt-xs=\"background\">\n\n  <div class=\"spacer\"></div>\n  <div class=\"block text-center\">\n    <h1 ngStyle.xs=\"font-size: 24px;\">Wikipedia JSON API</h1>\n    <input #term  placeholder=\"Search Wikipedia\" ngStyle.xs=\"font-size: 12px;\">\n    <button class=\"btn btn-primary\"\n            (click)=\"search(term.value)\"\n            ngStyle.xs=\"font-size: 12px;\">\n            Submit\n    </button>\n    <button class=\"btn btn-success\" >\n      <a href=\"{{ randomWikiUrl}}\" target=\"_blank\" ngStyle.xs=\"font-size: 12px;\" >\n        Random Wikipedia Article\n      </a>\n    </button>\n  </div>\n\n  <div class='spacer'></div>\n    <a name=\"page1\"></a>\n    <div class='block'>\n      <h1 class='text-center'><span id='output' ngStyle.xs=\"font-size: 24px;\">Search Results</span></h1>\n\n      <div *ngFor=\"let wiki of wikiList\">\n        <a href=\"{{ wiki.url }}\" target=\"_blank\">\n          <h4 ngStyle.xs=\"font-size: 20px;\">{{ wiki.title }}</h4>\n        </a>\n        <p ngStyle.xs=\"font-size: 20px;\">{{ wiki.heading }}</p>\n        <br>\n      </div>\n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/wiki/wiki.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WikiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wiki_service__ = __webpack_require__("../../../../../src/app/wiki/wiki.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WikiComponent = (function () {
    function WikiComponent(wikiService) {
        this.wikiService = wikiService;
        this.wikiList = [];
        this.item = [];
        this.userSearch = 'London';
        this.wikiURL = "https://en.wikipedia.org/w/api.php";
        this.wikiSearchTitle = [];
        this.wikiHeading = [];
        this.wikiSummary = [];
        this.wikiUrl = [];
        this.wikiData = [];
        this.randomWikiUrl = 'https://en.wikipedia.org/wiki/Special:Random';
    }
    WikiComponent.prototype.ngOnInit = function () {
        this.search(this.userSearch);
    };
    WikiComponent.prototype.ngOnDestroy = function () {
        this.wikiSubscription.unsubscribe();
    };
    // jqueryTest() {
    //   this.wikiURL += '?' + $.param({
    //     'action' : 'opensearch',
    //     'search' :  this.userSearch,
    //     'prop'  : 'revisions',
    //     'rvprop' : 'content',
    //     'format' : 'json',
    //     'limit' : 10
    //   });
    // }
    WikiComponent.prototype.search = function (searchTerm) {
        var _this = this;
        //this.items = this.wikiService.search(searchTerm);
        this.wikiSubscription = this.wikiService.search(searchTerm)
            .subscribe(function (result) {
            console.log('result ', result);
            _this.items = result;
            var dataTitle = _this.items[1];
            var dataHeading = _this.items[2];
            var dataUrl = _this.items[3];
            //console.log('this.items ', this.items[1][0], this.items[2][0], this.items[3][0] );
            //console.log('this.items ', this.items[1][1], this.items[2][1], this.items[3][1] );
            _this.wikiList = dataTitle.map(function (x, i) {
                return {
                    title: x,
                    heading: dataHeading[i],
                    url: dataUrl[i]
                };
            });
            console.log('this.wikiList ', _this.wikiList);
        });
    };
    return WikiComponent;
}());
WikiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-wiki',
        template: __webpack_require__("../../../../../src/app/wiki/wiki.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wiki/wiki.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__wiki_service__["a" /* WikiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__wiki_service__["a" /* WikiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wiki_service__["a" /* WikiService */]) === "function" && _a || Object])
], WikiComponent);

var _a;
//# sourceMappingURL=wiki.component.js.map

/***/ }),

/***/ "../../../../../src/app/wiki/wiki.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WikiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WikiService = (function () {
    function WikiService(jsonp) {
        this.jsonp = jsonp;
        this.data = [];
        this.dataTitle = [];
        this.dataHeading = [];
        this.dataUrl = [];
        this.wikiList = [];
    }
    // https://stackoverflow.com/questions/38204053/javascript-map-2-arrays-into-1-object
    WikiService.prototype.search = function (term) {
        var wikiurl = 'http://en.wikipedia.org/w/api.php';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        params.set('search', term); // user's search value.
        params.set('action', 'opensearch');
        params.set('prop', 'revisions');
        params.set('rvprop', 'content');
        params.set('format', 'json');
        params.set('limit', '10');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(wikiurl, { search: params })
            .map(function (result) {
            var data = result.json();
            var dataTitle = result.json()[1];
            var dataHeading = result.json()[2];
            var dataUrl = result.json()[3];
            //console.log('wikiservice data ', data);
            return data;
        });
    };
    return WikiService;
}());
WikiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === "function" && _a || Object])
], WikiService);

var _a;
//# sourceMappingURL=wiki.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map