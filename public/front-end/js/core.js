! function(t, e) {
    "function" == typeof define && define.amd ? define([], function() {
        return t.svg4everybody = e()
    }) : "object" == typeof exports ? module.exports = e() : t.svg4everybody = e()
}(this, function() {
    function t(t, e) {
        if (e) {
            var i = document.createDocumentFragment(),
                o = !t.getAttribute("viewBox") && e.getAttribute("viewBox");
            o && t.setAttribute("viewBox", o);
            for (var n = e.cloneNode(!0); n.childNodes.length;) i.appendChild(n.firstChild);
            t.appendChild(i)
        }
    }

    function e(e) {
        e.onreadystatechange = function() {
            if (4 === e.readyState) {
                var i = e._cachedDocument;
                i || ((i = e._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0).map(function(o) {
                    var n = e._cachedTarget[o.id];
                    n || (n = e._cachedTarget[o.id] = i.getElementById(o.id)), t(o.svg, n)
                })
            }
        }, e.onreadystatechange()
    }
    return function(i) {
        var o, n = Object(i);
        o = "polyfill" in n ? n.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537;
        var s = {},
            r = window.requestAnimationFrame || setTimeout,
            a = document.getElementsByTagName("use");
        o && function i() {
            for (var l = 0; l < a.length;) {
                var c = a[l],
                    d = c.parentNode;
                if (d && /svg/i.test(d.nodeName)) {
                    var u = c.getAttribute("xlink:href");
                    if (o && (!n.validate || n.validate(u, d, c))) {
                        d.removeChild(c);
                        var p = u.split("#"),
                            h = p.shift(),
                            f = p.join("#");
                        if (h.length) {
                            var m = s[h];
                            m || ((m = s[h] = new XMLHttpRequest).open("GET", h), m.send(), m._embeds = []), m._embeds.push({
                                svg: d,
                                id: f
                            }), e(m)
                        } else t(d, document.getElementById(f))
                    }
                } else ++l
            }
            r(i, 67)
        }()
    }
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
    var e, i, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        n = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        s = Array.prototype.slice;
    if (t.event.fixHooks)
        for (var r = o.length; r;) t.event.fixHooks[o[--r]] = t.event.mouseHooks;
    var a = t.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var e = n.length; e;) this.addEventListener(n[--e], l, !1);
            else this.onmousewheel = l;
            t.data(this, "mousewheel-line-height", a.getLineHeight(this)), t.data(this, "mousewheel-page-height", a.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = n.length; e;) this.removeEventListener(n[--e], l, !1);
            else this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var i = t(e),
                o = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return o.length || (o = t("body")), parseInt(o.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        },
        getPageHeight: function(e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };

    function l(o) {
        var n, r = o || window.event,
            l = s.call(arguments, 1),
            u = 0,
            p = 0,
            h = 0,
            f = 0,
            m = 0;
        if ((o = t.event.fix(r)).type = "mousewheel", "detail" in r && (h = -1 * r.detail), "wheelDelta" in r && (h = r.wheelDelta), "wheelDeltaY" in r && (h = r.wheelDeltaY), "wheelDeltaX" in r && (p = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (p = -1 * h, h = 0), u = 0 === h ? p : h, "deltaY" in r && (u = h = -1 * r.deltaY), "deltaX" in r && (p = r.deltaX, 0 === h && (u = -1 * p)), 0 !== h || 0 !== p) {
            if (1 === r.deltaMode) {
                var g = t.data(this, "mousewheel-line-height");
                u *= g, h *= g, p *= g
            } else if (2 === r.deltaMode) {
                var v = t.data(this, "mousewheel-page-height");
                u *= v, h *= v, p *= v
            }
            if (n = Math.max(Math.abs(h), Math.abs(p)), (!i || n < i) && (i = n, d(r, n) && (i /= 40)), d(r, n) && (u /= 40, p /= 40, h /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / i), p = Math[p >= 1 ? "floor" : "ceil"](p / i), h = Math[h >= 1 ? "floor" : "ceil"](h / i), a.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                f = o.clientX - y.left, m = o.clientY - y.top
            }
            return o.deltaX = p, o.deltaY = h, o.deltaFactor = i, o.offsetX = f, o.offsetY = m, o.deltaMode = 0, l.unshift(o, u, p, h), e && clearTimeout(e), e = setTimeout(c, 200), (t.event.dispatch || t.event.handle).apply(this, l)
        }
    }

    function c() {
        i = null
    }

    function d(t, e) {
        return a.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
    }
    t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t)
        }
    })
}),
function(t) {
    "use strict";

    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }
    var i, o, n;

    function s(t, e) {
        (i(t, e) ? n : o)(t, e)
    }
    "classList" in document.documentElement ? (i = function(t, e) {
        return t.classList.contains(e)
    }, o = function(t, e) {
        t.classList.add(e)
    }, n = function(t, e) {
        t.classList.remove(e)
    }) : (i = function(t, i) {
        return e(i).test(t.className)
    }, o = function(t, e) {
        i(t, e) || (t.className = t.className + " " + e)
    }, n = function(t, i) {
        t.className = t.className.replace(e(i), " ")
    });
    var r = {
        hasClass: i,
        addClass: o,
        removeClass: n,
        toggleClass: s,
        has: i,
        add: o,
        remove: n,
        toggle: s
    };
    "function" == typeof define && define.amd ? define(r) : t.classie = r
}(window),
function(t) {
    "use strict";

    function e(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }

    function i(t, i) {
        this.el = t, this.options = e({}, this.options), e(this.options, i), this._init()
    }
    i.prototype.options = {
        newTab: !0,
        stickyPlaceholder: !0,
        onChange: function(t) {
            return !1
        }
    }, i.prototype._init = function() {
        var t = this.el.options[this.el.selectedIndex];
        this.hasDefaultPlaceholder = t && t.disabled, this.selectedOpt = t || this.el.querySelector("option"), this._createSelectEl(), this.selOpts = [].slice.call(this.selEl.querySelectorAll("li[data-option]")), this.selOptsCount = this.selOpts.length, this.current = this.selOpts.indexOf(this.selEl.querySelector("li.cs-selected")) || -1, this.selPlaceholder = this.selEl.querySelector("span.cs-placeholder"), this._initEvents()
    }, i.prototype._createSelectEl = function() {
        var t = "",
            e = function(t) {
                var e = "",
                    i = "",
                    o = "";
                !t.selectedOpt || this.foundSelected || this.hasDefaultPlaceholder || (i += "cs-selected ", this.foundSelected = !0), t.getAttribute("data-class") && (i += t.getAttribute("data-class")), t.getAttribute("data-link") && (o = "data-link=" + t.getAttribute("data-link")), "" !== i && (e = 'class="' + i + '" ');
                var n = "";
                return [].forEach.call(t.attributes, function(t) {
                    var e = t.name;
                    e.indexOf("data-") + ["data-option", "data-value"].indexOf(e) == -1 && (n += e + "='" + t.value + "' ")
                }), "<li " + e + o + n + ' data-option data-value="' + t.value + '"><span>' + t.textContent + "</span></li>"
            };
        [].slice.call(this.el.children).forEach(function(i) {
            if (!i.disabled) {
                var o = i.tagName.toLowerCase();
                "option" === o ? t += e(i) : "optgroup" === o && (t += '<li class="cs-optgroup"><span>' + i.label + "</span><ul>", [].slice.call(i.children).forEach(function(i) {
                    t += e(i)
                }), t += "</ul></li>")
            }
        });
        var i = '<div class="cs-options"><ul>' + t + "</ul></div>";
        this.selEl = document.createElement("div"), this.selEl.className = this.el.className, this.selEl.tabIndex = this.el.tabIndex, this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + "</span>" + i, this.el.parentNode.appendChild(this.selEl), this.selEl.appendChild(this.el)
    }, i.prototype._initEvents = function() {
        var t = this;
        this.selPlaceholder.addEventListener("click", function() {
            t._toggleSelect()
        }), this.selOpts.forEach(function(e, i) {
            e.addEventListener("click", function() {
                t.current = i, t._changeOption(), t._toggleSelect()
            })
        }), document.addEventListener("click", function(e) {
            var i = e.target;
            t._isOpen() && i !== t.selEl && ! function(t, e) {
                if (!t) return !1;
                for (var i = t.target || t.srcElement || t || !1; i && i != e;) i = i.parentNode || !1;
                return !1 !== i
            }(i, t.selEl) && t._toggleSelect()
        }), this.selEl.addEventListener("keydown", function(e) {
            switch (e.keyCode || e.which) {
                case 38:
                    e.preventDefault(), t._navigateOpts("prev");
                    break;
                case 40:
                    e.preventDefault(), t._navigateOpts("next");
                    break;
                case 32:
                    e.preventDefault(), t._isOpen() && void 0 !== t.preSelCurrent && -1 !== t.preSelCurrent && t._changeOption(), t._toggleSelect();
                    break;
                case 13:
                    e.preventDefault(), t._isOpen() && void 0 !== t.preSelCurrent && -1 !== t.preSelCurrent && (t._changeOption(), t._toggleSelect());
                    break;
                case 27:
                    e.preventDefault(), t._isOpen() && t._toggleSelect()
            }
        })
    }, i.prototype._navigateOpts = function(t) {
        this._isOpen() || this._toggleSelect();
        var e = void 0 !== this.preSelCurrent && -1 !== this.preSelCurrent ? this.preSelCurrent : this.current;
        ("prev" === t && e > 0 || "next" === t && e < this.selOptsCount - 1) && (this.preSelCurrent = "next" === t ? e + 1 : e - 1, this._removeFocus(), classie.add(this.selOpts[this.preSelCurrent], "cs-focus"))
    }, i.prototype._toggleSelect = function() {
        this._removeFocus(), console.log("3"), this._isOpen() ? (-1 !== this.current && (this.selPlaceholder.textContent = this.selOpts[this.current].textContent), classie.remove(this.selEl, "cs-active")) : (this.hasDefaultPlaceholder && this.options.stickyPlaceholder && (this.selPlaceholder.textContent = this.selectedOpt.textContent), classie.add(this.selEl, "cs-active"))
    }, i.prototype._changeOption = function() {
        void 0 !== this.preSelCurrent && -1 !== this.preSelCurrent && (this.current = this.preSelCurrent, this.preSelCurrent = -1);
        var e = this.selOpts[this.current];
        this.selPlaceholder.textContent = e.textContent, this.el.value = e.getAttribute("data-value");
        var i = this.selEl.querySelector("li.cs-selected");
        i && classie.remove(i, "cs-selected"), classie.add(e, "cs-selected"), e.getAttribute("data-link") && (this.options.newTab ? t.open(e.getAttribute("data-link"), "_blank") : t.location = e.getAttribute("data-link")), this.options.onChange(this.el.value)
    }, i.prototype._isOpen = function(t) {
        return classie.has(this.selEl, "cs-active")
    }, i.prototype._removeFocus = function(t) {
        var e = this.selEl.querySelector("li.cs-focus");
        e && classie.remove(e, "cs-focus")
    }, t.SelectFx = i
}(window),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e, i = window.Slick || {};
    e = 0, (i = function(i, o) {
        var n, s = this;
        s.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: t(i),
            appendDots: t(i),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, i) {
                return t('<button type="button" />').text(i + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, s.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, n = t(i).data("slick") || {}, s.options = t.extend({}, s.defaults, o, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = e++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, i.prototype.addSlide = i.prototype.slickAdd = function(e, i, o) {
        var n = this;
        if ("boolean" == typeof i) o = i, i = null;
        else if (i < 0 || i >= n.slideCount) return !1;
        n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? t(e).appendTo(n.$slideTrack) : o ? t(e).insertBefore(n.$slides.eq(i)) : t(e).insertAfter(n.$slides.eq(i)) : !0 === o ? t(e).prependTo(n.$slideTrack) : t(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e)
        }), n.$slidesCache = n.$slides, n.reinit()
    }, i.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }, i.prototype.animateSlide = function(e, i) {
        var o = {},
            n = this;
        n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
            left: e
        }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
            top: e
        }, n.options.speed, n.options.easing, i) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), t({
            animStart: n.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function(t) {
                t = Math.ceil(t), !1 === n.options.vertical ? (o[n.animType] = "translate(" + t + "px, 0px)", n.$slideTrack.css(o)) : (o[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(o))
            },
            complete: function() {
                i && i.call()
            }
        })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? o[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(o), i && setTimeout(function() {
            n.disableTransition(), i.call()
        }, n.options.speed))
    }, i.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e
    }, i.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, i.prototype.applyTransition = function(t) {
        var e = this,
            i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, i.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, i.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, i.prototype.autoPlayIterator = function() {
        var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, i.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, i.prototype.buildDots = function() {
        var e, i, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) i.append(t("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = i.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, i.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, i.prototype.buildRows = function() {
        var t, e, i, o, n, s, r, a = this;
        if (o = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(s.length / r), t = 0; t < n; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = t * r + (e * a.options.slidesPerRow + i);
                        s.get(d) && c.appendChild(s.get(d))
                    }
                    l.appendChild(c)
                }
                o.appendChild(l)
            }
            a.$slider.empty().append(o), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, i.prototype.checkResponsive = function(e, i) {
        var o, n, s, r = this,
            a = !1,
            l = r.$slider.width(),
            c = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (o in n = null, r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[o] && (n = r.breakpoints[o]) : s > r.breakpoints[o] && (n = r.breakpoints[o]));
            null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || i) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = n), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, i.prototype.changeSlide = function(e, i) {
        var o, n, s = this,
            r = t(e.currentTarget);
        switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), o = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
            case "previous":
                n = 0 === o ? s.options.slidesToScroll : s.options.slidesToShow - o, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - n, !1, i);
                break;
            case "next":
                n = 0 === o ? s.options.slidesToScroll : o, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + n, !1, i);
                break;
            case "index":
                var a = 0 === e.data.index ? 0 : e.data.index || r.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(a), !1, i), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, i.prototype.checkNavigable = function(t) {
        var e, i;
        if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
        else
            for (var o in e) {
                if (t < e[o]) {
                    t = i;
                    break
                }
                i = e[o]
            }
        return t
    }, i.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, i.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, i.prototype.cleanUpRows = function() {
        var t;
        this.options.rows > 1 && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
    }, i.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, i.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, i.prototype.disableTransition = function(t) {
        var e = {};
        e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
    }, i.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function() {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, i.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, i.prototype.filterSlides = i.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, i.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var o = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, i.prototype.getCurrent = i.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, i.prototype.getDotCount = function() {
        var t = this,
            e = 0,
            i = 0,
            o = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow) ++o;
            else
                for (; e < t.slideCount;) ++o, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode) o = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount;) ++o, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else o = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return o - 1
    }, i.prototype.getLeft = function(t) {
        var e, i, o, n, s = this,
            r = 0;
        return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? n = -1.5 : 1 === s.options.slidesToShow && (n = -2)), r = i * s.options.slidesToShow * n), s.slideCount % s.options.slidesToScroll != 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + r, !0 === s.options.variableWidth && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === s.options.centerMode && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (s.$list.width() - o.outerWidth()) / 2)), e
    }, i.prototype.getOption = i.prototype.slickGetOption = function(t) {
        return this.options[t]
    }, i.prototype.getNavigableIndexes = function() {
        var t, e = this,
            i = 0,
            o = 0,
            n = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) n.push(i), i = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return n
    }, i.prototype.getSlick = function() {
        return this
    }, i.prototype.getSlideCount = function() {
        var e, i, o = this;
        return i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(n, s) {
            if (s.offsetLeft - i + t(s).outerWidth() / 2 > -1 * o.swipeLeft) return e = s, !1
        }), Math.abs(t(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, i.prototype.goTo = i.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }, i.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, i.prototype.initADA = function() {
        var e = this,
            i = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function(t) {
                return t >= 0 && t < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            var n = o.indexOf(i);
            t(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + i,
                tabindex: -1
            }), -1 !== n && t(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + n
            })
        }), e.$dots.attr("role", "tablist").find("li").each(function(n) {
            var s = o[n];
            t(this).attr({
                role: "presentation"
            }), t(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + n,
                "aria-controls": "slick-slide" + e.instanceUid + s,
                "aria-label": n + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var n = e.currentSlide, s = n + e.options.slidesToShow; n < s; n++) e.$slides.eq(n).attr("tabindex", 0);
        e.activateADA()
    }, i.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, i.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, i.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, i.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
    }, i.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, i.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, i.prototype.lazyLoad = function() {
        var e, i, o, n = this;

        function s(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this),
                    i = t(this).attr("data-lazy"),
                    o = t(this).attr("data-srcset"),
                    s = t(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, i])
                    })
                }, r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, i])
                }, r.src = i
            })
        }
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? o = (i = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (i = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), o = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (i = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, o = Math.ceil(i + n.options.slidesToShow), !0 === n.options.fade && (i > 0 && i--, o <= n.slideCount && o++)), e = n.$slider.find(".slick-slide").slice(i, o), "anticipated" === n.options.lazyLoad)
            for (var r = i - 1, a = o, l = n.$slider.find(".slick-slide"), c = 0; c < n.options.slidesToScroll; c++) r < 0 && (r = n.slideCount - 1), e = (e = e.add(l.eq(r))).add(l.eq(a)), r--, a++;
        s(e), n.slideCount <= n.options.slidesToShow ? s(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? s(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && s(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, i.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, i.prototype.next = i.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, i.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, i.prototype.pause = i.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, i.prototype.play = i.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, i.prototype.postSlide = function(e) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, i.prototype.prev = i.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, i.prototype.preventDefault = function(t) {
        t.preventDefault()
    }, i.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, o, n, s, r, a = this,
            l = t("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(), o = i.attr("data-lazy"), n = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            n && (i.attr("srcset", n), s && i.attr("sizes", s)), i.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, o]), a.progressiveLazyLoad()
        }, r.onerror = function() {
            e < 3 ? setTimeout(function() {
                a.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, o]), a.progressiveLazyLoad())
        }, r.src = o) : a.$slider.trigger("allImagesLoaded", [a])
    }, i.prototype.refresh = function(e) {
        var i, o, n = this;
        o = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > o && (n.currentSlide = o), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), t.extend(n, n.initials, {
            currentSlide: i
        }), n.init(), e || n.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, i.prototype.registerBreakpoints = function() {
        var e, i, o, n = this,
            s = n.options.responsive || null;
        if ("array" === t.type(s) && s.length) {
            for (e in n.respondTo = n.options.respondTo || "window", s)
                if (o = n.breakpoints.length - 1, s.hasOwnProperty(e)) {
                    for (i = s[e].breakpoint; o >= 0;) n.breakpoints[o] && n.breakpoints[o] === i && n.breakpoints.splice(o, 1), o--;
                    n.breakpoints.push(i), n.breakpointSettings[i] = s[e].settings
                } n.breakpoints.sort(function(t, e) {
                return n.options.mobileFirst ? t - e : e - t
            })
        }
    }, i.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, i.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, i.prototype.removeSlide = i.prototype.slickRemove = function(t, e, i) {
        var o = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : o.slideCount - 1 : !0 === e ? --t : t, o.slideCount < 1 || t < 0 || t > o.slideCount - 1) return !1;
        o.unload(), !0 === i ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(t).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, i.prototype.setCSS = function(t) {
        var e, i, o = this,
            n = {};
        !0 === o.options.rtl && (t = -t), e = "left" == o.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(t) + "px" : "0px", n[o.positionProp] = t, !1 === o.transformsEnabled ? o.$slideTrack.css(n) : (n = {}, !1 === o.cssTransitions ? (n[o.animType] = "translate(" + e + ", " + i + ")", o.$slideTrack.css(n)) : (n[o.animType] = "translate3d(" + e + ", " + i + ", 0px)", o.$slideTrack.css(n)))
    }, i.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, i.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each(function(o, n) {
            e = i.slideWidth * o * -1, !0 === i.options.rtl ? t(n).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(n).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, i.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, i.prototype.setOption = i.prototype.slickSetOption = function() {
        var e, i, o, n, s, r = this,
            a = !1;
        if ("object" === t.type(arguments[0]) ? (o = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (o = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[o] = n;
        else if ("multiple" === s) t.each(o, function(t, e) {
            r.options[t] = e
        });
        else if ("responsive" === s)
            for (i in n)
                if ("array" !== t.type(r.options.responsive)) r.options.responsive = [n[i]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === n[i].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(n[i])
                } a && (r.unload(), r.reinit())
    }, i.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, i.prototype.setProps = function() {
        var t = this,
            e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, i.prototype.setSlideClasses = function(t) {
        var e, i, o, n, s = this;
        if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode) {
            var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = s.options.slidesToShow + t, i.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")
        } else t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = s.slideCount % s.options.slidesToShow, o = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(o - (s.options.slidesToShow - n), o + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, i.prototype.setupInfinite = function() {
        var e, i, o, n = this;
        if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (i = null, n.slideCount > n.options.slidesToShow)) {
            for (o = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - o; e -= 1) i = e - 1, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + n.slideCount; e += 1) i = e, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }, i.prototype.interrupt = function(t) {
        t || this.autoPlay(), this.interrupted = t
    }, i.prototype.selectHandler = function(e) {
        var i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        o || (o = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(o, !1, !0) : this.slideHandler(o)
    }, i.prototype.slideHandler = function(t, e, i) {
        var o, n, s, r, a, l, c = this;
        if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
            if (!1 === e && c.asNavFor(t), o = t, a = c.getLeft(o), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (o = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
                c.postSlide(o)
            }) : c.postSlide(o));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (o = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
            c.postSlide(o)
        }) : c.postSlide(o));
        else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), n = o < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + o : o >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : o - c.slideCount : o, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, n]), s = c.currentSlide, c.currentSlide = n, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(n, function() {
                c.postSlide(n)
            })) : c.postSlide(n), void c.animateHeight();
            !0 !== i ? c.animateSlide(a, function() {
                c.postSlide(n)
            }) : c.postSlide(n)
        }
    }, i.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, i.prototype.swipeDirection = function() {
        var t, e, i, o, n = this;
        return t = n.touchObject.startX - n.touchObject.curX, e = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(e, t), (o = Math.round(180 * i / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === n.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === n.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, i.prototype.swipeEnd = function(t) {
        var e, i, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (i = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != i && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, i]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, i.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, i.prototype.swipeMove = function(t) {
        var e, i, o, n, s, r, a = this;
        return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), n = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (n = a.touchObject.curY > a.touchObject.startY ? 1 : -1), o = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (o = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + o * n : a.swipeLeft = e + o * (a.$list.height() / a.listWidth) * n, !0 === a.options.verticalSwiping && (a.swipeLeft = e + o * n), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, i.prototype.swipeStart = function(t) {
        var e, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
    }, i.prototype.unfilterSlides = i.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, i.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, i.prototype.unslick = function(t) {
        this.$slider.trigger("unslick", [this, t]), this.destroy()
    }, i.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, i.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, i.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, t.fn.slick = function() {
        var t, e, o = this,
            n = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (t = 0; t < r; t++)
            if ("object" == typeof n || void 0 === n ? o[t].slick = new i(o[t], n) : e = o[t].slick[n].apply(o[t].slick, s), void 0 !== e) return e;
        return o
    }
}),
function() {
    "use strict";
    var t = 0,
        e = {};

    function i(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t, this.options = i.Adapter.extend({}, i.defaults, o), this.element = this.options.element, this.adapter = new i.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = i.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = i.Context.findOrCreateByElement(this.options.context), i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), e[this.key] = this, t += 1
    }
    i.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, i.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, i.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete e[this.key]
    }, i.prototype.disable = function() {
        return this.enabled = !1, this
    }, i.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, i.prototype.next = function() {
        return this.group.next(this)
    }, i.prototype.previous = function() {
        return this.group.previous(this)
    }, i.invokeAll = function(t) {
        var i = [];
        for (var o in e) i.push(e[o]);
        for (var n = 0, s = i.length; n < s; n++) i[n][t]()
    }, i.destroyAll = function() {
        i.invokeAll("destroy")
    }, i.disableAll = function() {
        i.invokeAll("disable")
    }, i.enableAll = function() {
        for (var t in i.Context.refreshAll(), e) e[t].enabled = !0;
        return this
    }, i.refreshAll = function() {
        i.Context.refreshAll()
    }, i.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, i.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, i.adapters = [], i.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, i.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = i
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }
    var e = 0,
        i = {},
        o = window.Waypoint,
        n = window.onload;

    function s(t) {
        this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + e, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, e += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new s(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    s.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, s.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            o = this.element == this.element.window;
        t && e && !o && (this.adapter.off(".waypoints"), delete i[this.key])
    }, s.prototype.createThrottledResizeHandler = function() {
        var t = this;

        function e() {
            t.handleResize(), t.didResize = !1
        }
        this.adapter.on("resize.waypoints", function() {
            t.didResize || (t.didResize = !0, o.requestAnimationFrame(e))
        })
    }, s.prototype.createThrottledScrollHandler = function() {
        var t = this;

        function e() {
            t.handleScroll(), t.didScroll = !1
        }
        this.adapter.on("scroll.waypoints", function() {
            t.didScroll && !o.isTouch || (t.didScroll = !0, o.requestAnimationFrame(e))
        })
    }, s.prototype.handleResize = function() {
        o.Context.refreshAll()
    }, s.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var r = this.waypoints[i][s];
                if (null !== r.triggerPoint) {
                    var a = o.oldScroll < r.triggerPoint,
                        l = o.newScroll >= r.triggerPoint;
                    (a && l || !a && !l) && (r.queueTrigger(n), t[r.group.id] = r.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, s.prototype.innerHeight = function() {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }, s.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, s.prototype.innerWidth = function() {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }, s.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; o < n; o++) t[o].destroy()
    }, s.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            n = {};
        for (var s in this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
            var r = t[s];
            for (var a in this.waypoints[s]) {
                var l, c, d, u, p = this.waypoints[s][a],
                    h = p.options.offset,
                    f = p.triggerPoint,
                    m = 0,
                    g = null == f;
                p.element !== p.element.window && (m = p.adapter.offset()[r.offsetProp]), "function" == typeof h ? h = h.apply(p) : "string" == typeof h && (h = parseFloat(h), p.options.offset.indexOf("%") > -1 && (h = Math.ceil(r.contextDimension * h / 100))), l = r.contextScroll - r.contextOffset, p.triggerPoint = Math.floor(m + l - h), c = f < r.oldScroll, d = p.triggerPoint >= r.oldScroll, u = !c && !d, !g && (c && d) ? (p.queueTrigger(r.backward), n[p.group.id] = p.group) : !g && u ? (p.queueTrigger(r.forward), n[p.group.id] = p.group) : g && r.oldScroll >= p.triggerPoint && (p.queueTrigger(r.forward), n[p.group.id] = p.group)
            }
        }
        return o.requestAnimationFrame(function() {
            for (var t in n) n[t].flushTriggers()
        }), this
    }, s.findOrCreateByElement = function(t) {
        return s.findByElement(t) || new s(t)
    }, s.refreshAll = function() {
        for (var t in i) i[t].refresh()
    }, s.findByElement = function(t) {
        return i[t.waypointContextKey]
    }, window.onload = function() {
        n && n(), s.refreshAll()
    }, o.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }, o.Context = s
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }
    var i = {
            vertical: {},
            horizontal: {}
        },
        o = window.Waypoint;

    function n(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
    }
    n.prototype.add = function(t) {
        this.waypoints.push(t)
    }, n.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, n.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var s = 0, r = o.length; s < r; s += 1) {
                var a = o[s];
                (a.options.continuous || s === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, n.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
    }, n.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, n.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, n.prototype.remove = function(t) {
        var e = o.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, n.prototype.first = function() {
        return this.waypoints[0]
    }, n.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, n.findOrCreate = function(t) {
        return i[t.axis][t.name] || new n(t)
    }, o.Group = n
}(),
function() {
    "use strict";
    var t = window.jQuery,
        e = window.Waypoint;

    function i(e) {
        this.$element = t(e)
    }
    t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, e) {
        i.prototype[e] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[e].apply(this.$element, t)
        }
    }), t.each(["extend", "inArray", "isEmptyObject"], function(e, o) {
        i[o] = t[o]
    }), e.adapters.push({
        name: "jquery",
        Adapter: i
    }), e.Adapter = i
}(),
function() {
    "use strict";
    var t = window.Waypoint;

    function e(e) {
        return function() {
            var i = [],
                o = arguments[0];
            return e.isFunction(arguments[0]) && ((o = e.extend({}, arguments[1])).handler = arguments[0]), this.each(function() {
                var n = e.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = e(this).closest(n.context)[0]), i.push(new t(n))
            }), i
        }
    }
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
}(),
function(t) {
    "use strict";
    t.fn.counterUp = function(e) {
        var i, o = t.extend({
            time: 400,
            delay: 10,
            offset: 100,
            beginAt: 0,
            formatter: !1,
            context: "window",
            callback: function() {}
        }, e);
        return this.each(function() {
            var e = t(this),
                n = {
                    time: t(this).data("counterup-time") || o.time,
                    delay: t(this).data("counterup-delay") || o.delay,
                    offset: t(this).data("counterup-offset") || o.offset,
                    beginAt: t(this).data("counterup-beginat") || o.beginAt,
                    context: t(this).data("counterup-context") || o.context
                };
            e.waypoint(function(t) {
                ! function() {
                    var t = [],
                        s = n.time / n.delay,
                        r = e.attr("data-num") ? e.attr("data-num") : e.text(),
                        a = /[0-9]+,[0-9]+/.test(r),
                        l = ((r = r.replace(/,/g, "")).split(".")[1] || []).length;
                    n.beginAt > r && (n.beginAt = r);
                    var c = /[0-9]+:[0-9]+:[0-9]+/.test(r);
                    if (c) {
                        var d = r.split(":"),
                            u = 1;
                        for (i = 0; d.length > 0;) i += u * parseInt(d.pop(), 10), u *= 60
                    }
                    for (var p = s; p >= n.beginAt / r * s; p--) {
                        var h = parseFloat(r / s * p).toFixed(l);
                        if (c) {
                            h = parseInt(i / s * p);
                            var f = parseInt(h / 3600) % 24,
                                m = parseInt(h / 60) % 60,
                                g = parseInt(h % 60, 10);
                            h = (f < 10 ? "0" + f : f) + ":" + (m < 10 ? "0" + m : m) + ":" + (g < 10 ? "0" + g : g)
                        }
                        if (a)
                            for (;
                                /(\d+)(\d{3})/.test(h.toString());) h = h.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        o.formatter && (h = o.formatter.call(this, h)), t.unshift(h)
                    }
                    e.data("counterup-nums", t), e.text(n.beginAt);
                    e.data("counterup-func", function() {
                        e.data("counterup-nums") ? (e.html(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), n.delay) : (e.data("counterup-nums", null), e.data("counterup-func", null), o.callback.call(this))) : o.callback.call(this)
                    }), setTimeout(e.data("counterup-func"), n.delay)
                }(), this.destroy()
            }, {
                offset: n.offset + "%",
                context: n.context
            })
        })
    }
}(jQuery),
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.Countdown = t()
    }
}(function() {
    return function t(e, i, o) {
        function n(r, a) {
            if (!i[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(r, !0);
                    if (s) return s(r, !0);
                    var c = new Error("Cannot find module '" + r + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var d = i[r] = {
                    exports: {}
                };
                e[r][0].call(d.exports, function(t) {
                    var i = e[r][1][t];
                    return n(i || t)
                }, d, d.exports, t, e, i, o)
            }
            return i[r].exports
        }
        for (var s = "function" == typeof require && require, r = 0; r < o.length; r++) n(o[r]);
        return n
    }({
        1: [function(t, e, i) {
            var o = {
                date: "June 7, 2087 15:03:25",
                refresh: 1e3,
                offset: 0,
                onEnd: function() {},
                render: function(t) {
                    this.el.innerHTML = t.years + " years, " + t.days + " days, " + this.leadingZeros(t.hours) + " hours, " + this.leadingZeros(t.min) + " min and " + this.leadingZeros(t.sec) + " sec"
                }
            };
            e.exports = function(t, e) {
                this.el = t, this.options = {}, this.interval = !1, this.mergeOptions = function(t) {
                    for (var e in o) o.hasOwnProperty(e) && (this.options[e] = void 0 !== t[e] ? t[e] : o[e], "date" === e && "object" != typeof this.options.date && (this.options.date = new Date(this.options.date)), "function" == typeof this.options[e] && (this.options[e] = this.options[e].bind(this)));
                    "object" != typeof this.options.date && (this.options.date = new Date(this.options.date))
                }.bind(this), this.mergeOptions(e), this.getDiffDate = function() {
                    var t = (this.options.date.getTime() - Date.now() + this.options.offset) / 1e3,
                        e = {
                            years: 0,
                            days: 0,
                            hours: 0,
                            min: 0,
                            sec: 0,
                            millisec: 0
                        };
                    return t <= 0 ? (this.interval && (this.stop(), this.options.onEnd()), e) : (t >= 31557600 && (e.years = Math.floor(t / 31557600), t -= 365.25 * e.years * 86400), t >= 86400 && (e.days = Math.floor(t / 86400), t -= 86400 * e.days), t >= 3600 && (e.hours = Math.floor(t / 3600), t -= 3600 * e.hours), t >= 60 && (e.min = Math.floor(t / 60), t -= 60 * e.min), e.sec = Math.round(t), e.millisec = t % 1 * 1e3, e)
                }.bind(this), this.leadingZeros = function(t, e) {
                    return e = e || 2, (t = String(t)).length > e ? t : (Array(e + 1).join("0") + t).substr(-e)
                }, this.update = function(t) {
                    return "object" != typeof t && (t = new Date(t)), this.options.date = t, this.render(), this
                }.bind(this), this.stop = function() {
                    return this.interval && (clearInterval(this.interval), this.interval = !1), this
                }.bind(this), this.render = function() {
                    return this.options.render(this.getDiffDate()), this
                }.bind(this), this.start = function() {
                    if (!this.interval) return this.render(), this.options.refresh && (this.interval = setInterval(this.render, this.options.refresh)), this
                }.bind(this), this.updateOffset = function(t) {
                    return this.options.offset = t, this
                }.bind(this), this.restart = function(t) {
                    return this.mergeOptions(t), this.interval = !1, this.start(), this
                }.bind(this), this.start()
            }
        }, {}],
        2: [function(t, e, i) {
            var o = t("./countdown.js"),
                n = "countdown";
            jQuery.fn.countdown = function(t) {
                return $.each(this, function(e, i) {
                    var s = $(i);
                    s.data(n) || (s.data("date") && (t.date = s.data("date")), s.data(n, new o(i, t)))
                })
            }, e.exports = o
        }, {
            "./countdown.js": 1
        }]
    }, {}, [2])(2)
}), window.Modernizr = function(t, e, i) {
        function o(t) {
            h.cssText = t
        }

        function n(t, e) {
            return typeof t === e
        }

        function s(t, e) {
            for (var o in t) {
                var n = t[o];
                if (!~("" + n).indexOf("-") && h[n] !== i) return "pfx" != e || n
            }
            return !1
        }

        function r(t, e, o) {
            var r = t.charAt(0).toUpperCase() + t.slice(1),
                a = (t + " " + g.join(r + " ") + r).split(" ");
            return n(e, "string") || n(e, "undefined") ? s(a, e) : function(t, e, o) {
                for (var s in t) {
                    var r = e[t[s]];
                    if (r !== i) return !1 === o ? t[s] : n(r, "function") ? r.bind(o || e) : r
                }
                return !1
            }(a = (t + " " + v.join(r + " ") + r).split(" "), e, o)
        }
        var a, l, c = {},
            d = e.documentElement,
            u = "modernizr",
            p = e.createElement(u),
            h = p.style,
            f = " -webkit- -moz- -o- -ms- ".split(" "),
            m = "Webkit Moz O ms",
            g = m.split(" "),
            v = m.toLowerCase().split(" "),
            y = {},
            w = [],
            b = w.slice,
            S = function(t, i, o, n) {
                var s, r, a, l, c = e.createElement("div"),
                    p = e.body,
                    h = p || e.createElement("body");
                if (parseInt(o, 10))
                    for (; o--;)(a = e.createElement("div")).id = n ? n[o] : u + (o + 1), c.appendChild(a);
                return s = ["&#173;", '<style id="s', u, '">', t, "</style>"].join(""), c.id = u, (p ? c : h).innerHTML += s, h.appendChild(c), p || (h.style.background = "", h.style.overflow = "hidden", l = d.style.overflow, d.style.overflow = "hidden", d.appendChild(h)), r = i(c, t), p ? c.parentNode.removeChild(c) : (h.parentNode.removeChild(h), d.style.overflow = l), !!r
            },
            k = {}.hasOwnProperty;
        for (var T in l = n(k, "undefined") || n(k.call, "undefined") ? function(t, e) {
                return e in t && n(t.constructor.prototype[e], "undefined")
            } : function(t, e) {
                return k.call(t, e)
            }, Function.prototype.bind || (Function.prototype.bind = function(t) {
                var e = this;
                if ("function" != typeof e) throw new TypeError;
                var i = b.call(arguments, 1),
                    o = function() {
                        if (this instanceof o) {
                            var n = function() {};
                            n.prototype = e.prototype;
                            var s = new n,
                                r = e.apply(s, i.concat(b.call(arguments)));
                            return Object(r) === r ? r : s
                        }
                        return e.apply(t, i.concat(b.call(arguments)))
                    };
                return o
            }), y.touch = function() {
                var i;
                return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : S(["@media (", f.join("touch-enabled),("), u, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                    i = 9 === t.offsetTop
                }), i
            }, y.cssanimations = function() {
                return r("animationName")
            }, y.csstransitions = function() {
                return r("transition")
            }, y) l(y, T) && (a = T.toLowerCase(), c[a] = y[T](), w.push((c[a] ? "" : "no-") + a));
        return c.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var o in t) l(t, o) && c.addTest(o, t[o]);
                else {
                    if (t = t.toLowerCase(), c[t] !== i) return c;
                    e = "function" == typeof e ? e() : e, d.className += " " + (e ? "" : "no-") + t, c[t] = e
                }
                return c
            }, o(""), p = null,
            function(t, e) {
                function i() {
                    var t = f.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function o(t) {
                    var e = h[t[u]];
                    return e || (e = {}, p++, t[u] = p, h[p] = e), e
                }

                function n(t, i, n) {
                    return i || (i = e), a ? i.createElement(t) : (n || (n = o(i)), (s = n.cache[t] ? n.cache[t].cloneNode() : d.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t)).canHaveChildren && !c.test(t) ? n.frag.appendChild(s) : s);
                    var s
                }

                function s(t) {
                    t || (t = e);
                    var s, l, c, d, u, p, h = o(t);
                    return f.shivCSS && !r && !h.hasCSS && (h.hasCSS = (d = "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}", u = (c = t).createElement("p"), p = c.getElementsByTagName("head")[0] || c.documentElement, u.innerHTML = "x<style>" + d + "</style>", !!p.insertBefore(u.lastChild, p.firstChild))), a || (s = t, (l = h).cache || (l.cache = {}, l.createElem = s.createElement, l.createFrag = s.createDocumentFragment, l.frag = l.createFrag()), s.createElement = function(t) {
                        return f.shivMethods ? n(t, s, l) : l.createElem(t)
                    }, s.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function(t) {
                        return l.createElem(t), l.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(f, l.frag)), t
                }
                var r, a, l = t.html5 || {},
                    c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    u = "_html5shiv",
                    p = 0,
                    h = {};
                ! function() {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", r = "hidden" in t, a = 1 == t.childNodes.length || function() {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                        }()
                    } catch (t) {
                        r = !0, a = !0
                    }
                }();
                var f = {
                    elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: !1 !== l.shivCSS,
                    supportsUnknownElements: a,
                    shivMethods: !1 !== l.shivMethods,
                    type: "default",
                    shivDocument: s,
                    createElement: n,
                    createDocumentFragment: function(t, n) {
                        if (t || (t = e), a) return t.createDocumentFragment();
                        for (var s = (n = n || o(t)).frag.cloneNode(), r = 0, l = i(), c = l.length; r < c; r++) s.createElement(l[r]);
                        return s
                    }
                };
                t.html5 = f, s(e)
            }(this, e), c._version = "2.6.2", c._prefixes = f, c._domPrefixes = v, c._cssomPrefixes = g, c.testProp = function(t) {
                return s([t])
            }, c.testAllProps = r, c.testStyles = S, c.prefixed = function(t, e, i) {
                return e ? r(t, e, i) : r(t, "pfx")
            }, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + w.join(" "), c
    }(this, this.document),
    function(t, e, i) {
        function o(t) {
            return "[object Function]" == m.call(t)
        }

        function n(t) {
            return "string" == typeof t
        }

        function s() {}

        function r(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function a() {
            var t = g.shift();
            v = 1, t ? t.t ? h(function() {
                ("c" == t.t ? u.injectCss : u.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), a()) : v = 0
        }

        function l(t, i, o, s, l) {
            return v = 0, i = i || "j", n(t) ? function(t, i, o, n, s, l, c) {
                function d(e) {
                    if (!m && r(p.readyState) && (S.r = m = 1, !v && a(), p.onload = p.onreadystatechange = null, e))
                        for (var o in "img" != t && h(function() {
                                b.removeChild(p)
                            }, 50), C[i]) C[i].hasOwnProperty(o) && C[i][o].onload()
                }
                c = c || u.errorTimeout;
                var p = e.createElement(t),
                    m = 0,
                    y = 0,
                    S = {
                        t: o,
                        s: i,
                        e: s,
                        a: l,
                        x: c
                    };
                1 === C[i] && (y = 1, C[i] = []), "object" == t ? p.data = i : (p.src = i, p.type = t), p.width = p.height = "0", p.onerror = p.onload = p.onreadystatechange = function() {
                    d.call(this, y)
                }, g.splice(n, 0, S), "img" != t && (y || 2 === C[i] ? (b.insertBefore(p, w ? null : f), h(d, c)) : C[i].push(p))
            }("c" == i ? k : S, t, i, this.i++, o, s, l) : (g.splice(this.i++, 0, t), 1 == g.length && a()), this
        }

        function c() {
            var t = u;
            return t.loader = {
                load: l,
                i: 0
            }, t
        }
        var d, u, p = e.documentElement,
            h = t.setTimeout,
            f = e.getElementsByTagName("script")[0],
            m = {}.toString,
            g = [],
            v = 0,
            y = "MozAppearance" in p.style,
            w = y && !!e.createRange().compareNode,
            b = w ? p : f.parentNode,
            S = (p = t.opera && "[object Opera]" == m.call(t.opera), p = !!e.attachEvent && !p, y ? "object" : p ? "script" : "img"),
            k = p ? "script" : S,
            T = Array.isArray || function(t) {
                return "[object Array]" == m.call(t)
            },
            x = [],
            C = {},
            _ = {
                timeout: function(t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        (u = function(t) {
            function e(t, e, n, s, r) {
                var a = function(t) {
                        t = t.split("!");
                        var e, i, o, n = x.length,
                            s = t.pop(),
                            r = t.length;
                        for (s = {
                                url: s,
                                origUrl: s,
                                prefixes: t
                            }, i = 0; i < r; i++) o = t[i].split("="), (e = _[o.shift()]) && (s = e(s, o));
                        for (i = 0; i < n; i++) s = x[i](s);
                        return s
                    }(t),
                    l = a.autoCallback;
                a.url.split(".").pop().split("?").shift(), a.bypass || (e && (e = o(e) ? e : e[t] || e[s] || e[t.split("/").pop().split("?")[0]]), a.instead ? a.instead(t, e, n, s, r) : (C[a.url] ? a.noexec = !0 : C[a.url] = 1, n.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : i, a.noexec, a.attrs, a.timeout), (o(e) || o(l)) && n.load(function() {
                    c(), e && e(a.origUrl, r, s), l && l(a.origUrl, r, s), C[a.url] = 2
                })))
            }

            function r(t, i) {
                function r(t, s) {
                    if (t) {
                        if (n(t)) s || (u = function() {
                            var t = [].slice.call(arguments);
                            p.apply(this, t), h()
                        }), e(t, u, i, 0, c);
                        else if (Object(t) === t)
                            for (l in a = function() {
                                    var e, i = 0;
                                    for (e in t) t.hasOwnProperty(e) && i++;
                                    return i
                                }(), t) t.hasOwnProperty(l) && (!s && !--a && (o(u) ? u = function() {
                                var t = [].slice.call(arguments);
                                p.apply(this, t), h()
                            } : u[l] = function(t) {
                                return function() {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), h()
                                }
                            }(p[l])), e(t[l], u, i, l, c))
                    } else !s && h()
                }
                var a, l, c = !!t.test,
                    d = t.load || t.both,
                    u = t.callback || s,
                    p = u,
                    h = t.complete || s;
                r(c ? t.yep : t.nope, !!d), d && r(d)
            }
            var a, l, d = this.yepnope.loader;
            if (n(t)) e(t, 0, d, 0);
            else if (T(t))
                for (a = 0; a < t.length; a++) n(l = t[a]) ? e(l, 0, d, 0) : T(l) ? u(l) : Object(l) === l && r(l, d);
            else Object(t) === t && r(t, d)
        }).addPrefix = function(t, e) {
            _[t] = e
        }, u.addFilter = function(t) {
            x.push(t)
        }, u.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", d = function() {
            e.removeEventListener("DOMContentLoaded", d, 0), e.readyState = "complete"
        }, 0)), t.yepnope = c(), t.yepnope.executeStack = a, t.yepnope.injectJs = function(t, i, o, n, l, c) {
            var d, p, m = e.createElement("script");
            n = n || u.errorTimeout;
            for (p in m.src = t, o) m.setAttribute(p, o[p]);
            i = c ? a : i || s, m.onreadystatechange = m.onload = function() {
                !d && r(m.readyState) && (d = 1, i(), m.onload = m.onreadystatechange = null)
            }, h(function() {
                d || (d = 1, i(1))
            }, n), l ? m.onload() : f.parentNode.insertBefore(m, f)
        }, t.yepnope.injectCss = function(t, i, o, n, r, l) {
            var c;
            n = e.createElement("link"), i = l ? a : i || s;
            for (c in n.href = t, n.rel = "stylesheet", n.type = "text/css", o) n.setAttribute(c, o[c]);
            r || (f.parentNode.insertBefore(n, f), h(i, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(t, e, i) {
        "use strict";
        var o = e.Modernizr,
            n = t("body");
        t.DLMenu = function(e, i) {
            this.$el = t(i), this._init(e)
        }, t.DLMenu.defaults = {
            animationClasses: {
                classin: "dl-animate-in-1",
                classout: "dl-animate-out-1"
            },
            onLevelClick: function(t, e) {
                return !1
            },
            onLinkClick: function(t, e) {
                return !1
            },
            backLabel: "← Back",
            useActiveItemAsBackLabel: !1,
            useActiveItemAsLink: !1,
            resetOnClose: !0
        }, t.DLMenu.prototype = {
            _init: function(e) {
                this.options = t.extend(!0, {}, t.DLMenu.defaults, e), this._config();
                this.animEndEventName = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd",
                    msAnimation: "MSAnimationEnd",
                    animation: "animationend"
                } [o.prefixed("animation")] + ".dlmenu", this.transEndEventName = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    msTransition: "MSTransitionEnd",
                    transition: "transitionend"
                } [o.prefixed("transition")] + ".dlmenu", this.supportAnimations = o.cssanimations, this.supportTransitions = o.csstransitions, this._initEvents()
            },
            _config: function() {
                this.open = !1, this.$trigger = this.$el.children(".dl-trigger"), this.$menu = this.$el.children("ul.dl-menu"), this.$menuitems = this.$menu.find("li:not(.dl-back)"), this.$el.find("ul.dl-submenu").prepend('<li class="dl-back"><a href="#">' + this.options.backLabel + "</a></li>"), this.$back = this.$menu.find("li.dl-back"), this.options.useActiveItemAsBackLabel && this.$back.each(function() {
                    var e = t(this),
                        i = e.parents("li:first").find("a:first").text();
                    e.find("a").html(i)
                }), this.options.useActiveItemAsLink && this.$el.find("ul.dl-submenu").prepend(function() {
                    var e = t(this).parents("li:not(.dl-back):first").find("a:first");
                    return '<li class="dl-parent"><a href="' + e.attr("href") + '">' + e.text() + "</a></li>"
                })
            },
            _initEvents: function() {
                var e = this;
                this.$trigger.on("click.dlmenu", function() {
                    return e.open ? e._closeMenu() : (e._openMenu(), n.off("click").children().on("click.dlmenu", function() {
                        e._closeMenu()
                    })), !1
                }), this.$menuitems.on("click.dlmenu", function(i) {
                    i.stopPropagation();
                    var o = t(this),
                        n = o.children("ul.dl-submenu");
                    if (n.length > 0 && !t(i.currentTarget).hasClass("dl-subviewopen")) {
                        var s = n.clone().css("opacity", 0).insertAfter(e.$menu),
                            r = function() {
                                e.$menu.off(e.animEndEventName).removeClass(e.options.animationClasses.classout).addClass("dl-subview"), o.addClass("dl-subviewopen").parents(".dl-subviewopen:first").removeClass("dl-subviewopen").addClass("dl-subview"), s.remove()
                            };
                        return setTimeout(function() {
                            s.addClass(e.options.animationClasses.classin), e.$menu.addClass(e.options.animationClasses.classout), e.supportAnimations ? e.$menu.on(e.animEndEventName, r) : r.call(), e.options.onLevelClick(o, o.children("a:first").text())
                        }), !1
                    }
                    e.options.onLinkClick(o, i)
                }), this.$back.on("click.dlmenu", function(i) {
                    var o = t(this),
                        n = o.parents("ul.dl-submenu:first"),
                        s = n.parent(),
                        r = n.clone().insertAfter(e.$menu),
                        a = function() {
                            e.$menu.off(e.animEndEventName).removeClass(e.options.animationClasses.classin), r.remove()
                        };
                    return setTimeout(function() {
                        r.addClass(e.options.animationClasses.classout), e.$menu.addClass(e.options.animationClasses.classin), e.supportAnimations ? e.$menu.on(e.animEndEventName, a) : a.call(), s.removeClass("dl-subviewopen");
                        var t = o.parents(".dl-subview:first");
                        t.is("li") && t.addClass("dl-subviewopen"), t.removeClass("dl-subview")
                    }), !1
                })
            },
            closeMenu: function() {
                this.open && this._closeMenu()
            },
            _closeMenu: function() {
                var t = this,
                    e = function() {
                        t.$menu.off(t.transEndEventName), t.options.resetOnClose && t._resetMenu()
                    };
                this.$menu.removeClass("dl-menuopen"), this.$menu.addClass("dl-menu-toggle"), this.$trigger.removeClass("dl-active"), this.supportTransitions ? this.$menu.on(this.transEndEventName, e) : e.call(), this.open = !1
            },
            openMenu: function() {
                this.open || this._openMenu()
            },
            _openMenu: function() {
                var e = this;
                n.off("click").on("click.dlmenu", function() {
                    e._closeMenu()
                }), this.$menu.addClass("dl-menuopen dl-menu-toggle").on(this.transEndEventName, function() {
                    t(this).removeClass("dl-menu-toggle")
                }), this.$trigger.addClass("dl-active"), this.open = !0
            },
            _resetMenu: function() {
                this.$menu.removeClass("dl-subview"), this.$menuitems.removeClass("dl-subview dl-subviewopen")
            }
        };
        var s = function(t) {
            e.console && e.console.error(t)
        };
        t.fn.dlmenu = function(e) {
            if ("string" == typeof e) {
                var i = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var o = t.data(this, "dlmenu");
                    o ? t.isFunction(o[e]) && "_" !== e.charAt(0) ? o[e].apply(o, i) : s("no such method '" + e + "' for dlmenu instance") : s("cannot call methods on dlmenu prior to initialization; attempted to call method '" + e + "'")
                })
            } else this.each(function() {
                var i = t.data(this, "dlmenu");
                i ? i._init() : i = t.data(this, "dlmenu", new t.DLMenu(e, this))
            });
            return this
        }
    }(jQuery, window),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(window.jQuery || window.Zepto)
    }(function(t) {
        var e, i, o, n, s, r, a = "Close",
            l = "BeforeClose",
            c = "MarkupParse",
            d = "Open",
            u = ".mfp",
            p = "mfp-ready",
            h = "mfp-removing",
            f = "mfp-prevent-close",
            m = function() {},
            g = !!window.jQuery,
            v = t(window),
            y = function(t, i) {
                e.ev.on("mfp" + t + u, i)
            },
            w = function(e, i, o, n) {
                var s = document.createElement("div");
                return s.className = "mfp-" + e, o && (s.innerHTML = o), n ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
            },
            b = function(i, o) {
                e.ev.triggerHandler("mfp" + i, o), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(o) ? o : [o]))
            },
            S = function(i) {
                return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i), e.currTemplate.closeBtn
            },
            k = function() {
                t.magnificPopup.instance || ((e = new m).init(), t.magnificPopup.instance = e)
            };
        m.prototype = {
            constructor: m,
            init: function() {
                var i = navigator.appVersion;
                e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = function() {
                    var t = document.createElement("p").style,
                        e = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== t.transition) return !0;
                    for (; e.length;)
                        if (e.pop() + "Transition" in t) return !0;
                    return !1
                }(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = t(document), e.popupsCache = {}
            },
            open: function(i) {
                var n;
                if (!1 === i.isObj) {
                    e.items = i.items.toArray(), e.index = 0;
                    var r, a = i.items;
                    for (n = 0; n < a.length; n++)
                        if ((r = a[n]).parsed && (r = r.el[0]), r === i.el[0]) {
                            e.index = n;
                            break
                        }
                } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (!e.isOpen) {
                    e.types = [], s = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = o, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = w("bg").on("click" + u, function() {
                        e.close()
                    }), e.wrap = w("wrap").attr("tabindex", -1).on("click" + u, function(t) {
                        e._checkIfClose(t.target) && e.close()
                    }), e.container = w("container", e.wrap)), e.contentContainer = w("content"), e.st.preloader && (e.preloader = w("preloader", e.container, e.st.tLoading));
                    var l = t.magnificPopup.modules;
                    for (n = 0; n < l.length; n++) {
                        var h = l[n];
                        h = h.charAt(0).toUpperCase() + h.slice(1), e["init" + h].call(e)
                    }
                    b("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (y(c, function(t, e, i, o) {
                        i.close_replaceWith = S(o.type)
                    }), s += " mfp-close-btn-in") : e.wrap.append(S())), e.st.alignTop && (s += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                        overflow: e.st.overflowY,
                        overflowX: "hidden",
                        overflowY: e.st.overflowY
                    }) : e.wrap.css({
                        top: v.scrollTop(),
                        position: "absolute"
                    }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                        height: o.height(),
                        position: "absolute"
                    }), e.st.enableEscapeKey && o.on("keyup" + u, function(t) {
                        27 === t.keyCode && e.close()
                    }), v.on("resize" + u, function() {
                        e.updateSize()
                    }), e.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && e.wrap.addClass(s);
                    var f = e.wH = v.height(),
                        m = {};
                    if (e.fixedContentPos && e._hasScrollBar(f)) {
                        var g = e._getScrollbarSize();
                        g && (m.marginRight = g)
                    }
                    e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : m.overflow = "hidden");
                    var k = e.st.mainClass;
                    return e.isIE7 && (k += " mfp-ie7"), k && e._addClassToMFP(k), e.updateItemHTML(), b("BuildControls"), t("html").css(m), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() {
                        e.content ? (e._addClassToMFP(p), e._setFocus()) : e.bgOverlay.addClass(p), o.on("focusin" + u, e._onFocusIn)
                    }, 16), e.isOpen = !0, e.updateSize(f), b(d), i
                }
                e.updateItemHTML()
            },
            close: function() {
                e.isOpen && (b(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(h), setTimeout(function() {
                    e._close()
                }, e.st.removalDelay)) : e._close())
            },
            _close: function() {
                b(a);
                var i = h + " " + p + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var n = {
                        marginRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : n.overflow = "", t("html").css(n)
                }
                o.off("keyup.mfp focusin" + u), e.ev.off(u), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, b("AfterClose")
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        o = window.innerHeight * i;
                    e.wrap.css("height", o), e.wH = o
                } else e.wH = t || v.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), b("Resize")
            },
            updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var o = i.type;
                if (b("BeforeChange", [e.currItem ? e.currItem.type : "", o]), e.currItem = i, !e.currTemplate[o]) {
                    var s = !!e.st[o] && e.st[o].markup;
                    b("FirstMarkupParse", s), e.currTemplate[o] = !s || t(s)
                }
                n && n !== i.type && e.container.removeClass("mfp-" + n + "-holder");
                var r = e["get" + o.charAt(0).toUpperCase() + o.slice(1)](i, e.currTemplate[o]);
                e.appendContent(r, o), i.preloaded = !0, b("Change", i), n = i.type, e.container.prepend(e.contentContainer), b("AfterChange")
            },
            appendContent: function(t, i) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(S()) : e.content = t : e.content = "", b("BeforeAppend"), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
            },
            parseEl: function(i) {
                var o, n = e.items[i];
                if (n.tagName ? n = {
                        el: t(n)
                    } : (o = n.type, n = {
                        data: n,
                        src: n.src
                    }), n.el) {
                    for (var s = e.types, r = 0; r < s.length; r++)
                        if (n.el.hasClass("mfp-" + s[r])) {
                            o = s[r];
                            break
                        } n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
                }
                return n.type = o || e.st.type || "inline", n.index = i, n.parsed = !0, e.items[i] = n, b("ElementParse", n), e.items[i]
            },
            addGroup: function(t, i) {
                var o = function(o) {
                    o.mfpEl = this, e._openClick(o, t, i)
                };
                i || (i = {});
                var n = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(n).on(n, o)) : (i.isObj = !1, i.delegate ? t.off(n).on(n, i.delegate, o) : (i.items = t, t.off(n).on(n, o)))
            },
            _openClick: function(i, o, n) {
                if ((void 0 !== n.midClick ? n.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var s = void 0 !== n.disableOn ? n.disableOn : t.magnificPopup.defaults.disableOn;
                    if (s)
                        if (t.isFunction(s)) {
                            if (!s.call(e)) return !0
                        } else if (v.width() < s) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), n.el = t(i.mfpEl), n.delegate && (n.items = o.find(n.delegate)), e.open(n)
                }
            },
            updateStatus: function(t, o) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), o || "loading" !== t || (o = e.st.tLoading);
                    var n = {
                        status: t,
                        text: o
                    };
                    b("UpdateStatus", n), t = n.status, o = n.text, e.preloader.html(o), e.preloader.find("a").on("click", function(t) {
                        t.stopImmediatePropagation()
                    }), e.container.addClass("mfp-s-" + t), i = t
                }
            },
            _checkIfClose: function(i) {
                if (!t(i).hasClass(f)) {
                    var o = e.st.closeOnContentClick,
                        n = e.st.closeOnBgClick;
                    if (o && n) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (o) return !0
                    } else if (n && t.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            },
            _hasScrollBar: function(t) {
                return (e.isIE7 ? o.height() : document.body.scrollHeight) > (t || v.height())
            },
            _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function(i) {
                if (i.target !== e.wrap[0] && !t.contains(e.wrap[0], i.target)) return e._setFocus(), !1
            },
            _parseMarkup: function(e, i, o) {
                var n;
                o.data && (i = t.extend(o.data, i)), b(c, [e, i, o]), t.each(i, function(i, o) {
                    if (void 0 === o || !1 === o) return !0;
                    if ((n = i.split("_")).length > 1) {
                        var s = e.find(u + "-" + n[0]);
                        if (s.length > 0) {
                            var r = n[1];
                            "replaceWith" === r ? s[0] !== o[0] && s.replaceWith(o) : "img" === r ? s.is("img") ? s.attr("src", o) : s.replaceWith(t("<img>").attr("src", o).attr("class", s.attr("class"))) : s.attr(n[1], o)
                        }
                    } else e.find(u + "-" + i).html(o)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: m.prototype,
            modules: [],
            open: function(e, i) {
                return k(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = i || 0, this.instance.open(e)
            },
            close: function() {
                return t.magnificPopup.instance && t.magnificPopup.instance.close()
            },
            registerModule: function(e, i) {
                i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, t.fn.magnificPopup = function(i) {
            k();
            var o = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var n, s = g ? o.data("magnificPopup") : o[0].magnificPopup,
                        r = parseInt(arguments[1], 10) || 0;
                    s.items ? n = s.items[r] : (n = o, s.delegate && (n = n.find(s.delegate)), n = n.eq(r)), e._openClick({
                        mfpEl: n
                    }, o, s)
                } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), g ? o.data("magnificPopup", i) : o[0].magnificPopup = i, e.addGroup(o, i);
            return o
        };
        var T, x, C, _ = "inline",
            E = function() {
                C && (x.after(C.addClass(T)).detach(), C = null)
            };
        t.magnificPopup.registerModule(_, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    e.types.push(_), y(a + "." + _, function() {
                        E()
                    })
                },
                getInline: function(i, o) {
                    if (E(), i.src) {
                        var n = e.st.inline,
                            s = t(i.src);
                        if (s.length) {
                            var r = s[0].parentNode;
                            r && r.tagName && (x || (T = n.hiddenClass, x = w(T), T = "mfp-" + T), C = s.after(x).detach().removeClass(T)), e.updateStatus("ready")
                        } else e.updateStatus("error", n.tNotFound), s = t("<div>");
                        return i.inlineElement = s, s
                    }
                    return e.updateStatus("ready"), e._parseMarkup(o, {}, i), o
                }
            }
        });
        var I, O = "ajax",
            $ = function() {
                I && t(document.body).removeClass(I)
            },
            z = function() {
                $(), e.req && e.req.abort()
            };
        t.magnificPopup.registerModule(O, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    e.types.push(O), I = e.st.ajax.cursor, y(a + "." + O, z), y("BeforeChange." + O, z)
                },
                getAjax: function(i) {
                    I && t(document.body).addClass(I), e.updateStatus("loading");
                    var o = t.extend({
                        url: i.src,
                        success: function(o, n, s) {
                            var r = {
                                data: o,
                                xhr: s
                            };
                            b("ParseAjax", r), e.appendContent(t(r.data), O), i.finished = !0, $(), e._setFocus(), setTimeout(function() {
                                e.wrap.addClass(p)
                            }, 16), e.updateStatus("ready"), b("AjaxContentAdded")
                        },
                        error: function() {
                            $(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(o), ""
                }
            }
        });
        var A;
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var i = e.st.image,
                        o = ".image";
                    e.types.push("image"), y(d + o, function() {
                        "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                    }), y(a + o, function() {
                        i.cursor && t(document.body).removeClass(i.cursor), v.off("resize" + u)
                    }), y("Resize" + o, e.resizeImage), e.isLowIE && y("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                    }
                },
                _onImageHasSize: function(t) {
                    t.img && (t.hasSize = !0, A && clearInterval(A), t.isCheckingImgSize = !1, b("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function(t) {
                    var i = 0,
                        o = t.img[0],
                        n = function(s) {
                            A && clearInterval(A), A = setInterval(function() {
                                o.naturalWidth > 0 ? e._onImageHasSize(t) : (i > 200 && clearInterval(A), 3 === ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500))
                            }, s)
                        };
                    n(1)
                },
                getImage: function(i, o) {
                    var n = 0,
                        s = function() {
                            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, b("ImageLoadComplete")) : ++n < 200 ? setTimeout(s, 100) : r())
                        },
                        r = function() {
                            i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                        },
                        a = e.st.image,
                        l = o.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", s).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                    }
                    return e._parseMarkup(o, {
                        title: function(i) {
                            if (i.data && void 0 !== i.data.title) return i.data.title;
                            var o = e.st.image.titleSrc;
                            if (o) {
                                if (t.isFunction(o)) return o.call(e, i);
                                if (i.el) return i.el.attr(o) || ""
                            }
                            return ""
                        }(i),
                        img_replaceWith: i.img
                    }, i), e.resizeImage(), i.hasSize ? (A && clearInterval(A), i.loadError ? (o.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (o.removeClass("mfp-loading"), e.updateStatus("ready")), o) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, o.addClass("mfp-loading"), e.findImageSize(i)), o)
                }
            }
        });
        var M;
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var t, i = e.st.zoom,
                        o = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var n, s, r = i.duration,
                            c = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    o = "all " + i.duration / 1e3 + "s " + i.easing,
                                    n = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    s = "transition";
                                return n["-webkit-" + s] = n["-moz-" + s] = n["-o-" + s] = n[s] = o, e.css(n), e
                            },
                            d = function() {
                                e.content.css("visibility", "visible")
                            };
                        y("BuildControls" + o, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(n), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void d();
                                (s = c(t)).css(e._getOffset()), e.wrap.append(s), n = setTimeout(function() {
                                    s.css(e._getOffset(!0)), n = setTimeout(function() {
                                        d(), setTimeout(function() {
                                            s.remove(), t = s = null, b("ZoomAnimationEnded")
                                        }, 16)
                                    }, r)
                                }, 16)
                            }
                        }), y(l + o, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(n), e.st.removalDelay = r, !t) {
                                    if (!(t = e._getItemToZoom())) return;
                                    s = c(t)
                                }
                                s.css(e._getOffset(!0)), e.wrap.append(s), e.content.css("visibility", "hidden"), setTimeout(function() {
                                    s.css(e._getOffset())
                                }, 16)
                            }
                        }), y(a + o, function() {
                            e._allowZoom() && (d(), s && s.remove(), t = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function() {
                    return !!e.currItem.hasSize && e.currItem.img
                },
                _getOffset: function(i) {
                    var o, n = (o = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
                        s = parseInt(o.css("padding-top"), 10),
                        r = parseInt(o.css("padding-bottom"), 10);
                    n.top -= t(window).scrollTop() - s;
                    var a = {
                        width: o.width(),
                        height: (g ? o.innerHeight() : o[0].offsetHeight) - r - s
                    };
                    return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), M ? a["-moz-transform"] = a.transform = "translate(" + n.left + "px," + n.top + "px)" : (a.left = n.left, a.top = n.top), a
                }
            }
        });
        var P = "iframe",
            L = function(t) {
                if (e.currTemplate[P]) {
                    var i = e.currTemplate[P].find("iframe");
                    i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(P, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    e.types.push(P), y("BeforeChange", function(t, e, i) {
                        e !== i && (e === P ? L() : i === P && L(!0))
                    }), y(a + "." + P, function() {
                        L()
                    })
                },
                getIframe: function(i, o) {
                    var n = i.src,
                        s = e.st.iframe;
                    t.each(s.patterns, function() {
                        if (n.indexOf(this.index) > -1) return this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1
                    });
                    var r = {};
                    return s.srcAction && (r[s.srcAction] = n), e._parseMarkup(o, r, i), e.updateStatus("ready"), o
                }
            }
        });
        var H = function(t) {
                var i = e.items.length;
                return t > i - 1 ? t - i : t < 0 ? i + t : t
            },
            j = function(t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var i = e.st.gallery,
                        n = ".mfp-gallery";
                    if (e.direction = !0, !i || !i.enabled) return !1;
                    s += " mfp-gallery", y(d + n, function() {
                        i.navigateByImgClick && e.wrap.on("click" + n, ".mfp-img", function() {
                            if (e.items.length > 1) return e.next(), !1
                        }), o.on("keydown" + n, function(t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        })
                    }), y("UpdateStatus" + n, function(t, i) {
                        i.text && (i.text = j(i.text, e.currItem.index, e.items.length))
                    }), y(c + n, function(t, o, n, s) {
                        var r = e.items.length;
                        n.counter = r > 1 ? j(i.tCounter, s.index, r) : ""
                    }), y("BuildControls" + n, function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var o = i.arrowMarkup,
                                n = e.arrowLeft = t(o.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(f),
                                s = e.arrowRight = t(o.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(f);
                            n.click(function() {
                                e.prev()
                            }), s.click(function() {
                                e.next()
                            }), e.container.append(n.add(s))
                        }
                    }), y("Change" + n, function() {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }, 16)
                    }), y(a + n, function() {
                        o.off(n), e.wrap.off("click" + n), e.arrowRight = e.arrowLeft = null
                    })
                },
                next: function() {
                    e.direction = !0, e.index = H(e.index + 1), e.updateItemHTML()
                },
                prev: function() {
                    e.direction = !1, e.index = H(e.index - 1), e.updateItemHTML()
                },
                goTo: function(t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload,
                        o = Math.min(i[0], e.items.length),
                        n = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function(i) {
                    if (i = H(i), !e.items[i].preloaded) {
                        var o = e.items[i];
                        o.parsed || (o = e.parseEl(i)), b("LazyLoad", o), "image" === o.type && (o.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                            o.hasSize = !0
                        }).on("error.mfploader", function() {
                            o.hasSize = !0, o.loadError = !0, b("LazyLoadError", o)
                        }).attr("src", o.src)), o.preloaded = !0
                    }
                }
            }
        });
        var D = "retina";
        t.magnificPopup.registerModule(D, {
            options: {
                replaceSrc: function(t) {
                    return t.src.replace(/\.\w+$/, function(t) {
                        return "@2x" + t
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            i = t.ratio;
                        (i = isNaN(i) ? i() : i) > 1 && (y("ImageHasSize." + D, function(t, e) {
                            e.img.css({
                                "max-width": e.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        }), y("ElementParse." + D, function(e, o) {
                            o.src = t.replaceSrc(o, i)
                        }))
                    }
                }
            }
        }), k()
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    o = i[t] = i[t] || [];
                return -1 == o.indexOf(e) && o.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var o = i.indexOf(e);
                return -1 != o && i.splice(o, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var o = 0,
                    n = i[o];
                e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t]; n;) {
                    var r = s && s[n];
                    r && (this.off(t, n), delete s[n]), n.apply(this, e), n = i[o += r ? 0 : 1]
                }
                return this
            }
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }(window, function(t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function o(t, e, n) {
            return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = function(t) {
                var e = [];
                if (Array.isArray(t)) e = t;
                else if ("number" == typeof t.length)
                    for (var i = 0; i < t.length; i++) e.push(t[i]);
                else e.push(t);
                return e
            }(t), this.options = i({}, this.options), "function" == typeof e ? n = e : i(this.options, e), n && this.on("always", n), this.getImages(), r && (this.jqDeferred = new r.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new o(t, e, n)
        }

        function n(t) {
            this.img = t
        }

        function s(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var r = t.jQuery,
            a = t.console;
        (o.prototype = Object.create(e.prototype)).options = {}, o.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && l[e]) {
                for (var i = t.querySelectorAll("img"), o = 0; o < i.length; o++) {
                    var n = i[o];
                    this.addImage(n)
                }
                if ("string" == typeof this.options.background) {
                    var s = t.querySelectorAll(this.options.background);
                    for (o = 0; o < s.length; o++) {
                        var r = s[o];
                        this.addElementBackgroundImages(r)
                    }
                }
            }
        };
        var l = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, o = i.exec(e.backgroundImage); null !== o;) {
                    var n = o && o[2];
                    n && this.addBackground(n, t), o = i.exec(e.backgroundImage)
                }
        }, o.prototype.addImage = function(t) {
            var e = new n(t);
            this.images.push(e)
        }, o.prototype.addBackground = function(t, e) {
            var i = new s(t, e);
            this.images.push(i)
        }, o.prototype.check = function() {
            function t(t, i, o) {
                setTimeout(function() {
                    e.progress(t, i, o)
                })
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
                e.once("progress", t), e.check()
            }) : void this.complete()
        }, o.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
        }, o.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, (n.prototype = Object.create(e.prototype)).check = function() {
            return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, n.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, n.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, n.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, n.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, n.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, (s.prototype = Object.create(n.prototype)).check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, s.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, o.makeJQueryPlugin = function(e) {
            (e = e || t.jQuery) && ((r = e).fn.imagesLoaded = function(t, e) {
                return new o(this, t, e).jqDeferred.promise(r(this))
            })
        }, o.makeJQueryPlugin(), o
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function(t, e) {
        "use strict";
        var i = Array.prototype.slice,
            o = t.console,
            n = void 0 === o ? function() {} : function(t) {
                o.error(t)
            };

        function s(o, s, a) {
            (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[o] = function(t) {
                if ("string" == typeof t) {
                    var e = i.call(arguments, 1);
                    return c = e, u = "$()." + o + '("' + (l = t) + '")', (r = this).each(function(t, e) {
                        var i = a.data(e, o);
                        if (i) {
                            var s = i[l];
                            if (s && "_" != l.charAt(0)) {
                                var r = s.apply(i, c);
                                d = void 0 === d ? r : d
                            } else n(u + " is not a valid method")
                        } else n(o + " not initialized. Cannot call methods, i.e. " + u)
                    }), void 0 !== d ? d : r
                }
                var r, l, c, d, u, p;
                return p = t, this.each(function(t, e) {
                    var i = a.data(e, o);
                    i ? (i.option(p), i._init()) : (i = new s(e, p), a.data(e, o, i))
                }), this
            }, r(a))
        }

        function r(t) {
            !t || t && t.bridget || (t.bridget = s)
        }
        return r(e || t.jQuery), s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    o = i[t] = i[t] || [];
                return -1 == o.indexOf(e) && o.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var o = i.indexOf(e);
                return -1 != o && i.splice(o, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var o = 0,
                    n = i[o];
                e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t]; n;) {
                    var r = s && s[n];
                    r && (this.off(t, n), delete s[n]), n.apply(this, e), n = i[o += r ? 0 : 1]
                }
                return this
            }
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }
        var e = "undefined" == typeof console ? function() {} : function(t) {
                console.error(t)
            },
            i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            o = i.length;

        function n(t) {
            var i = getComputedStyle(t);
            return i || e("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
        }
        var s, r = !1;

        function a(e) {
            if (function() {
                    if (!r) {
                        r = !0;
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                        var i = document.body || document.documentElement;
                        i.appendChild(e);
                        var o = n(e);
                        a.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
                    }
                }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var l = n(e);
                if ("none" == l.display) return function() {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < o; e++) t[i[e]] = 0;
                    return t
                }();
                var c = {};
                c.width = e.offsetWidth, c.height = e.offsetHeight;
                for (var d = c.isBorderBox = "border-box" == l.boxSizing, u = 0; u < o; u++) {
                    var p = i[u],
                        h = l[p],
                        f = parseFloat(h);
                    c[p] = isNaN(f) ? 0 : f
                }
                var m = c.paddingLeft + c.paddingRight,
                    g = c.paddingTop + c.paddingBottom,
                    v = c.marginLeft + c.marginRight,
                    y = c.marginTop + c.marginBottom,
                    w = c.borderLeftWidth + c.borderRightWidth,
                    b = c.borderTopWidth + c.borderBottomWidth,
                    S = d && s,
                    k = t(l.width);
                !1 !== k && (c.width = k + (S ? 0 : m + w));
                var T = t(l.height);
                return !1 !== T && (c.height = T + (S ? 0 : g + b)), c.innerWidth = c.width - (m + w), c.innerHeight = c.height - (g + b), c.outerWidth = c.width + v, c.outerHeight = c.height + y, c
            }
        }
        return a
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var o = e[i] + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var i = {
                extend: function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                modulo: function(t, e) {
                    return (t % e + e) % e
                },
                makeArray: function(t) {
                    var e = [];
                    if (Array.isArray(t)) e = t;
                    else if (t && "number" == typeof t.length)
                        for (var i = 0; i < t.length; i++) e.push(t[i]);
                    else e.push(t);
                    return e
                },
                removeFrom: function(t, e) {
                    var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
                },
                getParent: function(t, i) {
                    for (; t != document.body;)
                        if (t = t.parentNode, e(t, i)) return t
                },
                getQueryElement: function(t) {
                    return "string" == typeof t ? document.querySelector(t) : t
                },
                handleEvent: function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                },
                filterFindElements: function(t, o) {
                    t = i.makeArray(t);
                    var n = [];
                    return t.forEach(function(t) {
                        if (t instanceof HTMLElement)
                            if (o) {
                                e(t, o) && n.push(t);
                                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
                            } else n.push(t)
                    }), n
                },
                debounceMethod: function(t, e, i) {
                    var o = t.prototype[e],
                        n = e + "Timeout";
                    t.prototype[e] = function() {
                        var t = this[n];
                        t && clearTimeout(t);
                        var e = arguments,
                            s = this;
                        this[n] = setTimeout(function() {
                            o.apply(s, e), delete s[n]
                        }, i || 100)
                    }
                },
                docReady: function(t) {
                    var e = document.readyState;
                    "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
                },
                toDashed: function(t) {
                    return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                        return e + "-" + i
                    }).toLowerCase()
                }
            },
            o = t.console;
        return i.htmlInit = function(e, n) {
            i.docReady(function() {
                var s = i.toDashed(n),
                    r = "data-" + s,
                    a = document.querySelectorAll("[" + r + "]"),
                    l = document.querySelectorAll(".js-" + s),
                    c = i.makeArray(a).concat(i.makeArray(l)),
                    d = r + "-options",
                    u = t.jQuery;
                c.forEach(function(t) {
                    var i, s = t.getAttribute(r) || t.getAttribute(d);
                    try {
                        i = s && JSON.parse(s)
                    } catch (e) {
                        return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + e))
                    }
                    var a = new e(t, i);
                    u && u.data(t, n, a)
                })
            })
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function(t, e) {
        "use strict";
        var i = document.documentElement.style,
            o = "string" == typeof i.transition ? "transition" : "WebkitTransition",
            n = "string" == typeof i.transform ? "transform" : "WebkitTransform",
            s = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            } [o],
            r = {
                transform: n,
                transition: o,
                transitionDuration: o + "Duration",
                transitionProperty: o + "Property",
                transitionDelay: o + "Delay"
            };

        function a(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var l = a.prototype = Object.create(t.prototype);
        l.constructor = a, l._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, l.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.getSize = function() {
            this.size = e(this.element)
        }, l.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                e[r[i] || i] = t[i]
            }
        }, l.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                o = t[e ? "left" : "right"],
                n = t[i ? "top" : "bottom"],
                s = this.layout.size,
                r = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
                a = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
            r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
        }, l.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                o = this.layout._getOption("originTop"),
                n = i ? "paddingLeft" : "paddingRight",
                s = i ? "left" : "right",
                r = i ? "right" : "left",
                a = this.position.x + t[n];
            e[s] = this.getXValue(a), e[r] = "";
            var l = o ? "paddingTop" : "paddingBottom",
                c = o ? "top" : "bottom",
                d = o ? "bottom" : "top",
                u = this.position.y + t[l];
            e[c] = this.getYValue(u), e[d] = "", this.css(e), this.emitEvent("layout", [this])
        }, l.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, l.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, l._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                o = this.position.y,
                n = parseInt(t, 10),
                s = parseInt(e, 10),
                r = n === this.position.x && s === this.position.y;
            if (this.setPosition(t, e), !r || this.isTransitioning) {
                var a = t - i,
                    l = e - o,
                    c = {};
                c.transform = this.getTranslate(a, l), this.transition({
                    to: c,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            } else this.layoutPosition()
        }, l.getTranslate = function(t, e) {
            return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
        }, l.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, l.moveTo = l._transitionTo, l.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, l._nonTransition = function(t) {
            for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, l.transition = function(t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var c = "opacity," + n.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        });
        l.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: c,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(s, this, !1)
            }
        }, l.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, l.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var d = {
            "-webkit-transform": "transform"
        };
        l.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = d[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], function(t) {
                        for (var e in t) return !1;
                        return !0
                    }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
                this.emitEvent("transitionEnd", [this])
            }
        }, l.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
        }, l._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var u = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return l.removeTransitionStyles = function() {
            this.css(u)
        }, l.stagger = function(t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, l.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, l.remove = function() {
            o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), this.hide()) : this.removeElem()
        }, l.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, l.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, l.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, l.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, a
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
            return e(t, i, o, n, s)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, o, n) {
        "use strict";
        var s = t.console,
            r = t.jQuery,
            a = function() {},
            l = 0,
            c = {};

        function d(t, e) {
            var i = o.getQueryElement(t);
            if (i) {
                this.element = i, r && (this.$element = r(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
                var n = ++l;
                this.element.outlayerGUID = n, c[n] = this, this._create(), this._getOption("initLayout") && this.layout()
            } else s && s.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
        }
        d.namespace = "outlayer", d.Item = n, d.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var u = d.prototype;

        function p(t) {
            function e() {
                t.apply(this, arguments)
            }
            return (e.prototype = Object.create(t.prototype)).constructor = e, e
        }
        o.extend(u, e.prototype), u.option = function(t) {
            o.extend(this.options, t)
        }, u._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, d.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, u._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
        }, u.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, u._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
                var s = new i(e[n], this);
                o.push(s)
            }
            return o
        }, u._filterFindItemElements = function(t) {
            return o.filterFindElements(t, this.options.itemSelector)
        }, u.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element
            })
        }, u.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, u._init = u.layout, u._resetLayout = function() {
            this.getSize()
        }, u.getSize = function() {
            this.size = i(this.element)
        }, u._getMeasurement = function(t, e) {
            var o, n = this.options[t];
            n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
        }, u.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, u._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored
            })
        }, u._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach(function(t) {
                    var o = this._getItemLayoutPosition(t);
                    o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
                }, this), this._processLayoutQueue(i)
            }
        }, u._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, u._processLayoutQueue = function(t) {
            this.updateStagger(), t.forEach(function(t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, u.updateStagger = function() {
            var t = this.options.stagger;
            if (null != t) return this.stagger = function(t) {
                if ("number" == typeof t) return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/),
                    i = e && e[1],
                    o = e && e[2];
                if (!i.length) return 0;
                i = parseFloat(i);
                var n = h[o] || 1;
                return i * n
            }(t), this.stagger;
            this.stagger = 0
        }, u._positionItem = function(t, e, i, o, n) {
            o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
        }, u._postLayout = function() {
            this.resizeContainer()
        }, u.resizeContainer = function() {
            if (this._getOption("resizeContainer")) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, u._getContainerSize = a, u._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, u._emitCompleteOnItems = function(t, e) {
            var i = this;

            function o() {
                i.dispatchEvent(t + "Complete", null, [e])
            }
            var n = e.length;
            if (e && n) {
                var s = 0;
                e.forEach(function(e) {
                    e.once(t, r)
                })
            } else o();

            function r() {
                ++s == n && o()
            }
        }, u.dispatchEvent = function(t, e, i) {
            var o = e ? [e].concat(i) : i;
            if (this.emitEvent(t, o), r)
                if (this.$element = this.$element || r(this.element), e) {
                    var n = r.Event(e);
                    n.type = t, this.$element.trigger(n, i)
                } else this.$element.trigger(t, i)
        }, u.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, u.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, u.stamp = function(t) {
            (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, u.unstamp = function(t) {
            (t = this._find(t)) && t.forEach(function(t) {
                o.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, u._find = function(t) {
            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
        }, u._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, u._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, u._manageStamp = a, u._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                o = this._boundingRect,
                n = i(t);
            return {
                left: e.left - o.left - n.marginLeft,
                top: e.top - o.top - n.marginTop,
                right: o.right - e.right - n.marginRight,
                bottom: o.bottom - e.bottom - n.marginBottom
            }
        }, u.handleEvent = o.handleEvent, u.bindResize = function() {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, u.unbindResize = function() {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, u.onresize = function() {
            this.resize()
        }, o.debounceMethod(d, "onresize", 100), u.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, u.needsResizeLayout = function() {
            var t = i(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth
        }, u.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, u.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, u.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, u.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.reveal()
                })
            }
        }, u.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.hide()
                })
            }
        }, u.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, u.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, u.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i
            }
        }, u.getItems = function(t) {
            t = o.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var i = this.getItem(t);
                i && e.push(i)
            }, this), e
        }, u.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
                t.remove(), o.removeFrom(this.items, t)
            }, this)
        }, u.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete c[e], delete this.element.outlayerGUID, r && r.removeData(this.element, this.constructor.namespace)
        }, d.data = function(t) {
            var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
            return e && c[e]
        }, d.create = function(t, e) {
            var i = p(d);
            return i.defaults = o.extend({}, d.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, d.compatOptions), i.namespace = t, i.data = d.data, i.Item = p(n), o.htmlInit(i, t), r && r.bridget && r.bridget(t, i), i
        };
        var h = {
            ms: 1,
            s: 1e3
        };
        return d.Item = n, d
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        var i = e.prototype = Object.create(t.Item.prototype),
            o = i._create;
        i._create = function() {
            this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
        }, i.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        };
        var n = i.destroy;
        return i.destroy = function() {
            n.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        var o = i.prototype;
        return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) {
            o[t] = function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }), o.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element);
            return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
        }, o._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, o.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, o.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, o.getSegmentSize = function(t, e) {
            var i = t + e,
                o = "outer" + e;
            if (this._getMeasurement(i, o), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }, o.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, o.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, o.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function n() {
                i.apply(this, arguments)
            }
            return (n.prototype = Object.create(o)).constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function(t, e) {
        var i = t.create("masonry");
        return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0
        }, i.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var o = this.columnWidth += this.gutter,
                n = this.containerWidth + this.gutter,
                s = n / o,
                r = o - n % o;
            s = Math[r && r < 1 ? "round" : "floor"](s), this.cols = Math.max(s, 1)
        }, i.prototype.getContainerWidth = function() {
            var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, i.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
            i = Math.min(i, this.cols);
            for (var o = this._getColGroup(i), n = Math.min.apply(Math, o), s = o.indexOf(n), r = {
                    x: this.columnWidth * s,
                    y: n
                }, a = n + t.size.outerHeight, l = this.cols + 1 - o.length, c = 0; c < l; c++) this.colYs[s + c] = a;
            return r
        }, i.prototype._getColGroup = function(t) {
            if (t < 2) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
                var n = this.colYs.slice(o, o + t);
                e[o] = Math.max.apply(Math, n)
            }
            return e
        }, i.prototype._manageStamp = function(t) {
            var i = e(t),
                o = this._getElementOffset(t),
                n = this._getOption("originLeft") ? o.left : o.right,
                s = n + i.outerWidth,
                r = Math.floor(n / this.columnWidth);
            r = Math.max(0, r);
            var a = Math.floor(s / this.columnWidth);
            a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this._getOption("originTop") ? o.top : o.bottom) + i.outerHeight, c = r; c <= a; c++) this.colYs[c] = Math.max(l, this.colYs[c])
        }, i.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, i.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        "use strict";
        var i = t.create("masonry"),
            o = i.prototype,
            n = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
        var r = o.measureColumns;
        o.measureColumns = function() {
            this.items = this.isotope.filteredItems, r.call(this)
        };
        var a = o._getOption;
        return o._getOption = function(t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return i._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var o = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
        }, i._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("vertical", {
                horizontalAlignment: 0
            }),
            i = e.prototype;
        return i._resetLayout = function() {
            this.y = 0
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, i._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, o, n, s, r) {
        var a = t.jQuery,
            l = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            c = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        c.Item = s, c.LayoutMode = r;
        var d = c.prototype;
        d._create = function() {
            for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t)
        }, d.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, d._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                t[i].id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, d._initLayoutMode = function(t) {
            var e = r.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, d.layout = function() {
            this._isLayoutInited || !this._getOption("initLayout") ? this._layout() : this.arrange()
        }, d._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, d.arrange = function(t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, d._init = d.arrange, d._hideReveal = function(t) {
            this.reveal(t.needReveal), this.hide(t.needHide)
        }, d._getIsInstant = function() {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, d._bindArrangeComplete = function() {
            var t, e, i, o = this;

            function n() {
                t && e && i && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
            }
            this.once("layoutComplete", function() {
                t = !0, n()
            }), this.once("hideComplete", function() {
                e = !0, n()
            }), this.once("revealComplete", function() {
                i = !0, n()
            })
        }, d._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                var a = t[r];
                if (!a.isIgnored) {
                    var l = s(a);
                    l && i.push(a), l && a.isHidden ? o.push(a) : l || a.isHidden || n.push(a)
                }
            }
            return {
                matches: i,
                needReveal: o,
                needHide: n
            }
        }, d._getFilterTest = function(t) {
            return a && this.options.isJQueryFiltering ? function(e) {
                return a(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return o(e.element, t)
            }
        }, d.updateSortData = function(t) {
            var e;
            t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, d._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = u(i)
            }
        }, d._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && i < e; i++) {
                t[i].updateSortData()
            }
        };
        var u = function(t) {
            if ("string" != typeof t) return t;
            var e, i, o = l(t).split(" "),
                n = o[0],
                s = n.match(/^\[(.+)\]$/),
                r = (e = s && s[1], i = n, e ? function(t) {
                    return t.getAttribute(e)
                } : function(t) {
                    var e = t.querySelector(i);
                    return e && e.textContent
                }),
                a = c.sortDataParsers[o[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            } : function(t) {
                return t && r(t)
            }
        };
        c.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, d._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e, i, o = [].concat.apply(t, this.sortHistory),
                    n = (e = o, i = this.options.sortAscending, function(t, o) {
                        for (var n = 0; n < e.length; n++) {
                            var s = e[n],
                                r = t.sortData[s],
                                a = o.sortData[s];
                            if (r > a || r < a) {
                                var l = void 0 !== i[s] ? i[s] : i,
                                    c = l ? 1 : -1;
                                return (r > a ? 1 : -1) * c
                            }
                        }
                        return 0
                    });
                this.filteredItems.sort(n), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, d._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, d._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, d._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, d._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, d._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, d.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, d.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, d.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, d._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, d.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, o, n = e.length;
                for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
                var s = this._filter(e).matches;
                for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
                this.reveal(s)
            }
        };
        var p = d.remove;
        return d.remove = function(t) {
            t = n.makeArray(t);
            var e = this.getItems(t);
            p.call(this, t);
            for (var i = e && e.length, o = 0; i && o < i; o++) {
                var s = e[o];
                n.removeFrom(this.filteredItems, s)
            }
        }, d.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) {
                this.items[t].sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d._noTransition = function(t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var o = t.apply(this, e);
            return this.options.transitionDuration = i, o
        }, d.getFilteredItemElements = function() {
            return this.filteredItems.map(function(t) {
                return t.element
            })
        }, c
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["isotope-layout/js/layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("isotope-layout/js/layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("fitColumns"),
            i = e.prototype;
        return i._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxX = 0
        }, i._getItemLayoutPosition = function(t) {
            t.getSize(), 0 !== this.y && t.size.outerHeight + this.y > this.isotope.size.innerHeight && (this.y = 0, this.x = this.maxX);
            var e = {
                x: this.x,
                y: this.y
            };
            return this.maxX = Math.max(this.maxX, this.x + t.size.outerWidth), this.y += t.size.outerHeight, e
        }, i._getContainerSize = function() {
            return {
                width: this.maxX
            }
        }, i.needsResizeLayout = function() {
            return this.needsVerticalResizeLayout()
        }, e
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window, document)
        }) : "object" == typeof exports ? module.exports = t(require("jquery"), window, document) : t(jQuery, window, document)
    }(function(t, e, i) {
        "use strict";
        var o, n, s, r, a, l, c, d, u, p, h, f, m, g, v, y, w, b, S, k, T, x, C;
        y = {
            paneClass: "nano-pane",
            sliderClass: "nano-slider",
            contentClass: "nano-content",
            enabledClass: "has-scrollbar",
            flashedClass: "flashed",
            activeClass: "active",
            iOSNativeScrolling: !1,
            preventPageScrolling: !1,
            disableResize: !1,
            alwaysVisible: !1,
            flashDelay: 1500,
            sliderMinHeight: 20,
            sliderMaxHeight: null,
            documentContext: null,
            windowContext: null
        }, f = "scroll", a = "mousedown", l = "mouseenter", c = "mousemove", u = "mousewheel", d = "mouseup", h = "resize", g = "up", s = "DOMMouseScroll", r = "down", m = "touchmove", o = "Microsoft Internet Explorer" === e.navigator.appName && /msie 7./i.test(e.navigator.appVersion) && e.ActiveXObject, n = null, k = e.requestAnimationFrame, v = e.cancelAnimationFrame, x = i.createElement("div").style, C = function() {
            var t, e, i, o;
            for (t = i = 0, o = (e = ["t", "webkitT", "MozT", "msT", "OT"]).length; i < o; t = ++i)
                if (e[t], e[t] + "ransform" in x) return e[t].substr(0, e[t].length - 1);
            return !1
        }(), T = function(t) {
            return !1 !== C && ("" === C ? t : C + t.charAt(0).toUpperCase() + t.substr(1))
        }("transform"), b = !1 !== T, w = function() {
            var t, e, o;
            return (e = (t = i.createElement("div")).style).position = "absolute", e.width = "100px", e.height = "100px", e.overflow = f, e.top = "-9999px", i.body.appendChild(t), o = t.offsetWidth - t.clientWidth, i.body.removeChild(t), o
        }, S = function() {
            var t, i, o;
            return i = e.navigator.userAgent, !!(t = /(?=.+Mac OS X)(?=.+Firefox)/.test(i)) && ((o = /Firefox\/\d{2}\./.exec(i)) && (o = o[0].replace(/\D+/g, "")), t && +o > 23)
        }, p = function() {
            function p(o, s) {
                this.el = o, this.options = s, n || (n = w()), this.$el = t(this.el), this.doc = t(this.options.documentContext || i), this.win = t(this.options.windowContext || e), this.body = this.doc.find("body"), this.$content = this.$el.children("." + this.options.contentClass), this.$content.attr("tabindex", this.options.tabIndex || 0), this.content = this.$content[0], this.previousPosition = 0, this.options.iOSNativeScrolling && null != this.el.style.WebkitOverflowScrolling ? this.nativeScrolling() : this.generate(), this.createEvents(), this.addEvents(), this.reset()
            }
            return p.prototype.preventScrolling = function(t, e) {
                if (this.isActive)
                    if (t.type === s)(e === r && t.originalEvent.detail > 0 || e === g && t.originalEvent.detail < 0) && t.preventDefault();
                    else if (t.type === u) {
                    if (!t.originalEvent || !t.originalEvent.wheelDelta) return;
                    (e === r && t.originalEvent.wheelDelta < 0 || e === g && t.originalEvent.wheelDelta > 0) && t.preventDefault()
                }
            }, p.prototype.nativeScrolling = function() {
                this.$content.css({
                    WebkitOverflowScrolling: "touch"
                }), this.iOSNativeScrolling = !0, this.isActive = !0
            }, p.prototype.updateScrollValues = function() {
                var t, e;
                t = this.content, this.maxScrollTop = t.scrollHeight - t.clientHeight, this.prevScrollTop = this.contentScrollTop || 0, this.contentScrollTop = t.scrollTop, e = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same", this.previousPosition = this.contentScrollTop, "same" !== e && this.$el.trigger("update", {
                    position: this.contentScrollTop,
                    maximum: this.maxScrollTop,
                    direction: e
                }), this.iOSNativeScrolling || (this.maxSliderTop = this.paneHeight - this.sliderHeight, this.sliderTop = 0 === this.maxScrollTop ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop)
            }, p.prototype.setOnScrollStyles = function() {
                var t, e;
                b ? (t = {})[T] = "translate(0, " + this.sliderTop + "px)" : t = {
                    top: this.sliderTop
                }, k ? (v && this.scrollRAF && v(this.scrollRAF), this.scrollRAF = k((e = this, function() {
                    return e.scrollRAF = null, e.slider.css(t)
                }))) : this.slider.css(t)
            }, p.prototype.createEvents = function() {
                var t, e, i, o, n, s, a, u;
                this.events = {
                    down: (u = this, function(t) {
                        return u.isBeingDragged = !0, u.offsetY = t.pageY - u.slider.offset().top, u.slider.is(t.target) || (u.offsetY = 0), u.pane.addClass(u.options.activeClass), u.doc.bind(c, u.events.drag).bind(d, u.events.up), u.body.bind(l, u.events.enter), !1
                    }),
                    drag: (a = this, function(t) {
                        return a.sliderY = t.pageY - a.$el.offset().top - a.paneTop - (a.offsetY || .5 * a.sliderHeight), a.scroll(), a.contentScrollTop >= a.maxScrollTop && a.prevScrollTop !== a.maxScrollTop ? a.$el.trigger("scrollend") : 0 === a.contentScrollTop && 0 !== a.prevScrollTop && a.$el.trigger("scrolltop"), !1
                    }),
                    up: (s = this, function(t) {
                        return s.isBeingDragged = !1, s.pane.removeClass(s.options.activeClass), s.doc.unbind(c, s.events.drag).unbind(d, s.events.up), s.body.unbind(l, s.events.enter), !1
                    }),
                    resize: (n = this, function(t) {
                        n.reset()
                    }),
                    panedown: (o = this, function(t) {
                        return o.sliderY = (t.offsetY || t.originalEvent.layerY) - .5 * o.sliderHeight, o.scroll(), o.events.down(t), !1
                    }),
                    scroll: (i = this, function(t) {
                        i.updateScrollValues(), i.isBeingDragged || (i.iOSNativeScrolling || (i.sliderY = i.sliderTop, i.setOnScrollStyles()), null != t && (i.contentScrollTop >= i.maxScrollTop ? (i.options.preventPageScrolling && i.preventScrolling(t, r), i.prevScrollTop !== i.maxScrollTop && i.$el.trigger("scrollend")) : 0 === i.contentScrollTop && (i.options.preventPageScrolling && i.preventScrolling(t, g), 0 !== i.prevScrollTop && i.$el.trigger("scrolltop"))))
                    }),
                    wheel: (e = this, function(t) {
                        var i;
                        if (null != t) return (i = t.delta || t.wheelDelta || t.originalEvent && t.originalEvent.wheelDelta || -t.detail || t.originalEvent && -t.originalEvent.detail) && (e.sliderY += -i / 3), e.scroll(), !1
                    }),
                    enter: (t = this, function(e) {
                        var i;
                        if (t.isBeingDragged) return 1 !== (e.buttons || e.which) ? (i = t.events).up.apply(i, arguments) : void 0
                    })
                }
            }, p.prototype.addEvents = function() {
                var t;
                this.removeEvents(), t = this.events, this.options.disableResize || this.win.bind(h, t[h]), this.iOSNativeScrolling || (this.slider.bind(a, t[r]), this.pane.bind(a, t.panedown).bind(u + " " + s, t.wheel)), this.$content.bind(f + " " + u + " " + s + " " + m, t[f])
            }, p.prototype.removeEvents = function() {
                var t;
                t = this.events, this.win.unbind(h, t[h]), this.iOSNativeScrolling || (this.slider.unbind(), this.pane.unbind()), this.$content.unbind(f + " " + u + " " + s + " " + m, t[f])
            }, p.prototype.generate = function() {
                var t, i, o, s, r;
                return s = (i = this.options).paneClass, r = i.sliderClass, i.contentClass, (o = this.$el.children("." + s)).length || o.children("." + r).length || this.$el.append('<div class="' + s + '"><div class="' + r + '" /></div>'), this.pane = this.$el.children("." + s), this.slider = this.pane.find("." + r), 0 === n && S() ? t = {
                    right: -14,
                    paddingRight: +e.getComputedStyle(this.content, null).getPropertyValue("padding-right").replace(/[^0-9.]+/g, "") + 14
                } : n && (t = {
                    right: -n
                }, this.$el.addClass(i.enabledClass)), null != t && this.$content.css(t), this
            }, p.prototype.restore = function() {
                this.stopped = !1, this.iOSNativeScrolling || this.pane.show(), this.addEvents()
            }, p.prototype.reset = function() {
                var t, e, i, s, r, a, l, c, d, u, p;
                if (!this.iOSNativeScrolling) return this.$el.find("." + this.options.paneClass).length || this.generate().stop(), this.stopped && this.restore(), r = (s = (t = this.content).style).overflowY, o && this.$content.css({
                    height: this.$content.height()
                }), e = t.scrollHeight + n, (d = parseInt(this.$el.css("max-height"), 10)) > 0 && (this.$el.height(""), this.$el.height(t.scrollHeight > d ? d : t.scrollHeight)), l = (a = this.pane.outerHeight(!1)) + (c = parseInt(this.pane.css("top"), 10)) + parseInt(this.pane.css("bottom"), 10), (p = Math.round(l / e * a)) < this.options.sliderMinHeight ? p = this.options.sliderMinHeight : null != this.options.sliderMaxHeight && p > this.options.sliderMaxHeight && (p = this.options.sliderMaxHeight), r === f && s.overflowX !== f && (p += n), this.maxSliderTop = l - p, this.contentHeight = e, this.paneHeight = a, this.paneOuterHeight = l, this.sliderHeight = p, this.paneTop = c, this.slider.height(p), this.events.scroll(), this.pane.show(), this.isActive = !0, t.scrollHeight === t.clientHeight || this.pane.outerHeight(!0) >= t.scrollHeight && r !== f ? (this.pane.hide(), this.isActive = !1) : this.el.clientHeight === t.scrollHeight && r === f ? this.slider.hide() : this.slider.show(), this.pane.css({
                    opacity: this.options.alwaysVisible ? 1 : "",
                    visibility: this.options.alwaysVisible ? "visible" : ""
                }), "static" !== (i = this.$content.css("position")) && "relative" !== i || (u = parseInt(this.$content.css("right"), 10)) && this.$content.css({
                    right: "",
                    marginRight: u
                }), this;
                this.contentHeight = this.content.scrollHeight
            }, p.prototype.scroll = function() {
                if (this.isActive) return this.sliderY = Math.max(0, this.sliderY), this.sliderY = Math.min(this.maxSliderTop, this.sliderY), this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop), this.iOSNativeScrolling || (this.updateScrollValues(), this.setOnScrollStyles()), this
            }, p.prototype.scrollBottom = function(t) {
                if (this.isActive) return this.$content.scrollTop(this.contentHeight - this.$content.height() - t).trigger(u), this.stop().restore(), this
            }, p.prototype.scrollTop = function(t) {
                if (this.isActive) return this.$content.scrollTop(+t).trigger(u), this.stop().restore(), this
            }, p.prototype.scrollTo = function(t) {
                if (this.isActive) return this.scrollTop(this.$el.find(t).get(0).offsetTop), this
            }, p.prototype.stop = function() {
                return v && this.scrollRAF && (v(this.scrollRAF), this.scrollRAF = null), this.stopped = !0, this.removeEvents(), this.iOSNativeScrolling || this.pane.hide(), this
            }, p.prototype.destroy = function() {
                return this.stopped || this.stop(), !this.iOSNativeScrolling && this.pane.length && this.pane.remove(), o && this.$content.height(""), this.$content.removeAttr("tabindex"), this.$el.hasClass(this.options.enabledClass) && (this.$el.removeClass(this.options.enabledClass), this.$content.css({
                    right: ""
                })), this
            }, p.prototype.flash = function() {
                var t;
                if (!this.iOSNativeScrolling && this.isActive) return this.reset(), this.pane.addClass(this.options.flashedClass), setTimeout((t = this, function() {
                    t.pane.removeClass(t.options.flashedClass)
                }), this.options.flashDelay), this
            }, p
        }(), t.fn.nanoScroller = function(e) {
            return this.each(function() {
                var i, o;
                if ((o = this.nanoscroller) || (i = t.extend({}, y, e), this.nanoscroller = o = new p(this, i)), e && "object" == typeof e) {
                    if (t.extend(o.options, e), null != e.scrollBottom) return o.scrollBottom(e.scrollBottom);
                    if (null != e.scrollTop) return o.scrollTop(e.scrollTop);
                    if (e.scrollTo) return o.scrollTo(e.scrollTo);
                    if ("bottom" === e.scroll) return o.scrollBottom(0);
                    if ("top" === e.scroll) return o.scrollTop(0);
                    if (e.scroll && e.scroll instanceof t) return o.scrollTo(e.scroll);
                    if (e.stop) return o.stop();
                    if (e.destroy) return o.destroy();
                    if (e.flash) return o.flash()
                }
                return o.reset()
            })
        }, t.fn.nanoScroller.Constructor = p
    }),
    function(t) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
            ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).ProgressBar = t()
        }
    }(function() {
        return function t(e, i, o) {
            function n(r, a) {
                if (!i[r]) {
                    if (!e[r]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(r, !0);
                        if (s) return s(r, !0);
                        var c = new Error("Cannot find module '" + r + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var d = i[r] = {
                        exports: {}
                    };
                    e[r][0].call(d.exports, function(t) {
                        var i = e[r][1][t];
                        return n(i || t)
                    }, d, d.exports, t, e, i, o)
                }
                return i[r].exports
            }
            for (var s = "function" == typeof require && require, r = 0; r < o.length; r++) n(o[r]);
            return n
        }({
            1: [function(t, e, i) {
                (function() {
                    var t, o = this || Function("return this")(),
                        n = function() {
                            "use strict";

                            function t() {}

                            function n(t, e) {
                                var i;
                                for (i in t) Object.hasOwnProperty.call(t, i) && e(i)
                            }

                            function s(t, e) {
                                return n(e, function(i) {
                                    t[i] = e[i]
                                }), t
                            }

                            function r(t, e) {
                                n(e, function(i) {
                                    void 0 === t[i] && (t[i] = e[i])
                                })
                            }

                            function a(t, e, i, o, n, s, r) {
                                var a, c, d, u = t < s ? 0 : (t - s) / n;
                                for (a in e) e.hasOwnProperty(a) && (d = "function" == typeof(c = r[a]) ? c : h[c], e[a] = l(i[a], o[a], d, u));
                                return e
                            }

                            function l(t, e, i, o) {
                                return t + (e - t) * i(o)
                            }

                            function c(t, e) {
                                var i = p.prototype.filter,
                                    o = t._filterArgs;
                                n(i, function(n) {
                                    void 0 !== i[n][e] && i[n][e].apply(t, o)
                                })
                            }

                            function d(t, e, i, o, n, s, r, l, d, u, p) {
                                m = e + i + o, g = Math.min(p || k(), m), v = g >= m, y = o - (m - g), t.isPlaying() && (v ? (d(r, t._attachment, y), t.stop(!0)) : (t._scheduleId = u(t._timeoutHandler, b), c(t, "beforeTween"), g < e + i ? a(1, n, s, r, 1, 1, l) : a(g, n, s, r, o, e + i, l), c(t, "afterTween"), d(n, t._attachment, y)))
                            }

                            function u(t, e) {
                                var i = {},
                                    o = typeof e;
                                return n(t, "string" === o || "function" === o ? function(t) {
                                    i[t] = e
                                } : function(t) {
                                    i[t] || (i[t] = e[t] || w)
                                }), i
                            }

                            function p(t, e) {
                                this._currentState = t || {}, this._configured = !1, this._scheduleFunction = f, void 0 !== e && this.setConfig(e)
                            }
                            var h, f, m, g, v, y, w = "linear",
                                b = 1e3 / 60,
                                S = Date.now ? Date.now : function() {
                                    return +new Date
                                },
                                k = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : S;
                            return f = "undefined" != typeof window && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame) || setTimeout, p.prototype.tween = function(t) {
                                return this._isTweening ? this : (void 0 === t && this._configured || this.setConfig(t), this._timestamp = k(), this._start(this.get(), this._attachment), this.resume())
                            }, p.prototype.setConfig = function(e) {
                                e = e || {}, this._configured = !0, this._attachment = e.attachment, this._pausedAtTime = null, this._scheduleId = null, this._delay = e.delay || 0, this._start = e.start || t, this._step = e.step || t, this._finish = e.finish || t, this._duration = e.duration || 500, this._currentState = s({}, e.from || this.get()), this._originalState = this.get(), this._targetState = s({}, e.to || this.get());
                                var i = this;
                                this._timeoutHandler = function() {
                                    d(i, i._timestamp, i._delay, i._duration, i._currentState, i._originalState, i._targetState, i._easing, i._step, i._scheduleFunction)
                                };
                                var o = this._currentState,
                                    n = this._targetState;
                                return r(n, o), this._easing = u(o, e.easing || w), this._filterArgs = [o, this._originalState, n, this._easing], c(this, "tweenCreated"), this
                            }, p.prototype.get = function() {
                                return s({}, this._currentState)
                            }, p.prototype.set = function(t) {
                                this._currentState = t
                            }, p.prototype.pause = function() {
                                return this._pausedAtTime = k(), this._isPaused = !0, this
                            }, p.prototype.resume = function() {
                                return this._isPaused && (this._timestamp += k() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this
                            }, p.prototype.seek = function(t) {
                                t = Math.max(t, 0);
                                var e = k();
                                return this._timestamp + t === 0 ? this : (this._timestamp = e - t, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, d(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, e), this.pause()), this)
                            }, p.prototype.stop = function(e) {
                                return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = t, (o.cancelAnimationFrame || o.webkitCancelAnimationFrame || o.oCancelAnimationFrame || o.msCancelAnimationFrame || o.mozCancelRequestAnimationFrame || o.clearTimeout)(this._scheduleId), e && (c(this, "beforeTween"), a(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), c(this, "afterTween"), c(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
                            }, p.prototype.isPlaying = function() {
                                return this._isTweening && !this._isPaused
                            }, p.prototype.setScheduleFunction = function(t) {
                                this._scheduleFunction = t
                            }, p.prototype.dispose = function() {
                                var t;
                                for (t in this) this.hasOwnProperty(t) && delete this[t]
                            }, p.prototype.filter = {}, h = p.prototype.formula = {
                                linear: function(t) {
                                    return t
                                }
                            }, s(p, {
                                now: k,
                                each: n,
                                tweenProps: a,
                                tweenProp: l,
                                applyFilter: c,
                                shallowCopy: s,
                                defaults: r,
                                composeEasingObject: u
                            }), "function" == typeof SHIFTY_DEBUG_NOW && (o.timeoutHandler = d), "object" == typeof i ? e.exports = p : void 0 === o.Tweenable && (o.Tweenable = p), p
                        }();
                    n.shallowCopy(n.prototype.formula, {
                            easeInQuad: function(t) {
                                return Math.pow(t, 2)
                            },
                            easeOutQuad: function(t) {
                                return -(Math.pow(t - 1, 2) - 1)
                            },
                            easeInOutQuad: function(t) {
                                return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2)
                            },
                            easeInCubic: function(t) {
                                return Math.pow(t, 3)
                            },
                            easeOutCubic: function(t) {
                                return Math.pow(t - 1, 3) + 1
                            },
                            easeInOutCubic: function(t) {
                                return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
                            },
                            easeInQuart: function(t) {
                                return Math.pow(t, 4)
                            },
                            easeOutQuart: function(t) {
                                return -(Math.pow(t - 1, 4) - 1)
                            },
                            easeInOutQuart: function(t) {
                                return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                            },
                            easeInQuint: function(t) {
                                return Math.pow(t, 5)
                            },
                            easeOutQuint: function(t) {
                                return Math.pow(t - 1, 5) + 1
                            },
                            easeInOutQuint: function(t) {
                                return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
                            },
                            easeInSine: function(t) {
                                return 1 - Math.cos(t * (Math.PI / 2))
                            },
                            easeOutSine: function(t) {
                                return Math.sin(t * (Math.PI / 2))
                            },
                            easeInOutSine: function(t) {
                                return -.5 * (Math.cos(Math.PI * t) - 1)
                            },
                            easeInExpo: function(t) {
                                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                            },
                            easeOutExpo: function(t) {
                                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                            },
                            easeInOutExpo: function(t) {
                                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                            },
                            easeInCirc: function(t) {
                                return -(Math.sqrt(1 - t * t) - 1)
                            },
                            easeOutCirc: function(t) {
                                return Math.sqrt(1 - Math.pow(t - 1, 2))
                            },
                            easeInOutCirc: function(t) {
                                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                            },
                            easeOutBounce: function(t) {
                                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                            },
                            easeInBack: function(t) {
                                return t * t * (2.70158 * t - 1.70158)
                            },
                            easeOutBack: function(t) {
                                return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                            },
                            easeInOutBack: function(t) {
                                var e = 1.70158;
                                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                            },
                            elastic: function(t) {
                                return -1 * Math.pow(4, -8 * t) * Math.sin((6 * t - 1) * (2 * Math.PI) / 2) + 1
                            },
                            swingFromTo: function(t) {
                                var e = 1.70158;
                                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                            },
                            swingFrom: function(t) {
                                return t * t * (2.70158 * t - 1.70158)
                            },
                            swingTo: function(t) {
                                return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                            },
                            bounce: function(t) {
                                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                            },
                            bouncePast: function(t) {
                                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                            },
                            easeFromTo: function(t) {
                                return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                            },
                            easeFrom: function(t) {
                                return Math.pow(t, 4)
                            },
                            easeTo: function(t) {
                                return Math.pow(t, .25)
                            }
                        }),
                        function() {
                            function t(t, e, i, o, n, s) {
                                function r(t) {
                                    return ((c * t + d) * t + u) * t
                                }

                                function a(t) {
                                    return t >= 0 ? t : 0 - t
                                }
                                var l, c = 0,
                                    d = 0,
                                    u = 0,
                                    p = 0,
                                    h = 0,
                                    f = 0;
                                return c = 1 - (u = 3 * e) - (d = 3 * (o - e) - u), p = 1 - (f = 3 * i) - (h = 3 * (n - i) - f), l = function(t, e) {
                                    var i, o, n, s, l, p, h;
                                    for (n = t, p = 0; p < 8; p++) {
                                        if (a(s = r(n) - t) < e) return n;
                                        if (a(l = (3 * c * (h = n) + 2 * d) * h + u) < 1e-6) break;
                                        n -= s / l
                                    }
                                    if (o = 1, (n = t) < (i = 0)) return i;
                                    if (n > o) return o;
                                    for (; i < o;) {
                                        if (a((s = r(n)) - t) < e) return n;
                                        t > s ? i = n : o = n, n = .5 * (o - i) + i
                                    }
                                    return n
                                }(t, 1 / (200 * s)), ((p * l + h) * l + f) * l
                            }
                            n.setBezierFunction = function(e, i, o, s, r) {
                                var a, l, c, d, u = (a = i, l = o, c = s, d = r, function(e) {
                                    return t(e, a, l, c, d, 1)
                                });
                                return u.displayName = e, u.x1 = i, u.y1 = o, u.x2 = s, u.y2 = r, n.prototype.formula[e] = u
                            }, n.unsetBezierFunction = function(t) {
                                delete n.prototype.formula[t]
                            }
                        }(), (t = new n)._filterArgs = [], n.interpolate = function(e, i, o, s, r) {
                            var a = n.shallowCopy({}, e),
                                l = r || 0,
                                c = n.composeEasingObject(e, s || "linear");
                            t.set({});
                            var d = t._filterArgs;
                            d.length = 0, d[0] = a, d[1] = e, d[2] = i, d[3] = c, n.applyFilter(t, "tweenCreated"), n.applyFilter(t, "beforeTween");
                            var u, p, h, f, m, g, v = (u = e, p = a, h = i, f = o, m = c, g = l, n.tweenProps(f, p, u, h, 1, g, m));
                            return n.applyFilter(t, "afterTween"), v
                        },
                        function(t) {
                            function e(e) {
                                t.each(e, function(t) {
                                    var o = e[t];
                                    "string" == typeof o && o.match(m) && (e[t] = n(m, o, i))
                                })
                            }

                            function i(t) {
                                var e, i = (3 === (e = (e = t).replace(/#/, "")).length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]), v[0] = o(e.substr(0, 2)), v[1] = o(e.substr(2, 2)), v[2] = o(e.substr(4, 2)), v);
                                return "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")"
                            }

                            function o(t) {
                                return parseInt(t, 16)
                            }

                            function n(t, e, i) {
                                var o = e.match(t),
                                    n = e.replace(t, g);
                                if (o)
                                    for (var s, r = o.length, a = 0; a < r; a++) s = o.shift(), n = n.replace(g, i(s));
                                return n
                            }

                            function s(t) {
                                for (var e = t.match(p), i = e.length, o = t.match(f)[0], n = 0; n < i; n++) o += parseInt(e[n], 10) + ",";
                                return o.slice(0, -1) + ")"
                            }

                            function r(e) {
                                var i = {};
                                return t.each(e, function(t) {
                                    var o, n, s = e[t];
                                    if ("string" == typeof s) {
                                        var r = c(s);
                                        i[t] = {
                                            formatString: (o = s, n = o.match(u), n ? (1 === n.length || o.charAt(0).match(d)) && n.unshift("") : n = ["", ""], n.join(g)),
                                            chunkNames: function(t, e) {
                                                var i, o = [],
                                                    n = t.length;
                                                for (i = 0; i < n; i++) o.push("_" + e + "_" + i);
                                                return o
                                            }(r, t)
                                        }
                                    }
                                }), i
                            }

                            function a(e, i) {
                                t.each(i, function(t) {
                                    for (var o = c(e[t]), n = o.length, s = 0; s < n; s++) e[i[t].chunkNames[s]] = +o[s];
                                    delete e[t]
                                })
                            }

                            function l(e, i) {
                                t.each(i, function(t) {
                                    var o = e[t],
                                        r = function(t, e) {
                                            y.length = 0;
                                            for (var i = e.length, o = 0; o < i; o++) y.push(t[e[o]]);
                                            return y
                                        }(function(t, e) {
                                            for (var i, o = {}, n = e.length, s = 0; s < n; s++) i = e[s], o[i] = t[i], delete t[i];
                                            return o
                                        }(e, i[t].chunkNames), i[t].chunkNames);
                                    o = function(t, e) {
                                        for (var i = t, o = e.length, n = 0; n < o; n++) i = i.replace(g, +e[n].toFixed(4));
                                        return i
                                    }(i[t].formatString, r), e[t] = n(h, o, s)
                                })
                            }

                            function c(t) {
                                return t.match(p)
                            }
                            var d = /(\d|\-|\.)/,
                                u = /([^\-0-9\.]+)/g,
                                p = /[0-9.\-]+/g,
                                h = new RegExp("rgb\\(" + p.source + /,\s*/.source + p.source + /,\s*/.source + p.source + "\\)", "g"),
                                f = /^.*\(/,
                                m = /#([0-9]|[a-f]){3,6}/gi,
                                g = "VAL",
                                v = [],
                                y = [];
                            t.prototype.filter.token = {
                                tweenCreated: function(t, i, o, n) {
                                    e(t), e(i), e(o), this._tokenData = r(t)
                                },
                                beforeTween: function(e, i, o, n) {
                                    var s, r;
                                    s = n, r = this._tokenData, t.each(r, function(t) {
                                        var e, i = r[t].chunkNames,
                                            o = i.length,
                                            n = s[t];
                                        if ("string" == typeof n) {
                                            var a = n.split(" "),
                                                l = a[a.length - 1];
                                            for (e = 0; e < o; e++) s[i[e]] = a[e] || l
                                        } else
                                            for (e = 0; e < o; e++) s[i[e]] = n;
                                        delete s[t]
                                    }), a(e, this._tokenData), a(i, this._tokenData), a(o, this._tokenData)
                                },
                                afterTween: function(e, i, o, n) {
                                    var s, r;
                                    l(e, this._tokenData), l(i, this._tokenData), l(o, this._tokenData), s = n, r = this._tokenData, t.each(r, function(t) {
                                        var e = r[t].chunkNames,
                                            i = e.length,
                                            o = s[e[0]];
                                        if ("string" == typeof o) {
                                            for (var n = "", a = 0; a < i; a++) n += " " + s[e[a]], delete s[e[a]];
                                            s[t] = n.substr(1)
                                        } else s[t] = o
                                    })
                                }
                            }
                        }(n)
                }).call(null)
            }, {}],
            2: [function(t, e, i) {
                var o = t("./shape"),
                    n = t("./utils"),
                    s = function(t, e) {
                        this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", this.containerAspectRatio = 1, o.apply(this, arguments)
                    };
                (s.prototype = new o).constructor = s, s.prototype._pathString = function(t) {
                    var e = t.strokeWidth;
                    t.trailWidth && t.trailWidth > t.strokeWidth && (e = t.trailWidth);
                    var i = 50 - e / 2;
                    return n.render(this._pathTemplate, {
                        radius: i,
                        "2radius": 2 * i
                    })
                }, s.prototype._trailString = function(t) {
                    return this._pathString(t)
                }, e.exports = s
            }, {
                "./shape": 7,
                "./utils": 9
            }],
            3: [function(t, e, i) {
                var o = t("./shape"),
                    n = t("./utils"),
                    s = function(t, e) {
                        this._pathTemplate = "M 0,{center} L 100,{center}", o.apply(this, arguments)
                    };
                (s.prototype = new o).constructor = s, s.prototype._initializeSvg = function(t, e) {
                    t.setAttribute("viewBox", "0 0 100 " + e.strokeWidth), t.setAttribute("preserveAspectRatio", "none")
                }, s.prototype._pathString = function(t) {
                    return n.render(this._pathTemplate, {
                        center: t.strokeWidth / 2
                    })
                }, s.prototype._trailString = function(t) {
                    return this._pathString(t)
                }, e.exports = s
            }, {
                "./shape": 7,
                "./utils": 9
            }],
            4: [function(t, e, i) {
                e.exports = {
                    Line: t("./line"),
                    Circle: t("./circle"),
                    SemiCircle: t("./semicircle"),
                    Square: t("./square"),
                    Path: t("./path"),
                    Shape: t("./shape"),
                    utils: t("./utils")
                }
            }, {
                "./circle": 2,
                "./line": 3,
                "./path": 5,
                "./semicircle": 6,
                "./shape": 7,
                "./square": 8,
                "./utils": 9
            }],
            5: [function(t, e, i) {
                var o = t("shifty"),
                    n = t("./utils"),
                    s = {
                        easeIn: "easeInCubic",
                        easeOut: "easeOutCubic",
                        easeInOut: "easeInOutCubic"
                    },
                    r = function t(e, i) {
                        if (!(this instanceof t)) throw new Error("Constructor was called without new keyword");
                        var o;
                        i = n.extend({
                            duration: 800,
                            easing: "linear",
                            from: {},
                            to: {},
                            step: function() {}
                        }, i), o = n.isString(e) ? document.querySelector(e) : e, this.path = o, this._opts = i, this._tweenable = null;
                        var s = this.path.getTotalLength();
                        this.path.style.strokeDasharray = s + " " + s, this.set(0)
                    };
                r.prototype.value = function() {
                    var t = this._getComputedDashOffset(),
                        e = this.path.getTotalLength();
                    return parseFloat((1 - t / e).toFixed(6), 10)
                }, r.prototype.set = function(t) {
                    this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(t);
                    var e = this._opts.step;
                    if (n.isFunction(e)) {
                        var i = this._easing(this._opts.easing);
                        e(this._calculateTo(t, i), this._opts.shape || this, this._opts.attachment)
                    }
                }, r.prototype.stop = function() {
                    this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset()
                }, r.prototype.animate = function(t, e, i) {
                    e = e || {}, n.isFunction(e) && (i = e, e = {});
                    var s = n.extend({}, e),
                        r = n.extend({}, this._opts);
                    e = n.extend(r, e);
                    var a = this._easing(e.easing),
                        l = this._resolveFromAndTo(t, a, s);
                    this.stop(), this.path.getBoundingClientRect();
                    var c = this._getComputedDashOffset(),
                        d = this._progressToOffset(t),
                        u = this;
                    this._tweenable = new o, this._tweenable.tween({
                        from: n.extend({
                            offset: c
                        }, l.from),
                        to: n.extend({
                            offset: d
                        }, l.to),
                        duration: e.duration,
                        easing: a,
                        step: function(t) {
                            u.path.style.strokeDashoffset = t.offset;
                            var i = e.shape || u;
                            e.step(t, i, e.attachment)
                        },
                        finish: function(t) {
                            n.isFunction(i) && i()
                        }
                    })
                }, r.prototype._getComputedDashOffset = function() {
                    var t = window.getComputedStyle(this.path, null);
                    return parseFloat(t.getPropertyValue("stroke-dashoffset"), 10)
                }, r.prototype._progressToOffset = function(t) {
                    var e = this.path.getTotalLength();
                    return e - t * e
                }, r.prototype._resolveFromAndTo = function(t, e, i) {
                    return i.from && i.to ? {
                        from: i.from,
                        to: i.to
                    } : {
                        from: this._calculateFrom(e),
                        to: this._calculateTo(t, e)
                    }
                }, r.prototype._calculateFrom = function(t) {
                    return o.interpolate(this._opts.from, this._opts.to, this.value(), t)
                }, r.prototype._calculateTo = function(t, e) {
                    return o.interpolate(this._opts.from, this._opts.to, t, e)
                }, r.prototype._stopTween = function() {
                    null !== this._tweenable && (this._tweenable.stop(), this._tweenable = null)
                }, r.prototype._easing = function(t) {
                    return s.hasOwnProperty(t) ? s[t] : t
                }, e.exports = r
            }, {
                "./utils": 9,
                shifty: 1
            }],
            6: [function(t, e, i) {
                var o = t("./shape"),
                    n = t("./circle"),
                    s = t("./utils"),
                    r = function(t, e) {
                        this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0", this.containerAspectRatio = 2, o.apply(this, arguments)
                    };
                (r.prototype = new o).constructor = r, r.prototype._initializeSvg = function(t, e) {
                    t.setAttribute("viewBox", "0 0 100 50")
                }, r.prototype._initializeTextContainer = function(t, e, i) {
                    t.text.style && (i.style.top = "auto", i.style.bottom = "0", t.text.alignToBottom ? s.setStyle(i, "transform", "translate(-50%, 0)") : s.setStyle(i, "transform", "translate(-50%, 50%)"))
                }, r.prototype._pathString = n.prototype._pathString, r.prototype._trailString = n.prototype._trailString, e.exports = r
            }, {
                "./circle": 2,
                "./shape": 7,
                "./utils": 9
            }],
            7: [function(t, e, i) {
                var o = t("./path"),
                    n = t("./utils"),
                    s = "Object is destroyed",
                    r = function t(e, i) {
                        if (!(this instanceof t)) throw new Error("Constructor was called without new keyword");
                        if (0 !== arguments.length) {
                            this._opts = n.extend({
                                color: "#555",
                                strokeWidth: 1,
                                trailColor: null,
                                trailWidth: null,
                                fill: null,
                                text: {
                                    style: {
                                        color: null,
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%",
                                        padding: 0,
                                        margin: 0,
                                        transform: {
                                            prefix: !0,
                                            value: "translate(-50%, -50%)"
                                        }
                                    },
                                    autoStyleContainer: !0,
                                    alignToBottom: !0,
                                    value: null,
                                    className: "progressbar-text"
                                },
                                svgStyle: {
                                    display: "block",
                                    width: "100%"
                                },
                                warnings: !1
                            }, i, !0), n.isObject(i) && void 0 !== i.svgStyle && (this._opts.svgStyle = i.svgStyle), n.isObject(i) && n.isObject(i.text) && void 0 !== i.text.style && (this._opts.text.style = i.text.style);
                            var s, r = this._createSvgView(this._opts);
                            if (!(s = n.isString(e) ? document.querySelector(e) : e)) throw new Error("Container does not exist: " + e);
                            this._container = s, this._container.appendChild(r.svg), this._opts.warnings && this._warnContainerAspectRatio(this._container), this._opts.svgStyle && n.setStyles(r.svg, this._opts.svgStyle), this.svg = r.svg, this.path = r.path, this.trail = r.trail, this.text = null;
                            var a = n.extend({
                                attachment: void 0,
                                shape: this
                            }, this._opts);
                            this._progressPath = new o(r.path, a), n.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value)
                        }
                    };
                r.prototype.animate = function(t, e, i) {
                    if (null === this._progressPath) throw new Error(s);
                    this._progressPath.animate(t, e, i)
                }, r.prototype.stop = function() {
                    if (null === this._progressPath) throw new Error(s);
                    void 0 !== this._progressPath && this._progressPath.stop()
                }, r.prototype.destroy = function() {
                    if (null === this._progressPath) throw new Error(s);
                    this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, this._progressPath = null, null !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null)
                }, r.prototype.set = function(t) {
                    if (null === this._progressPath) throw new Error(s);
                    this._progressPath.set(t)
                }, r.prototype.value = function() {
                    if (null === this._progressPath) throw new Error(s);
                    return void 0 === this._progressPath ? 0 : this._progressPath.value()
                }, r.prototype.setText = function(t) {
                    if (null === this._progressPath) throw new Error(s);
                    null === this.text && (this.text = this._createTextContainer(this._opts, this._container), this._container.appendChild(this.text)), n.isObject(t) ? (n.removeChildren(this.text), this.text.appendChild(t)) : this.text.innerHTML = t
                }, r.prototype._createSvgView = function(t) {
                    var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    this._initializeSvg(e, t);
                    var i = null;
                    (t.trailColor || t.trailWidth) && (i = this._createTrail(t), e.appendChild(i));
                    var o = this._createPath(t);
                    return e.appendChild(o), {
                        svg: e,
                        path: o,
                        trail: i
                    }
                }, r.prototype._initializeSvg = function(t, e) {
                    t.setAttribute("viewBox", "0 0 100 100")
                }, r.prototype._createPath = function(t) {
                    var e = this._pathString(t);
                    return this._createPathElement(e, t)
                }, r.prototype._createTrail = function(t) {
                    var e = this._trailString(t),
                        i = n.extend({}, t);
                    return i.trailColor || (i.trailColor = "#eee"), i.trailWidth || (i.trailWidth = i.strokeWidth), i.color = i.trailColor, i.strokeWidth = i.trailWidth, i.fill = null, this._createPathElement(e, i)
                }, r.prototype._createPathElement = function(t, e) {
                    var i = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    return i.setAttribute("d", t), i.setAttribute("stroke", e.color), i.setAttribute("stroke-width", e.strokeWidth), e.fill ? i.setAttribute("fill", e.fill) : i.setAttribute("fill-opacity", "0"), i
                }, r.prototype._createTextContainer = function(t, e) {
                    var i = document.createElement("div");
                    i.className = t.text.className;
                    var o = t.text.style;
                    return o && (t.text.autoStyleContainer && (e.style.position = "relative"), n.setStyles(i, o), o.color || (i.style.color = t.color)), this._initializeTextContainer(t, e, i), i
                }, r.prototype._initializeTextContainer = function(t, e, i) {}, r.prototype._pathString = function(t) {
                    throw new Error("Override this function for each progress bar")
                }, r.prototype._trailString = function(t) {
                    throw new Error("Override this function for each progress bar")
                }, r.prototype._warnContainerAspectRatio = function(t) {
                    if (this.containerAspectRatio) {
                        var e = window.getComputedStyle(t, null),
                            i = parseFloat(e.getPropertyValue("width"), 10),
                            o = parseFloat(e.getPropertyValue("height"), 10);
                        n.floatEquals(this.containerAspectRatio, i / o) || (console.warn("Incorrect aspect ratio of container", "#" + t.id, "detected:", e.getPropertyValue("width") + "(width)", "/", e.getPropertyValue("height") + "(height)", "=", i / o), console.warn("Aspect ratio of should be", this.containerAspectRatio))
                    }
                }, e.exports = r
            }, {
                "./path": 5,
                "./utils": 9
            }],
            8: [function(t, e, i) {
                var o = t("./shape"),
                    n = t("./utils"),
                    s = function(t, e) {
                        this._pathTemplate = "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}", this._trailTemplate = "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}", o.apply(this, arguments)
                    };
                (s.prototype = new o).constructor = s, s.prototype._pathString = function(t) {
                    var e = 100 - t.strokeWidth / 2;
                    return n.render(this._pathTemplate, {
                        width: e,
                        strokeWidth: t.strokeWidth,
                        halfOfStrokeWidth: t.strokeWidth / 2
                    })
                }, s.prototype._trailString = function(t) {
                    var e = 100 - t.strokeWidth / 2;
                    return n.render(this._trailTemplate, {
                        width: e,
                        strokeWidth: t.strokeWidth,
                        halfOfStrokeWidth: t.strokeWidth / 2,
                        startMargin: t.strokeWidth / 2 - t.trailWidth / 2
                    })
                }, e.exports = s
            }, {
                "./shape": 7,
                "./utils": 9
            }],
            9: [function(t, e, i) {
                function o(t, e, i) {
                    for (var o = t.style, s = 0; s < a.length; ++s) {
                        o[a[s] + n(e)] = i
                    }
                    o[e] = i
                }

                function n(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }

                function s(t) {
                    return e = t, "[object Array]" !== Object.prototype.toString.call(e) && ("object" === typeof t && !!t);
                    var e
                }

                function r(t, e) {
                    for (var i in t)
                        if (t.hasOwnProperty(i)) {
                            e(t[i], i)
                        }
                }
                var a = "Webkit Moz O ms".split(" "),
                    l = .001;
                e.exports = {
                    extend: function t(e, i, o) {
                        for (var n in e = e || {}, o = o || !1, i = i || {})
                            if (i.hasOwnProperty(n)) {
                                var r = e[n],
                                    a = i[n];
                                o && s(r) && s(a) ? e[n] = t(r, a, o) : e[n] = a
                            } return e
                    },
                    render: function(t, e) {
                        var i = t;
                        for (var o in e)
                            if (e.hasOwnProperty(o)) {
                                var n = e[o],
                                    s = new RegExp("\\{" + o + "\\}", "g");
                                i = i.replace(s, n)
                            } return i
                    },
                    setStyle: o,
                    setStyles: function(t, e) {
                        r(e, function(e, i) {
                            null != e && (s(e) && !0 === e.prefix ? o(t, i, e.value) : t.style[i] = e)
                        })
                    },
                    capitalize: n,
                    isString: function(t) {
                        return "string" == typeof t || t instanceof String
                    },
                    isFunction: function(t) {
                        return "function" == typeof t
                    },
                    isObject: s,
                    forEachObject: r,
                    floatEquals: function(t, e) {
                        return Math.abs(t - e) < l
                    },
                    removeChildren: function(t) {
                        for (; t.firstChild;) t.removeChild(t.firstChild)
                    }
                }
            }, {}]
        }, {}, [4])(4)
    }),
    function(t) {
        t.fn.jPinning = function(e) {
            var i = t.extend({}, {
                    offset: !1,
                    onPin: function() {},
                    onUnpin: function() {}
                }, e),
                o = {
                    lastScrollTop: 0,
                    document: t(document),
                    window: t(window),
                    status: "pinned"
                },
                n = "pinning-nav",
                s = "pinned",
                r = "unpinned",
                a = "pinning-top",
                l = {
                    isUnpinned: function() {
                        return "unpinned" == o.status
                    },
                    isPinned: function() {
                        return "pinned" == o.status
                    },
                    prepare: function() {
                        o.target.addClass(n), o.target.css("position", "fixed")
                    },
                    pin: function() {
                        l.isUnpinned() && (o.status = "pinned", o.target.removeClass(r).addClass(s), i.onPin.call(o.target))
                    },
                    unpin: function() {
                        l.isPinned() && (o.status = "unpinned", o.target.removeClass(s).removeClass(a).addClass(r), i.onUnpin.call(o.target))
                    },
                    calcOffset: function(t) {
                        return "auto" == i.offset && (i.offset = o.target.outerHeight()), !i.offset || t > i.offset
                    },
                    pinHandler: function() {
                        var t = o.window.scrollTop(),
                            e = o.document.height() - o.window.height();
                        (t < 0 && (t = 0), t >= e && (t = e, o.lastScrollTop = t - 1), 0 == t && o.target.addClass(a), t <= o.lastScrollTop) ? l.pin(): l.calcOffset(t) && l.unpin();
                        o.lastScrollTop = t
                    }
                };
            return this.each(function() {
                o.target = t(this), l.prepare(), t(window).on("scroll", l.pinHandler)
            })
        }
    }(jQuery),
    function(t, e, i) {
        t.fn.easyEmbed = function(i) {
            var o = this,
                n = /iPad|iPhone|iPod/.test(navigator.userAgent),
                s = o.data("easy-embed").split(":"),
                r = t.extend({
                    id: o.data("id") || s[1] || "ScMzIvxBSi4",
                    provider: o.data("provider") || s[0] || "youtube",
                    width: o.data("width") || 16,
                    height: o.data("height") || 9,
                    controls: o.data("controls") || !1,
                    showinfo: o.data("showinfo") || !1,
                    color: o.data("color") || "00adef",
                    title: o.data("title") || !1,
                    byline: o.data("byline") || !1,
                    portrait: o.data("portrait") || !1,
                    setsize: o.data("setsize") || !1
                }, i),
                a = function() {
                    o.css("height", o.width() / r.width * r.height)
                },
                l = function() {
                    o.html(t("<iframe>").attr("src", function() {
                        switch (r.provider.toLowerCase()) {
                            case "youtube":
                                return "//youtube.com/embed/" + r.id + "?rel=0&autoplay=1&controls=" + (r.controls + 0) + "&showinfo=" + (r.showinfo + 0);
                            case "vimeo":
                                return "//player.vimeo.com/video/" + r.id + "?autoplay=1&color=" + r.color + "&title=" + (r.title + 0) + "&byline=" + (r.byline + 0) + "&portrait=" + (r.controls + 0);
                            case "twitch":
                                return "//player.twitch.tv/?channel=" + r.id + "&parent=" + e.location.hostname
                        }
                    }()).attr("width", "100%").attr("height", "100%").attr("frameborder", 0).attr("allowfullscreen", 1)), o.addClass("playing-video")
                };
            return r.setsize && (a(), t(e).resize(function() {
                a()
            })), n ? l() : (! function(e) {
                switch (r.provider.toLowerCase()) {
                    case "youtube":
                        var i = "//img.youtube.com/vi/" + r.id + "/",
                            o = ["maxresdefault", "hqdefault"];
                        ! function n() {
                            var s = i + o[0] + ".jpg";
                            t("<img/>").attr("src", s).on("load", function() {
                                120 != this.width && 90 != this.height ? e(s) : (o.shift(), n())
                            })
                        }();
                        break;
                    case "vimeo":
                        t.get("https://vimeo.com/api/oembed.json?url=http://vimeo.com/" + r.id, function(t) {
                            e(t.thumbnail_url)
                        })
                }
            }(function(t) {
                var e;
                e = t, o.css("background", "black url(" + e + ") 50% 50% / cover no-repeat")
            }), o.find("*").addBack().click(function() {
                l()
            })), this
        }, t(i).ready(function() {
            t("[data-easy-embed]").length > 0 && t("[data-easy-embed]").each(function() {
                t(this).easyEmbed()
            })
        })
    }(jQuery, window, document);
