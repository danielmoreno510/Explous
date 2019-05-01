/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExplousTable = exports.ExplousSnackbar = exports.ExplousSlideToggle = exports.ExplousRadioButton = exports.ExplousPopup = exports.ExplousLoader = exports.ExplousInputRange = exports.ExplousInputFile = exports.ExplousInput = exports.ExplousGrid = exports.ExplousDatepicker = exports.ExplousCheckbox = exports.ExplousCard = exports.ExplousButton = undefined;

var _button = __webpack_require__(2);

var _button2 = _interopRequireDefault(_button);

var _card = __webpack_require__(3);

var _card2 = _interopRequireDefault(_card);

var _checkbox = __webpack_require__(4);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _carousel = __webpack_require__(5);

var _carousel2 = _interopRequireDefault(_carousel);

var _datepicker = __webpack_require__(6);

var _datepicker2 = _interopRequireDefault(_datepicker);

var _grid = __webpack_require__(7);

var _grid2 = _interopRequireDefault(_grid);

var _input = __webpack_require__(8);

var _input2 = _interopRequireDefault(_input);

var _inputFile = __webpack_require__(9);

var _inputFile2 = _interopRequireDefault(_inputFile);

var _inputRange = __webpack_require__(10);

var _inputRange2 = _interopRequireDefault(_inputRange);

var _loader = __webpack_require__(11);

var _loader2 = _interopRequireDefault(_loader);

var _popup = __webpack_require__(12);

var _popup2 = _interopRequireDefault(_popup);

var _radioButton = __webpack_require__(13);

var _radioButton2 = _interopRequireDefault(_radioButton);

var _slideToggle = __webpack_require__(14);

var _slideToggle2 = _interopRequireDefault(_slideToggle);

var _snackbar = __webpack_require__(15);

var _snackbar2 = _interopRequireDefault(_snackbar);

var _table = __webpack_require__(16);

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (window) {
    var _init = function _init(params) {
        _button2.default.init(params);
    };
    window.ExplousButton = {
        init: _init
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _card2.default.init(params);
    };
    window.ExplousCard = {
        init: _init
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _carousel2.default.init(params);
    };
    window.ExplousCarousel = {
        init: _init
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _checkbox2.default.init(params);
    };
    window.ExplousCheckbox = {
        init: _init
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _datepicker2.default.init(params);
    };
    window.ExplousDatepicker = {
        init: _init
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _grid2.default.init(params);
    };
    window.ExplousGrid = {
        init: _init
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _input2.default.init(params);
    };
    window.ExplousInput = {
        init: _init
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _inputFile2.default.init(params);
    };
    window.ExplousInputFile = {
        init: _init
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _inputRange2.default.init(params);
    };
    window.ExplousInputRange = {
        init: _init
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _loader2.default.init(params);
    };
    window.ExplousLoader = {
        init: _init
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _popup2.default.init(params);
    };
    var _open = function _open(id, time) {
        _popup2.default.open(id, time);
    };
    var _close = function _close(id, time) {
        _popup2.default.close(id, time);
    };
    window.ExplousPopup = {
        init: _init,
        open: _open,
        close: _close
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _radioButton2.default.init(params);
    };
    window.ExplousRadioButton = {
        init: _init
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _slideToggle2.default.init(params);
    };
    window.ExplousSlideToggle = {
        init: _init
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _snackbar2.default.init(params);
    };
    var _show = function _show(id, time) {
        _snackbar2.default.show(id, time);
    };
    window.ExplousSnackbar = {
        init: _init,
        show: _show
    };
})(window);

(function (window) {
    var _init = function _init(params) {
        _table2.default.init(params);
    };
    window.ExplousTable = {
        init: _init
    };
})(window);

exports.ExplousButton = _button2.default;
exports.ExplousCard = _card2.default;
exports.ExplousCheckbox = _checkbox2.default;
exports.ExplousDatepicker = _datepicker2.default;
exports.ExplousGrid = _grid2.default;
exports.ExplousInput = _input2.default;
exports.ExplousInputFile = _inputFile2.default;
exports.ExplousInputRange = _inputRange2.default;
exports.ExplousLoader = _loader2.default;
exports.ExplousPopup = _popup2.default;
exports.ExplousRadioButton = _radioButton2.default;
exports.ExplousSlideToggle = _slideToggle2.default;
exports.ExplousSnackbar = _snackbar2.default;
exports.ExplousTable = _table2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Button = {};

Button.init = function (_ref) {
    var container = _ref.container,
        color = _ref.color,
        background = _ref.background,
        border = _ref.border,
        changeColor = _ref.changeColor,
        text = _ref.text;

    if (container && color && background && border && changeColor && text) {
        var css = '#' + container + ':active{ background-color: ' + changeColor + ' !important;border:2px solid ' + changeColor + ' !important}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        var button = document.getElementById(container);
        button.style.background = background;
        button.style.textDecoration = "none";
        button.style.borderRadius = "4px";
        button.style.color = color;
        button.style.padding = "8px";
        button.style.fontSize = "16px";
        button.style.cursor = "pointer";
        button.style.width = "max-content";
        button.style.border = "2px solid " + border;
        button.style.outline = "none";
        var textB = document.createTextNode(text);
        button.appendChild(textB);
    } else {
        var errorExplous = "Explous Button - Error when assigning value to some variable: ";
        if (!container) {
            console.log(errorExplous + "container");
        }
        if (!color) {
            console.log(errorExplous + "color");
        }
        if (!background) {
            console.log(errorExplous + "background");
        }
        if (!border) {
            console.log(errorExplous + "border");
        }
        if (!changeColor) {
            console.log(errorExplous + "changeColor");
        }
        if (!text) {
            console.log(errorExplous + "text");
        }
    }
};

exports.default = Button;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Card = {};

Card.init = function (_ref) {
    var container = _ref.container,
        content = _ref.content,
        drop = _ref.drop,
        dropContent = _ref.dropContent,
        colorIcon = _ref.colorIcon,
        border = _ref.border;

    if (container && content && drop && dropContent && colorIcon && border) {
        var dropD = function dropD(content, drop, dropContent) {
            document.getElementById(content + "_arrow").style.webkitTransform = "rotate(-135deg)";
            document.getElementById(content + "_arrow").style.transform = "rotate(-135deg)";
            document.getElementById(drop).style.height = document.getElementById(dropContent).offsetHeight + "px";
            document.getElementById(drop).style.borderTop = border;
            document.getElementById(content).onclick = function () {
                dropU(content, drop, dropContent);
            };
            setTimeout(function () {
                document.getElementById(drop).style.height = "auto";
            }, 200);
        };

        var dropU = function dropU(content, drop, dropContent) {
            document.getElementById(content + "_arrow").style.webkitTransform = "rotate(45deg)";
            document.getElementById(content + "_arrow").style.transform = "rotate(45deg)";
            document.getElementById(drop).style.height = document.getElementById(dropContent).offsetHeight + "px";
            setTimeout(function () {
                document.getElementById(drop).style.height = "0px";
            }, 50);
            document.getElementById(drop).style.borderTop = "0px solid #cccccc";
            document.getElementById(content).onclick = function () {
                dropD(content, drop, dropContent);
            };
        };

        var css = '.arrow{border: solid ' + colorIcon + ';border-width: 0 2px 2px 0;display: inline-block;padding: 4px;float: right;margin-right: 0px;margin-top: -10px;transition: all 0.1s ease-in-out 0s;}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        var card = document.getElementById(container);
        var cardContent = document.getElementById(content);
        card.style.border = border;
        cardContent.style.cursor = "pointer";
        var cardContentArrow = document.createElement("div");
        cardContent.appendChild(cardContentArrow);
        cardContentArrow.setAttribute("id", content + "_arrow");
        cardContentArrow.setAttribute("class", "arrow");
        cardContentArrow.style.webkitTransform = "rotate(45deg)";
        cardContentArrow.style.transform = "rotate(45deg)";
        cardContent.onclick = function () {
            dropD(content, drop, dropContent);
        };
        var cardDrop = document.getElementById(drop);
        cardDrop.style.borderTop = "0px solid #cccccc";
        cardDrop.style.height = "0px";
        cardDrop.style.transition = "0.2s ease-in-out";
        cardDrop.style.overflow = "hidden";
        cardDrop.style.position = "relative";
    } else {
        var errorExplous = "Explous Card - Error when assigning value to some variable: ";
        if (!container) {
            console.log(errorExplous + "container");
        }
        if (!content) {
            console.log(errorExplous + "content");
        }
        if (!drop) {
            console.log(errorExplous + "drop");
        }
        if (!dropContent) {
            console.log(errorExplous + "dropContent");
        }
        if (!colorIcon) {
            console.log(errorExplous + "colorIcon");
        }
        if (!border) {
            console.log(errorExplous + "border");
        }
    }
};

exports.default = Card;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Checkbox = {};

Checkbox.init = function (_ref) {
    var container = _ref.container,
        checkbox = _ref.checkbox,
        color = _ref.color,
        _ref$required = _ref.required,
        required = _ref$required === undefined ? false : _ref$required,
        text = _ref.text,
        textErr = _ref.textErr,
        colorText = _ref.colorText;

    if (container && checkbox && color && text && colorText) {
        var change = function change(id) {
            if (document.getElementById(id).checked) {
                document.getElementById(id + "_span").style.backgroundColor = color;
                document.getElementById(id + "_span").style.border = "1px solid " + color;
                if (required) {
                    document.getElementById(checkbox + "_err").style.marginTop = "-6px";
                    document.getElementById(checkbox + "_err").style.opacity = "0";
                    document.getElementById(id + "_span").style.border = "1px solid " + color;
                    document.getElementById(id + "_text").style.color = colorText;
                }
            } else {
                document.getElementById(id + "_span").style.backgroundColor = "#ffffff";
                document.getElementById(id + "_span").style.border = "1px solid " + colorText;
                if (required) {
                    document.getElementById(id + "_span").style.border = "1px solid #f44336";
                    document.getElementById(checkbox + "_err").style.marginTop = "0px";
                    document.getElementById(checkbox + "_err").style.opacity = "1";
                    document.getElementById(id + "_text").style.color = "#f44336";
                }
            }
        };

        var onclick = function onclick(id) {
            var stringLenght = String(id).length;
            var newId = id.substring(0, stringLenght - 5);
            document.getElementById(newId).checked = !document.getElementById(newId).checked;
            change(newId);
        };

        var css = '#' + container + '{position: relative;padding-left: 30px;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;color: ' + colorText + ';line-height: 20px;display: inline-block;height: 22px;} #' + container + ' input{position: absolute;opacity: 0;display: none;} #' + checkbox + '_span{position: absolute;top: -1px;left: 0;height: 20px;width: 20px;background-color: #ffffff;border: 1px solid ' + colorText + ';transition: 0.3s;} #' + checkbox + '_span:after {content: "";position: absolute;width: 0px;height: 0px;margin-top: 9px;transform: rotate(45deg);left: 9px;transition: 0.3s;} #' + container + ' input:checked ~ #' + checkbox + '_span:after{width: 4px;height: 9px;margin-top: 3px;transform: rotate(410deg);left: 8px;transition: 0.3s;border-width: 0px 2px 2px 0;} #' + container + ' #' + checkbox + '_span:after{border: solid white;border-width: 0 0px 0px 0;}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        var textCheckbox = document.createElement("div");
        document.getElementById(container).appendChild(textCheckbox);
        var textSpan = document.createTextNode(text);
        textCheckbox.setAttribute("id", checkbox + "_text");
        textCheckbox.appendChild(textSpan);
        document.getElementById(checkbox + "_text").onclick = function () {
            onclick(this.id);
        };
        var span = document.createElement("span");
        document.getElementById(container).appendChild(span);
        span.setAttribute("id", checkbox + "_span");
        document.getElementById(checkbox + "_span").onclick = function () {
            onclick(this.id);
        };
        if (required) {
            var errInput = document.createElement("div");
            errInput.style.position = "absolute";
            errInput.style.opacity = "0";
            errInput.style.color = "#f44336";
            errInput.style.fontSize = "12px";
            errInput.style.marginTop = "0px";
            errInput.style.transition = "all 0.10s ease 0.10s";
            errInput.style.marginLeft = "-30px";
            errInput.style.width = "max-content";
            errInput.style.marginTop = "-6px";
            errInput.setAttribute("id", checkbox + "_err");
            document.getElementById(container).appendChild(errInput);
            text = document.createTextNode(textErr);
            errInput.appendChild(text);
        }
    } else {
        var errorExplous = "Explous Checkbox - Error when assigning value to some variable: ";
        if (!container) {
            console.log(errorExplous + "container");
        }
        if (!checkbox) {
            console.log(errorExplous + "checkbox");
        }
        if (!color) {
            console.log(errorExplous + "color");
        }
        if (!text) {
            console.log(errorExplous + "text");
        }
        if (!colorText) {
            console.log(errorExplous + "colorText");
        }
    }
};

exports.default = Checkbox;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Carousel = {};

