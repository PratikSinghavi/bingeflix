(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ptk/Desktop/CSCI571/psinghav.github.io/angular-hw/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "76GK":
/*!********************************************!*\
  !*** ./src/app/mylist/mylist.component.ts ***!
  \********************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MylistComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MylistComponent_div_3_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onSelect(ctx_r7.categories[i_r6], ctx_r7.links[i_r6]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.card_class_device);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.captions[i_r6]);
} }
function MylistComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MylistComponent_div_3_div_5_Template, 8, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
function MylistComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No items found in Watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MylistComponent {
    constructor(_router, breakpointObs) {
        this._router = _router;
        this.breakpointObs = breakpointObs;
        this.images = new Array();
        this.captions = new Array();
        this.links = new Array();
        this.categories = new Array();
        this.lessthan6 = true;
        this.mobile = false;
        this.device = 'normal';
        this.poster_base_link = 'https://image.tmdb.org/t/p/original';
    }
    ngOnInit() {
        this.breakpointObs.observe('(max-width:768px)').subscribe(data => {
            if (data.matches) {
                // console.log('Something changed');
                this.mobile = true;
                this.device = 'mobile';
                this.card_class_device = "card-class-" + this.device;
                this.ngbcar_class_device = "ngbcar-class-" + this.device;
            }
            else {
                this.mobile = false;
                this.device = 'normal';
                this.card_class_device = "card-class-" + this.device;
                this.ngbcar_class_device = "ngbcar-class-" + this.device;
            }
        });
        // creation of cards
        // console.log(localStorage.getItem('count'));
        let watchlist = localStorage.getItem('watchlist');
        if (watchlist != null && watchlist.length > 0) {
            this.pictures = JSON.parse(localStorage.getItem('watchlist'));
            let count = watchlist.length;
            // var temparray = new Array();
            let sep;
            for (let i in this.pictures) {
                if (this.pictures[i] != null) {
                    sep = this.pictures[i].split("|");
                    // console.log(sep[3]);
                    this.images.push(sep[2]); //this.poster_base_link+ removed 
                    this.captions.push(sep[3]);
                    this.links.push(sep[1]);
                    this.categories.push(sep[0]);
                }
            }
        }
        else {
            this.pictures = [];
        }
        // this.images = temparray
    }
    onSelect(category, id) {
        this._router.navigate(['/watch', category, id]);
    }
}
MylistComponent.ɵfac = function MylistComponent_Factory(t) { return new (t || MylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
MylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MylistComponent, selectors: [["app-mylist"]], decls: 6, vars: 2, consts: [[2, "position", "relative"], [1, "bodydiv", 2, "background-color", "#060C34"], ["class", "container", "style", "min-height: 100%;", 4, "ngIf", "ngIfElse"], ["watchlistempty", ""], [1, "container", 2, "min-height", "100%"], ["watchlist_div", ""], [1, "h1", "text-white", "pb-5", "bodydivtitle"], [1, "row"], ["class", "col-sm-12 col-md-2 grow", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-2", "grow"], [2, "cursor", "pointer", 3, "click"], [1, "card", 3, "ngClass"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "overlay"], [1, "carousel-caption"], [1, "text-white", "text-center", "pt-5"]], template: function MylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MylistComponent_div_3_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MylistComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pictures.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".background[_ngcontent-%COMP%]{\n    background-color: darkblue;\n}\n\n.card[_ngcontent-%COMP%]{\n    border:none;\n    margin-top: 10%;\n    margin-bottom: 30%;\n    width: 95%;\n}\n\n.w-92[_ngcontent-%COMP%]{\n    width: 92%;\n}\n\nngb-carousel[_ngcontent-%COMP%]{\n    outline: none;\n    background-color: red;\n}\n\n.ngbcar-class-normal[_ngcontent-%COMP%]{\n    padding-left: 16%;\n    padding-right: 16%;\n}\n\n.ngbcar-class-mobile[_ngcontent-%COMP%]{\n    padding-left: 7.5%;\n    padding-right: 7.5%;\n}\n\n\n\n.grow[_ngcontent-%COMP%]{\n    transition: 100ms ease;\n}\n\n.grow[_ngcontent-%COMP%]:hover{\n    transform: scale(1.1);\n}\n\n.card-class-normal[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background:linear-gradient(to top, black 25%, rgba(0,0,0,0));;\n    opacity:0;\n    transition:opacity 200ms ease;\n    \n}\n\n.card-class-mobile[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background:linear-gradient(to top, black 25%, rgba(0,0,0,0));;\n    opacity:1;\n    transition:opacity 200ms ease;\n    \n}\n\n.card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{\n    opacity:1;\n}\n\n.carousel-caption[_ngcontent-%COMP%]{\n    text-align: left;\n    padding-bottom: 0px;\n    left: 10%;\n    \n}\n\n.carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-bottom: 0rem;\n    font-size: large;\n}\n\nfooter[_ngcontent-%COMP%]{\n    position: relative;\n    bottom: 0;\n    background:linear-gradient(to top, black 20%, rgba(0,0,0,0));\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    background-color: #060C34;\n    \n    \n    padding-bottom: 5%;\n    text-align: center;\n}\n\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom: 0;\n    color:white;\n    text-align: center;\n    width: 100%;\n}\n\n.bodydiv[_ngcontent-%COMP%]{\n    min-height: 83vh;\n    height: 100%;\n    padding-left: 12.5%;\n    padding-right: 12.5%;\n}\n\n.bodydivtitle[_ngcontent-%COMP%]{\n\n    margin-left: -2vw;\n    \n}\n\n  ::-webkit-scrollbar {\n    width: 0.5em;\n    background-color: transparent;\n    height: 0.5rem;\n}\n\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(178, 178, 178, 0.5);\n    background-color: #060C34;\n    border-radius: 10px;\n    \n    \n}\n\n  ::-webkit-scrollbar-thumb {\n    background-color:#B2B2B2;\n    border-radius: 10px;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlsaXN0L215bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUlBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBR0E7O0dBRUc7O0FBR0g7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsS0FBSztJQUNMLE1BQU07SUFDTixVQUFVO0lBQ1YsV0FBVztJQUNYLDREQUE0RDtJQUM1RCxTQUFTO0lBQ1QsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixLQUFLO0lBQ0wsTUFBTTtJQUNOLFVBQVU7SUFDVixXQUFXO0lBQ1gsNERBQTREO0lBQzVELFNBQVM7SUFDVCw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsNERBQTREO0lBQzVELFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBR0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwrQkFBK0I7O0FBRW5DOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9teWxpc3QvbXlsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG59XG5cbi5jYXJke1xuICAgIGJvcmRlcjpub25lO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMCU7XG4gICAgd2lkdGg6IDk1JTtcbn1cblxuLnctOTJ7XG4gICAgd2lkdGg6IDkyJTtcbn1cblxubmdiLWNhcm91c2Vse1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5cblxuLm5nYmNhci1jbGFzcy1ub3JtYWx7XG4gICAgcGFkZGluZy1sZWZ0OiAxNiU7XG4gICAgcGFkZGluZy1yaWdodDogMTYlO1xufVxuXG4ubmdiY2FyLWNsYXNzLW1vYmlsZXtcbiAgICBwYWRkaW5nLWxlZnQ6IDcuNSU7XG4gICAgcGFkZGluZy1yaWdodDogNy41JTtcbn1cblxuXG4vKiAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2e1xuICAgIHdpZHRoOjEwJVxufSAqL1xuXG5cbi5ncm93e1xuICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2U7XG59XG5cbi5ncm93OmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuXG4uY2FyZC1jbGFzcy1ub3JtYWwgLm92ZXJsYXl7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjayAyNSUsIHJnYmEoMCwwLDAsMCkpOztcbiAgICBvcGFjaXR5OjA7XG4gICAgdHJhbnNpdGlvbjpvcGFjaXR5IDIwMG1zIGVhc2U7XG4gICAgXG59XG5cbi5jYXJkLWNsYXNzLW1vYmlsZSAub3ZlcmxheXtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrIDI1JSwgcmdiYSgwLDAsMCwwKSk7O1xuICAgIG9wYWNpdHk6MTtcbiAgICB0cmFuc2l0aW9uOm9wYWNpdHkgMjAwbXMgZWFzZTtcbiAgICBcbn0gIFxuXG4uY2FyZDpob3ZlciAub3ZlcmxheXtcbiAgICBvcGFjaXR5OjE7XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9ue1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBsZWZ0OiAxMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiBwe1xuICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuXG5mb290ZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrIDIwJSwgcmdiYSgwLDAsMCwwKSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjBDMzQ7XG4gICAgLyogbWFyZ2luLXRvcDogLTQwcHg7ICovXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMHB4OyAqL1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvb3RlciBwe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5ib2R5ZGl2e1xuICAgIG1pbi1oZWlnaHQ6IDgzdmg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTIuNSU7XG4gICAgcGFkZGluZy1yaWdodDogMTIuNSU7XG59XG5cbi5ib2R5ZGl2dGl0bGV7XG5cbiAgICBtYXJnaW4tbGVmdDogLTJ2dztcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG59XG5cblxuOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDAuNXJlbTtcbn1cbiAgIFxuOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgxNzgsIDE3OCwgMTc4LCAwLjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjBDMzQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjQjJCMkIyOyAqL1xuICAgIFxufVxuICAgXG46Om5nLWRlZXAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQjJCMkIyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGRhcmtncmV5OyAqL1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mylist',
                templateUrl: './mylist.component.html',
                styleUrls: ['./mylist.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "7O2h":
/*!************************************************************!*\
  !*** ./src/app/cont-watch-car/cont-watch-car.component.ts ***!
  \************************************************************/
/*! exports provided: ContWatchCarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContWatchCarComponent", function() { return ContWatchCarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ContWatchCarComponent_ng_container_6_1_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContWatchCarComponent_ng_container_6_1_ng_template_0_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const j_r9 = ctx.index; const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSelect(ctx_r10.categories[i_r3 + j_r9], ctx_r10.links[i_r3 + j_r9]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r8 = ctx.$implicit;
    const j_r9 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.card_class_device);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.captions[i_r3 + j_r9]);
} }
function ContWatchCarComponent_ng_container_6_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContWatchCarComponent_ng_container_6_1_ng_template_0_div_2_Template, 8, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, ctx_r6.images, i_r3, i_r3 + 6));
} }
function ContWatchCarComponent_ng_container_6_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContWatchCarComponent_ng_container_6_1_ng_template_0_Template, 4, 5, "ng-template", 7);
} }
function ContWatchCarComponent_ng_container_6_2_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContWatchCarComponent_ng_container_6_2_ng_template_0_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const j_r18 = ctx.index; const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onSelect(ctx_r19.categories[i_r3 + j_r18], ctx_r19.links[i_r3 + j_r18]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r17 = ctx.$implicit;
    const j_r18 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r16.card_class_device);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.captions[i_r3 + j_r18]);
} }
function ContWatchCarComponent_ng_container_6_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContWatchCarComponent_ng_container_6_2_ng_template_0_div_2_Template, 8, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, ctx_r15.images, i_r3, i_r3 + 1));
} }
function ContWatchCarComponent_ng_container_6_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContWatchCarComponent_ng_container_6_2_ng_template_0_Template, 4, 5, "ng-template", 7);
} }
function ContWatchCarComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContWatchCarComponent_ng_container_6_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContWatchCarComponent_ng_container_6_2_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 % 6 == 0 && !ctx_r1.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mobile);
} }
class ContWatchCarComponent {
    constructor(_router, breakpointObs) {
        this._router = _router;
        this.breakpointObs = breakpointObs;
        this.images = new Array();
        this.captions = new Array();
        this.links = new Array();
        this.categories = new Array();
        this.lessthan6 = true;
        this.mobile = false;
        this.device = 'normal';
        this.poster_base_link = 'https://image.tmdb.org/t/p/original';
    }
    ngOnInit() {
        this.breakpointObs.observe('(max-width:768px)').subscribe(data => {
            if (data.matches) {
                // console.log('Something changed');
                this.mobile = true;
                this.device = 'mobile';
                this.card_class_device = "card-class-" + this.device;
            }
            else {
                this.mobile = false;
                this.device = 'normal';
                this.card_class_device = "card-class-" + this.device;
            }
        });
        // creation of cards
        let visited = localStorage.getItem('visited');
        if (visited != null && visited.length > 0) {
            this.pictures = (JSON.parse(visited));
            let count = this.pictures.length;
            // console.log(this.pictures);
            // console.log(count)
            if (count > 6)
                this.lessthan6 = false;
            // var temparray = new Array();
            let sep;
            for (let i = count - 1; i >= 0; i--) {
                sep = this.pictures[i].split("|");
                // console.log(sep[3]);
                this.images.push(sep[2]); //this.poster_base_link+ removed 
                this.captions.push(sep[3]);
                this.links.push(sep[1]);
                this.categories.push(sep[0]);
            }
        }
        // this.images = temparray
    }
    onSelect(category, id) {
        this._router.navigate(['/watch', category, id]);
    }
}
ContWatchCarComponent.ɵfac = function ContWatchCarComponent_Factory(t) { return new (t || ContWatchCarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
ContWatchCarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContWatchCarComponent, selectors: [["app-cont-watch-car"]], decls: 8, vars: 4, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [3, "interval", "showNavigationIndicators", "showNavigationArrows"], ["carousel", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["ngbSlide", "", "class", "ngslide"], [1, "container-fluid", "w-100"], ["class", "col-sm-12 col-md-2 grow", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-2", "grow"], [2, "cursor", "pointer", 3, "click"], [1, "card", 3, "ngClass"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "overlay"], [1, "carousel-caption"], [1, "container-fluid", 2, "width", "40vh"]], template: function ContWatchCarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-carousel", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContWatchCarComponent_ng_container_6_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0)("showNavigationIndicators", !ctx.mobile && !ctx.lessthan6)("showNavigationArrows", !ctx.mobile && !ctx.lessthan6 || ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: [".card[_ngcontent-%COMP%]{\n    border:none;\n    margin-top: 10%;\n    margin-bottom: 30%;\n    width: 95%;\n}\n\n.w-92[_ngcontent-%COMP%]{\n    width: 92%;\n}\n\nngb-carousel[_ngcontent-%COMP%]{\n    outline: none;\n    padding-left: 7.5%;\n    padding-right: 7.5%;\n}\n\n\n\n.grow[_ngcontent-%COMP%]{\n    transition: 100ms ease;\n}\n\n.grow[_ngcontent-%COMP%]:hover{\n    transform: scale(1.1);\n}\n\n.card-class-normal[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background:linear-gradient(to top, black 25%, rgba(0,0,0,0));;\n    opacity:0;\n    transition:opacity 200ms ease;\n    \n}\n\n.card-class-mobile[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background:linear-gradient(to top, black 25%, rgba(0,0,0,0));;\n    opacity:1;\n    transition:opacity 200ms ease;\n    \n}\n\n.card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{\n    opacity:1;\n}\n\n.carousel-caption[_ngcontent-%COMP%]{\n    text-align: left;\n    padding-bottom: 0px;\n    left: 10%;\n    \n}\n\n.carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-bottom: 0rem;\n    font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udC13YXRjaC1jYXIvY29udC13YXRjaC1jYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUdBOztHQUVHOztBQUdIO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLEtBQUs7SUFDTCxNQUFNO0lBQ04sVUFBVTtJQUNWLFdBQVc7SUFDWCw0REFBNEQ7SUFDNUQsU0FBUztJQUNULDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsS0FBSztJQUNMLE1BQU07SUFDTixVQUFVO0lBQ1YsV0FBVztJQUNYLDREQUE0RDtJQUM1RCxTQUFTO0lBQ1QsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb250LXdhdGNoLWNhci9jb250LXdhdGNoLWNhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcbiAgICB3aWR0aDogOTUlO1xufVxuXG4udy05MntcbiAgICB3aWR0aDogOTIlO1xufVxuXG5uZ2ItY2Fyb3VzZWx7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDcuNSU7XG4gICAgcGFkZGluZy1yaWdodDogNy41JTtcbn1cblxuXG4vKiAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2e1xuICAgIHdpZHRoOjEwJVxufSAqL1xuXG5cbi5ncm93e1xuICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2U7XG59XG5cbi5ncm93OmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuXG4uY2FyZC1jbGFzcy1ub3JtYWwgLm92ZXJsYXl7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjayAyNSUsIHJnYmEoMCwwLDAsMCkpOztcbiAgICBvcGFjaXR5OjA7XG4gICAgdHJhbnNpdGlvbjpvcGFjaXR5IDIwMG1zIGVhc2U7XG4gICAgXG59XG5cbi5jYXJkLWNsYXNzLW1vYmlsZSAub3ZlcmxheXtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrIDI1JSwgcmdiYSgwLDAsMCwwKSk7O1xuICAgIG9wYWNpdHk6MTtcbiAgICB0cmFuc2l0aW9uOm9wYWNpdHkgMjAwbXMgZWFzZTtcbiAgICBcbn0gIFxuXG4uY2FyZDpob3ZlciAub3ZlcmxheXtcbiAgICBvcGFjaXR5OjE7XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9ue1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBsZWZ0OiAxMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiBwe1xuICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContWatchCarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cont-watch-car',
                templateUrl: './cont-watch-car.component.html',
                styleUrls: ['./cont-watch-car.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel/carousel.component */ "EfPX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cont_watch_car_cont_watch_car_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cont-watch-car/cont-watch-car.component */ "7O2h");
/* harmony import */ var _card_car_card_car_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card-car/card-car.component */ "fpy/");






