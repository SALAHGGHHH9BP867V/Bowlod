! function(e) {
	var t = {};

	function n(i) {
		if (t[i]) return t[i].exports;
		var o = t[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, i) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: i
		})
	}, n.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var i = Object.create(null);
		if (n.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var o in e) n.d(i, o, function(t) {
				return e[t]
			}.bind(null, o));
		return i
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "/", n(n.s = 0)
}({
	0: function(e, t, n) {
		n("bUC5"), n("pyCd"), e.exports = n("fcES")
	},
	"8L3F": function(e, t, n) {
		"use strict";
		n.r(t),
			function(e) {
				var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
					i = function() {
						for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
							if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
						return 0
					}();
				var o = n && window.Promise ? function(e) {
					var t = !1;
					return function() {
						t || (t = !0, window.Promise.resolve().then((function() {
							t = !1, e()
						})))
					}
				} : function(e) {
					var t = !1;
					return function() {
						t || (t = !0, setTimeout((function() {
							t = !1, e()
						}), i))
					}
				};

				function r(e) {
					return e && "[object Function]" === {}.toString.call(e)
				}

				function s(e, t) {
					if (1 !== e.nodeType) return [];
					var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
					return t ? n[t] : n
				}

				function a(e) {
					return "HTML" === e.nodeName ? e : e.parentNode || e.host
				}

				function l(e) {
					if (!e) return document.body;
					switch (e.nodeName) {
						case "HTML":
						case "BODY":
							return e.ownerDocument.body;
						case "#document":
							return e.body
					}
					var t = s(e),
						n = t.overflow,
						i = t.overflowX,
						o = t.overflowY;
					return /(auto|scroll|overlay)/.test(n + o + i) ? e : l(a(e))
				}

				function c(e) {
					return e && e.referenceNode ? e.referenceNode : e
				}
				var d = n && !(!window.MSInputMethodContext || !document.documentMode),
					u = n && /MSIE 10/.test(navigator.userAgent);

				function p(e) {
					return 11 === e ? d : 10 === e ? u : d || u
				}

				function f(e) {
					if (!e) return document.documentElement;
					for (var t = p(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
					var i = n && n.nodeName;
					return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? f(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
				}

				function h(e) {
					return null !== e.parentNode ? h(e.parentNode) : e
				}

				function g(e, t) {
					if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
					var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
						i = n ? e : t,
						o = n ? t : e,
						r = document.createRange();
					r.setStart(i, 0), r.setEnd(o, 0);
					var s, a, l = r.commonAncestorContainer;
					if (e !== l && t !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && f(s.firstElementChild) !== s ? f(l) : l;
					var c = h(e);
					return c.host ? g(c.host, t) : g(e, h(t).host)
				}

				function m(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
						n = "top" === t ? "scrollTop" : "scrollLeft",
						i = e.nodeName;
					if ("BODY" === i || "HTML" === i) {
						var o = e.ownerDocument.documentElement,
							r = e.ownerDocument.scrollingElement || o;
						return r[n]
					}
					return e[n]
				}

				function v(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						i = m(t, "top"),
						o = m(t, "left"),
						r = n ? -1 : 1;
					return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e
				}

				function y(e, t) {
					var n = "x" === t ? "Left" : "Top",
						i = "Left" === n ? "Right" : "Bottom";
					return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
				}

				function b(e, t, n, i) {
					return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], p(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
				}

				function w(e) {
					var t = e.body,
						n = e.documentElement,
						i = p(10) && getComputedStyle(n);
					return {
						height: b("Height", t, n, i),
						width: b("Width", t, n, i)
					}
				}
				var T = function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					},
					_ = function() {
						function e(e, t) {
							for (var n = 0; n < t.length; n++) {
								var i = t[n];
								i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
							}
						}
						return function(t, n, i) {
							return n && e(t.prototype, n), i && e(t, i), t
						}
					}(),
					x = function(e, t, n) {
						return t in e ? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = n, e
					},
					k = Object.assign || function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
						}
						return e
					};

				function S(e) {
					return k({}, e, {
						right: e.left + e.width,
						bottom: e.top + e.height
					})
				}

				function C(e) {
					var t = {};
					try {
						if (p(10)) {
							t = e.getBoundingClientRect();
							var n = m(e, "top"),
								i = m(e, "left");
							t.top += n, t.left += i, t.bottom += n, t.right += i
						} else t = e.getBoundingClientRect()
					} catch (e) {}
					var o = {
							left: t.left,
							top: t.top,
							width: t.right - t.left,
							height: t.bottom - t.top
						},
						r = "HTML" === e.nodeName ? w(e.ownerDocument) : {},
						a = r.width || e.clientWidth || o.width,
						l = r.height || e.clientHeight || o.height,
						c = e.offsetWidth - a,
						d = e.offsetHeight - l;
					if (c || d) {
						var u = s(e);
						c -= y(u, "x"), d -= y(u, "y"), o.width -= c, o.height -= d
					}
					return S(o)
				}

				function E(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						i = p(10),
						o = "HTML" === t.nodeName,
						r = C(e),
						a = C(t),
						c = l(e),
						d = s(t),
						u = parseFloat(d.borderTopWidth),
						f = parseFloat(d.borderLeftWidth);
					n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
					var h = S({
						top: r.top - a.top - u,
						left: r.left - a.left - f,
						width: r.width,
						height: r.height
					});
					if (h.marginTop = 0, h.marginLeft = 0, !i && o) {
						var g = parseFloat(d.marginTop),
							m = parseFloat(d.marginLeft);
						h.top -= u - g, h.bottom -= u - g, h.left -= f - m, h.right -= f - m, h.marginTop = g, h.marginLeft = m
					}
					return (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (h = v(h, t)), h
				}

				function A(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = e.ownerDocument.documentElement,
						i = E(e, n),
						o = Math.max(n.clientWidth, window.innerWidth || 0),
						r = Math.max(n.clientHeight, window.innerHeight || 0),
						s = t ? 0 : m(n),
						a = t ? 0 : m(n, "left"),
						l = {
							top: s - i.top + i.marginTop,
							left: a - i.left + i.marginLeft,
							width: o,
							height: r
						};
					return S(l)
				}

				function D(e) {
					var t = e.nodeName;
					if ("BODY" === t || "HTML" === t) return !1;
					if ("fixed" === s(e, "position")) return !0;
					var n = a(e);
					return !!n && D(n)
				}

				function O(e) {
					if (!e || !e.parentElement || p()) return document.documentElement;
					for (var t = e.parentElement; t && "none" === s(t, "transform");) t = t.parentElement;
					return t || document.documentElement
				}

				function N(e, t, n, i) {
					var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
						r = {
							top: 0,
							left: 0
						},
						s = o ? O(e) : g(e, c(t));
					if ("viewport" === i) r = A(s, o);
					else {
						var d = void 0;
						"scrollParent" === i ? "BODY" === (d = l(a(t))).nodeName && (d = e.ownerDocument.documentElement) : d = "window" === i ? e.ownerDocument.documentElement : i;
						var u = E(d, s, o);
						if ("HTML" !== d.nodeName || D(s)) r = u;
						else {
							var p = w(e.ownerDocument),
								f = p.height,
								h = p.width;
							r.top += u.top - u.marginTop, r.bottom = f + u.top, r.left += u.left - u.marginLeft, r.right = h + u.left
						}
					}
					var m = "number" == typeof(n = n || 0);
					return r.left += m ? n : n.left || 0, r.top += m ? n : n.top || 0, r.right -= m ? n : n.right || 0, r.bottom -= m ? n : n.bottom || 0, r
				}

				function j(e) {
					return e.width * e.height
				}

				function $(e, t, n, i, o) {
					var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
					if (-1 === e.indexOf("auto")) return e;
					var s = N(n, i, r, o),
						a = {
							top: {
								width: s.width,
								height: t.top - s.top
							},
							right: {
								width: s.right - t.right,
								height: s.height
							},
							bottom: {
								width: s.width,
								height: s.bottom - t.bottom
							},
							left: {
								width: t.left - s.left,
								height: s.height
							}
						},
						l = Object.keys(a).map((function(e) {
							return k({
								key: e
							}, a[e], {
								area: j(a[e])
							})
						})).sort((function(e, t) {
							return t.area - e.area
						})),
						c = l.filter((function(e) {
							var t = e.width,
								i = e.height;
							return t >= n.clientWidth && i >= n.clientHeight
						})),
						d = c.length > 0 ? c[0].key : l[0].key,
						u = e.split("-")[1];
					return d + (u ? "-" + u : "")
				}

				function L(e, t, n) {
					var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
						o = i ? O(t) : g(t, c(n));
					return E(n, o, i)
				}

				function I(e) {
					var t = e.ownerDocument.defaultView.getComputedStyle(e),
						n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
						i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
					return {
						width: e.offsetWidth + i,
						height: e.offsetHeight + n
					}
				}

				function P(e) {
					var t = {
						left: "right",
						right: "left",
						bottom: "top",
						top: "bottom"
					};
					return e.replace(/left|right|bottom|top/g, (function(e) {
						return t[e]
					}))
				}

				function H(e, t, n) {
					n = n.split("-")[0];
					var i = I(e),
						o = {
							width: i.width,
							height: i.height
						},
						r = -1 !== ["right", "left"].indexOf(n),
						s = r ? "top" : "left",
						a = r ? "left" : "top",
						l = r ? "height" : "width",
						c = r ? "width" : "height";
					return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[P(a)], o
				}

				function q(e, t) {
					return Array.prototype.find ? e.find(t) : e.filter(t)[0]
				}

				function M(e, t, n) {
					return (void 0 === n ? e : e.slice(0, function(e, t, n) {
						if (Array.prototype.findIndex) return e.findIndex((function(e) {
							return e[t] === n
						}));
						var i = q(e, (function(e) {
							return e[t] === n
						}));
						return e.indexOf(i)
					}(e, "name", n))).forEach((function(e) {
						e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
						var n = e.function || e.fn;
						e.enabled && r(n) && (t.offsets.popper = S(t.offsets.popper), t.offsets.reference = S(t.offsets.reference), t = n(t, e))
					})), t
				}

				function R() {
					if (!this.state.isDestroyed) {
						var e = {
							instance: this,
							styles: {},
							arrowStyles: {},
							attributes: {},
							flipped: !1,
							offsets: {}
						};
						e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = $(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = H(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = M(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
					}
				}

				function F(e, t) {
					return e.some((function(e) {
						var n = e.name;
						return e.enabled && n === t
					}))
				}

				function W(e) {
					for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
						var o = t[i],
							r = o ? "" + o + n : e;
						if (void 0 !== document.body.style[r]) return r
					}
					return null
				}

				function B() {
					return this.state.isDestroyed = !0, F(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[W("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
				}

				function z(e) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}

				function U(e, t, n, i) {
					n.updateBound = i, z(e).addEventListener("resize", n.updateBound, {
						passive: !0
					});
					var o = l(e);
					return function e(t, n, i, o) {
						var r = "BODY" === t.nodeName,
							s = r ? t.ownerDocument.defaultView : t;
						s.addEventListener(n, i, {
							passive: !0
						}), r || e(l(s.parentNode), n, i, o), o.push(s)
					}(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
				}

				function X() {
					this.state.eventsEnabled || (this.state = U(this.reference, this.options, this.state, this.scheduleUpdate))
				}

				function Q() {
					var e, t;
					this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, z(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
						e.removeEventListener("scroll", t.updateBound)
					})), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
				}

				function V(e) {
					return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
				}

				function Y(e, t) {
					Object.keys(t).forEach((function(n) {
						var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && V(t[n]) && (i = "px"), e.style[n] = t[n] + i
					}))
				}
				var K = n && /Firefox/i.test(navigator.userAgent);

				function G(e, t, n) {
					var i = q(e, (function(e) {
							return e.name === t
						})),
						o = !!i && e.some((function(e) {
							return e.name === n && e.enabled && e.order < i.order
						}));
					if (!o) {
						var r = "`" + t + "`",
							s = "`" + n + "`";
						console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
					}
					return o
				}
				var J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
					Z = J.slice(3);

				function ee(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = Z.indexOf(e),
						i = Z.slice(n + 1).concat(Z.slice(0, n));
					return t ? i.reverse() : i
				}
				var te = "flip",
					ne = "clockwise",
					ie = "counterclockwise";

				function oe(e, t, n, i) {
					var o = [0, 0],
						r = -1 !== ["right", "left"].indexOf(i),
						s = e.split(/(\+|\-)/).map((function(e) {
							return e.trim()
						})),
						a = s.indexOf(q(s, (function(e) {
							return -1 !== e.search(/,|\s/)
						})));
					s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
					var l = /\s*,\s*|\s+/,
						c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
					return (c = c.map((function(e, i) {
						var o = (1 === i ? !r : r) ? "height" : "width",
							s = !1;
						return e.reduce((function(e, t) {
							return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
						}), []).map((function(e) {
							return function(e, t, n, i) {
								var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
									r = +o[1],
									s = o[2];
								if (!r) return e;
								if (0 === s.indexOf("%")) {
									var a = void 0;
									switch (s) {
										case "%p":
											a = n;
											break;
										case "%":
										case "%r":
										default:
											a = i
									}
									return S(a)[t] / 100 * r
								}
								if ("vh" === s || "vw" === s) {
									return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r
								}
								return r
							}(e, o, t, n)
						}))
					}))).forEach((function(e, t) {
						e.forEach((function(n, i) {
							V(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1))
						}))
					})), o
				}
				var re = {
						placement: "bottom",
						positionFixed: !1,
						eventsEnabled: !0,
						removeOnDestroy: !1,
						onCreate: function() {},
						onUpdate: function() {},
						modifiers: {
							shift: {
								order: 100,
								enabled: !0,
								fn: function(e) {
									var t = e.placement,
										n = t.split("-")[0],
										i = t.split("-")[1];
									if (i) {
										var o = e.offsets,
											r = o.reference,
											s = o.popper,
											a = -1 !== ["bottom", "top"].indexOf(n),
											l = a ? "left" : "top",
											c = a ? "width" : "height",
											d = {
												start: x({}, l, r[l]),
												end: x({}, l, r[l] + r[c] - s[c])
											};
										e.offsets.popper = k({}, s, d[i])
									}
									return e
								}
							},
							offset: {
								order: 200,
								enabled: !0,
								fn: function(e, t) {
									var n = t.offset,
										i = e.placement,
										o = e.offsets,
										r = o.popper,
										s = o.reference,
										a = i.split("-")[0],
										l = void 0;
									return l = V(+n) ? [+n, 0] : oe(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e
								},
								offset: 0
							},
							preventOverflow: {
								order: 300,
								enabled: !0,
								fn: function(e, t) {
									var n = t.boundariesElement || f(e.instance.popper);
									e.instance.reference === n && (n = f(n));
									var i = W("transform"),
										o = e.instance.popper.style,
										r = o.top,
										s = o.left,
										a = o[i];
									o.top = "", o.left = "", o[i] = "";
									var l = N(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
									o.top = r, o.left = s, o[i] = a, t.boundaries = l;
									var c = t.priority,
										d = e.offsets.popper,
										u = {
											primary: function(e) {
												var n = d[e];
												return d[e] < l[e] && !t.escapeWithReference && (n = Math.max(d[e], l[e])), x({}, e, n)
											},
											secondary: function(e) {
												var n = "right" === e ? "left" : "top",
													i = d[n];
												return d[e] > l[e] && !t.escapeWithReference && (i = Math.min(d[n], l[e] - ("right" === e ? d.width : d.height))), x({}, n, i)
											}
										};
									return c.forEach((function(e) {
										var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
										d = k({}, d, u[t](e))
									})), e.offsets.popper = d, e
								},
								priority: ["left", "right", "top", "bottom"],
								padding: 5,
								boundariesElement: "scrollParent"
							},
							keepTogether: {
								order: 400,
								enabled: !0,
								fn: function(e) {
									var t = e.offsets,
										n = t.popper,
										i = t.reference,
										o = e.placement.split("-")[0],
										r = Math.floor,
										s = -1 !== ["top", "bottom"].indexOf(o),
										a = s ? "right" : "bottom",
										l = s ? "left" : "top",
										c = s ? "width" : "height";
									return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e
								}
							},
							arrow: {
								order: 500,
								enabled: !0,
								fn: function(e, t) {
									var n;
									if (!G(e.instance.modifiers, "arrow", "keepTogether")) return e;
									var i = t.element;
									if ("string" == typeof i) {
										if (!(i = e.instance.popper.querySelector(i))) return e
									} else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
									var o = e.placement.split("-")[0],
										r = e.offsets,
										a = r.popper,
										l = r.reference,
										c = -1 !== ["left", "right"].indexOf(o),
										d = c ? "height" : "width",
										u = c ? "Top" : "Left",
										p = u.toLowerCase(),
										f = c ? "left" : "top",
										h = c ? "bottom" : "right",
										g = I(i)[d];
									l[h] - g < a[p] && (e.offsets.popper[p] -= a[p] - (l[h] - g)), l[p] + g > a[h] && (e.offsets.popper[p] += l[p] + g - a[h]), e.offsets.popper = S(e.offsets.popper);
									var m = l[p] + l[d] / 2 - g / 2,
										v = s(e.instance.popper),
										y = parseFloat(v["margin" + u]),
										b = parseFloat(v["border" + u + "Width"]),
										w = m - e.offsets.popper[p] - y - b;
									return w = Math.max(Math.min(a[d] - g, w), 0), e.arrowElement = i, e.offsets.arrow = (x(n = {}, p, Math.round(w)), x(n, f, ""), n), e
								},
								element: "[x-arrow]"
							},
							flip: {
								order: 600,
								enabled: !0,
								fn: function(e, t) {
									if (F(e.instance.modifiers, "inner")) return e;
									if (e.flipped && e.placement === e.originalPlacement) return e;
									var n = N(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
										i = e.placement.split("-")[0],
										o = P(i),
										r = e.placement.split("-")[1] || "",
										s = [];
									switch (t.behavior) {
										case te:
											s = [i, o];
											break;
										case ne:
											s = ee(i);
											break;
										case ie:
											s = ee(i, !0);
											break;
										default:
											s = t.behavior
									}
									return s.forEach((function(a, l) {
										if (i !== a || s.length === l + 1) return e;
										i = e.placement.split("-")[0], o = P(i);
										var c = e.offsets.popper,
											d = e.offsets.reference,
											u = Math.floor,
											p = "left" === i && u(c.right) > u(d.left) || "right" === i && u(c.left) < u(d.right) || "top" === i && u(c.bottom) > u(d.top) || "bottom" === i && u(c.top) < u(d.bottom),
											f = u(c.left) < u(n.left),
											h = u(c.right) > u(n.right),
											g = u(c.top) < u(n.top),
											m = u(c.bottom) > u(n.bottom),
											v = "left" === i && f || "right" === i && h || "top" === i && g || "bottom" === i && m,
											y = -1 !== ["top", "bottom"].indexOf(i),
											b = !!t.flipVariations && (y && "start" === r && f || y && "end" === r && h || !y && "start" === r && g || !y && "end" === r && m),
											w = !!t.flipVariationsByContent && (y && "start" === r && h || y && "end" === r && f || !y && "start" === r && m || !y && "end" === r && g),
											T = b || w;
										(p || v || T) && (e.flipped = !0, (p || v) && (i = s[l + 1]), T && (r = function(e) {
											return "end" === e ? "start" : "start" === e ? "end" : e
										}(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = k({}, e.offsets.popper, H(e.instance.popper, e.offsets.reference, e.placement)), e = M(e.instance.modifiers, e, "flip"))
									})), e
								},
								behavior: "flip",
								padding: 5,
								boundariesElement: "viewport",
								flipVariations: !1,
								flipVariationsByContent: !1
							},
							inner: {
								order: 700,
								enabled: !1,
								fn: function(e) {
									var t = e.placement,
										n = t.split("-")[0],
										i = e.offsets,
										o = i.popper,
										r = i.reference,
										s = -1 !== ["left", "right"].indexOf(n),
										a = -1 === ["top", "left"].indexOf(n);
									return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = P(t), e.offsets.popper = S(o), e
								}
							},
							hide: {
								order: 800,
								enabled: !0,
								fn: function(e) {
									if (!G(e.instance.modifiers, "hide", "preventOverflow")) return e;
									var t = e.offsets.reference,
										n = q(e.instance.modifiers, (function(e) {
											return "preventOverflow" === e.name
										})).boundaries;
									if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
										if (!0 === e.hide) return e;
										e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
									} else {
										if (!1 === e.hide) return e;
										e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
									}
									return e
								}
							},
							computeStyle: {
								order: 850,
								enabled: !0,
								fn: function(e, t) {
									var n = t.x,
										i = t.y,
										o = e.offsets.popper,
										r = q(e.instance.modifiers, (function(e) {
											return "applyStyle" === e.name
										})).gpuAcceleration;
									void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
									var s = void 0 !== r ? r : t.gpuAcceleration,
										a = f(e.instance.popper),
										l = C(a),
										c = {
											position: o.position
										},
										d = function(e, t) {
											var n = e.offsets,
												i = n.popper,
												o = n.reference,
												r = Math.round,
												s = Math.floor,
												a = function(e) {
													return e
												},
												l = r(o.width),
												c = r(i.width),
												d = -1 !== ["left", "right"].indexOf(e.placement),
												u = -1 !== e.placement.indexOf("-"),
												p = t ? d || u || l % 2 == c % 2 ? r : s : a,
												f = t ? r : a;
											return {
												left: p(l % 2 == 1 && c % 2 == 1 && !u && t ? i.left - 1 : i.left),
												top: f(i.top),
												bottom: f(i.bottom),
												right: p(i.right)
											}
										}(e, window.devicePixelRatio < 2 || !K),
										u = "bottom" === n ? "top" : "bottom",
										p = "right" === i ? "left" : "right",
										h = W("transform"),
										g = void 0,
										m = void 0;
									if (m = "bottom" === u ? "HTML" === a.nodeName ? -a.clientHeight + d.bottom : -l.height + d.bottom : d.top, g = "right" === p ? "HTML" === a.nodeName ? -a.clientWidth + d.right : -l.width + d.right : d.left, s && h) c[h] = "translate3d(" + g + "px, " + m + "px, 0)", c[u] = 0, c[p] = 0, c.willChange = "transform";
									else {
										var v = "bottom" === u ? -1 : 1,
											y = "right" === p ? -1 : 1;
										c[u] = m * v, c[p] = g * y, c.willChange = u + ", " + p
									}
									var b = {
										"x-placement": e.placement
									};
									return e.attributes = k({}, b, e.attributes), e.styles = k({}, c, e.styles), e.arrowStyles = k({}, e.offsets.arrow, e.arrowStyles), e
								},
								gpuAcceleration: !0,
								x: "bottom",
								y: "right"
							},
							applyStyle: {
								order: 900,
								enabled: !0,
								fn: function(e) {
									var t, n;
									return Y(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
										!1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
									})), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e
								},
								onLoad: function(e, t, n, i, o) {
									var r = L(o, t, e, n.positionFixed),
										s = $(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
									return t.setAttribute("x-placement", s), Y(t, {
										position: n.positionFixed ? "fixed" : "absolute"
									}), n
								},
								gpuAcceleration: void 0
							}
						}
					},
					se = function() {
						function e(t, n) {
							var i = this,
								s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
							T(this, e), this.scheduleUpdate = function() {
								return requestAnimationFrame(i.update)
							}, this.update = o(this.update.bind(this)), this.options = k({}, e.Defaults, s), this.state = {
								isDestroyed: !1,
								isCreated: !1,
								scrollParents: []
							}, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(k({}, e.Defaults.modifiers, s.modifiers)).forEach((function(t) {
								i.options.modifiers[t] = k({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
							})), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
								return k({
									name: e
								}, i.options.modifiers[e])
							})).sort((function(e, t) {
								return e.order - t.order
							})), this.modifiers.forEach((function(e) {
								e.enabled && r(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
							})), this.update();
							var a = this.options.eventsEnabled;
							a && this.enableEventListeners(), this.state.eventsEnabled = a
						}
						return _(e, [{
							key: "update",
							value: function() {
								return R.call(this)
							}
						}, {
							key: "destroy",
							value: function() {
								return B.call(this)
							}
						}, {
							key: "enableEventListeners",
							value: function() {
								return X.call(this)
							}
						}, {
							key: "disableEventListeners",
							value: function() {
								return Q.call(this)
							}
						}]), e
					}();
				se.Utils = ("undefined" != typeof window ? window : e).PopperUtils, se.placements = J, se.Defaults = re, t.default = se
			}.call(this, n("yLpj"))
	},
	EVdn: function(e, t, n) {
		var i;
		! function(t, n) {
			"use strict";
			"object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
				if (!e.document) throw new Error("jQuery requires a window with a document");
				return n(e)
			} : n(t)
		}("undefined" != typeof window ? window : this, (function(n, o) {
			"use strict";
			var r = [],
				s = Object.getPrototypeOf,
				a = r.slice,
				l = r.flat ? function(e) {
					return r.flat.call(e)
				} : function(e) {
					return r.concat.apply([], e)
				},
				c = r.push,
				d = r.indexOf,
				u = {},
				p = u.toString,
				f = u.hasOwnProperty,
				h = f.toString,
				g = h.call(Object),
				m = {},
				v = function(e) {
					return "function" == typeof e && "number" != typeof e.nodeType
				},
				y = function(e) {
					return null != e && e === e.window
				},
				b = n.document,
				w = {
					type: !0,
					src: !0,
					nonce: !0,
					noModule: !0
				};

			function T(e, t, n) {
				var i, o, r = (n = n || b).createElement("script");
				if (r.text = e, t)
					for (i in w)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
				n.head.appendChild(r).parentNode.removeChild(r)
			}

			function _(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[p.call(e)] || "object" : typeof e
			}
			var x = function(e, t) {
				return new x.fn.init(e, t)
			};

			function k(e) {
				var t = !!e && "length" in e && e.length,
					n = _(e);
				return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
			}
			x.fn = x.prototype = {
				jquery: "3.5.1",
				constructor: x,
				length: 0,
				toArray: function() {
					return a.call(this)
				},
				get: function(e) {
					return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
				},
				pushStack: function(e) {
					var t = x.merge(this.constructor(), e);
					return t.prevObject = this, t
				},
				each: function(e) {
					return x.each(this, e)
				},
				map: function(e) {
					return this.pushStack(x.map(this, (function(t, n) {
						return e.call(t, n, t)
					})))
				},
				slice: function() {
					return this.pushStack(a.apply(this, arguments))
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				even: function() {
					return this.pushStack(x.grep(this, (function(e, t) {
						return (t + 1) % 2
					})))
				},
				odd: function() {
					return this.pushStack(x.grep(this, (function(e, t) {
						return t % 2
					})))
				},
				eq: function(e) {
					var t = this.length,
						n = +e + (e < 0 ? t : 0);
					return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
				},
				end: function() {
					return this.prevObject || this.constructor()
				},
				push: c,
				sort: r.sort,
				splice: r.splice
			}, x.extend = x.fn.extend = function() {
				var e, t, n, i, o, r, s = arguments[0] || {},
					a = 1,
					l = arguments.length,
					c = !1;
				for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
					if (null != (e = arguments[a]))
						for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (x.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], r = o && !Array.isArray(n) ? [] : o || x.isPlainObject(n) ? n : {}, o = !1, s[t] = x.extend(c, r, i)) : void 0 !== i && (s[t] = i));
				return s
			}, x.extend({
				expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
				isReady: !0,
				error: function(e) {
					throw new Error(e)
				},
				noop: function() {},
				isPlainObject: function(e) {
					var t, n;
					return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && h.call(n) === g)
				},
				isEmptyObject: function(e) {
					var t;
					for (t in e) return !1;
					return !0
				},
				globalEval: function(e, t, n) {
					T(e, {
						nonce: t && t.nonce
					}, n)
				},
				each: function(e, t) {
					var n, i = 0;
					if (k(e))
						for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
					else
						for (i in e)
							if (!1 === t.call(e[i], i, e[i])) break;
					return e
				},
				makeArray: function(e, t) {
					var n = t || [];
					return null != e && (k(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
				},
				inArray: function(e, t, n) {
					return null == t ? -1 : d.call(t, e, n)
				},
				merge: function(e, t) {
					for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
					return e.length = o, e
				},
				grep: function(e, t, n) {
					for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
					return i
				},
				map: function(e, t, n) {
					var i, o, r = 0,
						s = [];
					if (k(e))
						for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
					else
						for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
					return l(s)
				},
				guid: 1,
				support: m
			}), "function" == typeof Symbol && (x.fn[Symbol.iterator] = r[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
				u["[object " + t + "]"] = t.toLowerCase()
			}));
			var S = function(e) {
				var t, n, i, o, r, s, a, l, c, d, u, p, f, h, g, m, v, y, b, w = "sizzle" + 1 * new Date,
					T = e.document,
					_ = 0,
					x = 0,
					k = le(),
					S = le(),
					C = le(),
					E = le(),
					A = function(e, t) {
						return e === t && (u = !0), 0
					},
					D = {}.hasOwnProperty,
					O = [],
					N = O.pop,
					j = O.push,
					$ = O.push,
					L = O.slice,
					I = function(e, t) {
						for (var n = 0, i = e.length; n < i; n++)
							if (e[n] === t) return n;
						return -1
					},
					P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
					H = "[\\x20\\t\\r\\n\\f]",
					q = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
					M = "\\[" + H + "*(" + q + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + H + "*\\]",
					R = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
					F = new RegExp(H + "+", "g"),
					W = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
					B = new RegExp("^" + H + "*," + H + "*"),
					z = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
					U = new RegExp(H + "|>"),
					X = new RegExp(R),
					Q = new RegExp("^" + q + "$"),
					V = {
						ID: new RegExp("^#(" + q + ")"),
						CLASS: new RegExp("^\\.(" + q + ")"),
						TAG: new RegExp("^(" + q + "|[*])"),
						ATTR: new RegExp("^" + M),
						PSEUDO: new RegExp("^" + R),
						CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
						bool: new RegExp("^(?:" + P + ")$", "i"),
						needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
					},
					Y = /HTML$/i,
					K = /^(?:input|select|textarea|button)$/i,
					G = /^h\d$/i,
					J = /^[^{]+\{\s*\[native \w/,
					Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					ee = /[+~]/,
					te = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
					ne = function(e, t) {
						var n = "0x" + e.slice(1) - 65536;
						return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
					},
					ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
					oe = function(e, t) {
						return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
					},
					re = function() {
						p()
					},
					se = we((function(e) {
						return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
					}), {
						dir: "parentNode",
						next: "legend"
					});
				try {
					$.apply(O = L.call(T.childNodes), T.childNodes), O[T.childNodes.length].nodeType
				} catch (e) {
					$ = {
						apply: O.length ? function(e, t) {
							j.apply(e, L.call(t))
						} : function(e, t) {
							for (var n = e.length, i = 0; e[n++] = t[i++];);
							e.length = n - 1
						}
					}
				}

				function ae(e, t, i, o) {
					var r, a, c, d, u, h, v, y = t && t.ownerDocument,
						T = t ? t.nodeType : 9;
					if (i = i || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return i;
					if (!o && (p(t), t = t || f, g)) {
						if (11 !== T && (u = Z.exec(e)))
							if (r = u[1]) {
								if (9 === T) {
									if (!(c = t.getElementById(r))) return i;
									if (c.id === r) return i.push(c), i
								} else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i
							} else {
								if (u[2]) return $.apply(i, t.getElementsByTagName(e)), i;
								if ((r = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return $.apply(i, t.getElementsByClassName(r)), i
							} if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
							if (v = e, y = t, 1 === T && (U.test(e) || z.test(e))) {
								for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((d = t.getAttribute("id")) ? d = d.replace(ie, oe) : t.setAttribute("id", d = w)), a = (h = s(e)).length; a--;) h[a] = (d ? "#" + d : ":scope") + " " + be(h[a]);
								v = h.join(",")
							}
							try {
								return $.apply(i, y.querySelectorAll(v)), i
							} catch (t) {
								E(e, !0)
							} finally {
								d === w && t.removeAttribute("id")
							}
						}
					}
					return l(e.replace(W, "$1"), t, i, o)
				}

				function le() {
					var e = [];
					return function t(n, o) {
						return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
					}
				}

				function ce(e) {
					return e[w] = !0, e
				}

				function de(e) {
					var t = f.createElement("fieldset");
					try {
						return !!e(t)
					} catch (e) {
						return !1
					} finally {
						t.parentNode && t.parentNode.removeChild(t), t = null
					}
				}

				function ue(e, t) {
					for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
				}

				function pe(e, t) {
					var n = t && e,
						i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
					if (i) return i;
					if (n)
						for (; n = n.nextSibling;)
							if (n === t) return -1;
					return e ? 1 : -1
				}

				function fe(e) {
					return function(t) {
						return "input" === t.nodeName.toLowerCase() && t.type === e
					}
				}

				function he(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return ("input" === n || "button" === n) && t.type === e
					}
				}

				function ge(e) {
					return function(t) {
						return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
					}
				}

				function me(e) {
					return ce((function(t) {
						return t = +t, ce((function(n, i) {
							for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
						}))
					}))
				}

				function ve(e) {
					return e && void 0 !== e.getElementsByTagName && e
				}
				for (t in n = ae.support = {}, r = ae.isXML = function(e) {
						var t = e.namespaceURI,
							n = (e.ownerDocument || e).documentElement;
						return !Y.test(t || n && n.nodeName || "HTML")
					}, p = ae.setDocument = function(e) {
						var t, o, s = e ? e.ownerDocument || e : T;
						return s != f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, g = !r(f), T != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.scope = de((function(e) {
							return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
						})), n.attributes = de((function(e) {
							return e.className = "i", !e.getAttribute("className")
						})), n.getElementsByTagName = de((function(e) {
							return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
						})), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = de((function(e) {
							return h.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
						})), n.getById ? (i.filter.ID = function(e) {
							var t = e.replace(te, ne);
							return function(e) {
								return e.getAttribute("id") === t
							}
						}, i.find.ID = function(e, t) {
							if (void 0 !== t.getElementById && g) {
								var n = t.getElementById(e);
								return n ? [n] : []
							}
						}) : (i.filter.ID = function(e) {
							var t = e.replace(te, ne);
							return function(e) {
								var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
								return n && n.value === t
							}
						}, i.find.ID = function(e, t) {
							if (void 0 !== t.getElementById && g) {
								var n, i, o, r = t.getElementById(e);
								if (r) {
									if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
									for (o = t.getElementsByName(e), i = 0; r = o[i++];)
										if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
								}
								return []
							}
						}), i.find.TAG = n.getElementsByTagName ? function(e, t) {
							return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
						} : function(e, t) {
							var n, i = [],
								o = 0,
								r = t.getElementsByTagName(e);
							if ("*" === e) {
								for (; n = r[o++];) 1 === n.nodeType && i.push(n);
								return i
							}
							return r
						}, i.find.CLASS = n.getElementsByClassName && function(e, t) {
							if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
						}, v = [], m = [], (n.qsa = J.test(f.querySelectorAll)) && (de((function(e) {
							var t;
							h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
						})), de((function(e) {
							e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
							var t = f.createElement("input");
							t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
						}))), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && de((function(e) {
							n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", R)
						})), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function(e, t) {
							var n = 9 === e.nodeType ? e.documentElement : e,
								i = t && t.parentNode;
							return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
						} : function(e, t) {
							if (t)
								for (; t = t.parentNode;)
									if (t === e) return !0;
							return !1
						}, A = t ? function(e, t) {
							if (e === t) return u = !0, 0;
							var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
							return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == T && b(T, e) ? -1 : t == f || t.ownerDocument == T && b(T, t) ? 1 : d ? I(d, e) - I(d, t) : 0 : 4 & i ? -1 : 1)
						} : function(e, t) {
							if (e === t) return u = !0, 0;
							var n, i = 0,
								o = e.parentNode,
								r = t.parentNode,
								s = [e],
								a = [t];
							if (!o || !r) return e == f ? -1 : t == f ? 1 : o ? -1 : r ? 1 : d ? I(d, e) - I(d, t) : 0;
							if (o === r) return pe(e, t);
							for (n = e; n = n.parentNode;) s.unshift(n);
							for (n = t; n = n.parentNode;) a.unshift(n);
							for (; s[i] === a[i];) i++;
							return i ? pe(s[i], a[i]) : s[i] == T ? -1 : a[i] == T ? 1 : 0
						}, f) : f
					}, ae.matches = function(e, t) {
						return ae(e, null, null, t)
					}, ae.matchesSelector = function(e, t) {
						if (p(e), n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
							var i = y.call(e, t);
							if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
						} catch (e) {
							E(t, !0)
						}
						return ae(t, f, null, [e]).length > 0
					}, ae.contains = function(e, t) {
						return (e.ownerDocument || e) != f && p(e), b(e, t)
					}, ae.attr = function(e, t) {
						(e.ownerDocument || e) != f && p(e);
						var o = i.attrHandle[t.toLowerCase()],
							r = o && D.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
						return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
					}, ae.escape = function(e) {
						return (e + "").replace(ie, oe)
					}, ae.error = function(e) {
						throw new Error("Syntax error, unrecognized expression: " + e)
					}, ae.uniqueSort = function(e) {
						var t, i = [],
							o = 0,
							r = 0;
						if (u = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(A), u) {
							for (; t = e[r++];) t === e[r] && (o = i.push(r));
							for (; o--;) e.splice(i[o], 1)
						}
						return d = null, e
					}, o = ae.getText = function(e) {
						var t, n = "",
							i = 0,
							r = e.nodeType;
						if (r) {
							if (1 === r || 9 === r || 11 === r) {
								if ("string" == typeof e.textContent) return e.textContent;
								for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
							} else if (3 === r || 4 === r) return e.nodeValue
						} else
							for (; t = e[i++];) n += o(t);
						return n
					}, (i = ae.selectors = {
						cacheLength: 50,
						createPseudo: ce,
						match: V,
						attrHandle: {},
						find: {},
						relative: {
							">": {
								dir: "parentNode",
								first: !0
							},
							" ": {
								dir: "parentNode"
							},
							"+": {
								dir: "previousSibling",
								first: !0
							},
							"~": {
								dir: "previousSibling"
							}
						},
						preFilter: {
							ATTR: function(e) {
								return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
							},
							CHILD: function(e) {
								return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
							},
							PSEUDO: function(e) {
								var t, n = !e[6] && e[2];
								return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
							}
						},
						filter: {
							TAG: function(e) {
								var t = e.replace(te, ne).toLowerCase();
								return "*" === e ? function() {
									return !0
								} : function(e) {
									return e.nodeName && e.nodeName.toLowerCase() === t
								}
							},
							CLASS: function(e) {
								var t = k[e + " "];
								return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && k(e, (function(e) {
									return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
								}))
							},
							ATTR: function(e, t, n) {
								return function(i) {
									var o = ae.attr(i, e);
									return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
								}
							},
							CHILD: function(e, t, n, i, o) {
								var r = "nth" !== e.slice(0, 3),
									s = "last" !== e.slice(-4),
									a = "of-type" === t;
								return 1 === i && 0 === o ? function(e) {
									return !!e.parentNode
								} : function(t, n, l) {
									var c, d, u, p, f, h, g = r !== s ? "nextSibling" : "previousSibling",
										m = t.parentNode,
										v = a && t.nodeName.toLowerCase(),
										y = !l && !a,
										b = !1;
									if (m) {
										if (r) {
											for (; g;) {
												for (p = t; p = p[g];)
													if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
												h = g = "only" === e && !h && "nextSibling"
											}
											return !0
										}
										if (h = [s ? m.firstChild : m.lastChild], s && y) {
											for (b = (f = (c = (d = (u = (p = m)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === _ && c[1]) && c[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
												if (1 === p.nodeType && ++b && p === t) {
													d[e] = [_, f, b];
													break
												}
										} else if (y && (b = f = (c = (d = (u = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === _ && c[1]), !1 === b)
											for (;
												(p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [_, b]), p !== t)););
										return (b -= o) === i || b % i == 0 && b / i >= 0
									}
								}
							},
							PSEUDO: function(e, t) {
								var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
								return o[w] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
									for (var i, r = o(e, t), s = r.length; s--;) e[i = I(e, r[s])] = !(n[i] = r[s])
								})) : function(e) {
									return o(e, 0, n)
								}) : o
							}
						},
						pseudos: {
							not: ce((function(e) {
								var t = [],
									n = [],
									i = a(e.replace(W, "$1"));
								return i[w] ? ce((function(e, t, n, o) {
									for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
								})) : function(e, o, r) {
									return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
								}
							})),
							has: ce((function(e) {
								return function(t) {
									return ae(e, t).length > 0
								}
							})),
							contains: ce((function(e) {
								return e = e.replace(te, ne),
									function(t) {
										return (t.textContent || o(t)).indexOf(e) > -1
									}
							})),
							lang: ce((function(e) {
								return Q.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
									function(t) {
										var n;
										do {
											if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
										} while ((t = t.parentNode) && 1 === t.nodeType);
										return !1
									}
							})),
							target: function(t) {
								var n = e.location && e.location.hash;
								return n && n.slice(1) === t.id
							},
							root: function(e) {
								return e === h
							},
							focus: function(e) {
								return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
							},
							enabled: ge(!1),
							disabled: ge(!0),
							checked: function(e) {
								var t = e.nodeName.toLowerCase();
								return "input" === t && !!e.checked || "option" === t && !!e.selected
							},
							selected: function(e) {
								return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
							},
							empty: function(e) {
								for (e = e.firstChild; e; e = e.nextSibling)
									if (e.nodeType < 6) return !1;
								return !0
							},
							parent: function(e) {
								return !i.pseudos.empty(e)
							},
							header: function(e) {
								return G.test(e.nodeName)
							},
							input: function(e) {
								return K.test(e.nodeName)
							},
							button: function(e) {
								var t = e.nodeName.toLowerCase();
								return "input" === t && "button" === e.type || "button" === t
							},
							text: function(e) {
								var t;
								return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
							},
							first: me((function() {
								return [0]
							})),
							last: me((function(e, t) {
								return [t - 1]
							})),
							eq: me((function(e, t, n) {
								return [n < 0 ? n + t : n]
							})),
							even: me((function(e, t) {
								for (var n = 0; n < t; n += 2) e.push(n);
								return e
							})),
							odd: me((function(e, t) {
								for (var n = 1; n < t; n += 2) e.push(n);
								return e
							})),
							lt: me((function(e, t, n) {
								for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
								return e
							})),
							gt: me((function(e, t, n) {
								for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
								return e
							}))
						}
					}).pseudos.nth = i.pseudos.eq, {
						radio: !0,
						checkbox: !0,
						file: !0,
						password: !0,
						image: !0
					}) i.pseudos[t] = fe(t);
				for (t in {
						submit: !0,
						reset: !0
					}) i.pseudos[t] = he(t);

				function ye() {}

				function be(e) {
					for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
					return i
				}

				function we(e, t, n) {
					var i = t.dir,
						o = t.next,
						r = o || i,
						s = n && "parentNode" === r,
						a = x++;
					return t.first ? function(t, n, o) {
						for (; t = t[i];)
							if (1 === t.nodeType || s) return e(t, n, o);
						return !1
					} : function(t, n, l) {
						var c, d, u, p = [_, a];
						if (l) {
							for (; t = t[i];)
								if ((1 === t.nodeType || s) && e(t, n, l)) return !0
						} else
							for (; t = t[i];)
								if (1 === t.nodeType || s)
									if (d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
									else {
										if ((c = d[r]) && c[0] === _ && c[1] === a) return p[2] = c[2];
										if (d[r] = p, p[2] = e(t, n, l)) return !0
									} return !1
					}
				}

				function Te(e) {
					return e.length > 1 ? function(t, n, i) {
						for (var o = e.length; o--;)
							if (!e[o](t, n, i)) return !1;
						return !0
					} : e[0]
				}

				function _e(e, t, n, i, o) {
					for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
					return s
				}

				function xe(e, t, n, i, o, r) {
					return i && !i[w] && (i = xe(i)), o && !o[w] && (o = xe(o, r)), ce((function(r, s, a, l) {
						var c, d, u, p = [],
							f = [],
							h = s.length,
							g = r || function(e, t, n) {
								for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
								return n
							}(t || "*", a.nodeType ? [a] : a, []),
							m = !e || !r && t ? g : _e(g, p, e, a, l),
							v = n ? o || (r ? e : h || i) ? [] : s : m;
						if (n && n(m, v, a, l), i)
							for (c = _e(v, f), i(c, [], a, l), d = c.length; d--;)(u = c[d]) && (v[f[d]] = !(m[f[d]] = u));
						if (r) {
							if (o || e) {
								if (o) {
									for (c = [], d = v.length; d--;)(u = v[d]) && c.push(m[d] = u);
									o(null, v = [], c, l)
								}
								for (d = v.length; d--;)(u = v[d]) && (c = o ? I(r, u) : p[d]) > -1 && (r[c] = !(s[c] = u))
							}
						} else v = _e(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, l) : $.apply(s, v)
					}))
				}

				function ke(e) {
					for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, d = we((function(e) {
							return e === t
						}), a, !0), u = we((function(e) {
							return I(t, e) > -1
						}), a, !0), p = [function(e, n, i) {
							var o = !s && (i || n !== c) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
							return t = null, o
						}]; l < r; l++)
						if (n = i.relative[e[l].type]) p = [we(Te(p), n)];
						else {
							if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
								for (o = ++l; o < r && !i.relative[e[o].type]; o++);
								return xe(l > 1 && Te(p), l > 1 && be(e.slice(0, l - 1).concat({
									value: " " === e[l - 2].type ? "*" : ""
								})).replace(W, "$1"), n, l < o && ke(e.slice(l, o)), o < r && ke(e = e.slice(o)), o < r && be(e))
							}
							p.push(n)
						} return Te(p)
				}
				return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function(e, t) {
					var n, o, r, s, a, l, c, d = S[e + " "];
					if (d) return t ? 0 : d.slice(0);
					for (a = e, l = [], c = i.preFilter; a;) {
						for (s in n && !(o = B.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = z.exec(a)) && (n = o.shift(), r.push({
								value: n,
								type: o[0].replace(W, " ")
							}), a = a.slice(n.length)), i.filter) !(o = V[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
							value: n,
							type: s,
							matches: o
						}), a = a.slice(n.length));
						if (!n) break
					}
					return t ? a.length : a ? ae.error(e) : S(e, l).slice(0)
				}, a = ae.compile = function(e, t) {
					var n, o = [],
						r = [],
						a = C[e + " "];
					if (!a) {
						for (t || (t = s(e)), n = t.length; n--;)(a = ke(t[n]))[w] ? o.push(a) : r.push(a);
						(a = C(e, function(e, t) {
							var n = t.length > 0,
								o = e.length > 0,
								r = function(r, s, a, l, d) {
									var u, h, m, v = 0,
										y = "0",
										b = r && [],
										w = [],
										T = c,
										x = r || o && i.find.TAG("*", d),
										k = _ += null == T ? 1 : Math.random() || .1,
										S = x.length;
									for (d && (c = s == f || s || d); y !== S && null != (u = x[y]); y++) {
										if (o && u) {
											for (h = 0, s || u.ownerDocument == f || (p(u), a = !g); m = e[h++];)
												if (m(u, s || f, a)) {
													l.push(u);
													break
												} d && (_ = k)
										}
										n && ((u = !m && u) && v--, r && b.push(u))
									}
									if (v += y, n && y !== v) {
										for (h = 0; m = t[h++];) m(b, w, s, a);
										if (r) {
											if (v > 0)
												for (; y--;) b[y] || w[y] || (w[y] = N.call(l));
											w = _e(w)
										}
										$.apply(l, w), d && !r && w.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
									}
									return d && (_ = k, c = T), b
								};
							return n ? ce(r) : r
						}(r, o))).selector = e
					}
					return a
				}, l = ae.select = function(e, t, n, o) {
					var r, l, c, d, u, p = "function" == typeof e && e,
						f = !o && s(e = p.selector || e);
					if (n = n || [], 1 === f.length) {
						if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
							if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
							p && (t = t.parentNode), e = e.slice(l.shift().value.length)
						}
						for (r = V.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[d = c.type]);)
							if ((u = i.find[d]) && (o = u(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
								if (l.splice(r, 1), !(e = o.length && be(l))) return $.apply(n, o), n;
								break
							}
					}
					return (p || a(e, f))(o, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
				}, n.sortStable = w.split("").sort(A).join("") === w, n.detectDuplicates = !!u, p(), n.sortDetached = de((function(e) {
					return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
				})), de((function(e) {
					return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
				})) || ue("type|href|height|width", (function(e, t, n) {
					if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
				})), n.attributes && de((function(e) {
					return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
				})) || ue("value", (function(e, t, n) {
					if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
				})), de((function(e) {
					return null == e.getAttribute("disabled")
				})) || ue(P, (function(e, t, n) {
					var i;
					if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
				})), ae
			}(n);
			x.find = S, x.expr = S.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = S.uniqueSort, x.text = S.getText, x.isXMLDoc = S.isXML, x.contains = S.contains, x.escapeSelector = S.escape;
			var C = function(e, t, n) {
					for (var i = [], o = void 0 !== n;
						(e = e[t]) && 9 !== e.nodeType;)
						if (1 === e.nodeType) {
							if (o && x(e).is(n)) break;
							i.push(e)
						} return i
				},
				E = function(e, t) {
					for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
					return n
				},
				A = x.expr.match.needsContext;

			function D(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			}
			var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

			function N(e, t, n) {
				return v(t) ? x.grep(e, (function(e, i) {
					return !!t.call(e, i, e) !== n
				})) : t.nodeType ? x.grep(e, (function(e) {
					return e === t !== n
				})) : "string" != typeof t ? x.grep(e, (function(e) {
					return d.call(t, e) > -1 !== n
				})) : x.filter(t, e, n)
			}
			x.filter = function(e, t, n) {
				var i = t[0];
				return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, (function(e) {
					return 1 === e.nodeType
				})))
			}, x.fn.extend({
				find: function(e) {
					var t, n, i = this.length,
						o = this;
					if ("string" != typeof e) return this.pushStack(x(e).filter((function() {
						for (t = 0; t < i; t++)
							if (x.contains(o[t], this)) return !0
					})));
					for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, o[t], n);
					return i > 1 ? x.uniqueSort(n) : n
				},
				filter: function(e) {
					return this.pushStack(N(this, e || [], !1))
				},
				not: function(e) {
					return this.pushStack(N(this, e || [], !0))
				},
				is: function(e) {
					return !!N(this, "string" == typeof e && A.test(e) ? x(e) : e || [], !1).length
				}
			});
			var j, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
			(x.fn.init = function(e, t, n) {
				var i, o;
				if (!e) return this;
				if (n = n || j, "string" == typeof e) {
					if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : $.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
					if (i[1]) {
						if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), O.test(i[1]) && x.isPlainObject(t))
							for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
						return this
					}
					return (o = b.getElementById(i[2])) && (this[0] = o, this.length = 1), this
				}
				return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
			}).prototype = x.fn, j = x(b);
			var L = /^(?:parents|prev(?:Until|All))/,
				I = {
					children: !0,
					contents: !0,
					next: !0,
					prev: !0
				};

			function P(e, t) {
				for (;
					(e = e[t]) && 1 !== e.nodeType;);
				return e
			}
			x.fn.extend({
				has: function(e) {
					var t = x(e, this),
						n = t.length;
					return this.filter((function() {
						for (var e = 0; e < n; e++)
							if (x.contains(this, t[e])) return !0
					}))
				},
				closest: function(e, t) {
					var n, i = 0,
						o = this.length,
						r = [],
						s = "string" != typeof e && x(e);
					if (!A.test(e))
						for (; i < o; i++)
							for (n = this[i]; n && n !== t; n = n.parentNode)
								if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
									r.push(n);
									break
								} return this.pushStack(r.length > 1 ? x.uniqueSort(r) : r)
				},
				index: function(e) {
					return e ? "string" == typeof e ? d.call(x(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
				},
				add: function(e, t) {
					return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
				},
				addBack: function(e) {
					return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
				}
			}), x.each({
				parent: function(e) {
					var t = e.parentNode;
					return t && 11 !== t.nodeType ? t : null
				},
				parents: function(e) {
					return C(e, "parentNode")
				},
				parentsUntil: function(e, t, n) {
					return C(e, "parentNode", n)
				},
				next: function(e) {
					return P(e, "nextSibling")
				},
				prev: function(e) {
					return P(e, "previousSibling")
				},
				nextAll: function(e) {
					return C(e, "nextSibling")
				},
				prevAll: function(e) {
					return C(e, "previousSibling")
				},
				nextUntil: function(e, t, n) {
					return C(e, "nextSibling", n)
				},
				prevUntil: function(e, t, n) {
					return C(e, "previousSibling", n)
				},
				siblings: function(e) {
					return E((e.parentNode || {}).firstChild, e)
				},
				children: function(e) {
					return E(e.firstChild)
				},
				contents: function(e) {
					return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
				}
			}, (function(e, t) {
				x.fn[e] = function(n, i) {
					var o = x.map(this, t, n);
					return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = x.filter(i, o)), this.length > 1 && (I[e] || x.uniqueSort(o), L.test(e) && o.reverse()), this.pushStack(o)
				}
			}));
			var H = /[^\x20\t\r\n\f]+/g;

			function q(e) {
				return e
			}

			function M(e) {
				throw e
			}

			function R(e, t, n, i) {
				var o;
				try {
					e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
				} catch (e) {
					n.apply(void 0, [e])
				}
			}
			x.Callbacks = function(e) {
				e = "string" == typeof e ? function(e) {
					var t = {};
					return x.each(e.match(H) || [], (function(e, n) {
						t[n] = !0
					})), t
				}(e) : x.extend({}, e);
				var t, n, i, o, r = [],
					s = [],
					a = -1,
					l = function() {
						for (o = o || e.once, i = t = !0; s.length; a = -1)
							for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
						e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
					},
					c = {
						add: function() {
							return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
								x.each(n, (function(n, i) {
									v(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== _(i) && t(i)
								}))
							}(arguments), n && !t && l()), this
						},
						remove: function() {
							return x.each(arguments, (function(e, t) {
								for (var n;
									(n = x.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= a && a--
							})), this
						},
						has: function(e) {
							return e ? x.inArray(e, r) > -1 : r.length > 0
						},
						empty: function() {
							return r && (r = []), this
						},
						disable: function() {
							return o = s = [], r = n = "", this
						},
						disabled: function() {
							return !r
						},
						lock: function() {
							return o = s = [], n || t || (r = n = ""), this
						},
						locked: function() {
							return !!o
						},
						fireWith: function(e, n) {
							return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
						},
						fire: function() {
							return c.fireWith(this, arguments), this
						},
						fired: function() {
							return !!i
						}
					};
				return c
			}, x.extend({
				Deferred: function(e) {
					var t = [
							["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
							["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
							["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
						],
						i = "pending",
						o = {
							state: function() {
								return i
							},
							always: function() {
								return r.done(arguments).fail(arguments), this
							},
							catch: function(e) {
								return o.then(null, e)
							},
							pipe: function() {
								var e = arguments;
								return x.Deferred((function(n) {
									x.each(t, (function(t, i) {
										var o = v(e[i[4]]) && e[i[4]];
										r[i[1]]((function() {
											var e = o && o.apply(this, arguments);
											e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments)
										}))
									})), e = null
								})).promise()
							},
							then: function(e, i, o) {
								var r = 0;

								function s(e, t, i, o) {
									return function() {
										var a = this,
											l = arguments,
											c = function() {
												var n, c;
												if (!(e < r)) {
													if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
													c = n && ("object" == typeof n || "function" == typeof n) && n.then, v(c) ? o ? c.call(n, s(r, t, q, o), s(r, t, M, o)) : (r++, c.call(n, s(r, t, q, o), s(r, t, M, o), s(r, t, q, t.notifyWith))) : (i !== q && (a = void 0, l = [n]), (o || t.resolveWith)(a, l))
												}
											},
											d = o ? c : function() {
												try {
													c()
												} catch (n) {
													x.Deferred.exceptionHook && x.Deferred.exceptionHook(n, d.stackTrace), e + 1 >= r && (i !== M && (a = void 0, l = [n]), t.rejectWith(a, l))
												}
											};
										e ? d() : (x.Deferred.getStackHook && (d.stackTrace = x.Deferred.getStackHook()), n.setTimeout(d))
									}
								}
								return x.Deferred((function(n) {
									t[0][3].add(s(0, n, v(o) ? o : q, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : q)), t[2][3].add(s(0, n, v(i) ? i : M))
								})).promise()
							},
							promise: function(e) {
								return null != e ? x.extend(e, o) : o
							}
						},
						r = {};
					return x.each(t, (function(e, n) {
						var s = n[2],
							a = n[5];
						o[n[1]] = s.add, a && s.add((function() {
							i = a
						}), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), r[n[0]] = function() {
							return r[n[0] + "With"](this === r ? void 0 : this, arguments), this
						}, r[n[0] + "With"] = s.fireWith
					})), o.promise(r), e && e.call(r, r), r
				},
				when: function(e) {
					var t = arguments.length,
						n = t,
						i = Array(n),
						o = a.call(arguments),
						r = x.Deferred(),
						s = function(e) {
							return function(n) {
								i[e] = this, o[e] = arguments.length > 1 ? a.call(arguments) : n, --t || r.resolveWith(i, o)
							}
						};
					if (t <= 1 && (R(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || v(o[n] && o[n].then))) return r.then();
					for (; n--;) R(o[n], s(n), r.reject);
					return r.promise()
				}
			});
			var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
			x.Deferred.exceptionHook = function(e, t) {
				n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
			}, x.readyException = function(e) {
				n.setTimeout((function() {
					throw e
				}))
			};
			var W = x.Deferred();

			function B() {
				b.removeEventListener("DOMContentLoaded", B), n.removeEventListener("load", B), x.ready()
			}
			x.fn.ready = function(e) {
				return W.then(e).catch((function(e) {
					x.readyException(e)
				})), this
			}, x.extend({
				isReady: !1,
				readyWait: 1,
				ready: function(e) {
					(!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || W.resolveWith(b, [x]))
				}
			}), x.ready.then = W.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(x.ready) : (b.addEventListener("DOMContentLoaded", B), n.addEventListener("load", B));
			var z = function(e, t, n, i, o, r, s) {
					var a = 0,
						l = e.length,
						c = null == n;
					if ("object" === _(n))
						for (a in o = !0, n) z(e, t, a, n[a], !0, r, s);
					else if (void 0 !== i && (o = !0, v(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
							return c.call(x(e), n)
						})), t))
						for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
					return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
				},
				U = /^-ms-/,
				X = /-([a-z])/g;

			function Q(e, t) {
				return t.toUpperCase()
			}

			function V(e) {
				return e.replace(U, "ms-").replace(X, Q)
			}
			var Y = function(e) {
				return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
			};

			function K() {
				this.expando = x.expando + K.uid++
			}
			K.uid = 1, K.prototype = {
				cache: function(e) {
					var t = e[this.expando];
					return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
						value: t,
						configurable: !0
					}))), t
				},
				set: function(e, t, n) {
					var i, o = this.cache(e);
					if ("string" == typeof t) o[V(t)] = n;
					else
						for (i in t) o[V(i)] = t[i];
					return o
				},
				get: function(e, t) {
					return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
				},
				access: function(e, t, n) {
					return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
				},
				remove: function(e, t) {
					var n, i = e[this.expando];
					if (void 0 !== i) {
						if (void 0 !== t) {
							n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(H) || []).length;
							for (; n--;) delete i[t[n]]
						}(void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
					}
				},
				hasData: function(e) {
					var t = e[this.expando];
					return void 0 !== t && !x.isEmptyObject(t)
				}
			};
			var G = new K,
				J = new K,
				Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
				ee = /[A-Z]/g;

			function te(e, t, n) {
				var i;
				if (void 0 === n && 1 === e.nodeType)
					if (i = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
						try {
							n = function(e) {
								return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
							}(n)
						} catch (e) {}
						J.set(e, t, n)
					} else n = void 0;
				return n
			}
			x.extend({
				hasData: function(e) {
					return J.hasData(e) || G.hasData(e)
				},
				data: function(e, t, n) {
					return J.access(e, t, n)
				},
				removeData: function(e, t) {
					J.remove(e, t)
				},
				_data: function(e, t, n) {
					return G.access(e, t, n)
				},
				_removeData: function(e, t) {
					G.remove(e, t)
				}
			}), x.fn.extend({
				data: function(e, t) {
					var n, i, o, r = this[0],
						s = r && r.attributes;
					if (void 0 === e) {
						if (this.length && (o = J.get(r), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))) {
							for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = V(i.slice(5)), te(r, i, o[i]));
							G.set(r, "hasDataAttrs", !0)
						}
						return o
					}
					return "object" == typeof e ? this.each((function() {
						J.set(this, e)
					})) : z(this, (function(t) {
						var n;
						if (r && void 0 === t) return void 0 !== (n = J.get(r, e)) || void 0 !== (n = te(r, e)) ? n : void 0;
						this.each((function() {
							J.set(this, e, t)
						}))
					}), null, t, arguments.length > 1, null, !0)
				},
				removeData: function(e) {
					return this.each((function() {
						J.remove(this, e)
					}))
				}
			}), x.extend({
				queue: function(e, t, n) {
					var i;
					if (e) return t = (t || "fx") + "queue", i = G.get(e, t), n && (!i || Array.isArray(n) ? i = G.access(e, t, x.makeArray(n)) : i.push(n)), i || []
				},
				dequeue: function(e, t) {
					t = t || "fx";
					var n = x.queue(e, t),
						i = n.length,
						o = n.shift(),
						r = x._queueHooks(e, t);
					"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, (function() {
						x.dequeue(e, t)
					}), r)), !i && r && r.empty.fire()
				},
				_queueHooks: function(e, t) {
					var n = t + "queueHooks";
					return G.get(e, n) || G.access(e, n, {
						empty: x.Callbacks("once memory").add((function() {
							G.remove(e, [t + "queue", n])
						}))
					})
				}
			}), x.fn.extend({
				queue: function(e, t) {
					var n = 2;
					return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each((function() {
						var n = x.queue(this, e, t);
						x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
					}))
				},
				dequeue: function(e) {
					return this.each((function() {
						x.dequeue(this, e)
					}))
				},
				clearQueue: function(e) {
					return this.queue(e || "fx", [])
				},
				promise: function(e, t) {
					var n, i = 1,
						o = x.Deferred(),
						r = this,
						s = this.length,
						a = function() {
							--i || o.resolveWith(r, [r])
						};
					for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = G.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
					return a(), o.promise(t)
				}
			});
			var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
				ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
				oe = ["Top", "Right", "Bottom", "Left"],
				re = b.documentElement,
				se = function(e) {
					return x.contains(e.ownerDocument, e)
				},
				ae = {
					composed: !0
				};
			re.getRootNode && (se = function(e) {
				return x.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
			});
			var le = function(e, t) {
				return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === x.css(e, "display")
			};

			function ce(e, t, n, i) {
				var o, r, s = 20,
					a = i ? function() {
						return i.cur()
					} : function() {
						return x.css(e, t, "")
					},
					l = a(),
					c = n && n[3] || (x.cssNumber[t] ? "" : "px"),
					d = e.nodeType && (x.cssNumber[t] || "px" !== c && +l) && ie.exec(x.css(e, t));
				if (d && d[3] !== c) {
					for (l /= 2, c = c || d[3], d = +l || 1; s--;) x.style(e, t, d + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), d /= r;
					d *= 2, x.style(e, t, d + c), n = n || []
				}
				return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o
			}
			var de = {};

			function ue(e) {
				var t, n = e.ownerDocument,
					i = e.nodeName,
					o = de[i];
				return o || (t = n.body.appendChild(n.createElement(i)), o = x.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), de[i] = o, o)
			}

			function pe(e, t) {
				for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = G.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && le(i) && (o[r] = ue(i))) : "none" !== n && (o[r] = "none", G.set(i, "display", n)));
				for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
				return e
			}
			x.fn.extend({
				show: function() {
					return pe(this, !0)
				},
				hide: function() {
					return pe(this)
				},
				toggle: function(e) {
					return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
						le(this) ? x(this).show() : x(this).hide()
					}))
				}
			});
			var fe, he, ge = /^(?:checkbox|radio)$/i,
				me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
				ve = /^$|^module$|\/(?:java|ecma)script/i;
			fe = b.createDocumentFragment().appendChild(b.createElement("div")), (he = b.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), fe.appendChild(he), m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", m.option = !!fe.lastChild;
			var ye = {
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};

			function be(e, t) {
				var n;
				return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? x.merge([e], n) : n
			}

			function we(e, t) {
				for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
			}
			ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, m.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
			var Te = /<|&#?\w+;/;

			function _e(e, t, n, i, o) {
				for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
					if ((r = e[f]) || 0 === r)
						if ("object" === _(r)) x.merge(p, r.nodeType ? [r] : r);
						else if (Te.test(r)) {
					for (s = s || u.appendChild(t.createElement("div")), a = (me.exec(r) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, s.innerHTML = l[1] + x.htmlPrefilter(r) + l[2], d = l[0]; d--;) s = s.lastChild;
					x.merge(p, s.childNodes), (s = u.firstChild).textContent = ""
				} else p.push(t.createTextNode(r));
				for (u.textContent = "", f = 0; r = p[f++];)
					if (i && x.inArray(r, i) > -1) o && o.push(r);
					else if (c = se(r), s = be(u.appendChild(r), "script"), c && we(s), n)
					for (d = 0; r = s[d++];) ve.test(r.type || "") && n.push(r);
				return u
			}
			var xe = /^key/,
				ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
				Se = /^([^.]*)(?:\.(.+)|)/;

			function Ce() {
				return !0
			}

			function Ee() {
				return !1
			}

			function Ae(e, t) {
				return e === function() {
					try {
						return b.activeElement
					} catch (e) {}
				}() == ("focus" === t)
			}

			function De(e, t, n, i, o, r) {
				var s, a;
				if ("object" == typeof t) {
					for (a in "string" != typeof n && (i = i || n, n = void 0), t) De(e, a, n, i, t[a], r);
					return e
				}
				if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ee;
				else if (!o) return e;
				return 1 === r && (s = o, (o = function(e) {
					return x().off(e), s.apply(this, arguments)
				}).guid = s.guid || (s.guid = x.guid++)), e.each((function() {
					x.event.add(this, t, o, i, n)
				}))
			}

			function Oe(e, t, n) {
				n ? (G.set(e, t, !1), x.event.add(e, t, {
					namespace: !1,
					handler: function(e) {
						var i, o, r = G.get(this, t);
						if (1 & e.isTrigger && this[t]) {
							if (r.length)(x.event.special[t] || {}).delegateType && e.stopPropagation();
							else if (r = a.call(arguments), G.set(this, t, r), i = n(this, t), this[t](), r !== (o = G.get(this, t)) || i ? G.set(this, t, !1) : o = {}, r !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
						} else r.length && (G.set(this, t, {
							value: x.event.trigger(x.extend(r[0], x.Event.prototype), r.slice(1), this)
						}), e.stopImmediatePropagation())
					}
				})) : void 0 === G.get(e, t) && x.event.add(e, t, Ce)
			}
			x.event = {
				global: {},
				add: function(e, t, n, i, o) {
					var r, s, a, l, c, d, u, p, f, h, g, m = G.get(e);
					if (Y(e))
						for (n.handler && (n = (r = n).handler, o = r.selector), o && x.find.matchesSelector(re, o), n.guid || (n.guid = x.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function(t) {
								return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
							}), c = (t = (t || "").match(H) || [""]).length; c--;) f = g = (a = Se.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = x.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = x.event.special[f] || {}, d = x.extend({
							type: f,
							origType: g,
							data: i,
							handler: n,
							guid: n.guid,
							selector: o,
							needsContext: o && x.expr.match.needsContext.test(o),
							namespace: h.join(".")
						}, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), x.event.global[f] = !0)
				},
				remove: function(e, t, n, i, o) {
					var r, s, a, l, c, d, u, p, f, h, g, m = G.hasData(e) && G.get(e);
					if (m && (l = m.events)) {
						for (c = (t = (t || "").match(H) || [""]).length; c--;)
							if (f = g = (a = Se.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
								for (u = x.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) d = p[r], !o && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
								s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, m.handle) || x.removeEvent(e, f, m.handle), delete l[f])
							} else
								for (f in l) x.event.remove(e, f + t[c], n, i, !0);
						x.isEmptyObject(l) && G.remove(e, "handle events")
					}
				},
				dispatch: function(e) {
					var t, n, i, o, r, s, a = new Array(arguments.length),
						l = x.event.fix(e),
						c = (G.get(this, "events") || Object.create(null))[l.type] || [],
						d = x.event.special[l.type] || {};
					for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
					if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
						for (s = x.event.handlers.call(this, l, c), t = 0;
							(o = s[t++]) && !l.isPropagationStopped();)
							for (l.currentTarget = o.elem, n = 0;
								(r = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((x.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
						return d.postDispatch && d.postDispatch.call(this, l), l.result
					}
				},
				handlers: function(e, t) {
					var n, i, o, r, s, a = [],
						l = t.delegateCount,
						c = e.target;
					if (l && c.nodeType && !("click" === e.type && e.button >= 1))
						for (; c !== this; c = c.parentNode || this)
							if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
								for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? x(o, this).index(c) > -1 : x.find(o, this, null, [c]).length), s[o] && r.push(i);
								r.length && a.push({
									elem: c,
									handlers: r
								})
							} return c = this, l < t.length && a.push({
						elem: c,
						handlers: t.slice(l)
					}), a
				},
				addProp: function(e, t) {
					Object.defineProperty(x.Event.prototype, e, {
						enumerable: !0,
						configurable: !0,
						get: v(t) ? function() {
							if (this.originalEvent) return t(this.originalEvent)
						} : function() {
							if (this.originalEvent) return this.originalEvent[e]
						},
						set: function(t) {
							Object.defineProperty(this, e, {
								enumerable: !0,
								configurable: !0,
								writable: !0,
								value: t
							})
						}
					})
				},
				fix: function(e) {
					return e[x.expando] ? e : new x.Event(e)
				},
				special: {
					load: {
						noBubble: !0
					},
					click: {
						setup: function(e) {
							var t = this || e;
							return ge.test(t.type) && t.click && D(t, "input") && Oe(t, "click", Ce), !1
						},
						trigger: function(e) {
							var t = this || e;
							return ge.test(t.type) && t.click && D(t, "input") && Oe(t, "click"), !0
						},
						_default: function(e) {
							var t = e.target;
							return ge.test(t.type) && t.click && D(t, "input") && G.get(t, "click") || D(t, "a")
						}
					},
					beforeunload: {
						postDispatch: function(e) {
							void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
						}
					}
				}
			}, x.removeEvent = function(e, t, n) {
				e.removeEventListener && e.removeEventListener(t, n)
			}, x.Event = function(e, t) {
				if (!(this instanceof x.Event)) return new x.Event(e, t);
				e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
			}, x.Event.prototype = {
				constructor: x.Event,
				isDefaultPrevented: Ee,
				isPropagationStopped: Ee,
				isImmediatePropagationStopped: Ee,
				isSimulated: !1,
				preventDefault: function() {
					var e = this.originalEvent;
					this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
				},
				stopPropagation: function() {
					var e = this.originalEvent;
					this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
				},
				stopImmediatePropagation: function() {
					var e = this.originalEvent;
					this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
				}
			}, x.each({
				altKey: !0,
				bubbles: !0,
				cancelable: !0,
				changedTouches: !0,
				ctrlKey: !0,
				detail: !0,
				eventPhase: !0,
				metaKey: !0,
				pageX: !0,
				pageY: !0,
				shiftKey: !0,
				view: !0,
				char: !0,
				code: !0,
				charCode: !0,
				key: !0,
				keyCode: !0,
				button: !0,
				buttons: !0,
				clientX: !0,
				clientY: !0,
				offsetX: !0,
				offsetY: !0,
				pointerId: !0,
				pointerType: !0,
				screenX: !0,
				screenY: !0,
				targetTouches: !0,
				toElement: !0,
				touches: !0,
				which: function(e) {
					var t = e.button;
					return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
				}
			}, x.event.addProp), x.each({
				focus: "focusin",
				blur: "focusout"
			}, (function(e, t) {
				x.event.special[e] = {
					setup: function() {
						return Oe(this, e, Ae), !1
					},
					trigger: function() {
						return Oe(this, e), !0
					},
					delegateType: t
				}
			})), x.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout"
			}, (function(e, t) {
				x.event.special[e] = {
					delegateType: t,
					bindType: t,
					handle: function(e) {
						var n, i = this,
							o = e.relatedTarget,
							r = e.handleObj;
						return o && (o === i || x.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
					}
				}
			})), x.fn.extend({
				on: function(e, t, n, i) {
					return De(this, e, t, n, i)
				},
				one: function(e, t, n, i) {
					return De(this, e, t, n, i, 1)
				},
				off: function(e, t, n) {
					var i, o;
					if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
					if ("object" == typeof e) {
						for (o in e) this.off(o, t, e[o]);
						return this
					}
					return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each((function() {
						x.event.remove(this, e, n, t)
					}))
				}
			});
			var Ne = /<script|<style|<link/i,
				je = /checked\s*(?:[^=]|=\s*.checked.)/i,
				$e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

			function Le(e, t) {
				return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
			}

			function Ie(e) {
				return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
			}

			function Pe(e) {
				return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
			}

			function He(e, t) {
				var n, i, o, r, s, a;
				if (1 === t.nodeType) {
					if (G.hasData(e) && (a = G.get(e).events))
						for (o in G.remove(t, "handle events"), a)
							for (n = 0, i = a[o].length; n < i; n++) x.event.add(t, o, a[o][n]);
					J.hasData(e) && (r = J.access(e), s = x.extend({}, r), J.set(t, s))
				}
			}

			function qe(e, t) {
				var n = t.nodeName.toLowerCase();
				"input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
			}

			function Me(e, t, n, i) {
				t = l(t);
				var o, r, s, a, c, d, u = 0,
					p = e.length,
					f = p - 1,
					h = t[0],
					g = v(h);
				if (g || p > 1 && "string" == typeof h && !m.checkClone && je.test(h)) return e.each((function(o) {
					var r = e.eq(o);
					g && (t[0] = h.call(this, o, r.html())), Me(r, t, n, i)
				}));
				if (p && (r = (o = _e(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
					for (a = (s = x.map(be(o, "script"), Ie)).length; u < p; u++) c = o, u !== f && (c = x.clone(c, !0, !0), a && x.merge(s, be(c, "script"))), n.call(e[u], c, u);
					if (a)
						for (d = s[s.length - 1].ownerDocument, x.map(s, Pe), u = 0; u < a; u++) c = s[u], ve.test(c.type || "") && !G.access(c, "globalEval") && x.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && !c.noModule && x._evalUrl(c.src, {
							nonce: c.nonce || c.getAttribute("nonce")
						}, d) : T(c.textContent.replace($e, ""), c, d))
				}
				return e
			}

			function Re(e, t, n) {
				for (var i, o = t ? x.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || x.cleanData(be(i)), i.parentNode && (n && se(i) && we(be(i, "script")), i.parentNode.removeChild(i));
				return e
			}
			x.extend({
				htmlPrefilter: function(e) {
					return e
				},
				clone: function(e, t, n) {
					var i, o, r, s, a = e.cloneNode(!0),
						l = se(e);
					if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
						for (s = be(a), i = 0, o = (r = be(e)).length; i < o; i++) qe(r[i], s[i]);
					if (t)
						if (n)
							for (r = r || be(e), s = s || be(a), i = 0, o = r.length; i < o; i++) He(r[i], s[i]);
						else He(e, a);
					return (s = be(a, "script")).length > 0 && we(s, !l && be(e, "script")), a
				},
				cleanData: function(e) {
					for (var t, n, i, o = x.event.special, r = 0; void 0 !== (n = e[r]); r++)
						if (Y(n)) {
							if (t = n[G.expando]) {
								if (t.events)
									for (i in t.events) o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
								n[G.expando] = void 0
							}
							n[J.expando] && (n[J.expando] = void 0)
						}
				}
			}), x.fn.extend({
				detach: function(e) {
					return Re(this, e, !0)
				},
				remove: function(e) {
					return Re(this, e)
				},
				text: function(e) {
					return z(this, (function(e) {
						return void 0 === e ? x.text(this) : this.empty().each((function() {
							1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
						}))
					}), null, e, arguments.length)
				},
				append: function() {
					return Me(this, arguments, (function(e) {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
					}))
				},
				prepend: function() {
					return Me(this, arguments, (function(e) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							var t = Le(this, e);
							t.insertBefore(e, t.firstChild)
						}
					}))
				},
				before: function() {
					return Me(this, arguments, (function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this)
					}))
				},
				after: function() {
					return Me(this, arguments, (function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
					}))
				},
				empty: function() {
					for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(be(e, !1)), e.textContent = "");
					return this
				},
				clone: function(e, t) {
					return e = null != e && e, t = null == t ? e : t, this.map((function() {
						return x.clone(this, e, t)
					}))
				},
				html: function(e) {
					return z(this, (function(e) {
						var t = this[0] || {},
							n = 0,
							i = this.length;
						if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
						if ("string" == typeof e && !Ne.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
							e = x.htmlPrefilter(e);
							try {
								for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(be(t, !1)), t.innerHTML = e);
								t = 0
							} catch (e) {}
						}
						t && this.empty().append(e)
					}), null, e, arguments.length)
				},
				replaceWith: function() {
					var e = [];
					return Me(this, arguments, (function(t) {
						var n = this.parentNode;
						x.inArray(this, e) < 0 && (x.cleanData(be(this)), n && n.replaceChild(t, this))
					}), e)
				}
			}), x.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			}, (function(e, t) {
				x.fn[e] = function(e) {
					for (var n, i = [], o = x(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), x(o[s])[t](n), c.apply(i, n.get());
					return this.pushStack(i)
				}
			}));
			var Fe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
				We = function(e) {
					var t = e.ownerDocument.defaultView;
					return t && t.opener || (t = n), t.getComputedStyle(e)
				},
				Be = function(e, t, n) {
					var i, o, r = {};
					for (o in t) r[o] = e.style[o], e.style[o] = t[o];
					for (o in i = n.call(e), t) e.style[o] = r[o];
					return i
				},
				ze = new RegExp(oe.join("|"), "i");

			function Ue(e, t, n) {
				var i, o, r, s, a = e.style;
				return (n = n || We(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = x.style(e, t)), !m.pixelBoxStyles() && Fe.test(s) && ze.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
			}

			function Xe(e, t) {
				return {
					get: function() {
						if (!e()) return (this.get = t).apply(this, arguments);
						delete this.get
					}
				}
			}! function() {
				function e() {
					if (d) {
						c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(c).appendChild(d);
						var e = n.getComputedStyle(d);
						i = "1%" !== e.top, l = 12 === t(e.marginLeft), d.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), d.style.position = "absolute", r = 12 === t(d.offsetWidth / 3), re.removeChild(c), d = null
					}
				}

				function t(e) {
					return Math.round(parseFloat(e))
				}
				var i, o, r, s, a, l, c = b.createElement("div"),
					d = b.createElement("div");
				d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === d.style.backgroundClip, x.extend(m, {
					boxSizingReliable: function() {
						return e(), o
					},
					pixelBoxStyles: function() {
						return e(), s
					},
					pixelPosition: function() {
						return e(), i
					},
					reliableMarginLeft: function() {
						return e(), l
					},
					scrollboxSize: function() {
						return e(), r
					},
					reliableTrDimensions: function() {
						var e, t, i, o;
						return null == a && (e = b.createElement("table"), t = b.createElement("tr"), i = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", i.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(i), o = n.getComputedStyle(t), a = parseInt(o.height) > 3, re.removeChild(e)), a
					}
				}))
			}();
			var Qe = ["Webkit", "Moz", "ms"],
				Ve = b.createElement("div").style,
				Ye = {};

			function Ke(e) {
				var t = x.cssProps[e] || Ye[e];
				return t || (e in Ve ? e : Ye[e] = function(e) {
					for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;)
						if ((e = Qe[n] + t) in Ve) return e
				}(e) || e)
			}
			var Ge = /^(none|table(?!-c[ea]).+)/,
				Je = /^--/,
				Ze = {
					position: "absolute",
					visibility: "hidden",
					display: "block"
				},
				et = {
					letterSpacing: "0",
					fontWeight: "400"
				};

			function tt(e, t, n) {
				var i = ie.exec(t);
				return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
			}

			function nt(e, t, n, i, o, r) {
				var s = "width" === t ? 1 : 0,
					a = 0,
					l = 0;
				if (n === (i ? "border" : "content")) return 0;
				for (; s < 4; s += 2) "margin" === n && (l += x.css(e, n + oe[s], !0, o)), i ? ("content" === n && (l -= x.css(e, "padding" + oe[s], !0, o)), "margin" !== n && (l -= x.css(e, "border" + oe[s] + "Width", !0, o))) : (l += x.css(e, "padding" + oe[s], !0, o), "padding" !== n ? l += x.css(e, "border" + oe[s] + "Width", !0, o) : a += x.css(e, "border" + oe[s] + "Width", !0, o));
				return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
			}

			function it(e, t, n) {
				var i = We(e),
					o = (!m.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, i),
					r = o,
					s = Ue(e, t, i),
					a = "offset" + t[0].toUpperCase() + t.slice(1);
				if (Fe.test(s)) {
					if (!n) return s;
					s = "auto"
				}
				return (!m.boxSizingReliable() && o || !m.reliableTrDimensions() && D(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === x.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === x.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + nt(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
			}

			function ot(e, t, n, i, o) {
				return new ot.prototype.init(e, t, n, i, o)
			}
			x.extend({
				cssHooks: {
					opacity: {
						get: function(e, t) {
							if (t) {
								var n = Ue(e, "opacity");
								return "" === n ? "1" : n
							}
						}
					}
				},
				cssNumber: {
					animationIterationCount: !0,
					columnCount: !0,
					fillOpacity: !0,
					flexGrow: !0,
					flexShrink: !0,
					fontWeight: !0,
					gridArea: !0,
					gridColumn: !0,
					gridColumnEnd: !0,
					gridColumnStart: !0,
					gridRow: !0,
					gridRowEnd: !0,
					gridRowStart: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0
				},
				cssProps: {},
				style: function(e, t, n, i) {
					if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
						var o, r, s, a = V(t),
							l = Je.test(t),
							c = e.style;
						if (l || (t = Ke(a)), s = x.cssHooks[t] || x.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
						"string" === (r = typeof n) && (o = ie.exec(n)) && o[1] && (n = ce(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (x.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
					}
				},
				css: function(e, t, n, i) {
					var o, r, s, a = V(t);
					return Je.test(t) || (t = Ke(a)), (s = x.cssHooks[t] || x.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Ue(e, t, i)), "normal" === o && t in et && (o = et[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
				}
			}), x.each(["height", "width"], (function(e, t) {
				x.cssHooks[t] = {
					get: function(e, n, i) {
						if (n) return !Ge.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, i) : Be(e, Ze, (function() {
							return it(e, t, i)
						}))
					},
					set: function(e, n, i) {
						var o, r = We(e),
							s = !m.scrollboxSize() && "absolute" === r.position,
							a = (s || i) && "border-box" === x.css(e, "boxSizing", !1, r),
							l = i ? nt(e, t, i, a, r) : 0;
						return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - nt(e, t, "border", !1, r) - .5)), l && (o = ie.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = x.css(e, t)), tt(0, n, l)
					}
				}
			})), x.cssHooks.marginLeft = Xe(m.reliableMarginLeft, (function(e, t) {
				if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
					marginLeft: 0
				}, (function() {
					return e.getBoundingClientRect().left
				}))) + "px"
			})), x.each({
				margin: "",
				padding: "",
				border: "Width"
			}, (function(e, t) {
				x.cssHooks[e + t] = {
					expand: function(n) {
						for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + oe[i] + t] = r[i] || r[i - 2] || r[0];
						return o
					}
				}, "margin" !== e && (x.cssHooks[e + t].set = tt)
			})), x.fn.extend({
				css: function(e, t) {
					return z(this, (function(e, t, n) {
						var i, o, r = {},
							s = 0;
						if (Array.isArray(t)) {
							for (i = We(e), o = t.length; s < o; s++) r[t[s]] = x.css(e, t[s], !1, i);
							return r
						}
						return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
					}), e, t, arguments.length > 1)
				}
			}), x.Tween = ot, ot.prototype = {
				constructor: ot,
				init: function(e, t, n, i, o, r) {
					this.elem = e, this.prop = n, this.easing = o || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (x.cssNumber[n] ? "" : "px")
				},
				cur: function() {
					var e = ot.propHooks[this.prop];
					return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
				},
				run: function(e) {
					var t, n = ot.propHooks[this.prop];
					return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this
				}
			}, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
				_default: {
					get: function(e) {
						var t;
						return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
					},
					set: function(e) {
						x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
					}
				}
			}, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
				set: function(e) {
					e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
				}
			}, x.easing = {
				linear: function(e) {
					return e
				},
				swing: function(e) {
					return .5 - Math.cos(e * Math.PI) / 2
				},
				_default: "swing"
			}, x.fx = ot.prototype.init, x.fx.step = {};
			var rt, st, at = /^(?:toggle|show|hide)$/,
				lt = /queueHooks$/;

			function ct() {
				st && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, x.fx.interval), x.fx.tick())
			}

			function dt() {
				return n.setTimeout((function() {
					rt = void 0
				})), rt = Date.now()
			}

			function ut(e, t) {
				var n, i = 0,
					o = {
						height: e
					};
				for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = oe[i])] = o["padding" + n] = e;
				return t && (o.opacity = o.width = e), o
			}

			function pt(e, t, n) {
				for (var i, o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), r = 0, s = o.length; r < s; r++)
					if (i = o[r].call(n, t, e)) return i
			}

			function ft(e, t, n) {
				var i, o, r = 0,
					s = ft.prefilters.length,
					a = x.Deferred().always((function() {
						delete l.elem
					})),
					l = function() {
						if (o) return !1;
						for (var t = rt || dt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
						return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
					},
					c = a.promise({
						elem: e,
						props: x.extend({}, t),
						opts: x.extend(!0, {
							specialEasing: {},
							easing: x.easing._default
						}, n),
						originalProperties: t,
						originalOptions: n,
						startTime: rt || dt(),
						duration: n.duration,
						tweens: [],
						createTween: function(t, n) {
							var i = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
							return c.tweens.push(i), i
						},
						stop: function(t) {
							var n = 0,
								i = t ? c.tweens.length : 0;
							if (o) return this;
							for (o = !0; n < i; n++) c.tweens[n].run(1);
							return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
						}
					}),
					d = c.props;
				for (! function(e, t) {
						var n, i, o, r, s;
						for (n in e)
							if (o = t[i = V(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = x.cssHooks[i]) && "expand" in s)
								for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
							else t[i] = o
					}(d, c.opts.specialEasing); r < s; r++)
					if (i = ft.prefilters[r].call(c, e, d, c.opts)) return v(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
				return x.map(d, pt, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, {
					elem: e,
					anim: c,
					queue: c.opts.queue
				})), c
			}
			x.Animation = x.extend(ft, {
					tweeners: {
						"*": [function(e, t) {
							var n = this.createTween(e, t);
							return ce(n.elem, e, ie.exec(t), n), n
						}]
					},
					tweener: function(e, t) {
						v(e) ? (t = e, e = ["*"]) : e = e.match(H);
						for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
					},
					prefilters: [function(e, t, n) {
						var i, o, r, s, a, l, c, d, u = "width" in t || "height" in t,
							p = this,
							f = {},
							h = e.style,
							g = e.nodeType && le(e),
							m = G.get(e, "fxshow");
						for (i in n.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
								s.unqueued || a()
							}), s.unqueued++, p.always((function() {
								p.always((function() {
									s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
								}))
							}))), t)
							if (o = t[i], at.test(o)) {
								if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
									if ("show" !== o || !m || void 0 === m[i]) continue;
									g = !0
								}
								f[i] = m && m[i] || x.style(e, i)
							} if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f))
							for (i in u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = G.get(e, "display")), "none" === (d = x.css(e, "display")) && (c ? d = c : (pe([e], !0), c = e.style.display || c, d = x.css(e, "display"), pe([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === x.css(e, "float") && (l || (p.done((function() {
									h.display = c
								})), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
									h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
								}))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = G.access(e, "fxshow", {
								display: c
							}), r && (m.hidden = !g), g && pe([e], !0), p.done((function() {
								for (i in g || pe([e]), G.remove(e, "fxshow"), f) x.style(e, i, f[i])
							}))), l = pt(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
					}],
					prefilter: function(e, t) {
						t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
					}
				}), x.speed = function(e, t, n) {
					var i = e && "object" == typeof e ? x.extend({}, e) : {
						complete: n || !n && t || v(e) && e,
						duration: e,
						easing: n && t || t && !v(t) && t
					};
					return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
						v(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
					}, i
				}, x.fn.extend({
					fadeTo: function(e, t, n, i) {
						return this.filter(le).css("opacity", 0).show().end().animate({
							opacity: t
						}, e, n, i)
					},
					animate: function(e, t, n, i) {
						var o = x.isEmptyObject(e),
							r = x.speed(t, n, i),
							s = function() {
								var t = ft(this, x.extend({}, e), r);
								(o || G.get(this, "finish")) && t.stop(!0)
							};
						return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
					},
					stop: function(e, t, n) {
						var i = function(e) {
							var t = e.stop;
							delete e.stop, t(n)
						};
						return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
							var t = !0,
								o = null != e && e + "queueHooks",
								r = x.timers,
								s = G.get(this);
							if (o) s[o] && s[o].stop && i(s[o]);
							else
								for (o in s) s[o] && s[o].stop && lt.test(o) && i(s[o]);
							for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
							!t && n || x.dequeue(this, e)
						}))
					},
					finish: function(e) {
						return !1 !== e && (e = e || "fx"), this.each((function() {
							var t, n = G.get(this),
								i = n[e + "queue"],
								o = n[e + "queueHooks"],
								r = x.timers,
								s = i ? i.length : 0;
							for (n.finish = !0, x.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
							for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
							delete n.finish
						}))
					}
				}), x.each(["toggle", "show", "hide"], (function(e, t) {
					var n = x.fn[t];
					x.fn[t] = function(e, i, o) {
						return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, i, o)
					}
				})), x.each({
					slideDown: ut("show"),
					slideUp: ut("hide"),
					slideToggle: ut("toggle"),
					fadeIn: {
						opacity: "show"
					},
					fadeOut: {
						opacity: "hide"
					},
					fadeToggle: {
						opacity: "toggle"
					}
				}, (function(e, t) {
					x.fn[e] = function(e, n, i) {
						return this.animate(t, e, n, i)
					}
				})), x.timers = [], x.fx.tick = function() {
					var e, t = 0,
						n = x.timers;
					for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
					n.length || x.fx.stop(), rt = void 0
				}, x.fx.timer = function(e) {
					x.timers.push(e), x.fx.start()
				}, x.fx.interval = 13, x.fx.start = function() {
					st || (st = !0, ct())
				}, x.fx.stop = function() {
					st = null
				}, x.fx.speeds = {
					slow: 600,
					fast: 200,
					_default: 400
				}, x.fn.delay = function(e, t) {
					return e = x.fx && x.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, i) {
						var o = n.setTimeout(t, e);
						i.stop = function() {
							n.clearTimeout(o)
						}
					}))
				},
				function() {
					var e = b.createElement("input"),
						t = b.createElement("select").appendChild(b.createElement("option"));
					e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value
				}();
			var ht, gt = x.expr.attrHandle;
			x.fn.extend({
				attr: function(e, t) {
					return z(this, x.attr, e, t, arguments.length > 1)
				},
				removeAttr: function(e) {
					return this.each((function() {
						x.removeAttr(this, e)
					}))
				}
			}), x.extend({
				attr: function(e, t, n) {
					var i, o, r = e.nodeType;
					if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === r && x.isXMLDoc(e) || (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i)
				},
				attrHooks: {
					type: {
						set: function(e, t) {
							if (!m.radioValue && "radio" === t && D(e, "input")) {
								var n = e.value;
								return e.setAttribute("type", t), n && (e.value = n), t
							}
						}
					}
				},
				removeAttr: function(e, t) {
					var n, i = 0,
						o = t && t.match(H);
					if (o && 1 === e.nodeType)
						for (; n = o[i++];) e.removeAttribute(n)
				}
			}), ht = {
				set: function(e, t, n) {
					return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
				}
			}, x.each(x.expr.match.bool.source.match(/\w+/g), (function(e, t) {
				var n = gt[t] || x.find.attr;
				gt[t] = function(e, t, i) {
					var o, r, s = t.toLowerCase();
					return i || (r = gt[s], gt[s] = o, o = null != n(e, t, i) ? s : null, gt[s] = r), o
				}
			}));
			var mt = /^(?:input|select|textarea|button)$/i,
				vt = /^(?:a|area)$/i;

			function yt(e) {
				return (e.match(H) || []).join(" ")
			}

			function bt(e) {
				return e.getAttribute && e.getAttribute("class") || ""
			}

			function wt(e) {
				return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
			}
			x.fn.extend({
				prop: function(e, t) {
					return z(this, x.prop, e, t, arguments.length > 1)
				},
				removeProp: function(e) {
					return this.each((function() {
						delete this[x.propFix[e] || e]
					}))
				}
			}), x.extend({
				prop: function(e, t, n) {
					var i, o, r = e.nodeType;
					if (3 !== r && 8 !== r && 2 !== r) return 1 === r && x.isXMLDoc(e) || (t = x.propFix[t] || t, o = x.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
				},
				propHooks: {
					tabIndex: {
						get: function(e) {
							var t = x.find.attr(e, "tabindex");
							return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
						}
					}
				},
				propFix: {
					for: "htmlFor",
					class: "className"
				}
			}), m.optSelected || (x.propHooks.selected = {
				get: function(e) {
					var t = e.parentNode;
					return t && t.parentNode && t.parentNode.selectedIndex, null
				},
				set: function(e) {
					var t = e.parentNode;
					t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
				}
			}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
				x.propFix[this.toLowerCase()] = this
			})), x.fn.extend({
				addClass: function(e) {
					var t, n, i, o, r, s, a, l = 0;
					if (v(e)) return this.each((function(t) {
						x(this).addClass(e.call(this, t, bt(this)))
					}));
					if ((t = wt(e)).length)
						for (; n = this[l++];)
							if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
								for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
								o !== (a = yt(i)) && n.setAttribute("class", a)
							} return this
				},
				removeClass: function(e) {
					var t, n, i, o, r, s, a, l = 0;
					if (v(e)) return this.each((function(t) {
						x(this).removeClass(e.call(this, t, bt(this)))
					}));
					if (!arguments.length) return this.attr("class", "");
					if ((t = wt(e)).length)
						for (; n = this[l++];)
							if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
								for (s = 0; r = t[s++];)
									for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
								o !== (a = yt(i)) && n.setAttribute("class", a)
							} return this
				},
				toggleClass: function(e, t) {
					var n = typeof e,
						i = "string" === n || Array.isArray(e);
					return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) {
						x(this).toggleClass(e.call(this, n, bt(this), t), t)
					})) : this.each((function() {
						var t, o, r, s;
						if (i)
							for (o = 0, r = x(this), s = wt(e); t = s[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
						else void 0 !== e && "boolean" !== n || ((t = bt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
					}))
				},
				hasClass: function(e) {
					var t, n, i = 0;
					for (t = " " + e + " "; n = this[i++];)
						if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1) return !0;
					return !1
				}
			});
			var Tt = /\r/g;
			x.fn.extend({
				val: function(e) {
					var t, n, i, o = this[0];
					return arguments.length ? (i = v(e), this.each((function(n) {
						var o;
						1 === this.nodeType && (null == (o = i ? e.call(this, n, x(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = x.map(o, (function(e) {
							return null == e ? "" : e + ""
						}))), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
					}))) : o ? (t = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(Tt, "") : null == n ? "" : n : void 0
				}
			}), x.extend({
				valHooks: {
					option: {
						get: function(e) {
							var t = x.find.attr(e, "value");
							return null != t ? t : yt(x.text(e))
						}
					},
					select: {
						get: function(e) {
							var t, n, i, o = e.options,
								r = e.selectedIndex,
								s = "select-one" === e.type,
								a = s ? null : [],
								l = s ? r + 1 : o.length;
							for (i = r < 0 ? l : s ? r : 0; i < l; i++)
								if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
									if (t = x(n).val(), s) return t;
									a.push(t)
								} return a
						},
						set: function(e, t) {
							for (var n, i, o = e.options, r = x.makeArray(t), s = o.length; s--;)((i = o[s]).selected = x.inArray(x.valHooks.option.get(i), r) > -1) && (n = !0);
							return n || (e.selectedIndex = -1), r
						}
					}
				}
			}), x.each(["radio", "checkbox"], (function() {
				x.valHooks[this] = {
					set: function(e, t) {
						if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1
					}
				}, m.checkOn || (x.valHooks[this].get = function(e) {
					return null === e.getAttribute("value") ? "on" : e.value
				})
			})), m.focusin = "onfocusin" in n;
			var _t = /^(?:focusinfocus|focusoutblur)$/,
				xt = function(e) {
					e.stopPropagation()
				};
			x.extend(x.event, {
				trigger: function(e, t, i, o) {
					var r, s, a, l, c, d, u, p, h = [i || b],
						g = f.call(e, "type") ? e.type : e,
						m = f.call(e, "namespace") ? e.namespace.split(".") : [];
					if (s = p = a = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !_t.test(g + x.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, (e = e[x.expando] ? e : new x.Event(g, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : x.makeArray(t, [e]), u = x.event.special[g] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, t))) {
						if (!o && !u.noBubble && !y(i)) {
							for (l = u.delegateType || g, _t.test(l + g) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
							a === (i.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || n)
						}
						for (r = 0;
							(s = h[r++]) && !e.isPropagationStopped();) p = s, e.type = r > 1 ? l : u.bindType || g, (d = (G.get(s, "events") || Object.create(null))[e.type] && G.get(s, "handle")) && d.apply(s, t), (d = c && s[c]) && d.apply && Y(s) && (e.result = d.apply(s, t), !1 === e.result && e.preventDefault());
						return e.type = g, o || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !Y(i) || c && v(i[g]) && !y(i) && ((a = i[c]) && (i[c] = null), x.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, xt), i[g](), e.isPropagationStopped() && p.removeEventListener(g, xt), x.event.triggered = void 0, a && (i[c] = a)), e.result
					}
				},
				simulate: function(e, t, n) {
					var i = x.extend(new x.Event, n, {
						type: e,
						isSimulated: !0
					});
					x.event.trigger(i, null, t)
				}
			}), x.fn.extend({
				trigger: function(e, t) {
					return this.each((function() {
						x.event.trigger(e, t, this)
					}))
				},
				triggerHandler: function(e, t) {
					var n = this[0];
					if (n) return x.event.trigger(e, t, n, !0)
				}
			}), m.focusin || x.each({
				focus: "focusin",
				blur: "focusout"
			}, (function(e, t) {
				var n = function(e) {
					x.event.simulate(t, e.target, x.event.fix(e))
				};
				x.event.special[t] = {
					setup: function() {
						var i = this.ownerDocument || this.document || this,
							o = G.access(i, t);
						o || i.addEventListener(e, n, !0), G.access(i, t, (o || 0) + 1)
					},
					teardown: function() {
						var i = this.ownerDocument || this.document || this,
							o = G.access(i, t) - 1;
						o ? G.access(i, t, o) : (i.removeEventListener(e, n, !0), G.remove(i, t))
					}
				}
			}));
			var kt = n.location,
				St = {
					guid: Date.now()
				},
				Ct = /\?/;
			x.parseXML = function(e) {
				var t;
				if (!e || "string" != typeof e) return null;
				try {
					t = (new n.DOMParser).parseFromString(e, "text/xml")
				} catch (e) {
					t = void 0
				}
				return t && !t.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e), t
			};
			var Et = /\[\]$/,
				At = /\r?\n/g,
				Dt = /^(?:submit|button|image|reset|file)$/i,
				Ot = /^(?:input|select|textarea|keygen)/i;

			function Nt(e, t, n, i) {
				var o;
				if (Array.isArray(t)) x.each(t, (function(t, o) {
					n || Et.test(e) ? i(e, o) : Nt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
				}));
				else if (n || "object" !== _(t)) i(e, t);
				else
					for (o in t) Nt(e + "[" + o + "]", t[o], n, i)
			}
			x.param = function(e, t) {
				var n, i = [],
					o = function(e, t) {
						var n = v(t) ? t() : t;
						i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
					};
				if (null == e) return "";
				if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, (function() {
					o(this.name, this.value)
				}));
				else
					for (n in e) Nt(n, e[n], t, o);
				return i.join("&")
			}, x.fn.extend({
				serialize: function() {
					return x.param(this.serializeArray())
				},
				serializeArray: function() {
					return this.map((function() {
						var e = x.prop(this, "elements");
						return e ? x.makeArray(e) : this
					})).filter((function() {
						var e = this.type;
						return this.name && !x(this).is(":disabled") && Ot.test(this.nodeName) && !Dt.test(e) && (this.checked || !ge.test(e))
					})).map((function(e, t) {
						var n = x(this).val();
						return null == n ? null : Array.isArray(n) ? x.map(n, (function(e) {
							return {
								name: t.name,
								value: e.replace(At, "\r\n")
							}
						})) : {
							name: t.name,
							value: n.replace(At, "\r\n")
						}
					})).get()
				}
			});
			var jt = /%20/g,
				$t = /#.*$/,
				Lt = /([?&])_=[^&]*/,
				It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
				Pt = /^(?:GET|HEAD)$/,
				Ht = /^\/\//,
				qt = {},
				Mt = {},
				Rt = "*/".concat("*"),
				Ft = b.createElement("a");

			function Wt(e) {
				return function(t, n) {
					"string" != typeof t && (n = t, t = "*");
					var i, o = 0,
						r = t.toLowerCase().match(H) || [];
					if (v(n))
						for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
				}
			}

			function Bt(e, t, n, i) {
				var o = {},
					r = e === Mt;

				function s(a) {
					var l;
					return o[a] = !0, x.each(e[a] || [], (function(e, a) {
						var c = a(t, n, i);
						return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
					})), l
				}
				return s(t.dataTypes[0]) || !o["*"] && s("*")
			}

			function zt(e, t) {
				var n, i, o = x.ajaxSettings.flatOptions || {};
				for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
				return i && x.extend(!0, e, i), e
			}
			Ft.href = kt.href, x.extend({
				active: 0,
				lastModified: {},
				etag: {},
				ajaxSettings: {
					url: kt.href,
					type: "GET",
					isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
					global: !0,
					processData: !0,
					async: !0,
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					accepts: {
						"*": Rt,
						text: "text/plain",
						html: "text/html",
						xml: "application/xml, text/xml",
						json: "application/json, text/javascript"
					},
					contents: {
						xml: /\bxml\b/,
						html: /\bhtml/,
						json: /\bjson\b/
					},
					responseFields: {
						xml: "responseXML",
						text: "responseText",
						json: "responseJSON"
					},
					converters: {
						"* text": String,
						"text html": !0,
						"text json": JSON.parse,
						"text xml": x.parseXML
					},
					flatOptions: {
						url: !0,
						context: !0
					}
				},
				ajaxSetup: function(e, t) {
					return t ? zt(zt(e, x.ajaxSettings), t) : zt(x.ajaxSettings, e)
				},
				ajaxPrefilter: Wt(qt),
				ajaxTransport: Wt(Mt),
				ajax: function(e, t) {
					"object" == typeof e && (t = e, e = void 0), t = t || {};
					var i, o, r, s, a, l, c, d, u, p, f = x.ajaxSetup({}, t),
						h = f.context || f,
						g = f.context && (h.nodeType || h.jquery) ? x(h) : x.event,
						m = x.Deferred(),
						v = x.Callbacks("once memory"),
						y = f.statusCode || {},
						w = {},
						T = {},
						_ = "canceled",
						k = {
							readyState: 0,
							getResponseHeader: function(e) {
								var t;
								if (c) {
									if (!s)
										for (s = {}; t = It.exec(r);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
									t = s[e.toLowerCase() + " "]
								}
								return null == t ? null : t.join(", ")
							},
							getAllResponseHeaders: function() {
								return c ? r : null
							},
							setRequestHeader: function(e, t) {
								return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, w[e] = t), this
							},
							overrideMimeType: function(e) {
								return null == c && (f.mimeType = e), this
							},
							statusCode: function(e) {
								var t;
								if (e)
									if (c) k.always(e[k.status]);
									else
										for (t in e) y[t] = [y[t], e[t]];
								return this
							},
							abort: function(e) {
								var t = e || _;
								return i && i.abort(t), S(0, t), this
							}
						};
					if (m.promise(k), f.url = ((e || f.url || kt.href) + "").replace(Ht, kt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [""], null == f.crossDomain) {
						l = b.createElement("a");
						try {
							l.href = f.url, l.href = l.href, f.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host
						} catch (e) {
							f.crossDomain = !0
						}
					}
					if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), Bt(qt, f, t, k), c) return k;
					for (u in (d = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Pt.test(f.type), o = f.url.replace($t, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(jt, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (Ct.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Lt, "$1"), p = (Ct.test(o) ? "&" : "?") + "_=" + St.guid++ + p), f.url = o + p), f.ifModified && (x.lastModified[o] && k.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && k.setRequestHeader("If-None-Match", x.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : f.accepts["*"]), f.headers) k.setRequestHeader(u, f.headers[u]);
					if (f.beforeSend && (!1 === f.beforeSend.call(h, k, f) || c)) return k.abort();
					if (_ = "abort", v.add(f.complete), k.done(f.success), k.fail(f.error), i = Bt(Mt, f, t, k)) {
						if (k.readyState = 1, d && g.trigger("ajaxSend", [k, f]), c) return k;
						f.async && f.timeout > 0 && (a = n.setTimeout((function() {
							k.abort("timeout")
						}), f.timeout));
						try {
							c = !1, i.send(w, S)
						} catch (e) {
							if (c) throw e;
							S(-1, e)
						}
					} else S(-1, "No Transport");

					function S(e, t, s, l) {
						var u, p, b, w, T, _ = t;
						c || (c = !0, a && n.clearTimeout(a), i = void 0, r = l || "", k.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, s && (w = function(e, t, n) {
							for (var i, o, r, s, a = e.contents, l = e.dataTypes;
								"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
							if (i)
								for (o in a)
									if (a[o] && a[o].test(i)) {
										l.unshift(o);
										break
									} if (l[0] in n) r = l[0];
							else {
								for (o in n) {
									if (!l[0] || e.converters[o + " " + l[0]]) {
										r = o;
										break
									}
									s || (s = o)
								}
								r = r || s
							}
							if (r) return r !== l[0] && l.unshift(r), n[r]
						}(f, k, s)), !u && x.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function() {}), w = function(e, t, n, i) {
							var o, r, s, a, l, c = {},
								d = e.dataTypes.slice();
							if (d[1])
								for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
							for (r = d.shift(); r;)
								if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
									if ("*" === r) r = l;
									else if ("*" !== l && l !== r) {
								if (!(s = c[l + " " + r] || c["* " + r]))
									for (o in c)
										if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
											!0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
											break
										} if (!0 !== s)
									if (s && e.throws) t = s(t);
									else try {
										t = s(t)
									} catch (e) {
										return {
											state: "parsererror",
											error: s ? e : "No conversion from " + l + " to " + r
										}
									}
							}
							return {
								state: "success",
								data: t
							}
						}(f, w, k, u), u ? (f.ifModified && ((T = k.getResponseHeader("Last-Modified")) && (x.lastModified[o] = T), (T = k.getResponseHeader("etag")) && (x.etag[o] = T)), 204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = w.state, p = w.data, u = !(b = w.error))) : (b = _, !e && _ || (_ = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || _) + "", u ? m.resolveWith(h, [p, _, k]) : m.rejectWith(h, [k, _, b]), k.statusCode(y), y = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [k, f, u ? p : b]), v.fireWith(h, [k, _]), d && (g.trigger("ajaxComplete", [k, f]), --x.active || x.event.trigger("ajaxStop")))
					}
					return k
				},
				getJSON: function(e, t, n) {
					return x.get(e, t, n, "json")
				},
				getScript: function(e, t) {
					return x.get(e, void 0, t, "script")
				}
			}), x.each(["get", "post"], (function(e, t) {
				x[t] = function(e, n, i, o) {
					return v(n) && (o = o || i, i = n, n = void 0), x.ajax(x.extend({
						url: e,
						type: t,
						dataType: o,
						data: n,
						success: i
					}, x.isPlainObject(e) && e))
				}
			})), x.ajaxPrefilter((function(e) {
				var t;
				for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
			})), x._evalUrl = function(e, t, n) {
				return x.ajax({
					url: e,
					type: "GET",
					dataType: "script",
					cache: !0,
					async: !1,
					global: !1,
					converters: {
						"text script": function() {}
					},
					dataFilter: function(e) {
						x.globalEval(e, t, n)
					}
				})
			}, x.fn.extend({
				wrapAll: function(e) {
					var t;
					return this[0] && (v(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
						for (var e = this; e.firstElementChild;) e = e.firstElementChild;
						return e
					})).append(this)), this
				},
				wrapInner: function(e) {
					return v(e) ? this.each((function(t) {
						x(this).wrapInner(e.call(this, t))
					})) : this.each((function() {
						var t = x(this),
							n = t.contents();
						n.length ? n.wrapAll(e) : t.append(e)
					}))
				},
				wrap: function(e) {
					var t = v(e);
					return this.each((function(n) {
						x(this).wrapAll(t ? e.call(this, n) : e)
					}))
				},
				unwrap: function(e) {
					return this.parent(e).not("body").each((function() {
						x(this).replaceWith(this.childNodes)
					})), this
				}
			}), x.expr.pseudos.hidden = function(e) {
				return !x.expr.pseudos.visible(e)
			}, x.expr.pseudos.visible = function(e) {
				return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
			}, x.ajaxSettings.xhr = function() {
				try {
					return new n.XMLHttpRequest
				} catch (e) {}
			};
			var Ut = {
					0: 200,
					1223: 204
				},
				Xt = x.ajaxSettings.xhr();
			m.cors = !!Xt && "withCredentials" in Xt, m.ajax = Xt = !!Xt, x.ajaxTransport((function(e) {
				var t, i;
				if (m.cors || Xt && !e.crossDomain) return {
					send: function(o, r) {
						var s, a = e.xhr();
						if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
							for (s in e.xhrFields) a[s] = e.xhrFields[s];
						for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
						t = function(e) {
							return function() {
								t && (t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ut[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
									binary: a.response
								} : {
									text: a.responseText
								}, a.getAllResponseHeaders()))
							}
						}, a.onload = t(), i = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
							4 === a.readyState && n.setTimeout((function() {
								t && i()
							}))
						}, t = t("abort");
						try {
							a.send(e.hasContent && e.data || null)
						} catch (e) {
							if (t) throw e
						}
					},
					abort: function() {
						t && t()
					}
				}
			})), x.ajaxPrefilter((function(e) {
				e.crossDomain && (e.contents.script = !1)
			})), x.ajaxSetup({
				accepts: {
					script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
				},
				contents: {
					script: /\b(?:java|ecma)script\b/
				},
				converters: {
					"text script": function(e) {
						return x.globalEval(e), e
					}
				}
			}), x.ajaxPrefilter("script", (function(e) {
				void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
			})), x.ajaxTransport("script", (function(e) {
				var t, n;
				if (e.crossDomain || e.scriptAttrs) return {
					send: function(i, o) {
						t = x("<script>").attr(e.scriptAttrs || {}).prop({
							charset: e.scriptCharset,
							src: e.url
						}).on("load error", n = function(e) {
							t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
						}), b.head.appendChild(t[0])
					},
					abort: function() {
						n && n()
					}
				}
			}));
			var Qt, Vt = [],
				Yt = /(=)\?(?=&|$)|\?\?/;
			x.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function() {
					var e = Vt.pop() || x.expando + "_" + St.guid++;
					return this[e] = !0, e
				}
			}), x.ajaxPrefilter("json jsonp", (function(e, t, i) {
				var o, r, s, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
				if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + o) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
					return s || x.error(o + " was not called"), s[0]
				}, e.dataTypes[0] = "json", r = n[o], n[o] = function() {
					s = arguments
				}, i.always((function() {
					void 0 === r ? x(n).removeProp(o) : n[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, Vt.push(o)), s && v(r) && r(s[0]), s = r = void 0
				})), "script"
			})), m.createHTMLDocument = ((Qt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Qt.childNodes.length), x.parseHTML = function(e, t, n) {
				return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(i)) : t = b), r = !n && [], (o = O.exec(e)) ? [t.createElement(o[1])] : (o = _e([e], t, r), r && r.length && x(r).remove(), x.merge([], o.childNodes)));
				var i, o, r
			}, x.fn.load = function(e, t, n) {
				var i, o, r, s = this,
					a = e.indexOf(" ");
				return a > -1 && (i = yt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && x.ajax({
					url: e,
					type: o || "GET",
					dataType: "html",
					data: t
				}).done((function(e) {
					r = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
				})).always(n && function(e, t) {
					s.each((function() {
						n.apply(this, r || [e.responseText, t, e])
					}))
				}), this
			}, x.expr.pseudos.animated = function(e) {
				return x.grep(x.timers, (function(t) {
					return e === t.elem
				})).length
			}, x.offset = {
				setOffset: function(e, t, n) {
					var i, o, r, s, a, l, c = x.css(e, "position"),
						d = x(e),
						u = {};
					"static" === c && (e.style.position = "relative"), a = d.offset(), r = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = d.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), v(t) && (t = t.call(e, n, x.extend({}, a))), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : ("number" == typeof u.top && (u.top += "px"), "number" == typeof u.left && (u.left += "px"), d.css(u))
				}
			}, x.fn.extend({
				offset: function(e) {
					if (arguments.length) return void 0 === e ? this : this.each((function(t) {
						x.offset.setOffset(this, e, t)
					}));
					var t, n, i = this[0];
					return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
						top: t.top + n.pageYOffset,
						left: t.left + n.pageXOffset
					}) : {
						top: 0,
						left: 0
					} : void 0
				},
				position: function() {
					if (this[0]) {
						var e, t, n, i = this[0],
							o = {
								top: 0,
								left: 0
							};
						if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect();
						else {
							for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
							e && e !== i && 1 === e.nodeType && ((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0), o.left += x.css(e, "borderLeftWidth", !0))
						}
						return {
							top: t.top - o.top - x.css(i, "marginTop", !0),
							left: t.left - o.left - x.css(i, "marginLeft", !0)
						}
					}
				},
				offsetParent: function() {
					return this.map((function() {
						for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
						return e || re
					}))
				}
			}), x.each({
				scrollLeft: "pageXOffset",
				scrollTop: "pageYOffset"
			}, (function(e, t) {
				var n = "pageYOffset" === t;
				x.fn[e] = function(i) {
					return z(this, (function(e, i, o) {
						var r;
						if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
						r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
					}), e, i, arguments.length)
				}
			})), x.each(["top", "left"], (function(e, t) {
				x.cssHooks[t] = Xe(m.pixelPosition, (function(e, n) {
					if (n) return n = Ue(e, t), Fe.test(n) ? x(e).position()[t] + "px" : n
				}))
			})), x.each({
				Height: "height",
				Width: "width"
			}, (function(e, t) {
				x.each({
					padding: "inner" + e,
					content: t,
					"": "outer" + e
				}, (function(n, i) {
					x.fn[i] = function(o, r) {
						var s = arguments.length && (n || "boolean" != typeof o),
							a = n || (!0 === o || !0 === r ? "margin" : "border");
						return z(this, (function(t, n, o) {
							var r;
							return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? x.css(t, n, a) : x.style(t, n, o, a)
						}), t, s ? o : void 0, s)
					}
				}))
			})), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
				x.fn[t] = function(e) {
					return this.on(t, e)
				}
			})), x.fn.extend({
				bind: function(e, t, n) {
					return this.on(e, null, t, n)
				},
				unbind: function(e, t) {
					return this.off(e, null, t)
				},
				delegate: function(e, t, n, i) {
					return this.on(t, e, n, i)
				},
				undelegate: function(e, t, n) {
					return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
				},
				hover: function(e, t) {
					return this.mouseenter(e).mouseleave(t || e)
				}
			}), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
				x.fn[t] = function(e, n) {
					return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
				}
			}));
			var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			x.proxy = function(e, t) {
				var n, i, o;
				if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return i = a.call(arguments, 2), (o = function() {
					return e.apply(t || this, i.concat(a.call(arguments)))
				}).guid = e.guid = e.guid || x.guid++, o
			}, x.holdReady = function(e) {
				e ? x.readyWait++ : x.ready(!0)
			}, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = D, x.isFunction = v, x.isWindow = y, x.camelCase = V, x.type = _, x.now = Date.now, x.isNumeric = function(e) {
				var t = x.type(e);
				return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
			}, x.trim = function(e) {
				return null == e ? "" : (e + "").replace(Kt, "")
			}, void 0 === (i = function() {
				return x
			}.apply(t, [])) || (e.exports = i);
			var Gt = n.jQuery,
				Jt = n.$;
			return x.noConflict = function(e) {
				return n.$ === x && (n.$ = Jt), e && n.jQuery === x && (n.jQuery = Gt), x
			}, void 0 === o && (n.jQuery = n.$ = x), x
		}))
	},
	SYky: function(e, t, n) {
		! function(e, t, n) {
			"use strict";

			function i(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}

			function o(e, t, n) {
				return t && i(e.prototype, t), n && i(e, n), e
			}

			function r(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function s(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, i)
				}
				return n
			}

			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? s(Object(n), !0).forEach((function(t) {
						r(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function l(e) {
				var n = this,
					i = !1;
				return t(this).one(c.TRANSITION_END, (function() {
					i = !0
				})), setTimeout((function() {
					i || c.triggerTransitionEnd(n)
				}), e), this
			}
			t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
			var c = {
				TRANSITION_END: "bsTransitionEnd",
				getUID: function(e) {
					do {
						e += ~~(1e6 * Math.random())
					} while (document.getElementById(e));
					return e
				},
				getSelectorFromElement: function(e) {
					var t = e.getAttribute("data-target");
					if (!t || "#" === t) {
						var n = e.getAttribute("href");
						t = n && "#" !== n ? n.trim() : ""
					}
					try {
						return document.querySelector(t) ? t : null
					} catch (e) {
						return null
					}
				},
				getTransitionDurationFromElement: function(e) {
					if (!e) return 0;
					var n = t(e).css("transition-duration"),
						i = t(e).css("transition-delay"),
						o = parseFloat(n),
						r = parseFloat(i);
					return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
				},
				reflow: function(e) {
					return e.offsetHeight
				},
				triggerTransitionEnd: function(e) {
					t(e).trigger("transitionend")
				},
				supportsTransitionEnd: function() {
					return Boolean("transitionend")
				},
				isElement: function(e) {
					return (e[0] || e).nodeType
				},
				typeCheckConfig: function(e, t, n) {
					for (var i in n)
						if (Object.prototype.hasOwnProperty.call(n, i)) {
							var o = n[i],
								r = t[i],
								s = r && c.isElement(r) ? "element" : null == (a = r) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
							if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
						} var a
				},
				findShadowRoot: function(e) {
					if (!document.documentElement.attachShadow) return null;
					if ("function" == typeof e.getRootNode) {
						var t = e.getRootNode();
						return t instanceof ShadowRoot ? t : null
					}
					return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null
				},
				jQueryDetection: function() {
					if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
					var e = t.fn.jquery.split(" ")[0].split(".");
					if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
				}
			};
			c.jQueryDetection(), t.fn.emulateTransitionEnd = l, t.event.special[c.TRANSITION_END] = {
				bindType: "transitionend",
				delegateType: "transitionend",
				handle: function(e) {
					if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
				}
			};
			var d = "alert",
				u = t.fn[d],
				p = function() {
					function e(e) {
						this._element = e
					}
					var n = e.prototype;
					return n.close = function(e) {
						var t = this._element;
						e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
					}, n.dispose = function() {
						t.removeData(this._element, "bs.alert"), this._element = null
					}, n._getRootElement = function(e) {
						var n = c.getSelectorFromElement(e),
							i = !1;
						return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i
					}, n._triggerCloseEvent = function(e) {
						var n = t.Event("close.bs.alert");
						return t(e).trigger(n), n
					}, n._removeElement = function(e) {
						var n = this;
						if (t(e).removeClass("show"), t(e).hasClass("fade")) {
							var i = c.getTransitionDurationFromElement(e);
							t(e).one(c.TRANSITION_END, (function(t) {
								return n._destroyElement(e, t)
							})).emulateTransitionEnd(i)
						} else this._destroyElement(e)
					}, n._destroyElement = function(e) {
						t(e).detach().trigger("closed.bs.alert").remove()
					}, e._jQueryInterface = function(n) {
						return this.each((function() {
							var i = t(this),
								o = i.data("bs.alert");
							o || (o = new e(this), i.data("bs.alert", o)), "close" === n && o[n](this)
						}))
					}, e._handleDismiss = function(e) {
						return function(t) {
							t && t.preventDefault(), e.close(this)
						}
					}, o(e, null, [{
						key: "VERSION",
						get: function() {
							return "4.5.0"
						}
					}]), e
				}();
			t(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', p._handleDismiss(new p)), t.fn[d] = p._jQueryInterface, t.fn[d].Constructor = p, t.fn[d].noConflict = function() {
				return t.fn[d] = u, p._jQueryInterface
			};
			var f = t.fn.button,
				h = function() {
					function e(e) {
						this._element = e
					}
					var n = e.prototype;
					return n.toggle = function() {
						var e = !0,
							n = !0,
							i = t(this._element).closest('[data-toggle="buttons"]')[0];
						if (i) {
							var o = this._element.querySelector('input:not([type="hidden"])');
							if (o) {
								if ("radio" === o.type)
									if (o.checked && this._element.classList.contains("active")) e = !1;
									else {
										var r = i.querySelector(".active");
										r && t(r).removeClass("active")
									} e && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains("active")), t(o).trigger("change")), o.focus(), n = !1
							}
						}
						this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && t(this._element).toggleClass("active"))
					}, n.dispose = function() {
						t.removeData(this._element, "bs.button"), this._element = null
					}, e._jQueryInterface = function(n) {
						return this.each((function() {
							var i = t(this).data("bs.button");
							i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
						}))
					}, o(e, null, [{
						key: "VERSION",
						get: function() {
							return "4.5.0"
						}
					}]), e
				}();
			t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
				var n = e.target,
					i = n;
				if (t(n).hasClass("btn") || (n = t(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) e.preventDefault();
				else {
					var o = n.querySelector('input:not([type="hidden"])');
					if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void e.preventDefault();
					"LABEL" === i.tagName && o && "checkbox" === o.type && e.preventDefault(), h._jQueryInterface.call(t(n), "toggle")
				}
			})).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
				var n = t(e.target).closest(".btn")[0];
				t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
			})), t(window).on("load.bs.button.data-api", (function() {
				for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
					var i = e[t],
						o = i.querySelector('input:not([type="hidden"])');
					o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
				}
				for (var r = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
					var a = e[r];
					"true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
				}
			})), t.fn.button = h._jQueryInterface, t.fn.button.Constructor = h, t.fn.button.noConflict = function() {
				return t.fn.button = f, h._jQueryInterface
			};
			var g = "carousel",
				m = ".bs.carousel",
				v = t.fn[g],
				y = {
					interval: 5e3,
					keyboard: !0,
					slide: !1,
					pause: "hover",
					wrap: !0,
					touch: !0
				},
				b = {
					interval: "(number|boolean)",
					keyboard: "boolean",
					slide: "(boolean|string)",
					pause: "(string|boolean)",
					wrap: "boolean",
					touch: "boolean"
				},
				w = {
					TOUCH: "touch",
					PEN: "pen"
				},
				T = function() {
					function e(e, t) {
						this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
					}
					var n = e.prototype;
					return n.next = function() {
						this._isSliding || this._slide("next")
					}, n.nextWhenVisible = function() {
						!document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
					}, n.prev = function() {
						this._isSliding || this._slide("prev")
					}, n.pause = function(e) {
						e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
					}, n.cycle = function(e) {
						e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
					}, n.to = function(e) {
						var n = this;
						this._activeElement = this._element.querySelector(".active.carousel-item");
						var i = this._getItemIndex(this._activeElement);
						if (!(e > this._items.length - 1 || e < 0))
							if (this._isSliding) t(this._element).one("slid.bs.carousel", (function() {
								return n.to(e)
							}));
							else {
								if (i === e) return this.pause(), void this.cycle();
								var o = e > i ? "next" : "prev";
								this._slide(o, this._items[e])
							}
					}, n.dispose = function() {
						t(this._element).off(m), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
					}, n._getConfig = function(e) {
						return e = a(a({}, y), e), c.typeCheckConfig(g, e, b), e
					}, n._handleSwipe = function() {
						var e = Math.abs(this.touchDeltaX);
						if (!(e <= 40)) {
							var t = e / this.touchDeltaX;
							this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
						}
					}, n._addEventListeners = function() {
						var e = this;
						this._config.keyboard && t(this._element).on("keydown.bs.carousel", (function(t) {
							return e._keydown(t)
						})), "hover" === this._config.pause && t(this._element).on("mouseenter.bs.carousel", (function(t) {
							return e.pause(t)
						})).on("mouseleave.bs.carousel", (function(t) {
							return e.cycle(t)
						})), this._config.touch && this._addTouchEventListeners()
					}, n._addTouchEventListeners = function() {
						var e = this;
						if (this._touchSupported) {
							var n = function(t) {
									e._pointerEvent && w[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
								},
								i = function(t) {
									e._pointerEvent && w[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function(t) {
										return e.cycle(t)
									}), 500 + e._config.interval))
								};
							t(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(e) {
								return e.preventDefault()
							})), this._pointerEvent ? (t(this._element).on("pointerdown.bs.carousel", (function(e) {
								return n(e)
							})), t(this._element).on("pointerup.bs.carousel", (function(e) {
								return i(e)
							})), this._element.classList.add("pointer-event")) : (t(this._element).on("touchstart.bs.carousel", (function(e) {
								return n(e)
							})), t(this._element).on("touchmove.bs.carousel", (function(t) {
								return function(t) {
									t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
								}(t)
							})), t(this._element).on("touchend.bs.carousel", (function(e) {
								return i(e)
							})))
						}
					}, n._keydown = function(e) {
						if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
							case 37:
								e.preventDefault(), this.prev();
								break;
							case 39:
								e.preventDefault(), this.next()
						}
					}, n._getItemIndex = function(e) {
						return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
					}, n._getItemByDirection = function(e, t) {
						var n = "next" === e,
							i = "prev" === e,
							o = this._getItemIndex(t),
							r = this._items.length - 1;
						if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
						var s = (o + ("prev" === e ? -1 : 1)) % this._items.length;
						return -1 === s ? this._items[this._items.length - 1] : this._items[s]
					}, n._triggerSlideEvent = function(e, n) {
						var i = this._getItemIndex(e),
							o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
							r = t.Event("slide.bs.carousel", {
								relatedTarget: e,
								direction: n,
								from: o,
								to: i
							});
						return t(this._element).trigger(r), r
					}, n._setActiveIndicatorElement = function(e) {
						if (this._indicatorsElement) {
							var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
							t(n).removeClass("active");
							var i = this._indicatorsElement.children[this._getItemIndex(e)];
							i && t(i).addClass("active")
						}
					}, n._slide = function(e, n) {
						var i, o, r, s = this,
							a = this._element.querySelector(".active.carousel-item"),
							l = this._getItemIndex(a),
							d = n || a && this._getItemByDirection(e, a),
							u = this._getItemIndex(d),
							p = Boolean(this._interval);
						if ("next" === e ? (i = "carousel-item-left", o = "carousel-item-next", r = "left") : (i = "carousel-item-right", o = "carousel-item-prev", r = "right"), d && t(d).hasClass("active")) this._isSliding = !1;
						else if (!this._triggerSlideEvent(d, r).isDefaultPrevented() && a && d) {
							this._isSliding = !0, p && this.pause(), this._setActiveIndicatorElement(d);
							var f = t.Event("slid.bs.carousel", {
								relatedTarget: d,
								direction: r,
								from: l,
								to: u
							});
							if (t(this._element).hasClass("slide")) {
								t(d).addClass(o), c.reflow(d), t(a).addClass(i), t(d).addClass(i);
								var h = parseInt(d.getAttribute("data-interval"), 10);
								h ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = h) : this._config.interval = this._config.defaultInterval || this._config.interval;
								var g = c.getTransitionDurationFromElement(a);
								t(a).one(c.TRANSITION_END, (function() {
									t(d).removeClass(i + " " + o).addClass("active"), t(a).removeClass("active " + o + " " + i), s._isSliding = !1, setTimeout((function() {
										return t(s._element).trigger(f)
									}), 0)
								})).emulateTransitionEnd(g)
							} else t(a).removeClass("active"), t(d).addClass("active"), this._isSliding = !1, t(this._element).trigger(f);
							p && this.cycle()
						}
					}, e._jQueryInterface = function(n) {
						return this.each((function() {
							var i = t(this).data("bs.carousel"),
								o = a(a({}, y), t(this).data());
							"object" == typeof n && (o = a(a({}, o), n));
							var r = "string" == typeof n ? n : o.slide;
							if (i || (i = new e(this, o), t(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
							else if ("string" == typeof r) {
								if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
								i[r]()
							} else o.interval && o.ride && (i.pause(), i.cycle())
						}))
					}, e._dataApiClickHandler = function(n) {
						var i = c.getSelectorFromElement(this);
						if (i) {
							var o = t(i)[0];
							if (o && t(o).hasClass("carousel")) {
								var r = a(a({}, t(o).data()), t(this).data()),
									s = this.getAttribute("data-slide-to");
								s && (r.interval = !1), e._jQueryInterface.call(t(o), r), s && t(o).data("bs.carousel").to(s), n.preventDefault()
							}
						}
					}, o(e, null, [{
						key: "VERSION",
						get: function() {
							return "4.5.0"
						}
					}, {
						key: "Default",
						get: function() {
							return y
						}
					}]), e
				}();
			t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", T._dataApiClickHandler), t(window).on("load.bs.carousel.data-api", (function() {
				for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
					var o = t(e[n]);
					T._jQueryInterface.call(o, o.data())
				}
			})), t.fn[g] = T._jQueryInterface, t.fn[g].Constructor = T, t.fn[g].noConflict = function() {
				return t.fn[g] = v, T._jQueryInterface
			};
			var _ = "collapse",
				x = t.fn[_],
				k = {
					toggle: !0,
					parent: ""
				},
				S = {
					toggle: "boolean",
					parent: "(string|element)"
				},
				C = function() {
					function e(e, t) {
						this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
						for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
							var r = n[i],
								s = c.getSelectorFromElement(r),
								a = [].slice.call(document.querySelectorAll(s)).filter((function(t) {
									return t === e
								}));
							null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(r))
						}
						this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
					}
					var n = e.prototype;
					return n.toggle = function() {
						t(this._element).hasClass("show") ? this.hide() : this.show()
					}, n.show = function() {
						var n, i, o = this;
						if (!(this._isTransitioning || t(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e) {
								return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains("collapse")
							}))).length && (n = null), n && (i = t(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
							var r = t.Event("show.bs.collapse");
							if (t(this._element).trigger(r), !r.isDefaultPrevented()) {
								n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data("bs.collapse", null));
								var s = this._getDimension();
								t(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
								var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
									l = c.getTransitionDurationFromElement(this._element);
								t(this._element).one(c.TRANSITION_END, (function() {
									t(o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[s] = "", o.setTransitioning(!1), t(o._element).trigger("shown.bs.collapse")
								})).emulateTransitionEnd(l), this._element.style[s] = this._element[a] + "px"
							}
						}
					}, n.hide = function() {
						var e = this;
						if (!this._isTransitioning && t(this._element).hasClass("show")) {
							var n = t.Event("hide.bs.collapse");
							if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
								var i = this._getDimension();
								this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", c.reflow(this._element), t(this._element).addClass("collapsing").removeClass("collapse show");
								var o = this._triggerArray.length;
								if (o > 0)
									for (var r = 0; r < o; r++) {
										var s = this._triggerArray[r],
											a = c.getSelectorFromElement(s);
										null !== a && (t([].slice.call(document.querySelectorAll(a))).hasClass("show") || t(s).addClass("collapsed").attr("aria-expanded", !1))
									}
								this.setTransitioning(!0), this._element.style[i] = "";
								var l = c.getTransitionDurationFromElement(this._element);
								t(this._element).one(c.TRANSITION_END, (function() {
									e.setTransitioning(!1), t(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
								})).emulateTransitionEnd(l)
							}
						}
					}, n.setTransitioning = function(e) {
						this._isTransitioning = e
					}, n.dispose = function() {
						t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
					}, n._getConfig = function(e) {
						return (e = a(a({}, k), e)).toggle = Boolean(e.toggle), c.typeCheckConfig(_, e, S), e
					}, n._getDimension = function() {
						return t(this._element).hasClass("width") ? "width" : "height"
					}, n._getParent = function() {
						var n, i = this;
						c.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
						var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
							r = [].slice.call(n.querySelectorAll(o));
						return t(r).each((function(t, n) {
							i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
						})), n
					}, n._addAriaAndCollapsedClass = function(e, n) {
						var i = t(e).hasClass("show");
						n.length && t(n).toggleClass("collapsed", !i).attr("aria-expanded", i)
					}, e._getTargetFromElement = function(e) {
						var t = c.getSelectorFromElement(e);
						return t ? document.querySelector(t) : null
					}, e._jQueryInterface = function(n) {
						return this.each((function() {
							var i = t(this),
								o = i.data("bs.collapse"),
								r = a(a(a({}, k), i.data()), "object" == typeof n && n ? n : {});
							if (!o && r.toggle && "string" == typeof n && /show|hide/.test(n) && (r.toggle = !1), o || (o = new e(this, r), i.data("bs.collapse", o)), "string" == typeof n) {
								if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
								o[n]()
							}
						}))
					}, o(e, null, [{
						key: "VERSION",
						get: function() {
							return "4.5.0"
						}
					}, {
						key: "Default",
						get: function() {
							return k
						}
					}]), e
				}();
			t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {
				"A" === e.currentTarget.tagName && e.preventDefault();
				var n = t(this),
					i = c.getSelectorFromElement(this),
					o = [].slice.call(document.querySelectorAll(i));
				t(o).each((function() {
					var e = t(this),
						i = e.data("bs.collapse") ? "toggle" : n.data();
					C._jQueryInterface.call(e, i)
				}))
			})), t.fn[_] = C._jQueryInterface, t.fn[_].Constructor = C, t.fn[_].noConflict = function() {
				return t.fn[_] = x, C._jQueryInterface
			};
			var E = "dropdown",
				A = t.fn[E],
				D = new RegExp("38|40|27"),
				O = {
					offset: 0,
					flip: !0,
					boundary: "scrollParent",
					reference: "toggle",
					display: "dynamic",
					popperConfig: null
				},
				N = {
					offset: "(number|string|function)",
					flip: "boolean",
					boundary: "(string|element)",
					reference: "(string|element)",
					display: "string",
					popperConfig: "(null|object)"
				},
				j = function() {
					function e(e, t) {
						this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
					}
					var i = e.prototype;
					return i.toggle = function() {
						if (!this._element.disabled && !t(this._element).hasClass("disabled")) {
							var n = t(this._menu).hasClass("show");
							e._clearMenus(), n || this.show(!0)
						}
					}, i.show = function(i) {
						if (void 0 === i && (i = !1), !(this._element.disabled || t(this._element).hasClass("disabled") || t(this._menu).hasClass("show"))) {
							var o = {
									relatedTarget: this._element
								},
								r = t.Event("show.bs.dropdown", o),
								s = e._getParentFromElement(this._element);
							if (t(s).trigger(r), !r.isDefaultPrevented()) {
								if (!this._inNavbar && i) {
									if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
									var a = this._element;
									"parent" === this._config.reference ? a = s : c.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(s).addClass("position-static"), this._popper = new n(a, this._menu, this._getPopperConfig())
								}
								"ontouchstart" in document.documentElement && 0 === t(s).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass("show"), t(s).toggleClass("show").trigger(t.Event("shown.bs.dropdown", o))
							}
						}
					}, i.hide = function() {
						if (!this._element.disabled && !t(this._element).hasClass("disabled") && t(this._menu).hasClass("show")) {
							var n = {
									relatedTarget: this._element
								},
								i = t.Event("hide.bs.dropdown", n),
								o = e._getParentFromElement(this._element);
							t(o).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass("show"), t(o).toggleClass("show").trigger(t.Event("hidden.bs.dropdown", n)))
						}
					}, i.dispose = function() {
						t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
					}, i.update = function() {
						this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
					}, i._addEventListeners = function() {
						var e = this;
						t(this._element).on("click.bs.dropdown", (function(t) {
							t.preventDefault(), t.stopPropagation(), e.toggle()
						}))
					}, i._getConfig = function(e) {
						return e = a(a(a({}, this.constructor.Default), t(this._element).data()), e), c.typeCheckConfig(E, e, this.constructor.DefaultType), e
					}, i._getMenuElement = function() {
						if (!this._menu) {
							var t = e._getParentFromElement(this._element);
							t && (this._menu = t.querySelector(".dropdown-menu"))
						}
						return this._menu
					}, i._getPlacement = function() {
						var e = t(this._element.parentNode),
							n = "bottom-start";
						return e.hasClass("dropup") ? n = t(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
					}, i._detectNavbar = function() {
						return t(this._element).closest(".navbar").length > 0
					}, i._getOffset = function() {
						var e = this,
							t = {};
						return "function" == typeof this._config.offset ? t.fn = function(t) {
							return t.offsets = a(a({}, t.offsets), e._config.offset(t.offsets, e._element) || {}), t
						} : t.offset = this._config.offset, t
					}, i._getPopperConfig = function() {
						var e = {
							placement: this._getPlacement(),
							modifiers: {
								offset: this._getOffset(),
								flip: {
									enabled: this._config.flip
								},
								preventOverflow: {
									boundariesElement: this._config.boundary
								}
							}
						};
						return "static" === this._config.display && (e.modifiers.applyStyle = {
							enabled: !1
						}), a(a({}, e), this._config.popperConfig)
					}, e._jQueryInterface = function(n) {
						return this.each((function() {
							var i = t(this).data("bs.dropdown");
							if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data("bs.dropdown", i)), "string" == typeof n) {
								if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
								i[n]()
							}
						}))
					}, e._clearMenus = function(n) {
						if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
							for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, r = i.length; o < r; o++) {
								var s = e._getParentFromElement(i[o]),
									a = t(i[o]).data("bs.dropdown"),
									l = {
										relatedTarget: i[o]
									};
								if (n && "click" === n.type && (l.clickEvent = n), a) {
									var c = a._menu;
									if (t(s).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
										var d = t.Event("hide.bs.dropdown", l);
										t(s).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[o].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), t(c).removeClass("show"), t(s).removeClass("show").trigger(t.Event("hidden.bs.dropdown", l)))
									}
								}
							}
					}, e._getParentFromElement = function(e) {
						var t, n = c.getSelectorFromElement(e);
						return n && (t = document.querySelector(n)), t || e.parentNode
					}, e._dataApiKeydownHandler = function(n) {
						if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(".dropdown-menu").length) : !D.test(n.which)) && !this.disabled && !t(this).hasClass("disabled")) {
							var i = e._getParentFromElement(this),
								o = t(i).hasClass("show");
							if (o || 27 !== n.which) {
								if (n.preventDefault(), n.stopPropagation(), !o || o && (27 === n.which || 32 === n.which)) return 27 === n.which && t(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void t(this).trigger("click");
								var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(e) {
									return t(e).is(":visible")
								}));
								if (0 !== r.length) {
									var s = r.indexOf(n.target);
									38 === n.which && s > 0 && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
								}
							}
						}
					}, o(e, null, [{
						key: "VERSION",
						get: function() {
							return "4.5.0"
						}
					}, {
						key: "Default",
						get: function() {
							return O
						}
					}, {
						key: "DefaultType",
						get: function() {
							return N
						}
					}]), e
				}();
			t(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', j._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", j._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", j._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function(e) {
				e.preventDefault(), e.stopPropagation(), j._jQueryInterface.call(t(this), "toggle")
			})).on("click.bs.dropdown.data-api", ".dropdown form", (function(e) {
				e.stopPropagation()
			})), t.fn[E] = j._jQueryInterface, t.fn[E].Constructor = j, t.fn[E].noConflict = function() {
				return t.fn[E] = A, j._jQueryInterface
			};
			var $ = t.fn.modal,
				L = {
					backdrop: !0,
					keyboard: !0,
					focus: !0,
					show: !0
				},
				I = {
					backdrop: "(boolean|string)",
					keyboard: "boolean",
					focus: "boolean",
					show: "boolean"
				},
				P = function() {
					function e(e, t) {
						this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
					}
					var n = e.prototype;
					return n.toggle = function(e) {
						return this._isShown ? this.hide() : this.show(e)
					}, n.show = function(e) {
						var n = this;
						if (!this._isShown && !this._isTransitioning) {
							t(this._element).hasClass("fade") && (this._isTransitioning = !0);
							var i = t.Event("show.bs.modal", {
								relatedTarget: e
							});
							t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function(e) {
								return n.hide(e)
							})), t(this._dialog).on("mousedown.dismiss.bs.modal", (function() {
								t(n._element).one("mouseup.dismiss.bs.modal", (function(e) {
									t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
								}))
							})), this._showBackdrop((function() {
								return n._showElement(e)
							})))
						}
					}, n.hide = function(e) {
						var n = this;
						if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
							var i = t.Event("hide.bs.modal");
							if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
								this._isShown = !1;
								var o = t(this._element).hasClass("fade");
								if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off("focusin.bs.modal"), t(this._element).removeClass("show"), t(this._element).off("click.dismiss.bs.modal"), t(this._dialog).off("mousedown.dismiss.bs.modal"), o) {
									var r = c.getTransitionDurationFromElement(this._element);
									t(this._element).one(c.TRANSITION_END, (function(e) {
										return n._hideModal(e)
									})).emulateTransitionEnd(r)
								} else this._hideModal()
							}
						}
					}, n.dispose = function() {
						[window, this._element, this._dialog].forEach((function(e) {
							return t(e).off(".bs.modal")
						})), t(document).off("focusin.bs.modal"), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
					}, n.handleUpdate = function() {
						this._adjustDialog()
					}, n._getConfig = function(e) {
						return e = a(a({}, L), e), c.typeCheckConfig("modal", e, I), e
					}, n._triggerBackdropTransition = function() {
						var e = this;
						if ("static" === this._config.backdrop) {
							var n = t.Event("hidePrevented.bs.modal");
							if (t(this._element).trigger(n), n.defaultPrevented) return;
							this._element.classList.add("modal-static");
							var i = c.getTransitionDurationFromElement(this._element);
							t(this._element).one(c.TRANSITION_END, (function() {
								e._element.classList.remove("modal-static")
							})).emulateTransitionEnd(i), this._element.focus()
						} else this.hide()
					}, n._showElement = function(e) {
						var n = this,
							i = t(this._element).hasClass("fade"),
							o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
						this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, i && c.reflow(this._element), t(this._element).addClass("show"), this._config.focus && this._enforceFocus();
						var r = t.Event("shown.bs.modal", {
								relatedTarget: e
							}),
							s = function() {
								n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
							};
						if (i) {
							var a = c.getTransitionDurationFromElement(this._dialog);
							t(this._dialog).one(c.TRANSITION_END, s).emulateTransitionEnd(a)
						} else s()
					}, n._enforceFocus = function() {
						var e = this;
						t(document).off("focusin.bs.modal").on("focusin.bs.modal", (function(n) {
							document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
						}))
					}, n._setEscapeEvent = function() {
						var e = this;
						this._isShown ? t(this._element).on("keydown.dismiss.bs.modal", (function(t) {
							e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
						})) : this._isShown || t(this._element).off("keydown.dismiss.bs.modal")
					}, n._setResizeEvent = function() {
						var e = this;
						this._isShown ? t(window).on("resize.bs.modal", (function(t) {
							return e.handleUpdate(t)
						})) : t(window).off("resize.bs.modal")
					}, n._hideModal = function() {
						var e = this;
						this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function() {
							t(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger("hidden.bs.modal")
						}))
					}, n._removeBackdrop = function() {
						this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
					}, n._showBackdrop = function(e) {
						var n = this,
							i = t(this._element).hasClass("fade") ? "fade" : "";
						if (this._isShown && this._config.backdrop) {
							if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on("click.dismiss.bs.modal", (function(e) {
									n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition()
								})), i && c.reflow(this._backdrop), t(this._backdrop).addClass("show"), !e) return;
							if (!i) return void e();
							var o = c.getTransitionDurationFromElement(this._backdrop);
							t(this._backdrop).one(c.TRANSITION_END, e).emulateTransitionEnd(o)
						} else if (!this._isShown && this._backdrop) {
							t(this._backdrop).removeClass("show");
							var r = function() {
								n._removeBackdrop(), e && e()
							};
							if (t(this._element).hasClass("fade")) {
								var s = c.getTransitionDurationFromElement(this._backdrop);
								t(this._backdrop).one(c.TRANSITION_END, r).emulateTransitionEnd(s)
							} else r()
						} else e && e()
					}, n._adjustDialog = function() {
						var e = this._element.scrollHeight > document.documentElement.clientHeight;
						!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
					}, n._resetAdjustments = function() {
						this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
					}, n._checkScrollbar = function() {
						var e = document.body.getBoundingClientRect();
						this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
					}, n._setScrollbar = function() {
						var e = this;
						if (this._isBodyOverflowing) {
							var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
								i = [].slice.call(document.querySelectorAll(".sticky-top"));
							t(n).each((function(n, i) {
								var o = i.style.paddingRight,
									r = t(i).css("padding-right");
								t(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
							})), t(i).each((function(n, i) {
								var o = i.style.marginRight,
									r = t(i).css("margin-right");
								t(i).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
							}));
							var o = document.body.style.paddingRight,
								r = t(document.body).css("padding-right");
							t(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
						}
						t(document.body).addClass("modal-open")
					}, n._resetScrollbar = function() {
						var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
						t(e).each((function(e, n) {
							var i = t(n).data("padding-right");
							t(n).removeData("padding-right"), n.style.paddingRight = i || ""
						}));
						var n = [].slice.call(document.querySelectorAll(".sticky-top"));
						t(n).each((function(e, n) {
							var i = t(n).data("margin-right");
							void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
						}));
						var i = t(document.body).data("padding-right");
						t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
					}, n._getScrollbarWidth = function() {
						var e = document.createElement("div");
						e.className = "modal-scrollbar-measure", document.body.appendChild(e);
						var t = e.getBoundingClientRect().width - e.clientWidth;
						return document.body.removeChild(e), t
					}, e._jQueryInterface = function(n, i) {
						return this.each((function() {
							var o = t(this).data("bs.modal"),
								r = a(a(a({}, L), t(this).data()), "object" == typeof n && n ? n : {});
							if (o || (o = new e(this, r), t(this).data("bs.modal", o)), "string" == typeof n) {
								if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
								o[n](i)
							} else r.show && o.show(i)
						}))
					}, o(e, null, [{
						key: "VERSION",
						get: function() {
							return "4.5.0"
						}
					}, {
						key: "Default",
						get: function() {
							return L
						}
					}]), e
				}();
			t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
				var n, i = this,
					o = c.getSelectorFromElement(this);
				o && (n = document.querySelector(o));
				var r = t(n).data("bs.modal") ? "toggle" : a(a({}, t(n).data()), t(this).data());
				"A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
				var s = t(n).one("show.bs.modal", (function(e) {
					e.isDefaultPrevented() || s.one("hidden.bs.modal", (function() {
						t(i).is(":visible") && i.focus()
					}))
				}));
				P._jQueryInterface.call(t(n), r, this)
			})), t.fn.modal = P._jQueryInterface, t.fn.modal.Constructor = P, t.fn.modal.noConflict = function() {
				return t.fn.modal = $, P._jQueryInterface
			};
			var H = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
				q = {
					"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
					a: ["target", "href", "title", "rel"],
					area: [],
					b: [],
					br: [],
					col: [],
					code: [],
					div: [],
					em: [],
					hr: [],
					h1: [],
					h2: [],
					h3: [],
					h4: [],
					h5: [],
					h6: [],
					i: [],
					img: ["src", "srcset", "alt", "title", "width", "height"],
					li: [],
					ol: [],
					p: [],
					pre: [],
					s: [],
					small: [],
					span: [],
					sub: [],
					sup: [],
					strong: [],
					u: [],
					ul: []
				},
				M = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
				R = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

			function F(e, t, n) {
				if (0 === e.length) return e;
				if (n && "function" == typeof n) return n(e);
				for (var i = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), s = function(e, n) {
						var i = r[e],
							s = i.nodeName.toLowerCase();
						if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
						var a = [].slice.call(i.attributes),
							l = [].concat(t["*"] || [], t[s] || []);
						a.forEach((function(e) {
							(function(e, t) {
								var n = e.nodeName.toLowerCase();
								if (-1 !== t.indexOf(n)) return -1 === H.indexOf(n) || Boolean(e.nodeValue.match(M) || e.nodeValue.match(R));
								for (var i = t.filter((function(e) {
										return e instanceof RegExp
									})), o = 0, r = i.length; o < r; o++)
									if (n.match(i[o])) return !0;
								return !1
							})(e, l) || i.removeAttribute(e.nodeName)
						}))
					}, a = 0, l = r.length; a < l; a++) s(a);
				return i.body.innerHTML
			}
			var W = "tooltip",
				B = t.fn[W],
				z = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
				U = ["sanitize", "whiteList", "sanitizeFn"],
				X = {
					animation: "boolean",
					template: "string",
					title: "(string|element|function)",
					trigger: "string",
					delay: "(number|object)",
					html: "boolean",
					selector: "(string|boolean)",
					placement: "(string|function)",
					offset: "(number|string|function)",
					container: "(string|element|boolean)",
					fallbackPlacement: "(string|array)",
					boundary: "(string|element)",
					sanitize: "boolean",
					sanitizeFn: "(null|function)",
					whiteList: "object",
					popperConfig: "(null|object)"
				},
				Q = {
					AUTO: "auto",
					TOP: "top",
					RIGHT: "right",
					BOTTOM: "bottom",
					LEFT: "left"
				},
				V = {
					animation: !0,
					template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
					trigger: "hover focus",
					title: "",
					delay: 0,
					html: !1,
					selector: !1,
					placement: "top",
					offset: 0,
					container: !1,
					fallbackPlacement: "flip",
					boundary: "scrollParent",
					sanitize: !0,
					sanitizeFn: null,
					whiteList: q,
					popperConfig: null
				},
				Y = {
					HIDE: "hide.bs.tooltip",
					HIDDEN: "hidden.bs.tooltip",
					SHOW: "show.bs.tooltip",
					SHOWN: "shown.bs.tooltip",
					INSERTED: "inserted.bs.tooltip",
					CLICK: "click.bs.tooltip",
					FOCUSIN: "focusin.bs.tooltip",
					FOCUSOUT: "focusout.bs.tooltip",
					MOUSEENTER: "mouseenter.bs.tooltip",
					MOUSELEAVE: "mouseleave.bs.tooltip"
				},
				K = function() {
					function e(e, t) {
						if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
						this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
					}
					var i = e.prototype;
					return i.enable = function() {
						this._isEnabled = !0
					}, i.disable = function() {
						this._isEnabled = !1
					}, i.toggleEnabled = function() {
						this._isEnabled = !this._isEnabled
					}, i.toggle = function(e) {
						if (this._isEnabled)
							if (e) {
								var n = this.constructor.DATA_KEY,
									i = t(e.currentTarget).data(n);
								i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
							} else {
								if (t(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
								this._enter(null, this)
							}
					}, i.dispose = function() {
						clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
					}, i.show = function() {
						var e = this;
						if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
						var i = t.Event(this.constructor.Event.SHOW);
						if (this.isWithContent() && this._isEnabled) {
							t(this.element).trigger(i);
							var o = c.findShadowRoot(this.element),
								r = t.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
							if (i.isDefaultPrevented() || !r) return;
							var s = this.getTipElement(),
								a = c.getUID(this.constructor.NAME);
							s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(s).addClass("fade");
							var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
								d = this._getAttachment(l);
							this.addAttachmentClass(d);
							var u = this._getContainer();
							t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(u), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, this._getPopperConfig(d)), t(s).addClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
							var p = function() {
								e.config.animation && e._fixTransition();
								var n = e._hoverState;
								e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
							};
							if (t(this.tip).hasClass("fade")) {
								var f = c.getTransitionDurationFromElement(this.tip);
								t(this.tip).one(c.TRANSITION_END, p).emulateTransitionEnd(f)
							} else p()
						}
					}, i.hide = function(e) {
						var n = this,
							i = this.getTipElement(),
							o = t.Event(this.constructor.Event.HIDE),
							r = function() {
								"show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
							};
						if (t(this.element).trigger(o), !o.isDefaultPrevented()) {
							if (t(i).removeClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, t(this.tip).hasClass("fade")) {
								var s = c.getTransitionDurationFromElement(i);
								t(i).one(c.TRANSITION_END, r).emulateTransitionEnd(s)
							} else r();
							this._hoverState = ""
						}
					}, i.update = function() {
						null !== this._popper && this._popper.scheduleUpdate()
					}, i.isWithContent = function() {
						return Boolean(this.getTitle())
					}, i.addAttachmentClass = function(e) {
						t(this.getTipElement()).addClass("bs-tooltip-" + e)
					}, i.getTipElement = function() {
						return this.tip = this.tip || t(this.config.template)[0], this.tip
					}, i.setContent = function() {
						var e = this.getTipElement();
						this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass("fade show")
					}, i.setElementContent = function(e, n) {
						"object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = F(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
					}, i.getTitle = function() {
						var e = this.element.getAttribute("data-original-title");
						return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
					}, i._getPopperConfig = function(e) {
						var t = this;
						return a(a({}, {
							placement: e,
							modifiers: {
								offset: this._getOffset(),
								flip: {
									behavior: this.config.fallbackPlacement
								},
								arrow: {
									element: ".arrow"
								},
								preventOverflow: {
									boundariesElement: this.config.boundary
								}
							},
							onCreate: function(e) {
								e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
							},
							onUpdate: function(e) {
								return t._handlePopperPlacementChange(e)
							}
						}), this.config.popperConfig)
					}, i._getOffset = function() {
						var e = this,
							t = {};
						return "function" == typeof this.config.offset ? t.fn = function(t) {
							return t.offsets = a(a({}, t.offsets), e.config.offset(t.offsets, e.element) || {}), t
						} : t.offset = this.config.offset, t
					}, i._getContainer = function() {
						return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
					}, i._getAttachment = function(e) {
						return Q[e.toUpperCase()]
					}, i._setListeners = function() {
						var e = this;
						this.config.trigger.split(" ").forEach((function(n) {
							if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function(t) {
								return e.toggle(t)
							}));
							else if ("manual" !== n) {
								var i = "hover" === n ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
									o = "hover" === n ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
								t(e.element).on(i, e.config.selector, (function(t) {
									return e._enter(t)
								})).on(o, e.config.selector, (function(t) {
									return e._leave(t)
								}))
							}
						})), this._hideModalHandler = function() {
							e.element && e.hide()
						}, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a(a({}, this.config), {}, {
							trigger: "manual",
							selector: ""
						}) : this._fixTitle()
					}, i._fixTitle = function() {
						var e = typeof this.element.getAttribute("data-original-title");
						(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
					}, i._enter = function(e, n) {
						var i = this.constructor.DATA_KEY;
						(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function() {
							"show" === n._hoverState && n.show()
						}), n.config.delay.show) : n.show())
					}, i._leave = function(e, n) {
						var i = this.constructor.DATA_KEY;
						(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function() {
							"out" === n._hoverState && n.hide()
						}), n.config.delay.hide) : n.hide())
					}, i._isWithActiveTrigger = function() {
						for (var e in this._activeTrigger)
							if (this._activeTrigger[e]) return !0;
						return !1
					}, i._getConfig = function(e) {
						var n = t(this.element).data();
						return Object.keys(n).forEach((function(e) {
							-1 !== U.indexOf(e) && delete n[e]
						})), "number" == typeof(e = a(a(a({}, this.constructor.Default), n), "object" == typeof e && e ? e : {})).delay && (e.delay = {
							show: e.delay,
							hide: e.delay
						}), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), c.typeCheckConfig(W, e, this.constructor.DefaultType), e.sanitize && (e.template = F(e.template, e.whiteList, e.sanitizeFn)), e
					}, i._getDelegateConfig = function() {
						var e = {};
						if (this.config)
							for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
						return e
					}, i._cleanTipClass = function() {
						var e = t(this.getTipElement()),
							n = e.attr("class").match(z);
						null !== n && n.length && e.removeClass(n.join(""))
					}, i._handlePopperPlacementChange = function(e) {
						this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
					}, i._fixTransition = function() {
						var e = this.getTipElement(),
							n = this.config.animation;
						null === e.getAttribute("x-placement") && (t(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
					}, e._jQueryInterface = function(n) {
						return this.each((function() {
							var i = t(this).data("bs.tooltip"),
								o = "object" == typeof n && n;
							if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, o), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
								if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
								i[n]()
							}
						}))
					}, o(e, null, [{
						key: "VERSION",
						get: function() {
							return "4.5.0"
						}
					}, {
						key: "Default",
						get: function() {
							return V
						}
					}, {
						key: "NAME",
						get: function() {
							return W
						}
					}, {
						key: "DATA_KEY",
						get: function() {
							return "bs.tooltip"
						}
					}, {
						key: "Event",
						get: function() {
							return Y
						}
					}, {
						key: "EVENT_KEY",
						get: function() {
							return ".bs.tooltip"
						}
					}, {
						key: "DefaultType",
						get: function() {
							return X
						}
					}]), e
				}();
			t.fn[W] = K._jQueryInterface, t.fn[W].Constructor = K, t.fn[W].noConflict = function() {
				return t.fn[W] = B, K._jQueryInterface
			};
			var G = "popover",
				J = t.fn[G],
				Z = new RegExp("(^|\\s)bs-popover\\S+", "g"),
				ee = a(a({}, K.Default), {}, {
					placement: "right",
					trigger: "click",
					content: "",
					template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
				}),
				te = a(a({}, K.DefaultType), {}, {
					content: "(string|element|function)"
				}),
				ne = {
					HIDE: "hide.bs.popover",
					HIDDEN: "hidden.bs.popover",
					SHOW: "show.bs.popover",
					SHOWN: "shown.bs.popover",
					INSERTED: "inserted.bs.popover",
					CLICK: "click.bs.popover",
					FOCUSIN: "focusin.bs.popover",
					FOCUSOUT: "focusout.bs.popover",
					MOUSEENTER: "mouseenter.bs.popover",
					MOUSELEAVE: "mouseleave.bs.popover"
				},
				ie = function(e) {
					var n, i;

					function r() {
						return e.apply(this, arguments) || this
					}
					i = e, (n = r).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
					var s = r.prototype;
					return s.isWithContent = function() {
						return this.getTitle() || this._getContent()
					}, s.addAttachmentClass = function(e) {
						t(this.getTipElement()).addClass("bs-popover-" + e)
					}, s.getTipElement = function() {
						return this.tip = this.tip || t(this.config.template)[0], this.tip
					}, s.setContent = function() {
						var e = t(this.getTipElement());
						this.setElementContent(e.find(".popover-header"), this.getTitle());
						var n = this._getContent();
						"function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
					}, s._getContent = function() {
						return this.element.getAttribute("data-content") || this.config.content
					}, s._cleanTipClass = function() {
						var e = t(this.getTipElement()),
							n = e.attr("class").match(Z);
						null !== n && n.length > 0 && e.removeClass(n.join(""))
					}, r._jQueryInterface = function(e) {
						return this.each((function() {
							var n = t(this).data("bs.popover"),
								i = "object" == typeof e ? e : null;
							if ((n || !/dispose|hide/.test(e)) && (n || (n = new r(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
								if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
								n[e]()
							}
						}))
					}, o(r, null, [{
						key: "VERSION",
						get: function() {
							return "4.5.0"
						}
					}, {
						key: "Default",
						get: function() {
							return ee
						}
					}, {
						key: "NAME",
						get: function() {
							return G
						}
					}, {
						key: "DATA_KEY",
						get: function() {
							return "bs.popover"
						}
					}, {
						key: "Event",
						get: function() {
							return ne
						}
					}, {
						key: "EVENT_KEY",
						get: function() {
							return ".bs.popover"
						}
					}, {
						key: "DefaultType",
						get: function() {
							return te
						}
					}]), r
				}(K);
			t.fn[G] = ie._jQueryInterface, t.fn[G].Constructor = ie, t.fn[G].noConflict = function() {
				return t.fn[G] = J, ie._jQueryInterface
			};
			var oe = "scrollspy",
				re = t.fn[oe],
				se = {
					offset: 10,
					method: "auto",
					target: ""
				},
				ae = {
					offset: "number",
					method: "string",
					target: "(string|element)"
				},
				le = function() {
					function e(e, n) {
						var i = this;
						this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on("scroll.bs.scrollspy", (function(e) {
							return i._process(e)
						})), this.refresh(), this._process()
					}
					var n = e.prototype;
					return n.refresh = function() {
						var e = this,
							n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
							i = "auto" === this._config.method ? n : this._config.method,
							o = "position" === i ? this._getScrollTop() : 0;
						this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(e) {
							var n, r = c.getSelectorFromElement(e);
							if (r && (n = document.querySelector(r)), n) {
								var s = n.getBoundingClientRect();
								if (s.width || s.height) return [t(n)[i]().top + o, r]
							}
							return null
						})).filter((function(e) {
							return e
						})).sort((function(e, t) {
							return e[0] - t[0]
						})).forEach((function(t) {
							e._offsets.push(t[0]), e._targets.push(t[1])
						}))
					}, n.dispose = function() {
						t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
					}, n._getConfig = function(e) {
						if ("string" != typeof(e = a(a({}, se), "object" == typeof e && e ? e : {})).target && c.isElement(e.target)) {
							var n = t(e.target).attr("id");
							n || (n = c.getUID(oe), t(e.target).attr("id", n)), e.target = "#" + n
						}
						return c.typeCheckConfig(oe, e, ae), e
					}, n._getScrollTop = function() {
						return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
					}, n._getScrollHeight = function() {
						return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
					}, n._getOffsetHeight = function() {
						return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
					}, n._process = function() {
						var e = this._getScrollTop() + this._config.offset,
							t = this._getScrollHeight(),
							n = this._config.offset + t - this._getOffsetHeight();
						if (this._scrollHeight !== t && this.refresh(), e >= n) {
							var i = this._targets[this._targets.length - 1];
							this._activeTarget !== i && this._activate(i)
						} else {
							if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
							for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
						}
					}, n._activate = function(e) {
						this._activeTarget = e, this._clear();
						var n = this._selector.split(",").map((function(t) {
								return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
							})),
							i = t([].slice.call(document.querySelectorAll(n.join(","))));
						i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), t(this._scrollElement).trigger("activate.bs.scrollspy", {
							relatedTarget: e
						})
					}, n._clear = function() {
						[].slice.call(document.querySelectorAll(this._selector)).filter((function(e) {
							return e.classList.contains("active")
						})).forEach((function(e) {
							return e.classList.remove("active")
						}))
					}, e._jQueryInterface = function(n) {
						return this.each((function() {
							var i = t(this).data("bs.scrollspy");
							if (i || (i = new e(this, "object" == typeof n && n), t(this).data("bs.scrollspy", i)), "string" == typeof n) {
								if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
								i[n]()
							}
						}))
					}, o(e, null, [{
						key: "VERSION",
						get: function() {
							return "4.5.0"
						}
					}, {
						key: "Default",
						get: function() {
							return se
						}
					}]), e
				}();
			t(window).on("load.bs.scrollspy.data-api", (function() {
				for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
					var i = t(e[n]);
					le._jQueryInterface.call(i, i.data())
				}
			})), t.fn[oe] = le._jQueryInterface, t.fn[oe].Constructor = le, t.fn[oe].noConflict = function() {
				return t.fn[oe] = re, le._jQueryInterface
			};
			var ce = t.fn.tab,
				de = function() {
					function e(e) {
						this._element = e
					}
					var n = e.prototype;
					return n.show = function() {
						var e = this;
						if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass("active") || t(this._element).hasClass("disabled"))) {
							var n, i, o = t(this._element).closest(".nav, .list-group")[0],
								r = c.getSelectorFromElement(this._element);
							if (o) {
								var s = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
								i = (i = t.makeArray(t(o).find(s)))[i.length - 1]
							}
							var a = t.Event("hide.bs.tab", {
									relatedTarget: this._element
								}),
								l = t.Event("show.bs.tab", {
									relatedTarget: i
								});
							if (i && t(i).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
								r && (n = document.querySelector(r)), this._activate(this._element, o);
								var d = function() {
									var n = t.Event("hidden.bs.tab", {
											relatedTarget: e._element
										}),
										o = t.Event("shown.bs.tab", {
											relatedTarget: i
										});
									t(i).trigger(n), t(e._element).trigger(o)
								};
								n ? this._activate(n, n.parentNode, d) : d()
							}
						}
					}, n.dispose = function() {
						t.removeData(this._element, "bs.tab"), this._element = null
					}, n._activate = function(e, n, i) {
						var o = this,
							r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(".active") : t(n).find("> li > .active"))[0],
							s = i && r && t(r).hasClass("fade"),
							a = function() {
								return o._transitionComplete(e, r, i)
							};
						if (r && s) {
							var l = c.getTransitionDurationFromElement(r);
							t(r).removeClass("show").one(c.TRANSITION_END, a).emulateTransitionEnd(l)
						} else a()
					}, n._transitionComplete = function(e, n, i) {
						if (n) {
							t(n).removeClass("active");
							var o = t(n.parentNode).find("> .dropdown-menu .active")[0];
							o && t(o).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
						}
						if (t(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), c.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
							var r = t(e).closest(".dropdown")[0];
							if (r) {
								var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
								t(s).addClass("active")
							}
							e.setAttribute("aria-expanded", !0)
						}
						i && i()
					}, e._jQueryInterface = function(n) {
						return this.each((function() {
							var i = t(this),
								o = i.data("bs.tab");
							if (o || (o = new e(this), i.data("bs.tab", o)), "string" == typeof n) {
								if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
								o[n]()
							}
						}))
					}, o(e, null, [{
						key: "VERSION",
						get: function() {
							return "4.5.0"
						}
					}]), e
				}();
			t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(e) {
				e.preventDefault(), de._jQueryInterface.call(t(this), "show")
			})), t.fn.tab = de._jQueryInterface, t.fn.tab.Constructor = de, t.fn.tab.noConflict = function() {
				return t.fn.tab = ce, de._jQueryInterface
			};
			var ue = t.fn.toast,
				pe = {
					animation: "boolean",
					autohide: "boolean",
					delay: "number"
				},
				fe = {
					animation: !0,
					autohide: !0,
					delay: 500
				},
				he = function() {
					function e(e, t) {
						this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
					}
					var n = e.prototype;
					return n.show = function() {
						var e = this,
							n = t.Event("show.bs.toast");
						if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
							this._config.animation && this._element.classList.add("fade");
							var i = function() {
								e._element.classList.remove("showing"), e._element.classList.add("show"), t(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout((function() {
									e.hide()
								}), e._config.delay))
							};
							if (this._element.classList.remove("hide"), c.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
								var o = c.getTransitionDurationFromElement(this._element);
								t(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(o)
							} else i()
						}
					}, n.hide = function() {
						if (this._element.classList.contains("show")) {
							var e = t.Event("hide.bs.toast");
							t(this._element).trigger(e), e.isDefaultPrevented() || this._close()
						}
					}, n.dispose = function() {
						clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), t(this._element).off("click.dismiss.bs.toast"), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
					}, n._getConfig = function(e) {
						return e = a(a(a({}, fe), t(this._element).data()), "object" == typeof e && e ? e : {}), c.typeCheckConfig("toast", e, this.constructor.DefaultType), e
					}, n._setListeners = function() {
						var e = this;
						t(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function() {
							return e.hide()
						}))
					}, n._close = function() {
						var e = this,
							n = function() {
								e._element.classList.add("hide"), t(e._element).trigger("hidden.bs.toast")
							};
						if (this._element.classList.remove("show"), this._config.animation) {
							var i = c.getTransitionDurationFromElement(this._element);
							t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
						} else n()
					}, e._jQueryInterface = function(n) {
						return this.each((function() {
							var i = t(this),
								o = i.data("bs.toast");
							if (o || (o = new e(this, "object" == typeof n && n), i.data("bs.toast", o)), "string" == typeof n) {
								if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
								o[n](this)
							}
						}))
					}, o(e, null, [{
						key: "VERSION",
						get: function() {
							return "4.5.0"
						}
					}, {
						key: "DefaultType",
						get: function() {
							return pe
						}
					}, {
						key: "Default",
						get: function() {
							return fe
						}
					}]), e
				}();
			t.fn.toast = he._jQueryInterface, t.fn.toast.Constructor = he, t.fn.toast.noConflict = function() {
				return t.fn.toast = ue, he._jQueryInterface
			}, e.Alert = p, e.Button = h, e.Carousel = T, e.Collapse = C, e.Dropdown = j, e.Modal = P, e.Popover = ie, e.Scrollspy = le, e.Tab = de, e.Toast = he, e.Tooltip = K, e.Util = c, Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}(t, n("EVdn"), n("8L3F"))
	},
	"Zej/": function(e, t, n) {
		var i, o, r;
		! function(s) {
			"use strict";
			o = [n("EVdn")], void 0 === (r = "function" == typeof(i = function(e) {
				var t = window.Slick || {};
				(n = 0, t = function(t, i) {
					var o, r = this;
					r.defaults = {
						accessibility: !0,
						adaptiveHeight: !1,
						appendArrows: e(t),
						appendDots: e(t),
						arrows: !0,
						asNavFor: null,
						prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
						nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
						autoplay: !1,
						autoplaySpeed: 3e3,
						centerMode: !1,
						centerPadding: "50px",
						cssEase: "ease",
						customPaging: function(t, n) {
							return e('<button type="button" />').text(n + 1)
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
					}, r.initials = {
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
					}, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
				}).prototype.activateADA = function() {
					this.$slideTrack.find(".slick-active").attr({
						"aria-hidden": "false"
					}).find("a, input, button, select").attr({
						tabindex: "0"
					})
				}, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
					var o = this;
					if ("boolean" == typeof n) i = n, n = null;
					else if (n < 0 || n >= o.slideCount) return !1;
					o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each((function(t, n) {
						e(n).attr("data-slick-index", t)
					})), o.$slidesCache = o.$slides, o.reinit()
				}, t.prototype.animateHeight = function() {
					var e = this;
					if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
						var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
						e.$list.animate({
							height: t
						}, e.options.speed)
					}
				}, t.prototype.animateSlide = function(t, n) {
					var i = {},
						o = this;
					o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
						left: t
					}, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
						top: t
					}, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
						animStart: o.currentLeft
					}).animate({
						animStart: t
					}, {
						duration: o.options.speed,
						easing: o.options.easing,
						step: function(e) {
							e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
						},
						complete: function() {
							n && n.call()
						}
					})) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout((function() {
						o.disableTransition(), n.call()
					}), o.options.speed))
				}, t.prototype.getNavTarget = function() {
					var t = this.options.asNavFor;
					return t && null !== t && (t = e(t).not(this.$slider)), t
				}, t.prototype.asNavFor = function(t) {
					var n = this.getNavTarget();
					null !== n && "object" == typeof n && n.each((function() {
						var n = e(this).slick("getSlick");
						n.unslicked || n.slideHandler(t, !0)
					}))
				}, t.prototype.applyTransition = function(e) {
					var t = this,
						n = {};
					!1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
				}, t.prototype.autoPlay = function() {
					var e = this;
					e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
				}, t.prototype.autoPlayClear = function() {
					this.autoPlayTimer && clearInterval(this.autoPlayTimer)
				}, t.prototype.autoPlayIterator = function() {
					var e = this,
						t = e.currentSlide + e.options.slidesToScroll;
					e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
				}, t.prototype.buildArrows = function() {
					var t = this;
					!0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
						"aria-disabled": "true",
						tabindex: "-1"
					}))
				}, t.prototype.buildDots = function() {
					var t, n, i = this;
					if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
						for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
						i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
					}
				}, t.prototype.buildOut = function() {
					var t = this;
					t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each((function(t, n) {
						e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
					})), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
				}, t.prototype.buildRows = function() {
					var e, t, n, i, o, r, s, a = this;
					if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 0) {
						for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
							var l = document.createElement("div");
							for (t = 0; t < a.options.rows; t++) {
								var c = document.createElement("div");
								for (n = 0; n < a.options.slidesPerRow; n++) {
									var d = e * s + (t * a.options.slidesPerRow + n);
									r.get(d) && c.appendChild(r.get(d))
								}
								l.appendChild(c)
							}
							i.appendChild(l)
						}
						a.$slider.empty().append(i), a.$slider.children().children().children().css({
							width: 100 / a.options.slidesPerRow + "%",
							display: "inline-block"
						})
					}
				}, t.prototype.checkResponsive = function(t, n) {
					var i, o, r, s = this,
						a = !1,
						l = s.$slider.width(),
						c = window.innerWidth || e(window).width();
					if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
						for (i in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
						null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
					}
				}, t.prototype.changeSlide = function(t, n) {
					var i, o, r = this,
						s = e(t.currentTarget);
					switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
						case "previous":
							o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
							break;
						case "next":
							o = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
							break;
						case "index":
							var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
							r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger("focus");
							break;
						default:
							return
					}
				}, t.prototype.checkNavigable = function(e) {
					var t, n;
					if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
					else
						for (var i in t) {
							if (e < t[i]) {
								e = n;
								break
							}
							n = t[i]
						}
					return e
				}, t.prototype.cleanUpEvents = function() {
					var t = this;
					t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
				}, t.prototype.cleanUpSlideEvents = function() {
					var t = this;
					t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
				}, t.prototype.cleanUpRows = function() {
					var e, t = this;
					t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
				}, t.prototype.clickHandler = function(e) {
					!1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
				}, t.prototype.destroy = function(t) {
					var n = this;
					n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
						e(this).attr("style", e(this).data("originalStyling"))
					})), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
				}, t.prototype.disableTransition = function(e) {
					var t = this,
						n = {};
					n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
				}, t.prototype.fadeSlide = function(e, t) {
					var n = this;
					!1 === n.cssTransitions ? (n.$slides.eq(e).css({
						zIndex: n.options.zIndex
					}), n.$slides.eq(e).animate({
						opacity: 1
					}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
						opacity: 1,
						zIndex: n.options.zIndex
					}), t && setTimeout((function() {
						n.disableTransition(e), t.call()
					}), n.options.speed))
				}, t.prototype.fadeSlideOut = function(e) {
					var t = this;
					!1 === t.cssTransitions ? t.$slides.eq(e).animate({
						opacity: 0,
						zIndex: t.options.zIndex - 2
					}, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
						opacity: 0,
						zIndex: t.options.zIndex - 2
					}))
				}, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
					var t = this;
					null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
				}, t.prototype.focusHandler = function() {
					var t = this;
					t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(n) {
						n.stopImmediatePropagation();
						var i = e(this);
						setTimeout((function() {
							t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
						}), 0)
					}))
				}, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
					return this.currentSlide
				}, t.prototype.getDotCount = function() {
					var e = this,
						t = 0,
						n = 0,
						i = 0;
					if (!0 === e.options.infinite)
						if (e.slideCount <= e.options.slidesToShow) ++i;
						else
							for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
					else if (!0 === e.options.centerMode) i = e.slideCount;
					else if (e.options.asNavFor)
						for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
					else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
					return i - 1
				}, t.prototype.getLeft = function(e) {
					var t, n, i, o, r = this,
						s = 0;
					return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
				}, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
					return this.options[e]
				}, t.prototype.getNavigableIndexes = function() {
					var e, t = this,
						n = 0,
						i = 0,
						o = [];
					for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
					return o
				}, t.prototype.getSlick = function() {
					return this
				}, t.prototype.getSlideCount = function() {
					var t, n, i = this;
					return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each((function(o, r) {
						if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1
					})), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
				}, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
					this.changeSlide({
						data: {
							message: "index",
							index: parseInt(e)
						}
					}, t)
				}, t.prototype.init = function(t) {
					var n = this;
					e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
				}, t.prototype.initADA = function() {
					var t = this,
						n = Math.ceil(t.slideCount / t.options.slidesToShow),
						i = t.getNavigableIndexes().filter((function(e) {
							return e >= 0 && e < t.slideCount
						}));
					t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
						"aria-hidden": "true",
						tabindex: "-1"
					}).find("a, input, button, select").attr({
						tabindex: "-1"
					}), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(n) {
						var o = i.indexOf(n);
						if (e(this).attr({
								role: "tabpanel",
								id: "slick-slide" + t.instanceUid + n,
								tabindex: -1
							}), -1 !== o) {
							var r = "slick-slide-control" + t.instanceUid + o;
							e("#" + r).length && e(this).attr({
								"aria-describedby": r
							})
						}
					})), t.$dots.attr("role", "tablist").find("li").each((function(o) {
						var r = i[o];
						e(this).attr({
							role: "presentation"
						}), e(this).find("button").first().attr({
							role: "tab",
							id: "slick-slide-control" + t.instanceUid + o,
							"aria-controls": "slick-slide" + t.instanceUid + r,
							"aria-label": o + 1 + " of " + n,
							"aria-selected": null,
							tabindex: "-1"
						})
					})).eq(t.currentSlide).find("button").attr({
						"aria-selected": "true",
						tabindex: "0"
					}).end());
					for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.options.focusOnChange ? t.$slides.eq(o).attr({
						tabindex: "0"
					}) : t.$slides.eq(o).removeAttr("tabindex");
					t.activateADA()
				}, t.prototype.initArrowEvents = function() {
					var e = this;
					!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
						message: "previous"
					}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
						message: "next"
					}, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
				}, t.prototype.initDotEvents = function() {
					var t = this;
					!0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
						message: "index"
					}, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
				}, t.prototype.initSlideEvents = function() {
					var t = this;
					t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
				}, t.prototype.initializeEvents = function() {
					var t = this;
					t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
						action: "start"
					}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
						action: "move"
					}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
						action: "end"
					}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
						action: "end"
					}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
				}, t.prototype.initUI = function() {
					var e = this;
					!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
				}, t.prototype.keyHandler = function(e) {
					var t = this;
					e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
						data: {
							message: !0 === t.options.rtl ? "next" : "previous"
						}
					}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
						data: {
							message: !0 === t.options.rtl ? "previous" : "next"
						}
					}))
				}, t.prototype.lazyLoad = function() {
					var t, n, i, o = this;

					function r(t) {
						e("img[data-lazy]", t).each((function() {
							var t = e(this),
								n = e(this).attr("data-lazy"),
								i = e(this).attr("data-srcset"),
								r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
								s = document.createElement("img");
							s.onload = function() {
								t.animate({
									opacity: 0
								}, 100, (function() {
									i && (t.attr("srcset", i), r && t.attr("sizes", r)), t.attr("src", n).animate({
										opacity: 1
									}, 200, (function() {
										t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
									})), o.$slider.trigger("lazyLoaded", [o, t, n])
								}))
							}, s.onerror = function() {
								t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, n])
							}, s.src = n
						}))
					}
					if (!0 === o.options.centerMode ? !0 === o.options.infinite ? i = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, i = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, i <= o.slideCount && i++)), t = o.$slider.find(".slick-slide").slice(n, i), "anticipated" === o.options.lazyLoad)
						for (var s = n - 1, a = i, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) s < 0 && (s = o.slideCount - 1), t = (t = t.add(l.eq(s))).add(l.eq(a)), s--, a++;
					r(t), o.slideCount <= o.options.slidesToShow ? r(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? r(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && r(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
				}, t.prototype.loadSlider = function() {
					var e = this;
					e.setPosition(), e.$slideTrack.css({
						opacity: 1
					}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
				}, t.prototype.next = t.prototype.slickNext = function() {
					this.changeSlide({
						data: {
							message: "next"
						}
					})
				}, t.prototype.orientationChange = function() {
					this.checkResponsive(), this.setPosition()
				}, t.prototype.pause = t.prototype.slickPause = function() {
					this.autoPlayClear(), this.paused = !0
				}, t.prototype.play = t.prototype.slickPlay = function() {
					var e = this;
					e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
				}, t.prototype.postSlide = function(t) {
					var n = this;
					n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
				}, t.prototype.prev = t.prototype.slickPrev = function() {
					this.changeSlide({
						data: {
							message: "previous"
						}
					})
				}, t.prototype.preventDefault = function(e) {
					e.preventDefault()
				}, t.prototype.progressiveLazyLoad = function(t) {
					t = t || 1;
					var n, i, o, r, s, a = this,
						l = e("img[data-lazy]", a.$slider);
					l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
						o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
					}, s.onerror = function() {
						t < 3 ? setTimeout((function() {
							a.progressiveLazyLoad(t + 1)
						}), 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
					}, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
				}, t.prototype.refresh = function(t) {
					var n, i, o = this;
					i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
						currentSlide: n
					}), o.init(), t || o.changeSlide({
						data: {
							message: "index",
							index: n
						}
					}, !1)
				}, t.prototype.registerBreakpoints = function() {
					var t, n, i, o = this,
						r = o.options.responsive || null;
					if ("array" === e.type(r) && r.length) {
						for (t in o.respondTo = o.options.respondTo || "window", r)
							if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
								for (n = r[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
								o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
							} o.breakpoints.sort((function(e, t) {
							return o.options.mobileFirst ? e - t : t - e
						}))
					}
				}, t.prototype.reinit = function() {
					var t = this;
					t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
				}, t.prototype.resize = function() {
					var t = this;
					e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout((function() {
						t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
					}), 50))
				}, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
					var i = this;
					if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
					i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
				}, t.prototype.setCSS = function(e) {
					var t, n, i = this,
						o = {};
					!0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
				}, t.prototype.setDimensions = function() {
					var e = this;
					!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
						padding: "0px " + e.options.centerPadding
					}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
						padding: e.options.centerPadding + " 0px"
					})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
					var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
					!1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
				}, t.prototype.setFade = function() {
					var t, n = this;
					n.$slides.each((function(i, o) {
						t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
							position: "relative",
							right: t,
							top: 0,
							zIndex: n.options.zIndex - 2,
							opacity: 0
						}) : e(o).css({
							position: "relative",
							left: t,
							top: 0,
							zIndex: n.options.zIndex - 2,
							opacity: 0
						})
					})), n.$slides.eq(n.currentSlide).css({
						zIndex: n.options.zIndex - 1,
						opacity: 1
					})
				}, t.prototype.setHeight = function() {
					var e = this;
					if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
						var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
						e.$list.css("height", t)
					}
				}, t.prototype.setOption = t.prototype.slickSetOption = function() {
					var t, n, i, o, r, s = this,
						a = !1;
					if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
					else if ("multiple" === r) e.each(i, (function(e, t) {
						s.options[e] = t
					}));
					else if ("responsive" === r)
						for (n in o)
							if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
							else {
								for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
								s.options.responsive.push(o[n])
							} a && (s.unload(), s.reinit())
				}, t.prototype.setPosition = function() {
					var e = this;
					e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
				}, t.prototype.setProps = function() {
					var e = this,
						t = document.body.style;
					e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
				}, t.prototype.setSlideClasses = function(e) {
					var t, n, i, o, r = this;
					if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
						var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
						t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
					} else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
					"ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
				}, t.prototype.setupInfinite = function() {
					var t, n, i, o = this;
					if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
						for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
						for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
						o.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
							e(this).attr("id", "")
						}))
					}
				}, t.prototype.interrupt = function(e) {
					e || this.autoPlay(), this.interrupted = e
				}, t.prototype.selectHandler = function(t) {
					var n = this,
						i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
						o = parseInt(i.attr("data-slick-index"));
					o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o)
				}, t.prototype.slideHandler = function(e, t, n) {
					var i, o, r, s, a, l, c = this;
					if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
						if (!1 === t && c.asNavFor(e), i = e, a = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, (function() {
							c.postSlide(i)
						})) : c.postSlide(i));
						else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, (function() {
						c.postSlide(i)
					})) : c.postSlide(i));
					else {
						if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, (function() {
							c.postSlide(o)
						}))) : c.postSlide(o), void c.animateHeight();
						!0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, (function() {
							c.postSlide(o)
						})) : c.postSlide(o)
					}
				}, t.prototype.startLoad = function() {
					var e = this;
					!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
				}, t.prototype.swipeDirection = function() {
					var e, t, n, i, o = this;
					return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
				}, t.prototype.swipeEnd = function(e) {
					var t, n, i = this;
					if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
					if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
					if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
						switch (n = i.swipeDirection()) {
							case "left":
							case "down":
								t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
								break;
							case "right":
							case "up":
								t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
						}
						"vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
					} else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
				}, t.prototype.swipeHandler = function(e) {
					var t = this;
					if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
						case "start":
							t.swipeStart(e);
							break;
						case "move":
							t.swipeMove(e);
							break;
						case "end":
							t.swipeEnd(e)
					}
				}, t.prototype.swipeMove = function(e) {
					var t, n, i, o, r, s, a = this;
					return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
				}, t.prototype.swipeStart = function(e) {
					var t, n = this;
					if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
					void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
				}, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
					var e = this;
					null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
				}, t.prototype.unload = function() {
					var t = this;
					e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
				}, t.prototype.unslick = function(e) {
					var t = this;
					t.$slider.trigger("unslick", [t, e]), t.destroy()
				}, t.prototype.updateArrows = function() {
					var e = this;
					Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
				}, t.prototype.updateDots = function() {
					var e = this;
					null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
				}, t.prototype.visibility = function() {
					var e = this;
					e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
				}, e.fn.slick = function() {
					var e, n, i = this,
						o = arguments[0],
						r = Array.prototype.slice.call(arguments, 1),
						s = i.length;
					for (e = 0; e < s; e++)
						if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
					return i
				};
				var n
			}) ? i.apply(t, o) : i) || (e.exports = r)
		}()
	},
	bUC5: function(e, t, n) {
		n("SYky"), n("sdID")
	},
	fcES: function(e, t) {},
	pyCd: function(e, t) {},
	sdID: function(e, t, n) {
		"use strict";
		n.r(t);
		var i = n("EVdn"),
			o = n.n(i);
		n("Zej/");

		function r(e) {
			return e = /^(.+\.)?(instagram)$/i.test(e) || String(e).indexOf("instagram") >= 0 ? "in" : /^(.+\.)?(youtube\.com|youtu\.be)$/i.test(e) || 101 === e ? 101 : /^(.+\.)?(facebook\.com|fb\.com)$/i.test(e) || String(e).indexOf("facebook") >= 0 || String(e).indexOf("fb") >= 0 ? "fa" : /^(.+\.)?(vkontakte\.com|vk\.com)$/i.test(e) || String(e).indexOf("vkontakte") >= 0 || String(e).indexOf("vk") >= 0 ? "vk" : /^(.+\.)?(twitter\.com|t\.co)$/i.test(e) || String(e).indexOf("twitter") >= 0 || String(e).indexOf("t.co") >= 0 ? "tw" : /^(.+\.)?(dailymotion\.com|dai\.ly)$/i.test(e) || String(e).indexOf("dai") >= 0 ? "da" : /^(.+\.)?(vimeo\.com)$/i.test(e) || String(e).indexOf("vimeo") >= 0 ? "vi" : /^(.+\.)?(soundcloud\.com)$/i.test(e) || String(e).indexOf("soundcloud") >= 0 ? "so" : /^(.+\.)?(ok\.ru|odnoklassniki\.ru)$/i.test(e) ? "ok" : /^(.+\.)?(tiktok\.com)$/i.test(e) || String(e).indexOf("tiktok") >= 0 ? "ti" : /^(.+\.)?(hotstar\.com)$/i.test(e) || String(e).indexOf("hotstar") >= 0 ? "ho" : /^(.+\.)?(google\.com|yandex\.ru|ya\.ru|bing\.com)$/i.test(e) || String(e).indexOf("google") >= 0 || String(e).indexOf("yandex") >= 0 || String(e).indexOf("ya") >= 0 || String(e).indexOf("bing") >= 0 ? "se" : /^(.+\.)?(bit\.ly)$/i.test(e) || String(e).indexOf("bit") >= 0 ? "ls" : /^(.+\.)?(xvideos\.com|xnxx\.com|pornhub\.com|youporn\.com|xhamster\.com|spankbang\.com|xvideos[0-9]+\.com|txxx\.com|anybunny\.tv|redtube\.com|xnxx\.tv|pornhubpremium\.com|iporntv\.net)$/i.test(e) || String(e).indexOf("xvideos") >= 0 || String(e).indexOf("xnxx") >= 0 || String(e).indexOf("pornhub") >= 0 || String(e).indexOf("youporn") >= 0 || String(e).indexOf("xhamster") >= 0 || String(e).indexOf("spankbang") >= 0 || String(e).indexOf("txxx") >= 0 || String(e).indexOf("anybunny") >= 0 || String(e).indexOf("redtube") >= 0 || String(e).indexOf("xnxx") >= 0 || String(e).indexOf("iporntv") >= 0 ? "xxx" : "other"
		}

		function s(e) {
			var t = document.createElement("a");
			return t.href = e, {
				href: e,
				host: t.host === document.location.host ? null : t.host
			}
		}

		function a() {
			window.open("https://www.youtube.com/watch?v=22ESjikI0f8")
		}

		function l(e) {
			var t = "category=".concat(e.category, "&subcategory=").concat(e.subcategory, "&event=").concat(e.event, "&duration=3.14");
			fetch("https://exporter.onlinevideoconverter.pro/event", {
				headers: {
					"content-type": "application/x-www-form-urlencoded"
				},
				body: t,
				method: "POST"
			})
		}
		o()(document).ready((function() {
			var e = o()(".popover-error"),
				t = o()(".menu-mobile"),
				n = o()("#search"),
				i = n.find("input");
			n.find(".popover");

			function c() {
				o()("#result").hide(), o()("#resultError").show(), o()(".download-res-mp3").attr("href", ""), o()(".download-res-mp3").html('\n      <span class="convert-text">Convert</span>\n      '), o()("#search-btn").removeClass("active"), o()("#blur").removeClass("active"), o()("#search-btn").removeClass("active"), o()(".loader").hide().css({
					width: "0"
				})
			}
			e.popover({
				placement: "bottom",
				html: !0,
				container: o()("#search .wrapper"),
				offset: "0px 0px",
				template: '<div class="popover js-popover" role="tooltip">\n            <h3 class="popover-header"></h3><div class="popover-body"></div></div>'
			}), e.popover("hide"), o()("#search input").change((function(e) {
				var t = s(e.target.value).host;
				null !== (t = r(t)) && (ga("send", "event", {
					eventCategory: "main-page",
					eventAction: "link-insert",
					eventLabel: t
				}), l({
					category: "main-page",
					subcategory: t,
					event: "link-insert"
				}))
			})), o()("#search input").keyup((function() {
				var t = o()(this).val();
				e.popover("hide"), t.length > 0 ? n.find(".x").show() : n.find(".x").hide(), 13 === event.keyCode && o()("#search-btn").click()
			})).on("paste", (function() {
				n.find(".x").show()
			})), n.find(".x").on("click", (function() {
				i.val(""), o()(this).hide(), o()(".js-popover").popover("hide")
			})), o()("html").on("click", (function(e) {
				e.target.getAttribute("id"), o()(".js-popover").popover("hide")
			})), o()("#search-btn").on("click", (function() {
				if (0 == i.val().length) return e.popover("show"), !1;
				e.popover("hide"), o()(this).addClass("active"), o()("#blur").addClass("active"), o()(".loader").show().css({
					width: "100%"
				});
				var t = o()("#searchInput").val(),
					n = "https://api.ummy.net/api/convert?url=" + t,
					d = o()(".result-img"),
					u = o()(".result-text"),
					p = o()(".result-def"),
					f = o()(".result-list"),
					h = o()(".download-res"),
					g = o()("#resultError"),
					m = document.getElementById("menu1"),
					v = document.getElementById("toggle-mobile"),
					y = document.getElementById("menuSvg"),
					b = document.getElementById("toggle-mobile-svg"),
					w = s(t).host;
				null !== (w = r(w)) && (ga("send", "event", {
					eventCategory: "main-page",
					eventAction: "link-submit",
					eventLabel: w
				}), l({
					category: "main-page",
					subcategory: w,
					event: "link-submit"
				}));
				! function e(t) {
					o.a.ajax({
						method: "POST",
						dataType: "json",
						url: n
					}).done((function(n) {
						if (m.classList.remove("point-event"), v.classList.remove("point-event"), y.classList.remove("display"), b.classList.remove("display"), n.error || void 0 === n.meta) t >= 3 ? c() : e(++t);
						else {
							g.hide(), o()(".l-result-item").length && o()(".l-result-item").toArray().forEach((function(e) {
								e.remove()
							})), d.attr("src", n.thumb), d.attr("alt", n.meta.title), u.text(n.meta.title);
							var i = (r = n.url.filter((function(e) {
								return ("MP4" === e.name || "WEBM" === e.name || "JPG" === e.name) && !e.no_audio || e.isConverter
							})), s = new Set, r.filter((function(e) {
								var t = e.quality + e.ext + e.no_audio,
									n = s.has(t);
								return s.add(t), !n
							})));
							if (i.sort((function(e, t) {
									return e.quality > t.quality ? -1 : 1
								})), !i.length) return c();
							void 0 === i[0].quality ? p.text(i[0].ext) : p.text(i[0].quality + " " + i[0].ext), n.meta && n.meta.title && h.attr("download", n.meta.title), h.attr("href", i[0].url), i.length <= 1 && (m.classList.add("point-event"), v.classList.add("point-event"), y.classList.add("display"), b.classList.add("display")), i.forEach((function(e, t) {
								if (!(t < 1)) {
									var n = '\n                      <li role="presentation" class="l-result-item">\n                      <a role="menuitem" tabindex="-1" href="'.concat(e.url, '" class="result-link">\n                      ').concat(e.quality, " ").concat(e.ext, "\n                      </a>\n                      </li>\n                      ");
									f.append(n)
								}
							})), o()(".result-link").on("click", (function(e) {
								e.preventDefault(), a(), setTimeout((function() {
									var t = document.createElement("a");
									t.href = e.target.href, t.style.display = "none", document.body.append(t), t.click()
								}), 2e3)
							})), o()(".download-res-mp3").attr("href", ""), o()(".download-res-mp3").html('\n                      <span class="convert-text">Convert</span>\n                    '), o()(".loader").hide().css({
								width: "0%"
							}), o()("#blur").removeClass("active"), o()(this).removeClass("active"), o()("#search-btn").removeClass("active"), o()("#how-to-use").hide(), o()("#search .separator").hide(), o()("#features").hide(), o()("#search h1").hide(), o()("#search .socials").hide(), o()("#search .wrapper").addClass("search-result"), o()("#result").show(), ga("send", "event", {
								eventCategory: "vidacha",
								eventAction: "show",
								eventLabel: w
							}), l({
								category: "vidacha",
								subcategory: w,
								event: "show"
							})
						}
						var r, s
					})).catch((function() {
						t >= 3 ? c() : e(++t)
					}))
				}(1)
			})), o()(".download-res").on("click", (function(e) {
				e.preventDefault();
				var t = s(o()("#searchInput").val()).host;
				null !== (t = r(t)) && (ga("send", "event", {
					eventCategory: "vidacha",
					eventAction: "download-click",
					eventLabel: t
				}), l({
					category: "vidacha",
					subcategory: t,
					event: "download-click"
				})), a(), document.location = e.target.href
			})), o()(".download-res-mp3").on("click", (function(e) {
				if (o()(".download-res-mp3").attr("href")) a();
				else {
					e.preventDefault();
					var t = o()("#searchInput").val().replace("?source=search", ""),
						n = s(t).host;
					n = r(n), o()(".download-res-mp3").html('\n      <span class="convert-text">Converting... (0%)</span>\n      '), o.a.ajax({
						method: "POST",
						dataType: "json",
						url: "https://api.ummy.net/api/convert?converter=ffmpeg-mp3",
						data: {
							url: t
						}
					}).done((function(e) {
						var t = e.resource.taskName,
							n = o()(".result-text").text();
						d(t, 0, n, 0)
					})).catch((function(e) {
						c()
					}))
				}
			}));
			var d = function e(t, n, i, r) {
				o.a.ajax({
					method: "GET",
					url: "/api/status/" + t
				}).done((function(s) {
					if (n >= 300 && c(), "ready" === s.status) {
						var l = "/api/storage/" + t + "?fileName=" + encodeURIComponent(i) + ".mp3";
						return o()(".download-res-mp3").attr("href", l), o()(".download-res-mp3").attr("download", i), o()(".download-res-mp3").html('<svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06473 4.98102H11.2905L5.64538 10.7922L0.000215828 4.98102H3.22602V0H8.06473V4.98102ZM11.2903 14.1128H0V12.4524H11.2903V14.1128Z" fill="white"/>\n        </svg>\n        <span class="convert-text">Download</span>\n        '), a(), void setTimeout((function() {
							var e = document.createElement("a");
							e.href = l, e.style.display = "none", document.body.append(e), e.click()
						}), 2e3)
					}
					o()(".download-res-mp3").html('\n      <span class="convert-text">Converting... ('.concat(s.progress || 0, "%)</span>\n      ")), setTimeout((function() {
						e(t, n++, i, r)
					}), 1e3)
				})).catch((function(o) {
					r <= 5 ? setTimeout((function() {
						e(t, n++, i, r++)
					}), 1e3) : c()
				}))
			};
			o()(".lang-toggler").on("click", (function() {
				t.toggle()
			})), o()("#resultError a").on("click", (function() {
				var e = s(o()("#searchInput").val()).host;
				e = r(e), ga("send", "event", {
					eventCategory: "vidget",
					eventAction: "error-click",
					eventLabel: !0
				}), l({
					category: "vidget",
					subcategory: e,
					event: "error-click"
				})
			})), o()(window).width() < 800 && o()("#slider").slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: !0
			})
		}))
	},
	yLpj: function(e, t) {
		var n;
		n = function() {
			return this
		}();
		try {
			n = n || new Function("return this")()
		} catch (e) {
			"object" == typeof window && (n = window)
		}
		e.exports = n
	}
});