Carousel.init = function (_ref) {
    var container = _ref.container,
        size = _ref.size,
        data = _ref.data,
        arrow = _ref.arrow,
        color = _ref.color,
        background = _ref.background,
        time = _ref.time,
        full = _ref.full;

    var activeCarousel = true;
    if (container && size && data && color && time && background) {
        var css;
        var style;
        var img1;
        var image1;
        var index;
        var img2;
        var image2;
        var cContainer;
        var x;

        (function () {
            var carouselMove = function carouselMove(move) {
                if (activeCarousel) {
                    activeCarousel = false;
                    if (move == "left") {
                        var transition = cContainer.offsetWidth;
                        for (var x = data.length; x >= 0; x--) {
                            if (x > 0) {
                                document.getElementById(container + "_point_" + (x - 1)).style.background = background;
                            }
                            if (data[x] == image1) {
                                img2 = new Image();
                                img2.src = data[x];
                                image2 = data[x];
                                if (x - 1 == -1) {
                                    img1 = new Image();
                                    img1.src = data[data.length - 1];
                                    image1 = data[data.length - 1];
                                    index = data.length - 1;
                                    document.getElementById(container + "_point_" + (data.length - 1)).style.background = color;
                                } else {
                                    img1 = new Image();
                                    img1.src = data[x - 1];
                                    image1 = data[x - 1];
                                    index = x - 1;
                                    document.getElementById(container + "_point_" + (x - 1)).style.background = color;
                                }
                                x = -1;
                            }
                        }
                        document.getElementById(container + "_div1").innerHTML = "";
                        document.getElementById(container + "_div2").innerHTML = "";
                        document.getElementById(container + "_div1").appendChild(img1);
                        document.getElementById(container + "_div2").appendChild(img2);
                        img1.setAttribute("class", "carousel_images");
                        img2.setAttribute("class", "carousel_images");
                        document.getElementById(container + "_div1").classList.add("carousel_div_inactive");
                        document.getElementById(container + "_div2").classList.add("carousel_div_inactive");
                        document.getElementById(container + "_div1").style.transform = "translate3d(-" + transition + "px,0,0)";
                        document.getElementById(container + "_div2").style.transform = "translate3d(-" + transition + "px,0,0)";
                        setTimeout(function () {
                            document.getElementById(container + "_div1").classList.remove("carousel_div_inactive");
                            document.getElementById(container + "_div2").classList.remove("carousel_div_inactive");
                            document.getElementById(container + "_div1").style.transform = "translate3d(0,0,0)";
                            document.getElementById(container + "_div2").style.transform = "translate3d(0,0,0)";
                            setTimeout(function () {
                                activeCarousel = true;
                            }, 400);
                        }, 50);
                    } else {
                        var transition = cContainer.offsetWidth;
                        document.getElementById(container + "_div1").style.transform = "translate3d(-" + transition + "px,0,0)";
                        document.getElementById(container + "_div2").style.transform = "translate3d(-" + transition + "px,0,0)";
                        setTimeout(function () {
                            for (var x = 0; x < data.length; x++) {
                                document.getElementById(container + "_point_" + x).style.background = background;
                                if (data[x] == image2) {
                                    if (x == 0) {
                                        document.getElementById(container + "_point_" + (data.length - 1)).style.background = background;
                                    }
                                    document.getElementById(container + "_point_" + x).style.background = color;
                                    img1 = new Image();
                                    img1.src = data[x];
                                    image1 = data[x];
                                    index = x;
                                    if (x + 1 == data.length) {
                                        img2 = new Image();
                                        img2.src = data[0];
                                        image2 = data[0];
                                    } else {
                                        img2 = new Image();
                                        img2.src = data[x + 1];
                                        image2 = data[x + 1];
                                    }
                                    x = data.length;
                                }
                            }
                            document.getElementById(container + "_div1").innerHTML = "";
                            document.getElementById(container + "_div2").innerHTML = "";
                            document.getElementById(container + "_div1").appendChild(img1);
                            document.getElementById(container + "_div2").appendChild(img2);
                            img1.setAttribute("class", "carousel_images");
                            img2.setAttribute("class", "carousel_images");
                            document.getElementById(container + "_div1").classList.add("carousel_div_inactive");
                            document.getElementById(container + "_div2").classList.add("carousel_div_inactive");
                            document.getElementById(container + "_div1").style.transform = "translate3d(0,0,0)";
                            document.getElementById(container + "_div2").style.transform = "translate3d(0,0,0)";
                            setTimeout(function () {
                                document.getElementById(container + "_div1").classList.remove("carousel_div_inactive");
                                document.getElementById(container + "_div2").classList.remove("carousel_div_inactive");
                                activeCarousel = true;
                            }, 50);
                        }, 400);
                    }
                }
            };

            var carouselPoint = function carouselPoint(image) {
                image = image.id.replace(container + "_point_", "");
                if (image > index) {
                    img2.src = data[image];
                    image2 = data[image];
                    document.getElementById(container + "_div2").innerHTML = "";
                    document.getElementById(container + "_div2").appendChild(img2);
                    setTimeout(function () {
                        carouselMove("right");
                    }, 100);
                }
                if (image < index) {
                    activeCarousel = false;
                    for (var x in data) {
                        document.getElementById(container + "_point_" + x).style.background = background;
                    }
                    document.getElementById(container + "_point_" + image).style.background = color;
                    var transition = cContainer.offsetWidth;
                    image = Number(image);
                    img1.src = data[image];
                    image1 = data[image];
                    img2.src = data[index];
                    image2 = data[index];
                    document.getElementById(container + "_div2").innerHTML = "";
                    document.getElementById(container + "_div2").appendChild(img1);
                    document.getElementById(container + "_div1").innerHTML = "";
                    document.getElementById(container + "_div2").innerHTML = "";
                    document.getElementById(container + "_div1").appendChild(img1);
                    document.getElementById(container + "_div2").appendChild(img2);
                    img1.setAttribute("class", "carousel_images");
                    img2.setAttribute("class", "carousel_images");
                    document.getElementById(container + "_div1").classList.add("carousel_div_inactive");
                    document.getElementById(container + "_div2").classList.add("carousel_div_inactive");
                    document.getElementById(container + "_div1").style.transform = "translate3d(-" + transition + "px,0,0)";
                    document.getElementById(container + "_div2").style.transform = "translate3d(-" + transition + "px,0,0)";
                    setTimeout(function () {
                        document.getElementById(container + "_div1").classList.remove("carousel_div_inactive");
                        document.getElementById(container + "_div2").classList.remove("carousel_div_inactive");
                        document.getElementById(container + "_div1").style.transform = "translate3d(0,0,0)";
                        document.getElementById(container + "_div2").style.transform = "translate3d(0,0,0)";
                        setTimeout(function () {
                            img2.src = data[image + 1];
                            image2 = data[image + 1];
                            activeCarousel = true;
                        }, 50);
                    }, 50);
                }
            };

            css = '.carousel_point{transition:background 0.2s;margin: 6px;width: 21px;height: 21px;border-radius: 11px;background: ' + background + ';cursor: pointer;border: 1px solid ' + color + ';}.carousel_point:active{opacity:0.8}.carousel_points{display: flex;position: absolute;z-index: 1;}.carousel_arrow{cursor:pointer;position: absolute;font-size: 29px;z-index: 1;background: ' + background + ';color:' + color + ';padding: 9px;padding-left: 18px;padding-right: 18px;padding-bottom: 11px;border-radius: 26px;}.carousel_arrow:active{opacity:0.8}.carousel_div_inactive{-webkit-transition: transform 0s !important;transition: transform 0s !important;}.carousel_div{-webkit-transition: transform 0.5s;transition: transform 0.5s;}.carousel_images{width:100%}';
            style = document.createElement('style');

            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            document.getElementsByTagName('head')[0].appendChild(style);

            img1 = new Image();

            img1.src = data[0];
            image1 = data[0];
            index = 0;
            img2 = new Image();

            img2.src = data[1];
            image2 = data[1];
            cContainer = document.getElementById(container);

            cContainer.style.display = "-webkit-box";
            cContainer.style.borderRadius = "6px";
            cContainer.style.overflow = "hidden";
            var points = document.createElement("div");
            cContainer.appendChild(points);
            points.setAttribute("id", container + "_points");
            points.setAttribute("class", "carousel_points");
            for (x in data) {
                var point = document.createElement("div");
                points.appendChild(point);
                point.setAttribute("id", container + "_point_" + x);
                point.setAttribute("class", "carousel_point");
                point.onclick = function () {
                    carouselPoint(this);
                };
            }
            document.getElementById(container + "_point_0").style.background = color;
            var left = document.createElement("div");
            cContainer.appendChild(left);
            left.setAttribute("id", container + "_left");
            left.setAttribute("class", "carousel_arrow");
            left.innerHTML = "<";
            left.onclick = function () {
                carouselMove("left");
            };
            if (!arrow) {
                left.style.display = "none";
            }
            var right = document.createElement("div");
            cContainer.appendChild(right);
            right.setAttribute("id", container + "_right");
            right.setAttribute("class", "carousel_arrow");
            right.innerHTML = ">";
            right.onclick = function () {
                carouselMove("right");
            };
            if (!arrow) {
                right.style.display = "none";
            }
            var div1 = document.createElement("div");
            cContainer.appendChild(div1);
            div1.setAttribute("id", container + "_div1");
            div1.setAttribute("class", "carousel_div");
            div1.appendChild(img1);
            img1.setAttribute("class", "carousel_images");
            img1.setAttribute("id", container + "_image_1");
            var div2 = document.createElement("div");
            cContainer.appendChild(div2);
            div2.setAttribute("id", container + "_div2");
            div2.setAttribute("class", "carousel_div");
            div2.appendChild(img2);
            img2.setAttribute("class", "carousel_images");
            img2.setAttribute("id", container + "_image_2");
            div1.style.width = "100%";
            div2.style.width = "100%";
            if (full) {
                div1.style.display = "flex";
                div2.style.display = "flex";
            }
            setTimeout(function () {
                calcCarousel(cContainer);
            }, 100);
            carouselActive();
        })();
    } else {
        var errorExplous = "Explous Carousel - Error when assigning value to some variable: ";
        if (!container) {
            console.log(errorExplous + "container");
        }
        if (!size) {
            console.log(errorExplous + "size");
        }
        if (!data) {
            console.log(errorExplous + "data");
        }
        if (!color) {
            console.log(errorExplous + "color");
        }
        if (!time) {
            console.log(errorExplous + "time");
        }
        if (!background) {
            console.log(errorExplous + "background");
        }
    }
    window.addEventListener("resize", onResizeCarousel);
    function onResizeCarousel() {
        calcCarousel(cContainer);
    }
    function calcCarousel(cContainer) {
        cContainer.style.width = size;
        cContainer.style.height = cContainer.offsetWidth / 2 + "px";
        document.getElementById(container + "_left").style.marginTop = cContainer.offsetWidth / 2 / 2 - 40 + "px";
        document.getElementById(container + "_left").style.marginLeft = "6px";
        document.getElementById(container + "_right").style.marginTop = cContainer.offsetWidth / 2 / 2 - 40 + "px";
        document.getElementById(container + "_right").style.marginLeft = cContainer.offsetWidth - 59 + "px";
        document.getElementById(container + "_points").style.marginTop = cContainer.offsetWidth / 2 - 40 + "px";
        document.getElementById(container + "_points").style.marginLeft = cContainer.offsetHeight - document.getElementById(container + "_points").offsetWidth / 2 + "px";
    }
    function carouselActive() {
        setTimeout(function () {
            if (activeCarousel) {
                var transition = cContainer.offsetWidth;
                document.getElementById(container + "_div1").style.transform = "translate3d(-" + transition + "px,0,0)";
                document.getElementById(container + "_div2").style.transform = "translate3d(-" + transition + "px,0,0)";
                setTimeout(function () {
                    if (activeCarousel) {
                        for (var x = 0; x < data.length; x++) {
                            document.getElementById(container + "_point_" + x).style.background = background;
                            if (data[x] == image2) {
                                if (x == 0) {
                                    document.getElementById(container + "_point_" + (data.length - 1)).style.background = background;
                                }
                                document.getElementById(container + "_point_" + x).style.background = color;
                                img1 = new Image();
                                img1.src = data[x];
                                image1 = data[x];
                                index = x;
                                if (x + 1 == data.length) {
                                    img2 = new Image();
                                    img2.src = data[0];
                                    image2 = data[0];
                                } else {
                                    img2 = new Image();
                                    img2.src = data[x + 1];
                                    image2 = data[x + 1];
                                }
                                x = data.length;
                            }
                        }
                        document.getElementById(container + "_div1").innerHTML = "";
                        document.getElementById(container + "_div2").innerHTML = "";
                        document.getElementById(container + "_div1").appendChild(img1);
                        document.getElementById(container + "_div2").appendChild(img2);
                        img1.setAttribute("class", "carousel_images");
                        img2.setAttribute("class", "carousel_images");
                        document.getElementById(container + "_div1").classList.add("carousel_div_inactive");
                        document.getElementById(container + "_div2").classList.add("carousel_div_inactive");
                        document.getElementById(container + "_div1").style.transform = "translate3d(0,0,0)";
                        document.getElementById(container + "_div2").style.transform = "translate3d(0,0,0)";
                        setTimeout(function () {
                            document.getElementById(container + "_div1").classList.remove("carousel_div_inactive");
                            document.getElementById(container + "_div2").classList.remove("carousel_div_inactive");
                            carouselActive();
                        }, 50);
                    } else {
                        carouselActive();
                    }
                }, 400);
            } else {
                carouselActive();
            }
        }, time);
    }
};

exports.default = Carousel;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Datepicker = {};