function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-cont-watch-car");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-card-car", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cardcar_h1[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardcar_name", car_r2);
} }
class HomeComponent {
    constructor() {
        this.localData = false;
        this.which_carousel = ['movie/popular', 'movie/top_rated', 'trending/movie', 'tv/popular', 'tv/top_rated', 'trending/tv'].map(x => `car/${x}`);
        this.cardcar_h1 = ['Popular Movies', 'Top Rated Movies', 'Trending Movies', 'Popular TV Shows', 'Top Rated TV Shows', 'Trending TV Shows'];
    }
    ngOnInit() {
        if (localStorage.getItem('visited') != null && localStorage.getItem('visited').length > 0) {
            this.localData = true;
        }
        // console.log(this.which_carousel);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 2, consts: [[1, "homebodydiv"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "cardcar_name"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.which_carousel);
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _cont_watch_car_cont_watch_car_component__WEBPACK_IMPORTED_MODULE_3__["ContWatchCarComponent"], _card_car_card_car_component__WEBPACK_IMPORTED_MODULE_4__["CardCarComponent"]], styles: ["h1[_ngcontent-%COMP%]{\n    padding-left: 8%;\n    color: white;\n    font-size: xxx-large;\n}\n\nfooter[_ngcontent-%COMP%]{\n    \n    \n    background:linear-gradient(to top, black 20%, rgba(0,0,0,0));\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    background-color: #060C34;\n    margin-top: 5%;\n    padding-bottom: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color:white;\n    text-align: center;\n}\n\n.homebodydiv[_ngcontent-%COMP%]{\n    padding-bottom: 10rem;\n}\n\n  ::-webkit-scrollbar {\n    width: 0.5em;\n    background-color: transparent;\n    height: 0.5rem;\n}\n\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(178, 178, 178, 0.5);\n    background-color: #060C34;\n    border-radius: 10px;\n    \n    \n}\n\n  ::-webkit-scrollbar-thumb {\n    background-color:#B2B2B2;\n    border-radius: 10px;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsNERBQTREO0lBQzVELFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLCtCQUErQjs7QUFFbkM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gICAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XG59XG5cbmZvb3RlcntcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gICAgLyogYm90dG9tOiAwOyAqL1xuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2sgMjAlLCByZ2JhKDAsMCwwLDApKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MEMzNDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbmZvb3RlciBwe1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhvbWVib2R5ZGl2e1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcbn1cblxuOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDAuNXJlbTtcbn1cbiAgIFxuOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgxNzgsIDE3OCwgMTc4LCAwLjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjBDMzQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjQjJCMkIyOyAqL1xuICAgIFxufVxuICAgXG46Om5nLWRlZXAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQjJCMkIyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGRhcmtncmV5OyAqL1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "EfPX":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _communicator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../communicator.service */ "Mafz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["carousel"];
function CarouselComponent_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_4_ng_template_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSelect(ctx_r5.links[i_r3]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r3 = ctx_r8.index;
    const img_r2 = ctx_r8.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.img_cont_class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "My image ", i_r3 + 1, " description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.captions[i_r3]);
} }
function CarouselComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_4_ng_template_0_Template, 7, 4, "ng-template", 4);
} }
class CarouselComponent {
    constructor(_communicatorservice, _router, breakpointObs) {
        this._communicatorservice = _communicatorservice;
        this._router = _router;
        this.breakpointObs = breakpointObs;
        this.images = new Array();
        this.captions = new Array();
        this.links = new Array();
        this.device = "";
        this.cont_padding_class = "cont-padding-normal";
        this.img_cont_class = "img-cont-normal";
        // images = ['pcDc2WJAYGJTTvRSEIpRZwM3Ola','hJuDvwzS0SPlsE6MNFOpznQltDZ','srYya1ZlI97Au4jUYAktDe3avyA'].map((n) => `https://image.tmdb.org/t/p/original/${n}.jpg`);
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
    }
    ngOnInit() {
        this.breakpointObs.observe('(max-width:768px)').subscribe(data => {
            if (data.matches) {
                // console.log('Something changed');
                this.device = 'mobile';
                this.mobile = true;
                this.cont_padding_class = "cont-padding-" + this.device;
                this.img_cont_class = "img-cont-" + this.device;
            }
            else {
                this.mobile = false;
                this.device = 'normal';
                this.cont_padding_class = "cont-padding-" + this.device;
                this.img_cont_class = "img-cont-" + this.device;
            }
        });
        this._communicatorservice.hit_backend('now-playing').subscribe(data => {
            this.pictures = JSON.stringify(data);
            this.pictures = JSON.parse(this.pictures);
            for (let i = 0; i < Object.keys(this.pictures).length; i++) {
                // console.log(this.pictures[String(i)]);
                this.images.push(this.pictures[String(i)]['image']);
                this.captions.push(this.pictures[String(i)]['name']);
                this.links.push(this.pictures[String(i)]['id']);
            }
            // console.log(this.pictures);
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    // ngDoCheck(){
    //   console.log('something changed');
    //   // console.log(this.paused);
    // }
    onSelect(id) {
        this._router.navigate(['/watch', 'movie', id]);
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_communicator_service__WEBPACK_IMPORTED_MODULE_2__["CommunicatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 6, vars: 6, consts: [[1, "container-fluid", 3, "ngClass"], [3, "interval", "pauseOnHover", "showNavigationIndicators", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [2, "cursor", "pointer", 3, "click"], [1, "img-container", "zoom", 3, "ngClass"], [1, "w-100", 3, "src", "alt"], [1, "overlay"], [1, "carousel-caption"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-carousel", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("slide", function CarouselComponent_Template_ngb_carousel_slide_2_listener($event) { return ctx.onSlide($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_4_Template, 1, 0, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cont_padding_class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 3000)("pauseOnHover", ctx.pauseOnHover)("showNavigationIndicators", !ctx.mobile)("pauseOnFocus", ctx.pauseOnFocus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]], styles: [".cont-padding-normal[_ngcontent-%COMP%]{\n    \n    padding-left: 12.5%; \n    padding-right: 12.5%;\n}\n\n.cont-padding-mobile[_ngcontent-%COMP%]{\n    \n    padding-left: 5.5%; \n    padding-right: 5.5%;\n}\n\n.zoom[_ngcontent-%COMP%]{\n    transition: 100ms ease;\n}\n\n.zoom[_ngcontent-%COMP%]:hover{\n    transform: scale(1.1);\n}\n\n.img-container[_ngcontent-%COMP%]{\n    \n    \n    \n\n    \n  }\n\n.img-cont-normal[_ngcontent-%COMP%]{\n    height: 26vw;\n}\n\n.img-cont-mobile[_ngcontent-%COMP%]{\n    height: 100%;\n}\n\n   .carousel-control-prev{\n    width: 12%;\n    \n  }\n\n   .carousel-control-next{\n    width: 12%;\n    \n}\n\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    \n    \n}\n\n.img-cont-normal[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\nposition:absolute;\ntop:0;\nleft:0;\nwidth:100%;\nheight:100%;\nbackground:linear-gradient(to top, black 20%, rgba(0,0,0,0));\nopacity:0;\ntransition:opacity 200ms ease;\n\n}\n\n.img-cont-mobile[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background:linear-gradient(to top, black 20%, rgba(0,0,0,0));\n    opacity:1;\n    transition:opacity 200ms ease;\n    \n}\n\n\n\n.img-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{\nopacity:1;\n}\n\n#ngbSlide[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%]{\n    display: block;\n}\n\n.overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    position:absolute;\n    \n    \n    color:#fff;\n    \n    text-align: left;\n    left: 10%;\n    padding-bottom: 2%;\n    font-size: large;\n}\n\nngb-carousel[_ngcontent-%COMP%]{\n    outline: none;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBR0E7SUFDSTt1QkFDbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGtCQUFrQjs7SUFFbEIsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFJQTtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7QUFDMUI7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsS0FBSztBQUNMLE1BQU07QUFDTixVQUFVO0FBQ1YsV0FBVztBQUNYLDREQUE0RDtBQUM1RCxTQUFTO0FBQ1QsNkJBQTZCOztBQUU3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixLQUFLO0lBQ0wsTUFBTTtJQUNOLFVBQVU7SUFDVixXQUFXO0lBQ1gsNERBQTREO0lBQzVELFNBQVM7SUFDVCw2QkFBNkI7O0FBRWpDOztBQUVBLFdBQVc7O0FBQ1g7QUFDQSxTQUFTO0FBQ1Q7O0FBS0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCO2VBQ1c7SUFDWCxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250LXBhZGRpbmctbm9ybWFse1xuICAgIC8qIHdpZHRoOiAxMDAlOyAgKi9cbiAgICBwYWRkaW5nLWxlZnQ6IDEyLjUlOyBcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMi41JTtcbn1cblxuLmNvbnQtcGFkZGluZy1tb2JpbGV7XG4gICAgLyogd2lkdGg6IDEwMCU7ICAqL1xuICAgIHBhZGRpbmctbGVmdDogNS41JTsgXG4gICAgcGFkZGluZy1yaWdodDogNS41JTtcbn1cblxuXG4uem9vbXtcbiAgICB0cmFuc2l0aW9uOiAxMDBtcyBlYXNlO1xufVxuXG4uem9vbTpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cblxuLmltZy1jb250YWluZXJ7XG4gICAgLyogcG9zaXRpb246cmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cbiAgICAvKiBoZWlnaHQ6IDI3dnc7ICovXG5cbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIH1cblxuLmltZy1jb250LW5vcm1hbHtcbiAgICBoZWlnaHQ6IDI2dnc7XG59XG4gXG4uaW1nLWNvbnQtbW9iaWxle1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuOjpuZy1kZWVwICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2e1xuICAgIHdpZHRoOiAxMiU7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDBweDsgKi9cbiAgfVxuXG4gIDo6bmctZGVlcCAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dHtcbiAgICB3aWR0aDogMTIlO1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAwcHg7ICovXG59XG5cbiAgXG5cbi5pbWctY29udGFpbmVyIGltZ3tcbiAgICAvKiBvYmplY3QtcG9zaXRpb246IHRvcDsgKi9cbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xufSAgXG5cbi5pbWctY29udC1ub3JtYWwgLm92ZXJsYXl7XG5wb3NpdGlvbjphYnNvbHV0ZTtcbnRvcDowO1xubGVmdDowO1xud2lkdGg6MTAwJTtcbmhlaWdodDoxMDAlO1xuYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjayAyMCUsIHJnYmEoMCwwLDAsMCkpO1xub3BhY2l0eTowO1xudHJhbnNpdGlvbjpvcGFjaXR5IDIwMG1zIGVhc2U7XG5cbn1cblxuLmltZy1jb250LW1vYmlsZSAub3ZlcmxheXtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrIDIwJSwgcmdiYSgwLDAsMCwwKSk7XG4gICAgb3BhY2l0eToxO1xuICAgIHRyYW5zaXRpb246b3BhY2l0eSAyMDBtcyBlYXNlO1xuICAgIFxufVxuXG4vKiBjb21tb24gKi9cbi5pbWctY29udGFpbmVyOmhvdmVyIC5vdmVybGF5e1xub3BhY2l0eToxO1xufVxuXG5cblxuXG4jbmdiU2xpZGU6aG92ZXIgLmNhcm91c2VsLWNhcHRpb257XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vdmVybGF5IHNwYW57XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgLyogdG9wOjc4JTtcbiAgICBsZWZ0OjEwJTsgKi9cbiAgICAvKiB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7ICovXG4gICAgY29sb3I6I2ZmZjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZWZ0OiAxMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cblxubmdiLWNhcm91c2Vse1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.css']
            }]
    }], function () { return [{ type: _communicator_service__WEBPACK_IMPORTED_MODULE_2__["CommunicatorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] }]; }, { carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carousel', { static: true }]
        }] }); })();


/***/ }),

