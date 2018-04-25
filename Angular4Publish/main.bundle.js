webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n    <h2>Product List - </h2>\n    <p>DateInput</p>\n    <kendo-dateinput [value]=\"value\"></kendo-dateinput>\n    <p>(use <code>←</code> and <code>→</code> to navigate, <code>↑</code> and <code>↓</code> to update)</p>\n    <p>DatePicker</p>\n    <kendo-datepicker [value]=\"value\"></kendo-datepicker>\n    <br>\n    <div class=\"example-wrapper\">\n        <button kendoButton *ngIf=\"!dialogOpened && !windowOpened\" (click)=\"open('dialog')\">Open dialog</button>\n        <button kendoButton *ngIf=\"!dialogOpened && !windowOpened\" (click)=\"open('window')\">Open window</button>\n        <kendo-dialog title=\"Awesome title goes here\" *ngIf=\"dialogOpened\" (close)=\"close('dialog')\" [minWidth]=\"250\" [width]=\"450\">\n            <p style=\"margin: 30px; text-align: center;\">Are you sure you want to continue?</p>\n            <kendo-dialog-actions>\n                <button kendoButton (click)=\"action('no')\">No</button>\n                <button kendoButton (click)=\"action('yes')\" primary=\"true\">Yes</button>\n            </kendo-dialog-actions>\n        </kendo-dialog>\n    \n        <kendo-window [minWidth]=\"200\" [minHeight]=\"125\" [draggable]=\"isDraggable\" title=\"About\" *ngIf=\"windowOpened\" (close)=\"close('window')\">\n          <p style=\"text-align: center;\">Additional info</p>\n        </kendo-window>\n      </div>\n    <kendo-grid [data]=\"gridData\" [pageable]=\"true\" [selectable]=\"true\" [filterable]=\"true\" [sortable]=\"true\" [skip]=\"skip\" [pageSize]=\"20\"\n        [height]=\"500\">\n        <ng-template kendoGridToolbarTemplate>\n            <button kendoGridPDFCommand>\n                <span class='k-icon k-i-file-pdf'></span>Export to PDF</button>\n            <button type=\"button\" kendoGridExcelCommand>\n                <span class=\"k-icon k-i-file-excel\"></span>Export to </button>\n        </ng-template>\n        <kendo-grid-column field=\"ProductID\" title=\"ID\" width=\"40\">\n        </kendo-grid-column>\n        <kendo-grid-column field=\"ProductName\" title=\"Product\" width=\"250\">\n        </kendo-grid-column>\n        <kendo-grid-column field=\"UnitPrice\" title=\"Price\" width=\"80\" filter=\"numeric\">\n        </kendo-grid-column>\n        <kendo-grid-column field=\"UnitsInStock\" title=\"In stock\" width=\"80\">\n        </kendo-grid-column>\n        <kendo-grid-column field=\"Discontinued\" title=\"Discontinued\" width=\"120\">\n            <ng-template kendoGridCellTemplate let-dataItem>\n                <input type=\"checkbox\" [checked]=\"dataItem.Discontinued\" />\n            </ng-template>\n        </kendo-grid-column>\n        <kendo-grid-pdf fileName=\"Products.pdf\" [allPages]=\"true\" paperSize=\"A4\" [repeatHeaders]=\"true\" [landscape]=\"true\">\n            <kendo-grid-pdf-margin top=\"2cm\" left=\"1cm\" right=\"1cm\" bottom=\"2cm\"></kendo-grid-pdf-margin>\n            <ng-template kendoGridPDFTemplate let-pageNum=\"pageNum\" let-totalPages=\"totalPages\">\n                <div class=\"page-template\">\n                    <div class=\"header\">\n                        <div style=\"float: right\">Page {{ pageNum }} of {{ totalPages }}</div>\n                        Multi-page grid with automatic page breaking\n                    </div>\n                    <div class=\"footer\">\n                        Page {{ pageNum }} of {{ totalPages }}\n                    </div>\n                </div>\n            </ng-template>\n        </kendo-grid-pdf>\n        <kendo-grid-excel fileName=\"Products.xlsx\"></kendo-grid-excel>\n    </kendo-grid>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_productData_product__ = __webpack_require__("./src/app/productData/product.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.gridData = __WEBPACK_IMPORTED_MODULE_1__app_productData_product__["a" /* products */];
        this.value = new Date();
        this.dialogOpened = false;
        this.isDraggable = true;
        this.windowOpened = false;
    }
    AppComponent.prototype.close = function (component) {
        this[component + 'Opened'] = false;
    };
    AppComponent.prototype.open = function (component) {
        this[component + 'Opened'] = true;
    };
    AppComponent.prototype.action = function (status) {
        console.log("Dialog result: " + status);
        this.dialogOpened = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dateinputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-dateinputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dialog__ = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["b" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["c" /* PDFModule */],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["a" /* ExcelModule */],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dateinputs__["a" /* DateInputsModule */],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dialog__["a" /* DialogsModule */],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_buttons__["b" /* ButtonsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/productData/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sampleProducts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return products; });
var sampleProducts = [
    {
        'ProductID': 3,
        'ProductName': 'Aniseed Syrup',
        'SupplierID': 1,
        'CategoryID': 2,
        'QuantityPerUnit': '12 - 550 ml bottles',
        'UnitPrice': 10,
        'UnitsInStock': 13,
        'UnitsOnOrder': 70,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        },
        'FirstOrderedOn': new Date(1996, 8, 26)
    },
    {
        'ProductID': 4,
        'ProductName': 'Chef Anton\'s Cajun Seasoning',
        'SupplierID': 2,
        'CategoryID': 2,
        'QuantityPerUnit': '48 - 6 oz jars',
        'UnitPrice': 22,
        'UnitsInStock': 53,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        },
        'FirstOrderedOn': new Date(1996, 9, 19)
    },
    {
        'ProductID': 5,
        'ProductName': 'Chef Anton\'s Gumbo Mix',
        'SupplierID': 2,
        'CategoryID': 2,
        'QuantityPerUnit': '36 boxes',
        'UnitPrice': 21.35,
        'UnitsInStock': 0,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': true,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        },
        'FirstOrderedOn': new Date(1996, 7, 17)
    },
    {
        'ProductID': 6,
        'ProductName': 'Grandma\'s Boysenberry Spread',
        'SupplierID': 3,
        'CategoryID': 2,
        'QuantityPerUnit': '12 - 8 oz jars',
        'UnitPrice': 25,
        'UnitsInStock': 120,
        'UnitsOnOrder': 0,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        },
        'FirstOrderedOn': new Date(1996, 9, 19)
    },
    {
        'ProductID': 7,
        'ProductName': 'Uncle Bob\'s Organic Dried Pears',
        'SupplierID': 3,
        'CategoryID': 7,
        'QuantityPerUnit': '12 - 1 lb pkgs.',
        'UnitPrice': 30,
        'UnitsInStock': 15,
        'UnitsOnOrder': 0,
        'ReorderLevel': 10,
        'Discontinued': false,
        'Category': {
            'CategoryID': 7,
            'CategoryName': 'Produce',
            'Description': 'Dried fruit and bean curd'
        },
        'FirstOrderedOn': new Date(1996, 7, 22)
    },
    {
        'ProductID': 8,
        'ProductName': 'Northwoods Cranberry Sauce',
        'SupplierID': 3,
        'CategoryID': 2,
        'QuantityPerUnit': '12 - 12 oz jars',
        'UnitPrice': 40,
        'UnitsInStock': 6,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        },
        'FirstOrderedOn': new Date(1996, 11, 1)
    },
    {
        'ProductID': 9,
        'ProductName': 'Mishi Kobe Niku',
        'SupplierID': 4,
        'CategoryID': 6,
        'QuantityPerUnit': '18 - 500 g pkgs.',
        'UnitPrice': 97,
        'UnitsInStock': 29,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': true,
        'Category': {
            'CategoryID': 6,
            'CategoryName': 'Meat/Poultry',
            'Description': 'Prepared meats'
        },
        'FirstOrderedOn': new Date(1997, 1, 21)
    },
    {
        'ProductID': 10,
        'ProductName': 'Ikura',
        'SupplierID': 4,
        'CategoryID': 8,
        'QuantityPerUnit': '12 - 200 ml jars',
        'UnitPrice': 31,
        'UnitsInStock': 31,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 8,
            'CategoryName': 'Seafood',
            'Description': 'Seaweed and fish'
        },
        'FirstOrderedOn': new Date(1996, 8, 5)
    }
];
var products = [{
        'ProductID': 1,
        'ProductName': 'Chai',
        'SupplierID': 1,
        'CategoryID': 1,
        'QuantityPerUnit': '10 boxes x 20 bags',
        'UnitPrice': 18.0000,
        'UnitsInStock': 39,
        'UnitsOnOrder': 0,
        'ReorderLevel': 10,
        'Discontinued': false,
        'Category': {
            'CategoryID': 1,
            'CategoryName': 'Beverages',
            'Description': 'Soft drinks, coffees, teas, beers, and ales'
        }
    }, {
        'ProductID': 2,
        'ProductName': 'Chang',
        'SupplierID': 1,
        'CategoryID': 1,
        'QuantityPerUnit': '24 - 12 oz bottles',
        'UnitPrice': 19.0000,
        'UnitsInStock': 17,
        'UnitsOnOrder': 40,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 1,
            'CategoryName': 'Beverages',
            'Description': 'Soft drinks, coffees, teas, beers, and ales'
        }
    }, {
        'ProductID': 3,
        'ProductName': 'Aniseed Syrup',
        'SupplierID': 1,
        'CategoryID': 2,
        'QuantityPerUnit': '12 - 550 ml bottles',
        'UnitPrice': 10.0000,
        'UnitsInStock': 13,
        'UnitsOnOrder': 70,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    }, {
        'ProductID': 4,
        'ProductName': 'Chef Anton\'s Cajun Seasoning',
        'SupplierID': 2,
        'CategoryID': 2,
        'QuantityPerUnit': '48 - 6 oz jars',
        'UnitPrice': 22.0000,
        'UnitsInStock': 53,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    }, {
        'ProductID': 5,
        'ProductName': 'Chef Anton\'s Gumbo Mix',
        'SupplierID': 2,
        'CategoryID': 2,
        'QuantityPerUnit': '36 boxes',
        'UnitPrice': 21.3500,
        'UnitsInStock': 0,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': true,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    }, {
        'ProductID': 6,
        'ProductName': 'Grandma\'s Boysenberry Spread',
        'SupplierID': 3,
        'CategoryID': 2,
        'QuantityPerUnit': '12 - 8 oz jars',
        'UnitPrice': 25.0000,
        'UnitsInStock': 120,
        'UnitsOnOrder': 0,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    }, {
        'ProductID': 7,
        'ProductName': 'Uncle Bob\'s Organic Dried Pears',
        'SupplierID': 3,
        'CategoryID': 7,
        'QuantityPerUnit': '12 - 1 lb pkgs.',
        'UnitPrice': 30.0000,
        'UnitsInStock': 15,
        'UnitsOnOrder': 0,
        'ReorderLevel': 10,
        'Discontinued': false,
        'Category': {
            'CategoryID': 7,
            'CategoryName': 'Produce',
            'Description': 'Dried fruit and bean curd'
        }
    }, {
        'ProductID': 8,
        'ProductName': 'Northwoods Cranberry Sauce',
        'SupplierID': 3,
        'CategoryID': 2,
        'QuantityPerUnit': '12 - 12 oz jars',
        'UnitPrice': 40.0000,
        'UnitsInStock': 6,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    }, {
        'ProductID': 9,
        'ProductName': 'Mishi Kobe Niku',
        'SupplierID': 4,
        'CategoryID': 6,
        'QuantityPerUnit': '18 - 500 g pkgs.',
        'UnitPrice': 97.0000,
        'UnitsInStock': 29,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': true,
        'Category': {
            'CategoryID': 6,
            'CategoryName': 'Meat/Poultry',
            'Description': 'Prepared meats'
        }
    }, {
        'ProductID': 10,
        'ProductName': 'Ikura',
        'SupplierID': 4,
        'CategoryID': 8,
        'QuantityPerUnit': '12 - 200 ml jars',
        'UnitPrice': 31.0000,
        'UnitsInStock': 31,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 8,
            'CategoryName': 'Seafood',
            'Description': 'Seaweed and fish'
        }
    }, {
        'ProductID': 11,
        'ProductName': 'Queso Cabrales',
        'SupplierID': 5,
        'CategoryID': 4,
        'QuantityPerUnit': '1 kg pkg.',
        'UnitPrice': 21.0000,
        'UnitsInStock': 22,
        'UnitsOnOrder': 30,
        'ReorderLevel': 30,
        'Discontinued': false,
        'Category': {
            'CategoryID': 4,
            'CategoryName': 'Dairy Products',
            'Description': 'Cheeses'
        }
    }, {
        'ProductID': 12,
        'ProductName': 'Queso Manchego La Pastora',
        'SupplierID': 5,
        'CategoryID': 4,
        'QuantityPerUnit': '10 - 500 g pkgs.',
        'UnitPrice': 38.0000,
        'UnitsInStock': 86,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 4,
            'CategoryName': 'Dairy Products',
            'Description': 'Cheeses'
        }
    }, {
        'ProductID': 13,
        'ProductName': 'Konbu',
        'SupplierID': 6,
        'CategoryID': 8,
        'QuantityPerUnit': '2 kg box',
        'UnitPrice': 6.0000,
        'UnitsInStock': 24,
        'UnitsOnOrder': 0,
        'ReorderLevel': 5,
        'Discontinued': false,
        'Category': {
            'CategoryID': 8,
            'CategoryName': 'Seafood',
            'Description': 'Seaweed and fish'
        }
    }, {
        'ProductID': 14,
        'ProductName': 'Tofu',
        'SupplierID': 6,
        'CategoryID': 7,
        'QuantityPerUnit': '40 - 100 g pkgs.',
        'UnitPrice': 23.2500,
        'UnitsInStock': 35,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 7,
            'CategoryName': 'Produce',
            'Description': 'Dried fruit and bean curd'
        }
    }, {
        'ProductID': 15,
        'ProductName': 'Genen Shouyu',
        'SupplierID': 6,
        'CategoryID': 2,
        'QuantityPerUnit': '24 - 250 ml bottles',
        'UnitPrice': 15.5000,
        'UnitsInStock': 39,
        'UnitsOnOrder': 0,
        'ReorderLevel': 5,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    }, {
        'ProductID': 16,
        'ProductName': 'Pavlova',
        'SupplierID': 7,
        'CategoryID': 3,
        'QuantityPerUnit': '32 - 500 g boxes',
        'UnitPrice': 17.4500,
        'UnitsInStock': 29,
        'UnitsOnOrder': 0,
        'ReorderLevel': 10,
        'Discontinued': false,
        'Category': {
            'CategoryID': 3,
            'CategoryName': 'Confections',
            'Description': 'Desserts, candies, and sweet breads'
        }
    }, {
        'ProductID': 17,
        'ProductName': 'Alice Mutton',
        'SupplierID': 7,
        'CategoryID': 6,
        'QuantityPerUnit': '20 - 1 kg tins',
        'UnitPrice': 39.0000,
        'UnitsInStock': 0,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': true,
        'Category': {
            'CategoryID': 6,
            'CategoryName': 'Meat/Poultry',
            'Description': 'Prepared meats'
        }
    }, {
        'ProductID': 18,
        'ProductName': 'Carnarvon Tigers',
        'SupplierID': 7,
        'CategoryID': 8,
        'QuantityPerUnit': '16 kg pkg.',
        'UnitPrice': 62.5000,
        'UnitsInStock': 42,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 8,
            'CategoryName': 'Seafood',
            'Description': 'Seaweed and fish'
        }
    }, {
        'ProductID': 19,
        'ProductName': 'Teatime Chocolate Biscuits',
        'SupplierID': 8,
        'CategoryID': 3,
        'QuantityPerUnit': '10 boxes x 12 pieces',
        'UnitPrice': 9.2000,
        'UnitsInStock': 25,
        'UnitsOnOrder': 0,
        'ReorderLevel': 5,
        'Discontinued': false,
        'Category': {
            'CategoryID': 3,
            'CategoryName': 'Confections',
            'Description': 'Desserts, candies, and sweet breads'
        }
    }, {
        'ProductID': 20,
        'ProductName': 'Sir Rodney\'s Marmalade',
        'SupplierID': 8,
        'CategoryID': 3,
        'QuantityPerUnit': '30 gift boxes',
        'UnitPrice': 81.0000,
        'UnitsInStock': 40,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 3,
            'CategoryName': 'Confections',
            'Description': 'Desserts, candies, and sweet breads'
        }
    }, {
        'ProductID': 21,
        'ProductName': 'Sir Rodney\'s Scones',
        'SupplierID': 8,
        'CategoryID': 3,
        'QuantityPerUnit': '24 pkgs. x 4 pieces',
        'UnitPrice': 10.0000,
        'UnitsInStock': 3,
        'UnitsOnOrder': 40,
        'ReorderLevel': 5,
        'Discontinued': false,
        'Category': {
            'CategoryID': 3,
            'CategoryName': 'Confections',
            'Description': 'Desserts, candies, and sweet breads'
        }
    }, {
        'ProductID': 22,
        'ProductName': 'Gustaf\'s Knäckebröd',
        'SupplierID': 9,
        'CategoryID': 5,
        'QuantityPerUnit': '24 - 500 g pkgs.',
        'UnitPrice': 21.0000,
        'UnitsInStock': 104,
        'UnitsOnOrder': 0,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 5,
            'CategoryName': 'Grains/Cereals',
            'Description': 'Breads, crackers, pasta, and cereal'
        }
    }, {
        'ProductID': 23,
        'ProductName': 'Tunnbröd',
        'SupplierID': 9,
        'CategoryID': 5,
        'QuantityPerUnit': '12 - 250 g pkgs.',
        'UnitPrice': 9.0000,
        'UnitsInStock': 61,
        'UnitsOnOrder': 0,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 5,
            'CategoryName': 'Grains/Cereals',
            'Description': 'Breads, crackers, pasta, and cereal'
        }
    }, {
        'ProductID': 24,
        'ProductName': 'Guaraná Fantástica',
        'SupplierID': 10,
        'CategoryID': 1,
        'QuantityPerUnit': '12 - 355 ml cans',
        'UnitPrice': 4.5000,
        'UnitsInStock': 20,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': true,
        'Category': {
            'CategoryID': 1,
            'CategoryName': 'Beverages',
            'Description': 'Soft drinks, coffees, teas, beers, and ales'
        }
    }, {
        'ProductID': 25,
        'ProductName': 'NuNuCa Nuß-Nougat-Creme',
        'SupplierID': 11,
        'CategoryID': 3,
        'QuantityPerUnit': '20 - 450 g glasses',
        'UnitPrice': 14.0000,
        'UnitsInStock': 76,
        'UnitsOnOrder': 0,
        'ReorderLevel': 30,
        'Discontinued': false,
        'Category': {
            'CategoryID': 3,
            'CategoryName': 'Confections',
            'Description': 'Desserts, candies, and sweet breads'
        }
    }, {
        'ProductID': 26,
        'ProductName': 'Gumbär Gummibärchen',
        'SupplierID': 11,
        'CategoryID': 3,
        'QuantityPerUnit': '100 - 250 g bags',
        'UnitPrice': 31.2300,
        'UnitsInStock': 15,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 3,
            'CategoryName': 'Confections',
            'Description': 'Desserts, candies, and sweet breads'
        }
    }, {
        'ProductID': 27,
        'ProductName': 'Schoggi Schokolade',
        'SupplierID': 11,
        'CategoryID': 3,
        'QuantityPerUnit': '100 - 100 g pieces',
        'UnitPrice': 43.9000,
        'UnitsInStock': 49,
        'UnitsOnOrder': 0,
        'ReorderLevel': 30,
        'Discontinued': false,
        'Category': {
            'CategoryID': 3,
            'CategoryName': 'Confections',
            'Description': 'Desserts, candies, and sweet breads'
        }
    }, {
        'ProductID': 28,
        'ProductName': 'Rössle Sauerkraut',
        'SupplierID': 12,
        'CategoryID': 7,
        'QuantityPerUnit': '25 - 825 g cans',
        'UnitPrice': 45.6000,
        'UnitsInStock': 26,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': true,
        'Category': {
            'CategoryID': 7,
            'CategoryName': 'Produce',
            'Description': 'Dried fruit and bean curd'
        }
    }, {
        'ProductID': 29,
        'ProductName': 'Thüringer Rostbratwurst',
        'SupplierID': 12,
        'CategoryID': 6,
        'QuantityPerUnit': '50 bags x 30 sausgs.',
        'UnitPrice': 123.7900,
        'UnitsInStock': 0,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': true,
        'Category': {
            'CategoryID': 6,
            'CategoryName': 'Meat/Poultry',
            'Description': 'Prepared meats'
        }
    }, {
        'ProductID': 30,
        'ProductName': 'Nord-Ost Matjeshering',
        'SupplierID': 13,
        'CategoryID': 8,
        'QuantityPerUnit': '10 - 200 g glasses',
        'UnitPrice': 25.8900,
        'UnitsInStock': 10,
        'UnitsOnOrder': 0,
        'ReorderLevel': 15,
        'Discontinued': false,
        'Category': {
            'CategoryID': 8,
            'CategoryName': 'Seafood',
            'Description': 'Seaweed and fish'
        }
    }, {
        'ProductID': 31,
        'ProductName': 'Gorgonzola Telino',
        'SupplierID': 14,
        'CategoryID': 4,
        'QuantityPerUnit': '12 - 100 g pkgs',
        'UnitPrice': 12.5000,
        'UnitsInStock': 0,
        'UnitsOnOrder': 70,
        'ReorderLevel': 20,
        'Discontinued': false,
        'Category': {
            'CategoryID': 4,
            'CategoryName': 'Dairy Products',
            'Description': 'Cheeses'
        }
    }, {
        'ProductID': 32,
        'ProductName': 'Mascarpone Fabioli',
        'SupplierID': 14,
        'CategoryID': 4,
        'QuantityPerUnit': '24 - 200 g pkgs.',
        'UnitPrice': 32.0000,
        'UnitsInStock': 9,
        'UnitsOnOrder': 40,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 4,
            'CategoryName': 'Dairy Products',
            'Description': 'Cheeses'
        }
    }, {
        'ProductID': 33,
        'ProductName': 'Geitost',
        'SupplierID': 15,
        'CategoryID': 4,
        'QuantityPerUnit': '500 g',
        'UnitPrice': 2.5000,
        'UnitsInStock': 112,
        'UnitsOnOrder': 0,
        'ReorderLevel': 20,
        'Discontinued': false,
        'Category': {
            'CategoryID': 4,
            'CategoryName': 'Dairy Products',
            'Description': 'Cheeses'
        }
    }, {
        'ProductID': 34,
        'ProductName': 'Sasquatch Ale',
        'SupplierID': 16,
        'CategoryID': 1,
        'QuantityPerUnit': '24 - 12 oz bottles',
        'UnitPrice': 14.0000,
        'UnitsInStock': 111,
        'UnitsOnOrder': 0,
        'ReorderLevel': 15,
        'Discontinued': false,
        'Category': {
            'CategoryID': 1,
            'CategoryName': 'Beverages',
            'Description': 'Soft drinks, coffees, teas, beers, and ales'
        }
    }, {
        'ProductID': 35,
        'ProductName': 'Steeleye Stout',
        'SupplierID': 16,
        'CategoryID': 1,
        'QuantityPerUnit': '24 - 12 oz bottles',
        'UnitPrice': 18.0000,
        'UnitsInStock': 20,
        'UnitsOnOrder': 0,
        'ReorderLevel': 15,
        'Discontinued': false,
        'Category': {
            'CategoryID': 1,
            'CategoryName': 'Beverages',
            'Description': 'Soft drinks, coffees, teas, beers, and ales'
        }
    }, {
        'ProductID': 36,
        'ProductName': 'Inlagd Sill',
        'SupplierID': 17,
        'CategoryID': 8,
        'QuantityPerUnit': '24 - 250 g  jars',
        'UnitPrice': 19.0000,
        'UnitsInStock': 112,
        'UnitsOnOrder': 0,
        'ReorderLevel': 20,
        'Discontinued': false,
        'Category': {
            'CategoryID': 8,
            'CategoryName': 'Seafood',
            'Description': 'Seaweed and fish'
        }
    }, {
        'ProductID': 37,
        'ProductName': 'Gravad lax',
        'SupplierID': 17,
        'CategoryID': 8,
        'QuantityPerUnit': '12 - 500 g pkgs.',
        'UnitPrice': 26.0000,
        'UnitsInStock': 11,
        'UnitsOnOrder': 50,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 8,
            'CategoryName': 'Seafood',
            'Description': 'Seaweed and fish'
        }
    }, {
        'ProductID': 38,
        'ProductName': 'Côte de Blaye',
        'SupplierID': 18,
        'CategoryID': 1,
        'QuantityPerUnit': '12 - 75 cl bottles',
        'UnitPrice': 263.5000,
        'UnitsInStock': 17,
        'UnitsOnOrder': 0,
        'ReorderLevel': 15,
        'Discontinued': false,
        'Category': {
            'CategoryID': 1,
            'CategoryName': 'Beverages',
            'Description': 'Soft drinks, coffees, teas, beers, and ales'
        }
    }, {
        'ProductID': 39,
        'ProductName': 'Chartreuse verte',
        'SupplierID': 18,
        'CategoryID': 1,
        'QuantityPerUnit': '750 cc per bottle',
        'UnitPrice': 18.0000,
        'UnitsInStock': 69,
        'UnitsOnOrder': 0,
        'ReorderLevel': 5,
        'Discontinued': false,
        'Category': {
            'CategoryID': 1,
            'CategoryName': 'Beverages',
            'Description': 'Soft drinks, coffees, teas, beers, and ales'
        }
    }, {
        'ProductID': 40,
        'ProductName': 'Boston Crab Meat',
        'SupplierID': 19,
        'CategoryID': 8,
        'QuantityPerUnit': '24 - 4 oz tins',
        'UnitPrice': 18.4000,
        'UnitsInStock': 123,
        'UnitsOnOrder': 0,
        'ReorderLevel': 30,
        'Discontinued': false,
        'Category': {
            'CategoryID': 8,
            'CategoryName': 'Seafood',
            'Description': 'Seaweed and fish'
        }
    }, {
        'ProductID': 41,
        'ProductName': 'Jack\'s New England Clam Chowder',
        'SupplierID': 19,
        'CategoryID': 8,
        'QuantityPerUnit': '12 - 12 oz cans',
        'UnitPrice': 9.6500,
        'UnitsInStock': 85,
        'UnitsOnOrder': 0,
        'ReorderLevel': 10,
        'Discontinued': false,
        'Category': {
            'CategoryID': 8,
            'CategoryName': 'Seafood',
            'Description': 'Seaweed and fish'
        }
    }, {
        'ProductID': 42,
        'ProductName': 'Singaporean Hokkien Fried Mee',
        'SupplierID': 20,
        'CategoryID': 5,
        'QuantityPerUnit': '32 - 1 kg pkgs.',
        'UnitPrice': 14.0000,
        'UnitsInStock': 26,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': true,
        'Category': {
            'CategoryID': 5,
            'CategoryName': 'Grains/Cereals',
            'Description': 'Breads, crackers, pasta, and cereal'
        }
    }, {
        'ProductID': 43,
        'ProductName': 'Ipoh Coffee',
        'SupplierID': 20,
        'CategoryID': 1,
        'QuantityPerUnit': '16 - 500 g tins',
        'UnitPrice': 46.0000,
        'UnitsInStock': 17,
        'UnitsOnOrder': 10,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 1,
            'CategoryName': 'Beverages',
            'Description': 'Soft drinks, coffees, teas, beers, and ales'
        }
    }, {
        'ProductID': 44,
        'ProductName': 'Gula Malacca',
        'SupplierID': 20,
        'CategoryID': 2,
        'QuantityPerUnit': '20 - 2 kg bags',
        'UnitPrice': 19.4500,
        'UnitsInStock': 27,
        'UnitsOnOrder': 0,
        'ReorderLevel': 15,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    }, {
        'ProductID': 45,
        'ProductName': 'Rogede sild',
        'SupplierID': 21,
        'CategoryID': 8,
        'QuantityPerUnit': '1k pkg.',
        'UnitPrice': 9.5000,
        'UnitsInStock': 5,
        'UnitsOnOrder': 70,
        'ReorderLevel': 15,
        'Discontinued': false,
        'Category': {
            'CategoryID': 8,
            'CategoryName': 'Seafood',
            'Description': 'Seaweed and fish'
        }
    }, {
        'ProductID': 46,
        'ProductName': 'Spegesild',
        'SupplierID': 21,
        'CategoryID': 8,
        'QuantityPerUnit': '4 - 450 g glasses',
        'UnitPrice': 12.0000,
        'UnitsInStock': 95,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 8,
            'CategoryName': 'Seafood',
            'Description': 'Seaweed and fish'
        }
    }, {
        'ProductID': 47,
        'ProductName': 'Zaanse koeken',
        'SupplierID': 22,
        'CategoryID': 3,
        'QuantityPerUnit': '10 - 4 oz boxes',
        'UnitPrice': 9.5000,
        'UnitsInStock': 36,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 3,
            'CategoryName': 'Confections',
            'Description': 'Desserts, candies, and sweet breads'
        }
    }, {
        'ProductID': 48,
        'ProductName': 'Chocolade',
        'SupplierID': 22,
        'CategoryID': 3,
        'QuantityPerUnit': '10 pkgs.',
        'UnitPrice': 12.7500,
        'UnitsInStock': 15,
        'UnitsOnOrder': 70,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 3,
            'CategoryName': 'Confections',
            'Description': 'Desserts, candies, and sweet breads'
        }
    }, {
        'ProductID': 49,
        'ProductName': 'Maxilaku',
        'SupplierID': 23,
        'CategoryID': 3,
        'QuantityPerUnit': '24 - 50 g pkgs.',
        'UnitPrice': 20.0000,
        'UnitsInStock': 10,
        'UnitsOnOrder': 60,
        'ReorderLevel': 15,
        'Discontinued': false,
        'Category': {
            'CategoryID': 3,
            'CategoryName': 'Confections',
            'Description': 'Desserts, candies, and sweet breads'
        }
    }, {
        'ProductID': 50,
        'ProductName': 'Valkoinen suklaa',
        'SupplierID': 23,
        'CategoryID': 3,
        'QuantityPerUnit': '12 - 100 g bars',
        'UnitPrice': 16.2500,
        'UnitsInStock': 65,
        'UnitsOnOrder': 0,
        'ReorderLevel': 30,
        'Discontinued': false,
        'Category': {
            'CategoryID': 3,
            'CategoryName': 'Confections',
            'Description': 'Desserts, candies, and sweet breads'
        }
    }, {
        'ProductID': 51,
        'ProductName': 'Manjimup Dried Apples',
        'SupplierID': 24,
        'CategoryID': 7,
        'QuantityPerUnit': '50 - 300 g pkgs.',
        'UnitPrice': 53.0000,
        'UnitsInStock': 20,
        'UnitsOnOrder': 0,
        'ReorderLevel': 10,
        'Discontinued': false,
        'Category': {
            'CategoryID': 7,
            'CategoryName': 'Produce',
            'Description': 'Dried fruit and bean curd'
        }
    }, {
        'ProductID': 52,
        'ProductName': 'Filo Mix',
        'SupplierID': 24,
        'CategoryID': 5,
        'QuantityPerUnit': '16 - 2 kg boxes',
        'UnitPrice': 7.0000,
        'UnitsInStock': 38,
        'UnitsOnOrder': 0,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 5,
            'CategoryName': 'Grains/Cereals',
            'Description': 'Breads, crackers, pasta, and cereal'
        }
    }, {
        'ProductID': 53,
        'ProductName': 'Perth Pasties',
        'SupplierID': 24,
        'CategoryID': 6,
        'QuantityPerUnit': '48 pieces',
        'UnitPrice': 32.8000,
        'UnitsInStock': 0,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': true,
        'Category': {
            'CategoryID': 6,
            'CategoryName': 'Meat/Poultry',
            'Description': 'Prepared meats'
        }
    }, {
        'ProductID': 54,
        'ProductName': 'Tourtière',
        'SupplierID': 25,
        'CategoryID': 6,
        'QuantityPerUnit': '16 pies',
        'UnitPrice': 7.4500,
        'UnitsInStock': 21,
        'UnitsOnOrder': 0,
        'ReorderLevel': 10,
        'Discontinued': false,
        'Category': {
            'CategoryID': 6,
            'CategoryName': 'Meat/Poultry',
            'Description': 'Prepared meats'
        }
    }, {
        'ProductID': 55,
        'ProductName': 'Pâté chinois',
        'SupplierID': 25,
        'CategoryID': 6,
        'QuantityPerUnit': '24 boxes x 2 pies',
        'UnitPrice': 24.0000,
        'UnitsInStock': 115,
        'UnitsOnOrder': 0,
        'ReorderLevel': 20,
        'Discontinued': false,
        'Category': {
            'CategoryID': 6,
            'CategoryName': 'Meat/Poultry',
            'Description': 'Prepared meats'
        }
    }, {
        'ProductID': 56,
        'ProductName': 'Gnocchi di nonna Alice',
        'SupplierID': 26,
        'CategoryID': 5,
        'QuantityPerUnit': '24 - 250 g pkgs.',
        'UnitPrice': 38.0000,
        'UnitsInStock': 21,
        'UnitsOnOrder': 10,
        'ReorderLevel': 30,
        'Discontinued': false,
        'Category': {
            'CategoryID': 5,
            'CategoryName': 'Grains/Cereals',
            'Description': 'Breads, crackers, pasta, and cereal'
        }
    }, {
        'ProductID': 57,
        'ProductName': 'Ravioli Angelo',
        'SupplierID': 26,
        'CategoryID': 5,
        'QuantityPerUnit': '24 - 250 g pkgs.',
        'UnitPrice': 19.5000,
        'UnitsInStock': 36,
        'UnitsOnOrder': 0,
        'ReorderLevel': 20,
        'Discontinued': false,
        'Category': {
            'CategoryID': 5,
            'CategoryName': 'Grains/Cereals',
            'Description': 'Breads, crackers, pasta, and cereal'
        }
    }, {
        'ProductID': 58,
        'ProductName': 'Escargots de Bourgogne',
        'SupplierID': 27,
        'CategoryID': 8,
        'QuantityPerUnit': '24 pieces',
        'UnitPrice': 13.2500,
        'UnitsInStock': 62,
        'UnitsOnOrder': 0,
        'ReorderLevel': 20,
        'Discontinued': false,
        'Category': {
            'CategoryID': 8,
            'CategoryName': 'Seafood',
            'Description': 'Seaweed and fish'
        }
    }, {
        'ProductID': 59,
        'ProductName': 'Raclette Courdavault',
        'SupplierID': 28,
        'CategoryID': 4,
        'QuantityPerUnit': '5 kg pkg.',
        'UnitPrice': 55.0000,
        'UnitsInStock': 79,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 4,
            'CategoryName': 'Dairy Products',
            'Description': 'Cheeses'
        }
    }, {
        'ProductID': 60,
        'ProductName': 'Camembert Pierrot',
        'SupplierID': 28,
        'CategoryID': 4,
        'QuantityPerUnit': '15 - 300 g rounds',
        'UnitPrice': 34.0000,
        'UnitsInStock': 19,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 4,
            'CategoryName': 'Dairy Products',
            'Description': 'Cheeses'
        }
    }, {
        'ProductID': 61,
        'ProductName': 'Sirop d\'érable',
        'SupplierID': 29,
        'CategoryID': 2,
        'QuantityPerUnit': '24 - 500 ml bottles',
        'UnitPrice': 28.5000,
        'UnitsInStock': 113,
        'UnitsOnOrder': 0,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    }, {
        'ProductID': 62,
        'ProductName': 'Tarte au sucre',
        'SupplierID': 29,
        'CategoryID': 3,
        'QuantityPerUnit': '48 pies',
        'UnitPrice': 49.3000,
        'UnitsInStock': 17,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 3,
            'CategoryName': 'Confections',
            'Description': 'Desserts, candies, and sweet breads'
        }
    }, {
        'ProductID': 63,
        'ProductName': 'Vegie-spread',
        'SupplierID': 7,
        'CategoryID': 2,
        'QuantityPerUnit': '15 - 625 g jars',
        'UnitPrice': 43.9000,
        'UnitsInStock': 24,
        'UnitsOnOrder': 0,
        'ReorderLevel': 5,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    }, {
        'ProductID': 64,
        'ProductName': 'Wimmers gute Semmelknödel',
        'SupplierID': 12,
        'CategoryID': 5,
        'QuantityPerUnit': '20 bags x 4 pieces',
        'UnitPrice': 33.2500,
        'UnitsInStock': 22,
        'UnitsOnOrder': 80,
        'ReorderLevel': 30,
        'Discontinued': false,
        'Category': {
            'CategoryID': 5,
            'CategoryName': 'Grains/Cereals',
            'Description': 'Breads, crackers, pasta, and cereal'
        }
    }, {
        'ProductID': 65,
        'ProductName': 'Louisiana Fiery Hot Pepper Sauce',
        'SupplierID': 2,
        'CategoryID': 2,
        'QuantityPerUnit': '32 - 8 oz bottles',
        'UnitPrice': 21.0500,
        'UnitsInStock': 76,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    }, {
        'ProductID': 66,
        'ProductName': 'Louisiana Hot Spiced Okra',
        'SupplierID': 2,
        'CategoryID': 2,
        'QuantityPerUnit': '24 - 8 oz jars',
        'UnitPrice': 17.0000,
        'UnitsInStock': 4,
        'UnitsOnOrder': 100,
        'ReorderLevel': 20,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    }, {
        'ProductID': 67,
        'ProductName': 'Laughing Lumberjack Lager',
        'SupplierID': 16,
        'CategoryID': 1,
        'QuantityPerUnit': '24 - 12 oz bottles',
        'UnitPrice': 14.0000,
        'UnitsInStock': 52,
        'UnitsOnOrder': 0,
        'ReorderLevel': 10,
        'Discontinued': false,
        'Category': {
            'CategoryID': 1,
            'CategoryName': 'Beverages',
            'Description': 'Soft drinks, coffees, teas, beers, and ales'
        }
    }, {
        'ProductID': 68,
        'ProductName': 'Scottish Longbreads',
        'SupplierID': 8,
        'CategoryID': 3,
        'QuantityPerUnit': '10 boxes x 8 pieces',
        'UnitPrice': 12.5000,
        'UnitsInStock': 6,
        'UnitsOnOrder': 10,
        'ReorderLevel': 15,
        'Discontinued': false,
        'Category': {
            'CategoryID': 3,
            'CategoryName': 'Confections',
            'Description': 'Desserts, candies, and sweet breads'
        }
    }, {
        'ProductID': 69,
        'ProductName': 'Gudbrandsdalsost',
        'SupplierID': 15,
        'CategoryID': 4,
        'QuantityPerUnit': '10 kg pkg.',
        'UnitPrice': 36.0000,
        'UnitsInStock': 26,
        'UnitsOnOrder': 0,
        'ReorderLevel': 15,
        'Discontinued': false,
        'Category': {
            'CategoryID': 4,
            'CategoryName': 'Dairy Products',
            'Description': 'Cheeses'
        }
    }, {
        'ProductID': 70,
        'ProductName': 'Outback Lager',
        'SupplierID': 7,
        'CategoryID': 1,
        'QuantityPerUnit': '24 - 355 ml bottles',
        'UnitPrice': 15.0000,
        'UnitsInStock': 15,
        'UnitsOnOrder': 10,
        'ReorderLevel': 30,
        'Discontinued': false,
        'Category': {
            'CategoryID': 1,
            'CategoryName': 'Beverages',
            'Description': 'Soft drinks, coffees, teas, beers, and ales'
        }
    }, {
        'ProductID': 71,
        'ProductName': 'Flotemysost',
        'SupplierID': 15,
        'CategoryID': 4,
        'QuantityPerUnit': '10 - 500 g pkgs.',
        'UnitPrice': 21.5000,
        'UnitsInStock': 26,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 4,
            'CategoryName': 'Dairy Products',
            'Description': 'Cheeses'
        }
    }, {
        'ProductID': 72,
        'ProductName': 'Mozzarella di Giovanni',
        'SupplierID': 14,
        'CategoryID': 4,
        'QuantityPerUnit': '24 - 200 g pkgs.',
        'UnitPrice': 34.8000,
        'UnitsInStock': 14,
        'UnitsOnOrder': 0,
        'ReorderLevel': 0,
        'Discontinued': false,
        'Category': {
            'CategoryID': 4,
            'CategoryName': 'Dairy Products',
            'Description': 'Cheeses'
        }
    }, {
        'ProductID': 73,
        'ProductName': 'Röd Kaviar',
        'SupplierID': 17,
        'CategoryID': 8,
        'QuantityPerUnit': '24 - 150 g jars',
        'UnitPrice': 15.0000,
        'UnitsInStock': 101,
        'UnitsOnOrder': 0,
        'ReorderLevel': 5,
        'Discontinued': false,
        'Category': {
            'CategoryID': 8,
            'CategoryName': 'Seafood',
            'Description': 'Seaweed and fish'
        }
    }, {
        'ProductID': 74,
        'ProductName': 'Longlife Tofu',
        'SupplierID': 4,
        'CategoryID': 7,
        'QuantityPerUnit': '5 kg pkg.',
        'UnitPrice': 10.0000,
        'UnitsInStock': 4,
        'UnitsOnOrder': 20,
        'ReorderLevel': 5,
        'Discontinued': false,
        'Category': {
            'CategoryID': 7,
            'CategoryName': 'Produce',
            'Description': 'Dried fruit and bean curd'
        }
    }, {
        'ProductID': 75,
        'ProductName': 'Rhönbräu Klosterbier',
        'SupplierID': 12,
        'CategoryID': 1,
        'QuantityPerUnit': '24 - 0.5 l bottles',
        'UnitPrice': 7.7500,
        'UnitsInStock': 125,
        'UnitsOnOrder': 0,
        'ReorderLevel': 25,
        'Discontinued': false,
        'Category': {
            'CategoryID': 1,
            'CategoryName': 'Beverages',
            'Description': 'Soft drinks, coffees, teas, beers, and ales'
        }
    }, {
        'ProductID': 76,
        'ProductName': 'Lakkalikööri',
        'SupplierID': 23,
        'CategoryID': 1,
        'QuantityPerUnit': '500 ml',
        'UnitPrice': 18.0000,
        'UnitsInStock': 57,
        'UnitsOnOrder': 0,
        'ReorderLevel': 20,
        'Discontinued': false,
        'Category': {
            'CategoryID': 1,
            'CategoryName': 'Beverages',
            'Description': 'Soft drinks, coffees, teas, beers, and ales'
        }
    }, {
        'ProductID': 77,
        'ProductName': 'Original Frankfurter grüne Soße',
        'SupplierID': 12,
        'CategoryID': 2,
        'QuantityPerUnit': '12 boxes',
        'UnitPrice': 13.0000,
        'UnitsInStock': 32,
        'UnitsOnOrder': 0,
        'ReorderLevel': 15,
        'Discontinued': false,
        'Category': {
            'CategoryID': 2,
            'CategoryName': 'Condiments',
            'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    }];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map