Datepicker.init = function (_ref) {
    var container = _ref.container,
        type = _ref.type,
        color = _ref.color,
        month = _ref.month,
        deleteTo = _ref.deleteTo,
        closeClic = _ref.closeClic,
        typeInput = _ref.typeInput,
        title1 = _ref.title1,
        title2 = _ref.title2,
        datepickerColor = _ref.datepickerColor;

    if (container && type && color && month && typeInput && title1 && datepickerColor) {
        var calendarRange;
        var dateInit;
        var actualInput;
        var css;
        var style;
        var datepicker;
        var icon;
        var icon;
        var i;
        var calendarSelected;
        var i;
        var clicDay;
        var d;
        var monthInit;
        var i;
        var left;
        var right;
        var solution;
        var body;

        (function () {
            var focusInput = function focusInput(id) {
                document.getElementById(container + "_calendar").style.visibility = "visible";
                document.getElementById(container + "_calendar").style.opacity = "1";
                document.getElementById(container + "_calendar").style.height = "auto";
                actualInput = "from";
                if (typeInput == "traditional") {
                    document.getElementById(container + "_input1").style.border = "2px solid " + color;
                    document.getElementById(container + "_input1").style.height = "20px";
                    if (type == "range") {
                        document.getElementById(container + "_input2").style.border = "1px solid " + datepickerColor;
                        document.getElementById(container + "_input2").style.height = "22px";
                    }
                }
                if (typeInput == "material") {
                    document.getElementById(container + "_title-1").style.marginTop = "-16px";
                    document.getElementById(container + "_title-1").style.fontSize = "12px";
                    document.getElementById(container + "_title-1").style.color = color;
                    document.getElementById(container + "_title-2").style.color = datepickerColor;
                    if (document.getElementById(container + "_input2").value == "") {
                        document.getElementById(container + "_title-2").style.marginTop = "0px";
                        document.getElementById(container + "_title-2").style.fontSize = "18px";
                    }
                    document.getElementById(container + "_input1").style.borderBottom = "2px solid " + color;
                    if (type == "range") {
                        document.getElementById(container + "_input2").style.borderBottom = "1px solid " + datepickerColor;
                    }
                }

                if (document.documentElement.offsetWidth < 768) {
                    if (document.getElementById("calendar-cover")) {
                        document.getElementById("calendar-cover").style.display = "block";
                    }
                } else {
                    document.getElementById("calendar-cover").style.display = "none";
                }
                changeClassTd(container, "from");
            };

            var focusInputTo = function focusInputTo(id) {
                actualInput = "to";
                document.getElementById(container + "_calendar").style.visibility = "visible";
                document.getElementById(container + "_calendar").style.opacity = "1";
                document.getElementById(container + "_calendar").style.height = "auto";
                if (typeInput == "traditional") {
                    document.getElementById(container + "_input2").style.border = "2px solid " + color;
                    document.getElementById(container + "_input2").style.height = "20px";
                    document.getElementById(container + "_input1").style.border = "1px solid " + datepickerColor;
                    document.getElementById(container + "_input1").style.height = "22px";
                }
                if (typeInput == "material") {
                    document.getElementById(container + "_title-2").style.marginTop = "-16px";
                    document.getElementById(container + "_title-2").style.fontSize = "12px";
                    document.getElementById(container + "_title-2").style.color = color;
                    document.getElementById(container + "_title-1").style.color = datepickerColor;
                    if (document.getElementById(container + "_input1").value == "") {
                        document.getElementById(container + "_title-1").style.marginTop = "0px";
                        document.getElementById(container + "_title-1").style.fontSize = "18px";
                    }
                    document.getElementById(container + "_input1").style.borderBottom = "1px solid " + datepickerColor;
                    document.getElementById(container + "_input2").style.borderBottom = "2px solid " + color;
                }
                if (document.documentElement.offsetWidth < 768) {
                    if (document.getElementById("calendar-cover")) {
                        document.getElementById("calendar-cover").style.display = "block";
                    }
                } else {
                    document.getElementById("calendar-cover").style.display = "none";
                }
                changeClassTd(container, "to");
            };

            var generateCalendar = function generateCalendar(d, newGetId, calendar) {
                var days = howManyDays(d);
                var shift = getDayFirstDate(d);
                clear(newGetId, calendar);

                for (var i = 0; i < days; i++) {
                    var newDay = validateNumber(i + 1);
                    var newMonth = validateNumber(d.getMonth() + 1);
                    var posi_row = Math.floor((i + shift) / 7);
                    var posi_col = Math.floor((i + shift) % 7);

                    var calendars = document.getElementById(newGetId + "_calendar_datepicker_" + calendar);
                    var class1 = calendars.querySelectorAll(".r" + posi_row);
                    for (var x = 0; x < class1.length; x++) {
                        class1[x].querySelectorAll('.col' + posi_col)[0].innerHTML = i + 1;
                        class1[x].querySelectorAll('.col' + posi_col)[0].classList.add("calendar-number-day-hover");
                        class1[x].querySelectorAll('.col' + posi_col)[0].setAttribute('id', newDay + '-' + newMonth + '-' + d.getFullYear());
                    }
                }
                selectDate(calendarSelected, newGetId);
            };

            var clear = function clear(newGetId, calendar) {
                var calendars = document.getElementById(newGetId + "_calendar_datepicker_" + calendar).querySelectorAll("tbody");
                var class1 = calendars[0].querySelectorAll("td");
                for (var x = 0; x < class1.length; x++) {
                    class1[x].innerHTML = "";
                    class1[x].classList.remove("calendar-number-day-hover");
                    class1[x].setAttribute('id', "");
                }
            };

            var getDayFirstDate = function getDayFirstDate(d) {
                var tempd = new Date();
                tempd.setFullYear(d.getFullYear());
                tempd.setMonth(d.getMonth());
                tempd.setDate(1);
                tempd.setHours(0);
                tempd.setMinutes(0);
                tempd.setSeconds(0);
                return tempd.getDay();
            };

            var howManyDays = function howManyDays(d) {
                var m = d.getMonth() + 1;
                if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) return 31;
                if (m == 2) {
                    if (isLeapYear(d.getFullYear())) {
                        return 29;
                    } else {
                        return 28;
                    }
                }
                return 30;
            };

            var isLeapYear = function isLeapYear(year) {
                if (year % 400 == 0) {
                    return true;
                } else if (year % 100 == 0) {
                    return false;
                } else if (year % 4 == 0) {
                    return true;
                } else {
                    return false;
                }
            };

            var updateDate = function updateDate(d, sign) {
                var m = d.getMonth();
                if (sign) {
                    if (m + 1 > 11) {
                        d.setFullYear(d.getFullYear() + 1);
                        d.setMonth(0);
                    } else {
                        d.setMonth(m + 1);
                    }
                } else {
                    if (m - 1 < 0) {
                        d.setFullYear(d.getFullYear() - 1);
                        d.setMonth(11);
                    } else {
                        d.setMonth(m - 1);
                    }
                }
            };

            var months = function months(month) {
                switch (month) {
                    case 0:
                        month = "JANUARY";
                        break;
                    case 1:
                        month = "FEBRUARY";
                        break;
                    case 2:
                        month = "MARCH";
                        break;
                    case 3:
                        month = "APRIL";
                        break;
                    case 4:
                        month = "MAY";
                        break;
                    case 5:
                        month = "JUNE";
                        break;
                    case 6:
                        month = "JULY";
                        break;
                    case 7:
                        month = "AUGUST";
                        break;
                    case 8:
                        month = "SEPTEMBER";
                        break;
                    case 9:
                        month = "OCTOBER";
                        break;
                    case 10:
                        month = "NOVEMBER";
                        break;
                    case 11:
                        month = "DECEMBER";
                }
                return month;
            };

            var validateNumber = function validateNumber(month) {
                if (month < 10) {
                    month = "0" + month;
                }
                return month;
            };

            var changeDefectRangeFrom = function changeDefectRangeFrom(newGetId) {
                if (document.getElementById(newGetId + "_input2").getAttribute("name") != null) {
                    var dayNew = document.getElementById(newGetId + "_input2").getAttribute("name").substring(0, 2);
                    var monthNew = document.getElementById(newGetId + "_input2").getAttribute("name").substring(3, 5);
                    var yearNew = document.getElementById(newGetId + "_input2").getAttribute("name").substring(6, 10);
                    d = new Date(monthNew + "/" + dayNew + "/" + yearNew);
                } else {
                    d = new Date();
                }
                if (document.getElementById(newGetId + "_input1").getAttribute("name") != null) {
                    var dayNew = document.getElementById(newGetId + "_input1").getAttribute("name").substring(0, 2);
                    var monthNew = document.getElementById(newGetId + "_input1").getAttribute("name").substring(3, 5);
                    var yearNew = document.getElementById(newGetId + "_input1").getAttribute("name").substring(6, 10);
                    d = new Date(monthNew + "/" + dayNew + "/" + yearNew);
                }
                var monthInit = false;
                for (var i = 0; i < month; i++) {
                    d.setMonth(d.getMonth() + i);
                    if (d.getMonth() == 0) {
                        monthInit = true;
                    }
                    if (i == 2 && d.getMonth() == 2 && monthInit) {
                        d.setMonth(d.getMonth() - 1);
                    }
                    document.getElementById(container + '_calendar_month_number_' + i).innerHTML = d.getMonth() + 1;
                    document.getElementById(container + '_calendar_month_name_' + i).innerHTML = months(d.getMonth());
                    document.getElementById(container + '_calendar_month_year_' + i).innerHTML = d.getFullYear();
                    generateCalendarRange(d, newGetId, i, "from");
                }
            };

            var changeDefectRangeTo = function changeDefectRangeTo(newGetId) {
                if (document.getElementById(newGetId + "_input1").getAttribute("name") != null) {
                    var dayNew = document.getElementById(newGetId + "_input1").getAttribute("name").substring(0, 2);
                    var monthNew = document.getElementById(newGetId + "_input1").getAttribute("name").substring(3, 5);
                    var yearNew = document.getElementById(newGetId + "_input1").getAttribute("name").substring(6, 10);
                    d = new Date(monthNew + "/" + dayNew + "/" + yearNew);
                } else {
                    d = new Date();
                }
                if (document.getElementById(newGetId + "_input2").getAttribute("name") != null) {
                    var dayNew = document.getElementById(newGetId + "_input2").getAttribute("name").substring(0, 2);
                    var monthNew = document.getElementById(newGetId + "_input2").getAttribute("name").substring(3, 5);
                    var yearNew = document.getElementById(newGetId + "_input2").getAttribute("name").substring(6, 10);
                    if (monthNew > 1) {
                        monthNew = monthNew - 1;
                    }
                    //d=new Date(monthNew+"/"+dayNew+"/"+yearNew)
                }

                var monthInit = false;
                for (var i = 0; i < month; i++) {
                    d.setMonth(d.getMonth() + i);
                    if (d.getMonth() == 0) {
                        monthInit = true;
                    }
                    if (i == 2 && d.getMonth() == 2 && monthInit) {
                        d.setMonth(d.getMonth() - 1);
                    }
                    document.getElementById(container + '_calendar_month_number_' + i).innerHTML = d.getMonth() + 1;
                    document.getElementById(container + '_calendar_month_name_' + i).innerHTML = months(d.getMonth());
                    document.getElementById(container + '_calendar_month_year_' + i).innerHTML = d.getFullYear();
                    generateCalendarRange(d, newGetId, i, "to");
                }
            };

            var selectDateRangeSelection = function selectDateRangeSelection(newGetId, selection) {
                for (var i = 0; i < month; i++) {
                    var containerSelect = document.getElementById(container + "_calendar_datepicker_" + i);

                    for (var x = 0; x < containerSelect.querySelectorAll("td").length; x++) {
                        containerSelect.querySelectorAll("td")[x].style.color = "";
                        containerSelect.querySelectorAll("td")[x].style.background = "";
                        containerSelect.querySelectorAll("td")[x].classList.remove("calendar-day-selected");
                    }
                    if (selection == "from") {
                        var id = document.getElementById(newGetId + "_input1").getAttribute("name");
                        var id2 = document.getElementById(newGetId + "_input2").getAttribute("name");
                    }

                    if (selection == "to") {
                        var id = document.getElementById(newGetId + "_input2").getAttribute("name");
                        var id2 = document.getElementById(newGetId + "_input1").getAttribute("name");
                    }
                    if (containerSelect.querySelectorAll("[id^='" + id + "']")[0] != undefined) {
                        containerSelect.querySelectorAll("[id^='" + id + "']")[0].classList.add("calendar-day-selected");
                        containerSelect.querySelectorAll("[id^='" + id + "']")[0].style.background = color;
                        containerSelect.querySelectorAll("[id^='" + id + "']")[0].style.color = "#ffffff";
                    }
                    if (containerSelect.querySelectorAll("[id^='" + id2 + "']")[0]) {
                        containerSelect.querySelectorAll("[id^='" + id2 + "']")[0].style.background = color;
                        containerSelect.querySelectorAll("[id^='" + id2 + "']")[0].style.color = "#ffffff";
                    }
                }
            };

            var generateCalendarRange = function generateCalendarRange(d, newGetId, calendar, selection) {
                var days = howManyDays(d);
                var shift = getDayFirstDate(d);
                clearRange(newGetId, calendar);
                if (selection == "from") {
                    if (document.getElementById(newGetId + "_input2").getAttribute("name") != null) {
                        var dayNew = document.getElementById(newGetId + "_input2").getAttribute("name").substring(0, 2);
                        var monthNew = document.getElementById(newGetId + "_input2").getAttribute("name").substring(3, 5);
                        var yearNew = document.getElementById(newGetId + "_input2").getAttribute("name").substring(6, 10);
                        var dateFinalTo = new Date(monthNew + "/" + dayNew + "/" + yearNew);
                    }
                    if (document.getElementById(newGetId + "_input1").getAttribute("name") != null) {
                        var dayNew = document.getElementById(newGetId + "_input1").getAttribute("name").substring(0, 2);
                        var monthNew = document.getElementById(newGetId + "_input1").getAttribute("name").substring(3, 5);
                        var yearNew = document.getElementById(newGetId + "_input1").getAttribute("name").substring(6, 10);
                        var dateFinalFrom = new Date(monthNew + "/" + dayNew + "/" + yearNew);
                    }
                }
                if (selection == "to") {
                    if (document.getElementById(newGetId + "_input1").getAttribute("name") != null) {
                        var dayNew = document.getElementById(newGetId + "_input1").getAttribute("name").substring(0, 2);
                        var monthNew = document.getElementById(newGetId + "_input1").getAttribute("name").substring(3, 5);
                        var yearNew = document.getElementById(newGetId + "_input1").getAttribute("name").substring(6, 10);
                        var dateFinalFrom = new Date(monthNew + "/" + dayNew + "/" + yearNew);
                    }
                    if (document.getElementById(newGetId + "_input2").getAttribute("name") != null) {
                        var dayNew = document.getElementById(newGetId + "_input2").getAttribute("name").substring(0, 2);
                        var monthNew = document.getElementById(newGetId + "_input2").getAttribute("name").substring(3, 5);
                        var yearNew = document.getElementById(newGetId + "_input2").getAttribute("name").substring(6, 10);
                        var dateFinalTo = new Date(monthNew + "/" + dayNew + "/" + yearNew);
                    }
                }
                for (var i = 0; i < days; i++) {
                    var newDay = validateNumber(i + 1);
                    var newMonth = validateNumber(d.getMonth() + 1);
                    var posi_row = Math.floor((i + shift) / 7);
                    var posi_col = Math.floor((i + shift) % 7);
                    var dateActual = new Date(newMonth + '/' + newDay + '/' + d.getFullYear());
                    var calendars = document.getElementById(newGetId + "_calendar_datepicker_" + calendar);
                    var class1 = calendars.querySelectorAll(".r" + posi_row);

                    if (selection == "from") {
                        if (dateFinalTo != null) {
                            var resta1 = dateActual.getTime() - dateFinalTo.getTime();
                            var calcular1 = resta1 / (1000 * 60 * 60 * 24);
                            if (dateFinalFrom != null) {
                                var resta2 = dateActual.getTime() - dateFinalFrom.getTime();
                                var calcular2 = resta2 / (1000 * 60 * 60 * 24);
                                var resta3 = dateActual.getTime() - dateFinalTo.getTime();
                                var calcular3 = resta3 / (1000 * 60 * 60 * 24);
                            }

                            for (var x = 0; x < class1.length; x++) {
                                if (calcular2 > 0 && calcular3 < 0) {
                                    class1[x].querySelectorAll('.col' + posi_col)[0].innerHTML = i + 1;
                                    class1[x].querySelectorAll('.col' + posi_col)[0].classList.add("calendar-number-day-selected");
                                }
                                if (calcular1 > 0) {
                                    class1[x].querySelectorAll('.col' + posi_col)[0].innerHTML = i + 1;
                                    class1[x].querySelectorAll('.col' + posi_col)[0].classList.add("calendar-number-day-disable");
                                    class1[x].querySelectorAll('.col' + posi_col)[0].setAttribute('id', newDay + '-' + newMonth + '-' + d.getFullYear());
                                } else {
                                    class1[x].querySelectorAll('.col' + posi_col)[0].innerHTML = i + 1;
                                    class1[x].querySelectorAll('.col' + posi_col)[0].classList.add("calendar-number-day-hover");
                                    class1[x].querySelectorAll('.col' + posi_col)[0].setAttribute('id', newDay + '-' + newMonth + '-' + d.getFullYear());
                                }
                            }
                        } else {
                            for (var x = 0; x < class1.length; x++) {
                                class1[x].querySelectorAll('.col' + posi_col)[0].innerHTML = i + 1;
                                class1[x].querySelectorAll('.col' + posi_col)[0].classList.add("calendar-number-day-hover");
                                class1[x].querySelectorAll('.col' + posi_col)[0].setAttribute('id', newDay + '-' + newMonth + '-' + d.getFullYear());
                            }
                        }
                    }

                    if (selection == "to") {
                        if (dateFinalFrom != null) {
                            var resta = dateActual.getTime() - dateFinalFrom.getTime();
                            var calcular1 = resta / (1000 * 60 * 60 * 24);
                            if (dateFinalTo != null) {
                                var _resta = dateActual.getTime() - dateFinalFrom.getTime();
                                var calcular2 = _resta / (1000 * 60 * 60 * 24);
                                var _resta2 = dateActual.getTime() - dateFinalTo.getTime();
                                var calcular3 = _resta2 / (1000 * 60 * 60 * 24);
                            }
                            for (var x = 0; x < class1.length; x++) {
                                if (calcular2 > 0 && calcular3 < 0) {
                                    class1[x].querySelectorAll('.col' + posi_col)[0].innerHTML = i + 1;
                                    class1[x].querySelectorAll('.col' + posi_col)[0].classList.add("calendar-number-day-selected");
                                }
                                if (calcular1 < 0) {
                                    class1[x].querySelectorAll('.col' + posi_col)[0].innerHTML = i + 1;
                                    class1[x].querySelectorAll('.col' + posi_col)[0].classList.add("calendar-number-day-disable");
                                } else {
                                    class1[x].querySelectorAll('.col' + posi_col)[0].innerHTML = i + 1;
                                    class1[x].querySelectorAll('.col' + posi_col)[0].classList.add("calendar-number-day-hover");
                                    class1[x].querySelectorAll('.col' + posi_col)[0].setAttribute('id', newDay + '-' + newMonth + '-' + d.getFullYear());
                                }
                            }
                        } else {
                            for (var x = 0; x < class1.length; x++) {
                                class1[x].querySelectorAll('.col' + posi_col)[0].innerHTML = i + 1;
                                class1[x].querySelectorAll('.col' + posi_col)[0].classList.add("calendar-number-day-hover");
                                class1[x].querySelectorAll('.col' + posi_col)[0].setAttribute('id', newDay + '-' + newMonth + '-' + d.getFullYear());
                            }
                        }
                    }
                }
                if (selection == "from") {
                    selectDateRangeSelection(newGetId, selection);
                }

                if (selection == "to") {
                    selectDateRangeSelection(newGetId, selection);
                }
            };

            var clearRange = function clearRange(newGetId, calendar) {
                var calendars = document.getElementById(newGetId + "_calendar_datepicker_" + calendar);
                var class1 = calendars.querySelectorAll("td");
                for (var x = 7; x < class1.length; x++) {
                    class1[x].classList.remove("calendar-number-day-disable");
                    class1[x].classList.remove("calendar-number-day-hover");
                    class1[x].classList.remove("calendar-number-day-selected");
                    class1[x].setAttribute("id", "");
                    class1[x].innerHTML = "";
                }
            };

            var selectDate = function selectDate(id, newGetId) {
                if (newGetId != null && id != null) {
                    for (var i = 0; i < month; i++) {
                        var containerSelect = document.getElementById(container + "_calendar_datepicker_" + i);

                        for (var x = 0; x < containerSelect.querySelectorAll("td").length; x++) {
                            containerSelect.querySelectorAll("td")[x].style.color = "";
                            containerSelect.querySelectorAll("td")[x].classList.remove("calendar-day-selected");
                        }

                        if (containerSelect.querySelectorAll("[id^='" + id + "']")[0] != undefined) {
                            containerSelect.querySelectorAll("[id^='" + id + "']")[0].classList.add("calendar-day-selected");
                            containerSelect.querySelectorAll("[id^='" + id + "']")[0].style.color = color;
                        }
                    }
                }
                if (id != null) {
                    if (type == "simple") {
                        document.getElementById(newGetId + "_input1").value = replaceDate(id);
                    }
                    if (type == "range") {
                        if (calendarRange[newGetId + "_to"] != null) {
                            document.getElementById(newGetId + "_input2").value = replaceDate(calendarRange[newGetId + "_to"]);
                            document.getElementById(newGetId + "_input2").setAttribute("name", calendarRange[newGetId + "_to"]);
                        }
                        if (calendarRange[newGetId + "_from"] != null) {
                            if (deleteTo) {
                                if (calendarRange[newGetId + "_from"] != dateInit) {
                                    dateInit = calendarRange[newGetId + "_from"];
                                    document.getElementById(newGetId + "_input1").value = replaceDate("00-00-0000");
                                    document.getElementById(newGetId + "_input1").setAttribute("name", "00-00-0000");
                                    document.getElementById(newGetId + "_input1").value = null;
                                    document.getElementById(newGetId + "_input1").setAttribute("name", null);
                                    document.getElementById(newGetId + "_input2").value = replaceDate("00-00-0000");
                                    document.getElementById(newGetId + "_input2").setAttribute("name", "00-00-0000");
                                    document.getElementById(newGetId + "_input2").value = null;
                                    document.getElementById(newGetId + "_input2").setAttribute("name", null);
                                    calendarRange[newGetId + "_to"] = "";
                                }
                            }
                            document.getElementById(newGetId + "_input1").value = replaceDate(calendarRange[newGetId + "_from"]);
                            document.getElementById(newGetId + "_input1").setAttribute("name", calendarRange[newGetId + "_from"]);
                        }
                    }
                }
            };

            var replaceDate = function replaceDate(replaceDates) {
                replaceDates = replaceDates.replace("-", "/");
                replaceDates = replaceDates.replace("-", "/");
                return replaceDates;
            };

            var closeCalendar = function closeCalendar(id) {
                document.getElementById(id + "_calendar").style.opacity = "0";
                document.getElementById(id + "_calendar").style.visibility = "collapse";
                document.getElementById(id + "_calendar").style.height = "30px";
                if (typeInput == "traditional") {
                    document.getElementById(id + "_input1").style.border = "1px solid " + datepickerColor;
                    document.getElementById(id + "_input1").style.height = "22px";
                    if (type == "range") {
                        document.getElementById(id + "_input2").style.border = "1px solid " + datepickerColor;
                        d;
                        ocument.getElementById(id + "_input2").style.height = "22px";
                    }
                }
                document.getElementById("calendar-cover").style.display = "none";
                if (typeInput == "material") {
                    document.getElementById(id + "_title-1").style.color = datepickerColor;
                    document.getElementById(id + "_title-2").style.color = datepickerColor;
                    if (document.getElementById(id + "_input1").value == "") {
                        document.getElementById(id + "_title-1").style.marginTop = "0px";
                        document.getElementById(id + "_title-1").style.fontSize = "18px";
                    }
                    if (document.getElementById(id + "_input2").value == "") {
                        document.getElementById(id + "_title-2").style.marginTop = "0px";
                        document.getElementById(id + "_title-2").style.fontSize = "18px";
                    }
                    document.getElementById(id + "_input1").style.borderBottom = "1px solid " + datepickerColor;
                    if (type == "range") {
                        document.getElementById(id + "_input2").style.borderBottom = "1px solid " + datepickerColor;
                    }
                }
            };

            var onResizeDatepicker = function onResizeDatepicker() {
                if (document.documentElement.offsetWidth < 768 && document.getElementById(container + "_calendar").style.visibility == "visible") {
                    if (document.getElementById("calendar-cover")) {
                        document.getElementById("calendar-cover").style.display = "block";
                    }
                } else {
                    document.getElementById("calendar-cover").style.display = "none";
                }
            };

            var changeClassTd = function changeClassTd(datepickerId, fromOrTo) {
                for (var i = 0; i < month; i++) {
                    var calendars = document.getElementById(datepickerId + "_calendar_datepicker_" + i).querySelectorAll("tbody");
                    var class1 = calendars[0].querySelectorAll("td");
                    for (var x = 0; x < class1.length; x++) {
                        class1[x].classList.remove("from");
                        class1[x].classList.remove("to");
                        class1[x].classList.add(fromOrTo);
                    }
                }
                if (type == "range") {
                    if (fromOrTo == "from") {
                        changeDefectRangeFrom(datepickerId);
                    }
                    if (fromOrTo == "to") {
                        changeDefectRangeTo(datepickerId);
                    }
                }
            };

            calendarRange = [];
            css = '#' + container + '{width: 100%;max-width: 554px;} .left{left: -34px; position: absolute;cursor: pointer;width: 0;height: 0;border-top: 20px solid transparent;border-bottom: 20px solid transparent;} .left:hover{opacity: 0.8;} .right{right: -34px;position: absolute;cursor: pointer;width: 0;height: 0;border-top: 20px solid transparent;border-bottom: 20px solid transparent;} .right:hover{opacity: 0.8;} .calendar-actual{    border-top-left-radius: 7px;border-top-right-radius: 7px;color: #ffffff;position: absolute;width: 230px;} .calendar-number-day-disable{background: #cccccc;opacity: 0.5;cursor: auto;}.calendar-number-day-disable:hover{background: #bbbbbb;opacity: 0.5;cursor: auto;} .calendar-number-day-selected{background: #b1b1b1;color: white;} .calendar-container{left: 34px;position:relative;top: 10px;} .calendar-actual-content{display: flex;padding-top: 8px;padding-bottom: 8px;} .calendar-display{border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;border-top-left-radius: 8px;border-top-right-radius: 8px;border: solid 1px #cccccc;width: 230px;float: left;margin-left: 5px;margin-right: 5px;background: #ffffff;}.calendar-display table {table-layout: fixed;width:220px;height:180px;margin-left:6px;margin-top: 38px;} .calendar-month-number{font-size: 14px;width: auto;margin-left: 8px;padding-right: 8px;border-style: solid;border-width: 0px 2px 0px 0px;border-color: #ffffff;}.calendar-month-name {font-size: 14px;font-weight: bold;width: 50%;margin-left: 8px;}.calendar-year-number{font-size: 14px;width: auto;margin: auto;margin-right: 8px;} .calendar-number-day{color: #828D98;text-align: center;font: small-caption;display: table-footer-group;}.calendar-number-day td{height: 16px;}.calendar-number-day-hover{cursor: pointer;}.calendar-number-day-hover:hover{background: #cccccc !important;} .calendar-days{font: small-caption;color: #535760;text-align: center;} .calendar-day-selected{background: #cccccc;} .calendar-flex{display: flex} .calendar-cover{position: fixed;top: 0;left: 0;background: black;opacity: 0.43;z-index: 102;width: 100%;height: 100%;display: none} @media screen and (min-width: 769px) {#' + container + '{background: transparent !important} .' + container + '_br{display:none}} @media screen and (max-width: 768px) { .calendar-number-day-hover:hover{background: ' + color + ' !important;} #' + container + '_calendar{visibility: visible;height: auto;opacity: 1;position: absolute;transition: 0.2s ease-in-out;z-index: 1001;} #' + container + '_calendar_container{border-radius: 8px;position: fixed;left: 20px;max-width: 256px !important;height: auto !important;margin-left: calc(50% - 142px);margin-top: 14vh;padding-top: 38px;background:' + color + '} .left{left: 10px;margin-top: -30px !important;border-right: 12px solid #ffffff !important;border-top: 12px solid transparent;border-bottom: 12px solid transparent;}.right{right: 150px;margin-top: -30px !important;border-left: 12px solid #ffffff !important;border-top: 12px solid transparent;border-bottom: 12px solid transparent;} .calendar-close{color: #ffffff;float: right;margin-left: -22px;margin-right: 10px;margin-top: -36px;font-size: 24px;cursor: pointer;display: block !important} .calendar-display{border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;margin-left: 0px;margin-right: 0px;width: 252px;} .calendar-display table {width: 242px;} .calendar-actual{width: 252px;    border-top-left-radius: 0px;border-top-right-radius: 0px;} .calendar-actual-content{display: inline;} .calendar-month-number{float: left;margin-left: 0px;padding-right: 0px;margin-top: 8px;margin-bottom: 8px;text-align: center;font-size: 34px;width: 50%;}.calendar-month-name{float: left;width: calc(50% - 2px);padding-top: 8px;font-size: 16px;text-align: center;margin: auto;margin-left: 0px}.calendar-year-number{float: right;width: calc(50% - 2px);padding-top: 4px;text-align: center;margin: auto;margin-left: 0px} .calendar-table{margin-top: 60px !important;} .calendar-number-day{font-size: 14px;} #' + container + '_calendar_datepicker_1{display:none} .calendar-flex {display: block;} .' + container + '_br{display:block;height: 28px;}}';
            style = document.createElement('style');

            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            document.getElementsByTagName('head')[0].appendChild(style);

            datepicker = document.getElementById(container);

            var div = document.createElement("div");
            datepicker.appendChild(div);
            var div1 = document.createElement("div");
            div1.classList.add("calendar-flex");
            div.appendChild(div1);
            var divPrincipal1 = document.createElement("div");
            div1.appendChild(divPrincipal1);
            var icon1 = document.createElement("div");
            icon1.setAttribute("id", container + "_icon1");
            icon1.style.float = "left";
            icon1.style.marginRight = "4px";
            divPrincipal1.appendChild(icon1);
            icon = '<svg color=' + datepickerColor + ' class="mat-datepicker-toggle-default-icon ng-star-inserted" fill="currentColor" focusable="false" height="28px" viewBox="0 0 24 24" width="28px"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg>';

            icon1.innerHTML = icon;
            var input1 = document.createElement("input");
            input1.setAttribute("id", container + "_input1");
            input1.setAttribute("readonly", true);

            input1.style.outline = "none";
            input1.style.fontSize = "16px";
            input1.style.marginRight = "14px";
            input1.style.height = "22px";

            if (typeInput == "traditional") {
                input1.style.border = "1px solid " + datepickerColor;
                input1.style.transition = "all 0.1s ease 0.1s;";
            }

            if (typeInput == "material") {
                input1.style.position = "relative";
                input1.style.zIndex = "1";
                input1.style.transition = "all 0.1s ease 0.1s";
                input1.style.border = "0px";
                input1.style.background = "transparent";
                input1.style.borderBottom = "1px solid " + datepickerColor;

                if (title1 != "") {
                    var titleInput = document.createElement("div");
                    titleInput.style.zIndex = "1";
                    titleInput.style.fontSize = "18px";
                    titleInput.style.transition = "all 0.10s ease 0.10s";
                    titleInput.style.color = datepickerColor;
                    titleInput.setAttribute("id", container + "_title-1");
                    titleInput.style.position = "absolute";
                    titleInput.style.marginTop = "0px";
                    titleInput.style.marginLeft = "32px";
                    divPrincipal1.insertBefore(titleInput, divPrincipal1.childNodes[0]);
                    titleInput.innerHTML = title1;
                }
            }

            divPrincipal1.appendChild(input1);
            document.getElementById(container + "_input1").onfocus = function () {
                focusInput(this.id);
            };
            var br1 = document.createElement("div");
            br1.setAttribute("class", container + "_br");
            div1.appendChild(br1);
            var divPrincipal2 = document.createElement("div");
            div1.appendChild(divPrincipal2);
            if (type == "range") {
                var icon2 = document.createElement("div");
                icon2.setAttribute("id", container + "_icon2");
                icon2.style.float = "left";
                icon2.style.marginRight = "4px";
                divPrincipal2.appendChild(icon2);
                icon = '<svg color="' + datepickerColor + '" class="mat-datepicker-toggle-default-icon ng-star-inserted" fill="currentColor" focusable="false" height="28px" viewBox="0 0 24 24" width="28px"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg>';

                icon2.innerHTML = icon;
                var input2 = document.createElement("input");
                input2.setAttribute("id", container + "_input2");
                input2.setAttribute("readonly", true);
                input2.style.outline = "none";
                input2.style.height = "22px";
                input2.style.fontSize = "16px";

                if (typeInput == "traditional") {
                    input2.style.border = "1px solid " + datepickerColor;
                    input2.style.transition = "all 0.1s ease 0.1s;";
                }

                if (typeInput == "material") {
                    input2.style.position = "relative";
                    input2.style.zIndex = "1";
                    input2.style.transition = "all 0.1s ease 0.1s";
                    input2.style.border = "0px";
                    input2.style.background = "transparent";
                    input2.style.borderBottom = "1px solid " + datepickerColor;

                    if (title2 != "") {
                        var _titleInput = document.createElement("div");
                        _titleInput.style.zIndex = "1";
                        _titleInput.style.fontSize = "18px";
                        _titleInput.style.transition = "all 0.15s ease 0.15s";
                        _titleInput.style.color = datepickerColor;
                        _titleInput.setAttribute("id", container + "_title-2");
                        _titleInput.style.position = "absolute";
                        _titleInput.style.marginTop = "0px";
                        _titleInput.style.marginLeft = "32px";
                        divPrincipal2.insertBefore(_titleInput, divPrincipal2.childNodes[0]);
                        _titleInput.innerHTML = title2;
                    }
                }

                divPrincipal2.appendChild(input2);
                document.getElementById(container + "_input2").onfocus = function () {
                    focusInputTo(this.id);
                };
            }
            var div2 = document.createElement("div");
            div2.setAttribute("id", container + "_calendar");
            div2.style.visibility = "collapse";
            div2.style.marginTop = "-10px";
            div2.style.height = "30px";
            div2.style.opacity = "0";
            div2.style.display = "flex";
            div.appendChild(div2);

            var div2Container = document.createElement("div");
            div2Container.setAttribute("id", container + "_calendar_container");
            if (month == 2) {
                div2Container.style.maxWidth = "484px";
            }
            if (month == 1) {
                div2Container.style.maxWidth = "242px";
            }
            div2Container.style.height = "210px";
            div2.appendChild(div2Container);
            div2Container.classList.add("calendar-container");

            var div2ContainerLeft = document.createElement("div");
            div2ContainerLeft.setAttribute("id", container + "_calendar_container");
            div2ContainerLeft.style.marginTop = "70px";
            div2ContainerLeft.style.borderRight = "19px solid " + color;
            div2ContainerLeft.setAttribute("id", container + "_left");
            div2Container.appendChild(div2ContainerLeft);
            div2ContainerLeft.classList.add("left");

            var div2ContainerRight = document.createElement("div");
            div2ContainerRight.setAttribute("id", container + "_calendar_container");
            div2ContainerRight.style.marginTop = "70px";
            div2ContainerRight.style.borderLeft = "19px solid " + color;
            div2ContainerRight.setAttribute("id", container + "_right");
            div2Container.appendChild(div2ContainerRight);
            div2ContainerRight.classList.add("right");

            var div2ContainerClose = document.createElement("div");
            div2Container.appendChild(div2ContainerClose);
            div2ContainerClose.style.display = "none";
            div2ContainerClose.classList.add("calendar-close");
            div2ContainerClose.onclick = function () {
                closeCalendar(container);
            };
            div2ContainerClose.innerHTML = "x";

            for (i = 0; i < month; i++) {
                var div2ContainerDatepicker = document.createElement("div");
                div2ContainerDatepicker.setAttribute("id", container + "_calendar_datepicker_" + i);
                div2Container.appendChild(div2ContainerDatepicker);
                div2ContainerDatepicker.classList.add("calendar-display");

                var div2ContainerMonth = document.createElement("div");
                div2ContainerMonth.setAttribute("id", container + "_calendar_month_" + i);
                div2ContainerMonth.style.background = color;
                div2ContainerDatepicker.appendChild(div2ContainerMonth);
                div2ContainerMonth.classList.add("calendar-actual");

                var div2ContainerMonthActual = document.createElement("div");
                div2ContainerMonthActual.setAttribute("id", container + "_calendar_month_" + i);
                div2ContainerMonth.appendChild(div2ContainerMonthActual);
                div2ContainerMonthActual.classList.add("calendar-actual-content");

                var div2ContainerMonthActualNumber = document.createElement("div");
                div2ContainerMonthActualNumber.setAttribute("id", container + "_calendar_month_number_" + i);
                div2ContainerMonthActual.appendChild(div2ContainerMonthActualNumber);
                div2ContainerMonthActualNumber.classList.add("calendar-month-number");

                var div2ContainerMonthActualMonth = document.createElement("div");
                div2ContainerMonthActualMonth.setAttribute("id", container + "_calendar_month_name_" + i);
                div2ContainerMonthActual.appendChild(div2ContainerMonthActualMonth);
                div2ContainerMonthActualMonth.classList.add("calendar-month-name");

                var div2ContainerMonthActualYear = document.createElement("div");
                div2ContainerMonthActualYear.setAttribute("id", container + "_calendar_month_year_" + i);
                div2ContainerMonthActual.appendChild(div2ContainerMonthActualYear);
                div2ContainerMonthActualYear.classList.add("calendar-year-number");

                var div2ContainerTable = document.createElement("table");
                div2ContainerDatepicker.appendChild(div2ContainerTable);
                div2ContainerTable.classList.add("calendar-table");

                div2ContainerTable.innerHTML = '<thead><tr style="background-color: #ffffff" class="calendar-days"><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr></thead><tbody class="calendar-number-day"><tr style="background-color: #ffffff" class="r0"><td class="col0"><td class="col1"><td class="col2"><td class="col3"><td class="col4"><td class="col5"><td class="col6"></td></tr><tr style="background-color: #ffffff" class="r1"><td class="col0"><td class="col1"><td class="col2"><td class="col3"><td class="col4"><td class="col5"><td class="col6"></td></tr><tr style="background-color: #ffffff" class="r2"><td class="col0"><td class="col1"><td class="col2"><td class="col3"><td class="col4"><td class="col5"><td class="col6"></td></tr><tr style="background-color: #ffffff" class="r3"><td class="col0"><td class="col1"><td class="col2"><td class="col3"><td class="col4"><td class="col5"><td class="col6"></td></tr><tr style="background-color: #ffffff" class="r4"><td class="col0"><td class="col1"><td class="col2"><td class="col3"><td class="col4"><td class="col5"><td class="col6"></td></tr><tr style="background-color: #ffffff" class="r5"><td class="col0"><td class="col1"><td class="col2"><td class="col3"><td class="col4"><td class="col5"><td class="col6"></td></tr></tbody>';
            }

            var div3 = document.createElement("div");
            div3.setAttribute("id", "calendar-cover");
            div3.classList.add("calendar-cover");
            div.appendChild(div3);

            for (i = 0; i < month; i++) {
                clicDay = document.getElementById(container + "_calendar_datepicker_" + i);


                clicDay.onclick = function (e) {
                    calendarSelected = e.target.id;
                    if (calendarSelected != "" && calendarSelected.indexOf("calendar") < 0) {
                        //range
                        if (type == "range") {
                            if (e.target.className.indexOf("from") > -1) {
                                calendarRange[container + "_from"] = calendarSelected;
                            }
                            if (e.target.className.indexOf("to") > -1) {
                                calendarRange[container + "_to"] = calendarSelected;
                            }
                        }
                        // close range
                        selectDate(calendarSelected, container);
                        document.body.click();
                        //range
                        if (type == "range") {
                            if (e.target.className.indexOf("to") > -1) {
                                document.body.click();
                                if (!closeClic) {
                                    document.getElementById(container + "_input2").focus();
                                }
                            }
                            if (e.target.className.indexOf("from") > -1) {
                                document.getElementById(container + "_input2").focus();
                            }
                        }
                        // close range
                    }
                };
            }

            d = new Date();
            monthInit = false;

            for (i = 0; i < month; i++) {
                d.setMonth(d.getMonth() + i);
                if (d.getMonth() == 0) {
                    monthInit = true;
                }
                if (i + 1 == 2 && d.getMonth() == 2 && monthInit) {
                    d.setMonth(d.getMonth() - 1);
                }
                document.getElementById(container + '_calendar_month_number_' + i).appendChild(document.createTextNode(validateNumber(d.getMonth() + 1)));
                document.getElementById(container + '_calendar_month_name_' + i).appendChild(document.createTextNode(months(d.getMonth())));
                document.getElementById(container + '_calendar_month_year_' + i).appendChild(document.createTextNode(d.getFullYear()));
                generateCalendar(d, container, i);
            }

            left = document.getElementById(container + "_left");
            right = document.getElementById(container + "_right");
            solution = 0;


            left.onclick = function () {
                if (solution == 0 && month == 2) {
                    d.setMonth(d.getMonth() - 1);
                    solution = 1;
                }
                for (var i = month - 1; i >= 0; i--) {
                    d.setMonth(d.getMonth() + i);
                    updateDate(d, 0);

                    document.getElementById(container + '_calendar_month_number_' + i).innerHTML = validateNumber(d.getMonth() + 1);
                    document.getElementById(container + '_calendar_month_name_' + i).innerHTML = months(d.getMonth());
                    document.getElementById(container + '_calendar_month_year_' + i).innerHTML = d.getFullYear();
                    if (type == "simple") {
                        generateCalendar(d, container, i);
                    }
                    if (type == "range") {
                        generateCalendarRange(d, container, i, actualInput);
                    }
                }
                return false;
            };

            right.onclick = function () {
                if (solution == 1 && month == 2) {
                    d.setMonth(d.getMonth() + 1);
                    solution = 0;
                }
                for (var i = 0; i < month; i++) {
                    d.setMonth(d.getMonth() + i - 1);
                    updateDate(d, 1);
                    if (month == 1) {
                        d.setMonth(d.getMonth());
                        updateDate(d, 1);
                    }

                    document.getElementById(container + '_calendar_month_number_' + i).innerHTML = validateNumber(d.getMonth() + 1);
                    document.getElementById(container + '_calendar_month_name_' + i).innerHTML = months(d.getMonth());
                    document.getElementById(container + '_calendar_month_year_' + i).innerHTML = d.getFullYear();
                    if (type == "simple") {
                        generateCalendar(d, container, i);
                    }
                    if (type == "range") {
                        generateCalendarRange(d, container, i, actualInput);
                    }
                }
                return false;
            };

            body = document.body;

            body.onclick = function (e) {
                var show = false;
                for (var x = 0; x < e.composedPath().length; x++) {
                    if (e.composedPath()[x].id == container) {
                        show = true;
                    }
                }
                if (!show) {
                    closeCalendar(container);
                }
            };

            window.addEventListener("resize", onResizeDatepicker);
        })();
    } else {
        var errorExplous = "Explous Datepicker - Error when assigning value to some variable: ";
        if (!container) {
            console.log(errorExplous + "container");
        }
        if (!type) {
            console.log(errorExplous + "type");
        }
        if (!color) {
            console.log(errorExplous + "color");
        }
        if (!month) {
            console.log(errorExplous + "month");
        }
        if (!typeInput) {
            console.log(errorExplous + "typeInput");
        }
        if (!title1) {
            console.log(errorExplous + "title1");
        }
        if (!datepickerColor) {
            console.log(errorExplous + "datepickerColor");
        }
    }
};

