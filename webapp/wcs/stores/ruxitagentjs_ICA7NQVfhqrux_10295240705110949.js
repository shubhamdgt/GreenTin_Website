/*
 Copyright and licenses see https://www.dynatrace.com/company/trust-center/customers/reports/ */
(function() {
    function Ia() {
        document.cookie = "".concat("__dTCookie", "=").concat("1", ";SameSite=Lax");
        var Oa = -1 !== document.cookie.indexOf("__dTCookie");
        document.cookie = "".concat("__dTCookie", "=").concat("1", "; expires=Thu, 01-Jan-1970 00:00:01 GMT");
        return Oa
    }

    function jb() {
        return void 0 === db.dialogArguments ? navigator.cookieEnabled || Ia() : Ia()
    }

    function nb() {
        var Oa;
        if (jb()) {
            var Ra = db.dT_,
                Wa = null === Ra || void 0 === Ra ? void 0 : Ra.platformPrefix;
            if (!Ra || Wa) {
                var Sa = null === Ra || void 0 === Ra ? void 0 : Ra.minAgentVersion;
                Sa && "10295240705110949" < Sa + "" ? window.console.log("[CookiePrefix/initConfig] Min agent version detected, and javascript agent is older - the javascript agent will not be initialized!") : (Sa = (Oa = {}, Oa.cfg = "#CONFIGSTRING#|auto=#AUTO#|domain=#DOMAIN#|rid=RID_#REQUEST_ID#|rpid=#RESPONSE_ID#|app=#APP#", Oa.iCE = jb, Oa.platformCookieOffset = null === Ra || void 0 === Ra ? void 0 : Ra.platformCookieOffset, Oa), Wa && (Sa.platformPrefix = Wa), db.dT_ = Sa)
            }
        }
    }
    this.dT_ && dT_.prm && dT_.prm();
    var db = "undefined" !== typeof globalThis ? globalThis :
        "undefined" !== typeof window ? window : void 0,
        kb;
    "documentMode" in document && !isNaN(document.documentMode) || (db.dT_ && !db.dT_.platformPrefix ? db.dT_.gCP || (null === (kb = db.console) || void 0 === kb ? void 0 : kb.log("Duplicate agent injection detected, turning off redundant initConfig."), db.dT_.di = 1) : nb())
})();
(function() {
    function Ia(g, q, w) {
        if (w || 2 === arguments.length)
            for (var T = 0, E = q.length, ta; T < E; T++) !ta && T in q || (ta || (ta = Array.prototype.slice.call(q, 0, T)), ta[T] = q[T]);
        return g.concat(ta || Array.prototype.slice.call(q))
    }

    function jb(g) {
        var q;
        return function() {
            if (q) return q;
            var w, T, E, ta, Kb = -1 !== ag ? ag : (null === (T = null === (w = Ua.dT_) || void 0 === w ? void 0 : w.scv) || void 0 === T ? void 0 : T.call(w, "postfix")) || (null === (ta = null === (E = Ua.dT_) || void 0 === E ? void 0 : E.gCP) || void 0 === ta ? void 0 : ta.call(E));
            return q = w = (ag = Kb) ? "".concat(g).concat(Kb) :
                g
        }
    }

    function nb() {
        var g = 0;
        try {
            g = Math.round(Ua.performance.timeOrigin)
        } catch (q) {}
        if (0 >= g || isNaN(g) || !isFinite(g)) {
            Ue.push({
                severity: "Warning",
                type: "ptoi",
                text: "performance.timeOrigin is invalid, with a value of [".concat(g, "]. Falling back to performance.timing.navigationStart")
            });
            g = 0;
            try {
                g = Ua.performance.timing.navigationStart
            } catch (q) {}
            g = 0 >= g || isNaN(g) || !isFinite(g) ? bg : g
        }
        me = g;
        xe = db;
        return me
    }

    function db() {
        return me
    }

    function kb() {
        return xe()
    }

    function Oa() {
        var g, q = 0;
        if (null === (g = null === Ua || void 0 ===
                Ua ? void 0 : Ua.performance) || void 0 === g ? 0 : g.now) try {
            q = Math.round(Ua.performance.now())
        } catch (w) {}
        return 0 >= q || isNaN(q) || !isFinite(q) ? (new Date).getTime() - xe() : q
    }

    function Ra() {
        var g;
        return !(null === (g = Ua.console) || void 0 === g || !g.log)
    }

    function Wa(g, q) {
        if (!q) return "";
        var w = g + "=";
        g = q.indexOf(w);
        if (0 > g) return "";
        for (; 0 <= g;) {
            if (0 === g || " " === q.charAt(g - 1) || ";" === q.charAt(g - 1)) return w = g + w.length, g = q.indexOf(";", g), 0 <= g ? q.substring(w, g) : q.substring(w);
            g = q.indexOf(w, g + w.length)
        }
        return ""
    }

    function Sa(g) {
        return Wa(g,
            document.cookie)
    }

    function ab() {}

    function Ka(g, q) {
        void 0 === q && (q = document.cookie);
        return Wa(g, q)
    }

    function Bb() {}

    function Ea(g, q) {
        return function() {
            g.apply(q, arguments)
        }
    }

    function ba(g) {
        if (!(this instanceof ba)) throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof g) throw new TypeError("not a function");
        this.ma = 0;
        this.oc = !1;
        this.qa = void 0;
        this.Ga = [];
        Na(g, this)
    }

    function qa(g, q) {
        for (; 3 === g.ma;) g = g.qa;
        0 === g.ma ? g.Ga.push(q) : (g.oc = !0, ba.Fb(function() {
            var w = 1 === g.ma ? q.Me : q.Ne;
            if (null === w)(1 === g.ma ? eb : va)(q.promise, g.qa);
            else {
                try {
                    var T = w(g.qa)
                } catch (E) {
                    va(q.promise, E);
                    return
                }
                eb(q.promise, T)
            }
        }))
    }

    function eb(g, q) {
        try {
            if (q === g) throw new TypeError("A promise cannot be resolved with itself.");
            if (q && ("object" === typeof q || "function" === typeof q)) {
                var w = q.then;
                if (q instanceof ba) {
                    g.ma = 3;
                    g.qa = q;
                    U(g);
                    return
                }
                if ("function" === typeof w) {
                    Na(Ea(w, q), g);
                    return
                }
            }
            g.ma = 1;
            g.qa = q;
            U(g)
        } catch (T) {
            va(g, T)
        }
    }

    function va(g, q) {
        g.ma = 2;
        g.qa = q;
        U(g)
    }

    function U(g) {
        2 === g.ma && 0 === g.Ga.length && ba.Fb(function() {
            g.oc ||
                ba.tc(g.qa)
        });
        for (var q = 0, w = g.Ga.length; q < w; q++) qa(g, g.Ga[q]);
        g.Ga = null
    }

    function Y(g, q, w) {
        this.Me = "function" === typeof g ? g : null;
        this.Ne = "function" === typeof q ? q : null;
        this.promise = w
    }

    function Na(g, q) {
        var w = !1;
        try {
            g(function(T) {
                w || (w = !0, eb(q, T))
            }, function(T) {
                w || (w = !0, va(q, T))
            })
        } catch (T) {
            w || (w = !0, va(q, T))
        }
    }

    function La() {
        Jf.Fb = function(g) {
            if ("string" === typeof g) throw Error("Promise polyfill called _immediateFn with string");
            g()
        };
        Jf.tc = function() {};
        return Jf
    }

    function ea(g, q) {
        var w;
        void 0 === q && (q = []);
        if (!g ||
            "object" !== typeof g && "function" !== typeof g) return !1;
        var T = "number" !== typeof q ? q : [],
            E = null,
            ta = [];
        switch ("number" === typeof q ? q : 5) {
            case 1:
                E = "Boolean";
                break;
            case 2:
                E = "Number";
                break;
            case 3:
                E = "String";
                break;
            case 4:
                E = "Function";
                break;
            case 5:
                E = "Object";
                break;
            case 6:
                E = "Date";
                ta.push("getTime");
                break;
            case 7:
                E = "Error";
                ta.push("name", "message");
                break;
            case 8:
                E = "Element";
                break;
            case 9:
                E = "HTMLElement";
                break;
            case 10:
                E = "HTMLImageElement";
                ta.push("complete");
                break;
            case 11:
                E = "PerformanceEntry";
                break;
            case 12:
                E = "PerformanceTiming";
                break;
            case 13:
                E = "PerformanceResourceTiming";
                break;
            case 14:
                E = "PerformanceNavigationTiming";
                break;
            case 15:
                E = "CSSRule";
                ta.push("cssText", "parentStyleSheet");
                break;
            case 16:
                E = "CSSStyleSheet";
                ta.push("cssRules", "insertRule");
                break;
            case 17:
                E = "Request";
                ta.push("url");
                break;
            case 18:
                E = "Response";
                ta.push("ok", "status", "statusText");
                break;
            case 19:
                E = "Set";
                ta.push("add", "entries", "forEach");
                break;
            case 20:
                E = "Map";
                ta.push("set", "entries", "forEach");
                break;
            case 21:
                E = "Worker";
                ta.push("addEventListener", "postMessage",
                    "terminate");
                break;
            case 22:
                E = "XMLHttpRequest";
                ta.push("open", "send", "setRequestHeader");
                break;
            case 23:
                E = "SVGScriptElement";
                ta.push("ownerSVGElement", "type");
                break;
            case 24:
                E = "HTMLMetaElement";
                ta.push("httpEquiv", "content", "name");
                break;
            case 25:
                E = "HTMLHeadElement";
                break;
            case 26:
                E = "ArrayBuffer";
                break;
            case 27:
                E = "ShadowRoot", ta.push("host", "mode")
        }
        q = E;
        if (!q) return !1;
        ta = ta.length ? ta : T;
        if (!T.length) try {
            if (Ua[q] && g instanceof Ua[q] || Object.prototype.toString.call(g) === "[object " + q + "]") return !0;
            if (g && g.nodeType &&
                1 === g.nodeType) {
                var Kb = null === (w = g.ownerDocument.defaultView) || void 0 === w ? void 0 : w[q];
                if ("function" === typeof Kb && g instanceof Kb) return !0
            }
        } catch (Ob) {}
        for (w = 0; w < ta.length; w++)
            if (T = ta[w], "string" !== typeof T && "number" !== typeof T && "symbol" !== typeof T || !(T in g)) return !1;
        return !!ta.length
    }

    function S(g, q, w, T) {
        "undefined" === typeof T && (T = ma(q, !0));
        "boolean" === typeof T && (T = ma(q, T));
        g === Ua ? u && u(q, w, T) : la && ea(g, 21) ? Ta.call(g, q, w, T) : g.addEventListener && (g === Ua.document || g === Ua.document.documentElement ? A.call(g,
            q, w, T) : u.call(g, q, w, T));
        T = !1;
        for (var E = hb.length; 0 <= --E;) {
            var ta = hb[E];
            if (ta.object === g && ta.event === q && ta.H === w) {
                T = !0;
                break
            }
        }
        T || hb.push({
            object: g,
            event: q,
            H: w
        })
    }

    function P(g, q, w, T) {
        for (var E = hb.length; 0 <= --E;) {
            var ta = hb[E];
            if (ta.object === g && ta.event === q && ta.H === w) {
                hb.splice(E, 1);
                break
            }
        }
        "undefined" === typeof T && (T = ma(q, !0));
        "boolean" === typeof T && (T = ma(q, T));
        g === Ua ? t && t(q, w, T) : g.removeEventListener && (g === Ua.document || g === Ua.document.documentElement ? Q.call(g, q, w, T) : t.call(g, q, w, T))
    }

    function ma(g, q) {
        var w = !1;
        try {
            if (u && -1 < pb.indexOf(g)) {
                var T = Object.defineProperty({}, "passive", {
                    get: function() {
                        w = !0
                    }
                });
                u("test", ab, T)
            }
        } catch (E) {}
        return w ? {
            passive: !0,
            capture: q
        } : q
    }

    function Ja() {
        for (var g = hb, q = g.length; 0 <= --q;) {
            var w = g[q];
            P(w.object, w.event, w.H)
        }
        hb = []
    }

    function O(g) {
        return "function" === typeof g && /{\s+\[native code]/.test(Function.prototype.toString.call(g))
    }

    function ca(g, q) {
        for (var w, T = [], E = 2; E < arguments.length; E++) T[E - 2] = arguments[E];
        return void 0 !== Function.prototype.bind && O(Function.prototype.bind) ? (w = Function.prototype.bind).call.apply(w,
            Ia([g, q], T, !1)) : function() {
            for (var ta = 0; ta < arguments.length; ta++);
            return g.apply(q, (T || []).concat(Array.prototype.slice.call(arguments) || []))
        }
    }

    function I() {
        if (rb) {
            var g = new rb;
            if (Nb)
                for (var q = 0, w = zb; q < w.length; q++) {
                    var T = w[q];
                    void 0 !== Nb[T] && (g[T] = ca(Nb[T], g))
                }
            return g
        }
        return new Ua.XMLHttpRequest
    }

    function J() {
        document.cookie = "".concat("__dTCookie", "=").concat("1", ";SameSite=Lax");
        var g = -1 !== document.cookie.indexOf("__dTCookie");
        document.cookie = "".concat("__dTCookie", "=").concat("1", "; expires=Thu, 01-Jan-1970 00:00:01 GMT");
        return g
    }

    function fa() {
        return void 0 === Ua.dialogArguments ? navigator.cookieEnabled || J() : J()
    }

    function Z() {
        return Ua.dT_
    }

    function Aa(g) {
        g = encodeURIComponent(g);
        var q = [];
        if (g)
            for (var w = 0; w < g.length; w++) {
                var T = g.charAt(w);
                q.push(nc[T] || T)
            }
        return q.join("")
    }

    function W(g) {
        -1 < g.indexOf("^") && (g = g.split("^^").join("^"), g = g.split("^dq").join('"'), g = g.split("^rb").join(">"), g = g.split("^lb").join("<"), g = g.split("^p").join("|"), g = g.split("^e").join("="), g = g.split("^s").join(";"), g = g.split("^c").join(","), g = g.split("^bs").join("\\"));
        return g
    }

    function Ca() {
        return xc
    }

    function bb(g) {
        xc = g
    }

    function lb(g) {
        var q = aa("rid"),
            w = aa("rpid");
        q && (g.rid = q);
        w && (g.rpid = w)
    }

    function Ab(g) {
        if (g = g.xb) {
            g = W(g);
            try {
                xc = new RegExp(g, "i")
            } catch (q) {}
        } else xc = void 0
    }

    function oa(g) {
        return "n" === g || "s" === g || "l" === g ? ";SameSite=".concat(rc[g]) : ""
    }

    function ub(g, q, w) {
        var T = 1,
            E = 0;
        do document.cookie = g + '=""' + (q ? ";domain=" + q : "") + ";path=" + w.substring(0, T) + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;", T = w.indexOf("/", T), E++; while (-1 !== T && 5 > E)
    }

    function kc() {
        var g = (document.domain ||
            location.hostname || "").split(".");
        return 1 >= g.length ? [] : g
    }

    function Gc(g, q) {
        q = "dTValidationCookieValue;path=/;domain=".concat(g).concat(oa(q));
        document.cookie = "".concat(qf(), "=").concat(q);
        return Ka(qf()) ? (ub(qf(), g, "/"), !0) : !1
    }

    function Mc() {
        if (Ua.MobileAgent || Ua.dynatraceMobile) {
            var g = Sa("dtAdkSettings");
            return qb(g).privacyState || null
        }
        return null
    }

    function mb(g, q) {
        return !Rb() || Z().overloadPrevention && !ja() ? null : g.apply(this, q)
    }

    function Rb() {
        var g = Mc();
        return 2 === g || 1 === g ? !1 : !D("coo") || D("cooO") ||
            ja()
    }

    function Hc(g, q) {
        try {
            Ua.sessionStorage.setItem(g, q)
        } catch (w) {}
    }

    function oc(g, q) {
        mb(Hc, [g, q])
    }

    function lc(g) {
        try {
            return Ua.sessionStorage.getItem(g)
        } catch (q) {}
        return null
    }

    function Vb(g) {
        try {
            Ua.sessionStorage.removeItem(g)
        } catch (q) {}
    }

    function tb(g) {
        document.cookie = g + '="";path=/' + (aa("domain") ? ";domain=" + aa("domain") : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    }

    function tc(g, q, w, T) {
        q || 0 === q ? (q = (q + "").replace(/[;\n\r]/g, "_"), g = g + "=" + q + ";path=/" + (aa("domain") ? ";domain=" + aa("domain") : ""), w && (g +=
            ";expires=" + w.toUTCString()), g += oa(aa("cssm")), T && "https:" === location.protocol && (g += ";Secure"), document.cookie = g) : tb(g)
    }

    function Xa(g, q, w, T) {
        mb(tc, [g, q, w, T])
    }

    function fc(g) {
        return -1 === g.indexOf("v_4") ? !1 : !0
    }

    function Gb(g) {
        g = Ka(Fd(), g);
        g || ((g = lc(Fd())) && fc(g) ? ec(g) : g = "");
        return fc(g) ? g : ""
    }

    function ec(g) {
        Xa(Fd(), g, void 0, D("ssc"))
    }

    function C(g) {
        return (g = g || Gb()) ? qb(g) : {
            sessionId: "",
            serverId: "",
            overloadState: 0,
            appState: {}
        }
    }

    function pa(g) {
        return C(g).serverId
    }

    function Ga(g) {
        return C(g).sessionId
    }

    function ja() {
        return 0 <=
            navigator.userAgent.indexOf("RuxitSynthetic")
    }

    function Cb(g) {
        var q = {},
            w = 0;
        for (g = g.split("|"); w < g.length; w++) {
            var T = g[w].split("=");
            2 === T.length && (q[T[0]] = decodeURIComponent(T[1].replace(/\+/g, " ")))
        }
        return q
    }

    function Za() {
        var g = aa("csu");
        return (g.indexOf("dbg") === g.length - 3 ? g.substring(0, g.length - 3) : g) + "_" + aa("app") + "_Store"
    }

    function v(g, q, w) {
        void 0 === q && (q = {});
        var T = 0;
        for (g = g.split("|"); T < g.length; T++) {
            var E = g[T],
                ta = E,
                Kb = E.indexOf("="); - 1 === Kb ? q[ta] = "1" : (ta = E.substring(0, Kb), q[ta] = E.substring(Kb +
                1, E.length))
        }!w && (w = q, T = w.spc) && (g = document.createElement("textarea"), g.innerHTML = T, w.spc = g.value);
        return q
    }

    function F(g) {
        var q;
        return null !== (q = bc[g]) && void 0 !== q ? q : Zc[g]
    }

    function D(g) {
        g = F(g);
        return "false" === g || "0" === g ? !1 : !!g
    }

    function N(g) {
        var q = F(g);
        q = parseInt(q);
        isNaN(q) && (q = Zc[g]);
        return q
    }

    function aa(g) {
        return (F(g) || "") + ""
    }

    function H(g, q) {
        bc[g] = q + ""
    }

    function na(g) {
        return bc = g
    }

    function R(g) {
        var q = bc[g];
        q && (bc[g] = 0 > q.indexOf("#" + g.toUpperCase()) ? q : "")
    }

    function ra(g) {
        var q = g.agentUri;
        q && -1 < q.indexOf("_") &&
            (q = /([a-zA-Z]*)[0-9]{0,4}_([a-zA-Z_0-9]*)_[0-9]+/g.exec(q)) && q.length && 2 < q.length && (g.csu = q[1], g.featureHash = q[2])
    }

    function za(g) {
        var q = Z().platformCookieOffset;
        if ("number" === typeof q) {
            a: {
                var w = aa("cssm");
                var T = kc();
                if (T.length)
                    for (q = T.slice(q); q.length;) {
                        if (Gc(q.join("."), w)) {
                            w = q.join(".");
                            break a
                        }
                        q.shift()
                    }
                w = ""
            }
            w && (g.domain = w)
        }
        else if (w = g.domain || "", q = (q = location.hostname) && w ? q === w || -1 !== q.indexOf("." + w, q.length - ("." + w).length) : !0, !w || !q) {
            g.domainOverride || (g.domainOriginal = g.domain || "", g.domainOverride =
                "".concat(location.hostname, ",").concat(w), delete g.domain);
            a: {
                T = aa("cssm");
                var E = kc().reverse();
                if (E.length)
                    for (var ta = E[0], Kb = 1; Kb <= E.length; Kb++) {
                        if (Gc(ta, T)) {
                            T = ta;
                            break a
                        }
                        var Ob = E[Kb];
                        Ob && (ta = "".concat(Ob, ".").concat(ta))
                    }
                T = ""
            }
            T && (g.domain = T);
            q || Ue.push({
                type: "dpi",
                severity: "Warning",
                text: 'Configured domain "'.concat(w, '" is invalid for current location "').concat(location.hostname, '". Agent will use "').concat(g.domain, '" instead.')
            })
        }
    }

    function $a(g, q) {
        za(g);
        var w = bc.pVO;
        w && (g.pVO = w);
        q || (g.bp =
            (g.bp || Zc.bp) + "")
    }

    function vb() {
        return bc
    }

    function Wb(g) {
        return Zc[g] === F(g)
    }

    function qb(g) {
        var q, w = {},
            T = {
                sessionId: "",
                serverId: "",
                overloadState: 0,
                appState: w
            },
            E = g.split("_");
        if (2 < E.length && 0 === E.length % 2) {
            g = +E[1];
            if (isNaN(g) || 3 > g) return T;
            g = {};
            for (var ta = 2; ta < E.length; ta++) {
                var Kb = E[ta];
                0 === Kb.indexOf(Kf) ? w[Kb.substring(6).toLowerCase()] = +E[ta + 1] : g[Kb] = E[ta + 1];
                ta++
            }
            g.sn ? (E = g.sn, E = E.length === Ve || 12 >= E.length ? E : "") : E = "hybrid";
            T.sessionId = E;
            if (g.srv) {
                a: {
                    E = g.srv.replace("-2D", "-");
                    if (!isNaN(+E) && (ta =
                            parseInt(E), -99 <= ta && 99 >= ta)) break a;E = ""
                }
                T.serverId = E
            }
            E = +g.ol;
            1 === E && Fb(ja());
            0 <= E && 2 >= E && (T.overloadState = E);
            g = +g.prv;
            isNaN(g) || (T.privacyState = 1 > g || 4 < g ? 1 : g);
            g = null === (q = aa("app")) || void 0 === q ? void 0 : q.toLowerCase();
            q = w[g];
            isNaN(q) || 0 !== q || Fb(ja())
        }
        return T
    }

    function Fb(g) {
        var q = Z();
        g || (q.disabled = !0, q.overloadPrevention = !0)
    }

    function Zb() {
        return Rc()
    }

    function wb(g, q) {
        function w() {
            delete hf[ta];
            g.apply(this, arguments)
        }
        for (var T = [], E = 2; E < arguments.length; E++) T[E - 2] = arguments[E];
        if ("apply" in qd) {
            T.unshift(w,
                q);
            var ta = qd.apply(Ua, T)
        } else ta = qd(w, q);
        hf[ta] = !0;
        return ta
    }

    function Xb(g) {
        delete hf[g];
        "apply" in Nc ? Nc.call(Ua, g) : Nc(g)
    }

    function Sc(g) {
        Gd.push(g)
    }

    function ye(g) {
        for (var q = Gd.length; q--;)
            if (Gd[q] === g) {
                Gd.splice(q, 1);
                break
            }
    }

    function ze() {
        return Gd
    }

    function Nd(g, q) {
        return We(g, q)
    }

    function sc(g) {
        ce(g)
    }

    function yc(g, q) {
        if (!rd || !Ee) return "";
        g = new rd([g], {
            type: q
        });
        return Ee(g)
    }

    function Kc(g, q) {
        return Qd ? new Qd(g, q) : void 0
    }

    function od(g) {
        "function" === typeof g && Lf.push(g)
    }

    function ya() {
        return Lf
    }

    function G() {
        return bg
    }

    function ia(g) {
        return function() {
            for (var q = [], w = 0; w < arguments.length; w++) q[w] = arguments[w];
            if ("number" !== typeof q[0] || !hf[q[0]]) try {
                return g.apply(this, q)
            } catch (T) {
                return g(q[0])
            }
        }
    }

    function xa() {
        return Ue
    }

    function Ba() {
        xe = nb;
        Ua.performance && (Rc = function() {
            return Math.round(xe() + Oa())
        });
        if (!Rc || isNaN(Rc()) || 0 >= Rc() || !isFinite(Rc())) Rc = function() {
            return (new Date).getTime()
        }
    }

    function Da() {
        xd && (Ua.clearTimeout = Nc, Ua.clearInterval = ce, xd = !1)
    }

    function Ma(g, q) {
        try {
            Ua.localStorage.setItem(g, q)
        } catch (w) {}
    }

    function sa(g) {
        try {
            Ua.localStorage.removeItem(g)
        } catch (q) {}
    }

    function Ha(g) {
        try {
            return Ua.localStorage.getItem(g)
        } catch (q) {}
        return null
    }

    function ob(g) {
        Rb() ? g() : (ne || (ne = []), ne.push(g))
    }

    function Pa() {
        if (D("coo") && !Rb()) {
            for (var g = 0, q = ne; g < q.length; g++) wb(q[g], 0);
            ne = [];
            H("cooO", !0)
        }
    }

    function gb() {
        if (D("coo") && Rb()) {
            H("cooO", !1);
            tb(Fd());
            tb(jf());
            tb(Kh());
            tb("dtAdk");
            tb(Yc());
            tb(Xc());
            try {
                Vb(uc()), Vb(Xc()), sa(uc()), sa(Xc()), Vb(Yc()), Vb(Fd()), sa(Za()), sa("dtAdk")
            } catch (g) {}
        }
    }

    function gc(g, q) {
        void 0 ===
            q && (q = document.cookie || "");
        return q.split(g + "=").length - 1
    }

    function Tb(g, q) {
        var w = gc(g, q);
        if (1 < w) {
            q = aa("domain") || Ua.location.hostname;
            var T = Ua.location.hostname,
                E = Ua.location.pathname,
                ta = 0,
                Kb = 0;
            Od.add(g);
            do {
                var Ob = T.substring(ta);
                if (Ob !== q || "/" !== E) {
                    ub(g, Ob === q ? "" : Ob, E);
                    var cc = gc(g);
                    cc < w && (Od.add(Ob), w = cc)
                }
                ta = T.indexOf(".", ta) + 1;
                Kb++
            } while (0 !== ta && 10 > Kb && 1 < w);
            aa("domain") && 1 < w && ub(g, "", E)
        }
    }

    function Lb() {
        var g = document.cookie;
        Tb(jf(), g);
        Tb(Fd(), g);
        Tb(Xc(), g);
        g = Od.size;
        0 < g && g !== rf && (rf = g, Ue.push({
            severity: "Error",
            type: "dcn",
            text: "Duplicate cookie name".concat(1 !== g ? "s" : "", " detected: ").concat(Oc())
        }))
    }

    function ac() {
        Od = new Set;
        Lb();
        Sc(function(g, q, w, T) {
            0 === Od.size || q || (g.av(T, "dCN", Oc()), Od.clear(), rf = 0)
        })
    }

    function Oc() {
        var g = [];
        Od.forEach(function(q) {
            g.push(q)
        });
        return g.join(",")
    }

    function cd(g) {
        var q = g,
            w = Math.pow(2, 32);
        return function() {
            q = (1664525 * q + 1013904223) % w;
            return q / w
        }
    }

    function wc(g, q) {
        return isNaN(g) || isNaN(q) ? Math.floor(33 * yd()) : Math.floor(yd() * (q - g + 1)) + g
    }

    function Cc(g) {
        if (!g) return "";
        var q = Ua.crypto ||
            Ua.msCrypto;
        if (q && -1 === navigator.userAgent.indexOf("Googlebot")) q = q.getRandomValues(new Uint8Array(g));
        else {
            q = [];
            for (var w = 0; w < g; w++) q.push(wc(0, 32))
        }
        g = [];
        for (w = 0; w < q.length; w++) {
            var T = Math.abs(q[w] % 32);
            g.push(String.fromCharCode(T + (9 >= T ? 48 : 55)))
        }
        return g.join("")
    }

    function Fe() {
        return Xe
    }

    function oe(g) {
        void 0 === g && (g = !0);
        sf = g
    }

    function hd() {
        var g = Ua.dT_;
        try {
            for (var q = Ua.parent; q && q !== Ua;) {
                var w = q.dT_,
                    T;
                if (T = !!(w && "ea" in w) && "10295240705110949" === w.version) {
                    var E = g,
                        ta = w,
                        Kb = !E.bcv("ac") || E.scv("app") ===
                        ta.scv("app"),
                        Ob = E.scv("postfix"),
                        cc = ta.scv("postfix");
                    T = Kb && Ob === cc
                }
                if (T) return w.tdto();
                q = q !== q.parent ? q.parent : void 0
            }
        } catch (Vc) {}
        return g
    }

    function $c(g, q, w) {
        var T = N("pcl");
        T = g.length - T;
        0 < T && g.splice(0, T);
        T = pa(Ka(Fd(), w));
        for (var E = [], ta = T ? "".concat(T, "$") : "", Kb = 0; Kb < g.length; Kb++) {
            var Ob = g[Kb];
            "-" !== Ob.D && E.push("".concat(ta).concat(Ob.frameId, "h").concat(Ob.D))
        }
        g = E.join("p");
        g || (sf && (Tc(!0, "a", w), oe(!1)), g += "".concat(T, "$").concat(Xe, "h-"));
        g += "v".concat(q || zd(w));
        q = g + "e0";
        Xa(jf(), q, void 0, D("ssc"))
    }

    function Wc(g, q) {
        void 0 === q && (q = document.cookie);
        var w = Ka(jf(), q);
        q = [];
        if (w && "-" !== w) {
            var T = "";
            var E = 0;
            for (w = w.split("p"); E < w.length; E++) {
                var ta = w[E],
                    Kb = T;
                void 0 === Kb && (Kb = "");
                var Ob = ta.indexOf("h");
                var cc = ta.indexOf("v"),
                    Vc = ta.indexOf("e");
                T = ta.substring(ta.indexOf("$") + 1, Ob);
                Ob = -1 !== cc ? ta.substring(Ob + 1, cc) : ta.substring(Ob + 1);
                Kb || -1 === cc || (Kb = -1 !== Vc ? ta.substring(cc + 1, Vc) : ta.substring(cc + 1));
                ta = null;
                (cc = g) || (cc = parseInt(T.split("_")[0]), Vc = Rc() % tf, Vc < cc && (Vc += tf), cc = cc + 9E5 > Vc);
                cc && (ta = {
                    frameId: T,
                    D: "-" === Ob ? "-" : parseInt(Ob),
                    visitId: ""
                });
                T = Kb;
                (Ob = ta) && q.push(Ob)
            }
            for (g = 0; g < q.length; g++) q[g].visitId = T
        }
        return q
    }

    function Ae(g, q) {
        var w = document.cookie;
        q = Wc(q, w);
        for (var T = !1, E = 0; E < q.length; E++) {
            var ta = q[E];
            ta.frameId === Xe && (ta.D = g, T = !0)
        }
        T || q.push({
            frameId: Xe,
            D: g,
            visitId: ""
        });
        $c(q, void 0, w)
    }

    function id() {
        return Ad
    }

    function zd(g) {
        return jd(g) || Tc(!0, "c", g)
    }

    function jd(g) {
        if (X(g) <= Rc()) return Tc(!0, "t", g);
        var q = Hd(g);
        if (!q) return Tc(!0, "c", g);
        var w = Be.exec(q);
        if (!w || 3 !== w.length || 32 !== w[1].length ||
            isNaN(parseInt(w[2]))) return Tc(!0, "i", g);
        oc(uc(), q);
        return q
    }

    function pd(g, q) {
        var w = Rc();
        q = M(q).Mc;
        g && (q = w);
        x(w + Ye + "|" + q);
        Bd()
    }

    function de(g) {
        var q = "t" + (Rc() - X(g));
        Tc(!0, q, g)
    }

    function Hd(g) {
        var q, w;
        return null !== (w = null === (q = Wc(!0, g)[0]) || void 0 === q ? void 0 : q.visitId) && void 0 !== w ? w : lc(uc())
    }

    function pe() {
        var g = Cc(Ve);
        try {
            g = g.replace(/[0-9]/g, function(q) {
                return String.fromCharCode(Math.floor(2.5 * parseInt(q) + 65))
            })
        } catch (q) {
            throw ea(q, 7), q;
        }
        return g + "-0"
    }

    function Rd(g, q) {
        var w = Wc(!1, q);
        $c(w, g, q);
        oc(uc(),
            g);
        pd(!0)
    }

    function sd(g, q, w) {
        return Tc(g, q, w)
    }

    function Tc(g, q, w) {
        g && (Id = !0);
        g = Hd(w);
        w = pe();
        Rd(w);
        if (Hd(document.cookie))
            for (var T = 0, E = Mf; T < E.length; T++)(0, E[T])(w, Id, q, g);
        return w
    }

    function Pd(g) {
        Mf.push(g)
    }

    function Bd(g) {
        ee && Xb(ee);
        ee = wb(n, X(g) - Rc())
    }

    function n() {
        var g = document.cookie;
        if (X(g) <= Rc()) return mb(de, [g]), !0;
        ob(Bd);
        return !1
    }

    function x(g) {
        var q = ca(Xa, null, Xc(), g, void 0, D("ssc"));
        q();
        var w = Ka(Xc());
        "" !== w && g !== w && (Lb(), q(), g === Ka(Xc()) || Ge || (Ue.push({
                severity: "Error",
                type: "dcn",
                text: "Could not sanitize cookies"
            }),
            Ge = !0));
        oc(Xc(), g)
    }

    function y(g, q) {
        (q = Ka(g, q)) || (q = lc(g) || "");
        return q
    }

    function L() {
        var g = jd() || "";
        oc(uc(), g);
        g = y(Xc());
        x(g);
        sa(uc());
        sa(Xc())
    }

    function M(g) {
        var q = {
            Td: 0,
            Mc: 0
        };
        if (g = y(Xc(), g)) try {
            var w = g.split("|");
            2 === w.length && (q.Td = parseInt(w[0]), q.Mc = parseInt(w[1]))
        } catch (T) {}
        return q
    }

    function X(g) {
        g = M(g);
        return Math.min(g.Td, g.Mc + uf)
    }

    function ka(g) {
        Ye = g
    }

    function wa() {
        var g = Id;
        Id = !1;
        return g
    }

    function Va() {
        n() || pd(!1)
    }

    function Qa() {
        var g = Ka(Yc());
        g && 45 === (null === g || void 0 === g ? void 0 : g.length) || (g =
            Ha(Yc()) || lc(Yc()), 45 !== (null === g || void 0 === g ? void 0 : g.length) && (Wg = !0, g = Rc() + "", g += Cc(45 - g.length)));
        xb(g);
        return g
    }

    function xb(g) {
        if (D("dpvc") || D("pVO")) oc(Yc(), g);
        else {
            var q = new Date;
            var w = q.getMonth() + Math.min(24, Math.max(1, N("rvcl")));
            q.setMonth(w);
            w = Yc();
            mb(Ma, [w, g])
        }
        Xa(Yc(), g, q, D("ssc"))
    }

    function Pb() {
        return Wg
    }

    function Dc(g) {
        var q = Ka(Yc());
        tb(Yc());
        Vb(Yc());
        sa(Yc());
        H("pVO", !0);
        xb(q);
        g && mb(Ma, ["dt-pVO", "1"]);
        L()
    }

    function Ec() {
        sa("dt-pVO");
        D("pVO") && (H("pVO", !1), Qa());
        Vb(Yc());
        L()
    }

    function qc(g,
        q, w, T, E) {
        var ta = document.createElement("script");
        ta.setAttribute("src", g);
        q && ta.setAttribute("defer", "defer");
        w && (ta.onload = w);
        T && (ta.onerror = T);
        E && ta.setAttribute("id", E);
        ta.setAttribute("crossorigin", "anonymous");
        g = document.getElementsByTagName("script")[0];
        g.parentElement.insertBefore(ta, g)
    }

    function kd(g, q) {
        return Nf + "/" + (q || kf) + "_" + g + "_" + (N("buildNumber") || Z().version) + ".js"
    }

    function Jd() {
        var g, q;
        try {
            null === (q = null === (g = Ua.MobileAgent) || void 0 === g ? void 0 : g.incrementActionCount) || void 0 === q ? void 0 :
                q.call(g)
        } catch (w) {}
    }

    function Xd() {
        var g, q = Ua.dT_;
        Ua.dT_ = (g = {}, g.di = 0, g.version = "10295240705110949", g.cfg = q ? q.cfg : "", g.iCE = q ? fa : function() {
                return navigator.cookieEnabled
            }, g.ica = 1, g.disabled = !1, g.disabledReason = "", g.overloadPrevention = !1, g.gAST = G, g.ww = Kc, g.stu = yc, g.nw = Zb, g.st = wb, g.si = Nd, g.aBPSL = Sc, g.rBPSL = ye, g.gBPSL = ze, g.aBPSCC = od, g.gBPSCC = ya, g.buildType = "dynatrace", g.gSSV = lc, g.sSSV = oc, g.rSSV = Vb, g.rvl = sa, g.iVSC = fc, g.p3SC = qb, g.dC = tb, g.sC = Xa, g.esc = Aa, g.gSId = pa, g.gDtc = Ga, g.gSC = Gb, g.sSC = ec, g.gC = Sa, g.cRN =
            wc, g.cRS = Cc, g.cfgO = vb, g.pCfg = Cb, g.pCSAA = v, g.cFHFAU = ra, g.sCD = $a, g.bcv = D, g.ncv = N, g.scv = aa, g.stcv = H, g.rplC = na, g.cLSCK = Za, g.gFId = Fe, g.gBAU = kd, g.iS = qc, g.eWE = ob, g.oEIEWA = mb, g.eA = Pa, g.dA = gb, g.iNV = Pb, g.gVID = Qa, g.dPV = Dc, g.ePV = Ec, g.sVIdUP = oe, g.sVTT = ka, g.sVID = Rd, g.rVID = jd, g.gVI = zd, g.gNVIdN = sd, g.gARnVF = wa, g.cAUV = Va, g.uVT = pd, g.aNVL = Pd, g.gPC = Wc, g.cPC = Ae, g.sPC = $c, g.clB = Da, g.ct = Xb, g.aRI = lb, g.iXB = Ab, g.gXBR = Ca, g.sXBR = bb, g.de = W, g.cCL = Ra, g.iEC = Jd, g.rnw = Oa, g.gto = kb, g.ael = S, g.rel = P, g.sup = ma, g.cuel = Ja, g.iAEPOO = Rb, g.iSM =
            ja, g.gxwp = I, g.iIO = ea, g.prm = La, g.cI = sc, g.gidi = xa, g.iDCV = Wb, g.gCF = Ka, g.gPSMB = Mc, g.lvl = Ha, g.gCP = (null === q || void 0 === q ? 0 : q.platformPrefix) ? function() {
                return q.platformPrefix || ""
            } : void 0, g.platformCookieOffset = null === q || void 0 === q ? void 0 : q.platformCookieOffset, g.tdto = hd, g.gFLAI = id, g)
    }

    function vd() {
        if (D("nsfnv")) {
            var g = Ka(Fd());
            if (-1 === g.indexOf("".concat(vf, "-"))) {
                var q = qb(g).serverId;
                g = g.replace("".concat(vf).concat(q), "".concat(vf).concat("".concat(-1 * wc(2, 99)).replace("-", "-2D")));
                ec(g)
            }
        }
    }

    function fe() {
        ob(function() {
            if (!Ga()) {
                var g = -1 * wc(2, 99),
                    q = Cc(Ve);
                ec("v_4".concat(vf).concat("".concat(g).replace("-", "-2D"), "_sn_").concat(q))
            }
        });
        Pd(vd)
    }

    function qe() {
        for (var g = [], q = 0; q < arguments.length; q++) g[q] = arguments[q];
        Ua.console.log.apply(Ua.console, g)
    }
    this.dT_ && dT_.prm && dT_.prm();
    var Ua = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        Fg;
    (function(g) {
        g[g.ENABLED = 0] = "ENABLED";
        g[g.DISABLED = 1] = "DISABLED";
        g[g.DELAYED = 2] = "DELAYED"
    })(Fg || (Fg = {}));
    var Of;
    (function(g) {
        g[g.BLOCKED_BY_PERCENTAGE = 0] = "BLOCKED_BY_PERCENTAGE";
        g[g.ENABLED = 1] = "ENABLED";
        g[g.BLOCKED = 2] = "BLOCKED"
    })(Of || (Of = {}));
    var Ze;
    (function(g) {
        g[g.NONE = 1] = "NONE";
        g[g.OFF = 2] = "OFF";
        g[g.PERFORMANCE = 3] = "PERFORMANCE";
        g[g.BEHAVIOR = 4] = "BEHAVIOR"
    })(Ze || (Ze = {}));
    var cg;
    (function(g) {
        g.OVERLOAD_PREVENTION = "ol";
        g.PRIVACY_STATE = "prv";
        g.SERVER_ID = "srv";
        g.SESSION_ID = "sn"
    })(cg || (cg = {}));
    var He;
    (function(g) {
        g.DYNATRACE_MOBILE = "dynatraceMobile";
        g.MOBILE_AGENT = "MobileAgent"
    })(He || (He = {}));
    var Gg;
    (function(g) {
        g[g.ARRAY = 0] = "ARRAY";
        g[g.BOOLEAN = 1] = "BOOLEAN";
        g[g.NUMBER = 2] = "NUMBER";
        g[g.STRING = 3] = "STRING";
        g[g.FUNCTION = 4] = "FUNCTION";
        g[g.OBJECT = 5] = "OBJECT";
        g[g.DATE = 6] = "DATE";
        g[g.ERROR = 7] = "ERROR";
        g[g.ELEMENT = 8] = "ELEMENT";
        g[g.HTML_ELEMENT = 9] = "HTML_ELEMENT";
        g[g.HTML_IMAGE_ELEMENT = 10] = "HTML_IMAGE_ELEMENT";
        g[g.PERFORMANCE_ENTRY = 11] = "PERFORMANCE_ENTRY";
        g[g.PERFORMANCE_TIMING = 12] = "PERFORMANCE_TIMING";
        g[g.PERFORMANCE_RESOURCE_TIMING = 13] = "PERFORMANCE_RESOURCE_TIMING";
        g[g.PERFORMANCE_NAVIGATION_TIMING = 14] = "PERFORMANCE_NAVIGATION_TIMING";
        g[g.CSS_RULE = 15] = "CSS_RULE";
        g[g.CSS_STYLE_SHEET = 16] =
            "CSS_STYLE_SHEET";
        g[g.REQUEST = 17] = "REQUEST";
        g[g.RESPONSE = 18] = "RESPONSE";
        g[g.SET = 19] = "SET";
        g[g.MAP = 20] = "MAP";
        g[g.WORKER = 21] = "WORKER";
        g[g.XML_HTTP_REQUEST = 22] = "XML_HTTP_REQUEST";
        g[g.SVG_SCRIPT_ELEMENT = 23] = "SVG_SCRIPT_ELEMENT";
        g[g.HTML_META_ELEMENT = 24] = "HTML_META_ELEMENT";
        g[g.HTML_HEAD_ELEMENT = 25] = "HTML_HEAD_ELEMENT";
        g[g.ARRAY_BUFFER = 26] = "ARRAY_BUFFER";
        g[g.SHADOW_ROOT = 27] = "SHADOW_ROOT"
    })(Gg || (Gg = {}));
    var ag = -1,
        jf = jb("dtPC"),
        Fd = jb("dtCookie"),
        Xc = jb("rxvt"),
        Yc = jb("rxVisitor"),
        qf = jb("dTValidationCookie"),
        Kh = jb("dtSa"),
        me, xe, Lh = setTimeout;
    ba.prototype["catch"] = function(g) {
        return this.then(null, g)
    };
    ba.prototype.then = function(g, q) {
        var w = new this.constructor(Bb);
        qa(this, new Y(g, q, w));
        return w
    };
    ba.prototype["finally"] = function(g) {
        var q = this.constructor;
        return this.then(function(w) {
            return q.resolve(g()).then(function() {
                return w
            })
        }, function(w) {
            return q.resolve(g()).then(function() {
                return q.reject(w)
            })
        })
    };
    ba.all = function(g) {
        return new ba(function(q, w) {
            function T(Ob, cc) {
                try {
                    if (cc && ("object" === typeof cc || "function" ===
                            typeof cc)) {
                        var Vc = cc.then;
                        if ("function" === typeof Vc) {
                            Vc.call(cc, function($e) {
                                T(Ob, $e)
                            }, w);
                            return
                        }
                    }
                    E[Ob] = cc;
                    0 === --ta && q(E)
                } catch ($e) {
                    w($e)
                }
            }
            if (!g || "undefined" === typeof g.length) return w(new TypeError("Promise.all accepts an array"));
            var E = Array.prototype.slice.call(g);
            if (0 === E.length) return q([]);
            for (var ta = E.length, Kb = 0; Kb < E.length; Kb++) T(Kb, E[Kb])
        })
    };
    ba.allSettled = function(g) {
        return new this(function(q, w) {
            function T(Kb, Ob) {
                if (Ob && ("object" === typeof Ob || "function" === typeof Ob)) {
                    var cc = Ob.then;
                    if ("function" ===
                        typeof cc) {
                        cc.call(Ob, function(Vc) {
                            T(Kb, Vc)
                        }, function(Vc) {
                            E[Kb] = {
                                status: "rejected",
                                reason: Vc
                            };
                            0 === --ta && q(E)
                        });
                        return
                    }
                }
                E[Kb] = {
                    status: "fulfilled",
                    value: Ob
                };
                0 === --ta && q(E)
            }
            if (!g || "undefined" === typeof g.length) return w(new TypeError(typeof g + " " + g + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var E = Array.prototype.slice.call(g);
            if (0 === E.length) return q([]);
            var ta = E.length;
            for (w = 0; w < E.length; w++) T(w, E[w])
        })
    };
    ba.resolve = function(g) {
        return g && "object" === typeof g && g.constructor === ba ?
            g : new ba(function(q) {
                q(g)
            })
    };
    ba.reject = function(g) {
        return new ba(function(q, w) {
            w(g)
        })
    };
    ba.race = function(g) {
        return new ba(function(q, w) {
            if (!g || "undefined" === typeof g.length) return w(new TypeError("Promise.race accepts an array"));
            for (var T = 0, E = g.length; T < E; T++) ba.resolve(g[T]).then(q, w)
        })
    };
    ba.Fb = "function" === typeof setImmediate && function(g) {
        setImmediate(g)
    } || function(g) {
        Lh(g, 0)
    };
    ba.tc = function(g) {
        "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", g)
    };
    var Jf =
        ba,
        Xg;
    (function(g) {
        g.ANCHOR = "A";
        g.BUTTON = "BUTTON";
        g.FORM = "FORM";
        g.I_FRAME = "IFRAME";
        g.IMAGE = "IMG";
        g.INPUT = "INPUT";
        g.LABEL = "LABEL";
        g.LINK = "LINK";
        g.OPTION = "OPTION";
        g.SCRIPT = "SCRIPT";
        g.SELECT = "SELECT";
        g.STYLE = "STYLE";
        g.TEXT_AREA = "TEXTAREA"
    })(Xg || (Xg = {}));
    var u, t, A, Q, la = Ua.Worker,
        Ta = la && la.prototype.addEventListener,
        hb = [],
        pb = ["touchstart", "touchend", "scroll"],
        rb, zb = "abort getAllResponseHeaders getResponseHeader open overrideMimeType send setRequestHeader".split(" "),
        Nb, nc = {
            "!": "%21",
            "~": "%7E",
            "*": "%2A",
            "(": "%28",
            ")": "%29",
            "'": "%27",
            $: "%24",
            ";": "%3B",
            ",": "%2C"
        },
        xc, Fc, rc = (Fc = {}, Fc.l = "Lax", Fc.s = "Strict", Fc.n = "None", Fc),
        Zc, Ve = 32,
        Kd;
    (function(g) {
        g.LAX = "l";
        g.NONE = "n";
        g.NOT_SET = "0";
        g.STRICT = "s"
    })(Kd || (Kd = {}));
    var uc = jb("rxvisitid"),
        bc = {},
        Kf = "app-3A",
        Qd = Ua.Worker,
        rd = Ua.Blob,
        Ee = Ua.URL && Ua.URL.createObjectURL,
        Nc, ce, qd, We, xd = !1,
        Gd, Lf = [],
        Ue = [],
        bg, Hg, hf = {},
        Rc, ne = [],
        Od, rf = 0,
        yd, Ig, Xe, tf = 6E8,
        sf = !1,
        Ad, Be = /([A-Z]+)-([0-9]+)/,
        Mf = [],
        Ye, uf, Id = !1,
        ee, Ge = !1,
        Wg = !1,
        dg, Nf, kf, vf = "".concat("_", "srv").concat("_");
    (function() {
        var g,
            q, w;
        if (!("documentMode" in document) || isNaN(document.documentMode)) {
            var T = 0 > (null === (q = navigator.userAgent) || void 0 === q ? void 0 : q.indexOf("RuxitSynthetic"));
            if (!Ua.dT_ || !Ua.dT_.cfg || "string" !== typeof Ua.dT_.cfg || "initialized" in Ua.dT_ && Ua.dT_.initialized)(null === (w = Ua.dT_) || void 0 === w ? 0 : w.gCP) ? qe("[CookiePrefix/initCode] initCode with cookie prefix already initialized, not initializing initCode!") : qe("InitConfig not found or agent already initialized! This is an injection issue."), Ua.dT_ && (Ua.dT_.di =
                3);
            else if (T) try {
                Xd();
                var E;
                Zc = (E = {}, E.ade = "", E.aew = !0, E.apn = "", E.agentLocation = "", E.agentUri = "", E.app = "", E.ac = !0, E.async = !1, E.ase = !1, E.auto = !1, E.bp = 3, E.bs = !1, E.buildNumber = 0, E.csprv = !0, E.cepl = 16E3, E.cls = !0, E.ccNcss = !1, E.coo = !1, E.cooO = !1, E.cssm = "0", E.cwtDomains = "", E.cwtUrl = "w2dax4xgw3", E.cwt = "", E.cors = !1, E.csu = "", E.cuc = "", E.cce = !1, E.cux = !1, E.postfix = "", E.dataDtConfig = "", E.debugName = "", E.dvl = 500, E.dASXH = !1, E.disableCookieManager = !1, E.dKAH = !1, E.disableLogging = !1, E.dmo = !1, E.doel = !1, E.dpch = !1, E.dpvc = !1, E.disableXhrFailures = !1, E.domain = "", E.domainOverride = "", E.domainOriginal = "", E.doNotDetect = "", E.ds = !0, E.dsndb = !1, E.dsa = !1, E.dsss = !1, E.dssv = !0, E.earxa = !0, E.exp = !1, E.eni = !0, E.expw = !1, E.instr = "", E.evl = "", E.fa = !1, E.fvdi = !1, E.featureHash = "", E.hvt = 216E5, E.imm = !1, E.ign = "", E.iub = "", E.iqvn = !1, E.initializedModules = "", E.lastModification = 0, E.lupr = !0, E.lab = !1, E.legacy = !1, E.lt = !0, E.mb = "", E.md = "", E.mdp = "", E.mdl = "", E.mcepsl = 100, E.mdn = 5E3, E.mhl = 4E3, E.mpl = 1024, E.mmds = 2E4, E.msl = 3E4, E.bismepl = 2E3, E.mel = 200, E.mepp =
                    10, E.moa = 30, E.mrt = 3, E.ntd = !1, E.nsfnv = !1, E.ncw = !1, E.oat = 180, E.ote = !1, E.owasp = !1, E.pcl = 20, E.pt = !0, E.perfbv = 1, E.prfSmpl = 0, E.pVO = !1, E.peti = !1, E.raxeh = !0, E.rdnt = 0, E.nosr = !0, E.reportUrl = "dynaTraceMonitor", E.rid = "", E.ridPath = "", E.rpid = "", E.rcdec = 12096E5, E.rtl = 0, E.rtp = 2, E.rtt = 1E3, E.rtu = 200, E.rvcl = 24, E.sl = 100, E.ssc = !1, E.svNB = !1, E.srad = !0, E.srbbv = 1, E.srbw = !0, E.srdinitrec = !0, E.srmr = 100, E.srms = "1,1,,,", E.srsr = 1E5, E.srtbv = 3, E.srtd = 1, E.srtr = 500, E.srvr = "", E.srvi = 0, E.srwo = !1, E.srre = "", E.srxcss = !0, E.srxicss = !0, E.srficros = !0, E.srmrc = !1, E.srsdom = !0, E.srfirrbv = !0, E.srcss = !0, E.srmcrl = 1, E.srmcrv = 10, E.st = 3E3, E.spc = "", E.syntheticConfig = !1, E.tal = 0, E.tt = 100, E.tvc = 3E3, E.uxdce = !1, E.uxdcw = 1500, E.uxrgce = !0, E.uxrgcm = "100,25,300,3;100,25,300,3", E.uam = !1, E.uana = "data-dtname,data-dtName", E.uanpi = 0, E.pui = !1, E.usrvd = !0, E.vrt = !1, E.vcfi = !0, E.vcsb = !1, E.vcit = 1E3, E.vct = 50, E.vcx = 50, E.vscl = 0, E.vncm = 1, E.vrei = "", E.xb = "", E.chw = "", E.xt = 0, E.xhb = "", E);
                var ta;
                La();
                var Kb;
                rb = Ua.XMLHttpRequest;
                var Ob = null === (Kb = Ua.XMLHttpRequest) || void 0 === Kb ? void 0 :
                    Kb.prototype;
                if (Ob)
                    for (Nb = {}, q = 0, w = zb; q < w.length; q++) {
                        var cc = w[q];
                        void 0 !== Ob[cc] && (Nb[cc] = Ob[cc])
                    }
                u = Ua.addEventListener;
                t = Ua.removeEventListener;
                A = Ua.document.addEventListener;
                Q = Ua.document.removeEventListener;
                qd = Ua.setTimeout;
                We = Ua.setInterval;
                xd || (Nc = Ua.clearTimeout, ce = Ua.clearInterval);
                var Vc = fa ? fa() : navigator.cookieEnabled,
                    $e = 1 === qb(Ka("dtAdkSettings") || (null === (ta = Hg) || void 0 === ta ? void 0 : ta.getItem("dtAdkSettings")) || "").overloadState;
                Ra();
                if (!(!Vc || $e ? 0 : "complete" !== document.readyState || Ua.performance &&
                        Ua.performance.timing)) throw Error("Error during initCode initialization");
                try {
                    Hg = Ua.localStorage
                } catch (Jg) {}
                Ue = [];
                Ba();
                bg = Rc();
                Gd = [];
                hf = {};
                xd || (Ua.clearTimeout = ia(Nc), Ua.clearInterval = ia(ce), xd = !0);
                var wf = Math.random(),
                    Pf = Math.random();
                Ig = 0 !== wf && 0 !== Pf && wf !== Pf;
                if (-1 !== navigator.userAgent.indexOf("Googlebot")) {
                    var Ld = performance.getEntriesByType("navigation")[0];
                    ta = 1;
                    if (Ld) {
                        for (var Yd in Ld) {
                            var af = Ld[Yd];
                            "number" === typeof af && af && (ta = 1 === ta ? af : ta + af)
                        }
                        var Qf = Math.floor(1E4 * ta)
                    } else Qf = ta;
                    yd = cd(Qf)
                } else Ig ?
                    yd = Math.random : yd = cd(Rc());
                Xe = bg % tf + "_" + parseInt(wc(0, 1E3) + "");
                a: {
                    var Sd, bf, td = Z().cfg;bc = {
                        reportUrl: "dynaTraceMonitor",
                        initializedModules: "",
                        csu: "dtagent",
                        dataDtConfig: "string" === typeof td ? td : ""
                    };Z().cfg = bc;bc.csu = "ruxitagentjs";
                    var Ie = bc.dataDtConfig;Ie && -1 === Ie.indexOf("#CONFIGSTRING") && (v(Ie, bc), R("domain"), R("auto"), R("app"), ra(bc));
                    var ge = document.getElementsByTagName("script"),
                        eg = ge.length,
                        Je = -1 === (bc.dataDtConfig || "").indexOf("#CONFIGSTRING") ? bc : null;
                    if (0 < eg)
                        for (Qf = 0; Qf < eg; Qf++) b: {
                            Ld = void 0;
                            var Rf = ge[Qf];Yd = Je;
                            if (Rf.attributes) {
                                af = Yd;
                                var fg = Rf.src,
                                    Mh = Rf.attributes.getNamedItem("data-dtconfig");
                                if (Mh) {
                                    td = void 0;
                                    Ie = fg;
                                    var lh = Mh.value;
                                    ta = {};
                                    bc.legacy = "1";
                                    Ob = /([a-zA-Z]*)_([a-zA-Z_0-9]*)_([0-9]+)/g;
                                    Ie && (td = Ob.exec(Ie), null === td || void 0 === td ? 0 : td.length) && (ta.csu = td[1], ta.featureHash = td[2], ta.agentLocation = Ie.substring(0, Ie.indexOf(td[1]) - 1), ta.buildNumber = td[3]);
                                    if (lh) {
                                        v(lh, ta, !0);
                                        var Nh = ta.agentUri;
                                        !Ie && Nh && (td = Ob.exec(Nh), null === td || void 0 === td ? 0 : td.length) && (ta.csu = td[1])
                                    }
                                    za(ta);
                                    Ld = ta;
                                    if (!Yd) af = Ld;
                                    else if (!Ld.syntheticConfig) {
                                        Je = Ld;
                                        break b
                                    }
                                }
                                Je = af
                            } else Je = Yd
                        }
                    if (Je)
                        for (var Kg in Je)
                            if (Object.prototype.hasOwnProperty.call(Je, Kg)) {
                                ge = Kg;
                                var gg = Je[ge];
                                "undefined" !== typeof gg && (bc[ge] = gg)
                            }
                    var hg = Za();
                    try {
                        var ad = (Je = Hg) && Je.getItem(hg);
                        if (ad) {
                            var Zd = Cb(ad),
                                Cd = v(Zd.config || ""),
                                Sf = bc.lastModification || "0",
                                Ke = parseInt((Cd.lastModification || Zd.lastModification || "0").substring(0, 13)),
                                lf = "string" === typeof Sf ? parseInt(Sf.substring(0, 13)) : Sf;
                            if (!Sf || Ke >= lf)
                                if (Cd.csu = Zd.name || aa("csu"), Cd.featureHash =
                                    Zd.featureHash || aa("featureHash"), Cd.agentUri && ra(Cd), $a(Cd, !0), Ab(Cd), lb(Cd), Ke > (+bc.lastModification || 0)) {
                                    var Lg = D("auto"),
                                        he = D("legacy");
                                    bc = na(Cd);
                                    bc.auto = Lg ? "1" : "0";
                                    bc.legacy = he ? "1" : "0"
                                }
                        }
                    } catch (Jg) {}
                    $a(bc);
                    try {
                        var Mg = bc.ign;
                        if (Mg && (new RegExp(Mg)).test(Ua.location.href)) {
                            delete Ua.dT_;
                            var xf = !1;
                            break a
                        }
                    } catch (Jg) {}
                    if (ja()) {
                        var re = navigator.userAgent,
                            yf = re.lastIndexOf("RuxitSynthetic");
                        if (-1 === yf) var Le = {};
                        else {
                            var Me = re.substring(yf + 14);
                            if (-1 === Me.indexOf(" c")) Le = {};
                            else {
                                hg = {};
                                ad = 0;
                                for (var Yg =
                                        Me.split(" "); ad < Yg.length; ad++) {
                                    var mh = Yg[ad];
                                    if ("c" === mh.charAt(0)) {
                                        var Ng = mh.substring(1),
                                            Zg = Ng.indexOf("="),
                                            $g = Ng.substring(0, Zg),
                                            Oh = Ng.substring(Zg + 1);
                                        $g && Oh && (hg[$g] = Oh)
                                    }
                                }
                                Le = hg
                            }
                        }
                        Me = void 0;
                        for (Me in Le)
                            if (Object.prototype.hasOwnProperty.call(Le, Me) && Le[Me]) {
                                var si = Le[Me];
                                "undefined" !== typeof si && (bc[Me] = si)
                            }
                        na(bc)
                    }
                    var zf = null === (bf = (Sd = Z()).gCP) || void 0 === bf ? void 0 : bf.call(Sd),
                        nh = aa("cuc");
                    if (zf && zf !== nh) throw Error("platformPrefix and cuc do not match!");xf = !0
                }
                if (!xf) throw Error("Error during config initialization");
                ac();
                dg = Z().disabled;
                var Md;
                if (!(Md = aa("agentLocation"))) a: {
                    var ig = aa("agentUri");
                    if (ig || document.currentScript) {
                        var Ne = ig || document.currentScript.src;
                        if (Ne) {
                            var Og = -1 === Ne.indexOf("_complete") ? 1 : 2,
                                Pg = Ne.lastIndexOf("/");
                            for (xf = 0; xf < Og && -1 !== Pg; xf++) Ne = Ne.substring(0, Pg), Pg = Ne.lastIndexOf("/");
                            Md = Ne;
                            break a
                        }
                    }
                    var ah = location.pathname;Md = ah.substring(0, ah.lastIndexOf("/"))
                }
                Nf = Md;
                kf = aa("csu") || "ruxitagentjs";
                "true" === Ka("dtUseDebugAgent") && 0 > kf.indexOf("dbg") && (kf = aa("debugName") || kf + "dbg");
                if (!D("auto") &&
                    !D("legacy") && !dg) {
                    var jg = aa("agentUri") || kd(aa("featureHash"));
                    if (D("async") || "complete" === document.readyState) qc(jg, D("async"), void 0, void 0, "dtjsagent");
                    else {
                        var kg = "".concat("dtjsagent", "dw");
                        document.write('<script id="'.concat(kg, '" type="text/javascript" src="').concat(jg, '">\x3c/script>'));
                        document.getElementById(kg) || qc(jg, D("async"), void 0, void 0, "dtjsagent")
                    }
                }
                Ka(Fd()) && H("cooO", !0);
                fe();
                H("pVO", !!Ha("dt-pVO"));
                ob(Qa);
                Ye = 18E5;
                uf = N("hvt") || 216E5;
                var Ph = hd();
                Ad = void 0;
                Ph && "ea" in Ph && (Ad = Ph.gITAID());
                mb(Ae, [Ad || 1])
            } catch (Jg) {
                "platformPrefix and cuc do not match!" === Jg.message ? (Md = Ua.dT_, Ua.dT_ = (g = {}, g.minAgentVersion = Md.minAgentVersion, g.platformPrefix = Md.platformPrefix, g.platformCookieOffset = Md.platformCookieOffset, g), qe("[CookiePrefix/initCode] cuc and platformPrefix do not match, disabling agent!")) : (delete Ua.dT_, qe("JsAgent initCode initialization failed!", Jg))
            }
        }
    })()
})();
(function() {
    function Ia() {
        Ia = Object.assign || function(a) {
            for (var b, f = 1, k = arguments.length; f < k; f++) {
                b = arguments[f];
                for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (a[p] = b[p])
            }
            return a
        };
        return Ia.apply(this, arguments)
    }

    function jb(a, b) {
        jb = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(f, k) {
            f.__proto__ = k
        } || function(f, k) {
            for (var p in k) Object.prototype.hasOwnProperty.call(k, p) && (f[p] = k[p])
        };
        return jb(a, b)
    }

    function nb(a, b) {
        function f() {
            this.constructor = a
        }
        if ("function" !== typeof b &&
            null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        jb(a, b);
        a.prototype = null === b ? Object.create(b) : (f.prototype = b.prototype, new f)
    }

    function db(a, b, f) {
        if (f || 2 === arguments.length)
            for (var k = 0, p = b.length, z; k < p; k++) !z && k in b || (z || (z = Array.prototype.slice.call(b, 0, k)), z[k] = b[k]);
        return a.concat(z || Array.prototype.slice.call(b))
    }

    function kb(a) {
        var b;
        return function() {
            if (b) return b;
            var f, k, p, z, K = -1 !== lg ? lg : (null === (k = null === (f = Eb.dT_) || void 0 === f ? void 0 : f.scv) ||
                void 0 === k ? void 0 : k.call(f, "postfix")) || (null === (z = null === (p = Eb.dT_) || void 0 === p ? void 0 : p.gCP) || void 0 === z ? void 0 : z.call(p));
            return b = f = (lg = K) ? "".concat(a).concat(K) : a
        }
    }

    function Oa(a) {
        return !!a.interactionId
    }

    function Ra(a) {
        a.getEntries().filter(Oa).forEach(function(b) {
            Vi = Math.min(Vi, b.interactionId);
            Qh = (oh = Math.max(oh, b.interactionId)) ? (oh - Vi) / 7 + 1 : 0
        })
    }

    function Wa(a) {
        function b() {
            Sb.takeRecords && p(Sb.takeRecords())
        }

        function f() {
            fb = [];
            ib = Oe ? Qh : performance.interactionCount || 0
        }

        function k(Mb) {
            var $b = fb[fb.length -
                    1],
                vc = Db[Mb.interactionId];
            if (vc || 10 > fb.length || Mb.duration > $b.latency) vc ? (vc.entries.push(Mb), vc.latency = Math.max(vc.latency, Mb.duration)) : (Mb = {
                id: Mb.interactionId,
                latency: Mb.duration,
                entries: [Mb]
            }, Db[Mb.id] = Mb, fb.push(Mb)), fb.sort(Sa), fb.splice(10).forEach(function(Jc) {
                delete Db[Jc.id]
            })
        }

        function p(Mb) {
            if (Mb) {
                for (var $b = 0, vc = 0; vc < Mb.length; vc++) z(Mb[vc]) && $b++;
                if (0 === $b) K || da.forEach(function(ld) {
                    ld({
                        entries: [],
                        latency: 8,
                        id: -1
                    })
                });
                else {
                    ua += $b;
                    var Jc = fb[Math.min(fb.length - 1, Math.floor(((Oe ? Qh : performance.interactionCount ||
                        0) - ib) / 50))];
                    Jc && (K !== Jc.latency && da.forEach(function(ld) {
                        ld(Jc)
                    }), K = Jc.latency)
                }
            }
        }

        function z(Mb) {
            if (40 > Mb.duration) return !1;
            Mb.interactionId && k(Mb);
            "first-input" === Mb.entryType && (fb.some(function($b) {
                return $b.entries.some(function(vc) {
                    return Mb.duration === vc.duration && Mb.startTime === vc.startTime
                })
            }) || k(Mb));
            return !0
        }
        void 0 === a && (a = 40);
        "interactionCount" in performance || Oe || (Oe = new PerformanceObserver(Ra), Oe.observe({
            type: "event",
            buffered: !0,
            durationThreshold: 0
        }));
        var K = 0,
            da = [],
            ua = 0,
            ib = 0,
            fb = [],
            Db = {},
            Sb = new PerformanceObserver(function(Mb) {
                p(Mb.getEntries())
            });
        Sb.observe({
            type: "event",
            buffered: !0,
            durationThreshold: a
        });
        "PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && Sb.observe({
            type: "first-input",
            buffered: !0
        });
        Eb.addEventListener("pageshow", f, !0);
        return {
            Jc: function() {
                b();
                return K
            },
            reset: function() {
                fb = [];
                Db = {};
                ua = K = ib = 0
            },
            Bj: function(Mb) {
                da.push(Mb)
            },
            Qj: function() {
                da = [];
                Eb.removeEventListener("pageshow", f, !0);
                Sb.disconnect()
            },
            Xi: b,
            Pi: function() {
                return ua
            }
        }
    }

    function Sa(a, b) {
        return b.latency - a.latency
    }

    function ab() {
        return "10295240705110949"
    }

    function Ka(a) {
        return !!(a && "ea" in a)
    }

    function Bb(a, b) {
        var f = !a.bcv("ac") || a.scv("app") === b.scv("app");
        a = a.scv("postfix");
        b = b.scv("postfix");
        return f && a === b
    }

    function Ea() {
        var a = Eb.dT_;
        try {
            for (var b = Eb.parent; b && b !== Eb;) {
                var f = b.dT_;
                if (Ka(f) && "10295240705110949" === f.version && Bb(a, f)) return f.tdto();
                b = b !== b.parent ? b.parent : void 0
            }
        } catch (k) {}
        return a
    }

    function ba(a) {
        var b = 0 === a.version.indexOf("10279");
        a.tdto && !b ? (cf = a.tdto,
            md = a.gFLAI) : (cf = Ea, a.tdto = cf, md = function() {}, a.gFLAI = md)
    }

    function qa() {
        document.cookie = "".concat("__dTCookie", "=").concat("1", ";SameSite=Lax");
        var a = -1 !== document.cookie.indexOf("__dTCookie");
        document.cookie = "".concat("__dTCookie", "=").concat("1", "; expires=Thu, 01-Jan-1970 00:00:01 GMT");
        return a
    }

    function eb(a) {
        for (var b = [], f = 1; f < arguments.length; f++) b[f - 1] = arguments[f];
        return Rh ? Rh(a, b) : a.apply(this, b)
    }

    function va(a, b, f) {
        return a.splice(b, (f || b) - b + 1 || a.length)
    }

    function U() {
        return mg
    }

    function Y() {
        return Eb.dT_
    }

    function Na() {
        return Af
    }

    function La() {
        return Bf
    }

    function ea() {
        return ng
    }

    function S() {
        var a = document.location;
        return a ? 0 !== a.href.indexOf("http") : !0
    }

    function P() {
        var a = navigator.userAgent || navigator.vendor || Eb.opera && Eb.opera.version() || "";
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substring(0,
                4))
    }

    function ma() {
        return "1" === navigator.doNotTrack || "yes" === navigator.doNotTrack || "1" === navigator.msDoNotTrack || "1" === Eb.doNotTrack
    }

    function Ja() {
        return /(gomezagent|googlebot|adsbot-google|mediapartners-google|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|facebookexternalhit|ia_archiver)/i.test(navigator.userAgent)
    }

    function O(a) {
        return a ? Pe ? Pe.call(a) : a.replace(/^\s+|\s+$/g, "") : ""
    }

    function ca(a) {
        if (!a || -1 === a.indexOf("://")) return "";
        a = a.split("/")[2].split(":")[0].toLowerCase();
        a: {
            var b = 0;
            for (var f = Wl; b < f.length; b++)
                if (0 <= a.indexOf(f[b])) {
                    b = !0;
                    break a
                }
            b = !1
        }
        return b ? "" : a
    }

    function I(a) {
        var b = 0;
        if (a)
            for (var f = a.length, k = 0; k < f; k++) b = 31 * b + a.charCodeAt(k), b &= b;
        return b
    }

    function J(a, b, f) {
        Rh(fa, [a, b, f])
    }

    function fa(a, b, f) {
        try {
            Eb.sessionStorage.setItem(a, b + "")
        } catch (k) {
            f || Qe(a, b + "", void 0, Ib("ssc"))
        }
    }

    function Z(a, b, f) {
        void 0 === f && (f = !0);
        var k = !0;
        try {
            Eb.localStorage[a] = b
        } catch (p) {
            k = !1, f && Qe(a, b, void 0, Ib("ssc"))
        }
        return k
    }

    function Aa(a, b) {
        try {
            return Eb.sessionStorage[a] || ""
        } catch (f) {}
        return b ?
            "" : og(a)
    }

    function W(a) {
        var b = [];
        if (a)
            for (var f = 0; f < a.length; f++) {
                var k = a.charAt(f),
                    p = bd[k];
                p ? b.push(p) : b.push(k)
            }
        return b.join("")
    }

    function Ca(a) {
        if (!a) return "";
        for (var b = "", f = 0; f < a.length; f++) {
            var k = Wi[a.charAt(f) + a.charAt(f + 1)];
            k ? (b += k, f++) : b += a.charAt(f)
        }
        return b
    }

    function bb(a) {
        return a ? Ca(a).replace(/_5F/g, "_").replace(/_25/g, "%").replace(/_7C/g, "|") : ""
    }

    function lb(a) {
        if (!a) return "";
        a = a.replace(/_/g, "_5F").replace(/%/g, "_25").replace(/\|/g, "_7C");
        return W(a)
    }

    function Ab(a) {
        var b = [],
            f = "";
        "string" ===
        typeof a ? f = a : "object" === typeof a && a && (f = a.toString());
        a = Lc("spc") + "\t\n\r";
        for (var k = 0; k < f.length; k++) {
            var p = f.charAt(k); - 1 === a.indexOf(p) && b.push(p)
        }
        return b.join("")
    }

    function oa() {
        var a = Eb.location;
        return a ? ub(a.href) : "-"
    }

    function ub(a) {
        var b = a.indexOf("#");
        return 0 <= b ? a.substring(0, b) : a
    }

    function kc(a, b, f, k, p) {
        return Gc(a, b, f, k, !1, p)
    }

    function Gc(a, b, f, k, p, z) {
        void 0 === z && (z = "win");
        try {
            var K = ph[z] || {};
            K[b] = a[b];
            ph[z] = K;
            Object.defineProperty(a, b, {
                get: f || function() {
                    return K[b]
                },
                set: function(da) {
                    K[b] =
                        da;
                    k && (da || p) && k.apply(a, [da])
                },
                configurable: !0
            });
            return !0
        } catch (da) {}
        return !1
    }

    function Mc(a, b, f, k) {
        if (k = k || a[b]) {
            var p = f || "win";
            try {
                delete a[b] && (a[b] = k, ph[p] && (ph[p][b] = null))
            } catch (z) {
                try {
                    Object.defineProperty(a, b, {
                        get: function() {
                            return ph[p] && ph[p][b]
                        },
                        configurable: !0
                    })
                } catch (K) {}
            }
        }
    }

    function mb(a) {
        Qe("dtUseDebugAgent", a, void 0, Ib("ssc"))
    }

    function Rb(a) {
        Qe("dt_dbg_console", a, void 0, Ib("ssc"))
    }

    function Hc(a) {
        void 0 === a && (a = "TRACE");
        Qe("dt_dbg_logfilter", "level=".concat(a, "|featureHash=|fileName="),
            void 0, Ib("ssc"))
    }

    function oc(a) {
        var b = a.match(/:(\d+)/);
        return b ? b[1] : 0 === a.indexOf("https") ? "443" : "80"
    }

    function lc(a) {
        if (!a) return !1;
        a = O(a).toLowerCase();
        0 === a.indexOf("//") && (a = location.protocol + a);
        var b = 0 === location.href.indexOf("http");
        if (0 !== a.indexOf("http") || !b) return !1;
        if (location.href.indexOf(location.host) !== a.indexOf(location.host.toLowerCase())) return !0;
        b = location.port || oc(location.href);
        return oc(a) !== b
    }

    function Vb(a) {
        try {
            var b = document.createElement("a");
            b.href = a;
            return b.href
        } catch (f) {
            return a
        }
    }

    function tb() {
        try {
            return Eb.location.href
        } catch (a) {}
        return ""
    }

    function tc(a) {
        if (!a) return "";
        try {
            var b = void 0,
                f = Vb(a);
            if (!Eb.location) return f;
            var k = Eb.location,
                p = k.origin;
            if (!p) {
                if (!k.protocol || !k.host) return f;
                p = k.protocol + "//" + k.host
            }
            var z = b = f.substring(0, p.length + 1).toLowerCase() === (p + "/").toLowerCase() ? f.substring(p.length) : f
        } catch (K) {
            z = a, 0 === a.indexOf("?") && (z = Eb.location.pathname + a)
        }
        return Xa(z, 500)
    }

    function Xa(a, b, f, k) {
        void 0 === b && (b = 100);
        void 0 === f && (f = !1);
        void 0 === k && (k = "...");
        return !a || a.length <=
            b ? a : f ? k + a.substring(Math.max(0, a.length - b + k.length)) : a.substring(0, Math.max(0, b - k.length)) + k
    }

    function fc(a) {
        var b = Qb("sl");
        return Xa(a, b)
    }

    function Gb(a, b, f, k) {
        if (a[k].set) {
            var p = a[k].set(b, f);
            p && p.get && p.get(b) === f && (a[k] = p)
        } else a[k][b] = f
    }

    function ec(a, b, f, k) {
        f && (f = Xa(f, Qb("mhl")), Gb(a, b, f, k))
    }

    function C(a) {
        return a ? a.split("?")[0] : ""
    }

    function pa() {
        var a = bh();
        if (a) {
            var b = a.indexOf("-");
            a = -1 === b ? "" : a.substring(0, b);
            if (a) {
                b = "";
                for (var f = 0; f + 1 < a.length; f += 2) b += a.charCodeAt(f) + a.charCodeAt(f + 1) + "";
                a =
                    Math.floor(Math.abs(1E7 * Math.sin(parseInt(b))))
            } else a = 0
        } else a = !1;
        return a
    }

    function Ga() {
        var a = hc();
        return 3 === a ? !0 : 4 === a ? !1 : !!Qb("rdnt") && ma()
    }

    function ja(a, b, f) {
        if (!a || !b) return [];
        for (var k = [], p = 0; p < a.length; p += b) {
            if (p + b <= a.length) {
                var z = a.slice(p, p + b);
                "%" === z.charAt(z.length - 1) && a.length >= p + b + 1 && (z += a.charAt(p + b), z += a.charAt(p + b + 1), p += 2);
                "%" === z.charAt(z.length - 2) && a.length >= p + b + 2 && (z += a.charAt(p + b), p += 1)
            } else z = a.slice(p);
            k.push(z)
        }
        if (f)
            for (a = k.length, b = 0; b < a; b++) k[b] = f.replace(/#index#/, b + 1 +
                "").replace(/#total#/, a + "") + k[b];
        return k
    }

    function Cb(a) {
        return !1 === a ? 0 : "number" === typeof a ? 2 : 1
    }

    function Za(a, b) {
        void 0 === b && (b = Qb("rtu"));
        if (!a) return "";
        var f = Qb("rtp");
        if (!f || a.length > b && 2 === f) a = C(a);
        var k = lb(a);
        if (k.length > b) {
            f = lb(ca(a));
            a = a.split("/");
            a = a[a.length - 1];
            var p = lb(a);
            if (p !== f) {
                if (k = f + "/../" + p, b = k.length - b, 0 < b)
                    if (p.length > b) {
                        b = Math.max(p.length - (b + 2), 0);
                        k = Math.max(a.length - b, 0);
                        for (p = lb(a.substring(k, a.length)); p.length > b;) k += Math.ceil((p.length - b) / 3), p = lb(a.substring(k, a.length));
                        k = f + "/../.." + p
                    } else k = Xa(f, b, !1, ".../") + p
            } else k = Xa(k, b, !0)
        }
        return k
    }

    function v(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function F(a, b) {
        var f = 1E3 * Qb("oat");
        return (null !== b && void 0 !== b ? b : wd()) + f >= a ? a : -2
    }

    function D() {
        return Y().disabled && !Y().syn
    }

    function N(a) {
        var b = Y();
        b.syn || (b.disabledReason = a, b.disabled = !0)
    }

    function aa(a, b) {
        return og(a, b) || Sh(a) || ""
    }

    function H(a) {
        return null === a || void 0 === a ? void 0 : a.startsWith("data:")
    }

    function na(a) {
        if (Object.keys) return Object.keys(a);
        var b = [];
        if (a ===
            Object(a))
            for (var f in a) v(a, f) && b.push(f);
        return b
    }

    function R(a, b) {
        a = qh[a]; - 1 < a.indexOf(b) || a.push(b)
    }

    function ra(a, b) {
        a = qh[a];
        b = a.indexOf(b); - 1 !== b && va(a, b)
    }

    function za(a) {
        for (var b = [], f = 0, k = qh[a.kind].slice(); f < k.length; f++) {
            var p = (0, k[f])(a);
            p && b.push(p)
        }
        return b
    }

    function $a() {
        var a = mg,
            b = ab();
        a !== b && R("DEBUG_INFO_REQUESTED", function() {
            return [{
                type: "miav",
                severity: "Warning",
                text: "Snippet version(".concat(a, ") does not match the version of the monitoring code(").concat(b, "). Consider updating your code snippet for best compatibility.")
            }]
        });
        R("DEBUG_INFO_REQUESTED", function() {
            return [{
                type: "v",
                severity: "Info",
                text: "Snippet version: ".concat(a, " ; Monitoring code:").concat(ab())
            }]
        })
    }

    function vb(a, b) {
        void 0 === b && (b = []);
        var f = Eb.dT_;
        f = (null === f || void 0 === f ? 0 : f.iIO) ? f.iIO : null;
        return !(null === f || void 0 === f || !f(a, b))
    }

    function Wb() {}

    function qb(a) {
        return (vb(a, 9) || Fb(a)) && ("string" === typeof a.textContent || "string" === typeof a.innerText)
    }

    function Fb(a) {
        return a && a.nodeType && 1 === a.nodeType
    }

    function Zb(a) {
        return a && "INPUT" === a.nodeName
    }

    function wb(a) {
        return a &&
            "SCRIPT" === a.nodeName
    }

    function Xb(a) {
        return "function" === typeof a && /{\s+\[native code]/.test(Function.prototype.toString.call(a))
    }

    function Sc() {
        return Cf
    }

    function ye() {
        return Dd
    }

    function ze() {
        return gd
    }

    function Nd() {
        return Ed
    }

    function sc(a, b) {
        a ? a.id === a.Ja() && (pg = a) : pg = b ? null : pg
    }

    function yc() {
        for (var a = se.Ba.length - 1; 0 <= a; a--) {
            var b = se.Ba[a];
            if (b.Pc() && !b.La || b.La && b.Kg()) return b
        }
        return null
    }

    function Kc(a) {
        return se.actions[a]
    }

    function od() {
        var a = cf();
        if (a === Y() || !Ka(a) || !a.gITAID) return rh = ya, rh();
        a = a.gITAID();
        qg = a + 1;
        return a
    }

    function ya() {
        return qg++
    }

    function G() {
        return rh()
    }

    function ia(a) {
        return (a = Kc(a)) && a.bb ? a : null
    }

    function xa(a) {
        return (a = "number" === typeof a ? ia(a) : a) ? a.Za() : ""
    }

    function Ba(a, b, f) {
        var k = Ed;
        f && (k = Kc(f));
        if (!k) return !1;
        k.Sf(a, b);
        return !0
    }

    function Da() {
        var a = Dj(!0);
        if (0 < a.length) {
            for (var b = [], f = 0; f < a.length; f++) {
                var k = a[f];
                k.frameId !== Re() && b.push(k)
            }
            Xi(b)
        }
    }

    function Ma(a) {
        if (!a) return "";
        var b = Re() + "h" + a,
            f = document.cookie,
            k = og(Th(), f);
        return Ib("dASXH") && k && 0 <= k.indexOf(b) &&
            !S() ? "" : Uh() + "$" + Re() + "h" + a + "v" + bh(f) + "e0"
    }

    function sa(a) {
        for (var b = h.length - 1; 0 <= b; b--)
            if (h[b] === a) {
                va(h, b);
                break
            }
    }

    function Ha(a) {
        if (0 < e || a && 0 < h.length)
            if (a = h.length, 0 < a) return h[a - 1];
        return 0
    }

    function ob(a, b) {
        if (Xb(Array.prototype.map)) return Array.prototype.map.call(a, b);
        for (var f = [], k = 0; k < a.length; k++) f.push(b(a[k], k, a));
        return f
    }

    function Pa() {
        return ob(r, function(a) {
            return a.message ? "Status: ".concat(a.status, ', Message: "').concat(a.message, '"') : "Status: ".concat(a.status)
        })
    }

    function gb(a, b,
        f, k, p, z) {
        void 0 === p && (p = !1);
        void 0 === z && (z = !1);
        if (p) Tb(a, b, f, k, z);
        else {
            try {
                for (p = 0; p < a.length; p++) p in a && b.call(f, a[p], p, a, function() {})
            } catch (da) {
                var K = da
            }
            if (k) K ? k.call(f, a, K) : k.call(f, a);
            else if (K) throw K;
        }
    }

    function gc(a, b, f, k, p) {
        void 0 === k && (k = !1);
        void 0 === p && (p = !1);
        return new Td(function(z, K) {
            gb(a, b, f, function(da, ua) {
                ua ? K(ua) : z(da)
            }, k, p)
        })
    }

    function Tb(a, b, f, k, p) {
        function z(Sb) {
            Db = Sb;
            Lb(function() {
                K(Sb, ua)
            })
        }

        function K(Sb, Mb) {
            if (!fb) {
                var $b;
                try {
                    4 > b.length && ib++, Sb in Mb && ($b = b.call(f, Mb[Sb], Sb,
                        Mb,
                        function() {
                            function ld(mf) {
                                Db = mf;
                                Lb(function() {
                                    K(mf, ua)
                                })
                            }
                            ib++;
                            ib === Mb.length && da();
                            for (var df = Db + 1; df < Mb.length; df++) ld(df)
                        }))
                } catch (ld) {
                    var vc = ld;
                    $b = !1
                }
                Sb = function(ld) {
                    Db = ld;
                    Lb(function() {
                        K(ld, ua)
                    })
                };
                for (var Jc = Db + 1; Jc < Mb.length; Jc++) Sb(Jc);
                (!1 === $b || vc) && da(vc);
                ib !== Mb.length || fb || da()
            }
        }

        function da(Sb) {
            k && !fb && (k.apply(f, Sb ? [ua, Sb] : [ua]), fb = !0)
        }
        void 0 === p && (p = !1);
        var ua = p ? a : Array.prototype.slice.call(a),
            ib = 0,
            fb = !1,
            Db = 0;
        for (a = 0; a < ua.length; a++) z(a);
        ib === ua.length && Lb(da)
    }

    function Lb(a) {
        V || (V = !0, Ub(function() {
            V = !1;
            var b = B;
            B = [];
            for (var f = ic(), k = 0; k < b.length && 35 > ic() - f;) b[k](), k++;
            for (f = k; f < b.length; f++) Lb(b[f])
        }, 0));
        B.push(a)
    }

    function ac(a, b) {
        if (Xb(Array.prototype.filter)) return Array.prototype.filter.call(a, b);
        for (var f = [], k = 0; k < a.length; k++) {
            var p = a[k];
            b(p, k, a) && f.push(p)
        }
        return f
    }

    function Oc(a, b, f, k) {
        void 0 === k && (k = !1);
        return f ? new Td(function(p, z) {
            var K = [];
            gb(a, function(da, ua) {
                b(da, ua, a) && K.push(da)
            }, null, function(da, ua) {
                ua ? z(K) : p(K)
            }, f, k)
        }) : Td.resolve(ac(a, b))
    }

    function cd(a, b) {
        void 0 ===
            b && (b = !1);
        var f = ["i".concat(a.id), "k".concat(a.kind), "h".concat(+a.hydrated)];
        b && f.push("t".concat(+a.trigger));
        return f.join(";")
    }

    function wc(a) {
        if (a)
            for (var b = document.getElementsByTagName("LABEL"), f = b.length, k = 0; k < f; k++) {
                var p = b[k];
                if (p && "LABEL" === p.nodeName && p.htmlFor === a) return Cc(p.innerText, p.textContent)
            }
        return ""
    }

    function Cc() {
        for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
        for (b = 0; b < a.length; b++) {
            var f = a[b];
            if ("string" === typeof f && (f = O(f))) return f
        }
        return ""
    }

    function Fe(a) {
        if (a) {
            if (0 ===
                a.indexOf("data:")) return "";
            a = a.split("/");
            if (0 < a.length) return a[a.length - 1].split(".")[0]
        }
        return ""
    }

    function oe(a) {
        if (a && a.split) {
            var b = a.split("/");
            if (0 < b.length && (b = O(b[b.length - 1]), null !== b)) return b
        }
        return a || ""
    }

    function hd(a) {
        return qb(a) ? a.innerText || a.textContent : a.textContent
    }

    function $c(a, b) {
        var f = b.nodeName ? b.nodeName.toUpperCase() : "unknown",
            k = Fb(b) ? b.getAttribute("type") : "";
        k = "string" === typeof k ? k.toUpperCase() : "";
        var p = "";
        switch (a) {
            case 0:
                Fb(b) ? (f = "", Zb(b) && "HIDDEN" !== k && (f = !k || "BUTTON" !==
                    k && "SUBMIT" !== k && "RESET" !== k && "IMAGE" !== k ? null : b.value, a = wc(b.id), f = !k || "BUTTON" !== k && "SUBMIT" !== k && "RESET" !== k ? Cc(a, f) : Cc(f, a)), f || (f = Cc(hd(b))), p = f) : p = "";
                break;
            case 1:
                f = "";
                if (Zb(b) && "HIDDEN" !== k || b && "BUTTON" === b.nodeName) k = "IMAGE" === k ? b.getAttribute("alt") : null, f = Cc(b.name, b.title, k);
                p = f;
                break;
            case 3:
                Fb(b) ? (b = b.className, p = vb(b, ["baseVal", "animVal"]) ? b.baseVal || b.animVal || "" : b) : p = "";
                break;
            case 4:
                b = "";
                "INPUT" === f && "HIDDEN" !== k ? b = "INPUT: " + k : "A" === f ? b = "LINK" : "-" === Jb && (Jb = b = f);
                p = b;
                break;
            case 2:
                f =
                    "", Zb(b) && "IMAGE" === k ? f = Fe(b.src) : b && "A" === b.nodeName ? f = Cc(b.title, oe(b.href)) : b && "IMG" === b.nodeName ? f = Cc(b.name, b.title, b.alt, Fe(b.src)) : b && "FORM" === b.nodeName && (f = Cc(b.name, b.id, b.action)), f || (f = Cc(b.title, b.data, b.wholeText, b.id)), p = f
        }
        return p
    }

    function Wc(a) {
        if (!a) return "";
        try {
            var b = a.nodeName ? a.nodeName.toUpperCase() : "unknown";
            if ("HTML" === b || "BODY" === b || "HEAD" === b || "#DOCUMENT" === b) return Jb;
            for (b = 0; 4 >= b; b++) {
                var f = $c(b, a);
                if (f && f !== Jb) return f
            }
            return Wc(a.parentNode)
        } catch (k) {}
        return ""
    }

    function Ae(a,
        b) {
        if (!b) return "";
        var f = b.length;
        if (0 >= f || 20 < Ud) return "";
        for (var k = 0; k < f; k++) {
            var p = b[k],
                z;
            Ud++;
            if (z = Ae(a, p.childNodes)) return z;
            Ud--;
            if (z = $c(a, p)) return z
        }
        return ""
    }

    function id(a) {
        try {
            var b = a.nodeName ? a.nodeName.toUpperCase() : "unknown";
            if ("HTML" === b || "BODY" === b || "HEAD" === b || "#DOCUMENT" === b) return "Page: " + ha;
            if (a && "SELECT" === a.nodeName) {
                var f = a.nodeName ? a.nodeName.toUpperCase() : null,
                    k = wc(a.id),
                    p = Cc(k, a.name, f),
                    z = null;
                if (!a.multiple) {
                    var K = a.options && -1 < a.selectedIndex ? a.options[a.selectedIndex] : null;
                    K && (z = Cc(K.label, K.innerText, K.textContent))
                }
                return z ? "[" + p + "] to value [" + z + "]" : p
            }
            if (a && "TEXTAREA" === a.nodeName) {
                var da = a.nodeName ? a.nodeName.toUpperCase() : null,
                    ua = wc(a.id);
                return Cc(ua, a.name, da) || a.nodeName
            }
            var ib = Cc(hd(a));
            if (ib) return ib;
            Ud = 0;
            if (a.childNodes && 0 < a.childNodes.length) {
                a: {
                    for (p = 0; 4 >= p; p++) {
                        var fb = Ae(p, [a]);
                        if (fb) {
                            z = fb;
                            break a
                        }
                    }
                    z = ""
                }
                return z
            }
        } catch (Db) {}
        return Wc(a)
    }

    function zd() {
        Ya = Lc("uana").split(",");
        cb = Qb("uanpi") || 0
    }

    function jd() {
        return Pc
    }

    function pd(a) {
        3 === a && ($d = []);
        Pc = a
    }

    function de() {
        return Ic
    }

    function Hd(a) {
        var b = ac(Tf, function(f) {
            return f.timestamp <= a
        });
        return b[b.length - 1] || null
    }

    function pe(a) {
        Array.isArray(a) ? $d.push.apply($d, a) : $d.push(a)
    }

    function Rd(a) {
        var b = Uf;
        try {
            for (; b;) {
                var f;
                if (f = a.target && "string" !== typeof a.target && a.target !== b.target && "string" !== typeof b.target) a: {
                    try {
                        for (var k = a.target.parentNode; k;) {
                            if (k === b.target) {
                                f = !0;
                                break a
                            }
                            k = k.parentNode
                        }
                    } catch (p) {}
                    f = !1
                }
                f && (a = b);
                b = b.next
            }
        } catch (p) {}
        Uf = a
    }

    function sd(a) {
        var b, f = a.zh,
            k = a.url,
            p = a.title,
            z = a.view;
        return b = {
            id: a.id,
            target: a.target,
            name: "",
            type: a.type,
            next: void 0,
            Bb: void 0,
            info: a.Rf || "-",
            start: ic(),
            fc: !1,
            pf: ic() + (f || 30),
            url: k || tb(),
            title: p || document.title,
            aa: ""
        }, b.view = z, b.Pb = function() {
            if (!this.name) {
                if (Ib("uam")) var K = {
                    aa: "dTMasked_" + (qb(this.target) ? this.target.nodeName : "")
                };
                else {
                    var da = this.target || "";
                    Jb = "-";
                    if ("string" === typeof da) K = {
                        aa: da
                    };
                    else if (Fb(da)) {
                        K = id(da) || Jb;
                        a: {
                            try {
                                for (var ua = 0; ua <= cb; ua++) {
                                    for (var ib = 0, fb = Ya; ib < fb.length; ib++) {
                                        var Db = da.getAttribute(fb[ib]);
                                        if (Db) {
                                            var Sb = Db;
                                            break a
                                        }
                                    }
                                    if (da.parentElement) da = da.parentElement;
                                    else break
                                }
                            } catch (Mb) {}
                            Sb = ""
                        }
                        K = {
                            aa: K,
                            Mb: Sb
                        }
                    } else K = {
                        aa: Jb
                    }
                }
                K.aa = fc(Ab(K.aa));
                K.Mb = fc(Ab(K.Mb));
                this.name = K.Mb || K.aa;
                K.Mb && (this.aa = K.aa)
            }
            return this.name
        }, b.gj = function() {
            return this.fc
        }, b.lh = function() {
            var K = this;
            do K.fc = !0, K = K.next; while (K)
        }, b
    }

    function Tc(a, b, f, k, p, z, K) {
        void 0 === K && (K = Ic);
        if (wa(Df)) return Df.bi(a, b, f, k, p, z, K);
        var da = sd({
            id: ll++,
            target: a,
            type: b,
            Rf: f,
            zh: k,
            url: p,
            title: z,
            view: K
        });
        try {
            return ml && (da.next = Uf, da.next && (da.next.Bb = da), Rd(da)),
                da
        } finally {
            Ub(function() {
                L(da)
            }, da.pf - ic())
        }
    }

    function Pd() {
        return wa(Df) ? Df.gci() : Uf
    }

    function Bd() {
        return wa(Df) ? Df.gpi() : rg
    }

    function n(a, b) {
        if (wa(Df)) return Df.cii(a, b);
        b = b ? Bd() : Pd();
        if (!b) return Bm[a];
        switch (a) {
            case "name":
                return b.Pb();
            case "type":
                return b.type;
            case "validUntil":
                return b.pf;
            case "start":
                return b.start;
            case "target":
                return b.target;
            case "url":
                return b.url;
            case "title":
                return b.title;
            default:
                return null
        }
    }

    function x(a) {
        return n(a, !0)
    }

    function y(a, b) {
        return {
            timeout: a,
            url: n("url", b),
            name: n("name", b),
            startTime: n("start", b),
            type: n("type", b) || "-",
            title: n("title", b)
        }
    }

    function L(a) {
        if (wa(Df)) Df.ei(a);
        else if (Uf) {
            for (var b = Uf; b.next && b !== a;) b = b.next;
            b === a && (n("name") && (rg = Uf), b.target = void 0, b.Bb && (b.Bb.next = b.next), b.next && (b.next.Bb = b.Bb), b === Uf && (Uf = b.next))
        }
    }

    function M(a) {
        void 0 === a && (a = "");
        return a ? -1 !== (Lc("doNotDetect") ? Lc("doNotDetect").split(",") : []).indexOf(a) : !1
    }

    function X(a, b, f) {
        if (!M(f)) {
            var k = b ? b : a;
            pk[a] = function(p) {
                var z, K;
                za((z = {}, z.kind = "GLOBAL_EVENT_FIRED", z.detail =
                    (K = {}, K.t = a, K.e = p, K), z));
                z = Ib("ote");
                K = Ib("ase");
                var da = "boolean" !== typeof p.isTrusted || p.isTrusted,
                    ua = p.isRuxitSynthetic;
                if (K ? ua : !z || da) {
                    (z = p.target || p.currentTarget || p.srcElement || null) && z.shadowRoot && p.composed && p.bubbles && "function" === typeof p.composedPath && (K = p.composedPath()) && K.length && (z = K[0]);
                    a: {
                        K = z;
                        if (("KD" === k || "KU" === k) && Zb(K) && "password" !== K.type)
                            if (p = p.keyCode || p.charCode || p.code, K = +p, Ib("uam") && !isNaN(K)) {
                                if (K = String.fromCharCode(K), !("a" <= K && "z" >= K || "A" <= K && "Z" >= K || "0" <= K && "9" >= K)) {
                                    p +=
                                        "";
                                    break a
                                }
                            } else {
                                p += "";
                                break a
                            }
                        p = ""
                    }
                    Tc(z, k + p, void 0, 30)
                }
            };
            Ef(document, a, pk[a])
        }
    }

    function ka(a) {
        ml = a;
        if (!a) {
            for (a = Uf; a;) a.target = void 0, a = a.next;
            Uf = void 0
        }
    }

    function wa(a) {
        return a !== Y() && Ka(a)
    }

    function Va(a) {
        ti = a
    }

    function Qa(a, b) {
        var f;
        if (b <= ti) return !1;
        b = null === (f = Ed) || void 0 === f ? void 0 : f.Rb();
        f = !!b && a === b.name;
        b = pg;
        if (!b) return !f;
        a = a === b.name && (!b.B || 3E3 >= ic() - b.start);
        return !f && !a
    }

    function xb(a, b) {
        if (!Ib("dsa") || 0 !== a.indexOf("false")) {
            var f = Ib("dssv"),
                k = Ib("dsss"),
                p = k && f,
                z = k && !f,
                K = f && !k;
            f = !f &&
                !k;
            k = b ? a + "|" + b : a;
            var da = Ff();
            p && J(da, k);
            z && (J(da, a), Qe(da, Ce(b || "-"), void 0, Ib("ssc")));
            K && (J(da, b || "-"), Qe(da, Ce(a), void 0, Ib("ssc")));
            f && Qe(da, Ce(k), void 0, Ib("ssc"))
        }
    }

    function Pb() {
        var a = null,
            b = ae[0];
        if (b) {
            b.Da(0);
            b.je();
            a = b;
            for (var f = 0; f < b.subActions.length; f++) a = b.subActions[f], a.Da(0), a.je()
        }
        return a
    }

    function Dc(a, b, f, k, p, z) {
        void 0 === a && (a = ic());
        var K = Ha(!0),
            da = Ed || Pb(),
            ua = [];
        if (!K && b && f && a) ua = [!p + "", W(f), p || "-1", W(b), W(k || "-"), a, Re(), lb(oa()), "", "", W(location.hash.substring(1)), W(z || "")];
        else if (da) {
            da.Kb();
            var ib = da.status;
            da.status = 2;
            Ub(function() {
                da.status = ib
            }, 0);
            ua = ["false", W(da.type), da.id, W(da.name), W(da.info || "-"), da.start, Re(), lb(oa()), "", "", W(location.hash.substring(1)), W(da.aa || "")]
        }
        return ua
    }

    function Ec(a, b, f) {
        void 0 === b && (b = null);
        var k = !1,
            p = cf();
        Ka(p) && (k = p.iSAC());
        if (!k || p === Y()) {
            a && (xb("-"), qk = []);
            k = Pd();
            if (!k) {
                var z = Bd();
                z && Qa(x("name"), x("start")) && 3E3 >= ic() - x("validUntil") && (k = z)
            }
            z = [];
            k && !k.fc ? (k.lh(), z = Dc(k.start, k.Pb(), k.type, k.info, k.D, k.aa)) : b ? z = Dc(b.start, b.name, b.type, b.info, b.id,
                b.aa) : a && (z = Dc(f));
            a = z;
            f = qk;
            1 < f.length && 1 < a.length && f[3] === a[3] && (f[2] = a[2], f[0] = a[0], a = f);
            a.length && (f = Ic, b = f.timestamp, k = f.group, f = [lb(f.name), b, lb(k || ""), W(cd(f, !0))], xb(a.join("|"), f.join("|")), qk = a.concat(f), Ka(p) && p.sSAC(!0, !0))
        }
    }

    function qc(a, b) {
        return Yi("mcepsl") ? Za(b) : Za(b, Qb("mcepsl"))
    }

    function kd(a, b, f, k) {
        var p;
        void 0 === f && (f = !1);
        return "tvn" === a || "svn" === a || "tvg" === a || "svg" === a ? b : b && b.length > k ? (f && (null === (p = Eb.console) || void 0 === p ? void 0 : p.log("Truncating agent event because the size for property [".concat(a,
            "] exceeds size limit of ").concat(k, " characters: [").concat(b.length, "]"))), Xa(b, k, "lcpSel" === a)) : b
    }

    function Jd(a, b) {
        for (var f = Qb("mcepsl"), k = [], p = 0; p < b.length; p++) {
            var z = b[p],
                K = z[0],
                da = z[1];
            z = K;
            if (0 !== Pc) {
                var ua = Ic,
                    ib = ua.name,
                    fb = ua.group;
                ua = ua.timestamp;
                da = ib && da === ib && "tvn" === z || fb && da === fb && ("tvg" === z || "svg" === z) || ua && da === ua + "" && "tvt" === z ? "" : da
            }
            z = kd;
            ib = rk[a];
            "function" === typeof ib && (z = ib);
            "object" === typeof ib && ib[K] && (z = ib[K]);
            ib = Xa(K, f);
            (K = z(K, da, !1, Qb("mcepsl"))) && ib && k.push([ib, K])
        }
        return k
    }

    function Xd(a, b) {
        void 0 === b && (b = 1);
        var f = [b + "", a.id + "", "_event_", a.timestamp + "", a.kind + ""];
        a = Jd(a.kind, a.Yb);
        gb(a, function(k) {
            var p = k[1];
            f.push(W(k[0]));
            f.push(W(p))
        });
        return f.join("|")
    }

    function vd(a, b, f) {
        for (var k, p, z = "", K = "", da = 0; da < a.length; da++) {
            var ua = a[da];
            ua.Ke();
            var ib = ua.Fc();
            ua.Yc(f);
            z || (z = ua.Za());
            K = ua.Za();
            if ("_load_" === ua.type && (Cf = !0, k = sh)) {
                K = [k.id, k.name, k.type, k.info, k.frameId, k.startTime];
                k.isDelayed ? (p = "", k.anchor && (p = "#" + k.anchor), K.unshift("d"), p = W(k.za + p), K.push(p, "")) : K.unshift("s");
                K.push(k.aa || "");
                if (k.sa) {
                    p = k.sa;
                    var fb = p.timestamp,
                        Db = p.group;
                    K.push(p.name);
                    K.push(fb);
                    Db && K.push(Db)
                }
                k = k.za;
                p = K.join("|");
                K = k;
                b.push(p);
                sh = null
            }
            ua.parentFrameActionName && (k = b, p = k.push, fb = ua.Se, ua = [0, ua.Re, W(ua.parentFrameActionName), fb].join("|"), p.call(k, ua));
            b.push(ib)
        }
        return {
            eb: z,
            za: K
        }
    }

    function fe(a, b) {
        var f, k, p = ac(ae, function(ua) {
                return (ua.ye() || a || b) && !ua.ph()
            }),
            z = gd;
        if (b) {
            z = [];
            gd = [];
            for (var K = 0; K < p.length; K++) {
                var da = p[K];
                za((f = {}, f.kind = 2 <= da.status ? "ACTION_BEACON_FORCED" : "ACTION_CLOSED",
                    f.detail = (k = {}, k.a = da.start, k.s = da.stop, k.r = da.Ja(), k.i = da.id, k.f = !0, k.t = da.type, k.x = da.xhrUrl, k.rt = void 0, k.xm = da.jb, k.xe = da.Ta, k.cs = da.Ea, k.ce = da.Oa, k["in"] = da.info, k), f))
            }
            se.Ba = [];
            sc(Ed && null !== Ed ? Ed.Rb() : null);
            Ed = null
        }
        return {
            dh: p,
            lg: z
        }
    }

    function qe(a, b) {
        void 0 === a && (a = !1);
        void 0 === b && (b = !1);
        var f = [],
            k = fe(b, a);
        b = k.lg;
        k = vd(k.dh, f, a);
        a = k.eb;
        k = k.za;
        gb(Fa, function(p) {
            f.push(Xd(p))
        });
        ae = db([], b, !0);
        Fa = [];
        return {
            uc: f.join(","),
            referer: a,
            sourceUrl: k
        }
    }

    function Ua(a, b, f, k) {
        for (var p = 0, z = ui().slice(); p < z.length; p++) {
            var K =
                z[p];
            try {
                K(a, b, f, k)
            } catch (da) {}
        }
    }

    function Fg() {
        return sk
    }

    function Of(a) {
        a = W(a); - 1 === Xl.indexOf(a) && Xl.push(a)
    }

    function Ze(a) {
        return -1 !== Xl.indexOf(a)
    }

    function cg() {
        var a = {};
        try {
            for (var b = vi; b && b !== Eb;) {
                var f = b.dT_;
                Ka(f) && f.version !== ab() && (a[f.version] = 1);
                b = b !== b.parent ? b.parent : void 0
            }
        } catch (k) {}
        return a
    }

    function He() {
        return !Vh
    }

    function Gg(a, b, f, k) {
        b = cg();
        b = ac(na(b), ag);
        tk.push.apply(tk, b);
        0 < b.length && (b.unshift(ab()), a.av(k, "afv", b.join(",")))
    }

    function ag(a) {
        return 0 > tk.indexOf(a)
    }

    function jf() {
        if (vi &&
            vi !== Eb) {
            var a = vi.dT_;
            Ka(a) && a.version === ab() && Bb(Y(), a) && (th = a, a = th.tdto(), Ka(a) && (Vh = a))
        }
    }

    function Fd() {
        try {
            jf()
        } catch (b) {}
        nf(Gg);
        var a = Y();
        Vh ? (sk = Vh.pageId, a.Qe = Vh.Qe, uk = th.gFId(), th.Ni++) : (sk = Re(), a.Qe = document.title);
        a.pageId = sk;
        R("DEBUG_INFO_REQUESTED", function() {
            var b = cg();
            b = na(b);
            return 0 === b.length ? null : [{
                severity: "Error",
                text: "Version of current agent ".concat(ab(), " mismatches with version").concat(1 < b.length ? "s" : "", " ").concat(b.join(", "), " of parent frames. Make sure to use the same version on all frames to secure compatibility!"),
                type: "mpv"
            }]
        })
    }

    function Xc(a) {
        return a && 1 === a.length ? -1 !== Lc("featureHash").indexOf(a) : !1
    }

    function Yc(a, b, f, k) {
        void 0 === k && (k = qf(a));
        var p = Eb.dT_,
            z = !!Y().syn;
        b = b || !z;
        a = z && -1 === p.iMod().indexOf(a);
        return b && f && (k || a)
    }

    function qf(a) {
        var b = Eb.dT_;
        if (b.ism(a) && -1 === b.iMod().indexOf(a)) return b.iMod(a), !0;
        b.ism(a) && (a = 'Module "' + a + '" already enabled!', Y().gCP || Eb.console.log("WARNING: " + a));
        return !1
    }

    function Kh(a) {
        var b = sg.initializedModules || "";
        a && (b += a);
        return sg.initializedModules = b
    }

    function me(a, b) {
        void 0 ===
            b && (b = ab());
        var f = Lc("agentUri");
        f = f.substring(0, f.lastIndexOf("/"));
        var k = Lc("csu");
        "true" === uh("dtUseDebugAgent") && Eb.dT_debugger && 0 > k.indexOf("dbg") && (k = Lc("debugName") || k + "dbg");
        return "".concat(f, "/").concat(k, "_").concat(a, "_").concat(b, ".js")
    }

    function xe(a) {
        return sg[a]
    }

    function Lh(a, b) {
        var f;
        sg[a] = b + "";
        za((f = {}, f.kind = "CONFIG_UPDATE", f.detail = sg, f))
    }

    function Jf(a) {
        var b = a.Qg,
            f = a.sd;
        return a.Wf || b && "sendBeacon" in navigator && !Ib("dsndb") && !f ? Cm : ng.ff ? Dm : Yl
    }

    function Xg() {
        return wi
    }

    function u(a,
        b, f, k, p, z) {
        vh = !1;
        a = k || wi.Ue(a, b, f);
        return a.beacon ? hb(!!f, a, p, z) : 0
    }

    function t(a, b, f, k, p, z) {
        var K = wh(aa("dtAdkSettings")).overloadState;
        xh = K;
        if (1 === K) return 0;
        if (2 !== K) return u(a, b, f, k, p, z) || 0;
        if (f) return 0;
        Ub(function() {
            t(a, b, f, k, p, z)
        }, 5E3);
        return 0
    }

    function A(a, b) {
        var f = document.cookie,
            k = Wh(f),
            p = Lc("cuc");
        Q(b, "sn", encodeURIComponent(k));
        Q(b, "latency", "0");
        Q(b, "flavor", Ib("cors") ? "cors" : "post");
        if (void 0 === b.crc) {
            var z;
            k = a.ve ? a.ld : a.nf();
            "string" === typeof k ? z = (new TextEncoder).encode(k) : z = k;
            k = -1;
            for (var K = 0; K < z.length;) k = k >>> 8 ^ Ej[(k ^ z[K++]) & 255];
            z = (k ^ -1) >>> 0; - 1 !== z && (b.crc = z)
        }
        Q(b, "vi", encodeURIComponent(a.Qb("vi") || bh()));
        Q(b, "bp", 3);
        Q(b, "v", xi);
        Q(b, "app", encodeURIComponent(Lc("app")));
        Q(b, "type", "js3");
        Q(b, "dtAdk", encodeURIComponent(aa("dtAdk", f)));
        Q(b, "contentType", "");
        Q(b, "modifiedSince", Qb("lastModification"));
        Q(b, "svrid", Uh());
        p && (b.en = p);
        b.contentType && "srRs" === b.contentType && Q(b, "msl", Qb("msl"));
        b.end = 1
    }

    function Q(a, b, f) {
        void 0 === a[b] && (a[b] = f)
    }

    function la(a) {
        var b = "type sn svrid flavor vi contentType modifiedSince".split(" ");
        Ib("owasp") || b.push("rf");
        Ib("cors") && b.push("dtAdk");
        b.push("bp");
        Lc("app") && b.push("app");
        a.contentType && b.push("v");
        "event" === a.contentType && b.push("st"); - 1 !== a.crc && b.push("crc");
        Lc("cuc") && b.push("en");
        "srRs" === a.contentType && b.push("msl");
        b.push("end");
        return b
    }

    function Ta(a, b) {
        A(a, b);
        var f = la(b);
        a = Lc("reportUrl");
        (f = ob(ac(f, function(k) {
            return !!b[k]
        }), function(k) {
            return "".concat(k, "=").concat(b[k])
        }).join("&")) && (a += "?" + f);
        return a
    }

    function hb(a, b, f, k) {
        var p;
        void 0 === f && (f = !1);
        void 0 === k && (k =
            (p = {}, p.contentType = "", p));
        if (D() || !b.beacon) return 0;
        var z = b.beacon,
            K = b.referrer || tb();
        pb(k, K, z);
        b = Nb(z);
        if (!b.length) return 0;
        var da = Jf({
                Wf: Ib("svNB"),
                Qg: a,
                sd: f
            }),
            ua = Ta(z, k);
        gb(ob(ob(b, function(ib, fb, Db) {
            return {
                path: ua,
                eb: K,
                beacon: z,
                xc: ib,
                ag: fb,
                bg: Db.length,
                sd: f
            }
        }), function(ib) {
            return new da(ib)
        }), rb);
        return 2
    }

    function pb(a, b, f) {
        b = encodeURIComponent(b || "");
        Q(a, "rf", ja(b, Qb("mhl"))[0]);
        Ib("owasp") && wi.av(f, "rf", b);
        wi.av(f, "time", ic())
    }

    function rb(a) {
        return !!eb(zb, a)
    }

    function zb(a) {
        a.send().catch(function() {})
    }

    function Nb(a) {
        if (a.ld) return [a.ld];
        a = a.nf();
        var b = Y().syn ? 145E3 : Qb("msl") - 40;
        var f = a.length;
        b = 0 === f % b ? Math.floor(f / b) : Math.floor(f / b) + 1;
        if (!(1 < b)) return [a];
        if (1 > b || 20 < b) return [];
        b = Y().syn ? 145E3 : Qb("msl") - 40;
        f = "sid=" + ic() + "&p#index#_#total#=";
        return ja(a, b, f)
    }

    function nc(a) {
        vh ? "number" !== typeof a ? xc() : ic() + a < yh && xc(a) : xc(a)
    }

    function xc(a) {
        ch(Zl);
        "number" === typeof a ? (yh = ic() + (a || 0), Zl = Ub(t, a), vh = !0) : t()
    }

    function Fc(a, b) {
        return t(a, b, !1)
    }

    function rc(a) {
        ui().push(function(b, f, k, p) {
            a(p, f, k, p.Lb)
        })
    }

    function Zc() {
        for (var a =
                Pa(), b = [], f = 0; f < a.length; f++) b.push({
            severity: "Error",
            type: "be",
            text: "Beacon sending failure instance ".concat(f + 1, " of ").concat(a.length, ": ").concat(a[f])
        });
        100 === a.length && b.push({
            severity: "Error",
            type: "be",
            text: "Beacon sending failures exceeded limit of ".concat(100, " errors!")
        });
        return b
    }

    function Ve() {
        xi = parseInt(ab());
        wi = new Qg;
        nl = 0;
        zh(function(a, b, f) {
            f && (10 > tg.length ? tg.push(f) : (a = tg[10]) ? tg[10] = +a + 1 + "" : tg.push("1"))
        });
        xh = wh(aa("dtAdkSettings")).overloadState;
        R("DEBUG_INFO_REQUESTED", Zc)
    }

    function Kd() {
        for (var a = !1, b = [], f = 0, k = gd; f < k.length; f++) {
            var p = k[f];
            p.Zb && 0 < p.Zb && (p.Sa && ic() > p.Sa && (p.Sa += 6E4, b.push(p)), a = !0)
        }
        0 < b.length && t(!0, !0);
        for (f = 0; f < b.length; f++) k = b[f], k.Zb && k.Zb--;
        a && Ub(Kd, 1E3)
    }

    function uc(a, b, f) {
        var k = Ed;
        k !== a && (k && !f && sc(k), (Ed = a) ? eb(vk, a.id, b) : Da())
    }

    function bc(a) {
        Ah = null;
        if (th && th.gca) {
            var b = th.gca();
            if (Ah = b[b.length - 1]) a.Re = Ah.id, a.parentFrameActionName = Ah.name, Ah.childFrameActions ? Ah.childFrameActions++ : Ah.childFrameActions = 1
        }
    }

    function Kf() {
        var a = wh(aa("dtAdkSettings")).overloadState;
        if (xh !== a && (xh = a, 0 !== a)) {
            a = 0;
            for (var b = gd; a < b.length; a++) b[a].Xc()
        }
    }

    function Qd() {
        var a = [];
        for (var b = se.Ba.length - 1; 0 <= b; b--)
            if (se.Ba[b].ye()) {
                var f = va(se.Ba, b);
                a = a.concat(f)
            }
        b = !1;
        Kf();
        f = gd;
        for (var k = f.length - 1; 0 <= k; k--) {
            var p = f[k];
            if (p.qh) va(f, k);
            else {
                var z = Ah;
                if (0 <= a.indexOf(p)) va(f, k), b = !0;
                else if (z) {
                    var K = th.gca();
                    p.Se = vi && K[K.length - 1] === z ? "S" : "A";
                    Ah = null
                }
            }
        }
        b && nc()
    }

    function rd() {
        "hidden" === document.visibilityState ? (Zi = "1", Ee()) : Zi = "0"
    }

    function Ee() {
        var a;
        za((a = {}, a.kind = "VISIBILITY_CHANGED",
            a.detail = Zi, a))
    }

    function Nc(a, b, f) {
        if (Xb(Array.prototype.reduce)) return Array.prototype.reduce.call(a, b, f);
        var k = "undefined" !== typeof f;
        f = k ? f : a[0];
        if ("undefined" === typeof f) throw new TypeError("Reduce of empty array with no initial value");
        for (k = k ? 0 : 1; k < a.length; k++) f = b(f, a[k], k, a);
        return f
    }

    function ce(a, b, f, k) {
        var p = wd() + Math.round(f.startTime),
            z = p - a;
        p >= a && p <= b && 0 <= z && (null == k.ob || z < k.cd) && (k.ob = f, k.cd = z)
    }

    function qd(a, b, f) {
        return Nc(a, function(k, p) {
            ce(b, f, p, k);
            return k
        }, {
            ob: null,
            cd: Number.MAX_VALUE
        }).ob
    }

    function We(a, b) {
        return ac(a, function(f) {
            return f.initiatorType === b
        })
    }

    function xd(a, b, f, k) {
        try {
            if (!(a && performance && performance.getEntriesByName)) return null;
            var p = Vb(a);
            0 === p.indexOf("/") ? p = location.protocol + "//" + location.host + p : 0 !== p.indexOf("http") && (p = location.href.substring(0, location.href.lastIndexOf("/") + 1) + p);
            var z = performance.getEntriesByName(p);
            b && (z = We(z, b));
            if (z.length) return f ? qd(z, f, k || Number.MAX_VALUE) : z[z.length - 1];
            z = performance.getEntriesByType("resource");
            b && (z = We(z, b)); - 1 === p.indexOf("?") &&
                (p += "?");
            for (var K = {
                    ob: null,
                    cd: Number.MAX_VALUE
                }, da = z.length - 1; 0 <= da; da--) {
                var ua = z[da];
                if (0 === ua.name.lastIndexOf(p, 0))
                    if (f) ce(f, k || Number.MAX_VALUE, ua, K);
                    else return ua
            }
            return K.ob
        } catch (ib) {
            return null
        }
    }

    function Gd(a) {
        return $i && vb(a, 13) && "navigation" !== a.entryType || vb(a, ["_dtCl"])
    }

    function Lf(a) {
        return Wm && vb(a, 14) || vb(a, ["entryType", "requestStart"]) && "navigation" === a.entryType
    }

    function Ue(a) {
        ud++;
        (a = Kc(a.detail.i)) && !a.sa && (a.sa = Ic)
    }

    function bg(a) {
        ud--;
        if (a = Kc(a.detail.i)) a.uh = Hd(a.stop) || Ic;
        1 > ud && (Tf = [])
    }

    function Hg(a, b, f) {
        var k = b[ug[a]];
        b = b.startTime;
        if (k)
            if (0 <= "yK".indexOf(a)) f.push(a, k);
            else if ("T" === a) "number" === typeof k && 0 > k && 0 === k % 1 && f.push(a, k);
        else {
            var p = +k >= b;
            "j" === a && dh(k, 2) && Math.abs(k - b) < Xm && (p = !1);
            var z = k;
            0 <= "uvwxACDEFNOPQRSTUX".indexOf(a) ? p = 0 <= +k : "number" === typeof k ? z = Math.round(k - b) : z = k;
            p && f.push(a, z)
        }
    }

    function hf(a, b, f) {
        if (b = b[yi[a]]) {
            var k = 0 <= b;
            "j" === a && 0 === b && (k = !1);
            k && f.push(a, Math.round(b))
        }
    }

    function Rc(a, b, f) {
        (b = b[Xh[a]]) && f.push(a, b)
    }

    function ne(a, b) {
        a = a.serverTiming;
        for (var f = {}, k = 0, p = Em; k < p.length; k++) {
            var z = p[k];
            f[z] = ""
        }
        if (a) {
            for (k = 0; k < a.length; k++) p = a[k], p.description && !isNaN(+p.description) && (z = p.name, z in f && !f[z] && (f[z] = p.description));
            f.dtRequestID && (b.push("C"), b.push(f.dtRequestID));
            f.dtRpid && (b.push("M"), b.push(f.dtRpid));
            f.dtSInfo && (b.push("V"), b.push(f.dtSInfo));
            f.dtTao && (b.push("W"), b.push(f.dtTao))
        }
    }

    function Od(a, b, f, k) {
        var p = 0;
        for (a = na(a); p < a.length; p++) f(a[p], b, k)
    }

    function rf() {
        if (!window.performance) return [];
        var a = null,
            b = -1,
            f = wd();
        "getEntriesByType" in
        performance && (a = performance.getEntriesByType("navigation")[0]) && a.type && (b = Ym[a.type]);
        a && "responseEnd" in a || (a = performance.timing); - 1 === b && (b = performance.navigation.type);
        return (!Y().googleBot || Y().syn) && 0 < f ? (b = ["a", b, "b", Math.round(f)], yd(a, b, f), b) : []
    }

    function yd(a, b, f) {
        if (Zm && vb(a, 12) || vb(a, ["navigationStart"]) && !("entryType" in a))
            for (var k in Yh) {
                if (v(Yh, k)) {
                    var p = k,
                        z = a[Yh[p]];
                    if (z) {
                        var K = z >= f;
                        "j" === k && z === f && (K = !1);
                        K && b.push(p, Math.round(z - f))
                    }
                }
            } else if (f = Y(), f = f.gFU ? f.gFU() : {}, Gd(a)) {
                Od(ug,
                    a, Hg, b);
                k = b.push;
                z = k.apply;
                K = [];
                if (Gd(a)) {
                    if ("xmlhttprequest" === a.initiatorType || "fetch" === a.initiatorType) {
                        var da = "1";
                        aj[a.name] && (da = "11", delete aj[a.name]);
                        K.push("z", da)
                    } else aj[a.name] && (K.push("z", "01"), delete aj[a.name]);
                    da = "";
                    "frame" === a.initiatorType ? da = "f" : "iframe" === a.initiatorType || "subdocument" === a.initiatorType ? da = isNaN(f[a.name]) ? "i" : "i" + f[a.name] : 0 <= (a.frameId || -1) && (da = "r" + a.frameId);
                    da && K.push("B", da)
                } else aj[a.name] && (K.push("z", "01"), delete aj[a.name]);
                z.call(k, b, K);
                b.push("I",
                    null !== (p = $l[a.initiatorType]) && void 0 !== p ? p : 0);
                ne(a, b)
            } else Lf(a) ? (Od(yi, a, hf, b), ne(a, b)) : Od(Xh, a, Rc, b)
    }

    function Ig() {
        Ib("ntd") || nf(function(a, b, f, k) {
            b || Fm || !a.hla(k) || (Fm = !0, b = am || rf(), a.av(k, "nt", b.join("") || "0", !0), am = void 0)
        })
    }

    function Xe(a) {
        var b;
        if (!a) return null;
        var f = null === (b = a.getEntriesByType) || void 0 === b ? void 0 : b.call(a, "navigation")[0];
        Lf(f) || (f = a.timing);
        return f
    }

    function tf(a, b) {
        void 0 === b && (b = !1);
        if (!a) return null;
        for (var f, k = Ad(a), p = 0, z = $m; p < z.length; p++)
            if (f = sf(a, z[p], b) || -1, 0 <
                f && f !== k) return Math.round(f);
        return null
    }

    function sf(a, b, f) {
        void 0 === f && (f = !1);
        var k = Xe(a);
        if (!k) return null;
        b = k[b];
        if ("number" !== typeof b || 0 === b) return null;
        a = Ad(a);
        Lf(k) ? f && (b += a) : f || (b -= a);
        return Math.round(b)
    }

    function Ad(a) {
        var b;
        return Math.round(a.timeOrigin || (null === (b = a.timing) || void 0 === b ? void 0 : b.navigationStart) || -1)
    }

    function Be() {
        var a;
        za((a = {}, a.kind = "INSTRUMENTATION_TRIGGERED", a.detail = void 0, a))
    }

    function Mf(a) {
        var b = gd;
        bc(a);
        b.push(a);
        b = Ed;
        b !== a && (sc(b), Ed = a);
        ae.push(a);
        Ub(Kd, 5E3)
    }

    function Ye(a) {
        var b = a.start,
            f = a.xhrUrl,
            k = a.xd,
            p = a.za,
            z = a.qb;
        z = void 0 === z ? !1 : z;
        var K = a.isCustomAction;
        K = void 0 === K ? !1 : K;
        var da = a.bb;
        da = void 0 === da ? !1 : da;
        var ua = a.lf;
        ua = void 0 === ua ? -1 : ua;
        var ib = a.aa;
        ib = void 0 === ib ? "" : ib;
        var fb = a.sa,
            Db = a.Tc,
            Sb = a.id;
        a = new eh(b, a.stop || b, a.type, a.name, a.info || "", a.domNodes || -1, uf(void 0 === p ? "" : p), document.title, f || "", K, da, z, k, ua, ib, Gm, fb, Db, Sb);
        Kf();
        a.Pc() && se.Ba.push(a);
        se.actions[a.id] = a;
        eb(Zh);
        return a
    }

    function uf(a) {
        if (a) {
            var b = document.createElement("a");
            b.href =
                a;
            if ("file:" === b.protocol || "about:" === b.protocol || b.hostname) return b.href;
            var f = function(k, p, z, K) {
                k.av(K, "rfi", 1, !1);
                Fj(f)
            };
            nf(f)
        }
        return location.href
    }

    function Id(a) {
        var b, f, k;
        a.start || (a.start = ic());
        var p = Ye(a);
        p.oa = Ub(function() {
            if (p && (3 !== p.status || p.Sc())) {
                var K = p.start + 1E3 * Qb("oat");
                ee(p.id, K, void 0, !0)
            }
        }, 1E3 * Qb("oat"));
        var z = null;
        switch (Cb(a.ya)) {
            case 1:
                z = Ed;
                break;
            case 2:
                if (z = Kc(a.ya), !z && "_load_" === a.type) return p
        }
        za((b = {}, b.kind = "ACTION_ENTERED", b.detail = (f = {}, f.i = p.id, f.a = a.start, f.s = 0,
            f.x = a.xhrUrl, f.r = z ? z.Ja() : p.id, f.t = p.type, f.e = null === (k = Pd()) || void 0 === k ? void 0 : k.target, f.rt = void 0, f.xm = p.jb, f.xe = p.Ta, f.cs = p.Ea, f.ce = p.Oa, f["in"] = p.info, f), b));
        "undefined" === typeof a.lf && uc(p, !1, !!z);
        if (z)
            for (z = z.Rb(), z.Kd(p), a = 0, b = gd; a < b.length; a++) f = b[a], f.Sa && f.Sa > p.start + 1E4 && (f.Sa = p.start + 1E4);
        else Mf(p.Bg()), Se();
        return p
    }

    function ee(a, b, f, k) {
        var p, z;
        void 0 === k && (k = !1);
        a = Kc(a);
        var K = Y();
        !b && a && "_load_" === a.name && "_load_" === a.type && K.gLVD && ((k = sf(Eb.performance, "loadEventEnd")) ? (b = K.gVCP(),
            b = Math.max(b, k) + wd()) : b = ic(), k = !0);
        K = "number" === typeof b && (null === a || void 0 === a ? void 0 : a.isCustomAction);
        b = b || ic();
        a && (za((p = {}, p.kind = "ACTION_LEFT", p.detail = (z = {}, z.i = a.id, z.a = a.start, z.s = b, z.r = a.Ja(), z), p)), a.Cc(b, f, K, k), Qd());
        uc(yc(), !0)
    }

    function Ge(a, b, f) {
        var k = Ed;
        "undefined" !== typeof b && null !== b && (k = Kc(b));
        if (k) return k.Kd(a, f), !1;
        bc(a);
        ae.push(a);
        return !0
    }

    function Wg(a, b, f, k, p, z, K, da) {
        "undefined" === typeof k ? k = !0 : null === k && (k = !1);
        a = {
            name: fc(a),
            type: b,
            start: f,
            ya: k,
            info: p || "",
            xhrUrl: z || "",
            isCustomAction: !!K
        };
        da && (a.za = da);
        return Id(a).id
    }

    function dg(a, b, f) {
        Be();
        ee(a, b, f)
    }

    function Nf(a, b, f, k) {
        a = Ye({
            type: a,
            name: Xa(b + "=" + f, Qb("mpl")),
            start: ic(),
            qb: !0
        });
        Ge(a, k);
        nc()
    }

    function kf(a) {
        for (var b = se.Ba.slice(), f = 0; f < b.length; f++) ee(b[f].id, a);
        return b.length
    }

    function vf(a) {
        for (var b = 0, f = Rg; b < f.length; b++)
            if (f[b].D === a) return !0;
        return !1
    }

    function g(a) {
        if (H(a)) return !0;
        var b = bj();
        return !!((null === b || void 0 === b ? 0 : b.exec) && a && (b.exec(a) || b.exec(Vb(a))))
    }

    function q(a, b, f, k, p, z, K) {
        void 0 === b && (b = 3);
        void 0 === f && (f = "");
        void 0 === k && (k = !1);
        void 0 === p && (p = void 0);
        void 0 === z && (z = !1);
        void 0 === K && (K = !1);
        if (f && g(f)) return 0;
        var da = tc(f),
            ua = Pd(),
            ib = a || "-",
            fb = Ha(!1);
        if (Sg) {
            if (fb && !Kc(fb)) return 0;
            dd = !0
        }
        ua && (ua.info = "-" === ua.info ? ib : ua.info + ", " + ib);
        !fb && (null === ua || void 0 === ua ? 0 : ua.D) && (fb = ua.D);
        f = Vb(f);
        aj[f] = !0;
        a = {
            name: a,
            type: "xhr",
            start: ic(),
            info: ib,
            xhrUrl: da,
            isCustomAction: k,
            xd: p,
            Tc: K
        };
        fb ? (ua = 0, z || (a.ya = fb, ua = T(a))) : ua ? (fb = 0, 3 <= b && (fb = w(Ia(Ia({}, a), {
            name: ua.Pb(),
            type: ua.type,
            start: ua.start,
            info: ua.info,
            za: ua.url,
            ya: !1,
            aa: ua.aa || "",
            sa: ua.view
        })), ua.D = fb, ua.fc && Ec(!0, Kc(fb))), ua = fb) : (ua = Ed) ? (fb = 0, 1 <= b && !z && (fb = T(Ia(Ia({}, a), {
            ya: ua.id
        }))), ua = fb) : ua = Ib("cux") ? w(Ia(Ia({}, a), {
            name: "Unlinked XHR",
            type: "xhr",
            ya: !1
        })) : 0;
        return ua
    }

    function w(a) {
        a: {
            var b = a.info;
            var f = a.xhrUrl;
            if (a.xd && Rg.length)
                for (var k = Rg.length - 1; 0 <= k; k--) {
                    var p = Rg[k],
                        z = p.D,
                        K = ia(z);
                    if (K && b && b[0] !== p.ng && C(K.xhrUrl || "") === p.xhrUrl && p.xhrUrl === C(f || "")) {
                        b = z;
                        break a
                    }
                }
            b = 0
        }
        if (b) return b;a.bb = !0;
        return Id(a).id
    }

    function T(a) {
        var b = a.ya,
            f = null;
        "number" === typeof b &&
            (f = ia(b));
        a.ya = f ? f.id : !0;
        return w(a)
    }

    function E(a, b, f, k) {
        void 0 === b && (b = ic());
        void 0 === k && (k = Wb);
        var p = ia(a);
        if (!p) return -1;
        p.De();
        return Ub(function() {
            ta(a, b, f);
            k()
        }, 0)
    }

    function ta(a, b, f) {
        void 0 === b && (b = ic());
        var k = ia(a);
        !k || f && 0 > k.info.indexOf(f) && k.name !== f || (k.De(), Ub(function() {
            if (!dd) {
                var p = b;
                ia(a) && ee(a, p)
            }
        }, Gj), Be())
    }

    function Kb(a, b) {
        if (a) {
            var f = ia(a);
            f && (f.fd++, f.Ea || b && 4 !== b || f.oh(ic()), h.push(a), e++)
        }
    }

    function Ob(a) {
        if (a) {
            var b = ia(a);
            b && (b.mh(ic()), b.fd--, e--, Ub(function() {
                sa(a)
            }, 0))
        }
    }

    function cc(a, b, f) {
        if ("number" !== typeof a || isNaN(a) || 0 > a) return !1;
        0 === a && (a = 971, b = "XHR Canceled");
        b && (b += "");
        f = Kc(f) || Ed;
        if (!f || -1 !== f.Ta || !f.bb) return !1;
        f.Ta = a;
        b && 0 < b.length && (f.jb = b);
        return !0
    }

    function Vc() {
        return !Ib("disableXhrFailures")
    }

    function $e(a) {
        return (a = Kc(a)) && a.bb ? [a.Ea, a.Oa] : [0, 0]
    }

    function wf(a, b) {
        var f = ia(a);
        if (f) {
            var k = f.xhrUrl;
            f.cf(b);
            f = 0;
            for (var p = Rg; f < p.length; f++) {
                var z = p[f];
                z.D === a && z.xhrUrl === C(k) && (z.xhrUrl = C(b))
            }
        }
    }

    function Pf(a) {
        return (a = ia(a)) ? a.xhrUrl : ""
    }

    function Ld(a, b) {
        (a =
            ia(a)) && a.ih(b)
    }

    function Yd(a, b, f, k) {
        void 0 === k && (k = "headers");
        a = a || {};
        b = b || a.url;
        a[k] = a[k] || {};
        f = f || a.actionId;
        var p;
        if (!(p = !a[k] || !zi())) {
            if (p = !H(b)) p = !(Hj && b && (Hj.test(b) || Hj.test(Vb(b))));
            p = !p
        }
        if (p) return a;
        var z = !(!Ai || !b || !Ai.test(b) && !Ai.test(Vb(b)));
        var K = "";
        p = xa(f);
        if (z) {
            K = Ma(f);
            z = a;
            var da = K,
                ua = k,
                ib = [],
                fb = Wh(),
                Db = Uh(fb).replace("-", "-2D");
            ib.push('sn="v_4_srv_'.concat(Db, "_sn_").concat(Bh(fb), '"'));
            da && ib.push('pc="'.concat(da, '"'));
            ib.push('v="'.concat(cj(), '"'));
            ib.push('app="'.concat(Lc("app"),
                '"'));
            (da = aa("dtAdk")) && ib.push('adk="'.concat(da, '"'));
            ib = ib.join(", ");
            da = Qb("mhl") - ib.length - 6;
            ib += ', r="'.concat(Xa(ub(p), Math.max(da, 0)), '"');
            Gb(z, "x-dtc", ib, ua)
        }
        if (lc(b)) return a;
        z = Ib("dpch");
        f && (z || (ua = a, f = K || Ma(f), K = k, f && (ec(ua, "x-dtpc", f, K), S() && (ec(ua, "x-dtreferer", ub(tb()), K), ec(ua, "x-host", ca(b), K)))), p && p !== tb() && ec(a, "x-dtreferer", ub(p), k));
        g(b) && !z && ec(a, "x-dtpc", "ignore", k);
        return a
    }

    function af(a) {
        a = te(a);
        if (!a) return null;
        try {
            return new RegExp(a, "i")
        } catch (b) {}
        return null
    }

    function Qf() {
        Ai =
            af(Lc("chw"));
        Hj = af(Lc("xhb"));
        R("CONFIG_UPDATE", function() {
            Ai = af(Lc("chw"));
            Hj = af(Lc("xhb"))
        })
    }

    function Sd() {
        var a = Ed;
        return a ? a.name : ""
    }

    function bf(a) {
        for (var b = 0, f = se.Ba; b < f.length; b++) f[b].qf = a.detail
    }

    function td(a) {
        var b;
        return null === (b = Kc(a)) || void 0 === b ? void 0 : b.Uf()
    }

    function Ie() {
        var a = document,
            b = a.documentElement,
            f = 0,
            k = 0,
            p = a.body;
        "number" === typeof self.innerWidth ? (f = self.innerWidth, k = self.innerHeight) : a && (b.clientWidth || b.clientHeight) ? (f = b.clientWidth, k = b.clientHeight) : p && (p.clientWidth ||
            p.clientHeight) && (f = p.clientWidth, k = p.clientHeight);
        if (0 > f || 0 > k) a = 0, ng.ie ? a = 140 : a = 10, f = Math.max(f, a), k = Math.max(k, 10);
        Y().bwsW = f;
        Y().bwsH = k
    }

    function ge() {
        var a = Y();
        R("LOAD_END", Ie);
        nf(function(b, f, k, p) {
            if (!f) {
                f = function(ua) {
                    return 0 > ua || 2147483647 <= ua || isNaN(ua) ? 0 : ua
                };
                k = a.bwsW;
                var z = a.bwsH,
                    K = cf();
                Ka(K) && (k = K.bwsW, z = K.bwsH);
                0 >= k && (Ie(), k = a.bwsW, z = a.bwsH);
                k = f(k);
                K = f(z);
                var da = z = 0;
                b.av(p, "w", k);
                b.av(p, "h", K);
                if (k = Eb.screen) z = f(k.width), da = f(k.height), b.av(p, "sw", z), b.av(p, "sh", da)
            }
        })
    }

    function eg() {
        var a =
            0,
            b = 0,
            f = 0,
            k = "Info",
            p = [];
        Ib("coo") && Ib("cooO") ? (a++, p.push({
            severity: "Info",
            text: "Opt-in mode is active, but dtrum.enable() has been called.",
            type: "cooeaoa"
        })) : Ib("coo") && (k = "Warning", b++, p.push({
            severity: "Warning",
            text: "Opt-in mode is active. Call dtrum.enable() to start collecting data.",
            type: "cooe"
        }));
        if (D()) {
            b++;
            k = "Warning";
            var z = Y().disabledReason,
                K = "Agent for application '".concat(Lc("app"), "' is currently disabled because of ");
            p.push({
                severity: "Warning",
                text: "".concat(K).concat(z || "a missing RUM License or RUM was disabled for this application",
                    "."),
                type: "jsad"
            })
        }
        Ib("dsss") && (b++, k = "Warning", p.push({
            severity: "Warning",
            text: "DISABLE_SUBDOMAIN_SOURCEACTION_SUPPORT is set.",
            type: "sssd"
        }));
        a: {
            z = Lc("featureHash");K = 0;
            for (var da = "7degijmovx".split(""); K < da.length; K++)
                if (-1 !== z.indexOf(da[K])) {
                    z = !1;
                    break a
                }
            z = !0
        }
        z && (b++, k = "Warning", p.push({
            severity: "Warning",
            text: "No module(that could detect a XHR) is active!",
            type: "nxma"
        }));
        Ga() && (b++, k = "Warning", p.push({
            severity: "Warning",
            text: "Should not track is set on this browser and respected by the RUM monitoring code!",
            type: "snt"
        }));
        if (z = Lc("doNotDetect")) z = Lc("featureHash"), z = !z.includes("a") && !z.includes("l");
        z && (b++, k = "Warning", p.push({
            severity: "Warning",
            text: "Do not detect values are configured & neither module 'a' nor 'l' are active. This can result in missing user actions!",
            type: "dnt"
        }));
        Ib("ssc") && "https:" !== location.protocol && (f++, k = "Error", p.push({
            severity: "Error",
            text: "Secure cookies are enabled, but can't be set as the page isn't using https.",
            type: "scbip"
        }));
        return 0 < p.length ? (a = [Je(f, "Error"), Je(b,
            "Warning"), Je(a, "Info")], [{
            severity: k,
            text: "".concat(a.join(""), "regarding agent configuration."),
            type: "ci",
            children: p
        }]) : null
    }

    function Je(a, b) {
        return a ? "".concat(a, " ").concat(b).concat(1 < a ? "s" : "", " ") : ""
    }

    function Rf() {
        R("DEBUG_INFO_REQUESTED", eg);
        nf(function(a, b, f, k) {
            Ib("ssc") && "https:" !== location.protocol && a.av(k, "sconsp", 1)
        })
    }

    function fg() {
        return Lc("rpid") ? "automatically" : "manually"
    }

    function Mh() {
        wk = void 0;
        wb(document.currentScript) && (Bi = document.currentScript);
        R("DEBUG_INFO_REQUESTED", function() {
            wk ||
                (wk = Bi ? Bi.src ? Bi.dataset.dtconfig ? "OneAgent JavaScripTag ".concat(fg(), " injected") : Bi.src.includes("_complete") ? "JavaScriptTag ".concat(fg(), " injected") : Bi.getAttribute("defer") ? "CodeSnippetDeferred ".concat(fg(), " injected") : "CodeSnippetSync ".concat(fg(), " injected") : Bi.dataset.dtconfig ? "InlineCode ".concat(fg(), " injected") : "Couldn't detect injection mode." : "Couldn't detect injection mode.");
            return [{
                severity: "Info",
                text: wk,
                type: "im"
            }]
        })
    }

    function lh(a) {
        switch (a) {
            case 1:
                if ((a = document.currentScript) &&
                    wb(a)) {
                    a: {
                        var b, f;
                        if (document.documentElement && (a = document.documentElement.outerHTML.split(a.outerHTML), 2 === a.length)) {
                            a = (null === (f = null === (b = a[0]) || void 0 === b ? void 0 : b.split("\n")) || void 0 === f ? void 0 : f.length) + 1;
                            break a
                        }
                        a = void 0
                    }
                    return "Agent is double injected! Is it manually and automatic injected? Current used agent is near: ".concat(document.location, ":").concat(a)
                }
                return "Agent is double injected! Is it manually and automatic injected?";
            case 2:
                return "Problem detected while agent initialization! Snippet couldn't initialize so can't initialize monitoring code";
            case 3:
                return "Problem detected while agent initialization! Snippet couldn't initialize as initConfig didn't initialize.";
            default:
                return ""
        }
    }

    function Nh() {
        R("DEBUG_INFO_REQUESTED", function() {
            return 0 !== Y().di ? [{
                severity: "Error",
                text: lh(Y().di),
                type: "di"
            }] : null
        });
        nf(function(a, b, f, k) {
            0 === Y().di || b || a.av(k, "di", Y().di)
        })
    }

    function Kg() {
        var a;
        return za((a = {}, a.kind = "DEBUG_INFO_REQUESTED", a.detail = void 0, a)).flat()
    }

    function gg() {
        nf(function() {
            if (!sg.disableCookieManager) {
                var a = Wh();
                if (!a || -1 === a.indexOf("_srv_-")) try {
                    if (Eb.sessionStorage) {
                        var b =
                            a,
                            f = dj(fh()) || "";
                        Vf(f) || (f = "");
                        if (f && "null" !== f && b !== f) {
                            var k = wh(f).sessionId || "";
                            if ("undefined" !== typeof b && "" !== b) {
                                if ((f = b) && k) {
                                    var p = f,
                                        z = p.indexOf("_sn_");
                                    if (-1 !== z) {
                                        var K = p.indexOf("_", z + 4),
                                            da = -1 !== K ? p.substring(z, K) : p.substring(z);
                                        da && (p = p.replace(da, "_sn_" + k))
                                    }
                                    f = p
                                }
                                var ua = f
                            } else ua = f;
                            b = ua
                        }
                        if (a = b) ie(a), Ch(fh(), a)
                    }
                } catch (ib) {}
            }
        })
    }

    function hg(a) {
        R("ACTION_ENTERED", function k(f) {
            a.dtWF = k;
            f = f.detail;
            var p = f.i;
            a(p, f.a, f.r === p, f.e)
        })
    }

    function ad(a) {
        R("ACTION_LEFT", function k(f) {
            a.dtWF = k;
            f = f.detail;
            var p = f.i;
            a(p, f.s, f.r === p)
        })
    }

    function Zd(a, b) {
        Fa.push(a);
        0 === b ? nc() : nc(2E3)
    }

    function Cd(a, b, f, k, p) {
        void 0 === f && (f = !1);
        void 0 === k && (k = ic());
        void 0 === p && (p = 0);
        var z = b;
        if (1 === p && "_csprv_" === a) {
            if (0 !== Pc) {
                z = Ic;
                var K = z.timestamp,
                    da = z.group,
                    ua = z.trigger;
                b.push(["tvn", z.name]);
                b.push(["tvt", K + ""]);
                b.push(["tvtrg", ua + ""]);
                b.push(["tvm", cd(z)]);
                da && b.push(["tvg", da])
            }
            z = b
        }
        a = {
            id: rh(),
            timestamp: k,
            kind: a,
            Yb: z
        };
        switch (Cb(f)) {
            case 1:
                (f = Ed) ? f.Id(a): Zd(a, p);
                break;
            case 2:
                (f = Kc(f)) ? f.Id(a): Zd(a, p);
                break;
            case 0:
                Zd(a,
                    p)
        }
    }

    function Sf(a, b) {
        return a ? {
            oldView: a,
            newView: b
        } : {
            newView: b
        }
    }

    function Ke(a, b) {
        void 0 === b && (b = Qb("vncm"));
        var f = document.createElement("a");
        f.href = a;
        a = f.hash;
        f = f.pathname;
        "/" !== f.charAt(0) && (f = "/" + f);
        0 === b ? b = f + a : 2 === b ? (b = a || "/", "#" === b.charAt(0) && (b = b.replace("#", "")), "/" !== b.charAt(0) && (b = "/" + b)) : b = f;
        return b
    }

    function lf(a, b) {
        a.name = b.name;
        b.group && (a.group = b.group);
        a.hydrated = !0
    }

    function Lg(a) {
        var b = [],
            f = a.name,
            k = a.timestamp,
            p = a.group,
            z = a.trigger;
        f && k && (b.push(["svn", f]), b.push(["svt", k + ""]),
            b.push(["svtrg", z + ""]), b.push(["svm", cd(a)]));
        p && b.push(["svg", p]);
        return b
    }

    function he(a) {
        var b = [],
            f = a.oldView,
            k = a.newView;
        f && b.push.apply(b, Lg(f));
        f = k.group;
        var p = k.trigger;
        b.push(["tvn", k.name]);
        b.push(["tvtrg", p + ""]);
        b.push(["tvm", cd(k)]);
        f && b.push(["tvg", f]);
        b.length && Cd("_view_", b, !1, a.newView.timestamp || void 0, 1)
    }

    function Mg(a) {
        Cf ? he(a.detail) : pe(a.detail)
    }

    function xf(a) {
        a.detail.i === Bf && (a = $d, a.length && (gb(a, he), $d = []), ra("ACTION_SENT", xf))
    }

    function re() {
        je = Ic = Ia(Ia({}, Ic), {
            id: ++Vd,
            timestamp: ic(),
            kind: 2,
            hydrated: !1
        });
        he({
            newView: Ic
        })
    }

    function yf() {
        Ef(Eb, "pageshow", function(a) {
            var b;
            "persisted" in a && a.persisted && za((b = {}, b.kind = "BF_CACHE_RESTORED", b.detail = void 0, b))
        })
    }

    function Le(a, b) {
        void 0 === b && (b = Qb("dvl"));
        var f;
        return function() {
            for (var k = this, p = [], z = 0; z < arguments.length; z++) p[z] = arguments[z];
            void 0 !== f && ch(f);
            f = Ub(function() {
                a.apply(k, p)
            }, b)
        }
    }

    function Me() {
        if (1 === Pc) {
            var a = Ic,
                b = Ke(tb());
            a = a.name;
            if (a + "/" === b) a = !1;
            else {
                var f = document.createElement("a"),
                    k = document.createElement("a");
                f.href =
                    a;
                k.href = b;
                a = f.pathname !== k.pathname || !document.getElementById(k.hash.substring(1)) && f.hash !== k.hash
            }
            a && mh({
                name: b
            })
        }
    }

    function Yg() {
        var a, b = Ic,
            f = je;
        b.id !== f.id && (za((a = {}, a.kind = "VIEW_STABLE", a.detail = Sf(f, b), a)), je = b)
    }

    function mh(a) {
        var b, f = Ic,
            k = Ia,
            p = Ia,
            z = Qb("rtu"),
            K = Ia({}, a);
        K.name = Xa(a.name, z, !0);
        a.group && (K.group = Xa(a.group, z, !0));
        Ic = a = k(p({}, K), {
            timestamp: ic(),
            id: ++Vd,
            kind: 1,
            trigger: Pc,
            hydrated: !1
        });
        0 < ud && Tf.push(a);
        za((b = {}, b.kind = "VIEW_CHANGE", b.detail = Sf(f, Ic), b));
        ol()
    }

    function Ng(a) {
        var b,
            f, k, p = null === (b = null === a || void 0 === a ? void 0 : a.detail) || void 0 === b ? void 0 : b.oldView;
        p && (a = null === (k = null === (f = null === a || void 0 === a ? void 0 : a.detail) || void 0 === f ? void 0 : f.newView) || void 0 === k ? void 0 : k.timestamp, Zg(p, 0, a))
    }

    function Zg(a, b, f) {
        var k, p = za((k = {}, k.kind = "VIEW_END", k.detail = {
            view: a,
            xh: 1 === b
        }, k)).flat();
        0 !== p.length && (a = db(db([], p, !0), Lg(a), !0), Cd("_viewend_", a, !1, f, 1))
    }

    function $g(a) {
        var b = History.prototype[a];
        b && (History.prototype[a] = function() {
            for (var f = [], k = 0; k < arguments.length; k++) f[k] =
                arguments[k];
            k = Hm.dtAWF(b, this, f);
            var p, z;
            za((p = {}, p.kind = "HISTORY_API_EVENT", p.detail = (z = {}, z.t = a, z.p = f, z), p));
            return k
        })
    }

    function Oh(a, b, f, k) {
        if (!b) {
            b = Ic;
            f = b.timestamp;
            var p = b.group,
                z = b.trigger;
            a.av(k, "tvn", encodeURIComponent(W(b.name)));
            a.av(k, "tvt", f + "");
            a.av(k, "tvm", encodeURIComponent(cd(b)));
            a.av(k, "tvtrg", z + "");
            p && a.av(k, "tvg", encodeURIComponent(W(p)))
        }
    }

    function si() {
        Ij || (Ij = document.createElement("doc:rdy"));
        if (Ij.doScroll) {
            var a = function() {
                try {
                    Ij.doScroll("left"), Ij = void 0, Gf = ic(), Be()
                } catch (b) {
                    Ub(a,
                        0)
                }
            };
            a()
        } else document.addEventListener("DOMContentLoaded", function() {
            Gf = ic();
            Be()
        }, !1)
    }

    function zf() {
        return Jj
    }

    function nh() {
        var a = Ac,
            b = Xe(Eb.performance);
        if (!b) return Math.round(a);
        var f = Lf(b) ? 6E4 >= b.domContentLoadedEventStart : 6E4 >= Math.abs(b.domLoading - a);
        if (!Y().syn && !f) return a;
        f = wd();
        var k = b.redirectStart,
            p = b.fetchStart;
        b = (Lf(b) ? 0 : f) + 6E4;
        b = k ? b > k ? f : k : p ? b > p ? f : p : f;
        isFinite(b) && (a = b);
        return Math.round(a)
    }

    function Md() {
        var a = sf(Eb.performance, "loadEventEnd", !0),
            b = ic();
        return Math.round(a || b)
    }

    function ig(a,
        b) {
        var f;
        $h--;
        if (ai && b) {
            var k = (ai.get(b) || 1) - 1;
            k ? ai.set(b, k) : ai.delete(b)
        }
        if (!$h && bi) try {
            za((f = {}, f.kind = "LOAD_END", f.detail = void 0, f))
        } catch (p) {}
        0 >= $h && (bi && (b = bi.id, am = rf(), a = a ? Math.max(Md(), a) : Md(), f = sf(Eb.performance, "loadEventStart", !0) || wd(), f = f < Af ? 0 : Math.round(f), a && f && a >= f ? (k = ic() - a, 5E3 < Math.abs(k) && (a += k), ee(b, a, f)) : ee(b), bi = null), Dh || Og());
        b = cf();
        b !== Y() && Ka(b) && b.sole()
    }

    function Ne(a) {
        $h++;
        if (ai && a) {
            var b = ai.get(a) || 0;
            ai.set(a, b + 1)
        }
    }

    function Og(a, b) {
        var f = Kc(Bf);
        if (f) {
            var k = 0;
            Eb.performance &&
                !a && (k = b || Md());
            k || (k = ic());
            ee(f.id, k);
            Jj = f.stop;
            Be()
        }
    }

    function Pg() {
        Og(1)
    }

    function ah() {
        Dh = !0
    }

    function jg() {
        var a = Kc(Bf);
        a && !bi && (bi = Id({
            name: "_onload_",
            type: "_load_",
            start: ic(),
            ya: a.id
        }))
    }

    function kg() {
        if (!Ci || 0 < $h) Ci = !0, Be(), ig()
    }

    function Ph() {
        Be();
        if (!ej) {
            var a = cf(),
                b = Ka(a) && a !== Y();
            b && a.iolm(Eb);
            jg();
            ej = !0;
            R("PAGE_LEAVING", function k() {
                bi && b && a.sole(void 0, Eb);
                ra("PAGE_LEAVING", k)
            });
            Ub(kg, 0)
        }
    }

    function Jg() {
        "loaded" === document.readyState && Be();
        "complete" === document.readyState && Ph()
    }

    function xk() {
        Be();
        ej || ("complete" === document.readyState ? pl ? t(!1, !0) : (pl = !0, Ub(xk, 3E3)) : Ub(xk, 3E3))
    }

    function bm() {
        var a;
        Zg(Ic, 1);
        var b = za((a = {}, a.kind = "PAGE_END", a.detail = void 0, a)).flat();
        0 !== b.length && (a = db(db([], b, !0), [
            ["url", Kj]
        ], !1), Cd("_pageend_", a, !1, void 0, 1));
        fj(0);
        Da()
    }

    function cm() {
        fj(1)
    }

    function ql() {
        Lj = Sg = !1;
        Mj(!1);
        t(!1, !0, !0);
        dd = !1
    }

    function yk(a) {
        var b = wi.Ue(!1, !0, !0);
        b.beacon && (t(!1, !0, !0, b), 1 === a && (Lj = !0))
    }

    function fj(a) {
        var b;
        if (Sg && !dd) yk(a);
        else {
            var f = ic();
            1 === a && (Sg = !0, Ub(function() {
                    Ub(ql, 2E3)
                },
                1));
            za((b = {}, b.kind = "PAGE_LEAVING", b.detail = Sg, b));
            zk && Lj || Ec(1 === a, Ed, f);
            yk(a);
            dd = !1
        }
    }

    function rl(a, b) {
        if (Cf || isNaN(a) || 100 > a || 1E3 < a) return !1;
        Eh = {
            responseCode: a,
            message: b + ""
        };
        return !0
    }

    function Ak() {
        return zk
    }

    function Mj(a, b) {
        zk = a;
        ch(gj);
        b && (gj = Ub(function() {
            zk = !1
        }, 2E3))
    }

    function Bk() {
        function a(b) {
            Bf === b.detail.i && ra("ACTION_CLOSED", a)
        }
        Eb.doNotCreateLoadAction || (Bf = Id({
            name: "_load_",
            type: "_load_",
            start: Af,
            id: md() || rh()
        }).id, Be(), Jg());
        R("ACTION_CLOSED", a)
    }

    function Fh(a, b, f, k) {
        var p;
        void 0 === f && (f = !1);
        var z = (p = {}, p.msg = "", p.file = "", p.line = -1, p.column = -1, p.error = a, p.stackContainsWrapper = f, p);
        "number" === typeof b && (z.parentActionId = b);
        k && (z.source = k);
        Nj(z)
    }

    function ci(a, b, f, k) {
        a[b] && gh(f, "" + a[b], k)
    }

    function Nj(a) {
        var b, f = a.error,
            k = a.msg;
        if (!(!k && !f || Oj + 1 > Qb("mepp"))) {
            Oj++;
            "string" === typeof f ? k = a.msg || f : f = f || Eb.event || {
                message: "",
                name: ""
            };
            var p = Ia(Ia({}, a), (b = {}, b.msg = k, b.error = f, b));
            b = Pd();
            var z;
            b && (z = {
                name: b.Pb(),
                type: b.type
            });
            f = p.error;
            "string" === typeof f && (f = {});
            var K = f.columnNumber || 0,
                da =
                p.msg,
                ua = p.file,
                ib = p.column,
                fb = p.line;
            k = p.source;
            b = {};
            b.message = f.message || f.name || f.rj || f.description || da || f.errorMessage || f.fi || f.data || f.pi || "Indeterminable error name";
            b.file = f.fileName || f.filename || f.sourceURL || f.Ii || f.file || ua || "";
            b.line = f.lineNumber || f.lineno || f.line || f.Ki || fb || -1;
            b.column = (f.columnNumber ? K + 1 : void 0) || f.Ji || f.colno || f.column || ib || -1;
            if (!(K = Di(f))) a: {
                try {
                    throw Error("");
                } catch (Db) {
                    if ((K = Di(Db)) && 3 < K.split(/\r\n|\r|\n/).length) {
                        K = "<generated>\n" + K;
                        break a
                    }
                }
                K = ""
            }
            z = (b.stack = K,
                b.userInput = z, b.code = f.tj || f.code || f.errorCode || f.status, b.timestamp = ic() - Ac, b.debugInfo = "", b.type = f.name || "Error", b.source = k || "1", b);
            "Indeterminable error name" === z.message && (b = Hf("msg", p.msg), b += Hf("file", p.file), b += Hf("line", p.line), b += Hf("column", p.column), b += Hf("error", p.error), z.debugInfo = b);
            z.stack && p.stackContainsWrapper && (z.stack = "<wrapper>" + z.stack);
            if (z.stack) {
                if (1200 < z.stack.length) {
                    p = "";
                    b = 0;
                    for (f = z.stack.split(/(\r\n|\n|\r)/gm); b < f.length && !(k = f[b].trim(), K = k.length, 0 < K && (p = 250 < K ? p + (k.substring(0,
                            150) + "[...]" + k.substring(K - 100) + "\n") : p + (k + "\n")), 1200 < p.length); b++);
                    z.stack = p
                }
                z.stack = z.stack.replace(RegExp("\\|", "g"), "^p").replace(/(\r\n|\n|\r)/gm, "|")
            }
            500 < z.message.length && (z.message = z.message.substring(0, 500));
            p = z.file;
            b = z.stack;
            f = Lc("csu");
            p && b && -1 === b.indexOf(f) && -1 !== p.indexOf(f) && (z.incompleteStack = 1200 < b.length ? "stringLength" : "numLines");
            5011 !== z.code && (p = a.parentActionId, a = ic(), a = Ye({
                type: "_error_",
                name: Ab(z.message),
                start: a,
                qb: !0
            }), p = Ge(a, p), a && (ci(z, "type", "_type_", a), z.file && (b =
                z.file, 0 <= z.line && (b += "|" + z.line), 0 <= z.column && (b += "|" + z.column), gh("_location_", b, a)), (b = z.incompleteStack) && gh("_istack_", b, a), ci(z, "stack", "_stack_", a), ci(z, "code", "_code_", a), ci(z, "timestamp", "_ts_", a), ci(z, "debugInfo", "_debug_", a), z.userInput && gh("_useraction_", z.userInput.type + "|" + z.userInput.name, a), ci(z, "source", "_source_", a), p && nc()))
        }
    }

    function Di(a) {
        return a ? a.stack || a.oi || a.Lj || a.error && a.error.stack || "" : ""
    }

    function gh(a, b, f) {
        var k = ic();
        a = Ye({
            type: a,
            name: Ab(b),
            start: k,
            qb: !0
        });
        Ge(a, f.id, !0)
    }

    function Hf(a, b) {
        a = a + "|" + (typeof b + "|");
        if (null === b) a += "null|";
        else if ("object" === typeof b)
            for (var f in b) {
                if (v(b, f) && "stack" !== f && "error" !== f) {
                    var k = f;
                    a += f + "|";
                    var p = typeof b[k];
                    a += p + "|";
                    "object" !== p && "function" !== p && (a += b[k] + "|")
                }
            } else a += b + "|";
        return a
    }

    function di(a, b, f) {
        var k = ic();
        a = Ab(a);
        b = Ye({
            type: b,
            name: a,
            start: k,
            stop: k,
            qb: !0,
            domNodes: -1
        });
        f = Ge(b, f);
        eb(Zh);
        f && nc();
        return f
    }

    function sl() {
        Y().syn || (di("visit end", "_endVisit_", -1) ? Pj(!1, "a") : ei())
    }

    function pc(a, b) {
        Oj > Qb("mepp") || (Oj++, di(a,
            "_error_", b))
    }

    function dm(a, b) {
        di(a, "_warning_", b)
    }

    function tl(a, b) {
        di(a, "_log_", b)
    }

    function Ck(a, b, f) {
        var k = ic();
        a = Ye({
            type: "_rs_",
            name: fc(a + "=" + b),
            start: k,
            qb: !0
        });
        Ge(a, f);
        nc()
    }

    function hj(a, b) {
        switch (a) {
            case "_uaps_":
                if ("string" !== typeof b) {
                    a = "value [".concat(b, "] is not a valid short string, because it is of type ").concat(typeof b, ".");
                    break
                } else a = "value is not of type 'string'. Make sure to pass in a string.";
                (b = b.length) || (a = "value is not a valid short string because it is empty.");
                var f = Qb("mpl");
                b > f && (a = "value is ".concat(b, " characters long, which is longer than the maximum of ").concat(f, " characters"));
                break;
            case "_uapl_":
                a = "value [".concat(b, "] is not a valid java long.");
                break;
            case "_uapdt_":
                a = "value [".concat(b, "] is not a valid date.");
                break;
            case "_uapdbl_":
                a = "value [".concat(b, "] is not a valid java double.");
                break;
            default:
                a = "value [".concat(b, "] is not of a supported type. Has type of ").concat(typeof b, ".")
        }
        return a
    }

    function Dk(a, b) {
        return {
            failedProperties: a.Kc(),
            sentProperties: a.ne(),
            info: "Number of total failed properties: ".concat(b)
        }
    }

    function em(a) {
        return !("number" !== typeof a || isNaN(a) || 0 !== a % 1 || 0x7fffffffffffffff < a || -0x7fffffffffffffff > a)
    }

    function Ek(a) {
        return !("number" !== typeof a || isNaN(a) || 1.7976931348623157E308 < a || -1.7976931348623157E308 > a)
    }

    function ij(a) {
        return "string" === typeof a && 0 !== O(a).length && a.length <= Qb("mpl")
    }

    function Ei(a) {
        return !!a && "[object Date]" === Object.prototype.toString.call(a)
    }

    function Fi(a, b, f, k, p) {
        b && "object" === typeof b && jj({
                data: b,
                type: "_uapl_"
            }, em,
            a);
        f && "object" === typeof f && jj({
            data: f,
            type: "_uapdt_"
        }, Ei, a);
        k && "object" === typeof k && jj({
            data: k,
            type: "_uaps_"
        }, ij, a);
        p && "object" === typeof p && jj({
            data: p,
            type: "_uapdbl_"
        }, Ek, a)
    }

    function jj(a, b, f) {
        var k = a.data,
            p = Ga(),
            z;
        for (z in k) {
            var K;
            if (K = v(k, z)) K = z, K = 0 < O(K).length && 50 >= K.length;
            if (K) {
                K = p;
                var da = k[z];
                null !== da && "object" === typeof da && v(da, "value") && (K = K && !da["public"], da = da.value);
                b(da) ? (K ? da = "dT_pv" : "_uapdt_" === a.type && Ei(da) && (da = da.getTime()), f.gf(a.type, z, da)) : f.ee(a.type, z, da)
            }
        }
    }

    function Te(a) {
        a =
            a ? Object.keys(a) : [];
        if (0 === a.length) return !1;
        for (var b = 0; b < a.length; b++)
            if (0 > Im.indexOf(a[b])) return !1;
        return !0
    }

    function Wf(a) {
        return ob(ac(na(a), function(b) {
            b = a[b];
            return !!(b && 0 < b.size)
        }), function(b) {
            var f = [];
            a[b].forEach(function(k, p) {
                f.push("".concat(p, ",").concat(k))
            });
            return "".concat(b, "=").concat(f.join(";"))
        }).join(";")
    }

    function yb(a, b, f, k, p) {
        a = new Gi(a);
        Te(b) ? Fi(a, b.jj, b.Fi, b.Ij, b.ij) : Fi(a, b, f, k, p);
        return a.rg()
    }

    function sb(a) {
        vg[a] ? vg[a]++ : vg[a] = 1
    }

    function ed() {
        Ib("ds") && (vg = {}, nf(function(a,
            b, f, k) {
            if (Ib("ds")) {
                f = "";
                for (p in vg) v(vg, p) && (f += "".concat(f ? "|" : "").concat(p, "-").concat(vg[p]));
                var p = f;
                !b && Cf && p && (a.av(k, "ds", p, !1), vg = {})
            }
        }))
    }

    function ul(a, b, f, k) {
        if (fi || kj.length) kj.length && a.av(k, "fsp", encodeURIComponent(kj.join(",")), !0), fi && a.av(k, "sp", encodeURIComponent(Wf(fi)), !0), fi = void 0, kj = []
    }

    function Fk(a, b, f, k) {
        var p = new Gk;
        fi || (fi = {});
        Te(a) ? p.Jd(fi, a) : p.Jd(fi, {
            javaLong: a,
            date: b,
            shortString: f,
            javaDouble: k
        });
        kj.push.apply(kj, p.xg());
        a = Dk(p, Gk.Eb);
        b = p.Kc();
        if (b.length)
            for (f = 0; f < b.length; f++) k =
                b[f], Hk = "Property key [" + k.key + "] was not accepted because: " + k.reason, Eb.console.log(Hk);
        (p.Ag() || b.length) && nc();
        return a
    }

    function Qj() {
        return Hk ? [{
            severity: "Info",
            text: Hk + "(Note: only last errorMessage gets reported!)",
            type: "wsp"
        }] : null
    }

    function gi(a, b) {
        if (Pc !== b) return -2;
        if (3 === b && !Cf) {
            var f;
            lf(Ic, a);
            lf(je, a);
            a = Sf(null === (f = sh) || void 0 === f ? void 0 : f.sa, Ic);
            pe(a);
            return 2
        }
        f = Ic;
        if (1 === a.id && 1 === f.id && 1 === $d.length) return lf($d[0].newView, a), lf(Ic, a), lf(je, a), 2;
        if (f.name === a.name) return -1;
        mh(a);
        return 1
    }

    function wg(a) {
        var b = +a;
        return a && !isNaN(b) && 11359836E5 < b && 41338908E5 > b ? b : ic()
    }

    function fd(a) {
        return "function" === typeof a
    }

    function Bc(a, b) {
        return typeof a === b
    }

    function nd(a, b) {
        return Bc(a, b) || "undefined" === typeof a || null === a
    }

    function ef(a) {
        Eb.console.log(a)
    }

    function Qc(a, b, f) {
        ef("".concat(a, ' "').concat(b, '" is deprecated! ').concat(f))
    }

    function Yb() {
        ef("Wrong argument types in method. Please check the documentation to fix that")
    }

    function zc() {
        ef("Too many arguments. Please check the documentation to fix that")
    }

    function hi() {
        ef("No action was found with provided action id argument.")
    }

    function Rj() {
        return wi.Ec()
    }

    function Ik(a, b, f, k) {
        void 0 === b && (b = !1);
        void 0 === f && (f = !1);
        vl(a, (null === k || void 0 === k ? void 0 : k.contentType) || "");
        return t(!1, !0, b, {
            referrer: tb(),
            beacon: a
        }, f, k)
    }

    function wl(a) {
        Jk.push(a)
    }

    function vl(a, b) {
        gb(Jk, function(f) {
            f(a, b)
        })
    }

    function xl(a, b) {
        Sj && (Sj && !xg && (lj.observe(document, Kk), xg = !0), yg[a] || (yg[a] = [], Tj = Object.keys(yg), Uj[a] = b))
    }

    function yl(a) {
        Sj && (yg[a] && (delete yg[a], delete Uj[a]), Tj = Object.keys(yg),
            0 === Tj.length && lj && xg && (lj.disconnect(), xg = !1))
    }

    function zl(a, b) {
        if (!ii) return null;
        mj[a] || (mj[a] = new ii(b));
        return mj[a]
    }

    function zg(a) {
        Sj && mj[a] && (mj[a].disconnect(), delete mj[a])
    }

    function If(a) {
        return yg[a] ? yg[a] : []
    }

    function Vj(a, b) {
        yg[a] = b
    }

    function Al() {
        Kk = {
            childList: !0,
            subtree: !0
        };
        ii && (lj = new ii(function(a) {
            for (var b = ic(), f = [], k = 0; k < a.length; k++) {
                var p = a[k];
                "childList" === p.type && f.push.apply(f, p.addedNodes)
            }
            if (f.length)
                for (a = {
                        time: b,
                        nodes: f
                    }, b = 0, f = Tj; b < f.length; b++) k = f[b], p = Uj[k], "function" ===
                    typeof p && p(k, a), yg[k].push(a)
        }))
    }

    function Wj(a) {
        var b = Ed;
        return b && b.ic < Qb("tal") && b.fb + a <= Qb("tt") ? (b = Ha(!1), a = {
            name: "".concat("setTimeout(..., ").concat(a, ")"),
            type: "_t_",
            start: ic(),
            lf: a,
            ya: b || !0
        }, Id(a).id) : 0
    }

    function Lk(a) {
        if (a = Kc(a)) a.Cc(), Ub(function() {
            Qd();
            uc(yc(), !0)
        }, 0)
    }

    function Tg(a) {
        var b = Kc(a);
        b && (b.th(), e++, h.push(a), uc(b))
    }

    function Mk(a) {
        var b = Kc(a);
        b && (e--, Ub(function() {
            sa(a);
            b.mg();
            uc(yc(), !0)
        }, 0))
    }

    function nj(a, b) {
        return cc(970, a || "XHR Error", b)
    }

    function oj(a) {
        return cc(971, "XHR Canceled",
            a)
    }

    function Nk(a) {
        return cc(972, "XHR Timeout", a)
    }

    function Bl(a, b) {
        var f = 0 === a.time ? 0 : b - a.time;
        a.total += f;
        a.time = b;
        return a.Be = f
    }

    function fm(a, b) {
        void 0 === b && (b = ic());
        var f = Ok[a];
        void 0 === f && (f = Ok[a] = {
            time: b,
            total: 0,
            Be: 0
        });
        return Bl(f, b)
    }

    function gm(a, b) {
        void 0 === b && (b = ic());
        a = Ok[a];
        if (void 0 === a) return 0;
        Bl(a, b);
        a.time = 0;
        return a.Be
    }

    function pj(a) {
        a = Ok[a];
        return void 0 === a ? 0 : a.total
    }

    function dc(a, b, f) {
        if (!a || !b) return -1;
        if (a.findIndex) return a.findIndex(b, f);
        for (var k = 0; k < a.length; k++)
            if (b.call(f,
                    a[k], k, a)) return k;
        return -1
    }

    function hm(a) {
        var b = a.getAttribute("class"),
            f = 100 - a.tagName.length;
        if (!b) return "";
        b = b.trim().replace(/ +/g, ".");
        if (b.length <= f) return b;
        a = ac(b.split("."), function(k) {
            return k.length < f
        });
        for (b = a.join("."); b.length > f && a.length;) a.pop(), b = a.join(".");
        return b
    }

    function Gh(a, b) {
        if (a.id && 100 >= a.id.length) return b.unshift("#".concat(a.id)), !0;
        var f = a.nodeName.toLowerCase();
        b.unshift(f);
        var k = hm(a);
        if (k && (f += ".".concat(k), b[0] = f, hh(b))) return !0;
        k = a;
        for (var p = 1; k;) k = k.previousElementSibling,
            (null === k || void 0 === k ? void 0 : k.nodeName) === a.nodeName && p++;
        f += ":nth-of-type(".concat(p, ")");
        b[0] = f;
        if (hh(b)) return !0;
        k = a.previousElementSibling;
        for (p = 1; k;) k = k.previousElementSibling, ++p;
        f = f.replace(/:nth-of-type\(\d+\)/, 1 < p ? ":nth-child(".concat(p, ")") : ":first-child");
        b[0] = f;
        return hh(b)
    }

    function hh(a) {
        return 1 === document.querySelectorAll(a.join(">") || "").length
    }

    function ji(a) {
        if (!a || !dh(a, 8) || !document.querySelectorAll) return "";
        try {
            for (var b = a, f = []; b && 100 >= f.join(">").length && !Gh(b, f);) b = b.parentElement;
            var k = f.join(">");
            if (100 < k.length) {
                var p = a.getAttribute("class"),
                    z = a.tagName.toLowerCase();
                if (p) var K = "..." + Xa("".concat(z, ".").concat(p), 100 - z.length - 3, !1, "");
                else {
                    var da = a.id;
                    K = da ? "..." + Xa("#".concat(da), 97, !1, "") : ""
                }
                var ua = K || Xa(k, 100, !0)
            } else ua = k;
            return ua
        } catch (ib) {}
        return ""
    }

    function qj(a, b) {
        try {
            if (3 !== Pc && ("__vue__" === b || "__vue_app__" === b) && Ib("usrvd") && 2 !== Pc) {
                var f, k, p, z;
                var K = (null === (p = null === (k = null === (f = a.__vue_app__) || void 0 === f ? void 0 : f.config) || void 0 === k ? void 0 : k.globalProperties) ||
                    void 0 === p ? void 0 : p.$router) || (null === (z = a.__vue__) || void 0 === z ? void 0 : z.$router);
                if (K) {
                    var da = "function" === typeof K.afterEach;
                    var ua = K.currentRoute && da ? !0 : !1
                } else ua = !1;
                if (ua) {
                    var ib, fb;
                    if (ib = (null === (fb = K.matcher) || void 0 === fb ? void 0 : fb.match) || K.resolve) {
                        var Db, Sb, Mb, $b = null !== (Mb = null !== (Db = K.options.base) && void 0 !== Db ? Db : null === (Sb = K.options.history) || void 0 === Sb ? void 0 : Sb.base) && void 0 !== Mb ? Mb : "",
                            vc = K.options.mode;
                        $b || "hash" !== vc || ($b = "#");
                        var Jc = $b;
                        a = $d;
                        for (b = 0; b < a.length; b++) {
                            var ld = a[b];
                            ld.oldView && lf(ld.oldView, Xj(ld.oldView, ib, Jc));
                            lf(ld.newView, Xj(ld.newView, ib, Jc))
                        }
                        ld = Ic;
                        a = je;
                        lf(ld, Xj(ld, ib, Jc));
                        lf(a, Xj(a, ib, Jc))
                    }
                    K.afterEach(Yj);
                    pd(2)
                }
            }
        } catch (df) {
            pd(1)
        }
    }

    function Yj(a) {
        2 === Pc && gi(ih(a), 2)
    }

    function ih(a) {
        var b = a.matched;
        a = a.path;
        return b.length ? {
            group: b[b.length - 1].path,
            name: a
        } : {
            name: a
        }
    }

    function Xj(a, b, f) {
        var k = a.name.indexOf(f),
            p = a.name;
        p === f ? p = "/" : -1 !== k && (p = p.substring(k + f.length));
        a = Ia(Ia({}, a), {
            name: p
        });
        return Ia(Ia({}, a), ih(b(a.name)))
    }

    function im(a) {
        void 0 === rj && (rj = Qb("prfSmpl") >
            Math.floor(1E4 * Math.random()));
        rj && (0 > of && ( of = Qb("msl"), Hb.dT_.si(function() {
            sj()
        }, 3E4), Ef(Eb, "beforeunload", function() {
            sj(!0)
        })), Cl.push(a))
    }

    function Dl(a) {
        var b = "";
        gb(a.d, function(f) {
            b += "".concat(f[0]).concat("=").concat(f[1]).concat("|")
        });
        return "".concat(a.i).concat("|").concat(a.t).concat("|").concat(b.slice(0, -1))
    }

    function Hi(a, b) {
        var f = "";
        gb(na(b[1]), function(k) {
            f += "".concat(k).concat("=").concat(b[1][k]).concat("|")
        });
        return "".concat(a).concat("|").concat(b[0]).concat("|").concat(f.slice(0, -1))
    }

    function sj(a) {
        void 0 === a && (a = !1);
        gb(Cl.splice(0), function(b) {
            if (0 === b.t) {
                var f = !1;
                for (var k = b.d, p = k.length; !f && p;) f = 0 === k[--p][1]
            } else f = !1;
            f || (b.a ? jm(b) : Zj.push(Dl(b)))
        });
        Pk(a)
    }

    function jm(a) {
        var b = a.i,
            f = Ug[b];
        f ? (f[0] += a.t, gb(a.d, function(k) {
            f[1][k[0]] = void 0 !== f[1][k[0]] ? f[1][k[0]] + k[1] : k[1]
        })) : (Ug[b] = [a.t, {}], gb(a.d, function(k) {
            Ug[b][1][k[0]] = k[1]
        }))
    }

    function Pk(a) {
        void 0 === a && (a = !1);
        gb(na(Ug), function(f) {
            Zj.push(Hi(f, Ug[f]))
        });
        var b = "";
        gb(Zj, function(f, k, p) {
            if (b.length + 1 + f.length >= of ) {
                Qk(b,
                    a);
                b = "";
                if (k === p.length - 1) {
                    Qk("".concat(Ii).concat(f), a);
                    return
                }
                b = "".concat(Ii).concat(f)
            } else b ? b = b + "," + f : b = "".concat(Ii).concat(f);
            b.length && k === p.length - 1 && Qk(b, a)
        });
        Zj = [];
        Ug = {}
    }

    function Qk(a, b) {
        var f;
        void 0 === b && (b = !1);
        var k = Rj();
        wi.ar(k, a);
        Ik(k, b, !1, (f = {}, f.contentType = "perf", f))
    }

    function Xf(a) {
        if (Object.values) return Object.values(a);
        var b = [];
        if (a === Object(a))
            for (var f in a) v(a, f) && b.push(a[f]);
        return b
    }

    function Rk() {
        ki = Ag.connection;
        Ib("eni") && ki && nf(function(a, b, f, k) {
            !b && Cf && ki && (b = "".concat(ki.effectiveType ||
                "-", "|").concat(ki.downlink || -1), ki.type && (b = "".concat(b, "|").concat(ki.type)), a.av(k, "ni", b, !1))
        })
    }

    function Sk(a) {
        return "longtask" === (null === a || void 0 === a ? void 0 : a.entryType) && 50 < a.duration
    }

    function Tk(a) {
        Ji.push({
            startTime: a.startTime,
            duration: a.duration
        })
    }

    function Yf() {
        try {
            ak = new PerformanceObserver(function(a) {
                gb(ac(a.getEntries(), Sk), Tk)
            }), ak.observe({
                type: "longtask",
                buffered: !0
            })
        } catch (a) {}
    }

    function Zf() {
        Hh = Ih = 0;
        Ki = Li = -5E3;
        bk = [];
        if (Ib("cls") && ue.cls) try {
            (new PerformanceObserver(function(a) {
                a =
                    a.getEntries();
                for (var b = 0; b < a.length; b++) {
                    var f = a[b];
                    if ("layout-shift" === (null === f || void 0 === f ? void 0 : f.entryType) && !f.hadRecentInput) {
                        var k = f.startTime;
                        if (0 === Bg) {
                            if (5E3 < k - Li || 1E3 < k - Ki) Li = k, Hh = 0;
                            Ki = k;
                            Hh += f.value;
                            Ih = Math.max(Ih, Hh)
                        } else 1 === Bg && bk.push({
                            startTime: k,
                            gg: f.value
                        })
                    }
                }
            })).observe({
                type: "layout-shift",
                buffered: !0
            })
        } catch (a) {}
    }

    function km() {
        ck = new Eb.PerformanceObserver(function(a) {
            a = a.getEntries();
            for (var b = 0; b < a.length; b++) {
                var f = a[b],
                    k = f.name;
                f = Math.round(f.startTime);
                "first-paint" ===
                k && (dk = f);
                "first-contentful-paint" === k && (Uk = f)
            }
        });
        try {
            ck.observe({
                type: "paint",
                buffered: !0
            })
        } catch (a) {
            ck.observe({
                entryTypes: ["paint"]
            })
        }
    }

    function Vk() {
        ek = new Eb.PerformanceObserver(function(a) {
            a = a.getEntries();
            a = a[a.length - 1];
            if (a.size > Mi) switch (Mi = a.size, Bg) {
                case 0:
                    Jm = Wk(a);
                    break;
                case 1:
                    Jh.push(Wk(a));
                    break;
                case 2:
                    Jj - Af > a.startTime && (Mi = a.size, a = Wk(a), Cd("_wv_", [
                        ["AAI", Bf + ""],
                        ["lcpE", a.Hc || "-"],
                        ["lcpSel", a.rd || "-"],
                        ["lcpS", a.size + ""],
                        ["lcpT", a.Ma + ""],
                        ["lcpU", a.url || "-"],
                        ["lcpLT", a.loadTime + ""]
                    ], !1, void 0, 1))
            }
        });
        try {
            ek.observe({
                type: "largest-contentful-paint",
                buffered: !0
            })
        } catch (a) {
            ek.observe({
                entryTypes: ["largest-contentful-paint"]
            })
        }
    }

    function Wk(a) {
        var b, f = a.startTime;
        f && (f = F(f));
        return {
            Ma: Math.round(f),
            loadTime: Math.round(a.loadTime),
            size: a.size,
            rd: ji(a.element) || "-",
            Hc: (null === (b = a.element) || void 0 === b ? void 0 : b.tagName) || "-",
            url: a.url || "-"
        }
    }

    function Xk(a) {
        var b = 0;
        for (a = a.getEntries(); b < a.length; b++) {
            var f = a[b];
            "first-input" === f.entryType && f.processingStart && f.startTime && (c = Math.round(f.startTime),
                d = Math.round(f.processingStart - f.startTime))
        }
        fk()
    }

    function fk() {
        2 === Bg && ic() < Jj + 2E4 && Cd("_wv_", [
            ["AAI", Bf + ""],
            ["fIS", c + ""],
            ["fID", d + ""]
        ], !1, void 0, 1)
    }

    function El() {
        var a, b = null === (a = Eb.PerformanceObserver) || void 0 === a ? void 0 : a.supportedEntryTypes;
        return !!b && -1 !== b.indexOf("first-input")
    }

    function Fl() {
        if (El()) try {
            (new PerformanceObserver(Xk)).observe({
                type: "first-input",
                buffered: !0
            })
        } catch (a) {} else R("GLOBAL_EVENT_FIRED", function f(b) {
            var k = b.detail;
            b = k.e.timeStamp;
            if (c || -1 === lm.indexOf(k.t) || !b) b = !1;
            else {
                k = wd();
                var p = 1E12 < b;
                p && b < k ? b = !1 : (c = Math.round(p ? b - k : b), d = Math.max(0, Math.round(gk() - c)), fk(), b = !0)
            }
            b && ra("GLOBAL_EVENT_FIRED", f)
        })
    }

    function Gl(a) {
        l = a.Jc();
        a.reset()
    }

    function mm(a, b) {
        return [
            ["inp", (void 0 === l || b.detail.xh ? a.Jc() : l) + ""]
        ]
    }

    function Hl(a) {
        return [
            ["inp", a.Jc() + ""]
        ]
    }

    function Yk(a) {
        a.detail.i === Bf && (ra("ACTION_CLOSED", Yk), Bg = 1)
    }

    function Il(a) {
        var b = a.detail,
            f = b.a;
        a = b.s;
        if (b.i === Bf) {
            ra("ACTION_BEFORE_SEND", Il);
            Bg = 2;
            b = [];
            f = a - f;
            if (Ib("pt")) {
                if (ue.lcpT) {
                    var k = Jm;
                    for (var p = Jh.length - 1; 0 <=
                        p; p--)
                        if (Jh[p].Ma < f) {
                            k = Jh[p];
                            break
                        }
                    k && 0 !== k.Ma ? k.Ma > f ? k = {
                        Ma: -6
                    } : Mi = k.size || 0 : k = {
                        Ma: -5
                    };
                    k.Hc && k.rd && k.url ? b.push(["lcpE", k.Hc], ["lcpSel", k.rd], ["lcpS", k.size + ""], ["lcpT", k.Ma + ""], ["lcpU", k.url], ["lcpLT", k.loadTime + ""]) : b.push(["lcpT", k.Ma + ""])
                } else b.push(["lcpT", "-3"]);
                ue.fcp ? b.push(["fcp", (Uk ? Uk > f ? -6 : F(Uk) : -5) + ""]) : b.push(["fcp", "-3"]);
                ue.fp ? b.push(["fp", (dk ? dk > f ? -6 : F(dk) : -5) + ""]) : b.push(["fp", "-3"])
            }
            if (Ib("cls"))
                if (ue.cls) {
                    k = b.push;
                    p = 0;
                    for (var z = bk; p < z.length; p++) {
                        var K = z[p],
                            da = K.startTime;
                        if (da <
                            f) {
                            if (5E3 < da - Li || 1E3 < da - Ki) Li = da, Hh = 0;
                            Ki = da;
                            Hh += K.gg;
                            Ih = Math.max(Ih, Hh)
                        }
                    }
                    bk = [];
                    k.call(b, ["cls", +Ih.toFixed(4) + ""])
                } else b.push(["cls", "-3"]);
            if (Ib("lt"))
                if (ue.lt) {
                    k = b.push;
                    p = 0;
                    z = wd();
                    K = 0;
                    for (da = Ji; K < da.length; K++) {
                        var ua = da[K],
                            ib = p + ua.duration > f;
                        z + ua.startTime + ua.duration <= a && !ib && (p += ua.duration)
                    }
                    null === ak || void 0 === ak ? void 0 : ak.disconnect();
                    k.call(b, ["lt", Math.round(p) + ""])
                } else b.push(["lt", "-3"]);
            0 === c && 0 === d || b.push(["fIS", c + ""], ["fID", d + ""]);
            0 < b.length && Cd("_wv_", b, Bf, Af, 1)
        }
    }

    function ff() {
        try {
            if (!Eb.dT_ ||
                !(void 0 === Eb.dialogArguments ? navigator.cookieEnabled || qa() : qa())) return !1;
            var a = Eb.dT_;
            a.initialized = !1;
            a.pageId = "";
            a.pageTitle = "";
            a.frameCount = 0;
            a.bwsW = 0;
            a.bwsH = 0;
            a.syn = !1;
            a.googleBot = !1;
            a.tp = He;
            a.gicv = U;
            a.aFU = Of;
            a.gPId = Fg;
            a.iRO = Ze;
            a.gBI = ea;
            a.iMD = P;
            a.cfg = xe;
            a.acfgP = Lh;
            a.smbi = qf;
            a.ism = Xc;
            a.iMod = Kh;
            a.gMu = me;
            a.tau = Vb;
            a.icr = lc;
            a.lv = Aa;
            a.sv = J;
            a.svl = Z;
            a.gh = ca;
            a.aesc = W;
            a.puesc = Ca;
            a.rsc = Ab;
            a.tpesc = lb;
            a.afpl = kc;
            a.apl = Gc;
            a.rpl = Mc;
            a.dbg = mb;
            a.dbc = Rb;
            a.dlf = Hc;
            a.loc = tb;
            a.sch = Yd;
            a.gNTO = Ad;
            a.vAT = F;
            a.cVIn = pa;
            a.sNT =
                Ga;
            a.gPAH = Ma;
            a.id = D;
            a.ss = Fc;
            a.ssP = Fk;
            a.asl = rc;
            a.sMPS = nc;
            a.gBP = Xg;
            a.cB = Rj;
            a.sB = Ik;
            a.ea = Wg;
            a.la = dg;
            a.lx = ta;
            a.dlx = E;
            a.ex = q;
            a.ec = Kb;
            a.lc = Ob;
            a.eV = sl;
            a.pe = pc;
            a.pw = dm;
            a.pl = tl;
            a.rs = Ck;
            a.pcn = di;
            a.ca = Nd;
            a.can = Sd;
            a.isci = Qa;
            a.ti = Be;
            a.las = Sc;
            a.gca = ze;
            a.gAR = xa;
            a.gAA = ia;
            a.sxbe = g;
            a.aWF = Zk.dtAWF;
            a.mx = Vc;
            a.mxf = cc;
            a.mxg = nj;
            a.mxc = oj;
            a.mxt = Nk;
            a.gITAID = G;
            a.re = Nj;
            a.rex = Fh;
            a.bi = Tc;
            a.ei = L;
            a.gci = Pd;
            a.gpi = Bd;
            a.cii = n;
            a.pii = x;
            a.gcv = de;
            a.aad = ka;
            a.sole = ig;
            a.iolm = Ne;
            a.solb = jg;
            a.slem = ah;
            a.lst = Na;
            a.sle = Pg;
            a.gLEELF = tf;
            a.gNNTV = sf;
            a.gLAet =
                zf;
            a.iSAC = Ak;
            a.sSAC = Mj;
            a.lAID = La;
            a.maep = rl;
            a.snt = yd;
            a.aO = zl;
            a.rO = zg;
            a.aMO = xl;
            a.rMO = yl;
            a.gMN = If;
            a.sMN = Vj;
            a.eta = Wj;
            a.lta = Lk;
            a.etc = Tg;
            a.ltc = Mk;
            a.cia = kf;
            a.wst = fm;
            a.wsp = gm;
            a.wtt = pj;
            a.rpm = im;
            a.sasl = wl;
            a.dnrui = Va;
            a.aFr = ac;
            a.fE = gb;
            a.aM = ob;
            a.aAP = yb;
            a.aAPY = Nf;
            a.iBt = Ja;
            a.cAE = Cd;
            a.addE = R;
            a.remE = ra;
            a.disE = za;
            a.red = Nc;
            a.cUIRO = y;
            a.aAWC = td;
            a.gXACT = $e;
            a.uaxu = wf;
            a.gaxu = Pf;
            a.last = ye;
            a.aFI = dc;
            a.aur = Za;
            a.oK = na;
            a.oHOP = v;
            a.oV = Xf;
            a.gdi = Kg;
            a.ssmbi = Yc;
            a.gecsss = ji;
            a.fEP = gc;
            a.iVRA = qj;
            a.sNV = gi;
            a.sVDM = pd;
            a.gVDM = jd;
            a.fP = Oc;
            a.iNF =
                Xb;
            a.aAPy = Ba;
            a.uabmr = Ld;
            a.cbf = qd;
            a.asyncCoreVersion = "10295240705110949";
            a.gRT = xd;
            var b = Y();
            Ub = b.st;
            ic = b.nw;
            Qe = b.sC;
            uh = b.gC;
            Ce = b.esc;
            Ni = b.cLSCK;
            Dj = b.gPC;
            Xi = b.sPC;
            Vf = b.iVSC;
            wh = b.p3SC;
            Wh = b.gSC;
            ie = b.sSC;
            bh = b.gVI;
            vk = b.cPC;
            dj = b.gSSV;
            Ch = b.sSSV;
            Uh = b.gSId;
            li = b.pCfg;
            tj = b.pCSAA;
            uj = b.cFHFAU;
            mc = b.sCD;
            Ib = b.bcv;
            Qb = b.ncv;
            Lc = b.scv;
            vj = b.stcv;
            De = b.rplC;
            nf = b.aBPSL;
            ui = b.gBPSL;
            $f = b.gBPSCC;
            Re = b.gFId;
            Rh = b.oEIEWA;
            mi = b.iNV;
            cj = b.gVID;
            wj = b.gARnVF;
            Zh = b.cAUV;
            ei = b.sVIdUP;
            Bh = b.gDtc;
            Oi = b.cfgO;
            mg = b.version;
            Fj = b.rBPSL;
            zh = b.aNVL;
            Pi =
                b.dPV;
            Qi = b.ePV;
            ni = b.eA;
            Ri = b.dA;
            hk = b.iXB;
            te = b.de;
            jh = b.aRI;
            bj = b.gXBR;
            ve = b.cCL;
            gk = b.rnw;
            wd = b.gto;
            Se = b.iEC;
            ch = b.ct;
            Ef = b.ael;
            Pj = b.gNVIdN;
            xj = b.gxwp;
            oi = b.prm;
            Si = b.gidi;
            Yi = b.iDCV;
            og = b.gCF;
            dh = b.iIO;
            hc = b.gPSMB;
            zi = b.iAEPOO;
            Sh = b.lvl;
            ba(b);
            b.version = ab();
            Td = oi();
            var f = navigator.userAgent;
            a = {
                ie: NaN,
                edge: NaN,
                ec: NaN,
                ff: NaN,
                ch: NaN,
                sf: NaN,
                msf: NaN,
                ab: NaN,
                op: NaN
            };
            try {
                b = /Firefox[\/\s](\d+\.\d+)/;
                var k = /(iPod|iPhone|iPad)/,
                    p = /AppleWebKit/;
                if (0 <= f.indexOf("MSIE")) {
                    var z = f.lastIndexOf("MSIE") + 5;
                    a.ie = parseInt(f.substring(z,
                        z + 3))
                } else if (0 <= f.indexOf("Trident")) {
                    if (0 <= f.indexOf("rv:")) {
                        var K = f.lastIndexOf("rv:") + 3;
                        var da = parseInt(f.substring(K, K + 2))
                    } else 0 <= f.indexOf("rv ") ? (K = f.lastIndexOf("rv ") + 3, da = parseInt(f.substring(K, K + 2))) : da = NaN;
                    a.ie = da
                } else if (0 <= f.indexOf("Edge")) {
                    var ua = f.lastIndexOf("Edge") + 5;
                    a.edge = parseInt(f.substring(ua, ua + 2))
                } else if (0 <= f.indexOf("Edg/")) {
                    var ib = f.lastIndexOf("Edg/") + 4;
                    a.ec = parseInt(f.substring(ib, ib + 2))
                } else if (b.test(f)) {
                    var fb = parseInt((f.match(b) || [])[1]);
                    a.ff = -1 === fb ? 0 : fb
                } else if (0 <=
                    f.indexOf("Android")) {
                    var Db = f.indexOf("Android") + 8;
                    a.ab = parseFloat(f.substring(Db, Db + 3))
                } else if (f.match(k) && f.match(p)) a.msf = parseFloat((f.match(/(?:OS |Version\/)([0-9]+)(?:[_.][0-9])*/) || [])[1]);
                else if (("Safari" === navigator.appName || -1 < f.indexOf("Safari")) && -1 === f.indexOf("Chrom")) {
                    var Sb = f.substring(f.lastIndexOf("Version/")).match(/Version\/([0-9]+(\.[0-9]*)?)/);
                    a.sf = Sb ? parseInt(Sb[1]) : NaN
                } else if (Eb.opera) a.op = parseInt(Eb.opera.version().split(".")[0]);
                else if (0 <= f.indexOf("OPR/")) a.op = parseInt((f.match(/OPR\/([0-9]*\.[0-9]*)/) || [])[1]);
                else {
                    var Mb;
                    var $b = +(null === (Mb = /Chrome\/([0-9]{1,4})/.exec(f)) || void 0 === Mb ? NaN : Mb[1]) || NaN;
                    a.ch = $b
                }
            } catch (an) {}
            ng = a;
            Y().syn = 0 < f.indexOf("RuxitSynthetic");
            Y().googleBot = 0 <= f.indexOf("Googlebot");
            var vc, Jc = Eb.dT_,
                ld = ab();
            ld !== Jc.version && (null === (vc = Eb.console) || void 0 === vc ? void 0 : vc.log("WARNING: Snippet version [" + Jc.version + "] and monitoring code [" + ld + "] versions do not match! Please update your code snippet to ensure compatibility."));
            Jc.version = "10295240705110949";
            Ac = Jc.agentStartTime ||
                Jc.gAST();
            if (!Jc || Jc.initialized) return !1;
            f = 0;
            for (var df = na(qh); f < df.length; f++) qh[df[f]] = [];
            $a();
            Fd();
            sg = Oi ? Oi() : Y().cfg;
            sg.initializedModules = "";
            hk(sg);
            Ve();
            df = 0;
            ng.sf ? df = 100 : ng.msf && (df = 1E3);
            Gj = df;
            se = {
                actions: {},
                Ba: []
            };
            rh = od;
            qg = 1;
            Km = 0;
            gd = [];
            ae = [];
            Ed = null;
            sc(null, !0);
            Rg = [];
            Qf();
            Dd = 0;
            R("VISIBILITY_CHANGED", bf);
            ha = oe(tb());
            zd();
            R("CONFIG_UPDATE", zd);
            pk = {};
            Df = cf();
            rg = Uf = void 0;
            ll = 0;
            ml = !0;
            Ib("imm") && P() || (X("click", "C", "clk"), X("mousedown", "D", "mdw"), X("mouseup", "U", "mup"));
            X("dblclick", "CC", "dcl");
            X("keydown", "KD", "kyd");
            X("keyup", "KU", "kyu");
            X("scroll", "S", "scr");
            X("touchstart", "TS", "tcs");
            X("touchend", "TE", "tce");
            X("change", "H", "chg");
            if (Lc("ade")) {
                var mf = Lc("ade").split(",");
                if (mf && 0 < mf.length)
                    for (df = 0; df < mf.length; df++) X(mf[df])
            }
            Jj = 0;
            a: {
                var $k = document.getElementsByTagName("meta"),
                    Lm = Qb("mrt");
                for (mf = 0; mf < $k.length; mf++) {
                    var ik = $k[mf],
                        nm = ik.getAttribute("http-equiv");
                    if (nm && "refresh" === nm.toLowerCase()) {
                        var om = ik.getAttribute("content");
                        if (parseInt((om && om.split(";") || [])[0]) <= Lm) {
                            var jk = !0;
                            break a
                        }
                    }
                }
                jk = !1
            }
            jk && Ne();
            "undefined" !== typeof WeakMap && (ai = new WeakMap);
            var al = document.location,
                Mm = cf();
            al && Ka(Mm) && Mm.aFU(al.href);
            var yj = Lc("rid");
            if (!yj || "RID_" === yj) {
                $k = vj;
                var zj = Lc("ridPath"),
                    Jl = zj ? zj : Eb.location.pathname,
                    kh = Eb.location.search;
                kh && kh.length && "?" === kh.charAt(0) && (kh = kh.substring(1));
                zj = kh;
                var ke = 31 + I(Jl);
                ke = 31 * ke + I(zj);
                $k("rid", "RID_" + (ke & ke))
            }
            Ef(Eb, "beforeunload", cm);
            Ef(Eb, "pagehide", bm);
            Ef(document, "readystatechange", Jg);
            Ub(xk, 3E3);
            Ef(Eb, "load", Ph);
            Af = nh();
            jk = !jk;
            var pi =
                cf();
            if (Ka(pi)) {
                var Aj = pi.sSAC;
                Aj && Aj(!1);
                var be = (Ib("dsss") ? Aa(Ff()) : decodeURIComponent(og(Ff()))).split("|");
                if (12 === be.length) {
                    var kk = Ib("dsss"),
                        Nm = Ib("dssv");
                    Aj = "";
                    !kk && Nm ? Aj = Aa(Ff(), !0) : kk && !Nm && (Aj = decodeURIComponent(og(Ff())));
                    var bl = Aj.split("|");
                    if (4 === bl.length) {
                        var Kl = bl[1],
                            we = bl[2],
                            Om = bl[3];
                        be.push(bl[0]);
                        be.push(Kl);
                        be.push(we || "");
                        be.push(Om)
                    }
                }
                var cl = be.join("|");
                jk && xb("-");
                if (cl && "-" !== cl) {
                    var le = cl.split("|");
                    if (16 === le.length || 12 === le.length) {
                        var dl = parseInt(le[5]);
                        be = Af - dl;
                        if (-10 <
                            be && 6E4 >= be) {
                            be = {
                                id: -1,
                                kind: -1,
                                hydrated: !1,
                                trigger: -1
                            };
                            kk = 0;
                            for (var lk = Ca(le[15]).split(";"); kk < lk.length; kk++) {
                                var Ll = lk[kk],
                                    Ml = Ll.substring(1);
                                switch (Ll.charAt(0)) {
                                    case "i":
                                        be.id = +Ml;
                                        break;
                                    case "k":
                                        be.kind = +Ml;
                                        break;
                                    case "h":
                                        be.hydrated = !!+Ml;
                                        break;
                                    case "t":
                                        be.trigger = +Ml
                                }
                            }
                            var el = {
                                isDelayed: "true" == le[0],
                                type: le[1],
                                id: parseInt(le[2]),
                                name: le[3],
                                info: le[4],
                                startTime: dl,
                                frameId: le[6],
                                za: bb(le[7]),
                                anchor: le[10],
                                aa: le[11],
                                sa: void 0
                            };
                            16 === le.length && (el.sa = {
                                name: bb(le[12]),
                                timestamp: parseInt(le[13]),
                                group: bb(le[14]),
                                trigger: be.trigger,
                                kind: be.kind,
                                hydrated: be.hydrated,
                                id: be.id
                            });
                            le = !1;
                            Y() !== pi && (le = pi.iRO(el.za));
                            !document.referrer || el.za === document.referrer || el.za === document.location.href || le ? sh = el : xb(cl)
                        } else xb("-")
                    }
                }
            }
            try {
                pd(1);
                je = Ic = {
                    id: ++Vd,
                    name: Ke(tb()),
                    timestamp: Af,
                    kind: 0,
                    trigger: Pc,
                    hydrated: !1
                };
                yf();
                var Nl, fl = null === (Nl = sh) || void 0 === Nl ? void 0 : Nl.sa,
                    pm = Sf(fl, Ic);
                pe(pm);
                R("VIEW_STABLE", Mg);
                R("ACTION_ENTERED", Ue);
                R("ACTION_BEFORE_SEND", bg);
                R("ACTION_SENT", xf);
                R("BF_CACHE_RESTORED", re);
                ol = Le(Yg);
                R("HISTORY_API_EVENT", Me);
                Ef(Eb, "popstate", Me);
                Ef(Eb, "hashchange", Me);
                try {
                    $g("pushState"), $g("replaceState")
                } catch (an) {}
                nf(Oh);
                R("VIEW_STABLE", Ng);
                Kj = tb()
            } catch (an) {}
            si();
            Bk();
            ge();
            gg();
            Ig();
            Rk();
            Zi = "0";
            var gl = document.visibilityState;
            gl ? ("hidden" === gl && (Zi = "1"), Ef(document, "visibilitychange", rd)) : Zi = "2";
            Ee();
            Bg = 0;
            var Bj = !!Eb.PerformanceObserver;
            ue.cls = !(!Bj || !Eb.LayoutShift);
            ue.fcp = !(!Bj || !Eb.PerformancePaintTiming);
            ue.fp = !(!Bj || !Eb.PerformancePaintTiming);
            ue.lcpT = !(!Bj || !Eb.LargestContentfulPaint);
            ue.lt = !(!Bj || !Eb.PerformanceLongTaskTiming);
            Ib("pt") && (ue.fp && km(), ue.lcpT && Vk());
            Zf();
            Ji = [];
            Ib("lt") && ue.lt && Yf();
            Fl();
            var qm, Ol, Pl, bn = Eb.PerformanceEventTiming && "interactionId" in Eb.PerformanceEventTiming.prototype,
                Pm = null === (Pl = null === (Ol = null === (qm = Eb.PerformanceObserver) || void 0 === qm ? void 0 : qm.supportedEntryTypes) || void 0 === Ol ? void 0 : Ol.includes) || void 0 === Pl ? void 0 : Pl.call(Ol, "event");
            if (bn && Pm) {
                var Ql = Wa();
                R("VIEW_CHANGE", Gl.bind(null, Ql));
                R("VIEW_END", mm.bind(null, Ql));
                var rm = Wa();
                R("PAGE_END",
                    Hl.bind(null, rm))
            }
            R("ACTION_CLOSED", Yk);
            R("ACTION_BEFORE_SEND", Il);
            ed();
            Al();
            nf(ul);
            R("DEBUG_INFO_REQUESTED", Qj);
            Mh();
            Rf();
            R("DEBUG_INFO_REQUESTED", Si);
            Nh();
            if ("undefined" === typeof Eb.dT_) var en = !1;
            else "undefined" === typeof Eb.dtrum && (Eb.dtrum = new Rl), en = !0;
            if (!en) return !1;
            var cn = Y();
            cn.initialized = !0;
            "function" === typeof cn.initCallback && cn.initCallback()
        } catch (an) {
            return !1
        }
        return !0
    }
    var Td = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        Hb = "undefined" !== typeof window ? window : self,
        Eb = "undefined" !== typeof globalThis ?
        globalThis : "undefined" !== typeof window ? window : void 0,
        Ag = Eb.navigator,
        Cg = {
            u: "transferSize",
            v: "encodedBodySize",
            w: "decodedBodySize",
            L: "workerStart",
            M: "dtRpid",
            V: "dtSInfo",
            W: "dtTao",
            X: "responseStatus"
        },
        Xh = {
            x: "statuscode",
            y: "ip",
            A: "failedResource",
            C: "requestId",
            E: "relevance",
            F: "relevantArea",
            K: "isCritical",
            N: "vcIrrelevanceReason",
            O: "imageWidth",
            P: "imageHeight",
            Q: "imageNaturalWidth",
            R: "imageNaturalHeight",
            S: "onloadTime",
            T: "rtRequestId",
            U: "certExpDate"
        },
        pf = {
            o: "domInteractive",
            p: "domContentLoadedEventStart",
            q: "domContentLoadedEventEnd",
            r: "domComplete",
            s: "loadEventStart",
            t: "loadEventEnd"
        },
        Wd = {
            c: "redirectStart",
            d: "redirectEnd",
            e: "fetchStart",
            f: "domainLookupStart",
            g: "domainLookupEnd",
            h: "connectStart",
            i: "connectEnd",
            j: "secureConnectionStart",
            k: "requestStart",
            l: "responseStart",
            m: "responseEnd"
        },
        Yh = Ia(Ia(Ia({}, Wd), {
            n: "domLoading"
        }), pf),
        yi = Ia(Ia(Ia({}, Wd), pf), Cg),
        ug = Ia(Ia(Ia({}, Wd), Cg), Xh);
    Ia(Ia(Ia({}, ug), Yh), yi);
    var hl;
    (function(a) {
        a[a.ENABLED = 0] = "ENABLED";
        a[a.DISABLED = 1] = "DISABLED";
        a[a.DELAYED = 2] = "DELAYED"
    })(hl ||
        (hl = {}));
    var il;
    (function(a) {
        a[a.BLOCKED_BY_PERCENTAGE = 0] = "BLOCKED_BY_PERCENTAGE";
        a[a.ENABLED = 1] = "ENABLED";
        a[a.BLOCKED = 2] = "BLOCKED"
    })(il || (il = {}));
    var mk;
    (function(a) {
        a[a.NONE = 1] = "NONE";
        a[a.OFF = 2] = "OFF";
        a[a.PERFORMANCE = 3] = "PERFORMANCE";
        a[a.BEHAVIOR = 4] = "BEHAVIOR"
    })(mk || (mk = {}));
    var Dg;
    (function(a) {
        a.OVERLOAD_PREVENTION = "ol";
        a.PRIVACY_STATE = "prv";
        a.SERVER_ID = "srv";
        a.SESSION_ID = "sn"
    })(Dg || (Dg = {}));
    var Cj;
    (function(a) {
        a.DYNATRACE_MOBILE = "dynatraceMobile";
        a.MOBILE_AGENT = "MobileAgent"
    })(Cj || (Cj = {}));
    var Eg;
    (function(a) {
        a[a.ARRAY = 0] = "ARRAY";
        a[a.BOOLEAN = 1] = "BOOLEAN";
        a[a.NUMBER = 2] = "NUMBER";
        a[a.STRING = 3] = "STRING";
        a[a.FUNCTION = 4] = "FUNCTION";
        a[a.OBJECT = 5] = "OBJECT";
        a[a.DATE = 6] = "DATE";
        a[a.ERROR = 7] = "ERROR";
        a[a.ELEMENT = 8] = "ELEMENT";
        a[a.HTML_ELEMENT = 9] = "HTML_ELEMENT";
        a[a.HTML_IMAGE_ELEMENT = 10] = "HTML_IMAGE_ELEMENT";
        a[a.PERFORMANCE_ENTRY = 11] = "PERFORMANCE_ENTRY";
        a[a.PERFORMANCE_TIMING = 12] = "PERFORMANCE_TIMING";
        a[a.PERFORMANCE_RESOURCE_TIMING = 13] = "PERFORMANCE_RESOURCE_TIMING";
        a[a.PERFORMANCE_NAVIGATION_TIMING = 14] =
            "PERFORMANCE_NAVIGATION_TIMING";
        a[a.CSS_RULE = 15] = "CSS_RULE";
        a[a.CSS_STYLE_SHEET = 16] = "CSS_STYLE_SHEET";
        a[a.REQUEST = 17] = "REQUEST";
        a[a.RESPONSE = 18] = "RESPONSE";
        a[a.SET = 19] = "SET";
        a[a.MAP = 20] = "MAP";
        a[a.WORKER = 21] = "WORKER";
        a[a.XML_HTTP_REQUEST = 22] = "XML_HTTP_REQUEST";
        a[a.SVG_SCRIPT_ELEMENT = 23] = "SVG_SCRIPT_ELEMENT";
        a[a.HTML_META_ELEMENT = 24] = "HTML_META_ELEMENT";
        a[a.HTML_HEAD_ELEMENT = 25] = "HTML_HEAD_ELEMENT";
        a[a.ARRAY_BUFFER = 26] = "ARRAY_BUFFER";
        a[a.SHADOW_ROOT = 27] = "SHADOW_ROOT"
    })(Eg || (Eg = {}));
    var lg = -1,
        Th = kb("dtPC"),
        fh = kb("dtCookie");
    kb("rxvt");
    kb("rxVisitor");
    kb("dTValidationCookie");
    var Ff = kb("dtSa"),
        Ej = function() {
            for (var a, b = [], f = 0; 256 > f; f++) {
                a = f;
                for (var k = 0; 8 > k; k++) a = a & 1 ? 3988292384 ^ a >>> 1 : a >>> 1;
                b[f] = a
            }
            return b
        }(),
        Qh = 0,
        Vi = Infinity,
        oh = 0,
        Oe, cf, md, Ub, ic, Qe, uh, Ce, Ni, Dj, Xi, Vf, wh, Wh, ie, bh, vk, dj, Ch, Uh, li, tj, uj, mc, Ib, Qb, Lc, vj, De, nf, ui, $f, Re, Rh, mi, cj, wj, Zh, ei, Bh, Oi, Fj, zh, Pi, Qi, ni, Ri, hk, te, jh, bj, ve, gk, wd, Se, ch, Ef, Pj, xj, oi, Si, Yi, og, dh, hc, zi, Sh, mg, Ac, dd = !1,
        Af = -1,
        Bf, tg = [],
        Sg = !1,
        Gf, Eh, xh, ng, Wl = "^><%/\\(){}[]".split(""),
        Pe = String.prototype.trim,
        bd = {
            "^": "^^",
            "|": "^p",
            ",": "^c",
            ";": "^s"
        },
        Wi = function(a) {
            var b = {},
                f;
            for (f in a) v(a, f) && (b[a[f]] = f);
            return b
        }(bd),
        ph = {},
        Uc, qh = (Uc = {}, Uc.CONFIG_UPDATE = [], Uc.ACTION_CLOSED = [], Uc.ACTION_BEACON_FORCED = [], Uc.ACTION_BEFORE_SEND = [], Uc.ACTION_SENT = [], Uc.ACTION_ENTERED = [], Uc.ACTION_LEFT = [], Uc.VIEW_CHANGE = [], Uc.VIEW_STABLE = [], Uc.DEBUG_INFO_REQUESTED = [], Uc.CSS_TRANSMISSION_STARTED = [], Uc.VISUALLY_COMPLETE = [], Uc.GLOBAL_EVENT_FIRED = [], Uc.HISTORY_API_EVENT = [], Uc.VISIBILITY_CHANGED = [], Uc.LOAD_END = [], Uc.INSTRUMENTATION_TRIGGERED = [], Uc.PAGE_LEAVING = [], Uc.HTTP_RESPONSE = [], Uc.OPT_IN_STATE_CHANGED = [], Uc.PAGE_END = [], Uc.VIEW_END = [], Uc.BF_CACHE_RESTORED = [], Uc.REQUEST_STARTED = [], Uc.REQUEST_COMPLETED = [], Uc),
        gf;
    (function(a) {
        a.ANCHOR = "A";
        a.BUTTON = "BUTTON";
        a.FORM = "FORM";
        a.I_FRAME = "IFRAME";
        a.IMAGE = "IMG";
        a.INPUT = "INPUT";
        a.LABEL = "LABEL";
        a.LINK = "LINK";
        a.OPTION = "OPTION";
        a.SCRIPT = "SCRIPT";
        a.SELECT = "SELECT";
        a.STYLE = "STYLE";
        a.TEXT_AREA = "TEXTAREA"
    })(gf || (gf = {}));
    var Cf = !1,
        Dd = 0,
        gd = [],
        ae = [],
        Ed, pg, se, qg = 1,
        rh = od,
        e =
        0,
        h = [],
        m = !0,
        r = [],
        B = [],
        V = !1,
        Fa = [],
        ha, Ya = [],
        cb = 0,
        Jb = "-",
        jc;
    (function(a) {
        a[a.LABEL = 0] = "LABEL";
        a[a.NAME = 1] = "NAME";
        a[a.OTHER = 2] = "OTHER";
        a[a.CLASS = 3] = "CLASS";
        a[a.TAG = 4] = "TAG"
    })(jc || (jc = {}));
    var Ud = 0,
        Vd = 0,
        Ic, je, $d = [],
        Pc = 0,
        ud = 0,
        Tf = [],
        Vg, Bm = (Vg = {}, Vg.name = "", Vg.type = "", Vg.validUntil = 0, Vg.start = 0, Vg.target = void 0, Vg.url = "", Vg.title = "", Vg.view = void 0, Vg),
        Uf, rg, ll, ml, Df, pk, ti = -1,
        sh = null,
        qk = [],
        qi, nk, Sl, sm, rk = (qi = {}, qi._csprv_ = (nk = {}, nk.blockedURL = qc, nk.documentURL = qc, nk.referrer = qc, nk.sourceFile = qc, nk), qi._customerror_ =
            function(a, b) {
                return "name" === a ? kd(a, b, !0, 1E3) : kd(a, b, !0, Qb("mcepsl"))
            }, qi._vc_ = (Sl = {}, Sl.VE = function(a, b) {
                return b
            }, Sl), qi._dj_ = function(a, b) {
                return b
            }, qi._wv_ = (sm = {}, sm.lcpU = qc, sm), qi),
        nl, Ti = function() {
            function a() {
                this.id = ++nl;
                this.Db = [];
                this.ve = this.Lb = !1;
                this.kc = []
            }
            a.prototype.Qf = function(b) {
                this.Db.push(b)
            };
            a.prototype.Zg = function(b) {
                for (var f = 0; f < this.Db.length; f++)
                    if (this.Db[f] === b) {
                        va(this.Db, f);
                        break
                    }
            };
            a.prototype.hb = function(b, f, k, p) {
                for (var z = 0, K = this.Db; z < K.length; z++)(0, K[z])(b, f, k, p)
            };
            a.prototype.Tf = function(b) {
                this.ld = b;
                "string" !== typeof b && (this.ve = !0)
            };
            a.prototype.Y = function(b, f, k) {
                void 0 === k && (k = !1);
                this.Lb = this.Lb || k;
                this.kc.push([b, f])
            };
            a.prototype.Wa = function(b, f, k) {
                f && this.Y(b, f, k)
            };
            a.prototype.Qb = function(b) {
                for (var f = 0, k = this.kc; f < k.length; f++) {
                    var p = k[f];
                    if (p[0] === b) return p[1]
                }
                return ""
            };
            a.prototype.nf = function() {
                for (var b = [], f = 0, k = this.kc; f < k.length; f++) {
                    var p = k[f];
                    b.push("$", p[0], "=", p[1])
                }
                return b.join("")
            };
            a.prototype.raw = function() {
                return this.kc
            };
            return a
        }(),
        Vh,
        uk, th, vi = Eb.parent,
        Xl = [],
        tk = [],
        sk = "",
        Qg = function() {
            function a() {}
            a.prototype.Ec = function() {
                return new Ti
            };
            a.prototype.Tg = function(b, f) {
                if (m) return null;
                var k = this.Ec();
                Ib("bs") && k.Y("bs", "1", !1);
                eb(Ua, this, b, f, k);
                return k.Lb ? k : null
            };
            a.prototype.Of = function(b, f, k, p) {
                k.Wa("isUnload", p ? "1" : "", !1);
                k.Wa("latC", "0", !1);
                k.Wa("app", Lc("app"), !1);
                k.Y("vi", bh(), !1);
                k.Wa("dnt", ma() ? "1" : "", !1);
                k.Y("fId", Re(), !1);
                p = ab();
                var z = mg;
                k.Y("v", p, !1);
                z !== p && k.Y("iv", z, !1);
                b || (p = cj(), this.av(k, "vID", p), this.ha(k) && mi() &&
                    this.av(k, "nV", "1"));
                !b && f && wj() && k.Y("nVAT", "1", !1);
                b = k.Wa;
                f = encodeURIComponent;
                p = tg;
                tg = [];
                b.call(k, "vcr", f(p.join(",")))
            };
            a.prototype.Xf = function(b) {
                var f = Eh;
                f && Cf && (b.Y("responseCode", f.responseCode, !1), b.Wa("responseMessage", Ce(f.message), !1), Eh = void 0)
            };
            a.prototype.Ue = function(b, f, k) {
                void 0 === b && (b = !1);
                void 0 === f && (f = !1);
                void 0 === k && (k = !1);
                if (b) {
                    var p = [];
                    for (var z = "", K = "", da = {
                            yb: 0
                        }, ua = 0, ib = gd; ua < ib.length; ua++) {
                        var fb = ib[ua];
                        var Db = fb;
                        var Sb = da;
                        if (Db.Zd(Sb.yb)) var Mb = Db = !0;
                        else Sb.yb++, Mb = Db.Zd(Sb.yb +
                            Db.zb), Mb || (Sb.yb += Db.zb), Db = !1;
                        if (!Db) {
                            z || (z = fb.Za());
                            K = fb.Za();
                            if (fb.parentFrameActionName) {
                                Db = p;
                                Sb = Db.push;
                                var $b = fb.Se;
                                $b = [0, fb.Re, W(fb.parentFrameActionName), $b].join("|");
                                Sb.call(Db, $b)
                            }
                            p.push(fb.Fc(Mb))
                        }
                    }
                    p = {
                        uc: p.join(","),
                        referer: z,
                        sourceUrl: K
                    }
                } else p = qe(f, k);
                if (z = 0 < p.uc.length) {
                    K = this.Ec();
                    K.Y("a", Ce(p.uc), !0);
                    Lc("domainOverride") && (K.Y("dO", Lc("domainOverride"), !1), vj("domainOverride", ""));
                    Ib("bs") && K.Y("bs", "1", !1);
                    b && K.Y("PV", "1", !1);
                    Y().pageId !== Re() && K.Y("pId", Y().pageId, !1);
                    uk && K.Y("pFId",
                        uk, !1);
                    K.Y("rId", Lc("rid"), !1);
                    K.Y("rpId", Lc("rpid"), !1);
                    if (!b) {
                        a: {
                            da = (ua = Eb.performance) ? ua.timing : !1;
                            if (ua && da && (ua = da.domComplete, da = da.domContentLoadedEventEnd, ua || da)) {
                                da = ua ? ua : da;
                                break a
                            }
                            da = Gf
                        }
                        da && K.Y("domR", da, !1);this.Xf(K)
                    }
                    Ha(k) && K.Y("unload", "xhr", !1);
                    eb(Ua, this, b, f, K);
                    m = !1
                } else K = this.Tg(b, f);
                K && (this.Yf(p.sourceUrl, K), this.Of(b, z, K, k));
                return {
                    beacon: K,
                    referrer: p.referer
                }
            };
            a.prototype.Yf = function(b, f) {
                var k = tb();
                f.Y("url", encodeURIComponent(k), !1);
                f.Y("title", Ce(Ab(document.title).substring(0,
                    100)), !1);
                var p = f.Qb("a");
                p = p && ("s" === p.charAt(0) || "d" === p.charAt(0));
                b && b !== k && !p && f.Y("sUrl", encodeURIComponent(b), !1)
            };
            a.prototype.av = function(b, f, k, p, z) {
                k = "function" === typeof k ? k() : k;
                "undefined" !== typeof k && null !== k && "" !== k && b.Y(f + (z ? z : ""), k, p)
            };
            a.prototype.ha = function(b) {
                return !!b.Qb("a")
            };
            a.prototype.hla = function(b) {
                return 0 <= b.Qb("a").indexOf("_load_")
            };
            a.prototype.ar = function(b, f) {
                b.Tf(f)
            };
            a.prototype.aBRL = function(b, f) {
                b.Qf(f)
            };
            a.prototype.rBRL = function(b, f) {
                b.Zg(f)
            };
            return a
        }(),
        Tl = function(a) {
            function b(f) {
                var k =
                    a.call(this) || this;
                k.status = f;
                return k
            }
            nb(b, a);
            return b
        }(Error),
        tm = function(a) {
            function b(f) {
                var k = f.message,
                    p = f.Ha,
                    z = f.yc;
                f = a.call(this, f.status) || this;
                f.message = k || "";
                f.Ha = p;
                f.yc = z;
                return f
            }
            nb(b, a);
            return b
        }(Tl),
        sg, um = [],
        Ul;
    (function(a) {
        a.ENABLED = "enabled";
        a.NAME = "name"
    })(Ul || (Ul = {}));
    var Qm;
    (function(a) {
        a.FAIL = "fail";
        a.SUCCESS = "success"
    })(Qm || (Qm = {}));
    var Rm;
    (function(a) {
        a.STREAM = "application/octet-stream";
        a.TEXT = "text/plain;charset=UTF-8"
    })(Rm || (Rm = {}));
    var vm = function() {
            function a(b) {
                this.ua =
                    b;
                this.Sd = b.sd ? "application/octet-stream" : "text/plain;charset=UTF-8"
            }
            a.prototype.send = function() {
                for (var b = this.ua.path, f = 0; f < um.length; f++)(0, um[f])(b);
                return this.td().then(this.zg.bind(this)).catch(this.yg.bind(this))
            };
            a.prototype.me = function() {
                return Xa(this.ua.eb, Qb("mhl"))
            };
            a.prototype.ef = function() {
                var b = this.ua.eb;
                return !!b && b !== tb() && !Ib("cors")
            };
            a.prototype.hb = function(b, f) {
                var k = this.ua,
                    p = k.ag,
                    z = k.bg;
                k = k.beacon;
                try {
                    k.hb(b, f, p, z)
                } catch (K) {}
            };
            a.prototype.dg = function(b) {
                if (!("object" === typeof b &&
                        b && "status" in b && dh(b, 7))) {
                    b = "object" === typeof b && b && "message" in b ? b.message : "";
                    var f;
                    if (f = this.Ha()) f = ng, f = !!(f.sf || f.msf || f.ff) && "sendBeacon" in navigator && !Ib("dsndb");
                    b = new tm({
                        status: 0,
                        message: b,
                        Ha: f,
                        yc: this.ua
                    })
                }
                return b
            };
            a.prototype.zg = function(b) {
                var f = b.body;
                b = b.status;
                this.$d("success", f || b);
                if (f) {
                    b = (null === f || void 0 === f ? void 0 : f.split("|")) || [];
                    b.splice(0, 1);
                    for (var k = 0; k < b.length; k++) {
                        var p = f,
                            z = b[k].split("="),
                            K = z[0];
                        z = z[1];
                        if (K === fh() || "sn" === K) {
                            if (p = decodeURIComponent(z), Vf(p)) {
                                ie(p);
                                p = fh();
                                try {
                                    Eb.sessionStorage.removeItem(p)
                                } catch (vc) {}
                            }
                        } else if ("name" === K) {
                            K = void 0;
                            try {
                                var da = Ni(),
                                    ua = Eb.localStorage.getItem(da),
                                    ib = Lc("cuc");
                                z = 0;
                                if (ua) {
                                    var fb = li(ua),
                                        Db = tj(fb.config || "", fb);
                                    fb.name && (Db.csu = fb.name);
                                    z = parseInt(Db.lastModification || "0")
                                }
                                var Sb = li(p),
                                    Mb = tj(Sb.config || "");
                                if (!ib || !Mb.cuc || ib === Mb.cuc) {
                                    Mb.csu = Sb.name || Lc("csu");
                                    var $b = parseInt(Mb.lastModification || "0");
                                    $b > z && (Eb.localStorage.setItem(da, p), uj(Mb), mc(Mb, !0), hk(Mb), jh(Mb), $b > +(sg.lastModification || 0) && (sg = De(Mb), za((K = {}, K.kind = "CONFIG_UPDATE", K.detail = sg, K))))
                                }
                            } catch (vc) {}
                        } else "enabled" === K && "false" === z && N("Cost Control")
                    }
                }
            };
            a.prototype.$d = function(b, f) {
                for (var k = 0, p = $f(); k < p.length; k++)(0, p[k])(this.ua.beacon, b, f)
            };
            a.prototype.yg = function(b) {
                b = this.dg(b);
                100 <= r.length || r.push(b);
                this.$d("fail", b.status);
                if (429 === b.status) {
                    var f = 0;
                    for (b = gd; f < b.length; f++) b[f].Xc();
                    N("Overload Prevention");
                    return Td.resolve()
                }
                if (!Sg) try {
                    f = Ni(), Eb.localStorage.removeItem(f)
                } catch (k) {}
                return b.Ha ? Td.reject(b) : Td.resolve()
            };
            return a
        }(),
        dn = Eb.fetch,
        Yl = function(a) {
            function b(f) {
                var k, p = a.call(this, f) || this;
                f = f.xc;
                var z = (k = {}, k["Content-Type"] = p.Sd, k);
                p.ef() && (z["x-dtreferer"] = p.me());
                p.Xe = {
                    method: "POST",
                    credentials: "same-origin",
                    headers: z,
                    body: f,
                    keepalive: "string" === typeof f && 65536 > f.length
                };
                p.Cg();
                return p
            }
            nb(b, a);
            b.prototype.Cg = function() {
                var f = Qb("xt");
                if (f) {
                    var k = new AbortController;
                    Hb.dT_.st(k.abort.bind(k), f);
                    this.Xe.signal = k.signal
                }
            };
            b.prototype.td = function() {
                try {
                    return dn(this.ua.path, this.Xe).then(this.vg.bind(this))
                } catch (f) {
                    return Td.reject(f)
                }
            };
            b.prototype.vg = function(f) {
                this.hb(XMLHttpRequest.DONE, f.status);
                if (!f.ok || 200 !== f.status) throw new Tl(f.status);
                return f.text().then(function(k) {
                    return {
                        body: k,
                        status: f.status
                    }
                })
            };
            b.prototype.Ha = function() {
                return !0
            };
            return b
        }(vm),
        Cm = function(a) {
            function b(f) {
                return a.call(this, f) || this
            }
            nb(b, a);
            b.prototype.td = function() {
                var f = this.ua,
                    k = f.path;
                f = f.xc;
                var p = !1;
                try {
                    p = navigator.sendBeacon(k, f || "")
                } catch (z) {}
                if (!p) return this.hb(XMLHttpRequest.DONE, 0), Td.reject(new Tl(0));
                this.hb(XMLHttpRequest.DONE, 200);
                return Td.resolve({
                    status: 200,
                    body: void 0
                })
            };
            b.prototype.Ha = function() {
                return !1
            };
            return b
        }(vm),
        Dm = function(a) {
            function b(f) {
                f = a.call(this, f) || this;
                var k = Qb("xt");
                if (!k) return f;
                f.nc.timeout = k;
                f.nc.ontimeout = f.Kf.bind(f);
                return f
            }
            nb(b, a);
            b.prototype.Kf = function() {
                try {
                    this.nc.abort()
                } catch (f) {}
            };
            b.prototype.Ha = function() {
                return !0
            };
            return b
        }(function(a) {
            function b(f) {
                f = a.call(this, f) || this;
                f.nc = xj();
                return f
            }
            nb(b, a);
            b.prototype.td = function() {
                var f = this.ua,
                    k = f.path,
                    p = f.xc,
                    z = this;
                return new Td(function(K,
                    da) {
                    var ua = z.nc;
                    ua.open("POST", k, !0);
                    ua.setRequestHeader("Content-Type", z.Sd);
                    z.ef() && ua.setRequestHeader("x-dtreferer", z.me());
                    ua.addEventListener("readystatechange", function() {
                        z.hb(ua.readyState, ua.status);
                        ua.readyState === XMLHttpRequest.DONE && (200 === ua.status ? K({
                            body: ua.responseText,
                            status: ua.status
                        }) : da(new tm({
                            status: ua.status,
                            Ha: !0,
                            yc: z.ua
                        })))
                    });
                    ua.send(p)
                })
            };
            return b
        }(vm)),
        vh = !1,
        Zl, yh, wi, xi, Ah, Gm = {
            eg: Qd
        },
        Zi, Km = 0,
        Sm;
    (function(a) {
        a.INITIATOR_TYPE = "initiatorType";
        a.START_TIME = "startTime"
    })(Sm ||
        (Sm = {}));
    var $i = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming,
        Wm = "function" === typeof PerformanceNavigationTiming || "object" === typeof PerformanceNavigationTiming,
        Zm = "function" === typeof PerformanceTiming || "object" === typeof PerformanceTiming,
        aj = {},
        Xm = Math.pow(2, -52),
        Em = ["dtRpid", "dtSInfo", "dtTao", "dtRequestID"],
        $l = {
            unknown: 0,
            xmlhttprequest: 1,
            fetch: 2,
            beacon: 3,
            iframe: 4,
            frame: 5,
            subdocument: 6,
            img: 7,
            image: 8,
            css: 9,
            svg: 10,
            link: 11,
            script: 12,
            input: 13,
            body: 14,
            object: 15,
            embed: 16,
            source: 17,
            audio: 18,
            video: 19,
            track: 20,
            eventsource: 21,
            other: 22,
            icon: 23
        },
        Ym = {
            navigate: 0,
            reload: 1,
            back_forward: 2,
            prerender: 3
        },
        Fm = !1,
        am, wm = ["_warning_", "_error_", "_log_", "_rs_"],
        eh = function() {
            function a(b, f, k, p, z, K, da, ua, ib, fb, Db, Sb, Mb, $b, vc, Jc, ld, df, mf) {
                void 0 === Mb && (Mb = {
                    readyState: -1,
                    status: -1
                });
                void 0 === $b && ($b = -1);
                void 0 === mf && (mf = rh());
                this.start = b;
                this.stop = f;
                this.type = k;
                this.name = p;
                this.info = z;
                this.domNodes = K;
                this.eb = da;
                this.title = ua;
                this.isCustomAction = fb;
                this.bb = Db;
                this.xd = Mb;
                this.aa =
                    vc;
                this.Mf = Jc;
                this.Tc = df;
                this.id = mf;
                this.depth = 1;
                this.fb = this.ic = 0;
                this.oa = -1;
                this.fd = this.zb = 0;
                this.Ta = -1;
                this.jb = "";
                this.subActions = [];
                this.Md = [];
                this.Yb = [];
                this.errors = [];
                this.status = 0;
                this.mc = [];
                this.childFrameActions = 0;
                this.Uc = !1;
                this.Oa = this.Ea = 0;
                this.B = !1;
                this.Xb = 0;
                this.xhrUrl = "";
                this.ke = !1;
                this.cf(ib);
                this.qf = Zi;
                this.Da(f);
                this.status = Sb ? 3 : 0;
                this.La = 0 <= $b;
                this.fb = Math.max($b, 0);
                ld && (this.sa = ld)
            }
            a.prototype.Za = function() {
                return this.parent ? this.parent.Za() : this.eb
            };
            a.prototype.Ja = function() {
                return this.parent ?
                    this.parent.Ja() : this.id
            };
            a.prototype.Da = function(b) {
                this.ke || (this.stop = b, Dd = Math.max(Dd, this.stop))
            };
            a.prototype.je = function() {
                this.ke = !0
            };
            a.prototype.Kd = function(b, f) {
                void 0 === f && (f = !1);
                (3 !== this.status || f) && b && b.name && (b.depth = this.depth + 1, this.subActions.push(b), b.Pc() && (this.Xb++, this.te(1)), b.parent = this, b.La || this.Kb(), b.fb += this.fb, b.ic = this.ic + +b.La)
            };
            a.prototype.ye = function() {
                return 3 === this.status && !this.Sc()
            };
            a.prototype.close = function(b, f, k, p) {
                var z, K;
                void 0 === p && (p = !1);
                this.domNodes =
                    document.getElementsByTagName("*").length;
                this.start = f || this.start;
                f = !1;
                var da = this.start,
                    ua = this.stop,
                    ib = this.id,
                    fb = this.Xb;
                b && (this.Da(Math.max(b, da, ua)), k && (f = !0));
                if (fb) return this.status = 1, !1;
                if (3 === this.status) return !1;
                this.status = 3;
                za((z = {}, z.kind = "ACTION_CLOSED", z.detail = (K = {}, K.s = ua, K.a = da, K.r = this.Ja(), K.i = ib, K.f = p, K.t = this.type, K.x = this.xhrUrl, K.dne = f, K.rt = void 0, K.cs = this.Ea, K.ce = this.Oa, K.xe = this.Ta, K.xm = this.jb, K["in"] = this.info, K), z));
                return !0
            };
            a.prototype.Vd = function() {
                this.zb--;
                this.parent &&
                    this.parent.Vd()
            };
            a.prototype.Cc = function(b, f, k, p) {
                var z = this;
                void 0 === p && (p = !1);
                if (this.close(b, f, k, p)) {
                    var K = this.parent;
                    if (K) {
                        K.Xb--;
                        this.Rc() || K.Vd();
                        var da = K.stop;
                        K.Da(Math.max(this.stop, da));
                        Ub(function() {
                            z.fg(K, da)
                        }, 0);
                        1 === K.status && K.Cc(b)
                    }
                }
            };
            a.prototype.fg = function(b, f) {
                this.La && (ch(this.oa), b.stop === this.stop && (b.stop = f), b.$g(this), delete se.actions[this.id])
            };
            a.prototype.Zd = function(b) {
                return b + 1 > Qb("moa") && !this.Rc()
            };
            a.prototype.og = function() {
                var b = this.zc || xd(this.xhrUrl, "fetch" === this.info ?
                    "fetch" : "xmlhttprequest", this.start, 3 === this.status ? this.stop : 0);
                return Gd(b) ? b : null
            };
            a.prototype.hh = function() {
                var b = this.og();
                if (!b || 0 >= b.startTime) return [];
                Gd(b) && (b.rtRequestId = --Km, this.pd = b);
                var f = ["b", wd() + Math.round(b.startTime)];
                yd(b, f, b.startTime);
                return f
            };
            a.prototype.Ke = function() {
                for (var b, f, k = this.start, p = this.stop, z = this.id, K = 0, da = this.subActions; K < da.length; K++) da[K].Ke();
                za((b = {}, b.kind = "ACTION_BEFORE_SEND", b.detail = (f = {}, f.s = p, f.a = k, f.i = z, f.r = this.Ja(), f), b))
            };
            a.prototype.Yc = function(b) {
                for (var f,
                        k, p = this.start, z = this.stop, K = this.id, da = this.type, ua = this.xhrUrl, ib = this.Ea, fb = this.Oa, Db = this.jb, Sb = this.Ta, Mb = this.pd, $b = 0, vc = this.subActions; $b < vc.length; $b++) vc[$b].Yc(b);
                za((f = {}, f.kind = "ACTION_SENT", f.detail = (k = {}, k.s = z, k.a = p, k.r = this.Ja(), k.i = K, k.f = b, k.t = da, k.x = ua, k.rt = Mb, k.cs = ib, k.ce = fb, k.xm = Db, k.xe = Sb, k["in"] = this.info, k), f));
                ch(this.oa);
                delete se.actions[this.id];
                this.B = !0
            };
            a.prototype.Xc = function() {
                this.qh = !0;
                gb(this.subActions, function(b) {
                    b.Xc()
                })
            };
            a.prototype.Sc = function() {
                return !!this.mc.length
            };
            a.prototype.Bg = function() {
                this.Sa = this.start + 1E4;
                this.Zb = 100;
                return this
            };
            a.prototype.th = function() {
                this.wh = ic()
            };
            a.prototype.mg = function() {
                this.mf = ic()
            };
            a.prototype.Kg = function() {
                return !!this.wh && !this.mf
            };
            a.prototype.Pc = function() {
                return 1 === this.status || 0 === this.status
            };
            a.prototype.Rb = function() {
                return (this.La && 3 === this.status || this.bb && !(0 < this.fd)) && this.parent ? this.parent.Rb() : this
            };
            a.prototype.Fc = function(b) {
                var f = this.depth,
                    k = this.Md,
                    p = this.subActions;
                this.domNodes || (this.domNodes = document.getElementsByTagName("*").length);
                var z = [];
                gb(k, function(K) {
                    z.push(Xd(K, f + 1))
                });
                for (k = 0; k < p.length && !b; k++) z.push(p[k].Fc());
                z.unshift(this.Fa());
                return z.join(",")
            };
            a.prototype.Fa = function() {
                var b = this.stop,
                    f = this.start,
                    k = this.id,
                    p = this.type,
                    z = this.info,
                    K = this.status,
                    da = this.name,
                    ua = [];
                ua[0] = this.depth + "";
                ua[1] = k + "";
                ua[2] = W(da);
                ua[3] = W(p);
                ua[4] = W(z) || "-";
                ua[5] = f + "";
                ua[6] = (3 === K ? b : 0) + "";
                b = 0;
                for (f = this.ug(); b < f.length; b++)
                    if (k = f[b], p = k[1]) p = "string" === typeof p ? W(p) : "boolean" === typeof p ? +p + "" : p + "", ua.push(k[0] + "", p);
                return ua.join("|")
            };
            a.prototype.ug = function() {
                var b = this.xhrUrl,
                    f = this.Oa,
                    k = this.Ea,
                    p = this.start,
                    z = this.name,
                    K = this.Ta,
                    da = this.jb,
                    ua = this.sa,
                    ib = this.uh,
                    fb = this.qf,
                    Db = this.Yb.slice();
                Db.push(["dn", this.domNodes], ["cfa", this.childFrameActions], ["xu", b], ["ica", this.isCustomAction], ["gn", this.aa]);
                var Sb = Db.push,
                    Mb = Sb.apply;
                var $b = [];
                if (0 !== Pc) {
                    var vc = Ic,
                        Jc = vc.name,
                        ld = vc.timestamp;
                    vc = vc.group;
                    ua && (ua.name !== Jc && $b.push(["svn", ua.name]), ua.timestamp !== ld && $b.push(["svt", ua.timestamp]), ua.group && ua.group !== vc && $b.push(["svg",
                        ua.group
                    ]), $b.push(["svtrg", ua.trigger]), $b.push(["svm", cd(ua)]));
                    ib && (ib.name !== Jc && $b.push(["tvn", ib.name]), ib.timestamp !== ld && $b.push(["tvt", ib.timestamp]), ib.group && ib.group !== vc && $b.push(["tvg", ib.group]), $b.push(["tvtrg", ib.trigger]), $b.push(["tvm", cd(ib)]))
                }
                Mb.call(Sb, Db, $b);
                b && !Ib("ntd") && Db.push(["xrt", this.hh().join("")]);
                "_load_" === z && "undefined" !== typeof document && Db.push(["lr", document.referrer]);
                "0" !== fb && Db.push(["bg", fb]);
                k && f && (0 < k ? Db.push(["xcs", k - p]) : Db.push(["xcs", k]), 0 < f ? Db.push(["xce",
                    f - p
                ]) : Db.push(["xce", f])); - 1 !== K && Db.push(["rc", K]);
                da && Db.push(["rm", da]);
                this.pd && this.stop < this.pd.responseEnd && this.Tc && Db.push(["sd", 1]);
                return Db
            };
            a.prototype.ph = function() {
                return 3600001 <= ic() - this.start ? (this.Yc(!1), !0) : !1
            };
            a.prototype.cf = function(b) {
                this.xhrUrl = O(b)
            };
            a.prototype.ih = function(b) {
                this.zc = b
            };
            a.prototype.Kb = function() {
                this.La && (this.La = !1, this.Da(this.mf || this.stop), this.fb = this.ic = 0, this.parent && this.parent.Kb())
            };
            a.prototype.Id = function(b) {
                this.Kb();
                this.Da(Math.max(b.timestamp,
                    this.stop));
                for (var f = this.parent; f;) f.Da(Math.max(f.stop, this.stop)), f = f.parent;
                this.Md.push(b)
            };
            a.prototype.Uf = function() {
                function b(k) {
                    var p;
                    void 0 === k && (k = -1);
                    va(f.mc, f.mc.indexOf(b));
                    f.Da(Math.max(k, f.stop));
                    f.Sc() || (null === (p = f.Mf) || void 0 === p ? void 0 : p.eg())
                }
                var f = this;
                this.mc.push(b);
                return b
            };
            a.prototype.Sf = function(b, f) {
                this.Yb.push([b, f])
            };
            a.prototype.De = function() {
                this.Uc = !0
            };
            a.prototype.oh = function(b) {
                this.Uc || (b > this.stop && 3 === this.status ? this.Ea = -6 : this.Ea = b)
            };
            a.prototype.mh = function(b) {
                this.Uc ||
                    (b > this.stop && 3 === this.status ? this.Oa = -6 : this.Oa = b)
            };
            a.prototype.te = function(b) {
                this.zb += b;
                var f = 3 === this.status;
                f && (this.status = 1);
                this.parent && (f && (this.Rc() || b++, this.parent.Xb++), this.parent.te(b))
            };
            a.prototype.Rc = function() {
                return -1 !== wm.indexOf(this.type)
            };
            a.prototype.$g = function(b) {
                for (var f = this.subActions, k = f.length - 1; 0 <= k; k--)
                    if (f[k] === b) {
                        va(f, k);
                        b.parent = void 0;
                        break
                    }
            };
            return a
        }(),
        $m = "loadEventEnd loadEventStart domComplete domContentLoadedEventEnd domContentLoadedEventStart domInteractive responseEnd".split(" "),
        Vl, Rg = [],
        Zk = (Vl = {}, Vl.dtAWF = function(a, b, f, k, p, z) {
            k && !vf(k) ? (Rg.push({
                xhrUrl: tc(C(p || "")),
                D: k,
                ng: z || ""
            }), a = a.apply(b, f || []), "g" === z ? Ub(function() {
                for (var K = 0; K < Rg.length; K++)
                    if (Rg[K].D === k) {
                        va(Rg, K);
                        break
                    }
            }, 0) : Rg.pop()) : a = a.apply(b, f || []);
            return a
        }, Vl),
        Gj, Ui;
    (function(a) {
        a[a.ERROR = 970] = "ERROR";
        a[a.CANCELED = 971] = "CANCELED";
        a[a.TIMEOUT = 972] = "TIMEOUT"
    })(Ui || (Ui = {}));
    var Ai = null,
        Hj = null,
        Bi = void 0,
        wk = void 0,
        xm;
    (function(a) {
        a[a.BOTH = 0] = "BOTH";
        a[a.PATH = 1] = "PATH";
        a[a.HASH = 2] = "HASH"
    })(xm || (xm = {}));
    var ym;
    (function(a) {
        a.HASHCHANGE = "hashchange";
        a.POPSTATE = "popstate"
    })(ym || (ym = {}));
    var ol, Tm;
    (function(a) {
        a[a.VIEW_CHANGE = 0] = "VIEW_CHANGE";
        a[a.PAGE_END = 1] = "PAGE_END"
    })(Tm || (Tm = {}));
    var Kj = "",
        jl, Hm = (jl = {}, jl.dtAWF = function(a, b, f) {
            return a.apply(b, f || [])
        }, jl),
        Ij, ej = !1,
        Ci = !1,
        pl = !1,
        $h = 1,
        bi = null,
        Lj = !1,
        Jj, Dh = !1,
        zk = !1,
        gj = -1,
        ai, Um;
    (function(a) {
        a[a.PAGE_HIDE = 0] = "PAGE_HIDE";
        a[a.BEFORE_UNLOAD = 1] = "BEFORE_UNLOAD"
    })(Um || (Um = {}));
    var Oj = 0;
    setInterval(function() {
        0 < Oj && Oj--
    }, 3E4);
    var ri;
    (function(a) {
        a.DATE = "spD";
        a.DOUBLE =
            "spDb";
        a.LONG = "spL";
        a.SHORT_STRING = "spSS"
    })(ri || (ri = {}));
    var Im = ["javaLong", "date", "shortString", "javaDouble"],
        Gi = function() {
            function a(b) {
                this.D = b;
                this.hf = [];
                this.be = []
            }
            a.prototype.gf = function(b, f, k) {
                Nf(b, f, k, this.D);
                this.hf.push({
                    key: f,
                    value: k
                })
            };
            a.prototype.ee = function(b, f, k) {
                b = hj(b, k);
                this.be.push({
                    key: f,
                    reason: b
                });
                a.Eb++
            };
            a.prototype.ne = function() {
                return this.hf
            };
            a.prototype.Kc = function() {
                return this.be
            };
            a.prototype.rg = function() {
                return Dk(this, a.Eb)
            };
            a.Eb = 0;
            return a
        }(),
        vg = {},
        Gk = function() {
            function a() {
                this.Ic = [];
                this.jf = [];
                this.Ae = new Map;
                this.Ud = new Map;
                this.df = new Map;
                this.ze = new Map;
                this.Gd = 0
            }
            a.prototype.gf = function(b, f, k) {
                switch (b) {
                    case "_uapl_":
                        this.Ae.set(f, k);
                        break;
                    case "_uapdbl_":
                        this.ze.set(f, k);
                        break;
                    case "_uaps_":
                        this.df.set(f, k);
                        break;
                    case "_uapdt_":
                        this.Ud.set(f, k);
                        break;
                    default:
                        return
                }
                this.Gd++;
                this.jf.push({
                    key: f,
                    value: k
                })
            };
            a.prototype.ee = function(b, f, k) {
                b = hj(b, k);
                this.Ic.push({
                    key: f,
                    reason: b
                });
                a.Eb++
            };
            a.prototype.Ag = function() {
                return 0 < this.Gd
            };
            a.prototype.ne = function() {
                return this.jf
            };
            a.prototype.Kc = function() {
                return this.Ic
            };
            a.prototype.xg = function() {
                for (var b = [], f = 0, k = this.Ic; f < k.length; f++) b.push(k[f].key);
                return b
            };
            a.prototype.Jd = function(b, f) {
                Fi(this, f.javaLong, f.date, f.shortString, f.javaDouble);
                this.Ae.forEach(function(k, p) {
                    var z;
                    null !== (z = b.spL) && void 0 !== z ? z : b.spL = new Map;
                    b.spL.set(p, k + "")
                });
                this.Ud.forEach(function(k, p) {
                    var z;
                    null !== (z = b.spD) && void 0 !== z ? z : b.spD = new Map;
                    b.spD.set(p, k + "")
                });
                this.df.forEach(function(k, p) {
                    var z;
                    null !== (z = b.spSS) && void 0 !== z ? z : b.spSS = new Map;
                    b.spSS.set(p, W(k + ""))
                });
                this.ze.forEach(function(k, p) {
                    var z;
                    null !== (z = b.spDb) && void 0 !== z ? z : b.spDb = new Map;
                    b.spDb.set(p, k + "")
                })
            };
            a.Eb = 0;
            return a
        }(),
        fi, kj = [],
        Hk, Vm;
    (function(a) {
        a[a.BEGIN = 11359836E5] = "BEGIN";
        a[a.END = 41338908E5] = "END"
    })(Vm || (Vm = {}));
    var zm;
    (function(a) {
        a.METHOD = "method";
        a.PARAMETER = "parameter"
    })(zm || (zm = {}));
    var Am = [0, 1, 2, 3],
        Rl = function() {
            function a() {}
            a.prototype.setAutomaticActionDetection = function(b) {
                Bc(b, "boolean") ? (1 < arguments.length && zc(), sb("saad"), ka(b)) : Yb()
            };
            a.prototype.setLoadEndManually =
                function() {
                    0 < arguments.length && zc();
                    sb("slem");
                    Dh = !0
                };
            a.prototype.signalLoadEnd = function() {
                0 < arguments.length && zc();
                sb("sle");
                Pg()
            };
            a.prototype.markAsErrorPage = function(b, f) {
                if (!Bc(b, "number") || !Bc(f, "string")) return Yb(), !1;
                2 < arguments.length && zc();
                sb("maep");
                return rl(b, f)
            };
            a.prototype.markXHRFailed = function(b, f, k) {
                if (!Bc(b, "number") || !Bc(f, "string") || !nd(k, "number")) return Yb(), !1;
                3 < arguments.length && zc();
                sb("mxf");
                return cc(b, f, +k || -1)
            };
            a.prototype.sendSignal = function() {
                Qc("method", "sendSignal",
                    'This method is deprecated and has no functionality. Use "sendBeacon" instead.')
            };
            a.prototype.sendBeacon = function(b, f, k) {
                Bc(b, "boolean") && Bc(f, "boolean") && Bc(k, "boolean") ? ("undefined" !== typeof b && Qc("parameter", "forceSync", "This parameter has been deprecated and has no effect anymore. Beacons are always sent asynchronously."), 3 < arguments.length && zc(), sb("ss"), Fc(f, k)) : Yb()
            };
            a.prototype.enterAction = function(b, f, k, p) {
                if (!Bc(b, "string") || !nd(p, "string")) return Yb(), 0;
                f && Qc("parameter", "actionType", "This parameter is deprecated and has no effect anymore.");
                5 < arguments.length && zc();
                sb("ea");
                var z = k;
                if (z) {
                    if (!+z) return Yb(), 0;
                    z = wg(z)
                }
                return Wg(b, "", +z, !1, void 0, void 0, !0, p)
            };
            a.prototype.addEnterActionListener = function(b) {
                fd(b) ? (1 < arguments.length && zc(), sb("aeal"), hg(b)) : Yb()
            };
            a.prototype.removeEnterActionListener = function(b) {
                if (fd(b)) {
                    1 < arguments.length && zc();
                    sb("real");
                    var f = b.dtWF;
                    f && ra("ACTION_ENTERED", f)
                } else Yb()
            };
            a.prototype.leaveAction = function(b, f, k) {
                if (Bc(b, "number") && nd(f, "number") && nd(k, "number")) {
                    3 < arguments.length && zc();
                    sb("la");
                    var p = Kc(b);
                    if (p)
                        if (p.isCustomAction) {
                            (p = k) && (p = wg(p));
                            var z = f;
                            z && (z = wg(z));
                            dg(b, z, p)
                        } else ef('"dtrum.leaveAction" can only be called for actions created by dtrum, and action with id of "'.concat(b, '" is not a custom action!'));
                    else hi()
                } else Yb()
            };
            a.prototype.addLeaveActionListener = function(b) {
                fd(b) ? (1 < arguments.length && zc(), sb("alal"), ad(b)) : Yb()
            };
            a.prototype.removeLeaveActionListener = function(b) {
                if (fd(b)) {
                    1 < arguments.length && zc();
                    sb("rlal");
                    var f = b.dtWF;
                    f && ra("ACTION_LEFT", f)
                } else Yb()
            };
            a.prototype.addActionProperties =
                function(b, f, k, p, z) {
                    if (Bc(b, "number") && nd(f, "object") && nd(k, "object") && nd(p, "object") && nd(z, "object")) {
                        5 < arguments.length && zc();
                        if (Kc(b)) return sb("aap"), yb(b, f, k, p, z);
                        hi()
                    } else Yb()
                };
            a.prototype.reportError = function(b, f) {
                ("object" !== typeof b && "string" !== typeof b || null === b ? 0 : "object" === typeof b && "message" in b || "string" === typeof b) && nd(f, "number") ? (2 < arguments.length && zc(), sb("re"), Fh(b, f, !1, "0")) : Yb()
            };
            a.prototype.identifyUser = function(b) {
                Bc(b, "string") ? (1 < arguments.length && zc(), sb("iu"), Ga() ? ve() &&
                    ef("navigator.doNotTrack is enabled on the browser") : Ck("rx_visittag", b, -1)) : Yb()
            };
            a.prototype.startThirdParty = function() {
                Qc("method", "startThirdParty", "This method is deprecated and has no functionality.")
            };
            a.prototype.stopThirdParty = function() {
                Qc("method", "stopThirdParty", "This method is deprecated and has no functionality.")
            };
            a.prototype.addPageLeavingListener = function(b) {
                fd(b) ? (1 < arguments.length && zc(), sb("apll"), R("PAGE_LEAVING", function(f) {
                    b(f.detail)
                })) : Yb()
            };
            a.prototype.beginUserInput = function(b,
                f, k, p) {
                if (!qb(b) && !Bc(b, "string") || !Bc(f, "string") || !nd(k, "string") || !nd(p, "number")) return Yb(), {};
                4 < arguments.length && zc();
                sb("bui");
                return Tc(b, f, k, p)
            };
            a.prototype.endUserInput = function(b) {
                ("object" !== typeof b || null === b ? 0 : "object" === typeof b && "name" in b && "info" in b && "title" in b) ? (1 < arguments.length && zc(), sb("eui"), L(b)) : Yb()
            };
            a.prototype.enterXhrAction = function(b, f, k) {
                var p;
                if (!(p = !Bc(b, "string"))) {
                    a: {
                        for (var z in Am)
                            if (Am[z] === f) {
                                p = !0;
                                break a
                            }
                        p = !1
                    }
                    p = !p && !nd(k, "string")
                }
                if (p) return Yb(), -1;
                p = f;
                2 === f && (Qc("parameter", "xmode 2", "xmode 2 is deprecated and will fallback to value of 1."), p = 1);
                3 < arguments.length && zc();
                k || ef("No XHR URL was provided, which will result in the request being marked as `/undefined` in the waterfall! In the future, this argument will be required!");
                sb("exa");
                return q(b, p, k + "", !0)
            };
            a.prototype.leaveXhrAction = function(b, f) {
                if (Bc(b, "number") && nd(f, "number")) {
                    2 < arguments.length && zc();
                    sb("lxa");
                    var k = ia(b);
                    k ? k.isCustomAction ? ((k = f) && (k = wg(f)), ta(b, k)) : ef('"dtrum.leaveXhrAction" can only be called for actions created by dtrum, and action with id of "'.concat(b,
                        '" is not a custom action!')) : hi()
                } else Yb()
            };
            a.prototype.enterXhrCallback = function(b) {
                Bc(b, "number") ? (1 < arguments.length && zc(), ia(b) ? (sb("exc"), Kb(b)) : hi()) : Yb()
            };
            a.prototype.leaveXhrCallback = function(b) {
                Bc(b, "number") ? (1 < arguments.length && zc(), ia(b) ? (sb("lxc"), Ob(b)) : hi()) : Yb()
            };
            a.prototype.signalOnLoadStart = function() {
                0 < arguments.length && zc();
                sb("sols");
                jg()
            };
            a.prototype.incrementOnLoadEndMarkers = function() {
                0 < arguments.length && zc();
                sb("iolem");
                Ne()
            };
            a.prototype.signalOnLoadEnd = function() {
                0 < arguments.length &&
                    zc();
                sb("sole");
                ig()
            };
            a.prototype.actionName = function(b, f) {
                if (!Bc(b, "string")) return Yb(), 2;
                if (!nd(f, "number")) return Yb(), 3;
                2 < arguments.length && zc();
                sb("an");
                return Ba("an", fc(b), +f) ? 0 : 1
            };
            a.prototype.endSession = function() {
                0 < arguments.length && zc();
                sb("es");
                sl()
            };
            a.prototype.now = function() {
                0 < arguments.length && zc();
                sb("n");
                return ic()
            };
            a.prototype.enable = function() {
                var b;
                0 < arguments.length && zc();
                sb("e");
                ni();
                za((b = {}, b.kind = "OPT_IN_STATE_CHANGED", b.detail = !0, b))
            };
            a.prototype.disable = function() {
                var b;
                0 < arguments.length && zc();
                sb("d");
                Ri();
                za((b = {}, b.kind = "OPT_IN_STATE_CHANGED", b.detail = !1, b))
            };
            a.prototype.addVisitTimeoutListener = function(b) {
                fd(b) ? (1 < arguments.length && zc(), sb("avtl"), zh(b)) : Yb()
            };
            a.prototype.enableSessionReplay = function(b) {
                if (Bc(b, "boolean")) {
                    1 < arguments.length && zc();
                    sb("esr");
                    var f = Eb.dT_;
                    f && f.srel && f.srel(b)
                } else Yb()
            };
            a.prototype.disableSessionReplay = function() {
                0 < arguments.length && zc();
                sb("dsr");
                var b = Eb.dT_;
                b && b.srel && b.srdl()
            };
            a.prototype.getAndEvaluateMetaData = function() {
                0 <
                    arguments.length && zc();
                sb("gaemd");
                var b = Eb.dT_;
                return b && b.gEMD && b.iRHCA ? b.gEMD() : []
            };
            a.prototype.enablePersistentValues = function() {
                0 < arguments.length && zc();
                sb("epv");
                Qi()
            };
            a.prototype.disablePersistentValues = function(b) {
                Bc(b, "boolean") ? (1 < arguments.length && zc(), sb("dpv"), Pi(b)) : Yb()
            };
            a.prototype.registerPreDiffMethod = function(b) {
                if (fd(b)) {
                    1 < arguments.length && zc();
                    sb("rpdm");
                    var f = Eb.dT_;
                    f && f.srel && Array.isArray(f.srpdm) && f.srpdm.push(b)
                } else Yb()
            };
            a.prototype.sendSessionProperties = function(b, f,
                k, p) {
                if (nd(b, "object") && nd(f, "object") && nd(k, "object") && nd(p, "object")) return 4 < arguments.length && zc(), sb("ssp"), Fk(b, f, k, p);
                Yb()
            };
            a.prototype.reportCustomError = function(b, f, k, p) {
                if (Bc(b, "string") && Bc(f, "string") && nd(k, "string") && (nd(p, "number") || nd(p, "boolean")))
                    if (4 < arguments.length && zc(), sb("rce"), b && f) {
                        var z = [
                            ["type", b],
                            ["name", f]
                        ];
                        k && z.push(["hint", k + ""]);
                        Cd("_customerror_", z, p)
                    } else ve() && ef("Key or value is missing but mandatory for 'reportCustomError' method!");
                else Yb()
            };
            a.prototype.enableManualPageDetection =
                function() {
                    0 < arguments.length && zc();
                    sb("emvd");
                    pd(3)
                };
            a.prototype.setPage = function(b) {
                if (!("object" !== typeof b || null === b ? 0 : "object" === typeof b && "name" in b && "group" in b)) return Yb(), -1;
                1 < arguments.length && zc();
                sb("sp");
                return gi(b, 3)
            };
            return a
        }(),
        Jk = [],
        Kk, lj, xg = !1,
        Sj = !!Eb.MutationObserver,
        ii = Eb.MutationObserver ? Eb.MutationObserver : void 0,
        yg = {},
        Uj = {},
        mj = {},
        Tj = [],
        Ok = {},
        kl;
    (function(a) {
        a.CONFIG = "config";
        a.GLOBAL_PROPERTIES = "globalProperties";
        a.ROUTER = "$router"
    })(kl || (kl = {}));
    var Ii = "".concat(1).concat(","),
        Cl = [],
        Zj = [],
        Ug = {},
        of , rj, ki, ue = {},
        ak = null,
        Ji = [],
        Bg, ok;
    (function(a) {
        a[a.BEFORE_LOAD_ACTION_CLOSED = 0] = "BEFORE_LOAD_ACTION_CLOSED";
        a[a.BEFORE_LOAD_ACTION_SENT = 1] = "BEFORE_LOAD_ACTION_SENT";
        a[a.AFTER_LOAD_ACTION_SENT = 2] = "AFTER_LOAD_ACTION_SENT"
    })(ok || (ok = {}));
    var Ih = 0,
        Hh = 0,
        Li, Ki, bk = [],
        dk, Uk, ck, ek, Jm, Jh = [],
        Mi = 0,
        lm = ["click", "mousedown", "keydown", "touchstart"],
        c = 0,
        d = 0,
        l = void 0;
    (function() {
        var a, b;
        if ("documentMode" in document && !isNaN(document.documentMode)) null === (a = window.console) || void 0 === a ? void 0 : a.log("Internet Explorer detected, agent will not initialize.");
        else if (a = 0 > (null === (b = navigator.userAgent) || void 0 === b ? void 0 : b.indexOf("RuxitSynthetic")), !Eb.dT_ || !Eb.dT_.ica) Eb.console.log("No initCode available, turning off asyncCore."), Eb.dT_ && (Eb.dT_.di = 2);
        else if ("initialized" in Eb.dT_ && Eb.dT_.initialized) Eb.dT_.gCP || Eb.console.log("Duplicate agent injection detected, turning off redundant asyncCore."), Eb.dT_.di = 1;
        else if (a) {
            if (a = (b = Eb.dT_) && b.gCP) b = b.gCP(), a = +(Hb.dT_.ncv("buildNumber") || Y().version), a = !(b && !isNaN(a) && +ab() === a);
            a || ff() || (delete Eb.dT_,
                Eb.console.log("JsAgent asyncCore initialization failed!"))
        }
    })()
})();
(function() {
    function Ia() {
        return jb(this, void 0, void 0, function() {
            return nb(this, function() {
                return [2]
            })
        })
    }

    function jb(S, P, ma, Ja) {
        function O(ca) {
            return ca instanceof ma ? ca : new ma(function(I) {
                I(ca)
            })
        }
        return new(ma || (ma = ba))(function(ca, I) {
            function J(Aa) {
                try {
                    Z(Ja.next(Aa))
                } catch (W) {
                    I(W)
                }
            }

            function fa(Aa) {
                try {
                    Z(Ja["throw"](Aa))
                } catch (W) {
                    I(W)
                }
            }

            function Z(Aa) {
                Aa.done ? ca(Aa.value) : O(Aa.value).then(J, fa)
            }
            Z((Ja = Ja.apply(S, P || [])).next())
        })
    }

    function nb(S, P) {
        function ma(Z) {
            return function(Aa) {
                return Ja([Z, Aa])
            }
        }

        function Ja(Z) {
            if (ca) throw new TypeError("Generator is already executing.");
            for (; fa && (fa = 0, Z[0] && (O = 0)), O;) try {
                if (ca = 1, I && (J = Z[0] & 2 ? I["return"] : Z[0] ? I["throw"] || ((J = I["return"]) && J.call(I), 0) : I.next) && !(J = J.call(I, Z[1])).done) return J;
                if (I = 0, J) Z = [Z[0] & 2, J.value];
                switch (Z[0]) {
                    case 0:
                    case 1:
                        J = Z;
                        break;
                    case 4:
                        return O.label++, {
                            value: Z[1],
                            done: !1
                        };
                    case 5:
                        O.label++;
                        I = Z[1];
                        Z = [0];
                        continue;
                    case 7:
                        Z = O.da.pop();
                        O.J.pop();
                        continue;
                    default:
                        if (!(J = O.J, J = 0 < J.length && J[J.length - 1]) && (6 === Z[0] || 2 === Z[0])) {
                            O = 0;
                            continue
                        }
                        if (3 ===
                            Z[0] && (!J || Z[1] > J[0] && Z[1] < J[3])) O.label = Z[1];
                        else if (6 === Z[0] && O.label < J[1]) O.label = J[1], J = Z;
                        else if (J && O.label < J[2]) O.label = J[2], O.da.push(Z);
                        else {
                            J[2] && O.da.pop();
                            O.J.pop();
                            continue
                        }
                }
                Z = P.call(S, O)
            } catch (Aa) {
                Z = [6, Aa], I = 0
            } finally {
                ca = J = 0
            }
            if (Z[0] & 5) throw Z[1];
            return {
                value: Z[0] ? Z[1] : void 0,
                done: !0
            }
        }
        var O = {
                label: 0,
                B: function() {
                    if (J[0] & 1) throw J[1];
                    return J[1]
                },
                J: [],
                da: []
            },
            ca, I, J, fa;
        return fa = {
                next: ma(0),
                "throw": ma(1),
                "return": ma(2)
            }, "function" === typeof Symbol && (fa[Symbol.iterator] = function() {
                return this
            }),
            fa
    }

    function db() {}

    function kb(S, P, ma) {
        var Ja = {
            D: S,
            Nf: P,
            Og: function(O) {
                return "fetch" === O.initiatorType && qa.dT_.gto() + Math.round(O.startTime) >= P && O.name === qa.dT_.tau(ma)
            },
            Fe: []
        };
        U.set(S, Ja);
        return Ja
    }

    function Oa(S) {
        var P = S.D,
            ma = S.Nf,
            Ja = S.ah,
            O = S.Fe,
            ca = S.zc,
            I = S.cg;
        ma && Ja && O.length && (ca && O.push(ca), ma = qa.dT_.cbf(O, ma, Ja) || ca, O.length = 0, ma && (S.zc = ma, qa.dT_.uabmr(P, ma), null === I || void 0 === I ? void 0 : I()))
    }

    function Ra(S) {
        U.forEach(function(P) {
            var ma = P.Fe,
                Ja = qa.dT_.aFr(S, P.Og);
            ma.push.apply(ma, Ja);
            Oa(P)
        })
    }

    function Wa(S) {
        return jb(this,
            void 0, void 0,
            function() {
                var P;
                return nb(this, function(ma) {
                    switch (ma.label) {
                        case 0:
                            qa.dT_.nw(), ma.label = 1;
                        case 1:
                            return ma.J.push([1, 3, , 4]), P = new ba(function(Ja, O) {
                                var ca = qa.dT_.st(O, 1E3);
                                S.cg = function() {
                                    qa.dT_.ct(ca);
                                    Ja();
                                    U.delete(S.D)
                                };
                                Oa(S)
                            }), [4, P];
                        case 2:
                            return ma.B(), [3, 4];
                        case 3:
                            return ma.B(), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
    }

    function Sa(S, P, ma) {
        if (!va) return Ia;
        var Ja = kb(S, P, ma);
        return function(O) {
            Ja.ah = O;
            return Wa(Ja)
        }
    }

    function ab() {
        (va = !!eb.PerformanceObserver) && (new PerformanceObserver(function(S) {
            Ra(S.getEntries())
        })).observe({
            entryTypes: ["resource"]
        })
    }

    function Ka(S) {
        var P = {};
        S.forEach(function(ma, Ja) {
            P[Ja] = ma
        });
        return P
    }

    function Bb(S, P) {
        function ma(fa) {
            var Z = fa.then;
            fa.then = function(Aa, W) {
                var Ca = [];
                "function" === typeof Aa && (Ca[0] = function(bb) {
                    qa.dT_.ec(P.D);
                    var lb = bb,
                        Ab, oa;
                    if (qa.dT_.iIO(lb, 18)) {
                        var ub = P.D;
                        P.status = lb.status;
                        P.statusText = lb.statusText;
                        "headers" in lb && Na.gEMD && Na.iRHCA && Na.iRHCA() && qa.dT_.disE((Ab = {}, Ab.kind = "HTTP_RESPONSE", Ab.detail = (oa = {}, oa.a = ub, oa.h = Ka(lb.headers), oa), Ab));
                        qa.dT_.mx() && !lb.ok && (-1 === lb.status ? qa.dT_.mxc(ub) : qa.dT_.mxf(lb.status,
                            lb.statusText, ub))
                    }
                    try {
                        var kc = ea.onFulfilled(Aa, this, arguments)
                    } finally {
                        qa.dT_.lc(P.D), Ja()
                    }
                    return kc
                });
                "function" === typeof W && (Ca[1] = function(bb) {
                    qa.dT_.ec(P.D);
                    var lb = bb,
                        Ab = P.D;
                    qa.dT_.mx() && qa.dT_.iIO(lb, 7) && qa.dT_.mxg(lb.message, Ab);
                    try {
                        var oa = ea.onRejected(W, this, arguments)
                    } finally {
                        qa.dT_.lc(P.D), Ja()
                    }
                    return oa
                });
                Ca = ea.then(Z, this, Ca);
                ma(Ca);
                return Ca
            }
        }

        function Ja() {
            I = qa.dT_.nw();
            if (!ca) {
                ca = !0;
                var fa = qa.dT_.nw();
                J(fa).then(O).catch(O)
            }
        }

        function O() {
            var fa, Z;
            qa.dT_.dlx(P.D, I);
            qa.dT_.disE((fa = {},
                fa.kind = "REQUEST_COMPLETED", fa.detail = (Z = {}, Z.i = "fetch", Z.x = P.url, Z.m = P.Dc.method || "GET", Z.c = P.status, Z.s = P.statusText, Z.a = void 0, Z.e = void 0, Z.r = qa.dT_.gRT(P.url, "fetch", P.startTime, qa.dT_.nw()) || void 0, Z.q = P.startTime, Z), fa))
        }
        var ca = !1,
            I, J = Sa(P.D, P.startTime, P.url);
        ma(S)
    }

    function Ea() {
        for (var S = [], P = 0; P < arguments.length; P++) S[P] = arguments[P];
        if (!S.length) return ea.fetch(La, this, S);
        var ma;
        S = Array.prototype.slice.call(S);
        var Ja, O = "function" === typeof eb.Request && qa.dT_.iIO(S[0], 17);
        P = O ? S[0].url : S[0];
        "object" === typeof P && (P = P.toString());
        if (O) O = S[0];
        else {
            O = S[1];
            var ca = eb.Headers ? new eb.Headers : {};
            O ? O.headers || (O.headers = ca) : O = {
                headers: ca
            };
            S[1] = O
        }
        ca = qa.dT_.nw();
        var I = qa.dT_.ex("fetch", 3, P);
        qa.dT_.disE((ma = {}, ma.kind = "REQUEST_STARTED", ma.detail = (Ja = {}, Ja.i = "fetch", Ja.x = P, Ja), ma));
        ma = {
            url: P,
            Dc: O,
            ta: S,
            D: I,
            startTime: ca,
            status: 0,
            statusText: ""
        };
        ma.Dc.keepalive && qa.dT_.bcv("dKAH") || qa.dT_.sch(ma.Dc, ma.url, ma.D);
        Ja = ea.fetch(La, this, ma.ta);
        Bb(Ja, ma);
        Ja.then(db, db);
        return Ja
    }
    var ba = this.dT_ && dT_.prm && dT_.prm() ||
        window.Promise,
        qa = "undefined" !== typeof window ? window : self,
        eb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        va, U = new Map,
        Y, Na, La, ea = (Y = {}, Y.fetch = function(S, P, ma) {
            return Na.aWF(S, P, ma)
        }, Y.then = function(S, P, ma) {
            return Na.aWF(S, P, ma)
        }, Y.onFulfilled = function(S, P, ma) {
            return Na.aWF(S, P, ma)
        }, Y.onRejected = function(S, P, ma) {
            return Na.aWF(S, P, ma)
        }, Y);
    (function() {
        var S, P;
        (Na = eb.dT_) && (null === (P = (S = qa.dT_).smbi) || void 0 === P ? 0 : P.call(S, "7")) && eb.fetch && (ab(), La = eb.fetch, eb.fetch =
            Ea)
    })()
})();
(function() {
    function Ia() {
        Ia = Object.assign || function(Ea) {
            for (var ba, qa = 1, eb = arguments.length; qa < eb; qa++) {
                ba = arguments[qa];
                for (var va in ba) Object.prototype.hasOwnProperty.call(ba, va) && (Ea[va] = ba[va])
            }
            return Ea
        };
        return Ia.apply(this, arguments)
    }

    function jb(Ea) {
        var ba;
        null === (ba = Bb.console) || void 0 === ba ? void 0 : ba.log("".concat("[dynatrace]", " ").concat(Ea))
    }

    function nb(Ea) {
        return null === Ea || "object" !== typeof Ea ? !1 : "[object Object]" === Object.prototype.toString.call(Ea)
    }

    function db(Ea) {
        var ba = !1,
            qa;
        for (qa in Ea) Object.prototype.hasOwnProperty.call(Ea,
            qa) && kb(Ea[qa]) && (jb('key "'.concat(qa, '" contains non-finite numbers: [').concat(Ea[qa], "] which have been changed to null!")), ba = !0);
        return ba
    }

    function kb(Ea) {
        if ("function" === typeof Ea) Ea = !0;
        else if (Array.isArray(Ea)) {
            for (var ba = !1, qa = 0; qa < Ea.length; qa++) kb(Ea[qa]) && (ba = !0);
            Ea = ba
        } else Ea = nb(Ea) ? db(Ea) : !("number" !== typeof Ea || isFinite(Ea));
        return Ea
    }

    function Oa(Ea, ba) {
        var qa, eb, va = {},
            U;
        for (U in ba) Ka.dT_.oHOP(ba, U) && ("dt" === U ? jb('"'.concat("dt", '" is a reserved property and will be discarded!')) :
            0 === U.indexOf("dt.") ? jb('"dt.*" is a reserved keyword as a property name. Key "'.concat(U, '" will be discarded!')) : va[U] = ba[U]);
        var Y;
        ba = (null === (Y = Bb.performance) || void 0 === Y ? 0 : Y.now) ? Math.round(1E6 * ((performance.timeOrigin || performance.timing.navigationStart) + Bb.performance.now())) : 1E6 * Date.now();
        Y = Ia(Ia(Ia((qa = {}, qa.timestamp = ba, qa["event.kind"] = "RUM_EVENT", qa["event.provider"] = Bb.location.hostname, qa), va), Ea), (eb = {}, eb["dt.rum.application.id"] = Ka.dT_.scv("app"), eb["dt.rum.sid"] = Ka.dT_.gVI(), eb["dt.rum.instance.id"] =
            Ka.dT_.gVID(), eb["dt.rum.schema_version"] = "1.2", eb));
        db(Y) && (Y["dt.rum.has_nfn_values"] = !0);
        return Y
    }

    function Ra(Ea) {
        var ba, qa = Ka.dT_.cB();
        Ka.dT_.gBP().ar(qa, JSON.stringify(Ea));
        Ka.dT_.sB(qa, !1, !1, (ba = {}, ba.contentType = "event", ba.st = Ka.dT_.nw(), ba))
    }

    function Wa(Ea) {
        return nb(Ea) ? !0 : (jb("Provided attributes must be a JSON like object!"), !1)
    }

    function Sa(Ea, ba) {
        if (!Ea || "string" !== typeof Ea) jb("Provided event type must be a non-empty string!");
        else if (Wa(ba)) {
            var qa = {};
            qa["event.type"] = Ea;
            qa["event.kind"] =
                "BIZ_EVENT";
            var eb, va = JSON.stringify(Ia((eb = {}, eb["event.type"] = Ea, eb), ba));
            try {
                var U = (new Bb.TextEncoder).encode(va).length
            } catch (Y) {
                U = va.length
            }
            Ea = Oa((qa["dt.rum.custom_attributes_size"] = U, qa), ba);
            Ra(Ea)
        }
    }

    function ab(Ea, ba) {
        var qa;
        if (!Ea || "string" !== typeof Ea) jb("Provided event name must be a non-empty string!");
        else if (Wa(ba)) {
            var eb = Oa((qa = {}, qa["event.type"] = Ea, qa), ba);
            Ra(eb)
        }
    }
    this.dT_ && dT_.prm && dT_.prm();
    var Ka = "undefined" !== typeof window ? window : self,
        Bb = "undefined" !== typeof globalThis ? globalThis :
        "undefined" !== typeof window ? window : void 0;
    (function() {
        var Ea, ba;
        Bb.JSON && Bb.JSON.stringify && Bb.dT_ && (null === (ba = (Ea = Ka.dT_).smbi) || void 0 === ba ? 0 : ba.call(Ea, "N")) && (Bb.dynatrace = {
            sendEvent: ab,
            sendBizEvent: Sa
        })
    })()
})();
(function() {
    function Ia(e) {
        return new yb(function(h) {
            return va(this, void 0, void 0, function() {
                return U(this, function(m) {
                    switch (m.label) {
                        case 0:
                            if (!e || document.hasFocus() || "mouseenter" !== e.type) return [3, 2];
                            Ia.pending = {
                                resolve: h
                            };
                            return [4, Ge(100)];
                        case 1:
                            m.B();
                            if (!Ia.pending || Ia.pending.resolve !== h) return h(null), [2];
                            m.label = 2;
                        case 2:
                            if (wd) return h(null), [2];
                            wd = !0;
                            h(wd);
                            return [2]
                    }
                })
            })
        })
    }

    function jb(e) {
        jb.listener = e
    }

    function nb(e, h) {
        return Sa(e) && "href" === h ? 1 : Bb(e) && "value" === h ? 32 : Xf.Od.some(function(m) {
                return m.test(h)
            }) ?
            16 : Wa(e) && "value" === h ? 2 === db(e) ? 16 : 1 : 1
    }

    function db(e) {
        if (ab(e) || ab(e.parentNode)) return 1;
        Tk.has(e) && Yf.set(e, Yf.get(e) | 8);
        Sk.has(e) && Yf.set(e, Yf.get(e) | 2);
        Rk.has(e) && (Xf.nb ? Zf.set(e, Zf.get(e) | 1) : Zf.set(e, Zf.get(e) | 4));
        Ka(e) && e.hasAttribute("data-dtrum-mask") && (Ra(e) ? Zf.set(e, Zf.get(e) | 4) : Yf.set(e, Yf.get(e) | 10));
        if (Yf.has(e)) return Yf.get(e);
        if (Zf.has(e)) return Zf.get(e);
        var h = e,
            m = !1;
        h.nodeType === Node.TEXT_NODE && (h = h.parentNode, m = !0);
        var r = Ra(h);
        var B = m;
        void 0 === B && (B = !1);
        B = !r || B || "OPTION" === h.nodeName ?
            (r ? Zf : Yf).get(B ? h : h.parentNode) : void 0;
        var V = void 0;
        r && kb(Xf.rb, h) && (V |= 4);
        !r && kb(Xf.pb, h) && (V |= 2);
        !r && kb(Xf.ub, h) && (V |= 8);
        if (V || r) a: if (r = void 0 === r ? !1 : r, m = void 0 === m ? !1 : m, !r && V) B = V;
            else {
                if (r) {
                    V = V && !(V & 1) || Xf.nb ? (!V || V & 1) && Xf.nb || V && !(V & 1) && !Xf.nb ? h.parentNode && Ra(h.parentNode) ? B && !(B & 1) : !0 : !1 : B && !(B & 1);
                    if (m && V) {
                        B = B ? B : 2;
                        break a
                    }
                    if (V) {
                        B = kb(Qk, h) || h instanceof HTMLFormElement && "text" === h.type ? 4 : 8;
                        break a
                    }
                }
                B = 1
            }
        else B = B ? B : 1;
        Ra(e) ? Zf.set(e, Zf.get(e) | B) : Yf.set(e, Yf.get(e) | B);
        return B
    }

    function kb(e, h) {
        for (var m =
                0; m < e.length; m++)
            if (sj.matchesSelector(h, e[m])) return !0;
        return !1
    }

    function Oa(e, h) {
        e.forEach(function(m) {
            [].slice.call(document.querySelectorAll(m)).forEach(function(r) {
                h.has(r) || h.set(r, m)
            })
        })
    }

    function Ra(e) {
        return Wa(e) ? !1 : -1 !== jm.indexOf(e.nodeName)
    }

    function Wa(e) {
        return e && "INPUT" === e.nodeName ? (e = e.getAttribute("type")) ? -1 !== Pk.indexOf(e.toLowerCase()) : !1 : !1
    }

    function Sa(e) {
        return Ka(e) && "link" === e.nodeName.toLowerCase()
    }

    function ab(e) {
        return Ka(e) && "style" === e.nodeName.toLowerCase()
    }

    function Ka(e) {
        return e &&
            e.nodeType && 1 === e.nodeType
    }

    function Bb(e) {
        return e && "INPUT" === e.nodeName && "password" === e.type.toLowerCase()
    }

    function Ea() {
        Ea = Object.assign || function(e) {
            for (var h, m = 1, r = arguments.length; m < r; m++) {
                h = arguments[m];
                for (var B in h) Object.prototype.hasOwnProperty.call(h, B) && (e[B] = h[B])
            }
            return e
        };
        return Ea.apply(this, arguments)
    }

    function ba(e, h) {
        ba = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(m, r) {
            m.__proto__ = r
        } || function(m, r) {
            for (var B in r) Object.prototype.hasOwnProperty.call(r, B) && (m[B] =
                r[B])
        };
        return ba(e, h)
    }

    function qa(e, h) {
        function m() {
            this.constructor = e
        }
        if ("function" !== typeof h && null !== h) throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
        ba(e, h);
        e.prototype = null === h ? Object.create(h) : (m.prototype = h.prototype, new m)
    }

    function eb(e, h) {
        var m = {},
            r;
        for (r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > h.indexOf(r) && (m[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var B = 0;
            for (r = Object.getOwnPropertySymbols(e); B < r.length; B++) 0 >
                h.indexOf(r[B]) && Object.prototype.propertyIsEnumerable.call(e, r[B]) && (m[r[B]] = e[r[B]])
        }
        return m
    }

    function va(e, h, m, r) {
        function B(V) {
            return V instanceof m ? V : new m(function(Fa) {
                Fa(V)
            })
        }
        return new(m || (m = yb))(function(V, Fa) {
            function ha(Jb) {
                try {
                    cb(r.next(Jb))
                } catch (jc) {
                    Fa(jc)
                }
            }

            function Ya(Jb) {
                try {
                    cb(r["throw"](Jb))
                } catch (jc) {
                    Fa(jc)
                }
            }

            function cb(Jb) {
                Jb.done ? V(Jb.value) : B(Jb.value).then(ha, Ya)
            }
            cb((r = r.apply(e, h || [])).next())
        })
    }

    function U(e, h) {
        function m(cb) {
            return function(Jb) {
                return r([cb, Jb])
            }
        }

        function r(cb) {
            if (V) throw new TypeError("Generator is already executing.");
            for (; Ya && (Ya = 0, cb[0] && (B = 0)), B;) try {
                if (V = 1, Fa && (ha = cb[0] & 2 ? Fa["return"] : cb[0] ? Fa["throw"] || ((ha = Fa["return"]) && ha.call(Fa), 0) : Fa.next) && !(ha = ha.call(Fa, cb[1])).done) return ha;
                if (Fa = 0, ha) cb = [cb[0] & 2, ha.value];
                switch (cb[0]) {
                    case 0:
                    case 1:
                        ha = cb;
                        break;
                    case 4:
                        return B.label++, {
                            value: cb[1],
                            done: !1
                        };
                    case 5:
                        B.label++;
                        Fa = cb[1];
                        cb = [0];
                        continue;
                    case 7:
                        cb = B.da.pop();
                        B.J.pop();
                        continue;
                    default:
                        if (!(ha = B.J, ha = 0 < ha.length && ha[ha.length - 1]) && (6 === cb[0] || 2 === cb[0])) {
                            B = 0;
                            continue
                        }
                        if (3 === cb[0] && (!ha || cb[1] > ha[0] && cb[1] <
                                ha[3])) B.label = cb[1];
                        else if (6 === cb[0] && B.label < ha[1]) B.label = ha[1], ha = cb;
                        else if (ha && B.label < ha[2]) B.label = ha[2], B.da.push(cb);
                        else {
                            ha[2] && B.da.pop();
                            B.J.pop();
                            continue
                        }
                }
                cb = h.call(e, B)
            } catch (Jb) {
                cb = [6, Jb], Fa = 0
            } finally {
                V = ha = 0
            }
            if (cb[0] & 5) throw cb[1];
            return {
                value: cb[0] ? cb[1] : void 0,
                done: !0
            }
        }
        var B = {
                label: 0,
                B: function() {
                    if (ha[0] & 1) throw ha[1];
                    return ha[1]
                },
                J: [],
                da: []
            },
            V, Fa, ha, Ya;
        return Ya = {
                next: m(0),
                "throw": m(1),
                "return": m(2)
            }, "function" === typeof Symbol && (Ya[Symbol.iterator] = function() {
                return this
            }),
            Ya
    }

    function Y(e, h, m) {
        if (m || 2 === arguments.length)
            for (var r = 0, B = h.length, V; r < B; r++) !V && r in h || (V || (V = Array.prototype.slice.call(h, 0, r)), V[r] = h[r]);
        return e.concat(V || Array.prototype.slice.call(h))
    }

    function Na(e) {
        return (new TextEncoder).encode(e)
    }

    function La(e) {
        e = "string" === typeof e ? Na(e) : e;
        for (var h = -1, m = 0; m < e.length;) h = h >>> 8 ^ nd[(h ^ e[m++]) & 255];
        return (h ^ -1) >>> 0
    }

    function ea(e, h) {
        void 0 === h && (h = []);
        var m = ed.dT_;
        m = (null === m || void 0 === m ? 0 : m.iIO) ? m.iIO : null;
        return !(null === m || void 0 === m || !m(e, h))
    }

    function S() {}

    function P(e) {
        return e && "nodeType" in e
    }

    function ma(e) {
        return e && "IMG" === e.nodeName
    }

    function Ja(e) {
        return e && "LINK" === e.nodeName
    }

    function O(e) {
        return e && e.nodeType && 1 === e.nodeType
    }

    function ca(e) {
        return e && "SELECT" === e.nodeName
    }

    function I(e) {
        return e && "INPUT" === e.nodeName
    }

    function J(e) {
        return e && "STYLE" === e.nodeName
    }

    function fa(e) {
        return e.type === CSSRule.IMPORT_RULE
    }

    function Z(e) {
        Qc = e
    }

    function Aa() {
        return "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
    }

    function W() {
        if (Aa()) return !1;
        var e = ed.dT_,
            h = null === e || void 0 === e ? void 0 : e.tdto();
        return e !== h
    }

    function Ca(e, h) {
        return -1 !== e.indexOf(h)
    }

    function bb(e) {
        var h = Al;
        Vj.set(h, e);
        setTimeout(function() {
            Vj.delete(h)
        }, 1E3);
        Al++;
        return new zg({
            H: "pair",
            query: "pair-id",
            result: h
        })
    }

    function lb(e) {
        Wj && (If.Dd(self, Wj), Wj = null);
        return new yb(function(h) {
            Wj = If.Vc(self, function(m, r, B) {
                "pair" === m.H && "pair-id" === m.query && (e.send(new zg({
                    H: "pair",
                    query: "pair-ack",
                    result: m.result
                })), B(), h())
            });
            e.send(new zg({
                H: "pair",
                query: "pair-req"
            }))
        })
    }

    function Ab(e) {
        return new yb(function(h) {
            e.wb(function(m) {
                if ("pair" ===
                    m.H && Ca(["pair-req", "pair-ack"], m.query))
                    if ("pair-ack" === m.query && "number" === typeof m.result)(m = Vj.get(m.result)) && h(m);
                    else
                        for (If.Cb(self, bb(self)), m = 0; m < ed.frames.length; m++) If.Cb(ed.frames[m], bb(ed.frames[m]))
            })
        })
    }

    function oa(e) {
        return new yb(function(h) {
            e.wb(function(m) {
                "handshake" === m.H && Ca(["connect-ack", "connect-pair"], m.query) && h({
                    Pg: "connect-pair" === m.query
                })
            })
        })
    }

    function ub(e) {
        return new yb(function(h, m) {
            setTimeout(m, e)
        })
    }

    function kc(e) {
        return va(this, void 0, void 0, function() {
            var h, m, r;
            return U(this, function(B) {
                switch (B.label) {
                    case 0:
                        h = new zg({
                            H: "handshake",
                            query: "connect-req"
                        }), m = new If, If.Cb(e, h, {
                            transfer: [m.Yg]
                        }), B.label = 1;
                    case 1:
                        return B.J.push([1, 5, , 6]), [4, yb.race([oa(m), ub(1E3)])];
                    case 2:
                        return (r = B.B()) && r.Pg ? [4, yb.race([lb(m), ub(1E3)])] : [3, 4];
                    case 3:
                        B.B(), B.label = 4;
                    case 4:
                        return [3, 6];
                    case 5:
                        throw B.B(), m.port.close(), Error("timeout");
                    case 6:
                        return [2, m]
                }
            })
        })
    }

    function Gc(e, h) {
        void 0 === h && (h = 15);
        return va(this, void 0, void 0, function() {
            var m;
            return U(this, function(r) {
                switch (r.label) {
                    case 0:
                        m =
                            0, r.label = 1;
                    case 1:
                        if (!(m < h)) return [3, 6];
                        r.label = 2;
                    case 2:
                        return r.J.push([2, 4, , 5]), [4, kc(e)];
                    case 3:
                        return [2, r.B()];
                    case 4:
                        return r.B(), m++, [3, 5];
                    case 5:
                        return [3, 1];
                    case 6:
                        throw Error("connect handshake failed");
                }
            })
        })
    }

    function Mc(e, h) {
        If.Vc(e, function(m, r) {
            return va(this, void 0, void 0, function() {
                var B, V, Fa, ha;
                return U(this, function(Ya) {
                    switch (Ya.label) {
                        case 0:
                            if ("handshake" !== m.H || "connect-req" !== m.query) return [2];
                            B = -1 < Object.prototype.toString.call(e).indexOf("Worker") ? e : r.source;
                            V = "undefined" ===
                                typeof B;
                            Fa = r.ports[0];
                            ha = new If(Fa);
                            ha.send(new zg({
                                H: "handshake",
                                query: V ? "connect-pair" : "connect-ack"
                            }));
                            if (!V) return [3, 4];
                            Ya.label = 1;
                        case 1:
                            return Ya.J.push([1, 3, , 4]), [4, Ab(ha)];
                        case 2:
                            return B = Ya.B(), [3, 4];
                        case 3:
                            return Ya.B(), [3, 4];
                        case 4:
                            return B && h(B, ha), [2]
                    }
                })
            })
        })
    }

    function mb(e) {
        for (var h = [], m = 1; m < arguments.length; m++) h[m - 1] = arguments[m];
        try {
            JSON.stringify(h)
        } catch (r) {}
    }

    function Rb(e, h, m) {
        return va(this, void 0, void 0, function() {
            var r, B, V, Fa, ha, Ya, cb;
            return U(this, function(Jb) {
                switch (Jb.label) {
                    case 0:
                        if ("undefined" ===
                            typeof m.result) return [3, 1];
                        r = (nj.get(m.id) || {}).resolve;
                        nj.delete(m.id);
                        if (!r) return mb("Resolver not found for message", m), [2];
                        r(m.result);
                        return [3, 5];
                    case 1:
                        if (!oj.has(m.H)) return [3, 4];
                        B = oj.get(m.H);
                        V = Ca(Nk, B);
                        return B ? [4, B.apply(h, Y([e], m.query, !0))] : [3, 3];
                    case 2:
                        Fa = Jb.B(), ha = V ? Fa : [Fa, []], Ya = ha[0], cb = ha[1], m.kh(Ya), h.send(m, cb), Jb.label = 3;
                    case 3:
                        return [3, 5];
                    case 4:
                        mb("Invalid Protocol Message", m), Jb.label = 5;
                    case 5:
                        return [2]
                }
            })
        })
    }

    function Hc() {
        Tg = new WeakMap;
        Mk = new WeakMap;
        nj = new Map;
        oj = new Map;
        Vj = new Map
    }

    function oc() {
        Tg && nj && oj || Hc()
    }

    function lc(e) {
        e = void 0 === e ? {} : e;
        var h = e.sc,
            m = void 0 === h ? void 0 : h;
        e = e.Lh;
        var r = void 0 === e ? !1 : e;
        return va(this, void 0, void 0, function() {
            var B, V, Fa;
            return U(this, function(ha) {
                switch (ha.label) {
                    case 0:
                        Lk = self;
                        Hc();
                        if (!(Aa() || W() || r)) return [3, 4];
                        B = W() ? self.parent : self;
                        ha.label = 1;
                    case 1:
                        return ha.J.push([1, 3, , 4]), [4, Gc(B)];
                    case 2:
                        return V = ha.B(), Tg.set(B, V), V.wb(function(Ya) {
                            Rb(B, V, Ya)
                        }), [3, 4];
                    case 3:
                        return Fa = ha.B(), [2, {
                            yf: !1,
                            xf: "".concat(Fa)
                        }];
                    case 4:
                        if (!m) return [3,
                            6
                        ];
                        Lk = m;
                        return [4, new yb(function(Ya) {
                            Mc(m, function(cb, Jb) {
                                Tg.set(cb, Jb);
                                Jb.wb(function(jc) {
                                    Rb(cb, Jb, jc)
                                });
                                Ya()
                            })
                        })];
                    case 5:
                        ha.B(), ha.label = 6;
                    case 6:
                        return Aa() || r || Mc(self, function(Ya, cb) {
                            Tg.set(Ya, cb);
                            cb.wb(function(Jb) {
                                Rb(Ya, cb, Jb)
                            })
                        }), [2, {
                            yf: !0,
                            xf: ""
                        }]
                }
            })
        })
    }

    function Vb(e, h, m) {
        m = (void 0 === m ? {} : m).transfer;
        m = void 0 === m ? !1 : m;
        oc();
        oj.set(e, h);
        m && Nk.push(h)
    }

    function tb(e, h, m) {
        var r = new zg({
            H: h,
            query: m
        });
        return new yb(function(B, V) {
            nj.set(r.id, {
                resolve: B,
                reject: V
            });
            e.send(r)
        })
    }

    function tc(e) {
        for (var h = [], m = 1; m < arguments.length; m++) h[m - 1] = arguments[m];
        oc();
        m = Tg.get(Lk);
        return m ? tb(m, e, h) : (mb("sendQueryToWorker - Channel not found for query", e, h), yb.resolve())
    }

    function Xa(e) {
        for (var h = [], m = 1; m < arguments.length; m++) h[m - 1] = arguments[m];
        oc();
        m = Tg.get(self.parent);
        return m ? tb(m, e, h) : (mb("sendQueryToParent - Channel not found for query", e, h), yb.resolve())
    }

    function fc(e, h) {
        for (var m = [], r = 2; r < arguments.length; r++) m[r - 2] = arguments[r];
        oc();
        if (!h || !h.contentWindow) return mb("sendQueryToIframe - Iframe without content",
            e, m), yb.resolve();
        r = Tg.get(h.contentWindow);
        return r ? tb(r, e, m) : (mb("sendQueryToIframe - Channel not found for query", e, m), yb.resolve())
    }

    function Gb(e) {
        for (var h = [], m = 1; m < arguments.length; m++) h[m - 1] = arguments[m];
        oc();
        m = [];
        for (var r = 0; r < self.frames.length; r++) {
            var B = Tg.get(self.frames[r]);
            B ? m.push(tb(B, e, h)) : mb("sendQueryToChildren - Channel not found for query", e, h)
        }
        return yb.all(m)
    }

    function ec(e) {
        return void 0 !== Bl[e] ? Pe(e) : void 0 !== fm[e] ? bd(e) : void 0 !== gm[e] ? hc.Ad(e) : null
    }

    function C() {
        return va(this,
            void 0, void 0,
            function() {
                var e, h;
                return U(this, function(m) {
                    switch (m.label) {
                        case 0:
                            return e = new Map, h = new Map, pj = new Map, Vb("config", function(r, B, V) {
                                if (r = e.get(B)) {
                                    if ("undefined" === typeof V) return dc[r];
                                    dc[r] = V
                                }
                            }), [4, yb.all(sb.dT_.aM(Object.getOwnPropertyNames(dc), function(r) {
                                return va(this, void 0, void 0, function() {
                                    var B, V, Fa, ha;
                                    return U(this, function(Ya) {
                                        switch (Ya.label) {
                                            case 0:
                                                return B = dc[r], V = B.name, ha = (Fa = B.Bi) ? ec(Fa) : B.initial, Fa && h.set(Fa, r), W() ? [4, Xa("config", V)] : [3, 2];
                                            case 1:
                                                ha = Ya.B(), Ya.label =
                                                    2;
                                            case 2:
                                                return e.set(V, r), pj.set(V, []), Object.defineProperty(dc, "__".concat(r), {
                                                    writable: !0,
                                                    value: ha
                                                }), Object.defineProperty(dc, r, {
                                                    enumerable: !0,
                                                    get: function() {
                                                        return dc["__".concat(r)]
                                                    },
                                                    set: function(cb) {
                                                        dc["__".concat(r)] !== cb && (dc["__".concat(r)] = cb, Ga(V, cb))
                                                    }
                                                }), [2, null]
                                        }
                                    })
                                })
                            }))];
                        case 1:
                            return m.B(), Dd("CONFIG_UPDATE", function(r) {
                                h.forEach(function(B, V) {
                                    (V = r.detail[V]) && (dc[B] = V)
                                })
                            }), [2]
                    }
                })
            })
    }

    function pa(e, h) {
        var m;
        pj.has(e) && (null === (m = pj.get(e)) || void 0 === m ? void 0 : m.push(h))
    }

    function Ga(e, h) {
        Gb("config",
            e, h);
        (e = pj.get(e)) && sb.dT_.fE(e, function(m) {
            m(h)
        })
    }

    function ja(e) {
        var h = [];
        if (!e) return h;
        sb.dT_.fE(e.split(","), function(m) {
            try {
                var r = new RegExp(decodeURIComponent(m));
                h.push(r)
            } catch (B) {}
        });
        return h
    }

    function Cb(e, h) {
        for (var m = 0; m < h.length; m++)
            if (h[m].test(e)) return !0;
        return !1
    }

    function Za() {
        return Eh("dtsrVID")
    }

    function v() {
        var e = dc.Aa;
        "string" === typeof e && Gf("dtsrVID", e)
    }

    function F() {
        window.opener && !Ei("dtsrTIDrSt") && (ij("dtsrTIDrSt", "true"), ij("dtsrTID", Ac() + ""));
        var e = Ei("dtsrTID");
        if (e) return e;
        e = Ac() + "";
        ij("dtsrTID", e);
        return e
    }

    function D() {
        var e = Eh("dtsrE");
        if (e) {
            e = e.split("=");
            var h = e[1];
            if (e[0] === ng()) return h
        }
        return null
    }

    function N(e) {
        e = "".concat(ng(), "=").concat(e);
        Gf("dtsrE", e)
    }

    function aa(e) {
        var h;
        if (!e && Gh) return Gh;
        Gh = (h = {}, h.css = 0, h.image = 0, h.font = 0, h);
        e = sb.dT_.gSC();
        h = /(css_\d)|(font_\d)|(image_\d)/g;
        var m = "_";
        "v" !== e.charAt(0) && (h = /(css=\d)|(font=\d)|(image=\d)/g, m = "=");
        e = e.match(h);
        if (!e) return Gh;
        dd(e, function(r) {
            var B = r.split(m);
            r = B[0];
            B = B[1];
            0 <= hm.indexOf(r) && (Gh[r] = parseInt(B))
        });
        return Gh
    }

    function H() {
        return !!Ei("dtsrRCDM")
    }

    function na(e) {
        hh && ji && qj || za();
        return hh.has(e) || ji.has(e)
    }

    function R(e) {
        hh && ji && qj || za();
        return hh.get(e) || ji.get(e) || null
    }

    function ra(e) {
        var h = R(e);
        if (null !== h) e = h;
        else {
            ++Yj;
            h = "".concat(Yj);
            try {
                hh.set(e, h)
            } catch (m) {
                ji.set(e, h)
            }
            e = h
        }
        return e
    }

    function za() {
        Yj = 0;
        hh = new WeakMap;
        ji = new Map;
        qj = new Map
    }

    function $a() {
        Aa() || (ih = new Map, W() || (Vb("perfstart", function(e, h) {
            e = h.i;
            ih.has(e) || ih.set(e, []);
            ih.get(e).push(h)
        }), Vb("perfend", function(e, h) {
            var m = ih.get(h.i);
            if (!m || !m.length) return mb("PerformanceRecord not matched to any started metric", h);
            e = gf;
            var r = m.shift(),
                B;
            r.d || (r.d = []);
            h.d || (h.d = []);
            m = (B = {}, B.i = h.i, B.t = h.t - r.t, B.d = r.d.concat(h.d), B.a = r.a || h.a, B);
            e(m)
        })), Vb("perf", function(e, h) {
            W() ? Xa("perf", h) : gf(h)
        }))
    }

    function vb(e, h, m) {
        var r;
        void 0 === h && (h = []);
        void 0 === m && (m = !1);
        var B = (r = {}, r.i = e, r.t = qh(e), r.d = h, r.a = m, r);
        W() ? Xa("perf", B) : gf(B)
    }

    function Wb(e) {
        if (!e) return !1;
        void 0 === Hi && (Hi = pc("iIO"));
        return Ca(Xj, e.nodeType) && !(e.nodeType === Node.TEXT_NODE &&
            null !== e.textContent && /^[\t\n\r ]+$/.test(e.textContent)) && !(e && "SCRIPT" === e.nodeName) && !("script" === e.nodeName && Hi(e, 23)) && !Hi(e, 24) && !(e && "IFRAME" === e.nodeName && Hi(e.parentNode, 25))
    }

    function qb(e) {
        return e && O(e) ? !!e.shadowRoot : !1
    }

    function Fb(e) {
        return e ? pc("iIO")(e, 27) : !1
    }

    function Zb(e) {
        return e && "TEXTAREA" === e.nodeName || I(e) && !Ca(Dl, e.type.toLowerCase())
    }

    function wb(e) {
        return I(e) && Ca(Dl, e.type.toLowerCase())
    }

    function Xb(e, h) {
        var m;
        if (m = !Ca(im, h)) m = !(I(e) && "file" === e.type.toLowerCase() && "value" ===
            h);
        if (m = m && !(Zb(e) && "value" === h) && !(ca(e) && "value" === h) && !(wb(e) && "checked" === h) && !(e && "OPTION" === e.nodeName && "selected" === h)) m = !(I(e) && "hidden" === e.type.toLowerCase() && "value" === h);
        return m && !(Ja(e) && "integrity" === h) && "srcdoc" !== h
    }

    function Sc(e) {
        try {
            if ("" === e) throw Error("Rule is an empty string");
            sj.matchesSelector(document.documentElement, e);
            return !0
        } catch (h) {
            return console.warn("Masking selector evaluation error: " + h.name, h), !1
        }
    }

    function ye(e) {
        e.rb = e.rb.filter(function(h) {
            return Sc(h)
        });
        e.pb =
            e.pb.filter(function(h) {
                return Sc(h)
            });
        e.ub = e.ub.filter(function(h) {
            return Sc(h)
        });
        return e
    }

    function ze(e) {
        var h = {
            nb: !0,
            rb: [],
            pb: [],
            ub: [],
            Od: [],
            version: "1"
        };
        if ("undefined" === typeof e || "" === e) return h;
        var m = decodeURIComponent(e).split(",");
        e = m[0];
        var r = m[1],
            B = m[2],
            V = m[3];
        m = m[4];
        "1" === e && (h.version = e);
        if ("1" === r || "0" === r) h.nb = "1" === r;
        "" !== B && "undefined" !== typeof B && (h.rb = decodeURIComponent(B).split(";"));
        "" !== V && "undefined" !== typeof V && (h.pb = decodeURIComponent(V).split(";").map(function(Fa) {
            Fa = Fa.split("&");
            var ha = Fa[0];
            "undefined" !== typeof Fa[1] && h.ub.push(ha);
            return ha
        }));
        if ("" !== m && "undefined" !== typeof m) try {
            h.Od = decodeURIComponent(m).split(";").map(function(Fa) {
                if ("" === Fa) throw Error("RegExp rule is an empty string");
                return new RegExp(Fa)
            })
        } catch (Fa) {
            console.warn("Masking attribute rule error: " + Fa.name, Fa)
        }
        return ye(h)
    }

    function Nd(e) {
        void 0 === e && (e = []);
        var h = [];
        e.forEach(function(m) {
            var r = m.split("/");
            m = r[1];
            r = Number(r[0]);
            try {
                if (0 === r) {
                    var B = m.length - 1,
                        V = m;
                    m[B] === fk.Hd && (V = m.substr(0, B));
                    sj.matchesSelector(document.documentElement,
                        V)
                } else 1 === r && new RegExp(m);
                h.push(mm.create(r, m))
            } catch (Fa) {}
        });
        return h
    }

    function sc(e, h) {
        for (h = e(h); h;) {
            if (Wb(h)) return h;
            h = e(h)
        }
    }

    function yc(e, h) {
        "addNode" === e && ra(h);
        var m = R(h);
        if (!m) return null;
        m = {
            I: m
        };
        if ("addNode" === e || "updateNode" === e) h.parentNode && (yd() && Fb(h.parentNode) ? m.ga = R(h.parentNode.host) : m.ga = R(h.parentNode)), e = sc(function(r) {
            if (P(r.previousSibling)) return r.previousSibling;
            if (yd() && Fb(r.parentNode)) return r.parentNode.host.lastChild || void 0
        }, h), h = sc(function(r) {
            var B;
            if (P(r.nextSibling)) return r.nextSibling;
            if (yd() && qb(r.parentNode)) return (null === (B = r.parentNode.shadowRoot) || void 0 === B ? void 0 : B.firstChild) || void 0
        }, h), m.ja = e ? R(e) : null, m.na = h ? R(h) : null;
        return m
    }

    function Kc(e, h, m) {
        var r = yc(e, h);
        if (r) switch (e) {
            case "addNode":
                return r.nodeName = "http://www.w3.org/2000/svg" === h.namespaceURI ? h.nodeName : h.nodeName.toLowerCase(), null !== h.nodeValue && (r.nodeValue = h.nodeValue), r.namespaceURI = null !== h.namespaceURI ? h.namespaceURI : void 0, r.ia = Td.Ua(h), r;
            case "updateNode":
                return r.ia = Td.Ua(h), r;
            case "removeNode":
                return r;
            case "updateNodeValue":
                return null !== h.nodeValue && (r.nodeValue = h.nodeValue), r;
            case "updateAttribute":
                if (m) return r.attributeName = m.name, r.Pa = m.value, r.ia = Td.zd(h, m.name), r
        }
    }

    function od(e, h) {
        e && (h.prototype.toJSON = e)
    }

    function ya(e) {
        var h = new Map,
            m = Date.prototype.toJSON;
        [Number, Boolean, String, Array, Object].forEach(function(r) {
            h.set(r, r.prototype.toJSON);
            delete r.prototype.toJSON
        });
        Date.prototype.toJSON = Hb;
        try {
            return JSON.stringify(e)
        } finally {
            h.forEach(od), Date.prototype.toJSON = m
        }
    }

    function G(e, h) {
        return function() {
            for (var m = [], r = 0; r < arguments.length; r++) m[r] = arguments[r];
            h && ia(h);
            return e.apply(void 0, m)
        }
    }

    function ia(e) {
        return 0 === sb.dT_.aFr(sb.dT_.oK(e), function(h) {
            return void 0 === e[h]
        }).length
    }

    function xa() {
        var e = [];
        Cg.store.forEach(function(h) {
            e.push(h)
        });
        return e
    }

    function Ba(e) {
        e = e && e.length;
        return "number" === typeof e && -1 < e
    }

    function Da(e, h, m) {
        return "function" === typeof h ? (h = void 0 === m ? h : h.bind(m), sb.dT_.aM(e, h)) : e
    }

    function Ma(e, h, m) {
        function r() {}
        if ("function" === typeof Array.from) return h ? Array.from(e, h, m) : Array.from(e);
        if (Array.isArray(e)) return Da(e, h, m);
        if (Ba(e)) return Da([].slice.call(e), h, m);
        var B = ed.Map || r,
            V = ed.Symbol || r,
            Fa = [];
        sb.dT_.iNF(ed.Set || r) && pc("iIO")(e, 19) && e.forEach(function(ha) {
            Fa.push(ha)
        });
        sb.dT_.iNF(B) && pc("iIO")(e, 20) && e.forEach(function(ha, Ya) {
            Fa.push([Ya, ha])
        });
        if (sb.dT_.iNF(V) && ed.Symbol && "function" === typeof e[Symbol.iterator] && 0 === Fa.length)
            for (e = e[Symbol.iterator](), B = e.next(); !B.done;) Fa.push(B.value), B = e.next();
        return Da(Fa, h, m)
    }

    function sa(e, h, m, r) {
        e = Ma(e.childNodes);
        dd(e, function(B) {
            id(B,
                h, m, r);
            B = {
                type: "addNode",
                nodeName: "sdw.s",
                nodeValue: ra(B)
            };
            B = new pf(B);
            h.add(B)
        })
    }

    function Ha(e, h, m, r) {
        function B(cb) {
            for (var Jb = [], jc = 1; jc < arguments.length; jc++) Jb[jc - 1] = arguments[jc];
            return va(V, void 0, void 0, function() {
                var Ud;
                return U(this, function(Vd) {
                    switch (Vd.label) {
                        case 0:
                            return [4, m.apply(void 0, Y([cb], Jb, !1))];
                        case 1:
                            return Ud = Vd.B(), void 0 !== ha && void 0 !== Ud && null !== Ud && ha(Ud), [2]
                    }
                })
            })
        }
        var V = this;
        r = void 0 === r ? {} : r;
        var Fa = r.Ia,
            ha = void 0 === Fa ? void 0 : Fa;
        Fa = r.Ed;
        Fa = void 0 === Fa ? void 0 : Fa;
        r = r.Hf;
        var Ya = void 0 === r ? !1 : r;
        Fa && (B = Fa(B));
        r = {
            listener: B,
            Hf: Ya
        };
        sb.dT_.fE(h.split(" "), function(cb) {
            Sh(e, cb, B, Ya)
        });
        return r
    }

    function ob(e, h, m) {
        sb.dT_.fE(h.split(" "), function(r) {
            mg(e, r, m.listener, m.Hf)
        })
    }

    function Pa(e) {
        if (Zb(e) || ca(e)) var h = {
            name: "value",
            value: e.value
        };
        else if (wb(e)) h = {
            name: "checked",
            value: e.checked ? "" : void 0
        };
        else if (e && "OPTION" === e.nodeName) h = {
            name: "selected",
            value: e.selected ? "" : void 0
        };
        else return null;
        return Ag.create("updateAttribute", {
            node: e,
            Gb: h
        })
    }

    function gb(e) {
        if (O(e.target)) {
            var h =
                new Wd(Ac());
            ca(e.target) ? dd(e.target.querySelectorAll("option"), function(m) {
                (m = Pa(m)) && h.add(m)
            }) : (e = Pa(e.target)) && h.add(e);
            return h
        }
    }

    function gc(e, h) {
        (e = Pa(e)) && h(e)
    }

    function Tb(e, h) {
        void 0 === h && (h = document.documentElement);
        e = Ha(h, "input change", gb, {
            Ia: e
        });
        h === document.documentElement && (Yh = e);
        return e
    }

    function Lb(e, h) {
        void 0 === h && (h = Yh);
        ob(e, "input change", h)
    }

    function ac(e) {
        if (!e.size) return yb.resolve();
        e = [e.Fa()];
        return W() ? Xa.apply(void 0, Y(["mutations"], e, !1)) : tc.apply(void 0, Y(["mutations"],
            e, !1))
    }

    function Oc(e) {
        return va(this, void 0, void 0, function() {
            return U(this, function(h) {
                switch (h.label) {
                    case 0:
                        return W() ? [4, Xa("events", e.Mi())] : [3, 2];
                    case 1:
                        return h.B(), [2];
                    case 2:
                        return jb.listener && jb.listener(e), [2]
                }
            })
        })
    }

    function cd(e) {
        if (!e) return null;
        ug || (ug = new WeakMap);
        var h = ug.get(e);
        if (h) return h.I;
        h = document.querySelectorAll("iframe");
        for (var m = 0; m < h.length; m++)
            if (h[m].contentWindow === e) {
                var r = R(h[m]);
                ug.set(e, {
                    I: r,
                    frame: h[m]
                });
                return r
            }
        return null
    }

    function wc(e, h) {
        var m = (void 0 === h ? {} : h).context,
            r = cd(m);
        Uc(yi);
        e.Dh(function(B) {
            B.node && B.Gf();
            if ("undefined" === typeof B.I) return !0;
            if (!m) return !1;
            if (!r) return !0;
            B.I = "".concat(r, ".").concat(B.I);
            B.ga ? B.ga = "".concat(r, ".").concat(B.ga) : B.ga = r;
            B.na && (B.na = "".concat(r, ".").concat(B.na));
            B.ja && (B.ja = "".concat(r, ".").concat(B.ja));
            return !1
        });
        vb(yi, [
            ["mutations", e.size]
        ], !0);
        return ac(e)
    }

    function Cc(e, h) {
        var m = (void 0 === h ? {} : h).context;
        return va(this, void 0, void 0, function() {
            var r, B;
            return U(this, function(V) {
                switch (V.label) {
                    case 0:
                        r = cd(m);
                        if (m && !r) return [2];
                        if (m && r && (e.pa = "".concat(r, ".").concat(e.pa), Ca(["click", "move"], e.type))) {
                            ug || (ug = new WeakMap);
                            (V = ug.get(m)) ? (V = V.frame.getBoundingClientRect(), B = {
                                top: Math.round(V.top),
                                left: Math.round(V.left)
                            }) : B = void 0;
                            if (void 0 === B || void 0 === e.x || void 0 === e.y) return [2];
                            e.x += B.left;
                            e.y += B.top
                        }
                        return [4, Oc(e)];
                    case 1:
                        return V.B(), [2]
                }
            })
        })
    }

    function Fe(e) {
        return va(this, void 0, void 0, function() {
            var h, m, r, B;
            return U(this, function(V) {
                switch (V.label) {
                    case 0:
                        return h = e.src, [4, fc("iframeLocation", e)];
                    case 1:
                        return (m = V.B()) && "about:blank" !== m && m !== h && (h = m), r = new Wd(Ac()), B = Ag.create("updateAttribute", {
                            node: e,
                            Gb: {
                                name: "src",
                                value: h
                            }
                        }), r.add(B), wc(r), [2]
                }
            })
        })
    }

    function oe(e, h) {
        var m = mk.sh(e);
        m && $c(h, e, {
            name: hl,
            value: ""
        });
        return m
    }

    function hd(e) {
        var h, m = !1,
            r = e.tagName.toLowerCase();
        e = e.parentElement;
        var B = null !== (h = null === e || void 0 === e ? void 0 : e.tagName.toLowerCase()) && void 0 !== h ? h : "";
        if (!e) return !0;
        "source" === r && "picture" === B && dd(e.childNodes, function(V) {
            ma(V) && mk.sh(V) && (m = !0)
        });
        return m
    }

    function $c(e,
        h, m) {
        h = Ag.create("updateAttribute", {
            node: h,
            Gb: m
        });
        e.add(h)
    }

    function Wc(e, h) {
        if (O(e)) {
            var m = !1;
            ma(e) && (m = oe(e, h));
            "source" === e.tagName.toLowerCase() && (m = hd(e));
            dd(e.attributes, function(r) {
                !Xb(e, r.name) || m && -1 !== il.indexOf(r.name) || (e && "IFRAME" === e.nodeName && "src" === r.name && Fe(e).catch(function() {}), $c(h, e, r))
            });
            ma(e) && e.complete && Ae(e, h);
            gc(e, function(r) {
                h.add(r)
            })
        }
    }

    function Ae(e, h) {
        void 0 === h && (h = new Wd(Ac()));
        if (!ma(e) || !e.parentElement || "picture" === e.parentElement.tagName.toLowerCase()) return h;
        $c(h, e, {
            name: "data-dt-natural-dimensions",
            value: "".concat(e.naturalWidth + "", "x").concat(e.naturalHeight + "")
        });
        return h
    }

    function id(e, h, m, r) {
        if (Wb(e) && (!e.parentNode || Wb(e.parentNode))) {
            var B = Ag.create(na(e) ? "updateNode" : "addNode", {
                node: e
            });
            if (B) {
                B.node && ma(B.node) && !B.node.complete && -1 === r.indexOf(B.node) && r.push(B.node);
                h.add(B);
                if (e && "IFRAME" === e.nodeName && (B = e.getAttribute("data-dt-last-src"))) {
                    var V = Ag.create("updateAttribute", {
                        node: e,
                        Gb: {
                            name: "src",
                            value: B
                        }
                    });
                    e.removeAttribute("data-dt-last-src")
                }
                Wc(e,
                    h);
                V && h.add(V);
                if (Ja(e)) e.sheet ? m.push(e.sheet) : e.addEventListener("load", Tc);
                else if (J(e) && e.sheet) m.push(e.sheet);
                else
                    for (yd() && qb(e) ? (qb(e) && ((V = Ig(e)) ? Be(V, h) : (V = {
                            host: e,
                            gd: !1
                        }, Ib.push(V), Qa(V), n(V), Ad(V, h), Be(V, h))), V = e.shadowRoot.firstChild, sa(e, h, m, r)) : V = e.firstChild; V;) id(V, h, m, r), V = V.nextSibling
            }
        }
    }

    function zd(e, h) {
        void 0 === h && (h = document.documentElement);
        if (h.parentNode) {
            Uc("snapshot");
            var m = new Wd(Ac(), hc.Nb("srficros")),
                r = [],
                B = [];
            id(h, m, r, B);
            W() || (h = Xh.getEntries(), dd(h, function(V) {
                m.add(V);
                Xh.remove(V)
            }), ed !== ed.top && (h = new pf({
                type: "addNode",
                nodeName: "tf.iframe",
                nodeValue: ""
            }), m.add(h)));
            vb("snapshot", [
                ["nodes", m.size]
            ], !0);
            e(m, r, B)
        }
    }

    function jd(e) {
        var h = Function.prototype.toString.call(e);
        return !!e && /{\s+\[native code]/.test(h)
    }

    function pd(e, h) {
        var m = e.prototype,
            r = new e.Qh(h);
        dd(Object.keys(m), function(B) {
            r[B] = m[B].bind(r)
        });
        return r
    }

    function de(e, h) {
        "function" === typeof Eg && Eg(e, h)
    }

    function Hd(e) {
        var h = [],
            m = new Wd(Ac()),
            r = [],
            B = [],
            V = [],
            Fa = [];
        dd(e, function(ha) {
            J(ha.target) && ha.target.sheet &&
                h.push(ha.target.sheet);
            ha.target && ha.target.parentNode && J(ha.target.parentNode) && ha.target.parentNode.sheet && h.push(ha.target.parentNode.sheet);
            "childList" === ha.type ? (dd(ha.removedNodes, function(Ya) {
                V.push(Ya)
            }), dd(ha.addedNodes, function(Ya) {
                B.push(Ya)
            })) : Fa.push(ha)
        });
        dd(sb.dT_.aFr(V, na), function(ha) {
            m.add(Ag.create("removeNode", {
                node: ha,
                Gb: void 0
            }));
            yd() && qb(ha) && Xe(ha)
        });
        e = sb.dT_.aFr(B, function(ha) {
            return !!(Wb(ha) && ha.parentNode && na(ha.parentNode))
        });
        dd(e, function(ha) {
            zd(function(Ya, cb, Jb) {
                h.push.apply(h,
                    cb);
                r.push.apply(r, Jb);
                Ya.forEach(function(jc) {
                    m.add(jc)
                })
            }, ha)
        });
        e = sb.dT_.aFr(Fa, function(ha) {
            return na(ha.target)
        });
        dd(e, function(ha) {
            switch (ha.type) {
                case "characterData":
                    m.add(Ag.create("updateNodeValue", {
                        node: ha.target,
                        Gb: void 0
                    }));
                    break;
                case "attributes":
                    if (!O(ha.target) || !ha.attributeName || !Xb(ha.target, ha.attributeName)) break;
                    var Ya = ha.target.getAttribute(ha.attributeName),
                        cb = "data-dt-last-src" === ha.attributeName,
                        Jb = ha.target,
                        jc = ha.attributeName;
                    ma(Jb) && "src" === jc && ff.sh(Jb) || cb || m.add(Ag.create("updateAttribute", {
                        node: ha.target,
                        Gb: {
                            name: ha.attributeName,
                            value: null !== Ya ? Ya : void 0
                        }
                    }));
                    "src" !== ha.attributeName || !ma(ha.target) || ha.target.parentNode && "picture" === ha.target.parentNode.nodeName.toLowerCase() || (ha = ha.target, ha.complete ? Ae(ha, m) : r.push(ha));
                    break;
                default:
                    mb("Unexpected mutation type", {
                        type: ha.type
                    })
            }
        });
        return {
            Ph: m,
            styleSheets: h,
            aj: r
        }
    }

    function pe(e) {
        dd(e, function(h) {
            h.complete || (h.removeEventListener("load", sd), h.addEventListener("load", sd), h.removeEventListener("error", sd), h.addEventListener("error",
                sd))
        })
    }

    function Rd() {
        dd(document.getElementsByTagName("img"), function(e) {
            e.removeEventListener("load", sd)
        })
    }

    function sd(e) {
        ma(e.target) && (e = Ae(e.target), de(e, []))
    }

    function Tc(e) {
        if (P(e.target)) {
            e = e.target;
            try {
                Ja(e) && e.sheet && de(new Wd(Ac()), [e.sheet]), e.removeEventListener("load", Tc)
            } catch (h) {}
        }
    }

    function Pd(e) {
        Uc("observe");
        var h = Hd(e);
        e = h.Ph;
        var m = h.styleSheets;
        h = h.aj;
        vb("observe", [
            ["mutations", e.size]
        ], !0);
        (0 < e.size || 0 < m.length) && de(e, m);
        0 < h.length && pe(h)
    }

    function Bd(e, h) {
        void 0 === h && (h = document.documentElement);
        "function" === typeof e && (lg = Cj.Si(Pd), Eg = e, lg.observe(h, fh), Tb(e), x(), yd() && sb.dT_.fE(Ib, n), pe(document.getElementsByTagName("img")))
    }

    function n(e) {
        lg && Eg && e && e.host.shadowRoot && (lg.observe(e.host.shadowRoot, fh), e.cj = Tb(Eg, e.host.shadowRoot))
    }

    function x() {
        ed.PerformanceObserver && (Th = new PerformanceObserver(y), Th.observe({
            entryTypes: ["resource"]
        }), setTimeout(function() {
            L(performance.getEntriesByType("resource"))
        }, 0))
    }

    function y(e) {
        L(e.getEntries())
    }

    function L(e) {
        for (var h = new Wd(Ac()), m = 0; m < e.length; m++) {
            var r =
                e[m],
                B = r.decodedBodySize,
                V = r.name;
            0 === r.transferSize && 0 === B && V.includes(".css") && V.startsWith(ed.location.origin) && h.add(new pf({
                type: "addNode",
                nodeName: "rl.fail",
                nodeValue: V
            }))
        }
        h.size && Eg && Eg(h)
    }

    function M() {
        if (lg) {
            var e = lg.takeRecords();
            if (e) {
                var h = Hd(e);
                e = h.Ph;
                h = h.styleSheets;
                0 < e.size && de(e, h)
            }
        }
    }

    function X(e) {
        e && e.host.shadowRoot && Lb(e.host.shadowRoot, e.cj)
    }

    function ka(e) {
        if (I(e) && "password" === e.type.toLowerCase()) {
            var h = e.value;
            return h ? h.replace(/./g, "*") : ""
        }
        var m = Qh.Kj(e),
            r = Qh.Jj(e);
        h = "INPUT" ===
            e.nodeName && "number" === e.getAttribute("type") ? "0" : "*";
        m || r ? (e = e.value, void 0 === h && (h = "*"), h = null !== e && "" !== e ? e.replace(/[^- :\u2013\/\u2014._;,()=!?|<>+%\u20ac$\u00a2\u00a5\u00a3\u20bd\u5143\u20a8\u20bf'"@&\u3002\u3001\]\[\n\r\\]/g, h) : e) : h = I(e) ? Ca(["radio", "checkbox"], e.type.toLowerCase()) ? e.checked : e.value : e.value;
        return h
    }

    function wa(e, h) {
        var m = e.target;
        void 0 === h && (h = Ac());
        if (Qh.rh(m)) return yb.resolve(null);
        e = ka(m);
        var r = yb,
            B = r.resolve,
            V = Ff,
            Fa = R(m);
        if (m.name) m = m.name;
        else if (m.id) m = "#".concat(m.id);
        else {
            var ha = m.tagName.toLowerCase();
            m = I(m) ? "<".concat(ha, ".").concat(m.type, ">") : "<".concat(ha, ">")
        }
        return B.call(r, new V("input", {
            pa: Fa,
            name: m,
            value: "string" === typeof e ? 5E3 >= e.length ? e : e.slice(0, -(e.length - 5E3)) : e,
            duration: Ac() - h
        }))
    }

    function Va(e, h) {
        void 0 === h && (h = document);
        e = Ha(h, "focus blur", wa, {
            Ia: e,
            Ed: function(m) {
                var r, B, V;
                return function(Fa) {
                    var ha = Fa.target;
                    O(ha) && (I(ha) || ha && "TEXTAREA" === ha.nodeName || ca(ha)) && ("blur" === Fa.type && ha === B && V !== ka(B) && m(Fa, r), B = ha, V = ka(B), r = Ac())
                }
            },
            Hf: !0
        });
        h ===
            document && (Ej = e);
        return e
    }

    function Qa(e) {
        if (e.host.shadowRoot && !e.gd) {
            var h = Va(Cc, e.host.shadowRoot);
            e.gd = !0;
            e.Eh = h
        }
    }

    function xb(e) {
        e.host.shadowRoot && e.gd && e.Eh && (ob(e.host.shadowRoot, "focus blur", e.Eh), e.gd = !1)
    }

    function Pb(e) {
        try {
            return null !== e.cssRules && 0 < e.cssRules.length
        } catch (h) {
            return !1
        }
    }

    function Dc(e) {
        try {
            var h = e.cssRules
        } catch (m) {
            h = null
        }
        return {
            url: null === e || void 0 === e ? void 0 : e.href,
            ownerNode: null === e || void 0 === e ? void 0 : e.ownerNode,
            cssRules: h
        }
    }

    function Ec(e) {
        e.createObjectStore("global");
        e.createObjectStore("visit")
    }

    function qc(e) {
        return yb.reject(Error("".concat(uh, " '").concat(e, "' on non-initialized db")))
    }

    function kd(e) {
        void 0 === e && (e = Ec);
        return Ce = new yb(function(h, m) {
            var r = indexedDB.open("dT_store", 1);
            r.onsuccess = function() {
                h(r.result)
            };
            r.onerror = function() {
                m(r.error)
            };
            r.onupgradeneeded = function() {
                var B = r.result;
                B.onversionchange = function() {
                    B.close()
                };
                e(B)
            }
        })
    }

    function Jd(e, h, m) {
        if (!Ce) return qc("put");
        var r = m || h.key;
        return Ce.then(function(B) {
            return new yb(function(V, Fa) {
                var ha =
                    B.transaction(e, "readwrite");
                ha.oncomplete = function() {
                    V()
                };
                ha.onerror = function() {
                    var cb, Jb, jc = null !== (cb = Ya.error) && void 0 !== cb ? cb : null === (Jb = null === Ya || void 0 === Ya ? void 0 : Ya.transaction) || void 0 === Jb ? void 0 : Jb.error;
                    Fa(jc)
                };
                ha.onabort = ha.onerror;
                ha = ha.objectStore(e);
                var Ya = r ? ha.put(h, r) : ha.put(h)
            })
        })
    }

    function Xd(e, h) {
        return Ce ? Ce.then(function(m) {
                return new yb(function(r, B) {
                    var V = m.transaction(e, "readonly").objectStore(e).get(h);
                    V.onsuccess = function() {
                        r(V.result)
                    };
                    V.onerror = function() {
                        B(V.error)
                    }
                })
            }) :
            qc("getByKey")
    }

    function vd(e) {
        return Ce ? Ce.then(function(h) {
            return new yb(function(m, r) {
                var B = [],
                    V = h.transaction(e, "readonly").objectStore(e).openCursor();
                V.onsuccess = function() {
                    var Fa = V.result;
                    Fa ? (B.push(Fa.value), Fa.continue()) : m(B)
                };
                V.onerror = function() {
                    r(V.error)
                }
            })
        }) : qc("getAll")
    }

    function fe(e, h) {
        return Ce ? Ce.then(function(m) {
            return new yb(function(r, B) {
                var V = m.transaction(e, "readwrite");
                V.oncomplete = function() {
                    r()
                };
                V.onerror = function() {
                    var ha, Ya, cb = null !== (ha = Fa.error) && void 0 !== ha ? ha : null ===
                        (Ya = null === Fa || void 0 === Fa ? void 0 : Fa.transaction) || void 0 === Ya ? void 0 : Ya.error;
                    B(cb)
                };
                V.onabort = V.onerror;
                var Fa = V.objectStore(e).delete(h)
            })
        }) : qc("remove")
    }

    function qe(e, h) {
        return Jd(e, h).catch(function() {
            var m = Ze(e);
            m.set(h.key, h);
            Ni.set(e, m)
        })
    }

    function Ua(e, h) {
        return Xd(e, h).then(function(m) {
            if (!m) throw Error("Record not found");
            return m
        }).catch(function() {
            return Ze(e).get(h)
        })
    }

    function Fg(e) {
        var h = Ma(Ze(e), function(m) {
            return m[1]
        });
        return vd(e).then(function(m) {
            if (!m) throw Error("Records not found");
            return m
        }).then(function(m) {
            m = m.concat(h);
            for (var r = [], B = [], V = 0; V < m.length; V++) {
                var Fa = m[V]; - 1 === B.indexOf(Fa.key) && (r.push(Fa), B.push(Fa.key))
            }
            return r
        }).catch(function() {
            return h
        })
    }

    function Of(e, h) {
        return fe(e, h).catch(function() {
            Ze(e).delete(h)
        })
    }

    function Ze(e) {
        return Ni.get(e) || new Map
    }

    function cg(e) {
        return He(e, "srrcur_")
    }

    function He(e, h) {
        return e && "string" === typeof e.key && 0 === e.key.indexOf(h)
    }

    function Gg(e) {
        return Ua("visit", "".concat(Qe).concat(e.url)).then(function(h) {
            if (!He(h, Qe)) throw Error("Record not found");
            h = h.body;
            var m = document.implementation.createHTMLDocument(""),
                r = document.createElement("style");
            r.innerText = h;
            m.head.appendChild(r);
            h = r.sheet;
            if (!h) throw Error("css resource from string has not been created");
            return sb.dT_.aFr(h.cssRules, fa)
        }).catch(function() {
            return []
        })
    }

    function ag(e) {
        return e.cssRules ? sb.dT_.aFr(e.cssRules, function(h) {
            if (!fa(h) || !h.styleSheet) return !1;
            h = Dc(h.styleSheet);
            return Pb(h) || Pe("srxicss") ? !0 : !1
        }) : []
    }

    function jf(e) {
        return Pb(e) ? yb.resolve(ag(e)) : Pe("srxicss") ? Gg(e) : yb.resolve([])
    }

    function Fd(e) {
        return new yb(function(h, m) {
            if (e.url) {
                var r = pc("gxwp")();
                r.open("GET", e.url);
                r.timeout = wh;
                r.onload = function() {
                    200 === r.status ? h(r.responseText) : m(Error("".concat(r.status, ": ").concat(r.statusText)))
                };
                r.onerror = function() {
                    m(Error("".concat(r.status, ": ").concat(r.statusText)))
                };
                r.ontimeout = r.onerror;
                r.send()
            } else m(Error("stylesheet doesn't have href"))
        })
    }

    function Xc(e, h) {
        var m = document.implementation.createHTMLDocument(""),
            r = m.createElement("base");
        r.href = h;
        m.head.appendChild(r);
        h =
            m.createElement("a");
        h.href = e;
        return h.href
    }

    function Yc(e) {
        if ("string" !== typeof e.cssText) e = "";
        else {
            var h;
            if (!(h = qf(e)))
                if ("conditionText" in e) {
                    h = e.conditionText;
                    var m = e.cssRules,
                        r = e.cssText;
                    if (-1 === r.indexOf("grid-template:") || -1 === r.indexOf("repeat(")) h = null;
                    else {
                        r = "";
                        for (var B = 0; B < m.length; ++B) {
                            var V = m.item(B);
                            V && (r += "{".concat(qf(V), "}"))
                        }
                        h = "@media ".concat(h, " ").concat(r)
                    }
                } else h = null;
            e = h || e.cssText
        }
        return e
    }

    function qf(e) {
        if (!("selectorText" in e)) return null;
        var h = e.selectorText;
        e = e.bk;
        if (!e) return null;
        var m = e.get("grid-template");
        if (!m || -1 === m.toString().indexOf("repeat(")) return null;
        var r = "";
        e.forEach(function(B, V) {
            "grid-template" !== V && (r += "".concat(V, ":").concat(B, ";"))
        });
        return "".concat(h, "{").concat(r, "}")
    }

    function Kh(e) {
        try {
            if (!e.cssRules) return yb.reject(Error("No rules defined"));
            var h = e.url,
                m = sb.dT_.aM(e.cssRules, function(r) {
                    r = Yc(r);
                    if (r.length && h) {
                        var B = new RegExp(/url\(["|'](.+?)["|']/g),
                            V = B.exec(r);
                        if (V) {
                            for (var Fa = r; null !== V;) {
                                V = V[1];
                                if (/^([https?]+:)?\/\//i.test(V)) {
                                    var ha = h.split("/");
                                    var Ya = V.split("/");
                                    if (ha[0] !== Ya[0] || ha[2] !== Ya[2]) Ya = V;
                                    else if (ha.slice(3).join("/") === Ya.slice(3).join("/")) Ya = Ya.slice(3).join("/");
                                    else {
                                        var cb = ha.splice(3);
                                        Ya = Ya.splice(3);
                                        var Jb = cb.length;
                                        ha = 0;
                                        for (ha; ha < Math.min(Ya.length, Jb) - 1 && Ya[ha] === cb[ha]; ha++);
                                        cb = "";
                                        for (--Jb; Jb > ha; Jb--) cb += "../";
                                        Ya = cb += Ya.splice(ha).join("/")
                                    }
                                    Fa = Fa.replace(V, Ya)
                                }
                                V = B.exec(r)
                            }
                            r = Fa
                        }
                    }
                    return r
                }).join("");
            return yb.resolve(m)
        } catch (r) {
            return yb.reject(r)
        }
    }

    function me() {
        return Fg("visit").then(function(e) {
            for (var h = [], m = 0; m <
                e.length; m++) {
                var r = e[m];
                He(r, Qe) && h.push(r)
            }
            return h
        }).catch(function() {
            return []
        })
    }

    function xe(e) {
        return Ua("global", "".concat("srrckr_").concat(e)).then(function(h) {
            return He(h, "srrckr_") && !(h.ttl < sb.dT_.nw())
        }).catch(function() {
            return !1
        })
    }

    function Lh(e) {
        return Pb(e) ? Kh(e) : Fd(e).catch(function(h) {
            e.url && ie.nj(e.url);
            throw h;
        })
    }

    function Jf(e) {
        return sb.dT_.aM(new Uint8Array(e), function(h) {
            return ("00" + h.toString(16)).slice(-2)
        }).join("")
    }

    function Xg(e, h) {
        void 0 === h && (h = "SHA-256");
        return new yb(function(m,
            r) {
            var B = ed.msCrypto.subtle.digest({
                name: h
            }, e);
            B.oncomplete = function(V) {
                m(V.target.result)
            };
            B.onerror = function() {
                r(Error("Error generating SHA"))
            }
        })
    }

    function u(e, h) {
        void 0 === h && (h = "SHA-256");
        return va(this, void 0, void 0, function() {
            var m, r;
            return U(this, function(B) {
                switch (B.label) {
                    case 0:
                        return (m = window.crypto) || !ed.msCrypto ? [3, 2] : [4, Xg(e)];
                    case 1:
                        return r = B.B(), [3, 4];
                    case 2:
                        return [4, m.subtle.digest(h, e)];
                    case 3:
                        r = B.B(), B.label = 4;
                    case 4:
                        return [2, Jf(r)]
                }
            })
        })
    }

    function t(e) {
        return va(this, void 0, void 0,
            function() {
                var h;
                return U(this, function(m) {
                    switch (m.label) {
                        case 0:
                            var r, B;
                            return (null === (r = null === ed || void 0 === ed ? void 0 : ed.msCrypto) || void 0 === r ? 0 : r.subtle) || (null === (B = null === ed || void 0 === ed ? void 0 : ed.crypto) || void 0 === B ? 0 : B.subtle) ? [2, u(e)] : [4, A(e)];
                        case 1:
                            h = m.B();
                            if (!h) throw Error("Error generating hash with fast-sha256");
                            return [2, Jf(h)]
                    }
                })
            })
    }

    function A(e) {
        return va(this, void 0, void 0, function() {
            var h;
            return U(this, function(m) {
                switch (m.label) {
                    case 0:
                        return W() ? [4, Xa("SHA-256", e)] : [3, 2];
                    case 1:
                        return h =
                            m.B(), [3, 4];
                    case 2:
                        return [4, tc("SHA-256", e)];
                    case 3:
                        h = m.B(), m.label = 4;
                    case 4:
                        return [2, h]
                }
            })
        })
    }

    function Q() {
        return la().then(function(e) {
            if (!e) return hb(0)
        })
    }

    function la() {
        return Ua("visit", "".concat("srrckrc")).then(function(e) {
            return e && "string" === typeof e.key && "srrckrc" === e.key && e ? e.counter : 0
        }).catch(function() {
            return 0
        })
    }

    function Ta() {
        return la().then(function(e) {
            return hb(e + 1)
        })
    }

    function hb(e) {
        var h, m = (h = {}, h[Vf] = "srrckrc", h.visitId = sb.dT_.gVI(), h.counter = e, h);
        return qe("visit", m)
    }

    function pb() {
        return Of("visit",
            "srrckrc").catch(function() {})
    }

    function rb() {
        bh += 1;
        return Ta()
    }

    function zb() {
        return {
            Hj: la(),
            wj: bh
        }
    }

    function Nb() {
        bh = 0;
        return pb()
    }

    function nc(e) {
        return new Uint8Array(Na(e))
    }

    function xc() {
        return sb.dT_.ncv("msl")
    }

    function Fc(e, h, m, r) {
        return r ? "sid=".concat(e, "-").concat(1, "&p").concat(h, "_").concat(m, "&").concat(1, ",").concat(e, ",").concat(encodeURIComponent(r), ",") : "sid=".concat(e, "-").concat(1, "&p").concat(h, "_").concat(m, "&")
    }

    function rc(e, h) {
        var m = new Uint8Array(e.length + h.length);
        m.set(e, 0);
        m.set(h, e.length);
        return m
    }

    function Zc(e, h, m) {
        var r = Fc(h, 0, 20, e);
        var B = Fc(h, 20, 20);
        r = xc() - r.length;
        r = m.length - r;
        B = xc() - B.length;
        r = 0 >= B ? 1 : Math.ceil(r / B);
        r += 1;
        if (20 < r) return [];
        e = nc(Fc(h, 1, r, e));
        B = xc() - e.length;
        for (var V = m.slice(B), Fa = 0, ha = [], Ya = 2; Ya <= r; Ya++) {
            var cb = nc(Fc(h, Ya, r)),
                Jb = xc() - cb.length;
            Jb = V.slice(Fa, Fa + Jb);
            ha.push(rc(cb, Jb));
            Fa += Jb.length
        }
        ha.unshift(rc(e, m.slice(0, B)));
        return ha
    }

    function Ve(e, h, m) {
        e = Zc(e, h, m);
        if (!e.length) return -1;
        sb.dT_.fE(e, function(r) {
            var B, V = sb.dT_.cB();
            sb.dT_.gBP().ar(V,
                r);
            sb.dT_.sB(V, !1, !0, (B = {}, B.contentType = "srRs", B))
        });
        return 1
    }

    function Kd(e, h, m) {
        return va(this, void 0, void 0, function() {
            var r, B, V, Fa, ha, Ya;
            return U(this, function(cb) {
                switch (cb.label) {
                    case 0:
                        return W() ? [4, Xa("sendResource", e, h, m)] : [3, 2];
                    case 1:
                        return r = cb.B(), [3, 4];
                    case 2:
                        return B = nc("".concat(1, ",").concat(h, ",").concat(encodeURIComponent(e), ",")), [4, tc("compress", m)];
                    case 3:
                        V = cb.B();
                        if (B.length + V.length > xc()) return [2, Ve(e, h, V)];
                        Fa = sb.dT_.cB();
                        ha = rc(B, V);
                        sb.dT_.gBP().ar(Fa, ha);
                        sb.dT_.sB(Fa, !1, !0,
                            (Ya = {}, Ya.contentType = "srRs", Ya));
                        r = 1;
                        cb.label = 4;
                    case 4:
                        return [2, r]
                }
            })
        })
    }

    function uc() {
        if (H() || Pe("srcss") || Pe("srxcss"))
            if (H() || !sb.dT_.iMD() || Pe("srmrc")) dj = vk.initialize(), sb.dT_.addE("CSS_TRANSMISSION_STARTED", ce)
    }

    function bc() {
        return 1 === aa().css || H() ? Kf().then(function(e) {
            if (e) throw Error("Capturing discarded as limits reached");
            return ie.size()
        }).then(function(e) {
            if (!e) throw Error("Store is empty");
            return Qd()
        }) : yb.reject(Error("Capture discarded as ActiveGate is not accepting resource beacons"))
    }

    function Kf() {
        if (H()) return yb.resolve(!1);
        var e = dj.Qi(),
            h = e.Hj;
        e = e.wj;
        var m = sb.dT_.ncv("srmcrv"),
            r = sb.dT_.ncv("srmcrl");
        return e >= r ? yb.resolve(!0) : h.then(function(B) {
            return B >= m
        })
    }

    function Qd() {
        var e;
        return ie.Vi().then(function(h) {
            e = h[Math.floor(Math.random() * h.length)];
            return ie.Kh(e.hash)
        }).then(function(h) {
            if (!h) throw Error("Resource not known");
            Nc(e.url)
        }).catch(function() {
            return rd(e)
        })
    }

    function rd(e) {
        var h;
        return Kd(e.url, e.hash, nc(e.body)).then(function(m) {
            h = m;
            if (1 !== h) throw Error("Resource has not been sent");
            return ie.mj(e.hash)
        }).then(function() {
            return dj.Rj()
        }).then(function() {
            Nc(e.url)
        }).catch(function() {
            h = h || 0; - 1 === h ? Nc(e.url) : (Ch[e.hash] = void 0 !== Ch[e.hash] ? Ch[e.hash] + 1 : 0, 3 <= Ch[e.hash] ? Nc(e.url) : Ee())
        })
    }

    function Ee() {
        ie.size().then(function(e) {
            if (!e) throw Error("No resources to queue");
            sb.dT_.st(bc, 0)
        }).catch(function() {})
    }

    function Nc(e) {
        ie.Fj(e).then(function() {
            Ee()
        }).catch(function() {})
    }

    function ce() {
        bc().catch(function() {})
    }

    function qd(e) {
        if (!li) return yb.reject(Error("Resource Capturing not initialized"));
        if (!e.url) return yb.reject(Error("The resource doesn't have href"));
        var h = e.url;
        if (Cb(h, Uh)) return yb.reject(Error("The url ".concat(h, " is blacklisted")));
        var m, r;
        return ie.Ui(h).then(function(B) {
            if (!B) throw Error("resource not found");
            return B.hash
        }).catch(function() {
            return ie.fj(h).then(function(B) {
                if (B) throw Error("The resource is unreachable");
                return Lh(e)
            }).then(function(B) {
                if ("" === B.trim()) throw Error("The resource is empty");
                m = B;
                return t(nc(B))
            }).then(function(B) {
                r = B;
                return ie.Kh(r)
            }).then(function(B) {
                if (B) return r;
                We(h, m, r);
                return r
            })
        })
    }

    function We(e, h, m) {
        var r, B = (r = {}, r[Vf] = "".concat(Qe).concat(e), r.body = h, r.url = e, r.hash = m, r.visitId = sb.dT_.gVI(), r);
        ie.ni(B).catch(function() {})
    }

    function xd(e) {
        if (!e.url) return yb.resolve([]);
        var h = [],
            m = e.url;
        return qd(e).then(function(r) {
            var B = O(e.ownerNode) ? new pf({
                type: "addNode",
                nodeName: "rc.link",
                ga: ra(e.ownerNode)
            }) : void 0;
            if (void 0 === B) return [];
            var V = B.I;
            r = Lf(V, r, m);
            h.push.apply(h, Y([B], r, !1));
            return Gd(e, V)
        }).then(function(r) {
            h.push.apply(h, r);
            return h
        })
    }

    function Gd(e,
        h) {
        var m, r = [];
        return jf(e).then(function(B) {
            return B.length ? sb.dT_.red(B, function(V, Fa) {
                var ha = Xc(Fa.href, e.url + "");
                if (!Fa.styleSheet) return V;
                var Ya = Dc(Fa.styleSheet);
                Ya.url = ha;
                return V.then(function() {
                    return qd(Ya)
                }).then(function(cb) {
                    var Jb = new pf({
                        type: "addNode",
                        nodeName: "rc.import",
                        ga: h,
                        ja: m
                    });
                    cb = Lf(Jb.I, cb, ha);
                    r.push.apply(r, Y([Jb], cb, !1));
                    m = Jb.I;
                    return Gd(Ya, m)
                }).then(function(cb) {
                    cb && r.push.apply(r, cb)
                }).catch(function() {})
            }, yb.resolve()).then(function() {
                return r
            }) : []
        })
    }

    function Lf(e, h, m) {
        h =
            new pf({
                type: "updateAttribute",
                I: e,
                attributeName: "hash",
                Pa: h
            });
        e = new pf({
            type: "updateAttribute",
            I: e,
            attributeName: "url",
            Pa: m
        });
        return [h, e]
    }

    function Ue(e) {
        var h = e.url,
            m = e.ownerNode;
        return h ? m ? Ua("visit", "".concat(ic).concat(h)).then(function(r) {
            if (!He(r, ic) || !r.metadata.length) throw Error("Metadata mutations not found");
            var B = r.metadata,
                V = r.metadata[0],
                Fa = ra(m);
            V = Ea({}, V);
            V.parentId && V.parentId !== Fa && (V.parentId = Fa);
            B[0] = V;
            B = r.metadata;
            Fa = new Map;
            for (r = 0; r < B.length; r++) V = B[r], V.nodeId && Fa.set(V.nodeId,
                pf.Fh());
            r = [];
            for (V = 0; V < B.length; V++) {
                var ha = Ea({}, B[V]);
                ha.previousId && Fa.has(ha.previousId) && (ha.previousId = Fa.get(ha.previousId));
                ha.parentId && Fa.has(ha.parentId) && (ha.parentId = Fa.get(ha.parentId));
                ha.nodeId && Fa.has(ha.nodeId) && (ha.nodeId = Fa.get(ha.nodeId));
                r.push(ha)
            }
            B = [];
            for (Fa = 0; Fa < r.length; Fa++) V = r[Fa], B.push(new pf({
                type: V.type,
                ga: V.parentId,
                ja: V.previousId,
                na: V.nextId,
                I: V.nodeId,
                namespaceURI: V.namespaceURI,
                nodeName: V.nodeName,
                attributeName: V.attributeName,
                Pa: V.attributeValue
            }));
            return B
        }).catch(function() {
            return xd(e).then(function(r) {
                var B = {};
                B[Vf] = "".concat(ic).concat(h);
                B.visitId = pc("gVI")();
                B.url = h;
                for (var V = [], Fa = 0; Fa < r.length; Fa++) {
                    var ha = r[Fa];
                    V.push({
                        type: ha.type,
                        parentId: ha.ga,
                        previousId: ha.ja,
                        nextId: ha.na,
                        nodeId: ha.I,
                        namespaceURI: ha.namespaceURI,
                        nodeName: ha.nodeName,
                        attributeName: ha.attributeName,
                        attributeValue: ha.Pa
                    })
                }
                B = (B.metadata = V, B);
                qe("visit", B);
                return r
            })
        }) : yb.reject(Error("css discarded for capturing since it is not attached into the document")) : yb.reject(Error("css discarded for capturing since it has not href"))
    }

    function bg(e) {
        e = Dc(e);
        var h = Pb(e);
        return h && !Pe("srcss") ? yb.reject(Error("Resource capturing for css same origin resources is not enabled")) : h || Pe("srxcss") ? Ue(e).then(function(m) {
            ac(Wd.jg(m, Ac()))
        }) : yb.reject(Error("Resource capturing for css cross origin resources is not enabled"))
    }

    function Hg(e, h, m, r) {
        var B = {
            na: null,
            ga: null,
            ja: null,
            I: ra(h)
        };
        if ("addNode" === e || "updateNode" === e) h.parentStyleSheet && (e = h.parentStyleSheet.ownerNode, B.ga = e ? R(e) : R(h.parentStyleSheet)), B.ja = m ? R(m) : null, B.na = r ? R(r) : null;
        return B
    }

    function hf(e, h) {
        dd(e, function(m, r) {
            m = new tj(na(m) ? "updateNode" : "addNode", m, r);
            h.add(m)
        })
    }

    function Rc(e) {
        void 0 === e && (e = new WeakMap);
        mc = e
    }

    function ne() {
        mc || Rc();
        return mc
    }

    function Od(e, h) {
        var m;
        if (ea(e, 16))
            if (e.ownerNode && Ja(e.ownerNode)) bg(e).catch(function() {});
            else try {
                if (e.cssRules.length) {
                    var r = new Wd(Ac()),
                        B = Ac();
                    hf(e.cssRules, r);
                    gf((m = {}, m.i = uj, m.t = Ac() - B, m.d = [
                        ["nodes", r.size]
                    ], m.a = !0, m));
                    h(r)
                }
            } catch (V) {
                e.ownerNode && (ne().set(e, h), e.ownerNode.addEventListener("load", rf.bind(e)))
            }
    }

    function rf() {
        Uc(uj);
        var e = new Wd(Ac());
        try {
            hf(this.cssRules, e)
        } catch (m) {}
        vb(uj, [
            ["nodes", e.size]
        ], !0);
        var h = ne().get(this);
        h && h(e)
    }

    function yd() {
        return "ShadowRoot" in ed ? sb.dT_.bcv("srsdom") : !1
    }

    function Ig(e) {
        var h;
        return null !== (h = Ib.find(function(m) {
            return m.host === e
        })) && void 0 !== h ? h : null
    }

    function Xe(e) {
        if (e = Ig(e)) e = Ib.indexOf(e), 0 <= e && (e = Ib.splice(e, 1)[0]) && e.gd && (X(e), xb(e))
    }

    function tf() {
        var e = [];
        sb.dT_.fE(Ib, function(h) {
            for (var m = h.host; m && m.nodeType !== Node.DOCUMENT_NODE;) m = m.parentNode ? m.parentNode :
                m.host;
            m ? h.gd || Qa(h) : e.push(h)
        });
        sb.dT_.fE(e, function(h) {
            Xe(h.host)
        })
    }

    function sf() {
        sb.dT_.fE(Ib, function(e) {
            e.gd && xb(e)
        })
    }

    function Ad(e, h) {
        var m = !h,
            r = h || new Wd(Ac());
        sb.dT_.fE(e ? [e] : Ib, function(B) {
            var V = {
                type: "addNode",
                nodeName: "sdw.o",
                nodeValue: ra(B.host)
            };
            B.Oh && (V.I = B.Oh);
            var Fa = V.I ? (Fa = qj.get(V.I)) ? Fa.type === V.type && Fa.nodeName === V.nodeName && Fa.nodeValue === V.nodeValue : !1 : !1;
            Fa || (Fa = new pf(V), B.Oh = Fa.I, V.I = Fa.I, r.add(Fa), V.I && qj.set(V.I, V))
        });
        m && ac(r)
    }

    function Be(e, h) {
        var m = !h,
            r = h || new Wd(Ac());
        sb.dT_.fE(e ? [e] : Ib, function(B) {
            var V, Fa = null === (V = B.host.shadowRoot) || void 0 === V ? void 0 : V.adoptedStyleSheets;
            null !== Fa && void 0 !== Fa && Fa.length && (V = sb.dT_.aM(Fa, function(ha) {
                var Ya = "";
                if (!na(ha)) {
                    Ya = ra(ha);
                    var cb = new Vi({
                        type: "addNode",
                        nodeName: "css.create",
                        I: Ya,
                        nodeValue: "{}"
                    });
                    r.add(cb)
                }
                Od(ha, function(Jb) {
                    Jb.forEach(function(jc) {
                        r.add(jc)
                    })
                });
                return Ya || R(ha)
            }), B = Ag.create("updateAttribute", {
                node: B.host,
                Gb: {
                    name: "adoptedStyleSheets",
                    value: JSON.stringify(V)
                }
            }), r.add(B))
        });
        m && ac(r)
    }

    function Mf(e) {
        e =
            Ac() - e.start;
        return 0 > e || 9E5 <= e
    }

    function Ye(e, h) {
        void 0 === h && (h = !1);
        h ? Qb.unshift(e) : Qb.push(e)
    }

    function uf(e) {
        for (; 0 !== Qb.length && (Qb[0].Aa === e || Mf(Qb[0]));) e = Qb[0].Aa, Qb.shift();
        return e
    }

    function Id(e, h) {
        if ("number" !== typeof e || Number.isNaN(e) || 0 > e) throw new vj("Invalid beacon param [".concat(h, "=").concat(e, "]"));
        return "".concat(Math.floor(e))
    }

    function ee(e, h, m) {
        return va(this, void 0, void 0, function() {
            var r, B, V, Fa, ha, Ya, cb, Jb, jc, Ud, Vd, Ic;
            return U(this, function(je) {
                switch (je.label) {
                    case 0:
                        V = m.start;
                        Fa = m.end;
                        ha = m.rc;
                        var $d = Fa,
                            Pc = ha,
                            ud = Id(V, "start");
                        $d = Id($d, "end");
                        if (ud > $d) throw new vj("Invalid beacon param [startTime=".concat(ud, "] > [endTime=").concat($d, "]"));
                        Pc = Id(Pc, "sequenceNumber");
                        ud = "".concat("srBm" === e ? 1 : 3, ",").concat(Ac(), ",").concat(ud, ",").concat($d);
                        "srBm" === e ? (ud = nc("".concat(ud, ",").concat(Pc, ",")), Pc = new Uint8Array(ud.length + h.length), Pc.set(ud, 0), Pc.set(h, ud.length), ud = Pc.buffer, Pc = La(Pc)) : (ud = "".concat(ud, ",").concat(Pc, ",").concat(h), Pc = La(ud));
                        r = ud;
                        B = Pc;
                        Ya = "srBm" === e;
                        Jb =
                            sb.dT_.cB();
                        ph().ar(Jb, r);
                        ph().av(Jb, "vi", Qc);
                        sb.dT_.sB(Jb, !1, Ya, (Ic = {}, Ic.contentType = e, Ic.crc = B, Ic));
                        je.label = 1;
                    case 1:
                        return je.J.push([1, 3, , 4]), [4, em(Jb)];
                    case 2:
                        return cb = je.B(), [3, 4];
                    case 3:
                        return jc = je.B(), [2, yb.reject({
                            code: "Network Error",
                            message: jc + ""
                        })];
                    case 4:
                        return "string" !== typeof cb ? [2, yb.reject({
                            code: "Network Error",
                            message: cb.toString()
                        })] : 0 === cb.indexOf("FL") ? (Vd = (Ud = cb.match(/\((.+?)\)/)) && Ud[1] ? Ud[1] : "no message", [2, yb.reject({
                            code: "Cluster Rejection",
                            message: Vd
                        })]) : 0 !== cb.indexOf("OK") ? [2, yb.reject({
                            code: "Unknown Error",
                            message: cb
                        })] : [2, yb.resolve()]
                }
            })
        })
    }

    function Ge(e) {
        return new yb(function(h) {
            setTimeout(h, e)
        })
    }

    function Wg() {
        return va(this, void 0, void 0, function() {
            var e;
            return U(this, function(h) {
                switch (h.label) {
                    case 0:
                        return e = dc.Aa + "", Te("rst", [
                            ["expir", e]
                        ]), [4, Hf(!1)];
                    case 1:
                        return h.B(), uf(e), [4, gh(!0)];
                    case 2:
                        return h.B(), [2]
                }
            })
        })
    }

    function dg(e, h, m) {
        Te(e, [
            ["fl", m.substring(0, 50)],
            ["ctype", h]
        ])
    }

    function Nf(e) {
        void 0 === e && (e = 0);
        return va(this, void 0, void 0, function() {
            var h,
                m, r, B, V, Fa, ha, Ya;
            return U(this, function(cb) {
                switch (cb.label) {
                    case 0:
                        if (De || pc("id")()) return [2];
                        h = uf();
                        if (h === dc.Aa) return [2, Wg()];
                        if (0 === Qb.length) return [2];
                        De = !0;
                        return [4, Ge(Math.min(6E4, 2E3 * e))];
                    case 1:
                        cb.B();
                        m = Qb[0];
                        if (!m) return De = !1, [2];
                        r = m.type;
                        B = m.data;
                        V = m.start;
                        Fa = m.end;
                        ha = m.rc;
                        cb.label = 2;
                    case 2:
                        return cb.J.push([2, 4, , 5]), [4, ee(r, B, {
                            start: V,
                            end: Fa,
                            rc: ha
                        })];
                    case 3:
                        return cb.B(), cb = Qb.indexOf(m), -1 !== cb && Qb.splice(cb, 1), De = !1, Nf(), [3, 5];
                    case 4:
                        Ya = cb.B();
                        De = !1;
                        if ("Invalid Params" === Ya.code) return dg("paramErr",
                            r, Ya.message), [2];
                        if ("Cluster Rejection" === Ya.code) return dg("stop", r, Ya.message), uf(dc.Aa + ""), [2];
                        "Unknown Error" === Ya.code && 0 === e && dg("netErr", r, Ya.message);
                        Nf(e + 1);
                        return [3, 5];
                    case 5:
                        return [2]
                }
            })
        })
    }

    function kf(e, h, m) {
        Ye({
            type: e,
            data: h,
            start: m.start,
            end: m.end,
            rc: m.rc,
            Aa: dc.Aa + ""
        });
        Nf()
    }

    function vf() {
        return va(this, void 0, void 0, function() {
            return U(this, function(e) {
                switch (e.label) {
                    case 0:
                        return "active" !== dc.state ? [3, 3] : [4, re()];
                    case 1:
                        return e.B(), [4, he()];
                    case 2:
                        return e.B(), [3, 4];
                    case 3:
                        Rh = !0,
                            g(), e.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }

    function g() {
        void 0 !== Re && (Sg(Re), Re = void 0)
    }

    function q(e) {
        return Math.max(Math.round(e), 0)
    }

    function w(e) {
        void 0 === e && (e = window.location.href);
        return !Cb(e, ui)
    }

    function T() {
        mi = mi || yb.resolve();
        mi = mi.then(function() {
            return va(this, void 0, void 0, function() {
                return U(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, re({
                                af: !1
                            })];
                        case 1:
                            e.B();
                            if (!w()) return [3, 3];
                            Nf();
                            return [4, he()];
                        case 2:
                            return e.B(), [3, 4];
                        case 3:
                            Me("view", {
                                url: document.location.href,
                                Cd: !1,
                                hc: F(),
                                yd: !0,
                                pa: null
                            }), e.label = 4;
                        case 4:
                            return [2]
                    }
                })
            })
        })
    }

    function E(e) {
        var h, m;
        return function() {
            for (var r = [], B = 0; B < arguments.length; B++) r[B] = arguments[B];
            h = r;
            m || (m = requestAnimationFrame(function() {
                void 0 !== m && cancelAnimationFrame(m);
                m = void 0;
                return e.apply(void 0, h)
            }))
        }
    }

    function ta(e, h) {
        var m;
        return function() {
            for (var r = [], B = 0; B < arguments.length; B++) r[B] = arguments[B];
            void 0 === m && (e.apply(void 0, r), m = tg(function() {
                m = void 0
            }, h))
        }
    }

    function Kb(e, h, m) {
        m = void 0 === m ? {} : m;
        var r = m.Bf,
            B = void 0 === r ? !1 : r;
        m = m.Ff;
        var V = void 0 ===
            m ? !0 : m,
            Fa;
        return function() {
            for (var ha = [], Ya = 0; Ya < arguments.length; Ya++) ha[Ya] = arguments[Ya];
            void 0 !== Fa && Sg(Fa);
            void 0 === Fa && B && (ha.push({
                Bf: B
            }), e.apply(void 0, ha));
            Fa = tg(function() {
                Fa = void 0;
                V && (ha.push({
                    Ff: V
                }), e.apply(void 0, ha))
            }, h)
        }
    }

    function Ob(e) {
        return e === document ? {
            pa: R(document.documentElement),
            target: document.scrollingElement || document.documentElement
        } : {
            pa: R(e),
            target: e
        }
    }

    function cc(e) {
        if (!P(e.target)) return yb.resolve(null);
        var h = Ob(e.target);
        e = h.pa;
        h = h.target;
        return O(h) ? yb.resolve($e(e,
            h)) : yb.resolve(null)
    }

    function Vc() {
        var e = Ob(document),
            h = e.pa;
        e = e.target;
        O(e) && Cc($e(h, e)).catch(function() {})
    }

    function $e(e, h) {
        return new Ff("scroll", {
            pa: e,
            top: q(h.scrollTop),
            left: q(h.scrollLeft)
        })
    }

    function wf(e) {
        return !P(e.target) || ff.rh(e.target) ? yb.resolve(null) : yb.resolve(new Ff("click", {
            pa: R(e.target),
            x: q(e.clientX),
            y: q(e.clientY)
        }))
    }

    function Pf(e, h, m) {
        try {
            return {
                error: void 0,
                value: e.apply(h, m)
            }
        } catch (r) {
            return {
                value: void 0,
                error: r
            }
        }
    }

    function Ld(e, h, m, r) {
        function B() {
            for (var Ya = [], cb = 0; cb < arguments.length; cb++) Ya[cb] =
                arguments[cb];
            cb = !Zh;
            var Jb = Zh;
            Zh = !0;
            var jc = Pf(r, null, [this, Ya]);
            Jb = Pf(Jb ? Fa : ha, this, Ya);
            cb && Pf(m, null, [this, Ya, jc.error ? [] : jc.value, Jb.error ? void 0 : Jb.value]);
            Zh = !1;
            if (Jb.error) throw Jb.error;
            return Jb.value
        }
        void 0 === m && (m = S);
        void 0 === r && (r = function() {
            return []
        });
        if (!sb.dT_.oHOP(e, h) || "function" !== typeof e[h]) return S;
        var V = Object.getOwnPropertyDescriptor(e, h);
        if (!V) return S;
        var Fa = V.value || (V.get ? V.get() : void 0),
            ha = Fa;
        if ("function" !== typeof Fa || !V.configurable) return S;
        Object.defineProperty(e, h, {
            configurable: V.configurable,
            enumerable: !!V.enumerable,
            get: function() {
                return B
            },
            set: function(Ya) {
                ha = Ya
            }
        });
        return function() {
            var Ya = Object.getOwnPropertyDescriptor(e, h);
            Ya && Ya.configurable && (Ya.value || (Ya.get ? Ya.get() : void 0)) === B && Object.defineProperty(e, h, {
                configurable: Ya.configurable,
                enumerable: !!Ya.enumerable,
                writable: !0,
                value: ha
            })
        }
    }

    function Yd(e, h, m, r) {
        Bh && na(e.ownerNode || e) && (e = new Wd(Ac()), h = new tj(h, m, r), e.add(h), Bh(e))
    }

    function af(e, h, m, r) {
        "string" === typeof h[0] && "number" === typeof r && Yd(e,
            "addNode", e.cssRules[r], r)
    }

    function Qf(e, h) {
        var m = h[0],
            r = h[1];
        h = h[2];
        void 0 === h && (h = e.cssRules.length - 1);
        "string" === typeof m && "string" === typeof r && "number" === typeof h && Yd(e, "addNode", e.cssRules[h], h)
    }

    function Sd(e, h, m) {
        td(e, (void 0 === h ? [] : h)[0], m && m[0])
    }

    function bf(e, h, m) {
        h = h[0];
        td(e, void 0 === h ? 0 : h, m && m[0])
    }

    function td(e, h, m) {
        ea(m, 15) && "number" === typeof h && Yd(e, "removeNode", m)
    }

    function Ie(e, h) {
        void 0 === h && (h = []);
        return [e.cssRules[h[0] || 0]]
    }

    function ge(e, h, m, r) {
        return va(this, void 0, void 0, function() {
            return U(this,
                function(B) {
                    switch (B.label) {
                        case 0:
                            return na(e.ownerNode || e) ? [4, r] : [2];
                        case 1:
                            return B.B(), Bh && Od(e, Bh), [2]
                    }
                })
        })
    }

    function eg(e) {
        if (na(e.ownerNode || e)) {
            var h = Ma(e.cssRules);
            h.reverse();
            dd(h, function(m) {
                Yd(e, "removeNode", m)
            })
        }
        return []
    }

    function Je() {
        for (; 0 < ei.length;) {
            var e = ei.pop();
            e && e()
        }
        Bh = void 0;
        dd(document.getElementsByTagName("style"), function(h) {
            var m = h.sheet;
            m && (h.removeEventListener("load", rf), ne().delete(m))
        })
    }

    function Rf(e) {
        return !P(e.target) || ff.rh(e.target) ? yb.resolve(null) : yb.resolve(new Ff("move", {
            pa: R(e.target),
            x: q(e.clientX),
            y: q(e.clientY)
        }))
    }

    function fg() {
        var e = document.documentElement;
        var h = document.body;
        e = {
            width: q(window.innerWidth || e.clientWidth || h.clientWidth),
            height: q(window.innerHeight || e.clientHeight || h.clientHeight)
        };
        if (e.height === zh.height && e.width === zh.width) return yb.resolve(void 0);
        zh = e;
        return yb.resolve(new Ff("resize", Ea(Ea({}, e), {
            pa: null
        })))
    }

    function Mh(e, h) {
        if (e || !zh) zh = {
            width: 0,
            height: 0
        };
        fg().then(function(m) {
            m && h(m)
        }).catch(function(m) {
            mb(m.message)
        });
        Fj = Ha(window, "resize",
            fg, {
                Ia: h,
                Ed: E
            })
    }

    function lh(e, h, m, r, B) {
        m = "" + (B ? e.time - m : e.time - r - m);
        m += " ";
        r = "";
        switch (e.type) {
            case "view":
                B = "";
                h ? B = ad(e.url, h.url) : e.url && (B = e.url);
                e.hc && e.hc !== e.Aa && (B = B + " " + e.hc);
                e.yd && (B += " x");
                r += B;
                break;
            case "click":
            case "move":
                e = ad(e.pa, h ? h.pa : void 0) + " " + ad(e.x, h ? h.x : void 0) + " " + ad(e.y, h ? h.y : void 0);
                r += e;
                break;
            case "resize":
                e = ad(e.width, h ? h.width : void 0) + " " + ad(e.height, h ? h.height : void 0);
                r += e;
                break;
            case "scroll":
                e = ad(e.pa, h ? h.pa : void 0) + " " + ad(e.top, h ? h.top : void 0) + " " + ad(e.left, h ? h.left :
                    void 0);
                r += e;
                break;
            case "input":
                B = ad(e.pa, h ? h.pa : void 0), B = B + " " + ad(e.duration, h ? h.duration : void 0), B = B + " " + encodeURIComponent(ad(e.name, h ? h.name : void 0)), "" !== e.value && (B = B + " " + encodeURIComponent(ad(e.value, h ? h.value : void 0))), r += B
        }
        return m + r
    }

    function Nh(e, h) {
        e = gg(e);
        var m = [],
            r = "";
        Kg(e, function(B, V, Fa, ha) {
            r += V + "^";
            Kg(B, function(Ya, cb, Jb, jc) {
                if (cb in Pi) {
                    var Ud = Pi[cb];
                    r += Ud + " ";
                    var Vd = Ya[0].time - h,
                        Ic;
                    Ya.sort(hg);
                    dd(Ya, function(je, $d) {
                        var Pc = 0 === $d;
                        $d = $d === Ya.length - 1;
                        var ud = lh(je, Ic, h, Vd, Pc);
                        r.length +
                            ud.length > bd("msl") && (ud = 0 + (Jb && Pc ? (V + "").length : 0), ud = ud + (Jb && Pc ? 1 : 0) + (Pc ? 1 : 0), ud += Pc ? (Ud + "").length : 0, m.push(r.slice(0, -(ud + 1))), r = "", r += V + "^", r += Pi[cb] + " ", Vd = je.time - h, ud = lh(je, void 0, h, Vd, !0));
                        r += ud;
                        r += $d ? "" : ">";
                        Ic = je
                    });
                    r += jc ? "" : "^"
                }
            });
            r += ha ? "" : "|"
        });
        m.push(r);
        return m
    }

    function Kg(e, h) {
        var m = 0;
        e.forEach(function(r, B) {
            var V = 0 === m,
                Fa = ++m === e.size;
            h(r, B, V, Fa)
        })
    }

    function gg(e) {
        var h = new Map;
        dd(e, function(m) {
            if (null !== m.type) {
                if (!(m.type in Pi)) return mb("Event Serializer: Unrecognized event type");
                var r = m.Aa + "";
                h.has(r) || h.set(r, new Map);
                if (r = h.get(r)) {
                    var B = m.type + "";
                    r.has(B) || r.set(B, []);
                    (r = r.get(B)) && r.push(m)
                }
            }
        });
        return h
    }

    function hg(e, h) {
        return e.time - h.time
    }

    function ad(e, h) {
        return void 0 !== e ? e !== h ? e : "~" : ""
    }

    function Zd() {
        return va(this, void 0, void 0, function() {
            var e;
            return U(this, function(h) {
                switch (h.label) {
                    case 0:
                        return e = {
                            maxSignalLength: bd("msl"),
                            transmissionDelay: bd("srtd"),
                            isEdgeOrIe: void 0 !== document.documentMode || void 0 !== ed.MSInputMethodContext
                        }, [4, tc("collectorConfig", e)];
                    case 1:
                        return h.B(), [2]
                }
            })
        })
    }

    function Cd() {
        return va(this, void 0, void 0, function() {
            var e;
            return U(this, function(h) {
                switch (h.label) {
                    case 0:
                        return [4, tc("collect", Ac())];
                    case 1:
                        return (e = h.B()) ? [2, sb.dT_.aM(e, function(m) {
                            var r = m.data,
                                B;
                            null === r ? B = new Uint8Array(0) : "string" === typeof r ? B = nc(r) : B = new Uint8Array(r);
                            return {
                                data: B,
                                start: m.from,
                                end: m.to
                            }
                        })] : [2, []]
                }
            })
        })
    }

    function Sf() {
        xh("beaconRetry");
        var e = Eh(ni);
        e && (sb.dT_.fE(e.split(","), function(h) {
            if (h) {
                var m = h.split("."),
                    r = m[0],
                    B = m[1],
                    V = m[2];
                m = Eh("".concat(Ri).concat(h));
                if (r === ng() && m) {
                    var Fa = m.split(".", 3);
                    r = Fa[0];
                    var ha = Fa[2];
                    m = m.split("".concat(ha, "."))[1];
                    ha = sb.dT_.aM([Fa[1], ha, V], function(Ya) {
                        return parseInt(Ya)
                    });
                    V = ha[0];
                    Fa = ha[1];
                    ha = ha[2];
                    switch (r) {
                        case "srBm":
                            m = new Uint8Array(sb.dT_.aM(m.split(","), function(Ya) {
                                return parseInt(Ya)
                            }));
                            break;
                        case "srTe":
                            break;
                        default:
                            xh("".concat(Ri).concat(h));
                            return
                    }
                    Ye({
                        type: r,
                        start: V,
                        end: Fa,
                        Aa: B,
                        rc: ha,
                        data: m
                    }, !0)
                }
                xh("".concat(Ri).concat(h))
            }
        }), xh(ni), Nf())
    }

    function Ke() {
        return va(this, void 0, void 0, function() {
            var e;
            return U(this,
                function(h) {
                    switch (h.label) {
                        case 0:
                            return [4, Cd()];
                        case 1:
                            return e = h.B(), lf(e), Lg(), [2]
                    }
                })
        })
    }

    function lf(e) {
        e && e.length && (1 === ve.wf && Te(hk, [
            ["viewid", dc.Aa + ""],
            ["eventlist", te.size + ""]
        ]), sb.dT_.fE(e, function(h) {
            h.data && h.data.length && (kf("srBm", h.data, {
                start: h.start,
                end: h.end,
                rc: ve.Hb
            }), ve.Hb++)
        }))
    }

    function Lg() {
        te && 0 < te.size && (sb.dT_.fE(te.Fa(), function(e) {
            kf("srTe", e, {
                start: te.start,
                end: te.end,
                rc: ve.wf
            });
            ve.wf++
        }), Wl(!1));
        te = new Qi
    }

    function he() {
        return va(this, void 0, void 0, function() {
            var e;
            return U(this,
                function(h) {
                    switch (h.label) {
                        case 0:
                            if (!dc.If || !w() || !dc.enabled) return [2];
                            e = Ac() + "";
                            te = new Qi;
                            te.add(new Ff("view", {
                                pa: null,
                                url: document.location.href,
                                Cd: !1,
                                hc: F()
                            }, e));
                            pa("viewId", function() {
                                ve.Hb = 1;
                                ve.wf = 1
                            });
                            sb.dT_.bcv("srfirrbv") && tc("reset");
                            return [4, Ge(1)];
                        case 1:
                            return h.B(), dc.Aa = e, v(), za(), Rc(), ug = new WeakMap, xf(!0), $f = bd("srvi") || 0, 0 !== $f && void 0 === Re && (Rh = !1, Re = tg(vf, 6E4 * Math.max($f, nf))), [2]
                    }
                })
        })
    }

    function Mg(e, h) {
        void 0 === h && (h = []);
        if (e.size || h.length) wc(e), sb.dT_.fE(h, function(m) {
            Od(m,
                wc)
        })
    }

    function xf(e) {
        void 0 === e && (e = !1);
        if (!jh && dc.enabled && w()) {
            te && 0 !== te.size || (te = new Qi);
            try {
                Sf()
            } catch (h) {}
            jb(function(h) {
                te.add(h)
            });
            Bd(Mg);
            zd(Mg);
            "function" === typeof wc && (Bh = wc, 0 === ei.length && ei.push(Ld(CSSStyleSheet.prototype, "insertRule", af), Ld(CSSStyleSheet.prototype, "addRule", Qf), Ld(CSSStyleSheet.prototype, "removeRule", bf, Ie), Ld(CSSStyleSheet.prototype, "deleteRule", Sd, Ie), Ld(CSSStyleSheet.prototype, "replace", ge, eg), Ld(CSSStyleSheet.prototype, "replaceSync", ge, eg)));
            wj = Ha(document, "click",
                wf, {
                    Ia: Cc
                });
            Oi = Ha(document, "mousemove", Rf, {
                Ia: Cc,
                Ed: E
            });
            W() || Mh(e, Cc);
            cj = Ha(document, "scroll", cc, {
                Ia: Cc,
                Ed: E,
                Hf: !0
            });
            Vc();
            Va(Cc);
            yd() && (tf(), Ad());
            W() || (bj = Af(Ke, 1E3));
            dc.state = "active";
            jh = !0
        }
    }

    function re(e) {
        e = (void 0 === e ? {} : e).af;
        var h = void 0 === e ? !0 : e;
        return va(this, void 0, void 0, function() {
            return U(this, function(m) {
                switch (m.label) {
                    case 0:
                        return g(), [4, Le({
                            af: h
                        })];
                    case 1:
                        return m.B(), za(), "stopped" === dc.state ? [2] : [4, tc("reset")];
                    case 2:
                        return m.B(), dc.state = "stopped", [2]
                }
            })
        })
    }

    function yf() {
        jh && M()
    }

    function Le(e) {
        e = void 0 === e ? {} : e;
        var h = e.Vg,
            m = void 0 === h ? !0 : h;
        e = e.af;
        var r = void 0 === e ? !0 : e;
        return va(this, void 0, void 0, function() {
            return U(this, function(B) {
                switch (B.label) {
                    case 0:
                        if (!jh) return [2];
                        if (B = document.doctype ? (new XMLSerializer).serializeToString(document.doctype) : null) B = {
                            type: "addNode",
                            nodeName: "doc.doctype",
                            nodeValue: B,
                            ga: R(document.documentElement)
                        }, B = new pf(B), ac(Wd.jg([B], sb.dT_.nw()));
                        Bf(bj);
                        bj = void 0;
                        B = document.documentElement;
                        var V = {
                            Vg: m
                        };
                        V = (void 0 === V ? {} : V).Vg;
                        lg && ((void 0 === V ||
                            V) && M(), lg.disconnect(), Th && Th.disconnect(), Lb(B), yd() && sb.dT_.fE(Ib, X), Rd(), lg = Eg = null);
                        Je();
                        ob(document, "click", wj);
                        ob(document, "mousemove", Oi);
                        W() || ob(window, "resize", Fj);
                        ob(document, "scroll", cj);
                        ob(document, "focus blur", Ej);
                        yd() && sf();
                        dc.state = "paused";
                        jh = !1;
                        return W() || !r ? [3, 2] : [4, Ke()];
                    case 1:
                        B.B(), B.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }

    function Me(e, h) {
        if (jh) te.add(new Ff(e, h));
        else {
            var m = Ac() + "";
            te = new Qi;
            te.add(new Ff(e, h, m))
        }
        Lg()
    }

    function Yg(e) {
        return va(this, void 0, void 0, function() {
            var h;
            return U(this,
                function(m) {
                    switch (m.label) {
                        case 0:
                            return [4, Gb("detectSubframeViewIdsChange", e)];
                        case 1:
                            return h = m.B(), [2, Ng(h)]
                    }
                })
        })
    }

    function mh(e) {
        return va(this, void 0, void 0, function() {
            var h;
            return U(this, function(m) {
                switch (m.label) {
                    case 0:
                        return Za() !== e ? [2, !0] : [4, Gb("detectSubframeViewIdsChange", e)];
                    case 1:
                        return h = m.B(), [2, Ng(h)]
                }
            })
        })
    }

    function Ng(e) {
        return e && e.length ? e.some(function(h) {
            return h
        }) : !1
    }

    function Zg() {
        var e = D();
        e ? dc.enabled = "enabled" === e : (dc.enabled = hc.Nb("srad"), dc.enabled ? N("enabled") : Wf("optin"))
    }

    function $g(e) {
        return va(this, void 0, void 0, function() {
            var h;
            return U(this, function(m) {
                switch (m.label) {
                    case 0:
                        h = e;
                        switch (h) {
                            case "active":
                                return [3, 1];
                            case "paused":
                                return [3, 2];
                            case "stopped":
                                return [3, 4];
                            case "ended":
                                return [3, 4]
                        }
                        return [3, 6];
                    case 1:
                        return m = dc.Aa + "", Za() !== m && v(), xf(), [3, 7];
                    case 2:
                        return [4, Le()];
                    case 3:
                        return m.B(), [3, 7];
                    case 4:
                        return [4, Le({
                            Vg: !1
                        })];
                    case 5:
                        return m.B(), za(), [3, 7];
                    case 6:
                        mb("Invalid record state", {
                            state: e
                        }), m.label = 7;
                    case 7:
                        return [2]
                }
            })
        })
    }

    function Oh(e) {
        return va(this,
            void 0, void 0,
            function() {
                var h;
                return U(this, function(m) {
                    switch (m.label) {
                        case 0:
                            return dc.If = e, "ended" !== dc.state && dc.enabled ? e && "stopped" === dc.state ? [4, he()] : [3, 2] : [2];
                        case 1:
                            return m.B(), [2];
                        case 2:
                            return e && Za() !== dc.Aa ? [4, re()] : [3, 5];
                        case 3:
                            return m.B(), [4, he()];
                        case 4:
                            return m.B(), [2];
                        case 5:
                            return e ? Rh ? [4, re()] : [3, 8] : [3, 14];
                        case 6:
                            return m.B(), [4, he()];
                        case 7:
                            return m.B(), [3, 13];
                        case 8:
                            return [4, Yg(Za())];
                        case 9:
                            return (h = m.B()) ? [4, re()] : [3, 12];
                        case 10:
                            return m.B(), [4, he()];
                        case 11:
                            return m.B(), [3, 13];
                        case 12:
                            xf(), m.label = 13;
                        case 13:
                            return [3, 16];
                        case 14:
                            return [4, Le()];
                        case 15:
                            m.B(), m.label = 16;
                        case 16:
                            return [2]
                    }
                })
            })
    }

    function si(e) {
        return va(this, void 0, void 0, function() {
            var h;
            return U(this, function(m) {
                switch (m.label) {
                    case 0:
                        return h = dc.state, "stopped" === h || "ended" === h ? [3, 2] : [4, re()];
                    case 1:
                        m.B(), m.label = 2;
                    case 2:
                        return "active" === h && e ? [4, he()] : [3, 4];
                    case 3:
                        m.B(), m.label = 4;
                    case 4:
                        return e || (dc.state = "ended", hc.mi(function B() {
                            return va(this, void 0, void 0, function() {
                                return U(this, function(V) {
                                    switch (V.label) {
                                        case 0:
                                            hc.Cj(B);
                                            if (!dc.enabled || "ended" !== dc.state) return [2];
                                            dc.state = "stopped";
                                            return dc.If ? [4, he()] : [3, 2];
                                        case 1:
                                            V.B(), V.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        })), [2]
                }
            })
        })
    }

    function zf() {
        return va(this, void 0, void 0, function() {
            return U(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, new yb(function(h, m) {
                            var r = sb.dT_.st(function() {
                                m(Error("TIMEOUT initializing worker in ui thread"))
                            }, 5E3);
                            Vb("workerLoaded", function() {
                                sb.dT_.ct(r);
                                h()
                            });
                            If.Cb(self, new zg({
                                H: "worker",
                                query: "initialize"
                            }), {
                                origin: location.href
                            })
                        })];
                    case 1:
                        return e.B(), [2]
                }
            })
        })
    }

    function nh() {
        return va(this, void 0, void 0, function() {
            var e, h;
            return U(this, function(m) {
                switch (m.label) {
                    case 0:
                        e = location.origin, h = setInterval(function() {
                            If.Cb(self, new zg({
                                H: "worker",
                                query: "source-req"
                            }), {
                                origin: e
                            })
                        }, 100), m.label = 1;
                    case 1:
                        return m.J.push([1, , 3, 4]), [4, new yb(function(r, B) {
                            var V = sb.dT_.st(function() {
                                    B(Error("TIMEOUT getting worker source"));
                                    If.Dd(self, Fa)
                                }, 5E3),
                                Fa = If.Vc(self, function(ha, Ya, cb) {
                                    "worker" === ha.H && "source" === ha.query && ha.result && (sb.dT_.ct(V), cb(), Ya.origin ===
                                        e ? r(ha.result + "") : B(Error("Received message from wrong origin")))
                                })
                        })];
                    case 2:
                        return [2, m.B()];
                    case 3:
                        return clearInterval(h), [7];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function Md(e) {
        var h = hc.Di(e, void 0);
        return h ? yb.race([new yb(function(m, r) {
            h.onmessage = function() {
                m(h)
            };
            h.onerror = function(B) {
                r(Error(B.message))
            }
        }), new yb(function(m, r) {
            sb.dT_.st(function() {
                r(Error("TIMEOUT loading worker as a thread"))
            }, 5E3)
        })]) : yb.reject("failed to load worker as thread")
    }

    function ig() {
        return va(this, void 0, void 0, function() {
            var e,
                h, m;
            return U(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, nh()];
                    case 1:
                        return e = r.B(), h = hc.Oj(e, "text/javascript"), [4, Md(h)];
                    case 2:
                        return m = r.B(), If.Cb(self, new zg({
                            H: "worker",
                            query: "initialized"
                        }), {
                            origin: location.href
                        }), [2, m]
                }
            })
        })
    }

    function Ne() {
        return va(this, void 0, void 0, function() {
            var e, h, m, r, B, V, Fa;
            return U(this, function(ha) {
                switch (ha.label) {
                    case 0:
                        e = hc.Ri("D", void 0);
                        h = [];
                        if (!hc.zf("D") || !hc.Nb("srbw")) return [3, 4];
                        ha.label = 1;
                    case 1:
                        return ha.J.push([1, 3, , 4]), [4, ig()];
                    case 2:
                        return (m = ha.B()) ||
                            h.push("loadWorkerAsBlob returned void"), [2, {
                                sc: m,
                                He: h
                            }];
                    case 3:
                        return r = ha.B(), h.push("loadWorkerAsBlob failed: ".concat(r.message)), [3, 4];
                    case 4:
                        if (Cf(e)) return [3, 8];
                        ha.label = 5;
                    case 5:
                        return ha.J.push([5, 7, , 8]), [4, Md(e)];
                    case 6:
                        return (m = ha.B()) || h.push("loadWorkerAsThread returned void"), [2, {
                            sc: m,
                            He: h
                        }];
                    case 7:
                        return B = ha.B(), h.push("loadWorkerAsThread failed: ".concat(B.message)), [3, 8];
                    case 8:
                        if (hc.zf("D")) return h.push("worker injected, return void"), [2, {
                            sc: void 0,
                            He: h
                        }];
                        ha.label = 9;
                    case 9:
                        return ha.J.push([9,
                            11, , 12
                        ]), [4, jj(e, {
                            async: !0
                        })];
                    case 10:
                        return ha.B(), [3, 12];
                    case 11:
                        return V = ha.B(), h.push("injectScript failed: ".concat(V.message)), [3, 12];
                    case 12:
                        if (!hc.Nb("srbw")) return [3, 16];
                        ha.label = 13;
                    case 13:
                        return ha.J.push([13, 15, , 16]), [4, ig()];
                    case 14:
                        return (m = ha.B()) || h.push("loadWorkerAsBlob-2 returned void"), [2, {
                            sc: m,
                            He: h
                        }];
                    case 15:
                        return Fa = ha.B(), h.push("loadWorkerAsBlob-2 failed: ".concat(Fa.message)), [3, 16];
                    case 16:
                        return [2, {
                            sc: void 0,
                            He: h
                        }]
                }
            })
        })
    }

    function Og() {
        if (document.hasFocus()) return null;
        Ia.pending && (Ia.pending.resolve(null), Ia.pending = null);
        return wd ? wd = !1 : null
    }

    function Pg(e, h) {
        e = void 0 === h ? {
            Bf: !0,
            Ff: void 0
        } : h;
        h = e.Ff;
        return e.Bf && !wd ? wd = !0 : h && wd ? wd = !1 : null
    }

    function ah(e) {
        return "visible" === document.visibilityState ? Ia(e) : Og()
    }

    function jg() {
        Bk(!0)
    }

    function kg(e) {
        Ha(document, gk.join(" "), function(h) {
            return h
        }, {
            Ia: e,
            Ed: function(h) {
                return ta(h, 1E3)
            }
        });
        Vb("interaction", e)
    }

    function Ph(e) {
        document.hasFocus() && (wd = !0, e(wd));
        Ha(document, "mouseenter", Ia, {
            Ia: e
        });
        Ha(document, "mouseleave", Og, {
            Ia: e
        });
        Ha(document, "visibilitychange", ah, {
            Ia: e
        });
        Ha(window, "focus", Ia, {
            Ia: e
        });
        Ha(window, "blur", Og, {
            Ia: e
        });
        Ha(document, gk.join(" "), Pg, {
            Ia: e,
            Ed: function(h) {
                return Kb(h, 1E4, {
                    Bf: !0,
                    Ff: !0
                })
            }
        });
        Vb("interaction", jg)
    }

    function Jg(e) {
        return vd("visit").then(function(h) {
            sb.dT_.fE(h, function(m) {
                m.visitId !== e && fe("visit", m.key)
            })
        })
    }

    function xk() {
        return ed.indexedDB ? kd().then(function() {
            var e, h = (e = {}, e[Vf] = "v", e.value = 1, e);
            Jd("global", h);
            Jg(sb.dT_.gVI())
        }) : yb.reject(Error("Indexeddb not supported in the browser"))
    }

    function bm() {
        xk().catch(function() {});
        Ni = new Map
    }

    function cm() {
        var e;
        if (yd()) {
            var h = null === (e = Object.getOwnPropertyDescriptor(ShadowRoot.prototype, "adoptedStyleSheets")) || void 0 === e ? void 0 : e.set;
            if (h) {
                Object.defineProperty(ShadowRoot.prototype, "adoptedStyleSheets", {
                    set: function() {
                        for (var r = [], B = 0; B < arguments.length; B++) r[B] = arguments[B];
                        h.apply(this, r);
                        "active" === dc.state && (r = Ig(this.host)) && Be(r)
                    }
                });
                var m = Element.prototype.attachShadow;
                Element.prototype.attachShadow = function() {
                    for (var r = [], B = 0; B < arguments.length; B++) r[B] = arguments[B];
                    r = m.apply(this, r);
                    var V = this;
                    setTimeout(function() {
                        zd(Mg, V)
                    }, 600);
                    return r
                }
            }
        }
    }

    function ql() {
        Xh.initialize();
        Vb("iframebootstrap", function(e, h) {
            e = h[0];
            h = h[1];
            var m = "active" === dc.state;
            Mj({
                Gj: !0,
                Nh: [
                    ["iframe", "boot"]
                ]
            });
            var r = Ma(document.getElementsByTagName("iframe"));
            oc();
            for (var B = 0; B < r.length; B++) {
                var V = r[B];
                if (V.contentWindow) {
                    var Fa = Tg.get(V.contentWindow);
                    Fa && Mk.set(Fa, V)
                }
            }
            if (r = Mk.get(this)) try {
                if (r.getAttribute("src") !== e) {
                    var ha = Ag.create("updateAttribute", {
                        node: r,
                        Gb: {
                            name: "src",
                            value: e
                        }
                    });
                    if (ha)
                        if (m) {
                            var Ya = new Wd(h, hc.Nb("srficros"));
                            Ya.add(ha);
                            wc(Ya)
                        } else Xh.add(ha);
                    else r.setAttribute("data-dt-last-src", e)
                }
            } catch (cb) {}
        })
    }

    function yk() {
        return va(this, void 0, void 0, function() {
            var e, h, m, r, B, V, Fa, ha, Ya;
            return U(this, function(cb) {
                switch (cb.label) {
                    case 0:
                        return m = [], W() ? [3, 2] : [4, Ne()];
                    case 1:
                        return Ya = cb.B(), e = Ya.sc, h = Ya.He, [3, 3];
                    case 2:
                        h = ["SubFrame Environment detected"], cb.label = 3;
                    case 3:
                        return e || h.push("worker didn't load"), e || W() || !hc.Nb("srwo") ? [4, lc({
                            sc: e
                        })] : (Wf("nowk", [
                            ["nowkreason",
                                "nowkui"
                            ]
                        ]), Te("boot", Y([
                            ["worker", "0"],
                            ["srwo", "0"]
                        ], fj(h), !0)), [2, !1]);
                    case 4:
                        r = cb.B();
                        B = r.yf;
                        V = r.xf;
                        if (!B) return h.push("initializeBridge failed: ".concat(V)), Te("boot", Y([
                            ["worker", "0"],
                            ["srwo", "1"]
                        ], fj(h), !0)), [2, !1];
                        if (e || W()) return [3, 8];
                        m.push(["srwo", "1"]);
                        cb.label = 5;
                    case 5:
                        return cb.J.push([5, 7, , 8]), [4, zf()];
                    case 6:
                        return cb.B(), [3, 8];
                    case 7:
                        return Fa = cb.B(), h.push("initialiseWorkerInUiThread failed: ".concat(Fa)), Te("boot", Y([
                            ["worker", "0"],
                            ["srwo", "1"],
                            ["initui", "1"]
                        ], fj(h), !0)), Wf("nowk", [
                            ["nowkreason", "flwkui"]
                        ]), [2, !1];
                    case 8:
                        return W() || (m.push(["srad", hc.Nb("srad") ? "1" : "0"]), Te("boot", m)), [4, C()];
                    case 9:
                        cb.B();
                        bm();
                        ha = hc.Ad("srms");
                        Td = new Hl(ha);
                        $a();
                        rl();
                        Wi(function(Jb, jc, Ud, Vd) {
                            dc.Wh && dc.enabled && Jb.av(Vd, "sr", 1)
                        });
                        try {
                            Uh = ja(hc.Ad("srre")), ie.initialize(), uc(), li = !0
                        } catch (Jb) {
                            li = !1
                        }
                        Fh();
                        return [2, !0]
                }
            })
        })
    }

    function fj(e) {
        return sb.dT_.aM(e, function(h, m) {
            return ["msg_".concat(m), h]
        })
    }

    function rl() {
        Vb("mutations", function(e, h) {
            return va(this, void 0, void 0, function() {
                var m;
                return U(this,
                    function(r) {
                        switch (r.label) {
                            case 0:
                                return (m = Wd.decode(h)) ? [4, wc(m, {
                                    context: e
                                })] : [2];
                            case 1:
                                return r.B(), [2]
                        }
                    })
            })
        });
        Vb("events", function(e, h) {
            return va(this, void 0, void 0, function() {
                var m;
                return U(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return (m = Ff.decode(h)) ? [4, Cc(m, {
                                context: e
                            })] : [2];
                        case 1:
                            return r.B(), [2]
                    }
                })
            })
        });
        Vb("sendResource", function(e, h, m, r) {
            return Kd(h, m, r)
        });
        Vb("SHA-256", function(e, h) {
            return A(h)
        });
        Vb("detectSubframeViewIdsChange", function(e, h) {
            return mh(h)
        })
    }

    function Ak() {
        return va(this,
            void 0, void 0,
            function() {
                return U(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return Zg(), [4, Zd()];
                        case 1:
                            return e.B(), sb.dT_.aNVL(function(h, m, r, B) {
                                Mj({
                                    Nh: [
                                        ["visit", B || ""]
                                    ]
                                });
                                ch = !1;
                                return si(m)
                            }), pc("ael")(window, "beforeunload", function() {
                                for (; 0 !== Qb.length;) {
                                    var h = Qb.shift();
                                    if (!h) break;
                                    var m = h.Aa,
                                        r = h.type,
                                        B = h.data,
                                        V = h.start,
                                        Fa = h.end;
                                    h = h.rc;
                                    m = "".concat(ng(), ".").concat(m, ".").concat(h);
                                    h = Eh(ni);
                                    if (!Gf(ni, h ? "".concat(h, ",").concat(m) : m, !1)) break;
                                    if (!Gf("".concat(Ri).concat(m), "".concat(r, ".").concat(V,
                                            ".").concat(Fa, ".").concat(B), !1)) break
                                }
                                Mj()
                            }), Ek() ? [3, 3] : [4, Nj()];
                        case 2:
                            e.B(), e.label = 3;
                        case 3:
                            return Ph(Bk), [2]
                    }
                })
            })
    }

    function Mj(e) {
        var h = void 0 === e ? {} : e;
        e = h.Gj;
        e = void 0 === e ? !1 : e;
        h = h.Nh;
        h = void 0 === h ? [] : h;
        (!e && !ch || e && !Ef) && Wf("idle", h)
    }

    function Bk(e) {
        ch = !0;
        Ef = e;
        return Oh(e)
    }

    function Fh() {
        sb.dT_.st(function() {
            ("active" === dc.state || "paused" === dc.state) && (Pe("srcss") || Pe("srxcss") || H()) && sb.dT_.disE({
                kind: "CSS_TRANSMISSION_STARTED",
                detail: void 0
            });
            Fh()
        }, 5E3)
    }

    function ci() {
        return va(this, void 0, void 0,
            function() {
                return U(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, yk()];
                        case 1:
                            if (!e.B()) return [2];
                            cm();
                            W() || ql();
                            if (!W()) return [3, 3];
                            kg(function() {
                                return Xa("interaction")
                            });
                            return [4, $g(dc.state)];
                        case 2:
                            return e.B(), pa("state", $g), Sh(window, "beforeunload", yf), [2];
                        case 3:
                            return [4, Ge(0)];
                        case 4:
                            return e.B(), Ek() ? [4, Nj()] : [3, 6];
                        case 5:
                            return e.B(), [3, 8];
                        case 6:
                            return [4, Ak()];
                        case 7:
                            e.B(), e.label = 8;
                        case 8:
                            return [2]
                    }
                })
            })
    }

    function Nj() {
        return va(this, void 0, void 0, function() {
            return U(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4,
                            new yb(function(h) {
                                Dk(function(m) {
                                    m();
                                    h()
                                })
                            })
                        ];
                    case 1:
                        return e.B(), [2]
                }
            })
        })
    }

    function Di(e, h) {
        void 0 === e && (e = !1);
        void 0 === h && (h = !1);
        return va(this, void 0, void 0, function() {
            var m, r;
            return U(this, function(B) {
                switch (B.label) {
                    case 0:
                        return (m = void 0 !== Se) ? [4, Se] : [3, 2];
                    case 1:
                        m = B.B(), B.label = 2;
                    case 2:
                        if (m) return [2, !0];
                        r = e || "enabled" === D();
                        Se = function() {
                            return va(this, void 0, void 0, function() {
                                var V, Fa, ha, Ya, cb;
                                return U(this, function(Jb) {
                                    switch (Jb.label) {
                                        case 0:
                                            return V = Ac(), void 0 !== Se ? [3, 2] : [4, ci()];
                                        case 1:
                                            Jb.B(),
                                                Jb.label = 2;
                                        case 2:
                                            if (W()) return Fa = window.location.href, Xa("iframebootstrap", [Fa, V]), Vb("iframeLocation", function() {
                                                return window.location.href
                                            }), [2, !0];
                                            e && Te("conf", [
                                                ["iCC", "1"]
                                            ]);
                                            ha = hc.zf("Q");
                                            Ya = Fi();
                                            cb = r || Ya.Uh;
                                            return ha && cb ? [3, 4] : [4, Hf(!1)];
                                        case 3:
                                            return Jb.B(), Te("conf", [
                                                ["module", ha ? "1" : "0"],
                                                ["excluded", cb ? "0" : "1"],
                                                ["srsr", Ya.eh ? "".concat(Ya.eh) : "unknown"],
                                                ["vsn", Ya.Yh ? "".concat(Ya.Yh) : "unknown"],
                                                ["appid", Ya.appId || "unknown"]
                                            ]), cb || Wf("sout"), [2, !1];
                                        case 4:
                                            return Ek() ? [4, Ak()] : [3, 6];
                                        case 5:
                                            Jb.B(),
                                                Jb.label = 6;
                                        case 6:
                                            if (h) return [3, 8];
                                            pa("viewRules", function(jc) {
                                                ui = ja(jc);
                                                T()
                                            });
                                            sb.dT_.addE("VIEW_STABLE", T);
                                            ui = ja(dc.Tj + "");
                                            return w() ? [3, 8] : [4, re({
                                                af: !1
                                            })];
                                        case 7:
                                            Jb.B(), Me("view", {
                                                pa: null,
                                                url: document.location.href,
                                                Cd: !1,
                                                hc: F(),
                                                yd: !0
                                            }), Jb.label = 8;
                                        case 8:
                                            return dc.Wh = !0, Dk(function() {
                                                return va(this, void 0, void 0, function() {
                                                    return U(this, function(jc) {
                                                        switch (jc.label) {
                                                            case 0:
                                                                if (!dc.enabled || hc.zf("Q")) return [2];
                                                                Te("confupd", [
                                                                    ["module", "0"]
                                                                ]);
                                                                return [4, Hf(!1)];
                                                            case 1:
                                                                return jc.B(), [2]
                                                        }
                                                    })
                                                })
                                            }), [2, !0]
                                    }
                                })
                            })
                        }();
                        return [2, Se]
                }
            })
        })
    }

    function gh(e, h) {
        void 0 === e && (e = !1);
        void 0 === h && (h = !1);
        return va(this, void 0, void 0, function() {
            var m;
            return U(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, Di(e, h)];
                    case 1:
                        m = r.B();
                        if (!m || dc.enabled || "ended" === dc.state) return [2];
                        dc.enabled = !0;
                        N("enabled");
                        return "stopped" === dc.state && dc.If ? [4, he()] : [3, 3];
                    case 2:
                        r.B(), r.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }

    function Hf(e) {
        return va(this, void 0, void 0, function() {
            var h;
            return U(this, function(m) {
                switch (m.label) {
                    case 0:
                        if (!dc.enabled || "ended" ===
                            dc.state) return [2];
                        h = e;
                        void 0 === h && (h = 1E3 < Ac() - Pj);
                        dc.enabled = !1;
                        N("disabled");
                        return "stopped" === dc.state ? [3, 2] : [4, re({
                            af: h
                        })];
                    case 1:
                        m.B(), m.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }

    function di(e) {
        return W() ? (console.log("Enable/disable session replay apis should be called on the top frame"), !1) : "srel" === e && "ended" === dc.state ? (console.log('Session was already ended, possibly "dtrum.endSession()" was called previously'), !1) : !0
    }

    function sl() {
        Pj = Ac();
        zi.srel = function(e, h) {
            void 0 === e && (e = !1);
            void 0 === h && (h = !1);
            if (!di("srel")) return yb.resolve();
            Te("optin", [
                ["iCC", e ? "1" : "0"]
            ]);
            return gh(e, h)
        };
        zi.srdl = function() {
            if (!di("srdl")) return yb.resolve();
            Te("optout");
            dc.enabled && "ended" !== dc.state && Wf("optout");
            return Hf()
        };
        zi.srrcdm = function() {
            di("srrcdm") && (ij("dtsrRCDM", "true"), uc())
        }
    }

    function pc(e) {
        return void 0 !== xj[e] ? xj[e] : function() {
            for (var h = [], m = 0; m < arguments.length; m++) h[m] = arguments[m];
            mb("Intercepted call to missing core api ".concat(e), h)
        }
    }

    function dm() {
        Yi = !1;
        og = new Set;
        dh = new Map;
        hc.ki(function(e,
            h, m) {
            var r = e.id;
            return va(this, void 0, void 0, function() {
                var B, V, Fa;
                return U(this, function(ha) {
                    switch (ha.label) {
                        case 0:
                            return dh.has(r) && (B = dh.get(r), V = B[0], Fa = B[1], "success" === h ? V(m) : Fa(m), dh.delete(r)), "success" === h ? [3, 3] : "fail" !== h || 429 !== m ? [3, 2] : [4, Hf(!1)];
                        case 1:
                            ha.B(), ha.label = 2;
                        case 2:
                            return [2];
                        case 3:
                            return [4, tl()];
                        case 4:
                            ha.B();
                            if ("string" !== typeof m) ha = [3, 6];
                            else {
                                var Ya = Ck(m);
                                ha = "disabled" === Ya.parameters.sr;
                                if ("OK" === Ya.status) {
                                    var cb = (Ya = Ya.parameters.error) && ha,
                                        Jb = cb ? "k-err" : null;
                                    cb = cb ? [
                                        ["errmsg", Ya]
                                    ] : null;
                                    ha && "Unexpected content-type request header" === Ya && (Jb = "k-mime", cb = null);
                                    ha = Ya || ha ? hj(cb, Jb, Ya || (ha ? "disabled in config" : "")) : yb.resolve()
                                } else Ya.status ? (Jb = Ya.H, Jb = (Ya = Ya.parameters.error) || Jb, cb = null, ha && (Ya && (cb = "k-err"), "Unexpected content-type request header" === Ya && (cb = "k-mime"), -1 !== Jb.indexOf("SessionReplayDisabled") && (cb = "k-lic")), "Record and Replay disabled" === Ya && (cb = "k-emg"), -1 !== Jb.indexOf("minJSAgentVersionForSR") && (cb = "k-min"), ha = hj("k-err" === cb ? [
                                        ["errmsg", Ya]
                                    ] :
                                    null, cb, Jb)) : ha = hj(null, "k-ires");
                                ha = [4, ha]
                            }
                            return ha;
                        case 5:
                            ha.B(), ha.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        })
    }

    function tl() {
        return va(this, void 0, void 0, function() {
            return U(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, Ge(0)];
                    case 1:
                        return e.B(), Yi = !0, og.forEach(function(h) {
                            h(function() {
                                return og.delete(h)
                            })
                        }), [2]
                }
            })
        })
    }

    function Ck(e) {
        var h = e.match(oi);
        if (h) {
            e = h[1];
            var m = h[2];
            h = sb.dT_.red(h[3].split("|"), function(r, B) {
                B = B.split("=");
                r[B[0].toLowerCase()] = B[1];
                return r
            }, {});
            return {
                status: e,
                H: m,
                parameters: h
            }
        }
        return {
            status: "",
            H: "",
            parameters: {}
        }
    }

    function hj(e, h, m) {
        void 0 === m && (m = "unknown");
        return va(this, void 0, void 0, function() {
            return U(this, function(r) {
                switch (r.label) {
                    case 0:
                        return dc.enabled && h && Wf(h, e || void 0), [4, Hf(!1)];
                    case 1:
                        return r.B(), Te("stop", [
                            ["kill", m]
                        ]), [2]
                }
            })
        })
    }

    function Dk(e) {
        og.add(e);
        Yi && e(function() {
            return og.delete(e)
        })
    }

    function em(e) {
        return new yb(function(h, m) {
            dh.set(e.id, [h, m])
        })
    }

    function Ek() {
        return hc.Nb("srdinitrec")
    }

    function ij(e, h, m) {
        void 0 === m && (m = !0);
        hc.Mj(e, h, m)
    }

    function Ei(e, h) {
        void 0 ===
            h && (h = !0);
        return hc.kj(e, h)
    }

    function Fi() {
        var e = hc.Ih("srsr"),
            h = hc.wi(),
            m = hc.Ad("app");
        return e && "number" === typeof h ? {
            appId: m,
            Uh: h % 1E5 <= e,
            eh: e,
            Yh: h
        } : {
            appId: m,
            Uh: !1,
            eh: e
        }
    }

    function jj(e, h) {
        h = (void 0 === h ? {} : h).async;
        var m = void 0 === h ? !0 : h;
        return new yb(function(r, B) {
            hc.bj(e, m, r, B)
        })
    }

    function Te(e, h) {
        void 0 === h && (h = []);
        pc("id")() || hc.Ci("_sr_", Y([
            ["type", e]
        ], h, !0), !1, hc.now(), 1)
    }

    function Wf(e, h) {
        void 0 === h && (h = []);
        var m = pc("id")();
        var r = pc("iAEPOO")(),
            B = pc("syn");
        if (!sb.dT_.bcv("nosr") || !r || B || m) m = !1;
        else {
            m = Qc;
            r = (Eh(qg) || "").split("|");
            B = r[1];
            var V = se[e] || 0;
            r[0] !== m || (B ? +B : 0) < V ? (Gf(qg, m + "|" + V), m = !0) : m = !1
        }
        m && sb.dT_.cAE("_nosr_", Y([
            ["r", e]
        ], h, !0), !1, sb.dT_.nw(), "idle" === e ? 0 : 1)
    }
    var yb = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        sb = "undefined" !== typeof window ? window : self,
        ed = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        ul = ed,
        Fk;
    (function(e) {
        e[e.ENABLED = 0] = "ENABLED";
        e[e.DISABLED = 1] = "DISABLED";
        e[e.DELAYED = 2] = "DELAYED"
    })(Fk || (Fk = {}));
    var Qj;
    (function(e) {
        e[e.BLOCKED_BY_PERCENTAGE =
            0] = "BLOCKED_BY_PERCENTAGE";
        e[e.ENABLED = 1] = "ENABLED";
        e[e.BLOCKED = 2] = "BLOCKED"
    })(Qj || (Qj = {}));
    var gi;
    (function(e) {
        e[e.NONE = 1] = "NONE";
        e[e.OFF = 2] = "OFF";
        e[e.PERFORMANCE = 3] = "PERFORMANCE";
        e[e.BEHAVIOR = 4] = "BEHAVIOR"
    })(gi || (gi = {}));
    var wg;
    (function(e) {
        e.OVERLOAD_PREVENTION = "ol";
        e.PRIVACY_STATE = "prv";
        e.SERVER_ID = "srv";
        e.SESSION_ID = "sn"
    })(wg || (wg = {}));
    var fd;
    (function(e) {
        e.DYNATRACE_MOBILE = "dynatraceMobile";
        e.MOBILE_AGENT = "MobileAgent"
    })(fd || (fd = {}));
    var Bc;
    (function(e) {
        e[e.ARRAY = 0] = "ARRAY";
        e[e.BOOLEAN = 1] = "BOOLEAN";
        e[e.NUMBER = 2] = "NUMBER";
        e[e.STRING = 3] = "STRING";
        e[e.FUNCTION = 4] = "FUNCTION";
        e[e.OBJECT = 5] = "OBJECT";
        e[e.DATE = 6] = "DATE";
        e[e.ERROR = 7] = "ERROR";
        e[e.ELEMENT = 8] = "ELEMENT";
        e[e.HTML_ELEMENT = 9] = "HTML_ELEMENT";
        e[e.HTML_IMAGE_ELEMENT = 10] = "HTML_IMAGE_ELEMENT";
        e[e.PERFORMANCE_ENTRY = 11] = "PERFORMANCE_ENTRY";
        e[e.PERFORMANCE_TIMING = 12] = "PERFORMANCE_TIMING";
        e[e.PERFORMANCE_RESOURCE_TIMING = 13] = "PERFORMANCE_RESOURCE_TIMING";
        e[e.PERFORMANCE_NAVIGATION_TIMING = 14] = "PERFORMANCE_NAVIGATION_TIMING";
        e[e.CSS_RULE = 15] = "CSS_RULE";
        e[e.CSS_STYLE_SHEET = 16] = "CSS_STYLE_SHEET";
        e[e.REQUEST = 17] = "REQUEST";
        e[e.RESPONSE = 18] = "RESPONSE";
        e[e.SET = 19] = "SET";
        e[e.MAP = 20] = "MAP";
        e[e.WORKER = 21] = "WORKER";
        e[e.XML_HTTP_REQUEST = 22] = "XML_HTTP_REQUEST";
        e[e.SVG_SCRIPT_ELEMENT = 23] = "SVG_SCRIPT_ELEMENT";
        e[e.HTML_META_ELEMENT = 24] = "HTML_META_ELEMENT";
        e[e.HTML_HEAD_ELEMENT = 25] = "HTML_HEAD_ELEMENT";
        e[e.ARRAY_BUFFER = 26] = "ARRAY_BUFFER";
        e[e.SHADOW_ROOT = 27] = "SHADOW_ROOT"
    })(Bc || (Bc = {}));
    var nd = function() {
            for (var e, h = [], m = 0; 256 > m; m++) {
                e = m;
                for (var r = 0; 8 > r; r++) e = e &
                    1 ? 3988292384 ^ e >>> 1 : e >>> 1;
                h[m] = e
            }
            return h
        }(),
        ef;
    (function(e) {
        e.ANCHOR = "A";
        e.BUTTON = "BUTTON";
        e.FORM = "FORM";
        e.I_FRAME = "IFRAME";
        e.IMAGE = "IMG";
        e.INPUT = "INPUT";
        e.LABEL = "LABEL";
        e.LINK = "LINK";
        e.OPTION = "OPTION";
        e.SCRIPT = "SCRIPT";
        e.SELECT = "SELECT";
        e.STYLE = "STYLE";
        e.TEXT_AREA = "TEXTAREA"
    })(ef || (ef = {}));
    var Qc = "",
        Yb;
    (function(e) {
        e.ADD_NODE = "addNode";
        e.REMOVE_NODE = "removeNode";
        e.UPDATE_ATTRIBUTE = "updateAttribute";
        e.UPDATE_NODE = "updateNode";
        e.UPDATE_NODE_VALUE = "updateNodeValue"
    })(Yb || (Yb = {}));
    var zc;
    (function(e) {
        e.EVENTS =
            "srTe";
        e.MUTATIONS = "srBm";
        e.RESOURCES = "srRs"
    })(zc || (zc = {}));
    var hi;
    (hi || (hi = {})).SR_IMAGE_NATURAL_DIMENSIONS = "data-dt-natural-dimensions";
    var Rj;
    (function(e) {
        e.CSS_STYLESHEET = "css-stylesheet";
        e.MATHML = "http://www.w3.org/1998/Math/MathML";
        e.METADATA = "dynatrace-metadata";
        e.SVG = "http://www.w3.org/2000/svg"
    })(Rj || (Rj = {}));
    var Ik;
    (function(e) {
        e.IMPORT = "rc.import";
        e.LINK = "rc.link"
    })(Ik || (Ik = {}));
    var wl;
    (function(e) {
        e.OPEN = "sdw.o";
        e.SLOT = "sdw.s"
    })(wl || (wl = {}));
    var vl;
    (vl || (vl = {})).DOCTYPE = "doc.doctype";
    var xl;
    (xl || (xl = {})).IFRAME = "tf.iframe";
    var yl;
    (yl || (yl = {})).CREATE = "css.create";
    var zl;
    (zl || (zl = {})).FAILURE = "rl.fail";
    var zg = function() {
            function e(h) {
                var m = h.id;
                m = void 0 === m ? void 0 : m;
                var r = h.H,
                    B = h.query;
                h = h.result;
                m ? this.id = m : (e.se++, this.id = e.se);
                this.H = r;
                this.query = B;
                this.result = void 0 === h ? void 0 : h
            }
            e.decode = function(h) {
                try {
                    if ("DT UI Worker Bridge" === h.type) {
                        var m = h.payload;
                        return new e({
                            id: m.id,
                            H: m.handler,
                            query: m.query,
                            result: m.result
                        })
                    }
                } catch (r) {}
            };
            e.prototype.kh = function(h) {
                "undefined" === typeof h ?
                    this.result = null : this.result = h
            };
            e.prototype.Fa = function() {
                return {
                    type: "DT UI Worker Bridge",
                    payload: {
                        id: this.id,
                        handler: this.H,
                        query: this.query,
                        result: this.result
                    }
                }
            };
            e.se = 0;
            return e
        }(),
        If = function() {
            function e(h) {
                h ? this.port = h : (h = new MessageChannel, this.port = h.port1, this.Yg = h.port2)
            }
            e.Yd = function() {
                e.$b || (e.$b = new Map)
            };
            e.Vc = function(h, m) {
                e.Yd();
                var r = e.$b.get(h);
                if (r) r.push(m);
                else {
                    var B = [m];
                    e.$b.set(h, B);
                    h.addEventListener("message", function(V) {
                        var Fa = zg.decode(V.data);
                        Fa && B.forEach(function(ha) {
                            ha(Fa,
                                V,
                                function() {
                                    e.Dd(h, m)
                                })
                        })
                    })
                }
                return m
            };
            e.Dd = function(h, m) {
                e.Yd();
                h = e.$b.get(h) || [];
                h.splice(h.indexOf(m), 1)
            };
            e.Cb = function(h, m, r) {
                var B = void 0 === r ? {} : r;
                r = B.origin;
                r = void 0 === r ? "*" : r;
                B = B.transfer;
                B = void 0 === B ? [] : B;
                m = m.Fa();
                Aa() || -1 < Object.prototype.toString.call(h).indexOf("Worker") ? h.postMessage(m, B) : h.postMessage(m, r, B)
            };
            e.prototype.wb = function(h) {
                this.port.onmessage = function(m) {
                    (m = zg.decode(m.data)) && h(m)
                }
            };
            e.prototype.send = function(h, m) {
                void 0 === m && (m = []);
                this.port.postMessage(h.Fa(), m)
            };
            return e
        }(),
        Vj, Al = 0,
        Wj, Lk, Tg, Mk, nj, oj, Nk = [],
        Bl = {},
        fm = {},
        gm = {
            srvr: "srvr"
        },
        pj, dc = {
            Aa: {
                initial: "",
                name: "viewId"
            },
            If: {
                initial: !1,
                name: "viewActive"
            },
            enabled: {
                initial: !1,
                name: "enabled"
            },
            state: {
                initial: "stopped",
                name: "state"
            },
            Wh: {
                initial: !1,
                name: "samplingEvaluated"
            },
            Tj: {
                initial: "",
                name: "viewRules",
                Bi: "srvr"
            }
        },
        hm = ["css", "font", "image"],
        Gh, hh, ji, qj, Yj = 0,
        ih, Xj = ul.Node ? [Node.DOCUMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE, Node.DOCUMENT_TYPE_NODE, Node.ELEMENT_NODE, Node.TEXT_NODE] : [],
        im = "onabort onactivate onanimationcancel onanimationend onanimationiteration onanimationstart onauxclick onafterprint onbeforeactivate onbeforedeactivate onbeforeprint onbeforeunload onbegin onblur onbounce oncancel oncanplay oncanplaythrough onchange onclick onclose oncontextmenu oncopy oncuechange oncut ondblclick ondeactivate ondrag ondragend ondragenter ondragexit ondragleave ondragover ondragstart ondrop ondurationchange onemptied onend onended onerror onfinish onfocus onfocusin onfocusout onhashchange oninput oninvalid onkeydown onkeypress onkeyup onlanguagechange onload onloadeddata onloadedmetadata onloadend onloadstart onmessage onmessageerror onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onwheel onoffline ononline onpagehide onpageshow onpaste onpause onplay onplaying onpopstate onprogress onratechange onreadystatechange onrepeat onreset onresize onrejectionhandled onscroll onsecuritypolicyviolation onseeked onseeking onselect onstalled onstart onstorage onsubmit onsuspend ontimeupdate ontransitioncancel ontransitionend ontransitionrun ontoggle onunhandledrejection onunload onvolumechange onwaiting".split(" "),
        Dl = ["radio", "checkbox"],
        Hi, sj = {
            matchesSelector: function(e, h) {
                return Ka(e) ? (e.matches || e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector).call(e, h) : !1
            }
        },
        jm = ["DATALIST", "INPUT", "TEXTAREA", "SELECT", "OPTION"],
        Pk = ["submit", "button", "reset"],
        Qk = "textarea input[type=text] input:not([type]) input[type=password] input[type=hidden] input[type=checkbox] input[type=radio] input[type=date] input[type=month] input[type=week] input[type=datetime-local] input[type=time] input[type=number] input[type=range] input[type=file] input[type=email] input[type=url] input[type=tel] input[type=search] select option".split(" "),
        Xf, Rk, Sk, Tk, Yf, Zf, km = function() {
            function e(h, m) {
                this.Je = h;
                this.Xd = m
            }
            e.prototype.bd = function(h) {
                var m = this;
                return this.Xd.some(function(r) {
                    return m.Je.matchesSelector(h, r.wa())
                })
            };
            e.prototype.ud = function(h) {
                var m = this;
                return this.Xd.some(function(r) {
                    return m.Je.matchesSelector(h, r.wa()) && r.ud()
                })
            };
            return e
        }(),
        Vk = function() {
            function e(h) {
                this.$f = h
            }
            e.prototype.bd = function(h) {
                return this.$f.some(function(m) {
                    return m.wa().test(h)
                })
            };
            return e
        }(),
        Wk = function() {
            function e(h, m, r, B) {
                void 0 === B && (B = new WeakMap);
                this.Wd = h;
                this.Zf = m;
                this.xa = r;
                this.Wb = B
            }
            e.prototype.Ua = function(h) {
                if (ab(h) || ab(h.parentNode)) return 1;
                var m = this.xa ? 1 : 2,
                    r = Ka(h) && h.hasAttribute("data-dtrum-mask"),
                    B = this.Wd.bd(h);
                r ? m = 10 : B && (m = this.xa ? this.pg(h) : 1);
                var V = this.Wb.get(h.parentNode),
                    Fa = r;
                V && (r = this.sg(V, m, r || B), m = r.Mg, Fa = Fa || r.jd);
                this.fh(h, m, Fa);
                return m
            };
            e.prototype.zd = function(h, m) {
                var r = this.xa ? 1 : 16;
                return -1 !== ["value", "placeholder", "label"].indexOf(m) ? this.qg(h, m) : this.Hg(m) || !this.Gg(m) ? 1 : this.Zf.bd(m) ? this.xa ? 16 : 1 : (h = this.Wb.get(h)) ?
                    (r = this.xa ? h.Ac : h.wc, 2 === (r & 2) ? 16 : r) : r
            };
            e.prototype.sg = function(h, m, r) {
                var B = !1;
                h.jd ? (m = 10, B = !0) : (h = this.xa ? h.Ac : h.wc, r || (m = h), this.xa && (m |= h));
                return {
                    Mg: m,
                    jd: B
                }
            };
            e.prototype.fh = function(h, m, r) {
                r = {
                    jd: r
                };
                var B = this.Wb.get(h);
                this.xa ? r.Ac = (B && B.Ac) | m : r.wc = (B && B.wc) | m;
                B && (r = Ea(Ea({}, B), r));
                this.Wb.set(h, r)
            };
            e.prototype.pg = function(h) {
                var m = 2;
                this.Wd.ud(h) && (m |= 8);
                return m
            };
            e.prototype.Gg = function(h) {
                return /^data(-.*)?$/.test(h)
            };
            e.prototype.Hg = function(h) {
                return /^data-dt-(.+)$/.test(h)
            };
            e.prototype.qg =
                function(h, m) {
                    return Bb(h) && "value" === m ? 32 : 2 === (this.Ua(h) & 2) ? 16 : 1
                };
            return e
        }(),
        Xk = function() {
            function e(h) {
                this.value = h
            }
            e.Fg = function(h) {
                return h instanceof e
            };
            e.prototype.wa = function() {
                return this.value
            };
            return e
        }(),
        fk = function() {
            function e(h) {
                this.Ee = !1;
                h = h.split(e.Hd);
                var m = h[1];
                this.value = h[0];
                this.Ee = "" === m
            }
            e.Ig = function(h) {
                return h instanceof e
            };
            e.prototype.wa = function() {
                return this.value
            };
            e.prototype.ud = function() {
                return this.Ee
            };
            e.Hd = "&";
            return e
        }(),
        El = function() {
            function e(h) {
                this.Sg = h
            }
            e.create = function(h) {
                return new e(h)
            };
            e.prototype.wa = function() {
                return this.Sg
            };
            return e
        }(),
        Fl = function() {
            function e(h) {
                this.Ug = h
            }
            e.create = function(h) {
                return new e(h)
            };
            e.prototype.wa = function() {
                return this.Ug
            };
            return e
        }(),
        Gl = function() {
            function e(h, m, r) {
                void 0 === h && Fl.create(2);
                void 0 === m && (m = El.create(0));
                void 0 === r && (r = []);
                this.Rg = m;
                this.rules = r
            }
            e.prototype.wg = function() {
                return this.rules.filter(fk.Ig)
            };
            e.prototype.tg = function() {
                return this.rules.filter(Xk.Fg)
            };
            e.prototype.addRule = function(h) {
                this.rules.push(h)
            };
            e.prototype.xa = function() {
                return 0 === this.Rg.wa()
            };
            return e
        }(),
        mm = function() {
            function e() {}
            e.create = function(h, m) {
                if (!e.validate(m)) throw Error("Invalid masking rule value: " + m + "!");
                switch (h) {
                    case 0:
                        return new fk(m);
                    case 1:
                        return new Xk(new RegExp(m));
                    default:
                        throw Error("Invalid masking rule type: " + h + "!");
                }
            };
            e.validate = function(h) {
                return h && "" !== h.trim()
            };
            return e
        }(),
        Hl = function() {
            function e(h) {
                var m = this;
                this.Zc = [];
                this.Lg = new WeakMap;
                Array.isArray(h) ? h.forEach(function(r) {
                    m.ue(r)
                }) : this.ue(h)
            }
            e.prototype.ue = function(h) {
                var m;
                h = h.split(",");
                2 === Number(h[0]) ? m = {
                    $c: h.slice(0, 4).join(",")
                } : m = {
                    Ng: h.slice(0, 5).join(","),
                    $c: h.slice(5, 9).join(",")
                };
                if (m.$c) {
                    h = m.$c.split(",").map(decodeURIComponent);
                    var r = h[2];
                    m = h[3];
                    h = Fl.create(Number(h[1]));
                    r = El.create(Number(r));
                    m = Nd(m ? m.split(";") : []);
                    m = new Gl(h, r, m)
                } else m = ze(m.Ng);
                m instanceof Gl ? (h = new km(sj, m.wg()), r = new Vk(m.tg()), m = new Wk(h, r, m.xa(), this.Lg), this.Zc.push(m)) : (m = this.ad = m, Rk = new WeakMap, Sk = new WeakMap, Tk = new WeakMap, Yf = new WeakMap, Zf =
                    new WeakMap, Xf = m, Oa(Xf.rb, Rk), Oa(Xf.pb, Sk), Oa(Xf.ub, Tk))
            };
            e.prototype.Ua = function(h) {
                if (this.ad) return db(h);
                for (var m, r = 0, B = this.Zc; r < B.length; r++) {
                    var V = B[r].Ua(h);
                    1 !== V && (m |= V)
                }
                return m || 1
            };
            e.prototype.zd = function(h, m) {
                if (this.ad) return nb(h, m);
                for (var r, B = 0, V = this.Zc; B < V.length; B++) {
                    var Fa = V[B].zd(h, m);
                    1 !== Fa && (r |= Fa)
                }
                return r || 1
            };
            return e
        }(),
        Yk = ["button", "datalist", "select", "option"],
        Il = "button checkbox radio date month week datetime-local time number range".split(" "),
        ff = {
            sh: function(e) {
                return 2 ===
                    (Td.Ua(e) & 2)
            },
            Kj: function(e) {
                return 4 === (Td.Ua(e) & 4)
            },
            Jj: function(e) {
                return 2 === (Td.Ua(e) & 2)
            },
            rh: function(e) {
                var h;
                !(h = 8 === (Td.Ua(e) & 8)) && (h = 4 === (Td.Ua(e) & 4)) && (h = (e = e.nodeType === Node.TEXT_NODE ? e.parentNode : e) && "INPUT" === e.nodeName && -1 !== Il.indexOf(e.type.toLowerCase()), h = -1 !== Yk.indexOf(e.nodeName.toLowerCase()) || h);
                return h
            }
        },
        Td, Hb = Date.prototype.toJSON,
        Eb = function() {
            function e(h, m) {
                if (!h || !m) throw mb("Invalid parameters for mutation construction", {
                    type: h,
                    Sh: m
                }), Error("Invalid parameters");
                this.type =
                    h;
                this.I = m.I;
                this.nodeName = m.nodeName;
                this.namespaceURI = m.namespaceURI;
                this.nodeValue = m.nodeValue;
                this.attributeName = m.attributeName;
                this.Pa = m.Pa;
                this.ga = m.ga;
                this.ja = m.ja;
                this.na = m.na;
                this.ia = m.ia
            }
            e.decode = function(h) {
                try {
                    var m = JSON.parse(h);
                    return new e(m.type, {
                        I: m.nodeId,
                        nodeName: m.nodeName,
                        namespaceURI: m.namespaceURI,
                        nodeValue: m.nodeValue,
                        attributeName: m.attributeName,
                        Pa: m.attributeValue,
                        ga: m.parentId,
                        ja: m.previousId,
                        na: m.nextId,
                        ia: m.masking
                    })
                } catch (r) {
                    return null
                }
            };
            e.prototype.Fa = function() {
                return ya({
                    type: this.type,
                    nodeId: this.I,
                    nodeName: this.nodeName,
                    namespaceURI: this.namespaceURI,
                    nodeValue: this.nodeValue,
                    attributeName: this.attributeName,
                    attributeValue: this.Pa,
                    parentId: this.ga,
                    previousId: this.ja,
                    nextId: this.na,
                    masking: this.ia
                })
            };
            e.prototype.Gf = function() {};
            e.Ah = "removeNode";
            e.Jf = "updateNode";
            return e
        }(),
        Ag = function(e) {
            function h(m, r, B) {
                m = e.call(this, m, r) || this;
                m.node = B;
                return m
            }
            qa(h, e);
            h.Mh = function(m, r, B) {
                mb("Invalid parameters for mutation construction", {
                    type: m,
                    node: r,
                    Gb: B
                })
            };
            h.create = function(m, r, B) {
                void 0 ===
                    r && (r = {});
                var V = r.node;
                r = r.Gb;
                if (!m || !B && (!P(V) || "updateAttribute" === m && !r)) return h.Mh(m, V, r), null;
                var Fa;
                B ? Fa = B : P(V) && (Fa = Kc(m, V, r));
                return Fa ? new h(m, Fa, V) : (h.Mh(m, V, r), null)
            };
            h.prototype.Gf = function() {
                if (this.node) {
                    var m = yc(this.type, this.node);
                    m && (this.I = m.I, this.ga = this.ga || m.ga, this.ja = this.ja || m.ja, this.na = this.na || m.na)
                }
            };
            return h
        }(Eb),
        Cg = {
            store: void 0
        },
        Xh = {
            initialize: function(e) {
                void 0 === e && (e = new Set);
                Cg.store = e
            },
            add: G(function(e) {
                Cg.store.add(e)
            }, Cg),
            getEntries: G(xa, Cg),
            remove: G(function(e) {
                    Cg.store.delete(e)
                },
                Cg),
            size: G(function() {
                return xa().length
            }, Cg)
        },
        pf = function(e) {
            function h(m) {
                var r = m.type,
                    B = m.I;
                B = void 0 === B ? h.Fh() : B;
                m = eb(m, ["type", "nodeId"]);
                m = Ea({
                    namespaceURI: "dynatrace-metadata",
                    I: B
                }, m);
                return e.call(this, r, m) || this
            }
            qa(h, e);
            h.Fh = function() {
                return "".concat(h.$i).concat(++h.id)
            };
            h.id = 0;
            h.$i = "m";
            return h
        }(Eb),
        Wd = function(e) {
            function h() {
                return null !== e && e.apply(this, arguments) || this
            }
            qa(h, e);
            return h
        }(function() {
            function e(h, m) {
                void 0 === m && (m = !1);
                this.time = h;
                this.Rd = m;
                this.set = [];
                this.size = this.set.length
            }
            e.decode = function(h) {
                try {
                    var m = JSON.parse(h);
                    if (m && "Mutation List" === m.type) {
                        var r = m.payload,
                            B = new e(r.time, r.checkIROnSnapshotFlag);
                        h = 0;
                        for (var V = r.entries; h < V.length; h++) {
                            var Fa = Eb.decode(V[h]);
                            Fa && B.add(Fa)
                        }
                        return B
                    }
                } catch (ha) {}
            };
            e.jg = function(h, m) {
                var r;
                void 0 === r && (r = !1);
                var B = new e(m, r);
                h.forEach(function(V) {
                    B.add(V)
                });
                return B
            };
            e.prototype.add = function(h) {
                h instanceof Eb && (this.set.push(h), this.size = this.set.length)
            };
            e.prototype.Dh = function(h) {
                this.set = this.set.filter(function(m) {
                    return m instanceof
                    Eb && !h(m)
                });
                this.size = this.set.length
            };
            e.prototype.forEach = function(h) {
                this.set.forEach(function(m) {
                    return m instanceof Eb && h(m)
                })
            };
            e.prototype.Fa = function() {
                return ya({
                    type: "Mutation List",
                    payload: {
                        checkIROnSnapshotFlag: this.Rd,
                        time: this.time,
                        entries: this.set.map(function(h) {
                            return h.Fa()
                        })
                    }
                })
            };
            return e
        }()),
        Yh, yi = "process",
        ug, hl = "data-dtmask",
        il = ["src", "srcset"],
        mk = ff,
        Dg, Cj = {
            initialize: function(e) {
                var h;
                a: {
                    if ((h = e.MutationObserver) && "function" === typeof h && jd(h)) {
                        if (h.prototype) b: {
                            for (var m = {}, r =
                                    h.prototype; r;) {
                                for (var B = 0, V = Object.getOwnPropertyNames(r); B < V.length; B++) {
                                    var Fa = V[B];
                                    try {
                                        var ha = r[Fa];
                                        if ("function" === typeof ha && !jd(ha)) {
                                            var Ya = void 0;
                                            break b
                                        }
                                        m[Fa] = m[Fa] || ha
                                    } catch (cb) {}
                                }
                                r = r.prototype || r.__proto__
                            }
                            Ya = m
                        }
                        else Ya = {};
                        if (Ya) {
                            h = {
                                Qh: h,
                                prototype: Ya
                            };
                            break a
                        }
                    }
                    h = void 0
                }
                h || (h = e.Zone && e.Zone.__symbol__ && e[e.Zone.__symbol__("MutationObserver")] ? e[e.Zone.__symbol__("MutationObserver")] : void 0);
                Dg = h
            },
            $j: function() {
                return !!Dg
            },
            Si: function(e) {
                e = Dg ? Dg && "function" === typeof Dg.Qh && "prototype" in Dg ?
                    pd(Dg, e) : new Dg(e) : void 0;
                return e
            },
            xi: function() {
                return !!Dg && !!ed.Worker && "undefined" !== typeof ed.Worker
            }
        },
        Eg, lg = null,
        Th, fh = {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        },
        Ff = function() {
            function e(h, m, r, B) {
                void 0 === m && (m = {
                    pa: null
                });
                void 0 === r && (r = dc.Aa);
                void 0 === B && (B = Ac());
                this.type = h;
                this.Aa = r;
                this.time = B;
                this.pa = m.pa;
                this.url = m.url;
                this.Cd = m.Cd;
                this.hc = m.hc;
                this.yd = m.yd;
                this.x = m.x;
                this.y = m.y;
                this.width = m.width;
                this.height = m.height;
                this.top = m.top;
                this.left = m.left;
                this.name = m.name;
                this.value =
                    m.value;
                this.duration = m.duration
            }
            e.decode = function(h) {
                try {
                    return new e(h.type || null, {
                        url: h.url,
                        Cd: h.isIframe,
                        hc: h.tabId,
                        pa: h.targetId || null,
                        x: h.x,
                        y: h.y,
                        width: h.width,
                        height: h.height,
                        top: h.top,
                        left: h.left,
                        name: h.name,
                        value: h.value,
                        duration: h.duration,
                        yd: h.excludedView
                    }, dc.Aa, h.time)
                } catch (m) {
                    return null
                }
            };
            e.prototype.Mi = function() {
                var h;
                void 0 === h && (h = 0);
                return {
                    viewId: this.Aa,
                    time: this.time - h,
                    type: this.type,
                    url: this.url,
                    isIframe: this.Cd,
                    tabId: this.hc,
                    targetId: this.pa,
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height,
                    top: this.top,
                    left: this.left,
                    name: this.name,
                    value: this.value,
                    duration: this.duration,
                    excludedView: this.yd
                }
            };
            return e
        }(),
        Ej, Qh = ff,
        Vi = function(e) {
            function h(m) {
                var r = m.type,
                    B = m.I;
                m = eb(m, ["type", "nodeId"]);
                B = Ea({
                    namespaceURI: "css-stylesheet",
                    I: B
                }, m);
                return e.call(this, r, B) || this
            }
            qa(h, e);
            return h
        }(Eb),
        oh;
    (oh || (oh = {})).VISIT_ID = "visitId";
    var Oe;
    (function(e) {
        e.METADATA = "metadata";
        e.URL = "url"
    })(Oe || (Oe = {}));
    var cf;
    (function(e) {
        e.BODY = "body";
        e.HASH = "hash";
        e.URL = "url"
    })(cf || (cf = {}));
    var md;
    (md || (md = {})).URL = "url";
    var Ub;
    (Ub || (Ub = {})).COUNTER = "counter";
    var ic = "srrcmm_",
        Qe = "srrcir_",
        uh = "recorder/platform/indexeddb",
        Ce, Ni, Dj;
    (Dj || (Dj = {})).VALUE = "value";
    var Xi;
    (function(e) {
        e.HASH = "hash";
        e.TTL = "ttl"
    })(Xi || (Xi = {}));
    var Vf = "key",
        wh = 15E3,
        Wh = 0,
        ie = {
            initialize: function(e) {
                void 0 === e && (e = sb.dT_.ncv("rcdec"), e = !e || 0 >= e ? 12096E5 : e);
                Wh = e;
                ie.Dj()
            },
            Fj: function(e) {
                return Of("visit", "".concat(Qe).concat(e))
            },
            ni: function(e) {
                return qe("visit", e)
            },
            Ui: function(e) {
                return Ua("visit", "".concat(Qe).concat(e)).then(function(h) {
                    if (He(h,
                            Qe)) return h
                })
            },
            Vi: me,
            size: function() {
                return me().then(function(e) {
                    return e.length
                }).catch(function() {
                    return 0
                })
            },
            nj: function(e) {
                var h, m = (h = {}, h[Vf] = "".concat("srrcur_").concat(e), h.visitId = sb.dT_.gVI(), h.url = e, h);
                qe("visit", m)
            },
            fj: function(e) {
                return Ua("visit", "".concat("srrcur_").concat(e)).then(cg).catch(function() {
                    return !1
                })
            },
            Kh: xe,
            mj: function(e) {
                return xe(e).then(function(h) {
                    var m;
                    h || (h = (m = {}, m[Vf] = "".concat("srrckr_").concat(e), m.hash = e, m.ttl = sb.dT_.nw() + Wh, m), qe("global", h))
                })
            },
            Dj: function() {
                return Fg("global").then(function(e) {
                    for (var h =
                            sb.dT_.nw(), m = [], r = 0; r < e.length; r++) {
                        var B = e[r];
                        He(B, "srrckr_") && B.ttl < h && m.push(Of("global", "".concat("srrckr_").concat(B.hash)))
                    }
                    return yb.allSettled(m)
                }).catch(function() {})
            }
        },
        bh = 0,
        vk = {
            initialize: function() {
                bh = 0;
                Q().catch(function() {});
                return {
                    Rj: rb,
                    Qi: zb,
                    Xj: Nb
                }
            }
        },
        dj, Ch = {},
        Uh, li = !1,
        tj = function(e) {
            function h(m, r, B, V) {
                void 0 === B && (B = -2);
                if (!h.hj(m, r, B, V)) throw mb("Invalid parameters for mutation construction", {
                    type: m,
                    Df: r,
                    Sh: V
                }), Error("Invalid parameters");
                var Fa = r && r.parentStyleSheet && r.parentStyleSheet.cssRules[B -
                    1];
                B = r && r.parentStyleSheet && r.parentStyleSheet.cssRules[B + 1];
                if (!V) a: {
                    V = Hg(m, r, Fa, B);
                    switch (m) {
                        case "addNode":
                            V.nodeName = "#text";
                            V.nodeValue = Yc(r);
                            break a;
                        case "updateNode":
                        case "removeNode":
                            break a
                    }
                    V = void 0
                }
                if (!V) throw mb("Invalid parameters for mutation construction", {
                    type: m,
                    Df: r
                }), Error("Invalid parameters");
                m = e.call(this, m, V) || this;
                m.Df = r;
                m.zj = Fa;
                m.sj = B;
                return m
            }
            qa(h, e);
            h.hj = function(m, r, B, V) {
                return m ? !(!V && (!r || "removeNode" !== m && void 0 === B)) : !1
            };
            h.prototype.Gf = function() {
                if (this.Df) {
                    var m = Hg(this.type,
                        this.Df, this.zj, this.sj);
                    this.I = m.I;
                    this.ga = this.ga || m.ga;
                    this.ja = this.ja || m.ja;
                    this.na = this.na || m.na
                }
            };
            return h
        }(Eb),
        uj = "snapshot",
        mc, Ib = [],
        Qb = [],
        Lc;
    (function(e) {
        e.CLUSTER_REJECTION = "Cluster Rejection";
        e.INVALID_PARAMS = "Invalid Params";
        e.NETWORK_ERROR = "Network Error";
        e.UNKNOWN_ERROR = "Unknown Error"
    })(Lc || (Lc = {}));
    var vj = function(e) {
            function h(m) {
                return e.call(this, m, "Invalid Params") || this
            }
            qa(h, e);
            return h
        }(function(e) {
            function h(m, r) {
                m = e.call(this, m) || this;
                m.code = r;
                return m
            }
            qa(h, e);
            return h
        }(Error)),
        De = !1,
        nf = 5,
        ui = [],
        $f = 0,
        Re, Rh = !1,
        mi, cj, wj, Zh = !1,
        ei = [],
        Bh, Oi, Fj, zh, Pi = {
            view: "v",
            move: "m",
            click: "c",
            resize: "r",
            scroll: "s",
            input: "i"
        },
        Qi = function() {
            function e() {
                this.start = Ac();
                this.end = Ac();
                this.set = [];
                this.size = this.set.length
            }
            e.prototype.add = function(h) {
                this.end = Ac();
                h.time < this.start && (this.start = h.time);
                this.set.push(h);
                this.size = this.set.length
            };
            e.prototype.forEach = function(h) {
                dd(this.set, h)
            };
            e.prototype.Fa = function() {
                this.end = Ac();
                var h = this.ui();
                this.forEach(h);
                return Nh(this.set, this.start)
            };
            e.prototype.ui = function() {
                var h = this;
                return function(m) {
                    return e.ai(h, m)
                }.bind(this)
            };
            e.ai = function(h, m) {
                m.Yj = m.time - h.start
            };
            return e
        }(),
        ni = "dyn-sr-retryKeys",
        Ri = "dyn-sr-retry-",
        hk = "mbfview",
        te, jh = !1,
        bj, ve = {
            Hb: 1,
            wf: 1
        },
        gk = "focus blur resize scroll keydown keyup mousemove mousedown mouseup click touchstart touchend touchmove".split(" "),
        wd = !1,
        Se, ch = !1,
        Ef = !1,
        Pj;
    var xj = ed.dT_ || {};
    var oi = /(.*)(?:\((.*)\))\|?(.*)/,
        Si;
    (function(e) {
        e.FAIL = "fail";
        e.SUCCESS = "success"
    })(Si || (Si = {}));
    var Yi = !1,
        og, dh, hc = {};
    (function() {
        hc = {
            Di: pc("ww"),
            bj: pc("iS"),
            Oj: pc("stu"),
            addEventListener: pc("ael"),
            removeEventListener: pc("rel"),
            now: pc("nw"),
            setInterval: pc("si"),
            clearInterval: pc("cI"),
            setTimeout: pc("st"),
            clearTimeout: pc("ct"),
            Nj: pc("svl"),
            lj: pc("lvl"),
            Ej: pc("rvl"),
            ck: pc("sMPS"),
            Ih: pc("ncv"),
            Nb: pc("bcv"),
            Ad: pc("scv"),
            wi: pc("cVIn"),
            Mj: pc("sv"),
            kj: pc("lv"),
            Wi: pc("gVI"),
            Sj: pc("uVT"),
            ji: pc("aBPSL"),
            Oi: pc("gBP"),
            ki: pc("aBPSCC"),
            postError: pc("pe"),
            Uj: pc("wst"),
            Vj: pc("wsp"),
            dk: pc("wtt"),
            Aj: pc("rpm"),
            zf: pc("ism"),
            forEach: pc("fE"),
            ej: pc("icr"),
            ak: pc("las"),
            Zj: pc("gBI"),
            Ri: pc("gMu"),
            Ci: pc("cAE"),
            mi: function(e) {
                pc("addE")("ACTION_ENTERED", e)
            },
            Cj: function(e) {
                pc("remE")("ACTION_ENTERED", e)
            },
            li: pc("addE")
        }
    })();
    var zi = xj,
        Sh = hc.addEventListener,
        mg = hc.removeEventListener,
        Ac = hc.now,
        dd = hc.forEach,
        Af = hc.setInterval,
        Bf = hc.clearInterval,
        tg = hc.setTimeout,
        Sg = hc.clearTimeout,
        Gf = hc.Nj,
        Eh = hc.lj,
        xh = hc.Ej,
        ng = hc.Wi,
        Wl = hc.Sj,
        Pe = hc.Nb,
        bd = hc.Ih,
        Wi = hc.ji,
        ph = hc.Oi,
        Uc = hc.Uj,
        qh = hc.Vj,
        gf = hc.Aj,
        Cf = hc.ej,
        Dd = hc.li,
        gd, ae;
    (function(e) {
        e.KILLED_EMERGENCY = "k-emg";
        e.KILLED_ERROR =
            "k-err";
        e.KILLED_INVALID_RESPONSE = "k-ires";
        e.KILLED_MIN_JS_AGENT_VERSION = "k-min";
        e.KILLED_NO_LICENSE = "k-lic";
        e.KILLED_WRONG_CONTENT_TYPE = "k-mime";
        e.MODULE_ABSENT_IN_FEATURE_HASH = "smbi";
        e.NO_ACTIVITY = "idle";
        e.NO_WORKER = "nowk";
        e.OPT_IN_MODE = "optin";
        e.OPTED_OUT_SESSION = "optout";
        e.ROBOT_DETECTED = "bot";
        e.SAMPLED_OUT = "sout";
        e.UNKNOWN = "no";
        e.UNSUPPORTED_BROWSER = "nosup"
    })(ae || (ae = {}));
    var Ed;
    (function(e) {
        e.ERROR_MESSAGE = "errmsg";
        e.IFRAME = "iframe";
        e.NO_WORKER_REASON = "nowkreason";
        e.REASON_KEY = "r";
        e.VISIT_ID =
            "visit"
    })(Ed || (Ed = {}));
    var pg;
    (function(e) {
        e.CANNOT_RUN_WORKER_IN_UI_THREAD = "nowkui";
        e.FAILED_RUNNING_WORKER_IN_UI_THREAD = "flwkui"
    })(pg || (pg = {}));
    var se = (gd = {}, gd.no = 100, gd.idle = 200, gd.optin = 300, gd.sout = 400, gd.optout = 500, gd["k-min"] = 700, gd["k-lic"] = 800, gd["k-err"] = 900, gd["k-ires"] = 950, gd["k-mime"] = 1E3, gd["k-emg"] = 1050, gd.nowk = 1100, gd.nosup = 1300, gd.bot = 1400, gd.smbi = 1500, gd),
        qg = "dtsrNOSR",
        rh = function() {
            function e(h) {
                this.window = h
            }
            e.prototype.Li = function() {
                Cj.initialize(this.window);
                Cj.xi() ? (Te("init", [
                    ["fh", hc.Ad("featureHash")]
                ]), dm(), sl(), Di()) : Te("noinit", [
                    ["fh", hc.Ad("featureHash")],
                    ["mutobs", "0"]
                ])
            };
            return e
        }();
    ed.dT_ && ed.dT_.initialized && (Qc = sb.dT_.gVI(), sb.dT_.aNVL(Z), void 0 === window.WeakMap || void 0 === window.Map ? Wf("nosup") : sb.dT_.iBt() ? Wf("bot") : sb.dT_.smbi("Q") ? (Wf("no"), (new rh(ed)).Li()) : Wf("smbi"))
})();
(function() {
    function Ia() {
        Ia = Object.assign || function(n) {
            for (var x, y = 1, L = arguments.length; y < L; y++) {
                x = arguments[y];
                for (var M in x) Object.prototype.hasOwnProperty.call(x, M) && (n[M] = x[M])
            }
            return n
        };
        return Ia.apply(this, arguments)
    }

    function jb(n, x, y, L) {
        function M(X) {
            return X instanceof y ? X : new y(function(ka) {
                ka(X)
            })
        }
        return new(y || (y = od))(function(X, ka) {
            function wa(xb) {
                try {
                    Qa(L.next(xb))
                } catch (Pb) {
                    ka(Pb)
                }
            }

            function Va(xb) {
                try {
                    Qa(L["throw"](xb))
                } catch (Pb) {
                    ka(Pb)
                }
            }

            function Qa(xb) {
                xb.done ? X(xb.value) : M(xb.value).then(wa,
                    Va)
            }
            Qa((L = L.apply(n, x || [])).next())
        })
    }

    function nb(n, x) {
        function y(Qa) {
            return function(xb) {
                return L([Qa, xb])
            }
        }

        function L(Qa) {
            if (X) throw new TypeError("Generator is already executing.");
            for (; Va && (Va = 0, Qa[0] && (M = 0)), M;) try {
                if (X = 1, ka && (wa = Qa[0] & 2 ? ka["return"] : Qa[0] ? ka["throw"] || ((wa = ka["return"]) && wa.call(ka), 0) : ka.next) && !(wa = wa.call(ka, Qa[1])).done) return wa;
                if (ka = 0, wa) Qa = [Qa[0] & 2, wa.value];
                switch (Qa[0]) {
                    case 0:
                    case 1:
                        wa = Qa;
                        break;
                    case 4:
                        return M.label++, {
                            value: Qa[1],
                            done: !1
                        };
                    case 5:
                        M.label++;
                        ka = Qa[1];
                        Qa = [0];
                        continue;
                    case 7:
                        Qa = M.da.pop();
                        M.J.pop();
                        continue;
                    default:
                        if (!(wa = M.J, wa = 0 < wa.length && wa[wa.length - 1]) && (6 === Qa[0] || 2 === Qa[0])) {
                            M = 0;
                            continue
                        }
                        if (3 === Qa[0] && (!wa || Qa[1] > wa[0] && Qa[1] < wa[3])) M.label = Qa[1];
                        else if (6 === Qa[0] && M.label < wa[1]) M.label = wa[1], wa = Qa;
                        else if (wa && M.label < wa[2]) M.label = wa[2], M.da.push(Qa);
                        else {
                            wa[2] && M.da.pop();
                            M.J.pop();
                            continue
                        }
                }
                Qa = x.call(n, M)
            } catch (xb) {
                Qa = [6, xb], ka = 0
            } finally {
                X = wa = 0
            }
            if (Qa[0] & 5) throw Qa[1];
            return {
                value: Qa[0] ? Qa[1] : void 0,
                done: !0
            }
        }
        var M = {
                label: 0,
                B: function() {
                    if (wa[0] &
                        1) throw wa[1];
                    return wa[1]
                },
                J: [],
                da: []
            },
            X, ka, wa, Va;
        return Va = {
            next: y(0),
            "throw": y(1),
            "return": y(2)
        }, "function" === typeof Symbol && (Va[Symbol.iterator] = function() {
            return this
        }), Va
    }

    function db(n, x) {
        void 0 === x && (x = []);
        var y = G.dT_;
        y = (null === y || void 0 === y ? 0 : y.iIO) ? y.iIO : null;
        return !(null === y || void 0 === y || !y(n, x))
    }

    function kb(n) {
        return n && "IFRAME" === n.nodeName
    }

    function Oa(n) {
        return n && "IMG" === n.nodeName
    }

    function Ra() {
        return oe
    }

    function Wa(n, x, y) {
        if (!$c[y]) {
            var L = new Image;
            x = {
                url: y,
                time: ya.dT_.nw(),
                element: L,
                vj: x
            };
            Bb(L, x, n);
            L.src = y;
            $c[y] = L
        }
        return $c[y]
    }

    function Sa(n, x, y) {
        var L = Wc[x][y] || [];
        if (n.element) {
            var M = ya.dT_.aFI(L, function(X) {
                return X.element === n.element
            });
            0 <= M && L.splice(M, 1)
        }
        ab(n, x, y)
    }

    function ab(n, x, y) {
        Wc[x][y] || (Wc[x][y] = []);
        Wc[x][y].push(n)
    }

    function Ka(n, x, y) {
        x = Wc[x][y] || [];
        n = x.indexOf(n);
        0 <= n && x.splice(n, 1)
    }

    function Bb(n, x, y) {
        function L() {
            Ka(x, 2, y);
            Sa(x, 1, y);
            var X = L;
            n.removeEventListener("load", M);
            n.removeEventListener("error", X)
        }

        function M() {
            Ka(x, 2, y);
            var X = L;
            n.removeEventListener("load",
                M);
            n.removeEventListener("error", X)
        }
        ab(x, 2, y);
        n.addEventListener("load", M);
        n.addEventListener("error", L)
    }

    function Ea(n) {
        return Ae && db(n, 13) && "navigation" !== n.entryType || db(n, ["_dtCl"])
    }

    function ba() {}

    function qa(n) {
        return 0 < n.left + n.width && n.left < U() && 0 < n.top + n.height && n.top < va()
    }

    function eb(n) {
        return n && 0 < n.width && 0 < n.height && qa(n)
    }

    function va() {
        jd || (jd = G.innerHeight || zd.clientHeight);
        return Cc.bwsH || jd
    }

    function U() {
        pd || (pd = G.innerWidth || zd.clientWidth);
        return Cc.bwsW || pd
    }

    function Y(n) {
        var x = U(),
            y = va();
        return {
            top: 0,
            left: 0,
            width: Math.max(0, Math.min(n.left + n.width, x)) - Math.max(0, Math.min(n.left, x)),
            height: Math.max(0, Math.min(n.top + n.height, y)) - Math.max(0, Math.min(n.top, y))
        }
    }

    function Na(n, x, y) {
        if (!y && La(n)) return !0;
        n = y || W(x);
        (x = "hidden" === n.visibility || "none" === n.display || "0" === n.opacity || "polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)" === n.clipPath) || (x = n.transform || "", n = !1, y = x.indexOf("("), 0 < y && (x = x.substring(y + 1, x.length - 1).split(", "), n = "0" === x[0], 6 === x.length ? n = n || "0" === x[3] : 16 === x.length &&
            (n = n || "0" === x[5] || "0" === x[10])), x = n);
        return x
    }

    function La(n) {
        if (0 < Lb && n.dd >= Lb) return n.ed++, !0;
        n.dd++;
        return !1
    }

    function ea(n) {
        return Math.ceil(n.width * n.height)
    }

    function S(n, x, y, L, M, X) {
        var ka;
        void 0 === X && (X = "");
        try {
            if (!L && (L = P(x, n.Ca, M), !eb(L))) return null;
            M = L;
            var wa = (ka = {}, ka.url = X, ka.time = 0, ka.node = x, ka.v = !Na(n, x, y), ka.area = ea(Y(M)), ka.offset = {
                    top: M.top,
                    left: M.left,
                    width: M.width,
                    height: M.height
                }, ka.is = 0, ka),
                Va = ya.dT_.tau(X);
            (n = Ba) && n.test(Va) && (wa.is = 2);
            return wa
        } catch (Qa) {}
        return null
    }

    function P(n,
        x, y) {
        void 0 === x && (x = new WeakMap);
        var L = ya.dT_.gFId();
        var M = x;
        x = M.get(n);
        x || (x = {}, M.set(n, x));
        if (x[L]) L = x[L];
        else {
            M = G.pageYOffset;
            var X = n.clientTop,
                ka = G.pageXOffset,
                wa = n.clientLeft,
                Va = 0,
                Qa = 0;
            Ca(n) && (Va = n.offsetWidth, Qa = n.offsetHeight);
            Va = {
                top: 0,
                left: 0,
                offsetWidth: Va,
                offsetHeight: Qa,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight
            };
            if ("function" === typeof n.getBoundingClientRect) try {
                var xb = n.getBoundingClientRect(),
                    Pb = xb.left;
                Va.top = xb.top + M - X;
                Va.left = Pb + ka - wa
            } catch (Dc) {}
            L = x[L] = Va
        }
        xb = L.top;
        Pb = L.left;
        y && (xb += y.top, Pb += y.left);
        y = {
            top: xb,
            left: Pb,
            width: L.clientWidth,
            height: L.clientHeight
        };
        Ca(n) && (y.width = L.offsetWidth, y.height = L.offsetHeight);
        return y
    }

    function ma(n) {
        return n.area > xa && n.v && 0 === n.is && 0 < n.time
    }

    function Ja(n, x) {
        for (var y = 0; y < x.length; y++) {
            var L = x[y],
                M = 0,
                X = L === n ? 2 : 0;
            ma(L) && (X = Math.max(X, 1));
            0 === X && (M = 0, L.v || (M += 1), L.area > xa || (M += 2), 0 !== L.is && (M += 4));
            L.relevance = X;
            L.ireason = M
        }
    }

    function O(n) {
        if (n.length) return ya.dT_.red(n, function(x, y) {
            return ma(y) && (!x || x.time <= y.time) ? y : x
        }, void 0)
    }

    function ca() {
        var n =
            ya.dT_.bcv,
            x = ya.dT_.scv,
            y = ya.dT_.ncv,
            L = ya.dT_.de(x("iub"));
        try {
            L && (Ba = new RegExp(L, "i"))
        } catch (M) {}
        Da = n("vcfi");
        Ma = y("vcx");
        sa = y("tvc");
        Ha = x("uana");
        ob = ya.dT_.puesc(x("mb"));
        Pa = y("vcit");
        gb = 1E3 * y("oat");
        gc = n("fvdi");
        Lb = y("vscl");
        xa = y("vct");
        Tb = n("ccNcss");
        ac = n("vrt");
        Oc = n("vcsb")
    }

    function I(n) {
        for (var x = 0; x < id.length; x++)
            if (id[x] === n) {
                id.splice(x, 1);
                break
            }
    }

    function J(n, x) {
        void 0 === x && (x = !1);
        for (var y = id.slice(), L = id.length = 0; L < y.length; L++)(0, y[L])(n, x)
    }

    function fa(n) {
        return !!n && "about:blank" !== n &&
            n !== location.href && n !== location.href.substring(0, location.href.lastIndexOf("/") + 1) && n !== document.baseURI
    }

    function Z(n) {
        try {
            return !!n.contentWindow && !ya.dT_.gNNTV(n.contentWindow.performance, "loadEventEnd")
        } catch (x) {
            return !1
        }
    }

    function Aa(n) {
        return !!n.area
    }

    function W(n, x) {
        void 0 === x && (x = G);
        return x.getComputedStyle(n)
    }

    function Ca(n) {
        var x = de.get(n);
        if (x) return x;
        x = (db(n, 9) || n && n.nodeType && 1 === n.nodeType) && ("string" === typeof n.textContent || "string" === typeof n.innerText);
        de.set(n, x);
        return x
    }

    function bb() {
        var n =
            ya.dT_.gto();
        return function(x, y) {
            var L = y.duration,
                M = n + y.startTime + L;
            !L && Ea(y) && (M = n + y.responseEnd);
            return Math.max(x, M)
        }
    }

    function lb(n, x, y) {
        if (n) {
            var L;
            var M = (L = {}, L.time = n.time, L.offset = n.offset, L.area = n.area, L.url = n.url, L.v = n.v, L.node = n.node, L.is = 0, L);
            M.v && (M.v = x);
            y.push(M)
        }
    }

    function Ab(n) {
        var x;
        try {
            if (n && n.dT_) {
                var y = n.dT_;
                if (y && "ea" in y) {
                    var L;
                    if (L = "10295240705110949" === y.version && !!y.gLVD) {
                        var M = G.dT_,
                            X = !M.bcv("ac") || M.scv("app") === y.scv("app"),
                            ka = M.scv("postfix"),
                            wa = y.scv("postfix");
                        L = X && ka ===
                            wa
                    }
                    var Va = L
                } else Va = !1;
                Va && (x = y)
            }
        } catch (Qa) {}
        return x
    }

    function oa(n, x, y, L, M, X, ka) {
        return jb(this, void 0, void 0, function() {
            var wa, Va;
            return nb(this, function(Qa) {
                switch (Qa.label) {
                    case 0:
                        return (wa = S(n, x, y, L)) && x.contentWindow ? [4, Xa(n, x.contentWindow, wa.offset, void 0, M)] : [3, 2];
                    case 1:
                        Va = Qa.B(), ya.dT_.fE(Va, function(xb) {
                            xb.v = xb.v && X;
                            ka.push(xb)
                        }), Qa.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }

    function ub(n, x, y) {
        var L = n.gLVD();
        return L ? (lb(L.k, x, y), od.resolve()) : new od(function(M) {
            n.addE("VISUALLY_COMPLETE", function(X) {
                lb(X.detail.k,
                    x, y);
                M()
            })
        })
    }

    function kc(n, x, y, L, M, X, ka) {
        void 0 === ka && (ka = !1);
        return new od(function(wa, Va) {
            var Qa = !1,
                xb;
            La(n) || (xb = W(x, y));
            var Pb = xb && xb.backgroundImage;
            if (Pb && "none" !== Pb) {
                var Dc = ya.dT_.aM(Pb.split(","), Gb);
                Pb = 0;
                for (Dc = ya.dT_.aFr(Dc, Vb); Pb < Dc.length; Pb++) {
                    var Ec = Dc[Pb];
                    (Ec = S(n, x, xb, X, L, ya.dT_.tau(Ec))) && M.push(Ec)
                }
            }
            if (kb(x)) {
                var qc = x.contentWindow;
                Qa = function() {
                    var kd = xb,
                        Jd = ka,
                        Xd = Ab(qc),
                        vd = !Na(n, x) && qa(X);
                    (Xd ? ub(Xd, vd, M) : oa(n, x, kd, X, Jd, vd, M)).then(wa).catch(Va)
                };
                !ka && Z(x) ? (x.addEventListener("load",
                    Qa), x.addEventListener("error", Qa)) : Qa();
                Qa = !0
            }
            Oa(x) && (Ec = tc(x)) && (Pb = S(n, x, xb, X, L, Ec)) && M.push(Pb);
            Qa || wa()
        })
    }

    function Gc(n, x, y, L, M, X) {
        void 0 === X && (X = !1);
        return jb(this, void 0, void 0, function() {
            var ka, wa;
            return nb(this, function(Va) {
                switch (Va.label) {
                    case 0:
                        return Va.J.push([0, 6, , 7]), ka = P(x, n.Ca), wa = y.getComputedStyle(x), (Ca(x) ? x.offsetWidth * x.offsetHeight > xa : x.clientWidth * x.clientHeight > xa) ? eb(ka) ? [4, kc(n, x, y, L, M, ka, X)] : [3, 2] : [3, 3];
                    case 1:
                        Va.B(), Va.label = 2;
                    case 2:
                        return [3, 5];
                    case 3:
                        return ya.dT_.iIO(x,
                            10) || wa.backgroundImage && "none" !== wa.backgroundImage ? [4, kc(n, x, y, L, M, ka, X)] : [3, 5];
                    case 4:
                        Va.B(), Va.label = 5;
                    case 5:
                        return [3, 7];
                    case 6:
                        return Va.B(), [3, 7];
                    case 7:
                        return [2]
                }
            })
        })
    }

    function Mc(n) {
        return cd ? Rb(1, n).concat(Rb(2, n)) : []
    }

    function mb(n) {
        return function(x) {
            var y = ya.dT_.gto(),
                L = x.time - y;
            y = (x.endTime || x.time) - y;
            return {
                name: x.url,
                failedResource: n,
                startTime: L,
                responseEnd: y,
                duration: y - L,
                _dtCl: !0
            }
        }
    }

    function Rb(n, x) {
        var y = ya.dT_.aM(Wc[n][x] || [], mb(n));
        x ? delete Wc[n][x] : Wc[n] = {};
        return y
    }

    function Hc(n) {
        return !n.time
    }

    function oc(n, x, y) {
        n = n.getEntriesByName(y.url, "resource")[0];
        Ea(n) ? y.time = Math.round(x + n.responseEnd) : y.time = 0
    }

    function lc(n, x) {
        var y = null,
            L = 0;
        try {
            y = x.performance, L = ya.dT_.gNTO(y)
        } catch (M) {}
        y && (n = ya.dT_.aFr(n, Hc), ya.dT_.fE(n, oc.bind(null, y, L)))
    }

    function Vb(n) {
        return !(!n || 0 !== n.indexOf("http"))
    }

    function tb(n, x) {
        return "loading" in HTMLImageElement.prototype && "lazy" === n.getAttribute("loading") && !qa(P(n, x))
    }

    function tc(n) {
        try {
            if (n.srcset) return n.currentSrc;
            var x = n.parentElement;
            if (x && "PICTURE" === x.nodeName)
                for (var y =
                        0; y < x.children.length; y++)
                    if ("SOURCE" === x.children[y].tagName) return n.currentSrc;
            return n.currentSrc || n.src
        } catch (M) {
            try {
                var L = n.getAttribute("src");
                return L ? ya.dT_.tau(L) : ""
            } catch (X) {
                return ""
            }
        }
    }

    function Xa(n, x, y, L, M) {
        void 0 === M && (M = !1);
        return jb(this, void 0, void 0, function() {
            var X, ka;
            return nb(this, function(wa) {
                switch (wa.label) {
                    case 0:
                        X = [];
                        try {
                            ka = (L || x.document).getElementsByTagName("*")
                        } catch (Va) {
                            return [2, X]
                        }
                        return [4, ya.dT_.fEP(ka, function(Va, Qa, xb, Pb) {
                            Gc(n, Va, x, y, X, M).then(Pb).catch(ba)
                        }, void 0, !(wc.syn || M))];
                    case 1:
                        return wa.B(), lc(X, x), [2, X]
                }
            })
        })
    }

    function fc(n, x, y, L) {
        var M = {
            Pd: [],
            style: void 0
        };
        if (!y && !Tb || La(L)) return M;
        y = W(n);
        if (!y) return M;
        M.style = y;
        (y = y.backgroundImage) && "none" !== y && (y = ya.dT_.aM(y.split(","), Gb), y = ya.dT_.aFr(ya.dT_.aFr(y, Vb), fa), M.Pd = ya.dT_.aM(y, Wa.bind(null, x, n)));
        return M
    }

    function Gb(n) {
        void 0 === n && (n = "");
        Hd.lastIndex = 0;
        return (n = Hd.exec(n)) && 1 < n.length ? n[1] || n[2] || n[3] : ""
    }

    function ec(n, x, y, L) {
        if (Da && !n.dT_vcInstr && !tb(n, L.Ca))
            if (Oa(n)) {
                if (y = tc(n), fa(y) && Vb(y)) {
                    y = {
                        url: y,
                        time: ya.dT_.nw(),
                        element: n
                    };
                    n.dT_vcInstr = !0;
                    a: if (n.complete && !n.naturalWidth) {
                        if (ya.dT_.gBI().ff) {
                            var M = L = tc(n),
                                X = L.indexOf("?");
                            0 <= X && (M = L.substring(0, X));
                            if (M.lastIndexOf(".svg") === M.length - 4) {
                                L = "UNKNOWN";
                                break a
                            }
                        }
                        L = "FAILED"
                    } else L = n.complete ? "SUCCESSFUL" : "PENDING";
                    switch (L) {
                        case "FAILED":
                            Sa(y, 1, x);
                            break;
                        case "PENDING":
                            Bb(n, y, x)
                    }
                }
            } else Ca(n) && fc(n, x, y, L)
    }

    function C(n, x, y, L) {
        var M = x.contentWindow;
        if (!M) return od.resolve();
        var X = Ab(M),
            ka = !Na(n, x) && qa(L);
        return X ? ub(X, ka, n.ka) : Xa(n, M, y).then(function(wa) {
            var Va;
            (Va = n.ka).push.apply(Va, ya.dT_.aM(wa, function(Qa) {
                var xb;
                return Ia(Ia({}, Qa), (xb = {}, xb.v = Qa.v && ka, xb))
            }))
        })
    }

    function pa() {
        J("f", !0);
        return Fe
    }

    function Ga() {
        var n = wc;
        n.gUI = Mc;
        n.vWW = U;
        n.vWH = va;
        n.gVCP = pa;
        n.gLVD = Ra
    }

    function ja(n) {
        for (var x = 0, y = 0, L = 0, M = ya.dT_.red(n, function(wa, Va) {
                return wa + Va.vc
            }, 0), X = 0; X < n.length; X++) {
            var ka = n[X];
            y = ka.time - y;
            0 < y && 1 > L && (x += (1 - L) * y);
            L += ka.vc / M;
            y = ka.time
        }
        return Math.round(x)
    }

    function Cb(n, x, y) {
        var L = [],
            M;
        for (M in n)
            if (ya.dT_.oHOP(n, M)) {
                var X = n[M].Xa;
                L.push({
                    time: +M - y,
                    vc: X /
                        x,
                    Xa: X
                })
            }
        L.sort(function(ka, wa) {
            return ka.time - wa.time
        });
        return L
    }

    function Za(n) {
        return n.v
    }

    function v(n, x) {
        var y, L = x.time;
        x = x.area;
        null !== (y = n[L]) && void 0 !== y ? y : n[L] = {
            Xa: 0,
            vc: 0,
            time: 0
        };
        n[L].Xa += x;
        return n
    }

    function F(n) {
        n.Ra--;
        H(n)
    }

    function D(n, x) {
        var y = -1;
        if (x) {
            y = Math;
            var L = x.time;
            y = y.round.call(y, 0 > L ? -1 : L - n.Va);
            y >= gb ? (n.trigger = "t", y = -2) : 0 > y && (y = -1);
            var M = x.node;
            if (M) {
                L = x.area;
                var X = {
                    left: NaN,
                    top: NaN
                };
                try {
                    X = M.getBoundingClientRect()
                } catch (Qa) {}
                var ka = Ha.split(",");
                L = {
                    location: {
                        x: Math.ceil(X.left),
                        y: Math.ceil(X.top)
                    },
                    size: Math.ceil(L),
                    Ei: M.getAttribute("class"),
                    id: M.getAttribute("id"),
                    name: M.getAttribute("name"),
                    tagName: M.tagName,
                    kg: ya.dT_.gecsss(M)
                };
                for (X = 0; X < ka.length; X++) {
                    var wa = ka[X],
                        Va = M.getAttribute(wa);
                    if (Va) {
                        L.yh = {
                            key: wa,
                            value: Va
                        };
                        break
                    }
                }
                L ? (M = L.yh, wa = L.location, Va = L.size, ka = L.tagName, X = L.kg, L = ya.dT_.aesc(L.name || ""), wa = [wa.x, wa.y, Va], L && wa.push("n;".concat(L)), M && wa.push("u;".concat(ya.dT_.aesc(M.key), ",").concat(ya.dT_.aesc(M.value))), X ? wa.push("s;".concat(ya.dT_.aesc(X))) : wa.push("t;".concat(ya.dT_.aesc(ka))),
                    L = wa.join("|")) : L = "";
                x.kd = L
            }
            n.Jg && (cd = !0)
        }
        return y
    }

    function N(n, x, y) {
        var L = ya.dT_.nw() - x.Qd,
            M = ya.dT_.nw(),
            X = ya.dT_.aFr(x.ka, Aa);
        var ka = x.Va;
        ya.dT_.nw();
        for (var wa = X.length - 1; 0 < wa; wa--)
            for (var Va = X[wa], Qa = wa - 1; 0 <= Qa; Qa--) {
                var xb = X[Qa],
                    Pb = xb.area,
                    Dc = Va.area;
                if (Dc && Pb && 2500 < Pb) {
                    var Ec = Va.offset,
                        qc = xb.offset,
                        kd = sd(Ec.top, qc.top),
                        Jd = sd(Ec.left, qc.left),
                        Xd = Rd(Ec.left + Ec.width, qc.left + qc.width);
                    Ec = Rd(Ec.top + Ec.height, qc.top + qc.height);
                    Jd = sd(0, Xd - Jd);
                    kd = sd(0, Ec - kd);
                    xb.area = sd(0, Pb - Rd(Math.round(Jd * kd), Dc))
                }
            }
        X =
            ya.dT_.aFr(X, Za);
        X = ya.dT_.red(X, v, {});
        ka = Cb(X, U() * va(), ka);
        Tc = ja(ka);
        Tc > n && (Tc = n);
        ya.dT_.nw();
        ka = Tc;
        M = ya.dT_.nw() - M;
        n = [
            ["V", n + "|" + x.trigger],
            ["VCD", L + ""],
            ["VCDS", M + ""],
            ["VCS", x.Qd - x.Va + ""],
            ["VCO", x.Le - x.Va + ""],
            ["VCI", x.ed + ""]
        ];
        (y = (null === y || void 0 === y ? void 0 : y.kd) || "") && n.push(["VE", y]);
        n.push(["S", (0 <= ka ? ka : -1) + ""]);
        ya.dT_.cAE("_vc_", n, x.D, x.Va)
    }

    function aa(n) {
        var x, y, L;
        "n" === n.trigger && (n.trigger = n.Ka ? "f" : "c");
        n.ka.sort(function(wa, Va) {
            return wa.time - Va.time
        });
        var M = O(n.ka),
            X = D(n, M);
        N(X, n, M);
        Ja(M,
            n.ka);
        Fe = X;
        var ka = (x = {}, x.t = n.trigger, x.k = M, x.v = X, x);
        oe = ka;
        ya.dT_.disE((y = {}, y.kind = "VISUALLY_COMPLETE", y.detail = Ia(Ia({}, ka), (L = {}, L.a = n.D, L.e = n.ka, L)), y));
        M && (M.node = null);
        n.ka = [];
        I(n.he);
        n.oe = !0;
        n.bh(-1 < X ? n.Va + X : -1)
    }

    function H(n) {
        var x = n.ae === n.fe,
            y = !n.Ra;
        x && y && n.oa && (ya.dT_.ct(n.oa), n.oa = 0);
        !n.oe && y && (!n.tb.length && x || n.Ka) && aa(n)
    }

    function na() {
        var n = !1;
        Da && ya.dT_.addE("INSTRUMENTATION_TRIGGERED", function() {
            if (!n) {
                n = !0;
                for (var x = document.getElementsByTagName("*"), y = {
                            dd: 0,
                            ed: 0,
                            Ca: new WeakMap
                        },
                        L = 0; L < x.length; L++) ec(x[L], ya.dT_.lAID(), !0, y)
            }
        })
    }

    function R() {
        var n;
        de = new WeakMap;
        na();
        Pd = !(null === (n = document.body) || void 0 === n || !n.childElementCount);
        ya.dT_.las() || ya.dT_.aMO(ya.dT_.lAID());
        ya.dT_.addE("ACTION_ENTERED", function(x) {
            ya.dT_.aMO(x.detail.i);
            x.detail.i === x.detail.r && J("u")
        });
        ya.dT_.addE("ACTION_CLOSED", function(x) {
            var y = x.detail,
                L = y.i,
                M = y.r;
            x = y.f;
            var X = y.a;
            if (y.dne || M !== L) ya.dT_.rMO(L);
            else {
                var ka = function(Qa, xb) {
                    Sc(Qa, L, xb) || (ya.dT_.ct(wa), ra(L, !0, X, ka, Va, Qa))
                };
                y = !("visible" === document.visibilityState ||
                    !Oc);
                id.push(ka);
                x = ra(L, x || y, X, ka, void 0, y ? "b" : void 0);
                var wa = x.oa,
                    Va = x.rf
            }
        });
        ya.dT_.addE("ACTION_BEACON_FORCED", function() {
            J(ya.dT_.las() ? "l" : "f")
        });
        ya.dT_.addE("VISIBILITY_CHANGED", function(x) {
            "1" === x.detail && J("b")
        })
    }

    function ra(n, x, y, L, M, X) {
        var ka = M || ya.dT_.aAWC(n);
        if (!ka) return Bd;
        if (!x) return {
            oa: ya.dT_.st(function() {
                Xb(n, ka, !1, y, L, X)
            }, Ma),
            rf: ka
        };
        Xb(n, ka, !0, y, L, X);
        return Bd
    }

    function za(n, x) {
        return function(y) {
            y = x + y.time;
            return !n || n <= y
        }
    }

    function $a(n, x, y, L, M) {
        var X = L.push;
        a: {
            var ka;
            if ((y || !n.jc.has(M)) &&
                M.nodeType !== Node.TEXT_NODE && Ca(M)) {
                var wa = fc(M, n.D, y, n),
                    Va = wa.Pd;
                Oa(M) ? (ec(M, n.D, y, n), Va.push(M)) : kb(M) && Va.push(M);
                if (y = M && M.nodeType && 1 === M.nodeType) try {
                    var Qa = ob;
                    y = !!Qa && M.matches(Qa)
                } catch (Pb) {
                    y = !1
                }
                if (Va.length && !y)
                    for (ka = 0; ka < Va.length; ka++) sc(Va[ka], n, x, M, wa.style);
                else Va = P(M, n.Ca), Va = ea(Y(Va)), wb(n, (ka = {}, ka.time = Math.round(x), ka.node = M, ka.area = Va, ka.v = !Na(n, M, wa.style), ka.url = "", ka.offset = {
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0
                }, ka.is = y ? 1 : 0, ka));
                try {
                    if (M.hasChildNodes()) {
                        var xb = M.childNodes;
                        break a
                    }
                } catch (Pb) {}
            }
            xb = []
        }
        X.call(L, xb)
    }

    function vb(n, x) {
        return jb(this, void 0, void 0, function() {
            var y, L, M;
            return nb(this, function(X) {
                switch (X.label) {
                    case 0:
                        return y = !x.Ka, L = ya.dT_.gXACT(x.D)[0], M = n, L ? [4, ya.dT_.fP(n, za(L, ya.dT_.gto()), y)] : [3, 2];
                    case 1:
                        M = X.B(), X.label = 2;
                    case 2:
                        return [4, ya.dT_.fEP(M, function(ka, wa, Va, Qa) {
                            var xb = [],
                                Pb = ka.time;
                            ya.dT_.fEP(ka.nodes, $a.bind(null, x, Pb, !0, xb), Pb, y).then(function() {
                                return ya.dT_.fEP(xb, function(Dc, Ec, qc, kd) {
                                        ya.dT_.fEP(Dc, $a.bind(null, x, Pb, !1, xb), null, y, !0).then(kd).catch(ba)
                                    }, null,
                                    y, !0)
                            }).then(Qa).catch(ba)
                        }, null, y, !0)];
                    case 3:
                        return X.B(), [2, x]
                }
            })
        })
    }

    function Wb(n, x, y) {
        ya.dT_.ct(n.$a);
        ya.dT_.ct(n.sb);
        ya.dT_.rMO("vc-timeout-".concat(x));
        n.$a = -1;
        n.sb = -1;
        Zb(x, y, !0)
    }

    function qb(n, x) {
        var y = {
            sb: -1,
            $a: -1
        };
        y.sb = ya.dT_.st(function() {
            Wb(y, n, x)
        }, sa);
        Fb(n, x, y);
        ya.dT_.aMO("vc-timeout-".concat(n), function() {
            Fb(n, x, y)
        });
        return y
    }

    function Fb(n, x, y) {
        ya.dT_.ct(y.$a);
        y.$a = ya.dT_.st(function() {
            Wb(y, n, x)
        }, Pa)
    }

    function Zb(n, x, y) {
        return jb(this, void 0, void 0, function() {
            var L, M;
            return nb(this, function(X) {
                switch (X.label) {
                    case 0:
                        L =
                            ya.dT_.gMN(n);
                        ya.dT_.rMO(n);
                        x.Le = ya.dT_.nw();
                        x.Ra++;
                        if (!y || !Pd && !gc) return [3, 2];
                        x.Ra++;
                        return [4, Xa(x, G, void 0, void 0, x.Ka)];
                    case 1:
                        return M = X.B(), ya.dT_.fE(M, wb.bind(null, x)), F(x), [3, 3];
                    case 2:
                        L.length || H(x), X.label = 3;
                    case 3:
                        return [4, vb(L, x)];
                    case 4:
                        return X.B(), F(x), [2]
                }
            })
        })
    }

    function wb(n, x) {
        var y = x.node;
        if (y) {
            if (n.jc.has(y)) {
                (y = n.jc.get(y)) && x.time > n.ka[y].time && (n.ka[y] = x);
                return
            }
            n.jc.set(y, n.ka.length)
        }
        n.ka.push(x)
    }

    function Xb(n, x, y, L, M, X) {
        void 0 === X && (X = "n");
        I(M);
        M = ya.dT_.lAID() === n;
        var ka = {
            Va: L,
            ae: 0,
            fe: 0,
            Ra: 0,
            oe: !1,
            Qd: ya.dT_.nw(),
            Le: 0,
            oa: ya.dT_.st(function() {
                ka.Ka = !0;
                ka.Ra = 0;
                H(ka)
            }, gb),
            tb: [],
            ig: [],
            ka: [],
            jc: new WeakMap,
            Jg: M,
            bh: x,
            D: n,
            trigger: X,
            Ka: y,
            dd: 0,
            ed: 0,
            Ca: new WeakMap,
            he: function(Va, Qa) {
                Sc(Va, n, Qa) || (ka.Ka = !0, ka.Ra = 0, ka.trigger = Va, 0 <= wa.$a && 0 <= wa.sb && Wb(wa, n, ka), H(ka))
            }
        };
        if ("b" === X) H(ka);
        else {
            var wa = {
                $a: -1,
                sb: -1
            };
            id.push(ka.he);
            M && !y ? wa = qb(n, ka) : Zb(n, ka, M)
        }
    }

    function Sc(n, x, y) {
        return x !== ya.dT_.lAID() && (y || "u" === n)
    }

    function ye(n, x, y, L, M, X, ka) {
        var wa, Va = ya.dT_.tau(n),
            Qa = Ba;
        Qa = Va && Qa && Qa.test(Va);
        var xb = ea(Y(L)),
            Pb = (wa = {}, wa.url = Va, wa.time = Math.round(x), wa.node = y, wa.v = !Na(M, y, ka), wa.area = xb, wa.offset = L, wa.is = Qa ? 2 : 0, wa);
        wb(M, Pb);
        L = Oa(y);
        ka = kb(y);
        n = L && !y.complete && "data:" !== n.substring(0, 5) || ka && Z(y);
        M.ae++;
        M.tb.push({
            name: Pb.url,
            startTime: x
        });
        if (!n || M.Ka || Qa)(L || ka) && yc(y, M, Pb, X, !0);
        else {
            var Dc = function() {
                M.Ca.delete(y);
                yc(y, M, Pb, X, !1);
                y.removeEventListener("load", Dc);
                y.removeEventListener("error", Dc)
            };
            y.addEventListener("load", Dc);
            y.addEventListener("error", Dc)
        }
    }

    function ze(n) {
        return n.currentSrc ||
            n.getAttribute("src") || n.getAttribute("href") || ""
    }

    function Nd(n, x, y, L, M) {
        var X, ka = Ba;
        ka = (n = ya.dT_.tau(n)) && ka && ka.test(n);
        var wa = M === x;
        return X = {}, X.url = n, X.time = Math.round(y), X.node = x, X.v = !1, X.area = 0, X.offset = L, X.is = ka ? 2 : 0, X.w = wa ? x.width : M.clientWidth, X.h = wa ? x.height : M.clientHeight, X.nw = wa ? x.naturalWidth : x.width, X.nh = wa ? x.naturalHeight : x.height, X
    }

    function sc(n, x, y, L, M) {
        var X = ze(n);
        if (fa(X) && !tb(n, x.Ca) && !x.tb.some(function(wa) {
                return wa.name === X
            })) {
            var ka = P(L, x.Ca);
            Oa(n) && !n.width || eb(ka) ? (qa(ka) ||
                Oa(n)) && ye(X, y, n, ka, x, L, M) : Oa(n) && x.ka.push(Nd(X, n, y, ka, L))
        }
    }

    function yc(n, x, y, L, M) {
        var X = G.performance,
            ka = y.url,
            wa = ya.dT_.nw();
        (X = !M && ac ? wa : ya.dT_.red(X.getEntriesByName(ka, "resource"), bb(), 0)) && (y.time = Math.max(Math.round(X), y.time));
        M || (y.o = wa);
        X = Y(P(L || n, x.Ca));
        y.area = ea(X);
        y.node = L;
        if (Oa(n)) {
            var Va = L === n;
            y.w = Va ? n.width : L.clientWidth;
            y.h = Va ? n.height : L.clientHeight;
            y.nw = Va ? n.naturalWidth : n.width;
            y.nh = Va ? n.naturalHeight : n.height
        }
        x.fe++;
        L = ya.dT_.aFI(x.tb, function(Qa) {
            return Qa.name === ka
        }); - 1 !== L &&
            (L = x.tb.splice(L, 1)[0], x.ig.push(L.name), M && x.Ka && Sa({
                time: L.startTime,
                url: L.name,
                isVisible: ma(y),
                element: y.node,
                endTime: wa
            }, 2, x.D), kb(n) && (x.Ra++, C(x, n, y.offset, X).then(F.bind(null, x)).catch(ba)), H(x))
    }

    function Kc(n) {
        n = n.detail;
        var x = n.i,
            y = n.a;
        n.r === x && ya.dT_.cAE("_vc_", [
            ["V", "-3"],
            ["S", "-3"]
        ], x, y)
    }
    var od = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        ya = "undefined" !== typeof window ? window : self,
        G = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        ia;
    (function(n) {
        n.ANCHOR =
            "A";
        n.BUTTON = "BUTTON";
        n.FORM = "FORM";
        n.I_FRAME = "IFRAME";
        n.IMAGE = "IMG";
        n.INPUT = "INPUT";
        n.LABEL = "LABEL";
        n.LINK = "LINK";
        n.OPTION = "OPTION";
        n.SCRIPT = "SCRIPT";
        n.SELECT = "SELECT";
        n.STYLE = "STYLE";
        n.TEXT_AREA = "TEXTAREA"
    })(ia || (ia = {}));
    var xa = -1,
        Ba = null,
        Da = !1,
        Ma = -1,
        sa = -1,
        Ha = "",
        ob = "",
        Pa = -1,
        gb = -1,
        gc = !1,
        Tb = !1,
        Lb = 0,
        ac = !1,
        Oc = !1,
        cd = !1,
        wc, Cc, Fe, oe, hd, $c = {},
        Wc = (hd = {}, hd[1] = {}, hd[2] = {}, hd),
        Ae = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming,
        id = [],
        zd = G.document.documentElement,
        jd, pd, de, Hd = /url\s*\(\s*(?:'(\S*?)'|"(\S*?)"|((?:\\\s|\\\)|\\"|\\'|\S)*?))\s*\)/gi,
        pe;
    (function(n) {
        n.FAILED = "FAILED";
        n.PENDING = "PENDING";
        n.SUCCESSFUL = "SUCCESSFUL";
        n.UNKNOWN = "UNKNOWN"
    })(pe || (pe = {}));
    var Rd = Math.min,
        sd = Math.max,
        Tc = -1,
        Pd, Bd = {
            oa: 0,
            rf: void 0
        };
    (function() {
        var n, x, y = G.dT_;
        if (y && y.smbi && y.iMod) {
            wc = y;
            (y = ya.dT_.tdto()) && "ea" in y && (Cc = y);
            y = -1 !== ya.dT_.iMod().indexOf("V");
            var L = ya.dT_.smbi("V");
            var M = G.performance;
            var X = Cc.syn;
            M = !!G.MutationObserver && !(null === M || void 0 === M || !M.getEntriesByType) ||
                X;
            if (null === (x = (n = ya.dT_).ssmbi) || void 0 === x ? 0 : x.call(n, "V", !1, M, L)) return y || ya.dT_.iMod("V"), ca(), ya.dT_.addE && ya.dT_.addE("CONFIG_UPDATE", ca), R(), !0;
            !L || y || M || ya.dT_.addE("ACTION_BEFORE_SEND", Kc)
        }
        return !1
    })() && Ga()
})();
(function() {
    function Ia(U, Y) {
        function Na(S) {
            return !(!S || !S[U])
        }
        var La = 0;
        if (Y) {
            var ea = document.getElementById(Y);
            if (Na(ea)) return ea;
            Wa.dT_.addE("DEBUG_INFO_REQUESTED", function() {
                return [{
                    type: "mvi",
                    severity: "Info",
                    text: 'Could not find vue element with configured id "'.concat(Y, '"')
                }]
            })
        }
        return Na(document.body) ? document.body : Na(document.body.firstElementChild) ? document.body.firstElementChild : document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
            acceptNode: function(S) {
                La++;
                return Na(S) || 50 ===
                    La ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        }).nextNode()
    }

    function jb(U) {
        var Y;
        if (Sa.Vue && Sa.Vue.version) {
            var Na = Sa.Vue.version;
            "2" === Na.split(".")[0] && "__vue__" === U && (Y = Na);
            "3" === Na.split(".")[0] && "__vue_app__" === U && (Y = Na)
        }(Na = Ia(U, Wa.dT_.scv("vrei"))) && Na[U] && (Wa.dT_.iVRA(Na, U), Y || (Y = ""));
        return Y
    }

    function nb(U) {
        for (var Y = Sa, Na = 0; Na < U.length; Na++)
            if (Y = U[Na], "function" === typeof Y) Y = Y.apply(this);
            else {
                var La = Y.split(".");
                Y = Sa;
                for (var ea = 0; ea < La.length && "undefined" !== typeof Y && null != Y; ea++) Y = -1 === La[ea].indexOf("()") ? Y[La[ea]] : Y[La[ea].replace("()", "")]();
                if ("undefined" !== typeof Y) break
            }
        return Y
    }

    function db() {
        var U = [],
            Y = 0,
            Na = Array.prototype,
            La = Na.concat,
            ea = [];
        for (O in va)
            if (Wa.dT_.oHOP(va, O)) try {
                var S = va[O];
                "object" !== typeof S && (S = [], S[0] = va[O]);
                var P = nb(S);
                if ("string" === typeof P || Wa.dT_.iIO(P, 3)) ea.push(O + ("b" === O ? P : P.split(/-|_| /)[0]));
                else if ("object" === typeof P && P.length)
                    for (var ma = P.length, Ja = 0; Ja < ma; Ja++) ea.push(O + P[Ja]);
                else void 0 !== P && ea.push(O + "x")
            } catch (I) {}
        var O = [];
        for (var ca in qa)
            if (Wa.dT_.oHOP(qa,
                    ca))
                if (0 === qa[ca].indexOf("url"))
                    for (S = qa[ca].replace("url:", ""), P = document.getElementsByTagName("script"), ma = 0; ma < P.length; ma++) try {
                        if (P[ma].src && -1 !== P[ma].src.indexOf(S)) {
                            O.push(ca);
                            break
                        }
                    } catch (I) {} else "undefined" !== typeof Sa[qa[ca]] && O.push(ca);
        for (Na = La.call(Na, ea, O); Y < Na.length; Y++) La = Na[Y], Ea[La] || (U.push(La), Ea[La] = !0);
        return U
    }

    function kb(U, Y, Na, La) {
        Y || 20 < Bb || (ba.length || (ba = db(), Bb++), ba.length && (U.av(La, "fd", Wa.dT_.aesc(ba.join(";")), !1), ba = []))
    }

    function Oa(U) {
        U.detail.i === Wa.dT_.lAID() &&
            (ba = db(), Wa.dT_.remE("ACTION_CLOSED", Oa))
    }

    function Ra(U, Y, Na) {
        var La = 0;
        try {
            if (3 >= Na && !Wa.dT_.iIO(U, 8))
                if ("object" === typeof U && -1 === Y.indexOf(U)) {
                    Y.push(U);
                    for (var ea in U) Wa.dT_.oHOP(U, ea) && (La++, La += Ra(U[ea], Y, Na + 1))
                } else if (Array.isArray(U) && -1 === Y.indexOf(U)) {
                Y.push(U);
                for (var S = 0; S < U.length; S++) ea = U[S], La += Ra(ea, Y, Na + 1)
            }
        } catch (P) {}
        return La
    }
    this.dT_ && dT_.prm && dT_.prm();
    var Wa = "undefined" !== typeof window ? window : self,
        Sa = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window :
        void 0,
        ab, Ka, Bb = 0,
        Ea = [],
        ba = [],
        qa = {
            fueldeck: "FDUPA",
            soasta: "url:c.go-mpulse.net",
            monitis: "JSBenchmark",
            pingdom: "PRUM_EPISODES",
            newrelic: "NREUM",
            appdynamics: "ADRUM",
            appneta: "_tly",
            pendo: "pendo",
            heap: "heap",
            mixpanel: "mixpanel",
            amplitude: "amplitude",
            tealeaf: "TLT",
            datadog: "DD_RUM",
            elastic: "elasticApm",
            requestmetrics: "RM",
            instana: "ineum",
            plumbr: "PLUMBR",
            glassbox: "_detector",
            decibelinsight: "decibelInsight",
            contentsquare: "CS_CONF",
            hotjar: "hjBootstrap",
            quantummetric: "QuantumMetricAPI",
            fullstory: "FS"
        },
        eb;
    (function(U) {
        U.ANGULAR =
            "g";
        U.DATA_LAYER = "b";
        U.NEXT = "p";
        U.NUXT = "n";
        U.REACT = "r";
        U.VUE = "v";
        U.VUE3 = "k"
    })(eb || (eb = {}));
    var va = (ab = {}, ab.g = function() {
        if (document.querySelectorAll) {
            for (var U = Array.prototype.slice.call(document.querySelectorAll("[ng-version]")), Y = [], Na = 0, La = U.length; Na < La; Na++) Y.push(U[Na].getAttribute("ng-version"));
            return Y.length ? Y : void 0
        }
    }, ab.b = function() {
        var U = Sa.dataLayer,
            Y = [];
        if (U && U.length) {
            for (var Na = 0, La = 0; La < U.length; La++) {
                var ea = U[La];
                if ("object" === typeof ea && -1 === Y.indexOf(ea)) {
                    Y.push(ea);
                    for (var S in ea) Wa.dT_.oHOP(ea,
                        S) && (Na++, Na += Ra(ea[S], Y, 0))
                }
            }
            Na ? (U = "1-5", 500 < Na ? U = "501+" : 100 < Na ? U = "101-500" : 50 < Na ? U = "51-100" : 10 < Na ? U = "11-50" : 5 < Na && (U = "6-10"), Na = U) : Na = void 0;
            return Na
        }
    }, ab.v = function() {
        return jb("__vue__")
    }, ab.k = function() {
        return jb("__vue_app__")
    }, ab.r = function() {
        if (Sa.React && Sa.React.Component) return (Sa.React.version || "") + "";
        var U = Ia("_reactRootContainer");
        if (U && U._reactRootContainer) return ""
    }, ab.n = function() {
        var U;
        if ((null === (U = Sa.__NUXT__) || void 0 === U ? 0 : U.data) || Sa.$nuxt) return ""
    }, ab.p = function() {
        var U;
        if (Sa.__NEXT_DATA__ &&
            Sa.__NEXT_DATA__.buildId) return ((null === (U = Sa.next) || void 0 === U ? void 0 : U.version) || "") + ""
    }, ab);
    (function() {
        var U, Y;
        (Ka = Sa.dT_) && (null === (Y = (U = Wa.dT_).smbi) || void 0 === Y ? 0 : Y.call(U, "f")) && (Wa.dT_.aBPSL(kb), Wa.dT_.addE("ACTION_CLOSED", Oa))
    })()
})();
(function() {
    function Ia(I, J) {
        if (!J) return "";
        var fa = I + "=";
        I = J.indexOf(fa);
        if (0 > I) return "";
        for (; 0 <= I;) {
            if (0 === I || " " === J.charAt(I - 1) || ";" === J.charAt(I - 1)) return fa = I + fa.length, I = J.indexOf(";", I), 0 <= I ? J.substring(fa, I) : J.substring(fa);
            I = J.indexOf(fa, I + fa.length)
        }
        return ""
    }

    function jb() {
        return 0 < va.dT_.oK(S).length
    }

    function nb(I) {
        var J = I.split("@");
        I = J[0];
        J = J[1];
        try {
            var fa = document.querySelector(I);
            if (!fa) return {
                info: "No elements matching the css selector '" + I + "' could be found."
            };
            if (J) {
                if (kb(fa, J)) return {
                    value: "password input field"
                };
                var Z = fa.getAttribute(J);
                return Z ? {
                    value: Z
                } : {
                    info: "Specified attribute [".concat(J, "] contains no data.")
                }
            }
            var Aa = fa.innerText || fa.textContent;
            return Ra(Aa) ? {
                value: Aa
            } : {
                info: "Found element contains no text content."
            }
        } catch (W) {
            return {
                info: "ERROR: retrieving meta data using selector '" + I + "' failed for reason: " + (W.message || W)
            }
        }
    }

    function db(I) {
        var J = /([^(\n]+)\(([^)]*)\)/.exec(I);
        if (!J || 3 !== J.length) return {
            info: "Expression config [".concat(I, "] does not match function format.")
        };
        var fa = J[1],
            Z = J[2] ? J[2].split(";") : [];
        J = La[fa];
        if (!J || !fa || Z.length < J.Ie || Z.length > J.Ge) return {
            info: "Function expression config [".concat(I, "] is not part of allowed functions or has invalid number of parameters.")
        };
        J = [];
        for (var Aa = 0; Aa < Z.length; Aa++) {
            var W = Z[Aa].split(":");
            if (2 !== W.length) return {
                info: "Function parameters for expr [".concat(I, "] are not properly configured.")
            };
            var Ca = W[0];
            W = W[1];
            var bb = parseInt(W);
            if ("Number" !== Ca || isNaN(bb))
                if ("String" === Ca) J.push(W);
                else if ("Boolean" !== Ca || isNaN(bb) || 1 !== bb && 0 !== bb)
                if ("Null" === Ca) J.push(null);
                else return {
                    info: "ValueType: '".concat(Ca, "' or value: '").concat(W, "' is not valid.")
                };
            else J.push(!!bb);
            else J.push(bb)
        }
        a: {
            Z = U;Aa = fa.split(".");Ca = Aa.length - 1;
            for (bb = 0; bb < Ca; bb++)
                if (Z = Z[Aa[bb]], !Z) {
                    Z = null;
                    break a
                }
            Z = Z[Aa[Ca]]
        }
        if ("function" === typeof Z) try {
            return W = Z.apply(void 0, J), {
                value: W
            }
        } catch (lb) {
            return {
                value: "dT_err",
                info: "Error occurred while invoking the function: '" + fa + "' with the error: " + (lb.message || lb)
            }
        }
        return {
            info: "No function [".concat(I, "] is being found in a given scope to be executed.")
        }
    }

    function kb(I, J) {
        return I && "INPUT" === I.nodeName && "password" === I.getAttribute("type") && "value" === J.toLowerCase()
    }

    function Oa(I) {
        function J(W, Ca, bb) {
            return Ca ? kb(W, Ca) ? "password input field" : !W[Ca] && Ca.startsWith("$") ? (Ca = Ca.substring(1), W = JSON.parse(W), J(W[Ca], Z[bb + 1], bb + 1)) : J(W[Ca], Z[bb + 1], bb + 1) : W
        }
        try {
            var fa = I; - 1 < I.indexOf("[") && (fa = I.replace(/\[([^\]]*)]/g, ".$1"));
            var Z = fa.split(".");
            var Aa = J(U[Z[0]], Z[1], 1);
            return Ra(Aa) ? {
                value: Aa
            } : {
                info: "JS expression returned is null or undefined: [" + typeof Aa +
                    "]."
            }
        } catch (W) {
            return {
                info: "There was an error evaluating the JS expression '" + I + "'!! error: " + (W.message || W)
            }
        }
    }

    function Ra(I) {
        return !!I || !1 === I || 0 === I
    }

    function Wa(I) {
        var J = va.dT_.ncv("mpl");
        (I = I.maxLength) && (J = 100 * I);
        return J
    }

    function Sa() {
        ba();
        for (var I = 0, J = "", fa = va.dT_.sNT(), Z = 0, Aa = va.dT_.oK(ea); Z < Aa.length; Z++) {
            var W = Aa[Z],
                Ca = ea[W];
            if (Ca.Ya && "f" !== Ca.type) {
                var bb = O - I;
                if (J) Ca.info = "Metadata limit already reached. Skipping evaluation.";
                else if (1 > bb) J = W, Ca.info = "Metadata limit reached. Metadata evaluation will stop here and will not be executed further.";
                else {
                    W = Wa(Ca);
                    var lb = Ca.Ya;
                    var Ab = {};
                    switch (Ca.type) {
                        case "a":
                            Ab = nb(lb);
                            break;
                        case "b":
                            Ab = Oa(lb);
                            break;
                        case "c":
                            Ab = Ia(lb, document.cookie);
                            Ab = Ra(Ab) ? {
                                value: Ab
                            } : {
                                info: "No cookie [".concat(lb, "] value found.")
                            };
                            break;
                        case "d":
                            var oa = va.dT_.loc();
                            Ab = lb.toLowerCase();
                            if (P[Ab] && ma === oa) Ab = {
                                value: P[Ab]
                            };
                            else {
                                ma = oa;
                                P = {};
                                var ub = U.location.search ? U.location.search.slice(1) : oa.split("?")[1];
                                if (ub) {
                                    ub = ub.split("#")[0];
                                    oa = 0;
                                    for (ub = ub.split("&"); oa < ub.length; oa++) {
                                        var kc = ub[oa].split("="),
                                            Gc = kc[0];
                                        kc = kc[1] ? kc[1] :
                                            "";
                                        Gc = Gc.toLowerCase();
                                        P[Gc] || (P[Gc] = kc)
                                    }
                                    Ab = P[Ab] ? {
                                        value: P[Ab]
                                    } : {
                                        info: "Searched expression [".concat(lb, "] was not found in the querystring.")
                                    }
                                } else Ab = {
                                    info: "URL does not contain any query string."
                                }
                            }
                            break;
                        case "e":
                            Ab = db(lb)
                    }
                    lb = Ab.value;
                    Ab = Ab.info;
                    Ra(lb) ? ("string" === typeof lb && (bb < W && (lb = lb.substring(0, bb), Ab = "Because of available char length [".concat(bb, "] captured metadata value was trimmed.")), lb.length > W && (Ab = "Captured value is trimmed to configured string length of [".concat(W, "] because it is too long."),
                        lb = lb.substring(0, W))), lb += "", Ca.value = lb, I += lb.length, !Ca.Qc && fa && (Ca.value = "dT_pv", Ca.info = "Metadata value is masked because doNotTrack is active and property is not marked as public")) : Ca.value = null;
                    Ab && (Ca.info = Ab)
                }
            }
        }
        return [I, J]
    }

    function ab(I) {
        var J = "";
        switch (I) {
            case "a":
                J = "CSS Selector";
                break;
            case "b":
                J = "JavaScript Variable";
                break;
            case "c":
                J = "Cookie";
                break;
            case "d":
                J = "Query String";
                break;
            case "e":
                J = "JavaScript Function"
        }
        return J
    }

    function Ka() {
        Sa();
        for (var I = [], J = 0, fa = va.dT_.oK(ea); J < fa.length; J++) {
            var Z =
                fa[J],
                Aa = ea[Z];
            "f" !== Aa.type && (Z = {
                id: Z,
                type: ab(Aa.type),
                expression: Aa.Ya,
                value: Aa.value
            }, Aa.info && (Z.info = Aa.info), I.push(Z))
        }
        return I
    }

    function Bb() {
        var I = va.dT_.scv("md"),
            J = va.dT_.scv("mdp"),
            fa = va.dT_.scv("mdl");
        O = va.dT_.ncv("mmds");
        if (I) {
            J = J.split(",");
            for (var Z = {}, Aa = 0, W = fa.split(","); Aa < W.length; Aa++) {
                var Ca = W[Aa].split("=");
                fa = Ca[0];
                Ca = parseInt(Ca[1]);
                isNaN(Ca) || (Z[fa] = Math.round(Ca))
            }
            Aa = {};
            W = 0;
            for (I = I.split(","); W < I.length; W++) {
                var bb = I[W],
                    lb = bb.indexOf("=");
                fa = bb.substring(0, lb);
                Ca = bb.charAt(lb +
                    1);
                if ("a" === Ca || "b" === Ca || "c" === Ca || "d" === Ca || "e" === Ca || "f" === Ca) bb = va.dT_.de(bb.substring(lb + 2)), Aa[fa] = {
                    type: Ca,
                    Ya: bb,
                    value: null,
                    Qc: !1,
                    info: void 0
                }, Z[fa] && (Aa[fa].maxLength = Z[fa])
            }
            for (Z = 0; Z < J.length; Z++) fa = J[Z], Aa[fa] && (Aa[fa].Qc = !0);
            ea = Aa
        } else ea = {};
        J = ea;
        Z = {};
        fa = 0;
        for (I = va.dT_.oK(J); fa < I.length; fa++) Aa = I[fa], "f" === J[Aa].type && (Z[Aa] = J[Aa]);
        S = Z
    }

    function Ea(I) {
        for (var J = va.dT_.sNT(), fa = I.detail.h, Z = {}, Aa = 0, W = va.dT_.oK(fa); Aa < W.length; Aa++) {
            var Ca = W[Aa];
            Z[Ca.toLowerCase()] = fa[Ca]
        }
        I = I.detail.a;
        fa =
            0;
        for (Aa = va.dT_.oK(S); fa < Aa.length; fa++)
            if (W = Aa[fa], Ca = ea[W].Ya.toLowerCase(), Ra(Z[Ca])) {
                Ca = Z[Ca];
                var bb = Wa(ea[W]);
                Ca.length > bb && (Ca = Ca.substring(0, bb));
                !ea[W].Qc && J && (Ca = "dT_pv");
                va.dT_.aAPY("_uaprh_", W, Ca, I)
            }
    }

    function ba() {
        va.dT_.fE(Object.keys(ea), function(I) {
            I = ea[I];
            I.value = null;
            I.info = void 0
        })
    }

    function qa() {
        va.dT_.addE("CONFIG_UPDATE", Bb);
        va.dT_.addE("HTTP_RESPONSE", Ea);
        Bb();
        va.dT_.aBPSL(function(I, J, fa, Z) {
            if (I.ha(Z)) {
                fa = Sa();
                J = fa[0];
                fa = fa[1];
                var Aa = [];
                for (Ca in ea)
                    if (va.dT_.oHOP(ea, Ca)) {
                        var W =
                            ea[Ca].value;
                        "undefined" !== typeof W && null !== W && Aa.push("".concat(Ca, ",").concat(va.dT_.aesc(W)))
                    }
                var Ca = (Ca = Aa.join(";")) && encodeURIComponent(Ca);
                I.av(Z, "md", Ca, !0);
                J >= O && (J = O + "", fa && (J += "," + fa), I.av(Z, "mdlr", J, !0))
            }
        })
    }

    function eb() {
        var I = [],
            J = Sa()[0],
            fa = [],
            Z = [];
        for (W in ea)
            if (va.dT_.oHOP(ea, W)) {
                var Aa = ea[W];
                null !== Aa.value && "dT_err" !== Aa.value || !Aa.info || fa.push("'".concat(Aa.Ya, "'(").concat(ab(Aa.type), "): '").concat(Aa.info, "'"));
                "dT_pv" === Aa.value && Z.push("'".concat(Aa.Ya, "'(").concat(ab(Aa.type),
                    ")"))
            }
        if (fa.length) {
            var W = [];
            for (Aa = 0; Aa < fa.length; Aa++) W.push({
                type: "mnc",
                text: fa[Aa],
                severity: "Info"
            });
            I.push({
                severity: "Info",
                text: "".concat(fa.length, " session/action ").concat(1 < fa.length ? "properties" : "property", " not collected"),
                type: "mnc",
                children: W
            })
        }
        Z.length && I.push({
            severity: "Info",
            text: "Because of respected doNotTrack there are no session/action properties reported for: ".concat(Z.join(", ")),
            type: "mdr"
        });
        J >= O && I.push({
            severity: "Warning",
            text: 'Session/action properties size exceeds the active limit of "'.concat(O,
                '"'),
            type: "mlr"
        });
        return I
    }
    this.dT_ && dT_.prm && dT_.prm();
    var va = "undefined" !== typeof window ? window : self,
        U = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        Y;
    (function(I) {
        I.ANCHOR = "A";
        I.BUTTON = "BUTTON";
        I.FORM = "FORM";
        I.I_FRAME = "IFRAME";
        I.IMAGE = "IMG";
        I.INPUT = "INPUT";
        I.LABEL = "LABEL";
        I.LINK = "LINK";
        I.OPTION = "OPTION";
        I.SCRIPT = "SCRIPT";
        I.SELECT = "SELECT";
        I.STYLE = "STYLE";
        I.TEXT_AREA = "TEXTAREA"
    })(Y || (Y = {}));
    var Na;
    (function(I) {
        I.COOKIE = "c";
        I.CSS_SELECTOR = "a";
        I.JS_FUNCTION =
            "e";
        I.JS_VARIABLE = "b";
        I.QUERY_STRING = "d";
        I.RESPONSE_HEADER = "f"
    })(Na || (Na = {}));
    Y = {
        Ie: 0,
        Ge: 0
    };
    var La = {
            "window.Intercom": {
                Ie: 1,
                Ge: 1
            },
            "LC_API.get_last_visit_timestamp": Y,
            "LC_API.get_visits_number": Y,
            "LC_API.get_page_views_number": Y,
            "LC_API.get_chats_number": Y,
            "LC_API.get_visitor_id": Y,
            "LC_API.get_chat_id": Y
        },
        ea = {},
        S = {},
        P = {},
        ma, Ja;
    (function(I) {
        I.BOOLEAN = "Boolean";
        I.NULL = "Null";
        I.NUMBER = "Number";
        I.STRING = "String"
    })(Ja || (Ja = {}));
    var O, ca;
    (function() {
        var I, J;
        return (ca = U.dT_) && (null === (J = (I = va.dT_).smbi) ||
            void 0 === J ? 0 : J.call(I, "h")) ? (qa(), va.dT_.addE("DEBUG_INFO_REQUESTED", eb), !0) : !1
    })() && (ca.gEMD = Ka, ca.iRHCA = jb)
})();
(function() {
    function Ia(O, ca, I, J, fa) {
        var Z, Aa = !1;
        if (La || Na) return Aa;
        Na = !0;
        try {
            "function" === typeof Y && Y !== Ia && (Aa = Y(O, ca, I, J, fa))
        } catch (W) {
            Ea.dT_.rex(W, void 0, !0, "1")
        }
        Aa || Ea.dT_.re((Z = {}, Z.msg = "string" === typeof O ? O : "", Z.file = ca || "", Z.line = I || -1, Z.column = J || -1, Z.error = fa || "", Z.stackContainsWrapper = !1, Z.source = "1", Z));
        Na = !1;
        return Aa
    }

    function jb(O) {
        try {
            if ("[object Function]" !== Object.prototype.toString.call(O)) return O;
            var ca = O.dtwid;
            "number" === typeof ca && S[ca] ? S[ca].od++ : (S[P] = {
                    va: O,
                    od: 1
                }, O.dtwid =
                P++);
            O.rxewrapper = O.rxewrapper || function(I) {
                try {
                    return ma.errorCallback(O, this, arguments)
                } catch (J) {
                    if (-2146823277 !== J.number) throw ea && (Ea.dT_.rex(J, void 0, !0, "1"), nb()), J;
                }
            };
            return O.rxewrapper.rxewrapper = O.rxewrapper
        } catch (I) {
            return O
        }
    }

    function nb() {
        La += 1;
        Ea.dT_.st(function() {
            --La
        }, 0)
    }

    function db() {
        var O = document.getElementsByTagName("html");
        0 !== O.length && O[0].hasAttribute && O[0].hasAttribute("webdriver") || "EventTarget Window ModalWindow".replace(/\w+/g, function(ca) {
            (ca = ba[ca] && ba[ca].prototype) &&
            Ea.dT_.oHOP(ca, "addEventListener") && (ca.addEventListener = kb(ca.addEventListener), ca.removeEventListener = Oa(ca.removeEventListener));
            return ""
        })
    }

    function kb(O) {
        return function(ca, I, J, fa) {
            I && I.handleEvent && (I.handleEvent = jb(I.handleEvent));
            return O.call(this, ca, jb(I), J, fa)
        }
    }

    function Oa(O) {
        return function(ca, I, J, fa) {
            try {
                return O.call(this, ca, I && I.rxewrapper ? I.rxewrapper : I, J, fa)
            } finally {
                I && (ca = I.dtwid, "number" === typeof ca && S[ca] && S[ca].va === I && (S[ca].od--, S[ca].od || (delete I.rxewrapper, delete I.dtwid,
                    delete S[ca])))
            }
        }
    }

    function Ra() {
        try {
            Ea.dT_.apl(ba, "onerror", function() {
                return Ia
            }, function(O) {
                Y = O
            })
        } catch (O) {}
    }

    function Wa() {
        for (var O = [], ca = 0; ca < arguments.length; ca++) O[ca] = arguments[ca];
        var I, J;
        for (ca = 0; ca < O.length; ca++) {
            var fa = O[ca];
            !I && Ea.dT_.iIO(fa, 7) && (I = fa);
            !J && fa && "string" === typeof fa && (J = fa)
        }(I || J) && Ea.dT_.rex(I || J, void 0, !1, "2");
        return Ja.apply(this, O)
    }

    function Sa(O) {
        var ca;
        if (ca = "string" === typeof O.blockedURL && "string" === typeof O.documentURL && !!O.blockedURL && !!O.documentURL) ca = O.blockedURL,
            ca = -1 === (null === ca || void 0 === ca ? void 0 : ca.indexOf(Ea.dT_.scv("reportUrl")));
        if (ca) {
            ca = [];
            for (var I in O) O[I] && "function" !== typeof O[I] && ca.push([I, O[I] + ""]);
            ca.length && Ea.dT_.cAE("_csprv_", ca, !0, void 0, 1)
        }
    }

    function ab(O) {
        var ca;
        "securitypolicyviolation" === O.type && Sa((ca = {}, ca.sourceFile = O.sourceFile, ca.blockedURL = O.blockedURI, ca.documentURL = O.documentURI, ca.referrer = O.referrer, ca.disposition = O.disposition, ca.effectiveDirective = O.effectiveDirective || O.violatedDirective, ca.originalPolicy = O.originalPolicy,
            ca.statusCode = O.statusCode, ca.lineNumber = O.lineNumber, ca.columnNumber = O.columnNumber, ca.sample = O.sample, ca))
    }

    function Ka(O) {
        for (var ca = 0; ca < O.length; ca++) {
            var I = O[ca];
            "csp-violation" === I.type && (I = I.body) && Sa(I)
        }
    }

    function Bb(O) {
        O.reason && Ea.dT_.iIO(O.reason, 7) ? Ea.dT_.rex(O.reason, void 0, !0, "4") : O.detail && Ea.dT_.iIO(O.detail.reason, 7) && Ea.dT_.rex(O.detail.reason, void 0, !0, "4")
    }
    this.dT_ && dT_.prm && dT_.prm();
    var Ea = "undefined" !== typeof window ? window : self,
        ba = "undefined" !== typeof globalThis ? globalThis : "undefined" !==
        typeof window ? window : void 0,
        qa;
    (qa || (qa = {})).ERROR_CALLBACK = "errorCallback";
    var eb;
    (function(O) {
        O.ANGULAR = "5";
        O.CONSOLE = "2";
        O.CUSTOM = "0";
        O.PROMISE_REJECTION = "4";
        O.WINDOW_ONERROR = "1";
        O.XHR = "3"
    })(eb || (eb = {}));
    var va, U, Y, Na = !1,
        La = 0,
        ea = !0,
        S = {},
        P = 0,
        ma = (va = {}, va.errorCallback = function(O, ca, I, J, fa, Z) {
            return U.aWF(O, ca, I, J, fa, Z)
        }, va),
        Ja;
    (function() {
        var O, ca;
        if (ba.dT_ && (null === (ca = (O = Ea.dT_).smbi) || void 0 === ca ? 0 : ca.call(O, "q"))) {
            U = ba.dT_;
            if (!Ea.dT_.bcv("doel")) {
                ba.onerror !== Ia && (U.rxehandler = Ia, ba.onerror &&
                    (Y = ba.onerror), ba.onerror = U.rxehandler);
                Ra();
                if (!ba.atob) ea = !1;
                else if (ba.ErrorEvent) try {
                    0 === (new ba.ErrorEvent("test")).colno && (ea = !1)
                } catch (J) {}
                ea && db()
            }
            Ea.dT_.bcv("lupr") && Ea.dT_.ael(ba, "unhandledrejection", Bb);
            Ea.dT_.bcv("csprv") && (ba.ReportingObserver ? (new ba.ReportingObserver(Ka, {
                buffered: !0,
                types: ["csp-violation"]
            })).observe() : Ea.dT_.gBI().ff && Ea.dT_.ael(document, "securitypolicyviolation", ab));
            if (Ea.dT_.bcv("cce")) {
                var I;
                null !== (I = ba.console) && void 0 !== I && I.error && (Ja = ba.console.error, ba.console.error =
                    Wa)
            }
        }
    })()
})();
(function() {
    function Ia(G, ia, xa, Ba) {
        function Da(Ma) {
            return Ma instanceof xa ? Ma : new xa(function(sa) {
                sa(Ma)
            })
        }
        return new(xa || (xa = Mc))(function(Ma, sa) {
            function Ha(gb) {
                try {
                    Pa(Ba.next(gb))
                } catch (gc) {
                    sa(gc)
                }
            }

            function ob(gb) {
                try {
                    Pa(Ba["throw"](gb))
                } catch (gc) {
                    sa(gc)
                }
            }

            function Pa(gb) {
                gb.done ? Ma(gb.value) : Da(gb.value).then(Ha, ob)
            }
            Pa((Ba = Ba.apply(G, ia || [])).next())
        })
    }

    function jb(G, ia) {
        function xa(Pa) {
            return function(gb) {
                return Ba([Pa, gb])
            }
        }

        function Ba(Pa) {
            if (Ma) throw new TypeError("Generator is already executing.");
            for (; ob && (ob = 0, Pa[0] && (Da = 0)), Da;) try {
                if (Ma = 1, sa && (Ha = Pa[0] & 2 ? sa["return"] : Pa[0] ? sa["throw"] || ((Ha = sa["return"]) && Ha.call(sa), 0) : sa.next) && !(Ha = Ha.call(sa, Pa[1])).done) return Ha;
                if (sa = 0, Ha) Pa = [Pa[0] & 2, Ha.value];
                switch (Pa[0]) {
                    case 0:
                    case 1:
                        Ha = Pa;
                        break;
                    case 4:
                        return Da.label++, {
                            value: Pa[1],
                            done: !1
                        };
                    case 5:
                        Da.label++;
                        sa = Pa[1];
                        Pa = [0];
                        continue;
                    case 7:
                        Pa = Da.da.pop();
                        Da.J.pop();
                        continue;
                    default:
                        if (!(Ha = Da.J, Ha = 0 < Ha.length && Ha[Ha.length - 1]) && (6 === Pa[0] || 2 === Pa[0])) {
                            Da = 0;
                            continue
                        }
                        if (3 === Pa[0] && (!Ha || Pa[1] >
                                Ha[0] && Pa[1] < Ha[3])) Da.label = Pa[1];
                        else if (6 === Pa[0] && Da.label < Ha[1]) Da.label = Ha[1], Ha = Pa;
                        else if (Ha && Da.label < Ha[2]) Da.label = Ha[2], Da.da.push(Pa);
                        else {
                            Ha[2] && Da.da.pop();
                            Da.J.pop();
                            continue
                        }
                }
                Pa = ia.call(G, Da)
            } catch (gb) {
                Pa = [6, gb], sa = 0
            } finally {
                Ma = Ha = 0
            }
            if (Pa[0] & 5) throw Pa[1];
            return {
                value: Pa[0] ? Pa[1] : void 0,
                done: !0
            }
        }
        var Da = {
                label: 0,
                B: function() {
                    if (Ha[0] & 1) throw Ha[1];
                    return Ha[1]
                },
                J: [],
                da: []
            },
            Ma, sa, Ha, ob;
        return ob = {
            next: xa(0),
            "throw": xa(1),
            "return": xa(2)
        }, "function" === typeof Symbol && (ob[Symbol.iterator] =
            function() {
                return this
            }), ob
    }

    function nb(G, ia) {
        void 0 === ia && (ia = []);
        var xa = Rb.dT_;
        xa = (null === xa || void 0 === xa ? 0 : xa.iIO) ? xa.iIO : null;
        return !(null === xa || void 0 === xa || !xa(G, ia))
    }

    function db(G, ia) {
        void 0 === ia && (ia = 0);
        return G.name + "_" + (G.startTime + ia) + "_" + G.duration
    }

    function kb() {
        try {
            performance.getEntries()[0].dt_test = !0, lc = performance.getEntries()[0].dt_test, Vb = function() {
                return !!lc
            }
        } catch (G) {}
    }

    function Oa() {
        oc = Rb.dT_;
        Vb = mb.dT_.gBI().sf ? function() {
            return !1
        } : function() {
            kb();
            return !!lc
        }
    }

    function Ra() {
        function G() {}
        if (!Xa) return !1;
        Gb = Xa.getEntriesByType;
        ec = Xa.getEntriesByName;
        fc = Xa.setResourceTimingBufferSize;
        (C = Xa.clearResourceTimings) && (Xa.clearResourceTimings = G);
        Xa.webkitClearResourceTimings && (Xa.webkitClearResourceTimings = G);
        return !!Gb && !!ec && !!fc && !!C
    }

    function Wa(G) {
        "function" === typeof Xa.addEventListener ? Xa.addEventListener("resourcetimingbufferfull", G) : "undefined" !== typeof Xa.onresourcetimingbufferfull && (pa = Xa.onresourcetimingbufferfull, Xa.onresourcetimingbufferfull = G)
    }

    function Sa() {
        try {
            "function" ===
            typeof pa && pa.call(Xa, new Event("resourcetimingbufferfull", {
                bubbles: !0,
                cancelable: !0
            })), mb.dT_.st(function() {
                C.call(Xa)
            }, 0)
        } catch (G) {}
    }

    function ab() {
        Xa = Rb.performance;
        var G = Ra();
        G && fc.call(Xa, 1E3);
        return G
    }

    function Ka(G) {
        var ia = G.detail;
        G = ia.a;
        if (ia = ia.e)
            for (var xa = 0; xa < ia.length; xa++) {
                var Ba = ia[xa],
                    Da = Ba.url;
                if (Da) {
                    var Ma = Ba.relevance || 0;
                    Ba = {
                        Xa: Ba.area,
                        imageWidth: Ba.w,
                        imageHeight: Ba.h,
                        Oc: Ba.nw,
                        Nc: Ba.nh,
                        Oe: Ba.o,
                        qd: Ma,
                        Eg: Ba.ireason || 0,
                        D: G || 0
                    };
                    if (!Ga[Da] || Ma > Ga[Da].qd) Ga[Da] = Ba
                }
            }
    }

    function Bb(G) {
        return !!G &&
            isFinite(G) && 0 < G
    }

    function Ea(G) {
        var ia = Ga[G.name];
        "undefined" !== typeof ia ? (G.relevantArea = ia.Xa, G.relevance = ia.qd, G.vcIrrelevanceReason = ia.Eg, ia.Oe && (G.onloadTime = ia.Oe - Math.round(G.startTime) - mb.dT_.gto()), Bb(ia.imageWidth) && Bb(ia.imageHeight) && (G.imageWidth = ia.imageWidth, G.imageHeight = ia.imageHeight), Bb(ia.Oc) && ia.Oc !== ia.imageWidth && (G.imageNaturalWidth = ia.Oc), Bb(ia.Nc) && ia.Nc !== ia.imageHeight && (G.imageNaturalHeight = ia.Nc), delete Ga[G.name]) : G.relevance = 0
    }

    function ba() {
        return Cb
    }

    function qa(G) {
        F[db(G)] =
            G
    }

    function eb(G) {
        N[db(G)] = G
    }

    function va(G, ia, xa) {
        return {
            get: function() {
                var Ba = +G[xa];
                return isNaN(Ba) ? ia : Ba + ia
            }
        }
    }

    function U(G, ia) {
        function xa(Ha) {
            Ha in G && (Da[Ha] = {
                get: function() {
                    return G[Ha]
                }
            })
        }
        if (0 >= ia) return G;
        var Ba = F[db(G, ia)];
        if (Ba) return Ba;
        for (var Da = {}, Ma = 0, sa = aa; Ma < sa.length; Ma++) Ba = sa[Ma], Da[Ba] = va(G, ia, Ba);
        ia = 0;
        for (Ma = H; ia < Ma.length; ia++) Ba = Ma[ia], xa(Ba);
        Ba = Object.create(G, Da);
        Ba._dtCl = !0;
        qa(Ba);
        return Ba
    }

    function Y() {
        var G = [],
            ia = document.getElementsByTagName("iframe");
        if (!ia.length) return G;
        for (var xa = 0; xa < ia.length; xa++) {
            var Ba = ia[xa];
            try {
                var Da = G,
                    Ma = Da.concat;
                var sa = void 0,
                    Ha = Ba.contentWindow;
                if (ja.has(Ba)) var ob = ja.get(Ba);
                else {
                    var Pa = Za;
                    ja.set(Ba, Pa);
                    "undefined" !== typeof Ba.src && (Cb[Ba.src] = Pa);
                    Za++;
                    ob = Pa
                }
                if (Ha.dT_) var gb = [];
                else {
                    Ba = [];
                    var gc = Ha.performance.getEntriesByType("resource"),
                        Tb = Xa.timeOrigin;
                    sa = Tb ? Ha.performance.timeOrigin - Tb : Ha.performance.timing.navigationStart - Xa.timing.navigationStart;
                    sa = Math.round(sa);
                    for (Pa = 0; Pa < gc.length; Pa++) {
                        var Lb = U(gc[Pa], sa);
                        v[db(Lb)] || (Lb.frameId =
                            ob, Ba.push(Lb))
                    }
                    gb = Ba
                }
                G = Ma.call(Da, gb)
            } catch (ac) {}
        }
        return G
    }

    function Na() {
        var G = [],
            ia = Gb.call(Xa, "resource"),
            xa = Vb(),
            Ba;
        if (Rb.frames && Rb.frames.length) {
            for (var Da = [], Ma = 0; Ma < Rb.frames.length; Ma++) try {
                var sa = Rb.frames[Ma];
                sa.dT_ && (null === (Ba = null === sa || void 0 === sa ? void 0 : sa.location) || void 0 === Ba ? 0 : Ba.href) && Da.push(sa.location.href)
            } catch (Ha) {}
            Ba = Da
        } else Ba = [];
        for (Da = 0; Da < ia.length; Da++) {
            Ma = ia[Da];
            xa || ((sa = N[db(Ma)]) ? Ma = sa : eb(Ma));
            if (!(sa = v[db(Ma)])) a: {
                if (("iframe" === Ma.initiatorType || "subdocument" ===
                        Ma.initiatorType) && Ba.length)
                    for (sa = 0; sa < Ba.length; sa++)
                        if (Ba[sa] === Ma.name) {
                            sa = !0;
                            break a
                        }
                sa = !1
            }
            sa || G.push(Ma)
        }
        return G
    }

    function La(G, ia) {
        if ("text/css" === ia.type) {
            var xa = ia.href || "";
            var Ba = ia.ownerNode;
            ia = Ba && Ba.nodeType && 1 === Ba.nodeType ? ia.ownerNode : null
        } else xa = ia.src;
        xa && ia && (G[xa] = ia);
        return G
    }

    function ea(G, ia) {
        return ia.D !== G && !ia.kf
    }

    function S(G, ia, xa, Ba, Da, Ma) {
        return function(sa) {
            if (!v[db(sa)]) try {
                var Ha = sa.name,
                    ob = (sa.workerNavigationStart || mb.dT_.gto()) + sa.startTime,
                    Pa = sa.name,
                    gb;
                if (!(gb = -1 < Pa.indexOf(mb.dT_.scv("csu")) || -1 < Pa.indexOf("dtagent_") || -1 < Pa.indexOf("ampbf") && -1 < Pa.indexOf("flavor=amp"))) {
                    var gc = Pa.indexOf,
                        Tb = mb.dT_.scv("reportUrl");
                    tb && Tb === tc || (tc = Tb, tb = mb.dT_.tau(tc));
                    gb = -1 !== gc.call(Pa, tb)
                }
                if (!(gb || sa.startTime > sa.responseEnd || 0 > sa.startTime) && -1 === Ha.indexOf("chrome-extension://") && -1 === Ha.indexOf("chrome://") && -1 === Ha.indexOf("data:") && -1 === Ha.indexOf("javascript:") && -1 === Ha.indexOf("about:") && -1 === Ha.indexOf("res://")) {
                    Ha = ob - G;
                    var Lb = Ga[sa.name],
                        ac = sa.Lf || Infinity;
                    ac = Da ? Infinity : ac;
                    Pa = oc;
                    if (G <= ob && ob <= ia + (Pa.syn ? 1E3 : mb.dT_.ncv("rtt")) && ac >= Ha || Lb && Lb.D === +xa && 0 < Lb.qd) {
                        var Oc = Ba && -1 < sa.name.indexOf(Ba);
                        ob = 3;
                        Da ? ob = 1 : Oc && (ob = 2);
                        sa.Ce && 3 !== sa.Ce || (sa.Lf = Ha, sa.Ce = ob, sa.Ze = Ma, sa.actionId = xa)
                    }
                }
            } catch (cd) {}
        }
    }

    function P(G, ia, xa) {
        return Ia(this, void 0, void 0, function() {
            var Ba, Da, Ma;
            return jb(this, function(sa) {
                switch (sa.label) {
                    case 0:
                        ra = mb.dT_.aFr(ra, ea.bind(null, G)), Ba = 0, Da = ra, sa.label = 1;
                    case 1:
                        if (!(Ba < Da.length)) return [3, 4];
                        Ma = Da[Ba];
                        return [4, ma(Ma, Ma.start, ia, !1, xa)];
                    case 2:
                        sa.B(), Ma.kf = !0, sa.label = 3;
                    case 3:
                        return Ba++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function ma(G, ia, xa, Ba, Da) {
        var Ma = G.D,
            sa = G.$e,
            Ha = G.xhrUrl,
            ob = G.start;
        return Ia(this, void 0, void 0, function() {
            var Pa, gb, gc, Tb;
            return jb(this, function(Lb) {
                switch (Lb.label) {
                    case 0:
                        return Pa = mb.dT_.lAID(), gb = Ma === Pa, gc = S(ob, ia, Ma, Ha, gb, sa), [4, mb.dT_.fEP(Da, gc, void 0, !xa)];
                    case 1:
                        Lb.B();
                        if (!Ba) return [2];
                        Tb = na[sa];
                        Tb.count--;
                        !Tb.count && 0 <= Tb.Jb.indexOf(sa) && mb.dT_.sMPS(1);
                        return [2]
                }
            })
        })
    }

    function Ja() {
        for (var G = 0, ia = mb.dT_.oK(R); G <
            ia.length; G++) {
            var xa = R[+ia[G]];
            mb.dT_.ct(xa.oa);
            xa.Ia(!0)
        }
        R = {}
    }

    function O(G, ia, xa, Ba) {
        var Da = na[xa];
        Da || (Da = {
            count: 0,
            Jb: []
        });
        Da.count++;
        Da.Jb.push(G);
        na[xa] = Da;
        ra.push({
            D: G,
            start: ia,
            $e: xa,
            xhrUrl: Ba,
            kf: !1
        })
    }

    function ca() {
        na = {};
        R = {};
        ra = [];
        var G = mb.dT_.lAID();
        O(G, mb.dT_.lst(), G);
        mb.dT_.addE("ACTION_ENTERED", I);
        mb.dT_.addE("ACTION_SENT", J)
    }

    function I(G) {
        var ia = G.detail;
        G = ia.x;
        var xa = ia.i,
            Ba = ia.a,
            Da = ia.r; - 1 === za.indexOf(ia.t) && (ia = mb.dT_.lAID(), Da === ia && Da !== xa || O(xa, Ba, Da, G))
    }

    function J(G) {
        return Ia(this,
            void 0, void 0,
            function() {
                function ia(Lb) {
                    return Ia(this, void 0, void 0, function() {
                        var ac;
                        return jb(this, function(Oc) {
                            switch (Oc.label) {
                                case 0:
                                    return ac = Array.prototype.concat(Y(), Na(), D), [4, P(Ma, !0, ac)];
                                case 1:
                                    return Oc.B(), [4, ma({
                                        D: Ma,
                                        $e: Pa,
                                        xhrUrl: Ba,
                                        start: sa
                                    }, Ha, Lb, !0, ac)];
                                case 2:
                                    return Oc.B(), [2]
                            }
                        })
                    })
                }
                var xa, Ba, Da, Ma, sa, Ha, ob, Pa, gb, gc, Tb;
                return jb(this, function(Lb) {
                    switch (Lb.label) {
                        case 0:
                            xa = G.detail;
                            Ba = xa.x;
                            Da = xa.t;
                            Ma = xa.i;
                            sa = xa.a;
                            Ha = xa.s;
                            ob = xa.f;
                            Pa = xa.r;
                            (gb = xa.rt) && eb(gb);
                            if (-1 !== za.indexOf(Da)) return [2];
                            gc = mb.dT_.lAID();
                            return Pa === gc && Pa !== Ma ? [2] : ob ? [4, ia(ob)] : [3, 2];
                        case 1:
                            return Lb.B(), [3, 3];
                        case 2:
                            Tb = mb.dT_.st(function() {
                                delete R[Ma];
                                ia(ob)
                            }, 2E3), R[Ma] = {
                                oa: Tb,
                                Ia: ia
                            }, Lb.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
    }

    function fa(G) {
        var ia;
        if (ia = "number" === typeof G.Ze) {
            var xa;
            ia = 0 === (null === (xa = na[G.Ze]) || void 0 === xa ? void 0 : xa.count)
        }
        return ia
    }

    function Z(G) {
        var ia = [],
            xa = 0,
            Ba = [];
        for (sa in na) {
            var Da;
            if (Da = mb.dT_.oHOP(na, sa)) {
                Da = +sa;
                var Ma = na[Da];
                Da = !R[Da] && (!Ma || !Ma.count && 0 <= Ma.Jb.indexOf(Da))
            }
            Da && Ba.push.apply(Ba,
                na[sa].Jb)
        }
        for (; xa < Ba.length; xa++) {
            var sa = +Ba[xa];
            Ma = Da = G[sa] || [];
            var Ha = sa,
                ob = oc;
            if (!ob.syn && ob.gLVD) {
                var Pa = 0;
                for (Ha = ob.gUI(Ha); Pa < Ha.length; Pa++) {
                    ob = Ha[Pa];
                    for (var gb = !1, gc = 0, Tb = Ma; gc < Tb.length; gc++) {
                        var Lb = Tb[gc];
                        if (!Lb.failedResource && Lb.name === ob.name) {
                            Lb.failedResource = ob.failedResource;
                            gb = !0;
                            break
                        }
                    }
                    gb || (Ea(ob), Ma.push(ob))
                }
            }
            ia.push({
                resources: Da,
                actionId: sa
            });
            delete na[sa]
        }
        return ia
    }

    function Aa(G) {
        G && Ja();
        G = mb.dT_.aFr(Array.prototype.concat(Y(), Na(), D), fa);
        var ia = mb.dT_.red(Array.prototype.concat(Array.prototype.slice.call(document.scripts),
            Array.prototype.slice.call(document.styleSheets)), La, {});
        G = mb.dT_.red(G, function(xa, Ba) {
            var Da = Ba.actionId,
                Ma = xa[Da];
            Ma || (Ma = []);
            var sa = ia[Ba.name];
            if (sa) {
                if (sa && "LINK" === sa.nodeName) {
                    var Ha = sa.media || "all";
                    sa = "stylesheet" === sa.rel && window.matchMedia(Ha).matches && !sa.disabled
                } else sa = !sa.hasAttribute("async") && !sa.hasAttribute("defer") && "module" !== sa.getAttribute("type");
                Ba.isCritical = +sa
            }
            Ea(Ba);
            Ma.push(Ba);
            xa[Da] = Ma;
            v[db(Ba)] = !0;
            return xa
        }, {});
        G = Z(G);
        900 < Gb.call(Xa, "resource").length && (Sa(), v = {},
            F = {}, N = {}, D = [], Ga = {});
        return G
    }

    function W(G) {
        return od && nb(G, 13) && "navigation" !== G.entryType || nb(G, ["_dtCl"])
    }

    function Ca(G) {
        -1 < G.indexOf("ScriptResource.axd") ? G = "js" : (G = G.substring(1 + G.lastIndexOf("/")), 0 < G.indexOf("?") && (G = G.split("?")[0]), 0 < G.indexOf("#") && (G = G.split("#")[0]), G = 0 < G.indexOf(".") ? G.substring(G.lastIndexOf(".") + 1) : "-");
        switch (G) {
            case "js":
                return "s";
            case "gif":
            case "png":
            case "jpg":
            case "jpeg":
            case "ico":
            case "tiff":
            case "bmp":
            case "xbm":
            case "svg":
                return "i";
            case "css":
                return "c";
            default:
                return "o"
        }
    }

    function bb(G) {
        G = sc() + G.startTime;
        G -= qb();
        return Math.round(G)
    }

    function lb(G, ia, xa, Ba) {
        var Da = G.resources;
        G = G.actionId;
        if (Sc().op) {
            for (var Ma = [], sa = {}, Ha = 0; Ha < Da.length; Ha++) {
                var ob = Da[Ha];
                sa[ob.name] || (Ma.push(ob), sa[ob.name] = !0)
            }
            Da = Ma
        }
        Ma = [];
        sa = 0;
        for (Ha = Da; sa < Ha.length; sa++) {
            ob = Ma;
            var Pa = ob.push,
                gb = Ha[sa],
                gc = Ca(gb.name.toLowerCase()),
                Tb = gb,
                Lb = Tb.duration;
            !Lb && W(Tb) && (Lb = Tb.responseEnd - Tb.startTime);
            Tb = Lb ? Math.round(Lb) : 0;
            Lb = bb(gb);
            var ac = gb;
            W(ac) && 0 < ac.responseEnd ? (ac = sc() + ac.responseEnd, ac -= qb(),
                ac = Math.round(ac)) : ac = Math.round(Zb() - qb());
            Tb = {
                duration: Tb,
                start: Lb,
                stop: ac
            };
            Lb = gb.name;
            ac = wb(gb.name);
            var Oc = bb(gb) <= Fb() ? "_load_" : "-",
                cd = 0 === gb.responseEnd,
                wc = gb.failedResource ? !1 : 0 < gb.responseEnd;
            gb = Sc().ch ? 0 !== gb.domainLookupStart && 0 === gb.requestStart : wb(gb.name) !== Kc && 0 === gb.requestStart && 2 > gb.duration ? !0 : 0 >= gb.responseEnd ? !1 : gb.requestStart === gb.fetchStart && gb.requestStart === gb.responseStart && gb.responseStart !== gb.responseEnd;
            Pa.call(ob, {
                type: gc,
                yj: Tb,
                url: Lb,
                domain: ac,
                ii: Oc,
                dj: cd,
                Pj: wc,
                vi: gb,
                Zi: !1
            })
        }
        oa(ia, G, Ma, Da, xa, Ba)
    }

    function Ab(G, ia, xa, Ba, Da) {
        var Ma = Da || sc();
        if (!G.length || 0 >= Ma) xa("");
        else {
            var sa = [];
            Wb(G, function(Ha) {
                if (yc && sa.length / 2 >= yc) Ha = !1;
                else {
                    var ob = Ha.startTime,
                        Pa;
                    if (Pa = !(ob < ("iframe" === Ha.initiatorType ? 1 : 0))) Pa = Ha.actionId, Pa = !Pa || Pa === ia;
                    Pa && (ob = ob ? ["b", Math.round(ob)] : [], $a(Ha, ob, sc()), sa.push(ze(Ha.name), ob.join("")));
                    Ha = !0
                }
                return Ha
            }, void 0, function() {
                xa(vb("".concat(ia || ye(), "-").concat(Math.round(Ma), ";").concat(sa.join("|"))))
            }, !Ba)
        }
    }

    function oa(G, ia, xa, Ba, Da, Ma) {
        Ab(Ba,
            ia,
            function(sa) {
                sa && G.Ye.push(sa);
                Da()
            }, Ma)
    }

    function ub(G, ia, xa, Ba) {
        if (mb.dT_.las()) {
            var Da = Fb();
            !xa && (0 >= Da || 3E3 > Zb() - Da) ? (mb.dT_.sMPS(2E3), Da = !1) : Da = !0
        } else Da = !1;
        if (Da && !ia) {
            kc(Aa(xa), xa);
            !ya.length || mb.dT_.last() + 3E4 <= Zb() && mb.dT_.last() ? (ya = [], ia = void 0) : ia = ya.splice(0, 1)[0];
            if (ia)
                for (ia = ia.Ye, xa = 0; xa < ia.length; xa++) G.av(Ba, "rt", ia[xa], !0, xa);
            ya.length && mb.dT_.sMPS(100)
        }
    }

    function kc(G, ia) {
        for (var xa = {
                Ye: [],
                resourceSummaries: []
            }, Ba = G.length, Da = 0, Ma = 0; Ma < G.length; Ma++) lb(G[Ma], xa, function() {
            Da++;
            Da === Ba && (ya.push(xa), mb.dT_.sMPS(0))
        }, ia)
    }

    function Gc(G) {
        $a = G.snt;
        vb = G.esc;
        Wb = G.fE;
        qb = G.lst;
        Zb = G.nw;
        Fb = G.gLAet;
        wb = G.gh;
        Xb = G.loc;
        Sc = G.gBI;
        ye = G.lAID;
        ze = G.aur;
        Nd = G.stcv;
        sc = G.gto;
        G = oc;
        yc = mb.dT_.ncv("rtl");
        G.syn && (yc = 0, Nd("rtp", 1), Nd("rtu", 800));
        Kc = wb(Xb());
        G = Rb.performance;
        0 < ((null === G || void 0 === G ? void 0 : G.timeOrigin) || (null === G || void 0 === G ? void 0 : G.timing.navigationStart)) && mb.dT_.aBPSL(ub)
    }
    var Mc = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        mb = "undefined" !== typeof window ? window : self,
        Rb = "undefined" !==
        typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        Hc;
    (function(G) {
        G.ANCHOR = "A";
        G.BUTTON = "BUTTON";
        G.FORM = "FORM";
        G.I_FRAME = "IFRAME";
        G.IMAGE = "IMG";
        G.INPUT = "INPUT";
        G.LABEL = "LABEL";
        G.LINK = "LINK";
        G.OPTION = "OPTION";
        G.SCRIPT = "SCRIPT";
        G.SELECT = "SELECT";
        G.STYLE = "STYLE";
        G.TEXT_AREA = "TEXTAREA"
    })(Hc || (Hc = {}));
    var oc, lc, Vb, tb, tc, Xa, fc, Gb, ec, C, pa, Ga = {},
        ja, Cb = {},
        Za = 0,
        v = {},
        F = {},
        D = [],
        N = {},
        aa = "connectEnd connectStart domainLookupEnd domainLookupStart fetchStart redirectEnd redirectStart requestStart responseEnd responseStart secureConnectionStart startTime workerStart".split(" "),
        H = "name duration transferSize decodedBodySize encodedBodySize entryType initiatorType nextHopProtocol serverTiming transferSize responseStatus".split(" "),
        na = {},
        R = {},
        ra = [],
        za = "_error_ _ts_ _code_ _debug_ _emu_ _location_ _stack_ _useraction_ _source_ _istack_ _type_ _log_ _rs_ _endVisit_ - _t_".split(" "),
        $a, vb, Wb, qb, Fb, Zb, wb, Xb, Sc, ye, ze, Nd, sc, yc, Kc, od = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming,
        ya = [];
    (function() {
        var G, ia, xa = Rb.dT_;
        if (!xa || null === (ia =
                (G = mb.dT_).ssmbi) || void 0 === ia || !ia.call(G, "r", !1, !0) || Rb.Zh) return !1;
        Oa();
        if (!ab()) return !1;
        Gc(xa);
        ca();
        Cb = {};
        ja = new WeakMap;
        Za = 0;
        Ga = {};
        v = {};
        F = {};
        N = {};
        D = [];
        Wa(function() {
            D = Na()
        });
        mb.dT_.addE("VISUALLY_COMPLETE", Ka);
        return !0
    })() && (oc.gFU = ba)
})();
(function() {
    function Ia(W) {
        U.dT_.addE && U.dT_.addE("CONFIG_UPDATE", W)
    }

    function jb() {
        (La = U.dT_.bcv("uxdce")) && (ea = U.dT_.ncv("uxdcw"))
    }

    function nb() {
        (P = U.dT_.aO("deadClickObserver", Oa)) && P.observe(document.documentElement, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        });
        P && (U.dT_.aBPSL(kb), U.dT_.ael(document, "click", db), Ja = !0)
    }

    function db() {
        var W = U.dT_.nw();
        U.dT_.st(function() {
            S < W && (ma.push({
                time: Math.round(W)
            }), U.dT_.sMPS(2E3))
        }, ea)
    }

    function kb(W, Ca, bb, lb) {
        if (0 !== ma.length) {
            Ca = W.av;
            bb = ma;
            for (var Ab = [], oa = 0; oa < bb.length; oa++) Ab.push(bb[oa].time.toFixed());
            Ca.call(W, lb, "dC", Ab.join(","), !0);
            ma = []
        }
    }

    function Oa(W) {
        for (var Ca = W.length; Ca--;) {
            var bb = W[Ca].target,
                lb = bb,
                Ab = void 0,
                oa = lb,
                ub = 9;
            void 0 === ub && (ub = []);
            var kc = Y.dT_;
            if (kc = (!(null === (Ab = (null === kc || void 0 === kc ? 0 : kc.iIO) ? kc.iIO : null) || void 0 === Ab || !Ab(oa, ub)) || lb && lb.nodeType && 1 === lb.nodeType) && ("string" === typeof lb.textContent || "string" === typeof lb.innerText)) bb = bb.getBoundingClientRect(), kc = !(0 > bb.right || bb.left > (window.innerWidth || document.documentElement.clientWidth) ||
                0 > bb.bottom || bb.top > (window.innerHeight || document.documentElement.clientHeight));
            if (kc) {
                S = U.dT_.nw();
                break
            }
        }
    }

    function Ra() {
        jb();
        La && !Ja ? nb() : !La && Ja && (U.dT_.rBPSL(kb), U.dT_.rO("deadClickObserver"), U.dT_.rel(document, "click", db, void 0), ma = [], Ja = !1, S = -1)
    }

    function Wa() {
        if (O = U.dT_.bcv("uxrgce")) {
            var W = U.dT_.scv("uxrgcm").split(";"),
                Ca = W[1];
            ca = Sa(W[0]);
            Sa(Ca)
        }
    }

    function Sa(W) {
        W = W.split(",");
        return {
            yi: +W[0] || 100,
            Hi: +W[1] || 25,
            Xh: +W[2] || 300,
            Th: +W[3] || 3
        }
    }

    function ab(W) {
        return {
            x: W.x || W.clientX,
            y: W.y || W.clientY,
            timeStamp: U.dT_.nw()
        }
    }

    function Ka() {
        U.dT_.iMD() || (U.dT_.aBPSL(ba), U.dT_.ael(document, "click", Ea), U.dT_.ael(document, "mousedown", Bb), I = !0)
    }

    function Bb(W) {
        fa = ab(W)
    }

    function Ea(W) {
        W = ab(W);
        if (0 === Z.length) Z.push(W);
        else {
            var Ca = Z[0],
                bb = Z[Z.length - 1];
            if (bb = W && bb ? W.timeStamp - bb.timeStamp <= ca.Xh : !1) bb = ca.Hi, bb = Math.abs(Ca.x - W.x) <= bb && Math.abs(Ca.y - W.y) <= bb;
            bb && W && fa && W.timeStamp - fa.timeStamp <= ca.yi ? (Z.push(W), qa()) : (Z.length >= ca.Th && eb(), Z = [W])
        }
    }

    function ba(W, Ca, bb, lb) {
        if (0 !== Aa.length) {
            Ca = W.av;
            bb = Aa;
            for (var Ab = [], oa = 0; oa < bb.length; oa++) {
                var ub = bb[oa];
                Ab.push(ub.zi + "|" + ub.Vh.toFixed() + "|" + ub.duration.toFixed())
            }
            Ca.call(W, lb, "rC", Ab.join(","), !0);
            Aa = []
        }
    }

    function qa() {
        U.dT_.ct(J);
        J = U.dT_.st(function() {
            Z.length >= ca.Th && eb()
        }, ca.Xh)
    }

    function eb() {
        var W = Z[0];
        W = {
            zi: Z.length,
            Vh: Math.round(W.timeStamp),
            duration: Math.round(Z[Z.length - 1].timeStamp - W.timeStamp)
        };
        0 < W.Vh && 0 < W.duration && (Aa.push(W), U.dT_.sMPS(2E3));
        Z = []
    }

    function va() {
        Wa();
        O && !I ? Ka() : !O && I && (U.dT_.rBPSL(ba), U.dT_.rel(document, "click", Ea, void 0), U.dT_.rel(document,
            "mousedown", Bb, void 0), Z = [], Aa = [], I = !1)
    }
    this.dT_ && dT_.prm && dT_.prm();
    var U = "undefined" !== typeof window ? window : self,
        Y = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        Na;
    (function(W) {
        W.ANCHOR = "A";
        W.BUTTON = "BUTTON";
        W.FORM = "FORM";
        W.I_FRAME = "IFRAME";
        W.IMAGE = "IMG";
        W.INPUT = "INPUT";
        W.LABEL = "LABEL";
        W.LINK = "LINK";
        W.OPTION = "OPTION";
        W.SCRIPT = "SCRIPT";
        W.SELECT = "SELECT";
        W.STYLE = "STYLE";
        W.TEXT_AREA = "TEXTAREA"
    })(Na || (Na = {}));
    var La, ea, S = -1,
        P, ma = [],
        Ja = !1,
        O, ca, I = !1,
        J, fa, Z = [],
        Aa = [];
    (function() {
        var W, Ca;
        return Y.dT_ && (null === (Ca = (W = U.dT_).smbi) || void 0 === Ca ? void 0 : Ca.call(W, "u"))
    })() && (Wa(), O && Ka(), Ia(va), jb(), La && nb(), Ia(Ra))
})();
(function() {
    function Ia(v, F, D) {
        if (D || 2 === arguments.length)
            for (var N = 0, aa = F.length, H; N < aa; N++) !H && N in F || (H || (H = Array.prototype.slice.call(F, 0, N)), H[N] = F[N]);
        return v.concat(H || Array.prototype.slice.call(F))
    }

    function jb() {}

    function nb(v) {
        if (lc)
            for (var F = 0, D = Vb; F < D.length; F++) {
                var N = D[F]; - 1 !== Rb.indexOf(N) || oa.dT_.iNF(v[N]) || Rb.splice(0, 0, N)
            }
    }

    function db(v, F) {
        var D = !1;
        try {
            D = !oa.dT_.iNF(v)
        } catch (aa) {}
        if (!D)
            for (var N = 0; N < F.length && !(D = (D = v.prototype[F[N]]) && !oa.dT_.iNF(D)); N++);
        return D ? (oa.dT_.addE("DEBUG_INFO_REQUESTED",
            function() {
                return [{
                    type: "lxw",
                    text: "Found a non-native XMLHttpRequest or EventTarget object before initializing! Basic XHR is operating in late mode.",
                    severity: "Warning"
                }]
            }), !0) : !1
    }

    function kb(v) {
        if (!v) return {};
        v = v.replace(/^\s+|\s+$/g, "").split(/[\r\n]+/);
        var F = {};
        oa.dT_.fE(v, function(D) {
            D = D.split(": ");
            var N = D.shift();
            N && (F[N] = D.join(": "))
        });
        return F
    }

    function Oa(v) {
        v = v.toString().match(/\[object (XMLHttpRequest)?(\w+)]/);
        var F;
        if (F = v && v[2] && "Object" !== v[2]) F = v[2], F = "function" === typeof ub[F] || "object" ===
            typeof ub[F] && 11 === oa.dT_.gBI().ie;
        return F ? v[2] : "Event"
    }

    function Ra(v, F) {
        v = v.dtProps.ra;
        var D = [];
        F = F.substring(2);
        for (var N = 0; N < v.length; N++) {
            var aa = v[N];
            aa[0] === F && D.push(aa[1])
        }
        return D
    }

    function Wa(v, F, D) {
        function N(ra) {
            function za($a, vb) {
                try {
                    D ? (oa.dT_.ec(D.dtProps.Z), D.dtProps.Na++) : (oa.dT_.ec(v.dtProps.Z), v.dtProps.Na++), "object" === typeof vb && vb.handleEvent ? Gb.handleEventCallback(vb.handleEvent, vb, $a) : Gb.handleEventCallback(vb, v, $a)
                } finally {
                    D ? (D.dtProps.Na--, oa.dT_.lc(D.dtProps.Z)) : (v.dtProps.Na--,
                        oa.dT_.lc(v.dtProps.Z))
                }
            }
            try {
                F[ra] = function($a) {
                    var vb = Array.prototype.slice.call(arguments);
                    if (0 < vb.length) {
                        var Wb = ab($a, v);
                        oa.dT_.fE(kc, function(Zb) {
                            "undefined" !== typeof $a[Zb] && (Wb[Zb] = $a[Zb])
                        });
                        vb[0] = Wb
                    }
                    var qb = v.dtProps;
                    if (oa.dT_.mx() && ra in aa) aa[ra](qb.Z);
                    (qb = qb[ra] || lc && v[ra]) && za(vb, qb);
                    qb = 0;
                    for (var Fb = Ra(v, ra); qb < Fb.length; qb++) za(vb, Fb[qb])
                }
            } catch ($a) {}
        }
        for (var aa = {
                onerror: function() {
                    D ? oa.dT_.mxg("Upload failure", D.dtProps.Z) : oa.dT_.mxf(v.dtProps.G.status, v.dtProps.G.statusText, v.dtProps.Z)
                },
                onabort: oa.dT_.mxc,
                ontimeout: oa.dT_.mxt
            }, H = 0, na = Gc; H < na.length; H++) {
            var R = na[H];
            try {
                if (R in F || lc && R in v) oa.dT_.bcv("raxeh") ? N(R) : (Ra(v, R).length || v[R]) && N(R)
            } catch (ra) {}
        }
    }

    function Sa(v, F, D) {
        Object.defineProperty(v, F, {
            enumerable: !0,
            get: D
        })
    }

    function ab(v, F) {
        var D = v.timeStamp || oa.dT_.nw(),
            N = "undefined" === typeof v.eventPhase ? 2 : v.eventPhase,
            aa = v.stopPropagation || jb,
            H = v.stopImmediatePropagation || jb,
            na = v.preventDefault || jb,
            R = v.initEvent || jb,
            ra = Oa(v);
        try {
            var za = Ka(ra, v);
            Sa(za, "target", function() {
                return F
            });
            Sa(za, "currentTarget", function() {
                return F
            });
            Sa(za, "srcElement", function() {
                return F
            });
            Sa(za, "eventPhase", function() {
                return N
            });
            Sa(za, "timeStamp", function() {
                return D
            });
            Sa(za, "stopPropagation", function() {
                return aa
            });
            Sa(za, "stopImmediatePropagation", function() {
                return H
            });
            Sa(za, "preventDefault", function() {
                return na
            });
            Sa(za, "initEvent", function() {
                return R
            });
            return za
        } catch ($a) {}
        return {
            type: v.type,
            target: F,
            currentTarget: F,
            srcElement: F,
            eventPhase: N,
            bubbles: v.bubbles || !1,
            cancelable: v.cancelable || !1,
            timeStamp: D,
            stopPropagation: aa,
            stopImmediatePropagation: H,
            preventDefault: na,
            initEvent: R
        }
    }

    function Ka(v, F) {
        try {
            var D = new ub[v](F.type, F);
            "ProgressEvent" === v && Bb(D, F);
            return D
        } catch (N) {
            return D = document.createEvent(v), "ProgressEvent" === v ? D.initProgressEvent(F.type, F.bubbles, F.cancelable, F.lengthComputable, F.loaded, F.total) : D.initEvent(F.type, F.bubbles || !1, F.cancelable || !1), D
        }
    }

    function Bb(v, F) {
        Sa(v, "total", function() {
            return F.total
        });
        Sa(v, "loaded", function() {
            return F.loaded
        })
    }

    function Ea(v, F) {
        var D, N, aa = F.Z,
            H = v.status;
        try {
            var na = Za;
            if (na.gEMD && na.iRHCA && na.iRHCA()) {
                var R = kb(v.getAllResponseHeaders());
                oa.dT_.disE((D = {}, D.kind = "HTTP_RESPONSE", D.detail = (N = {}, N.a = aa, N.h = R, N), D))
            }
        } catch (ra) {}
        200 !== H && oa.dT_.mx() && (0 === H ? oa.dT_.st(function() {
            oa.dT_.mxc(aa)
        }, 0) : oa.dT_.mxf(H, v.statusText, aa));
        oa.dT_.lx(aa, void 0, "x");
        F.Z = 0
    }

    function ba(v, F) {
        try {
            var D = Object.getPrototypeOf(v),
                N = Object.getPrototypeOf(v.dtProps.G);
            N || (N = Xa.prototype);
            return D && N && !fc.has(D[F]) ? D[F] : null
        } catch (aa) {
            return null
        }
    }

    function qa(v) {
        return oa.dT_.iIO(v, ["dtProps"])
    }

    function eb(v) {
        v.UNSENT = 0;
        v.OPENED = 1;
        v.HEADERS_RECEIVED = 2;
        v.LOADING = 3;
        v.DONE = 4
    }

    function va(v) {
        "upload" === v ? Object.defineProperty(ub.XMLHttpRequest.prototype, "upload", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                if (!this.dtProps.vb) return Xa.prototype.upload;
                this.dtProps.upload || (this.dtProps.upload = new ec(this));
                return this.dtProps.upload
            }
        }) : Object.defineProperty(ub.XMLHttpRequest.prototype, v, {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return this.dtProps.vb ? 0 <= Mc.indexOf(v) ? this.dtProps.G[v] :
                    this.dtProps[v] : Xa.prototype[v]
            },
            set: function(F) {
                this.dtProps.vb ? this.dtProps[v] = F : Xa.prototype[v] = F
            }
        })
    }

    function U(v, F) {
        var D = ub.XMLHttpRequest.prototype[v];
        if (F || oa.dT_.iNF(D)) ub.XMLHttpRequest.prototype[v] = function(N, aa) {
            function H() {
                if (qa(this)) {
                    "open" !== N || this.dtProps.url || (this.dtProps.url = arguments[1] + "");
                    this.dtProps.G.withCredentials !== this.dtProps.withCredentials && (this.dtProps.G.withCredentials = this.dtProps.withCredentials);
                    var na = this.dtProps.G
                } else na = this;
                return Gb.XMLHttpRequestCallback(aa,
                    na, arguments)
            }
            fc.set(H, !0);
            return H
        }(v, Xa.prototype[v])
    }

    function Y() {
        Xa = ub.XMLHttpRequest;
        tc = Za.ct || clearTimeout;
        ub.XMLHttpRequest = pa;
        lc = db(Xa, Rb);
        var v = Object,
            F = v.create,
            D = Xa.prototype;
        var N = Xa.prototype;
        if (Object.getOwnPropertyDescriptors) N = Object.getOwnPropertyDescriptors(N);
        else {
            for (var aa = {}, H = 0, na = Object.getOwnPropertyNames(N); H < na.length; H++) {
                var R = na[H],
                    ra = Object.getOwnPropertyDescriptor(N, R);
                ra && (aa[R] = ra)
            }
            N = aa
        }
        pa.prototype = F.call(v, D, N);
        pa.prototype.dtProps = {
            vb: !1
        };
        pa.prototype.dtProps.vb = !1;
        eb(pa);
        eb(pa.prototype);
        nb(Xa.prototype);
        for (var za in Xa.prototype)
            if (-1 === Hc.indexOf(za) || -1 !== Rb.indexOf(za)) try {
                -1 !== Rb.indexOf(za) ? U(za, !0) : -1 !== mb.indexOf(za) ? va(za) : ub.XMLHttpRequest.prototype[za] = Xa.prototype[za]
            } catch (vb) {
                va(za)
            }
        for (var $a in Xa)
            if (!($a in Xa.prototype)) try {
                ub.XMLHttpRequest[$a] = Xa[$a]
            } catch (vb) {}
        try {
            Na()
        } catch (vb) {}
    }

    function Na() {
        if (!oa.dT_.bcv("peti")) {
            if (ub.EventTarget) var v = EventTarget.prototype;
            v && v.addEventListener || !ub.XMLHttpRequestEventTarget || (v = Object.getPrototypeOf(ub.XMLHttpRequestEventTarget.prototype));
            v && v.addEventListener || (v = XMLHttpRequest.prototype);
            if (v && v.addEventListener) {
                var F = v.addEventListener;
                v.addEventListener = function(aa, H, na) {
                    if (qa(this)) this.dtProps.Ld(aa, H, na);
                    else return Gb.AELWrapper(F, this, arguments)
                };
                var D = v.removeEventListener;
                v.removeEventListener = function(aa, H, na) {
                    if (qa(this)) this.dtProps.We(aa, H, na);
                    else return Gb.RELWrapper(D, this, arguments)
                };
                var N = v.dispatchEvent;
                v.dispatchEvent = function(aa) {
                    return qa(this) ? this.dtProps.Gc(aa) : Gb.dispatchWrapper(N, this, arguments)
                }
            }
        }
    }

    function La(v,
        F) {
        return new Ga(v, F)
    }

    function ea(v) {
        return "string" === typeof v
    }

    function S(v) {
        var F, D;
        v.Wc || (oa.dT_.lx(v.D, void 0, "x"), oa.dT_.disE((F = {}, F.kind = "REQUEST_COMPLETED", F.detail = (D = {}, D.i = "xmlhttprequest", D.x = v.url, D.m = v.method, D.c = v.target.status, D.s = v.target.statusText, D.a = v.Bc, D.e = oa.dT_.nw(), D.r = oa.dT_.gRT(v.url, "xmlhttprequest", v.requestStart, oa.dT_.nw()) || void 0, D.q = v.requestStart, D), F)), v.Wc = !0)
    }

    function P(v) {
        var F = v.D,
            D = v.url;
        return Za.aWF(v.va, v.context, v.ta, void 0 === F ? 0 : F, void 0 === D ? "" : D, "x")
    }

    function ma(v, F, D) {
        return function() {
            for (var N = [], aa = 0; aa < arguments.length; aa++) N[aa] = arguments[aa];
            aa = v.D;
            var H = v.url;
            try {
                if (v.Bc = oa.dT_.nw(), oa.dT_.ec(aa), "function" === typeof F) return P({
                    va: F,
                    context: D,
                    ta: N,
                    D: aa,
                    url: H
                })
            } finally {
                oa.dT_.lc(aa), S(v)
            }
        }
    }

    function Ja(v, F, D, N) {
        return function() {
            for (var aa = [], H = 0; H < arguments.length; H++) aa[H] = arguments[H];
            try {
                oa.dT_.ec(v.D);
                var na = aa[0],
                    R = Oa(na),
                    ra = new ub[R](na.type, na);
                O(na, N, ra);
                aa[0] = ra;
                if ("function" === typeof F) return P({
                    va: F,
                    context: na.target,
                    ta: aa,
                    D: v.D,
                    url: v.url
                })
            } finally {
                oa.dT_.lc(v.D)
            }
        }
    }

    function O(v, F, D) {
        F = ca(v, "target", F);
        Object.defineProperties(D, {
            target: F,
            currentTarget: F,
            srcElement: F,
            stopPropagation: ca(v, "stopPropagation", function() {
                for (var N = [], aa = 0; aa < arguments.length; aa++) N[aa] = arguments[aa];
                Event.prototype.stopPropagation.apply(v, N);
                return Event.prototype.stopPropagation.apply(D, N)
            }),
            stopImmediatePropagation: ca(v, "stopImmediatePropagation", function() {
                for (var N = [], aa = 0; aa < arguments.length; aa++) N[aa] = arguments[aa];
                Event.prototype.stopImmediatePropagation.apply(v,
                    N);
                return Event.prototype.stopImmediatePropagation.apply(D, N)
            }),
            preventDefault: ca(v, "preventDefault", function() {
                for (var N = [], aa = 0; aa < arguments.length; aa++) N[aa] = arguments[aa];
                Event.prototype.preventDefault.apply(v, N);
                return Event.prototype.preventDefault.apply(D, N)
            }),
            eventPhase: ca(v, "eventPhase", "undefined" === typeof v.eventPhase ? 2 : void 0),
            timeStamp: ca(v, "timeStamp", v.timeStamp || oa.dT_.nw()),
            initEvent: ca(v, "initEvent")
        })
    }

    function ca(v, F, D) {
        return {
            get: function() {
                return D || v[F]
            },
            enumerable: !0
        }
    }

    function I(v,
        F, D) {
        return function() {
            for (var N, aa, H = [], na = 0; na < arguments.length; na++) H[na] = arguments[na];
            try {
                if (na = Za, na.gEMD && na.iRHCA && na.iRHCA() && D.readyState === D.HEADERS_RECEIVED) {
                    var R = kb(D.getAllResponseHeaders());
                    oa.dT_.disE((N = {}, N.kind = "HTTP_RESPONSE", N.detail = (aa = {}, aa.a = v.D, aa.h = R, aa), N))
                }
            } catch (ra) {}
            try {
                if (v.Bc = oa.dT_.nw(), oa.dT_.ec(v.D), D.readyState === D.DONE && oa.dT_.mx() && 200 !== D.status && (0 === D.status ? oa.dT_.st(oa.dT_.mxc.bind(null, v.D), 0) : oa.dT_.mxf(D.status, D.statusText, v.D)), "function" === typeof F) return P({
                    va: F,
                    context: D,
                    ta: H,
                    D: v.D,
                    url: v.url
                })
            } finally {
                oa.dT_.lc(v.D), D.readyState === D.DONE && S(v)
            }
        }
    }

    function J(v, F, D) {
        "upload" === F && oa.dT_.mx() && !D.qe && (v.upload.addEventListener("error", function() {
            oa.dT_.mxg("Upload failure", D.D)
        }), D.qe = !0);
        return D.Ab.has(F) ? D.Ab.get(F) : Reflect.get(v, F)
    }

    function fa(v, F, D) {
        try {
            EventTarget.prototype.addEventListener.call(v, F, D)
        } catch (N) {
            v.addEventListener(F, D)
        }
    }

    function Z(v) {
        var F = {
            method: "",
            Bc: 0,
            requestStart: 0,
            wd: new WeakMap,
            D: 0,
            async: !0,
            Wc: !1,
            url: "",
            target: v,
            Yi: !1,
            qe: !1,
            Ab: new Map,
            toString: function() {
                return "[Custom DTProperty Object]"
            },
            toJSON: function() {
                return "[Custom DTProperty Object]"
            }
        };
        v.dtProps = F;
        fa(v, "readystatechange", I(F, function() {}, v));
        oa.dT_.mx() && (fa(v, "error", function() {
            return oa.dT_.mxf(v.status, v.statusText, F.D)
        }), fa(v, "abort", function() {
            return oa.dT_.mxc(F.D)
        }), fa(v, "timeout", function() {
            return oa.dT_.mxt(F.D)
        }));
        return La(v, {
            get: function(D, N) {
                return J(D, N, F)
            },
            set: function(D, N, aa, H) {
                try {
                    var na = aa;
                    switch (N) {
                        case "onabort":
                        case "onerror":
                        case "ontimeout":
                            na = ma(F,
                                aa, D);
                            F.Ab.set(N, aa);
                            break;
                        case "onloadstart":
                        case "onprogress":
                        case "onload":
                        case "onloadend":
                            na = Ja(F, aa, D, H);
                            F.Ab.set(N, aa);
                            break;
                        case "onreadystatechange":
                            na = I(F, aa, D), F.Ab.set(N, aa)
                    }
                    var R = Reflect.set(D, N, na)
                } catch (ra) {
                    R = !1
                }
                return R
            }
        })
    }

    function Aa(v, F) {
        try {
            if ("string" === typeof F && "function" === typeof v[F]) {
                var D = oa.dT_.iNF(v[F]);
                v[F] = La(v[F], {
                    apply: bb.bind(null, F, D),
                    get: function(N, aa, H) {
                        return "dT_proxy" === aa ? !0 : Reflect.get(N, aa, H)
                    }
                })
            }
        } catch (N) {}
    }

    function W(v, F) {
        nb(F);
        v = oa.dT_.aFr(v, lb.bind(null,
            F));
        oa.dT_.fE(v, Aa.bind(null, F))
    }

    function Ca(v, F, D, N, aa) {
        var H, na;
        v.requestStart = oa.dT_.nw();
        if (!v.D) {
            v.D = oa.dT_.ex("x", void 0, v.url, !1, F);
            oa.dT_.disE((H = {}, H.kind = "REQUEST_STARTED", H.detail = (na = {}, na.i = "xmlhttprequest", na.x = v.url, na), H));
            var R = oa.dT_.sch({
                headers: {}
            }, v.url, v.D);
            H = oa.dT_.aFr(Reflect.ownKeys(R.headers), ea);
            oa.dT_.fE(H, function(ra) {
                D.setRequestHeader(ra, R.headers[ra])
            })
        }
        try {
            return P({
                va: F,
                context: N,
                ta: aa,
                D: v.D,
                url: v.url
            })
        } finally {
            v.async || S(v)
        }
    }

    function bb(v, F, D, N, aa) {
        if (!oa.dT_.iIO(N,
                22)) return P({
            va: D,
            context: N,
            ta: aa
        });
        var H = N.dtProps,
            na = N;
        H && (F || lc) && (na = H.target);
        if (!H) return P({
            va: D,
            context: na,
            ta: aa
        });
        switch ((F ? D.name : v) || v) {
            case "addEventListener":
                "function" === typeof aa[1] && (v = aa[1], (F = H.wd.get(v)) ? aa[1] = F : (N = Ja(H, v, na, N), H.wd.set(v, N), aa[1] = N));
                break;
            case "removeEventListener":
                (N = H.wd.get(aa[1])) && (aa[1] = N);
                break;
            case "open":
                return H.D = 0, H.Wc = !1, H.method = aa[0], H.url = aa[1], H.async = !0 === aa[2] || void 0 === aa[2], P({
                    va: D,
                    context: na,
                    ta: aa
                });
            case "send":
                return Ca(H, D, N, na, aa);
            case "abort":
                S(H)
        }
        return P({
            va: D,
            context: na,
            ta: aa,
            D: H.D,
            url: H.url
        })
    }

    function lb(v, F) {
        try {
            var D = v[F];
            if ("function" !== typeof D || D.dT_proxy) return !1
        } catch (N) {
            return !1
        }
        return !0
    }

    function Ab() {
        lc = db(ub.XMLHttpRequest, Rb) || db(ub.EventTarget, Hc);
        Ga = ub.Proxy;
        var v = ub.XMLHttpRequest.prototype,
            F = EventTarget.prototype;
        ub.XMLHttpRequest = La(ub.XMLHttpRequest, {
            construct: function(D, N) {
                W(Rb, v);
                W(Hc, F);
                return Z(Reflect.construct(D, N))
            }
        });
        W(Rb, v);
        v.constructor = ub.XMLHttpRequest;
        W(Hc, F)
    }
    this.dT_ && dT_.prm && dT_.prm();
    var oa = "undefined" !== typeof window ?
        window : self,
        ub = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        kc = "cancelBubble defaultPrevented eventPhase isTrusted lengthComputable loaded position returnValue timeStamp total totalSize type".split(" "),
        Gc = "onabort onerror onload onloadend onloadstart onprogress ontimeout".split(" "),
        Mc = "responseText response status statusText responseBody responseStream responseURL responseXML responseType".split(" "),
        mb = Ia(Ia(Ia([], Mc, !0), Gc, !0), ["onreadystatechange", "upload",
            "readyState"
        ], !1),
        Rb = "open send getAllResponseHeaders getResponseHeader setRequestHeader overrideMimeType abort sendAsBinary setAttributionReporting setPrivateToken".split(" "),
        Hc = ["addEventListener", "removeEventListener", "dispatchEvent"],
        oc = Ia(Ia(Ia([], Rb, !0), mb, !0), Hc, !0),
        lc = !1,
        Vb = ["addEventListener", "removeEventListener"],
        tb, tc, Xa, fc = new WeakMap,
        Gb = (tb = {}, tb.handleEventCallback = function(v, F, D) {
            return Za.aWF(v, F, D)
        }, tb.callOpen = function(v, F, D) {
            return Za.aWF(v, F, D)
        }, tb.send = function(v, F, D) {
            return Za.aWF(v,
                F, D)
        }, tb.getAllResponseHeaders = function(v, F, D) {
            return Za.aWF(v, F, D)
        }, tb.getResponseHeader = function(v, F, D) {
            return Za.aWF(v, F, D)
        }, tb.setRequestHeader = function(v, F, D) {
            return Za.aWF(v, F, D)
        }, tb.overrideMimeType = function(v, F, D) {
            return Za.aWF(v, F, D)
        }, tb.RELWrapper = function(v, F, D) {
            return Za.aWF(v, F, D)
        }, tb.AELWrapper = function(v, F, D) {
            return Za.aWF(v, F, D)
        }, tb.dispatchWrapper = function(v, F, D) {
            return Za.aWF(v, F, D)
        }, tb.onreadystatechangeCallback = function(v, F, D) {
            return Za.aWF(v, F, D)
        }, tb.dispatchXHRCallback = function(v,
            F, D) {
            return Za.aWF(v, F, D)
        }, tb.XMLHttpRequestCallback = function(v, F, D) {
            return Za.aWF(v, F, D)
        }, tb.preventDefault = function(v, F, D) {
            return Za.aWF(v, F, D)
        }, tb.stopImmediatePropagation = function(v, F, D) {
            return Za.aWF(v, F, D)
        }, tb),
        ec = function() {
            function v(F) {
                var D = this;
                if (D.constructor) {
                    var N = v;
                    Object.defineProperty(D, "constructor", {
                        get: function() {
                            return N
                        },
                        set: function(na) {
                            N = na
                        }
                    })
                }
                D.dtProps = {
                    ra: [],
                    Pe: F.dtProps.G.upload,
                    Te: F,
                    Ub: !1
                };
                var aa = D.dtProps;
                F = 0;
                for (var H = Gc; F < H.length; F++)(function(na) {
                    Object.defineProperty(D,
                        na, {
                            enumerable: !0,
                            get: function() {
                                return aa[na]
                            },
                            set: function(R) {
                                aa[na] = R;
                                aa.Ub || (aa.Ub = !0, Wa(D, aa.Pe, aa.Te))
                            }
                        })
                })(H[F]);
                D.addEventListener = function(na, R, ra) {
                    if (R) {
                        for (var za = aa.ra, $a = 0; $a < za.length; $a++) {
                            var vb = za[$a];
                            if (vb[0] === na && vb[1] === R && vb[2] === ra) return
                        }
                        za.push([na, R, !!ra]);
                        aa.Ub || (aa.Ub = !0, Wa(D, aa.Pe, aa.Te))
                    }
                };
                D.removeEventListener = function(na, R, ra) {
                    for (var za, $a = aa.ra, vb = 0; vb < $a.length; vb++)
                        if (za = $a[vb], za[0] === na && za[1] === R && za[2] === ra) {
                            $a.splice(vb, 1);
                            break
                        }
                };
                D.dispatchEvent = function(na) {
                    var R =
                        aa.ra,
                        ra = !1,
                        za = !1;
                    if (na.cancelable && na.preventDefault) {
                        var $a = na.preventDefault;
                        na.preventDefault = function() {
                            ra = !0;
                            return Gb.preventDefault($a, this, arguments)
                        }
                    }
                    if (na.stopImmediatePropagation) {
                        var vb = na.stopImmediatePropagation;
                        na.stopImmediatePropagation = function() {
                            za = !0;
                            return Gb.stopImmediatePropagation(vb, this, arguments)
                        }
                    }
                    for (var Wb = 0; Wb < R.length; Wb++) {
                        var qb = R[Wb];
                        za || qb[0] !== na.type || qb[2] || ("object" === typeof qb[1] && qb[1].handleEvent ? Gb.dispatchXHRCallback(qb[1].handleEvent, qb[1], [na]) : Gb.dispatchXHRCallback(qb[1],
                            D, [na]))
                    }
                    return !ra
                }
            }
            v.prototype.toString = function() {
                return "[XMLHttpRequestUpload]"
            };
            return v
        }(),
        C = {
            readyState: 0,
            response: "",
            responseText: "",
            responseType: "",
            responseURL: "",
            status: 0,
            statusText: "",
            timeout: 0,
            withCredentials: !1
        },
        pa = function() {
            function v(F) {
                function D(R) {
                    if (-1 === Mc.indexOf(R) && (!oa.dT_.oHOP(H.G, R) || oa.dT_.oHOP(N, R))) return lc && -1 !== Rb.indexOf(R) && U(R, !1), "continue";
                    if ("upload" === R) Object.defineProperty(N, "upload", {
                        enumerable: !0,
                        get: function() {
                            H.upload || (H.upload = new ec(N));
                            return H.upload
                        }
                    });
                    else {
                        try {
                            H[R] = H.G[R]
                        } catch (ra) {}
                        Object.defineProperty(N, R, {
                            enumerable: !0,
                            get: function() {
                                return 0 <= Mc.indexOf(R) ? H.G[R] : "undefined" === typeof H[R] ? C[R] : H[R]
                            },
                            set: function(ra) {
                                H[R] = ra
                            }
                        })
                    }
                }
                var N = this;
                if (N.constructor) {
                    var aa = v;
                    Object.defineProperty(N, "constructor", {
                        get: function() {
                            return aa
                        },
                        set: function(R) {
                            aa = R
                        }
                    })
                }
                N.dtProps = {
                    requestStart: 0,
                    vb: !0,
                    Z: 0,
                    ra: [],
                    url: "",
                    method: "",
                    aborted: !1,
                    Na: 0,
                    async: void 0,
                    G: arguments.length ? new Xa(F) : new Xa,
                    Vf: !1,
                    Ve: -1,
                    hd: -1,
                    nd: [],
                    we: !1,
                    Sb: function() {
                        N.readyState = H.G.readyState;
                        if (N.readyState !== H.Ve || 100 < oa.dT_.nw() - H.hd) {
                            for (var R = 0, ra = H.nd; R < ra.length; R++) tc(ra[R]);
                            H.nd = [];
                            H.Wg();
                            H.hd = oa.dT_.nw()
                        } else H.nd.push(oa.dT_.st(H.Sb, 100));
                        H.Ve = N.readyState
                    },
                    hg: function(R, ra) {
                        var za, $a;
                        H.G.onreadystatechange !== H.Sb && (H.G.onreadystatechange = H.Sb);
                        H.Z = 0;
                        H.requestStart = oa.dT_.nw();
                        N.__dtFrameworks__ || (H.Z = oa.dT_.ex("x", void 0, H.url, void 0, N, !1, lc));
                        oa.dT_.disE((za = {}, za.kind = "REQUEST_STARTED", za.detail = ($a = {}, $a.i = "xmlhttprequest", $a.x = H.url, $a), za));
                        try {
                            H.async && (H.G.timeout = N.timeout)
                        } catch (Fb) {}
                        try {
                            H.async &&
                                (H.G.responseType = N.responseType)
                        } catch (Fb) {}
                        H.Xg();
                        za = {};
                        za = oa.dT_.sch(za, H.url, H.Z);
                        for (var vb in za.headers) oa.dT_.oHOP(za.headers, vb) && H.G.setRequestHeader(vb, za.headers[vb]);
                        H.G.withCredentials !== N.withCredentials && (H.G.withCredentials = N.withCredentials);
                        vb = !0;
                        try {
                            if (ra && H.G.sendAsBinary) var Wb = H.G.sendAsBinary.apply(H.G, R);
                            else {
                                var qb = ba(N, "send");
                                Wb = qb ? Gb.send(qb, N, R) : H.G.send.apply(H.G, R)
                            }
                            vb = !1
                        } finally {
                            vb && oa.dT_.lx(H.Z, void 0, "x")
                        }!H.async && N.readyState && H.Z && oa.dT_.lx(H.Z, void 0, "x");
                        return Wb
                    },
                    Xg: function() {
                        H.we || (Wa(N, H.G), H.we = !0)
                    },
                    Ld: function(R, ra, za) {
                        void 0 === za && (za = !1);
                        for (var $a = 0, vb = H.ra; $a < vb.length; $a++) {
                            var Wb = vb[$a];
                            if (Wb[0] === R && Wb[1] === ra && Wb[2] === za) return
                        }
                        H.ra.push([R, ra, za])
                    },
                    We: function(R, ra, za) {
                        void 0 === za && (za = !1);
                        for (var $a, vb = 0; vb < H.ra.length; vb++)
                            if ($a = H.ra[vb], $a[0] === R && $a[1] === ra && $a[2] === za) {
                                H.ra.splice(vb, 1);
                                break
                            }
                    },
                    Gc: function(R) {
                        var ra = !1,
                            za = !1;
                        if (R.cancelable && R.preventDefault) {
                            var $a = R.preventDefault;
                            R.preventDefault = function() {
                                ra = !0;
                                return Gb.preventDefault($a,
                                    this, arguments)
                            }
                        }
                        if (R.stopImmediatePropagation) {
                            var vb = R.stopImmediatePropagation;
                            R.stopImmediatePropagation = function() {
                                za = !0;
                                return Gb.stopImmediatePropagation(vb, this, arguments)
                            }
                        }
                        R = ab(R, N);
                        "readystatechange" === R.type && "undefined" !== typeof H.onreadystatechange && H.onreadystatechange && (H.Vf = !0, Gb.onreadystatechangeCallback(H.onreadystatechange, N, [R]));
                        for (var Wb = 0, qb = H.ra; Wb < qb.length; Wb++) {
                            var Fb = qb[Wb];
                            za || Fb[0] !== R.type || Fb[2] || ("object" === typeof Fb[1] && Fb[1].handleEvent ? Gb.dispatchXHRCallback(Fb[1].handleEvent,
                                Fb[1], [R]) : Gb.dispatchXHRCallback(Fb[1], N, [R]))
                        }
                        return !ra
                    },
                    Wg: function() {
                        var R, ra, za = oa.dT_.nw(),
                            $a = H.Z;
                        try {
                            oa.dT_.ec($a, N.readyState), H.Na++, H.Gc({
                                type: "readystatechange",
                                bubbles: !1,
                                cancelable: !1,
                                timeStamp: oa.dT_.nw()
                            })
                        } finally {
                            H.Na--, oa.dT_.lc($a), 4 === N.readyState && (oa.dT_.disE((R = {}, R.kind = "REQUEST_COMPLETED", R.detail = (ra = {}, ra.i = "xmlhttprequest", ra.x = H.url, ra.m = H.method, ra.c = N.status, ra.s = N.statusText, ra.a = za, ra.e = oa.dT_.nw(), ra.r = oa.dT_.gRT(H.url, "xmlhttprequest", H.requestStart, oa.dT_.nw()) ||
                                void 0, ra.q = H.requestStart, ra), R)), $a && Ea(N, H))
                        }
                    },
                    toString: function() {
                        return "[Custom DTProperty Object]"
                    },
                    toJSON: function() {
                        return "[Custom DTProperty Object]"
                    }
                };
                var H = N.dtProps;
                N.readyState = 0;
                eb(N);
                try {
                    Object.defineProperty(H, "responseType", {
                        get: function() {
                            return H.G.responseType
                        },
                        set: function(R) {
                            H.G.responseType = R
                        }
                    })
                } catch (R) {}
                nb(Xa.prototype);
                for (var na in H.G) D(na);
                H.hd = oa.dT_.nw();
                N.onreadystatechange = null;
                "withCredentials" in H.G && (N.withCredentials = H.G.withCredentials);
                N.timeout = 0;
                H.G.overrideMimeType &&
                    (N.overrideMimeType = function(R) {
                        var ra = ba(N, "overrideMimeType");
                        return ra ? Gb.overrideMimeType(ra, N, arguments) : H.G.overrideMimeType(R)
                    });
                oa.dT_.bcv("peti") && H.G.addEventListener && (N.addEventListener = function(R, ra, za) {
                    var $a = ba(N, "addEventListener");
                    H.Ld(R, ra, za);
                    $a ? oa.dT_.iNF($a) || Gb.AELWrapper($a, H.G, arguments) : oa.dT_.iNF(H.G.addEventListener) || H.G.addEventListener(R, ra, za)
                }, N.removeEventListener = function(R, ra, za) {
                    var $a = ba(N, "removeEventListener");
                    H.We(R, ra, za);
                    $a ? oa.dT_.iNF($a) || Gb.RELWrapper($a,
                        H.G, arguments) : oa.dT_.iNF(H.G.removeEventListener) || H.G.removeEventListener(R, ra, za)
                }, N.dispatchEvent = function(R) {
                    var ra = ba(N, "dispatchEvent");
                    if (ra) {
                        if (!oa.dT_.iNF(ra)) return Gb.dispatchWrapper(ra, H.G, arguments)
                    } else if (!oa.dT_.iNF(H.G.dispatchEvent)) return H.G.dispatchEvent(R);
                    return H.Gc(R)
                });
                N.open = function(R, ra, za, $a, vb) {
                    H.aborted = !1;
                    H.method = R;
                    3 > arguments.length && (za = !0);
                    H.async = za;
                    H.G.onreadystatechange = H.Sb;
                    H.url = "" + ra;
                    var Wb = ba(N, "open");
                    Wb ? Gb.callOpen(Wb, N, arguments) : Gb.callOpen(H.G.open,
                        H.G, arguments);
                    N.readyState = H.G.readyState
                };
                N.send = function() {
                    return H.hg(arguments, !1)
                };
                N.abort = function() {
                    for (var R = [], ra = 0; ra < arguments.length; ra++) R[ra] = arguments[ra];
                    0 < N.readyState && (H.aborted = !0);
                    (ra = ba(N, "abort")) ? ra.apply(N, R): H.G.abort();
                    if (H.Z) {
                        for (; 0 < H.Na;) H.Na--, oa.dT_.lc(H.Z);
                        oa.dT_.lx(H.Z, void 0, "x");
                        H.Z = 0
                    }
                };
                N.getAllResponseHeaders = function() {
                    var R = ba(N, "getAllResponseHeaders");
                    return R ? Gb.getAllResponseHeaders(R, N, arguments) : H.G.getAllResponseHeaders()
                };
                N.getResponseHeader = function(R) {
                    var ra =
                        ba(N, "getResponseHeader");
                    return ra ? Gb.getResponseHeader(ra, N, arguments) : H.G.getResponseHeader(R)
                };
                N.setRequestHeader = function(R, ra) {
                    var za = R && R.toLowerCase ? R.toLowerCase() : R;
                    if ("x-dtpc" !== za && "x-dtreferer" !== za && "x-host" !== za && "x-dtc" !== za) return (za = ba(N, "setRequestHeader")) ? Gb.setRequestHeader(za, N, arguments) : H.G.setRequestHeader(R, ra)
                };
                N.toString = function() {
                    return "[XMLHttpRequest]"
                };
                N.toJSON = function() {
                    return H.G
                };
                if (ub.Proxy && oa.dT_.bcv("exp")) return N = new Proxy(N, {
                    set: function(R, ra, za) {
                        R[ra] =
                            za;
                        try {
                            -1 === oc.indexOf(ra) && (R.dtProps.G[ra] = za)
                        } catch ($a) {}
                        return !0
                    }
                })
            }
            return v
        }(),
        Ga, ja, Cb;
    if ((tb = ub.dT_) && "ea" in tb && (null === (Cb = (ja = oa.dT_).smbi) || void 0 === Cb ? 0 : Cb.call(ja, "x"))) {
        var Za = tb;
        "object" === typeof ub.Reflect && "function" === typeof ub.Proxy && oa.dT_.bcv("expw") && !oa.dT_.gBI().edge ? Ab() : Y()
    }
})();