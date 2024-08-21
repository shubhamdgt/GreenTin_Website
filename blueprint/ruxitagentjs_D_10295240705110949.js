(function fn() {
    function jb(u, t) {
        return Wa(u) && "href" === t ? 1 : Ka(u) && "value" === t ? 32 : qc.Od.some(function(A) {
            return A.test(t)
        }) ? 16 : Ra(u) && "value" === t ? 2 === nb(u) ? 16 : 1 : 1
    }

    function nb(u) {
        if (Sa(u) || Sa(u.parentNode)) return 1;
        Xd.has(u) && vd.set(u, vd.get(u) | 8);
        Jd.has(u) && vd.set(u, vd.get(u) | 2);
        kd.has(u) && (qc.nb ? fe.set(u, fe.get(u) | 1) : fe.set(u, fe.get(u) | 4));
        ab(u) && u.hasAttribute("data-dtrum-mask") && (Oa(u) ? fe.set(u, fe.get(u) | 4) : vd.set(u, vd.get(u) | 10));
        if (vd.has(u)) return vd.get(u);
        if (fe.has(u)) return fe.get(u);
        var t =
            u,
            A = !1;
        t.nodeType === Node.TEXT_NODE && (t = t.parentNode, A = !0);
        var Q = Oa(t);
        var la = A;
        void 0 === la && (la = !1);
        la = !Q || la || "OPTION" === t.nodeName ? (Q ? fe : vd).get(la ? t : t.parentNode) : void 0;
        var Ta = void 0;
        Q && db(qc.rb, t) && (Ta |= 4);
        !Q && db(qc.pb, t) && (Ta |= 2);
        !Q && db(qc.ub, t) && (Ta |= 8);
        if (Ta || Q) a: if (Q = void 0 === Q ? !1 : Q, A = void 0 === A ? !1 : A, !Q && Ta) la = Ta;
            else {
                if (Q) {
                    Ta = Ta && !(Ta & 1) || qc.nb ? (!Ta || Ta & 1) && qc.nb || Ta && !(Ta & 1) && !qc.nb ? t.parentNode && Oa(t.parentNode) ? la && !(la & 1) : !0 : !1 : la && !(la & 1);
                    if (A && Ta) {
                        la = la ? la : 2;
                        break a
                    }
                    if (Ta) {
                        la = db(Ec,
                            t) || t instanceof HTMLFormElement && "text" === t.type ? 4 : 8;
                        break a
                    }
                }
                la = 1
            }
        else la = la ? la : 1;
        Oa(u) ? fe.set(u, fe.get(u) | la) : vd.set(u, vd.get(u) | la);
        return la
    }

    function db(u, t) {
        for (var A = 0; A < u.length; A++)
            if (xb.matchesSelector(t, u[A])) return !0;
        return !1
    }

    function kb(u, t) {
        u.forEach(function(A) {
            [].slice.call(document.querySelectorAll(A)).forEach(function(Q) {
                t.has(Q) || t.set(Q, A)
            })
        })
    }

    function Oa(u) {
        return Ra(u) ? !1 : -1 !== Pb.indexOf(u.nodeName)
    }

    function Ra(u) {
        return u && "INPUT" === u.nodeName ? (u = u.getAttribute("type")) ? -1 !==
            Dc.indexOf(u.toLowerCase()) : !1 : !1
    }

    function Wa(u) {
        return ab(u) && "link" === u.nodeName.toLowerCase()
    }

    function Sa(u) {
        return ab(u) && "style" === u.nodeName.toLowerCase()
    }

    function ab(u) {
        return u && u.nodeType && 1 === u.nodeType
    }

    function Ka(u) {
        return u && "INPUT" === u.nodeName && "password" === u.type.toLowerCase()
    }

    function Bb() {
        Bb = Object.assign || function(u) {
            for (var t, A = 1, Q = arguments.length; A < Q; A++) {
                t = arguments[A];
                for (var la in t) Object.prototype.hasOwnProperty.call(t, la) && (u[la] = t[la])
            }
            return u
        };
        return Bb.apply(this, arguments)
    }

    function Ea(u, t, A, Q) {
        if (t && "object" === typeof t || "function" === typeof t)
            for (var la = sa(t), Ta = 0, hb = la.length, pb; Ta < hb; Ta++) pb = la[Ta], ob.call(u, pb) || pb === A || Da(u, pb, {
                get: function(rb) {
                    return t[rb]
                }.bind(null, pb),
                enumerable: !(Q = Ma(t, pb)) || Q.enumerable
            });
        return u
    }

    function ba(u, t, A, Q) {
        function la(Ta) {
            return Ta instanceof A ? Ta : new A(function(hb) {
                hb(Ta)
            })
        }
        return new(A || (A = xa))(function(Ta, hb) {
            function pb(Nb) {
                try {
                    zb(Q.next(Nb))
                } catch (nc) {
                    hb(nc)
                }
            }

            function rb(Nb) {
                try {
                    zb(Q["throw"](Nb))
                } catch (nc) {
                    hb(nc)
                }
            }

            function zb(Nb) {
                Nb.done ?
                    Ta(Nb.value) : la(Nb.value).then(pb, rb)
            }
            zb((Q = Q.apply(u, t || [])).next())
        })
    }

    function qa(u, t) {
        function A(zb) {
            return function(Nb) {
                return Q([zb, Nb])
            }
        }

        function Q(zb) {
            if (Ta) throw new TypeError("Generator is already executing.");
            for (; rb && (rb = 0, zb[0] && (la = 0)), la;) try {
                if (Ta = 1, hb && (pb = zb[0] & 2 ? hb["return"] : zb[0] ? hb["throw"] || ((pb = hb["return"]) && pb.call(hb), 0) : hb.next) && !(pb = pb.call(hb, zb[1])).done) return pb;
                if (hb = 0, pb) zb = [zb[0] & 2, pb.value];
                switch (zb[0]) {
                    case 0:
                    case 1:
                        pb = zb;
                        break;
                    case 4:
                        return la.label++, {
                            value: zb[1],
                            done: !1
                        };
                    case 5:
                        la.label++;
                        hb = zb[1];
                        zb = [0];
                        continue;
                    case 7:
                        zb = la.da.pop();
                        la.J.pop();
                        continue;
                    default:
                        if (!(pb = la.J, pb = 0 < pb.length && pb[pb.length - 1]) && (6 === zb[0] || 2 === zb[0])) {
                            la = 0;
                            continue
                        }
                        if (3 === zb[0] && (!pb || zb[1] > pb[0] && zb[1] < pb[3])) la.label = zb[1];
                        else if (6 === zb[0] && la.label < pb[1]) la.label = pb[1], pb = zb;
                        else if (pb && la.label < pb[2]) la.label = pb[2], la.da.push(zb);
                        else {
                            pb[2] && la.da.pop();
                            la.J.pop();
                            continue
                        }
                }
                zb = t.call(u, la)
            } catch (Nb) {
                zb = [6, Nb], hb = 0
            } finally {
                Ta = pb = 0
            }
            if (zb[0] & 5) throw zb[1];
            return {
                value: zb[0] ?
                    zb[1] : void 0,
                done: !0
            }
        }
        var la = {
                label: 0,
                B: function() {
                    if (pb[0] & 1) throw pb[1];
                    return pb[1]
                },
                J: [],
                da: []
            },
            Ta, hb, pb, rb;
        return rb = {
            next: A(0),
            "throw": A(1),
            "return": A(2)
        }, "function" === typeof Symbol && (rb[Symbol.iterator] = function() {
            return this
        }), rb
    }

    function eb(u, t, A) {
        if (A || 2 === arguments.length)
            for (var Q = 0, la = t.length, Ta; Q < la; Q++) !Ta && Q in t || (Ta || (Ta = Array.prototype.slice.call(t, 0, Q)), Ta[Q] = t[Q]);
        return u.concat(Ta || Array.prototype.slice.call(t))
    }

    function va() {
        return "undefined" !== typeof WorkerGlobalScope && self instanceof
        WorkerGlobalScope
    }

    function U() {
        if (va()) return !1;
        var u = gb.dT_,
            t = null === u || void 0 === u ? void 0 : u.tdto();
        return u !== t
    }

    function Y(u, t) {
        return -1 !== u.indexOf(t)
    }

    function Na(u) {
        var t = Ae;
        Wc.set(t, u);
        setTimeout(function() {
            Wc.delete(t)
        }, 1E3);
        Ae++;
        return new hd({
            H: "pair",
            query: "pair-id",
            result: t
        })
    }

    function La(u) {
        id && ($c.Dd(self, id), id = null);
        return new xa(function(t) {
            id = $c.Vc(self, function(A, Q, la) {
                "pair" === A.H && "pair-id" === A.query && (u.send(new hd({
                    H: "pair",
                    query: "pair-ack",
                    result: A.result
                })), la(), t())
            });
            u.send(new hd({
                H: "pair",
                query: "pair-req"
            }))
        })
    }

    function ea(u) {
        return new xa(function(t) {
            u.wb(function(A) {
                if ("pair" === A.H && Y(["pair-req", "pair-ack"], A.query))
                    if ("pair-ack" === A.query && "number" === typeof A.result)(A = Wc.get(A.result)) && t(A);
                    else
                        for ($c.Cb(self, Na(self)), A = 0; A < gb.frames.length; A++) $c.Cb(gb.frames[A], Na(gb.frames[A]))
            })
        })
    }

    function S(u) {
        return new xa(function(t) {
            u.wb(function(A) {
                "handshake" === A.H && Y(["connect-ack", "connect-pair"], A.query) && t({
                    Pg: "connect-pair" === A.query
                })
            })
        })
    }

    function P(u) {
        return new xa(function(t,
            A) {
            setTimeout(A, u)
        })
    }

    function ma(u) {
        return ba(this, void 0, void 0, function() {
            var t, A, Q;
            return qa(this, function(la) {
                switch (la.label) {
                    case 0:
                        t = new hd({
                            H: "handshake",
                            query: "connect-req"
                        }), A = new $c, $c.Cb(u, t, {
                            transfer: [A.Yg]
                        }), la.label = 1;
                    case 1:
                        return la.J.push([1, 5, , 6]), [4, xa.race([S(A), P(1E3)])];
                    case 2:
                        return (Q = la.B()) && Q.Pg ? [4, xa.race([La(A), P(1E3)])] : [3, 4];
                    case 3:
                        la.B(), la.label = 4;
                    case 4:
                        return [3, 6];
                    case 5:
                        throw la.B(), A.port.close(), Error("timeout");
                    case 6:
                        return [2, A]
                }
            })
        })
    }

    function Ja(u, t) {
        void 0 ===
            t && (t = 15);
        return ba(this, void 0, void 0, function() {
            var A;
            return qa(this, function(Q) {
                switch (Q.label) {
                    case 0:
                        A = 0, Q.label = 1;
                    case 1:
                        if (!(A < t)) return [3, 6];
                        Q.label = 2;
                    case 2:
                        return Q.J.push([2, 4, , 5]), [4, ma(u)];
                    case 3:
                        return [2, Q.B()];
                    case 4:
                        return Q.B(), A++, [3, 5];
                    case 5:
                        return [3, 1];
                    case 6:
                        throw Error("connect handshake failed");
                }
            })
        })
    }

    function O(u, t) {
        $c.Vc(u, function(A, Q) {
            return ba(this, void 0, void 0, function() {
                var la, Ta, hb, pb;
                return qa(this, function(rb) {
                    switch (rb.label) {
                        case 0:
                            if ("handshake" !== A.H || "connect-req" !==
                                A.query) return [2];
                            la = -1 < Object.prototype.toString.call(u).indexOf("Worker") ? u : Q.source;
                            Ta = "undefined" === typeof la;
                            hb = Q.ports[0];
                            pb = new $c(hb);
                            pb.send(new hd({
                                H: "handshake",
                                query: Ta ? "connect-pair" : "connect-ack"
                            }));
                            if (!Ta) return [3, 4];
                            rb.label = 1;
                        case 1:
                            return rb.J.push([1, 3, , 4]), [4, ea(pb)];
                        case 2:
                            return la = rb.B(), [3, 4];
                        case 3:
                            return rb.B(), [3, 4];
                        case 4:
                            return la && t(la, pb), [2]
                    }
                })
            })
        })
    }

    function ca(u) {
        for (var t = [], A = 1; A < arguments.length; A++) t[A - 1] = arguments[A];
        try {
            JSON.stringify(t)
        } catch (Q) {}
    }

    function I(u,
        t, A) {
        return ba(this, void 0, void 0, function() {
            var Q, la, Ta, hb, pb, rb, zb;
            return qa(this, function(Nb) {
                switch (Nb.label) {
                    case 0:
                        if ("undefined" === typeof A.result) return [3, 1];
                        Q = (jd.get(A.id) || {}).resolve;
                        jd.delete(A.id);
                        if (!Q) return ca("Resolver not found for message", A), [2];
                        Q(A.result);
                        return [3, 5];
                    case 1:
                        if (!pd.has(A.H)) return [3, 4];
                        la = pd.get(A.H);
                        Ta = Y(de, la);
                        return la ? [4, la.apply(t, eb([u], A.query, !0))] : [3, 3];
                    case 2:
                        hb = Nb.B(), pb = Ta ? hb : [hb, []], rb = pb[0], zb = pb[1], A.kh(rb), t.send(A, zb), Nb.label = 3;
                    case 3:
                        return [3,
                            5
                        ];
                    case 4:
                        ca("Invalid Protocol Message", A), Nb.label = 5;
                    case 5:
                        return [2]
                }
            })
        })
    }

    function J() {
        zd = new WeakMap;
        jd = new Map;
        pd = new Map;
        Wc = new Map
    }

    function fa(u) {
        u = void 0 === u ? {} : u;
        var t = u.sc,
            A = void 0 === t ? void 0 : t;
        u = u.Lh;
        var Q = void 0 === u ? !1 : u;
        return ba(this, void 0, void 0, function() {
            var la, Ta, hb;
            return qa(this, function(pb) {
                switch (pb.label) {
                    case 0:
                        J();
                        if (!(va() || U() || Q)) return [3, 4];
                        la = U() ? self.parent : self;
                        pb.label = 1;
                    case 1:
                        return pb.J.push([1, 3, , 4]), [4, Ja(la)];
                    case 2:
                        return Ta = pb.B(), zd.set(la, Ta), Ta.wb(function(rb) {
                            I(la,
                                Ta, rb)
                        }), [3, 4];
                    case 3:
                        return hb = pb.B(), [2, {
                            yf: !1,
                            xf: "".concat(hb)
                        }];
                    case 4:
                        return A ? [4, new xa(function(rb) {
                            O(A, function(zb, Nb) {
                                zd.set(zb, Nb);
                                Nb.wb(function(nc) {
                                    I(zb, Nb, nc)
                                });
                                rb()
                            })
                        })] : [3, 6];
                    case 5:
                        pb.B(), pb.label = 6;
                    case 6:
                        return va() || Q || O(self, function(rb, zb) {
                            zd.set(rb, zb);
                            zb.wb(function(Nb) {
                                I(rb, zb, Nb)
                            })
                        }), [2, {
                            yf: !0,
                            xf: ""
                        }]
                }
            })
        })
    }

    function Z(u, t, A) {
        A = (void 0 === A ? {} : A).transfer;
        A = void 0 === A ? !1 : A;
        zd && jd && pd || J();
        pd.set(u, t);
        A && de.push(t)
    }

    function Aa(u, t, A) {
        var Q = new hd({
            H: t,
            query: A
        });
        return new xa(function(la,
            Ta) {
            jd.set(Q.id, {
                resolve: la,
                reject: Ta
            });
            u.send(Q)
        })
    }

    function W(u) {
        for (var t = [], A = 1; A < arguments.length; A++) t[A - 1] = arguments[A];
        zd && jd && pd || J();
        A = zd.get(self);
        return A ? Aa(A, u, t) : (ca("sendQueryToMainThread - Channel not found for query", u, t), xa.resolve())
    }

    function Ca() {
        var u = gb.dT_,
            t = u && u.iIO;
        u = new MessageChannel;
        var A = u.port1,
            Q = u.port2,
            la = new ArrayBuffer(1);
        return new xa(function(Ta) {
            A.onmessage = function(hb) {
                hb = hb.data;
                Ta(t ? t(hb, 26) : hb instanceof ArrayBuffer);
                A.close()
            };
            Q.postMessage(la, [la])
        })
    }

    function bb(u) {
        return Hd.get(u)
    }

    function lb() {
        Hd.clear();
        Rd = [];
        pe.clear()
    }

    function Ab(u) {
        return !!u && Rd.some(function(t) {
            return t.id === "".concat(u, ".1")
        })
    }

    function oa() {
        var u = [];
        pe.forEach(function(t) {
            u.push(t)
        });
        return u
    }

    function ub(u, t) {
        return u.find(t, void 0, !0).values.filter(function(A) {
            return A
        }).map(bb).filter(function(A) {
            return void 0 !== A
        })
    }

    function kc(u, t, A) {
        if (u.Bd() < t.from) return null;
        u = u.find(t, A);
        return 0 === u.values.length ? null : u
    }

    function Gc(u, t, A) {
        if (u.Nd < t.from) return null;
        var Q = [];
        u.attributes.forEach(function(la) {
            if (!(la.gb <
                    t.from)) {
                var Ta = kc(la.values, t, A);
                Ta && Q.push({
                    name: la.name,
                    entries: Ta
                })
            }
        });
        return 0 === Q.length ? null : Q
    }

    function Mc(u, t) {
        u.values.clear(t);
        u.qc.clear(t);
        u.Vb.clear(t);
        u.Cf.clear(t);
        u.ge.clear(t);
        u.attributes.forEach(function(A) {
            A.values.clear(t)
        })
    }

    function mb() {
        return Math.round(Tc + sd.now())
    }

    function Rb(u) {
        var t, A;
        W("perfstart", (t = {}, t.i = "compress", t.t = mb(), t.m = "start", t));
        var Q = new Pd.gi(u);
        t = new Uint8Array(Q.pj());
        Q = Q.Ai(t);
        W("perfend", (A = {}, A.i = "compress", A.t = mb(), A.m = "end", A.d = [
            ["in", u.byteLength],
            ["out", Q]
        ], A.a = !0, A));
        return t.buffer.slice(0, Q)
    }

    function Hc(u, t) {
        u = Rb(t);
        return new Uint8Array(u)
    }

    function oc(u) {
        var t = u + "";
        Bd.forEach(function(A) {
            t = t.replace(A[0], "\x00" + A[1])
        });
        return t
    }

    function lc(u, t) {
        var A, Q;
        void 0 === t && (t = X);
        W("perfstart", (A = {}, A.i = "serialize", A.t = mb(), A.m = "start", A));
        n = n || new Uint8Array((new TextEncoder).encode("\u0001"));
        var la = {
                entries: [],
                size: 0
            },
            Ta = [la];
        u.forEach(function(pb) {
            var rb = {
                ba: "",
                cb: ""
            };
            rb.ba += pb.id + "\u0002";
            rb.ba = pb.name ? rb.ba + (oc(pb.name) + "\u0002") : rb.ba + "\u0002";
            pb.type && "html" !== pb.type && (rb.ba += oc(pb.type));
            pb.values && Vb(pb.values, "\u0005", rb);
            pb.attributes && tb(pb.attributes, rb);
            pb.qc && Vb(pb.qc, "\u0011", rb);
            pb.Vb && Vb(pb.Vb, "\u0012", rb);
            pb = Uint8Array;
            rb = "".concat(rb.ba).concat("\u0001").concat(rb.cb.slice(0, -1));
            rb = (new TextEncoder).encode(rb);
            pb = new pb(rb);
            rb = pb.byteLength + n.byteLength;
            0 < la.size && la.size + rb > t && (la = {
                entries: [],
                size: 0
            }, Ta.push(la));
            la.entries.push(pb);
            la.size += rb
        });
        var hb = 0;
        A = Ta.map(function(pb) {
            var rb = new Uint8Array(pb.size - n.byteLength),
                zb = 0;
            pb.entries.forEach(function(Nb) {
                rb.set(Nb, zb);
                zb += Nb.byteLength;
                zb !== rb.byteLength && (rb.set(n, zb), zb += n.byteLength)
            });
            hb += rb.byteLength;
            return rb
        });
        W("perfend", (Q = {}, Q.i = "serialize", Q.t = mb(), Q.m = "end", Q.d = [
            ["nodes", u.length],
            ["out", hb]
        ], Q.a = !0, Q));
        return A
    }

    function Vb(u, t, A) {
        A.ba += t;
        u.Fd.forEach(function(Q, la) {
            var Ta = u.values[la];
            A.cb += Q;
            "string" === typeof Ta ? "" !== Ta ? A.ba += oc(Ta) : A.ba += "\u0003" : null === Ta || "undefined" === typeof Ta ? A.ba += "\u0014" : (A.ba += "\u0004", A.cb += "\u0002" + Ta);
            la !== u.Fd.length -
                1 && (A.ba += "\u0002");
            A.cb += "\u0002"
        })
    }

    function tb(u, t) {
        t.ba += "\u0006";
        u.forEach(function(A, Q) {
            t.ba += oc(A.name) + "\u0002";
            A.entries.Fd.forEach(function(la, Ta) {
                t.cb += la;
                la = A.entries.values[Ta];
                "string" === typeof la ? "" !== la ? t.ba += oc(la) : t.ba += "\u0003" : null === la || "undefined" === typeof la ? t.ba += "\u0014" : (t.ba += "\u0004", t.cb += "\u0002" + la);
                Ta !== A.entries.Fd.length - 1 && (t.ba += "\u0002");
                t.cb += "\u0002"
            });
            Q !== u.length - 1 && (t.ba += "\u0006")
        })
    }

    function tc(u, t, A) {
        for (var Q = []; u.length;) u.splice(0, u.length).forEach(function(la) {
            Xa(la,
                Q, t,
                function(Ta) {
                    var hb = t(Ta.ge);
                    A(Ta) && u.unshift.apply(u, hb)
                })
        })
    }

    function Xa(u, t, A, Q) {
        u = [
            [u]
        ];
        for (var la = new Set; u.length;) {
            var Ta = u.pop();
            if (Ta) {
                var hb = Ta.shift();
                if (void 0 === hb || Y(t, hb.id)) Ta.length && u.push(Ta);
                else {
                    var pb = la.has(hb) ? [] : A(hb.Vb);
                    pb.length ? (la.add(hb), Ta.push(hb), u.push(Ta), u.push(pb)) : (la.delete(hb), hb.id && t.push(hb.id), Ta.length && u.push(Ta), Q(hb))
                }
            }
        }
    }

    function fc(u) {
        if (!(u.Ti() < y.from)) {
            var t = u.vf >= y.from,
                A = kc(u.values, y, X),
                Q = Gc(u, y, X),
                la = kc(u.qc, y, X),
                Ta = kc(u.Vb, y, X);
            if (t || A ||
                Q || la || Ta) M.push({
                id: u.id,
                type: t ? u.type : "html",
                name: t ? u.name : void 0,
                values: A,
                attributes: Q,
                qc: la,
                Vb: Ta
            }), u.uj()
        }
    }

    function Gb(u) {
        if (u.gb < y.from) return !1;
        fc(u);
        if ("iframe" === u.name) return !1;
        Mc(u, y.Ib);
        return !0
    }

    function ec(u, t) {
        u = bb("1");
        if (!u || u.uf < .9 * X && t - L < 1E3 * ka) return [null, []];
        x = {};
        L = t;
        Rd.forEach(function(A) {
            var Q, la;
            M = [];
            var Ta = (A.Af || 0) + 1;
            y = {
                from: Ta,
                Ib: Math.max(t, Ta)
            };
            W("perfstart", (Q = {}, Q.i = "collect", Q.t = mb(), Q.m = "start", Q));
            tc([A], function(hb) {
                return ub(hb, y)
            }, Gb);
            W("perfend", (la = {}, la.i = "collect",
                la.t = mb(), la.m = "end", la.d = [
                    ["nodes", M.length]
                ], la.a = !0, la));
            A.Af = Math.min(A.gb, t - 1);
            oa().forEach(function(hb) {
                hb.vf < Ta || hb.vf > t || (hb.Af || 0) >= hb.gb || (fc(hb), hb.Af = Math.min(hb.gb, t - 1))
            });
            pa(ja(A), {
                Hb: M,
                from: y.from,
                Ib: y.Ib
            })
        });
        return Ga()
    }

    function C() {
        return ba(this, void 0, void 0, function() {
            return qa(this, function(u) {
                switch (u.label) {
                    case 0:
                        return L = 0, Z("collectorConfig", function(t, A) {
                            X = A.maxSignalLength;
                            ka = A.transmissionDelay;
                            wa = A.isEdgeOrIe;
                            return A
                        }), [4, Ca()];
                    case 1:
                        return Va = u.B(), Z("collect", ec, {
                            transfer: !0
                        }), [2]
                }
            })
        })
    }

    function pa(u, t) {
        var A;
        if (0 !== t.Hb.length) {
            var Q = x[u];
            Q ? (Q.from = Math.min(t.from, Q.from), Q.Ib = Math.max(t.Ib, Q.Ib), (A = Q.Hb).push.apply(A, t.Hb)) : x[u] = t
        }
    }

    function Ga() {
        for (var u = [], t = [], A = 0, Q = Object.values(x); A < Q.length; A++) {
            var la = Q[A],
                Ta = la.from,
                hb = la.Ib,
                pb = 0;
            for (la = lc(la.Hb); pb < la.length; pb++) {
                var rb = Rb(la[pb]);
                Va && u.push(rb);
                t.push({
                    data: Va ? rb : Array.prototype.slice.call(new Uint8Array(rb)),
                    from: Ta,
                    to: hb
                })
            }
        }
        return 0 === t.length ? [null, []] : [t, u]
    }

    function ja(u) {
        if (!u.id) return "root";
        var t = u.id.lastIndexOf(".");
        return -1 === t ? "root" : u.id.slice(0, t)
    }

    function Cb(u, t) {
        void 0 === t && (t = "*");
        return null !== u && "" !== u ? u.replace(/[^- :\u2013\/\u2014._;,()=!?|<>+%\u20ac$\u00a2\u00a5\u00a3\u20bd\u5143\u20a8\u20bf'"@&\u3002\u3001\]\[\n\r\\]/g, t) : u
    }

    function Za(u) {
        try {
            if ("" === u) throw Error("Rule is an empty string");
            xb.matchesSelector(document.documentElement, u);
            return !0
        } catch (t) {
            return console.warn("Masking selector evaluation error: " + t.name, t), !1
        }
    }

    function v(u) {
        u.rb = u.rb.filter(function(t) {
            return Za(t)
        });
        u.pb = u.pb.filter(function(t) {
            return Za(t)
        });
        u.ub = u.ub.filter(function(t) {
            return Za(t)
        });
        return u
    }

    function F(u) {
        var t = {
            nb: !0,
            rb: [],
            pb: [],
            ub: [],
            Od: [],
            version: "1"
        };
        if ("undefined" === typeof u || "" === u) return t;
        var A = decodeURIComponent(u).split(",");
        u = A[0];
        var Q = A[1],
            la = A[2],
            Ta = A[3];
        A = A[4];
        "1" === u && (t.version = u);
        if ("1" === Q || "0" === Q) t.nb = "1" === Q;
        "" !== la && "undefined" !== typeof la && (t.rb = decodeURIComponent(la).split(";"));
        "" !== Ta && "undefined" !== typeof Ta && (t.pb = decodeURIComponent(Ta).split(";").map(function(hb) {
            hb =
                hb.split("&");
            var pb = hb[0];
            "undefined" !== typeof hb[1] && t.ub.push(pb);
            return pb
        }));
        if ("" !== A && "undefined" !== typeof A) try {
            t.Od = decodeURIComponent(A).split(";").map(function(hb) {
                if ("" === hb) throw Error("RegExp rule is an empty string");
                return new RegExp(hb)
            })
        } catch (hb) {
            console.warn("Masking attribute rule error: " + hb.name, hb)
        }
        return v(t)
    }

    function D(u) {
        void 0 === u && (u = []);
        var t = [];
        u.forEach(function(A) {
            var Q = A.split("/");
            A = Q[1];
            Q = Number(Q[0]);
            try {
                if (0 === Q) {
                    var la = A.length - 1,
                        Ta = A;
                    A[la] === Ze.Hd && (Ta = A.substr(0,
                        la));
                    xb.matchesSelector(document.documentElement, Ta)
                } else 1 === Q && new RegExp(A);
                t.push(ag.create(Q, A))
            } catch (hb) {}
        });
        return t
    }

    function N(u, t) {
        u && (t.prototype.toJSON = u)
    }

    function aa(u) {
        var t = new Map,
            A = Date.prototype.toJSON;
        [Number, Boolean, String, Array, Object].forEach(function(Q) {
            t.set(Q, Q.prototype.toJSON);
            delete Q.prototype.toJSON
        });
        Date.prototype.toJSON = Fd;
        try {
            return JSON.stringify(u)
        } finally {
            t.forEach(N), Date.prototype.toJSON = A
        }
    }

    function H(u, t) {
        if ((u = bb(u.I)) && u.id) {
            var A = bb(u.getParent()),
                Q = bb(u.Hh()),
                la = bb(u.Jh());
            la && Q ? (la.bc(Q.id, t), Q.cc(la.id, t)) : la ? la.bc(null, t) : (Q && Q.cc(null, t), A && A.Gh() === u.id && A.jh(Q ? Q.id : null, t));
            u.Ef(null, t);
            u.bc(null, t);
            u.cc(null, t)
        }
    }

    function na(u) {
        var t = [];
        u = bb(u);
        if (!u) return [];
        tc([u], function(A) {
            return (A = bb(A.Ob())) ? [A] : []
        }, function(A) {
            A.id && t.push(A.id);
            return !0
        });
        return t
    }

    function R(u, t, A) {
        u.forEach(function(Q) {
            (Q = bb(Q)) && tc([Q], function(la) {
                if (la = la.Ob())
                    if (la = bb(la)) return [la];
                return []
            }, function(la) {
                la && la.id && t.delete(la.id);
                return !0
            })
        });
        t.forEach(function(Q) {
            if (Q =
                bb(Q)) Q.Ef(null, A), Q.bc(null, A), Q.cc(null, A)
        })
    }

    function ra() {
        var u = [];
        Hd.forEach(function(t, A) {
            u.push(A)
        });
        return u
    }

    function za(u) {
        u = bb(u);
        if (!u) return !1;
        if ("css.create" === u.name || "style" === u.name) return !0;
        if ("#text" !== u.name) return !1;
        u = bb(u.getParent());
        return !u || "style" !== u.name && "css.create" !== u.name ? !1 : !0
    }

    function $a(u) {
        if (1 > u.size) return !1;
        u = u.set[0];
        var t = u.I;
        return u.type === Xc.Jf && void 0 !== t && "1" === t.split(".").pop()
    }

    function vb(u) {
        return (u = u.set[0].I) && -1 !== u.indexOf(".") ? u.slice(0, u.lastIndexOf(".")) :
            ""
    }

    function Wb(u, t, A) {
        ra().forEach(function(Q) {
            "string" === typeof Q && -1 === Q.indexOf("m") && -1 === t.indexOf(Q) && (!u && -1 === Q.indexOf(".") || Q.startsWith(u + ".") && Q.lastIndexOf(".") === u.length) && !za(Q) && H(new Xc(Xc.Ah, {
                I: Q
            }), A)
        })
    }

    function qb(u, t) {
        var A = Kh.decode(t);
        if (A && A.size) {
            var Q = [],
                la = new Set,
                Ta = [],
                hb = $a(A);
            A.forEach(function(pb) {
                var rb = pb.type,
                    zb = pb.I;
                xe[rb] ? (void 0 !== zb && (A.Rd && hb && Ta.push(zb), rb !== Xc.Jf || la.has(zb) || (Q.push(zb), na(zb).forEach(function(Nb) {
                    la.add(Nb)
                }))), xe[rb](pb, A.time)) : ca("Invalid Mutation List operation: " +
                    rb, {
                        Hb: t
                    })
            });
            A.Rd ? hb && Wb(vb(A), Ta, A.time) : R(Q, la, A.time)
        } else ca("Invalid Mutation List query", {
            Hb: t
        })
    }

    function Fb(u, t, A, Q, la) {
        for (var Ta, hb, pb, rb, zb, Nb, nc, xc, Fc, rc, Zc; 64 <= la;) {
            Ta = t[0];
            hb = t[1];
            pb = t[2];
            rb = t[3];
            zb = t[4];
            Nb = t[5];
            nc = t[6];
            xc = t[7];
            for (rc = 0; 16 > rc; rc++) Zc = Q + 4 * rc, u[rc] = (A[Zc] & 255) << 24 | (A[Zc + 1] & 255) << 16 | (A[Zc + 2] & 255) << 8 | A[Zc + 3] & 255;
            for (rc = 16; 64 > rc; rc++) Fc = u[rc - 2], Zc = (Fc >>> 17 | Fc << 15) ^ (Fc >>> 19 | Fc << 13) ^ Fc >>> 10, Fc = u[rc - 15], Fc = (Fc >>> 7 | Fc << 25) ^ (Fc >>> 18 | Fc << 14) ^ Fc >>> 3, u[rc] = (Zc + u[rc - 7] | 0) + (Fc + u[rc -
                16] | 0);
            for (rc = 0; 64 > rc; rc++) Zc = (((zb >>> 6 | zb << 26) ^ (zb >>> 11 | zb << 21) ^ (zb >>> 25 | zb << 7)) + (zb & Nb ^ ~zb & nc) | 0) + (xc + (Lh[rc] + u[rc] | 0) | 0) | 0, Fc = ((Ta >>> 2 | Ta << 30) ^ (Ta >>> 13 | Ta << 19) ^ (Ta >>> 22 | Ta << 10)) + (Ta & hb ^ Ta & pb ^ hb & pb) | 0, xc = nc, nc = Nb, Nb = zb, zb = rb + Zc | 0, rb = pb, pb = hb, hb = Ta, Ta = Zc + Fc | 0;
            t[0] += Ta;
            t[1] += hb;
            t[2] += pb;
            t[3] += rb;
            t[4] += zb;
            t[5] += Nb;
            t[6] += nc;
            t[7] += xc;
            Q += 64;
            la -= 64
        }
        return Q
    }

    function Zb(u, t) {
        try {
            return (new Jf).update(t).digest()
        } catch (A) {
            return null
        }
    }

    function wb(u) {
        return new xa(function(t) {
            setTimeout(t, u)
        })
    }

    function Xb() {
        return ba(this,
            void 0, void 0,
            function() {
                return qa(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return Z("compress", Hc), Z("mutations", qb), Z("reset", lb), Z("SHA-256", Zb), [4, C()];
                        case 1:
                            return u.B(), [2]
                    }
                })
            })
    }

    function Sc() {
        return ba(this, void 0, void 0, function() {
            return qa(this, function(u) {
                switch (u.label) {
                    case 0:
                        return self.postMessage("loaded", void 0), [4, wb(0)];
                    case 1:
                        return u.B(), [4, fa()];
                    case 2:
                        return u.B(), [4, Xb()];
                    case 3:
                        return u.B(), [2]
                }
            })
        })
    }

    function ye() {
        $c.Vc(self, function(u, t, A) {
            return ba(this, void 0, void 0, function() {
                var Q;
                return qa(this, function(la) {
                    switch (la.label) {
                        case 0:
                            if ("worker" !== u.H) return [2];
                            Q = u.query;
                            switch (Q) {
                                case "source-req":
                                    return [3, 1];
                                case "initialize":
                                    return [3, 2];
                                case "initialized":
                                    return [3, 5]
                            }
                            return [3, 6];
                        case 1:
                            return $c.Cb(self, new hd({
                                H: "worker",
                                query: "source",
                                result: "(".concat("undefined" !== typeof fn && fn.toString(), ")();")
                            }), {
                                origin: location.href
                            }), [3, 6];
                        case 2:
                            return [4, fa({
                                Lh: !0
                            })];
                        case 3:
                            return la.B(), [4, Xb()];
                        case 4:
                            la.B(), W("workerLoaded"), la.label = 5;
                        case 5:
                            A(), la.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        })
    }

    function ze() {}

    function Nd(u, t) {
        return function() {
            u.apply(t, arguments)
        }
    }

    function sc(u) {
        if (!(this instanceof sc)) throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof u) throw new TypeError("not a function");
        this.ma = 0;
        this.oc = !1;
        this.qa = void 0;
        this.Ga = [];
        ia(u, this)
    }

    function yc(u, t) {
        for (; 3 === u.ma;) u = u.qa;
        0 === u.ma ? u.Ga.push(t) : (u.oc = !0, sc.Fb(function() {
            var A = 1 === u.ma ? t.Me : t.Ne;
            if (null === A)(1 === u.ma ? Kc : od)(t.promise, u.qa);
            else {
                try {
                    var Q = A(u.qa)
                } catch (la) {
                    od(t.promise, la);
                    return
                }
                Kc(t.promise,
                    Q)
            }
        }))
    }

    function Kc(u, t) {
        try {
            if (t === u) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" === typeof t || "function" === typeof t)) {
                var A = t.then;
                if (t instanceof sc) {
                    u.ma = 3;
                    u.qa = t;
                    ya(u);
                    return
                }
                if ("function" === typeof A) {
                    ia(Nd(A, t), u);
                    return
                }
            }
            u.ma = 1;
            u.qa = t;
            ya(u)
        } catch (Q) {
            od(u, Q)
        }
    }

    function od(u, t) {
        u.ma = 2;
        u.qa = t;
        ya(u)
    }

    function ya(u) {
        2 === u.ma && 0 === u.Ga.length && sc.Fb(function() {
            u.oc || sc.tc(u.qa)
        });
        for (var t = 0, A = u.Ga.length; t < A; t++) yc(u, u.Ga[t]);
        u.Ga = null
    }

    function G(u, t, A) {
        this.Me = "function" ===
            typeof u ? u : null;
        this.Ne = "function" === typeof t ? t : null;
        this.promise = A
    }

    function ia(u, t) {
        var A = !1;
        try {
            u(function(Q) {
                A || (A = !0, Kc(t, Q))
            }, function(Q) {
                A || (A = !0, od(t, Q))
            })
        } catch (Q) {
            A || (A = !0, od(t, Q))
        }
    }
    var xa = self.Promise,
        Ba = Object.create,
        Da = Object.defineProperty,
        Ma = Object.getOwnPropertyDescriptor,
        sa = Object.getOwnPropertyNames,
        Ha = Object.getPrototypeOf,
        ob = Object.prototype.hasOwnProperty,
        Pa = function(u, t) {
            return function() {
                return t || (0, u[sa(u)[0]])((t = {
                    exports: {}
                }).exports, t), t.exports
            }
        }({
            "../../node_modules/.pnpm/snappyjs@0.7.0/node_modules/snappyjs/snappy_compressor.js": function(u) {
                function t(rb,
                    zb) {
                    return 506832829 * rb >>> zb
                }

                function A(rb, zb) {
                    return rb[zb] + (rb[zb + 1] << 8) + (rb[zb + 2] << 16) + (rb[zb + 3] << 24)
                }

                function Q(rb, zb, Nb) {
                    return rb[zb] === rb[Nb] && rb[zb + 1] === rb[Nb + 1] && rb[zb + 2] === rb[Nb + 2] && rb[zb + 3] === rb[Nb + 3]
                }

                function la(rb, zb, Nb, nc, xc) {
                    60 >= Nb ? (nc[xc] = Nb - 1 << 2, xc += 1) : 256 > Nb ? (nc[xc] = 240, nc[xc + 1] = Nb - 1, xc += 2) : (nc[xc] = 244, nc[xc + 1] = Nb - 1 & 255, nc[xc + 2] = Nb - 1 >>> 8, xc += 3);
                    var Fc = xc,
                        rc;
                    for (rc = 0; rc < Nb; rc++) nc[Fc + rc] = rb[zb + rc];
                    return xc + Nb
                }

                function Ta(rb, zb, Nb, nc) {
                    if (12 > nc && 2048 > Nb) return rb[zb] = 1 + (nc - 4 << 2) + (Nb >>>
                        8 << 5), rb[zb + 1] = Nb & 255, zb + 2;
                    rb[zb] = 2 + (nc - 1 << 2);
                    rb[zb + 1] = Nb & 255;
                    rb[zb + 2] = Nb >>> 8;
                    return zb + 3
                }

                function hb(rb) {
                    this.Bh = rb
                }
                var pb = Array(15);
                hb.prototype.pj = function() {
                    var rb = this.Bh.length;
                    return 32 + rb + Math.floor(rb / 6)
                };
                hb.prototype.Ai = function(rb) {
                    var zb = this.Bh,
                        Nb = zb.length,
                        nc = 0,
                        xc;
                    var Fc = Nb;
                    var rc = 0;
                    do rb[rc] = Fc & 127, Fc >>>= 7, 0 < Fc && (rb[rc] += 128), rc += 1; while (0 < Fc);
                    for (xc = rc; nc < Nb;) {
                        Fc = Math.min(Nb - nc, 65536);
                        var Zc = void 0;
                        var Ve, Kd;
                        rc = zb;
                        var uc = nc;
                        var bc = Fc;
                        for (var Kf = rb, Qd = xc, rd = 1; 1 << rd <= bc && 14 >= rd;) rd +=
                            1;
                        --rd;
                        xc = 32 - rd;
                        "undefined" === typeof pb[rd] && (pb[rd] = new Uint16Array(1 << rd));
                        rd = pb[rd];
                        for (Kd = 0; Kd < rd.length; Kd++) rd[Kd] = 0;
                        Kd = uc + bc;
                        var Ee = uc;
                        var Nc = uc;
                        var ce = !0;
                        if (15 <= bc)
                            for (bc = Kd - 15, uc += 1, Ve = t(A(rc, uc), xc); ce;) {
                                var qd = 32;
                                var We = uc;
                                do {
                                    uc = We;
                                    var xd = Ve;
                                    We = qd >>> 5;
                                    qd += 1;
                                    We = uc + We;
                                    if (uc > bc) {
                                        ce = !1;
                                        break
                                    }
                                    Ve = t(A(rc, We), xc);
                                    Zc = Ee + rd[xd];
                                    rd[xd] = uc - Ee
                                } while (!Q(rc, uc, Zc));
                                if (!ce) break;
                                Qd = la(rc, Nc, uc - Nc, Kf, Qd);
                                do {
                                    qd = uc;
                                    for (Nc = 4; uc + Nc < Kd && rc[uc + Nc] === rc[Zc + Nc];) Nc += 1;
                                    uc += Nc;
                                    xd = qd - Zc;
                                    for (qd = Kf; 68 <= Nc;) Qd = Ta(qd,
                                        Qd, xd, 64), Nc -= 64;
                                    64 < Nc && (Qd = Ta(qd, Qd, xd, 60), Nc -= 60);
                                    Qd = Ta(qd, Qd, xd, Nc);
                                    Nc = uc;
                                    if (uc >= bc) {
                                        ce = !1;
                                        break
                                    }
                                    Zc = t(A(rc, uc - 1), xc);
                                    rd[Zc] = uc - 1 - Ee;
                                    qd = t(A(rc, uc), xc);
                                    Zc = Ee + rd[qd];
                                    rd[qd] = uc - Ee
                                } while (Q(rc, uc, Zc));
                                if (!ce) break;
                                uc += 1;
                                Ve = t(A(rc, uc), xc)
                            }
                        Nc < Kd && (Qd = la(rc, Nc, Kd - Nc, Kf, Qd));
                        xc = Qd;
                        nc += Fc
                    }
                    return xc
                };
                u.gi = hb
            }
        }),
        gb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        gc;
    (function(u) {
        u.ADD_NODE = "addNode";
        u.REMOVE_NODE = "removeNode";
        u.UPDATE_ATTRIBUTE = "updateAttribute";
        u.UPDATE_NODE =
            "updateNode";
        u.UPDATE_NODE_VALUE = "updateNodeValue"
    })(gc || (gc = {}));
    var Tb;
    (function(u) {
        u.EVENTS = "srTe";
        u.MUTATIONS = "srBm";
        u.RESOURCES = "srRs"
    })(Tb || (Tb = {}));
    var Lb;
    (Lb || (Lb = {})).SR_IMAGE_NATURAL_DIMENSIONS = "data-dt-natural-dimensions";
    var ac;
    (function(u) {
        u.CSS_STYLESHEET = "css-stylesheet";
        u.MATHML = "http://www.w3.org/1998/Math/MathML";
        u.METADATA = "dynatrace-metadata";
        u.SVG = "http://www.w3.org/2000/svg"
    })(ac || (ac = {}));
    var Oc;
    (function(u) {
        u.IMPORT = "rc.import";
        u.LINK = "rc.link"
    })(Oc || (Oc = {}));
    var cd;
    (function(u) {
        u.OPEN =
            "sdw.o";
        u.SLOT = "sdw.s"
    })(cd || (cd = {}));
    var wc;
    (wc || (wc = {})).DOCTYPE = "doc.doctype";
    var Cc;
    (Cc || (Cc = {})).IFRAME = "tf.iframe";
    var Fe;
    (Fe || (Fe = {})).CREATE = "css.create";
    var oe;
    (oe || (oe = {})).FAILURE = "rl.fail";
    var hd = function() {
            function u(t) {
                var A = t.id;
                A = void 0 === A ? void 0 : A;
                var Q = t.H,
                    la = t.query;
                t = t.result;
                A ? this.id = A : (u.se++, this.id = u.se);
                this.H = Q;
                this.query = la;
                this.result = void 0 === t ? void 0 : t
            }
            u.decode = function(t) {
                try {
                    if ("DT UI Worker Bridge" === t.type) {
                        var A = t.payload;
                        return new u({
                            id: A.id,
                            H: A.handler,
                            query: A.query,
                            result: A.result
                        })
                    }
                } catch (Q) {}
            };
            u.prototype.kh = function(t) {
                "undefined" === typeof t ? this.result = null : this.result = t
            };
            u.prototype.Fa = function() {
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
            u.se = 0;
            return u
        }(),
        $c = function() {
            function u(t) {
                t ? this.port = t : (t = new MessageChannel, this.port = t.port1, this.Yg = t.port2)
            }
            u.Yd = function() {
                u.$b || (u.$b = new Map)
            };
            u.Vc = function(t, A) {
                u.Yd();
                var Q = u.$b.get(t);
                if (Q) Q.push(A);
                else {
                    var la = [A];
                    u.$b.set(t, la);
                    t.addEventListener("message",
                        function(Ta) {
                            var hb = hd.decode(Ta.data);
                            hb && la.forEach(function(pb) {
                                pb(hb, Ta, function() {
                                    u.Dd(t, A)
                                })
                            })
                        })
                }
                return A
            };
            u.Dd = function(t, A) {
                u.Yd();
                t = u.$b.get(t) || [];
                t.splice(t.indexOf(A), 1)
            };
            u.Cb = function(t, A, Q) {
                var la = void 0 === Q ? {} : Q;
                Q = la.origin;
                Q = void 0 === Q ? "*" : Q;
                la = la.transfer;
                la = void 0 === la ? [] : la;
                A = A.Fa();
                va() || -1 < Object.prototype.toString.call(t).indexOf("Worker") ? t.postMessage(A, la) : t.postMessage(A, Q, la)
            };
            u.prototype.wb = function(t) {
                this.port.onmessage = function(A) {
                    (A = hd.decode(A.data)) && t(A)
                }
            };
            u.prototype.send =
                function(t, A) {
                    void 0 === A && (A = []);
                    this.port.postMessage(t.Fa(), A)
                };
            return u
        }(),
        Wc, Ae = 0,
        id, zd, jd, pd, de = [],
        Hd = new Map,
        pe = new Map,
        Rd = [],
        sd = self.performance || Date,
        Tc = Date.now() - sd.now(),
        Pd = function(u, t, A) {
            return A = null != u ? Ba(Ha(u)) : {}, Ea(!t && u && u.Wj ? A : Da(A, "default", {
                value: u,
                enumerable: !0
            }), u)
        }(Pa(), 1),
        Bd = [
            [/\u0000/g, "\x00"],
            [/\u0001/g, "\u0001"],
            [/\u0002/g, "\u0002"],
            [/\u0003/g, "\u0003"],
            [/\u0014/g, "\u0014"],
            [/\u0004/g, "\u0004"],
            [/\u0005/g, "\u0005"],
            [/\u0006/g, "\u0006"],
            [/\u0011/g, "\u0011"],
            [/\u0012/g,
                "\u0012"
            ]
        ],
        n, x = {},
        y, L = 0,
        M, X, ka, wa = !1,
        Va, Qa = function() {
            function u() {
                this.kb = [];
                this.values = []
            }
            u.prototype.add = function(t, A) {
                var Q = this.kb[this.kb.length - 1];
                if (Q > A) return !1;
                Q === A && (this.kb.pop(), this.values.pop());
                if (this.Ob() === t) return !1;
                this.kb.push(A);
                this.values.push(t);
                return !0
            };
            u.prototype.Bd = function() {
                return this.kb.length ? this.kb[this.kb.length - 1] : 0
            };
            u.prototype.Ob = function() {
                return this.values.length ? this.values[this.values.length - 1] : null
            };
            u.prototype.clear = function(t) {
                var A = -1;
                this.kb.forEach(function(Q,
                    la) {
                    Q < t && (A = la)
                });
                0 < A && (this.values = this.values.slice(A), this.kb = this.kb.slice(A))
            };
            u.prototype.find = function(t, A, Q) {
                void 0 === A && (A = 0);
                void 0 === Q && (Q = !1);
                var la = t.from,
                    Ta = t.Ib,
                    hb = {
                        Fd: [],
                        values: []
                    },
                    pb = -1,
                    rb = this.ri();
                this.kb.forEach(function(zb, Nb) {
                    var nc = rb({
                        time: zb,
                        index: Nb,
                        qj: A,
                        from: la,
                        Ib: Ta
                    });
                    nc && (hb.Fd.push(nc.time), hb.values.push(nc.value));
                    Q && zb < la && (pb = Nb)
                }); - 1 !== pb && (hb.Fd.unshift(this.kb[pb] - la), hb.values.unshift(this.values[pb]));
                return hb
            };
            u.prototype.ri = function() {
                var t = this;
                return function(A) {
                    return u.$h(t,
                        A)
                }.bind(this)
            };
            u.hi = function(t, A) {
                return 0 !== A && "string" === typeof t && t.length > A
            };
            u.ci = function(t) {
                return t.from <= t.time && t.time < t.Ib
            };
            u.$h = function(t, A) {
                t = t.values[A.index];
                return u.ci(A) && !u.hi(t, A.qj) ? {
                    time: A.time - A.from,
                    value: t
                } : null
            };
            return u
        }(),
        xb = {
            matchesSelector: function(u, t) {
                return ab(u) ? (u.matches || u.matchesSelector || u.mozMatchesSelector || u.msMatchesSelector || u.oMatchesSelector || u.webkitMatchesSelector).call(u, t) : !1
            }
        },
        Pb = ["DATALIST", "INPUT", "TEXTAREA", "SELECT", "OPTION"],
        Dc = ["submit", "button",
            "reset"
        ],
        Ec = "textarea input[type=text] input:not([type]) input[type=password] input[type=hidden] input[type=checkbox] input[type=radio] input[type=date] input[type=month] input[type=week] input[type=datetime-local] input[type=time] input[type=number] input[type=range] input[type=file] input[type=email] input[type=url] input[type=tel] input[type=search] select option".split(" "),
        qc, kd, Jd, Xd, vd, fe, qe = function() {
            function u(t, A) {
                this.Je = t;
                this.Xd = A
            }
            u.prototype.bd = function(t) {
                var A = this;
                return this.Xd.some(function(Q) {
                    return A.Je.matchesSelector(t,
                        Q.wa())
                })
            };
            u.prototype.ud = function(t) {
                var A = this;
                return this.Xd.some(function(Q) {
                    return A.Je.matchesSelector(t, Q.wa()) && Q.ud()
                })
            };
            return u
        }(),
        Ua = function() {
            function u(t) {
                this.$f = t
            }
            u.prototype.bd = function(t) {
                return this.$f.some(function(A) {
                    return A.wa().test(t)
                })
            };
            return u
        }(),
        Fg = function() {
            function u(t, A, Q, la) {
                void 0 === la && (la = new WeakMap);
                this.Wd = t;
                this.Zf = A;
                this.xa = Q;
                this.Wb = la
            }
            u.prototype.Ua = function(t) {
                if (Sa(t) || Sa(t.parentNode)) return 1;
                var A = this.xa ? 1 : 2,
                    Q = ab(t) && t.hasAttribute("data-dtrum-mask"),
                    la = this.Wd.bd(t);
                Q ? A = 10 : la && (A = this.xa ? this.pg(t) : 1);
                var Ta = this.Wb.get(t.parentNode),
                    hb = Q;
                Ta && (Q = this.sg(Ta, A, Q || la), A = Q.Mg, hb = hb || Q.jd);
                this.fh(t, A, hb);
                return A
            };
            u.prototype.zd = function(t, A) {
                var Q = this.xa ? 1 : 16;
                return -1 !== ["value", "placeholder", "label"].indexOf(A) ? this.qg(t, A) : this.Hg(A) || !this.Gg(A) ? 1 : this.Zf.bd(A) ? this.xa ? 16 : 1 : (t = this.Wb.get(t)) ? (Q = this.xa ? t.Ac : t.wc, 2 === (Q & 2) ? 16 : Q) : Q
            };
            u.prototype.sg = function(t, A, Q) {
                var la = !1;
                t.jd ? (A = 10, la = !0) : (t = this.xa ? t.Ac : t.wc, Q || (A = t), this.xa && (A |= t));
                return {
                    Mg: A,
                    jd: la
                }
            };
            u.prototype.fh = function(t, A, Q) {
                Q = {
                    jd: Q
                };
                var la = this.Wb.get(t);
                this.xa ? Q.Ac = (la && la.Ac) | A : Q.wc = (la && la.wc) | A;
                la && (Q = Bb(Bb({}, la), Q));
                this.Wb.set(t, Q)
            };
            u.prototype.pg = function(t) {
                var A = 2;
                this.Wd.ud(t) && (A |= 8);
                return A
            };
            u.prototype.Gg = function(t) {
                return /^data(-.*)?$/.test(t)
            };
            u.prototype.Hg = function(t) {
                return /^data-dt-(.+)$/.test(t)
            };
            u.prototype.qg = function(t, A) {
                return Ka(t) && "value" === A ? 32 : 2 === (this.Ua(t) & 2) ? 16 : 1
            };
            return u
        }(),
        Of = function() {
            function u(t) {
                this.value = t
            }
            u.Fg = function(t) {
                return t instanceof
                u
            };
            u.prototype.wa = function() {
                return this.value
            };
            return u
        }(),
        Ze = function() {
            function u(t) {
                this.Ee = !1;
                t = t.split(u.Hd);
                var A = t[1];
                this.value = t[0];
                this.Ee = "" === A
            }
            u.Ig = function(t) {
                return t instanceof u
            };
            u.prototype.wa = function() {
                return this.value
            };
            u.prototype.ud = function() {
                return this.Ee
            };
            u.Hd = "&";
            return u
        }(),
        cg = function() {
            function u(t) {
                this.Sg = t
            }
            u.create = function(t) {
                return new u(t)
            };
            u.prototype.wa = function() {
                return this.Sg
            };
            return u
        }(),
        He = function() {
            function u(t) {
                this.Ug = t
            }
            u.create = function(t) {
                return new u(t)
            };
            u.prototype.wa = function() {
                return this.Ug
            };
            return u
        }(),
        Gg = function() {
            function u(t, A, Q) {
                void 0 === t && He.create(2);
                void 0 === A && (A = cg.create(0));
                void 0 === Q && (Q = []);
                this.Rg = A;
                this.rules = Q
            }
            u.prototype.wg = function() {
                return this.rules.filter(Ze.Ig)
            };
            u.prototype.tg = function() {
                return this.rules.filter(Of.Fg)
            };
            u.prototype.addRule = function(t) {
                this.rules.push(t)
            };
            u.prototype.xa = function() {
                return 0 === this.Rg.wa()
            };
            return u
        }(),
        ag = function() {
            function u() {}
            u.create = function(t, A) {
                if (!u.validate(A)) throw Error("Invalid masking rule value: " +
                    A + "!");
                switch (t) {
                    case 0:
                        return new Ze(A);
                    case 1:
                        return new Of(new RegExp(A));
                    default:
                        throw Error("Invalid masking rule type: " + t + "!");
                }
            };
            u.validate = function(t) {
                return t && "" !== t.trim()
            };
            return u
        }();
    (function() {
        function u(t) {
            var A = this;
            this.Zc = [];
            this.Lg = new WeakMap;
            Array.isArray(t) ? t.forEach(function(Q) {
                A.ue(Q)
            }) : this.ue(t)
        }
        u.prototype.ue = function(t) {
            var A;
            t = t.split(",");
            2 === Number(t[0]) ? A = {
                $c: t.slice(0, 4).join(",")
            } : A = {
                Ng: t.slice(0, 5).join(","),
                $c: t.slice(5, 9).join(",")
            };
            if (A.$c) {
                t = A.$c.split(",").map(decodeURIComponent);
                var Q = t[2];
                A = t[3];
                t = He.create(Number(t[1]));
                Q = cg.create(Number(Q));
                A = D(A ? A.split(";") : []);
                A = new Gg(t, Q, A)
            } else A = F(A.Ng);
            A instanceof Gg ? (t = new qe(xb, A.wg()), Q = new Ua(A.tg()), A = new Fg(t, Q, A.xa(), this.Lg), this.Zc.push(A)) : (A = this.ad = A, kd = new WeakMap, Jd = new WeakMap, Xd = new WeakMap, vd = new WeakMap, fe = new WeakMap, qc = A, kb(qc.rb, kd), kb(qc.pb, Jd), kb(qc.ub, Xd))
        };
        u.prototype.Ua = function(t) {
            if (this.ad) return nb(t);
            for (var A, Q = 0, la = this.Zc; Q < la.length; Q++) {
                var Ta = la[Q].Ua(t);
                1 !== Ta && (A |= Ta)
            }
            return A || 1
        };
        u.prototype.zd =
            function(t, A) {
                if (this.ad) return jb(t, A);
                for (var Q, la = 0, Ta = this.Zc; la < Ta.length; la++) {
                    var hb = Ta[la].zd(t, A);
                    1 !== hb && (Q |= hb)
                }
                return Q || 1
            };
        return u
    })();
    var jf = function() {
            function u(t, A) {
                this.name = t.attributeName || "";
                this.values = new Qa;
                this.ia = t.ia;
                this.gb = A;
                this.Rh = t.I;
                this.bf(t.Pa, A)
            }
            u.prototype.wa = function() {
                return this.values.Ob()
            };
            u.prototype.bf = function(t, A) {
                var Q = bb(this.Rh);
                Q && "a" === Q.name && "href" === this.name && (t = "");
                "string" === typeof t && (t = this.oj(t));
                this.wa() !== t && this.values.add(t, A) && (this.gb =
                    Math.max(A, this.gb), Q && (Q.lb(t), Q.lb(A)))
            };
            u.prototype.oj = function(t) {
                var A, Q = bb(this.Rh),
                    la = "value" === this.name && "input" === (null === Q || void 0 === Q ? void 0 : Q.name) && "number" === (null === (A = null === Q || void 0 === Q ? void 0 : Q.getAttribute("type")) || void 0 === A ? void 0 : A.wa()) ? "0" : "*";
                this.ia && this.ia & 32 ? t = t ? t.replace(/./g, "*") : "" : this.ia && this.ia & 16 && (t = Cb(t, la));
                A = Q && Q.ia && Q.ia & 2;
                if (A = (Q && Q.ia && Q.ia & 4 || A) && Q) {
                    var Ta = this.name,
                        hb;
                    A = Y(["input", "textarea"], null === (hb = Q.name) || void 0 === hb ? void 0 : hb.toLowerCase()) &&
                        "value" === Ta
                }
                A && (t = Cb(t, la));
                return t
            };
            return u
        }(),
        Fd = Date.prototype.toJSON,
        Xc = function() {
            function u(t, A) {
                if (!t || !A) throw ca("Invalid parameters for mutation construction", {
                    type: t,
                    Sh: A
                }), Error("Invalid parameters");
                this.type = t;
                this.I = A.I;
                this.nodeName = A.nodeName;
                this.namespaceURI = A.namespaceURI;
                this.nodeValue = A.nodeValue;
                this.attributeName = A.attributeName;
                this.Pa = A.Pa;
                this.ga = A.ga;
                this.ja = A.ja;
                this.na = A.na;
                this.ia = A.ia
            }
            u.decode = function(t) {
                try {
                    var A = JSON.parse(t);
                    return new u(A.type, {
                        I: A.nodeId,
                        nodeName: A.nodeName,
                        namespaceURI: A.namespaceURI,
                        nodeValue: A.nodeValue,
                        attributeName: A.attributeName,
                        Pa: A.attributeValue,
                        ga: A.parentId,
                        ja: A.previousId,
                        na: A.nextId,
                        ia: A.masking
                    })
                } catch (Q) {
                    return null
                }
            };
            u.prototype.Fa = function() {
                return aa({
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
            u.prototype.Gf = function() {};
            u.Ah = "removeNode";
            u.Jf =
                "updateNode";
            return u
        }(),
        Yc = /(,?(\b|\s|\.|#)ng):((?!(a(ctive|ny(-link)*)|checked|d(efault|i(r\(.*\)|sabled))|e(mpty|nabled)|f(irst(-(child|of-type))*|ullscreen|ocus)|hover|in(determinate|valid|-range)|la(ng\(.*\)|(st-(child|of-type)))|l(eft|ink)|n(ot\(.*\)|th-((last-)*(child|of-type)\(.*\)))|o(nly-(child|of-type)|ptional|ut-of-range)|r(e(ad-(only|write)|quired)|ight|oot)|scope|target|v(alid|isited)))[^,\[\]]*\s*.*(,|{).*)/,
        qf = function() {
            function u(t, A) {
                this.id = t.I;
                this.name = t.nodeName;
                this.vf = A;
                if (this.id &&
                    "1" === this.id.split(".").pop() || "css.create" === this.name) this.Af = A - 1, -1 === Rd.indexOf(this) && Rd.push(this);
                this.attributes = new Map;
                this.values = new Qa;
                this.qc = new Qa;
                this.Vb = new Qa;
                this.Cf = new Qa;
                this.ge = new Qa;
                this.gb = this.vf;
                this.Nd = 0;
                this.ia = t.ia;
                this.id && this.name && (this.uf = this.id.toString().length + 1 + this.name.toString().length + 1);
                switch (t.namespaceURI) {
                    case "http://www.w3.org/2000/svg":
                        this.type = "svg";
                        break;
                    case "http://www.w3.org/1998/Math/MathML":
                        this.type = "mathml";
                        break;
                    case "dynatrace-metadata":
                        this.type =
                            "dtmeta";
                        break;
                    case "css-stylesheet":
                        this.type = "cssstylesheet";
                        break;
                    default:
                        this.type = "html"
                }
                this.Ef(t.ga, A);
                this.cc(t.ja, A);
                this.bc(t.na, A);
                "string" === typeof t.nodeValue && this.bf(t.nodeValue, A);
                this.id && t.ga && this.Lc(this.getParent()) && !t.ja && this.Lc(this.getParent()).jh(this.id, A);
                "html" !== this.type && this.lb(this.type)
            }
            u.prototype.Lc = function(t) {
                return bb(t)
            };
            u.prototype.Pf = function(t) {
                if (!this.attributes.has(t.name)) {
                    var A = this.ia && this.ia & 2;
                    if (A = this.ia && this.ia & 4 || A) {
                        A = t.name;
                        var Q, la = this.name ||
                            "";
                        A = "selected" === A && "option" === la.toLowerCase() ? !0 : "checked" === A && "input" === la.toLowerCase() ? Y(["radio", "checkbox"], null === (Q = this.getAttribute("type")) || void 0 === Q ? void 0 : Q.wa()) : !1
                    }
                    if (A) {
                        t = t.gb;
                        var Ta;
                        t = new jf(new Xc("updateAttribute", {
                            attributeName: "disabled",
                            Pa: "",
                            ia: 1,
                            I: this.id
                        }), t);
                        "input" === (null === (Ta = this.name) || void 0 === Ta ? void 0 : Ta.toLowerCase()) ? this.Pf(t): (Ta = this.Lc(this.getParent()), Q = (null === Ta || void 0 === Ta ? void 0 : Ta.name) || "", Ta && "optgroup" === Q.toLowerCase() && (Ta = Ta.Lc(Ta.getParent()),
                            Q = (null === Ta || void 0 === Ta ? void 0 : Ta.name) || ""), Ta && "select" === Q.toLowerCase() && Ta.Pf(t))
                    } else this.attributes.set(t.name, t), this.Ch(t), this.lb(t.name)
                }
            };
            u.prototype.getAttribute = function(t) {
                return this.attributes.get(t)
            };
            u.prototype.vd = function(t) {
                void 0 !== t && (this.gb = Math.max(t, this.gb), (t = this.Lc(this.getParent())) && t.vd(this.gb))
            };
            u.prototype.Ch = function(t) {
                this.Nd = Math.max(this.Nd, t.gb);
                this.vd(this.Nd)
            };
            u.prototype.wa = function() {
                return this.values.Ob()
            };
            u.prototype.bf = function(t, A) {
                this.ia &&
                    this.ia & 2 && (t = Cb(t));
                if ("#text" === this.name && wa) {
                    var Q = this.Lc(this.getParent());
                    if (Q && "style" === Q.name && (!t || -1 !== t.indexOf("ng:")))
                        for (; Yc.test(t);) t = t.replace(Yc, "$1\\:$3")
                }
                this.wa() !== t && this.values.add(t, A) && (this.vd(A), this.lb(t), this.lb(A))
            };
            u.prototype.getParent = function() {
                return this.qc.Ob()
            };
            u.prototype.Ef = function(t, A) {
                this.getParent() !== t && this.qc.add(t, A) && (this.vd(A), this.lb(t), this.lb(A))
            };
            u.prototype.Jh = function() {
                return this.Cf.Ob()
            };
            u.prototype.cc = function(t, A) {
                this.Jh() !== t && this.Cf.add(t,
                    A) && (this.vd(A), this.lb(t), this.lb(A))
            };
            u.prototype.Hh = function() {
                return this.Vb.Ob()
            };
            u.prototype.bc = function(t, A) {
                this.Hh() !== t && this.Vb.add(t, A) && this.vd(A)
            };
            u.prototype.Gh = function() {
                return this.ge.Ob()
            };
            u.prototype.jh = function(t, A) {
                this.Gh() !== t && this.ge.add(t, A) && this.vd(A)
            };
            u.prototype.uj = function() {
                this.uf = 0
            };
            u.prototype.lb = function(t) {
                t = "string" === typeof t ? t : "number" === typeof t ? t.toString() : null === t ? "null" : "";
                this.uf += t.length + 1;
                var A = this.Lc(this.getParent());
                A && A.lb(t)
            };
            u.prototype.Ti =
                function() {
                    return Math.max(this.Nd, this.values.Bd(), this.qc.Bd(), this.ge.Bd(), this.Vb.Bd(), this.Cf.Bd())
                };
            return u
        }(),
        Kh = function() {
            function u(t, A) {
                void 0 === A && (A = !1);
                this.time = t;
                this.Rd = A;
                this.set = [];
                this.size = this.set.length
            }
            u.decode = function(t) {
                try {
                    var A = JSON.parse(t);
                    if (A && "Mutation List" === A.type) {
                        var Q = A.payload,
                            la = new u(Q.time, Q.checkIROnSnapshotFlag);
                        t = 0;
                        for (var Ta = Q.entries; t < Ta.length; t++) {
                            var hb = Xc.decode(Ta[t]);
                            hb && la.add(hb)
                        }
                        return la
                    }
                } catch (pb) {}
            };
            u.jg = function(t, A) {
                var Q;
                void 0 === Q &&
                    (Q = !1);
                var la = new u(A, Q);
                t.forEach(function(Ta) {
                    la.add(Ta)
                });
                return la
            };
            u.prototype.add = function(t) {
                t instanceof Xc && (this.set.push(t), this.size = this.set.length)
            };
            u.prototype.Dh = function(t) {
                this.set = this.set.filter(function(A) {
                    return A instanceof Xc && !t(A)
                });
                this.size = this.set.length
            };
            u.prototype.forEach = function(t) {
                this.set.forEach(function(A) {
                    return A instanceof Xc && t(A)
                })
            };
            u.prototype.Fa = function() {
                return aa({
                    type: "Mutation List",
                    payload: {
                        checkIROnSnapshotFlag: this.Rd,
                        time: this.time,
                        entries: this.set.map(function(t) {
                            return t.Fa()
                        })
                    }
                })
            };
            return u
        }(),
        me, xe = (me = {}, me.addNode = function(u, t) {
            var A = new qf(u, t);
            Hd.set(u.I, A);
            if ("dynatrace-metadata" !== u.namespaceURI || void 0 !== u.ga && !Ab(u.ga)) {
                A = bb(u.ja);
                var Q = bb(u.na);
                A && A.bc(u.I, t);
                Q && Q.cc(u.I, t)
            } else pe.set(A.id, A)
        }, me.updateNode = function(u, t) {
            var A = bb(u.I),
                Q = bb(u.ga),
                la = bb(u.na),
                Ta = bb(u.ja);
            A && A.id && (Q && A.Ef(Q.id, t), Ta ? (Ta.bc(A.id, t), A.cc(u.ja, t)) : Q && Q.jh(A.id, t), la && (la.cc(A.id, t), A.bc(u.na, t)), A.bc(u.na, t), A.cc(u.ja, t))
        }, me.removeNode = H, me.updateNodeValue = function(u, t) {
            var A = bb(u.I);
            A && u.nodeValue && A.bf(u.nodeValue, t)
        }, me.updateAttribute = function(u, t) {
            var A = bb(u.I);
            if (void 0 !== A && u.attributeName) {
                var Q = A.getAttribute(u.attributeName);
                "undefined" === typeof Q ? (Q = new jf(u, t), A.Pf(Q)) : (Q.bf(u.Pa, t), A.Ch(Q))
            }
        }, me),
        Lh = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
            2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
        ]),
        Jf = function() {
            function u() {
                this.Gi = 32;
                this.blockSize = 64;
                this.state = new Int32Array(8);
                this.vh = new Int32Array(64);
                this.buffer = new Uint8Array(128);
                this.tf = this.pc = 0;
                this.finished = !1;
                this.reset()
            }
            u.prototype.reset = function() {
                this.state[0] = 1779033703;
                this.state[1] = 3144134277;
                this.state[2] = 1013904242;
                this.state[3] = 2773480762;
                this.state[4] = 1359893119;
                this.state[5] = 2600822924;
                this.state[6] = 528734635;
                this.state[7] = 1541459225;
                this.tf = this.pc = 0;
                this.finished = !1;
                return this
            };
            u.prototype.update = function(t, A) {
                void 0 === A && (A = t.length);
                if (this.finished) throw Error("SHA256: can't update because hash was finished.");
                var Q = 0;
                this.tf += A;
                if (0 < this.pc) {
                    for (; 64 > this.pc && 0 < A;) this.buffer[this.pc++] = t[Q++], A--;
                    64 === this.pc && (Fb(this.vh, this.state, this.buffer, 0, 64), this.pc = 0)
                }
                64 <= A && (Q = Fb(this.vh, this.state, t, Q, A), A %= 64);
                for (; 0 < A;) this.buffer[this.pc++] = t[Q++], A--;
                return this
            };
            u.prototype.finish = function(t) {
                if (!this.finished) {
                    var A = this.tf,
                        Q = this.pc,
                        la = A / 536870912 | 0,
                        Ta = A << 3;
                    A = 56 > A % 64 ? 64 : 128;
                    this.buffer[Q] = 128;
                    for (Q += 1; Q < A - 8; Q++) this.buffer[Q] = 0;
                    this.buffer[A - 8] = la >>> 24 & 255;
                    this.buffer[A - 7] = la >>> 16 & 255;
                    this.buffer[A -
                        6] = la >>> 8 & 255;
                    this.buffer[A - 5] = la >>> 0 & 255;
                    this.buffer[A - 4] = Ta >>> 24 & 255;
                    this.buffer[A - 3] = Ta >>> 16 & 255;
                    this.buffer[A - 2] = Ta >>> 8 & 255;
                    this.buffer[A - 1] = Ta >>> 0 & 255;
                    Fb(this.vh, this.state, this.buffer, 0, A);
                    this.finished = !0
                }
                for (Q = 0; 8 > Q; Q++) t[4 * Q] = this.state[Q] >>> 24 & 255, t[4 * Q + 1] = this.state[Q] >>> 16 & 255, t[4 * Q + 2] = this.state[Q] >>> 8 & 255, t[4 * Q + 3] = this.state[Q] >>> 0 & 255;
                return this
            };
            u.prototype.digest = function() {
                var t = new Uint8Array(this.Gi);
                this.finish(t);
                return t
            };
            return u
        }(),
        Xg = setTimeout;
    sc.prototype["catch"] = function(u) {
        return this.then(null,
            u)
    };
    sc.prototype.then = function(u, t) {
        var A = new this.constructor(ze);
        yc(this, new G(u, t, A));
        return A
    };
    sc.prototype["finally"] = function(u) {
        var t = this.constructor;
        return this.then(function(A) {
            return t.resolve(u()).then(function() {
                return A
            })
        }, function(A) {
            return t.resolve(u()).then(function() {
                return t.reject(A)
            })
        })
    };
    sc.all = function(u) {
        return new sc(function(t, A) {
            function Q(pb, rb) {
                try {
                    if (rb && ("object" === typeof rb || "function" === typeof rb)) {
                        var zb = rb.then;
                        if ("function" === typeof zb) {
                            zb.call(rb, function(Nb) {
                                Q(pb,
                                    Nb)
                            }, A);
                            return
                        }
                    }
                    la[pb] = rb;
                    0 === --Ta && t(la)
                } catch (Nb) {
                    A(Nb)
                }
            }
            if (!u || "undefined" === typeof u.length) return A(new TypeError("Promise.all accepts an array"));
            var la = Array.prototype.slice.call(u);
            if (0 === la.length) return t([]);
            for (var Ta = la.length, hb = 0; hb < la.length; hb++) Q(hb, la[hb])
        })
    };
    sc.allSettled = function(u) {
        return new this(function(t, A) {
            function Q(hb, pb) {
                if (pb && ("object" === typeof pb || "function" === typeof pb)) {
                    var rb = pb.then;
                    if ("function" === typeof rb) {
                        rb.call(pb, function(zb) {
                            Q(hb, zb)
                        }, function(zb) {
                            la[hb] = {
                                status: "rejected",
                                reason: zb
                            };
                            0 === --Ta && t(la)
                        });
                        return
                    }
                }
                la[hb] = {
                    status: "fulfilled",
                    value: pb
                };
                0 === --Ta && t(la)
            }
            if (!u || "undefined" === typeof u.length) return A(new TypeError(typeof u + " " + u + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var la = Array.prototype.slice.call(u);
            if (0 === la.length) return t([]);
            var Ta = la.length;
            for (A = 0; A < la.length; A++) Q(A, la[A])
        })
    };
    sc.resolve = function(u) {
        return u && "object" === typeof u && u.constructor === sc ? u : new sc(function(t) {
            t(u)
        })
    };
    sc.reject = function(u) {
        return new sc(function(t,
            A) {
            A(u)
        })
    };
    sc.race = function(u) {
        return new sc(function(t, A) {
            if (!u || "undefined" === typeof u.length) return A(new TypeError("Promise.race accepts an array"));
            for (var Q = 0, la = u.length; Q < la; Q++) sc.resolve(u[Q]).then(t, A)
        })
    };
    sc.Fb = "function" === typeof setImmediate && function(u) {
        setImmediate(u)
    } || function(u) {
        Xg(u, 0)
    };
    sc.tc = function(u) {
        "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", u)
    };
    (function() {
        function u() {}
        u.xj = function() {
            var t;
            void 0 === t && (t = sc);
            xa || (xa = t)
        };
        return u
    })().xj();
    (function() {
        return ba(this, void 0, void 0, function() {
            return qa(this, function(u) {
                switch (u.label) {
                    case 0:
                        return va() ? [4, Sc()] : [3, 2];
                    case 1:
                        return u.B(), [3, 3];
                    case 2:
                        ye(), u.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    })()
})();