exports.default = Datepicker;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Grid = {};

Grid.init = function (_ref) {
    var container = _ref.container,
        grids = _ref.grids,
        gridSize = _ref.gridSize,
        _ref$responsiveOneCol = _ref.responsiveOneColumn,
        responsiveOneColumn = _ref$responsiveOneCol === undefined ? true : _ref$responsiveOneCol;

    if (container && grids) {
        var detectCol = function detectCol() {
            selectDataArray = null;
            var x = grids.length - 1;
            var position = 0;
            for (x; x >= 0; x--) {
                if (grids[x].screen > window.innerWidth) {
                    selectDataArray = grids[x];
                    position = x;
                    x = 0;
                }
            }
            if (selectDataArray == undefined) {
                selectDataArray = grids[0];
            }
            var gridsSize = 100 / selectDataArray.cols;
            var gridHeight = 0;
            for (var x = 0; x < gridChildren.length; x++) {
                gridChildren[x].style.height = "auto";
            }
            for (var x = 0; x < gridChildren.length; x++) {
                if (gridSize) {
                    gridChildren[x].style.width = gridSize[position][x] + "%";
                } else {
                    gridChildren[x].style.width = gridsSize + "%";
                }
                gridChildren[x].style.float = "left";
                gridChildren[x].style.margin = "0px";
                gridChildren[x].style.padding = "0px";
                if (gridChildren[x].clientHeight > gridHeight) {
                    gridHeight = gridChildren[x].clientHeight;
                }
            }
            for (var x = 0; x < gridChildren.length; x++) {
                if (selectDataArray.cols > 1 || !responsiveOneColumn) {
                    gridChildren[x].style.height = gridHeight + "px";
                }
            }
            document.getElementById(container).style.visibility = "visible";
        };

        var onResizeGrid = function onResizeGrid() {
            detectCol();
        };

        var selectDataArray;
        var gridChildren = document.querySelectorAll("#" + container)[0].children;
        document.getElementById(container).style.display = "flow-root";
        setTimeout(function () {
            detectCol();
        }, 10);

        window.addEventListener("resize", onResizeGrid);
    } else {
        var errorExplous = "Explous Grid - Error when assigning value to some variable: ";
        if (!container) {
            console.log(errorExplous + "container");
        }
        if (!grids) {
            console.log(errorExplous + "grids");
        }
    }
};

