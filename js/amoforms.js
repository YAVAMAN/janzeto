! function () {
    function e(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    for (var F = e(function (e) {
            var t, r, n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            n ? (t = new Uint8Array(16), e.exports = function () {
                return n(t), t
            }) : (r = new Array(16), e.exports = function () {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
                return r
            })
        }), n = [], t = 0; t < 256; ++t) n[t] = (t + 256).toString(16).substr(1);
    var P = function (e, t) {
            var t = t || 0,
                r = n;
            return [r[e[t++]], r[e[t++]], r[e[t++]], r[e[t++]], "-", r[e[t++]], r[e[t++]], "-", r[e[t++]], r[e[t++]], "-", r[e[t++]], r[e[t++]], "-", r[e[t++]], r[e[t++]], r[e[t++]], r[e[t++]], r[e[t++]], r[e[+t]]].join("")
        },
        i = "amo_social_button_tracking_pages",
        s = "amo_social_button_tracking_hits",
        c = "amo_social_button_tracking_time",
        u = "amo_social_button_tracking_referrer",
        r = "amo_social_button_tracking_uuid",
        o = "amo_social_button_tracking_session_id",
        a = "is_send_follow_link",
        m = !1,
        f = null;

    function d() {
        return document.title ? document.title + " (" + window.location.pathname + ")" : window.location.pathname
    }

    function l() {
        var e = window.sessionStorage.getItem(r);
        return e || (e = function (e, t, r) {
            var n = t && r || 0,
                o = ("string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null), (e = e || {}).random || (e.rng || F)());
            if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
                for (var a = 0; a < 16; ++a) t[n + a] = o[a];
            return t || P(o)
        }(), window.sessionStorage.setItem(r, e)), e
    }

    function p() {
        var e = window.sessionStorage.getItem(o);
        return e || (e = function (e) {
            void 0 === e && (e = 21);
            for (var t = "", r = crypto.getRandomValues(new Uint8Array(e)); e--;) {
                var n = 63 & r[e];
                t += n < 36 ? n.toString(36) : n < 62 ? (n - 26).toString(36).toUpperCase() : n < 63 ? "_" : "-"
            }
            return t
        }(11), window.sessionStorage.setItem(o, e)), e
    }
    var g = "%[a-f0-9]{2}",
        U = new RegExp(g, "gi"),
        H = new RegExp("(" + g + ")+", "gi");

    function X(t) {
        if ("string" != typeof t) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
        try {
            return t = t.replace(/\+/g, " "), decodeURIComponent(t)
        } catch (e) {
            for (var r = t, n = {
                    "%FE%FF": "��",
                    "%FF%FE": "��"
                }, o = H.exec(r); o;) {
                try {
                    n[o[0]] = decodeURIComponent(o[0])
                } catch (e) {
                    var a = function (t) {
                        try {
                            return decodeURIComponent(t)
                        } catch (e) {
                            for (var r = t.match(U), n = 1; n < r.length; n++) r = (t = function e(t, r) {
                                try {
                                    return decodeURIComponent(t.join(""))
                                } catch (e) {}
                                if (1 === t.length) return t;
                                var n = t.slice(0, r = r || 1),
                                    t = t.slice(r);
                                return Array.prototype.concat.call([], e(n), e(t))
                            }(r, n).join("")).match(U);
                            return t
                        }
                    }(o[0]);
                    a !== o[0] && (n[o[0]] = a)
                }
                o = H.exec(r)
            }
            n["%C2"] = "�";
            for (var i = Object.keys(n), s = 0; s < i.length; s++) var c = i[s],
                r = r.replace(new RegExp(c, "g"), n[c]);
            return r
        }
    }

    function B(e, t) {
        if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === t) return [e];
        var r = e.indexOf(t);
        return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
    }

    function W(e) {
        var t = this,
            r = "ru" === e.form.locale ? "ru" : "com",
            n = e.form.protocol,
            o = (this.gso_origin = n + "://gso.amocrm." + r, this.form_origin = n + "://forms.amocrm." + r, this.iframe = e.iframe, this.form = e.form, this.gsoHandlers = {
                pixel_ready: function () {
                    window.amo_forms_params.setMeta = t.setMeta, t._handleMetaQueue()
                }
            }, this.setMeta = function (e) {
                try {
                    t.iframe.contentWindow.postMessage({
                        method: "send_meta",
                        payload: {
                            metaData: e
                        }
                    }, t.form_origin)
                } catch (e) {
                    console.log(e)
                }
            }, this._handleMetaQueue = function () {
                if (window.amo_forms_params.params) {
                    for (var e in window.amo_forms_params.params) t.setMeta(window.amo_forms_params.params[e]);
                    delete window.amo_forms_params.params
                }
            }, AMO_PIXEL_CLIENT.registerHit(), AMO_PIXEL_CLIENT.configure({
                baseURL: this.gso_origin,
                id: this.form.id,
                hash: this.form.hash
            }), AMO_PIXEL_CLIENT.extractTrackingParamsFromUrl()),
            a = this;
        AMO_PIXEL_CLIENT.extractTrackingParamsFromTrackers(function (e) {
            var n = [];
            e.forEach(function (e) {
                0 < e.length && e.forEach(function (e) {
                    e.key && e.value && n.push({
                        field_code: e.key.toUpperCase(),
                        values: [{
                            value: e.value
                        }]
                    })
                })
            }), Object.keys(o).map(function (e, t) {
                var r = o[e];
                n.push({
                    field_code: e.toUpperCase(),
                    values: [{
                        value: r
                    }]
                })
            }), 0 < n.length && a.setMeta({
                lead: {
                    custom_fields_values: n
                }
            })
        }), this.iframe.addEventListener("load", function () {
            try {
                t.iframe.contentWindow.postMessage({
                    method: "onload_iframe",
                    payload: {
                        form: {
                            id: t.form.id,
                            hash: t.form.hash,
                            locale: t.form.locale,
                            protocol: t.form.protocol
                        },
                        session: {
                            uid: AMO_PIXEL_CLIENT.getSessionUid(),
                            link: AMO_PIXEL_CLIENT.getTrackingLink()
                        },
                        internal_metadata: AMO_PIXEL_CLIENT.makeMetadata()
                    }
                }, t.form_origin)
            } catch (e) {
                console.log(e)
            }
        }), window.addEventListener("message", function (e) {
            e.origin === t.gso_origin && e.data && "function" == typeof t.gsoHandlers[e.data] && t.gsoHandlers[e.data](e.data)
        })
    }

    function D(e) {
        function o(e) {
            void 0 === e && (e = "");
            var t = document.getElementById(r);
            t && t.contentWindow.postMessage(JSON.stringify(e), t.src)
        }

        function a(e) {
            function n(e, t) {
                r.push(e), r.length === o.length && t(c)
            }
            var o = Object.keys(c),
                r = [];
            return new x(function (r) {
                o.length ? o.forEach(function (t) {
                    "function" == typeof c[t] ? c[t](e).then(function (e) {
                        c[t] = e = void 0 === e ? {} : e, n(e, r)
                    }, function (e) {
                        return void 0 === e && (e = {}), n(Object.assign({}, e, {
                            rejected: !0
                        }), r)
                    }) : n(c[t], r)
                }) : r(c)
            })
        }
        var i = e.form_server,
            r = e.iframe_id,
            s = {},
            c = {},
            u = null,
            m = function (o) {
                return new x(function (e, t) {
                    var r = document.createElement("script"),
                        n = document.getElementsByTagName("head")[0];
                    r.onreadystatechange = function () {
                        "loaded" !== r.readyState && "complete" !== r.readyState || (r.onreadystatechange = null, u = null, e(o))
                    }, r.onload = function () {
                        u = null, e(o)
                    }, r.onerror = t, r.async = !0, r.src = o, n.appendChild(r)
                })
            },
            f = function (e, t) {
                var r = e.accountHash;
                s[t] && (c[t] = s[t]({
                    accountHash: r,
                    updateButtonTitle: function (e, t) {
                        o({
                            func: "amoforms:widgets:button-title",
                            filename: e,
                            text: t = void 0 === t ? "" : t
                        })
                    }.bind(null, t),
                    payload: e
                }))
            };
        window.addEventListener("message", function (e) {
            var t, r;
            if (e.origin === i) try {
                var n = JSON.parse(e.data);
                switch (n.func) {
                    case "amoforms:widgets:run":
                        t = n.src, r = n.payload, s[t] ? f(r, t) : m(t).then(f.bind(null, r));
                        break;
                    case "amoforms:widgets:results":
                        a(n.request_id).then(function (e) {
                            o({
                                func: "amoforms:widgets:results",
                                results: e
                            })
                        })
                }
            } catch (e) {}
        }, !1), window.amoFormsWidget = function (e) {
            var t = document.currentScript || function () {
                if (u && "interactive" === u.readyState) return u;
                for (var e = document.getElementsByTagName("script"), t = e.length - 1; - 1 < t; --t)
                    if (e[t] && "interactive" === e[t].readyState) {
                        u = e[t];
                        break
                    } return u
            }();
            t && (s[t.src] = e)
        }
    }

    function q(e, t) {
        "number" != typeof (t = t ? parseInt(t) : -1) || isNaN(t) || (A[t] || (A[t] = []), A[t].push(e))
    }
    var J, h, _, y, w, v, b, I, $, E, S = e(function (e, s) {
            function g(e) {
                if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function c(e, t) {
                return t.encode ? t.strict ? encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                }) : encodeURIComponent(e) : e
            }

            function h(e, t) {
                return t.decode ? X(e) : e
            }

            function u(e) {
                var t = e.indexOf("#");
                return -1 !== t ? e.slice(0, t) : e
            }

            function o(e) {
                var t = (e = u(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function _(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
            }

            function a(e, t) {
                g((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                var r = function (n) {
                        var o;
                        switch (n.arrayFormat) {
                            case "index":
                                return function (e, t, r) {
                                    o = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), o ? (void 0 === r[e] && (r[e] = {}), r[e][o[1]] = t) : r[e] = t
                                };
                            case "bracket":
                                return function (e, t, r) {
                                    o = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), o ? void 0 === r[e] ? r[e] = [t] : r[e] = [].concat(r[e], t) : r[e] = t
                                };
                            case "comma":
                            case "separator":
                                return function (e, t, r) {
                                    t = "string" == typeof t && -1 < t.split("").indexOf(n.arrayFormatSeparator) ? t.split(n.arrayFormatSeparator).map(function (e) {
                                        return h(e, n)
                                    }) : null === t ? t : h(t, n), r[e] = t
                                };
                            default:
                                return function (e, t, r) {
                                    void 0 === r[e] ? r[e] = t : r[e] = [].concat(r[e], t)
                                }
                        }
                    }(t),
                    n = Object.create(null);
                if ("string" != typeof e) return n;
                if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
                for (var o = 0, a = e.split("&"); o < a.length; o += 1) {
                    var i = a[o],
                        s = (i = B(t.decode ? i.replace(/\+/g, " ") : i, "="))[0],
                        i = void 0 === (i = i[1]) ? null : ["comma", "separator"].includes(t.arrayFormat) ? i : h(i, t);
                    r(h(s, t), i, n)
                }
                for (var c = 0, u = Object.keys(n); c < u.length; c += 1) {
                    var m = u[c],
                        f = n[m];
                    if ("object" == typeof f && null !== f)
                        for (var d = 0, l = Object.keys(f); d < l.length; d += 1) {
                            var p = l[d];
                            f[p] = _(f[p], t)
                        } else n[m] = _(f, t)
                }
                return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce(function (e, t) {
                    var r = n[t];
                    return Boolean(r) && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort(function (e, t) {
                            return Number(e) - Number(t)
                        }).map(function (e) {
                            return t[e]
                        }) : t
                    }(r) : e[t] = r, e
                }, Object.create(null))
            }
            s.extract = o, s.parse = a, s.stringify = function (r, n) {
                if (!r) return "";
                g((n = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, n)).arrayFormatSeparator);
                for (var o = function (o) {
                        switch (o.arrayFormat) {
                            case "index":
                                return function (n) {
                                    return function (e, t) {
                                        var r = e.length;
                                        return void 0 === t || o.skipNull && null === t || o.skipEmptyString && "" === t ? e : null === t ? e.concat([
                                            [c(n, o), "[", r, "]"].join("")
                                        ]) : e.concat([
                                            [c(n, o), "[", c(r, o), "]=", c(t, o)].join("")
                                        ])
                                    }
                                };
                            case "bracket":
                                return function (r) {
                                    return function (e, t) {
                                        return void 0 === t || o.skipNull && null === t || o.skipEmptyString && "" === t ? e : null === t ? e.concat([
                                            [c(r, o), "[]"].join("")
                                        ]) : e.concat([
                                            [c(r, o), "[]=", c(t, o)].join("")
                                        ])
                                    }
                                };
                            case "comma":
                            case "separator":
                                return function (r) {
                                    return function (e, t) {
                                        return null == t || 0 === t.length ? e : 0 === e.length ? [
                                            [c(r, o), "=", c(t, o)].join("")
                                        ] : [
                                            [e, c(t, o)].join(o.arrayFormatSeparator)
                                        ]
                                    }
                                };
                            default:
                                return function (r) {
                                    return function (e, t) {
                                        return void 0 === t || o.skipNull && null === t || o.skipEmptyString && "" === t ? e : null === t ? e.concat([c(r, o)]) : e.concat([
                                            [c(r, o), "=", c(t, o)].join("")
                                        ])
                                    }
                                }
                        }
                    }(n), e = {}, t = 0, a = Object.keys(r); t < a.length; t += 1) {
                    var i = a[t];
                    n.skipNull && null == r[i] || n.skipEmptyString && "" === r[i] || (e[i] = r[i])
                }
                var s = Object.keys(e);
                return !1 !== n.sort && s.sort(n.sort), s.map(function (e) {
                    var t = r[e];
                    return void 0 === t ? "" : null === t ? c(e, n) : Array.isArray(t) ? t.reduce(o(e), []).join("&") : c(e, n) + "=" + c(t, n)
                }).filter(function (e) {
                    return 0 < e.length
                }).join("&")
            }, s.parseUrl = function (e, t) {
                t = Object.assign({
                    decode: !0
                }, t);
                var r = (n = B(e, "#"))[0],
                    n = n[1];
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: a(o(e), t)
                }, t && t.parseFragmentIdentifier && n ? {
                    fragmentIdentifier: h(n, t)
                } : {})
            }, s.stringifyUrl = function (e, t) {
                t = Object.assign({
                    encode: !0,
                    strict: !0
                }, t);
                var r, n, o = u(e.url).split("?")[0] || "",
                    a = s.extract(e.url),
                    a = s.parse(a, {
                        sort: !1
                    }),
                    a = Object.assign(a, e.query),
                    a = (a = s.stringify(a, t)) && "?" + a,
                    i = (r = "", r = -1 !== (n = (i = e.url).indexOf("#")) ? i.slice(n) : r);
                return "" + o + a + (e.fragmentIdentifier ? "#" + c(e.fragmentIdentifier, t) : i)
            }
        }),
        Q = (S.extract, S.parse, S.stringify, S.parseUrl, S.stringifyUrl, ["from", "openstat_service", "openstat_campaign", "openstat_ad", "openstat_source", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_referrer", "gсlid", "fbclid", "yclid", "referrer"]),
        k = {
            baseURL: ""
        },
        Y = !1,
        O = !1,
        x = (window.AMO_PIXEL_CLIENT || (window.addEventListener("message", function (e) {
            switch (e.data) {
                case "SET_AMO_PIXEL_READY":
                    O = !(Y = !0);
                    break;
                case "IS_AMO_PIXEL_READY?":
                    Y ? e.source.postMessage("AMO_PIXEL_READY", e.origin) : O ? e.source.postMessage("AMO_PIXEL_LOADING", e.origin) : (O = !0, e.source.postMessage("AMO_PIXEL_NOT_READY", e.origin))
            }
        }), window.AMO_PIXEL_CLIENT = {
            getSessionUid: l,
            getShortSessionId: p,
            getTrackingLink: function () {
                if (!window.AMOCRM_NO_TRACKING && !window.sessionStorage.getItem(a)) return window.sessionStorage.setItem(a, "y"), document.location.href
            },
            makeMetadata: function () {
                if (!f) {
                    var t, e;
                    try {
                        t = JSON.parse(window.sessionStorage.getItem(i) || {})
                    } catch (e) {
                        t = {}
                    }
                    e = (parseFloat(window.sessionStorage.getItem(c)) || 0) / 1e3, f = {
                        hits: parseInt(window.sessionStorage.getItem(s), 10) || 0,
                        pages: Object.keys(t),
                        referrer: window.sessionStorage.getItem(u),
                        time: parseInt(e, 10),
                        page: ""
                    }, window.AMOCRM_NO_TRACKING || (f.page = d())
                }
                return f
            },
            registerHit: function () {
                if (!m) {
                    var t, e = window.sessionStorage.getItem(u),
                        r = document.referrer.split("/")[2],
                        n = window.location.hostname,
                        o = parseInt(window.sessionStorage.getItem(s), 10) || 0,
                        a = parseFloat(window.sessionStorage.getItem(c), 10) || 0;
                    l(), p();
                    try {
                        t = JSON.parse(window.sessionStorage.getItem(i) || {})
                    } catch (e) {
                        t = {}
                    }
                    r && r !== e && r !== n && (window.sessionStorage.setItem(u, r), window.sessionStorage.setItem(c, "0"), o = 0, t = {}), window.AMOCRM_NO_TRACKING || (t[d()] = !0, window.sessionStorage.setItem(i, JSON.stringify(t))), window.sessionStorage.setItem(c, a.toString()), window.sessionStorage.setItem(s, (o + 1).toString()), window.sessionStorage.setItem(c, a.toString()), window.window.addEventListener("beforeunload", function () {
                        a += performance.now(), window.sessionStorage.setItem(c, a.toString())
                    }), m = !0
                }
            },
            extractTrackingParamsFromUrl: function () {
                return r = S.parse(location.search), t = Q, Object.keys(r).filter(function (e) {
                    return 0 <= t.indexOf(e)
                }).reduce(function (e, t) {
                    return Object.assign(e, ((e = {})[t] = r[t], e))
                }, {});
                var r, t
            },
            extractTrackingParamsFromTrackers: function (u) {
                var e = function () {
                    var n, e;

                    function o(e) {
                        "undefined" != typeof ga ? ga(function () {
                            e([ga.getAll().map(function (e) {
                                return {
                                    key: "gclientid",
                                    value: e.get("clientId")
                                }
                            })[0]])
                        }) : e([])
                    }

                    function a(t) {
                        var r;
                        "undefined" != typeof Ya ? (r = (Ya.Metrika || Ya.Metrika2).counters().map(function (e) {
                            return e && e.id
                        }).filter(function (e) {
                            return e
                        })[0], "undefined" != typeof ym ? ym(r, "getClientID", function (e) {
                            t([{
                                key: "_ym_counter",
                                value: r
                            }, {
                                key: "_ym_uid",
                                value: e
                            }])
                        }) : void 0 !== window["yaCounter" + r] ? t([{
                            key: "_ym_counter",
                            value: r
                        }, {
                            key: "_ym_uid",
                            value: window["yaCounter" + r].getClientID()
                        }]) : t([])) : t([])
                    }

                    function i(e) {
                        void 0 !== window.roistat ? e([{
                            key: "roistat",
                            value: window.roistat.getVisit()
                        }]) : e([])
                    }
                    n = function (e) {
                        function t() {
                            c = 0, r.forEach(function (e) {
                                c++;
                                try {
                                    e(function (e) {
                                        var t, e = i.indexOf(e); - 1 < e && ((t = Array.prototype.slice.call(arguments, 1)) && t.length && t.filter(function (e) {
                                            return e.length
                                        }).length && (i.splice(e, 1), a = a.concat(t)), i.length || (clearTimeout(s), clearInterval(o), window.removeEventListener("beforeunload", n.bind(null, a)), n(a)))
                                    }.bind(null, c))
                                } catch (e) {}
                            })
                        }
                        var r, n, o, a, i, s, c;
                        r = e, n = u, a = [], i = [], s = setTimeout(function () {
                            clearInterval(o), n(a), window.removeEventListener("beforeunload", n.bind(null, a))
                        }, 5e3), window.addEventListener("beforeunload", n.bind(null, a)), c = 0, r.forEach(function () {
                            c++, i.push(c)
                        }), t(), i.length && (o = setInterval(function () {
                            r.length && t()
                        }, 500))
                    }, (e = new XMLHttpRequest).onload = function () {
                        var t;
                        try {
                            t = JSON.parse(e.response)
                        } catch (e) {
                            t = {}
                        }
                        var r = [o, a, i];
                        Object.keys(t).forEach(function (e) {
                            r.push(new Function(t[e]))
                        }), n(r)
                    }, e.onerror = function (e) {
                        var t = [o, a, i];
                        console.error("Failed to get custom trackers " + e.currentTarget.statusText), n(t)
                    }, e.open("GET", k.baseURL + "/callbacks/?id=" + k.id + "&hash=" + k.hash), e.send()
                };
                "complete" === document.readyState ? e() : document.onreadystatechange = function () {
                    "complete" === document.readyState && e()
                }
            },
            configure: function (e) {
                Object.assign(k, e)
            }
        }), function (e) {
            this.func = e, this.state = "", this.result = "", this.successQueue = [], this.failQueue = [], this.resolve = function (e) {
                this.state = "resolved", this.result = e, this._triggerHandle()
            }.bind(this), this.reject = function (e) {
                this.state = "rejected", this.result = e, this._triggerHandle()
            }.bind(this), this.then = function (e, t) {
                return e && Array.isArray(this.successQueue) && this.successQueue.push(e), t && Array.isArray(this.failQueue) && this.failQueue.push(t), this._triggerHandle(), this
            }.bind(this), this._triggerHandle = function () {
                try {
                    var t = this.result;
                    "resolved" === this.state ? (this.successQueue.forEach(function (e) {
                        e(t)
                    }), this.successQueue = []) : "rejected" === this.state && (this.failQueue.forEach(function (e) {
                        e(t)
                    }), this.failQueue = [])
                } catch (e) {
                    console.log(e)
                }
            }.bind(this);
            try {
                this.func(this.resolve, this.reject)
            } catch (e) {
                console.log(e)
            }
        }),
        A = {},
        z = function (e, t) {
            if (A[t] && A[t].length)
                for (var r = 0, n = A[t].length; r < n; r++) A[t][r]({
                    form_id: e
                })
        },
        N = {};

    function G(e) {
        for (E = 1; e = h.shift();) e()
    }
    window.domready = (h = [], y = document, w = y.documentElement, g = w.doScroll, v = "DOMContentLoaded", b = "addEventListener", I = "onreadystatechange", E = (g ? /^loaded|^c/ : /^loaded|c/).test(y[$ = "readyState"]), y[b] && y[b](v, _ = function () {
        y.removeEventListener(v, _, !1), G()
    }, !1), g && y.attachEvent(I, _ = function () {
        /^c/.test(y[$]) && (y.detachEvent(I, _), G())
    }), J = g ? function (t) {
        if (self !== top) E ? t() : h.push(t);
        else {
            try {
                w.doScroll("left")
            } catch (e) {
                return void setTimeout(function () {
                    J(t)
                }, 50)
            }
            t()
        }
    } : function (e) {
        E ? e() : h.push(e)
    });
    var M = {
            common: new Set
        },
        V = !0,
        L = document,
        C = window;

    function j(h) {
        function _(e) {
            t((e = void 0 === e ? {} : e).form_id, e), t("common", e)
        }

        function o() {
            void 0 === C.postMessage && (C.postMessage = function (e, t, r) {});
            var o, i = function (e) {
                    var t = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#039;"
                    };
                    return (e || "").replace(/[&<>"']/g, function (e) {
                        return t[e]
                    })
                },
                e = parseInt(h.id),
                t = i(h.hash),
                r = (i(h.locale), ""),
                n = "",
                a = "",
                s = "",
                c = !1;
            if (h.hasOwnProperty("us") && h.us.hasOwnProperty("success_message")) {
                if (h.us.success_message && (r = h.us.success_message), h.us.has_redirect && (o = h.us, n = new x(function (t, e) {
                        var r, n;
                        o.redirect_url ? t(o.redirect_url) : h.dp && (r = "ru" === N.top_domain ? "ru" : "com", r = N.top_protocol + "://forms.amocrm." + r, (n = new XMLHttpRequest).onload = function () {
                            var e;
                            if (200 === n.status) try {
                                if ((e = JSON.parse(n.response)).redirect_link) return void t(e.redirect_link)
                            } catch (e) {
                                return
                            }
                        }, n.onerror = function () {
                            fail()
                        }, n.open("GET", r + "/redirect/link?form_id=" + h.id + "&hash=" + h.hash + "&dp_hash=" + h.dp.hash), n.send())
                    }), s = parseInt(h.us.redirect_delay) || 0), n) try {
                    n.then(function (e) {
                        a = encodeURI(e)
                    })
                } catch (e) {
                    console.log(e)
                }
                r = i(r)
            }
            if (h.hasOwnProperty("us") && h.us.hasOwnProperty("modal_form") && (c = "y" === h.us.modal_form || "Y" === h.us.modal_form), !(void 0 === e || isNaN(e) || e <= 0) && void 0 !== t && "" !== t) {
                h.hasOwnProperty("type") && "gso" === h.type ? (c = !1, N.is_gso = !0, N.iframe_src = N.form_server + "/forms/html/system/form_" + e + "_" + t + ".html?date=" + parseInt(new Date / 1e3)) : N.iframe_src = N.form_server + "/forms/html/form_" + e + "_" + t + ".html?date=" + parseInt(new Date / 1e3), "function" == typeof C.postMessage && V && C.addEventListener("message", function (e) {
                    if (e.origin === N.form_server) try {
                        var t = JSON.parse(e.data);
                        switch (t.func) {
                            case "hideOverlay":
                                return g();
                            case "pushGaForm":
                                return function () {
                                    var e = "/amocrm/form";
                                    switch (!0) {
                                        case "undefined" != typeof gtag:
                                            gtag("event", "page_view", {
                                                page_path: e
                                            });
                                            break;
                                        case "function" == typeof ga:
                                            ga("send", "pageview", e);
                                            break;
                                        case "undefined" != typeof _gaq:
                                            _gaq.push(["_trackPageview", e])
                                    }
                                    return !1
                                }();
                            case "getFormInfo":
                                p(t);
                                break;
                            case "amoformsSuccessSubmit":
                                if (_({
                                        form_id: t.form_id,
                                        status: "success"
                                    }), a) l();
                                else if (n) try {
                                    n.then(function (e) {
                                        a = encodeURI(e), l()
                                    })
                                } catch (e) {
                                    console.log(e)
                                }
                                break;
                            case "amoformsFailSubmit":
                                _({
                                    form_id: t.form_id,
                                    status: "fail"
                                })
                        }! function (e) {
                            var t = e.iframe_id,
                                r = e.height,
                                t = L.getElementById(t),
                                n = function () {
                                    var e = C.getComputedStyle(L.documentElement, ""),
                                        e = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
                                    return {
                                        dom: "WebKit|Moz|MS|O".match(new RegExp("(" + e + ")", "i"))[1],
                                        lowercase: e,
                                        css: "-" + e + "-",
                                        js: e[0].toUpperCase() + e.substr(1)
                                    }
                                }().css + "transform: translateX(-50%);";
                            if ("pushGaForm" === e.func) return;
                            r = Number(r), c && (r < C.innerHeight ? t.setAttribute("style", "width: 540px; position: absolute; top: 50%; left:50%; " + n + "; overflow: visible; margin-top: -" + (r / 2 + 25) + "px; padding: 0; border: none;") : t.setAttribute("style", "width: 540px; position: absolute; left:50%;" + n + " overflow: visible; padding: 0; border: none;"));
                            t.style.height = r + "px", t.style.opacity = 1, t.style.position = "inherit", "file://" !== location.origin && C.postMessage("amoforms:resize:complete", location.origin);
                            c && ("complete" === L.readyState ? g() : C.addEventListener("load", g))
                        }(t)
                    } catch (e) {}
                }, !1);
                var u, m = L.createElement("iframe"),
                    t = (m.setAttribute("id", "amoforms_iframe_" + e), m.setAttribute("class", "amoforms_iframe"), m.setAttribute("name", "amoforms_iframe_" + e), m.setAttribute("allowtransparency", ""), m.setAttribute("scrolling", "no"), m.setAttribute("frameborder", "0"), m.setAttribute("style", "width: 100%; position: absolute; height: 100%; overflow: visible; margin: 0 0 10px 0; padding: 0; border: none; z-index:10000; right: 0; bottom: 0; opacity: 0;"), new W({
                        iframe: m,
                        form: {
                            id: e,
                            hash: t,
                            locale: N.top_domain,
                            protocol: N.top_protocol
                        }
                    }), N.iframe_params.user_origin = {
                        datetime: (new Date).toDateString() + " " + (new Date).toTimeString(),
                        referer: L.referrer
                    }, N.iframe_params.is_modal = c, N.iframe_params.success_message = encodeURI(r), N.iframe_params.has_redirect = encodeURI(h.us.has_redirect || ""), N.iframe_params.is_dark_bg = "transparent" !== (e = function e(t) {
                        var r = "rgba(0, 0, 0, 0)";
                        if (!t) return r;
                        var n = getComputedStyle(t).backgroundColor;
                        return n === r ? e(t.parentElement) : n
                    }(y)) && (299 * (e = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,?[\s+]?([\d\.]*)[\s+]?/i))[1] + 587 * e[2] + 114 * e[3]) / 255e3 < .5, location.search.match(/utm_source=\w+/) ? location.search : L.cookie),
                    r = {};
                switch (r.source = t.match(/utm_source=(.+?)(&|[#]|$|;)/) || t.match(/utmcsr=(.+?)[|;]/), r.medium = t.match(/utm_medium=(.+?)(&|[#]|$|;)/) || t.match(/utmcmd=(.+?)[|;]/), r.content = t.match(/utm_content=(.+?)(&|[#]|$|;)/) || t.match(/utmcct=(.+?)[|;]/), r.campaign = t.match(/utm_campaign=(.+?)(&|[#]|$|;)/) || t.match(/utmccn=(.+?)[|;]/), r.term = t.match(/utm_term=(.+?)(&|[#]|$|;)/) || t.match(/utmctr=(.+?)[|;]/), r.source = r.hasOwnProperty("source") && null !== r.source && 1 < r.source.length ? r.source[1] : "", r.medium = r.hasOwnProperty("medium") && null !== r.medium && 1 < r.medium.length ? r.medium[1] : "", r.content = r.hasOwnProperty("content") && null !== r.content && 1 < r.content.length ? r.content[1] : "", r.campaign = r.hasOwnProperty("campaign") && null !== r.campaign && 1 < r.campaign.length ? r.campaign[1] : "", r.term = r.hasOwnProperty("term") && null !== r.term && 1 < r.term.length ? r.term[1] : "", N.iframe_params.utm = r, N.iframe_params.ga = {}, N.iframe_params.location = location.origin + location.pathname, N.iframe_params.dp = {}, h.dp && h.dp.hasOwnProperty("hash") && (N.iframe_params.dp = h.dp), !0) {
                    case "function" == typeof ga && 1 === ga.length:
                        ga(function (e) {
                            try {
                                var t = N.iframe_params.ga || {};
                                e.get = e.get || function (e) {}, t.trackingId = e.get("trackingId"), t.clientId = e.get("clientId")
                            } catch (e) {}
                            N.iframe_params.ga = t, m.src = N.iframe_src + "#" + JSON.stringify(N.iframe_params)
                        });
                        break;
                    case "undefined" != typeof _gaq:
                        _gaq.push(function () {
                            var e = N.iframe_params.ga || {},
                                t = (e.trackingId = _gat._getTrackerByName()._getAccount(), L.cookie.match(/__utmz=(.+?)(&|[#]|$|;)/));
                            (t = t && t[1] ? t[1] : null) && (e.clientId = t.split(".")[1]), N.iframe_params.ga = e, m.src = N.iframe_src + "#" + JSON.stringify(N.iframe_params)
                        });
                        break;
                    case "undefined" != typeof gtag:
                        setTimeout(function () {
                            "undefined" != typeof ga ? ga(function () {
                                var e, t;
                                "function" == typeof ga.getAll && "function" == typeof (e = ga.getAll()[0]).get && ((t = N.iframe_params.ga || {}).trackingId = e.get("trackingId"), t.clientId = e.get("clientId"), N.iframe_params.ga = t, m.src = N.iframe_src + "#" + JSON.stringify(N.iframe_params))
                            }) : m.src = N.iframe_src + "#" + JSON.stringify(N.iframe_params)
                        }, 100);
                        break;
                    default:
                        m.src = N.iframe_src + "#" + JSON.stringify(N.iframe_params)
                }
                "function" != typeof C.postMessage && (m.onload = function () {
                    var t = this,
                        r = null;
                    setTimeout(function () {
                        if (location.hash.match(/#amo_h(\d+)/) && (r = RegExp.$1, location.hash = location.hash.replace("#amo_h" + r, "")), !r)
                            for (var e = 0; e < 1e4; e += 10)
                                if (top.frames["amo_h" + e]) {
                                    r += 15;
                                    break
                                } r && (t.style.height = r + "px")
                    }, 10)
                }), c ? ((u = L.createElement("div")).id = "amoforms_overlay", u.setAttribute("style", "position: absolute; top: 0; left: 0; bottom: 0; right: 0; background: rgba(0,0,0,0.7); overflow: auto;"), u.style.opacity = "0", L.body.appendChild(u), u.appendChild(m)) : y.parentNode.insertBefore(m, y), V = !1;
                (e = L.createElement("p")).style.width = "100%", e.style.height = "100%", (t = L.createElement("div")).style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "100px", t.style.height = "100px", t.style.overflow = "hidden", t.appendChild(e), L.body.appendChild(t), r = e.offsetWidth, t.style.overflow = "scroll", e = e.offsetWidth, r === e && (e = t.clientWidth), L.body.removeChild(t);
                var f, d = r - e;
                t = -1, "Microsoft Internet Explorer" === navigator.appName ? (f = navigator.userAgent, null !== new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(f) && (t = parseFloat(RegExp.$1))) : "Netscape" === navigator.appName && (f = navigator.userAgent, null !== new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(f) && (t = parseFloat(RegExp.$1))), 10 !== t && 11 !== t || (d = 0)
            }

            function l() {
                a && (s ? setTimeout(function () {
                    C.location.href = a
                }, 1e3 * s) : C.location.href = a)
            }

            function p(e) {
                var t, r, n = e.btn_background,
                    o = e.btn_text_color,
                    a = (a = (t = e).btn_text ? "none" : "uppercase", t = e.version && 3 === t.version ? "box-shadow: 0px 1px 0px rgba(0,0,0,0.2);                                   display: inline-block;                                   font-family: Tahoma, Arial, sans-serif;                                   padding: 0 33px;                                   border-radius: 3px;                                   height: 52px;                                   border: none;                                   outline: none;                                   cursor: pointer;                                   text-transform: " + a + ";                                   font-weight: 400;                                   margin: 0;                                   font-size: 15px;                                   margin-bottom: 15px" : "box-shadow: 0px 1px 0px rgba(0,0,0,0.2);                                   display: inline-block;                                   font-family: Tahoma, Arial, sans-serif;                                   padding: 5px 10px;                                   border-radius: 3px;                                   height: 38px;                                   border: 1px solid rgba(0, 0, 0, 0.2);                                   outline: none;                                   cursor: pointer;                                   text-transform: " + a + ";                                   font-weight: bold;                                   margin: 0;                                   font-size: 13px;                                   margin-bottom: 15px");
                c && ((r = L.createElement("button")).setAttribute("style", a), r.id = "amoforms_action_btn", r.style.color = o, r.style.backgroundColor = n, r.innerHTML = i(e.btn_text) || w("submit"), L.getElementById("amoforms_action_btn") || (y.parentNode.insertBefore(r, y), C.removeEventListener("message", p, !1))), c && (r.onclick = function () {
                    L.body.style.position = "fixed", L.body.style.width = "100%", L.body.style.height = "100%", L.body.style.paddingRight = d, u.style.display = "block", u.style.zIndex = "99999", u.style.webkitOverflowScrolling = "touch", u.onclick = function () {
                        var e;
                        u.style.display = "none", L.body.style.position = "", L.body.style.width = "", L.body.style.height = "", L.body.style.paddingRight = "", "function" == typeof C.postMessage && (e = L.querySelector(".amoforms_iframe")).contentWindow.postMessage("close:complete:fade", e.src)
                    }
                })
            }

            function g() {
                u.style.display = "none", u.style.opacity = "1"
            }
        }
        var y, t = function (e, t) {
                M[e] && M[e].forEach(function (e) {
                    return e(t)
                })
            },
            r = h.locale || "ru";
        N.iframe_params = {};
        C.amo_forms_params && (C.amo_forms_params.resizeForm = function (e) {
            (e = L.getElementById(e)) && e.contentWindow.postMessage('{"func":"amoforms:get-height"}', e.src)
        }, C.amo_forms_params.onFormSubmit = function (e, t) {
            var t = t || "common",
                r = (M[t] = M[t] || new Set, M[t]);
            return r.has(e) ? function () {
                return !1
            } : (r.add(e), function () {
                return r.delete(e)
            })
        }), C.addEventListener("message", function (e) {
            var t;
            "getWindowHeightAndIframeTopPos" === e.data && void 0 !== h && h.id && (t = ['{"parent_window_height": ', C.innerHeight, ', "iframe_offset_top": ', (e = L.querySelector("#amoforms_iframe_" + h.id)).getBoundingClientRect().top, ', "is_hidden": ', !((t = e.scrollHeight / 2 + e.offsetTop) > C.pageYOffset && t < C.pageYOffset + C.innerHeight), ', "bottom_indent":', (e.scrollHeight + e.offsetTop - C.pageYOffset) / 2, "}"].join(""), e.contentWindow.postMessage(t, e.src))
        }, !1), C.addEventListener("message", function (e) {
            var t;
            "getWindowWidthIsModal" === e.data && (e = C.innerWidth, t = L.querySelector("#amoforms_iframe_" + h.id), e <= 900 && (attrStyle = t.getAttribute("style"), t.setAttribute("style", attrStyle + "width:440px !important")), t.contentWindow.postMessage('{"parent_window_width": ' + e + "}", t.src))
        }, !1);
        for (var e = h.id, n = function (e) {
                y = e, N.form_server = y.src.match(/(http.+\.\w+)\//)[1], N.top_domain = N.form_server.split(".").slice(-1)[0], N.top_protocol = N.form_server.split(":").slice(0)[0], domready(function () {
                    var e, t, r, n;
                    e = N.form_server + "/forms/js/form_" + h.id + "_" + h.hash + ".js", t = function () {
                        var e;
                        h.us = C.amo_forms_params.us, D({
                            form_server: N.form_server,
                            iframe_id: "amoforms_iframe_" + h.id
                        }), o(), e = h.id, "number" != typeof (e = parseInt(e)) || isNaN(e) || (z(e, e), z(e, -1), delete A[e])
                    }, r = L.createElement("script"), n = L.getElementsByTagName("head")[0], r.onreadystatechange = function () {
                        "loaded" !== r.readyState && "complete" !== r.readyState || (r.onreadystatechange = null, t())
                    }, r.onload = function () {
                        t()
                    }, r.src = e, r.charset = "utf-8", n.appendChild(r)
                })
            }, a = L.getElementsByTagName("script"), i = null, s = L.currentScript, c = 0; c < a.length; ++c) {
            if (a[c].id === "amoforms_script_" + e) {
                i = a[c];
                break
            }
            "amoforms_script" === a[c].id && (s = a[c])
        }
        i ? n(i) : s && s.addEventListener("load", function (e) {
            n(e.target)
        }, !1);
        var u = {
                submit: {
                    en: "Submit",
                    es: "Enviar",
                    ru: "Заполнить форму"
                }
            },
            w = function (e) {
                return u.hasOwnProperty(e) && u[e].hasOwnProperty(r) ? u[e][r] : e
            }
    }
    if (C.amo_forms_loaded && C.amo_forms_loaded.f)
        for (var T = 0, R = C.amo_forms_loaded.f.length; T < R; T++) "object" == typeof C.amo_forms_loaded.f[T] && C.amo_forms_loaded.f[T].length && q.apply(null, C.amo_forms_loaded.f[T]);
    if (C.amo_forms_params && C.amo_forms_params.id && C.amo_forms_params.hash && j(C.amo_forms_params), C.amo_forms_load && C.amo_forms_load.f)
        for (T = 0, R = C.amo_forms_load.f.length; T < R; T++) j(C.amo_forms_load.f[T]);
    C.amo_forms_loaded = q, C.amo_forms_load = j
}();