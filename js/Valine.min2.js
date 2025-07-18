/*!
 * Valine v1.4.14
 * (c) 2017-2020 xCss
 * Released under the GPL-2.0 License.
 * Last Update: 2020/4/26 下午8:39:08
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.Valine = t())
    : (e.Valine = t());
})(this, function () {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.i = function (e) {
        return e;
      }),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 63))
    );
  })([
    function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.__esModule = !0;
      var o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        i = n(38),
        a = r(i),
        s = n(28),
        l = r(s),
        c = n(27),
        u = r(c),
        d = n(42),
        p = r(d),
        f = document,
        h = navigator,
        v = /[&<>"'`\\]/g,
        g = RegExp(v.source),
        m = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g,
        y = RegExp(m.source),
        b = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "`": "&#x60;",
          "\\": "&#x5c;",
        },
        w = {};
      for (var x in b) w[b[x]] = x;
      var k = null;
      Array.prototype.forEach ||
        (Array.prototype.forEach = function (e, t) {
          var n, r;
          if (null == this) throw new TypeError(" this is null or not defined");
          var o = Object(this),
            i = o.length >>> 0;
          if ("function" != typeof e)
            throw new TypeError(e + " is not a function");
          for (arguments.length > 1 && (n = t), r = 0; r < i; ) {
            var a;
            r in o && ((a = o[r]), e.call(n, a, r, o)), r++;
          }
        }),
        window.NodeList &&
          !NodeList.prototype.forEach &&
          (NodeList.prototype.forEach = Array.prototype.forEach),
        String.prototype.trim ||
          (String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          }),
        (0, a.default)(l.default.fn, {
          prepend: function (e) {
            return (
              e instanceof HTMLElement || (e = e[0]),
              this.forEach(function (t) {
                t.insertAdjacentElement("afterBegin", e);
              }),
              this
            );
          },
          append: function (e) {
            return (
              e instanceof HTMLElement || (e = e[0]),
              this.forEach(function (t) {
                t.insertAdjacentElement("beforeEnd", e);
              }),
              this
            );
          },
          remove: function () {
            return (
              this.forEach(function (e) {
                try {
                  e.parentNode.removeChild(e);
                } catch (e) {}
              }),
              this
            );
          },
          find: function (e) {
            return (0, l.default)(e, this);
          },
          show: function () {
            return (
              this.forEach(function (e) {
                e.style.display = "block";
              }),
              this
            );
          },
          hide: function () {
            return (
              this.forEach(function (e) {
                e.style.display = "none";
              }),
              this
            );
          },
          on: function (e, t, n) {
            return (
              l.default.fn.off(e, t, n),
              this.forEach(function (r) {
                e.split(" ").forEach(function (e) {
                  r.addEventListener
                    ? r.addEventListener(e, t, n || !1)
                    : r.attachEvent
                    ? r.attachEvent("on" + e, t)
                    : (r["on" + e] = t);
                });
              }),
              this
            );
          },
          off: function (e, t, n) {
            return (
              this.forEach(function (r) {
                e.split(" ").forEach(function (e) {
                  r.removeEventListener
                    ? r.removeEventListener(e, t, n || !1)
                    : r.detachEvent
                    ? r.detachEvent("on" + e, t)
                    : (r["on" + e] = null);
                });
              }),
              this
            );
          },
          html: function (e) {
            return void 0 !== e
              ? (this.forEach(function (t) {
                  t.innerHTML = e;
                }),
                this)
              : this[0].innerHTML;
          },
          text: function (e) {
            return void 0 !== e
              ? (this.forEach(function (t) {
                  t.innerText = e;
                }),
                this)
              : this[0].innerText;
          },
          empty: function (e) {
            return (
              (e = e || 0),
              this.forEach(function (t) {
                setTimeout(function (e) {
                  t.innerText = "";
                }, e);
              }),
              this
            );
          },
          val: function (e) {
            return void 0 !== e
              ? (this.forEach(function (t) {
                  t.value = e;
                }),
                this)
              : this[0].value || "";
          },
          attr: function () {
            var e = arguments;
            if ("object" == o(arguments[0])) {
              var t = arguments[0],
                n = this;
              return (
                Object.keys(t).forEach(function (e) {
                  n.forEach(function (n) {
                    n.setAttribute(e, t[e]);
                  });
                }),
                this
              );
            }
            return "string" == typeof arguments[0] && arguments.length < 2
              ? this[0].getAttribute(arguments[0]) || ""
              : (this.forEach(function (t) {
                  t.setAttribute(e[0], e[1]);
                }),
                this);
          },
          removeAttr: function (e) {
            return (
              this.forEach(function (t) {
                var n,
                  r = 0,
                  o = e && e.match(/[^\x20\t\r\n\f\*\/\\]+/g);
                if (o && 1 === t.nodeType)
                  for (; (n = o[r++]); ) t.removeAttribute(n);
              }),
              this
            );
          },
          hasClass: function (e) {
            return (
              !!this[0] &&
              new RegExp("(\\s|^)" + e + "(\\s|$)").test(
                this[0].getAttribute("class")
              )
            );
          },
          addClass: function (e) {
            return (
              this.forEach(function (t) {
                var n = (0, l.default)(t),
                  r = n.attr("class");
                n.hasClass(e) || n.attr("class", (r += " " + e));
              }),
              this
            );
          },
          removeClass: function (e) {
            return (
              this.forEach(function (t) {
                var n = (0, l.default)(t),
                  r = n.attr("class");
                if (n.hasClass(e)) {
                  var o = new RegExp("(\\s|^)" + e + "(\\s|$)");
                  n.attr("class", r.replace(o, ""));
                }
              }),
              this
            );
          },
        }),
        (0, a.default)(l.default, {
          extend: a.default,
          noop: function () {},
          navi: h,
          ua: h.userAgent,
          lang: h.language || h.languages[0],
          detect: u.default,
          store: p.default,
          escape: function (e) {
            return e && g.test(e)
              ? e.replace(v, function (e) {
                  return b[e];
                })
              : e;
          },
          unescape: function (e) {
            return e && y.test(e)
              ? e.replace(m, function (e) {
                  return w[e];
                })
              : e;
          },
          dynamicLoadSource: function (e, t) {
            if ((0, l.default)('script[src="' + e + '"]').length) t && t();
            else {
              var n = f.createElement("script");
              (n.onload = n.onreadystatechange = function () {
                var e = this;
                (e.onload = e.onreadystatechange = null),
                  t && t(),
                  (0, l.default)(n).remove();
              }),
                (n.async = !0),
                n.setAttribute("referrerPolicy", "no-referrer");
              (0, l.default)("head")[0].appendChild(n), (n.src = e);
            }
          },
          sdkLoader: function (e, t, n) {
            t in window && window[t]
              ? (k && clearTimeout(k), n && n())
              : l.default.dynamicLoadSource(e, function () {
                  k = setTimeout(l.default.sdkLoader(e, t, n), 100);
                });
          },
          deleteInWin: function (e, t) {
            var n = function (t) {
              if (e in window)
                try {
                  delete window[e];
                } catch (t) {
                  window[e] = null;
                }
            };
            0 === t ? n() : setTimeout(n, t || 500);
          },
          ajax: function (e) {
            (e = e || {}),
              (e.type = (e.type || "GET").toUpperCase()),
              (e.dataType = e.dataType || "json"),
              (e.async = e.async || !0),
              (e.timeout = e.timeout || 8e3);
            var t =
                "[object FormData]" == {}.toString.call(e.data)
                  ? e.data
                  : (function (e) {
                      var t = [];
                      for (var n in e)
                        t.push(
                          encodeURIComponent(n) + "=" + encodeURIComponent(e[n])
                        );
                      return t.push("t=" + Date.now()), t.join("&");
                    })(e.data),
              n = null,
              r =
                "XMLHttpRequest" in window
                  ? new XMLHttpRequest()
                  : new ActiveXObject("Microsoft.XMLHTTP");
            (r.onreadystatechange = function (t) {
              if (4 == r.readyState) {
                clearTimeout(n);
                var o = r.status;
                o >= 200 && o < 300
                  ? e.success && e.success(JSON.parse(r.responseText))
                  : e.fail && e.fail(o);
              }
            }),
              "GET" == e.type
                ? (r.open("GET", e.url + "?" + t, e.async), r.send(null))
                : "POST" == e.type &&
                  (r.open("POST", e.url, e.async),
                  void 0 == e.contentType || null == e.contentType
                    ? r.send(t)
                    : (r.setRequestHeader("Content-Type", e.contentType),
                      r.send(JSON.stringify(e.data)))),
              (n = setTimeout(function (e) {
                clearTimeout(n), r.abort();
              }, e.timeout));
          },
        }),
        (t.default = l.default);
    },
    function (e, t, n) {
      "use strict";
      var r = TypeError,
        o = Object.getOwnPropertyDescriptor;
      if (o)
        try {
          o({}, "");
        } catch (e) {
          o = null;
        }
      var i,
        a,
        s = function () {
          throw new r();
        },
        l = o
          ? (function () {
              try {
                return arguments.callee, s;
              } catch (e) {
                try {
                  return o(arguments, "callee").get;
                } catch (e) {
                  return s;
                }
              }
            })()
          : s,
        c = n(47)(),
        u =
          Object.getPrototypeOf ||
          function (e) {
            return e.__proto__;
          },
        d = i ? u(i) : void 0,
        p = a ? u(a) : void 0,
        f = a ? a() : void 0,
        h = "undefined" == typeof Uint8Array ? void 0 : u(Uint8Array),
        v = {
          "%Array%": Array,
          "%ArrayBuffer%":
            "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
          "%ArrayBufferPrototype%":
            "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer.prototype,
          "%ArrayIteratorPrototype%": c ? u([][Symbol.iterator]()) : void 0,
          "%ArrayPrototype%": Array.prototype,
          "%ArrayProto_entries%": Array.prototype.entries,
          "%ArrayProto_forEach%": Array.prototype.forEach,
          "%ArrayProto_keys%": Array.prototype.keys,
          "%ArrayProto_values%": Array.prototype.values,
          "%AsyncFromSyncIteratorPrototype%": void 0,
          "%AsyncFunction%": void 0,
          "%AsyncFunctionPrototype%": void 0,
          "%AsyncGenerator%": a ? u(f) : void 0,
          "%AsyncGeneratorFunction%": p,
          "%AsyncGeneratorPrototype%": p ? p.prototype : void 0,
          "%AsyncIteratorPrototype%":
            f && c && Symbol.asyncIterator ? f[Symbol.asyncIterator]() : void 0,
          "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
          "%Boolean%": Boolean,
          "%BooleanPrototype%": Boolean.prototype,
          "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
          "%DataViewPrototype%":
            "undefined" == typeof DataView ? void 0 : DataView.prototype,
          "%Date%": Date,
          "%DatePrototype%": Date.prototype,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%ErrorPrototype%": Error.prototype,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%EvalErrorPrototype%": EvalError.prototype,
          "%Float32Array%":
            "undefined" == typeof Float32Array ? void 0 : Float32Array,
          "%Float32ArrayPrototype%":
            "undefined" == typeof Float32Array
              ? void 0
              : Float32Array.prototype,
          "%Float64Array%":
            "undefined" == typeof Float64Array ? void 0 : Float64Array,
          "%Float64ArrayPrototype%":
            "undefined" == typeof Float64Array
              ? void 0
              : Float64Array.prototype,
          "%Function%": Function,
          "%FunctionPrototype%": Function.prototype,
          "%Generator%": i ? u(i()) : void 0,
          "%GeneratorFunction%": d,
          "%GeneratorPrototype%": d ? d.prototype : void 0,
          "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
          "%Int8ArrayPrototype%":
            "undefined" == typeof Int8Array ? void 0 : Int8Array.prototype,
          "%Int16Array%":
            "undefined" == typeof Int16Array ? void 0 : Int16Array,
          "%Int16ArrayPrototype%":
            "undefined" == typeof Int16Array ? void 0 : Int8Array.prototype,
          "%Int32Array%":
            "undefined" == typeof Int32Array ? void 0 : Int32Array,
          "%Int32ArrayPrototype%":
            "undefined" == typeof Int32Array ? void 0 : Int32Array.prototype,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": c ? u(u([][Symbol.iterator]())) : void 0,
          "%JSON%": "object" == typeof JSON ? JSON : void 0,
          "%JSONParse%": "object" == typeof JSON ? JSON.parse : void 0,
          "%Map%": "undefined" == typeof Map ? void 0 : Map,
          "%MapIteratorPrototype%":
            "undefined" != typeof Map && c
              ? u(new Map()[Symbol.iterator]())
              : void 0,
          "%MapPrototype%": "undefined" == typeof Map ? void 0 : Map.prototype,
          "%Math%": Math,
          "%Number%": Number,
          "%NumberPrototype%": Number.prototype,
          "%Object%": Object,
          "%ObjectPrototype%": Object.prototype,
          "%ObjProto_toString%": Object.prototype.toString,
          "%ObjProto_valueOf%": Object.prototype.valueOf,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
          "%PromisePrototype%":
            "undefined" == typeof Promise ? void 0 : Promise.prototype,
          "%PromiseProto_then%":
            "undefined" == typeof Promise ? void 0 : Promise.prototype.then,
          "%Promise_all%": "undefined" == typeof Promise ? void 0 : Promise.all,
          "%Promise_reject%":
            "undefined" == typeof Promise ? void 0 : Promise.reject,
          "%Promise_resolve%":
            "undefined" == typeof Promise ? void 0 : Promise.resolve,
          "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
          "%RangeError%": RangeError,
          "%RangeErrorPrototype%": RangeError.prototype,
          "%ReferenceError%": ReferenceError,
          "%ReferenceErrorPrototype%": ReferenceError.prototype,
          "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
          "%RegExp%": RegExp,
          "%RegExpPrototype%": RegExp.prototype,
          "%Set%": "undefined" == typeof Set ? void 0 : Set,
          "%SetIteratorPrototype%":
            "undefined" != typeof Set && c
              ? u(new Set()[Symbol.iterator]())
              : void 0,
          "%SetPrototype%": "undefined" == typeof Set ? void 0 : Set.prototype,
          "%SharedArrayBuffer%":
            "undefined" == typeof SharedArrayBuffer
              ? void 0
              : SharedArrayBuffer,
          "%SharedArrayBufferPrototype%":
            "undefined" == typeof SharedArrayBuffer
              ? void 0
              : SharedArrayBuffer.prototype,
          "%String%": String,
          "%StringIteratorPrototype%": c ? u(""[Symbol.iterator]()) : void 0,
          "%StringPrototype%": String.prototype,
          "%Symbol%": c ? Symbol : void 0,
          "%SymbolPrototype%": c ? Symbol.prototype : void 0,
          "%SyntaxError%": SyntaxError,
          "%SyntaxErrorPrototype%": SyntaxError.prototype,
          "%ThrowTypeError%": l,
          "%TypedArray%": h,
          "%TypedArrayPrototype%": h ? h.prototype : void 0,
          "%TypeError%": r,
          "%TypeErrorPrototype%": r.prototype,
          "%Uint8Array%":
            "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
          "%Uint8ArrayPrototype%":
            "undefined" == typeof Uint8Array ? void 0 : Uint8Array.prototype,
          "%Uint8ClampedArray%":
            "undefined" == typeof Uint8ClampedArray
              ? void 0
              : Uint8ClampedArray,
          "%Uint8ClampedArrayPrototype%":
            "undefined" == typeof Uint8ClampedArray
              ? void 0
              : Uint8ClampedArray.prototype,
          "%Uint16Array%":
            "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
          "%Uint16ArrayPrototype%":
            "undefined" == typeof Uint16Array ? void 0 : Uint16Array.prototype,
          "%Uint32Array%":
            "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
          "%Uint32ArrayPrototype%":
            "undefined" == typeof Uint32Array ? void 0 : Uint32Array.prototype,
          "%URIError%": URIError,
          "%URIErrorPrototype%": URIError.prototype,
          "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
          "%WeakMapPrototype%":
            "undefined" == typeof WeakMap ? void 0 : WeakMap.prototype,
          "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
          "%WeakSetPrototype%":
            "undefined" == typeof WeakSet ? void 0 : WeakSet.prototype,
        },
        g = n(4),
        m = g.call(Function.call, String.prototype.replace),
        y = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        b = /\\(\\)?/g,
        w = function (e) {
          var t = [];
          return (
            m(e, y, function (e, n, r, o) {
              t[t.length] = r ? m(o, b, "$1") : n || e;
            }),
            t
          );
        },
        x = function (e, t) {
          if (!(e in v))
            throw new SyntaxError("intrinsic " + e + " does not exist!");
          if (void 0 === v[e] && !t)
            throw new r(
              "intrinsic " +
                e +
                " exists, but is not available. Please file an issue!"
            );
          return v[e];
        };
      e.exports = function (e, t) {
        if ("string" != typeof e || 0 === e.length)
          throw new TypeError("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t)
          throw new TypeError('"allowMissing" argument must be a boolean');
        for (
          var n = w(e), i = x("%" + (n.length > 0 ? n[0] : "") + "%", t), a = 1;
          a < n.length;
          a += 1
        )
          if (null != i)
            if (o && a + 1 >= n.length) {
              var s = o(i, n[a]);
              if (!(t || n[a] in i))
                throw new r(
                  "base intrinsic for " +
                    e +
                    " exists, but the property is not available."
                );
              i = s ? s.get || s.value : i[n[a]];
            } else i = i[n[a]];
        return i;
      };
    },
    function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      (t.DEFAULT_EMOJI_CDN =
        "//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/"),
        (t.DB_NAME = "Comment"),
        (t.defaultConfig = {
          lang: "zh-CN",
          langMode: null,
          appId: "",
          appKey: "",
          clazzName: "Comment",
          meta: ["nick", "mail", "link"],
          path: location.pathname,
          placeholder: "Just Go Go",
          pageSize: 10,
          recordIP: !0,
          serverURLs: "",
          visitor: !1,
          emojiCDN: "",
          emojiMaps: void 0,
          enableQQ: !1,
          requiredFields: [],
        }),
        (t.defaultMeta = ["nick", "mail", "link"]),
        (t.QQCacheKey = "_v_Cache_Q"),
        (t.MetaCacheKey = "_v_Cache_Meta"),
        (t.RandomStr = (Date.now() + Math.round(1e3 * Math.random())).toString(
          32
        )),
        (t.VERSION = "1.4.14");
    },
    function (e, t, n) {
      function r(e, t) {
        return new i(t).process(e);
      }
      var o = n(7),
        i = n(29);
      (t = e.exports = r), (t.FilterCSS = i);
      for (var a in o) t[a] = o[a];
      "undefined" != typeof window && (window.filterCSS = e.exports);
    },
    function (e, t, n) {
      "use strict";
      var r = n(32);
      e.exports = Function.prototype.bind || r;
    },
    function (e, t) {
      e.exports = {
        indexOf: function (e, t) {
          var n, r;
          if (Array.prototype.indexOf) return e.indexOf(t);
          for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        },
        forEach: function (e, t, n) {
          var r, o;
          if (Array.prototype.forEach) return e.forEach(t, n);
          for (r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e);
        },
        trim: function (e) {
          return String.prototype.trim
            ? e.trim()
            : e.replace(/(^\s*)|(\s*$)/g, "");
        },
        spaceIndex: function (e) {
          var t = /\s|\n|\t/,
            n = t.exec(e);
          return n ? n.index : -1;
        },
      };
    },
    function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      var r = n(2),
        o = {
          cdn: r.DEFAULT_EMOJI_CDN,
          maps: n(53),
          parse: function (e) {
            return String(e).replace(
              new RegExp(":(" + Object.keys(o.maps).join("|") + "):", "ig"),
              function (e, t) {
                return o.maps[t] ? o.build(t) : e;
              }
            );
          },
          build: function (e) {
            var t = /^(https?:)?\/\//i,
              n = o.maps[e],
              r = t.test(n) ? n : o.cdn + n;
            return t.test(r)
              ? '<img alt="' +
                  e +
                  '" referrerPolicy="no-referrer" class="vemoji" src="' +
                  r +
                  '" />'
              : "";
          },
        };
      t.default = o;
    },
    function (e, t) {
      function n() {
        var e = {};
        return (
          (e["align-content"] = !1),
          (e["align-items"] = !1),
          (e["align-self"] = !1),
          (e["alignment-adjust"] = !1),
          (e["alignment-baseline"] = !1),
          (e.all = !1),
          (e["anchor-point"] = !1),
          (e.animation = !1),
          (e["animation-delay"] = !1),
          (e["animation-direction"] = !1),
          (e["animation-duration"] = !1),
          (e["animation-fill-mode"] = !1),
          (e["animation-iteration-count"] = !1),
          (e["animation-name"] = !1),
          (e["animation-play-state"] = !1),
          (e["animation-timing-function"] = !1),
          (e.azimuth = !1),
          (e["backface-visibility"] = !1),
          (e.background = !0),
          (e["background-attachment"] = !0),
          (e["background-clip"] = !0),
          (e["background-color"] = !0),
          (e["background-image"] = !0),
          (e["background-origin"] = !0),
          (e["background-position"] = !0),
          (e["background-repeat"] = !0),
          (e["background-size"] = !0),
          (e["baseline-shift"] = !1),
          (e.binding = !1),
          (e.bleed = !1),
          (e["bookmark-label"] = !1),
          (e["bookmark-level"] = !1),
          (e["bookmark-state"] = !1),
          (e.border = !0),
          (e["border-bottom"] = !0),
          (e["border-bottom-color"] = !0),
          (e["border-bottom-left-radius"] = !0),
          (e["border-bottom-right-radius"] = !0),
          (e["border-bottom-style"] = !0),
          (e["border-bottom-width"] = !0),
          (e["border-collapse"] = !0),
          (e["border-color"] = !0),
          (e["border-image"] = !0),
          (e["border-image-outset"] = !0),
          (e["border-image-repeat"] = !0),
          (e["border-image-slice"] = !0),
          (e["border-image-source"] = !0),
          (e["border-image-width"] = !0),
          (e["border-left"] = !0),
          (e["border-left-color"] = !0),
          (e["border-left-style"] = !0),
          (e["border-left-width"] = !0),
          (e["border-radius"] = !0),
          (e["border-right"] = !0),
          (e["border-right-color"] = !0),
          (e["border-right-style"] = !0),
          (e["border-right-width"] = !0),
          (e["border-spacing"] = !0),
          (e["border-style"] = !0),
          (e["border-top"] = !0),
          (e["border-top-color"] = !0),
          (e["border-top-left-radius"] = !0),
          (e["border-top-right-radius"] = !0),
          (e["border-top-style"] = !0),
          (e["border-top-width"] = !0),
          (e["border-width"] = !0),
          (e.bottom = !1),
          (e["box-decoration-break"] = !0),
          (e["box-shadow"] = !0),
          (e["box-sizing"] = !0),
          (e["box-snap"] = !0),
          (e["box-suppress"] = !0),
          (e["break-after"] = !0),
          (e["break-before"] = !0),
          (e["break-inside"] = !0),
          (e["caption-side"] = !1),
          (e.chains = !1),
          (e.clear = !0),
          (e.clip = !1),
          (e["clip-path"] = !1),
          (e["clip-rule"] = !1),
          (e.color = !0),
          (e["color-interpolation-filters"] = !0),
          (e["column-count"] = !1),
          (e["column-fill"] = !1),
          (e["column-gap"] = !1),
          (e["column-rule"] = !1),
          (e["column-rule-color"] = !1),
          (e["column-rule-style"] = !1),
          (e["column-rule-width"] = !1),
          (e["column-span"] = !1),
          (e["column-width"] = !1),
          (e.columns = !1),
          (e.contain = !1),
          (e.content = !1),
          (e["counter-increment"] = !1),
          (e["counter-reset"] = !1),
          (e["counter-set"] = !1),
          (e.crop = !1),
          (e.cue = !1),
          (e["cue-after"] = !1),
          (e["cue-before"] = !1),
          (e.cursor = !1),
          (e.direction = !1),
          (e.display = !0),
          (e["display-inside"] = !0),
          (e["display-list"] = !0),
          (e["display-outside"] = !0),
          (e["dominant-baseline"] = !1),
          (e.elevation = !1),
          (e["empty-cells"] = !1),
          (e.filter = !1),
          (e.flex = !1),
          (e["flex-basis"] = !1),
          (e["flex-direction"] = !1),
          (e["flex-flow"] = !1),
          (e["flex-grow"] = !1),
          (e["flex-shrink"] = !1),
          (e["flex-wrap"] = !1),
          (e.float = !1),
          (e["float-offset"] = !1),
          (e["flood-color"] = !1),
          (e["flood-opacity"] = !1),
          (e["flow-from"] = !1),
          (e["flow-into"] = !1),
          (e.font = !0),
          (e["font-family"] = !0),
          (e["font-feature-settings"] = !0),
          (e["font-kerning"] = !0),
          (e["font-language-override"] = !0),
          (e["font-size"] = !0),
          (e["font-size-adjust"] = !0),
          (e["font-stretch"] = !0),
          (e["font-style"] = !0),
          (e["font-synthesis"] = !0),
          (e["font-variant"] = !0),
          (e["font-variant-alternates"] = !0),
          (e["font-variant-caps"] = !0),
          (e["font-variant-east-asian"] = !0),
          (e["font-variant-ligatures"] = !0),
          (e["font-variant-numeric"] = !0),
          (e["font-variant-position"] = !0),
          (e["font-weight"] = !0),
          (e.grid = !1),
          (e["grid-area"] = !1),
          (e["grid-auto-columns"] = !1),
          (e["grid-auto-flow"] = !1),
          (e["grid-auto-rows"] = !1),
          (e["grid-column"] = !1),
          (e["grid-column-end"] = !1),
          (e["grid-column-start"] = !1),
          (e["grid-row"] = !1),
          (e["grid-row-end"] = !1),
          (e["grid-row-start"] = !1),
          (e["grid-template"] = !1),
          (e["grid-template-areas"] = !1),
          (e["grid-template-columns"] = !1),
          (e["grid-template-rows"] = !1),
          (e["hanging-punctuation"] = !1),
          (e.height = !0),
          (e.hyphens = !1),
          (e.icon = !1),
          (e["image-orientation"] = !1),
          (e["image-resolution"] = !1),
          (e["ime-mode"] = !1),
          (e["initial-letters"] = !1),
          (e["inline-box-align"] = !1),
          (e["justify-content"] = !1),
          (e["justify-items"] = !1),
          (e["justify-self"] = !1),
          (e.left = !1),
          (e["letter-spacing"] = !0),
          (e["lighting-color"] = !0),
          (e["line-box-contain"] = !1),
          (e["line-break"] = !1),
          (e["line-grid"] = !1),
          (e["line-height"] = !1),
          (e["line-snap"] = !1),
          (e["line-stacking"] = !1),
          (e["line-stacking-ruby"] = !1),
          (e["line-stacking-shift"] = !1),
          (e["line-stacking-strategy"] = !1),
          (e["list-style"] = !0),
          (e["list-style-image"] = !0),
          (e["list-style-position"] = !0),
          (e["list-style-type"] = !0),
          (e.margin = !0),
          (e["margin-bottom"] = !0),
          (e["margin-left"] = !0),
          (e["margin-right"] = !0),
          (e["margin-top"] = !0),
          (e["marker-offset"] = !1),
          (e["marker-side"] = !1),
          (e.marks = !1),
          (e.mask = !1),
          (e["mask-box"] = !1),
          (e["mask-box-outset"] = !1),
          (e["mask-box-repeat"] = !1),
          (e["mask-box-slice"] = !1),
          (e["mask-box-source"] = !1),
          (e["mask-box-width"] = !1),
          (e["mask-clip"] = !1),
          (e["mask-image"] = !1),
          (e["mask-origin"] = !1),
          (e["mask-position"] = !1),
          (e["mask-repeat"] = !1),
          (e["mask-size"] = !1),
          (e["mask-source-type"] = !1),
          (e["mask-type"] = !1),
          (e["max-height"] = !0),
          (e["max-lines"] = !1),
          (e["max-width"] = !0),
          (e["min-height"] = !0),
          (e["min-width"] = !0),
          (e["move-to"] = !1),
          (e["nav-down"] = !1),
          (e["nav-index"] = !1),
          (e["nav-left"] = !1),
          (e["nav-right"] = !1),
          (e["nav-up"] = !1),
          (e["object-fit"] = !1),
          (e["object-position"] = !1),
          (e.opacity = !1),
          (e.order = !1),
          (e.orphans = !1),
          (e.outline = !1),
          (e["outline-color"] = !1),
          (e["outline-offset"] = !1),
          (e["outline-style"] = !1),
          (e["outline-width"] = !1),
          (e.overflow = !1),
          (e["overflow-wrap"] = !1),
          (e["overflow-x"] = !1),
          (e["overflow-y"] = !1),
          (e.padding = !0),
          (e["padding-bottom"] = !0),
          (e["padding-left"] = !0),
          (e["padding-right"] = !0),
          (e["padding-top"] = !0),
          (e.page = !1),
          (e["page-break-after"] = !1),
          (e["page-break-before"] = !1),
          (e["page-break-inside"] = !1),
          (e["page-policy"] = !1),
          (e.pause = !1),
          (e["pause-after"] = !1),
          (e["pause-before"] = !1),
          (e.perspective = !1),
          (e["perspective-origin"] = !1),
          (e.pitch = !1),
          (e["pitch-range"] = !1),
          (e["play-during"] = !1),
          (e.position = !1),
          (e["presentation-level"] = !1),
          (e.quotes = !1),
          (e["region-fragment"] = !1),
          (e.resize = !1),
          (e.rest = !1),
          (e["rest-after"] = !1),
          (e["rest-before"] = !1),
          (e.richness = !1),
          (e.right = !1),
          (e.rotation = !1),
          (e["rotation-point"] = !1),
          (e["ruby-align"] = !1),
          (e["ruby-merge"] = !1),
          (e["ruby-position"] = !1),
          (e["shape-image-threshold"] = !1),
          (e["shape-outside"] = !1),
          (e["shape-margin"] = !1),
          (e.size = !1),
          (e.speak = !1),
          (e["speak-as"] = !1),
          (e["speak-header"] = !1),
          (e["speak-numeral"] = !1),
          (e["speak-punctuation"] = !1),
          (e["speech-rate"] = !1),
          (e.stress = !1),
          (e["string-set"] = !1),
          (e["tab-size"] = !1),
          (e["table-layout"] = !1),
          (e["text-align"] = !0),
          (e["text-align-last"] = !0),
          (e["text-combine-upright"] = !0),
          (e["text-decoration"] = !0),
          (e["text-decoration-color"] = !0),
          (e["text-decoration-line"] = !0),
          (e["text-decoration-skip"] = !0),
          (e["text-decoration-style"] = !0),
          (e["text-emphasis"] = !0),
          (e["text-emphasis-color"] = !0),
          (e["text-emphasis-position"] = !0),
          (e["text-emphasis-style"] = !0),
          (e["text-height"] = !0),
          (e["text-indent"] = !0),
          (e["text-justify"] = !0),
          (e["text-orientation"] = !0),
          (e["text-overflow"] = !0),
          (e["text-shadow"] = !0),
          (e["text-space-collapse"] = !0),
          (e["text-transform"] = !0),
          (e["text-underline-position"] = !0),
          (e["text-wrap"] = !0),
          (e.top = !1),
          (e.transform = !1),
          (e["transform-origin"] = !1),
          (e["transform-style"] = !1),
          (e.transition = !1),
          (e["transition-delay"] = !1),
          (e["transition-duration"] = !1),
          (e["transition-property"] = !1),
          (e["transition-timing-function"] = !1),
          (e["unicode-bidi"] = !1),
          (e["vertical-align"] = !1),
          (e.visibility = !1),
          (e["voice-balance"] = !1),
          (e["voice-duration"] = !1),
          (e["voice-family"] = !1),
          (e["voice-pitch"] = !1),
          (e["voice-range"] = !1),
          (e["voice-rate"] = !1),
          (e["voice-stress"] = !1),
          (e["voice-volume"] = !1),
          (e.volume = !1),
          (e["white-space"] = !1),
          (e.widows = !1),
          (e.width = !0),
          (e["will-change"] = !1),
          (e["word-break"] = !0),
          (e["word-spacing"] = !0),
          (e["word-wrap"] = !0),
          (e["wrap-flow"] = !1),
          (e["wrap-through"] = !1),
          (e["writing-mode"] = !1),
          (e["z-index"] = !1),
          e
        );
      }
      function r(e, t, n) {}
      function o(e, t, n) {}
      function i(e, t) {
        return a.test(t) ? "" : t;
      }
      var a = /javascript\s*\:/gim;
      (t.whiteList = n()),
        (t.getDefaultWhiteList = n),
        (t.onAttr = r),
        (t.onIgnoreAttr = o),
        (t.safeAttrValue = i);
    },
    function (e, t) {
      e.exports = {
        indexOf: function (e, t) {
          var n, r;
          if (Array.prototype.indexOf) return e.indexOf(t);
          for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        },
        forEach: function (e, t, n) {
          var r, o;
          if (Array.prototype.forEach) return e.forEach(t, n);
          for (r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e);
        },
        trim: function (e) {
          return String.prototype.trim
            ? e.trim()
            : e.replace(/(^\s*)|(\s*$)/g, "");
        },
        trimRight: function (e) {
          return String.prototype.trimRight
            ? e.trimRight()
            : e.replace(/(\s*$)/g, "");
        },
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(40),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
        i = Object.prototype.toString,
        a = Array.prototype.concat,
        s = Object.defineProperty,
        l = function (e) {
          return "function" == typeof e && "[object Function]" === i.call(e);
        },
        c =
          s &&
          (function () {
            var e = {};
            try {
              s(e, "x", { enumerable: !1, value: e });
              for (var t in e) return !1;
              return e.x === e;
            } catch (e) {
              return !1;
            }
          })(),
        u = function (e, t, n, r) {
          (!(t in e) || (l(r) && r())) &&
            (c
              ? s(e, t, {
                  configurable: !0,
                  enumerable: !1,
                  value: n,
                  writable: !0,
                })
              : (e[t] = n));
        },
        d = function (e, t) {
          var n = arguments.length > 2 ? arguments[2] : {},
            i = r(t);
          o && (i = a.call(i, Object.getOwnPropertySymbols(t)));
          for (var s = 0; s < i.length; s += 1) u(e, i[s], t[i[s]], n[i[s]]);
        };
      (d.supportsDescriptors = !!c), (e.exports = d);
    },
    function (e, t, n) {
      "use strict";
      var r = Object.prototype.toString;
      e.exports = function (e) {
        var t = r.call(e),
          n = "[object Arguments]" === t;
        return (
          n ||
            (n =
              "[object Array]" !== t &&
              null !== e &&
              "object" == typeof e &&
              "number" == typeof e.length &&
              e.length >= 0 &&
              "[object Function]" === r.call(e.callee)),
          n
        );
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(45),
        o = n(44),
        i = n(46),
        a = i("String.prototype.replace"),
        s = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
        l = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
      e.exports = function () {
        var e = o(r(this));
        return a(a(e, s, ""), l, "");
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(4),
        o = n(1),
        i = o("%Function%"),
        a = i.apply,
        s = i.call;
      (e.exports = function () {
        return r.apply(s, arguments);
      }),
        (e.exports.apply = function () {
          return r.apply(a, arguments);
        });
    },
    function (e, t, n) {
      "use strict";
      var r = n(11),
        o = "​";
      e.exports = function () {
        return String.prototype.trim && o.trim() === o
          ? String.prototype.trim
          : r;
      };
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || Function("return this")() || (0, eval)("this");
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      function r() {
        return {
          a: ["target", "href", "title"],
          abbr: ["title"],
          address: [],
          area: ["shape", "coords", "href", "alt"],
          article: [],
          aside: [],
          audio: ["autoplay", "controls", "loop", "preload", "src"],
          b: [],
          bdi: ["dir"],
          bdo: ["dir"],
          big: [],
          blockquote: ["cite"],
          br: [],
          caption: [],
          center: [],
          cite: [],
          code: [],
          col: ["align", "valign", "span", "width"],
          colgroup: ["align", "valign", "span", "width"],
          dd: [],
          del: ["datetime"],
          details: ["open"],
          div: [],
          dl: [],
          dt: [],
          em: [],
          font: ["color", "size", "face"],
          footer: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          header: [],
          hr: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          ins: ["datetime"],
          li: [],
          mark: [],
          nav: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          section: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          table: ["width", "border", "align", "valign"],
          tbody: ["align", "valign"],
          td: ["width", "rowspan", "colspan", "align", "valign"],
          tfoot: ["align", "valign"],
          th: ["width", "rowspan", "colspan", "align", "valign"],
          thead: ["align", "valign"],
          tr: ["rowspan", "align", "valign"],
          tt: [],
          u: [],
          ul: [],
          video: [
            "autoplay",
            "controls",
            "loop",
            "preload",
            "src",
            "height",
            "width",
          ],
        };
      }
      function o(e, t, n) {}
      function i(e, t, n) {}
      function a(e, t, n) {}
      function s(e, t, n) {}
      function l(e) {
        return e.replace(S, "&lt;").replace(O, "&gt;");
      }
      function c(e, t, n, r) {
        if (((n = v(n)), "href" === t || "src" === t)) {
          if ("#" === (n = _.trim(n))) return "#";
          if (
            "http://" !== n.substr(0, 7) &&
            "https://" !== n.substr(0, 8) &&
            "mailto:" !== n.substr(0, 7) &&
            "tel:" !== n.substr(0, 4) &&
            "#" !== n[0] &&
            "/" !== n[0]
          )
            return "";
        } else if ("background" === t) {
          if (((I.lastIndex = 0), I.test(n))) return "";
        } else if ("style" === t) {
          if (((P.lastIndex = 0), P.test(n))) return "";
          if (((M.lastIndex = 0), M.test(n) && ((I.lastIndex = 0), I.test(n))))
            return "";
          !1 !== r && ((r = r || A), (n = r.process(n)));
        }
        return (n = g(n));
      }
      function u(e) {
        return e.replace($, "&quot;");
      }
      function d(e) {
        return e.replace(E, '"');
      }
      function p(e) {
        return e.replace(j, function (e, t) {
          return "x" === t[0] || "X" === t[0]
            ? String.fromCharCode(parseInt(t.substr(1), 16))
            : String.fromCharCode(parseInt(t, 10));
        });
      }
      function f(e) {
        return e.replace(T, ":").replace(C, " ");
      }
      function h(e) {
        for (var t = "", n = 0, r = e.length; n < r; n++)
          t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
        return _.trim(t);
      }
      function v(e) {
        return (e = d(e)), (e = p(e)), (e = f(e)), (e = h(e));
      }
      function g(e) {
        return (e = u(e)), (e = l(e));
      }
      function m() {
        return "";
      }
      function y(e, t) {
        function n(t) {
          return !!r || -1 !== _.indexOf(e, t);
        }
        "function" != typeof t && (t = function () {});
        var r = !Array.isArray(e),
          o = [],
          i = !1;
        return {
          onIgnoreTag: function (e, r, a) {
            if (n(e)) {
              if (a.isClosing) {
                var s = "[/removed]",
                  l = a.position + s.length;
                return o.push([!1 !== i ? i : a.position, l]), (i = !1), s;
              }
              return i || (i = a.position), "[removed]";
            }
            return t(e, r, a);
          },
          remove: function (e) {
            var t = "",
              n = 0;
            return (
              _.forEach(o, function (r) {
                (t += e.slice(n, r[0])), (n = r[1]);
              }),
              (t += e.slice(n))
            );
          },
        };
      }
      function b(e) {
        return e.replace(R, "");
      }
      function w(e) {
        var t = e.split("");
        return (
          (t = t.filter(function (e) {
            var t = e.charCodeAt(0);
            return 127 !== t && (!(t <= 31) || 10 === t || 13 === t);
          })),
          t.join("")
        );
      }
      var x = n(3).FilterCSS,
        k = n(3).getDefaultWhiteList,
        _ = n(5),
        A = new x(),
        S = /</g,
        O = />/g,
        $ = /"/g,
        E = /&quot;/g,
        j = /&#([a-zA-Z0-9]*);?/gim,
        T = /&colon;?/gim,
        C = /&newline;?/gim,
        I = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
        P = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
        M = /u\s*r\s*l\s*\(.*/gi,
        R = /<!--[\s\S]*?-->/g;
      (t.whiteList = r()),
        (t.getDefaultWhiteList = r),
        (t.onTag = o),
        (t.onIgnoreTag = i),
        (t.onTagAttr = a),
        (t.onIgnoreTagAttr = s),
        (t.safeAttrValue = c),
        (t.escapeHtml = l),
        (t.escapeQuote = u),
        (t.unescapeQuote = d),
        (t.escapeHtmlEntities = p),
        (t.escapeDangerHtml5Entities = f),
        (t.clearNonPrintableCharacter = h),
        (t.friendlyAttrValue = v),
        (t.escapeAttrValue = g),
        (t.onIgnoreTagStripAll = m),
        (t.StripTagBody = y),
        (t.stripCommentTag = b),
        (t.stripBlankChar = w),
        (t.cssFilter = A),
        (t.getDefaultCSSWhiteList = k);
    },
    function (e, t, n) {
      function r(e) {
        var t = d.spaceIndex(e);
        if (-1 === t) var n = e.slice(1, -1);
        else var n = e.slice(1, t + 1);
        return (
          (n = d.trim(n).toLowerCase()),
          "/" === n.slice(0, 1) && (n = n.slice(1)),
          "/" === n.slice(-1) && (n = n.slice(0, -1)),
          n
        );
      }
      function o(e) {
        return "</" === e.slice(0, 2);
      }
      function i(e, t, n) {
        "user strict";
        var i = "",
          a = 0,
          s = !1,
          l = !1,
          c = 0,
          u = e.length,
          d = "",
          p = "";
        for (c = 0; c < u; c++) {
          var f = e.charAt(c);
          if (!1 === s) {
            if ("<" === f) {
              s = c;
              continue;
            }
          } else if (!1 === l) {
            if ("<" === f) {
              (i += n(e.slice(a, c))), (s = c), (a = c);
              continue;
            }
            if (">" === f) {
              (i += n(e.slice(a, s))),
                (p = e.slice(s, c + 1)),
                (d = r(p)),
                (i += t(s, i.length, d, p, o(p))),
                (a = c + 1),
                (s = !1);
              continue;
            }
            if (('"' === f || "'" === f) && "=" === e.charAt(c - 1)) {
              l = f;
              continue;
            }
          } else if (f === l) {
            l = !1;
            continue;
          }
        }
        return a < e.length && (i += n(e.substr(a))), i;
      }
      function a(e, t) {
        "user strict";
        function n(e, n) {
          if (
            ((e = d.trim(e)),
            (e = e.replace(p, "").toLowerCase()),
            !(e.length < 1))
          ) {
            var r = t(e, n || "");
            r && o.push(r);
          }
        }
        for (var r = 0, o = [], i = !1, a = e.length, c = 0; c < a; c++) {
          var f,
            h,
            v = e.charAt(c);
          if (!1 !== i || "=" !== v)
            if (
              !1 === i ||
              c !== r ||
              ('"' !== v && "'" !== v) ||
              "=" !== e.charAt(c - 1)
            )
              if (/\s|\n|\t/.test(v)) {
                if (((e = e.replace(/\s|\n|\t/g, " ")), !1 === i)) {
                  if (-1 === (h = s(e, c))) {
                    (f = d.trim(e.slice(r, c))), n(f), (i = !1), (r = c + 1);
                    continue;
                  }
                  c = h - 1;
                  continue;
                }
                if (-1 === (h = l(e, c - 1))) {
                  (f = d.trim(e.slice(r, c))),
                    (f = u(f)),
                    n(i, f),
                    (i = !1),
                    (r = c + 1);
                  continue;
                }
              } else;
            else {
              if (-1 === (h = e.indexOf(v, c + 1))) break;
              (f = d.trim(e.slice(r + 1, h))),
                n(i, f),
                (i = !1),
                (c = h),
                (r = c + 1);
            }
          else (i = e.slice(r, c)), (r = c + 1);
        }
        return (
          r < e.length &&
            (!1 === i ? n(e.slice(r)) : n(i, u(d.trim(e.slice(r))))),
          d.trim(o.join(" "))
        );
      }
      function s(e, t) {
        for (; t < e.length; t++) {
          var n = e[t];
          if (" " !== n) return "=" === n ? t : -1;
        }
      }
      function l(e, t) {
        for (; t > 0; t--) {
          var n = e[t];
          if (" " !== n) return "=" === n ? t : -1;
        }
      }
      function c(e) {
        return (
          ('"' === e[0] && '"' === e[e.length - 1]) ||
          ("'" === e[0] && "'" === e[e.length - 1])
        );
      }
      function u(e) {
        return c(e) ? e.substr(1, e.length - 2) : e;
      }
      var d = n(5),
        p = /[^a-zA-Z0-9_:\.\-]/gim;
      (t.parseTag = i), (t.parseAttr = a);
    },
    function (e, t, n) {
      var r,
        o,
        i; /*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
      !(function (n, a) {
        (o = [e, t]),
          (r = a),
          void 0 !== (i = "function" == typeof r ? r.apply(t, o) : r) &&
            (e.exports = i);
      })(0, function (e, t) {
        "use strict";
        function n(e) {
          function t(t) {
            var n = e.style.width;
            (e.style.width = "0px"),
              e.offsetWidth,
              (e.style.width = n),
              (e.style.overflowY = t);
          }
          function n(e) {
            for (
              var t = [];
              e && e.parentNode && e.parentNode instanceof Element;

            )
              e.parentNode.scrollTop &&
                t.push({
                  node: e.parentNode,
                  scrollTop: e.parentNode.scrollTop,
                }),
                (e = e.parentNode);
            return t;
          }
          function r() {
            if (0 !== e.scrollHeight) {
              var t = n(e),
                r =
                  document.documentElement &&
                  document.documentElement.scrollTop;
              (e.style.height = ""),
                (e.style.height = e.scrollHeight + s + "px"),
                (l = e.clientWidth),
                t.forEach(function (e) {
                  e.node.scrollTop = e.scrollTop;
                }),
                r && (document.documentElement.scrollTop = r);
            }
          }
          function o() {
            r();
            var n = Math.round(parseFloat(e.style.height)),
              o = window.getComputedStyle(e, null),
              i =
                "content-box" === o.boxSizing
                  ? Math.round(parseFloat(o.height))
                  : e.offsetHeight;
            if (
              (i < n
                ? "hidden" === o.overflowY &&
                  (t("scroll"),
                  r(),
                  (i =
                    "content-box" === o.boxSizing
                      ? Math.round(
                          parseFloat(window.getComputedStyle(e, null).height)
                        )
                      : e.offsetHeight))
                : "hidden" !== o.overflowY &&
                  (t("hidden"),
                  r(),
                  (i =
                    "content-box" === o.boxSizing
                      ? Math.round(
                          parseFloat(window.getComputedStyle(e, null).height)
                        )
                      : e.offsetHeight)),
              c !== i)
            ) {
              c = i;
              var s = a("autosize:resized");
              try {
                e.dispatchEvent(s);
              } catch (e) {}
            }
          }
          if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) {
            var s = null,
              l = null,
              c = null,
              u = function () {
                e.clientWidth !== l && o();
              },
              d = function (t) {
                window.removeEventListener("resize", u, !1),
                  e.removeEventListener("input", o, !1),
                  e.removeEventListener("keyup", o, !1),
                  e.removeEventListener("autosize:destroy", d, !1),
                  e.removeEventListener("autosize:update", o, !1),
                  Object.keys(t).forEach(function (n) {
                    e.style[n] = t[n];
                  }),
                  i.delete(e);
              }.bind(e, {
                height: e.style.height,
                resize: e.style.resize,
                overflowY: e.style.overflowY,
                overflowX: e.style.overflowX,
                wordWrap: e.style.wordWrap,
              });
            e.addEventListener("autosize:destroy", d, !1),
              "onpropertychange" in e &&
                "oninput" in e &&
                e.addEventListener("keyup", o, !1),
              window.addEventListener("resize", u, !1),
              e.addEventListener("input", o, !1),
              e.addEventListener("autosize:update", o, !1),
              (e.style.overflowX = "hidden"),
              (e.style.wordWrap = "break-word"),
              i.set(e, { destroy: d, update: o }),
              (function () {
                var t = window.getComputedStyle(e, null);
                "vertical" === t.resize
                  ? (e.style.resize = "none")
                  : "both" === t.resize && (e.style.resize = "horizontal"),
                  (s =
                    "content-box" === t.boxSizing
                      ? -(
                          parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)
                        )
                      : parseFloat(t.borderTopWidth) +
                        parseFloat(t.borderBottomWidth)),
                  isNaN(s) && (s = 0),
                  o();
              })();
          }
        }
        function r(e) {
          var t = i.get(e);
          t && t.destroy();
        }
        function o(e) {
          var t = i.get(e);
          t && t.update();
        }
        var i =
            "function" == typeof Map
              ? new Map()
              : (function () {
                  var e = [],
                    t = [];
                  return {
                    has: function (t) {
                      return e.indexOf(t) > -1;
                    },
                    get: function (n) {
                      return t[e.indexOf(n)];
                    },
                    set: function (n, r) {
                      -1 === e.indexOf(n) && (e.push(n), t.push(r));
                    },
                    delete: function (n) {
                      var r = e.indexOf(n);
                      r > -1 && (e.splice(r, 1), t.splice(r, 1));
                    },
                  };
                })(),
          a = function (e) {
            return new Event(e, { bubbles: !0 });
          };
        try {
          new Event("test");
        } catch (e) {
          a = function (e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !1), t;
          };
        }
        var s = null;
        "undefined" == typeof window ||
        "function" != typeof window.getComputedStyle
          ? ((s = function (e) {
              return e;
            }),
            (s.destroy = function (e) {
              return e;
            }),
            (s.update = function (e) {
              return e;
            }))
          : ((s = function (e, t) {
              return (
                e &&
                  Array.prototype.forEach.call(
                    e.length ? e : [e],
                    function (e) {
                      return n(e);
                    }
                  ),
                e
              );
            }),
            (s.destroy = function (e) {
              return (
                e && Array.prototype.forEach.call(e.length ? e : [e], r), e
              );
            }),
            (s.update = function (e) {
              return (
                e && Array.prototype.forEach.call(e.length ? e : [e], o), e
              );
            })),
          (t.default = s),
          (e.exports = t.default);
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e) {
        return !!e && this.init(e), this;
      }
      function i(e) {
        return new o(e);
      }
      var a = n(26),
        s = r(a),
        l = n(17),
        c = r(l),
        u = n(20),
        d = r(u),
        p = n(6),
        f = r(p),
        h = n(2),
        v = n(24),
        g = r(v),
        m = n(0),
        y = r(m),
        b = n(22),
        w = r(b),
        x = n(19),
        k = r(x),
        _ = n(23),
        A = n(25),
        S = r(A),
        O = n(21),
        $ = r(O),
        E = {
          comment: "",
          nick: "",
          mail: "",
          link: "",
          ua: y.default.ua,
          url: "",
          QQAvatar: "",
        },
        j = "",
        T = {
          cdn: "https://gravatar.loli.net/avatar/",
          ds: [
            "mp",
            "identicon",
            "monsterid",
            "wavatar",
            "robohash",
            "retro",
            "",
          ],
          params: "",
          hide: !1,
        };
      (o.prototype.init = function (e) {
        if ("undefined" == typeof document)
          throw new Error(
            "Sorry, Valine does not support Server-side rendering."
          );
        var t = this;
        return (
          e &&
            ((e = y.default.extend(h.defaultConfig, e)),
            (t.i18n = (0, d.default)(e.lang || y.default.lang, e.langMode)),
            (t.config = e),
            (f.default.maps = (!!e.emojiMaps && e.emojiMaps) || f.default.maps),
            (f.default.cdn = (!!e.emojiCDN && e.emojiCDN) || f.default.cdn),
            t._init()),
          t
        );
      }),
        (o.prototype._init = function () {
          var e = this;
          try {
            var t = e.config,
              n = t.avatar,
              r = t.avatarForce,
              o = t.avatar_cdn,
              i = t.visitor,
              a = t.path,
              s = void 0 === a ? location.pathname : a,
              l = t.pageSize,
              c = t.recordIP;
            e.config.path = s.replace(/index\.html?$/, "");
            var u = T.ds,
              d = r ? "&q=" + h.RandomStr : "";
            (T.params =
              "?d=" + (u.indexOf(n) > -1 ? n : "mp") + "&v=" + h.VERSION + d),
              (T.hide = "hide" === n),
              (T.cdn = /^https?\:\/\//.test(o) ? o : T.cdn),
              (e.config.pageSize = isNaN(l) ? 10 : l < 1 ? 10 : l),
              c &&
                (0, _.recordIPFn)(function (e) {
                  return (E.ip = e);
                });
            var p = e.config.el || null,
              f = (0, y.default)(p);
            if ((p = p instanceof HTMLElement ? p : f[f.length - 1] || null)) {
              (e.$el = (0, y.default)(p)),
                e.$el.addClass("v").attr("data-class", "v"),
                T.hide && e.$el.addClass("hide-avatar"),
                (e.config.meta = (
                  e.config.guest_info ||
                  e.config.meta ||
                  h.defaultMeta
                ).filter(function (e) {
                  return h.defaultMeta.indexOf(e) > -1;
                })),
                (e.config.requiredFields = e.config.requiredFields.filter(
                  function (e) {
                    return h.defaultMeta.indexOf(e) > -1;
                  }
                ));
              var v = (0 == e.config.meta.length
                  ? h.defaultMeta
                  : e.config.meta
                ).map(function (t) {
                  var n = "mail" == t ? "email" : "text";
                  return h.defaultMeta.indexOf(t) > -1
                    ? '<input name="' +
                        t +
                        '" placeholder="' +
                        e.i18n.t(t) +
                        '" class="v' +
                        t +
                        ' vinput" type="' +
                        n +
                        '">'
                    : "";
                }),
                g =
                  '<div class="vpanel"><div class="vwrap"><p class="cancel-reply text-right" style="display:none;" title="' +
                  e.i18n.t("cancelReply") +
                  '"><svg class="vicon cancel-reply-btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4220" width="22" height="22"><path d="M796.454 985H227.545c-50.183 0-97.481-19.662-133.183-55.363-35.7-35.701-55.362-83-55.362-133.183V227.545c0-50.183 19.662-97.481 55.363-133.183 35.701-35.7 83-55.362 133.182-55.362h568.909c50.183 0 97.481 19.662 133.183 55.363 35.701 35.702 55.363 83 55.363 133.183v568.909c0 50.183-19.662 97.481-55.363 133.183S846.637 985 796.454 985zM227.545 91C152.254 91 91 152.254 91 227.545v568.909C91 871.746 152.254 933 227.545 933h568.909C871.746 933 933 871.746 933 796.454V227.545C933 152.254 871.746 91 796.454 91H227.545z" p-id="4221"></path><path d="M568.569 512l170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" p-id="4222" ></path></svg></p><div class="vheader item' +
                  v.length +
                  '">' +
                  v.join("") +
                  '</div><div class="vedit"><textarea id="veditor" class="veditor vinput" placeholder="' +
                  e.config.placeholder +
                  '"></textarea><div class="vrow"><div class="vcol vcol-60 status-bar"></div><div class="vcol vcol-40 vctrl text-right"><span title="' +
                  e.i18n.t("emoji") +
                  '"  class="vicon vemoji-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16172" width="22" height="22" ><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zM512 56.888889a455.111111 455.111111 0 1 0 455.111111 455.111111 455.111111 455.111111 0 0 0-455.111111-455.111111zM312.888889 512A85.333333 85.333333 0 1 1 398.222222 426.666667 85.333333 85.333333 0 0 1 312.888889 512z" p-id="16173"></path><path d="M512 768A142.222222 142.222222 0 0 1 369.777778 625.777778a28.444444 28.444444 0 0 1 56.888889 0 85.333333 85.333333 0 0 0 170.666666 0 28.444444 28.444444 0 0 1 56.888889 0A142.222222 142.222222 0 0 1 512 768z" p-id="16174"></path><path d="M782.222222 391.964444l-113.777778 59.733334a29.013333 29.013333 0 0 1-38.684444-10.808889 28.444444 28.444444 0 0 1 10.24-38.684445l113.777778-56.888888a28.444444 28.444444 0 0 1 38.684444 10.24 28.444444 28.444444 0 0 1-10.24 36.408888z" p-id="16175"></path><path d="M640.568889 451.697778l113.777778 56.888889a27.875556 27.875556 0 0 0 38.684444-10.24 27.875556 27.875556 0 0 0-10.24-38.684445l-113.777778-56.888889a28.444444 28.444444 0 0 0-38.684444 10.808889 28.444444 28.444444 0 0 0 10.24 38.115556z" p-id="16176"></path></svg></span><span title="' +
                  e.i18n.t("preview") +
                  '" class="vicon vpreview-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17688" width="22" height="22"><path d="M502.390154 935.384615a29.538462 29.538462 0 1 1 0 59.076923H141.430154C79.911385 994.461538 29.538462 946.254769 29.538462 886.153846V137.846154C29.538462 77.745231 79.950769 29.538462 141.390769 29.538462h741.218462c61.44 0 111.852308 48.206769 111.852307 108.307692v300.268308a29.538462 29.538462 0 1 1-59.076923 0V137.846154c0-26.899692-23.355077-49.230769-52.775384-49.230769H141.390769c-29.420308 0-52.775385 22.331077-52.775384 49.230769v748.307692c0 26.899692 23.355077 49.230769 52.775384 49.230769h360.999385z" p-id="17689"></path><path d="M196.923077 216.615385m29.538461 0l374.153847 0q29.538462 0 29.538461 29.538461l0 0q0 29.538462-29.538461 29.538462l-374.153847 0q-29.538462 0-29.538461-29.538462l0 0q0-29.538462 29.538461-29.538461Z" p-id="17690"></path><path d="M649.846154 846.769231a216.615385 216.615385 0 1 0 0-433.230769 216.615385 216.615385 0 0 0 0 433.230769z m0 59.076923a275.692308 275.692308 0 1 1 0-551.384616 275.692308 275.692308 0 0 1 0 551.384616z" p-id="17691"></path><path d="M807.398383 829.479768m20.886847-20.886846l0 0q20.886846-20.886846 41.773692 0l125.321079 125.321079q20.886846 20.886846 0 41.773693l0 0q-20.886846 20.886846-41.773693 0l-125.321078-125.321079q-20.886846-20.886846 0-41.773693Z" p-id="17692"></path></svg></span></div></div></div><div class="vrow"><div class="vcol vcol-30" ><a alt="Markdown is supported" href="https://guides.github.com/features/mastering-markdown/" class="vicon" target="_blank"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a></div><div class="vcol vcol-70 text-right"><button type="button"  title="Cmd|Ctrl+Enter" class="vsubmit vbtn">' +
                  e.i18n.t("submit") +
                  '</button></div></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div><div style="display:none;" class="vmark"></div></div></div><div class="vcount" style="display:none;"><span class="vnum">0</span> ' +
                  e.i18n.t("comments") +
                  '</div><div class="vload-top text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vcards"></div><div class="vload-bottom text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vempty" style="display:none;"></div><div class="vpage txt-center" style="display:none"><button type="button" class="vmore vbtn">' +
                  e.i18n.t("more") +
                  '</button></div><div class="vpower txt-right">Powered By <a href="https://valine.js.org" target="_blank">Valine</a><br>v' +
                  h.VERSION +
                  "</div>";
              e.$el.html(g),
                e.$el.find(".cancel-reply").on("click", function (t) {
                  e.reset();
                });
              var m = e.$el.find(".vempty");
              e.$nodata = {
                show: function (t) {
                  return m.html(t || e.i18n.t("sofa")).show(), e;
                },
                hide: function () {
                  return m.hide(), e;
                },
              };
              var b = e.$el.find(".vload-bottom"),
                w = e.$el.find(".vload-top");
              e.$loading = {
                show: function (t) {
                  return (t && w.show()) || b.show(), e.$nodata.hide(), e;
                },
                hide: function () {
                  return (
                    w.hide(),
                    b.hide(),
                    0 === e.$el.find(".vcard").length && e.$nodata.show(),
                    e
                  );
                },
              };
            }
            (0, k.default)(e.config, function (t) {
              var n = (0, y.default)(".valine-comment-count"),
                r = 0;
              !(function t(n) {
                var o = n[r++];
                if (o) {
                  var i = (0, y.default)(o).attr("data-xid");
                  !!i &&
                    e
                      .Q(i)
                      .count()
                      .then(function (e) {
                        (o.innerText = e), t(n);
                      })
                      .catch(function (e) {
                        o.innerText = 0;
                      });
                }
              })(n),
                i && I.add(AV.Object.extend("Counter"), e.config.path),
                e.$el && e.bind();
            });
          } catch (t) {
            (0, $.default)(e, t, "init");
          }
        });
      var C = function (e, t) {
          var n = new e(),
            r = new AV.ACL();
          r.setPublicReadAccess(!0),
            r.setPublicWriteAccess(!0),
            n.setACL(r),
            n.set("url", t.url),
            n.set("xid", t.xid),
            n.set("title", t.title),
            n.set("time", 1),
            n
              .save()
              .then(function (e) {
                (0, y.default)(t.el).find(".leancloud-visitors-count").text(1);
              })
              .catch(function (e) {});
        },
        I = {
          add: function (e, t) {
            var n = this,
              r = (0, y.default)(".leancloud_visitors,.leancloud-visitors");
            if (1 === r.length) {
              var o = r[0],
                i = decodeURI((0, y.default)(o).attr("id")),
                a = (0, y.default)(o).attr("data-flag-title"),
                s = encodeURI(i),
                l = { el: o, url: i, xid: s, title: a };
              if (decodeURI(i) === decodeURI(t)) {
                var c = new AV.Query(e);
                c.equalTo("url", i),
                  c
                    .find()
                    .then(function (t) {
                      if (t.length > 0) {
                        var n = t[0];
                        n.increment("time"),
                          n
                            .save()
                            .then(function (e) {
                              (0, y.default)(o)
                                .find(".leancloud-visitors-count")
                                .text(e.get("time"));
                            })
                            .catch(function (e) {});
                      } else C(e, l);
                    })
                    .catch(function (t) {
                      101 == t.code ? C(e, l) : (0, $.default)(n, t);
                    });
              } else I.show(e, r);
            } else I.show(e, r);
          },
          show: function (e, t) {
            var n = [];
            if (
              (t.forEach(function (e) {
                var t = (0, y.default)(e).find(".leancloud-visitors-count");
                t && t.text("0"),
                  n.push(
                    /\%/.test((0, y.default)(e).attr("id"))
                      ? decodeURI((0, y.default)(e).attr("id"))
                      : (0, y.default)(e).attr("id")
                  );
              }),
              n.length)
            ) {
              var r = new AV.Query(e);
              r.containedIn("url", n),
                r
                  .find()
                  .then(function (e) {
                    e.length > 0 &&
                      t.forEach(function (t) {
                        e.forEach(function (e) {
                          var n = e.get("xid") || encodeURI(e.get("url")),
                            r = e.get("time"),
                            o = (0, y.default)(t),
                            i = o.attr("id");
                          if ((/\%/.test(i) ? i : encodeURI(i)) == n) {
                            var a = o.find(".leancloud-visitors-count");
                            a && a.text(r);
                          }
                        });
                      });
                  })
                  .catch(function (e) {});
            }
          },
        };
      (o.prototype.Q = function (e) {
        var t = this,
          n = arguments.length,
          r = t.config.clazzName;
        if (1 == n) {
          var o = new AV.Query(r);
          o.doesNotExist("rid");
          var i = new AV.Query(r);
          i.equalTo("rid", "");
          var a = AV.Query.or(o, i);
          return (
            "*" === e ? a.exists("url") : a.equalTo("url", decodeURI(e)),
            a.addDescending("createdAt"),
            a.addDescending("insertedAt"),
            a
          );
        }
        var s = JSON.stringify(arguments[1]).replace(/(\[|\])/g, ""),
          l =
            "select * from " +
            r +
            " where rid in (" +
            s +
            ") order by -createdAt,-createdAt";
        return AV.Query.doCloudQuery(l);
      }),
        (o.prototype.installLocale = function (e, t) {
          var n = this;
          return n.i18n(e, t), n;
        }),
        (o.prototype.setPath = function (e) {
          return (this.config.path = e), this;
        }),
        (o.prototype.bind = function () {
          var e = this,
            t = e.$el.find(".vemojis"),
            n = e.$el.find(".vpreview"),
            r = e.$el.find(".vemoji-btn"),
            o = e.$el.find(".vpreview-btn"),
            i = e.$el.find(".veditor"),
            a = f.default.maps,
            l = !1,
            u = function (e) {
              var n = [];
              for (var r in a)
                a.hasOwnProperty(r) &&
                  !!f.default.build(r) &&
                  n.push(
                    '<i title="' + r + '" >' + f.default.build(r) + "</i>"
                  );
              t.html(n.join("")),
                (l = !0),
                t.find("i").on("click", function (e) {
                  e.preventDefault(),
                    x(i[0], " :" + (0, y.default)(this).attr("title") + ":");
                });
            };
          (e.$emoji = {
            show: function () {
              return (
                !l && u(),
                e.$preview.hide(),
                t.show(),
                r.addClass("actived"),
                e.$emoji
              );
            },
            hide: function () {
              return r.removeClass("actived"), t.hide(), e.$emoji;
            },
          }),
            (e.$preview = {
              show: function () {
                return (
                  j
                    ? (e.$emoji.hide(),
                      o.addClass("actived"),
                      n.html(j).show(),
                      M())
                    : e.$preview.hide(),
                  e.$preview
                );
              },
              hide: function () {
                return o.removeClass("actived"), n.hide().html(""), e.$preview;
              },
            });
          var d = function (t) {
            var r = (0, w.default)(t.val() || "");
            r || e.$preview.hide(),
              j != r &&
                ((j = r),
                o.hasClass("actived") > -1 && j != n.html() && n.html(j),
                (0, c.default)(t[0]),
                M());
          };
          r.on("click", function (t) {
            r.hasClass("actived") ? e.$emoji.hide() : e.$emoji.show();
          }),
            o.on("click", function (t) {
              o.hasClass("actived") ? e.$preview.hide() : e.$preview.show();
            });
          var p = e.config.meta,
            v = {},
            m = { veditor: "comment" };
          p.forEach(function (e) {
            m["v" + e] = e;
          });
          for (var b in m)
            m.hasOwnProperty(b) &&
              (function () {
                var t = m[b],
                  n = e.$el.find("." + b);
                (v[t] = n),
                  n.on("input change blur propertychange", function (r) {
                    e.config.enableQQ &&
                      "blur" === r.type &&
                      "nick" === t &&
                      (isNaN(n.val())
                        ? y.default.store.get(h.QQCacheKey) &&
                          y.default.store.get(h.QQCacheKey).nick != n.val() &&
                          (y.default.store.remove(h.QQCacheKey),
                          (E.nick = n.val()),
                          (E.mail = ""),
                          (E.QQAvatar = ""))
                        : (0, _.fetchQQFn)(n.val(), function (e) {
                            var t = e.nick || n.val(),
                              r = e.qq + "@qq.com";
                            (0, y.default)(".vnick").val(t),
                              (0, y.default)(".vmail").val(r),
                              (E.nick = t),
                              (E.mail = r),
                              (E.QQAvatar = e.pic);
                          })),
                      "comment" === t
                        ? d(n)
                        : (E[t] = y.default
                            .escape(n.val().replace(/(^\s*)|(\s*$)/g, ""))
                            .substring(0, 40));
                  });
              })();
          var x = function (e, t) {
              if (document.selection) {
                e.focus();
                (document.selection.createRange().text = t), e.focus();
              } else if (e.selectionStart || "0" == e.selectionStart) {
                var n = e.selectionStart,
                  r = e.selectionEnd,
                  o = e.scrollTop;
                (e.value =
                  e.value.substring(0, n) +
                  t +
                  e.value.substring(r, e.value.length)),
                  e.focus(),
                  (e.selectionStart = n + t.length),
                  (e.selectionEnd = n + t.length),
                  (e.scrollTop = o);
              } else e.focus(), (e.value += t);
              setTimeout(function (t) {
                d((0, y.default)(e));
              }, 100);
            },
            k = { no: 1, size: e.config.pageSize, skip: e.config.pageSize },
            A = e.$el.find(".vpage");
          A.on("click", function (e) {
            A.hide(), k.no++, O();
          });
          var O = function () {
            var t = k.size,
              n = k.no,
              r = Number(e.$el.find(".vnum").text());
            e.$loading.show();
            var o = e.Q(e.config.path);
            o.limit(t),
              o.skip((n - 1) * t),
              o
                .find()
                .then(function (o) {
                  if (((k.skip = k.size), o && o.length)) {
                    var i = [];
                    o.forEach(function (t) {
                      i.push(t.id), C(t, e.$el.find(".vcards"), !0);
                    }),
                      e.Q(e.config.path, i).then(function (e) {
                        ((e && e.results) || [])
                          .forEach(function (e) {
                            C(
                              e,
                              (0, y.default)(
                                '.vquote[data-self-id="' + e.get("rid") + '"]'
                              )
                            );
                          })
                          .catch(function (e) {});
                      }),
                      t * n < r ? A.show() : A.hide();
                  } else e.$nodata.show();
                  e.$loading.hide();
                })
                .catch(function (t) {
                  e.$loading.hide(), (0, $.default)(e, t, "query");
                });
          };
          e.Q(e.config.path)
            .count()
            .then(function (t) {
              t > 0
                ? (e.$el.find(".vcount").show().find(".vnum").text(t), O())
                : e.$loading.hide();
            })
            .catch(function (t) {
              (0, $.default)(e, t, "count");
            });
          var C = function (t, n, r) {
              var o = (0, y.default)(
                  '<div class="vcard" id="' + t.id + '"></div>'
                ),
                i = t.get("ua"),
                a = "";
              i &&
                !/ja/.test(e.config.lang) &&
                ((i = y.default.detect(i)),
                (a =
                  '<span class="vsys">' +
                  i.browser +
                  " " +
                  i.version +
                  '</span> <span class="vsys">' +
                  i.os +
                  " " +
                  i.osVersion +
                  "</span>")),
                "*" === e.config.path &&
                  (a =
                    '<a href="' +
                    t.get("url") +
                    '" class="vsys">' +
                    t.get("url") +
                    "</a>");
              var l = t.get("link")
                  ? /^https?\:\/\//.test(t.get("link"))
                    ? t.get("link")
                    : "http://" + t.get("link")
                  : "",
                c = l
                  ? '<a class="vnick" rel="nofollow" href="' +
                    l +
                    '" target="_blank" >' +
                    t.get("nick") +
                    "</a>"
                  : '<span class="vnick">' + t.get("nick") + "</span>",
                u = T.hide
                  ? ""
                  : e.config.enableQQ && t.get("QQAvatar")
                  ? '<img class="vimg" src="' +
                    t.get("QQAvatar") +
                    '" referrerPolicy="no-referrer"/>'
                  : '<img class="vimg" src="' +
                    (T.cdn + (0, s.default)(t.get("mail")) + T.params) +
                    '">',
                d =
                  u +
                  '<div class="vh"><div class="vhead">' +
                  c +
                  " " +
                  a +
                  '</div><div class="vmeta"><span class="vtime" >' +
                  (0, g.default)(t.get("insertedAt"), e.i18n) +
                  '</span><span class="vat" data-vm-id="' +
                  (t.get("rid") || t.id) +
                  '" data-self-id="' +
                  t.id +
                  '">' +
                  e.i18n.t("reply") +
                  '</span></div><div class="vcontent" data-expand="' +
                  e.i18n.t("expand") +
                  '">' +
                  (0, S.default)(t.get("comment")) +
                  '</div><div class="vreply-wrapper" data-self-id="' +
                  t.id +
                  '"></div><div class="vquote" data-self-id="' +
                  t.id +
                  '"></div></div>';
              o.html(d);
              var p = o.find(".vat");
              o.find("a").forEach(function (e) {
                e &&
                  !(0, y.default)(e).hasClass("at") &&
                  (0, y.default)(e).attr({ target: "_blank", rel: "nofollow" });
              }),
                r ? n.append(o) : n.prepend(o);
              var f = o.find(".vcontent");
              f && R(f), p && P(p, t), M();
            },
            I = {},
            P = function (t, n) {
              t.on("click", function (r) {
                var o = t.attr("data-vm-id"),
                  i = t.attr("data-self-id"),
                  a = e.$el.find(".vwrap"),
                  s = "@" + y.default.escape(n.get("nick"));
                (0, y.default)('.vreply-wrapper[data-self-id="' + i + '"]')
                  .append(a)
                  .find(".cancel-reply")
                  .show(),
                  (I = {
                    at: y.default.escape(s) + " ",
                    rid: o,
                    pid: i,
                    rmail: n.get("mail"),
                  }),
                  v.comment.attr({ placeholder: s })[0].focus();
              });
            },
            M = function () {
              setTimeout(function () {
                try {
                  "MathJax" in window &&
                    "version" in window.MathJax &&
                    ((/^3.*/.test(window.MathJax.version) &&
                      MathJax.typeset()) ||
                      MathJax.Hub.Queue([
                        "Typeset",
                        MathJax.Hub,
                        document.querySelector(".v"),
                      ])),
                    "renderMathInElement" in window &&
                      renderMathInElement((0, y.default)(".v")[0], {
                        delimiters: [
                          { left: "$$", right: "$$", display: !0 },
                          { left: "$", right: "$", display: !1 },
                        ],
                      });
                } catch (e) {}
              }, 100);
            },
            R = function (e) {
              setTimeout(function () {
                e[0].offsetHeight > 200 &&
                  (e.addClass("expand"),
                  e.on("click", function (t) {
                    e.removeClass("expand");
                  }));
              });
            };
          !(function (t) {
            if ((t = y.default.store.get(h.MetaCacheKey) || t))
              for (var n in p) {
                var r = p[n];
                e.$el.find(".v" + r).val(y.default.unescape(t[r])),
                  (E[r] = t[r]);
              }
            var o = y.default.store.get(h.QQCacheKey);
            E.QQAvatar = (e.config.enableQQ && !!o && o.pic) || "";
          })(),
            (e.reset = function () {
              (E.comment = ""),
                v.comment.val(""),
                d(v.comment),
                v.comment.attr("placeholder", e.config.placeholder),
                (I = {}),
                e.$preview.hide(),
                e.$el.find(".vpanel").append(e.$el.find(".vwrap")),
                e.$el.find(".cancel-reply").hide(),
                (j = "");
            });
          var z = e.$el.find(".vsubmit"),
            L = function (t) {
              if (
                e.config.requiredFields.indexOf("nick") > -1 &&
                E.nick.length < 3
              )
                return (
                  v.nick[0].focus(),
                  void e.$el
                    .find(".status-bar")
                    .text("" + e.i18n.t("nickFail"))
                    .empty(3e3)
                );
              if (
                e.config.requiredFields.indexOf("mail") > -1 &&
                !/[\w-\.]+@([\w-]+\.)+[a-z]{2,3}/.test(E.mail)
              )
                return (
                  v.mail[0].focus(),
                  void e.$el
                    .find(".status-bar")
                    .text("" + e.i18n.t("mailFail"))
                    .empty(3e3)
                );
              if ("" == j) return void v.comment[0].focus();
              (E.comment = j), (E.nick = E.nick || "Anonymous");
              var n = y.default.store.get("vlx");
              if (n) {
                if (Date.now() / 1e3 - n / 1e3 < 20)
                  return void e.$el
                    .find(".status-bar")
                    .text(e.i18n.t("busy"))
                    .empty(3e3);
              }
              U();
            },
            F = function () {
              var e = new AV.ACL();
              return e.setPublicReadAccess(!0), e.setPublicWriteAccess(!1), e;
            },
            U = function () {
              y.default.store.set("vlx", Date.now()),
                z.attr({ disabled: !0 }),
                e.$loading.show(!0);
              var t = AV.Object.extend(e.config.clazzName || "Comment"),
                n = new t();
              if (
                ((E.url = decodeURI(e.config.path)),
                (E.insertedAt = new Date()),
                I.rid)
              ) {
                var r = I.pid || I.rid;
                n.set("rid", I.rid),
                  n.set("pid", r),
                  (E.comment = j.replace(
                    "<p>",
                    '<p><a class="at" href="#' + r + '">' + I.at + "</a> , "
                  ));
              }
              for (var o in E)
                if (E.hasOwnProperty(o)) {
                  var i = E[o];
                  n.set(o, i);
                }
              n.setACL(F()),
                n
                  .save()
                  .then(function (t) {
                    "Anonymous" != E.nick &&
                      y.default.store.set(h.MetaCacheKey, {
                        nick: E.nick,
                        link: E.link,
                        mail: E.mail,
                      });
                    var n = e.$el.find(".vnum");
                    try {
                      I.rid
                        ? C(
                            t,
                            (0, y.default)(
                              '.vquote[data-self-id="' + I.rid + '"]'
                            ),
                            !0
                          )
                        : (Number(n.text())
                            ? n.text(Number(n.text()) + 1)
                            : e.$el
                                .find(".vcount")
                                .show()
                                .find(".vnum")
                                .text(Number(n.text()) + 1),
                          C(t, e.$el.find(".vcards")),
                          k.skip++),
                        z.removeAttr("disabled"),
                        e.$loading.hide(),
                        e.reset();
                    } catch (t) {
                      (0, $.default)(e, t, "save");
                    }
                  })
                  .catch(function (t) {
                    (0, $.default)(e, t, "commitEvt");
                  });
            };
          z.on("click", L),
            (0, y.default)(document)
              .on("keydown", function (e) {
                e = event || e;
                var t = e.keyCode || e.which || e.charCode;
                ((e.ctrlKey || e.metaKey) && 13 === t && L(), 9 === t) &&
                  "veditor" == (document.activeElement.id || "") &&
                  (e.preventDefault(), x(i[0], "    "));
              })
              .on("paste", function (e) {
                var t =
                  "clipboardData" in e
                    ? e.clipboardData
                    : (e.originalEvent && e.originalEvent.clipboardData) ||
                      window.clipboardData;
                t && B(t.items, !0);
              }),
            i.on("dragenter dragleave dragover drop", function (e) {
              e.stopPropagation(),
                e.preventDefault(),
                "drop" === e.type && B(e.dataTransfer.items);
            });
          var B = function (e, t) {
              for (var n = [], r = 0, o = e.length; r < o; r++) {
                var a = e[r];
                if ("string" === a.kind && a.type.match("^text/html"))
                  !t &&
                    a.getAsString(function (e) {
                      e && x(i[0], e.replace(/<[^>]+>/g, ""));
                    });
                else if (-1 !== a.type.indexOf("image")) {
                  n.push(a.getAsFile());
                  continue;
                }
              }
              N(n);
            },
            N = function t(n, r) {
              r = r || 0;
              var o = n.length;
              if (o > 0) {
                var a = n[r];
                z.attr({ disabled: !0 });
                var s = "![Uploading " + a.name + "...]()";
                x(i[0], s),
                  Q(a, function (l) {
                    500 != l.code
                      ? (i.val(
                          i
                            .val()
                            .replace(
                              s,
                              "![" + a.name + "](" + l.data.url + ")\r\n"
                            )
                        ),
                        (0, c.default)(i[0]),
                        ++r < o ? t(n, r) : z.removeAttr("disabled"))
                      : (i.val(i.val().replace(s, "")),
                        (0, c.default)(i[0]),
                        e.$el.find(".status-bar").text(l.msg).empty(3e3),
                        z.removeAttr("disabled"));
                  });
              }
            },
            Q = function (e, t) {
              var n = new FormData();
              n.append("image", e),
                y.default.ajax({
                  type: "post",
                  url: "https://pic.alexhchu.com/api/upload",
                  data: n,
                  success: function (e) {
                    t && t(e);
                  },
                });
            };
        }),
        (e.exports = i),
        (e.exports.default = i);
    },
    function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      var r = n(0),
        o = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(r),
        i = !1;
      t.default = function (e, t) {
        if ("AV" in window) {
          var n = window.AV.version || window.AV.VERSION;
          parseInt(n.split(".")[0]) > 2
            ? (i = !!AV.applicationId && !!AV.applicationKey)
            : o.default.deleteInWin("AV", 0);
        }
        i
          ? t && t()
          : o.default.sdkLoader(
              "//cdn.jsdelivr.net/npm/leancloud-storage@3/dist/av-min.js",
              "AV",
              function (n) {
                var r = "https://",
                  o = "",
                  a = e.app_id || e.appId,
                  s = e.app_key || e.appKey;
                if (!e.serverURLs)
                  switch (a.slice(-9)) {
                    case "-9Nh9j0Va":
                      r += "tab.";
                      break;
                    case "-MdYXbMMI":
                      r += "us.";
                  }
                (o = e.serverURLs || r + "avoscloud.com"),
                  AV.init({ appId: a, appKey: s, serverURLs: o }),
                  (i = !0),
                  t && t();
              }
            );
      };
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.__esModule = !0;
      var o = n(37),
        i = r(o),
        a = n(56),
        s = r(a),
        l = n(57),
        c = r(l),
        u = n(54),
        d = r(u),
        p = n(55),
        f = r(p),
        h = {
          zh: s.default,
          "zh-cn": s.default,
          "zh-CN": s.default,
          "zh-TW": c.default,
          en: d.default,
          "en-US": d.default,
          ja: f.default,
          "ja-JP": f.default,
        };
      t.default = function (e, t) {
        return (
          !h[e] && e && t && (h[e] = t),
          new i.default({ phrases: h[e || "zh"], locale: e })
        );
      };
    },
    function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.default = function (e, t) {
          if (
            (e.$el && e.$loading.hide().$nodata.hide(),
            "[object Error]" === {}.toString.call(t))
          ) {
            var n = t.code || t.message || t.error || "";
            if (isNaN(n))
              e.$el &&
                e.$nodata.show(
                  '<pre style="text-align:left;"> ' +
                    JSON.stringify(t) +
                    "</pre>"
                );
            else {
              var r = e.i18n.t("code-" + n),
                o =
                  (r == "code-" + n ? void 0 : r) || t.message || t.error || "";
              101 == n || -1 == n
                ? e.$nodata.show()
                : e.$el &&
                  e.$nodata.show(
                    '<pre style="text-align:left;">Code ' +
                      n +
                      ": " +
                      o +
                      "</pre>"
                  );
            }
          } else
            e.$el &&
              e.$nodata.show(
                '<pre style="text-align:left;">' + JSON.stringify(t) + "</pre>"
              );
        });
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.__esModule = !0;
      var o = n(36),
        i = r(o),
        a = n(0),
        s = r(a),
        l = n(6),
        c = r(l),
        u = n(33),
        d = new o.Renderer();
      (d.code = function (e, t) {
        return (
          '<pre><code class="hljs language-' +
          t +
          '">' +
          (!t || !hljs.getLanguage(t)
            ? s.default.escape(e)
            : hljs.highlight(t, e).value) +
          "</code></pre>"
        );
      }),
        i.default.setOptions({
          renderer: "hljs" in window ? d : new o.Renderer(),
          highlight: function (e, t) {
            return "hljs" in window
              ? (t && hljs.getLanguage(t) && hljs.highlight(t, e, !0).value) ||
                  hljs.highlightAuto(e).value
              : u(e);
          },
          gfm: !0,
          tables: !0,
          breaks: !0,
          pedantic: !1,
          sanitize: !0,
          smartLists: !0,
          smartypants: !0,
          headerPrefi: "v-",
        }),
        (t.default = function (e) {
          return c.default.parse((0, i.default)(e));
        });
    },
    function (e, t, n) {
      "use strict";
      (t.__esModule = !0), (t.recordIPFn = t.fetchQQFn = void 0);
      var r = n(0),
        o = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(r),
        i = n(2),
        a = function (e, t) {
          var n = o.default.store.get(i.QQCacheKey);
          n && n.qq == e
            ? t && t(n)
            : o.default.ajax({
                type: "POST",
                url: "//valine.api.ioliu.cn/getqqinfo",
                data: { qq: e },
                success: function (e) {
                  e.errmsg || (o.default.store.set(i.QQCacheKey, e), t && t(e));
                },
              });
        },
        s = function (e) {
          o.default.sdkLoader("//api.ip.sb/jsonip?callback=getIP", "getIP"),
            (window.getIP = function (t) {
              e && e(t.ip), o.default.deleteInWin("getIP");
            });
        };
      (t.fetchQQFn = a), (t.recordIPFn = s);
    },
    function (e, t, n) {
      "use strict";
      var r = function (e, t) {
          if (!e) return "";
          try {
            var n = i(e).getTime(),
              r = new Date().getTime(),
              a = r - n,
              s = Math.floor(a / 864e5);
            if (0 === s) {
              var l = a % 864e5,
                c = Math.floor(l / 36e5);
              if (0 === c) {
                var u = l % 36e5,
                  d = Math.floor(u / 6e4);
                if (0 === d) {
                  var p = u % 6e4;
                  return Math.round(p / 1e3) + " " + t.t("seconds");
                }
                return d + " " + t.t("minutes");
              }
              return c + " " + t.t("hours");
            }
            return s < 0 ? t.t("now") : s < 8 ? s + " " + t.t("days") : o(e);
          } catch (e) {}
        },
        o = function (e) {
          var t = a(e.getDate(), 2),
            n = a(e.getMonth() + 1, 2);
          return a(e.getFullYear(), 2) + "-" + n + "-" + t;
        },
        i = function e(t) {
          return t instanceof Date
            ? t
            : !isNaN(t) || /^\d+$/.test(t)
            ? new Date(parseInt(t))
            : /GMT/.test(t || "")
            ? e(new Date(t).getTime())
            : ((t = (t || "")
                .replace(/(^\s*)|(\s*$)/g, "")
                .replace(/\.\d+/, "")
                .replace(/-/, "/")
                .replace(/-/, "/")
                .replace(/(\d)T(\d)/, "$1 $2")
                .replace(/Z/, " UTC")
                .replace(/([+-]\d\d):?(\d\d)/, " $1$2")),
              new Date(t));
        },
        a = function (e, t) {
          for (var n = e.toString(); n.length < t; ) n = "0" + n;
          return n;
        };
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      var r = n(51),
        o = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(r);
      t.default = function (e) {
        return (0, o.default)(e, {
          onTagAttr: function (e, t, n, r) {
            return i(e, t, n, r);
          },
          onIgnoreTagAttr: function (e, t, n, r) {
            return i(e, t, n, r);
          },
        }).replace(/\<\/?div\>/gi, "");
      };
      var i = function (e, t, n, r) {
        if (/code|pre|span/gi.test(e)) {
          if ("style" == t)
            return (
              t +
              '="' +
              (/^color/gi.test(n) ? n : "").replace(
                /(color:[#0-9a-fA-F]{1,6};?).+/gi,
                "$1"
              ) +
              '"'
            );
          if ("class" == t)
            return t + "='" + o.default.escapeAttrValue(n) + "'";
        }
        if ("img" === e && ["src", "class"].indexOf(t) > -1)
          return (
            t +
            '="' +
            o.default.escapeAttrValue(n) +
            '" referrerPolicy="no-referrer" '
          );
      };
    },
    function (e, t, n) {
      var r;
      !(function (o) {
        "use strict";
        function i(e, t) {
          var n = (65535 & e) + (65535 & t);
          return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
        }
        function a(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function s(e, t, n, r, o, s) {
          return i(a(i(i(t, e), i(r, s)), o), n);
        }
        function l(e, t, n, r, o, i, a) {
          return s((t & n) | (~t & r), e, t, o, i, a);
        }
        function c(e, t, n, r, o, i, a) {
          return s((t & r) | (n & ~r), e, t, o, i, a);
        }
        function u(e, t, n, r, o, i, a) {
          return s(t ^ n ^ r, e, t, o, i, a);
        }
        function d(e, t, n, r, o, i, a) {
          return s(n ^ (t | ~r), e, t, o, i, a);
        }
        function p(e, t) {
          (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
          var n,
            r,
            o,
            a,
            s,
            p = 1732584193,
            f = -271733879,
            h = -1732584194,
            v = 271733878;
          for (n = 0; n < e.length; n += 16)
            (r = p),
              (o = f),
              (a = h),
              (s = v),
              (p = l(p, f, h, v, e[n], 7, -680876936)),
              (v = l(v, p, f, h, e[n + 1], 12, -389564586)),
              (h = l(h, v, p, f, e[n + 2], 17, 606105819)),
              (f = l(f, h, v, p, e[n + 3], 22, -1044525330)),
              (p = l(p, f, h, v, e[n + 4], 7, -176418897)),
              (v = l(v, p, f, h, e[n + 5], 12, 1200080426)),
              (h = l(h, v, p, f, e[n + 6], 17, -1473231341)),
              (f = l(f, h, v, p, e[n + 7], 22, -45705983)),
              (p = l(p, f, h, v, e[n + 8], 7, 1770035416)),
              (v = l(v, p, f, h, e[n + 9], 12, -1958414417)),
              (h = l(h, v, p, f, e[n + 10], 17, -42063)),
              (f = l(f, h, v, p, e[n + 11], 22, -1990404162)),
              (p = l(p, f, h, v, e[n + 12], 7, 1804603682)),
              (v = l(v, p, f, h, e[n + 13], 12, -40341101)),
              (h = l(h, v, p, f, e[n + 14], 17, -1502002290)),
              (f = l(f, h, v, p, e[n + 15], 22, 1236535329)),
              (p = c(p, f, h, v, e[n + 1], 5, -165796510)),
              (v = c(v, p, f, h, e[n + 6], 9, -1069501632)),
              (h = c(h, v, p, f, e[n + 11], 14, 643717713)),
              (f = c(f, h, v, p, e[n], 20, -373897302)),
              (p = c(p, f, h, v, e[n + 5], 5, -701558691)),
              (v = c(v, p, f, h, e[n + 10], 9, 38016083)),
              (h = c(h, v, p, f, e[n + 15], 14, -660478335)),
              (f = c(f, h, v, p, e[n + 4], 20, -405537848)),
              (p = c(p, f, h, v, e[n + 9], 5, 568446438)),
              (v = c(v, p, f, h, e[n + 14], 9, -1019803690)),
              (h = c(h, v, p, f, e[n + 3], 14, -187363961)),
              (f = c(f, h, v, p, e[n + 8], 20, 1163531501)),
              (p = c(p, f, h, v, e[n + 13], 5, -1444681467)),
              (v = c(v, p, f, h, e[n + 2], 9, -51403784)),
              (h = c(h, v, p, f, e[n + 7], 14, 1735328473)),
              (f = c(f, h, v, p, e[n + 12], 20, -1926607734)),
              (p = u(p, f, h, v, e[n + 5], 4, -378558)),
              (v = u(v, p, f, h, e[n + 8], 11, -2022574463)),
              (h = u(h, v, p, f, e[n + 11], 16, 1839030562)),
              (f = u(f, h, v, p, e[n + 14], 23, -35309556)),
              (p = u(p, f, h, v, e[n + 1], 4, -1530992060)),
              (v = u(v, p, f, h, e[n + 4], 11, 1272893353)),
              (h = u(h, v, p, f, e[n + 7], 16, -155497632)),
              (f = u(f, h, v, p, e[n + 10], 23, -1094730640)),
              (p = u(p, f, h, v, e[n + 13], 4, 681279174)),
              (v = u(v, p, f, h, e[n], 11, -358537222)),
              (h = u(h, v, p, f, e[n + 3], 16, -722521979)),
              (f = u(f, h, v, p, e[n + 6], 23, 76029189)),
              (p = u(p, f, h, v, e[n + 9], 4, -640364487)),
              (v = u(v, p, f, h, e[n + 12], 11, -421815835)),
              (h = u(h, v, p, f, e[n + 15], 16, 530742520)),
              (f = u(f, h, v, p, e[n + 2], 23, -995338651)),
              (p = d(p, f, h, v, e[n], 6, -198630844)),
              (v = d(v, p, f, h, e[n + 7], 10, 1126891415)),
              (h = d(h, v, p, f, e[n + 14], 15, -1416354905)),
              (f = d(f, h, v, p, e[n + 5], 21, -57434055)),
              (p = d(p, f, h, v, e[n + 12], 6, 1700485571)),
              (v = d(v, p, f, h, e[n + 3], 10, -1894986606)),
              (h = d(h, v, p, f, e[n + 10], 15, -1051523)),
              (f = d(f, h, v, p, e[n + 1], 21, -2054922799)),
              (p = d(p, f, h, v, e[n + 8], 6, 1873313359)),
              (v = d(v, p, f, h, e[n + 15], 10, -30611744)),
              (h = d(h, v, p, f, e[n + 6], 15, -1560198380)),
              (f = d(f, h, v, p, e[n + 13], 21, 1309151649)),
              (p = d(p, f, h, v, e[n + 4], 6, -145523070)),
              (v = d(v, p, f, h, e[n + 11], 10, -1120210379)),
              (h = d(h, v, p, f, e[n + 2], 15, 718787259)),
              (f = d(f, h, v, p, e[n + 9], 21, -343485551)),
              (p = i(p, r)),
              (f = i(f, o)),
              (h = i(h, a)),
              (v = i(v, s));
          return [p, f, h, v];
        }
        function f(e) {
          var t,
            n = "",
            r = 32 * e.length;
          for (t = 0; t < r; t += 8)
            n += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
          return n;
        }
        function h(e) {
          var t,
            n = [];
          for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1)
            n[t] = 0;
          var r = 8 * e.length;
          for (t = 0; t < r; t += 8)
            n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
          return n;
        }
        function v(e) {
          return f(p(h(e), 8 * e.length));
        }
        function g(e, t) {
          var n,
            r,
            o = h(e),
            i = [],
            a = [];
          for (
            i[15] = a[15] = void 0,
              o.length > 16 && (o = p(o, 8 * e.length)),
              n = 0;
            n < 16;
            n += 1
          )
            (i[n] = 909522486 ^ o[n]), (a[n] = 1549556828 ^ o[n]);
          return (
            (r = p(i.concat(h(t)), 512 + 8 * t.length)), f(p(a.concat(r), 640))
          );
        }
        function m(e) {
          var t,
            n,
            r = "0123456789abcdef",
            o = "";
          for (n = 0; n < e.length; n += 1)
            (t = e.charCodeAt(n)),
              (o += r.charAt((t >>> 4) & 15) + r.charAt(15 & t));
          return o;
        }
        function y(e) {
          return unescape(encodeURIComponent(e));
        }
        function b(e) {
          return v(y(e));
        }
        function w(e) {
          return m(b(e));
        }
        function x(e, t) {
          return g(y(e), y(t));
        }
        function k(e, t) {
          return m(x(e, t));
        }
        function _(e, t, n) {
          return t ? (n ? x(t, e) : k(t, e)) : n ? b(e) : w(e);
        }
        void 0 !==
          (r = function () {
            return _;
          }.call(t, n, t, e)) && (e.exports = r);
      })();
    },
    function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      var r = function (e) {
        e = e || navigator.userAgent;
        var t = {},
          n = {
            Trident: e.indexOf("Trident") > -1 || e.indexOf("NET CLR") > -1,
            Presto: e.indexOf("Presto") > -1,
            WebKit: e.indexOf("AppleWebKit") > -1,
            Gecko: e.indexOf("Gecko/") > -1,
            Safari: e.indexOf("Safari") > -1,
            Edge: e.indexOf("Edge") > -1 || e.indexOf("Edg") > -1,
            Chrome: e.indexOf("Chrome") > -1 || e.indexOf("CriOS") > -1,
            IE: e.indexOf("MSIE") > -1 || e.indexOf("Trident") > -1,
            Firefox: e.indexOf("Firefox") > -1 || e.indexOf("FxiOS") > -1,
            "Firefox Focus": e.indexOf("Focus") > -1,
            Chromium: e.indexOf("Chromium") > -1,
            Opera: e.indexOf("Opera") > -1 || e.indexOf("OPR") > -1,
            Vivaldi: e.indexOf("Vivaldi") > -1,
            Yandex: e.indexOf("YaBrowser") > -1,
            Kindle: e.indexOf("Kindle") > -1 || e.indexOf("Silk/") > -1,
            360: e.indexOf("360EE") > -1 || e.indexOf("360SE") > -1,
            UC: e.indexOf("UC") > -1 || e.indexOf(" UBrowser") > -1,
            QQBrowser: e.indexOf("QQBrowser") > -1,
            QQ: e.indexOf("QQ/") > -1,
            Baidu: e.indexOf("Baidu") > -1 || e.indexOf("BIDUBrowser") > -1,
            Maxthon: e.indexOf("Maxthon") > -1,
            Sogou: e.indexOf("MetaSr") > -1 || e.indexOf("Sogou") > -1,
            LBBROWSER: e.indexOf("LBBROWSER") > -1,
            "2345Explorer": e.indexOf("2345Explorer") > -1,
            TheWorld: e.indexOf("TheWorld") > -1,
            XiaoMi: e.indexOf("MiuiBrowser") > -1,
            Quark: e.indexOf("Quark") > -1,
            Qiyu: e.indexOf("Qiyu") > -1,
            Wechat: e.indexOf("MicroMessenger") > -1,
            Taobao: e.indexOf("AliApp(TB") > -1,
            Alipay: e.indexOf("AliApp(AP") > -1,
            Weibo: e.indexOf("Weibo") > -1,
            Douban: e.indexOf("com.douban.frodo") > -1,
            Suning: e.indexOf("SNEBUY-APP") > -1,
            iQiYi: e.indexOf("IqiyiApp") > -1,
            Windows: e.indexOf("Windows") > -1,
            Linux: e.indexOf("Linux") > -1 || e.indexOf("X11") > -1,
            macOS: e.indexOf("Macintosh") > -1,
            Android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
            Ubuntu: e.indexOf("Ubuntu") > -1,
            FreeBSD: e.indexOf("FreeBSD") > -1,
            Debian: e.indexOf("Debian") > -1,
            "Windows Phone":
              e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1,
            BlackBerry:
              e.indexOf("BlackBerry") > -1 ||
              e.indexOf("RIM") > -1 ||
              e.indexOf("BB10") > -1,
            MeeGo: e.indexOf("MeeGo") > -1,
            Symbian: e.indexOf("Symbian") > -1,
            iOS: e.indexOf("like Mac OS X") > -1,
            "Chrome OS": e.indexOf("CrOS") > -1,
            WebOS: e.indexOf("hpwOS") > -1,
            Mobile:
              e.indexOf("Mobi") > -1 ||
              e.indexOf("iPh") > -1 ||
              e.indexOf("480") > -1,
            Tablet:
              e.indexOf("Tablet") > -1 ||
              e.indexOf("Pad") > -1 ||
              e.indexOf("Nexus 7") > -1,
          };
        n.Mobile && (n.Mobile = !(e.indexOf("iPad") > -1));
        var r = {
          browser: [
            "Safari",
            "Chrome",
            "Edge",
            "IE",
            "Firefox",
            "Firefox Focus",
            "Chromium",
            "Opera",
            "Vivaldi",
            "Yandex",
            "Kindle",
            "360",
            "UC",
            "QQBrowser",
            "QQ",
            "Baidu",
            "Maxthon",
            "Sogou",
            "LBBROWSER",
            "2345Explorer",
            "TheWorld",
            "XiaoMi",
            "Quark",
            "Qiyu",
            "Wechat",
            "Taobao",
            "Alipay",
            "Weibo",
            "Douban",
            "Suning",
            "iQiYi",
          ],
          os: [
            "Windows",
            "Linux",
            "Mac OS",
            "macOS",
            "Android",
            "Ubuntu",
            "FreeBSD",
            "Debian",
            "iOS",
            "Windows Phone",
            "BlackBerry",
            "MeeGo",
            "Symbian",
            "Chrome OS",
            "WebOS",
          ],
        };
        for (var o in r)
          if (r.hasOwnProperty(o))
            for (var i = 0, a = r[o].length; i < a; i++) {
              var s = r[o][i];
              n[s] && (t[o] = s);
            }
        var l = {
          Windows: function () {
            var t = e.replace(/^.*Windows NT ([\d.]+).*$/, "$1");
            return (
              {
                6.4: "10",
                6.3: "8.1",
                6.2: "8",
                6.1: "7",
                "6.0": "Vista",
                5.2: "XP",
                5.1: "XP",
                "5.0": "2000",
              }[t] || t
            );
          },
          Android: e.replace(/^.*Android ([\d.]+);.*$/, "$1"),
          iOS: e.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, "."),
          Debian: e.replace(/^.*Debian\/([\d.]+).*$/, "$1"),
          "Windows Phone": e.replace(
            /^.*Windows Phone( OS)? ([\d.]+);.*$/,
            "$2"
          ),
          macOS: e.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, "."),
          WebOS: e.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1"),
          BlackBerry: e.replace(/^.*BB([\d.]+);*$/, "$1"),
        };
        t.osVersion = "";
        var c = l[t.os];
        c && (t.osVersion = "function" == typeof c ? c() : c == e ? "" : c);
        var u = {
          Safari: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
          Chrome: e
            .replace(/^.*Chrome\/([\d.]+).*$/, "$1")
            .replace(/^.*CriOS\/([\d.]+).*$/, "$1"),
          IE: e
            .replace(/^.*MSIE ([\d.]+).*$/, "$1")
            .replace(/^.*rv:([\d.]+).*$/, "$1"),
          Edge: e.replace(/^.*Edge?\/([\d.]+).*$/, "$1"),
          Firefox: e
            .replace(/^.*Firefox\/([\d.]+).*$/, "$1")
            .replace(/^.*FxiOS\/([\d.]+).*$/, "$1"),
          "Firefox Focus": e.replace(/^.*Focus\/([\d.]+).*$/, "$1"),
          Chromium: e.replace(/^.*Chromium\/([\d.]+).*$/, "$1"),
          Opera: e
            .replace(/^.*Opera\/([\d.]+).*$/, "$1")
            .replace(/^.*OPR\/([\d.]+).*$/, "$1"),
          Vivaldi: e.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1"),
          Yandex: e.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1"),
          Kindle: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
          Maxthon: e.replace(/^.*Maxthon\/([\d.]+).*$/, "$1"),
          QQBrowser: e.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1"),
          QQ: e.replace(/^.*QQ\/([\d.]+).*$/, "$1"),
          Baidu: e.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1"),
          UC: e.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1"),
          Sogou: e
            .replace(/^.*SE ([\d.X]+).*$/, "$1")
            .replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1"),
          "2345Explorer": e.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1"),
          TheWorld: e.replace(/^.*TheWorld ([\d.]+).*$/, "$1"),
          XiaoMi: e.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1"),
          Quark: e.replace(/^.*Quark\/([\d.]+).*$/, "$1"),
          Qiyu: e.replace(/^.*Qiyu\/([\d.]+).*$/, "$1"),
          Wechat: e.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1"),
          Taobao: e.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1"),
          Alipay: e.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1"),
          Weibo: e.replace(/^.*weibo__([\d.]+).*$/, "$1"),
          Douban: e.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1"),
          Suning: e.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1"),
          iQiYi: e.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1"),
        };
        t.version = "";
        var d = u[t.browser];
        return (
          d && (t.version = "function" == typeof d ? d() : d == e ? "" : d),
          void 0 == t.browser && (t.browser = "Unknow App"),
          t
        );
      };
      t.default = r;
    },
    function (e, t, n) {
      var r, o;
      !(function (n, i) {
        var i = (function (e, t, n) {
          function r(o, i, a) {
            return (
              (a = Object.create(r.fn)),
              o &&
                a.push.apply(
                  a,
                  o[t]
                    ? [o]
                    : "" + o === o
                    ? /</.test(o)
                      ? (((i = e.createElement(i)).innerHTML = o), i.children)
                      : i
                      ? (i = r(i)[0])
                        ? i[n](o)
                        : a
                      : e[n](o)
                    : o
                ),
              a
            );
          }
          return (
            (r.fn = []),
            (r.one = function (e, t) {
              return r(e, t)[0] || null;
            }),
            r
          );
        })(document, "addEventListener", "querySelectorAll");
        (r = []),
          void 0 !==
            (o = function () {
              return i;
            }.apply(t, r)) && (e.exports = o);
      })();
    },
    function (e, t, n) {
      function r(e) {
        return void 0 === e || null === e;
      }
      function o(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
      }
      function i(e) {
        (e = o(e || {})),
          (e.whiteList = e.whiteList || a.whiteList),
          (e.onAttr = e.onAttr || a.onAttr),
          (e.onIgnoreAttr = e.onIgnoreAttr || a.onIgnoreAttr),
          (e.safeAttrValue = e.safeAttrValue || a.safeAttrValue),
          (this.options = e);
      }
      var a = n(7),
        s = n(30);
      n(8);
      (i.prototype.process = function (e) {
        if (((e = e || ""), !(e = e.toString()))) return "";
        var t = this,
          n = t.options,
          o = n.whiteList,
          i = n.onAttr,
          a = n.onIgnoreAttr,
          l = n.safeAttrValue;
        return s(e, function (e, t, n, s, c) {
          var u = o[n],
            d = !1;
          if (
            (!0 === u
              ? (d = u)
              : "function" == typeof u
              ? (d = u(s))
              : u instanceof RegExp && (d = u.test(s)),
            !0 !== d && (d = !1),
            (s = l(n, s)))
          ) {
            var p = { position: t, sourcePosition: e, source: c, isWhite: d };
            if (d) {
              var f = i(n, s, p);
              return r(f) ? n + ":" + s : f;
            }
            var f = a(n, s, p);
            return r(f) ? void 0 : f;
          }
        });
      }),
        (e.exports = i);
    },
    function (e, t, n) {
      function r(e, t) {
        function n() {
          if (!i) {
            var n = o.trim(e.slice(a, s)),
              r = n.indexOf(":");
            if (-1 !== r) {
              var c = o.trim(n.slice(0, r)),
                u = o.trim(n.slice(r + 1));
              if (c) {
                var d = t(a, l.length, c, u, n);
                d && (l += d + "; ");
              }
            }
          }
          a = s + 1;
        }
        (e = o.trimRight(e)), ";" !== e[e.length - 1] && (e += ";");
        for (var r = e.length, i = !1, a = 0, s = 0, l = ""; s < r; s++) {
          var c = e[s];
          if ("/" === c && "*" === e[s + 1]) {
            var u = e.indexOf("*/", s + 2);
            if (-1 === u) break;
            (s = u + 1), (a = s + 1), (i = !1);
          } else
            "(" === c
              ? (i = !0)
              : ")" === c
              ? (i = !1)
              : ";" === c
              ? i || n()
              : "\n" === c && n();
        }
        return o.trim(l);
      }
      var o = n(8);
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      var r = n(35),
        o = Object.prototype.toString,
        i = Object.prototype.hasOwnProperty,
        a = function (e, t, n) {
          for (var r = 0, o = e.length; r < o; r++)
            i.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e));
        },
        s = function (e, t, n) {
          for (var r = 0, o = e.length; r < o; r++)
            null == n ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e);
        },
        l = function (e, t, n) {
          for (var r in e)
            i.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e));
        },
        c = function (e, t, n) {
          if (!r(t)) throw new TypeError("iterator must be a function");
          var i;
          arguments.length >= 3 && (i = n),
            "[object Array]" === o.call(e)
              ? a(e, t, i)
              : "string" == typeof e
              ? s(e, t, i)
              : l(e, t, i);
        };
      e.exports = c;
    },
    function (e, t, n) {
      "use strict";
      var r = Array.prototype.slice,
        o = Object.prototype.toString;
      e.exports = function (e) {
        var t = this;
        if ("function" != typeof t || "[object Function]" !== o.call(t))
          throw new TypeError(
            "Function.prototype.bind called on incompatible " + t
          );
        for (
          var n,
            i = r.call(arguments, 1),
            a = function () {
              if (this instanceof n) {
                var o = t.apply(this, i.concat(r.call(arguments)));
                return Object(o) === o ? o : this;
              }
              return t.apply(e, i.concat(r.call(arguments)));
            },
            s = Math.max(0, t.length - i.length),
            l = [],
            c = 0;
          c < s;
          c++
        )
          l.push("$" + c);
        if (
          ((n = Function(
            "binder",
            "return function (" +
              l.join(",") +
              "){ return binder.apply(this,arguments); }"
          )(a)),
          t.prototype)
        ) {
          var u = function () {};
          (u.prototype = t.prototype),
            (n.prototype = new u()),
            (u.prototype = null);
        }
        return n;
      };
    },
    function (e, t, n) {
      !(function (t, n) {
        e.exports = n();
      })(0, function () {
        "use strict";
        function e(e) {
          return '<span style="color: slategray">' + e + "</span>";
        }
        var t = (function (e, t) {
            return (t = { exports: {} }), e(t, t.exports), t.exports;
          })(function (e) {
            var t = (e.exports = function () {
              return new RegExp(
                "(?:" + t.line().source + ")|(?:" + t.block().source + ")",
                "gm"
              );
            });
            (t.line = function () {
              return /(?:^|\s)\/\/(.+?)$/gm;
            }),
              (t.block = function () {
                return /\/\*([\S\s]*?)\*\//gm;
              });
          }),
          n = [
            "23AC69",
            "91C132",
            "F19726",
            "E8552D",
            "1AAB8E",
            "E1147F",
            "2980C1",
            "1BA1E6",
            "9FA0A0",
            "F19726",
            "E30B20",
            "E30B20",
            "A3338B",
          ];
        return function (r, o) {
          void 0 === o && (o = {});
          var i = o.colors;
          void 0 === i && (i = n);
          var a = 0,
            s = {},
            l = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/,
            c = /</,
            u = new RegExp(
              "(" + l.source + "|" + c.source + ")|(" + t().source + ")",
              "gmi"
            );
          return r.replace(u, function (t, n, r) {
            if (r) return e(r);
            if ("<" === n) return "&lt;";
            var o;
            s[n] ? (o = s[n]) : ((o = i[a]), (s[n] = o));
            var l = '<span style="color: #' + o + '">' + n + "</span>";
            return (a = ++a % i.length), l;
          });
        };
      });
    },
    function (e, t, n) {
      "use strict";
      var r = n(4);
      e.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    },
    function (e, t, n) {
      "use strict";
      var r = Function.prototype.toString,
        o = /^\s*class\b/,
        i = function (e) {
          try {
            var t = r.call(e);
            return o.test(t);
          } catch (e) {
            return !1;
          }
        },
        a = function (e) {
          try {
            return !i(e) && (r.call(e), !0);
          } catch (e) {
            return !1;
          }
        },
        s = Object.prototype.toString,
        l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
      e.exports = function (e) {
        if (!e) return !1;
        if ("function" != typeof e && "object" != typeof e) return !1;
        if ("function" == typeof e && !e.prototype) return !0;
        if (l) return a(e);
        if (i(e)) return !1;
        var t = s.call(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t;
      };
    },
    function (e, t, n) {
      (function (t) {
        !(function (t) {
          "use strict";
          function n(e) {
            (this.tokens = []),
              (this.tokens.links = {}),
              (this.options = e || h.defaults),
              (this.rules = v.normal),
              this.options.pedantic
                ? (this.rules = v.pedantic)
                : this.options.gfm &&
                  (this.options.tables
                    ? (this.rules = v.tables)
                    : (this.rules = v.gfm));
          }
          function r(e, t) {
            if (
              ((this.options = t || h.defaults),
              (this.links = e),
              (this.rules = g.normal),
              (this.renderer = this.options.renderer || new o()),
              (this.renderer.options = this.options),
              !this.links)
            )
              throw new Error("Tokens array requires a `links` property.");
            this.options.pedantic
              ? (this.rules = g.pedantic)
              : this.options.gfm &&
                (this.options.breaks
                  ? (this.rules = g.breaks)
                  : (this.rules = g.gfm));
          }
          function o(e) {
            this.options = e || h.defaults;
          }
          function i() {}
          function a(e) {
            (this.tokens = []),
              (this.token = null),
              (this.options = e || h.defaults),
              (this.options.renderer = this.options.renderer || new o()),
              (this.renderer = this.options.renderer),
              (this.renderer.options = this.options);
          }
          function s(e, t) {
            return e
              .replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#39;");
          }
          function l(e) {
            return e.replace(
              /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
              function (e, t) {
                return (
                  (t = t.toLowerCase()),
                  "colon" === t
                    ? ":"
                    : "#" === t.charAt(0)
                    ? "x" === t.charAt(1)
                      ? String.fromCharCode(parseInt(t.substring(2), 16))
                      : String.fromCharCode(+t.substring(1))
                    : ""
                );
              }
            );
          }
          function c(e, t) {
            return (
              (e = e.source || e),
              (t = t || ""),
              {
                replace: function (t, n) {
                  return (
                    (n = n.source || n),
                    (n = n.replace(/(^|[^\[])\^/g, "$1")),
                    (e = e.replace(t, n)),
                    this
                  );
                },
                getRegex: function () {
                  return new RegExp(e, t);
                },
              }
            );
          }
          function u(e, t) {
            return (
              m[" " + e] ||
                (/^[^:]+:\/*[^/]*$/.test(e)
                  ? (m[" " + e] = e + "/")
                  : (m[" " + e] = e.replace(/[^/]*$/, ""))),
              (e = m[" " + e]),
              "//" === t.slice(0, 2)
                ? e.replace(/:[\s\S]*/, ":") + t
                : "/" === t.charAt(0)
                ? e.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + t
                : e + t
            );
          }
          function d() {}
          function p(e) {
            for (var t, n, r = 1; r < arguments.length; r++) {
              t = arguments[r];
              for (n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }
          function f(e, t) {
            var n = e.replace(/([^\\])\|/g, "$1 |").split(/ +\| */),
              r = 0;
            if (n.length > t) n.splice(t);
            else for (; n.length < t; ) n.push("");
            for (; r < n.length; r++) n[r] = n[r].replace(/\\\|/g, "|");
            return n;
          }
          function h(e, t, r) {
            if (void 0 === e || null === e)
              throw new Error("marked(): input parameter is undefined or null");
            if ("string" != typeof e)
              throw new Error(
                "marked(): input parameter is of type " +
                  Object.prototype.toString.call(e) +
                  ", string expected"
              );
            if (r || "function" == typeof t) {
              r || ((r = t), (t = null)), (t = p({}, h.defaults, t || {}));
              var o,
                i,
                l = t.highlight,
                c = 0;
              try {
                o = n.lex(e, t);
              } catch (e) {
                return r(e);
              }
              i = o.length;
              var u = function (e) {
                if (e) return (t.highlight = l), r(e);
                var n;
                try {
                  n = a.parse(o, t);
                } catch (t) {
                  e = t;
                }
                return (t.highlight = l), e ? r(e) : r(null, n);
              };
              if (!l || l.length < 3) return u();
              if ((delete t.highlight, !i)) return u();
              for (; c < o.length; c++)
                !(function (e) {
                  "code" !== e.type
                    ? --i || u()
                    : l(e.text, e.lang, function (t, n) {
                        return t
                          ? u(t)
                          : null == n || n === e.text
                          ? --i || u()
                          : ((e.text = n), (e.escaped = !0), void (--i || u()));
                      });
                })(o[c]);
            } else
              try {
                return t && (t = p({}, h.defaults, t)), a.parse(n.lex(e, t), t);
              } catch (e) {
                if (
                  ((e.message +=
                    "\nPlease report this to https://github.com/markedjs/marked."),
                  (t || h.defaults).silent)
                )
                  return (
                    "<p>An error occurred:</p><pre>" +
                    s(e.message + "", !0) +
                    "</pre>"
                  );
                throw e;
              }
          }
          var v = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            fences: d,
            hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
            nptable: d,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html:
              "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
            def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
            table: d,
            lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
            paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
            text: /^[^\n]+/,
          };
          (v._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/),
            (v._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
            (v.def = c(v.def)
              .replace("label", v._label)
              .replace("title", v._title)
              .getRegex()),
            (v.bullet = /(?:[*+-]|\d+\.)/),
            (v.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/),
            (v.item = c(v.item, "gm").replace(/bull/g, v.bullet).getRegex()),
            (v.list = c(v.list)
              .replace(/bull/g, v.bullet)
              .replace(
                "hr",
                "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
              )
              .replace("def", "\\n+(?=" + v.def.source + ")")
              .getRegex()),
            (v._tag =
              "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
            (v._comment = /<!--(?!-?>)[\s\S]*?-->/),
            (v.html = c(v.html, "i")
              .replace("comment", v._comment)
              .replace("tag", v._tag)
              .replace(
                "attribute",
                / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
              )
              .getRegex()),
            (v.paragraph = c(v.paragraph)
              .replace("hr", v.hr)
              .replace("heading", v.heading)
              .replace("lheading", v.lheading)
              .replace("tag", v._tag)
              .getRegex()),
            (v.blockquote = c(v.blockquote)
              .replace("paragraph", v.paragraph)
              .getRegex()),
            (v.normal = p({}, v)),
            (v.gfm = p({}, v.normal, {
              fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
              paragraph: /^/,
              heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
            })),
            (v.gfm.paragraph = c(v.paragraph)
              .replace(
                "(?!",
                "(?!" +
                  v.gfm.fences.source.replace("\\1", "\\2") +
                  "|" +
                  v.list.source.replace("\\1", "\\3") +
                  "|"
              )
              .getRegex()),
            (v.tables = p({}, v.gfm, {
              nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
              table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/,
            })),
            (v.pedantic = p({}, v.normal, {
              html: c(
                "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
              )
                .replace("comment", v._comment)
                .replace(
                  /tag/g,
                  "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
                )
                .getRegex(),
              def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            })),
            (n.rules = v),
            (n.lex = function (e, t) {
              return new n(t).lex(e);
            }),
            (n.prototype.lex = function (e) {
              return (
                (e = e
                  .replace(/\r\n|\r/g, "\n")
                  .replace(/\t/g, "    ")
                  .replace(/\u00a0/g, " ")
                  .replace(/\u2424/g, "\n")),
                this.token(e, !0)
              );
            }),
            (n.prototype.token = function (e, t) {
              e = e.replace(/^ +$/gm, "");
              for (var n, r, o, i, a, s, l, c, u, d, p, h, g; e; )
                if (
                  ((o = this.rules.newline.exec(e)) &&
                    ((e = e.substring(o[0].length)),
                    o[0].length > 1 && this.tokens.push({ type: "space" })),
                  (o = this.rules.code.exec(e)))
                )
                  (e = e.substring(o[0].length)),
                    (o = o[0].replace(/^ {4}/gm, "")),
                    this.tokens.push({
                      type: "code",
                      text: this.options.pedantic ? o : o.replace(/\n+$/, ""),
                    });
                else if ((o = this.rules.fences.exec(e)))
                  (e = e.substring(o[0].length)),
                    this.tokens.push({
                      type: "code",
                      lang: o[2],
                      text: o[3] || "",
                    });
                else if ((o = this.rules.heading.exec(e)))
                  (e = e.substring(o[0].length)),
                    this.tokens.push({
                      type: "heading",
                      depth: o[1].length,
                      text: o[2],
                    });
                else if (
                  t &&
                  (o = this.rules.nptable.exec(e)) &&
                  ((s = {
                    type: "table",
                    header: f(o[1].replace(/^ *| *\| *$/g, "")),
                    align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: o[3] ? o[3].replace(/\n$/, "").split("\n") : [],
                  }),
                  s.header.length === s.align.length)
                ) {
                  for (
                    e = e.substring(o[0].length), c = 0;
                    c < s.align.length;
                    c++
                  )
                    /^ *-+: *$/.test(s.align[c])
                      ? (s.align[c] = "right")
                      : /^ *:-+: *$/.test(s.align[c])
                      ? (s.align[c] = "center")
                      : /^ *:-+ *$/.test(s.align[c])
                      ? (s.align[c] = "left")
                      : (s.align[c] = null);
                  for (c = 0; c < s.cells.length; c++)
                    s.cells[c] = f(s.cells[c], s.header.length);
                  this.tokens.push(s);
                } else if ((o = this.rules.hr.exec(e)))
                  (e = e.substring(o[0].length)),
                    this.tokens.push({ type: "hr" });
                else if ((o = this.rules.blockquote.exec(e)))
                  (e = e.substring(o[0].length)),
                    this.tokens.push({ type: "blockquote_start" }),
                    (o = o[0].replace(/^ *> ?/gm, "")),
                    this.token(o, t),
                    this.tokens.push({ type: "blockquote_end" });
                else if ((o = this.rules.list.exec(e))) {
                  for (
                    e = e.substring(o[0].length),
                      i = o[2],
                      p = i.length > 1,
                      this.tokens.push({
                        type: "list_start",
                        ordered: p,
                        start: p ? +i : "",
                      }),
                      o = o[0].match(this.rules.item),
                      n = !1,
                      d = o.length,
                      c = 0;
                    c < d;
                    c++
                  )
                    (s = o[c]),
                      (l = s.length),
                      (s = s.replace(/^ *([*+-]|\d+\.) +/, "")),
                      ~s.indexOf("\n ") &&
                        ((l -= s.length),
                        (s = this.options.pedantic
                          ? s.replace(/^ {1,4}/gm, "")
                          : s.replace(
                              new RegExp("^ {1," + l + "}", "gm"),
                              ""
                            ))),
                      this.options.smartLists &&
                        c !== d - 1 &&
                        ((a = v.bullet.exec(o[c + 1])[0]),
                        i === a ||
                          (i.length > 1 && a.length > 1) ||
                          ((e = o.slice(c + 1).join("\n") + e), (c = d - 1))),
                      (r = n || /\n\n(?!\s*$)/.test(s)),
                      c !== d - 1 &&
                        ((n = "\n" === s.charAt(s.length - 1)), r || (r = n)),
                      (h = /^\[[ xX]\] /.test(s)),
                      (g = void 0),
                      h &&
                        ((g = " " !== s[1]),
                        (s = s.replace(/^\[[ xX]\] +/, ""))),
                      this.tokens.push({
                        type: r ? "loose_item_start" : "list_item_start",
                        task: h,
                        checked: g,
                      }),
                      this.token(s, !1),
                      this.tokens.push({ type: "list_item_end" });
                  this.tokens.push({ type: "list_end" });
                } else if ((o = this.rules.html.exec(e)))
                  (e = e.substring(o[0].length)),
                    this.tokens.push({
                      type: this.options.sanitize ? "paragraph" : "html",
                      pre:
                        !this.options.sanitizer &&
                        ("pre" === o[1] ||
                          "script" === o[1] ||
                          "style" === o[1]),
                      text: o[0],
                    });
                else if (t && (o = this.rules.def.exec(e)))
                  (e = e.substring(o[0].length)),
                    o[3] && (o[3] = o[3].substring(1, o[3].length - 1)),
                    (u = o[1].toLowerCase().replace(/\s+/g, " ")),
                    this.tokens.links[u] ||
                      (this.tokens.links[u] = { href: o[2], title: o[3] });
                else if (
                  t &&
                  (o = this.rules.table.exec(e)) &&
                  ((s = {
                    type: "table",
                    header: f(o[1].replace(/^ *| *\| *$/g, "")),
                    align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: o[3]
                      ? o[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                      : [],
                  }),
                  s.header.length === s.align.length)
                ) {
                  for (
                    e = e.substring(o[0].length), c = 0;
                    c < s.align.length;
                    c++
                  )
                    /^ *-+: *$/.test(s.align[c])
                      ? (s.align[c] = "right")
                      : /^ *:-+: *$/.test(s.align[c])
                      ? (s.align[c] = "center")
                      : /^ *:-+ *$/.test(s.align[c])
                      ? (s.align[c] = "left")
                      : (s.align[c] = null);
                  for (c = 0; c < s.cells.length; c++)
                    s.cells[c] = f(
                      s.cells[c].replace(/^ *\| *| *\| *$/g, ""),
                      s.header.length
                    );
                  this.tokens.push(s);
                } else if ((o = this.rules.lheading.exec(e)))
                  (e = e.substring(o[0].length)),
                    this.tokens.push({
                      type: "heading",
                      depth: "=" === o[2] ? 1 : 2,
                      text: o[1],
                    });
                else if (t && (o = this.rules.paragraph.exec(e)))
                  (e = e.substring(o[0].length)),
                    this.tokens.push({
                      type: "paragraph",
                      text:
                        "\n" === o[1].charAt(o[1].length - 1)
                          ? o[1].slice(0, -1)
                          : o[1],
                    });
                else if ((o = this.rules.text.exec(e)))
                  (e = e.substring(o[0].length)),
                    this.tokens.push({ type: "text", text: o[0] });
                else if (e)
                  throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
              return this.tokens;
            });
          var g = {
            escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
            autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
            url: d,
            tag:
              "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
            link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
            reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
            nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
            strong: /^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)|^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)/,
            em: /^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*][\s\S]*?[^\s])\*(?!\*)|^_([^\s_])_(?!_)|^\*([^\s*])\*(?!\*)/,
            code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
            br: /^ {2,}\n(?!\s*$)/,
            del: d,
            text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/,
          };
          (g._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
            (g._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
            (g._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
            (g.autolink = c(g.autolink)
              .replace("scheme", g._scheme)
              .replace("email", g._email)
              .getRegex()),
            (g._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
            (g.tag = c(g.tag)
              .replace("comment", v._comment)
              .replace("attribute", g._attribute)
              .getRegex()),
            (g._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/),
            (g._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/),
            (g._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
            (g.link = c(g.link)
              .replace("label", g._label)
              .replace("href", g._href)
              .replace("title", g._title)
              .getRegex()),
            (g.reflink = c(g.reflink).replace("label", g._label).getRegex()),
            (g.normal = p({}, g)),
            (g.pedantic = p({}, g.normal, {
              strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
              em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
              link: c(/^!?\[(label)\]\((.*?)\)/)
                .replace("label", g._label)
                .getRegex(),
              reflink: c(/^!?\[(label)\]\s*\[([^\]]*)\]/)
                .replace("label", g._label)
                .getRegex(),
            })),
            (g.gfm = p({}, g.normal, {
              escape: c(g.escape).replace("])", "~|])").getRegex(),
              url: c(
                /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/
              )
                .replace("email", g._email)
                .getRegex(),
              _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
              del: /^~~(?=\S)([\s\S]*?\S)~~/,
              text: c(g.text)
                .replace("]|", "~]|")
                .replace(
                  "|",
                  "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|"
                )
                .getRegex(),
            })),
            (g.breaks = p({}, g.gfm, {
              br: c(g.br).replace("{2,}", "*").getRegex(),
              text: c(g.gfm.text).replace("{2,}", "*").getRegex(),
            })),
            (r.rules = g),
            (r.output = function (e, t, n) {
              return new r(t, n).output(e);
            }),
            (r.prototype.output = function (e) {
              for (var t, n, o, i, a, l = ""; e; )
                if ((a = this.rules.escape.exec(e)))
                  (e = e.substring(a[0].length)), (l += a[1]);
                else if ((a = this.rules.autolink.exec(e)))
                  (e = e.substring(a[0].length)),
                    "@" === a[2]
                      ? ((n = s(this.mangle(a[1]))), (o = "mailto:" + n))
                      : ((n = s(a[1])), (o = n)),
                    (l += this.renderer.link(o, null, n));
                else if (this.inLink || !(a = this.rules.url.exec(e))) {
                  if ((a = this.rules.tag.exec(e)))
                    !this.inLink && /^<a /i.test(a[0])
                      ? (this.inLink = !0)
                      : this.inLink &&
                        /^<\/a>/i.test(a[0]) &&
                        (this.inLink = !1),
                      (e = e.substring(a[0].length)),
                      (l += this.options.sanitize
                        ? this.options.sanitizer
                          ? this.options.sanitizer(a[0])
                          : s(a[0])
                        : a[0]);
                  else if ((a = this.rules.link.exec(e)))
                    (e = e.substring(a[0].length)),
                      (this.inLink = !0),
                      (o = a[2]),
                      this.options.pedantic
                        ? ((t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o)),
                          t ? ((o = t[1]), (i = t[3])) : (i = ""))
                        : (i = a[3] ? a[3].slice(1, -1) : ""),
                      (o = o.trim().replace(/^<([\s\S]*)>$/, "$1")),
                      (l += this.outputLink(a, {
                        href: r.escapes(o),
                        title: r.escapes(i),
                      })),
                      (this.inLink = !1);
                  else if (
                    (a = this.rules.reflink.exec(e)) ||
                    (a = this.rules.nolink.exec(e))
                  ) {
                    if (
                      ((e = e.substring(a[0].length)),
                      (t = (a[2] || a[1]).replace(/\s+/g, " ")),
                      !(t = this.links[t.toLowerCase()]) || !t.href)
                    ) {
                      (l += a[0].charAt(0)), (e = a[0].substring(1) + e);
                      continue;
                    }
                    (this.inLink = !0),
                      (l += this.outputLink(a, t)),
                      (this.inLink = !1);
                  } else if ((a = this.rules.strong.exec(e)))
                    (e = e.substring(a[0].length)),
                      (l += this.renderer.strong(
                        this.output(a[4] || a[3] || a[2] || a[1])
                      ));
                  else if ((a = this.rules.em.exec(e)))
                    (e = e.substring(a[0].length)),
                      (l += this.renderer.em(
                        this.output(
                          a[6] || a[5] || a[4] || a[3] || a[2] || a[1]
                        )
                      ));
                  else if ((a = this.rules.code.exec(e)))
                    (e = e.substring(a[0].length)),
                      (l += this.renderer.codespan(s(a[2].trim(), !0)));
                  else if ((a = this.rules.br.exec(e)))
                    (e = e.substring(a[0].length)), (l += this.renderer.br());
                  else if ((a = this.rules.del.exec(e)))
                    (e = e.substring(a[0].length)),
                      (l += this.renderer.del(this.output(a[1])));
                  else if ((a = this.rules.text.exec(e)))
                    (e = e.substring(a[0].length)),
                      (l += this.renderer.text(s(this.smartypants(a[0]))));
                  else if (e)
                    throw new Error(
                      "Infinite loop on byte: " + e.charCodeAt(0)
                    );
                } else
                  (a[0] = this.rules._backpedal.exec(a[0])[0]),
                    (e = e.substring(a[0].length)),
                    "@" === a[2]
                      ? ((n = s(a[0])), (o = "mailto:" + n))
                      : ((n = s(a[0])),
                        (o = "www." === a[1] ? "http://" + n : n)),
                    (l += this.renderer.link(o, null, n));
              return l;
            }),
            (r.escapes = function (e) {
              return e ? e.replace(r.rules._escapes, "$1") : e;
            }),
            (r.prototype.outputLink = function (e, t) {
              var n = t.href,
                r = t.title ? s(t.title) : null;
              return "!" !== e[0].charAt(0)
                ? this.renderer.link(n, r, this.output(e[1]))
                : this.renderer.image(n, r, s(e[1]));
            }),
            (r.prototype.smartypants = function (e) {
              return this.options.smartypants
                ? e
                    .replace(/---/g, "—")
                    .replace(/--/g, "–")
                    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
                    .replace(/'/g, "’")
                    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
                    .replace(/"/g, "”")
                    .replace(/\.{3}/g, "…")
                : e;
            }),
            (r.prototype.mangle = function (e) {
              if (!this.options.mangle) return e;
              for (var t, n = "", r = e.length, o = 0; o < r; o++)
                (t = e.charCodeAt(o)),
                  Math.random() > 0.5 && (t = "x" + t.toString(16)),
                  (n += "&#" + t + ";");
              return n;
            }),
            (o.prototype.code = function (e, t, n) {
              if (this.options.highlight) {
                var r = this.options.highlight(e, t);
                null != r && r !== e && ((n = !0), (e = r));
              }
              return t
                ? '<pre><code class="' +
                    this.options.langPrefix +
                    s(t, !0) +
                    '">' +
                    (n ? e : s(e, !0)) +
                    "</code></pre>\n"
                : "<pre><code>" + (n ? e : s(e, !0)) + "</code></pre>";
            }),
            (o.prototype.blockquote = function (e) {
              return "<blockquote>\n" + e + "</blockquote>\n";
            }),
            (o.prototype.html = function (e) {
              return e;
            }),
            (o.prototype.heading = function (e, t, n) {
              return this.options.headerIds
                ? "<h" +
                    t +
                    ' id="' +
                    this.options.headerPrefix +
                    n.toLowerCase().replace(/[^\w]+/g, "-") +
                    '">' +
                    e +
                    "</h" +
                    t +
                    ">\n"
                : "<h" + t + ">" + e + "</h" + t + ">\n";
            }),
            (o.prototype.hr = function () {
              return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
            }),
            (o.prototype.list = function (e, t, n) {
              var r = t ? "ol" : "ul";
              return (
                "<" +
                r +
                (t && 1 !== n ? ' start="' + n + '"' : "") +
                ">\n" +
                e +
                "</" +
                r +
                ">\n"
              );
            }),
            (o.prototype.listitem = function (e) {
              return "<li>" + e + "</li>\n";
            }),
            (o.prototype.checkbox = function (e) {
              return (
                "<input " +
                (e ? 'checked="" ' : "") +
                'disabled="" type="checkbox"' +
                (this.options.xhtml ? " /" : "") +
                "> "
              );
            }),
            (o.prototype.paragraph = function (e) {
              return "<p>" + e + "</p>\n";
            }),
            (o.prototype.table = function (e, t) {
              return (
                t && (t = "<tbody>" + t + "</tbody>"),
                "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
              );
            }),
            (o.prototype.tablerow = function (e) {
              return "<tr>\n" + e + "</tr>\n";
            }),
            (o.prototype.tablecell = function (e, t) {
              var n = t.header ? "th" : "td";
              return (
                (t.align
                  ? "<" + n + ' align="' + t.align + '">'
                  : "<" + n + ">") +
                e +
                "</" +
                n +
                ">\n"
              );
            }),
            (o.prototype.strong = function (e) {
              return "<strong>" + e + "</strong>";
            }),
            (o.prototype.em = function (e) {
              return "<em>" + e + "</em>";
            }),
            (o.prototype.codespan = function (e) {
              return "<code>" + e + "</code>";
            }),
            (o.prototype.br = function () {
              return this.options.xhtml ? "<br/>" : "<br>";
            }),
            (o.prototype.del = function (e) {
              return "<del>" + e + "</del>";
            }),
            (o.prototype.link = function (e, t, n) {
              if (this.options.sanitize) {
                try {
                  var r = decodeURIComponent(l(e))
                    .replace(/[^\w:]/g, "")
                    .toLowerCase();
                } catch (e) {
                  return n;
                }
                if (
                  0 === r.indexOf("javascript:") ||
                  0 === r.indexOf("vbscript:") ||
                  0 === r.indexOf("data:")
                )
                  return n;
              }
              this.options.baseUrl &&
                !y.test(e) &&
                (e = u(this.options.baseUrl, e));
              try {
                e = encodeURI(e).replace(/%25/g, "%");
              } catch (e) {
                return n;
              }
              var o = '<a href="' + s(e) + '"';
              return t && (o += ' title="' + t + '"'), (o += ">" + n + "</a>");
            }),
            (o.prototype.image = function (e, t, n) {
              this.options.baseUrl &&
                !y.test(e) &&
                (e = u(this.options.baseUrl, e));
              var r = '<img src="' + e + '" alt="' + n + '"';
              return (
                t && (r += ' title="' + t + '"'),
                (r += this.options.xhtml ? "/>" : ">")
              );
            }),
            (o.prototype.text = function (e) {
              return e;
            }),
            (i.prototype.strong = i.prototype.em = i.prototype.codespan = i.prototype.del = i.prototype.text = function (
              e
            ) {
              return e;
            }),
            (i.prototype.link = i.prototype.image = function (e, t, n) {
              return "" + n;
            }),
            (i.prototype.br = function () {
              return "";
            }),
            (a.parse = function (e, t) {
              return new a(t).parse(e);
            }),
            (a.prototype.parse = function (e) {
              (this.inline = new r(e.links, this.options)),
                (this.inlineText = new r(
                  e.links,
                  p({}, this.options, { renderer: new i() })
                )),
                (this.tokens = e.reverse());
              for (var t = ""; this.next(); ) t += this.tok();
              return t;
            }),
            (a.prototype.next = function () {
              return (this.token = this.tokens.pop());
            }),
            (a.prototype.peek = function () {
              return this.tokens[this.tokens.length - 1] || 0;
            }),
            (a.prototype.parseText = function () {
              for (var e = this.token.text; "text" === this.peek().type; )
                e += "\n" + this.next().text;
              return this.inline.output(e);
            }),
            (a.prototype.tok = function () {
              switch (this.token.type) {
                case "space":
                  return "";
                case "hr":
                  return this.renderer.hr();
                case "heading":
                  return this.renderer.heading(
                    this.inline.output(this.token.text),
                    this.token.depth,
                    l(this.inlineText.output(this.token.text))
                  );
                case "code":
                  return this.renderer.code(
                    this.token.text,
                    this.token.lang,
                    this.token.escaped
                  );
                case "table":
                  var e,
                    t,
                    n,
                    r,
                    o = "",
                    i = "";
                  for (n = "", e = 0; e < this.token.header.length; e++)
                    n += this.renderer.tablecell(
                      this.inline.output(this.token.header[e]),
                      { header: !0, align: this.token.align[e] }
                    );
                  for (
                    o += this.renderer.tablerow(n), e = 0;
                    e < this.token.cells.length;
                    e++
                  ) {
                    for (
                      t = this.token.cells[e], n = "", r = 0;
                      r < t.length;
                      r++
                    )
                      n += this.renderer.tablecell(this.inline.output(t[r]), {
                        header: !1,
                        align: this.token.align[r],
                      });
                    i += this.renderer.tablerow(n);
                  }
                  return this.renderer.table(o, i);
                case "blockquote_start":
                  for (i = ""; "blockquote_end" !== this.next().type; )
                    i += this.tok();
                  return this.renderer.blockquote(i);
                case "list_start":
                  i = "";
                  for (
                    var a = this.token.ordered, s = this.token.start;
                    "list_end" !== this.next().type;

                  )
                    i += this.tok();
                  return this.renderer.list(i, a, s);
                case "list_item_start":
                  for (
                    i = "",
                      this.token.task &&
                        (i += this.renderer.checkbox(this.token.checked));
                    "list_item_end" !== this.next().type;

                  )
                    i +=
                      "text" === this.token.type
                        ? this.parseText()
                        : this.tok();
                  return this.renderer.listitem(i);
                case "loose_item_start":
                  for (i = ""; "list_item_end" !== this.next().type; )
                    i += this.tok();
                  return this.renderer.listitem(i);
                case "html":
                  return this.renderer.html(this.token.text);
                case "paragraph":
                  return this.renderer.paragraph(
                    this.inline.output(this.token.text)
                  );
                case "text":
                  return this.renderer.paragraph(this.parseText());
              }
            });
          var m = {},
            y = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
          (d.exec = d),
            (h.options = h.setOptions = function (e) {
              return p(h.defaults, e), h;
            }),
            (h.getDefaults = function () {
              return {
                baseUrl: null,
                breaks: !1,
                gfm: !0,
                headerIds: !0,
                headerPrefix: "",
                highlight: null,
                langPrefix: "language-",
                mangle: !0,
                pedantic: !1,
                renderer: new o(),
                sanitize: !1,
                sanitizer: null,
                silent: !1,
                smartLists: !1,
                smartypants: !1,
                tables: !0,
                xhtml: !1,
              };
            }),
            (h.defaults = h.getDefaults()),
            (h.Parser = a),
            (h.parser = a.parse),
            (h.Renderer = o),
            (h.TextRenderer = i),
            (h.Lexer = n),
            (h.lexer = n.lex),
            (h.InlineLexer = r),
            (h.inlineLexer = r.output),
            (h.parse = h),
            (e.exports = h);
        })(this || ("undefined" != typeof window && window));
      }.call(t, n(14)));
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        var t = {};
        return (
          u(e, function (e, n) {
            u(e, function (e) {
              t[e] = n;
            });
          }),
          t
        );
      }
      function o(e, t) {
        var n = r(e.pluralTypeToLanguages);
        return n[t] || n[g.call(t, /-/, 1)[0]] || n.en;
      }
      function i(e, t, n) {
        return e.pluralTypes[o(e, t)](n);
      }
      function a(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function s(e) {
        var t = (e && e.prefix) || "%{",
          n = (e && e.suffix) || "}";
        if (t === m || n === m)
          throw new RangeError(
            '"' + m + '" token is reserved for pluralization'
          );
        return new RegExp(a(t) + "(.*?)" + a(n), "g");
      }
      function l(e, t, n, r, o) {
        if ("string" != typeof e)
          throw new TypeError(
            "Polyglot.transformPhrase expects argument #1 to be string"
          );
        if (null == t) return e;
        var a = e,
          s = r || w,
          l = o || b,
          c = "number" == typeof t ? { smart_count: t } : t;
        if (null != c.smart_count && a) {
          var u = g.call(a, m);
          a = f(u[i(l, n || "en", c.smart_count)] || u[0]);
        }
        return (a = v.call(a, s, function (e, t) {
          return p(c, t) && null != c[t] ? c[t] : e;
        }));
      }
      function c(e) {
        var t = e || {};
        (this.phrases = {}),
          this.extend(t.phrases || {}),
          (this.currentLocale = t.locale || "en");
        var n = t.allowMissing ? l : null;
        (this.onMissingKey =
          "function" == typeof t.onMissingKey ? t.onMissingKey : n),
          (this.warn = t.warn || h),
          (this.tokenRegex = s(t.interpolation)),
          (this.pluralRules = t.pluralRules || b);
      }
      var u = n(31),
        d = n(50),
        p = n(34),
        f = n(43),
        h = function (e) {
          d(!1, e);
        },
        v = String.prototype.replace,
        g = String.prototype.split,
        m = "||||",
        y = function (e) {
          var t = e % 100,
            n = t % 10;
          return 11 !== t && 1 === n
            ? 0
            : 2 <= n && n <= 4 && !(t >= 12 && t <= 14)
            ? 1
            : 2;
        },
        b = {
          pluralTypes: {
            arabic: function (e) {
              if (e < 3) return e;
              var t = e % 100;
              return t >= 3 && t <= 10 ? 3 : t >= 11 ? 4 : 5;
            },
            bosnian_serbian: y,
            chinese: function () {
              return 0;
            },
            croatian: y,
            french: function (e) {
              return e > 1 ? 1 : 0;
            },
            german: function (e) {
              return 1 !== e ? 1 : 0;
            },
            russian: y,
            lithuanian: function (e) {
              return e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 9 && (e % 100 < 11 || e % 100 > 19)
                ? 1
                : 2;
            },
            czech: function (e) {
              return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2;
            },
            polish: function (e) {
              if (1 === e) return 0;
              var t = e % 10;
              return 2 <= t && t <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2;
            },
            icelandic: function (e) {
              return e % 10 != 1 || e % 100 == 11 ? 1 : 0;
            },
            slovenian: function (e) {
              var t = e % 100;
              return 1 === t ? 0 : 2 === t ? 1 : 3 === t || 4 === t ? 2 : 3;
            },
          },
          pluralTypeToLanguages: {
            arabic: ["ar"],
            bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
            chinese: [
              "id",
              "id-ID",
              "ja",
              "ko",
              "ko-KR",
              "lo",
              "ms",
              "th",
              "th-TH",
              "zh",
            ],
            croatian: ["hr", "hr-HR"],
            german: [
              "fa",
              "da",
              "de",
              "en",
              "es",
              "fi",
              "el",
              "he",
              "hi-IN",
              "hu",
              "hu-HU",
              "it",
              "nl",
              "no",
              "pt",
              "sv",
              "tr",
            ],
            french: ["fr", "tl", "pt-br"],
            russian: ["ru", "ru-RU"],
            lithuanian: ["lt"],
            czech: ["cs", "cs-CZ", "sk"],
            polish: ["pl"],
            icelandic: ["is"],
            slovenian: ["sl-SL"],
          },
        },
        w = /%\{(.*?)\}/g;
      (c.prototype.locale = function (e) {
        return e && (this.currentLocale = e), this.currentLocale;
      }),
        (c.prototype.extend = function (e, t) {
          u(
            e,
            function (e, n) {
              var r = t ? t + "." + n : n;
              "object" == typeof e ? this.extend(e, r) : (this.phrases[r] = e);
            },
            this
          );
        }),
        (c.prototype.unset = function (e, t) {
          "string" == typeof e
            ? delete this.phrases[e]
            : u(
                e,
                function (e, n) {
                  var r = t ? t + "." + n : n;
                  "object" == typeof e
                    ? this.unset(e, r)
                    : delete this.phrases[r];
                },
                this
              );
        }),
        (c.prototype.clear = function () {
          this.phrases = {};
        }),
        (c.prototype.replace = function (e) {
          this.clear(), this.extend(e);
        }),
        (c.prototype.t = function (e, t) {
          var n,
            r,
            o = null == t ? {} : t;
          if ("string" == typeof this.phrases[e]) n = this.phrases[e];
          else if ("string" == typeof o._) n = o._;
          else if (this.onMissingKey) {
            var i = this.onMissingKey;
            r = i(e, o, this.currentLocale, this.tokenRegex, this.pluralRules);
          } else this.warn('Missing translation for key: "' + e + '"'), (r = e);
          return (
            "string" == typeof n &&
              (r = l(
                n,
                o,
                this.currentLocale,
                this.tokenRegex,
                this.pluralRules
              )),
            r
          );
        }),
        (c.prototype.has = function (e) {
          return p(this.phrases, e);
        }),
        (c.transformPhrase = function (e, t, n) {
          return l(e, t, n);
        }),
        (e.exports = c);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        if (null === e || void 0 === e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      } /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
      var o = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var n, s, l = r(e), c = 1; c < arguments.length; c++) {
              n = Object(arguments[c]);
              for (var u in n) i.call(n, u) && (l[u] = n[u]);
              if (o) {
                s = o(n);
                for (var d = 0; d < s.length; d++)
                  a.call(n, s[d]) && (l[s[d]] = n[s[d]]);
              }
            }
            return l;
          };
    },
    function (e, t, n) {
      "use strict";
      var r;
      if (!Object.keys) {
        var o = Object.prototype.hasOwnProperty,
          i = Object.prototype.toString,
          a = n(10),
          s = Object.prototype.propertyIsEnumerable,
          l = !s.call({ toString: null }, "toString"),
          c = s.call(function () {}, "prototype"),
          u = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor",
          ],
          d = function (e) {
            var t = e.constructor;
            return t && t.prototype === e;
          },
          p = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0,
          },
          f = (function () {
            if ("undefined" == typeof window) return !1;
            for (var e in window)
              try {
                if (
                  !p["$" + e] &&
                  o.call(window, e) &&
                  null !== window[e] &&
                  "object" == typeof window[e]
                )
                  try {
                    d(window[e]);
                  } catch (e) {
                    return !0;
                  }
              } catch (e) {
                return !0;
              }
            return !1;
          })(),
          h = function (e) {
            if ("undefined" == typeof window || !f) return d(e);
            try {
              return d(e);
            } catch (e) {
              return !1;
            }
          };
        r = function (e) {
          var t = null !== e && "object" == typeof e,
            n = "[object Function]" === i.call(e),
            r = a(e),
            s = t && "[object String]" === i.call(e),
            d = [];
          if (!t && !n && !r)
            throw new TypeError("Object.keys called on a non-object");
          var p = c && n;
          if (s && e.length > 0 && !o.call(e, 0))
            for (var f = 0; f < e.length; ++f) d.push(String(f));
          if (r && e.length > 0)
            for (var v = 0; v < e.length; ++v) d.push(String(v));
          else
            for (var g in e)
              (p && "prototype" === g) || !o.call(e, g) || d.push(String(g));
          if (l)
            for (var m = h(e), y = 0; y < u.length; ++y)
              (m && "constructor" === u[y]) || !o.call(e, u[y]) || d.push(u[y]);
          return d;
        };
      }
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      var r = Array.prototype.slice,
        o = n(10),
        i = Object.keys,
        a = i
          ? function (e) {
              return i(e);
            }
          : n(39),
        s = Object.keys;
      (a.shim = function () {
        if (Object.keys) {
          (function () {
            var e = Object.keys(arguments);
            return e && e.length === arguments.length;
          })(1, 2) ||
            (Object.keys = function (e) {
              return s(o(e) ? r.call(e) : e);
            });
        } else Object.keys = a;
        return Object.keys || a;
      }),
        (e.exports = a);
    },
    function (e, t) {
      function n() {
        throw new Error("setTimeout has not been defined");
      }
      function r() {
        throw new Error("clearTimeout has not been defined");
      }
      function o(e) {
        if (u === setTimeout) return setTimeout(e, 0);
        if ((u === n || !u) && setTimeout)
          return (u = setTimeout), setTimeout(e, 0);
        try {
          return u(e, 0);
        } catch (t) {
          try {
            return u.call(null, e, 0);
          } catch (t) {
            return u.call(this, e, 0);
          }
        }
      }
      function i(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === r || !d) && clearTimeout)
          return (d = clearTimeout), clearTimeout(e);
        try {
          return d(e);
        } catch (t) {
          try {
            return d.call(null, e);
          } catch (t) {
            return d.call(this, e);
          }
        }
      }
      function a() {
        v &&
          f &&
          ((v = !1), f.length ? (h = f.concat(h)) : (g = -1), h.length && s());
      }
      function s() {
        if (!v) {
          var e = o(a);
          v = !0;
          for (var t = h.length; t; ) {
            for (f = h, h = []; ++g < t; ) f && f[g].run();
            (g = -1), (t = h.length);
          }
          (f = null), (v = !1), i(e);
        }
      }
      function l(e, t) {
        (this.fun = e), (this.array = t);
      }
      function c() {}
      var u,
        d,
        p = (e.exports = {});
      !(function () {
        try {
          u = "function" == typeof setTimeout ? setTimeout : n;
        } catch (e) {
          u = n;
        }
        try {
          d = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (e) {
          d = r;
        }
      })();
      var f,
        h = [],
        v = !1,
        g = -1;
      (p.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new l(e, t)), 1 !== h.length || v || o(s);
      }),
        (l.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (p.title = "browser"),
        (p.browser = !0),
        (p.env = {}),
        (p.argv = []),
        (p.version = ""),
        (p.versions = {}),
        (p.on = c),
        (p.addListener = c),
        (p.once = c),
        (p.off = c),
        (p.removeListener = c),
        (p.removeAllListeners = c),
        (p.emit = c),
        (p.prependListener = c),
        (p.prependOnceListener = c),
        (p.listeners = function (e) {
          return [];
        }),
        (p.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (p.cwd = function () {
          return "/";
        }),
        (p.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (p.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return (e = JSON.stringify(e)), !!/^\{[\s\S]*\}$/.test(e);
      }
      function o(e) {
        return void 0 === e || "function" == typeof e
          ? e + ""
          : JSON.stringify(e);
      }
      function i(e) {
        if ("string" == typeof e)
          try {
            return JSON.parse(e);
          } catch (t) {
            return e;
          }
      }
      function a(e) {
        return "[object Function]" === {}.toString.call(e);
      }
      function s(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }
      function l() {
        if (!(this instanceof l)) return new l();
      }
      function c(e, t) {
        var n = arguments,
          o = null;
        if ((d || (d = l()), 0 === n.length)) return d.get();
        if (1 === n.length) {
          if ("string" == typeof e) return d.get(e);
          if (r(e)) return d.set(e);
        }
        if (2 === n.length && "string" == typeof e) {
          if (!t) return d.remove(e);
          if (t && "string" == typeof t) return d.set(e, t);
          t && a(t) && ((o = null), (o = t(e, d.get(e))), c.set(e, o));
        }
        if (2 === n.length && s(e) && a(t))
          for (var i = 0, u = e.length; i < u; i++)
            (o = t(e[i], d.get(e[i]))), c.set(e[i], o);
        return c;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      /*!
       * storejs v1.0.24
       * Local storage localstorage package provides a simple API
       *
       * Copyright (c) 2018 kenny wang <wowohoo@qq.com>
       * https://github.com/jaywcjlove/store.js
       *
       * Licensed under the MIT license.
       */
      var u = window.localStorage;
      (u = (function (e) {
        var t = "_Is_Incognit";
        try {
          e.setItem(t, "yes");
        } catch (t) {
          if ("QuotaExceededError" === t.name) {
            var n = function () {};
            e.__proto__ = { setItem: n, getItem: n, removeItem: n, clear: n };
          }
        } finally {
          "yes" === e.getItem(t) && e.removeItem(t);
        }
        return e;
      })(u)),
        (l.prototype = {
          set: function (e, t) {
            if (e && !r(e)) u.setItem(e, o(t));
            else if (r(e)) for (var n in e) this.set(n, e[n]);
            return this;
          },
          get: function (e) {
            if (!e) {
              var t = {};
              return (
                this.forEach(function (e, n) {
                  return (t[e] = n);
                }),
                t
              );
            }
            if ("?" === e.charAt(0)) return this.has(e.substr(1));
            var n = arguments;
            if (n.length > 1) {
              for (var r = {}, o = 0, a = n.length; o < a; o++) {
                var s = i(u.getItem(n[o]));
                s && (r[n[o]] = s);
              }
              return r;
            }
            return i(u.getItem(e));
          },
          clear: function () {
            return u.clear(), this;
          },
          remove: function (e) {
            var t = this.get(e);
            return u.removeItem(e), t;
          },
          has: function (e) {
            return {}.hasOwnProperty.call(this.get(), e);
          },
          keys: function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              e
            );
          },
          forEach: function (e) {
            for (var t = 0, n = u.length; t < n; t++) {
              var r = u.key(t);
              e(r, this.get(r));
            }
            return this;
          },
          search: function (e) {
            for (var t = this.keys(), n = {}, r = 0, o = t.length; r < o; r++)
              t[r].indexOf(e) > -1 && (n[t[r]] = this.get(t[r]));
            return n;
          },
        });
      var d = null;
      for (var p in l.prototype) c[p] = l.prototype[p];
      t.default = c;
    },
    function (e, t, n) {
      "use strict";
      var r = n(12),
        o = n(9),
        i = n(11),
        a = n(13),
        s = n(49),
        l = r(a());
      o(l, { getPolyfill: a, implementation: i, shim: s }), (e.exports = l);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        o = r("%String%"),
        i = r("%TypeError%");
      e.exports = function (e) {
        if ("symbol" == typeof e)
          throw new i("Cannot convert a Symbol value to a string");
        return o(e);
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        o = r("%TypeError%");
      e.exports = function (e, t) {
        if (null == e) throw new o(t || "Cannot call method on " + e);
        return e;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        o = n(12),
        i = o(r("String.prototype.indexOf"));
      e.exports = function (e, t) {
        var n = r(e, !!t);
        return "function" == typeof n && i(e, ".prototype.") ? o(n) : n;
      };
    },
    function (e, t, n) {
      "use strict";
      (function (t) {
        var r = t.Symbol,
          o = n(48);
        e.exports = function () {
          return (
            "function" == typeof r &&
            "function" == typeof Symbol &&
            "symbol" == typeof r("foo") &&
            "symbol" == typeof Symbol("bar") &&
            o()
          );
        };
      }.call(t, n(14)));
    },
    function (e, t, n) {
      "use strict";
      e.exports = function () {
        if (
          "function" != typeof Symbol ||
          "function" != typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var e = {},
          t = Symbol("test"),
          n = Object(t);
        if ("string" == typeof t) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
        e[t] = 42;
        for (t in e) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(e).length)
          return !1;
        if (
          "function" == typeof Object.getOwnPropertyNames &&
          0 !== Object.getOwnPropertyNames(e).length
        )
          return !1;
        var r = Object.getOwnPropertySymbols(e);
        if (1 !== r.length || r[0] !== t) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var o = Object.getOwnPropertyDescriptor(e, t);
          if (42 !== o.value || !0 !== o.enumerable) return !1;
        }
        return !0;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(9),
        o = n(13);
      e.exports = function () {
        var e = o();
        return (
          r(
            String.prototype,
            { trim: e },
            {
              trim: function () {
                return String.prototype.trim !== e;
              },
            }
          ),
          e
        );
      };
    },
    function (e, t, n) {
      "use strict";
      (function (t) {
        var n = "production" !== t.env.NODE_ENV,
          r = function () {};
        if (n) {
          var o = function (e, t) {
            var n = arguments.length;
            t = new Array(n > 1 ? n - 1 : 0);
            for (var r = 1; r < n; r++) t[r - 1] = arguments[r];
            var o = 0,
              i =
                "Warning: " +
                e.replace(/%s/g, function () {
                  return t[o++];
                });
            try {
              throw new Error(i);
            } catch (e) {}
          };
          r = function (e, t, n) {
            var r = arguments.length;
            n = new Array(r > 2 ? r - 2 : 0);
            for (var i = 2; i < r; i++) n[i - 2] = arguments[i];
            if (void 0 === t)
              throw new Error(
                "`warning(condition, format, ...args)` requires a warning message argument"
              );
            e || o.apply(null, [t].concat(n));
          };
        }
        e.exports = r;
      }.call(t, n(41)));
    },
    function (e, t, n) {
      function r(e, t) {
        return new a(t).process(e);
      }
      var o = n(15),
        i = n(16),
        a = n(52);
      (t = e.exports = r), (t.filterXSS = r), (t.FilterXSS = a);
      for (var s in o) t[s] = o[s];
      for (var s in i) t[s] = i[s];
      "undefined" != typeof window && (window.filterXSS = e.exports),
        (function () {
          return (
            "undefined" != typeof self &&
            "undefined" != typeof DedicatedWorkerGlobalScope &&
            self instanceof DedicatedWorkerGlobalScope
          );
        })() && (self.filterXSS = e.exports);
    },
    function (e, t, n) {
      function r(e) {
        return void 0 === e || null === e;
      }
      function o(e) {
        var t = p.spaceIndex(e);
        if (-1 === t) return { html: "", closing: "/" === e[e.length - 2] };
        e = p.trim(e.slice(t + 1, -1));
        var n = "/" === e[e.length - 1];
        return n && (e = p.trim(e.slice(0, -1))), { html: e, closing: n };
      }
      function i(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
      }
      function a(e) {
        (e = i(e || {})),
          e.stripIgnoreTag &&
            (e.onIgnoreTag, (e.onIgnoreTag = l.onIgnoreTagStripAll)),
          (e.whiteList = e.whiteList || l.whiteList),
          (e.onTag = e.onTag || l.onTag),
          (e.onTagAttr = e.onTagAttr || l.onTagAttr),
          (e.onIgnoreTag = e.onIgnoreTag || l.onIgnoreTag),
          (e.onIgnoreTagAttr = e.onIgnoreTagAttr || l.onIgnoreTagAttr),
          (e.safeAttrValue = e.safeAttrValue || l.safeAttrValue),
          (e.escapeHtml = e.escapeHtml || l.escapeHtml),
          (this.options = e),
          !1 === e.css
            ? (this.cssFilter = !1)
            : ((e.css = e.css || {}), (this.cssFilter = new s(e.css)));
      }
      var s = n(3).FilterCSS,
        l = n(15),
        c = n(16),
        u = c.parseTag,
        d = c.parseAttr,
        p = n(5);
      (a.prototype.process = function (e) {
        if (((e = e || ""), !(e = e.toString()))) return "";
        var t = this,
          n = t.options,
          i = n.whiteList,
          a = n.onTag,
          s = n.onIgnoreTag,
          c = n.onTagAttr,
          f = n.onIgnoreTagAttr,
          h = n.safeAttrValue,
          v = n.escapeHtml,
          g = t.cssFilter;
        n.stripBlankChar && (e = l.stripBlankChar(e)),
          n.allowCommentTag || (e = l.stripCommentTag(e));
        var m = !1;
        if (n.stripIgnoreTagBody) {
          var m = l.StripTagBody(n.stripIgnoreTagBody, s);
          s = m.onIgnoreTag;
        }
        var y = u(
          e,
          function (e, t, n, l, u) {
            var m = {
                sourcePosition: e,
                position: t,
                isClosing: u,
                isWhite: i.hasOwnProperty(n),
              },
              y = a(n, l, m);
            if (!r(y)) return y;
            if (m.isWhite) {
              if (m.isClosing) return "</" + n + ">";
              var b = o(l),
                w = i[n],
                x = d(b.html, function (e, t) {
                  var o = -1 !== p.indexOf(w, e),
                    i = c(n, e, t, o);
                  if (!r(i)) return i;
                  if (o) return (t = h(n, e, t, g)), t ? e + '="' + t + '"' : e;
                  var i = f(n, e, t, o);
                  return r(i) ? void 0 : i;
                }),
                l = "<" + n;
              return x && (l += " " + x), b.closing && (l += " /"), (l += ">");
            }
            var y = s(n, l, m);
            return r(y) ? v(l) : y;
          },
          v
        );
        return m && (y = m.remove(y)), y;
      }),
        (e.exports = a);
    },
    function (e, t) {
      e.exports = {
        smile: "e3/2018new_weixioa02_org.png",
        lovely: "09/2018new_keai_org.png",
        happy: "1e/2018new_taikaixin_org.png",
        clap: "6e/2018new_guzhang_thumb.png",
        whee: "33/2018new_xixi_thumb.png",
        haha: "8f/2018new_haha_thumb.png",
        "laugh and cry": "4a/2018new_xiaoku_thumb.png",
        wink: "43/2018new_jiyan_org.png",
        greddy: "fa/2018new_chanzui_org.png",
        awkward: "a3/2018new_heixian_thumb.png",
        sweat: "28/2018new_han_org.png",
        "pick nose": "9a/2018new_wabi_thumb.png",
        hum: "7c/2018new_heng_thumb.png",
        angry: "f6/2018new_nu_thumb.png",
        grievance: "a5/2018new_weiqu_thumb.png",
        poor: "96/2018new_kelian_org.png",
        disappoint: "aa/2018new_shiwang_thumb.png",
        sad: "ee/2018new_beishang_org.png",
        tear: "6e/2018new_leimu_org.png",
        "no way": "83/2018new_kuxiao_org.png",
        shy: "c1/2018new_haixiu_org.png",
        dirt: "10/2018new_wu_thumb.png",
        "love you": "f6/2018new_aini_org.png",
        kiss: "2c/2018new_qinqin_thumb.png",
        amorousness: "9d/2018new_huaxin_org.png",
        longing: "c9/2018new_chongjing_org.png",
        desire: "3e/2018new_tianping_thumb.png",
        "bad laugh": "4d/2018new_huaixiao_org.png",
        blackness: "9e/2018new_yinxian_org.png",
        "laugh without word": "2d/2018new_xiaoerbuyu_org.png",
        titter: "71/2018new_touxiao_org.png",
        cool: "c4/2018new_ku_org.png",
        "not easy": "aa/2018new_bingbujiandan_thumb.png",
        think: "30/2018new_sikao_org.png",
        question: "b8/2018new_ningwen_org.png",
        "no idea": "2a/2018new_wenhao_thumb.png",
        dizzy: "07/2018new_yun_thumb.png",
        bomb: "a2/2018new_shuai_thumb.png",
        bone: "a1/2018new_kulou_thumb.png",
        "be quiet": "b0/2018new_xu_org.png",
        "shut up": "62/2018new_bizui_org.png",
        stupid: "dd/2018new_shayan_org.png",
        "surprise ": "49/2018new_chijing_org.png",
        vomit: "08/2018new_tu_org.png",
        cold: "40/2018new_kouzhao_thumb.png",
        sick: "3b/2018new_shengbing_thumb.png",
        bye: "fd/2018new_baibai_thumb.png",
        "look down on": "da/2018new_bishi_org.png",
        "white eye": "ef/2018new_landelini_org.png",
        "left hum": "43/2018new_zuohengheng_thumb.png",
        "right hum": "c1/2018new_youhengheng_thumb.png",
        crazy: "17/2018new_zhuakuang_org.png",
        "scold ": "87/2018new_zhouma_thumb.png",
        "hit on face": "cb/2018new_dalian_org.png",
        wow: "ae/2018new_ding_org.png",
        fan: "86/2018new_hufen02_org.png",
        money: "a2/2018new_qian_thumb.png",
        yawn: "55/2018new_dahaqian_org.png",
        sleepy: "3c/2018new_kun_thumb.png",
        sleep: "e2/2018new_shuijiao_thumb.png",
        "watermelon ": "01/2018new_chigua_thumb.png",
        doge: "a1/2018new_doge02_org.png",
        dog: "22/2018new_erha_org.png",
        cat: "7b/2018new_miaomiao_thumb.png",
        thumb: "e6/2018new_zan_org.png",
        good: "8a/2018new_good_org.png",
        ok: "45/2018new_ok_org.png",
        yeah: "29/2018new_ye_thumb.png",
        "shack hand": "e9/2018new_woshou_thumb.png",
        bow: "e7/2018new_zuoyi_org.png",
        come: "42/2018new_guolai_thumb.png",
        punch: "86/2018new_quantou_thumb.png",
      };
    },
    function (e, t) {
      e.exports = {
        nick: "NickName",
        mail: "E-Mail",
        link: "Website(http://)",
        nickFail: "NickName cannot be less than 3 bytes.",
        mailFail: "Please confirm your email address.",
        sofa: "No comment yet.",
        submit: "Submit",
        reply: "Reply",
        cancelReply: "Cancel reply",
        comments: "Comments",
        cancel: "Cancel",
        confirm: "Confirm",
        continue: "Continue",
        more: "Load More...",
        preview: "Preview",
        emoji: "Emoji",
        expand: "See more....",
        seconds: "seconds ago",
        minutes: "minutes ago",
        hours: "hours ago",
        days: "days ago",
        now: "just now",
        uploading: "Uploading ...",
        uploadDone: "Upload completed!",
        busy: "Submit is busy, please wait...",
        "code-98":
          "Valine initialization failed, please check your version of av-min.js.",
        "code-99":
          "Valine initialization failed, Please check the `el` element in the init method.",
        "code-100":
          "Valine initialization failed, Please check your appId and appKey.",
        "code-140":
          "The total number of API calls today has exceeded the development version limit.",
        "code-401":
          "Unauthorized operation, Please check your appId and appKey.",
        "code-403":
          "Access denied by API domain white list, Please check your security domain.",
      };
    },
    function (e, t) {
      e.exports = {
        nick: "ニックネーム",
        mail: "メールアドレス",
        link: "サイト(http://)",
        nickFail: "3バイト以上のニックネームをご入力ください.",
        mailFail: "メールアドレスをご確認ください.",
        sofa: "コメントしましょう~",
        submit: "提出する",
        reply: "返信する",
        cancelReply: "キャンセル",
        comments: "コメント",
        cancel: "キャンセル",
        confirm: "確認する",
        continue: "继续",
        more: "さらに読み込む...",
        preview: "プレビュー",
        emoji: "絵文字",
        expand: "もっと見る",
        seconds: "秒前",
        minutes: "分前",
        hours: "時間前",
        days: "日前",
        now: "たっだ今",
        uploading: "アップロード中...",
        uploadDone: "アップロードが完了しました!",
        busy: "20 秒間隔で提出してください    ...",
        "code-98":
          "ロードエラーです。av-min.js のバージョンを確認してください.",
        "code-99": "ロードエラーです。initにある`el`エレメントを確認ください.",
        "code-100": "ロードエラーです。AppIdとAppKeyを確認ください.",
        "code-140": "今日のAPIコールの総数が開発バージョンの上限を超えた.",
        "code-401": "権限が制限されています。AppIdとAppKeyを確認ください.",
        "code-403":
          "アクセスがAPIなどに制限されました、ドメイン名のセキュリティ設定を確認ください",
      };
    },
    function (e, t) {
      e.exports = {
        nick: "昵称",
        mail: "邮箱",
        link: "网址(http://)",
        nickFail: "昵称不能少于3个字符",
        mailFail: "请填写正确的邮件地址",
        sofa: "来发评论吧~",
        submit: "提交",
        reply: "回复",
        cancelReply: "取消回复",
        comments: "评论",
        cancel: "取消",
        confirm: "确认",
        continue: "继续",
        more: "加载更多...",
        preview: "预览",
        emoji: "表情",
        expand: "查看更多...",
        seconds: "秒前",
        minutes: "分钟前",
        hours: "小时前",
        days: "天前",
        now: "刚刚",
        uploading: "正在传输...",
        uploadDone: "传输完成!",
        busy: "操作频繁，请稍候再试...",
        "code-98": "Valine 初始化失败，请检查 av-min.js 版本",
        "code-99": "Valine 初始化失败，请检查init中的`el`元素.",
        "code-100": "Valine 初始化失败，请检查你的AppId和AppKey.",
        "code-140": "今日 API 调用总次数已超过开发版限制.",
        "code-401": "未经授权的操作，请检查你的AppId和AppKey.",
        "code-403": "访问被API域名白名单拒绝，请检查你的安全域名设置.",
      };
    },
    function (e, t) {
      e.exports = {
        nick: "暱稱",
        mail: "郵箱",
        link: "網址(http://)",
        nickFail: "昵稱不能少於3個字符",
        mailFail: "請填寫正確的郵件地址",
        sofa: "來發評論吧~",
        submit: "提交",
        reply: "回覆",
        cancelReply: "取消回覆",
        comments: "評論",
        cancel: "取消",
        confirm: "確認",
        continue: "繼續",
        more: "加載更多...",
        preview: "預覽",
        emoji: "表情",
        expand: "查看更多...",
        seconds: "秒前",
        minutes: "分鐘前",
        hours: "小時前",
        days: "天前",
        now: "剛剛",
        uploading: "正在上傳...",
        uploadDone: "上傳完成!",
        busy: "操作頻繁，請稍候再試...",
        "code-98": "Valine 初始化失敗，請檢查 av-min.js 版本",
        "code-99": "Valine 初始化失敗，請檢查init中的`el`元素.",
        "code-100": "Valine 初始化失敗，請檢查你的AppId和AppKey.",
        "code-140": "今日 API 調用總次數已超過開發版限制.",
        "code-401": "未經授權的操作，請檢查你的AppId和AppKey.",
        "code-403": "訪問被API域名白名單拒絕，請檢查你的安全域名設置.",
      };
    },
    function (e, t, n) {
      var r = n(59);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      var o = {};
      o.transform = void 0;
      n(61)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
      (t = e.exports = n(60)(!1)),
        t.push([
          e.i,
          '.v[data-class=v]{font-size:16px;text-align:left}.v[data-class=v] *{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.75}.v[data-class=v] .status-bar,.v[data-class=v] .veditor,.v[data-class=v] .vinput,.v[data-class=v] p,.v[data-class=v] pre code{color:#555}.v[data-class=v] .vsys,.v[data-class=v] .vtime{color:#b3b3b3}.v[data-class=v] .text-right{text-align:right}.v[data-class=v] .text-center{text-align:center}.v[data-class=v] img{max-width:100%;border:none}.v[data-class=v] hr{margin:.825em 0;border-color:#f6f6f6;border-style:dashed}.v[data-class=v].hide-avatar .vimg{display:none}.v[data-class=v] a{position:relative;cursor:pointer;color:#1abc9c;text-decoration:none;display:inline-block}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] code,.v[data-class=v] pre{background-color:#f8f8f8;padding:.2em .4em;border-radius:3px;font-size:85%;margin:0}.v[data-class=v] pre{padding:10px;overflow:auto;line-height:1.45}.v[data-class=v] pre code{padding:0;background:transparent;white-space:pre-wrap;word-break:keep-all}.v[data-class=v] blockquote{color:#666;margin:.5em 0;padding:0 0 0 1em;border-left:8px solid hsla(0,0%,93%,.5)}.v[data-class=v] .vinput{border:none;resize:none;outline:none;padding:10px 5px;max-width:100%;font-size:.775em}.v[data-class=v] input[type=checkbox],.v[data-class=v] input[type=radio]{display:inline-block;vertical-align:middle;margin-top:-2px}.v[data-class=v] .vicon{cursor:pointer;display:inline-block;overflow:hidden;fill:#555;vertical-align:middle}.v[data-class=v] .vicon+.vicon{margin-left:10px}.v[data-class=v] .vicon.actived{fill:#66b1ff}.v[data-class=v] .vrow{font-size:0;padding:10px 0}.v[data-class=v] .vrow .vcol{display:inline-block;vertical-align:middle;font-size:14px}.v[data-class=v] .vrow .vcol.vcol-20{width:20%}.v[data-class=v] .vrow .vcol.vcol-30{width:30%}.v[data-class=v] .vrow .vcol.vcol-40{width:40%}.v[data-class=v] .vrow .vcol.vcol-50{width:50%}.v[data-class=v] .vrow .vcol.vcol-60{width:60%}.v[data-class=v] .vrow .vcol.vcol-70{width:70%}.v[data-class=v] .vrow .vcol.vcol-80{width:80%}.v[data-class=v] .vrow .vcol.vctrl{font-size:12px}.v[data-class=v] .emoji,.v[data-class=v] .vemoji{max-width:150px;vertical-align:middle;margin:0 1px;display:inline-block}.v[data-class=v] .vwrap{border:1px solid #f0f0f0;border-radius:4px;margin-bottom:10px;overflow:hidden;position:relative;padding:10px}.v[data-class=v] .vwrap input{background:transparent}.v[data-class=v] .vwrap .vedit{position:relative;padding-top:10px}.v[data-class=v] .vwrap .cancel-reply-btn{position:absolute;right:5px;top:5px;cursor:pointer}.v[data-class=v] .vwrap .vemojis{display:none;font-size:18px;max-height:145px;overflow:auto;padding-bottom:10px;-webkit-box-shadow:0 0 1px #f0f0f0;box-shadow:0 0 1px #f0f0f0}.v[data-class=v] .vwrap .vemojis i{font-style:normal;padding-top:7px;width:130px;cursor:pointer;text-align:center;display:inline-block;vertical-align:middle}.v[data-class=v] .vwrap .vpreview{padding:7px;-webkit-box-shadow:0 0 1px #f0f0f0;box-shadow:0 0 1px #f0f0f0}.v[data-class=v] .vwrap .vheader .vinput{width:33.33%;border-bottom:1px dashed #dedede}.v[data-class=v] .vwrap .vheader.item2 .vinput{width:50%}.v[data-class=v] .vwrap .vheader.item1 .vinput{width:100%}.v[data-class=v] .vwrap .vheader .vinput:focus{border-bottom-color:#eb5055}@media screen and (max-width:520px){.v[data-class=v] .vwrap .vheader.item2 .vinput,.v[data-class=v] .vwrap .vheader .vinput{width:100%}}.v[data-class=v] .vpower{color:#999;font-size:.75em;padding:.5em 0}.v[data-class=v] .vpower a{font-size:.75em}.v[data-class=v] .vcount{padding:5px;font-weight:600;font-size:1.25em}.v[data-class=v] ol,.v[data-class=v] ul{padding:0;margin-left:1.25em}.v[data-class=v] .txt-center{text-align:center}.v[data-class=v] .txt-right{text-align:right}.v[data-class=v] .pd5{padding:5px}.v[data-class=v] .pd10{padding:10px}.v[data-class=v] .veditor{width:100%;min-height:8.75em;font-size:.875em;background:transparent;resize:vertical;-webkit-transition:all .25s ease;transition:all .25s ease}.v[data-class=v] .vbtn{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;color:#555;border:1px solid #ededed;border-radius:.3em;display:inline-block;background:transparent;margin-bottom:0;font-weight:400;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;white-space:nowrap;padding:.5em 1.25em;font-size:.875em;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v[data-class=v] .vbtn+.vbtn{margin-left:1.25em}.v[data-class=v] .vbtn:active,.v[data-class=v] .vbtn:hover{color:#3090e4;border-color:#3090e4}.v[data-class=v] .vbtn:disabled{border-color:#e1e1e1;color:#e1e1e1;background-color:#fdfafa;cursor:not-allowed}.v[data-class=v] .vempty{padding:1.25em;text-align:center;color:#555;overflow:auto}.v[data-class=v] .vsys{display:inline-block;padding:.2em .5em;font-size:.75em;border-radius:.2em;margin-right:.3em}@media screen and (max-width:520px){.v[data-class=v] .vsys{display:none}}.v[data-class=v] .vcards{width:100%}.v[data-class=v] .vcards .vcard{padding-top:1.25em;position:relative;display:block}.v[data-class=v] .vcards .vcard:after{content:"";clear:both;display:block}.v[data-class=v] .vcards .vcard .vimg{width:3.125em;height:3.125em;float:left;border-radius:50%;margin-right:.7525em;border:1px solid #f5f5f5;padding:.125em}@media screen and (max-width:720px){.v[data-class=v] .vcards .vcard .vimg{width:2.5em;height:2.5em}}.v[data-class=v] .vcards .vcard .vhead{line-height:1.5;margin-top:0}.v[data-class=v] .vcards .vcard .vhead .vnick{position:relative;font-size:.875em;font-weight:500;margin-right:.875em;cursor:pointer;text-decoration:none;display:inline-block}.v[data-class=v] .vcards .vcard .vhead .vnick:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vh{overflow:hidden;padding-bottom:.5em;border-bottom:1px dashed #f5f5f5}.v[data-class=v] .vcards .vcard .vh .vtime{font-size:.75em;margin-right:.875em}.v[data-class=v] .vcards .vcard .vh .vmeta{line-height:1;position:relative}.v[data-class=v] .vcards .vcard .vh .vmeta .vat{font-size:.8125em;color:#ef2f11;cursor:pointer;float:right}.v[data-class=v] .vcards .vcard:last-child .vh{border-bottom:none}.v[data-class=v] .vcards .vcard .vcontent{word-wrap:break-word;word-break:break-all;font-size:.875em;line-height:2;position:relative;margin-bottom:.75em;padding-top:.625em}.v[data-class=v] .vcards .vcard .vcontent.expand{cursor:pointer;max-height:8em;overflow:hidden}.v[data-class=v] .vcards .vcard .vcontent.expand:before{display:block;content:"";position:absolute;width:100%;left:0;top:0;bottom:3.15em;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(hsla(0,0%,100%,.9)));background:linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.9));z-index:999}.v[data-class=v] .vcards .vcard .vcontent.expand:after{display:block;content:attr(data-expand);text-align:center;color:#828586;position:absolute;width:100%;height:3.15em;line-height:3.15em;left:0;bottom:0;z-index:999;background:hsla(0,0%,100%,.9)}.v[data-class=v] .vcards .vcard .vquote{padding-left:1em;border-left:1px dashed hsla(0,0%,93%,.5)}.v[data-class=v] .vcards .vcard .vquote .vimg{width:2.225em;height:2.225em}.v[data-class=v] .vpage .vmore{margin:1em 0}.v[data-class=v] .clear{content:"";display:block;clear:both}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes pulse{50%{background:#dcdcdc}}@keyframes pulse{50%{background:#dcdcdc}}.v[data-class=v] .vspinner{width:22px;height:22px;display:inline-block;border:6px double #a0a0a0;border-top-color:transparent;border-bottom-color:transparent;border-radius:50%;-webkit-animation:spin 1s infinite linear;animation:spin 1s infinite linear;position:relative;vertical-align:middle;margin:0 5px}.dark .v[data-class=v] .status-bar,.dark .v[data-class=v] .veditor,.dark .v[data-class=v] .vinput,.dark .v[data-class=v] p,.dark .v[data-class=v] pre code,.night .v[data-class=v] .status-bar,.night .v[data-class=v] .veditor,.night .v[data-class=v] .vinput,.night .v[data-class=v] p,.night .v[data-class=v] pre code,.theme__dark .v[data-class=v] .status-bar,.theme__dark .v[data-class=v] .veditor,.theme__dark .v[data-class=v] .vinput,.theme__dark .v[data-class=v] p,.theme__dark .v[data-class=v] pre code,[data-theme=dark] .v[data-class=v] .status-bar,[data-theme=dark] .v[data-class=v] .veditor,[data-theme=dark] .v[data-class=v] .vinput,[data-theme=dark] .v[data-class=v] p,[data-theme=dark] .v[data-class=v] pre code{color:#b2b2b5}.dark .v[data-class=v] .vsys,.dark .v[data-class=v] .vtime,.night .v[data-class=v] .vsys,.night .v[data-class=v] .vtime,.theme__dark .v[data-class=v] .vsys,.theme__dark .v[data-class=v] .vtime,[data-theme=dark] .v[data-class=v] .vsys,[data-theme=dark] .v[data-class=v] .vtime{color:#929298}.dark .v[data-class=v] code,.dark .v[data-class=v] pre,.dark .v[data-class=v] pre code,.night .v[data-class=v] code,.night .v[data-class=v] pre,.night .v[data-class=v] pre code,.theme__dark .v[data-class=v] code,.theme__dark .v[data-class=v] pre,.theme__dark .v[data-class=v] pre code,[data-theme=dark] .v[data-class=v] code,[data-theme=dark] .v[data-class=v] pre,[data-theme=dark] .v[data-class=v] pre code{color:#929298;background-color:#151414}.dark .v[data-class=v] .vwrap,.night .v[data-class=v] .vwrap,.theme__dark .v[data-class=v] .vwrap,[data-theme=dark] .v[data-class=v] .vwrap{border-color:#b2b2b5}.dark .v[data-class=v] .vicon,.night .v[data-class=v] .vicon,.theme__dark .v[data-class=v] .vicon,[data-theme=dark] .v[data-class=v] .vicon{fill:#b2b2b5}.dark .v[data-class=v] .vicon.actived,.night .v[data-class=v] .vicon.actived,.theme__dark .v[data-class=v] .vicon.actived,[data-theme=dark] .v[data-class=v] .vicon.actived{fill:#66b1ff}.dark .v[data-class=v] .vbtn,.night .v[data-class=v] .vbtn,.theme__dark .v[data-class=v] .vbtn,[data-theme=dark] .v[data-class=v] .vbtn{color:#b2b2b5;border-color:#b2b2b5}.dark .v[data-class=v] .vbtn:hover,.night .v[data-class=v] .vbtn:hover,.theme__dark .v[data-class=v] .vbtn:hover,[data-theme=dark] .v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}.dark .v[data-class=v] a:hover,.night .v[data-class=v] a:hover,.theme__dark .v[data-class=v] a:hover,[data-theme=dark] .v[data-class=v] a:hover{color:#d7191a}.dark .v[data-class=v] .vcards .vcard .vcontent.expand:before,.night .v[data-class=v] .vcards .vcard .vcontent.expand:before,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand:before,[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand:before{background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.3)),to(rgba(0,0,0,.7)));background:linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.7))}.dark .v[data-class=v] .vcards .vcard .vcontent.expand:after,.night .v[data-class=v] .vcards .vcard .vcontent.expand:after,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand:after,[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand:after{background:rgba(0,0,0,.7)}@media (prefers-color-scheme:dark){.v[data-class=v] .status-bar,.v[data-class=v] .veditor,.v[data-class=v] .vinput,.v[data-class=v] p,.v[data-class=v] pre code{color:#b2b2b5}.v[data-class=v] .vsys,.v[data-class=v] .vtime{color:#929298}.v[data-class=v] code,.v[data-class=v] pre,.v[data-class=v] pre code{color:#929298;background-color:#151414}.v[data-class=v] .vwrap{border-color:#b2b2b5}.v[data-class=v] .vicon{fill:#b2b2b5}.v[data-class=v] .vicon.actived{fill:#66b1ff}.v[data-class=v] .vbtn{color:#b2b2b5;border-color:#b2b2b5}.v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vcontent.expand:before{background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.3)),to(rgba(0,0,0,.7)));background:linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.7))}.v[data-class=v] .vcards .vcard .vcontent.expand:after{background:rgba(0,0,0,.7)}}',
          "",
        ]);
    },
    function (e, t) {
      function n(e, t) {
        var n = e[1] || "",
          o = e[3];
        if (!o) return n;
        if (t && "function" == typeof btoa) {
          var i = r(o);
          return [n]
            .concat(
              o.sources.map(function (e) {
                return "/*# sourceURL=" + o.sourceRoot + e + " */";
              })
            )
            .concat([i])
            .join("\n");
        }
        return [n].join("\n");
      }
      function r(e) {
        return (
          "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
          btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
          " */"
        );
      }
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var r = n(t, e);
              return t[2] ? "@media " + t[2] + "{" + r + "}" : r;
            }).join("");
          }),
          (t.i = function (e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
              var i = this[o][0];
              "number" == typeof i && (r[i] = !0);
            }
            for (o = 0; o < e.length; o++) {
              var a = e[o];
              ("number" == typeof a[0] && r[a[0]]) ||
                (n && !a[2]
                  ? (a[2] = n)
                  : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                t.push(a));
            }
          }),
          t
        );
      };
    },
    function (e, t, n) {
      function r(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            o = h[r.id];
          if (o) {
            o.refs++;
            for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
            for (; i < r.parts.length; i++) o.parts.push(u(r.parts[i], t));
          } else {
            for (var a = [], i = 0; i < r.parts.length; i++)
              a.push(u(r.parts[i], t));
            h[r.id] = { id: r.id, refs: 1, parts: a };
          }
        }
      }
      function o(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
          var i = e[o],
            a = t.base ? i[0] + t.base : i[0],
            s = i[1],
            l = i[2],
            c = i[3],
            u = { css: s, media: l, sourceMap: c };
          r[a] ? r[a].parts.push(u) : n.push((r[a] = { id: a, parts: [u] }));
        }
        return n;
      }
      function i(e, t) {
        var n = g(e.insertInto);
        if (!n)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var r = b[b.length - 1];
        if ("top" === e.insertAt)
          r
            ? r.nextSibling
              ? n.insertBefore(t, r.nextSibling)
              : n.appendChild(t)
            : n.insertBefore(t, n.firstChild),
            b.push(t);
        else {
          if ("bottom" !== e.insertAt)
            throw new Error(
              "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
            );
          n.appendChild(t);
        }
      }
      function a(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = b.indexOf(e);
        t >= 0 && b.splice(t, 1);
      }
      function s(e) {
        var t = document.createElement("style");
        return (e.attrs.type = "text/css"), c(t, e.attrs), i(e, t), t;
      }
      function l(e) {
        var t = document.createElement("link");
        return (
          (e.attrs.type = "text/css"),
          (e.attrs.rel = "stylesheet"),
          c(t, e.attrs),
          i(e, t),
          t
        );
      }
      function c(e, t) {
        Object.keys(t).forEach(function (n) {
          e.setAttribute(n, t[n]);
        });
      }
      function u(e, t) {
        var n, r, o, i;
        if (t.transform && e.css) {
          if (!(i = t.transform(e.css))) return function () {};
          e.css = i;
        }
        if (t.singleton) {
          var c = y++;
          (n = m || (m = s(t))),
            (r = d.bind(null, n, c, !1)),
            (o = d.bind(null, n, c, !0));
        } else
          e.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((n = l(t)),
              (r = f.bind(null, n, t)),
              (o = function () {
                a(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = s(t)),
              (r = p.bind(null, n)),
              (o = function () {
                a(n);
              }));
        return (
          r(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              r((e = t));
            } else o();
          }
        );
      }
      function d(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = x(t, o);
        else {
          var i = document.createTextNode(o),
            a = e.childNodes;
          a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
        }
      }
      function p(e, t) {
        var n = t.css,
          r = t.media;
        if ((r && e.setAttribute("media", r), e.styleSheet))
          e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
      function f(e, t, n) {
        var r = n.css,
          o = n.sourceMap,
          i = void 0 === t.convertToAbsoluteUrls && o;
        (t.convertToAbsoluteUrls || i) && (r = w(r)),
          o &&
            (r +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
              " */");
        var a = new Blob([r], { type: "text/css" }),
          s = e.href;
        (e.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
      }
      var h = {},
        v = (function (e) {
          var t;
          return function () {
            return void 0 === t && (t = e.apply(this, arguments)), t;
          };
        })(function () {
          return window && document && document.all && !window.atob;
        }),
        g = (function (e) {
          var t = {};
          return function (n) {
            return void 0 === t[n] && (t[n] = e.call(this, n)), t[n];
          };
        })(function (e) {
          return document.querySelector(e);
        }),
        m = null,
        y = 0,
        b = [],
        w = n(62);
      e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
          throw new Error(
            "The style-loader cannot be used in a non-browser environment"
          );
        (t = t || {}),
          (t.attrs = "object" == typeof t.attrs ? t.attrs : {}),
          t.singleton || (t.singleton = v()),
          t.insertInto || (t.insertInto = "head"),
          t.insertAt || (t.insertAt = "bottom");
        var n = o(e, t);
        return (
          r(n, t),
          function (e) {
            for (var i = [], a = 0; a < n.length; a++) {
              var s = n[a],
                l = h[s.id];
              l.refs--, i.push(l);
            }
            if (e) {
              r(o(e, t), t);
            }
            for (var a = 0; a < i.length; a++) {
              var l = i[a];
              if (0 === l.refs) {
                for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                delete h[l.id];
              }
            }
          }
        );
      };
      var x = (function () {
        var e = [];
        return function (t, n) {
          return (e[t] = n), e.filter(Boolean).join("\n");
        };
      })();
    },
    function (e, t) {
      e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
          r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function (e, t) {
            var o = t
              .trim()
              .replace(/^"(.*)"$/, function (e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function (e, t) {
                return t;
              });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))
              return e;
            var i;
            return (
              (i =
                0 === o.indexOf("//")
                  ? o
                  : 0 === o.indexOf("/")
                  ? n + o
                  : r + o.replace(/^\.\//, "")),
              "url(" + JSON.stringify(i) + ")"
            );
          }
        );
      };
    },
    function (e, t, n) {
      n(58), (e.exports = n(18));
    },
  ]);
});
