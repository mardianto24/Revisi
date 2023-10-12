(() => { var t = { 671: () => {
                function t(e) { return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, t(e) }

                function e(e, r) { for (var n = 0; n < r.length; n++) { var o = r[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (void 0, i = function(e, r) { if ("object" !== t(e) || null === e) return e; var n = e[Symbol.toPrimitive]; if (void 0 !== n) { var o = n.call(e, "string"); if ("object" !== t(o)) return o; throw new TypeError("@@toPrimitive must return a primitive value.") } return String(e) }(o.key), "symbol" === t(i) ? i : String(i)), o) } var i }

                function r(t) { var e = "function" == typeof Map ? new Map : void 0; return r = function(t) { if (null === t || ! function(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]") } catch (e) { return "function" == typeof t } }(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== e) { if (e.has(t)) return e.get(t);
                            e.set(t, r) }

                        function r() { return n(t, arguments, u(this).constructor) } return r.prototype = Object.create(t.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), i(r, t) }, r(t) }

                function n(t, e, r) { return n = o() ? Reflect.construct.bind() : function(t, e, r) { var n = [null];
                        n.push.apply(n, e); var o = new(Function.bind.apply(t, n)); return r && i(o, r.prototype), o }, n.apply(null, arguments) }

                function o() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }

                function i(t, e) { return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) { return t.__proto__ = e, t }, i(t, e) }

                function u(t) { return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, u(t) } var c = function(r) {! function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && i(t, e) }(p, r); var n, c, f, a, l = (f = p, a = o(), function() { var e, r = u(f); if (a) { var n = u(this).constructor;
                            e = Reflect.construct(r, arguments, n) } else e = r.apply(this, arguments); return function(e, r) { if (r && ("object" === t(r) || "function" == typeof r)) return r; if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined"); return function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(e) }(this, e) });

                    function p() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, p), l.apply(this, arguments) } return n = p, (c = [{ key: "connectedCallback", value: function() { var t = this;
                            fetch("https://api.themoviedb.org/3/discover/movie?api_key=c28c686238693c6a67f4829d4f623584").then((function(t) { return t.json() })).then((function(e) { e.results && e.results.length > 0 ? e.results.forEach((function(e) { t.innerHTML += "<div>".concat(e.title, "</div>") })) : t.innerHTML = "No movies found" })).catch((function(e) { console.error("Error:", e), t.innerHTML = "An error occurred while fetching data" })) } }]) && e(n.prototype, c), Object.defineProperty(n, "prototype", { writable: !1 }), p }(r(HTMLElement));
                customElements.define("my-element", c) } },
        e = {};

    function r(n) { var o = e[n]; if (void 0 !== o) return o.exports; var i = e[n] = { exports: {} }; return t[n](i, i.exports, r), i.exports }
    r.n = t => { var e = t && t.__esModule ? () => t.default : () => t; return r.d(e, { a: e }), e }, r.d = (t, e) => { for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] }) }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => { "use strict";
        r(671) })() })();