/***/ "LMHW":
/*!****************************************************************!*\
  !*** ./src/app/search-typeahead/search-typeahead.component.ts ***!
  \****************************************************************/
/*! exports provided: SearchTypeaheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTypeaheadComponent", function() { return SearchTypeaheadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







function SearchTypeaheadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchTypeaheadComponent_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const r_r3 = ctx.result; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx_r5.Navigate(_r2, r_r3["category"], r_r3["id"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngb-highlight", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r3 = ctx.result;
    const t_r4 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", r_r3["image"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", r_r3.name)("term", t_r4);
} }
class SearchTypeaheadComponent {
    constructor(_httpclient, router) {
        this._httpclient = _httpclient;
        this.router = router;
        this.SelectEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // something(){
        //   this.router.navigate(['/mylist'])
        // }
        this.suggestions = new Array();
        // pipe runs the nested arguments to it in sequence 
        // debouncetime emits the source observable after given time
        // map is mapping the current_typed string to a function to return data
        this.searchfnc = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(currently_typed => currently_typed === '' ? [] : this.auto_complete(currently_typed).slice(0, 7))
        // map(current_typed => current_typed === '' ? [] : statesWithFlags.filter(v => v.name.toLowerCase().indexOf(current_typed.toLowerCase()) > -1).slice(0, 10))
        );
        this.formatter = (x) => x.name;
    }
    ngOnInit() {
    }
    auto_complete(curr_string) {
        // this._httpclient.get<ITmdbsearchdata[]>(`https://angnodehw-309323.wl.r.appspot.com/search/${curr_string}`).subscribe(data => this.suggestions = data);
        this._httpclient.get(`http://localhost:8080/search/${curr_string}`).subscribe(data => this.suggestions = data);
        // console.log(this.suggestions);
        return this.suggestions;
    }
    Navigate(input, cat, id) {
        // console.log(input.value)
        // id = ''
        // input.value = '';
        // this.model = null;
        this.SelectEmitter.emit();
        this.router.navigate([`/watch/${cat}/${id}`]);
        // routerLink="/watch/{{r['category']}}/{{r['id']}}"
    }
    selectObj(obj) {
        obj.preventDefault();
        this.model = null;
        this.objSelected = obj;
    }
    blurObj() {
        if (!this.objSelected) {
            this.form.get('obj').setValue('');
        }
    }
}
SearchTypeaheadComponent.ɵfac = function SearchTypeaheadComponent_Factory(t) { return new (t || SearchTypeaheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SearchTypeaheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchTypeaheadComponent, selectors: [["app-search-typeahead"]], outputs: { SelectEmitter: "SelectEmitter" }, decls: 4, vars: 4, consts: [["rt", ""], ["placeholder", "Search", "id", "typeahead-template", "type", "text", 1, "form-control", "searchbar", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "selectItem", "blur", "ngModelChange"], ["xinput", ""], [3, "click"], [3, "src"], [3, "result", "term"]], template: function SearchTypeaheadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchTypeaheadComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectItem", function SearchTypeaheadComponent_Template_input_selectItem_2_listener($event) { return ctx.selectObj($event); })("blur", function SearchTypeaheadComponent_Template_input_blur_2_listener() { return ctx.blurObj(); })("ngModelChange", function SearchTypeaheadComponent_Template_input_ngModelChange_2_listener($event) { return ctx.model = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.searchfnc)("resultTemplate", _r0)("inputFormatter", ctx.formatter);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbHighlight"]], styles: ["input[type=\"text\"][_ngcontent-%COMP%]\n{\n    background: transparent;\n    \n    margin-right:5%;\n    border-radius: 0;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: thin solid white;\n    \n    outline: none;\n    color:white;\n    \n}\n\n  .dropdown-menu \n{ \n    background-color: #060C34;\n    border: thin solid white;\n    border-radius: 1%;\n    \n}\n\n  .dropdown-item \n{ \n    background-color: #060C34;\n    height: 6vh;\n    color: white;\n    padding-left:0px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    margin-right: 10%;\n    \n    \n    \n}\n\n  .dropdown-item img\n{ \n    \n    width:10vh;\n    padding-left:2%;\n    padding-right: 2%;\n    margin-right: 1.5%;\n    \n    \n\n}\n\n  .dropdown-item div\n{ \n    \n    \n    padding: 2%;     \n    margin: -2%; \n    text-decoration: none;\n    color: white;\n\n}\n\n.form-control[_ngcontent-%COMP%]:hover, .form-control[_ngcontent-%COMP%]:active, .form-control[_ngcontent-%COMP%]:focus{\n    box-shadow: none !important;\n    -moz-box-shadow: none !important;\n    -webkit-box-shadow: none !important;\n}\n\n#typeahead-template[_ngcontent-%COMP%]{\n    margin-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXR5cGVhaGVhZC9zZWFyY2gtdHlwZWFoZWFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFdBQVc7O0FBRWY7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7OztBQUdyQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQix1QkFBdUI7O0FBRTNCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQjs7d0JBRW9CO0lBQ3BCLFdBQVc7SUFDWCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtdHlwZWFoZWFkL3NlYXJjaC10eXBlYWhlYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJ0ZXh0XCJdXG57XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLyogYm9yZGVyOiBub25lIG5vbmUgbm9uZSAxcHg7ICovXG4gICAgbWFyZ2luLXJpZ2h0OjUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCB3aGl0ZTtcbiAgICAvKiBib3JkZXItY29sb3I6IHdoaXRlOyAqL1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgXG59XG5cbjo6bmctZGVlcCAuZHJvcGRvd24tbWVudSBcbnsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MEMzNDtcbiAgICBib3JkZXI6IHRoaW4gc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMSU7XG4gICAgLyogcGFkZGluZy1yaWdodDogMSU7ICovXG59XG5cbjo6bmctZGVlcCAuZHJvcGRvd24taXRlbSBcbnsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MEMzNDtcbiAgICBoZWlnaHQ6IDZ2aDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OjBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgLyogbWFyZ2luOm5vbmU7ICovXG4gICAgXG4gICAgXG59XG5cbjo6bmctZGVlcCAuZHJvcGRvd24taXRlbSBpbWdcbnsgXG4gICAgLyogaGVpZ2h0OiA5dmg7ICovXG4gICAgd2lkdGg6MTB2aDtcbiAgICBwYWRkaW5nLWxlZnQ6MiU7XG4gICAgcGFkZGluZy1yaWdodDogMiU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiAuMjUlOyAqL1xuICAgIC8qIHBhZGRpbmctdG9wOiAuMjUlOyAqL1xuXG59XG5cbjo6bmctZGVlcCAuZHJvcGRvd24taXRlbSBkaXZcbnsgXG4gICAgLyogaGVpZ2h0OiA5dmg7ICovXG4gICAgLyogcGFkZGluZzogNSU7XG4gICAgcGFkZGluZy1yaWdodDogNTAlO1xuICAgIHBhZGRpbmctbGVmdDogMHB4OyAqL1xuICAgIHBhZGRpbmc6IDIlOyAgICAgXG4gICAgbWFyZ2luOiAtMiU7IFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cblxuLmZvcm0tY29udHJvbDpob3ZlciwgLmZvcm0tY29udHJvbDphY3RpdmUsIC5mb3JtLWNvbnRyb2w6Zm9jdXN7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4jdHlwZWFoZWFkLXRlbXBsYXRle1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchTypeaheadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-typeahead',
                templateUrl: './search-typeahead.component.html',
                styleUrls: ['./search-typeahead.component.css'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { SelectEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Mafz":
/*!*****************************************!*\
  !*** ./src/app/communicator.service.ts ***!
  \*****************************************/
/*! exports provided: CommunicatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicatorService", function() { return CommunicatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CommunicatorService {
    constructor(http) {
        this.http = http;
        const x = {};
    }
    hit_backend(what) {
        // this.http.get('').map( data => {  console.log(data);
        // }); 
        return this.http.get(`http://localhost:8080/${what}`);
        // return this.http.get(`https://angnodehw-309323.wl.r.appspot.com/${what}`);
    }
}
CommunicatorService.ɵfac = function CommunicatorService_Factory(t) { return new (t || CommunicatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommunicatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommunicatorService, factory: CommunicatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommunicatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Q82A":
/*!**************************************************!*\
  !*** ./src/app/watchcars/watchcars.component.ts ***!
  \**************************************************/
/*! exports provided: WatchcarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchcarsComponent", function() { return WatchcarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _communicator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../communicator.service */ "Mafz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







