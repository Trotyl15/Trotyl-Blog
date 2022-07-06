/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /gh/Artitalk/Artitalk-jsdelivr@master/at3222.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, t) {
  var i = function () {},
    a = function () {},
    n = function () {},
    r = function () {
      return (
        (this.browser = new n()),
        (this.engine = new i()),
        (this.system = new a()),
        this.init(),
        console.log("Engine ：" + this.engine.name + " " + this.engine.version),
        console.log(
          "Browser：" + this.browser.name + " " + this.browser.version
        ),
        console.log("System ：" + this.system.name + " " + this.system.version),
        { browser: this.browser, engine: this.engine, system: this.system }
      );
    };
  (r.prototype = {
    init: function () {
      this.judgeBrowser(), this.judgeSystem();
    },
    judgeBrowser: function () {
      var t = navigator.userAgent.toString();
      if (/AppleWebKit\/(\S+)/.test(t)) {
        if (
          ((this.engine.name = "WebKit"),
          (this.engine.version = RegExp.$1),
          /OPR\/(\S+)/.test(t))
        )
          (this.browser.name = "Opera"), (this.browser.version = RegExp.$1);
        else if (/Edge\/(\S+)/.test(t))
          (this.browser.name = "Edge"), (this.browser.version = RegExp.$1);
        else if (/Chrome\/(\S+)/.test(t))
          (this.browser.name = "Chrome"), (this.browser.version = RegExp.$1);
        else if (/konqueror\/(\S+)/.test(t))
          (this.browser.name = "Konqueror"), (this.browser.version = RegExp.$1);
        else if (/Safari\/(\S+)/.test(t))
          if (((this.browser.name = "Safari"), /Version\/(\S+)/.test(t)))
            this.browser.version = RegExp.$1;
          else {
            var i = 1,
              a = parseFloat(engine.version);
            (i = a < 100 ? 1 : a < 312 ? 1.2 : a < 412 ? 1.3 : 2),
              (this.browser.version = i);
          }
      } else
        e.opera
          ? ((this.engine.name = "Presto"),
            (this.browser.name = "Opera"),
            (this.engine.version = this.browser.version = e.opera.version()))
          : /Opera[\/\s](\S+)/.test(t)
          ? ((this.engine.name = "Presto"),
            (this.browser.name = "Opera"),
            (this.engine.version = browser.version = RegExp.$1))
          : /KHTML\/(\S+)/.test(t)
          ? ((this.browser.name = "Konqueror"),
            (this.engine.name = "KHTML"),
            (this.engine.version = browser.version = RegExp.$1))
          : /Konqueror\/([^;]+)/.test(t)
          ? ((this.browser.name = "Konqueror"),
            (this.engine.name = "Konqueror"),
            (this.engine.version = browser.version = RegExp.$1))
          : /rv:([^\)]+)\) Gecko\/\d{8}/.test(t)
          ? ((this.engine.name = "Gecko"),
            (this.engine.version = RegExp.$1),
            /Firefox\/(\S+)/.test(t) &&
              ((this.browser.name = "Firefox"),
              (this.browser.version = RegExp.$1)))
          : /Trident\/([\d\.]+)/.test(t)
          ? ((this.engine.name = "Trident"),
            (this.engine.version = RegExp.$1),
            (/rv\:([\d\.]+)/.test(t) || /MSIE ([^;]+)/.test(t)) &&
              ((this.browser.name = "IE"), (this.browser.version = RegExp.$1)))
          : /MSIE ([^;]+)/.test(t) &&
            ((this.engine.name = "Trident"),
            (this.engine.version = this.browser.version - 4),
            (this.browser.name = "IE"),
            (this.browser.version = RegExp.$1));
    },
    judgeSystem: function () {
      var e = navigator.userAgent.toString(),
        t = navigator.platform;
      (this.system.name = 0 == t.indexOf("Win") ? "Windows" : this.system.name),
        (this.system.name = 0 == t.indexOf("Mac") ? "Mac" : this.system.name),
        (this.system.name =
          t.indexOf("Linux") > -1
            ? "Linux"
            : t.indexOf("SunOS") > -1
            ? "Solaris"
            : t.indexOf("FreeBSD") > -1
            ? "FreeBSD"
            : t.indexOf("X11") > -1
            ? "X11"
            : this.system.name),
        "Windows" == this.system.name &&
          /Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(e) &&
          ("NT" == RegExp.$1
            ? (this.system.version =
                {
                  "5.0": "2000",
                  5.1: "XP",
                  "6.0": "Vista",
                  6.1: "7",
                  6.2: "8",
                  6.3: "8.1",
                  "10.0": "10",
                }[RegExp.$2] || "NT " + RegExp.$2)
            : "9x" == RegExp.$1
            ? (this.system.version = "ME")
            : (this.system.version = RegExp.$1));
    },
  }),
    (e.Client = r);
})(window, document),
  (function (e) {
    "use strict";
    function t(e, t) {
      var i = (65535 & e) + (65535 & t);
      return (((e >> 16) + (t >> 16) + (i >> 16)) << 16) | (65535 & i);
    }
    function i(e, i, a, n, r, s) {
      return t(((o = t(t(i, e), t(n, s))) << (l = r)) | (o >>> (32 - l)), a);
      var o, l;
    }
    function a(e, t, a, n, r, s, o) {
      return i((t & a) | (~t & n), e, t, r, s, o);
    }
    function n(e, t, a, n, r, s, o) {
      return i((t & n) | (a & ~n), e, t, r, s, o);
    }
    function r(e, t, a, n, r, s, o) {
      return i(t ^ a ^ n, e, t, r, s, o);
    }
    function s(e, t, a, n, r, s, o) {
      return i(a ^ (t | ~n), e, t, r, s, o);
    }
    function o(e, i) {
      var o, l, c, d;
      (e[i >> 5] |= 128 << i % 32), (e[14 + (((i + 64) >>> 9) << 4)] = i);
      for (
        var h = 1732584193,
          p = -271733879,
          u = -1732584194,
          g = 271733878,
          m = 0;
        m < e.length;
        m += 16
      )
        (h = a((o = h), (l = p), (c = u), (d = g), e[m], 7, -680876936)),
          (g = a(g, h, p, u, e[m + 1], 12, -389564586)),
          (u = a(u, g, h, p, e[m + 2], 17, 606105819)),
          (p = a(p, u, g, h, e[m + 3], 22, -1044525330)),
          (h = a(h, p, u, g, e[m + 4], 7, -176418897)),
          (g = a(g, h, p, u, e[m + 5], 12, 1200080426)),
          (u = a(u, g, h, p, e[m + 6], 17, -1473231341)),
          (p = a(p, u, g, h, e[m + 7], 22, -45705983)),
          (h = a(h, p, u, g, e[m + 8], 7, 1770035416)),
          (g = a(g, h, p, u, e[m + 9], 12, -1958414417)),
          (u = a(u, g, h, p, e[m + 10], 17, -42063)),
          (p = a(p, u, g, h, e[m + 11], 22, -1990404162)),
          (h = a(h, p, u, g, e[m + 12], 7, 1804603682)),
          (g = a(g, h, p, u, e[m + 13], 12, -40341101)),
          (u = a(u, g, h, p, e[m + 14], 17, -1502002290)),
          (h = n(
            h,
            (p = a(p, u, g, h, e[m + 15], 22, 1236535329)),
            u,
            g,
            e[m + 1],
            5,
            -165796510
          )),
          (g = n(g, h, p, u, e[m + 6], 9, -1069501632)),
          (u = n(u, g, h, p, e[m + 11], 14, 643717713)),
          (p = n(p, u, g, h, e[m], 20, -373897302)),
          (h = n(h, p, u, g, e[m + 5], 5, -701558691)),
          (g = n(g, h, p, u, e[m + 10], 9, 38016083)),
          (u = n(u, g, h, p, e[m + 15], 14, -660478335)),
          (p = n(p, u, g, h, e[m + 4], 20, -405537848)),
          (h = n(h, p, u, g, e[m + 9], 5, 568446438)),
          (g = n(g, h, p, u, e[m + 14], 9, -1019803690)),
          (u = n(u, g, h, p, e[m + 3], 14, -187363961)),
          (p = n(p, u, g, h, e[m + 8], 20, 1163531501)),
          (h = n(h, p, u, g, e[m + 13], 5, -1444681467)),
          (g = n(g, h, p, u, e[m + 2], 9, -51403784)),
          (u = n(u, g, h, p, e[m + 7], 14, 1735328473)),
          (h = r(
            h,
            (p = n(p, u, g, h, e[m + 12], 20, -1926607734)),
            u,
            g,
            e[m + 5],
            4,
            -378558
          )),
          (g = r(g, h, p, u, e[m + 8], 11, -2022574463)),
          (u = r(u, g, h, p, e[m + 11], 16, 1839030562)),
          (p = r(p, u, g, h, e[m + 14], 23, -35309556)),
          (h = r(h, p, u, g, e[m + 1], 4, -1530992060)),
          (g = r(g, h, p, u, e[m + 4], 11, 1272893353)),
          (u = r(u, g, h, p, e[m + 7], 16, -155497632)),
          (p = r(p, u, g, h, e[m + 10], 23, -1094730640)),
          (h = r(h, p, u, g, e[m + 13], 4, 681279174)),
          (g = r(g, h, p, u, e[m], 11, -358537222)),
          (u = r(u, g, h, p, e[m + 3], 16, -722521979)),
          (p = r(p, u, g, h, e[m + 6], 23, 76029189)),
          (h = r(h, p, u, g, e[m + 9], 4, -640364487)),
          (g = r(g, h, p, u, e[m + 12], 11, -421815835)),
          (u = r(u, g, h, p, e[m + 15], 16, 530742520)),
          (h = s(
            h,
            (p = r(p, u, g, h, e[m + 2], 23, -995338651)),
            u,
            g,
            e[m],
            6,
            -198630844
          )),
          (g = s(g, h, p, u, e[m + 7], 10, 1126891415)),
          (u = s(u, g, h, p, e[m + 14], 15, -1416354905)),
          (p = s(p, u, g, h, e[m + 5], 21, -57434055)),
          (h = s(h, p, u, g, e[m + 12], 6, 1700485571)),
          (g = s(g, h, p, u, e[m + 3], 10, -1894986606)),
          (u = s(u, g, h, p, e[m + 10], 15, -1051523)),
          (p = s(p, u, g, h, e[m + 1], 21, -2054922799)),
          (h = s(h, p, u, g, e[m + 8], 6, 1873313359)),
          (g = s(g, h, p, u, e[m + 15], 10, -30611744)),
          (u = s(u, g, h, p, e[m + 6], 15, -1560198380)),
          (p = s(p, u, g, h, e[m + 13], 21, 1309151649)),
          (h = s(h, p, u, g, e[m + 4], 6, -145523070)),
          (g = s(g, h, p, u, e[m + 11], 10, -1120210379)),
          (u = s(u, g, h, p, e[m + 2], 15, 718787259)),
          (p = s(p, u, g, h, e[m + 9], 21, -343485551)),
          (h = t(h, o)),
          (p = t(p, l)),
          (u = t(u, c)),
          (g = t(g, d));
      return [h, p, u, g];
    }
    function l(e) {
      for (var t = "", i = 32 * e.length, a = 0; a < i; a += 8)
        t += String.fromCharCode((e[a >> 5] >>> a % 32) & 255);
      return t;
    }
    function c(e) {
      var t = [];
      for (t[(e.length >> 2) - 1] = void 0, a = 0; a < t.length; a += 1)
        t[a] = 0;
      for (var i = 8 * e.length, a = 0; a < i; a += 8)
        t[a >> 5] |= (255 & e.charCodeAt(a / 8)) << a % 32;
      return t;
    }
    function d(e) {
      for (var t, i = "0123456789abcdef", a = "", n = 0; n < e.length; n += 1)
        (t = e.charCodeAt(n)),
          (a += i.charAt((t >>> 4) & 15) + i.charAt(15 & t));
      return a;
    }
    function h(e) {
      return unescape(encodeURIComponent(e));
    }
    function p(e) {
      return l(o(c((t = h(e))), 8 * t.length));
      var t;
    }
    function u(e, t) {
      return (function (e, t) {
        var i,
          a,
          n = c(e),
          r = [],
          s = [];
        for (
          r[15] = s[15] = void 0,
            16 < n.length && (n = o(n, 8 * e.length)),
            i = 0;
          i < 16;
          i += 1
        )
          (r[i] = 909522486 ^ n[i]), (s[i] = 1549556828 ^ n[i]);
        return (
          (a = o(r.concat(c(t)), 512 + 8 * t.length)), l(o(s.concat(a), 640))
        );
      })(h(e), h(t));
    }
    function g(e, t, i) {
      return t ? (i ? u(t, e) : d(u(t, e))) : i ? p(e) : d(p(e));
    }
    "function" == typeof define && define.amd
      ? define(function () {
          return g;
        })
      : "object" == typeof module && module.exports
      ? (module.exports = g)
      : (e.md5 = g);
  })(this),
  /*! showdown v 1.9.1 - 02-11-2019 */
  function () {
    function e(e) {
      "use strict";
      var t = {
        omitExtraWLInCodeBlocks: {
          defaultValue: !1,
          describe: "Omit the default extra whiteline added to code blocks",
          type: "boolean",
        },
        noHeaderId: {
          defaultValue: !1,
          describe: "Turn on/off generated header id",
          type: "boolean",
        },
        prefixHeaderId: {
          defaultValue: !1,
          describe:
            "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
          type: "string",
        },
        rawPrefixHeaderId: {
          defaultValue: !1,
          describe:
            'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
          type: "boolean",
        },
        ghCompatibleHeaderId: {
          defaultValue: !1,
          describe:
            "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
          type: "boolean",
        },
        rawHeaderId: {
          defaultValue: !1,
          describe:
            "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
          type: "boolean",
        },
        headerLevelStart: {
          defaultValue: !1,
          describe: "The header blocks level start",
          type: "integer",
        },
        parseImgDimensions: {
          defaultValue: !1,
          describe: "Turn on/off image dimension parsing",
          type: "boolean",
        },
        simplifiedAutoLink: {
          defaultValue: !1,
          describe: "Turn on/off GFM autolink style",
          type: "boolean",
        },
        excludeTrailingPunctuationFromURLs: {
          defaultValue: !1,
          describe:
            "Excludes trailing punctuation from links generated with autoLinking",
          type: "boolean",
        },
        literalMidWordUnderscores: {
          defaultValue: !1,
          describe: "Parse midword underscores as literal underscores",
          type: "boolean",
        },
        literalMidWordAsterisks: {
          defaultValue: !1,
          describe: "Parse midword asterisks as literal asterisks",
          type: "boolean",
        },
        strikethrough: {
          defaultValue: !1,
          describe: "Turn on/off strikethrough support",
          type: "boolean",
        },
        tables: {
          defaultValue: !1,
          describe: "Turn on/off tables support",
          type: "boolean",
        },
        tablesHeaderId: {
          defaultValue: !1,
          describe: "Add an id to table headers",
          type: "boolean",
        },
        ghCodeBlocks: {
          defaultValue: !0,
          describe: "Turn on/off GFM fenced code blocks support",
          type: "boolean",
        },
        tasklists: {
          defaultValue: !1,
          describe: "Turn on/off GFM tasklist support",
          type: "boolean",
        },
        smoothLivePreview: {
          defaultValue: !1,
          describe:
            "Prevents weird effects in live previews due to incomplete input",
          type: "boolean",
        },
        smartIndentationFix: {
          defaultValue: !1,
          description: "Tries to smartly fix indentation in es6 strings",
          type: "boolean",
        },
        disableForced4SpacesIndentedSublists: {
          defaultValue: !1,
          description:
            "Disables the requirement of indenting nested sublists by 4 spaces",
          type: "boolean",
        },
        simpleLineBreaks: {
          defaultValue: !1,
          description: "Parses simple line breaks as <br> (GFM Style)",
          type: "boolean",
        },
        requireSpaceBeforeHeadingText: {
          defaultValue: !1,
          description:
            "Makes adding a space between `#` and the header text mandatory (GFM Style)",
          type: "boolean",
        },
        ghMentions: {
          defaultValue: !1,
          description: "Enables github @mentions",
          type: "boolean",
        },
        ghMentionsLink: {
          defaultValue: "https://github.com/{u}",
          description:
            "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
          type: "string",
        },
        encodeEmails: {
          defaultValue: !0,
          description:
            "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
          type: "boolean",
        },
        openLinksInNewWindow: {
          defaultValue: !1,
          description: "Open all links in new windows",
          type: "boolean",
        },
        backslashEscapesHTMLTags: {
          defaultValue: !1,
          description: "Support for HTML Tag escaping. ex: <div>foo</div>",
          type: "boolean",
        },
        emoji: {
          defaultValue: !1,
          description: "Enable emoji support. Ex: `this is a :smile: emoji`",
          type: "boolean",
        },
        underline: {
          defaultValue: !1,
          description:
            "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
          type: "boolean",
        },
        completeHTMLDocument: {
          defaultValue: !1,
          description:
            "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
          type: "boolean",
        },
        metadata: {
          defaultValue: !1,
          description:
            "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
          type: "boolean",
        },
        splitAdjacentBlockquotes: {
          defaultValue: !1,
          description: "Split adjacent blockquote blocks",
          type: "boolean",
        },
      };
      if (!1 === e) return JSON.parse(JSON.stringify(t));
      var i = {};
      for (var a in t) t.hasOwnProperty(a) && (i[a] = t[a].defaultValue);
      return i;
    }
    function t(e, t) {
      "use strict";
      var i = t
          ? "Error in " + t + " extension->"
          : "Error in unnamed extension",
        n = { valid: !0, error: "" };
      a.helper.isArray(e) || (e = [e]);
      for (var r = 0; r < e.length; ++r) {
        var s = i + " sub-extension " + r + ": ",
          o = e[r];
        if ("object" != typeof o)
          return (
            (n.valid = !1),
            (n.error = s + "must be an object, but " + typeof o + " given"),
            n
          );
        if (!a.helper.isString(o.type))
          return (
            (n.valid = !1),
            (n.error =
              s +
              'property "type" must be a string, but ' +
              typeof o.type +
              " given"),
            n
          );
        var l = (o.type = o.type.toLowerCase());
        if (
          ("language" === l && (l = o.type = "lang"),
          "html" === l && (l = o.type = "output"),
          "lang" !== l && "output" !== l && "listener" !== l)
        )
          return (
            (n.valid = !1),
            (n.error =
              s +
              "type " +
              l +
              ' is not recognized. Valid values: "lang/language", "output/html" or "listener"'),
            n
          );
        if ("listener" === l) {
          if (a.helper.isUndefined(o.listeners))
            return (
              (n.valid = !1),
              (n.error =
                s +
                '. Extensions of type "listener" must have a property called "listeners"'),
              n
            );
        } else if (
          a.helper.isUndefined(o.filter) &&
          a.helper.isUndefined(o.regex)
        )
          return (
            (n.valid = !1),
            (n.error =
              s +
              l +
              ' extensions must define either a "regex" property or a "filter" method'),
            n
          );
        if (o.listeners) {
          if ("object" != typeof o.listeners)
            return (
              (n.valid = !1),
              (n.error =
                s +
                '"listeners" property must be an object but ' +
                typeof o.listeners +
                " given"),
              n
            );
          for (var c in o.listeners)
            if (
              o.listeners.hasOwnProperty(c) &&
              "function" != typeof o.listeners[c]
            )
              return (
                (n.valid = !1),
                (n.error =
                  s +
                  '"listeners" property must be an hash of [event name]: [callback]. listeners.' +
                  c +
                  " must be a function but " +
                  typeof o.listeners[c] +
                  " given"),
                n
              );
        }
        if (o.filter) {
          if ("function" != typeof o.filter)
            return (
              (n.valid = !1),
              (n.error =
                s +
                '"filter" must be a function, but ' +
                typeof o.filter +
                " given"),
              n
            );
        } else if (o.regex) {
          if (
            (a.helper.isString(o.regex) && (o.regex = new RegExp(o.regex, "g")),
            !(o.regex instanceof RegExp))
          )
            return (
              (n.valid = !1),
              (n.error =
                s +
                '"regex" property must either be a string or a RegExp object, but ' +
                typeof o.regex +
                " given"),
              n
            );
          if (a.helper.isUndefined(o.replace))
            return (
              (n.valid = !1),
              (n.error =
                s +
                '"regex" extensions must implement a replace string or function'),
              n
            );
        }
      }
      return n;
    }
    function i(e, t) {
      "use strict";
      return "¨E" + t.charCodeAt(0) + "E";
    }
    var a = {},
      n = {},
      r = {},
      s = e(!0),
      o = "vanilla",
      l = {
        github: {
          omitExtraWLInCodeBlocks: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          disableForced4SpacesIndentedSublists: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghCompatibleHeaderId: !0,
          ghMentions: !0,
          backslashEscapesHTMLTags: !0,
          emoji: !0,
          splitAdjacentBlockquotes: !0,
        },
        original: { noHeaderId: !0, ghCodeBlocks: !1 },
        ghost: {
          omitExtraWLInCodeBlocks: !0,
          parseImgDimensions: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          smoothLivePreview: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghMentions: !1,
          encodeEmails: !0,
        },
        vanilla: e(!0),
        allOn: (function () {
          "use strict";
          var t = e(!0),
            i = {};
          for (var a in t) t.hasOwnProperty(a) && (i[a] = !0);
          return i;
        })(),
      };
    (a.helper = {}),
      (a.extensions = {}),
      (a.setOption = function (e, t) {
        "use strict";
        return (s[e] = t), this;
      }),
      (a.getOption = function (e) {
        "use strict";
        return s[e];
      }),
      (a.getOptions = function () {
        "use strict";
        return s;
      }),
      (a.resetOptions = function () {
        "use strict";
        s = e(!0);
      }),
      (a.setFlavor = function (e) {
        "use strict";
        if (!l.hasOwnProperty(e)) throw Error(e + " flavor was not found");
        a.resetOptions();
        var t = l[e];
        for (var i in ((o = e), t)) t.hasOwnProperty(i) && (s[i] = t[i]);
      }),
      (a.getFlavor = function () {
        "use strict";
        return o;
      }),
      (a.getFlavorOptions = function (e) {
        "use strict";
        if (l.hasOwnProperty(e)) return l[e];
      }),
      (a.getDefaultOptions = function (t) {
        "use strict";
        return e(t);
      }),
      (a.subParser = function (e, t) {
        "use strict";
        if (a.helper.isString(e)) {
          if (void 0 === t) {
            if (n.hasOwnProperty(e)) return n[e];
            throw Error("SubParser named " + e + " not registered!");
          }
          n[e] = t;
        }
      }),
      (a.extension = function (e, i) {
        "use strict";
        if (!a.helper.isString(e))
          throw Error("Extension 'name' must be a string");
        if (((e = a.helper.stdExtName(e)), a.helper.isUndefined(i))) {
          if (!r.hasOwnProperty(e))
            throw Error("Extension named " + e + " is not registered!");
          return r[e];
        }
        "function" == typeof i && (i = i()), a.helper.isArray(i) || (i = [i]);
        var n = t(i, e);
        if (!n.valid) throw Error(n.error);
        r[e] = i;
      }),
      (a.getAllExtensions = function () {
        "use strict";
        return r;
      }),
      (a.removeExtension = function (e) {
        "use strict";
        delete r[e];
      }),
      (a.resetExtensions = function () {
        "use strict";
        r = {};
      }),
      (a.validateExtension = function (e) {
        "use strict";
        var i = t(e, null);
        return !!i.valid || (console.warn(i.error), !1);
      }),
      a.hasOwnProperty("helper") || (a.helper = {}),
      (a.helper.isString = function (e) {
        "use strict";
        return "string" == typeof e || e instanceof String;
      }),
      (a.helper.isFunction = function (e) {
        "use strict";
        return e && "[object Function]" === {}.toString.call(e);
      }),
      (a.helper.isArray = function (e) {
        "use strict";
        return Array.isArray(e);
      }),
      (a.helper.isUndefined = function (e) {
        "use strict";
        return void 0 === e;
      }),
      (a.helper.forEach = function (e, t) {
        "use strict";
        if (a.helper.isUndefined(e)) throw new Error("obj param is required");
        if (a.helper.isUndefined(t))
          throw new Error("callback param is required");
        if (!a.helper.isFunction(t))
          throw new Error("callback param must be a function/closure");
        if ("function" == typeof e.forEach) e.forEach(t);
        else if (a.helper.isArray(e))
          for (var i = 0; i < e.length; i++) t(e[i], i, e);
        else {
          if ("object" != typeof e)
            throw new Error(
              "obj does not seem to be an array or an iterable object"
            );
          for (var n in e) e.hasOwnProperty(n) && t(e[n], n, e);
        }
      }),
      (a.helper.stdExtName = function (e) {
        "use strict";
        return e
          .replace(/[_?*+\/\\.^-]/g, "")
          .replace(/\s/g, "")
          .toLowerCase();
      }),
      (a.helper.escapeCharactersCallback = i),
      (a.helper.escapeCharacters = function (e, t, a) {
        "use strict";
        var n = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
        a && (n = "\\\\" + n);
        var r = new RegExp(n, "g");
        return e.replace(r, i);
      }),
      (a.helper.unescapeHTMLEntities = function (e) {
        "use strict";
        return e
          .replace(/&quot;/g, '"')
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&amp;/g, "&");
      });
    var c = function (e, t, i, a) {
      "use strict";
      var n,
        r,
        s,
        o,
        l,
        c = a || "",
        d = c.indexOf("g") > -1,
        h = new RegExp(t + "|" + i, "g" + c.replace(/g/g, "")),
        p = new RegExp(t, c.replace(/g/g, "")),
        u = [];
      do {
        for (n = 0; (s = h.exec(e)); )
          if (p.test(s[0])) n++ || (o = (r = h.lastIndex) - s[0].length);
          else if (n && !--n) {
            l = s.index + s[0].length;
            var g = {
              left: { start: o, end: r },
              match: { start: r, end: s.index },
              right: { start: s.index, end: l },
              wholeMatch: { start: o, end: l },
            };
            if ((u.push(g), !d)) return u;
          }
      } while (n && (h.lastIndex = r));
      return u;
    };
    (a.helper.matchRecursiveRegExp = function (e, t, i, a) {
      "use strict";
      for (var n = c(e, t, i, a), r = [], s = 0; s < n.length; ++s)
        r.push([
          e.slice(n[s].wholeMatch.start, n[s].wholeMatch.end),
          e.slice(n[s].match.start, n[s].match.end),
          e.slice(n[s].left.start, n[s].left.end),
          e.slice(n[s].right.start, n[s].right.end),
        ]);
      return r;
    }),
      (a.helper.replaceRecursiveRegExp = function (e, t, i, n, r) {
        "use strict";
        if (!a.helper.isFunction(t)) {
          var s = t;
          t = function () {
            return s;
          };
        }
        var o = c(e, i, n, r),
          l = e,
          d = o.length;
        if (d > 0) {
          var h = [];
          0 !== o[0].wholeMatch.start &&
            h.push(e.slice(0, o[0].wholeMatch.start));
          for (var p = 0; p < d; ++p)
            h.push(
              t(
                e.slice(o[p].wholeMatch.start, o[p].wholeMatch.end),
                e.slice(o[p].match.start, o[p].match.end),
                e.slice(o[p].left.start, o[p].left.end),
                e.slice(o[p].right.start, o[p].right.end)
              )
            ),
              p < d - 1 &&
                h.push(e.slice(o[p].wholeMatch.end, o[p + 1].wholeMatch.start));
          o[d - 1].wholeMatch.end < e.length &&
            h.push(e.slice(o[d - 1].wholeMatch.end)),
            (l = h.join(""));
        }
        return l;
      }),
      (a.helper.regexIndexOf = function (e, t, i) {
        "use strict";
        if (!a.helper.isString(e))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (t instanceof RegExp == 0)
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var n = e.substring(i || 0).search(t);
        return n >= 0 ? n + (i || 0) : n;
      }),
      (a.helper.splitAtIndex = function (e, t) {
        "use strict";
        if (!a.helper.isString(e))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [e.substring(0, t), e.substring(t)];
      }),
      (a.helper.encodeEmailAddress = function (e) {
        "use strict";
        var t = [
          function (e) {
            return "&#" + e.charCodeAt(0) + ";";
          },
          function (e) {
            return "&#x" + e.charCodeAt(0).toString(16) + ";";
          },
          function (e) {
            return e;
          },
        ];
        return e.replace(/./g, function (e) {
          if ("@" === e) e = t[Math.floor(2 * Math.random())](e);
          else {
            var i = Math.random();
            e = i > 0.9 ? t[2](e) : i > 0.45 ? t[1](e) : t[0](e);
          }
          return e;
        });
      }),
      (a.helper.padEnd = function (e, t, i) {
        "use strict";
        return (
          (t >>= 0),
          (i = String(i || " ")),
          e.length > t
            ? String(e)
            : ((t -= e.length) > i.length && (i += i.repeat(t / i.length)),
              String(e) + i.slice(0, t))
        );
      }),
      "undefined" == typeof console &&
        (console = {
          warn: function (e) {
            "use strict";
            alert(e);
          },
          log: function (e) {
            "use strict";
            alert(e);
          },
          error: function (e) {
            "use strict";
            throw e;
          },
        }),
      (a.helper.regexes = { asteriskDashAndColon: /([*_:~])/g }),
      (a.helper.emojis = {
        "+1": "👍",
        "-1": "👎",
        100: "💯",
        1234: "🔢",
        "1st_place_medal": "🥇",
        "2nd_place_medal": "🥈",
        "3rd_place_medal": "🥉",
        "8ball": "🎱",
        a: "🅰️",
        ab: "🆎",
        abc: "🔤",
        abcd: "🔡",
        accept: "🉑",
        aerial_tramway: "🚡",
        airplane: "✈️",
        alarm_clock: "⏰",
        alembic: "⚗️",
        alien: "👽",
        ambulance: "🚑",
        amphora: "🏺",
        anchor: "⚓️",
        angel: "👼",
        anger: "💢",
        angry: "😠",
        anguished: "😧",
        ant: "🐜",
        apple: "🍎",
        aquarius: "♒️",
        aries: "♈️",
        arrow_backward: "◀️",
        arrow_double_down: "⏬",
        arrow_double_up: "⏫",
        arrow_down: "⬇️",
        arrow_down_small: "🔽",
        arrow_forward: "▶️",
        arrow_heading_down: "⤵️",
        arrow_heading_up: "⤴️",
        arrow_left: "⬅️",
        arrow_lower_left: "↙️",
        arrow_lower_right: "↘️",
        arrow_right: "➡️",
        arrow_right_hook: "↪️",
        arrow_up: "⬆️",
        arrow_up_down: "↕️",
        arrow_up_small: "🔼",
        arrow_upper_left: "↖️",
        arrow_upper_right: "↗️",
        arrows_clockwise: "🔃",
        arrows_counterclockwise: "🔄",
        art: "🎨",
        articulated_lorry: "🚛",
        artificial_satellite: "🛰",
        astonished: "😲",
        athletic_shoe: "👟",
        atm: "🏧",
        atom_symbol: "⚛️",
        avocado: "🥑",
        b: "🅱️",
        baby: "👶",
        baby_bottle: "🍼",
        baby_chick: "🐤",
        baby_symbol: "🚼",
        back: "🔙",
        bacon: "🥓",
        badminton: "🏸",
        baggage_claim: "🛄",
        baguette_bread: "🥖",
        balance_scale: "⚖️",
        balloon: "🎈",
        ballot_box: "🗳",
        ballot_box_with_check: "☑️",
        bamboo: "🎍",
        banana: "🍌",
        bangbang: "‼️",
        bank: "🏦",
        bar_chart: "📊",
        barber: "💈",
        baseball: "⚾️",
        basketball: "🏀",
        basketball_man: "⛹️",
        basketball_woman: "⛹️&zwj;♀️",
        bat: "🦇",
        bath: "🛀",
        bathtub: "🛁",
        battery: "🔋",
        beach_umbrella: "🏖",
        bear: "🐻",
        bed: "🛏",
        bee: "🐝",
        beer: "🍺",
        beers: "🍻",
        beetle: "🐞",
        beginner: "🔰",
        bell: "🔔",
        bellhop_bell: "🛎",
        bento: "🍱",
        biking_man: "🚴",
        bike: "🚲",
        biking_woman: "🚴&zwj;♀️",
        bikini: "👙",
        biohazard: "☣️",
        bird: "🐦",
        birthday: "🎂",
        black_circle: "⚫️",
        black_flag: "🏴",
        black_heart: "🖤",
        black_joker: "🃏",
        black_large_square: "⬛️",
        black_medium_small_square: "◾️",
        black_medium_square: "◼️",
        black_nib: "✒️",
        black_small_square: "▪️",
        black_square_button: "🔲",
        blonde_man: "👱",
        blonde_woman: "👱&zwj;♀️",
        blossom: "🌼",
        blowfish: "🐡",
        blue_book: "📘",
        blue_car: "🚙",
        blue_heart: "💙",
        blush: "😊",
        boar: "🐗",
        boat: "⛵️",
        bomb: "💣",
        book: "📖",
        bookmark: "🔖",
        bookmark_tabs: "📑",
        books: "📚",
        boom: "💥",
        boot: "👢",
        bouquet: "💐",
        bowing_man: "🙇",
        bow_and_arrow: "🏹",
        bowing_woman: "🙇&zwj;♀️",
        bowling: "🎳",
        boxing_glove: "🥊",
        boy: "👦",
        bread: "🍞",
        bride_with_veil: "👰",
        bridge_at_night: "🌉",
        briefcase: "💼",
        broken_heart: "💔",
        bug: "🐛",
        building_construction: "🏗",
        bulb: "💡",
        bullettrain_front: "🚅",
        bullettrain_side: "🚄",
        burrito: "🌯",
        bus: "🚌",
        business_suit_levitating: "🕴",
        busstop: "🚏",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        butterfly: "🦋",
        cactus: "🌵",
        cake: "🍰",
        calendar: "📆",
        call_me_hand: "🤙",
        calling: "📲",
        camel: "🐫",
        camera: "📷",
        camera_flash: "📸",
        camping: "🏕",
        cancer: "♋️",
        candle: "🕯",
        candy: "🍬",
        canoe: "🛶",
        capital_abcd: "🔠",
        capricorn: "♑️",
        car: "🚗",
        card_file_box: "🗃",
        card_index: "📇",
        card_index_dividers: "🗂",
        carousel_horse: "🎠",
        carrot: "🥕",
        cat: "🐱",
        cat2: "🐈",
        cd: "💿",
        chains: "⛓",
        champagne: "🍾",
        chart: "💹",
        chart_with_downwards_trend: "📉",
        chart_with_upwards_trend: "📈",
        checkered_flag: "🏁",
        cheese: "🧀",
        cherries: "🍒",
        cherry_blossom: "🌸",
        chestnut: "🌰",
        chicken: "🐔",
        children_crossing: "🚸",
        chipmunk: "🐿",
        chocolate_bar: "🍫",
        christmas_tree: "🎄",
        church: "⛪️",
        cinema: "🎦",
        circus_tent: "🎪",
        city_sunrise: "🌇",
        city_sunset: "🌆",
        cityscape: "🏙",
        cl: "🆑",
        clamp: "🗜",
        clap: "👏",
        clapper: "🎬",
        classical_building: "🏛",
        clinking_glasses: "🥂",
        clipboard: "📋",
        clock1: "🕐",
        clock10: "🕙",
        clock1030: "🕥",
        clock11: "🕚",
        clock1130: "🕦",
        clock12: "🕛",
        clock1230: "🕧",
        clock130: "🕜",
        clock2: "🕑",
        clock230: "🕝",
        clock3: "🕒",
        clock330: "🕞",
        clock4: "🕓",
        clock430: "🕟",
        clock5: "🕔",
        clock530: "🕠",
        clock6: "🕕",
        clock630: "🕡",
        clock7: "🕖",
        clock730: "🕢",
        clock8: "🕗",
        clock830: "🕣",
        clock9: "🕘",
        clock930: "🕤",
        closed_book: "📕",
        closed_lock_with_key: "🔐",
        closed_umbrella: "🌂",
        cloud: "☁️",
        cloud_with_lightning: "🌩",
        cloud_with_lightning_and_rain: "⛈",
        cloud_with_rain: "🌧",
        cloud_with_snow: "🌨",
        clown_face: "🤡",
        clubs: "♣️",
        cocktail: "🍸",
        coffee: "☕️",
        coffin: "⚰️",
        cold_sweat: "😰",
        comet: "☄️",
        computer: "💻",
        computer_mouse: "🖱",
        confetti_ball: "🎊",
        confounded: "😖",
        confused: "😕",
        congratulations: "㊗️",
        construction: "🚧",
        construction_worker_man: "👷",
        construction_worker_woman: "👷&zwj;♀️",
        control_knobs: "🎛",
        convenience_store: "🏪",
        cookie: "🍪",
        cool: "🆒",
        policeman: "👮",
        copyright: "©️",
        corn: "🌽",
        couch_and_lamp: "🛋",
        couple: "👫",
        couple_with_heart_woman_man: "💑",
        couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
        couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
        couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
        couplekiss_man_woman: "💏",
        couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
        cow: "🐮",
        cow2: "🐄",
        cowboy_hat_face: "🤠",
        crab: "🦀",
        crayon: "🖍",
        credit_card: "💳",
        crescent_moon: "🌙",
        cricket: "🏏",
        crocodile: "🐊",
        croissant: "🥐",
        crossed_fingers: "🤞",
        crossed_flags: "🎌",
        crossed_swords: "⚔️",
        crown: "👑",
        cry: "😢",
        crying_cat_face: "😿",
        crystal_ball: "🔮",
        cucumber: "🥒",
        cupid: "💘",
        curly_loop: "➰",
        currency_exchange: "💱",
        curry: "🍛",
        custard: "🍮",
        customs: "🛃",
        cyclone: "🌀",
        dagger: "🗡",
        dancer: "💃",
        dancing_women: "👯",
        dancing_men: "👯&zwj;♂️",
        dango: "🍡",
        dark_sunglasses: "🕶",
        dart: "🎯",
        dash: "💨",
        date: "📅",
        deciduous_tree: "🌳",
        deer: "🦌",
        department_store: "🏬",
        derelict_house: "🏚",
        desert: "🏜",
        desert_island: "🏝",
        desktop_computer: "🖥",
        male_detective: "🕵️",
        diamond_shape_with_a_dot_inside: "💠",
        diamonds: "♦️",
        disappointed: "😞",
        disappointed_relieved: "😥",
        dizzy: "💫",
        dizzy_face: "😵",
        do_not_litter: "🚯",
        dog: "🐶",
        dog2: "🐕",
        dollar: "💵",
        dolls: "🎎",
        dolphin: "🐬",
        door: "🚪",
        doughnut: "🍩",
        dove: "🕊",
        dragon: "🐉",
        dragon_face: "🐲",
        dress: "👗",
        dromedary_camel: "🐪",
        drooling_face: "🤤",
        droplet: "💧",
        drum: "🥁",
        duck: "🦆",
        dvd: "📀",
        "e-mail": "📧",
        eagle: "🦅",
        ear: "👂",
        ear_of_rice: "🌾",
        earth_africa: "🌍",
        earth_americas: "🌎",
        earth_asia: "🌏",
        egg: "🥚",
        eggplant: "🍆",
        eight_pointed_black_star: "✴️",
        eight_spoked_asterisk: "✳️",
        electric_plug: "🔌",
        elephant: "🐘",
        email: "✉️",
        end: "🔚",
        envelope_with_arrow: "📩",
        euro: "💶",
        european_castle: "🏰",
        european_post_office: "🏤",
        evergreen_tree: "🌲",
        exclamation: "❗️",
        expressionless: "😑",
        eye: "👁",
        eye_speech_bubble: "👁&zwj;🗨",
        eyeglasses: "👓",
        eyes: "👀",
        face_with_head_bandage: "🤕",
        face_with_thermometer: "🤒",
        fist_oncoming: "👊",
        factory: "🏭",
        fallen_leaf: "🍂",
        family_man_woman_boy: "👪",
        family_man_boy: "👨&zwj;👦",
        family_man_boy_boy: "👨&zwj;👦&zwj;👦",
        family_man_girl: "👨&zwj;👧",
        family_man_girl_boy: "👨&zwj;👧&zwj;👦",
        family_man_girl_girl: "👨&zwj;👧&zwj;👧",
        family_man_man_boy: "👨&zwj;👨&zwj;👦",
        family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
        family_man_man_girl: "👨&zwj;👨&zwj;👧",
        family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
        family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
        family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
        family_man_woman_girl: "👨&zwj;👩&zwj;👧",
        family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
        family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
        family_woman_boy: "👩&zwj;👦",
        family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
        family_woman_girl: "👩&zwj;👧",
        family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
        family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
        family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
        family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
        family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
        family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
        family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
        fast_forward: "⏩",
        fax: "📠",
        fearful: "😨",
        feet: "🐾",
        female_detective: "🕵️&zwj;♀️",
        ferris_wheel: "🎡",
        ferry: "⛴",
        field_hockey: "🏑",
        file_cabinet: "🗄",
        file_folder: "📁",
        film_projector: "📽",
        film_strip: "🎞",
        fire: "🔥",
        fire_engine: "🚒",
        fireworks: "🎆",
        first_quarter_moon: "🌓",
        first_quarter_moon_with_face: "🌛",
        fish: "🐟",
        fish_cake: "🍥",
        fishing_pole_and_fish: "🎣",
        fist_raised: "✊",
        fist_left: "🤛",
        fist_right: "🤜",
        flags: "🎏",
        flashlight: "🔦",
        fleur_de_lis: "⚜️",
        flight_arrival: "🛬",
        flight_departure: "🛫",
        floppy_disk: "💾",
        flower_playing_cards: "🎴",
        flushed: "😳",
        fog: "🌫",
        foggy: "🌁",
        football: "🏈",
        footprints: "👣",
        fork_and_knife: "🍴",
        fountain: "⛲️",
        fountain_pen: "🖋",
        four_leaf_clover: "🍀",
        fox_face: "🦊",
        framed_picture: "🖼",
        free: "🆓",
        fried_egg: "🍳",
        fried_shrimp: "🍤",
        fries: "🍟",
        frog: "🐸",
        frowning: "😦",
        frowning_face: "☹️",
        frowning_man: "🙍&zwj;♂️",
        frowning_woman: "🙍",
        middle_finger: "🖕",
        fuelpump: "⛽️",
        full_moon: "🌕",
        full_moon_with_face: "🌝",
        funeral_urn: "⚱️",
        game_die: "🎲",
        gear: "⚙️",
        gem: "💎",
        gemini: "♊️",
        ghost: "👻",
        gift: "🎁",
        gift_heart: "💝",
        girl: "👧",
        globe_with_meridians: "🌐",
        goal_net: "🥅",
        goat: "🐐",
        golf: "⛳️",
        golfing_man: "🏌️",
        golfing_woman: "🏌️&zwj;♀️",
        gorilla: "🦍",
        grapes: "🍇",
        green_apple: "🍏",
        green_book: "📗",
        green_heart: "💚",
        green_salad: "🥗",
        grey_exclamation: "❕",
        grey_question: "❔",
        grimacing: "😬",
        grin: "😁",
        grinning: "😀",
        guardsman: "💂",
        guardswoman: "💂&zwj;♀️",
        guitar: "🎸",
        gun: "🔫",
        haircut_woman: "💇",
        haircut_man: "💇&zwj;♂️",
        hamburger: "🍔",
        hammer: "🔨",
        hammer_and_pick: "⚒",
        hammer_and_wrench: "🛠",
        hamster: "🐹",
        hand: "✋",
        handbag: "👜",
        handshake: "🤝",
        hankey: "💩",
        hatched_chick: "🐥",
        hatching_chick: "🐣",
        headphones: "🎧",
        hear_no_evil: "🙉",
        heart: "❤️",
        heart_decoration: "💟",
        heart_eyes: "😍",
        heart_eyes_cat: "😻",
        heartbeat: "💓",
        heartpulse: "💗",
        hearts: "♥️",
        heavy_check_mark: "✔️",
        heavy_division_sign: "➗",
        heavy_dollar_sign: "💲",
        heavy_heart_exclamation: "❣️",
        heavy_minus_sign: "➖",
        heavy_multiplication_x: "✖️",
        heavy_plus_sign: "➕",
        helicopter: "🚁",
        herb: "🌿",
        hibiscus: "🌺",
        high_brightness: "🔆",
        high_heel: "👠",
        hocho: "🔪",
        hole: "🕳",
        honey_pot: "🍯",
        horse: "🐴",
        horse_racing: "🏇",
        hospital: "🏥",
        hot_pepper: "🌶",
        hotdog: "🌭",
        hotel: "🏨",
        hotsprings: "♨️",
        hourglass: "⌛️",
        hourglass_flowing_sand: "⏳",
        house: "🏠",
        house_with_garden: "🏡",
        houses: "🏘",
        hugs: "🤗",
        hushed: "😯",
        ice_cream: "🍨",
        ice_hockey: "🏒",
        ice_skate: "⛸",
        icecream: "🍦",
        id: "🆔",
        ideograph_advantage: "🉐",
        imp: "👿",
        inbox_tray: "📥",
        incoming_envelope: "📨",
        tipping_hand_woman: "💁",
        information_source: "ℹ️",
        innocent: "😇",
        interrobang: "⁉️",
        iphone: "📱",
        izakaya_lantern: "🏮",
        jack_o_lantern: "🎃",
        japan: "🗾",
        japanese_castle: "🏯",
        japanese_goblin: "👺",
        japanese_ogre: "👹",
        jeans: "👖",
        joy: "😂",
        joy_cat: "😹",
        joystick: "🕹",
        kaaba: "🕋",
        key: "🔑",
        keyboard: "⌨️",
        keycap_ten: "🔟",
        kick_scooter: "🛴",
        kimono: "👘",
        kiss: "💋",
        kissing: "😗",
        kissing_cat: "😽",
        kissing_closed_eyes: "😚",
        kissing_heart: "😘",
        kissing_smiling_eyes: "😙",
        kiwi_fruit: "🥝",
        koala: "🐨",
        koko: "🈁",
        label: "🏷",
        large_blue_circle: "🔵",
        large_blue_diamond: "🔷",
        large_orange_diamond: "🔶",
        last_quarter_moon: "🌗",
        last_quarter_moon_with_face: "🌜",
        latin_cross: "✝️",
        laughing: "😆",
        leaves: "🍃",
        ledger: "📒",
        left_luggage: "🛅",
        left_right_arrow: "↔️",
        leftwards_arrow_with_hook: "↩️",
        lemon: "🍋",
        leo: "♌️",
        leopard: "🐆",
        level_slider: "🎚",
        libra: "♎️",
        light_rail: "🚈",
        link: "🔗",
        lion: "🦁",
        lips: "👄",
        lipstick: "💄",
        lizard: "🦎",
        lock: "🔒",
        lock_with_ink_pen: "🔏",
        lollipop: "🍭",
        loop: "➿",
        loud_sound: "🔊",
        loudspeaker: "📢",
        love_hotel: "🏩",
        love_letter: "💌",
        low_brightness: "🔅",
        lying_face: "🤥",
        m: "Ⓜ️",
        mag: "🔍",
        mag_right: "🔎",
        mahjong: "🀄️",
        mailbox: "📫",
        mailbox_closed: "📪",
        mailbox_with_mail: "📬",
        mailbox_with_no_mail: "📭",
        man: "👨",
        man_artist: "👨&zwj;🎨",
        man_astronaut: "👨&zwj;🚀",
        man_cartwheeling: "🤸&zwj;♂️",
        man_cook: "👨&zwj;🍳",
        man_dancing: "🕺",
        man_facepalming: "🤦&zwj;♂️",
        man_factory_worker: "👨&zwj;🏭",
        man_farmer: "👨&zwj;🌾",
        man_firefighter: "👨&zwj;🚒",
        man_health_worker: "👨&zwj;⚕️",
        man_in_tuxedo: "🤵",
        man_judge: "👨&zwj;⚖️",
        man_juggling: "🤹&zwj;♂️",
        man_mechanic: "👨&zwj;🔧",
        man_office_worker: "👨&zwj;💼",
        man_pilot: "👨&zwj;✈️",
        man_playing_handball: "🤾&zwj;♂️",
        man_playing_water_polo: "🤽&zwj;♂️",
        man_scientist: "👨&zwj;🔬",
        man_shrugging: "🤷&zwj;♂️",
        man_singer: "👨&zwj;🎤",
        man_student: "👨&zwj;🎓",
        man_teacher: "👨&zwj;🏫",
        man_technologist: "👨&zwj;💻",
        man_with_gua_pi_mao: "👲",
        man_with_turban: "👳",
        tangerine: "🍊",
        mans_shoe: "👞",
        mantelpiece_clock: "🕰",
        maple_leaf: "🍁",
        martial_arts_uniform: "🥋",
        mask: "😷",
        massage_woman: "💆",
        massage_man: "💆&zwj;♂️",
        meat_on_bone: "🍖",
        medal_military: "🎖",
        medal_sports: "🏅",
        mega: "📣",
        melon: "🍈",
        memo: "📝",
        men_wrestling: "🤼&zwj;♂️",
        menorah: "🕎",
        mens: "🚹",
        metal: "🤘",
        metro: "🚇",
        microphone: "🎤",
        microscope: "🔬",
        milk_glass: "🥛",
        milky_way: "🌌",
        minibus: "🚐",
        minidisc: "💽",
        mobile_phone_off: "📴",
        money_mouth_face: "🤑",
        money_with_wings: "💸",
        moneybag: "💰",
        monkey: "🐒",
        monkey_face: "🐵",
        monorail: "🚝",
        moon: "🌔",
        mortar_board: "🎓",
        mosque: "🕌",
        motor_boat: "🛥",
        motor_scooter: "🛵",
        motorcycle: "🏍",
        motorway: "🛣",
        mount_fuji: "🗻",
        mountain: "⛰",
        mountain_biking_man: "🚵",
        mountain_biking_woman: "🚵&zwj;♀️",
        mountain_cableway: "🚠",
        mountain_railway: "🚞",
        mountain_snow: "🏔",
        mouse: "🐭",
        mouse2: "🐁",
        movie_camera: "🎥",
        moyai: "🗿",
        mrs_claus: "🤶",
        muscle: "💪",
        mushroom: "🍄",
        musical_keyboard: "🎹",
        musical_note: "🎵",
        musical_score: "🎼",
        mute: "🔇",
        nail_care: "💅",
        name_badge: "📛",
        national_park: "🏞",
        nauseated_face: "🤢",
        necktie: "👔",
        negative_squared_cross_mark: "❎",
        nerd_face: "🤓",
        neutral_face: "😐",
        new: "🆕",
        new_moon: "🌑",
        new_moon_with_face: "🌚",
        newspaper: "📰",
        newspaper_roll: "🗞",
        next_track_button: "⏭",
        ng: "🆖",
        no_good_man: "🙅&zwj;♂️",
        no_good_woman: "🙅",
        night_with_stars: "🌃",
        no_bell: "🔕",
        no_bicycles: "🚳",
        no_entry: "⛔️",
        no_entry_sign: "🚫",
        no_mobile_phones: "📵",
        no_mouth: "😶",
        no_pedestrians: "🚷",
        no_smoking: "🚭",
        "non-potable_water": "🚱",
        nose: "👃",
        notebook: "📓",
        notebook_with_decorative_cover: "📔",
        notes: "🎶",
        nut_and_bolt: "🔩",
        o: "⭕️",
        o2: "🅾️",
        ocean: "🌊",
        octopus: "🐙",
        oden: "🍢",
        office: "🏢",
        oil_drum: "🛢",
        ok: "🆗",
        ok_hand: "👌",
        ok_man: "🙆&zwj;♂️",
        ok_woman: "🙆",
        old_key: "🗝",
        older_man: "👴",
        older_woman: "👵",
        om: "🕉",
        on: "🔛",
        oncoming_automobile: "🚘",
        oncoming_bus: "🚍",
        oncoming_police_car: "🚔",
        oncoming_taxi: "🚖",
        open_file_folder: "📂",
        open_hands: "👐",
        open_mouth: "😮",
        open_umbrella: "☂️",
        ophiuchus: "⛎",
        orange_book: "📙",
        orthodox_cross: "☦️",
        outbox_tray: "📤",
        owl: "🦉",
        ox: "🐂",
        package: "📦",
        page_facing_up: "📄",
        page_with_curl: "📃",
        pager: "📟",
        paintbrush: "🖌",
        palm_tree: "🌴",
        pancakes: "🥞",
        panda_face: "🐼",
        paperclip: "📎",
        paperclips: "🖇",
        parasol_on_ground: "⛱",
        parking: "🅿️",
        part_alternation_mark: "〽️",
        partly_sunny: "⛅️",
        passenger_ship: "🛳",
        passport_control: "🛂",
        pause_button: "⏸",
        peace_symbol: "☮️",
        peach: "🍑",
        peanuts: "🥜",
        pear: "🍐",
        pen: "🖊",
        pencil2: "✏️",
        penguin: "🐧",
        pensive: "😔",
        performing_arts: "🎭",
        persevere: "😣",
        person_fencing: "🤺",
        pouting_woman: "🙎",
        phone: "☎️",
        pick: "⛏",
        pig: "🐷",
        pig2: "🐖",
        pig_nose: "🐽",
        pill: "💊",
        pineapple: "🍍",
        ping_pong: "🏓",
        pisces: "♓️",
        pizza: "🍕",
        place_of_worship: "🛐",
        plate_with_cutlery: "🍽",
        play_or_pause_button: "⏯",
        point_down: "👇",
        point_left: "👈",
        point_right: "👉",
        point_up: "☝️",
        point_up_2: "👆",
        police_car: "🚓",
        policewoman: "👮&zwj;♀️",
        poodle: "🐩",
        popcorn: "🍿",
        post_office: "🏣",
        postal_horn: "📯",
        postbox: "📮",
        potable_water: "🚰",
        potato: "🥔",
        pouch: "👝",
        poultry_leg: "🍗",
        pound: "💷",
        rage: "😡",
        pouting_cat: "😾",
        pouting_man: "🙎&zwj;♂️",
        pray: "🙏",
        prayer_beads: "📿",
        pregnant_woman: "🤰",
        previous_track_button: "⏮",
        prince: "🤴",
        princess: "👸",
        printer: "🖨",
        purple_heart: "💜",
        purse: "👛",
        pushpin: "📌",
        put_litter_in_its_place: "🚮",
        question: "❓",
        rabbit: "🐰",
        rabbit2: "🐇",
        racehorse: "🐎",
        racing_car: "🏎",
        radio: "📻",
        radio_button: "🔘",
        radioactive: "☢️",
        railway_car: "🚃",
        railway_track: "🛤",
        rainbow: "🌈",
        rainbow_flag: "🏳️&zwj;🌈",
        raised_back_of_hand: "🤚",
        raised_hand_with_fingers_splayed: "🖐",
        raised_hands: "🙌",
        raising_hand_woman: "🙋",
        raising_hand_man: "🙋&zwj;♂️",
        ram: "🐏",
        ramen: "🍜",
        rat: "🐀",
        record_button: "⏺",
        recycle: "♻️",
        red_circle: "🔴",
        registered: "®️",
        relaxed: "☺️",
        relieved: "😌",
        reminder_ribbon: "🎗",
        repeat: "🔁",
        repeat_one: "🔂",
        rescue_worker_helmet: "⛑",
        restroom: "🚻",
        revolving_hearts: "💞",
        rewind: "⏪",
        rhinoceros: "🦏",
        ribbon: "🎀",
        rice: "🍚",
        rice_ball: "🍙",
        rice_cracker: "🍘",
        rice_scene: "🎑",
        right_anger_bubble: "🗯",
        ring: "💍",
        robot: "🤖",
        rocket: "🚀",
        rofl: "🤣",
        roll_eyes: "🙄",
        roller_coaster: "🎢",
        rooster: "🐓",
        rose: "🌹",
        rosette: "🏵",
        rotating_light: "🚨",
        round_pushpin: "📍",
        rowing_man: "🚣",
        rowing_woman: "🚣&zwj;♀️",
        rugby_football: "🏉",
        running_man: "🏃",
        running_shirt_with_sash: "🎽",
        running_woman: "🏃&zwj;♀️",
        sa: "🈂️",
        sagittarius: "♐️",
        sake: "🍶",
        sandal: "👡",
        santa: "🎅",
        satellite: "📡",
        saxophone: "🎷",
        school: "🏫",
        school_satchel: "🎒",
        scissors: "✂️",
        scorpion: "🦂",
        scorpius: "♏️",
        scream: "😱",
        scream_cat: "🙀",
        scroll: "📜",
        seat: "💺",
        secret: "㊙️",
        see_no_evil: "🙈",
        seedling: "🌱",
        selfie: "🤳",
        shallow_pan_of_food: "🥘",
        shamrock: "☘️",
        shark: "🦈",
        shaved_ice: "🍧",
        sheep: "🐑",
        shell: "🐚",
        shield: "🛡",
        shinto_shrine: "⛩",
        ship: "🚢",
        shirt: "👕",
        shopping: "🛍",
        shopping_cart: "🛒",
        shower: "🚿",
        shrimp: "🦐",
        signal_strength: "📶",
        six_pointed_star: "🔯",
        ski: "🎿",
        skier: "⛷",
        skull: "💀",
        skull_and_crossbones: "☠️",
        sleeping: "😴",
        sleeping_bed: "🛌",
        sleepy: "😪",
        slightly_frowning_face: "🙁",
        slightly_smiling_face: "🙂",
        slot_machine: "🎰",
        small_airplane: "🛩",
        small_blue_diamond: "🔹",
        small_orange_diamond: "🔸",
        small_red_triangle: "🔺",
        small_red_triangle_down: "🔻",
        smile: "😄",
        smile_cat: "😸",
        smiley: "😃",
        smiley_cat: "😺",
        smiling_imp: "😈",
        smirk: "😏",
        smirk_cat: "😼",
        smoking: "🚬",
        snail: "🐌",
        snake: "🐍",
        sneezing_face: "🤧",
        snowboarder: "🏂",
        snowflake: "❄️",
        snowman: "⛄️",
        snowman_with_snow: "☃️",
        sob: "😭",
        soccer: "⚽️",
        soon: "🔜",
        sos: "🆘",
        sound: "🔉",
        space_invader: "👾",
        spades: "♠️",
        spaghetti: "🍝",
        sparkle: "❇️",
        sparkler: "🎇",
        sparkles: "✨",
        sparkling_heart: "💖",
        speak_no_evil: "🙊",
        speaker: "🔈",
        speaking_head: "🗣",
        speech_balloon: "💬",
        speedboat: "🚤",
        spider: "🕷",
        spider_web: "🕸",
        spiral_calendar: "🗓",
        spiral_notepad: "🗒",
        spoon: "🥄",
        squid: "🦑",
        stadium: "🏟",
        star: "⭐️",
        star2: "🌟",
        star_and_crescent: "☪️",
        star_of_david: "✡️",
        stars: "🌠",
        station: "🚉",
        statue_of_liberty: "🗽",
        steam_locomotive: "🚂",
        stew: "🍲",
        stop_button: "⏹",
        stop_sign: "🛑",
        stopwatch: "⏱",
        straight_ruler: "📏",
        strawberry: "🍓",
        stuck_out_tongue: "😛",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue_winking_eye: "😜",
        studio_microphone: "🎙",
        stuffed_flatbread: "🥙",
        sun_behind_large_cloud: "🌥",
        sun_behind_rain_cloud: "🌦",
        sun_behind_small_cloud: "🌤",
        sun_with_face: "🌞",
        sunflower: "🌻",
        sunglasses: "😎",
        sunny: "☀️",
        sunrise: "🌅",
        sunrise_over_mountains: "🌄",
        surfing_man: "🏄",
        surfing_woman: "🏄&zwj;♀️",
        sushi: "🍣",
        suspension_railway: "🚟",
        sweat: "😓",
        sweat_drops: "💦",
        sweat_smile: "😅",
        sweet_potato: "🍠",
        swimming_man: "🏊",
        swimming_woman: "🏊&zwj;♀️",
        symbols: "🔣",
        synagogue: "🕍",
        syringe: "💉",
        taco: "🌮",
        tada: "🎉",
        tanabata_tree: "🎋",
        taurus: "♉️",
        taxi: "🚕",
        tea: "🍵",
        telephone_receiver: "📞",
        telescope: "🔭",
        tennis: "🎾",
        tent: "⛺️",
        thermometer: "🌡",
        thinking: "🤔",
        thought_balloon: "💭",
        ticket: "🎫",
        tickets: "🎟",
        tiger: "🐯",
        tiger2: "🐅",
        timer_clock: "⏲",
        tipping_hand_man: "💁&zwj;♂️",
        tired_face: "😫",
        tm: "™️",
        toilet: "🚽",
        tokyo_tower: "🗼",
        tomato: "🍅",
        tongue: "👅",
        top: "🔝",
        tophat: "🎩",
        tornado: "🌪",
        trackball: "🖲",
        tractor: "🚜",
        traffic_light: "🚥",
        train: "🚋",
        train2: "🚆",
        tram: "🚊",
        triangular_flag_on_post: "🚩",
        triangular_ruler: "📐",
        trident: "🔱",
        triumph: "😤",
        trolleybus: "🚎",
        trophy: "🏆",
        tropical_drink: "🍹",
        tropical_fish: "🐠",
        truck: "🚚",
        trumpet: "🎺",
        tulip: "🌷",
        tumbler_glass: "🥃",
        turkey: "🦃",
        turtle: "🐢",
        tv: "📺",
        twisted_rightwards_arrows: "🔀",
        two_hearts: "💕",
        two_men_holding_hands: "👬",
        two_women_holding_hands: "👭",
        u5272: "🈹",
        u5408: "🈴",
        u55b6: "🈺",
        u6307: "🈯️",
        u6708: "🈷️",
        u6709: "🈶",
        u6e80: "🈵",
        u7121: "🈚️",
        u7533: "🈸",
        u7981: "🈲",
        u7a7a: "🈳",
        umbrella: "☔️",
        unamused: "😒",
        underage: "🔞",
        unicorn: "🦄",
        unlock: "🔓",
        up: "🆙",
        upside_down_face: "🙃",
        v: "✌️",
        vertical_traffic_light: "🚦",
        vhs: "📼",
        vibration_mode: "📳",
        video_camera: "📹",
        video_game: "🎮",
        violin: "🎻",
        virgo: "♍️",
        volcano: "🌋",
        volleyball: "🏐",
        vs: "🆚",
        vulcan_salute: "🖖",
        walking_man: "🚶",
        walking_woman: "🚶&zwj;♀️",
        waning_crescent_moon: "🌘",
        waning_gibbous_moon: "🌖",
        warning: "⚠️",
        wastebasket: "🗑",
        watch: "⌚️",
        water_buffalo: "🐃",
        watermelon: "🍉",
        wave: "👋",
        wavy_dash: "〰️",
        waxing_crescent_moon: "🌒",
        wc: "🚾",
        weary: "😩",
        wedding: "💒",
        weight_lifting_man: "🏋️",
        weight_lifting_woman: "🏋️&zwj;♀️",
        whale: "🐳",
        whale2: "🐋",
        wheel_of_dharma: "☸️",
        wheelchair: "♿️",
        white_check_mark: "✅",
        white_circle: "⚪️",
        white_flag: "🏳️",
        white_flower: "💮",
        white_large_square: "⬜️",
        white_medium_small_square: "◽️",
        white_medium_square: "◻️",
        white_small_square: "▫️",
        white_square_button: "🔳",
        wilted_flower: "🥀",
        wind_chime: "🎐",
        wind_face: "🌬",
        wine_glass: "🍷",
        wink: "😉",
        wolf: "🐺",
        woman: "👩",
        woman_artist: "👩&zwj;🎨",
        woman_astronaut: "👩&zwj;🚀",
        woman_cartwheeling: "🤸&zwj;♀️",
        woman_cook: "👩&zwj;🍳",
        woman_facepalming: "🤦&zwj;♀️",
        woman_factory_worker: "👩&zwj;🏭",
        woman_farmer: "👩&zwj;🌾",
        woman_firefighter: "👩&zwj;🚒",
        woman_health_worker: "👩&zwj;⚕️",
        woman_judge: "👩&zwj;⚖️",
        woman_juggling: "🤹&zwj;♀️",
        woman_mechanic: "👩&zwj;🔧",
        woman_office_worker: "👩&zwj;💼",
        woman_pilot: "👩&zwj;✈️",
        woman_playing_handball: "🤾&zwj;♀️",
        woman_playing_water_polo: "🤽&zwj;♀️",
        woman_scientist: "👩&zwj;🔬",
        woman_shrugging: "🤷&zwj;♀️",
        woman_singer: "👩&zwj;🎤",
        woman_student: "👩&zwj;🎓",
        woman_teacher: "👩&zwj;🏫",
        woman_technologist: "👩&zwj;💻",
        woman_with_turban: "👳&zwj;♀️",
        womans_clothes: "👚",
        womans_hat: "👒",
        women_wrestling: "🤼&zwj;♀️",
        womens: "🚺",
        world_map: "🗺",
        worried: "😟",
        wrench: "🔧",
        writing_hand: "✍️",
        x: "❌",
        yellow_heart: "💛",
        yen: "💴",
        yin_yang: "☯️",
        yum: "😋",
        zap: "⚡️",
        zipper_mouth_face: "🤐",
        zzz: "💤",
        octocat:
          '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown:
          "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>",
      }),
      (a.Converter = function (e) {
        "use strict";
        function i(e, i) {
          if (((i = i || null), a.helper.isString(e))) {
            if (((i = e = a.helper.stdExtName(e)), a.extensions[e]))
              return (
                console.warn(
                  "DEPRECATION WARNING: " +
                    e +
                    " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"
                ),
                void (function (e, i) {
                  "function" == typeof e && (e = e(new a.Converter())),
                    a.helper.isArray(e) || (e = [e]);
                  var n = t(e, i);
                  if (!n.valid) throw Error(n.error);
                  for (var r = 0; r < e.length; ++r)
                    switch (e[r].type) {
                      case "lang":
                        d.push(e[r]);
                        break;
                      case "output":
                        h.push(e[r]);
                        break;
                      default:
                        throw Error(
                          "Extension loader error: Type unrecognized!!!"
                        );
                    }
                })(a.extensions[e], e)
              );
            if (a.helper.isUndefined(r[e]))
              throw Error(
                'Extension "' +
                  e +
                  '" could not be loaded. It was either not found or is not a valid extension.'
              );
            e = r[e];
          }
          "function" == typeof e && (e = e()), a.helper.isArray(e) || (e = [e]);
          var s = t(e, i);
          if (!s.valid) throw Error(s.error);
          for (var o = 0; o < e.length; ++o) {
            switch (e[o].type) {
              case "lang":
                d.push(e[o]);
                break;
              case "output":
                h.push(e[o]);
            }
            if (e[o].hasOwnProperty("listeners"))
              for (var l in e[o].listeners)
                e[o].listeners.hasOwnProperty(l) && n(l, e[o].listeners[l]);
          }
        }
        function n(e, t) {
          if (!a.helper.isString(e))
            throw Error(
              "Invalid argument in converter.listen() method: name must be a string, but " +
                typeof e +
                " given"
            );
          if ("function" != typeof t)
            throw Error(
              "Invalid argument in converter.listen() method: callback must be a function, but " +
                typeof t +
                " given"
            );
          p.hasOwnProperty(e) || (p[e] = []), p[e].push(t);
        }
        var c = {},
          d = [],
          h = [],
          p = {},
          u = o,
          g = { parsed: {}, raw: "", format: "" };
        !(function () {
          for (var t in ((e = e || {}), s))
            s.hasOwnProperty(t) && (c[t] = s[t]);
          if ("object" != typeof e)
            throw Error(
              "Converter expects the passed parameter to be an object, but " +
                typeof e +
                " was passed instead."
            );
          for (var n in e) e.hasOwnProperty(n) && (c[n] = e[n]);
          c.extensions && a.helper.forEach(c.extensions, i);
        })(),
          (this._dispatch = function (e, t, i, a) {
            if (p.hasOwnProperty(e))
              for (var n = 0; n < p[e].length; ++n) {
                var r = p[e][n](e, t, this, i, a);
                r && void 0 !== r && (t = r);
              }
            return t;
          }),
          (this.listen = function (e, t) {
            return n(e, t), this;
          }),
          (this.makeHtml = function (e) {
            if (!e) return e;
            var t = {
              gHtmlBlocks: [],
              gHtmlMdBlocks: [],
              gHtmlSpans: [],
              gUrls: {},
              gTitles: {},
              gDimensions: {},
              gListLevel: 0,
              hashLinkCounts: {},
              langExtensions: d,
              outputModifiers: h,
              converter: this,
              ghCodeBlocks: [],
              metadata: { parsed: {}, raw: "", format: "" },
            };
            return (
              (e = (e = (e = (e = (e = e.replace(/¨/g, "¨T")).replace(
                /\$/g,
                "¨D"
              )).replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(
                /\u00A0/g,
                "&nbsp;"
              )),
              c.smartIndentationFix &&
                (e = (function (e) {
                  var t = e.match(/^\s*/)[0].length,
                    i = new RegExp("^\\s{0," + t + "}", "gm");
                  return e.replace(i, "");
                })(e)),
              (e = "\n\n" + e + "\n\n"),
              (e = (e = a.subParser("detab")(e, c, t)).replace(
                /^[ \t]+$/gm,
                ""
              )),
              a.helper.forEach(d, function (i) {
                e = a.subParser("runExtension")(i, e, c, t);
              }),
              (e = a.subParser("metadata")(e, c, t)),
              (e = a.subParser("hashPreCodeTags")(e, c, t)),
              (e = a.subParser("githubCodeBlocks")(e, c, t)),
              (e = a.subParser("hashHTMLBlocks")(e, c, t)),
              (e = a.subParser("hashCodeTags")(e, c, t)),
              (e = a.subParser("stripLinkDefinitions")(e, c, t)),
              (e = a.subParser("blockGamut")(e, c, t)),
              (e = a.subParser("unhashHTMLSpans")(e, c, t)),
              (e = (e = (e = a.subParser("unescapeSpecialChars")(
                e,
                c,
                t
              )).replace(/¨D/g, "$$")).replace(/¨T/g, "¨")),
              (e = a.subParser("completeHTMLDocument")(e, c, t)),
              a.helper.forEach(h, function (i) {
                e = a.subParser("runExtension")(i, e, c, t);
              }),
              (g = t.metadata),
              e
            );
          }),
          (this.makeMarkdown = this.makeMd = function (e, t) {
            if (
              ((e = (e = (e = e.replace(/\r\n/g, "\n")).replace(
                /\r/g,
                "\n"
              )).replace(/>[ \t]+</, ">¨NBSP;<")),
              !t)
            ) {
              if (!window || !window.document)
                throw new Error(
                  "HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM"
                );
              t = window.document;
            }
            var i = t.createElement("div");
            i.innerHTML = e;
            var n = {
              preList: (function (e) {
                for (
                  var t = e.querySelectorAll("pre"), i = [], n = 0;
                  n < t.length;
                  ++n
                )
                  if (
                    1 === t[n].childElementCount &&
                    "code" === t[n].firstChild.tagName.toLowerCase()
                  ) {
                    var r = t[n].firstChild.innerHTML.trim(),
                      s = t[n].firstChild.getAttribute("data-language") || "";
                    if ("" === s)
                      for (
                        var o = t[n].firstChild.className.split(" "), l = 0;
                        l < o.length;
                        ++l
                      ) {
                        var c = o[l].match(/^language-(.+)$/);
                        if (null !== c) {
                          s = c[1];
                          break;
                        }
                      }
                    (r = a.helper.unescapeHTMLEntities(r)),
                      i.push(r),
                      (t[n].outerHTML =
                        '<precode language="' +
                        s +
                        '" precodenum="' +
                        n.toString() +
                        '"></precode>');
                  } else
                    i.push(t[n].innerHTML),
                      (t[n].innerHTML = ""),
                      t[n].setAttribute("prenum", n.toString());
                return i;
              })(i),
            };
            !(function e(t) {
              for (var i = 0; i < t.childNodes.length; ++i) {
                var a = t.childNodes[i];
                3 === a.nodeType
                  ? /\S/.test(a.nodeValue)
                    ? ((a.nodeValue = a.nodeValue.split("\n").join(" ")),
                      (a.nodeValue = a.nodeValue.replace(/(\s)+/g, "$1")))
                    : (t.removeChild(a), --i)
                  : 1 === a.nodeType && e(a);
              }
            })(i);
            for (var r = i.childNodes, s = "", o = 0; o < r.length; o++)
              s += a.subParser("makeMarkdown.node")(r[o], n);
            return s;
          }),
          (this.setOption = function (e, t) {
            c[e] = t;
          }),
          (this.getOption = function (e) {
            return c[e];
          }),
          (this.getOptions = function () {
            return c;
          }),
          (this.addExtension = function (e, t) {
            i(e, (t = t || null));
          }),
          (this.useExtension = function (e) {
            i(e);
          }),
          (this.setFlavor = function (e) {
            if (!l.hasOwnProperty(e)) throw Error(e + " flavor was not found");
            var t = l[e];
            for (var i in ((u = e), t)) t.hasOwnProperty(i) && (c[i] = t[i]);
          }),
          (this.getFlavor = function () {
            return u;
          }),
          (this.removeExtension = function (e) {
            a.helper.isArray(e) || (e = [e]);
            for (var t = 0; t < e.length; ++t) {
              for (var i = e[t], n = 0; n < d.length; ++n)
                d[n] === i && d[n].splice(n, 1);
              for (; 0 < h.length; ++n) h[0] === i && h[0].splice(n, 1);
            }
          }),
          (this.getAllExtensions = function () {
            return { language: d, output: h };
          }),
          (this.getMetadata = function (e) {
            return e ? g.raw : g.parsed;
          }),
          (this.getMetadataFormat = function () {
            return g.format;
          }),
          (this._setMetadataPair = function (e, t) {
            g.parsed[e] = t;
          }),
          (this._setMetadataFormat = function (e) {
            g.format = e;
          }),
          (this._setMetadataRaw = function (e) {
            g.raw = e;
          });
      }),
      a.subParser("anchors", function (e, t, i) {
        "use strict";
        var n = function (e, n, r, s, o, l, c) {
          if (
            (a.helper.isUndefined(c) && (c = ""),
            (r = r.toLowerCase()),
            e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          )
            s = "";
          else if (!s) {
            if (
              (r || (r = n.toLowerCase().replace(/ ?\n/g, " ")),
              (s = "#" + r),
              a.helper.isUndefined(i.gUrls[r]))
            )
              return e;
            (s = i.gUrls[r]),
              a.helper.isUndefined(i.gTitles[r]) || (c = i.gTitles[r]);
          }
          var d =
            '<a href="' +
            (s = s.replace(
              a.helper.regexes.asteriskDashAndColon,
              a.helper.escapeCharactersCallback
            )) +
            '"';
          return (
            "" !== c &&
              null !== c &&
              (d +=
                ' title="' +
                (c = (c = c.replace(/"/g, "&quot;")).replace(
                  a.helper.regexes.asteriskDashAndColon,
                  a.helper.escapeCharactersCallback
                )) +
                '"'),
            t.openLinksInNewWindow &&
              !/^#/.test(s) &&
              (d += ' rel="noopener noreferrer" target="¨E95Eblank"'),
            d + ">" + n + "</a>"
          );
        };
        return (
          (e = (e = (e = (e = (e = i.converter._dispatch(
            "anchors.before",
            e,
            t,
            i
          )).replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,
            n
          )).replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
            n
          )).replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
            n
          )).replace(/\[([^\[\]]+)]()()()()()/g, n)),
          t.ghMentions &&
            (e = e.replace(
              /(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim,
              function (e, i, n, r, s) {
                if ("\\" === n) return i + r;
                if (!a.helper.isString(t.ghMentionsLink))
                  throw new Error("ghMentionsLink option must be a string");
                var o = t.ghMentionsLink.replace(/\{u}/g, s),
                  l = "";
                return (
                  t.openLinksInNewWindow &&
                    (l = ' rel="noopener noreferrer" target="¨E95Eblank"'),
                  i + '<a href="' + o + '"' + l + ">" + r + "</a>"
                );
              }
            )),
          i.converter._dispatch("anchors.after", e, t, i)
        );
      });
    var d = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
      h = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
      p = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
      u = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
      g = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
      m = function (e) {
        "use strict";
        return function (t, i, n, r, s, o, l) {
          var c = (n = n.replace(
              a.helper.regexes.asteriskDashAndColon,
              a.helper.escapeCharactersCallback
            )),
            d = "",
            h = "",
            p = i || "",
            u = l || "";
          return (
            /^www\./i.test(n) && (n = n.replace(/^www\./i, "http://www.")),
            e.excludeTrailingPunctuationFromURLs && o && (d = o),
            e.openLinksInNewWindow &&
              (h = ' rel="noopener noreferrer" target="¨E95Eblank"'),
            p + '<a href="' + n + '"' + h + ">" + c + "</a>" + d + u
          );
        };
      },
      f = function (e, t) {
        "use strict";
        return function (i, n, r) {
          var s = "mailto:";
          return (
            (n = n || ""),
            (r = a.subParser("unescapeSpecialChars")(r, e, t)),
            e.encodeEmails
              ? ((s = a.helper.encodeEmailAddress(s + r)),
                (r = a.helper.encodeEmailAddress(r)))
              : (s += r),
            n + '<a href="' + s + '">' + r + "</a>"
          );
        };
      };
    a.subParser("autoLinks", function (e, t, i) {
      "use strict";
      return (
        (e = (e = (e = i.converter._dispatch(
          "autoLinks.before",
          e,
          t,
          i
        )).replace(p, m(t))).replace(g, f(t, i))),
        i.converter._dispatch("autoLinks.after", e, t, i)
      );
    }),
      a.subParser("simplifiedAutoLinks", function (e, t, i) {
        "use strict";
        return t.simplifiedAutoLink
          ? ((e = i.converter._dispatch("simplifiedAutoLinks.before", e, t, i)),
            (e = (e = t.excludeTrailingPunctuationFromURLs
              ? e.replace(h, m(t))
              : e.replace(d, m(t))).replace(u, f(t, i))),
            (e = i.converter._dispatch("simplifiedAutoLinks.after", e, t, i)))
          : e;
      }),
      a.subParser("blockGamut", function (e, t, i) {
        "use strict";
        return (
          (e = i.converter._dispatch("blockGamut.before", e, t, i)),
          (e = a.subParser("blockQuotes")(e, t, i)),
          (e = a.subParser("headers")(e, t, i)),
          (e = a.subParser("horizontalRule")(e, t, i)),
          (e = a.subParser("lists")(e, t, i)),
          (e = a.subParser("codeBlocks")(e, t, i)),
          (e = a.subParser("tables")(e, t, i)),
          (e = a.subParser("hashHTMLBlocks")(e, t, i)),
          (e = a.subParser("paragraphs")(e, t, i)),
          i.converter._dispatch("blockGamut.after", e, t, i)
        );
      }),
      a.subParser("blockQuotes", function (e, t, i) {
        "use strict";
        (e = i.converter._dispatch("blockQuotes.before", e, t, i)),
          (e += "\n\n");
        var n = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return (
          t.splitAdjacentBlockquotes && (n = /^ {0,3}>[\s\S]*?(?:\n\n)/gm),
          (e = e.replace(n, function (e) {
            return (
              (e = (e = (e = e.replace(/^[ \t]*>[ \t]?/gm, "")).replace(
                /¨0/g,
                ""
              )).replace(/^[ \t]+$/gm, "")),
              (e = a.subParser("githubCodeBlocks")(e, t, i)),
              (e = (e = (e = a.subParser("blockGamut")(e, t, i)).replace(
                /(^|\n)/g,
                "$1  "
              )).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (e, t) {
                var i = t;
                return (i = i.replace(/^  /gm, "¨0")).replace(/¨0/g, "");
              })),
              a.subParser("hashBlock")(
                "<blockquote>\n" + e + "\n</blockquote>",
                t,
                i
              )
            );
          })),
          i.converter._dispatch("blockQuotes.after", e, t, i)
        );
      }),
      a.subParser("codeBlocks", function (e, t, i) {
        "use strict";
        return (
          (e = i.converter._dispatch("codeBlocks.before", e, t, i)),
          (e = (e = (e += "¨0").replace(
            /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g,
            function (e, n, r) {
              var s = n,
                o = r,
                l = "\n";
              return (
                (s = a.subParser("outdent")(s, t, i)),
                (s = a.subParser("encodeCode")(s, t, i)),
                (s = (s = (s = a.subParser("detab")(s, t, i)).replace(
                  /^\n+/g,
                  ""
                )).replace(/\n+$/g, "")),
                t.omitExtraWLInCodeBlocks && (l = ""),
                (s = "<pre><code>" + s + l + "</code></pre>"),
                a.subParser("hashBlock")(s, t, i) + o
              );
            }
          )).replace(/¨0/, "")),
          i.converter._dispatch("codeBlocks.after", e, t, i)
        );
      }),
      a.subParser("codeSpans", function (e, t, i) {
        "use strict";
        return (
          void 0 === (e = i.converter._dispatch("codeSpans.before", e, t, i)) &&
            (e = ""),
          (e = e.replace(
            /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
            function (e, n, r, s) {
              var o = s;
              return (
                (o = (o = o.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, "")),
                (o =
                  n +
                  "<code>" +
                  (o = a.subParser("encodeCode")(o, t, i)) +
                  "</code>"),
                a.subParser("hashHTMLSpans")(o, t, i)
              );
            }
          )),
          i.converter._dispatch("codeSpans.after", e, t, i)
        );
      }),
      a.subParser("completeHTMLDocument", function (e, t, i) {
        "use strict";
        if (!t.completeHTMLDocument) return e;
        e = i.converter._dispatch("completeHTMLDocument.before", e, t, i);
        var a = "html",
          n = "<!DOCTYPE HTML>\n",
          r = "",
          s = '<meta charset="utf-8">\n',
          o = "",
          l = "";
        for (var c in (void 0 !== i.metadata.parsed.doctype &&
          ((n = "<!DOCTYPE " + i.metadata.parsed.doctype + ">\n"),
          ("html" !==
            (a = i.metadata.parsed.doctype.toString().toLowerCase()) &&
            "html5" !== a) ||
            (s = '<meta charset="utf-8">')),
        i.metadata.parsed))
          if (i.metadata.parsed.hasOwnProperty(c))
            switch (c.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                r = "<title>" + i.metadata.parsed.title + "</title>\n";
                break;
              case "charset":
                s =
                  "html" === a || "html5" === a
                    ? '<meta charset="' + i.metadata.parsed.charset + '">\n'
                    : '<meta name="charset" content="' +
                      i.metadata.parsed.charset +
                      '">\n';
                break;
              case "language":
              case "lang":
                (o = ' lang="' + i.metadata.parsed[c] + '"'),
                  (l +=
                    '<meta name="' +
                    c +
                    '" content="' +
                    i.metadata.parsed[c] +
                    '">\n');
                break;
              default:
                l +=
                  '<meta name="' +
                  c +
                  '" content="' +
                  i.metadata.parsed[c] +
                  '">\n';
            }
        return (
          (e =
            n +
            "<html" +
            o +
            ">\n<head>\n" +
            r +
            s +
            l +
            "</head>\n<body>\n" +
            e.trim() +
            "\n</body>\n</html>"),
          i.converter._dispatch("completeHTMLDocument.after", e, t, i)
        );
      }),
      a.subParser("detab", function (e, t, i) {
        "use strict";
        return (
          (e = (e = (e = (e = (e = (e = i.converter._dispatch(
            "detab.before",
            e,
            t,
            i
          )).replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "¨A¨B")).replace(
            /¨B(.+?)¨A/g,
            function (e, t) {
              for (var i = t, a = 4 - (i.length % 4), n = 0; n < a; n++)
                i += " ";
              return i;
            }
          )).replace(/¨A/g, "    ")).replace(/¨B/g, "")),
          i.converter._dispatch("detab.after", e, t, i)
        );
      }),
      a.subParser("ellipsis", function (e, t, i) {
        "use strict";
        return (
          (e = (e = i.converter._dispatch("ellipsis.before", e, t, i)).replace(
            /\.\.\./g,
            "…"
          )),
          i.converter._dispatch("ellipsis.after", e, t, i)
        );
      }),
      a.subParser("emoji", function (e, t, i) {
        "use strict";
        return t.emoji
          ? ((e = (e = i.converter._dispatch("emoji.before", e, t, i)).replace(
              /:([\S]+?):/g,
              function (e, t) {
                return a.helper.emojis.hasOwnProperty(t)
                  ? a.helper.emojis[t]
                  : e;
              }
            )),
            i.converter._dispatch("emoji.after", e, t, i))
          : e;
      }),
      a.subParser("encodeAmpsAndAngles", function (e, t, i) {
        "use strict";
        return (
          (e = (e = (e = (e = (e = i.converter._dispatch(
            "encodeAmpsAndAngles.before",
            e,
            t,
            i
          )).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(
            /<(?![a-z\/?$!])/gi,
            "&lt;"
          )).replace(/</g, "&lt;")).replace(/>/g, "&gt;")),
          i.converter._dispatch("encodeAmpsAndAngles.after", e, t, i)
        );
      }),
      a.subParser("encodeBackslashEscapes", function (e, t, i) {
        "use strict";
        return (
          (e = (e = (e = i.converter._dispatch(
            "encodeBackslashEscapes.before",
            e,
            t,
            i
          )).replace(/\\(\\)/g, a.helper.escapeCharactersCallback)).replace(
            /\\([`*_{}\[\]()>#+.!~=|-])/g,
            a.helper.escapeCharactersCallback
          )),
          i.converter._dispatch("encodeBackslashEscapes.after", e, t, i)
        );
      }),
      a.subParser("encodeCode", function (e, t, i) {
        "use strict";
        return (
          (e = (e = i.converter._dispatch("encodeCode.before", e, t, i))
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/([*_{}\[\]\\=~-])/g, a.helper.escapeCharactersCallback)),
          i.converter._dispatch("encodeCode.after", e, t, i)
        );
      }),
      a.subParser("escapeSpecialCharsWithinTagAttributes", function (e, t, i) {
        "use strict";
        return (
          (e = (e = (e = i.converter._dispatch(
            "escapeSpecialCharsWithinTagAttributes.before",
            e,
            t,
            i
          )).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, function (e) {
            return e
              .replace(/(.)<\/?code>(?=.)/g, "$1`")
              .replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
          })).replace(
            /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi,
            function (e) {
              return e.replace(
                /([\\`*_~=|])/g,
                a.helper.escapeCharactersCallback
              );
            }
          )),
          i.converter._dispatch(
            "escapeSpecialCharsWithinTagAttributes.after",
            e,
            t,
            i
          )
        );
      }),
      a.subParser("githubCodeBlocks", function (e, t, i) {
        "use strict";
        return t.ghCodeBlocks
          ? ((e = i.converter._dispatch("githubCodeBlocks.before", e, t, i)),
            (e = (e = (e += "¨0").replace(
              /(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,
              function (e, n, r, s) {
                var o = t.omitExtraWLInCodeBlocks ? "" : "\n";
                return (
                  (s = a.subParser("encodeCode")(s, t, i)),
                  (s =
                    "<pre><code" +
                    (r ? ' class="' + r + " language-" + r + '"' : "") +
                    ">" +
                    (s = (s = (s = a.subParser("detab")(s, t, i)).replace(
                      /^\n+/g,
                      ""
                    )).replace(/\n+$/g, "")) +
                    o +
                    "</code></pre>"),
                  (s = a.subParser("hashBlock")(s, t, i)),
                  "\n\n¨G" +
                    (i.ghCodeBlocks.push({ text: e, codeblock: s }) - 1) +
                    "G\n\n"
                );
              }
            )).replace(/¨0/, "")),
            i.converter._dispatch("githubCodeBlocks.after", e, t, i))
          : e;
      }),
      a.subParser("hashBlock", function (e, t, i) {
        "use strict";
        return (
          (e = (e = i.converter._dispatch("hashBlock.before", e, t, i)).replace(
            /(^\n+|\n+$)/g,
            ""
          )),
          (e = "\n\n¨K" + (i.gHtmlBlocks.push(e) - 1) + "K\n\n"),
          i.converter._dispatch("hashBlock.after", e, t, i)
        );
      }),
      a.subParser("hashCodeTags", function (e, t, i) {
        "use strict";
        return (
          (e = i.converter._dispatch("hashCodeTags.before", e, t, i)),
          (e = a.helper.replaceRecursiveRegExp(
            e,
            function (e, n, r, s) {
              var o = r + a.subParser("encodeCode")(n, t, i) + s;
              return "¨C" + (i.gHtmlSpans.push(o) - 1) + "C";
            },
            "<code\\b[^>]*>",
            "</code>",
            "gim"
          )),
          i.converter._dispatch("hashCodeTags.after", e, t, i)
        );
      }),
      a.subParser("hashElement", function (e, t, i) {
        "use strict";
        return function (e, t) {
          var a = t;
          return (
            (a = (a = (a = a.replace(/\n\n/g, "\n")).replace(
              /^\n/,
              ""
            )).replace(/\n+$/g, "")),
            "\n\n¨K" + (i.gHtmlBlocks.push(a) - 1) + "K\n\n"
          );
        };
      }),
      a.subParser("hashHTMLBlocks", function (e, t, i) {
        "use strict";
        e = i.converter._dispatch("hashHTMLBlocks.before", e, t, i);
        var n = [
            "pre",
            "div",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "blockquote",
            "table",
            "dl",
            "ol",
            "ul",
            "script",
            "noscript",
            "form",
            "fieldset",
            "iframe",
            "math",
            "style",
            "section",
            "header",
            "footer",
            "nav",
            "article",
            "aside",
            "address",
            "audio",
            "canvas",
            "figure",
            "hgroup",
            "output",
            "video",
            "p",
          ],
          r = function (e, t, a, n) {
            var r = e;
            return (
              -1 !== a.search(/\bmarkdown\b/) &&
                (r = a + i.converter.makeHtml(t) + n),
              "\n\n¨K" + (i.gHtmlBlocks.push(r) - 1) + "K\n\n"
            );
          };
        t.backslashEscapesHTMLTags &&
          (e = e.replace(/\\<(\/?[^>]+?)>/g, function (e, t) {
            return "&lt;" + t + "&gt;";
          }));
        for (var s = 0; s < n.length; ++s)
          for (
            var o,
              l = new RegExp("^ {0,3}(<" + n[s] + "\\b[^>]*>)", "im"),
              c = "<" + n[s] + "\\b[^>]*>",
              d = "</" + n[s] + ">";
            -1 !== (o = a.helper.regexIndexOf(e, l));

          ) {
            var h = a.helper.splitAtIndex(e, o),
              p = a.helper.replaceRecursiveRegExp(h[1], r, c, d, "im");
            if (p === h[1]) break;
            e = h[0].concat(p);
          }
        return (
          (e = e.replace(
            /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
            a.subParser("hashElement")(e, t, i)
          )),
          (e = (e = a.helper.replaceRecursiveRegExp(
            e,
            function (e) {
              return "\n\n¨K" + (i.gHtmlBlocks.push(e) - 1) + "K\n\n";
            },
            "^ {0,3}\x3c!--",
            "--\x3e",
            "gm"
          )).replace(
            /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
            a.subParser("hashElement")(e, t, i)
          )),
          i.converter._dispatch("hashHTMLBlocks.after", e, t, i)
        );
      }),
      a.subParser("hashHTMLSpans", function (e, t, i) {
        "use strict";
        function a(e) {
          return "¨C" + (i.gHtmlSpans.push(e) - 1) + "C";
        }
        return (
          (e = (e = (e = (e = (e = i.converter._dispatch(
            "hashHTMLSpans.before",
            e,
            t,
            i
          )).replace(/<[^>]+?\/>/gi, function (e) {
            return a(e);
          })).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (e) {
            return a(e);
          })).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (e) {
            return a(e);
          })).replace(/<[^>]+?>/gi, function (e) {
            return a(e);
          })),
          i.converter._dispatch("hashHTMLSpans.after", e, t, i)
        );
      }),
      a.subParser("unhashHTMLSpans", function (e, t, i) {
        "use strict";
        e = i.converter._dispatch("unhashHTMLSpans.before", e, t, i);
        for (var a = 0; a < i.gHtmlSpans.length; ++a) {
          for (var n = i.gHtmlSpans[a], r = 0; /¨C(\d+)C/.test(n); ) {
            var s = RegExp.$1;
            if (((n = n.replace("¨C" + s + "C", i.gHtmlSpans[s])), 10 === r)) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++r;
          }
          e = e.replace("¨C" + a + "C", n);
        }
        return i.converter._dispatch("unhashHTMLSpans.after", e, t, i);
      }),
      a.subParser("hashPreCodeTags", function (e, t, i) {
        "use strict";
        return (
          (e = i.converter._dispatch("hashPreCodeTags.before", e, t, i)),
          (e = a.helper.replaceRecursiveRegExp(
            e,
            function (e, n, r, s) {
              var o = r + a.subParser("encodeCode")(n, t, i) + s;
              return (
                "\n\n¨G" +
                (i.ghCodeBlocks.push({ text: e, codeblock: o }) - 1) +
                "G\n\n"
              );
            },
            "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>",
            "^ {0,3}</code>\\s*</pre>",
            "gim"
          )),
          i.converter._dispatch("hashPreCodeTags.after", e, t, i)
        );
      }),
      a.subParser("headers", function (e, t, i) {
        "use strict";
        function n(e) {
          var n, r;
          if (t.customizedHeaderId) {
            var s = e.match(/\{([^{]+?)}\s*$/);
            s && s[1] && (e = s[1]);
          }
          return (
            (n = e),
            (r = a.helper.isString(t.prefixHeaderId)
              ? t.prefixHeaderId
              : !0 === t.prefixHeaderId
              ? "section-"
              : ""),
            t.rawPrefixHeaderId || (n = r + n),
            (n = t.ghCompatibleHeaderId
              ? n
                  .replace(/ /g, "-")
                  .replace(/&amp;/g, "")
                  .replace(/¨T/g, "")
                  .replace(/¨D/g, "")
                  .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "")
                  .toLowerCase()
              : t.rawHeaderId
              ? n
                  .replace(/ /g, "-")
                  .replace(/&amp;/g, "&")
                  .replace(/¨T/g, "¨")
                  .replace(/¨D/g, "$")
                  .replace(/["']/g, "-")
                  .toLowerCase()
              : n.replace(/[^\w]/g, "").toLowerCase()),
            t.rawPrefixHeaderId && (n = r + n),
            i.hashLinkCounts[n]
              ? (n = n + "-" + i.hashLinkCounts[n]++)
              : (i.hashLinkCounts[n] = 1),
            n
          );
        }
        e = i.converter._dispatch("headers.before", e, t, i);
        var r = isNaN(parseInt(t.headerLevelStart))
            ? 1
            : parseInt(t.headerLevelStart),
          s = t.smoothLivePreview
            ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm
            : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
          o = t.smoothLivePreview
            ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm
            : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        e = (e = e.replace(s, function (e, s) {
          var o = a.subParser("spanGamut")(s, t, i),
            l = t.noHeaderId ? "" : ' id="' + n(s) + '"',
            c = "<h" + r + l + ">" + o + "</h" + r + ">";
          return a.subParser("hashBlock")(c, t, i);
        })).replace(o, function (e, s) {
          var o = a.subParser("spanGamut")(s, t, i),
            l = t.noHeaderId ? "" : ' id="' + n(s) + '"',
            c = r + 1,
            d = "<h" + c + l + ">" + o + "</h" + c + ">";
          return a.subParser("hashBlock")(d, t, i);
        });
        var l = t.requireSpaceBeforeHeadingText
          ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm
          : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        return (
          (e = e.replace(l, function (e, s, o) {
            var l = o;
            t.customizedHeaderId && (l = o.replace(/\s?\{([^{]+?)}\s*$/, ""));
            var c = a.subParser("spanGamut")(l, t, i),
              d = t.noHeaderId ? "" : ' id="' + n(o) + '"',
              h = r - 1 + s.length,
              p = "<h" + h + d + ">" + c + "</h" + h + ">";
            return a.subParser("hashBlock")(p, t, i);
          })),
          i.converter._dispatch("headers.after", e, t, i)
        );
      }),
      a.subParser("horizontalRule", function (e, t, i) {
        "use strict";
        e = i.converter._dispatch("horizontalRule.before", e, t, i);
        var n = a.subParser("hashBlock")("<hr />", t, i);
        return (
          (e = (e = (e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, n)).replace(
            /^ {0,2}( ?\*){3,}[ \t]*$/gm,
            n
          )).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, n)),
          i.converter._dispatch("horizontalRule.after", e, t, i)
        );
      }),
      a.subParser("images", function (e, t, i) {
        "use strict";
        function n(e, t, n, r, s, o, l, c) {
          var d = i.gUrls,
            h = i.gTitles,
            p = i.gDimensions;
          if (
            ((n = n.toLowerCase()),
            c || (c = ""),
            e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          )
            r = "";
          else if ("" === r || null === r) {
            if (
              (("" !== n && null !== n) ||
                (n = t.toLowerCase().replace(/ ?\n/g, " ")),
              (r = "#" + n),
              a.helper.isUndefined(d[n]))
            )
              return e;
            (r = d[n]),
              a.helper.isUndefined(h[n]) || (c = h[n]),
              a.helper.isUndefined(p[n]) ||
                ((s = p[n].width), (o = p[n].height));
          }
          t = t
            .replace(/"/g, "&quot;")
            .replace(
              a.helper.regexes.asteriskDashAndColon,
              a.helper.escapeCharactersCallback
            );
          var u =
            '<img src="' +
            (r = r.replace(
              a.helper.regexes.asteriskDashAndColon,
              a.helper.escapeCharactersCallback
            )) +
            '" alt="' +
            t +
            '"';
          return (
            c &&
              a.helper.isString(c) &&
              (u +=
                ' title="' +
                (c = c
                  .replace(/"/g, "&quot;")
                  .replace(
                    a.helper.regexes.asteriskDashAndColon,
                    a.helper.escapeCharactersCallback
                  )) +
                '"'),
            s &&
              o &&
              ((u += ' width="' + (s = "*" === s ? "auto" : s) + '"'),
              (u += ' height="' + (o = "*" === o ? "auto" : o) + '"')),
            u + " />"
          );
        }
        return (
          (e = (e = (e = (e = (e = (e = i.converter._dispatch(
            "images.before",
            e,
            t,
            i
          )).replace(
            /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
            n
          )).replace(
            /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
            function (e, t, i, a, r, s, o, l) {
              return n(e, t, i, (a = a.replace(/\s/g, "")), r, s, 0, l);
            }
          )).replace(
            /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
            n
          )).replace(
            /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
            n
          )).replace(/!\[([^\[\]]+)]()()()()()/g, n)),
          i.converter._dispatch("images.after", e, t, i)
        );
      }),
      a.subParser("italicsAndBold", function (e, t, i) {
        "use strict";
        function a(e, t, i) {
          return t + e + i;
        }
        return (
          (e = i.converter._dispatch("italicsAndBold.before", e, t, i)),
          (e = t.literalMidWordUnderscores
            ? (e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function (e, t) {
                return a(t, "<strong><em>", "</em></strong>");
              })).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, t) {
                return a(t, "<strong>", "</strong>");
              })).replace(/\b_(\S[\s\S]*?)_\b/g, function (e, t) {
                return a(t, "<em>", "</em>");
              })
            : (e = (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, t) {
                return /\S$/.test(t)
                  ? a(t, "<strong><em>", "</em></strong>")
                  : e;
              })).replace(/__(\S[\s\S]*?)__/g, function (e, t) {
                return /\S$/.test(t) ? a(t, "<strong>", "</strong>") : e;
              })).replace(/_([^\s_][\s\S]*?)_/g, function (e, t) {
                return /\S$/.test(t) ? a(t, "<em>", "</em>") : e;
              })),
          (e = t.literalMidWordAsterisks
            ? (e = (e = e.replace(
                /([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,
                function (e, t, i) {
                  return a(i, t + "<strong><em>", "</em></strong>");
                }
              )).replace(
                /([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,
                function (e, t, i) {
                  return a(i, t + "<strong>", "</strong>");
                }
              )).replace(
                /([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,
                function (e, t, i) {
                  return a(i, t + "<em>", "</em>");
                }
              )
            : (e = (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (e, t) {
                return /\S$/.test(t)
                  ? a(t, "<strong><em>", "</em></strong>")
                  : e;
              })).replace(/\*\*(\S[\s\S]*?)\*\*/g, function (e, t) {
                return /\S$/.test(t) ? a(t, "<strong>", "</strong>") : e;
              })).replace(/\*([^\s*][\s\S]*?)\*/g, function (e, t) {
                return /\S$/.test(t) ? a(t, "<em>", "</em>") : e;
              })),
          i.converter._dispatch("italicsAndBold.after", e, t, i)
        );
      }),
      a.subParser("lists", function (e, t, i) {
        "use strict";
        function n(e, n) {
          i.gListLevel++, (e = e.replace(/\n{2,}$/, "\n"));
          var r = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
            s = /\n[ \t]*\n(?!¨0)/.test((e += "¨0"));
          return (
            t.disableForced4SpacesIndentedSublists &&
              (r = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),
            (e = (e = e.replace(r, function (e, n, r, o, l, c, d) {
              d = d && "" !== d.trim();
              var h = a.subParser("outdent")(l, t, i),
                p = "";
              return (
                c &&
                  t.tasklists &&
                  ((p =
                    ' class="task-list-item" style="list-style-type: none;"'),
                  (h = h.replace(/^[ \t]*\[(x|X| )?]/m, function () {
                    var e =
                      '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                    return d && (e += " checked"), e + ">";
                  }))),
                (h = h.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (e) {
                  return "¨A" + e;
                })),
                n || h.search(/\n{2,}/) > -1
                  ? ((h = a.subParser("githubCodeBlocks")(h, t, i)),
                    (h = a.subParser("blockGamut")(h, t, i)))
                  : ((h = (h = a.subParser("lists")(h, t, i)).replace(
                      /\n$/,
                      ""
                    )),
                    (h = (h = a.subParser("hashHTMLBlocks")(h, t, i)).replace(
                      /\n\n+/g,
                      "\n\n"
                    )),
                    (h = s
                      ? a.subParser("paragraphs")(h, t, i)
                      : a.subParser("spanGamut")(h, t, i))),
                "<li" + p + ">" + (h = h.replace("¨A", "")) + "</li>\n"
              );
            })).replace(/¨0/g, "")),
            i.gListLevel--,
            n && (e = e.replace(/\s+$/, "")),
            e
          );
        }
        function r(e, t) {
          if ("ol" === t) {
            var i = e.match(/^ *(\d+)\./);
            if (i && "1" !== i[1]) return ' start="' + i[1] + '"';
          }
          return "";
        }
        function s(e, i, a) {
          var s = t.disableForced4SpacesIndentedSublists
              ? /^ ?\d+\.[ \t]/gm
              : /^ {0,3}\d+\.[ \t]/gm,
            o = t.disableForced4SpacesIndentedSublists
              ? /^ ?[*+-][ \t]/gm
              : /^ {0,3}[*+-][ \t]/gm,
            l = "ul" === i ? s : o,
            c = "";
          if (-1 !== e.search(l))
            !(function t(d) {
              var h = d.search(l),
                p = r(e, i);
              -1 !== h
                ? ((c +=
                    "\n\n<" +
                    i +
                    p +
                    ">\n" +
                    n(d.slice(0, h), !!a) +
                    "</" +
                    i +
                    ">\n"),
                  (l = "ul" == (i = "ul" === i ? "ol" : "ul") ? s : o),
                  t(d.slice(h)))
                : (c += "\n\n<" + i + p + ">\n" + n(d, !!a) + "</" + i + ">\n");
            })(e);
          else {
            var d = r(e, i);
            c = "\n\n<" + i + d + ">\n" + n(e, !!a) + "</" + i + ">\n";
          }
          return c;
        }
        return (
          (e = i.converter._dispatch("lists.before", e, t, i)),
          (e += "¨0"),
          (e = (e = i.gListLevel
            ? e.replace(
                /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                function (e, t, i) {
                  return s(t, i.search(/[*+-]/g) > -1 ? "ul" : "ol", !0);
                }
              )
            : e.replace(
                /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                function (e, t, i, a) {
                  return s(i, a.search(/[*+-]/g) > -1 ? "ul" : "ol", !1);
                }
              )).replace(/¨0/, "")),
          i.converter._dispatch("lists.after", e, t, i)
        );
      }),
      a.subParser("metadata", function (e, t, i) {
        "use strict";
        function a(e) {
          (i.metadata.raw = e),
            (e = (e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;")).replace(
              /\n {4}/g,
              " "
            )).replace(/^([\S ]+): +([\s\S]+?)$/gm, function (e, t, a) {
              return (i.metadata.parsed[t] = a), "";
            });
        }
        return t.metadata
          ? ((e = (e = (e = (e = i.converter._dispatch(
              "metadata.before",
              e,
              t,
              i
            )).replace(
              /^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,
              function (e, t, i) {
                return a(i), "¨M";
              }
            )).replace(
              /^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,
              function (e, t, n) {
                return t && (i.metadata.format = t), a(n), "¨M";
              }
            )).replace(/¨M/g, "")),
            (e = i.converter._dispatch("metadata.after", e, t, i)))
          : e;
      }),
      a.subParser("outdent", function (e, t, i) {
        "use strict";
        return (
          (e = (e = (e = i.converter._dispatch(
            "outdent.before",
            e,
            t,
            i
          )).replace(/^(\t|[ ]{1,4})/gm, "¨0")).replace(/¨0/g, "")),
          i.converter._dispatch("outdent.after", e, t, i)
        );
      }),
      a.subParser("paragraphs", function (e, t, i) {
        "use strict";
        for (
          var n = (e = (e = (e = i.converter._dispatch(
              "paragraphs.before",
              e,
              t,
              i
            )).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g),
            r = [],
            s = n.length,
            o = 0;
          o < s;
          o++
        ) {
          var l = n[o];
          l.search(/¨(K|G)(\d+)\1/g) >= 0
            ? r.push(l)
            : l.search(/\S/) >= 0 &&
              ((l = (l = a.subParser("spanGamut")(l, t, i)).replace(
                /^([ \t]*)/g,
                "<p>"
              )),
              (l += "</p>"),
              r.push(l));
        }
        for (s = r.length, o = 0; o < s; o++) {
          for (var c = "", d = r[o], h = !1; /¨(K|G)(\d+)\1/.test(d); ) {
            var p = RegExp.$1,
              u = RegExp.$2;
            (c = (c =
              "K" === p
                ? i.gHtmlBlocks[u]
                : h
                ? a.subParser("encodeCode")(i.ghCodeBlocks[u].text, t, i)
                : i.ghCodeBlocks[u].codeblock).replace(/\$/g, "$$$$")),
              (d = d.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, c)),
              /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(d) && (h = !0);
          }
          r[o] = d;
        }
        return (
          (e = (e = (e = r.join("\n")).replace(/^\n+/g, "")).replace(
            /\n+$/g,
            ""
          )),
          i.converter._dispatch("paragraphs.after", e, t, i)
        );
      }),
      a.subParser("runExtension", function (e, t, i, a) {
        "use strict";
        if (e.filter) t = e.filter(t, a.converter, i);
        else if (e.regex) {
          var n = e.regex;
          n instanceof RegExp || (n = new RegExp(n, "g")),
            (t = t.replace(n, e.replace));
        }
        return t;
      }),
      a.subParser("spanGamut", function (e, t, i) {
        "use strict";
        return (
          (e = i.converter._dispatch("spanGamut.before", e, t, i)),
          (e = a.subParser("codeSpans")(e, t, i)),
          (e = a.subParser("escapeSpecialCharsWithinTagAttributes")(e, t, i)),
          (e = a.subParser("encodeBackslashEscapes")(e, t, i)),
          (e = a.subParser("images")(e, t, i)),
          (e = a.subParser("anchors")(e, t, i)),
          (e = a.subParser("autoLinks")(e, t, i)),
          (e = a.subParser("simplifiedAutoLinks")(e, t, i)),
          (e = a.subParser("emoji")(e, t, i)),
          (e = a.subParser("underline")(e, t, i)),
          (e = a.subParser("italicsAndBold")(e, t, i)),
          (e = a.subParser("strikethrough")(e, t, i)),
          (e = a.subParser("ellipsis")(e, t, i)),
          (e = a.subParser("hashHTMLSpans")(e, t, i)),
          (e = a.subParser("encodeAmpsAndAngles")(e, t, i)),
          t.simpleLineBreaks
            ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n"))
            : (e = e.replace(/  +\n/g, "<br />\n")),
          i.converter._dispatch("spanGamut.after", e, t, i)
        );
      }),
      a.subParser("strikethrough", function (e, t, i) {
        "use strict";
        return (
          t.strikethrough &&
            ((e = (e = i.converter._dispatch(
              "strikethrough.before",
              e,
              t,
              i
            )).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (e, n) {
              return (function (e) {
                return (
                  t.simplifiedAutoLink &&
                    (e = a.subParser("simplifiedAutoLinks")(e, t, i)),
                  "<del>" + e + "</del>"
                );
              })(n);
            })),
            (e = i.converter._dispatch("strikethrough.after", e, t, i))),
          e
        );
      }),
      a.subParser("stripLinkDefinitions", function (e, t, i) {
        "use strict";
        var n = function (e, n, r, s, o, l, c) {
          return (
            (n = n.toLowerCase()),
            r.match(/^data:.+?\/.+?;base64,/)
              ? (i.gUrls[n] = r.replace(/\s/g, ""))
              : (i.gUrls[n] = a.subParser("encodeAmpsAndAngles")(r, t, i)),
            l
              ? l + c
              : (c && (i.gTitles[n] = c.replace(/"|'/g, "&quot;")),
                t.parseImgDimensions &&
                  s &&
                  o &&
                  (i.gDimensions[n] = { width: s, height: o }),
                "")
          );
        };
        return (e = (e = (e += "¨0").replace(
          /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm,
          n
        )).replace(
          /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
          n
        )).replace(/¨0/, "");
      }),
      a.subParser("tables", function (e, t, i) {
        "use strict";
        function n(e) {
          return /^:[ \t]*--*$/.test(e)
            ? ' style="text-align:left;"'
            : /^--*[ \t]*:[ \t]*$/.test(e)
            ? ' style="text-align:right;"'
            : /^:[ \t]*--*[ \t]*:$/.test(e)
            ? ' style="text-align:center;"'
            : "";
        }
        function r(e, n) {
          var r = "";
          return (
            (e = e.trim()),
            (t.tablesHeaderId || t.tableHeaderId) &&
              (r = ' id="' + e.replace(/ /g, "_").toLowerCase() + '"'),
            "<th" +
              r +
              n +
              ">" +
              (e = a.subParser("spanGamut")(e, t, i)) +
              "</th>\n"
          );
        }
        function s(e, n) {
          return (
            "<td" + n + ">" + a.subParser("spanGamut")(e, t, i) + "</td>\n"
          );
        }
        function o(e) {
          var o,
            l = e.split("\n");
          for (o = 0; o < l.length; ++o)
            /^ {0,3}\|/.test(l[o]) && (l[o] = l[o].replace(/^ {0,3}\|/, "")),
              /\|[ \t]*$/.test(l[o]) && (l[o] = l[o].replace(/\|[ \t]*$/, "")),
              (l[o] = a.subParser("codeSpans")(l[o], t, i));
          var c = l[0].split("|").map(function (e) {
              return e.trim();
            }),
            d = l[1].split("|").map(function (e) {
              return e.trim();
            }),
            h = [],
            p = [],
            u = [],
            g = [];
          for (l.shift(), l.shift(), o = 0; o < l.length; ++o)
            "" !== l[o].trim() &&
              h.push(
                l[o].split("|").map(function (e) {
                  return e.trim();
                })
              );
          if (c.length < d.length) return e;
          for (o = 0; o < d.length; ++o) u.push(n(d[o]));
          for (o = 0; o < c.length; ++o)
            a.helper.isUndefined(u[o]) && (u[o] = ""), p.push(r(c[o], u[o]));
          for (o = 0; o < h.length; ++o) {
            for (var m = [], f = 0; f < p.length; ++f)
              a.helper.isUndefined(h[o][f]), m.push(s(h[o][f], u[f]));
            g.push(m);
          }
          return (function (e, t) {
            for (
              var i = "<table>\n<thead>\n<tr>\n", a = e.length, n = 0;
              n < a;
              ++n
            )
              i += e[n];
            for (i += "</tr>\n</thead>\n<tbody>\n", n = 0; n < t.length; ++n) {
              i += "<tr>\n";
              for (var r = 0; r < a; ++r) i += t[n][r];
              i += "</tr>\n";
            }
            return i + "</tbody>\n</table>\n";
          })(p, g);
        }
        return t.tables
          ? ((e = (e = (e = (e = i.converter._dispatch(
              "tables.before",
              e,
              t,
              i
            )).replace(/\\(\|)/g, a.helper.escapeCharactersCallback)).replace(
              /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
              o
            )).replace(
              /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm,
              o
            )),
            i.converter._dispatch("tables.after", e, t, i))
          : e;
      }),
      a.subParser("underline", function (e, t, i) {
        "use strict";
        return t.underline
          ? ((e = i.converter._dispatch("underline.before", e, t, i)),
            (e = (e = t.literalMidWordUnderscores
              ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function (e, t) {
                  return "<u>" + t + "</u>";
                })).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, t) {
                  return "<u>" + t + "</u>";
                })
              : (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, t) {
                  return /\S$/.test(t) ? "<u>" + t + "</u>" : e;
                })).replace(/__(\S[\s\S]*?)__/g, function (e, t) {
                  return /\S$/.test(t) ? "<u>" + t + "</u>" : e;
                })).replace(/(_)/g, a.helper.escapeCharactersCallback)),
            (e = i.converter._dispatch("underline.after", e, t, i)))
          : e;
      }),
      a.subParser("unescapeSpecialChars", function (e, t, i) {
        "use strict";
        return (
          (e = (e = i.converter._dispatch(
            "unescapeSpecialChars.before",
            e,
            t,
            i
          )).replace(/¨E(\d+)E/g, function (e, t) {
            var i = parseInt(t);
            return String.fromCharCode(i);
          })),
          i.converter._dispatch("unescapeSpecialChars.after", e, t, i)
        );
      }),
      a.subParser("makeMarkdown.blockquote", function (e, t) {
        "use strict";
        var i = "";
        if (e.hasChildNodes())
          for (var n = e.childNodes, r = n.length, s = 0; s < r; ++s) {
            var o = a.subParser("makeMarkdown.node")(n[s], t);
            "" !== o && (i += o);
          }
        return "> " + (i = i.trim()).split("\n").join("\n> ");
      }),
      a.subParser("makeMarkdown.codeBlock", function (e, t) {
        "use strict";
        var i = e.getAttribute("language"),
          a = e.getAttribute("precodenum");
        return "```" + i + "\n" + t.preList[a] + "\n```";
      }),
      a.subParser("makeMarkdown.codeSpan", function (e) {
        "use strict";
        return "`" + e.innerHTML + "`";
      }),
      a.subParser("makeMarkdown.emphasis", function (e, t) {
        "use strict";
        var i = "";
        if (e.hasChildNodes()) {
          i += "*";
          for (var n = e.childNodes, r = n.length, s = 0; s < r; ++s)
            i += a.subParser("makeMarkdown.node")(n[s], t);
          i += "*";
        }
        return i;
      }),
      a.subParser("makeMarkdown.header", function (e, t, i) {
        "use strict";
        var n = new Array(i + 1).join("#"),
          r = "";
        if (e.hasChildNodes()) {
          r = n + " ";
          for (var s = e.childNodes, o = s.length, l = 0; l < o; ++l)
            r += a.subParser("makeMarkdown.node")(s[l], t);
        }
        return r;
      }),
      a.subParser("makeMarkdown.hr", function () {
        "use strict";
        return "---";
      }),
      a.subParser("makeMarkdown.image", function (e) {
        "use strict";
        var t = "";
        return (
          e.hasAttribute("src") &&
            ((t += "![" + e.getAttribute("alt") + "]("),
            (t += "<" + e.getAttribute("src") + ">"),
            e.hasAttribute("width") &&
              e.hasAttribute("height") &&
              (t +=
                " =" +
                e.getAttribute("width") +
                "x" +
                e.getAttribute("height")),
            e.hasAttribute("title") &&
              (t += ' "' + e.getAttribute("title") + '"'),
            (t += ")")),
          t
        );
      }),
      a.subParser("makeMarkdown.links", function (e, t) {
        "use strict";
        var i = "";
        if (e.hasChildNodes() && e.hasAttribute("href")) {
          var n = e.childNodes,
            r = n.length;
          i = "[";
          for (var s = 0; s < r; ++s)
            i += a.subParser("makeMarkdown.node")(n[s], t);
          (i += "]("),
            (i += "<" + e.getAttribute("href") + ">"),
            e.hasAttribute("title") &&
              (i += ' "' + e.getAttribute("title") + '"'),
            (i += ")");
        }
        return i;
      }),
      a.subParser("makeMarkdown.list", function (e, t, i) {
        "use strict";
        var n = "";
        if (!e.hasChildNodes()) return "";
        for (
          var r = e.childNodes,
            s = r.length,
            o = e.getAttribute("start") || 1,
            l = 0;
          l < s;
          ++l
        )
          void 0 !== r[l].tagName &&
            "li" === r[l].tagName.toLowerCase() &&
            ((n +=
              ("ol" === i ? o.toString() + ". " : "- ") +
              a.subParser("makeMarkdown.listItem")(r[l], t)),
            ++o);
        return (n += "\n\x3c!-- --\x3e\n").trim();
      }),
      a.subParser("makeMarkdown.listItem", function (e, t) {
        "use strict";
        for (var i = "", n = e.childNodes, r = n.length, s = 0; s < r; ++s)
          i += a.subParser("makeMarkdown.node")(n[s], t);
        return (
          /\n$/.test(i)
            ? (i = i
                .split("\n")
                .join("\n    ")
                .replace(/^ {4}$/gm, "")
                .replace(/\n\n+/g, "\n\n"))
            : (i += "\n"),
          i
        );
      }),
      a.subParser("makeMarkdown.node", function (e, t, i) {
        "use strict";
        i = i || !1;
        var n = "";
        if (3 === e.nodeType) return a.subParser("makeMarkdown.txt")(e, t);
        if (8 === e.nodeType) return "\x3c!--" + e.data + "--\x3e\n\n";
        if (1 !== e.nodeType) return "";
        switch (e.tagName.toLowerCase()) {
          case "h1":
            i || (n = a.subParser("makeMarkdown.header")(e, t, 1) + "\n\n");
            break;
          case "h2":
            i || (n = a.subParser("makeMarkdown.header")(e, t, 2) + "\n\n");
            break;
          case "h3":
            i || (n = a.subParser("makeMarkdown.header")(e, t, 3) + "\n\n");
            break;
          case "h4":
            i || (n = a.subParser("makeMarkdown.header")(e, t, 4) + "\n\n");
            break;
          case "h5":
            i || (n = a.subParser("makeMarkdown.header")(e, t, 5) + "\n\n");
            break;
          case "h6":
            i || (n = a.subParser("makeMarkdown.header")(e, t, 6) + "\n\n");
            break;
          case "p":
            i || (n = a.subParser("makeMarkdown.paragraph")(e, t) + "\n\n");
            break;
          case "blockquote":
            i || (n = a.subParser("makeMarkdown.blockquote")(e, t) + "\n\n");
            break;
          case "hr":
            i || (n = a.subParser("makeMarkdown.hr")(e, t) + "\n\n");
            break;
          case "ol":
            i || (n = a.subParser("makeMarkdown.list")(e, t, "ol") + "\n\n");
            break;
          case "ul":
            i || (n = a.subParser("makeMarkdown.list")(e, t, "ul") + "\n\n");
            break;
          case "precode":
            i || (n = a.subParser("makeMarkdown.codeBlock")(e, t) + "\n\n");
            break;
          case "pre":
            i || (n = a.subParser("makeMarkdown.pre")(e, t) + "\n\n");
            break;
          case "table":
            i || (n = a.subParser("makeMarkdown.table")(e, t) + "\n\n");
            break;
          case "code":
            n = a.subParser("makeMarkdown.codeSpan")(e, t);
            break;
          case "em":
          case "i":
            n = a.subParser("makeMarkdown.emphasis")(e, t);
            break;
          case "strong":
          case "b":
            n = a.subParser("makeMarkdown.strong")(e, t);
            break;
          case "del":
            n = a.subParser("makeMarkdown.strikethrough")(e, t);
            break;
          case "a":
            n = a.subParser("makeMarkdown.links")(e, t);
            break;
          case "img":
            n = a.subParser("makeMarkdown.image")(e, t);
            break;
          default:
            n = e.outerHTML + "\n\n";
        }
        return n;
      }),
      a.subParser("makeMarkdown.paragraph", function (e, t) {
        "use strict";
        var i = "";
        if (e.hasChildNodes())
          for (var n = e.childNodes, r = n.length, s = 0; s < r; ++s)
            i += a.subParser("makeMarkdown.node")(n[s], t);
        return i.trim();
      }),
      a.subParser("makeMarkdown.pre", function (e, t) {
        "use strict";
        var i = e.getAttribute("prenum");
        return "<pre>" + t.preList[i] + "</pre>";
      }),
      a.subParser("makeMarkdown.strikethrough", function (e, t) {
        "use strict";
        var i = "";
        if (e.hasChildNodes()) {
          i += "~~";
          for (var n = e.childNodes, r = n.length, s = 0; s < r; ++s)
            i += a.subParser("makeMarkdown.node")(n[s], t);
          i += "~~";
        }
        return i;
      }),
      a.subParser("makeMarkdown.strong", function (e, t) {
        "use strict";
        var i = "";
        if (e.hasChildNodes()) {
          i += "**";
          for (var n = e.childNodes, r = n.length, s = 0; s < r; ++s)
            i += a.subParser("makeMarkdown.node")(n[s], t);
          i += "**";
        }
        return i;
      }),
      a.subParser("makeMarkdown.table", function (e, t) {
        "use strict";
        var i,
          n,
          r = "",
          s = [[], []],
          o = e.querySelectorAll("thead>tr>th"),
          l = e.querySelectorAll("tbody>tr");
        for (i = 0; i < o.length; ++i) {
          var c = a.subParser("makeMarkdown.tableCell")(o[i], t),
            d = "---";
          if (o[i].hasAttribute("style"))
            switch (
              o[i].getAttribute("style").toLowerCase().replace(/\s/g, "")
            ) {
              case "text-align:left;":
                d = ":---";
                break;
              case "text-align:right;":
                d = "---:";
                break;
              case "text-align:center;":
                d = ":---:";
            }
          (s[0][i] = c.trim()), (s[1][i] = d);
        }
        for (i = 0; i < l.length; ++i) {
          var h = s.push([]) - 1,
            p = l[i].getElementsByTagName("td");
          for (n = 0; n < o.length; ++n) {
            var u = " ";
            void 0 !== p[n] &&
              (u = a.subParser("makeMarkdown.tableCell")(p[n], t)),
              s[h].push(u);
          }
        }
        var g = 3;
        for (i = 0; i < s.length; ++i)
          for (n = 0; n < s[i].length; ++n) {
            var m = s[i][n].length;
            m > g && (g = m);
          }
        for (i = 0; i < s.length; ++i) {
          for (n = 0; n < s[i].length; ++n)
            1 === i
              ? ":" === s[i][n].slice(-1)
                ? (s[i][n] =
                    a.helper.padEnd(s[i][n].slice(-1), g - 1, "-") + ":")
                : (s[i][n] = a.helper.padEnd(s[i][n], g, "-"))
              : (s[i][n] = a.helper.padEnd(s[i][n], g));
          r += "| " + s[i].join(" | ") + " |\n";
        }
        return r.trim();
      }),
      a.subParser("makeMarkdown.tableCell", function (e, t) {
        "use strict";
        var i = "";
        if (!e.hasChildNodes()) return "";
        for (var n = e.childNodes, r = n.length, s = 0; s < r; ++s)
          i += a.subParser("makeMarkdown.node")(n[s], t, !0);
        return i.trim();
      }),
      a.subParser("makeMarkdown.txt", function (e) {
        "use strict";
        var t = e.nodeValue;
        return (
          (t = (t = t.replace(/ +/g, " ")).replace(/¨NBSP;/g, " ")),
          (t = (t = (t = (t = (t = (t = (t = (t = a.helper.unescapeHTMLEntities(
            t
          )).replace(/([*_~|`])/g, "\\$1")).replace(
            /^(\s*)>/g,
            "\\$1>"
          )).replace(/^#/gm, "\\#")).replace(
            /^(\s*)([-=]{3,})(\s*)$/,
            "$1\\$2$3"
          )).replace(/^( {0,3}\d+)\./gm, "$1\\.")).replace(
            /^( {0,3})([+-])/gm,
            "$1\\$2"
          )).replace(/]([\s]*)\(/g, "\\]$1\\(")).replace(
            /^ {0,3}\[([\S \t]*?)]:/gm,
            "\\[$1]:"
          )
        );
      }),
      "function" == typeof define && define.amd
        ? define(function () {
            "use strict";
            return a;
          })
        : "undefined" != typeof module && module.exports
        ? (module.exports = a)
        : (this.showdown = a);
  }.call(this);
