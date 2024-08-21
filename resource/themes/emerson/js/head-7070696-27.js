(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        134: function(e, t, a) {
            e.exports = a(147)
        },
        135: function(e, t, a) {
            (function(t) {
                e.exports = t.coreMetricsCustom = a(136)
            }).call(this, a(9))
        },
        136: function(e, t, a) {
            var n, o, i = a(0);
            i(document).ready((function() {
                "undefined" == typeof digitalData && (digitalData = {}), digitalData.component = new Array, digitalData.event = new Array, i("#yesForeseeSearch").click((function() {
                    FSR.launchFeedback("vYs9gTUzLxDjrZODv9RHZDWTOvUWZYFo")
                })), i("#noForeseeSearch").click((function() {
                    FSR.launchFeedback("Bb3k0Aap9KX3Nvayp38CmiqUbqBhiApL")
                })), onYouTubeIframeAPIReady = function() {
                    for (var e = document.getElementsByTagName("iframe"), t = e.length; t--;) /youtube.com\/embed/.test(e[t].src) && (n = new YT.Player(e[t], {
                        events: {
                            onStateChange: r.onPlayerStateChange
                        }
                    }))
                }
            })), document.addEventListener("DOMContentLoaded", (function() {
                "undefined" == typeof digitalData && (digitalData = {}), void 0 === digitalData.additionalPageInfo && (digitalData.additionalPageInfo = {}), setTimeout((function() {
                    var e, t, a, n;
                    navigator && (e = navigator.language || navigator.userLanguage), document.querySelector("[property='Business Platform']") && (t = document.querySelector("[property='Business Platform']").getAttribute("content")), window.location && (a = window.location.href), document && (n = document.title), digitalData.additionalPageInfo.URL = a, digitalData.additionalPageInfo.browserLanguage = e, digitalData.additionalPageInfo.pageName = n, digitalData.additionalPageInfo.platform = t, window.dataLayer.push({
                        event: "pageViewTrigger"
                    })
                }), 1e3)
            }));
            var r = {
                getDocumentCat: function(e) {
                    var t = e.split(" ");
                    return t.length > 0 ? t[1].toLowerCase() + " " + t[2].toLowerCase() : ""
                },
                replaceLocale: function(e) {
                    var t = "";
                    return "" != e && (t = r.checkLocale(e.replace("_", "-"))), t
                },
                getDomainExt: function(e) {
                    return "" != e ? (e = e.split("."))[e.length - 1] : ""
                },
                getLanguageLocale: function(e) {
                    var t = e.split("/"),
                        a = "";
                    if (t.length > 0)
                        for (var n = 0; n < t.length; n++)
                            if ("" != (a = r.replaceLocale(t[n]))) return a;
                    return ""
                },
                getCategoryDA: function(e, t, a) {
                    for (var n, o = t.split(" "), i = 0; i < e.length; i++)
                        if ((n = e[i].split("-"))[1]) {
                            if (o[0].toLowerCase() == n[1].toLowerCase()) return n[a].toLowerCase();
                            if (o[0].toLowerCase().includes(n[1].toLowerCase())) return n[a].toLowerCase()
                        } else if (n[2] && t.toLowerCase().includes(n[2].toLowerCase())) return n[a].toLowerCase();
                    return ""
                },
                onPlayerStateChange: function(e) {
                    switch (o = n.getDuration().toFixed(0), e.data) {
                        case YT.PlayerState.PLAYING:
                            0 == r.cleanTime() ? r.setElementAttr(n.getVideoUrl(), 0, r.cleanTime(n.getCurrentTime()), o, r.getDomainExt(document.domain), r.getLanguageLocale(document.location.pathname)) : r.setElementAttr(n.getVideoUrl(), 2, r.cleanTime(n.getCurrentTime()), o, r.getDomainExt(document.domain), r.getLanguageLocale(document.location.pathname));
                            break;
                        case YT.PlayerState.PAUSED:
                            n.getDuration() - n.getCurrentTime() != 0 && r.setElementAttr(n.getVideoUrl(), 1, r.cleanTime(n.getCurrentTime()), o, r.getDomainExt(document.domain), r.getLanguageLocale(document.location.pathname));
                            break;
                        case YT.PlayerState.ENDED:
                            r.setElementAttr(n.getVideoUrl(), 3, r.cleanTime(n.getCurrentTime()), o, r.getDomainExt(document.domain), r.getLanguageLocale(document.location.pathname))
                    }
                },
                setElementAttr: function(e, t, a, n, o, i) {
                    return e + "-_-" + window.location.href + "-_--_--_--_--_--_--_--_-" + o + "-_-" + i + "-_--_-" + t + "-_-" + a + "-_-" + n
                },
                cleanTime: function(e) {
                    return Math.round(e)
                },
                checkLocale: function(e) {
                    var t = e.toLowerCase();
                    return /^[A-Z]{2}-[A-Z]{2}$/i.test(t) ? t : ""
                }
            };
            e.exports = r
        },
        147: function(e, t, a) {
            "use strict";
            a.r(t);
            a(135), a(1)
        }
    },
    [
        [134, 0]
    ]
]);