exports.default = Grid;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Input = {};

var color = "#333333";

Input.init = function (_ref) {
    var container = _ref.container,
        input = _ref.input,
        type = _ref.type,
        colorBorder = _ref.colorBorder,
        title = _ref.title,
        required = _ref.required,
        messageError = _ref.messageError,
        email = _ref.email,
        messageEmail = _ref.messageEmail,
        inputColor = _ref.inputColor;

    if (container && input && type && colorBorder) {
        var focusInput = function focusInput(rInput) {
            if (type == "material") {
                document.getElementById(rInput + "_title").style.marginTop = "-16px";
                document.getElementById(rInput + "_title").style.fontSize = "12px";
                document.getElementById(rInput + "_title").style.color = colorBorder;
                document.getElementById(rInput).style.borderBottom = "2px solid " + colorBorder;
            }
            if (type == "traditional") {
                document.getElementById(rInput).style.border = "2px solid " + colorBorder;
            }
            if (required && document.getElementById(rInput).value == "" && err) {
                document.getElementById(rInput).style.borderBottom = "2px solid #f44336";
                if (type == "traditional") {
                    document.getElementById(rInput).style.border = "2px solid #f44336";
                }
                if (type == "material") {
                    document.getElementById(rInput + "_title").style.color = "#f44336";
                }
            }
            var emailVerify = validateEmail(document.getElementById(rInput).value);
            if (email && !emailVerify && errEmail && errEmail) {
                document.getElementById(rInput).style.borderBottom = "2px solid #f44336";
                if (type == "material") {
                    document.getElementById(rInput + "_title").style.color = "#f44336";
                }
                if (type == "traditional") {
                    document.getElementById(rInput).style.border = "2px solid #f44336";
                }
            }
        };

        var focusoutInput = function focusoutInput(rInput) {
            errorShow = true;
            document.getElementById(rInput + "_title").style.color = inputColor;
            document.getElementById(rInput).style.borderBottom = "1px solid " + inputColor;
            if (type == "traditional") {
                document.getElementById(rInput).style.border = "1px solid " + inputColor;
            }
            if (email && !err) {
                var emailVerify = validateEmail(document.getElementById(rInput).value);
                if (!emailVerify) {
                    document.getElementById(rInput).style.borderBottom = "1px solid #f44336";
                    if (type == "material") {
                        document.getElementById(rInput + "_title").style.color = "#f44336";
                    }
                    document.getElementById(rInput + "_err").style.marginTop = "22px";
                    if (dInput.tagName == "TEXTAREA") {
                        document.getElementById(rInput + "_err").style.marginTop = "0px";
                    }
                    if (type == "traditional") {
                        if (dInput.tagName == "INPUT") {
                            document.getElementById(rInput + "_err").style.marginTop = "28px";
                        }
                        document.getElementById(rInput).style.border = "1px solid #f44336";
                    }
                    document.getElementById(rInput + "_err").style.opacity = "1";
                    document.getElementById(rInput + "_err").innerHTML = messageEmail;
                    errEmail = true;
                } else {
                    errEmail = false;
                }
            }

            if (document.getElementById(rInput).value == "") {
                if (required) {
                    document.getElementById(rInput).style.borderBottom = "1px solid #f44336";
                    if (type == "material") {
                        document.getElementById(rInput + "_title").style.color = "#f44336";
                    }
                    document.getElementById(rInput + "_err").style.marginTop = "22px";
                    if (dInput.tagName == "TEXTAREA") {
                        document.getElementById(rInput + "_err").style.marginTop = "0px";
                    }
                    if (type == "traditional") {
                        if (dInput.tagName == "INPUT") {
                            document.getElementById(rInput + "_err").style.marginTop = "28px";
                        }
                        document.getElementById(rInput).style.border = "1px solid #f44336";
                        document.getElementById(rInput).style.border = "1px solid #f44336";
                    }
                    document.getElementById(rInput + "_err").style.opacity = "1";
                    document.getElementById(rInput + "_err").innerHTML = messageError;
                    err = true;
                } else {
                    if (!errEmail) {
                        document.getElementById(rInput + "_title").style.color = inputColor;
                        document.getElementById(rInput).style.borderBottom = "1px solid " + inputColor;
                        if (type == "material") {
                            document.getElementById(rInput).style.color = "#1px solid " + inputColor;
                        }
                        err = false;
                    }
                }
                if (type == "material") {
                    document.getElementById(rInput + "_title").style.marginTop = "-4px";
                    document.getElementById(rInput + "_title").style.fontSize = "18px";
                }
            } else {
                if (type == "material") {
                    document.getElementById(rInput + "_title").style.fontSize = "12px";
                }
            }
        };

        var oninputInput = function oninputInput(rInput) {
            if (required && document.getElementById(rInput).value == "" && errorShow) {
                document.getElementById(rInput).style.borderBottom = "2px solid #f44336";
                if (type == "material") {
                    document.getElementById(rInput + "_title").style.color = "#f44336";
                }
                document.getElementById(rInput + "_err").style.marginTop = "22px";
                if (dInput.tagName == "TEXTAREA") {
                    document.getElementById(rInput + "_err").style.marginTop = "0px";
                }
                document.getElementById(rInput + "_err").style.opacity = "1";
                document.getElementById(rInput + "_err").innerHTML = messageError;
                if (type == "traditional") {
                    document.getElementById(rInput).style.border = "2px solid #f44336";
                    if (dInput.tagName == "INPUT") {
                        document.getElementById(rInput + "_err").style.marginTop = "28px";
                    }
                }
                err = true;
            } else {
                if (type == "material") {
                    document.getElementById(rInput + "_title").style.color = colorBorder;
                }
                document.getElementById(rInput).style.borderBottom = "2px solid " + colorBorder;
                if (type == "traditional") {
                    document.getElementById(rInput).style.border = "2px solid " + colorBorder;
                }
                if (document.getElementById(rInput + "_err")) {
                    document.getElementById(rInput + "_err").style.marginTop = "16px";
                    document.getElementById(rInput + "_err").style.opacity = "0";
                }
                err = false;
            }
            var emailVerify = validateEmail(document.getElementById(rInput).value);
            if (email && !emailVerify && errorShow) {
                document.getElementById(rInput).style.borderBottom = "2px solid #f44336";
                if (type == "material") {
                    document.getElementById(rInput + "_title").style.color = "#f44336";
                }
                document.getElementById(rInput + "_err").style.marginTop = "22px";
                if (dInput.tagName == "TEXTAREA") {
                    document.getElementById(rInput + "_err").style.marginTop = "0px";
                }
                if (type == "traditional") {
                    document.getElementById(rInput).style.border = "2px solid #f44336";
                    if (dInput.tagName == "INPUT") {
                        document.getElementById(rInput + "_err").style.marginTop = "28px";
                    }
                }
                document.getElementById(rInput + "_err").style.opacity = "1";
                if (!err) {
                    document.getElementById(rInput + "_err").innerHTML = messageEmail;
                }
                errEmail = true;
            } else {
                if (!err) {
                    if (type == "material") {
                        document.getElementById(rInput + "_title").style.color = colorBorder;
                    }
                    document.getElementById(rInput).style.borderBottom = "2px solid " + colorBorder;
                    if (type == "traditional") {
                        document.getElementById(rInput).style.border = "2px solid " + colorBorder;
                    }
                    if (document.getElementById(rInput + "_err")) {
                        document.getElementById(rInput + "_err").style.marginTop = "16px";
                        document.getElementById(rInput + "_err").style.opacity = "0";
                    }
                }
                errEmail = false;
            }
        };

        var validateEmail = function validateEmail(email) {
            var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return re.test(String(email).toLowerCase());
        };

        var err = false;
        var errEmail = false;
        var errorShow = false;
        var dContainer = document.getElementById(container);
        var dInput = document.getElementById(input);
        dContainer.style.paddingTop = "22px";
        dContainer.style.paddingBottom = "40px";
        dContainer.style.color = color;
        dInput.style.outline = "none";
        dInput.style.border = "0px";
        dInput.style.position = "absolute";
        if (dInput.tagName == "TEXTAREA") {
            dInput.style.position = "relative";
            dInput.style.height = "20px";
        }
        dInput.style.fontSize = "16px";
        dInput.style.zIndex = "1";
        dInput.style.background = "transparent";
        if (type == "material") {
            dInput.style.borderBottom = "1px solid " + inputColor;
        }
        if (type == "traditional") {
            dInput.style.height = "22px";
            dInput.style.border = "1px solid " + inputColor;
            var inputHtml = dContainer.innerHTML;
        }
        if (dInput.tagName == "INPUT") {
            dInput.style.transition = "all 0.1s ease 0.1s";
        }
        dInput.onfocus = function () {
            focusInput(this.id);
        };
        //dInput.onfocusout = function() { focusoutInput(); };
        //dInput.addEventListener("focusout", focusoutInput);
        dInput.onblur = function () {
            focusoutInput(this.id);
        };
        dInput.oninput = function () {
            oninputInput(this.id);
        };

        var titleInput = document.createElement("div");
        titleInput.style.zIndex = "1";
        titleInput.style.fontSize = "18px";
        titleInput.style.transition = "all 0.15s ease 0.15s";
        titleInput.style.color = inputColor;
        titleInput.setAttribute("id", input + "_title");
        if (type == "material") {
            titleInput.style.position = "absolute";
            titleInput.style.marginTop = "-4px";
            dContainer.insertBefore(titleInput, dContainer.childNodes[0]);
            var text = document.createTextNode(title);
            titleInput.appendChild(text);
        }
        if (type == "traditional") {
            titleInput.style.marginTop = "2px";
            titleInput.style.cssFloat = "left";
            titleInput.style.marginRight = "10px";
            dContainer.innerHTML = "";
            var containerInput = document.createElement("div");
            containerInput.setAttribute("id", input + "_container");
            containerInput.style.display = "flex";
            if (dInput.tagName == "TEXTAREA") {
                containerInput.style.display = "flow-root";
            }
            dContainer.appendChild(containerInput);
            containerInput.innerHTML = inputHtml;
            dContainer.insertBefore(titleInput, dContainer.childNodes[0]);
            var _text = document.createTextNode(title);
            titleInput.appendChild(_text);

            document.getElementById(input).onfocus = function () {
                focusInput(this.id);
            };
            //dInput.onfocusout = function() { focusoutInput(); };
            //dInput.addEventListener("focusout", focusoutInput);
            document.getElementById(input).onblur = function () {
                focusoutInput(this.id);
            };
            document.getElementById(input).oninput = function () {
                oninputInput(this.id);
            };
            if (dInput.tagName == "INPUT") {
                document.getElementById(input).style.transition = "all 0.1s ease 0.1s";
            }
        }

        if (required || email) {
            var errInput = document.createElement("div");
            errInput.style.position = "absolute";
            errInput.style.opacity = "0";
            errInput.style.color = "#f44336";
            errInput.style.fontSize = "12px";
            errInput.style.marginTop = "16px";
            errInput.style.transition = "all 0.15s ease 0.15s";
            errInput.setAttribute("id", input + "_err");
            if (type == "material") {
                dContainer.appendChild(errInput);
            }
            if (type == "traditional") {
                document.getElementById(input + "_container").appendChild(errInput);
            }
            var _text2 = void 0;
            if (messageEmail != "") {
                _text2 = document.createTextNode(messageEmail);
            }
            if (messageError != "") {
                _text2 = document.createTextNode(messageError);
            }
            errInput.appendChild(_text2);
        }
    } else {
        var errorExplous = "Explous Input - Error when assigning value to some variable: ";
        if (!container) {
            console.log(errorExplous + "container");
        }
        if (!input) {
            console.log(errorExplous + "input");
        }
        if (!type) {
            console.log(errorExplous + "type");
        }
        if (!colorBorder) {
            console.log(errorExplous + "colorBorder");
        }
    }
};

exports.default = Input;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var InputFile = {};
window.ExplousInputFileData = [];