function WatchcarsComponent_div_1_ng_container_8_1_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchcarsComponent_div_1_ng_container_8_1_ng_template_0_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const j_r10 = ctx.index; const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onSelect(ctx_r11.categories[i_r4 + j_r10], ctx_r11.links[i_r4 + j_r10]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r8.card_class_device);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.captions[i_r4 + j_r10]);
} }
function WatchcarsComponent_div_1_ng_container_8_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchcarsComponent_div_1_ng_container_8_1_ng_template_0_div_2_Template, 8, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, ctx_r7.images, i_r4, i_r4 + 6));
} }
function WatchcarsComponent_div_1_ng_container_8_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WatchcarsComponent_div_1_ng_container_8_1_ng_template_0_Template, 4, 5, "ng-template", 9);
} }
function WatchcarsComponent_div_1_ng_container_8_2_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchcarsComponent_div_1_ng_container_8_2_ng_template_0_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const j_r19 = ctx.index; const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.onSelect(ctx_r20.categories[i_r4 + j_r19], ctx_r20.links[i_r4 + j_r19]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r18 = ctx.$implicit;
    const j_r19 = ctx.index;
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.card_class_device);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.captions[i_r4 + j_r19]);
} }
function WatchcarsComponent_div_1_ng_container_8_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchcarsComponent_div_1_ng_container_8_2_ng_template_0_div_2_Template, 8, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, ctx_r16.images, i_r4, i_r4 + 1));
} }
function WatchcarsComponent_div_1_ng_container_8_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WatchcarsComponent_div_1_ng_container_8_2_ng_template_0_Template, 4, 5, "ng-template", 9);
} }
function WatchcarsComponent_div_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchcarsComponent_div_1_ng_container_8_1_Template, 1, 0, undefined, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchcarsComponent_div_1_ng_container_8_2_Template, 1, 0, undefined, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 % 6 == 0 && !ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.mobile);
} }
function WatchcarsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngb-carousel", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WatchcarsComponent_div_1_ng_container_8_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.watchcar_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0)("showNavigationIndicators", !ctx_r0.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class WatchcarsComponent {
    constructor(_communicatorservice, _router, route, breakpointObs) {
        this._communicatorservice = _communicatorservice;
        this._router = _router;
        this.route = route;
        this.breakpointObs = breakpointObs;
        this.images = new Array();
        this.captions = new Array();
        this.links = new Array();
        this.categories = new Array();
    }
    ngOnInit() {
        this.breakpointObs.observe('(max-width:768px)').subscribe(data => {
            if (data.matches) {
                // console.log('Something changed');
                this.mobile = true;
                this.device = 'mobile';
                this.card_class_device = "card-class-" + this.device;
            }
            else {
                this.mobile = false;
                this.device = 'normal';
                this.card_class_device = "card-class-" + this.device;
            }
        });
        this.route.paramMap.subscribe((params) => {
            let id = params.get('id');
            let category = params.get('category');
            if (this.watchcar_name == 'reco')
                this.watchcar_title = 'Recommended ';
            else
                this.watchcar_title = 'Similar ';
            if (category == 'movie')
                this.watchcar_title += 'Movies';
            else
                this.watchcar_title += 'TV shows';
            let endpoint = `${this.watchcar_name}/${category}/${id}`;
            this._communicatorservice.hit_backend(endpoint).subscribe(data => {
                this.pictures = JSON.stringify(data);
                this.pictures = JSON.parse(this.pictures);
                this.images = [];
                this.captions = [];
                this.links = [];
                this.categories = [];
                // var temparray = new Array();
                for (let i = 0; i < Object.keys(this.pictures).length; i++) {
                    // console.log(this.pictures[String(i)]);
                    this.images.push(this.pictures[String(i)]['image']);
                    this.captions.push(this.pictures[String(i)]['name']);
                    this.links.push(this.pictures[String(i)]['id']);
                    this.categories.push(this.pictures[String(i)]['category']);
                }
                // this.images = temparray
            });
        });
    }
    onSelect(category, id) {
        this._router.navigate(['/watch', category, id]);
    }
}
WatchcarsComponent.ɵfac = function WatchcarsComponent_Factory(t) { return new (t || WatchcarsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_communicator_service__WEBPACK_IMPORTED_MODULE_1__["CommunicatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
WatchcarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchcarsComponent, selectors: [["app-watchcars"]], inputs: { watchcar_name: "watchcar_name" }, decls: 2, vars: 1, consts: [["class", "container desccontainer", 4, "ngIf"], [1, "container", "desccontainer"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [3, "interval", "showNavigationIndicators"], ["carousel", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["ngbSlide", "", "class", "ngslide"], [1, "container-fluid", "w-100"], ["class", "col-sm-12 col-md-2 grow", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-2", "grow"], [2, "cursor", "pointer", 3, "click"], [1, "card", 3, "ngClass"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "overlay"], [1, "carousel-caption"], [1, "container-fluid", 2, "width", "40vh"]], template: function WatchcarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchcarsComponent_div_1_Template, 9, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: ["h1[_ngcontent-%COMP%]{\n    padding-left: 8%;\n    color: white;\n    font-size: 2.5rem;\n}\n\n.desccontainer[_ngcontent-%COMP%]{\n    \n    \n    background-color: #060C34;\n    min-width: 80%;\n}\n\n.card[_ngcontent-%COMP%]{\n    border:none;\n    margin-top: 10%;\n    margin-bottom: 30%;\n    width: 95%;\n}\n\n.w-92[_ngcontent-%COMP%]{\n    width: 92%;\n}\n\nngb-carousel[_ngcontent-%COMP%]{\n    outline: none;\n    padding-left: 7.5%;\n    padding-right: 7.5%;\n}\n\n.captions[_ngcontent-%COMP%]{\n    font-size: 2rem;\n}\n\n\n\n.grow[_ngcontent-%COMP%]{\n    transition: 100ms ease;\n}\n\n.grow[_ngcontent-%COMP%]:hover{\n    transform: scale(1.1);\n}\n\n.card-class-normal[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background:linear-gradient(to top, black 25%, rgba(0,0,0,0));;\n    opacity:0;\n    transition:opacity 200ms ease;\n    \n}\n\n.card-class-mobile[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background:linear-gradient(to top, black 25%, rgba(0,0,0,0));;\n    opacity:1;\n    transition:opacity 200ms ease;\n    \n}\n\n.card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{\n    opacity:1;\n    }\n\n.carousel-caption[_ngcontent-%COMP%]{\n    text-align: left;\n    padding-bottom: 0px;\n    left: 10%;\n    \n}\n\n.carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-bottom: 0rem;\n    font-size: 1rem;\n}\n\n   .carousel-control-prev{\n    width: 12%;\n    \n  }\n\n   .carousel-control-next{\n    width: 12%;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0Y2hjYXJzL3dhdGNoY2Fycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUlBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7R0FFRzs7QUFHSDtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixLQUFLO0lBQ0wsTUFBTTtJQUNOLFVBQVU7SUFDVixXQUFXO0lBQ1gsNERBQTREO0lBQzVELFNBQVM7SUFDVCw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLEtBQUs7SUFDTCxNQUFNO0lBQ04sVUFBVTtJQUNWLFdBQVc7SUFDWCw0REFBNEQ7SUFDNUQsU0FBUztJQUNULDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxTQUFTO0lBQ1Q7O0FBRUo7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvd2F0Y2hjYXJzL3dhdGNoY2Fycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oMXtcbiAgICBwYWRkaW5nLWxlZnQ6IDglO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLmRlc2Njb250YWluZXJ7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAxNC41dnc7ICovXG4gICAgLyogcGFkZGluZy1yaWdodDogMTQuNXZ3OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjBDMzQ7XG4gICAgbWluLXdpZHRoOiA4MCU7XG59XG5cblxuLmNhcmR7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcbiAgICB3aWR0aDogOTUlO1xufVxuXG4udy05MntcbiAgICB3aWR0aDogOTIlO1xufVxuXG5uZ2ItY2Fyb3VzZWx7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDcuNSU7XG4gICAgcGFkZGluZy1yaWdodDogNy41JTtcbn1cblxuXG5cbi5jYXB0aW9uc3tcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi8qIC5jYXJvdXNlbC1jb250cm9sLW5leHQsIC5jYXJvdXNlbC1jb250cm9sLXByZXZ7XG4gICAgd2lkdGg6MTAlXG59ICovXG5cblxuLmdyb3d7XG4gICAgdHJhbnNpdGlvbjogMTAwbXMgZWFzZTtcbn1cblxuLmdyb3c6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5cbi5jYXJkLWNsYXNzLW5vcm1hbCAub3ZlcmxheXtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrIDI1JSwgcmdiYSgwLDAsMCwwKSk7O1xuICAgIG9wYWNpdHk6MDtcbiAgICB0cmFuc2l0aW9uOm9wYWNpdHkgMjAwbXMgZWFzZTtcbiAgICBcbn1cblxuLmNhcmQtY2xhc3MtbW9iaWxlIC5vdmVybGF5e1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2sgMjUlLCByZ2JhKDAsMCwwLDApKTs7XG4gICAgb3BhY2l0eToxO1xuICAgIHRyYW5zaXRpb246b3BhY2l0eSAyMDBtcyBlYXNlO1xuICAgIFxufSAgXG5cbi5jYXJkOmhvdmVyIC5vdmVybGF5e1xuICAgIG9wYWNpdHk6MTtcbiAgICB9XG5cbi5jYXJvdXNlbC1jYXB0aW9ue1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBsZWZ0OiAxMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiBwe1xuICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5cbjo6bmctZGVlcCAgLmNhcm91c2VsLWNvbnRyb2wtcHJldntcbiAgICB3aWR0aDogMTIlO1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAwcHg7ICovXG4gIH1cblxuICA6Om5nLWRlZXAgIC5jYXJvdXNlbC1jb250cm9sLW5leHR7XG4gICAgd2lkdGg6IDEyJTtcbiAgICAvKiBtYXJnaW4tbGVmdDogMHB4OyAqL1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchcarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watchcars',
                templateUrl: './watchcars.component.html',
                styleUrls: ['./watchcars.component.css']
            }]
    }], function () { return [{ type: _communicator_service__WEBPACK_IMPORTED_MODULE_1__["CommunicatorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }]; }, { watchcar_name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _search_typeahead_search_typeahead_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-typeahead/search-typeahead.component */ "LMHW");








const _c0 = function () { return { exact: true }; };
class AppComponent {
    constructor(breakpointObs) {
        this.breakpointObs = breakpointObs;
        this.title = 'frontend';
        this.isMenuCollapsed = true;
        this.images = new Array();
        this.captions = new Array();
        this.links = new Array();
        this.categories = new Array();
    }
    ngOnInit() {
        this.breakpointObs.observe('(max-width:768px)').subscribe(data => {
            if (data.matches) {
                // console.log('Something changed');
                this.mobile = true;
                this.device = 'mobile';
                this.navbar_class_device = "navbar-class-" + this.device;
            }
            else {
                this.mobile = false;
                this.device = 'normal';
                this.navbar_class_device = "navbar-class-" + this.device;
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "sticky-top", 2, "background-color", "#040A23", 3, "ngClass"], ["routerLink", "/", 1, "navbar-brand", "mr-3", 3, "click"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "mr-1", "pr-3"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", "float-right", 3, "routerLinkActiveOptions", "click"], [1, "sr-only"], ["routerLink", "/mylist", "routerLinkActive", "active", 1, "nav-link", "float-right", 3, "click"], [1, "form-inline", "my-2", "my-lg-0"], [3, "SelectEmitter"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_1_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.isMenuCollapsed = !ctx.isMenuCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_8_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_13_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-search-typeahead", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("SelectEmitter", function AppComponent_Template_app_search_typeahead_SelectEmitter_16_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.navbar_class_device);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _search_typeahead_search_typeahead_component__WEBPACK_IMPORTED_MODULE_6__["SearchTypeaheadComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".navbar-class-normal[_ngcontent-%COMP%]{\n    padding-left:3vw;\n    padding-right:3vw;\n}\n\n.navbar-class-mobile[_ngcontent-%COMP%]{\n    padding-left:10vw;\n    padding-right:10vw;\n}\n\n.navbar-brand[_ngcontent-%COMP%]{\n    \n    \n    \n    \n}\n\n.nav-item[_ngcontent-%COMP%]{\n    \n    padding-left: 1.5vh;\n    font-size: medium;\n}\n\nbody[_ngcontent-%COMP%]{\n    min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHdCQUF3Qjs7QUFFNUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm5hdmJhcntcbiAgICBwYWRkaW5nLWxlZnQ6M3Z3O1xuICAgIHBhZGRpbmctcmlnaHQ6M3Z3O1xufSAqL1xuXG4ubmF2YmFyLWNsYXNzLW5vcm1hbHtcbiAgICBwYWRkaW5nLWxlZnQ6M3Z3O1xuICAgIHBhZGRpbmctcmlnaHQ6M3Z3O1xufVxuXG4ubmF2YmFyLWNsYXNzLW1vYmlsZXtcbiAgICBwYWRkaW5nLWxlZnQ6MTB2dztcbiAgICBwYWRkaW5nLXJpZ2h0OjEwdnc7XG59XG5cbi5uYXZiYXItYnJhbmR7XG4gICAgLyogcGFkZGluZy10b3A6IDJ2aDsgKi9cbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDF2aDsgKi9cbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogdmg7ICovXG4gICAgXG59XG5cbi5uYXYtaXRlbXtcbiAgICAvKiBwYWRkaW5nLXRvcDogMXZoOyAqL1xuICAgIHBhZGRpbmctbGVmdDogMS41dmg7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbmJvZHl7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "TGpL":
/*!****************************************************!*\
  !*** ./src/app/watch-desc/watch-desc.component.ts ***!
  \****************************************************/
/*! exports provided: WatchDescComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchDescComponent", function() { return WatchDescComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _communicator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../communicator.service */ "Mafz");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");









const _c0 = ["staticAlert"];
const _c1 = ["selfClosingAlert"];
function WatchDescComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchDescComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchDescComponent_ngb_alert_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function WatchDescComponent_ngb_alert_29_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx_r2.alert_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.successMessage);
} }
function WatchDescComponent_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WatchDescComponent {
    constructor(route, _communicatorservice) {
        this.route = route;
        this._communicatorservice = _communicatorservice;
        this.result = {};
        this.video = {};
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.staticAlertClosed = false;
        this.successMessage = '';
        this.button_text = '';
        this.alert_type = 'success';
    }
    // public id;
    // public category;
    isDataAvailable() {
        // console.log(this.result);
        let x = Object.keys(this.result).length > 5;
        // console.log(x);
        return x;
    }
    ngOnInit() {
        // let id = this.route.snapshot.paramMap.get('id');
        // let category = this.route.snapshot.paramMap.get('category');
        function add_to_localstorage(item_to_add) {
            let visited = new Array();
            if (localStorage.getItem('visited') != null) {
                visited = JSON.parse(localStorage.getItem('visited'));
            }
            if (!visited.includes(item_to_add)) {
                // object not present        
            }
            else {
                // object already present
                visited.splice(visited.indexOf(item_to_add), 1);
            }
            visited.push(item_to_add);
            if (visited.length > 24) {
                visited.splice(0, 1);
            }
            // }
            localStorage.setItem('visited', JSON.stringify(visited));
            // localStorage.setItem('count',JSON.stringify(latest_count) );
        }
        this.route.paramMap.subscribe((params) => {
            let id = params.get('id');
            let category = params.get('category');
            // console.log(category+'/'+id);
            this._communicatorservice.hit_backend(`details/${category}/${id}`).subscribe(data => {
                let string = JSON.stringify(data);
                this.result = JSON.parse(string);
                this.result['enc_title'] = encodeURIComponent(this.result['name']);
                this.item_to_add = `${category}|${id}|${this.result['poster_path']}|${this.result['name']}`;
                this.catid = `${category}|${id}`;
                add_to_localstorage(this.item_to_add);
                if (this.inWatchlist(this.item_to_add, this.catid))
                    this.button_text = 'Remove from Watchlist';
                else
                    this.button_text = 'Add to Watchlist';
                // close the alert when change
                if (this.selfClosingAlert) {
                    this.selfClosingAlert.close();
                }
                // scroll to top when change
                window.scrollTo(0, 0);
            });
            this._communicatorservice.hit_backend(`video/${category}/${id}`).subscribe(data => {
                let string = JSON.stringify(data);
                this.video = JSON.parse(string);
                // console.log(this.video);
            });
        });
        // this.route.params.subscribe()
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
    }
    inWatchlist(item_to_add, catid) {
        let watchlist = [];
        let watchlist_hash = [];
        if (localStorage.getItem('watchlist') != null) {
            watchlist = JSON.parse(localStorage.getItem('watchlist'));
            watchlist_hash = JSON.parse(localStorage.getItem('watchlist_hash')); //must exist if watchlist exists
        }
        /// patch fix for poster change
        if (watchlist_hash.includes(catid)) { // hash has the item -> 2 possible scenarios -> a. watchlist has the same poster_path/name {then do nothing extra} b. watchlist has different poster_path/name {change update in watchlist}
            if (!watchlist.includes(item_to_add)) // different poster_path and name
             {
                // update the poster_path in the actual watchlist
                let index = watchlist_hash.indexOf(catid);
                watchlist[index] = item_to_add;
                localStorage.setItem('watchlist', JSON.stringify(watchlist));
                // localStorage.setItem('watchlist_hash',JSON.stringify(watchlist_hash) ); // commented as not required (update only changes watchlist value; not index so no need to update hash)
            }
            // else{ // same poster_path and name -> do nothing 
            // }
        }
        // else{ //if hash doesnt contain the item, watchlist doesnt either so do nothing extra 
        // do nothing so commented
        // }
        return watchlist.includes(item_to_add);
    }
    add_remove_watchlist(item_to_add, catid) {
        // let watchlist_count = 0;
        let watchlist = [];
        let watchlist_hash = [];
        let wl_action = '';
        // let item_to_add=`${category}|${id}|${poster_path}|${caption}`;
        // console.log(item_to_add)
        // console.log(catid)
        if (localStorage.getItem('watchlist') != null) {
            watchlist = JSON.parse(localStorage.getItem('watchlist'));
            watchlist_hash = JSON.parse(localStorage.getItem('watchlist_hash'));
        }
        if (!watchlist.includes(item_to_add)) {
            watchlist.push(item_to_add);
            watchlist_hash.push(catid); // keep hash in sync
            // add it
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
            localStorage.setItem('watchlist_hash', JSON.stringify(watchlist_hash)); // keep hash in sync
            this.button_text = 'Remove from Watchlist';
            this.alert_type = 'success';
            wl_action = 'Added to';
        }
        else {
            //remove
            let index = watchlist.indexOf(item_to_add);
            watchlist.splice(index, 1);
            watchlist_hash.splice(index, 1); // keep hash in sync
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
            localStorage.setItem('watchlist_hash', JSON.stringify(watchlist_hash)); // keep hash in sync
            this.button_text = 'Add to Watchlist';
            this.alert_type = 'danger';
            wl_action = 'Removed from';
        }
        this._success.next(`${wl_action} watchlist`);
    }
}
WatchDescComponent.ɵfac = function WatchDescComponent_Factory(t) { return new (t || WatchDescComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_communicator_service__WEBPACK_IMPORTED_MODULE_4__["CommunicatorService"])); };
WatchDescComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchDescComponent, selectors: [["app-watch-desc"]], viewQuery: function WatchDescComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.staticAlert = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, decls: 43, vars: 17, consts: [[1, "container", "desccontainer"], [1, "row"], [1, "col-sm-12", "col-md-8", "pl-4", "pr-4"], ["suggestedQuality", "highres", 1, "embed-responsive", "embed-responsive-16by9", "mb-3", 3, "videoId"], [1, "col-sm-12", "col-md-4", "pl-4", "pr-4"], ["id", "movie-title", 2, "font-weight", "normal", "font-size", "3.2rem", "color", "white"], [1, "text-grey-upperhalf", 2, "font-size", "1.5rem"], [1, "text-grey-upperhalf", "pt-2", "mb-2", 2, "font-size", "1.5rem"], [4, "ngIf"], [1, "genre"], [1, "text-grey-upperhalf", 2, "font-size", "1.25rem"], [1, "lang", "text-white"], ["type", "button", 1, "btn", "btn-primary", "shadow-none", 3, "click"], [3, "type", "closed", 4, "ngIf"], [1, "col-sm-12", "pl-4", "pr-4"], ["class", "h5 desctitle text-white font-weight-normal", 4, "ngIf"], [1, "desccontent", "text-grey", "font-weight-normal", "text-justify", 2, "font-size", "1.25rem"], [1, "row", "pt-3"], [1, "h5", "desctitle", "text-white", "font-weight-normal"], ["target", "_", 1, "twitter-share-button", "tweetcl", 3, "href"], [1, "fa", "fa-twitter", "fa-2x"], ["target", "_blank", 3, "href"], [1, "fa", "fa-facebook-square", "fa-2x"], [3, "type", "closed"], ["selfClosingAlert", ""]], template: function WatchDescComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "youtube-player", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WatchDescComponent_span_13_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WatchDescComponent_span_15_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Genres : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Spoken Languages : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchDescComponent_Template_a_click_26_listener() { return ctx.add_remove_watchlist(ctx.item_to_add, ctx.catid); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, WatchDescComponent_ngb_alert_29_Template, 3, 2, "ngb-alert", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, WatchDescComponent_p_32_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", ctx.video["videoid"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.result["name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result["tagline"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.result["release_date"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result["release_date"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u2605 ", ctx.result["rating"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result["runtime"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.result["runtime"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.result["genres"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result["lang"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.button_text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result["overview"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.result["overview"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch ", ctx.result["enc_title"], " www.youtube.com/watch?v=", ctx.video["videoid"], "&hashtags=USC,CSCI571,FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=", ctx.video["videoid"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YouTubePlayer"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlert"]], styles: ["@media screen and (min-width: 768px) {\n    .desctitle[_ngcontent-%COMP%] {\n     padding-left:1rem;\n     padding-right:1rem;\n    }\n\n    .desccontent[_ngcontent-%COMP%] {\n        padding-left:1rem;\n        padding-right:1rem;\n       }\n\n    .tweetcl[_ngcontent-%COMP%]{\n    padding-left:1rem;\n    }\n    \n  }\n\n.desccontainer[_ngcontent-%COMP%]{\n    \n    \n    background-color: #060C34;\n    min-width: 72%;\n}\n\n.bckgd[_ngcontent-%COMP%]{\n    background-color: #060C34;\n}\n\np[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{\n    font-size: 1.3rem;\n    font-weight: normal;\n}\n\n.genre[_ngcontent-%COMP%]{\n    font-size: 1.1rem;\n    margin-bottom: 0px;\n    color: white;\n}\n\n.lang[_ngcontent-%COMP%]{\n    font-size: 1.1rem;\n}\n\n.colorwhite[_ngcontent-%COMP%]{\n    color: white;\n}\n\n.desccontent[_ngcontent-%COMP%]{\n    font-size: 1.2rem;\n}\n\n.desctitle[_ngcontent-%COMP%]{\n    font-size: 1.4rem;\n}\n\n.text-grey[_ngcontent-%COMP%]{\n    \n    color: #8B8F9E;\n    \n}\n\n.text-grey-upperhalf[_ngcontent-%COMP%]{\n    \n    color: #B9BAC1;\n}\n\n.fa[_ngcontent-%COMP%]{\n    text-decoration: none;\n    margin-right: 10px;\n}\n\n.fa-facebook-square[_ngcontent-%COMP%]  {\n    \n    color: #0818AC;\n}\n\n.fa-twitter[_ngcontent-%COMP%] {\n    color: #55ACEE;\n}\n\n.btn-primary[_ngcontent-%COMP%]{\n   font-size: 20px;\n   padding-left:4%;\n   padding-right:4%;\n   \n}\n\n.btn[_ngcontent-%COMP%]{\n color:white;   \n}\n\n.btn[_ngcontent-%COMP%]:hover{\n    color:white;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0Y2gtZGVzYy93YXRjaC1kZXNjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7SUFDSTtLQUNDLGlCQUFpQjtLQUNqQixrQkFBa0I7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO09BQ25COztJQUVIO0lBQ0EsaUJBQWlCO0lBQ2pCOztFQUVGOztBQUtGO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFHQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7R0FDRyxlQUFlO0dBQ2YsZUFBZTtHQUNmLGdCQUFnQjs7QUFFbkI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC93YXRjaC1kZXNjL3dhdGNoLWRlc2MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC55b3V0dWJlcGxheWVye1xuICAgIGhlaWdodDoyMHZoO1xufSAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5kZXNjdGl0bGUge1xuICAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcbiAgICAgcGFkZGluZy1yaWdodDoxcmVtO1xuICAgIH1cblxuICAgIC5kZXNjY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDoxcmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OjFyZW07XG4gICAgICAgfVxuXG4gICAgLnR3ZWV0Y2x7XG4gICAgcGFkZGluZy1sZWZ0OjFyZW07XG4gICAgfVxuICAgIFxuICB9XG5cblxuXG5cbi5kZXNjY29udGFpbmVye1xuICAgIC8qIHBhZGRpbmctbGVmdDogMTQuNXZ3OyAqL1xuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDE0LjV2dzsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwQzM0O1xuICAgIG1pbi13aWR0aDogNzIlO1xufVxuXG5cbi5iY2tnZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwQzM0O1xufVxuXG5wIGJ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmdlbnJle1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuLmxhbmd7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5jb2xvcndoaXRle1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRlc2Njb250ZW50e1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uZGVzY3RpdGxle1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4udGV4dC1ncmV5e1xuICAgIC8qIGNvbG9yOiAjODA4NDkyOyAqL1xuICAgIGNvbG9yOiAjOEI4RjlFO1xuICAgIC8qIGNvbG9yOiAjQjlCQUMxOyAqL1xufVxuXG4udGV4dC1ncmV5LXVwcGVyaGFsZntcbiAgICAvKiBjb2xvcjojOEY5MEEzOyAqL1xuICAgIGNvbG9yOiAjQjlCQUMxO1xufVxuXG5cbi5mYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZmEtZmFjZWJvb2stc3F1YXJlICB7XG4gICAgLyogY29sb3I6ICMzQjU5OTg7ICovXG4gICAgY29sb3I6ICMwODE4QUM7XG59XG5cbi5mYS10d2l0dGVyIHtcbiAgICBjb2xvcjogIzU1QUNFRTtcbn1cblxuLmJ0bi1wcmltYXJ5e1xuICAgZm9udC1zaXplOiAyMHB4O1xuICAgcGFkZGluZy1sZWZ0OjQlO1xuICAgcGFkZGluZy1yaWdodDo0JTtcbiAgIFxufVxuXG4uYnRue1xuIGNvbG9yOndoaXRlOyAgIFxufVxuXG4uYnRuOmhvdmVye1xuICAgIGNvbG9yOndoaXRlOyAgIFxufVxuICAgXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchDescComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watch-desc',
                templateUrl: './watch-desc.component.html',
                styleUrls: ['./watch-desc.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _communicator_service__WEBPACK_IMPORTED_MODULE_4__["CommunicatorService"] }]; }, { staticAlert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['staticAlert', { static: false }]
        }], selfClosingAlert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selfClosingAlert', { static: false }]
        }] }); })();


/***/ }),

/***/ "Twl7":
/*!**************************************************!*\
  !*** ./src/app/castmodal/castmodal.component.ts ***!
  \**************************************************/
/*! exports provided: CastmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastmodalComponent", function() { return CastmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _communicator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../communicator.service */ "Mafz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CastmodalComponent_div_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", ctx_r1.actor_details["dob"], "");
} }
function CastmodalComponent_div_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r2.actor_details["birthplace"], "");
} }
function CastmodalComponent_div_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", ctx_r3.actor_details["gender"], "");
} }
function CastmodalComponent_div_0_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r4.actor_details["homepage"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.actor_details["homepage"]);
} }
function CastmodalComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known for: ", ctx_r5.actor_details["known_for"], "");
} }
function CastmodalComponent_div_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r6.actor_details["aka"], "");
} }
function CastmodalComponent_div_0_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 18);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r7.actor_details["imdb"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastmodalComponent_div_0_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 19);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r8.actor_details["insta"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastmodalComponent_div_0_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 20);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r9.actor_details["fb"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastmodalComponent_div_0_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 21);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r10.actor_details["twtr"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastmodalComponent_div_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.actor_details["bio"]);
} }
function CastmodalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CastmodalComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.modal.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CastmodalComponent_div_0_span_12_Template, 3, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CastmodalComponent_div_0_span_13_Template, 3, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CastmodalComponent_div_0_span_14_Template, 3, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CastmodalComponent_div_0_span_15_Template, 5, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CastmodalComponent_div_0_span_16_Template, 3, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CastmodalComponent_div_0_span_17_Template, 3, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CastmodalComponent_div_0_a_20_Template, 1, 1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CastmodalComponent_div_0_a_21_Template, 1, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CastmodalComponent_div_0_a_22_Template, 1, 1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CastmodalComponent_div_0_a_23_Template, 1, 1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CastmodalComponent_div_0_div_26_Template, 6, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.actor_details["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.actor_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.actor_details["dob"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.actor_details["birthplace"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.actor_details["gender"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.actor_details["homepage"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.actor_details["known_for"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.actor_details["aka"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.actor_details["imdb"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.actor_details["insta"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.actor_details["fb"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.actor_details["twtr"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.actor_details["bio"]);
} }
class CastmodalComponent {
    constructor(modal, _communicatorservice) {
        this.modal = modal;
        this._communicatorservice = _communicatorservice;
        this.actor_details = {};
        this.actor_image = "";
        this.data_received = false;
    }
    ngOnInit() {
        this._communicatorservice.hit_backend(`actor-details/${this.actor_id}`).subscribe(data => {
            // console.log(data);
            this.actor_details = data;
            this.data_received = true;
        });
    }
}
CastmodalComponent.ɵfac = function CastmodalComponent_Factory(t) { return new (t || CastmodalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_communicator_service__WEBPACK_IMPORTED_MODULE_2__["CommunicatorService"])); };
CastmodalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CastmodalComponent, selectors: [["app-castmodal"]], decls: 1, vars: 1, consts: [["style", "  display: flex; flex-direction: column; overflow: hidden; max-height:80rem", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column", "overflow", "hidden", "max-height", "80rem"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-sm-3"], ["alt", "", 2, "position", "relative", "width", "100%", "height", "100%", 3, "src"], [1, "col-sm-9"], [4, "ngIf"], ["triggers", "mouseenter:mouseleave", "ngbPopover", "Visit IMDB", "target", "_", "class", "fa fa-imdb fa-2x", 3, "href", 4, "ngIf"], ["triggers", "mouseenter:mouseleave", "ngbPopover", "Visit Instagram", "target", "_", "class", "fa fa-instagram fa-2x", 3, "href", 4, "ngIf"], ["triggers", "mouseenter:mouseleave", "ngbPopover", "Visit Facebook", "target", "_", "class", "fa fa-facebook-square fa-2x", 3, "href", 4, "ngIf"], ["triggers", "mouseenter:mouseleave", "ngbPopover", "Visit Twitter", "target", "_", "class", "fa fa-twitter fa-2x", 3, "href", 4, "ngIf"], ["class", "col-sm-12", 4, "ngIf"], ["target", "_", 3, "href"], ["triggers", "mouseenter:mouseleave", "ngbPopover", "Visit IMDB", "target", "_", 1, "fa", "fa-imdb", "fa-2x", 3, "href"], ["triggers", "mouseenter:mouseleave", "ngbPopover", "Visit Instagram", "target", "_", 1, "fa", "fa-instagram", "fa-2x", 3, "href"], ["triggers", "mouseenter:mouseleave", "ngbPopover", "Visit Facebook", "target", "_", 1, "fa", "fa-facebook-square", "fa-2x", 3, "href"], ["triggers", "mouseenter:mouseleave", "ngbPopover", "Visit Twitter", "target", "_", 1, "fa", "fa-twitter", "fa-2x", 3, "href"], [1, "col-sm-12"]], template: function CastmodalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CastmodalComponent_div_0_Template, 27, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data_received);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"]], styles: [".custom-model[_ngcontent-%COMP%]    > .modal-dialog[_ngcontent-%COMP%]{\n    width: 120vh;\n    \n}\n\n\n\n.fa[_ngcontent-%COMP%]{\n    text-decoration: none;\n    margin-right: 10px;\n}\n\n.fa-facebook-square[_ngcontent-%COMP%]  {\n    color: #3B5998;\n}\n\n.fa-twitter[_ngcontent-%COMP%] {\n    color: #55ACEE;\n}\n\n.fa-imdb[_ngcontent-%COMP%] {\n    color: #EEC548;\n}\n\n.fa-instagram[_ngcontent-%COMP%] {\n    color: #9D40A0;\n}\n\n  ::-webkit-scrollbar {\n    width: 0.5em;\n    background-color: transparent;\n    height: 0.5rem;\n}\n\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(178, 178, 178, 0.5);\n    background-color: transparent;\n    border-radius: 10px;\n    \n    \n}\n\n  ::-webkit-scrollbar-thumb {\n    background-color:#B2B2B2;\n    border-radius: 10px;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdG1vZGFsL2Nhc3Rtb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBSUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQiwrQkFBK0I7O0FBRW5DOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9jYXN0bW9kYWwvY2FzdG1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLW1vZGVsID4gLm1vZGFsLWRpYWxvZ3tcbiAgICB3aWR0aDogMTIwdmg7XG4gICAgXG59XG5cbi8qIDo6bmctZGVlcCAubWQtY2xhc3MgLm1vZGFsLWRpYWxvZyB7IFxuICAgIG1heC13aWR0aDogODAlO1xuICAgIHdpZHRoOiA4MCU7XG59ICovXG5cbi5mYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZmEtZmFjZWJvb2stc3F1YXJlICB7XG4gICAgY29sb3I6ICMzQjU5OTg7XG59XG5cbi5mYS10d2l0dGVyIHtcbiAgICBjb2xvcjogIzU1QUNFRTtcbn1cblxuLmZhLWltZGIge1xuICAgIGNvbG9yOiAjRUVDNTQ4O1xufVxuXG4uZmEtaW5zdGFncmFtIHtcbiAgICBjb2xvcjogIzlENDBBMDtcbn1cblxuXG5cbjo6bmctZGVlcCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMC41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiAwLjVyZW07XG59XG4gICBcbjo6bmctZGVlcCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMTc4LCAxNzgsIDE3OCwgMC41KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNCMkIyQjI7ICovXG4gICAgXG59XG4gICBcbjo6bmctZGVlcCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNCMkIyQjI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgZGFya2dyZXk7ICovXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CastmodalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-castmodal',
                templateUrl: './castmodal.component.html',
                styleUrls: ['./castmodal.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }, { type: _communicator_service__WEBPACK_IMPORTED_MODULE_2__["CommunicatorService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/carousel.component */ "EfPX");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mylist/mylist.component */ "76GK");
/* harmony import */ var _card_car_card_car_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-car/card-car.component */ "fpy/");
/* harmony import */ var _communicator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./communicator.service */ "Mafz");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _search_typeahead_search_typeahead_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-typeahead/search-typeahead.component */ "LMHW");
/* harmony import */ var _watch_watch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./watch/watch.component */ "ZGjR");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _watch_desc_watch_desc_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./watch-desc/watch-desc.component */ "TGpL");
/* harmony import */ var _castcard_car_castcard_car_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./castcard-car/castcard-car.component */ "v6si");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reviews/reviews.component */ "bZw7");
/* harmony import */ var _castmodal_castmodal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./castmodal/castmodal.component */ "Twl7");
/* harmony import */ var _watchcars_watchcars_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./watchcars/watchcars.component */ "Q82A");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _cont_watch_car_cont_watch_car_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cont-watch-car/cont-watch-car.component */ "7O2h");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "3Pt+");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_communicator_service__WEBPACK_IMPORTED_MODULE_9__["CommunicatorService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__["YouTubePlayerModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_7__["MylistComponent"],
        _card_car_card_car_component__WEBPACK_IMPORTED_MODULE_8__["CardCarComponent"],
        _search_typeahead_search_typeahead_component__WEBPACK_IMPORTED_MODULE_11__["SearchTypeaheadComponent"],
        _watch_watch_component__WEBPACK_IMPORTED_MODULE_12__["WatchComponent"],
        _watch_desc_watch_desc_component__WEBPACK_IMPORTED_MODULE_14__["WatchDescComponent"],
        _castcard_car_castcard_car_component__WEBPACK_IMPORTED_MODULE_15__["CastcardCarComponent"],
        _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__["ReviewsComponent"],
        _castmodal_castmodal_component__WEBPACK_IMPORTED_MODULE_17__["CastmodalComponent"],
        _watchcars_watchcars_component__WEBPACK_IMPORTED_MODULE_18__["WatchcarsComponent"],
        _cont_watch_car_cont_watch_car_component__WEBPACK_IMPORTED_MODULE_20__["ContWatchCarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__["YouTubePlayerModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_7__["MylistComponent"],
                    _card_car_card_car_component__WEBPACK_IMPORTED_MODULE_8__["CardCarComponent"],
                    _search_typeahead_search_typeahead_component__WEBPACK_IMPORTED_MODULE_11__["SearchTypeaheadComponent"],
                    _watch_watch_component__WEBPACK_IMPORTED_MODULE_12__["WatchComponent"],
                    _watch_desc_watch_desc_component__WEBPACK_IMPORTED_MODULE_14__["WatchDescComponent"],
                    _castcard_car_castcard_car_component__WEBPACK_IMPORTED_MODULE_15__["CastcardCarComponent"],
                    _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__["ReviewsComponent"],
                    _castmodal_castmodal_component__WEBPACK_IMPORTED_MODULE_17__["CastmodalComponent"],
                    _watchcars_watchcars_component__WEBPACK_IMPORTED_MODULE_18__["WatchcarsComponent"],
                    _cont_watch_car_cont_watch_car_component__WEBPACK_IMPORTED_MODULE_20__["ContWatchCarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__["YouTubePlayerModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"]
                ],
                providers: [_communicator_service__WEBPACK_IMPORTED_MODULE_9__["CommunicatorService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZGjR":
/*!******************************************!*\
  !*** ./src/app/watch/watch.component.ts ***!
  \******************************************/
/*! exports provided: WatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchComponent", function() { return WatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _watch_desc_watch_desc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../watch-desc/watch-desc.component */ "TGpL");
/* harmony import */ var _castcard_car_castcard_car_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../castcard-car/castcard-car.component */ "v6si");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reviews/reviews.component */ "bZw7");
/* harmony import */ var _watchcars_watchcars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../watchcars/watchcars.component */ "Q82A");