const atVersion = "3.2.2";
if ("undefined" != typeof appID) {
  let e = confirm(
    "　　3.x版本更新需要修改一下配置，深感抱歉，但是为了更好的体验不得不这样。\n　　如果不想更换，可以继续使用2.4.2版本，这也是比较成熟的版本了，但是以后不会再维护。更换详情请点击确定前往文档查看"
  );
  1 == e && (location.href = "https://artitalk.js.org/release.html");
}
const atEmojiQQ = {
    qq_aini: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aini.gif",
    qq_aixin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aixin.gif",
    qq_aoman: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aoman.gif",
    qq_baiyan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.gif",
    qq_bangbangtang:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bangbangtang.gif",
    qq_baojin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baojin.gif",
    qq_baoquan:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baoquan.gif",
    qq_bishi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.gif",
    qq_bizui: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.gif",
    qq_cahan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/cahan.gif",
    qq_caidao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/caidao.gif",
    qq_chi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chi.gif",
    qq_ciya: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ciya.gif",
    qq_dabing: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dabing.gif",
    qq_daku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/daku.gif",
    qq_dan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dan.gif",
    qq_deyi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/deyi.gif",
    qq_doge: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/doge.gif",
    qq_fadai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fadai.gif",
    qq_fanu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fanu.gif",
    qq_fendou: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fendou.gif",
    qq_ganga: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ganga.gif",
    qq_gouyin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/gouyin.gif",
    qq_guzhang:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guzhang.gif",
    qq_haixiu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haixiu.gif",
    qq_hanxiao:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hanxiao.gif",
    qq_haobang:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haobang.gif",
    qq_haqian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haqian.gif",
    qq_hecai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hecai.gif",
    qq_hexie: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hexie.gif",
    qq_huaixiao:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/huaixiao.gif",
    qq_jie: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jie.gif",
    qq_jingkong:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingkong.gif",
    qq_jingxi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingxi.gif",
    qq_jingya: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingya.gif",
    qq_juhua: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/juhua.gif",
    qq_keai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/keai.gif",
    qq_kelian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kelian.gif",
    qq_koubi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/koubi.gif",
    qq_ku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ku.gif",
    qq_kuaikule:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kuaikule.gif",
    qq_kulou: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kulou.gif",
    qq_kun: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kun.gif",
    qq_lanqiu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lanqiu.gif",
    qq_leiben: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/leiben.gif",
    qq_lenghan:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lenghan.gif",
    qq_liuhan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liuhan.gif",
    qq_liulei: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liulei.gif",
    qq_nanguo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/nanguo.gif",
    qq_OK: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/OK.gif",
    qq_penxue: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/penxue.gif",
    qq_piezui: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/piezui.gif",
    qq_pijiu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/pijiu.gif",
    qq_qiang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiang.gif",
    qq_qiaoda: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiaoda.gif",
    qq_qinqin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qinqin.gif",
    qq_qiudale:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiudale.gif",
    qq_quantou:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/quantou.gif",
    qq_saorao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/saorao.gif",
    qq_se: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/se.gif",
    qq_shengli:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengli.gif",
    qq_shouqiang:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shouqiang.gif",
    qq_shuai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shuai.gif",
    qq_shui: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shui.gif",
    qq_tiaopi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaopi.gif",
    qq_touxiao:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/touxiao.gif",
    qq_tu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tu.gif",
    qq_tuosai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tuosai.gif",
    qq_weiqu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weiqu.gif",
    qq_weixiao:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weixiao.gif",
    qq_woshou: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/woshou.gif",
    qq_wozuimei:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wozuimei.gif",
    qq_wunai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wunai.gif",
    qq_xia: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xia.gif",
    qq_xiaojiujie:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaojiujie.gif",
    qq_xiaoku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoku.gif",
    qq_xiaoyanger:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoyanger.gif",
    qq_xieyanxiao:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xieyanxiao.gif",
    qq_xigua: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xigua.gif",
    qq_xu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xu.gif",
    qq_yangtuo:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yangtuo.gif",
    qq_yinxian:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yinxian.gif",
    qq_yiwen: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yiwen.gif",
    qq_youhengheng:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/youhengheng.gif",
    qq_youling:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/youling.gif",
    qq_yun: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yun.gif",
    qq_zaijian:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zaijian.gif",
    qq_zhayanjian:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhayanjian.gif",
    qq_zhemo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhemo.gif",
    qq_zhouma: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhouma.gif",
    qq_zhuakuang:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhuakuang.gif",
    qq_zuohengheng:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zuohengheng.gif",
  },
  atEmojiTB = {
    OK: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/OK.png",
    what: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/what.png",
    不高兴: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/不高兴.png",
    乖: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/乖.png",
    你懂的: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/你懂的.png",
    便便: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/便便.png",
    勉强: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/勉强.png",
    吐: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/吐.png",
    吐舌: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/吐舌.png",
    呀咩爹: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/呀咩爹.png",
    呵呵: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/呵呵.png",
    哈哈: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/哈哈.png",
    啊: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/啊.png",
    喷: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/喷.png",
    大拇指: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/大拇指.png",
    太开心: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/太开心.png",
    太阳: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/太阳.png",
    委屈: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/委屈.png",
    小乖: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/小乖.png",
    小红脸: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/小红脸.png",
    彩虹: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/彩虹.png",
    心碎: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/心碎.png",
    怒: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/怒.png",
    惊哭: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/惊哭.png",
    惊讶: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/惊讶.png",
    懒得理: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/懒得理.png",
    手纸: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/手纸.png",
    挖鼻: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/挖鼻.png",
    捂嘴笑: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/捂嘴笑.png",
    星星月亮:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/星星月亮.png",
    汗: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/汗.png",
    沙发: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/沙发.png",
    泪: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/泪.png",
    滑稽: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/滑稽.png",
    灯泡: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/灯泡.png",
    爱心: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/爱心.png",
    犀利: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/犀利.png",
    狂汗: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/狂汗.png",
    玫瑰: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/玫瑰.png",
    疑问: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/疑问.png",
    真棒: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/真棒.png",
    睡觉: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/睡觉.png",
    礼物: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/礼物.png",
    笑尿: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/笑尿.png",
    笑眼: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/笑眼.png",
    红领巾: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/红领巾.png",
    胜利: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/胜利.png",
    花心: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/花心.png",
    茶杯: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/茶杯.png",
    药丸: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/药丸.png",
    蛋糕: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/蛋糕.png",
    蜡烛: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/蜡烛.png",
    鄙视: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/鄙视.png",
    酷: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/酷.png",
    酸爽: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/酸爽.png",
    钱币: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/钱币.png",
    阴险: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/阴险.png",
    音乐: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/音乐.png",
    香蕉: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/香蕉.png",
    黑线: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/黑线.png",
  },
  atEmojiBB = {
    baiyan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png",
    bishi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png",
    bizui: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png",
    chan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png",
    daku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/daku.png",
    dalao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalao.png",
    dalian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalian.png",
    dianzan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dianzan.png",
    doge: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/doge.png",
    facai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/facai.png",
    fadai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fadai.png",
    fanu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fanu.png",
    ganga: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ganga.png",
    guilian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guilian.png",
    guzhang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guzhang.png",
    haixiu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haixiu.png",
    heirenwenhao:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/heirenwenhao.png",
    huaixiao:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/huaixiao.png",
    jingxia: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingxia.png",
    keai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/keai.png",
    koubi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/koubi.png",
    kun2: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kun2.png",
    lengmo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lengmo.png",
    liubixue:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liubixue.png",
    liuhan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liuhan.png",
    liulei: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liulei.png",
    mudengkoudai:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/mudengkoudai.png",
    nanguo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/nanguo.png",
    outu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/outu.png",
    qinqin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qinqin.png",
    se: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/se.png",
    shengbing:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengbing.png",
    shengqi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengqi.png",
    shuizhao:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shuizhao.png",
    sikao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/sikao.png",
    tiaokan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaokan.png",
    tiaopi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaopi.png",
    touxiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/touxiao.png",
    tuxue: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tuxue.png",
    weiqu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weiqu.png",
    wunai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wunai.png",
    xiaoku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoku.png",
    xieyanxiao:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xieyanxiao.png",
    yiwen: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yiwen.png",
    yun: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yun.png",
    zaijian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zaijian.png",
    zhoumei: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhoumei.png",
    zhuakuang:
      "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhuakuang.png",
  };