InputFile.init = function (_ref) {
    var container = _ref.container,
        input = _ref.input,
        type = _ref.type,
        color = _ref.color,
        error = _ref.error,
        inputFileColor = _ref.inputFileColor;

    if (container && input && type && color && error && inputFileColor) {
        var handleDragEnter = function handleDragEnter() {
            document.getElementById(input + "_label").style.outline = "2px dashed " + color;
            document.getElementById(input + "_text").style.color = color;
            document.getElementById(input + "_icon").classList.add('color-new');
        };

        var handleDragLeave = function handleDragLeave() {
            document.getElementById(input + "_label").style.outline = "2px dashed " + inputFileColor;
            document.getElementById(input + "_text").style.color = "#909090";
            document.getElementById(input + "_icon").classList.remove('color-new');
        };

        var handleDrop = function handleDrop(e) {
            e.preventDefault();
            document.getElementById(input + "_label").style.outline = "2px dashed " + inputFileColor;
            document.getElementById(input + "_text").style.color = "#909090";
            document.getElementById(input + "_icon").classList.remove('color-new');
            handleInputChange(e);
        };

        var handleInputChange = function handleInputChange(e) {
            imageData = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
            var dataInfo = true;
            for (var x in ExplousInputFileData) {
                if (container == ExplousInputFileData[x].container) {
                    ExplousInputFileData[x].imageData = imageData;
                    dataInfo = false;
                }
            }
            if (dataInfo) {
                ExplousInputFileData.push({ container: container, imageData: imageData });
            }
            var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
            var pattern = type;
            var reader = new FileReader();
            nameFile = imageData.name;
            if (!file.type.match(pattern)) {
                alert(error);
                return;
            }
            reader.onload = _handleReaderLoaded.bind(this);
            reader.readAsDataURL(file);
        };

        var _handleReaderLoaded = function _handleReaderLoaded(e) {
            var reader = e.target;
            for (var x in ExplousInputFileData) {
                if (container == ExplousInputFileData[x].container) {
                    ExplousInputFileData[x].reader = reader.result;
                }
            }
            imageSrc = reader.result;
            inputFileData = reader.result;
            if (type == "pdf/*") {
                imageSrc = "https://www.codot.gov/business/civilrights/ada/assets/adobe-pdf-icon.png/image_preview";
            }
            inputFileData = inputFileData + "," + nameFile;
            document.getElementById(input + "_image").src = imageSrc;
            document.getElementById(input + "_image").style.opacity = "1";
        };

        ExplousInputFileData.push({ container: container });
        var css = '.color-text{margin-top: -34px;margin-bottom: 34px;margin-left: 86px;color: #909090;}.color-new{background:' + color + ' !important} .color-new:after{background:' + color + ' !important} .color-new:before{background:' + color + ' !important} .input-file-icon-arrow{pointer-events: none;margin-top: 48px;z-index: 1;width: 0; height: 0; border-left: 14px solid transparent;border-right: 14px solid transparent;border-bottom: 14px solid rgb(250, 250, 250);} .input-file-icon-arrow::before{content: "";position: absolute;width: 11px;height: 14px;background: rgb(250, 250, 250);margin-left: -5px;margin-top: 14px;}.input-file-uploader input {display: none;}.input-file-uploader {background-color: #efefef;background-color: rgba(0, 0, 0, 0.02);cursor: pointer;display: -webkit-flex;display: flex;height: 131px;-webkit-justify-content: center;justify-content: center;outline: 2px dashed ' + inputFileColor + ';outline-offset: 4px;position: relative;width: 238px;margin-left: 6px;z-index: 10;}.input-file-uploader img,.input-file-uploader .input-file-icon {pointer-events: none;}.input-file-uploader,.input-file-uploader .input-file-icon {-webkit-transition: all 100ms ease-in;-moz-transition: all 100ms ease-in;-ms-transition: all 100ms ease-in;-o-transition: all 100ms ease-in;transition: all 100ms ease-in;}.input-file-uploader img {left: 50%;max-height: 100%;max-width: 100%;position: absolute;top: 50%;-webkit-transition: all 300ms ease-in;-moz-transition: all 300ms ease-in;-ms-transition: all 300ms ease-in;-o-transition: all 300ms ease-in;transition: all 300ms ease-in;-webkit-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);transform: translate(-50%, -50%);z-index: 1;}.input-file-uploader img.loaded {opacity: 1;}.input-file-icon {background-color: ' + inputFileColor + ';border-radius: 1em;box-shadow: inset 0 0 0 1px hsla(0,0%,100%,.5);display: inline-block;height: 2em;left: 50%;margin-left: -3em;position: absolute;top: 40%;width: 6em;}.input-file-icon:after,.input-file-icon:before {transition: all 100ms ease-in;background-color: ' + inputFileColor + ';content: "";border-radius: 100%;position: absolute;}.input-file-icon:after {transition: all 100ms ease-in;height: 2em;right: .8em;top: -.8em;width: 2em;}.input-file-icon:before {height: 2.8em;left: 1em;top: -1.5em;width: 2.8em;}​.input-file-uploader img {left: 50%;max-height: 100%;max-width: 100%;position: absolute;top: 50%;-webkit-transition: all 300ms ease-in;-moz-transition: all 300ms ease-in;-ms-transition: all 300ms ease-in;-o-transition: all 300ms ease-in;transition: all 300ms ease-in;-webkit-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);transform: translate(-50%, -50%);z-index: 1}.' + input + '-image {opacity: 0;background:rgb(250, 250, 250)}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        var imageData = "";
        var imageSrc = "";
        var inputFileData = "";
        var nameFile;

        var iContainer = document.getElementById(container);
        var contContainer = iContainer.innerHTML;
        iContainer.innerHTML = "";
        var inputLabel = document.createElement("label");
        inputLabel.setAttribute("class", "input-file-uploader");
        inputLabel.setAttribute("id", input + "_label");
        inputLabel.ondragover = function () {
            return false;
        };
        inputLabel.ondragenter = function () {
            handleDragEnter();
        };
        inputLabel.ondragleave = function () {
            handleDragLeave();
        };
        inputLabel.ondrop = function () {
            handleDrop(event);
        };
        iContainer.appendChild(inputLabel);
        inputLabel.innerHTML = contContainer;

        var iInput = document.getElementById(input);
        iInput.setAttribute("type", "file");
        iInput.setAttribute("name", "file");
        iInput.setAttribute("accept", type);
        iInput.onchange = function () {
            handleInputChange(event);
        };

        var inputIcon = document.createElement("icon");
        inputIcon.setAttribute("class", "input-file-icon");
        inputIcon.setAttribute("id", input + "_icon");
        inputLabel.insertBefore(inputIcon, inputLabel.childNodes[0]);
        var inputIconArrow = document.createElement("div");
        inputIconArrow.setAttribute("class", "input-file-icon-arrow");
        inputIconArrow.setAttribute("id", input + "_arrow");
        inputLabel.appendChild(inputIconArrow);

        var inputIconImage = document.createElement("img");
        inputIconImage.setAttribute("id", input + "_image");
        inputIconImage.setAttribute("class", input + "_image");
        inputLabel.appendChild(inputIconImage);

        var inputText = document.createElement("div");
        iContainer.appendChild(inputText);
        inputText.setAttribute("id", input + "_text");
        inputText.setAttribute("class", "color-text");
        inputText.innerHTML = "Upload File";
    } else {
        var errorExplous = "Explous Input File - Error when assigning value to some variable: ";
        if (!container) {
            console.log(errorExplous + "container");
        }
        if (!input) {
            console.log(errorExplous + "input");
        }
        if (!type) {
            console.log(errorExplous + "type");
        }
        if (!color) {
            console.log(errorExplous + "color");
        }
        if (!error) {
            console.log(errorExplous + "error");
        }
        if (!inputFileColor) {
            console.log(errorExplous + "inputFileColor");
        }
    }
};

exports.default = InputFile;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var InputRange = {};

InputRange.init = function (_ref) {
    var container = _ref.container,
        range = _ref.range,
        color = _ref.color,
        background = _ref.background,
        showRange = _ref.showRange;

    if (container && range && color && background) {
        var changeRange = function changeRange(val) {
            if (showRange) {
                cSpan.style.opacity = "0.8";
                rangeChange = cRange.clientWidth * val / 100 - 12;
                cSpan.textContent = val;
                cSpan.style.marginLeft = rangeChange + "px";
                setTimeout(function () {
                    cSpan.style.opacity = "0";
                }, 1000);
            }
            var value = val;
            if (value < 100) {
                val = value;
                val = "0." + val;
            }
            if (value < 10) {
                val = value;
                val = "0.0" + val;
            }
            document.getElementById(range + "_range").style.backgroundImage = '-webkit-gradient(linear, left top, right top,' + 'color-stop(' + val + ', ' + background + '),' + 'color-stop(' + val + ', #efefef)' + ')';
        };

        var css = '.range{outline: none;-webkit-appearance: none;-moz-apperance: none;border-radius: 6px;height: 4px;transition: .2s;-webkit-transition: .2s;opacity: 0.8;background-image: -webkit-gradient(linear,left top,right top,color-stop(0.50, ' + background + '),color-stop(0.50, #efefef));}.range:hover {opacity: 1;}.range::-webkit-slider-thumb {-webkit-appearance: none !important;background-color: ' + color + ';height: 14px;width: 14px;border-radius: 50%;cursor:grab}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);
        var cContainer = document.getElementById(container);
        var cRange = document.getElementById(range);
        var cSpan = document.createElement("span");
        if (showRange) {
            cContainer.insertBefore(cSpan, cContainer.childNodes[0]);
            cSpan.style.position = "absolute";
            cSpan.style.width = "26px";
            cSpan.style.height = "21px";
            cSpan.style.background = color;
            cSpan.style.borderRadius = "20px";
            cSpan.style.marginTop = "-20px";
            cSpan.style.color = "white";
            cSpan.style.fontSize = "12px";
            cSpan.style.opacity = "0";
            cSpan.style.transition = "opacity 0.5s";
            cSpan.style.textAlign = "center";
            cSpan.style.paddingTop = "5px";
            var rangeChange = cRange.clientWidth * cRange.value / 100 - 12;
            cSpan.textContent = cRange.value;
            cSpan.style.marginLeft = rangeChange + "px";
        }
        cRange.setAttribute("class", "range");
        cRange.setAttribute("type", "range");
        cRange.setAttribute("id", range + "_range");
        cRange.onchange = function () {
            changeRange(this.value);
        };
        cRange.oninput = function () {
            changeRange(this.value);
        };
    } else {
        var errorExplous = "Explous Input Range - Error when assigning value to some variable: ";
        if (!container) {
            console.log(errorExplous + "container");
        }
        if (!range) {
            console.log(errorExplous + "range");
        }
        if (!color) {
            console.log(errorExplous + "color");
        }
        if (!background) {
            console.log(errorExplous + "background");
        }
    }
};

exports.default = InputRange;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Loader = {};

Loader.init = function (_ref) {
    var container = _ref.container,
        type = _ref.type,
        color = _ref.color,
        size = _ref.size,
        border = _ref.border;

    if (type == "spinner") {
        var sizeSpinner;
        size = size.replace("px", "");
        if (size <= 10) {
            sizeSpinner = -0.8;
        }
        if (size > 10) {
            sizeSpinner = -0;
        }
        if (size > 20) {
            sizeSpinner = 0.6;
        }
        if (size > 30) {
            sizeSpinner = 0.8;
        }
        if (size > 40) {
            sizeSpinner = 1;
        }
        if (size > 50) {
            sizeSpinner = 1.2;
        }
        if (size > 60) {
            sizeSpinner = 1.4;
        }
        if (size > 70) {
            sizeSpinner = 1.6;
        }
        if (size > 80) {
            sizeSpinner = 1.8;
        }
        if (size > 90) {
            sizeSpinner = 2;
        }
        if (size > 100) {
            sizeSpinner = 2.2;
        }
        if (size > 110) {
            sizeSpinner = 2.5;
        }
        if (size > 120) {
            sizeSpinner = 2.6;
        }
        if (size > 130) {
            sizeSpinner = 2.8;
        }
        if (size > 140) {
            sizeSpinner = 3;
        }
    }
    if (container && type && color && size, border) {
        var css = '.show {display: block;} .ring {display: inline-block;position: relative;width: ' + size + ';height: ' + size + ';}.ring div {box-sizing: border-box;display: block;position: absolute;width:' + size + ';height: ' + size + ';margin: 6px;border: ' + border + ' solid ' + color + ';border-radius: 50%;animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color: ' + color + ' transparent transparent transparent;}.ring div:nth-child(1) {animation-delay: -0.45s;}.ring div:nth-child(2) {animation-delay: -0.3s;}.ring div:nth-child(3) {animation-delay: -0.15s;}@keyframes ring {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}.dual-ring {display: inline-block;width: ' + size + ';height: ' + size + ';}.dual-ring:after {content: " ";display: block;width: ' + size + ';height: ' + size + ';margin: 1px;border-radius: 50%;border: ' + border + ' solid ' + color + ';border-color: ' + color + ' transparent ' + color + ' transparent;animation: dual-ring 1.2s linear infinite;}@keyframes dual-ring {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}.spinner {color: official;display: inline-block;position: relative;width: ' + size * 3 + 'px;height: ' + size * 3 + 'px;}.spinner div {margin-top:' + (size * 1.4 - 24) + 'px;margin-left:' + size * 0.8 + 'px;transform-origin: 32px 32px;animation: spinner 1.2s linear infinite;}.spinner div:after {content: " ";display: block;position: absolute;top: ' + -size * sizeSpinner + 'px;left: 28px;width: ' + size / 3 + 'px;height: ' + size + 'px;border-radius: 20%;background: ' + color + ';}.spinner div:nth-child(1) {transform: rotate(0deg);animation-delay: -1.1s;}.spinner div:nth-child(2) {transform: rotate(30deg);animation-delay: -1s;}.spinner div:nth-child(3) {transform: rotate(60deg);animation-delay: -0.9s;}.spinner div:nth-child(4) {transform: rotate(90deg);animation-delay: -0.8s;}.spinner div:nth-child(5) {transform: rotate(120deg);animation-delay: -0.7s;}.spinner div:nth-child(6) {transform: rotate(150deg);animation-delay: -0.6s;}.spinner div:nth-child(7) {transform: rotate(180deg);animation-delay: -0.5s;}.spinner div:nth-child(8) {transform: rotate(210deg);animation-delay: -0.4s;}.spinner div:nth-child(9) {transform: rotate(240deg);animation-delay: -0.3s;}.spinner div:nth-child(10) {transform: rotate(270deg);animation-delay: -0.2s;}.spinner div:nth-child(11) {transform: rotate(300deg);animation-delay: -0.1s;}.spinner div:nth-child(12) {transform: rotate(330deg);animation-delay: 0s;}@keyframes spinner {0% {opacity: 1;}100% {opacity: 0;}}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        var lContainer = document.getElementById(container);
        if (type == "ring") {
            lContainer.setAttribute("class", "ring");
            var div1 = document.createElement("div");
            lContainer.appendChild(div1);
            var div2 = document.createElement("div");
            lContainer.appendChild(div2);
            var div3 = document.createElement("div");
            lContainer.appendChild(div3);
            var div4 = document.createElement("div");
            lContainer.appendChild(div4);
        }

        if (type == "dual-ring") {
            lContainer.setAttribute("class", "dual-ring");
        }

        if (type == "spinner") {
            lContainer.setAttribute("class", "spinner");
            var _div = document.createElement("div");
            lContainer.appendChild(_div);
            var _div2 = document.createElement("div");
            lContainer.appendChild(_div2);
            var _div3 = document.createElement("div");
            lContainer.appendChild(_div3);
            var _div4 = document.createElement("div");
            lContainer.appendChild(_div4);
            var div5 = document.createElement("div");
            lContainer.appendChild(div5);
            var div6 = document.createElement("div");
            lContainer.appendChild(div6);
            var div7 = document.createElement("div");
            lContainer.appendChild(div7);
            var div8 = document.createElement("div");
            lContainer.appendChild(div8);
            var div9 = document.createElement("div");
            lContainer.appendChild(div9);
            var div10 = document.createElement("div");
            lContainer.appendChild(div10);
            var div11 = document.createElement("div");
            lContainer.appendChild(div11);
            var div12 = document.createElement("div");
            lContainer.appendChild(div12);
        }
    } else {
        var errorExplous = "Explous Loader - Error when assigning value to some variable: ";
        if (!container) {
            console.log(errorExplous + "container");
        }
        if (!type) {
            console.log(errorExplous + "type");
        }
        if (!color) {
            console.log(errorExplous + "color");
        }
        if (!size) {
            console.log(errorExplous + "size");
        }
        if (!border) {
            console.log(errorExplous + "border");
        }
    }
};

exports.default = Loader;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Popup = {};

Popup.init = function (_ref) {
    var container = _ref.container,
        id = _ref.id;

    if (container && id) {
        var pContainer = document.getElementById(container);
        pContainer.style.display = "none";
        var cover = document.createElement("div");
        cover.setAttribute("id", container + "_cover");
        cover.style.position = "fixed";
        cover.style.top = "0";
        cover.style.left = "0";
        cover.style.background = "black";
        cover.style.opacity = "0.43";
        cover.style.zIndex = "100";
        cover.style.width = "100%";
        cover.style.height = "100vh";
        pContainer.appendChild(cover);

        var pId = document.getElementById(id);
        pId.style.zIndex = "101";
        pId.style.position = "fixed";
        pId.style.top = "0";
        pId.style.left = "0";

        Popup.open = function (id) {
            document.getElementById(id).style.display = "block";
        };

        Popup.close = function (id) {
            document.getElementById(id).style.display = "none";
        };
    } else {
        var errorExplous = "Explous Popup - Error when assigning value to some variable: ";
        if (!container) {
            console.log(errorExplous + "container");
        }
        if (!id) {
            console.log(errorExplous + "id");
        }
    }
};

exports.default = Popup;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var RadioButton = {};

RadioButton.init = function (_ref) {
    var container = _ref.container,
        radioButton = _ref.radioButton,
        text = _ref.text,
        color = _ref.color;

    if (container && radioButton && text && color) {
        var radioButtonChange = function radioButtonChange() {
            rRadioButton.innerHTML = '<style>[type="radio"]:checked + label:before,[type="radio"]:not(:checked) + label:after{background:' + color + ' !important;border: 1px solid ' + color + ';}</style>';
            rRadioButton.innerHTML = '<style>[type="radio"]:checked + label:before,[type="radio"]:checked + label:before{background:' + color + ' !important;border: 1px solid ' + color + ' !important;}</style>';
        };

        var css = '[type="radio"]:checked,[type="radio"]:not(:checked) {position: absolute;display: none;}[type="radio"]:checked + label,[type="radio"]:not(:checked) + label{position: relative;padding-left: 28px;cursor: pointer;}[type="radio"]:checked + label:before,[type="radio"]:not(:checked) + label:before {content: "";position: absolute;left: 0;top: -3px;width: 20px;height: 20px;border: 1px solid #535760;border-radius: 100%;background: #fff;}[type="radio"]:checked + label:after,[type="radio"]:not(:checked) + label:after {content: "";width: 10px;height: 10px;background: #ffffff;position: absolute;top: 3px;left: 6px;border-radius: 100%;-webkit-transition: all 0.3s ease;transition: all 0.3s ease;}[type="radio"]:not(:checked) + label:after {opacity: 0;-webkit-transform: scale(0);transform: scale(0);}[type="radio"]:checked + label:after {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}.radio-buttons{font-size: 13px;}@media screen and (max-width: 768px) {.radio-buttons{display: table;margin-top: 10px;}}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        var rContainer = document.getElementById(container);
        rContainer.style.height = "22px";
        var rRadioButton = document.getElementById(radioButton);
        rRadioButton.setAttribute("type", "radio");
        rRadioButton.onchange = function () {
            radioButtonChange();
        };

        var inputLabel = document.createElement("label");
        inputLabel.setAttribute("class", "radio-buttons");
        inputLabel.setAttribute("id", radioButton + "_label");

        rContainer.appendChild(inputLabel);
        inputLabel.innerHTML = text;
        inputLabel.htmlFor = radioButton;
    } else {
        var errorExplous = "Explous Radio Button - Error when assigning value to some variable: ";
        if (!container) {
            console.log(errorExplous + "container");
        }
        if (!radioButton) {
            console.log(errorExplous + "radioButton");
        }
        if (!text) {
            console.log(errorExplous + "text");
        }
        if (!color) {
            console.log(errorExplous + "color");
        }
    }
};

exports.default = RadioButton;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var SlideToggle = {};