class WatchComponent {
    constructor() { }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
WatchComponent.ɵfac = function WatchComponent_Factory(t) { return new (t || WatchComponent)(); };
WatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchComponent, selectors: [["app-watch"]], decls: 6, vars: 2, consts: [[1, "bckgd"], [3, "watchcar_name"]], template: function WatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-watch-desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-castcard-car");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-watchcars", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-watchcars", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("watchcar_name", "reco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("watchcar_name", "similar");
    } }, directives: [_watch_desc_watch_desc_component__WEBPACK_IMPORTED_MODULE_1__["WatchDescComponent"], _castcard_car_castcard_car_component__WEBPACK_IMPORTED_MODULE_2__["CastcardCarComponent"], _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_3__["ReviewsComponent"], _watchcars_watchcars_component__WEBPACK_IMPORTED_MODULE_4__["WatchcarsComponent"]], styles: [".bckgd[_ngcontent-%COMP%]{\n    background-color: #060C34;\n    padding-bottom: 10rem;\n}\n\n.desccontainer[_ngcontent-%COMP%]{\n    \n    \n    background-color: #060C34;\n    min-width: 80.5%;\n}\n\nfooter[_ngcontent-%COMP%]{\n    \n    \n    background:linear-gradient(to top, black 20%, rgba(0,0,0,0));\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    background-color: #060C34;\n    margin-top: 5%;\n    padding-bottom: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color:white;\n    text-align: center;\n}\n\n  ::-webkit-scrollbar {\n    width: 0.5em;\n    background-color: transparent;\n    height: 0.5rem;\n}\n\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(178, 178, 178, 0.5);\n    background-color: transparent;\n    border-radius: 10px;\n    \n    \n}\n\n  ::-webkit-scrollbar-thumb {\n    background-color:#B2B2B2;\n    border-radius: 10px;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0Y2gvd2F0Y2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw0REFBNEQ7SUFDNUQsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsK0JBQStCOztBQUVuQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvd2F0Y2gvd2F0Y2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJja2dke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjBDMzQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xufVxuXG4uZGVzY2NvbnRhaW5lcntcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDE0LjV2dzsgKi9cbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAxNC41dnc7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MEMzNDtcbiAgICBtaW4td2lkdGg6IDgwLjUlO1xufVxuXG5mb290ZXJ7XG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICAgIC8qIGJvdHRvbTogMDsgKi9cbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrIDIwJSwgcmdiYSgwLDAsMCwwKSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjBDMzQ7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG5mb290ZXIgcHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDAuNXJlbTtcbn1cbiAgIFxuOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgxNzgsIDE3OCwgMTc4LCAwLjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI0IyQjJCMjsgKi9cbiAgICBcbn1cbiAgIFxuOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6I0IyQjJCMjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8qIG91dGxpbmU6IDFweCBzb2xpZCBkYXJrZ3JleTsgKi9cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watch',
                templateUrl: './watch.component.html',
                styleUrls: ['./watch.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bZw7":
/*!**********************************************!*\
  !*** ./src/app/reviews/reviews.component.ts ***!
  \**********************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _communicator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../communicator.service */ "Mafz");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ReviewsComponent_div_0_div_5_br_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function ReviewsComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReviewsComponent_div_0_div_5_br_7_Template, 1, 0, "br", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", review_r2.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u2605 ", review_r2.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", review_r2.author, " on ", review_r2.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r2.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", review_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ReviewsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReviewsComponent_div_0_div_5_Template, 22, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx_r0.reviews.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.reviews);
} }
class ReviewsComponent {
    constructor(route, _communicatorservice, breakpointObs) {
        this.route = route;
        this._communicatorservice = _communicatorservice;
        this.breakpointObs = breakpointObs;
        this.mobile = false;
        this.device = 'normal';
    }
    ngOnInit() {
        this.breakpointObs.observe('(max-width:768px)').subscribe(data => {
            if (data.matches) {
                // console.log('Something changed');
                this.mobile = true;
                this.device = 'mobile';
                // this.card_class_device = "card-class-"+this.device;
            }
            else {
                this.mobile = false;
                this.device = 'normal';
                // this.card_class_device = "card-class-"+this.device;
            }
        });
        // let id = this.route.snapshot.paramMap.get('id');
        // let category = this.route.snapshot.paramMap.get('category');
        this.route.paramMap.subscribe((params) => {
            let id = params.get('id');
            let category = params.get('category');
            this._communicatorservice.hit_backend(`reviews/${category}/${id}`).subscribe(data => {
                // console.log(data);
                this.reviews = data;
            });
        });
    }
}
ReviewsComponent.ɵfac = function ReviewsComponent_Factory(t) { return new (t || ReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_communicator_service__WEBPACK_IMPORTED_MODULE_2__["CommunicatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
ReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewsComponent, selectors: [["app-reviews"]], decls: 1, vars: 1, consts: [["class", "container desccontainer pl-4 pr-4", 4, "ngIf"], [1, "container", "desccontainer", "pl-4", "pr-4"], [1, "h1", "text-white"], [1, "h1", "text-muted"], ["class", "col-sm-12 mb-1 p-2 ", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "mb-1", "p-2"], [1, "card", "card-block", "card-1", "row", "flex-row", "pt-4", "pb-4", "pr-6", "pl-6"], [1, "col-sm-12", "col-md-2", "img-container"], ["alt", "Avatar", 1, "reviewer-pic", 2, "width", "100px", "height", "100px", "overflow", "hidden", 3, "src"], [1, "container", "col-sm-12", "col-md-10"], [1, "review-title"], [4, "ngIf"], [1, "review-rating", "font-weight-light"], [1, "as", "text-muted"], [1, "review-content", "line-clamp", "text-justify"], ["target", "_", 3, "href"]], template: function ReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReviewsComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.reviews == null ? null : ctx.reviews.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".h1[_ngcontent-%COMP%]{\n    \n    \n    \n}\n\n.pl-6[_ngcontent-%COMP%]{\n    padding-left: 3%;\n}\n\n.pr-6[_ngcontent-%COMP%]{\n    padding-right: 5%;\n}\n\n.desccontainer[_ngcontent-%COMP%]{\n    \n    \n    background-color: #060C34;\n    min-width: 72%;\n}\n\n.line-clamp[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n}\n\n.review-title[_ngcontent-%COMP%]{\n    font-weight: 500;\n    font-size: 1.6rem;\n}\n\n.card[_ngcontent-%COMP%]{\n    border-radius: 12px;\n}\n\n.img-container[_ngcontent-%COMP%]{\n    align-content: left;\n    \n}\n\nimg[_ngcontent-%COMP%]{\n    max-width:6rem;\n    border-radius: 50%;  \n}\n\n.review-rating[_ngcontent-%COMP%] {\n    background-color: #060D32;\n    border-radius: 20px;\n    padding-left: .4rem;\n    padding-right: .4rem;\n    padding-bottom: .2rem;\n    padding-top: .2rem;\n    font-weight: 400;\n    font-size: 1.3rem;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3cy9yZXZpZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBSUE7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yZXZpZXdzL3Jldmlld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oMXtcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDE0LjglOyAqL1xuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbiAgICAvKiBmb250LXNpemU6IDIuNXJlbTsgKi9cbn1cblxuLnBsLTZ7XG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcbn1cblxuLnByLTZ7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5kZXNjY29udGFpbmVye1xuICAgIC8qIHBhZGRpbmctbGVmdDogMTQuNXZ3OyAqL1xuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDE0LjV2dzsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwQzM0O1xuICAgIG1pbi13aWR0aDogNzIlO1xufVxuXG5cblxuLmxpbmUtY2xhbXAge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJldmlldy10aXRsZXtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4uaW1nLWNvbnRhaW5lcntcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xuICAgIFxufVxuXG5pbWd7XG4gICAgbWF4LXdpZHRoOjZyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAgXG59XG5cbi5yZXZpZXctcmF0aW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwRDMyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAuNHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjJyZW07XG4gICAgcGFkZGluZy10b3A6IC4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reviews',
                templateUrl: './reviews.component.html',
                styleUrls: ['./reviews.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _communicator_service__WEBPACK_IMPORTED_MODULE_2__["CommunicatorService"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "fpy/":
/*!************************************************!*\
  !*** ./src/app/card-car/card-car.component.ts ***!
  \************************************************/
/*! exports provided: CardCarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCarComponent", function() { return CardCarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _communicator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../communicator.service */ "Mafz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CardCarComponent_ng_container_6_1_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardCarComponent_ng_container_6_1_ng_template_0_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const j_r9 = ctx.index; const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSelect(ctx_r10.categories[i_r3 + j_r9], ctx_r10.links[i_r3 + j_r9]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r8 = ctx.$implicit;
    const j_r9 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.card_class_device);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.captions[i_r3 + j_r9]);
} }
function CardCarComponent_ng_container_6_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardCarComponent_ng_container_6_1_ng_template_0_div_2_Template, 8, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, ctx_r6.images, i_r3, i_r3 + 6));
} }
function CardCarComponent_ng_container_6_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardCarComponent_ng_container_6_1_ng_template_0_Template, 4, 5, "ng-template", 7);
} }
function CardCarComponent_ng_container_6_2_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardCarComponent_ng_container_6_2_ng_template_0_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const j_r18 = ctx.index; const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onSelect(ctx_r19.categories[i_r3 + j_r18], ctx_r19.links[i_r3 + j_r18]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r17 = ctx.$implicit;
    const j_r18 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r16.card_class_device);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.captions[i_r3 + j_r18]);
} }
function CardCarComponent_ng_container_6_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardCarComponent_ng_container_6_2_ng_template_0_div_2_Template, 8, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, ctx_r15.images, i_r3, i_r3 + 1));
} }
function CardCarComponent_ng_container_6_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardCarComponent_ng_container_6_2_ng_template_0_Template, 4, 5, "ng-template", 7);
} }
function CardCarComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardCarComponent_ng_container_6_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardCarComponent_ng_container_6_2_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 % 6 == 0 && !ctx_r1.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mobile);
} }
class CardCarComponent {
    constructor(_communicatorservice, _router, breakpointObs) {
        this._communicatorservice = _communicatorservice;
        this._router = _router;
        this.breakpointObs = breakpointObs;
        this.images = new Array();
        this.captions = new Array();
        this.links = new Array();
        this.categories = new Array();
        this.paused = true;
    }
    ngOnInit() {
        this.breakpointObs.observe('(max-width:768px)').subscribe(data => {
            if (data.matches) {
                // console.log('Something changed');
                this.mobile = true;
                this.device = 'mobile';
                this.card_class_device = "card-class-" + this.device;
            }
            else {
                this.mobile = false;
                this.device = 'normal';
                this.card_class_device = "card-class-" + this.device;
            }
        });
        this._communicatorservice.hit_backend(this.cardcar_name).subscribe(data => {
            this.pictures = JSON.stringify(data);
            this.pictures = JSON.parse(this.pictures);
            // var temparray = new Array();
            for (let i = 0; i < Object.keys(this.pictures).length; i++) {
                // console.log(this.pictures[String(i)]);
                this.images.push(this.pictures[String(i)]['image']);
                this.captions.push(this.pictures[String(i)]['name']);
                this.links.push(this.pictures[String(i)]['id']);
                this.categories.push(this.pictures[String(i)]['category']);
            }
            // this.images = temparray
        });
    }
    onSelect(category, id) {
        this._router.navigate(['/watch', category, id]);
    }
}
CardCarComponent.ɵfac = function CardCarComponent_Factory(t) { return new (t || CardCarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_communicator_service__WEBPACK_IMPORTED_MODULE_1__["CommunicatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
CardCarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardCarComponent, selectors: [["app-card-car"]], inputs: { cardcar_name: "cardcar_name" }, decls: 8, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [3, "interval", "showNavigationIndicators"], ["carousel", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["ngbSlide", "", "class", "ngslide"], [1, "container-fluid", "w-100"], ["class", "col-sm-12 col-md-2 grow", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-2", "grow"], [2, "cursor", "pointer", 3, "click"], [1, "card", 3, "ngClass"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "overlay"], [1, "carousel-caption"], [1, "container-fluid", 2, "width", "40vh"]], template: function CardCarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-carousel", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardCarComponent_ng_container_6_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0)("showNavigationIndicators", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]], styles: [".card[_ngcontent-%COMP%]{\n    border:none;\n    margin-top: 10%;\n    margin-bottom: 30%;\n    width: 95%;\n}\n\n.w-92[_ngcontent-%COMP%]{\n    width: 92%;\n}\n\nngb-carousel[_ngcontent-%COMP%]{\n    outline: none;\n    padding-left: 7.5%;\n    padding-right: 7.5%;\n}\n\n\n\n.grow[_ngcontent-%COMP%]{\n    transition: 100ms ease;\n}\n\n.grow[_ngcontent-%COMP%]:hover{\n    transform: scale(1.1);\n}\n\n.card-class-normal[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background:linear-gradient(to top, black 25%, rgba(0,0,0,0));;\n    opacity:0;\n    transition:opacity 200ms ease;\n    \n}\n\n.card-class-mobile[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background:linear-gradient(to top, black 25%, rgba(0,0,0,0));;\n    opacity:1;\n    transition:opacity 200ms ease;\n    \n}\n\n.card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{\n    opacity:1;\n}\n\n.carousel-caption[_ngcontent-%COMP%]{\n    text-align: left;\n    padding-bottom: 0px;\n    left: 10%;\n    \n}\n\n.carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-bottom: 0rem;\n    font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1jYXIvY2FyZC1jYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUdBOztHQUVHOztBQUdIO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLEtBQUs7SUFDTCxNQUFNO0lBQ04sVUFBVTtJQUNWLFdBQVc7SUFDWCw0REFBNEQ7SUFDNUQsU0FBUztJQUNULDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsS0FBSztJQUNMLE1BQU07SUFDTixVQUFVO0lBQ1YsV0FBVztJQUNYLDREQUE0RDtJQUM1RCxTQUFTO0lBQ1QsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jYXJkLWNhci9jYXJkLWNhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcbiAgICB3aWR0aDogOTUlO1xufVxuXG4udy05MntcbiAgICB3aWR0aDogOTIlO1xufVxuXG5uZ2ItY2Fyb3VzZWx7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDcuNSU7XG4gICAgcGFkZGluZy1yaWdodDogNy41JTtcbn1cblxuXG4vKiAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2e1xuICAgIHdpZHRoOjEwJVxufSAqL1xuXG5cbi5ncm93e1xuICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2U7XG59XG5cbi5ncm93OmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuXG4uY2FyZC1jbGFzcy1ub3JtYWwgLm92ZXJsYXl7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjayAyNSUsIHJnYmEoMCwwLDAsMCkpOztcbiAgICBvcGFjaXR5OjA7XG4gICAgdHJhbnNpdGlvbjpvcGFjaXR5IDIwMG1zIGVhc2U7XG4gICAgXG59XG5cbi5jYXJkLWNsYXNzLW1vYmlsZSAub3ZlcmxheXtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrIDI1JSwgcmdiYSgwLDAsMCwwKSk7O1xuICAgIG9wYWNpdHk6MTtcbiAgICB0cmFuc2l0aW9uOm9wYWNpdHkgMjAwbXMgZWFzZTtcbiAgICBcbn0gIFxuXG4uY2FyZDpob3ZlciAub3ZlcmxheXtcbiAgICBvcGFjaXR5OjE7XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9ue1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBsZWZ0OiAxMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiBwe1xuICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardCarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-car',
                templateUrl: './card-car.component.html',
                styleUrls: ['./card-car.component.css']
            }]
    }], function () { return [{ type: _communicator_service__WEBPACK_IMPORTED_MODULE_1__["CommunicatorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }]; }, { cardcar_name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "v6si":
/*!********************************************************!*\
  !*** ./src/app/castcard-car/castcard-car.component.ts ***!
  \********************************************************/
/*! exports provided: CastcardCarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastcardCarComponent", function() { return CastcardCarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _castmodal_castmodal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../castmodal/castmodal.component */ "Twl7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _communicator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../communicator.service */ "Mafz");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CastcardCarComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CastcardCarComponent_div_1_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.openVerticallyCentered(ctx_r4.cast[i_r3]["id"], ctx_r4.cast[i_r3]["image"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.cast[i_r3]["image"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cast[i_r3]["actor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.cast[i_r3]["character"], " ");
} }
function CastcardCarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CastcardCarComponent_div_1_div_4_Template, 12, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.scrolling_wrapper_device);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cast);
} }
class CastcardCarComponent {
    constructor(route, _communicatorservice, modalService, breakpointObs) {
        this.route = route;
        this._communicatorservice = _communicatorservice;
        this.modalService = modalService;
        this.breakpointObs = breakpointObs;
    }
    openVerticallyCentered(actor_id, actor_image) {
        const ref = this.modalService.open(_castmodal_castmodal_component__WEBPACK_IMPORTED_MODULE_1__["CastmodalComponent"], { centered: true, scrollable: true, size: 'lg' });
        ref.componentInstance.actor_id = actor_id;
        ref.componentInstance.actor_image = actor_image;
    }
    ngOnInit() {
        this.breakpointObs.observe('(max-width:768px)').subscribe(data => {
            if (data.matches) {
                // console.log('Something changed');
                this.mobile = true;
                this.device = 'mobile';
                this.scrolling_wrapper_device = "scrolling-wrapper-" + this.device;
            }
            else {
                this.mobile = false;
                this.device = 'normal';
                this.scrolling_wrapper_device = "scrolling-wrapper-" + this.device;
            }
        });
        // let id = this.route.snapshot.paramMap.get('id');
        // let category = this.route.snapshot.paramMap.get('category');
        this.route.paramMap.subscribe((params) => {
            let id = params.get('id');
            let category = params.get('category');
            this._communicatorservice.hit_backend(`cast/${category}/${id}`).subscribe(data => {
                // console.log(data);
                this.cast = data;
            });
        });
    }
}
CastcardCarComponent.ɵfac = function CastcardCarComponent_Factory(t) { return new (t || CastcardCarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_communicator_service__WEBPACK_IMPORTED_MODULE_3__["CommunicatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"])); };
CastcardCarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CastcardCarComponent, selectors: [["app-castcard-car"]], decls: 3, vars: 3, consts: [["class", "container desccontainer", 4, "ngIf"], [1, "container", "desccontainer"], [1, "pl-1", "pr-1"], [1, "scrolling-wrapper", "row", "flex-row", "flex-nowrap", 3, "ngClass"], ["class", "m-1 card-block", "style", "cursor:pointer", 4, "ngFor", "ngForOf"], [1, "m-1", "card-block", 2, "cursor", "pointer"], [1, "card", "h-100", 3, "click"], [1, "img-container"], ["alt", "Avatar", 1, "card-img-top", "actor-pic", 2, "width", "200px", "max-height", "300px", 3, "src"], [1, "card-body"]], template: function CastcardCarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CastcardCarComponent_div_1_Template, 6, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    } if (rf & 2) {
        var tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.cast)) == null ? null : tmp_0_0.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]], styles: [".scrolling-wrapper[_ngcontent-%COMP%]{\n    overflow-x: auto;\n    overflow-y:hidden;\n}\n\n.card-block[_ngcontent-%COMP%]{\n\t\n    \n\t\n    padding: .25rem;\n    height: 25rem;\n\n    min-width: 13rem;\n    \n   \n    \n}\n\n.card[_ngcontent-%COMP%]{\n\tbackground-color: white;\n    border-radius: 12px;\n    border: none;\n    position: relative;\n    \n\t\n\n}\n\n.card-body[_ngcontent-%COMP%] {\n    border-bottom-left-radius: 12px;\n    border-bottom-right-radius: 12px;\n    padding-top:0.25rem;\n    padding-left:0.25rem;\n    padding-right:0.25rem;\n    padding-bottom: 0.75rem;\n    width:100%;\n    text-align: center;\n    position: absolute;\n    bottom:0;\n    background-color: white;\n    \n\n}\n\n.desccontainer[_ngcontent-%COMP%]{\n    \n    \n    background-color: #060C34;\n    min-width: 72%;\n}\n\n.actor-pic[_ngcontent-%COMP%]{\n    \n    position: relative;\n    border-top-left-radius: 12px;\n    border-top-right-radius:12px;\n}\n\n.card-text[_ngcontent-%COMP%]{\n    text-align: center;\n    \n}\n\n.actor-name[_ngcontent-%COMP%]{\n \n    margin-bottom: 0px;\n    margin-top:5%;\n}\n\n.as[_ngcontent-%COMP%]{\n    padding:0px;\n    margin-bottom: 0px;\n    font-weight: bolder;\n}\n\nh1[_ngcontent-%COMP%]{\n    \n    color: white;\n    font-size: 2.5rem;\n}\n\n  .scrolling-wrapper-normal::-webkit-scrollbar {\n    width: 0.5em;\n    background-color: transparent;\n    height: 0.5rem;\n\n}\n\n  .scrolling-wrapper-mobile::-webkit-scrollbar {\n    width: 0.5em;\n    background-color: transparent;\n    height: 0.5rem;\n    display: none;\n    scrollbar-width: none; \n}\n\n  ::-webkit-scrollbar-track {\n    \n    box-shadow: inset 0 0 6px rgba(178, 178, 178, 0.5);\n    background-color: #060C34;\n    border-radius: 10px;\n    \n    \n}\n\n  ::-webkit-scrollbar-thumb {\n    background-color:#B2B2B2;\n    border-radius: 10px;\n    \n}\n\nspan[_ngcontent-%COMP%]{\n    padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGNhcmQtY2FyL2Nhc3RjYXJkLWNhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtDQUNDO2lCQUNnQjs7Q0FFaEI7Ozs7cURBSW9EO0lBQ2pELGVBQWU7SUFDZixhQUFhOztJQUViLGdCQUFnQjtJQUNoQixzQkFBc0I7OztBQUcxQjs7QUFFQTtDQUNDLHVCQUF1QjtJQUNwQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7Q0FDNUIsa0NBQWtDO0FBQ25DLHFGQUFxRjtBQUNyRjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUix1QkFBdUI7OztBQUczQjs7QUFHQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTs7MEJBRXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCOzRCQUN3QjtBQUM1Qjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxrREFBa0Q7SUFDbEQseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwrQkFBK0I7O0FBRW5DOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jYXN0Y2FyZC1jYXIvY2FzdGNhcmQtY2FyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsaW5nLXdyYXBwZXJ7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBvdmVyZmxvdy15OmhpZGRlbjtcbn1cblxuLmNhcmQtYmxvY2t7XG5cdC8qIGhlaWdodDogNDB2aDtcbiAgICB3aWR0aDoyMHZoOyAqL1xuICAgIFxuXHQvKiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXI6IG5vbmU7XG5cdC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0Ly8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAvLyB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAhaW1wb3J0YW50OyAqL1xuICAgIHBhZGRpbmc6IC4yNXJlbTtcbiAgICBoZWlnaHQ6IDI1cmVtO1xuXG4gICAgbWluLXdpZHRoOiAxM3JlbTtcbiAgICAvKiBtYXgtd2lkdGg6IDQwcmVtOyAqL1xuICAgXG4gICAgXG59XG5cbi5jYXJke1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogbWF4LWhlaWdodDoyNi41cmVtIDsgKi9cblx0LyogLy8gYmFja2dyb3VuZC1jb2xvcjogIzQxNThEMDsgKi9cbi8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0M2RlZywgIzQxNThEMCAwJSwgI0M4NTBDMCA0NiUsICNGRkNDNzAgMTAwJSk7ICovXG59XG5cbi5jYXJkLWJvZHkge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZy10b3A6MC4yNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6MC4yNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OjAuMjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gICAgd2lkdGg6MTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTowO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIFxuXG59XG5cblxuLmRlc2Njb250YWluZXJ7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAxNC41dnc7ICovXG4gICAgLyogcGFkZGluZy1yaWdodDogMTQuNXZ3OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjBDMzQ7XG4gICAgbWluLXdpZHRoOiA3MiU7XG59XG5cbi5hY3Rvci1waWN7XG4gICAgLyogLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEycHg7XG59XG4gIFxuLmNhcmQtdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07ICovXG59XG5cbi5hY3Rvci1uYW1le1xuIFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOjUlO1xufVxuXG5cbi5hc3tcbiAgICBwYWRkaW5nOjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuaDF7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAxNC44JTsgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbjo6bmctZGVlcCAuc2Nyb2xsaW5nLXdyYXBwZXItbm9ybWFsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDAuNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGhlaWdodDogMC41cmVtO1xuXG59XG5cbjo6bmctZGVlcCAuc2Nyb2xsaW5nLXdyYXBwZXItbW9iaWxlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDAuNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGhlaWdodDogMC41cmVtO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyBcbn1cbiAgIFxuOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpOyAqL1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgxNzgsIDE3OCwgMTc4LCAwLjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjBDMzQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjQjJCMkIyOyAqL1xuICAgIFxufVxuICAgXG46Om5nLWRlZXAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQjJCMkIyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGRhcmtncmV5OyAqL1xufVxuXG5zcGFue1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CastcardCarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-castcard-car',
                templateUrl: './castcard-car.component.html',
                styleUrls: ['./castcard-car.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _communicator_service__WEBPACK_IMPORTED_MODULE_3__["CommunicatorService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mylist/mylist.component */ "76GK");
/* harmony import */ var _watch_watch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./watch/watch.component */ "ZGjR");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'mylist', component: _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_3__["MylistComponent"] },
    // {path:'watch',component:WatchComponent}
    { path: 'watch/:category/:id', component: _watch_watch_component__WEBPACK_IMPORTED_MODULE_4__["WatchComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map