var atEmojiQ = "",
  atEmojiT = "",
  atEmojiB = "";
for (let e in atEmojiQQ)
  atEmojiQ =
    atEmojiQ +
    "<img alt='[" +
    e +
    "]' title='" +
    e +
    "' onclick='insertEmoji(\"[" +
    e +
    "]\")' class='atemoji gallery-group-img' src='" +
    atEmojiQQ[e] +
    "'/>";
for (let e in atEmojiTB)
  atEmojiT =
    atEmojiT +
    "<img alt='[" +
    e +
    "]' title='" +
    e +
    "' onclick='insertEmoji(\"[" +
    e +
    "]\")' class='atemoji gallery-group-img' src='" +
    atEmojiTB[e] +
    "'/>";
for (let e in atEmojiBB)
  atEmojiB =
    atEmojiB +
    "<img alt='[" +
    e +
    "]' title='" +
    e +
    "' onclick='insertEmoji(\"[" +
    e +
    "]\")' class='atemoji gallery-group-img' src='" +
    atEmojiBB[e] +
    "'/>";
function Logout() {
  AV.User.logOut(), location.reload();
}
function insertEmoji(e) {
  let t = document.getElementById("neirong"),
    i = t.value.length;
  t.focus(),
    void 0 !== document.selection
      ? (document.selection.createRange().text = e)
      : (t.value =
          t.value.substr(0, t.selectionStart) +
          e +
          t.value.substring(t.selectionStart, i)),
    preview();
}
function preview() {
  document.getElementById("clickForPreview").click();
}
function Artitalk(e) {
  return new atEvery(e);
}
function atEvery(e) {
  return this.init(e), this;
}
(atEvery.prototype.init = function (e) {
  let t = this;
  if (((t.config = e), console.log(window.AV), window.AV))
    return e && t._init(), t;
  {
    let i = document.createElement("script");
    i.setAttribute("type", "text/javascript"),
      (i.src =
        "https://cdn.jsdelivr.net/npm/leancloud-storage@4.10.0/dist/av-min.js"),
      document.body.appendChild(i),
      (window.ActiveXObject || "ActiveXObject" in window) && i.readyState
        ? (i.onreadystatechange = function () {
            if ("loaded" == this.readyState || "complete" == this.readyState)
              return e && t._init(), t;
          })
        : (i.onload = function () {
            return e && t._init(), t;
          });
  }
}),
  (atEvery.prototype._init = function () {
    let e = this,
      {
        appId: t,
        appKey: i,
        lang: a,
        pageSize: n,
        atEmoji: r,
        bgImg: s,
        motion: o,
        cssUrl: l,
        shuoPla: c,
        avatarPla: d,
        serverURL: h,
        color1: p,
        color2: u,
        color3: g,
      } = e.config;
    switch (
      ((a = void 0 === a || "" === a ? "zh" : a),
      (s =
        void 0 === s || "" === s
          ? "https://cdn.jsdelivr.net/gh/drew233/cdn/20200409110727.webp"
          : s),
      a)
    ) {
      case "zh":
        var m = "加载更多...",
          f = "预览",
          _ = "发布",
          k = "已登录",
          v = "确定",
          w = "退出登录",
          b = "用户",
          y = "密码",
          j = "登录",
          x = "取消",
          A = "发布说说",
          z = "请先登录",
          E = "头像url",
          M = "确定删除本条说说吗？",
          B = "删除成功",
          q = "表情",
          C = "加载中",
          S = "用户名不能为空",
          P = "密码不能为空",
          L = "用户名与密码不匹配",
          I =
            "登陆失败，常见错误有<br><li>网络错误</li><li>域名不在leancloud的域名白名单中被限制登录</li><li>当前页面使用了其他leancloud应用导致登录到了其他应用所以失败</li>",
          H = "未找到此用户",
          T = "尝试错误密码次数过多，请稍后再试";
        break;
      case "en":
        (m = "load more..."),
          (f = "Preview"),
          (_ = "Publish"),
          (k = "logged"),
          (v = "Ok"),
          (w = "Sign out"),
          (b = "Username"),
          (y = "Password"),
          (j = "Log in"),
          (x = "Cancel"),
          (A = "Post talk"),
          (z = "Please log in first"),
          (E = "Avatar url"),
          (M = "Are you sure you want to devare this article?"),
          (B = "Successfully devared"),
          (q = "emoji"),
          (C = "Loading"),
          (S = "Username can not be empty"),
          (P = "Password can not be empty"),
          (L = "The username and password mismatch."),
          (I =
            "Request has been terminated Possible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.c"),
          (H = "Could not find user."),
          (T =
            "You have entered incorrect passwords for too many times. Please try later or reset your password.");
        break;
      case "es":
        (m = "Carga más..."),
          (f = "Avance"),
          (_ = "Lanzamiento"),
          (k = "Registrado"),
          (v = "Determinar"),
          (w = "Desconectar"),
          (b = "Usuario"),
          (y = "Contraseña"),
          (j = "Iniciar sesión"),
          (x = "Cancelar"),
          (A = "Publicar charla"),
          (z = "Por favor ingresa primero"),
          (E = "URL del avatar"),
          (M = "¿Estás seguro de que deseas eliminar este artículo?"),
          (B = "Eliminado con éxito"),
          (q = "expresión"),
          (C = "Cargando"),
          (S = "El nombre de usuario no puede estar vacío"),
          (P = "la contraseña no puede estar en blanco"),
          (L = "El nombre de usuario y la contraseña no coinciden."),
          (I =
            "La solicitud ha sido cancelada Posibles causas: la red está fuera de línea, Access-Control-Allow-Origin no permite Origin, la página se está descargando, etc.c"),
          (H = "No se pudo encontrar el usuario."),
          (T =
            "Ha introducido contraseñas incorrectas demasiadas veces. Inténtelo más tarde o restablezca su contraseña.");
    }
    let O = "";
    for (let e in r)
      O =
        O +
        "<img alt='[" +
        e +
        "]' title='" +
        e +
        "' onclick='insertEmoji(\"[" +
        e +
        "]\")' class='atemoji gallery-group-img' src='" +
        r[e] +
        "'/>";
    (c = void 0 === c ? "" : c),
      (d = void 0 === d ? "" : d),
      (p = void 0 === p || "" === p ? "RGBA(255, 125, 73, 0.75)" : p),
      (u = void 0 === u || "" === u ? "#9BCD9B" : u),
      (g = void 0 === g || "" === g ? "white" : g),
      (n = void 0 === n ? "5" : n);
    try {
      "" !== h
        ? AV.init({ appId: t, appKey: i, serverURL: h })
        : AV.init({ appId: t, appKey: i });
    } catch (e) {
      let t = e.toString();
      console.error(t),
        -1 != t.indexOf("appId is not defined")
          ? console.log("appId没找到")
          : -1 != t.indexOf("appKey is not defined") &&
            console.log("appKey没找到");
    }
    function V(e) {
      if (void 0 !== e) {
        for (let t in atEmojiQQ) {
          let i = "[" + t + "]",
            a =
              "<img class='atemoji gallery-group-img' src='" +
              atEmojiQQ[t] +
              "'/>";
          for (; -1 != e.indexOf(i); ) e = e.replace(i, a);
        }
        for (let t in atEmojiTB) {
          let i = "[" + t + "]",
            a =
              "<img class='atemoji gallery-group-img' src='" +
              atEmojiTB[t] +
              "'/>";
          for (; -1 != e.indexOf(i); ) e = e.replace(i, a);
        }
        for (let t in atEmojiBB) {
          let i = "[" + t + "]",
            a =
              "<img class='atemoji gallery-group-img' src='" +
              atEmojiBB[t] +
              "'/>";
          for (; -1 != e.indexOf(i); ) e = e.replace(i, a);
        }
        for (let t in r) {
          let i = "[" + t + "]",
            a = "<img class='atemoji gallery-group-img' src='" + r[t] + "'/>";
          for (; -1 != e.indexOf(i); ) e = e.replace(i, a);
        }
        return e;
      }
    }
    function $(e) {
      if (!document.getElementById(e)) return;
      document.getElementById(e).style.display = "";
    }
    function R(e) {
      if (!document.getElementById(e)) return;
      document.getElementById(e).style.display = "none";
    }
    function U() {
      $("shade"), $("shuoshuo-modal");
    }
    function N() {
      R("shade"), R("shuoshuo-modal");
    }
    let D = "";
    if (!document.getElementById("add-Artitalk_Style"))
      if ("" === l || void 0 === l) {
        D =
          "div#artitalk_main {    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);  }  #artitalk_main .shuoshuo_row {  width: 100%;  margin-top: 10px;  display: flex;  }  #artitalk_main .artitalk_child {  width: 100%;  }  #artitalk_main #shuoshuo_content {  padding: 10px;  /* min-height: 500px; */  }  #artitalk_main body.theme-dark .cbp_tmtimeline::before {  background: RGBA(255, 255, 255, 0.06);  }  #artitalk_main ul.cbp_tmtimeline {  padding: 0;  }  #artitalk_main .cbp_tmtimeline {  margin: 30px 0 0 0;  padding: 0;  list-style: none;  display: inline;  position: relative;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime {  display: block;  /* width: 29%; */  /* padding-right: 110px; */  max-width: 70px;  position: absolute;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span {  display: block;  text-align: right;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:first-child {  font-size: 0.9em;  color: #bdd0db;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:last-child {  font-size: 1.2em;  color: #9bcd9b;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmtime span:last-child {  color: RGBA(255, 125, 73, 0.75);  }  #artitalk_main div.cbp_tmlabel>p {  margin-bottom: 0;  }  #artitalk_main div class.cdp_tmlabel>li .cbp_tmlabel {  margin-bottom: 0;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmlabel {  margin: 0 0 45px 65px;  z-index: 1;  background: " +
          u +
          ";  color: " +
          g +
          " ;  padding: 0.8em 1.2em 0.4em 1.2em;  /* font-size: 1.2em; */  font-weight: 300;  line-height: 1.4;  position: relative;  border-radius: 5px;  transition: all 0.3s ease 0s;  box-shadow: 0 1px 2px rgba(0,0,0,0.15); display: block;  }  #artitalk_main .cbp_tmlabel:hover {  /* transform: scale(1.05); */  transform: translateY(-3px);  z-index: 1;  box-shadow: 0 15px 32px rgba(0,0,0,0.15) ;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel {    background: " +
          p +
          ';  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmlabel:after {  right: 100%;  border: solid transparent;  z-index: -1;  content: " ";  height: 0;  width: 0;  position: absolute;  pointer-events: none;  border-right-color: ' +
          u +
          ";  border-width: 10px;  top: 4px;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after {    border-right-color: " +
          p +
          ";  }  #artitalk_main p.shuoshuo_time {  margin-top: 10px;  border-top: 1px dashed #fff;  padding-top: 5px;  font-size: 12px;  }  @media screen and (max-width: 65.375em) {  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:last-child {    font-size: 1.2em;  }  }  #artitalk_main .shuoshuo_author_img img {  border: 1px solid #ddd;  padding: 2px;  float: left;  border-radius: 64px;  transition: all 1s;  }  #artitalk_main .artitalk_avatar {  border-radius: 100% ;  -moz-border-radius: 100% ;  box-shadow: inset 0 -1px 0 3333sf;  -webkit-box-shadow: inset 0 -1px 0 3333sf;  -webkit-transition: 0.4s;  -webkit-transition: -webkit-transform 0.4s ease-out;  transition: transform 0.4s ease-out;  -moz-transition: -moz-transform 0.4s ease-out;  }  #artitalk_main .artitalk_avatar:hover {  -webkit-transform: rotateZ(360deg);  -moz-transform: rotateZ(360deg);  -o-transform: rotateZ(360deg);  -ms-transform: rotateZ(360deg);  transform: rotateZ(360deg);  }  #artitalk_main .shuoshuo_text {  width: 100%;  height: 130px;  padding: 8px 16px;  background-repeat: no-repeat;  background-position: right;  transition: all 0.35s ease-in-out 0s;  outline-style: none;  border: 1px solid #ccc;  border-radius: 6px;  resize: none;  background-color: transparent;  color: #999;  }  #artitalk_main .shuoshuo_inputs {  outline-style: none;  border: 1px solid #ccc;  padding: 8px 16px;  width: 40%;  font-size: 12px;  background-color: transparent;  color: #999;  }  #operare_artitalk .at_button,  #artitalk_main .at_button {    background-color: " +
          p +
          ";  /* Green */  border: none;  margin-left: 5px;  color: " +
          g +
          ";  padding: 8px 16px;  text-align: center;  text-decoration: none;  height: auto;  line-height: 20px;  display: inline-block;  font-size: 12px;  border-radius: 12px;  /* circle */  outline: none;  cursor: pointer;  }  #operare_artitalk .at_button:hover,  #artitalk_main .at_button:hover {      background-color: " +
          u +
          ';  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.24), 0 8px 16px 0 rgba(0,0,0,0.19);  }  #artitalk_main #article-container ul p {  margin: 0 0 1rem;  }  #artitalk_main .power {  text-align: right;  color: #999;  margin-top: 10px;  font-size: 0.75em;  padding: 0.5em 0;  }  #artitalk_main .power a {  font-size: 0.75em;  position: relative;  cursor: pointer;  color: #1abc9c;  text-decoration: none;  display: inline-block;  }  #artitalk_main .shuoshuo_row .col.col-80 {  width: 80%;  float: left;  }  #artitalk_main .shuoshuo_row .col.col-20 {  width: 20%;  float: right;  text-align: right;  }  #artitalk_main #preview {  width: 100%;  float: left;  margin: 0.5rem 0 0;  padding: 7px;  box-shadow: 0 0 1px #f0f0f0;  }  #artitalk_main #lazy {  background: #fff;  bottom: 0;  left: 0;  position: fixed;  right: 0;  top: 0;  z-index: 9999;  }  #artitalk_main .preloader {  position: absolute;  margin-left: -55px;  margin-top: -100px;  height: 110px;  width: 110px;  left: 50%;  top: 50%;  }  #artitalk_main .preloader>svg>g>path {  stroke: #9ea1a4;  stroke-width: 0.25;  }  #artitalk_main .preloader>svg>path {  stroke: #9ea1a4;  stroke-width: 0.25;  }  #artitalk_main #cloud {  position: relative;  z-index: 2;  }  #artitalk_main #cloud path {  fill: #efefef;  }  #artitalk_main #sun {  margin-left: -10px;  margin-top: 6px;  opacity: 0;  width: 60px;  height: 60px;  position: absolute;  left: 45px;  top: 15px;  z-index: 1;  animation-name: rotate;  animation-duration: 16000ms;  animation-iteration-count: infinite;  animation-timing-function: linear;  }  #artitalk_main #sun path {  stroke-width: 0.18;  fill: #9ea1a4;  }  #artitalk_main .rain {  position: absolute;  width: 70px;  height: 70px;  margin-top: -32px;  margin-left: 19px;  }  #artitalk_main .drop {  opacity: 1;  background: #9ea1a4;  display: block;  float: left;  width: 3px;  height: 10px;  margin-left: 4px;  border-radius: 0px 0px 6px 6px;  animation-name: drop;  animation-duration: 350ms;  animation-iteration-count: infinite;  }  #artitalk_main .drop:nth-child(1) {  animation-delay: -130ms;  }  #artitalk_main .drop:nth-child(2) {  animation-delay: -240ms;  }  #artitalk_main .drop:nth-child(3) {  animation-delay: -390ms;  }  #artitalk_main .drop:nth-child(4) {  animation-delay: -525ms;  }  #artitalk_main .drop:nth-child(5) {  animation-delay: -640ms;  }  #artitalk_main .drop:nth-child(6) {  animation-delay: -790ms;  }  #artitalk_main .drop:nth-child(7) {  animation-delay: -900ms;  }  #artitalk_main .drop:nth-child(8) {  animation-delay: -1050ms;  }  #artitalk_main .drop:nth-child(9) {  animation-delay: -1130ms;  }  #artitalk_main .drop:nth-child(10) {  animation-delay: -1300ms;  }  #artitalk_main .artitalk_loading_text {  font-family: Helvetica, " Helvetica Neue ", sans-serif;  letter-spacing: 1px;  text-align: center;  margin-left: -43px;  font-weight: bold;  margin-top: 20px;  font-size: 11px;  color: #a0a0a0;  width: 200px;  }  #artitalk_main .shuoshuoimg {  cursor: pointer;  transition: all 1s;  z-index: 2;  }  #artitalk_main .shuoshuoimg:hover {  transform: scale(3.5);  }  #artitalk_main .hide,  #operare_artitalk .hide {  display: none;  }  #operare_artitalk .c1 {  position: fixed;  top: 0;  bottom: 0;  left: 0;right: 0;  background: rgba(0,0,0,0.5);  z-index: 2;  }  #operare_artitalk .c2 {  background-color: #fff;  position: fixed;  width: 400px;  height: auto;  top: 50%;  left: 50%;  z-index: 3; margin-top: -150px;  margin-left: -200px;  box-shadow: 0 15px 35px rgba(50,50,93,0.1), 0 5px 15px rgba(0,0,0,0.07);  opacity: 0.85;  border: 0;  border-radius: 10px;  }  #operare_artitalk .shuoshuo_input_log {  outline-style: none;  margin-top: 10px;  border: 1px solid #ccc;  border-radius: 6px;  padding: 8px 16px;  font-size: 12px;  background-color: transparent;  color: #999;  }  #artitalk_main .delete_right {  cursor: pointer;  width: 12px;  height: 12px;  position: absolute;  right: 12px;  }  #artitalk_main svg {  display: inline;  }  #artitalk_main .cbp_tmlabel>p,  #artitalk_main h1,  #artitalk_main h2,  #artitalk_main h3,  #artitalk_main h4,  #artitalk_main h5,  #artitalk_main h6,  #artitalk_main em {  word-wrap: break-word;  word-break: break-all;  }  #artitalk_main .shuoshuo_emoji {  border: 1px solid #ccc;  border-radius: 6px 6px 0 0;  height: 170px;  overflow: auto;  margin-top: 10px;  border-bottom: none;  }  #artitalk_main .atemoji {  max-height: 150px; max-width: 150px;    display: inline;  vertical-align: middle;  }  #artitalk_main .shuoshuo_emoji>.atemoji {  cursor: pointer;  margin: 0 0 0 10px;  display: inline;  }  #artitalk_main i>.atemoji {  cursor: pointer;  margin: 0 0 0 10px;  }  #artitalk_main .shuoshuo_emoji>a {  display: inline;  }  #artitalk_main #preview>p>.atemoji {  display: inline;  }  #artitalk_main .shuoshuo_emoji>.atemoji:hover {  transform: scale(1.5);  }  #artitalk_main div#shuoshuo_emojiswitch {  height: 40px;  width: auto;  border-radius: 0 0 6px 6px;  border-collapse: collapse;  border: 1px solid #ccc;  border-top: none;  }  #artitalk_main .shuoshuo_emoji_part {  width: 25%;  cursor: pointer;  align-content: center;  text-align: center;  line-height: 40px;  }  #artitalk_main .shuoshuo_emoji_part:hover {  background-color: #ccc;  color: #fff;  }  #artitalk_main .zuiliangdezai {  background-color: #ccc;  color: #fff;  }  #artitalk_main .pingjun {  display: flex;  }  #artitalk_main #article-container img {  margin: 0 0 0 0;  }  #artitalk_main .preview_now {  display: none;  }  #artitalk_main div#loading_txt {  font-size: 20px;  }  #artitalk_main audio {  display: block;  width: 100%;  outline: none;  opacity: 0.8;  }  #artitalk_main video {  z-index: 0;  }p.shuoshuo_time>span>a:hover {color: red;}p.shuoshuo_time>span>a {color: black;text-decoration: none;}  #artitalk_main textarea#neirong:focus {  background-position-y: 150px;  transition: all 0.35s ease-in-out 0s;  }  #artitalk_main img.atemoji {  max-height: 150px; max-width: 150px;   display: inline;  vertical-align: middle;  }  #artitalk_main span.cbp_tmlabel>p {  overflow: unset;  }  #artitalk_main ul#maina>li {  list-style: none;  }  #artitalk_main div#artitalk_main {  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);  }  #artitalk_main .c2>center>p {  margin-top: 10px;  margin-bottom: 10px;  }  @-moz-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-webkit-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-o-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-moz-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @-webkit-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @-o-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }';
        let e = document.createElement("style");
        (e.type = "text/css"),
          (e.innerHTML = D),
          (e.id = "add-Artitalk-Style"),
          document.head.appendChild(e);
      } else {
        let e = document.createElement("link");
        (e.rel = "stylesheet"),
          (e.href = l),
          (e.id = "add-Artitalk-Style"),
          document.head.appendChild(e);
      }
    var Q =
        '<div id=\'artitalk_part1\'><div id="shuoshuo_content"><div id="ccontent"></div><div id=\'readButton\' style=\'\'><center><button id="readmore" class="at_button" style="margin-bottom: 15px;display: none">' +
        m +
        '</button></center></div></div><div id="shuoshuo_input" class="shuoshuo_active" style="display: none;"><div id="shuoshuo_edit"><textarea class="shuoshuo_text" oninput="preview()" id="neirong" placeholder="' +
        c +
        '"style="background-image: url(' +
        s +
        ');z-index: 0"></textarea><span id="drag_area" class="z-index: -1;"></span></div><div id="shuoshuo_parttwo" class="shuoshuo_parttwo"><div id="shuoshuo_emoji_Tieba" class="shuoshuo_emoji" style=\'display: none\'></div><div id="shuoshuo_emoji_BiliBili" class="shuoshuo_emoji" style=\'display: none\'></div><div id="shuoshuo_emoji_QQ" class="shuoshuo_emoji" style=\'display: none\'></div><div id="shuoshuo_emoji_custom" class="shuoshuo_emoji" style=\'display: none\'></div><div id="shuoshuo_emojiswitch" class="shuoshuo_emojiswitch" style=\'display: none\'><div id="switch_1" class="shuoshuo_emoji_part zuiliangdezai">Tieba</div><div id="switch_2" class="shuoshuo_emoji_part">BiliBili</div><div id="switch_3" class="shuoshuo_emoji_part">QQ</div><div id="switch_4" class="shuoshuo_emoji_part">Custom</div></div><div id="preview" class="preview_now"></div></div><div class="shuoshuo_submit"><div class="shuoshuo_row"><input class="artitalk_child shuoshuo_inputs" style=\'display: none\' id="email" value=""  placeholder=" ' +
        E +
        '"><input class="artitalk_child shuoshuo_inputs" style="display: none" id="commentNick" value="" placeholder="' +
        E +
        '"><div class="artitalk_child"><button class="at_button" id=\'atSave\' style="float: right;">' +
        _ +
        '</button><button class="at_button" id=\'commentSave\' style="display:none;float: right;">' +
        _ +
        '</button><button class="at_button" id=\'atPreview\' style="float: right;">' +
        f +
        '</button><button class="at_button" id=\'loadEmoji\' style="float: right;">' +
        q +
        '</button></div></div></div></div></div><div class="power"><div style="font-size: 25px;display: none; cursor: pointer" id="pubComment"><svg t="1591347684072" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9731" width="30" height="30" style=""><path d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m0 953.62C268.49 953.62 70.38 755.51 70.38 512S268.49 70.38 512 70.38 953.62 268.49 953.62 512 755.51 953.62 512 953.62z" p-id="9732" fill="#707070"></path><path d="M771.1 726.4H514.8c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23h256.3c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM771.1 654.55H587.92c-15.56 0-28.23 12.66-28.23 28.23S572.35 711 587.92 711H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.22-28.23-28.22zM771.1 582.69H654.22c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM809.25 361.96c0-14.79-5.74-28.68-16.17-39.1L657.66 187.45c-10.43-10.43-24.32-16.17-39.1-16.17s-28.67 5.74-39.1 16.17L207.23 559.67c-5.06 5.06-7.88 12.06-7.72 19.21l3.61 172.49a26.32 26.32 0 0 0 25.8 25.83l172.6 3.81c0.22 0.01 0.44 0.01 0.67 0.01 6.95 0 13.76-2.82 18.66-7.73l372.22-372.22c10.43-10.43 16.18-24.32 16.18-39.11z m-53.5 1.79L391.5 727.99l-136.14-3-2.85-135.96 364.25-364.26c0.99-0.98 2.59-0.98 3.58-0.01l135.4 135.41c0.99 0.99 0.99 2.59 0.01 3.58z" p-id="9733" fill="#707070"></path></svg></div><div style="font-size: 25px;display: inline; cursor: pointer" id="pubShuo"title="' +
        A +
        '"><svg t="1591347684072"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9731" width="30" height="30"  style="display: inline"><path d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m0 953.62C268.49 953.62 70.38 755.51 70.38 512S268.49 70.38 512 70.38 953.62 268.49 953.62 512 755.51 953.62 512 953.62z" p-id="9732" fill="#707070"></path><path d="M771.1 726.4H514.8c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23h256.3c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM771.1 654.55H587.92c-15.56 0-28.23 12.66-28.23 28.23S572.35 711 587.92 711H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.22-28.23-28.22zM771.1 582.69H654.22c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM809.25 361.96c0-14.79-5.74-28.68-16.17-39.1L657.66 187.45c-10.43-10.43-24.32-16.17-39.1-16.17s-28.67 5.74-39.1 16.17L207.23 559.67c-5.06 5.06-7.88 12.06-7.72 19.21l3.61 172.49a26.32 26.32 0 0 0 25.8 25.83l172.6 3.81c0.22 0.01 0.44 0.01 0.67 0.01 6.95 0 13.76-2.82 18.66-7.73l372.22-372.22c10.43-10.43 16.18-24.32 16.18-39.11z m-53.5 1.79L391.5 727.99l-136.14-3-2.85-135.96 364.25-364.26c0.99-0.98 2.59-0.98 3.58-0.01l135.4 135.41c0.99 0.99 0.99 2.59 0.01 3.58z" p-id="9733" fill="#707070"></path></svg></div><div style="font-size: 25px;display: inline; cursor: pointer" id="switchUser" title="' +
        j +
        '"><svg t="1591347848063"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12288" width="30" height="30"  style="display: inline"><path d="M515.541449 7.082899c-280.359429 0-508.458551 228.120391-508.458551 508.458551s228.120391 508.458551 508.458551 508.458551 508.458551-228.120391 508.458551-508.458551S795.900879 7.082899 515.541449 7.082899zM515.541449 981.864196c-257.132626 0-466.301477-209.190121-466.301477-466.322747 0-257.132626 209.168851-466.322747 466.301477-466.322747s466.301477 209.190121 466.301477 466.322747S772.674075 981.864196 515.541449 981.864196zM614.574414 524.177056 614.574414 524.177056c47.751075-31.96876 79.230625-86.398604 79.230625-148.187857 0-98.437405-79.804915-178.24232-178.24232-178.24232-98.437405 0-178.24232 79.804915-178.24232 178.24232 0 61.810523 31.479551 116.219097 79.251895 148.187857-100.266622 39.519598-171.244501 137.170014-171.244501 251.453545 0 0.23397 0 0.446669 0.02127 0.659369 0 0.04254-0.02127 0.10635-0.02127 0.14889 0 15.612155 12.65563 28.246516 28.267786 28.246516 15.590885 0 21.886796-12.63436 21.886796-28.246516 0-0.340319-0.08508-0.659369-0.10635-1.020958 0.10635-118.005774 102.159649-219.995264 220.207964-219.995264 118.112124 0 220.207964 102.095839 220.207964 220.207964 0 0.14889-1.467628 29.054774 21.971875 29.054774 15.505806 0 28.076356-12.57055 28.076356-28.055086 0-0.06381-0.02127-0.12762-0.02127-0.2127 0-0.25524 0.02127-0.510479 0.02127-0.786989C785.797645 661.34707 714.798496 563.696654 614.574414 524.177056zM515.541449 510.734437c-74.402343 0-134.723968-60.321625-134.723968-134.723968 0-74.423613 60.321625-134.723968 134.723968-134.723968 74.423613 0 134.723968 60.321625 134.723968 134.723968S589.943792 510.734437 515.541449 510.734437z" p-id="12289" fill="#707070"></path></svg></div><div style="font-size: 25px;display: inline; cursor: pointer" id="uploadSource" title="" + text29 + ""><svg t="1606385459524" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2943" width="30" height="30" style="display: inline"><path d="M275.815618 476.43815a20.004001 20.004001 0 0 1-14.139971-34.143972l251.284545-251.295976 249.387023 249.387023a20.004001 20.004001 0 0 1-28.291373 28.291373L512.960192 247.580948 289.955589 470.585551a19.946847 19.946847 0 0 1-14.139971 5.852599z" p-id="2944" fill="#707070"></path><path d="M512.011431 854.730956a20.004001 20.004001 0 0 1-20.004001-20.004001V225.279344a20.004001 20.004001 0 1 1 40.008002 0v609.390456a20.004001 20.004001 0 0 1-20.004001 20.061156z" p-id="2945" fill="#707070"></path><path d="M512.011431 1023.999097a510.467814 510.467814 0 1 1 199.297004-40.24805 508.810339 508.810339 0 0 1-199.297004 40.24805z m0-983.991095a470.459811 470.459811 0 1 0 183.659591 37.081703A469.030954 469.030954 0 0 0 512.011431 40.008002z" p-id="2946" fill="#707070"></path></svg></div><br>Powered By <a href="https://artitalk.js.org" target="_blank">Artitalk</a><br>' +
        atVersion +
        "</div><input type='file' id='realUpload' onchange='atEvery.prototype.beginUpload(this.files[0])' style=\"width: 0;height: 0;display: none\"></input></div>",
      G =
        '<div id=\'lazy\'><div class="preloader" style="opacity: 1; "><svg version="1.1" id="sun" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve"style="opacity: 1; margin-left: 0px; margin-top: 0px;"><g><path fill="none"d="M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"></path><path fill="none"d="M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"></path><path fill="none"d="M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"></path><path fill="none"d="M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"></path><path fill="none"d="M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"></path><path fill="none"d="M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"></path><path fill="none"d="M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"></path><path fill="none"d="M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"></path><path fill="none"d="M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"></path><path fill="none"d="M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"></path><path fill="none"d="M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"></path><path fill="none"d="M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"></path><path fill="none"d="M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"</path></g></svg><svg version="1.1" id="cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" width="110px" height="110px" viewBox="0 0 10 10" enable-background="new 0 0 10 10"xml:space="preserve"><path fill="none"d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"></path></svg><div class="rain"><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span></div><div class="artitalk_loading_text" id="loading_txt">' +
        C +
        "</div></div></div>",
      F =
        '<div id="shade" class="c1" style=\'display: none\'></div><div id="shuoshuo-modal" class="c2" style=\'display: none\' ><center><p>' +
        b +
        '：<input type="text" class="shuoshuo_input_log" id="username"/></p><p>' +
        y +
        '：<input type="password" class="shuoshuo_input_log"  id="pwd"/></p><p><input type="button" value="' +
        j +
        '" class="at_button" id=\'login\'>&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="' +
        x +
        '"  class="at_button" id = \'celLogin\'></p></center><center><div id="logw" style=\'color: red\'></div></center></div><div id="userinfo" class="c2" style=\'display: none\'><center><p><div id="status"></div></p><p><input type="button" class="at_button" value="' +
        v +
        '" id="hideuser">&nbsp;&nbsp;&nbsp;&nbsp;<input id="tui" type="button" value="' +
        w +
        '" class="at_button" style="display: none;" onclick="Logout();"></p></center></div><div id="shanchu" class="c2" style=\'display: none\'><center><p>' +
        B +
        '</p><p><input type="button" class="at_button" value="' +
        v +
        '" id="deleteSus"></p><center></div><div id="shanchur" class="c2" style=\'display: none\'><center><p>' +
        M +
        "</p><p><div id=\"delete1\"></div></p><center></div><div id='clickForPreview'></div>",
      W = document.createElement("div");
    (W.id = "operare_artitalk"),
      document.body.append(W),
      (document.getElementById("operare_artitalk").innerHTML = F),
      (Q = (G = 0 === o ? "" : G) + Q),
      (document.getElementById("artitalk_main").innerHTML = Q),
      e.seeContent(0, e.config);
    let K = document.getElementById("readmore"),
      Z = document.getElementById("pubShuo"),
      X = document.getElementById("switchUser"),
      Y = document.getElementById("celLogin"),
      J = document.getElementById("login"),
      ee = document.getElementById("hideuser"),
      te = document.getElementById("loadEmoji"),
      ie = document.getElementById("switch_1"),
      ae = document.getElementById("switch_2"),
      ne = document.getElementById("switch_3"),
      re = document.getElementById("switch_4"),
      se = document.getElementById("atPreview"),
      oe = document.getElementById("clickForPreview"),
      le = document.getElementById("atSave"),
      ce = document.getElementById("deleteSus"),
      de = document.getElementById("uploadSource"),
      he = 0;
    (K.onclick = function () {
      (he += 1), e.seeContent(he, e.config);
    }),
      (Z.onclick = function () {
        AV.User.current()
          ? "" === document.getElementById("shuoshuo_input").style.display
            ? R("shuoshuo_input")
            : $("shuoshuo_input")
          : ((document.getElementById("logw").innerHTML =
              "<center><pre><code>" + z + "</code></pre></center>"),
            U());
      }),
      (X.onclick = function () {
        document.getElementById("logw").innerHTML = "";
        let e = AV.User.current();
        $("shade"),
          e
            ? ($("userinfo"),
              (document.getElementById("status").innerHTML =
                k + ":\t" + e.attributes.username),
              $("tui"))
            : ($("tui"), $("shuoshuo-modal"), U());
      }),
      (Y.onclick = function () {
        N();
      }),
      (J.onclick = function () {
        let t = document.getElementById("pwd").value;
        if (
          ((document.getElementById("logw").style.color = "black"),
          (document.getElementById("logw").innerHTML = "loading..."),
          "" === t)
        )
          return (
            (document.getElementById("logw").style.color = "red"),
            void (document.getElementById("logw").innerHTML = P)
          );
        let i = document.getElementById("username").value;
        if ("" === i)
          return (
            (document.getElementById("logw").style.color = "red"),
            void (document.getElementById("logw").innerHTML = S)
          );
        AV.User.logIn(i, t).then(
          (t) => {
            (document.getElementById("ccontent").innerHTML = ""),
              (document.getElementById("neirong").value = ""),
              $("lazy"),
              e.seeContent(0, e.config),
              N();
          },
          (e) => {
            let t = e.message;
            (document.getElementById("logw").style.color = "red"),
              -1 != t.indexOf("mismatch")
                ? (t = L)
                : -1 != t.indexOf("terminated")
                ? (t = I)
                : -1 != t.indexOf("Could not find user.")
                ? (t = H)
                : -1 != t.indexOf("Please try later or reset your password.") &&
                  (t = T),
              (document.getElementById("logw").innerHTML = t);
          }
        );
      }),
      (ee.onclick = function () {
        R("shade"), R("userinfo");
      }),
      (te.onclick = function () {
        document.getElementById("switch_1").classList.add("zuiliangdezai"),
          document.getElementById("switch_2").classList.remove("zuiliangdezai"),
          document.getElementById("switch_3").classList.remove("zuiliangdezai"),
          document.getElementById("switch_4").classList.remove("zuiliangdezai"),
          "none" ===
          document.getElementById("shuoshuo_emojiswitch").style.display
            ? ($("shuoshuo_emoji_Tieba"),
              $("shuoshuo_emojiswitch"),
              (document.getElementById(
                "shuoshuo_emoji_BiliBili"
              ).innerHTML = atEmojiB),
              (document.getElementById(
                "shuoshuo_emoji_Tieba"
              ).innerHTML = atEmojiT),
              (document.getElementById(
                "shuoshuo_emoji_QQ"
              ).innerHTML = atEmojiQ),
              (document.getElementById("shuoshuo_emoji_custom").innerHTML = O),
              document
                .getElementById("shuoshuo_emojiswitch")
                .classList.add("pingjun"))
            : (R("shuoshuo_emoji_Tieba"),
              R("shuoshuo_emoji_BiliBili"),
              R("shuoshuo_emoji_custom"),
              R("shuoshuo_emoji_QQ"),
              R("shuoshuo_emojiswitch"),
              document
                .getElementById("shuoshuo_emojiswitch")
                .classList.remove("pingjun"));
      }),
      (ie.onclick = function () {
        ie.classList.add("zuiliangdezai"),
          ne.classList.remove("zuiliangdezai"),
          ae.classList.remove("zuiliangdezai"),
          re.classList.remove("zuiliangdezai"),
          $("shuoshuo_emoji_Tieba"),
          R("shuoshuo_emoji_QQ"),
          R("shuoshuo_emoji_BiliBili"),
          R("shuoshuo_emoji_custom");
      }),
      (ne.onclick = function () {
        ne.classList.add("zuiliangdezai"),
          ie.classList.remove("zuiliangdezai"),
          ae.classList.remove("zuiliangdezai"),
          re.classList.remove("zuiliangdezai"),
          $("shuoshuo_emoji_QQ"),
          R("shuoshuo_emoji_Tieba"),
          R("shuoshuo_emoji_BiliBili"),
          R("shuoshuo_emoji_custom");
      }),
      (ae.onclick = function () {
        ae.classList.add("zuiliangdezai"),
          ne.classList.remove("zuiliangdezai"),
          ie.classList.remove("zuiliangdezai"),
          re.classList.remove("zuiliangdezai"),
          $("shuoshuo_emoji_BiliBili"),
          R("shuoshuo_emoji_QQ"),
          R("shuoshuo_emoji_Tieba"),
          R("shuoshuo_emoji_custom");
      }),
      (re.onclick = function () {
        re.classList.add("zuiliangdezai"),
          ne.classList.remove("zuiliangdezai"),
          ae.classList.remove("zuiliangdezai"),
          ie.classList.remove("zuiliangdezai"),
          $("shuoshuo_emoji_custom"),
          R("shuoshuo_emoji_QQ"),
          R("shuoshuo_emoji_BiliBili"),
          R("shuoshuo_emoji_Tieba");
      }),
      (se.onclick = function () {
        let e = document.getElementById("preview");
        -1 !== e.className.indexOf("preview_now")
          ? e.classList.remove("preview_now")
          : e.classList.add("preview_now");
      }),
      (le.onclick = function () {
        let t = AV.User.current();
        t || Z.click();
        let i = document.getElementById("neirong").value;
        if ("" === i) throw "说说内容不能为空";
        let a = new (AV.Object.extend("shuoshuo"))(),
          n = i;
        a.set("atContentMd", n), (i = V(i));
        let r = new showdown.Converter();
        r.setOption("strikethrough", 1);
        let s = r.makeHtml(i),
          o =
            void 0 === t.attributes.img
              ? "https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png"
              : t.attributes.img,
          l = new Client().system.name;
        a.set("atContentHtml", s),
          a.set("userOs", l),
          a.set("avatar", o),
          $("lazy"),
          a.save().then(function (t) {
            (document.getElementById("ccontent").innerHTML = ""),
              (document.getElementById("neirong").value = ""),
              R("preview"),
              e.seeContent(0, e.config),
              R("shuoshuo_input");
          });
      }),
      (oe.onclick = function () {
        let e = document.getElementById("neirong").value;
        e = V(e);
        let t = new showdown.Converter();
        t.setOption("strikethrough", 1);
        let i = t.makeHtml(e);
        document.getElementById("preview").innerHTML = i;
      }),
      (ce.onclick = function () {
        R("shanchu"),
          R("shade"),
          $("lazy"),
          (document.getElementById("ccontent").innerHTML = ""),
          e.seeContent(0, e.config);
      }),
      (de.onclick = function () {
        if (!AV.User.current())
          return (
            (document.getElementById("logw").innerHTML =
              "<center><pre><code>" + z + "</code></pre></center>"),
            $("shade"),
            void $("shuoshuo-modal")
          );
        document.getElementById("realUpload").click();
      }),
      (atEvery.prototype.delete = function (e) {
        function t(e) {
          if (!document.getElementById(e)) return;
          document.getElementById(e).style.display = "none";
        }
        function i(e) {
          if (!document.getElementById(e)) return;
          document.getElementById(e).style.display = "";
        }
        if (!AV.User.current()) {
          return void document.getElementById("pubShuo").click();
        }
        i("shade"),
          i("shanchur"),
          (document.getElementById("delete1").innerHTML =
            '<input type="button" class="at_button" value="' +
            v +
            '" id="Delete"><input type="button" class="at_button" value="' +
            x +
            '" id="cancelDelete">');
        let a = document.getElementById("cancelDelete"),
          n = document.getElementById("Delete");
        (a.onclick = function () {
          t("shade"), t("shanchur");
        }),
          (n.onclick = function () {
            a.click(), i("lazy");
            AV.Object.createWithoutData("shuoshuo", e)
              .destroy()
              .then(
                function (e) {
                  i("shade"), i("shanchu");
                },
                function (e) {
                  console.log(e.rawMessage);
                }
              );
          });
      });
  }),
  (atEvery.prototype.beginUpload = function (file) {
    function Show() {
      fadeIn("shade"), fadeIn("shuoshuo-modal");
    }
    let currentUser = AV.User.current();
    if (!currentUser) return void Show();
    if (!/\.(jpg|gif|jpeg|ico|png|svg|mp4|mov)$/.test(file.name))
      return void alert(
        "不支持的文件类型，支持的文件格式有jpg|gif|jpeg|ico|png|svg|mp4|mov"
      );
    let fileType = "",
      sourceSize = (file.size / 1024).toFixed(0),
      sourceSizeLimit = 51200;
    if (sourceSize > sourceSizeLimit)
      return void alert("资源上传最大限制为50M");
    function fadeIn(e) {
      if (!document.getElementById(e)) return;
      document.getElementById(e).style.display = "";
    }
    function fadeOut(e) {
      if (!document.getElementById(e)) return;
      document.getElementById(e).style.display = "none";
    }
    /\.(jpg|gif|jpeg|ico|png|svg)$/.test(file.name)
      ? (fileType = "image")
      : /\.(mp4|mov)$/.test(file.name) && (fileType = "video"),
      fadeIn("lazy");
    let data = new FormData();
    data.append("image", file);
    let xhr = new XMLHttpRequest();
    (xhr.withCredentials = !1),
      xhr.addEventListener("readystatechange", function () {
        if (4 === this.readyState && 200 === this.status) {
          let sourceUrl = eval("(" + this.responseText + ")"),
            sourceMd = "";
          "video" === fileType
            ? (sourceMd =
                '<video controls width="100%" height="auto"><source src="' +
                sourceUrl.data.url +
                '"></video>')
            : "image" === fileType &&
              (sourceMd = "![](" + sourceUrl.data.url + ")"),
            insertEmoji(sourceMd),
            document.getElementById("pubShuo").click(),
            fadeOut("lazy");
        } else 4 === this.readyState && 500 === this.status && fadeOut("lazy");
      }),
      xhr.open("POST", "https://7bu.top/api/upload");
    let imgToken = AV.User.current().attributes.imgToken;
    void 0 !== imgToken &&
      (xhr.setRequestHeader("Authorization", "Basic VGVzdDoxMjM0NTY="),
      xhr.setRequestHeader("token", imgToken)),
      xhr.send(data);
  }),
  (atEvery.prototype.seeContent = function (e, t) {
    let i = "",
      {
        lang: a,
        pageSize: n,
        motion: r,
        atEmoji: s,
        color1: o,
        color2: l,
        color3: c,
        atComment: d,
      } = this.config;
    switch (((a = void 0 === a || "" === a ? "zh" : a), a)) {
      case "zh":
        var h =
            "如果你看到这条说说，恭喜你已经配置成功并且可以正常使用了。当你发布一个说说之后，我将会自动消失。快去探索Artitalk吧<br>欢迎加入Artitalk的QQ交流群：1104585229<br>觉得本项目不错的话可以推荐给你的好友或者去GitHub点一个star，感谢支持",
          p = "请在下方输入框进行修改然后点击保存即可",
          u = "保存",
          g = "评论",
          m = "邮箱",
          f = "昵称";
        break;
      case "en":
        (h =
          "If you see this, congratulations, you have successfully configured and can be used normally. When you post one shuoshuo, I will disappear automatically. Quickly explore Artitalk.<br>Welcome to Artitalk’s QQ group: 1104585229<br>If you think this project is good, you can recommend it to your friends or go to GitHub to order a star."),
          (p = "Please modify it in the input box below and click save"),
          (u = "save"),
          (g = "comments"),
          (m = "Mailbox"),
          (f = "Nickname");
        break;
      case "es":
        (h =
          "Si ve este artículo, felicidades, se ha configurado correctamente y se puede usar normalmente. Cuando publiques un comentario, desapareceré automáticamente. Explore rápidamente Artitalk. <br> Bienvenido al grupo QQ de Artitalk: 1104585229 <br> Si cree que este proyecto es bueno, puede recomendarlo a sus amigos o ir a GitHub para pedir una estrella, gracias por su apoyo."),
          (p =
            "Por favor, introduzca las modificaciones en el cuadro de abajo y haga clic en guardar"),
          (u = "guardar"),
          (g = "comentarios"),
          (m = "Buzón"),
          (f = "Apodo");
    }
    function _(e) {
      if (!document.getElementById(e)) return;
      document.getElementById(e).style.display = "";
    }
    (o = void 0 === o || "" === o ? "RGBA(255, 125, 73, 0.75)" : o),
      (l = void 0 === l || "" === l ? "#9BCD9B" : l),
      (c = void 0 === c || "" === c ? "white" : c),
      (n = void 0 === n ? "5" : n),
      _("lazy");
    let k = new AV.Query("shuoshuo"),
      v = 0;
    k.descending("createdAt"),
      k.limit(n),
      k.skip(n * e),
      k.find().then(function (t) {
        (i = ""),
          t.forEach(function (e) {
            v += 1;
            let t = e.attributes.userOs,
              a = "";
            switch (t) {
              case "windows":
                a =
                  '<svg t="1591348521231"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16474" width="10" height="10"  style="display: inline"><path d="M412.224 511.904c-47.712-24.512-94.08-36.96-137.888-36.96-5.952 0-11.936 0.192-17.952 0.704-55.872 4.64-106.912 19.36-139.744 30.816-8.704 3.2-17.632 6.56-26.816 10.304l-89.824 311.392c61.696-22.816 116.288-33.952 166.272-33.952 80.832 0 139.52 30.208 188 61.312 22.976-77.92 78.048-266.08 94.496-322.336-11.936-7.296-24.064-14.56-36.512-21.312zM528.352 591.072l-90.432 314.144c26.816 15.36 117.088 64.064 186.208 64.064 55.808 0 118.24-14.304 190.848-43.808l86.368-301.984c-58.624 18.912-114.88 28.512-167.456 28.512-95.936 0-163.104-31.104-205.504-60.96zM292.832 368.8c77.12 0.8 134.144 30.208 181.408 60.512l92.768-317.344c-19.552-11.2-70.816-39.104-107.872-48.608-24.384-5.696-50.016-8.608-77.216-8.608-51.808 0.96-108.384 13.952-172.896 39.808l-88.448 310.592c64.8-24.448 120.64-36.352 172.096-36.352 0.032 0 0.128 0 0.128 0zM1024 198.112c-58.816 22.816-116.192 34.464-171.04 34.464-91.68 0-159.296-31.808-203.104-62.368l-91.936 318.24c61.76 39.712 128.288 59.872 198.112 59.872 56.96 0 115.936-13.664 175.456-40.672l-0.192-2.208 3.744-0.896 88.928-306.432z" p-id="16475" fill="' +
                  c +
                  '"></path></svg> ';
              case "Android":
                a =
                  '<svg t="1591349177001"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17355" width="10" height="10"  style="display: inline"><path d="M391.405714 276.004571a22.308571 22.308571 0 0 0 0-44.544c-11.995429 0-21.723429 10.276571-21.723428 22.272s9.728 22.272 21.723428 22.272z m241.152 0c11.995429 0 21.723429-10.276571 21.723429-22.272s-9.728-22.272-21.723429-22.272a22.308571 22.308571 0 0 0 0 44.544zM168.539429 381.147429a58.514286 58.514286 0 0 1 58.294857 58.294857v245.723428c0 32.585143-25.709714 58.843429-58.294857 58.843429S109.696 717.714286 109.696 685.165714v-245.723428c0-32 26.294857-58.294857 58.843429-58.294857z m605.732571 10.861714v380.562286c0 34.852571-28.013714 62.866286-62.281143 62.866285h-42.861714v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429s-58.843429-26.294857-58.843428-58.843429v-129.718857H472.594286v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429l-0.585143-129.718857H312.594286a62.683429 62.683429 0 0 1-62.866286-62.866285V392.009143h524.580571z m-132.571429-231.424c80.018286 41.142857 134.290286 119.990857 134.290286 210.870857H247.424c0-90.843429 54.272-169.728 134.838857-210.870857L341.705143 85.723429a8.338286 8.338286 0 0 1 2.852571-11.446858c3.986286-1.718857 9.142857-0.585143 11.446857 3.437715L397.147429 153.161143c34.852571-15.433143 73.728-23.990857 114.870857-23.990857s80.018286 8.557714 114.870857 23.990857l41.142857-75.446857c2.304-3.986286 7.424-5.156571 11.446857-3.437715a8.338286 8.338286 0 0 1 2.852572 11.446858zM914.267429 439.442286v245.723428c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429v-245.723428a58.148571 58.148571 0 0 1 58.294857-58.294857c32.585143 0 58.843429 25.709714 58.843429 58.294857z" fill="' +
                  c +
                  '" p-id="17356"></path></svg> ';
              case "Linux":
                a =
                  '<svg t="1591349455279"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17896" width="10" height="10"  style="display: inline"><path d="M833.828 772.167c-14.708-27.427-28.724-65.173-32.06-95.097-7.064-63.345 7.001-95.581-26.311-157.655-20.001-37.27-47.167-69.818-69.762-105.374-57.008-89.708-35.862-181.666-78.106-273.828-14.677-32.021-39.272-58.288-73.372-69.27-40.023-12.889-88.039-6.905-123.821 15.09-97.955 60.213-26.601 240.65-82.234 332.558-34.997 57.817-72.677 108.993-92.906 175.374-15.962 52.376-11.905 116.451-74.135 139.232-16.782 6.143-41.737 5.268-50.966 23.624-5.79 11.518-1.802 24.689 0.951 36.449 2.356 10.066 3.024 19.861 1.87 30.14-1.651 14.71-7.417 28.869-8.274 43.641-0.878 15.142 8.565 24.551 21.704 30.534 47.398 21.585 113.582 34.279 164.669 43.764 66.028 12.258 59.608-7.377 115.821-23.029 39.692-11.052 88.466-13.955 129.206-6.827 43.073 7.536 72.966 44.046 112.09 48.73 33.22 0 210.129-91.293 212.144-131.077 1.811-35.802-33.736-33.163-46.508-56.979zM561.696 188.612c34.429 24.892-1.788 99.81-14.799 87.114 41.625-32.641-34.982-83.122-29.425-11.704-53.249-11.693-3.247-109.731 44.224-75.41z m-4.039 117.923c1.857 28.37-64.491 48.349-85.296 56.455-79.455-0.65-53.966-82.141 7.617-88.858 11.889-1.296 76.451 13.646 77.679 32.403zM407.938 198.841c42.337-29.134 70.265 43.258 33.357 66.249 16.796-88.043-79.787-11.981-12.48 11.418-26.974 29.286-46.681-59.91-20.877-77.667z m-57.874 731.028c-38.514-10.84-181.601-28.379-200.949-63.937-0.276-0.507-0.351-2.272-0.282-4.883-0.019-0.032-0.042-0.063-0.06-0.095-0.833-1.415-0.113-8.165 1.246-16.547 1.879-19.977 5.394-46.894 6.514-49.347 12.905-28.267 12.771-23.836 21.86-26.291 5.612-3.079 13.887-7.607 27.549-19.429 37.781-32.691 49.648-51.05 71.076-37.382 8.427 2.949 16.297 11.207 25.986 25.067a570.9 570.9 0 0 1 8.53 10.204c16.954 20.727 55.205 71.093 68.786 114.074 13.447 30 13.992 58.501-30.256 68.566z m290.721-232.992c-16.92 43.195-1.196 82.899-35.488 120.646-58.579 64.48-168.292 61.287-220.377 1.598 61.991-24.918-79.397-135.334-84.198-181.037-10.461-99.563 81.484-201.457 102.457-296.773 77.359 82.013 125.198-33.75 189.934 21.718 50.436 43.215 102.409 212.603 87.712 277.829-8.345 37.034-32.364 36.425-40.04 56.019z m103.371 199.109c-159.991 95.734-70.13-147.276-65.785-178.44 11.336 103.265 74.062 18.695 110.579 7.453-17.789 5.477 57.616 96.436 56.788 86.041 3.123 39.223-63.176 61.965-101.582 84.946z" fill="' +
                  c +
                  '" p-id="17897"></path></svg> ';
              case "iOS":
                a =
                  '<svg t="1591349632686"  viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18688" width="10" height="10"  style="display: inline"><path d="M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z" p-id="18689" fill="' +
                  c +
                  '"></path></svg> ';
              case "Max":
                a =
                  '<svg t="1591349632686"  viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18688" width="10" height="10"  style="display: inline"><path d="M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z" p-id="18689" fill="' +
                  c +
                  '"></path></svg> ';
              default:
                a =
                  '<svg t="1591349738696"  viewBox="0 0 1168 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20407" width="10" height="10"  style="display: inline"><path d="M787.333831 588.946093a75.189984 75.189984 0 0 0-75.093984 75.092984 75.189984 75.189984 0 0 0 75.093984 75.093984 75.165984 75.165984 0 0 0 75.067984-75.093984 75.165984 75.165984 0 0 0-75.067984-75.092984m0 222.841953a147.919968 147.919968 0 0 1-147.749968-147.748969c0-81.455982 66.292986-147.747968 147.749968-147.747968 81.431983 0 147.747968 66.291986 147.747968 147.747968 0 81.480982-66.315986 147.748968-147.747968 147.748969m89.452981 102.106978c0.342 0.244 1.317 0.585 2.315999 0.585h0.122l71.484985-39.496992c-1.706-4.022999-9.605998-23.478995-9.605998-43.739991a113.858976 113.858976 0 0 1 107.739977-113.613975c0.853-4.729999 5.557999-31.524993 5.557998-51.639989s-4.704999-46.88399-5.559998-51.637989a113.858976 113.858976 0 0 1-107.737977-113.565976c0-20.357996 7.923998-39.813991 9.605998-43.81299l-70.313985-39.057992-0.293-0.025a5.339999 5.339999 0 0 0-2.706 0.732 196.753958 196.753958 0 0 1-26.014994 21.819995c-21.699995 15.239997-42.153991 22.967995-60.951987 22.967995-18.919996 0-39.594991-7.874998-61.390987-23.405995a194.705958 194.705958 0 0 1-26.160994-22.283995 5.777999 5.777999 0 0 0-2.729999-0.707h-0.245l-72.824985 40.032992c1.706 4.046999 9.579998 23.479995 9.579998 43.73999A113.858976 113.858976 0 0 1 528.896886 614.350088c-0.854 4.729999-5.509999 31.524993-5.509998 51.639989s4.655999 46.90799 5.533998 51.661989a113.858976 113.858976 0 0 1 107.763977 113.589975c0 20.334996-7.972998 39.863991-9.679998 43.788991l68.973985 38.545992h0.146c1.024 0 1.95-0.365 2.317-0.585a200.849957 200.849957 0 0 1 26.428994-23.161995c22.088995-16.188997 43.079991-24.429995 62.414987-24.429995 19.552996 0 40.715991 8.387998 62.949986 24.917995 14.921997 11.068998 25.259995 22.185995 26.551995 23.575995m22.673995 108.397976c-13.774997-0.025-27.135994-5.704999-35.765993-15.213996-11.775997-12.896997-49.005989-46.44599-79.530982-46.44599-30.280993 0-68.119985 33.767993-78.993984 45.54399-8.606998 9.386998-21.869995 14.969997-35.499992 14.969997-6.483999 0-12.603997-1.243-18.186996-3.706l-0.975-0.414-92.69698-51.833988-0.926-0.683a44.46999 44.46999 0 0 1-14.920996-53.735989c0.049-0.146 8.532998-19.699996 8.532998-37.594992a98.376979 98.376979 0 0 0-98.254979-98.254978h-3.900999c-15.505997 0-28.159994-13.799997-32.182993-35.108993-0.341-1.706-7.923998-42.178991-7.923999-74.044984 0-31.913993 7.557998-72.361984 7.899999-74.117984 4.119999-21.576995 16.992996-35.449992 32.816993-35.083993h3.266999a98.400979 98.400979 0 0 0 98.279979-98.303978c0-17.846996-8.484998-37.399992-8.559998-37.619992a44.34899 44.34899 0 0 1 15.068996-53.661989l0.95-0.658 97.839979-53.759988 1.025-0.415c5.485999-2.364999 11.507998-3.534999 17.895996-3.534999 13.604997 0 26.891994 5.436999 35.595992 14.629997 11.579998 12.115997 48.17699 43.640991 77.774984 43.64099 29.354994 0 65.755986-30.914993 77.287983-42.812991 8.654998-8.996998 21.844995-14.335997 35.302992-14.335997 6.509999 0 12.653997 1.22 18.285997 3.657l0.974999 0.414 94.47698 52.516988 0.95 0.658c16.895996 11.751997 23.332995 34.889993 14.945997 53.735989-0.05 0.146-8.532998 19.699996-8.532999 37.545992a98.400979 98.400979 0 0 0 98.254979 98.279978h3.29c15.775997-0.34 28.719994 13.506997 32.817993 35.107993 0.317 1.707 7.899998 42.203991 7.899998 74.069984 0 31.889993-7.582998 72.410984-7.949998 74.117984-4.045999 21.551995-16.991996 35.424992-32.766993 35.059993h-3.291a98.400979 98.400979 0 0 0-98.254979 98.278978c0 17.846996 8.483998 37.449992 8.556999 37.619992a44.42199 44.42199 0 0 1-15.017997 53.710989l-0.927 0.683-96.133979 53.100988-0.975 0.415a44.88499 44.88499 0 0 1-17.846996 3.583999z m222.061952-705.339848a48.76199 48.76199 0 1 1-97.523979 0V121.977194c0-13.457997-10.873998-24.453995-24.307995-24.453995H121.829974c-13.262997 0-24.306995 10.970998-24.306995 24.453995v584.995874c0 13.457997 10.873998 24.453995 24.307995 24.453995h219.499953a48.76199 48.76199 0 1 1 0 97.523979H48.908989A48.76199 48.76199 0 0 1 0 780.191052V48.76121C0 21.822215 21.893995 0.00022 48.907989 0.00022h1023.706781a48.76199 48.76199 0 0 1 48.907989 48.76199v268.189942zM219.427953 975.23701c0-26.940994 21.991995-48.76199 48.981989-48.761989h194.607959a48.76199 48.76199 0 1 1 0 97.523979H268.433942a48.76199 48.76199 0 0 1-49.005989-48.76199z" p-id="20408" fill="' +
                  c +
                  '"></path></svg> ';
            }
            let n = e.attributes.avatar;
            n =
              void 0 === n
                ? "https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png"
                : n;
            let r = AV.User.current() ? "" : 'style="display: none"',
              s = e.createdAt,
              o = new Date(s);
            function l(e) {
              return e < 10 ? "0" + e : e;
            }
            let h =
                o.getFullYear() +
                "-" +
                l(o.getMonth() + 1) +
                "-" +
                l(o.getDate()),
              p =
                l(o.getHours()) +
                ":" +
                l(o.getMinutes()) +
                ":" +
                l(o.getSeconds()),
              u = o.getHours(),
              g = "";
            switch (g) {
              case u >= 0 && u < 5:
                g =
                  '<svg t="1591350196611"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24683" width="10" height="10"  style="display: inline"><path d="M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z" fill="' +
                  c +
                  '" p-id="24684"></path></svg> ';
              case u >= 5 && u < 6:
                g =
                  '<svg t="1591350273094"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24973" width="10" height="10"  style="display: inline"><path d="M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z" fill="' +
                  c +
                  '" p-id="24974"></path></svg> ';
              case u >= 6 && u < 8:
                g =
                  '<svg t="1591350470149"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25217" width="10" height="10"  style="display: inline"><path d="M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z" fill="' +
                  c +
                  '" p-id="25218"></path></svg> ';
              case u >= 8 && u < 11:
                g =
                  '<svg t="1591350526184"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26011" width="10" height="10"  style="display: inline"><path d="M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z" p-id="26012" fill="' +
                  c +
                  '"></path></svg> ';
              case u >= 11 && u < 13:
                g =
                  '<svg t="1591350817881"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29283" width="10" height="10"  style="display: inline"><path d="M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0" p-id="29284" fill="' +
                  c +
                  '"></path></svg> ';
              case u >= 13 && u < 17:
                g =
                  '<svg t="1591350596667"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27504" width="10" height="10"  style="display: inline"><path d="M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z" p-id="27505" fill="' +
                  c +
                  '"></path></svg> ';
              case u >= 17 && u < 18:
                g =
                  '<svg t="1591350638906"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27813" width="10" height="10"  style="display: inline"><path d="M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z" p-id="27814" fill="' +
                  c +
                  '"></path><path d="M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z" p-id="27815" fill="' +
                  c +
                  '"></path></svg> ';
              case u >= 18 && u < 21:
                g =
                  '<svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10"  style="display: inline"><path d="M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z" p-id="28654" fill="' +
                  c +
                  '"></path></svg> ';
            }
            let m = "";
            0 === d && (m = "display: none");
            let f = e.id,
              _ = e.attributes.atContentHtml;
            i +=
              '<li><span class="shuoshuo_author_img" onclick=\'atEvery.prototype.atEdit("' +
              f +
              "\")'><img  id='atAvatar" +
              f +
              "'  src=\"" +
              n +
              '"class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel" id=\'atId' +
              f +
              "' ><div " +
              r +
              "id='operate" +
              f +
              '\'  class="delete_right"><svg t="1591347978744"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14459" width="20" height="20" style="display: inline"  onclick="atEvery.prototype.delete(\'' +
              f +
              '\')"  ><path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z" p-id="14460" fill="' +
              c +
              '"></path><path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z" p-id="14461" fill="' +
              c +
              "\"></path></svg></div><div id='forEdit" +
              f +
              "'>" +
              _ +
              '</div><p class="shuoshuo_time"><span style="">  ' +
              a +
              t +
              "</span><span>&nbsp&nbsp" +
              g +
              h +
              " " +
              p +
              "</span><span style='float: right'><span style='" +
              m +
              ";vertical-align:top;' onclick='atEvery.prototype.commentInit(\"" +
              f +
              "\")'  id='atCoInit" +
              f +
              "'>" +
              ('<svg t="1599605913184" class="icon" viewBox="0 0 1024 1024" cursor="pointer" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3173" width="16" height="16" fill="' +
                c +
                '"><path d="M512 0C226.742857 0 0 197.485714 0 446.171429c0 138.971429 73.142857 270.628571 190.171429 351.085714L190.171429 1024l226.742857-138.971429c29.257143 7.314286 65.828571 7.314286 95.085714 7.314286 285.257143 0 512-197.485714 512-446.171429C1024 197.485714 797.257143 0 512 0zM256 512C219.428571 512 190.171429 482.742857 190.171429 446.171429S219.428571 380.342857 256 380.342857c36.571429 0 65.828571 29.257143 65.828571 65.828571S292.571429 512 256 512zM512 512C475.428571 512 446.171429 482.742857 446.171429 446.171429S475.428571 380.342857 512 380.342857c36.571429 0 65.828571 29.257143 65.828571 65.828571S548.571429 512 512 512zM768 512C731.428571 512 702.171429 482.742857 702.171429 446.171429s29.257143-65.828571 65.828571-65.828571c36.571429 0 65.828571 29.257143 65.828571 65.828571S804.571429 512 768 512z" p-id="3174" fill="' +
                c +
                '"></path></svg>') +
              "<span style='padding: 0 0 0 8px;color:" +
              c +
              "'; id= 'coValue" +
              f +
              "'>loading</span></span>&nbsp<span style='vertical-align:top;' id='" +
              f +
              "'></span></p></span></li>";
          });
        let a = document.getElementById("ccontent").innerHTML;
        (a = "" === a ? '<ul class="cbp_tmtimeline" id="maina">' : a),
          (a = a.replace(/(.*)<\/ul>/, "$1 ")),
          (a += i + "</ul>"),
          0 === v &&
            0 === e &&
            (a =
              '<ul class="cbp_tmtimeline" id="maina"><li><span class="shuoshuo_author_img"><img src="https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png" class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel"><p>' +
              h +
              '</p><p class="shuoshuo_time"><span style=""> 由Artitalk发表</span><span style="float:right;"><svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10" style="display: inline"></svg> 2020-04-10 20:35:25</span></p></span></li></ul>'),
          (document.getElementById("ccontent").innerHTML = a),
          0 !== d &&
            t.forEach(function (e) {
              let t = new AV.Query("atComment"),
                i = e.id;
              t.equalTo("atId", i),
                t.descending("createdAt"),
                t.find().then((e) => {
                  let t = "coValue" + i;
                  document.getElementById(t).innerHTML = e.length;
                });
            }),
          (function (e) {
            if (!document.getElementById(e)) return;
            document.getElementById(e).style.display = "none";
          })("lazy"),
          0 !== v
            ? _("readmore")
            : 0 !== e &&
              ((document.getElementById("readButton").innerHTML =
                "<center>已经到底了哦~</center>"),
              (document.getElementById("readButton").style.opacity = "0.5"));
      }),
      (atEvery.prototype.atEdit = function (e) {
        function t(e) {
          if (!document.getElementById(e)) return;
          document.getElementById(e).style.display = "none";
        }
        if (!AV.User.current()) return;
        !(function (e) {
          if (!document.getElementById(e)) return;
          document.getElementById(e).style.display = "";
        })("lazy");
        let i = new AV.Query("shuoshuo");
        i.equalTo("objectId", e),
          i.find().then((i) => {
            i.forEach(function (i) {
              let a =
                '<ul class="cbp_tmtimeline" id="maina"><li><span class="shuoshuo_author_img"><img src="https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png" class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel"><p>' +
                p +
                '</p><p class="shuoshuo_time"><span style=""> 由Artitalk发表</span><span style="float:right;"><svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10" style="display: inline"></svg> 2020-04-10 20:35:25</span></p></span></li></ul>';
              document.getElementById("ccontent").innerHTML = a;
              let n = document.getElementById("atSave");
              (n.id = "atEditsaveButton"),
                (document.getElementById("atEditsaveButton").innerHTML = u),
                t("readmore"),
                n.setAttribute(
                  "onclick",
                  'atEvery.prototype.atEditsave("' + e + '")'
                ),
                pubShuo.click(),
                (document.getElementById("neirong").value =
                  i.attributes.atContentMd),
                t("lazy");
            });
          });
      }),
      (atEvery.prototype.atEditsave = function (e) {
        _("lazy"),
          (document.getElementById("preview").onclick = function () {
            let e = document.getElementById("preview");
            -1 !== e.className.indexOf("preview_now")
              ? e.classList.remove("preview_now")
              : e.classList.add("preview_now");
          });
        let t = document.getElementById("neirong").value,
          i = t,
          a = AV.Object.createWithoutData("shuoshuo", e);
        if (
          (a.set("atContentMd", i),
          (t = (function (e) {
            if (void 0 !== e) {
              for (let t in atEmojiQQ) {
                let i = "[" + t + "]",
                  a =
                    "<img class='atemoji gallery-group-img' src='" +
                    atEmojiQQ[t] +
                    "'/>";
                for (; -1 != e.indexOf(i); ) e = e.replace(i, a);
              }
              for (let t in atEmojiTB) {
                let i = "[" + t + "]",
                  a =
                    "<img class='atemoji gallery-group-img' src='" +
                    atEmojiTB[t] +
                    "'/>";
                for (; -1 != e.indexOf(i); ) e = e.replace(i, a);
              }
              for (let t in atEmojiBB) {
                let i = "[" + t + "]",
                  a =
                    "<img class='atemoji gallery-group-img' src='" +
                    atEmojiBB[t] +
                    "'/>";
                for (; -1 != e.indexOf(i); ) e = e.replace(i, a);
              }
              for (let t in s) {
                let i = "[" + t + "]",
                  a =
                    "<img class='atemoji gallery-group-img' src='" +
                    s[t] +
                    "'/>";
                for (; -1 != e.indexOf(i); ) e = e.replace(i, a);
              }
              return e;
            }
          })(t)),
          "" === t)
        )
          return void location.reload();
        let n = new showdown.Converter();
        n.setOption("strikethrough", 1);
        let r = n.makeHtml(t);
        a.set("atContentHtml", r),
          a.save().then(function () {
            location.reload();
          });
      }),
      (atEvery.prototype.saveComment = function (e, t) {
        function i(e) {
          if (!document.getElementById(e)) return;
          document.getElementById(e).style.display = "none";
        }
        (document.getElementById("shuoshuo_input").style.display = "none"),
          (function (e) {
            if (!document.getElementById(e)) return;
            document.getElementById(e).style.display = "";
          })("lazy");
        let a = document.getElementById("neirong").value,
          n = new (AV.Object.extend("atComment"))();
        a = (function (e) {
          if (void 0 !== e) {
            for (let t in atEmojiQQ) {
              let i = "[" + t + "]",
                a =
                  "<img class='atemoji gallery-group-img' src='" +
                  atEmojiQQ[t] +
                  "'/>";
              for (; -1 != e.indexOf(i); ) e = e.replace(i, a);
            }
            for (let t in atEmojiTB) {
              let i = "[" + t + "]",
                a =
                  "<img class='atemoji gallery-group-img' src='" +
                  atEmojiTB[t] +
                  "'/>";
              for (; -1 != e.indexOf(i); ) e = e.replace(i, a);
            }
            for (let t in atEmojiBB) {
              let i = "[" + t + "]",
                a =
                  "<img class='atemoji gallery-group-img' src='" +
                  atEmojiBB[t] +
                  "'/>";
              for (; -1 != e.indexOf(i); ) e = e.replace(i, a);
            }
            for (let t in s) {
              let i = "[" + t + "]",
                a =
                  "<img class='atemoji gallery-group-img' src='" + s[t] + "'/>";
              for (; -1 != e.indexOf(i); ) e = e.replace(i, a);
            }
            return e;
          }
        })(a);
        let r = new showdown.Converter();
        r.setOption("strikethrough", 1);
        let o = r.makeHtml(a),
          l = AV.User.current(),
          d = document.getElementById("email").value,
          h = document.getElementById("commentNick").value,
          p = md5(d);
        if (!l && ("" === h || "" === d))
          return (
            (document.getElementById("neirong").value =
              "昵称，邮箱均为必填项\n" +
              document.getElementById("neirong").value),
            void i("lazy")
          );
        let u = "https://cdn.staticdn.net/avatar/" + p + "?d=mp&s=80",
          g = new Date();
        function m(e) {
          return e < 10 ? "0" + e : e;
        }
        let f =
            g.getFullYear() + "-" + m(g.getMonth() + 1) + "-" + m(g.getDate()),
          _ =
            m(g.getHours()) + ":" + m(g.getMinutes()) + ":" + m(g.getSeconds()),
          k = g.getHours(),
          v = "";
        switch (v) {
          case k >= 0 && k < 5:
            v =
              '<svg t="1591350196611"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24683" width="10" height="10"  style="display: inline"><path d="M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z" fill="' +
              c +
              '" p-id="24684"></path></svg> ';
          case k >= 5 && k < 6:
            v =
              '<svg t="1591350273094"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24973" width="10" height="10"  style="display: inline"><path d="M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z" fill="' +
              c +
              '" p-id="24974"></path></svg> ';
          case k >= 6 && k < 8:
            v =
              '<svg t="1591350470149"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25217" width="10" height="10"  style="display: inline"><path d="M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z" fill="' +
              c +
              '" p-id="25218"></path></svg> ';
          case k >= 8 && k < 11:
            v =
              '<svg t="1591350526184"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26011" width="10" height="10"  style="display: inline"><path d="M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z" p-id="26012" fill="' +
              c +
              '"></path></svg> ';
          case k >= 11 && k < 13:
            v =
              '<svg t="1591350817881"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29283" width="10" height="10"  style="display: inline"><path d="M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0" p-id="29284" fill="' +
              c +
              '"></path></svg> ';
          case k >= 13 && k < 17:
            v =
              '<svg t="1591350596667"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27504" width="10" height="10"  style="display: inline"><path d="M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z" p-id="27505" fill="' +
              c +
              '"></path></svg> ';
          case k >= 17 && k < 18:
            v =
              '<svg t="1591350638906"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27813" width="10" height="10"  style="display: inline"><path d="M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z" p-id="27814" fill="' +
              c +
              '"></path><path d="M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z" p-id="27815" fill="' +
              c +
              '"></path></svg> ';
          case k >= 18 && k < 21:
            v =
              '<svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10"  style="display: inline"><path d="M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z" p-id="28654" fill="' +
              c +
              '"></path></svg> ';
        }
        if (l) {
          let e =
            void 0 === l.attributes.img
              ? "https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png"
              : l.attributes.img;
          n.set("adminAvatar", e), (u = e), (h = l.attributes.username);
        }
        n.set("atId", e),
          n.set("commentContent", o),
          l || n.set("email", p),
          n.set("nick", h),
          n.save().then(function (e) {
            let t =
                '<span style="float: right"><svg t="1599635243920" cursor="pointer" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2431" width="16" height="16" fill="' +
                c +
                '"><path d="M853.3 893.6c-17.5 0-34.6-6.8-47.5-19.8l-44.4-44.4c-77.9-78.3-133-133.6-221.7-147.3v119.6c0 27.3-16.3 51.6-41.5 62.1s-53.9 4.7-73.2-14.6l-302-302c-26.2-26.2-26.2-68.8 0-95l302.1-302.1c19.3-19.3 48-25 73.2-14.6 25.2 10.4 41.5 34.8 41.5 62.1v145.5c140.6 4.1 249.5 73.7 315.4 202.1 48.2 93.9 65.4 206.8 65.4 281.2 0 27.3-16.3 51.7-41.5 62.1-8.3 3.4-17.1 5.1-25.8 5.1zM450.2 589.3H495c153.9 0 235.5 82 330 177l2.5 2.5c-5.4-48.3-18.7-118-52-182.6-52.3-101.9-136.1-153.6-248.8-153.6h-76.5V251.7l-248 248 248 248V589.3z" p-id="2432" fill="' +
                c +
                '"></path></svg></span>',
              a = document.getElementById("ccontent").innerHTML,
              n =
                '<li style="margin: 0 0 0 48px"><span class="shuoshuo_author_img"><img src="' +
                u +
                '"class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel"  >  <div>' +
                o +
                '</div><p class="shuoshuo_time"><span>' +
                h +
                "</span><span>&nbsp&nbsp" +
                v +
                f +
                " " +
                _ +
                t +
                "</span></p></span></li>",
              r = a.indexOf("</li>") + 5,
              s = a.slice(0, r) + n + a.slice(r);
            (document.getElementById("ccontent").innerHTML = ""),
              (document.getElementById("neirong").value = ""),
              (document.getElementById("email").value = ""),
              (document.getElementById("commentNick").value = ""),
              (document.getElementById("ccontent").innerHTML = s),
              i("preview"),
              i("lazy");
          });
      }),
      (atEvery.prototype.atReplay = function () {
        document.getElementById("pubComment").click();
      }),
      (atEvery.prototype.commentInit = function (e, t) {
        function i(e) {
          if (!document.getElementById(e)) return;
          document.getElementById(e).style.display = "";
        }
        function a(e) {
          if (!document.getElementById(e)) return;
          document.getElementById(e).style.display = "none";
        }
        document.getElementById("neirong").placeholder = "";
        let n = "atCoInit" + e;
        a("coValue" + e),
          document
            .getElementById(n)
            .setAttribute("onclick", "location.reload()"),
          i("commentNick"),
          a("atSave"),
          i("commentSave"),
          i("lazy"),
          i("pubComment"),
          a("readmore"),
          a("pubShuo"),
          a("switchUser"),
          (document.getElementById("pubComment").title = g),
          (document.getElementById("pubComment").style.display = "inline"),
          (document.getElementById("pubComment").onclick = function () {
            "" === document.getElementById("shuoshuo_input").style.display
              ? a("shuoshuo_input")
              : i("shuoshuo_input");
          }),
          (document.getElementById("email").placeholder = m),
          (document.getElementById("commentNick").placeholder = f);
        let r = document.getElementById("atId" + e).innerHTML,
          s =
            '<ul class="cbp_tmtimeline" id="maina"><li><span class="shuoshuo_author_img"><img src="' +
            document.getElementById("atAvatar" + e).src +
            '" class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel">' +
            r +
            "</p></span></li></ul>";
        document.getElementById("ccontent").innerHTML = s;
        let o = "",
          l = AV.User.current(),
          d = new AV.Query("atComment");
        d.equalTo("atId", e),
          d.descending("createdAt"),
          d
            .find()
            .then((e) => {
              e.forEach(function (e) {
                let t = e.createdAt;
                function i(e) {
                  return e < 10 ? "0" + e : e;
                }
                let a = new Date(t),
                  n =
                    a.getFullYear() +
                    "-" +
                    i(a.getMonth() + 1) +
                    "-" +
                    i(a.getDate()),
                  r =
                    i(a.getHours()) +
                    ":" +
                    i(a.getMinutes()) +
                    ":" +
                    i(a.getSeconds()),
                  s = a.getHours(),
                  l = "";
                switch (l) {
                  case s >= 0 && s < 5:
                    l =
                      '<svg t="1591350196611"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24683" width="10" height="10"  style="display: inline"><path d="M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z" fill="' +
                      c +
                      '" p-id="24684"></path></svg> ';
                  case s >= 5 && s < 6:
                    l =
                      '<svg t="1591350273094"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24973" width="10" height="10"  style="display: inline"><path d="M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z" fill="' +
                      c +
                      '" p-id="24974"></path></svg> ';
                  case s >= 6 && s < 8:
                    l =
                      '<svg t="1591350470149"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25217" width="10" height="10"  style="display: inline"><path d="M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z" fill="' +
                      c +
                      '" p-id="25218"></path></svg> ';
                  case s >= 8 && s < 11:
                    l =
                      '<svg t="1591350526184"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26011" width="10" height="10"  style="display: inline"><path d="M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z" p-id="26012" fill="' +
                      c +
                      '"></path></svg> ';
                  case s >= 11 && s < 13:
                    l =
                      '<svg t="1591350817881"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29283" width="10" height="10"  style="display: inline"><path d="M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0" p-id="29284" fill="' +
                      c +
                      '"></path></svg> ';
                  case s >= 13 && s < 17:
                    l =
                      '<svg t="1591350596667"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27504" width="10" height="10"  style="display: inline"><path d="M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z" p-id="27505" fill="' +
                      c +
                      '"></path></svg> ';
                  case s >= 17 && s < 18:
                    l =
                      '<svg t="1591350638906"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27813" width="10" height="10"  style="display: inline"><path d="M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z" p-id="27814" fill="' +
                      c +
                      '"></path><path d="M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z" p-id="27815" fill="' +
                      c +
                      '"></path></svg> ';
                  case s >= 18 && s < 21:
                    l =
                      '<svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10"  style="display: inline"><path d="M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z" p-id="28654" fill="' +
                      c +
                      '"></path></svg> ';
                }
                let d = e.attributes.commentContent,
                  h = e.attributes.nick,
                  p = e.attributes.email,
                  u = e.attributes.adminAvatar,
                  g = "https://cdn.staticdn.net/avatar/" + p + "?d=mp&s=80";
                void 0 !== u && (g = u),
                  (o +=
                    '<li style="margin: 0 0 0 48px"><span class="shuoshuo_author_img"><img src="' +
                    g +
                    '"class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel"  >  <div>' +
                    d +
                    '</div><p class="shuoshuo_time"><span>' +
                    h +
                    "</span><span>&nbsp&nbsp" +
                    l +
                    n +
                    " " +
                    r +
                    ('<span style="float: right"><svg t="1599635243920" onclick=\'atEvery.prototype.atReplay()\' cursor="pointer" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2431" width="16" height="16" fill="' +
                      c +
                      '"><path d="M853.3 893.6c-17.5 0-34.6-6.8-47.5-19.8l-44.4-44.4c-77.9-78.3-133-133.6-221.7-147.3v119.6c0 27.3-16.3 51.6-41.5 62.1s-53.9 4.7-73.2-14.6l-302-302c-26.2-26.2-26.2-68.8 0-95l302.1-302.1c19.3-19.3 48-25 73.2-14.6 25.2 10.4 41.5 34.8 41.5 62.1v145.5c140.6 4.1 249.5 73.7 315.4 202.1 48.2 93.9 65.4 206.8 65.4 281.2 0 27.3-16.3 51.7-41.5 62.1-8.3 3.4-17.1 5.1-25.8 5.1zM450.2 589.3H495c153.9 0 235.5 82 330 177l2.5 2.5c-5.4-48.3-18.7-118-52-182.6-52.3-101.9-136.1-153.6-248.8-153.6h-76.5V251.7l-248 248 248 248V589.3z" p-id="2432" fill="' +
                      c +
                      '"></path></svg></span>') +
                    "</span></p></span></li>");
              });
              let t = document.getElementById("ccontent").innerHTML;
              (t = t.replace(/(.*)<\/ul>/, "$1 ")),
                (t += o + "</ul>"),
                (document.getElementById("ccontent").innerHTML = t);
            })
            .then(function () {
              i("email"),
                l && (a("commentNick"), a("email")),
                i("email"),
                a("lazy");
            }),
          (document.getElementById("commentSave").onclick = function () {
            atEvery.prototype.saveComment(e, t);
          });
      });
  });
//# sourceMappingURL=/sm/7bf1d3e67fed3a14a68dab9f8281b5e18bd153a92dfb35303e042643effb0584.map
