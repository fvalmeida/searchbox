/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery-1.10.2.min.map
 */
(function (e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) {
        return new x.fn.init(e, t, r)
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) {
        return t.toUpperCase()
    }, q = function (e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
    }, _ = function () {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {
        jquery: f, constructor: x, init: function (e, n, r) {
            var i, o;
            if (!e)return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n)return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))for (i in n)x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2])return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        }, selector: "", length: 0, toArray: function () {
            return g.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return x.each(this, e, t)
        }, ready: function (e) {
            return x.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(g.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(x.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: h, sort: [].sort, splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)if (null != (o = arguments[l]))for (i in o)e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? x.readyWait++ : x.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body)return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        }, isFunction: function (e) {
            return "function" === x.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === x.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (r) {
                return !1
            }
            if (x.support.ownLast)for (n in e)return v.call(e, n);
            for (n in e);
            return n === t || v.call(e, n)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, error: function (e) {
            throw Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        }, parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n)return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && x.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(D, "ms-").replace(L, H)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)if (r = t.apply(e[i], n), r === !1)break
                } else for (i in e)if (r = t.apply(e[i], n), r === !1)break
            } else if (a) {
                for (; o > i; i++)if (r = t.call(e[i], i, e[i]), r === !1)break
            } else for (i in e)if (r = t.call(e[i], i, e[i]), r === !1)break;
            return e
        }, trim: b && !b.call("\ufeff\u00a0") ? function (e) {
            return null == e ? "" : b.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(C, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (m)return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r)for (; r > o; o++)e[i++] = n[o]; else while (n[o] !== t)e[i++] = n[o++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++)r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a)for (; o > i; i++)r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e)r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        }, guid: 1, proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : t
        }, access: function (e, n, r, i, o, a, s) {
            var l = 0, u = e.length, c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r)x.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                    return c.call(x(e), n)
                })), n))for (; u > l; l++)n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        }, now: function () {
            return (new Date).getTime()
        }, swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t)a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)e.style[o] = a[o];
            return i
        }
    }), x.ready.promise = function (t) {
        if (!n)if (n = x.Deferred(), "complete" === a.readyState)setTimeout(x.ready); else if (a.addEventListener)a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1); else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            } catch (i) {
            }
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    r = x(a), function (e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function (e, t) {
            return e === t ? (S = !0, 0) : 0
        }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) {
                var t = 0, n = this.length;
                for (; n > t; t++)if (this[t] === e)return t;
                return -1
            }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
            ID: RegExp("^#(" + R + ")"),
            CLASS: RegExp("^\\.(" + R + ")"),
            TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $),
            PSEUDO: RegExp("^" + I),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
            bool: RegExp("^(?:" + B + ")$", "i"),
            needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {
                apply: H.length ? function (e, t) {
                    _.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e)return n;
            if (1 !== (l = t.nodeType) && 9 !== l)return [];
            if (h && !i) {
                if (o = Z.exec(e))if (s = o[1]) {
                    if (9 === l) {
                        if (a = t.getElementById(s), !a || !a.parentNode)return n;
                        if (a.id === s)return n.push(a), n
                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s)return n.push(a), n
                } else {
                    if (o[2])return M.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName)return M.apply(n, t.getElementsByClassName(s)), n
                }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                        while (u--)c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t, x = c.join(",")
                    }
                    if (x)try {
                        return M.apply(n, y.querySelectorAll(x)), n
                    } catch (T) {
                    } finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }

        function st() {
            var e = [];

            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
            }

            return t
        }

        function lt(e) {
            return e[b] = !0, e
        }

        function ut(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ct(e, t) {
            var n = e.split("|"), r = e.length;
            while (r--)o.attrHandle[n[r]] = t
        }

        function pt(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r)return r;
            if (n)while (n = n.nextSibling)if (n === t)return -1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function dt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ht(e) {
            return lt(function (t) {
                return t = +t, lt(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        s = at.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, r = at.support = {}, p = at.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : w, i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
                p()
            }), r.attributes = ut(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ut(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ut(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), r.getById = ut(function (e) {
                return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
            }), r.getById ? (o.find.ID = function (e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete o.find.ID, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
                    return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
                }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
            }), ut(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
                r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
            }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)while (t = t.parentNode)if (t === e)return !0;
                return !1
            }, A = d.compareDocumentPosition ? function (e, t) {
                if (e === t)return S = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t)return S = !0, 0;
                if (!o || !a)return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a)return pt(e, t);
                r = e;
                while (r = r.parentNode)s.unshift(r);
                r = t;
                while (r = r.parentNode)l.unshift(r);
                while (s[i] === l[i])i++;
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }, n) : f
        }, at.matches = function (e, t) {
            return at(e, null, null, t)
        }, at.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t)))try {
                var n = y.call(e, t);
                if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
            } catch (i) {
            }
            return at(t, f, null, [e]).length > 0
        }, at.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && p(e), v(e, t)
        }, at.attr = function (e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }, at.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, at.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                while (t = e[o++])t === e[o] && (i = n.push(o));
                while (i--)e.splice(n[i], 1)
            }
            return e
        }, a = at.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += a(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r]; r++)n += a(t);
            return n
        }, o = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
                }, PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if (1 === p.nodeType && ++f && p === t) {
                                    c[e] = [T, d, f];
                                    break
                                }
                            } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T)f = u[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t))break;
                            return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--)i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: lt(function (e) {
                    var t = [], n = [], r = l(e.replace(z, "$1"));
                    return r[b] ? lt(function (e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }), has: lt(function (e) {
                    return function (t) {
                        return at(e, t).length > 0
                    }
                }), contains: lt(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }
                }), lang: lt(function (e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
                        var n;
                        do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === d
                }, focus: function (e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return !1;
                    return !0
                }, parent: function (e) {
                    return !o.pseudos.empty(e)
                }, header: function (e) {
                    return tt.test(e.nodeName)
                }, input: function (e) {
                    return et.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: ht(function () {
                    return [0]
                }), last: ht(function (e, t) {
                    return [t - 1]
                }), eq: ht(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: ht(function (e, t) {
                    var n = 0;
                    for (; t > n; n += 2)e.push(n);
                    return e
                }), odd: ht(function (e, t) {
                    var n = 1;
                    for (; t > n; n += 2)e.push(n);
                    return e
                }), lt: ht(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0;)e.push(r);
                    return e
                }), gt: ht(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r;)e.push(r);
                    return e
                })
            }
        }, o.pseudos.nth = o.pseudos.eq;
        for (n in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})o.pseudos[n] = ft(n);
        for (n in{submit: !0, reset: !0})o.pseudos[n] = dt(n);
        function gt() {
        }

        gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c)return t ? 0 : c.slice(0);
            s = e, l = [], u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }), s = s.slice(n.length));
                for (a in o.filter)!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n)break
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }

        function yt(e) {
            var t = 0, n = e.length, r = "";
            for (; n > t; t++)r += e[t].value;
            return r
        }

        function vt(e, t, n) {
            var r = t.dir, o = n && "parentNode" === r, a = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r])if (1 === t.nodeType || o)return e(t, n, i)
            } : function (t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r])if ((1 === t.nodeType || o) && e(t, n, s))return !0
                } else while (t = t[r])if (1 === t.nodeType || o)if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                    if ((l = u[1]) === !0 || l === i)return l === !0
                } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0)return !0
            }
        }

        function bt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l), r) {
                    u = xt(y, d), r(u, [], s, l), c = u.length;
                    while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [], c = y.length;
                            while (c--)(p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                    }
                } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
            })
        }

        function Tt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function (e) {
                return e === t
            }, s, !0), p = vt(function (e) {
                return F.call(t, e) > -1
            }, s, !0), f = [function (e, n, r) {
                return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }];
            for (; i > l; l++)if (n = o.relative[e[l].type])f = [vt(bt(f), n)]; else {
                if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                    for (r = ++l; i > r; r++)if (o.relative[e[r].type])break;
                    return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                }
                f.push(n)
            }
            return bt(f)
        }

        function Ct(e, t) {
            var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++])if (m(h, l, c)) {
                            p.push(h);
                            break
                        }
                        w && (T = k, i = ++n)
                    }
                    r && ((h = !m && h) && v--, s && x.push(h))
                }
                if (v += b, r && b !== v) {
                    g = 0;
                    while (m = t[g++])m(x, y, l, c);
                    if (s) {
                        if (v > 0)while (b--)x[b] || y[b] || (y[b] = q.call(p));
                        y = xt(y)
                    }
                    M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k, u = C), x
            };
            return r ? lt(s) : s
        }

        l = at.compile = function (e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)), n = t.length;
                while (n--)o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r))
            }
            return o
        };
        function Nt(e, t, n) {
            var r = 0, i = t.length;
            for (; i > r; r++)at(e, t[r], n);
            return n
        }

        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t)return n;
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a], o.relative[c = u.type])break;
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1), e = i.length && yt(s), !e)return M.apply(n, i), n;
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)), n
        }

        r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }), ut(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function (e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), r.attributes && ut(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ct("value", function (e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), ut(function (e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function (e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
    }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    x.Callbacks = function (e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }, p = {
            add: function () {
                if (l) {
                    var t = l.length;
                    (function i(t) {
                        x.each(t, function (t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    })(arguments), n ? o = l.length : r && (s = t, c(r))
                }
                return this
            }, remove: function () {
                return l && x.each(arguments, function (e, t) {
                    var r;
                    while ((r = x.inArray(t, l, r)) > -1)l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                }), this
            }, has: function (e) {
                return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], o = 0, this
            }, disable: function () {
                return l = u = r = t, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return u = t, r || p.disable(), this
            }, locked: function () {
                return !u
            }, fireWith: function (e, t) {
                return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return p
    }, x.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return x.Deferred(function (n) {
                        x.each(t, function (t, o) {
                            var a = o[0], s = x.isFunction(e[t]) && e[t];
                            i[o[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? x.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, x.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function (e, t, n) {
                return function (r) {
                    t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }
            }, s, l, u;
            if (r > 1)for (s = Array(r), l = Array(r), u = Array(r); r > t; t++)n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function (t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length)return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in{
            submit: !0,
            change: !0,
            focusin: !0
        })d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t))break;
        return t.ownLast = "0" !== f, x(function () {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {zoom: 1} : {}, function () {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n)return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {toJSON: x.noop}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--)delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r))return
                }
                (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    x.extend({
        cache: {},
        noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
        },
        data: function (e, t, n) {
            return R(e, t, n)
        },
        removeData: function (e, t) {
            return W(e, t)
        },
        _data: function (e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return W(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), x.fn.extend({
        data: function (e, n) {
            var r, i, o = null, a = 0, s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++)i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        }, removeData: function (e) {
            return this.each(function () {
                x.removeData(this, e)
            })
        }
    });
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {
                }
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    x.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () {
                x.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                    empty: x.Callbacks("once memory").add(function () {
                        x._removeData(e, t + "queue"), x._removeData(e, n)
                    })
                })
        }
    }), x.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                x.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () {
                --i || o.resolveWith(a, [a])
            };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--)r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({
        attr: function (e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                x.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = x.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (x.isFunction(e))return this.each(function (t) {
                x(this).addClass(e.call(this, t, this.className))
            });
            if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                o = 0;
                while (i = t[o++])0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = x.trim(r)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e))return this.each(function (t) {
                x(this).removeClass(e.call(this, t, this.className))
            });
            if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                o = 0;
                while (i = t[o++])while (r.indexOf(" " + i + " ") >= 0)r = r.replace(" " + i + " ", " ");
                n.className = e ? x.trim(r) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) {
                    var t, r = 0, o = x(this), a = e.match(T) || [];
                    while (t = a[r++])o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0)return !0;
            return !1
        }, val: function (e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length)return i = x.isFunction(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o)return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            }, select: {
                get: function (e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                        if (t = x(n).val(), o)return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    var n, r, i = e.options, o = x.makeArray(t), a = i.length;
                    while (a--)r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }, attr: function (e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get"in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set"in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(T);
            if (o && 1 === e.nodeType)while (n = o[i++])r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function (e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
            var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function (e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {
        set: function (e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), Q || (z = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        }, set: z.set
    }, x.attrHooks.contenteditable = {
        set: function (e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, x.each(["width", "height"], function (e, n) {
        x.attrHooks[n] = {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
        x.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), x.support.style || (x.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
        x.valHooks[this] = {
            set: function (e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        }, x.support.checkOn || (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {
        }
    }

    x.event = {
        global: {},
        add: function (e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--)s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && x.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--)if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                    while (o--)a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                    l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                } else for (d in c)x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)h.push(u), f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped())n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {
                    }
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; l > a; a++)i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                o.length && s.push({elem: u, handlers: o})
            }
            return n.length > l && s.push({elem: this, handlers: n.slice(l)}), s
        },
        fix: function (e) {
            if (e[x.expando])return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--)n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, s = n.button, l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== at() && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }, _default: function (e) {
                    return x.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = x.extend(new x.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function (e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, x.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        x.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function () {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function () {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        }, handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        }, teardown: function () {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), x.support.focusinBubbles || x.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {
            setup: function () {
                0 === n++ && a.addEventListener(e, r, !0)
            }, teardown: function () {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }), x.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e)this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1)i = ot; else if (!i)return this;
            return 1 === o && (s = i, i = function (e) {
                return x().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
                x.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e)this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
                x.event.remove(this, e, r, n)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                x.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)return this.pushStack(x(e).filter(function () {
                for (t = 0; i > t; t++)if (x.contains(r[t], this))return !0
            }));
            for (t = 0; i > t; t++)x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, has: function (e) {
            var t, n = x(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)if (x.contains(this, n[t]))return !0
            })
        }, not: function (e) {
            return this.pushStack(ft(this, e || [], !0))
        }, filter: function (e) {
            return this.pushStack(ft(this, e || [], !1))
        }, is: function (e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                n = o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    x.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return x.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return x.dir(e, "parentNode", n)
        }, next: function (e) {
            return pt(e, "nextSibling")
        }, prev: function (e) {
            return pt(e, "previousSibling")
        }, nextAll: function (e) {
            return x.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return x.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return x.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return x.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return x.sibling(e.firstChild)
        }, contents: function (e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function (e, t) {
        x.fn[e] = function (n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, dir: function (e, n, r) {
            var i = [], o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))1 === o.nodeType && i.push(o), o = o[n];
            return i
        }, sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    function ft(e, t, n) {
        if (x.isFunction(t))return x.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType)return x.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t))return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function (e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement)while (t.length)n.createElement(t.pop());
        return n
    }

    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, jt = dt(a), Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function (e) {
            return x.access(this, function (e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            var n, r = e ? x.filter(e, this) : this, i = 0;
            for (; null != (n = r[i]); i++)t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild)e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return x.clone(this, e, t)
            })
        }, html: function (e) {
            return x.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++)n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = x.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }), t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h))return this.each(function (r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++)i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if (o)for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++)i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++)x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)for (r = 0, i = s[n].length; i > r; r++)x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events)x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        x.fn[e] = function (e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++)n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }

    x.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a)r[a] && Ot(i, r[a]);
            if (t)if (n)for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++)Mt(i, r[a]); else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        }, buildFragment: function (e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
            for (; p > h; h++)if (o = e[h], o || 0 === o)if ("object" === x.type(o))x.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--)s = s.lastChild;
                if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                    o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--)x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                }
                x.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild)s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++])if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                i = 0;
                while (o = s[i++])kt.test(o.type || "") && n.push(o)
            }
            return s = null, f
        }, cleanData: function (e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
            for (; null != (n = e[s]); s++)if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                if (a.events)for (r in a.events)f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
            }
        }, _evalUrl: function (e) {
            return x.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }
    }), x.fn.extend({
        wrapAll: function (e) {
            if (x.isFunction(e))return this.each(function (t) {
                x(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return x.isFunction(e) ? this.each(function (t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = x(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = x.isFunction(e);
            return this.each(function (n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {BODY: "block"}, Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e)return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--)if (t = en[i] + n, t in e)return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++)r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    x.fn.extend({
        css: function (e, n) {
            return x.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++)a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return rn(this, !0)
        }, hide: function () {
            return rn(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": x.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n), u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t)return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set"in s && (r = s.set(e, r, i)) === t)))try {
                    u[n] = r
                } catch (c) {
                }
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get"in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (Rt = function (t) {
        return e.getComputedStyle(t, null)
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function (e) {
        return e.currentStyle
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for (; 4 > o; o += 2)"margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i))return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a, n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r
    }

    x.each(["height", "width"], function (e, n) {
        x.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            }, set: function (e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function (e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function () {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? x.swap(e, {display: "inline-block"}, Wt, [e, "marginRight"]) : t
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
            x.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function (e) {
        return !x.expr.filters.hidden(e)
    }), x.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        x.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++)i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function () {
            return x.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function (e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
                    return {name: t.name, value: e.replace(fn, "\r\n")}
                }) : {name: t.name, value: n.replace(fn, "\r\n")}
            }).get()
        }
    }), x.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e))x.each(e, function () {
            o(this.name, this.value)
        }); else for (r in e)gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t))x.each(t, function (t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== x.type(t))r(e, t); else for (i in t)gn(e + "[" + i + "]", t[i], n, r)
    }

    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        x.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))while (r = o[i++])"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {}, a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function (e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }

        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n)n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }

    x.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn)return Sn.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
                s.each(r, o || [e.responseText, t, e])
            }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        x.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === b) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a))c[t[1].toLowerCase()] = t[2]
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === b ? a : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return b || (e = v[n] = v[n] || e, y[e] = t), this
                },
                overrideMimeType: function (e) {
                    return b || (p.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > b)for (t in e)m[t] = [m[t], e[t]]; else C.always(e[C.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || w;
                    return u && u.abort(t), k(0, t), this
                }
            };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b)return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers)C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))return C.abort();
            w = "abort";
            for (i in{success: 1, error: 1, complete: 1})C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, k)
                } catch (N) {
                    if (!(2 > b))throw N;
                    k(-1, N)
                }
            } else k(-1, "No Transport");
            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }

            return C
        },
        getJSON: function (e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return x.get(e, t, n, "script")
        }
    }), x.each(["get", "post"], function (e, n) {
        x[n] = function (e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0])u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)for (s in l)if (l[s] && l[s].test(o)) {
            u.unshift(s);
            break
        }
        if (u[0]in r)a = u[0]; else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])for (a in e.converters)u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)for (i in u)if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0)if (a && e["throws"])t = a(t); else try {
                t = a(t)
            } catch (p) {
                return {state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    x.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function (t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () {
            var e;
            for (e in Pn)Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    x.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials"in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (s in n.xhrFields)l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i)l.setRequestHeader(s, i[s])
                    } catch (u) {
                    }
                    l.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState))if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i)4 !== l.readyState && l.abort(); else {
                                p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                try {
                                    c = l.statusText
                                } catch (f) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20;
            if (a && a[3] !== o) {
                o = o || a[3], i = i || [], a = +r || 1;
                do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
            }
            return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
        }]
    };

    function Kn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (; a > o; o++)if (r = i[o].call(n, t, e))return r
    }

    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i)return !1;
            var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length;
            for (; l > a; a++)u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? u.tweens.length : 0;
                if (i)return this;
                for (i = !0; r > n; n++)u.tweens[n].run(1);
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
            }
        }), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)if (r = Gn[o].call(u, e, c, u.opts))return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand"in a) {
            o = a.expand(o), delete e[r];
            for (n in o)n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    x.Animation = x.extend(er, {
        tweener: function (e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++)n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)if (i = t[r], Vn.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show"))continue;
            c[r] = d && d[r] || x.style(e, r)
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden"in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
                x(e).hide()
            }), u.done(function () {
                var t;
                x._removeData(e, "fxshow");
                for (t in c)x.style(e, t, c[t])
            });
            for (r in c)a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    x.Tween = rr, rr.prototype = {
        constructor: rr, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function (e, t) {
        var n = x.fn[t];
        x.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () {
                var t = er(this, x.extend({}, e), o);
                (i || x._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this);
                if (n)a[n] && a[n].stop && i(a[n]); else for (n in a)a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;)o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });
    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        x.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++)e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function (e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function () {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function () {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
        return x.grep(x.timers, function (t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {top: 0, left: 0}, a = this[0], s = a && a.ownerDocument;
        if (s)return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, x.offset = {
        setOffset: function (e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using"in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))e = e.offsetParent;
                return e || s
            })
        }
    }), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function (i) {
            return x.access(this, function (e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    x.each({Height: "height", Width: "width"}, function (e, n) {
        x.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            x.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function (n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function () {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () {
        return x
    }))
})(window);
/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (Q, W, t) {
    'use strict';
    function R(b) {
        return function () {
            var a = arguments[0], c;
            c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.15/" + (b ? b + "/" : "") + a;
            for (a = 1; a < arguments.length; a++) {
                c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
                var d = encodeURIComponent, e;
                e = arguments[a];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                c += d(e)
            }
            return Error(c)
        }
    }

    function Sa(b) {
        if (null == b || Ta(b))return !1;
        var a = b.length;
        return b.nodeType ===
        qa && a ? !0 : C(b) || H(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function r(b, a, c) {
        var d, e;
        if (b)if (G(b))for (d in b)"prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b); else if (H(b) || Sa(b)) {
            var f = "object" !== typeof b;
            d = 0;
            for (e = b.length; d < e; d++)(f || d in b) && a.call(c, b[d], d, b)
        } else if (b.forEach && b.forEach !== r)b.forEach(a, c, b); else for (d in b)b.hasOwnProperty(d) && a.call(c, b[d], d, b);
        return b
    }

    function Ed(b, a, c) {
        for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++)a.call(c,
            b[d[e]], d[e]);
        return d
    }

    function mc(b) {
        return function (a, c) {
            b(c, a)
        }
    }

    function Fd() {
        return ++ob
    }

    function nc(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function w(b) {
        for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            if (e)for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
                var l = f[g];
                b[l] = e[l]
            }
        }
        nc(b, a);
        return b
    }

    function aa(b) {
        return parseInt(b, 10)
    }

    function Ob(b, a) {
        return w(Object.create(b), a)
    }

    function E() {
    }

    function ra(b) {
        return b
    }

    function ea(b) {
        return function () {
            return b
        }
    }

    function x(b) {
        return "undefined" === typeof b
    }

    function y(b) {
        return "undefined" !== typeof b
    }

    function J(b) {
        return null !== b && "object" === typeof b
    }

    function C(b) {
        return "string" === typeof b
    }

    function Y(b) {
        return "number" === typeof b
    }

    function ga(b) {
        return "[object Date]" === Ca.call(b)
    }

    function G(b) {
        return "function" === typeof b
    }

    function Ua(b) {
        return "[object RegExp]" === Ca.call(b)
    }

    function Ta(b) {
        return b && b.window === b
    }

    function Va(b) {
        return b && b.$evalAsync && b.$watch
    }

    function Wa(b) {
        return "boolean" === typeof b
    }

    function oc(b) {
        return !(!b || !(b.nodeName || b.prop &&
        b.attr && b.find))
    }

    function Gd(b) {
        var a = {};
        b = b.split(",");
        var c;
        for (c = 0; c < b.length; c++)a[b[c]] = !0;
        return a
    }

    function va(b) {
        return z(b.nodeName || b[0] && b[0].nodeName)
    }

    function Xa(b, a) {
        var c = b.indexOf(a);
        0 <= c && b.splice(c, 1);
        return a
    }

    function Da(b, a, c, d) {
        if (Ta(b) || Va(b))throw Ja("cpws");
        if (a) {
            if (b === a)throw Ja("cpi");
            c = c || [];
            d = d || [];
            if (J(b)) {
                var e = c.indexOf(b);
                if (-1 !== e)return d[e];
                c.push(b);
                d.push(a)
            }
            if (H(b))for (var f = a.length = 0; f < b.length; f++)e = Da(b[f], null, c, d), J(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);
            else {
                var g = a.$$hashKey;
                H(a) ? a.length = 0 : r(a, function (b, c) {
                    delete a[c]
                });
                for (f in b)b.hasOwnProperty(f) && (e = Da(b[f], null, c, d), J(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
                nc(a, g)
            }
        } else if (a = b)H(b) ? a = Da(b, [], c, d) : ga(b) ? a = new Date(b.getTime()) : Ua(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : J(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Da(b, e, c, d));
        return a
    }

    function sa(b, a) {
        if (H(b)) {
            a = a || [];
            for (var c = 0, d = b.length; c < d; c++)a[c] = b[c]
        } else if (J(b))for (c in a = a || {},
            b)if ("$" !== c.charAt(0) || "$" !== c.charAt(1))a[c] = b[c];
        return a || b
    }

    function ha(b, a) {
        if (b === a)return !0;
        if (null === b || null === a)return !1;
        if (b !== b && a !== a)return !0;
        var c = typeof b, d;
        if (c == typeof a && "object" == c)if (H(b)) {
            if (!H(a))return !1;
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++)if (!ha(b[d], a[d]))return !1;
                return !0
            }
        } else {
            if (ga(b))return ga(a) ? ha(b.getTime(), a.getTime()) : !1;
            if (Ua(b))return Ua(a) ? b.toString() == a.toString() : !1;
            if (Va(b) || Va(a) || Ta(b) || Ta(a) || H(a) || ga(a) || Ua(a))return !1;
            c = {};
            for (d in b)if ("$" !==
                d.charAt(0) && !G(b[d])) {
                if (!ha(b[d], a[d]))return !1;
                c[d] = !0
            }
            for (d in a)if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== t && !G(a[d]))return !1;
            return !0
        }
        return !1
    }

    function Ya(b, a, c) {
        return b.concat(Za.call(a, c))
    }

    function pc(b, a) {
        var c = 2 < arguments.length ? Za.call(arguments, 2) : [];
        return !G(a) || a instanceof RegExp ? a : c.length ? function () {
            return arguments.length ? a.apply(b, Ya(c, arguments, 0)) : a.apply(b, c)
        } : function () {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }

    function Hd(b, a) {
        var c = a;
        "string" === typeof b &&
        "$" === b.charAt(0) && "$" === b.charAt(1) ? c = t : Ta(a) ? c = "$WINDOW" : a && W === a ? c = "$DOCUMENT" : Va(a) && (c = "$SCOPE");
        return c
    }

    function $a(b, a) {
        if ("undefined" === typeof b)return t;
        Y(a) || (a = a ? 2 : null);
        return JSON.stringify(b, Hd, a)
    }

    function qc(b) {
        return C(b) ? JSON.parse(b) : b
    }

    function wa(b) {
        b = A(b).clone();
        try {
            b.empty()
        } catch (a) {
        }
        var c = A("<div>").append(b).html();
        try {
            return b[0].nodeType === pb ? z(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + z(b)
            })
        } catch (d) {
            return z(c)
        }
    }

    function rc(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {
        }
    }

    function sc(b) {
        var a = {}, c, d;
        r((b || "").split("&"), function (b) {
            b && (c = b.replace(/\+/g, "%20").split("="), d = rc(c[0]), y(d) && (b = y(c[1]) ? rc(c[1]) : !0, tc.call(a, d) ? H(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
        });
        return a
    }

    function Pb(b) {
        var a = [];
        r(b, function (b, d) {
            H(b) ? r(b, function (b) {
                a.push(Ea(d, !0) + (!0 === b ? "" : "=" + Ea(b, !0)))
            }) : a.push(Ea(d, !0) + (!0 === b ? "" : "=" + Ea(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function qb(b) {
        return Ea(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Ea(b, a) {
        return encodeURIComponent(b).replace(/%40/gi,
            "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+")
    }

    function Id(b, a) {
        var c, d, e = rb.length;
        b = A(b);
        for (d = 0; d < e; ++d)if (c = rb[d] + a, C(c = b.attr(c)))return c;
        return null
    }

    function Jd(b, a) {
        var c, d, e = {};
        r(rb, function (a) {
            a += "app";
            !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a))
        });
        r(rb, function (a) {
            a += "app";
            var e;
            !c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a))
        });
        c && (e.strictDi = null !== Id(c, "strict-di"),
            a(c, d ? [d] : [], e))
    }

    function uc(b, a, c) {
        J(c) || (c = {});
        c = w({strictDi: !1}, c);
        var d = function () {
            b = A(b);
            if (b.injector()) {
                var d = b[0] === W ? "document" : wa(b);
                throw Ja("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            a = a || [];
            a.unshift(["$provide", function (a) {
                a.value("$rootElement", b)
            }]);
            c.debugInfoEnabled && a.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }]);
            a.unshift("ng");
            d = ab(a, c.strictDi);
            d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector",
                        d);
                    c(b)(a)
                })
            }]);
            return d
        }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
        Q && e.test(Q.name) && (c.debugInfoEnabled = !0, Q.name = Q.name.replace(e, ""));
        if (Q && !f.test(Q.name))return d();
        Q.name = Q.name.replace(f, "");
        ca.resumeBootstrap = function (b) {
            r(b, function (b) {
                a.push(b)
            });
            return d()
        };
        G(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap()
    }

    function Kd() {
        Q.name = "NG_ENABLE_DEBUG_INFO!" + Q.name;
        Q.location.reload()
    }

    function Ld(b) {
        b = ca.element(b).injector();
        if (!b)throw Ja("test");
        return b.get("$$testability")
    }

    function vc(b, a) {
        a = a || "_";
        return b.replace(Md, function (b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }

    function Nd() {
        var b;
        wc || ((ta = Q.jQuery) && ta.fn.on ? (A = ta, w(ta.fn, {
            scope: Ka.scope,
            isolateScope: Ka.isolateScope,
            controller: Ka.controller,
            injector: Ka.injector,
            inheritedData: Ka.inheritedData
        }), b = ta.cleanData, ta.cleanData = function (a) {
            var c;
            if (Qb)Qb = !1; else for (var d = 0, e; null != (e = a[d]); d++)(c = ta._data(e, "events")) && c.$destroy && ta(e).triggerHandler("$destroy");
            b(a)
        }) : A = T, ca.element = A, wc = !0)
    }

    function Rb(b, a, c) {
        if (!b)throw Ja("areq",
            a || "?", c || "required");
        return b
    }

    function sb(b, a, c) {
        c && H(b) && (b = b[b.length - 1]);
        Rb(G(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function La(b, a) {
        if ("hasOwnProperty" === b)throw Ja("badname", a);
    }

    function xc(b, a, c) {
        if (!a)return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, g = 0; g < f; g++)d = a[g], b && (b = (e = b)[d]);
        return !c && G(b) ? pc(e, b) : b
    }

    function tb(b) {
        var a = b[0];
        b = b[b.length - 1];
        var c = [a];
        do {
            a = a.nextSibling;
            if (!a)break;
            c.push(a)
        } while (a !== b);
        return A(c)
    }

    function ia() {
        return Object.create(null)
    }

    function Od(b) {
        function a(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var c = R("$injector"), d = R("ng");
        b = a(b, "angular", Object);
        b.$$minErr = b.$$minErr || R;
        return a(b, "module", function () {
            var b = {};
            return function (f, g, h) {
                if ("hasOwnProperty" === f)throw d("badname", "module");
                g && b.hasOwnProperty(f) && (b[f] = null);
                return a(b, f, function () {
                    function a(c, d, e, f) {
                        f || (f = b);
                        return function () {
                            f[e || "push"]([c, d, arguments]);
                            return u
                        }
                    }

                    if (!g)throw c("nomod", f);
                    var b = [], d = [], e = [], q = a("$injector", "invoke", "push", d), u = {
                        _invokeQueue: b,
                        _configBlocks: d,
                        _runBlocks: e,
                        requires: g,
                        name: f,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        animation: a("$animateProvider", "register"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: q,
                        run: function (a) {
                            e.push(a);
                            return this
                        }
                    };
                    h && q(h);
                    return u
                })
            }
        })
    }

    function Pd(b) {
        w(b, {
            bootstrap: uc,
            copy: Da,
            extend: w,
            equals: ha,
            element: A,
            forEach: r,
            injector: ab,
            noop: E,
            bind: pc,
            toJson: $a,
            fromJson: qc,
            identity: ra,
            isUndefined: x,
            isDefined: y,
            isString: C,
            isFunction: G,
            isObject: J,
            isNumber: Y,
            isElement: oc,
            isArray: H,
            version: Qd,
            isDate: ga,
            lowercase: z,
            uppercase: ub,
            callbacks: {counter: 0},
            getTestability: Ld,
            $$minErr: R,
            $$csp: bb,
            reloadWithDebugInfo: Kd
        });
        cb = Od(Q);
        try {
            cb("ngLocale")
        } catch (a) {
            cb("ngLocale", []).provider("$locale", Rd)
        }
        cb("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: Sd});
            a.provider("$compile", yc).directive({
                a: Td,
                input: zc,
                textarea: zc,
                form: Ud,
                script: Vd,
                select: Wd,
                style: Xd,
                option: Yd,
                ngBind: Zd,
                ngBindHtml: $d,
                ngBindTemplate: ae,
                ngClass: be,
                ngClassEven: ce,
                ngClassOdd: de,
                ngCloak: ee,
                ngController: fe,
                ngForm: ge,
                ngHide: he,
                ngIf: ie,
                ngInclude: je,
                ngInit: ke,
                ngNonBindable: le,
                ngPluralize: me,
                ngRepeat: ne,
                ngShow: oe,
                ngStyle: pe,
                ngSwitch: qe,
                ngSwitchWhen: re,
                ngSwitchDefault: se,
                ngOptions: te,
                ngTransclude: ue,
                ngModel: ve,
                ngList: we,
                ngChange: xe,
                pattern: Ac,
                ngPattern: Ac,
                required: Bc,
                ngRequired: Bc,
                minlength: Cc,
                ngMinlength: Cc,
                maxlength: Dc,
                ngMaxlength: Dc,
                ngValue: ye,
                ngModelOptions: ze
            }).directive({ngInclude: Ae}).directive(vb).directive(Ec);
            a.provider({
                $anchorScroll: Be,
                $animate: Ce,
                $browser: De,
                $cacheFactory: Ee,
                $controller: Fe,
                $document: Ge,
                $exceptionHandler: He,
                $filter: Fc,
                $interpolate: Ie,
                $interval: Je,
                $http: Ke,
                $httpBackend: Le,
                $location: Me,
                $log: Ne,
                $parse: Oe,
                $rootScope: Pe,
                $q: Qe,
                $$q: Re,
                $sce: Se,
                $sceDelegate: Te,
                $sniffer: Ue,
                $templateCache: Ve,
                $templateRequest: We,
                $$testability: Xe,
                $timeout: Ye,
                $window: Ze,
                $$rAF: $e,
                $$asyncCallback: af,
                $$jqLite: bf
            })
        }])
    }

    function db(b) {
        return b.replace(cf,
            function (a, b, d, e) {
                return e ? d.toUpperCase() : d
            }).replace(df, "Moz$1")
    }

    function Gc(b) {
        b = b.nodeType;
        return b === qa || !b || 9 === b
    }

    function Hc(b, a) {
        var c, d, e = a.createDocumentFragment(), f = [];
        if (Sb.test(b)) {
            c = c || e.appendChild(a.createElement("div"));
            d = (ef.exec(b) || ["", ""])[1].toLowerCase();
            d = ja[d] || ja._default;
            c.innerHTML = d[1] + b.replace(ff, "<$1></$2>") + d[2];
            for (d = d[0]; d--;)c = c.lastChild;
            f = Ya(f, c.childNodes);
            c = e.firstChild;
            c.textContent = ""
        } else f.push(a.createTextNode(b));
        e.textContent = "";
        e.innerHTML = "";
        r(f, function (a) {
            e.appendChild(a)
        });
        return e
    }

    function T(b) {
        if (b instanceof T)return b;
        var a;
        C(b) && (b = N(b), a = !0);
        if (!(this instanceof T)) {
            if (a && "<" != b.charAt(0))throw Tb("nosel");
            return new T(b)
        }
        if (a) {
            a = W;
            var c;
            b = (c = gf.exec(b)) ? [a.createElement(c[1])] : (c = Hc(b, a)) ? c.childNodes : []
        }
        Ic(this, b)
    }

    function Ub(b) {
        return b.cloneNode(!0)
    }

    function wb(b, a) {
        a || xb(b);
        if (b.querySelectorAll)for (var c = b.querySelectorAll("*"), d = 0, e = c.length; d < e; d++)xb(c[d])
    }

    function Jc(b, a, c, d) {
        if (y(d))throw Tb("offargs");
        var e = (d = yb(b)) && d.events, f = d && d.handle;
        if (f)if (a)r(a.split(" "),
            function (a) {
                if (y(c)) {
                    var d = e[a];
                    Xa(d || [], c);
                    if (d && 0 < d.length)return
                }
                b.removeEventListener(a, f, !1);
                delete e[a]
            }); else for (a in e)"$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a]
    }

    function xb(b, a) {
        var c = b.ng339, d = c && zb[c];
        d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Jc(b)), delete zb[c], b.ng339 = t))
    }

    function yb(b, a) {
        var c = b.ng339, c = c && zb[c];
        a && !c && (b.ng339 = c = ++hf, c = zb[c] = {events: {}, data: {}, handle: t});
        return c
    }

    function Vb(b, a, c) {
        if (Gc(b)) {
            var d = y(c), e = !d && a && !J(a),
                f = !a;
            b = (b = yb(b, !e)) && b.data;
            if (d)b[a] = c; else {
                if (f)return b;
                if (e)return b && b[a];
                w(b, a)
            }
        }
    }

    function Ab(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
    }

    function Bb(b, a) {
        a && b.setAttribute && r(a.split(" "), function (a) {
            b.setAttribute("class", N((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + N(a) + " ", " ")))
        })
    }

    function Cb(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            r(a.split(" "), function (a) {
                a = N(a);
                -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            });
            b.setAttribute("class", N(c))
        }
    }

    function Ic(b, a) {
        if (a)if (a.nodeType)b[b.length++] = a; else {
            var c = a.length;
            if ("number" === typeof c && a.window !== a) {
                if (c)for (var d = 0; d < c; d++)b[b.length++] = a[d]
            } else b[b.length++] = a
        }
    }

    function Kc(b, a) {
        return Db(b, "$" + (a || "ngController") + "Controller")
    }

    function Db(b, a, c) {
        9 == b.nodeType && (b = b.documentElement);
        for (a = H(a) ? a : [a]; b;) {
            for (var d = 0, e = a.length; d < e; d++)if ((c = A.data(b, a[d])) !== t)return c;
            b = b.parentNode ||
                11 === b.nodeType && b.host
        }
    }

    function Lc(b) {
        for (wb(b, !0); b.firstChild;)b.removeChild(b.firstChild)
    }

    function Mc(b, a) {
        a || wb(b);
        var c = b.parentNode;
        c && c.removeChild(b)
    }

    function jf(b, a) {
        a = a || Q;
        if ("complete" === a.document.readyState)a.setTimeout(b); else A(a).on("load", b)
    }

    function Nc(b, a) {
        var c = Eb[a.toLowerCase()];
        return c && Oc[va(b)] && c
    }

    function kf(b, a) {
        var c = b.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Pc[a]
    }

    function lf(b, a) {
        var c = function (c, e) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var f =
                a[e || c.type], g = f ? f.length : 0;
            if (g) {
                if (x(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return !0 === c.immediatePropagationStopped
                };
                1 < g && (f = sa(f));
                for (var l = 0; l < g; l++)c.isImmediatePropagationStopped() || f[l].call(b, c)
            }
        };
        c.elem = b;
        return c
    }

    function bf() {
        this.$get = function () {
            return w(T, {
                hasClass: function (b, a) {
                    b.attr && (b = b[0]);
                    return Ab(b, a)
                }, addClass: function (b, a) {
                    b.attr && (b = b[0]);
                    return Cb(b, a)
                }, removeClass: function (b, a) {
                    b.attr && (b = b[0]);
                    return Bb(b, a)
                }
            })
        }
    }

    function Ma(b, a) {
        var c = b && b.$$hashKey;
        if (c)return "function" === typeof c && (c = b.$$hashKey()), c;
        c = typeof b;
        return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Fd)() : c + ":" + b
    }

    function eb(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function () {
                return ++c
            }
        }
        r(b, this.put, this)
    }

    function mf(b) {
        return (b = b.toString().replace(Qc, "").match(Rc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/,
            " ") + ")" : "fn"
    }

    function ab(b, a) {
        function c(a) {
            return function (b, c) {
                if (J(b))r(b, mc(a)); else return a(b, c)
            }
        }

        function d(a, b) {
            La(a, "service");
            if (G(b) || H(b))b = q.instantiate(b);
            if (!b.$get)throw Fa("pget", a);
            return p[a + "Provider"] = b
        }

        function e(a, b) {
            return function () {
                var c = s.invoke(b, this);
                if (x(c))throw Fa("undef", a);
                return c
            }
        }

        function f(a, b, c) {
            return d(a, {$get: !1 !== c ? e(a, b) : b})
        }

        function g(a) {
            var b = [], c;
            r(a, function (a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b], f = q.get(e[0]);
                        f[e[1]].apply(f,
                            e[2])
                    }
                }

                if (!n.get(a)) {
                    n.put(a, !0);
                    try {
                        C(a) ? (c = cb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : G(a) ? b.push(q.invoke(a)) : H(a) ? b.push(q.invoke(a)) : sb(a, "module")
                    } catch (e) {
                        throw H(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Fa("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }

        function h(b, c) {
            function d(a, e) {
                if (b.hasOwnProperty(a)) {
                    if (b[a] === l)throw Fa("cdep", a + " <- " + k.join(" <- "));
                    return b[a]
                }
                try {
                    return k.unshift(a),
                        b[a] = l, b[a] = c(a, e)
                } catch (f) {
                    throw b[a] === l && delete b[a], f;
                } finally {
                    k.shift()
                }
            }

            function e(b, c, f, g) {
                "string" === typeof f && (g = f, f = null);
                var k = [], h = ab.$$annotate(b, a, g), l, q, p;
                q = 0;
                for (l = h.length; q < l; q++) {
                    p = h[q];
                    if ("string" !== typeof p)throw Fa("itkn", p);
                    k.push(f && f.hasOwnProperty(p) ? f[p] : d(p, g))
                }
                H(b) && (b = b[l]);
                return b.apply(c, k)
            }

            return {
                invoke: e, instantiate: function (a, b, c) {
                    var d = Object.create((H(a) ? a[a.length - 1] : a).prototype || null);
                    a = e(a, d, b, c);
                    return J(a) || G(a) ? a : d
                }, get: d, annotate: ab.$$annotate, has: function (a) {
                    return p.hasOwnProperty(a +
                            "Provider") || b.hasOwnProperty(a)
                }
            }
        }

        a = !0 === a;
        var l = {}, k = [], n = new eb([], !0), p = {
            $provide: {
                provider: c(d),
                factory: c(f),
                service: c(function (a, b) {
                    return f(a, ["$injector", function (a) {
                        return a.instantiate(b)
                    }])
                }),
                value: c(function (a, b) {
                    return f(a, ea(b), !1)
                }),
                constant: c(function (a, b) {
                    La(a, "constant");
                    p[a] = b;
                    u[a] = b
                }),
                decorator: function (a, b) {
                    var c = q.get(a + "Provider"), d = c.$get;
                    c.$get = function () {
                        var a = s.invoke(d, c);
                        return s.invoke(b, null, {$delegate: a})
                    }
                }
            }
        }, q = p.$injector = h(p, function (a, b) {
            ca.isString(b) && k.push(b);
            throw Fa("unpr", k.join(" <- "));
        }), u = {}, s = u.$injector = h(u, function (a, b) {
            var c = q.get(a + "Provider", b);
            return s.invoke(c.$get, c, t, a)
        });
        r(g(b), function (a) {
            s.invoke(a || E)
        });
        return s
    }

    function Be() {
        var b = !0;
        this.disableAutoScrolling = function () {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a, function (a) {
                    if ("a" === va(a))return b = a, !0
                });
                return b
            }

            function f(b) {
                if (b) {
                    b.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    G(c) ? c = c() : oc(c) ? (c = c[0], c = "fixed" !==
                    a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Y(c) || (c = 0);
                    c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c))
                } else a.scrollTo(0, 0)
            }

            function g() {
                var a = c.hash(), b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
            }

            var h = a.document;
            b && d.$watch(function () {
                return c.hash()
            }, function (a, b) {
                a === b && "" === a || jf(function () {
                    d.$evalAsync(g)
                })
            });
            return g
        }]
    }

    function af() {
        this.$get = ["$$rAF", "$timeout", function (b, a) {
            return b.supported ? function (a) {
                return b(a)
            } :
                function (b) {
                    return a(b, 0, !1)
                }
        }]
    }

    function nf(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, Za.call(arguments, 1))
            } finally {
                if (m--, 0 === m)for (; F.length;)try {
                    F.pop()()
                } catch (b) {
                    c.error(b)
                }
            }
        }

        function f(a, b) {
            (function da() {
                r(Z, function (a) {
                    a()
                });
                L = b(da, a)
            })()
        }

        function g() {
            h();
            l()
        }

        function h() {
            a:{
                try {
                    B = u.state;
                    break a
                } catch (a) {
                }
                B = void 0
            }
            B = x(B) ? null : B;
            ha(B, O) && (B = O);
            O = B
        }

        function l() {
            if (D !== n.url() || I !== B)D = n.url(), I = B, r(X, function (a) {
                a(n.url(), B)
            })
        }

        function k(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        var n = this, p = a[0], q = b.location, u = b.history, s = b.setTimeout, M = b.clearTimeout, v = {};
        n.isMock = !1;
        var m = 0, F = [];
        n.$$completeOutstandingRequest = e;
        n.$$incOutstandingRequestCount = function () {
            m++
        };
        n.notifyWhenNoOutstandingRequests = function (a) {
            r(Z, function (a) {
                a()
            });
            0 === m ? a() : F.push(a)
        };
        var Z = [], L;
        n.addPollFn = function (a) {
            x(L) && f(100, s);
            Z.push(a);
            return a
        };
        var B, I, D = q.href, S = a.find("base"), P = null;
        h();
        I = B;
        n.url = function (a, c, e) {
            x(e) && (e = null);
            q !== b.location && (q = b.location);
            u !== b.history && (u = b.history);
            if (a) {
                var f =
                    I === e;
                if (D === a && (!d.history || f))return n;
                var g = D && Ga(D) === Ga(a);
                D = a;
                I = e;
                !d.history || g && f ? (g || (P = a), c ? q.replace(a) : g ? (c = q, e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e + 1), c.hash = a) : q.href = a) : (u[c ? "replaceState" : "pushState"](e, "", a), h(), I = B);
                return n
            }
            return P || q.href.replace(/%27/g, "'")
        };
        n.state = function () {
            return B
        };
        var X = [], ba = !1, O = null;
        n.onUrlChange = function (a) {
            if (!ba) {
                if (d.history)A(b).on("popstate", g);
                A(b).on("hashchange", g);
                ba = !0
            }
            X.push(a);
            return a
        };
        n.$$checkUrlChange = l;
        n.baseHref = function () {
            var a = S.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var fa = {}, y = "", ka = n.baseHref();
        n.cookies = function (a, b) {
            var d, e, f, g;
            if (a)b === t ? p.cookie = encodeURIComponent(a) + "=;path=" + ka + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : C(b) && (d = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + ka).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")); else {
                if (p.cookie !== y)for (y = p.cookie, d = y.split("; "), fa = {}, f = 0; f < d.length; f++)e = d[f], g =
                    e.indexOf("="), 0 < g && (a = k(e.substring(0, g)), fa[a] === t && (fa[a] = k(e.substring(g + 1))));
                return fa
            }
        };
        n.defer = function (a, b) {
            var c;
            m++;
            c = s(function () {
                delete v[c];
                e(a)
            }, b || 0);
            v[c] = !0;
            return c
        };
        n.defer.cancel = function (a) {
            return v[a] ? (delete v[a], M(a), e(E), !0) : !1
        }
    }

    function De() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
            return new nf(b, d, a, c)
        }]
    }

    function Ee() {
        this.$get = function () {
            function b(b, d) {
                function e(a) {
                    a != p && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, p), p = a, p.n = null)
                }

                function f(a, b) {
                    a !=
                    b && (a && (a.p = b), b && (b.n = a))
                }

                if (b in a)throw R("$cacheFactory")("iid", b);
                var g = 0, h = w({}, d, {id: b}), l = {}, k = d && d.capacity || Number.MAX_VALUE, n = {}, p = null, q = null;
                return a[b] = {
                    put: function (a, b) {
                        if (k < Number.MAX_VALUE) {
                            var c = n[a] || (n[a] = {key: a});
                            e(c)
                        }
                        if (!x(b))return a in l || g++, l[a] = b, g > k && this.remove(q.key), b
                    }, get: function (a) {
                        if (k < Number.MAX_VALUE) {
                            var b = n[a];
                            if (!b)return;
                            e(b)
                        }
                        return l[a]
                    }, remove: function (a) {
                        if (k < Number.MAX_VALUE) {
                            var b = n[a];
                            if (!b)return;
                            b == p && (p = b.p);
                            b == q && (q = b.n);
                            f(b.n, b.p);
                            delete n[a]
                        }
                        delete l[a];
                        g--
                    }, removeAll: function () {
                        l = {};
                        g = 0;
                        n = {};
                        p = q = null
                    }, destroy: function () {
                        n = h = l = null;
                        delete a[b]
                    }, info: function () {
                        return w({}, h, {size: g})
                    }
                }
            }

            var a = {};
            b.info = function () {
                var b = {};
                r(a, function (a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function (b) {
                return a[b]
            };
            return b
        }
    }

    function Ve() {
        this.$get = ["$cacheFactory", function (b) {
            return b("templates")
        }]
    }

    function yc(b, a) {
        function c(a, b) {
            var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, d = {};
            r(a, function (a, e) {
                var f = a.match(c);
                if (!f)throw la("iscp", b, e, a);
                d[e] = {
                    mode: f[1][0], collection: "*" ===
                    f[2], optional: "?" === f[3], attrName: f[4] || e
                }
            });
            return d
        }

        var d = {}, e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, f = /(([\w\-]+)(?:\:([^;]+))?;?)/, g = Gd("ngSrc,ngSrcset,src,srcset"), h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, l = /^(on[a-z]+|formaction)$/;
        this.directive = function p(a, e) {
            La(a, "directive");
            C(a) ? (Rb(e, "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function (b, e) {
                var f = [];
                r(d[a], function (d, g) {
                    try {
                        var h = b.invoke(d);
                        G(h) ? h = {compile: ea(h)} : !h.compile && h.link &&
                        (h.compile = ea(h.link));
                        h.priority = h.priority || 0;
                        h.index = g;
                        h.name = h.name || a;
                        h.require = h.require || h.controller && h.name;
                        h.restrict = h.restrict || "EA";
                        J(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));
                        f.push(h)
                    } catch (k) {
                        e(k)
                    }
                });
                return f
            }])), d[a].push(e)) : r(a, mc(p));
            return this
        };
        this.aHrefSanitizationWhitelist = function (b) {
            return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
        };
        var k = !0;
        this.debugInfoEnabled = function (a) {
            return y(a) ? (k = a, this) : k
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, s, M, v, m, F, Z, L, B) {
            function I(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function D(a, b, c, d, e) {
                a instanceof A || (a = A(a));
                r(a, function (b, c) {
                    b.nodeType == pb && b.nodeValue.match(/\S+/) && (a[c] = A(b).wrap("<span></span>").parent()[0])
                });
                var f = S(a, b, a, c, d, e);
                D.$$addScopeClass(a);
                var g = null;
                return function (b, c, d) {
                    Rb(b, "scope");
                    d = d || {};
                    var e = d.parentBoundTranscludeFn, h = d.transcludeControllers;
                    d = d.futureParentElement;
                    e && e.$$boundTransclude && (e = e.$$boundTransclude);
                    g || (g = (d = d && d[0]) ? "foreignobject" !== va(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== g ? A(Xb(g, A("<div>").append(a).html())) : c ? Ka.clone.call(a) : a;
                    if (h)for (var k in h)d.data("$" + k + "Controller", h[k].instance);
                    D.$$addScopeInfo(d, b);
                    c && c(d, b);
                    f && f(b, d, d, e);
                    return d
                }
            }

            function S(a, b, c, d, e, f) {
                function g(a,
                           c, d, e) {
                    var f, k, l, q, p, s, M;
                    if (m)for (M = Array(c.length), q = 0; q < h.length; q += 3)f = h[q], M[f] = c[f]; else M = c;
                    q = 0;
                    for (p = h.length; q < p;)k = M[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (l = a.$new(), D.$$addScopeInfo(A(k), l)) : l = a, s = c.transcludeOnThisElement ? P(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? P(a, b) : null, c(f, l, k, d, s)) : f && f(a, k.childNodes, t, e)
                }

                for (var h = [], k, l, q, p, m, s = 0; s < a.length; s++) {
                    k = new Yb;
                    l = X(a[s], [], k, 0 === s ? d : t, e);
                    (f = l.length ? fa(l, a[s], k, b, c, null, [], [], f) : null) &&
                    f.scope && D.$$addScopeClass(k.$$element);
                    k = f && f.terminal || !(q = a[s].childNodes) || !q.length ? null : S(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                    if (f || k)h.push(s, f, k), p = !0, m = m || f;
                    f = null
                }
                return p ? g : null
            }

            function P(a, b, c, d) {
                return function (d, e, f, g, h) {
                    d || (d = a.$new(!1, h), d.$$transcluded = !0);
                    return b(d, e, {parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: g})
                }
            }

            function X(a, b, c, d, g) {
                var h = c.$attr, k;
                switch (a.nodeType) {
                    case qa:
                        ka(b, xa(va(a)), "E", d, g);
                        for (var l,
                                 q, p, m = a.attributes, s = 0, M = m && m.length; s < M; s++) {
                            var u = !1, L = !1;
                            l = m[s];
                            k = l.name;
                            q = N(l.value);
                            l = xa(k);
                            if (p = U.test(l))k = k.replace(Sc, "").substr(8).replace(/_(.)/g, function (a, b) {
                                return b.toUpperCase()
                            });
                            var B = l.replace(/(Start|End)$/, "");
                            x(B) && l === B + "Start" && (u = k, L = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));
                            l = xa(k.toLowerCase());
                            h[l] = k;
                            if (p || !c.hasOwnProperty(l))c[l] = q, Nc(a, l) && (c[l] = !0);
                            Oa(a, b, q, l, p);
                            ka(b, l, "A", d, g, u, L)
                        }
                        a = a.className;
                        J(a) && (a = a.animVal);
                        if (C(a) && "" !== a)for (; k = f.exec(a);)l = xa(k[2]),
                        ka(b, l, "C", d, g) && (c[l] = N(k[3])), a = a.substr(k.index + k[0].length);
                        break;
                    case pb:
                        za(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (k = e.exec(a.nodeValue))l = xa(k[1]), ka(b, l, "M", d, g) && (c[l] = N(k[2]))
                        } catch (v) {
                        }
                }
                b.sort(da);
                return b
            }

            function ba(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a)throw la("uterdir", b, c);
                        a.nodeType == qa && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return A(d)
            }

            function O(a, b, c) {
                return function (d, e, f, g, h) {
                    e = ba(e[0],
                        b, c);
                    return a(d, e, f, g, h)
                }
            }

            function fa(a, d, e, f, g, k, l, p, m) {
                function s(a, b, c, d) {
                    if (a) {
                        c && (a = O(a, c, d));
                        a.require = K.require;
                        a.directiveName = da;
                        if (P === K || K.$$isolateScope)a = Y(a, {isolateScope: !0});
                        l.push(a)
                    }
                    if (b) {
                        c && (b = O(b, c, d));
                        b.require = K.require;
                        b.directiveName = da;
                        if (P === K || K.$$isolateScope)b = Y(b, {isolateScope: !0});
                        p.push(b)
                    }
                }

                function L(a, b, c, d) {
                    var e, f = "data", g = !1, k = c, l;
                    if (C(b)) {
                        l = b.match(h);
                        b = b.substring(l[0].length);
                        l[3] && (l[1] ? l[3] = null : l[1] = l[3]);
                        "^" === l[1] ? f = "inheritedData" : "^^" === l[1] && (f = "inheritedData",
                            k = c.parent());
                        "?" === l[2] && (g = !0);
                        e = null;
                        d && "data" === f && (e = d[b]) && (e = e.instance);
                        e = e || k[f]("$" + b + "Controller");
                        if (!e && !g)throw la("ctreq", b, a);
                        return e || null
                    }
                    H(b) && (e = [], r(b, function (b) {
                        e.push(L(a, b, c, d))
                    }));
                    return e
                }

                function B(a, c, f, g, h) {
                    function k(a, b, c) {
                        var d;
                        Va(a) || (c = b, b = a, a = t);
                        E && (d = F);
                        c || (c = E ? X.parent() : X);
                        return h(a, b, d, c, Wb)
                    }

                    var m, s, u, I, F, gb, X, O;
                    d === f ? (O = e, X = e.$$element) : (X = A(f), O = new Yb(X, e));
                    P && (I = c.$new(!0));
                    h && (gb = k, gb.$$boundTransclude = h);
                    S && (Z = {}, F = {}, r(S, function (a) {
                        var b = {
                            $scope: a ===
                            P || a.$$isolateScope ? I : c, $element: X, $attrs: O, $transclude: gb
                        };
                        u = a.controller;
                        "@" == u && (u = O[a.name]);
                        b = v(u, b, !0, a.controllerAs);
                        F[a.name] = b;
                        E || X.data("$" + a.name + "Controller", b.instance);
                        Z[a.name] = b
                    }));
                    if (P) {
                        D.$$addScopeInfo(X, I, !0, !(ma && (ma === P || ma === P.$$originalDirective)));
                        D.$$addScopeClass(X, !0);
                        g = Z && Z[P.name];
                        var ba = I;
                        g && g.identifier && !0 === P.bindToController && (ba = g.instance);
                        r(I.$$isolateBindings = P.$$isolateBindings, function (a, d) {
                            var e = a.attrName, f = a.optional, g, h, k, l;
                            switch (a.mode) {
                                case "@":
                                    O.$observe(e,
                                        function (a) {
                                            ba[d] = a
                                        });
                                    O.$$observers[e].$$scope = c;
                                    O[e] && (ba[d] = b(O[e])(c));
                                    break;
                                case "=":
                                    if (f && !O[e])break;
                                    h = M(O[e]);
                                    l = h.literal ? ha : function (a, b) {
                                        return a === b || a !== a && b !== b
                                    };
                                    k = h.assign || function () {
                                            g = ba[d] = h(c);
                                            throw la("nonassign", O[e], P.name);
                                        };
                                    g = ba[d] = h(c);
                                    f = function (a) {
                                        l(a, ba[d]) || (l(a, g) ? k(c, a = ba[d]) : ba[d] = a);
                                        return g = a
                                    };
                                    f.$stateful = !0;
                                    f = a.collection ? c.$watchCollection(O[e], f) : c.$watch(M(O[e], f), null, h.literal);
                                    I.$on("$destroy", f);
                                    break;
                                case "&":
                                    h = M(O[e]), ba[d] = function (a) {
                                        return h(c, a)
                                    }
                            }
                        })
                    }
                    Z &&
                    (r(Z, function (a) {
                        a()
                    }), Z = null);
                    g = 0;
                    for (m = l.length; g < m; g++)s = l[g], $(s, s.isolateScope ? I : c, X, O, s.require && L(s.directiveName, s.require, X, F), gb);
                    var Wb = c;
                    P && (P.template || null === P.templateUrl) && (Wb = I);
                    a && a(Wb, f.childNodes, t, h);
                    for (g = p.length - 1; 0 <= g; g--)s = p[g], $(s, s.isolateScope ? I : c, X, O, s.require && L(s.directiveName, s.require, X, F), gb)
                }

                m = m || {};
                for (var I = -Number.MAX_VALUE, F, S = m.controllerDirectives, Z, P = m.newIsolateScopeDirective, ma = m.templateDirective, fa = m.nonTlbTranscludeDirective, ka = !1, x = !1, E = m.hasElementTranscludeDirective,
                         w = e.$$element = A(d), K, da, V, fb = f, za, z = 0, Q = a.length; z < Q; z++) {
                    K = a[z];
                    var Oa = K.$$start, U = K.$$end;
                    Oa && (w = ba(d, Oa, U));
                    V = t;
                    if (I > K.priority)break;
                    if (V = K.scope)K.templateUrl || (J(V) ? (Na("new/isolated scope", P || F, K, w), P = K) : Na("new/isolated scope", P, K, w)), F = F || K;
                    da = K.name;
                    !K.templateUrl && K.controller && (V = K.controller, S = S || {}, Na("'" + da + "' controller", S[da], K, w), S[da] = K);
                    if (V = K.transclude)ka = !0, K.$$tlb || (Na("transclusion", fa, K, w), fa = K), "element" == V ? (E = !0, I = K.priority, V = w, w = e.$$element = A(W.createComment(" " + da + ": " +
                        e[da] + " ")), d = w[0], T(g, Za.call(V, 0), d), fb = D(V, f, I, k && k.name, {nonTlbTranscludeDirective: fa})) : (V = A(Ub(d)).contents(), w.empty(), fb = D(V, f));
                    if (K.template)if (x = !0, Na("template", ma, K, w), ma = K, V = G(K.template) ? K.template(w, e) : K.template, V = Tc(V), K.replace) {
                        k = K;
                        V = Sb.test(V) ? Uc(Xb(K.templateNamespace, N(V))) : [];
                        d = V[0];
                        if (1 != V.length || d.nodeType !== qa)throw la("tplrt", da, "");
                        T(g, w, d);
                        Q = {$attr: {}};
                        V = X(d, [], Q);
                        var aa = a.splice(z + 1, a.length - (z + 1));
                        P && y(V);
                        a = a.concat(V).concat(aa);
                        R(e, Q);
                        Q = a.length
                    } else w.html(V);
                    if (K.templateUrl)x = !0, Na("template", ma, K, w), ma = K, K.replace && (k = K), B = of(a.splice(z, a.length - z), w, e, g, ka && fb, l, p, {
                        controllerDirectives: S,
                        newIsolateScopeDirective: P,
                        templateDirective: ma,
                        nonTlbTranscludeDirective: fa
                    }), Q = a.length; else if (K.compile)try {
                        za = K.compile(w, e, fb), G(za) ? s(null, za, Oa, U) : za && s(za.pre, za.post, Oa, U)
                    } catch (pf) {
                        c(pf, wa(w))
                    }
                    K.terminal && (B.terminal = !0, I = Math.max(I, K.priority))
                }
                B.scope = F && !0 === F.scope;
                B.transcludeOnThisElement = ka;
                B.elementTranscludeOnThisElement = E;
                B.templateOnThisElement = x;
                B.transclude = fb;
                m.hasElementTranscludeDirective = E;
                return B
            }

            function y(a) {
                for (var b = 0, c = a.length; b < c; b++)a[b] = Ob(a[b], {$$isolateScope: !0})
            }

            function ka(b, e, f, g, h, k, l) {
                if (e === h)return null;
                h = null;
                if (d.hasOwnProperty(e)) {
                    var q;
                    e = a.get(e + "Directive");
                    for (var m = 0, s = e.length; m < s; m++)try {
                        q = e[m], (g === t || g > q.priority) && -1 != q.restrict.indexOf(f) && (k && (q = Ob(q, {
                            $$start: k,
                            $$end: l
                        })), b.push(q), h = q)
                    } catch (M) {
                        c(M)
                    }
                }
                return h
            }

            function x(b) {
                if (d.hasOwnProperty(b))for (var c = a.get(b + "Directive"), e = 0, f = c.length; e < f; e++)if (b = c[e], b.multiElement)return !0;
                return !1
            }

            function R(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                r(a, function (d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                r(b, function (b, f) {
                    "class" == f ? (I(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function of(a, b, c, d, e, f, g, h) {
                var k = [], l, q, p = b[0], m = a.shift(), M = Ob(m, {
                    templateUrl: null, transclude: null,
                    replace: null, $$originalDirective: m
                }), u = G(m.templateUrl) ? m.templateUrl(b, c) : m.templateUrl, L = m.templateNamespace;
                b.empty();
                s(Z.getTrustedResourceUrl(u)).then(function (s) {
                    var B, v;
                    s = Tc(s);
                    if (m.replace) {
                        s = Sb.test(s) ? Uc(Xb(L, N(s))) : [];
                        B = s[0];
                        if (1 != s.length || B.nodeType !== qa)throw la("tplrt", m.name, u);
                        s = {$attr: {}};
                        T(d, b, B);
                        var D = X(B, [], s);
                        J(m.scope) && y(D);
                        a = D.concat(a);
                        R(c, s)
                    } else B = p, b.html(s);
                    a.unshift(M);
                    l = fa(a, B, c, e, b, m, f, g, h);
                    r(d, function (a, c) {
                        a == B && (d[c] = b[0])
                    });
                    for (q = S(b[0].childNodes, e); k.length;) {
                        s =
                            k.shift();
                        v = k.shift();
                        var F = k.shift(), O = k.shift(), D = b[0];
                        if (!s.$$destroyed) {
                            if (v !== p) {
                                var Z = v.className;
                                h.hasElementTranscludeDirective && m.replace || (D = Ub(B));
                                T(F, A(v), D);
                                I(A(D), Z)
                            }
                            v = l.transcludeOnThisElement ? P(s, l.transclude, O) : O;
                            l(q, s, D, d, v)
                        }
                    }
                    k = null
                });
                return function (a, b, c, d, e) {
                    a = e;
                    b.$$destroyed || (k ? k.push(b, c, d, a) : (l.transcludeOnThisElement && (a = P(b, l.transclude, e)), l(q, b, c, d, a)))
                }
            }

            function da(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function Na(a,
                        b, c, d) {
                if (b)throw la("multidir", b.name, c.name, a, wa(d));
            }

            function za(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0, compile: function (a) {
                        a = a.parent();
                        var b = !!a.length;
                        b && D.$$addBindingClass(a);
                        return function (a, c) {
                            var e = c.parent();
                            b || D.$$addBindingClass(e);
                            D.$$addBindingInfo(e, d.expressions);
                            a.$watch(d, function (a) {
                                c[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function Xb(a, b) {
                a = z(a || "html");
                switch (a) {
                    case "svg":
                    case "math":
                        var c = W.createElement("div");
                        c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                        return c.childNodes[0].childNodes;
                    default:
                        return b
                }
            }

            function Q(a, b) {
                if ("srcdoc" == b)return Z.HTML;
                var c = va(a);
                if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b))return Z.RESOURCE_URL
            }

            function Oa(a, c, d, e, f) {
                var h = Q(a, e);
                f = g[e] || f;
                var k = b(d, !0, h, f);
                if (k) {
                    if ("multiple" === e && "select" === va(a))throw la("selmulti", wa(a));
                    c.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (a, c, g) {
                                    c = g.$$observers || (g.$$observers = {});
                                    if (l.test(e))throw la("nodomevents");
                                    var m = g[e];
                                    m !== d && (k = m && b(m, !0, h, f), d = m);
                                    k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(k, function (a, b) {
                                        "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function T(a, b, c) {
                var d = b[0], e = b.length, f = d.parentNode, g, h;
                if (a)for (g = 0, h = a.length; g < h; g++)if (a[g] == d) {
                    a[g++] = c;
                    h = g + e - 1;
                    for (var k = a.length; g < k; g++, h++)h < k ? a[g] = a[h] : delete a[g];
                    a.length -= e - 1;
                    a.context === d && (a.context = c);
                    break
                }
                f && f.replaceChild(c, d);
                a = W.createDocumentFragment();
                a.appendChild(d);
                A(c).data(A(d).data());
                ta ? (Qb = !0, ta.cleanData([d])) : delete A.cache[d[A.expando]];
                d = 1;
                for (e = b.length; d < e; d++)f = b[d], A(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c;
                b.length = 1
            }

            function Y(a, b) {
                return w(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function $(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g)
                } catch (h) {
                    c(h, wa(d))
                }
            }

            var Yb = function (a, b) {
                if (b) {
                    var c = Object.keys(b), d, e, f;
                    d = 0;
                    for (e = c.length; d < e; d++)f = c[d], this[f] = b[f]
                } else this.$attr = {};
                this.$$element = a
            };
            Yb.prototype = {
                $normalize: xa, $addClass: function (a) {
                    a && 0 < a.length && L.addClass(this.$$element, a)
                }, $removeClass: function (a) {
                    a && 0 < a.length &&
                    L.removeClass(this.$$element, a)
                }, $updateClass: function (a, b) {
                    var c = Vc(a, b);
                    c && c.length && L.addClass(this.$$element, c);
                    (c = Vc(b, a)) && c.length && L.removeClass(this.$$element, c)
                }, $set: function (a, b, d, e) {
                    var f = this.$$element[0], g = Nc(f, a), h = kf(f, a), f = a;
                    g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h);
                    this[a] = b;
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = vc(a, "-"));
                    g = va(this.$$element);
                    if ("a" === g && "href" === a || "img" === g && "src" === a)this[a] = b = B(b, "src" === a); else if ("img" === g && "srcset" === a) {
                        for (var g =
                            "", h = N(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(h) ? k : /(,)/, h = h.split(k), k = Math.floor(h.length / 2), l = 0; l < k; l++)var q = 2 * l, g = g + B(N(h[q]), !0), g = g + (" " + N(h[q + 1]));
                        h = N(h[2 * l]).split(/\s/);
                        g += B(N(h[0]), !0);
                        2 === h.length && (g += " " + N(h[1]));
                        this[a] = b = g
                    }
                    !1 !== d && (null === b || b === t ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                    (a = this.$$observers) && r(a[f], function (a) {
                        try {
                            a(b)
                        } catch (d) {
                            c(d)
                        }
                    })
                }, $observe: function (a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = ia()), e = d[a] || (d[a] = []);
                    e.push(b);
                    m.$evalAsync(function () {
                        !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                    });
                    return function () {
                        Xa(e, b)
                    }
                }
            };
            var V = b.startSymbol(), ma = b.endSymbol(), Tc = "{{" == V || "}}" == ma ? ra : function (a) {
                return a.replace(/\{\{/g, V).replace(/}}/g, ma)
            }, U = /^ngAttr[A-Z]/;
            D.$$addBindingInfo = k ? function (a, b) {
                var c = a.data("$binding") || [];
                H(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c)
            } : E;
            D.$$addBindingClass = k ? function (a) {
                I(a, "ng-binding")
            } : E;
            D.$$addScopeInfo = k ? function (a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope",
                    b)
            } : E;
            D.$$addScopeClass = k ? function (a, b) {
                I(a, b ? "ng-isolate-scope" : "ng-scope")
            } : E;
            return D
        }]
    }

    function xa(b) {
        return db(b.replace(Sc, ""))
    }

    function Vc(b, a) {
        var c = "", d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
        a:for (; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
            c += (0 < c.length ? " " : "") + g
        }
        return c
    }

    function Uc(b) {
        b = A(b);
        var a = b.length;
        if (1 >= a)return b;
        for (; a--;)8 === b[a].nodeType && qf.call(b, a, 1);
        return b
    }

    function Fe() {
        var b = {}, a = !1, c = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (a, c) {
            La(a,
                "controller");
            J(a) ? w(b, a) : b[a] = c
        };
        this.allowGlobals = function () {
            a = !0
        };
        this.$get = ["$injector", "$window", function (d, e) {
            function f(a, b, c, d) {
                if (!a || !J(a.$scope))throw R("$controller")("noscp", d, b);
                a.$scope[b] = c
            }

            return function (g, h, l, k) {
                var n, p, q;
                l = !0 === l;
                k && C(k) && (q = k);
                if (C(g)) {
                    k = g.match(c);
                    if (!k)throw rf("ctrlfmt", g);
                    p = k[1];
                    q = q || k[3];
                    g = b.hasOwnProperty(p) ? b[p] : xc(h.$scope, p, !0) || (a ? xc(e, p, !0) : t);
                    sb(g, p, !0)
                }
                if (l)return l = (H(g) ? g[g.length - 1] : g).prototype, n = Object.create(l || null), q && f(h, q, n, p || g.name), w(function () {
                    d.invoke(g,
                        n, h, p);
                    return n
                }, {instance: n, identifier: q});
                n = d.instantiate(g, h, p);
                q && f(h, q, n, p || g.name);
                return n
            }
        }]
    }

    function Ge() {
        this.$get = ["$window", function (b) {
            return A(b.document)
        }]
    }

    function He() {
        this.$get = ["$log", function (b) {
            return function (a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function Zb(b, a) {
        if (C(b)) {
            var c = b.replace(sf, "").trim();
            if (c) {
                var d = a("Content-Type");
                (d = d && 0 === d.indexOf(Wc)) || (d = (d = c.match(tf)) && uf[d[0]].test(c));
                d && (b = qc(c))
            }
        }
        return b
    }

    function Xc(b) {
        var a = ia(), c, d, e;
        if (!b)return a;
        r(b.split("\n"),
            function (b) {
                e = b.indexOf(":");
                c = z(N(b.substr(0, e)));
                d = N(b.substr(e + 1));
                c && (a[c] = a[c] ? a[c] + ", " + d : d)
            });
        return a
    }

    function Yc(b) {
        var a = J(b) ? b : t;
        return function (c) {
            a || (a = Xc(b));
            return c ? (c = a[z(c)], void 0 === c && (c = null), c) : a
        }
    }

    function Zc(b, a, c, d) {
        if (G(d))return d(b, a, c);
        r(d, function (d) {
            b = d(b, a, c)
        });
        return b
    }

    function Ke() {
        var b = this.defaults = {
            transformResponse: [Zb],
            transformRequest: [function (a) {
                return J(a) && "[object File]" !== Ca.call(a) && "[object Blob]" !== Ca.call(a) && "[object FormData]" !== Ca.call(a) ? $a(a) :
                    a
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: sa($b), put: sa($b), patch: sa($b)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, a = !1;
        this.useApplyAsync = function (b) {
            return y(b) ? (a = !!b, this) : a
        };
        var c = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (d, e, f, g, h, l) {
            function k(a) {
                function c(a) {
                    var b = w({}, a);
                    b.data = a.data ? Zc(a.data, a.headers, a.status, e.transformResponse) : a.data;
                    a = a.status;
                    return 200 <= a && 300 > a ?
                        b : h.reject(b)
                }

                function d(a) {
                    var b, c = {};
                    r(a, function (a, d) {
                        G(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a
                    });
                    return c
                }

                if (!ca.isObject(a))throw R("$http")("badreq", a);
                var e = w({
                    method: "get",
                    transformRequest: b.transformRequest,
                    transformResponse: b.transformResponse
                }, a);
                e.headers = function (a) {
                    var c = b.headers, e = w({}, a.headers), f, g, c = w({}, c.common, c[z(a.method)]);
                    a:for (f in c) {
                        a = z(f);
                        for (g in e)if (z(g) === a)continue a;
                        e[f] = c[f]
                    }
                    return d(e)
                }(a);
                e.method = ub(e.method);
                var f = [function (a) {
                    var d = a.headers, e = Zc(a.data, Yc(d),
                        t, a.transformRequest);
                    x(e) && r(d, function (a, b) {
                        "content-type" === z(b) && delete d[b]
                    });
                    x(a.withCredentials) && !x(b.withCredentials) && (a.withCredentials = b.withCredentials);
                    return n(a, e).then(c, c)
                }, t], g = h.when(e);
                for (r(u, function (a) {
                    (a.request || a.requestError) && f.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && f.push(a.response, a.responseError)
                }); f.length;) {
                    a = f.shift();
                    var k = f.shift(), g = g.then(a, k)
                }
                g.success = function (a) {
                    g.then(function (b) {
                        a(b.data, b.status, b.headers, e)
                    });
                    return g
                };
                g.error =
                    function (a) {
                        g.then(null, function (b) {
                            a(b.data, b.status, b.headers, e)
                        });
                        return g
                    };
                return g
            }

            function n(c, f) {
                function l(b, c, d, e) {
                    function f() {
                        m(c, b, d, e)
                    }

                    I && (200 <= b && 300 > b ? I.put(P, [b, c, Xc(d), e]) : I.remove(P));
                    a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply())
                }

                function m(a, b, d, e) {
                    b = Math.max(b, 0);
                    (200 <= b && 300 > b ? L.resolve : L.reject)({
                        data: a,
                        status: b,
                        headers: Yc(d),
                        config: c,
                        statusText: e
                    })
                }

                function n(a) {
                    m(a.data, a.status, sa(a.headers()), a.statusText)
                }

                function u() {
                    var a = k.pendingRequests.indexOf(c);
                    -1 !== a && k.pendingRequests.splice(a,
                        1)
                }

                var L = h.defer(), B = L.promise, I, D, S = c.headers, P = p(c.url, c.params);
                k.pendingRequests.push(c);
                B.then(u, u);
                !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (I = J(c.cache) ? c.cache : J(b.cache) ? b.cache : q);
                I && (D = I.get(P), y(D) ? D && G(D.then) ? D.then(n, n) : H(D) ? m(D[1], D[0], sa(D[2]), D[3]) : m(D, 200, {}, "OK") : I.put(P, B));
                x(D) && ((D = $c(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : t) && (S[c.xsrfHeaderName || b.xsrfHeaderName] = D), d(c.method, P, f, l, S, c.timeout, c.withCredentials, c.responseType));
                return B
            }

            function p(a, b) {
                if (!b)return a;
                var c = [];
                Ed(b, function (a, b) {
                    null === a || x(a) || (H(a) || (a = [a]), r(a, function (a) {
                        J(a) && (a = ga(a) ? a.toISOString() : $a(a));
                        c.push(Ea(b) + "=" + Ea(a))
                    }))
                });
                0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                return a
            }

            var q = f("$http"), u = [];
            r(c, function (a) {
                u.unshift(C(a) ? l.get(a) : l.invoke(a))
            });
            k.pendingRequests = [];
            (function (a) {
                r(arguments, function (a) {
                    k[a] = function (b, c) {
                        return k(w(c || {}, {method: a, url: b}))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function (a) {
                r(arguments, function (a) {
                    k[a] =
                        function (b, c, d) {
                            return k(w(d || {}, {method: a, url: b, data: c}))
                        }
                })
            })("post", "put", "patch");
            k.defaults = b;
            return k
        }]
    }

    function vf() {
        return new Q.XMLHttpRequest
    }

    function Le() {
        this.$get = ["$browser", "$window", "$document", function (b, a, c) {
            return wf(b, vf, b.defer, a.angular.callbacks, c[0])
        }]
    }

    function wf(b, a, c, d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"), n = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            n = function (a) {
                f.removeEventListener("load", n, !1);
                f.removeEventListener("error", n, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1, u = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {type: "error"}), u = a.type, g = "error" === a.type ? 404 : 200);
                c && c(g, u)
            };
            f.addEventListener("load", n, !1);
            f.addEventListener("error", n, !1);
            e.body.appendChild(f);
            return n
        }

        return function (e, h, l, k, n, p, q, u) {
            function s() {
                m && m();
                F && F.abort()
            }

            function M(a, d, e, f, g) {
                L !== t && c.cancel(L);
                m = F = null;
                a(d, e, f, g);
                b.$$completeOutstandingRequest(E)
            }

            b.$$incOutstandingRequestCount();
            h = h || b.url();
            if ("jsonp" == z(e)) {
                var v = "_" + (d.counter++).toString(36);
                d[v] = function (a) {
                    d[v].data =
                        a;
                    d[v].called = !0
                };
                var m = f(h.replace("JSON_CALLBACK", "angular.callbacks." + v), v, function (a, b) {
                    M(k, a, d[v].data, "", b);
                    d[v] = E
                })
            } else {
                var F = a();
                F.open(e, h, !0);
                r(n, function (a, b) {
                    y(a) && F.setRequestHeader(b, a)
                });
                F.onload = function () {
                    var a = F.statusText || "", b = "response"in F ? F.response : F.responseText, c = 1223 === F.status ? 204 : F.status;
                    0 === c && (c = b ? 200 : "file" == Aa(h).protocol ? 404 : 0);
                    M(k, c, b, F.getAllResponseHeaders(), a)
                };
                e = function () {
                    M(k, -1, null, null, "")
                };
                F.onerror = e;
                F.onabort = e;
                q && (F.withCredentials = !0);
                if (u)try {
                    F.responseType =
                        u
                } catch (Z) {
                    if ("json" !== u)throw Z;
                }
                F.send(l || null)
            }
            if (0 < p)var L = c(s, p); else p && G(p.then) && p.then(s)
        }
    }

    function Ie() {
        var b = "{{", a = "}}";
        this.startSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(f, g, u, s) {
                function M(c) {
                    return c.replace(k, b).replace(n, a)
                }

                function v(a) {
                    try {
                        var b = a;
                        a = u ? e.getTrusted(u, b) : e.valueOf(b);
                        var c;
                        if (s && !y(a))c = a; else if (null == a)c = "";
                        else {
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = $a(a)
                            }
                            c = a
                        }
                        return c
                    } catch (g) {
                        c = ac("interr", f, g.toString()), d(c)
                    }
                }

                s = !!s;
                for (var m, F, r = 0, L = [], B = [], I = f.length, D = [], S = []; r < I;)if (-1 != (m = f.indexOf(b, r)) && -1 != (F = f.indexOf(a, m + h)))r !== m && D.push(M(f.substring(r, m))), r = f.substring(m + h, F), L.push(r), B.push(c(r, v)), r = F + l, S.push(D.length), D.push(""); else {
                    r !== I && D.push(M(f.substring(r)));
                    break
                }
                if (u && 1 < D.length)throw ac("noconcat", f);
                if (!g || L.length) {
                    var P = function (a) {
                        for (var b = 0, c =
                            L.length; b < c; b++) {
                            if (s && x(a[b]))return;
                            D[S[b]] = a[b]
                        }
                        return D.join("")
                    };
                    return w(function (a) {
                        var b = 0, c = L.length, e = Array(c);
                        try {
                            for (; b < c; b++)e[b] = B[b](a);
                            return P(e)
                        } catch (g) {
                            a = ac("interr", f, g.toString()), d(a)
                        }
                    }, {
                        exp: f, expressions: L, $$watchDelegate: function (a, b, c) {
                            var d;
                            return a.$watchGroup(B, function (c, e) {
                                var f = P(c);
                                G(b) && b.call(this, f, c !== e ? d : f, a);
                                d = f
                            }, c)
                        }
                    })
                }
            }

            var h = b.length, l = a.length, k = new RegExp(b.replace(/./g, f), "g"), n = new RegExp(a.replace(/./g, f), "g");
            g.startSymbol = function () {
                return b
            };
            g.endSymbol =
                function () {
                    return a
                };
            return g
        }]
    }

    function Je() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function (b, a, c, d) {
            function e(e, h, l, k) {
                var n = a.setInterval, p = a.clearInterval, q = 0, u = y(k) && !k, s = (u ? d : c).defer(), M = s.promise;
                l = y(l) ? l : 0;
                M.then(null, null, e);
                M.$$intervalId = n(function () {
                    s.notify(q++);
                    0 < l && q >= l && (s.resolve(q), p(M.$$intervalId), delete f[M.$$intervalId]);
                    u || b.$apply()
                }, h);
                f[M.$$intervalId] = s;
                return M
            }

            var f = {};
            e.cancel = function (b) {
                return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId),
                    delete f[b.$$intervalId], !0) : !1
            };
            return e
        }]
    }

    function Rd() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a",
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"]
                },
                pluralCat: function (b) {
                    return 1 === b ? "one" : "other"
                }
            }
        }
    }

    function bc(b) {
        b = b.split("/");
        for (var a = b.length; a--;)b[a] = qb(b[a]);
        return b.join("/")
    }

    function ad(b, a) {
        var c = Aa(b);
        a.$$protocol = c.protocol;
        a.$$host = c.hostname;
        a.$$port = aa(c.port) || xf[c.protocol] || null
    }

    function bd(b, a) {
        var c = "/" !== b.charAt(0);
        c && (b = "/" + b);
        var d = Aa(b);
        a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
        a.$$search = sc(d.search);
        a.$$hash = decodeURIComponent(d.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
    }

    function ya(b, a) {
        if (0 === a.indexOf(b))return a.substr(b.length)
    }

    function Ga(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a)
    }

    function Fb(b) {
        return b.replace(/(#.+)|#$/, "$1")
    }

    function cc(b) {
        return b.substr(0, Ga(b).lastIndexOf("/") + 1)
    }

    function dc(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = cc(b);
        ad(b, this);
        this.$$parse = function (a) {
            var b = ya(c, a);
            if (!C(b))throw Gb("ipthprfx", a, c);
            bd(b, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var a = Pb(this.$$search), b = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = c + this.$$url.substr(1)
        };
        this.$$parseLinkUrl =
            function (d, e) {
                if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
                var f, g;
                (f = ya(b, d)) !== t ? (g = f, g = (f = ya(a, f)) !== t ? c + (ya("/", f) || f) : b + g) : (f = ya(c, d)) !== t ? g = c + f : c == d + "/" && (g = c);
                g && this.$$parse(g);
                return !!g
            }
    }

    function ec(b, a) {
        var c = cc(b);
        ad(b, this);
        this.$$parse = function (d) {
            d = ya(b, d) || ya(c, d);
            var e;
            "#" === d.charAt(0) ? (e = ya(a, d), x(e) && (e = d)) : e = this.$$html5 ? d : "";
            bd(e, this);
            d = this.$$path;
            var f = /^\/[A-Z]:(\/.*)/;
            0 === e.indexOf(b) && (e = e.replace(b, ""));
            f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
            this.$$path = d;
            this.$$compose()
        };
        this.$$compose = function () {
            var c = Pb(this.$$search), e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
        };
        this.$$parseLinkUrl = function (a, c) {
            return Ga(b) == Ga(a) ? (this.$$parse(a), !0) : !1
        }
    }

    function cd(b, a) {
        this.$$html5 = !0;
        ec.apply(this, arguments);
        var c = cc(b);
        this.$$parseLinkUrl = function (d, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            b == Ga(d) ? f = d : (g = ya(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
            f && this.$$parse(f);
            return !!f
        };
        this.$$compose =
            function () {
                var c = Pb(this.$$search), e = this.$$hash ? "#" + qb(this.$$hash) : "";
                this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e;
                this.$$absUrl = b + a + this.$$url
            }
    }

    function Hb(b) {
        return function () {
            return this[b]
        }
    }

    function dd(b, a) {
        return function (c) {
            if (x(c))return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Me() {
        var b = "", a = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (a) {
            return y(a) ? (b = a, this) : b
        };
        this.html5Mode = function (b) {
            return Wa(b) ? (a.enabled = b, this) : J(b) ? (Wa(b.enabled) && (a.enabled =
                b.enabled), Wa(b.requireBase) && (a.requireBase = b.requireBase), Wa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (c, d, e, f, g) {
            function h(a, b, c) {
                var e = k.url(), f = k.$$state;
                try {
                    d.url(a, b, c), k.$$state = d.state()
                } catch (g) {
                    throw k.url(e), k.$$state = f, g;
                }
            }

            function l(a, b) {
                c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b)
            }

            var k, n;
            n = d.baseHref();
            var p = d.url(), q;
            if (a.enabled) {
                if (!n && a.requireBase)throw Gb("nobase");
                q = p.substring(0, p.indexOf("/", p.indexOf("//") + 2)) + (n || "/");
                n = e.history ? dc : cd
            } else q = Ga(p), n = ec;
            k = new n(q, "#" + b);
            k.$$parseLinkUrl(p, p);
            k.$$state = d.state();
            var u = /^\s*(javascript|mailto):/i;
            f.on("click", function (b) {
                if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
                    for (var e = A(b.target); "a" !== va(e[0]);)if (e[0] === f[0] || !(e = e.parent())[0])return;
                    var h = e.prop("href"), l = e.attr("href") || e.attr("xlink:href");
                    J(h) && "[object SVGAnimatedString]" === h.toString() && (h = Aa(h.animVal).href);
                    u.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            });
            Fb(k.absUrl()) != Fb(p) && d.url(k.absUrl(), !0);
            var s = !0;
            d.onUrlChange(function (a, b) {
                c.$evalAsync(function () {
                    var d = k.absUrl(), e = k.$$state, f;
                    k.$$parse(a);
                    k.$$state = b;
                    f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;
                    k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (s = !1, l(d, e)))
                });
                c.$$phase || c.$digest()
            });
            c.$watch(function () {
                var a = Fb(d.url()), b = Fb(k.absUrl()), f = d.state(), g = k.$$replace, q = a !== b || k.$$html5 && e.history && f !== k.$$state;
                if (s || q)s = !1, c.$evalAsync(function () {
                    var b = k.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;
                    k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (q && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)))
                });
                k.$$replace = !1
            });
            return k
        }]
    }

    function Ne() {
        var b = !0, a = this;
        this.debugEnabled = function (a) {
            return y(a) ? (b = a, this) : b
        };
        this.$get = ["$window", function (c) {
            function d(a) {
                a instanceof
                Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || E;
                a = !1;
                try {
                    a = !!e.apply
                } catch (l) {
                }
                return a ? function () {
                    var a = [];
                    r(arguments, function (b) {
                        a.push(d(b))
                    });
                    return e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return {
                log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                    var c = e("debug");
                    return function () {
                        b && c.apply(a,
                            arguments)
                    }
                }()
            }
        }]
    }

    function ua(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b)throw na("isecfld", a);
        return b
    }

    function oa(b, a) {
        if (b) {
            if (b.constructor === b)throw na("isecfn", a);
            if (b.window === b)throw na("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find))throw na("isecdom", a);
            if (b === Object)throw na("isecobj", a);
        }
        return b
    }

    function fc(b) {
        return b.constant
    }

    function hb(b, a, c, d, e) {
        oa(b, e);
        oa(a, e);
        c = c.split(".");
        for (var f,
                 g = 0; 1 < c.length; g++) {
            f = ua(c.shift(), e);
            var h = 0 === g && a && a[f] || b[f];
            h || (h = {}, b[f] = h);
            b = oa(h, e)
        }
        f = ua(c.shift(), e);
        oa(b[f], e);
        return b[f] = d
    }

    function Pa(b) {
        return "constructor" == b
    }

    function ed(b, a, c, d, e, f, g) {
        ua(b, f);
        ua(a, f);
        ua(c, f);
        ua(d, f);
        ua(e, f);
        var h = function (a) {
            return oa(a, f)
        }, l = g || Pa(b) ? h : ra, k = g || Pa(a) ? h : ra, n = g || Pa(c) ? h : ra, p = g || Pa(d) ? h : ra, q = g || Pa(e) ? h : ra;
        return function (f, g) {
            var h = g && g.hasOwnProperty(b) ? g : f;
            if (null == h)return h;
            h = l(h[b]);
            if (!a)return h;
            if (null == h)return t;
            h = k(h[a]);
            if (!c)return h;
            if (null ==
                h)return t;
            h = n(h[c]);
            if (!d)return h;
            if (null == h)return t;
            h = p(h[d]);
            return e ? null == h ? t : h = q(h[e]) : h
        }
    }

    function yf(b, a) {
        return function (c, d) {
            return b(c, d, oa, a)
        }
    }

    function zf(b, a, c) {
        var d = a.expensiveChecks, e = d ? Af : Bf, f = e[b];
        if (f)return f;
        var g = b.split("."), h = g.length;
        if (a.csp)f = 6 > h ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function (a, b) {
            var e = 0, f;
            do f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = t, a = f; while (e < h);
            return f
        }; else {
            var l = "";
            d && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var k = d;
            r(g, function (a, b) {
                ua(a,
                    c);
                var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                if (d || Pa(a))e = "eso(" + e + ", fe)", k = !0;
                l += "if(s == null) return undefined;\ns=" + e + ";\n"
            });
            l += "return s;";
            a = new Function("s", "l", "eso", "fe", l);
            a.toString = ea(l);
            k && (a = yf(a, c));
            f = a
        }
        f.sharedGetter = !0;
        f.assign = function (a, c, d) {
            return hb(a, d, b, c, b)
        };
        return e[b] = f
    }

    function gc(b) {
        return G(b.valueOf) ? b.valueOf() : Cf.call(b)
    }

    function Oe() {
        var b = ia(), a = ia();
        this.$get = ["$filter", "$sniffer", function (c, d) {
            function e(a) {
                var b = a;
                a.sharedGetter && (b = function (b,
                                                 c) {
                    return a(b, c)
                }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign);
                return b
            }

            function f(a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
                }
                return b
            }

            function g(a, b) {
                return null == a || null == b ? a === b : "object" === typeof a && (a = gc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function h(a, b, c, d) {
                var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])), h;
                if (1 === e.length) {
                    var k = g, e = e[0];
                    return a.$watch(function (a) {
                        var b = e(a);
                        g(b, k) || (h = d(a), k = b &&
                            gc(b));
                        return h
                    }, b, c)
                }
                for (var l = [], q = 0, p = e.length; q < p; q++)l[q] = g;
                return a.$watch(function (a) {
                    for (var b = !1, c = 0, f = e.length; c < f; c++) {
                        var k = e[c](a);
                        if (b || (b = !g(k, l[c])))l[c] = k && gc(k)
                    }
                    b && (h = d(a));
                    return h
                }, b, c)
            }

            function l(a, b, c, d) {
                var e, f;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    f = a;
                    G(b) && b.apply(this, arguments);
                    y(a) && d.$$postDigest(function () {
                        y(f) && e()
                    })
                }, c)
            }

            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    r(a, function (a) {
                        y(a) || (b = !1)
                    });
                    return b
                }

                var f, g;
                return f = a.$watch(function (a) {
                        return d(a)
                    },
                    function (a, c, d) {
                        g = a;
                        G(b) && b.call(this, a, c, d);
                        e(a) && d.$$postDigest(function () {
                            e(g) && f()
                        })
                    }, c)
            }

            function n(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    G(b) && b.apply(this, arguments);
                    e()
                }, c)
            }

            function p(a, b) {
                if (!b)return a;
                var c = a.$$watchDelegate, c = c !== k && c !== l ? function (c, d) {
                    var e = a(c, d);
                    return b(e, c, d)
                } : function (c, d) {
                    var e = a(c, d), f = b(e, c, d);
                    return y(e) ? f : e
                };
                a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs =
                    [a]);
                return c
            }

            var q = {csp: d.csp, expensiveChecks: !1}, u = {csp: d.csp, expensiveChecks: !0};
            return function (d, f, g) {
                var m, r, t;
                switch (typeof d) {
                    case "string":
                        t = d = d.trim();
                        var L = g ? a : b;
                        m = L[t];
                        m || (":" === d.charAt(0) && ":" === d.charAt(1) && (r = !0, d = d.substring(2)), g = g ? u : q, m = new hc(g), m = (new ib(m, c, g)).parse(d), m.constant ? m.$$watchDelegate = n : r ? (m = e(m), m.$$watchDelegate = m.literal ? k : l) : m.inputs && (m.$$watchDelegate = h), L[t] = m);
                        return p(m, f);
                    case "function":
                        return p(d, f);
                    default:
                        return p(E, f)
                }
            }
        }]
    }

    function Qe() {
        this.$get =
            ["$rootScope", "$exceptionHandler", function (b, a) {
                return fd(function (a) {
                    b.$evalAsync(a)
                }, a)
            }]
    }

    function Re() {
        this.$get = ["$browser", "$exceptionHandler", function (b, a) {
            return fd(function (a) {
                b.defer(a)
            }, a)
        }]
    }

    function fd(b, a) {
        function c(a, b, c) {
            function d(b) {
                return function (c) {
                    e || (e = !0, b.call(a, c))
                }
            }

            var e = !1;
            return [d(b), d(c)]
        }

        function d() {
            this.$$state = {status: 0}
        }

        function e(a, b) {
            return function (c) {
                b.call(a, c)
            }
        }

        function f(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0, b(function () {
                var b, d, e;
                e = c.pending;
                c.processScheduled = !1;
                c.pending = t;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0];
                    b = e[f][c.status];
                    try {
                        G(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                    } catch (h) {
                        d.reject(h), a(h)
                    }
                }
            }))
        }

        function g() {
            this.promise = new d;
            this.resolve = e(this, this.resolve);
            this.reject = e(this, this.reject);
            this.notify = e(this, this.notify)
        }

        var h = R("$q", TypeError);
        d.prototype = {
            then: function (a, b, c) {
                var d = new g;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status &&
                f(this.$$state);
                return d.promise
            }, "catch": function (a) {
                return this.then(null, a)
            }, "finally": function (a, b) {
                return this.then(function (b) {
                    return k(b, !0, a)
                }, function (b) {
                    return k(b, !1, a)
                }, b)
            }
        };
        g.prototype = {
            resolve: function (a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a))
            }, $$resolve: function (b) {
                var d, e;
                e = c(this, this.$$resolve, this.$$reject);
                try {
                    if (J(b) || G(b))d = b && b.then;
                    G(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value =
                        b, this.promise.$$state.status = 1, f(this.promise.$$state))
                } catch (g) {
                    e[1](g), a(g)
                }
            }, reject: function (a) {
                this.promise.$$state.status || this.$$reject(a)
            }, $$reject: function (a) {
                this.promise.$$state.value = a;
                this.promise.$$state.status = 2;
                f(this.promise.$$state)
            }, notify: function (c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && b(function () {
                    for (var b, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0];
                        b = d[f][3];
                        try {
                            e.notify(G(b) ? b(c) : c)
                        } catch (h) {
                            a(h)
                        }
                    }
                })
            }
        };
        var l = function (a, b) {
            var c = new g;
            b ? c.resolve(a) :
                c.reject(a);
            return c.promise
        }, k = function (a, b, c) {
            var d = null;
            try {
                G(c) && (d = c())
            } catch (e) {
                return l(e, !1)
            }
            return d && G(d.then) ? d.then(function () {
                return l(a, b)
            }, function (a) {
                return l(a, !1)
            }) : l(a, b)
        }, n = function (a, b, c, d) {
            var e = new g;
            e.resolve(a);
            return e.promise.then(b, c, d)
        }, p = function u(a) {
            if (!G(a))throw h("norslvr", a);
            if (!(this instanceof u))return new u(a);
            var b = new g;
            a(function (a) {
                b.resolve(a)
            }, function (a) {
                b.reject(a)
            });
            return b.promise
        };
        p.defer = function () {
            return new g
        };
        p.reject = function (a) {
            var b = new g;
            b.reject(a);
            return b.promise
        };
        p.when = n;
        p.all = function (a) {
            var b = new g, c = 0, d = H(a) ? [] : {};
            r(a, function (a, e) {
                c++;
                n(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        };
        return p
    }

    function $e() {
        this.$get = ["$window", "$timeout", function (b, a) {
            var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
                var b =
                    c(a);
                return function () {
                    d(b)
                }
            } : function (b) {
                var c = a(b, 16.66, !1);
                return function () {
                    a.cancel(c)
                }
            };
            f.supported = e;
            return f
        }]
    }

    function Pe() {
        function b(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$id = ++ob;
                this.$$ChildScope = null
            }

            b.prototype = a;
            return b
        }

        var a = 10, c = R("$rootScope"), d = null, e = null;
        this.digestTtl = function (b) {
            arguments.length && (a = b);
            return a
        };
        this.$get = ["$injector", "$exceptionHandler",
            "$parse", "$browser", function (f, g, h, l) {
                function k(a) {
                    a.currentScope.$$destroyed = !0
                }

                function n() {
                    this.$id = ++ob;
                    this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                    this.$root = this;
                    this.$$destroyed = !1;
                    this.$$listeners = {};
                    this.$$listenerCount = {};
                    this.$$isolateBindings = null
                }

                function p(a) {
                    if (v.$$phase)throw c("inprog", v.$$phase);
                    v.$$phase = a
                }

                function q(a, b, c) {
                    do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
                    while (a = a.$parent)
                }

                function u() {
                }

                function s() {
                    for (; t.length;)try {
                        t.shift()()
                    } catch (a) {
                        g(a)
                    }
                    e = null
                }

                function M() {
                    null === e && (e = l.defer(function () {
                        v.$apply(s)
                    }))
                }

                n.prototype = {
                    constructor: n, $new: function (a, c) {
                        var d;
                        c = c || this;
                        a ? (d = new n, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = b(this)), d = new this.$$ChildScope);
                        d.$parent = c;
                        d.$$prevSibling = c.$$childTail;
                        c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
                        (a || c != this) && d.$on("$destroy", k);
                        return d
                    },
                    $watch: function (a, b, c) {
                        var e = h(a);
                        if (e.$$watchDelegate)return e.$$watchDelegate(this, b, c, e);
                        var f = this.$$watchers, g = {fn: b, last: u, get: e, exp: a, eq: !!c};
                        d = null;
                        G(b) || (g.fn = E);
                        f || (f = this.$$watchers = []);
                        f.unshift(g);
                        return function () {
                            Xa(f, g);
                            d = null
                        }
                    }, $watchGroup: function (a, b) {
                        function c() {
                            h = !1;
                            k ? (k = !1, b(e, e, g)) : b(e, d, g)
                        }

                        var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, k = !0;
                        if (!a.length) {
                            var l = !0;
                            g.$evalAsync(function () {
                                l && b(e, e, g)
                            });
                            return function () {
                                l = !1
                            }
                        }
                        if (1 === a.length)return this.$watch(a[0],
                            function (a, c, f) {
                                e[0] = a;
                                d[0] = c;
                                b(e, a === c ? e : d, f)
                            });
                        r(a, function (a, b) {
                            var k = g.$watch(a, function (a, f) {
                                e[b] = a;
                                d[b] = f;
                                h || (h = !0, g.$evalAsync(c))
                            });
                            f.push(k)
                        });
                        return function () {
                            for (; f.length;)f.shift()()
                        }
                    }, $watchCollection: function (a, b) {
                        function c(a) {
                            e = a;
                            var b, d, g, h;
                            if (!x(e)) {
                                if (J(e))if (Sa(e))for (f !== p && (f = p, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++)h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g); else {
                                    f !== n && (f = n = {}, u = 0, l++);
                                    a = 0;
                                    for (b in e)e.hasOwnProperty(b) && (a++, g = e[b], h =
                                        f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++));
                                    if (u > a)for (b in l++, f)e.hasOwnProperty(b) || (u--, delete f[b])
                                } else f !== e && (f = e, l++);
                                return l
                            }
                        }

                        c.$stateful = !0;
                        var d = this, e, f, g, k = 1 < b.length, l = 0, q = h(a, c), p = [], n = {}, m = !0, u = 0;
                        return this.$watch(q, function () {
                            m ? (m = !1, b(e, e, d)) : b(e, g, d);
                            if (k)if (J(e))if (Sa(e)) {
                                g = Array(e.length);
                                for (var a = 0; a < e.length; a++)g[a] = e[a]
                            } else for (a in g = {}, e)tc.call(e, a) && (g[a] = e[a]); else g = e
                        })
                    }, $digest: function () {
                        var b, f, h, k, q, n, r = a, t, O = [], M, y;
                        p("$digest");
                        l.$$checkUrlChange();
                        this === v && null !== e && (l.defer.cancel(e), s());
                        d = null;
                        do {
                            n = !1;
                            for (t = this; m.length;) {
                                try {
                                    y = m.shift(), y.scope.$eval(y.expression, y.locals)
                                } catch (w) {
                                    g(w)
                                }
                                d = null
                            }
                            a:do {
                                if (k = t.$$watchers)for (q = k.length; q--;)try {
                                    if (b = k[q])if ((f = b.get(t)) !== (h = b.last) && !(b.eq ? ha(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h)))n = !0, d = b, b.last = b.eq ? Da(f, null) : f, b.fn(f, h === u ? f : h, t), 5 > r && (M = 4 - r, O[M] || (O[M] = []), O[M].push({
                                        msg: G(b.exp) ? "fn: " + (b.exp.name || b.exp.toString()) : b.exp,
                                        newVal: f,
                                        oldVal: h
                                    })); else if (b ===
                                        d) {
                                        n = !1;
                                        break a
                                    }
                                } catch (A) {
                                    g(A)
                                }
                                if (!(k = t.$$childHead || t !== this && t.$$nextSibling))for (; t !== this && !(k = t.$$nextSibling);)t = t.$parent
                            } while (t = k);
                            if ((n || m.length) && !r--)throw v.$$phase = null, c("infdig", a, O);
                        } while (n || m.length);
                        for (v.$$phase = null; F.length;)try {
                            F.shift()()
                        } catch (x) {
                            g(x)
                        }
                    }, $destroy: function () {
                        if (!this.$$destroyed) {
                            var a = this.$parent;
                            this.$broadcast("$destroy");
                            this.$$destroyed = !0;
                            if (this !== v) {
                                for (var b in this.$$listenerCount)q(this, this.$$listenerCount[b], b);
                                a.$$childHead == this && (a.$$childHead =
                                    this.$$nextSibling);
                                a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                                this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                                this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                                this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = E;
                                this.$on = this.$watch = this.$watchGroup = function () {
                                    return E
                                };
                                this.$$listeners = {};
                                this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                            }
                        }
                    }, $eval: function (a,
                                        b) {
                        return h(a)(this, b)
                    }, $evalAsync: function (a, b) {
                        v.$$phase || m.length || l.defer(function () {
                            m.length && v.$digest()
                        });
                        m.push({scope: this, expression: a, locals: b})
                    }, $$postDigest: function (a) {
                        F.push(a)
                    }, $apply: function (a) {
                        try {
                            return p("$apply"), this.$eval(a)
                        } catch (b) {
                            g(b)
                        } finally {
                            v.$$phase = null;
                            try {
                                v.$digest()
                            } catch (c) {
                                throw g(c), c;
                            }
                        }
                    }, $applyAsync: function (a) {
                        function b() {
                            c.$eval(a)
                        }

                        var c = this;
                        a && t.push(b);
                        M()
                    }, $on: function (a, b) {
                        var c = this.$$listeners[a];
                        c || (this.$$listeners[a] = c = []);
                        c.push(b);
                        var d = this;
                        do d.$$listenerCount[a] ||
                        (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                        var e = this;
                        return function () {
                            var d = c.indexOf(b);
                            -1 !== d && (c[d] = null, q(e, 1, a))
                        }
                    }, $emit: function (a, b) {
                        var c = [], d, e = this, f = !1, h = {
                            name: a, targetScope: e, stopPropagation: function () {
                                f = !0
                            }, preventDefault: function () {
                                h.defaultPrevented = !0
                            }, defaultPrevented: !1
                        }, k = Ya([h], arguments, 1), l, q;
                        do {
                            d = e.$$listeners[a] || c;
                            h.currentScope = e;
                            l = 0;
                            for (q = d.length; l < q; l++)if (d[l])try {
                                d[l].apply(null, k)
                            } catch (p) {
                                g(p)
                            } else d.splice(l, 1), l--, q--;
                            if (f)return h.currentScope =
                                null, h;
                            e = e.$parent
                        } while (e);
                        h.currentScope = null;
                        return h
                    }, $broadcast: function (a, b) {
                        var c = this, d = this, e = {
                            name: a, targetScope: this, preventDefault: function () {
                                e.defaultPrevented = !0
                            }, defaultPrevented: !1
                        };
                        if (!this.$$listenerCount[a])return e;
                        for (var f = Ya([e], arguments, 1), h, l; c = d;) {
                            e.currentScope = c;
                            d = c.$$listeners[a] || [];
                            h = 0;
                            for (l = d.length; h < l; h++)if (d[h])try {
                                d[h].apply(null, f)
                            } catch (k) {
                                g(k)
                            } else d.splice(h, 1), h--, l--;
                            if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))for (; c !== this && !(d =
                                c.$$nextSibling);)c = c.$parent
                        }
                        e.currentScope = null;
                        return e
                    }
                };
                var v = new n, m = v.$$asyncQueue = [], F = v.$$postDigestQueue = [], t = v.$$applyAsyncQueue = [];
                return v
            }]
    }

    function Sd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (a) {
            return y(a) ? (b = a, this) : b
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return y(b) ? (a = b, this) : a
        };
        this.$get = function () {
            return function (c, d) {
                var e = d ? a : b, f;
                f = Aa(c).href;
                return "" === f || f.match(e) ? c : "unsafe:" +
                f
            }
        }
    }

    function Df(b) {
        if ("self" === b)return b;
        if (C(b)) {
            if (-1 < b.indexOf("***"))throw Ba("iwcard", b);
            b = gd(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + b + "$")
        }
        if (Ua(b))return new RegExp("^" + b.source + "$");
        throw Ba("imatcher");
    }

    function hd(b) {
        var a = [];
        y(b) && r(b, function (b) {
            a.push(Df(b))
        });
        return a
    }

    function Te() {
        this.SCE_CONTEXTS = pa;
        var b = ["self"], a = [];
        this.resourceUrlWhitelist = function (a) {
            arguments.length && (b = hd(a));
            return b
        };
        this.resourceUrlBlacklist = function (b) {
            arguments.length &&
            (a = hd(b));
            return a
        };
        this.$get = ["$injector", function (c) {
            function d(a, b) {
                return "self" === a ? $c(b) : !!a.exec(b.href)
            }

            function e(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }

            var f = function (a) {
                throw Ba("unsafe");
            };
            c.has("$sanitize") && (f = c.get("$sanitize"));
            var g = e(), h = {};
            h[pa.HTML] = e(g);
            h[pa.CSS] = e(g);
            h[pa.URL] =
                e(g);
            h[pa.JS] = e(g);
            h[pa.RESOURCE_URL] = e(h[pa.URL]);
            return {
                trustAs: function (a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c)throw Ba("icontext", a, b);
                    if (null === b || b === t || "" === b)return b;
                    if ("string" !== typeof b)throw Ba("itype", a);
                    return new c(b)
                }, getTrusted: function (c, e) {
                    if (null === e || e === t || "" === e)return e;
                    var g = h.hasOwnProperty(c) ? h[c] : null;
                    if (g && e instanceof g)return e.$$unwrapTrustedValue();
                    if (c === pa.RESOURCE_URL) {
                        var g = Aa(e.toString()), p, q, u = !1;
                        p = 0;
                        for (q = b.length; p < q; p++)if (d(b[p], g)) {
                            u = !0;
                            break
                        }
                        if (u)for (p =
                                       0, q = a.length; p < q; p++)if (d(a[p], g)) {
                            u = !1;
                            break
                        }
                        if (u)return e;
                        throw Ba("insecurl", e.toString());
                    }
                    if (c === pa.HTML)return f(e);
                    throw Ba("unsafe");
                }, valueOf: function (a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function Se() {
        var b = !0;
        this.enabled = function (a) {
            arguments.length && (b = !!a);
            return b
        };
        this.$get = ["$parse", "$sceDelegate", function (a, c) {
            if (b && 8 > Qa)throw Ba("iequirks");
            var d = sa(pa);
            d.isEnabled = function () {
                return b
            };
            d.trustAs = c.trustAs;
            d.getTrusted = c.getTrusted;
            d.valueOf = c.valueOf;
            b || (d.trustAs =
                d.getTrusted = function (a, b) {
                    return b
                }, d.valueOf = ra);
            d.parseAs = function (b, c) {
                var e = a(c);
                return e.literal && e.constant ? e : a(c, function (a) {
                    return d.getTrusted(b, a)
                })
            };
            var e = d.parseAs, f = d.getTrusted, g = d.trustAs;
            r(pa, function (a, b) {
                var c = z(b);
                d[db("parse_as_" + c)] = function (b) {
                    return e(a, b)
                };
                d[db("get_trusted_" + c)] = function (b) {
                    return f(a, b)
                };
                d[db("trust_as_" + c)] = function (b) {
                    return g(a, b)
                }
            });
            return d
        }]
    }

    function Ue() {
        this.$get = ["$window", "$document", function (b, a) {
            var c = {}, d = aa((/android (\d+)/.exec(z((b.navigator ||
            {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g, h = /^(Moz|webkit|ms)(?=[A-Z])/, l = f.body && f.body.style, k = !1, n = !1;
            if (l) {
                for (var p in l)if (k = h.exec(p)) {
                    g = k[0];
                    g = g.substr(0, 1).toUpperCase() + g.substr(1);
                    break
                }
                g || (g = "WebkitOpacity"in l && "webkit");
                k = !!("transition"in l || g + "Transition"in l);
                n = !!("animation"in l || g + "Animation"in l);
                !d || k && n || (k = C(f.body.style.webkitTransition), n = C(f.body.style.webkitAnimation))
            }
            return {
                history: !(!b.history || !b.history.pushState || 4 > d || e), hasEvent: function (a) {
                    if ("input" ===
                        a && 11 >= Qa)return !1;
                    if (x(c[a])) {
                        var b = f.createElement("div");
                        c[a] = "on" + a in b
                    }
                    return c[a]
                }, csp: bb(), vendorPrefix: g, transitions: k, animations: n, android: d
            }
        }]
    }

    function We() {
        this.$get = ["$templateCache", "$http", "$q", function (b, a, c) {
            function d(e, f) {
                d.totalPendingRequests++;
                var g = a.defaults && a.defaults.transformResponse;
                H(g) ? g = g.filter(function (a) {
                    return a !== Zb
                }) : g === Zb && (g = null);
                return a.get(e, {cache: b, transformResponse: g})["finally"](function () {
                    d.totalPendingRequests--
                }).then(function (a) {
                        return a.data
                    },
                    function (a) {
                        if (!f)throw la("tpload", e);
                        return c.reject(a)
                    })
            }

            d.totalPendingRequests = 0;
            return d
        }]
    }

    function Xe() {
        this.$get = ["$rootScope", "$browser", "$location", function (b, a, c) {
            return {
                findBindings: function (a, b, c) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    r(a, function (a) {
                        var d = ca.element(a).data("$binding");
                        d && r(d, function (d) {
                            c ? (new RegExp("(^|\\s)" + gd(b) + "(\\s|\\||$)")).test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a)
                        })
                    });
                    return g
                }, findModels: function (a, b, c) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"],
                             h = 0; h < g.length; ++h) {
                        var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                        if (l.length)return l
                    }
                }, getLocation: function () {
                    return c.url()
                }, setLocation: function (a) {
                    a !== c.url() && (c.url(a), b.$digest())
                }, whenStable: function (b) {
                    a.notifyWhenNoOutstandingRequests(b)
                }
            }
        }]
    }

    function Ye() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (b, a, c, d, e) {
            function f(f, l, k) {
                var n = y(k) && !k, p = (n ? d : c).defer(), q = p.promise;
                l = a.defer(function () {
                    try {
                        p.resolve(f())
                    } catch (a) {
                        p.reject(a), e(a)
                    } finally {
                        delete g[q.$$timeoutId]
                    }
                    n ||
                    b.$apply()
                }, l);
                q.$$timeoutId = l;
                g[l] = p;
                return q
            }

            var g = {};
            f.cancel = function (b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
            };
            return f
        }]
    }

    function Aa(b) {
        Qa && ($.setAttribute("href", b), b = $.href);
        $.setAttribute("href", b);
        return {
            href: $.href,
            protocol: $.protocol ? $.protocol.replace(/:$/, "") : "",
            host: $.host,
            search: $.search ? $.search.replace(/^\?/, "") : "",
            hash: $.hash ? $.hash.replace(/^#/, "") : "",
            hostname: $.hostname,
            port: $.port,
            pathname: "/" ===
            $.pathname.charAt(0) ? $.pathname : "/" + $.pathname
        }
    }

    function $c(b) {
        b = C(b) ? Aa(b) : b;
        return b.protocol === id.protocol && b.host === id.host
    }

    function Ze() {
        this.$get = ea(Q)
    }

    function Fc(b) {
        function a(c, d) {
            if (J(c)) {
                var e = {};
                r(c, function (b, c) {
                    e[c] = a(c, b)
                });
                return e
            }
            return b.factory(c + "Filter", d)
        }

        this.register = a;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + "Filter")
            }
        }];
        a("currency", jd);
        a("date", kd);
        a("filter", Ef);
        a("json", Ff);
        a("limitTo", Gf);
        a("lowercase", Hf);
        a("number", ld);
        a("orderBy", md);
        a("uppercase",
            If)
    }

    function Ef() {
        return function (b, a, c) {
            if (!H(b))return b;
            var d;
            switch (typeof a) {
                case "function":
                    break;
                case "boolean":
                case "number":
                case "string":
                    d = !0;
                case "object":
                    a = Jf(a, c, d);
                    break;
                default:
                    return b
            }
            return b.filter(a)
        }
    }

    function Jf(b, a, c) {
        var d = J(b) && "$"in b;
        !0 === a ? a = ha : G(a) || (a = function (a, b) {
            if (J(a) || J(b))return !1;
            a = z("" + a);
            b = z("" + b);
            return -1 !== a.indexOf(b)
        });
        return function (e) {
            return d && !J(e) ? Ha(e, b.$, a, !1) : Ha(e, b, a, c)
        }
    }

    function Ha(b, a, c, d, e) {
        var f = null !== b ? typeof b : "null", g = null !== a ? typeof a :
            "null";
        if ("string" === g && "!" === a.charAt(0))return !Ha(b, a.substring(1), c, d);
        if (H(b))return b.some(function (b) {
            return Ha(b, a, c, d)
        });
        switch (f) {
            case "object":
                var h;
                if (d) {
                    for (h in b)if ("$" !== h.charAt(0) && Ha(b[h], a, c, !0))return !0;
                    return e ? !1 : Ha(b, a, c, !1)
                }
                if ("object" === g) {
                    for (h in a)if (e = a[h], !G(e) && !x(e) && (f = "$" === h, !Ha(f ? b : b[h], e, c, f, f)))return !1;
                    return !0
                }
                return c(b, a);
            case "function":
                return !1;
            default:
                return c(b, a)
        }
    }

    function jd(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d, e) {
            x(d) && (d = a.CURRENCY_SYM);
            x(e) &&
            (e = a.PATTERNS[1].maxFrac);
            return null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d)
        }
    }

    function ld(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            return null == b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function nd(b, a, c, d, e) {
        if (!isFinite(b) || J(b))return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = b + "", h = "", l = [], k = !1;
        if (-1 !== g.indexOf("e")) {
            var n = g.match(/([\d\.]+)e(-?)(\d+)/);
            n && "-" == n[2] && n[3] > e + 1 ? b = 0 : (h = g, k = !0)
        }
        if (k)0 < e && 1 > b && (h = b.toFixed(e), b = parseFloat(h)); else {
            g = (g.split(od)[1] ||
            "").length;
            x(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            var g = ("" + b).split(od), k = g[0], g = g[1] || "", p = 0, q = a.lgSize, u = a.gSize;
            if (k.length >= q + u)for (p = k.length - q, n = 0; n < p; n++)0 === (p - n) % u && 0 !== n && (h += c), h += k.charAt(n);
            for (n = p; n < k.length; n++)0 === (k.length - n) % q && 0 !== n && (h += c), h += k.charAt(n);
            for (; g.length < e;)g += "0";
            e && "0" !== e && (h += d + g.substr(0, e))
        }
        0 === b && (f = !1);
        l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);
        return l.join("")
    }

    function Ib(b, a,
                c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a;)b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function U(b, a, c, d) {
        c = c || 0;
        return function (e) {
            e = e["get" + b]();
            if (0 < c || e > -c)e += c;
            0 === e && -12 == c && (e = 12);
            return Ib(e, a, d)
        }
    }

    function Jb(b, a) {
        return function (c, d) {
            var e = c["get" + b](), f = ub(a ? "SHORT" + b : b);
            return d[f][e]
        }
    }

    function pd(b) {
        var a = (new Date(b, 0, 1)).getDay();
        return new Date(b, 0, (4 >= a ? 5 : 12) - a)
    }

    function qd(b) {
        return function (a) {
            var c = pd(a.getFullYear());
            a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() +
                    (4 - a.getDay())) - +c;
            a = 1 + Math.round(a / 6048E5);
            return Ib(a, b)
        }
    }

    function ic(b, a) {
        return 0 >= b.getFullYear() ? a.ERAS[0] : a.ERAS[1]
    }

    function kd(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, l = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = aa(b[9] + b[10]), g = aa(b[9] + b[11]));
                h.call(a, aa(b[1]), aa(b[2]) - 1, aa(b[3]));
                f = aa(b[4] || 0) - f;
                g = aa(b[5] || 0) - g;
                h = aa(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                l.call(a, f, g, h, b)
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, e, f) {
            var g = "", h = [], l, k;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            C(c) && (c = Kf.test(c) ? aa(c) : a(c));
            Y(c) && (c = new Date(c));
            if (!ga(c))return c;
            for (; e;)(k = Lf.exec(e)) ? (h = Ya(h, k, 1), e = h.pop()) : (h.push(e), e = null);
            f && "UTC" === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));
            r(h, function (a) {
                l = Mf[a];
                g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function Ff() {
        return function (b, a) {
            x(a) && (a = 2);
            return $a(b, a)
        }
    }

    function Gf() {
        return function (b,
                         a) {
            Y(b) && (b = b.toString());
            return H(b) || C(b) ? (a = Infinity === Math.abs(Number(a)) ? Number(a) : aa(a)) ? 0 < a ? b.slice(0, a) : b.slice(a) : C(b) ? "" : [] : b
        }
    }

    function md(b) {
        return function (a, c, d) {
            function e(a, b) {
                return b ? function (b, c) {
                    return a(c, b)
                } : a
            }

            function f(a) {
                switch (typeof a) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function g(a) {
                return null === a ? "null" : "function" === typeof a.valueOf && (a = a.valueOf(), f(a)) || "function" === typeof a.toString && (a = a.toString(), f(a)) ? a : ""
            }

            function h(a, b) {
                var c =
                    typeof a, d = typeof b;
                c === d && "object" === c && (a = g(a), b = g(b));
                return c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
            }

            if (!Sa(a))return a;
            c = H(c) ? c : [c];
            0 === c.length && (c = ["+"]);
            c = c.map(function (a) {
                var c = !1, d = a || ra;
                if (C(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0))c = "-" == a.charAt(0), a = a.substring(1);
                    if ("" === a)return e(h, c);
                    d = b(a);
                    if (d.constant) {
                        var f = d();
                        return e(function (a, b) {
                            return h(a[f], b[f])
                        }, c)
                    }
                }
                return e(function (a, b) {
                    return h(d(a), d(b))
                }, c)
            });
            return Za.call(a).sort(e(function (a,
                                               b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e)return e
                }
                return 0
            }, d))
        }
    }

    function Ia(b) {
        G(b) && (b = {link: b});
        b.restrict = b.restrict || "AC";
        return ea(b)
    }

    function rd(b, a, c, d, e) {
        var f = this, g = [], h = f.$$parentForm = b.parent().controller("form") || Kb;
        f.$error = {};
        f.$$success = {};
        f.$pending = t;
        f.$name = e(a.name || a.ngForm || "")(c);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        h.$addControl(f);
        f.$rollbackViewValue = function () {
            r(g, function (a) {
                a.$rollbackViewValue()
            })
        };
        f.$commitViewValue = function () {
            r(g,
                function (a) {
                    a.$commitViewValue()
                })
        };
        f.$addControl = function (a) {
            La(a.$name, "input");
            g.push(a);
            a.$name && (f[a.$name] = a)
        };
        f.$$renameControl = function (a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] = a;
            a.$name = b
        };
        f.$removeControl = function (a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            r(f.$pending, function (b, c) {
                f.$setValidity(c, null, a)
            });
            r(f.$error, function (b, c) {
                f.$setValidity(c, null, a)
            });
            r(f.$$success, function (b, c) {
                f.$setValidity(c, null, a)
            });
            Xa(g, a)
        };
        sd({
            ctrl: this, $element: b, set: function (a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            }, unset: function (a, b, c) {
                var d = a[b];
                d && (Xa(d, c), 0 === d.length && delete a[b])
            }, parentForm: h, $animate: d
        });
        f.$setDirty = function () {
            d.removeClass(b, Ra);
            d.addClass(b, Lb);
            f.$dirty = !0;
            f.$pristine = !1;
            h.$setDirty()
        };
        f.$setPristine = function () {
            d.setClass(b, Ra, Lb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine = !0;
            f.$submitted = !1;
            r(g, function (a) {
                a.$setPristine()
            })
        };
        f.$setUntouched = function () {
            r(g, function (a) {
                a.$setUntouched()
            })
        };
        f.$setSubmitted = function () {
            d.addClass(b, "ng-submitted");
            f.$submitted = !0;
            h.$setSubmitted()
        }
    }

    function jc(b) {
        b.$formatters.push(function (a) {
            return b.$isEmpty(a) ? a : a.toString()
        })
    }

    function jb(b, a, c, d, e, f) {
        var g = z(a[0].type);
        if (!e.android) {
            var h = !1;
            a.on("compositionstart", function (a) {
                h = !0
            });
            a.on("compositionend", function () {
                h = !1;
                l()
            })
        }
        var l = function (b) {
            k && (f.defer.cancel(k), k = null);
            if (!h) {
                var e = a.val();
                b = b && b.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = N(e));
                (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b)
            }
        };
        if (e.hasEvent("input"))a.on("input",
            l); else {
            var k, n = function (a, b, c) {
                k || (k = f.defer(function () {
                    k = null;
                    b && b.value === c || l(a)
                }))
            };
            a.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || n(a, this, this.value)
            });
            if (e.hasEvent("paste"))a.on("paste cut", n)
        }
        a.on("change", l);
        d.$render = function () {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        }
    }

    function Mb(b, a) {
        return function (c, d) {
            var e, f;
            if (ga(c))return c;
            if (C(c)) {
                '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
                if (Nf.test(c))return new Date(c);
                b.lastIndex =
                    0;
                if (e = b.exec(c))return e.shift(), f = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1E3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, r(e, function (b, c) {
                    c < a.length && (f[a[c]] = +b)
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
            }
            return NaN
        }
    }

    function kb(b, a, c, d) {
        return function (e, f, g, h, l, k, n) {
            function p(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function q(a) {
                return y(a) ? ga(a) ? a : c(a) : t
            }

            td(e, f, g, h);
            jb(e, f, g, h, l, k);
            var u = h && h.$options && h.$options.timezone, s;
            h.$$parserName = b;
            h.$parsers.push(function (b) {
                return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, s), "UTC" === u && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : t
            });
            h.$formatters.push(function (a) {
                if (a && !ga(a))throw Nb("datefmt", a);
                if (p(a)) {
                    if ((s = a) && "UTC" === u) {
                        var b = 6E4 * s.getTimezoneOffset();
                        s = new Date(s.getTime() + b)
                    }
                    return n("date")(a, d, u)
                }
                s = null;
                return ""
            });
            if (y(g.min) || g.ngMin) {
                var r;
                h.$validators.min = function (a) {
                    return !p(a) || x(r) || c(a) >= r
                };
                g.$observe("min", function (a) {
                    r = q(a);
                    h.$validate()
                })
            }
            if (y(g.max) || g.ngMax) {
                var v;
                h.$validators.max = function (a) {
                    return !p(a) || x(v) || c(a) <= v
                };
                g.$observe("max", function (a) {
                    v = q(a);
                    h.$validate()
                })
            }
        }
    }

    function td(b, a, c, d) {
        (d.$$hasNativeValidators = J(a[0].validity)) && d.$parsers.push(function (b) {
            var c = a.prop("validity") || {};
            return c.badInput && !c.typeMismatch ? t : b
        })
    }

    function ud(b, a, c, d, e) {
        if (y(d)) {
            b = b(d);
            if (!b.constant)throw R("ngModel")("constexpr", c, d);
            return b(a)
        }
        return e
    }

    function kc(b, a) {
        b = "ngClass" + b;
        return ["$animate",
            function (c) {
                function d(a, b) {
                    var c = [], d = 0;
                    a:for (; d < a.length; d++) {
                        for (var e = a[d], n = 0; n < b.length; n++)if (e == b[n])continue a;
                        c.push(e)
                    }
                    return c
                }

                function e(a) {
                    if (!H(a)) {
                        if (C(a))return a.split(" ");
                        if (J(a)) {
                            var b = [];
                            r(a, function (a, c) {
                                a && (b = b.concat(c.split(" ")))
                            });
                            return b
                        }
                    }
                    return a
                }

                return {
                    restrict: "AC", link: function (f, g, h) {
                        function l(a, b) {
                            var c = g.data("$classCounts") || {}, d = [];
                            r(a, function (a) {
                                if (0 < b || c[a])c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                            });
                            g.data("$classCounts", c);
                            return d.join(" ")
                        }

                        function k(b) {
                            if (!0 ===
                                a || f.$index % 2 === a) {
                                var k = e(b || []);
                                if (!n) {
                                    var u = l(k, 1);
                                    h.$addClass(u)
                                } else if (!ha(b, n)) {
                                    var s = e(n), u = d(k, s), k = d(s, k), u = l(u, 1), k = l(k, -1);
                                    u && u.length && c.addClass(g, u);
                                    k && k.length && c.removeClass(g, k)
                                }
                            }
                            n = sa(b)
                        }

                        var n;
                        f.$watch(h[b], k, !0);
                        h.$observe("class", function (a) {
                            k(f.$eval(h[b]))
                        });
                        "ngClass" !== b && f.$watch("$index", function (c, d) {
                            var g = c & 1;
                            if (g !== (d & 1)) {
                                var k = e(f.$eval(h[b]));
                                g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g))
                            }
                        })
                    }
                }
            }]
    }

    function sd(b) {
        function a(a, b) {
            b && !f[a] ? (k.addClass(e, a),
                f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
        }

        function c(b, c) {
            b = b ? "-" + vc(b, "-") : "";
            a(lb + b, !0 === c);
            a(vd + b, !1 === c)
        }

        var d = b.ctrl, e = b.$element, f = {}, g = b.set, h = b.unset, l = b.parentForm, k = b.$animate;
        f[vd] = !(f[lb] = e.hasClass(lb));
        d.$setValidity = function (b, e, f) {
            e === t ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), wd(d.$pending) && (d.$pending = t));
            Wa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
            d.$pending ? (a(xd,
                !0), d.$valid = d.$invalid = t, c("", null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, c("", d.$valid));
            e = d.$pending && d.$pending[b] ? t : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
            c(b, e);
            l.$setValidity(b, e, d)
        }
    }

    function wd(b) {
        if (b)for (var a in b)return !1;
        return !0
    }

    var Of = /^\/(.+)\/([a-z]*)$/, z = function (b) {
        return C(b) ? b.toLowerCase() : b
    }, tc = Object.prototype.hasOwnProperty, ub = function (b) {
        return C(b) ? b.toUpperCase() : b
    }, Qa, A, ta, Za = [].slice, qf = [].splice, Pf = [].push, Ca = Object.prototype.toString, Ja = R("ng"), ca = Q.angular ||
        (Q.angular = {}), cb, ob = 0;
    Qa = W.documentMode;
    E.$inject = [];
    ra.$inject = [];
    var H = Array.isArray, N = function (b) {
        return C(b) ? b.trim() : b
    }, gd = function (b) {
        return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, bb = function () {
        if (y(bb.isActive_))return bb.isActive_;
        var b = !(!W.querySelector("[ng-csp]") && !W.querySelector("[data-ng-csp]"));
        if (!b)try {
            new Function("")
        } catch (a) {
            b = !0
        }
        return bb.isActive_ = b
    }, rb = ["ng-", "data-ng-", "ng:", "x-ng-"], Md = /[A-Z]/g, wc = !1, Qb, qa = 1, pb = 3, Qd = {
        full: "1.3.15", major: 1,
        minor: 3, dot: 15, codeName: "locality-filtration"
    };
    T.expando = "ng339";
    var zb = T.cache = {}, hf = 1;
    T._data = function (b) {
        return this.cache[b[this.expando]] || {}
    };
    var cf = /([\:\-\_]+(.))/g, df = /^moz([A-Z])/, Qf = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Tb = R("jqLite"), gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Sb = /<|&#?\w+;/, ef = /<([\w:]+)/, ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ja = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>",
            "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ja.optgroup = ja.option;
    ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead;
    ja.th = ja.td;
    var Ka = T.prototype = {
        ready: function (b) {
            function a() {
                c || (c = !0, b())
            }

            var c = !1;
            "complete" === W.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), T(Q).on("load", a))
        }, toString: function () {
            var b = [];
            r(this, function (a) {
                b.push("" + a)
            });
            return "[" + b.join(", ") + "]"
        }, eq: function (b) {
            return 0 <=
            b ? A(this[b]) : A(this[this.length + b])
        }, length: 0, push: Pf, sort: [].sort, splice: [].splice
    }, Eb = {};
    r("multiple selected checked disabled readOnly required open".split(" "), function (b) {
        Eb[z(b)] = b
    });
    var Oc = {};
    r("input select option textarea button form details".split(" "), function (b) {
        Oc[b] = !0
    });
    var Pc = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    r({data: Vb, removeData: xb}, function (b, a) {
        T[a] = b
    });
    r({
        data: Vb, inheritedData: Db, scope: function (b) {
            return A.data(b, "$scope") ||
                Db(b.parentNode || b, ["$isolateScope", "$scope"])
        }, isolateScope: function (b) {
            return A.data(b, "$isolateScope") || A.data(b, "$isolateScopeNoTemplate")
        }, controller: Kc, injector: function (b) {
            return Db(b, "$injector")
        }, removeAttr: function (b, a) {
            b.removeAttribute(a)
        }, hasClass: Ab, css: function (b, a, c) {
            a = db(a);
            if (y(c))b.style[a] = c; else return b.style[a]
        }, attr: function (b, a, c) {
            var d = z(a);
            if (Eb[d])if (y(c))c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || E).specified ?
                d : t; else if (y(c))b.setAttribute(a, c); else if (b.getAttribute)return b = b.getAttribute(a, 2), null === b ? t : b
        }, prop: function (b, a, c) {
            if (y(c))b[a] = c; else return b[a]
        }, text: function () {
            function b(a, b) {
                if (x(b)) {
                    var d = a.nodeType;
                    return d === qa || d === pb ? a.textContent : ""
                }
                a.textContent = b
            }

            b.$dv = "";
            return b
        }(), val: function (b, a) {
            if (x(a)) {
                if (b.multiple && "select" === va(b)) {
                    var c = [];
                    r(b.options, function (a) {
                        a.selected && c.push(a.value || a.text)
                    });
                    return 0 === c.length ? null : c
                }
                return b.value
            }
            b.value = a
        }, html: function (b, a) {
            if (x(a))return b.innerHTML;
            wb(b, !0);
            b.innerHTML = a
        }, empty: Lc
    }, function (b, a) {
        T.prototype[a] = function (a, d) {
            var e, f, g = this.length;
            if (b !== Lc && (2 == b.length && b !== Ab && b !== Kc ? a : d) === t) {
                if (J(a)) {
                    for (e = 0; e < g; e++)if (b === Vb)b(this[e], a); else for (f in a)b(this[e], f, a[f]);
                    return this
                }
                e = b.$dv;
                g = e === t ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = b(this[f], a, d);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++)b(this[e], a, d);
            return this
        }
    });
    r({
        removeData: xb, on: function a(c, d, e, f) {
            if (y(f))throw Tb("onargs");
            if (Gc(c)) {
                var g = yb(c, !0);
                f = g.events;
                var h = g.handle;
                h || (h =
                    g.handle = lf(c, f));
                for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d], l = g.length; l--;) {
                    d = g[l];
                    var k = f[d];
                    k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, Qf[d], function (a) {
                        var c = a.relatedTarget;
                        c && (c === this || this.contains(c)) || h(a, d)
                    }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]);
                    k.push(e)
                }
            }
        }, off: Jc, one: function (a, c, d) {
            a = A(a);
            a.on(c, function f() {
                a.off(c, d);
                a.off(c, f)
            });
            a.on(c, d)
        }, replaceWith: function (a, c) {
            var d, e = a.parentNode;
            wb(a);
            r(new T(c), function (c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c,
                    a);
                d = c
            })
        }, children: function (a) {
            var c = [];
            r(a.childNodes, function (a) {
                a.nodeType === qa && c.push(a)
            });
            return c
        }, contents: function (a) {
            return a.contentDocument || a.childNodes || []
        }, append: function (a, c) {
            var d = a.nodeType;
            if (d === qa || 11 === d) {
                c = new T(c);
                for (var d = 0, e = c.length; d < e; d++)a.appendChild(c[d])
            }
        }, prepend: function (a, c) {
            if (a.nodeType === qa) {
                var d = a.firstChild;
                r(new T(c), function (c) {
                    a.insertBefore(c, d)
                })
            }
        }, wrap: function (a, c) {
            c = A(c).eq(0).clone()[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        },
        remove: Mc, detach: function (a) {
            Mc(a, !0)
        }, after: function (a, c) {
            var d = a, e = a.parentNode;
            c = new T(c);
            for (var f = 0, g = c.length; f < g; f++) {
                var h = c[f];
                e.insertBefore(h, d.nextSibling);
                d = h
            }
        }, addClass: Cb, removeClass: Bb, toggleClass: function (a, c, d) {
            c && r(c.split(" "), function (c) {
                var f = d;
                x(f) && (f = !Ab(a, c));
                (f ? Cb : Bb)(a, c)
            })
        }, parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        }, next: function (a) {
            return a.nextElementSibling
        }, find: function (a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : []
        }, clone: Ub,
        triggerHandler: function (a, c, d) {
            var e, f, g = c.type || c, h = yb(a);
            if (h = (h = h && h.events) && h[g])e = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return !0 === this.immediatePropagationStopped
                }, stopPropagation: E, type: g, target: a
            }, c.type && (e = w(e, c)), c = sa(h), f = d ? [e].concat(d) : [e], r(c, function (c) {
                e.isImmediatePropagationStopped() || c.apply(a,
                    f)
            })
        }
    }, function (a, c) {
        T.prototype[c] = function (c, e, f) {
            for (var g, h = 0, l = this.length; h < l; h++)x(g) ? (g = a(this[h], c, e, f), y(g) && (g = A(g))) : Ic(g, a(this[h], c, e, f));
            return y(g) ? g : this
        };
        T.prototype.bind = T.prototype.on;
        T.prototype.unbind = T.prototype.off
    });
    eb.prototype = {
        put: function (a, c) {
            this[Ma(a, this.nextUid)] = c
        }, get: function (a) {
            return this[Ma(a, this.nextUid)]
        }, remove: function (a) {
            var c = this[a = Ma(a, this.nextUid)];
            delete this[a];
            return c
        }
    };
    var Rc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Rf = /,/, Sf = /^\s*(_?)(\S+?)\1\s*$/,
        Qc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Fa = R("$injector");
    ab.$$annotate = function (a, c, d) {
        var e;
        if ("function" === typeof a) {
            if (!(e = a.$inject)) {
                e = [];
                if (a.length) {
                    if (c)throw C(d) && d || (d = a.name || mf(a)), Fa("strictdi", d);
                    c = a.toString().replace(Qc, "");
                    c = c.match(Rc);
                    r(c[1].split(Rf), function (a) {
                        a.replace(Sf, function (a, c, d) {
                            e.push(d)
                        })
                    })
                }
                a.$inject = e
            }
        } else H(a) ? (c = a.length - 1, sb(a[c], "fn"), e = a.slice(0, c)) : sb(a, "fn", !0);
        return e
    };
    var Tf = R("$animate"), Ce = ["$provide", function (a) {
        this.$$selectors = {};
        this.register = function (c,
                                  d) {
            var e = c + "-animation";
            if (c && "." != c.charAt(0))throw Tf("notcsel", c);
            this.$$selectors[c.substr(1)] = e;
            a.factory(e, d)
        };
        this.classNameFilter = function (a) {
            1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
            return this.$$classNameFilter
        };
        this.$get = ["$$q", "$$asyncCallback", "$rootScope", function (a, d, e) {
            function f(d) {
                var f, g = a.defer();
                g.promise.$$cancelFn = function () {
                    f && f()
                };
                e.$$postDigest(function () {
                    f = d(function () {
                        g.resolve()
                    })
                });
                return g.promise
            }

            function g(a, c) {
                var d = [], e = [], f = ia();
                r((a.attr("class") || "").split(/\s+/), function (a) {
                    f[a] = !0
                });
                r(c, function (a, c) {
                    var g = f[c];
                    !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c)
                });
                return 0 < d.length + e.length && [d.length ? d : null, e.length ? e : null]
            }

            function h(a, c, d) {
                for (var e = 0, f = c.length; e < f; ++e)a[c[e]] = d
            }

            function l() {
                n || (n = a.defer(), d(function () {
                    n.resolve();
                    n = null
                }));
                return n.promise
            }

            function k(a, c) {
                if (ca.isObject(c)) {
                    var d = w(c.from || {}, c.to || {});
                    a.css(d)
                }
            }

            var n;
            return {
                animate: function (a, c, d) {
                    k(a, {from: c, to: d});
                    return l()
                }, enter: function (a, c, d, e) {
                    k(a,
                        e);
                    d ? d.after(a) : c.prepend(a);
                    return l()
                }, leave: function (a, c) {
                    k(a, c);
                    a.remove();
                    return l()
                }, move: function (a, c, d, e) {
                    return this.enter(a, c, d, e)
                }, addClass: function (a, c, d) {
                    return this.setClass(a, c, [], d)
                }, $$addClassImmediately: function (a, c, d) {
                    a = A(a);
                    c = C(c) ? c : H(c) ? c.join(" ") : "";
                    r(a, function (a) {
                        Cb(a, c)
                    });
                    k(a, d);
                    return l()
                }, removeClass: function (a, c, d) {
                    return this.setClass(a, [], c, d)
                }, $$removeClassImmediately: function (a, c, d) {
                    a = A(a);
                    c = C(c) ? c : H(c) ? c.join(" ") : "";
                    r(a, function (a) {
                        Bb(a, c)
                    });
                    k(a, d);
                    return l()
                }, setClass: function (a,
                                       c, d, e) {
                    var k = this, l = !1;
                    a = A(a);
                    var m = a.data("$$animateClasses");
                    m ? e && m.options && (m.options = ca.extend(m.options || {}, e)) : (m = {
                        classes: {},
                        options: e
                    }, l = !0);
                    e = m.classes;
                    c = H(c) ? c : c.split(" ");
                    d = H(d) ? d : d.split(" ");
                    h(e, c, !0);
                    h(e, d, !1);
                    l && (m.promise = f(function (c) {
                        var d = a.data("$$animateClasses");
                        a.removeData("$$animateClasses");
                        if (d) {
                            var e = g(a, d.classes);
                            e && k.$$setClassImmediately(a, e[0], e[1], d.options)
                        }
                        c()
                    }), a.data("$$animateClasses", m));
                    return m.promise
                }, $$setClassImmediately: function (a, c, d, e) {
                    c && this.$$addClassImmediately(a,
                        c);
                    d && this.$$removeClassImmediately(a, d);
                    k(a, e);
                    return l()
                }, enabled: E, cancel: E
            }
        }]
    }], la = R("$compile");
    yc.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Sc = /^((?:x|data)[\:\-_])/i, rf = R("$controller"), Wc = "application/json", $b = {"Content-Type": Wc + ";charset=utf-8"}, tf = /^\[|^\{(?!\{)/, uf = {
        "[": /]$/,
        "{": /}$/
    }, sf = /^\)\]\}',?\n/, ac = R("$interpolate"), Uf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, xf = {
        http: 80,
        https: 443,
        ftp: 21
    }, Gb = R("$location"), Vf = {
        $$html5: !1, $$replace: !1, absUrl: Hb("$$absUrl"), url: function (a) {
            if (x(a))return this.$$url;
            var c = Uf.exec(a);
            (c[1] || "" === a) && this.path(decodeURIComponent(c[1]));
            (c[2] || c[1] || "" === a) && this.search(c[3] || "");
            this.hash(c[5] || "");
            return this
        }, protocol: Hb("$$protocol"), host: Hb("$$host"), port: Hb("$$port"), path: dd("$$path", function (a) {
            a = null !== a ? a.toString() : "";
            return "/" == a.charAt(0) ? a : "/" + a
        }), search: function (a, c) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (C(a) || Y(a))a = a.toString(), this.$$search = sc(a); else if (J(a))a = Da(a, {}), r(a, function (c, e) {
                        null == c && delete a[e]
                    }), this.$$search =
                        a; else throw Gb("isrcharg");
                    break;
                default:
                    x(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
            }
            this.$$compose();
            return this
        }, hash: dd("$$hash", function (a) {
            return null !== a ? a.toString() : ""
        }), replace: function () {
            this.$$replace = !0;
            return this
        }
    };
    r([cd, ec, dc], function (a) {
        a.prototype = Object.create(Vf);
        a.prototype.state = function (c) {
            if (!arguments.length)return this.$$state;
            if (a !== dc || !this.$$html5)throw Gb("nostate");
            this.$$state = x(c) ? null : c;
            return this
        }
    });
    var na = R("$parse"), Wf = Function.prototype.call,
        Xf = Function.prototype.apply, Yf = Function.prototype.bind, mb = ia();
    r({
        "null": function () {
            return null
        }, "true": function () {
            return !0
        }, "false": function () {
            return !1
        }, undefined: function () {
        }
    }, function (a, c) {
        a.constant = a.literal = a.sharedGetter = !0;
        mb[c] = a
    });
    mb["this"] = function (a) {
        return a
    };
    mb["this"].sharedGetter = !0;
    var nb = w(ia(), {
        "+": function (a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return y(d) ? y(e) ? d + e : d : y(e) ? e : t
        }, "-": function (a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return (y(d) ? d : 0) - (y(e) ? e : 0)
        }, "*": function (a, c, d, e) {
            return d(a, c) * e(a, c)
        },
        "/": function (a, c, d, e) {
            return d(a, c) / e(a, c)
        }, "%": function (a, c, d, e) {
            return d(a, c) % e(a, c)
        }, "===": function (a, c, d, e) {
            return d(a, c) === e(a, c)
        }, "!==": function (a, c, d, e) {
            return d(a, c) !== e(a, c)
        }, "==": function (a, c, d, e) {
            return d(a, c) == e(a, c)
        }, "!=": function (a, c, d, e) {
            return d(a, c) != e(a, c)
        }, "<": function (a, c, d, e) {
            return d(a, c) < e(a, c)
        }, ">": function (a, c, d, e) {
            return d(a, c) > e(a, c)
        }, "<=": function (a, c, d, e) {
            return d(a, c) <= e(a, c)
        }, ">=": function (a, c, d, e) {
            return d(a, c) >= e(a, c)
        }, "&&": function (a, c, d, e) {
            return d(a, c) && e(a, c)
        },
        "||": function (a, c, d, e) {
            return d(a, c) || e(a, c)
        }, "!": function (a, c, d) {
            return !d(a, c)
        }, "=": !0, "|": !0
    }), Zf = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, hc = function (a) {
        this.options = a
    };
    hc.prototype = {
        constructor: hc, lex: function (a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;)if (a = this.text.charAt(this.index), '"' === a || "'" === a)this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(a))this.readIdent(); else if (this.is(a,
                    "(){}[].,;:?"))this.tokens.push({
                index: this.index,
                text: a
            }), this.index++; else if (this.isWhitespace(a))this.index++; else {
                var c = a + this.peek(), d = c + this.peek(2), e = nb[c], f = nb[d];
                nb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        }, is: function (a, c) {
            return -1 !== c.indexOf(a)
        }, peek: function (a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        },
        isNumber: function (a) {
            return "0" <= a && "9" >= a && "string" === typeof a
        }, isWhitespace: function (a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        }, isIdent: function (a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        }, isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        }, throwError: function (a, c, d) {
            d = d || this.index;
            c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
            throw na("lexerr", a, c, this.text);
        }, readNumber: function () {
            for (var a = "", c = this.index; this.index <
            this.text.length;) {
                var d = z(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d))a += d; else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e))a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1))a += d; else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1))break; else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({index: c, text: a, constant: !0, value: Number(a)})
        }, readIdent: function () {
            for (var a = this.index; this.index < this.text.length;) {
                var c =
                    this.text.charAt(this.index);
                if (!this.isIdent(c) && !this.isNumber(c))break;
                this.index++
            }
            this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: !0})
        }, readString: function (a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length;) {
                var g = this.text.charAt(this.index), e = e + g;
                if (f)"u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) :
                    d += Zf[g] || g, f = !1; else if ("\\" === g)f = !0; else {
                    if (g === a) {
                        this.index++;
                        this.tokens.push({index: c, text: e, constant: !0, value: d});
                        return
                    }
                    d += g
                }
                this.index++
            }
            this.throwError("Unterminated quote", c)
        }
    };
    var ib = function (a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d
    };
    ib.ZERO = w(function () {
        return 0
    }, {sharedGetter: !0, constant: !0});
    ib.prototype = {
        constructor: ib, parse: function (a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.statements();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            a.literal = !!a.literal;
            a.constant = !!a.constant;
            return a
        }, primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in mb ? a = mb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var c, d; c = this.expect("(", "[", ".");)"(" === c.text ? (a = this.functionCall(a,
                d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        }, throwError: function (a, c) {
            throw na("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        }, peekToken: function () {
            if (0 === this.tokens.length)throw na("ueoe", this.text);
            return this.tokens[0]
        }, peek: function (a, c, d, e) {
            return this.peekAhead(0, a, c, d, e)
        }, peekAhead: function (a, c, d, e, f) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var g = a.text;
                if (g === c || g === d || g === e || g ===
                    f || !(c || d || e || f))return a
            }
            return !1
        }, expect: function (a, c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
        }, consume: function (a) {
            if (0 === this.tokens.length)throw na("ueoe", this.text);
            var c = this.expect(a);
            c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return c
        }, unaryFn: function (a, c) {
            var d = nb[a];
            return w(function (a, f) {
                return d(a, f, c)
            }, {constant: c.constant, inputs: [c]})
        }, binaryFn: function (a, c, d, e) {
            var f = nb[c];
            return w(function (c, e) {
                return f(c, e, a, d)
            }, {
                constant: a.constant &&
                d.constant, inputs: !e && [a, d]
            })
        }, identifier: function () {
            for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");)a += this.consume().text + this.consume().text;
            return zf(a, this.options, this.text)
        }, constant: function () {
            var a = this.consume().value;
            return w(function () {
                return a
            }, {constant: !0, literal: !0})
        }, statements: function () {
            for (var a = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))return 1 === a.length ? a[0] : function (c,
                                                                                                                                                                                      d) {
                for (var e, f = 0, g = a.length; f < g; f++)e = a[f](c, d);
                return e
            }
        }, filterChain: function () {
            for (var a = this.expression(); this.expect("|");)a = this.filter(a);
            return a
        }, filter: function (a) {
            var c = this.$filter(this.consume().text), d, e;
            if (this.peek(":"))for (d = [], e = []; this.expect(":");)d.push(this.expression());
            var f = [a].concat(d || []);
            return w(function (f, h) {
                var l = a(f, h);
                if (e) {
                    e[0] = l;
                    for (l = d.length; l--;)e[l + 1] = d[l](f, h);
                    return c.apply(t, e)
                }
                return c(l)
            }, {constant: !c.$stateful && f.every(fc), inputs: !c.$stateful && f})
        }, expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var a = this.ternary(), c, d;
            return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), w(function (d, f) {
                return a.assign(d, c(d, f), f)
            }, {inputs: [a, c]})) : a
        }, ternary: function () {
            var a = this.logicalOR(), c;
            if (this.expect("?") && (c = this.assignment(), this.consume(":"))) {
                var d = this.assignment();
                return w(function (e, f) {
                    return a(e, f) ? c(e, f) : d(e, f)
                }, {constant: a.constant && c.constant && d.constant})
            }
            return a
        },
        logicalOR: function () {
            for (var a = this.logicalAND(), c; c = this.expect("||");)a = this.binaryFn(a, c.text, this.logicalAND(), !0);
            return a
        }, logicalAND: function () {
            for (var a = this.equality(), c; c = this.expect("&&");)a = this.binaryFn(a, c.text, this.equality(), !0);
            return a
        }, equality: function () {
            for (var a = this.relational(), c; c = this.expect("==", "!=", "===", "!==");)a = this.binaryFn(a, c.text, this.relational());
            return a
        }, relational: function () {
            for (var a = this.additive(), c; c = this.expect("<", ">", "<=", ">=");)a = this.binaryFn(a, c.text,
                this.additive());
            return a
        }, additive: function () {
            for (var a = this.multiplicative(), c; c = this.expect("+", "-");)a = this.binaryFn(a, c.text, this.multiplicative());
            return a
        }, multiplicative: function () {
            for (var a = this.unary(), c; c = this.expect("*", "/", "%");)a = this.binaryFn(a, c.text, this.unary());
            return a
        }, unary: function () {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(ib.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
        }, fieldAccess: function (a) {
            var c =
                this.identifier();
            return w(function (d, e, f) {
                d = f || a(d, e);
                return null == d ? t : c(d)
            }, {
                assign: function (d, e, f) {
                    var g = a(d, f);
                    g || a.assign(d, g = {}, f);
                    return c.assign(g, e)
                }
            })
        }, objectIndex: function (a) {
            var c = this.text, d = this.expression();
            this.consume("]");
            return w(function (e, f) {
                var g = a(e, f), h = d(e, f);
                ua(h, c);
                return g ? oa(g[h], c) : t
            }, {
                assign: function (e, f, g) {
                    var h = ua(d(e, g), c), l = oa(a(e, g), c);
                    l || a.assign(e, l = {}, g);
                    return l[h] = f
                }
            })
        }, functionCall: function (a, c) {
            var d = [];
            if (")" !== this.peekToken().text) {
                do d.push(this.expression());
                while (this.expect(","))
            }
            this.consume(")");
            var e = this.text, f = d.length ? [] : null;
            return function (g, h) {
                var l = c ? c(g, h) : y(c) ? t : g, k = a(g, h, l) || E;
                if (f)for (var n = d.length; n--;)f[n] = oa(d[n](g, h), e);
                oa(l, e);
                if (k) {
                    if (k.constructor === k)throw na("isecfn", e);
                    if (k === Wf || k === Xf || k === Yf)throw na("isecff", e);
                }
                l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]);
                f && (f.length = 0);
                return oa(l, e)
            }
        }, arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]"))break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return w(function (c, d) {
                for (var e = [], f = 0, g = a.length; f < g; f++)e.push(a[f](c, d));
                return e
            }, {literal: !0, constant: a.every(fc), inputs: a})
        }, object: function () {
            var a = [], c = [];
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}"))break;
                    var d = this.consume();
                    d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError("invalid key", d);
                    this.consume(":");
                    c.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("}");
            return w(function (d, f) {
                for (var g = {}, h = 0, l = c.length; h < l; h++)g[a[h]] =
                    c[h](d, f);
                return g
            }, {literal: !0, constant: c.every(fc), inputs: c})
        }
    };
    var Bf = ia(), Af = ia(), Cf = Object.prototype.valueOf, Ba = R("$sce"), pa = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, la = R("$compile"), $ = W.createElement("a"), id = Aa(Q.location.href);
    Fc.$inject = ["$provide"];
    jd.$inject = ["$locale"];
    ld.$inject = ["$locale"];
    var od = ".", Mf = {
            yyyy: U("FullYear", 4),
            yy: U("FullYear", 2, 0, !0),
            y: U("FullYear", 1),
            MMMM: Jb("Month"),
            MMM: Jb("Month", !0),
            MM: U("Month", 2, 1),
            M: U("Month", 1, 1),
            dd: U("Date", 2),
            d: U("Date",
                1),
            HH: U("Hours", 2),
            H: U("Hours", 1),
            hh: U("Hours", 2, -12),
            h: U("Hours", 1, -12),
            mm: U("Minutes", 2),
            m: U("Minutes", 1),
            ss: U("Seconds", 2),
            s: U("Seconds", 1),
            sss: U("Milliseconds", 3),
            EEEE: Jb("Day"),
            EEE: Jb("Day", !0),
            a: function (a, c) {
                return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
            },
            Z: function (a) {
                a = -1 * a.getTimezoneOffset();
                return a = (0 <= a ? "+" : "") + (Ib(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Ib(Math.abs(a % 60), 2))
            },
            ww: qd(2),
            w: qd(1),
            G: ic,
            GG: ic,
            GGG: ic,
            GGGG: function (a, c) {
                return 0 >= a.getFullYear() ? c.ERANAMES[0] : c.ERANAMES[1]
            }
        }, Lf = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        Kf = /^\-?\d+$/;
    kd.$inject = ["$locale"];
    var Hf = ea(z), If = ea(ub);
    md.$inject = ["$parse"];
    var Td = ea({
        restrict: "E", compile: function (a, c) {
            if (!c.href && !c.xlinkHref && !c.name)return function (a, c) {
                if ("a" === c[0].nodeName.toLowerCase()) {
                    var f = "[object SVGAnimatedString]" === Ca.call(c.prop("href")) ? "xlink:href" : "href";
                    c.on("click", function (a) {
                        c.attr(f) || a.preventDefault()
                    })
                }
            }
        }
    }), vb = {};
    r(Eb, function (a, c) {
        if ("multiple" != a) {
            var d = xa("ng-" + c);
            vb[d] = function () {
                return {
                    restrict: "A", priority: 100, link: function (a, f, g) {
                        a.$watch(g[d],
                            function (a) {
                                g.$set(c, !!a)
                            })
                    }
                }
            }
        }
    });
    r(Pc, function (a, c) {
        vb[c] = function () {
            return {
                priority: 100, link: function (a, e, f) {
                    if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Of))) {
                        f.$set("ngPattern", new RegExp(e[1], e[2]));
                        return
                    }
                    a.$watch(f[c], function (a) {
                        f.$set(c, a)
                    })
                }
            }
        }
    });
    r(["src", "srcset", "href"], function (a) {
        var c = xa("ng-" + a);
        vb[c] = function () {
            return {
                priority: 99, link: function (d, e, f) {
                    var g = a, h = a;
                    "href" === a && "[object SVGAnimatedString]" === Ca.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href",
                        g = null);
                    f.$observe(c, function (c) {
                        c ? (f.$set(h, c), Qa && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null)
                    })
                }
            }
        }
    });
    var Kb = {
        $addControl: E, $$renameControl: function (a, c) {
            a.$name = c
        }, $removeControl: E, $setValidity: E, $setDirty: E, $setPristine: E, $setSubmitted: E
    };
    rd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var yd = function (a) {
            return ["$timeout", function (c) {
                return {
                    name: "form", restrict: a ? "EAC" : "E", controller: rd, compile: function (d, e) {
                        d.addClass(Ra).addClass(lb);
                        var f = e.name ? "name" : a && e.ngForm ? "ngForm" :
                            !1;
                        return {
                            pre: function (a, d, e, k) {
                                if (!("action"in e)) {
                                    var n = function (c) {
                                        a.$apply(function () {
                                            k.$commitViewValue();
                                            k.$setSubmitted()
                                        });
                                        c.preventDefault()
                                    };
                                    d[0].addEventListener("submit", n, !1);
                                    d.on("$destroy", function () {
                                        c(function () {
                                            d[0].removeEventListener("submit", n, !1)
                                        }, 0, !1)
                                    })
                                }
                                var p = k.$$parentForm;
                                f && (hb(a, null, k.$name, k, k.$name), e.$observe(f, function (c) {
                                    k.$name !== c && (hb(a, null, k.$name, t, k.$name), p.$$renameControl(k, c), hb(a, null, k.$name, k, k.$name))
                                }));
                                d.on("$destroy", function () {
                                    p.$removeControl(k);
                                    f && hb(a, null, e[f], t, k.$name);
                                    w(k, Kb)
                                })
                            }
                        }
                    }
                }
            }]
        }, Ud = yd(), ge = yd(!0), Nf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, $f = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, ag = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, bg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, zd = /^(\d{4})-(\d{2})-(\d{2})$/, Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, lc = /^(\d{4})-W(\d\d)$/, Bd = /^(\d{4})-(\d\d)$/,
        Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Dd = {
            text: function (a, c, d, e, f, g) {
                jb(a, c, d, e, f, g);
                jc(e)
            },
            date: kb("date", zd, Mb(zd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": kb("datetimelocal", Ad, Mb(Ad, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: kb("time", Cd, Mb(Cd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: kb("week", lc, function (a, c) {
                if (ga(a))return a;
                if (C(a)) {
                    lc.lastIndex = 0;
                    var d = lc.exec(a);
                    if (d) {
                        var e = +d[1], f = +d[2], g = d = 0, h = 0, l = 0, k = pd(e), f = 7 * (f - 1);
                        c && (d = c.getHours(), g =
                            c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());
                        return new Date(e, 0, k.getDate() + f, d, g, h, l)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: kb("month", Bd, Mb(Bd, ["yyyy", "MM"]), "yyyy-MM"),
            number: function (a, c, d, e, f, g) {
                td(a, c, d, e);
                jb(a, c, d, e, f, g);
                e.$$parserName = "number";
                e.$parsers.push(function (a) {
                    return e.$isEmpty(a) ? null : bg.test(a) ? parseFloat(a) : t
                });
                e.$formatters.push(function (a) {
                    if (!e.$isEmpty(a)) {
                        if (!Y(a))throw Nb("numfmt", a);
                        a = a.toString()
                    }
                    return a
                });
                if (y(d.min) || d.ngMin) {
                    var h;
                    e.$validators.min = function (a) {
                        return e.$isEmpty(a) ||
                            x(h) || a >= h
                    };
                    d.$observe("min", function (a) {
                        y(a) && !Y(a) && (a = parseFloat(a, 10));
                        h = Y(a) && !isNaN(a) ? a : t;
                        e.$validate()
                    })
                }
                if (y(d.max) || d.ngMax) {
                    var l;
                    e.$validators.max = function (a) {
                        return e.$isEmpty(a) || x(l) || a <= l
                    };
                    d.$observe("max", function (a) {
                        y(a) && !Y(a) && (a = parseFloat(a, 10));
                        l = Y(a) && !isNaN(a) ? a : t;
                        e.$validate()
                    })
                }
            },
            url: function (a, c, d, e, f, g) {
                jb(a, c, d, e, f, g);
                jc(e);
                e.$$parserName = "url";
                e.$validators.url = function (a, c) {
                    var d = a || c;
                    return e.$isEmpty(d) || $f.test(d)
                }
            },
            email: function (a, c, d, e, f, g) {
                jb(a, c, d, e, f, g);
                jc(e);
                e.$$parserName = "email";
                e.$validators.email = function (a, c) {
                    var d = a || c;
                    return e.$isEmpty(d) || ag.test(d)
                }
            },
            radio: function (a, c, d, e) {
                x(d.name) && c.attr("name", ++ob);
                c.on("click", function (a) {
                    c[0].checked && e.$setViewValue(d.value, a && a.type)
                });
                e.$render = function () {
                    c[0].checked = d.value == e.$viewValue
                };
                d.$observe("value", e.$render)
            },
            checkbox: function (a, c, d, e, f, g, h, l) {
                var k = ud(l, a, "ngTrueValue", d.ngTrueValue, !0), n = ud(l, a, "ngFalseValue", d.ngFalseValue, !1);
                c.on("click", function (a) {
                    e.$setViewValue(c[0].checked, a &&
                        a.type)
                });
                e.$render = function () {
                    c[0].checked = e.$viewValue
                };
                e.$isEmpty = function (a) {
                    return !1 === a
                };
                e.$formatters.push(function (a) {
                    return ha(a, k)
                });
                e.$parsers.push(function (a) {
                    return a ? k : n
                })
            },
            hidden: E,
            button: E,
            submit: E,
            reset: E,
            file: E
        }, zc = ["$browser", "$sniffer", "$filter", "$parse", function (a, c, d, e) {
            return {
                restrict: "E", require: ["?ngModel"], link: {
                    pre: function (f, g, h, l) {
                        l[0] && (Dd[z(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e)
                    }
                }
            }
        }], cg = /^(true|false|\d+)$/, ye = function () {
            return {
                restrict: "A", priority: 100, compile: function (a,
                                                                 c) {
                    return cg.test(c.ngValue) ? function (a, c, f) {
                        f.$set("value", a.$eval(f.ngValue))
                    } : function (a, c, f) {
                        a.$watch(f.ngValue, function (a) {
                            f.$set("value", a)
                        })
                    }
                }
            }
        }, Zd = ["$compile", function (a) {
            return {
                restrict: "AC", compile: function (c) {
                    a.$$addBindingClass(c);
                    return function (c, e, f) {
                        a.$$addBindingInfo(e, f.ngBind);
                        e = e[0];
                        c.$watch(f.ngBind, function (a) {
                            e.textContent = a === t ? "" : a
                        })
                    }
                }
            }
        }], ae = ["$interpolate", "$compile", function (a, c) {
            return {
                compile: function (d) {
                    c.$$addBindingClass(d);
                    return function (d, f, g) {
                        d = a(f.attr(g.$attr.ngBindTemplate));
                        c.$$addBindingInfo(f, d.expressions);
                        f = f[0];
                        g.$observe("ngBindTemplate", function (a) {
                            f.textContent = a === t ? "" : a
                        })
                    }
                }
            }
        }], $d = ["$sce", "$parse", "$compile", function (a, c, d) {
            return {
                restrict: "A", compile: function (e, f) {
                    var g = c(f.ngBindHtml), h = c(f.ngBindHtml, function (a) {
                        return (a || "").toString()
                    });
                    d.$$addBindingClass(e);
                    return function (c, e, f) {
                        d.$$addBindingInfo(e, f.ngBindHtml);
                        c.$watch(h, function () {
                            e.html(a.getTrustedHtml(g(c)) || "")
                        })
                    }
                }
            }
        }], xe = ea({
            restrict: "A", require: "ngModel", link: function (a, c, d, e) {
                e.$viewChangeListeners.push(function () {
                    a.$eval(d.ngChange)
                })
            }
        }),
        be = kc("", !0), de = kc("Odd", 0), ce = kc("Even", 1), ee = Ia({
            compile: function (a, c) {
                c.$set("ngCloak", t);
                a.removeClass("ng-cloak")
            }
        }), fe = [function () {
            return {restrict: "A", scope: !0, controller: "@", priority: 500}
        }], Ec = {}, dg = {blur: !0, focus: !0};
    r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var c = xa("ng-" + a);
        Ec[c] = ["$parse", "$rootScope", function (d, e) {
            return {
                restrict: "A", compile: function (f, g) {
                    var h =
                        d(g[c], null, !0);
                    return function (c, d) {
                        d.on(a, function (d) {
                            var f = function () {
                                h(c, {$event: d})
                            };
                            dg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
                        })
                    }
                }
            }
        }]
    });
    var ie = ["$animate", function (a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (c, d, e, f, g) {
                    var h, l, k;
                    c.$watch(e.ngIf, function (c) {
                        c ? l || g(function (c, f) {
                            l = f;
                            c[c.length++] = W.createComment(" end ngIf: " + e.ngIf + " ");
                            h = {clone: c};
                            a.enter(c, d.parent(), d)
                        }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k =
                            tb(h.clone), a.leave(k).then(function () {
                            k = null
                        }), h = null))
                    })
                }
            }
        }], je = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function (a, c, d, e) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: ca.noop,
                compile: function (f, g) {
                    var h = g.ngInclude || g.src, l = g.onload || "", k = g.autoscroll;
                    return function (f, g, q, r, s) {
                        var t = 0, v, m, F, w = function () {
                            m && (m.remove(), m = null);
                            v && (v.$destroy(), v = null);
                            F && (d.leave(F).then(function () {
                                m = null
                            }), m = F, F = null)
                        };
                        f.$watch(e.parseAsResourceUrl(h), function (e) {
                            var h =
                                function () {
                                    !y(k) || k && !f.$eval(k) || c()
                                }, m = ++t;
                            e ? (a(e, !0).then(function (a) {
                                if (m === t) {
                                    var c = f.$new();
                                    r.template = a;
                                    a = s(c, function (a) {
                                        w();
                                        d.enter(a, null, g).then(h)
                                    });
                                    v = c;
                                    F = a;
                                    v.$emit("$includeContentLoaded", e);
                                    f.$eval(l)
                                }
                            }, function () {
                                m === t && (w(), f.$emit("$includeContentError", e))
                            }), f.$emit("$includeContentRequested", e)) : (w(), r.template = null)
                        })
                    }
                }
            }
        }], Ae = ["$compile", function (a) {
            return {
                restrict: "ECA", priority: -400, require: "ngInclude", link: function (c, d, e, f) {
                    /SVG/.test(d[0].toString()) ? (d.empty(), a(Hc(f.template,
                        W).childNodes)(c, function (a) {
                        d.append(a)
                    }, {futureParentElement: d})) : (d.html(f.template), a(d.contents())(c))
                }
            }
        }], ke = Ia({
            priority: 450, compile: function () {
                return {
                    pre: function (a, c, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }), we = function () {
            return {
                restrict: "A", priority: 100, require: "ngModel", link: function (a, c, d, e) {
                    var f = c.attr(d.$attr.ngList) || ", ", g = "false" !== d.ngTrim, h = g ? N(f) : f;
                    e.$parsers.push(function (a) {
                        if (!x(a)) {
                            var c = [];
                            a && r(a.split(h), function (a) {
                                a && c.push(g ? N(a) : a)
                            });
                            return c
                        }
                    });
                    e.$formatters.push(function (a) {
                        return H(a) ?
                            a.join(f) : t
                    });
                    e.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        }, lb = "ng-valid", vd = "ng-invalid", Ra = "ng-pristine", Lb = "ng-dirty", xd = "ng-pending", Nb = new R("ngModel"), eg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, c, d, e, f, g, h, l, k, n) {
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$$rawModelValue = t;
            this.$validators = {};
            this.$asyncValidators = {};
            this.$parsers = [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$untouched = !0;
            this.$touched = !1;
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$error = {};
            this.$$success = {};
            this.$pending = t;
            this.$name = n(d.name || "", !1)(a);
            var p = f(d.ngModel), q = p.assign, u = p, s = q, M = null, v, m = this;
            this.$$setOptions = function (a) {
                if ((m.$options = a) && a.getterSetter) {
                    var c = f(d.ngModel + "()"), g = f(d.ngModel + "($$$p)");
                    u = function (a) {
                        var d = p(a);
                        G(d) && (d = c(a));
                        return d
                    };
                    s = function (a, c) {
                        G(p(a)) ? g(a, {$$$p: m.$modelValue}) : q(a, m.$modelValue)
                    }
                } else if (!p.assign)throw Nb("nonassign", d.ngModel, wa(e));
            };
            this.$render = E;
            this.$isEmpty = function (a) {
                return x(a) || "" === a || null === a || a !== a
            };
            var F = e.inheritedData("$formController") || Kb, w = 0;
            sd({
                ctrl: this, $element: e, set: function (a, c) {
                    a[c] = !0
                }, unset: function (a, c) {
                    delete a[c]
                }, parentForm: F, $animate: g
            });
            this.$setPristine = function () {
                m.$dirty = !1;
                m.$pristine = !0;
                g.removeClass(e, Lb);
                g.addClass(e, Ra)
            };
            this.$setDirty = function () {
                m.$dirty = !0;
                m.$pristine = !1;
                g.removeClass(e, Ra);
                g.addClass(e, Lb);
                F.$setDirty()
            };
            this.$setUntouched = function () {
                m.$touched = !1;
                m.$untouched = !0;
                g.setClass(e,
                    "ng-untouched", "ng-touched")
            };
            this.$setTouched = function () {
                m.$touched = !0;
                m.$untouched = !1;
                g.setClass(e, "ng-touched", "ng-untouched")
            };
            this.$rollbackViewValue = function () {
                h.cancel(M);
                m.$viewValue = m.$$lastCommittedViewValue;
                m.$render()
            };
            this.$validate = function () {
                if (!Y(m.$modelValue) || !isNaN(m.$modelValue)) {
                    var a = m.$$rawModelValue, c = m.$valid, d = m.$modelValue, e = m.$options && m.$options.allowInvalid;
                    m.$$runValidators(a, m.$$lastCommittedViewValue, function (f) {
                        e || c === f || (m.$modelValue = f ? a : t, m.$modelValue !== d && m.$$writeModelToScope())
                    })
                }
            };
            this.$$runValidators = function (a, c, d) {
                function e() {
                    var d = !0;
                    r(m.$validators, function (e, f) {
                        var h = e(a, c);
                        d = d && h;
                        g(f, h)
                    });
                    return d ? !0 : (r(m.$asyncValidators, function (a, c) {
                        g(c, null)
                    }), !1)
                }

                function f() {
                    var d = [], e = !0;
                    r(m.$asyncValidators, function (f, h) {
                        var k = f(a, c);
                        if (!k || !G(k.then))throw Nb("$asyncValidators", k);
                        g(h, t);
                        d.push(k.then(function () {
                            g(h, !0)
                        }, function (a) {
                            e = !1;
                            g(h, !1)
                        }))
                    });
                    d.length ? k.all(d).then(function () {
                        h(e)
                    }, E) : h(!0)
                }

                function g(a, c) {
                    l === w && m.$setValidity(a, c)
                }

                function h(a) {
                    l === w && d(a)
                }

                w++;
                var l =
                    w;
                (function () {
                    var a = m.$$parserName || "parse";
                    if (v === t)g(a, null); else return v || (r(m.$validators, function (a, c) {
                        g(c, null)
                    }), r(m.$asyncValidators, function (a, c) {
                        g(c, null)
                    })), g(a, v), v;
                    return !0
                })() ? e() ? f() : h(!1) : h(!1)
            };
            this.$commitViewValue = function () {
                var a = m.$viewValue;
                h.cancel(M);
                if (m.$$lastCommittedViewValue !== a || "" === a && m.$$hasNativeValidators)m.$$lastCommittedViewValue = a, m.$pristine && this.$setDirty(), this.$$parseAndValidate()
            };
            this.$$parseAndValidate = function () {
                var c = m.$$lastCommittedViewValue;
                if (v =
                        x(c) ? t : !0)for (var d = 0; d < m.$parsers.length; d++)if (c = m.$parsers[d](c), x(c)) {
                    v = !1;
                    break
                }
                Y(m.$modelValue) && isNaN(m.$modelValue) && (m.$modelValue = u(a));
                var e = m.$modelValue, f = m.$options && m.$options.allowInvalid;
                m.$$rawModelValue = c;
                f && (m.$modelValue = c, m.$modelValue !== e && m.$$writeModelToScope());
                m.$$runValidators(c, m.$$lastCommittedViewValue, function (a) {
                    f || (m.$modelValue = a ? c : t, m.$modelValue !== e && m.$$writeModelToScope())
                })
            };
            this.$$writeModelToScope = function () {
                s(a, m.$modelValue);
                r(m.$viewChangeListeners, function (a) {
                    try {
                        a()
                    } catch (d) {
                        c(d)
                    }
                })
            };
            this.$setViewValue = function (a, c) {
                m.$viewValue = a;
                m.$options && !m.$options.updateOnDefault || m.$$debounceViewValueCommit(c)
            };
            this.$$debounceViewValueCommit = function (c) {
                var d = 0, e = m.$options;
                e && y(e.debounce) && (e = e.debounce, Y(e) ? d = e : Y(e[c]) ? d = e[c] : Y(e["default"]) && (d = e["default"]));
                h.cancel(M);
                d ? M = h(function () {
                    m.$commitViewValue()
                }, d) : l.$$phase ? m.$commitViewValue() : a.$apply(function () {
                    m.$commitViewValue()
                })
            };
            a.$watch(function () {
                var c = u(a);
                if (c !== m.$modelValue) {
                    m.$modelValue = m.$$rawModelValue = c;
                    v = t;
                    for (var d =
                        m.$formatters, e = d.length, f = c; e--;)f = d[e](f);
                    m.$viewValue !== f && (m.$viewValue = m.$$lastCommittedViewValue = f, m.$render(), m.$$runValidators(c, f, E))
                }
                return c
            })
        }], ve = ["$rootScope", function (a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: eg,
                priority: 1,
                compile: function (c) {
                    c.addClass(Ra).addClass("ng-untouched").addClass(lb);
                    return {
                        pre: function (a, c, f, g) {
                            var h = g[0], l = g[1] || Kb;
                            h.$$setOptions(g[2] && g[2].$options);
                            l.$addControl(h);
                            f.$observe("name", function (a) {
                                h.$name !== a && l.$$renameControl(h,
                                    a)
                            });
                            a.$on("$destroy", function () {
                                l.$removeControl(h)
                            })
                        }, post: function (c, e, f, g) {
                            var h = g[0];
                            if (h.$options && h.$options.updateOn)e.on(h.$options.updateOn, function (a) {
                                h.$$debounceViewValueCommit(a && a.type)
                            });
                            e.on("blur", function (e) {
                                h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched))
                            })
                        }
                    }
                }
            }
        }], fg = /(\s+|^)default(\s+|$)/, ze = function () {
            return {
                restrict: "A", controller: ["$scope", "$attrs", function (a, c) {
                    var d = this;
                    this.$options = a.$eval(c.ngModelOptions);
                    this.$options.updateOn !== t ? (this.$options.updateOnDefault = !1, this.$options.updateOn = N(this.$options.updateOn.replace(fg, function () {
                        d.$options.updateOnDefault = !0;
                        return " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        }, le = Ia({terminal: !0, priority: 1E3}), me = ["$locale", "$interpolate", function (a, c) {
            var d = /{}/g, e = /^when(Minus)?(.+)$/;
            return {
                restrict: "EA", link: function (f, g, h) {
                    function l(a) {
                        g.text(a || "")
                    }

                    var k = h.count, n = h.$attr.when && g.attr(h.$attr.when), p = h.offset || 0, q = f.$eval(n) || {}, u = {}, n = c.startSymbol(), s = c.endSymbol(), t = n + k + "-" + p + s, v = ca.noop, m;
                    r(h, function (a, c) {
                        var d =
                            e.exec(c);
                        d && (d = (d[1] ? "-" : "") + z(d[2]), q[d] = g.attr(h.$attr[c]))
                    });
                    r(q, function (a, e) {
                        u[e] = c(a.replace(d, t))
                    });
                    f.$watch(k, function (c) {
                        c = parseFloat(c);
                        var d = isNaN(c);
                        d || c in q || (c = a.pluralCat(c - p));
                        c === m || d && isNaN(m) || (v(), v = f.$watch(u[c], l), m = c)
                    })
                }
            }
        }], ne = ["$parse", "$animate", function (a, c) {
            var d = R("ngRepeat"), e = function (a, c, d, e, k, n, p) {
                a[d] = e;
                k && (a[k] = n);
                a.$index = c;
                a.$first = 0 === c;
                a.$last = c === p - 1;
                a.$middle = !(a.$first || a.$last);
                a.$odd = !(a.$even = 0 === (c & 1))
            };
            return {
                restrict: "A", multiElement: !0, transclude: "element",
                priority: 1E3, terminal: !0, $$tlb: !0, compile: function (f, g) {
                    var h = g.ngRepeat, l = W.createComment(" end ngRepeat: " + h + " "), k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!k)throw d("iexp", h);
                    var n = k[1], p = k[2], q = k[3], u = k[4], k = n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!k)throw d("iidexp", n);
                    var s = k[3] || k[1], y = k[2];
                    if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",
                        q);
                    var v, m, w, x, E = {$id: Ma};
                    u ? v = a(u) : (w = function (a, c) {
                        return Ma(c)
                    }, x = function (a) {
                        return a
                    });
                    return function (a, f, g, k, n) {
                        v && (m = function (c, d, e) {
                            y && (E[y] = c);
                            E[s] = d;
                            E.$index = e;
                            return v(a, E)
                        });
                        var u = ia();
                        a.$watchCollection(p, function (g) {
                            var k, p, v = f[0], D, E = ia(), G, H, L, S, J, C, z;
                            q && (a[q] = g);
                            if (Sa(g))J = g, p = m || w; else {
                                p = m || x;
                                J = [];
                                for (z in g)g.hasOwnProperty(z) && "$" != z.charAt(0) && J.push(z);
                                J.sort()
                            }
                            G = J.length;
                            z = Array(G);
                            for (k = 0; k < G; k++)if (H = g === J ? k : J[k], L = g[H], S = p(H, L, k), u[S])C = u[S], delete u[S], E[S] = C, z[k] = C; else {
                                if (E[S])throw r(z,
                                    function (a) {
                                        a && a.scope && (u[a.id] = a)
                                    }), d("dupes", h, S, L);
                                z[k] = {id: S, scope: t, clone: t};
                                E[S] = !0
                            }
                            for (D in u) {
                                C = u[D];
                                S = tb(C.clone);
                                c.leave(S);
                                if (S[0].parentNode)for (k = 0, p = S.length; k < p; k++)S[k].$$NG_REMOVED = !0;
                                C.scope.$destroy()
                            }
                            for (k = 0; k < G; k++)if (H = g === J ? k : J[k], L = g[H], C = z[k], C.scope) {
                                D = v;
                                do D = D.nextSibling; while (D && D.$$NG_REMOVED);
                                C.clone[0] != D && c.move(tb(C.clone), null, A(v));
                                v = C.clone[C.clone.length - 1];
                                e(C.scope, k, s, L, y, H, G)
                            } else n(function (a, d) {
                                C.scope = d;
                                var f = l.cloneNode(!1);
                                a[a.length++] = f;
                                c.enter(a,
                                    null, A(v));
                                v = f;
                                C.clone = a;
                                E[C.id] = C;
                                e(C.scope, k, s, L, y, H, G)
                            });
                            u = E
                        })
                    }
                }
            }
        }], oe = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (c, d, e) {
                    c.$watch(e.ngShow, function (c) {
                        a[c ? "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], he = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (c, d, e) {
                    c.$watch(e.ngHide, function (c) {
                        a[c ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], pe = Ia(function (a, c, d) {
            a.$watchCollection(d.ngStyle,
                function (a, d) {
                    d && a !== d && r(d, function (a, d) {
                        c.css(d, "")
                    });
                    a && c.css(a)
                })
        }), qe = ["$animate", function (a) {
            return {
                restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
                    this.cases = {}
                }], link: function (c, d, e, f) {
                    var g = [], h = [], l = [], k = [], n = function (a, c) {
                        return function () {
                            a.splice(c, 1)
                        }
                    };
                    c.$watch(e.ngSwitch || e.on, function (c) {
                        var d, e;
                        d = 0;
                        for (e = l.length; d < e; ++d)a.cancel(l[d]);
                        d = l.length = 0;
                        for (e = k.length; d < e; ++d) {
                            var s = tb(h[d].clone);
                            k[d].$destroy();
                            (l[d] = a.leave(s)).then(n(l, d))
                        }
                        h.length = 0;
                        k.length = 0;
                        (g =
                            f.cases["!" + c] || f.cases["?"]) && r(g, function (c) {
                            c.transclude(function (d, e) {
                                k.push(e);
                                var f = c.element;
                                d[d.length++] = W.createComment(" end ngSwitchWhen: ");
                                h.push({clone: d});
                                a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }], re = Ia({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, c, d, e, f) {
                e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
                e.cases["!" + d.ngSwitchWhen].push({transclude: f, element: c})
            }
        }), se = Ia({
            transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0,
            link: function (a, c, d, e, f) {
                e.cases["?"] = e.cases["?"] || [];
                e.cases["?"].push({transclude: f, element: c})
            }
        }), ue = Ia({
            restrict: "EAC", link: function (a, c, d, e, f) {
                if (!f)throw R("ngTransclude")("orphan", wa(c));
                f(function (a) {
                    c.empty();
                    c.append(a)
                })
            }
        }), Vd = ["$templateCache", function (a) {
            return {
                restrict: "E", terminal: !0, compile: function (c, d) {
                    "text/ng-template" == d.type && a.put(d.id, c[0].text)
                }
            }
        }], gg = R("ngOptions"), te = ea({restrict: "A", terminal: !0}), Wd = ["$compile", "$parse", function (a, c) {
            var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                e = {$setViewValue: E};
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function (a, c, d) {
                    var l = this, k = {}, n = e, p;
                    l.databound = d.ngModel;
                    l.init = function (a, c, d) {
                        n = a;
                        p = d
                    };
                    l.addOption = function (c, d) {
                        La(c, '"option value"');
                        k[c] = !0;
                        n.$viewValue == c && (a.val(c), p.parent() && p.remove());
                        d && d[0].hasAttribute("selected") && (d[0].selected = !0)
                    };
                    l.removeOption = function (a) {
                        this.hasOption(a) && (delete k[a], n.$viewValue === a && this.renderUnknownOption(a))
                    };
                    l.renderUnknownOption = function (c) {
                        c =
                            "? " + Ma(c) + " ?";
                        p.val(c);
                        a.prepend(p);
                        a.val(c);
                        p.prop("selected", !0)
                    };
                    l.hasOption = function (a) {
                        return k.hasOwnProperty(a)
                    };
                    c.$on("$destroy", function () {
                        l.renderUnknownOption = E
                    })
                }],
                link: function (e, g, h, l) {
                    function k(a, c, d, e) {
                        d.$render = function () {
                            var a = d.$viewValue;
                            e.hasOption(a) ? (C.parent() && C.remove(), c.val(a), "" === a && v.prop("selected", !0)) : x(a) && v ? c.val("") : e.renderUnknownOption(a)
                        };
                        c.on("change", function () {
                            a.$apply(function () {
                                C.parent() && C.remove();
                                d.$setViewValue(c.val())
                            })
                        })
                    }

                    function n(a, c, d) {
                        var e;
                        d.$render = function () {
                            var a = new eb(d.$viewValue);
                            r(c.find("option"), function (c) {
                                c.selected = y(a.get(c.value))
                            })
                        };
                        a.$watch(function () {
                            ha(e, d.$viewValue) || (e = sa(d.$viewValue), d.$render())
                        });
                        c.on("change", function () {
                            a.$apply(function () {
                                var a = [];
                                r(c.find("option"), function (c) {
                                    c.selected && a.push(c.value)
                                });
                                d.$setViewValue(a)
                            })
                        })
                    }

                    function p(e, f, g) {
                        function h(a, c, d) {
                            T[x] = d;
                            G && (T[G] = c);
                            return a(e, T)
                        }

                        function k(a) {
                            var c;
                            if (u)if (I && H(a)) {
                                c = new eb([]);
                                for (var d = 0; d < a.length; d++)c.put(h(I, null, a[d]), !0)
                            } else c =
                                new eb(a); else I && (a = h(I, null, a));
                            return function (d, e) {
                                var f;
                                f = I ? I : B ? B : z;
                                return u ? y(c.remove(h(f, d, e))) : a === h(f, d, e)
                            }
                        }

                        function l() {
                            m || (e.$$postDigest(p), m = !0)
                        }

                        function n(a, c, d) {
                            a[c] = a[c] || 0;
                            a[c] += d ? 1 : -1
                        }

                        function p() {
                            m = !1;
                            var a = {"": []}, c = [""], d, l, s, t, v;
                            s = g.$viewValue;
                            t = L(e) || [];
                            var B = G ? Object.keys(t).sort() : t, x, A, H, z, O = {};
                            v = k(s);
                            var N = !1, U, W;
                            Q = {};
                            for (z = 0; H = B.length, z < H; z++) {
                                x = z;
                                if (G && (x = B[z], "$" === x.charAt(0)))continue;
                                A = t[x];
                                d = h(J, x, A) || "";
                                (l = a[d]) || (l = a[d] = [], c.push(d));
                                d = v(x, A);
                                N = N || d;
                                A = h(C, x, A);
                                A = y(A) ? A : "";
                                W = I ? I(e, T) : G ? B[z] : z;
                                I && (Q[W] = x);
                                l.push({id: W, label: A, selected: d})
                            }
                            u || (w || null === s ? a[""].unshift({
                                id: "",
                                label: "",
                                selected: !N
                            }) : N || a[""].unshift({id: "?", label: "", selected: !0}));
                            x = 0;
                            for (B = c.length; x < B; x++) {
                                d = c[x];
                                l = a[d];
                                R.length <= x ? (s = {
                                    element: E.clone().attr("label", d),
                                    label: l.label
                                }, t = [s], R.push(t), f.append(s.element)) : (t = R[x], s = t[0], s.label != d && s.element.attr("label", s.label = d));
                                N = null;
                                z = 0;
                                for (H = l.length; z < H; z++)d = l[z], (v = t[z + 1]) ? (N = v.element, v.label !== d.label && (n(O, v.label, !1), n(O, d.label,
                                    !0), N.text(v.label = d.label), N.prop("label", v.label)), v.id !== d.id && N.val(v.id = d.id), N[0].selected !== d.selected && (N.prop("selected", v.selected = d.selected), Qa && N.prop("selected", v.selected))) : ("" === d.id && w ? U = w : (U = F.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), t.push(v = {
                                    element: U,
                                    label: d.label,
                                    id: d.id,
                                    selected: d.selected
                                }), n(O, d.label, !0), N ? N.after(U) : s.element.append(U), N = U);
                                for (z++; t.length > z;)d = t.pop(), n(O, d.label, !1), d.element.remove()
                            }
                            for (; R.length >
                                   x;) {
                                l = R.pop();
                                for (z = 1; z < l.length; ++z)n(O, l[z].label, !1);
                                l[0].element.remove()
                            }
                            r(O, function (a, c) {
                                0 < a ? q.addOption(c) : 0 > a && q.removeOption(c)
                            })
                        }

                        var v;
                        if (!(v = s.match(d)))throw gg("iexp", s, wa(f));
                        var C = c(v[2] || v[1]), x = v[4] || v[6], A = / as /.test(v[0]) && v[1], B = A ? c(A) : null, G = v[5], J = c(v[3] || ""), z = c(v[2] ? v[1] : x), L = c(v[7]), I = v[8] ? c(v[8]) : null, Q = {}, R = [[{
                            element: f,
                            label: ""
                        }]], T = {};
                        w && (a(w)(e), w.removeClass("ng-scope"), w.remove());
                        f.empty();
                        f.on("change", function () {
                            e.$apply(function () {
                                var a = L(e) || [], c;
                                if (u)c = [], r(f.val(),
                                    function (d) {
                                        d = I ? Q[d] : d;
                                        c.push("?" === d ? t : "" === d ? null : h(B ? B : z, d, a[d]))
                                    }); else {
                                    var d = I ? Q[f.val()] : f.val();
                                    c = "?" === d ? t : "" === d ? null : h(B ? B : z, d, a[d])
                                }
                                g.$setViewValue(c);
                                p()
                            })
                        });
                        g.$render = p;
                        e.$watchCollection(L, l);
                        e.$watchCollection(function () {
                            var a = L(e), c;
                            if (a && H(a)) {
                                c = Array(a.length);
                                for (var d = 0, f = a.length; d < f; d++)c[d] = h(C, d, a[d])
                            } else if (a)for (d in c = {}, a)a.hasOwnProperty(d) && (c[d] = h(C, d, a[d]));
                            return c
                        }, l);
                        u && e.$watchCollection(function () {
                            return g.$modelValue
                        }, l)
                    }

                    if (l[1]) {
                        var q = l[0];
                        l = l[1];
                        var u = h.multiple,
                            s = h.ngOptions, w = !1, v, m = !1, F = A(W.createElement("option")), E = A(W.createElement("optgroup")), C = F.clone();
                        h = 0;
                        for (var B = g.children(), G = B.length; h < G; h++)if ("" === B[h].value) {
                            v = w = B.eq(h);
                            break
                        }
                        q.init(l, w, C);
                        u && (l.$isEmpty = function (a) {
                            return !a || 0 === a.length
                        });
                        s ? p(e, g, l) : u ? n(e, g, l) : k(e, g, l, q)
                    }
                }
            }
        }], Yd = ["$interpolate", function (a) {
            var c = {addOption: E, removeOption: E};
            return {
                restrict: "E", priority: 100, compile: function (d, e) {
                    if (x(e.value)) {
                        var f = a(d.text(), !0);
                        f || e.$set("value", d.text())
                    }
                    return function (a, d, e) {
                        var k =
                            d.parent(), n = k.data("$selectController") || k.parent().data("$selectController");
                        n && n.databound || (n = c);
                        f ? a.$watch(f, function (a, c) {
                            e.$set("value", a);
                            c !== a && n.removeOption(c);
                            n.addOption(a, d)
                        }) : n.addOption(e.value, d);
                        d.on("$destroy", function () {
                            n.removeOption(e.value)
                        })
                    }
                }
            }
        }], Xd = ea({restrict: "E", terminal: !1}), Bc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    e && (d.required = !0, e.$validators.required = function (a, c) {
                        return !d.required || !e.$isEmpty(c)
                    }, d.$observe("required", function () {
                        e.$validate()
                    }))
                }
            }
        },
        Ac = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f, g = d.ngPattern || d.pattern;
                        d.$observe("pattern", function (a) {
                            C(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                            if (a && !a.test)throw R("ngPattern")("noregexp", g, a, wa(c));
                            f = a || t;
                            e.$validate()
                        });
                        e.$validators.pattern = function (a) {
                            return e.$isEmpty(a) || x(f) || f.test(a)
                        }
                    }
                }
            }
        }, Dc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f = -1;
                        d.$observe("maxlength", function (a) {
                            a = aa(a);
                            f = isNaN(a) ? -1 : a;
                            e.$validate()
                        });
                        e.$validators.maxlength = function (a, c) {
                            return 0 > f || e.$isEmpty(c) || c.length <= f
                        }
                    }
                }
            }
        }, Cc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f = 0;
                        d.$observe("minlength", function (a) {
                            f = aa(a) || 0;
                            e.$validate()
                        });
                        e.$validators.minlength = function (a, c) {
                            return e.$isEmpty(c) || c.length >= f
                        }
                    }
                }
            }
        };
    Q.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Nd(), Pd(ca), A(W).ready(function () {
        Jd(W, uc)
    }))
})(window, document);
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map
/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (q, d, C) {
    'use strict';
    function v(r, k, h) {
        return {
            restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function (a, f, b, c, y) {
                function z() {
                    l && (h.cancel(l), l = null);
                    m && (m.$destroy(), m = null);
                    n && (l = h.leave(n), l.then(function () {
                        l = null
                    }), n = null)
                }

                function x() {
                    var b = r.current && r.current.locals;
                    if (d.isDefined(b && b.$template)) {
                        var b = a.$new(), c = r.current;
                        n = y(b, function (b) {
                            h.enter(b, null, n || f).then(function () {
                                !d.isDefined(t) || t && !a.$eval(t) || k()
                            });
                            z()
                        });
                        m = c.scope = b;
                        m.$emit("$viewContentLoaded");
                        m.$eval(w)
                    } else z()
                }

                var m, n, l, t = b.autoscroll, w = b.onload || "";
                a.$on("$routeChangeSuccess", x);
                x()
            }
        }
    }

    function A(d, k, h) {
        return {
            restrict: "ECA", priority: -400, link: function (a, f) {
                var b = h.current, c = b.locals;
                f.html(c.$template);
                var y = d(f.contents());
                b.controller && (c.$scope = a, c = k(b.controller, c), b.controllerAs && (a[b.controllerAs] = c), f.data("$ngControllerController", c), f.children().data("$ngControllerController", c));
                y(a)
            }
        }
    }

    q = d.module("ngRoute", ["ng"]).provider("$route", function () {
        function r(a, f) {
            return d.extend(Object.create(a),
                f)
        }

        function k(a, d) {
            var b = d.caseInsensitiveMatch, c = {originalPath: a, regexp: a}, h = c.keys = [];
            a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (a, d, b, c) {
                a = "?" === c ? c : null;
                c = "*" === c ? c : null;
                h.push({name: b, optional: !!a});
                d = d || "";
                return "" + (a ? "" : d) + "(?:" + (a ? d : "") + (c && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "")
            }).replace(/([\/$\*])/g, "\\$1");
            c.regexp = new RegExp("^" + a + "$", b ? "i" : "");
            return c
        }

        var h = {};
        this.when = function (a, f) {
            var b = d.copy(f);
            d.isUndefined(b.reloadOnSearch) && (b.reloadOnSearch = !0);
            d.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch);
            h[a] = d.extend(b, a && k(a, b));
            if (a) {
                var c = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                h[c] = d.extend({redirectTo: a}, k(c, b))
            }
            return this
        };
        this.caseInsensitiveMatch = !1;
        this.otherwise = function (a) {
            "string" === typeof a && (a = {redirectTo: a});
            this.when(null, a);
            return this
        };
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function (a, f, b, c, k, q, x) {
            function m(b) {
                var e = s.current;
                (v = (p = l()) && e && p.$$route === e.$$route && d.equals(p.pathParams, e.pathParams) && !p.reloadOnSearch && !w) || !e && !p || a.$broadcast("$routeChangeStart", p, e).defaultPrevented && b && b.preventDefault()
            }

            function n() {
                var u = s.current, e = p;
                if (v)u.params = e.params, d.copy(u.params, b), a.$broadcast("$routeUpdate", u); else if (e || u)w = !1, (s.current = e) && e.redirectTo && (d.isString(e.redirectTo) ? f.path(t(e.redirectTo, e.params)).search(e.params).replace() : f.url(e.redirectTo(e.pathParams, f.path(), f.search())).replace()), c.when(e).then(function () {
                    if (e) {
                        var a =
                            d.extend({}, e.resolve), b, g;
                        d.forEach(a, function (b, e) {
                            a[e] = d.isString(b) ? k.get(b) : k.invoke(b, null, null, e)
                        });
                        d.isDefined(b = e.template) ? d.isFunction(b) && (b = b(e.params)) : d.isDefined(g = e.templateUrl) && (d.isFunction(g) && (g = g(e.params)), g = x.getTrustedResourceUrl(g), d.isDefined(g) && (e.loadedTemplateUrl = g, b = q(g)));
                        d.isDefined(b) && (a.$template = b);
                        return c.all(a)
                    }
                }).then(function (c) {
                    e == s.current && (e && (e.locals = c, d.copy(e.params, b)), a.$broadcast("$routeChangeSuccess", e, u))
                }, function (b) {
                    e == s.current && a.$broadcast("$routeChangeError",
                        e, u, b)
                })
            }

            function l() {
                var a, b;
                d.forEach(h, function (c, h) {
                    var g;
                    if (g = !b) {
                        var k = f.path();
                        g = c.keys;
                        var m = {};
                        if (c.regexp)if (k = c.regexp.exec(k)) {
                            for (var l = 1, n = k.length; l < n; ++l) {
                                var p = g[l - 1], q = k[l];
                                p && q && (m[p.name] = q)
                            }
                            g = m
                        } else g = null; else g = null;
                        g = a = g
                    }
                    g && (b = r(c, {params: d.extend({}, f.search(), a), pathParams: a}), b.$$route = c)
                });
                return b || h[null] && r(h[null], {params: {}, pathParams: {}})
            }

            function t(a, b) {
                var c = [];
                d.forEach((a || "").split(":"), function (a, d) {
                    if (0 === d)c.push(a); else {
                        var f = a.match(/(\w+)(?:[?*])?(.*)/),
                            h = f[1];
                        c.push(b[h]);
                        c.push(f[2] || "");
                        delete b[h]
                    }
                });
                return c.join("")
            }

            var w = !1, p, v, s = {
                routes: h, reload: function () {
                    w = !0;
                    a.$evalAsync(function () {
                        m();
                        n()
                    })
                }, updateParams: function (a) {
                    if (this.current && this.current.$$route)a = d.extend({}, this.current.params, a), f.path(t(this.current.$$route.originalPath, a)), f.search(a); else throw B("norout");
                }
            };
            a.$on("$locationChangeStart", m);
            a.$on("$locationChangeSuccess", n);
            return s
        }]
    });
    var B = d.$$minErr("ngRoute");
    q.provider("$routeParams", function () {
        this.$get = function () {
            return {}
        }
    });
    q.directive("ngView", v);
    q.directive("ngView", A);
    v.$inject = ["$route", "$anchorScroll", "$animate"];
    A.$inject = ["$compile", "$controller", "$route"]
})(window, window.angular);
//# sourceMappingURL=angular-route.min.js.map
(function () {
    function s(r) {
        var i = function (e, t) {
            return n("", e, t)
        }, s = e;
        r && (e[r] || (e[r] = {}), s = e[r]);
        if (!s.define || !s.define.packaged)t.original = s.define, s.define = t, s.define.packaged = !0;
        if (!s.require || !s.require.packaged)n.original = s.require, s.require = i, s.require.packaged = !0
    }

    var ACE_NAMESPACE = "", e = function () {
        return this
    }();
    if (!ACE_NAMESPACE && typeof requirejs != "undefined")return;
    var t = function (e, n, r) {
        if (typeof e != "string") {
            t.original ? t.original.apply(window, arguments) : (console.error("dropping module because define wasn't a string."), console.trace());
            return
        }
        arguments.length == 2 && (r = n), t.modules || (t.modules = {}, t.payloads = {}), t.payloads[e] = r, t.modules[e] = null
    }, n = function (e, t, r) {
        if (Object.prototype.toString.call(t) === "[object Array]") {
            var s = [];
            for (var o = 0, u = t.length; o < u; ++o) {
                var a = i(e, t[o]);
                if (!a && n.original)return n.original.apply(window, arguments);
                s.push(a)
            }
            r && r.apply(null, s)
        } else {
            if (typeof t == "string") {
                var f = i(e, t);
                return !f && n.original ? n.original.apply(window, arguments) : (r && r(), f)
            }
            if (n.original)return n.original.apply(window, arguments)
        }
    }, r = function (e, t) {
        if (t.indexOf("!") !== -1) {
            var n = t.split("!");
            return r(e, n[0]) + "!" + r(e, n[1])
        }
        if (t.charAt(0) == ".") {
            var i = e.split("/").slice(0, -1).join("/");
            t = i + "/" + t;
            while (t.indexOf(".") !== -1 && s != t) {
                var s = t;
                t = t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "")
            }
        }
        return t
    }, i = function (e, i) {
        i = r(e, i);
        var s = t.modules[i];
        if (!s) {
            s = t.payloads[i];
            if (typeof s == "function") {
                var o = {}, u = {id: i, uri: "", exports: o, packaged: !0}, a = function (e, t) {
                    return n(i, e, t)
                }, f = s(a, o, u);
                o = f || u.exports, t.modules[i] = o, delete t.payloads[i]
            }
            s = t.modules[i] = o || s
        }
        return s
    };
    s(ACE_NAMESPACE)
})(), define("ace/lib/regexp", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    function o(e) {
        return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "")
    }

    function u(e, t, n) {
        if (Array.prototype.indexOf)return e.indexOf(t, n);
        for (var r = n || 0; r < e.length; r++)if (e[r] === t)return r;
        return -1
    }

    var r = {
        exec: RegExp.prototype.exec,
        test: RegExp.prototype.test,
        match: String.prototype.match,
        replace: String.prototype.replace,
        split: String.prototype.split
    }, i = r.exec.call(/()??/, "")[1] === undefined, s = function () {
        var e = /^/g;
        return r.test.call(e, ""), !e.lastIndex
    }();
    if (s && i)return;
    RegExp.prototype.exec = function (e) {
        var t = r.exec.apply(this, arguments), n, a;
        if (typeof e == "string" && t) {
            !i && t.length > 1 && u(t, "") > -1 && (a = RegExp(this.source, r.replace.call(o(this), "g", "")), r.replace.call(e.slice(t.index), a, function () {
                for (var e = 1; e < arguments.length - 2; e++)arguments[e] === undefined && (t[e] = undefined)
            }));
            if (this._xregexp && this._xregexp.captureNames)for (var f = 1; f < t.length; f++)n = this._xregexp.captureNames[f - 1], n && (t[n] = t[f]);
            !s && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--
        }
        return t
    }, s || (RegExp.prototype.test = function (e) {
        var t = r.exec.call(this, e);
        return t && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--, !!t
    })
}), define("ace/lib/es5-shim", ["require", "exports", "module"], function (e, t, n) {
    function r() {
    }

    function w(e) {
        try {
            return Object.defineProperty(e, "sentinel", {}), "sentinel"in e
        } catch (t) {
        }
    }

    function H(e) {
        return e = +e, e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
    }

    function B(e) {
        var t = typeof e;
        return e === null || t === "undefined" || t === "boolean" || t === "number" || t === "string"
    }

    function j(e) {
        var t, n, r;
        if (B(e))return e;
        n = e.valueOf;
        if (typeof n == "function") {
            t = n.call(e);
            if (B(t))return t
        }
        r = e.toString;
        if (typeof r == "function") {
            t = r.call(e);
            if (B(t))return t
        }
        throw new TypeError
    }

    Function.prototype.bind || (Function.prototype.bind = function (t) {
        var n = this;
        if (typeof n != "function")throw new TypeError("Function.prototype.bind called on incompatible " + n);
        var i = u.call(arguments, 1), s = function () {
            if (this instanceof s) {
                var e = n.apply(this, i.concat(u.call(arguments)));
                return Object(e) === e ? e : this
            }
            return n.apply(t, i.concat(u.call(arguments)))
        };
        return n.prototype && (r.prototype = n.prototype, s.prototype = new r, r.prototype = null), s
    });
    var i = Function.prototype.call, s = Array.prototype, o = Object.prototype, u = s.slice, a = i.bind(o.toString), f = i.bind(o.hasOwnProperty), l, c, h, p, d;
    if (d = f(o, "__defineGetter__"))l = i.bind(o.__defineGetter__), c = i.bind(o.__defineSetter__), h = i.bind(o.__lookupGetter__), p = i.bind(o.__lookupSetter__);
    if ([1, 2].splice(0).length != 2)if (!function () {
            function e(e) {
                var t = new Array(e + 2);
                return t[0] = t[1] = 0, t
            }

            var t = [], n;
            t.splice.apply(t, e(20)), t.splice.apply(t, e(26)), n = t.length, t.splice(5, 0, "XXX"), n + 1 == t.length;
            if (n + 1 == t.length)return !0
        }())Array.prototype.splice = function (e, t) {
        var n = this.length;
        e > 0 ? e > n && (e = n) : e == void 0 ? e = 0 : e < 0 && (e = Math.max(n + e, 0)), e + t < n || (t = n - e);
        var r = this.slice(e, e + t), i = u.call(arguments, 2), s = i.length;
        if (e === n)s && this.push.apply(this, i); else {
            var o = Math.min(t, n - e), a = e + o, f = a + s - o, l = n - a, c = n - o;
            if (f < a)for (var h = 0; h < l; ++h)this[f + h] = this[a + h]; else if (f > a)for (h = l; h--;)this[f + h] = this[a + h];
            if (s && e === c)this.length = c, this.push.apply(this, i); else {
                this.length = c + s;
                for (h = 0; h < s; ++h)this[e + h] = i[h]
            }
        }
        return r
    }; else {
        var v = Array.prototype.splice;
        Array.prototype.splice = function (e, t) {
            return arguments.length ? v.apply(this, [e === void 0 ? 0 : e, t === void 0 ? this.length - e : t].concat(u.call(arguments, 2))) : []
        }
    }
    Array.isArray || (Array.isArray = function (t) {
        return a(t) == "[object Array]"
    });
    var m = Object("a"), g = m[0] != "a" || !(0 in m);
    Array.prototype.forEach || (Array.prototype.forEach = function (t) {
        var n = F(this), r = g && a(this) == "[object String]" ? this.split("") : n, i = arguments[1], s = -1, o = r.length >>> 0;
        if (a(t) != "[object Function]")throw new TypeError;
        while (++s < o)s in r && t.call(i, r[s], s, n)
    }), Array.prototype.map || (Array.prototype.map = function (t) {
        var n = F(this), r = g && a(this) == "[object String]" ? this.split("") : n, i = r.length >>> 0, s = Array(i), o = arguments[1];
        if (a(t) != "[object Function]")throw new TypeError(t + " is not a function");
        for (var u = 0; u < i; u++)u in r && (s[u] = t.call(o, r[u], u, n));
        return s
    }), Array.prototype.filter || (Array.prototype.filter = function (t) {
        var n = F(this), r = g && a(this) == "[object String]" ? this.split("") : n, i = r.length >>> 0, s = [], o, u = arguments[1];
        if (a(t) != "[object Function]")throw new TypeError(t + " is not a function");
        for (var f = 0; f < i; f++)f in r && (o = r[f], t.call(u, o, f, n) && s.push(o));
        return s
    }), Array.prototype.every || (Array.prototype.every = function (t) {
        var n = F(this), r = g && a(this) == "[object String]" ? this.split("") : n, i = r.length >>> 0, s = arguments[1];
        if (a(t) != "[object Function]")throw new TypeError(t + " is not a function");
        for (var o = 0; o < i; o++)if (o in r && !t.call(s, r[o], o, n))return !1;
        return !0
    }), Array.prototype.some || (Array.prototype.some = function (t) {
        var n = F(this), r = g && a(this) == "[object String]" ? this.split("") : n, i = r.length >>> 0, s = arguments[1];
        if (a(t) != "[object Function]")throw new TypeError(t + " is not a function");
        for (var o = 0; o < i; o++)if (o in r && t.call(s, r[o], o, n))return !0;
        return !1
    }), Array.prototype.reduce || (Array.prototype.reduce = function (t) {
        var n = F(this), r = g && a(this) == "[object String]" ? this.split("") : n, i = r.length >>> 0;
        if (a(t) != "[object Function]")throw new TypeError(t + " is not a function");
        if (!i && arguments.length == 1)throw new TypeError("reduce of empty array with no initial value");
        var s = 0, o;
        if (arguments.length >= 2)o = arguments[1]; else do {
            if (s in r) {
                o = r[s++];
                break
            }
            if (++s >= i)throw new TypeError("reduce of empty array with no initial value")
        } while (!0);
        for (; s < i; s++)s in r && (o = t.call(void 0, o, r[s], s, n));
        return o
    }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function (t) {
        var n = F(this), r = g && a(this) == "[object String]" ? this.split("") : n, i = r.length >>> 0;
        if (a(t) != "[object Function]")throw new TypeError(t + " is not a function");
        if (!i && arguments.length == 1)throw new TypeError("reduceRight of empty array with no initial value");
        var s, o = i - 1;
        if (arguments.length >= 2)s = arguments[1]; else do {
            if (o in r) {
                s = r[o--];
                break
            }
            if (--o < 0)throw new TypeError("reduceRight of empty array with no initial value")
        } while (!0);
        do o in this && (s = t.call(void 0, s, r[o], o, n)); while (o--);
        return s
    });
    if (!Array.prototype.indexOf || [0, 1].indexOf(1, 2) != -1)Array.prototype.indexOf = function (t) {
        var n = g && a(this) == "[object String]" ? this.split("") : F(this), r = n.length >>> 0;
        if (!r)return -1;
        var i = 0;
        arguments.length > 1 && (i = H(arguments[1])), i = i >= 0 ? i : Math.max(0, r + i);
        for (; i < r; i++)if (i in n && n[i] === t)return i;
        return -1
    };
    if (!Array.prototype.lastIndexOf || [0, 1].lastIndexOf(0, -3) != -1)Array.prototype.lastIndexOf = function (t) {
        var n = g && a(this) == "[object String]" ? this.split("") : F(this), r = n.length >>> 0;
        if (!r)return -1;
        var i = r - 1;
        arguments.length > 1 && (i = Math.min(i, H(arguments[1]))), i = i >= 0 ? i : r - Math.abs(i);
        for (; i >= 0; i--)if (i in n && t === n[i])return i;
        return -1
    };
    Object.getPrototypeOf || (Object.getPrototypeOf = function (t) {
        return t.__proto__ || (t.constructor ? t.constructor.prototype : o)
    });
    if (!Object.getOwnPropertyDescriptor) {
        var y = "Object.getOwnPropertyDescriptor called on a non-object: ";
        Object.getOwnPropertyDescriptor = function (t, n) {
            if (typeof t != "object" && typeof t != "function" || t === null)throw new TypeError(y + t);
            if (!f(t, n))return;
            var r, i, s;
            r = {enumerable: !0, configurable: !0};
            if (d) {
                var u = t.__proto__;
                t.__proto__ = o;
                var i = h(t, n), s = p(t, n);
                t.__proto__ = u;
                if (i || s)return i && (r.get = i), s && (r.set = s), r
            }
            return r.value = t[n], r
        }
    }
    Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (t) {
        return Object.keys(t)
    });
    if (!Object.create) {
        var b;
        Object.prototype.__proto__ === null ? b = function () {
            return {__proto__: null}
        } : b = function () {
            var e = {};
            for (var t in e)e[t] = null;
            return e.constructor = e.hasOwnProperty = e.propertyIsEnumerable = e.isPrototypeOf = e.toLocaleString = e.toString = e.valueOf = e.__proto__ = null, e
        }, Object.create = function (t, n) {
            var r;
            if (t === null)r = b(); else {
                if (typeof t != "object")throw new TypeError("typeof prototype[" + typeof t + "] != 'object'");
                var i = function () {
                };
                i.prototype = t, r = new i, r.__proto__ = t
            }
            return n !== void 0 && Object.defineProperties(r, n), r
        }
    }
    if (Object.defineProperty) {
        var E = w({}), S = typeof document == "undefined" || w(document.createElement("div"));
        if (!E || !S)var x = Object.defineProperty
    }
    if (!Object.defineProperty || x) {
        var T = "Property description must be an object: ", N = "Object.defineProperty called on non-object: ", C = "getters & setters can not be defined on this javascript engine";
        Object.defineProperty = function (t, n, r) {
            if (typeof t != "object" && typeof t != "function" || t === null)throw new TypeError(N + t);
            if (typeof r != "object" && typeof r != "function" || r === null)throw new TypeError(T + r);
            if (x)try {
                return x.call(Object, t, n, r)
            } catch (i) {
            }
            if (f(r, "value"))if (d && (h(t, n) || p(t, n))) {
                var s = t.__proto__;
                t.__proto__ = o, delete t[n], t[n] = r.value, t.__proto__ = s
            } else t[n] = r.value; else {
                if (!d)throw new TypeError(C);
                f(r, "get") && l(t, n, r.get), f(r, "set") && c(t, n, r.set)
            }
            return t
        }
    }
    Object.defineProperties || (Object.defineProperties = function (t, n) {
        for (var r in n)f(n, r) && Object.defineProperty(t, r, n[r]);
        return t
    }), Object.seal || (Object.seal = function (t) {
        return t
    }), Object.freeze || (Object.freeze = function (t) {
        return t
    });
    try {
        Object.freeze(function () {
        })
    } catch (k) {
        Object.freeze = function (t) {
            return function (n) {
                return typeof n == "function" ? n : t(n)
            }
        }(Object.freeze)
    }
    Object.preventExtensions || (Object.preventExtensions = function (t) {
        return t
    }), Object.isSealed || (Object.isSealed = function (t) {
        return !1
    }), Object.isFrozen || (Object.isFrozen = function (t) {
        return !1
    }), Object.isExtensible || (Object.isExtensible = function (t) {
        if (Object(t) === t)throw new TypeError;
        var n = "";
        while (f(t, n))n += "?";
        t[n] = !0;
        var r = f(t, n);
        return delete t[n], r
    });
    if (!Object.keys) {
        var L = !0, A = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], O = A.length;
        for (var M in{toString: null})L = !1;
        Object.keys = function I(e) {
            if (typeof e != "object" && typeof e != "function" || e === null)throw new TypeError("Object.keys called on a non-object");
            var I = [];
            for (var t in e)f(e, t) && I.push(t);
            if (L)for (var n = 0, r = O; n < r; n++) {
                var i = A[n];
                f(e, i) && I.push(i)
            }
            return I
        }
    }
    Date.now || (Date.now = function () {
        return (new Date).getTime()
    });
    var _ = "	\n\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
    if (!String.prototype.trim || _.trim()) {
        _ = "[" + _ + "]";
        var D = new RegExp("^" + _ + _ + "*"), P = new RegExp(_ + _ + "*$");
        String.prototype.trim = function () {
            return String(this).replace(D, "").replace(P, "")
        }
    }
    var F = function (e) {
        if (e == null)throw new TypeError("can't convert " + e + " to object");
        return Object(e)
    }
}), define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/regexp", "ace/lib/es5-shim"], function (e, t, n) {
    "use strict";
    e("./regexp"), e("./es5-shim")
}), define("ace/lib/dom", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    if (typeof document == "undefined")return;
    var r = "http://www.w3.org/1999/xhtml";
    t.getDocumentHead = function (e) {
        return e || (e = document), e.head || e.getElementsByTagName("head")[0] || e.documentElement
    }, t.createElement = function (e, t) {
        return document.createElementNS ? document.createElementNS(t || r, e) : document.createElement(e)
    }, t.hasCssClass = function (e, t) {
        var n = (e.className || "").split(/\s+/g);
        return n.indexOf(t) !== -1
    }, t.addCssClass = function (e, n) {
        t.hasCssClass(e, n) || (e.className += " " + n)
    }, t.removeCssClass = function (e, t) {
        var n = e.className.split(/\s+/g);
        for (; ;) {
            var r = n.indexOf(t);
            if (r == -1)break;
            n.splice(r, 1)
        }
        e.className = n.join(" ")
    }, t.toggleCssClass = function (e, t) {
        var n = e.className.split(/\s+/g), r = !0;
        for (; ;) {
            var i = n.indexOf(t);
            if (i == -1)break;
            r = !1, n.splice(i, 1)
        }
        return r && n.push(t), e.className = n.join(" "), r
    }, t.setCssClass = function (e, n, r) {
        r ? t.addCssClass(e, n) : t.removeCssClass(e, n)
    }, t.hasCssString = function (e, t) {
        var n = 0, r;
        t = t || document;
        if (t.createStyleSheet && (r = t.styleSheets)) {
            while (n < r.length)if (r[n++].owningElement.id === e)return !0
        } else if (r = t.getElementsByTagName("style"))while (n < r.length)if (r[n++].id === e)return !0;
        return !1
    }, t.importCssString = function (n, i, s) {
        s = s || document;
        if (i && t.hasCssString(i, s))return null;
        var o;
        s.createStyleSheet ? (o = s.createStyleSheet(), o.cssText = n, i && (o.owningElement.id = i)) : (o = s.createElementNS ? s.createElementNS(r, "style") : s.createElement("style"), o.appendChild(s.createTextNode(n)), i && (o.id = i), t.getDocumentHead(s).appendChild(o))
    }, t.importCssStylsheet = function (e, n) {
        if (n.createStyleSheet)n.createStyleSheet(e); else {
            var r = t.createElement("link");
            r.rel = "stylesheet", r.href = e, t.getDocumentHead(n).appendChild(r)
        }
    }, t.getInnerWidth = function (e) {
        return parseInt(t.computedStyle(e, "paddingLeft"), 10) + parseInt(t.computedStyle(e, "paddingRight"), 10) + e.clientWidth
    }, t.getInnerHeight = function (e) {
        return parseInt(t.computedStyle(e, "paddingTop"), 10) + parseInt(t.computedStyle(e, "paddingBottom"), 10) + e.clientHeight
    }, window.pageYOffset !== undefined ? (t.getPageScrollTop = function () {
        return window.pageYOffset
    }, t.getPageScrollLeft = function () {
        return window.pageXOffset
    }) : (t.getPageScrollTop = function () {
        return document.body.scrollTop
    }, t.getPageScrollLeft = function () {
        return document.body.scrollLeft
    }), window.getComputedStyle ? t.computedStyle = function (e, t) {
        return t ? (window.getComputedStyle(e, "") || {})[t] || "" : window.getComputedStyle(e, "") || {}
    } : t.computedStyle = function (e, t) {
        return t ? e.currentStyle[t] : e.currentStyle
    }, t.scrollbarWidth = function (e) {
        var n = t.createElement("ace_inner");
        n.style.width = "100%", n.style.minWidth = "0px", n.style.height = "200px", n.style.display = "block";
        var r = t.createElement("ace_outer"), i = r.style;
        i.position = "absolute", i.left = "-10000px", i.overflow = "hidden", i.width = "200px", i.minWidth = "0px", i.height = "150px", i.display = "block", r.appendChild(n);
        var s = e.documentElement;
        s.appendChild(r);
        var o = n.offsetWidth;
        i.overflow = "scroll";
        var u = n.offsetWidth;
        return o == u && (u = r.clientWidth), s.removeChild(r), o - u
    }, t.setInnerHtml = function (e, t) {
        var n = e.cloneNode(!1);
        return n.innerHTML = t, e.parentNode.replaceChild(n, e), n
    }, "textContent"in document.documentElement ? (t.setInnerText = function (e, t) {
        e.textContent = t
    }, t.getInnerText = function (e) {
        return e.textContent
    }) : (t.setInnerText = function (e, t) {
        e.innerText = t
    }, t.getInnerText = function (e) {
        return e.innerText
    }), t.getParentWindow = function (e) {
        return e.defaultView || e.parentWindow
    }
}), define("ace/lib/oop", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    t.inherits = function (e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    }, t.mixin = function (e, t) {
        for (var n in t)e[n] = t[n];
        return e
    }, t.implement = function (e, n) {
        t.mixin(e, n)
    }
}), define("ace/lib/keys", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop"], function (e, t, n) {
    "use strict";
    e("./fixoldbrowsers");
    var r = e("./oop"), i = function () {
        var e = {
            MODIFIER_KEYS: {16: "Shift", 17: "Ctrl", 18: "Alt", 224: "Meta"},
            KEY_MODS: {ctrl: 1, alt: 2, option: 2, shift: 4, "super": 8, meta: 8, command: 8, cmd: 8},
            FUNCTION_KEYS: {
                8: "Backspace",
                9: "Tab",
                13: "Return",
                19: "Pause",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "Print",
                45: "Insert",
                46: "Delete",
                96: "Numpad0",
                97: "Numpad1",
                98: "Numpad2",
                99: "Numpad3",
                100: "Numpad4",
                101: "Numpad5",
                102: "Numpad6",
                103: "Numpad7",
                104: "Numpad8",
                105: "Numpad9",
                "-13": "NumpadEnter",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "Numlock",
                145: "Scrolllock"
            },
            PRINTABLE_KEYS: {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                61: "=",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                107: "+",
                109: "-",
                110: ".",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            }
        }, t, n;
        for (n in e.FUNCTION_KEYS)t = e.FUNCTION_KEYS[n].toLowerCase(), e[t] = parseInt(n, 10);
        for (n in e.PRINTABLE_KEYS)t = e.PRINTABLE_KEYS[n].toLowerCase(), e[t] = parseInt(n, 10);
        return r.mixin(e, e.MODIFIER_KEYS), r.mixin(e, e.PRINTABLE_KEYS), r.mixin(e, e.FUNCTION_KEYS), e.enter = e["return"], e.escape = e.esc, e.del = e["delete"], e[173] = "-", function () {
            var t = ["cmd", "ctrl", "alt", "shift"];
            for (var n = Math.pow(2, t.length); n--;)e.KEY_MODS[n] = t.filter(function (t) {
                    return n & e.KEY_MODS[t]
                }).join("-") + "-"
        }(), e
    }();
    r.mixin(t, i), t.keyCodeToString = function (e) {
        var t = i[e];
        return typeof t != "string" && (t = String.fromCharCode(e)), t.toLowerCase()
    }
}), define("ace/lib/useragent", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    t.OS = {LINUX: "LINUX", MAC: "MAC", WINDOWS: "WINDOWS"}, t.getOS = function () {
        return t.isMac ? t.OS.MAC : t.isLinux ? t.OS.LINUX : t.OS.WINDOWS
    };
    if (typeof navigator != "object")return;
    var r = (navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase(), i = navigator.userAgent;
    t.isWin = r == "win", t.isMac = r == "mac", t.isLinux = r == "linux", t.isIE = navigator.appName == "Microsoft Internet Explorer" || navigator.appName.indexOf("MSAppHost") >= 0 ? parseFloat((i.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((i.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), t.isOldIE = t.isIE && t.isIE < 9, t.isGecko = t.isMozilla = (window.Controllers || window.controllers) && window.navigator.product === "Gecko", t.isOldGecko = t.isGecko && parseInt((i.match(/rv\:(\d+)/) || [])[1], 10) < 4, t.isOpera = window.opera && Object.prototype.toString.call(window.opera) == "[object Opera]", t.isWebKit = parseFloat(i.split("WebKit/")[1]) || undefined, t.isChrome = parseFloat(i.split(" Chrome/")[1]) || undefined, t.isAIR = i.indexOf("AdobeAIR") >= 0, t.isIPad = i.indexOf("iPad") >= 0, t.isTouchPad = i.indexOf("TouchPad") >= 0, t.isChromeOS = i.indexOf(" CrOS ") >= 0
}), define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function (e, t, n) {
    "use strict";
    function o(e, t, n) {
        var o = s(t);
        if (!i.isMac && u) {
            if (u[91] || u[92])o |= 8;
            if (u.altGr) {
                if ((3 & o) == 3)return;
                u.altGr = 0
            }
            if (n === 18 || n === 17) {
                var f = "location"in t ? t.location : t.keyLocation;
                if (n === 17 && f === 1)a = t.timeStamp; else if (n === 18 && o === 3 && f === 2) {
                    var l = -a;
                    a = t.timeStamp, l += a, l < 3 && (u.altGr = !0)
                }
            }
        }
        if (n in r.MODIFIER_KEYS) {
            switch (r.MODIFIER_KEYS[n]) {
                case"Alt":
                    o = 2;
                    break;
                case"Shift":
                    o = 4;
                    break;
                case"Ctrl":
                    o = 1;
                    break;
                default:
                    o = 8
            }
            n = -1
        }
        o & 8 && (n === 91 || n === 93) && (n = -1);
        if (!o && n === 13) {
            var f = "location"in t ? t.location : t.keyLocation;
            if (f === 3) {
                e(t, o, -n);
                if (t.defaultPrevented)return
            }
        }
        if (i.isChromeOS && o & 8) {
            e(t, o, n);
            if (t.defaultPrevented)return;
            o &= -9
        }
        return !!o || n in r.FUNCTION_KEYS || n in r.PRINTABLE_KEYS ? e(t, o, n) : !1
    }

    var r = e("./keys"), i = e("./useragent");
    t.addListener = function (e, t, n) {
        if (e.addEventListener)return e.addEventListener(t, n, !1);
        if (e.attachEvent) {
            var r = function () {
                n.call(e, window.event)
            };
            n._wrapper = r, e.attachEvent("on" + t, r)
        }
    }, t.removeListener = function (e, t, n) {
        if (e.removeEventListener)return e.removeEventListener(t, n, !1);
        e.detachEvent && e.detachEvent("on" + t, n._wrapper || n)
    }, t.stopEvent = function (e) {
        return t.stopPropagation(e), t.preventDefault(e), !1
    }, t.stopPropagation = function (e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }, t.preventDefault = function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }, t.getButton = function (e) {
        return e.type == "dblclick" ? 0 : e.type == "contextmenu" || i.isMac && e.ctrlKey && !e.altKey && !e.shiftKey ? 2 : e.preventDefault ? e.button : {
            1: 0,
            2: 2,
            4: 1
        }[e.button]
    }, t.capture = function (e, n, r) {
        function i(e) {
            n && n(e), r && r(e), t.removeListener(document, "mousemove", n, !0), t.removeListener(document, "mouseup", i, !0), t.removeListener(document, "dragstart", i, !0)
        }

        return t.addListener(document, "mousemove", n, !0), t.addListener(document, "mouseup", i, !0), t.addListener(document, "dragstart", i, !0), i
    }, t.addMouseWheelListener = function (e, n) {
        "onmousewheel"in e ? t.addListener(e, "mousewheel", function (e) {
            var t = 8;
            e.wheelDeltaX !== undefined ? (e.wheelX = -e.wheelDeltaX / t, e.wheelY = -e.wheelDeltaY / t) : (e.wheelX = 0, e.wheelY = -e.wheelDelta / t), n(e)
        }) : "onwheel"in e ? t.addListener(e, "wheel", function (e) {
            var t = .35;
            switch (e.deltaMode) {
                case e.DOM_DELTA_PIXEL:
                    e.wheelX = e.deltaX * t || 0, e.wheelY = e.deltaY * t || 0;
                    break;
                case e.DOM_DELTA_LINE:
                case e.DOM_DELTA_PAGE:
                    e.wheelX = (e.deltaX || 0) * 5, e.wheelY = (e.deltaY || 0) * 5
            }
            n(e)
        }) : t.addListener(e, "DOMMouseScroll", function (e) {
            e.axis && e.axis == e.HORIZONTAL_AXIS ? (e.wheelX = (e.detail || 0) * 5, e.wheelY = 0) : (e.wheelX = 0, e.wheelY = (e.detail || 0) * 5), n(e)
        })
    }, t.addMultiMouseDownListener = function (e, n, r, s) {
        var o = 0, u, a, f, l = {2: "dblclick", 3: "tripleclick", 4: "quadclick"};
        t.addListener(e, "mousedown", function (e) {
            t.getButton(e) !== 0 ? o = 0 : e.detail > 1 ? (o++, o > 4 && (o = 1)) : o = 1;
            if (i.isIE) {
                var c = Math.abs(e.clientX - u) > 5 || Math.abs(e.clientY - a) > 5;
                if (!f || c)o = 1;
                f && clearTimeout(f), f = setTimeout(function () {
                    f = null
                }, n[o - 1] || 600), o == 1 && (u = e.clientX, a = e.clientY)
            }
            e._clicks = o, r[s]("mousedown", e);
            if (o > 4)o = 0; else if (o > 1)return r[s](l[o], e)
        }), i.isOldIE && t.addListener(e, "dblclick", function (e) {
            o = 2, f && clearTimeout(f), f = setTimeout(function () {
                f = null
            }, n[o - 1] || 600), r[s]("mousedown", e), r[s](l[o], e)
        })
    };
    var s = !i.isMac || !i.isOpera || "KeyboardEvent"in window ? function (e) {
        return 0 | (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0)
    } : function (e) {
        return 0 | (e.metaKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.ctrlKey ? 8 : 0)
    };
    t.getModifierString = function (e) {
        return r.KEY_MODS[s(e)]
    };
    var u = null, a = 0;
    t.addCommandKeyListener = function (e, n) {
        var r = t.addListener;
        if (i.isOldGecko || i.isOpera && !("KeyboardEvent"in window)) {
            var s = null;
            r(e, "keydown", function (e) {
                s = e.keyCode
            }), r(e, "keypress", function (e) {
                return o(n, e, s)
            })
        } else {
            var a = null;
            r(e, "keydown", function (e) {
                u[e.keyCode] = !0;
                var t = o(n, e, e.keyCode);
                return a = e.defaultPrevented, t
            }), r(e, "keypress", function (e) {
                a && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && (t.stopEvent(e), a = null)
            }), r(e, "keyup", function (e) {
                u[e.keyCode] = null
            }), u || (u = Object.create(null), r(window, "focus", function (e) {
                u = Object.create(null)
            }))
        }
    };
    if (window.postMessage && !i.isOldIE) {
        var f = 1;
        t.nextTick = function (e, n) {
            n = n || window;
            var r = "zero-timeout-message-" + f;
            t.addListener(n, "message", function i(s) {
                s.data == r && (t.stopPropagation(s), t.removeListener(n, "message", i), e())
            }), n.postMessage(r, "*")
        }
    }
    t.nextFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame, t.nextFrame ? t.nextFrame = t.nextFrame.bind(window) : t.nextFrame = function (e) {
        setTimeout(e, 17)
    }
}), define("ace/lib/lang", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    t.last = function (e) {
        return e[e.length - 1]
    }, t.stringReverse = function (e) {
        return e.split("").reverse().join("")
    }, t.stringRepeat = function (e, t) {
        var n = "";
        while (t > 0) {
            t & 1 && (n += e);
            if (t >>= 1)e += e
        }
        return n
    };
    var r = /^\s\s*/, i = /\s\s*$/;
    t.stringTrimLeft = function (e) {
        return e.replace(r, "")
    }, t.stringTrimRight = function (e) {
        return e.replace(i, "")
    }, t.copyObject = function (e) {
        var t = {};
        for (var n in e)t[n] = e[n];
        return t
    }, t.copyArray = function (e) {
        var t = [];
        for (var n = 0, r = e.length; n < r; n++)e[n] && typeof e[n] == "object" ? t[n] = this.copyObject(e[n]) : t[n] = e[n];
        return t
    }, t.deepCopy = function (e) {
        if (typeof e != "object" || !e)return e;
        var n = e.constructor;
        if (n === RegExp)return e;
        var r = n();
        for (var i in e)typeof e[i] == "object" ? r[i] = t.deepCopy(e[i]) : r[i] = e[i];
        return r
    }, t.arrayToMap = function (e) {
        var t = {};
        for (var n = 0; n < e.length; n++)t[e[n]] = 1;
        return t
    }, t.createMap = function (e) {
        var t = Object.create(null);
        for (var n in e)t[n] = e[n];
        return t
    }, t.arrayRemove = function (e, t) {
        for (var n = 0; n <= e.length; n++)t === e[n] && e.splice(n, 1)
    }, t.escapeRegExp = function (e) {
        return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
    }, t.escapeHTML = function (e) {
        return e.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;")
    }, t.getMatchOffsets = function (e, t) {
        var n = [];
        return e.replace(t, function (e) {
            n.push({offset: arguments[arguments.length - 2], length: e.length})
        }), n
    }, t.deferredCall = function (e) {
        var t = null, n = function () {
            t = null, e()
        }, r = function (e) {
            return r.cancel(), t = setTimeout(n, e || 0), r
        };
        return r.schedule = r, r.call = function () {
            return this.cancel(), e(), r
        }, r.cancel = function () {
            return clearTimeout(t), t = null, r
        }, r.isPending = function () {
            return t
        }, r
    }, t.delayedCall = function (e, t) {
        var n = null, r = function () {
            n = null, e()
        }, i = function (e) {
            n == null && (n = setTimeout(r, e || t))
        };
        return i.delay = function (e) {
            n && clearTimeout(n), n = setTimeout(r, e || t)
        }, i.schedule = i, i.call = function () {
            this.cancel(), e()
        }, i.cancel = function () {
            n && clearTimeout(n), n = null
        }, i.isPending = function () {
            return n
        }, i
    }
}), define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang"], function (e, t, n) {
    "use strict";
    var r = e("../lib/event"), i = e("../lib/useragent"), s = e("../lib/dom"), o = e("../lib/lang"), u = i.isChrome < 18, a = i.isIE, f = function (e, t) {
        function b(e) {
            if (h)return;
            if (k)t = 0, r = e ? 0 : n.value.length - 1; else var t = e ? 2 : 1, r = 2;
            try {
                n.setSelectionRange(t, r)
            } catch (i) {
            }
        }

        function w() {
            if (h)return;
            n.value = f, i.isWebKit && y.schedule()
        }

        function R() {
            clearTimeout(q), q = setTimeout(function () {
                p && (n.style.cssText = p, p = ""), t.renderer.$keepTextAreaAtCursor == null && (t.renderer.$keepTextAreaAtCursor = !0, t.renderer.$moveTextAreaToCursor())
            }, i.isOldIE ? 200 : 0)
        }

        var n = s.createElement("textarea");
        n.className = "ace_text-input", i.isTouchPad && n.setAttribute("x-palm-disable-auto-cap", !0), n.wrap = "off", n.autocorrect = "off", n.autocapitalize = "off", n.spellcheck = !1, n.style.opacity = "0", i.isOldIE && (n.style.top = "-100px"), e.insertBefore(n, e.firstChild);
        var f = "", l = !1, c = !1, h = !1, p = "", d = !0;
        try {
            var v = document.activeElement === n
        } catch (m) {
        }
        r.addListener(n, "blur", function () {
            t.onBlur(), v = !1
        }), r.addListener(n, "focus", function () {
            v = !0, t.onFocus(), b()
        }), this.focus = function () {
            n.focus()
        }, this.blur = function () {
            n.blur()
        }, this.isFocused = function () {
            return v
        };
        var g = o.delayedCall(function () {
            v && b(d)
        }), y = o.delayedCall(function () {
            h || (n.value = f, v && b())
        });
        i.isWebKit || t.addEventListener("changeSelection", function () {
            t.selection.isEmpty() != d && (d = !d, g.schedule())
        }), w(), v && t.onFocus();
        var E = function (e) {
            return e.selectionStart === 0 && e.selectionEnd === e.value.length
        };
        !n.setSelectionRange && n.createTextRange && (n.setSelectionRange = function (e, t) {
            var n = this.createTextRange();
            n.collapse(!0), n.moveStart("character", e), n.moveEnd("character", t), n.select()
        }, E = function (e) {
            try {
                var t = e.ownerDocument.selection.createRange()
            } catch (n) {
            }
            return !t || t.parentElement() != e ? !1 : t.text == e.value
        });
        if (i.isOldIE) {
            var S = !1, x = function (e) {
                if (S)return;
                var t = n.value;
                if (h || !t || t == f)return;
                if (e && t == f[0])return T.schedule();
                A(t), S = !0, w(), S = !1
            }, T = o.delayedCall(x);
            r.addListener(n, "propertychange", x);
            var N = {13: 1, 27: 1};
            r.addListener(n, "keyup", function (e) {
                h && (!n.value || N[e.keyCode]) && setTimeout(F, 0);
                if ((n.value.charCodeAt(0) || 0) < 129)return T.call();
                h ? j() : B()
            }), r.addListener(n, "keydown", function (e) {
                T.schedule(50)
            })
        }
        var C = function (e) {
            l ? l = !1 : E(n) ? (t.selectAll(), b()) : k && b(t.selection.isEmpty())
        }, k = null;
        this.setInputHandler = function (e) {
            k = e
        }, this.getInputHandler = function () {
            return k
        };
        var L = !1, A = function (e) {
            k && (e = k(e), k = null), c ? (b(), e && t.onPaste(e), c = !1) : e == f.charAt(0) ? L ? t.execCommand("del", {source: "ace"}) : t.execCommand("backspace", {source: "ace"}) : (e.substring(0, 2) == f ? e = e.substr(2) : e.charAt(0) == f.charAt(0) ? e = e.substr(1) : e.charAt(e.length - 1) == f.charAt(0) && (e = e.slice(0, -1)), e.charAt(e.length - 1) == f.charAt(0) && (e = e.slice(0, -1)), e && t.onTextInput(e)), L && (L = !1)
        }, O = function (e) {
            if (h)return;
            var t = n.value;
            A(t), w()
        }, M = function (e, t) {
            var n = e.clipboardData || window.clipboardData;
            if (!n || u)return;
            var r = a ? "Text" : "text/plain";
            return t ? n.setData(r, t) !== !1 : n.getData(r)
        }, _ = function (e, i) {
            var s = t.getCopyText();
            if (!s)return r.preventDefault(e);
            M(e, s) ? (i ? t.onCut() : t.onCopy(), r.preventDefault(e)) : (l = !0, n.value = s, n.select(), setTimeout(function () {
                l = !1, w(), b(), i ? t.onCut() : t.onCopy()
            }))
        }, D = function (e) {
            _(e, !0)
        }, P = function (e) {
            _(e, !1)
        }, H = function (e) {
            var s = M(e);
            typeof s == "string" ? (s && t.onPaste(s), i.isIE && setTimeout(b), r.preventDefault(e)) : (n.value = "", c = !0)
        };
        r.addCommandKeyListener(n, t.onCommandKey.bind(t)), r.addListener(n, "select", C), r.addListener(n, "input", O), r.addListener(n, "cut", D), r.addListener(n, "copy", P), r.addListener(n, "paste", H), (!("oncut"in n) || !("oncopy"in n) || !("onpaste"in n)) && r.addListener(e, "keydown", function (e) {
            if (i.isMac && !e.metaKey || !e.ctrlKey)return;
            switch (e.keyCode) {
                case 67:
                    P(e);
                    break;
                case 86:
                    H(e);
                    break;
                case 88:
                    D(e)
            }
        });
        var B = function (e) {
            if (h || !t.onCompositionStart || t.$readOnly)return;
            h = {}, t.onCompositionStart(), setTimeout(j, 0), t.on("mousedown", F), t.selection.isEmpty() || (t.insert(""), t.session.markUndoGroup(), t.selection.clearSelection()), t.session.markUndoGroup()
        }, j = function () {
            if (!h || !t.onCompositionUpdate || t.$readOnly)return;
            var e = n.value.replace(/\x01/g, "");
            if (h.lastValue === e)return;
            t.onCompositionUpdate(e), h.lastValue && t.undo(), h.lastValue = e;
            if (h.lastValue) {
                var r = t.selection.getRange();
                t.insert(h.lastValue), t.session.markUndoGroup(), h.range = t.selection.getRange(), t.selection.setRange(r), t.selection.clearSelection()
            }
        }, F = function (e) {
            if (!t.onCompositionEnd || t.$readOnly)return;
            var r = h;
            h = !1;
            var i = setTimeout(function () {
                i = null;
                var e = n.value.replace(/\x01/g, "");
                if (h)return;
                e == r.lastValue ? w() : !r.lastValue && e && (w(), A(e))
            });
            k = function (n) {
                return i && clearTimeout(i), n = n.replace(/\x01/g, ""), n == r.lastValue ? "" : (r.lastValue && i && t.undo(), n)
            }, t.onCompositionEnd(), t.removeListener("mousedown", F), e.type == "compositionend" && r.range && t.selection.setRange(r.range)
        }, I = o.delayedCall(j, 50);
        r.addListener(n, "compositionstart", B), i.isGecko ? r.addListener(n, "text", function () {
            I.schedule()
        }) : (r.addListener(n, "keyup", function () {
            I.schedule()
        }), r.addListener(n, "keydown", function () {
            I.schedule()
        })), r.addListener(n, "compositionend", F), this.getElement = function () {
            return n
        }, this.setReadOnly = function (e) {
            n.readOnly = e
        }, this.onContextMenu = function (e) {
            L = !0, b(t.selection.isEmpty()), t._emit("nativecontextmenu", {
                target: t,
                domEvent: e
            }), this.moveToMouse(e, !0)
        }, this.moveToMouse = function (e, o) {
            if (!o && i.isOldIE)return;
            p || (p = n.style.cssText), n.style.cssText = (o ? "z-index:100000;" : "") + "height:" + n.style.height + ";" + (i.isIE ? "opacity:0.1;" : "");
            var u = t.container.getBoundingClientRect(), a = s.computedStyle(t.container), f = u.top + (parseInt(a.borderTopWidth) || 0), l = u.left + (parseInt(u.borderLeftWidth) || 0), c = u.bottom - f - n.clientHeight - 2, h = function (e) {
                n.style.left = e.clientX - l - 2 + "px", n.style.top = Math.min(e.clientY - f - 2, c) + "px"
            };
            h(e);
            if (e.type != "mousedown")return;
            t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = null), i.isWin && !i.isOldIE && r.capture(t.container, h, R)
        }, this.onContextMenuClose = R;
        var q, U = function (e) {
            t.textInput.onContextMenu(e), R()
        };
        r.addListener(t.renderer.scroller, "contextmenu", U), r.addListener(n, "contextmenu", U)
    };
    t.TextInput = f
}), define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
    "use strict";
    function u(e) {
        e.$clickSelection = null;
        var t = e.editor;
        t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)), t.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)), t.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)), t.setDefaultHandler("quadclick", this.onQuadClick.bind(e)), t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e));
        var n = ["select", "startSelect", "selectEnd", "selectAllEnd", "selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd", "focusWait"];
        n.forEach(function (t) {
            e[t] = this[t]
        }, this), e.selectByLines = this.extendSelectionBy.bind(e, "getLineRange"), e.selectByWords = this.extendSelectionBy.bind(e, "getWordRange")
    }

    function a(e, t, n, r) {
        return Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2))
    }

    function f(e, t) {
        if (e.start.row == e.end.row)var n = 2 * t.column - e.start.column - e.end.column; else if (e.start.row == e.end.row - 1 && !e.start.column && !e.end.column)var n = t.column - 4; else var n = 2 * t.row - e.start.row - e.end.row;
        return n < 0 ? {cursor: e.start, anchor: e.end} : {cursor: e.end, anchor: e.start}
    }

    var r = e("../lib/dom"), i = e("../lib/event"), s = e("../lib/useragent"), o = 0;
    (function () {
        this.onMouseDown = function (e) {
            var t = e.inSelection(), n = e.getDocumentPosition();
            this.mousedownEvent = e;
            var r = this.editor, i = e.getButton();
            if (i !== 0) {
                var s = r.getSelectionRange(), o = s.isEmpty();
                o && r.selection.moveToPosition(n), r.textInput.onContextMenu(e.domEvent);
                return
            }
            this.mousedownEvent.time = Date.now();
            if (t && !r.isFocused()) {
                r.focus();
                if (this.$focusTimout && !this.$clickSelection && !r.inMultiSelectMode) {
                    this.setState("focusWait"), this.captureMouse(e);
                    return
                }
            }
            return this.captureMouse(e), this.startSelect(n, e.domEvent._clicks > 1), e.preventDefault()
        }, this.startSelect = function (e, t) {
            e = e || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
            var n = this.editor;
            this.mousedownEvent.getShiftKey() ? n.selection.selectToPosition(e) : t || n.selection.moveToPosition(e), t || this.select(), n.renderer.scroller.setCapture && n.renderer.scroller.setCapture(), n.setStyle("ace_selecting"), this.setState("select")
        }, this.select = function () {
            var e, t = this.editor, n = t.renderer.screenToTextCoordinates(this.x, this.y);
            if (this.$clickSelection) {
                var r = this.$clickSelection.comparePoint(n);
                if (r == -1)e = this.$clickSelection.end; else if (r == 1)e = this.$clickSelection.start; else {
                    var i = f(this.$clickSelection, n);
                    n = i.cursor, e = i.anchor
                }
                t.selection.setSelectionAnchor(e.row, e.column)
            }
            t.selection.selectToPosition(n), t.renderer.scrollCursorIntoView()
        }, this.extendSelectionBy = function (e) {
            var t, n = this.editor, r = n.renderer.screenToTextCoordinates(this.x, this.y), i = n.selection[e](r.row, r.column);
            if (this.$clickSelection) {
                var s = this.$clickSelection.comparePoint(i.start), o = this.$clickSelection.comparePoint(i.end);
                if (s == -1 && o <= 0) {
                    t = this.$clickSelection.end;
                    if (i.end.row != r.row || i.end.column != r.column)r = i.start
                } else if (o == 1 && s >= 0) {
                    t = this.$clickSelection.start;
                    if (i.start.row != r.row || i.start.column != r.column)r = i.end
                } else if (s == -1 && o == 1)r = i.end, t = i.start; else {
                    var u = f(this.$clickSelection, r);
                    r = u.cursor, t = u.anchor
                }
                n.selection.setSelectionAnchor(t.row, t.column)
            }
            n.selection.selectToPosition(r), n.renderer.scrollCursorIntoView()
        }, this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function () {
            this.$clickSelection = null, this.editor.unsetStyle("ace_selecting"), this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture()
        }, this.focusWait = function () {
            var e = a(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), t = Date.now();
            (e > o || t - this.mousedownEvent.time > this.$focusTimout) && this.startSelect(this.mousedownEvent.getDocumentPosition())
        }, this.onDoubleClick = function (e) {
            var t = e.getDocumentPosition(), n = this.editor, r = n.session, i = r.getBracketRange(t);
            i ? (i.isEmpty() && (i.start.column--, i.end.column++), this.setState("select")) : (i = n.selection.getWordRange(t.row, t.column), this.setState("selectByWords")), this.$clickSelection = i, this.select()
        }, this.onTripleClick = function (e) {
            var t = e.getDocumentPosition(), n = this.editor;
            this.setState("selectByLines");
            var r = n.getSelectionRange();
            r.isMultiLine() && r.contains(t.row, t.column) ? (this.$clickSelection = n.selection.getLineRange(r.start.row), this.$clickSelection.end = n.selection.getLineRange(r.end.row).end) : this.$clickSelection = n.selection.getLineRange(t.row), this.select()
        }, this.onQuadClick = function (e) {
            var t = this.editor;
            t.selectAll(), this.$clickSelection = t.getSelectionRange(), this.setState("selectAll")
        }, this.onMouseWheel = function (e) {
            if (e.getAccelKey())return;
            e.getShiftKey() && e.wheelY && !e.wheelX && (e.wheelX = e.wheelY, e.wheelY = 0);
            var t = e.domEvent.timeStamp, n = t - (this.$lastScrollTime || 0), r = this.editor, i = r.renderer.isScrollableBy(e.wheelX * e.speed, e.wheelY * e.speed);
            if (i || n < 200)return this.$lastScrollTime = t, r.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e.stop()
        }
    }).call(u.prototype), t.DefaultHandlers = u
}), define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    function s(e) {
        this.isOpen = !1, this.$element = null, this.$parentNode = e
    }

    var r = e("./lib/oop"), i = e("./lib/dom");
    (function () {
        this.$init = function () {
            return this.$element = i.createElement("div"), this.$element.className = "ace_tooltip", this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element
        }, this.getElement = function () {
            return this.$element || this.$init()
        }, this.setText = function (e) {
            i.setInnerText(this.getElement(), e)
        }, this.setHtml = function (e) {
            this.getElement().innerHTML = e
        }, this.setPosition = function (e, t) {
            this.getElement().style.left = e + "px", this.getElement().style.top = t + "px"
        }, this.setClassName = function (e) {
            i.addCssClass(this.getElement(), e)
        }, this.show = function (e, t, n) {
            e != null && this.setText(e), t != null && n != null && this.setPosition(t, n), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0)
        }, this.hide = function () {
            this.isOpen && (this.getElement().style.display = "none", this.isOpen = !1)
        }, this.getHeight = function () {
            return this.getElement().offsetHeight
        }, this.getWidth = function () {
            return this.getElement().offsetWidth
        }
    }).call(s.prototype), t.Tooltip = s
}), define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], function (e, t, n) {
    "use strict";
    function u(e) {
        function l() {
            var r = u.getDocumentPosition().row, s = n.$annotations[r];
            if (!s)return c();
            var o = t.session.getLength();
            if (r == o) {
                var a = t.renderer.pixelToScreenCoordinates(0, u.y).row, l = u.$pos;
                if (a > t.session.documentToScreenRow(l.row, l.column))return c()
            }
            if (f == s)return;
            f = s.text.join("<br/>"), i.setHtml(f), i.show(), t.on("mousewheel", c);
            if (e.$tooltipFollowsMouse)h(u); else {
                var p = n.$cells[t.session.documentToScreenRow(r, 0)].element, d = p.getBoundingClientRect(), v = i.getElement().style;
                v.left = d.right + "px", v.top = d.bottom + "px"
            }
        }

        function c() {
            o && (o = clearTimeout(o)), f && (i.hide(), f = null, t.removeEventListener("mousewheel", c))
        }

        function h(e) {
            i.setPosition(e.x, e.y)
        }

        var t = e.editor, n = t.renderer.$gutterLayer, i = new a(t.container);
        e.editor.setDefaultHandler("guttermousedown", function (r) {
            if (!t.isFocused() || r.getButton() != 0)return;
            var i = n.getRegion(r);
            if (i == "foldWidgets")return;
            var s = r.getDocumentPosition().row, o = t.session.selection;
            if (r.getShiftKey())o.selectTo(s, 0); else {
                if (r.domEvent.detail == 2)return t.selectAll(), r.preventDefault();
                e.$clickSelection = t.selection.getLineRange(s)
            }
            return e.setState("selectByLines"), e.captureMouse(r), r.preventDefault()
        });
        var o, u, f;
        e.editor.setDefaultHandler("guttermousemove", function (t) {
            var n = t.domEvent.target || t.domEvent.srcElement;
            if (r.hasCssClass(n, "ace_fold-widget"))return c();
            f && e.$tooltipFollowsMouse && h(t), u = t;
            if (o)return;
            o = setTimeout(function () {
                o = null, u && !e.isMousePressed ? l() : c()
            }, 50)
        }), s.addListener(t.renderer.$gutter, "mouseout", function (e) {
            u = null;
            if (!f || o)return;
            o = setTimeout(function () {
                o = null, c()
            }, 50)
        }), t.on("changeSession", c)
    }

    function a(e) {
        o.call(this, e)
    }

    var r = e("../lib/dom"), i = e("../lib/oop"), s = e("../lib/event"), o = e("../tooltip").Tooltip;
    i.inherits(a, o), function () {
        this.setPosition = function (e, t) {
            var n = window.innerWidth || document.documentElement.clientWidth, r = window.innerHeight || document.documentElement.clientHeight, i = this.getWidth(), s = this.getHeight();
            e += 15, t += 15, e + i > n && (e -= e + i - n), t + s > r && (t -= 20 + s), o.prototype.setPosition.call(this, e, t)
        }
    }.call(a.prototype), t.GutterHandler = u
}), define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
    "use strict";
    var r = e("../lib/event"), i = e("../lib/useragent"), s = t.MouseEvent = function (e, t) {
        this.domEvent = e, this.editor = t, this.x = this.clientX = e.clientX, this.y = this.clientY = e.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1
    };
    (function () {
        this.stopPropagation = function () {
            r.stopPropagation(this.domEvent), this.propagationStopped = !0
        }, this.preventDefault = function () {
            r.preventDefault(this.domEvent), this.defaultPrevented = !0
        }, this.stop = function () {
            this.stopPropagation(), this.preventDefault()
        }, this.getDocumentPosition = function () {
            return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos)
        }, this.inSelection = function () {
            if (this.$inSelection !== null)return this.$inSelection;
            var e = this.editor, t = e.getSelectionRange();
            if (t.isEmpty())this.$inSelection = !1; else {
                var n = this.getDocumentPosition();
                this.$inSelection = t.contains(n.row, n.column)
            }
            return this.$inSelection
        }, this.getButton = function () {
            return r.getButton(this.domEvent)
        }, this.getShiftKey = function () {
            return this.domEvent.shiftKey
        }, this.getAccelKey = i.isMac ? function () {
            return this.domEvent.metaKey
        } : function () {
            return this.domEvent.ctrlKey
        }
    }).call(s.prototype)
}), define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
    "use strict";
    function f(e) {
        function T(e, n) {
            var r = Date.now(), i = !n || e.row != n.row, s = !n || e.column != n.column;
            if (!S || i || s)t.$blockScrolling += 1, t.moveCursorToPosition(e), t.$blockScrolling -= 1, S = r, x = {
                x: p,
                y: d
            }; else {
                var o = l(x.x, x.y, p, d);
                o > a ? S = null : r - S >= u && (t.renderer.scrollCursorIntoView(), S = null)
            }
        }

        function N(e, n) {
            var r = Date.now(), i = t.renderer.layerConfig.lineHeight, s = t.renderer.layerConfig.characterWidth, u = t.renderer.scroller.getBoundingClientRect(), a = {
                x: {
                    left: p - u.left,
                    right: u.right - p
                }, y: {top: d - u.top, bottom: u.bottom - d}
            }, f = Math.min(a.x.left, a.x.right), l = Math.min(a.y.top, a.y.bottom), c = {row: e.row, column: e.column};
            f / s <= 2 && (c.column += a.x.left < a.x.right ? -3 : 2), l / i <= 1 && (c.row += a.y.top < a.y.bottom ? -1 : 1);
            var h = e.row != c.row, v = e.column != c.column, m = !n || e.row != n.row;
            h || v && !m ? E ? r - E >= o && t.renderer.scrollCursorIntoView(c) : E = r : E = null
        }

        function C() {
            var e = g;
            g = t.renderer.screenToTextCoordinates(p, d), T(g, e), N(g, e)
        }

        function k() {
            m = t.selection.toOrientedRange(), h = t.session.addMarker(m, "ace_selection", t.getSelectionStyle()), t.clearSelection(), t.isFocused() && t.renderer.$cursorLayer.setBlinking(!1), clearInterval(v), C(), v = setInterval(C, 20), y = 0, i.addListener(document, "mousemove", O)
        }

        function L() {
            clearInterval(v), t.session.removeMarker(h), h = null, t.$blockScrolling += 1, t.selection.fromOrientedRange(m), t.$blockScrolling -= 1, t.isFocused() && !w && t.renderer.$cursorLayer.setBlinking(!t.getReadOnly()), m = null, g = null, y = 0, E = null, S = null, i.removeListener(document, "mousemove", O)
        }

        function O() {
            A == null && (A = setTimeout(function () {
                A != null && h && L()
            }, 20))
        }

        function M(e) {
            var t = e.types;
            return !t || Array.prototype.some.call(t, function (e) {
                    return e == "text/plain" || e == "Text"
                })
        }

        function _(e) {
            var t = ["copy", "copymove", "all", "uninitialized"], n = ["move", "copymove", "linkmove", "all", "uninitialized"], r = s.isMac ? e.altKey : e.ctrlKey, i = "uninitialized";
            try {
                i = e.dataTransfer.effectAllowed.toLowerCase()
            } catch (e) {
            }
            var o = "none";
            return r && t.indexOf(i) >= 0 ? o = "copy" : n.indexOf(i) >= 0 ? o = "move" : t.indexOf(i) >= 0 && (o = "copy"), o
        }

        var t = e.editor, n = r.createElement("img");
        n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", s.isOpera && (n.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;");
        var f = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"];
        f.forEach(function (t) {
            e[t] = this[t]
        }, this), t.addEventListener("mousedown", this.onMouseDown.bind(e));
        var c = t.container, h, p, d, v, m, g, y = 0, b, w, E, S, x;
        this.onDragStart = function (e) {
            if (this.cancelDrag || !c.draggable) {
                var r = this;
                return setTimeout(function () {
                    r.startSelect(), r.captureMouse(e)
                }, 0), e.preventDefault()
            }
            m = t.getSelectionRange();
            var i = e.dataTransfer;
            i.effectAllowed = t.getReadOnly() ? "copy" : "copyMove", s.isOpera && (t.container.appendChild(n), n.scrollTop = 0), i.setDragImage && i.setDragImage(n, 0, 0), s.isOpera && t.container.removeChild(n), i.clearData(), i.setData("Text", t.session.getTextRange()), w = !0, this.setState("drag")
        }, this.onDragEnd = function (e) {
            c.draggable = !1, w = !1, this.setState(null);
            if (!t.getReadOnly()) {
                var n = e.dataTransfer.dropEffect;
                !b && n == "move" && t.session.remove(t.getSelectionRange()), t.renderer.$cursorLayer.setBlinking(!0)
            }
            this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("")
        }, this.onDragEnter = function (e) {
            if (t.getReadOnly() || !M(e.dataTransfer))return;
            return p = e.clientX, d = e.clientY, h || k(), y++, e.dataTransfer.dropEffect = b = _(e), i.preventDefault(e)
        }, this.onDragOver = function (e) {
            if (t.getReadOnly() || !M(e.dataTransfer))return;
            return p = e.clientX, d = e.clientY, h || (k(), y++), A !== null && (A = null), e.dataTransfer.dropEffect = b = _(e), i.preventDefault(e)
        }, this.onDragLeave = function (e) {
            y--;
            if (y <= 0 && h)return L(), b = null, i.preventDefault(e)
        }, this.onDrop = function (e) {
            if (!g)return;
            var n = e.dataTransfer;
            if (w)switch (b) {
                case"move":
                    m.contains(g.row, g.column) ? m = {start: g, end: g} : m = t.moveText(m, g);
                    break;
                case"copy":
                    m = t.moveText(m, g, !0)
            } else {
                var r = n.getData("Text");
                m = {start: g, end: t.session.insert(g, r)}, t.focus(), b = null
            }
            return L(), i.preventDefault(e)
        }, i.addListener(c, "dragstart", this.onDragStart.bind(e)), i.addListener(c, "dragend", this.onDragEnd.bind(e)), i.addListener(c, "dragenter", this.onDragEnter.bind(e)), i.addListener(c, "dragover", this.onDragOver.bind(e)), i.addListener(c, "dragleave", this.onDragLeave.bind(e)), i.addListener(c, "drop", this.onDrop.bind(e));
        var A = null
    }

    function l(e, t, n, r) {
        return Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2))
    }

    var r = e("../lib/dom"), i = e("../lib/event"), s = e("../lib/useragent"), o = 200, u = 200, a = 5;
    (function () {
        this.dragWait = function () {
            var e = Date.now() - this.mousedownEvent.time;
            e > this.editor.getDragDelay() && this.startDrag()
        }, this.dragWaitEnd = function () {
            var e = this.editor.container;
            e.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd()
        }, this.dragReadyEnd = function (e) {
            this.editor.renderer.$cursorLayer.setBlinking(!this.editor.getReadOnly()), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd()
        }, this.startDrag = function () {
            this.cancelDrag = !1;
            var e = this.editor, t = e.container;
            t.draggable = !0, e.renderer.$cursorLayer.setBlinking(!1), e.setStyle("ace_dragging");
            var n = s.isWin ? "default" : "move";
            e.renderer.setCursorStyle(n), this.setState("dragReady")
        }, this.onMouseDrag = function (e) {
            var t = this.editor.container;
            if (s.isIE && this.state == "dragReady") {
                var n = l(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
                n > 3 && t.dragDrop()
            }
            if (this.state === "dragWait") {
                var n = l(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
                n > 0 && (t.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()))
            }
        }, this.onMouseDown = function (e) {
            if (!this.$dragEnabled)return;
            this.mousedownEvent = e;
            var t = this.editor, n = e.inSelection(), r = e.getButton(), i = e.domEvent.detail || 1;
            if (i === 1 && r === 0 && n) {
                if (e.editor.inMultiSelectMode && (e.getAccelKey() || e.getShiftKey()))return;
                this.mousedownEvent.time = Date.now();
                var o = e.domEvent.target || e.domEvent.srcElement;
                "unselectable"in o && (o.unselectable = "on");
                if (t.getDragDelay()) {
                    if (s.isWebKit) {
                        this.cancelDrag = !0;
                        var u = t.container;
                        u.draggable = !0
                    }
                    this.setState("dragWait")
                } else this.startDrag();
                this.captureMouse(e, this.onMouseDrag.bind(this)), e.defaultPrevented = !0
            }
        }
    }).call(f.prototype), t.DragdropHandler = f
}), define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    var r = e("./dom");
    t.get = function (e, t) {
        var n = new XMLHttpRequest;
        n.open("GET", e, !0), n.onreadystatechange = function () {
            n.readyState === 4 && t(n.responseText)
        }, n.send(null)
    }, t.loadScript = function (e, t) {
        var n = r.getDocumentHead(), i = document.createElement("script");
        i.src = e, n.appendChild(i), i.onload = i.onreadystatechange = function (e, n) {
            if (n || !i.readyState || i.readyState == "loaded" || i.readyState == "complete")i = i.onload = i.onreadystatechange = null, n || t()
        }
    }, t.qualifyURL = function (e) {
        var t = document.createElement("a");
        return t.href = e, t.href
    }
}), define("ace/lib/event_emitter", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var r = {}, i = function () {
        this.propagationStopped = !0
    }, s = function () {
        this.defaultPrevented = !0
    };
    r._emit = r._dispatchEvent = function (e, t) {
        this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
        var n = this._eventRegistry[e] || [], r = this._defaultHandlers[e];
        if (!n.length && !r)return;
        if (typeof t != "object" || !t)t = {};
        t.type || (t.type = e), t.stopPropagation || (t.stopPropagation = i), t.preventDefault || (t.preventDefault = s), n = n.slice();
        for (var o = 0; o < n.length; o++) {
            n[o](t, this);
            if (t.propagationStopped)break
        }
        if (r && !t.defaultPrevented)return r(t, this)
    }, r._signal = function (e, t) {
        var n = (this._eventRegistry || {})[e];
        if (!n)return;
        n = n.slice();
        for (var r = 0; r < n.length; r++)n[r](t, this)
    }, r.once = function (e, t) {
        var n = this;
        t && this.addEventListener(e, function r() {
            n.removeEventListener(e, r), t.apply(null, arguments)
        })
    }, r.setDefaultHandler = function (e, t) {
        var n = this._defaultHandlers;
        n || (n = this._defaultHandlers = {_disabled_: {}});
        if (n[e]) {
            var r = n[e], i = n._disabled_[e];
            i || (n._disabled_[e] = i = []), i.push(r);
            var s = i.indexOf(t);
            s != -1 && i.splice(s, 1)
        }
        n[e] = t
    }, r.removeDefaultHandler = function (e, t) {
        var n = this._defaultHandlers;
        if (!n)return;
        var r = n._disabled_[e];
        if (n[e] == t) {
            var i = n[e];
            r && this.setDefaultHandler(e, r.pop())
        } else if (r) {
            var s = r.indexOf(t);
            s != -1 && r.splice(s, 1)
        }
    }, r.on = r.addEventListener = function (e, t, n) {
        this._eventRegistry = this._eventRegistry || {};
        var r = this._eventRegistry[e];
        return r || (r = this._eventRegistry[e] = []), r.indexOf(t) == -1 && r[n ? "unshift" : "push"](t), t
    }, r.off = r.removeListener = r.removeEventListener = function (e, t) {
        this._eventRegistry = this._eventRegistry || {};
        var n = this._eventRegistry[e];
        if (!n)return;
        var r = n.indexOf(t);
        r !== -1 && n.splice(r, 1)
    }, r.removeAllListeners = function (e) {
        this._eventRegistry && (this._eventRegistry[e] = [])
    }, t.EventEmitter = r
}), define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter"], function (e, t, n) {
    "no use strict";
    function f(r) {
        a.packaged = r || e.packaged || n.packaged || u.define && define.packaged;
        if (!u.document)return "";
        var i = {}, s = "", o = document.currentScript || document._currentScript, f = o && o.ownerDocument || document, c = f.getElementsByTagName("script");
        for (var h = 0; h < c.length; h++) {
            var p = c[h], d = p.src || p.getAttribute("src");
            if (!d)continue;
            var v = p.attributes;
            for (var m = 0, g = v.length; m < g; m++) {
                var y = v[m];
                y.name.indexOf("data-ace-") === 0 && (i[l(y.name.replace(/^data-ace-/, ""))] = y.value)
            }
            var b = d.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
            b && (s = b[1])
        }
        s && (i.base = i.base || s, i.packaged = !0), i.basePath = i.base, i.workerPath = i.workerPath || i.base, i.modePath = i.modePath || i.base, i.themePath = i.themePath || i.base, delete i.base;
        for (var w in i)typeof i[w] != "undefined" && t.set(w, i[w])
    }

    function l(e) {
        return e.replace(/-(.)/g, function (e, t) {
            return t.toUpperCase()
        })
    }

    var r = e("./lib/lang"), i = e("./lib/oop"), s = e("./lib/net"), o = e("./lib/event_emitter").EventEmitter, u = function () {
        return this
    }(), a = {
        packaged: !1,
        workerPath: null,
        modePath: null,
        themePath: null,
        basePath: "",
        suffix: ".js",
        $moduleUrls: {}
    };
    t.get = function (e) {
        if (!a.hasOwnProperty(e))throw new Error("Unknown config key: " + e);
        return a[e]
    }, t.set = function (e, t) {
        if (!a.hasOwnProperty(e))throw new Error("Unknown config key: " + e);
        a[e] = t
    }, t.all = function () {
        return r.copyObject(a)
    }, i.implement(t, o), t.moduleUrl = function (e, t) {
        if (a.$moduleUrls[e])return a.$moduleUrls[e];
        var n = e.split("/");
        t = t || n[n.length - 2] || "";
        var r = t == "snippets" ? "/" : "-", i = n[n.length - 1];
        if (t == "worker" && r == "-") {
            var s = new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$", "g");
            i = i.replace(s, "")
        }
        (!i || i == t) && n.length > 1 && (i = n[n.length - 2]);
        var o = a[t + "Path"];
        return o == null ? o = a.basePath : r == "/" && (t = r = ""), o && o.slice(-1) != "/" && (o += "/"), o + t + r + i + this.get("suffix")
    }, t.setModuleUrl = function (e, t) {
        return a.$moduleUrls[e] = t
    }, t.$loading = {}, t.loadModule = function (n, r) {
        var i, o;
        Array.isArray(n) && (o = n[0], n = n[1]);
        try {
            i = e(n)
        } catch (u) {
        }
        if (i && !t.$loading[n])return r && r(i);
        t.$loading[n] || (t.$loading[n] = []), t.$loading[n].push(r);
        if (t.$loading[n].length > 1)return;
        var a = function () {
            e([n], function (e) {
                t._emit("load.module", {name: n, module: e});
                var r = t.$loading[n];
                t.$loading[n] = null, r.forEach(function (t) {
                    t && t(e)
                })
            })
        };
        if (!t.get("packaged"))return a();
        s.loadScript(t.moduleUrl(n, o), a)
    }, t.init = f;
    var c = {
        setOptions: function (e) {
            Object.keys(e).forEach(function (t) {
                this.setOption(t, e[t])
            }, this)
        }, getOptions: function (e) {
            var t = {};
            return e ? Array.isArray(e) || (t = e, e = Object.keys(t)) : e = Object.keys(this.$options), e.forEach(function (e) {
                t[e] = this.getOption(e)
            }, this), t
        }, setOption: function (e, t) {
            if (this["$" + e] === t)return;
            var n = this.$options[e];
            if (!n)return typeof console != "undefined" && console.warn && console.warn('misspelled option "' + e + '"'), undefined;
            if (n.forwardTo)return this[n.forwardTo] && this[n.forwardTo].setOption(e, t);
            n.handlesSet || (this["$" + e] = t), n && n.set && n.set.call(this, t)
        }, getOption: function (e) {
            var t = this.$options[e];
            return t ? t.forwardTo ? this[t.forwardTo] && this[t.forwardTo].getOption(e) : t && t.get ? t.get.call(this) : this["$" + e] : (typeof console != "undefined" && console.warn && console.warn('misspelled option "' + e + '"'), undefined)
        }
    }, h = {};
    t.defineOptions = function (e, t, n) {
        return e.$options || (h[t] = e.$options = {}), Object.keys(n).forEach(function (t) {
            var r = n[t];
            typeof r == "string" && (r = {forwardTo: r}), r.name || (r.name = t), e.$options[r.name] = r, "initialValue"in r && (e["$" + r.name] = r.initialValue)
        }), i.implement(e, c), this
    }, t.resetOptions = function (e) {
        Object.keys(e.$options).forEach(function (t) {
            var n = e.$options[t];
            "value"in n && e.setOption(t, n.value)
        })
    }, t.setDefaultValue = function (e, n, r) {
        var i = h[e] || (h[e] = {});
        i[n] && (i.forwardTo ? t.setDefaultValue(i.forwardTo, n, r) : i[n].value = r)
    }, t.setDefaultValues = function (e, n) {
        Object.keys(n).forEach(function (r) {
            t.setDefaultValue(e, r, n[r])
        })
    }
}), define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/config"], function (e, t, n) {
    "use strict";
    var r = e("../lib/event"), i = e("../lib/useragent"), s = e("./default_handlers").DefaultHandlers, o = e("./default_gutter_handler").GutterHandler, u = e("./mouse_event").MouseEvent, a = e("./dragdrop_handler").DragdropHandler, f = e("../config"), l = function (e) {
        var t = this;
        this.editor = e, new s(this), new o(this), new a(this);
        var n = function (t) {
            !e.isFocused() && e.textInput && e.textInput.moveToMouse(t), e.focus()
        }, u = e.renderer.getMouseEventTarget();
        r.addListener(u, "click", this.onMouseEvent.bind(this, "click")), r.addListener(u, "mousemove", this.onMouseMove.bind(this, "mousemove")), r.addMultiMouseDownListener(u, [400, 300, 250], this, "onMouseEvent"), e.renderer.scrollBarV && (r.addMultiMouseDownListener(e.renderer.scrollBarV.inner, [400, 300, 250], this, "onMouseEvent"), r.addMultiMouseDownListener(e.renderer.scrollBarH.inner, [400, 300, 250], this, "onMouseEvent"), i.isIE && (r.addListener(e.renderer.scrollBarV.element, "mousedown", n), r.addListener(e.renderer.scrollBarH.element, "mousemove", n))), r.addMouseWheelListener(e.container, this.onMouseWheel.bind(this, "mousewheel"));
        var f = e.renderer.$gutter;
        r.addListener(f, "mousedown", this.onMouseEvent.bind(this, "guttermousedown")), r.addListener(f, "click", this.onMouseEvent.bind(this, "gutterclick")), r.addListener(f, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick")), r.addListener(f, "mousemove", this.onMouseEvent.bind(this, "guttermousemove")), r.addListener(u, "mousedown", n), r.addListener(f, "mousedown", function (t) {
            return e.focus(), r.preventDefault(t)
        }), e.on("mousemove", function (n) {
            if (t.state || t.$dragDelay || !t.$dragEnabled)return;
            var r = e.renderer.screenToTextCoordinates(n.x, n.y), i = e.session.selection.getRange(), s = e.renderer;
            !i.isEmpty() && i.insideStart(r.row, r.column) ? s.setCursorStyle("default") : s.setCursorStyle("")
        })
    };
    (function () {
        this.onMouseEvent = function (e, t) {
            this.editor._emit(e, new u(t, this.editor))
        }, this.onMouseMove = function (e, t) {
            var n = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
            if (!n || !n.length)return;
            this.editor._emit(e, new u(t, this.editor))
        }, this.onMouseWheel = function (e, t) {
            var n = new u(t, this.editor);
            n.speed = this.$scrollSpeed * 2, n.wheelX = t.wheelX, n.wheelY = t.wheelY, this.editor._emit(e, n)
        }, this.setState = function (e) {
            this.state = e
        }, this.captureMouse = function (e, t) {
            this.x = e.x, this.y = e.y, this.isMousePressed = !0;
            var n = this.editor.renderer;
            n.$keepTextAreaAtCursor && (n.$keepTextAreaAtCursor = null);
            var s = this, o = function (e) {
                if (!e)return;
                if (i.isWebKit && !e.which && s.releaseMouse)return s.releaseMouse();
                s.x = e.clientX, s.y = e.clientY, t && t(e), s.mouseEvent = new u(e, s.editor), s.$mouseMoved = !0
            }, a = function (e) {
                clearInterval(l), f(), s[s.state + "End"] && s[s.state + "End"](e), s.state = "", n.$keepTextAreaAtCursor == null && (n.$keepTextAreaAtCursor = !0, n.$moveTextAreaToCursor()), s.isMousePressed = !1, s.$onCaptureMouseMove = s.releaseMouse = null, e && s.onMouseEvent("mouseup", e)
            }, f = function () {
                s[s.state] && s[s.state](), s.$mouseMoved = !1
            };
            if (i.isOldIE && e.domEvent.type == "dblclick")return setTimeout(function () {
                a(e)
            });
            s.$onCaptureMouseMove = o, s.releaseMouse = r.capture(this.editor.container, o, a);
            var l = setInterval(f, 20)
        }, this.releaseMouse = null, this.cancelContextMenu = function () {
            var e = function (t) {
                if (t && t.domEvent && t.domEvent.type != "contextmenu")return;
                this.editor.off("nativecontextmenu", e), t && t.domEvent && r.stopEvent(t.domEvent)
            }.bind(this);
            setTimeout(e, 10), this.editor.on("nativecontextmenu", e)
        }
    }).call(l.prototype), f.defineOptions(l.prototype, "mouseHandler", {
        scrollSpeed: {initialValue: 2},
        dragDelay: {initialValue: i.isMac ? 150 : 0},
        dragEnabled: {initialValue: !0},
        focusTimout: {initialValue: 0},
        tooltipFollowsMouse: {initialValue: !0}
    }), t.MouseHandler = l
}), define("ace/mouse/fold_handler", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    function r(e) {
        e.on("click", function (t) {
            var n = t.getDocumentPosition(), r = e.session, i = r.getFoldAt(n.row, n.column, 1);
            i && (t.getAccelKey() ? r.removeFold(i) : r.expandFold(i), t.stop())
        }), e.on("gutterclick", function (t) {
            var n = e.renderer.$gutterLayer.getRegion(t);
            if (n == "foldWidgets") {
                var r = t.getDocumentPosition().row, i = e.session;
                i.foldWidgets && i.foldWidgets[r] && e.session.onFoldWidgetClick(r, t), e.isFocused() || e.focus(), t.stop()
            }
        }), e.on("gutterdblclick", function (t) {
            var n = e.renderer.$gutterLayer.getRegion(t);
            if (n == "foldWidgets") {
                var r = t.getDocumentPosition().row, i = e.session, s = i.getParentFoldRangeData(r, !0), o = s.range || s.firstRange;
                if (o) {
                    r = o.start.row;
                    var u = i.getFoldAt(r, i.getLine(r).length, 1);
                    u ? i.removeFold(u) : (i.addFold("...", o), e.renderer.scrollCursorIntoView({
                        row: o.start.row,
                        column: 0
                    }))
                }
                t.stop()
            }
        })
    }

    t.FoldHandler = r
}), define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function (e, t, n) {
    "use strict";
    var r = e("../lib/keys"), i = e("../lib/event"), s = function (e) {
        this.$editor = e, this.$data = {editor: e}, this.$handlers = [], this.setDefaultHandler(e.commands)
    };
    (function () {
        this.setDefaultHandler = function (e) {
            this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = e, this.addKeyboardHandler(e, 0)
        }, this.setKeyboardHandler = function (e) {
            var t = this.$handlers;
            if (t[t.length - 1] == e)return;
            while (t[t.length - 1] && t[t.length - 1] != this.$defaultHandler)this.removeKeyboardHandler(t[t.length - 1]);
            this.addKeyboardHandler(e, 1)
        }, this.addKeyboardHandler = function (e, t) {
            if (!e)return;
            typeof e == "function" && !e.handleKeyboard && (e.handleKeyboard = e);
            var n = this.$handlers.indexOf(e);
            n != -1 && this.$handlers.splice(n, 1), t == undefined ? this.$handlers.push(e) : this.$handlers.splice(t, 0, e), n == -1 && e.attach && e.attach(this.$editor)
        }, this.removeKeyboardHandler = function (e) {
            var t = this.$handlers.indexOf(e);
            return t == -1 ? !1 : (this.$handlers.splice(t, 1), e.detach && e.detach(this.$editor), !0)
        }, this.getKeyboardHandler = function () {
            return this.$handlers[this.$handlers.length - 1]
        }, this.$callKeyboardHandlers = function (e, t, n, r) {
            var s, o = !1, u = this.$editor.commands;
            for (var a = this.$handlers.length; a--;) {
                s = this.$handlers[a].handleKeyboard(this.$data, e, t, n, r);
                if (!s || !s.command)continue;
                s.command == "null" ? o = !0 : o = u.exec(s.command, this.$editor, s.args, r), o && r && e != -1 && s.passEvent != 1 && s.command.passEvent != 1 && i.stopEvent(r);
                if (o)break
            }
            return o
        }, this.onCommandKey = function (e, t, n) {
            var i = r.keyCodeToString(n);
            this.$callKeyboardHandlers(t, i, n, e)
        }, this.onTextInput = function (e) {
            var t = this.$callKeyboardHandlers(-1, e);
            t || this.$editor.commands.exec("insertstring", this.$editor, e)
        }
    }).call(s.prototype), t.KeyBinding = s
}), define("ace/range", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var r = function (e, t) {
        return e.row - t.row || e.column - t.column
    }, i = function (e, t, n, r) {
        this.start = {row: e, column: t}, this.end = {row: n, column: r}
    };
    (function () {
        this.isEqual = function (e) {
            return this.start.row === e.start.row && this.end.row === e.end.row && this.start.column === e.start.column && this.end.column === e.end.column
        }, this.toString = function () {
            return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]"
        }, this.contains = function (e, t) {
            return this.compare(e, t) == 0
        }, this.compareRange = function (e) {
            var t, n = e.end, r = e.start;
            return t = this.compare(n.row, n.column), t == 1 ? (t = this.compare(r.row, r.column), t == 1 ? 2 : t == 0 ? 1 : 0) : t == -1 ? -2 : (t = this.compare(r.row, r.column), t == -1 ? -1 : t == 1 ? 42 : 0)
        }, this.comparePoint = function (e) {
            return this.compare(e.row, e.column)
        }, this.containsRange = function (e) {
            return this.comparePoint(e.start) == 0 && this.comparePoint(e.end) == 0
        }, this.intersects = function (e) {
            var t = this.compareRange(e);
            return t == -1 || t == 0 || t == 1
        }, this.isEnd = function (e, t) {
            return this.end.row == e && this.end.column == t
        }, this.isStart = function (e, t) {
            return this.start.row == e && this.start.column == t
        }, this.setStart = function (e, t) {
            typeof e == "object" ? (this.start.column = e.column, this.start.row = e.row) : (this.start.row = e, this.start.column = t)
        }, this.setEnd = function (e, t) {
            typeof e == "object" ? (this.end.column = e.column, this.end.row = e.row) : (this.end.row = e, this.end.column = t)
        }, this.inside = function (e, t) {
            return this.compare(e, t) == 0 ? this.isEnd(e, t) || this.isStart(e, t) ? !1 : !0 : !1
        }, this.insideStart = function (e, t) {
            return this.compare(e, t) == 0 ? this.isEnd(e, t) ? !1 : !0 : !1
        }, this.insideEnd = function (e, t) {
            return this.compare(e, t) == 0 ? this.isStart(e, t) ? !1 : !0 : !1
        }, this.compare = function (e, t) {
            return !this.isMultiLine() && e === this.start.row ? t < this.start.column ? -1 : t > this.end.column ? 1 : 0 : e < this.start.row ? -1 : e > this.end.row ? 1 : this.start.row === e ? t >= this.start.column ? 0 : -1 : this.end.row === e ? t <= this.end.column ? 0 : 1 : 0
        }, this.compareStart = function (e, t) {
            return this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
        }, this.compareEnd = function (e, t) {
            return this.end.row == e && this.end.column == t ? 1 : this.compare(e, t)
        }, this.compareInside = function (e, t) {
            return this.end.row == e && this.end.column == t ? 1 : this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
        }, this.clipRows = function (e, t) {
            if (this.end.row > t)var n = {row: t + 1, column: 0}; else if (this.end.row < e)var n = {row: e, column: 0};
            if (this.start.row > t)var r = {row: t + 1, column: 0}; else if (this.start.row < e)var r = {
                row: e,
                column: 0
            };
            return i.fromPoints(r || this.start, n || this.end)
        }, this.extend = function (e, t) {
            var n = this.compare(e, t);
            if (n == 0)return this;
            if (n == -1)var r = {row: e, column: t}; else var s = {row: e, column: t};
            return i.fromPoints(r || this.start, s || this.end)
        }, this.isEmpty = function () {
            return this.start.row === this.end.row && this.start.column === this.end.column
        }, this.isMultiLine = function () {
            return this.start.row !== this.end.row
        }, this.clone = function () {
            return i.fromPoints(this.start, this.end)
        }, this.collapseRows = function () {
            return this.end.column == 0 ? new i(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new i(this.start.row, 0, this.end.row, 0)
        }, this.toScreenRange = function (e) {
            var t = e.documentToScreenPosition(this.start), n = e.documentToScreenPosition(this.end);
            return new i(t.row, t.column, n.row, n.column)
        }, this.moveBy = function (e, t) {
            this.start.row += e, this.start.column += t, this.end.row += e, this.end.column += t
        }
    }).call(i.prototype), i.fromPoints = function (e, t) {
        return new i(e.row, e.column, t.row, t.column)
    }, i.comparePoints = r, i.comparePoints = function (e, t) {
        return e.row - t.row || e.column - t.column
    }, t.Range = i
}), define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"), i = e("./lib/lang"), s = e("./lib/event_emitter").EventEmitter, o = e("./range").Range, u = function (e) {
        this.session = e, this.doc = e.getDocument(), this.clearSelection(), this.lead = this.selectionLead = this.doc.createAnchor(0, 0), this.anchor = this.selectionAnchor = this.doc.createAnchor(0, 0);
        var t = this;
        this.lead.on("change", function (e) {
            t._emit("changeCursor"), t.$isEmpty || t._emit("changeSelection"), !t.$keepDesiredColumnOnChange && e.old.column != e.value.column && (t.$desiredColumn = null)
        }), this.selectionAnchor.on("change", function () {
            t.$isEmpty || t._emit("changeSelection")
        })
    };
    (function () {
        r.implement(this, s), this.isEmpty = function () {
            return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column
        }, this.isMultiLine = function () {
            return this.isEmpty() ? !1 : this.getRange().isMultiLine()
        }, this.getCursor = function () {
            return this.lead.getPosition()
        }, this.setSelectionAnchor = function (e, t) {
            this.anchor.setPosition(e, t), this.$isEmpty && (this.$isEmpty = !1, this._emit("changeSelection"))
        }, this.getSelectionAnchor = function () {
            return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition()
        }, this.getSelectionLead = function () {
            return this.lead.getPosition()
        }, this.shiftSelection = function (e) {
            if (this.$isEmpty) {
                this.moveCursorTo(this.lead.row, this.lead.column + e);
                return
            }
            var t = this.getSelectionAnchor(), n = this.getSelectionLead(), r = this.isBackwards();
            (!r || t.column !== 0) && this.setSelectionAnchor(t.row, t.column + e), (r || n.column !== 0) && this.$moveSelection(function () {
                this.moveCursorTo(n.row, n.column + e)
            })
        }, this.isBackwards = function () {
            var e = this.anchor, t = this.lead;
            return e.row > t.row || e.row == t.row && e.column > t.column
        }, this.getRange = function () {
            var e = this.anchor, t = this.lead;
            return this.isEmpty() ? o.fromPoints(t, t) : this.isBackwards() ? o.fromPoints(t, e) : o.fromPoints(e, t)
        }, this.clearSelection = function () {
            this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"))
        }, this.selectAll = function () {
            var e = this.doc.getLength() - 1;
            this.setSelectionAnchor(0, 0), this.moveCursorTo(e, this.doc.getLine(e).length)
        }, this.setRange = this.setSelectionRange = function (e, t) {
            t ? (this.setSelectionAnchor(e.end.row, e.end.column), this.selectTo(e.start.row, e.start.column)) : (this.setSelectionAnchor(e.start.row, e.start.column), this.selectTo(e.end.row, e.end.column)), this.getRange().isEmpty() && (this.$isEmpty = !0), this.$desiredColumn = null
        }, this.$moveSelection = function (e) {
            var t = this.lead;
            this.$isEmpty && this.setSelectionAnchor(t.row, t.column), e.call(this)
        }, this.selectTo = function (e, t) {
            this.$moveSelection(function () {
                this.moveCursorTo(e, t)
            })
        }, this.selectToPosition = function (e) {
            this.$moveSelection(function () {
                this.moveCursorToPosition(e)
            })
        }, this.moveTo = function (e, t) {
            this.clearSelection(), this.moveCursorTo(e, t)
        }, this.moveToPosition = function (e) {
            this.clearSelection(), this.moveCursorToPosition(e)
        }, this.selectUp = function () {
            this.$moveSelection(this.moveCursorUp)
        }, this.selectDown = function () {
            this.$moveSelection(this.moveCursorDown)
        }, this.selectRight = function () {
            this.$moveSelection(this.moveCursorRight)
        }, this.selectLeft = function () {
            this.$moveSelection(this.moveCursorLeft)
        }, this.selectLineStart = function () {
            this.$moveSelection(this.moveCursorLineStart)
        }, this.selectLineEnd = function () {
            this.$moveSelection(this.moveCursorLineEnd)
        }, this.selectFileEnd = function () {
            this.$moveSelection(this.moveCursorFileEnd)
        }, this.selectFileStart = function () {
            this.$moveSelection(this.moveCursorFileStart)
        }, this.selectWordRight = function () {
            this.$moveSelection(this.moveCursorWordRight)
        }, this.selectWordLeft = function () {
            this.$moveSelection(this.moveCursorWordLeft)
        }, this.getWordRange = function (e, t) {
            if (typeof t == "undefined") {
                var n = e || this.lead;
                e = n.row, t = n.column
            }
            return this.session.getWordRange(e, t)
        }, this.selectWord = function () {
            this.setSelectionRange(this.getWordRange())
        }, this.selectAWord = function () {
            var e = this.getCursor(), t = this.session.getAWordRange(e.row, e.column);
            this.setSelectionRange(t)
        }, this.getLineRange = function (e, t) {
            var n = typeof e == "number" ? e : this.lead.row, r, i = this.session.getFoldLine(n);
            return i ? (n = i.start.row, r = i.end.row) : r = n, t === !0 ? new o(n, 0, r, this.session.getLine(r).length) : new o(n, 0, r + 1, 0)
        }, this.selectLine = function () {
            this.setSelectionRange(this.getLineRange())
        }, this.moveCursorUp = function () {
            this.moveCursorBy(-1, 0)
        }, this.moveCursorDown = function () {
            this.moveCursorBy(1, 0)
        }, this.moveCursorLeft = function () {
            var e = this.lead.getPosition(), t;
            if (t = this.session.getFoldAt(e.row, e.column, -1))this.moveCursorTo(t.start.row, t.start.column); else if (e.column === 0)e.row > 0 && this.moveCursorTo(e.row - 1, this.doc.getLine(e.row - 1).length); else {
                var n = this.session.getTabSize();
                this.session.isTabStop(e) && this.doc.getLine(e.row).slice(e.column - n, e.column).split(" ").length - 1 == n ? this.moveCursorBy(0, -n) : this.moveCursorBy(0, -1)
            }
        }, this.moveCursorRight = function () {
            var e = this.lead.getPosition(), t;
            if (t = this.session.getFoldAt(e.row, e.column, 1))this.moveCursorTo(t.end.row, t.end.column); else if (this.lead.column == this.doc.getLine(this.lead.row).length)this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0); else {
                var n = this.session.getTabSize(), e = this.lead;
                this.session.isTabStop(e) && this.doc.getLine(e.row).slice(e.column, e.column + n).split(" ").length - 1 == n ? this.moveCursorBy(0, n) : this.moveCursorBy(0, 1)
            }
        }, this.moveCursorLineStart = function () {
            var e = this.lead.row, t = this.lead.column, n = this.session.documentToScreenRow(e, t), r = this.session.screenToDocumentPosition(n, 0), i = this.session.getDisplayLine(e, null, r.row, r.column), s = i.match(/^\s*/);
            s[0].length != t && !this.session.$useEmacsStyleLineStart && (r.column += s[0].length), this.moveCursorToPosition(r)
        }, this.moveCursorLineEnd = function () {
            var e = this.lead, t = this.session.getDocumentLastRowColumnPosition(e.row, e.column);
            if (this.lead.column == t.column) {
                var n = this.session.getLine(t.row);
                if (t.column == n.length) {
                    var r = n.search(/\s+$/);
                    r > 0 && (t.column = r)
                }
            }
            this.moveCursorTo(t.row, t.column)
        }, this.moveCursorFileEnd = function () {
            var e = this.doc.getLength() - 1, t = this.doc.getLine(e).length;
            this.moveCursorTo(e, t)
        }, this.moveCursorFileStart = function () {
            this.moveCursorTo(0, 0)
        }, this.moveCursorLongWordRight = function () {
            var e = this.lead.row, t = this.lead.column, n = this.doc.getLine(e), r = n.substring(t), i;
            this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
            var s = this.session.getFoldAt(e, t, 1);
            if (s) {
                this.moveCursorTo(s.end.row, s.end.column);
                return
            }
            if (i = this.session.nonTokenRe.exec(r))t += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, r = n.substring(t);
            if (t >= n.length) {
                this.moveCursorTo(e, n.length), this.moveCursorRight(), e < this.doc.getLength() - 1 && this.moveCursorWordRight();
                return
            }
            if (i = this.session.tokenRe.exec(r))t += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0;
            this.moveCursorTo(e, t)
        }, this.moveCursorLongWordLeft = function () {
            var e = this.lead.row, t = this.lead.column, n;
            if (n = this.session.getFoldAt(e, t, -1)) {
                this.moveCursorTo(n.start.row, n.start.column);
                return
            }
            var r = this.session.getFoldStringAt(e, t, -1);
            r == null && (r = this.doc.getLine(e).substring(0, t));
            var s = i.stringReverse(r), o;
            this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
            if (o = this.session.nonTokenRe.exec(s))t -= this.session.nonTokenRe.lastIndex, s = s.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0;
            if (t <= 0) {
                this.moveCursorTo(e, 0), this.moveCursorLeft(), e > 0 && this.moveCursorWordLeft();
                return
            }
            if (o = this.session.tokenRe.exec(s))t -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0;
            this.moveCursorTo(e, t)
        }, this.$shortWordEndIndex = function (e) {
            var t, n = 0, r, i = /\s/, s = this.session.tokenRe;
            s.lastIndex = 0;
            if (t = this.session.tokenRe.exec(e))n = this.session.tokenRe.lastIndex; else {
                while ((r = e[n]) && i.test(r))n++;
                if (n < 1) {
                    s.lastIndex = 0;
                    while ((r = e[n]) && !s.test(r)) {
                        s.lastIndex = 0, n++;
                        if (i.test(r)) {
                            if (n > 2) {
                                n--;
                                break
                            }
                            while ((r = e[n]) && i.test(r))n++;
                            if (n > 2)break
                        }
                    }
                }
            }
            return s.lastIndex = 0, n
        }, this.moveCursorShortWordRight = function () {
            var e = this.lead.row, t = this.lead.column, n = this.doc.getLine(e), r = n.substring(t), i = this.session.getFoldAt(e, t, 1);
            if (i)return this.moveCursorTo(i.end.row, i.end.column);
            if (t == n.length) {
                var s = this.doc.getLength();
                do e++, r = this.doc.getLine(e); while (e < s && /^\s*$/.test(r));
                /^\s+/.test(r) || (r = ""), t = 0
            }
            var o = this.$shortWordEndIndex(r);
            this.moveCursorTo(e, t + o)
        }, this.moveCursorShortWordLeft = function () {
            var e = this.lead.row, t = this.lead.column, n;
            if (n = this.session.getFoldAt(e, t, -1))return this.moveCursorTo(n.start.row, n.start.column);
            var r = this.session.getLine(e).substring(0, t);
            if (t === 0) {
                do e--, r = this.doc.getLine(e); while (e > 0 && /^\s*$/.test(r));
                t = r.length, /\s+$/.test(r) || (r = "")
            }
            var s = i.stringReverse(r), o = this.$shortWordEndIndex(s);
            return this.moveCursorTo(e, t - o)
        }, this.moveCursorWordRight = function () {
            this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight()
        }, this.moveCursorWordLeft = function () {
            this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft()
        }, this.moveCursorBy = function (e, t) {
            var n = this.session.documentToScreenPosition(this.lead.row, this.lead.column);
            t === 0 && (this.$desiredColumn ? n.column = this.$desiredColumn : this.$desiredColumn = n.column);
            var r = this.session.screenToDocumentPosition(n.row + e, n.column);
            e !== 0 && t === 0 && r.row === this.lead.row && r.column === this.lead.column && this.session.lineWidgets && this.session.lineWidgets[r.row] && r.row++, this.moveCursorTo(r.row, r.column + t, t === 0)
        }, this.moveCursorToPosition = function (e) {
            this.moveCursorTo(e.row, e.column)
        }, this.moveCursorTo = function (e, t, n) {
            var r = this.session.getFoldAt(e, t, 1);
            r && (e = r.start.row, t = r.start.column), this.$keepDesiredColumnOnChange = !0, this.lead.setPosition(e, t), this.$keepDesiredColumnOnChange = !1, n || (this.$desiredColumn = null)
        }, this.moveCursorToScreen = function (e, t, n) {
            var r = this.session.screenToDocumentPosition(e, t);
            this.moveCursorTo(r.row, r.column, n)
        }, this.detach = function () {
            this.lead.detach(), this.anchor.detach(), this.session = this.doc = null
        }, this.fromOrientedRange = function (e) {
            this.setSelectionRange(e, e.cursor == e.start), this.$desiredColumn = e.desiredColumn || this.$desiredColumn
        }, this.toOrientedRange = function (e) {
            var t = this.getRange();
            return e ? (e.start.column = t.start.column, e.start.row = t.start.row, e.end.column = t.end.column, e.end.row = t.end.row) : e = t, e.cursor = this.isBackwards() ? e.start : e.end, e.desiredColumn = this.$desiredColumn, e
        }, this.getRangeOfMovements = function (e) {
            var t = this.getCursor();
            try {
                e.call(null, this);
                var n = this.getCursor();
                return o.fromPoints(t, n)
            } catch (r) {
                return o.fromPoints(t, t)
            } finally {
                this.moveCursorToPosition(t)
            }
        }, this.toJSON = function () {
            if (this.rangeCount)var e = this.ranges.map(function (e) {
                var t = e.clone();
                return t.isBackwards = e.cursor == e.start, t
            }); else {
                var e = this.getRange();
                e.isBackwards = this.isBackwards()
            }
            return e
        }, this.fromJSON = function (e) {
            if (e.start == undefined) {
                if (this.rangeList) {
                    this.toSingleRange(e[0]);
                    for (var t = e.length; t--;) {
                        var n = o.fromPoints(e[t].start, e[t].end);
                        e.isBackwards && (n.cursor = n.start), this.addRange(n, !0)
                    }
                    return
                }
                e = e[0]
            }
            this.rangeList && this.toSingleRange(e), this.setSelectionRange(e, e.isBackwards)
        }, this.isEqual = function (e) {
            if ((e.length || this.rangeCount) && e.length != this.rangeCount)return !1;
            if (!e.length || !this.ranges)return this.getRange().isEqual(e);
            for (var t = this.ranges.length; t--;)if (!this.ranges[t].isEqual(e[t]))return !1;
            return !0
        }
    }).call(u.prototype), t.Selection = u
}), define("ace/tokenizer", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var r = 1e3, i = function (e) {
        this.states = e, this.regExps = {}, this.matchMappings = {};
        for (var t in this.states) {
            var n = this.states[t], r = [], i = 0, s = this.matchMappings[t] = {defaultToken: "text"}, o = "g", u = [];
            for (var a = 0; a < n.length; a++) {
                var f = n[a];
                f.defaultToken && (s.defaultToken = f.defaultToken), f.caseInsensitive && (o = "gi");
                if (f.regex == null)continue;
                f.regex instanceof RegExp && (f.regex = f.regex.toString().slice(1, -1));
                var l = f.regex, c = (new RegExp("(?:(" + l + ")|(.))")).exec("a").length - 2;
                if (Array.isArray(f.token))if (f.token.length == 1 || c == 1)f.token = f.token[0]; else {
                    if (c - 1 != f.token.length)throw new Error("number of classes and regexp groups in '" + f.token + "'\n'" + f.regex + "' doesn't match\n" + (c - 1) + "!=" + f.token.length);
                    f.tokenArray = f.token, f.token = null, f.onMatch = this.$arrayTokens
                } else typeof f.token == "function" && !f.onMatch && (c > 1 ? f.onMatch = this.$applyToken : f.onMatch = f.token);
                c > 1 && (/\\\d/.test(f.regex) ? l = f.regex.replace(/\\([0-9]+)/g, function (e, t) {
                    return "\\" + (parseInt(t, 10) + i + 1)
                }) : (c = 1, l = this.removeCapturingGroups(f.regex)), !f.splitRegex && typeof f.token != "string" && u.push(f)), s[i] = a, i += c, r.push(l), f.onMatch || (f.onMatch = null)
            }
            r.length || (s[0] = 0, r.push("$")), u.forEach(function (e) {
                e.splitRegex = this.createSplitterRegexp(e.regex, o)
            }, this), this.regExps[t] = new RegExp("(" + r.join(")|(") + ")|($)", o)
        }
    };
    (function () {
        this.$setMaxTokenCount = function (e) {
            r = e | 0
        }, this.$applyToken = function (e) {
            var t = this.splitRegex.exec(e).slice(1), n = this.token.apply(this, t);
            if (typeof n == "string")return [{type: n, value: e}];
            var r = [];
            for (var i = 0, s = n.length; i < s; i++)t[i] && (r[r.length] = {type: n[i], value: t[i]});
            return r
        }, this.$arrayTokens = function (e) {
            if (!e)return [];
            var t = this.splitRegex.exec(e);
            if (!t)return "text";
            var n = [], r = this.tokenArray;
            for (var i = 0, s = r.length; i < s; i++)t[i + 1] && (n[n.length] = {type: r[i], value: t[i + 1]});
            return n
        }, this.removeCapturingGroups = function (e) {
            var t = e.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g, function (e, t) {
                return t ? "(?:" : e
            });
            return t
        }, this.createSplitterRegexp = function (e, t) {
            if (e.indexOf("(?=") != -1) {
                var n = 0, r = !1, i = {};
                e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function (e, t, s, o, u, a) {
                    return r ? r = u != "]" : u ? r = !0 : o ? (n == i.stack && (i.end = a + 1, i.stack = -1), n--) : s && (n++, s.length != 1 && (i.stack = n, i.start = a)), e
                }), i.end != null && /^\)*$/.test(e.substr(i.end)) && (e = e.substring(0, i.start) + e.substr(i.end))
            }
            return new RegExp(e, (t || "").replace("g", ""))
        }, this.getLineTokens = function (e, t) {
            if (t && typeof t != "string") {
                var n = t.slice(0);
                t = n[0], t === "#tmp" && (n.shift(), t = n.shift())
            } else var n = [];
            var i = t || "start", s = this.states[i];
            s || (i = "start", s = this.states[i]);
            var o = this.matchMappings[i], u = this.regExps[i];
            u.lastIndex = 0;
            var a, f = [], l = 0, c = {type: null, value: ""};
            while (a = u.exec(e)) {
                var h = o.defaultToken, p = null, d = a[0], v = u.lastIndex;
                if (v - d.length > l) {
                    var m = e.substring(l, v - d.length);
                    c.type == h ? c.value += m : (c.type && f.push(c), c = {type: h, value: m})
                }
                for (var g = 0; g < a.length - 2; g++) {
                    if (a[g + 1] === undefined)continue;
                    p = s[o[g]], p.onMatch ? h = p.onMatch(d, i, n) : h = p.token, p.next && (typeof p.next == "string" ? i = p.next : i = p.next(i, n), s = this.states[i], s || (window.console && console.error && console.error(i, "doesn't exist"), i = "start", s = this.states[i]), o = this.matchMappings[i], l = v, u = this.regExps[i], u.lastIndex = v);
                    break
                }
                if (d)if (typeof h == "string")!!p && p.merge === !1 || c.type !== h ? (c.type && f.push(c), c = {
                    type: h,
                    value: d
                }) : c.value += d; else if (h) {
                    c.type && f.push(c), c = {type: null, value: ""};
                    for (var g = 0; g < h.length; g++)f.push(h[g])
                }
                if (l == e.length)break;
                l = v;
                if (f.length > r) {
                    while (l < e.length)c.type && f.push(c), c = {value: e.substring(l, l += 2e3), type: "overflow"};
                    i = "start", n = [];
                    break
                }
            }
            return c.type && f.push(c), n.length > 1 && n[0] !== i && n.unshift("#tmp", i), {
                tokens: f,
                state: n.length ? n : i
            }
        }
    }).call(i.prototype), t.Tokenizer = i
}), define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], function (e, t, n) {
    "use strict";
    var r = e("../lib/lang"), i = function () {
        this.$rules = {start: [{token: "empty_line", regex: "^$"}, {defaultToken: "text"}]}
    };
    (function () {
        this.addRules = function (e, t) {
            if (!t) {
                for (var n in e)this.$rules[n] = e[n];
                return
            }
            for (var n in e) {
                var r = e[n];
                for (var i = 0; i < r.length; i++) {
                    var s = r[i];
                    if (s.next || s.onMatch)typeof s.next != "string" ? s.nextState && s.nextState.indexOf(t) !== 0 && (s.nextState = t + s.nextState) : s.next.indexOf(t) !== 0 && (s.next = t + s.next)
                }
                this.$rules[t + n] = r
            }
        }, this.getRules = function () {
            return this.$rules
        }, this.embedRules = function (e, t, n, i, s) {
            var o = typeof e == "function" ? (new e).getRules() : e;
            if (i)for (var u = 0; u < i.length; u++)i[u] = t + i[u]; else {
                i = [];
                for (var a in o)i.push(t + a)
            }
            this.addRules(o, t);
            if (n) {
                var f = Array.prototype[s ? "push" : "unshift"];
                for (var u = 0; u < i.length; u++)f.apply(this.$rules[i[u]], r.deepCopy(n))
            }
            this.$embeds || (this.$embeds = []), this.$embeds.push(t)
        }, this.getEmbeds = function () {
            return this.$embeds
        };
        var e = function (e, t) {
            return (e != "start" || t.length) && t.unshift(this.nextState, e), this.nextState
        }, t = function (e, t) {
            return t.shift(), t.shift() || "start"
        };
        this.normalizeRules = function () {
            function i(s) {
                var o = r[s];
                o.processed = !0;
                for (var u = 0; u < o.length; u++) {
                    var a = o[u];
                    !a.regex && a.start && (a.regex = a.start, a.next || (a.next = []), a.next.push({defaultToken: a.token}, {
                        token: a.token + ".end",
                        regex: a.end || a.start,
                        next: "pop"
                    }), a.token = a.token + ".start", a.push = !0);
                    var f = a.next || a.push;
                    if (f && Array.isArray(f)) {
                        var l = a.stateName;
                        l || (l = a.token, typeof l != "string" && (l = l[0] || ""), r[l] && (l += n++)), r[l] = f, a.next = l, i(l)
                    } else f == "pop" && (a.next = t);
                    a.push && (a.nextState = a.next || a.push, a.next = e, delete a.push);
                    if (a.rules)for (var c in a.rules)r[c] ? r[c].push && r[c].push.apply(r[c], a.rules[c]) : r[c] = a.rules[c];
                    if (a.include || typeof a == "string")var h = a.include || a, p = r[h]; else Array.isArray(a) && (p = a);
                    if (p) {
                        var d = [u, 1].concat(p);
                        a.noEscape && (d = d.filter(function (e) {
                            return !e.next
                        })), o.splice.apply(o, d), u--, p = null
                    }
                    a.keywordMap && (a.token = this.createKeywordMapper(a.keywordMap, a.defaultToken || "text", a.caseInsensitive), delete a.defaultToken)
                }
            }

            var n = 0, r = this.$rules;
            Object.keys(r).forEach(i, this)
        }, this.createKeywordMapper = function (e, t, n, r) {
            var i = Object.create(null);
            return Object.keys(e).forEach(function (t) {
                var s = e[t];
                n && (s = s.toLowerCase());
                var o = s.split(r || "|");
                for (var u = o.length; u--;)i[o[u]] = t
            }), Object.getPrototypeOf(i) && (i.__proto__ = null), this.$keywordList = Object.keys(i), e = null, n ? function (e) {
                return i[e.toLowerCase()] || t
            } : function (e) {
                return i[e] || t
            }
        }, this.getKeywords = function () {
            return this.$keywords
        }
    }).call(i.prototype), t.TextHighlightRules = i
}), define("ace/mode/behaviour", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var r = function () {
        this.$behaviours = {}
    };
    (function () {
        this.add = function (e, t, n) {
            switch (undefined) {
                case this.$behaviours:
                    this.$behaviours = {};
                case this.$behaviours[e]:
                    this.$behaviours[e] = {}
            }
            this.$behaviours[e][t] = n
        }, this.addBehaviours = function (e) {
            for (var t in e)for (var n in e[t])this.add(t, n, e[t][n])
        }, this.remove = function (e) {
            this.$behaviours && this.$behaviours[e] && delete this.$behaviours[e]
        }, this.inherit = function (e, t) {
            if (typeof e == "function")var n = (new e).getBehaviours(t); else var n = e.getBehaviours(t);
            this.addBehaviours(n)
        }, this.getBehaviours = function (e) {
            if (!e)return this.$behaviours;
            var t = {};
            for (var n = 0; n < e.length; n++)this.$behaviours[e[n]] && (t[e[n]] = this.$behaviours[e[n]]);
            return t
        }
    }).call(r.prototype), t.Behaviour = r
}), define("ace/unicode", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    function r(e) {
        var n = /\w{4}/g;
        for (var r in e)t.packages[r] = e[r].replace(n, "\\u$&")
    }

    t.packages = {}, r({
        L: "0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
        Ll: "0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",
        Lu: "0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",
        Lt: "01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",
        Lm: "02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",
        Lo: "01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
        M: "0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",
        Mn: "0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",
        Mc: "0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",
        Me: "0488048906DE20DD-20E020E2-20E4A670-A672",
        N: "0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
        Nd: "0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
        Nl: "16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",
        No: "00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",
        P: "0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",
        Pd: "002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",
        Ps: "0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",
        Pe: "0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",
        Pi: "00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",
        Pf: "00BB2019201D203A2E032E052E0A2E0D2E1D2E21",
        Pc: "005F203F20402054FE33FE34FE4D-FE4FFF3F",
        Po: "0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",
        S: "0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",
        Sm: "002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",
        Sc: "002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",
        Sk: "005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",
        So: "00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",
        Z: "002000A01680180E2000-200A20282029202F205F3000",
        Zs: "002000A01680180E2000-200A202F205F3000",
        Zl: "2028",
        Zp: "2029",
        C: "0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",
        Cc: "0000-001F007F-009F",
        Cf: "00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",
        Co: "E000-F8FF",
        Cs: "D800-DFFF",
        Cn: "03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF"
    })
}), define("ace/token_iterator", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var r = function (e, t, n) {
        this.$session = e, this.$row = t, this.$rowTokens = e.getTokens(t);
        var r = e.getTokenAt(t, n);
        this.$tokenIndex = r ? r.index : -1
    };
    (function () {
        this.stepBackward = function () {
            this.$tokenIndex -= 1;
            while (this.$tokenIndex < 0) {
                this.$row -= 1;
                if (this.$row < 0)return this.$row = 0, null;
                this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1
            }
            return this.$rowTokens[this.$tokenIndex]
        }, this.stepForward = function () {
            this.$tokenIndex += 1;
            var e;
            while (this.$tokenIndex >= this.$rowTokens.length) {
                this.$row += 1, e || (e = this.$session.getLength());
                if (this.$row >= e)return this.$row = e - 1, null;
                this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0
            }
            return this.$rowTokens[this.$tokenIndex]
        }, this.getCurrentToken = function () {
            return this.$rowTokens[this.$tokenIndex]
        }, this.getCurrentTokenRow = function () {
            return this.$row
        }, this.getCurrentTokenColumn = function () {
            var e = this.$rowTokens, t = this.$tokenIndex, n = e[t].start;
            if (n !== undefined)return n;
            n = 0;
            while (t > 0)t -= 1, n += e[t].value.length;
            return n
        }
    }).call(r.prototype), t.TokenIterator = r
}), define("ace/mode/text", ["require", "exports", "module", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function (e, t, n) {
    "use strict";
    var r = e("../tokenizer").Tokenizer, i = e("./text_highlight_rules").TextHighlightRules, s = e("./behaviour").Behaviour, o = e("../unicode"), u = e("../lib/lang"), a = e("../token_iterator").TokenIterator, f = e("../range").Range, l = function () {
        this.HighlightRules = i, this.$behaviour = new s
    };
    (function () {
        this.tokenRe = new RegExp("^[" + o.packages.L + o.packages.Mn + o.packages.Mc + o.packages.Nd + o.packages.Pc + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + o.packages.L + o.packages.Mn + o.packages.Mc + o.packages.Nd + o.packages.Pc + "\\$_]|\\s])+", "g"), this.getTokenizer = function () {
            return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules, this.$tokenizer = new r(this.$highlightRules.getRules())), this.$tokenizer
        }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function (e, t, n, r) {
            function w(e) {
                for (var t = n; t <= r; t++)e(i.getLine(t), t)
            }

            var i = t.doc, s = !0, o = !0, a = Infinity, f = t.getTabSize(), l = !1;
            if (!this.lineCommentStart) {
                if (!this.blockComment)return !1;
                var c = this.blockComment.start, h = this.blockComment.end, p = new RegExp("^(\\s*)(?:" + u.escapeRegExp(c) + ")"), d = new RegExp("(?:" + u.escapeRegExp(h) + ")\\s*$"), v = function (e, t) {
                    if (g(e, t))return;
                    if (!s || /\S/.test(e))i.insertInLine({row: t, column: e.length}, h), i.insertInLine({
                        row: t,
                        column: a
                    }, c)
                }, m = function (e, t) {
                    var n;
                    (n = e.match(d)) && i.removeInLine(t, e.length - n[0].length, e.length), (n = e.match(p)) && i.removeInLine(t, n[1].length, n[0].length)
                }, g = function (e, n) {
                    if (p.test(e))return !0;
                    var r = t.getTokens(n);
                    for (var i = 0; i < r.length; i++)if (r[i].type === "comment")return !0
                }
            } else {
                if (Array.isArray(this.lineCommentStart))var p = this.lineCommentStart.map(u.escapeRegExp).join("|"), c = this.lineCommentStart[0]; else var p = u.escapeRegExp(this.lineCommentStart), c = this.lineCommentStart;
                p = new RegExp("^(\\s*)(?:" + p + ") ?"), l = t.getUseSoftTabs();
                var m = function (e, t) {
                    var n = e.match(p);
                    if (!n)return;
                    var r = n[1].length, s = n[0].length;
                    !b(e, r, s) && n[0][s - 1] == " " && s--, i.removeInLine(t, r, s)
                }, y = c + " ", v = function (e, t) {
                    if (!s || /\S/.test(e))b(e, a, a) ? i.insertInLine({row: t, column: a}, y) : i.insertInLine({
                        row: t,
                        column: a
                    }, c)
                }, g = function (e, t) {
                    return p.test(e)
                }, b = function (e, t, n) {
                    var r = 0;
                    while (t-- && e.charAt(t) == " ")r++;
                    if (r % f != 0)return !1;
                    var r = 0;
                    while (e.charAt(n++) == " ")r++;
                    return f > 2 ? r % f != f - 1 : r % f == 0
                }
            }
            var E = Infinity;
            w(function (e, t) {
                var n = e.search(/\S/);
                n !== -1 ? (n < a && (a = n), o && !g(e, t) && (o = !1)) : E > e.length && (E = e.length)
            }), a == Infinity && (a = E, s = !1, o = !1), l && a % f != 0 && (a = Math.floor(a / f) * f), w(o ? m : v)
        }, this.toggleBlockComment = function (e, t, n, r) {
            var i = this.blockComment;
            if (!i)return;
            !i.start && i[0] && (i = i[0]);
            var s = new a(t, r.row, r.column), o = s.getCurrentToken(), u = t.selection, l = t.selection.toOrientedRange(), c, h;
            if (o && /comment/.test(o.type)) {
                var p, d;
                while (o && /comment/.test(o.type)) {
                    var v = o.value.indexOf(i.start);
                    if (v != -1) {
                        var m = s.getCurrentTokenRow(), g = s.getCurrentTokenColumn() + v;
                        p = new f(m, g, m, g + i.start.length);
                        break
                    }
                    o = s.stepBackward()
                }
                var s = new a(t, r.row, r.column), o = s.getCurrentToken();
                while (o && /comment/.test(o.type)) {
                    var v = o.value.indexOf(i.end);
                    if (v != -1) {
                        var m = s.getCurrentTokenRow(), g = s.getCurrentTokenColumn() + v;
                        d = new f(m, g, m, g + i.end.length);
                        break
                    }
                    o = s.stepForward()
                }
                d && t.remove(d), p && (t.remove(p), c = p.start.row, h = -i.start.length)
            } else h = i.start.length, c = n.start.row, t.insert(n.end, i.end), t.insert(n.start, i.start);
            l.start.row == c && (l.start.column += h), l.end.row == c && (l.end.column += h), t.selection.fromOrientedRange(l)
        }, this.getNextLineIndent = function (e, t, n) {
            return this.$getIndent(t)
        }, this.checkOutdent = function (e, t, n) {
            return !1
        }, this.autoOutdent = function (e, t, n) {
        }, this.$getIndent = function (e) {
            return e.match(/^\s*/)[0]
        }, this.createWorker = function (e) {
            return null
        }, this.createModeDelegates = function (e) {
            this.$embeds = [], this.$modes = {};
            for (var t in e)e[t] && (this.$embeds.push(t), this.$modes[t] = new e[t]);
            var n = ["toggleBlockComment", "toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction", "getCompletions"];
            for (var t = 0; t < n.length; t++)(function (e) {
                var r = n[t], i = e[r];
                e[n[t]] = function () {
                    return this.$delegator(r, arguments, i)
                }
            })(this)
        }, this.$delegator = function (e, t, n) {
            var r = t[0];
            typeof r != "string" && (r = r[0]);
            for (var i = 0; i < this.$embeds.length; i++) {
                if (!this.$modes[this.$embeds[i]])continue;
                var s = r.split(this.$embeds[i]);
                if (!s[0] && s[1]) {
                    t[0] = s[1];
                    var o = this.$modes[this.$embeds[i]];
                    return o[e].apply(o, t)
                }
            }
            var u = n.apply(this, t);
            return n ? u : undefined
        }, this.transformAction = function (e, t, n, r, i) {
            if (this.$behaviour) {
                var s = this.$behaviour.getBehaviours();
                for (var o in s)if (s[o][t]) {
                    var u = s[o][t].apply(this, arguments);
                    if (u)return u
                }
            }
        }, this.getKeywords = function (e) {
            if (!this.completionKeywords) {
                var t = this.$tokenizer.rules, n = [];
                for (var r in t) {
                    var i = t[r];
                    for (var s = 0, o = i.length; s < o; s++)if (typeof i[s].token == "string")/keyword|support|storage/.test(i[s].token) && n.push(i[s].regex); else if (typeof i[s].token == "object")for (var u = 0, a = i[s].token.length; u < a; u++)if (/keyword|support|storage/.test(i[s].token[u])) {
                        var r = i[s].regex.match(/\(.+?\)/g)[u];
                        n.push(r.substr(1, r.length - 2))
                    }
                }
                this.completionKeywords = n
            }
            return e ? n.concat(this.$keywordList || []) : this.$keywordList
        }, this.$createKeywordList = function () {
            return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || []
        }, this.getCompletions = function (e, t, n, r) {
            var i = this.$keywordList || this.$createKeywordList();
            return i.map(function (e) {
                return {name: e, value: e, score: 0, meta: "keyword"}
            })
        }, this.$id = "ace/mode/text"
    }).call(l.prototype), t.Mode = l
}), define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"), i = e("./lib/event_emitter").EventEmitter, s = t.Anchor = function (e, t, n) {
        this.$onChange = this.onChange.bind(this), this.attach(e), typeof n == "undefined" ? this.setPosition(t.row, t.column) : this.setPosition(t, n)
    };
    (function () {
        r.implement(this, i), this.getPosition = function () {
            return this.$clipPositionToDocument(this.row, this.column)
        }, this.getDocument = function () {
            return this.document
        }, this.$insertRight = !1, this.onChange = function (e) {
            var t = e.data, n = t.range;
            if (n.start.row == n.end.row && n.start.row != this.row)return;
            if (n.start.row > this.row)return;
            if (n.start.row == this.row && n.start.column > this.column)return;
            var r = this.row, i = this.column, s = n.start, o = n.end;
            if (t.action === "insertText")if (s.row === r && s.column <= i) {
                if (s.column !== i || !this.$insertRight)s.row === o.row ? i += o.column - s.column : (i -= s.column, r += o.row - s.row)
            } else s.row !== o.row && s.row < r && (r += o.row - s.row); else t.action === "insertLines" ? (s.row !== r || i !== 0 || !this.$insertRight) && s.row <= r && (r += o.row - s.row) : t.action === "removeText" ? s.row === r && s.column < i ? o.column >= i ? i = s.column : i = Math.max(0, i - (o.column - s.column)) : s.row !== o.row && s.row < r ? (o.row === r && (i = Math.max(0, i - o.column) + s.column), r -= o.row - s.row) : o.row === r && (r -= o.row - s.row, i = Math.max(0, i - o.column) + s.column) : t.action == "removeLines" && s.row <= r && (o.row <= r ? r -= o.row - s.row : (r = s.row, i = 0));
            this.setPosition(r, i, !0)
        }, this.setPosition = function (e, t, n) {
            var r;
            n ? r = {row: e, column: t} : r = this.$clipPositionToDocument(e, t);
            if (this.row == r.row && this.column == r.column)return;
            var i = {row: this.row, column: this.column};
            this.row = r.row, this.column = r.column, this._signal("change", {old: i, value: r})
        }, this.detach = function () {
            this.document.removeEventListener("change", this.$onChange)
        }, this.attach = function (e) {
            this.document = e || this.document, this.document.on("change", this.$onChange)
        }, this.$clipPositionToDocument = function (e, t) {
            var n = {};
            return e >= this.document.getLength() ? (n.row = Math.max(0, this.document.getLength() - 1), n.column = this.document.getLine(n.row).length) : e < 0 ? (n.row = 0, n.column = 0) : (n.row = e, n.column = Math.min(this.document.getLine(n.row).length, Math.max(0, t))), t < 0 && (n.column = 0), n
        }
    }).call(s.prototype)
}), define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"), i = e("./lib/event_emitter").EventEmitter, s = e("./range").Range, o = e("./anchor").Anchor, u = function (e) {
        this.$lines = [], e.length === 0 ? this.$lines = [""] : Array.isArray(e) ? this._insertLines(0, e) : this.insert({
            row: 0,
            column: 0
        }, e)
    };
    (function () {
        r.implement(this, i), this.setValue = function (e) {
            var t = this.getLength();
            this.remove(new s(0, 0, t, this.getLine(t - 1).length)), this.insert({row: 0, column: 0}, e)
        }, this.getValue = function () {
            return this.getAllLines().join(this.getNewLineCharacter())
        }, this.createAnchor = function (e, t) {
            return new o(this, e, t)
        }, "aaa".split(/a/).length === 0 ? this.$split = function (e) {
            return e.replace(/\r\n|\r/g, "\n").split("\n")
        } : this.$split = function (e) {
            return e.split(/\r\n|\r|\n/)
        }, this.$detectNewLine = function (e) {
            var t = e.match(/^.*?(\r\n|\r|\n)/m);
            this.$autoNewLine = t ? t[1] : "\n", this._signal("changeNewLineMode")
        }, this.getNewLineCharacter = function () {
            switch (this.$newLineMode) {
                case"windows":
                    return "\r\n";
                case"unix":
                    return "\n";
                default:
                    return this.$autoNewLine || "\n"
            }
        }, this.$autoNewLine = "", this.$newLineMode = "auto", this.setNewLineMode = function (e) {
            if (this.$newLineMode === e)return;
            this.$newLineMode = e, this._signal("changeNewLineMode")
        }, this.getNewLineMode = function () {
            return this.$newLineMode
        }, this.isNewLine = function (e) {
            return e == "\r\n" || e == "\r" || e == "\n"
        }, this.getLine = function (e) {
            return this.$lines[e] || ""
        }, this.getLines = function (e, t) {
            return this.$lines.slice(e, t + 1)
        }, this.getAllLines = function () {
            return this.getLines(0, this.getLength())
        }, this.getLength = function () {
            return this.$lines.length
        }, this.getTextRange = function (e) {
            if (e.start.row == e.end.row)return this.getLine(e.start.row).substring(e.start.column, e.end.column);
            var t = this.getLines(e.start.row, e.end.row);
            t[0] = (t[0] || "").substring(e.start.column);
            var n = t.length - 1;
            return e.end.row - e.start.row == n && (t[n] = t[n].substring(0, e.end.column)), t.join(this.getNewLineCharacter())
        }, this.$clipPosition = function (e) {
            var t = this.getLength();
            return e.row >= t ? (e.row = Math.max(0, t - 1), e.column = this.getLine(t - 1).length) : e.row < 0 && (e.row = 0), e
        }, this.insert = function (e, t) {
            if (!t || t.length === 0)return e;
            e = this.$clipPosition(e), this.getLength() <= 1 && this.$detectNewLine(t);
            var n = this.$split(t), r = n.splice(0, 1)[0], i = n.length == 0 ? null : n.splice(n.length - 1, 1)[0];
            return e = this.insertInLine(e, r), i !== null && (e = this.insertNewLine(e), e = this._insertLines(e.row, n), e = this.insertInLine(e, i || "")), e
        }, this.insertLines = function (e, t) {
            return e >= this.getLength() ? this.insert({
                row: e,
                column: 0
            }, "\n" + t.join("\n")) : this._insertLines(Math.max(e, 0), t)
        }, this._insertLines = function (e, t) {
            if (t.length == 0)return {row: e, column: 0};
            while (t.length > 61440) {
                var n = this._insertLines(e, t.slice(0, 61440));
                t = t.slice(61440), e = n.row
            }
            var r = [e, 0];
            r.push.apply(r, t), this.$lines.splice.apply(this.$lines, r);
            var i = new s(e, 0, e + t.length, 0), o = {action: "insertLines", range: i, lines: t};
            return this._signal("change", {data: o}), i.end
        }, this.insertNewLine = function (e) {
            e = this.$clipPosition(e);
            var t = this.$lines[e.row] || "";
            this.$lines[e.row] = t.substring(0, e.column), this.$lines.splice(e.row + 1, 0, t.substring(e.column, t.length));
            var n = {row: e.row + 1, column: 0}, r = {
                action: "insertText",
                range: s.fromPoints(e, n),
                text: this.getNewLineCharacter()
            };
            return this._signal("change", {data: r}), n
        }, this.insertInLine = function (e, t) {
            if (t.length == 0)return e;
            var n = this.$lines[e.row] || "";
            this.$lines[e.row] = n.substring(0, e.column) + t + n.substring(e.column);
            var r = {row: e.row, column: e.column + t.length}, i = {
                action: "insertText",
                range: s.fromPoints(e, r),
                text: t
            };
            return this._signal("change", {data: i}), r
        }, this.remove = function (e) {
            e instanceof s || (e = s.fromPoints(e.start, e.end)), e.start = this.$clipPosition(e.start), e.end = this.$clipPosition(e.end);
            if (e.isEmpty())return e.start;
            var t = e.start.row, n = e.end.row;
            if (e.isMultiLine()) {
                var r = e.start.column == 0 ? t : t + 1, i = n - 1;
                e.end.column > 0 && this.removeInLine(n, 0, e.end.column), i >= r && this._removeLines(r, i), r != t && (this.removeInLine(t, e.start.column, this.getLine(t).length), this.removeNewLine(e.start.row))
            } else this.removeInLine(t, e.start.column, e.end.column);
            return e.start
        }, this.removeInLine = function (e, t, n) {
            if (t == n)return;
            var r = new s(e, t, e, n), i = this.getLine(e), o = i.substring(t, n), u = i.substring(0, t) + i.substring(n, i.length);
            this.$lines.splice(e, 1, u);
            var a = {action: "removeText", range: r, text: o};
            return this._signal("change", {data: a}), r.start
        }, this.removeLines = function (e, t) {
            return e < 0 || t >= this.getLength() ? this.remove(new s(e, 0, t + 1, 0)) : this._removeLines(e, t)
        }, this._removeLines = function (e, t) {
            var n = new s(e, 0, t + 1, 0), r = this.$lines.splice(e, t - e + 1), i = {
                action: "removeLines",
                range: n,
                nl: this.getNewLineCharacter(),
                lines: r
            };
            return this._signal("change", {data: i}), r
        }, this.removeNewLine = function (e) {
            var t = this.getLine(e), n = this.getLine(e + 1), r = new s(e, t.length, e + 1, 0), i = t + n;
            this.$lines.splice(e, 2, i);
            var o = {action: "removeText", range: r, text: this.getNewLineCharacter()};
            this._signal("change", {data: o})
        }, this.replace = function (e, t) {
            e instanceof s || (e = s.fromPoints(e.start, e.end));
            if (t.length == 0 && e.isEmpty())return e.start;
            if (t == this.getTextRange(e))return e.end;
            this.remove(e);
            if (t)var n = this.insert(e.start, t); else n = e.start;
            return n
        }, this.applyDeltas = function (e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t], r = s.fromPoints(n.range.start, n.range.end);
                n.action == "insertLines" ? this.insertLines(r.start.row, n.lines) : n.action == "insertText" ? this.insert(r.start, n.text) : n.action == "removeLines" ? this._removeLines(r.start.row, r.end.row - 1) : n.action == "removeText" && this.remove(r)
            }
        }, this.revertDeltas = function (e) {
            for (var t = e.length - 1; t >= 0; t--) {
                var n = e[t], r = s.fromPoints(n.range.start, n.range.end);
                n.action == "insertLines" ? this._removeLines(r.start.row, r.end.row - 1) : n.action == "insertText" ? this.remove(r) : n.action == "removeLines" ? this._insertLines(r.start.row, n.lines) : n.action == "removeText" && this.insert(r.start, n.text)
            }
        }, this.indexToPosition = function (e, t) {
            var n = this.$lines || this.getAllLines(), r = this.getNewLineCharacter().length;
            for (var i = t || 0, s = n.length; i < s; i++) {
                e -= n[i].length + r;
                if (e < 0)return {row: i, column: e + n[i].length + r}
            }
            return {row: s - 1, column: n[s - 1].length}
        }, this.positionToIndex = function (e, t) {
            var n = this.$lines || this.getAllLines(), r = this.getNewLineCharacter().length, i = 0, s = Math.min(e.row, n.length);
            for (var o = t || 0; o < s; ++o)i += n[o].length + r;
            return i + e.column
        }
    }).call(u.prototype), t.Document = u
}), define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"), i = e("./lib/event_emitter").EventEmitter, s = function (e, t) {
        this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = e;
        var n = this;
        this.$worker = function () {
            if (!n.running)return;
            var e = new Date, t = n.currentLine, r = -1, i = n.doc;
            while (n.lines[t])t++;
            var s = t, o = i.getLength(), u = 0;
            n.running = !1;
            while (t < o) {
                n.$tokenizeRow(t), r = t;
                do t++; while (n.lines[t]);
                u++;
                if (u % 5 === 0 && new Date - e > 20) {
                    n.running = setTimeout(n.$worker, 20);
                    break
                }
            }
            n.currentLine = t, s <= r && n.fireUpdateEvent(s, r)
        }
    };
    (function () {
        r.implement(this, i), this.setTokenizer = function (e) {
            this.tokenizer = e, this.lines = [], this.states = [], this.start(0)
        }, this.setDocument = function (e) {
            this.doc = e, this.lines = [], this.states = [], this.stop()
        }, this.fireUpdateEvent = function (e, t) {
            var n = {first: e, last: t};
            this._signal("update", {data: n})
        }, this.start = function (e) {
            this.currentLine = Math.min(e || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700)
        }, this.scheduleStart = function () {
            this.running || (this.running = setTimeout(this.$worker, 700))
        }, this.$updateOnChange = function (e) {
            var t = e.range, n = t.start.row, r = t.end.row - n;
            if (r === 0)this.lines[n] = null; else if (e.action == "removeText" || e.action == "removeLines")this.lines.splice(n, r + 1, null), this.states.splice(n, r + 1, null); else {
                var i = Array(r + 1);
                i.unshift(n, 1), this.lines.splice.apply(this.lines, i), this.states.splice.apply(this.states, i)
            }
            this.currentLine = Math.min(n, this.currentLine, this.doc.getLength()), this.stop()
        }, this.stop = function () {
            this.running && clearTimeout(this.running), this.running = !1
        }, this.getTokens = function (e) {
            return this.lines[e] || this.$tokenizeRow(e)
        }, this.getState = function (e) {
            return this.currentLine == e && this.$tokenizeRow(e), this.states[e] || "start"
        }, this.$tokenizeRow = function (e) {
            var t = this.doc.getLine(e), n = this.states[e - 1], r = this.tokenizer.getLineTokens(t, n, e);
            return this.states[e] + "" != r.state + "" ? (this.states[e] = r.state, this.lines[e + 1] = null, this.currentLine > e + 1 && (this.currentLine = e + 1)) : this.currentLine == e && (this.currentLine = e + 1), this.lines[e] = r.tokens
        }
    }).call(s.prototype), t.BackgroundTokenizer = s
}), define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function (e, t, n) {
    "use strict";
    var r = e("./lib/lang"), i = e("./lib/oop"), s = e("./range").Range, o = function (e, t, n) {
        this.setRegexp(e), this.clazz = t, this.type = n || "text"
    };
    (function () {
        this.MAX_RANGES = 500, this.setRegexp = function (e) {
            if (this.regExp + "" == e + "")return;
            this.regExp = e, this.cache = []
        }, this.update = function (e, t, n, i) {
            if (!this.regExp)return;
            var o = i.firstRow, u = i.lastRow;
            for (var a = o; a <= u; a++) {
                var f = this.cache[a];
                f == null && (f = r.getMatchOffsets(n.getLine(a), this.regExp), f.length > this.MAX_RANGES && (f = f.slice(0, this.MAX_RANGES)), f = f.map(function (e) {
                    return new s(a, e.offset, a, e.offset + e.length)
                }), this.cache[a] = f.length ? f : "");
                for (var l = f.length; l--;)t.drawSingleLineMarker(e, f[l].toScreenRange(n), this.clazz, i)
            }
        }
    }).call(o.prototype), t.SearchHighlight = o
}), define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function (e, t, n) {
    "use strict";
    function i(e, t) {
        this.foldData = e, Array.isArray(t) ? this.folds = t : t = this.folds = [t];
        var n = t[t.length - 1];
        this.range = new r(t[0].start.row, t[0].start.column, n.end.row, n.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach(function (e) {
            e.setFoldLine(this)
        }, this)
    }

    var r = e("../range").Range;
    (function () {
        this.shiftRow = function (e) {
            this.start.row += e, this.end.row += e, this.folds.forEach(function (t) {
                t.start.row += e, t.end.row += e
            })
        }, this.addFold = function (e) {
            if (e.sameRow) {
                if (e.start.row < this.startRow || e.endRow > this.endRow)throw new Error("Can't add a fold to this FoldLine as it has no connection");
                this.folds.push(e), this.folds.sort(function (e, t) {
                    return -e.range.compareEnd(t.start.row, t.start.column)
                }), this.range.compareEnd(e.start.row, e.start.column) > 0 ? (this.end.row = e.end.row, this.end.column = e.end.column) : this.range.compareStart(e.end.row, e.end.column) < 0 && (this.start.row = e.start.row, this.start.column = e.start.column)
            } else if (e.start.row == this.end.row)this.folds.push(e), this.end.row = e.end.row, this.end.column = e.end.column; else {
                if (e.end.row != this.start.row)throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
                this.folds.unshift(e), this.start.row = e.start.row, this.start.column = e.start.column
            }
            e.foldLine = this
        }, this.containsRow = function (e) {
            return e >= this.start.row && e <= this.end.row
        }, this.walk = function (e, t, n) {
            var r = 0, i = this.folds, s, o, u, a = !0;
            t == null && (t = this.end.row, n = this.end.column);
            for (var f = 0; f < i.length; f++) {
                s = i[f], o = s.range.compareStart(t, n);
                if (o == -1) {
                    e(null, t, n, r, a);
                    return
                }
                u = e(null, s.start.row, s.start.column, r, a), u = !u && e(s.placeholder, s.start.row, s.start.column, r);
                if (u || o === 0)return;
                a = !s.sameRow, r = s.end.column
            }
            e(null, t, n, r, a)
        }, this.getNextFoldTo = function (e, t) {
            var n, r;
            for (var i = 0; i < this.folds.length; i++) {
                n = this.folds[i], r = n.range.compareEnd(e, t);
                if (r == -1)return {fold: n, kind: "after"};
                if (r === 0)return {fold: n, kind: "inside"}
            }
            return null
        }, this.addRemoveChars = function (e, t, n) {
            var r = this.getNextFoldTo(e, t), i, s;
            if (r) {
                i = r.fold;
                if (r.kind == "inside" && i.start.column != t && i.start.row != e)window.console && window.console.log(e, t, i); else if (i.start.row == e) {
                    s = this.folds;
                    var o = s.indexOf(i);
                    o === 0 && (this.start.column += n);
                    for (o; o < s.length; o++) {
                        i = s[o], i.start.column += n;
                        if (!i.sameRow)return;
                        i.end.column += n
                    }
                    this.end.column += n
                }
            }
        }, this.split = function (e, t) {
            var n = this.getNextFoldTo(e, t);
            if (!n || n.kind == "inside")return null;
            var r = n.fold, s = this.folds, o = this.foldData, u = s.indexOf(r), a = s[u - 1];
            this.end.row = a.end.row, this.end.column = a.end.column, s = s.splice(u, s.length - u);
            var f = new i(o, s);
            return o.splice(o.indexOf(this) + 1, 0, f), f
        }, this.merge = function (e) {
            var t = e.folds;
            for (var n = 0; n < t.length; n++)this.addFold(t[n]);
            var r = this.foldData;
            r.splice(r.indexOf(e), 1)
        }, this.toString = function () {
            var e = [this.range.toString() + ": ["];
            return this.folds.forEach(function (t) {
                e.push("  " + t.toString())
            }), e.push("]"), e.join("\n")
        }, this.idxToPosition = function (e) {
            var t = 0;
            for (var n = 0; n < this.folds.length; n++) {
                var r = this.folds[n];
                e -= r.start.column - t;
                if (e < 0)return {row: r.start.row, column: r.start.column + e};
                e -= r.placeholder.length;
                if (e < 0)return r.start;
                t = r.end.column
            }
            return {row: this.end.row, column: this.end.column + e}
        }
    }).call(i.prototype), t.FoldLine = i
}), define("ace/range_list", ["require", "exports", "module", "ace/range"], function (e, t, n) {
    "use strict";
    var r = e("./range").Range, i = r.comparePoints, s = function () {
        this.ranges = []
    };
    (function () {
        this.comparePoints = i, this.pointIndex = function (e, t, n) {
            var r = this.ranges;
            for (var s = n || 0; s < r.length; s++) {
                var o = r[s], u = i(e, o.end);
                if (u > 0)continue;
                var a = i(e, o.start);
                return u === 0 ? t && a !== 0 ? -s - 2 : s : a > 0 || a === 0 && !t ? s : -s - 1
            }
            return -s - 1
        }, this.add = function (e) {
            var t = !e.isEmpty(), n = this.pointIndex(e.start, t);
            n < 0 && (n = -n - 1);
            var r = this.pointIndex(e.end, t, n);
            return r < 0 ? r = -r - 1 : r++, this.ranges.splice(n, r - n, e)
        }, this.addList = function (e) {
            var t = [];
            for (var n = e.length; n--;)t.push.call(t, this.add(e[n]));
            return t
        }, this.substractPoint = function (e) {
            var t = this.pointIndex(e);
            if (t >= 0)return this.ranges.splice(t, 1)
        }, this.merge = function () {
            var e = [], t = this.ranges;
            t = t.sort(function (e, t) {
                return i(e.start, t.start)
            });
            var n = t[0], r;
            for (var s = 1; s < t.length; s++) {
                r = n, n = t[s];
                var o = i(r.end, n.start);
                if (o < 0)continue;
                if (o == 0 && !r.isEmpty() && !n.isEmpty())continue;
                i(r.end, n.end) < 0 && (r.end.row = n.end.row, r.end.column = n.end.column), t.splice(s, 1), e.push(n), n = r, s--
            }
            return this.ranges = t, e
        }, this.contains = function (e, t) {
            return this.pointIndex({row: e, column: t}) >= 0
        }, this.containsPoint = function (e) {
            return this.pointIndex(e) >= 0
        }, this.rangeAtPoint = function (e) {
            var t = this.pointIndex(e);
            if (t >= 0)return this.ranges[t]
        }, this.clipRows = function (e, t) {
            var n = this.ranges;
            if (n[0].start.row > t || n[n.length - 1].start.row < e)return [];
            var r = this.pointIndex({row: e, column: 0});
            r < 0 && (r = -r - 1);
            var i = this.pointIndex({row: t, column: 0}, r);
            i < 0 && (i = -i - 1);
            var s = [];
            for (var o = r; o < i; o++)s.push(n[o]);
            return s
        }, this.removeAll = function () {
            return this.ranges.splice(0, this.ranges.length)
        }, this.attach = function (e) {
            this.session && this.detach(), this.session = e, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange)
        }, this.detach = function () {
            if (!this.session)return;
            this.session.removeListener("change", this.onChange), this.session = null
        }, this.$onChange = function (e) {
            var t = e.data.range;
            if (e.data.action[0] == "i")var n = t.start, r = t.end; else var r = t.start, n = t.end;
            var i = n.row, s = r.row, o = s - i, u = -n.column + r.column, a = this.ranges;
            for (var f = 0, l = a.length; f < l; f++) {
                var c = a[f];
                if (c.end.row < i)continue;
                if (c.start.row > i)break;
                c.start.row == i && c.start.column >= n.column && (c.start.column != n.column || !this.$insertRight) && (c.start.column += u, c.start.row += o);
                if (c.end.row == i && c.end.column >= n.column) {
                    if (c.end.column == n.column && this.$insertRight)continue;
                    c.end.column == n.column && u > 0 && f < l - 1 && c.end.column > c.start.column && c.end.column == a[f + 1].start.column && (c.end.column -= u), c.end.column += u, c.end.row += o
                }
            }
            if (o != 0 && f < l)for (; f < l; f++) {
                var c = a[f];
                c.start.row += o, c.end.row += o
            }
        }
    }).call(s.prototype), t.RangeList = s
}), define("ace/edit_session/fold", ["require", "exports", "module", "ace/range", "ace/range_list", "ace/lib/oop"], function (e, t, n) {
    "use strict";
    function u(e, t) {
        e.row -= t.row, e.row == 0 && (e.column -= t.column)
    }

    function a(e, t) {
        u(e.start, t), u(e.end, t)
    }

    function f(e, t) {
        e.row == 0 && (e.column += t.column), e.row += t.row
    }

    function l(e, t) {
        f(e.start, t), f(e.end, t)
    }

    var r = e("../range").Range, i = e("../range_list").RangeList, s = e("../lib/oop"), o = t.Fold = function (e, t) {
        this.foldLine = null, this.placeholder = t, this.range = e, this.start = e.start, this.end = e.end, this.sameRow = e.start.row == e.end.row, this.subFolds = this.ranges = []
    };
    s.inherits(o, i), function () {
        this.toString = function () {
            return '"' + this.placeholder + '" ' + this.range.toString()
        }, this.setFoldLine = function (e) {
            this.foldLine = e, this.subFolds.forEach(function (t) {
                t.setFoldLine(e)
            })
        }, this.clone = function () {
            var e = this.range.clone(), t = new o(e, this.placeholder);
            return this.subFolds.forEach(function (e) {
                t.subFolds.push(e.clone())
            }), t.collapseChildren = this.collapseChildren, t
        }, this.addSubFold = function (e) {
            if (this.range.isEqual(e))return;
            if (!this.range.containsRange(e))throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
            a(e, this.start);
            var t = e.start.row, n = e.start.column;
            for (var r = 0, i = -1; r < this.subFolds.length; r++) {
                i = this.subFolds[r].range.compare(t, n);
                if (i != 1)break
            }
            var s = this.subFolds[r];
            if (i == 0)return s.addSubFold(e);
            var t = e.range.end.row, n = e.range.end.column;
            for (var o = r, i = -1; o < this.subFolds.length; o++) {
                i = this.subFolds[o].range.compare(t, n);
                if (i != 1)break
            }
            var u = this.subFolds[o];
            if (i == 0)throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
            var f = this.subFolds.splice(r, o - r, e);
            return e.setFoldLine(this.foldLine), e
        }, this.restoreRange = function (e) {
            return l(e, this.start)
        }
    }.call(o.prototype)
}), define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], function (e, t, n) {
    "use strict";
    function u() {
        this.getFoldAt = function (e, t, n) {
            var r = this.getFoldLine(e);
            if (!r)return null;
            var i = r.folds;
            for (var s = 0; s < i.length; s++) {
                var o = i[s];
                if (o.range.contains(e, t)) {
                    if (n == 1 && o.range.isEnd(e, t))continue;
                    if (n == -1 && o.range.isStart(e, t))continue;
                    return o
                }
            }
        }, this.getFoldsInRange = function (e) {
            var t = e.start, n = e.end, r = this.$foldData, i = [];
            t.column += 1, n.column -= 1;
            for (var s = 0; s < r.length; s++) {
                var o = r[s].range.compareRange(e);
                if (o == 2)continue;
                if (o == -2)break;
                var u = r[s].folds;
                for (var a = 0; a < u.length; a++) {
                    var f = u[a];
                    o = f.range.compareRange(e);
                    if (o == -2)break;
                    if (o == 2)continue;
                    if (o == 42)break;
                    i.push(f)
                }
            }
            return t.column -= 1, n.column += 1, i
        }, this.getFoldsInRangeList = function (e) {
            if (Array.isArray(e)) {
                var t = [];
                e.forEach(function (e) {
                    t = t.concat(this.getFoldsInRange(e))
                }, this)
            } else var t = this.getFoldsInRange(e);
            return t
        }, this.getAllFolds = function () {
            var e = [], t = this.$foldData;
            for (var n = 0; n < t.length; n++)for (var r = 0; r < t[n].folds.length; r++)e.push(t[n].folds[r]);
            return e
        }, this.getFoldStringAt = function (e, t, n, r) {
            r = r || this.getFoldLine(e);
            if (!r)return null;
            var i = {end: {column: 0}}, s, o;
            for (var u = 0; u < r.folds.length; u++) {
                o = r.folds[u];
                var a = o.range.compareEnd(e, t);
                if (a == -1) {
                    s = this.getLine(o.start.row).substring(i.end.column, o.start.column);
                    break
                }
                if (a === 0)return null;
                i = o
            }
            return s || (s = this.getLine(o.start.row).substring(i.end.column)), n == -1 ? s.substring(0, t - i.end.column) : n == 1 ? s.substring(t - i.end.column) : s
        }, this.getFoldLine = function (e, t) {
            var n = this.$foldData, r = 0;
            t && (r = n.indexOf(t)), r == -1 && (r = 0);
            for (r; r < n.length; r++) {
                var i = n[r];
                if (i.start.row <= e && i.end.row >= e)return i;
                if (i.end.row > e)return null
            }
            return null
        }, this.getNextFoldLine = function (e, t) {
            var n = this.$foldData, r = 0;
            t && (r = n.indexOf(t)), r == -1 && (r = 0);
            for (r; r < n.length; r++) {
                var i = n[r];
                if (i.end.row >= e)return i
            }
            return null
        }, this.getFoldedRowCount = function (e, t) {
            var n = this.$foldData, r = t - e + 1;
            for (var i = 0; i < n.length; i++) {
                var s = n[i], o = s.end.row, u = s.start.row;
                if (o >= t) {
                    u < t && (u >= e ? r -= t - u : r = 0);
                    break
                }
                o >= e && (u >= e ? r -= o - u : r -= o - e + 1)
            }
            return r
        }, this.$addFoldLine = function (e) {
            return this.$foldData.push(e), this.$foldData.sort(function (e, t) {
                return e.start.row - t.start.row
            }), e
        }, this.addFold = function (e, t) {
            var n = this.$foldData, r = !1, o;
            e instanceof s ? o = e : (o = new s(t, e), o.collapseChildren = t.collapseChildren), this.$clipRangeToDocument(o.range);
            var u = o.start.row, a = o.start.column, f = o.end.row, l = o.end.column;
            if (u < f || u == f && a <= l - 2) {
                var c = this.getFoldAt(u, a, 1), h = this.getFoldAt(f, l, -1);
                if (c && h == c)return c.addSubFold(o);
                if (c && !c.range.isStart(u, a) || h && !h.range.isEnd(f, l))throw new Error("A fold can't intersect already existing fold" + o.range + c.range);
                var p = this.getFoldsInRange(o.range);
                p.length > 0 && (this.removeFolds(p), p.forEach(function (e) {
                    o.addSubFold(e)
                }));
                for (var d = 0; d < n.length; d++) {
                    var v = n[d];
                    if (f == v.start.row) {
                        v.addFold(o), r = !0;
                        break
                    }
                    if (u == v.end.row) {
                        v.addFold(o), r = !0;
                        if (!o.sameRow) {
                            var m = n[d + 1];
                            if (m && m.start.row == f) {
                                v.merge(m);
                                break
                            }
                        }
                        break
                    }
                    if (f <= v.start.row)break
                }
                return r || (v = this.$addFoldLine(new i(this.$foldData, o))), this.$useWrapMode ? this.$updateWrapData(v.start.row, v.start.row) : this.$updateRowLengthCache(v.start.row, v.start.row), this.$modified = !0, this._emit("changeFold", {
                    data: o,
                    action: "add"
                }), o
            }
            throw new Error("The range has to be at least 2 characters width")
        }, this.addFolds = function (e) {
            e.forEach(function (e) {
                this.addFold(e)
            }, this)
        }, this.removeFold = function (e) {
            var t = e.foldLine, n = t.start.row, r = t.end.row, i = this.$foldData, s = t.folds;
            if (s.length == 1)i.splice(i.indexOf(t), 1); else if (t.range.isEnd(e.end.row, e.end.column))s.pop(), t.end.row = s[s.length - 1].end.row, t.end.column = s[s.length - 1].end.column; else if (t.range.isStart(e.start.row, e.start.column))s.shift(), t.start.row = s[0].start.row, t.start.column = s[0].start.column; else if (e.sameRow)s.splice(s.indexOf(e), 1); else {
                var o = t.split(e.start.row, e.start.column);
                s = o.folds, s.shift(), o.start.row = s[0].start.row, o.start.column = s[0].start.column
            }
            this.$updating || (this.$useWrapMode ? this.$updateWrapData(n, r) : this.$updateRowLengthCache(n, r)), this.$modified = !0, this._emit("changeFold", {
                data: e,
                action: "remove"
            })
        }, this.removeFolds = function (e) {
            var t = [];
            for (var n = 0; n < e.length; n++)t.push(e[n]);
            t.forEach(function (e) {
                this.removeFold(e)
            }, this), this.$modified = !0
        }, this.expandFold = function (e) {
            this.removeFold(e), e.subFolds.forEach(function (t) {
                e.restoreRange(t), this.addFold(t)
            }, this), e.collapseChildren > 0 && this.foldAll(e.start.row + 1, e.end.row, e.collapseChildren - 1), e.subFolds = []
        }, this.expandFolds = function (e) {
            e.forEach(function (e) {
                this.expandFold(e)
            }, this)
        }, this.unfold = function (e, t) {
            var n, i;
            e == null ? (n = new r(0, 0, this.getLength(), 0), t = !0) : typeof e == "number" ? n = new r(e, 0, e, this.getLine(e).length) : "row"in e ? n = r.fromPoints(e, e) : n = e, i = this.getFoldsInRangeList(n);
            if (t)this.removeFolds(i); else {
                var s = i;
                while (s.length)this.expandFolds(s), s = this.getFoldsInRangeList(n)
            }
            if (i.length)return i
        }, this.isRowFolded = function (e, t) {
            return !!this.getFoldLine(e, t)
        }, this.getRowFoldEnd = function (e, t) {
            var n = this.getFoldLine(e, t);
            return n ? n.end.row : e
        }, this.getRowFoldStart = function (e, t) {
            var n = this.getFoldLine(e, t);
            return n ? n.start.row : e
        }, this.getFoldDisplayLine = function (e, t, n, r, i) {
            r == null && (r = e.start.row), i == null && (i = 0), t == null && (t = e.end.row), n == null && (n = this.getLine(t).length);
            var s = this.doc, o = "";
            return e.walk(function (e, t, n, u) {
                if (t < r)return;
                if (t == r) {
                    if (n < i)return;
                    u = Math.max(i, u)
                }
                e != null ? o += e : o += s.getLine(t).substring(u, n)
            }, t, n), o
        }, this.getDisplayLine = function (e, t, n, r) {
            var i = this.getFoldLine(e);
            if (!i) {
                var s;
                return s = this.doc.getLine(e), s.substring(r || 0, t || s.length)
            }
            return this.getFoldDisplayLine(i, e, t, n, r)
        }, this.$cloneFoldData = function () {
            var e = [];
            return e = this.$foldData.map(function (t) {
                var n = t.folds.map(function (e) {
                    return e.clone()
                });
                return new i(e, n)
            }), e
        }, this.toggleFold = function (e) {
            var t = this.selection, n = t.getRange(), r, i;
            if (n.isEmpty()) {
                var s = n.start;
                r = this.getFoldAt(s.row, s.column);
                if (r) {
                    this.expandFold(r);
                    return
                }
                (i = this.findMatchingBracket(s)) ? n.comparePoint(i) == 1 ? n.end = i : (n.start = i, n.start.column++, n.end.column--) : (i = this.findMatchingBracket({
                    row: s.row,
                    column: s.column + 1
                })) ? (n.comparePoint(i) == 1 ? n.end = i : n.start = i, n.start.column++) : n = this.getCommentFoldRange(s.row, s.column) || n
            } else {
                var o = this.getFoldsInRange(n);
                if (e && o.length) {
                    this.expandFolds(o);
                    return
                }
                o.length == 1 && (r = o[0])
            }
            r || (r = this.getFoldAt(n.start.row, n.start.column));
            if (r && r.range.toString() == n.toString()) {
                this.expandFold(r);
                return
            }
            var u = "...";
            if (!n.isMultiLine()) {
                u = this.getTextRange(n);
                if (u.length < 4)return;
                u = u.trim().substring(0, 2) + ".."
            }
            this.addFold(u, n)
        }, this.getCommentFoldRange = function (e, t, n) {
            var i = new o(this, e, t), s = i.getCurrentToken();
            if (s && /^comment|string/.test(s.type)) {
                var u = new r, a = new RegExp(s.type.replace(/\..*/, "\\."));
                if (n != 1) {
                    do s = i.stepBackward(); while (s && a.test(s.type));
                    i.stepForward()
                }
                u.start.row = i.getCurrentTokenRow(), u.start.column = i.getCurrentTokenColumn() + 2, i = new o(this, e, t);
                if (n != -1) {
                    do s = i.stepForward(); while (s && a.test(s.type));
                    s = i.stepBackward()
                } else s = i.getCurrentToken();
                return u.end.row = i.getCurrentTokenRow(), u.end.column = i.getCurrentTokenColumn() + s.value.length - 2, u
            }
        }, this.foldAll = function (e, t, n) {
            n == undefined && (n = 1e5);
            var r = this.foldWidgets;
            if (!r)return;
            t = t || this.getLength(), e = e || 0;
            for (var i = e; i < t; i++) {
                r[i] == null && (r[i] = this.getFoldWidget(i));
                if (r[i] != "start")continue;
                var s = this.getFoldWidgetRange(i);
                if (s && s.isMultiLine() && s.end.row <= t && s.start.row >= e) {
                    i = s.end.row;
                    try {
                        var o = this.addFold("...", s);
                        o && (o.collapseChildren = n)
                    } catch (u) {
                    }
                }
            }
        }, this.$foldStyles = {
            manual: 1,
            markbegin: 1,
            markbeginend: 1
        }, this.$foldStyle = "markbegin", this.setFoldStyle = function (e) {
            if (!this.$foldStyles[e])throw new Error("invalid fold style: " + e + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
            if (this.$foldStyle == e)return;
            this.$foldStyle = e, e == "manual" && this.unfold();
            var t = this.$foldMode;
            this.$setFolding(null), this.$setFolding(t)
        }, this.$setFolding = function (e) {
            if (this.$foldMode == e)return;
            this.$foldMode = e, this.removeListener("change", this.$updateFoldWidgets), this._emit("changeAnnotation");
            if (!e || this.$foldStyle == "manual") {
                this.foldWidgets = null;
                return
            }
            this.foldWidgets = [], this.getFoldWidget = e.getFoldWidget.bind(e, this, this.$foldStyle), this.getFoldWidgetRange = e.getFoldWidgetRange.bind(e, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets)
        }, this.getParentFoldRangeData = function (e, t) {
            var n = this.foldWidgets;
            if (!n || t && n[e])return {};
            var r = e - 1, i;
            while (r >= 0) {
                var s = n[r];
                s == null && (s = n[r] = this.getFoldWidget(r));
                if (s == "start") {
                    var o = this.getFoldWidgetRange(r);
                    i || (i = o);
                    if (o && o.end.row >= e)break
                }
                r--
            }
            return {range: r !== -1 && o, firstRange: i}
        }, this.onFoldWidgetClick = function (e, t) {
            t = t.domEvent;
            var n = {
                children: t.shiftKey,
                all: t.ctrlKey || t.metaKey,
                siblings: t.altKey
            }, r = this.$toggleFoldWidget(e, n);
            if (!r) {
                var i = t.target || t.srcElement;
                i && /ace_fold-widget/.test(i.className) && (i.className += " ace_invalid")
            }
        }, this.$toggleFoldWidget = function (e, t) {
            if (!this.getFoldWidget)return;
            var n = this.getFoldWidget(e), r = this.getLine(e), i = n === "end" ? -1 : 1, s = this.getFoldAt(e, i === -1 ? 0 : r.length, i);
            if (s) {
                t.children || t.all ? this.removeFold(s) : this.expandFold(s);
                return
            }
            var o = this.getFoldWidgetRange(e, !0);
            if (o && !o.isMultiLine()) {
                s = this.getFoldAt(o.start.row, o.start.column, 1);
                if (s && o.isEqual(s.range)) {
                    this.removeFold(s);
                    return
                }
            }
            if (t.siblings) {
                var u = this.getParentFoldRangeData(e);
                if (u.range)var a = u.range.start.row + 1, f = u.range.end.row;
                this.foldAll(a, f, t.all ? 1e4 : 0)
            } else t.children ? (f = o ? o.end.row : this.getLength(), this.foldAll(e + 1, o.end.row, t.all ? 1e4 : 0)) : o && (t.all && (o.collapseChildren = 1e4), this.addFold("...", o));
            return o
        }, this.toggleFoldWidget = function (e) {
            var t = this.selection.getCursor().row;
            t = this.getRowFoldStart(t);
            var n = this.$toggleFoldWidget(t, {});
            if (n)return;
            var r = this.getParentFoldRangeData(t, !0);
            n = r.range || r.firstRange;
            if (n) {
                t = n.start.row;
                var i = this.getFoldAt(t, this.getLine(t).length, 1);
                i ? this.removeFold(i) : this.addFold("...", n)
            }
        }, this.updateFoldWidgets = function (e) {
            var t = e.data, n = t.range, r = n.start.row, i = n.end.row - r;
            if (i === 0)this.foldWidgets[r] = null; else if (t.action == "removeText" || t.action == "removeLines")this.foldWidgets.splice(r, i + 1, null); else {
                var s = Array(i + 1);
                s.unshift(r, 1), this.foldWidgets.splice.apply(this.foldWidgets, s)
            }
        }
    }

    var r = e("../range").Range, i = e("./fold_line").FoldLine, s = e("./fold").Fold, o = e("../token_iterator").TokenIterator;
    t.Folding = u
}), define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function (e, t, n) {
    "use strict";
    function s() {
        this.findMatchingBracket = function (e, t) {
            if (e.column == 0)return null;
            var n = t || this.getLine(e.row).charAt(e.column - 1);
            if (n == "")return null;
            var r = n.match(/([\(\[\{])|([\)\]\}])/);
            return r ? r[1] ? this.$findClosingBracket(r[1], e) : this.$findOpeningBracket(r[2], e) : null
        }, this.getBracketRange = function (e) {
            var t = this.getLine(e.row), n = !0, r, s = t.charAt(e.column - 1), o = s && s.match(/([\(\[\{])|([\)\]\}])/);
            o || (s = t.charAt(e.column), e = {
                row: e.row,
                column: e.column + 1
            }, o = s && s.match(/([\(\[\{])|([\)\]\}])/), n = !1);
            if (!o)return null;
            if (o[1]) {
                var u = this.$findClosingBracket(o[1], e);
                if (!u)return null;
                r = i.fromPoints(e, u), n || (r.end.column++, r.start.column--), r.cursor = r.end
            } else {
                var u = this.$findOpeningBracket(o[2], e);
                if (!u)return null;
                r = i.fromPoints(u, e), n || (r.start.column++, r.end.column--), r.cursor = r.start
            }
            return r
        }, this.$brackets = {
            ")": "(",
            "(": ")",
            "]": "[",
            "[": "]",
            "{": "}",
            "}": "{"
        }, this.$findOpeningBracket = function (e, t, n) {
            var i = this.$brackets[e], s = 1, o = new r(this, t.row, t.column), u = o.getCurrentToken();
            u || (u = o.stepForward());
            if (!u)return;
            n || (n = new RegExp("(\\.?" + u.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end|start|begin)\b/, "") + ")+"));
            var a = t.column - o.getCurrentTokenColumn() - 2, f = u.value;
            for (; ;) {
                while (a >= 0) {
                    var l = f.charAt(a);
                    if (l == i) {
                        s -= 1;
                        if (s == 0)return {row: o.getCurrentTokenRow(), column: a + o.getCurrentTokenColumn()}
                    } else l == e && (s += 1);
                    a -= 1
                }
                do u = o.stepBackward(); while (u && !n.test(u.type));
                if (u == null)break;
                f = u.value, a = f.length - 1
            }
            return null
        }, this.$findClosingBracket = function (e, t, n) {
            var i = this.$brackets[e], s = 1, o = new r(this, t.row, t.column), u = o.getCurrentToken();
            u || (u = o.stepForward());
            if (!u)return;
            n || (n = new RegExp("(\\.?" + u.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:end|start|begin)\b/, "") + ")+"));
            var a = t.column - o.getCurrentTokenColumn();
            for (; ;) {
                var f = u.value, l = f.length;
                while (a < l) {
                    var c = f.charAt(a);
                    if (c == i) {
                        s -= 1;
                        if (s == 0)return {row: o.getCurrentTokenRow(), column: a + o.getCurrentTokenColumn()}
                    } else c == e && (s += 1);
                    a += 1
                }
                do u = o.stepForward(); while (u && !n.test(u.type));
                if (u == null)break;
                a = 0
            }
            return null
        }
    }

    var r = e("../token_iterator").TokenIterator, i = e("../range").Range;
    t.BracketMatch = s
}), define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"), i = e("./lib/lang"), s = e("./config"), o = e("./lib/event_emitter").EventEmitter, u = e("./selection").Selection, a = e("./mode/text").Mode, f = e("./range").Range, l = e("./document").Document, c = e("./background_tokenizer").BackgroundTokenizer, h = e("./search_highlight").SearchHighlight, p = function (e, t) {
        this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$foldData = [], this.$foldData.toString = function () {
            return this.join("\n")
        }, this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this);
        if (typeof e != "object" || !e.getLine)e = new l(e);
        this.setDocument(e), this.selection = new u(this), s.resetOptions(this), this.setMode(t), s._signal("session", this)
    };
    (function () {
        function m(e) {
            return e < 4352 ? !1 : e >= 4352 && e <= 4447 || e >= 4515 && e <= 4519 || e >= 4602 && e <= 4607 || e >= 9001 && e <= 9002 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12283 || e >= 12288 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12589 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12730 || e >= 12736 && e <= 12771 || e >= 12784 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 13054 || e >= 13056 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 55216 && e <= 55238 || e >= 55243 && e <= 55291 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510
        }

        r.implement(this, o), this.setDocument = function (e) {
            this.doc && this.doc.removeListener("change", this.$onChange), this.doc = e, e.on("change", this.$onChange), this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches()
        }, this.getDocument = function () {
            return this.doc
        }, this.$resetRowCache = function (e) {
            if (!e) {
                this.$docRowCache = [], this.$screenRowCache = [];
                return
            }
            var t = this.$docRowCache.length, n = this.$getRowCacheIndex(this.$docRowCache, e) + 1;
            t > n && (this.$docRowCache.splice(n, t), this.$screenRowCache.splice(n, t))
        }, this.$getRowCacheIndex = function (e, t) {
            var n = 0, r = e.length - 1;
            while (n <= r) {
                var i = n + r >> 1, s = e[i];
                if (t > s)n = i + 1; else {
                    if (!(t < s))return i;
                    r = i - 1
                }
            }
            return n - 1
        }, this.resetCaches = function () {
            this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.bgTokenizer && this.bgTokenizer.start(0)
        }, this.onChangeFold = function (e) {
            var t = e.data;
            this.$resetRowCache(t.start.row)
        }, this.onChange = function (e) {
            var t = e.data;
            this.$modified = !0, this.$resetRowCache(t.range.start.row);
            var n = this.$updateInternalDataOnChange(e);
            !this.$fromUndo && this.$undoManager && !t.ignore && (this.$deltasDoc.push(t), n && n.length != 0 && this.$deltasFold.push({
                action: "removeFolds",
                folds: n
            }), this.$informUndoManager.schedule()), this.bgTokenizer && this.bgTokenizer.$updateOnChange(t), this._signal("change", e)
        }, this.setValue = function (e) {
            this.doc.setValue(e), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.$deltas = [], this.$deltasDoc = [], this.$deltasFold = [], this.setUndoManager(this.$undoManager), this.getUndoManager().reset()
        }, this.getValue = this.toString = function () {
            return this.doc.getValue()
        }, this.getSelection = function () {
            return this.selection
        }, this.getState = function (e) {
            return this.bgTokenizer.getState(e)
        }, this.getTokens = function (e) {
            return this.bgTokenizer.getTokens(e)
        }, this.getTokenAt = function (e, t) {
            var n = this.bgTokenizer.getTokens(e), r, i = 0;
            if (t == null)s = n.length - 1, i = this.getLine(e).length; else for (var s = 0; s < n.length; s++) {
                i += n[s].value.length;
                if (i >= t)break
            }
            return r = n[s], r ? (r.index = s, r.start = i - r.value.length, r) : null
        }, this.setUndoManager = function (e) {
            this.$undoManager = e, this.$deltas = [], this.$deltasDoc = [], this.$deltasFold = [], this.$informUndoManager && this.$informUndoManager.cancel();
            if (e) {
                var t = this;
                this.$syncInformUndoManager = function () {
                    t.$informUndoManager.cancel(), t.$deltasFold.length && (t.$deltas.push({
                        group: "fold",
                        deltas: t.$deltasFold
                    }), t.$deltasFold = []), t.$deltasDoc.length && (t.$deltas.push({
                        group: "doc",
                        deltas: t.$deltasDoc
                    }), t.$deltasDoc = []), t.$deltas.length > 0 && e.execute({
                        action: "aceupdate",
                        args: [t.$deltas, t],
                        merge: t.mergeUndoDeltas
                    }), t.mergeUndoDeltas = !1, t.$deltas = []
                }, this.$informUndoManager = i.delayedCall(this.$syncInformUndoManager)
            }
        }, this.markUndoGroup = function () {
            this.$syncInformUndoManager && this.$syncInformUndoManager()
        }, this.$defaultUndoManager = {
            undo: function () {
            }, redo: function () {
            }, reset: function () {
            }
        }, this.getUndoManager = function () {
            return this.$undoManager || this.$defaultUndoManager
        }, this.getTabString = function () {
            return this.getUseSoftTabs() ? i.stringRepeat(" ", this.getTabSize()) : "	"
        }, this.setUseSoftTabs = function (e) {
            this.setOption("useSoftTabs", e)
        }, this.getUseSoftTabs = function () {
            return this.$useSoftTabs && !this.$mode.$indentWithTabs
        }, this.setTabSize = function (e) {
            this.setOption("tabSize", e)
        }, this.getTabSize = function () {
            return this.$tabSize
        }, this.isTabStop = function (e) {
            return this.$useSoftTabs && e.column % this.$tabSize === 0
        }, this.$overwrite = !1, this.setOverwrite = function (e) {
            this.setOption("overwrite", e)
        }, this.getOverwrite = function () {
            return this.$overwrite
        }, this.toggleOverwrite = function () {
            this.setOverwrite(!this.$overwrite)
        }, this.addGutterDecoration = function (e, t) {
            this.$decorations[e] || (this.$decorations[e] = ""), this.$decorations[e] += " " + t, this._signal("changeBreakpoint", {})
        }, this.removeGutterDecoration = function (e, t) {
            this.$decorations[e] = (this.$decorations[e] || "").replace(" " + t, ""), this._signal("changeBreakpoint", {})
        }, this.getBreakpoints = function () {
            return this.$breakpoints
        }, this.setBreakpoints = function (e) {
            this.$breakpoints = [];
            for (var t = 0; t < e.length; t++)this.$breakpoints[e[t]] = "ace_breakpoint";
            this._signal("changeBreakpoint", {})
        }, this.clearBreakpoints = function () {
            this.$breakpoints = [], this._signal("changeBreakpoint", {})
        }, this.setBreakpoint = function (e, t) {
            t === undefined && (t = "ace_breakpoint"), t ? this.$breakpoints[e] = t : delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
        }, this.clearBreakpoint = function (e) {
            delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
        }, this.addMarker = function (e, t, n, r) {
            var i = this.$markerId++, s = {
                range: e,
                type: n || "line",
                renderer: typeof n == "function" ? n : null,
                clazz: t,
                inFront: !!r,
                id: i
            };
            return r ? (this.$frontMarkers[i] = s, this._signal("changeFrontMarker")) : (this.$backMarkers[i] = s, this._signal("changeBackMarker")), i
        }, this.addDynamicMarker = function (e, t) {
            if (!e.update)return;
            var n = this.$markerId++;
            return e.id = n, e.inFront = !!t, t ? (this.$frontMarkers[n] = e, this._signal("changeFrontMarker")) : (this.$backMarkers[n] = e, this._signal("changeBackMarker")), e
        }, this.removeMarker = function (e) {
            var t = this.$frontMarkers[e] || this.$backMarkers[e];
            if (!t)return;
            var n = t.inFront ? this.$frontMarkers : this.$backMarkers;
            t && (delete n[e], this._signal(t.inFront ? "changeFrontMarker" : "changeBackMarker"))
        }, this.getMarkers = function (e) {
            return e ? this.$frontMarkers : this.$backMarkers
        }, this.highlight = function (e) {
            if (!this.$searchHighlight) {
                var t = new h(null, "ace_selected-word", "text");
                this.$searchHighlight = this.addDynamicMarker(t)
            }
            this.$searchHighlight.setRegexp(e)
        }, this.highlightLines = function (e, t, n, r) {
            typeof t != "number" && (n = t, t = e), n || (n = "ace_step");
            var i = new f(e, 0, t, Infinity);
            return i.id = this.addMarker(i, n, "fullLine", r), i
        }, this.setAnnotations = function (e) {
            this.$annotations = e, this._signal("changeAnnotation", {})
        }, this.getAnnotations = function () {
            return this.$annotations || []
        }, this.clearAnnotations = function () {
            this.setAnnotations([])
        }, this.$detectNewLine = function (e) {
            var t = e.match(/^.*?(\r?\n)/m);
            t ? this.$autoNewLine = t[1] : this.$autoNewLine = "\n"
        }, this.getWordRange = function (e, t) {
            var n = this.getLine(e), r = !1;
            t > 0 && (r = !!n.charAt(t - 1).match(this.tokenRe)), r || (r = !!n.charAt(t).match(this.tokenRe));
            if (r)var i = this.tokenRe; else if (/^\s+$/.test(n.slice(t - 1, t + 1)))var i = /\s/; else var i = this.nonTokenRe;
            var s = t;
            if (s > 0) {
                do s--; while (s >= 0 && n.charAt(s).match(i));
                s++
            }
            var o = t;
            while (o < n.length && n.charAt(o).match(i))o++;
            return new f(e, s, e, o)
        }, this.getAWordRange = function (e, t) {
            var n = this.getWordRange(e, t), r = this.getLine(n.end.row);
            while (r.charAt(n.end.column).match(/[ \t]/))n.end.column += 1;
            return n
        }, this.setNewLineMode = function (e) {
            this.doc.setNewLineMode(e)
        }, this.getNewLineMode = function () {
            return this.doc.getNewLineMode()
        }, this.setUseWorker = function (e) {
            this.setOption("useWorker", e)
        }, this.getUseWorker = function () {
            return this.$useWorker
        }, this.onReloadTokenizer = function (e) {
            var t = e.data;
            this.bgTokenizer.start(t.first), this._signal("tokenizerUpdate", e)
        }, this.$modes = {}, this.$mode = null, this.$modeId = null, this.setMode = function (e, t) {
            if (e && typeof e == "object") {
                if (e.getTokenizer)return this.$onChangeMode(e);
                var n = e, r = n.path
            } else r = e || "ace/mode/text";
            this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new a);
            if (this.$modes[r] && !n) {
                this.$onChangeMode(this.$modes[r]), t && t();
                return
            }
            this.$modeId = r, s.loadModule(["mode", r], function (e) {
                if (this.$modeId !== r)return t && t();
                if (this.$modes[r] && !n)return this.$onChangeMode(this.$modes[r]);
                e && e.Mode && (e = new e.Mode(n), n || (this.$modes[r] = e, e.$id = r), this.$onChangeMode(e), t && t())
            }.bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0)
        }, this.$onChangeMode = function (e, t) {
            t || (this.$modeId = e.$id);
            if (this.$mode === e)return;
            this.$mode = e, this.$stopWorker(), this.$useWorker && this.$startWorker();
            var n = e.getTokenizer();
            if (n.addEventListener !== undefined) {
                var r = this.onReloadTokenizer.bind(this);
                n.addEventListener("update", r)
            }
            if (!this.bgTokenizer) {
                this.bgTokenizer = new c(n);
                var i = this;
                this.bgTokenizer.addEventListener("update", function (e) {
                    i._signal("tokenizerUpdate", e)
                })
            } else this.bgTokenizer.setTokenizer(n);
            this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = e.tokenRe, this.nonTokenRe = e.nonTokenRe, t || (e.attachToSession && e.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(e.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode"))
        }, this.$stopWorker = function () {
            this.$worker && (this.$worker.terminate(), this.$worker = null)
        }, this.$startWorker = function () {
            try {
                this.$worker = this.$mode.createWorker(this)
            } catch (e) {
                typeof console == "object" && (console.log("Could not load worker"), console.log(e)), this.$worker = null
            }
        }, this.getMode = function () {
            return this.$mode
        }, this.$scrollTop = 0, this.setScrollTop = function (e) {
            if (this.$scrollTop === e || isNaN(e))return;
            this.$scrollTop = e, this._signal("changeScrollTop", e)
        }, this.getScrollTop = function () {
            return this.$scrollTop
        }, this.$scrollLeft = 0, this.setScrollLeft = function (e) {
            if (this.$scrollLeft === e || isNaN(e))return;
            this.$scrollLeft = e, this._signal("changeScrollLeft", e)
        }, this.getScrollLeft = function () {
            return this.$scrollLeft
        }, this.getScreenWidth = function () {
            return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth
        }, this.getLineWidgetMaxWidth = function () {
            if (this.lineWidgetsWidth != null)return this.lineWidgetsWidth;
            var e = 0;
            return this.lineWidgets.forEach(function (t) {
                t && t.screenWidth > e && (e = t.screenWidth)
            }), this.lineWidgetWidth = e
        }, this.$computeWidth = function (e) {
            if (this.$modified || e) {
                this.$modified = !1;
                if (this.$useWrapMode)return this.screenWidth = this.$wrapLimit;
                var t = this.doc.getAllLines(), n = this.$rowLengthCache, r = 0, i = 0, s = this.$foldData[i], o = s ? s.start.row : Infinity, u = t.length;
                for (var a = 0; a < u; a++) {
                    if (a > o) {
                        a = s.end.row + 1;
                        if (a >= u)break;
                        s = this.$foldData[i++], o = s ? s.start.row : Infinity
                    }
                    n[a] == null && (n[a] = this.$getStringScreenWidth(t[a])[0]), n[a] > r && (r = n[a])
                }
                this.screenWidth = r
            }
        }, this.getLine = function (e) {
            return this.doc.getLine(e)
        }, this.getLines = function (e, t) {
            return this.doc.getLines(e, t)
        }, this.getLength = function () {
            return this.doc.getLength()
        }, this.getTextRange = function (e) {
            return this.doc.getTextRange(e || this.selection.getRange())
        }, this.insert = function (e, t) {
            return this.doc.insert(e, t)
        }, this.remove = function (e) {
            return this.doc.remove(e)
        }, this.undoChanges = function (e, t) {
            if (!e.length)return;
            this.$fromUndo = !0;
            var n = null;
            for (var r = e.length - 1; r != -1; r--) {
                var i = e[r];
                i.group == "doc" ? (this.doc.revertDeltas(i.deltas), n = this.$getUndoSelection(i.deltas, !0, n)) : i.deltas.forEach(function (e) {
                    this.addFolds(e.folds)
                }, this)
            }
            return this.$fromUndo = !1, n && this.$undoSelect && !t && this.selection.setSelectionRange(n), n
        }, this.redoChanges = function (e, t) {
            if (!e.length)return;
            this.$fromUndo = !0;
            var n = null;
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.group == "doc" && (this.doc.applyDeltas(i.deltas), n = this.$getUndoSelection(i.deltas, !1, n))
            }
            return this.$fromUndo = !1, n && this.$undoSelect && !t && this.selection.setSelectionRange(n), n
        }, this.setUndoSelect = function (e) {
            this.$undoSelect = e
        }, this.$getUndoSelection = function (e, t, n) {
            function r(e) {
                var n = e.action === "insertText" || e.action === "insertLines";
                return t ? !n : n
            }

            var i = e[0], s, o, u = !1;
            r(i) ? (s = f.fromPoints(i.range.start, i.range.end), u = !0) : (s = f.fromPoints(i.range.start, i.range.start), u = !1);
            for (var a = 1; a < e.length; a++)i = e[a], r(i) ? (o = i.range.start, s.compare(o.row, o.column) == -1 && s.setStart(i.range.start), o = i.range.end, s.compare(o.row, o.column) == 1 && s.setEnd(i.range.end), u = !0) : (o = i.range.start, s.compare(o.row, o.column) == -1 && (s = f.fromPoints(i.range.start, i.range.start)), u = !1);
            if (n != null) {
                f.comparePoints(n.start, s.start) === 0 && (n.start.column += s.end.column - s.start.column, n.end.column += s.end.column - s.start.column);
                var l = n.compareRange(s);
                l == 1 ? s.setStart(n.start) : l == -1 && s.setEnd(n.end)
            }
            return s
        }, this.replace = function (e, t) {
            return this.doc.replace(e, t)
        }, this.moveText = function (e, t, n) {
            var r = this.getTextRange(e), i = this.getFoldsInRange(e), s = f.fromPoints(t, t);
            if (!n) {
                this.remove(e);
                var o = e.start.row - e.end.row, u = o ? -e.end.column : e.start.column - e.end.column;
                u && (s.start.row == e.end.row && s.start.column > e.end.column && (s.start.column += u), s.end.row == e.end.row && s.end.column > e.end.column && (s.end.column += u)), o && s.start.row >= e.end.row && (s.start.row += o, s.end.row += o)
            }
            s.end = this.insert(s.start, r);
            if (i.length) {
                var a = e.start, l = s.start, o = l.row - a.row, u = l.column - a.column;
                this.addFolds(i.map(function (e) {
                    return e = e.clone(), e.start.row == a.row && (e.start.column += u), e.end.row == a.row && (e.end.column += u), e.start.row += o, e.end.row += o, e
                }))
            }
            return s
        }, this.indentRows = function (e, t, n) {
            n = n.replace(/\t/g, this.getTabString());
            for (var r = e; r <= t; r++)this.insert({row: r, column: 0}, n)
        }, this.outdentRows = function (e) {
            var t = e.collapseRows(), n = new f(0, 0, 0, 0), r = this.getTabSize();
            for (var i = t.start.row; i <= t.end.row; ++i) {
                var s = this.getLine(i);
                n.start.row = i, n.end.row = i;
                for (var o = 0; o < r; ++o)if (s.charAt(o) != " ")break;
                o < r && s.charAt(o) == "	" ? (n.start.column = o, n.end.column = o + 1) : (n.start.column = 0, n.end.column = o), this.remove(n)
            }
        }, this.$moveLines = function (e, t, n) {
            e = this.getRowFoldStart(e), t = this.getRowFoldEnd(t);
            if (n < 0) {
                var r = this.getRowFoldStart(e + n);
                if (r < 0)return 0;
                var i = r - e
            } else if (n > 0) {
                var r = this.getRowFoldEnd(t + n);
                if (r > this.doc.getLength() - 1)return 0;
                var i = r - t
            } else {
                e = this.$clipRowToDocument(e), t = this.$clipRowToDocument(t);
                var i = t - e + 1
            }
            var s = new f(e, 0, t, Number.MAX_VALUE), o = this.getFoldsInRange(s).map(function (e) {
                return e = e.clone(), e.start.row += i, e.end.row += i, e
            }), u = n == 0 ? this.doc.getLines(e, t) : this.doc.removeLines(e, t);
            return this.doc.insertLines(e + i, u), o.length && this.addFolds(o), i
        }, this.moveLinesUp = function (e, t) {
            return this.$moveLines(e, t, -1)
        }, this.moveLinesDown = function (e, t) {
            return this.$moveLines(e, t, 1)
        }, this.duplicateLines = function (e, t) {
            return this.$moveLines(e, t, 0)
        }, this.$clipRowToDocument = function (e) {
            return Math.max(0, Math.min(e, this.doc.getLength() - 1))
        }, this.$clipColumnToRow = function (e, t) {
            return t < 0 ? 0 : Math.min(this.doc.getLine(e).length, t)
        }, this.$clipPositionToDocument = function (e, t) {
            t = Math.max(0, t);
            if (e < 0)e = 0, t = 0; else {
                var n = this.doc.getLength();
                e >= n ? (e = n - 1, t = this.doc.getLine(n - 1).length) : t = Math.min(this.doc.getLine(e).length, t)
            }
            return {row: e, column: t}
        }, this.$clipRangeToDocument = function (e) {
            e.start.row < 0 ? (e.start.row = 0, e.start.column = 0) : e.start.column = this.$clipColumnToRow(e.start.row, e.start.column);
            var t = this.doc.getLength() - 1;
            return e.end.row > t ? (e.end.row = t, e.end.column = this.doc.getLine(t).length) : e.end.column = this.$clipColumnToRow(e.end.row, e.end.column), e
        }, this.$wrapLimit = 80, this.$useWrapMode = !1, this.$wrapLimitRange = {
            min: null,
            max: null
        }, this.setUseWrapMode = function (e) {
            if (e != this.$useWrapMode) {
                this.$useWrapMode = e, this.$modified = !0, this.$resetRowCache(0);
                if (e) {
                    var t = this.getLength();
                    this.$wrapData = Array(t), this.$updateWrapData(0, t - 1)
                }
                this._signal("changeWrapMode")
            }
        }, this.getUseWrapMode = function () {
            return this.$useWrapMode
        }, this.setWrapLimitRange = function (e, t) {
            if (this.$wrapLimitRange.min !== e || this.$wrapLimitRange.max !== t)this.$wrapLimitRange = {
                min: e,
                max: t
            }, this.$modified = !0, this._signal("changeWrapMode")
        }, this.adjustWrapLimit = function (e, t) {
            var n = this.$wrapLimitRange;
            n.max < 0 && (n = {min: t, max: t});
            var r = this.$constrainWrapLimit(e, n.min, n.max);
            return r != this.$wrapLimit && r > 1 ? (this.$wrapLimit = r, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0) : !1
        }, this.$constrainWrapLimit = function (e, t, n) {
            return t && (e = Math.max(t, e)), n && (e = Math.min(n, e)), e
        }, this.getWrapLimit = function () {
            return this.$wrapLimit
        }, this.setWrapLimit = function (e) {
            this.setWrapLimitRange(e, e)
        },this.getWrapLimitRange = function () {
            return {min: this.$wrapLimitRange.min, max: this.$wrapLimitRange.max}
        },this.$updateInternalDataOnChange = function (e) {
            var t = this.$useWrapMode, n, r = e.data.action, i = e.data.range.start.row, s = e.data.range.end.row, o = e.data.range.start, u = e.data.range.end, a = null;
            r.indexOf("Lines") != -1 ? (r == "insertLines" ? s = i + e.data.lines.length : s = i, n = e.data.lines ? e.data.lines.length : s - i) : n = s - i, this.$updating = !0;
            if (n != 0)if (r.indexOf("remove") != -1) {
                this[t ? "$wrapData" : "$rowLengthCache"].splice(i, n);
                var f = this.$foldData;
                a = this.getFoldsInRange(e.data.range), this.removeFolds(a);
                var l = this.getFoldLine(u.row), c = 0;
                if (l) {
                    l.addRemoveChars(u.row, u.column, o.column - u.column), l.shiftRow(-n);
                    var h = this.getFoldLine(i);
                    h && h !== l && (h.merge(l), l = h), c = f.indexOf(l) + 1
                }
                for (c; c < f.length; c++) {
                    var l = f[c];
                    l.start.row >= u.row && l.shiftRow(-n)
                }
                s = i
            } else {
                var p = Array(n);
                p.unshift(i, 0);
                var d = t ? this.$wrapData : this.$rowLengthCache;
                d.splice.apply(d, p);
                var f = this.$foldData, l = this.getFoldLine(i), c = 0;
                if (l) {
                    var v = l.range.compareInside(o.row, o.column);
                    v == 0 ? (l = l.split(o.row, o.column), l && (l.shiftRow(n), l.addRemoveChars(s, 0, u.column - o.column))) : v == -1 && (l.addRemoveChars(i, 0, u.column - o.column), l.shiftRow(n)), c = f.indexOf(l) + 1
                }
                for (c; c < f.length; c++) {
                    var l = f[c];
                    l.start.row >= i && l.shiftRow(n)
                }
            } else {
                n = Math.abs(e.data.range.start.column - e.data.range.end.column), r.indexOf("remove") != -1 && (a = this.getFoldsInRange(e.data.range), this.removeFolds(a), n = -n);
                var l = this.getFoldLine(i);
                l && l.addRemoveChars(i, o.column, n)
            }
            return t && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, t ? this.$updateWrapData(i, s) : this.$updateRowLengthCache(i, s), a
        },this.$updateRowLengthCache = function (e, t, n) {
            this.$rowLengthCache[e] = null, this.$rowLengthCache[t] = null
        },this.$updateWrapData = function (e, t) {
            var r = this.doc.getAllLines(), i = this.getTabSize(), s = this.$wrapData, o = this.$wrapLimit, a, f, l = e;
            t = Math.min(t, r.length - 1);
            while (l <= t)f = this.getFoldLine(l, f), f ? (a = [], f.walk(function (e, t, i, s) {
                var o;
                if (e != null) {
                    o = this.$getDisplayTokens(e, a.length), o[0] = n;
                    for (var f = 1; f < o.length; f++)o[f] = u
                } else o = this.$getDisplayTokens(r[t].substring(s, i), a.length);
                a = a.concat(o)
            }.bind(this), f.end.row, r[f.end.row].length + 1), s[f.start.row] = this.$computeWrapSplits(a, o, i), l = f.end.row + 1) : (a = this.$getDisplayTokens(r[l]), s[l] = this.$computeWrapSplits(a, o, i), l++)
        };
        var e = 1, t = 2, n = 3, u = 4, l = 9, p = 10, d = 11, v = 12;
        this.$computeWrapSplits = function (e, r) {
            function c(t) {
                var n = e.slice(o, t), r = n.length;
                n.join("").replace(/12/g, function () {
                    r -= 1
                }).replace(/2/g, function () {
                    r -= 1
                }), a += r, i.push(a), o = t
            }

            if (e.length == 0)return [];
            var i = [], s = e.length, o = 0, a = 0, f = this.$wrapAsCode;
            while (s - o > r) {
                var h = o + r;
                if (e[h - 1] >= p && e[h] >= p) {
                    c(h);
                    continue
                }
                if (e[h] == n || e[h] == u) {
                    for (h; h != o - 1; h--)if (e[h] == n)break;
                    if (h > o) {
                        c(h);
                        continue
                    }
                    h = o + r;
                    for (h; h < e.length; h++)if (e[h] != u)break;
                    if (h == e.length)break;
                    c(h);
                    continue
                }
                var d = Math.max(h - (f ? 10 : r - (r >> 2)), o - 1);
                while (h > d && e[h] < n)h--;
                if (f) {
                    while (h > d && e[h] < n)h--;
                    while (h > d && e[h] == l)h--
                } else while (h > d && e[h] < p)h--;
                if (h > d) {
                    c(++h);
                    continue
                }
                h = o + r, e[h] == t && h--, c(h)
            }
            return i
        }, this.$getDisplayTokens = function (n, r) {
            var i = [], s;
            r = r || 0;
            for (var o = 0; o < n.length; o++) {
                var u = n.charCodeAt(o);
                if (u == 9) {
                    s = this.getScreenTabSize(i.length + r), i.push(d);
                    for (var a = 1; a < s; a++)i.push(v)
                } else u == 32 ? i.push(p) : u > 39 && u < 48 || u > 57 && u < 64 ? i.push(l) : u >= 4352 && m(u) ? i.push(e, t) : i.push(e)
            }
            return i
        }, this.$getStringScreenWidth = function (e, t, n) {
            if (t == 0)return [0, 0];
            t == null && (t = Infinity), n = n || 0;
            var r, i;
            for (i = 0; i < e.length; i++) {
                r = e.charCodeAt(i), r == 9 ? n += this.getScreenTabSize(n) : r >= 4352 && m(r) ? n += 2 : n += 1;
                if (n > t)break
            }
            return [n, i]
        }, this.lineWidgets = null, this.getRowLength = function (e) {
            if (this.lineWidgets)var t = this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0; else t = 0;
            return !this.$useWrapMode || !this.$wrapData[e] ? 1 + t : this.$wrapData[e].length + 1 + t
        }, this.getRowLineCount = function (e) {
            return !this.$useWrapMode || !this.$wrapData[e] ? 1 : this.$wrapData[e].length + 1
        }, this.getScreenLastRowColumn = function (e) {
            var t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
            return this.documentToScreenColumn(t.row, t.column)
        }, this.getDocumentLastRowColumn = function (e, t) {
            var n = this.documentToScreenRow(e, t);
            return this.getScreenLastRowColumn(n)
        }, this.getDocumentLastRowColumnPosition = function (e, t) {
            var n = this.documentToScreenRow(e, t);
            return this.screenToDocumentPosition(n, Number.MAX_VALUE / 10)
        }, this.getRowSplitData = function (e) {
            return this.$useWrapMode ? this.$wrapData[e] : undefined
        }, this.getScreenTabSize = function (e) {
            return this.$tabSize - e % this.$tabSize
        }, this.screenToDocumentRow = function (e, t) {
            return this.screenToDocumentPosition(e, t).row
        }, this.screenToDocumentColumn = function (e, t) {
            return this.screenToDocumentPosition(e, t).column
        }, this.screenToDocumentPosition = function (e, t) {
            if (e < 0)return {row: 0, column: 0};
            var n, r = 0, i = 0, s, o = 0, u = 0, a = this.$screenRowCache, f = this.$getRowCacheIndex(a, e), l = a.length;
            if (l && f >= 0)var o = a[f], r = this.$docRowCache[f], c = e > a[l - 1]; else var c = !l;
            var h = this.getLength() - 1, p = this.getNextFoldLine(r), d = p ? p.start.row : Infinity;
            while (o <= e) {
                u = this.getRowLength(r);
                if (o + u > e || r >= h)break;
                o += u, r++, r > d && (r = p.end.row + 1, p = this.getNextFoldLine(r, p), d = p ? p.start.row : Infinity), c && (this.$docRowCache.push(r), this.$screenRowCache.push(o))
            }
            if (p && p.start.row <= r)n = this.getFoldDisplayLine(p), r = p.start.row; else {
                if (o + u <= e || r > h)return {row: h, column: this.getLine(h).length};
                n = this.getLine(r), p = null
            }
            if (this.$useWrapMode) {
                var v = this.$wrapData[r];
                if (v) {
                    var m = Math.floor(e - o);
                    s = v[m], m > 0 && v.length && (i = v[m - 1] || v[v.length - 1], n = n.substring(i))
                }
            }
            return i += this.$getStringScreenWidth(n, t)[1], this.$useWrapMode && i >= s && (i = s - 1), p ? p.idxToPosition(i) : {
                row: r,
                column: i
            }
        }, this.documentToScreenPosition = function (e, t) {
            if (typeof t == "undefined")var n = this.$clipPositionToDocument(e.row, e.column); else n = this.$clipPositionToDocument(e, t);
            e = n.row, t = n.column;
            var r = 0, i = null, s = null;
            s = this.getFoldAt(e, t, 1), s && (e = s.start.row, t = s.start.column);
            var o, u = 0, a = this.$docRowCache, f = this.$getRowCacheIndex(a, e), l = a.length;
            if (l && f >= 0)var u = a[f], r = this.$screenRowCache[f], c = e > a[l - 1]; else var c = !l;
            var h = this.getNextFoldLine(u), p = h ? h.start.row : Infinity;
            while (u < e) {
                if (u >= p) {
                    o = h.end.row + 1;
                    if (o > e)break;
                    h = this.getNextFoldLine(o, h), p = h ? h.start.row : Infinity
                } else o = u + 1;
                r += this.getRowLength(u), u = o, c && (this.$docRowCache.push(u), this.$screenRowCache.push(r))
            }
            var d = "";
            h && u >= p ? (d = this.getFoldDisplayLine(h, e, t), i = h.start.row) : (d = this.getLine(e).substring(0, t), i = e);
            if (this.$useWrapMode) {
                var v = this.$wrapData[i];
                if (v) {
                    var m = 0;
                    while (d.length >= v[m])r++, m++;
                    d = d.substring(v[m - 1] || 0, d.length)
                }
            }
            return {row: r, column: this.$getStringScreenWidth(d)[0]}
        }, this.documentToScreenColumn = function (e, t) {
            return this.documentToScreenPosition(e, t).column
        }, this.documentToScreenRow = function (e, t) {
            return this.documentToScreenPosition(e, t).row
        }, this.getScreenLength = function () {
            var e = 0, t = null;
            if (!this.$useWrapMode) {
                e = this.getLength();
                var n = this.$foldData;
                for (var r = 0; r < n.length; r++)t = n[r], e -= t.end.row - t.start.row
            } else {
                var i = this.$wrapData.length, s = 0, r = 0, t = this.$foldData[r++], o = t ? t.start.row : Infinity;
                while (s < i) {
                    var u = this.$wrapData[s];
                    e += u ? u.length + 1 : 1, s++, s > o && (s = t.end.row + 1, t = this.$foldData[r++], o = t ? t.start.row : Infinity)
                }
            }
            return this.lineWidgets && (e += this.$getWidgetScreenLength()), e
        }, this.$setFontMetrics = function (e) {
        }, this.destroy = function () {
            this.bgTokenizer && (this.bgTokenizer.setDocument(null), this.bgTokenizer = null), this.$stopWorker()
        }
    }).call(p.prototype), e("./edit_session/folding").Folding.call(p.prototype), e("./edit_session/bracket_match").BracketMatch.call(p.prototype), s.defineOptions(p.prototype, "session", {
        wrap: {
            set: function (e) {
                !e || e == "off" ? e = !1 : e == "free" ? e = !0 : e == "printMargin" ? e = -1 : typeof e == "string" && (e = parseInt(e, 10) || !1);
                if (this.$wrap == e)return;
                if (!e)this.setUseWrapMode(!1); else {
                    var t = typeof e == "number" ? e : null;
                    this.setWrapLimitRange(t, t), this.setUseWrapMode(!0)
                }
                this.$wrap = e
            }, get: function () {
                return this.getUseWrapMode() ? this.$wrap == -1 ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off"
            }, handlesSet: !0
        }, wrapMethod: {
            set: function (e) {
                e = e == "auto" ? this.$mode.type != "text" : e != "text", e != this.$wrapAsCode && (this.$wrapAsCode = e, this.$useWrapMode && (this.$modified = !0, this.$resetRowCache(0), this.$updateWrapData(0, this.getLength() - 1)))
            }, initialValue: "auto"
        }, firstLineNumber: {
            set: function () {
                this._signal("changeBreakpoint")
            }, initialValue: 1
        }, useWorker: {
            set: function (e) {
                this.$useWorker = e, this.$stopWorker(), e && this.$startWorker()
            }, initialValue: !0
        }, useSoftTabs: {initialValue: !0}, tabSize: {
            set: function (e) {
                if (isNaN(e) || this.$tabSize === e)return;
                this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = e, this._signal("changeTabSize")
            }, initialValue: 4, handlesSet: !0
        }, overwrite: {
            set: function (e) {
                this._signal("changeOverwrite")
            }, initialValue: !1
        }, newLineMode: {
            set: function (e) {
                this.doc.setNewLineMode(e)
            }, get: function () {
                return this.doc.getNewLineMode()
            }, handlesSet: !0
        }, mode: {
            set: function (e) {
                this.setMode(e)
            }, get: function () {
                return this.$modeId
            }
        }
    }), t.EditSession = p
}), define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function (e, t, n) {
    "use strict";
    var r = e("./lib/lang"), i = e("./lib/oop"), s = e("./range").Range, o = function () {
        this.$options = {}
    };
    (function () {
        this.set = function (e) {
            return i.mixin(this.$options, e), this
        }, this.getOptions = function () {
            return r.copyObject(this.$options)
        }, this.setOptions = function (e) {
            this.$options = e
        }, this.find = function (e) {
            var t = this.$matchIterator(e, this.$options);
            if (!t)return !1;
            var n = null;
            return t.forEach(function (e, t, r) {
                if (!e.start) {
                    var i = e.offset + (r || 0);
                    n = new s(t, i, t, i + e.length)
                } else n = e;
                return !0
            }), n
        }, this.findAll = function (e) {
            var t = this.$options;
            if (!t.needle)return [];
            this.$assembleRegExp(t);
            var n = t.range, i = n ? e.getLines(n.start.row, n.end.row) : e.doc.getAllLines(), o = [], u = t.re;
            if (t.$isMultiLine) {
                var a = u.length, f = i.length - a, l;
                e:for (var c = u.offset || 0; c <= f; c++) {
                    for (var h = 0; h < a; h++)if (i[c + h].search(u[h]) == -1)continue e;
                    var p = i[c], d = i[c + a - 1], v = p.length - p.match(u[0])[0].length, m = d.match(u[a - 1])[0].length;
                    if (l && l.end.row === c && l.end.column > v)continue;
                    o.push(l = new s(c, v, c + a - 1, m)), a > 2 && (c = c + a - 2)
                }
            } else for (var g = 0; g < i.length; g++) {
                var y = r.getMatchOffsets(i[g], u);
                for (var h = 0; h < y.length; h++) {
                    var b = y[h];
                    o.push(new s(g, b.offset, g, b.offset + b.length))
                }
            }
            if (n) {
                var w = n.start.column, E = n.start.column, g = 0, h = o.length - 1;
                while (g < h && o[g].start.column < w && o[g].start.row == n.start.row)g++;
                while (g < h && o[h].end.column > E && o[h].end.row == n.end.row)h--;
                o = o.slice(g, h + 1);
                for (g = 0, h = o.length; g < h; g++)o[g].start.row += n.start.row, o[g].end.row += n.start.row
            }
            return o
        }, this.replace = function (e, t) {
            var n = this.$options, r = this.$assembleRegExp(n);
            if (n.$isMultiLine)return t;
            if (!r)return;
            var i = r.exec(e);
            if (!i || i[0].length != e.length)return null;
            t = e.replace(r, t);
            if (n.preserveCase) {
                t = t.split("");
                for (var s = Math.min(e.length, e.length); s--;) {
                    var o = e[s];
                    o && o.toLowerCase() != o ? t[s] = t[s].toUpperCase() : t[s] = t[s].toLowerCase()
                }
                t = t.join("")
            }
            return t
        }, this.$matchIterator = function (e, t) {
            var n = this.$assembleRegExp(t);
            if (!n)return !1;
            var i = this, o, u = t.backwards;
            if (t.$isMultiLine)var a = n.length, f = function (t, r, i) {
                var u = t.search(n[0]);
                if (u == -1)return;
                for (var f = 1; f < a; f++) {
                    t = e.getLine(r + f);
                    if (t.search(n[f]) == -1)return
                }
                var l = t.match(n[a - 1])[0].length, c = new s(r, u, r + a - 1, l);
                n.offset == 1 ? (c.start.row--, c.start.column = Number.MAX_VALUE) : i && (c.start.column += i);
                if (o(c))return !0
            }; else if (u)var f = function (e, t, i) {
                var s = r.getMatchOffsets(e, n);
                for (var u = s.length - 1; u >= 0; u--)if (o(s[u], t, i))return !0
            }; else var f = function (e, t, i) {
                var s = r.getMatchOffsets(e, n);
                for (var u = 0; u < s.length; u++)if (o(s[u], t, i))return !0
            };
            return {
                forEach: function (n) {
                    o = n, i.$lineIterator(e, t).forEach(f)
                }
            }
        }, this.$assembleRegExp = function (e, t) {
            if (e.needle instanceof RegExp)return e.re = e.needle;
            var n = e.needle;
            if (!e.needle)return e.re = !1;
            e.regExp || (n = r.escapeRegExp(n)), e.wholeWord && (n = "\\b" + n + "\\b");
            var i = e.caseSensitive ? "g" : "gi";
            e.$isMultiLine = !t && /[\n\r]/.test(n);
            if (e.$isMultiLine)return e.re = this.$assembleMultilineRegExp(n, i);
            try {
                var s = new RegExp(n, i)
            } catch (o) {
                s = !1
            }
            return e.re = s
        }, this.$assembleMultilineRegExp = function (e, t) {
            var n = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), r = [];
            for (var i = 0; i < n.length; i++)try {
                r.push(new RegExp(n[i], t))
            } catch (s) {
                return !1
            }
            return n[0] == "" ? (r.shift(), r.offset = 1) : r.offset = 0, r
        }, this.$lineIterator = function (e, t) {
            var n = t.backwards == 1, r = t.skipCurrent != 0, i = t.range, s = t.start;
            s || (s = i ? i[n ? "end" : "start"] : e.selection.getRange()), s.start && (s = s[r != n ? "end" : "start"]);
            var o = i ? i.start.row : 0, u = i ? i.end.row : e.getLength() - 1, a = n ? function (n) {
                var r = s.row, i = e.getLine(r).substring(0, s.column);
                if (n(i, r))return;
                for (r--; r >= o; r--)if (n(e.getLine(r), r))return;
                if (t.wrap == 0)return;
                for (r = u, o = s.row; r >= o; r--)if (n(e.getLine(r), r))return
            } : function (n) {
                var r = s.row, i = e.getLine(r).substr(s.column);
                if (n(i, r, s.column))return;
                for (r += 1; r <= u; r++)if (n(e.getLine(r), r))return;
                if (t.wrap == 0)return;
                for (r = o, u = s.row; r <= u; r++)if (n(e.getLine(r), r))return
            };
            return {forEach: a}
        }
    }).call(o.prototype), t.Search = o
}), define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function (e, t, n) {
    "use strict";
    function s(e, t) {
        this.platform = t || (i.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {};
        if (this.__defineGetter__ && this.__defineSetter__ && typeof console != "undefined" && console.error) {
            var n = !1, r = function () {
                n || (n = !0, console.error("commmandKeyBinding has too many m's. use commandKeyBinding"))
            };
            this.__defineGetter__("commmandKeyBinding", function () {
                return r(), this.commandKeyBinding
            }), this.__defineSetter__("commmandKeyBinding", function (e) {
                return r(), this.commandKeyBinding = e
            })
        } else this.commmandKeyBinding = this.commandKeyBinding;
        this.addCommands(e)
    }

    var r = e("../lib/keys"), i = e("../lib/useragent");
    (function () {
        this.addCommand = function (e) {
            this.commands[e.name] && this.removeCommand(e), this.commands[e.name] = e, e.bindKey && this._buildKeyHash(e)
        }, this.removeCommand = function (e) {
            var t = typeof e == "string" ? e : e.name;
            e = this.commands[t], delete this.commands[t];
            var n = this.commandKeyBinding;
            for (var r in n)for (var i in n[r])n[r][i] == e && delete n[r][i]
        }, this.bindKey = function (e, t) {
            if (!e)return;
            if (typeof t == "function") {
                this.addCommand({exec: t, bindKey: e, name: t.name || e});
                return
            }
            var n = this.commandKeyBinding;
            e.split("|").forEach(function (e) {
                var r = this.parseKeys(e, t), i = r.hashId;
                (n[i] || (n[i] = {}))[r.key] = t
            }, this)
        }, this.addCommands = function (e) {
            e && Object.keys(e).forEach(function (t) {
                var n = e[t];
                if (!n)return;
                if (typeof n == "string")return this.bindKey(n, t);
                typeof n == "function" && (n = {exec: n});
                if (typeof n != "object")return;
                n.name || (n.name = t), this.addCommand(n)
            }, this)
        }, this.removeCommands = function (e) {
            Object.keys(e).forEach(function (t) {
                this.removeCommand(e[t])
            }, this)
        }, this.bindKeys = function (e) {
            Object.keys(e).forEach(function (t) {
                this.bindKey(t, e[t])
            }, this)
        }, this._buildKeyHash = function (e) {
            var t = e.bindKey;
            if (!t)return;
            var n = typeof t == "string" ? t : t[this.platform];
            this.bindKey(n, e)
        }, this.parseKeys = function (e) {
            e.indexOf(" ") != -1 && (e = e.split(/\s+/).pop());
            var t = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function (e) {
                return e
            }), n = t.pop(), i = r[n];
            if (r.FUNCTION_KEYS[i])n = r.FUNCTION_KEYS[i].toLowerCase(); else {
                if (!t.length)return {key: n, hashId: -1};
                if (t.length == 1 && t[0] == "shift")return {key: n.toUpperCase(), hashId: -1}
            }
            var s = 0;
            for (var o = t.length; o--;) {
                var u = r.KEY_MODS[t[o]];
                if (u == null)return typeof console != "undefined" && console.error("invalid modifier " + t[o] + " in " + e), !1;
                s |= u
            }
            return {key: n, hashId: s}
        }, this.findKeyCommand = function (t, n) {
            var r = this.commandKeyBinding;
            return r[t] && r[t][n]
        }, this.handleKeyboard = function (e, t, n, r) {
            return {command: this.findKeyCommand(t, n)}
        }
    }).call(s.prototype), t.HashHandler = s
}), define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var r = e("../lib/oop"), i = e("../keyboard/hash_handler").HashHandler, s = e("../lib/event_emitter").EventEmitter, o = function (e, t) {
        i.call(this, t, e), this.byName = this.commands, this.setDefaultHandler("exec", function (e) {
            return e.command.exec(e.editor, e.args || {})
        })
    };
    r.inherits(o, i), function () {
        r.implement(this, s), this.exec = function (e, t, n) {
            typeof e == "string" && (e = this.commands[e]);
            if (!e)return !1;
            if (t && t.$readOnly && !e.readOnly)return !1;
            var r = {editor: t, command: e, args: n}, i = this._emit("exec", r);
            return this._signal("afterExec", r), i === !1 ? !1 : !0
        }, this.toggleRecording = function (e) {
            if (this.$inReplay)return;
            return e && e._emit("changeStatus"), this.recording ? (this.macro.pop(), this.removeEventListener("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = function (e) {
                this.macro.push([e.command, e.args])
            }.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0)
        }, this.replay = function (e) {
            if (this.$inReplay || !this.macro)return;
            if (this.recording)return this.toggleRecording(e);
            try {
                this.$inReplay = !0, this.macro.forEach(function (t) {
                    typeof t == "string" ? this.exec(t, e) : this.exec(t[0], e, t[1])
                }, this)
            } finally {
                this.$inReplay = !1
            }
        }, this.trimMacro = function (e) {
            return e.map(function (e) {
                return typeof e[0] != "string" && (e[0] = e[0].name), e[1] || (e = e[0]), e
            })
        }
    }.call(o.prototype), t.CommandManager = o
}), define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function (e, t, n) {
    "use strict";
    function o(e, t) {
        return {win: e, mac: t}
    }

    var r = e("../lib/lang"), i = e("../config"), s = e("../range").Range;
    t.commands = [{
        name: "showSettingsMenu", bindKey: o("Ctrl-,", "Command-,"), exec: function (e) {
            i.loadModule("ace/ext/settings_menu", function (t) {
                t.init(e), e.showSettingsMenu()
            })
        }, readOnly: !0
    }, {
        name: "goToNextError", bindKey: o("Alt-E", "Ctrl-E"), exec: function (e) {
            i.loadModule("ace/ext/error_marker", function (t) {
                t.showErrorMarker(e, 1)
            })
        }, scrollIntoView: "animate", readOnly: !0
    }, {
        name: "goToPreviousError", bindKey: o("Alt-Shift-E", "Ctrl-Shift-E"), exec: function (e) {
            i.loadModule("ace/ext/error_marker", function (t) {
                t.showErrorMarker(e, -1)
            })
        }, scrollIntoView: "animate", readOnly: !0
    }, {
        name: "selectall", bindKey: o("Ctrl-A", "Command-A"), exec: function (e) {
            e.selectAll()
        }, readOnly: !0
    }, {
        name: "centerselection", bindKey: o(null, "Ctrl-L"), exec: function (e) {
            e.centerSelection()
        }, readOnly: !0
    }, {
        name: "gotoline", bindKey: o("Ctrl-L", "Command-L"), exec: function (e) {
            var t = parseInt(prompt("Enter line number:"), 10);
            isNaN(t) || e.gotoLine(t)
        }, readOnly: !0
    }, {
        name: "fold", bindKey: o("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"), exec: function (e) {
            e.session.toggleFold(!1)
        }, scrollIntoView: "center", readOnly: !0
    }, {
        name: "unfold",
        bindKey: o("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
        exec: function (e) {
            e.session.toggleFold(!0)
        },
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "toggleFoldWidget", bindKey: o("F2", "F2"), exec: function (e) {
            e.session.toggleFoldWidget()
        }, scrollIntoView: "center", readOnly: !0
    }, {
        name: "toggleParentFoldWidget", bindKey: o("Alt-F2", "Alt-F2"), exec: function (e) {
            e.session.toggleFoldWidget(!0)
        }, scrollIntoView: "center", readOnly: !0
    }, {
        name: "foldall", bindKey: o("Ctrl-Alt-0", "Ctrl-Command-Option-0"), exec: function (e) {
            e.session.foldAll()
        }, scrollIntoView: "center", readOnly: !0
    }, {
        name: "foldOther", bindKey: o("Alt-0", "Command-Option-0"), exec: function (e) {
            e.session.foldAll(), e.session.unfold(e.selection.getAllRanges())
        }, scrollIntoView: "center", readOnly: !0
    }, {
        name: "unfoldall", bindKey: o("Alt-Shift-0", "Command-Option-Shift-0"), exec: function (e) {
            e.session.unfold()
        }, scrollIntoView: "center", readOnly: !0
    }, {
        name: "findnext", bindKey: o("Ctrl-K", "Command-G"), exec: function (e) {
            e.findNext()
        }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
    }, {
        name: "findprevious", bindKey: o("Ctrl-Shift-K", "Command-Shift-G"), exec: function (e) {
            e.findPrevious()
        }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
    }, {
        name: "selectOrFindNext", bindKey: o("Alt-K", "Ctrl-G"), exec: function (e) {
            e.selection.isEmpty() ? e.selection.selectWord() : e.findNext()
        }, readOnly: !0
    }, {
        name: "selectOrFindPrevious", bindKey: o("Alt-Shift-K", "Ctrl-Shift-G"), exec: function (e) {
            e.selection.isEmpty() ? e.selection.selectWord() : e.findPrevious()
        }, readOnly: !0
    }, {
        name: "find", bindKey: o("Ctrl-F", "Command-F"), exec: function (e) {
            i.loadModule("ace/ext/searchbox", function (t) {
                t.Search(e)
            })
        }, readOnly: !0
    }, {
        name: "overwrite", bindKey: "Insert", exec: function (e) {
            e.toggleOverwrite()
        }, readOnly: !0
    }, {
        name: "selecttostart", bindKey: o("Ctrl-Shift-Home", "Command-Shift-Up"), exec: function (e) {
            e.getSelection().selectFileStart()
        }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump"
    }, {
        name: "gotostart", bindKey: o("Ctrl-Home", "Command-Home|Command-Up"), exec: function (e) {
            e.navigateFileStart()
        }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump"
    }, {
        name: "selectup", bindKey: o("Shift-Up", "Shift-Up"), exec: function (e) {
            e.getSelection().selectUp()
        }, multiSelectAction: "forEach", readOnly: !0
    }, {
        name: "golineup", bindKey: o("Up", "Up|Ctrl-P"), exec: function (e, t) {
            e.navigateUp(t.times)
        }, multiSelectAction: "forEach", readOnly: !0
    }, {
        name: "selecttoend", bindKey: o("Ctrl-Shift-End", "Command-Shift-Down"), exec: function (e) {
            e.getSelection().selectFileEnd()
        }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump"
    }, {
        name: "gotoend", bindKey: o("Ctrl-End", "Command-End|Command-Down"), exec: function (e) {
            e.navigateFileEnd()
        }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump"
    }, {
        name: "selectdown", bindKey: o("Shift-Down", "Shift-Down"), exec: function (e) {
            e.getSelection().selectDown()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "golinedown", bindKey: o("Down", "Down|Ctrl-N"), exec: function (e, t) {
            e.navigateDown(t.times)
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectwordleft", bindKey: o("Ctrl-Shift-Left", "Option-Shift-Left"), exec: function (e) {
            e.getSelection().selectWordLeft()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "gotowordleft", bindKey: o("Ctrl-Left", "Option-Left"), exec: function (e) {
            e.navigateWordLeft()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selecttolinestart", bindKey: o("Alt-Shift-Left", "Command-Shift-Left"), exec: function (e) {
            e.getSelection().selectLineStart()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "gotolinestart", bindKey: o("Alt-Left|Home", "Command-Left|Home|Ctrl-A"), exec: function (e) {
            e.navigateLineStart()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectleft", bindKey: o("Shift-Left", "Shift-Left"), exec: function (e) {
            e.getSelection().selectLeft()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "gotoleft", bindKey: o("Left", "Left|Ctrl-B"), exec: function (e, t) {
            e.navigateLeft(t.times)
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectwordright", bindKey: o("Ctrl-Shift-Right", "Option-Shift-Right"), exec: function (e) {
            e.getSelection().selectWordRight()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "gotowordright", bindKey: o("Ctrl-Right", "Option-Right"), exec: function (e) {
            e.navigateWordRight()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selecttolineend", bindKey: o("Alt-Shift-Right", "Command-Shift-Right"), exec: function (e) {
            e.getSelection().selectLineEnd()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "gotolineend", bindKey: o("Alt-Right|End", "Command-Right|End|Ctrl-E"), exec: function (e) {
            e.navigateLineEnd()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectright", bindKey: o("Shift-Right", "Shift-Right"), exec: function (e) {
            e.getSelection().selectRight()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "gotoright", bindKey: o("Right", "Right|Ctrl-F"), exec: function (e, t) {
            e.navigateRight(t.times)
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectpagedown", bindKey: "Shift-PageDown", exec: function (e) {
            e.selectPageDown()
        }, readOnly: !0
    }, {
        name: "pagedown", bindKey: o(null, "Option-PageDown"), exec: function (e) {
            e.scrollPageDown()
        }, readOnly: !0
    }, {
        name: "gotopagedown", bindKey: o("PageDown", "PageDown|Ctrl-V"), exec: function (e) {
            e.gotoPageDown()
        }, readOnly: !0
    }, {
        name: "selectpageup", bindKey: "Shift-PageUp", exec: function (e) {
            e.selectPageUp()
        }, readOnly: !0
    }, {
        name: "pageup", bindKey: o(null, "Option-PageUp"), exec: function (e) {
            e.scrollPageUp()
        }, readOnly: !0
    }, {
        name: "gotopageup", bindKey: "PageUp", exec: function (e) {
            e.gotoPageUp()
        }, readOnly: !0
    }, {
        name: "scrollup", bindKey: o("Ctrl-Up", null), exec: function (e) {
            e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight)
        }, readOnly: !0
    }, {
        name: "scrolldown", bindKey: o("Ctrl-Down", null), exec: function (e) {
            e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight)
        }, readOnly: !0
    }, {
        name: "selectlinestart", bindKey: "Shift-Home", exec: function (e) {
            e.getSelection().selectLineStart()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "selectlineend", bindKey: "Shift-End", exec: function (e) {
            e.getSelection().selectLineEnd()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "togglerecording", bindKey: o("Ctrl-Alt-E", "Command-Option-E"), exec: function (e) {
            e.commands.toggleRecording(e)
        }, readOnly: !0
    }, {
        name: "replaymacro", bindKey: o("Ctrl-Shift-E", "Command-Shift-E"), exec: function (e) {
            e.commands.replay(e)
        }, readOnly: !0
    }, {
        name: "jumptomatching", bindKey: o("Ctrl-P", "Ctrl-P"), exec: function (e) {
            e.jumpToMatching()
        }, multiSelectAction: "forEach", readOnly: !0
    }, {
        name: "selecttomatching", bindKey: o("Ctrl-Shift-P", "Ctrl-Shift-P"), exec: function (e) {
            e.jumpToMatching(!0)
        }, multiSelectAction: "forEach", readOnly: !0
    }, {
        name: "passKeysToBrowser", bindKey: o("null", "null"), exec: function () {
        }, passEvent: !0, readOnly: !0
    }, {
        name: "cut", exec: function (e) {
            var t = e.getSelectionRange();
            e._emit("cut", t), e.selection.isEmpty() || (e.session.remove(t), e.clearSelection())
        }, scrollIntoView: "cursor", multiSelectAction: "forEach"
    }, {
        name: "removeline", bindKey: o("Ctrl-D", "Command-D"), exec: function (e) {
            e.removeLines()
        }, scrollIntoView: "cursor", multiSelectAction: "forEachLine"
    }, {
        name: "duplicateSelection", bindKey: o("Ctrl-Shift-D", "Command-Shift-D"), exec: function (e) {
            e.duplicateSelection()
        }, scrollIntoView: "cursor", multiSelectAction: "forEach"
    }, {
        name: "sortlines", bindKey: o("Ctrl-Alt-S", "Command-Alt-S"), exec: function (e) {
            e.sortLines()
        }, scrollIntoView: "selection", multiSelectAction: "forEachLine"
    }, {
        name: "togglecomment", bindKey: o("Ctrl-/", "Command-/"), exec: function (e) {
            e.toggleCommentLines()
        }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart"
    }, {
        name: "toggleBlockComment", bindKey: o("Ctrl-Shift-/", "Command-Shift-/"), exec: function (e) {
            e.toggleBlockComment()
        }, multiSelectAction: "forEach", scrollIntoView: "selectionPart"
    }, {
        name: "modifyNumberUp", bindKey: o("Ctrl-Shift-Up", "Alt-Shift-Up"), exec: function (e) {
            e.modifyNumber(1)
        }, multiSelectAction: "forEach"
    }, {
        name: "modifyNumberDown", bindKey: o("Ctrl-Shift-Down", "Alt-Shift-Down"), exec: function (e) {
            e.modifyNumber(-1)
        }, multiSelectAction: "forEach"
    }, {
        name: "replace", bindKey: o("Ctrl-H", "Command-Option-F"), exec: function (e) {
            i.loadModule("ace/ext/searchbox", function (t) {
                t.Search(e, !0)
            })
        }
    }, {
        name: "undo", bindKey: o("Ctrl-Z", "Command-Z"), exec: function (e) {
            e.undo()
        }
    }, {
        name: "redo", bindKey: o("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"), exec: function (e) {
            e.redo()
        }
    }, {
        name: "copylinesup", bindKey: o("Alt-Shift-Up", "Command-Option-Up"), exec: function (e) {
            e.copyLinesUp()
        }, scrollIntoView: "cursor"
    }, {
        name: "movelinesup", bindKey: o("Alt-Up", "Option-Up"), exec: function (e) {
            e.moveLinesUp()
        }, scrollIntoView: "cursor"
    }, {
        name: "copylinesdown", bindKey: o("Alt-Shift-Down", "Command-Option-Down"), exec: function (e) {
            e.copyLinesDown()
        }, scrollIntoView: "cursor"
    }, {
        name: "movelinesdown", bindKey: o("Alt-Down", "Option-Down"), exec: function (e) {
            e.moveLinesDown()
        }, scrollIntoView: "cursor"
    }, {
        name: "del", bindKey: o("Delete", "Delete|Ctrl-D|Shift-Delete"), exec: function (e) {
            e.remove("right")
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "backspace",
        bindKey: o("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
        exec: function (e) {
            e.remove("left")
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "cut_or_delete", bindKey: o("Shift-Delete", null), exec: function (e) {
            if (!e.selection.isEmpty())return !1;
            e.remove("left")
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "removetolinestart", bindKey: o("Alt-Backspace", "Command-Backspace"), exec: function (e) {
            e.removeToLineStart()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "removetolineend", bindKey: o("Alt-Delete", "Ctrl-K"), exec: function (e) {
            e.removeToLineEnd()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "removewordleft", bindKey: o("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"), exec: function (e) {
            e.removeWordLeft()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "removewordright", bindKey: o("Ctrl-Delete", "Alt-Delete"), exec: function (e) {
            e.removeWordRight()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "outdent", bindKey: o("Shift-Tab", "Shift-Tab"), exec: function (e) {
            e.blockOutdent()
        }, multiSelectAction: "forEach", scrollIntoView: "selectionPart"
    }, {
        name: "indent", bindKey: o("Tab", "Tab"), exec: function (e) {
            e.indent()
        }, multiSelectAction: "forEach", scrollIntoView: "selectionPart"
    }, {
        name: "blockoutdent", bindKey: o("Ctrl-[", "Ctrl-["), exec: function (e) {
            e.blockOutdent()
        }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart"
    }, {
        name: "blockindent", bindKey: o("Ctrl-]", "Ctrl-]"), exec: function (e) {
            e.blockIndent()
        }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart"
    }, {
        name: "insertstring", exec: function (e, t) {
            e.insert(t)
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "inserttext", exec: function (e, t) {
            e.insert(r.stringRepeat(t.text || "", t.times || 1))
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "splitline", bindKey: o(null, "Ctrl-O"), exec: function (e) {
            e.splitLine()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "transposeletters", bindKey: o("Ctrl-T", "Ctrl-T"), exec: function (e) {
            e.transposeLetters()
        }, multiSelectAction: function (e) {
            e.transposeSelections(1)
        }, scrollIntoView: "cursor"
    }, {
        name: "touppercase", bindKey: o("Ctrl-U", "Ctrl-U"), exec: function (e) {
            e.toUpperCase()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "tolowercase", bindKey: o("Ctrl-Shift-U", "Ctrl-Shift-U"), exec: function (e) {
            e.toLowerCase()
        }, multiSelectAction: "forEach", scrollIntoView: "cursor"
    }, {
        name: "expandtoline", bindKey: o("Ctrl-Shift-L", "Command-Shift-L"), exec: function (e) {
            var t = e.selection.getRange();
            t.start.column = t.end.column = 0, t.end.row++, e.selection.setRange(t, !1)
        }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
    }, {
        name: "joinlines", bindKey: o(null, null), exec: function (e) {
            var t = e.selection.isBackwards(), n = t ? e.selection.getSelectionLead() : e.selection.getSelectionAnchor(), i = t ? e.selection.getSelectionAnchor() : e.selection.getSelectionLead(), o = e.session.doc.getLine(n.row).length, u = e.session.doc.getTextRange(e.selection.getRange()), a = u.replace(/\n\s*/, " ").length, f = e.session.doc.getLine(n.row);
            for (var l = n.row + 1; l <= i.row + 1; l++) {
                var c = r.stringTrimLeft(r.stringTrimRight(e.session.doc.getLine(l)));
                c.length !== 0 && (c = " " + c), f += c
            }
            i.row + 1 < e.session.doc.getLength() - 1 && (f += e.session.doc.getNewLineCharacter()), e.clearSelection(), e.session.doc.replace(new s(n.row, 0, i.row + 2, 0), f), a > 0 ? (e.selection.moveCursorTo(n.row, n.column), e.selection.selectTo(n.row, n.column + a)) : (o = e.session.doc.getLine(n.row).length > o ? o + 1 : o, e.selection.moveCursorTo(n.row, o))
        }, multiSelectAction: "forEach", readOnly: !0
    }, {
        name: "invertSelection", bindKey: o(null, null), exec: function (e) {
            var t = e.session.doc.getLength() - 1, n = e.session.doc.getLine(t).length, r = e.selection.rangeList.ranges, i = [];
            r.length < 1 && (r = [e.selection.getRange()]);
            for (var o = 0; o < r.length; o++)o == r.length - 1 && (r[o].end.row !== t || r[o].end.column !== n) && i.push(new s(r[o].end.row, r[o].end.column, t, n)), o === 0 ? (r[o].start.row !== 0 || r[o].start.column !== 0) && i.push(new s(0, 0, r[o].start.row, r[o].start.column)) : i.push(new s(r[o - 1].end.row, r[o - 1].end.column, r[o].start.row, r[o].start.column));
            e.exitMultiSelectMode(), e.clearSelection();
            for (var o = 0; o < i.length; o++)e.selection.addRange(i[o], !1)
        }, readOnly: !0, scrollIntoView: "none"
    }]
}), define("ace/editor", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator"], function (e, t, n) {
    "use strict";
    e("./lib/fixoldbrowsers");
    var r = e("./lib/oop"), i = e("./lib/dom"), s = e("./lib/lang"), o = e("./lib/useragent"), u = e("./keyboard/textinput").TextInput, a = e("./mouse/mouse_handler").MouseHandler, f = e("./mouse/fold_handler").FoldHandler, l = e("./keyboard/keybinding").KeyBinding, c = e("./edit_session").EditSession, h = e("./search").Search, p = e("./range").Range, d = e("./lib/event_emitter").EventEmitter, v = e("./commands/command_manager").CommandManager, m = e("./commands/default_commands").commands, g = e("./config"), y = e("./token_iterator").TokenIterator, b = function (e, t) {
        var n = e.getContainerElement();
        this.container = n, this.renderer = e, this.commands = new v(o.isMac ? "mac" : "win", m), this.textInput = new u(e.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.keyBinding = new l(this), this.$mouseHandler = new a(this), new f(this), this.$blockScrolling = 0, this.$search = (new h).set({wrap: !0}), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = s.delayedCall(function () {
            this._signal("input", {}), this.session && this.session.bgTokenizer && this.session.bgTokenizer.scheduleStart()
        }.bind(this)), this.on("change", function (e, t) {
            t._$emitInputEvent.schedule(31)
        }), this.setSession(t || new c("")), g.resetOptions(this), g._signal("editor", this)
    };
    (function () {
        r.implement(this, d), this.$initOperationListeners = function () {
            function e(e) {
                return e[e.length - 1]
            }

            this.selections = [], this.commands.on("exec", function (t) {
                this.startOperation(t);
                var n = t.command;
                if (n.aceCommandGroup == "fileJump") {
                    var r = this.prevOp;
                    if (!r || r.command.aceCommandGroup != "fileJump")this.lastFileJumpPos = e(this.selections)
                } else this.lastFileJumpPos = null
            }.bind(this), !0), this.commands.on("afterExec", function (e) {
                var t = e.command;
                t.aceCommandGroup == "fileJump" && this.lastFileJumpPos && !this.curOp.selectionChanged && this.selection.fromJSON(this.lastFileJumpPos), this.endOperation(e)
            }.bind(this), !0), this.$opResetTimer = s.delayedCall(this.endOperation.bind(this)), this.on("change", function () {
                this.curOp || this.startOperation(), this.curOp.docChanged = !0
            }.bind(this), !0), this.on("changeSelection", function () {
                this.curOp || this.startOperation(), this.curOp.selectionChanged = !0
            }.bind(this), !0)
        }, this.curOp = null, this.prevOp = {}, this.startOperation = function (e) {
            if (this.curOp) {
                if (!e || this.curOp.command)return;
                this.prevOp = this.curOp
            }
            e || (this.previousCommand = null, e = {}), this.$opResetTimer.schedule(), this.curOp = {
                command: e.command || {},
                args: e.args,
                scrollTop: this.renderer.scrollTop
            };
            var t = this.curOp.command;
            t && t.scrollIntoView && this.$blockScrolling++, this.selections.push(this.selection.toJSON())
        }, this.endOperation = function () {
            if (this.curOp) {
                var e = this.curOp.command;
                if (e && e.scrollIntoView) {
                    this.$blockScrolling--;
                    switch (e.scrollIntoView) {
                        case"center":
                            this.renderer.scrollCursorIntoView(null, .5);
                            break;
                        case"animate":
                        case"cursor":
                            this.renderer.scrollCursorIntoView();
                            break;
                        case"selectionPart":
                            var t = this.selection.getRange(), n = this.renderer.layerConfig;
                            (t.start.row >= n.lastRow || t.end.row <= n.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead);
                            break;
                        default:
                    }
                    e.scrollIntoView == "animate" && this.renderer.animateScrolling(this.curOp.scrollTop)
                }
                this.prevOp = this.curOp, this.curOp = null
            }
        }, this.$mergeableCommands = ["backspace", "del", "insertstring"], this.$historyTracker = function (e) {
            if (!this.$mergeUndoDeltas)return;
            var t = this.prevOp, n = this.$mergeableCommands, r = t.command && e.command.name == t.command.name;
            if (e.command.name == "insertstring") {
                var i = e.args;
                this.mergeNextCommand === undefined && (this.mergeNextCommand = !0), r = r && this.mergeNextCommand && (!/\s/.test(i) || /\s/.test(t.args)), this.mergeNextCommand = !0
            } else r = r && n.indexOf(e.command.name) !== -1;
            this.$mergeUndoDeltas != "always" && Date.now() - this.sequenceStartTime > 2e3 && (r = !1), r ? this.session.mergeUndoDeltas = !0 : n.indexOf(e.command.name) !== -1 && (this.sequenceStartTime = Date.now())
        }, this.setKeyboardHandler = function (e) {
            if (!e)this.keyBinding.setKeyboardHandler(null); else if (typeof e == "string") {
                this.$keybindingId = e;
                var t = this;
                g.loadModule(["keybinding", e], function (n) {
                    t.$keybindingId == e && t.keyBinding.setKeyboardHandler(n && n.handler)
                })
            } else this.$keybindingId = null, this.keyBinding.setKeyboardHandler(e)
        }, this.getKeyboardHandler = function () {
            return this.keyBinding.getKeyboardHandler()
        }, this.setSession = function (e) {
            if (this.session == e)return;
            var t = this.session;
            if (t) {
                this.session.removeEventListener("change", this.$onDocumentChange), this.session.removeEventListener("changeMode", this.$onChangeMode), this.session.removeEventListener("tokenizerUpdate", this.$onTokenizerUpdate), this.session.removeEventListener("changeTabSize", this.$onChangeTabSize), this.session.removeEventListener("changeWrapLimit", this.$onChangeWrapLimit), this.session.removeEventListener("changeWrapMode", this.$onChangeWrapMode), this.session.removeEventListener("onChangeFold", this.$onChangeFold), this.session.removeEventListener("changeFrontMarker", this.$onChangeFrontMarker), this.session.removeEventListener("changeBackMarker", this.$onChangeBackMarker), this.session.removeEventListener("changeBreakpoint", this.$onChangeBreakpoint), this.session.removeEventListener("changeAnnotation", this.$onChangeAnnotation), this.session.removeEventListener("changeOverwrite", this.$onCursorChange), this.session.removeEventListener("changeScrollTop", this.$onScrollTopChange), this.session.removeEventListener("changeScrollLeft", this.$onScrollLeftChange);
                var n = this.session.getSelection();
                n.removeEventListener("changeCursor", this.$onCursorChange), n.removeEventListener("changeSelection", this.$onSelectionChange)
            }
            this.session = e, e ? (this.$onDocumentChange = this.onDocumentChange.bind(this), e.addEventListener("change", this.$onDocumentChange), this.renderer.setSession(e), this.$onChangeMode = this.onChangeMode.bind(this), e.addEventListener("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), e.addEventListener("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), e.addEventListener("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), e.addEventListener("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), e.addEventListener("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), e.addEventListener("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.addEventListener("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.addEventListener("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.addEventListener("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.addEventListener("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.addEventListener("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.addEventListener("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.addEventListener("changeScrollLeft", this.$onScrollLeftChange), this.selection = e.getSelection(), this.selection.addEventListener("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.addEventListener("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.$blockScrolling += 1, this.onCursorChange(), this.$blockScrolling -= 1, this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(e)), this._signal("changeSession", {
                session: e,
                oldSession: t
            }), t && t._signal("changeEditor", {oldEditor: this}), e && e._signal("changeEditor", {editor: this})
        }, this.getSession = function () {
            return this.session
        }, this.setValue = function (e, t) {
            return this.session.doc.setValue(e), t ? t == 1 ? this.navigateFileEnd() : t == -1 && this.navigateFileStart() : this.selectAll(), e
        }, this.getValue = function () {
            return this.session.getValue()
        }, this.getSelection = function () {
            return this.selection
        }, this.resize = function (e) {
            this.renderer.onResize(e)
        }, this.setTheme = function (e, t) {
            this.renderer.setTheme(e, t)
        }, this.getTheme = function () {
            return this.renderer.getTheme()
        }, this.setStyle = function (e) {
            this.renderer.setStyle(e)
        }, this.unsetStyle = function (e) {
            this.renderer.unsetStyle(e)
        }, this.getFontSize = function () {
            return this.getOption("fontSize") || i.computedStyle(this.container, "fontSize")
        }, this.setFontSize = function (e) {
            this.setOption("fontSize", e)
        }, this.$highlightBrackets = function () {
            this.session.$bracketHighlight && (this.session.removeMarker(this.session.$bracketHighlight), this.session.$bracketHighlight = null);
            if (this.$highlightPending)return;
            var e = this;
            this.$highlightPending = !0, setTimeout(function () {
                e.$highlightPending = !1;
                var t = e.session;
                if (!t || !t.bgTokenizer)return;
                var n = t.findMatchingBracket(e.getCursorPosition());
                if (n)var r = new p(n.row, n.column, n.row, n.column + 1); else if (t.$mode.getMatching)var r = t.$mode.getMatching(e.session);
                r && (t.$bracketHighlight = t.addMarker(r, "ace_bracket", "text"))
            }, 50)
        }, this.$highlightTags = function () {
            if (this.$highlightTagPending)return;
            var e = this;
            this.$highlightTagPending = !0, setTimeout(function () {
                e.$highlightTagPending = !1;
                var t = e.session;
                if (!t || !t.bgTokenizer)return;
                var n = e.getCursorPosition(), r = new y(e.session, n.row, n.column), i = r.getCurrentToken();
                if (!i || i.type.indexOf("tag-name") === -1) {
                    t.removeMarker(t.$tagHighlight), t.$tagHighlight = null;
                    return
                }
                var s = i.value, o = 0, u = r.stepBackward();
                if (u.value == "<") {
                    do u = i, i = r.stepForward(), i && i.value === s && i.type.indexOf("tag-name") !== -1 && (u.value === "<" ? o++ : u.value === "</" && o--); while (i && o >= 0)
                } else {
                    do i = u, u = r.stepBackward(), i && i.value === s && i.type.indexOf("tag-name") !== -1 && (u.value === "<" ? o++ : u.value === "</" && o--); while (u && o <= 0);
                    r.stepForward()
                }
                if (!i) {
                    t.removeMarker(t.$tagHighlight), t.$tagHighlight = null;
                    return
                }
                var a = r.getCurrentTokenRow(), f = r.getCurrentTokenColumn(), l = new p(a, f, a, f + i.value.length);
                t.$tagHighlight && l.compareRange(t.$backMarkers[t.$tagHighlight].range) !== 0 && (t.removeMarker(t.$tagHighlight), t.$tagHighlight = null), l && !t.$tagHighlight && (t.$tagHighlight = t.addMarker(l, "ace_bracket", "text"))
            }, 50)
        }, this.focus = function () {
            var e = this;
            setTimeout(function () {
                e.textInput.focus()
            }), this.textInput.focus()
        }, this.isFocused = function () {
            return this.textInput.isFocused()
        }, this.blur = function () {
            this.textInput.blur()
        }, this.onFocus = function () {
            if (this.$isFocused)return;
            this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus")
        }, this.onBlur = function () {
            if (!this.$isFocused)return;
            this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur")
        }, this.$cursorChange = function () {
            this.renderer.updateCursor()
        }, this.onDocumentChange = function (e) {
            var t = e.data, n = t.range, r;
            n.start.row == n.end.row && t.action != "insertLines" && t.action != "removeLines" ? r = n.end.row : r = Infinity, this.renderer.updateLines(n.start.row, r, this.session.$useWrapMode), this._signal("change", e), this.$cursorChange(), this.$updateHighlightActiveLine()
        }, this.onTokenizerUpdate = function (e) {
            var t = e.data;
            this.renderer.updateLines(t.first, t.last)
        }, this.onScrollTopChange = function () {
            this.renderer.scrollToY(this.session.getScrollTop())
        }, this.onScrollLeftChange = function () {
            this.renderer.scrollToX(this.session.getScrollLeft())
        }, this.onCursorChange = function () {
            this.$cursorChange(), this.$blockScrolling || this.renderer.scrollCursorIntoView(), this.$highlightBrackets(), this.$highlightTags(), this.$updateHighlightActiveLine(), this._signal("changeSelection")
        }, this.$updateHighlightActiveLine = function () {
            var e = this.getSession(), t;
            if (this.$highlightActiveLine) {
                if (this.$selectionStyle != "line" || !this.selection.isMultiLine())t = this.getCursorPosition();
                this.renderer.$maxLines && this.session.getLength() === 1 && !(this.renderer.$minLines > 1) && (t = !1)
            }
            if (e.$highlightLineMarker && !t)e.removeMarker(e.$highlightLineMarker.id), e.$highlightLineMarker = null; else if (!e.$highlightLineMarker && t) {
                var n = new p(t.row, t.column, t.row, Infinity);
                n.id = e.addMarker(n, "ace_active-line", "screenLine"), e.$highlightLineMarker = n
            } else t && (e.$highlightLineMarker.start.row = t.row, e.$highlightLineMarker.end.row = t.row, e.$highlightLineMarker.start.column = t.column, e._signal("changeBackMarker"))
        }, this.onSelectionChange = function (e) {
            var t = this.session;
            t.$selectionMarker && t.removeMarker(t.$selectionMarker), t.$selectionMarker = null;
            if (!this.selection.isEmpty()) {
                var n = this.selection.getRange(), r = this.getSelectionStyle();
                t.$selectionMarker = t.addMarker(n, "ace_selection", r)
            } else this.$updateHighlightActiveLine();
            var i = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
            this.session.highlight(i), this._signal("changeSelection")
        }, this.$getSelectionHighLightRegexp = function () {
            var e = this.session, t = this.getSelectionRange();
            if (t.isEmpty() || t.isMultiLine())return;
            var n = t.start.column - 1, r = t.end.column + 1, i = e.getLine(t.start.row), s = i.length, o = i.substring(Math.max(n, 0), Math.min(r, s));
            if (n >= 0 && /^[\w\d]/.test(o) || r <= s && /[\w\d]$/.test(o))return;
            o = i.substring(t.start.column, t.end.column);
            if (!/^[\w\d]+$/.test(o))return;
            var u = this.$search.$assembleRegExp({wholeWord: !0, caseSensitive: !0, needle: o});
            return u
        }, this.onChangeFrontMarker = function () {
            this.renderer.updateFrontMarkers()
        }, this.onChangeBackMarker = function () {
            this.renderer.updateBackMarkers()
        }, this.onChangeBreakpoint = function () {
            this.renderer.updateBreakpoints()
        }, this.onChangeAnnotation = function () {
            this.renderer.setAnnotations(this.session.getAnnotations())
        }, this.onChangeMode = function (e) {
            this.renderer.updateText(), this._emit("changeMode", e)
        }, this.onChangeWrapLimit = function () {
            this.renderer.updateFull()
        }, this.onChangeWrapMode = function () {
            this.renderer.onResize(!0)
        }, this.onChangeFold = function () {
            this.$updateHighlightActiveLine(), this.renderer.updateFull()
        }, this.getSelectedText = function () {
            return this.session.getTextRange(this.getSelectionRange())
        }, this.getCopyText = function () {
            var e = this.getSelectedText();
            return this._signal("copy", e), e
        }, this.onCopy = function () {
            this.commands.exec("copy", this)
        }, this.onCut = function () {
            this.commands.exec("cut", this)
        }, this.onPaste = function (e) {
            if (this.$readOnly)return;
            var t = {text: e};
            this._signal("paste", t), this.insert(t.text, !0)
        }, this.execCommand = function (e, t) {
            this.commands.exec(e, this, t)
        }, this.insert = function (e, t) {
            var n = this.session, r = n.getMode(), i = this.getCursorPosition();
            if (this.getBehavioursEnabled() && !t) {
                var s = r.transformAction(n.getState(i.row), "insertion", this, n, e);
                s && (e !== s.text && (this.session.mergeUndoDeltas = !1, this.$mergeNextCommand = !1), e = s.text)
            }
            e == "	" && (e = this.session.getTabString());
            if (!this.selection.isEmpty()) {
                var o = this.getSelectionRange();
                i = this.session.remove(o), this.clearSelection()
            } else if (this.session.getOverwrite()) {
                var o = new p.fromPoints(i, i);
                o.end.column += e.length, this.session.remove(o)
            }
            if (e == "\n" || e == "\r\n") {
                var u = n.getLine(i.row);
                if (i.column > u.search(/\S|$/)) {
                    var a = u.substr(i.column).search(/\S|$/);
                    n.doc.removeInLine(i.row, i.column, i.column + a)
                }
            }
            this.clearSelection();
            var f = i.column, l = n.getState(i.row), u = n.getLine(i.row), c = r.checkOutdent(l, u, e), h = n.insert(i, e);
            s && s.selection && (s.selection.length == 2 ? this.selection.setSelectionRange(new p(i.row, f + s.selection[0], i.row, f + s.selection[1])) : this.selection.setSelectionRange(new p(i.row + s.selection[0], s.selection[1], i.row + s.selection[2], s.selection[3])));
            if (n.getDocument().isNewLine(e)) {
                var d = r.getNextLineIndent(l, u.slice(0, i.column), n.getTabString());
                n.insert({row: i.row + 1, column: 0}, d)
            }
            c && r.autoOutdent(l, n, i.row)
        }, this.onTextInput = function (e) {
            this.keyBinding.onTextInput(e)
        }, this.onCommandKey = function (e, t, n) {
            this.keyBinding.onCommandKey(e, t, n)
        }, this.setOverwrite = function (e) {
            this.session.setOverwrite(e)
        }, this.getOverwrite = function () {
            return this.session.getOverwrite()
        }, this.toggleOverwrite = function () {
            this.session.toggleOverwrite()
        }, this.setScrollSpeed = function (e) {
            this.setOption("scrollSpeed", e)
        }, this.getScrollSpeed = function () {
            return this.getOption("scrollSpeed")
        }, this.setDragDelay = function (e) {
            this.setOption("dragDelay", e)
        }, this.getDragDelay = function () {
            return this.getOption("dragDelay")
        }, this.setSelectionStyle = function (e) {
            this.setOption("selectionStyle", e)
        }, this.getSelectionStyle = function () {
            return this.getOption("selectionStyle")
        }, this.setHighlightActiveLine = function (e) {
            this.setOption("highlightActiveLine", e)
        }, this.getHighlightActiveLine = function () {
            return this.getOption("highlightActiveLine")
        }, this.setHighlightGutterLine = function (e) {
            this.setOption("highlightGutterLine", e)
        }, this.getHighlightGutterLine = function () {
            return this.getOption("highlightGutterLine")
        }, this.setHighlightSelectedWord = function (e) {
            this.setOption("highlightSelectedWord", e)
        }, this.getHighlightSelectedWord = function () {
            return this.$highlightSelectedWord
        }, this.setAnimatedScroll = function (e) {
            this.renderer.setAnimatedScroll(e)
        }, this.getAnimatedScroll = function () {
            return this.renderer.getAnimatedScroll()
        }, this.setShowInvisibles = function (e) {
            this.renderer.setShowInvisibles(e)
        }, this.getShowInvisibles = function () {
            return this.renderer.getShowInvisibles()
        }, this.setDisplayIndentGuides = function (e) {
            this.renderer.setDisplayIndentGuides(e)
        }, this.getDisplayIndentGuides = function () {
            return this.renderer.getDisplayIndentGuides()
        }, this.setShowPrintMargin = function (e) {
            this.renderer.setShowPrintMargin(e)
        }, this.getShowPrintMargin = function () {
            return this.renderer.getShowPrintMargin()
        }, this.setPrintMarginColumn = function (e) {
            this.renderer.setPrintMarginColumn(e)
        }, this.getPrintMarginColumn = function () {
            return this.renderer.getPrintMarginColumn()
        }, this.setReadOnly = function (e) {
            this.setOption("readOnly", e)
        }, this.getReadOnly = function () {
            return this.getOption("readOnly")
        }, this.setBehavioursEnabled = function (e) {
            this.setOption("behavioursEnabled", e)
        }, this.getBehavioursEnabled = function () {
            return this.getOption("behavioursEnabled")
        }, this.setWrapBehavioursEnabled = function (e) {
            this.setOption("wrapBehavioursEnabled", e)
        }, this.getWrapBehavioursEnabled = function () {
            return this.getOption("wrapBehavioursEnabled")
        }, this.setShowFoldWidgets = function (e) {
            this.setOption("showFoldWidgets", e)
        }, this.getShowFoldWidgets = function () {
            return this.getOption("showFoldWidgets")
        }, this.setFadeFoldWidgets = function (e) {
            this.setOption("fadeFoldWidgets", e)
        }, this.getFadeFoldWidgets = function () {
            return this.getOption("fadeFoldWidgets")
        }, this.remove = function (e) {
            this.selection.isEmpty() && (e == "left" ? this.selection.selectLeft() : this.selection.selectRight());
            var t = this.getSelectionRange();
            if (this.getBehavioursEnabled()) {
                var n = this.session, r = n.getState(t.start.row), i = n.getMode().transformAction(r, "deletion", this, n, t);
                if (t.end.column === 0) {
                    var s = n.getTextRange(t);
                    if (s[s.length - 1] == "\n") {
                        var o = n.getLine(t.end.row);
                        /^\s+$/.test(o) && (t.end.column = o.length)
                    }
                }
                i && (t = i)
            }
            this.session.remove(t), this.clearSelection()
        }, this.removeWordRight = function () {
            this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection()
        }, this.removeWordLeft = function () {
            this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection()
        }, this.removeToLineStart = function () {
            this.selection.isEmpty() && this.selection.selectLineStart(), this.session.remove(this.getSelectionRange()), this.clearSelection()
        }, this.removeToLineEnd = function () {
            this.selection.isEmpty() && this.selection.selectLineEnd();
            var e = this.getSelectionRange();
            e.start.column == e.end.column && e.start.row == e.end.row && (e.end.column = 0, e.end.row++), this.session.remove(e), this.clearSelection()
        }, this.splitLine = function () {
            this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
            var e = this.getCursorPosition();
            this.insert("\n"), this.moveCursorToPosition(e)
        }, this.transposeLetters = function () {
            if (!this.selection.isEmpty())return;
            var e = this.getCursorPosition(), t = e.column;
            if (t === 0)return;
            var n = this.session.getLine(e.row), r, i;
            t < n.length ? (r = n.charAt(t) + n.charAt(t - 1), i = new p(e.row, t - 1, e.row, t + 1)) : (r = n.charAt(t - 1) + n.charAt(t - 2), i = new p(e.row, t - 2, e.row, t)), this.session.replace(i, r)
        }, this.toLowerCase = function () {
            var e = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var t = this.getSelectionRange(), n = this.session.getTextRange(t);
            this.session.replace(t, n.toLowerCase()), this.selection.setSelectionRange(e)
        }, this.toUpperCase = function () {
            var e = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var t = this.getSelectionRange(), n = this.session.getTextRange(t);
            this.session.replace(t, n.toUpperCase()), this.selection.setSelectionRange(e)
        }, this.indent = function () {
            var e = this.session, t = this.getSelectionRange();
            if (t.start.row < t.end.row) {
                var n = this.$getSelectedRows();
                e.indentRows(n.first, n.last, "	");
                return
            }
            if (t.start.column < t.end.column) {
                var r = e.getTextRange(t);
                if (!/^\s+$/.test(r)) {
                    var n = this.$getSelectedRows();
                    e.indentRows(n.first, n.last, "	");
                    return
                }
            }
            var i = e.getLine(t.start.row), o = t.start, u = e.getTabSize(), a = e.documentToScreenColumn(o.row, o.column);
            if (this.session.getUseSoftTabs())var f = u - a % u, l = s.stringRepeat(" ", f); else {
                var f = a % u;
                while (i[t.start.column] == " " && f)t.start.column--, f--;
                this.selection.setSelectionRange(t), l = "	"
            }
            return this.insert(l)
        }, this.blockIndent = function () {
            var e = this.$getSelectedRows();
            this.session.indentRows(e.first, e.last, "	")
        },this.blockOutdent = function () {
            var e = this.session.getSelection();
            this.session.outdentRows(e.getRange())
        },this.sortLines = function () {
            var e = this.$getSelectedRows(), t = this.session, n = [];
            for (i = e.first; i <= e.last; i++)n.push(t.getLine(i));
            n.sort(function (e, t) {
                return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0
            });
            var r = new p(0, 0, 0, 0);
            for (var i = e.first; i <= e.last; i++) {
                var s = t.getLine(i);
                r.start.row = i, r.end.row = i, r.end.column = s.length, t.replace(r, n[i - e.first])
            }
        },this.toggleCommentLines = function () {
            var e = this.session.getState(this.getCursorPosition().row), t = this.$getSelectedRows();
            this.session.getMode().toggleCommentLines(e, this.session, t.first, t.last)
        },this.toggleBlockComment = function () {
            var e = this.getCursorPosition(), t = this.session.getState(e.row), n = this.getSelectionRange();
            this.session.getMode().toggleBlockComment(t, this.session, n, e)
        },this.getNumberAt = function (e, t) {
            var n = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
            n.lastIndex = 0;
            var r = this.session.getLine(e);
            while (n.lastIndex < t) {
                var i = n.exec(r);
                if (i.index <= t && i.index + i[0].length >= t) {
                    var s = {value: i[0], start: i.index, end: i.index + i[0].length};
                    return s
                }
            }
            return null
        },this.modifyNumber = function (e) {
            var t = this.selection.getCursor().row, n = this.selection.getCursor().column, r = new p(t, n - 1, t, n), i = this.session.getTextRange(r);
            if (!isNaN(parseFloat(i)) && isFinite(i)) {
                var s = this.getNumberAt(t, n);
                if (s) {
                    var o = s.value.indexOf(".") >= 0 ? s.start + s.value.indexOf(".") + 1 : s.end, u = s.start + s.value.length - o, a = parseFloat(s.value);
                    a *= Math.pow(10, u), o !== s.end && n < o ? e *= Math.pow(10, s.end - n - 1) : e *= Math.pow(10, s.end - n), a += e, a /= Math.pow(10, u);
                    var f = a.toFixed(u), l = new p(t, s.start, t, s.end);
                    this.session.replace(l, f), this.moveCursorTo(t, Math.max(s.start + 1, n + f.length - s.value.length))
                }
            }
        },this.removeLines = function () {
            var e = this.$getSelectedRows(), t;
            e.first === 0 || e.last + 1 < this.session.getLength() ? t = new p(e.first, 0, e.last + 1, 0) : t = new p(e.first - 1, this.session.getLine(e.first - 1).length, e.last, this.session.getLine(e.last).length), this.session.remove(t), this.clearSelection()
        },this.duplicateSelection = function () {
            var e = this.selection, t = this.session, n = e.getRange(), r = e.isBackwards();
            if (n.isEmpty()) {
                var i = n.start.row;
                t.duplicateLines(i, i)
            } else {
                var s = r ? n.start : n.end, o = t.insert(s, t.getTextRange(n), !1);
                n.start = s, n.end = o, e.setSelectionRange(n, r)
            }
        },this.moveLinesDown = function () {
            this.$moveLines(function (e, t) {
                return this.session.moveLinesDown(e, t)
            })
        },this.moveLinesUp = function () {
            this.$moveLines(function (e, t) {
                return this.session.moveLinesUp(e, t)
            })
        },this.moveText = function (e, t, n) {
            return this.session.moveText(e, t, n)
        },this.copyLinesUp = function () {
            this.$moveLines(function (e, t) {
                return this.session.duplicateLines(e, t), 0
            })
        },this.copyLinesDown = function () {
            this.$moveLines(function (e, t) {
                return this.session.duplicateLines(e, t)
            })
        },this.$moveLines = function (e) {
            var t = this.selection;
            if (!t.inMultiSelectMode || this.inVirtualSelectionMode) {
                var n = t.toOrientedRange(), r = this.$getSelectedRows(n), i = e.call(this, r.first, r.last);
                n.moveBy(i, 0), t.fromOrientedRange(n)
            } else {
                var s = t.rangeList.ranges;
                t.rangeList.detach(this.session);
                for (var o = s.length; o--;) {
                    var u = o, r = s[o].collapseRows(), a = r.end.row, f = r.start.row;
                    while (o--) {
                        r = s[o].collapseRows();
                        if (!(f - r.end.row <= 1))break;
                        f = r.end.row
                    }
                    o++;
                    var i = e.call(this, f, a);
                    while (u >= o)s[u].moveBy(i, 0), u--
                }
                t.fromOrientedRange(t.ranges[0]), t.rangeList.attach(this.session)
            }
        },this.$getSelectedRows = function () {
            var e = this.getSelectionRange().collapseRows();
            return {first: this.session.getRowFoldStart(e.start.row), last: this.session.getRowFoldEnd(e.end.row)}
        },this.onCompositionStart = function (e) {
            this.renderer.showComposition(this.getCursorPosition())
        },this.onCompositionUpdate = function (e) {
            this.renderer.setCompositionText(e)
        },this.onCompositionEnd = function () {
            this.renderer.hideComposition()
        },this.getFirstVisibleRow = function () {
            return this.renderer.getFirstVisibleRow()
        },this.getLastVisibleRow = function () {
            return this.renderer.getLastVisibleRow()
        },this.isRowVisible = function (e) {
            return e >= this.getFirstVisibleRow() && e <= this.getLastVisibleRow()
        },this.isRowFullyVisible = function (e) {
            return e >= this.renderer.getFirstFullyVisibleRow() && e <= this.renderer.getLastFullyVisibleRow()
        },this.$getVisibleRowCount = function () {
            return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1
        },this.$moveByPage = function (e, t) {
            var n = this.renderer, r = this.renderer.layerConfig, i = e * Math.floor(r.height / r.lineHeight);
            this.$blockScrolling++, t === !0 ? this.selection.$moveSelection(function () {
                this.moveCursorBy(i, 0)
            }) : t === !1 && (this.selection.moveCursorBy(i, 0), this.selection.clearSelection()), this.$blockScrolling--;
            var s = n.scrollTop;
            n.scrollBy(0, i * r.lineHeight), t != null && n.scrollCursorIntoView(null, .5), n.animateScrolling(s)
        },this.selectPageDown = function () {
            this.$moveByPage(1, !0)
        },this.selectPageUp = function () {
            this.$moveByPage(-1, !0)
        },this.gotoPageDown = function () {
            this.$moveByPage(1, !1)
        },this.gotoPageUp = function () {
            this.$moveByPage(-1, !1)
        },this.scrollPageDown = function () {
            this.$moveByPage(1)
        },this.scrollPageUp = function () {
            this.$moveByPage(-1)
        },this.scrollToRow = function (e) {
            this.renderer.scrollToRow(e)
        },this.scrollToLine = function (e, t, n, r) {
            this.renderer.scrollToLine(e, t, n, r)
        },this.centerSelection = function () {
            var e = this.getSelectionRange(), t = {
                row: Math.floor(e.start.row + (e.end.row - e.start.row) / 2),
                column: Math.floor(e.start.column + (e.end.column - e.start.column) / 2)
            };
            this.renderer.alignCursor(t, .5)
        },this.getCursorPosition = function () {
            return this.selection.getCursor()
        },this.getCursorPositionScreen = function () {
            return this.session.documentToScreenPosition(this.getCursorPosition())
        },this.getSelectionRange = function () {
            return this.selection.getRange()
        },this.selectAll = function () {
            this.$blockScrolling += 1, this.selection.selectAll(), this.$blockScrolling -= 1
        },this.clearSelection = function () {
            this.selection.clearSelection()
        },this.moveCursorTo = function (e, t) {
            this.selection.moveCursorTo(e, t)
        },this.moveCursorToPosition = function (e) {
            this.selection.moveCursorToPosition(e)
        },this.jumpToMatching = function (e, t) {
            var n = this.getCursorPosition(), r = new y(this.session, n.row, n.column), i = r.getCurrentToken(), s = i || r.stepForward();
            if (!s)return;
            var o, u = !1, a = {}, f = n.column - s.start, l, c = {
                ")": "(",
                "(": "(",
                "]": "[",
                "[": "[",
                "{": "{",
                "}": "{"
            };
            do {
                if (s.value.match(/[{}()\[\]]/g))for (; f < s.value.length && !u; f++) {
                    if (!c[s.value[f]])continue;
                    l = c[s.value[f]] + "." + s.type.replace("rparen", "lparen"), isNaN(a[l]) && (a[l] = 0);
                    switch (s.value[f]) {
                        case"(":
                        case"[":
                        case"{":
                            a[l]++;
                            break;
                        case")":
                        case"]":
                        case"}":
                            a[l]--, a[l] === -1 && (o = "bracket", u = !0)
                    }
                } else s && s.type.indexOf("tag-name") !== -1 && (isNaN(a[s.value]) && (a[s.value] = 0), i.value === "<" ? a[s.value]++ : i.value === "</" && a[s.value]--, a[s.value] === -1 && (o = "tag", u = !0));
                u || (i = s, s = r.stepForward(), f = 0)
            } while (s && !u);
            if (!o)return;
            var h, d;
            if (o === "bracket") {
                h = this.session.getBracketRange(n);
                if (!h) {
                    h = new p(r.getCurrentTokenRow(), r.getCurrentTokenColumn() + f - 1, r.getCurrentTokenRow(), r.getCurrentTokenColumn() + f - 1), d = h.start;
                    if (t || d.row === n.row && Math.abs(d.column - n.column) < 2)h = this.session.getBracketRange(d)
                }
            } else if (o === "tag") {
                if (!s || s.type.indexOf("tag-name") === -1)return;
                var v = s.value;
                h = new p(r.getCurrentTokenRow(), r.getCurrentTokenColumn() - 2, r.getCurrentTokenRow(), r.getCurrentTokenColumn() - 2);
                if (h.compare(n.row, n.column) === 0) {
                    u = !1;
                    do s = i, i = r.stepBackward(), i && (i.type.indexOf("tag-close") !== -1 && h.setEnd(r.getCurrentTokenRow(), r.getCurrentTokenColumn() + 1), s.value === v && s.type.indexOf("tag-name") !== -1 && (i.value === "<" ? a[v]++ : i.value === "</" && a[v]--, a[v] === 0 && (u = !0))); while (i && !u)
                }
                s && s.type.indexOf("tag-name") && (d = h.start, d.row == n.row && Math.abs(d.column - n.column) < 2 && (d = h.end))
            }
            d = h && h.cursor || d, d && (e ? h && t ? this.selection.setRange(h) : h && h.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(d.row, d.column) : this.selection.moveTo(d.row, d.column))
        },this.gotoLine = function (e, t, n) {
            this.selection.clearSelection(), this.session.unfold({
                row: e - 1,
                column: t || 0
            }), this.$blockScrolling += 1, this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(e - 1, t || 0), this.$blockScrolling -= 1, this.isRowFullyVisible(e - 1) || this.scrollToLine(e - 1, !0, n)
        },this.navigateTo = function (e, t) {
            this.selection.moveTo(e, t)
        },this.navigateUp = function (e) {
            if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
                var t = this.selection.anchor.getPosition();
                return this.moveCursorToPosition(t)
            }
            this.selection.clearSelection(), this.selection.moveCursorBy(-e || -1, 0)
        },this.navigateDown = function (e) {
            if (this.selection.isMultiLine() && this.selection.isBackwards()) {
                var t = this.selection.anchor.getPosition();
                return this.moveCursorToPosition(t)
            }
            this.selection.clearSelection(), this.selection.moveCursorBy(e || 1, 0)
        },this.navigateLeft = function (e) {
            if (!this.selection.isEmpty()) {
                var t = this.getSelectionRange().start;
                this.moveCursorToPosition(t)
            } else {
                e = e || 1;
                while (e--)this.selection.moveCursorLeft()
            }
            this.clearSelection()
        },this.navigateRight = function (e) {
            if (!this.selection.isEmpty()) {
                var t = this.getSelectionRange().end;
                this.moveCursorToPosition(t)
            } else {
                e = e || 1;
                while (e--)this.selection.moveCursorRight()
            }
            this.clearSelection()
        },this.navigateLineStart = function () {
            this.selection.moveCursorLineStart(), this.clearSelection()
        },this.navigateLineEnd = function () {
            this.selection.moveCursorLineEnd(), this.clearSelection()
        },this.navigateFileEnd = function () {
            this.selection.moveCursorFileEnd(), this.clearSelection()
        },this.navigateFileStart = function () {
            this.selection.moveCursorFileStart(), this.clearSelection()
        },this.navigateWordRight = function () {
            this.selection.moveCursorWordRight(), this.clearSelection()
        },this.navigateWordLeft = function () {
            this.selection.moveCursorWordLeft(), this.clearSelection()
        },this.replace = function (e, t) {
            t && this.$search.set(t);
            var n = this.$search.find(this.session), r = 0;
            return n ? (this.$tryReplace(n, e) && (r = 1), n !== null && (this.selection.setSelectionRange(n), this.renderer.scrollSelectionIntoView(n.start, n.end)), r) : r
        },this.replaceAll = function (e, t) {
            t && this.$search.set(t);
            var n = this.$search.findAll(this.session), r = 0;
            if (!n.length)return r;
            this.$blockScrolling += 1;
            var i = this.getSelectionRange();
            this.selection.moveTo(0, 0);
            for (var s = n.length - 1; s >= 0; --s)this.$tryReplace(n[s], e) && r++;
            return this.selection.setSelectionRange(i), this.$blockScrolling -= 1, r
        },this.$tryReplace = function (e, t) {
            var n = this.session.getTextRange(e);
            return t = this.$search.replace(n, t), t !== null ? (e.end = this.session.replace(e, t), e) : null
        },this.getLastSearchOptions = function () {
            return this.$search.getOptions()
        },this.find = function (e, t, n) {
            t || (t = {}), typeof e == "string" || e instanceof RegExp ? t.needle = e : typeof e == "object" && r.mixin(t, e);
            var i = this.selection.getRange();
            t.needle == null && (e = this.session.getTextRange(i) || this.$search.$options.needle, e || (i = this.session.getWordRange(i.start.row, i.start.column), e = this.session.getTextRange(i)), this.$search.set({needle: e})), this.$search.set(t), t.start || this.$search.set({start: i});
            var s = this.$search.find(this.session);
            if (t.preventScroll)return s;
            if (s)return this.revealRange(s, n), s;
            t.backwards ? i.start = i.end : i.end = i.start, this.selection.setRange(i)
        },this.findNext = function (e, t) {
            this.find({skipCurrent: !0, backwards: !1}, e, t)
        },this.findPrevious = function (e, t) {
            this.find(e, {skipCurrent: !0, backwards: !0}, t)
        },this.revealRange = function (e, t) {
            this.$blockScrolling += 1, this.session.unfold(e), this.selection.setSelectionRange(e), this.$blockScrolling -= 1;
            var n = this.renderer.scrollTop;
            this.renderer.scrollSelectionIntoView(e.start, e.end, .5), t !== !1 && this.renderer.animateScrolling(n)
        },this.undo = function () {
            this.$blockScrolling++, this.session.getUndoManager().undo(), this.$blockScrolling--, this.renderer.scrollCursorIntoView(null, .5)
        },this.redo = function () {
            this.$blockScrolling++, this.session.getUndoManager().redo(), this.$blockScrolling--, this.renderer.scrollCursorIntoView(null, .5)
        },this.destroy = function () {
            this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy()
        },this.setAutoScrollEditorIntoView = function (e) {
            if (!e)return;
            var t, n = this, r = !1;
            this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
            var i = this.$scrollAnchor;
            i.style.cssText = "position:absolute", this.container.insertBefore(i, this.container.firstChild);
            var s = this.on("changeSelection", function () {
                r = !0
            }), o = this.renderer.on("beforeRender", function () {
                r && (t = n.renderer.container.getBoundingClientRect())
            }), u = this.renderer.on("afterRender", function () {
                if (r && t && n.isFocused()) {
                    var e = n.renderer, s = e.$cursorLayer.$pixelPos, o = e.layerConfig, u = s.top - o.offset;
                    s.top >= 0 && u + t.top < 0 ? r = !0 : s.top < o.height && s.top + t.top + o.lineHeight > window.innerHeight ? r = !1 : r = null, r != null && (i.style.top = u + "px", i.style.left = s.left + "px", i.style.height = o.lineHeight + "px", i.scrollIntoView(r)), r = t = null
                }
            });
            this.setAutoScrollEditorIntoView = function (e) {
                if (e)return;
                delete this.setAutoScrollEditorIntoView, this.removeEventListener("changeSelection", s), this.renderer.removeEventListener("afterRender", u), this.renderer.removeEventListener("beforeRender", o)
            }
        },this.$resetCursorStyle = function () {
            var e = this.$cursorStyle || "ace", t = this.renderer.$cursorLayer;
            if (!t)return;
            t.setSmoothBlinking(/smooth/.test(e)), t.isBlinking = !this.$readOnly && e != "wide", i.setCssClass(t.element, "ace_slim-cursors", /slim/.test(e))
        }
    }).call(b.prototype), g.defineOptions(b.prototype, "editor", {
        selectionStyle: {
            set: function (e) {
                this.onSelectionChange(), this._signal("changeSelectionStyle", {data: e})
            }, initialValue: "line"
        },
        highlightActiveLine: {
            set: function () {
                this.$updateHighlightActiveLine()
            }, initialValue: !0
        },
        highlightSelectedWord: {
            set: function (e) {
                this.$onSelectionChange()
            }, initialValue: !0
        },
        readOnly: {
            set: function (e) {
                this.$resetCursorStyle()
            }, initialValue: !1
        },
        cursorStyle: {
            set: function (e) {
                this.$resetCursorStyle()
            }, values: ["ace", "slim", "smooth", "wide"], initialValue: "ace"
        },
        mergeUndoDeltas: {values: [!1, !0, "always"], initialValue: !0},
        behavioursEnabled: {initialValue: !0},
        wrapBehavioursEnabled: {initialValue: !0},
        autoScrollEditorIntoView: {
            set: function (e) {
                this.setAutoScrollEditorIntoView(e)
            }
        },
        hScrollBarAlwaysVisible: "renderer",
        vScrollBarAlwaysVisible: "renderer",
        highlightGutterLine: "renderer",
        animatedScroll: "renderer",
        showInvisibles: "renderer",
        showPrintMargin: "renderer",
        printMarginColumn: "renderer",
        printMargin: "renderer",
        fadeFoldWidgets: "renderer",
        showFoldWidgets: "renderer",
        showLineNumbers: "renderer",
        showGutter: "renderer",
        displayIndentGuides: "renderer",
        fontSize: "renderer",
        fontFamily: "renderer",
        maxLines: "renderer",
        minLines: "renderer",
        scrollPastEnd: "renderer",
        fixedWidthGutter: "renderer",
        theme: "renderer",
        scrollSpeed: "$mouseHandler",
        dragDelay: "$mouseHandler",
        dragEnabled: "$mouseHandler",
        focusTimout: "$mouseHandler",
        tooltipFollowsMouse: "$mouseHandler",
        firstLineNumber: "session",
        overwrite: "session",
        newLineMode: "session",
        useWorker: "session",
        useSoftTabs: "session",
        tabSize: "session",
        wrap: "session",
        foldStyle: "session",
        mode: "session"
    }), t.Editor = b
}), define("ace/undomanager", ["require", "exports", "module"], function (e, t, n) {
    "use strict";
    var r = function () {
        this.reset()
    };
    (function () {
        this.execute = function (e) {
            var t = e.args[0];
            this.$doc = e.args[1], e.merge && this.hasUndo() && (this.dirtyCounter--, t = this.$undoStack.pop().concat(t)), this.$undoStack.push(t), this.$redoStack = [], this.dirtyCounter < 0 && (this.dirtyCounter = NaN), this.dirtyCounter++
        }, this.undo = function (e) {
            var t = this.$undoStack.pop(), n = null;
            return t && (n = this.$doc.undoChanges(t, e), this.$redoStack.push(t), this.dirtyCounter--), n
        }, this.redo = function (e) {
            var t = this.$redoStack.pop(), n = null;
            return t && (n = this.$doc.redoChanges(t, e), this.$undoStack.push(t), this.dirtyCounter++), n
        }, this.reset = function () {
            this.$undoStack = [], this.$redoStack = [], this.dirtyCounter = 0
        }, this.hasUndo = function () {
            return this.$undoStack.length > 0
        }, this.hasRedo = function () {
            return this.$redoStack.length > 0
        }, this.markClean = function () {
            this.dirtyCounter = 0
        }, this.isClean = function () {
            return this.dirtyCounter === 0
        }
    }).call(r.prototype), t.UndoManager = r
}), define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var r = e("../lib/dom"), i = e("../lib/oop"), s = e("../lib/lang"), o = e("../lib/event_emitter").EventEmitter, u = function (e) {
        this.element = r.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$cells = []
    };
    (function () {
        i.implement(this, o), this.setSession = function (e) {
            this.session && this.session.removeEventListener("change", this.$updateAnnotations), this.session = e, e && e.on("change", this.$updateAnnotations)
        }, this.addGutterDecoration = function (e, t) {
            window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, t)
        }, this.removeGutterDecoration = function (e, t) {
            window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, t)
        }, this.setAnnotations = function (e) {
            this.$annotations = [];
            for (var t = 0; t < e.length; t++) {
                var n = e[t], r = n.row, i = this.$annotations[r];
                i || (i = this.$annotations[r] = {text: []});
                var o = n.text;
                o = o ? s.escapeHTML(o) : n.html || "", i.text.indexOf(o) === -1 && i.text.push(o);
                var u = n.type;
                u == "error" ? i.className = " ace_error" : u == "warning" && i.className != " ace_error" ? i.className = " ace_warning" : u == "info" && !i.className && (i.className = " ace_info")
            }
        }, this.$updateAnnotations = function (e) {
            if (!this.$annotations.length)return;
            var t = e.data, n = t.range, r = n.start.row, i = n.end.row - r;
            if (i !== 0)if (t.action == "removeText" || t.action == "removeLines")this.$annotations.splice(r, i + 1, null); else {
                var s = new Array(i + 1);
                s.unshift(r, 1), this.$annotations.splice.apply(this.$annotations, s)
            }
        }, this.update = function (e) {
            var t = this.session, n = e.firstRow, i = Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1), s = t.getNextFoldLine(n), o = s ? s.start.row : Infinity, u = this.$showFoldWidgets && t.foldWidgets, a = t.$breakpoints, f = t.$decorations, l = t.$firstLineNumber, c = 0, h = t.gutterRenderer || this.$renderer, p = null, d = -1, v = n;
            for (; ;) {
                v > o && (v = s.end.row + 1, s = t.getNextFoldLine(v, s), o = s ? s.start.row : Infinity);
                if (v > i) {
                    while (this.$cells.length > d + 1)p = this.$cells.pop(), this.element.removeChild(p.element);
                    break
                }
                p = this.$cells[++d], p || (p = {
                    element: null,
                    textNode: null,
                    foldWidget: null
                }, p.element = r.createElement("div"), p.textNode = document.createTextNode(""), p.element.appendChild(p.textNode), this.element.appendChild(p.element), this.$cells[d] = p);
                var m = "ace_gutter-cell ";
                a[v] && (m += a[v]), f[v] && (m += f[v]), this.$annotations[v] && (m += this.$annotations[v].className), p.element.className != m && (p.element.className = m);
                var g = t.getRowLength(v) * e.lineHeight + "px";
                g != p.element.style.height && (p.element.style.height = g);
                if (u) {
                    var y = u[v];
                    y == null && (y = u[v] = t.getFoldWidget(v))
                }
                if (y) {
                    p.foldWidget || (p.foldWidget = r.createElement("span"), p.element.appendChild(p.foldWidget));
                    var m = "ace_fold-widget ace_" + y;
                    y == "start" && v == o && v < s.end.row ? m += " ace_closed" : m += " ace_open", p.foldWidget.className != m && (p.foldWidget.className = m);
                    var g = e.lineHeight + "px";
                    p.foldWidget.style.height != g && (p.foldWidget.style.height = g)
                } else p.foldWidget && (p.element.removeChild(p.foldWidget), p.foldWidget = null);
                var b = c = h ? h.getText(t, v) : v + l;
                b != p.textNode.data && (p.textNode.data = b), v++
            }
            this.element.style.height = e.minHeight + "px";
            if (this.$fixedWidth || t.$useWrapMode)c = t.getLength() + l;
            var w = h ? h.getWidth(t, c, e) : c.toString().length * e.characterWidth, E = this.$padding || this.$computePadding();
            w += E.left + E.right, w !== this.gutterWidth && !isNaN(w) && (this.gutterWidth = w, this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._emit("changeGutterWidth", w))
        }, this.$fixedWidth = !1, this.$showLineNumbers = !0, this.$renderer = "", this.setShowLineNumbers = function (e) {
            this.$renderer = !e && {
                    getWidth: function () {
                        return ""
                    }, getText: function () {
                        return ""
                    }
                }
        }, this.getShowLineNumbers = function () {
            return this.$showLineNumbers
        }, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function (e) {
            e ? r.addCssClass(this.element, "ace_folding-enabled") : r.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = e, this.$padding = null
        }, this.getShowFoldWidgets = function () {
            return this.$showFoldWidgets
        }, this.$computePadding = function () {
            if (!this.element.firstChild)return {left: 0, right: 0};
            var e = r.computedStyle(this.element.firstChild);
            return this.$padding = {}, this.$padding.left = parseInt(e.paddingLeft) + 1 || 0, this.$padding.right = parseInt(e.paddingRight) || 0, this.$padding
        }, this.getRegion = function (e) {
            var t = this.$padding || this.$computePadding(), n = this.element.getBoundingClientRect();
            if (e.x < t.left + n.left)return "markers";
            if (this.$showFoldWidgets && e.x > n.right - t.right)return "foldWidgets"
        }
    }).call(u.prototype), t.Gutter = u
}), define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    var r = e("../range").Range, i = e("../lib/dom"), s = function (e) {
        this.element = i.createElement("div"), this.element.className = "ace_layer ace_marker-layer", e.appendChild(this.element)
    };
    (function () {
        this.$padding = 0, this.setPadding = function (e) {
            this.$padding = e
        }, this.setSession = function (e) {
            this.session = e
        }, this.setMarkers = function (e) {
            this.markers = e
        }, this.update = function (e) {
            var e = e || this.config;
            if (!e)return;
            this.config = e;
            var t = [];
            for (var n in this.markers) {
                var r = this.markers[n];
                if (!r.range) {
                    r.update(t, this, this.session, e);
                    continue
                }
                var i = r.range.clipRows(e.firstRow, e.lastRow);
                if (i.isEmpty())continue;
                i = i.toScreenRange(this.session);
                if (r.renderer) {
                    var s = this.$getTop(i.start.row, e), o = this.$padding + i.start.column * e.characterWidth;
                    r.renderer(t, i, o, s, e)
                } else r.type == "fullLine" ? this.drawFullLineMarker(t, i, r.clazz, e) : r.type == "screenLine" ? this.drawScreenLineMarker(t, i, r.clazz, e) : i.isMultiLine() ? r.type == "text" ? this.drawTextMarker(t, i, r.clazz, e) : this.drawMultiLineMarker(t, i, r.clazz, e) : this.drawSingleLineMarker(t, i, r.clazz + " ace_start", e)
            }
            this.element.innerHTML = t.join("")
        }, this.$getTop = function (e, t) {
            return (e - t.firstRowScreen) * t.lineHeight
        }, this.drawTextMarker = function (e, t, n, i, s) {
            var o = t.start.row, u = new r(o, t.start.column, o, this.session.getScreenLastRowColumn(o));
            this.drawSingleLineMarker(e, u, n + " ace_start", i, 1, s), o = t.end.row, u = new r(o, 0, o, t.end.column), this.drawSingleLineMarker(e, u, n, i, 0, s);
            for (o = t.start.row + 1; o < t.end.row; o++)u.start.row = o, u.end.row = o, u.end.column = this.session.getScreenLastRowColumn(o), this.drawSingleLineMarker(e, u, n, i, 1, s)
        }, this.drawMultiLineMarker = function (e, t, n, r, i) {
            var s = this.$padding, o = r.lineHeight, u = this.$getTop(t.start.row, r), a = s + t.start.column * r.characterWidth;
            i = i || "", e.push("<div class='", n, " ace_start' style='", "height:", o, "px;", "right:0;", "top:", u, "px;", "left:", a, "px;", i, "'></div>"), u = this.$getTop(t.end.row, r);
            var f = t.end.column * r.characterWidth;
            e.push("<div class='", n, "' style='", "height:", o, "px;", "width:", f, "px;", "top:", u, "px;", "left:", s, "px;", i, "'></div>"), o = (t.end.row - t.start.row - 1) * r.lineHeight;
            if (o < 0)return;
            u = this.$getTop(t.start.row + 1, r), e.push("<div class='", n, "' style='", "height:", o, "px;", "right:0;", "top:", u, "px;", "left:", s, "px;", i, "'></div>")
        }, this.drawSingleLineMarker = function (e, t, n, r, i, s) {
            var o = r.lineHeight, u = (t.end.column + (i || 0) - t.start.column) * r.characterWidth, a = this.$getTop(t.start.row, r), f = this.$padding + t.start.column * r.characterWidth;
            e.push("<div class='", n, "' style='", "height:", o, "px;", "width:", u, "px;", "top:", a, "px;", "left:", f, "px;", s || "", "'></div>")
        }, this.drawFullLineMarker = function (e, t, n, r, i) {
            var s = this.$getTop(t.start.row, r), o = r.lineHeight;
            t.start.row != t.end.row && (o += this.$getTop(t.end.row, r) - s), e.push("<div class='", n, "' style='", "height:", o, "px;", "top:", s, "px;", "left:0;right:0;", i || "", "'></div>")
        }, this.drawScreenLineMarker = function (e, t, n, r, i) {
            var s = this.$getTop(t.start.row, r), o = r.lineHeight;
            e.push("<div class='", n, "' style='", "height:", o, "px;", "top:", s, "px;", "left:0;right:0;", i || "", "'></div>")
        }
    }).call(s.prototype), t.Marker = s
}), define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var r = e("../lib/oop"), i = e("../lib/dom"), s = e("../lib/lang"), o = e("../lib/useragent"), u = e("../lib/event_emitter").EventEmitter, a = function (e) {
        this.element = i.createElement("div"), this.element.className = "ace_layer ace_text-layer", e.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this)
    };
    (function () {
        r.implement(this, u), this.EOF_CHAR = "\u00b6", this.EOL_CHAR_LF = "\u00ac", this.EOL_CHAR_CRLF = "\u00a4", this.EOL_CHAR = this.EOL_CHAR_LF, this.TAB_CHAR = "\u2192", this.SPACE_CHAR = "\u00b7", this.$padding = 0, this.$updateEolChar = function () {
            var e = this.session.doc.getNewLineCharacter() == "\n" ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
            if (this.EOL_CHAR != e)return this.EOL_CHAR = e, !0
        }, this.setPadding = function (e) {
            this.$padding = e, this.element.style.padding = "0 " + e + "px"
        }, this.getLineHeight = function () {
            return this.$fontMetrics.$characterSize.height || 0
        }, this.getCharacterWidth = function () {
            return this.$fontMetrics.$characterSize.width || 0
        }, this.$setFontMetrics = function (e) {
            this.$fontMetrics = e, this.$fontMetrics.on("changeCharacterSize", function (e) {
                this._signal("changeCharacterSize", e)
            }.bind(this)), this.$pollSizeChanges()
        }, this.checkForSizeChanges = function () {
            this.$fontMetrics.checkForSizeChanges()
        }, this.$pollSizeChanges = function () {
            return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges()
        }, this.setSession = function (e) {
            this.session = e, e && this.$computeTabString()
        }, this.showInvisibles = !1, this.setShowInvisibles = function (e) {
            return this.showInvisibles == e ? !1 : (this.showInvisibles = e, this.$computeTabString(), !0)
        }, this.displayIndentGuides = !0, this.setDisplayIndentGuides = function (e) {
            return this.displayIndentGuides == e ? !1 : (this.displayIndentGuides = e, this.$computeTabString(), !0)
        }, this.$tabStrings = [], this.onChangeTabSize = this.$computeTabString = function () {
            var e = this.session.getTabSize();
            this.tabSize = e;
            var t = this.$tabStrings = [0];
            for (var n = 1; n < e + 1; n++)this.showInvisibles ? t.push("<span class='ace_invisible ace_invisible_tab'>" + this.TAB_CHAR + s.stringRepeat("\u00a0", n - 1) + "</span>") : t.push(s.stringRepeat("\u00a0", n));
            if (this.displayIndentGuides) {
                this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                var r = "ace_indent-guide", i = "", o = "";
                if (this.showInvisibles) {
                    r += " ace_invisible", i = " ace_invisible_space", o = " ace_invisible_tab";
                    var u = s.stringRepeat(this.SPACE_CHAR, this.tabSize), a = this.TAB_CHAR + s.stringRepeat("\u00a0", this.tabSize - 1)
                } else var u = s.stringRepeat("\u00a0", this.tabSize), a = u;
                this.$tabStrings[" "] = "<span class='" + r + i + "'>" + u + "</span>", this.$tabStrings["	"] = "<span class='" + r + o + "'>" + a + "</span>"
            }
        }, this.updateLines = function (e, t, n) {
            (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow) && this.scrollLines(e), this.config = e;
            var r = Math.max(t, e.firstRow), i = Math.min(n, e.lastRow), s = this.element.childNodes, o = 0;
            for (var u = e.firstRow; u < r; u++) {
                var a = this.session.getFoldLine(u);
                if (a) {
                    if (a.containsRow(r)) {
                        r = a.start.row;
                        break
                    }
                    u = a.end.row
                }
                o++
            }
            var u = r, a = this.session.getNextFoldLine(u), f = a ? a.start.row : Infinity;
            for (; ;) {
                u > f && (u = a.end.row + 1, a = this.session.getNextFoldLine(u, a), f = a ? a.start.row : Infinity);
                if (u > i)break;
                var l = s[o++];
                if (l) {
                    var c = [];
                    this.$renderLine(c, u, !this.$useLineGroups(), u == f ? a : !1), l.style.height = e.lineHeight * this.session.getRowLength(u) + "px", l.innerHTML = c.join("")
                }
                u++
            }
        }, this.scrollLines = function (e) {
            var t = this.config;
            this.config = e;
            if (!t || t.lastRow < e.firstRow)return this.update(e);
            if (e.lastRow < t.firstRow)return this.update(e);
            var n = this.element;
            if (t.firstRow < e.firstRow)for (var r = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); r > 0; r--)n.removeChild(n.firstChild);
            if (t.lastRow > e.lastRow)for (var r = this.session.getFoldedRowCount(e.lastRow + 1, t.lastRow); r > 0; r--)n.removeChild(n.lastChild);
            if (e.firstRow < t.firstRow) {
                var i = this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1);
                n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i)
            }
            if (e.lastRow > t.lastRow) {
                var i = this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow);
                n.appendChild(i)
            }
        }, this.$renderLinesFragment = function (e, t, n) {
            var r = this.element.ownerDocument.createDocumentFragment(), s = t, o = this.session.getNextFoldLine(s), u = o ? o.start.row : Infinity;
            for (; ;) {
                s > u && (s = o.end.row + 1, o = this.session.getNextFoldLine(s, o), u = o ? o.start.row : Infinity);
                if (s > n)break;
                var a = i.createElement("div"), f = [];
                this.$renderLine(f, s, !1, s == u ? o : !1), a.innerHTML = f.join("");
                if (this.$useLineGroups())a.className = "ace_line_group", r.appendChild(a), a.style.height = e.lineHeight * this.session.getRowLength(s) + "px"; else while (a.firstChild)r.appendChild(a.firstChild);
                s++
            }
            return r
        }, this.update = function (e) {
            this.config = e;
            var t = [], n = e.firstRow, r = e.lastRow, i = n, s = this.session.getNextFoldLine(i), o = s ? s.start.row : Infinity;
            for (; ;) {
                i > o && (i = s.end.row + 1, s = this.session.getNextFoldLine(i, s), o = s ? s.start.row : Infinity);
                if (i > r)break;
                this.$useLineGroups() && t.push("<div class='ace_line_group' style='height:", e.lineHeight * this.session.getRowLength(i), "px'>"), this.$renderLine(t, i, !1, i == o ? s : !1), this.$useLineGroups() && t.push("</div>"), i++
            }
            this.element.innerHTML = t.join("")
        }, this.$textToken = {text: !0, rparen: !0, lparen: !0}, this.$renderToken = function (e, t, n, r) {
            var i = this, o = /\t|&|<|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g, u = function (e, n, r, o, u) {
                if (n)return i.showInvisibles ? "<span class='ace_invisible ace_invisible_space'>" + s.stringRepeat(i.SPACE_CHAR, e.length) + "</span>" : s.stringRepeat("\u00a0", e.length);
                if (e == "&")return "&#38;";
                if (e == "<")return "&#60;";
                if (e == "	") {
                    var a = i.session.getScreenTabSize(t + o);
                    return t += a - 1, i.$tabStrings[a]
                }
                if (e == "\u3000") {
                    var f = i.showInvisibles ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", l = i.showInvisibles ? i.SPACE_CHAR : "";
                    return t += 1, "<span class='" + f + "' style='width:" + i.config.characterWidth * 2 + "px'>" + l + "</span>"
                }
                return r ? "<span class='ace_invisible ace_invisible_space ace_invalid'>" + i.SPACE_CHAR + "</span>" : (t += 1, "<span class='ace_cjk' style='width:" + i.config.characterWidth * 2 + "px'>" + e + "</span>")
            }, a = r.replace(o, u);
            if (!this.$textToken[n.type]) {
                var f = "ace_" + n.type.replace(/\./g, " ace_"), l = "";
                n.type == "fold" && (l = " style='width:" + n.value.length * this.config.characterWidth + "px;' "), e.push("<span class='", f, "'", l, ">", a, "</span>")
            } else e.push(a);
            return t + r.length
        }, this.renderIndentGuide = function (e, t, n) {
            var r = t.search(this.$indentGuideRe);
            return r <= 0 || r >= n ? t : t[0] == " " ? (r -= r % this.tabSize, e.push(s.stringRepeat(this.$tabStrings[" "], r / this.tabSize)), t.substr(r)) : t[0] == "	" ? (e.push(s.stringRepeat(this.$tabStrings["	"], r)), t.substr(r)) : t
        }, this.$renderWrappedLine = function (e, t, n, r) {
            var i = 0, s = 0, o = n[0], u = 0;
            for (var a = 0; a < t.length; a++) {
                var f = t[a], l = f.value;
                if (a == 0 && this.displayIndentGuides) {
                    i = l.length, l = this.renderIndentGuide(e, l, o);
                    if (!l)continue;
                    i -= l.length
                }
                if (i + l.length < o)u = this.$renderToken(e, u, f, l), i += l.length; else {
                    while (i + l.length >= o)u = this.$renderToken(e, u, f, l.substring(0, o - i)), l = l.substring(o - i), i = o, r || e.push("</div>", "<div class='ace_line' style='height:", this.config.lineHeight, "px'>"), s++, u = 0, o = n[s] || Number.MAX_VALUE;
                    l.length != 0 && (i += l.length, u = this.$renderToken(e, u, f, l))
                }
            }
        }, this.$renderSimpleLine = function (e, t) {
            var n = 0, r = t[0], i = r.value;
            this.displayIndentGuides && (i = this.renderIndentGuide(e, i)), i && (n = this.$renderToken(e, n, r, i));
            for (var s = 1; s < t.length; s++)r = t[s], i = r.value, n = this.$renderToken(e, n, r, i)
        }, this.$renderLine = function (e, t, n, r) {
            !r && r != 0 && (r = this.session.getFoldLine(t));
            if (r)var i = this.$getFoldLineTokens(t, r); else var i = this.session.getTokens(t);
            n || e.push("<div class='ace_line' style='height:", this.config.lineHeight * (this.$useLineGroups() ? 1 : this.session.getRowLength(t)), "px'>");
            if (i.length) {
                var s = this.session.getRowSplitData(t);
                s && s.length ? this.$renderWrappedLine(e, i, s, n) : this.$renderSimpleLine(e, i)
            }
            this.showInvisibles && (r && (t = r.end.row), e.push("<span class='ace_invisible ace_invisible_eol'>", t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, "</span>")), n || e.push("</div>")
        }, this.$getFoldLineTokens = function (e, t) {
            function i(e, t, n) {
                var i = 0, s = 0;
                while (s + e[i].value.length < t) {
                    s += e[i].value.length, i++;
                    if (i == e.length)return
                }
                if (s != t) {
                    var o = e[i].value.substring(t - s);
                    o.length > n - t && (o = o.substring(0, n - t)), r.push({
                        type: e[i].type,
                        value: o
                    }), s = t + o.length, i += 1
                }
                while (s < n && i < e.length) {
                    var o = e[i].value;
                    o.length + s > n ? r.push({
                        type: e[i].type,
                        value: o.substring(0, n - s)
                    }) : r.push(e[i]), s += o.length, i += 1
                }
            }

            var n = this.session, r = [], s = n.getTokens(e);
            return t.walk(function (e, t, o, u, a) {
                e != null ? r.push({type: "fold", value: e}) : (a && (s = n.getTokens(t)), s.length && i(s, u, o))
            }, t.end.row, this.session.getLine(t.end.row).length), r
        }, this.$useLineGroups = function () {
            return this.session.getUseWrapMode()
        }, this.destroy = function () {
            clearInterval(this.$pollSizeChangesTimer), this.$measureNode && this.$measureNode.parentNode.removeChild(this.$measureNode), delete this.$measureNode
        }
    }).call(a.prototype), t.Text = a
}), define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    var r = e("../lib/dom"), i, s = function (e) {
        this.element = r.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", e.appendChild(this.element), i === undefined && (i = "opacity"in this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), r.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateVisibility.bind(this)
    };
    (function () {
        this.$updateVisibility = function (e) {
            var t = this.cursors;
            for (var n = t.length; n--;)t[n].style.visibility = e ? "" : "hidden"
        }, this.$updateOpacity = function (e) {
            var t = this.cursors;
            for (var n = t.length; n--;)t[n].style.opacity = e ? "" : "0"
        }, this.$padding = 0, this.setPadding = function (e) {
            this.$padding = e
        }, this.setSession = function (e) {
            this.session = e
        }, this.setBlinking = function (e) {
            e != this.isBlinking && (this.isBlinking = e, this.restartTimer())
        }, this.setBlinkInterval = function (e) {
            e != this.blinkInterval && (this.blinkInterval = e, this.restartTimer())
        }, this.setSmoothBlinking = function (e) {
            e != this.smoothBlinking && !i && (this.smoothBlinking = e, r.setCssClass(this.element, "ace_smooth-blinking", e), this.$updateCursors(!0), this.$updateCursors = (e ? this.$updateOpacity : this.$updateVisibility).bind(this), this.restartTimer())
        }, this.addCursor = function () {
            var e = r.createElement("div");
            return e.className = "ace_cursor", this.element.appendChild(e), this.cursors.push(e), e
        }, this.removeCursor = function () {
            if (this.cursors.length > 1) {
                var e = this.cursors.pop();
                return e.parentNode.removeChild(e), e
            }
        }, this.hideCursor = function () {
            this.isVisible = !1, r.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
        }, this.showCursor = function () {
            this.isVisible = !0, r.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
        }, this.restartTimer = function () {
            var e = this.$updateCursors;
            clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.smoothBlinking && r.removeCssClass(this.element, "ace_smooth-blinking"), e(!0);
            if (!this.isBlinking || !this.blinkInterval || !this.isVisible)return;
            this.smoothBlinking && setTimeout(function () {
                r.addCssClass(this.element, "ace_smooth-blinking")
            }.bind(this));
            var t = function () {
                this.timeoutId = setTimeout(function () {
                    e(!1)
                }, .6 * this.blinkInterval)
            }.bind(this);
            this.intervalId = setInterval(function () {
                e(!0), t()
            }, this.blinkInterval), t()
        }, this.getPixelPosition = function (e, t) {
            if (!this.config || !this.session)return {left: 0, top: 0};
            e || (e = this.session.selection.getCursor());
            var n = this.session.documentToScreenPosition(e), r = this.$padding + n.column * this.config.characterWidth, i = (n.row - (t ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
            return {left: r, top: i}
        }, this.update = function (e) {
            this.config = e;
            var t = this.session.$selectionMarkers, n = 0, r = 0;
            if (t === undefined || t.length === 0)t = [{cursor: null}];
            for (var n = 0, i = t.length; n < i; n++) {
                var s = this.getPixelPosition(t[n].cursor, !0);
                if ((s.top > e.height + e.offset || s.top < 0) && n > 1)continue;
                var o = (this.cursors[r++] || this.addCursor()).style;
                o.left = s.left + "px", o.top = s.top + "px", o.width = e.characterWidth + "px", o.height = e.lineHeight + "px"
            }
            while (this.cursors.length > r)this.removeCursor();
            var u = this.session.getOverwrite();
            this.$setOverwrite(u), this.$pixelPos = s, this.restartTimer()
        }, this.$setOverwrite = function (e) {
            e != this.overwrite && (this.overwrite = e, e ? r.addCssClass(this.element, "ace_overwrite-cursors") : r.removeCssClass(this.element, "ace_overwrite-cursors"))
        }, this.destroy = function () {
            clearInterval(this.intervalId), clearTimeout(this.timeoutId)
        }
    }).call(s.prototype), t.Cursor = s
}), define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"), i = e("./lib/dom"), s = e("./lib/event"), o = e("./lib/event_emitter").EventEmitter, u = function (e) {
        this.element = i.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix, this.inner = i.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.element.appendChild(this.inner), e.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, s.addListener(this.element, "scroll", this.onScroll.bind(this)), s.addListener(this.element, "mousedown", s.preventDefault)
    };
    (function () {
        r.implement(this, o), this.setVisible = function (e) {
            this.element.style.display = e ? "" : "none", this.isVisible = e
        }
    }).call(u.prototype);
    var a = function (e, t) {
        u.call(this, e), this.scrollTop = 0, t.$scrollbarWidth = this.width = i.scrollbarWidth(e.ownerDocument), this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px"
    };
    r.inherits(a, u), function () {
        this.classSuffix = "-v", this.onScroll = function () {
            this.skipEvent || (this.scrollTop = this.element.scrollTop, this._emit("scroll", {data: this.scrollTop})), this.skipEvent = !1
        }, this.getWidth = function () {
            return this.isVisible ? this.width : 0
        }, this.setHeight = function (e) {
            this.element.style.height = e + "px"
        }, this.setInnerHeight = function (e) {
            this.inner.style.height = e + "px"
        }, this.setScrollHeight = function (e) {
            this.inner.style.height = e + "px"
        }, this.setScrollTop = function (e) {
            this.scrollTop != e && (this.skipEvent = !0, this.scrollTop = this.element.scrollTop = e)
        }
    }.call(a.prototype);
    var f = function (e, t) {
        u.call(this, e), this.scrollLeft = 0, this.height = t.$scrollbarWidth, this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px"
    };
    r.inherits(f, u), function () {
        this.classSuffix = "-h", this.onScroll = function () {
            this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", {data: this.scrollLeft})), this.skipEvent = !1
        }, this.getHeight = function () {
            return this.isVisible ? this.height : 0
        }, this.setWidth = function (e) {
            this.element.style.width = e + "px"
        }, this.setInnerWidth = function (e) {
            this.inner.style.width = e + "px"
        }, this.setScrollWidth = function (e) {
            this.inner.style.width = e + "px"
        }, this.setScrollLeft = function (e) {
            this.scrollLeft != e && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = e)
        }
    }.call(f.prototype), t.ScrollBar = a, t.ScrollBarV = a, t.ScrollBarH = f, t.VScrollBar = a, t.HScrollBar = f
}), define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function (e, t, n) {
    "use strict";
    var r = e("./lib/event"), i = function (e, t) {
        this.onRender = e, this.pending = !1, this.changes = 0, this.window = t || window
    };
    (function () {
        this.schedule = function (e) {
            this.changes = this.changes | e;
            if (!this.pending && this.changes) {
                this.pending = !0;
                var t = this;
                r.nextFrame(function () {
                    t.pending = !1;
                    var e;
                    while (e = t.changes)t.changes = 0, t.onRender(e)
                }, this.window)
            }
        }
    }).call(i.prototype), t.RenderLoop = i
}), define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], function (e, t, n) {
    var r = e("../lib/oop"), i = e("../lib/dom"), s = e("../lib/lang"), o = e("../lib/useragent"), u = e("../lib/event_emitter").EventEmitter, a = 0, f = t.FontMetrics = function (e, t) {
        this.el = i.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = i.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = i.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), e.appendChild(this.el), a || this.$testFractionalRect(), this.$measureNode.innerHTML = s.stringRepeat("X", a), this.$characterSize = {
            width: 0,
            height: 0
        }, this.checkForSizeChanges()
    };
    (function () {
        r.implement(this, u), this.$characterSize = {width: 0, height: 0}, this.$testFractionalRect = function () {
            var e = i.createElement("div");
            this.$setMeasureNodeStyles(e.style), e.style.width = "0.2px", document.documentElement.appendChild(e);
            var t = e.getBoundingClientRect().width;
            t > 0 && t < 1 ? a = 50 : a = 100, e.parentNode.removeChild(e)
        }, this.$setMeasureNodeStyles = function (e, t) {
            e.width = e.height = "auto", e.left = e.top = "-100px", e.visibility = "hidden", e.position = "fixed", e.whiteSpace = "pre", o.isIE < 8 ? e["font-family"] = "inherit" : e.font = "inherit", e.overflow = t ? "hidden" : "visible"
        }, this.checkForSizeChanges = function () {
            var e = this.$measureSizes();
            if (e && (this.$characterSize.width !== e.width || this.$characterSize.height !== e.height)) {
                this.$measureNode.style.fontWeight = "bold";
                var t = this.$measureSizes();
                this.$measureNode.style.fontWeight = "", this.$characterSize = e, this.charSizes = Object.create(null), this.allowBoldFonts = t && t.width === e.width && t.height === e.height, this._emit("changeCharacterSize", {data: e})
            }
        }, this.$pollSizeChanges = function () {
            if (this.$pollSizeChangesTimer)return this.$pollSizeChangesTimer;
            var e = this;
            return this.$pollSizeChangesTimer = setInterval(function () {
                e.checkForSizeChanges()
            }, 500)
        }, this.setPolling = function (e) {
            e ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && this.$pollSizeChangesTimer
        }, this.$measureSizes = function () {
            if (a === 50) {
                var e = null;
                try {
                    e = this.$measureNode.getBoundingClientRect()
                } catch (t) {
                    e = {width: 0, height: 0}
                }
                var n = {height: e.height, width: e.width / a}
            } else var n = {height: this.$measureNode.clientHeight, width: this.$measureNode.clientWidth / a};
            return n.width === 0 || n.height === 0 ? null : n
        }, this.$measureCharWidth = function (e) {
            this.$main.innerHTML = s.stringRepeat(e, a);
            var t = this.$main.getBoundingClientRect();
            return t.width / a
        }, this.getCharacterWidth = function (e) {
            var t = this.charSizes[e];
            return t === undefined && (this.charSizes[e] = this.$measureCharWidth(e) / this.$characterSize.width), t
        }, this.destroy = function () {
            clearInterval(this.$pollSizeChangesTimer), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
        }
    }).call(f.prototype)
}), define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/lib/useragent", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter"], function (e, t, n) {
    "use strict";
    var r = e("./lib/oop"), i = e("./lib/dom"), s = e("./config"), o = e("./lib/useragent"), u = e("./layer/gutter").Gutter, a = e("./layer/marker").Marker, f = e("./layer/text").Text, l = e("./layer/cursor").Cursor, c = e("./scrollbar").HScrollBar, h = e("./scrollbar").VScrollBar, p = e("./renderloop").RenderLoop, d = e("./layer/font_metrics").FontMetrics, v = e("./lib/event_emitter").EventEmitter, m = '.ace_editor {position: relative;overflow: hidden;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;min-width: 100%;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;}.ace_text-input.ace_composition {background: inherit;color: inherit;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-webkit-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-webkit-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-webkit-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}';
    i.importCssString(m, "ace_editor");
    var g = function (e, t) {
        var n = this;
        this.container = e || i.createElement("div"), this.$keepTextAreaAtCursor = !o.isOldIE, i.addCssClass(this.container, "ace_editor"), this.setTheme(t), this.$gutter = i.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.scroller = i.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = i.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new u(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new a(this.content);
        var r = this.$textLayer = new f(this.content);
        this.canvas = r.element, this.$markerFront = new a(this.content), this.$cursorLayer = new l(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new h(this.container, this), this.scrollBarH = new c(this.container, this), this.scrollBarV.addEventListener("scroll", function (e) {
            n.$scrollAnimation || n.session.setScrollTop(e.data - n.scrollMargin.top)
        }), this.scrollBarH.addEventListener("scroll", function (e) {
            n.$scrollAnimation || n.session.setScrollLeft(e.data - n.scrollMargin.left)
        }), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
            row: 0,
            column: 0
        }, this.$fontMetrics = new d(this.container, 500), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.addEventListener("changeCharacterSize", function (e) {
            n.updateCharacterSize(), n.onResize(!0, n.gutterWidth, n.$size.width, n.$size.height), n._signal("changeCharacterSize", e)
        }), this.$size = {
            width: 0,
            height: 0,
            scrollerHeight: 0,
            scrollerWidth: 0,
            $dirty: !0
        }, this.layerConfig = {
            width: 1,
            padding: 0,
            firstRow: 0,
            firstRowScreen: 0,
            lastRow: 0,
            lineHeight: 0,
            characterWidth: 0,
            minHeight: 1,
            maxHeight: 1,
            offset: 0,
            height: 1,
            gutterOffset: 1
        }, this.scrollMargin = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            v: 0,
            h: 0
        }, this.$loop = new p(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), s.resetOptions(this), s._emit("renderer", this)
    };
    (function () {
        this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4, this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT = 32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this.CHANGE_H_SCROLL = 1024, r.implement(this, v), this.updateCharacterSize = function () {
            this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin()
        }, this.setSession = function (e) {
            this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = e, e && this.scrollMargin.top && e.getScrollTop() <= 0 && e.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(e), this.$markerBack.setSession(e), this.$markerFront.setSession(e), this.$gutterLayer.setSession(e), this.$textLayer.setSession(e);
            if (!e)return;
            this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode)
        }, this.updateLines = function (e, t, n) {
            t === undefined && (t = Infinity), this.$changedLines ? (this.$changedLines.firstRow > e && (this.$changedLines.firstRow = e), this.$changedLines.lastRow < t && (this.$changedLines.lastRow = t)) : this.$changedLines = {
                firstRow: e,
                lastRow: t
            };
            if (this.$changedLines.lastRow < this.layerConfig.firstRow) {
                if (!n)return;
                this.$changedLines.lastRow = this.layerConfig.lastRow
            }
            if (this.$changedLines.firstRow > this.layerConfig.lastRow)return;
            this.$loop.schedule(this.CHANGE_LINES)
        }, this.onChangeNewLineMode = function () {
            this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar()
        }, this.onChangeTabSize = function () {
            this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize()
        }, this.updateText = function () {
            this.$loop.schedule(this.CHANGE_TEXT)
        }, this.updateFull = function (e) {
            e ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL)
        }, this.updateFontSize = function () {
            this.$textLayer.checkForSizeChanges()
        }, this.$changes = 0, this.$updateSizeAsync = function () {
            this.$loop.pending ? this.$size.$dirty = !0 : this.onResize()
        }, this.onResize = function (e, t, n, r) {
            if (this.resizing > 2)return;
            this.resizing > 0 ? this.resizing++ : this.resizing = e ? 1 : 0;
            var i = this.container;
            r || (r = i.clientHeight || i.scrollHeight), n || (n = i.clientWidth || i.scrollWidth);
            var s = this.$updateCachedSize(e, t, n, r);
            if (!this.$size.scrollerHeight || !n && !r)return this.resizing = 0;
            e && (this.$gutterLayer.$padding = null), e ? this.$renderChanges(s | this.$changes, !0) : this.$loop.schedule(s | this.$changes), this.resizing && (this.resizing = 0)
        }, this.$updateCachedSize = function (e, t, n, r) {
            r -= this.$extraHeight || 0;
            var i = 0, s = this.$size, o = {
                width: s.width,
                height: s.height,
                scrollerHeight: s.scrollerHeight,
                scrollerWidth: s.scrollerWidth
            };
            r && (e || s.height != r) && (s.height = r, i |= this.CHANGE_SIZE, s.scrollerHeight = s.height, this.$horizScroll && (s.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", i |= this.CHANGE_SCROLL);
            if (n && (e || s.width != n)) {
                i |= this.CHANGE_SIZE, s.width = n, t == null && (t = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = t, this.scrollBarH.element.style.left = this.scroller.style.left = t + "px", s.scrollerWidth = Math.max(0, n - t - this.scrollBarV.getWidth()), this.scrollBarH.element.style.right = this.scroller.style.right = this.scrollBarV.getWidth() + "px", this.scroller.style.bottom = this.scrollBarH.getHeight() + "px";
                if (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || e)i |= this.CHANGE_FULL
            }
            return s.$dirty = !n || !r, i && this._signal("resize", o), i
        }, this.onGutterResize = function () {
            var e = this.$showGutter ? this.$gutter.offsetWidth : 0;
            e != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, e, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : (this.$computeLayerConfig(), this.$loop.schedule(this.CHANGE_MARKER))
        }, this.adjustWrapLimit = function () {
            var e = this.$size.scrollerWidth - this.$padding * 2, t = Math.floor(e / this.characterWidth);
            return this.session.adjustWrapLimit(t, this.$showPrintMargin && this.$printMarginColumn)
        }, this.setAnimatedScroll = function (e) {
            this.setOption("animatedScroll", e)
        }, this.getAnimatedScroll = function () {
            return this.$animatedScroll
        }, this.setShowInvisibles = function (e) {
            this.setOption("showInvisibles", e)
        }, this.getShowInvisibles = function () {
            return this.getOption("showInvisibles")
        }, this.getDisplayIndentGuides = function () {
            return this.getOption("displayIndentGuides")
        }, this.setDisplayIndentGuides = function (e) {
            this.setOption("displayIndentGuides", e)
        }, this.setShowPrintMargin = function (e) {
            this.setOption("showPrintMargin", e)
        }, this.getShowPrintMargin = function () {
            return this.getOption("showPrintMargin")
        }, this.setPrintMarginColumn = function (e) {
            this.setOption("printMarginColumn", e)
        }, this.getPrintMarginColumn = function () {
            return this.getOption("printMarginColumn")
        }, this.getShowGutter = function () {
            return this.getOption("showGutter")
        }, this.setShowGutter = function (e) {
            return this.setOption("showGutter", e)
        }, this.getFadeFoldWidgets = function () {
            return this.getOption("fadeFoldWidgets")
        }, this.setFadeFoldWidgets = function (e) {
            this.setOption("fadeFoldWidgets", e)
        }, this.setHighlightGutterLine = function (e) {
            this.setOption("highlightGutterLine", e)
        }, this.getHighlightGutterLine = function () {
            return this.getOption("highlightGutterLine")
        }, this.$updateGutterLineHighlight = function () {
            var e = this.$cursorLayer.$pixelPos, t = this.layerConfig.lineHeight;
            if (this.session.getUseWrapMode()) {
                var n = this.session.selection.getCursor();
                n.column = 0, e = this.$cursorLayer.getPixelPosition(n, !0), t *= this.session.getRowLength(n.row)
            }
            this.$gutterLineHighlight.style.top = e.top - this.layerConfig.offset + "px", this.$gutterLineHighlight.style.height = t + "px"
        }, this.$updatePrintMargin = function () {
            if (!this.$showPrintMargin && !this.$printMarginEl)return;
            if (!this.$printMarginEl) {
                var e = i.createElement("div");
                e.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = i.createElement("div"), this.$printMarginEl.className = "ace_print-margin", e.appendChild(this.$printMarginEl), this.content.insertBefore(e, this.content.firstChild)
            }
            var t = this.$printMarginEl.style;
            t.left = this.characterWidth * this.$printMarginColumn + this.$padding + "px", t.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && this.session.$wrap == -1 && this.adjustWrapLimit()
        }, this.getContainerElement = function () {
            return this.container
        }, this.getMouseEventTarget = function () {
            return this.content
        }, this.getTextAreaContainer = function () {
            return this.container
        }, this.$moveTextAreaToCursor = function () {
            if (!this.$keepTextAreaAtCursor)return;
            var e = this.layerConfig, t = this.$cursorLayer.$pixelPos.top, n = this.$cursorLayer.$pixelPos.left;
            t -= e.offset;
            var r = this.lineHeight;
            if (t < 0 || t > e.height - r)return;
            var i = this.characterWidth;
            if (this.$composition) {
                var s = this.textarea.value.replace(/^\x01+/, "");
                i *= this.session.$getStringScreenWidth(s)[0] + 2, r += 2
            }
            n -= this.scrollLeft, n > this.$size.scrollerWidth - i && (n = this.$size.scrollerWidth - i), n += this.gutterWidth, this.textarea.style.height = r + "px", this.textarea.style.width = i + "px", this.textarea.style.left = Math.min(n, this.$size.scrollerWidth - i) + "px", this.textarea.style.top = Math.min(t, this.$size.height - r) + "px"
        }, this.getFirstVisibleRow = function () {
            return this.layerConfig.firstRow
        }, this.getFirstFullyVisibleRow = function () {
            return this.layerConfig.firstRow + (this.layerConfig.offset === 0 ? 0 : 1)
        }, this.getLastFullyVisibleRow = function () {
            var e = Math.floor((this.layerConfig.height + this.layerConfig.offset) / this.layerConfig.lineHeight);
            return this.layerConfig.firstRow - 1 + e
        }, this.getLastVisibleRow = function () {
            return this.layerConfig.lastRow
        }, this.$padding = null, this.setPadding = function (e) {
            this.$padding = e, this.$textLayer.setPadding(e), this.$cursorLayer.setPadding(e), this.$markerFront.setPadding(e), this.$markerBack.setPadding(e), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin()
        }, this.setScrollMargin = function (e, t, n, r) {
            var i = this.scrollMargin;
            i.top = e | 0, i.bottom = t | 0, i.right = r | 0, i.left = n | 0, i.v = i.top + i.bottom, i.h = i.left + i.right, i.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-i.top), this.updateFull()
        }, this.getHScrollBarAlwaysVisible = function () {
            return this.$hScrollBarAlwaysVisible
        }, this.setHScrollBarAlwaysVisible = function (e) {
            this.setOption("hScrollBarAlwaysVisible", e)
        }, this.getVScrollBarAlwaysVisible = function () {
            return this.$hScrollBarAlwaysVisible
        }, this.setVScrollBarAlwaysVisible = function (e) {
            this.setOption("vScrollBarAlwaysVisible", e)
        }, this.$updateScrollBarV = function () {
            var e = this.layerConfig.maxHeight, t = this.$size.scrollerHeight;
            !this.$maxLines && this.$scrollPastEnd && (e -= (t - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > e - t && (e = this.scrollTop + t, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(e + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top)
        }, this.$updateScrollBarH = function () {
            this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left)
        }, this.$frozen = !1, this.freeze = function () {
            this.$frozen = !0
        }, this.unfreeze = function () {
            this.$frozen = !1
        }, this.$renderChanges = function (e, t) {
            this.$changes && (e |= this.$changes, this.$changes = 0);
            if (!this.session || !this.container.offsetWidth || this.$frozen || !e && !t) {
                this.$changes |= e;
                return
            }
            if (this.$size.$dirty)return this.$changes |= e, this.onResize(!0);
            this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender");
            var n = this.layerConfig;
            if (e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this.CHANGE_TEXT || e & this.CHANGE_LINES || e & this.CHANGE_SCROLL || e & this.CHANGE_H_SCROLL) {
                e |= this.$computeLayerConfig();
                if (n.firstRow != this.layerConfig.firstRow && n.firstRowScreen == this.layerConfig.firstRowScreen) {
                    var r = this.scrollTop + (n.firstRow - this.layerConfig.firstRow) * this.lineHeight;
                    r > 0 && (this.scrollTop = r, e |= this.CHANGE_SCROLL, e |= this.$computeLayerConfig())
                }
                n = this.layerConfig, this.$updateScrollBarV(), e & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), this.$gutterLayer.element.style.marginTop = -n.offset + "px", this.content.style.marginTop = -n.offset + "px", this.content.style.width = n.width + 2 * this.$padding + "px", this.content.style.height = n.minHeight + "px"
            }
            e & this.CHANGE_H_SCROLL && (this.content.style.marginLeft = -this.scrollLeft + "px", this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left");
            if (e & this.CHANGE_FULL) {
                this.$textLayer.update(n), this.$showGutter && this.$gutterLayer.update(n), this.$markerBack.update(n), this.$markerFront.update(n), this.$cursorLayer.update(n), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight(), this._signal("afterRender");
                return
            }
            if (e & this.CHANGE_SCROLL) {
                e & this.CHANGE_TEXT || e & this.CHANGE_LINES ? this.$textLayer.update(n) : this.$textLayer.scrollLines(n), this.$showGutter && this.$gutterLayer.update(n), this.$markerBack.update(n), this.$markerFront.update(n), this.$cursorLayer.update(n), this.$highlightGutterLine && this.$updateGutterLineHighlight(), this.$moveTextAreaToCursor(), this._signal("afterRender");
                return
            }
            e & this.CHANGE_TEXT ? (this.$textLayer.update(n), this.$showGutter && this.$gutterLayer.update(n)) : e & this.CHANGE_LINES ? (this.$updateLines() || e & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(n) : (e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER) && this.$showGutter && this.$gutterLayer.update(n), e & this.CHANGE_CURSOR && (this.$cursorLayer.update(n), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight()), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(n), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(n), this._signal("afterRender")
        }, this.$autosize = function () {
            var e = this.session.getScreenLength() * this.lineHeight, t = this.$maxLines * this.lineHeight, n = Math.max((this.$minLines || 1) * this.lineHeight, Math.min(t, e)) + this.scrollMargin.v + (this.$extraHeight || 0), r = e > t;
            if (n != this.desiredHeight || this.$size.height != this.desiredHeight || r != this.$vScroll) {
                r != this.$vScroll && (this.$vScroll = r, this.scrollBarV.setVisible(r));
                var i = this.container.clientWidth;
                this.container.style.height = n + "px", this.$updateCachedSize(!0, this.$gutterWidth, i, n), this.desiredHeight = n, this._signal("autosize")
            }
        }, this.$computeLayerConfig = function () {
            this.$maxLines && this.lineHeight > 1 && this.$autosize();
            var e = this.session, t = this.$size, n = t.height <= 2 * this.lineHeight, r = this.session.getScreenLength(), i = r * this.lineHeight, s = this.scrollTop % this.lineHeight, o = t.scrollerHeight + this.lineHeight, u = this.$getLongestLine(), a = !n && (this.$hScrollBarAlwaysVisible || t.scrollerWidth - u - 2 * this.$padding < 0), f = this.$horizScroll !== a;
            f && (this.$horizScroll = a, this.scrollBarH.setVisible(a)), !this.$maxLines && this.$scrollPastEnd && (i += (t.scrollerHeight - this.lineHeight) * this.$scrollPastEnd);
            var l = !n && (this.$vScrollBarAlwaysVisible || t.scrollerHeight - i < 0), c = this.$vScroll !== l;
            c && (this.$vScroll = l, this.scrollBarV.setVisible(l)), this.session.setScrollTop(Math.max(-this.scrollMargin.top, Math.min(this.scrollTop, i - t.scrollerHeight + this.scrollMargin.bottom))), this.session.setScrollLeft(Math.max(-this.scrollMargin.left, Math.min(this.scrollLeft, u + 2 * this.$padding - t.scrollerWidth + this.scrollMargin.right)));
            var h = Math.ceil(o / this.lineHeight) - 1, p = Math.max(0, Math.round((this.scrollTop - s) / this.lineHeight)), d = p + h, v, m, g = this.lineHeight;
            p = e.screenToDocumentRow(p, 0);
            var y = e.getFoldLine(p);
            y && (p = y.start.row), v = e.documentToScreenRow(p, 0), m = e.getRowLength(p) * g, d = Math.min(e.screenToDocumentRow(d, 0), e.getLength() - 1), o = t.scrollerHeight + e.getRowLength(d) * g + m, s = this.scrollTop - v * g;
            var b = 0;
            this.layerConfig.width != u && (b = this.CHANGE_H_SCROLL);
            if (f || c)b = this.$updateCachedSize(!0, this.gutterWidth, t.width, t.height), this._signal("scrollbarVisibilityChanged"), c && (u = this.$getLongestLine());
            return this.layerConfig = {
                width: u,
                padding: this.$padding,
                firstRow: p,
                firstRowScreen: v,
                lastRow: d,
                lineHeight: g,
                characterWidth: this.characterWidth,
                minHeight: o,
                maxHeight: i,
                offset: s,
                gutterOffset: Math.max(0, Math.ceil((s + t.height - t.scrollerHeight) / g)),
                height: this.$size.scrollerHeight
            }, b
        }, this.$updateLines = function () {
            var e = this.$changedLines.firstRow, t = this.$changedLines.lastRow;
            this.$changedLines = null;
            var n = this.layerConfig;
            if (e > n.lastRow + 1)return;
            if (t < n.firstRow)return;
            if (t === Infinity) {
                this.$showGutter && this.$gutterLayer.update(n), this.$textLayer.update(n);
                return
            }
            return this.$textLayer.updateLines(n, e, t), !0
        }, this.$getLongestLine = function () {
            var e = this.session.getScreenWidth();
            return this.showInvisibles && !this.session.$useWrapMode && (e += 1), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(e * this.characterWidth))
        }, this.updateFrontMarkers = function () {
            this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT)
        }, this.updateBackMarkers = function () {
            this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK)
        }, this.addGutterDecoration = function (e, t) {
            this.$gutterLayer.addGutterDecoration(e, t)
        }, this.removeGutterDecoration = function (e, t) {
            this.$gutterLayer.removeGutterDecoration(e, t)
        }, this.updateBreakpoints = function (e) {
            this.$loop.schedule(this.CHANGE_GUTTER)
        }, this.setAnnotations = function (e) {
            this.$gutterLayer.setAnnotations(e), this.$loop.schedule(this.CHANGE_GUTTER)
        }, this.updateCursor = function () {
            this.$loop.schedule(this.CHANGE_CURSOR)
        }, this.hideCursor = function () {
            this.$cursorLayer.hideCursor()
        }, this.showCursor = function () {
            this.$cursorLayer.showCursor()
        }, this.scrollSelectionIntoView = function (e, t, n) {
            this.scrollCursorIntoView(e, n), this.scrollCursorIntoView(t, n)
        }, this.scrollCursorIntoView = function (e, t, n) {
            if (this.$size.scrollerHeight === 0)return;
            var r = this.$cursorLayer.getPixelPosition(e), i = r.left, s = r.top, o = n && n.top || 0, u = n && n.bottom || 0, a = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
            a + o > s ? (t && (s -= t * this.$size.scrollerHeight), s === 0 && (s = -this.scrollMargin.top), this.session.setScrollTop(s)) : a + this.$size.scrollerHeight - u < s + this.lineHeight && (t && (s += t * this.$size.scrollerHeight), this.session.setScrollTop(s + this.lineHeight - this.$size.scrollerHeight));
            var f = this.scrollLeft;
            f > i ? (i < this.$padding + 2 * this.layerConfig.characterWidth && (i = -this.scrollMargin.left), this.session.setScrollLeft(i)) : f + this.$size.scrollerWidth < i + this.characterWidth ? this.session.setScrollLeft(Math.round(i + this.characterWidth - this.$size.scrollerWidth)) : f <= this.$padding && i - f < this.characterWidth && this.session.setScrollLeft(0)
        }, this.getScrollTop = function () {
            return this.session.getScrollTop()
        }, this.getScrollLeft = function () {
            return this.session.getScrollLeft()
        }, this.getScrollTopRow = function () {
            return this.scrollTop / this.lineHeight
        }, this.getScrollBottomRow = function () {
            return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1)
        }, this.scrollToRow = function (e) {
            this.session.setScrollTop(e * this.lineHeight)
        }, this.alignCursor = function (e, t) {
            typeof e == "number" && (e = {row: e, column: 0});
            var n = this.$cursorLayer.getPixelPosition(e), r = this.$size.scrollerHeight - this.lineHeight, i = n.top - r * (t || 0);
            return this.session.setScrollTop(i), i
        }, this.STEPS = 8, this.$calcSteps = function (e, t) {
            var n = 0, r = this.STEPS, i = [], s = function (e, t, n) {
                return n * (Math.pow(e - 1, 3) + 1) + t
            };
            for (n = 0; n < r; ++n)i.push(s(n / this.STEPS, e, t - e));
            return i
        }, this.scrollToLine = function (e, t, n, r) {
            var i = this.$cursorLayer.getPixelPosition({row: e, column: 0}), s = i.top;
            t && (s -= this.$size.scrollerHeight / 2);
            var o = this.scrollTop;
            this.session.setScrollTop(s), n !== !1 && this.animateScrolling(o, r)
        }, this.animateScrolling = function (e, t) {
            var n = this.scrollTop;
            if (!this.$animatedScroll)return;
            var r = this;
            if (e == n)return;
            if (this.$scrollAnimation) {
                var i = this.$scrollAnimation.steps;
                if (i.length) {
                    e = i[0];
                    if (e == n)return
                }
            }
            var s = r.$calcSteps(e, n);
            this.$scrollAnimation = {
                from: e,
                to: n,
                steps: s
            }, clearInterval(this.$timer), r.session.setScrollTop(s.shift()), r.session.$scrollTop = n, this.$timer = setInterval(function () {
                s.length ? (r.session.setScrollTop(s.shift()), r.session.$scrollTop = n) : n != null ? (r.session.$scrollTop = -1, r.session.setScrollTop(n), n = null) : (r.$timer = clearInterval(r.$timer), r.$scrollAnimation = null, t && t())
            }, 10)
        }, this.scrollToY = function (e) {
            this.scrollTop !== e && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = e)
        }, this.scrollToX = function (e) {
            this.scrollLeft !== e && (this.scrollLeft = e), this.$loop.schedule(this.CHANGE_H_SCROLL)
        }, this.scrollTo = function (e, t) {
            this.session.setScrollTop(t), this.session.setScrollLeft(t)
        }, this.scrollBy = function (e, t) {
            t && this.session.setScrollTop(this.session.getScrollTop() + t), e && this.session.setScrollLeft(this.session.getScrollLeft() + e)
        }, this.isScrollableBy = function (e, t) {
            if (t < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top)return !0;
            if (t > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom)return !0;
            if (e < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left)return !0;
            if (e > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right)return !0
        }, this.pixelToScreenCoordinates = function (e, t) {
            var n = this.scroller.getBoundingClientRect(), r = (e + this.scrollLeft - n.left - this.$padding) / this.characterWidth, i = Math.floor((t + this.scrollTop - n.top) / this.lineHeight), s = Math.round(r);
            return {row: i, column: s, side: r - s > 0 ? 1 : -1}
        }, this.screenToTextCoordinates = function (e, t) {
            var n = this.scroller.getBoundingClientRect(), r = Math.round((e + this.scrollLeft - n.left - this.$padding) / this.characterWidth), i = (t + this.scrollTop - n.top) / this.lineHeight;
            return this.session.screenToDocumentPosition(i, Math.max(r, 0))
        }, this.textToScreenCoordinates = function (e, t) {
            var n = this.scroller.getBoundingClientRect(), r = this.session.documentToScreenPosition(e, t), i = this.$padding + Math.round(r.column * this.characterWidth), s = r.row * this.lineHeight;
            return {pageX: n.left + i - this.scrollLeft, pageY: n.top + s - this.scrollTop}
        }, this.visualizeFocus = function () {
            i.addCssClass(this.container, "ace_focus")
        }, this.visualizeBlur = function () {
            i.removeCssClass(this.container, "ace_focus")
        }, this.showComposition = function (e) {
            this.$composition || (this.$composition = {
                keepTextAreaAtCursor: this.$keepTextAreaAtCursor,
                cssText: this.textarea.style.cssText
            }), this.$keepTextAreaAtCursor = !0, i.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor()
        },this.setCompositionText = function (e) {
            this.$moveTextAreaToCursor()
        },this.hideComposition = function () {
            if (!this.$composition)return;
            i.removeCssClass(this.textarea, "ace_composition"), this.$keepTextAreaAtCursor = this.$composition.keepTextAreaAtCursor, this.textarea.style.cssText = this.$composition.cssText, this.$composition = null
        },this.setTheme = function (e, t) {
            function o(r) {
                if (n.$themeId != e)return t && t();
                if (!r.cssClass)return;
                i.importCssString(r.cssText, r.cssClass, n.container.ownerDocument), n.theme && i.removeCssClass(n.container, n.theme.cssClass);
                var s = "padding"in r ? r.padding : "padding"in(n.theme || {}) ? 4 : n.$padding;
                n.$padding && s != n.$padding && n.setPadding(s), n.$theme = r.cssClass, n.theme = r, i.addCssClass(n.container, r.cssClass), i.setCssClass(n.container, "ace_dark", r.isDark), n.$size && (n.$size.width = 0, n.$updateSizeAsync()), n._dispatchEvent("themeLoaded", {theme: r}), t && t()
            }

            var n = this;
            this.$themeId = e, n._dispatchEvent("themeChange", {theme: e});
            if (!e || typeof e == "string") {
                var r = e || this.$options.theme.initialValue;
                s.loadModule(["theme", r], o)
            } else o(e)
        },this.getTheme = function () {
            return this.$themeId
        },this.setStyle = function (e, t) {
            i.setCssClass(this.container, e, t !== !1)
        },this.unsetStyle = function (e) {
            i.removeCssClass(this.container, e)
        },this.setCursorStyle = function (e) {
            this.scroller.style.cursor != e && (this.scroller.style.cursor = e)
        },this.setMouseCursor = function (e) {
            this.scroller.style.cursor = e
        },this.destroy = function () {
            this.$textLayer.destroy(), this.$cursorLayer.destroy()
        }
    }).call(g.prototype), s.defineOptions(g.prototype, "renderer", {
        animatedScroll: {initialValue: !1},
        showInvisibles: {
            set: function (e) {
                this.$textLayer.setShowInvisibles(e) && this.$loop.schedule(this.CHANGE_TEXT)
            }, initialValue: !1
        },
        showPrintMargin: {
            set: function () {
                this.$updatePrintMargin()
            }, initialValue: !0
        },
        printMarginColumn: {
            set: function () {
                this.$updatePrintMargin()
            }, initialValue: 80
        },
        printMargin: {
            set: function (e) {
                typeof e == "number" && (this.$printMarginColumn = e), this.$showPrintMargin = !!e, this.$updatePrintMargin()
            }, get: function () {
                return this.$showPrintMargin && this.$printMarginColumn
            }
        },
        showGutter: {
            set: function (e) {
                this.$gutter.style.display = e ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize()
            }, initialValue: !0
        },
        fadeFoldWidgets: {
            set: function (e) {
                i.setCssClass(this.$gutter, "ace_fade-fold-widgets", e)
            }, initialValue: !1
        },
        showFoldWidgets: {
            set: function (e) {
                this.$gutterLayer.setShowFoldWidgets(e)
            }, initialValue: !0
        },
        showLineNumbers: {
            set: function (e) {
                this.$gutterLayer.setShowLineNumbers(e), this.$loop.schedule(this.CHANGE_GUTTER)
            }, initialValue: !0
        },
        displayIndentGuides: {
            set: function (e) {
                this.$textLayer.setDisplayIndentGuides(e) && this.$loop.schedule(this.CHANGE_TEXT)
            }, initialValue: !0
        },
        highlightGutterLine: {
            set: function (e) {
                if (!this.$gutterLineHighlight) {
                    this.$gutterLineHighlight = i.createElement("div"), this.$gutterLineHighlight.className = "ace_gutter-active-line", this.$gutter.appendChild(this.$gutterLineHighlight);
                    return
                }
                this.$gutterLineHighlight.style.display = e ? "" : "none", this.$cursorLayer.$pixelPos && this.$updateGutterLineHighlight()
            }, initialValue: !1, value: !0
        },
        hScrollBarAlwaysVisible: {
            set: function (e) {
                (!this.$hScrollBarAlwaysVisible || !this.$horizScroll) && this.$loop.schedule(this.CHANGE_SCROLL)
            }, initialValue: !1
        },
        vScrollBarAlwaysVisible: {
            set: function (e) {
                (!this.$vScrollBarAlwaysVisible || !this.$vScroll) && this.$loop.schedule(this.CHANGE_SCROLL)
            }, initialValue: !1
        },
        fontSize: {
            set: function (e) {
                typeof e == "number" && (e += "px"), this.container.style.fontSize = e, this.updateFontSize()
            }, initialValue: 12
        },
        fontFamily: {
            set: function (e) {
                this.container.style.fontFamily = e, this.updateFontSize()
            }
        },
        maxLines: {
            set: function (e) {
                this.updateFull()
            }
        },
        minLines: {
            set: function (e) {
                this.updateFull()
            }
        },
        scrollPastEnd: {
            set: function (e) {
                e = +e || 0;
                if (this.$scrollPastEnd == e)return;
                this.$scrollPastEnd = e, this.$loop.schedule(this.CHANGE_SCROLL)
            }, initialValue: 0, handlesSet: !0
        },
        fixedWidthGutter: {
            set: function (e) {
                this.$gutterLayer.$fixedWidth = !!e, this.$loop.schedule(this.CHANGE_GUTTER)
            }
        },
        theme: {
            set: function (e) {
                this.setTheme(e)
            }, get: function () {
                return this.$themeId || this.theme
            }, initialValue: "./theme/textmate", handlesSet: !0
        }
    }), t.VirtualRenderer = g
}), define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function (e, t, n) {
    "use strict";
    var r = e("../lib/oop"), i = e("../lib/net"), s = e("../lib/event_emitter").EventEmitter, o = e("../config"), u = function (t, n, r, i) {
        this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), e.nameToUrl && !e.toUrl && (e.toUrl = e.nameToUrl);
        if (o.get("packaged") || !e.toUrl)i = i || o.moduleUrl(n, "worker"); else {
            var s = this.$normalizePath;
            i = i || s(e.toUrl("ace/worker/worker.js", null, "_"));
            var u = {};
            t.forEach(function (t) {
                u[t] = s(e.toUrl(t, null, "_").replace(/(\.js)?(\?.*)?$/, ""))
            })
        }
        try {
            this.$worker = new Worker(i)
        } catch (a) {
            if (!(a instanceof window.DOMException))throw a;
            var f = this.$workerBlob(i), l = window.URL || window.webkitURL, c = l.createObjectURL(f);
            this.$worker = new Worker(c), l.revokeObjectURL(c)
        }
        this.$worker.postMessage({
            init: !0,
            tlns: u,
            module: n,
            classname: r
        }), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage
    };
    (function () {
        r.implement(this, s), this.onMessage = function (e) {
            var t = e.data;
            switch (t.type) {
                case"log":
                    window.console && console.log && console.log.apply(console, t.data);
                    break;
                case"event":
                    this._signal(t.name, {data: t.data});
                    break;
                case"call":
                    var n = this.callbacks[t.id];
                    n && (n(t.data), delete this.callbacks[t.id])
            }
        }, this.$normalizePath = function (e) {
            return i.qualifyURL(e)
        }, this.terminate = function () {
            this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker = null, this.$doc.removeEventListener("change", this.changeListener), this.$doc = null
        }, this.send = function (e, t) {
            this.$worker.postMessage({command: e, args: t})
        }, this.call = function (e, t, n) {
            if (n) {
                var r = this.callbackId++;
                this.callbacks[r] = n, t.push(r)
            }
            this.send(e, t)
        }, this.emit = function (e, t) {
            try {
                this.$worker.postMessage({event: e, data: {data: t.data}})
            } catch (n) {
                console.error(n.stack)
            }
        }, this.attachToDocument = function (e) {
            this.$doc && this.terminate(), this.$doc = e, this.call("setValue", [e.getValue()]), e.on("change", this.changeListener)
        }, this.changeListener = function (e) {
            this.deltaQueue ? this.deltaQueue.push(e.data) : (this.deltaQueue = [e.data], setTimeout(this.$sendDeltaQueue, 0))
        }, this.$sendDeltaQueue = function () {
            var e = this.deltaQueue;
            if (!e)return;
            this.deltaQueue = null, e.length > 20 && e.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", {data: e})
        }, this.$workerBlob = function (e) {
            var t = "importScripts('" + i.qualifyURL(e) + "');";
            try {
                return new Blob([t], {type: "application/javascript"})
            } catch (n) {
                var r = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, s = new r;
                return s.append(t), s.getBlob("application/javascript")
            }
        }
    }).call(u.prototype);
    var a = function (e, t, n) {
        this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.callbackId = 1, this.callbacks = {}, this.messageBuffer = [];
        var r = null, i = !1, u = Object.create(s), a = this;
        this.$worker = {}, this.$worker.terminate = function () {
        }, this.$worker.postMessage = function (e) {
            a.messageBuffer.push(e), r && (i ? setTimeout(f) : f())
        }, this.setEmitSync = function (e) {
            i = e
        };
        var f = function () {
            var e = a.messageBuffer.shift();
            e.command ? r[e.command].apply(r, e.args) : e.event && u._signal(e.event, e.data)
        };
        u.postMessage = function (e) {
            a.onMessage({data: e})
        }, u.callback = function (e, t) {
            this.postMessage({type: "call", id: t, data: e})
        }, u.emit = function (e, t) {
            this.postMessage({type: "event", name: e, data: t})
        }, o.loadModule(["worker", t], function (e) {
            r = new e[n](u);
            while (a.messageBuffer.length)f()
        })
    };
    a.prototype = u.prototype, t.UIWorkerClient = a, t.WorkerClient = u
}), define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function (e, t, n) {
    "use strict";
    var r = e("./range").Range, i = e("./lib/event_emitter").EventEmitter, s = e("./lib/oop"), o = function (e, t, n, r, i, s) {
        var o = this;
        this.length = t, this.session = e, this.doc = e.getDocument(), this.mainClass = i, this.othersClass = s, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate), this.$others = r, this.$onCursorChange = function () {
            setTimeout(function () {
                o.onCursorChange()
            })
        }, this.$pos = n;
        var u = e.getUndoManager().$undoStack || e.getUndoManager().$undostack || {length: -1};
        this.$undoStackDepth = u.length, this.setup(), e.selection.on("changeCursor", this.$onCursorChange)
    };
    (function () {
        s.implement(this, i), this.setup = function () {
            var e = this, t = this.doc, n = this.session, i = this.$pos;
            this.selectionBefore = n.selection.toJSON(), n.selection.inMultiSelectMode && n.selection.toSingleRange(), this.pos = t.createAnchor(i.row, i.column), this.markerId = n.addMarker(new r(i.row, i.column, i.row, i.column + this.length), this.mainClass, null, !1), this.pos.on("change", function (t) {
                n.removeMarker(e.markerId), e.markerId = n.addMarker(new r(t.value.row, t.value.column, t.value.row, t.value.column + e.length), e.mainClass, null, !1)
            }), this.others = [], this.$others.forEach(function (n) {
                var r = t.createAnchor(n.row, n.column);
                e.others.push(r)
            }), n.setUndoSelect(!1)
        }, this.showOtherMarkers = function () {
            if (this.othersActive)return;
            var e = this.session, t = this;
            this.othersActive = !0, this.others.forEach(function (n) {
                n.markerId = e.addMarker(new r(n.row, n.column, n.row, n.column + t.length), t.othersClass, null, !1), n.on("change", function (i) {
                    e.removeMarker(n.markerId), n.markerId = e.addMarker(new r(i.value.row, i.value.column, i.value.row, i.value.column + t.length), t.othersClass, null, !1)
                })
            })
        }, this.hideOtherMarkers = function () {
            if (!this.othersActive)return;
            this.othersActive = !1;
            for (var e = 0; e < this.others.length; e++)this.session.removeMarker(this.others[e].markerId)
        }, this.onUpdate = function (e) {
            var t = e.data, n = t.range;
            if (n.start.row !== n.end.row)return;
            if (n.start.row !== this.pos.row)return;
            if (this.$updating)return;
            this.$updating = !0;
            var i = t.action === "insertText" ? n.end.column - n.start.column : n.start.column - n.end.column;
            if (n.start.column >= this.pos.column && n.start.column <= this.pos.column + this.length + 1) {
                var s = n.start.column - this.pos.column;
                this.length += i;
                if (!this.session.$fromUndo) {
                    if (t.action === "insertText")for (var o = this.others.length - 1; o >= 0; o--) {
                        var u = this.others[o], a = {row: u.row, column: u.column + s};
                        u.row === n.start.row && n.start.column < u.column && (a.column += i), this.doc.insert(a, t.text)
                    } else if (t.action === "removeText")for (var o = this.others.length - 1; o >= 0; o--) {
                        var u = this.others[o], a = {row: u.row, column: u.column + s};
                        u.row === n.start.row && n.start.column < u.column && (a.column += i), this.doc.remove(new r(a.row, a.column, a.row, a.column - i))
                    }
                    n.start.column === this.pos.column && t.action === "insertText" ? setTimeout(function () {
                        this.pos.setPosition(this.pos.row, this.pos.column - i);
                        for (var e = 0; e < this.others.length; e++) {
                            var t = this.others[e], r = {row: t.row, column: t.column - i};
                            t.row === n.start.row && n.start.column < t.column && (r.column += i), t.setPosition(r.row, r.column)
                        }
                    }.bind(this), 0) : n.start.column === this.pos.column && t.action === "removeText" && setTimeout(function () {
                        for (var e = 0; e < this.others.length; e++) {
                            var t = this.others[e];
                            t.row === n.start.row && n.start.column < t.column && t.setPosition(t.row, t.column - i)
                        }
                    }.bind(this), 0)
                }
                this.pos._emit("change", {value: this.pos});
                for (var o = 0; o < this.others.length; o++)this.others[o]._emit("change", {value: this.others[o]})
            }
            this.$updating = !1
        }, this.onCursorChange = function (e) {
            if (this.$updating || !this.session)return;
            var t = this.session.selection.getCursor();
            t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", e)) : (this.hideOtherMarkers(), this._emit("cursorLeave", e))
        }, this.detach = function () {
            this.session.removeMarker(this.markerId), this.hideOtherMarkers(), this.doc.removeEventListener("change", this.$onUpdate), this.session.selection.removeEventListener("changeCursor", this.$onCursorChange), this.pos.detach();
            for (var e = 0; e < this.others.length; e++)this.others[e].detach();
            this.session.setUndoSelect(!0), this.session = null
        }, this.cancel = function () {
            if (this.$undoStackDepth === -1)throw Error("Canceling placeholders only supported with undo manager attached to session.");
            var e = this.session.getUndoManager(), t = (e.$undoStack || e.$undostack).length - this.$undoStackDepth;
            for (var n = 0; n < t; n++)e.undo(!0);
            this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore)
        }
    }).call(o.prototype), t.PlaceHolder = o
}), define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
    function s(e, t) {
        return e.row == t.row && e.column == t.column
    }

    function o(e) {
        var t = e.domEvent, n = t.altKey, o = t.shiftKey, u = t.ctrlKey, a = e.getAccelKey(), f = e.getButton();
        u && i.isMac && (f = t.button);
        if (e.editor.inMultiSelectMode && f == 2) {
            e.editor.textInput.onContextMenu(e.domEvent);
            return
        }
        if (!u && !n && !a) {
            f === 0 && e.editor.inMultiSelectMode && e.editor.exitMultiSelectMode();
            return
        }
        if (f !== 0)return;
        var l = e.editor, c = l.selection, h = l.inMultiSelectMode, p = e.getDocumentPosition(), d = c.getCursor(), v = e.inSelection() || c.isEmpty() && s(p, d), m = e.x, g = e.y, y = function (e) {
            m = e.clientX, g = e.clientY
        }, b = l.session, w = l.renderer.pixelToScreenCoordinates(m, g), E = w, S;
        if (l.$mouseHandler.$enableJumpToDef)u && n || a && n ? S = "add" : n && (S = "block"); else if (a && !n) {
            S = "add";
            if (!h && o)return
        } else n && (S = "block");
        S && i.isMac && t.ctrlKey && l.$mouseHandler.cancelContextMenu();
        if (S == "add") {
            if (!h && v)return;
            if (!h) {
                var x = c.toOrientedRange();
                l.addSelectionMarker(x)
            }
            var T = c.rangeList.rangeAtPoint(p);
            l.$blockScrolling++, l.inVirtualSelectionMode = !0, o && (T = null, x = c.ranges[0], l.removeSelectionMarker(x)), l.once("mouseup", function () {
                var e = c.toOrientedRange();
                T && e.isEmpty() && s(T.cursor, e.cursor) ? c.substractPoint(e.cursor) : (o ? c.substractPoint(x.cursor) : x && (l.removeSelectionMarker(x), c.addRange(x)), c.addRange(e)), l.$blockScrolling--, l.inVirtualSelectionMode = !1
            })
        } else if (S == "block") {
            e.stop(), l.inVirtualSelectionMode = !0;
            var N, C = [], k = function () {
                var e = l.renderer.pixelToScreenCoordinates(m, g), t = b.screenToDocumentPosition(e.row, e.column);
                if (s(E, e) && s(t, c.lead))return;
                E = e, l.selection.moveToPosition(t), l.renderer.scrollCursorIntoView(), l.removeSelectionMarkers(C), C = c.rectangularRangeBlock(E, w), l.$mouseHandler.$clickSelection && C.length == 1 && C[0].isEmpty() && (C[0] = l.$mouseHandler.$clickSelection.clone()), C.forEach(l.addSelectionMarker, l), l.updateSelectionMarkers()
            };
            h && !a ? c.toSingleRange() : !h && a && (N = c.toOrientedRange(), l.addSelectionMarker(N)), o ? w = b.documentToScreenPosition(c.lead) : c.moveToPosition(p), E = {
                row: -1,
                column: -1
            };
            var L = function (e) {
                clearInterval(O), l.removeSelectionMarkers(C), C.length || (C = [c.toOrientedRange()]), l.$blockScrolling++, N && (l.removeSelectionMarker(N), c.toSingleRange(N));
                for (var t = 0; t < C.length; t++)c.addRange(C[t]);
                l.inVirtualSelectionMode = !1, l.$mouseHandler.$clickSelection = null, l.$blockScrolling--
            }, A = k;
            r.capture(l.container, y, L);
            var O = setInterval(function () {
                A()
            }, 20);
            return e.preventDefault()
        }
    }

    var r = e("../lib/event"), i = e("../lib/useragent");
    t.onMouseDown = o
}), define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function (e, t, n) {
    t.defaultCommands = [{
        name: "addCursorAbove", exec: function (e) {
            e.selectMoreLines(-1)
        }, bindKey: {win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up"}, readonly: !0
    }, {
        name: "addCursorBelow", exec: function (e) {
            e.selectMoreLines(1)
        }, bindKey: {win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down"}, readonly: !0
    }, {
        name: "addCursorAboveSkipCurrent", exec: function (e) {
            e.selectMoreLines(-1, !0)
        }, bindKey: {win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up"}, readonly: !0
    }, {
        name: "addCursorBelowSkipCurrent", exec: function (e) {
            e.selectMoreLines(1, !0)
        }, bindKey: {win: "Ctrl-Alt-Shift-Down", mac: "Ctrl-Alt-Shift-Down"}, readonly: !0
    }, {
        name: "selectMoreBefore", exec: function (e) {
            e.selectMore(-1)
        }, bindKey: {win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left"}, readonly: !0
    }, {
        name: "selectMoreAfter", exec: function (e) {
            e.selectMore(1)
        }, bindKey: {win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right"}, readonly: !0
    }, {
        name: "selectNextBefore", exec: function (e) {
            e.selectMore(-1, !0)
        }, bindKey: {win: "Ctrl-Alt-Shift-Left", mac: "Ctrl-Alt-Shift-Left"}, readonly: !0
    }, {
        name: "selectNextAfter", exec: function (e) {
            e.selectMore(1, !0)
        }, bindKey: {win: "Ctrl-Alt-Shift-Right", mac: "Ctrl-Alt-Shift-Right"}, readonly: !0
    }, {
        name: "splitIntoLines", exec: function (e) {
            e.multiSelect.splitIntoLines()
        }, bindKey: {win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L"}, readonly: !0
    }, {
        name: "alignCursors", exec: function (e) {
            e.alignCursors()
        }, bindKey: {win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A"}
    }, {
        name: "findAll", exec: function (e) {
            e.findAll()
        }, bindKey: {win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G"}, readonly: !0
    }], t.multiSelectCommands = [{
        name: "singleSelection", bindKey: "esc", exec: function (e) {
            e.exitMultiSelectMode()
        }, readonly: !0, isAvailable: function (e) {
            return e && e.inMultiSelectMode
        }
    }];
    var r = e("../keyboard/hash_handler").HashHandler;
    t.keyboardHandler = new r(t.multiSelectCommands)
}), define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function (e, t, n) {
    function h(e, t, n) {
        return c.$options.wrap = !0, c.$options.needle = t, c.$options.backwards = n == -1, c.find(e)
    }

    function v(e, t) {
        return e.row == t.row && e.column == t.column
    }

    function m(e) {
        if (e.$multiselectOnSessionChange)return;
        e.$onAddRange = e.$onAddRange.bind(e), e.$onRemoveRange = e.$onRemoveRange.bind(e), e.$onMultiSelect = e.$onMultiSelect.bind(e), e.$onSingleSelect = e.$onSingleSelect.bind(e), e.$multiselectOnSessionChange = t.onSessionChange.bind(e), e.$checkMultiselectChange = e.$checkMultiselectChange.bind(e), e.$multiselectOnSessionChange(e), e.on("changeSession", e.$multiselectOnSessionChange), e.on("mousedown", o), e.commands.addCommands(f.defaultCommands), g(e)
    }

    function g(e) {
        function r(t) {
            n && (e.renderer.setMouseCursor(""), n = !1)
        }

        var t = e.textInput.getElement(), n = !1;
        u.addListener(t, "keydown", function (t) {
            t.keyCode == 18 && !(t.ctrlKey || t.shiftKey || t.metaKey) ? n || (e.renderer.setMouseCursor("crosshair"), n = !0) : n && r()
        }), u.addListener(t, "keyup", r), u.addListener(t, "blur", r)
    }

    var r = e("./range_list").RangeList, i = e("./range").Range, s = e("./selection").Selection, o = e("./mouse/multi_select_handler").onMouseDown, u = e("./lib/event"), a = e("./lib/lang"), f = e("./commands/multi_select_commands");
    t.commands = f.defaultCommands.concat(f.multiSelectCommands);
    var l = e("./search").Search, c = new l, p = e("./edit_session").EditSession;
    (function () {
        this.getSelectionMarkers = function () {
            return this.$selectionMarkers
        }
    }).call(p.prototype), function () {
        this.ranges = null, this.rangeList = null, this.addRange = function (e, t) {
            if (!e)return;
            if (!this.inMultiSelectMode && this.rangeCount === 0) {
                var n = this.toOrientedRange();
                this.rangeList.add(n), this.rangeList.add(e);
                if (this.rangeList.ranges.length != 2)return this.rangeList.removeAll(), t || this.fromOrientedRange(e);
                this.rangeList.removeAll(), this.rangeList.add(n), this.$onAddRange(n)
            }
            e.cursor || (e.cursor = e.end);
            var r = this.rangeList.add(e);
            return this.$onAddRange(e), r.length && this.$onRemoveRange(r), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), t || this.fromOrientedRange(e)
        }, this.toSingleRange = function (e) {
            e = e || this.ranges[0];
            var t = this.rangeList.removeAll();
            t.length && this.$onRemoveRange(t), e && this.fromOrientedRange(e)
        }, this.substractPoint = function (e) {
            var t = this.rangeList.substractPoint(e);
            if (t)return this.$onRemoveRange(t), t[0]
        }, this.mergeOverlappingRanges = function () {
            var e = this.rangeList.merge();
            e.length ? this.$onRemoveRange(e) : this.ranges[0] && this.fromOrientedRange(this.ranges[0])
        }, this.$onAddRange = function (e) {
            this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(e), this._signal("addRange", {range: e})
        }, this.$onRemoveRange = function (e) {
            this.rangeCount = this.rangeList.ranges.length;
            if (this.rangeCount == 1 && this.inMultiSelectMode) {
                var t = this.rangeList.ranges.pop();
                e.push(t), this.rangeCount = 0
            }
            for (var n = e.length; n--;) {
                var r = this.ranges.indexOf(e[n]);
                this.ranges.splice(r, 1)
            }
            this._signal("removeRange", {ranges: e}), this.rangeCount === 0 && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), t = t || this.ranges[0], t && !t.isEqual(this.getRange()) && this.fromOrientedRange(t)
        }, this.$initRangeList = function () {
            if (this.rangeList)return;
            this.rangeList = new r, this.ranges = [], this.rangeCount = 0
        }, this.getAllRanges = function () {
            return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()]
        }, this.splitIntoLines = function () {
            if (this.rangeCount > 1) {
                var e = this.rangeList.ranges, t = e[e.length - 1], n = i.fromPoints(e[0].start, t.end);
                this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start)
            } else {
                var n = this.getRange(), r = this.isBackwards(), s = n.start.row, o = n.end.row;
                if (s == o) {
                    if (r)var u = n.end, a = n.start; else var u = n.start, a = n.end;
                    this.addRange(i.fromPoints(a, a)), this.addRange(i.fromPoints(u, u));
                    return
                }
                var f = [], l = this.getLineRange(s, !0);
                l.start.column = n.start.column, f.push(l);
                for (var c = s + 1; c < o; c++)f.push(this.getLineRange(c, !0));
                l = this.getLineRange(o, !0), l.end.column = n.end.column, f.push(l), f.forEach(this.addRange, this)
            }
        }, this.toggleBlockSelection = function () {
            if (this.rangeCount > 1) {
                var e = this.rangeList.ranges, t = e[e.length - 1], n = i.fromPoints(e[0].start, t.end);
                this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start)
            } else {
                var r = this.session.documentToScreenPosition(this.selectionLead), s = this.session.documentToScreenPosition(this.selectionAnchor), o = this.rectangularRangeBlock(r, s);
                o.forEach(this.addRange, this)
            }
        }, this.rectangularRangeBlock = function (e, t, n) {
            var r = [], s = e.column < t.column;
            if (s)var o = e.column, u = t.column; else var o = t.column, u = e.column;
            var a = e.row < t.row;
            if (a)var f = e.row, l = t.row; else var f = t.row, l = e.row;
            o < 0 && (o = 0), f < 0 && (f = 0), f == l && (n = !0);
            for (var c = f; c <= l; c++) {
                var h = i.fromPoints(this.session.screenToDocumentPosition(c, o), this.session.screenToDocumentPosition(c, u));
                if (h.isEmpty()) {
                    if (p && v(h.end, p))break;
                    var p = h.end
                }
                h.cursor = s ? h.start : h.end, r.push(h)
            }
            a && r.reverse();
            if (!n) {
                var d = r.length - 1;
                while (r[d].isEmpty() && d > 0)d--;
                if (d > 0) {
                    var m = 0;
                    while (r[m].isEmpty())m++
                }
                for (var g = d; g >= m; g--)r[g].isEmpty() && r.splice(g, 1)
            }
            return r
        }
    }.call(s.prototype);
    var d = e("./editor").Editor;
    (function () {
        this.updateSelectionMarkers = function () {
            this.renderer.updateCursor(), this.renderer.updateBackMarkers()
        }, this.addSelectionMarker = function (e) {
            e.cursor || (e.cursor = e.end);
            var t = this.getSelectionStyle();
            return e.marker = this.session.addMarker(e, "ace_selection", t), this.session.$selectionMarkers.push(e), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, e
        }, this.removeSelectionMarker = function (e) {
            if (!e.marker)return;
            this.session.removeMarker(e.marker);
            var t = this.session.$selectionMarkers.indexOf(e);
            t != -1 && this.session.$selectionMarkers.splice(t, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length
        }, this.removeSelectionMarkers = function (e) {
            var t = this.session.$selectionMarkers;
            for (var n = e.length; n--;) {
                var r = e[n];
                if (!r.marker)continue;
                this.session.removeMarker(r.marker);
                var i = t.indexOf(r);
                i != -1 && t.splice(i, 1)
            }
            this.session.selectionMarkerCount = t.length
        }, this.$onAddRange = function (e) {
            this.addSelectionMarker(e.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
        }, this.$onRemoveRange = function (e) {
            this.removeSelectionMarkers(e.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
        }, this.$onMultiSelect = function (e) {
            if (this.inMultiSelectMode)return;
            this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(f.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
        }, this.$onSingleSelect = function (e) {
            if (this.session.multiSelect.inVirtualMode)return;
            this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(f.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection")
        }, this.$onMultiSelectExec = function (e) {
            var t = e.command, n = e.editor;
            if (!n.multiSelect)return;
            if (!t.multiSelectAction) {
                var r = t.exec(n, e.args || {});
                n.multiSelect.addRange(n.multiSelect.toOrientedRange()), n.multiSelect.mergeOverlappingRanges()
            } else t.multiSelectAction == "forEach" ? r = n.forEachSelection(t, e.args) : t.multiSelectAction == "forEachLine" ? r = n.forEachSelection(t, e.args, !0) : t.multiSelectAction == "single" ? (n.exitMultiSelectMode(), r = t.exec(n, e.args || {})) : r = t.multiSelectAction(n, e.args || {});
            return r
        }, this.forEachSelection = function (e, t, n) {
            if (this.inVirtualSelectionMode)return;
            var r = n && n.keepOrder, i = n == 1 || n && n.$byLines, o = this.session, u = this.selection, a = u.rangeList, f = (r ? u : a).ranges, l;
            if (!f.length)return e.exec ? e.exec(this, t || {}) : e(this, t || {});
            var c = u._eventRegistry;
            u._eventRegistry = {};
            var h = new s(o);
            this.inVirtualSelectionMode = !0;
            for (var p = f.length; p--;) {
                if (i)while (p > 0 && f[p].start.row == f[p - 1].end.row)p--;
                h.fromOrientedRange(f[p]), h.index = p, this.selection = o.selection = h;
                var d = e.exec ? e.exec(this, t || {}) : e(this, t || {});
                !l && d !== undefined && (l = d), h.toOrientedRange(f[p])
            }
            h.detach(), this.selection = o.selection = u, this.inVirtualSelectionMode = !1, u._eventRegistry = c, u.mergeOverlappingRanges();
            var v = this.renderer.$scrollAnimation;
            return this.onCursorChange(), this.onSelectionChange(), v && v.from == v.to && this.renderer.animateScrolling(v.from), l
        }, this.exitMultiSelectMode = function () {
            if (!this.inMultiSelectMode || this.inVirtualSelectionMode)return;
            this.multiSelect.toSingleRange()
        }, this.getSelectedText = function () {
            var e = "";
            if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                var t = this.multiSelect.rangeList.ranges, n = [];
                for (var r = 0; r < t.length; r++)n.push(this.session.getTextRange(t[r]));
                var i = this.session.getDocument().getNewLineCharacter();
                e = n.join(i), e.length == (n.length - 1) * i.length && (e = "")
            } else this.selection.isEmpty() || (e = this.session.getTextRange(this.getSelectionRange()));
            return e
        }, this.$checkMultiselectChange = function (e, t) {
            if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                var n = this.multiSelect.ranges[0];
                if (this.multiSelect.isEmpty() && t == this.multiSelect.anchor)return;
                var r = t == this.multiSelect.anchor ? n.cursor == n.start ? n.end : n.start : n.cursor;
                v(r, t) || this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange())
            }
        }, this.onPaste = function (e) {
            if (this.$readOnly)return;
            var t = {text: e};
            this._signal("paste", t), e = t.text;
            if (!this.inMultiSelectMode || this.inVirtualSelectionMode)return this.insert(e);
            var n = e.split(/\r\n|\r|\n/), r = this.selection.rangeList.ranges;
            if (n.length > r.length || n.length < 2 || !n[1])return this.commands.exec("insertstring", this, e);
            for (var i = r.length; i--;) {
                var s = r[i];
                s.isEmpty() || this.session.remove(s), this.session.insert(s.start, n[i])
            }
        }, this.findAll = function (e, t, n) {
            t = t || {}, t.needle = e || t.needle;
            if (t.needle == undefined) {
                var r = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
                t.needle = this.session.getTextRange(r)
            }
            this.$search.set(t);
            var i = this.$search.findAll(this.session);
            if (!i.length)return 0;
            this.$blockScrolling += 1;
            var s = this.multiSelect;
            n || s.toSingleRange(i[0]);
            for (var o = i.length; o--;)s.addRange(i[o], !0);
            return r && s.rangeList.rangeAtPoint(r.start) && s.addRange(r, !0), this.$blockScrolling -= 1, i.length
        }, this.selectMoreLines = function (e, t) {
            var n = this.selection.toOrientedRange(), r = n.cursor == n.end, s = this.session.documentToScreenPosition(n.cursor);
            this.selection.$desiredColumn && (s.column = this.selection.$desiredColumn);
            var o = this.session.screenToDocumentPosition(s.row + e, s.column);
            if (!n.isEmpty())var u = this.session.documentToScreenPosition(r ? n.end : n.start), a = this.session.screenToDocumentPosition(u.row + e, u.column); else var a = o;
            if (r) {
                var f = i.fromPoints(o, a);
                f.cursor = f.start
            } else {
                var f = i.fromPoints(a, o);
                f.cursor = f.end
            }
            f.desiredColumn = s.column;
            if (!this.selection.inMultiSelectMode)this.selection.addRange(n); else if (t)var l = n.cursor;
            this.selection.addRange(f), l && this.selection.substractPoint(l)
        }, this.transposeSelections = function (e) {
            var t = this.session, n = t.multiSelect, r = n.ranges;
            for (var i = r.length; i--;) {
                var s = r[i];
                if (s.isEmpty()) {
                    var o = t.getWordRange(s.start.row, s.start.column);
                    s.start.row = o.start.row, s.start.column = o.start.column, s.end.row = o.end.row, s.end.column = o.end.column
                }
            }
            n.mergeOverlappingRanges();
            var u = [];
            for (var i = r.length; i--;) {
                var s = r[i];
                u.unshift(t.getTextRange(s))
            }
            e < 0 ? u.unshift(u.pop()) : u.push(u.shift());
            for (var i = r.length; i--;) {
                var s = r[i], o = s.clone();
                t.replace(s, u[i]), s.start.row = o.start.row, s.start.column = o.start.column
            }
        }, this.selectMore = function (e, t, n) {
            var r = this.session, i = r.multiSelect, s = i.toOrientedRange();
            if (s.isEmpty()) {
                s = r.getWordRange(s.start.row, s.start.column), s.cursor = e == -1 ? s.start : s.end, this.multiSelect.addRange(s);
                if (n)return
            }
            var o = r.getTextRange(s), u = h(r, o, e);
            u && (u.cursor = e == -1 ? u.start : u.end, this.$blockScrolling += 1, this.session.unfold(u), this.multiSelect.addRange(u), this.$blockScrolling -= 1, this.renderer.scrollCursorIntoView(null, .5)), t && this.multiSelect.substractPoint(s.cursor)
        }, this.alignCursors = function () {
            var e = this.session, t = e.multiSelect, n = t.ranges, r = -1, s = n.filter(function (e) {
                if (e.cursor.row == r)return !0;
                r = e.cursor.row
            });
            if (!n.length || s.length == n.length - 1) {
                var o = this.selection.getRange(), u = o.start.row, f = o.end.row, l = u == f;
                if (l) {
                    var c = this.session.getLength(), h;
                    do h = this.session.getLine(f); while (/[=:]/.test(h) && ++f < c);
                    do h = this.session.getLine(u); while (/[=:]/.test(h) && --u > 0);
                    u < 0 && (u = 0), f >= c && (f = c - 1)
                }
                var p = this.session.doc.removeLines(u, f);
                p = this.$reAlignText(p, l), this.session.doc.insert({
                    row: u,
                    column: 0
                }, p.join("\n") + "\n"), l || (o.start.column = 0, o.end.column = p[p.length - 1].length), this.selection.setRange(o)
            } else {
                s.forEach(function (e) {
                    t.substractPoint(e.cursor)
                });
                var d = 0, v = Infinity, m = n.map(function (t) {
                    var n = t.cursor, r = e.getLine(n.row), i = r.substr(n.column).search(/\S/g);
                    return i == -1 && (i = 0), n.column > d && (d = n.column), i < v && (v = i), i
                });
                n.forEach(function (t, n) {
                    var r = t.cursor, s = d - r.column, o = m[n] - v;
                    s > o ? e.insert(r, a.stringRepeat(" ", s - o)) : e.remove(new i(r.row, r.column, r.row, r.column - s + o)), t.start.column = t.end.column = d, t.start.row = t.end.row = r.row, t.cursor = t.end
                }), t.fromOrientedRange(n[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
            }
        }, this.$reAlignText = function (e, t) {
            function u(e) {
                return a.stringRepeat(" ", e)
            }

            function f(e) {
                return e[2] ? u(i) + e[2] + u(s - e[2].length + o) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
            }

            function l(e) {
                return e[2] ? u(i + s - e[2].length) + e[2] + u(o, " ") + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
            }

            function c(e) {
                return e[2] ? u(i) + e[2] + u(o) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
            }

            var n = !0, r = !0, i, s, o;
            return e.map(function (e) {
                var t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);
                return t ? i == null ? (i = t[1].length, s = t[2].length, o = t[3].length, t) : (i + s + o != t[1].length + t[2].length + t[3].length && (r = !1), i != t[1].length && (n = !1), i > t[1].length && (i = t[1].length), s < t[2].length && (s = t[2].length), o > t[3].length && (o = t[3].length), t) : [e]
            }).map(t ? f : n ? r ? l : f : c)
        }
    }).call(d.prototype), t.onSessionChange = function (e) {
        var t = e.session;
        t && !t.multiSelect && (t.$selectionMarkers = [], t.selection.$initRangeList(), t.multiSelect = t.selection), this.multiSelect = t && t.multiSelect;
        var n = e.oldSession;
        n && (n.multiSelect.off("addRange", this.$onAddRange), n.multiSelect.off("removeRange", this.$onRemoveRange), n.multiSelect.off("multiSelect", this.$onMultiSelect), n.multiSelect.off("singleSelect", this.$onSingleSelect), n.multiSelect.lead.off("change", this.$checkMultiselectChange), n.multiSelect.anchor.off("change", this.$checkMultiselectChange)), t && (t.multiSelect.on("addRange", this.$onAddRange), t.multiSelect.on("removeRange", this.$onRemoveRange), t.multiSelect.on("multiSelect", this.$onMultiSelect), t.multiSelect.on("singleSelect", this.$onSingleSelect), t.multiSelect.lead.on("change", this.$checkMultiselectChange), t.multiSelect.anchor.on("change", this.$checkMultiselectChange)), t && this.inMultiSelectMode != t.selection.inMultiSelectMode && (t.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect())
    }, t.MultiSelect = m, e("./config").defineOptions(d.prototype, "editor", {
        enableMultiselect: {
            set: function (e) {
                m(this), e ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", o)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", o))
            }, value: !0
        }
    })
}), define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function (e, t, n) {
    "use strict";
    var r = e("../../range").Range, i = t.FoldMode = function () {
    };
    (function () {
        this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function (e, t, n) {
            var r = e.getLine(n);
            return this.foldingStartMarker.test(r) ? "start" : t == "markbeginend" && this.foldingStopMarker && this.foldingStopMarker.test(r) ? "end" : ""
        }, this.getFoldWidgetRange = function (e, t, n) {
            return null
        }, this.indentationBlock = function (e, t, n) {
            var i = /\S/, s = e.getLine(t), o = s.search(i);
            if (o == -1)return;
            var u = n || s.length, a = e.getLength(), f = t, l = t;
            while (++t < a) {
                var c = e.getLine(t).search(i);
                if (c == -1)continue;
                if (c <= o)break;
                l = t
            }
            if (l > f) {
                var h = e.getLine(l).length;
                return new r(f, u, l, h)
            }
        }, this.openingBracketBlock = function (e, t, n, i, s) {
            var o = {row: n, column: i + 1}, u = e.$findClosingBracket(t, o, s);
            if (!u)return;
            var a = e.foldWidgets[u.row];
            return a == null && (a = e.getFoldWidget(u.row)), a == "start" && u.row > o.row && (u.row--, u.column = e.getLine(u.row).length), r.fromPoints(o, u)
        }, this.closingBracketBlock = function (e, t, n, i, s) {
            var o = {row: n, column: i}, u = e.$findOpeningBracket(t, o);
            if (!u)return;
            return u.column++, o.column--, r.fromPoints(u, o)
        }
    }).call(i.prototype)
}), define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
    "use strict";
    t.isDark = !1, t.cssClass = "ace-tm", t.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;border-radius: 2px;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
    var r = e("../lib/dom");
    r.importCssString(t.cssText, t.cssClass)
}), define("ace/line_widgets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/range"], function (e, t, n) {
    "use strict";
    function o(e) {
        this.session = e, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.detach = this.detach.bind(this), this.session.on("change", this.updateOnChange)
    }

    var r = e("./lib/oop"), i = e("./lib/dom"), s = e("./range").Range;
    (function () {
        this.getRowLength = function (e) {
            var t;
            return this.lineWidgets ? t = this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0 : t = 0, !this.$useWrapMode || !this.$wrapData[e] ? 1 + t : this.$wrapData[e].length + 1 + t
        }, this.$getWidgetScreenLength = function () {
            var e = 0;
            return this.lineWidgets.forEach(function (t) {
                t && t.rowCount && (e += t.rowCount)
            }), e
        }, this.attach = function (e) {
            e.widgetManager && e.widgetManager != this && e.widgetManager.detach();
            if (this.editor == e)return;
            this.detach(), this.editor = e, this.editor.on("changeSession", this.detach), e.widgetManager = this, e.renderer.on("beforeRender", this.measureWidgets), e.renderer.on("afterRender", this.renderWidgets)
        }, this.detach = function (e) {
            if (e && e.session == this.session)return;
            var t = this.editor;
            if (!t)return;
            t.off("changeSession", this.detach), this.editor = null, t.widgetManager = null, t.renderer.off("beforeRender", this.measureWidgets), t.renderer.off("afterRender", this.renderWidgets);
            var n = this.session.lineWidgets;
            n && n.forEach(function (e) {
                e && e.el && e.el.parentNode && (e._inDocument = !1, e.el.parentNode.removeChild(e.el))
            })
        }, this.updateOnChange = function (e) {
            var t = this.session.lineWidgets;
            if (!t)return;
            var n = e.data, r = n.range, i = r.start.row, s = r.end.row - i;
            if (s !== 0)if (n.action == "removeText" || n.action == "removeLines") {
                var o = t.splice(i + 1, s);
                o.forEach(function (e) {
                    e && this.removeLineWidget(e)
                }, this), this.$updateRows()
            } else {
                var u = new Array(s);
                u.unshift(i, 0), t.splice.apply(t, u), this.$updateRows()
            }
        }, this.$updateRows = function () {
            var e = this.session.lineWidgets;
            if (!e)return;
            var t = !0;
            e.forEach(function (e, n) {
                e && (t = !1, e.row = n)
            }), t && (this.session.lineWidgets = null)
        }, this.addLineWidget = function (e) {
            this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength())), this.session.lineWidgets[e.row] = e;
            var t = this.editor.renderer;
            return e.html && !e.el && (e.el = i.createElement("div"), e.el.innerHTML = e.html), e.el && (i.addCssClass(e.el, "ace_lineWidgetContainer"), e.el.style.position = "absolute", e.el.style.zIndex = 5, t.container.appendChild(e.el), e._inDocument = !0), e.coverGutter || (e.el.style.zIndex = 3), e.pixelHeight || (e.pixelHeight = e.el.offsetHeight), e.rowCount == null && (e.rowCount = e.pixelHeight / t.layerConfig.lineHeight), this.session._emit("changeFold", {data: {start: {row: e.row}}}), this.$updateRows(), this.renderWidgets(null, t), e
        }, this.removeLineWidget = function (e) {
            e._inDocument = !1, e.el && e.el.parentNode && e.el.parentNode.removeChild(e.el);
            if (e.editor && e.editor.destroy)try {
                e.editor.destroy()
            } catch (t) {
            }
            this.session.lineWidgets && (this.session.lineWidgets[e.row] = undefined), this.session._emit("changeFold", {data: {start: {row: e.row}}}), this.$updateRows()
        }, this.onWidgetChanged = function (e) {
            this.session._changedWidgets.push(e), this.editor && this.editor.renderer.updateFull()
        }, this.measureWidgets = function (e, t) {
            var n = this.session._changedWidgets, r = t.layerConfig;
            if (!n || !n.length)return;
            var i = Infinity;
            for (var s = 0; s < n.length; s++) {
                var o = n[s];
                o._inDocument || (o._inDocument = !0, t.container.appendChild(o.el)), o.h = o.el.offsetHeight, o.fixedWidth || (o.w = o.el.offsetWidth, o.screenWidth = Math.ceil(o.w / r.characterWidth));
                var u = o.h / r.lineHeight;
                o.coverLine && (u -= this.session.getRowLineCount(o.row), u < 0 && (u = 0)), o.rowCount != u && (o.rowCount = u, o.row < i && (i = o.row))
            }
            i != Infinity && (this.session._emit("changeFold", {data: {start: {row: i}}}), this.session.lineWidgetWidth = null), this.session._changedWidgets = []
        }, this.renderWidgets = function (e, t) {
            var n = t.layerConfig, r = this.session.lineWidgets;
            if (!r)return;
            var i = Math.min(this.firstRow, n.firstRow), s = Math.max(this.lastRow, n.lastRow, r.length);
            while (i > 0 && !r[i])i--;
            this.firstRow = n.firstRow, this.lastRow = n.lastRow, t.$cursorLayer.config = n;
            for (var o = i; o <= s; o++) {
                var u = r[o];
                if (!u || !u.el)continue;
                u._inDocument || (u._inDocument = !0, t.container.appendChild(u.el));
                var a = t.$cursorLayer.getPixelPosition({row: o, column: 0}, !0).top;
                u.coverLine || (a += n.lineHeight * this.session.getRowLineCount(u.row)), u.el.style.top = a - n.offset + "px";
                var f = u.coverGutter ? 0 : t.gutterWidth;
                u.fixedWidth || (f -= t.scrollLeft), u.el.style.left = f + "px", u.fixedWidth ? u.el.style.right = t.scrollBar.getWidth() + "px" : u.el.style.right = ""
            }
        }
    }).call(o.prototype), t.LineWidgets = o
}), define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], function (e, t, n) {
    "use strict";
    function o(e, t, n) {
        var r = 0, i = e.length - 1;
        while (r <= i) {
            var s = r + i >> 1, o = n(t, e[s]);
            if (o > 0)r = s + 1; else {
                if (!(o < 0))return s;
                i = s - 1
            }
        }
        return -(r + 1)
    }

    function u(e, t, n) {
        var r = e.getAnnotations().sort(s.comparePoints);
        if (!r.length)return;
        var i = o(r, {row: t, column: -1}, s.comparePoints);
        i < 0 && (i = -i - 1), i >= r.length - 1 ? i = n > 0 ? 0 : r.length - 1 : i === 0 && n < 0 && (i = r.length - 1);
        var u = r[i];
        if (!u || !n)return;
        if (u.row === t) {
            do u = r[i += n]; while (u && u.row === t);
            if (!u)return r.slice()
        }
        var a = [];
        t = u.row;
        do a[n < 0 ? "unshift" : "push"](u), u = r[i += n]; while (u && u.row == t);
        return a.length && a
    }

    var r = e("../line_widgets").LineWidgets, i = e("../lib/dom"), s = e("../range").Range;
    t.showErrorMarker = function (e, t) {
        var n = e.session;
        n.widgetManager || (n.widgetManager = new r(n), n.widgetManager.attach(e));
        var s = e.getCursorPosition(), o = s.row, a = n.lineWidgets && n.lineWidgets[o];
        a ? a.destroy() : o -= t;
        var f = u(n, o, t), l;
        if (f) {
            var c = f[0];
            s.column = (c.pos && typeof c.column != "number" ? c.pos.sc : c.column) || 0, s.row = c.row, l = e.renderer.$gutterLayer.$annotations[s.row]
        } else {
            if (a)return;
            l = {text: ["Looks good!"], className: "ace_ok"}
        }
        e.session.unfold(s.row), e.selection.moveToPosition(s);
        var h = {
            row: s.row,
            fixedWidth: !0,
            coverGutter: !0,
            el: i.createElement("div")
        }, p = h.el.appendChild(i.createElement("div")), d = h.el.appendChild(i.createElement("div"));
        d.className = "error_widget_arrow " + l.className;
        var v = e.renderer.$cursorLayer.getPixelPosition(s).left;
        d.style.left = v + e.renderer.gutterWidth - 5 + "px", h.el.className = "error_widget_wrapper", p.className = "error_widget " + l.className, p.innerHTML = l.text.join("<br>"), p.appendChild(i.createElement("div"));
        var m = function (e, t, n) {
            if (t === 0 && (n === "esc" || n === "return"))return h.destroy(), {command: "null"}
        };
        h.destroy = function () {
            if (e.$mouseHandler.isMousePressed)return;
            e.keyBinding.removeKeyboardHandler(m), n.widgetManager.removeLineWidget(h), e.off("changeSelection", h.destroy), e.off("changeSession", h.destroy), e.off("mouseup", h.destroy), e.off("change", h.destroy)
        }, e.keyBinding.addKeyboardHandler(m), e.on("changeSelection", h.destroy), e.on("changeSession", h.destroy), e.on("mouseup", h.destroy), e.on("change", h.destroy), e.session.widgetManager.addLineWidget(h), h.el.onmousedown = e.focus.bind(e), e.renderer.scrollCursorIntoView(null, .5, {bottom: h.el.offsetHeight})
    }, i.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "")
}), define("ace/ace", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/dom", "ace/lib/event", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config"], function (e, t, n) {
    "use strict";
    e("./lib/fixoldbrowsers");
    var r = e("./lib/dom"), i = e("./lib/event"), s = e("./editor").Editor, o = e("./edit_session").EditSession, u = e("./undomanager").UndoManager, a = e("./virtual_renderer").VirtualRenderer;
    e("./worker/worker_client"), e("./keyboard/hash_handler"), e("./placeholder"), e("./multi_select"), e("./mode/folding/fold_mode"), e("./theme/textmate"), e("./ext/error_marker"), t.config = e("./config"), t.require = e, t.edit = function (e) {
        if (typeof e == "string") {
            var n = e;
            e = document.getElementById(n);
            if (!e)throw new Error("ace.edit can't find div #" + n)
        }
        if (e && e.env && e.env.editor instanceof s)return e.env.editor;
        var o = "";
        if (e && /input|textarea/i.test(e.tagName)) {
            var u = e;
            o = u.value, e = r.createElement("pre"), u.parentNode.replaceChild(e, u)
        } else o = r.getInnerText(e), e.innerHTML = "";
        var f = t.createEditSession(o), l = new s(new a(e));
        l.setSession(f);
        var c = {document: f, editor: l, onResize: l.resize.bind(l, null)};
        return u && (c.textarea = u), i.addListener(window, "resize", c.onResize), l.on("destroy", function () {
            i.removeListener(window, "resize", c.onResize), c.editor.container.env = null
        }), l.container.env = l.env = c, l
    }, t.createEditSession = function (e, t) {
        var n = new o(e, t);
        return n.setUndoManager(new u), n
    }, t.EditSession = o, t.UndoManager = u
});
(function () {
    window.require(["ace/ace"], function (a) {
        a && a.config.init(true);
        if (!window.ace)
            window.ace = a;
        for (var key in a) if (a.hasOwnProperty(key))
            window.ace[key] = a[key];
    });
})();

/*! json-tree - v0.2.0 - 2015-06-23 */
var JSONTree = function () {
    var a = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;"}, b = 0, c = 0;
    this.create = function (a, b) {
        return c += 1, p(f(a, 0, !1), {"class": "jstValue"})
    };
    var d = function (b) {
        return b.replace(/[&<>'"]/g, function (b) {
            return a[b]
        })
    }, e = function () {
        return c + "_" + b++
    }, f = function (a, b, c) {
        if (null === a)return l(c ? b : 0);
        var d = typeof a;
        switch (d) {
            case"boolean":
                return k(a, c ? b : 0);
            case"number":
                return j(a, c ? b : 0);
            case"string":
                return i(a, c ? b : 0);
            default:
                return a instanceof Array ? h(a, b, c) : g(a, b, c)
        }
    }, g = function (a, b, c) {
        var d = e(), f = Object.keys(a).map(function (c) {
            return m(c, a[c], b + 1, !0)
        }).join(o()), g = [r("{", c ? b : 0, d), p(f, {id: d}), s("}", b)].join("\n");
        return p(g, {})
    }, h = function (a, b, c) {
        var d = e(), g = a.map(function (a) {
            return f(a, b + 1, !0)
        }).join(o()), h = [r("[", c ? b : 0, d), p(g, {id: d}), s("]", b)].join("\n");
        return h
    }, i = function (a, b) {
        return p(t(n(d(a)), b), {"class": "jstStr"})
    }, j = function (a, b) {
        return p(t(a, b), {"class": "jstNum"})
    }, k = function (a, b) {
        return p(t(a, b), {"class": "jstBool"})
    }, l = function (a) {
        return p(t("null", a), {"class": "jstNull"})
    }, m = function (a, b, c) {
        var e = t(n(d(a)) + ": ", c), g = p(f(b, c, !1), {});
        return p(e + g, {"class": "jstProperty"})
    }, n = function (a) {
        return '"' + a + '"'
    }, o = function () {
        return p(",\n", {"class": "jstComma"})
    }, p = function (a, b) {
        return q("span", b, a)
    }, q = function (a, b, c) {
        return "<" + a + Object.keys(b).map(function (a) {
                return " " + a + '="' + b[a] + '"'
            }).join("") + ">" + c + "</" + a + ">"
    }, r = function (a, b, c) {
        return p(t(a, b), {"class": "jstBracket"}) + p("", {
                "class": "jstFold",
                onclick: "JSONTree.toggle('" + c + "')"
            })
    };
    this.toggle = function (a) {
        var b = document.getElementById(a), c = b.parentNode, d = b.previousElementSibling;
        "" === b.className ? (b.className = "jstHiddenBlock", c.className = "jstFolded", d.className = "jstExpand") : (b.className = "", c.className = "", d.className = "jstFold")
    };
    var s = function (a, b) {
        return p(t(a, b), {})
    }, t = function (a, b) {
        return Array(2 * b + 1).join(" ") + a
    };
    return this
}();
/**
 * bootstrap.js v3.0.0 by @fat and @mdo
 * Copyright 2013 Twitter Inc.
 * http://www.apache.org/licenses/LICENSE-2.0
 */
if (!jQuery) {
    throw new Error("Bootstrap requires jQuery")
}

/* ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) {
    "use strict";

    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================

    function transitionEnd() {
        var el = document.createElement('bootstrap')

        var transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd'
            , 'MozTransition': 'transitionend'
            , 'OTransition': 'oTransitionEnd otransitionend'
            , 'transition': 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {end: transEndEventNames[name]}
            }
        }
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function (duration) {
        var called = false, $el = this
        $(this).one($.support.transition.end, function () {
            called = true
        })
        var callback = function () {
            if (!called) $($el).trigger($.support.transition.end)
        }
        setTimeout(callback, duration)
        return this
    }

    $(function () {
        $.support.transition = transitionEnd()
    })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#alerts
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) {
    "use strict";

    // ALERT CLASS DEFINITION
    // ======================

    var dismiss = '[data-dismiss="alert"]'
    var Alert = function (el) {
        $(el).on('click', dismiss, this.close)
    }

    Alert.prototype.close = function (e) {
        var $this = $(this)
        var selector = $this.attr('data-target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        var $parent = $(selector)

        if (e) e.preventDefault()

        if (!$parent.length) {
            $parent = $this.hasClass('alert') ? $this : $this.parent()
        }

        $parent.trigger(e = $.Event('close.bs.alert'))

        if (e.isDefaultPrevented()) return

        $parent.removeClass('in')

        function removeElement() {
            $parent.trigger('closed.bs.alert').remove()
        }

        $.support.transition && $parent.hasClass('fade') ?
            $parent
                .one($.support.transition.end, removeElement)
                .emulateTransitionEnd(150) :
            removeElement()
    }


    // ALERT PLUGIN DEFINITION
    // =======================

    var old = $.fn.alert

    $.fn.alert = function (option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.alert')

            if (!data) $this.data('bs.alert', (data = new Alert(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }

    $.fn.alert.Constructor = Alert


    // ALERT NO CONFLICT
    // =================

    $.fn.alert.noConflict = function () {
        $.fn.alert = old
        return this
    }


    // ALERT DATA-API
    // ==============

    $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) {
    "use strict";

    // BUTTON PUBLIC CLASS DEFINITION
    // ==============================

    var Button = function (element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Button.DEFAULTS, options)
    }

    Button.DEFAULTS = {
        loadingText: 'loading...'
    }

    Button.prototype.setState = function (state) {
        var d = 'disabled'
        var $el = this.$element
        var val = $el.is('input') ? 'val' : 'html'
        var data = $el.data()

        state = state + 'Text'

        if (!data.resetText) $el.data('resetText', $el[val]())

        $el[val](data[state] || this.options[state])

        // push to event loop to allow forms to submit
        setTimeout(function () {
            state == 'loadingText' ?
                $el.addClass(d).attr(d, d) :
                $el.removeClass(d).removeAttr(d);
        }, 0)
    }

    Button.prototype.toggle = function () {
        var $parent = this.$element.closest('[data-toggle="buttons"]')

        if ($parent.length) {
            var $input = this.$element.find('input')
                .prop('checked', !this.$element.hasClass('active'))
                .trigger('change')
            if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
        }

        this.$element.toggleClass('active')
    }


    // BUTTON PLUGIN DEFINITION
    // ========================

    var old = $.fn.button

    $.fn.button = function (option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.button')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.button', (data = new Button(this, options)))

            if (option == 'toggle') data.toggle()
            else if (option) data.setState(option)
        })
    }

    $.fn.button.Constructor = Button


    // BUTTON NO CONFLICT
    // ==================

    $.fn.button.noConflict = function () {
        $.fn.button = old
        return this
    }


    // BUTTON DATA-API
    // ===============

    $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
        var $btn = $(e.target)
        if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
        $btn.button('toggle')
        e.preventDefault()
    })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) {
    "use strict";

    // CAROUSEL CLASS DEFINITION
    // =========================

    var Carousel = function (element, options) {
        this.$element = $(element)
        this.$indicators = this.$element.find('.carousel-indicators')
        this.options = options
        this.paused =
            this.sliding =
                this.interval =
                    this.$active =
                        this.$items = null

        this.options.pause == 'hover' && this.$element
            .on('mouseenter', $.proxy(this.pause, this))
            .on('mouseleave', $.proxy(this.cycle, this))
    }

    Carousel.DEFAULTS = {
        interval: 5000
        , pause: 'hover'
        , wrap: true
    }

    Carousel.prototype.cycle = function (e) {
        e || (this.paused = false)

        this.interval && clearInterval(this.interval)

        this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

        return this
    }

    Carousel.prototype.getActiveIndex = function () {
        this.$active = this.$element.find('.item.active')
        this.$items = this.$active.parent().children()

        return this.$items.index(this.$active)
    }

    Carousel.prototype.to = function (pos) {
        var that = this
        var activeIndex = this.getActiveIndex()

        if (pos > (this.$items.length - 1) || pos < 0) return

        if (this.sliding)       return this.$element.one('slid', function () {
            that.to(pos)
        })
        if (activeIndex == pos) return this.pause().cycle()

        return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

    Carousel.prototype.pause = function (e) {
        e || (this.paused = true)

        if (this.$element.find('.next, .prev').length && $.support.transition.end) {
            this.$element.trigger($.support.transition.end)
            this.cycle(true)
        }

        this.interval = clearInterval(this.interval)

        return this
    }

    Carousel.prototype.next = function () {
        if (this.sliding) return
        return this.slide('next')
    }

    Carousel.prototype.prev = function () {
        if (this.sliding) return
        return this.slide('prev')
    }

    Carousel.prototype.slide = function (type, next) {
        var $active = this.$element.find('.item.active')
        var $next = next || $active[type]()
        var isCycling = this.interval
        var direction = type == 'next' ? 'left' : 'right'
        var fallback = type == 'next' ? 'first' : 'last'
        var that = this

        if (!$next.length) {
            if (!this.options.wrap) return
            $next = this.$element.find('.item')[fallback]()
        }

        this.sliding = true

        isCycling && this.pause()

        var e = $.Event('slide.bs.carousel', {relatedTarget: $next[0], direction: direction})

        if ($next.hasClass('active')) return

        if (this.$indicators.length) {
            this.$indicators.find('.active').removeClass('active')
            this.$element.one('slid', function () {
                var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
                $nextIndicator && $nextIndicator.addClass('active')
            })
        }

        if ($.support.transition && this.$element.hasClass('slide')) {
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) return
            $next.addClass(type)
            $next[0].offsetWidth // force reflow
            $active.addClass(direction)
            $next.addClass(direction)
            $active
                .one($.support.transition.end, function () {
                    $next.removeClass([type, direction].join(' ')).addClass('active')
                    $active.removeClass(['active', direction].join(' '))
                    that.sliding = false
                    setTimeout(function () {
                        that.$element.trigger('slid')
                    }, 0)
                })
                .emulateTransitionEnd(600)
        } else {
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) return
            $active.removeClass('active')
            $next.addClass('active')
            this.sliding = false
            this.$element.trigger('slid')
        }

        isCycling && this.cycle()

        return this
    }


    // CAROUSEL PLUGIN DEFINITION
    // ==========================

    var old = $.fn.carousel

    $.fn.carousel = function (option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.carousel')
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
            var action = typeof option == 'string' ? option : options.slide

            if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
            if (typeof option == 'number') data.to(option)
            else if (action) data[action]()
            else if (options.interval) data.pause().cycle()
        })
    }

    $.fn.carousel.Constructor = Carousel


    // CAROUSEL NO CONFLICT
    // ====================

    $.fn.carousel.noConflict = function () {
        $.fn.carousel = old
        return this
    }


    // CAROUSEL DATA-API
    // =================

    $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
        var $this = $(this), href
        var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        var options = $.extend({}, $target.data(), $this.data())
        var slideIndex = $this.attr('data-slide-to')
        if (slideIndex) options.interval = false

        $target.carousel(options)

        if (slideIndex = $this.attr('data-slide-to')) {
            $target.data('bs.carousel').to(slideIndex)
        }

        e.preventDefault()
    })

    $(window).on('load', function () {
        $('[data-ride="carousel"]').each(function () {
            var $carousel = $(this)
            $carousel.carousel($carousel.data())
        })
    })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#collapse
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) {
    "use strict";

    // COLLAPSE PUBLIC CLASS DEFINITION
    // ================================

    var Collapse = function (element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Collapse.DEFAULTS, options)
        this.transitioning = null

        if (this.options.parent) this.$parent = $(this.options.parent)
        if (this.options.toggle) this.toggle()
    }

    Collapse.DEFAULTS = {
        toggle: true
    }

    Collapse.prototype.dimension = function () {
        var hasWidth = this.$element.hasClass('width')
        return hasWidth ? 'width' : 'height'
    }

    Collapse.prototype.show = function () {
        if (this.transitioning || this.$element.hasClass('in')) return

        var startEvent = $.Event('show.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return

        var actives = this.$parent && this.$parent.find('> .panel > .in')

        if (actives && actives.length) {
            var hasData = actives.data('bs.collapse')
            if (hasData && hasData.transitioning) return
            actives.collapse('hide')
            hasData || actives.data('bs.collapse', null)
        }

        var dimension = this.dimension()

        this.$element
            .removeClass('collapse')
            .addClass('collapsing')
            [dimension](0)

        this.transitioning = 1

        var complete = function () {
            this.$element
                .removeClass('collapsing')
                .addClass('in')
                [dimension]('auto')
            this.transitioning = 0
            this.$element.trigger('shown.bs.collapse')
        }

        if (!$.support.transition) return complete.call(this)

        var scrollSize = $.camelCase(['scroll', dimension].join('-'))

        this.$element
            .one($.support.transition.end, $.proxy(complete, this))
            .emulateTransitionEnd(350)
            [dimension](this.$element[0][scrollSize])
    }

    Collapse.prototype.hide = function () {
        if (this.transitioning || !this.$element.hasClass('in')) return

        var startEvent = $.Event('hide.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return

        var dimension = this.dimension()

        this.$element
            [dimension](this.$element[dimension]())
            [0].offsetHeight

        this.$element
            .addClass('collapsing')
            .removeClass('collapse')
            .removeClass('in')

        this.transitioning = 1

        var complete = function () {
            this.transitioning = 0
            this.$element
                .trigger('hidden.bs.collapse')
                .removeClass('collapsing')
                .addClass('collapse')
        }

        if (!$.support.transition) return complete.call(this)

        this.$element
            [dimension](0)
            .one($.support.transition.end, $.proxy(complete, this))
            .emulateTransitionEnd(350)
    }

    Collapse.prototype.toggle = function () {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }


    // COLLAPSE PLUGIN DEFINITION
    // ==========================

    var old = $.fn.collapse

    $.fn.collapse = function (option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.collapse')
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.collapse.Constructor = Collapse


    // COLLAPSE NO CONFLICT
    // ====================

    $.fn.collapse.noConflict = function () {
        $.fn.collapse = old
        return this
    }


    // COLLAPSE DATA-API
    // =================

    $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
        var $this = $(this), href
        var target = $this.attr('data-target')
            || e.preventDefault()
            || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
        var $target = $(target)
        var data = $target.data('bs.collapse')
        var option = data ? 'toggle' : $this.data()
        var parent = $this.attr('data-parent')
        var $parent = parent && $(parent)

        if (!data || !data.transitioning) {
            if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
            $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
        }

        $target.collapse(option)
    })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) {
    "use strict";

    // DROPDOWN CLASS DEFINITION
    // =========================

    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle=dropdown]'
    var Dropdown = function (element) {
        var $el = $(element).on('click.bs.dropdown', this.toggle)
    }

    Dropdown.prototype.toggle = function (e) {
        var $this = $(this)

        if ($this.is('.disabled, :disabled')) return

        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')

        clearMenus()

        if (!isActive) {
            if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                // if mobile we we use a backdrop because click events don't delegate
                $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
            }

            $parent.trigger(e = $.Event('show.bs.dropdown'))

            if (e.isDefaultPrevented()) return

            $parent
                .toggleClass('open')
                .trigger('shown.bs.dropdown')

            $this.focus()
        }

        return false
    }

    Dropdown.prototype.keydown = function (e) {
        if (!/(38|40|27)/.test(e.keyCode)) return

        var $this = $(this)

        e.preventDefault()
        e.stopPropagation()

        if ($this.is('.disabled, :disabled')) return

        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')

        if (!isActive || (isActive && e.keyCode == 27)) {
            if (e.which == 27) $parent.find(toggle).focus()
            return $this.click()
        }

        var $items = $('[role=menu] li:not(.divider):visible a', $parent)

        if (!$items.length) return

        var index = $items.index($items.filter(':focus'))

        if (e.keyCode == 38 && index > 0)                 index--                        // up
        if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
        if (!~index)                                      index = 0

        $items.eq(index).focus()
    }

    function clearMenus() {
        $(backdrop).remove()
        $(toggle).each(function (e) {
            var $parent = getParent($(this))
            if (!$parent.hasClass('open')) return
            $parent.trigger(e = $.Event('hide.bs.dropdown'))
            if (e.isDefaultPrevented()) return
            $parent.removeClass('open').trigger('hidden.bs.dropdown')
        })
    }

    function getParent($this) {
        var selector = $this.attr('data-target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
        }

        var $parent = selector && $(selector)

        return $parent && $parent.length ? $parent : $this.parent()
    }


    // DROPDOWN PLUGIN DEFINITION
    // ==========================

    var old = $.fn.dropdown

    $.fn.dropdown = function (option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('dropdown')

            if (!data) $this.data('dropdown', (data = new Dropdown(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }

    $.fn.dropdown.Constructor = Dropdown


    // DROPDOWN NO CONFLICT
    // ====================

    $.fn.dropdown.noConflict = function () {
        $.fn.dropdown = old
        return this
    }


    // APPLY TO STANDARD DROPDOWN ELEMENTS
    // ===================================

    $(document)
        .on('click.bs.dropdown.data-api', clearMenus)
        .on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
            e.stopPropagation()
        })
        .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
        .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]', Dropdown.prototype.keydown)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#modals
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) {
    "use strict";

    // MODAL CLASS DEFINITION
    // ======================

    var Modal = function (element, options) {
        this.options = options
        this.$element = $(element)
        this.$backdrop =
            this.isShown = null

        if (this.options.remote) this.$element.load(this.options.remote)
    }

    Modal.DEFAULTS = {
        backdrop: true
        , keyboard: true
        , show: true
    }

    Modal.prototype.toggle = function (_relatedTarget) {
        return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
    }

    Modal.prototype.show = function (_relatedTarget) {
        var that = this
        var e = $.Event('show.bs.modal', {relatedTarget: _relatedTarget})

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

        this.backdrop(function () {
            var transition = $.support.transition && that.$element.hasClass('fade')

            if (!that.$element.parent().length) {
                that.$element.appendTo(document.body) // don't move modals dom position
            }

            that.$element.show()

            if (transition) {
                that.$element[0].offsetWidth // force reflow
            }

            that.$element
                .addClass('in')
                .attr('aria-hidden', false)

            that.enforceFocus()

            var e = $.Event('shown.bs.modal', {relatedTarget: _relatedTarget})

            transition ?
                that.$element.find('.modal-dialog') // wait for modal to slide in
                    .one($.support.transition.end, function () {
                        that.$element.focus().trigger(e)
                    })
                    .emulateTransitionEnd(300) :
                that.$element.focus().trigger(e)
        })
    }

    Modal.prototype.hide = function (e) {
        if (e) e.preventDefault()

        e = $.Event('hide.bs.modal')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.bs.modal')

        this.$element
            .removeClass('in')
            .attr('aria-hidden', true)
            .off('click.dismiss.modal')

        $.support.transition && this.$element.hasClass('fade') ?
            this.$element
                .one($.support.transition.end, $.proxy(this.hideModal, this))
                .emulateTransitionEnd(300) :
            this.hideModal()
    }

    Modal.prototype.enforceFocus = function () {
        $(document)
            .off('focusin.bs.modal') // guard against infinite focus loop
            .on('focusin.bs.modal', $.proxy(function (e) {
                if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                    this.$element.focus()
                }
            }, this))
    }

    Modal.prototype.escape = function () {
        if (this.isShown && this.options.keyboard) {
            this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
                e.which == 27 && this.hide()
            }, this))
        } else if (!this.isShown) {
            this.$element.off('keyup.dismiss.bs.modal')
        }
    }

    Modal.prototype.hideModal = function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
            that.removeBackdrop()
            that.$element.trigger('hidden.bs.modal')
        })
    }

    Modal.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }

    Modal.prototype.backdrop = function (callback) {
        var that = this
        var animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate

            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
                .appendTo(document.body)

            this.$element.on('click.dismiss.modal', $.proxy(function (e) {
                if (e.target !== e.currentTarget) return
                this.options.backdrop == 'static'
                    ? this.$element[0].focus.call(this.$element[0])
                    : this.hide.call(this)
            }, this))

            if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

            this.$backdrop.addClass('in')

            if (!callback) return

            doAnimate ?
                this.$backdrop
                    .one($.support.transition.end, callback)
                    .emulateTransitionEnd(150) :
                callback()

        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')

            $.support.transition && this.$element.hasClass('fade') ?
                this.$backdrop
                    .one($.support.transition.end, callback)
                    .emulateTransitionEnd(150) :
                callback()

        } else if (callback) {
            callback()
        }
    }


    // MODAL PLUGIN DEFINITION
    // =======================

    var old = $.fn.modal

    $.fn.modal = function (option, _relatedTarget) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.modal')
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
            if (typeof option == 'string') data[option](_relatedTarget)
            else if (options.show) data.show(_relatedTarget)
        })
    }

    $.fn.modal.Constructor = Modal


    // MODAL NO CONFLICT
    // =================

    $.fn.modal.noConflict = function () {
        $.fn.modal = old
        return this
    }


    // MODAL DATA-API
    // ==============

    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
        var $this = $(this)
        var href = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
        var option = $target.data('modal') ? 'toggle' : $.extend({remote: !/#/.test(href) && href}, $target.data(), $this.data())

        e.preventDefault()

        $target
            .modal(option, this)
            .one('hide', function () {
                $this.is(':visible') && $this.focus()
            })
    })

    $(document)
        .on('show.bs.modal', '.modal', function () {
            $(document.body).addClass('modal-open')
        })
        .on('hidden.bs.modal', '.modal', function () {
            $(document.body).removeClass('modal-open')
        })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) {
    "use strict";

    // TOOLTIP PUBLIC CLASS DEFINITION
    // ===============================

    var Tooltip = function (element, options) {
        this.type =
            this.options =
                this.enabled =
                    this.timeout =
                        this.hoverState =
                            this.$element = null

        this.init('tooltip', element, options)
    }

    Tooltip.DEFAULTS = {
        animation: true
        , placement: 'top'
        , selector: false
        , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        , trigger: 'hover focus'
        , title: ''
        , delay: 0
        , html: false
        , container: false
    }

    Tooltip.prototype.init = function (type, element, options) {
        this.enabled = true
        this.type = type
        this.$element = $(element)
        this.options = this.getOptions(options)

        var triggers = this.options.trigger.split(' ')

        for (var i = triggers.length; i--;) {
            var trigger = triggers[i]

            if (trigger == 'click') {
                this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
            } else if (trigger != 'manual') {
                var eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
                var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

                this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }

        this.options.selector ?
            (this._options = $.extend({}, this.options, {trigger: 'manual', selector: ''})) :
            this.fixTitle()
    }

    Tooltip.prototype.getDefaults = function () {
        return Tooltip.DEFAULTS
    }

    Tooltip.prototype.getOptions = function (options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options)

        if (options.delay && typeof options.delay == 'number') {
            options.delay = {
                show: options.delay
                , hide: options.delay
            }
        }

        return options
    }

    Tooltip.prototype.getDelegateOptions = function () {
        var options = {}
        var defaults = this.getDefaults()

        this._options && $.each(this._options, function (key, value) {
            if (defaults[key] != value) options[key] = value
        })

        return options
    }

    Tooltip.prototype.enter = function (obj) {
        var self = obj instanceof this.constructor ?
            obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

        clearTimeout(self.timeout)

        self.hoverState = 'in'

        if (!self.options.delay || !self.options.delay.show) return self.show()

        self.timeout = setTimeout(function () {
            if (self.hoverState == 'in') self.show()
        }, self.options.delay.show)
    }

    Tooltip.prototype.leave = function (obj) {
        var self = obj instanceof this.constructor ?
            obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

        clearTimeout(self.timeout)

        self.hoverState = 'out'

        if (!self.options.delay || !self.options.delay.hide) return self.hide()

        self.timeout = setTimeout(function () {
            if (self.hoverState == 'out') self.hide()
        }, self.options.delay.hide)
    }

    Tooltip.prototype.show = function () {
        var e = $.Event('show.bs.' + this.type)

        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e)

            if (e.isDefaultPrevented()) return

            var $tip = this.tip()

            this.setContent()

            if (this.options.animation) $tip.addClass('fade')

            var placement = typeof this.options.placement == 'function' ?
                this.options.placement.call(this, $tip[0], this.$element[0]) :
                this.options.placement

            var autoToken = /\s?auto?\s?/i
            var autoPlace = autoToken.test(placement)
            if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

            $tip
                .detach()
                .css({top: 0, left: 0, display: 'block'})
                .addClass(placement)

            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

            var pos = this.getPosition()
            var actualWidth = $tip[0].offsetWidth
            var actualHeight = $tip[0].offsetHeight

            if (autoPlace) {
                var $parent = this.$element.parent()

                var orgPlacement = placement
                var docScroll = document.documentElement.scrollTop || document.body.scrollTop
                var parentWidth = this.options.container == 'body' ? window.innerWidth : $parent.outerWidth()
                var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
                var parentLeft = this.options.container == 'body' ? 0 : $parent.offset().left

                placement = placement == 'bottom' && pos.top + pos.height + actualHeight - docScroll > parentHeight ? 'top' :
                    placement == 'top' && pos.top - docScroll - actualHeight < 0 ? 'bottom' :
                        placement == 'right' && pos.right + actualWidth > parentWidth ? 'left' :
                            placement == 'left' && pos.left - actualWidth < parentLeft ? 'right' :
                                placement

                $tip
                    .removeClass(orgPlacement)
                    .addClass(placement)
            }

            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

            this.applyPlacement(calculatedOffset, placement)
            this.$element.trigger('shown.bs.' + this.type)
        }
    }

    Tooltip.prototype.applyPlacement = function (offset, placement) {
        var replace
        var $tip = this.tip()
        var width = $tip[0].offsetWidth
        var height = $tip[0].offsetHeight

        // manually read margins because getBoundingClientRect includes difference
        var marginTop = parseInt($tip.css('margin-top'), 10)
        var marginLeft = parseInt($tip.css('margin-left'), 10)

        // we must check for NaN for ie 8/9
        if (isNaN(marginTop))  marginTop = 0
        if (isNaN(marginLeft)) marginLeft = 0

        offset.top = offset.top + marginTop
        offset.left = offset.left + marginLeft

        $tip
            .offset(offset)
            .addClass('in')

        // check to see if placing tip in new offset caused the tip to resize itself
        var actualWidth = $tip[0].offsetWidth
        var actualHeight = $tip[0].offsetHeight

        if (placement == 'top' && actualHeight != height) {
            replace = true
            offset.top = offset.top + height - actualHeight
        }

        if (/bottom|top/.test(placement)) {
            var delta = 0

            if (offset.left < 0) {
                delta = offset.left * -2
                offset.left = 0

                $tip.offset(offset)

                actualWidth = $tip[0].offsetWidth
                actualHeight = $tip[0].offsetHeight
            }

            this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
        } else {
            this.replaceArrow(actualHeight - height, actualHeight, 'top')
        }

        if (replace) $tip.offset(offset)
    }

    Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
        this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    }

    Tooltip.prototype.setContent = function () {
        var $tip = this.tip()
        var title = this.getTitle()

        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
        $tip.removeClass('fade in top bottom left right')
    }

    Tooltip.prototype.hide = function () {
        var that = this
        var $tip = this.tip()
        var e = $.Event('hide.bs.' + this.type)

        function complete() {
            if (that.hoverState != 'in') $tip.detach()
        }

        this.$element.trigger(e)

        if (e.isDefaultPrevented()) return

        $tip.removeClass('in')

        $.support.transition && this.$tip.hasClass('fade') ?
            $tip
                .one($.support.transition.end, complete)
                .emulateTransitionEnd(150) :
            complete()

        this.$element.trigger('hidden.bs.' + this.type)

        return this
    }

    Tooltip.prototype.fixTitle = function () {
        var $e = this.$element
        if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
            $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
        }
    }

    Tooltip.prototype.hasContent = function () {
        return this.getTitle()
    }

    Tooltip.prototype.getPosition = function () {
        var el = this.$element[0]
        return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
            width: el.offsetWidth
            , height: el.offsetHeight
        }, this.$element.offset())
    }

    Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
        return placement == 'bottom' ? {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2} :
            placement == 'top' ? {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2} :
                placement == 'left' ? {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth} :
                    /* placement == 'right' */ {
                    top: pos.top + pos.height / 2 - actualHeight / 2,
                    left: pos.left + pos.width
                }
    }

    Tooltip.prototype.getTitle = function () {
        var title
        var $e = this.$element
        var o = this.options

        title = $e.attr('data-original-title')
            || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title)

        return title
    }

    Tooltip.prototype.tip = function () {
        return this.$tip = this.$tip || $(this.options.template)
    }

    Tooltip.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
    }

    Tooltip.prototype.validate = function () {
        if (!this.$element[0].parentNode) {
            this.hide()
            this.$element = null
            this.options = null
        }
    }

    Tooltip.prototype.enable = function () {
        this.enabled = true
    }

    Tooltip.prototype.disable = function () {
        this.enabled = false
    }

    Tooltip.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }

    Tooltip.prototype.toggle = function (e) {
        var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
        self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }

    Tooltip.prototype.destroy = function () {
        this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
    }


    // TOOLTIP PLUGIN DEFINITION
    // =========================

    var old = $.fn.tooltip

    $.fn.tooltip = function (option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.tooltip')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.tooltip.Constructor = Tooltip


    // TOOLTIP NO CONFLICT
    // ===================

    $.fn.tooltip.noConflict = function () {
        $.fn.tooltip = old
        return this
    }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#popovers
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) {
    "use strict";

    // POPOVER PUBLIC CLASS DEFINITION
    // ===============================

    var Popover = function (element, options) {
        this.init('popover', element, options)
    }

    if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right'
        ,
        trigger: 'click'
        ,
        content: ''
        ,
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    })


    // NOTE: POPOVER EXTENDS tooltip.js
    // ================================

    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

    Popover.prototype.constructor = Popover

    Popover.prototype.getDefaults = function () {
        return Popover.DEFAULTS
    }

    Popover.prototype.setContent = function () {
        var $tip = this.tip()
        var title = this.getTitle()
        var content = this.getContent()

        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
        $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

        $tip.removeClass('fade top bottom left right in')

        // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
        // this manually by checking the contents.
        if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
    }

    Popover.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }

    Popover.prototype.getContent = function () {
        var $e = this.$element
        var o = this.options

        return $e.attr('data-content')
            || (typeof o.content == 'function' ?
                o.content.call($e[0]) :
                o.content)
    }

    Popover.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find('.arrow')
    }

    Popover.prototype.tip = function () {
        if (!this.$tip) this.$tip = $(this.options.template)
        return this.$tip
    }


    // POPOVER PLUGIN DEFINITION
    // =========================

    var old = $.fn.popover

    $.fn.popover = function (option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.popover')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.popover.Constructor = Popover


    // POPOVER NO CONFLICT
    // ===================

    $.fn.popover.noConflict = function () {
        $.fn.popover = old
        return this
    }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#scrollspy
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) {
    "use strict";

    // SCROLLSPY CLASS DEFINITION
    // ==========================

    function ScrollSpy(element, options) {
        var href
        var process = $.proxy(this.process, this)

        this.$element = $(element).is('body') ? $(window) : $(element)
        this.$body = $('body')
        this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options)
        this.selector = (this.options.target
            || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
            || '') + ' .nav li > a'
        this.offsets = $([])
        this.targets = $([])
        this.activeTarget = null

        this.refresh()
        this.process()
    }

    ScrollSpy.DEFAULTS = {
        offset: 10
    }

    ScrollSpy.prototype.refresh = function () {
        var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

        this.offsets = $([])
        this.targets = $([])

        var self = this
        var $targets = this.$body
            .find(this.selector)
            .map(function () {
                var $el = $(this)
                var href = $el.data('target') || $el.attr('href')
                var $href = /^#\w/.test(href) && $(href)

                return ($href
                    && $href.length
                    && [[$href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href]]) || null
            })
            .sort(function (a, b) {
                return a[0] - b[0]
            })
            .each(function () {
                self.offsets.push(this[0])
                self.targets.push(this[1])
            })
    }

    ScrollSpy.prototype.process = function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
        var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
        var maxScroll = scrollHeight - this.$scrollElement.height()
        var offsets = this.offsets
        var targets = this.targets
        var activeTarget = this.activeTarget
        var i

        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets.last()[0]) && this.activate(i)
        }

        for (i = offsets.length; i--;) {
            activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activate(targets[i])
        }
    }

    ScrollSpy.prototype.activate = function (target) {
        this.activeTarget = target

        $(this.selector)
            .parents('.active')
            .removeClass('active')

        var selector = this.selector
            + '[data-target="' + target + '"],'
            + this.selector + '[href="' + target + '"]'

        var active = $(selector)
            .parents('li')
            .addClass('active')

        if (active.parent('.dropdown-menu').length) {
            active = active
                .closest('li.dropdown')
                .addClass('active')
        }

        active.trigger('activate')
    }


    // SCROLLSPY PLUGIN DEFINITION
    // ===========================

    var old = $.fn.scrollspy

    $.fn.scrollspy = function (option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.scrollspy')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.scrollspy.Constructor = ScrollSpy


    // SCROLLSPY NO CONFLICT
    // =====================

    $.fn.scrollspy.noConflict = function () {
        $.fn.scrollspy = old
        return this
    }


    // SCROLLSPY DATA-API
    // ==================

    $(window).on('load', function () {
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this)
            $spy.scrollspy($spy.data())
        })
    })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tabs
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) {
    "use strict";

    // TAB CLASS DEFINITION
    // ====================

    var Tab = function (element) {
        this.element = $(element)
    }

    Tab.prototype.show = function () {
        var $this = this.element
        var $ul = $this.closest('ul:not(.dropdown-menu)')
        var selector = $this.attr('data-target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
        }

        if ($this.parent('li').hasClass('active')) return

        var previous = $ul.find('.active:last a')[0]
        var e = $.Event('show.bs.tab', {
            relatedTarget: previous
        })

        $this.trigger(e)

        if (e.isDefaultPrevented()) return

        var $target = $(selector)

        this.activate($this.parent('li'), $ul)
        this.activate($target, $target.parent(), function () {
            $this.trigger({
                type: 'shown.bs.tab'
                , relatedTarget: previous
            })
        })
    }

    Tab.prototype.activate = function (element, container, callback) {
        var $active = container.find('> .active')
        var transition = callback
            && $.support.transition
            && $active.hasClass('fade')

        function next() {
            $active
                .removeClass('active')
                .find('> .dropdown-menu > .active')
                .removeClass('active')

            element.addClass('active')

            if (transition) {
                element[0].offsetWidth // reflow for transition
                element.addClass('in')
            } else {
                element.removeClass('fade')
            }

            if (element.parent('.dropdown-menu')) {
                element.closest('li.dropdown').addClass('active')
            }

            callback && callback()
        }

        transition ?
            $active
                .one($.support.transition.end, next)
                .emulateTransitionEnd(150) :
            next()

        $active.removeClass('in')
    }


    // TAB PLUGIN DEFINITION
    // =====================

    var old = $.fn.tab

    $.fn.tab = function (option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.tab')

            if (!data) $this.data('bs.tab', (data = new Tab(this)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.tab.Constructor = Tab


    // TAB NO CONFLICT
    // ===============

    $.fn.tab.noConflict = function () {
        $.fn.tab = old
        return this
    }


    // TAB DATA-API
    // ============

    $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#affix
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) {
    "use strict";

    // AFFIX CLASS DEFINITION
    // ======================

    var Affix = function (element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options)
        this.$window = $(window)
            .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
            .on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this))

        this.$element = $(element)
        this.affixed =
            this.unpin = null

        this.checkPosition()
    }

    Affix.RESET = 'affix affix-top affix-bottom'

    Affix.DEFAULTS = {
        offset: 0
    }

    Affix.prototype.checkPositionWithEventLoop = function () {
        setTimeout($.proxy(this.checkPosition, this), 1)
    }

    Affix.prototype.checkPosition = function () {
        if (!this.$element.is(':visible')) return

        var scrollHeight = $(document).height()
        var scrollTop = this.$window.scrollTop()
        var position = this.$element.offset()
        var offset = this.options.offset
        var offsetTop = offset.top
        var offsetBottom = offset.bottom

        if (typeof offset != 'object')         offsetBottom = offsetTop = offset
        if (typeof offsetTop == 'function')    offsetTop = offset.top()
        if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

        var affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ? false :
            offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop != null && (scrollTop <= offsetTop) ? 'top' : false

        if (this.affixed === affix) return
        if (this.unpin) this.$element.css('top', '')

        this.affixed = affix
        this.unpin = affix == 'bottom' ? position.top - scrollTop : null

        this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''))

        if (affix == 'bottom') {
            this.$element.offset({top: document.body.offsetHeight - offsetBottom - this.$element.height()})
        }
    }


    // AFFIX PLUGIN DEFINITION
    // =======================

    var old = $.fn.affix

    $.fn.affix = function (option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.affix')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.affix.Constructor = Affix


    // AFFIX NO CONFLICT
    // =================

    $.fn.affix.noConflict = function () {
        $.fn.affix = old
        return this
    }


    // AFFIX DATA-API
    // ==============

    $(window).on('load', function () {
        $('[data-spy="affix"]').each(function () {
            var $spy = $(this)
            var data = $spy.data()

            data.offset = data.offset || {}

            if (data.offsetBottom) data.offset.bottom = data.offsetBottom
            if (data.offsetTop)    data.offset.top = data.offsetTop

            $spy.affix(data)
        })
    })

}(window.jQuery);