SlideToggle.init = function (_ref) {
    var container = _ref.container,
        slideToggle = _ref.slideToggle,
        color = _ref.color,
        background = _ref.background;

    if (container && slideToggle && color && background) {
        var css = '.slide-toggle-switch {position: relative;display: inline-block;width: 54px;height: 28px;}.slide-toggle-switch input {display:none;}.slide-toggle-slider {position: absolute;cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: #bfbfbf4f;border: 1px solid #E6E6E6;-webkit-transition: .4s;transition: .4s;}.slide-toggle-slider:before {position: absolute;content: "";height: 24px;width: 24px;left: 1px;bottom: 1px;background-color: white;-webkit-transition: .4s;transition: .4s;}input:checked + .slide-toggle-slider {background-color: ' + background + ';border: 1px solid ' + color + ';}input:checked + .slide-toggle-slider:before {-webkit-transform: translateX(26px);-ms-transform: translateX(26px);transform: translateX(26px);background-color: ' + color + ';} .slide-toggle-slider.slide-toggle-round {border-radius: 28px;}.slide-toggle-slider.slide-toggle-round:before {border-radius: 50%;}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        var sContainer = document.getElementById(container);
        var sSlideToggle = document.getElementById(slideToggle);
        sContainer.setAttribute("class", "slide-toggle-switch");
        sSlideToggle.setAttribute("type", "checkbox");

        var slideToggleLabel = document.createElement("span");
        slideToggleLabel.setAttribute("class", "slide-toggle-slider slide-toggle-round");
        slideToggleLabel.setAttribute("id", slideToggle + "_span");
        sContainer.appendChild(slideToggleLabel);
    } else {
        var errorExplous = "Explous Slide Toggle - Error when assigning value to some variable: ";
        if (!container) {
            console.log(errorExplous + "container");
        }
        if (!slideToggle) {
            console.log(errorExplous + "slideToggle");
        }
        if (!color) {
            console.log(errorExplous + "color");
        }
        if (!background) {
            console.log(errorExplous + "background");
        }
    }
};

exports.default = SlideToggle;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Snackbar = {};

Snackbar.init = function (_ref) {
  var container = _ref.container,
      content = _ref.content,
      background = _ref.background,
      color = _ref.color,
      borderColor = _ref.borderColor,
      border = _ref.border;

  if (container && content && background && color && borderColor && border) {
    var css = '#' + container + '{visibility: hidden;position: fixed;left: 0;bottom: 0;width: 100%;z-index: 102;}.' + container + '-snackbar{width: auto;display: table;margin: 0 auto;}.' + container + '-content{margin-left: 45px;margin-right: 45px;margin-bottom: 6px;margin-top: 6px;font-size: 16px;}#' + container + '.show {visibility: visible;-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;animation: fadein 0.5s, fadeout 0.5s 2.5s;}@-webkit-keyframes fadein {from {bottom: -70px; opacity: 0;} to {bottom: 0; opacity: 1;}}@keyframes fadein {from {bottom: -70px; opacity: 0;}to {bottom: 0; opacity: 1;}}@-webkit-keyframes fadeout {from {bottom: 0; opacity: 1;} to {bottom: -70px; opacity: 0;}}@keyframes fadeout {from {bottom: 0; opacity: 1;}to {bottom: -70px; opacity: 0;}}';
    var style = document.createElement('style');
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);

    var sContainer = document.getElementById(container);
    sContainer.setAttribute("class", container);

    var snackbar = document.createElement("div");
    snackbar.setAttribute("id", "snackbar");
    snackbar.setAttribute("class", container + "_snackbar");
    sContainer.appendChild(snackbar);
    snackbar.style.background = background;
    snackbar.style.width = "auto";
    snackbar.style.display = "table";
    snackbar.style.margin = "0 auto";
    snackbar.style.color = color;
    snackbar.style.border = '1px solid ' + borderColor;
    snackbar.style.borderTopLeftRadius = border;
    snackbar.style.borderTopRightRadius = border;

    var snackbarContent = document.createElement("div");
    snackbarContent.setAttribute("id", container + "_content");
    snackbarContent.setAttribute("class", container + "_content");
    snackbarContent.style.padding = "4px 14px";
    snackbar.appendChild(snackbarContent);
    snackbarContent.innerHTML = content;
  } else {
    var errorExplous = "Explous Snackbar - Error when assigning value to some variable: ";
    if (!container) {
      console.log(errorExplous + "container");
    }
    if (!content) {
      console.log(errorExplous + "content");
    }
    if (!background) {
      console.log(errorExplous + "background");
    }
    if (!color) {
      console.log(errorExplous + "color");
    }
    if (!borderColor) {
      console.log(errorExplous + "borderColor");
    }
    if (!border) {
      console.log(errorExplous + "border");
    }
  }
};

Snackbar.show = function (id, time) {
  var x = document.getElementById(id);
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, time);
};

exports.default = Snackbar;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Table = {};

var ids = [];
var containers = [];
var types = [];
var showResults = [];
var loadResults = [];
var loadResultsInit = [];

var fontFamily = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif";
var fontStyle = "normal";
var color = "#333333";

Table.init = function (_ref) {
  var container = _ref.container,
      id = _ref.id,
      type = _ref.type,
      showResult = _ref.showResult,
      loadResult = _ref.loadResult,
      _ref$head = _ref.head,
      head = _ref$head === undefined ? [] : _ref$head,
      colorHead = _ref.colorHead,
      backgroundHead = _ref.backgroundHead,
      colorBody = _ref.colorBody,
      _ref$body = _ref.body,
      body = _ref$body === undefined ? [] : _ref$body,
      backgroundBody = _ref.backgroundBody,
      _ref$textAlignBody = _ref.textAlignBody,
      textAlignBody = _ref$textAlignBody === undefined ? [] : _ref$textAlignBody,
      _ref$iconOrderBy = _ref.iconOrderBy,
      iconOrderBy = _ref$iconOrderBy === undefined ? false : _ref$iconOrderBy,
      _ref$orderByNumber = _ref.orderByNumber,
      orderByNumber = _ref$orderByNumber === undefined ? [] : _ref$orderByNumber,
      pipe = _ref.pipe,
      pipeType = _ref.pipeType,
      headFixed = _ref.headFixed;

  if (container && id && type && showResult, head, colorHead, body, textAlignBody) {
    var page;
    var pageNext;
    var pagePrev;
    var pagePrevOrderBy;
    var css;
    var style;
    var x;
    var filter;
    var x;
    var x;
    var x;
    var y;
    var pages;
    var text;
    var text;
    var text;
    var text;
    var text;
    var x;
    var x;
    var x;
    var x;

    (function () {
      var provisionalShowTablePagination = function provisionalShowTablePagination() {
        var table = document.getElementById(id);
        var tr = table.getElementsByTagName("tbody")[0];
        tr = tr.getElementsByTagName("tr");
        for (var x in tr) {
          if (document.getElementById("tr_" + id + "_" + x)) {
            document.getElementById("tr_" + id + "_" + x).style.display = "table-row";
          }
        }
        setTimeout(function () {
          for (var x = 2; x <= tr.length + 1; x++) {
            if (document.getElementById(id).getElementsByTagName("tr")[x]) {
              document.getElementById(id).getElementsByTagName("tr")[x].setAttribute("id", "tr_" + id + "_" + (x - 2));
            }
          }
          for (var x in tr) {
            if (document.getElementById("tr_" + id + "_" + x)) {
              document.getElementById("tr_" + id + "_" + x).style.display = "none";
            }
          }
          var x;
          var y;
          if (pagePrevOrderBy) {
            x = page * showResult;
            y = (page + 1) * showResult - 1;
          } else {
            x = (page - 1) * showResult;
            y = page * showResult - 1;
          }
          while (x <= y) {
            if (document.getElementById("tr_" + id + "_" + x)) {
              document.getElementById("tr_" + id + "_" + x).style.display = "table-row";
            }
            x++;
          }
          onResize();
        }, 10);
      };

      var provisionalShowTableScrolling = function provisionalShowTableScrolling() {
        for (var x in body) {
          if (document.getElementById("tr_" + id + "_" + x)) {
            document.getElementById("tr_" + id + "_" + x).style.display = "table-row";
          }
        }
        setTimeout(function () {
          for (var x = 2; x <= body.length + 1; x++) {
            if (document.getElementById(id).getElementsByTagName("tr")[x]) {
              document.getElementById(id).getElementsByTagName("tr")[x].setAttribute("id", "tr_" + id + "_" + (x - 2));
            }
          }
          for (var x in body) {
            if (document.getElementById("tr_" + id + "_" + x)) {
              document.getElementById("tr_" + id + "_" + x).style.display = "none";
            }
          }
          for (x in types) {
            if (types[x] == "scrolling") {
              for (var y = 0; y < showResults[x]; y++) {
                if (document.getElementById("tr_" + ids[x] + "_" + y)) {
                  document.getElementById("tr_" + ids[x] + "_" + y).style.display = "table-row";
                }
              }
            }
          }
          onResize();
        }, 10);
      };

      var sortTable = function sortTable(n) {
        if (orderByNumber.length > 0) {
          if (type == "pagination") {
            provisionalShowTablePagination();
          }
          if (type == "scrolling") {
            provisionalShowTableScrolling();
          }
          var found = orderByNumber.find(function (element) {
            return element > n;
          });

          var table,
              rows,
              switching,
              i,
              x,
              y,
              shouldSwitch,
              dir,
              switchcount = 0;
          table = document.getElementById(id).getElementsByTagName("tbody")[0];
          //table = $("#"+id).find("tbody");
          switching = true;
          //Set the sorting direction to ascending:
          dir = "asc";
          /*Make a loop that will continue until
          no switching has been done:*/
          while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 0; i < rows.length - 1; i++) {
              //start by saying there should be no switching:
              shouldSwitch = false;
              /*Get the two elements you want to compare,
              one from current row and one from the next:*/
              x = rows[i].getElementsByTagName("TD")[n];
              y = rows[i + 1].getElementsByTagName("TD")[n];
              /*check if the two rows should switch place,
              based on the direction, asc or desc:*/
              if (dir == "asc") {
                if (found == n + 1) {
                  if (Number(x.innerHTML) > Number(y.innerHTML)) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                  }
                } else {
                  if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                  }
                }
              } else if (dir == "desc") {
                if (found == n + 1) {
                  if (Number(x.innerHTML) < Number(y.innerHTML)) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                  }
                } else {
                  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                  }
                }
              }
            }
            if (shouldSwitch) {
              /*If a switch has been marked, make the switch
              and mark that a switch has been done:*/
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
              //Each time a switch is done, increase this count by 1:
              switchcount++;
            } else {
              /*If no switching has been done AND the direction is "asc",
              set the direction to "desc" and run the while loop again.*/
              if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
              }
            }
          }
        }
      };

      var changePage = function changePage(data) {
        var table = document.getElementById(id);
        var tr = table.getElementsByTagName("tbody")[0];
        tr = tr.getElementsByTagName("tr");
        var pages = Math.ceil(tr.length / showResult);
        if (data == "next" && page < pages && tr.length > showResult) {
          if (pagePrev) {
            pagePrevOrderBy = false;
            page++;
            pagePrev = false;
          }
          for (var x in tr) {
            if (document.getElementById("tr_" + id + "_" + x)) {
              document.getElementById("tr_" + id + "_" + x).style.display = "none";
            }
          }
          var x = page * showResult;
          var x2 = x;
          page++;
          pageNext = true;
          var y = page * showResult - 1;
          while (x <= y) {
            if (document.getElementById("tr_" + id + "_" + x)) {
              document.getElementById("tr_" + id + "_" + x).style.display = "table-row";
            } else {
              y = x;
            }
            x++;
          }
          if (y < tr.length) {
            y++;
          }
          var text = document.createTextNode("Page: " + page + " of " + pages);
          document.getElementById("pages_" + id).innerHTML = "";
          document.getElementById("pages_" + id).appendChild(text);

          var text = document.createTextNode(x2 + 1 + "-" + y);
          document.getElementById("results_" + id).innerHTML = "";
          document.getElementById("results_" + id).appendChild(text);
        }
        if (data == "prev" && page > 0) {
          if (pageNext) {
            page--;
            pageNext = false;
          }
          for (var x in tr) {
            if (document.getElementById("tr_" + id + "_" + x)) {
              document.getElementById("tr_" + id + "_" + x).style.display = "none";
            }
          }
          var x = page * showResult - 1;
          page--;
          pagePrev = true;
          pagePrevOrderBy = true;
          var y = page * showResult;
          var y2 = y;
          while (y <= x) {
            if (document.getElementById("tr_" + id + "_" + y)) {
              document.getElementById("tr_" + id + "_" + y).style.display = "table-row";
            }
            y++;
          }
          var text = document.createTextNode("Page: " + (page + 1) + " of " + pages);
          document.getElementById("pages_" + id).innerHTML = "";
          document.getElementById("pages_" + id).appendChild(text);

          var text = document.createTextNode(y2 + 1 + "-" + (x + 1));
          document.getElementById("results_" + id).innerHTML = "";
          document.getElementById("results_" + id).appendChild(text);
        }
        onResize();
      };

      var onResize = function onResize() {
        for (y in ids) {
          document.getElementById("head-new_" + ids[y]).style.width = document.getElementById("head_" + ids[y]).offsetWidth + "px";
          for (var x = 0; x < document.getElementById("head_" + ids[y]).getElementsByTagName("th").length; x++) {
            document.getElementById("head-new_" + ids[y]).getElementsByTagName("th")[x].style.width = document.getElementById("head_" + ids[y]).getElementsByTagName("th")[x].offsetWidth - 21 + "px";
          }
        }
      };

      var inputChange = function inputChange(filter) {
        if (type == "pagination") {
          while (page > 0) {
            changePage("prev");
          }
        }
        var position, table, tr, td, i, txtValue;
        var word = filter;
        filter = filter.replace(container + "_", '');
        table = document.getElementById(id);
        for (var x in head) {
          if (head[x] == filter) {
            position = x;
          }
        }
        tr = table.getElementsByTagName("tbody")[0];
        while (tr.hasChildNodes()) {
          tr.removeChild(tr.firstChild);
        }

        word = document.getElementById(word).value.toUpperCase();

        for (i = 0; i < body.length; i++) {
          td = body[i][position];
          if (td) {
            txtValue = td;
            if (txtValue.toUpperCase().indexOf(word) > -1) {
              var _tableBodyTr = document.createElement("tr");
              _tableBodyTr.style.fontSize = "16px";
              _tableBodyTr.style.color = colorBody;
              _tableBodyTr.style.background = backgroundBody;
              _tableBodyTr.setAttribute("id", "tr_" + id + "_" + x);
              document.getElementById("body_" + id).appendChild(_tableBodyTr);
              for (var x in body[i]) {
                var _tableBodyTd = document.createElement("td");
                var _tableBodyTdDiv = document.createElement("div");
                var _text5 = document.createTextNode(body[i][x]);
                _tableBodyTd.style.padding = "20px 10px";
                _tableBodyTd.style.borderLeft = "1px solid #cccccc";
                if (textAlignBody[x]) {
                  _tableBodyTd.style.textAlign = textAlignBody[x];
                }
                _tableBodyTd.appendChild(_tableBodyTdDiv);
                _tableBodyTdDiv.style.fontWeight = "400";
                _tableBodyTdDiv.appendChild(_text5);
                _tableBodyTr.appendChild(_tableBodyTd);
              }
            }
          }
        }
        tr = table.getElementsByTagName("tbody")[0];
        tr = tr.getElementsByTagName("tr");
        if (type == "pagination") {
          var pages = Math.ceil(tr.length / showResult);
          var text = document.createTextNode("Page: " + page + " of " + pages);
          document.getElementById("pages_" + id).innerHTML = "";
          document.getElementById("pages_" + id).appendChild(text);
          document.getElementById("total_" + id).innerHTML = "";
          if (showResult > tr.length) {
            var text = document.createTextNode(page + "-" + tr.length);
            document.getElementById("results_" + id).innerHTML = "";
            document.getElementById("results_" + id).appendChild(text);
          } else {
            var text = document.createTextNode(page + "-" + showResult);
            document.getElementById("results_" + id).innerHTML = "";
            document.getElementById("results_" + id).appendChild(text);
          }
          document.getElementById("total_" + id).appendChild(document.createTextNode(" of " + tr.length));
        }

        setTimeout(function () {
          provisionalShowTablePagination();
        }, 10);
      };

      var focusInput = function focusInput(input) {
        if (pipeType == "material") {
          document.getElementById(input + "_title").style.marginTop = "-14px";
          document.getElementById(input + "_title").style.fontSize = "12px";
          document.getElementById(input + "_title").style.color = backgroundHead;
          document.getElementById(input).style.borderBottom = "2px solid " + backgroundHead;
        }
        if (pipeType == "traditional") {
          document.getElementById(input).style.border = "2px solid " + backgroundHead;
          document.getElementById(input).style.height = "20px";
        }
      };

      var focusoutInput = function focusoutInput(input) {
        if (pipeType == "traditional") {
          document.getElementById(input).style.border = "1px solid #6d6d6d";
          document.getElementById(input).style.height = "22px";
        }
        if (pipeType == "material") {
          if (document.getElementById(input).value == "") {
            document.getElementById(input + "_title").style.marginTop = "-2px";
            document.getElementById(input + "_title").style.fontSize = "18px";
          }
          document.getElementById(input + "_title").style.color = "#6d6d6d";
          document.getElementById(input).style.borderBottom = "1px solid #6d6d6d";
        }
      };

      ids.push(id);
      containers.push(container);
      types.push(type);
      showResults.push(showResult);
      loadResults.push(loadResult);
      loadResultsInit.push(loadResult);
      page = 1;
      pageNext = false;
      pagePrev = false;
      pagePrevOrderBy = false;
      css = '.' + container + '_inputs_div{margin-bottom: 0px;position:relative} tr:nth-child(odd) {background-color: #f2f2f2} th a.sort-by { padding-right: 18px;position: relative;}a.sort-by:before,a.sort-by:after {border: 5px solid transparent;content: "";display: block;height: 0;right: 5px;top: 50%;position: absolute;width: 0;}a.sort-by:before {border-bottom-color: ' + colorHead + ';margin-top: -12px;}a.sort-by:after {border-top-color: ' + colorHead + ';margin-top: 1px;}::-webkit-scrollbar {width: 6px;height: 6px;}::-webkit-scrollbar-track {background: #f2f2f2;}::-webkit-scrollbar-thumb {background: #cccccc; border-radius:6px}::-webkit-scrollbar-thumb:hover {background: #888888; }   @media screen and (max-width: 768px){.' + container + '_inputs_div{margin-bottom: 10px;}}';
      style = document.createElement('style');

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      document.getElementsByTagName('head')[0].appendChild(style);

      var tableContainer = document.getElementById(container);

      if (pipe) {
        var _loop = function _loop() {
          filter = pipe[x];

          var divPipe = document.createElement("div");
          divPipe.setAttribute("id", container + "_" + pipe[x] + "_div");
          var inputPipe = document.createElement("input");
          inputPipe.setAttribute("id", container + "_" + pipe[x]);
          inputPipe.onkeyup = function () {
            inputChange(inputPipe.id);
          };
          //inputPipe.onkeypress=function() { inputChange(inputPipe.id); };
          //inputPipe.onkeydown=function() { inputChange(inputPipe.id); };
          inputPipe.onpaste = function () {
            inputChange(inputPipe.id);
          };
          inputPipe.style.zIndex = "1";
          inputPipe.style.fontSize = "16px";
          inputPipe.style.position = "relative";
          inputPipe.style.transition = "all 0.1s ease 0.1s";
          inputPipe.style.width = "140px";
          inputPipe.style.outline = "none";
          inputPipe.style.border = "0px";
          inputPipe.style.background = "transparent";
          divPipe.style.float = "left";
          inputPipe.onfocus = function () {
            focusInput(this.id);
          };
          inputPipe.onblur = function () {
            focusoutInput(this.id);
          };
          if (pipeType == "traditional") {
            inputPipe.style.marginTop = "2px";
            inputPipe.style.marginBottom = "8px";
            inputPipe.style.paddingBottom = "2px";
            inputPipe.style.paddingTop = "2px";
            inputPipe.style.paddingLeft = "2px";
            inputPipe.style.marginRight = "20px";
            inputPipe.placeholder = pipe[x];
            inputPipe.style.height = "22px";
            inputPipe.style.border = "1px solid #6d6d6d";
          }
          var titleInput = document.createElement("div");
          if (pipeType == "material") {
            divPipe.setAttribute("class", container + "_inputs_div");
            inputPipe.style.border = "0px";
            inputPipe.style.borderBottom = "1px solid #6d6d6d";
            inputPipe.style.marginBottom = "8px";
            inputPipe.style.marginRight = "20px";
            titleInput.style.zIndex = "1";
            titleInput.style.fontSize = "18px";
            titleInput.style.transition = "all 0.15s ease 0.15s";
            titleInput.style.color = "#6d6d6d";
            titleInput.setAttribute("id", container + "_" + pipe[x] + "_title");
            titleInput.style.position = "absolute";
            titleInput.style.marginTop = "-2px";
            var _text = document.createTextNode(pipe[x]);
            titleInput.appendChild(_text);
          }
          tableContainer.appendChild(divPipe);
          divPipe.appendChild(titleInput);
          divPipe.appendChild(inputPipe);
        };

        for (x in pipe) {
          _loop();
        }
      }

      tableContainer.style.width = "100%";
      tableContainer.style.paddingTop = "18px";
      tableContainer.style.overflowX = "auto";
      if (tableContainer) {
        var table = document.createElement("table");
        var tableHead = document.createElement("thead");
        var tableHeadIndex = document.createElement("thead");
        var tableHeadTr = document.createElement("tr");
        var tableHeadTrIndex = document.createElement("tr");
        var tableBody = document.createElement("tbody");
        document.body.onresize = function () {
          onResize();
        };
        table.setAttribute("id", id);
        table.style.position = "relative";
        tableContainer.appendChild(table);
        tableHead.setAttribute("id", "head_" + id);
        table.appendChild(tableHead);
        tableHeadIndex.setAttribute("id", "head-new_" + id);
        if (!headFixed) {
          tableHeadIndex.style.display = "none";
        }
        table.appendChild(tableHeadIndex);
        tableHead.appendChild(tableHeadTr);
        tableHeadIndex.style.position = "absolute";
        tableHeadIndex.style.display = "none";
        tableBody.setAttribute("id", "body_" + id);
        table.appendChild(tableBody);

        for (x in head) {
          var tableHeadTh = document.createElement("th");
          var tableHeadThDiv = document.createElement("div");
          var tableHeadThDiv1 = document.createElement("div");
          var tableHeadThDiv2 = document.createElement("div");
          var tableHeadThDiv2Img = document.createElement("a");
          var _text2 = document.createTextNode(head[x]);
          tableHeadTh.style.cursor = "pointer";
          tableHeadTh.style.textAlign = "left";
          tableHeadTh.style.padding = "10px";
          tableHeadTh.style.borderLeft = "1px solid #cccccc";
          tableHeadTh.setAttribute("id", x);
          tableHeadTh.onclick = function () {
            sortTable(this.id);
          };
          tableHeadTh.appendChild(tableHeadThDiv);
          tableHeadThDiv.style.display = "flex";
          tableHeadThDiv.appendChild(tableHeadThDiv1);
          tableHeadThDiv1.style.fontWeight = "600";
          tableHeadThDiv1.style.flex = "auto";
          tableHeadThDiv1.appendChild(_text2);
          tableHeadThDiv.appendChild(tableHeadThDiv2);
          if (iconOrderBy) {
            tableHeadThDiv2Img.classList.add("sort-by");
          }
          tableHeadThDiv2.appendChild(tableHeadThDiv2Img);
          tableHeadTrIndex.style.fontSize = "16px";
          tableHeadTrIndex.style.color = colorHead;
          tableHeadTrIndex.style.background = backgroundHead;
          tableHeadTrIndex.appendChild(tableHeadTh);
        }

        for (x in head) {
          var _tableHeadTh = document.createElement("th");
          var _tableHeadThDiv = document.createElement("div");
          var _tableHeadThDiv2 = document.createElement("div");
          var _tableHeadThDiv3 = document.createElement("div");
          var _tableHeadThDiv2Img = document.createElement("a");
          var _text3 = document.createTextNode(head[x]);
          _tableHeadTh.style.cursor = "pointer";
          _tableHeadTh.style.textAlign = "left";
          _tableHeadTh.style.padding = "10px";
          _tableHeadTh.style.borderLeft = "1px solid #cccccc";
          _tableHeadTh.setAttribute("id", x);
          _tableHeadTh.onclick = function () {
            sortTable(this.id);
          };
          _tableHeadTh.appendChild(_tableHeadThDiv);
          _tableHeadThDiv.style.display = "flex";
          _tableHeadThDiv.appendChild(_tableHeadThDiv2);
          _tableHeadThDiv2.style.fontWeight = "600";
          _tableHeadThDiv2.style.flex = "auto";
          _tableHeadThDiv2.appendChild(_text3);
          _tableHeadThDiv.appendChild(_tableHeadThDiv3);
          if (iconOrderBy) {
            _tableHeadThDiv2Img.classList.add("sort-by");
          }
          _tableHeadThDiv3.appendChild(_tableHeadThDiv2Img);
          tableHeadTr.style.fontSize = "16px";
          tableHeadTr.style.color = colorHead;
          tableHeadTr.style.background = backgroundHead;
          tableHeadTr.appendChild(_tableHeadTh);
        }

        for (x in body) {
          var tableBodyTr = document.createElement("tr");
          tableBody.appendChild(tableBodyTr);
          for (y in body[x]) {
            var tableBodyTd = document.createElement("td");
            var tableBodyTdDiv = document.createElement("div");
            var _text4 = document.createTextNode(body[x][y]);
            tableBodyTd.style.padding = "20px 10px";
            tableBodyTd.style.borderLeft = "1px solid #cccccc";
            if (textAlignBody[y]) {
              tableBodyTd.style.textAlign = textAlignBody[y];
            }
            tableBodyTd.appendChild(tableBodyTdDiv);
            tableBodyTdDiv.style.fontWeight = "400";
            tableBodyTr.style.fontSize = "16px";
            tableBodyTdDiv.appendChild(_text4);
            tableBodyTr.style.color = colorBody;
            tableBodyTr.style.background = backgroundBody;
            tableBodyTr.setAttribute("id", "tr_" + id + "_" + x);
            tableBodyTr.appendChild(tableBodyTd);
          }
        }

        table.style.borderSpacing = 0;
        table.style.border = "1px solid #ddd";
        table.style.borderLeft = "0px solid #fff";
        table.style.width = "calc(100%)";
        tableContainer.style.fontFamily = fontFamily;
        tableContainer.style.fontStyle = fontStyle;
        tableContainer.style.color = color;
        table.appendChild(tableBody);

        tableHeadIndex.style.width = tableHead.offsetWidth + "px";
        tableHeadIndex.appendChild(tableHeadTrIndex);

        if (type == "pagination") {
          var paginator = document.createElement("div");
          tableContainer.appendChild(paginator);
          var paginatorDiv1 = document.createElement("div");
          paginatorDiv1.style.padding = "2px";
          paginatorDiv1.style.marginTop = "6px";
          paginatorDiv1.style.color = "#333333";
          paginatorDiv1.style.fontSize = "16px";
          paginatorDiv1.style.float = "left";
          pages = Math.ceil(body.length / showResult);

          paginatorDiv1.setAttribute("id", "pages_" + id);
          text = document.createTextNode("Page: " + page + " of " + pages);

          paginatorDiv1.appendChild(text);
          paginator.appendChild(paginatorDiv1);
          var paginatorDiv2 = document.createElement("div");
          paginatorDiv2.style.padding = "2px";
          paginatorDiv2.style.marginTop = "6px";
          paginatorDiv2.style.color = "#333333";
          paginatorDiv2.style.fontSize = "16px";
          paginatorDiv2.style.float = "right";
          paginatorDiv2.style.display = "flex";
          paginator.appendChild(paginatorDiv2);
          var paginatorDiv2_1 = document.createElement("div");
          paginatorDiv2_1.style.marginTop = "4px";
          paginatorDiv2_1.style.paddingLeft = "4px";
          paginatorDiv2_1.style.paddingRight = "4px";
          paginatorDiv2_1.setAttribute("id", "results_" + id);
          text = document.createTextNode(page + "-" + showResult);

          paginatorDiv2_1.appendChild(text);
          paginatorDiv2.appendChild(paginatorDiv2_1);
          var paginatorDiv2_2 = document.createElement("div");
          paginatorDiv2_2.style.marginTop = "4px";
          paginatorDiv2_2.style.paddingLeft = "4px";
          paginatorDiv2_2.style.paddingRight = "4px";
          paginatorDiv2_2.setAttribute("id", "total_" + id);
          text = document.createTextNode(" of " + body.length);

          paginatorDiv2_2.appendChild(text);
          paginatorDiv2.appendChild(paginatorDiv2_2);
          var paginatorDiv2_3 = document.createElement("div");
          paginatorDiv2_3.style.marginRight = "8px";
          paginatorDiv2_3.style.marginLeft = "8px";
          paginatorDiv2_3.style.cursor = "pointer";
          paginatorDiv2_3.style.border = "1px solid #cccccc";
          paginatorDiv2_3.style.padding = "1px";
          paginatorDiv2_3.style.width = "24px";
          paginatorDiv2_3.style.height = "24px";
          paginatorDiv2_3.style.color = "#cccccc";
          paginatorDiv2_3.style.textAlign = "center";
          paginatorDiv2.appendChild(paginatorDiv2_3);
          var paginatorDiv2_3_1 = document.createElement("div");
          paginatorDiv2_3_1.style.fontSize = "24px";
          paginatorDiv2_3_1.style.marginTop = "-4px";
          text = document.createTextNode("<");

          paginatorDiv2_3_1.appendChild(text);
          paginatorDiv2_3.onclick = function () {
            changePage("prev");
          };
          paginatorDiv2_3.appendChild(paginatorDiv2_3_1);
          var paginatorDiv2_4 = document.createElement("div");
          paginatorDiv2_4.style.marginRight = "8px";
          paginatorDiv2_4.style.marginLeft = "8px";
          paginatorDiv2_4.style.cursor = "pointer";
          paginatorDiv2_4.style.border = "1px solid #cccccc";
          paginatorDiv2_4.style.padding = "1px";
          paginatorDiv2_4.style.width = "24px";
          paginatorDiv2_4.style.height = "24px";
          paginatorDiv2_4.style.color = "#cccccc";
          paginatorDiv2_4.style.textAlign = "center";
          paginatorDiv2.appendChild(paginatorDiv2_4);
          var paginatorDiv2_3_2 = document.createElement("div");
          paginatorDiv2_3_2.style.fontSize = "24px";
          paginatorDiv2_3_2.style.marginTop = "-4px";
          text = document.createTextNode(">");

          paginatorDiv2_3_2.appendChild(text);
          paginatorDiv2_4.onclick = function () {
            changePage("next");
          };
          paginatorDiv2_4.appendChild(paginatorDiv2_3_2);

          for (x in body) {
            if (x >= showResult) {
              document.getElementById("tr_" + id + "_" + x).style.display = "none";
            }
          }
        }

        if (type == "scrolling") {
          for (x in body) {
            document.getElementById("tr_" + id + "_" + x).style.display = "none";
          }
          for (x = 0; x < showResult; x++) {
            document.getElementById("tr_" + id + "_" + x).style.display = "table-row";
          }
        }

        for (x = 0; x < document.getElementById("head_" + id).getElementsByTagName("th").length; x++) {
          document.getElementById("head-new_" + id).getElementsByTagName("th")[x].style.width = document.getElementById("head_" + id).getElementsByTagName("th")[x].offsetWidth - 21 + "px";
        }
      } else {
        console.log("Undefined table container");
      }

      window.onscroll = function (event) {
        for (x in ids) {
          if (document.scrollingElement.scrollTop > document.getElementById(ids[x]).offsetTop) {
            if (headFixed) {
              document.getElementById("head-new_" + ids[x]).style.display = "block";
            }
            var scrollBody = document.scrollingElement.scrollTop;
            var scrollHead = document.getElementById("head-new_" + ids[x]).offsetHeight;
            var scrollPosition = document.getElementById(ids[x]).offsetTop + 1;
            var parent = 0;
            if (document.getElementById(containers[x]).offsetParent) {
              parent = document.getElementById(containers[x]).offsetParent.offsetTop;
            }
            var detectEnd = scrollBody - document.getElementById(ids[x]).offsetTop + document.getElementById("head_" + ids[x]).offsetHeight;
            if (document.getElementById(ids[x]).offsetHeight + parent >= detectEnd) {
              document.getElementById("head-new_" + ids[x]).style.marginTop = scrollBody - scrollHead - scrollPosition - parent + "px";
              if (-scrollHead > scrollBody - scrollHead - scrollPosition - parent) {
                document.getElementById("head-new_" + ids[x]).style.marginTop = -scrollHead + "px";
              }
            }
          } else {
            document.getElementById("head-new_" + ids[x]).style.display = "none";
          }
        }

        var totalTrs2 = [];
        for (x in types) {
          var totalTrs1 = 0;
          totalTrs2.push(0);
          if (types[x] == "scrolling") {
            var scrollBody = document.scrollingElement.scrollTop;
            var scrollPosition = document.getElementById(ids[x]).offsetTop + 1;
            for (var y = 0; y < loadResults[x]; y++) {
              if (document.getElementById("tr_" + ids[x] + "_" + y)) {
                totalTrs1 = totalTrs1 + document.getElementById("tr_" + ids[x] + "_" + y).offsetHeight;
              }
            }
            for (var y = 0; y < showResults[x] - loadResults[x]; y++) {
              if (document.getElementById("tr_" + ids[x] + "_" + y)) {
                totalTrs2[x] = totalTrs2[x] + document.getElementById("tr_" + ids[x] + "_" + y).offsetHeight;
              }
            }
            if (totalTrs1 + scrollBody > totalTrs2[x] + scrollPosition) {
              showResults[x] = showResults[x] + loadResultsInit[x];
              for (var y = 0; y < showResults[x]; y++) {
                if (document.getElementById("tr_" + ids[x] + "_" + y)) {
                  document.getElementById("tr_" + ids[x] + "_" + y).style.display = "table-row";
                }
              }
            }
          }
        }
      };
    })();
  } else {
    container && id && type && showResult, head, colorHead, body, textAlignBody, headFixed;
    var errorExplous = "Explous Button - Error when assigning value to some variable: ";
    if (!container) {
      console.log(errorExplous + "container");
    }
    if (!id) {
      console.log(errorExplous + "id");
    }
    if (!type) {
      console.log(errorExplous + "type");
    }
    if (!showResult) {
      console.log(errorExplous + "showResult");
    }
    if (!head) {
      console.log(errorExplous + "head");
    }
    if (!colorHead) {
      console.log(errorExplous + "colorHead");
    }
    if (!body) {
      console.log(errorExplous + "body");
    }
    if (!textAlignBody) {
      console.log(errorExplous + "textAlignBody");
    }
  }
};

exports.default = Table;

/***/ })
/******/ ]);